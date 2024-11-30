---
title: "Xpdf"
url: "/Xpdf/"
date: 2013-10-22T16:59:41Z
pukiwiki: "Xpdf"
---

# Xpdf

## [Xpdf](https://www.xpdfreader.com/) --- PDF ビューア・操作ツール {#z338a0d1}

Xpdf は Windows, macOS, Linux で動作する PDF ビューア（XpdfReader）および PDF 操作ツール（Xpdf command line tools）です。

XpdfReader でトラブルが生じる場合は，[Poppler](/Poppler/) を使用した PDF ビューア（[Evince](/Evince/), [Okular](/Okular/), [zathura](/zathura/), [qpdfview](/qpdfview/), [TeXworks](/TeXworks/), [TeXstudio](/TeXstudio/) など）または [MuPDF](/MuPDF/) を利用してください。

<!-- とりあえず項目を復活させました。 -->
<!-- ビューアとして obsolete な理由説明がほしいです。 -->
<!-- // macOS の MacPorts, Homebrew について追記しました。 -->
<!-- // 検証などお願いします。 -->
<!-- // // Windows の TeX Live の場合を追記しました。 -->
<!-- // // セットアップ方法の追記をお願いします。 -->
<!-- MacPorts で xpdf をインストールすると xpdf- という接頭語が付いているのは， -->
<!-- Poppler 付属のバイナリと衝突するからのようです。 -->
<!-- 実際，MacPorts パッケージである xpdf-tools と poppler は衝突し， -->
<!-- 同時にインストールすることができません。 -->
<!-- Poppler のほうがなにかと充実していそうなので，後日検証してみますが， -->
<!-- 分岐してそれぞれ進化を遂げているようでもありますね。 - - アセトアミノフェン (2015-03-12) -->

***

***

### 公式サイト {#tbf3dbd3}

- [https://www.xpdfreader.com/](https://www.xpdfreader.com/)
- [https://www.glyphandcog.com/](https://www.glyphandcog.com/) （開発元の Glyph &amp; Cog のページ）

### お知らせ {#pd98a397}

Xpdf 4.00 で GUI に使用されるツールキットが Motif から Qt に変更されました。

現在の Linux ディストリビューションや TeX Live 2017 (windows) 以降に収録されているのは xpdf utilities ではなく poppler utilities です。

### Xpdf のツール一覧 {#tools}

PDF ビューアである [xpdf](https://www.xpdfreader.com/xpdf-man.html)（XpdfReader）のほかに，次のような PDF 操作ツール（Xpdf command line tools）も提供されています。

- [pdffonts](https://www.xpdfreader.com/pdffonts-man.html) ： PDF のフォント情報を表示
- [pdfimages](https://www.xpdfreader.com/pdfimages-man.html) ： PDF から画像を抽出する
- [pdfinfo](https://www.xpdfreader.com/pdfinfo-man.html) ： PDF の文書情報を表示
- [pdftops](https://www.xpdfreader.com/pdftops-man.html) ： PDF を [PostScript](/PostScript/) ファイルに変換
- [pdftotext](https://www.xpdfreader.com/pdftotext-man.html) ： PDF からテキストを抽出
- [pdftoppm](https://www.xpdfreader.com/pdftoppm-man.html) ： PDF を PPM 画像形式に変換
- [pdftopng](https://www.xpdfreader.com/pdftopng-man.html) ： PDF の各ページを PNG に変換。Poppler では pdftopng は削除され，機能強化された pdftocairo に置き換えられた。
- [pdftohtml](https://www.xpdfreader.com/pdftohtml-man.html) ： PDF を HTML に変換
- [pdfdetach](https://www.xpdfreader.com/pdfdetach-man.html) ： PDF にアタッチされた部分をファイルとして抜き出すプログラム

### インストール方法 {#install}

#### Windows {#inst-windows}

[https://www.xpdfreader.com/download.html](https://www.xpdfreader.com/download.html) から Windows 版の XpdfReader と Xpdf command line tools がダウンロードできます。

Windows の場合は Xpdf command line tools をインストールしなくても [TeX Live](</TeX Live/>) がインストールされていれば poppler utilities がすぐに使える状態になっています。TeX Live 2016 以前に含まれていた xpdf utilities は TeX Live 2017 以降は poppler utilities で置き換えられました。

#### macOS {#inst-mac}

macOS の [TeX Live](</TeX Live/>) には Poppler や Xpdf は含まれていないので，別途インストールします。

- 公式サイトのバイナリを使用する方法
    - [https://www.xpdfreader.com/download.html](https://www.xpdfreader.com/download.html) から Mac 版の Xpdf command line tools をダウンロードしてインストールします。pdffonts を実行して Config Error: No display font for 'Symbol' と Config Error: No display font for 'ZapfDingbats' のエラーが発生する場合は xpdf-t1fonts.tar.gz，Syntax Error: Unknown character collection 'Adobe-Japan1' のエラーが発生する場合は xpdf-japanese.tar.gz をダウンロード・インストールして xpdfrc に設定を記述します。

- Homebrew を用いる方法
    - [https://formulae.brew.sh/formula/xpdf](https://formulae.brew.sh/formula/xpdf)

        ```
        $ brew install xpdf
        ```

- MacPorts を用いる方法
    - MacPorts では xpdf という名前で port が用意されており，xpdf の port には次のような variants が用意されています。

        ```
        $ port variants xpdf
        xpdf has the variants:
           a4: Use A4 as the default paper size instead of Letter
           drm: Obey access restrictions in PDF files
           no_mangle_names: do not mangle the CLI tool names, conflicts with poppler
           t1lib: Include t1lib support (moved to variant due to security issue)
           universal: Build for multiple architectures
        ```

        例えば，A4 をデフォルトにインストールする場合は次のようにします。

        ```
        $ sudo port install xpdf +a4
        ```

        pdffonts などのコマンド群は [Poppler](/Poppler/) の同名のコマンドと衝突しますので，デフォルトでは xpdf の接頭辞が付いています（例えば，pdffonts なら xpdf-pdffonts）。macOS ユーザなら，通常は Poppler を使えば良いと思いますが，Xpdf を使わざるを得ない事情があり，xpdf という接頭辞をつけたくない場合は，no_mangle_names の variant を追加します。例えば，次のようにします。

        ```
        $ sudo port xpdf +a4+no_mangle_names
        ```

        さらに言語設定が必要です（以下のディレクトリ名は
        MacPorts の場合。Homebrew なら /opt/local ではなく Apple Silicon 版では /opt/homebrew/ Intel 版では /usr/local/ のはず）。
        日本語を用いる場合は xpdf-japanese もインストールし，/opt/local/etc/xpdfrc を編集します。

        ```
        #textEncoding		UTF-8
        ```

        のコメントアウトを外します。さらに

        ```
        cidToUnicode  Adobe-Japan1  /opt/local/share/xpdf/xpdf-japanese/Adobe-Japan1.cidToUnicode
        unicodeMap    ISO-2022-JP   /opt/local/share/xpdf/xpdf-japanese/ISO-2022-JP.unicodeMap
        unicodeMap    EUC-JP        /opt/local/share/xpdf/xpdf-japanese/EUC-JP.unicodeMap
        unicodeMap    Shift-JIS     /opt/local/share/xpdf/xpdf-japanese/Shift-JIS.unicodeMap
        cMapDir       Adobe-Japan1  /opt/local/share/xpdf/xpdf-japanese/CMap
        toUnicodeDir                /opt/local/share/xpdf/xpdf-japanese/CMap
        ```

        と追記します。これで以下が利用可能になります：

> pdffonts, pdfimages, pdfinfo, pdftops, pdftotext, pdftoppm, pdfdetach

- 参考：[xpdfを使ってPDFから日本語抽出](http://akkunchoi.github.io/xpdf-japanese.html)
    - [https://ports.macports.org/port/xpdf/](https://ports.macports.org/port/xpdf/)
    - [https://ports.macports.org/port/xpdf-japanese/](https://ports.macports.org/port/xpdf-japanese/)

#### Linux {#inst-linux}

[https://www.xpdfreader.com/download.html](https://www.xpdfreader.com/download.html) から Linux 版の XpdfReader と Xpdf command line tools がダウンロードできます。

Linux の場合は Xpdf command line tools をインストールしなくても poppler-utils（Linux Mint/Debian/Ubuntu や Fedora など）あるいは poppler（Arch Linux など）という名前のパッケージと poppler-data をインストールすれば poppler utilities が使用できます。

### お知らせ {#notice}

- [［改訂第6版］LaTeX2e 美文書作成入門サポートページ](https://okumuralab.org/~okumura/bibun6/)に，「pdftotextと本書PDF版の相性問題」と題して，Xpdf 付属の pdftotext で当該書籍の PDF 版をテキスト化する場合の注意点が記されています。

### 関連記事 {#links}

- [XPDFパッケージの使い方](https://konoyonohana.blog.fc2.com/blog-entry-48.html)
- Xpdf の pdftotext （PDFファイルからテキストを抽出．参考：[＠IT：PDFファイルからテキストを抽出するには](https://www.atmarkit.co.jp/flinux/rensai/linuxtips/745textfpdf.html)）
- [xpopple](https://offog.org/code/xpopple/) a Motif-based PDF viewer adapted from xpdf that uses the Poppler library.

#### ライセンス {#license}

GPLv3, GPLv2

#### ChangeLog {#g8361031}

- [https://fossies.org/linux/xpdf/CHANGES](https://fossies.org/linux/xpdf/CHANGES)
