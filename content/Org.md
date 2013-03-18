---
title: "Org"
url: "/Org/"
date: 2011-08-11T04:25:12Z
pukiwiki: "Org"
---

# Org

[Emacs](/Emacs/) > Org-mode

## [Org-mode](http://orgmode.org/) {#d6cfda4f}

<img src="http://orgmode.org/img/org-mode-unicorn-logo.png" alt="Org-mode" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## Org-mode とは {#rea710af}

Org mode is for keeping notes, maintaining TODO lists, planning projects, and authoring documents with a fast and effective plain-text system.

- [Org mode for Emacs &ndash; Your Life in Plain Text](http://orgmode.org/)
- [org-mode.git](http://orgmode.org/w/?p=org-mode.git)
    - [org-beamer.el --- Beamer-specific LaTeX export for org-mode](http://orgmode.org/w/?p=org-mode.git;a=blob;f=lisp/org-beamer.el)
    - [org-latex.el --- LaTeX exporter for org-mode](http://orgmode.org/w/?p=org-mode.git;a=blob;f=lisp/org-latex.el)

## LaTeX Export {#k6bbb6c5}

- [LaTeX Export](http://orgmode.org/worg/org-tutorials/org-latex-export.html)
- [Emacs の Org ファイルを platex と dvipdfmx で PDF 化する設定．](http://qiita.com/items/6eb4d8d799e41ef3f15d)
- [org-modeでLaTeXのプリアンプルを設定](http://d.hatena.ne.jp/hirono2011/20120712/1342098157)
- [org-modeのLatexエクスポートで長いURLが折り返さないのを修正](http://d.hatena.ne.jp/hirono2011/20111124/1322156182)
- [org-modeでTeX出力のフォーマットを設定する](http://d.hatena.ne.jp/sanryuu/20110413)
- [Org-mode](http://d.hatena.ne.jp/daharu/20110409/)
- [org-mode で日本語LaTeXにexport](http://blog.goo.ne.jp/gleaning/e/683f62e972b126324882477c75522207)
- [org-modeで卒業論文を書く :NOTE:](http://d.hatena.ne.jp/r_takaishi/20100209/)
- [Org-Mode で日本語 PDF を出力できるようにする](http://www.moreslowly.jp/mw/index.php/Org-Mode_%E3%81%A7%E6%97%A5%E6%9C%AC%E8%AA%9E_PDF_%E3%82%92%E5%87%BA%E5%8A%9B%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%99%E3%82%8B)
- [Org-Mode の機能、組み込み LaTeX — その1](http://www.kitetu.net/old/notes/0003.html)
- [Org-Mode の機能、組み込み LaTeX — その2](http://www.kitetu.net/old/notes/0004.html)
- [Org-Mode の組み込み LaTeX 和訳部分](http://www.kitetu.net/info-renais/emacs/manual/org-mode/tr_embedded-latex.html)
- [Jekyll + Org-mod で LaTeX](http://gacha.yukimizake.net/blog/2010/10/22/jekyll-and-org-mod-with-latex.html)

### インストール {#l69ff892}

#### Emacs 標準のパッケージ管理システムを使用する場合 {#f8230508}

M-x package-install RET org RET

または

M-x list-packages RET でリストを表示して org を選択

#### 公式サイトのパッケージを使用する場合 {#vc647a74}

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

### Windows {#q16766de}

- [Emacsのorg-modeで数式をインライン表示する方法](http://d.hatena.ne.jp/natsutan/20120721/1342838705)
- [Org-Modeで日本語を含むファイルをPDFにエクスポートする方法](http://d.hatena.ne.jp/mokimokisan/20120624/1340558857)
- [日本語文を含む org ファイルを jsarticle クラスの LaTeX にエクスポートして PDF に変換する方法](http://tmishina.cocolog-nifty.com/blog/2010/11/org-jsarticle-l.html)

W32TeX では

```
! LaTeX Error: File `wasysym.sty' not found.
```

と表示されるので W32TeX を使用する場合は wasysym.sty を別途インストールしてください．

#### 設定 {#y73c067b}

&#x7e;/.emacs.d/init.el に設定を記述します．<br>
Org-mode はデフォルトでは pdfLaTeX が使われます．<br>
pdfLaTeX ではなく pLaTeX + dvipdfmx で処理をする場合は latexmk を使用します．<br>
latexmk は W32TeX, TeX Live に含まれています．<br>
W32TeX の場合は latexmk の実行には [Strawberry Perl](http://strawberryperl.com/) が必要です．<br>

***

```
;;
;; Org-mode
;;
(add-to-list 'load-path "~/site-lisp/org/lisp")
(require 'org)
(require 'org-latex)
(add-to-list 'auto-mode-alist '("\\.org$" . org-mode))
(setq org-export-latex-coding-system 'utf-8)
(setq org-export-run-in-background t)
(setq org-latex-to-pdf-process '("tasklist /fi \"IMAGENAME eq AcroRd32.exe\" /nh | findstr \"AcroRd32.exe\" > nul && pdfopen --rxi --file %b.pdf && pdfclose --rxi --file %b.pdf & latexmk -e \"$latex=q/platex -kanji=utf8 -guess-input-enc/\" -e \"$bibtex=q/pbibtex -kanji=utf8/\" -e \"$makeindex=q/mendex -U/\" -e \"$dvipdf=q/dvipdfmx -o %D %S/\" -norc -gg -pdfdvi %f"))
(add-to-list 'org-export-latex-classes
             '("jsarticle"
               "\\documentclass[12pt,a4paper,dvipdfmx]{jsarticle}
\\usepackage{amsmath}
\\usepackage{amssymb}
\\usepackage{graphicx}
\\usepackage{hyperref}
\\usepackage{pxjahyper}"
               ("\\section{%s}" . "\\section*{%s}")
               ("\\subsection{%s}" . "\\subsection*{%s}")
               ("\\subsubsection{%s}" . "\\subsubsection*{%s}")
               ("\\paragraph{%s}" . "\\paragraph*{%s}")
               ("\\subparagraph{%s}" . "\\subparagraph*{%s}")))
```

***

org ファイルの先頭に

```
#+LaTeX_CLASS: jsarticle
```

を追加します．

### OS X {#a97921ad}

- [EmacsのOrg-modeから日本語ファイルをTeX&amp;PDFにする時の問題点](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=903)
- [bxjsarticleと英語文献の書式](https://okumuralab.org/tex/mod/forum/discuss.php?d=841)
- [Emacs + Org Export + TeXShop](http://skalldan.wordpress.com/2011/07/18/emacs-org-export-texshop/)

### Linux {#h20d131a}

- [TeX Live 2011 ユーザが org 文書を pdf に出力するための設定](http://qiita.com/items/da23c80d334139194a4d)
- [LaTeX形式のレポートをemacs+org-modeだけで書く](http://ik-fib.com/2012/01/latex_emacs_org-mode/)
- [Emacs org-modeを使ってみる: (14) LaTeXにエクスポート](http://d.hatena.ne.jp/tamura70/20100217/org)

### 使い方 {#a6515cd5}

C-c C-e l で LaTeX ファイルを出力します．<br>
C-c C-e p で PDF ファイルを出力します．<br>
C-c C-e d で PDF ファイルを出力して表示します．<br>

## [Beamer](/Beamer/) Export {#k112eb83}

- [Writing Beamer presentations in org-mode](http://orgmode.org/worg/exporters/beamer/tutorial.html)
- \[[Emacs\]emacs + beamerの設定](http://d.hatena.ne.jp/killingout_n-bita/20121224/1356359190)
- [Emacs org-modeを使ってみる: (15) Beamerにエクスポート](http://d.hatena.ne.jp/tamura70/20100218/org)
