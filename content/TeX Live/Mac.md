---
title: "TeX Live/Mac"
url: "/TeX Live/Mac/"
date: 2017-06-06T12:01:50Z
pukiwiki: "TeX Live/Mac"
---

# TeX Live/Mac

[TeX Live](</TeX Live/>) > [macOS](/Mac/)

***

***

## インストール {#install}

macOS に TeX Live をインストールする場合，以下の方法があります。
動作環境については[TeX Live 2025 のバイナリの動作環境](#binary)をお読みください。

- TeX Live 公式のインストーラを使用する
    - install-tl を入手してターミナルから実行します → [こちら](#texlive-install-official)
- TeX Live をベースにした macOS 専用の TeX ディストリビューションを入手する
    - MacTeX：TeX Live のフルインストールと，Ghostscript および関連 GUI アプリケーションのインストールを行います。 → [こちら](/MacTeX/)
    - BasicTeX：TeX Live のサブセット (scheme-small) をインストールします。 → [こちら](/BasicTeX/)
    - 小川版 Drag &amp; Drop UpTeX：TeX Live のサブセット (scheme-small) に日本語パッケージ + α が予め追加されており，日本語フォントのセットアップを自動で簡単に行う GUI も付いています。 → [こちら](</Drag and Drop UpTeX/>)
- パッケージ管理システムを利用する
    - Homebrew 向けパッケージ → [こちら](#texlive-install-brew)
    - Homebrew Cask 向けパッケージ → [こちら](#texlive-install-brew-cask)
    - MacPorts 向けパッケージ → [こちら](#texlive-install-port)

以下でそれぞれのインストール法およびセットアップ法を説明します。

### TeX Live 2025 のバイナリの動作環境 {#binary}

macOS で動作する TeX Live 2025 は，universal-darwin バイナリです[^1]。universal-darwin バイナリは基本的に [Apple セキュリティアップデート](https://support.apple.com/ja-jp/HT201222)が提供されている macOS のみをサポートする方針です。
MacTeX-2025 / BasicTeX-2025 に付属する TeX Live も universal-darwin バイナリです。

TeX Live 2025 universal-darwin バイナリが動作する macOS

- macOS Sequoia 15
- macOS Sonoma 14
- macOS Ventura 13
- macOS Monterey 12
- macOS Big Sur 11
- macOS Catalina 10.15
- macOS Mojave 10.14

<!-- 「クソ」という言葉は、ネタであることが明確でないかぎり、一般的に読み手が不快に感じると思うので、一旦、コメントアウトしておきます。 -->
<!-- このような自分のやりたいことがすぐにできないだけで、自分の門外漢のOSSに対して、暴言の吐く記事を載せる必要もないと考えます。 -->
<!-- このような執拗に「ヒラギノフォント」に拘る人のために、一番上に「ヒラギノフォントを埋め込む」方法を1行ぐらいで書いてあげたら良いのではないでしょうか？　一発でできないかぎり、またこのような人物が現れるかねないでしょう。 -->
<!-- @kauplan 氏によって Qiita に投稿された記事「[[LaTeXの環境構築がクソ^H^H苦行すぎる（macOS Mojave+MacTex 2018）:https://qiita.com/kauplan/items/44ac2ecc37a31babb577]]」によると、Mojaveでの問題点が「[[TLContrib]]」で説明されているらしいのですが、本ページからのリンクがないためたいへんご苦労された様子です。Mojave の人はそちらの記事も参照してみると良いでしょう。 -->

### TeX Live 公式のインストーラの使用 {#texlive-install-official}

TeX Live のインストールガイド

- [https://tug.org/texlive/quickinstall.html](https://tug.org/texlive/quickinstall.html)
- [https://tug.org/texlive/doc/texlive-en/texlive-en.html#x1-170003.1.2](https://tug.org/texlive/doc/texlive-en/texlive-en.html#x1-170003.1.2)
- [https://tug.org/texlive/doc/texlive-ja/texlive-ja.pdf#subsubsection.3.1.2](https://tug.org/texlive/doc/texlive-ja/texlive-ja.pdf#subsubsection.3.1.2)

を見ると [MacTeX](/MacTeX/) が推奨されていますので特にこだわりがなければ MacTeX をお勧めします。ここでは MacTeX ではなく TeX Live 公式のインストーラを使用します。[M1 Mac](https://okumuralab.org/~okumura/macosx/m1.html) の TeX
の項目にも説明があります。

まず，[ミラーサイト](</TeX Live/#tlnet>)から install-tl-unx.tar.gz をダウンロードします．

```
$ curl -OL https://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz
```

<!-- Unrecognized archive formatのエラーはLオプションがないのが原因？ -->
<!-- $ curl -O https://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz -->

install-tl-unx.tar.gz を展開します．

```
$ tar xvf install-tl-unx.tar.gz
```

<!-- なぜ無意味に yamagata-u.ac.jp 限定にする？→（ここでUnrecognized archive formatのエラーが出た方は、こちらからcurlするとうまくいくかもしれません。https://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/texlive/tlnet/install-tl-unx.tar.gz） -->

展開したインストーラのディレクトリに移動します．

```
$ cd install-tl-2*
```

<!-- bashならこのままでいいですが，zshだとinstall-tl-unx.tar.gzをrenameしないとcd: string not in pwdとなります... -->

root 権限でインストーラを実行します．
デフォルトでは Tcl/Tk による GUI インストーラが起動します．-no-gui オプションでテキストモードで起動します．-repository オプションでダウンロードするリポジトリを指定できます．

```
$ sudo ./install-tl -no-gui -repository https://mirror.ctan.org/systems/texlive/tlnet/
```

```
...
```

```
Actions:
 <I> start installation to hard disk
 <H> help
 <Q> quit
```

```
Enter command: I
```

I を入力してインストールを開始します．
サーバーの接続エラーが発生したり，何らかの理由により取得したアーカイブに問題があったりした場合はインストールが途中でストップします．
この場合は，以下のコマンドで途中から再開できたりできなかったりします．

```
$ sudo ./install-tl -no-gui -profile installation.profile
```

再開できない場合は[接続先を変更](</TeX Live/#tlnet>)するか，または [ISO ファイル](</TeX Live/#iso>)をミラーサイトからダウンロードしてインストールしてください．

インストールが終了したら /usr/local/bin ディレクトリ配下にシンボリックリンクを追加します．

```
$ sudo /usr/local/texlive/????/bin/*/tlmgr path add
```

上記の ???? は 2025，\* は universal-darwin にマッチすることが想定されていますがうまく動作しない場合は以下のようにして具体的なディレクトリ名を指定してください．

```
$ sudo /usr/local/texlive/2025/bin/universal-darwin/tlmgr path add
```

<!-- ↑ TeX Live 2021からディレクトリ名が変わったみたいです， -->

<!-- https://okumuralab.org/tex/mod/forum/discuss.php?d=2675#p17225 により TeX Live 2020 の tlmgr で対応されたようです。 -->
<!-- ↓ -->
<!-- **Xcode のインストール要求ダイアログについての注意 [#xcode] -->
<!--  -->
<!-- Xcode がインストールされていない環境下では，TeX Live のインストーラの実行中，および tlmgr によるアップデートの実行中に，次のようなダイアログが表示されて実行が中断される問題が知られています。 -->
<!--  -->
<!-- > -->
<!-- &ref(TeX Live/Mac/XcodeCommandLineTools.png,50%); -->
<!-- < -->
<!--  -->
<!-- cc コマンドの実行のために Xcode Command Line Tools のインストールが要求されているのですが，実際には，Xcode のインストールは必須ではありません。 -->
<!-- 「今はしない」をクリックしてスキップして問題なく，そのままインストール・アップデートが続行できます。 -->
<!--  -->
<!-- なお，このダイアログを出さずに tlmgr を実行するために，次のような回避策が存在します。 -->
<!-- 例えば -->
<!--  -->
<!-- $ sudo tlmgr update - -self -->
<!--  -->
<!-- の代わりに -->
<!--  -->
<!-- $ sudo bash -c "CC=: tlmgr update - -self" -->
<!--  -->
<!-- と実行すれば，cc コマンドを無効化して tlmgr を実行できます（ : は「何もしない」という bash の組み込みコマンド）。 -->
<!-- この場合，Xcode のインストールが要求されることなく，tlmgr の実行が正常に完了します。 -->

### パッケージ管理システムによる TeX Live、MacTeX、BasicTeX のインストール {#texlive-install-pacman}

#### [Homebrew](https://brew.sh/) によるインストール {#texlive-install-brew}

- [https://formulae.brew.sh/formula/texlive](https://formulae.brew.sh/formula/texlive)

```
$ brew install texlive
```

#### [Homebrew Cask](https://formulae.brew.sh/cask/) によるインストール {#texlive-install-brew-cask}

- [https://formulae.brew.sh/cask/mactex](https://formulae.brew.sh/cask/mactex)
- [https://formulae.brew.sh/cask/mactex-no-gui](https://formulae.brew.sh/cask/mactex-no-gui)
- [https://formulae.brew.sh/cask/basictex](https://formulae.brew.sh/cask/basictex)

TeX Live をフルインストールする場合は MacTeX をインストールしてください。
Homebrew Cask で MacTeX をインストールできます。
Ghostscript などのツールも Homebrew でインストールできます。

GUI-Applications ありの場合

```
$ brew install --cask mactex
$ eval "$(/usr/libexec/path_helper)"
$ sudo tlmgr update --self --all
$ sudo tlmgr paper a4
```

GUI-Applications なしの場合

```
$ brew install --cask mactex-no-gui
$ eval "$(/usr/libexec/path_helper)"
$ sudo tlmgr update --self --all
$ sudo tlmgr paper a4
```

TeX Live をフルインストールしたくない場合は BasicTeX をインストールしてください。
Homebrew Cask で BasicTeX をインストールできます。

```
$ brew install --cask basictex
$ eval "$(/usr/libexec/path_helper)"
$ sudo tlmgr update --self --all
$ sudo tlmgr paper a4
$ sudo tlmgr install collection-langjapanese collection-latexextra collection-luatex
```

インストールのやり方などの事例も参考になります。

- [MacTeX](/MacTeX/#installationexample)
- [BasicTeX](/BasicTeX/#installationexample)

#### [MacPorts](http://www.macports.org/) によるインストール {#texlive-install-port}

- [TeXLivePackages – MacPorts](https://trac.macports.org/wiki/TeXLivePackages)
- [https://ports.macports.org/search/?installed_file=&q=texlive&name=on](https://ports.macports.org/search/?installed_file=&q=texlive&name=on)
- [https://github.com/macports/macports-ports/tree/master/tex](https://github.com/macports/macports-ports/tree/master/tex)
- [https://ports.macports.org/port/texlive-lang-japanese/](https://ports.macports.org/port/texlive-lang-japanese/)
- [https://ports.macports.org/port/texlive-latex-extra/](https://ports.macports.org/port/texlive-latex-extra/)
- [https://ports.macports.org/port/texlive-luatex/](https://ports.macports.org/port/texlive-luatex/)

MacPorts 用に TeX Live/MacPorts というパッケージが提供されています。
TeX Live/MacPorts をフルインストールする場合は

```
$ sudo port install texlive +full
```

日本語関連のパッケージと texlive-latex-extra と texlive-luatex をインストールする場合は

```
$ sudo port install texlive-lang-japanese texlive-latex-extra texlive-luatex
```

を実行します。

インストールのやり方などの事例も参考になります。

- [MacでTeXをインストールし直す方法](https://sites.google.com/site/kazunoriweb/memo/%E9%9B%91%E8%A8%98%E9%9B%86/mac%E3%81%A7tex%E3%82%92%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%81%97%E7%9B%B4%E3%81%99%E6%96%B9%E6%B3%95)
- [SphinxでLatex拡張を使ってPDF出力する](https://qiita.com/H-A-L/items/8222d894daf1552cef67)
- [LaTeXをmacportsを使ってインストール](http://regry358.hatenablog.com/entry/2014/06/02/155405)
- [OSXへのTeXliveインストール (MacTex / MacPorts)](http://sphinx-users.jp/cookbook/pdf/latex-install-osx.html)

## TeX Live のセットアップ {#bcb0d462}

### [tlmgr](/tlmgr/) を使用してのアップデート {#p3c663c9}

ターミナルで，以下のコマンドを実行します。

```
$ sudo tlmgr update --self --all
```

&#x2d;-self は tlmgr 自体のアップデート，--all は TeX Live 構成要素のアップデートを実行します。
tlmgr は複数のリポジトリを管理できます。
[TeX Live Utility](</TeX Live Utility/>) は tlmgr の機能を GUI で実現するものですので，上記の機能をメニュー項目から実行できます。

### 原ノ味フォント {#zdc78348}

原ノ味フォントは標準でインストールされていますので，updmap-sys の設定だけで PDF に埋め込めます。

### IPAexフォント/IPAフォント {#x667dd85}

IPAexフォント/IPAフォントは標準でインストールされていますので，updmap-sys の設定だけで PDF に埋め込めます。

### みかちゃんフォントなどのフリー書体・その他の日本語書体 {#i9ff3350}

[みかちゃんフォント](https://www.mia-lab.com/mf/)などのフリー書体（[フォント](</フォント/>)参照）や，その他の日本語書体を埋め込みたい場合は，そのためのスタイルファイルを利用するのが便利でしょう。
設定は，多少面倒です。
[PXmika パッケージ](http://zrbabbler.sp.land.to/pxmika.html)，[MacTeX 2013とみかちゃんフォントの設定](http://appcar.jp/wp/casual/2013/06/19/mactex-2013-mikachan/)を参考にしてください。
自力で一から構築する場合は [MacPortsのpTeXにおける和文多書体環境の整えかた](https://miko.org/~tatyana/tech/OSX/pTeX/fonts.html) が参考になるかもしれません。

### updmap(-sys) の使用に関する注意点 {#qdce07c2}

- <strong>注意</strong> updmap-sys ではなく updmap を使用した場合は ユーザー個別の texmf（TEXMFHOME）に設定が書き込まれ，その個別設定の方が updmap-sys によるシステム全体の設定よりも優先されます。
    tlmgr および kanji-config-updmap-sys は updmap-sys を内部で呼びだしますが，-sys なしの kanji-config-updmap-sys は -sys なしの updmap を実行します。
    <strong>-sys をつけたコマンドによる新しい設定が反映されない場合は，-sys なしの updmap による設定が TEXMFHOME に残ってないか確認してください</strong>。（-sys なしの updmap による設定は不可視ファイルとなっています。）

- updmap-sys は TEXMFLOCAL を検索対象とはしますが，TEXMFHOME は検索しませんので，フォントは原則として TEXMFLOCAL に置くことが推奨されています。(→ [Font Installation with TeX Live 2012+](https://web.archive.org/web/20220121024503/https://tug.org/mactex/TeXLive2018+Changes.pdf) を参照)
    TEXMFHOME にフォントを置く場合は，updmap（-sys なし）を実行する必要があります。
    - 埋め込むフォントを細かく制御したい場合は，手動で map ファイルを書き換えます。

### kanji-config-updmap(-sys) {#hf34afcc}

- [kanji-config-updmap](https://github.com/texjporg/jfontmaps/blob/master/script/kanji-config-updmap.pl) を使用すれば PDFへの埋め込みフォントの指定，および埋め込み状況の確認ができます。
    ターミナル上で実行します。
    新規インストール直後など，kanji-config-updmap-sys で設定してもPDFへの埋め込みがされない場合は，上の updmap-sys を使う方法を試してください。

    ```
    $ sudo kanji-config-updmap-sys <fontname>  （otf-<fontname>.map にしたがってフォントを埋め込む）
    $ sudo kanji-config-updmap-sys auto        （自動的に <fontname> のいずれかを埋め込む）
    $ sudo kanji-config-updmap-sys nofont      （PDF にフォントを埋め込まない）
    $ sudo kanji-config-updmap-sys status      （現在の埋め込み設定を確認する）
    ```

    - オプションとして --jis2004 を指定すると，JIS2004 字形を使用する設定となります。
    - kanji-config-updmap-sys は内部で updmap-sys を呼び出しますので，設定はシステムレベルで共通の設定として保存されます。
        ユーザー個別の設定としてフォントを指定したいときは，kanji-config-updmap を使用します。
    - ptex2pdf を使用するとその都度フォントを指定できます。（下の例は upLaTeX + dvipdfmx で IPAexフォントを使用して PDF を作成するものです。）

        ```
        $ ptex2pdf -u -l -ot '-synctex=1' -od '-f uptex-ipaex.map' hoge.tex
        ```

## TeX Live のインストールディレクトリ {#k03895bf}

インストール方法によってディレクトリが異なりますので，ここにまとめておきます。

> <table><tbody>
> <tr><td></td><td>TeX Live 2025 / MacTeX-2025</td><td><a href="https://github.com/okumuralab/bibun8">［改訂第8版］LaTeX2e美文書作成入門</a></td></tr>
> <tr><td>基本インストール</td><td style="text-align:right">/usr/local/texlive/2025</td><td style="text-align:right">/Applications/TeXLive/Library/texlive/2020</td></tr>
> <tr><td>TEXMFLOCAL</td><td style="text-align:right">/usr/local/texlive/texmf-local</td><td style="text-align:right">/Users/Shared/TeXLive/texmf</td></tr>
> <tr><td>TEXMFHOME</td><td style="text-align:right">~/Library/texmf</td><td style="text-align:right">~/TeXLive/texmf</td></tr>
> </tbody></table>
>

### 基本システムのインストール場所 {#ffbf8218}

- TeX Live 2025 および MacTeX-2025 に収録されている TeX Live は，デフォルトでは /usr/local/texlive/2025 以下にインストールされます。
- [［改訂第8版］LaTeX2e美文書作成入門](https://github.com/okumuralab/bibun8)からインストールすると，デフォルトではアプリケーションフォルダにインストールされます。

#### TEXMFLOCAL {#d2b2c9d5}

- TEXMFLOCAL とは，MacTeX/TeX Live 本体のアップデートに影響を受けないディレクトリで，そのコンピュータのユーザー全員に共通の設定を保存します。<br>
    <strong>自分でスタイルファイル（.sty）やフォントなどを追加するときは，この TEXMFLOCAL または下記の TEXMFHOME 以下に置きます。</strong>

- TeX Live 2025 および MacTeX-2025 に収録されている TeX Live による TEXMFLOCAL は /usr/local/texlive/texmf-local で，以前に作成されていない場合に新たに作成されます。
- [［改訂第8版］LaTeX2e美文書作成入門](https://github.com/okumuralab/bibun8)からのインストールでは，TEXMFLOCAL はユーザのホームフォルダの一つ上の階層「ユーザ」の中の「共有」フォルダに作成されます。

#### TEXMFHOME {#qf071757}

- TEXMFHOME はユーザー個別の設定を保存する場所です。
- TeX Live 2025 および MacTeX-2025 に収録されている TeX Live では，初期設定ではホームのライブラリ以下に収めます。
- [［改訂第8版］LaTeX2e美文書作成入門](https://github.com/okumuralab/bibun8)からのインストールでは，TEXMFHOME はユーザのホームフォルダに作成されます。

#### その他 {#w4248b01}

- $TEXMF の検索優先順位は，ターミナル上で以下のコマンドで確認できます。

    ```
    $ kpsewhich -var-value TEXMF
    ```

- TeX Live/MacTeX 2013より，最上位の texmf/ は簡便化のため texmf-dist/ と統合されました。<br>TEXMFMAIN も TEXMFDIST も共に texmf-dist/ を示します。
- ユーザー個別の TEXMF（~/以下の TEXMF）は検索優先順位が高いため，/usr/local/texlive 以下の設定よりも優先されます。<br>また，mktexlsr（ls-Rの作成）は不要です。<br>実際にターミナル上で sudo mktexlsr としても ~/以下の TEXMF に対しては ls-R は作成されません。

> <table><tbody>
> <tr><td></td><td>TeX Live 2025 / MacTeX-2025</td></tr>
> <tr><td>TEXMFCONFIG</td><td>~/Library/texlive/2025/texmf-config</td></tr>
> <tr><td>TEXMFVAR</td><td>~/Library/texlive/2025/texmf-var</td></tr>
> <tr><td>TEXMFHOME</td><td>~/Library/texmf</td></tr>
> </tbody></table>
>

- 最新版の TeX Live で問題が発生した場合は以前にインストールしていた古い TeX Live に切り替えて使用することもできます。
    TeX Live Utility のメニューから \[設定\] &gt; \[TeX Live の既定版を変更…\] を選択することで変更できます。

## その他の選択肢 {#qab24fbc}

[VirtualBox](https://www.virtualbox.org/) などの仮想マシン上に [Linux](/Linux/) をインストールし，その上で TeX Live を使用する方法もあります。
macOS を使用していて LaTeX の実行速度が遅い場合は Linux を使用するのも一つの手です。

[^1]: TeX Live 2021 で x86_64-darwin バイナリが削除されて universal-darwin バイナリに置き換えられました ([r57908](http://www.tug.org/svn/texlive?limit_changes=0&view=revision&revision=57908))。
