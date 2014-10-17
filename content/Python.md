---
title: "Python"
url: "/Python/"
date: 2013-05-12T16:49:56Z
pukiwiki: "Python"
---

# Python

## [Python](https://www.python.org/) {#ff8ca087}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/500px-Python_logo_and_wordmark.svg.png" alt="Python" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Summary {#d9180565}

Python は汎用スクリプト言語です．<br>
TeX 関連プログラムには Python で書かれたスクリプトがあります．<br>
[PythonTeX](/PythonTeX/) などの Python で書かれたスクリプトを実行するには Python の処理系が必要です．<br>

- [Welcome to Python.org](https://www.python.org/)
- [プログラミング言語 Python](http://www.python.jp/)
- [The Python-list Archives](https://mail.python.org/pipermail/python-list/)

### 派生版 {#h517ae27}

- [PyPy](http://pypy.org/)
- [Pyston](https://github.com/dropbox/pyston)
- [Cython](http://cython.org/)
- [IronPython](http://ironpython.net/)
    - [http://ironpython.codeplex.com/](http://ironpython.codeplex.com/)
    - [https://github.com/IronLanguages/ironpython3](https://github.com/IronLanguages/ironpython3)
- [Jython](http://www.jython.org/)
- [Micro Python](http://micropython.org/)
- [Brython](http://www.brython.info/)

### Shell {#seaca303}

- [IPython](http://ipython.org/)
- [bpython](http://bpython-interpreter.org/)

### ライブラリ {#r44ec77d}

- [Numba](http://numba.pydata.org/)

### IDE・エディタ {#f2a95253}

- [Eclipse](/Eclipse/)
    - [PyDev](http://pydev.org/)
- [Emacs](/Emacs/)
- [Vim](/Vim/)
- [Notepad++](/Notepad++/)
- Microsoft Visual Studio Express
    - [Python Tools for Visual Studio](http://pytools.codeplex.com/)

## インストール {#y6c76d8e}

### Windows {#s4be4fc1}

#### Windows Installer {#p1636dd5}

Windows Installer の Python を C:\Python34 にインストールした場合は

```
;C:\Python34;C:\Python34\Scripts
```

を環境変数 PATH に追加します．<br>

#### ActivePython {#r5e477dd}

- [http://downloads.activestate.com/ActivePython/releases/](http://downloads.activestate.com/ActivePython/releases/)

#### MSYS2 {#zf164903}

```
$ pacman -S python
```

### Linux {#l250486b}

#### Arch Linux {#y0be7e82}

- [https://www.archlinux.org/packages/?name=python](https://www.archlinux.org/packages/?name=python)
- [https://www.archlinux.org/packages/?name=python2](https://www.archlinux.org/packages/?name=python2)
- [https://www.archlinux.org/packages/?name=pypy3](https://www.archlinux.org/packages/?name=pypy3)
- [https://www.archlinux.org/packages/?name=pypy](https://www.archlinux.org/packages/?name=pypy)

#### Linux Mint {#fb9002c1}

- [http://packages.ubuntu.com/ja/python3](http://packages.ubuntu.com/ja/python3)
- [http://packages.ubuntu.com/ja/python](http://packages.ubuntu.com/ja/python)

#### Debian {#h38e333d}

- [https://packages.debian.org/ja/python3](https://packages.debian.org/ja/python3)
- [https://packages.debian.org/ja/python](https://packages.debian.org/ja/python)

#### Fedora {#y61bb303}

- [https://apps.fedoraproject.org/packages/python3](https://apps.fedoraproject.org/packages/python3)
- [https://apps.fedoraproject.org/packages/python](https://apps.fedoraproject.org/packages/python)

#### openSUSE {#v8959680}

- [http://software.opensuse.org/package/python3](http://software.opensuse.org/package/python3)
- [http://software.opensuse.org/package/python](http://software.opensuse.org/package/python)

#### Gentoo Linux {#u2a01502}

- [https://packages.gentoo.org/package/dev-lang/python](https://packages.gentoo.org/package/dev-lang/python)

## パッケージ管理 {#n7b5e91b}

### pip {#q07300c6}

- [https://pypi.python.org/pypi/pip](https://pypi.python.org/pypi/pip)
- [http://www.pip-installer.org/](http://www.pip-installer.org/)
- [Python3.4のensurepip(それとpyvenvの更新)](http://pelican.aodag.jp/python34noensurepipsoretopyvenvnogeng-xin.html)
- [Python3.4からpipが標準インストーラに！？](http://qiita.com/ksato9700/items/c5a6db9d17ad0770a747)

Python 3.4 では標準で pip, easy_install がインストールされます．<br>
pip や easy_install を使用して error: Setup script exited with error: Unable to find vcvarsall.bat のエラーが発生する場合は以下のサイトを参考にして設定すれば pip や easy_install が使用できます．<br>

- [pythonでvcvarsall.batエラーが出る。](http://ivis-mynikki.blogspot.jp/2013/03/pythonvcvarsallbat.html)

## PythonTeX {#i2fab9c1}

[PythonTeX - TeX Wiki](/PythonTeX/) を参照．<br>

## fwdevince <a id="fwdevince"></a> {#p46d6b08}

### Python 版 {#u6122dc4}

Evince 3.12.1, Python 3.4.0, dbus-python 1.2.0, PyGObject 3.12.1 で動作確認しています．<br>
fwdevince がうまく動作しない場合は

- [TeXstudio](/TeXstudio/), [Texmaker](/Texmaker/), [TeXworks](/TeXworks/) の組み込みビューアで forward and inverse search を実行する
- Ruby 版の fwdevince を使用する
- Python 版の fwdevince をうまく動作するように修正する

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
        EvinceForwardSearch().run()
    elif cmd == 'invevince' or cmd == 'bwdevince' or cmd == 'evince_inverse_search' or cmd == 'evince_backward_search':
        EvinceInverseSearch().run()
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

invevince は例えば [TeXstudio](/TeXstudio/) の場合は

```
$ evince "hoge.pdf" &
$ invevince "hoge.pdf" "texstudio '%f' -line %l"
```

のように実行して Evince 上で Ctrl + 左クリックを実行すると TeXstudio が起動して TeX 文書の対応する行にジャンプします．<br>

## [fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) <a id="fwdsumatrapdf"></a> {#y837d96a}

### Python 版 {#w284c2eb}

Python 3.4.2 と PyPy3 2.3.1 で動作確認しています．<br>

***

- fwdsumatrapdf.py

***

```
# vim: ts=4 sw=4 expandtab:
# -*- coding: utf-8 -*-

import sys
import argparse
import os.path
from ctypes import *
from winreg import *

class STARTUPINFOW(Structure):
    _fields_ = [('cb', c_uint), \
            ('lpReserved', c_wchar_p), \
            ('lpDesktop', c_wchar_p), \
            ('lpTitle', c_wchar_p), \
            ('dwX', c_uint), \
            ('dwY', c_uint), \
            ('dwXSize', c_uint), \
            ('dwYSize', c_uint), \
            ('dwXCountChars', c_uint), \
            ('dwYCountChars', c_uint), \
            ('dwFillAttribute', c_uint), \
            ('dwFlags', c_uint), \
            ('wShowWindow', c_ushort), \
            ('cbReserved2', c_ushort), \
            ('lpReserved2', c_void_p), \
            ('hStdInput', c_void_p), \
            ('hStdOutput', c_void_p), \
            ('hStdError', c_void_p)]

class PROCESS_INFORMATION(Structure):
    _fields_ = [('hProcess', c_void_p), \
            ('hThread', c_void_p), \
            ('dwProcessId', c_uint), \
            ('dwThreadId', c_uint)]

class FwdSumatraPDF:
    def __init__(self):
        self.pdf = ''
        self.tex = ''
        self.line = ''
        self.server = c_wchar_p('SUMATRA')
        self.topic = c_wchar_p('control')
        self.command = c_wchar_p(None)
        self.timeout = c_ulong(10000)

    def parse_args(self):
        parser = argparse.ArgumentParser(description='Forward search with SumatraPDF')
        parser.add_argument('pdf', nargs=1, help='PDF file')
        parser.add_argument('tex', nargs=1, help='TeX file')
        parser.add_argument('line', nargs=1, type=int, help='Line')
        return parser.parse_args()

    def runSumatraPDF(self):
        regValue = None
        with OpenKeyEx(HKEY_LOCAL_MACHINE, r'SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\SumatraPDF.exe') as key:
            regValue = QueryValue(key, None)
        sumatraPDFCommandLine = None
        if regValue and os.path.exists(regValue):
            sumatraPDFCommandLine = '"' + regValue + '" -reuse-instance'
        else:
            sumatraPDFCommandLine = r'C:\Windows\System32\rundll32.exe shell32,ShellExec_RunDLL SumatraPDF -reuse-instance'
        si = STARTUPINFOW()
        pi = PROCESS_INFORMATION()
        windll.kernel32.CreateProcessW(c_void_p(None), c_wchar_p(sumatraPDFCommandLine), c_void_p(None), c_void_p(None), False, c_uint(0), c_void_p(None), c_void_p(None), byref(si), byref(pi))
        windll.user32.WaitForInputIdle(pi.hProcess, self.timeout)

    def sumatraDDECallback(self, uType, uFmt, hconv, hsz1, hsz2, hdata, dwData1, dwData2):
        return c_void_p(None)

    def ddeExecute(self):
        idInstance = c_uint(0)
        APPCMD_CLIENTONLY = c_uint(0x10)
        CP_WINUNICODE = c_int(1200)
        CF_UNICODETEXT = c_uint(13)
        XCLASS_FLAGS = c_uint(0x4000)
        XTYP_EXECUTE = c_uint(c_uint(0x0050).value | XCLASS_FLAGS.value)
        DDECALLBACK = WINFUNCTYPE(c_uint, c_uint, POINTER(c_int), POINTER(c_int), POINTER(c_int), POINTER(c_int), c_uint, c_uint)
        try:
            windll.user32.DdeInitializeW(byref(idInstance), DDECALLBACK(self.sumatraDDECallback), APPCMD_CLIENTONLY, c_int(0))
            if idInstance == c_uint(0): raise Exception("DdeInitializeW error")
            hszServer = windll.user32.DdeCreateStringHandleW(idInstance, self.server, CP_WINUNICODE)
            if hszServer == None: raise Exception("DdeCreateStringHandleW error")
            hszTopic = windll.user32.DdeCreateStringHandleW(idInstance, self.topic, CP_WINUNICODE)
            if hszTopic == None: raise Exception("DdeCreateStringHandleW error")
            hConvClient = windll.user32.DdeConnect(idInstance, hszServer, hszTopic, c_void_p(None))
            if hConvClient == None: raise Exception("DdeConnect error")
            hDdeData = windll.user32.DdeCreateDataHandle(idInstance, self.command, (cdll.msvcrt.wcslen(self.command) + 1)*sizeof(c_wchar), 0, c_void_p(None), CF_UNICODETEXT, 0)
            if hDdeData == None: raise Exception("DdeCreateDataHandle error")
            hDdeTransactionData = windll.user32.DdeClientTransaction(hDdeData, -1, hConvClient, c_void_p(None), 0, XTYP_EXECUTE, self.timeout, c_void_p(None))
            if hDdeTransactionData == None: raise Exception("DdeClientTransaction error")
        finally:
            if hDdeTransactionData != None: windll.user32.DdeFreeDataHandle(hDdeTransactionData)
            if hDdeData != None: windll.user32.DdeFreeDataHandle(hDdeData)
            if hszServer != None: windll.user32.DdeFreeStringHandle(idInstance, hszServer)
            if hszTopic != None: windll.user32.DdeFreeStringHandle(idInstance, hszTopic)
            if hConvClient != None: windll.user32.DdeDisconnect(hConvClient)
            if idInstance != c_uint(0): windll.user32.DdeUninitialize(idInstance)

    def run(self):
        args = self.parse_args()
        self.pdf = os.path.abspath(args.pdf[0])
        self.tex = os.path.abspath(args.tex[0])
        self.line = str(args.line[0])
        self.command = c_wchar_p('[ForwardSearch("' + self.pdf \
                + '","' + self.tex + '",' + self.line + ',0,0,0)]')
        self.runSumatraPDF()
        self.ddeExecute()

if __name__ == '__main__':
    try:
        FwdSumatraPDF().run()
    except Exception as e:
        print(e, file=sys.stderr)
```

***

## 関連リンク {#z55d6188}

- [Wikipedia.ja:Python](https://ja.wikipedia.org/wiki/Python)
- [Python 3 Readiness - Python 3 support table for most popular Python packages](http://py3readiness.org/)
- [Dive Into Python 3 日本語版](http://diveintopython3-ja.rdy.jp/)
- [Pythonのコマンドライン引数処理の決定版 docopt (あとJuliaに移植したよ)](http://bicycle1885.hatenablog.com/entry/2014/06/08/103010)
- [Python3でpdfを作る多分一番簡単な方法](http://qiita.com/yasunori/items/5342d5311a655057782b)
- [Python Advent Calendar 2013](http://www.adventar.org/calendars/166)
- [pythonで心理実験](http://www.s12600.net/psy/python/)
- [科学計算における均質化、あるいはなぜPythonが着実に他言語のシェアを奪っているか](http://chezou.wordpress.com/2014/01/18/%E7%A7%91%E5%AD%A6%E8%A8%88%E7%AE%97%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E5%9D%87%E8%B3%AA%E5%8C%96%E3%80%81%E3%81%82%E3%82%8B%E3%81%84%E3%81%AF%E3%81%AA%E3%81%9Cpython%E3%81%8C%E7%9D%80%E5%AE%9F/)
- [python3.3環境構築](http://oceanmarine.sakura.ne.jp/sphinx/python_env.html)
- [Python の if \__name_\_ == ‘\__main_\_’: を Perl, Ruby, PHP で行う](http://www.serendip.ws/archives/4360)
- [http://stackoverflow.com/questions/16453691/python-waitfordebugevent-continuedebugevent-gray-hat-python](http://stackoverflow.com/questions/16453691/python-waitfordebugevent-continuedebugevent-gray-hat-python)
- [http://stackoverflow.com/questions/210629/python-unsigned-32-bit-bitwise-arithmetic](http://stackoverflow.com/questions/210629/python-unsigned-32-bit-bitwise-arithmetic)
- [http://www.gesource.jp/programming/python/code/](http://www.gesource.jp/programming/python/code/)
- [Python - アンサイクロペディア](http://ja.uncyclopedia.info/wiki/Python) ← Python は C よりも高速に動作するようです (ネタ)
    <!-- -[http://coreblog.org/ats/statements-to-expressions-python-31/ print文に続き，if文やfor文，def文などが関数に - Python 3.1から] (2009-04-01 04:50) -->
