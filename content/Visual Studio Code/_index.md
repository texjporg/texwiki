---
title: "Visual Studio Code"
url: "/Visual Studio Code/"
date: 2016-04-27T13:43:53Z
bookCollapseSection: true
pukiwiki: "Visual Studio Code"
---

# Visual Studio Code

## [Visual Studio Code](https://code.visualstudio.com/) {#s675b154}

Visual Studio Code はテキストエディタです．

***

***

### 動作環境 {#c3fb4bc4}

Windows, macOS, Linux

## Visul Studio Code の LaTeX Extension {#ab9306b3}

### LaTeX Workshop {#b34f0500}

- [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)
- [VSCode でLatexの日本語環境を作る](https://gist.github.com/Ikuyadeu/204d06fffd912f441b383eb02463e29b)
- [Visual Studio CodeでTeX](http://qiita.com/yakigac/items/9113bdb4bf12fdc0a0b0)
- [VS CodeからTeXのコンパイルを出来るようにするまで(仮)](http://mstn.hateblo.jp/entry/2017/06/09/163912)

#### 設定 (Windows) {#f7cc6d6c}

Ctrl+Comma で既定の設定と settings.json を開きます。左側に表示されている既定の設定の LaTeX Workshop configuration を選択します。
デフォルトでは latex-workshop.latex.toolchain が以下のように設定されています。

```
  "latex-workshop.latex.toolchain": [
    {
      "command": "latexmk",
      "args": [
        "-synctex=1",
        "-interaction=nonstopmode",
        "-file-line-error",
        "-pdf",
        "%DOC%"
      ]
    }
  ],
```

Windows で Latexmk-upLaTeX-pdfdvi を使用する場合は右側に表示されている settings.json に以下の設定を追加・保存してデフォルトの設定を上書きします。

```
    "latex-workshop.latex.toolchain": [
      {
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

#### 使い方 {#mdd9327c}

Ctrl+Alt+B でビルドします。

Ctrl+Alt+V でウェブブラウザで PDF ファイルを表示します。

Ctrl+Alt+T で新しいタブで PDF ファイルを表示します。

Ctrl+Alt+V あるいは Ctrl+Alt+T で PDF ファイルを表示して Ctrl+Alt+S で forward search，Ctrl+左クリックで inverse search を行います。

Ctrl+Alt+L で LaTeX Workshop Actions を表示します。

### その他の Extension {#d3eb8f1f}

- [VSCode Latex Preview Extension](https://marketplace.visualstudio.com/items?itemName=ajshort.latex-preview)
- [LaTeX Compile](https://marketplace.visualstudio.com/items/mathiasfrohlich.latexcompile)
- [VSCode-LaTeX](https://marketplace.visualstudio.com/items/ms-vscode.latex)
    - [SmatraPDFとVisualStudioCodeでSyncTeXする](http://qiita.com/netwing/items/9c25a3363ab8199709a5)
- [vscode-LaTeX にLine commenting 追加](http://what-alnk.hatenablog.com/entry/2016/06/21/180000)

## SumatraPDF との連携 {#d61e968a}

### inverse search {#he69ec2b}

```
"C:\Program Files (x86)\Microsoft VS Code\Code.exe" -g "%f:%l"
```
