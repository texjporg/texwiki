---
title: "Mozilla Firefox"
url: "/Mozilla Firefox/"
date: 2012-12-16T00:16:35Z
pukiwiki: "Mozilla Firefox"
---

# Mozilla Firefox

## [Mozilla Firefox](http://www.mozilla.jp/firefox/) {#q0ddbe38}

<img src="http://upload.wikimedia.org/wikipedia/commons/e/e7/Mozilla_Firefox_3.5_logo_256.png" alt="Mozilla Firefox" style="float:right">

### Mozilla Firefox とは {#if26ee34}

Mozilla Firefox は Mozilla が開発している Web ブラウザです．<br>

### 派生版 {#qf4f5dc1}

- [Waterfox](http://www.waterfoxproject.org/)

### [pdf.js](http://mozilla.github.com/pdf.js/) {#n3aa2497}

pdf.js は JavaScript で書かれた PDF Viewer です．<br>
Firefox 15 で PDF Viewer が組み込まれました．<br>
Firefox 19 で PDF Viewer がデフォルトで有効になりました．<br>

- [pdf.js](http://mozilla.github.com/pdf.js/)
- [pdf.js：PDF を HTML5 と JavaScript で表示する](https://dev.mozilla.jp/2012/07/pdf-js/)

#### 設定方法 {#u5cf20d8}

Mozilla Firefox 19.0 以降ではデフォルトで PDF Viewer が有効になっているので何も設定する必要はありません．<br>

Mozilla Firefox 19.0 よりも前のバージョンでは Mozilla Firefox のアドレスバーに

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

### 関連リンク {#vb4554e0}

- [Get Firefox URL?](http://stackoverflow.com/questions/430614/get-firefox-url)
- [pdf.jsをインストールして動かしてみる](http://dev.classmethod.jp/tool/pdf-js-install/)
- [Firefox 19でPDFの文字が表示されない・文字化けする場合の設定](http://dtp.jdash.info/archives/51993479.html)
