---
title: "Xpdf"
url: "/Xpdf/"
date: 2013-10-22T16:59:41Z
pukiwiki: "Xpdf"
---

# Xpdf

## [Xpdf](http://www.xpdfreader.com/) --- PDF ビューアと PDF 操作ツール {#z338a0d1}

Xpdf は Windows, macOS, Linux で動作する PDF ビューア および PDF 操作ツールです。

現在の Linux ディストリビューションや TeX Live 2017 (win32, win64) 以降あるいは W32TeX \[2017/02/20\] 以降に収録されているのは xpdf utilities ではなく poppler utilities です。

XpdfReader でトラブルが生じる場合は，[Poppler](/Poppler/) を使用した PDF ビューア（[Evince](/Evince/), [Okular](/Okular/), [zathura](/zathura/), [qpdfview](/qpdfview/), [TeXworks](/TeXworks/), [TeXstudio](/TeXstudio/) など）または [MuPDF](/MuPDF/) を利用してください。

<!-- とりあえず項目を復活させました。 -->
<!-- ビューアとして obsolete な理由説明がほしいです。 -->
<!-- W32TeX 関連の記載以外は検証していません。 -->
<!-- // OS X の MacPorts, Homebrew について追記しました。 -->
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

### Xpdf のツール一覧 {#tools}

PDF ビューアである xpdf (XpdfReader) のほかに，次のようなツールが存在します。

- pdffonts ： PDF のフォント情報を表示
- pdfimages ： PDF から画像を抽出する
- pdfinfo ： PDF の文書情報を表示
- pdftops ： PDF を [PostScript](/PostScript/) ファイルに変換
- pdftotext ： PDF からテキストを抽出
- pdftoppm ： PDF を PPM 画像形式に変換
- pdftopng ： PDF の各ページを PNG に変換。Poppler では pdftopng は削除され，機能強化された pdftocairo に置き換えられた。
- pdftohtml ： PDF を HTML に変換
- pdfdetach ： PDF にアタッチされた部分をファイルとして抜き出すプログラム

### インストール方法 {#install}

#### Windows {#inst-windows}

[http://www.xpdfreader.com/download.html](http://www.xpdfreader.com/download.html) から Windows 版の XpdfReader（64-bit 版と 32-bit 版がそれぞれ用意されている）と Xpdf tools（64-bit/32-bit 両方のバイナリが収録されている）がダウンロードできます。

[TeX Live](</TeX Live/>) (win32, win64) あるいは [W32TeX](/W32TeX/) をインストールすれば poppler utilities はすぐに使える状態になっています。TeX Live 2016 以前および W32TeX \[2017/02/19\] 以前に含まれていた xpdf utilities は TeX Live 2017 以降, W32TeX \[2017/02/20\] 以降は poppler utilities で置き換えられました。

#### macOS {#inst-mac}

macOS の [TeX Live](</TeX Live/>) (x86_64-darwin) には Poppler や Xpdf は含まれていないので，別途インストールします。

- 公式サイトのバイナリを使用する方法
    - [http://www.xpdfreader.com/download.html](http://www.xpdfreader.com/download.html) から Mac 版の Xpdf tools をダウンロードしてインストールします。必要であれば xpdf-japanese.tar.gz もダウンロードしてインストールします。
- マスクメロンの Xpdf.app を使用する方法
    - [マスクメロンの Xpdf.app](http://www.muskmelon.jp/?page_id=86) をダウンロードし，Applications フォルダにインストールします。
        /Applications/Xpdf.app 及び /Applications/Xpdf.app/bin
        にこの順番でパスを通します。ターミナルから

        ```
        export PATH=/Applications/Xpdf.app:/Applications/Xpdf.app/bin:$PATH
        ```

        を実行してください。既に言語設定は済んでいるので，特別な操作は不要です。以下が利用可能になります：

> pdffonts, pdfimages, pdfinfo, pdftops, pdftotext, pdftoppm, pdfdetach

- パッケージ管理システムを用いる方法
    - MacPorts や Homebrew を用いたインストールも可能です。MacPorts では xpdf という名前で port が用意されており，xpdf の port には次のような variants が用意されています。

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
        MacPorts の場合。Homebrew なら /opt/local ではなく /usr/local/ のはず）。
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
    - [https://github.com/macports/macports-ports/blob/master/graphics/xpdf/Portfile](https://github.com/macports/macports-ports/blob/master/graphics/xpdf/Portfile)
        - [https://github.com/Homebrew/homebrew-core/blob/master/Formula/xpdf.rb](https://github.com/Homebrew/homebrew-core/blob/master/Formula/xpdf.rb)

#### Linux {#inst-linux}

- [LinuxWiki:Xpdf](https://okumuralab.org/~okumura/linux/?Xpdf) を参照。

### お知らせ {#notice}

- [［改訂第6版］LaTeX2e 美文書作成入門サポートページ](http://oku.edu.mie-u.ac.jp/~okumura/bibun6/)に，「pdftotextと本書PDF版の相性問題」と題して，Xpdf 付属の pdftotext で当該書籍の PDF 版をテキスト化する場合の注意点が記されています。

### 関連記事 {#links}

- [XPDFパッケージの使い方](http://konoyonohana.blog.fc2.com/blog-entry-48.html)
- Xpdf の pdftotext （PDFファイルからテキストを抽出．参考：[＠IT：PDFファイルからテキストを抽出するには](http://www.atmarkit.co.jp/flinux/rensai/linuxtips/745textfpdf.html)）

#### ライセンス {#license}

GPLv3, GPLv2

#### ChangeLog {#g8361031}

- [https://fossies.org/linux/xpdf/CHANGES](https://fossies.org/linux/xpdf/CHANGES)
