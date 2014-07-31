---
title: "Mozilla Firefox"
url: "/Mozilla Firefox/"
date: 2012-12-16T00:16:35Z
pukiwiki: "Mozilla Firefox"
---

# Mozilla Firefox

## [Mozilla Firefox](http://www.mozilla.jp/firefox/) {#q0ddbe38}

<img src="http://upload.wikimedia.org/wikipedia/commons/f/ff/Mozilla_Firefox_logo_2013.png" alt="Mozilla Firefox" width="256" height="256" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Mozilla Firefox とは {#if26ee34}

Mozilla Firefox は Mozilla が開発している Web ブラウザです．<br>

- [Mozilla Firefox](http://www.mozilla.jp/firefox/)

### リリース情報 {#me413eb4}

- [リリースノート](http://www.mozilla.jp/firefox/releases/)

### 派生版 {#qf4f5dc1}

#### Windows {#e6087dd8}

- [Comodo IceDragon](http://www.comodo.com/home/browsers-toolbars/icedragon-browser.php)
- [Pale Moon](http://www.palemoon.org/)
- [Waterfox](http://www.waterfoxproject.org/)

## [PDF.js](http://mozilla.github.io/pdf.js/) <a id="pdfjs"></a> {#n3aa2497}

PDF.js は JavaScript で書かれた PDF Viewer です．<br>
Mozilla Firefox 19 以降は PDF Viewer がデフォルトで有効になっています．<br>

- [PDF.js](http://mozilla.github.io/pdf.js/)
- [https://github.com/mozilla/pdf.js/wiki/Viewer-options](https://github.com/mozilla/pdf.js/wiki/Viewer-options)
- [https://addons.mozilla.org/ja/firefox/addon/pdfjs/](https://addons.mozilla.org/ja/firefox/addon/pdfjs/)
    <!-- -[[pdf.js：PDF を HTML5 と JavaScript で表示する:https://dev.mozilla.jp/2012/07/pdf-js/]] -->

Google Chrome でも PDF.js が動作するようです．<br>

- [https://chrome.google.com/webstore/detail/pdf-viewer/oemmndcbldboiebfnladdacbdfmadadm](https://chrome.google.com/webstore/detail/pdf-viewer/oemmndcbldboiebfnladdacbdfmadadm)

Opera でも PDF.js が動作するようです．<br>

- [https://github.com/operasoftware/pdf.js](https://github.com/operasoftware/pdf.js)
- [https://addons.opera.com/ja/extensions/details/pdf-viewer/](https://addons.opera.com/ja/extensions/details/pdf-viewer/)

### 設定方法 {#u5cf20d8}

Mozilla Firefox 19.0 以降はデフォルトで PDF Viewer が有効になっているので何も設定する必要はありません．<br>

PDF Viewer が有効になっていない場合は Mozilla Firefox のアドレスバーに

```
about:config
```

を入力します．<br>

動作保証対象外になります！といった警告が表示されます．<br>
「細心の注意を払って使用する」をクリックします．<br>

検索(<ins>R</ins>): に

```
pdfjs
```

を入力します．<br>
設定名の pdfjs.disabled をクリックして値を false にします．<br>

メニューのオプションからオプションをクリックします．<br>
プログラムタブのファイルの種類 (Content Type) の PDF 文書 (PDF) の取り扱い方法のリストから Firefox でプレビュー表示を選択します．<br>

### 派生版 {#icd1120b}

- [Laddu Reader](https://github.com/iraycd/laddu-reader)

## SyncTeX {#v2e4d11f}

### forward search {#l3d0efe3}

TeX ファイルの 30 行目に対応する PDF ファイルの該当するページにジャンプしたい場合は<br>

```
synctex view -i "30:0:hoge.tex" -o "hoge.pdf" -x "rundll32 shell32,ShellExec_RunDLL firefox -new-window '%{output}#page=%{page+1}'"
```

のように実行します．<br>

## 関連リンク {#vb4554e0}

- [Get Firefox URL?](http://stackoverflow.com/questions/430614/get-firefox-url)
- [Looking for document on command line arguments for PDF.js. | Firefox サポートフォーラム | Mozilla サポート](https://support.mozilla.org/ja/questions/951546)
- [pdf.jsをインストールして動かしてみる](http://dev.classmethod.jp/tool/pdf-js-install/)
- [Firefox 19でPDFの文字が表示されない・文字化けする場合の設定](http://dtp.jdash.info/archives/51993479.html)
