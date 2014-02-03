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

### Python 版 {#fe046d49}

[Python](/Python/#fwdevince) を参照．<br>

### Ruby 版 {#odd51ed4}

[Ruby](/Ruby/#fwdevince) を参照．<br>

### Emacs Lisp 版 {#m18a72d1}

- [Emacs - TeX Wiki](/Emacs/)
- [http://git.savannah.gnu.org/cgit/auctex.git/tree/tex.el](http://git.savannah.gnu.org/cgit/auctex.git/tree/tex.el)
- [https://github.com/DamienCassou/emacs.d/blob/master/auctex-evince-sync.el](https://github.com/DamienCassou/emacs.d/blob/master/auctex-evince-sync.el)
- [https://github.com/NicolasPetton/emacs.d/blob/master/modules/auctex-evince-sync.el](https://github.com/NicolasPetton/emacs.d/blob/master/modules/auctex-evince-sync.el)

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
