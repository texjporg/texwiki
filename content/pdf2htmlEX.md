---
title: "pdf2htmlEX"
url: "/pdf2htmlEX/"
date: 2012-09-07T17:22:10Z
pukiwiki: "pdf2htmlEX"
---

# pdf2htmlEX

## [pdf2htmlEX](https://github.com/coolwanglu/pdf2htmlEX) {#t74544cf}

### pdf2htmlEX とは {#h92a9ad3}

pdf2htmlEX は PDF ファイルを HTML ファイルに変換するソフトウェアです．

- [pdf2htmlEX](https://github.com/coolwanglu/pdf2htmlEX)
    <!-- -[[WangLu's Tech Blog:http://coolwanglu.blogspot.com/]] -->

### インストール {#d5b9a2e9}

<!-- ***Windows [#r72743bf] -->
<!--  -->
<!-- [[poppler]] をインストールします．~ -->
<!--  -->
<!-- Boost をダウンロードします． -->
<!-- $ curl -R -L -O http://download.sourceforge.net/boost/boost_1_51_0.tar.bz2 -->
<!-- $ tar jxvf boost_1_51_0.tar.bz2 -->
<!-- $ pushd boost_1_51_0 -->
<!--  -->
<!-- コマンド プロンプトを起動して Boost を展開したディレクトリに移動します．~ -->
<!-- MinGW のバイナリに PATH を通して bootstrap.bat を実行して b2.exe を作成します．~ -->
<!--  -->
<!-- >set PATH=C:\MinGW\bin;%PATH% -->
<!--  -->
<!-- >bootstrap.bat gcc -->
<!-- Building Boost.Build engine -->
<!-- 指定されたバッチ ラベルが見つかりません - Test_Option -->
<!--  -->
<!-- Bootstrapping is done. To build, run: -->
<!--  -->
<!--     .\b2 -->
<!--  -->
<!-- To adjust configuration, edit 'project-config.jam'. -->
<!-- Further information: -->
<!--  -->
<!--     - Command line help: -->
<!--     .\b2 - -help -->
<!--  -->
<!--     - Getting started guide: -->
<!--     http://boost.org/more/getting_started/windows.html -->
<!--  -->
<!--     - Boost.Build documentation: -->
<!--     http://www.boost.org/boost-build2/doc/html/index.html -->
<!--  -->
<!-- MSYS を起動して Boost をビルドしてインストールします． -->
<!-- $ ./b2 install - -prefix=/mingw - -toolset=gcc -->
<!-- $ popd -->
<!--  -->
<!-- FontForge をダウンロードします． -->
<!-- $ curl -R -L -O http://download.sourceforge.net/fontforge/fontforge_full-20120731-b.tar.bz2 -->
<!-- $ tar fontforge_full-20120731-b -->
<!-- $ pushd fontforge_full-20120731-b -->
<!-- $ ./configure - -prefix=/mingw - -with-freetype-src=../freetype-2.4.10/src -->
<!-- [[gutils/gimagereadjpeg.c:http://fontforge.git.sourceforge.net/git/gitweb.cgi?p=fontforge/fontforge;a=blob_plain;f=gutils/gimagereadjpeg.c;hb=HEAD]] の最新版をダウンロードして上書きします． -->

#### Linux {#bbc3ecf8}

[Gentoo Linux での pdf2htmlEX のビルド](http://blogs.yahoo.co.jp/igproj_fusion/16101259.html) を参照．

### 関連リンク {#m74160f6}

- [pdf2htmlEXの紹介](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=873)
- [150 僕が書いたツール：　pdf2htmlEX](http://lang-8.com/393787/journals/1662451)
- [pdf2htmlEX（Lang-8より転載）](http://blogs.yahoo.co.jp/igproj_fusion/16093260.html)
- [香港のプログラマーの御紹介](http://blogs.yahoo.co.jp/igproj_fusion/16098576.html)
- [Gentoo Linux での pdf2htmlEX のビルド](http://blogs.yahoo.co.jp/igproj_fusion/16101259.html)
- [ppa:coolwanglu/pdf2htmlex](https://launchpad.net/~coolwanglu/+archive/pdf2htmlex)
- [pdf2htmlEX – Convert PDF to HTML without losing format](http://ubuntuguide.net/pdf2htmlex-convert-pdf-to-html-without-losing-format)
- [Boostライブラリのビルド方法](https://sites.google.com/site/boostjp/howtobuild)
- [MinGW/dllを呼び出す - Ura5han Wiki](http://ura5han.resourcez.org/wiki/MinGW/dll%E3%82%92%E5%91%BC%E3%81%B3%E5%87%BA%E3%81%99)
