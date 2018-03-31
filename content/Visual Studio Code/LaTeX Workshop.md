---
title: "Visual Studio Code/LaTeX Workshop"
url: "/Visual Studio Code/LaTeX Workshop/"
date: 2018-03-31T13:59:49Z
pukiwiki: "Visual Studio Code/LaTeX Workshop"
---

# Visual Studio Code/LaTeX Workshop

[Visual Studio Code](</Visual Studio Code/>) &gt; LaTeX Workshop

### LaTeX Workshop {#b34f0500}

LaTeX Workshop は Visual Studio Code で LaTeX のタイプセットをするための extension です。

- [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)
    - [https://marketplace.visualstudio.com/items/James-Yu.latex-workshop/changelog](https://marketplace.visualstudio.com/items/James-Yu.latex-workshop/changelog)
- [https://github.com/James-Yu/LaTeX-Workshop](https://github.com/James-Yu/LaTeX-Workshop)
    - [https://github.com/James-Yu/LaTeX-Workshop/commits/master](https://github.com/James-Yu/LaTeX-Workshop/commits/master)
    - [https://github.com/James-Yu/LaTeX-Workshop/blob/master/CHANGELOG.md](https://github.com/James-Yu/LaTeX-Workshop/blob/master/CHANGELOG.md)
- [VSCode でLatexの日本語環境を作る](https://gist.github.com/Ikuyadeu/204d06fffd912f441b383eb02463e29b)

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

Windows で Latexmk-LuaLaTeX を使用する場合は右側に表示されている settings.json に以下の設定を追加・保存してデフォルトの設定を上書きします。

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

macOS, Linux で Latexmk-upLaTeX を使用する場合は右側に表示されている settings.json に以下の設定を追加・保存してデフォルトの設定を上書きします。

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

macOS, Linux で Latexmk-LuaLaTeX を使用する場合は右側に表示されている settings.json に以下の設定を追加・保存してデフォルトの設定を上書きします。

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

#### 使い方 {#mdd9327c}

ファイルの内容を変更して Ctrl+S で保存するとビルドコマンドが実行されます。ファイルの内容を変更していない状態でビルドコマンドを実行したい場合は Ctrl+Alt+B あるいは右クリック → Build LaTeX project でビルドコマンドを実行します。

Ctrl+Alt+V あるいは右上の PDF ファイルのアイコンを左クリックで右側に新しいタブで PDF ファイルを表示します。右クリック → SyncTeX from cursor で forward search，Ctrl+左クリックで inverse search を行います。

右クリック → LaTeX Workshop: All actions あるいは左下のチェックマークをクリックで以下のリストが表示されリストの項目から Action を選択すると実行されます。

> Build LaTeX project<br>
> View LaTeX PDF<br>
> View log messages<br>
> Miscellaneous LaTeX functions<br>
> Create an issue on Github<br>
> Star the project<br>
