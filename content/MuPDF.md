---
title: "MuPDF"
url: "/MuPDF/"
date: 2012-09-28T13:54:10Z
pukiwiki: "MuPDF"
---

# MuPDF

## [MuPDF](http://www.mupdf.com/) {#x9985d4a}

MuPDF は軽量な PDF/XPS/CBZ ビューアです．
また MuPDF は PDF/XPS/CBZ のパーサ/レンダリングライブラリとしても使用できます．
ビューアとして MuPDF を使用して問題が発生する場合は，代わりに [Poppler](/Poppler/) を利用することを検討してください．
以下のプログラムが MuPDF を使用しています．

- PDF ビューア: [SumatraPDF](/SumatraPDF/), [zathura](/zathura/) (zathura-pdf-mupdf), [qpdfview](/qpdfview/) (fitz-plugin)

***

***

### 動作環境 {#u6c9b420}

Windows, OS X, Linux, Android, iOS

### インストール {#m15a5d1f}

#### Windows {#j0820160}

- [http://www.mupdf.com/downloads/](http://www.mupdf.com/downloads/) から mupdf-\*-windows.zip をダウンロードして展開します．

#### OS X {#bad1a3d8}

- [https://github.com/Homebrew/homebrew-x11/blob/master/mupdf.rb](https://github.com/Homebrew/homebrew-x11/blob/master/mupdf.rb)

Homebrew を利用してインストールする場合は次のようにします．

```
brew install mupdf
```

- [/trunk/dports/graphics/mupdf/Portfile](https://trac.macports.org/browser/trunk/dports/graphics/mupdf/Portfile)

MacPorts を利用してインストールする場合は次のようにします．

```
sudo port install mupdf
```

#### Arch Linux {#y10f7abd}

- [https://www.archlinux.org/packages/?name=mupdf](https://www.archlinux.org/packages/?name=mupdf)
- [https://www.archlinux.org/packages/?name=mupdf-gl](https://www.archlinux.org/packages/?name=mupdf-gl)
- [https://www.archlinux.org/packages/?name=mupdf-tools](https://www.archlinux.org/packages/?name=mupdf-tools)
- [https://www.archlinux.org/packages/?name=libmupdf](https://www.archlinux.org/packages/?name=libmupdf)
- [https://www.archlinux.org/packages/?q=mupdf](https://www.archlinux.org/packages/?q=mupdf)

```
pacman -S mupdf mupdf-tools
```

#### Linux Mint/Debian/Ubuntu {#od9b1036}

- [http://packages.ubuntu.com/ja/mupdf](http://packages.ubuntu.com/ja/mupdf)
- [https://packages.debian.org/ja/mupdf](https://packages.debian.org/ja/mupdf)

Linux Mint や Debian GNU/Linux や Ubuntu では、MuPDF のパッケージは libmupdf-dev と mupdf と mupdf-tools の3つに分かれています。
自分で MuPDF を使ったプログラムをコンパイルするのでなければ、libmupdf-dev をインストールする必要はありません。
mupdf と mupdf-tools を入れたら OK です。
mupdf-tools 1.7a-1 には mutool と mudraw が含まれていますが現在の MuPDF では mudraw の機能は mutool に統合されており mudraw コマンドは存在しません。

```
sudo apt install mupdf mupdf-tools
```

#### Fedora {#k5d2c514}

- [https://apps.fedoraproject.org/packages/mupdf](https://apps.fedoraproject.org/packages/mupdf)

```
sudo dnf install mupdf
```

#### openSUSE {#sa86e80c}

- [https://software.opensuse.org/package/mupdf](https://software.opensuse.org/package/mupdf)

```
sudo zypper install mupdf
```

### ビルド {#ddb9bb15}

#### Windows {#o34a88ba}

Visual Studio (無償の Visual Studio Community も含む) がインストールされていればソリューションファイルを開くことでコンパイルができます．

[MinGW](/MinGW/) でも可能です．

zlib, libjpeg, OpenJPEG, HarfBuzz, FreeType 等のビルドに必要なライブラリをインストールします．

- [jbig2dec](http://git.ghostscript.com/?p=jbig2dec.git) をインストールします．

<!-- curl -RLo jbig2dec.tar.gz "http://git.ghostscript.com/?p=jbig2dec.git;a=snapshot;h=HEAD;sf=tgz" -->

```
powershell -Command '& {Invoke-WebRequest -Uri "http://git.ghostscript.com/?p=jbig2dec.git;a=snapshot;h=HEAD;sf=tgz" -OutFile "jbig2dec.tar.gz"}'
tar xvf jbig2dec.tar.gz
pushd jbig2dec*
./autogen.sh
./configure --prefix=/mingw
make && make install
popd
```

- [MuJS](http://www.mujs.com/) をインストールします．

<!-- curl -RLo mujs.tar.gz "http://git.ghostscript.com/?p=mujs.git;a=snapshot;h=HEAD;sf=tgz" -->

```
powershell -Command '& {Invoke-WebRequest -Uri "http://git.ghostscript.com/?p=mujs.git;a=snapshot;h=HEAD;sf=tgz" -OutFile "mujs.tar.gz"}'
tar xvf mujs.tar.gz
pushd mujs*
CC="gcc" make prefix=/mingw install
popd
```

- [MuPDF](http://www.mupdf.com/) をインストールします．

<!-- curl -RLo mupdf.tar.gz "http://git.ghostscript.com/?p=mupdf.git;a=snapshot;h=HEAD;sf=tgz" -->

```
powershell -Command '& {Invoke-WebRequest -Uri "http://git.ghostscript.com/?p=mupdf.git;a=snapshot;h=HEAD;sf=tgz" -OutFile "mupdf.tar.gz"}'
tar xvf mupdf.tar.gz
pushd mupdf*
CC="gcc" XCFLAGS="`pkg-config --cflags harfbuzz freetype2 libopenjp2`" XLIBS="`pkg-config --libs harfbuzz freetype2 libopenjp2`" make build=release prefix=/mingw install
popd
```

#### Android {#rd0a741b}

- [How to build MuPDF for Android](http://www.mupdf.com/docs/how-to-build-mupdf-for-android)

### 関連記事 {#u27a744e}

#### ライセンス {#kcee43f7}

[GNU Affero General Public License (AGPL)](http://git.ghostscript.com/?p=mupdf.git;a=blob;f=COPYING;hb=HEAD), [Artifex Commercial License](http://www.artifex.com/page/licensing-information.html)

#### リリース情報/変更履歴 {#vbbec018}

- [MuPDF News](http://www.mupdf.com/news)
- [http://git.ghostscript.com/?p=mupdf.git](http://git.ghostscript.com/?p=mupdf.git)
    - [shortlog](http://git.ghostscript.com/?p=mupdf.git;a=shortlog)
    - [CHANGES](http://git.ghostscript.com/?p=mupdf.git;a=blob;f=CHANGES;hb=HEAD)
- \[[gs-commits\] mupdf 1.7a.24 Merge 'mudraw' into 'mutool' binary.](http://ghostscript.com/pipermail/gs-cvs/2015-May/018449.html)

<!-- ***fork [#d573b664] -->
<!-- -https://github.com/monami-ya/mupdf/ -->

#### リンク {#c8e94ca4}

- TwitterSearch:MuPDF, TwitterSearch.en:MuPDF, TwitterSearch.ja:MuPDF
- [Reading PDF file in Windows store App sample in C#, C++, JavaScript for Visual Studio 2012](http://code.msdn.microsoft.com/windowsapps/Open-PDF-in-Windows-store-0614b58c)
- [MuPDF - DenkiYagi](http://terurou.hateblo.jp/category/MuPDF)
    - [MuPDF conveter（MuPDFLib）でPDFを画像に変換してみる](http://terurou.hateblo.jp/entry/2013/07/10/172026)
- [MuPDF 1.2 ライブラリーの C++ ラッパー](http://www.rvf-rc45.net/wordpress/?p=628)
- [MuPDF for Windows 9x](http://d.hatena.ne.jp/lukewarm/20110521#p1)
