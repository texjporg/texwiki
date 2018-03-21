---
title: "TeX Live"
url: "/TeX Live/"
date: 2013-11-14T10:55:50Z
bookCollapseSection: true
pukiwiki: "TeX Live"
---

# TeX Live

## [TeX Live](http://www.tug.org/texlive/) {#n4073ab3}

TeX Live は TeX のディストリビューションです．
TeX の超巨大な集大成ともいえるもので，現在では国際的に最も普及している最新の TeX ディストリビューションです．

<strong>公式サイト</strong>

- [TeX Live - TeX Users Group](http://www.tug.org/texlive/)
- [The tex-live Archives](http://tug.org/pipermail/tex-live/)

TeX Live 2010 以降は日本語対応のパッケージがマージされるようになり，現在では日本語の組版に必要な要素がすべて取り込まれました．
TeX Live には [e-upTeX](/upTeX,upLaTeX/), [XeTeX](/XeTeX/), [LuaTeX](/LuaTeX/), LuaJITTeX が収録されています．

***

***

### 動作環境 {#j0ebf49b}

- [Supported systems](http://www.tug.org/texlive/doc.html#platforms)
- [http://www.tug.org/svn/texlive/trunk/Master/bin/](http://www.tug.org/svn/texlive/trunk/Master/bin/)

を参照．

### インストール {#w628bee6}

TeX Live は OS ごとにインストール方法が異なります．
それぞれの OS のインストール方法を参照してください．

- [Microsoft Windows](</Microsoft Windows/>)
    - Win64, Win32 へのインストールは，[TeX Live/Windows](</TeX Live/Windows/>) を参照してください．
    - [Cygwin](/Cygwin/#texlive) へのインストールも可能です．
- [macOS](/Mac/)
    - macOS へのインストールは，[TeX Live/Mac](</TeX Live/Mac/>) を参照してください．
- [Linux](/Linux/#texlive)
    - [Linux/Arch Linux](</Linux/Arch Linux/#texlive>)
    - [Linux/Linux Mint/Debian/Ubuntu#texlive](</Linux/Linux Mint/#texlive>)
    - [Linux/Fedora](/Linux/Fedora/#texlive)
    - [Linux/openSUSE](/Linux/openSUSE/#texlive)
    - Linux/RHEL/CentOS/SL#texlive
    - Linux/Vine Linux
- [BSD](/BSD/)
    - [BSD/FreeBSD](/BSD/FreeBSD/#texlive)
    - [BSD/OpenBSD](/BSD/OpenBSD/#texlive)
    - [BSD/NetBSD](/BSD/NetBSD/#texlive)
- [Android](/Android/#texlive)

### TeX Live のサブセット {#p06f63c2}

TeX Live には数千ものパッケージが含まれており，これらは collection にグループ分けされています．
さらに，パッケージの依存関係を解決しつつインストールする scheme も複数用意されていて，それぞれインストールする collection と追加パッケージが定義されています．
これらの詳細は [texlive.tlpdb](http://mirror.ctan.org/systems/texlive/tlnet/tlpkg/texlive.tlpdb) というファイルを見ればわかります（たとえば /usr/local/texlive/2018/tlpkg/texlive.tlpdb など）．

主なスキームには以下が挙げられます：

- scheme-full ： TeX Live に含まれるすべてのパッケージをインストールします．
- scheme-basic ： [LaTeX](/LaTeX/) を使うために必要最小限のパッケージ (collection-basic + collection-latex) をインストールします．
- scheme-small ： scheme-basic に [XeTeX](/XeTeX/)，[MetaPost](/MetaPost/) といくつかの言語の推奨パッケージを追加したもの．
- scheme-medium ： scheme-small に欧州の主要言語のパッケージなどを追加したもの．

ここで挙げたスキームの例のうち，scheme-basic，scheme-small，scheme-medium には日本語の LaTeX 文書作成に必要なパッケージが含まれていません．
日本語の LaTeX 文書を作成するためには scheme-full でインストールするか，各スキームでインストールした後に collection-langjapanese をインストールすることになります．

なお，TeX Live ベースの macOS 専用ディストリビューションである [MacTeX](/MacTeX/) は scheme-full に，[BasicTeX](/BasicTeX/) は scheme-small にそれぞれ対応します．
また，Windows 向けの TeX Live インストーラ (install-tl-windows.exe) の Simple Install は scheme-full に対応します．

## TeX Live の詳細情報 {#g496de09}

以下は詳細情報です．開発者向け情報も含まれます． <!-- 初めて TeX Live をインストールするユーザにはあまり関係のないことだと判断し， --> <!-- 並べ替えました．インストール用の記事は OS ごとに個別に記載されていますので， --> <!-- 以下の内容はそちらの個別ページから必要に応じてリンクする形で． --> <!-- メンテナ向けの情報もこの下で十分ですよね？ -->

### [Network Based Installer](http://www.tug.org/texlive/acquire-netinstall.html) {#tlnet}

- [ftp://ftp.tug.org/texlive/tlnet/](ftp://ftp.tug.org/texlive/tlnet/)
- [ftp://tug.org/historic/systems/texlive/](ftp://tug.org/historic/systems/texlive/)

ネットワーク経由でのインストールは，上の TUG のサイトからでなく以下のミラーサイトを利用してください．
TUG から直接ダウンロードするよりもミラーサイトを利用したほうが早くダウンロードできます．
TeX Live は，ネットワーク経由でのインストールが推奨されています．
ただし，ネットワーク経由ではうまくインストールできない場合があるので，その場合は ISO Image をダウンロードしてください．

- <strong>HTTP</strong>
    - [http://ftp.jaist.ac.jp/pub/CTAN/systems/texlive/tlnet/](http://ftp.jaist.ac.jp/pub/CTAN/systems/texlive/tlnet/)
    - [http://ftp.naist.jp/pub/CTAN/systems/texlive/tlnet/](http://ftp.naist.jp/pub/CTAN/systems/texlive/tlnet/)
    - [http://ftp.nara.wide.ad.jp/pub/CTAN/systems/texlive/tlnet/](http://ftp.nara.wide.ad.jp/pub/CTAN/systems/texlive/tlnet/)
    - [http://ftp.kddilabs.jp/pub/ctan/systems/texlive/tlnet/](http://ftp.kddilabs.jp/pub/ctan/systems/texlive/tlnet/)
    - [http://ftp-srv2.kddilabs.jp/TeX/ctan/systems/texlive/tlnet/](http://ftp-srv2.kddilabs.jp/TeX/ctan/systems/texlive/tlnet/)
    - [http://ftp.ne.jp/pub/ctan/systems/texlive/tlnet/](http://ftp.ne.jp/pub/ctan/systems/texlive/tlnet/)
    - [http://srv2.ftp.ne.jp/pub/ctan/systems/texlive/tlnet/](http://srv2.ftp.ne.jp/pub/ctan/systems/texlive/tlnet/)
    - [http://ftp.riken.go.jp/pub/CTAN/systems/texlive/tlnet/](http://ftp.riken.go.jp/pub/CTAN/systems/texlive/tlnet/)
    - [http://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/texlive/tlnet/](http://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/texlive/tlnet/)
    - [http://mirror.math.kyushu-u.ac.jp/tex-archive/systems/texlive/tlnet/](http://mirror.math.kyushu-u.ac.jp/tex-archive/systems/texlive/tlnet/)
    - [http://www.ring.gr.jp/pub/text/CTAN/systems/texlive/tlnet/](http://www.ring.gr.jp/pub/text/CTAN/systems/texlive/tlnet/)
    - [http://www.dnsbalance.ring.gr.jp/pub/text/CTAN/systems/texlive/tlnet/](http://www.dnsbalance.ring.gr.jp/pub/text/CTAN/systems/texlive/tlnet/)
    - [http://core.ring.gr.jp/pub/text/CTAN/systems/texlive/tlnet/](http://core.ring.gr.jp/pub/text/CTAN/systems/texlive/tlnet/)
    - [http://mirror.ctan.org/systems/texlive/tlnet/](http://mirror.ctan.org/systems/texlive/tlnet/)
    - [http://texlive.texjp.org/current/tlnet/](http://texlive.texjp.org/current/tlnet/)

- <strong>FTP</strong>
    - [ftp://ftp.jaist.ac.jp/pub/CTAN/systems/texlive/tlnet/](ftp://ftp.jaist.ac.jp/pub/CTAN/systems/texlive/tlnet/)
    - [ftp://ftp.naist.jp/pub/CTAN/systems/texlive/tlnet/](ftp://ftp.naist.jp/pub/CTAN/systems/texlive/tlnet/)
    - [ftp://ftp.nara.wide.ad.jp/pub/CTAN/systems/texlive/tlnet/](ftp://ftp.nara.wide.ad.jp/pub/CTAN/systems/texlive/tlnet/)
    - [ftp://ftp.kddilabs.jp/pub/ctan/systems/texlive/tlnet/](ftp://ftp.kddilabs.jp/pub/ctan/systems/texlive/tlnet/)
    - [ftp://ftp-srv2.kddilabs.jp/TeX/ctan/systems/texlive/tlnet/](ftp://ftp-srv2.kddilabs.jp/TeX/ctan/systems/texlive/tlnet/)
    - [ftp://ftp.ne.jp/pub/ctan/systems/texlive/tlnet/](ftp://ftp.ne.jp/pub/ctan/systems/texlive/tlnet/)
    - [ftp://srv2.ftp.ne.jp/pub/ctan/systems/texlive/tlnet/](ftp://srv2.ftp.ne.jp/pub/ctan/systems/texlive/tlnet/)
    - [ftp://ftp.riken.go.jp/pub/CTAN/systems/texlive/tlnet/](ftp://ftp.riken.go.jp/pub/CTAN/systems/texlive/tlnet/)
    - [ftp://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/texlive/tlnet/](ftp://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/texlive/tlnet/)
    - [ftp://ftp.u-aizu.ac.jp/pub/tex/CTAN/systems/texlive/tlnet/](ftp://ftp.u-aizu.ac.jp/pub/tex/CTAN/systems/texlive/tlnet/)
    - [ftp://ftp.ring.gr.jp/pub/text/CTAN/systems/texlive/tlnet/](ftp://ftp.ring.gr.jp/pub/text/CTAN/systems/texlive/tlnet/)
    - [ftp://ftp.dnsbalance.ring.gr.jp/pub/text/CTAN/systems/texlive/tlnet/](ftp://ftp.dnsbalance.ring.gr.jp/pub/text/CTAN/systems/texlive/tlnet/)
    - [ftp://core.ring.gr.jp/pub/text/CTAN/systems/texlive/tlnet/](ftp://core.ring.gr.jp/pub/text/CTAN/systems/texlive/tlnet/)

### [TeX Live ISO Images](http://www.tug.org/texlive/acquire-iso.html) {#iso}

- [ftp://ftp.tug.org/texlive/Images/](ftp://ftp.tug.org/texlive/Images/)
- [http://ftp.tug.org/texlive/Images/](http://ftp.tug.org/texlive/Images/)
- [http://www.tug.org/texlive/Images/](http://www.tug.org/texlive/Images/)

ネットワーク経由のインストールがうまくいかない場合は ISO Image をダウンロードしてください．
TeX Live の ISO Image はサイズが大きいので，上の TUG のサイトからでなく以下のミラーサイトを利用してください．
TUG から直接ダウンロードするよりもミラーサイトを利用したほうが早くダウンロードできます．

- <strong>HTTP</strong>
    - [http://ftp.jaist.ac.jp/pub/CTAN/systems/texlive/Images/](http://ftp.jaist.ac.jp/pub/CTAN/systems/texlive/Images/)
    - [http://ftp.naist.jp/pub/CTAN/systems/texlive/Images/](http://ftp.naist.jp/pub/CTAN/systems/texlive/Images/)
    - [http://ftp.nara.wide.ad.jp/pub/CTAN/systems/texlive/Images/](http://ftp.nara.wide.ad.jp/pub/CTAN/systems/texlive/Images/)
    - [http://ftp.kddilabs.jp/pub/ctan/systems/texlive/Images/](http://ftp.kddilabs.jp/pub/ctan/systems/texlive/Images/)
    - [http://ftp-srv2.kddilabs.jp/TeX/ctan/systems/texlive/Images/](http://ftp-srv2.kddilabs.jp/TeX/ctan/systems/texlive/Images/)
    - [http://ftp.ne.jp/pub/ctan/systems/texlive/Images/](http://ftp.ne.jp/pub/ctan/systems/texlive/Images/)
    - [http://srv2.ftp.ne.jp/pub/ctan/systems/texlive/Images/](http://srv2.ftp.ne.jp/pub/ctan/systems/texlive/Images/)
    - [http://ftp.riken.go.jp/pub/CTAN/systems/texlive/Images/](http://ftp.riken.go.jp/pub/CTAN/systems/texlive/Images/)
    - [http://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/texlive/Images/](http://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/texlive/Images/)
    - [http://mirror.math.kyushu-u.ac.jp/tex-archive/systems/texlive/Images/](http://mirror.math.kyushu-u.ac.jp/tex-archive/systems/texlive/Images/)
    - [http://www.ring.gr.jp/pub/text/CTAN/systems/texlive/Images/](http://www.ring.gr.jp/pub/text/CTAN/systems/texlive/Images/)
    - [http://www.dnsbalance.ring.gr.jp/pub/text/CTAN/systems/texlive/Images/](http://www.dnsbalance.ring.gr.jp/pub/text/CTAN/systems/texlive/Images/)
    - [http://core.ring.gr.jp/pub/text/CTAN/systems/texlive/Images/](http://core.ring.gr.jp/pub/text/CTAN/systems/texlive/Images/)
    - [http://mirror.ctan.org/systems/texlive/Images/](http://mirror.ctan.org/systems/texlive/Images/)

- <strong>FTP</strong>
    - [ftp://ftp.jaist.ac.jp/pub/CTAN/systems/texlive/Images/](ftp://ftp.jaist.ac.jp/pub/CTAN/systems/texlive/Images/)
    - [ftp://ftp.naist.jp/pub/CTAN/systems/texlive/Images/](ftp://ftp.naist.jp/pub/CTAN/systems/texlive/Images/)
    - [ftp://ftp.nara.wide.ad.jp/pub/CTAN/systems/texlive/Images/](ftp://ftp.nara.wide.ad.jp/pub/CTAN/systems/texlive/Images/)
    - [ftp://ftp.kddilabs.jp/pub/ctan/systems/texlive/Images/](ftp://ftp.kddilabs.jp/pub/ctan/systems/texlive/Images/)
    - [ftp://ftp-srv2.kddilabs.jp/TeX/ctan/systems/texlive/Images/](ftp://ftp-srv2.kddilabs.jp/TeX/ctan/systems/texlive/Images/)
    - [ftp://ftp.ne.jp/pub/ctan/systems/texlive/Images/](ftp://ftp.ne.jp/pub/ctan/systems/texlive/Images/)
    - [ftp://srv2.ftp.ne.jp/pub/ctan/systems/texlive/Images/](ftp://srv2.ftp.ne.jp/pub/ctan/systems/texlive/Images/)
    - [ftp://ftp.riken.go.jp/pub/CTAN/systems/texlive/Images/](ftp://ftp.riken.go.jp/pub/CTAN/systems/texlive/Images/)
    - [ftp://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/texlive/Images/](ftp://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/texlive/Images/)
    - [ftp://ftp.u-aizu.ac.jp/pub/tex/CTAN/systems/texlive/Images/](ftp://ftp.u-aizu.ac.jp/pub/tex/CTAN/systems/texlive/Images/)
    - [ftp://ftp.ring.gr.jp/pub/text/CTAN/systems/texlive/Images/](ftp://ftp.ring.gr.jp/pub/text/CTAN/systems/texlive/Images/)
    - [ftp://ftp.dnsbalance.ring.gr.jp/pub/text/CTAN/systems/texlive/Images/](ftp://ftp.dnsbalance.ring.gr.jp/pub/text/CTAN/systems/texlive/Images/)
    - [ftp://core.ring.gr.jp/pub/text/CTAN/systems/texlive/Images/](ftp://core.ring.gr.jp/pub/text/CTAN/systems/texlive/Images/)

### [tltexjp](https://texjp.org/#tltexjp) <a id="tltexjp"></a> {#r64bfbe1}

tltexjp は TeX Live の補助リポジトリです．

- [https://texjp.org/#tltexjp](https://texjp.org/#tltexjp)
- [https://github.com/texjporg/tltexjp](https://github.com/texjporg/tltexjp)

### [Pretests](</TeX Live/pretest/>) <a id="pretest"></a> {#tfc3ba44}

[TeX Live/pretest](</TeX Live/pretest/>) を参照

### TeX Live のビルド {#build}

[TeX Live/build](</TeX Live/build/>) を参照

### 関連リンク {#udd48b1b}

- [http://chiebukuro.search.yahoo.co.jp/search?sort=16&p=TeX+Live](http://chiebukuro.search.yahoo.co.jp/search?sort=16&p=TeX+Live)
- [TeXLiveに関する新着投稿 - Qiita \[キータ\]](http://qiita.com/tags/texlive)

#### リリース情報 {#k5761e9e}

[TeX Live - TeX Users Group](http://www.tug.org/texlive/) の Current release を参照．

- \[[texlive\] Index of /tags](http://www.tug.org/svn/texlive/tags/)
    - [log](http://www.tug.org/svn/texlive/tags/?view=log)

#### ChangeLog {#g68f0fa7}

- [TeX Live and Subversion](http://www.tug.org/texlive/svn/)
- \[[texlive\] Index of /trunk](http://www.tug.org/svn/texlive/trunk/)
    - [log](http://www.tug.org/svn/texlive/trunk/?view=log)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/ChangeLog?view=markup)
