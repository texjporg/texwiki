---
title: "Emacs/Org mode"
url: "/Emacs/Org mode/"
date: 2013-04-12T19:57:09Z
pukiwiki: "Emacs/Org mode"
---

# Emacs/Org mode

[Emacs](/Emacs/) > Org mode

## [Org mode](http://orgmode.org/) {#d6cfda4f}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Org mode とは {#rea710af}

<!-- Org mode is for keeping notes, maintaining TODO lists, planning projects, and authoring documents with a fast and effective plain-text system. -->

Org mode は

- ノートの保存
- TODO リストの管理
- プロジェクト計画

のためのモードです．<br>
テキストファイルを高速・効率的に編集することができます．<br>

- [Org mode for Emacs &ndash; Your Life in Plain Text](http://orgmode.org/)
- [Org Mode - GNU Emacs Manual](http://www.gnu.org/software/emacs/manual/html_node/emacs/Org-Mode.html#Org-Mode)

### License {#da0cead0}

[GPLv3](http://orgmode.org/w/?p=org-mode.git;a=blob;f=COPYING;hb=HEAD)

### リリース情報 {#lb82f3d0}

- [http://orgmode.org/cgit.cgi/org-mode.git/refs/](http://orgmode.org/cgit.cgi/org-mode.git/refs/)
- [http://orgmode.org/w/?p=org-mode.git;a=tags](http://orgmode.org/w/?p=org-mode.git;a=tags)

### ChangeLog {#r21fa6e2}

- [http://orgmode.org/cgit.cgi/org-mode.git/](http://orgmode.org/cgit.cgi/org-mode.git/)
- [http://orgmode.org/w/?p=org-mode.git](http://orgmode.org/w/?p=org-mode.git)

## インストール {#l69ff892}

Org mode は Emacs に標準で含まれています．<br>

### Emacs 標準のパッケージ管理システムを使用する場合 {#f8230508}

M-x package-install RET org RET

または

M-x list-packages RET でリストを表示して org を選択

### 公式サイトのパッケージを使用する場合 {#vc647a74}

パッケージを展開して名前を org にリネームして &#x7e;/.emacs.d/site-lisp に配置します．

***

```
~
└─.emacs.d
    └─site-lisp
        └─org
            └─lisp
```

***

&#x7e;/.emacs.d/init.el で load-path に ~/.emacs.d/site-lisp/org/lisp を追加します．<br>

```
(add-to-list 'load-path "~/.emacs.d/site-lisp/org/lisp")
```

## Export to LaTeX {#k6bbb6c5}

- [LaTeX and PDF export](http://orgmode.org/manual/LaTeX-and-PDF-export.html)
- [BasicTeX + LuaTeX-ja + OrgMode on OSX で beamer な PDF を出すまで](http://gongo.hatenablog.com/entry/2014/01/13/225304)
- [org-mode による論文作成入門](http://akisute3.hatenablog.com/entry/2013/12/28/144918)
- [orgmodeで卒論を書いたときの話](http://qiita.com/PowerPC7450/items/b34b080dd941af689b56)
- [org-mode で日本語LaTeXを出力する方法](http://qiita.com/kawabata/items/1b56ec8284942ff2646b)
- [https://github.com/uwabami/emacs-config/blob/master/emacs.d/config/org-mode_config.org](https://github.com/uwabami/emacs-config/blob/master/emacs.d/config/org-mode_config.org)
- [org-mode 8.0で変わった変数など](http://qiita.com/items/575291f7aa8ff6807abd)
- [org-mode 8.0 画像入り日本語PDFをOSX10.8で出力するなら LuaTeX を使え！](http://blog.livedoor.jp/tek_nishi/archives/7862119.html)

### Windows {#q16766de}

#### 設定 {#y73c067b}

&#x7e;/.emacs.d/init.el に設定を記述します．<br>
Org mode はデフォルトでは pdfLaTeX が使われます．<br>
pdfLaTeX ではなく upLaTeX + dvipdfmx で処理をする場合は latexmk を使用します．<br>

***

```
;;
;; Org mode
;;
(require 'ox-latex)
(add-to-list 'auto-mode-alist '("\\.org$" . org-mode))
(setq org-latex-default-class "jsarticle")
(setq org-latex-pdf-process '("tasklist /fi \"IMAGENAME eq AcroRd32.exe\" /nh | findstr \"AcroRd32.exe\" > nul && pdfopen --r15 --file %b.pdf && pdfclose --r15 --file %b.pdf & latexmk -e \"$latex=q/uplatex -kanji=utf8 -no-guess-input-enc %S/\" -e \"$bibtex=q/upbibtex %B/\" -e \"$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/\" -e \"$makeindex=q/upmendex -o %D %S/\" -e \"$dvipdf=q/dvipdfmx -o %D %S/\" -norc -gg -pdfdvi %f"))
;(setq org-latex-pdf-process '("tasklist /fi \"IMAGENAME eq AcroRd32.exe\" /nh | findstr \"AcroRd32.exe\" > nul && pdfopen --r15 --file %b.pdf && pdfclose --r15 --file %b.pdf & latexmk -e \"$latex=q/uplatex -kanji=utf8 -no-guess-input-enc %S/\" -e \"$bibtex=q/upbibtex %B/\" -e \"$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/\" -e \"$makeindex=q/upmendex -o %D %S/\" -e \"$dvips=q/dvips -Ppdf -z -f %S | convbkmk -u > %D/\" -e \"$ps2pdf=q/ps2pdf.exe %S %D/\" -norc -gg -pdfps %f"))
;(setq org-latex-pdf-process '("tasklist /fi \"IMAGENAME eq AcroRd32.exe\" /nh | findstr \"AcroRd32.exe\" > nul && pdfopen --r15 --file %b.pdf && pdfclose --r15 --file %b.pdf & latexmk -e \"$pdflatex=q/platex-ng %S/\" -e \"$bibtex=q/upbibtex %B/\" -e \"$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/\" -e \"$makeindex=q/upmendex -o %D %S/\" -norc -gg -pdf %f"))
;(setq org-latex-pdf-process '("tasklist /fi \"IMAGENAME eq AcroRd32.exe\" /nh | findstr \"AcroRd32.exe\" > nul && pdfopen --r15 --file %b.pdf && pdfclose --r15 --file %b.pdf & latexmk -e \"$pdflatex=q/pdflatex %S/\" -e \"$bibtex=q/bibtex %B/\" -e \"$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/\" -e \"$makeindex=q/makeindex -o %D %S/\" -norc -gg -pdf %f"))
;(setq org-latex-pdf-process '("tasklist /fi \"IMAGENAME eq AcroRd32.exe\" /nh | findstr \"AcroRd32.exe\" > nul && pdfopen --r15 --file %b.pdf && pdfclose --r15 --file %b.pdf & latexmk -e \"$pdflatex=q/lualatex %S/\" -e \"$bibtex=q/upbibtex %B/\" -e \"$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/\" -e \"$makeindex=q/upmendex -o %D %S/\" -norc -gg -pdf %f"))
;(setq org-latex-pdf-process '("tasklist /fi \"IMAGENAME eq AcroRd32.exe\" /nh | findstr \"AcroRd32.exe\" > nul && pdfopen --r15 --file %b.pdf && pdfclose --r15 --file %b.pdf & latexmk -e \"$pdflatex=q/luajitlatex %S/\" -e \"$bibtex=q/upbibtex %B/\" -e \"$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/\" -e \"$makeindex=q/upmendex -o %D %S/\" -norc -gg -pdf %f"))
;(setq org-latex-pdf-process '("tasklist /fi \"IMAGENAME eq AcroRd32.exe\" /nh | findstr \"AcroRd32.exe\" > nul && pdfopen --r15 --file %b.pdf && pdfclose --r15 --file %b.pdf & latexmk -e \"$pdflatex=q/xelatex %S/\" -e \"$bibtex=q/upbibtex %B/\" -e \"$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/\" -e \"$makeindex=q/upmendex -o %D %S/\" -norc -gg -pdf %f"))
;(setq org-export-in-background t)
(if (not (eq org-export-in-background t))
    (setq org-file-apps
          '(("pdf" . "cmd /c echo powershell -Command \"& {$pages = (pdfinfo %s | Select-String \"^Pages:\"); $page = (-split $pages)[1]; pdfopen --r15 --file %s --page $page}\" | cmd"))))

(add-to-list 'org-latex-classes
             '("jsarticle"
               "\\documentclass[uplatex,dvipdfmx,12pt,a4paper,papersize]{jsarticle}
[NO-DEFAULT-PACKAGES]
\\usepackage{amsmath}
\\usepackage{newtxtext,newtxmath}
\\usepackage{graphicx}
\\usepackage{hyperref}
\\usepackage{pxjahyper}
\\hypersetup{setpagesize=false,colorlinks=true}"
               ("\\section{%s}" . "\\section*{%s}")
               ("\\subsection{%s}" . "\\subsection*{%s}")
               ("\\subsubsection{%s}" . "\\subsubsection*{%s}")
               ("\\paragraph{%s}" . "\\paragraph*{%s}")
               ("\\subparagraph{%s}" . "\\subparagraph*{%s}")))

(add-to-list 'org-latex-classes
             '("jsarticle-dvips"
               "\\documentclass[uplatex,12pt,a4paper,papersize]{jsarticle}
[NO-DEFAULT-PACKAGES]
\\usepackage{amsmath}
\\usepackage{newtxtext,newtxmath}
\\usepackage{graphicx}
\\usepackage{hyperref}
\\hypersetup{setpagesize=false,colorlinks=true}"
               ("\\section{%s}" . "\\section*{%s}")
               ("\\subsection{%s}" . "\\subsection*{%s}")
               ("\\subsubsection{%s}" . "\\subsubsection*{%s}")
               ("\\paragraph{%s}" . "\\paragraph*{%s}")
               ("\\subparagraph{%s}" . "\\subparagraph*{%s}")))

(add-to-list 'org-latex-classes
             '("ltjsarticle"
               "\\documentclass[12pt,a4paper]{ltjsarticle}
[NO-DEFAULT-PACKAGES]
\\usepackage{amsmath}
\\usepackage{newtxtext,newtxmath}
\\usepackage{graphicx}
\\usepackage{hyperref}
\\hypersetup{pdfencoding=auto,colorlinks=true}"
               ("\\section{%s}" . "\\section*{%s}")
               ("\\subsection{%s}" . "\\subsection*{%s}")
               ("\\subsubsection{%s}" . "\\subsubsection*{%s}")
               ("\\paragraph{%s}" . "\\paragraph*{%s}")
               ("\\subparagraph{%s}" . "\\subparagraph*{%s}")))

(add-to-list 'org-latex-classes
             '("bxjsarticle"
               "\\ifdefined\\kanjiskip
  \\documentclass[autodetect-engine,dvipdfmx,12pt,a4paper,ja=standard]{bxjsarticle}
\\else
  \\ifdefined\\pdfoutput
    \\ifnum\\pdfoutput=0
      \\documentclass[autodetect-engine,dvipdfmx,12pt,a4paper,ja=standard]{bxjsarticle}
    \\else
      \\documentclass[autodetect-engine,12pt,a4paper,ja=standard]{bxjsarticle}
    \\fi
  \\else
    \\documentclass[autodetect-engine,12pt,a4paper,ja=standard]{bxjsarticle}
  \\fi
\\fi
[NO-DEFAULT-PACKAGES]
\\usepackage{amsmath}
\\usepackage{newtxtext,newtxmath}
\\usepackage{graphicx}
\\usepackage{hyperref}
\\ifdefined\\kanjiskip
  \\usepackage{pxjahyper}
  \\hypersetup{colorlinks=true}
\\else
  \\ifdefined\\XeTeXversion
      \\hypersetup{colorlinks=true}
  \\else
    \\ifdefined\\directlua
      \\hypersetup{pdfencoding=auto,colorlinks=true}
    \\else
      \\hypersetup{unicode,colorlinks=true}
    \\fi
  \\fi
\\fi"
               ("\\section{%s}" . "\\section*{%s}")
               ("\\subsection{%s}" . "\\subsection*{%s}")
               ("\\subsubsection{%s}" . "\\subsubsection*{%s}")
               ("\\paragraph{%s}" . "\\paragraph*{%s}")
               ("\\subparagraph{%s}" . "\\subparagraph*{%s}")))
```

***

### OS X {#a97921ad}

#### 設定 {#l55021f8}

動作未確認です．<br>
&#x7e;/.emacs.d/init.el に設定を記述します．<br>
Org mode はデフォルトでは pdfLaTeX が使われます．<br>
pdfLaTeX ではなく upLaTeX + dvipdfmx で処理をする場合は latexmk を使用します．<br>

***

```
;;
;; Org mode
;;
(require 'ox-latex)
(add-to-list 'auto-mode-alist '("\\.org$" . org-mode))
(setq org-latex-default-class "jsarticle")
(setq org-latex-pdf-process '("/Library/TeX/texbin/latexmk -e '$latex=q/uplatex %S/' -e '$bibtex=q/upbibtex %B/' -e '$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex -o %D %S/' -e '$dvipdf=q/dvipdfmx -o %D %S/' -norc -gg -pdfdvi %f"))
;(setq org-latex-pdf-process '("/Library/TeX/texbin/latexmk -e '$latex=q/uplatex %S/' -e '$bibtex=q/upbibtex %B/' -e '$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex -o %D %S/' -e '$dvips=q/dvips -Ppdf -z -f %S | convbkmk -u > %D/' -e '$ps2pdf=q/ps2pdf %S %D/' -norc -gg -pdfps %f"))
;(setq org-latex-pdf-process '("/Library/TeX/texbin/latexmk -e '$pdflatex=q/platex-ng %S/' -e '$bibtex=q/upbibtex %B/' -e '$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex -o %D %S/' -norc -gg -pdf %f"))
;(setq org-latex-pdf-process '("/Library/TeX/texbin/latexmk -e '$pdflatex=q/pdflatex %S/' -e '$bibtex=q/bibtex %B/' -e '$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/makeindex -o %D %S/' -norc -gg -pdf %f"))
;(setq org-latex-pdf-process '("/Library/TeX/texbin/latexmk -e '$pdflatex=q/lualatex %S/' -e '$bibtex=q/upbibtex %B/' -e '$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex -o %D %S/' -norc -gg -pdf %f"))
;(setq org-latex-pdf-process '("/Library/TeX/texbin/latexmk -e '$pdflatex=q/luajitlatex %S/' -e '$bibtex=q/upbibtex %B/' -e '$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex -o %D %S/' -norc -gg -pdf %f"))
;(setq org-latex-pdf-process '("/Library/TeX/texbin/latexmk -e '$pdflatex=q/xelatex %S/' -e '$bibtex=q/upbibtex %B/' -e '$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex -o %D %S/' -norc -gg -pdf %f"))
;(setq org-export-in-background t)
(setq org-file-apps
      '(("pdf" . "/usr/bin/open -a Preview.app %s")))

(add-to-list 'org-latex-classes
             '("jsarticle"
               "\\documentclass[uplatex,dvipdfmx,12pt,a4paper,papersize]{jsarticle}
[NO-DEFAULT-PACKAGES]
\\usepackage{amsmath}
\\usepackage{newtxtext,newtxmath}
\\usepackage{graphicx}
\\usepackage{hyperref}
\\usepackage{pxjahyper}
\\hypersetup{setpagesize=false,colorlinks=true}"
               ("\\section{%s}" . "\\section*{%s}")
               ("\\subsection{%s}" . "\\subsection*{%s}")
               ("\\subsubsection{%s}" . "\\subsubsection*{%s}")
               ("\\paragraph{%s}" . "\\paragraph*{%s}")
               ("\\subparagraph{%s}" . "\\subparagraph*{%s}")))

(add-to-list 'org-latex-classes
             '("jsarticle-dvips"
               "\\documentclass[uplatex,12pt,a4paper,papersize]{jsarticle}
[NO-DEFAULT-PACKAGES]
\\usepackage{amsmath}
\\usepackage{newtxtext,newtxmath}
\\usepackage{graphicx}
\\usepackage{hyperref}
\\hypersetup{setpagesize=false,colorlinks=true}"
               ("\\section{%s}" . "\\section*{%s}")
               ("\\subsection{%s}" . "\\subsection*{%s}")
               ("\\subsubsection{%s}" . "\\subsubsection*{%s}")
               ("\\paragraph{%s}" . "\\paragraph*{%s}")
               ("\\subparagraph{%s}" . "\\subparagraph*{%s}")))

(add-to-list 'org-latex-classes
             '("ltjsarticle"
               "\\documentclass[12pt,a4paper]{ltjsarticle}
[NO-DEFAULT-PACKAGES]
\\usepackage{amsmath}
\\usepackage{newtxtext,newtxmath}
\\usepackage{graphicx}
\\usepackage{hyperref}
\\hypersetup{pdfencoding=auto,colorlinks=true}"
               ("\\section{%s}" . "\\section*{%s}")
               ("\\subsection{%s}" . "\\subsection*{%s}")
               ("\\subsubsection{%s}" . "\\subsubsection*{%s}")
               ("\\paragraph{%s}" . "\\paragraph*{%s}")
               ("\\subparagraph{%s}" . "\\subparagraph*{%s}")))

(add-to-list 'org-latex-classes
             '("bxjsarticle"
               "\\ifdefined\\kanjiskip
  \\documentclass[autodetect-engine,dvipdfmx,12pt,a4paper,ja=standard]{bxjsarticle}
\\else
  \\ifdefined\\pdfoutput
    \\ifnum\\pdfoutput=0
      \\documentclass[autodetect-engine,dvipdfmx,12pt,a4paper,ja=standard]{bxjsarticle}
    \\else
      \\documentclass[autodetect-engine,12pt,a4paper,ja=standard]{bxjsarticle}
    \\fi
  \\else
    \\documentclass[autodetect-engine,12pt,a4paper,ja=standard]{bxjsarticle}
  \\fi
\\fi
[NO-DEFAULT-PACKAGES]
\\usepackage{amsmath}
\\usepackage{newtxtext,newtxmath}
\\usepackage{graphicx}
\\usepackage{hyperref}
\\ifdefined\\kanjiskip
  \\usepackage{pxjahyper}
  \\hypersetup{colorlinks=true}
\\else
  \\ifdefined\\XeTeXversion
      \\hypersetup{colorlinks=true}
  \\else
    \\ifdefined\\directlua
      \\hypersetup{pdfencoding=auto,colorlinks=true}
    \\else
      \\hypersetup{unicode,colorlinks=true}
    \\fi
  \\fi
\\fi"
               ("\\section{%s}" . "\\section*{%s}")
               ("\\subsection{%s}" . "\\subsection*{%s}")
               ("\\subsubsection{%s}" . "\\subsubsection*{%s}")
               ("\\paragraph{%s}" . "\\paragraph*{%s}")
               ("\\subparagraph{%s}" . "\\subparagraph*{%s}")))
```

***

### Linux {#h20d131a}

#### 設定 {#n84d0ac5}

&#x7e;/.emacs.d/init.el に設定を記述します．<br>
Org mode はデフォルトでは pdfLaTeX が使われます．<br>
pdfLaTeX ではなく upLaTeX + dvipdfmx で処理をする場合は latexmk を使用します．<br>

***

```
;;
;; Org mode
;;
(require 'ox-latex)
(add-to-list 'auto-mode-alist '("\\.org$" . org-mode))
(setq org-latex-default-class "jsarticle")
(setq org-latex-pdf-process '("latexmk -e '$latex=q/uplatex %S/' -e '$bibtex=q/upbibtex %B/' -e '$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex -o %D %S/' -e '$dvipdf=q/dvipdfmx -o %D %S/' -norc -gg -pdfdvi %f"))
;(setq org-latex-pdf-process '("latexmk -e '$latex=q/uplatex %S/' -e '$bibtex=q/upbibtex %B/' -e '$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex -o %D %S/' -e '$dvips=q/dvips -Ppdf -z -f %S | convbkmk -u > %D/' -e '$ps2pdf=q/ps2pdf %S %D/' -norc -gg -pdfps %f"))
;(setq org-latex-pdf-process '("latexmk -e '$pdflatex=q/platex-ng %S/' -e '$bibtex=q/upbibtex %B/' -e '$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex -o %D %S/' -norc -gg -pdf %f"))
;(setq org-latex-pdf-process '("latexmk -e '$pdflatex=q/pdflatex %S/' -e '$bibtex=q/bibtex %B/' -e '$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/makeindex -o %D %S/' -norc -gg -pdf %f"))
;(setq org-latex-pdf-process '("latexmk -e '$pdflatex=q/lualatex %S/' -e '$bibtex=q/upbibtex %B/' -e '$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex -o %D %S/' -norc -gg -pdf %f"))
;(setq org-latex-pdf-process '("latexmk -e '$pdflatex=q/luajitlatex %S/' -e '$bibtex=q/upbibtex %B/' -e '$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex -o %D %S/' -norc -gg -pdf %f"))
;(setq org-latex-pdf-process '("latexmk -e '$pdflatex=q/xelatex %S/' -e '$bibtex=q/upbibtex %B/' -e '$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex -o %D %S/' -norc -gg -pdf %f"))
;(setq org-export-in-background t)
(setq org-file-apps
      '(("pdf" . "xdg-open %s")))

(add-to-list 'org-latex-classes
             '("jsarticle"
               "\\documentclass[uplatex,dvipdfmx,12pt,a4paper,papersize]{jsarticle}
[NO-DEFAULT-PACKAGES]
\\usepackage{amsmath}
\\usepackage{newtxtext,newtxmath}
\\usepackage{graphicx}
\\usepackage{hyperref}
\\usepackage{pxjahyper}
\\hypersetup{setpagesize=false,colorlinks=true}"
               ("\\section{%s}" . "\\section*{%s}")
               ("\\subsection{%s}" . "\\subsection*{%s}")
               ("\\subsubsection{%s}" . "\\subsubsection*{%s}")
               ("\\paragraph{%s}" . "\\paragraph*{%s}")
               ("\\subparagraph{%s}" . "\\subparagraph*{%s}")))

(add-to-list 'org-latex-classes
             '("jsarticle-dvips"
               "\\documentclass[uplatex,12pt,a4paper,papersize]{jsarticle}
[NO-DEFAULT-PACKAGES]
\\usepackage{amsmath}
\\usepackage{newtxtext,newtxmath}
\\usepackage{graphicx}
\\usepackage{hyperref}
\\hypersetup{setpagesize=false,colorlinks=true}"
               ("\\section{%s}" . "\\section*{%s}")
               ("\\subsection{%s}" . "\\subsection*{%s}")
               ("\\subsubsection{%s}" . "\\subsubsection*{%s}")
               ("\\paragraph{%s}" . "\\paragraph*{%s}")
               ("\\subparagraph{%s}" . "\\subparagraph*{%s}")))

(add-to-list 'org-latex-classes
             '("ltjsarticle"
               "\\documentclass[12pt,a4paper]{ltjsarticle}
[NO-DEFAULT-PACKAGES]
\\usepackage{amsmath}
\\usepackage{newtxtext,newtxmath}
\\usepackage{graphicx}
\\usepackage{hyperref}
\\hypersetup{pdfencoding=auto,colorlinks=true}"
               ("\\section{%s}" . "\\section*{%s}")
               ("\\subsection{%s}" . "\\subsection*{%s}")
               ("\\subsubsection{%s}" . "\\subsubsection*{%s}")
               ("\\paragraph{%s}" . "\\paragraph*{%s}")
               ("\\subparagraph{%s}" . "\\subparagraph*{%s}")))

(add-to-list 'org-latex-classes
             '("bxjsarticle"
               "\\ifdefined\\kanjiskip
  \\documentclass[autodetect-engine,dvipdfmx,12pt,a4paper,ja=standard]{bxjsarticle}
\\else
  \\ifdefined\\pdfoutput
    \\ifnum\\pdfoutput=0
      \\documentclass[autodetect-engine,dvipdfmx,12pt,a4paper,ja=standard]{bxjsarticle}
    \\else
      \\documentclass[autodetect-engine,12pt,a4paper,ja=standard]{bxjsarticle}
    \\fi
  \\else
    \\documentclass[autodetect-engine,12pt,a4paper,ja=standard]{bxjsarticle}
  \\fi
\\fi
[NO-DEFAULT-PACKAGES]
\\usepackage{amsmath}
\\usepackage{newtxtext,newtxmath}
\\usepackage{graphicx}
\\usepackage{hyperref}
\\ifdefined\\kanjiskip
  \\usepackage{pxjahyper}
  \\hypersetup{colorlinks=true}
\\else
  \\ifdefined\\XeTeXversion
      \\hypersetup{colorlinks=true}
  \\else
    \\ifdefined\\directlua
      \\hypersetup{pdfencoding=auto,colorlinks=true}
    \\else
      \\hypersetup{unicode,colorlinks=true}
    \\fi
  \\fi
\\fi"
               ("\\section{%s}" . "\\section*{%s}")
               ("\\subsection{%s}" . "\\subsection*{%s}")
               ("\\subsubsection{%s}" . "\\subsubsection*{%s}")
               ("\\paragraph{%s}" . "\\paragraph*{%s}")
               ("\\subparagraph{%s}" . "\\subparagraph*{%s}")))
```

***

### 使い方 {#a6515cd5}

#### jsarticle で uplatex + dvipdfmx を使用する場合 {#q8639193}

org ファイルの先頭に

```
#+TITLE: hoge
#+AUTHOR: fuga
#+LATEX_CLASS: jsarticle
```

を追加します．

#### jsarticle で uplatex + dvips + ps2pdf を使用する場合 {#c4685629}

org ファイルの先頭に

```
#+TITLE: hoge
#+AUTHOR: fuga
#+LATEX_CLASS: jsarticle-dvips
```

を追加します．

#### ltjsarticle で lualatex, luajitlatex を使用する場合 {#of5b23e4}

org ファイルの先頭に

```
#+TITLE: hoge
#+AUTHOR: fuga
#+LATEX_CLASS: ltjsarticle
```

を追加します．

#### bxjsarticle で uplatex + dvipdfmx, pdflatex, lualatex, luajitlatex, xelatex を使用する場合 {#mc51aa00}

org ファイルの先頭に

```
#+TITLE: hoge
#+AUTHOR: fuga
#+LATEX_CLASS: bxjsarticle
```

を追加します．

#### ファイルの出力 {#nee250e6}

C-c C-e l l で LaTeX ファイルを出力します．<br>
C-c C-e l p で PDF ファイルを出力します．<br>
C-c C-e l o で PDF ファイルを出力して表示します．<br>

## Export to HTML {#t60cf94b}

- [HTML export](http://orgmode.org/manual/HTML-export.html)
- [Org-mode による HTML 文書作成入門](http://www.geocities.jp/km_pp1/org-mode/org-mode-document.html)
