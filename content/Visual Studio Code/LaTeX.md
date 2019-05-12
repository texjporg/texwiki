---
title: "Visual Studio Code/LaTeX"
url: "/Visual Studio Code/LaTeX/"
date: 2018-11-06T15:19:55Z
pukiwiki: "Visual Studio Code/LaTeX"
---

# Visual Studio Code/LaTeX

[Visual Studio Code](</Visual Studio Code/>) &gt; LaTeX

***

***

## LaTeX 環境の整備 {#ic8fac5c}

Visual Studio Code 上で LaTeX の統合環境を構築する拡張機能(extension)としては LaTeX Workshop や CaTeX（軽鳥／怪鳥）などがあります。高機能でもっとも普及しているのは James Yu 氏による LaTeX Workshop です。

サイドバーから拡張機能をクリックし，検索フィールドに latex と入力すれば関連拡張機能の一覧が示されます。そこから適切な拡張機能をインストールします。（好みにより Japanese Language Pack for VS Code を導入することもできます。）

## LaTeX Workshop {#n2442e05}

LaTeX Workshop は Visual Studio Code に LaTeX の統合環境を追加する extension です。入力支援，複数のコンパイル設定の使い分け，マウスを合わせたときの数式や引用のプレビューやパッケージのドキュメントを開く，などの機能があります。

- [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)
    - [https://marketplace.visualstudio.com/items/James-Yu.latex-workshop/changelog](https://marketplace.visualstudio.com/items/James-Yu.latex-workshop/changelog)
- [https://github.com/James-Yu/LaTeX-Workshop](https://github.com/James-Yu/LaTeX-Workshop)
    - [https://github.com/James-Yu/LaTeX-Workshop/commits/master](https://github.com/James-Yu/LaTeX-Workshop/commits/master)
    - [https://github.com/James-Yu/LaTeX-Workshop/blob/master/CHANGELOG.md](https://github.com/James-Yu/LaTeX-Workshop/blob/master/CHANGELOG.md)
- [MyTeXpert:Visual Studio Code/LaTeX](https://web.archive.org/web/20211022201430/https://mytexpert.osdn.jp/?Visual%20Studio%20Code%2FLaTeX)
- [vs code で latex](https://kandai.hatenadiary.jp/entry/2019/02/21/091432)
- [VSCode で LaTeX を書く (2018)](https://qiita.com/popunbom/items/7d02fc75ad23b735d28c)
- [最速で最小構成のLaTeX環境をVSCodeに構築する](https://qiita.com//geek_shanshan/items/d2b6218bbd66e3f62497)

### 各種設定 {#xf8ab47d}

（VS Code の機能）

Ctrl+Comma (Cmd+Comma) で「設定(Settings)」 タブを開きます。「設定の検索」フィールドに適切な用語を入力して必要な設定を絞り込むことができます。「settings.json で編集」をクリックすると「ユーザー設定(settings.json)」が開きます。初回は{}しか記述されていない画面が開きますので，その{}内に各種設定を書きこみます。

「ユーザー設定(settings.json)」は「既定の設定(defaultSettings.json)」に優先します。「既定の設定」を確認するには，Ctrl+shift+P (Cmd+shift+P)から default を検索すると見つかります。

#### コンパイルのデフォルト設定 {#mccdb80b}

文書コンパイル時，LaTeX Workshop は設定された recipe にしたがって一連のコマンド（tool）を順次実行します。

デフォルトでは，latexmk と pdflatex ➞ bibtex ➞ pdflatex×2 の2種類の recipe が定義されています。（defaultSettings.json に記述されています。）

```
"latex-workshop.latex.recipes": [
{
"name": "latexmk 🔃",
"tools": [
"latexmk"
]
},
{
"name": "pdflatex ➞ bibtex ➞ pdflatex × 2",
"tools": [
"pdflatex",
"bibtex",
"pdflatex",
"pdflatex"
]
}
]
```

recipe 内の tools で指定されている tool は latex-workshop.latex.tools で設定されている必要があります。「既定の設定(defaultSettings.json)」では以下のように設定されています。

```
"latex-workshop.latex.tools": [
{
"name": "latexmk",
"command": "latexmk",
"args": [
 "-synctex=1",
 "-interaction=nonstopmode",
 "-file-line-error",
 "-pdf",
 "%DOC%"
]
},
{
"name": "pdflatex",
"command": "pdflatex",
"args": [
 "-synctex=1",
 "-interaction=nonstopmode",
 "-file-line-error",
 "%DOC%"
]
},
{
"name": "bibtex",
"command": "bibtex",
"args": [
 "%DOCFILE%"
]
}
]
```

どのような recipe があるかは .tex ファイルを開いているときに示されるアクティビティバーのTeXアイコンからサイドバーを開いて確認できます。複数の recipe が設定されていればそれを選択することでそれぞれの設定でのコンパイルが可能になります。（複数の recipe が用意されているとき，デフォルトでは最初の recipe が実行されます。）

#### recipe/tool を日本語文書用に設定 {#c465cb18}

Ctrl+Comma (Cmd+Comma) で Settings タブを開きます。
「設定の検索」で「Tools」を入力して「Latex-workshop &gt; Latex: Tools」を探し「settings.json で編集」をクリックします。
左側に既定の設定（defaultSettings.json），右側にユーザー設定 (settings.json) が開かれます。

Windows で Latexmk-upLaTeX を使用する場合は右側に表示されている settings.json の {} の中に以下の設定を追加・保存して既定のユーザー設定を上書きします。

```
"latex-workshop.latex.tools": [
{
"name": "latexmk",
"command": "latexmk",
"args": [
 "-e",
 "$latex=q/uplatex %O -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode -file-line-error %S/",
 "-e",
 "$bibtex=q/upbibtex %O %B/",
 "-e",
 "$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/",
 "-e",
 "$makeindex=q/upmendex %O -o %D %S/",
 "-e",
 "$dvipdf=q/dvipdfmx %O -o %D %S/",
 "-norc",
 "-pdfdvi",
 "%DOC%"
]
}
]
```

Windows で Latexmk-LuaLaTeX を使用する場合は右側に表示されている settings.json の {} の中に以下の設定を追加・保存して既定のユーザー設定を上書きします。

```
"latex-workshop.latex.tools": [
{
"name": "latexmk",
"command": "latexmk",
"args": [
 "-e",
 "$lualatex=q/lualatex %O -synctex=1 -interaction=nonstopmode -file-line-error %S/",
 "-e",
 "$bibtex=q/upbibtex %O %B/",
 "-e",
 "$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/",
 "-e",
 "$makeindex=q/upmendex %O -o %D %S/",
 "-norc",
 "-pdflua",
 "%DOC%"
]
}
]
```

macOS, Linux で Latexmk-upLaTeX を使用する場合は右側に表示されている settings.json の {} の中に以下の設定を追加・保存して既定のユーザー設定を上書きします。

```
"latex-workshop.latex.tools": [
{
"name": "latexmk",
"command": "latexmk",
"args": [
 "-e",
 "$latex=q/uplatex %O -synctex=1 -interaction=nonstopmode -file-line-error %S/",
 "-e",
 "$bibtex=q/upbibtex %O %B/",
 "-e",
 "$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/",
 "-e",
 "$makeindex=q/upmendex %O -o %D %S/",
 "-e",
 "$dvipdf=q/dvipdfmx %O -o %D %S/",
 "-norc",
 "-pdfdvi",
 "%DOC%"
]
}
]
```

macOS, Linux で Latexmk-LuaLaTeX を使用する場合は右側に表示されている settings.json の {} の中に以下の設定を追加・保存して既定のユーザー設定を上書きします。

```
"latex-workshop.latex.tools": [
{
"name": "latexmk",
"command": "latexmk",
"args": [
 "-e",
 "$lualatex=q/lualatex %O -synctex=1 -interaction=nonstopmode -file-line-error %S/",
 "-e",
 "$bibtex=q/upbibtex %O %B/",
 "-e",
 "$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/",
 "-e",
 "$makeindex=q/upmendex %O -o %D %S/",
 "-norc",
 "-pdflua",
 "%DOC%"
]
}
]
```

TeX Live に含まれている [ptex2pdf](/ptex2pdf/) を用いる場合は latex-workshop.latex.recipes に ptex2pdf を追加し，latex-workshop.latex.tools にその詳細設定を記します。（以下の ptex2pdf の設定は「upLaTeXでコンパイル」「synctex 有効」というものです。）

```
"latex-workshop.latex.recipes": [
{
"name": "ptex2pdf",
"tools": [
 "ptex2pdf",
]
}
],
"latex-workshop.latex.tools": [
{
"name": "ptex2pdf",
"command": "ptex2pdf",
"args": [
 "-u",
 "-l",
 "-ot",
 "-kanji=utf8 -synctex=1 -file-line-error",
 "%DOC%"
]
}
]

```

### 使い方 {#l641150a}

ファイルの内容を変更して Ctrl+S (Cmd+S) で保存するとビルドコマンドが実行されます。ファイルの内容を変更していない状態でビルドコマンドを実行したい場合は Ctrl+Alt+B (Cmd+opt+B) でビルドコマンドを実行します。

Ctrl+Alt+V (Cmd+opt+V) あるいは右上の PDF ファイルのアイコンを左クリックで指定した PDF ビューアで PDF ファイルを表示します。
タブで開く場合は右側に新しいタブで PDF ファイルを表示します。
ブラウザで開く場合は既定のブラウザで PDF ファイルを表示します。

synctex を有効にしている場合，tex ファイル上で Ctrl+Alt+J (Cmd+opt+J) すると forward search，PDF ファイル上で Ctrl+左クリック (Cmd+クリック)すると inverse search を行います。

Ctrl+Alt+X (Cmd+opt+XまたはCmd+B) あるいは左側のアクティビティバーの TeX アイコンをクリックで以下のリストがサイドバーに表示されます。リストの項目から Action を選択すると実行されます。

> Build LaTeX project<br>
> View LaTeX PDF<br>
> View Log messages<br>
> Navigate, select, and exit<br>
> Miscellaneous<br>

#### 入力支援 {#c2c9aa18}

「\\+先頭アルファベット」で入力補完モードとなって候補がポップアップし，それ以降の入力文字は順不同で絞り込みに用いられます。読み込んである自作マクロなどに含まれる命令も補完候補に含まれます。なお，下の表に示された文字列は「\」なしに2文字目から補完モードとなります。詳細は以下に。

- [https://github.com/James-Yu/LaTeX-Workshop/wiki/Snippets](https://github.com/James-Yu/LaTeX-Workshop/wiki/Snippets)

<table>
<tbody>
<tr><td><strong>略記</strong></td><td>説明</td><td>例</td></tr>
<tr><td><strong>BXY</strong></td><td>環境 XY... を入力補完</td><td>BEQ, BEN, BIT,BCAS,...</td></tr>
<tr><td><strong>SXY</strong></td><td>部・章・節などを入力補完</td><td>SPA, SCH, SSE, SSS, SS2,...</td></tr>
<tr><td><strong>@a</strong>など</td><td>ギリシャ文字の入力補完</td><td>@a, @b,@g,...</td></tr>
<tr><td><strong>@(</strong>など</td><td>数学記号の入力補完</td><td>括弧類，分数，...</td></tr>
<tr><td><strong>FXY</strong></td><td>フォント設定</td><td>FRM, FTT, FIT, FBF,...</td></tr>
<tr><td><strong>MXY</strong></td><td>数学フォント設定</td><td>MRM, MBF, MBB,...</td></tr>
</tbody>
</table>

記述済みのテキストをコマンドで囲むときは，テキストを選択してから Ctrl+L, Ctrl+W（Cmd+L, Cmd+W）と連続入力すると，囲みコマンドの候補がポップアップします。複数選択に対しても有効です。

環境で囲むときは，Ctrl+shift+P (Cmd+shift+P)でコマンドパレットを呼び出してから LaTeX Workshop: Surround selection with \begin{}...\end{} を選択します。（コマンドパレットに latex sur と入力すれば見つけられます。）

テキストを選択した状態で$, (, {, \[, ', ''を入力すると，これらの文字で選択テキストを囲むことができます。

### マジックコメント {#b7b858ba}

LaTeX Workshop は % !TEX root と % !TEX program のマジックコメントをサポートしています。

#### root ファイル（メインファイル）の指定 {#jf392861}

LaTeX Workshop は root ファイル（メインファイル）を自動判別しますがうまく動作しない場合はマジックコメントで指定することができます。
root ファイル（メインファイル）を指定する場合は

```
% !TEX root = relative/or/absolute/path/to/root/file.tex
```

のように設定します。

#### ビルドコマンドの変更 {#kc7e31e9}

「普段は Latexmk-upLaTeX を使うように設定しているけれど特定の文書だけ Latexmk-LuaLaTeX を使いたい」といった場合は設定を変更しなくてもマジックコメントを追加して Latexmk-LuaLaTeX を使用することができます。（ただし，これは後方互換性のために組み込まれた機能で，原則として recipe システムを利用することが推奨されています。）

settings.json の {} の中に以下の設定を追加・保存します。

```
"latex-workshop.latex.magic.args": [
"-e",
"$lualatex=q/lualatex %O -synctex=1 -interaction=nonstopmode -file-line-error %S/",
"-e",
"$bibtex=q/upbibtex %O %B/",
"-e",
"$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/",
"-e",
"$makeindex=q/upmendex %O -o %D %S/",
"-norc",
"-pdflua",
"%DOC%"
]
```

LaTeX 文書の root ファイル（メインファイル）に以下の行を追加します。

```
% !TEX program = latexmk
```

Ctrl+S(Cmd+S) で保存あるいは Ctrl+Alt+B(Cmd+opt+B) でビルドコマンドを実行すると Latexmk-LuaLaTeX が実行されます。

### PDF 表示の設定 {#t6002d57}

PDF を表示させる際に「その都度決定する」「VS Code のタブで開く」「既定のブラウザで開く」「指定された外部ビューワーで開く」ことができます。
settings.json の {} の中で latex-workshop.view.pdf.viewer を設定します。

```
"latex-workshop.view.pdf.viewer": "設定"
```

<table>
<tbody>
<tr><td><strong>設定</strong></td><td>説明</td></tr>
<tr><td>none</td><td>既定の PDF ビューワーを設定しない</td></tr>
<tr><td>tab</td><td>PDF をタブ表示する</td></tr>
<tr><td>browser</td><td>既定の web ブラウザで開く</td></tr>
<tr><td>external</td><td>外部ビューワーで開く</td></tr>
</tbody>
</table>

external を指定した際には，さらにそのビューワーを latex-workshop.view.pdf.external.command で別途指定します。（指定されていない場合は，OS のデフォルトの PDF ビューワーが用いられます。）

### SumatraPDF との synctex 連携 {#g142ea7e}

#### forward search {#g7538c56}

settings.json の {} の中に以下の設定を追加・保存します。

```
"latex-workshop.view.pdf.viewer": "external",
"latex-workshop.view.pdf.external.command": {
"command": "C:/Program Files/SumatraPDF/SumatraPDF.exe",
"args": [
 "-reuse-instance",
 "%PDF%"
]
},
"latex-workshop.view.pdf.external.synctex": {
"command": "C:/Program Files/SumatraPDF/SumatraPDF.exe",
"args": [
 "-reuse-instance",
 "-forward-search",
 "%TEX%",
 "%LINE%",
 "%PDF%"
]
}
```

#### inverse search {#lc044abd}

SumatraPDF の \[☰\] &gt; \[設定(S)\] &gt; \[オプション(O)...\] の「逆順検索コマンドラインの設定」に以下の設定をします。

```
"C:\Program Files\Microsoft VS Code\bin\code.cmd" -g "%f:%l"
```

### 便利な設定 {#o2d1e90d}

settings.json に設定を記述することでVS Code や LaTeX Workshop の動作を変更できます。

#### コンパイル時に生成されたファイルを自動削除 {#he95e080}

自動削除するファイルの拡張子を設定し，コンパイル後の自動削除の設定を記述します。（synctex を使いたい場合は，一覧から"\*.synctex.gz"は外しておきます。）

```
"latex-workshop.latex.clean.fileTypes": [
"*.aux", "*.bbl", "*.blg", "*.idx", "*.ind", "*.lof", "*.lot", "*.out", "*.toc", "*.acn", "*.acr", "*.alg", 
"*.glg", "*.glo", "*.gls", "*.ist", "*.fls", "*.log", "*.fdb_latexmk", "*.synctex.gz",
// for Beamer files
"_minted*", "*.nav", "*.snm", "*.vrb",
],
"latex-workshop.latex.autoClean.run": "設定"
```

<table>
<tbody>
<tr><td><strong>設定</strong></td><td>説明</td></tr>
<tr><td>never</td><td>自動削除機能を利用しない</td></tr>
<tr><td>onFailed</td><td>コンパイルに失敗したときにのみ上記の拡張子のファイルを自動削除</td></tr>
<tr><td>onBuilt</td><td>コンパイルのたびに上記の拡張子のファイルを自動削除</td></tr>
</tbody>
</table>

#### コンパイル時に PDF をカーソル位置で表示 {#c28e23e4}

synctex を有効にしてコンパイルしたときに，tex 文書のカーソル位置で PDF を表示するように設定できます。

```
"latex-workshop.synctex.afterBuild.enabled": true
```

true/false で設定が切り替わります。（この設定値には引用符は必要ありません。）

#### 日本語の単語区切りを設定する {#u7d79829}

単語移動を行いやすくするため日本語の句読点や括弧類を単語区切りとして設定する。

```
"editor.wordSeparators": "./\\()\"'-:,.;<>~!@#$%^&*|+=[]{}`~?．。，、（）「」［］｛｝《》",
```

助詞も単語区切りに設定するならば，以下のように設定する。

```
"editor.wordSeparators": "./\\()\"'-:,.;<>~!@#$%^&*|+=[]{}`~?．。，、（）「」［］｛｝《》てにをはがのともへでや",
```
