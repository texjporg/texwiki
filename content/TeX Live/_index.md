---
title: "TeX Live"
url: "/TeX Live/"
date: 2013-11-14T10:55:50Z
bookCollapseSection: true
pukiwiki: "TeX Live"
---

# TeX Live

## [TeX Live](https://www.tug.org/texlive/) {#n4073ab3}

TeX Live は TeX のディストリビューションです。
TeX の超巨大な集大成ともいえるもので、現在では国際的に最も普及している最新の TeX ディストリビューションです。

<strong>公式サイト</strong>

- [TeX Live - TeX Users Group](https://www.tug.org/texlive/)
- [The tex-live Archives](https://tug.org/pipermail/tex-live/)

TeX Live 2010 以降は日本語対応のパッケージがマージされるようになり、現在では日本語の組版に必要な要素がすべて取り込まれました。
TeX Live には [e-upTeX](/upTeX,upLaTeX/), [XeTeX](/XeTeX/), [LuaTeX](/LuaTeX/), [LuajitTeX](/LuajitTeX/) が収録されています。

***

***

### 動作環境 {#j0ebf49b}

- [Supported systems](https://www.tug.org/texlive/doc.html#platforms)
- [https://git.texlive.info/texlive/tree/Master/bin](https://git.texlive.info/texlive/tree/Master/bin)

を参照。

### インストール {#w628bee6}

TeX Live は OS ごとにインストール方法が異なります。
それぞれの OS のインストール方法を参照してください。
日本語版のインストールマニュアルについては[日本語版『TeX Liveガイド』](https://github.com/wtsnjp/texlive-ja)を参照してください。

TeX Live は年次ごとにバージョンが新しくなりますが、古い年次のものと新しい年次のものが共存可能ですので、古い年次のものが既にインストールされていても、気にせずに新規インストールと同じ手順をとって構いません。

ただし、TeX Live をフルインストールした場合は 10GB くらいディスク容量が消費されますので、気になる方は古い年次のものをアンインストールしてから新しい年次のものをインストールしてください。

- [Microsoft Windows](</Microsoft Windows/>)
    - Windows へのインストールは [TeX Live/Windows](</TeX Live/Windows/>) を参照してください．
    - [WSL](/WSL/)、[MSYS2](/MSYS2/#texlive)、[Cygwin](/Cygwin/#texlive) へのインストールも可能です．
- [macOS](/Mac/)
    - macOS へのインストールは [TeX Live/Mac](</TeX Live/Mac/>) を参照してください．
- [Linux](/Linux/#texlive)
    - [Linux/Arch Linux/Manjaro Linux#texlive](</Linux/Arch Linux/#texlive>)
    - [Linux/Linux Mint/Debian/Ubuntu#texlive](</Linux/Linux Mint/#texlive>)
    - [Linux/Fedora](/Linux/Fedora/#texlive)
    - [Linux/openSUSE](/Linux/openSUSE/#texlive)
- [ChromeOS](/ChromeOS/#texlive)
- [BSD](/BSD/)
    - [BSD/FreeBSD](/BSD/FreeBSD/#texlive)
    - [BSD/OpenBSD](/BSD/OpenBSD/#texlive)
    - [BSD/NetBSD](/BSD/NetBSD/#texlive)
- [Android](/Android/#texlive)
- [iOS/iPadOS](/iOS/#texlive)

### TeX Live のサブセット {#p06f63c2}

TeX Live には数千ものパッケージが含まれており、これらは collection にグループ分けされています。
さらに、パッケージの依存関係を解決しつつインストールする scheme も複数用意されていて、それぞれインストールする collection と追加パッケージが定義されています。
これらの詳細は [texlive.tlpdb](https://mirror.ctan.org/systems/texlive/tlnet/tlpkg/texlive.tlpdb) というファイルを見ればわかります（たとえば /usr/local/texlive/2026/tlpkg/texlive.tlpdb など）．

主なスキームには以下が挙げられます：

- scheme-full ： TeX Live に含まれるすべてのパッケージをインストールします。
- scheme-basic ： [LaTeX](/LaTeX/) を使うために必要最小限のパッケージ (collection-basic + collection-latex) をインストールします。
- scheme-small ： scheme-basic に [XeTeX](/XeTeX/)、[MetaPost](/MetaPost/) といくつかの言語の推奨パッケージを追加したもの。
- scheme-medium ： scheme-small に欧州の主要言語のパッケージなどを追加したもの。

ここで挙げたスキームの例のうち scheme-basic、scheme-small、scheme-medium には日本語の LaTeX 文書作成に必要なパッケージが含まれていません。
日本語の LaTeX 文書を作成するためには scheme-full でインストールするか、スキームでインストールした後に collection-langjapanese をインストールすることになります。

なお、TeX Live ベースの macOS 専用ディストリビューションである [MacTeX](/MacTeX/) は scheme-full に，[BasicTeX](/BasicTeX/) は scheme-small にそれぞれ対応します。
また、Windows 向けの TeX Live インストーラ (install-tl-windows.exe) の Simple Install は scheme-full に対応します。

### TeX Live に収録されるものとされないもの {#v97f014d}

TeX Live に収録されるのは、基本的には

- 利用や改変，商用再配布にライセンス上制約がない（＝「フリー」）
- 「フリー」でない物が動作条件として必須でない

という条件を満たすものです。
この条件を満たさないなどの様々な事情で TeX Live には収録されないものを補完する目的で [TLContrib](/TLContrib/) というディストリビューションが存在します。

## TeX Live の詳細情報 {#g496de09}

以下は詳細情報です．開発者向け情報も含まれます． <!-- 初めて TeX Live をインストールするユーザにはあまり関係のないことだと判断し、 --> <!-- 並べ替えました．インストール用の記事は OS ごとに個別に記載されていますので、 --> <!-- 以下の内容はそちらの個別ページから必要に応じてリンクする形で． --> <!-- メンテナ向けの情報もこの下で十分ですよね？ -->

### [Network Based Installer](https://www.tug.org/texlive/acquire-netinstall.html) {#tlnet}

ネットワーク経由でのインストールは、以下のミラーサイトを利用してください。
TUG から直接ダウンロードするよりもミラーサイトを利用したほうが早くダウンロードできます。
TeX Live は，ネットワーク経由でのインストールが推奨されています。
ただし、ネットワーク経由ではうまくインストールできない場合があるので、その場合は ISO Image をダウンロードしてください。

- <strong>HTTPS</strong>
    - CTAN ミラー
        - [https://mirror.ctan.org/systems/texlive/tlnet/](https://mirror.ctan.org/systems/texlive/tlnet/)
    - JAIST 北陸先端科学技術大学院大学 (石川県能美市)
        - [https://ftp.jaist.ac.jp/pub/CTAN/systems/texlive/tlnet/](https://ftp.jaist.ac.jp/pub/CTAN/systems/texlive/tlnet/)
    - 山形大学 工学部／大学院理工学研究科／大学院有機材料システム研究科 (山形県米沢市)
        - [https://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/texlive/tlnet/](https://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/texlive/tlnet/)
    - 理化学研究所 (埼玉県和光市)
        - [https://ftp.riken.jp/CTAN/systems/texlive/tlnet/](https://ftp.riken.jp/CTAN/systems/texlive/tlnet/)
    - mirror.aria-on-the-planet.es (ICSCoE 産業サイバーセキュリティセンター (東京都千代田区外神田４丁目１４−１ 秋葉原UDX 20階))
        - [https://mirror.aria-on-the-planet.es/CTAN/systems/texlive/tlnet/](https://mirror.aria-on-the-planet.es/CTAN/systems/texlive/tlnet/)
    - ctan.tikz.jp (vmd139524.contaboserver.net) (Contabo Asia Private Limited)
        - [https://ctan.tikz.jp/systems/texlive/tlnet/](https://ctan.tikz.jp/systems/texlive/tlnet/)
    - jp.mirrors.cicku.me (Cloudflare CDN)
        - [https://jp.mirrors.cicku.me/ctan/systems/texlive/tlnet/](https://jp.mirrors.cicku.me/ctan/systems/texlive/tlnet/)
    - mirror.kris.fail (Cloudflare CDN)
        - [https://mirror.kris.fail/ctan/systems/texlive/tlnet/](https://mirror.kris.fail/ctan/systems/texlive/tlnet/)
    - 日本語 TeX 開発コミュニティ (さくらインターネット (大阪府大阪市北区大深町６−３８ 3F グラングリーン大阪 北館 JAM BASE))
        - [https://texlive.texjp.org/current/tlnet/](https://texlive.texjp.org/current/tlnet/)

### [TeX Live ISO Images](https://www.tug.org/texlive/acquire-iso.html) {#iso}

ネットワーク経由のインストールがうまくいかない場合は ISO Image をダウンロードしてください。
TeX Live の ISO Image はサイズが大きいので、以下のミラーサイトを利用してください。
TUG から直接ダウンロードするよりもミラーサイトを利用したほうが早くダウンロードできます。

- <strong>HTTPS</strong>
    - CTAN ミラー
        - [https://mirror.ctan.org/systems/texlive/Images/](https://mirror.ctan.org/systems/texlive/Images/)
    - JAIST 北陸先端科学技術大学院大学 (石川県能美市)
        - [https://ftp.jaist.ac.jp/pub/CTAN/systems/texlive/Images/](https://ftp.jaist.ac.jp/pub/CTAN/systems/texlive/Images/)
    - 山形大学 工学部／大学院理工学研究科／大学院有機材料システム研究科 (山形県米沢市)
        - [https://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/texlive/Images/](https://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/texlive/Images/)
    - 理化学研究所 (埼玉県和光市)
        - [https://ftp.riken.jp/CTAN/systems/texlive/Images/](https://ftp.riken.jp/CTAN/systems/texlive/Images/)
    - mirror.aria-on-the-planet.es (ICSCoE 産業サイバーセキュリティセンター (東京都千代田区外神田４丁目１４−１ 秋葉原UDX 20階))
        - [https://mirror.aria-on-the-planet.es/CTAN/systems/texlive/Images/](https://mirror.aria-on-the-planet.es/CTAN/systems/texlive/Images/)
    - ctan.tikz.jp (vmd139524.contaboserver.net) (Contabo Asia Private Limited)
        - [https://ctan.tikz.jp/systems/texlive/Images/](https://ctan.tikz.jp/systems/texlive/Images/)
    - jp.mirrors.cicku.me (Cloudflare CDN)
        - [https://jp.mirrors.cicku.me/ctan/systems/texlive/Images/](https://jp.mirrors.cicku.me/ctan/systems/texlive/Images/)
    - mirror.kris.fail (Cloudflare CDN)
        - [https://mirror.kris.fail/ctan/systems/texlive/Images/](https://mirror.kris.fail/ctan/systems/texlive/Images/)

### [TLContrib](/TLContrib/) <a id="tlcontrib"></a> {#obb5b17e}

[TLContrib](/TLContrib/) は TeX Live の補完リポジトリです。

### [Pretests](</TeX Live/pretest/>) <a id="pretest"></a> {#tfc3ba44}

[TeX Live/pretest](</TeX Live/pretest/>) を参照

### TeX Live のビルド {#build}

[TeX Live/build](</TeX Live/build/>) を参照

### Archive {#s2007652}

[Historic archive - TeX Users Group](https://www.tug.org/historic/)

### メーリングリスト {#c93fb114}

[tug.org Mailing Lists](https://tug.org/mailman/listinfo)

### 関連リンク {#udd48b1b}

- [日本語版『TeX Liveガイド』](https://github.com/wtsnjp/texlive-ja)
- [Install-LaTeX-Guide-zh-cn (A short introduction to LaTeX installation written in Chinese)](https://github.com/OsbertWang/install-latex-guide-zh-cn)
    - [一份简短的关于 LaTeX 安装的介绍](https://tug.ctan.org/info/install-latex-guide-zh-cn/install-latex-guide-zh-cn.pdf) (PDF)
- [「TeX Live」の検索結果（Q＆A） - Yahoo!知恵袋](https://chiebukuro.yahoo.co.jp/search?p=TeX%20Live)
- [TeXLiveに関する新着投稿 - Qiita \[キータ\]](https://qiita.com/tags/texlive)
- [TeX Liveの記事一覧 | Zenn](https://zenn.dev/topics/texlive)

#### リリース情報 {#k5761e9e}

[TeX Live - TeX Users Group](https://www.tug.org/texlive/) の Current release を参照。

- \[[ViewVC\] Index of: texlive/tags](https://svn.tug.org/texlive/tags/)
    - [log](https://svn.tug.org/texlive/tags/?view=log)

#### ChangeLog {#g68f0fa7}

- [https://tug.org/pipermail/tex-live-commits/](https://tug.org/pipermail/tex-live-commits/)
- [TeX Live and Subversion (and Git)](https://www.tug.org/texlive/svn/)
- \[[ViewVC\] Index of: texlive/trunk](https://svn.tug.org/texlive/trunk/)
    - [log](https://svn.tug.org/texlive/trunk/?view=log)
    - [ChangeLog](https://svn.tug.org/texlive/trunk/Build/source/ChangeLog?view=markup)
- [texlive - Mirror of svn TeX Live plus development branches](https://git.texlive.info/texlive/)
    - [log](https://git.texlive.info/texlive/log/)
    - [ChangeLog](https://git.texlive.info/texlive/tree/Build/source/ChangeLog)
- [GitHub - TeX-Live/texlive-source: source part of the TeX Live subversion repository - for issues please contact the tex-k mailing list at tug.org](https://github.com/TeX-Live/texlive-source)
    - [log](https://github.com/TeX-Live/texlive-source/commits/trunk/)
    - [ChangeLog](https://github.com/TeX-Live/texlive-source/blob/trunk/ChangeLog)
