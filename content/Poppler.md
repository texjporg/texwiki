---
title: "Poppler"
url: "/Poppler/"
date: 2013-08-26T08:13:06Z
pukiwiki: "Poppler"
---

# Poppler

## [Poppler](https://poppler.freedesktop.org/) --- PDF ビューア・操作ツール {#c1f030c4}

Poppler は，PDF ドキュメントのレンダリングに利用されるライブラリで，ベースとなった [Xpdf](/Xpdf/) 3.0 に比べてレンダリングが向上されています。
ビューアとして Poppler を使用して問題が発生する場合は [MuPDF](/MuPDF/) を使用することを検討してください。
以下のプログラムが PDF ビューアとして Poppler を使用しています。

- LaTeX editor: [TeXstudio](/TeXstudio/), [TeXworks](/TeXworks/)
- PDF viewer: [Okular](/Okular/), [Papers](/Papers/), [zathura](/zathura/) (zathura-pdf-poppler), [qpdfview](/qpdfview/) (pdf-plugin), [pdfpc](https://pdfpc.github.io/), [Dual-Screen PDF Viewer \[dspdfviewer\]](http://dspdfviewer.danny-edel.de/)

また，Xpdf と同様に PDF ユーティリティとしても有用です。

<!-- インストールの項より下は，もう少し見やすくならないでしょうか… -->

***

***

### 公式サイト {#fd295383}

- [Poppler](https://poppler.freedesktop.org/)
- [The poppler Archives](https://lists.freedesktop.org/archives/poppler/)

### お知らせ {#qdd1dda1}

- Poppler 24.04.0 以降はビルドする際に C++20 をサポートした処理系が必要です。--&gt; [Require C++20](https://cgit.freedesktop.org/poppler/poppler/commit/CMakeLists.txt?id=d8ae3ba659c71b4f5913ecf74d525461bb831366)
- Windows 版の TeX Live 2017 以降は xpdf utilities の代わりに poppler utilities が
    使われるようになりました --&gt; [TeX Live Revision 43299](http://www.tug.org/svn/texlive?view=revision&revision=43299) bin/win32: Replace xpdf utilities by poppler utilities

### インストール {#tafa7455}

#### Windows {#v190b38b}

TeX Live をインストールしている場合は poppler utilities が使用できます．
以下のコマンドが利用できます：

> pdfdetach, pdffonts, pdfimages, pdfinfo, pdfseparate, pdftocairo, pdftohtml, pdftoppm, pdftops, pdftotext, pdfunite

- [https://github.com/msys2/MINGW-packages/tree/master/mingw-w64-poppler](https://github.com/msys2/MINGW-packages/tree/master/mingw-w64-poppler)
- [https://github.com/msys2/MINGW-packages/tree/master/mingw-w64-poppler-data](https://github.com/msys2/MINGW-packages/tree/master/mingw-w64-poppler-data)
- [https://packages.msys2.org/packages/mingw-w64-ucrt-x86_64-poppler](https://packages.msys2.org/packages/mingw-w64-ucrt-x86_64-poppler)
- [https://packages.msys2.org/packages/mingw-w64-ucrt-x86_64-poppler-data](https://packages.msys2.org/packages/mingw-w64-ucrt-x86_64-poppler-data)

MSYS2 の pacman でインストールすることもできます。

```
pacman -S mingw-w64-ucrt-x86_64-poppler mingw-w64-ucrt-x86_64-poppler-data
```

を実行します．

[Poppler Packaged for Windows](https://github.com/oschwartz10612/poppler-windows) から，Poppler のユーティリティのバイナリを入手することもできます。

#### macOS {#l3620b9b}

Homebrew あるいは MacPorts を利用したインストールが可能です。

Homebrew の場合は poppler をインストールします。

```
$ brew install poppler
```

MacPorts の場合は poppler と poppler-data という名前の Port をインストールします。

```
$ sudo port install poppler poppler-data
```

poppler をインストールすると下記の便利なコマンドが使えます。

```
$ port contents poppler | grep /bin
  /opt/local/bin/pdfdetach
  /opt/local/bin/pdffonts
  /opt/local/bin/pdfimages
  /opt/local/bin/pdfinfo
  /opt/local/bin/pdfseparate
  /opt/local/bin/pdftocairo
  /opt/local/bin/pdftohtml
  /opt/local/bin/pdftoppm
  /opt/local/bin/pdftops
  /opt/local/bin/pdftotext
  /opt/local/bin/pdfunite
```

なお，[Xpdf](/Xpdf/) 関連の Port（具体的には xpdf-tools が該当）がインストールされていると衝突してインストールできなくなります。
Poppler をインストールしたい場合は，xpdf-tools をアンインストールしてください。

- [https://formulae.brew.sh/formula/poppler](https://formulae.brew.sh/formula/poppler)
- [https://ports.macports.org/port/poppler/](https://ports.macports.org/port/poppler/)
- [https://ports.macports.org/port/poppler-data/](https://ports.macports.org/port/poppler-data/)
    - [https://www.macports.org/ports.php?by=name&substr=poppler](https://www.macports.org/ports.php?by=name&substr=poppler)

#### Arch Linux {#kbfeb6e5}

- [https://www.archlinux.org/packages/?q=poppler](https://www.archlinux.org/packages/?q=poppler)

```
sudo pacman -S poppler poppler-data
```

#### Linux Mint/Debian/Ubuntu {#k603e696}

- [https://packages.ubuntu.com/ja/poppler](https://packages.ubuntu.com/ja/poppler)
- [https://packages.debian.org/ja/poppler](https://packages.debian.org/ja/poppler)

Linux Mint や Debian GNU/Linux や Ubuntu では poppler ライブラリは libpoppler134 という名前だったり，libpoppler147 という名前だったりします。
poppler-utils をインストールすれば，依存関係で適宜判断されますので，poppler-utils をインストールします。
日本語を使う場合は poppler-data も必要です。

```
sudo apt install poppler-utils poppler-data
```

#### Fedora {#ub953878}

- [https://apps.fedoraproject.org/packages/poppler](https://apps.fedoraproject.org/packages/poppler)
- [https://apps.fedoraproject.org/packages/poppler-data](https://apps.fedoraproject.org/packages/poppler-data)
- [https://apps.fedoraproject.org/packages/poppler-utils](https://apps.fedoraproject.org/packages/poppler-utils)

```
sudo dnf install poppler-utils poppler-data
```

#### openSUSE {#w0cc993e}

- [https://software.opensuse.org/package/poppler](https://software.opensuse.org/package/poppler)
- [https://software.opensuse.org/package/poppler-data](https://software.opensuse.org/package/poppler-data)

```
sudo zypper install poppler poppler-data
```

### font configuration {#e532ec53}

Poppler は font configuration で win32 を選択した場合，日本語のフォントを埋め込んでいない PDF ファイルは MS-Mincho で表示されます。
ただし font configuration が win32 の場合 GothicBBB-Medium (ゴシック体) でも Ryumin-Light (明朝体) と同様 MS-Mincho で表示されます。
GothicBBB-Medium (ゴシック体) をきちんと表示したい場合は font configuration を fontconfig でビルドして fontconfig を適切に設定します。

- [https://cgit.freedesktop.org/poppler/poppler/tree/poppler/GlobalParamsWin.cc](https://cgit.freedesktop.org/poppler/poppler/tree/poppler/GlobalParamsWin.cc)
- \[[poppler\] poppler/GlobalParamsWin.cc](https://lists.freedesktop.org/archives/poppler/2012-March/008915.html)

### Issues {#nbe31c73}

- [https://bugs.freedesktop.org/buglist.cgi?bug_status=__open__&content=&no_redirect=1&order=changeddate%20DESC%2Cpriority%2Cbug_severity&product=poppler&query_based_on=&query_format=specific](https://bugs.freedesktop.org/buglist.cgi?bug_status=__open__&content=&no_redirect=1&order=changeddate%20DESC%2Cpriority%2Cbug_severity&product=poppler&query_based_on=&query_format=specific)
- [https://bugs.freedesktop.org/buglist.cgi?bug_status=__open__&content=&no_redirect=1&order=Importance&product=poppler&query_format=specific](https://bugs.freedesktop.org/buglist.cgi?bug_status=__open__&content=&no_redirect=1&order=Importance&product=poppler&query_format=specific)

### 関連リンク {#m3ac74dd}

- [Poppler - DenkiYagi](http://terurou.hateblo.jp/category/Poppler)
    - [Poppler 0.22.5の.NETバインディングを作成する](http://terurou.hateblo.jp/entry/2013/07/09/160937)
    - [MinGWでPoppler 0.22.5をビルド](http://terurou.hateblo.jp/entry/2013/07/09/160937)
- [Popplerについてちょっとだけ](http://d.hatena.ne.jp/naruoga/20130112/1358002227)
- [pdfgrepでPDFをgrepする](http://emasaka.blog65.fc2.com/blog-entry-1010.html)
- Poppler (BLFS)
    - [http://www.linuxfromscratch.org/blfs/view/svn/general/poppler.html](http://www.linuxfromscratch.org/blfs/view/svn/general/poppler.html)
    - [http://lfsbookja.osdn.jp/BLFS/svn-ja/general/poppler.html](http://lfsbookja.osdn.jp/BLFS/svn-ja/general/poppler.html)

#### License {#i424d155}

[GPLv3](https://cgit.freedesktop.org/poppler/poppler/tree/COPYING3), [GPLv2](https://cgit.freedesktop.org/poppler/poppler/tree/COPYING)

#### ChangeLog {#u62118c7}

- [poppler / poppler · GitLab](https://gitlab.freedesktop.org/poppler/poppler)
    - [https://gitlab.freedesktop.org/poppler/poppler/-/tags](https://gitlab.freedesktop.org/poppler/poppler/-/tags)
    - [https://gitlab.freedesktop.org/poppler/poppler/-/commits/master](https://gitlab.freedesktop.org/poppler/poppler/-/commits/master)
- [poppler/poppler - The poppler pdf rendering library](https://cgit.freedesktop.org/poppler/poppler)
    - [https://cgit.freedesktop.org/poppler/poppler/refs/tags](https://cgit.freedesktop.org/poppler/poppler/refs/tags)
    - [https://cgit.freedesktop.org/poppler/poppler/log/](https://cgit.freedesktop.org/poppler/poppler/log/)
- [https://www.tug.org/svn/texlive/trunk/Build/source/libs/poppler/](https://www.tug.org/svn/texlive/trunk/Build/source/libs/poppler/)
    - [https://www.tug.org/svn/texlive/trunk/Build/source/libs/poppler/?view=log](https://www.tug.org/svn/texlive/trunk/Build/source/libs/poppler/?view=log)
- [https://github.com/TeX-Live/texlive-source/tree/trunk/libs/poppler](https://github.com/TeX-Live/texlive-source/tree/trunk/libs/poppler)
    - [https://github.com/TeX-Live/texlive-source/commits/trunk/libs/poppler](https://github.com/TeX-Live/texlive-source/commits/trunk/libs/poppler)
