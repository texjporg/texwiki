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
- [Package Control - the Sublime Text package manager](https://packagecontrol.io/)
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

## [LaTeXTools (LaTeX Plugin for Sublime Text)](https://github.com/SublimeText/LaTeXTools) {#e60d4c0f}

- [SublimeText/LaTeXTools · GitHub](https://github.com/SublimeText/LaTeXTools)
- [latex | Tech, TeX and Theory](https://tekonomist.wordpress.com/tag/latex/)
- [SublimeText3+LaTeXTools+TeXLive2015でWindowsなplatex執筆環境構築](http://yanoshi.hatenablog.jp/entry/2016/01/21/165454)
- [Sublime Text 3を試してみた(Texのコンパイル用）](http://himaneko8lynx.blog.fc2.com/blog-entry-479.html)
- [OS X El Capitan＋Sublime Text 3でヒラギノを埋め込んだPDFを作る](https://gist.github.com/wichy/13c970563a2f5a489c9d)

### インストール {#i186fdb3}

メニューの \[Preferences\] &gt; \[Package Control\] を選択します。
\[Package Control\] が存在しない場合は [Installation - Package Control](https://packagecontrol.io/installation) を参照して
Package Control をインストールします。
Package Control: Install Package を選択します。
LaTeXTools を入力して LaTeXTools を選択します。

### Windows {#m3e22b6d}

#### ビルドコマンドの設定 {#jbbbbc43}

メニューの \[Preferences\] &gt; \[Browse Packages...\] を選択します。

User/LaTeXTools.sublime-settings を編集します。
User/LaTeXTools.sublime-settings が存在しない場合は
\[Preferences\] &gt; \[Package Settings\] &gt; \[LaTeXTools\] &gt; \[Settings - User\] を選択すると

> You do not currently have a personalized<br>
> LaTeXTools.sublime-setting file.<br>
>
> <br>
>
> Create a copy of the default settings file in your<br>
> User directory?<br>

と表示されるので \[OK\] をクリックします。

User/LaTeXTools.sublime-settings の中身の

```
	"builder_settings" : {
```

の次の行に

```
		"command" : ["latexmk", "-cd",
				"-e", "$latex = 'uplatex %O -no-guess-input-enc -kanji=utf8 -interaction=nonstopmode -synctex=1 %S'",
				"-e", "$biber = 'biber %O --bblencoding=utf8 -u -U --output_safechars %B'",
				"-e", "$bibtex = 'upbibtex %O %B'",
				"-e", "$makeindex = 'upmendex %O -o %D %S'",
				"-e", "$dvipdf = 'dvipdfmx %O -o %D %S'",
				"-f", "-%E", "-norc", "-gg", "-pdfdvi"],
```

を追加します。

#### SumatraPDF のインストール {#l6a7a293}

[SumatraPDF](/SumatraPDF/) をインストールします。

#### 使い方 {#r3b484f1}

TeX ファイルを編集して Ctrl+B をタイプするとビルドが開始されて PDF ファイルが作成されます。
PDF ファイルが作成されると SumatraPDF で PDF ファイルが表示されて forward search が実行されます。

### OS X {#c2e22368}

#### ビルドコマンドの設定 {#x87217d3}

メニューの \[Preferences\] &gt; \[Browse Packages...\] を選択します。

User/LaTeXTools.sublime-settings を編集します。
User/LaTeXTools.sublime-settings が存在しない場合は
\[Preferences\] &gt; \[Package Settings\] &gt; \[LaTeXTools\] &gt; \[Settings - User\] を選択すると

> You do not currently have a personalized<br>
> LaTeXTools.sublime-setting file.<br>
>
> <br>
>
> Create a copy of the default settings file in your<br>
> User directory?<br>

と表示されるので \[OK\] をクリックします。

User/LaTeXTools.sublime-settings の中身の

```
	"builder_settings" : {
```

の次の行に

```
		"command" : ["latexmk", "-cd",
				"-e", "$latex = 'uplatex %O -interaction=nonstopmode -synctex=1 %S'",
				"-e", "$biber = 'biber %O --bblencoding=utf8 -u -U --output_safechars %B'",
				"-e", "$bibtex = 'upbibtex %O %B'",
				"-e", "$makeindex = 'upmendex %O -o %D %S'",
				"-e", "$dvipdf = 'dvipdfmx %O -o %D %S'",
				"-f", "-%E", "-norc", "-gg", "-pdfdvi"],
```

を追加します。

#### Skim のインストール {#uf11e28c}

[Skim](/Skim/) をインストールします。

#### 使い方 {#i5f73594}

TeX ファイルを編集して Cmd+B をタイプするとビルドが開始されて PDF ファイルが作成されます。
PDF ファイルが作成されると Skim で PDF ファイルが表示されて forward search が実行されます。

### Linux {#x47ef3df}

#### ビルドコマンドの設定 {#z0e9fdec}

メニューの \[Preferences\] &gt; \[Browse Packages...\] を選択します。

User/LaTeXTools.sublime-settings を編集します。
User/LaTeXTools.sublime-settings が存在しない場合は
\[Preferences\] &gt; \[Package Settings\] &gt; \[LaTeXTools\] &gt; \[Settings - User\] を選択すると

> You do not currently have a personalized<br>
> LaTeXTools.sublime-setting file.<br>
>
> <br>
>
> Create a copy of the default settings file in your<br>
> User directory?<br>

と表示されるので \[OK\] をクリックします。

User/LaTeXTools.sublime-settings の中身の

```
	"builder_settings" : {
```

の次の行に

```
		"command" : ["latexmk", "-cd",
				"-e", "$latex = 'uplatex %O -interaction=nonstopmode -synctex=1 %S'",
				"-e", "$biber = 'biber %O --bblencoding=utf8 -u -U --output_safechars %B'",
				"-e", "$bibtex = 'upbibtex %O %B'",
				"-e", "$makeindex = 'upmendex %O -o %D %S'",
				"-e", "$dvipdf = 'dvipdfmx %O -o %D %S'",
				"-f", "-%E", "-norc", "-gg", "-pdfdvi"],
```

を追加します。

#### Evince のインストール {#q24adbfa}

[Evince](/Evince/) をインストールします。

#### 使い方 {#rcdb8d80}

TeX ファイルを編集して Ctrl+B をタイプするとビルドが開始されて PDF ファイルが作成されます。
PDF ファイルが作成されると Evince で PDF ファイルが表示されて forward search が実行されます。

### ChangeLog {#zcc7e097}

[https://github.com/SublimeText/LaTeXTools/commits/master](https://github.com/SublimeText/LaTeXTools/commits/master)

## [LaTeX-Plus](https://github.com/randy3k/LaTeX-Plus) {#xcd64fdd}

### インストール {#b204bf82}

メニューの \[Preferences\] &gt; \[Package Control\] を選択します。
Package Control: Install Package を選択します。
LaTeX-Plus を入力して LaTeX-Plus を選択します。

### ChangeLog {#zc1e6581}

[https://github.com/randy3k/LaTeX-Plus/commits/master](https://github.com/randy3k/LaTeX-Plus/commits/master)
