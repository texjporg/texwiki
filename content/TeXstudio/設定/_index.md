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

\[オプション(O)\] &gt; \[TeXstudioの設定(C)\] で設定画面が表示されます．
TeXstudio では LaTeX のタイプセットを

- 「ビルド」の項目で，どのスキームで処理するか選択する
    - TeX → PDF なのか TeX → DVI → PDF なのか TeX → DVI → PS → PDF なのか、等
- 「コマンド」の項目で，ビルド中に実行する具体的なコマンドを設定する
    - DVI → PDF には dvipdfmx というコマンドを使う、等

のように二段階で設定する仕組みになっています．

### ビルド {#cb495de1}

#### LuaLaTeX の場合 {#y37f86ee}

LuaLaTeX で PDF ファイルを表示する場合は

- ビルド &amp; 表示：「コンパイル &amp; 表示」
- 既定のコンパイラ：「LuaLaTeX」

と設定します．

#### upLaTeX + dvipdfmx の場合 {#za4fa38f}

日本語環境で最も広く用いられているのは，LaTeX で DVI ファイルを作成して dvipdfmx によって PDF に変換するスキームです。
これらを一気に実行して PDF ファイルを表示する場合は

- ビルド &amp; 表示：「DVI->PDFチェーン」
- 既定のコンパイラ：「LaTeX」

と設定します．

#### PDF ビューア {#i921495a}

既定のビューワーを PDFビューア にしておくと，出来上がった PDF ファイルをその場で確認できます．

PDF ビューアは

- 組み込みPDFビューア（埋め込み）
- 組み込みPDFビューア（別枠）
- 外部PDFビューア

のいずれかを選択するようになっているので環境や用途に合わせて適切な PDF ビューアを選択してください．

<img src="/attach/TeXstudio/%E8%A8%AD%E5%AE%9A/TeXstudio-build-01.png" alt="">

### コマンド {#yc27e161}

{{< children >}}

を参照して「LaTeX」「DviPdf」「BibTeX」「Biber」「Makeindex」などの項目に具体的なコマンドを割り当てます．

### エディタ {#m95b4393}

デフォルトの文字コードは UTF-8 です．
日本語の文書を作成する場合はインラインチェックのチェックをはずします．

<img src="/attach/TeXstudio/%E8%A8%AD%E5%AE%9A/TeXstudio-editor-01.png" alt="">

### 高度なオプションの表示 {#r962ad23}

「高度なオプションの表示」をチェックすると詳細設定ができます．

### 詳細なエディタ設定 {#wbe91d52}

Qt 5 版の TeXstudio で日本語入力するとカーソルが文字の位置からずれたり日本語が重なって表示されたりする場合は，ここで回避策を行います．
この設定は「高度なオプションの表示」を ON にしてから行います．

1. ハック/回避策の「最適なディスプレイオプションの自動選択」を OFF にします．
1. 描画モードを「QCE（推奨）」から「Qt」に変更します．

<img src="/attach/TeXstudio/%E8%A8%AD%E5%AE%9A/TeXstudio-editor-detail-01.png" alt="">

デフォルトでは行番号を表示しませんので，行番号を表示したい場合は同じ画面上の「行番号を表示」で「すべての行番号」を選択します．

<img src="/attach/TeXstudio/%E8%A8%AD%E5%AE%9A/TeXstudio-editor-detail-02.png" alt="">

### 一般 {#w15e140c}

外観の設定ができます．

#### スタイル {#i9d82915}

Windows 版の TeXstudio では以下のスタイルが選択できます．

- windowsvista
- Windows
- Fusion
- Adwaita (txs)
- Adwaita Dark (txs)
- Orion Dark
- 既定

ダークテーマを使用したい場合はリストから

- Adwaita Dark (txs)
- Orion Dark

のどちらかを選択します．

#### 配色 {#s2c26a03}

- クラシック
- モダン
- モダン － ダーク

の中から選択できます．

#### Icon Theme {#d3b00909}

- Colibre
- Oxygen Modern
- Oxygen Classic

の中から選択できます．

### 設定ファイル {#g2cec334}

各 OS における設定ファイルの保管場所です．
TeXstudio の設定を完全に初期化したい場合や，アンインストール時に痕跡を完全に消したい場合は，このファイルも削除します．

> <table>
> <thead>
> <tr><th style="text-align:center">環境</th><th style="text-align:center">設定ファイルが保存されるフォルダー</th><th style="text-align:center">ファイル名</th></tr>
> </thead>
> <tbody>
> <tr><td>Windows (Installer)</td><td>%APPDATA%\texstudio\</td><td>texstudio.ini</td></tr>
> <tr><td>Windows (Portable)</td><td>TeXstudio の実行ファイルと同じフォルダー</td><td>texstudio.ini</td></tr>
> <tr><td>macOS</td><td>$HOME/.config/texstudio/</td><td>texstudio.ini</td></tr>
> <tr><td>Linux</td><td>$HOME/.config/texstudio/</td><td>texstudio.ini</td></tr>
> </tbody>
> </table>
>
