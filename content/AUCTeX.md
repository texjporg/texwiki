---
title: "AUCTeX"
url: "/AUCTeX/"
date: 2014-01-09T22:23:37Z
pukiwiki: "AUCTeX"
---

# AUCTeX

[Emacs](/Emacs/) > AUCTeX

## [AUCTeX](http://www.gnu.org/software/auctex/) {#d40177aa}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## AUCTeX とは {#h92ad1b8}

AUCTeX は Emacs の TeX モードです．<br>

- [AUCTeX - Sophisticated document creation](http://www.gnu.org/software/auctex/)
    (公式ページ)

- [AUCTeX, an integrated TeX/LaTeX environment - 概要 \[Savannah\]](http://savannah.gnu.org/projects/auctex/)
- [auctex Archives](http://lists.gnu.org/archive/html/auctex/)
- [CTAN:help/Catalogue/entries/auctex.html](https://mirror.ctan.org/help/Catalogue/entries/auctex.html)
- [EmacsWiki: AUCTeX](http://www.emacswiki.org/emacs/AUCTeX)
- [http://thread.gmane.org/gmane.emacs.auctex.devel/](http://thread.gmane.org/gmane.emacs.auctex.devel/)

### License {#j807fd6e}

[GPLv3](http://git.savannah.gnu.org/cgit/auctex.git/tree/COPYING)

### リリース情報 {#bbfafcad}

- [http://git.savannah.gnu.org/cgit/auctex.git/refs/](http://git.savannah.gnu.org/cgit/auctex.git/refs/)
    - [http://git.savannah.gnu.org/cgit/auctex.git/refs/tags](http://git.savannah.gnu.org/cgit/auctex.git/refs/tags)

を参照．<br>

### ChangeLog {#c24ccc65}

- [log](http://git.savannah.gnu.org/cgit/auctex.git/log/)
- [ChangeLog](http://git.savannah.gnu.org/cgit/auctex.git/tree/ChangeLog)

### スクリーンショット {#s450de09}

[![Showing the mode menu and syntax highlighting in LATEX mode.](http://www.gnu.org/software/auctex/img/auctex-screenshot-thumb.png)](http://www.gnu.org/software/auctex/img/auctex-screenshot.png)
　[![Showing the same file as above but content like footnotes or items is folded.](http://www.gnu.org/software/auctex/img/auctex-screenshot-fold-thumb.png)](http://www.gnu.org/software/auctex/img/auctex-screenshot-fold.png)
　[![Showing a dtx file and different syntax highlighting of documentation and program parts.](http://www.gnu.org/software/auctex/img/auctex-screenshot-doctex-thumb.png)](http://www.gnu.org/software/auctex/img/auctex-screenshot-doctex.png)
　[![Showing a sectioning command and math rendered as images inside an Emacs buffer.](http://www.gnu.org/software/auctex/img/preview-screenshot-thumb.png)](http://www.gnu.org/software/auctex/img/preview-screenshot.png)
　[![Showing a less puristic interface setup with LATEX-specific tool bar and scroll bar.](http://www.gnu.org/software/auctex/img/auctex-screenshot-tool-bar-thumb.png)](http://www.gnu.org/software/auctex/img/auctex-screenshot-tool-bar.png)

## 注意点 {#gb666e4a}

### " を入力しようとすると \`\` が入力される → C-q " {#q07274ce}

- [Emacs + YaTeX でダブルクォーテーションを入力](http://tetu1984.hateblo.jp/entry/20090123/1232651566)

AUCTeX, TeX mode, YaTeX では " を入力しようとすると \`\` が入力されます．<br>
\`\` ではなく " を入力したい場合は C-q " (Ctrl-Q を入力した後で " を入力) とします．<br>

## 不具合 {#dd1381aa}

- [bug-auctex](http://www.mail-archive.com/bug-auctex@gnu.org/)

## インストール {#o492e3e0}

### Emacs 標準のパッケージ管理システムを使用する場合 {#s03dbb73}

M-x package-install RET auctex RET

または

M-x list-packages RET でリストを表示して auctex を選択

### Windows {#w81a725c}

64-bit Windows の場合は<br>
[NTEmacs64](https://github.com/chuntaro/NTEmacs64) または [emacs-w64](http://emacsbinw64.sourceforge.net/) または [64 bits emacs for Windows](http://semantic.supelec.fr/popineau/programming-emacs.html)<br>
32-bit Windows の場合は<br>
[EmacsのMinGWビルド](http://www.rainyman.net/nest/?p=861) または [NTEmacs](http://cha.la.coocan.jp/doc/NTEmacs.html) または [emacs for gnupack](http://sourceforge.jp/projects/gnupack/)<br>
をインストールします．<br>

Emacs を起動して

```
C-x C-f ~/
```

で，ホームディレクトリ (&#x7e;/) の場所を確認します．<br>

#### 公式サイトのパッケージを使用する場合 {#o7039c80}

[公式サイトのダウンロードページ](http://www.gnu.org/software/auctex/download-for-windows.html) またはミラーサイト

- [http://ftpmirror.gnu.org/auctex/](http://ftpmirror.gnu.org/auctex/)
    <!-- (See http://www.gnu.org/order/ftp.html) -->

- [CTAN:support/auctex/](https://mirror.ctan.org/support/auctex/)

から auctex-11.87-e24.2-msw.zip をダウンロードして展開します．

auctex-11.87-e24.2-msw フォルダーの中の site-lisp フォルダーをコピーして &#x7e;/.emacs.d/ にペーストします．(&#x7e;/.emacs.d/ が無ければ新規に作成します．)

load-path に追加して自動ロードする場合は以下を &#x7e;/.emacs.d/init.el に記述します．

```
(add-to-list 'load-path "~/.emacs.d/site-lisp/site-start.d")
(load "auctex.el" nil t t)
(load "preview-latex.el" nil t t)
```

#### 設定 {#g637a7d7}

&#x7e;/.emacs.d/init.el に設定を記述します．<br>
SumatraPDF を -forward-search &lt;texfile> &lt;linenumber> オプションを使用して実行した場合 SumatraPDF を前面に表示して forward search します．<br>
SumatraPDF を前面に表示したくない場合は [SumatraPDF/fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) の fwdsumatrapdf.exe を使用します．<br>
SumatraPDF の inverse search については [Emacs#SumatraPDF との連携#inverse search](/Emacs/#a06810d6) を参照してください．<br>

***

```
;;
;; AUCTeX
;;
(eval-after-load "tex-jp"
  '(progn
     (setq TeX-engine-alist '((pdfuptex "pdfupTeX"
                                        "ptex2pdf -u -e -ot \"-kanji=utf8 -no-guess-input-enc %S %(mode)\""
                                        "ptex2pdf -u -l -ot \"-kanji=utf8 -no-guess-input-enc %S %(mode)\""
                                        "euptex")))
     (setq japanese-TeX-engine-default 'pdfuptex)
     ;(setq japanese-TeX-engine-default 'luatex)
     ;(setq japanese-TeX-engine-default 'xetex)
     (setq TeX-view-program-list '(("SumatraPDF"
                                    "powershell -Command \"& {$r = Write-Output %o;$t = Write-Output %b;$o = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFileNameWithoutExtension($r),'.pdf','\"\"\"');$b = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFileNameWithoutExtension($t),'.tex','\"\"\"');Start-Process SumatraPDF -ArgumentList ('-reuse-instance',$o,'-forward-search',$b,%n)}\"")))
     (setq TeX-view-program-selection '((output-dvi "SumatraPDF")
                                        (output-pdf "SumatraPDF")))
     (setq japanese-LaTeX-default-style "jsarticle")
     ;(setq japanese-LaTeX-default-style "ltjsarticle")
     ;(setq japanese-LaTeX-default-style "bxjsarticle")
     (dolist (command '("pTeX" "pLaTeX" "pBibTeX" "jTeX" "jLaTeX" "jBibTeX" "Mendex"))
       (delq (assoc command TeX-command-list) TeX-command-list))))
(setq preview-image-type 'dvipng)
(setq TeX-source-correlate-method 'synctex)
(setq TeX-source-correlate-start-server t)
(add-hook 'LaTeX-mode-hook 'TeX-source-correlate-mode)
(add-hook 'LaTeX-mode-hook 'TeX-PDF-mode)
(add-hook 'LaTeX-mode-hook 'LaTeX-math-mode)
(add-hook 'LaTeX-mode-hook
          (function (lambda ()
                      (add-to-list 'TeX-command-list
                                   '("Latexmk"
                                     "latexmk %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-pdfupLaTeX"
                                     "latexmk -e \"$latex=q/uplatex %%O -kanji=utf8 -no-guess-input-enc %S %(mode) %%S/\" -e \"$bibtex=q/upbibtex %%O %%B/\" -e \"$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/\" -e \"$makeindex=q/mendex %%O -U -o %%D %%S/\" -e \"$dvipdf=q/dvipdfmx %%O -o %%D %%S/\" -norc -gg -pdfdvi %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-pdfupLaTeX"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-pdfupLaTeX2"
                                     "latexmk -e \"$latex=q/uplatex %%O -kanji=utf8 -no-guess-input-enc %S %(mode) %%S/\" -e \"$bibtex=q/upbibtex %%O %%B/\" -e \"$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/\" -e \"$makeindex=q/mendex %%O -U -o %%D %%S/\" -e \"$dvips=q/dvips %%O -z -f %%S | convbkmk -u > %%D/\" -e \"$ps2pdf=q/ps2pdf.exe %%O %%S %%D/\" -norc -gg -pdfps %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-pdfupLaTeX2"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-pdfLaTeX"
                                     "latexmk -e \"$pdflatex=q/pdflatex %%O %S %(mode) %%S/\" -e \"$bibtex=q/bibtex %%O %%B/\" -e \"$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/\" -e \"$makeindex=q/makeindex %%O -o %%D %%S/\" -norc -gg -pdf %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-pdfLaTeX"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-LuaLaTeX"
                                     "latexmk -e \"$pdflatex=q/lualatex %%O %S %(mode) %%S/\" -e \"$bibtex=q/bibtexu %%O %%B/\" -e \"$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/\" -e \"$makeindex=q/makeindex %%O -o %%D %%S/\" -norc -gg -pdf %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-LuaLaTeX"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-LuaJITLaTeX"
                                     "latexmk -e \"$pdflatex=q/luajitlatex %%O %S %(mode) %%S/\" -e \"$bibtex=q/bibtexu %%O %%B/\" -e \"$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/\" -e \"$makeindex=q/makeindex %%O -o %%D %%S/\" -norc -gg -pdf %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-LuaJITLaTeX"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-XeLaTeX"
                                     "latexmk -e \"$pdflatex=q/xelatex %%O %S %(mode) %%S/\" -e \"$bibtex=q/bibtexu %%O %%B/\" -e \"$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/\" -e \"$makeindex=q/makeindex %%O -o %%D %%S/\" -norc -gg -pdf %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-XeLaTeX"))
                      (add-to-list 'TeX-command-list
                                   '("SumatraPDF"
                                     "powershell -Command \"& {$r = Write-Output %o;$t = Write-Output %b;$o = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFileNameWithoutExtension($r),'.pdf','\"\"\"');$b = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFileNameWithoutExtension($t),'.tex','\"\"\"');Start-Process SumatraPDF -ArgumentList ('-reuse-instance',$o,'-forward-search',$b,%n)}\""
                                     TeX-run-discard-or-function t t :help "Forward search with SumatraPDF"))
                      (add-to-list 'TeX-command-list
                                   '("fwdsumatrapdf"
                                     "fwdsumatrapdf %s.pdf \"%b\" %n"
                                     TeX-run-discard-or-function t t :help "Forward search with SumatraPDF"))
                      (add-to-list 'TeX-command-list
                                   '("TeXworks"
                                     "synctex view -i \"%n:0:%b\" -o %s.pdf -x \"texworks --position=%%{page+1} %%{output}\""
                                     TeX-run-discard-or-function t t :help "Run TeXworks"))
                      (add-to-list 'TeX-command-list
                                   '("TeXstudio"
                                     "synctex view -i \"%n:0:%b\" -o %s.pdf -x \"texstudio --pdf-viewer-only --page %%{page+1} %%{output}\""
                                     TeX-run-discard-or-function t t :help "Run TeXstudio"))
                      (add-to-list 'TeX-command-list
                                   '("Firefox"
                                     "powershell -Command \"& {$r = Write-Output %o;$o = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFileNameWithoutExtension($r),'.pdf','\"\"\"');Start-Process firefox -ArgumentList ('-new-window',$o)}\""
                                     TeX-run-discard-or-function t t :help "Run Mozilla Firefox"))
                      (add-to-list 'TeX-command-list
                                   '("Chrome"
                                     "powershell -Command \"& {$r = Write-Output %s.pdf;$o = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFullPath($r),'\"\"\"');Start-Process chrome -ArgumentList ('--new-window',$o)}\""
                                     TeX-run-discard-or-function t t :help "Run Chrome PDF Viewer"))
                      (add-to-list 'TeX-command-list
                                   '("pdfopen"
                                     "tasklist /fi \"IMAGENAME eq AcroRd32.exe\" /nh | findstr \"AcroRd32.exe\" > nul && pdfopen --rxi --file %s.pdf && pdfclose --rxi --file %s.pdf & synctex view -i \"%n:0:%b\" -o %s.pdf -x \"pdfopen --rxi --file %%{output} --page %%{page+1}\""
                                     TeX-run-discard-or-function t t :help "Run Adobe Reader")))))

;;
;; RefTeX with AUCTeX
;;
(add-hook 'LaTeX-mode-hook 'turn-on-reftex)
(setq reftex-plug-into-AUCTeX t)

;;
;; kinsoku.el
;;
(setq kinsoku-limit 10)
```

***

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#568;text-align:center">メニュー [Command]</th><th style="color:#FFF;background-color:#568;text-align:center">入力</th><th style="color:#FFF;background-color:#568;text-align:center">機能</th></tr>
> <tr><td>Latexmk</td><td>C-c C-c latexmk RET</td><td>タイプセット (Latexmk)</td></tr>
> <tr><td>Latexmk-pdfupLaTeX</td><td>C-c C-c latexmk-pdfuplatex RET</td><td>タイプセット (Latexmk-pdfupLaTeX)</td></tr>
> <tr><td>Latexmk-pdfupLaTeX2</td><td>C-c C-c latexmk-pdfuplatex2 RET</td><td>タイプセット (Latexmk-pdfupLaTeX2)</td></tr>
> <tr><td>Latexmk-pdfLaTeX</td><td>C-c C-c latexmk-pdflatex RET</td><td>タイプセット (Latexmk-pdfLaTeX)</td></tr>
> <tr><td>Latexmk-LuaLaTeX</td><td>C-c C-c latexmk-lualatex RET</td><td>タイプセット (Latexmk-LuaLaTeX)</td></tr>
> <tr><td>Latexmk-LuaJITLaTeX</td><td>C-c C-c latexmk-luajitlatex RET</td><td>タイプセット (Latexmk-LuaJITLaTeX)</td></tr>
> <tr><td>Latexmk-XeLaTeX</td><td>C-c C-c latexmk-xelatex RET</td><td>タイプセット (Latexmk-XeLaTeX)</td></tr>
> <tr><td>SumatraPDF</td><td>C-c C-c sumatrapdf RET</td><td>プレビュー &amp; forward search (PDF)</td></tr>
> <tr><td>fwdsumatrapdf</td><td>C-c C-c fwdsumatrapdf RET</td><td>プレビュー &amp; forward search (PDF)</td></tr>
> <tr><td>TeXworks</td><td>C-c C-c texworks RET</td><td>プレビュー &amp; forward search (PDF)</td></tr>
> <tr><td>TeXstudio</td><td>C-c C-c texstudio RET</td><td>プレビュー &amp; forward search (PDF)</td></tr>
> <tr><td>Firefox</td><td>C-c C-c firefox RET</td><td>プレビュー (PDF)</td></tr>
> <tr><td>Chrome</td><td>C-c C-c chrome RET</td><td>プレビュー (PDF)</td></tr>
> <tr><td>pdfopen</td><td>C-c C-c pdfopen RET</td><td>プレビュー or 印刷 (PDF)</td></tr>
> </tbody>
> </table>
>

***

<span style="color:#556680;background-color:#556680;"><ins>　</ins></span>[<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/08/EmacsIcon.svg/200px-EmacsIcon.svg.png" alt="GNU Emacs - GNU Project - Free Software Foundation (FSF)" width="28" height="28">](http://www.gnu.org/software/emacs/)<span style="color:#556680;background-color:#556680;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>emacs@AUCTeX</strong></span>　　　　　　　　　　　　　　　　　<span style="color:#556680;background-color:#556680;"></ins>\[ <span style="color:Black;"><strong>◛</strong></span> \]<ins></span><span style="color:#556680;background-color:#556680;"></ins>\[ <span style="color:Black;"><strong>▭</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<span style="color:Black;background-color:#DAE0FE;"><ins>　　ファイル　 編集　 オプション　 バッファ　 ツール　 Preview　 LaTeX　 Command　 Math　 Ref　 ヘルプ　　　</ins></span><br>

...<br>
&#x2d;U\\---　　<strong>auctex.tex</strong>　　　　　ALL L1　　　(LaTeX/MP Ref)-----------------------------------------<br>
　Command: (default LaTeX) view<br>

***

### OS X {#h32722ec}

- [AUCTex + RefTexで快適論文作成](http://ochiailab.blogspot.jp/2013/01/auctex-reftex.html)
- [EmacsとSkimの連携](http://ochiailab.blogspot.jp/2012/10/emacsskim.html)
- [AUCTeX の設定と便利な機能 | Amrta](http://skalldan.wordpress.com/2011/07/20/auctex-%E3%81%AE%E8%A8%AD%E5%AE%9A%E3%81%A8%E4%BE%BF%E5%88%A9%E3%81%AA%E6%A9%9F%E8%83%BD/)
- [Build Latex environments](http://sorabu.tumblr.com/post/6703335969/build-latex-environments)

[MacEmacs JP](http://sourceforge.jp/projects/macemacsjp/releases/?package_id=13490) または [Emacs.app](http://www.muskmelon.jp/?page_id=79) をインストールします．

Emacs を起動して

```
C-x C-f ~/
```

で，ホームディレクトリ (&#x7e;/) の場所を確認します．

#### Homebrew でインストールする場合 {#f6533cc3}

- [homebrew / Library / Formula / auctex.rb](https://github.com/mxcl/homebrew/blob/master/Library/Formula/auctex.rb)

```
$ brew install --with-emacs=/Applications/Emacs.app/Contents/MacOS/Emacs auctex
```

#### 設定 {#n55816de}

動作未確認です．<br>
&#x7e;/.emacs.d/init.el に設定を記述します．<br>

***

```
;;
;; AUCTeX
;;
(eval-after-load "tex-jp"
  '(progn
     (setq TeX-engine-alist '((pdfuptex "pdfupTeX"
                                        "/usr/texbin/ptex2pdf -u -e -ot '%S %(mode)'"
                                        "/usr/texbin/ptex2pdf -u -l -ot '%S %(mode)'"
                                        "euptex")))
     (setq japanese-TeX-engine-default 'pdfuptex)
     ;(setq japanese-TeX-engine-default 'luatex)
     ;(setq japanese-TeX-engine-default 'xetex)
     (setq TeX-view-program-selection '((output-dvi "displayline")
                                        (output-pdf "displayline")))
     ;(setq TeX-view-program-selection '((output-dvi "Skim")
     ;                                   (output-pdf "Skim")))
     (setq japanese-LaTeX-default-style "jsarticle")
     ;(setq japanese-LaTeX-default-style "ltjsarticle")
     ;(setq japanese-LaTeX-default-style "bxjsarticle")
     (dolist (command '("pTeX" "pLaTeX" "pBibTeX" "jTeX" "jLaTeX" "jBibTeX" "Mendex"))
       (delq (assoc command TeX-command-list) TeX-command-list))))
(setq preview-image-type 'dvipng)
(setq TeX-source-correlate-method 'synctex)
(setq TeX-source-correlate-start-server t)
(add-hook 'LaTeX-mode-hook 'TeX-source-correlate-mode)
(add-hook 'LaTeX-mode-hook 'TeX-PDF-mode)
(add-hook 'LaTeX-mode-hook 'LaTeX-math-mode)
(add-hook 'LaTeX-mode-hook
          (function (lambda ()
                      (add-to-list 'TeX-command-list
                                   '("Latexmk"
                                     "/usr/texbin/latexmk %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-pdfupLaTeX"
                                     "/usr/texbin/latexmk -e '$latex=q/uplatex %%O %S %(mode) %%S/' -e '$bibtex=q/upbibtex %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/mendex %%O -U -o %%D %%S/' -e '$dvipdf=q/dvipdfmx %%O -o %%D %%S/' -norc -gg -pdfdvi %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-pdfupLaTeX"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-pdfupLaTeX2"
                                     "/usr/texbin/latexmk -e '$latex=q/uplatex %%O %S %(mode) %%S/' -e '$bibtex=q/upbibtex %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/mendex %%O -U -o %%D %%S/' -e '$dvips=q/dvips %%O -z -f %%S | convbkmk -u > %%D/' -e '$ps2pdf=q/ps2pdf %%O %%S %%D/' -norc -gg -pdfps %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-pdfupLaTeX2"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-pdfLaTeX"
                                     "/usr/texbin/latexmk -e '$pdflatex=q/pdflatex %%O %S %(mode) %%S/' -e '$bibtex=q/bibtex %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/makeindex %%O -o %%D %%S/' -norc -gg -pdf %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-pdfLaTeX"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-LuaLaTeX"
                                     "/usr/texbin/latexmk -e '$pdflatex=q/lualatex %%O %S %(mode) %%S/' -e '$bibtex=q/bibtexu %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/makeindex %%O -o %%D %%S/' -norc -gg -pdf %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-LuaLaTeX"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-LuaJITLaTeX"
                                     "/usr/texbin/latexmk -e '$pdflatex=q/luajitlatex %%O %S %(mode) %%S/' -e '$bibtex=q/bibtexu %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/makeindex %%O -o %%D %%S/' -norc -gg -pdf %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-LuaJITLaTeX"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-XeLaTeX"
                                     "/usr/texbin/latexmk -e '$pdflatex=q/xelatex %%O %S %(mode) %%S/' -e '$bibtex=q/bibtexu %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/makeindex %%O -o %%D %%S/' -norc -gg -pdf %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-XeLaTeX"))
                      (add-to-list 'TeX-command-list
                                   '("displayline"
                                     "/Applications/Skim.app/Contents/SharedSupport/displayline %n %s.pdf \"%b\""
                                     TeX-run-discard-or-function t t :help "Forward search with Skim"))
                      (add-to-list 'TeX-command-list
                                   '("Skim"
                                     "/usr/bin/open -a Skim.app %s.pdf"
                                     TeX-run-discard-or-function t t :help "Run Skim"))
                      (add-to-list 'TeX-command-list
                                   '("Preview"
                                     "/usr/bin/open -a Preview.app %s.pdf"
                                     TeX-run-discard-or-function t t :help "Run Preview"))
                      (add-to-list 'TeX-command-list
                                   '("TeXShop"
                                     "/usr/bin/open -a TeXShop.app %s.pdf"
                                     TeX-run-discard-or-function t t :help "Run TeXShop"))
                      (add-to-list 'TeX-command-list
                                   '("TeXworks"
                                     "/usr/texbin/synctex view -i \"%n:0:%b\" -o %s.pdf -x \"/Applications/TeXworks.app/Contents/MacOS/TeXworks --position=%%{page+1} %%{output}\""
                                     TeX-run-discard-or-function t t :help "Run TeXworks"))
                      (add-to-list 'TeX-command-list
                                   '("TeXstudio"
                                     "/usr/texbin/synctex view -i \"%n:0:%b\" -o %s.pdf -x \"/Applications/texstudio.app/Contents/MacOS/texstudio --pdf-viewer-only --page %%{page+1} %%{output}\""
                                     TeX-run-discard-or-function t t :help "Run TeXstudio"))
                      (add-to-list 'TeX-command-list
                                   '("Firefox"
                                     "/usr/bin/open -a Firefox.app %s.pdf"
                                     TeX-run-discard-or-function t t :help "Run Mozilla Firefox"))
                      (add-to-list 'TeX-command-list
                                   '("AdobeReader"
                                     "/usr/bin/open -a \"Adobe Reader.app\" %s.pdf"
                                     TeX-run-discard-or-function t t :help "Run Adobe Reader")))))

;;
;; RefTeX with AUCTeX
;;
(add-hook 'LaTeX-mode-hook 'turn-on-reftex)
(setq reftex-plug-into-AUCTeX t)

;;
;; kinsoku.el
;;
(setq kinsoku-limit 10)
```

***

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#568;text-align:center">メニュー [Command]</th><th style="color:#FFF;background-color:#568;text-align:center">入力</th><th style="color:#FFF;background-color:#568;text-align:center">機能</th></tr>
> <tr><td>Latexmk</td><td>C-c C-c latexmk RET</td><td>タイプセット (Latexmk)</td></tr>
> <tr><td>Latexmk-pdfupLaTeX</td><td>C-c C-c latexmk-pdfuplatex RET</td><td>タイプセット (Latexmk-pdfupLaTeX)</td></tr>
> <tr><td>Latexmk-pdfupLaTeX2</td><td>C-c C-c latexmk-pdfuplatex2 RET</td><td>タイプセット (Latexmk-pdfupLaTeX2)</td></tr>
> <tr><td>Latexmk-pdfLaTeX</td><td>C-c C-c latexmk-pdflatex RET</td><td>タイプセット (Latexmk-pdfLaTeX)</td></tr>
> <tr><td>Latexmk-LuaLaTeX</td><td>C-c C-c latexmk-lualatex RET</td><td>タイプセット (Latexmk-LuaLaTeX)</td></tr>
> <tr><td>Latexmk-LuaJITLaTeX</td><td>C-c C-c latexmk-luajitlatex RET</td><td>タイプセット (Latexmk-LuaJITLaTeX)</td></tr>
> <tr><td>Latexmk-XeLaTeX</td><td>C-c C-c latexmk-xelatex RET</td><td>タイプセット (Latexmk-XeLaTeX)</td></tr>
> <tr><td>displayline</td><td>C-c C-c displayline RET</td><td>プレビュー &amp; forward search (PDF)</td></tr>
> <tr><td>Skim</td><td>C-c C-c skim RET</td><td>プレビュー (PDF)</td></tr>
> <tr><td>Preview</td><td>C-c C-c preview RET</td><td>プレビュー (PDF)</td></tr>
> <tr><td>TeXShop</td><td>C-c C-c texshop RET</td><td>プレビュー (PDF)</td></tr>
> <tr><td>TeXworks</td><td>C-c C-c texworks RET</td><td>プレビュー &amp; forward search (PDF)</td></tr>
> <tr><td>TeXstudio</td><td>C-c C-c texstudio RET</td><td>プレビュー &amp; forward search (PDF)</td></tr>
> <tr><td>Firefox</td><td>C-c C-c firefox RET</td><td>プレビュー (PDF)</td></tr>
> <tr><td>AdobeReader</td><td>C-c C-c adobereader RET</td><td>プレビュー or 印刷 (PDF)</td></tr>
> </tbody>
> </table>
>

***

### Linux {#effc0642}

Emacs を起動して

```
C-x C-f ~/
```

で，ホームディレクトリ (&#x7e;/) の場所を確認します．

#### ソースコードからインストールする場合 {#re9f47fd}

```
$ wget http://git.savannah.gnu.org/cgit/auctex.git/snapshot/master.tar.gz
```

または

```
$ curl -O http://git.savannah.gnu.org/cgit/auctex.git/snapshot/master.tar.gz
```

で最新版の AUCTeX を入手します．<br>
AUCTeX を展開してビルド・インストールします．<br>

```
$ tar xvf master.tar.gz
$ pushd master
$ ./autogen.sh
$ ./configure --prefix=/usr
$ make
$ sudo make install
$ popd
```

デフォルトでは preview-latex もインストールされます。

load-path に追加して自動ロードする場合は以下を &#x7e;/.emacs.d/init.el に記述します．

```
(add-to-list 'load-path "/usr/share/emacs/site-lisp")
(load "auctex.el" nil t t)
(load "preview-latex.el" nil t t)
```

#### 設定 {#p2d711b9}

&#x7e;/.emacs.d/init.el に設定を記述します．<br>
fwdevince は Evince/fwdevince の fwdevince を使用します．<br>

***

```
;;
;; AUCTeX
;;
(eval-after-load "tex-jp"
  '(progn
     (setq TeX-engine-alist '((pdfuptex "pdfupTeX"
                                        "ptex2pdf -u -e -ot '%S %(mode)'"
                                        "ptex2pdf -u -l -ot '%S %(mode)'"
                                        "euptex")))
     (setq japanese-TeX-engine-default 'pdfuptex)
     ;(setq japanese-TeX-engine-default 'luatex)
     ;(setq japanese-TeX-engine-default 'xetex)
     (setq TeX-view-program-selection '((output-dvi "Evince")
                                        (output-pdf "Evince")))
     ;(setq TeX-view-program-selection '((output-dvi "Okular")
     ;                                   (output-pdf "Okular")))
     (setq japanese-LaTeX-default-style "jsarticle")
     ;(setq japanese-LaTeX-default-style "ltjsarticle")
     ;(setq japanese-LaTeX-default-style "bxjsarticle")
     (dolist (command '("pTeX" "pLaTeX" "pBibTeX" "jTeX" "jLaTeX" "jBibTeX" "Mendex"))
       (delq (assoc command TeX-command-list) TeX-command-list))))
(setq preview-image-type 'dvipng)
(setq TeX-source-correlate-method 'synctex)
(setq TeX-source-correlate-start-server t)
(add-hook 'LaTeX-mode-hook 'TeX-source-correlate-mode)
(add-hook 'LaTeX-mode-hook 'TeX-PDF-mode)
(add-hook 'LaTeX-mode-hook 'LaTeX-math-mode)
(add-hook 'LaTeX-mode-hook
          (function (lambda ()
                      (add-to-list 'TeX-command-list
                                   '("Latexmk"
                                     "latexmk %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-pdfupLaTeX"
                                     "latexmk -e '$latex=q/uplatex %%O %S %(mode) %%S/' -e '$bibtex=q/upbibtex %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/mendex %%O -U -o %%D %%S/' -e '$dvipdf=q/dvipdfmx %%O -o %%D %%S/' -norc -gg -pdfdvi %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-pdfupLaTeX"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-pdfupLaTeX2"
                                     "latexmk -e '$latex=q/uplatex %%O %S %(mode) %%S/' -e '$bibtex=q/upbibtex %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/mendex %%O -U -o %%D %%S/' -e '$dvips=q/dvips %%O -z -f %%S | convbkmk -u > %%D/' -e '$ps2pdf=q/ps2pdf %%O %%S %%D/' -norc -gg -pdfps %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-pdfupLaTeX2"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-pdfLaTeX"
                                     "latexmk -e '$pdflatex=q/pdflatex %%O %S %(mode) %%S/' -e '$bibtex=q/bibtex %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/makeindex %%O -o %%D %%S/' -norc -gg -pdf %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-pdfLaTeX"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-LuaLaTeX"
                                     "latexmk -e '$pdflatex=q/lualatex %%O %S %(mode) %%S/' -e '$bibtex=q/bibtexu %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/makeindex %%O -o %%D %%S/' -norc -gg -pdf %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-LuaLaTeX"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-LuaJITLaTeX"
                                     "latexmk -e '$pdflatex=q/luajitlatex %%O %S %(mode) %%S/' -e '$bibtex=q/bibtexu %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/makeindex %%O -o %%D %%S/' -norc -gg -pdf %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-LuaJITLaTeX"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-XeLaTeX"
                                     "latexmk -e '$pdflatex=q/xelatex %%O %S %(mode) %%S/' -e '$bibtex=q/bibtexu %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/makeindex %%O -o %%D %%S/' -norc -gg -pdf %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-XeLaTeX"))
                      (add-to-list 'TeX-command-list
                                   '("xdg-open"
                                     "xdg-open %s.pdf"
                                     TeX-run-discard-or-function t t :help "Run xdg-open"))
                      (add-to-list 'TeX-command-list
                                   '("Evince"
                                     "evince %s.pdf"
                                     TeX-run-discard-or-function t t :help "Run Evince"))
                      (add-to-list 'TeX-command-list
                                   '("fwdevince"
                                     "fwdevince %s.pdf %n \"%b\""
                                     TeX-run-discard-or-function t t :help "Forward search with Evince"))
                      (add-to-list 'TeX-command-list
                                   '("Okular"
                                     "okular --unique \"file:\"%s.pdf\"#src:%n %a\""
                                     TeX-run-discard-or-function t t :help "Forward search with Okular"))
                      (add-to-list 'TeX-command-list
                                   '("zathura"
                                     "zathura -s -x \"emacsclient --no-wait +%%{line} %%{input}\" %s.pdf"
                                     TeX-run-discard-or-function t t :help "Run zathura"))
                      (add-to-list 'TeX-command-list
                                   '("fwdzathura"
                                     "zathura --synctex-forward %n:0:%b %s.pdf"
                                     TeX-run-discard-or-function t t :help "Forward search with zathura"))
                      (add-to-list 'TeX-command-list
                                   '("qpdfview"
                                     "qpdfview --unique \"\"%s.pdf\"#src:%b:%n:0\""
                                     TeX-run-discard-or-function t t :help "Forward search with qpdfview"))
                      (add-to-list 'TeX-command-list
                                   '("TeXworks"
                                     "synctex view -i \"%n:0:%b\" -o %s.pdf -x \"texworks --position=%%{page+1} %%{output}\""
                                     TeX-run-discard-or-function t t :help "Run TeXworks"))
                      (add-to-list 'TeX-command-list
                                   '("TeXstudio"
                                     "synctex view -i \"%n:0:%b\" -o %s.pdf -x \"texstudio --pdf-viewer-only --page %%{page+1} %%{output}\""
                                     TeX-run-discard-or-function t t :help "Run TeXstudio"))
                      (add-to-list 'TeX-command-list
                                   '("MuPDF"
                                     "mupdf %s.pdf"
                                     TeX-run-discard-or-function t t :help "Run MuPDF"))
                      (add-to-list 'TeX-command-list
                                   '("Firefox"
                                     "firefox -new-window %s.pdf"
                                     TeX-run-discard-or-function t t :help "Run Mozilla Firefox"))
                      (add-to-list 'TeX-command-list
                                   '("Chromium"
                                     "chromium --new-window %s.pdf"
                                     TeX-run-discard-or-function t t :help "Run Chromium")))))

;;
;; RefTeX with AUCTeX
;;
(add-hook 'LaTeX-mode-hook 'turn-on-reftex)
(setq reftex-plug-into-AUCTeX t)

;;
;; kinsoku.el
;;
(setq kinsoku-limit 10)
```

***

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#568;text-align:center">メニュー [Command]</th><th style="color:#FFF;background-color:#568;text-align:center">入力</th><th style="color:#FFF;background-color:#568;text-align:center">機能</th></tr>
> <tr><td>Latexmk</td><td>C-c C-c latexmk RET</td><td>タイプセット (Latexmk)</td></tr>
> <tr><td>Latexmk-pdfupLaTeX</td><td>C-c C-c latexmk-pdfuplatex RET</td><td>タイプセット (Latexmk-pdfupLaTeX)</td></tr>
> <tr><td>Latexmk-pdfupLaTeX2</td><td>C-c C-c latexmk-pdfuplatex2 RET</td><td>タイプセット (Latexmk-pdfupLaTeX2)</td></tr>
> <tr><td>Latexmk-pdfLaTeX</td><td>C-c C-c latexmk-pdflatex RET</td><td>タイプセット (Latexmk-pdfLaTeX)</td></tr>
> <tr><td>Latexmk-LuaLaTeX</td><td>C-c C-c latexmk-lualatex RET</td><td>タイプセット (Latexmk-LuaLaTeX)</td></tr>
> <tr><td>Latexmk-LuaJITLaTeX</td><td>C-c C-c latexmk-luajitlatex RET</td><td>タイプセット (Latexmk-LuaJITLaTeX)</td></tr>
> <tr><td>Latexmk-XeLaTeX</td><td>C-c C-c latexmk-xelatex RET</td><td>タイプセット (Latexmk-XeLaTeX)</td></tr>
> <tr><td>xdg-open</td><td>C-c C-c xdg-open RET</td><td>プレビュー (PDF)</td></tr>
> <tr><td>Evince</td><td>C-c C-c evince RET</td><td>プレビュー (PDF)</td></tr>
> <tr><td>fwdevince</td><td>C-c C-c fwdevince RET</td><td>プレビュー &amp; forward search (PDF)</td></tr>
> <tr><td>Okular</td><td>C-c C-c okular RET</td><td>プレビュー &amp; forward search (PDF)</td></tr>
> <tr><td>zathura</td><td>C-c C-c zathura RET</td><td>プレビュー (PDF)</td></tr>
> <tr><td>fwdzathura</td><td>C-c C-c fwdzathura RET</td><td>forward search (PDF)</td></tr>
> <tr><td>qpdfview</td><td>C-c C-c qpdfview RET</td><td>プレビュー &amp; forward search (PDF)</td></tr>
> <tr><td>TeXworks</td><td>C-c C-c texworks RET</td><td>プレビュー &amp; forward search (PDF)</td></tr>
> <tr><td>TeXstudio</td><td>C-c C-c texstudio RET</td><td>プレビュー &amp; forward search (PDF)</td></tr>
> <tr><td>MuPDF</td><td>C-c C-c mupdf RET</td><td>プレビュー (PDF)</td></tr>
> <tr><td>Firefox</td><td>C-c C-c firefox RET</td><td>プレビュー (PDF)</td></tr>
> <tr><td>Chromium</td><td>C-c C-c chromium RET</td><td>プレビュー (PDF)</td></tr>
> </tbody>
> </table>
>

***

## 基本的な設定 {#ra10f739}

### 自動ロード {#k032aa6a}

#### Emacs 標準のパッケージ管理システムを使用してインストールした場合 {#c3acf208}

AUCTeX 11.87 は &#x7e;/.emacs.d/elpa/auctex-11.87 にインストールされます．<br>
AUCTeX 11.87 が自動ロードされない場合は ~/.emacs.d/init.el に次のように記述します．<br>

```
(add-to-list 'load-path "~/.emacs.d/elpa/auctex-11.87")
(require 'tex-site)
```

Emacs 標準のパッケージ管理システムを使用してインストールした場合は

```
 (load "auctex.el" nil t t)
```

は記述しないでください．<br>
記述すると

```
File error: Cannot open load file, auctex.el
```

などと表示される可能性があります．<br>

#### AUCTeX の公式サイトのパッケージからインストールした場合 {#db9dca5d}

AUCTeX を自動ロードする場合は ~/.emacs.d/init.el に次のように記述します．<br>

```
(load "auctex.el" nil t t)
(load "preview-latex.el" nil t t)
```

### upTeX (ptex2pdf), upLaTeX (ptex2pdf) を使用する {#zdc0afad}

upTeX (ptex2pdf), upLaTeX (ptex2pdf) を使用する場合は次のように設定します．<br>

■ Windows の場合

```
(setq TeX-engine-alist '((pdfuptex "pdfupTeX"
                                   "ptex2pdf -u -e -ot \"-kanji=utf8 -no-guess-input-enc %S %(mode)\""
                                   "ptex2pdf -u -l -ot \"-kanji=utf8 -no-guess-input-enc %S %(mode)\""
                                   "euptex")))
(setq japanese-TeX-engine-default 'pdfuptex)
```

■ OS X の場合

```
(setq TeX-engine-alist '((pdfuptex "pdfupTeX"
                                   "/usr/texbin/ptex2pdf -u -e -ot '%S %(mode)'"
                                   "/usr/texbin/ptex2pdf -u -l -ot '%S %(mode)'"
                                   "euptex")))
(setq japanese-TeX-engine-default 'pdfuptex)
```

■ Linux の場合

```
(setq TeX-engine-alist '((pdfuptex "pdfupTeX"
                                   "ptex2pdf -u -e -ot '%S %(mode)'"
                                   "ptex2pdf -u -l -ot '%S %(mode)'"
                                   "euptex")))
(setq japanese-TeX-engine-default 'pdfuptex)
```

上の例では TeX-engine-alist に pdfuptex を設定して japanese-TeX-engine-default に pdfuptex を設定しました．<br>

### ドキュメントクラスの設定 {#l246b90f}

[新ドキュメントクラス](http://oku.edu.mie-u.ac.jp/~okumura/jsclasses/) の jsarticle を標準に設定する場合は以下のように設定します．

```
(setq japanese-LaTeX-default-style "jsarticle")
```

### DVI, PDF ビューアーの変更 {#pfbe6148}

DVI, PDF Viewer を変更する場合は

```
(setq TeX-view-program-list '(("DVIviewer" "/path/viewer %o")
                              ("PDFviewer" "/path/viewer %o")))
```

```
(setq TeX-view-program-selection '((output-dvi "DVIviewer")
                                   (output-pdf "PDFviewer")))
```

になります。

### 禁則処理 {#ab10fa7c}

禁則処理によって行長が何文字延びてもいいかは，Emacs の kinsoku.el の kinsoku-limit で定義されています．<br>
デフォルトでは4ですが，少し長くしておかないと，単語の途中で切れてしまうことがあります．<br>

```
(setq kinsoku-limit 10)
```

## 使い方 {#v616359d}

### タイプセット・プレビュー {#d7b69efe}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#568;text-align:center">メニュー [Command]</th><th style="color:#FFF;background-color:#568;text-align:center">入力</th><th style="color:#FFF;background-color:#568;text-align:center">機能</th></tr>
> <tr><td>リストから選択</td><td>C-c C-c</td><td>コマンドの実行</td></tr>
> <tr><td>LaTeX</td><td>C-c C-c latex RET</td><td>指定された TeX エンジンでタイプセット</td></tr>
> <tr><td>BibTeX</td><td>C-c C-c bibtex RET</td><td>bibtex の実行</td></tr>
> <tr><td>Biber</td><td>C-c C-c biber RET</td><td>biber の実行</td></tr>
> <tr><td>View</td><td>C-c C-c view RET</td><td>プレビュー</td></tr>
> <tr><td>Index</td><td>C-c C-c index RET</td><td>makeindex の実行</td></tr>
> <tr><td>Xindy</td><td>C-c C-c xindy RET</td><td>texindy の実行</td></tr>
> <tr><td>Check</td><td>C-c C-c check RET</td><td>lacheck の実行</td></tr>
> <tr><td>ChkTeX</td><td>C-c C-c chktex RET</td><td>chktex の実行</td></tr>
> <tr><td>Spell</td><td>C-c C-c spell RET</td><td>スペルチェックの実行</td></tr>
> <tr><td>Clean</td><td>C-c C-c clean RET</td><td>中間ファイル (.log .aux etc...) の削除</td></tr>
> <tr><td>Clean All</td><td>C-c C-c clean all RET</td><td>中間ファイル及び dvi ps pdf の削除</td></tr>
> <tr><td>Recenter Output Buffer</td><td>C-c C-l</td><td>タイプセット処理を表示</td></tr>
> <tr><td>Kill Job</td><td>C-c C-k</td><td>タイプセット処理を中断</td></tr>
> <tr><td>Next Error</td><td>C-c `</td><td>エラー行にジャンプ</td></tr>
> <tr><td>Quick View</td><td>C-c C-v</td><td>クイックビュー</td></tr>
> </tbody>
> </table>
>

### TeX エンジンの選択 {#cd10b741}

&#x7e;/.emacs.d/init.el で TeX-engine-alist に pdfuptex を設定します．<br>
pdfupTeX をデフォルトにする場合は japanese-TeX-engine-default に pdfuptex を設定します．<br>

■ Windows の場合

```
(setq TeX-engine-alist '((pdfuptex "pdfupTeX"
                                   "ptex2pdf -u -e -ot \"-kanji=utf8 -no-guess-input-enc %S %(mode)\""
                                   "ptex2pdf -u -l -ot \"-kanji=utf8 -no-guess-input-enc %S %(mode)\""
                                   "euptex")))
(setq japanese-TeX-engine-default 'pdfuptex)
```

■ OS X の場合

```
(setq TeX-engine-alist '((pdfuptex "pdfupTeX"
                                   "/usr/texbin/ptex2pdf -u -e -ot '%S %(mode)'"
                                   "/usr/texbin/ptex2pdf -u -l -ot '%S %(mode)'"
                                   "euptex")))
(setq japanese-TeX-engine-default 'pdfuptex)
```

■ Linux の場合

```
(setq TeX-engine-alist '((pdfuptex "pdfupTeX"
                                   "ptex2pdf -u -e -ot '%S %(mode)'"
                                   "ptex2pdf -u -l -ot '%S %(mode)'"
                                   "euptex")))
(setq japanese-TeX-engine-default 'pdfuptex)
```

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#568;text-align:center">メニュー [Command]</th><th style="color:#FFF;background-color:#568;text-align:center">入力</th><th style="color:#FFF;background-color:#568;text-align:center">TeX エンジンの選択</th></tr>
> <tr><td>TeXing Options -&gt; Use Default engine</td><td>M-x TeX-engine RET default RET</td><td>デフォルト (pdfTeX) を使用</td></tr>
> <tr><td>TeXing Options -&gt; Use LuaTeX engine</td><td>M-x TeX-engine RET luatex RET</td><td>LuaTeX を使用</td></tr>
> <tr><td>TeXing Options -&gt; Use pdfupTeX engine</td><td>M-x TeX-engine RET pdfuptex RET</td><td>pdfupTeX を使用</td></tr>
> <tr><td>TeXing Options -&gt; Use XeTeX engine</td><td>M-x TeX-engine RET xetex RET</td><td>XeTeX を使用</td></tr>
> </tbody>
> </table>
>

### TeX-PDF-mode {#bf4992a9}

TeX-PDF-mode を有効にすると Default (pdfTeX) エンジン, LuaTeX エンジン, XeTeX エンジン で DVI ファイルのかわりに PDF ファイルを出力するようになります．

```
(add-hook 'LaTeX-mode-hook 'TeX-PDF-mode)
```

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#568;text-align:center">メニュー [Command]</th><th style="color:#FFF;background-color:#568;text-align:center">入力</th><th style="color:#FFF;background-color:#568;text-align:center">機能</th></tr>
> <tr><td>TeXing Options -&gt; Generate PDF</td><td>C-c C-t C-p</td><td>TeX-PDF-mode を有効 ←→ 無効</td></tr>
> </tbody>
> </table>
>

### TeX-interactive-mode {#u4bba567}

TeX-interactive-mode を有効にするとエラーが発生した場合にユーザーからの応答を待つようになります．

```
(add-hook 'LaTeX-mode-hook 'TeX-interactive-mode)
```

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#568;text-align:center">メニュー [Command]</th><th style="color:#FFF;background-color:#568;text-align:center">入力</th><th style="color:#FFF;background-color:#568;text-align:center">機能</th></tr>
> <tr><td>TeXing Options -&gt; Run Interactively</td><td>C-c C-t C-i</td><td>TeX-interactive-mode を有効 ←→ 無効</td></tr>
> </tbody>
> </table>
>

### TeX-source-correlate-mode {#gecd35e1}

TeX-source-correlate-mode を有効にすると SyncTeX が使用可能になります．

```
(setq TeX-source-correlate-method 'synctex)
(setq TeX-source-correlate-start-server t)
(add-hook 'LaTeX-mode-hook 'TeX-source-correlate-mode)
```

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#568;text-align:center">メニュー [Command]</th><th style="color:#FFF;background-color:#568;text-align:center">入力</th><th style="color:#FFF;background-color:#568;text-align:center">機能</th></tr>
> <tr><td>TeXing Options -&gt; Correlate I/O</td><td>C-c C-t C-s</td><td>TeX-source-correlate-mode を有効 ←→ 無効</td></tr>
> </tbody>
> </table>
>

### 補完 {#sf80078b}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#568;text-align:center">メニュー [LaTeX]</th><th style="color:#FFF;background-color:#568;text-align:center">入力</th><th style="color:#FFF;background-color:#568;text-align:center">補完</th></tr>
> <tr><td>Insert Environment (C-c C-e) -&gt; リストから選択</td><td>C-c C-e</td><td>\begin{...} ... \end{...} の補完</td></tr>
> <tr><td>Section (C-c C-s) -&gt; リストから選択</td><td>C-c C-s</td><td>\chapter, \section などの補完</td></tr>
> </tbody>
> </table>
>

### 簡単な使い方 {#n4ccf7ec}

拡張子が tex のファイルを開くと自動的に立ち上がります。<br>

下の「複数ファイルの文書」にも別の方法を説明しました。<br>

まず C-c C-e すると，\documentclass{...}
およびトップレベルの環境 \begin{document} ... \end{document}
が入ります。

次に C-c C-s すると，\section の類のコマンドが入ります。<br>
コマンド名は補完できます。<br>

次に C-c C-e すると，\begin{...} ... \end{...}
のような環境が入ります。<br>
環境名は補完できます。<br>

次に C-c C-c するとコンパイルできます。<br>

次に C-c C-c すると依存関係を調べて出力ファイルが新しければプレビューします。<br>
再度コンパイルしたいのなら l TAB または l SPACE
と打てば補完されて LaTeX 処理に直ります。<br>

### いろいろな使い方 {#v806ddfa}

ダブルクォート " を打てば，状況に応じて \`\` または '' に変換してくれます。<br>

TAB または SPACE で補完ができます。<br>
これらが効かないときは ESC TAB で補完します。<br>
候補一覧が出たら，さらに文字を補って補完するか，
あるいはマウスの中央のボタンで候補をクリックします。<br>

フォント関係のコマンドです。<br>

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#568;text-align:center">メニュー [LaTeX]</th><th style="color:#FFF;background-color:#568;text-align:center">入力</th><th style="color:#FFF;background-color:#568;text-align:center">補完</th><th style="color:#FFF;background-color:#568;text-align:center">補完 (数式モード)</th></tr>
> <tr><td>Insert Font -&gt; Roman</td><td>C-c C-f C-r</td><td>\textrm{}</td><td>\mathrm{}</td></tr>
> <tr><td>Insert Font -&gt; Italic</td><td>C-c C-f C-i</td><td>\textit{}</td><td>\mathit{}</td></tr>
> <tr><td>Insert Font -&gt; Typewriter</td><td>C-c C-f C-t</td><td>\texttt{}</td><td>\mathtt{}</td></tr>
> <tr><td>Insert Font -&gt; Bold</td><td>C-c C-f C-b</td><td>\textbf{}</td><td>\mathbf{}</td></tr>
> <tr><td>Insert Font -&gt; Sans Serif</td><td>C-c C-f C-f</td><td>\textsf{}</td><td>\mathsf{}</td></tr>
> </tbody>
> </table>
>

その他のコマンドです。<br>

- TAB インデント
- C-j インデントして改行
- M-q 段落の整形
- M-x LaTeX-fill-buffer バッファ全体の整形
- C-c ; 領域のコメント
- C-c : 領域のコメントを外す
- C-c C-r 領域のコンパイル／プレビュー
- C-c \` エラー行に飛ぶ（日本語でエラーメッセージを表示）

AUCTeX Clean ターゲット機能

- C-c C-c Clean 中間ファイル(.log .aux etc...)の削除
- C-c C-c Clean All 中間ファイル及び dvi ps pdf の削除

これ以外にたくさんの機能があります。<br>
ぜひ info auctex でドキュメントをお読みください。<br>

### カスタマイズ {#l23cdb90}

サイトごとのカスタマイズは /usr/local/share/emacs/site-lisp/tex-site.el で行います。<br>

### 複数ファイルの文書 {#fd84843a}

たとえば hogehoge.tex から input または include されているファイルでは，次のように書いておきます。

```
%%% Local Variables:
%%% mode: japanese-latex
%%% TeX-master: "hogehoge"
%%% End:
```

すると，このバッファで C-c C-c すると，hogehoge.tex をコンパイルしたり hogehoge.dvi を表示したりします。<br>
これはこのファイルを japanese-latex モードで開くという便利な副作用もあります。<br>

もし自分自身がマスターなら，次のように書いておきます。<br>

```
%%% Local Variables:
%%% mode: japanese-latex
%%% TeX-master: t
%%% End:
```

こういったものを自動で入れたい場合は，Emacs の設定ファイルに次のように書いておきます（私は書いていません）。<br>

```
(setq TeX-auto-save t)
(setq TeX-parse-self t)
(setq-default TeX-master nil)
```

こうしておくと，ファイルを開くときに

```
Master file: (default this file)
```

と聞いてきますので，自分自身がマスターファイルなら単に Enter を押します。<br>
キャンセルは C-g です。<br>

## SumatraPDF との連携 (forward and inverse search) {#h60fef7c}

forward search は [AUCTeX#インストール#Windows#設定](/AUCTeX/#g637a7d7) を参照してください．<br>
C-c C-c sumatrapdf または C-c C-c fwdsumatrapdf で forward search ができます．<br>

inverse search については [Emacs#SumatraPDF との連携#inverse search](/Emacs/#a06810d6) を参照してください．<br>
[Emacs AUCTeX and PDF Synchronization on Windows](http://www.barik.net/archive/2012/07/18/154432/) も参考になります．<br>

## Skim との連携 (forward and inverse search) {#v5bdbf9d}

forward search は [AUCTeX#インストール#OS X#設定](/AUCTeX/#n55816de) を参照してください．<br>
C-c C-c displayline で forward search ができます．<br>

AUCTeX 2013-04-09 以降は Skim の forward search に対応しています．<br>
TeX-view-program-selection の output-pdf に TeX-view-program-list-builtin で設定されている displayline を指定します．<br>

```
(setq TeX-view-program-selection '((output-pdf "displayline")))
```

C-c C-c view で View command: に displayline のコマンドが表示され forward search が実行できます．<br>

inverse search は [Emacs](/Emacs/#e9c08b3d) を参照してください．<br>

[AUCTeX の設定と便利な機能 | Amrta](http://skalldan.wordpress.com/2011/07/20/auctex-%E3%81%AE%E8%A8%AD%E5%AE%9A%E3%81%A8%E4%BE%BF%E5%88%A9%E3%81%AA%E6%A9%9F%E8%83%BD/) も参考になります．<br>

## Evince との連携 (forward and inverse search) {#l4ab70a6}

forward search は [AUCTeX#インストール#Linux#設定](/AUCTeX/#p2d711b9) を参照してください．<br>
C-c C-c fwdevince で forward search ができます．<br>

AUCTeX 11.87 以降は Evince の forward and inverse search に対応しています．<br>
TeX-view-program-selection の output-pdf に TeX-view-program-list-builtin で設定されている Evince を指定します．<br>

```
(setq TeX-view-program-selection '((output-pdf "Evince")))
```

C-c C-c view で View command: に TeX-evince-sync-view が表示され forward search が実行できます．<br>

TeX-source-correlate-mode が有効になっていれば Ctrl + 左クリックで inverse search が実行できます．<br>

以下のページも参考になります．<br>

- [Make AUCTeX do forward and inverse search with SyncTeX and Evince](https://gist.github.com/2297447)
- [Debian wheezy の TeX 統合環境で SyncTeX を試してみる](http://skalldan.wordpress.com/2011/10/07/tex-%E7%B5%B1%E5%90%88%E7%92%B0%E5%A2%83%E3%81%A7-synctex-%E3%82%92%E8%A9%A6%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B/)
- [Evince - TeX Wiki](/Evince/)
- [EmacsWiki: AUCTeX](http://www.emacswiki.org/emacs/AUCTeX) の Synctex and Evince
- [latex - From .ps/.dvi/.pdf, go to the corresponding location of .tex in Emacs - Stack Overflow](http://stackoverflow.com/questions/5737801/from-ps-dvi-pdf-go-to-the-corresponding-location-of-tex-in-emacs)

## Okular との連携 (forward and inverse search) {#d95e95ee}

forward search は [AUCTeX#インストール#Linux#設定](/AUCTeX/#p2d711b9) を参照してください．<br>
C-c C-c okular で forward search ができます．<br>

AUCTeX 2013-05-30 以降は Okular の forward search に対応しています．<br>
TeX-view-program-selection の output-pdf に TeX-view-program-list-builtin で設定されている Okular を指定します．<br>

```
(setq TeX-view-program-selection '((output-pdf "Okular")))
```

C-c C-c view で View command: に Okular のコマンドが表示され forward search が実行できます．<br>

inverse search は [Emacs](/Emacs/#z0944532) を参照してください．<br>

## その他 {#w8f257bd}

AUCTeX とは関係ありませんが，先頭に

```
% Time-stamp: <>
```

と書いておくと，保存したときにタイムスタンプが書き込まれます。
こうならない場合は ~/.emacs.d/init.el に次のように書いておきます。

```
(if (not (memq 'time-stamp write-file-hooks))
    (setq write-file-hooks
          (cons 'time-stamp write-file-hooks)))
```

## 関連リンク {#ze506029}

- [EmacsWiki: AUCTeX](http://www.emacswiki.org/emacs/AUCTeX)
- [Newest &#39;auctex&#39; Questions - TeX - LaTeX - Stack Exchange](http://tex.stackexchange.com/questions/tagged/auctex)
- [Starter Kit LaTeX](http://www.kieranhealy.org/esk/starter-kit-latex.html)
- [https://github.com/monsanto/auto-complete-auctex](https://github.com/monsanto/auto-complete-auctex)
    - [http://melpa.milkbox.net/#/auto-complete-auctex](http://melpa.milkbox.net/#/auto-complete-auctex)
- [https://github.com/tom-tan/auctex-latexmk](https://github.com/tom-tan/auctex-latexmk)
    - [AUCTeX で PDF をコマンド一つで生成する．](http://qiita.com/items/cbc813028d7f5951b165)
    - [https://github.com/milkypostman/melpa/blob/master/recipes/auctex-latexmk](https://github.com/milkypostman/melpa/blob/master/recipes/auctex-latexmk)
    - [http://melpa.milkbox.net/#/auctex-latexmk](http://melpa.milkbox.net/#/auctex-latexmk)
- [Youhei SASAKI's official site: AUCTeX の設定](http://www.gfd-dennou.org/member/uwabami/cc-env/emacs/auctex_config.html)
- [https://github.com/uwabami/emacs-config/blob/master/emacs.d/config/auctex_config.org](https://github.com/uwabami/emacs-config/blob/master/emacs.d/config/auctex_config.org)
- [emacsにauctex （texlive 2012）](http://miyazakikenji.wordpress.com/2013/06/02/emacs%E3%81%ABauctex-%EF%BC%88texlive-2012%EF%BC%89/)
- [auctex-lua.el](https://github.com/vermiculus/auctex-lua) Lua editing utilities for AUCTeX
- [sumatra-forward.el](http://william.famille-blum.org/blog/static.php?page=static081010-000413) (X)Emacs frontend to forward search with SumatraPDF
- [yatex-modoki-mode](https://bitbucket.org/tequilasunset/yatex-modoki-mode/) AUCTeX を YaTeX っぽくするマイナーモード。
- [AUCTeX | Amrta](http://skalldan.wordpress.com/tag/auctex/)
- [AUCTeX | 検索結果:  | miyazakikenji](http://miyazakikenji.wordpress.com/?s=AUCTeX)
- [Emacs+AUCTeXのjapanese-latex-modeでplatexコマンドを実行するときにバッファの文字コードに応じて適切なオプションを付与する](http://d.hatena.ne.jp/gifnksm/20090420/)

<!-- AUC-TeX ここまで -->
