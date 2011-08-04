---
title: "インストール(Windows)"
url: "/インストール(Windows)/"
date: 2011-07-23T18:48:25Z
pukiwiki: "インストール(Windows)"
---

# インストール(Windows)

## Microsoft Windows へのインストール {#i4bf0c85}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## [W32TeX](/W32TeX/) {#yd4deb73}

### [ChangeLog](http://w32tex.org/ChangeLog) {#vd90580b}

### ニュース {#x8db7c39}

- \[2011/05/25\]<br>
    <span style="color:Red;"><strong>eplatex が無くなりました．<br>platex は ptex ではなくて eptex の上で動くようになりました．</strong></span>

- \[2011/03/21\]<br>
    <span style="color:Red;"><strong>ptex 関係において [ptexenc](http://tutimura.ath.cx/ptexlive/?ptexenc%2F%CA%B8%BB%FA%A5%B3%A1%BC%A5%C9%C8%BD%C4%EA) を用いて自動判別するようになりました．<br>デフォルトで自動判別します．<br>自動判別せずに手動で直接文字コードを指定する場合は</strong></span>

    ```
    platex -no-guess-input-enc -kanji=utf8 hoge.tex
    euplatex -no-guess-input-enc -kanji=utf8 hoge.tex
    ```

    <span style="color:Red;"><strong>のように指定します．</strong></span><br>

- \[2011/03/06\]<br>
    <span style="color:Red;"><strong>\[W32TeX の 仕様変更\]</strong></span><br>
    <span style="color:Red;"><strong>ptex 関係において nkf を用いて自動判別する機能が追加されました．<br>デフォルトで自動判別します．</strong></span><br>

- \[2010/08/14\]<br>
    <span style="color:Red;"><strong>\[W32TeX の 仕様変更\]</strong></span><br>
    <span style="color:Red;"><strong>pmpost.exe は pmetapost.exe に変更されました。</strong></span><br>
    <span style="color:Red;"><strong>upmpost.exe は upmetapost.exe に変更されました。</strong></span><br>

- \[2010/05/06\]<br>
    <span style="color:Red;"><strong>\[W32TeX の 仕様変更\]</strong></span><br>
    <span style="color:Red;"><strong>dvipsk.exe は dvips.exe に統合されました。</strong></span><br>

- \[2009/07/20\]<br>
    <span style="color:Red;"><strong>\[W32TeX の 仕様変更\]</strong></span><br>
    <span style="color:Red;"><strong>jbibtex.exe は pbibtex.exe に変更されました。</strong></span><br>
    <span style="color:Red;"><strong>upjbibtex.exe は upbibtex.exe に変更されました。</strong></span><br>
    <span style="color:Red;"><strong>jmpost.exe は pmpost.exe に変更されました。</strong></span><br>
    <span style="color:Red;"><strong>upjmpost.exe は upmpost.exe に変更されました。</strong></span><br>

- \[2007/08/01\]
    7月31日付の W32TeX
    から $TEXMF/ptex/ ディレクトリが無くなったので pLaTeX のスタイルファイルは
    $TEXMFLOCAL/tex/platex/ 下のフォルダ（ディレクトリ）に移動するか，
    新規に入れると良いでしょう。

- \[2006/08/04\] Microsoft Windows 用 インストーラーをまとめた
    TeX installers for Windows ページが出来ました。
    <!-- 「Cygwin で日本語 TeX」で配っているのは W32TeX ではないので。 -->

- \[2004/07/23\] もし $TEXMF/fonts/type1/urw/palatino/uplbi8a.pfb のサイズが
    51,285 bytes ではなく 131,673 bytes になっていたら，新しい t1fonts.tar.gz を
    上書きインストールしてください（→ URW フォントのバグ）。

- \[2004/05/10\] バージョンが 7.5.3 になって
    fmt ファイルの置き場所が変わったようです。上書きインストールする場合は
    $TEXMF/web2c// フォルダ（ディレクトリ）以下を削除してから行ってください。

- \[2004/02/11\]
    新しい [TDS](https://mirror.ctan.org/help/Catalogue/entries/tds.html)
    (<strong>T</strong>eX <strong>D</strong>irectory <strong>S</strong>tructure) に準拠した W32TeX
    がそろそろミラーサイトに出始めているようです。ディレクトリ構造が変わっていますので，古い $TEXMF/ を削除あるいは名前変更してからインストールしてください。

### 初めに {#o1513552}

以下は，アスキー（現：[アスキー・メディアワークス](http://asciimw.jp/)）が開発した
[pTeX](http://ascii.asciimw.jp/pb/ptex/) を角藤亮さんが
[Microsoft Windows](http://www.microsoft.com/japan/windows/)
32ビットプロセッサ (IA-32)
環境（Windows NT 系［7，Vista，XP，2000，NT 4.0，NT 3.x］，Windows Me, 98，95）に移植された
[W32TeX](/W32TeX/) をインストールする方法のあらましです。

角藤さんの pTeX 関連バイナリは Microsoft Windows の
[Windows PowerShell](http://www.microsoft.com/powershell)
やコマンド プロンプト（Windows Me, 98，95 では
MS-DOSプロンプト）で使うものですが，マウスによるドラッグ &amp; ドロップに対応させることもできます。

また，[TeXworks](/TeXworks/)，EasyTeX，[WinShell](/WinShell/)，[Texmaker](/Texmaker/)，[TeXnicCenter](/TeXnicCenter/)，Masamichi，TeXE，[LyX](/LyX/) などと併用すれば
Windows 風の操作も可能です。

ここ以外に次のウェブサイトに解説があります：

- [TeX インストールガイド](http://www.nsknet.or.jp/~tony/TeX/install/)（[トニイさん](http://www.nsknet.or.jp/~tony/)）

なお，Microsoft Windows 用 pTeX
のインストールを簡単にする「TeX インストーラ 3」が[あべのり［阿部紀行］さん](http://www.math.sci.hokudai.ac.jp/~abenori/)によって開発されました。

「TeX インストーラ 3」については
AbTeXInstaller - TeX Wiki
をご参照ください。

また，Microsoft Windows 用インストーラーをまとめた
TeX installers for Windows - TeX Wiki
のページも参考になるでしょう。

【注意】「TeX インストーラ 3」は確かに手軽なインストーラですが，<strong>「これでしかインストールできない」ようであれば，TeX に手を出す前に「昔はパソコン入門でやっていたようなこと」（ユーザ環境のカスタマイズ，コマンドライン上での作業など）を学んでおいた方が良いでしょう</strong>。

### ダウンロードサイト {#y2ec963e}

ミラーサイトは下記のウェブサイトなどをご利用ください。若干，更新が遅れることがあります．<br>
W32TeX の更新履歴に関しては [ChangeLog](http://w32tex.org/ChangeLog) を参照してください．

#### FTP {#z04bbc8a}

<!-- [[KDDI研究所:http://www.kddilabs.jp/]] -->
<!-- ftp.kddilabs.jp = ftp.kddlabs.co.jp = ftp.ne.jp -->
- [KDDI研究所 (FTP)](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/)
- [Ring Server (FTP)](http://core.ring.gr.jp/)
    - [ftp://core.ring.gr.jp/pub/text/TeX/ptex-win32/current/](ftp://core.ring.gr.jp/pub/text/TeX/ptex-win32/current/)
    - [ftp://ftp.dnsbalance.ring.gr.jp/pub/text/TeX/ptex-win32/current/](ftp://ftp.dnsbalance.ring.gr.jp/pub/text/TeX/ptex-win32/current/)（<strong>近いサーバへ誘導</strong>）
    - [ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/)（<strong>空いているサーバへ誘導</strong>）
- [大島研究室](http://akagi.ms.u-tokyo.ac.jp/)（[東京大学](http://www.u-tokyo.ac.jp/) [大学院数理科学研究科](http://www.ms.u-tokyo.ac.jp/)）
    - [ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/win32/](ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/win32/)

#### HTTP {#d85efc2e}

<!-- [[KDDI研究所:http://www.kddilabs.jp/]] -->
- [KDDI研究所 (HTTP)](http://ftp.kddilabs.jp/TeX/ptex-win32/current/)
- [ctan.ijs.si (in スロベニア)](http://ctan.ijs.si/mirror/w32tex/current/)
- [Ring Server (HTTP)](http://core.ring.gr.jp/)
    - [core.ring.gr.jp/pub/text/TeX/ptex-win32/current/](http://core.ring.gr.jp/pub/text/TeX/ptex-win32/current/)
    - [www.dnsbalance.ring.gr.jp/pub/text/TeX/ptex-win32/current/](http://www.dnsbalance.ring.gr.jp/pub/text/TeX/ptex-win32/current/)（<strong>近いサーバへ誘導</strong>）
    - [www.ring.gr.jp/pub/text/TeX/ptex-win32/current/](http://www.ring.gr.jp/pub/text/TeX/ptex-win32/current/)（<strong>空いているサーバへ誘導</strong>）

#### アーカイブ {#b9d7db68}

過去のバージョンが欲しい場合は，兼宗さんが以下で提供してくださっています:

- [eplang.jp/w32tex/archive/](http://eplang.jp/w32tex/archive/)

### 標準インストールで必要なもの {#s4df79fc}

ダウンロードサイトにあるものを全てダウンロードする必要はありません。
一般の用途には次のものだけで充分でしょう。

頻繁に更新されていますのでバージョン番号は下と異なるかもしれません。 <!-- 2011/04/17 Web2c-2011 ベース（2011/dev）が最新 --> <!-- 2010/02/22 Web2c-2010 ベース（2010/dev）が最新 --> <!-- 2009/08/18 pTeX 3.1.11 が最新 --> <!-- 2009/06/03 Web2c-2009 ベースが最新 --> <!-- 2007/10/10 JTeX 2.1 が最新 --> <!-- 2007/07/12 Web2c-7.5.7 ベースが最新 --> <!-- 2006/12/31 Web2c-7.5.6 ベースが最新 --> <!-- 2006/06/02 pTeX 3.1.10 が最新 --> <!-- 2005/11/03 pTeX 3.1.9 が最新 --> <!-- 2005/07/01 Web2c-7.5.5 ベースが最新 --> <!-- 2005/01/02 Web2c-7.5.4 ベースが最新 --> <!-- 2004/12/15 pTeX 3.1.8 が最新 -->

- [00FILES.sjis](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/00FILES.sjis),
    [00FILES.euc](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/00FILES.euc)（解説）

- [ChangeLog](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/ChangeLog)（変更履歴）← W32TeX
    は更新が頻繁に行われるので目を通しておいた方が良いです。

- [texinst2011.zip](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/texinst2011.zip)（簡易インストーラ）
- [unzip.exe](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/unzip.exe)（ZIP 展開ツール）
    - ZIP 形式の展開に対応したソフトウェア[^1]を用いてもかまいません。Windows
        7/Vista/XP は ZIP 形式の展開に標準で対応しています。

- [web2c-lib.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/web2c-lib.tar.xz)（必須）
- [web2c-w32.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/web2c-w32.tar.xz)（必須）
- [latex.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/latex.tar.xz)（必須）
- [mftools.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/mftools.tar.xz)（必須）
- [ptex-w32.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/ptex-w32.tar.xz)（必須）
- [platex.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/platex.tar.xz)（必須）
- [manual.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/manual.tar.xz)（マニュアル類……質問する前に読みましょう）
- [ltxpkgs.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/ltxpkgs.tar.xz)（[LaTeX](https://mirror.ctan.org/help/Catalogue/entries/latex.html)2e の基本パッケージ集）
- [vf-a2bk.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/vf-a2bk.tar.xz)（[pTeX](https://mirror.ctan.org/help/Catalogue/entries/ptex.html) 用 virtual fonts）
- [makeindex-w32.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/makeindex-w32.tar.xz)（索引作成ツール）
- [txpx-pazofonts.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/txpx-pazofonts.tar.xz)（TX/[PX](https://mirror.ctan.org/help/Catalogue/entries/pxfonts.html)/[Pazo](https://mirror.ctan.org/help/Catalogue/entries/mathpazo.html) フォント）
- [t1fonts.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/t1fonts.tar.xz)（Type 1 フォント）
- [dvipdfm-w32.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/dvipdfm-w32.tar.xz)（DVI → PDF 変換ツール）
- [dvipsk-w32.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/dvipsk-w32.tar.xz)（DVI → [PostScript](/PostScript/) 変換ツール）
- [pdftex-w32.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/pdftex-w32.tar.xz)
    ([pdfTeX](https://mirror.ctan.org/help/Catalogue/entries/pdftex.html))

- [oldinputs.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/oldinputs.tar.xz)（古い LaTeX のマクロ）

W32TeX のウェブサイトの標準インストールには NTT JTeX
([jtex-w32.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/jtex-w32.tar.xz))
も含まれていますが，jlatex を platex のつもりで使うと悲惨ですので，ここでは省略することにします（tex4ht で日本語を扱うには NTT JTeX が必須です）。ディスクに余裕があるのなら次のいずれか一つも入れておくと，日本語文字の組版をより整えることができるようになります。

- [otf.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/otf.tar.xz)（[OTF パッケージ](/OTF/)［安定版］）
- [otfdevel.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/otfdevel.tar.xz)（OTF パッケージ［開発版］）
- [otfbeta.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/otfbeta.tar.xz)（OTF パッケージ［ベータ版］）
- [utf.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/utf.tar.xz)（[UTF パッケージ](http://psitau.kitunebi.com/utf.html)）

さらにディスクに余裕があれば，ユーティリティ類
([psutils-w32.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/psutils-w32.tar.xz),
[t1utils-w32.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/t1utils-w32.tar.xz),
[ttf2pk-w32.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/ttf2pk-w32.tar.xz),
[ttf2pt1-w32.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/ttf2pt1-w32.tar.xz),
[txtutil.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/txtutil.tar.xz),
[tiff2png-w32.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/tiff2png-w32.tar.xz))
や[内部 Unicode 版 pTeX](http://homepage3.nifty.com/ttk/comp/tex/uptex.html)
([uptex-w32.tar.xz](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/uptex-w32.tar.xz))
も入れておくと便利かもしれません。

ダウンロードツールをお使いの場合には，サーバに迷惑をかけないようにするために同時接続数を1にしてください。

ダウンロードしたら，念のため次のことをご確認ください。

- ファイル名が正しいか？
    - Internet Explorer などの一部のブラウザやダウンローダは勝手に
        ファイル名を変えてしまうことがある。
        - e.g. Internet Explorer 9, Internet Explorer 8 を使って
            HTTP 経由で \*.tar.xz ファイルを保存した場合に，

> &#x2a;.tar.xz → \*.tar.tar

のようにファイル名が変わることがある。

- ファイルサイズがダウンロードサイトに表示されていたものと同じか？
    - Internet Explorer などの一部のブラウザやダウンローダは勝手に展開したり，バイナリ → テキスト変換したりしてファイルを壊すため，サイズが変わってしまう。
        - e.g. Internet Explorer 7 を使って HTTP 経由で \*.tar.xz
            ファイルを保存した場合に，ファイルサイズが変わっていることがある。

### インストール {#s5465eba}

インストールは，ダウンロードした \*.tar.xz ファイルを，任意のフォルダ（例えば
C:\w32tex\，D:\usr\local\，E:\ptex\\
など。ただし半角スペースや2バイト文字を含む名前のフォルダ［例えば
"C:\Program&nbsp;Files\TeX\\"，C:\日本語テフ\\
など］は避けてください。）を起点として展開するだけです。この際、解凍ソフトの自動フォルダ生成機能は
OFF にしておいてください。インストールがうまくいきません。W32TeX は
Microsoft Windows
のレジストリを変えませんので，インストーラは不要です。アンインストールも単に TeX
をインストールしたトップフォルダ以下を消すだけです。以上の意味がおわかりでしたら，お好きな方法で展開して「環境変数の設定」にお進みください。

以下では TeX のインストールをコマンドで行う方法を説明します。TeX
をインストールするトップフォルダは C:\w32tex\\
としています[^2]ので，<strong>別のフォルダ（ディレクトリ）にインストールする場合には “C:\w32tex\” の部分を読み替えてください</strong>。

1. まず，ハードディスクに適当なフォルダを作り，適当な名前（例えば temp）を
    付けます。すでに temp というフォルダがあれば別の名前にします。
    以下ではCドライブに temp というフォルダ (C:\temp\\) を作ったと仮定します。
    これ以外のフォルダの場合は，以下の “C:\temp” は適当に読み替えてください。

1. そのフォルダに上記のファイル群をダウンロードします。
    必要なファイルの抜けがないか，よく確認してください。
    ダウンロードソフトによっては，ファイル名を勝手に変えたり
    中を壊したりするようです。ファイル名とサイズを確認しながら作業してください。

1. ハードディスク（Cドライブ）に新規フォルダを作成し，w32tex という名前を
    付けます。w32tex というフォルダがすでにある場合，そこに不要な古い TeX システムが
    インストールされているなら，いったん消すか名前を変え，
    新しいシステムは w32tex という名前のフォルダに入れることをお勧めします。

1. コマンド プロンプト（Windows NT系(7, Vista, XP, 2000, NT 4.0, NT 3.x) の場合）
    または MS-DOSプロンプト（Windows Me, 98, 95 の場合）を開きます。
    コマンド プロンプト（MS-DOSプロンプト）は［スタート］ボタンの
    ［プログラム］の中，あるいはさらに［アクセサリ］の中にあります。

1. コマンド プロンプト（MS-DOSプロンプト）に次のように
    打ち込んで，C:\w32tex\ フォルダの中に texinst2011.zip を展開します。
    なお，これはダウンロードしたファイル群がCドライブの temp というフォルダに
    入っている場合です。

    ```
    >c:
    >cd \w32tex
    C:\w32tex>C:\temp\unzip C:\temp\texinst2011.zip
    ```

1. コマンド プロンプト（MS-DOSプロンプト）に次のように打ち込みます。
    なお，これはダウンロードしたファイル群がCドライブの temp というフォルダに
    入っている場合です。

    ```
    C:\w32tex>texinst2011 C:/temp
    ```

    沢山のメッセージが出てきますが，メッセージが完全に止まるまで
    閉じたり再起動したりしないでください。Windows Me, 98, 95 の場合は，途中で

    ```
    TAR.EXE: Could not change access and modification times of ...:
    Permission denied
    ```

    というメッセージが出るかもしれませんが，気にしないでかまいません。

#### $TEXMF, $TEXMFMAIN, $TEXMFLOCAL {#s503cb80}

TeX についての解説を読んでいると，$TEXMF，$TEXMFMAIN，$TEXMFLOCAL
という単語が出てくることがあります。<strong>$TEXMFMAIN</strong> とは
TeX をインストールしたフォルダ（ディレクトリ）の中にある
share\texmf というフォルダのことを指しています。同様に，<strong>$TEXMFLOCAL</strong> とは
TeX をインストールしたフォルダの中にある
share\texmf-local というフォルダのことを指しています。例えば
TeX を C:\w32tex\ にインストールしたのなら，

- $TEXMFMAIN = C:/w32tex/share/texmf
- $TEXMFLOCAL = C:/w32tex/share/texmf-local

となります。そして <strong>$TEXMF</strong> は
$TEXMFMAIN と $TEXMFLOCAL のどちらか，もしくは両方のことを指しています。

### 環境変数の設定 {#g0475486}

Microsoft Windows の種類によって方法が違います。

#### Windows NT系 {#zd15832c}

- Windows NT系(7, Vista, XP, 2000, NT 4.0, NT 3.x) では，
    ［スタート］ （→ ［設定］） → ［コントロール パネル］ → ［システムとメンテナンス］ → ［システム］ → ［システムの詳細設定］ → ［環境変数］ と
    辿ってください。もしシステム環境変数またはユーザー環境変数と
    して “TEXMF”，“TEXMFCNF”，“TEXMFMAIN” といったものが登録されているなら，
    削除してください。次に，ユーザー環境変数のところを見てください。Path という欄が
    あればそれをクリックして［編集］を押し，変数値の中に古い TeX への
    パス（“;C:\ptex\bin” とか）があったら消してください。そして変数値の
    最後に “;C:\w32tex\bin” がなければ追加し，\[OK\] を
    押します。Path が無ければ［新規］を押し，次のように設定してください。

> | 変数名 | 変数値 |
> |---|---|
> | Path | C:\w32tex\bin |
>

これで \[OK\] を押します。再起動の必要はありません。開いているコマンド プロンプト
あるいは TeX 関連のソフトがあれば，いったん閉じてください。
なお，自分だけではなくユーザ全員に TeX を使わせたい場合は，
管理者権限でシステム環境変数に上記のことを登録します。

#### Windows Me {#k8c23036}

- Windows Me では，
    ［スタート］ → ［ファイル名を指定して実行］ で “msconfig” と入力し，
    上と同様に，Path に “;C:\w32tex\bin” を付け加えてください。

#### Windows 98, 95 {#n2afa237}

- Windows 98, 95 では C:\AUTOEXEC.BAT をメモ帳などで開きます。もしその中に

    ```
    SET TEXMF=...
    SET TEXMFCNF=...
    SET TEXMFMAIN=...
    ```

    といった古い TeX で使っていた環境変数の設定があれば，それらを消します。
    また，Path に古い TeX へのパス（“C:\ptex\bin” とか）があったら消してください。
    これらを消した上で，AUTOEXEC.BAT の最後に次の行がない場合は追加します。

    ```
    SET Path=C:\w32tex\bin;"%Path%"
    ```

    これでいったん再起動してください。

環境変数の設定に AUTOEXEC.BAT を使わない Windows Me, NT系(7, Vista, XP, XP x64 Edition)//NTバージョンの違いと、2000(NT5,0)まではMSサポート対象外OSのため故Commentoutしました。//でも，過去に古い TeX を使っていた方は，もしかすると AUTOEXEC.BAT にも古い記述が残っていて，悪さをするかもしれません。AUTOEXEC.BAT
に “TEXMF”，“TEXMFCNF”，“TEXMFMAIN” といった設定があれば，
消してください。
また，Path に古い TeX へのパスが入っていたらそれも消してください。これは
重要なことで，うまく動かないというご質問の大半は環境変数の問題のようです。

> ちなみに，Windows 98, 95 では "%Path%" のようにダブルクオートを付けないと
> 空白を含むパスがうまく扱われず，Windows 2000, XP,XP x64 Edition では
> 逆にダブルクオートを付けると機能しないそうです（そもそも %Path% は不要）。

（「[Windows95/98/Me/NT/2000/XP における日本語TeX のインストールのチェック](http://akagi.ms.u-tokyo.ac.jp/tex_instchk.html)」より
引用： 「[角藤氏のパッケージでWeb2C 7.3.7 またはそれ以降の場合](http://akagi.ms.u-tokyo.ac.jp/tex_instchk.html#0-5)は、
これら3つの環境変数を全て未定義にすれば、正しい場所にあるものが使われます。」）

### ここまでのテスト {#bfc3538f}

Adobe
[Reader](http://www.adobe.com/jp/products/reader/)/[Acrobat](http://www.adobe.com/jp/products/acrobat/)
やその他の PDF ビューアをお持ちの方は，ここまでのインストールで
TeX を使うことができます。Adobe Reader
は「[Adobe &mdash; Adobe Reader のダウンロード](http://get.adobe.com/jp/reader/)」から無償でダウンロードできます。

例えばCドライブの C:\work\ というフォルダ（ディレクトリ）で
作業することにしましょう。このフォルダはあらかじめ作っておいてください。

コマンド プロンプト（MS-DOSプロンプト）を開き，
次のように打ち込んで上の作業用フォルダに移動します。

```
>c:
>cd \work
```

ここでコマンド プロンプト（MS-DOSプロンプト）に次のように打ち込みます。

```
C:\work>notepad test.tex
```

するとメモ帳が起動し，ファイル名が “test.tex” に設定されます。

メモ帳でなくても他のテキストエディタでもかまいません。

上記の方法でメモ帳が立ち上がらなければ，
［スタート］ → ［プログラム］ → ［アクセサリ］ あたりにあるはずですので，
マウスで起動してください。ただしメモ帳をマウスで起動した場合には，
これを「test.tex」という名前で保存しようとしても，
たぶんメモ帳が勝手に「test.tex.txt」といった名前に変えてしまいます。
そこでメモ帳で保存するときに『ファイル名(N):』の欄に「"test.tex"」と入力して
保存するか，または『ファイルの種類(T):』の欄から「すべてのファイル」を
選んだ上で『ファイル名(N):』の欄に「test.tex」と入力して保存してください。
「test.tex.txt」といったファイル名で保存されてしまった場合には，
後でファイル名を「test.tex」に変更する必要があります。

メモ帳の中に例えば次の例をコピーして貼り付けてください。

***

<!-- %%% -*- mode: yatex; Coding: shift_jis; Encoding: Shift_JIS -* -->

```
\documentclass{jarticle}
\begin{document}

ただいまテスト中。

\TeX

\end{document}
```

***

メモ帳で ［ファイル］ → ［上書き保存］ します。
メモ帳を閉じる必要はありません。

さきほどのコマンド プロンプト（MS-DOSプロンプト）に次のように打ち込みます。

```
C:\work>platex test.tex
```

沢山の英語のメッセージとともに “Output written on test.dvi” という
メッセージが出て，

```
C:\work>
```

というプロンプトが戻ってくれば成功です。

続いて，同じコマンド プロンプト（MS-DOSプロンプト）に次のように打ち込みます。

```
C:\work>dvipdfmx test.dvi
```

“test.dvi -> test.pdf” などというメッセージが出て，

```
C:\work>
```

というプロンプトが戻ってくれば成功です。

続いて，コマンド プロンプト（MS-DOSプロンプト）に次のように打ち込みます
（Windows NT系(7, Vista, XP, 2000, NT 4.0, NT 3.x)では “start” を省略してもかまいません）。

```
C:\work>start test.pdf
```

これで Adobe Reader が立ち上がり，上で書き込んだものが綺麗に現れれば OK です。

さらに作業を続ける場合には，Adobe Reader やメモ帳はそのまま立ち上げておくと
便利です。

ただし次に “dvipdfmx test.dvi” と
打ち込む前に，Adobe Reader で開いている test.pdf を閉じる必要が
あります。

Adobe Reader では開いているファイルを上書きできないからです。

platex に与える引数のファイル名によっては予期しない動作をするものもあります．

```
C:\work>platex 予定.tex
```

この場合は 定.dvi というファイルが作成されてしまいます．

予定.dvi ファイルを作成するには

```
C:\work>platex -jobname=予定 予定.tex
```

として -jobname= で指定してコンパイルをすれば OK です．

こういったコマンドの打ち込み操作が苦手な方に対して，[TeXworks](/TeXworks/)，EasyTeX，[WinShell](/WinShell/)，[Texmaker](/Texmaker/)，[TeXnicCenter](/TeXnicCenter/)，Masamichi，TeXE，[LyX](/LyX/)
などの [TeX 専用エディタ](</TeX用エディタ/>)が
WWW 上に無償で公開されています。

また [Emacs](/Emacs/) ([emacs for gnupack](http://gnupack.sourceforge.jp/docs/current/UsersGuide_download.html#_download_emacs)，[Meadow](http://www.meadowy.org/meadow/))，[Vim](/Vim/)，[xyzzy](/xyzzy/)，[jEdit](http://www.jedit.org/)，Mery，[EmEditor Free](http://www.forest.impress.co.jp/lib/offc/document/txteditor/emeditor.html)，[サクラエディタ](</サクラエディタ/>)，[gedit](http://projects.gnome.org/gedit/)，[Geany](http://www.geany.org/)，[秀丸エディタ](</秀丸エディタ/>) (シェアウェア)，[EmEditor Professional](http://jp.emeditor.com/) (シェアウェア)，WZ EDITOR (製品) などの
TeX 対応テキストエディタは
ISO-2022-JP（いわゆる「JIS コード」），EUC-JP（日本語 EUC），Shift_JIS（シフト JIS）[^3]，UTF-8
などの様々な文字コードに対応しているので，
標準のテキストエディタとしてメモ帳 (Notepad) を使っている方にはこの機会に他のテキストエディタへの乗り換えをお薦めします
（ただし Emacs \[emacs for gnupack，Meadow\]，Vim，xyzzy は初期設定ではショートカットキーなどの操作性が
メモ帳とは異なるので，慣れるまでは大変かもしれません）。

IDE を使いたい方は，[Eclipse](/Eclipse/) + [TeXlipse](/TeXlipse/) もおすすめです。

## 新ドキュメントクラスのインストール {#k48ecf0f}

ぜひ[奥村晴彦さん](http://oku.edu.mie-u.ac.jp/~okumura/)の[新ドキュメントクラス](http://oku.edu.mie-u.ac.jp/~okumura/jsclasses/)も
入れてください。

内部 Unicode 版 pTeX
（[uptex-w32.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/uptex-w32.tar.xz)）
には，奥村さんの新ドキュメントクラスが含まれています。

手動で入れるのなら，最新のものをダウンロードして展開し，
フォルダ（ディレクトリ）ごと $TEXMFLOCAL/tex/platex/
（例えば C:\w32tex\share\texmf-local\tex\platex\）
の中に入れれば完了です。

もしファイル名のデータベース $TEXMF/ls-R
（例えば C:\w32tex\share\texmf\ls-R）が
存在するのなら，mktexlsr コマンドでデータベースを更新しないと，
新しくインストールしたファイルが認識されません。しかしこれは忘れやすいので，
初心者のかたは mktexlsr コマンドを打ち込まないほうがいいでしょう。

間違って mktexlsr コマンドを打ち込んでしまった場合は deltexlsr コマンドを打ち込んでください。$TEXMF/ls-R ファイルが削除されます。

## Ghostscript のインストール {#zd901fa9}

[Ghostscript](/Ghostscript/) は [PostScript](/PostScript/) のインタープリタ（ソフトウェア RIP）です。EPS
形式の図を使う際や，Type 1 形式のフォントを
[dviout for Windows](/dviout/) で使う際に必要です。

もし古い Ghostscript がインストールされている場合は，環境変数 GS_LIB は
必ず削除しておきます（方法は上で説明した TeX の場合と同じです）。

ここでは [Ghostscript 7.07](</Ghostscript 7.07/>)
([gs707w32full.zip](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/gs/gs707w32full.zip)) を
使ってみます（Ghostscript にはバージョン 8 系列もありますが，
日本語の扱いに難点が残っていますので，初めて扱う方には 7.07 をお薦めします）。このファイルを
展開して中にある “setupgs.exe” を実行すればインストールできます。
デフォルトでは C:\gs\ に入ります（ご自分でドキュメントを読んで
トラブルを解決するつもりの人以外は，安易に変えないで
ください）。C:\gs\gs7.07\bin\gswin32.exe が実行ファイルです
（コンソール版は gswin32c.exe）。

環境変数 TEMP に全角文字が含まれていると失敗するかもしれません
（Windows NT系(7, Vista, XP, 2000, NT 4.0, NT 3.x)でユーザ名に2バイト文字を使っている場合など）。
この場合は，例えば C:\tmp\ というフォルダ（ディレクトリ）を作っておき，
［コントロールパネル］ → ［システム］ → ［詳細］ → ［環境変数］ で
環境変数 TEMP を “C:\tmp” に設定してからインストールを行います。
私は TEMP も TMP もこのように設定しています。

環境変数 GS_LIB については，2003年7月13日以降の Ghostscript 7.07 では
一切不要です。むしろ不完全な GS_LIB を設定するとトラブルの元ですので，
削除しておいてください。

動作チェックと
して ［スタート］ → ［プログラム］ → ［Ghostscript］ → ［Ghostscript
7.07］ で Ghostscript を起動し，
その窓にマイコンピュータから C:\gs\gs7.07\examples\tiger.ps を
ドラッグ &amp; ドロップして虎の絵が表示できれば OK です。

dviout for Windows との連携をチェックするには，dviout をインストールした
フォルダ（例えば C:\dviout\）の GRAPHIC\PS\ フォルダに上の tiger.ps と，
同じフォルダにある golfer.ps とをコピーしておきます。これでその場所にある
pssample.dvi をダブルクリックして絵入りの文書が表示できれば OK です。

dvipdfmx や dvipdfm で PDF を作る際には，C:\gs\gs7.07\bin\ にパスを通して
おきます。上のほうで環境変数 Path に “C:\w32tex\bin” を加えましたが，
さらにその後に “;C:\gs\gs7.07\bin;C:\gs\gs7.07\lib” を追加します。結局
Path は “C:\w32tex\bin;C:\gs\gs7.07\bin;C:\gs\gs7.07\lib” となります。

2003年9月5日以降の角藤さんの Ghostscript 7.07 配布では，和文フォントを
埋め込まない設定にできます。設定は，dvipdfmx.cfg の “D” で始まる行を
次のように書き直します（本当は1行です）。

```
D "gswin32c -q -dSAFER -dNOPAUSE -dBATCH -sPAPERSIZE=a0
-sDEVICE=pdfwrite -dCompatibilityLevel=1.3
-dAutoFilterGrayImages=false -dAutoFilterColorImages=false
-dGrayImageFilter=/FlateEncode -dColorImageFilter=/FlateEncode
-dUseFlateCompression=true -sOutputFile=%o -c '.setpdfwrite <<
/NeverEmbed [/Courier /Courier-Bold /Courier-Oblique /Courier-BoldOblique
/Helvetica /Helvetica-Bold /Helvetica-Oblique /Helvetica-BoldOblique
/Times-Roman /Times-Bold /Times-Italic /Times-BoldItalic
/Symbol /ZapfDingbats
/Ryumin-Light /GothicBBB-Medium /MS-Mincho /MS-Gothic]
>> setdistillerparams' -f %i -c quit"
```

### 【参考】 Ghostscript による PDF 作成 {#zce2e51d}

次の作業は Ghostscript 7.07 単独で日本語の PDF を作る場合，
および dvipdfmx や dvipdfm で処理する EPS ファイルに
日本語が含まれている場合に必要です。EPS ファイルに日本語が含まれていない
（あるいは日本語がアウトライン化されている）ならば，dvipdfmx や dvipdfm で
処理する本文にいくら日本語が使われていても，以下の作業は特に不要です。

[Ring Server](http://www.ring.gr.jp/) の
[/pub/text/TeX/ptex-win32/gs/](http://www.ring.gr.jp/pub/text/TeX/ptex-win32/gs/)
から[adobe-cmaps-200204.zip](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/gs/adobe-cmaps-200204.zip)
と[acro5-cmaps-2001.zip](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/gs/acro5-cmaps-2001.zip)
をダウンロードします。

C:\gs\gs7.07\Resource\ というフォルダ（ディレクトリ）を作り，
この二つのファイルをその中で展開します。
もし C:\gs\gs7.07\Resource\ 以外のフォルダに
展開するなら，C:\gs\gs7.07\lib\gs_res.ps の248&ndash;249行を
編集する必要があります。

次は和文フォントを使えるようにします。
ここでは Microsoft Windows の「ＭＳ 明朝」，「ＭＳ ゴシック」を
使ってみます。C:\gs\gs7.07\lib\CIDFnmap の最後に次のように書き込みます。

***

```
/Ryumin-Light      /MS-Mincho        ;
/GothicBBB-Medium  /MS-Gothic        ;
/HeiseiMin-W3      /Ryumin-Light     ;
/HeiseiKakuGo-W5   /GothicBBB-Medium ;

/MS-Mincho         (msmincho.ttc) 1  ;
/MS-Gothic         (msgothic.ttc) 1  ;
```

***

これで日本語が表示できます。

C:\gs\gs7.07\lib\ も Path に含めておけば，ps2pdf コマンドで
PostScript ファイルを PDF ファイルに変換できます。
ただし『無効なフォント「MS-Mincho」が文書から削除されました。』と出て，
すべてゴシック体で表示されてしまいます。
これを防ぐには，MS-Mincho，MS-Gothic を文書から削除して
Ryumin-Light，GothicBBB-Medium という名前に置き換えればいいわけです。
これを自動化するスクリプト
[replacecjkfonts, cjkps2pdf](http://www.eaflux.com/replacecjkfonts/)
を[中丸幸治さん](http://www.eaflux.com/)が作られています。
これを使えば PDF のサイズも小さくなりますし，Acrobat Reader が
適当なフォントできれいに表示してくれます。

2003年9月5日以降の角藤さんが配布なさっている
Ghostscript 7.07 なら，replacecjkfonts 無しでうまくいくと思います。

## SumatraPDF のインストール {#sbe939df}

[SumatraPDF](http://blog.kowalczyk.info/software/sumatrapdf/) は SyncTeX に対応した PDF ビューアです．

PDF ファイルの自動更新機能もあり，Adobe Reader よりも TeX の PDF ファイルビューアに向いています．

プレビューする場合に複数の SumatraPDF が起動するのを防止したい場合は -reuse-instance オプションを追加します．

v1.6 から PostScript ファイルの表示にも対応しました．([Ghostscript](/Ghostscript/) が必要です．)

v1.6 で forward search ができない場合は v1.7 以降にアップグレードしてください．

テスト用のプレリリースビルド版も利用できます．→ [SumatraPDF pre-release builds](http://blog.kowalczyk.info/software/sumatrapdf/prerelease.html)

派生版として

- [PDFlite](http://www.pdflite.com/)
- [XhmikosR's builds home/sumatrapdf/](http://xhmikosr.1f0.de/index.php?folder=c3VtYXRyYXBkZg==)
- 最適化ビルド版の [SumatraPDF x86/x64 Optimized Builds](http://guti.isgreat.org/static.php?page=SumatraPDFOpt)
- [PortableApps.com](http://portableapps.com/) の [SumatraPDF Portable](http://portableapps.com/apps/office/sumatra_pdf_portable)
- TeX ユーザのための [SumatraPDF-TeX](http://william.famille-blum.org/software/sumatra/) → 本家にマージされました．

もあります．

## dviout for Windows のインストール {#fe50aa67}

[dviout - TeX Wiki](/dviout/) をご覧ください。

## GSview のインストール（オプション） {#xd771752}

[CTAN:support/ghostscript/ghostgum/](https://mirror.ctan.org/support/ghostscript/ghostgum/) から最新の GSview インストーラ
（2011年05月30日時点では gsv491w32.exe）をダウンロードし，実行します。 <!-- 2011/05/30 GSview Ver.4.91 公開 --> <!-- 2007/11/19 GSview Ver.4.9 公開 --> <!-- 2006/02/25 GSview Ver.4.8 公開 --> <!-- 2005/03/26 GSview Ver.4.7 公開 -->

日本語を表示する
には，\[Options\] → \[Advanced Configure...\] → \[Ghostscript Options\] の
内容に “-dWINKANJI” を追加します。

## PS_View のインストール (オプション) {#kcd19930}

[PS_View](http://psview.sourceforge.net/) は Ghostscript を使って PS/PDF ファイルを表示するプレビューアです．

起動するには，psv.wx.lua の gsargs の dllloc

```
local gsargs = {
  args= {},      -- arguments to ghostscript (wihout paths)
  dllloc= "",    -- localisation of DLL (passed to wxGhostscript)
```

を Ghostscript の dll ファイル (C:\gs\gs9.02\bin\gsdll32.dll) に修正します．

ただし，ディレクトリの区切りは，スラッシュ(/) もしくは バックスラッシュ2つ(\\\\) を使用します．

```
local gsargs = {
  args= {},      -- arguments to ghostscript (wihout paths)
  dllloc= "C:/gs/gs9.02/bin/gsdll32.dll",    -- localisation of DLL (passed to wxGhostscript)
```

日本語を表示するには，psv.wx.lua の PSV_DftGsPars

```
local PSV_DftGsPars = {"-dNOPAUSE","-dDELAYBIND","-dNOEPS"}
```

を

```
local PSV_DftGsPars = {"-dNOPAUSE","-dDELAYBIND","-dNOEPS","-dWINKANJI"}
```

に修正します．

## [TeX 用エディタ](</TeX用エディタ/>)のインストール（オプション） {#e8efca0f}

### TeXworks {#sca389c7}

W32TeX にはデフォルトでエディタとして [TeXworks](/TeXworks/) (by Jonathan Kew &amp; Stefan Löffler) が含まれています．<br>
コマンド プロンプトで texworks とすると，立ち上がります．<br>
InstallDir/share/texworks の texworks.exe のショートカットを作成すると，通常の GUI アプリケーションのようにマウスで立ち上げることもできます．<br>
TeXworks は SyncTeX をサポートしています．<br>
W32TeX に入れてある TeXworks は，Windows XP 以降の Windows で動作します．<br>
Windows 2000 では動作しません．<br>
コマンドの補完機能はもちろん装備してあり，その他いろいろ工夫された，優れたエディタです．<br>
コマンド補完は，一部を入力してタブを押すと候補が表示されます．<br>
補完対象となるコマンドのリストは

```
$TEXMF\share\texworks\twdata\completion
```

の中にテキストファイルで保存されています．<br>
このファイルを編集して，カスタマイズすることも可能です．<br>
W32TeX に付属のものは，スペルチェック用の英語辞書を前もって入れてあります．<br>
詳細については，ヘルプを見てください．<br>
SyncTeX をサポートするエンジンは一般に pdftex, xetex, luatex です．<br>
W32TeX ではこれに加えて、ptex, eptex, uptex, euptex でも SyncTeX をサポートしています．<br>
オプションで

- -synctex=1 とすると，zlib で圧縮した SyncTeX 用データを出力します．
- -synctex=-1 のように負の値に設定すると，圧縮しないデータを出力します．

フォントを埋め込んでおく（[PDFの作り方](</PDFの作り方/#rdc781c9>)参照）と，TeXworks の PDF viewer で日本語 PDF も表示できます．<br>
SyncTeX というのは、PDF viewer と editor の間の synchronization を実現したものです．<br>

[TeXworks](/TeXworks/) もご覧ください．

### EasyTeX {#i87678c7}

EasyTeX をご覧ください．

### WinShell {#l040a9c6}

[WinShell](/WinShell/)，WinShell3 をご覧ください．

### Texmaker {#q8c6a4e6}

[Texmaker](/Texmaker/) をご覧ください．

### TeXnicCenter {#kf5b1543}

[TeXnicCenter](/TeXnicCenter/) をご覧ください．

### Masamichi {#d70fc64e}

Masamichi をご覧ください．

### TeXE {#g0454558}

TeXE をご覧ください．

### LyX {#s7fa0837}

[LyX](/LyX/) をご覧ください．

### TeraPad + ツール {#a652512f}

TeraPad#ツール をご覧ください．

### VxEditor + ツール {#eaa0beaf}

VxEditor#ツール をご覧ください．

### Mery + マクロ {#oab02ae1}

Mery#マクロ をご覧ください．

### サクラエディタ + マクロ {#l46875d6}

[サクラエディタ](</サクラエディタ/>)[#マクロ](</サクラエディタ/#k75075b0>) をご覧ください．

### Notepad++ + プラグイン {#k51d20b3}

[Notepad++](/Notepad++/)[#プラグイン](/Notepad++/#k2155ff2) をご覧ください．

### 秀丸エディタ (シェアウェア) + マクロ {#o8e43f26}

[秀丸エディタ](</秀丸エディタ/>)[#マクロ](</秀丸エディタ/#m32041fb>) をご覧ください．

### WZ EDITOR (製品) {#cbee1e14}

WZ EDITOR をご覧ください．

### Eclipse + TeXlipse {#ra6693bf}

[Eclipse](/Eclipse/) + [TeXlipse](/TeXlipse/) をご覧ください．

### xyzzy + tex-mode {#s2425f0a}

[xyzzy](/xyzzy/) + KyoTeX<br>[xyzzy](/xyzzy/) + [KaTeX](/KaTeX/)<br>
をご覧ください．

### Emacs + tex-mode {#z9deda13}

[Emacs](/Emacs/) + [YaTeX](/YaTeX/)<br>[Emacs](/Emacs/) + [AUCTeX](/AUCTeX/)<br>
をご覧ください．

### Vim + Vim-LaTeX {#s7ce6347}

[Vim](/Vim/) + [Vim-LaTeX](/Vim-LaTeX/) をご覧ください．

## [TeX Live](</TeX Live/>) {#ia336ed2}

## [MiKTeX](http://miktex.org/) {#x2459fb9}

## Cygwin での ptetex のインストール {#h7017721}

Microsoft Windows 上で動く UNIX&reg; 互換システム [Cygwin](http://cygwin.com/) に日本語
TeX 環境を作るという手もあります。

Cygwin のパッケージインストール
(-X オプションをつけてネットインストーラを起動する; 例. \[スタート\]->\[ファイル名を指定して実行\]->"Cygwin の setup.exe へのフルパス" -X) で，
ダウンロードサイトの URI ( [http://ptetexwin.sourceforge.jp](http://ptetexwin.sourceforge.jp) ) を追加し，
パッケージを選択するだけで日本語 TeX 環境一式が揃います。

詳細は
「[Cygwin で 日本語 TeX &mdash; ptetex を簡単インストール](http://ptetexwin.sourceforge.jp/)」
へ。

[^1]: 例えば [7-Zip](http://sevenzip.sourceforge.jp/)，[7-Zip Portable](http://portableapps.com/apps/utilities/7-zip_portable)，[Explzh](http://www.ponsoftware.com/)，[LhaForge](http://claybird.sakura.ne.jp/garage/lhaforge/)，[LhaOpen](http://lhaopen.tsuru.syuriken.jp/)，[Lhaz](http://www.chitora.jp/lhaz.html)，[Lhaplus](http://hoehoe.com/)，[epo](http://www.softgate.jp/ja/portal/software.html)，[PeaZip](http://peazip.sourceforge.net/)，[ALZip](http://www.altools.jp/product/alzip.aspx)（[アドウェア](http://www.altools.jp/ETC/NEWS.aspx?mid=231&vidx=47)），[WinRAR](http://www.diana.dti.ne.jp/~winrar/)（シェアウェア）など。
[^2]: C:\w32tex の場合、フロントエンドのプログラムが自動で見つけてくれるチャンスが増えます。
[^3]: 類似する文字コードとして [Windows-31J](http://msdn.microsoft.com/goglobal/cc305152.aspx) があります。この Windows-31J と Shift_JIS は Microsoft Windows 上ではしばしば混同されます。また，Windows-31J は日本語 Microsoft Windows の「メモ帳」では “ANSI” と表示されます。
