---
title: "Google Chrome"
url: "/Google Chrome/"
date: 2012-10-09T17:08:39Z
pukiwiki: "Google Chrome"
---

# Google Chrome

## [Google Chrome](https://www.google.com/chrome)/[Chromium](http://www.chromium.org/) {#m72f98a3}

Google Chrome は Google が開発している Web ブラウザです．

Chromium は Google Chrome で使用されているオープンソースの Web ブラウザです．

***

***

### ダウンロード/インストール {#m19ade28}

- [Download latest stable Chromium binaries (64-bit and 32-bit)](http://chromium.woolyss.com/)

### 派生版 {#gc229b7d}

- [Chromium派生ブラウザ総合 まとめWiki](http://www49.atwiki.jp/chromiumbased/)

### コマンドラインオプション {#r806460f}

- [List of Chromium Command Line Switches](https://peter.sh/experiments/chromium-command-line-switches/)

## プラグイン {#y795a936}

ブラウザ ウィンドウの上部にあるアドレスバーに

```
about:plugins
```

または

```
chrome://plugins
```

を入力すると，各プラグインの有効・無効を切り替えられます．

### Chrome/Chromium PDF Viewer <a id="chromepdfviewer"></a> {#wfd819f9}

#### PDFium <a id="pdfium"></a> {#l83f1380}

PDFium は Google Chrome, Chromium に組み込まれている PDF レンダリングエンジンです．

- [https://pdfium.googlesource.com/pdfium/](https://pdfium.googlesource.com/pdfium/)
- [https://bugs.chromium.org/p/pdfium/issues/list](https://bugs.chromium.org/p/pdfium/issues/list)

#### PDFium.js <a id="pdfiumjs"></a> {#ead12fcd}

PDFium.js は PDFium を JavaScript に移植したものです．

- [http://coolwanglu.github.io/PDFium.js/](http://coolwanglu.github.io/PDFium.js/)
- [http://coolwanglu.github.io/PDFium.js/viewer/](http://coolwanglu.github.io/PDFium.js/viewer/)
- [https://github.com/coolwanglu/PDFium.js](https://github.com/coolwanglu/PDFium.js)

#### PDF Viewer (PDF.js) {#q878e075}

- [https://chrome.google.com/webstore/detail/pdf-viewer/oemmndcbldboiebfnladdacbdfmadadm](https://chrome.google.com/webstore/detail/pdf-viewer/oemmndcbldboiebfnladdacbdfmadadm)

## SyncTeX {#r4505425}

### forward search {#f834d602}

TeX ファイルの 30 行目に対応する PDF ファイルの該当するページにジャンプしたい場合は

```
synctex view -i "30:0:hoge.tex" -o "%CD%/hoge.pdf" -x "rundll32 shell32,ShellExec_RunDLL chrome --new-window '%{output}#page=%{page+1}'"
```

のように実行します．

## ⋮ &gt; 設定 &gt; デザイン &gt; フォントをカスタマイズ {#zcb6330d}

Windows Update によるフォント設定の更新

### 更新後 {#f9c1c618}

標準フォント
: Noto Sans JP

Serif フォント
: Noto Serif JP

Sans Serif フォント
: Noto Sans JP

<!-- :固定幅フォント|BIZ UDGothic -->
<!-- :数字フォント|Cambria Math -->

### 更新前 {#e4492738}

標準フォント
: Meiryo

Serif フォント
: Yu Mincho

Sans Serif フォント
: Meiryo

<!-- :固定幅フォント|BIZ UDGothic -->
<!-- :数字フォント|Cambria Math -->
