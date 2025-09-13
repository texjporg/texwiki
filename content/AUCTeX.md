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

AUCTeX は GNU Emacs 28.1 以降で動作する LaTeX, TeX, ConTeXt 用のメジャーモードです．

- [AUCTeX - Sophisticated document creation](https://www.gnu.org/software/auctex/)
    (公式ページ)

- [AUCTeX, an integrated TeX/LaTeX environment - 概要 \[Savannah\]](https://savannah.gnu.org/projects/auctex/)
- [auctex Archives](https://lists.gnu.org/archive/html/auctex/)
- [CTAN:support/auctex](https://mirror.ctan.org/support/auctex)
- [EmacsWiki: AUCTeX](https://www.emacswiki.org/emacs/AUCTeX)

### License {#j807fd6e}

[GPLv3](https://git.savannah.gnu.org/cgit/auctex.git/tree/COPYING)

### リリース情報 {#bbfafcad}

- [https://elpa.gnu.org/packages/auctex.html](https://elpa.gnu.org/packages/auctex.html)
- [https://git.savannah.gnu.org/cgit/auctex.git/refs/](https://git.savannah.gnu.org/cgit/auctex.git/refs/)
    - [https://git.savannah.gnu.org/cgit/auctex.git/refs/tags](https://git.savannah.gnu.org/cgit/auctex.git/refs/tags)

を参照．

### ChangeLog {#c24ccc65}

- [NEWS.org](https://git.savannah.gnu.org/cgit/auctex.git/tree/NEWS.org)
- [log](https://git.savannah.gnu.org/cgit/auctex.git/log/)
- [https://git.savannah.gnu.org/cgit/emacs/elpa.git/log/?h=externals/auctex](https://git.savannah.gnu.org/cgit/emacs/elpa.git/log/?h=externals/auctex)
- [https://git.savannah.gnu.org/gitweb/?p=emacs/elpa.git;a=shortlog;h=refs/heads/externals/auctex](https://git.savannah.gnu.org/gitweb/?p=emacs/elpa.git;a=shortlog;h=refs/heads/externals/auctex)

### スクリーンショット {#s450de09}

[公式のスクリーンショットのページ](https://www.gnu.org/software/auctex/screenshots.html)を参照．

## 日本語利用のための engine 設定 {#gf4835e4}

AUCTeX でサポートされている日本語用 TeX は upTeX[^1], ASCII pTeX, NTT jTeX の3種類です。タイプセット時にどのコマンドを使うかは、変数 TeX-engine に3つのうちどれがセットされているかで決まります。[^2]

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
    %%% mode: japanese-LaTeX
    %%% TeX-engine: uptex
    %%% End:
    ```

    のようにします。[^5]

上記どちらの場合も、TeX-engine に指定する値は uptex, ptex, jtex のいずれかです。

各 engine ごとに利用されるコマンド名（uplatex や platex 等）は変数 TeX-engine-alist-builtin に保存されています。異なるコマンドを使いたい場合や、新たな engine を定義したい場合はカスタマイズオプション TeX-engine-alist を利用してください。

[forum:2047](https://okumuralab.org/tex/mod/forum/discuss.php?d=2047) のように、NTT jLaTeX 用のクラスファイルを ASCII pLaTeX で利用する場合は、上述の file (directory) local variable で TeX-engine に ptex を指定してください。

LuaTeX、LuaLaTeX を使用する場合は、変数 TeX-engine を &#x7e;/.emacs.d/init.el 等の初期化ファイルで

```
(setq TeX-engine 'luatex)
```

のように設定します。

## 注意点 {#gb666e4a}

### " を入力しようとすると \`\` が入力される {#q07274ce}

- [Emacs + YaTeX でダブルクォーテーションを入力](http://tetu1984.hateblo.jp/entry/20090123/1232651566)

AUCTeX, TeX mode, YaTeX では " を入力しようとすると \`\` が入力されます．
\`\` ではなく " を入力したい場合は ""（" を2回打つ）か C-q " (Ctrl-Q を入力した後で " を入力) とします．

## 不具合 {#dd1381aa}

- [bug-auctex](http://www.mail-archive.com/bug-auctex@gnu.org/)

## インストール {#o492e3e0}

### Emacs 標準のパッケージ管理システムを使用する場合 {#s03dbb73}

M-x package-install RET auctex RET

または

M-x list-packages RET でリストを表示して auctex を選択

### 開発版をソースコードからインストールする場合 (Linux) {#re9f47fd}

```
mkdir ~/development
cd ~/development
git clone https://git.savannah.gnu.org/git/auctex.git
cd ~/development/auctex
make
```

以下を &#x7e;/.emacs.d/init.el に記述します。

```
(load "~/development/auctex/auctex-autoloads.el" nil t t)
(with-eval-after-load 'info
  (add-to-list 'Info-additional-directory-list
               "~/development/auctex/doc"))
```

use-package を使用している場合は以下を &#x7e;/.emacs.d/init.el に記述します。

```
(use-package auctex
  :init
  (load "~/development/auctex/auctex-autoloads.el" nil t t)
  (with-eval-after-load 'info
    (add-to-list 'Info-additional-directory-list
                 "~/development/auctex/doc")))
```

## 設定 {#g686a32e}

### Windows での設定例 {#w81a725c}

Emacs を起動して

```
C-x C-f ~/
```

で，ホームディレクトリ (&#x7e;/) の場所を確認します．

&#x7e;/.emacs.d/init.el に設定を記述します．

SumatraPDF を -forward-search &lt;texfile> &lt;linenumber> オプションを使用して実行した場合 SumatraPDF を前面に表示して forward search します．

SumatraPDF を前面に表示したくない場合は [SumatraPDF/fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) の fwdsumatrapdf.exe を使用します．

SumatraPDF の inverse search については [Emacs#SumatraPDF との連携#inverse search](/Emacs/#a06810d6) を参照してください．

***

```
;;
;; AUCTeX
;;
(with-eval-after-load 'tex-jp
  (dolist (command '("pTeX" "pLaTeX" "pBibTeX" "jTeX" "jLaTeX" "jBibTeX" "Mendex"))
    (delq (assoc command TeX-command-list) TeX-command-list)))
(setq japanese-TeX-engine-default 'uptex)
(setq japanese-LaTeX-default-style "jlreq")
(setq TeX-engine 'luatex)
(setq TeX-view-program-list '(("SumatraPDF"
                               "powershell -Command \"& {$r = Write-Output %o;$t = Write-Output %b;$o = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFileNameWithoutExtension($r),'.pdf','\"\"\"');$b = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFileNameWithoutExtension($t),'.tex','\"\"\"');Start-Process \"C:/Users/$Env:USERNAME/AppData/Local/SumatraPDF/SumatraPDF.exe\" -ArgumentList ('-reuse-instance',\"$o\",'-forward-search',\"$b\",\"%n\")}\"")))
(setq TeX-view-program-selection '((output-dvi "SumatraPDF")
                                   (output-pdf "SumatraPDF")))
(setq TeX-source-correlate-method 'synctex)
(setq TeX-source-correlate-start-server t)
(setq TeX-source-correlate-mode t)
(setq LaTeX-math-mode t)
(add-hook 'LaTeX-mode-hook 'japanese-LaTeX-mode)
(add-hook 'LaTeX-mode-hook
          (function (lambda ()
                      (add-to-list 'TeX-command-list
                                   '("LuaLaTeXmk"
                                     "latexmk -e \"$lualatex=q/lualatex %%O %(file-line-error) %(extraopts) %S %(mode) %%S/\" -e \"$bibtex=q/bibtexu %%O %%B/\" -e \"$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/\" -e \"$makeindex=q/upmendex %%O -o %%D %%S/\" -norc -gg -pdflua %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run LuaLaTeXmk"))
                      (add-to-list 'TeX-command-list
                                   '("upLaTeXmk"
                                     "latexmk -e \"$latex=q/uplatex %%O -kanji=utf8 -no-guess-input-enc %(file-line-error) %(extraopts) %S %(mode) %%S/\" -e \"$bibtex=q/bibtexu %%O %%B/\" -e \"$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/\" -e \"$makeindex=q/upmendex %%O -o %%D %%S/\" -e \"$dvipdf=q/dvipdfmx %%O -o %%D %%S/\" -norc -gg -pdfdvi %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run upLaTeXmk"))
                      (add-to-list 'TeX-command-list
                                   '("SumatraPDF"
                                     "powershell -Command \"& {$r = Write-Output %o;$t = Write-Output %b;$o = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFileNameWithoutExtension($r),'.pdf','\"\"\"');$b = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFileNameWithoutExtension($t),'.tex','\"\"\"');Start-Process \"C:/Users/$Env:USERNAME/AppData/Local/SumatraPDF/SumatraPDF.exe\" -ArgumentList ('-reuse-instance',\"$o\",'-forward-search',\"$b\",\"%n\")}\""
                                     TeX-run-discard-or-function t t :help "Forward search with SumatraPDF"))
                      (add-to-list 'TeX-command-list
                                   '("Fwdsumatrapdf"
                                     "fwdsumatrapdf %s.pdf \"%b\" %n"
                                     TeX-run-discard-or-function t t :help "Forward search with fwdsumatrapdf"))
                      (add-to-list 'TeX-command-list
                                   '("TeXworks"
                                     "synctex view -i \"%n:0:%b\" -o %s.pdf -x \"texworks --position=%%{page+1} %%{output}\""
                                     TeX-run-discard-or-function t t :help "Forward search with TeXworks"))
                      (add-to-list 'TeX-command-list
                                   '("TeXstudio"
                                     "synctex view -i \"%n:0:%b\" -o %s.pdf -x \"texstudio --pdf-viewer-only --page %%{page+1} %%{output}\""
                                     TeX-run-discard-or-function t t :help "Forward search with TeXstudio"))
                      (add-to-list 'TeX-command-list
                                   '("Firefox"
                                     "powershell -Command \"& {$r = Write-Output %o;$o = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFileNameWithoutExtension($r),'.pdf','\"\"\"');Start-Process firefox -ArgumentList ('-new-window',$o)}\""
                                     TeX-run-discard-or-function t t :help "Run Mozilla Firefox"))
                      (add-to-list 'TeX-command-list
                                   '("Chrome"
                                     "powershell -Command \"& {$r = Write-Output %s.pdf;$o = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFullPath($r),'\"\"\"');Start-Process chrome -ArgumentList ('--new-window',$o)}\""
                                     TeX-run-discard-or-function t t :help "Run Google Chrome"))
                      (add-to-list 'TeX-command-list
                                   '("Edge"
                                     "powershell -Command \"& {$r = Write-Output %s.pdf;$o = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFullPath($r),'\"\"\"');Start-Process msedge -ArgumentList ('--new-window',$o)}\""
                                     TeX-run-discard-or-function t t :help "Run Microsoft Edge"))
                      (add-to-list 'TeX-command-list
                                   '("Acrobat"
                                     "start Acrobat %s.pdf"
                                     TeX-run-discard-or-function t t :help "Run Adobe Acrobat Reader")))))

;;
;; RefTeX with AUCTeX
;;
(setq reftex-mode t)
(add-hook 'LaTeX-mode-hook 'turn-on-reftex)
(setq reftex-plug-into-AUCTeX t)
```

***

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#568;text-align:center">メニュー [Command]</th><th style="color:#FFF;background-color:#568;text-align:center">入力</th><th style="color:#FFF;background-color:#568;text-align:center">機能</th></tr>
> <tr><td>LuaLaTeXmk</td><td>C-c C-c lualatexmk RET</td><td>タイプセット (LuaLaTeXmk)</td></tr>
> <tr><td>upLaTeXmk</td><td>C-c C-c uplatexmk RET</td><td>タイプセット (upLaTeXmk)</td></tr>
> <tr><td>SumatraPDF</td><td>C-c C-c sumatrapdf RET</td><td>SumatraPDF で forward search</td></tr>
> <tr><td>Fwdsumatrapdf</td><td>C-c C-c fwdsumatrapdf RET</td><td>fwdsumatrapdf で forward search</td></tr>
> <tr><td>TeXworks</td><td>C-c C-c texworks RET</td><td>TeXworks で forward search</td></tr>
> <tr><td>TeXstudio</td><td>C-c C-c texstudio RET</td><td>TeXstudio で forward search</td></tr>
> <tr><td>Firefox</td><td>C-c C-c firefox RET</td><td>Firefox でプレビュー</td></tr>
> <tr><td>Chrome</td><td>C-c C-c chrome RET</td><td>Chrome でプレビュー</td></tr>
> <tr><td>Edge</td><td>C-c C-c edge RET</td><td>Edge でプレビュー</td></tr>
> <tr><td>Acrobat</td><td>C-c C-c acrobat RET</td><td>Adobe Acrobat Reader でプレビュー</td></tr>
> </tbody>
> </table>
>

### macOS での設定例 {#h32722ec}

- [AUCTex + RefTexで快適論文作成](https://ochiailab.blogspot.jp/2013/01/auctex-reftex.html)
- [EmacsとSkimの連携](https://ochiailab.blogspot.com/2012/10/emacsskim.html)

Emacs を起動して

```
C-x C-f ~/
```

で，ホームディレクトリ (&#x7e;/) の場所を確認します．

&#x7e;/.emacs.d/init.el に設定を記述します．

動作未確認です．

***

```
;;
;; PATH
;;
(setenv "PATH" "/usr/local/bin:/Library/TeX/texbin/:/Applications/Skim.app/Contents/SharedSupport:$PATH" t)
(setq exec-path (append '("/usr/local/bin" "/Library/TeX/texbin" "/Applications/Skim.app/Contents/SharedSupport") exec-path))

;;
;; AUCTeX
;;
(with-eval-after-load 'tex-jp
  (dolist (command '("pTeX" "pLaTeX" "pBibTeX" "jTeX" "jLaTeX" "jBibTeX" "Mendex"))
    (delq (assoc command TeX-command-list) TeX-command-list)))
(setq japanese-TeX-engine-default 'uptex)
(setq japanese-LaTeX-default-style "jlreq")
(setq TeX-engine 'luatex)
(setq TeX-view-program-selection '((output-pdf "displayline")))
(setq TeX-source-correlate-method 'synctex)
(setq TeX-source-correlate-start-server t)
(setq TeX-source-correlate-mode t)
(setq LaTeX-math-mode t)
(add-hook 'LaTeX-mode-hook 'japanese-LaTeX-mode)
(add-hook 'LaTeX-mode-hook
          (function (lambda ()
                      (add-to-list 'TeX-command-list
                                   '("LuaLaTeXmk"
                                     "latexmk -e '$lualatex=q/lualatex %%O %(file-line-error) %(extraopts) %S %(mode) %%S/' -e '$bibtex=q/bibtexu %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/upmendex %%O -o %%D %%S/' -norc -gg -pdflua %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run LuaLaTeXmk"))
                      (add-to-list 'TeX-command-list
                                   '("upLaTeXmk"
                                     "latexmk -e '$latex=q/uplatex %%O -kanji=utf8 -no-guess-input-enc %(file-line-error) %(extraopts) %S %(mode) %%S/' -e '$bibtex=q/bibtexu %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/upmendex %%O -o %%D %%S/' -e '$dvipdf=q/dvipdfmx %%O -o %%D %%S/' -norc -gg -pdfdvi %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run upLaTeXmk"))
                      (add-to-list 'TeX-command-list
                                   '("Displayline"
                                     "/Applications/Skim.app/Contents/SharedSupport/displayline %n %s.pdf \"%b\""
                                     TeX-run-discard-or-function t t :help "Forward search with displayline"))
                      (add-to-list 'TeX-command-list
                                   '("Skim"
                                     "open -a Skim %s.pdf"
                                     TeX-run-discard-or-function t t :help "Run Skim"))
                      (add-to-list 'TeX-command-list
                                   '("Preview"
                                     "open -a Preview %s.pdf"
                                     TeX-run-discard-or-function t t :help "Run Preview"))
                      (add-to-list 'TeX-command-list
                                   '("TeXShop"
                                     "open -a TeXShop %s.pdf"
                                     TeX-run-discard-or-function t t :help "Run TeXShop"))
                      (add-to-list 'TeX-command-list
                                   '("TeXworks"
                                     "synctex view -i \"%n:0:%b\" -o %s.pdf -x \"/Applications/TeXworks.app/Contents/MacOS/TeXworks --position=%%{page+1} %%{output}\""
                                     TeX-run-discard-or-function t t :help "Forward search with TeXworks"))
                      (add-to-list 'TeX-command-list
                                   '("TeXstudio"
                                     "synctex view -i \"%n:0:%b\" -o %s.pdf -x \"/Applications/texstudio.app/Contents/MacOS/texstudio --pdf-viewer-only --page %%{page+1} %%{output}\""
                                     TeX-run-discard-or-function t t :help "Forward search with TeXstudio"))
                      (add-to-list 'TeX-command-list
                                   '("Firefox"
                                     "open -a Firefox %s.pdf"
                                     TeX-run-discard-or-function t t :help "Run Mozilla Firefox"))
                      (add-to-list 'TeX-command-list
                                   '("Chrome"
                                     "open -a \"Google Chrome\" %s.pdf"
                                     TeX-run-discard-or-function t t :help "Run Google Chrome"))
                      (add-to-list 'TeX-command-list
                                   '("Acrobat"
                                     "open -a \"Adobe Acrobat\" %s.pdf"
                                     TeX-run-discard-or-function t t :help "Run Adobe Acrobat Reader")))))

;;
;; RefTeX with AUCTeX
;;
(setq reftex-mode t)
(add-hook 'LaTeX-mode-hook 'turn-on-reftex)
(setq reftex-plug-into-AUCTeX t)
```

***

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#568;text-align:center">メニュー [Command]</th><th style="color:#FFF;background-color:#568;text-align:center">入力</th><th style="color:#FFF;background-color:#568;text-align:center">機能</th></tr>
> <tr><td>LuaLaTeXmk</td><td>C-c C-c lualatexmk RET</td><td>タイプセット (LuaLaTeXmk)</td></tr>
> <tr><td>upLaTeXmk</td><td>C-c C-c uplatexmk RET</td><td>タイプセット (upLaTeXmk)</td></tr>
> <tr><td>Displayline</td><td>C-c C-c displayline RET</td><td>displayline で forward search</td></tr>
> <tr><td>Skim</td><td>C-c C-c skim RET</td><td>Skim でプレビュー</td></tr>
> <tr><td>Preview</td><td>C-c C-c preview RET</td><td>Preview でプレビュー</td></tr>
> <tr><td>TeXShop</td><td>C-c C-c texshop RET</td><td>TeXShop でプレビュー</td></tr>
> <tr><td>TeXworks</td><td>C-c C-c texworks RET</td><td>TeXworks で forward search</td></tr>
> <tr><td>TeXstudio</td><td>C-c C-c texstudio RET</td><td>TeXstudio で forward search</td></tr>
> <tr><td>Firefox</td><td>C-c C-c firefox RET</td><td>Firefox でプレビュー</td></tr>
> <tr><td>Chrome</td><td>C-c C-c chrome RET</td><td>Chrome でプレビュー</td></tr>
> <tr><td>Acrobat</td><td>C-c C-c acrobat RET</td><td>Adobe Acrobat Reader でプレビュー</td></tr>
> </tbody>
> </table>
>

***

### Linux での設定例 {#effc0642}

Emacs を起動して

```
C-x C-f ~/
```

で，ホームディレクトリ (&#x7e;/) の場所を確認します．

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
(setq japanese-LaTeX-default-style "jlreq")
(setq TeX-engine 'luatex)
(setq TeX-view-program-selection '((output-pdf "Evince")))
(setq TeX-source-correlate-method 'synctex)
(setq TeX-source-correlate-start-server t)
(setq TeX-source-correlate-mode t)
(setq LaTeX-math-mode t)
(add-hook 'LaTeX-mode-hook 'japanese-LaTeX-mode)
(add-hook 'LaTeX-mode-hook
          (function (lambda ()
                      (add-to-list 'TeX-command-list
                                   '("LuaLaTeXmk"
                                     "latexmk -e '$lualatex=q/lualatex %%O %(file-line-error) %(extraopts) %S %(mode) %%S/' -e '$bibtex=q/bibtexu %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/upmendex %%O -o %%D %%S/' -norc -gg -pdflua %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run LuaLaTeXmk"))
                      (add-to-list 'TeX-command-list
                                   '("upLaTeXmk"
                                     "latexmk -e '$latex=q/uplatex %%O -kanji=utf8 -no-guess-input-enc %(file-line-error) %(extraopts) %S %(mode) %%S/' -e '$bibtex=q/bibtexu %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/upmendex %%O -o %%D %%S/' -e '$dvipdf=q/dvipdfmx %%O -o %%D %%S/' -norc -gg -pdfdvi %t"
                                     TeX-run-TeX nil (latex-mode) :help "Run upLaTeXmk"))
                      (add-to-list 'TeX-command-list
                                   '("Xdg-open"
                                     "xdg-open %s.pdf"
                                     TeX-run-discard-or-function t t :help "Run xdg-open"))
                      (add-to-list 'TeX-command-list
                                   '("Evince"
                                     ;"synctex view -i \"%n:0:%b\" -o %s.pdf -x \"evince -i %%{page+1} %%{output}\""
                                     "TeX-evince-sync-view"
                                     TeX-run-discard-or-function t t :help "Forward search with Evince"))
                      (add-to-list 'TeX-command-list
                                   '("Fwdevince"
                                     "fwdevince %s.pdf %n \"%b\""
                                     TeX-run-discard-or-function t t :help "Forward search with fwdevince"))
                      (add-to-list 'TeX-command-list
                                   '("Atril"
                                     ;"synctex view -i \"%n:0:%b\" -o %s.pdf -x \"atril -i %%{page+1} %%{output}\""
                                     "TeX-atril-sync-view"
                                     TeX-run-discard-or-function t t :help "Forward search with Atril"))
                      (add-to-list 'TeX-command-list
                                   '("Okular"
                                     "okular --unique \"file:\"%s.pdf\"#src:%n %a\""
                                     TeX-run-discard-or-function t t :help "Forward search with Okular"))
                      (add-to-list 'TeX-command-list
                                   '("Zathura"
                                     "zathura -x \"emacsclient --no-wait +%%{line} %%{input}\" --synctex-forward \"%n:0:%b\" %s.pdf"
                                     TeX-run-discard-or-function t t :help "Forward and inverse search with zathura"))
                      (add-to-list 'TeX-command-list
                                   '("Qpdfview"
                                     "qpdfview --unique \"\"%s.pdf\"#src:%b:%n:0\""
                                     TeX-run-discard-or-function t t :help "Forward search with qpdfview"))
                      (add-to-list 'TeX-command-list
                                   '("TeXworks"
                                     "synctex view -i \"%n:0:%b\" -o %s.pdf -x \"texworks --position=%%{page+1} %%{output}\""
                                     TeX-run-discard-or-function t t :help "Forward search with TeXworks"))
                      (add-to-list 'TeX-command-list
                                   '("TeXstudio"
                                     "synctex view -i \"%n:0:%b\" -o %s.pdf -x \"texstudio --pdf-viewer-only --page %%{page+1} %%{output}\""
                                     TeX-run-discard-or-function t t :help "Forward search with TeXstudio"))
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
                                     TeX-run-discard-or-function t t :help "Run Chromium"))
                      (add-to-list 'TeX-command-list
                                   '("Acrobat"
                                     "wine64 cmd /c start Acrobat.exe %s.pdf"
                                     TeX-run-discard-or-function t t :help "Run Adobe Acrobat Reader")))))

;;
;; RefTeX with AUCTeX
;;
(setq reftex-mode t)
(add-hook 'LaTeX-mode-hook 'turn-on-reftex)
(setq reftex-plug-into-AUCTeX t)
```

***

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#568;text-align:center">メニュー [Command]</th><th style="color:#FFF;background-color:#568;text-align:center">入力</th><th style="color:#FFF;background-color:#568;text-align:center">機能</th></tr>
> <tr><td>LuaLaTeXmk</td><td>C-c C-c lualatexmk RET</td><td>タイプセット (LuaLaTeXmk)</td></tr>
> <tr><td>upLaTeXmk</td><td>C-c C-c uplatexmk RET</td><td>タイプセット (upLaTeXmk)</td></tr>
> <tr><td>Xdg-open</td><td>C-c C-c xdg-open RET</td><td>xdg-open でプレビュー</td></tr>
> <tr><td>Evince</td><td>C-c C-c evince RET</td><td>Evince で forward search</td></tr>
> <tr><td>Fwdevince</td><td>C-c C-c fwdevince RET</td><td>fwdevince で forward search</td></tr>
> <tr><td>Atril</td><td>C-c C-c atril RET</td><td>Atril で forward search</td></tr>
> <tr><td>Okular</td><td>C-c C-c okular RET</td><td>Okular で forward search</td></tr>
> <tr><td>Zathura</td><td>C-c C-c zathura RET</td><td>zathura で forward and inverse search</td></tr>
> <tr><td>Qpdfview</td><td>C-c C-c qpdfview RET</td><td>qpdfview で forward search</td></tr>
> <tr><td>TeXworks</td><td>C-c C-c texworks RET</td><td>TeXworks で forward search</td></tr>
> <tr><td>TeXstudio</td><td>C-c C-c texstudio RET</td><td>TeXstudio で forward search</td></tr>
> <tr><td>MuPDF</td><td>C-c C-c mupdf RET</td><td>MuPDF でプレビュー</td></tr>
> <tr><td>Firefox</td><td>C-c C-c firefox RET</td><td>Firefox でプレビュー</td></tr>
> <tr><td>Chromium</td><td>C-c C-c chromium RET</td><td>Chromium でプレビュー</td></tr>
> <tr><td>Acrobat</td><td>C-c C-c acrobat RET</td><td>Adobe Acrobat Reader でプレビュー</td></tr>
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
(add-to-list 'load-path "~/.emacs.d/elpa/auctex-14.1.0")
(load "~/.emacs.d/elpa/auctex-14.1.0/auctex-autoloads.el" nil t t)
```

#### AUCTeX の公式サイトのパッケージからインストールした場合 {#db9dca5d}

AUCTeX を自動ロードする場合は ~/.emacs.d/init.el に次のように記述します．

```
(load "auctex.el" nil t t)
(load "preview-latex.el" nil t t)
```

### TeX エンジンと dvipdfmx の設定 {#p6024a21}

upTeX をデフォルトにして dvipdfmx を使用する場合は次のように記述します．

```
(setq japanese-TeX-engine-default 'uptex)
(setq TeX-engine 'uptex)
(setq TeX-PDF-from-DVI "Dvipdfmx")
(add-hook 'LaTeX-mode-hook 'japanese-LaTeX-mode)
```

### 日本語ドキュメントクラスの設定 {#l246b90f}

[jlreq](/jlreq/) を標準に設定する場合は次のように記述します．

```
(setq japanese-LaTeX-default-style "jlreq")
```

[BXjscls](/BXjscls/) の bxjsarticle を標準に設定する場合は次のように記述します．

```
(setq japanese-LaTeX-default-style "bxjsarticle")
```

### PDF ビューアーの変更 {#pfbe6148}

PDF Viewer を変更する場合は

```
(setq TeX-view-program-list '(("PDFviewer" "/path/viewer %o")))
```

```
(setq TeX-view-program-selection '((output-pdf "PDFviewer")))
```

になります。

### 禁則処理 {#ab10fa7c}

禁則処理によって行長が何文字延びてもいいかは，Emacs の kinsoku.el の kinsoku-limit で定義されています．

デフォルトでは 4 ですが，少し長くしておかないと，単語の途中で切れてしまうことがあるかもしれません．

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
> <tr><td>Dvipdfmx</td><td>C-c C-c dvipdfmx RET</td><td>dvipdfmx の実行</td></tr>
> <tr><td>View</td><td>C-c C-c view RET</td><td>プレビュー または forward search</td></tr>
> <tr><td>BibTeX</td><td>C-c C-c bibtex RET</td><td>bibtex の実行</td></tr>
> <tr><td>Biber</td><td>C-c C-c biber RET</td><td>biber の実行</td></tr>
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
> <tr><td>Compile and view</td><td>C-c C-a</td><td>タイプセットとプレビュー または forward search</td></tr>
> </tbody>
> </table>
>

### TeX エンジンの選択 {#cd10b741}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#568;text-align:center">メニュー [Command]</th><th style="color:#FFF;background-color:#568;text-align:center">入力</th><th style="color:#FFF;background-color:#568;text-align:center">TeX エンジンの選択</th></tr>
> <tr><td>TeXing Options -&gt; Use LuaTeX engine</td><td>M-x TeX-engine RET luatex RET</td><td>LuaTeX を使用</td></tr>
> <tr><td>TeXing Options -&gt; Use upTeX engine</td><td>M-x TeX-engine RET uptex RET</td><td>upTeX を使用</td></tr>
> </tbody>
> </table>
>

### TeX-PDF-mode {#bf4992a9}

TeX-PDF-mode を有効にすると Default (pdfTeX) エンジン, LuaTeX エンジン, XeTeX エンジン で DVI ファイルのかわりに PDF ファイルを出力するようになります．

AUCTeX は TeX-PDF-mode がデフォルトで有効になっています．

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

拡張子が tex のファイルを開くと自動的に立ち上がります。

下の「複数ファイルの文書」にも別の方法を説明しました。

まず C-c C-e すると，\documentclass{...}
およびトップレベルの環境 \begin{document} ... \end{document}
が入ります。

次に C-c C-s すると，\section の類のコマンドが入ります。

コマンド名は補完できます。

次に C-c C-e すると，\begin{...} ... \end{...}
のような環境が入ります。
環境名は補完できます。

次に C-c C-c するとコンパイルできます。

次に C-c C-c すると依存関係を調べて出力ファイルが新しければプレビューしたり dvipdfmx を実行したりします。

dvipdfmx が実行された場合は次に C-c C-c するとプレビューします。

再度コンパイルしたいのなら
C-c C-c の後に l (小文字の L) をタイプした後で TAB (Tab キー) あるいは
C-c C-c の後に l (小文字の L) をタイプした後で SPACE (Space キー) を打てば
LaTeX の文字が補完されて RET (Enter キー) を押すと LaTeX の処理が行われます。

C-c C-a するとタイプセットからプレビューまでを一気に行います。

### いろいろな使い方 {#v806ddfa}

ダブルクォート " を打てば，状況に応じて \`\` または '' に変換してくれます。

TAB または SPACE で補完ができます。

これらが効かないときは ESC TAB で補完します。

候補一覧が出たら，さらに文字を補って補完するか，
あるいはマウスの中央のボタンで候補をクリックします。

フォント関係のコマンドです。

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

その他のコマンドです。

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

これ以外にたくさんの機能があります。
ぜひ info auctex でドキュメントをお読みください。

### カスタマイズ {#l23cdb90}

サイトごとのカスタマイズは /usr/local/share/emacs/site-lisp/tex-site.el で行います。

### 複数ファイルの文書 {#fd84843a}

たとえば hogehoge.tex から input または include されているファイルでは，次のように書いておきます。

```
%%% Local Variables:
%%% mode: japanese-LaTeX
%%% TeX-engine: uptex
%%% TeX-master: "hogehoge"
%%% End:
```

すると，このバッファで C-c C-c すると，hogehoge.tex をコンパイルしたり hogehoge.dvi を表示したりします。
これはこのファイルを japanese-LaTeX モードで開くという便利な副作用もあります。

もし自分自身がマスターなら，次のように書いておきます。

```
%%% Local Variables:
%%% mode: japanese-LaTeX
%%% TeX-engine: uptex
%%% TeX-master: t
%%% End:
```

こういったものを自動で入れたい場合は，Emacs の設定ファイルに次のように書いておきます（私は書いていません）。

```
(setq TeX-auto-save t)
(setq TeX-parse-self t)
(setq-default TeX-master nil)
```

こうしておくと，ファイルを開くときに

```
Master file: (default this file)
```

と聞いてきますので，自分自身がマスターファイルなら単に Enter を押します。

キャンセルは C-g です。

## SumatraPDF との連携 (forward and inverse search) {#h60fef7c}

AUCTeX は SumatraPDF の forward search に対応しています．

環境変数 Path と変数 exec-path に SumatraPDF のコマンド検索パスを追加します．

```

```

TeX-view-program-selection の output-pdf に TeX-view-program-list-builtin で設定されている SumatraPDF を指定します．

```
(setenv "Path" (concat "C:\\Program Files\\SumatraPDF;" (getenv "Path")))
(setq exec-path (append exec-path '("C:\\Program Files\\SumatraPDF")))
(setq TeX-view-program-selection '((output-pdf "SumatraPDF")))
```

C-c C-c view で View command: に SumatraPDF のコマンドが表示され forward search が実行できます．

inverse search については [Emacs#SumatraPDF との連携#inverse search](/Emacs/#a06810d6) を参照してください．

TeX-command-list に SumatraPDF を追加して使用することもできます．

forward search は [AUCTeX#インストール#Windows#設定](/AUCTeX/#g637a7d7) を参照してください．

C-c C-c sumatrapdf または C-c C-c fwdsumatrapdf で forward search ができます．

## Skim との連携 (forward and inverse search) {#v5bdbf9d}

AUCTeX は Skim の forward search に対応しています．

環境変数 Path と変数 exec-path に displayline のコマンド検索パスを追加します．

TeX-view-program-selection の output-pdf に TeX-view-program-list-builtin で設定されている displayline を指定します．

```
(setenv "PATH" "/usr/local/bin:/Library/TeX/texbin/:/Applications/Skim.app/Contents/SharedSupport:$PATH" t)
(setq exec-path (append '("/usr/local/bin" "/Library/TeX/texbin" "/Applications/Skim.app/Contents/SharedSupport") exec-path))
(setq TeX-view-program-selection '((output-pdf "displayline")))
```

C-c C-c view で View command: に displayline のコマンドが表示され forward search が実行できます．

inverse search は [Emacs](/Emacs/#e9c08b3d) を参照してください．

TeX-command-list に displayline を追加して使用することもできます．

forward search は [AUCTeX#インストール#macOS#設定](/AUCTeX/#n55816de) を参照してください．

C-c C-c displayline で forward search ができます．

[AUCTeX の設定と便利な機能 | Amrta](http://skalldan.wordpress.com/2011/07/20/auctex-%E3%81%AE%E8%A8%AD%E5%AE%9A%E3%81%A8%E4%BE%BF%E5%88%A9%E3%81%AA%E6%A9%9F%E8%83%BD/) も参考になります．

## Evince との連携 (forward and inverse search) {#l4ab70a6}

AUCTeX は Evince の forward and inverse search に対応しています．

TeX-view-program-selection の output-pdf に TeX-view-program-list-builtin で設定されている Evince を指定します．

```
(setq TeX-view-program-selection '((output-pdf "Evince")))
```

C-c C-c view で View command: に TeX-evince-sync-view が表示され forward search が実行できます．

TeX-source-correlate-mode が有効になっていれば Ctrl + 左クリックで inverse search が実行できます．

TeX-command-list に fwdevince を追加して使用することもできます．

forward search は [AUCTeX#インストール#Linux#設定](/AUCTeX/#p2d711b9) を参照してください．

C-c C-c fwdevince で forward search ができます．

以下のページも参考になります．

- [Make AUCTeX do forward and inverse search with SyncTeX and Evince](https://gist.github.com/2297447)
- [Debian wheezy の TeX 統合環境で SyncTeX を試してみる](http://skalldan.wordpress.com/2011/10/07/tex-%E7%B5%B1%E5%90%88%E7%92%B0%E5%A2%83%E3%81%A7-synctex-%E3%82%92%E8%A9%A6%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B/)
- [Evince - TeX Wiki](/Evince/)
- [EmacsWiki: AUCTeX](http://www.emacswiki.org/emacs/AUCTeX) の Synctex and Evince
- [latex - From .ps/.dvi/.pdf, go to the corresponding location of .tex in Emacs - Stack Overflow](http://stackoverflow.com/questions/5737801/from-ps-dvi-pdf-go-to-the-corresponding-location-of-tex-in-emacs)

## Atril との連携 (forward and inverse search) {#nfc32f0c}

AUCTeX は Atril の forward and inverse search に対応しています．

TeX-view-program-selection の output-pdf に TeX-view-program-list-builtin で設定されている Atril を指定します．

```
(setq TeX-view-program-selection '((output-pdf "Atril")))
```

C-c C-c view で View command: に TeX-atril-sync-view が表示され forward search が実行できます．

TeX-source-correlate-mode が有効になっていれば Ctrl + 左クリックで inverse search が実行できます．

## Okular との連携 (forward and inverse search) {#d95e95ee}

AUCTeX は Okular の forward search に対応しています．

TeX-view-program-selection の output-pdf に TeX-view-program-list-builtin で設定されている Okular を指定します．

```
(setq TeX-view-program-selection '((output-pdf "Okular")))
```

C-c C-c view で View command: に Okular のコマンドが表示され forward search が実行できます．

inverse search は [Emacs](/Emacs/#z0944532) を参照してください．

TeX-command-list に Okular を追加して使用することもできます．

forward search は [AUCTeX#インストール#Linux#設定](/AUCTeX/#p2d711b9) を参照してください．

C-c C-c okular で forward search ができます．

## zathura との連携 (forward and inverse search) {#nf2a372b}

AUCTeX は zathura の forward and inverse search に対応しています．

TeX-view-program-selection の output-pdf に TeX-view-program-list-builtin で設定されている Zathura を指定します．

```
(setq TeX-view-program-selection '((output-pdf "Zathura")))
```

C-c C-c view で View command: に zathura のコマンドが表示され forward and inverse search が実行できます．

Ctrl + 左クリックで inverse search が実行できます．

TeX-command-list に zathura を追加して使用することもできます．

forward and inverse search は [AUCTeX#インストール#Linux#設定](/AUCTeX/#p2d711b9) を参照してください．

C-c C-c zathura で forward and inverse search ができます．

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
- [Windows 10 で TeXLive + Emacs + AUCTeX + SumatraPDF の快適 TeX 環境を構築する](https://mano.xyz/post/2016-09-05-win10-texlive-emacs-auctex-sumatra/)
- [https://github.com/alexeyr/company-auctex](https://github.com/alexeyr/company-auctex)
- [http://www.reddit.com/r/emacs/comments/2jng1m/how_to_set_up_forwardinverse_searches_with_auctex/](http://www.reddit.com/r/emacs/comments/2jng1m/how_to_set_up_forwardinverse_searches_with_auctex/)
- [https://github.com/monsanto/auto-complete-auctex](https://github.com/monsanto/auto-complete-auctex)
    - [http://melpa.milkbox.net/#/auto-complete-auctex](http://melpa.milkbox.net/#/auto-complete-auctex)
- [https://github.com/tom-tan/auctex-latexmk](https://github.com/tom-tan/auctex-latexmk)
    - [AUCTeX で PDF をコマンド一つで生成する．](http://qiita.com/items/cbc813028d7f5951b165)
    - [https://github.com/milkypostman/melpa/blob/master/recipes/auctex-latexmk](https://github.com/milkypostman/melpa/blob/master/recipes/auctex-latexmk)
    - [http://melpa.milkbox.net/#/auctex-latexmk](http://melpa.milkbox.net/#/auctex-latexmk)
- [Emacs の設定#AUCTeX](https://github.com/uwabami/emacs#auctex)
- [emacsにauctex （texlive 2012）](http://miyazakikenji.wordpress.com/2013/06/02/emacs%E3%81%ABauctex-%EF%BC%88texlive-2012%EF%BC%89/)
- [auctex-lua.el](https://github.com/vermiculus/auctex-lua) Lua editing utilities for AUCTeX
- [sumatra-forward.el](http://william.famille-blum.org/blog/static.php?page=static081010-000413) (X)Emacs frontend to forward search with SumatraPDF
- [AUCTeX | Amrta](http://skalldan.wordpress.com/tag/auctex/)
- [AUCTeX | 検索結果:  | miyazakikenji](http://miyazakikenji.wordpress.com/?s=AUCTeX)
    <!-- -[[Emacs+AUCTeXのjapanese-latex-modeでplatexコマンドを実行するときにバッファの文字コードに応じて適切なオプションを付与する:https://gifnksm.hatenablog.jp/entries/2009/04/20]] -->

- [https://tam5917.hatenablog.com/archive/category/AUCTeX](https://tam5917.hatenablog.com/archive/category/AUCTeX)
- [https://dayinthelife-web.blogspot.com/search/label/AUCTeX](https://dayinthelife-web.blogspot.com/search/label/AUCTeX)
- [auctex-cluttex.el](https://github.com/tsuu32/auctex-cluttex)

<!-- AUCTeX ここまで -->

[^1]: upLaTeX を利用したとき、何度 C-c C-c をタイプしても typeset が終わったと判定されず、Viewer の起動に移行しなかった問題は AUCTeX 11.90 で修正されました。
[^2]: LuaTeX-ja を利用する場合は、日本語用に特別の設定は不要です。単純に engine として LuaTeX を選び、通常の LuaTeX 文書として編集するだけでよく、この節の話は当てはまりません。
[^3]: 文書を親ファイルと子ファイルに分割する場合は、さらに TeX-auto-save も有効にするとよいかもしれません。文書の保存時にサブディレクトリ auto 内に情報が保存されるので、次回編集を再開するとき、子ファイルだけを開いても TeX-engine が正しい値にセットされます。
[^4]: \documentclass\[uplatex\]{jsarticle} 等のように、jsclasses 系のクラスファイルに uplatex オプションを指定した場合 upTeX engine が選択されない問題は、AUCTeX 11.91 で修正されました。
[^5]: directory local variable も、AUCTeX 14.0.7 からは japanese-LaTeX-mode, japanese-plain-TeX-mode で利用できるようになりました。
