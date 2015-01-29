---
title: "Xpdf"
url: "/Xpdf/"
date: 2013-10-22T16:59:41Z
pukiwiki: "Xpdf"
---

# Xpdf

## Xpdf {#z338a0d1}

<span style="font-size:25px">PDF ビューアとして Xpdf を利用するのは，現在非推奨です！</span>

[Poppler](/Poppler/) を使用した PDF ビューア
（[Evince](/Evince/), [Okular](/Okular/), [zathura](/zathura/), [qpdfview](/qpdfview/), [TeXworks](/TeXworks/) など）
または [MuPDF](/MuPDF/) を使用してください．

ただし，Xpdf に含まれるいくつかの [PDF](/PDF/) 操作ツールは，現在でも非常に有用です．
ここでは，そのようなツールを紹介します．

<!-- とりあえず項目を復活させました． -->
<!-- ビューアとして obsolete な理由説明がほしいです． -->
<!-- W32TeX 関連の記載以外は検証していません． -->
<!-- // OS X の MacPorts, Homebrew について追記しました． -->
<!-- // 検証などお願いします． -->
<!-- // // Windows の TeX Live の場合を追記しました． -->
<!-- // // セットアップ方法の追記をお願いします． -->

### 目次 {#ma1fb0b0}

### 公式サイト {#t19ccac8}

- [http://www.foolabs.com/xpdf/](http://www.foolabs.com/xpdf/)

### License {#f73d7f45}

GPLv3, GPLv2

## Xpdf のツール一覧 {#y19ebf12}

PDF ビューアである xpdf のほかに，次のようなツールが存在します．

- pdfimages ： PDF から画像を抽出する
- pdffonts ： PDF のフォント情報を表示
- pdfinfo ： PDF の文書情報を表示
- pdftops ： PDF を [PostScript](/PostScript/) ファイルに変換
- pdftoppm ： PDF を PPM 画像形式に変換
- pdftotext ： PDF からテキストを抽出
- pdftopng ： PDF の各ページを PNG に変換
- pdftohtml ： PDF を HTML に変換
- pdfdetach ： PDF にアタッチされた部分をファイルとして抜き出すプログラム

## インストール方法 {#jb8870ec}

### Windows {#za509c90}

[W32TeX](/W32TeX/) には，
Xpdf に含まれる便利な PDF 操作ツールのバイナリ (.exe) が収録されています．
以下が利用できます：

- pdfimages, pdffonts, pdfinfo, pdftops, pdftoppm,
    pdftotext, pdftopng, pdftohtml, pdfdetach

なお，インストールを完成させるには [forum:1342](https://okumuralab.org/tex/mod/forum/discuss.php?d=1342) をお読み下さい．

[TeX Live](</TeX Live/>) には Xpdf が含まれていないので，別途インストールします．

[CTAN の Xpdf のページ](http://www.ctan.org/tex-archive/support/xpdf)から，
ビルド済みバイナリのアーカイブが入手できます．

### OS X {#ua3cd20e}

[TeX Live](</TeX Live/>) には Xpdf が含まれていないので，別途インストールします．

#### 最も簡単な方法 {#i83bff45}

[マスクメロンの Xpdf.app](http://www.muskmelon.jp/?page_id=86) をダウンロードし，
Applications フォルダにインストールします．
/Applications/Xpdf.app 及び /Applications/Xpdf.app/bin にこの順番でパスを通します．
ターミナルから

```
export PATH=/Applications/Xpdf.app:/Applications/Xpdf.app/bin:$PATH
```

を実行してください．
既に言語設定は済んでいるので，特別な操作は不要です．
以下が利用可能になります：

- pdfimages, pdffonts, pdfinfo, pdftops, pdftoppm,
    pdftotext, pdfdetach

#### パッケージ管理システムを用いる方法 {#sc414cd6}

MacPorts や Homebrew を用いた xpdf のインストールも可能です．

さらに言語設定が必要です．
（以下のディレクトリ名は MacPorts の場合．Homebrew なら /opt/local ではなく /usr/local/ のはず）
日本語を用いる場合は xpdf-japanese もインストールし，
/opt/local/etc/xpdfrc を編集します．

```
#textEncoding		UTF-8
```

のコメントアウトを外します．さらに

```
cidToUnicode  Adobe-Japan1  /opt/local/share/xpdf/xpdf-japanese/Adobe-Japan1.cidToUnicode
unicodeMap    ISO-2022-JP   /opt/local/share/xpdf/xpdf-japanese/ISO-2022-JP.unicodeMap
unicodeMap    EUC-JP        /opt/local/share/xpdf/xpdf-japanese/EUC-JP.unicodeMap
unicodeMap    Shift-JIS     /opt/local/share/xpdf/xpdf-japanese/Shift-JIS.unicodeMap
cMapDir       Adobe-Japan1  /opt/local/share/xpdf/xpdf-japanese/CMap
toUnicodeDir                /opt/local/share/xpdf/xpdf-japanese/CMap
```

と追記します．
これで以下が利用可能になります：

- pdfimages, pdffonts, pdfinfo, pdftops, pdftoppm,
    pdftotext, pdfdetach

% MacPorts の場合は，どうやらバイナリ名に接頭語 xpdf- が付いている…？ Homebrew のほうは使ったことがありません．

参考：[xpdfを使ってPDFから日本語抽出](http://akkunchoi.github.io/xpdf-japanese.html)

- [/trunk/dports/graphics/xpdf/Portfile](https://trac.macports.org/browser/trunk/dports/graphics/xpdf/Portfile)
- [homebrew/Library/Formula/xpdf.rb](https://github.com/mxcl/homebrew/blob/master/Library/Formula/xpdf.rb)

### Linux {#a0b844a2}

- [LinuxWiki:Xpdf](https://okumuralab.org/~okumura/linux/?Xpdf) を参照．

## お知らせ {#m0130ecc}

- [［改訂第6版］LaTeX2e 美文書作成入門サポートページ](http://oku.edu.mie-u.ac.jp/~okumura/bibun6/)に，「pdftotextと本書PDF版の相性問題」と題して，Xpdf 付属の pdftotext で当該書籍の PDF 版をテキスト化する場合の注意点が記されています．

## 関連リンク {#fb8962ad}

- [http://www.ctan.org/tex-archive/support/xpdf](http://www.ctan.org/tex-archive/support/xpdf)
- Forum「xpdf utilities」
    [forum:1342](https://okumuralab.org/tex/mod/forum/discuss.php?d=1342)

- Forum「Xpdf内蔵のコマンドで日本語エラー」
    [forum:1104](https://okumuralab.org/tex/mod/forum/discuss.php?d=1104)

- [xpdf - MyTeXpert](http://mytexpert.sourceforge.jp/index.php?xpdf)
- [XPDFパッケージの使い方](http://konoyonohana.blog.fc2.com/blog-entry-48.html)
