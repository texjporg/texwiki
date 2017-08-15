---
title: "Visual Studio Code"
url: "/Visual Studio Code/"
date: 2016-04-27T13:43:53Z
bookCollapseSection: true
pukiwiki: "Visual Studio Code"
---

# Visual Studio Code

## [Visual Studio Code](https://code.visualstudio.com/) {#s675b154}

Visual Studio Code は軽量で高機能なテキストエディタです．JavaScript, TypeScript, Node.js を組み込みでサポートしています．

***

***

### 動作環境 {#c3fb4bc4}

Windows, macOS, Linux

### License {#n8c65cf9}

MIT License

## Visul Studio Code の LaTeX Extension {#ab9306b3}

### LaTeX Workshop {#b34f0500}

LaTeX Workshop は Visual Studio Code で LaTeX のタイプセットをするための extension です。

- [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)
    - [https://marketplace.visualstudio.com/items/James-Yu.latex-workshop/changelog](https://marketplace.visualstudio.com/items/James-Yu.latex-workshop/changelog)
- [https://github.com/James-Yu/LaTeX-Workshop](https://github.com/James-Yu/LaTeX-Workshop)
    - [https://github.com/James-Yu/LaTeX-Workshop/commits/master](https://github.com/James-Yu/LaTeX-Workshop/commits/master)
    - [https://github.com/James-Yu/LaTeX-Workshop/blob/master/CHANGELOG.md](https://github.com/James-Yu/LaTeX-Workshop/blob/master/CHANGELOG.md)
- [VSCode でLatexの日本語環境を作る](https://gist.github.com/Ikuyadeu/204d06fffd912f441b383eb02463e29b)
- [Visual Studio CodeでTeX](http://qiita.com/yakigac/items/9113bdb4bf12fdc0a0b0)
- [VS CodeからTeXのコンパイルを出来るようにするまで(仮)](http://mstn.hateblo.jp/entry/2017/06/09/163912)

#### LaTeX Workshop \[3.3.2\] - 2017-08-15（LaTeX Workshop \[3.3.0\] - 2017-08-08 以降）で PDF ファイルを表示すると日本語が表示されない {#d86f44c2}

[LaTeX Workshop \[3.2.2\] - 2017-08-07 までは viewer/web/cmaps フォルダーが存在していた](https://github.com/James-Yu/LaTeX-Workshop/tree/edd12a5e11ff5f48fdb3cd60ee63801057de592a/viewer/web/cmaps)ため日本語が表示できていましたが [LaTeX Workshop \[3.3.0\] - 2017-08-08 で削除](https://github.com/James-Yu/LaTeX-Workshop/commit/0a0d227a435877f0c1a2043cc87355797f2610f5)され日本語が表示されなくなったようです。

LaTeX Workshop \[3.3.2\] - 2017-08-15（LaTeX Workshop \[3.3.0\] - 2017-08-08 以降）で PDF ファイルを表示すると日本語が表示されません。

日本語を表示するためには以下の作業を実行します。

1. [http://mozilla.github.io/pdf.js/getting_started/#download](http://mozilla.github.io/pdf.js/getting_started/#download) から PDF.js の Pre-built の Stable をクリックして zip ファイルをダウンロードして展開する
1. 展開したファルダーの中にある web フォルダーをクリックすると cmaps フォルダーがあるので cmaps フォルダーを<br>Windows の場合は %USERPROFILE%\\.vscode\extensions\James-Yu.latex-workshop-3.3.2\viewer\\<br>macOS, Linux の場合は $HOME/.vscode/extensions/James-Yu.latex-workshop-3.3.2/viewer/<br>フォルダーにコピーする
1. Windows の場合は %USERPROFILE%\\.vscode\extensions\James-Yu.latex-workshop-3.3.2\viewer\viewer.js<br>macOS, Linux の場合は $HOME/.vscode/extensions/James-Yu.latex-workshop-3.3.2/viewer/viewer.js<br>を開いて

    ```
    PDFJS.cMapUrl = '../web/cmaps/';
    ```

    を

    ```
    PDFJS.cMapUrl = 'cmaps/';
    ```

    に修正して保存する

以上の作業で日本語が表示されるようになります。

#### 設定 {#f7cc6d6c}

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

macOS, Linux で Latexmk-upLaTeX-pdfdvi を使用する場合は右側に表示されている settings.json に以下の設定を追加・保存してデフォルトの設定を上書きします。

```
    "latex-workshop.latex.toolchain": [
      {
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

#### 使い方 {#mdd9327c}

ファイルの内容を変更して Ctrl+S で保存するとビルドコマンドが実行されます。ファイルの内容を変更していない状態でビルドコマンドを実行したい場合は 右クリック → Build LaTeX project あるいは Ctrl+Alt+B でビルドコマンドを実行します。

右上の PDF ファイルのアイコンを左クリックあるいは Ctrl+Alt+T で右側に新しいタブで PDF ファイルを表示します。右クリック → SyncTeX from cursor あるいは Ctrl+Alt+S で forward search，Ctrl+左クリックで inverse search を行います。

Ctrl+Alt+V でウェブブラウザで PDF ファイルを表示します。右クリック → SyncTeX from cursor あるいは Ctrl+Alt+S で forward search，Ctrl+左クリックで inverse search を行います。

右クリック → LaTeX Workshop: All actions あるいは Ctrl+Alt+L で Please Select LaTeX Workshop Actions が表示され以下のリストから Action を選択すると実行されます。

> Build LaTeX project<br>
> View PDF file in web page<br>
> View PDF file in new tab<br>
> SyncTeX from cursor<br>
> Clean up auxiliary files<br>
> Open citation browser<br>
> Count words in LaTeX document<br>
> Show LaTeX log<br>
> Open LaTeX Workshop change log<br>
> Create an issue on Github<br>
> Star the project<br>

### その他の Extension {#d3eb8f1f}

- [LaTeX Preview](https://marketplace.visualstudio.com/items?itemName=ajshort.latex-preview)
- [LaTeX Compile](https://marketplace.visualstudio.com/items/mathiasfrohlich.latexcompile)
- [VSCode-LaTeX](https://marketplace.visualstudio.com/items/ms-vscode.latex)
    - [vscode-LaTeX にLine commenting 追加](http://what-alnk.hatenablog.com/entry/2016/06/21/180000)

## SumatraPDF との連携 {#d61e968a}

- [SmatraPDFとVisualStudioCodeでSyncTeXする](http://qiita.com/netwing/items/9c25a3363ab8199709a5)

### inverse search {#he69ec2b}

```
"C:\Program Files\Microsoft VS Code\Code.exe" -g "%f:%l"
```
