---
title: "Evince/fwdevince"
url: "/Evince/fwdevince/"
date: 2013-05-22T03:36:11Z
pukiwiki: "Evince/fwdevince"
---

# Evince/fwdevince

[Evince](/Evince/) > fwdevince

## fwdevince とは {#h085e412}

fwdevince は Linux の Evince で forward and inverse search を行うためのツールです．<br>
TeX Live 2013, Evince 3.8.0, Python 3.3.2 または Python 2.7.5 で動作確認しています．<br>
fwdevince がうまく動作しない場合は

- fwdevince をうまく動作するように修正する
- evince_synctex (evince_forward_search &amp; evince_backward_search) を使用する

などの方法で対処してください．<br>

***

- fwdevince

***

```
#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Copyright (C) 2010 Jose Aliste
#               2011 Benjamin Kellermann
#
# This program is free software; you can redistribute it and/or modify it under
# the terms of the GNU General Public Licence as published by the Free Software
# Foundation; either version 2 of the Licence, or (at your option) any later
# version.
#
# This program is distributed in the hope that it will be useful, but WITHOUT
# ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
# FOR A PARTICULAR PURPOSE.  See the GNU General Public Licence for more
# details.
#
# You should have received a copy of the GNU General Public Licence along with
# this program; if not, write to the Free Software Foundation, Inc., 51 Franklin
# Street, Fifth Floor, Boston, MA  02110-1301, USA

import dbus
import argparse
import os.path
import traceback
import sys

if sys.version_info >= (3, 0, 0):
    from urllib.parse import quote, unquote
else:
    from urllib import quote, unquote

class EvinceForwardSearch:
    def parse_args(self):
        parser = argparse.ArgumentParser(description='Forward search with Evince')
        parser.add_argument('pdf', nargs=1, help='PDF file')
        parser.add_argument('line', nargs=1, type=int, help='Line')
        parser.add_argument('tex', nargs=1, help='TeX file')
        return parser.parse_args()

    def run(self):
        args = self.parse_args()
        pdf = os.path.abspath(args.pdf[0]).replace(" ", "%20")
        line = int(args.line[0])
        tex = os.path.join(os.path.dirname(os.path.abspath(args.tex[0])), './', os.path.basename(os.path.abspath(args.tex[0])))

        try:
            import time
            bus = dbus.SessionBus()
            daemon = bus.get_object('org.gnome.evince.Daemon', '/org/gnome/evince/Daemon')
            dbus_name = daemon.FindDocument('file://' + quote(pdf, safe="%/:=&?~#+!$,;'@()*[]"), True, dbus_interface='org.gnome.evince.Daemon')
            window = bus.get_object(dbus_name, '/org/gnome/evince/Window/0')
            time.sleep(0.2)
            window.SyncView(tex, (line, 1), 0, dbus_interface='org.gnome.evince.Window')
        except dbus.DBusException:
            traceback.print_exc()

class EvinceInverseSearch:
    def parse_args(self):
        parser = argparse.ArgumentParser(description='Inverse search with Evince')
        parser.add_argument('pdf', nargs=1, help='PDF file')
        parser.add_argument('editor', nargs=1, help='Editor command')
        return parser.parse_args()

    def run(self):
        import dbus.mainloop.glib
        from gi.repository import GObject
        args = self.parse_args()
        pdf = os.path.abspath(args.pdf[0])
        editor = args.editor[0]
        dbus.mainloop.glib.DBusGMainLoop(set_as_default=True)
        a = EvinceWindowProxy('file://' + pdf, editor, True)
        loop = GObject.MainLoop()
        loop.run()

class EvinceWindowProxy:
    """A Dbus proxy for an Evince Window."""
    daemon = None
    bus = None

    RUNNING = range(2)
    CLOSED = range(2)
    EV_DAEMON_PATH = '/org/gnome/evince/Daemon'
    EV_DAEMON_NAME = 'org.gnome.evince.Daemon'
    EV_DAEMON_IFACE = 'org.gnome.evince.Daemon'

    EVINCE_PATH = '/org/gnome/evince/Evince'
    EVINCE_IFACE = 'org.gnome.evince.Application'

    EV_WINDOW_IFACE = 'org.gnome.evince.Window'

    def __init__(self, uri, editor, apawn=False, logger=None):
        self._log = logger
        self.uri = uri.replace(" ", "%20")
        self.editor = editor
        self.status = self.CLOSED
        self.source_handler = None
        self.dbus_name = ''
        self._handler = None
        try:
            if EvinceWindowProxy.bus is None:
                EvinceWindowProxy.bus = dbus.SessionBus()

            if EvinceWindowProxy.daemon is None:
                EvinceWindowProxy.daemon = EvinceWindowProxy.bus.get_object(self.EV_DAEMON_NAME,
                    self.EV_DAEMON_PATH,
                    follow_name_owner_changes=True)
            EvinceWindowProxy.bus.add_signal_receiver(self._on_doc_loaded,
                signal_name='DocumentLoaded',
                dbus_interface=self.EV_WINDOW_IFACE,
                sender_keyword='sender')
            self._get_dbus_name(False)
        except dbus.DBusException:
            traceback.print_exc()
            if self._log:
                self._log.debug('Could not connect to the Evince Daemon')

    def _on_doc_loaded(self, uri, **keyargs):
        if uri == self.uri and self._handler is None:
            self.handle_find_document_reply(keyargs['sender'])

    def _get_dbus_name(self, spawn):
        EvinceWindowProxy.daemon.FindDocument(self.uri, spawn,
                     reply_handler=self.handle_find_document_reply,
                     error_handler=self.handle_find_document_error,
                     dbus_interface = self.EV_DAEMON_IFACE)

    def handle_find_document_error(self, error):
        if self._log:
            self._log.debug('FindDocument DBus call has failed')

    def handle_find_document_reply(self, evince_name):
        if self._handler is not None:
            handler = self._handler
        else:
            handler = self.handle_get_window_list_reply
        if evince_name != '':
            self.dbus_name = evince_name
            self.status = self.RUNNING
            self.evince = EvinceWindowProxy.bus.get_object(self.dbus_name, self.EVINCE_PATH)
            self.evince.GetWindowList(dbus_interface = self.EVINCE_IFACE,
                          reply_handler = handler,
                          error_handler = self.handle_get_window_list_error)

    def handle_get_window_list_error (self, e):
        if self._log:
            self._log.debug("GetWindowList DBus call has failed")

    def handle_get_window_list_reply (self, window_list):
        if len(window_list) > 0:
            window_obj = EvinceWindowProxy.bus.get_object(self.dbus_name, window_list[0])
            self.window = dbus.Interface(window_obj,self.EV_WINDOW_IFACE)
            self.window.connect_to_signal("SyncSource", self.on_sync_source)
        else:
            #That should never happen. 
            if self._log:
                self._log.debug("GetWindowList returned empty list")

    def on_sync_source(self, input_file, source_link, timestamp):
        import subprocess
        import re
        print(input_file + ':' + str(source_link[0]))
        # This is probably useless
        input_file = input_file.replace("%20", " ")
        # This is to deal with source files with non-ascii names
        # We get url-quoted UTF-8 from dbus; convert to url-quoted ascii
        # and then unquote. If you don't first convert ot ascii, it fails.
        # It's a bit magical, but it seems to work
        #input_file = unquote(input_file.encode('ascii'))
        input_file = unquote(input_file)
        print(type(input_file), input_file)
        #cmd = re.sub("%f", input_file, self.editor)
        cmd = re.sub("%f", input_file.replace('file://', ''), self.editor)
        cmd = re.sub("%l", str(source_link[0]), cmd)
        print(cmd)
        subprocess.call(cmd, shell=True)
        if self.source_handler is not None:
            self.source_handler(input_file, source_link, timestamp)

if __name__ == '__main__':
    cmd = os.path.basename(sys.argv[0])
    if cmd == 'fwdevince' or cmd == 'evince_forward_search':
        synctexSearch = EvinceForwardSearch()
        synctexSearch.run()
    elif cmd == 'invevince' or cmd == 'bwdevince' or cmd == 'evince_inverse_search' or cmd == 'evince_backward_search':
        synctexSearch = EvinceInverseSearch()
        synctexSearch.run()
    else:
        sys.stderr.write("rename 'fwdevince' or 'invevince'\n")
        sys.exit(1)
```

***

```
$ chmod +x fwdevince
$ sudo cp -p fwdevince /usr/local/bin
$ sudo ln -s /usr/local/bin/fwdevince /usr/local/bin/invevince
```

fwdevince は例えば

```
$ fwdevince hoge.pdf 30 hoge.tex
```

のように実行すると Evince が起動して PDF ファイルの対応する行が赤い枠で囲まれて表示されます．

invevince は例えば [TeXworks](/TeXworks/) の場合は

```
$ evince hoge.pdf &
$ invevince hoge.pdf 'texworks --position=%l "%f"'
```

のように実行して Evince 上で Ctrl + 左クリックを実行すると TeXworks が起動して TeX 文書の対応する行にジャンプします．<br>

## evince_synctex (evince_forward_search &amp; evince_backward_search) {#bb04e129}

evince_synctex (evince_forward_search &amp; evince_backward_search) は Linux の Evince で forward and inverse search を行うためのツールです．<br>

- [LaTeXTools/evince at master · SublimeText/LaTeXTools · GitHub](https://github.com/SublimeText/LaTeXTools/tree/master/evince)
- [synctex + gedit + evince](http://www.benwhale.com/blog/2011/06/26/synctex-gedit-evince/)
- \[[SOLVED\] HOWTO: Evince + SyncTeX + vim/emacs/scite/lyx/kile/$EDITOR + forward/backward search - Ubuntu Forums](http://ubuntuforums.org/showthread.php?t=1716268)
- \[[SOLVED\] HOWTO: Evince + SyncTeX + vim/emacs/scite/lyx/kile/$EDITOR + forward/backward search \[Archive\]  - Ubuntu Forums](http://ubuntuforums.org/archive/index.php/t-1716268.html)

#### 注意点 {#s90f2b11}

evince_forward_search で

```
pdf_file = os.path.abspath(sys.argv[1])
```

を

```
#pdf_file = os.path.abspath(sys.argv[1])
pdf_file = os.path.abspath(sys.argv[1]).replace(" ", "%20")
```

に修正します．<br>

evince_backward_search で

```
self.uri = uri
```

を

```
#self.uri = uri
self.uri = uri.replace(" ", "%20")
```

に修正して

```
    def on_sync_source(self, input_file, source_link):
        print input_file + ":" + str(source_link[0])
```

を

```
    def on_sync_source(self, input_file, source_link):
        input_file = input_file.replace("%20", " ")
        print input_file + ":" + str(source_link[0])
```

に修正します．<br>

TeX Live 2011 以降では SyncTeX が出力するファイル名が TeX Live 2010 とは異なっています．<br>
evince_forward_search で

```
tex_file = os.path.abspath(sys.argv[3])
```

となっていますが，この場合フルパス表記 /dirname/basename.tex になってしまうので，/dirname/./basename.tex の場合に forward search ができません．<br>
tex_file の値を適切な値になるように修正すれば forward search が可能になります．

```
#tex_file = os.path.abspath(sys.argv[3])
tex_file = os.path.join(os.path.dirname(os.path.abspath(sys.argv[3])), './', os.path.basename(os.path.abspath(sys.argv[3])))
```

evince_forward_search を

```
#window.SyncView(tex, (line,1), dbus_interface="org.gnome.evince.Window")
window.SyncView(tex, (line,1), 0, dbus_interface="org.gnome.evince.Window")
```

に修正して evince_backward_search を

```
#    def on_sync_source(self, input_file, source_link):
    def on_sync_source(self, input_file, source_link, timestamp):
        print input_file + ":" + str(source_link[0])
        cmd = re.sub("%f",input_file,self.editor)
        cmd = re.sub("%l",str(source_link[0]), cmd)
        print cmd
        subprocess.call(cmd, shell=True)
        if self.source_handler is not None:
#            self.source_handler(input_file, source_link)
            self.source_handler(input_file, source_link, timestamp)
```

に修正します．

Okular にも同様の問題が発生していたようです．

- [Emacs/AUCTeX: Rewriting the Okular-make-url function to work with new synctex (full path + “./”) syntax](http://stackoverflow.com/questions/6898710/emacs-auctex-rewriting-the-okular-make-url-function-to-work-with-new-synctex-f)
- [Bug 274294 - okular's synctex support doesn't work with lua(la)tex generated output](https://bugs.kde.org/show_bug.cgi?id=274294) → Fixed
