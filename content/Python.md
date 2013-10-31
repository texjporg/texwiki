---
title: "Python"
url: "/Python/"
date: 2013-05-12T16:49:56Z
pukiwiki: "Python"
---

# Python

## [Python](http://www.python.org/) {#ff8ca087}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/500px-Python_logo_and_wordmark.svg.png" alt="Python" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## Python 3 {#d9180565}

TeX 関連プログラムには Python で書かれたスクリプトがあります．<br>
Python で書かれたスクリプトを実行するには Python の処理系が必要です．<br>

- [Python Programming Language &ndash; Official Website](http://www.python.org/)
- [プログラミング言語 Python](http://www.python.jp/)

### 派生版 {#h517ae27}

- [IronPython](http://ironpython.codeplex.com/)
- [Jython](http://www.jython.org/)
- [PyPy](http://pypy.org/)
- [Cython](http://cython.org/)

## インストール {#y6c76d8e}

### Windows {#s4be4fc1}

Python を C:\Python34 にインストールした場合は

```
;C:\Python34;C:\Python34\Scripts
```

を環境変数 PATH に追加します．<br>

## パッケージ管理 {#n7b5e91b}

### pip {#q07300c6}

pip は Python 3.4 以降ではデフォルトでインストールされます．<br>

- [https://pypi.python.org/pypi/pip](https://pypi.python.org/pypi/pip)

## PythonTeX {#i2fab9c1}

- PythonTeX は TeX Live, W32TeX に含まれています．
- [https://github.com/gpoore/pythontex](https://github.com/gpoore/pythontex)
- [3 次元極座標のラプラシアンをPythonTeXで計算してみた](http://nsplat.wordpress.com/2013/10/04/3-%E6%AC%A1%E5%85%83%E6%A5%B5%E5%BA%A7%E6%A8%99%E3%81%AE%E3%83%A9%E3%83%97%E3%83%A9%E3%82%B7%E3%82%A2%E3%83%B3%E3%82%92pythontex%E3%81%A7%E8%A8%88%E7%AE%97%E3%81%97%E3%81%A6%E3%81%BF%E3%81%9F/)
- [TeXLive2013とPythonTeXを入れた](http://nsplat.wordpress.com/2013/10/04/texlive2013%E3%81%A8pythontex%E3%82%92%E5%85%A5%E3%82%8C%E3%81%9F/)
- [&quot;Python&quot; - 記事一覧 - 何かを書き留める何か](http://xaro.hatenablog.jp/archive/category/Python)
    - [http://xaro.hatenablog.jp/search?q=PythonTeX](http://xaro.hatenablog.jp/search?q=PythonTeX)

## fwdevince <a id="fwdevince"></a> {#p46d6b08}

TeX Live 2013, Evince 3.8.3, Python 3.3.2 または Python 2.7.5 で動作確認しています．<br>
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

## 関連リンク {#z55d6188}

- [Wikipedia.ja:Python](https://ja.wikipedia.org/wiki/Python)
- [python3.3環境構築](http://oceanmarine.sakura.ne.jp/sphinx/python_env.html)
- [Python の if \__name_\_ == ‘\__main_\_’: を Perl, Ruby, PHP で行う](http://www.serendip.ws/archives/4360)
- [http://stackoverflow.com/questions/16453691/python-waitfordebugevent-continuedebugevent-gray-hat-python](http://stackoverflow.com/questions/16453691/python-waitfordebugevent-continuedebugevent-gray-hat-python)
- [Python - アンサイクロペディア](http://ja.uncyclopedia.info/wiki/Python) ← Python は C よりも高速に動作するようです (ネタ)
