---
title: "MacTeX"
url: "/MacTeX/"
date: 2016-05-04T20:24:06Z
pukiwiki: "MacTeX"
---

# MacTeX

## [MacTeX](http://tug.org/mactex/) {#mactex}

MacTeX は [TeX Live](</TeX Live/>) をベースにした macOS 専用の TeX ディストリビューションです。
TeX Live をフルインストールし，オプションでいくつかの追加アプリケーションもインストールします。

<strong>公式サイト</strong>

- [MacTeX - TeX Users Group](http://tug.org/mactex/)
- [MacTeX Technical Working Group](http://www.tug.org/twg/mactex/)
- [MacTeX Screen Saver](http://www.tug.org/tug2003/mactex/)
    - [MacTeX Screen Saver](http://www.tug.org/tug2003/mactex/screensaver.html)
        - [screen image](http://www.tug.org/tug2003/mactex/screen_images/)

MacTeX には，ベースとなっている [TeX Live](</TeX Live/>) と同じく [e-pTeX](/e-pTeX/), [e-upTeX](/upTeX,upLaTeX/), [XeTeX](/XeTeX/), [LuaTeX](/LuaTeX/), [LuajitTeX](/LuajitTeX/) が収録されています。

***

***

### MacTeX の中身 {#defa4d85}

MacTeX には TeX Live のほかに，いくつかの GUI アプリケーションと [Ghostscript](/Ghostscript/) が含まれています。
MacTeX.pkg からインストールする際に，インストールの種類で \[カスタマイズ\] をクリックするとインストールするパッケージを選択できます。

MacTeX-2018 には以下のパッケージが収録されています。

#### TeXLive-2018 {#v03e546d}

TeX Live 本体です。
MacTeX は TeX Live の scheme-full に対応していますので，TeX Live に含まれるすべてのパッケージをインストールします。

#### GUI-Applications {#a9bfcdb5}

インストールするとアプリケーションフォルダに TeX フォルダが作成されます。
TeX フォルダの中の Docs and Spell Utilities フォルダの中に Documents フォルダと Spelling フォルダと READ ME FIRST.pdf があり Documents フォルダの中に Eps-Tiff-Conversion.pdf，Ghostscript.pdf，README-ja.pdf（日本語を扱うための初期設定手順の解説），What Is Installed.pdf があります。

GUI Applications には以下のアプリケーションが収録されています。

アプリケーションフォルダの中の TeX フォルダに収められています。

- [BibDesk](https://bibdesk.sourceforge.io/)
    - 文献管理ソフト。

- [LaTeXiT](/LaTeXiT/)
    - 単独の数式を作成して他のアプリケーションにコピペするのに便利なソフトウェア。

- [TeX Live Utility](</TeX Live Utility/>)
    - [tlmgr](/tlmgr/)（[TeX Live Manager](</TeX Live Manager/>)）の macOS ネイティブの GUI アプリケーション。
    - 最初の起動時に，最新版へのアップデートを促されます。複数のリポジトリを並行管理できます。
    - 過去のバージョンの MacTeX がインストールされている場合，メニューの \[設定\] &gt; \[TeX Live の既定版を変更…\] を選択することで使用する TeX Live を切り替えることができます。

- [TeXShop](/TeXShop/)
    - macOS 専用の TeX 統合環境。
    - メニューの「TeXShop」→「アップデートを確認...」を選択して TeXShop をアップデートします。アップデートが失敗する場合は，[TeXShop の公式サイト](https://pages.uoregon.edu/koch/texshop/)から最新版の TeXShop をダウンロードし，アプリケーションフォルダ内の TeXShop.app を置き換えてください。
    - 設定は [TeXShop/設定](</TeXShop/設定/>) を参照してください。

アプリケーションフォルダの中の TeX フォルダの中の Docs and Spell Utilities フォルダの中の Spelling フォルダに収められています。

- [cocoAspell](http://people.ict.usc.edu/~leuski/cocoaspell/)
    - TeX に対応したスペルチェッカー。

- [Excalibur](http://excalibur.sourceforge.net/)
    - TeX に対応したスペルチェッカー。32-bit アプリケーション。

#### Ghostscript-9.23（脆弱性あり） --&gt; 脆弱性が修正された Ghostscript 9.26 がリリースされています {#n1354f54}

MacTeX のリリース後に新しい Ghostscript がリリースされた場合はチェックをはずして [Richard Koch Home Page](https://pages.uoregon.edu/koch/) から最新版を入手してください。

Homebrew または MacPorts を使用して Ghostscript をインストールする場合はチェックをはずしてください。

MacTeX の Ghostscript で問題が発生する場合は [Ghostscript.app - マスクメロン](https://www.muskmelon.jp/?page_id=75) を使用することもできます。 (→ [MacTeX 2014+texmaker+GhostView の環境で日本語PDFを作成する方法](https://qiita.com/mmurasawa/items/25a88b0c5548c96f6196))

### インストール {#t244993f}

#### MacTeX.pkg でインストール {#j62e687a}

- [ftp://ftp.tug.org/tex/mactex/](ftp://ftp.tug.org/tex/mactex/)
- [ftp://tug.org/historic/systems/mactex/](ftp://tug.org/historic/systems/mactex/)

MacTeX はサイズが大きいので，ダウンロードする際は上の TUG のサイトからではなく[ミラーサイト](/MacTeX/#mirror)を利用してください。
TUG から直接ダウンロードするよりもミラーサイトを利用したほうが早くダウンロードできます。
Google Chrome, Mozilla Firefox で MacTeX をダウンロードしてインストールできない場合は Safari でダウンロードしてください。

MacTeX のインストールの概略は以下のとおりです。

1. [MacTeX のホームページ](http://tug.org/mactex/)または[ミラーサイト](/MacTeX/#mirror)から MacTeX.pkg をダウンロードします。
1. ダウンロードした MacTeX.pkg をダブルクリックしてインストールします。
1. [TeX Live Utility](</TeX Live Utility/>) を用いて最新版までアップデートします。

> - ターミナル上で sudo tlmgr update --self --all を実行してアップデートすることもできます。

1. [TeX Live Utility](</TeX Live Utility/>) を用いてデフォルトの用紙サイズを A4 に変更します。

> - ターミナル上で sudo tlmgr paper a4 を実行してデフォルトの用紙サイズを A4 に変更することもできます。

1. 必要に応じて，付属ソフトの設定やアップデートを行います。

> - [LyX](/LyX/), [TeXstudio](/TeXstudio/), [Texmaker](/Texmaker/), [TeXworks](/TeXworks/), [TeXShop](/TeXShop/), TeXnicle などのソフトを用いる場合は，それぞれのソフトに対し適切な設定が必要です。

#### Homebrew でインストール {#s59a1243}

Homebrew で MacTeX をインストールできます。

GUI-Applications ありの場合

```
$ brew cask install mactex
$ sudo tlmgr update --self --all
$ sudo tlmgr paper a4
```

GUI-Applications なしの場合

```
$ brew cask install mactex-no-gui
$ sudo tlmgr update --self --all
$ sudo tlmgr paper a4
```

#### インストールの事例 {#n379ea53}

以下のインストールのやり方などの事例も参照してください。

<!-- 上記の標準的なインストールが想定していない特殊なケースや特別な対応が求められた -->
<!-- ケースを中心に，参考事例を紹介するのがよろしいかと思います。 -->
- [MyTeXpert:MacTeX](https://web.archive.org/web/20211022201430/https://mytexpert.osdn.jp/?MacTeX)
- [Mac OS X&#x28;Mojave)にLaTeX環境を構築する\[VSCode版\]｜てくてくぷれいす](http://murabitoleg.com/mac-vscode-latex/)
- [MacTeX Live 2018をインストールした：パソコンや自然科学っぽい話題：So-netブログ](https://math-sci.blog.so-net.ne.jp/2018-05-01)
- [MacTeX 2018 のインストール＆日本語環境構築法 (TeX Alchemist Online)](http://doratex.hatenablog.jp/entry/20180501/1525144736)
- [MacTeXに関する投稿 - Qiita](https://qiita.com/tags/MacTeX)
- [Mac 用 TeX による英文・和文のタイプセット](http://fujioizumi.verse.jp/)
- [TeX/Install - 松浦高志のWikiページ](http://user.ecc.u-tokyo.ac.jp/users/user-15826/wiki/?TeX/Install)
- [https://mac.softpedia.com/get/Developer-Tools/MacTeX.shtml](https://mac.softpedia.com/get/Developer-Tools/MacTeX.shtml)

<!-- MacTeX-2016 の場合 -->
<!-- -[[MacTeX 2016 のインストール＆日本語環境構築法 (El Capitan 以前/以後両対応)  (TeX Alchemist Online):http://doratex.hatenablog.jp/entry/20160608/1465311609]] -->
<!-- -[[[El Capitan] MacTeX-2016をインストールする:https://qiita.com/Aruneko/items/6a524896df0e90181044]] -->
<!-- -[[LaTeX + Vim + Mendeley Desktopで論文執筆環境（on Mac）を整える：インストール編:https://qiita.com/KeitaNakamura/items/9163124ba8cbad3e0a68]] -->

<!-- MacTeX-2015 の場合 -->
<!-- -[[TeX環境の構築方法【OS X El Capitan】:http://kengo92i.hatenablog.jp/entry/2016/05/04/204519]] -->
<!-- -[[OS X El Capitan に Homebrew を使って TeX Live 2015 をインストールする手順:https://snap.textfile.org/20151006085255/]] -->

<!-- 以下は TeX Live 2014 以前に書かれたものですが，中には統合環境のセットアップや -->
<!-- 不具合対応まで書かれていたりするので，残しておきたいと思います． -->
<!-- もし不要だと判断されたならば，削除ではなくコメントアウトにとどめてください． -->
<!-- ときどき，記事の管理者が同じ URL で最新の TeX Live 対応の追記をすることがあり， -->
<!-- これは意外と（2014 → 2015 とアップデートしたい人などに）有用だったりします． -->
<!-- そして，そんな場合は上の最新記事に“昇格”です． -->

<!-- 念のため TeX Live 2014 対応のものも残しておきます． -->
<!-- -[[Mac OS YosemiteへのTeX環境の導入(含TeXStudio):https://karlsnautr.blogspot.jp/2015/05/mac-os-yosemitetextexstudio.html]] -->
<!-- -[『Fuzoku実践入門』サンプルリポジトリの紹介:http://learning-fuzoku.hatenablog.com/entry/2014/11/11/163019]] -->
<!-- - -[『Fuzoku実践入門』環境サンプルファイル:https://github.com/akinomurasame/learning-fuzoku-sample] -->
<!-- -[[MacTeX 2014 - 一歩前進:http://succzero.hatenablog.com/entry/2014/07/17/041211]] -->
<!-- -[[Sublime TextでTeX論文執筆できるようにした時のメモ:http://kzhrknt.hatenablog.com/entry/2014/09/14/032907]] -->

### アンインストール {#uninstalling}

- [Uninstalling - MacTeX - TeX Users Group](http://www.tug.org/mactex/uninstalling.html)
- [Homebrewを使ったmactexのインストール・アンインストール](https://oversleptabit.com/archives/4701)
- [MacTexのアンインストール](http://ikapblg.blog.fc2.com/blog-entry-141.html)

### リリース情報 {#c5157a75}

[MacTeX - TeX Users Group](http://tug.org/mactex/) を参照。

### ミラーサイト (MacTeX) {#mirror}

- <strong>HTTP</strong>
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
    - [http://mirror.ctan.org/systems/mac/mactex/](http://mirror.ctan.org/systems/mac/mactex/)
    - [http://core.ring.gr.jp/pub/text/CTAN/systems/mac/mactex/](http://core.ring.gr.jp/pub/text/CTAN/systems/mac/mactex/)

- <strong>FTP</strong>
    - [ftp://ftp.jaist.ac.jp/pub/CTAN/systems/mac/mactex/](ftp://ftp.jaist.ac.jp/pub/CTAN/systems/mac/mactex/)
    - [ftp://ftp.naist.jp/pub/CTAN/systems/mac/mactex/](ftp://ftp.naist.jp/pub/CTAN/systems/mac/mactex/)
    - [ftp://ftp.nara.wide.ad.jp/pub/CTAN/systems/mac/mactex/](ftp://ftp.nara.wide.ad.jp/pub/CTAN/systems/mac/mactex/)
    - [ftp://ftp.kddilabs.jp/pub/ctan/systems/mac/mactex/](ftp://ftp.kddilabs.jp/pub/ctan/systems/mac/mactex/)
    - [ftp://ftp-srv2.kddilabs.jp/TeX/ctan/systems/mac/mactex/](ftp://ftp-srv2.kddilabs.jp/TeX/ctan/systems/mac/mactex/)
    - [ftp://ftp.ne.jp/pub/ctan/systems/mac/mactex/](ftp://ftp.ne.jp/pub/ctan/systems/mac/mactex/)
    - [ftp://srv2.ftp.ne.jp/pub/ctan/systems/mac/mactex/](ftp://srv2.ftp.ne.jp/pub/ctan/systems/mac/mactex/)
    - [ftp://ftp.riken.go.jp/pub/CTAN/systems/mac/mactex/](ftp://ftp.riken.go.jp/pub/CTAN/systems/mac/mactex/)
    - [ftp://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/mac/mactex/](ftp://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/mac/mactex/)
    - [ftp://ftp.u-aizu.ac.jp/pub/tex/CTAN/systems/mac/mactex/](ftp://ftp.u-aizu.ac.jp/pub/tex/CTAN/systems/mac/mactex/)
    - [ftp://ftp.core.ring.gr.jp/pub/text/CTAN/systems/mac/mactex/](ftp://ftp.core.ring.gr.jp/pub/text/CTAN/systems/mac/mactex/)
