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

左端のアクティビティバーから拡張機能をクリックし，検索フィールドに latex と入力すれば関連拡張機能の一覧が示されます。そこから適切な拡張機能をインストールします。（このとき Japanese Language Pack for VS Code を導入するとメニューや各種設定の説明も日本語化できます。）

### LaTeX Workshop と CaTeX の併用 {#qb107d73}

CaTeX は LaTeX Workshop と共に使うことを想定し，LaTeX Workshop にない機能を追加します。ギリシア文字補完，イメージ補完，フォント補完の機能をもつほか，Ctrl-c s と入力することで「セクション」「環境」「\maketitle」「{\Large }」のタイプの補完が可能となります。また，CaTeX では自作コマンドの補完をその場で辞書登録する機能も搭載しています。一方，LaTeX Workshop の数式の「@補完」とかぶるところもあり，併用すると「@補完」はやや使いにくくなります。

### LaTeX Workshop と LaTeX Utilities の併用 {#xf262f5b}

LaTeX Utilities は LaTeX Workshop への add-on で，LaTeX Workshop にない機能を追加します。文書全体をコンパイルすることなく tikzpicture 環境中の図表を単独プレビューする機能はこの add-on の機能として分離しました。

## LaTeX Workshop {#n2442e05}

LaTeX Workshop は Visual Studio Code に LaTeX の統合環境を追加する extension です。入力支援，複数のコンパイル設定の使い分け，文書のアウトライン表示，マウスを合わせたときの数式や引用のプレビューやパッケージのドキュメントの表示，などの機能があります。

- [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)
    - [https://marketplace.visualstudio.com/items/James-Yu.latex-workshop/changelog](https://marketplace.visualstudio.com/items/James-Yu.latex-workshop/changelog)
- [https://github.com/James-Yu/LaTeX-Workshop](https://github.com/James-Yu/LaTeX-Workshop)
    - [https://github.com/James-Yu/LaTeX-Workshop/commits/master](https://github.com/James-Yu/LaTeX-Workshop/commits/master)
    - [https://github.com/James-Yu/LaTeX-Workshop/blob/master/CHANGELOG.md](https://github.com/James-Yu/LaTeX-Workshop/blob/master/CHANGELOG.md)
- 公式マニュアル
    - [https://github.com/James-Yu/LaTeX-Workshop/wiki](https://github.com/James-Yu/LaTeX-Workshop/wiki)
- [LaTeX Workshop を使いこなす](https://qiita.com/Yarakashi_Kikohshi/items/a9357dd469320ffb65a0)
- [MyTeXpert:Visual Studio Code/LaTeX](https://web.archive.org/web/20211022201430/https://mytexpert.osdn.jp/?Visual%20Studio%20Code%2FLaTeX)
- [vs code で latex](https://kandai.hatenadiary.jp/entry/2019/02/21/091432)
- [VSCode で LaTeX を書く (2018)](https://qiita.com/popunbom/items/7d02fc75ad23b735d28c)
- [最速で最小構成のLaTeX環境をVSCodeに構築する](https://qiita.com//geek_shanshan/items/d2b6218bbd66e3f62497)
- [VS CodeでLaTeX環境を構築する](https://obsica.com/latex-with-vscode/)
- [WSLとVS Codeを使ってTeX Liveをセットアップする手順](https://zenn.dev/uchidaryo/articles/setup-texlive-with-wsl-vscode)

### 各種設定 {#xf8ab47d}

（VS Code の機能）

Ctrl+Comma (Cmd+Comma) で「設定(Settings)」 タブを開きます。「設定の検索」フィールドに適切な用語を入力して必要な設定を絞り込むことができます。代表的な設定はこの画面上で設定できますが，詳細な設定は settings.json に直接書きこみます。「settings.json で編集」をクリックすると「ユーザー設定(settings.json)」が開きます。初回は{}しか記述されていない画面が開きますので，その{}内に各種設定を書きこみます。

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

どのような recipe があるかは .tex ファイルを開いているときに画面左端のアクティビティバーに示される TeX アイコンからサイドバーを開いて確認できます。複数の recipe が設定されていればそれを選択することでそれぞれの設定でのコンパイルが可能になります。（複数の recipe が用意されているとき，デフォルトでは最初の recipe が実行されます。）

#### recipe/tool を日本語文書用に設定 {#c465cb18}

Ctrl+Comma (Cmd+Comma) で設定(Settings) タブを開きます。
「設定の検索」で「Tools」と入力して「Latex-workshop &gt; Latex: Tools」を探し，「settings.json で編集」をクリックするとユーザー設定 (settings.json) が開かれます。

LuaLaTeXmk (Latexmk-LuaLaTeX) を使用する場合は右側に表示されている settings.json の {} の中に以下の設定を追加・保存してユーザー設定を上書きします。

```
"latex-workshop.latex.tools": [
{
"name": "latexmk",
"command": "latexmk",
"args": [
 "-e",
 "$lualatex=q/lualatex %O -synctex=1 -interaction=nonstopmode -file-line-error %S/",
 "-e",
 "$bibtex=q/bibtexu %O %B/",
 "-e",
 "$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/",
 "-e",
 "$makeindex=q/upmendex %O -o %D %S/",
 "-norc",
 "-gg",
 "-pdflua",
 "%DOC%"
]
}
]
```

upLaTeXmk (Latexmk-upLaTeX) を使用する場合は右側に表示されている settings.json の {} の中に以下の設定を追加・保存してユーザー設定を上書きします。

```
"latex-workshop.latex.tools": [
{
"name": "latexmk",
"command": "latexmk",
"args": [
 "-e",
 "$latex=q/uplatex %O -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode -file-line-error %S/",
 "-e",
 "$bibtex=q/bibtexu %O %B/",
 "-e",
 "$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/",
 "-e",
 "$makeindex=q/upmendex %O -o %D %S/",
 "-e",
 "$dvipdf=q/dvipdfmx %O -o %D %S/",
 "-norc",
 "-gg",
 "-pdfdvi",
 "%DOC%"
]
}
]
```

TeX Live に含まれている [ptex2pdf](/ptex2pdf/) を用いる場合は latex-workshop.latex.recipes に ptex2pdf を追加し，latex-workshop.latex.tools にその詳細設定を記します。（以下の ptex2pdf の設定は「upLaTeXでコンパイル」「synctex 有効」というものです。）

※この設定は「ptex2pdfを1度実行する」だけであるため、「2度以上のコンパイルが必要」「BibTeXやMakeindexの実行が必要」な文書に関しては正しい出力を得られないことに注意が必要です。

<!-- ところで -interactionmode の設定はなくてもいいんだっけ？ -->
<!-- ptex2pdf の利用の仕方を見ているとみなさん -interaction をつけてませんが，ptex2pdf のスクリプト自体には特に設定はなさそうです。なので，ほかの latexmk 仕様に合わせました。 -->

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
 "-kanji=utf8 -synctex=1 -interaction=nonstopmode -file-line-error",
 "%DOC%"
]
}
]

```

### 使い方 {#l641150a}

ファイルの内容を変更して Ctrl+S (Cmd+S) で保存するとビルドコマンドが実行されます。ファイルの内容を変更していない状態でビルドコマンドを実行したい場合は Ctrl+Alt+B (Cmd+opt+B) でビルドコマンドを実行します。

コンパイル時のエラーや警告は「問題(Problems)パネル」にまとめられて表示されます。ログは「出力(Output)パネル」から確認できます。

Ctrl+Alt+V (Cmd+opt+V) あるいは右上の PDF ファイルのアイコンを左クリックで指定した PDF ビューアで PDF ファイルを表示します。
タブで開く場合は右側に新しいタブで PDF ファイルを表示します。
ブラウザで開く場合は既定のブラウザで PDF ファイルを表示します。
外部ビューワーで開く機能は，推奨されていません。

synctex を有効にしている場合，tex ファイル上で Ctrl+Alt+J (Cmd+opt+J) すると forward search，PDF ファイル上で Ctrl+左クリック (Cmd+クリック)すると inverse search を行います。タブで開かれた PDF は synctex に対応しています。

Ctrl+Alt+X (Cmd+opt+XまたはCmd+B) あるいは左側のアクティビティバーの TeX アイコンをクリックで以下のコマンドのリストがサイドバーに表示されます。リストの項目からコマンド(Command)を選択すると実行されます。

> Build LaTeX project<br>

> Clean up auxiliary files<br>
> Terminate current compilation<br>
> Recipe: latexmk<br>
> Recipe: pdflatex ➞ bibtex ➞ pdflatex × 2<br>

View LaTeX PDF<br>

> View in VSCode tab<br>
> View in web browser<br>
> View in external browser<br>
> Set default viewer<br>
> Refresh all viewers<br>

View Log messages<br>

> View LaTeX Workshop extension log<br>
> View LaTeX compiler log<br>

Navigate, select, and edit<br>

> SyncTeX from cursor<br>
> Navigate to matching begin/end<br>
> Select current environment name<br>
> Close current environment<br>
> Surround with begin{}...\end{}<br>
> Insert %!TeX root magic comment<br>

Miscellaneous<br>

> Open citation browser<br>
> Count words in LaTeX project<br>
> Reveal output folder in OS<br>

#### 入力支援 {#c2c9aa18}

「\\+先頭アルファベット」で入力補完モードとなって候補がポップアップし，それ以降の入力文字は順不同で絞り込みに用いられます。読み込んである自作マクロなどに含まれる命令も補完候補に含まれます。なお，下の表に示された文字列は「\」なしに2文字目から補完モードとなります。詳細は以下に。

- [https://github.com/James-Yu/LaTeX-Workshop/wiki/Snippets](https://github.com/James-Yu/LaTeX-Workshop/wiki/Snippets)

<table>
<tbody>
<tr><td style="background-color:#f0f0f0"><strong>略記</strong></td><td>説明</td><td>例</td></tr>
<tr><td style="background-color:#f0f0f0"><strong>BXY</strong></td><td>環境 XY... を入力補完</td><td>BEQ, BEN, BIT,BCAS,...</td></tr>
<tr><td style="background-color:#f0f0f0"><strong>SXY</strong></td><td>部・章・節などを入力補完</td><td>SPA, SCH, SSE, SSS, SS2,...</td></tr>
<tr><td style="background-color:#f0f0f0"><strong>@a</strong>など</td><td>ギリシャ文字の入力補完</td><td>@a, @b,@g,...</td></tr>
<tr><td style="background-color:#f0f0f0"><strong>@(</strong>など</td><td>数学記号の入力補完</td><td>括弧類，分数，...</td></tr>
<tr><td style="background-color:#f0f0f0"><strong>FXY</strong></td><td>フォント設定</td><td>FRM, FTT, FIT, FBF,...</td></tr>
<tr><td style="background-color:#f0f0f0"><strong>MXY</strong></td><td>数学フォント設定</td><td>MRM, MBF, MBB,...</td></tr>
</tbody>
</table>

記述済みのテキストをコマンドで囲むときは，テキストを選択してから Ctrl+L, Ctrl+W (Cmd+L, Cmd+W) と連続入力すると，囲みコマンドの候補がポップアップします。複数選択に対しても有効です。

環境で囲むときは，Ctrl+shift+P (Cmd+shift+P)でコマンドパレットを呼び出してから LaTeX Workshop: Surround selection with \begin{}...\end{} を選択します。（コマンドパレットに latex sur と入力すれば見つけられます。）

テキストを選択した状態で「$」「(」「{」「\[」「'」「｀」「"」を入力すると，これらの文字（と対応する閉じ括弧）で選択テキストを囲みます。

#### スニペットを自作する（VS Code の機能） {#ba588a9e}

- [https://code.visualstudio.com/docs/editor/userdefinedsnippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

言語ごとのスニペット，またはグローバルなスニペット（またはワークスペースやフォルダ専用のスニペット）を作成できます。

メニューの Code−基本設定(Preferences)−ユーザースニペット(User Snippets) から適切なファイルを選択します。（LaTeX 専用とするならば，latex.json を選択します。）{}内に以下の例のように記述します。

```
"log": {
"prefix": ["\\log", "@log"],
"body": [
	"\\log_{${1:e}}{${2}}"
],
"description": "対数を入力"
},
"naki": {
"prefix": "nakigao",
"body": [
	"${1|(ToT),(;_;)|}"
],
"description": "泣き顔"
}
```

<table>
<tbody>
<tr><td style="background-color:#f0f0f0">スニペット名</td><td>他から参照するときにも用いられる</td></tr>
<tr><td style="background-color:#f0f0f0">prefix</td><td>呼び出しトリガー（[...]内にコンマ区切りで複数のエイリアスも登録可能）</td></tr>
<tr><td style="background-color:#f0f0f0">body</td><td>展開される本体。[...]内にコンマ区切りの配列で記述すると改行される</td></tr>
<tr><td style="background-color:#f0f0f0">description</td><td>スニペット呼び出し時のポップアップに表示される説明</td></tr>
</tbody>
</table>

body 内は空白もそのまま出力されます。また，タブでカーソルを移動させるタブストップを設定できます。

<table><tbody>
<tr><td>${1},${2};</td><td>${1}，${2}とタブを押すと順に移動する</td></tr>
<tr><td>${1:text}</td><td>タブストップにデフォルト値を設定（タブ移動時に選択される）</td></tr>
<tr><td>${1|one, two|}</td><td>パイプ文字（|）で囲った中に複数の選択肢をコンマ区切りで設定</td></tr>
<tr><td>$0</td><td>カーソルの最終移動場所の指定</td></tr>
<tr><td>$変数</td><td>$TM_SELECTED_TEXTで選択テキスト，$CLIPBOARDでクリップボードの内容など</td></tr>
</tbody></table>

「$」「}」「\」は"\\"によってエスケープします。選択肢要素中はコンマ「,」とパイプ文字「|」も"\\"でエスケープします。

#### 自作のショートカットキーでテキストを入力する／囲む（VS Code の機能） {#a67589f0}

keybindings.json を編集することで，自作のショートカットキーで特定の動作をさせることができます。（Code−基本設定(Preferences)−キーボードショートカット (Keyboard Shortcuts)の設定を開いた後で上部のタブの右側にある{}をクリックすると keybindings.json が開きます。）

特殊文字は"\\"でエスケープします。

```
{//テキストの入力
   "key": "cmd+shift+h",
   "command": "type",
   "args":{"text": "\"Hello world!\""}
   "when": "editorTextFocus"
},
{//スニペットをショートカットキーで入力
   "key": "cmd+shift+a",
   "command": "editor.action.insertSnippet",
   "when": "editorTextFocus && editorLangId == latex",
   "args": {
       "snippet": "\\endnote{$TM_SELECTED_TEXT}"//選択部分を囲む
   }
},
{//設定済みのスニペットを呼び出して入力
   "key": "cmd+shift+n",
   "command": "editor.action.insertSnippet",
   "when": "editorTextFocus",
   "args": {
       "langId": "latex",//latex.json 中の snippet を呼び出す
       "name": "naki"
   }
}
```

### マジックコメント {#b7b858ba}

LaTeX Workshop は % !TEX root と % !TEX program のマジックコメントをサポートしています。

#### root ファイル（メインファイル）の指定 {#jf392861}

LaTeX Workshop は root ファイル（メインファイル）を自動判別しますがうまく動作しない場合はマジックコメントで指定することができます。
root ファイル（メインファイル）を指定する場合は

```
% !TEX root = relative/or/absolute/path/to/root/file.tex
```

のように設定します。

#### ビルドコマンドの一時的変更 {#kc7e31e9}

「普段は Latexmk-upLaTeX を使うように設定しているけれど特定の文書だけ Latexmk-LuaLaTeX を使いたい」といった場合は設定を変更しなくてもマジックコメントを追加して Latexmk-LuaLaTeX を使用することができます。（ただし，これは後方互換性のために組み込まれた機能で，原則として recipe システムを利用することが推奨されています。）

settings.json の {} の中に以下の設定を追加・保存します。

```
"latex-workshop.latex.magic.args": [
"-e",
"$lualatex=q/lualatex %O -synctex=1 -interaction=nonstopmode -file-line-error %S/",
"-e",
"$bibtex=q/bibtexu %O %B/",
"-e",
"$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/",
"-e",
"$makeindex=q/upmendex %O -o %D %S/",
"-norc",
"-gg",
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

Ctrl+Comma (Cmd+Comma) で「設定(Settings)」 タブを開き，「設定の検索」で pdf と打って絞り込むと PDF に関わる各種設定を一覧できます。Latex-workshop > View > Pdf: Viewer で PDF 表示のビューワーを設定します。（自動的に settings.json 中に "latex-workshop.view.pdf.viewer" の設定として書きこまれます。）

```
"latex-workshop.view.pdf.viewer": "設定"
```

<table>
<tbody>
<tr><td style="background-color:#f0f0f0"><strong>設定</strong></td><td>説明</td></tr>
<tr><td style="background-color:#f0f0f0">none</td><td>既定の PDF ビューワーを設定しない</td></tr>
<tr><td style="background-color:#f0f0f0">tab</td><td>PDF をタブ表示する</td></tr>
<tr><td style="background-color:#f0f0f0">browser</td><td>既定の web ブラウザで開く</td></tr>
<tr><td style="background-color:#f0f0f0">external</td><td>外部ビューワーで開く</td></tr>
</tbody>
</table>

external を指定した際には，さらにそのビューワーを latex-workshop.view.pdf.external.command で別途指定します。（指定されていない場合は，OS のデフォルトの PDF ビューワーが用いられます。）

### SumatraPDF との synctex 連携 {#g142ea7e}

- [https://github.com/James-Yu/LaTeX-Workshop/wiki/View#synctex](https://github.com/James-Yu/LaTeX-Workshop/wiki/View#synctex)

#### forward and inverse search {#a05fb9f6}

settings.json の {} の中に以下の設定を追加・保存します。&lt;ユーザー名>の部分は自分のユーザー名に置き換えてください。

```
"latex-workshop.view.pdf.external.synctex.command": "C:/Users/<ユーザー名>/AppData/Local/SumatraPDF/SumatraPDF.exe",
"latex-workshop.view.pdf.external.synctex.args": [
"-reuse-instance",
"%PDF%",
"-forward-search",
"%TEX%",
"%LINE%",
"-inverse-search",
"\"C:\\Users\\<ユーザー名>\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\out\\cli.js\" --ms-enable-electron-run-as-node -r -g \"%f:%l\""
]
```

#### forward search {#g7538c56}

settings.json の {} の中に以下の設定を追加・保存します。&lt;ユーザー名>の部分は自分のユーザー名に置き換えてください。

```
"latex-workshop.view.pdf.external.synctex.command": "C:/Users/<ユーザー名>/AppData/Local/SumatraPDF/SumatraPDF.exe",
"latex-workshop.view.pdf.external.synctex.args": [
"-reuse-instance",
"%PDF%",
"-forward-search",
"%TEX%",
"%LINE%"
]
```

#### inverse search {#lc044abd}

SumatraPDF の \[☰\] &gt; \[設定(S)\] &gt; \[オプション(O)...\] の「逆順検索コマンドラインの設定」に以下の設定をします。&lt;ユーザー名>の部分は自分のユーザー名に置き換えてください。

```
"C:\Users\<ユーザー名>\AppData\Local\Programs\Microsoft VS Code\Code.exe" "C:\Users\<ユーザー名>\AppData\Local\Programs\Microsoft VS Code\resources\app\out\cli.js" --ms-enable-electron-run-as-node -r -g "%f:%l"
```

### 便利な設定 {#o2d1e90d}

settings.json に設定を記述することでVS Code や LaTeX Workshop の動作を変更できます。Ctrl+Comma (Cmd+Comma) で「設定(Settings)」 タブを開き，「設定の検索」で適切なキーワードで絞り込んでビジュアルに設定することもできます。

#### コンパイル時に生成されたファイルを自動削除 {#he95e080}

自動削除するファイルの拡張子を設定し，コンパイル後の自動削除の設定を記述します。常に自動削除する設定とした場合は，目次作成や synctex に必要なファイルが削除されないよう，一覧から".toc"や"\*.synctex.gz"は外しておく必要があります。（".toc"が削除されると目次が生成されず，"\*.synctex.gz"が削除されると，synctex が効かなくなります。）

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
<tr><td style="background-color:#f0f0f0"><strong>設定</strong></td><td>説明</td></tr>
<tr><td style="background-color:#f0f0f0">never</td><td>自動削除機能を利用しない</td></tr>
<tr><td style="background-color:#f0f0f0">onFailed</td><td>コンパイルに失敗したときにのみ上記の拡張子のファイルを自動削除</td></tr>
<tr><td style="background-color:#f0f0f0">onBuilt</td><td>コンパイルのたびに上記の拡張子のファイルを自動削除</td></tr>
</tbody>
</table>

#### コンパイル時に PDF をカーソル位置で表示 {#c28e23e4}

synctex を有効にしてコンパイルしたときに，tex 文書のカーソル位置で PDF を表示するように設定できます。

```
"latex-workshop.synctex.afterBuild.enabled": true
```

true/false で設定が切り替わります。（この設定値には引用符は必要ありません。）

#### 日本語の単語区切りを設定する {#u7d79829}

単語移動を行いやすくするため日本語の句読点や括弧類を単語区切りとして設定します。

```
"editor.wordSeparators": "./\\()\"'-:,.;<>~!@#$%^&*|+=[]{}`~?．。，、（）「」［］｛｝《》",
```

助詞も単語区切りに設定するならば，以下のように設定します。

```
"editor.wordSeparators": "./\\()\"'-:,.;<>~!@#$%^&*|+=[]{}`~?．。，、（）「」［］｛｝《》てにをはがのともへでや",
```

#### 日本語文書特有の LaTeX Font Warning を警告表示に含めないようにする {#n019e1af}

和文フォントでイタリック体や斜体などが指定されていないときに出る "LaTeX Font Warning: Font shape \`JY1/mc/m/it' undefined" などの[警告](</よくある質問/#bf583189>)が「問題(Problems)パネル」に表示されないよう設定できます。実際のログは「出力(Output)パネル」から確認できます。

```
"latex-workshop.message.latexlog.exclude":["(Font shape `(JY1|JT1|JY2|JT2)(/.*)(sl|it|sc)'.*|Some font shapes were not available.*)"]
```

### 既知の不具合 {#n5df1b94}

#### macOS でかな漢字変換の途中で backspace を押すと意図しない制御文字が挿入される {#r2fc8a4f}

VS Code の不具合。対応策として，その制御文字を自動的に取り除くため拡張機能の Remove backspace control character を導入します。

- [Visual Studio Code の日本語問題まとめ](https://qiita.com/EbXpJ6bp/items/e6a0ed52bdcb60bfd145)

#### 以下の extension とは共存できません {#e01a16d3}

LaTeX Workshop と同時に使用すると CPU 負荷が高くなり，大きなファイルで作業するときに Enter キーへの反応が遅くなります。

- [https://github.com/James-Yu/LaTeX-Workshop/wiki/FAQ](https://github.com/James-Yu/LaTeX-Workshop/wiki/FAQ)
    - Spell Right
    - Brackets Pair Colorizer 2
    - Prettify Symbols Mode
