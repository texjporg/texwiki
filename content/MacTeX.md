---
title: "MacTeX"
url: "/MacTeX/"
date: 2016-05-04T20:24:06Z
pukiwiki: "MacTeX"
---

# MacTeX

## [MacTeX](https://tug.org/mactex/) {#mactex}

MacTeX は [TeX Live](</TeX Live/>) をベースにした macOS 専用の TeX ディストリビューションです。
TeX Live をフルインストールし、オプションでいくつかの追加アプリケーションもインストールします。

<strong>公式サイト</strong>

- [MacTeX - TeX Users Group](https://tug.org/mactex/)
- [MacTeX Technical Working Group](https://www.tug.org/twg/mactex/)
- [MacTeX Screen Saver](https://www.tug.org/tug2003/mactex/)
    - [MacTeX Screen Saver](https://www.tug.org/tug2003/mactex/screensaver.html)
        - [screen image](https://www.tug.org/tug2003/mactex/screen_images/)

MacTeX には、ベースとなっている [TeX Live](</TeX Live/>) と同じく [e-upTeX](/upTeX,upLaTeX/), [XeTeX](/XeTeX/), [LuaTeX](/LuaTeX/), [LuajitTeX](/LuajitTeX/) が収録されています。

***

***

### MacTeX の中身 {#defa4d85}

MacTeX には TeX Live のほかに、複数の GUI アプリケーションと Ghostscript が含まれています。
MacTeX.pkg からインストールする際に、インストールの種類で \[カスタマイズ\] をクリックするとインストールするパッケージを選択できます。

以下は収録パッケージについての説明です。

#### TeXLive-2026 {#v03e546d}

TeX Live 本体です。
MacTeX は TeX Live の scheme-full に対応していますので、TeX Live に含まれるすべてのパッケージをインストールします。

#### GUI Applications {#a9bfcdb5}

インストールするとアプリケーションフォルダに TeX フォルダが作成されます。
TeX フォルダには READ ME FIRST.pdf と以下のアプリが収録されています。

- [BibDesk](/BibDesk/)
    - 文献管理ソフト。

- [LaTeXiT](/LaTeXiT/)
    - 単独の数式を作成して他のアプリケーションにコピペするのに便利なアプリ。

- [TeX Live Utility](</TeX Live Utility/>)
    - [tlmgr](/tlmgr/)（[TeX Live Manager](</TeX Live Manager/>)）の macOS ネイティブの GUI アプリ。
    - 最初の起動時に，最新版へのアップデートを促されます。複数のリポジトリを並行管理できます。
    - デフォルトの用紙サイズはメニューの \[設定\] &gt; \[用紙寸法を変更…\] を選択することで設定できます（A4またはレター）。
    - 過去のバージョンの MacTeX がインストールされている場合，メニューの \[設定\] &gt; \[TeX Live の既定版を変更…\] を選択することで使用する TeX Live を切り替えることができます。

- [TeXShop](/TeXShop/)
    - macOS 専用の TeX 統合環境。
    - メニューの「TeXShop」→「アップデートを確認...」を選択して TeXShop をアップデートします。アップデートが失敗する場合は，[TeXShop の公式サイト](https://pages.uoregon.edu/koch/texshop/)から最新版の TeXShop をダウンロードし，アプリケーションフォルダ内の TeXShop.app を置き換えてください。
    - 設定は [TeXShop/設定](</TeXShop/設定/>) を参照してください。

- [hintview](https://hint.userweb.mwn.de/hint/hintview.html)
    - [HINT文書](https://hint.userweb.mwn.de/hint/hitex.html)ビューア。

#### Ghostscript 10.07.0<br>Ghostscript Dynamic Library {#n1354f54}

[Ghostscript](/Ghostscript/) は PostScript/PDF インタプリタです。

以下の場合に当てはまる場合はチェックをはずします。

<!-- -MacTeX 付属の Ghostscript を使用すると不具合が発生する場合。- -&gt; [[Richard Koch Home Page:https://pages.uoregon.edu/koch/]] から不具合が発生しないバージョンを入手してください。 -->
- MacTeX のリリース後に新しい Ghostscript がリリースされた場合。--&gt; [Richard Koch Home Page](https://pages.uoregon.edu/koch/) から最新版を入手してください。
- Homebrew または MacPorts を使用して Ghostscript をインストールする場合。

### 諸注意 {#c31c9ec0}

MacTeX には「一度インストールすると、完全なアンインストールは難しい」という性質があります。macOS に TeX 環境を構築する手段には、他にも TeX Live 公式インストーラを利用する方法等があります。MacTeX を利用するべきか、TeX Live 公式インストーラを利用するべきか、それ以外の方法を利用するべきかは <strong>MacTeX をインストールする前に</strong>よく考えて判断してください。

- TeX Live 公式インストーラを用いる方法については [TeX Live/Mac](</TeX Live/Mac/>) または [日本語版『TeX Liveガイド』](https://wtsnjp.com/pdf/texlive-ja.pdf#subsubsection.3.1.2)を参照してください
- 参考：[MacTeX をおすすめできる場合とそうでない場合（私見） | ラング・ラグー](https://blog.wtsnjp.com/2020/07/07/about-mactex/)

### インストール {#t244993f}

#### MacTeX.pkg でインストール {#j62e687a}

MacTeX はサイズが大きいので、ダウンロードする際は[ミラーサイト (MacTeX)](/MacTeX/#mirror)を利用してください。
TUG から直接ダウンロードするよりもミラーサイトを利用したほうが早くダウンロードできます。
Google Chrome、Mozilla Firefox で MacTeX をダウンロードしてインストールできない場合は Safari でダウンロードしてください。

MacTeX のインストールの概略は以下のとおりです。

1. [MacTeX のホームページ](http://tug.org/mactex/)または[ミラーサイト (MacTeX)](/MacTeX/#mirror)から MacTeX.pkg をダウンロードします。
1. ダウンロードした MacTeX.pkg をダブルクリックしてインストールします。
1. ターミナルを起動します。
    1. sudo tlmgr update --self --all を実行して最新版にアップデートします。
    1. sudo tlmgr paper a4 を実行してデフォルトの用紙サイズを A4 に変更します。
1. 必要に応じて，付属ソフトの設定やアップデートを行います。
    1. [LyX](/LyX/), [TeXstudio](/TeXstudio/), [Texmaker](/Texmaker/), [TeXworks](/TeXworks/), [TeXShop](/TeXShop/) などのソフトを用いる場合は，それぞれのソフトに対し適切な設定が必要です。

#### Homebrew Cask でインストール {#s59a1243}

- [https://formulae.brew.sh/cask/mactex](https://formulae.brew.sh/cask/mactex)
- [https://formulae.brew.sh/cask/mactex-no-gui](https://formulae.brew.sh/cask/mactex-no-gui)

Homebrew Cask で MacTeX をインストールできます。

GUI Applications ありの場合

```
$ brew install --cask mactex
$ eval "$(/usr/libexec/path_helper)"
$ sudo tlmgr update --self --all
$ sudo tlmgr paper a4
```

GUI Applications なしの場合

```
$ brew install --cask mactex-no-gui
$ eval "$(/usr/libexec/path_helper)"
$ sudo tlmgr update --self --all
$ sudo tlmgr paper a4
```

#### インストールの事例 <a id="installationexample"></a> {#n379ea53}

以下のインストールのやり方などの事例も参照してください。

<!-- 上記の標準的なインストールが想定していない特殊なケースや特別な対応が求められた -->
<!-- ケースを中心に，参考事例を紹介するのがよろしいかと思います。 -->
- [MacでVSCode＋TeX環境を構築する最短手順【2026年版】](https://j7tech.jp/blog/mac-vscode-tex-setup-2026/)
- [2026年のコンピューターノウハウ (Mac) 2 MacTeX 2026が来ました (ただのリンク)](https://m-katsurada.sakura.ne.jp/knowhow-2026/node2.html)
- [理系の必須ツールLaTeX環境構築(Mac編)【新歓ブログリレー2026 vol.6】](https://tpgd.jp/blog/%E7%90%86%E7%B3%BB%E3%81%AE%E5%BF%85%E9%A0%88%E3%83%84%E3%83%BC%E3%83%ABlatex%E7%92%B0%E5%A2%83%E6%A7%8B%E7%AF%89mac%E7%B7%A8%E3%80%90%E6%96%B0%E6%AD%93%E3%83%96%E3%83%AD%E3%82%B0%E3%83%AA%E3%83%AC/)
- [VSCodeから編集できるLaTeX環境構築 Mac編【環境構築】【Mac】【LaTeX】](https://qiita.com/namitech7373/items/cc94cf5d68a7ba21c4bf)
- [HomebrewでMacにTeX環境を構築する方法](https://zenn.dev/haruki1009/articles/7e5ae0ad825fa2)
- [LaTeX+BibLaTeX+VSCodeでスッキリ環境構築 (Mac) (2024)](https://qiita.com/Muon/items/f4d4b93fb1f9cbec51d0)
- [uplatex on Mac](https://qiita.com/takaf05/items/c36754a4e0c09641d7d7)
- [MacBook 研究室環境2024](https://zenn.dev/kogikun/articles/94aacb7fd5f86c)
- [【初心者向け】Visual Studio CodeでLaTeX環境構築 （for Mac）](https://note.com/nonnonlife/n/nf7791a7df940)
- [MacにTeXをインストールする方法【MacTeX】](https://mathphysnote.com/mactex-install/)
- [Mac Ventura 対応 LaTeX環境の構築(インストール,VSCode設定)](https://frees.jp/2023/04/08/latex%E7%92%B0%E5%A2%83%E3%81%AE%E6%A7%8B%E7%AF%89%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%ABvscode/)
- [MacにHomebrewを用いてTexをインストールする](https://blog.interstellar.co.jp/2022/07/15/installing-tex-on-a-mac-using-brew/)
- [TeX/Install - 松浦高志のWikiページ](https://museion.sakura.ne.jp/wiki/?TeX/Install)
- [M1 Mac がやってきた（ソフトウェア設定編（4））](https://iio-lab.blogspot.com/2021/05/set-up-log-for-new-M1-mac-05.html)
- [https://zenn.dev/search?q=MacTeX&mode=semantic](https://zenn.dev/search?q=MacTeX&mode=semantic)
- [mathhirachi - macosx](https://sites.google.com/site/mathhirachi/ms_web/macosx)
- [MacTeXに関する投稿 - Qiita](https://qiita.com/tags/MacTeX)

<!-- MacTeX-2019 の場合 -->
<!-- -[[MacTeX 2019 のインストール＆日本語環境構築法 (TeX Alchemist Online):https://doratex.hatenablog.jp/entry/20190502/1556775026]] -->

<!-- MacTeX-2016 の場合 -->
<!-- -[[MacTeX 2016 のインストール＆日本語環境構築法 (El Capitan 以前/以後両対応)  (TeX Alchemist Online):https://doratex.hatenablog.jp/entry/20160608/1465311609]] -->
<!-- -[[[El Capitan] MacTeX-2016をインストールする:https://qiita.com/Aruneko/items/6a524896df0e90181044]] -->

<!-- MacTeX-2015 の場合 -->
<!-- -[[TeX環境の構築方法【OS X El Capitan】:https://kengo92i.hatenablog.jp/entry/2016/05/04/204519]] -->
<!-- -[[OS X El Capitan に Homebrew を使って TeX Live 2015 をインストールする手順:https://snap.textfile.org/20151006085255/]] -->

<!-- 以下は TeX Live 2014 以前に書かれたものですが，中には統合環境のセットアップや -->
<!-- 不具合対応まで書かれていたりするので，残しておきたいと思います． -->
<!-- もし不要だと判断されたならば，削除ではなくコメントアウトにとどめてください． -->
<!-- ときどき，記事の管理者が同じ URL で最新の TeX Live 対応の追記をすることがあり， -->
<!-- これは意外と（2014 → 2015 とアップデートしたい人などに）有用だったりします． -->
<!-- そして，そんな場合は上の最新記事に“昇格”です． -->

<!-- 念のため TeX Live 2014 対応のものも残しておきます． -->
<!-- -[[Mac OS YosemiteへのTeX環境の導入(含TeXStudio):https://karlsnautr.blogspot.com/2015/05/mac-os-yosemitetextexstudio.html]] -->
<!-- -[『Fuzoku実践入門』サンプルリポジトリの紹介:https://learning-fuzoku.hatenablog.com/entry/2014/11/11/163019]] -->
<!-- - -[『Fuzoku実践入門』環境サンプルファイル:https://github.com/akinomurasame/learning-fuzoku-sample] -->
<!-- -[[MacTeX 2014 - 一歩前進:https://succzero.hatenablog.com/entry/2014/07/17/041211]] -->

### アンインストール {#uninstalling}

- [Uninstalling - MacTeX - TeX Users Group](http://www.tug.org/mactex/uninstalling.html)
- [MacTeX で、使用しないバージョンの TeX Live を削除してみる。](https://ez-net.jp/article/29/CEWazhdF/8ITDHJPSLPq_/)
- [Homebrewを使ったmactexのインストール・アンインストール](https://oversleptabit.com/archives/4701)
- [MacTexのアンインストール](https://blog.ikappio.com/how-to-uninstall-mactex/)
- \[[macOS + VSCode\] ローカルでLaTeXを書けるようにするよ#失敗してやり直す時](https://qiita.com/ikaring/items/980e1573151bba64118c#%E5%A4%B1%E6%95%97%E3%81%97%E3%81%A6%E3%82%84%E3%82%8A%E7%9B%B4%E3%81%99%E6%99%82)

### リリース情報 {#c5157a75}

[MacTeX - TeX Users Group](http://tug.org/mactex/) を参照。

### ミラーサイト (MacTeX) {#mirror}

- <strong>HTTPS</strong>
    - CTAN ミラー
        - [https://mirror.ctan.org/systems/mac/mactex/](https://mirror.ctan.org/systems/mac/mactex/)
    - JAIST 北陸先端科学技術大学院大学 (石川県能美市)
        - [https://ftp.jaist.ac.jp/pub/CTAN/systems/mac/mactex/](https://ftp.jaist.ac.jp/pub/CTAN/systems/mac/mactex/)
    - 山形大学 工学部／大学院理工学研究科／大学院有機材料システム研究科 (山形県米沢市)
        - [https://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/mac/mactex/](https://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/mac/mactex/)
    - 理化学研究所 (埼玉県和光市)
        - [https://ftp.riken.jp/CTAN/systems/mac/mactex/](https://ftp.riken.jp/CTAN/systems/mac/mactex/)
    - mirror.aria-on-the-planet.es (ICSCoE 産業サイバーセキュリティセンター (東京都千代田区外神田４丁目１４−１ 秋葉原UDX 20階))
        - [https://mirror.aria-on-the-planet.es/CTAN/systems/mac/mactex/](https://mirror.aria-on-the-planet.es/CTAN/systems/mac/mactex/)
    - ctan.tikz.jp (vmd139524.contaboserver.net) (Contabo Asia Private Limited)
        - [https://ctan.tikz.jp/systems/mac/mactex/](https://ctan.tikz.jp/systems/mac/mactex/)
    - jp.mirrors.cicku.me (Cloudflare CDN)
        - [https://jp.mirrors.cicku.me/ctan/systems/mac/mactex/](https://jp.mirrors.cicku.me/ctan/systems/mac/mactex/)
    - mirror.kris.fail (Cloudflare CDN)
        - [https://mirror.kris.fail/ctan/systems/mac/mactex/](https://mirror.kris.fail/ctan/systems/mac/mactex/)
