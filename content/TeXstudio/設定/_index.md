---
title: "TeXstudio/設定"
url: "/TeXstudio/設定/"
date: 2012-12-01T03:34:03Z
bookCollapseSection: true
pukiwiki: "TeXstudio/設定"
---

# TeXstudio/設定

[TeXstudio](/TeXstudio/) > 設定

***

***

## 設定 {#p076e369}

\[オプション(O)\]-\[TeXstudioの設定(C)\]

### 高度なオプションの表示 {#r962ad23}

高度なオプションの表示をチェックすると詳細設定ができます．

```
高度なオプションを有効化しました。
これで詳細にTXSを設定することが可能です。
一般的な設定のみを見るには再度高度なオプションを無効化してください。
```

### 設定ファイル {#g2cec334}

> <table>
> <thead>
> <tr><th style="text-align:center">環境</th><th style="text-align:center">設定ファイルが保存されるフォルダー</th><th style="text-align:center">ファイル名</th></tr>
> </thead>
> <tbody>
> <tr><td>Portable バージョン</td><td>TeXstudio の実行ファイルと同じフォルダー</td><td>texstudio.ini</td></tr>
> <tr><td>Windows</td><td>%APPDATA%\texstudio\</td><td>texstudio.ini</td></tr>
> <tr><td>UNIX, Linux, OS X</td><td>$HOME/.config/texstudio/</td><td>texstudio.ini</td></tr>
> </tbody>
> </table>
>

### コマンド {#yc27e161}

{{< children >}}

を参照して platex, pbibtex, biber, dvipdfmx, latexmk などの設定をします．

### ビルド {#cb495de1}

pLaTeX + dvipdfmx を実行して PDF ファイルを表示する場合は

- 既定のコンパイラ：「LaTeX」
- ビルド &amp; 表示：「DVI->PDFチェーン」

と設定します．
既定のビューワーを PDF にしておくと，出来上がった PDF ファイルをその場で確認できます．

<img src="/attach/TeXstudio/%E8%A8%AD%E5%AE%9A/TeXstudio-build-01.png" alt="">

[Latexmk](/Latexmk/) を実行して PDF ファイルを表示する場合は

- 既定のコンパイラ：「Latexmk」
- ビルド &amp; 表示：「コンパイル &amp; 表示」

に変更します．

### エディタ {#m95b4393}

デフォルトの文字コードは UTF-8 です．
日本語の文書を作成する場合はインラインチェックのチェックをはずします．

<img src="/attach/TeXstudio/%E8%A8%AD%E5%AE%9A/TeXstudio-editor-01.png" alt="">

### 詳細なエディタ設定 {#wbe91d52}

Qt 5 版の TeXstudio で日本語入力するとカーソルが文字の位置からずれる場合は，ここで回避策を行います．
この設定は「高度なオプションの表示」を ON にしてから行います．

1. ハック/回避策の「最適なディスプレイオプションの自動選択」を OFF にします．
1. 描画モードを「QCE（推奨）」から「Qt」に変更します．

<img src="/attach/TeXstudio/%E8%A8%AD%E5%AE%9A/TeXstudio-editor-detail-01.png" alt="">

デフォルトでは行番号を表示しませんので，行番号を表示したい場合は同じ画面上の「行番号を表示」で「すべての行番号」を選択します．

<img src="/attach/TeXstudio/%E8%A8%AD%E5%AE%9A/TeXstudio-editor-detail-02.png" alt="">

### 構文の強調表示 {#w15e140c}

- [http://tex.stackexchange.com/questions/108315/anyone-willing-to-share-his-her-custom-dark-theme-for-texstudio](http://tex.stackexchange.com/questions/108315/anyone-willing-to-share-his-her-custom-dark-theme-for-texstudio)
