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

## インストール {#y09289cd}

macOS に TeX Live をインストールする場合，以下の方法があります。

- TeX Live 公式のインストーラを使用する
    - install-tl を入手してターミナルから実行
- TeX Live をベースにした macOS 専用の TeX ディストリビューションを入手する
    - MacTeX：TeX Live のフルインストールと，Ghostscript および関連 GUI アプリケーションのインストールを行います。
    - BasicTeX：TeX Live のサブセット (scheme-small) をインストールします。
        - MacTeX と BasicTeX の入手先：[http://www.tug.org/mactex/](http://www.tug.org/mactex/)
    - 小川版 [Drag &amp; Drop UpTeX](</Drag and Drop UpTeX/>)：TeX Live のサブセット (scheme-small) に日本語パッケージ + α が予め追加されています。
- パッケージ管理システムを利用する
    - Homebrew 向けパッケージ
    - MacPorts 向けパッケージ

いずれの方法でも，TeX Live をインストールして必要であれば最新版にアップデートします。

以下でそれぞれのインストール法およびセットアップ法を説明します。

### TeX Live 2018 のバイナリの動作環境に関する変更点 {#obbbdbf4}

TeX Live 2017 以降は x86_64-darwin バイナリは [Apple セキュリティアップデート](https://support.apple.com/ja-jp/HT201222)が提供されている OS のみサポートされることになりました。
[Apple セキュリティアップデート](https://support.apple.com/ja-jp/HT201222)が提供されないレガシーな OS では x86_64-darwinlegacy バイナリを使用します。
[TeX Live 2016 まで存在していた universal-darwin バイナリは TeX Live 2017 で削除され、i386-darwin バイナリと powerpc-darwin バイナリに置き換えられました](http://www.tug.org/svn/texlive?limit_changes=0&view=revision&revision=43871)。
[TeX Live 2017 の i386-darwin バイナリと powerpc-darwin バイナリは TeX Live 2018 で削除されました](http://www.tug.org/svn/texlive?view=revision&revision=47075)。

MacTeX-2018 / BasicTeX-2018 に付属する TeX Live には x86_64-darwin バイナリのみ収録されます。

下の表で自分が使用している OS はどのバイナリをインストールすればよいのか確認できます。
&#x2714; マークは OS と対応するバイナリを示しています。

<div style="text-align:center">TeX Live 2018 が動作する OS と対応するバイナリ</div>

|  | macOS 10.14 Mojave | macOS 10.13 High Sierra  | macOS 10.12 Sierra | OS X 10.11 El Capitan | OS X 10.10 Yosemite | OS X 10.9 Mavericks | OS X 10.8 Mountain Lion | Mac OS X 10.7 Lion | Mac OS X 10.6 Snow Leopard |
|---|---|---|---|---|---|---|---|---|---|
| x86_64-darwin | &#x2714; | &#x2714; | &#x2714; | &#x2714; | &#x2714; |  |  |  |  |
| x86_64-darwinlegacy |  |  |  |  |  | &#x2714; | &#x2714; | &#x2714; | &#x2714; |

### TeX Live のインストール {#texliveinstall}

TeX Live のインストールガイド

- [http://www.tug.org/texlive/quickinstall.html](http://www.tug.org/texlive/quickinstall.html)
- [http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation](http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation)

を見ると [MacTeX](/MacTeX/) が推奨されていますが，MacTeX に付属する TeX Live には x86_64-darwin バイナリのみ収録されるので，
ここでは x86_64-darwin バイナリがサポートしていない x86_64-darwinlegacy な環境でも TeX Live をインストールできるように MacTeX に付属する TeX Live ではなく TeX Live の公式サイトにあるインストーラからインストールする方法について簡単に説明します．

まず，[ミラーサイト](</TeX Live/#tlnet>)から install-tl-unx.tar.gz をダウンロードします．

```
$ curl -O http://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz
```

install-tl-unx.tar.gz を展開します．

```
$ tar xvf install-tl-unx.tar.gz
```

展開したインストーラのディレクトリに移動します．

```
$ cd install-tl*
```

root 権限でインストーラを実行します．
オプションでダウンロードするリポジトリを指定できます．

```
$ sudo ./install-tl --repository http://mirror.ctan.org/systems/texlive/tlnet/
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
$ sudo ./install-tl --profile installation.profile
```

再開できない場合は[接続先を変更](</TeX Live/#tlnet>)するか，または [ISO ファイル](</TeX Live/#iso>)をミラーサイトからダウンロードしてインストールしてください．

インストールが終了したら /usr/local/bin ディレクトリ配下にシンボリックリンクを追加します．

```
$ sudo /usr/local/texlive/????/bin/*/tlmgr path add
```

上記の ???? は 2018，\* は x86_64-darwin または x86_64-darwinlegacy にマッチすることが想定されていますがうまく動作しない場合は以下のようにして具体的なディレクトリ名を指定してください．

```
$ sudo /usr/local/texlive/2018/bin/x86_64-darwin/tlmgr path add
```

### Xcode のインストール要求ダイアログについての注意 {#d359d79d}

Xcode がインストールされていない環境下では，TeX Live のインストーラの実行中，および tlmgr によるアップデートの実行中に，次のようなダイアログが表示されて実行が中断される問題が知られています。

> [<img src="/attach/TeX Live/Mac/XcodeCommandLineTools.png" alt="" width="50%">](</attach/TeX Live/Mac/XcodeCommandLineTools.png>)

cc コマンドの実行のために Xcode Command Line Tools のインストールが要求されているのですが，実際には，Xcode のインストールは必須ではありません。
「今はしない」をクリックしてスキップして問題なく，そのままインストール・アップデートが続行できます。

なお，このダイアログを出さずに tlmgr を実行するために，次のような回避策が存在します。
例えば

```
$ sudo tlmgr update --self
```

の代わりに

```
$ sudo bash -c "CC=: tlmgr update --self"
```

と実行すれば，cc コマンドを無効化して tlmgr を実行できます（ : は「何もしない」という bash の組み込みコマンド）。
この場合，Xcode のインストールが要求されることなく，tlmgr の実行が正常に完了します。

### [MacTeX](/MacTeX/) {#mactex}

MacTeX は [TeX Live](</TeX Live/>) をベースにした macOS 専用の TeX ディストリビューションです。

### [BasicTeX](/BasicTeX/) {#basictex}

BasicTeX は [TeX Live](</TeX Live/>) のサブセットで，macOS 専用の TeX ディストリビューションです。
TeX Live をフルインストールしたくない場合は BasicTeX をインストールします。

### [Drag &amp; Drop UpTeX](</Drag and Drop UpTeX/>) {#i2fc7a04}

[小川版 Drag &amp; Drop UpTeX (UpTeX.app)](</Drag and Drop UpTeX/>) は [TeX Live](</TeX Live/>) のサブセットで，macOS 専用の TeX ディストリビューションです。
TeX Live scheme-small をベースに collection-langjapanese + α を加えたディストリビューションとして配布されています。
UpTeX.app は日本語フォントのセットアップを自動で行う AppleScript の GUI がかぶせてあり，簡単にセットアップを行うことができます。

### パッケージ管理システムによる TeX Live (MacTeX, BasicTeX) のインストール {#e3decd1a}

#### [Homebrew](http://brew.sh/) によるインストール {#za78e055}

- [https://github.com/caskroom/homebrew-cask](https://github.com/caskroom/homebrew-cask)
- [https://github.com/caskroom/homebrew-cask/blob/master/Casks/mactex.rb](https://github.com/caskroom/homebrew-cask/blob/master/Casks/mactex.rb)
- [https://github.com/caskroom/homebrew-cask/blob/master/Casks/mactex-no-gui.rb](https://github.com/caskroom/homebrew-cask/blob/master/Casks/mactex-no-gui.rb)
- [https://github.com/caskroom/homebrew-cask/blob/master/Casks/basictex.rb](https://github.com/caskroom/homebrew-cask/blob/master/Casks/basictex.rb)

TeX Live をフルインストールする場合は MacTeX をインストールしてください。
Homebrew で MacTeX をインストールできます。
Ghostscript などのツールも Homebrew でインストールできます。

```
$ brew cask install mactex
$ sudo tlmgr update --self --all
$ sudo tlmgr paper a4
```

TeX Live をフルインストールしたくない場合は BasicTeX をインストールしてください。
Homebrew で BasicTeX をインストールできます。

```
$ brew cask install basictex
$ sudo tlmgr update --self --all
$ sudo tlmgr paper a4
$ sudo tlmgr install collection-langjapanese
```

インストールのやり方などの事例も参考になります。

- [MacTeX](/MacTeX/#n379ea53)
- [BasicTeX](/BasicTeX/#q65e25e8)

#### [MacPorts](http://www.macports.org/) によるインストール {#ebd5afd3}

- [TeXLivePackages – MacPorts](https://trac.macports.org/wiki/TeXLivePackages)
- [https://www.macports.org/ports.php?by=name&substr=texlive](https://www.macports.org/ports.php?by=name&substr=texlive)
- [https://github.com/macports/macports-ports/tree/master/tex](https://github.com/macports/macports-ports/tree/master/tex)
    - [https://github.com/macports/macports-ports/blob/master/tex/texlive-lang-japanese/Portfile](https://github.com/macports/macports-ports/blob/master/tex/texlive-lang-japanese/Portfile)
    - [https://github.com/macports/macports-ports/blob/master/tex/texlive-luatex/Portfile](https://github.com/macports/macports-ports/blob/master/tex/texlive-luatex/Portfile)
    - [https://github.com/macports/macports-ports/blob/master/tex/texlive-xetex/Portfile](https://github.com/macports/macports-ports/blob/master/tex/texlive-xetex/Portfile)
    - [https://github.com/macports/macports-ports/blob/master/tex/texlive/Portfile](https://github.com/macports/macports-ports/blob/master/tex/texlive/Portfile)

MacPorts 用に TeX Live/MacPorts というパッケージが提供されています。
TeX Live/MacPorts をフルインストールする場合は

```
$ sudo port install texlive +full
```

日本語関連のパッケージと texlive-luatex パッケージと texlive-xetex パッケージと texlive パッケージをインストールする場合は

```
$ sudo port install texlive-lang-japanese texlive-luatex texlive-xetex texlive
```

を実行します。

インストールのやり方などの事例も参考になります。

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

### IPAexフォント/IPAフォント {#x667dd85}

IPAexフォント/IPAフォントは TeX で使用可能な状態でインストールされていますので，updmap-sys の設定だけですぐに pdf に埋め込めます。

### みかちゃんフォントなどのフリー書体・その他の日本語書体 {#i9ff3350}

[みかちゃんフォント](http://www001.upp.so-net.ne.jp/mikachan/)などのフリー書体（[フォント](</フォント/>)参照）や，その他の日本語書体を埋め込みたい場合は，そのためのスタイルファイルを利用するのが便利でしょう。
設定は，多少面倒です。
[PXmika パッケージ](http://zrbabbler.sp.land.to/pxmika.html)，[MacTeX 2013とみかちゃんフォントの設定](http://appcar.jp/wp/casual/2013/06/19/mactex-2013-mikachan/)を参考にしてください。
自力で一から構築する場合は [MacPortsのpTeXにおける和文多書体環境の整えかた](https://miko.org/~tatyana/tech/OSX/pTeX/fonts.html) が参考になります。

### updmap(-sys) の使用に関する注意点 {#qdce07c2}

- <strong>注意</strong> updmap-sys ではなく updmap を使用した場合は ユーザー個別の texmf（TEXMFHOME）に設定が書き込まれ，その個別設定の方が updmap-sys によるシステム全体の設定よりも優先されます。
    tlmgr および kanji-config-updmap-sys は updmap-sys を内部で呼びだしますが，-sys なしの kanji-config-updmap-sys は -sys なしの updmap を実行します。
    <strong>-sys をつけたコマンドによる新しい設定が反映されない場合は，-sys なしの updmap による設定が TEXMFHOME に残ってないか確認してください</strong>。（-sys なしの updmap による設定は不可視ファイルとなっています。）

- updmap-sys は TEXMFLOCAL を検索対象とはしますが，TEXMFHOME は検索しませんので，フォントは原則として TEXMFLOCAL に置くことが推奨されています。(→ [Font Installation with TeX Live 2012+](http://tug.org/mactex/TeXLive2018+Changes.pdf) を参照)
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
> <tr><td></td><td>MacTeX-2018</td><td style="text-align:right"><a href="http://okumuralab.org/bibun7/">［改訂第7版］LaTeX2e美文書作成入門</a>第2刷</td></tr>
> <tr><td>基本インストール</td><td style="text-align:right">/usr/local/texlive/2018</td><td style="text-align:right">/Applications/TeXLive/Library/texlive/2017</td></tr>
> <tr><td>TEXMFLOCAL</td><td style="text-align:right">/usr/local/texlive/texmf-local</td><td style="text-align:right">/Users/Shared/TeXLive/texmf</td></tr>
> <tr><td>TEXMFHOME</td><td style="text-align:right">~/Library/texmf</td><td style="text-align:right">~/TeXLive/texmf</td></tr>
> </tbody></table>
>

### 基本システムのインストール場所 {#ffbf8218}

- MacTeX-2018 に収録されている TeXLive-2018 は，デフォルトでは /usr/local/texlive/2018 以下にインストールされます。
- [［改訂第7版］LaTeX2e美文書作成入門](http://okumuralab.org/bibun7/)からインストールすると，デフォルトではアプリケーションフォルダにインストールされます。

#### TEXMFLOCAL {#d2b2c9d5}

- TEXMFLOCAL とは，MacTeX/TeX Live 本体のアップデートに影響を受けないディレクトリで，そのコンピュータのユーザー全員に共通の設定を保存します。<br>
    <strong>自分でスタイルファイル（.sty）やフォントなどを追加するときは，この TEXMFLOCAL または下記の TEXMFHOME 以下に置きます。</strong>

- MacTeX-2018 に収録されている TeXLive-2018 による TEXMFLOCAL は /usr/local/texlive/texmf-local で，以前に作成されていない場合に新たに作成されます。
- [［改訂第7版］LaTeX2e美文書作成入門](http://okumuralab.org/bibun7/)からのインストールでは，TEXMFLOCAL はユーザのホームフォルダの一つ上の階層「ユーザ」の中の「共有」フォルダに作成されます。

#### TEXMFHOME {#qf071757}

- TEXMFHOME はユーザー個別の設定を保存する場所です。
- MacTeX-2018 に収録されている TeXLive-2018 では，初期設定ではホームのライブラリ以下に収めます。
- [［改訂第7版］LaTeX2e美文書作成入門](http://okumuralab.org/bibun7/)からのインストールでは，TEXMFHOME はユーザのホームフォルダに作成されます。

#### その他 {#w4248b01}

- $TEXMF の検索優先順位は，ターミナル上で以下のコマンドで確認できます。

    ```
    $ kpsewhich -var-value TEXMF
    ```

- MacTeX/TeX Live 2013より，最上位の texmf/ は簡便化のため texmf-dist/ と統合されました。<br>TEXMFMAIN も TEXMFDIST も共に texmf-dist/ を示します。
- ユーザー個別の TEXMF（~/以下の TEXMF）は検索優先順位が高いため，/usr/local/texlive 以下の設定よりも優先されます。<br>また，mktexlsr（ls-Rの作成）は不要です。<br>実際にターミナル上で sudo mktexlsr としても ~/以下の TEXMF に対しては ls-R は作成されません。

> <table><tbody>
> <tr><td>TEXMFCONFIG</td><td>~/Library/texlive/2018/texmf-config</td></tr>
> <tr><td>TEXMFVAR</td><td>~/Library/texlive/2018/texmf-var</td></tr>
> <tr><td>TEXMFHOME</td><td>~/Library/texmf</td></tr>
> </tbody></table>
>

- 最新版の TeX Live で問題が発生した場合は以前にインストールしていた古い TeX Live に切り替えて使用することもできます。
    TeX Live Utility のメニューから \[設定\] &gt; \[TeX Live の既定版を変更…\] を選択することで変更できます。

## その他の選択肢 {#qab24fbc}

[VirtualBox](https://www.virtualbox.org/) などの仮想マシン上に [Linux](/Linux/) をインストールし，その上で TeX Live を使用する方法もあります。
macOS を使用していて LaTeX の実行速度が遅い場合は Linux を使用するのも一つの手です。
