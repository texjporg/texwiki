---
title: "Emacs/Org mode"
url: "/Emacs/Org mode/"
date: 2013-04-12T19:57:09Z
pukiwiki: "Emacs/Org mode"
---

# Emacs/Org mode

[Emacs](/Emacs/) > Org mode

## [Org mode](https://orgmode.org/) {#d6cfda4f}

<!-- Org mode is for keeping notes, maintaining TODO lists, planning projects, and authoring documents with a fast and effective plain-text system. -->

Org mode は

- ノートの保存
- TODO リストの管理
- プロジェクト計画

をするための Emacs のメジャーモードです。
テキストファイルを高速・効率的に編集することができます。

- [Org mode for Emacs &ndash; Your Life in Plain Text](https://orgmode.org/)
- [Org Mode - GNU Emacs Manual](https://www.gnu.org/software/emacs/manual/html_node/emacs/Org-Mode.html#Org-Mode)
- [Org Mode (GNU Emacs Manual(Japanese Translation)): Org Mode](https://ayatakesi.github.io/emacs/26.1/html/TeX-Mode.html#TeX-Mode)

***

***

## インストール {#l69ff892}

Org mode は Emacs に標準で含まれています。
Emacs 30.1 の場合は [バージョン 9.7.11](https://git.savannah.gnu.org/cgit/emacs.git/tree/lisp/org/org.el?h=emacs-30.1#n12) ([2024-08-23](https://git.savannah.gnu.org/cgit/emacs/org-mode.git/tag/?h=release_9.7.11)) です。
最新版を使いたい場合は以下の手順を踏みます。

### Emacs 標準のパッケージ管理システムを使用する場合 {#f8230508}

M-x package-install RET org RET

または

M-x list-packages RET でリストを表示して org を選択

### 公式サイトのパッケージを使用する場合 {#vc647a74}

パッケージを展開して名前を org にリネームして &#x7e;/.emacs.d/site-lisp に配置します。

```
~
└─.emacs.d
    └─site-lisp
        └─org
            └─lisp
```

&#x7e;/.emacs.d/init.el で load-path に ~/.emacs.d/site-lisp/org/lisp を追加します。

```
(add-to-list 'load-path "~/.emacs.d/site-lisp/org/lisp")
```

## 設定例 {#y73c067b}

&#x7e;/.emacs.d/init.el に設定を記述します。

Org mode はデフォルトでは pdfLaTeX が使われます。
日本語を使用する場合は LuaLaTeX あるいは upLaTeX + dvipdfmx を使用してタイプセットをするように設定を変更します。

### Windows {#q16766de}

```
;;
;; Org mode
;;
(require 'ox-latex)
(add-to-list 'auto-mode-alist '("\\.org$" . org-mode))
(setq org-latex-default-class "jlreq-article")
;(setq org-latex-default-class "jlreq-article-tate")
;(setq org-latex-default-class "bxjsarticle")
(setq org-latex-pdf-process '("latexmk -lualatex %f"))
;(setq org-latex-pdf-process '("latexmk -e \"$lualatex=q/lualatex %%S/\" -e \"$bibtex=q/bibtexu %B/\" -e \"$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/\" -e \"$makeindex=q/upmendex -o %%D %%S/\" -norc -gg -pdflua %f"))
;(setq org-latex-pdf-process '("latexmk -e \"$latex=q/uplatex -kanji=utf8 -no-guess-input-enc %%S/\" -e \"$bibtex=q/bibtexu %B/\" -e \"$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/\" -e \"$makeindex=q/upmendex -o %%D %%S/\" -e \"$dvipdf=q/dvipdfmx -o %%D %%S/\" -norc -gg -pdfdvi %f"))
;(setq org-export-in-background t)
(if (not (eq org-export-in-background t))
    (setq org-file-apps
          '(("pdf" . "powershell -Command \"& {\"C:/Users/*/AppData/Local/SumatraPDF/SumatraPDF.exe\" -reuse-instance %s}"))))

(add-to-list 'org-latex-classes
             '("jlreq-article"
               "\\ifdefined\\kanjiskip
  \\documentclass[uplatex,dvipdfmx,11pt,paper=a4]{jlreq}
\\else
  \\documentclass[11pt,paper=a4]{jlreq}
\\fi
[NO-DEFAULT-PACKAGES]
\\usepackage{amsmath}
\\usepackage{newtxtext,newtxmath}
\\ifdefined\\kanjiskip
  \\usepackage{graphicx}
  \\usepackage{hyperref}
  \\usepackage{pxjahyper}
  \\hypersetup{colorlinks=true}
\\else
  \\usepackage{graphicx}
  \\usepackage{hyperref}
  \\hypersetup{pdfencoding=auto,colorlinks=true}
\\fi"
               ("\\section{%s}" . "\\section*{%s}")
               ("\\subsection{%s}" . "\\subsection*{%s}")
               ("\\subsubsection{%s}" . "\\subsubsection*{%s}")
               ("\\paragraph{%s}" . "\\paragraph*{%s}")
               ("\\subparagraph{%s}" . "\\subparagraph*{%s}")))

(add-to-list 'org-latex-classes
             '("jlreq-article-tate"
               "\\ifdefined\\kanjiskip
  \\documentclass[uplatex,dvipdfmx,tate,11pt,paper=a4]{jlreq}
\\else
  \\documentclass[tate,11pt,paper=a4]{jlreq}
\\fi
[NO-DEFAULT-PACKAGES]
\\usepackage{amsmath}
\\usepackage{newtxtext,newtxmath}
\\ifdefined\\kanjiskip
  \\usepackage{graphicx}
  \\usepackage{hyperref}
  \\usepackage{pxjahyper}
  \\hypersetup{colorlinks=true}
\\else
  \\usepackage{graphicx}
  \\usepackage{hyperref}
  \\hypersetup{pdfencoding=auto,colorlinks=true}
\\fi"
               ("\\section{%s}" . "\\section*{%s}")
               ("\\subsection{%s}" . "\\subsection*{%s}")
               ("\\subsubsection{%s}" . "\\subsubsection*{%s}")
               ("\\paragraph{%s}" . "\\paragraph*{%s}")
               ("\\subparagraph{%s}" . "\\subparagraph*{%s}")))

(add-to-list 'org-latex-classes
             '("bxjsarticle"
               "\\documentclass[autodetect-engine,dvi=dvipdfmx,11pt,a4paper,ja=standard]{bxjsarticle}
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

### macOS {#a97921ad}

動作未確認です。

```
;;
;; PATH
;;
(setenv "PATH" "/usr/local/bin:/Library/TeX/texbin/:/Applications/Skim.app/Contents/SharedSupport:$PATH" t)
(setq exec-path (append '("/usr/local/bin" "/Library/TeX/texbin" "/Applications/Skim.app/Contents/SharedSupport") exec-path))

;;
;; Org mode
;;
(require 'ox-latex)
(add-to-list 'auto-mode-alist '("\\.org$" . org-mode))
(setq org-latex-default-class "jlreq-article")
;(setq org-latex-default-class "jlreq-article-tate")
;(setq org-latex-default-class "bxjsarticle")
(setq org-latex-pdf-process '("latexmk -lualatex %f"))
;(setq org-latex-pdf-process '("latexmk -e '$lualatex=q/lualatex %%S/' -e '$bibtex=q/bibtexu %B/' -e '$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex -o %%D %%S/' -norc -gg -pdflua %f"))
;(setq org-latex-pdf-process '("latexmk -e '$latex=q/uplatex -kanji=utf8 -no-guess-input-enc %%S/' -e '$bibtex=q/bibtexu %B/' -e '$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex -o %%D %%S/' -e '$dvipdf=q/dvipdfmx -o %%D %%S/' -norc -gg -pdfdvi %f"))
;(setq org-export-in-background t)
(setq org-file-apps
      '(("pdf" . "open -a Skim %s")))

(add-to-list 'org-latex-classes
             '("jlreq-article"
               "\\ifdefined\\kanjiskip
  \\documentclass[uplatex,dvipdfmx,11pt,paper=a4]{jlreq}
\\else
  \\documentclass[11pt,paper=a4]{jlreq}
\\fi
[NO-DEFAULT-PACKAGES]
\\usepackage{amsmath}
\\usepackage{newtxtext,newtxmath}
\\ifdefined\\kanjiskip
  \\usepackage{graphicx}
  \\usepackage{hyperref}
  \\usepackage{pxjahyper}
  \\hypersetup{colorlinks=true}
\\else
  \\usepackage{graphicx}
  \\usepackage{hyperref}
  \\hypersetup{pdfencoding=auto,colorlinks=true}
\\fi"
               ("\\section{%s}" . "\\section*{%s}")
               ("\\subsection{%s}" . "\\subsection*{%s}")
               ("\\subsubsection{%s}" . "\\subsubsection*{%s}")
               ("\\paragraph{%s}" . "\\paragraph*{%s}")
               ("\\subparagraph{%s}" . "\\subparagraph*{%s}")))

(add-to-list 'org-latex-classes
             '("jlreq-article-tate"
               "\\ifdefined\\kanjiskip
  \\documentclass[uplatex,dvipdfmx,tate,11pt,paper=a4]{jlreq}
\\else
  \\documentclass[tate,11pt,paper=a4]{jlreq}
\\fi
[NO-DEFAULT-PACKAGES]
\\usepackage{amsmath}
\\usepackage{newtxtext,newtxmath}
\\ifdefined\\kanjiskip
  \\usepackage{graphicx}
  \\usepackage{hyperref}
  \\usepackage{pxjahyper}
  \\hypersetup{colorlinks=true}
\\else
  \\usepackage{graphicx}
  \\usepackage{hyperref}
  \\hypersetup{pdfencoding=auto,colorlinks=true}
\\fi"
               ("\\section{%s}" . "\\section*{%s}")
               ("\\subsection{%s}" . "\\subsection*{%s}")
               ("\\subsubsection{%s}" . "\\subsubsection*{%s}")
               ("\\paragraph{%s}" . "\\paragraph*{%s}")
               ("\\subparagraph{%s}" . "\\subparagraph*{%s}")))

(add-to-list 'org-latex-classes
             '("bxjsarticle"
               "\\documentclass[autodetect-engine,dvi=dvipdfmx,11pt,a4paper,ja=standard]{bxjsarticle}
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

### Linux {#h20d131a}

```
;;
;; Org mode
;;
(require 'ox-latex)
(add-to-list 'auto-mode-alist '("\\.org$" . org-mode))
(setq org-latex-default-class "jlreq-article")
;(setq org-latex-default-class "jlreq-article-tate")
;(setq org-latex-default-class "bxjsarticle")
(setq org-latex-pdf-process '("latexmk -lualatex %f"))
;(setq org-latex-pdf-process '("latexmk -e '$lualatex=q/lualatex %%S/' -e '$bibtex=q/bibtexu %B/' -e '$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex -o %%D %%S/' -norc -gg -pdflua %f"))
;(setq org-latex-pdf-process '("latexmk -e '$latex=q/uplatex -kanji=utf8 -no-guess-input-enc %%S/' -e '$bibtex=q/bibtexu %B/' -e '$biber=q/biber --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex -o %%D %%S/' -e '$dvipdf=q/dvipdfmx -o %%D %%S/' -norc -gg -pdfdvi %f"))
;(setq org-export-in-background t)
(setq org-file-apps
      '(("pdf" . "evince %s")))

(add-to-list 'org-latex-classes
             '("jlreq-article"
               "\\ifdefined\\kanjiskip
  \\documentclass[uplatex,dvipdfmx,11pt,paper=a4]{jlreq}
\\else
  \\documentclass[11pt,paper=a4]{jlreq}
\\fi
[NO-DEFAULT-PACKAGES]
\\usepackage{amsmath}
\\usepackage{newtxtext,newtxmath}
\\ifdefined\\kanjiskip
  \\usepackage{graphicx}
  \\usepackage{hyperref}
  \\usepackage{pxjahyper}
  \\hypersetup{colorlinks=true}
\\else
  \\usepackage{graphicx}
  \\usepackage{hyperref}
  \\hypersetup{pdfencoding=auto,colorlinks=true}
\\fi"
               ("\\section{%s}" . "\\section*{%s}")
               ("\\subsection{%s}" . "\\subsection*{%s}")
               ("\\subsubsection{%s}" . "\\subsubsection*{%s}")
               ("\\paragraph{%s}" . "\\paragraph*{%s}")
               ("\\subparagraph{%s}" . "\\subparagraph*{%s}")))

(add-to-list 'org-latex-classes
             '("jlreq-article-tate"
               "\\ifdefined\\kanjiskip
  \\documentclass[uplatex,dvipdfmx,tate,11pt,paper=a4]{jlreq}
\\else
  \\documentclass[tate,11pt,paper=a4]{jlreq}
\\fi
[NO-DEFAULT-PACKAGES]
\\usepackage{amsmath}
\\usepackage{newtxtext,newtxmath}
\\ifdefined\\kanjiskip
  \\usepackage{graphicx}
  \\usepackage{hyperref}
  \\usepackage{pxjahyper}
  \\hypersetup{colorlinks=true}
\\else
  \\usepackage{graphicx}
  \\usepackage{hyperref}
  \\hypersetup{pdfencoding=auto,colorlinks=true}
\\fi"
               ("\\section{%s}" . "\\section*{%s}")
               ("\\subsection{%s}" . "\\subsection*{%s}")
               ("\\subsubsection{%s}" . "\\subsubsection*{%s}")
               ("\\paragraph{%s}" . "\\paragraph*{%s}")
               ("\\subparagraph{%s}" . "\\subparagraph*{%s}")))

(add-to-list 'org-latex-classes
             '("bxjsarticle"
               "\\documentclass[autodetect-engine,dvi=dvipdfmx,11pt,a4paper,ja=standard]{bxjsarticle}
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

## 使い方 {#a6515cd5}

### jlreq article の横書きを使用する場合 {#t4ccb221}

org ファイルの先頭に

```
#+TITLE: hoge
#+AUTHOR: fuga
#+LATEX_CLASS: jlreq-article
```

を追加します。

### jlreq article の縦書きを使用する場合 {#c3a15d54}

org ファイルの先頭に

```
#+TITLE: hoge
#+AUTHOR: fuga
#+LATEX_CLASS: jlreq-article-tate
```

を追加します。

### bxjsarticle を使用する場合 {#mc51aa00}

org ファイルの先頭に

```
#+TITLE: hoge
#+AUTHOR: fuga
#+LATEX_CLASS: bxjsarticle
```

を追加します。

### ファイルの出力 {#nee250e6}

- C-c C-e l l で LaTeX ファイルを出力します。
- C-c C-e l p で PDF ファイルを出力します。
- C-c C-e l o で PDF ファイルを出力して表示します。

## 関連リンク {#m969bd42}

### Export to LaTeX {#k6bbb6c5}

- [LaTeX export](https://orgmode.org/manual/LaTeX-export.html#LaTeX-export)
- [Emacsのorg-modeで論文を書く（その1：pdfとhtmlへの出力）](https://taipapamotohus.com/post/org-mode_paper_1/)
- [BasicTeX + LuaTeX-ja + OrgMode on OSX で beamer な PDF を出すまで](https://gongo.hatenablog.com/entry/2014/01/13/225304)
- [org-mode による論文作成入門](https://akisute3.hatenablog.com/entry/2013/12/28/144918)
- [orgmodeで卒論を書いたときの話](https://qiita.com/PowerPC7450/items/b34b080dd941af689b56)
- [org-mode で日本語LaTeXを出力する方法](https://qiita.com/kawabata@github/items/1b56ec8284942ff2646b)
- [org-mode 8.0で変わった変数など](https://qiita.com/PowerPC7450/items/575291f7aa8ff6807abd)
- [org-mode 8.0 画像入り日本語PDFをOSX10.8で出力するなら LuaTeX を使え！](http://blog.livedoor.jp/tek_nishi/archives/7862119.html)

### Export to HTML {#t60cf94b}

- [HTML export](http://orgmode.org/manual/HTML-export.html)
- [Org-mode による HTML 文書作成入門 \[Wayback Machine\]](http://web.archive.org/web/20190330193554/http://www.geocities.jp/km_pp1/org-mode/org-mode-document.html)

### License {#da0cead0}

[GPLv3](https://git.savannah.gnu.org/cgit/emacs/org-mode.git/tree/COPYING)

### リリース情報 {#lb82f3d0}

- [https://elpa.gnu.org/packages/org.html](https://elpa.gnu.org/packages/org.html)
- [https://git.savannah.gnu.org/cgit/emacs/org-mode.git/refs/tags](https://git.savannah.gnu.org/cgit/emacs/org-mode.git/refs/tags)

### ChangeLog {#r21fa6e2}

- [https://git.savannah.gnu.org/cgit/emacs/org-mode.git/log/](https://git.savannah.gnu.org/cgit/emacs/org-mode.git/log/)
