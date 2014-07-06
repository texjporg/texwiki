---
title: "YaTeX"
url: "/YaTeX/"
date: 2014-04-28T19:44:48Z
pukiwiki: "YaTeX"
---

# YaTeX

[Emacs](/Emacs/) > YaTeX

## [YaTeX](https://www.yatex.org/) → エラー行にジャンプしないなどの問題が発生する場合は [Org mode](</Emacs/Org mode/>) または [TeX mode](</Emacs/TeX mode/>) または [AUCTeX](/AUCTeX/) を使用する {#o2c95a66}

<img src="https://www.yatex.org/yalogo.gif" alt="YaTeX" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

<div style="clear:both"></div>

## YaTeX とは {#q88fd71b}

YaTeX（野鳥）は Emacs の TeX モードです．

- [YaTeX (Yet Another TeX mode for Emacs)](https://www.yatex.org/) (公式ページ)
    - [『野鳥』クイックリファレンス](https://www.yatex.org/yatexref.txt)
    - [Yet Another tex-mode for Emacs - Table of Contents](https://www.yatex.org/info/yatexj_toc.html)

### リリース情報 {#w889e1b2}

[yatex: tags](https://www.yatex.org/hgrepos/hgweb.cgi/yatex/tags) を参照．<br>

Emacs 24.3 を使用している場合は YaTeX 1.77 以降を使用してください．<br>

### [ChangeLog](https://www.yatex.org/yatex-new.txt) {#n0cf386c}

- [YaTeX Mercurial Repositories](https://www.yatex.org/hgrepos/hgweb.cgi/yatex/)
    - [コミットログ](https://www.yatex.org/hgrepos/hgweb.cgi/yatex/shortlog/)
    - [変更点](https://www.yatex.org/hgrepos/hgweb.cgi/yatex/file/tip/yatex.new)
    - [What's new in Japanese](https://www.yatex.org/yatex-new.txt)
- [https://github.com/emacsmirror/yatex](https://github.com/emacsmirror/yatex)
    - [コミットログ](https://github.com/emacsmirror/yatex/commits/)

### スクリーンショット {#c84d00bd}

<!-- #ref(http://oku.edu.mie-u.ac.jp/tex/file.php/2/moddata/forum/2/1712/LaTeXMathPreviewScreenshot.png,nolink,latex-math-preview.el) -->

<img src="http://www.emacswiki.org/pics/static/LaTeXMathPreviewScreenshot.png" alt="latex-math-preview.el">

## 注意点 {#x8b18a1c}

### " を入力しようとすると \`\` が入力される → C-q " {#ibf10abb}

- [Emacs (Meadow) + YaTeX でダブルクォーテーションを入力](http://tetu1984.hateblo.jp/entry/20090123/1232651566)

YaTeX, TeX mode, AUCTeX では " を入力しようとすると \`\` が入力されます．<br>
\`\` ではなく " を入力したい場合は C-q " (Ctrl-Q を入力した後で " を入力) とします．<br>

## 不具合 {#m12f4e1b}

### YaTeX 1.77, 1.76 で Windows の Emacs で C-c ' でエラー行にジャンプしない → [AUCTeX](/AUCTeX/) を使用する {#w3a7f06f}

YaTeX 1.77, 1.76 で Windows の Emacs で C-c ' でエラー行にジャンプしません．<br>
YaTeX 1.75, 1.74 では C-c ' でエラー行にジャンプします．<br>
Linux ではこの現象は起きませんでした．<br>
エラー行にジャンプしたい場合は [AUCTeX](/AUCTeX/) を使用してください．<br>

## ダウンロード {#g0fb682c}

- [YaTeX リリース版](https://www.yatex.org/)
- [YaTeX テスト版](http://www.gentei.org/~yuuji/bin/yatexcurrent.cgi)

## インストール {#b2ec65b9}

### Windows {#n699538a}

[NTEmacs](http://cha.la.coocan.jp/doc/NTEmacs.html) または [emacs for gnupack](http://sourceforge.jp/projects/gnupack/) をインストールします．<br>
[YaTeX リリース版](https://www.yatex.org/) または [YaTeX テスト版](http://www.gentei.org/~yuuji/bin/yatexcurrent.cgi) をダウンロードして展開します．<br>
展開したフォルダ名を yatex に変更します．<br>

Emacs を起動して

```
C-x C-f ~/
```

で，ホームディレクトリ (&#x7e;/) の場所を確認します．<br>

yatex フォルダをコピーして &#x7e;/.emacs.d/site-lisp/ にペーストします．(&#x7e;/.emacs.d/site-lisp/ が無ければ新規に作成します．)

***

```
~
└─.emacs.d
    └─site-lisp
        └─yatex
```

***

#### 設定 {#edc51324}

&#x7e;/.emacs.d/init.el に設定を記述します．<br>
[&#x7e;/.emacs.d/init.el 見せてください．](/YaTeX/#uc0145ec) を参照して設定します．<br>
W32TeX の場合は latexmk の実行には [Strawberry Perl](http://strawberryperl.com/) が必要です．<br>
.xbb がないと怒られる場合は [TeX入門/図表#図のファイル形式に応じた記述法・設定法](</TeX入門/図表/#o967961d>) を参照して texmf.cnf の shell_escape_commands に extractbb を追加してください．<br>
追加できない場合は以下のように -shell-escape を追加してもいいです．→ [https://twitter.com/UEDA_Hiroshi/status/406738419058876416](https://twitter.com/UEDA_Hiroshi/status/406738419058876416)

```
(setq tex-command "ptex2pdf -u -l -ot \"-shell-escape -kanji=utf8 -no-guess-input-enc -synctex=1\"")
```

SumatraPDF の forward search は C-c s または M-x sumatrapdf-forward-search をタイプします．<br>
SumatraPDF を前面に表示したくない場合は [SumatraPDF/fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) の fwdsumatrapdf.exe を使用します．<br>
fwdsumatrapdf の forward search は C-c w または M-x fwdsumatrapdf-forward-search をタイプします．<br>
SumatraPDF の inverse search については [Emacs#SumatraPDF との連携#inverse search](/Emacs/#a06810d6) を参照してください．<br>
YaTeX-inhibit-prefix-letter は t に設定しました．<br>
YaTeX-kanji-code を nil 以外にすると<strong>指定した文字コード以外の TeX ファイルも指定した文字コードで保存されてしまう</strong>ので nil を指定することをおすすめします．<br>

- [8.4.3 文字エンコーディングの設定](http://hwb.ecc.u-tokyo.ac.jp/current/literacy/editor/emacs/encoding/)
- [http://www.mzks.org/wiki/index.php?Emacs](http://www.mzks.org/wiki/index.php?Emacs)

### OS X {#p7238e02}

- [emacsでyatexを使う簡単な方法(Mac)](http://ganmacs.hatenablog.com/entry/2013/09/07/225350)
- [TeXLive2013 +Emacs + YaTex の設定をした](http://d.hatena.ne.jp/tnil/20130823/1377230350)
- [EmacsとSkim.appでTeX・PDFシンクロ](http://d.hatena.ne.jp/setoryohei/20110102/1294003836)
- [emacs_and_tex](https://github.com/ryseto/emacs_and_tex)
- [Retina を活かす Emacs へ移行2](http://milanista224.blogspot.jp/2013/07/retina-emacs243.html)

を参照．

[MacEmacs JP](http://sourceforge.jp/projects/macemacsjp/releases/?package_id=13490) または [Emacs.app](http://www.muskmelon.jp/?page_id=79) をインストールします．<br>
[YaTeX リリース版](https://www.yatex.org/) または [YaTeX テスト版](http://www.gentei.org/~yuuji/bin/yatexcurrent.cgi) をダウンロードして展開します．<br>
展開したフォルダ名を yatex に変更します．<br>

Emacs を起動して

```
C-x C-f ~/
```

で，ホームディレクトリ (&#x7e;/) の場所を確認します．

yatex フォルダをコピーして &#x7e;/.emacs.d/site-lisp/ にペーストします．(&#x7e;/.emacs.d/site-lisp/ が無ければ新規に作成します．)

***

```
~
└─.emacs.d
    └─site-lisp
        └─yatex
```

***

#### 設定 {#qe563613}

&#x7e;/.emacs.d/init.el に設定を記述します．<br>
[&#x7e;/.emacs.d/init.el 見せてください．](/YaTeX/#uc0145ec) を参照して設定します．<br>

### Linux {#e2cbcccd}

[YaTeX リリース版](https://www.yatex.org/) または [YaTeX テスト版](http://www.gentei.org/~yuuji/bin/yatexcurrent.cgi) をダウンロードして展開します．<br>
展開したフォルダ名を yatex に変更します．<br>

Emacs を起動して

```
C-x C-f ~/
```

で，ホームディレクトリ (&#x7e;/) の場所を確認します．

yatex フォルダをコピーして &#x7e;/.emacs.d/site-lisp/ にペーストします．(&#x7e;/.emacs.d/site-lisp/ が無ければ新規に作成します．)

***

```
~
└─.emacs.d
    └─site-lisp
        └─yatex
```

***

#### 設定 {#nec42ee2}

&#x7e;/.emacs.d/init.el に設定を記述します．<br>
[&#x7e;/.emacs.d/init.el 見せてください．](/YaTeX/#uc0145ec) を参照して設定します．<br>
fwdevince は Evince/fwdevince の fwdevince を使用します．<br>
Evince の inverse search については [Emacs#Evince との連携#inverse search](/Emacs/#vecb4fd9) を参照してください．<br>

## 使い方 {#v90b1615}

さまざまな機能がありますので、まずは少しだけ。

### タイプセット・プレビュー {#r68a2a97}

(setq YaTeX-inhibit-prefix-letter t) を使用してください．<br>
(setq YaTeX-inhibit-prefix-letter nil) は，非推奨 (deprecated) です．<br>
YaTeX-inhibit-prefix-letter は t と nil でキーバインドが異なります．<br>
Linux Mint, Debian GNU/Linux, Vine Linux に収録されている YaTeX の最新版はデフォルトで t となっており，YaTeX の作者も t を推奨しています （YaTeX ML \[yatex:04567\] を参照）．<br>
変更の理由は YaTeX が使用していたキーバインドがユーザー向けに予約されていた C-c letter に設定されていたためと思われます．<br>

***

[Emacs Lispのコーディングの慣習](http://www.bookshelf.jp/texi/elisp-manual/21-2-8/jp/elisp_42.html#IDX3219) より

***

- 読者のメジャーモードでは、 C-c letter をキーとして定義しないこと。 これらのキー列はユーザー向けに予約済みである。 それら<strong>だけ</strong>がユーザー向けに予約されたキー列であり、 それらを禁止しないこと。

> かわりに、C-c のあとにコントロール文字か数字文字か特定の句読点文字が続く キー列を定義する。 これらのキー列は、メジャーモード用に予約してある。

> Emacs のすべてのモードをこの慣習に従うように変換するのは たいへんな作業量であった。 この慣習を捨てさるとその作業をむだにしてしまい、ユーザーにも不便である。

***

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#22D;text-align:center">メニュー [YaTeX]</th><th style="color:#FFF;background-color:#22D;text-align:center">入力 (setq YaTeX-inhibit-prefix-letter t)</th><th style="color:#FFF;background-color:#22D;text-align:center">機能</th></tr>
> <tr><td>Process -&gt; LaTeX</td><td>C-c C-t j または C-c C-t C-j</td><td>タイプセット</td></tr>
> <tr><td>Process -&gt; LaTeX+PDF</td><td>C-c C-t d</td><td>latex + dvipdfmx</td></tr>
> <tr><td>Process -&gt; Kill LaTeX</td><td>C-c C-t k</td><td>タイプセットを中断</td></tr>
> <tr><td>Process -&gt; Preview</td><td>C-c C-t p</td><td>プレビュー</td></tr>
> <tr><td>Process -&gt; BibTeX</td><td>C-c C-t b</td><td>BibTeX</td></tr>
> <tr><td>Process -&gt; makeindex</td><td>C-c C-t i</td><td>MakeIndex</td></tr>
> <tr><td>Process -&gt; lpr</td><td>C-c C-t l</td><td>LPR (印刷)</td></tr>
> <tr><td></td><td>C-c '</td><td>エラー行にジャンプ</td></tr>
> <tr><td></td><td>M-x yatex</td><td>親ファイルの再設定</td></tr>
> </tbody>
> </table>
>

***

<span style="color:Black;background-color:#2E20DE;"><ins>　</ins></span>[<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/08/EmacsIcon.svg/200px-EmacsIcon.svg.png" alt="GNU Emacs - GNU Project - Free Software Foundation (FSF)" width="28" height="28">](http://www.gnu.org/software/emacs/)<span style="color:Black;background-color:#2E20DE;"><ins>　<span style="color:White;"><strong>emacs@YaTeX</strong></span> 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#1E10CE;"></ins>\[ <span style="color:White;"><strong>◛</strong></span> \]<ins></span><span style="color:Black;background-color:#1E10CE;"></ins>\[ <span style="color:White;"><strong>▭</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<span style="color:Black;background-color:#DAE0FE;"><ins>　　ファイル　 編集　 オプション　 バッファ　 ツール　 YaTeX　 Ref　 ヘルプ　　　　　　　　　　　</ins></span><br>

...<br>
&#x2d;U\\---　　<strong>yatex.tex</strong>　　　　　Top L1　　　(やてふ Ref)--------------------------------<br>
J)latex R)egion E)nv B)ibtex mk(I)dx latex+p(D)f K)ill P)review S)earch V)iewErr L)pr<br>

***

### 補完 {#g3780d28}

(setq YaTeX-inhibit-prefix-letter t) を使用してください．<br>
(setq YaTeX-inhibit-prefix-letter nil) は，非推奨 (deprecated) です．<br>

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#22D;text-align:center">メニュー [YaTeX]</th><th style="color:#FFF;background-color:#22D;text-align:center">入力 (setq YaTeX-inhibit-prefix-letter t)</th><th style="color:#FFF;background-color:#22D;text-align:center">補完</th></tr>
> <tr><td>Environment -&gt; リストから選択</td><td>C-c C-b SPC</td><td>begin 型補完</td></tr>
> <tr><td>Environment region -&gt; リストから選択</td><td>C-c B SPC</td><td>指定領域に対して begin 型補完</td></tr>
> <tr><td>Section type -&gt; リストから選択</td><td>C-c C-s</td><td>section 型補完</td></tr>
> <tr><td>Section type region (long name) -&gt; リストから選択</td><td>C-c S</td><td>指定領域に対して section 型補完</td></tr>
> <tr><td></td><td>C-c C-e</td><td>end 補完</td></tr>
> </tbody>
> </table>
>

補完を使わないと

```
\begin{itemize}
\item AUCTeX
\item YaTeX
\end{今度からはちゃんと ^C b を使いましょう}
```

と言われます．

begin 型補完を使うのを忘れた場合は

```
\begin{itemize}
\item AUCTeX
\item YaTeX
```

の時に end 補完を使うと

```
\end{itemize}
```

を補完してくれます．

### タイプセット方式の変更 {#m8567380}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#22D;text-align:center">入力</th><th style="color:#FFF;background-color:#22D;text-align:center">タイプセット方式</th></tr>
> <tr><td>M-x set-variable RET tex-command RET "latexmk" RET</td><td>latexmk</td></tr>
> <tr><td>M-x set-variable RET tex-command RET "pdflatex -synctex=1" RET</td><td>pdflatex</td></tr>
> <tr><td>M-x set-variable RET tex-command RET "lualatex -synctex=1" RET</td><td>lualatex</td></tr>
> <tr><td>M-x set-variable RET tex-command RET "luajitlatex -synctex=1" RET</td><td>luajitlatex</td></tr>
> <tr><td>M-x set-variable RET tex-command RET "xelatex -synctex=1" RET</td><td>xelatex</td></tr>
> </tbody>
> </table>
>

### タイプセット方式の確認 {#k374ed95}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#22D;text-align:center">入力</th></tr>
> <tr><td>M-x describe-variable RET tex-command RET</td></tr>
> </tbody>
> </table>
>

### その他 {#za795743}

[『野鳥』クイックリファレンス](https://www.yatex.org/yatexref.txt) もご覧下さい．<br>
詳細は [Yet Another tex-mode for Emacs - Table of Contents](https://www.yatex.org/info/yatexj_toc.html) をご覧下さい．<br>
[瀬戸 亮平](http://d.hatena.ne.jp/setoryohei/) さんの [YaTeX demo](http://d.hatena.ne.jp/setoryohei/20120106) で YaTeX の機能が紹介されています．<br>

## ソースのサンプル {#q88c5ad1}

ヘッダー部分に用途別に追加してみました．テンプレートとしても使えるかもしれません．

```
%% -*- coding: utf-8-unix -*-
%#!ptex2pdf -u -l -ot "-kanji=utf8 -no-guess-input-enc -synctex=1" hogehoge
% #!tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul && pdfopen --rxi --file hogehoge.pdf && pdfclose --rxi --file hogehoge.pdf & ptex2pdf -u -l hogehoge && pdfopen --rxi --file hogehoge.pdf
%#BIBTEX upbibtex hogehoge
%#MAKEINDEX mendex -U hogehoge
%#LPR if exist "C:\Program Files\Adobe\Reader 11.0\Reader\AcroRd32.exe" ("C:\Program Files\Adobe\Reader 11.0\Reader\AcroRd32.exe" /p hogehoge.pdf) else "C:\Program Files (x86)\Adobe\Reader 11.0\Reader\AcroRd32.exe" /p hogehoge.pdf
% #LPR acroread.bat /p hogehoge.pdf
```

```
\documentclass[uplatex]{jsarticle}
\begin{document}
Welcom to YaTeX World!
\end{document}
```

```
%%% Local Variables: 
%%% TeX-master: "hogehoge"
%%% End: 
```

PDF ファイルでの印刷が多くなってきているので，LPR も PDF ファイルに対応させてみました．<br>
パスの通ったところに，acroread.bat というファイル名で以下のスクリプトを保存します．<br>

```
@echo off
REM USAGE: acroread.bat [options] filename
if exist "C:\Program Files\Adobe\Reader 11.0\Reader\AcroRd32.exe" (
  "C:\Program Files\Adobe\Reader 11.0\Reader\AcroRd32.exe" %1 %2 %3 %4 %5 %6 %7 %8 %9
) else (
  "C:\Program Files (x86)\Adobe\Reader 11.0\Reader\AcroRd32.exe" %1 %2 %3 %4 %5 %6 %7 %8 %9
)
```

## &#x7e;/.emacs.d/init.el 見せてください． {#uc0145ec}

あくまで一例です。ぜひ修正、加筆お願いします。

### ‘load-path’に yatex.el が存在するフォルダー (ディレクトリ) を追加 {#pe637e19}

```
(add-to-list 'load-path "~/.emacs.d/site-lisp/yatex")
```

### \*.texで自動的にYaTeXモード {#d7fc1e0e}

```
(setq auto-mode-alist
      (append '(("\\.tex$" . yatex-mode)) auto-mode-alist))
(autoload 'yatex-mode "yatex" "Yet Another LaTeX mode" t)
```

または

```
(setq auto-mode-alist
      (cons (cons "\\.tex$" 'yatex-mode) auto-mode-alist))
(autoload 'yatex-mode "yatex" "Yet Another LaTeX mode" t)
```

### YaTeX-inhibit-prefix-letter {#j42805c2}

(setq YaTeX-inhibit-prefix-letter t) を使用してください．<br>
(setq YaTeX-inhibit-prefix-letter nil) は，非推奨 (deprecated) です．<br>

```
(setq YaTeX-inhibit-prefix-letter t)
```

### Kanji code {#j78164d5}

YaTeX-kanji-code を nil 以外にすると<strong>指定した文字コード以外の TeX ファイルも指定した文字コードで保存されてしまう</strong>ので nil を指定することをおすすめします．

```
;;;   nil=YaTeX-kanji-code が nil なら coding-system に感知しない
;;;   0=no-converion -> Emacs 内部で使用されている文字コードで保存される (Emacs 23 以降では utf-8-emacs)
;;;   1=Shift JIS (Shift_JIS)
;;;   2=JIS (ISO-2022-JP)
;;;   3=EUC (EUC-JP)
;;;   4=UTF-8
(setq YaTeX-kanji-code nil)
```

### LaTeX でタイプセットしたときに出力されるメッセージの文字コードを指定 (\*YaTeX-typesetting\* バッファの文字コードの指定) {#v14da95b}

```
(setq YaTeX-latex-message-code 'utf-8)
```

### TeX typeset {#h9687728}

```
(setq tex-command "ptex2pdf -u -l -ot \"-kanji=utf8 -no-guess-input-enc -synctex=1\"")
(setq tex-command "pdflatex -synctex=1")
(setq tex-command "lualatex -synctex=1")
(setq tex-command "luajitlatex -synctex=1")
(setq tex-command "xelatex -synctex=1")
```

### upbibtex の指定 {#q198d21d}

```
(setq bibtex-command "upbibtex")
```

### biber の指定 {#o3f4bd25}

```
(setq bibtex-command "biber --bblencoding=utf8 -u -U --output_safechars")
```

### mendex の指定 {#i3950de0}

```
(setq makeindex-command "mendex -U")
```

### preview {#t737f278}

```
(setq dvi2-command "rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance")
(setq dvi2-command "texworks")
(setq dvi2-command "texstudio --pdf-viewer-only")
(setq dvi2-command "powershell -Command \"& {$p = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFileName($args),'\"\"\"');Start-Process firefox -ArgumentList ('-new-window',$p)}\"")
(setq dvi2-command "powershell -Command \"& {$p = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFullPath($args),'\"\"\"');Start-Process chrome -ArgumentList ('--new-window',$p)}\"")
(setq dvi2-command "/usr/bin/open -a Preview")
(setq dvi2-command "/usr/bin/open -a Skim")
(setq dvi2-command "/usr/bin/open -a TeXShop")
(setq dvi2-command "/Applications/TeXworks.app/Contents/MacOS/TeXworks")
(setq dvi2-command "/Applications/texstudio.app/Contents/MacOS/texstudio --pdf-viewer-only")
(setq dvi2-command "/usr/bin/open -a Firefox")
(setq dvi2-command "evince")
(setq dvi2-command "okular --unique")
(setq dvi2-command "zathura -s -x \"emacsclient --no-wait +%{line} %{input}\"")
(setq dvi2-command "qpdfview --unique")
(setq dvi2-command "mupdf")
(setq dvi2-command "firefox -new-window")
(setq dvi2-command "chromium --new-window")
```

### YaTeX-dvi2-command-ext-alist {#x19206ad}

```
(setq YaTeX-dvi2-command-ext-alist
      '(("SumatraPDF\\|TeXworks\\|texstudio\\|evince\\|okular\\|firefox\\|chrome\\|AcroRd32\\|pdfopen" . ".pdf")))
```

```
(setq YaTeX-dvi2-command-ext-alist
      '(("open\\|Preview\\|Skim\\|TeXShop\\|TeXworks\\|texstudio\\|mupdf\\|Firefox\\|Adobe" . ".pdf")))
```

```
(setq YaTeX-dvi2-command-ext-alist
      '(("xdg-open\\|evince\\|okular\\|zathura\\|qpdfview\\|texworks\\|texstudio\\|mupdf\\|firefox\\|chromium\\|acroread\\|pdfopen" . ".pdf")))
```

### use LaTeX2e and AMS-LaTeX {#s49fcef1}

YaTeX 1.77.3 以降は YaTeX-use-AMS-LaTeX が t になりました．<br>
AMS-LaTeX がうまく動作しない場合は YaTeX をロードする前に設定してみてください．(参照 [その1](https://twitter.com/hiroseyuuji/status/173544126686572544), [その2](https://twitter.com/liquid_amber/status/173975511570194432))

```
(setq YaTeX-use-LaTeX2e t)
(setq YaTeX-use-AMS-LaTeX t)
```

### font latex hook {#j998f541}

```
(add-hook 'yatex-mode-hook
          '(lambda ()
             (require 'font-latex)
             (font-latex-setup))) 
```

### RefTeX mode {#iabc8ab6}

```
(add-hook 'yatex-mode-hook 'turn-on-reftex)
```

または

```
(add-hook 'yatex-mode-hook '(lambda () (reftex-mode t)))
```

YaTeX の comment region, uncomment region, insert parens region のキーバインドを優先させる場合は以下のようにします．(参照 [YaTeXとRefTeXの共存](http://ubutun.blogspot.jp/2011/06/yatexreftex.html))

```
(add-hook 'yatex-mode-hook
          '(lambda ()
             (reftex-mode 1)
             (define-key reftex-mode-map (concat YaTeX-prefix ">") 'YaTeX-comment-region)
             (define-key reftex-mode-map (concat YaTeX-prefix "<") 'YaTeX-uncomment-region)
             (define-key reftex-mode-map (concat YaTeX-prefix ")") 'YaTeX-insert-parens-region)))
```

### auto fill mode {#ua5c62a9}

on の場合

```
(add-hook 'yatex-mode-hook '(lambda () (auto-fill-mode t) (setq fill-column 70)))
```

off の場合

```
(add-hook 'yatex-mode-hook '(lambda () (auto-fill-mode -1)))
```

### color {#ee4c8027}

```
;(setq YaTeX-use-font-lock t)
; section color
;(setq YaTeX-hilit-sectioning-face '(light時のforecolor/backcolor dark時の forecolor/backcolor))
;(setq YaTeX-hilit-sectioning-face '(white/snow3 snow1/snow3))
(add-hook 'yatex-mode-hook
'(lambda () (require 'font-latex)
            (font-latex-setup)
            (progn
              (modify-syntax-entry ?% "<" (syntax-table))
              (modify-syntax-entry 10 ">" (syntax-table))
              (make-variable-buffer-local 'outline-level)
              (setq outline-level 'latex-outline-level)
              (make-variable-buffer-local 'outline-regexp)
              (setq outline-regexp
                    (concat "[  \t]*\\\\\\(documentstyle\\|documentclass\\|chapter\\|"
                           "section\\|subsection\\|subsubsection\\|paragraph\\)"
                            "\\*?[ \t]*[[{]")
                    ))))
```

### outline-minor-mode {#nf399cda}

```
(add-hook 'yatex-mode-hook '(lambda () (outline-minor-mode t)))
(setq-default outline-level 'outline-level)
```

```
(defun latex-outline-level ()
  (save-excursion
    (looking-at outline-regexp)
    (let ((title (buffer-substring (match-beginning 1) (match-end 1))))
      (cond ((equal (substring title 0 4) "docu") 20)
            ((equal (substring title 0 4) "para") 15)
            ((equal (substring title 0 4) "chap") 0)
            ((equal (substring title 0 4) "appe") 0)
            (t (length title))))))
```

### misc mode {#w545e459}

```
(add-hook 'yatex-mode-load-hook
          (function
           (lambda ()
             (YaTeX-define-key "w" 'sdic-describe-word)
             (YaTeX-define-key "\C-w" 'YaTeX-switch-mode-menu)))) 
```

### math-sign の追加 {#teb10e47}

```
(setq
 YaTeX-math-sign-alist-private
 '(
   ("q"         "Q"          "(Q)")
   ("z"         "Z"          "ZZ")
   ("t""text""text")
   ("qu"        "quad"         "__")
   ("qq"        "qquad"         "____")
   ("ls"        "varlimsup"     "___\nlim")
   ("li"        "varliminf"     "lim\n---")
   ("il"        "varinjlim"     "lim\n-->")
   ("pl"        "varprojlim"    "lim\n<--")
   ("st"        "text{ s.t. }" "s.t.")
   ("bigop"     "bigoplus"      "_\n(+)~")
   ("bigot"     "bigotimes"     "_\n(x)\n ~")
   ))
```

### Latexmkを使う場合 {#naf0d69e}

```
(setq tex-command "latexmk")
(setq tex-command "latexmk -gg -pdfdvi")
(setq tex-command "latexmk -gg -pdfps")
(setq tex-command "latexmk -pvc -gg -pdfdvi")
(setq tex-command "latexmk -pvc -gg -pdfps")
```

### テンプレート {#pff757f3}

```
; ~/.LaTeX-templateは新規ファイル作成時に自動挿入するファイル名
(setq YaTeX-template-file "~/.LaTeX-template")
```

### \textit{...}など対するフォント変更 {#j27c726d}

なぜか，\textbf{...}以外の\textXX{...}のフォント変更がうまく働いていないようなので少々 ~/.emacs.d/init.el に追加。ついでに\emph{...}にも対応。

<!-- どなたか、開発元に連絡してくださるかたがいらっしゃいませんか。 -->
<!-- よろしくお願いします。 -->

```
;ここはすでにyatex19.elに記述されてる
;(add-to-list 'YaTeX-hilit-patterns-alist
;      '(YaTeX-19-region-section-type "\\\\textbf\\>" bold))
(add-to-list 'YaTeX-hilit-patterns-alist
	     '(YaTeX-19-region-section-type "\\\\textgt\\>" bold))
(add-to-list 'YaTeX-hilit-patterns-alist
	     '(YaTeX-19-region-section-type "\\\\textit\\>" italic))
(add-to-list 'YaTeX-hilit-patterns-alist
	     '(YaTeX-19-region-section-type "\\\\textsl\\>" italic))
(add-to-list 'YaTeX-hilit-patterns-alist
	     '(YaTeX-19-region-section-type "\\\\emph\\>" italic))
(add-to-list 'YaTeX-hilit-patterns-alist
	     '(YaTeX-19-region-section-type "\\\\texttt\\>" tt))

```

### SumatraPDF との連携 (forward search) {#ra95ecfb}

#### SumatraPDF を前面に表示したい場合 {#x4a4f83a}

```
(defun sumatrapdf-forward-search ()
  (interactive)
  (progn
    (process-kill-without-query
     (start-process
      "sumatrapdf"
      nil
      "rundll32"
      "shell32,ShellExec_RunDLL"
      "SumatraPDF"
      "-reuse-instance"
      (expand-file-name
       (concat (file-name-sans-extension (or YaTeX-parent-file
                                             (save-excursion
                                               (YaTeX-visit-main t)
                                               buffer-file-name)))
               ".pdf"))
      "-forward-search"
      (buffer-name)
      (number-to-string (save-restriction
                          (widen)
                          (count-lines (point-min) (point))))))))

(add-hook 'yatex-mode-hook
          '(lambda ()
             (define-key YaTeX-mode-map (kbd "C-c s") 'sumatrapdf-forward-search)))
```

SumatraPDF の forward search は C-c s または M-x sumatrapdf-forward-search をタイプします．

#### SumatraPDF を前面に表示したくない場合 {#d9c64d40}

```
(defun fwdsumatrapdf-forward-search ()
  (interactive)
  (progn
    (process-kill-without-query
     (start-process
      "fwdsumatrapdf"
      nil
      "fwdsumatrapdf"
      (expand-file-name
       (concat (file-name-sans-extension (or YaTeX-parent-file
                                             (save-excursion
                                               (YaTeX-visit-main t)
                                               buffer-file-name)))
               ".pdf"))
      (buffer-name)
      (number-to-string (save-restriction
                          (widen)
                          (count-lines (point-min) (point))))))))

(add-hook 'yatex-mode-hook
          '(lambda ()
             (define-key YaTeX-mode-map (kbd "C-c w") 'fwdsumatrapdf-forward-search)))
```

fwdsumatrapdf は [SumatraPDF/fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) の fwdsumatrapdf.exe を使用します．<br>

fwdsumatrapdf での forward search は C-c w または M-x fwdsumatrapdf-forward-search をタイプします．

### Skim との連携 (forward search) {#f978a43b}

```
(defun skim-forward-search ()
  (interactive)
  (progn
    (process-kill-without-query
     (start-process  
      "displayline"
      nil
      "/Applications/Skim.app/Contents/SharedSupport/displayline"
      (number-to-string (save-restriction
                          (widen)
                          (count-lines (point-min) (point))))
      (expand-file-name
       (concat (file-name-sans-extension (or YaTeX-parent-file
                                             (save-excursion
                                               (YaTeX-visit-main t)
                                               buffer-file-name)))
               ".pdf"))
      buffer-file-name))))

(add-hook 'yatex-mode-hook
          '(lambda ()
             (define-key YaTeX-mode-map (kbd "C-c s") 'skim-forward-search)))
```

displayline での forward search は C-c s または M-x skim-forward-search をタイプします．

- [skim-forward-search.el](https://gist.github.com/ryseto/5710882), [EmacsとSkim.appでTeX・PDFシンクロ](http://d.hatena.ne.jp/setoryohei/20110102/1294003836) も参照してください．

### Evince との連携 (forward and inverse search) {#g214bbe8}

- [https://gitorious.org/latex-math-preview/synctex-for-evince-yatex/source/synctex-for-evince-yatex.el](https://gitorious.org/latex-math-preview/synctex-for-evince-yatex/source/synctex-for-evince-yatex.el)

### Evince との連携 (forward search) {#h118b5e5}

```
(defun evince-forward-search ()
  (interactive)
  (progn
    (process-kill-without-query
     (start-process
      "fwdevince"
      nil
      "fwdevince"
      (expand-file-name
       (concat (file-name-sans-extension (or YaTeX-parent-file
                                             (save-excursion
                                               (YaTeX-visit-main t)
                                               buffer-file-name)))
               ".pdf"))
      (number-to-string (save-restriction
                          (widen)
                          (count-lines (point-min) (point))))
      (buffer-name)))))

(add-hook 'yatex-mode-hook
          '(lambda ()
             (define-key YaTeX-mode-map (kbd "C-c e") 'evince-forward-search)))
```

fwdevince は Evince/fwdevince の fwdevince を使用します．<br>

fwdevince での forward search は C-c e または M-x evince-forward-search をタイプします．

<!-- -[[SyncTeXの設定。 Emacs(YaTeX) + Evince:http://ubutun.blogspot.jp/2012/05/synctex-emacsyatex-evince.html]] も参照してください． -->

### Evince との連携 (inverse search) {#tfced2b6}

Evince の inverse search については [Emacs#Evince との連携#inverse search](/Emacs/#vecb4fd9) を参照してください．<br>

### Okular との連携 (forward search) {#o8772291}

```
(defun okular-forward-search ()
  (interactive)
  (progn
    (process-kill-without-query
     (start-process
      "okular"
      nil
      "okular"
      "--unique"
      (concat (expand-file-name
               (concat (file-name-sans-extension (or YaTeX-parent-file
                                                     (save-excursion
                                                       (YaTeX-visit-main t)
                                                       buffer-file-name)))
                       ".pdf"))
              "#src:"
              (number-to-string (save-restriction
                                  (widen)
                                  (count-lines (point-min) (point))))
              (buffer-file-name))))))

(add-hook 'yatex-mode-hook
          '(lambda ()
             (define-key YaTeX-mode-map (kbd "C-c o") 'okular-forward-search)))
```

okular での forward search は C-c o または M-x okular-forward-search をタイプします．

### zathura との連携 (forward search) {#j4034f6b}

```
(defun zathura-forward-search ()
  (interactive)
  (progn
    (process-kill-without-query
     (start-process
      "zathura"
      nil
      "zathura"
      "--synctex-forward"
      (concat (number-to-string (save-restriction
                                  (widen)
                                  (count-lines (point-min) (point))))
              ":0:"
              (buffer-name))
      (expand-file-name
       (concat (file-name-sans-extension (or YaTeX-parent-file
                                             (save-excursion
                                               (YaTeX-visit-main t)
                                               buffer-file-name)))
               ".pdf"))))))

(add-hook 'yatex-mode-hook
          '(lambda ()
             (define-key YaTeX-mode-map (kbd "C-c z") 'zathura-forward-search)))
```

zathura での forward search は C-c z または M-x zathura-forward-search をタイプします．

### qpdfview との連携 (forward search) {#ic7abdb4}

```
(defun qpdfview-forward-search ()
  (interactive)
  (progn
    (process-kill-without-query
     (start-process
      "qpdfview"
      nil
      "qpdfview"
      "--unique"
      (concat (expand-file-name
               (concat (file-name-sans-extension (or YaTeX-parent-file
                                                     (save-excursion
                                                       (YaTeX-visit-main t)
                                                       buffer-file-name)))
                       ".pdf"))
              "#src:"
              (buffer-name)
              ":"
              (number-to-string (save-restriction
                                  (widen)
                                  (count-lines (point-min) (point))))
              ":0")))))

(add-hook 'yatex-mode-hook
          '(lambda ()
             (define-key YaTeX-mode-map (kbd "C-c q") 'qpdfview-forward-search)))
```

qpdfview での forward search は C-c q または M-x qpdfview-forward-search をタイプします．

## その他（改造など） {#q5a5c09f}

### includegraphicsにclipオプションを追加 {#r1cf7758}

yatexadd.elのYaTeX:includegraphicsの最後を下記のように変更

```
(if (string= "" str) "[clip]"
     (concat "[" str ",clip]")) ;
```

### コンパイルプログラムの使い分け {#ga20e87e}

普段は ptex2pdf (uplatex + dvipdfmx) を使っていても，投稿先のスタイルシートによっては pdflatex を前提としているものがあります．<br>
TeX ソースの先頭行に例えば，

```
%#!pdflatex
```

と書いておくと、普段は typeset の時に ptex2pdf (uplatex + dvipdfmx) で処理されていても，この場合だけ pdflatex で処理してくれます．

記述例をいくつかあげると，Windows では、

```
%#!ptex2pdf -u -l -ot "-kanji=utf8 -no-guess-input-enc -synctex=1" hogehoge
```

としたり，GNU/Linux, UNIXでは，

```
%#!ptex2pdf -u -l -ot "-synctex=1" hogehoge
```

としたりできます．

## 関連リンク {#fcad5d2d}

- [モダンな日本語 TeX 環境を整える](http://qiita.com/ynakayama/items/706ae9e59c1b6fd3e3d2)
- [Ubuntu 14.04でのEmacsの設定](http://ubutun.blogspot.jp/2014/06/ubuntu-1404emacs.html)
- [Linux Mintを導入する（８）](http://note.chiebukuro.yahoo.co.jp/detail/n220718)
- [NTEmacsでYaTeXによるフルパス内に日本語を含む .tex のタイプセット](http://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q12106481462), [（再）NTEmacsでYaTeXによるフルパス内に日本語を含む .tex のタイプセット](http://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q11106826351)
- [文字コード毎の tex-command and bibtex-command 切り替え for yatex](http://meq-yo.sblo.jp/article/64863422.html)
- [YaTeX の設定と利用法](http://www.proton.jp/main/latex/yatex.html)
- [yatex-modeでPDFプレビュー](http://d.hatena.ne.jp/hico_horiuchi/20130329/1364563601)
- [YaTeXモードで句読点と全角英数字を変換して保存するEmacsLisp](http://d.hatena.ne.jp/FromAtom/20130112/1358009997)
- [Meadowへフォーカス](http://d.hatena.ne.jp/eggtoothcroc/20121106/p1)
- [YaTeXメモ](http://d.hatena.ne.jp/su48us/20120731)
- [YaTeX でタイプセットからプレビューまで一括して行う](http://ryo1miya.hatenablog.com/entry/20120614/1339697123)
- [Yatex導入](http://blogs.yahoo.co.jp/echotechsoft/158191.html)
- [Emacs+YaTex-導入編](http://d.hatena.ne.jp/tukasa1919/20110507/1304783879)
- [Emacs+YaTeX－使い方編](http://d.hatena.ne.jp/tukasa1919/20110509/1304937507)
- [YaTeX reftex-modeの動作について](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=308)
- [YaTeX World (野鳥わぁるど)](http://www.nk.rim.or.jp/~naru/yatex/) (成宮 隆之 さん)
- [yatex キー操作](http://www.cosmo.sci.hokudai.ac.jp/~kk/emacs/yatex_key.html)
- [LaTeX on Linux with Emacs, YaTeX, BibTeX, RefTeX](http://www.eis.t.u-tokyo.ac.jp/~hara/tex/tex.html) (原 貴弘 さん)
- [YaTeXとRefTeXの共存](http://ubutun.blogspot.com/2011/06/yatexreftex.html)
- [SyncTeXの設定。 Emacs(YaTeX) + Evince](http://ubutun.blogspot.jp/2012/05/synctex-emacsyatex-evince.html)
- [SweaveでエディタとDVIビューア間の相互移動 - RjpWiki](http://www.okada.jp.org/RWiki/?Sweave%A4%C7%A5%A8%A5%C7%A5%A3%A5%BF%A4%C8DVI%A5%D3%A5%E5%A1%BC%A5%A2%B4%D6%A4%CE%C1%EA%B8%DF%B0%DC%C6%B0)
- [MacWiki - CarbonEmacsAndYatex](http://macwiki.sourceforge.jp/wiki/index.php/CarbonEmacsAndYatex)
- [EmacsとSkim.appでTeX・PDFシンクロ](http://d.hatena.ne.jp/setoryohei/20110102/1294003836)
- [「わたしのやてふ環境」独り反省会](http://d.hatena.ne.jp/munepi/20111023/texconf11lt)
- [yatex-modeになったときにマイナーモードcdlatexを起動する](http://d.hatena.ne.jp/daharu/20111106/1320562641)
- [YaTeX の気になる所](http://d.hatena.ne.jp/setoryohei/20120127/1327680856)
- [File #osqaqi27-12106](http://www.sourcepod.com/osqaqi27-12106)
- [TeX Memo \[Internet Archive\]](http://web.archive.org/web/20100601184838/http://homepages.inf.ed.ac.uk/s0675112/tex_memo.html)
- [野鳥（YaTeX） \[物理のかぎしっぽ\]](http://hooktail.sub.jp/tex/yatex/)
