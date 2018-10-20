---
title: "Visual Studio Code/LaTeX Workshop"
url: "/Visual Studio Code/LaTeX Workshop/"
date: 2018-03-31T13:59:49Z
pukiwiki: "Visual Studio Code/LaTeX Workshop"
---

# Visual Studio Code/LaTeX Workshop

[Visual Studio Code](</Visual Studio Code/>) &gt; LaTeX Workshop

### LaTeX Workshop {#b34f0500}

LaTeX Workshop は Visual Studio Code に LaTeX の統合環境を追加する extension です。

- [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)
    - [https://marketplace.visualstudio.com/items/James-Yu.latex-workshop/changelog](https://marketplace.visualstudio.com/items/James-Yu.latex-workshop/changelog)
- [https://github.com/James-Yu/LaTeX-Workshop](https://github.com/James-Yu/LaTeX-Workshop)
    - [https://github.com/James-Yu/LaTeX-Workshop/commits/master](https://github.com/James-Yu/LaTeX-Workshop/commits/master)
    - [https://github.com/James-Yu/LaTeX-Workshop/blob/master/CHANGELOG.md](https://github.com/James-Yu/LaTeX-Workshop/blob/master/CHANGELOG.md)
- [MyTeXpert:Visual Studio Code/LaTeX Workshop](https://web.archive.org/web/20211022201430/https://mytexpert.osdn.jp/?Visual%20Studio%20Code%2FLaTeX%20Workshop)

#### 設定 {#f7cc6d6c}

Ctrl+Comma で既定の設定と settings.json を開きます。左側に表示されている既定の設定の LaTeX Workshop configuration を選択します。
デフォルトでは latex-workshop.latex.tools が以下のように設定されています。

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
  ],
```

Windows で Latexmk-upLaTeX を使用する場合は右側に表示されている settings.json に以下の設定を追加・保存してデフォルトの設定を上書きします。

```
{
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
}
```

Windows で Latexmk-LuaLaTeX を使用する場合は右側に表示されている settings.json に以下の設定を追加・保存してデフォルトの設定を上書きします。

```
{
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
}
```

macOS, Linux で Latexmk-upLaTeX を使用する場合は右側に表示されている settings.json に以下の設定を追加・保存してデフォルトの設定を上書きします。

```
{
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
}
```

macOS, Linux で Latexmk-LuaLaTeX を使用する場合は右側に表示されている settings.json に以下の設定を追加・保存してデフォルトの設定を上書きします。

```
{
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
}
```

#### 使い方 {#mdd9327c}

ファイルの内容を変更して Ctrl+S で保存するとビルドコマンドが実行されます。ファイルの内容を変更していない状態でビルドコマンドを実行したい場合は Ctrl+Alt+B でビルドコマンドを実行します。

Ctrl+Alt+V あるいは右上の PDF ファイルのアイコンを左クリックで指定した PDF ビューアで PDF ファイルを表示します。デフォルトでは右側に新しいタブで PDF ファイルを表示します。Ctrl+Alt+J で forward search，Ctrl+左クリックで inverse search を行います。

Ctrl+Alt+X あるいは左側の Activity Bar の TeX アイコンをクリックで以下のリストが表示されリストの項目から Action を選択すると実行されます。

> Build LaTeX project<br>
> View LaTeX PDF<br>
> View Log messages<br>
> Navigate, select, and exit<br>
> Miscellaneous<br>

## SumatraPDF との連携 {#d61e968a}

### forward search {#ydcc4b93}

settings.json に以下の設定を追加・保存します。

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

### inverse search {#he69ec2b}

SumatraPDF の \[☰\] &gt; \[設定(S)\] &gt; \[オプション(O)...\] の「逆順検索コマンドラインの設定」に以下の設定をします。

```
"C:\Program Files\Microsoft VS Code\bin\code.cmd" -g "%f:%l"
```
