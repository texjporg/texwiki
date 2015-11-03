---
title: "Sublime Text"
url: "/Sublime Text/"
date: 2012-06-26T20:10:04Z
pukiwiki: "Sublime Text"
---

# Sublime Text

## [Sublime Text](http://www.sublimetext.com/) {#pefc7cc2}

Sublime Text はカスタマイズ性に優れたモダンなテキストエディタで，シェアウェアです。
Windows, OS X, Linux で動作します。

<strong>公式サイト</strong>

- [Sublime Text](http://www.sublimetext.com/)
- [Package Control - the Sublime Text package manager](https://sublime.wbond.net/)
- [Sublime Text 3](http://www.sublimetext.com/3)
- [Sublime Text 3 - Dev Builds](http://www.sublimetext.com/3dev)

LaTeXTools や LaTeX Plus というプラグインを利用すれば，LaTeX 用のエディタとして便利に利用できます。

***

***

### 日本語に関するプラグイン {#fa7e32d3}

#### 日本語入力のインライン変換対応 {#cde09531}

- [IMESupport for Sublime Text](https://github.com/chikatoike/IMESupport)
- [「IMESupport」の検索結果一覧 - ゆり日記](http://d.hatena.ne.jp/chikatoike/archive?word=IMESupport)
- [WindowsのIMEでインライン変換を正しく表示できるようにしてみた](http://qiita.com/items/5ccbe63d36009680e0e6)
- \[[MAC\]\[WIN\]SUBLIME TEXT のススメと最初にすべき日本語入力環境の改善](http://roguer.info/2012/11/01/6049/)
- [Sublime Mozc Input](http://yasuyuky.github.io/SublimeMozcInput/)
- [SublimeIBus](https://github.com/chikatoike/SublimeIBus)

#### Shift_JIS, EUC-JP 対応 {#bc9dcabf}

- [ConvertToUTF8](https://github.com/seanliang/ConvertToUTF8)

#### メニューの日本語化 {#p0f8c581}

- [sublimetext_japanize](https://github.com/kik0220/sublimetext_japanize)

### PDF ビューアとの連携 {#hf07fc30}

[SumatraPDF](/SumatraPDF/)，[Skim](/Skim/)，[Evince](/Evince/) などのビューアが forward &amp; inverse search に対応しています。

#### forward search {#f7ecc231}

- LaTeXTools を使用している場合は Ctrl+L をタイプしたあとで J をタイプすると forward search が実行されます。

#### inverse search {#u2a5078e}

- SumatraPDF で inverse search を行う設定

    ```
    "C:\Program Files\Sublime Text 3\sublime_text.exe" "%f:%l"
    ```

- Skim で inverse search を行う設定

    ```
    PDF-TeX 同期サポート:
     初期値:    Sublime Text
     コマンド:  /Applications/Sublime Text.app/Contents/SharedSupport/bin/subl
     引数:     "%file":%line
    ```

- Evince の場合，LaTeXTools を使用している場合は Ctrl+左クリック を実行すると inverse search が実行されます。

### 関連リンク {#p3fe3a8a}

- [SublimeText Vim Emacs プラグイン比較表](https://github.com/chikatoike/SublimeTextWiki/wiki/SublimeText-Vim-Emacs-%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%E6%AF%94%E8%BC%83%E8%A1%A8)

#### Windows {#m51226c8}

- [Sublime text3でTeXworksを使う](http://cumadeer.matrix.jp/?p=516)
    <!-- -[[Sublime Text 3 導入手順 (Windows7):http://nanoway.net/pc/sublime-text-3]] -->
    <!-- -[[[Windows] Sublime Text 2 で LaTeX のコンパイル:http://gymnagisane.blog.fc2.com/blog-entry-170.html]] -->
    <!-- -[[Sublime Text3におけるLaTeXコンパイル時のゴミファイルの処理:http://hagetak.hatenablog.com/entry/2014/01/05/180432]] -->
    <!-- -[[SublimeText3でのLaTeX環境設定方法:http://hagetak.hatenablog.com/entry/2013/10/01/002830]] -->
    <!-- -[[Windows + sublime text2 + pLatexの環境設定:http://yshtak.tumblr.com/post/65763928976/windows-sublime-text2-platex]] -->
    <!-- -[[Sublime Text2でLaTeX:http://yanoshi.hatenablog.jp/entry/2013/09/17/190954]] -->
    <!-- -[[Sublime Text 2 で LaTeX on Windows:http://ichiro-maruta.blogspot.jp/2013/01/sublime-text-2-latex.html]] -->

#### OS X {#d13b8a86}

- [Sublime text 3 で Latex をコンパイルしてみた](http://dek1ymt2.wordpress.com/2014/05/12/sublime-text-3-%E3%81%A7-latex-%E3%82%92%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%AB%E3%81%97%E3%81%A6%E3%81%BF%E3%81%9F/)
- [Sublime Text 2 with LaTeX &amp; Skim on Mac (XeTeX支援中文)](http://tech.marsw.tw/blog/2014/04/18/sublime-text-2-with-latex-skim-on-mac-xelatex-chinese-support)
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

#### Linux {#r2805e10}

- [Sublime Text 2をLinux MintやUbuntuでPPAからインストールする](http://blog.lindwurm.biz/2013/04/how-to-install-sublime.html)
    <!-- -[[Sublime Text 2 で LaTeX するまでのメモ:http://skalldan.wordpress.com/2012/11/23/sublime-text-2-%E3%81%A7-latex-%E3%81%99%E3%82%8B%E3%81%BE%E3%81%A7%E3%81%AE%E3%83%A1%E3%83%A2/]] -->
    <!-- -[[Sublime Text 2のプラグインOpen With Vimを書いてみた:http://d.hatena.ne.jp/itiut/20111229/1325138744]] -->

## [LaTeXTools (LaTeX Plugin for Sublime Text)](https://github.com/SublimeText/LaTeXTools) {#e60d4c0f}

- [SublimeText/LaTeXTools · GitHub](https://github.com/SublimeText/LaTeXTools)
- [latex | Tech, TeX and Theory](http://tekonomist.wordpress.com/tag/latex/)

### インストール {#i186fdb3}

メニューの \[Preferences\]-\[Package Control\] を選択します。
Package Control: Install Package を選択します。
LaTeXTools を入力して LaTeXTools を選択します。

### 注意点 {#ua451899}

#### LaTeXTools.sublime-settings {#l8dc04fb}

LaTeXTools.sublime-settings が存在しない状態で TeX ファイルをビルドしようとすると，以下の文章が表示されてビルドできません。

```
LaTeXTools: you need to migrate your preferences. See the
README file for instructions.
```

メニューの \[Tools\]-\[Command Palette...\] を選択します。

```
LaTeXTools: Reconfigure and migrate settings
```

を入力して LaTeXTools: Reconfigure and migrate settings を選択します。

```
LaTeXTools settings successfully reconfigured. Your existing settings, if
any, have been migrated.
```

が表示されて LaTeXTools.sublime-settings が作成されていれば，TeX ファイルがビルドできるようになります。

### Windows {#m3e22b6d}

#### ビルドコマンドの設定 {#jbbbbc43}

W32TeX の場合は [latexmk](/Latexmk/) の実行には [Perl](/Perl/) の処理系が必要です。
メニューの \[Preferences\]-\[Browse Packages...\] を選択します。
LaTeXTools/builders/traditionalBuilder.py を編集します。
[traditionalBuilder.py の 18行目から 24行目](https://github.com/SublimeText/LaTeXTools/blob/master/builders/traditionalBuilder.py#L18-L24)あたりの

```
DEFAULT_COMMAND_LATEXMK = ["latexmk", "-cd",
				"-e", "$pdflatex = '%E -interaction=nonstopmode -synctex=1 %S %O'",
				"-f", "-pdf"]

DEFAULT_COMMAND_WINDOWS_MIKTEX = ["texify", 
					"-b", "-p",
					"--tex-option=\"--synctex=1\""]
```

を以下のように修正します。

```
DEFAULT_COMMAND_LATEXMK = ["latexmk", "-cd",
				"-e", "$latex = 'uplatex %O -no-guess-input-enc -kanji=utf8 -interaction=nonstopmode -synctex=1 %S'",
				"-e", "$biber = 'biber %O --bblencoding=utf8 -u -U --output_safechars %B'",
				"-e", "$bibtex = 'upbibtex %O %B'",
				"-e", "$makeindex = 'upmendex %O -o %D %S'",
				"-e", "$dvipdf = 'dvipdfmx %O -o %D %S'",
				"-f", "-norc", "-gg", "-pdfdvi"]

DEFAULT_COMMAND_WINDOWS_MIKTEX = DEFAULT_COMMAND_LATEXMK
```

#### SumatraPDF のインストール {#l6a7a293}

[SumatraPDF](/SumatraPDF/) をインストールします。

#### SumatraPDF の設定 {#xdcd22a2}

メニューの \[Preferences\]-\[Browse Packages...\] を選択します。
LaTeXTools/viewPDF.py を編集します。
[viewPDF.py の 50行目](https://github.com/SublimeText/LaTeXTools/blob/master/viewPDF.py#L50)あたりの

```
			viewercmd = ["SumatraPDF", "-reuse-instance"]
```

を以下のように修正します。

```
			viewercmd = [r"C:\Program Files\SumatraPDF\SumatraPDF.exe", "-reuse-instance"]
```

LaTeXTools/jumpToPDF.py を編集します。
[jumpToPDF.py の 101行目](https://github.com/SublimeText/LaTeXTools/blob/master/jumpToPDF.py#L101)あたりの

```
				startCommands = ["SumatraPDF.exe","-reuse-instance"]
```

を以下のように修正します。

```
				startCommands = [r"C:\Program Files\SumatraPDF\SumatraPDF.exe","-reuse-instance"]
```

#### 使い方 {#r3b484f1}

TeX ファイルを編集して Ctrl+B をタイプするとビルドが開始されて PDF ファイルが作成されます。
PDF ファイルが作成されると SumatraPDF で PDF ファイルが表示されて forward search が実行されます。

### OS X {#c2e22368}

#### ビルドコマンドの設定 {#x87217d3}

メニューの \[Preferences\]-\[Browse Packages...\] を選択します。
LaTeXTools/builders/traditionalBuilder.py を編集します。
[traditionalBuilder.py の 18行目から 20行目](https://github.com/SublimeText/LaTeXTools/blob/master/builders/traditionalBuilder.py#L18-L20)あたりの

```
DEFAULT_COMMAND_LATEXMK = ["latexmk", "-cd",
				"-e", "$pdflatex = '%E -interaction=nonstopmode -synctex=1 %S %O'",
				"-f", "-pdf"]
```

を以下のように修正します。

```
DEFAULT_COMMAND_LATEXMK = ["latexmk", "-cd",
				"-e", "$latex = 'uplatex %O -interaction=nonstopmode -synctex=1 %S'",
				"-e", "$biber = 'biber %O --bblencoding=utf8 -u -U --output_safechars %B'",
				"-e", "$bibtex = 'upbibtex %O %B'",
				"-e", "$makeindex = 'upmendex %O -o %D %S'",
				"-e", "$dvipdf = 'dvipdfmx %O -o %D %S'",
				"-f", "-norc", "-gg", "-pdfdvi"]
```

#### Skim のインストール {#uf11e28c}

[Skim](/Skim/) をインストールします。

#### 使い方 {#i5f73594}

TeX ファイルを編集して Cmd+B をタイプするとビルドが開始されて PDF ファイルが作成されます。
PDF ファイルが作成されると Skim で PDF ファイルが表示されて forward search が実行されます。

### Linux {#x47ef3df}

#### ビルドコマンドの設定 {#z0e9fdec}

メニューの \[Preferences\]-\[Browse Packages...\] を選択します。
LaTeXTools/builders/traditionalBuilder.py を編集します。
[traditionalBuilder.py の 18行目から 20行目](https://github.com/SublimeText/LaTeXTools/blob/master/builders/traditionalBuilder.py#L18-L20)あたりの

```
DEFAULT_COMMAND_LATEXMK = ["latexmk", "-cd",
				"-e", "$pdflatex = '%E -interaction=nonstopmode -synctex=1 %S %O'",
				"-f", "-pdf"]
```

を以下のように修正します。

```
DEFAULT_COMMAND_LATEXMK = ["latexmk", "-cd",
				"-e", "$latex = 'uplatex %O -interaction=nonstopmode -synctex=1 %S'",
				"-e", "$biber = 'biber %O --bblencoding=utf8 -u -U --output_safechars %B'",
				"-e", "$bibtex = 'upbibtex %O %B'",
				"-e", "$makeindex = 'upmendex %O -o %D %S'",
				"-e", "$dvipdf = 'dvipdfmx %O -o %D %S'",
				"-f", "-norc", "-gg", "-pdfdvi"]
```

#### Evince のインストール {#q24adbfa}

[Evince](/Evince/) をインストールします。

#### 使い方 {#rcdb8d80}

TeX ファイルを編集して Ctrl+B をタイプするとビルドが開始されて PDF ファイルが作成されます。
PDF ファイルが作成されると Evince で PDF ファイルが表示されて forward search が実行されます。

### ChangeLog {#zcc7e097}

[https://github.com/SublimeText/LaTeXTools/commits/master](https://github.com/SublimeText/LaTeXTools/commits/master)

## [LaTeX-Plus](https://github.com/randy3k/LaTeX-Plus) {#xcd64fdd}

### インストール {#b204bf82}

メニューの \[Preferences\]-\[Package Control\] を選択します。
Package Control: Install Package を選択します。
LaTeX-Plus を入力して LaTeX-Plus を選択します。

### ChangeLog {#zc1e6581}

[https://github.com/randy3k/LaTeX-Plus/commits/master](https://github.com/randy3k/LaTeX-Plus/commits/master)
