---
title: "Emacs/Org mode"
url: "/Emacs/Org mode/"
date: 2013-04-12T19:57:09Z
pukiwiki: "Emacs/Org mode"
---

# Emacs/Org mode

[Emacs](/Emacs/) > Org mode

## [Org mode](http://orgmode.org/) {#d6cfda4f}

<img src="http://orgmode.org/img/org-mode-unicorn-logo.png" alt="Org mode" style="float:right">

<!-- #ref(http://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Org-mode-unicorn.svg/200px-Org-mode-unicorn.svg.png,right,around,nolink,Org mode) -->

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## Org mode とは {#rea710af}

<!-- Org mode is for keeping notes, maintaining TODO lists, planning projects, and authoring documents with a fast and effective plain-text system. -->

Org mode は

- ノートの保存
- TODO リストの管理
- プロジェクト計画

のためのモードです．<br>
高速で効率的なプレーンテキストシステムを使ってファイルを編集することができます．<br>

- [Org mode for Emacs &ndash; Your Life in Plain Text](http://orgmode.org/)

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
Org mode 8.0 未満の場合は最新版の Org mode にアップグレードします．<br>

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
- [https://github.com/uwabami/dot.emacs.d/blob/master/config/org-mode_config.org](https://github.com/uwabami/dot.emacs.d/blob/master/config/org-mode_config.org)
- [org-mode 8.0で変わった変数など](http://qiita.com/items/575291f7aa8ff6807abd)
- [org-mode 8.0 画像入り日本語PDFをOSX10.8で出力するなら LuaTeX を使え！](http://blog.livedoor.jp/tek_nishi/archives/7862119.html)

### Windows {#q16766de}

#### 設定 {#y73c067b}

&#x7e;/.emacs.d/init.el に設定を記述します．<br>
Org mode はデフォルトでは pdfLaTeX が使われます．<br>
pdfLaTeX ではなく (u)pLaTeX + dvipdfmx で処理をする場合は latexmk を使用します．<br>
latexmk は TeX Live, W32TeX に含まれています．<br>
W32TeX の場合は latexmk の実行には [Strawberry Perl](http://strawberryperl.com/) が必要です．<br>

***

```
;;
;; Org mode
;;
(require 'ox-latex)
(add-to-list 'auto-mode-alist '("\\.org$" . org-mode))
(setq org-latex-default-class "jsarticle")
(setq org-latex-pdf-process '("tasklist /fi \"IMAGENAME eq AcroRd32.exe\" /nh | findstr \"AcroRd32.exe\" > nul && pdfopen --rxi --file %b.pdf && pdfclose --rxi --file %b.pdf & latexmk -e \"$latex=q/platex -kanji=utf8 -guess-input-enc %S/\" -e \"$bibtex=q/pbibtex -kanji=utf8 %B/\" -e \"$makeindex=q/mendex -U -o %D %S/\" -e \"$dvipdf=q/dvipdfmx -o %D %S/\" -norc -gg -pdfdvi %f"))
;(setq org-latex-pdf-process '("tasklist /fi \"IMAGENAME eq AcroRd32.exe\" /nh | findstr \"AcroRd32.exe\" > nul && pdfopen --rxi --file %b.pdf && pdfclose --rxi --file %b.pdf & latexmk -e \"$latex=q/platex -kanji=utf8 -guess-input-enc %S/\" -e \"$bibtex=q/pbibtex -kanji=utf8 %B/\" -e \"$makeindex=q/mendex -U -o %D %S/\" -e \"$dvips=q/dvips -Ppdf -z -f %S | convbkmk -g > %D/\" -e \"$ps2pdf=q/ps2pdf.bat %S %D/\" -norc -gg -pdfps %f"))
;(setq org-latex-pdf-process '("tasklist /fi \"IMAGENAME eq AcroRd32.exe\" /nh | findstr \"AcroRd32.exe\" > nul && pdfopen --rxi --file %b.pdf && pdfclose --rxi --file %b.pdf & latexmk -e \"$latex=q/uplatex -kanji=utf8 -no-guess-input-enc %S/\" -e \"$bibtex=q/upbibtex %B/\" -e \"$makeindex=q/mendex -U -o %D %S/\" -e \"$dvipdf=q/dvipdfmx -o %D %S/\" -norc -gg -pdfdvi %f"))
;(setq org-latex-pdf-process '("tasklist /fi \"IMAGENAME eq AcroRd32.exe\" /nh | findstr \"AcroRd32.exe\" > nul && pdfopen --rxi --file %b.pdf && pdfclose --rxi --file %b.pdf & latexmk -e \"$latex=q/uplatex -kanji=utf8 -no-guess-input-enc %S/\" -e \"$bibtex=q/upbibtex %B/\" -e \"$makeindex=q/mendex -U -o %D %S/\" -e \"$dvips=q/dvips -Ppdf -z -f %S | convbkmk -u > %D/\" -e \"$ps2pdf=q/ps2pdf.bat %S %D/\" -norc -gg -pdfps %f"))
;(setq org-latex-pdf-process '("tasklist /fi \"IMAGENAME eq AcroRd32.exe\" /nh | findstr \"AcroRd32.exe\" > nul && pdfopen --rxi --file %b.pdf && pdfclose --rxi --file %b.pdf & latexmk -e \"$pdflatex=q/pdflatex %S/\" -e \"$bibtex=q/bibtex %B/\" -e \"$makeindex=q/makeindex -o %D %S/\" -norc -gg -pdf %f"))
;(setq org-latex-pdf-process '("tasklist /fi \"IMAGENAME eq AcroRd32.exe\" /nh | findstr \"AcroRd32.exe\" > nul && pdfopen --rxi --file %b.pdf && pdfclose --rxi --file %b.pdf & latexmk -e \"$pdflatex=q/lualatex %S/\" -e \"$bibtex=q/bibtexu %B/\" -e \"$makeindex=q/texindy -o %D %S/\" -norc -gg -lualatex %f"))
;(setq org-latex-pdf-process '("tasklist /fi \"IMAGENAME eq AcroRd32.exe\" /nh | findstr \"AcroRd32.exe\" > nul && pdfopen --rxi --file %b.pdf && pdfclose --rxi --file %b.pdf & latexmk -e \"$pdflatex=q/luajitlatex %S/\" -e \"$bibtex=q/bibtexu %B/\" -e \"$makeindex=q/texindy -o %D %S/\" -norc -gg -lualatex %f"))
;(setq org-latex-pdf-process '("tasklist /fi \"IMAGENAME eq AcroRd32.exe\" /nh | findstr \"AcroRd32.exe\" > nul && pdfopen --rxi --file %b.pdf && pdfclose --rxi --file %b.pdf & latexmk -e \"$pdflatex=q/xelatex %S/\" -e \"$bibtex=q/bibtexu %B/\" -e \"$makeindex=q/texindy -o %D %S/\" -norc -gg -xelatex %f"))
;(setq org-export-in-background t)
(if (not (eq org-export-in-background t))
    (setq org-file-apps
          '(("pdf" . "cmd /c echo powershell -Command \"& {$pages = (pdfinfo %s | Select-String \"^Pages:\"); $page = (-split $pages)[1]; pdfopen --rxi --file %s --page $page}\" | cmd"))))

(add-to-list 'org-latex-classes
             '("jsarticle"
               "\\ifdefined\\ucs
  \\documentclass[uplatex,12pt,a4paper,papersize,dvipdfmx]{jsarticle}
\\else
  \\documentclass[12pt,a4paper,papersize,dvipdfmx]{jsarticle}
\\fi
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
               "\\ifdefined\\ucs
  \\documentclass[uplatex,12pt,a4paper,papersize,dvips]{jsarticle}
\\else
  \\documentclass[12pt,a4paper,papersize,dvips]{jsarticle}
\\fi
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
  \\ifdefined\\ucs
    \\documentclass[uplatex,12pt,a4paper]{bxjsarticle}
  \\else
    \\documentclass[platex,12pt,a4paper]{bxjsarticle}
  \\fi
\\else
  \\ifdefined\\XeTeXversion
    \\documentclass[12pt,a4paper]{bxjsarticle}
  \\else
    \\ifdefined\\directlua
      \\documentclass[12pt,a4paper]{bxjsarticle}
    \\else
      \\documentclass[12pt,a4paper,CJK]{bxjsarticle}
    \\fi
  \\fi
\\fi
[NO-DEFAULT-PACKAGES]
\\usepackage{amsmath}
\\usepackage{newtxtext,newtxmath}
\\ifdefined\\kanjiskip
  \\usepackage[dvipdfmx]{graphicx}
  \\usepackage[dvipdfmx]{hyperref}
  \\usepackage{pxjahyper}
\\else
  \\ifdefined\\XeTeXversion
    \\usepackage[xetex]{graphicx}
    \\usepackage[xetex]{hyperref}
  \\else
    \\usepackage{graphicx}
    \\usepackage{hyperref}
  \\fi
\\fi
\\ifdefined\\directlua
  \\hypersetup{pdfencoding=auto,colorlinks=true}
\\else
  \\usepackage[whole,autotilde]{bxcjkjatype}
  \\hypersetup{unicode,colorlinks=true}
\\fi
\\ifdefined\\XeTeXversion
  \\usepackage{zxjatype}
  \\setjamainfont{ipaexm.ttf}
  \\setjasansfont{ipaexg.ttf}
  \\setjamonofont{ipaexg.ttf}
\\fi
\\ifdefined\\directlua
  \\usepackage{luatexja}
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
pdfLaTeX ではなく (u)pLaTeX + dvipdfmx で処理をする場合は latexmk を使用します．<br>
latexmk は TeX Live に含まれています．<br>

***

```
;;
;; Org mode
;;
(require 'ox-latex)
(add-to-list 'auto-mode-alist '("\\.org$" . org-mode))
(setq org-latex-default-class "jsarticle")
(setq org-latex-pdf-process '("/usr/texbin/latexmk -e '$latex=q/platex %S/' -e '$bibtex=q/pbibtex %B/' -e '$makeindex=q/mendex -o %D %S/' -e '$dvipdf=q/dvipdfmx -o %D %S/' -norc -gg -pdfdvi %f"))
;(setq org-latex-pdf-process '("/usr/texbin/latexmk -e '$latex=q/platex %S/' -e '$bibtex=q/pbibtex %B/' -e '$makeindex=q/mendex -o %D %S/' -e '$dvips=q/dvips -Ppdf -z -f %S | convbkmk -g > %D/' -e '$ps2pdf=q/ps2pdf %S %D/' -norc -gg -pdfps %f"))
;(setq org-latex-pdf-process '("/usr/texbin/latexmk -e '$latex=q/uplatex %S/' -e '$bibtex=q/upbibtex %B/' -e '$makeindex=q/mendex -o %D %S/' -e '$dvipdf=q/dvipdfmx -o %D %S/' -norc -gg -pdfdvi %f"))
;(setq org-latex-pdf-process '("/usr/texbin/latexmk -e '$latex=q/uplatex %S/' -e '$bibtex=q/upbibtex %B/' -e '$makeindex=q/mendex -o %D %S/' -e '$dvips=q/dvips -Ppdf -z -f %S | convbkmk -u > %D/' -e '$ps2pdf=q/ps2pdf %S %D/' -norc -gg -pdfps %f"))
;(setq org-latex-pdf-process '("/usr/texbin/latexmk -e '$pdflatex=q/pdflatex %S/' -e '$bibtex=q/bibtex %B/' -e '$makeindex=q/makeindex -o %D %S/' -norc -gg -pdf %f"))
;(setq org-latex-pdf-process '("/usr/texbin/latexmk -e '$pdflatex=q/lualatex %S/' -e '$bibtex=q/bibtexu %B/' -e '$makeindex=q/texindy -o %D %S/' -norc -gg -lualatex %f"))
;(setq org-latex-pdf-process '("/usr/texbin/latexmk -e '$pdflatex=q/luajitlatex %S/' -e '$bibtex=q/bibtexu %B/' -e '$makeindex=q/texindy -o %D %S/' -norc -gg -lualatex %f"))
;(setq org-latex-pdf-process '("/usr/texbin/latexmk -e '$pdflatex=q/xelatex %S/' -e '$bibtex=q/bibtexu %B/' -e '$makeindex=q/texindy -o %D %S/' -norc -gg -xelatex %f"))
;(setq org-export-in-background t)
(setq org-file-apps
      '(("pdf" . "/usr/bin/open -a Preview.app %s")))

(add-to-list 'org-latex-classes
             '("jsarticle"
               "\\ifdefined\\ucs
  \\documentclass[uplatex,12pt,a4paper,papersize,dvipdfmx]{jsarticle}
\\else
  \\documentclass[12pt,a4paper,papersize,dvipdfmx]{jsarticle}
\\fi
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
               "\\ifdefined\\ucs
  \\documentclass[uplatex,12pt,a4paper,papersize,dvips]{jsarticle}
\\else
  \\documentclass[12pt,a4paper,papersize,dvips]{jsarticle}
\\fi
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
  \\ifdefined\\ucs
    \\documentclass[uplatex,12pt,a4paper]{bxjsarticle}
  \\else
    \\documentclass[platex,12pt,a4paper]{bxjsarticle}
  \\fi
\\else
  \\ifdefined\\XeTeXversion
    \\documentclass[12pt,a4paper]{bxjsarticle}
  \\else
    \\ifdefined\\directlua
      \\documentclass[12pt,a4paper]{bxjsarticle}
    \\else
      \\documentclass[12pt,a4paper,CJK]{bxjsarticle}
    \\fi
  \\fi
\\fi
[NO-DEFAULT-PACKAGES]
\\usepackage{amsmath}
\\usepackage{newtxtext,newtxmath}
\\ifdefined\\kanjiskip
  \\usepackage[dvipdfmx]{graphicx}
  \\usepackage[dvipdfmx]{hyperref}
  \\usepackage{pxjahyper}
\\else
  \\ifdefined\\XeTeXversion
    \\usepackage[xetex]{graphicx}
    \\usepackage[xetex]{hyperref}
  \\else
    \\usepackage{graphicx}
    \\usepackage{hyperref}
  \\fi
\\fi
\\ifdefined\\directlua
  \\hypersetup{pdfencoding=auto,colorlinks=true}
\\else
  \\usepackage[whole,autotilde]{bxcjkjatype}
  \\hypersetup{unicode,colorlinks=true}
\\fi
\\ifdefined\\XeTeXversion
  \\usepackage{zxjatype}
  \\setjamainfont{ipaexm.ttf}
  \\setjasansfont{ipaexg.ttf}
  \\setjamonofont{ipaexg.ttf}
\\fi
\\ifdefined\\directlua
  \\usepackage{luatexja}
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
pdfLaTeX ではなく (u)pLaTeX + dvipdfmx で処理をする場合は latexmk を使用します．<br>
latexmk は TeX Live に含まれています．<br>

***

```
;;
;; Org mode
;;
(require 'ox-latex)
(add-to-list 'auto-mode-alist '("\\.org$" . org-mode))
(setq org-latex-default-class "jsarticle")
(setq org-latex-pdf-process '("latexmk -e '$latex=q/platex %S/' -e '$bibtex=q/pbibtex %B/' -e '$makeindex=q/mendex -o %D %S/' -e '$dvipdf=q/dvipdfmx -o %D %S/' -norc -gg -pdfdvi %f"))
;(setq org-latex-pdf-process '("latexmk -e '$latex=q/platex %S/' -e '$bibtex=q/pbibtex %B/' -e '$makeindex=q/mendex -o %D %S/' -e '$dvips=q/dvips -Ppdf -z -f %S | convbkmk -g > %D/' -e '$ps2pdf=q/ps2pdf %S %D/' -norc -gg -pdfps %f"))
;(setq org-latex-pdf-process '("latexmk -e '$latex=q/uplatex %S/' -e '$bibtex=q/upbibtex %B/' -e '$makeindex=q/mendex -o %D %S/' -e '$dvipdf=q/dvipdfmx -o %D %S/' -norc -gg -pdfdvi %f"))
;(setq org-latex-pdf-process '("latexmk -e '$latex=q/uplatex %S/' -e '$bibtex=q/upbibtex %B/' -e '$makeindex=q/mendex -o %D %S/' -e '$dvips=q/dvips -Ppdf -z -f %S | convbkmk -u > %D/' -e '$ps2pdf=q/ps2pdf %S %D/' -norc -gg -pdfps %f"))
;(setq org-latex-pdf-process '("latexmk -e '$pdflatex=q/pdflatex %S/' -e '$bibtex=q/bibtex %B/' -e '$makeindex=q/makeindex -o %D %S/' -norc -gg -pdf %f"))
;(setq org-latex-pdf-process '("latexmk -e '$pdflatex=q/lualatex %S/' -e '$bibtex=q/bibtexu %B/' -e '$makeindex=q/texindy -o %D %S/' -norc -gg -lualatex %f"))
;(setq org-latex-pdf-process '("latexmk -e '$pdflatex=q/luajitlatex %S/' -e '$bibtex=q/bibtexu %B/' -e '$makeindex=q/texindy -o %D %S/' -norc -gg -lualatex %f"))
;(setq org-latex-pdf-process '("latexmk -e '$pdflatex=q/xelatex %S/' -e '$bibtex=q/bibtexu %B/' -e '$makeindex=q/texindy -o %D %S/' -norc -gg -xelatex %f"))
;(setq org-export-in-background t)
(setq org-file-apps
      '(("pdf" . "evince %s")))

(add-to-list 'org-latex-classes
             '("jsarticle"
               "\\ifdefined\\ucs
  \\documentclass[uplatex,12pt,a4paper,papersize,dvipdfmx]{jsarticle}
\\else
  \\documentclass[12pt,a4paper,papersize,dvipdfmx]{jsarticle}
\\fi
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
               "\\ifdefined\\ucs
  \\documentclass[uplatex,12pt,a4paper,papersize,dvips]{jsarticle}
\\else
  \\documentclass[12pt,a4paper,papersize,dvips]{jsarticle}
\\fi
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
  \\ifdefined\\ucs
    \\documentclass[uplatex,12pt,a4paper]{bxjsarticle}
  \\else
    \\documentclass[platex,12pt,a4paper]{bxjsarticle}
  \\fi
\\else
  \\ifdefined\\XeTeXversion
    \\documentclass[12pt,a4paper]{bxjsarticle}
  \\else
    \\ifdefined\\directlua
      \\documentclass[12pt,a4paper]{bxjsarticle}
    \\else
      \\documentclass[12pt,a4paper,CJK]{bxjsarticle}
    \\fi
  \\fi
\\fi
[NO-DEFAULT-PACKAGES]
\\usepackage{amsmath}
\\usepackage{newtxtext,newtxmath}
\\ifdefined\\kanjiskip
  \\usepackage[dvipdfmx]{graphicx}
  \\usepackage[dvipdfmx]{hyperref}
  \\usepackage{pxjahyper}
\\else
  \\ifdefined\\XeTeXversion
    \\usepackage[xetex]{graphicx}
    \\usepackage[xetex]{hyperref}
  \\else
    \\usepackage{graphicx}
    \\usepackage{hyperref}
  \\fi
\\fi
\\ifdefined\\directlua
  \\hypersetup{pdfencoding=auto,colorlinks=true}
\\else
  \\usepackage[whole,autotilde]{bxcjkjatype}
  \\hypersetup{unicode,colorlinks=true}
\\fi
\\ifdefined\\XeTeXversion
  \\usepackage{zxjatype}
  \\setjamainfont{ipaexm.ttf}
  \\setjasansfont{ipaexg.ttf}
  \\setjamonofont{ipaexg.ttf}
\\fi
\\ifdefined\\directlua
  \\usepackage{luatexja}
\\fi"
               ("\\section{%s}" . "\\section*{%s}")
               ("\\subsection{%s}" . "\\subsection*{%s}")
               ("\\subsubsection{%s}" . "\\subsubsection*{%s}")
               ("\\paragraph{%s}" . "\\paragraph*{%s}")
               ("\\subparagraph{%s}" . "\\subparagraph*{%s}")))
```

***

### 使い方 {#a6515cd5}

org ファイルの先頭に

```
#+TITLE: hoge
#+AUTHOR: fuga
#+LATEX_CLASS: jsarticle
```

を追加します．

C-c C-e l l で LaTeX ファイルを出力します．<br>
C-c C-e l p で PDF ファイルを出力します．<br>
C-c C-e l o で PDF ファイルを出力して表示します．<br>

## Export to HTML {#t60cf94b}

- [HTML export](http://orgmode.org/manual/HTML-export.html)
- [Org-mode による HTML 文書作成入門](http://www.geocities.jp/km_pp1/org-mode/org-mode-document.html)
