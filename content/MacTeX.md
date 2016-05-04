---
title: "MacTeX"
url: "/MacTeX/"
date: 2016-05-04T20:24:06Z
pukiwiki: "MacTeX"
---

# MacTeX

## [MacTeX](http://tug.org/mactex/) {#mactex}

MacTeX は [TeX Live](</TeX Live/>) をベースにした OS X 専用の TeX ディストリビューションです。
TeX Live をフルインストールし，オプションでいくつかの追加アプリケーションもインストールします。

<strong>公式サイト</strong>

- [MacTeX - TeX Users Group](http://tug.org/mactex/)
- [MacTeX Technical Working Group](http://www.tug.org/twg/mactex/)
- [MacTeX Screen Saver](http://www.tug.org/tug2003/mactex/)
    - [MacTeX Screen Saver](http://www.tug.org/tug2003/mactex/screensaver.html)
        - [screen image](http://www.tug.org/tug2003/mactex/screen_images/)

MacTeX には，ベースとなっている [TeX Live](</TeX Live/>) と同じく [e-pTeX](/e-pTeX/), [e-upTeX](/upTeX,upLaTeX/), [XeTeX](/XeTeX/), [LuaTeX](/LuaTeX/), LuaJITTeX が収録されています。

***

***

### MacTeX の中身 {#defa4d85}

MacTeX には TeX Live のほかに，いくつかの GUI アプリケーションと [Ghostscript](/Ghostscript/) が含まれています。
MacTeX.pkg からインストールする際に，インストールの種類で \[カスタマイズ\] をクリックするとインストールするパッケージを選択できます。

MacTeX-2016 には以下のパッケージが収録されています。

#### TeX Live-2016 {#v03e546d}

TeX Live 本体です。
MacTeX は TeX Live の scheme-full に対応していますので，TeX Live に含まれるすべてのパッケージをインストールします。

#### GUI-Applications {#a9bfcdb5}

インストールするとアプリケーションフォルダに TeX フォルダが作成されます。
README-ja.pdf（日本語を扱うための初期設定手順の解説），READ ME FIRST.pdf，What Is Installed.pdf，Eps-Tiff-Conversion.pdf，Ghostscript.pdf の書類もインストールされます。

GUI Applications には以下のアプリケーションが収録されています。
アプリケーションフォルダの中の TeX フォルダに収められています。

- [BibDesk](http://bibdesk.sourceforge.net/)
    - 文献管理ソフトです。

- [Excalibur](http://excalibur.sourceforge.net/)
    - TeX に対応したスペルチェッカー。

- [LaTeXiT](/LaTeXiT/)
    - 単独の数式を作成して他のアプリケーションにコピペするのに便利なソフトウェア。

- [FixLink](http://pages.uoregon.edu/koch/)
    - システムにインストールされている過去のバージョンの MacTeX を OS X El Capitan で動作するように新しいシンボリックリンクを作成するインストールパッケージ。

- [TeX Live Utility](</TeX Live Utility/>)
    - [tlmgr](/tlmgr/)（[TeX Live Manager](</TeX Live Manager/>)）の OS X ネイティブの GUI アプリケーション。
    - 最初の起動時に，最新版へのアップデートを促されます。複数のリポジトリを並行管理できます。

- [TeXShop](/TeXShop/)
    - OS X 専用の TeX 統合環境。
    - メニューの「TeXShop」→「アップデートを確認...」を選択して TeXShop をアップデートします。アップデートが失敗する場合は，[TeXShop の公式サイト](http://pages.uoregon.edu/koch/texshop/)から最新版の TeXShop をダウンロードし，アプリケーションフォルダ内の TeXShop.app を置き換えてください。
    - 設定は [TeXShop/設定](</TeXShop/設定/>) を参照してください。

#### Ghostscript-9.19 {#n1354f54}

MacTeX のリリース後に新しい Ghostscript がリリースされた場合はチェックをはずして [Richard Koch Home Page](http://pages.uoregon.edu/koch/) から最新版を入手してください。
MacTeX の Ghostscript で問題が発生する場合は [Ghostscript.app - マスクメロン](http://www.muskmelon.jp/?page_id=75) を使用することもできます。 (→ [MacTeX 2014+texmaker+GhostView の環境で日本語PDFを作成する方法](http://qiita.com/mmurasawa/items/25a88b0c5548c96f6196))
Homebrew または MacPorts を使用して Ghostscript をインストールする場合はチェックをはずしてください。
Ghostscript でも日本語を簡単に扱うための設定スクリプトがあります。（→[CJK fonts and Ghostscript integration](http://www.preining.info/blog/software-projects/cjk-fonts-ghostscript/)）

#### TeX Distribution（システム環境設定） {#w29d901c}

- [Mac TeX Toolbox](https://sourceforge.net/projects/mactextoolbox/)

「システム環境設定」にインストールされます。複数の TeX システムをインストールしている場合（例えば過年度の TeX Live/MacTeX など），TeX Distribution からそれらを切り替えることができます。

### インストール {#t244993f}

#### MacTeX.pkg でインストール {#j62e687a}

- [ftp://ftp.tug.org/tex/mactex/](ftp://ftp.tug.org/tex/mactex/)
- [ftp://tug.org/historic/systems/mactex/](ftp://tug.org/historic/systems/mactex/)

MacTeX はサイズが大きいので，ダウンロードする際は上の TUG のサイトからではなく[ミラーサイト](/MacTeX/#mirror)を利用してください。
TUG から直接ダウンロードするよりもミラーサイトを利用したほうが早くダウンロードできます。
Google Chrome, Mozilla Firefox で MacTeX をダウンロードしてインストールできない場合は Safari でダウンロードしてください。

MacTeX のインストールの概略は以下のとおりです。

1. [MacTeX のホームページ](http://tug.org/mactex/)または[ミラーサイト](/MacTeX/#mirror)から MacTeX.pkg をダウンロードします。
    - 「本家」の MacTeX からのダウンロードも，自動的に CTAN のミラーサイトからのダウンロードとなります。
    - MacTeXtras.zip は，追加のフロントエンドなどが収録されています。必須ではありません。（→[MacTeXtrasの説明](http://tug.org/mactex/mactextras.html)）
1. ダウンロードした MacTeX.pkg をダブルクリックしてインストールします。
    - <strong>手動でパスを通す必要はありません</strong>。（→[What is Installed.pdf を参照](http://tug.org/mactex/What_Is_Installed.pdf)）<br>PATH，MANPATH はインストール時に適切に自動設定されます。<br>
        ターミナルで以下のコマンドを実行し，返ってきた PATH に <strong>/Library/TeX/texbin</strong> が含まれていれば大丈夫です。

        ```
        $ echo $PATH
        ```

        - <strong>ターミナル初心者への注意：</strong> 上記コマンドの先頭の <strong>$</strong> はターミナルを起動すると示される「コマンド入力待ちの記号（プロンプト）」を表します。従って，実際に入力するのは echo $PATH です。
        - [Ghostscript.app - マスクメロン](http://www.muskmelon.jp/?page_id=75)からインストールした場合など，別途 Ghostscript をインストールして使用する場合は，そのために改めてパスを通す必要があるかもしれません。
        - 以前に MacPorts または Fink からインストールした TeX が残っている場合は，パスの優先順位の再設定が必要です。（→[Multiple TeX Distributions](http://tug.org/mactex/multipletexdistributions.html)）
1. ターミナル上で sudo tlmgr update --self --all または [tlmgr](/tlmgr/) の GUI アプリケーションである [TeX Live Utility](</TeX Live Utility/>) を用いて最新版までアップデートします。（→[tlmgr を使用してのアップデート](</TeX Live/Mac/#p3c663c9>)）
1. 日本語環境を整えます。
    - ヒラギノフォントを TeX でも利用可能にします。（→[日本語環境の整備](</TeX Live/Mac/#i9febc9b>)）
        - 以前の TeX Live で既に設定済みの場合は，この手順は不要です（ただし，OS X El Capitan へのアップデート後にまだ作業を行っていない場合は必要になります）。
        - この設定をしなくても日本語は使用できますし，IPAexフォント/IPAフォントを埋め込んだPDFの作成もできますが，高品質なフォントであるヒラギノが使える OS X ならばヒラギノを利用可能にする設定は有用でしょう。
    - Ghostscript でも日本語が使えるようにします。（→[Ghostscript で日本語を扱えるようにする設定](</TeX Live/Mac/#mc6bf937>)）<strong><span style="color:red;">注意！</span>OS X El Capitan ではシステムのフォント回りの設定が大幅に変更になったため Ghostscript が未対応で，この設定は一部失敗します。</strong>
        - cjk-gs-integrate.pl を実行すると，使用可能なフォントが Ghostscript 用に登録されます。
    - sudo kanji-config-updmap-sys を実行して PDF に埋め込むフォントを指定します。（→[kanji-config-updmap(-sys) ](</TeX Live/Mac/#hf34afcc>)）
        - 新規インストール（アップグレード）時にはフォントが埋め込まれない設定となっているため，作成された PDF が「ファイルが壊れている」と見なされて開けないことがあります。
        - updmap-sys も実行されて各種の map ファイルが自動生成されます。
1. 必要に応じて，付属ソフトの設定やアップデートを行います。
    - [LyX](/LyX/), [TeXstudio](/TeXstudio/), [Texmaker](/Texmaker/), [TeXworks](/TeXworks/), TexitEasy, [TeXShop](/TeXShop/), TeXnicle などのソフトを用いる場合は，それぞれのソフトに対し適切な設定が必要です。
1. <strong>Happy LaTeXing!</strong>

#### Homebrew でインストール {#s59a1243}

Homebrew で MacTeX をインストールできます。

```
$ brew cask install mactex
$ sudo tlmgr update --self --all
```

#### インストールの事例 {#n379ea53}

以下のインストールのやり方などの事例も参照してください。

<!-- 上記の標準的なインストールが想定していない特殊なケースや特別な対応が求められた -->
<!-- ケースを中心に，参考事例を紹介するのがよろしいかと思います。 -->

- [MacTeXに関する投稿 - Qiita](http://qiita.com/tags/MacTeX)
- [TeX環境の構築方法【OS X El Capitan】](http://kengo92i.hatenablog.jp/entry/2016/05/04/204519)
- [TeX/Install - 松浦高志のWikiページ](http://user.ecc.u-tokyo.ac.jp/users/user-15826/wiki/?TeX/Install)
- [2015年のコンピューターノウハウ (Mac)](http://nalab.mind.meiji.ac.jp/~mk/knowhow-2015/)
- [Mac 用 TeX による英文・和文のタイプセット](http://fujioizumi.verse.jp/)
- [http://mac.softpedia.com/get/Developer-Tools/MacTeX.shtml](http://mac.softpedia.com/get/Developer-Tools/MacTeX.shtml)

<!-- 以下は TeX Live 2014 以前に書かれたものですが，中には統合環境のセットアップや -->
<!-- 不具合対応まで書かれていたりするので，残しておきたいと思います． -->
<!-- もし不要だと判断されたならば，削除ではなくコメントアウトにとどめてください． -->
<!-- ときどき，記事の管理者が同じ URL で最新の TeX Live 対応の追記をすることがあり， -->
<!-- これは意外と（2014 → 2015 とアップデートしたい人などに）有用だったりします． -->
<!-- そして，そんな場合は上の最新記事に“昇格”です． -->

<!-- 念のため TeX Live 2014 対応のものも残しておきます． -->
<!-- -[[Mac OS YosemiteへのTeX環境の導入(含TeXStudio):http://karlsnautr.blogspot.jp/2015/05/mac-os-yosemitetextexstudio.html]] -->
<!-- -[[[Yosemite]MacTeXのインストール:http://www.aruneko.net/archives/1285]] -->
<!-- -[[MacTeX 2014 - 一歩前進:http://succzero.hatenablog.com/entry/2014/07/17/041211]] -->
<!-- -[[MacTeX 2014 を再インストールしたときの覚書:http://pt-diary.tumblr.com/post/107214765605/20150105-mactex]] -->
<!-- -[[TeX Live を使おう ―― Linux ユーザと Mac OS X ユーザのために ――:http://www.fugenji.org/~thomas/texlive-guide/]] -->
<!-- -[[Sublime TextでTeX論文執筆できるようにした時のメモ:http://kzhrknt.hatenablog.com/entry/2014/09/14/032907]] -->
<!-- -[[docs/TeX/TeX on Mac - kyogoku42's:http://www.kyogoku.biz/docs/TeX/TeX%20on%20Mac]] -->
<!-- -[[MacTeXにおける実行ファイルの場所:http://d.hatena.ne.jp/seinzumtode/20141001/1412154972]] -->

### リリース情報 {#c5157a75}

[MacTeX - TeX Users Group](http://tug.org/mactex/) を参照。

### ミラーサイト (MacTeX) {#mirror}

- <strong>HTTP</strong>
    - [http://ring.airnet.ne.jp/pub/text/CTAN/systems/mac/mactex/](http://ring.airnet.ne.jp/pub/text/CTAN/systems/mac/mactex/)
    - [http://ftp.jaist.ac.jp/pub/CTAN/systems/mac/mactex/](http://ftp.jaist.ac.jp/pub/CTAN/systems/mac/mactex/)
    - [http://ftp.naist.jp/pub/CTAN/systems/mac/mactex/](http://ftp.naist.jp/pub/CTAN/systems/mac/mactex/)
    - [http://ftp.nara.wide.ad.jp/pub/CTAN/systems/mac/mactex/](http://ftp.nara.wide.ad.jp/pub/CTAN/systems/mac/mactex/)
    - [http://ftp.kddilabs.jp/pub/ctan/systems/mac/mactex/](http://ftp.kddilabs.jp/pub/ctan/systems/mac/mactex/)
    - [http://ftp-srv2.kddilabs.jp/TeX/ctan/systems/mac/mactex/](http://ftp-srv2.kddilabs.jp/TeX/ctan/systems/mac/mactex/)
    - [http://ftp.ne.jp/pub/ctan/systems/mac/mactex/](http://ftp.ne.jp/pub/ctan/systems/mac/mactex/)
    - [http://srv2.ftp.ne.jp/pub/ctan/systems/mac/mactex/](http://srv2.ftp.ne.jp/pub/ctan/systems/mac/mactex/)
    - [http://ftp.riken.go.jp/pub/CTAN/systems/mac/mactex/](http://ftp.riken.go.jp/pub/CTAN/systems/mac/mactex/)
    - [http://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/mac/mactex/](http://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/mac/mactex/)
    - [http://mirror.math.kyushu-u.ac.jp/tex-archive/systems/mac/mactex/](http://mirror.math.kyushu-u.ac.jp/tex-archive/systems/mac/mactex/)
    - [http://ring.maffin.ad.jp/pub/text/CTAN/systems/mac/mactex/](http://ring.maffin.ad.jp/pub/text/CTAN/systems/mac/mactex/)
    - [http://ring.shibaura-it.ac.jp/pub/text/CTAN/systems/mac/mactex/](http://ring.shibaura-it.ac.jp/pub/text/CTAN/systems/mac/mactex/)
    - [http://ring.tains.tohoku.ac.jp/pub/text/CTAN/systems/mac/mactex/](http://ring.tains.tohoku.ac.jp/pub/text/CTAN/systems/mac/mactex/)
    - [http://ring.u-toyama.ac.jp/pub/text/CTAN/systems/mac/mactex/](http://ring.u-toyama.ac.jp/pub/text/CTAN/systems/mac/mactex/)
    - [http://ring.yamanashi.ac.jp/pub/text/CTAN/systems/mac/mactex/](http://ring.yamanashi.ac.jp/pub/text/CTAN/systems/mac/mactex/)
    - [http://ring.ix.oita-u.ac.jp/pub/text/CTAN/systems/mac/mactex/](http://ring.ix.oita-u.ac.jp/pub/text/CTAN/systems/mac/mactex/)
    - [http://www.ring.gr.jp/pub/text/CTAN/systems/mac/mactex/](http://www.ring.gr.jp/pub/text/CTAN/systems/mac/mactex/)
    - [http://www.dnsbalance.ring.gr.jp/pub/text/CTAN/systems/mac/mactex/](http://www.dnsbalance.ring.gr.jp/pub/text/CTAN/systems/mac/mactex/)
    - [http://core.ring.gr.jp/pub/text/CTAN/systems/mac/mactex/](http://core.ring.gr.jp/pub/text/CTAN/systems/mac/mactex/)
    - [http://mirror.ctan.org/systems/mac/mactex/](http://mirror.ctan.org/systems/mac/mactex/)

- <strong>FTP</strong>
    - [ftp://ring.airnet.ne.jp/pub/text/CTAN/systems/mac/mactex/](ftp://ring.airnet.ne.jp/pub/text/CTAN/systems/mac/mactex/)
    - [ftp://ftp.jaist.ac.jp/pub/CTAN/systems/mac/mactex/](ftp://ftp.jaist.ac.jp/pub/CTAN/systems/mac/mactex/)
    - [ftp://ftp.naist.jp/pub/CTAN/systems/mac/mactex/](ftp://ftp.naist.jp/pub/CTAN/systems/mac/mactex/)
    - [ftp://ftp.nara.wide.ad.jp/pub/CTAN/systems/mac/mactex/](ftp://ftp.nara.wide.ad.jp/pub/CTAN/systems/mac/mactex/)
    - [ftp://ftp.kddilabs.jp/pub/ctan/systems/mac/mactex/](ftp://ftp.kddilabs.jp/pub/ctan/systems/mac/mactex/)
    - [ftp://ftp-srv2.kddilabs.jp/TeX/ctan/systems/mac/mactex/](ftp://ftp-srv2.kddilabs.jp/TeX/ctan/systems/mac/mactex/)
    - [ftp://ftp.ne.jp/pub/ctan/systems/mac/mactex/](ftp://ftp.ne.jp/pub/ctan/systems/mac/mactex/)
    - [ftp://srv2.ftp.ne.jp/pub/ctan/systems/mac/mactex/](ftp://srv2.ftp.ne.jp/pub/ctan/systems/mac/mactex/)
    - [ftp://ftp.riken.go.jp/pub/CTAN/systems/mac/mactex/](ftp://ftp.riken.go.jp/pub/CTAN/systems/mac/mactex/)
    - [ftp://ftp.shonan.bunkyo.ac.jp/pub/TeX/CTAN/systems/mac/mactex/](ftp://ftp.shonan.bunkyo.ac.jp/pub/TeX/CTAN/systems/mac/mactex/)
    - [ftp://ftp.nuie.nagoya-u.ac.jp/pub/CTAN/systems/mac/mactex/](ftp://ftp.nuie.nagoya-u.ac.jp/pub/CTAN/systems/mac/mactex/)
    - [ftp://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/mac/mactex/](ftp://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/mac/mactex/)
    - [ftp://ftp.u-aizu.ac.jp/pub/tex/CTAN/systems/mac/mactex/](ftp://ftp.u-aizu.ac.jp/pub/tex/CTAN/systems/mac/mactex/)
    - [ftp://ring.maffin.ad.jp/pub/text/CTAN/systems/mac/mactex/](ftp://ring.maffin.ad.jp/pub/text/CTAN/systems/mac/mactex/)
    - [ftp://ring.shibaura-it.ac.jp/pub/text/CTAN/systems/mac/mactex/](ftp://ring.shibaura-it.ac.jp/pub/text/CTAN/systems/mac/mactex/)
    - [ftp://ring.tains.tohoku.ac.jp/pub/text/CTAN/systems/mac/mactex/](ftp://ring.tains.tohoku.ac.jp/pub/text/CTAN/systems/mac/mactex/)
    - [ftp://ring.u-toyama.ac.jp/pub/text/CTAN/systems/mac/mactex/](ftp://ring.u-toyama.ac.jp/pub/text/CTAN/systems/mac/mactex/)
    - [ftp://ring.yamanashi.ac.jp/pub/text/CTAN/systems/mac/mactex/](ftp://ring.yamanashi.ac.jp/pub/text/CTAN/systems/mac/mactex/)
    - [ftp://ring.ix.oita-u.ac.jp/pub/text/CTAN/systems/mac/mactex/](ftp://ring.ix.oita-u.ac.jp/pub/text/CTAN/systems/mac/mactex/)
    - [ftp://ftp.ring.gr.jp/pub/text/CTAN/systems/mac/mactex/](ftp://ftp.ring.gr.jp/pub/text/CTAN/systems/mac/mactex/)
    - [ftp://ftp.dnsbalance.ring.gr.jp/pub/text/CTAN/systems/mac/mactex/](ftp://ftp.dnsbalance.ring.gr.jp/pub/text/CTAN/systems/mac/mactex/)
    - [ftp://core.ring.gr.jp/pub/text/CTAN/systems/mac/mactex/](ftp://core.ring.gr.jp/pub/text/CTAN/systems/mac/mactex/)
