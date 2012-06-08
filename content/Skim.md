---
title: "Skim"
url: "/Skim/"
date: 2012-06-08T19:28:27Z
pukiwiki: "Skim"
---

# Skim

## [Skim](http://skim-app.sourceforge.net/) {#icc6746f}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## Skim とは {#mcac8dfe}

Skim は OS X で動作する SyncTeX に対応した PDF ビューアです．<br>
DVI ファイルも PDF ファイルに変換して表示してくれます<br>
[dvipdfmx](/dvipdfmx/) が標準的な場所にないときは defaults write -app Skim SKDviConversionCommand -string /path/dvipdfmx で設定します<br>

- [Skim](http://skim-app.sourceforge.net/)

## ChangeLog {#l1a8874a}

- [コミットログ](http://skim-app.svn.sourceforge.net/viewvc/skim-app/trunk/?view=log)

## 不具合 {#obddc9fb}

- [Version 1.3.11 にはファイルの自動更新機能に不具合があるようです](http://sourceforge.net/tracker/?func=detail&aid=3180818&group_id=192583&atid=941981) → Version 1.3.12 で修正されました (Fix automatic file updating.)
- Version 1.3.20 で displayline が修正されました (Fix displayline script for SyncTeX support for Lion.)

## forward search {#c02e2c91}

- SyncTeX による forward search を行う場合は Skim に含まれている [displayline](http://skim-app.svn.sourceforge.net/viewvc/skim-app/trunk/displayline?view=markup) を使用します

## 関連リンク {#a3af5ca3}

- [PDF ViewerのSkimでTeXのdviファイルを見る](http://njet.oops.jp/wordpress/2011/01/27/pdf-viewer%E3%81%AEskim%E3%81%A7tex%E3%81%AEdvi%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E8%A6%8B%E3%82%8B/)
