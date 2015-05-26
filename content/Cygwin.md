---
title: "Cygwin"
url: "/Cygwin/"
date: 2012-03-17T07:04:07Z
pukiwiki: "Cygwin"
---

# Cygwin

[Microsoft Windows](</Microsoft Windows/>) > Cygwin

## [Cygwin](https://www.cygwin.com/) での TeX の利用 {#y69b4c00}

Cygwin は Microsoft Windows 上で動作する Linux（UNIX&reg; 互換システム）ライクな環境です．
64-bit 版と 32-bit 版のインストーラがあります．

ここでは，Cygwin 上に TeX 環境を構築して利用する方法を説明します．
Cygwin で [TeX Live](</TeX Live/>) を使用する場合は

- TeX Live 公式パッケージ
- TeX Live/Cygwin

の選択肢があります．

***

***

### TeX Live 公式パッケージ {#cfed3869}

以下の操作で wget というコマンドを使用しますが，Cygwin
インストール時にパッケージ選択画面で Default のままインストールした場合，wget
がインストールされていないので，そのコマンドが使えません．
あらためて setup-x86_64.exe または setup-x86.exe
を立ち上げ，パッケージ選択画面で wget を検索し，Default から Install
に変更し，wget をインストールしましょう．

また，TeX Live のインストールには [Perl](/Perl/) も必要です．
さらに，TeX で eps 形式の図を扱うときは [Ghostscript](/Ghostscript/) も必要です．
少なくとも wget, Perl, Ghostscript は事前に
Cygwin にインストールしておきましょう．

#### TeX Live のインストール {#peed6637}

- [CygwinにTeXlive公式パッケージを導入する](http://vraisamis.hatenadiary.jp/entry/2013/11/19/213227)
- [http://www.tug.org/texlive/quickinstall.html](http://www.tug.org/texlive/quickinstall.html)
- [http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation](http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation)

を参照．

[ミラーサイト](</TeX Live/#tlnet>)から
install-tl-unx.tar.gz をダウンロードします．

```
$ wget http://www.ring.gr.jp/pub/text/CTAN/systems/texlive/tlnet/install-tl-unx.tar.gz
```

install-tl-unx.tar.gz を展開します．

```
$ tar xvf install-tl-unx.tar.gz
```

展開したインストーラのディレクトリに移動します．

```
$ cd install-tl*
```

インストーラを実行します．
オプションでダウンロードするリポジトリを指定できます．

```
$ ./install-tl --repository http://www.ring.gr.jp/pub/text/CTAN/systems/texlive/tlnet/

...

Actions:
 <I> start installation to hard disk
 <H> help
 <Q> quit

Enter command: I
```

I を入力してインストールを開始します．

サーバーの接続エラーが発生したり，アーカイブ中に予期せぬ EOF があったりした場合はインストールが途中でストップします．
エラーが発生した場合は以下のコマンドで途中から再開できたりできなかったりします．

```
$ ./install-tl --profile installation.profile
ABORTED INSTALLATION FOUND: installation.profile
Do you want to continue with the exact same settings as before (y/N): y
```

再開できない場合は[接続先を変更](</TeX Live/#tlnet>)するか，または
[ISO ファイル](</TeX Live/#iso>)をミラーサイトからダウンロードしてインストールしてください．
インストールが終了したら /usr/local/bin
ディレクトリ配下にシンボリックリンクを追加します．

```
$ /usr/local/texlive/????/bin/*/tlmgr path add
```

#### アップデート {#k71f6600}

アップデートには [tlmgr](/tlmgr/) を使用します．

```
$ tlmgr update --self --all
```

を実行すれば OK です．

ただし，アップデートによってパッケージや設定が変更されて，今まで動いていたものが動かなくなったりすることがあるかもしれません．

- /usr/local/texlive/????/tlpkg/backups

にパッケージのバックアップが保存されますので，アップデートによって動作しなくなった場合は以前のバージョンに戻してください．

#### フォント埋め込みの設定 {#ea17ba92}

kanji-config-updmap(-sys) を使用してフォント埋め込みの設定ができます．
IPAex フォントを埋め込む場合は

```
$ kanji-config-updmap-sys ipaex
```

または

```
$ kanji-config-updmap ipaex
```

を実行します．

TeX Live には IPAex フォント，(u)ptex-ipaex.map が収録されています．

```
$ kpsewhich ipaexm.ttf ipaexg.ttf
/usr/local/texlive/????/texmf-dist/fonts/truetype/public/ipaex/ipaexm.ttf
/usr/local/texlive/????/texmf-dist/fonts/truetype/public/ipaex/ipaexg.ttf
$ kpsewhich uptex-ipaex.map
/usr/local/texlive/????/texmf-dist/fonts/map/dvipdfmx/jfontmaps/ipaex/uptex-ipaex.map
```

#### タイプセットのしかた {#dab5905e}

(u)pLaTeX + dvipdfmx を実行する場合は [ptex2pdf](/ptex2pdf/) が便利です．

- pLaTeX + dvipdfmx の場合

    ```
    $ ptex2pdf -l -ot '-synctex=1' -od '-f ptex-ipaex.map' hoge.tex
    ```

- upLaTeX + dvipdfmx の場合

    ```
    $ ptex2pdf -u -l -ot '-synctex=1' -od '-f uptex-ipaex.map' hoge.tex
    ```

なお，ptex2pdf v0.5 以前では
/usr/bin/env: texlua : No such file or directory
なるエラーが発生するバグが報告されていましたが，v0.6 で解決しています．

- [ptex2pdf 0.6 - There and back again](https://www.preining.info/blog/2015/03/ptex2pdf-0-6/)

### TeX Live/Cygwin <a id="texlive-cygwin"></a> {#xad0a00d}

TeX Live 由来のパッケージが，texlive.tlpkg に沿ったパッケージングによって
Cygwin 本家から提供されています．
TeX Live のパッケージが一通りそろっていれば問題ないというユーザにとっては十分です．
いわゆる OS のパッケージングなので，Cygwin 本家のパッケージングシステムから独自に変更を加えることに対する対応は甘いという点に，ヘビーユーザは気を付ける必要があります．

<!-- [[tlptexlive:http://www.preining.info/blog/software-projects/tlptexlive/]] に Cygwin のバイナリが用意されています． -->
<!-- ただし，setup-x86.exe または setup-x86_64.exe でインストールした texlive パッケージでは，tlmgr がうまく動かないので，tlptexlive リポジトリは，TeX Live を install-tl などで独自インストールしたときに使えるとお考えいただくのが現時点ではよさそうです． -->

#### TeX Live/Cygwin 64-bit 版 (x86_64) {#u7b94ff6}

- [http://ftp.jaist.ac.jp/pub/cygwin/x86_64/release/texlive-collection-langjapanese/](http://ftp.jaist.ac.jp/pub/cygwin/x86_64/release/texlive-collection-langjapanese/)
- [http://ftp.jaist.ac.jp/pub/cygwin/x86_64/release/texlive/](http://ftp.jaist.ac.jp/pub/cygwin/x86_64/release/texlive/)
- [ftp://ftp.jaist.ac.jp/pub/cygwin/x86_64/release/texlive-collection-langjapanese/](ftp://ftp.jaist.ac.jp/pub/cygwin/x86_64/release/texlive-collection-langjapanese/)
- [ftp://ftp.jaist.ac.jp/pub/cygwin/x86_64/release/texlive/](ftp://ftp.jaist.ac.jp/pub/cygwin/x86_64/release/texlive/)

#### TeX Live/Cygwin 32-bit 版 (x86) {#cf18fc4c}

- [http://ftp.jaist.ac.jp/pub/cygwin/x86/release/texlive-collection-langjapanese/](http://ftp.jaist.ac.jp/pub/cygwin/x86/release/texlive-collection-langjapanese/)
- [http://ftp.jaist.ac.jp/pub/cygwin/x86/release/texlive/](http://ftp.jaist.ac.jp/pub/cygwin/x86/release/texlive/)
- [ftp://ftp.jaist.ac.jp/pub/cygwin/x86/release/texlive-collection-langjapanese/](ftp://ftp.jaist.ac.jp/pub/cygwin/x86/release/texlive-collection-langjapanese/)
- [ftp://ftp.jaist.ac.jp/pub/cygwin/x86/release/texlive/](ftp://ftp.jaist.ac.jp/pub/cygwin/x86/release/texlive/)

#### TeX Live/Cygwin のインストール {#fc129d62}

Cygwin オフィシャルインストーラの setup-x86_64.exe または setup-x86.exe を使って TeX Live/Cygwin をインストールできます．
パッケージ選択画面で Publishing を Default から Install に変更すると TeX Live/Cygwin がフルインストールされます．

#### フォント埋め込みの設定 {#s6b421fb}

kanji-config-updmap(-sys) を使用してフォント埋め込みの設定ができます．
IPAex フォントを埋め込む場合は

```
$ kanji-config-updmap-sys ipaex
```

または

```
$ kanji-config-updmap ipaex
```

を実行します．

#### タイプセットのしかた {#ba49fc90}

(u)pLaTeX + dvipdfmx を実行する場合は [ptex2pdf](/ptex2pdf/) が便利です．
使用法は上の TeX Live 公式パッケージの該当項目を参照してください．

### 不具合 {#iffd4e02}

#### dvipdfmx が rungs の呼び出しに失敗する → /usr/share/texmf-dist/dvipdfmx/dvipdfmx.cfg を修正する {#oe289452}

[dvipdfmx](/dvipdfmx/) がうまく動作しない場合は
/usr/share/texmf-dist/dvipdfmx/dvipdfmx.cfg を修正します．

デフォルトでは

```
D  "rungs -q -dNOPAUSE -dBATCH -dEPSCrop -sDEVICE=pdfwrite -dCompatibilityLevel=%v -dAutoFilterGrayImages=false -dGrayImageFilter=/FlateEncode -dAutoFilterColorImages=false -dColorImageFilter=/FlateEncode -sOutputFile='%o' '%i' -c quit"
```

に設定されています．
Ghostscript のコマンド名が gs の場合は

```
D  "gs -q -dNOPAUSE -dBATCH -dEPSCrop -sDEVICE=pdfwrite -dCompatibilityLevel=%v -dAutoFilterGrayImages=false -dGrayImageFilter=/FlateEncode -dAutoFilterColorImages=false -dColorImageFilter=/FlateEncode -sOutputFile='%o' '%i' -c quit"
```

に修正します．

- [dvipdfmx fails to call rungs](http://cygwin.com/ml/cygwin/2013-01/msg00366.html)
    - [Re: dvipdfmx fails to call rungs](http://cygwin.com/ml/cygwin/2013-01/msg00370.html)
- [Cygwin の TeXLive の dvipdfmx が失敗する](http://d.hatena.ne.jp/tsntsumi/20120514/DvipdfmxInTexLiveOnCygwinFailed) → [Cygwin の TeXLive の dvipdfmx が成功した](http://d.hatena.ne.jp/tsntsumi/20120515/DvipdfmxInTeXLiveOnCygwinSucceeded)

### 関連リンク {#bc8cfcc3}

- [Cygwin](https://www.cygwin.com/)
    - [The Cygwin Project mailing list archives](http://cygwin.com/ml/cygwin/)
    - [The cygwin-announce mailing list archives](http://cygwin.com/ml/cygwin-announce/)
    - [The cygwin-apps mailing list archives](http://cygwin.com/ml/cygwin-apps/)
- [Cygwin Ports project](http://sourceware.org/cygwinports/)
- [gnupack](http://gnupack.osdn.jp/docs/latest/UsersGuide.html)

#### 動作環境 {#n6af06c2}

- [http://www.cygwin.com/faq.html#faq.what.supported](http://www.cygwin.com/faq.html#faq.what.supported)

#### License {#fe355f24}

GPLv3

- [https://www.cygwin.com/faq.html#faq.what.free](https://www.cygwin.com/faq.html#faq.what.free)
- [https://cygwin.com/licensing.html](https://cygwin.com/licensing.html)
- [https://cygwin.com/viewvc/src/winsup/COPYING?view=markup](https://cygwin.com/viewvc/src/winsup/COPYING?view=markup)

#### ChangeLog {#t7089ab8}

- [https://cygwin.com/viewvc/src/winsup/doc/ChangeLog?view=markup](https://cygwin.com/viewvc/src/winsup/doc/ChangeLog?view=markup)
- [https://cygwin.com/viewvc/src/winsup/ChangeLog?view=markup](https://cygwin.com/viewvc/src/winsup/ChangeLog?view=markup)
