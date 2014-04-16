---
title: "Sublime Text"
url: "/Sublime Text/"
date: 2012-06-26T20:10:04Z
pukiwiki: "Sublime Text"
---

# Sublime Text

## [Sublime Text](http://www.sublimetext.com/) {#pefc7cc2}

<img src="http://upload.wikimedia.org/wikipedia/en/4/4c/Sublime_Text_Logo.png" alt="Sublime Text" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Summary {#w93773a9}

Sublime Text はカスタマイズ性に優れたモダンなテキストエディタです． (シェアウェア)

- [Sublime Text](http://www.sublimetext.com/)
- [Package Control - the Sublime Text package manager](https://sublime.wbond.net/)

### Sublime Text 3 {#o04f9cc2}

- [Sublime Text 3](http://www.sublimetext.com/3)
- [Sublime Text 3 - Dev Builds](http://www.sublimetext.com/3dev)

### 動作環境 {#ec9465b5}

Windows, OS X, Linux

## 日本語に関するプラグイン {#fa7e32d3}

### 日本語入力のインライン変換対応 {#cde09531}

#### Windows {#nddbaed6}

- [IMESupport for Sublime Text](https://github.com/chikatoike/IMESupport)
- [「IMESupport」の検索結果一覧 - ゆり日記](http://d.hatena.ne.jp/chikatoike/archive?word=IMESupport)
- [WindowsのIMEでインライン変換を正しく表示できるようにしてみた](http://qiita.com/items/5ccbe63d36009680e0e6)
- \[[MAC\]\[WIN\]SUBLIME TEXT のススメと最初にすべき日本語入力環境の改善](http://roguer.info/2012/11/01/6049/)

#### Linux {#bf9812ef}

- [SublimeIBus](https://github.com/chikatoike/SublimeIBus)

### Shift_JIS, EUC-JP 対応 {#bc9dcabf}

- [ConvertToUTF8](https://github.com/seanliang/ConvertToUTF8)

### メニューの日本語化 {#p0f8c581}

- [sublimetext_japanize](https://github.com/kik0220/sublimetext_japanize)

## [LaTeXTools (LaTeX Plugin for Sublime Text)](https://github.com/SublimeText/LaTeXTools) → 問題が発生する場合は LaTeXSQ を使用する <a id="latextools"></a> {#e60d4c0f}

- [SublimeText/LaTeXTools · GitHub](https://github.com/SublimeText/LaTeXTools)
- [latex | Tech, TeX and Theory](http://tekonomist.wordpress.com/tag/latex/)

### ChangeLog {#zcc7e097}

[https://github.com/SublimeText/LaTeXTools/commits/master](https://github.com/SublimeText/LaTeXTools/commits/master)

### インストール {#i186fdb3}

メニューの \[Preferences\]-\[Package Control\] を選択します．<br>
Package Control: Install Package を選択します．<br>
LaTeXTools を入力して LaTeXTools を選択します．<br>

### 注意点 {#ua451899}

#### LaTeXTools.sublime-settings {#l8dc04fb}

LaTeXTools.sublime-settings が存在しない状態で TeX ファイルをビルドしようとすると<br>
以下の文章が表示されてビルドできません．<br>

```
LaTeXTools: you need to migrate your preferences. See the
README file for instructions.
```

メニューの \[Tools\]-\[Command Palette...\] を選択します．<br>

```
LaTeXTools: Reconfigure and migrate settings
```

を入力して LaTeXTools: Reconfigure and migrate settings を選択します．<br>

```
LaTeXTools settings successfully reconfigured. Your existing settings, if
any, have been migrated.
```

が表示されて LaTeXTools.sublime-settings が作成されていれば<br>
TeX ファイルがビルドできるようになります．<br>

### Windows {#m3e22b6d}

#### ビルドコマンドの設定 {#jbbbbc43}

W32TeX の場合は latexmk の実行には [Strawberry Perl](http://strawberryperl.com/) が必要です．<br>
メニューの \[Preferences\]-\[Browse Packages...\] を選択します．<br>
LaTeXTools/builders/traditionalBuilder.py を編集します．<br>
[traditionalBuilder.py の 18行目から 24行目](https://github.com/SublimeText/LaTeXTools/blob/master/builders/traditionalBuilder.py#L18-24)あたりの

```
DEFAULT_COMMAND_LATEXMK = ["latexmk", "-cd",
				"-e", "$pdflatex = '%E -interaction=nonstopmode -synctex=1 %S %O'",
				"-f", "-pdf"]

DEFAULT_COMMAND_WINDOWS_MIKTEX = ["texify", 
					"-b", "-p",
					"--tex-option=\"--synctex=1\""]
```

を以下のように修正します．<br>

```
DEFAULT_COMMAND_LATEXMK = ["latexmk", "-cd",
				"-e", "$latex = 'uplatex %O -no-guess-input-enc -kanji=utf8 -interaction=nonstopmode -synctex=1 %S'",
				"-e", "$biber = 'biber %O --bblencoding=utf8 -u -U --output_safechars %B'",
				"-e", "$bibtex = 'upbibtex %O %B'",
				"-e", "$makeindex = 'makeindex %O -o %D %S'",
				"-e", "$dvipdf = 'dvipdfmx %O -o %D %S'",
				"-f", "-norc", "-gg", "-pdfdvi"]

DEFAULT_COMMAND_WINDOWS_MIKTEX = DEFAULT_COMMAND_LATEXMK
```

#### SumatraPDF のインストール {#l6a7a293}

[SumatraPDF](/SumatraPDF/) をインストールします．<br>

#### SumatraPDF の設定 {#xdcd22a2}

メニューの \[Preferences\]-\[Browse Packages...\] を選択します．<br>
LaTeXTools/viewPDF.py を編集します．<br>
[viewPDF.py の 50行目](https://github.com/SublimeText/LaTeXTools/blob/master/viewPDF.py#L50)あたりの

```
			viewercmd = ["SumatraPDF", "-reuse-instance"]
```

を以下のように修正します．

■ SumatraPDF.exe を C:\Program Files (x86)\SumatraPDF にインストールした場合<br>

```
			viewercmd = [r"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe", "-reuse-instance"]
```

■ SumatraPDF.exe を C:\Program Files\SumatraPDF にインストールした場合<br>

```
			viewercmd = [r"C:\Program Files\SumatraPDF\SumatraPDF.exe", "-reuse-instance"]
```

LaTeXTools/jumpToPDF.py を編集します．<br>
[jumpToPDF.py の 101行目](https://github.com/SublimeText/LaTeXTools/blob/master/jumpToPDF.py#L101)あたりの

```
				startCommands = ["SumatraPDF.exe","-reuse-instance"]
```

を以下のように修正します．

■ SumatraPDF.exe を C:\Program Files (x86)\SumatraPDF にインストールした場合<br>

```
				startCommands = [r"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe","-reuse-instance"]
```

■ SumatraPDF.exe を C:\Program Files\SumatraPDF にインストールした場合<br>

```
				startCommands = [r"C:\Program Files\SumatraPDF\SumatraPDF.exe","-reuse-instance"]
```

#### 使い方 {#r3b484f1}

TeX ファイルを編集して Ctrl+B をタイプするとビルドが開始されて PDF ファイルが作成されます．<br>
PDF ファイルが作成されると SumatraPDF で PDF ファイルが表示されて forward search が実行されます．<br>

### OS X {#c2e22368}

#### ビルドコマンドの設定 {#x87217d3}

メニューの \[Preferences\]-\[Browse Packages...\] を選択します．<br>
LaTeXTools/builders/traditionalBuilder.py を編集します．<br>
[traditionalBuilder.py の 18行目から 20行目](https://github.com/SublimeText/LaTeXTools/blob/master/builders/traditionalBuilder.py#L18-20)あたりの

```
DEFAULT_COMMAND_LATEXMK = ["latexmk", "-cd",
				"-e", "$pdflatex = '%E -interaction=nonstopmode -synctex=1 %S %O'",
				"-f", "-pdf"]
```

を以下のように修正します．<br>

```
DEFAULT_COMMAND_LATEXMK = ["latexmk", "-cd",
				"-e", "$latex = 'uplatex %O -interaction=nonstopmode -synctex=1 %S'",
				"-e", "$biber = 'biber %O --bblencoding=utf8 -u -U --output_safechars %B'",
				"-e", "$bibtex = 'upbibtex %O %B'",
				"-e", "$makeindex = 'makeindex %O -o %D %S'",
				"-e", "$dvipdf = 'dvipdfmx %O -o %D %S'",
				"-f", "-norc", "-gg", "-pdfdvi"]
```

#### Skim のインストール {#uf11e28c}

[Skim](/Skim/) をインストールします．<br>

#### 使い方 {#i5f73594}

TeX ファイルを編集して Cmd+B をタイプするとビルドが開始されて PDF ファイルが作成されます．<br>
PDF ファイルが作成されると Skim で PDF ファイルが表示されて forward search が実行されます．<br>

### Linux {#x47ef3df}

#### ビルドコマンドの設定 {#z0e9fdec}

メニューの \[Preferences\]-\[Browse Packages...\] を選択します．<br>
LaTeXTools/builders/traditionalBuilder.py を編集します．<br>
[traditionalBuilder.py の 18行目から 20行目](https://github.com/SublimeText/LaTeXTools/blob/master/builders/traditionalBuilder.py#L18-20)あたりの

```
DEFAULT_COMMAND_LATEXMK = ["latexmk", "-cd",
				"-e", "$pdflatex = '%E -interaction=nonstopmode -synctex=1 %S %O'",
				"-f", "-pdf"]
```

を以下のように修正します．<br>

```
DEFAULT_COMMAND_LATEXMK = ["latexmk", "-cd",
				"-e", "$latex = 'uplatex %O -interaction=nonstopmode -synctex=1 %S'",
				"-e", "$biber = 'biber %O --bblencoding=utf8 -u -U --output_safechars %B'",
				"-e", "$bibtex = 'upbibtex %O %B'",
				"-e", "$makeindex = 'makeindex %O -o %D %S'",
				"-e", "$dvipdf = 'dvipdfmx %O -o %D %S'",
				"-f", "-norc", "-gg", "-pdfdvi"]
```

#### Evince のインストール {#q24adbfa}

[Evince](/Evince/) をインストールします．<br>

#### 使い方 {#rcdb8d80}

TeX ファイルを編集して Ctrl+B をタイプするとビルドが開始されて PDF ファイルが作成されます．<br>
PDF ファイルが作成されると Evince で PDF ファイルが表示されて forward search が実行されます．<br>

## [LaTeXSQ](https://github.com/randy3k/LaTeXSQ) → 問題が発生する場合は LaTeXTools を使用する <a id="latexsq"></a> {#xcd64fdd}

### ChangeLog {#zc1e6581}

[https://github.com/randy3k/LaTeXSQ/commits/master](https://github.com/randy3k/LaTeXSQ/commits/master)

### インストール {#b204bf82}

メニューの \[Preferences\]-\[Package Control\] を選択します．<br>
Package Control: Install Package を選択します．<br>
LaTeXSQ を入力して LaTeXSQ を選択します．<br>

## SumatraPDF との連携 {#hf07fc30}

### forward search {#f7ecc231}

LaTeXTools を使用している場合は Ctrl+L をタイプしたあとで J をタイプすると forward search が実行されます．<br>

### inverse search {#u2a5078e}

```
"C:\Program Files\Sublime Text 3\sublime_text.exe" "%f:%l"
```

## Skim との連携 {#a71db317}

### forward search {#ld6076e7}

LaTeXTools を使用している場合は Cmd+L をタイプしたあとで J をタイプすると forward search が実行されます．<br>

### inverse search {#ud969bd6}

PDF-TeX 同期サポート:
: &nbsp;

初期値:
: Sublime Text

コマンド:
: /Applications/Sublime Text.app/Contents/SharedSupport/bin/subl

引数:
: "%file":%line

## Evince との連携 {#c88ae1a2}

### forward search {#d9a3fe23}

LaTeXTools を使用している場合は Ctrl+L をタイプしたあとで J をタイプすると forward search が実行されます．<br>

### inverse search {#g5eca105}

LaTeXTools を使用している場合は Ctrl+左クリック を実行すると inverse search が実行されます．<br>

## 関連リンク {#p3fe3a8a}

- [SublimeText Vim Emacs プラグイン比較表](https://github.com/chikatoike/SublimeTextWiki/wiki/SublimeText-Vim-Emacs-%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%E6%AF%94%E8%BC%83%E8%A1%A8)

### Windows {#m51226c8}

- [Sublime text3でTeXworksを使う](http://cumadeer.matrix.jp/?p=516)
    <!-- -[[Sublime Text 3 導入手順 (Windows7):http://nanoway.net/pc/sublime-text-3]] -->
    <!-- -[[[Windows] Sublime Text 2 で LaTeX のコンパイル:http://gymnagisane.blog.fc2.com/blog-entry-170.html]] -->
    <!-- -[[Sublime Text3におけるLaTeXコンパイル時のゴミファイルの処理:http://hagetak.hatenablog.com/entry/2014/01/05/180432]] -->
    <!-- -[[SublimeText3でのLaTeX環境設定方法:http://hagetak.hatenablog.com/entry/2013/10/01/002830]] -->
    <!-- -[[Windows + sublime text2 + pLatexの環境設定:http://yshtak.tumblr.com/post/65763928976/windows-sublime-text2-platex]] -->
    <!-- -[[Sublime Text2でLaTeX:http://yanoshi.hatenablog.jp/entry/2013/09/17/190954]] -->
    <!-- -[[Sublime Text 2 で LaTeX on Windows:http://ichiro-maruta.blogspot.jp/2013/01/sublime-text-2-latex.html]] -->

### OS X {#d13b8a86}

- [【2014-3-12以降版】Mac Sublime Text2 or Sublime Text3 で Tex 導入の初歩から](http://yusuke0.hatenablog.com/entry/2014/04/06/111945)
- [【2014年版】『MacTex 2013』と『Sublime Text 2』でpLaTeX環境をつくる](http://www.moxbit.com/2014/03/mac-tex-st2-latex-2014.html)
- [Sublime Text2で書きたくてTeX環境（@Mac）整えようとしたら詰んだ](http://kmdrism.com/2013/texkowai/)
- [やっとやる気になったのでSublimeTextでTeXの設定をした](http://namaegaukabanai.wordpress.com/2014/03/22/sublimetext2%E3%81%A7tex%E3%81%AE%E8%A8%AD%E5%AE%9A%E3%82%92%E3%81%97%E3%81%9F/)
    <!-- -[[Mac Sublime Text2で Tex 初歩の導入から　OS X Mavericks:http://yusuke0.hatenablog.com/entry/2013/10/29/230314]] -->
    <!-- -[[LaTeX on Sublime Text 2:http://izumin.hateblo.jp/entry/2013/05/09/230731]] -->
    <!-- -[[sublime text 2でTeXできるようにしたときのメモ:http://myy.hatenablog.com/entry/2013/04/12/203612]] -->
    <!-- -[[Sublime Text2 で(p)LaTeX文書を扱う:http://wiki.livedoor.jp/fuhmi/d/TeX%a4%cb%b4%d8%a4%b9%a4%eb%b3%d0%a4%a8%bd%f1%a4%ad]] -->
    <!-- -[[Making your first PDF with LaTeX and Sublime Text 2 for Mac:http://economistry.com/2013/01/installing-and-using-latex-for-mac/]] -->
    <!-- -[[Sublime Text 2のTeXビルドシステム:http://www35.atpages.jp/shocker/memoRANDOM/Misc/Misc_index.php]] -->
    <!-- -[[Sublime Text2を使ってTexを書いてコンパイルまでする。:https://gist.github.com/4482213]] -->
    <!-- -[[Soda Theme:https://github.com/buymeasoda/soda-theme]] -->

### Linux {#r2805e10}

- [Sublime Text 2をLinux MintやUbuntuでPPAからインストールする](http://blog.lindwurm.biz/2013/04/how-to-install-sublime.html)
    <!-- -[[Sublime Text 2 で LaTeX するまでのメモ:http://skalldan.wordpress.com/2012/11/23/sublime-text-2-%E3%81%A7-latex-%E3%81%99%E3%82%8B%E3%81%BE%E3%81%A7%E3%81%AE%E3%83%A1%E3%83%A2/]] -->
    <!-- -[[Sublime Text 2のプラグインOpen With Vimを書いてみた:http://d.hatena.ne.jp/itiut/20111229/1325138744]] -->
