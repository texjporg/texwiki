---
title: "Adobe Reader"
url: "/Adobe Reader/"
date: 2011-09-11T19:13:04Z
pukiwiki: "Adobe Reader"
---

# Adobe Reader

## [Adobe Reader](http://www.adobe.com/jp/products/reader.html) {#a3d16439}

## ダウンロード {#ne09e93f}

- [http://get.adobe.com/jp/reader/](http://get.adobe.com/jp/reader/)
- [ftp://ftp.adobe.com/pub/adobe/reader/win/](ftp://ftp.adobe.com/pub/adobe/reader/win/)
- [ftp://ftp.adobe.com/pub/adobe/reader/mac/](ftp://ftp.adobe.com/pub/adobe/reader/mac/)
- [ftp://ftp.adobe.com/pub/adobe/reader/unix/](ftp://ftp.adobe.com/pub/adobe/reader/unix/)

## Adobe Reader をコマンドラインから操作する方法 {#f9d733e4}

### PDF ファイルを開く {#id6d0918}

```
pdfopen --file hoge.pdf
echo open hoge.pdf | pdfdde
```

### PDF ファイルを閉じる {#h619779d}

```
pdfclose --file hoge.pdf
echo close hoge.pdf | pdfdde
```

### Adobe Reader を終了する {#pb5aeda1}

```
echo exit | pdfdde
```
