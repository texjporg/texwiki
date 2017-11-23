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

- TeX Live をベースにした macOS 専用の TeX ディストリビューションを入手する
    - MacTeX：TeX Live のフルインストールと，Ghostscript および関連 GUI アプリケーションのインストールを行います。
    - BasicTeX：TeX Live のサブセット (scheme-small) をインストールします。
        - MacTeX と BasicTeX の入手先：[http://www.tug.org/mactex/](http://www.tug.org/mactex/)
    - 小川版 [Drag &amp; Drop UpTeX](</Drag and Drop UpTeX/>)：TeX Live のサブセット (scheme-small) に日本語パッケージが予め追加されています。
- TeX Live 公式のインストーラを使用する
    - install-tl を入手してターミナルから実行
- パッケージ管理システムを利用する
    - Homebrew 向けパッケージ
    - MacPorts 向けパッケージ

いずれの方法でも，TeX Live をインストールして必要であれば最新版にアップデートします。

以下でそれぞれのインストール法およびセットアップ法を説明します。

### TeX Live 2017 以降のバイナリの動作環境に関する変更点 {#obbbdbf4}

TeX Live 2017 以降は x86_64-darwin バイナリは Apple セキュリティアップデートが提供されている OS のみサポートされることになりました。
TeX Live 2016 まで存在していた universal-darwin バイナリが削除され、i386-darwin バイナリと powerpc-darwin バイナリに置き換えられました。
Apple セキュリティアップデートが提供されないレガシーな OS では x86_64-darwinlegacy バイナリ，i386-darwin バイナリ，powerpc-darwin バイナリのいずれかを使用します。

MacTeX-2017 / BasicTeX-2017 以降に付属する TeX Live には x86_64-darwin バイナリのみ収録されます。

下の表で自分が使用している OS はどのバイナリをインストールすればよいのか確認できます。
&#x2714; マークは OS と対応するバイナリを示しています。

<div style="text-align:center">TeX Live 2017 が動作する OS と対応するバイナリ</div>

|  | macOS 10.13 High Sierra  | macOS 10.12 Sierra | OS X 10.11 El Capitan | OS X 10.10 Yosemite | OS X 10.9 Mavericks | OS X 10.8 Mountain Lion | Mac OS X 10.7 Lion | Mac OS X 10.6 Snow Leopard | Mac OS X 10.5 Leopard (Intel) | Mac OS X 10.5 Leopard (PowerPC) |
|---|---|---|---|---|---|---|---|---|---|---|
| x86_64-darwin | &#x2714; | &#x2714; | &#x2714; | &#x2714; |  |  |  |  |  |  |
| x86_64-darwinlegacy |  |  |  |  | &#x2714; | &#x2714; | &#x2714; | &#x2714; |  |  |
| i386-darwin |  |  |  |  |  |  |  | &#x2714; | &#x2714; |  |
| powerpc-darwin |  |  |  |  |  |  |  |  |  | &#x2714; |

#### TeX Live のインストール {#texliveinstall}

TeX Live のインストールガイド

- [http://www.tug.org/texlive/quickinstall.html](http://www.tug.org/texlive/quickinstall.html)
- [http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation](http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation)

を見ると [MacTeX](/MacTeX/) が推奨されていますが，MacTeX に付属する TeX Live には x86_64-darwin バイナリのみ収録されることになったので，
ここでは x86_64-darwin バイナリがサポートしていないレガシーな環境でも TeX Live をインストールできるように MacTeX に付属する TeX Live ではなく TeX Live の公式サイトにあるインストーラからインストールする方法について簡単に説明します．

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

上記の ???? は 2017，\* は x86_64-darwin などにマッチすることが想定されていますがうまく動作しない場合は以下のようにして具体的なディレクトリ名を指定してください．

```
$ sudo /usr/local/texlive/2017/bin/x86_64-darwin/tlmgr path add
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

### macOS 10.12 Sierra / OS X 10.11 El Capitan への対応 {#elcapitan}

2015年10月3日（日本時間）に，macOS Sierra / OS X El Capitan のヒラギノフォントに対応した ptex-fontmaps (旧名:jfontmaps) &amp; cjk-integrate 20151002.0 が TeX Live に取り込まれました。
<strong>pLaTeX / upLaTeX + dvipdfmx でヒラギノフォントを埋め込みたい場合</strong>については macOS Sierra / OS X El Capitan へのアップグレードが可能になります。

この件を含めた一連の TeX 界の対応については，以下を参照してください。

- [TeX界の El Capitan 迎撃戦記](http://doratex.hatenablog.jp/entry/20151008/1444310306)

この情報は macOS Sierra / OS X El Capitan への積極的なアップデートをすすめるものではありません。
ただし，OS X Yosemite 以前には既知の脆弱性があり，その対策は macOS Sierra / OS X El Capitan へのアップデートでしか提供されていないため，macOS Sierra / OS X El Capitan へのアップデートを見合わせるということは TeX や DTP のためにセキュリティ対策を犠牲にしていると心得る必要があります。

- TeX Live 2015 に収録されている [LuaTeX](/LuaTeX/) beta-0.80.0 は，OS X El Capitan に搭載された新しい形式のヒラギノフォントを利用することができません。
    したがって，[LuaTeX-ja](/LuaTeX-ja/) でヒラギノフォントを使うためには2015年10月8日にリリースされた LuaTeX beta-0.81.0 に更新する必要があります（ただし，luaotfload パッケージの対応が未完了）。
    なお，IPA(ex) フォントを利用するのであれば無理に LuaTeX を更新する必要はありません。

- DTP で OS X El Capitan（10.11、10.11.1）搭載のヒラギノフォントを利用する場合，以前のヒラギノフォントとの互換性の問題により「Adobe InDesign CC/CS や Illustrator CC/CS などで文字間のカーニングをオプティカルに設定していると組体裁が崩れる」という情報もあります。
    （多くの場合，ヒラギノフォントを OS X にたよらず購入していることが想定されますが…）
    - 参考：[OS X El Capitan（10.11、10.11.1）搭載のヒラギノフォントと弊社製品版フォントについて](http://www.screen.co.jp/ga_product/sento/support/otf_osx_El_Capitan_1011_10111.html)
    - 追記 (2015-12-11)：OS X El Capitan 10.11.2 でついに深刻な問題が解消されました。[OS X El Capitan（10.11.2）搭載のヒラギノフォントと弊社製品版フォントについて](http://www.screen.co.jp/ga_product/sento/support/otf_osx_El_Capitan.html)
    - 追記 (2016-12-02)：macOS Sierra と OS X El Capitan に搭載のヒラギノフォントは同じ仕様です。[Sierra 時代の TeX Live 環境](http://doratex.hatenablog.jp/entry/20161202/1480665692)

- macOS Sierra / OS X El Capitan に新たに収録された日本語フォントの多くは，従来の拡張子 .otf の OpenType Font を束ねた形式の OpenType Collection Font です。
    OpenType Collection Font の拡張子は既存の TrueType Collection Font と同じ .ttc ですが中身は別物ですので，TeX Live 2014 以前に収録されている dvipdfmx は OpenType Collection Font に対応していません。
    - 参考：[TeX で OpenType Collection フォントを扱ってみると（その1）](http://d.hatena.ne.jp/acetaminophen/20151003/1443865926)，[（その2）](http://d.hatena.ne.jp/acetaminophen/20151004/1443980435)，[（その3）](http://d.hatena.ne.jp/acetaminophen/20151005/1443984259)，[El Capitan フォントリスト](http://www.muskmelon.jp/?p=1169)

#### macOS Sierra / OS X El Capitan での TeX Live のセットアップ {#l8c867e9}

<strong>注意</strong>：奥村先生の「［改訂第6版］LaTeX2e 美文書作成入門」のインストーラから TeX Live 2013 をインストールした場合については，[サポートページ](http://oku.edu.mie-u.ac.jp/~okumura/bibun6/)の[Mac: OS X El Capitanに更新する際のご注意](http://oku.edu.mie-u.ac.jp/~okumura/bibun6/#elcapitan)をご覧ください。

macOS Sierra / OS X El Capitan で TeX Live を利用したい場合は，はじめに

- macOS Sierra または OS X El Capitan へのアップグレード
- TeX Live 2017（または MacTeX-2017 / BasicTeX-2017）のインストール

を完了させてください（どちらを先に行ってもかまいません；TeX Live や MacTeX / BasicTeX のインストールは，macOS Sierra / OS X El Capitan かどうかにかかわらず従来と同じ方法で可能です[^1]）。
そのうえで，macOS Sierra / OS X El Capitan 対応の大まかなセットアップ手順は以下のとおりです：

1. TeX Live を最新の状態に更新
    <!-- + ptex-fontmaps (旧名:jfontmaps) & cjk-gs-integrate.pl のバージョン確認 -->

1. 新しいヒラギノフォントへのシンボリックリンクを作成
1. マップファイルの更新
1. （周辺アプリケーションの設定変更：必要であれば）

まず，TeX Live を最新の状態に更新します。
ターミナルから [tlmgr](/tlmgr/) を実行します。

```
$ sudo tlmgr update --self --all
```

[MacTeX](/MacTeX/) を使用している場合は MacTeX 付属の [TeX Live Utility](</TeX Live Utility/>) という GUI ユーティリティを使うことで TeX Live をアップデートすることもできます。

次に，新しいヒラギノフォントなどの和文フォントにシンボリックリンクを張るスクリプトを実行します[^2]。

TeX Live あるいは MacTeX の場合は

```
$ cd /usr/local/texlive/2017/texmf-dist/scripts/cjk-gs-integrate
```

BasicTeX の場合は

```
$ cd /usr/local/texlive/2017basic/texmf-dist/scripts/cjk-gs-integrate
```

を実行して cjk-gs-integrate.pl の存在するフォルダに移動します。

cjk-gs-integrate.pl を --link-texmf --force オプション付きで実行します。

```
$ sudo perl cjk-gs-integrate.pl --link-texmf --force
```

mktexlsr を実行します。

```
$ sudo mktexlsr
```

最後に，macOS Sierra / OS X El Capitan の新しいヒラギノフォントを埋め込むためのマップファイルを指定しなおします。

ヒラギノの N シリーズを埋め込む場合は

```
$ sudo updmap-sys --setoption jaEmbed hiragino-elcapitan-pron
```

ヒラギノの N シリーズでない方を埋め込む場合は

```
$ sudo updmap-sys --setoption jaEmbed hiragino-elcapitan
```

を実行します。

以上で，ヒラギノフォントを pLaTeX / upLaTeX + dvipdfmx で PDF に埋め込むことができます。

#### macOS Sierra / OS X El Capitan でのアプリケーションの設定変更 {#i8a16a2b}

続いて，必要に応じて周辺アプリケーションの設定変更を行います。
これは，MacTeX や BasicTeX のユーザが該当します（Homebrew を使って mactex / basictex をインストールした場合は，パッケージ管理システムの下に置かれているため該当しません）。
なお，各アプリケーションは macOS Sierra / OS X El Capitan 対応のためにバージョンアップしていることがありますので，macOS Sierra / OS X El Capitan へのアップグレード後はアプリケーションも最新版に更新するとよいでしょう。

MacTeX-2014 / BasicTeX-2014 以前では，TeX 関連プログラムへのシンボリックリンクを /usr/texbin 以下に作成していました。
TeXShop などのアプリケーション（の少し古いバージョン）はこの場所にシンボリックリンクが存在することを仮定していましたので，プログラムのパスに /usr/texbin を指定していることがあります。
しかし，/usr/texbin は macOS Sierra / OS X El Capitan へのアップグレードにより強制的に /Previous System/usr/texbin 以下に移転されていて，呼び出すことができない状態になってしまいます。

- MacTeX-2015 / BasicTeX-2015 は，OS X Yosemite までの環境で /usr/texbin のほかに /Library/TeX/texbin にもシンボリックリンクを作成しますので，単にアプリケーションのパス設定を /Library/TeX/texbin に切り替えるだけで完了します。
- MacTeX-2014 / BasicTeX-2014 以前を引き続き使い続ける場合は，例えば以下のようにしてシンボリックリンクを張り替える必要があります。（参考：[MacTeX-2015+ and El Capitan+ (PDF)](https://tug.org/mactex/UpdatingForElCapitan.pdf)）

    ```
    $ cd /Library/TeX
    $ sudo ln -s Distributions/Programs/texbin texbin
    $ echo "/Library/TeX/texbin" >~/Desktop/TeX
    $ sudo cp ~/Desktop/TeX /etc/paths.d/TeX
    ```

    そのうえで，アプリケーションの設定変更を行ってください。
    ただし，<strong>TeX Live 2014 以前に収録されている dvipdfmx は，新しい OpenType Collection というフォント形式に非対応</strong>ですので，macOS Sierra / OS X El Capitan に収録されているヒラギノなどのフォントを扱うことができません。
    新しい MacTeX / BasicTeX をインストールするか（2014以下がインストールされていることは気にせずに新規インストールすれば結構です），IPA(ex) フォントを埋め込むことで凌ぐとよいでしょう。

#### macOS Sierra / OS X El Capitan での注意点 {#r55ca802}

macOS Sierra / OS X El Capitan では，セキュリティ上の理由から /usr への書き込みは出来なくなったため，各種バイナリへのシンボリックリンクが変更となります。/usr/local 以下には書きこめるので，/usr/local/texlive はこれまでと変わりません。

<table>
<tbody>
<tr><td>macOS Sierra / OS X El Capitan</td><td>OS X Yosemite 以前</td></tr>
<tr><td style="background-color:pink">/Library/TeX/texbin</td><td>/usr/texbin</td></tr>
</tbody>
</table>

- /Library は，<strong>ホーム直下の「ライブラリ」ではなく</strong>，<strong>ホームよりも上位にある「ライブラリ」</strong>です。Finder で「移動」-「コンピュータ」として，ハードディスク名をクリックしたときに「アプリケーション」「システム」「ユーザ」と並んで見える「ライブラリ」です。

MacTeX-2015 および BasicTeX-2015 は，OS X Yosemite までのシステムには両方のシンボリックリンクを作成しますので，MacTeX がインストールする各種アプリケーションはこれまでの設定のままで動作します。
macOS Sierra / OS X El Capitan への移行準備として設定変更も可能です。

MacTeX-2015 がインストールする GUI アプリケーション（BibDesk, LaTeXiT, TeX Live Utility, TeXShop）は /usr/texbin がデフォルトとなっているため，macOS Sierra / OS X El Capitan での使用においては設定変更が必要です。
（その他のアプリケーションについても同様の変更が必要となるかもしれません。）

- [https://tug.org/mactex/UpdatingForElCapitan.pdf](https://tug.org/mactex/UpdatingForElCapitan.pdf)

MacTeX-2014 および BasicTeX-2014 以前をインストールしている場合，macOS Sierra / OS X El Capitan にアップグレードすると /usr/texbin に作成されているシンボリックリンクは /usr/texbin/ から /Previous System/usr/texbin/ に移転されます。

- 参考：[(1)](https://twitter.com/doraTeX/status/608620177282846720), [(2)](https://twitter.com/doraTeX/status/608620746370260992), [(3)](https://twitter.com/doraTeX/status/608625460453363712)

また，macOS Sierra / OS X El Capitan では<strong>和文フォント周りの構成が大きく変化</strong>しており，Ghostscript では macOS Sierra / OS X El Capitan 付属のヒラギノフォントを埋め込むことができません。

- 参考：[(1)](https://twitter.com/doraTeX/status/621217678259154944), [(2)](https://twitter.com/doraTeX/status/621218337599586304), [(3)](https://twitter.com/doraTeX/status/621219702774235136), [(4)](https://twitter.com/doraTeX/status/646331410043699201), [(5)](https://twitter.com/doraTeX/status/646376155231092740), [(6)](https://twitter.com/doraTeX/status/646376295115288576), [(7)](https://twitter.com/doraTeX/status/646502384059813889), [(8)](https://twitter.com/doraTeX/status/646502515014438912), [(9)](https://twitter.com/doraTeX/status/646511280858071040)

### [MacTeX](/MacTeX/) {#mactex}

MacTeX は [TeX Live](</TeX Live/>) をベースにした macOS 専用の TeX ディストリビューションです。

### [BasicTeX](/BasicTeX/) {#basictex}

BasicTeX は [TeX Live](</TeX Live/>) のサブセットで，macOS 専用の TeX ディストリビューションです。
TeX Live をフルインストールしたくない場合は BasicTeX をインストールします。

あるいは，[小川版 Drag &amp; Drop UpTeX (UpTeX.app)](</Drag and Drop UpTeX/>) が，TeX Live scheme-small をベースに collection-langjapanese を加えたディストリビューションとして配布されています。
UpTeX.app は日本語フォントのセットアップを自動で行う AppleScript の GUI がかぶせてあり，簡単にセットアップを行うことができます。

### パッケージ管理システムによる TeX Live (MacTeX, BasicTeX) のインストール {#e3decd1a}

#### [Homebrew](http://brew.sh/) によるインストール {#za78e055}

- [https://github.com/caskroom/homebrew-cask](https://github.com/caskroom/homebrew-cask)
- [https://github.com/caskroom/homebrew-cask/blob/master/Casks/mactex.rb](https://github.com/caskroom/homebrew-cask/blob/master/Casks/mactex.rb)
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
- [https://github.com/macports/macports-ports/blob/master/tex/texlive-lang-japanese/Portfile](https://github.com/macports/macports-ports/blob/master/tex/texlive-lang-japanese/Portfile)
- [https://github.com/macports/macports-ports/blob/master/tex/texlive-luatex/Portfile](https://github.com/macports/macports-ports/blob/master/tex/texlive-luatex/Portfile)
- [https://github.com/macports/macports-ports/blob/master/tex/texlive-xetex/Portfile](https://github.com/macports/macports-ports/blob/master/tex/texlive-xetex/Portfile)
- [https://github.com/macports/macports-ports/blob/master/tex/texlive/Portfile](https://github.com/macports/macports-ports/blob/master/tex/texlive/Portfile)
- [https://github.com/macports/macports-ports/tree/master/tex](https://github.com/macports/macports-ports/tree/master/tex)

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

- [SphinxでLatex拡張を使ってPDF出力する](http://qiita.com/H-A-L/items/8222d894daf1552cef67)
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

### ヒラギノフォント {#d19a1537}

macOS High Sierra に付属するヒラギノフォントに関しては [macOS High Sierra のヒラギノフォント](https://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=2267)，[High Sierra 用 TeX Live 2017 追加ファイル](http://www.muskmelon.jp/?p=2013)，[macOS High Sierra + Texlive 2017 + ヒラギノフォント](https://qiita.com/osamu620/items/8a299e44d087542e29a9) を参照してください。

macOS Sierra / OS X El Capitan では OS X Yosemite 以前と比較して日本語フォントの構成が変更されています。[macOS 10.12 Sierra / OS X 10.11 El Capitan への対応](</TeX Live/Mac/#elcapitan>)を実行してください。

### みかちゃんフォントなどのフリー書体・その他の日本語書体 {#i9ff3350}

[みかちゃんフォント](http://www001.upp.so-net.ne.jp/mikachan/)などのフリー書体（[フォント](</フォント/>)参照）や，その他の日本語書体を埋め込みたい場合は，そのためのスタイルファイルを利用するのが便利でしょう。
設定は，多少面倒です。
[PXmika パッケージ](http://zrbabbler.sp.land.to/pxmika.html)，[MacTeX 2013とみかちゃんフォントの設定](http://appcar.jp/wp/casual/2013/06/19/mactex-2013-mikachan/)を参考にしてください。
自力で一から構築する場合は [MacPortsのpTeXにおける和文多書体環境の整えかた](https://miko.org/~tatyana/tech/OSX/pTeX/fonts.html) が参考になります。

### Ghostscript で日本語を扱えるようにする設定（ReadMe-ja.pdf より） {#mc6bf937}

cjk-gs-integrate.pl のオプションは，バージョン 20151002.0 以降では --link-texmflocal から --link-texmf へ変更されていますので注意してください。

```
$ sudo mkdir -p /usr/local/texlive/texmf-local/fonts/truetype
$ cd $(dirname $(gs --help | grep "Resource/Font" | awk '{print $1}'))
$ sudo zsh -c "rm ./CIDFont/*(@) ./CIDFSubst/*(@)"
$ cd /usr/local/texlive/2017/texmf-dist/scripts/cjk-gs-integrate
$ sudo perl cjk-gs-integrate.pl --link-texmf --force
```

### updmap(-sys) の使用に関する注意点 {#qdce07c2}

- <strong>注意</strong> updmap-sys ではなく updmap を使用した場合は ユーザー個別の texmf（TEXMFHOME）に設定が書き込まれ，その個別設定の方が updmap-sys によるシステム全体の設定よりも優先されます。
    tlmgr および kanji-config-updmap-sys は updmap-sys を内部で呼びだしますが，-sys なしの kanji-config-updmap-sys は -sys なしの updmap を実行します。
    <strong>-sys をつけたコマンドによる新しい設定が反映されない場合は，-sys なしの updmap による設定が TEXMFHOME に残ってないか確認してください</strong>。（-sys なしの updmap による設定は不可視ファイルとなっています。）

- updmap-sys は TEXMFLOCAL を検索対象とはしますが，TEXMFHOME は検索しませんので，フォントは原則として TEXMFLOCAL に置くことが推奨されています。(→ [Font Installation with TeX Live 2012+](http://tug.org/mactex/TeXLive2017+Changes.pdf) を参照)
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

    - オプションとして -jis2004 を指定すると，JIS2004字形を使用する設定となります。
    - kanji-config-updmap-sys は内部で updmap-sys を呼び出しますので，設定はシステムレベルで共通の設定として保存されます。
        ユーザー個別の設定としてフォントを指定したいときは，kanji-config-updmap を使用します。
    - ptex2pdf を使用するとその都度フォントを指定できます。（下の例は upLaTeX + dvipdfmx で ヒラギノProN JIS2004字体を使用して PDF を作成するものです。）

        ```
        $ ptex2pdf -u -l -ot '-synctex=1' -od '-f uptex-hiragino-highsierra-pron-04.map' hoge.tex
        ```

## TeX Live のインストールディレクトリ {#k03895bf}

インストール方法によってディレクトリが異なりますので，ここにまとめておきます。

> <table><tbody>
> <tr><td></td><td>MacTeX-2017</td><td style="text-align:right"><a href="http://okumuralab.org/bibun7/">［改訂第7版］LaTeX2e美文書作成入門</a></td></tr>
> <tr><td>基本インストール</td><td style="text-align:right">/usr/local/texlive/2017</td><td style="text-align:right">/Applications/TeXLive/Library/texlive/2016</td></tr>
> <tr><td>TEXMFLOCAL</td><td style="text-align:right">/usr/local/texlive/texmf-local</td><td style="text-align:right">/Users/Shared/TeXLive/texmf</td></tr>
> <tr><td>TEXMFHOME</td><td style="text-align:right">~/Library/texmf</td><td style="text-align:right">~/TeXLive/texmf</td></tr>
> </tbody></table>
>

### 基本システムのインストール場所 {#ffbf8218}

- MacTeX-2017 に収録されている TeXLive-2017 は，デフォルトでは /usr/local/texlive/2017 以下にインストールされます。
- [［改訂第7版］LaTeX2e美文書作成入門](http://okumuralab.org/bibun7/)からインストールすると，デフォルトではアプリケーションフォルダにインストールされます。

#### TEXMFLOCAL {#d2b2c9d5}

- TEXMFLOCAL とは，MacTeX/TeX Live 本体のアップデートに影響を受けないディレクトリで，そのコンピュータのユーザー全員に共通の設定を保存します。<br>
    <strong>自分でスタイルファイル（.sty）やフォントなどを追加するときは，この TEXMFLOCAL または下記の TEXMFHOME 以下に置きます。</strong>

- MacTeX-2017 に収録されている TeXLive-2017 による TEXMFLOCAL は /usr/local/texlive/texmf-local で，以前に作成されていない場合に新たに作成されます。
- [［改訂第7版］LaTeX2e美文書作成入門](http://okumuralab.org/bibun7/)からのインストールでは，TEXMFLOCAL はユーザのホームフォルダの一つ上の階層「ユーザ」の中の「共有」フォルダに作成されます。

#### TEXMFHOME {#qf071757}

- TEXMFHOME はユーザー個別の設定を保存する場所です。
- MacTeX-2017 に収録されている TeXLive-2017 では，初期設定ではホームのライブラリ以下に収めます。
- [［改訂第7版］LaTeX2e美文書作成入門](http://okumuralab.org/bibun7/)からのインストールでは，TEXMFHOME はユーザのホームフォルダに作成されます。

#### その他 {#w4248b01}

- $TEXMF の検索優先順位は，ターミナル上で以下のコマンドで確認できます。

    ```
    $ kpsewhich -var-value TEXMF
    ```

- MacTeX/TeX Live 2013より，最上位の texmf/ は簡便化のため texmf-dist/ と統合されました。<br>TEXMFMAIN も TEXMFDIST も共に texmf-dist/ を示します。
- ユーザー個別の TEXMF（~/以下の TEXMF）は検索優先順位が高いため，/usr/local/texlive 以下の設定よりも優先されます。<br>また，mktexlsr（ls-Rの作成）は不要です。<br>実際にターミナル上で sudo mktexlsr としても ~/以下の TEXMF に対しては ls-R は作成されません。

> <table><tbody>
> <tr><td>TEXMFCONFIG</td><td>~/Library/texlive/2017/texmf-config</td></tr>
> <tr><td>TEXMFVAR</td><td>~/Library/texlive/2017/texmf-var</td></tr>
> <tr><td>TEXMFHOME</td><td>~/Library/texmf</td></tr>
> </tbody></table>
>

- 最新版の TeX Live で問題が発生した場合は以前にインストールしていた古い TeX Live に切り替えて使用することもできます。
    TeX Live Utility のメニューから \[設定\] &gt; \[TeX Live の既定版を変更…\] を選択することで変更できます。

## その他の選択肢 {#qab24fbc}

[VirtualBox](https://www.virtualbox.org/) などの仮想マシン上に [Linux](/Linux/) をインストールし，その上で TeX Live を使用する方法もあります。
macOS を使用していて LaTeX の実行速度が遅い場合は Linux を使用するのも一つの手です。

[^1]: 古いバージョンの TeX Live がインストールされていても気にせずに，新規インストールと同じ手順でインストールします。
[^2]: 従来の cjk-gs-integrate のオプションは --link-texmflocal でしたが，新しい版では --link-texmf \[DIR\] でディレクトリを指定する形式となりました。この \[DIR\] を空白にした場合，TEXMFLOCAL の場所が指定されたとみなされます。
