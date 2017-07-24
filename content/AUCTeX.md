---
title: "AUCTeX"
url: "/AUCTeX/"
date: 2014-01-09T22:23:37Z
pukiwiki: "AUCTeX"
---

# AUCTeX

[Emacs](/Emacs/) > AUCTeX

## [AUCTeX](https://www.gnu.org/software/auctex/) {#d40177aa}

***

***

## AUCTeX とは {#h92ad1b8}

AUCTeX は Emacs の TeX モードです．

- [AUCTeX - Sophisticated document creation](https://www.gnu.org/software/auctex/)
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

を参照．

### ChangeLog {#c24ccc65}

- [log](http://git.savannah.gnu.org/cgit/auctex.git/log/)
- [ChangeLog](http://git.savannah.gnu.org/cgit/auctex.git/tree/ChangeLog.1)

### スクリーンショット {#s450de09}

[公式のスクリーンショットのページ](https://www.gnu.org/software/auctex/screenshots.html)を参照．

## 日本語利用のための engine 設定 {#gf4835e4}

AUCTeX でサポートされている日本語用 TeX は ASCII pTeX, NTT jTeX, upTeX[^1] の3種類です。タイプセット時にどのコマンドを使うかは、変数 TeX-engine に3つのうちどれがセットされているかで決まります。[^2]

通常の LaTeX ユーザーは、カスタマイズオプション TeX-parse-self を有効にしておくのがおすすめです。クラスファイルやそのオプション引数から、TeX-engine が自動でセットされます。[^3][^4]

期待と異なる engine が使われている場合は、Command メニューのサブメニューの TeXing Options から engine を変更できます。この engine の値は emacs を終了するとき保存されません。選択した engine をずっと使い続けるやり方は、以下の2通りがあります。

1. 特定の engine をどの文書でも使う場合<br>
    カスタマイズオプション japanese-TeX-engine-default を設定します。

    ```
    M-x customize-option RET japanese-TeX-engine-default RET
    ```

    として Customize インターフェースを使ってもいいし、&#x7e;/.emacs.d/init.el 等の初期化ファイルで

    ```
    (setq japanese-TeX-engine-default 'uptex) ;; upTeX を標準に
    ```

    のようにしても構いません。

1. 個別のファイルごとに engine を設定する場合<br>
    file local variable を使います。例えば、upTeX を使う場合は

    ```
    %%% Local Variables:
    %%% mode: japanese-latex
    %%% TeX-engine: uptex
    %%% End:
    ```

    のようにします。[^5]

上記どちらの場合も、TeX-engine に指定する値は ptex, jtex, uptex のいずれかです。

各 engine ごとに利用されるコマンド名（platex や euptex 等）は変数 TeX-engine-alist-builtin に保存されています。異なるコマンドを使いたい場合や、新たな engine を定義したい場合はカスタマイズオプション TeX-engine-alist を利用してください。

[forum:2047](https://okumuralab.org/tex/mod/forum/discuss.php?d=2047)のように、NTT jLaTeX 用のクラスファイルを ASCII pLaTeX で利用する場合は、上述の file (directory) local variable で TeX-engine に ptex を指定してください。

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

### ソースコードからインストールする場合 (Linux) {#re9f47fd}

```
$ wget http://git.savannah.gnu.org/cgit/auctex.git/snapshot/master.tar.gz
```

または

```
$ curl -LO http://git.savannah.gnu.org/cgit/auctex.git/snapshot/master.tar.gz
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

### Windows {#w81a725c}

Emacs を起動して

```
C-x C-f ~/
```

で，ホームディレクトリ (&#x7e;/) の場所を確認します．<br>

#### 設定 {#g637a7d7}

&#x7e;/.emacs.d/init.el に設定を記述します．

SumatraPDF を -forward-search &lt;texfile> &lt;linenumber> オプションを使用して実行した場合 SumatraPDF を前面に表示して forward search します．

SumatraPDF を前面に表示したくない場合は [SumatraPDF/fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) の fwdsumatrapdf.exe を使用します．

SumatraPDF の inverse search については [Emacs#SumatraPDF との連携#inverse search](/Emacs/#a06810d6) を参照してください．

***

```
;;
;; AUCTeX
;;
(with-eval-after-load 'tex
  (setq TeX-view-program-list '(("SumatraPDF"
                                 "powershell -Command \"& {$r = Write-Output %o;$t = Write-Output %b;$o = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFileNameWithoutExtension($r),'.pdf','\"\"\"');$b = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFileNameWithoutExtension($t),'.tex','\"\"\"');Start-Process SumatraPDF -ArgumentList ('-reuse-instance',$o,'-forward-search',$b,%n)}\""))))
(with-eval-after-load 'tex-jp
  (dolist (command '("pTeX" "pLaTeX" "pBibTeX" "jTeX" "jLaTeX" "jBibTeX" "Mendex"))
    (delq (assoc command TeX-command-list) TeX-command-list)))
(setq japanese-TeX-engine-default 'uptex)
(setq japanese-LaTeX-default-style "bxjsarticle")
(setq TeX-engine 'uptex)
(setq TeX-PDF-from-DVI "Dvipdfmx")
(setq TeX-view-program-selection '((output-dvi "SumatraPDF")
                                   (output-pdf "SumatraPDF")))
(setq preview-image-type 'dvipng)
(setq TeX-source-correlate-method 'synctex)
(setq TeX-source-correlate-start-server t)
(setq TeX-source-correlate-mode t)
(add-hook 'LaTeX-mode-hook 'japanese-latex-mode)
(add-hook 'LaTeX-mode-hook 'LaTeX-math-mode)
(add-hook 'LaTeX-mode-hook
          (function (lambda ()
                      (add-to-list 'TeX-command-list
                                   '("Latexmk"
                                     "latexmk %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-upLaTeX-pdfdvi"
                                     "latexmk -e \"$latex=q/uplatex %%O -kanji=utf8 -no-guess-input-enc %S %(mode) %%S/\" -e \"$bibtex=q/upbibtex %%O %%B/\" -e \"$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/\" -e \"$makeindex=q/upmendex %%O -o %%D %%S/\" -e \"$dvipdf=q/dvipdfmx %%O -o %%D %%S/\" -norc -gg -pdfdvi %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-upLaTeX-pdfdvi"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-upLaTeX-pdfps"
                                     "latexmk -e \"$latex=q/uplatex %%O -kanji=utf8 -no-guess-input-enc %S %(mode) %%S/\" -e \"$bibtex=q/upbibtex %%O %%B/\" -e \"$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/\" -e \"$makeindex=q/upmendex %%O -o %%D %%S/\" -e \"$dvips=q/dvips %%O -z -f %%S | convbkmk -u > %%D/\" -e \"$ps2pdf=q/ps2pdf.exe %%O %%S %%D/\" -norc -gg -pdfps %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-upLaTeX-pdfps"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-pdfLaTeX"
                                     "latexmk -e \"$pdflatex=q/pdflatex %%O %S %(mode) %%S/\" -e \"$bibtex=q/bibtex %%O %%B/\" -e \"$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/\" -e \"$makeindex=q/makeindex %%O -o %%D %%S/\" -norc -gg -pdf %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-pdfLaTeX"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-LuaLaTeX"
                                     "latexmk -e \"$lualatex=q/lualatex -cmdx %%O %S %(mode) %%S/\" -e \"$bibtex=q/upbibtex %%O %%B/\" -e \"$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/\" -e \"$makeindex=q/upmendex %%O -o %%D %%S/\" -norc -gg -pdflua %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-LuaLaTeX"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-LuaJITLaTeX"
                                     "latexmk -e \"$lualatex=q/luajitlatex -cmdx %%O %S %(mode) %%S/\" -e \"$bibtex=q/upbibtex %%O %%B/\" -e \"$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/\" -e \"$makeindex=q/upmendex %%O -o %%D %%S/\" -norc -gg -pdflua %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-LuaJITLaTeX"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-XeLaTeX"
                                     "latexmk -e \"$xelatex=q/xelatex %%O %S %(mode) %%S/\" -e \"$bibtex=q/upbibtex %%O %%B/\" -e \"$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/\" -e \"$makeindex=q/upmendex %%O -o %%D %%S/\" -norc -gg -pdfxe %t"
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
                                     "tasklist /fi \"IMAGENAME eq AcroRd32.exe\" /nh | findstr \"AcroRd32.exe\" > nul && pdfopen --r15 --file %s.pdf && pdfclose --r15 --file %s.pdf & synctex view -i \"%n:0:%b\" -o %s.pdf -x \"pdfopen --r15 --file %%{output} --page %%{page+1}\""
                                     TeX-run-discard-or-function t t :help "Run Adobe Acrobat Reader DC")))))
```

```
;;
;; RefTeX with AUCTeX
;;
(add-hook 'LaTeX-mode-hook 'turn-on-reftex)
(setq reftex-plug-into-AUCTeX t)
```

***

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#568;text-align:center">メニュー [Command]</th><th style="color:#FFF;background-color:#568;text-align:center">入力</th><th style="color:#FFF;background-color:#568;text-align:center">機能</th></tr>
> <tr><td>Latexmk</td><td>C-c C-c latexmk RET</td><td>タイプセット (Latexmk)</td></tr>
> <tr><td>Latexmk-upLaTeX-pdfdvi</td><td>C-c C-c latexmk-uplatex-pdfdvi RET</td><td>タイプセット (Latexmk-upLaTeX-pdfdvi)</td></tr>
> <tr><td>Latexmk-upLaTeX-pdfps</td><td>C-c C-c latexmk-uplatex-pdfps RET</td><td>タイプセット (Latexmk-upLaTeX-pdfps)</td></tr>
> <tr><td>Latexmk-pdfLaTeX</td><td>C-c C-c latexmk-pdflatex RET</td><td>タイプセット (Latexmk-pdfLaTeX)</td></tr>
> <tr><td>Latexmk-LuaLaTeX</td><td>C-c C-c latexmk-lualatex RET</td><td>タイプセット (Latexmk-LuaLaTeX)</td></tr>
> <tr><td>Latexmk-LuaJITLaTeX</td><td>C-c C-c latexmk-luajitlatex RET</td><td>タイプセット (Latexmk-LuaJITLaTeX)</td></tr>
> <tr><td>Latexmk-XeLaTeX</td><td>C-c C-c latexmk-xelatex RET</td><td>タイプセット (Latexmk-XeLaTeX)</td></tr>
> <tr><td>SumatraPDF</td><td>C-c C-c sumatrapdf RET</td><td>SumatraPDF で forward search</td></tr>
> <tr><td>fwdsumatrapdf</td><td>C-c C-c fwdsumatrapdf RET</td><td>fwdsumatrapdf で forward search</td></tr>
> <tr><td>TeXworks</td><td>C-c C-c texworks RET</td><td>TeXworks で forward search</td></tr>
> <tr><td>TeXstudio</td><td>C-c C-c texstudio RET</td><td>TeXstudio で forward search</td></tr>
> <tr><td>Firefox</td><td>C-c C-c firefox RET</td><td>Firefox でプレビュー</td></tr>
> <tr><td>Chrome</td><td>C-c C-c chrome RET</td><td>Chrome でプレビュー</td></tr>
> <tr><td>pdfopen</td><td>C-c C-c pdfopen RET</td><td>Adobe Acrobat Reader DC で forward search or print PDF</td></tr>
> </tbody>
> </table>
>

### macOS {#h32722ec}

- [Mac OS X El Capitan の AUCTeX の設定](http://ryogan.org/blog/2015/12/30/mac-os-x-el-capitan-%E3%81%AE-auctex-%E3%81%AE%E8%A8%AD%E5%AE%9A/)
- [AUCTex + RefTexで快適論文作成](http://ochiailab.blogspot.jp/2013/01/auctex-reftex.html)
- [EmacsとSkimの連携](http://ochiailab.blogspot.jp/2012/10/emacsskim.html)
- [Build Latex environments](http://sorabu.tumblr.com/post/6703335969/build-latex-environments)

Emacs を起動して

```
C-x C-f ~/
```

で，ホームディレクトリ (&#x7e;/) の場所を確認します．

#### 設定 {#n55816de}

動作未確認です．

&#x7e;/.emacs.d/init.el に設定を記述します．

***

```
;;
;; PATH
;;
(setenv "PATH"
        (concat (getenv "PATH") ":/Library/TeX/texbin"))
```

```
;;
;; AUCTeX
;;
(with-eval-after-load 'tex-jp
  (dolist (command '("pTeX" "pLaTeX" "pBibTeX" "jTeX" "jLaTeX" "jBibTeX" "Mendex"))
    (delq (assoc command TeX-command-list) TeX-command-list)))
(setq japanese-TeX-engine-default 'uptex)
(setq japanese-LaTeX-default-style "bxjsarticle")
(setq TeX-engine 'uptex)
(setq TeX-PDF-from-DVI "Dvipdfmx")
(setq TeX-view-program-selection '((output-dvi "displayline")
                                   (output-pdf "displayline")))
;(setq TeX-view-program-selection '((output-dvi "Skim")
;                                   (output-pdf "Skim")))
(setq preview-image-type 'dvipng)
(setq TeX-source-correlate-method 'synctex)
(setq TeX-source-correlate-start-server t)
(setq TeX-source-correlate-mode t)
(add-hook 'LaTeX-mode-hook 'japanese-latex-mode)
(add-hook 'LaTeX-mode-hook 'LaTeX-math-mode)
(add-hook 'LaTeX-mode-hook
          (function (lambda ()
                      (add-to-list 'TeX-command-list
                                   '("Latexmk"
                                     "/Library/TeX/texbin/latexmk %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-upLaTeX-pdfdvi"
                                     "/Library/TeX/texbin/latexmk -e '$latex=q/uplatex %%O %S %(mode) %%S/' -e '$bibtex=q/upbibtex %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/upmendex %%O -o %%D %%S/' -e '$dvipdf=q/dvipdfmx %%O -o %%D %%S/' -norc -gg -pdfdvi %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-upLaTeX-pdfdvi"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-upLaTeX-pdfps"
                                     "/Library/TeX/texbin/latexmk -e '$latex=q/uplatex %%O %S %(mode) %%S/' -e '$bibtex=q/upbibtex %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/upmendex %%O -o %%D %%S/' -e '$dvips=q/dvips %%O -z -f %%S | convbkmk -u > %%D/' -e '$ps2pdf=q/ps2pdf %%O %%S %%D/' -norc -gg -pdfps %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-upLaTeX-pdfps"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-pdfLaTeX"
                                     "/Library/TeX/texbin/latexmk -e '$pdflatex=q/pdflatex %%O %S %(mode) %%S/' -e '$bibtex=q/bibtex %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/makeindex %%O -o %%D %%S/' -norc -gg -pdf %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-pdfLaTeX"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-LuaLaTeX"
                                     "/Library/TeX/texbin/latexmk -e '$lualatex=q/lualatex %%O %S %(mode) %%S/' -e '$bibtex=q/upbibtex %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/upmendex %%O -o %%D %%S/' -norc -gg -pdflua %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-LuaLaTeX"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-LuaJITLaTeX"
                                     "/Library/TeX/texbin/latexmk -e '$lualatex=q/luajitlatex %%O %S %(mode) %%S/' -e '$bibtex=q/upbibtex %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/upmendex %%O -o %%D %%S/' -norc -gg -pdflua %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-LuaJITLaTeX"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-XeLaTeX"
                                     "/Library/TeX/texbin/latexmk -e '$xelatex=q/xelatex %%O %S %(mode) %%S/' -e '$bibtex=q/upbibtex %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/upmendex %%O -o %%D %%S/' -norc -gg -pdfxe %t"
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
                                     "/Library/TeX/texbin/synctex view -i \"%n:0:%b\" -o %s.pdf -x \"/Applications/TeXworks.app/Contents/MacOS/TeXworks --position=%%{page+1} %%{output}\""
                                     TeX-run-discard-or-function t t :help "Run TeXworks"))
                      (add-to-list 'TeX-command-list
                                   '("TeXstudio"
                                     "/Library/TeX/texbin/synctex view -i \"%n:0:%b\" -o %s.pdf -x \"/Applications/texstudio.app/Contents/MacOS/texstudio --pdf-viewer-only --page %%{page+1} %%{output}\""
                                     TeX-run-discard-or-function t t :help "Run TeXstudio"))
                      (add-to-list 'TeX-command-list
                                   '("Firefox"
                                     "/usr/bin/open -a Firefox.app %s.pdf"
                                     TeX-run-discard-or-function t t :help "Run Mozilla Firefox"))
                      (add-to-list 'TeX-command-list
                                   '("acroread"
                                     "/usr/bin/open -a \"Adobe Acrobat Reader DC.app\" %s.pdf"
                                     TeX-run-discard-or-function t t :help "Run Adobe Acrobat Reader DC")))))
```

```
;;
;; RefTeX with AUCTeX
;;
(add-hook 'LaTeX-mode-hook 'turn-on-reftex)
(setq reftex-plug-into-AUCTeX t)
```

***

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#568;text-align:center">メニュー [Command]</th><th style="color:#FFF;background-color:#568;text-align:center">入力</th><th style="color:#FFF;background-color:#568;text-align:center">機能</th></tr>
> <tr><td>Latexmk</td><td>C-c C-c latexmk RET</td><td>タイプセット (Latexmk)</td></tr>
> <tr><td>Latexmk-upLaTeX-pdfdvi</td><td>C-c C-c latexmk-uplatex-pdfdvi RET</td><td>タイプセット (Latexmk-upLaTeX-pdfdvi)</td></tr>
> <tr><td>Latexmk-upLaTeX-pdfps</td><td>C-c C-c latexmk-uplatex-pdfps RET</td><td>タイプセット (Latexmk-upLaTeX-pdfps)</td></tr>
> <tr><td>Latexmk-pdfLaTeX</td><td>C-c C-c latexmk-pdflatex RET</td><td>タイプセット (Latexmk-pdfLaTeX)</td></tr>
> <tr><td>Latexmk-LuaLaTeX</td><td>C-c C-c latexmk-lualatex RET</td><td>タイプセット (Latexmk-LuaLaTeX)</td></tr>
> <tr><td>Latexmk-LuaJITLaTeX</td><td>C-c C-c latexmk-luajitlatex RET</td><td>タイプセット (Latexmk-LuaJITLaTeX)</td></tr>
> <tr><td>Latexmk-XeLaTeX</td><td>C-c C-c latexmk-xelatex RET</td><td>タイプセット (Latexmk-XeLaTeX)</td></tr>
> <tr><td>displayline</td><td>C-c C-c displayline RET</td><td>displayline で forward search</td></tr>
> <tr><td>Skim</td><td>C-c C-c skim RET</td><td>Skim でプレビュー</td></tr>
> <tr><td>Preview</td><td>C-c C-c preview RET</td><td>Preview でプレビュー</td></tr>
> <tr><td>TeXShop</td><td>C-c C-c texshop RET</td><td>TeXShop でプレビュー</td></tr>
> <tr><td>TeXworks</td><td>C-c C-c texworks RET</td><td>TeXworks で forward search</td></tr>
> <tr><td>TeXstudio</td><td>C-c C-c texstudio RET</td><td>TeXstudio で forward search</td></tr>
> <tr><td>Firefox</td><td>C-c C-c firefox RET</td><td>Firefox でプレビュー</td></tr>
> <tr><td>acroread</td><td>C-c C-c acroread RET</td><td>Adobe Acrobat Reader DC でプレビュー or print PDF</td></tr>
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

#### 設定 {#p2d711b9}

&#x7e;/.emacs.d/init.el に設定を記述します．

fwdevince は Evince/fwdevince の fwdevince を使用します．

***

```
;;
;; AUCTeX
;;
(with-eval-after-load 'tex-jp
  (dolist (command '("pTeX" "pLaTeX" "pBibTeX" "jTeX" "jLaTeX" "jBibTeX" "Mendex"))
    (delq (assoc command TeX-command-list) TeX-command-list)))
(setq japanese-TeX-engine-default 'uptex)
(setq japanese-LaTeX-default-style "bxjsarticle")
(setq TeX-engine 'uptex)
(setq TeX-PDF-from-DVI "Dvipdfmx")
(setq TeX-view-program-selection '((output-dvi "Evince")
                                   (output-pdf "Evince")))
;(setq TeX-view-program-selection '((output-dvi "Atril")
;                                   (output-pdf "Atril")))
;(setq TeX-view-program-selection '((output-dvi "Xreader")
;                                   (output-pdf "Xreader")))
;(setq TeX-view-program-selection '((output-dvi "Okular")
;                                   (output-pdf "Okular")))
;(setq TeX-view-program-selection '((output-dvi "Zathura")
;                                   (output-pdf "Zathura")))
(setq preview-image-type 'dvipng)
(setq TeX-source-correlate-method 'synctex)
(setq TeX-source-correlate-start-server t)
(setq TeX-source-correlate-mode t)
(add-hook 'LaTeX-mode-hook 'japanese-latex-mode)
(add-hook 'LaTeX-mode-hook 'LaTeX-math-mode)
(add-hook 'LaTeX-mode-hook
          (function (lambda ()
                      (add-to-list 'TeX-command-list
                                   '("Latexmk"
                                     "latexmk %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-upLaTeX-pdfdvi"
                                     "latexmk -e '$latex=q/uplatex %%O %S %(mode) %%S/' -e '$bibtex=q/upbibtex %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/upmendex %%O -o %%D %%S/' -e '$dvipdf=q/dvipdfmx %%O -o %%D %%S/' -norc -gg -pdfdvi %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-upLaTeX-pdfdvi"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-upLaTeX-pdfps"
                                     "latexmk -e '$latex=q/uplatex %%O %S %(mode) %%S/' -e '$bibtex=q/upbibtex %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/upmendex %%O -o %%D %%S/' -e '$dvips=q/dvips %%O -z -f %%S | convbkmk -u > %%D/' -e '$ps2pdf=q/ps2pdf %%O %%S %%D/' -norc -gg -pdfps %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-upLaTeX-pdfps"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-pdfLaTeX"
                                     "latexmk -e '$pdflatex=q/pdflatex %%O %S %(mode) %%S/' -e '$bibtex=q/bibtex %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/makeindex %%O -o %%D %%S/' -norc -gg -pdf %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-pdfLaTeX"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-LuaLaTeX"
                                     "latexmk -e '$lualatex=q/lualatex %%O %S %(mode) %%S/' -e '$bibtex=q/upbibtex %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/upmendex %%O -o %%D %%S/' -norc -gg -pdflua %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-LuaLaTeX"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-LuaJITLaTeX"
                                     "latexmk -e '$lualatex=q/luajitlatex %%O %S %(mode) %%S/' -e '$bibtex=q/upbibtex %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/upmendex %%O -o %%D %%S/' -norc -gg -pdflua %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-LuaJITLaTeX"))
                      (add-to-list 'TeX-command-list
                                   '("Latexmk-XeLaTeX"
                                     "latexmk -e '$xelatex=q/xelatex %%O %S %(mode) %%S/' -e '$bibtex=q/upbibtex %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/upmendex %%O -o %%D %%S/' -norc -gg -pdfxe %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run Latexmk-XeLaTeX"))
                      (add-to-list 'TeX-command-list
                                   '("xdg-open"
                                     "xdg-open %s.pdf"
                                     TeX-run-discard-or-function t t :help "Run xdg-open"))
                      (add-to-list 'TeX-command-list
                                   '("Evince"
                                     ;"synctex view -i \"%n:0:%b\" -o %s.pdf -x \"evince -i %%{page+1} %%{output}\""
                                     "TeX-evince-sync-view"
                                     TeX-run-discard-or-function t t :help "Forward search with Evince"))
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
                                     "zathura -x \"emacsclient --no-wait +%%{line} %%{input}\" --synctex-forward \"%n:0:%b\" %s.pdf"
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
```

```
;;
;; RefTeX with AUCTeX
;;
(add-hook 'LaTeX-mode-hook 'turn-on-reftex)
(setq reftex-plug-into-AUCTeX t)
```

***

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#568;text-align:center">メニュー [Command]</th><th style="color:#FFF;background-color:#568;text-align:center">入力</th><th style="color:#FFF;background-color:#568;text-align:center">機能</th></tr>
> <tr><td>Latexmk</td><td>C-c C-c latexmk RET</td><td>タイプセット (Latexmk)</td></tr>
> <tr><td>Latexmk-upLaTeX-pdfdvi</td><td>C-c C-c latexmk-uplatex-pdfdvi RET</td><td>タイプセット (Latexmk-upLaTeX-pdfdvi)</td></tr>
> <tr><td>Latexmk-upLaTeX-pdfps</td><td>C-c C-c latexmk-uplatex-pdfps RET</td><td>タイプセット (Latexmk-upLaTeX-pdfps)</td></tr>
> <tr><td>Latexmk-pdfLaTeX</td><td>C-c C-c latexmk-pdflatex RET</td><td>タイプセット (Latexmk-pdfLaTeX)</td></tr>
> <tr><td>Latexmk-LuaLaTeX</td><td>C-c C-c latexmk-lualatex RET</td><td>タイプセット (Latexmk-LuaLaTeX)</td></tr>
> <tr><td>Latexmk-LuaJITLaTeX</td><td>C-c C-c latexmk-luajitlatex RET</td><td>タイプセット (Latexmk-LuaJITLaTeX)</td></tr>
> <tr><td>Latexmk-XeLaTeX</td><td>C-c C-c latexmk-xelatex RET</td><td>タイプセット (Latexmk-XeLaTeX)</td></tr>
> <tr><td>xdg-open</td><td>C-c C-c xdg-open RET</td><td>xdg-open でプレビュー</td></tr>
> <tr><td>Evince</td><td>C-c C-c evince RET</td><td>Evince で forward search</td></tr>
> <tr><td>fwdevince</td><td>C-c C-c fwdevince RET</td><td>fwdevince で forward search</td></tr>
> <tr><td>Okular</td><td>C-c C-c okular RET</td><td>Okular で forward search</td></tr>
> <tr><td>zathura</td><td>C-c C-c zathura RET</td><td>zathura で forward search</td></tr>
> <tr><td>qpdfview</td><td>C-c C-c qpdfview RET</td><td>qpdfview で forward search</td></tr>
> <tr><td>TeXworks</td><td>C-c C-c texworks RET</td><td>TeXworks で forward search</td></tr>
> <tr><td>TeXstudio</td><td>C-c C-c texstudio RET</td><td>TeXstudio で forward search</td></tr>
> <tr><td>MuPDF</td><td>C-c C-c mupdf RET</td><td>MuPDF でプレビュー</td></tr>
> <tr><td>Firefox</td><td>C-c C-c firefox RET</td><td>Firefox でプレビュー</td></tr>
> <tr><td>Chromium</td><td>C-c C-c chromium RET</td><td>Chromium でプレビュー</td></tr>
> </tbody>
> </table>
>

***

## 基本的な設定 {#ra10f739}

### 自動ロード {#k032aa6a}

#### Emacs 標準のパッケージ管理システムを使用してインストールした場合 {#c3acf208}

Emacs 標準のパッケージ管理システムを使用してインストールした場合は何も記述しなくても AUCTeX が自動ロードされます．

AUCTeX が自動ロードされない場合は ~/.emacs.d/init.el に例えば次のように記述します．

```
(add-to-list 'load-path "~/.emacs.d/elpa/auctex-11.90.2")
(require 'tex-site)
```

#### AUCTeX の公式サイトのパッケージからインストールした場合 {#db9dca5d}

AUCTeX を自動ロードする場合は ~/.emacs.d/init.el に次のように記述します．<br>

```
(load "auctex.el" nil t t)
(load "preview-latex.el" nil t t)
```

### ドキュメントクラスの設定 {#l246b90f}

[BXjscls](/BXjscls/) の bxjsarticle を標準に設定する場合は以下のように設定します．

```
(setq japanese-LaTeX-default-style "bxjsarticle")
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
> <tr><td>View</td><td>C-c C-c view RET</td><td>プレビュー または forward search</td></tr>
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

upTeX をデフォルトにする場合は 以下の設定をします．

```
(setq japanese-TeX-engine-default 'uptex)
(setq japanese-LaTeX-default-style "bxjsarticle")
(setq TeX-engine 'uptex)
(setq TeX-PDF-from-DVI "Dvipdfmx")
(add-hook 'LaTeX-mode-hook 'japanese-latex-mode)
```

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#568;text-align:center">メニュー [Command]</th><th style="color:#FFF;background-color:#568;text-align:center">入力</th><th style="color:#FFF;background-color:#568;text-align:center">TeX エンジンの選択</th></tr>
> <tr><td>TeXing Options -&gt; Use Default engine</td><td>M-x TeX-engine RET default RET</td><td>デフォルト (pdfTeX) を使用</td></tr>
> <tr><td>TeXing Options -&gt; Use LuaTeX engine</td><td>M-x TeX-engine RET luatex RET</td><td>LuaTeX を使用</td></tr>
> <tr><td>TeXing Options -&gt; Use upTeX engine</td><td>M-x TeX-engine RET uptex RET</td><td>upTeX を使用</td></tr>
> <tr><td>TeXing Options -&gt; Use XeTeX engine</td><td>M-x TeX-engine RET xetex RET</td><td>XeTeX を使用</td></tr>
> </tbody>
> </table>
>

### TeX-PDF-mode {#bf4992a9}

TeX-PDF-mode を有効にすると Default (pdfTeX) エンジン, LuaTeX エンジン, XeTeX エンジン で DVI ファイルのかわりに PDF ファイルを出力するようになります．<br>
AUCTeX は TeX-PDF-mode がデフォルトで有効になっています．<br>

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
(setq TeX-source-correlate-mode t)
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

次に C-c C-c するとコンパイルできます。

次に C-c C-c すると依存関係を調べて出力ファイルが新しければプレビューします。
再度コンパイルしたいのなら l TAB または l SPACE
と打てば補完されて LaTeX 処理に直ります。<br>

### いろいろな使い方 {#v806ddfa}

ダブルクォート " を打てば，状況に応じて \`\` または '' に変換してくれます。

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

forward search は [AUCTeX#インストール#macOS#設定](/AUCTeX/#n55816de) を参照してください．<br>
C-c C-c displayline で forward search ができます．<br>

AUCTeX は Skim の forward search に対応しています．<br>
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

AUCTeX は Evince の forward and inverse search に対応しています．<br>
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

AUCTeX は Okular の forward search に対応しています．<br>
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
- [https://github.com/alexeyr/company-auctex](https://github.com/alexeyr/company-auctex)
- [http://www.reddit.com/r/emacs/comments/2jng1m/how_to_set_up_forwardinverse_searches_with_auctex/](http://www.reddit.com/r/emacs/comments/2jng1m/how_to_set_up_forwardinverse_searches_with_auctex/)
- [https://github.com/monsanto/auto-complete-auctex](https://github.com/monsanto/auto-complete-auctex)
    - [http://melpa.milkbox.net/#/auto-complete-auctex](http://melpa.milkbox.net/#/auto-complete-auctex)
- [https://github.com/tom-tan/auctex-latexmk](https://github.com/tom-tan/auctex-latexmk)
    - [AUCTeX で PDF をコマンド一つで生成する．](http://qiita.com/items/cbc813028d7f5951b165)
    - [https://github.com/milkypostman/melpa/blob/master/recipes/auctex-latexmk](https://github.com/milkypostman/melpa/blob/master/recipes/auctex-latexmk)
    - [http://melpa.milkbox.net/#/auctex-latexmk](http://melpa.milkbox.net/#/auctex-latexmk)
- [AUCTeX の設定](https://github.com/uwabami/emacs/blob/master/config/auctex_config.org)
- [emacsにauctex （texlive 2012）](http://miyazakikenji.wordpress.com/2013/06/02/emacs%E3%81%ABauctex-%EF%BC%88texlive-2012%EF%BC%89/)
- [auctex-lua.el](https://github.com/vermiculus/auctex-lua) Lua editing utilities for AUCTeX
- [sumatra-forward.el](http://william.famille-blum.org/blog/static.php?page=static081010-000413) (X)Emacs frontend to forward search with SumatraPDF
- [yatex-modoki-mode](https://bitbucket.org/tequilasunset/yatex-modoki-mode/) AUCTeX を YaTeX っぽくするマイナーモード。
- [AUCTeX | Amrta](http://skalldan.wordpress.com/tag/auctex/)
- [AUCTeX | 検索結果:  | miyazakikenji](http://miyazakikenji.wordpress.com/?s=AUCTeX)
- [Emacs+AUCTeXのjapanese-latex-modeでplatexコマンドを実行するときにバッファの文字コードに応じて適切なオプションを付与する](http://d.hatena.ne.jp/gifnksm/20090420/)

<!-- AUCTeX ここまで -->

[^1]: upLaTeX を利用したとき、何度 C-c C-c をタイプしても typeset が終わったと判定されず、Viewer の起動に移行しなかった問題は AUCTeX 11.90 で修正されました。
[^2]: LuaTeX-ja を利用する場合は、日本語用に特別の設定は不要です。単純に engine として LuaTeX を選び、通常の LuaTeX 文書として編集するだけでよく、この節の話は当てはまりません。
[^3]: 文書を親ファイルと子ファイルに分割する場合は、さらに TeX-auto-save も有効にするとよいかもしれません。文書の保存時にサブディレクトリ auto 内に情報が保存されるので、次回編集を再開するとき、子ファイルだけを開いても TeX-engine が正しい値にセットされます。
[^4]: \documentclass\[uplatex\]{jsarticle} 等のように、jsclasses 系のクラスファイルに uplatex オプションを指定した場合 upTeX engine が選択されない問題は、開発版では修正されました。AUCTeX 11.90 ではまだ残っています。
[^5]: directory local variable も、AUCTeX 11.90 からは japanese-latex-mode, japanese-plain-tex-mode で利用できるようになりました。
