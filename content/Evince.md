---
title: "Evince"
url: "/Evince/"
date: 2012-09-26T00:24:07Z
pukiwiki: "Evince"
---

# Evince

## [Evince](http://projects.gnome.org/evince/) {#fec1fb99}

<img src="http://git.gnome.org/browse/evince/plain/data/icons/256x256/apps/evince.png" alt="Evince" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## Evince とは {#l8fbb2e6}

Evince は Windows, Linux で動作する PDF, PS, DVI ファイルが表示可能なドキュメント・ビューアです．<br>
SyncTeX に対応しており，ファイルの自動更新機能もあります．<br>

- [Evince](http://projects.gnome.org/evince/)
- [Evince Document Viewer](http://library.gnome.org/users/evince/stable/index.html.en)
    - [Evince Document Viewer › SyncTex » Supported Editors](http://library.gnome.org/users/evince/stable/synctex-editors.html.en)

### ChangeLog {#nb7ae766}

- [git](http://git.gnome.org/browse/evince/)
    - [log](http://git.gnome.org/browse/evince/log/)

## forward and inverse search {#ga060086}

[Evince 2.31.5](http://git.gnome.org/browse/evince/commit/?id=EVINCE_2_31_5) から SyncTeX による forward and inverse search が可能になりました．<br>
[Evince 2.91.0](http://git.gnome.org/browse/evince/commit/?id=EVINCE_2_91_0) で D-Bus の仕様が変更されました．<br>
inverse search は Ctrl + 左クリックで対応する TeX 文書の該当箇所にジャンプします．<br>

### fwdevince {#ie18c015}

fwdevince は Evince で forward search を行うためのツールです．<br>
TeX Live 2012, Evince 3.4.0, Python 2.7.3 で動作確認しています．<br>

***

- fwdevince

***

```
#!/usr/bin/env python
# -*- coding: utf-8 -*-

import dbus
import argparse
import os.path
import time

class FwdEvince:

    def parse_args(self):
        parser = argparse.ArgumentParser(description='Forward search with Evince')
        parser.add_argument('pdf', nargs=1, help='PDF file')
        parser.add_argument('line', nargs=1, type=int, help='Line')
        parser.add_argument('tex', nargs=1, help='TeX file')
        return parser.parse_args()

    def run(self):
        args = self.parse_args()
        pdf = os.path.abspath(args.pdf[0])
        line = int(args.line[0])
        tex = os.path.join(os.path.dirname(os.path.abspath(args.tex[0])), './', os.path.basename(os.path.abspath(args.tex[0])))

        try:
            bus = dbus.SessionBus()
            daemon = bus.get_object('org.gnome.evince.Daemon', '/org/gnome/evince/Daemon')
            dbus_name = daemon.FindDocument('file://' + pdf, True, dbus_interface='org.gnome.evince.Daemon')
            window = bus.get_object(dbus_name, '/org/gnome/evince/Window/0')
            time.sleep(0.2)
            window.SyncView(tex, (line, 1), 0, dbus_interface='org.gnome.evince.Window')
        except dbus.DBusException:
            print_exc()

if __name__ == '__main__':
    evince = FwdEvince()
    evince.run()
```

***

```
$ chmod +x fwdevince
$ sudo cp -p fwdevince /usr/local/bin
```

### evince_synctex {#bb04e129}

- \[[SOLVED\] HOWTO: Evince + SyncTeX + vim/emacs/scite/lyx/kile/$EDITOR + forward/backward search - Ubuntu Forums](http://ubuntuforums.org/showthread.php?t=1716268)
- \[[SOLVED\] HOWTO: Evince + SyncTeX + vim/emacs/scite/lyx/kile/$EDITOR + forward/backward search \[Archive\]  - Ubuntu Forums](http://ubuntuforums.org/archive/index.php/t-1716268.html)
    <!-- -[[latexince:http://code.google.com/p/latexince/]] -->

#### 注意点 {#s90f2b11}

TeX Live 2012, 2011 では SyncTeX が出力するファイル名が TeX Live 2010 とは異なっています．<br>
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

Evince 2.91.0 以降を使用する場合は [D-Bus の仕様が変更されている](http://git.gnome.org/browse/evince/commit/?id=EVINCE_2_91_0)ので evince_forward_search を

```
#window.SyncView(tex_file, (line_number,1), dbus_interface="org.gnome.evince.Window")
window.SyncView(tex_file, (line_number,1), 0, dbus_interface="org.gnome.evince.Window")
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

## 関連リンク {#n7670496}

- [(W32TeX)LualatexのPDFがEvinceで日本語が表示されない](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=836)
