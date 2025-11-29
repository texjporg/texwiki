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
x86_64 版のインストーラがあります．

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
あらためて setup-x86_64.exe
を立ち上げ，パッケージ選択画面で wget を検索し，Default から Install
に変更し，wget をインストールしましょう．

また，TeX Live のインストールには [Perl](/Perl/) も必要です．
さらに，TeX で eps 形式の図を扱うときは [Ghostscript](/Ghostscript/) も必要です．
少なくとも wget, Perl, Ghostscript は事前に
Cygwin にインストールしておきましょう．

#### TeX Live のインストール {#peed6637}

- [CygwinにTeXlive公式パッケージを導入する](http://vraisamis.hatenadiary.jp/entry/2013/11/19/213227)
- [https://www.tug.org/texlive/quickinstall.html](https://www.tug.org/texlive/quickinstall.html)
- [https://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation](https://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation)

を参照．

[ミラーサイト](</TeX Live/#tlnet>)から
install-tl-unx.tar.gz をダウンロードします．

```
$ wget https://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz
```

install-tl-unx.tar.gz を展開します．

```
$ tar xvf install-tl-unx.tar.gz
```

展開したインストーラのディレクトリに移動します．

```
$ cd install-tl-2*
```

インストーラを実行します．
オプションでダウンロードするリポジトリを指定できます．

```
$ ./install-tl -no-gui -repository https://mirror.ctan.org/systems/texlive/tlnet/

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
$ ./install-tl -no-gui -profile installation.profile
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

#### タイプセットのしかた {#dab5905e}

(u)pLaTeX + dvipdfmx を実行する場合は [ptex2pdf](/ptex2pdf/) が便利です．

- pLaTeX + dvipdfmx の場合

    ```
    $ ptex2pdf -l -ot '-synctex=1' foo.tex
    ```

- upLaTeX + dvipdfmx の場合

    ```
    $ ptex2pdf -u -l -ot '-synctex=1' foo.tex
    ```

### TeX Live/Cygwin <a id="texlive-cygwin"></a> {#xad0a00d}

TeX Live 由来のパッケージが，texlive.tlpkg に沿ったパッケージングによって
Cygwin 本家から提供されています．
TeX Live のパッケージが一通りそろっていれば問題ないというユーザにとっては十分です．
いわゆる OS のパッケージングなので，Cygwin 本家のパッケージングシステムから独自に変更を加えることに対する対応は甘いという点に，ヘビーユーザは気を付ける必要があります．

#### TeX Live/Cygwin {#u7b94ff6}

- [https://cygwin.com/cgi-bin2/package-grep.cgi?grep=texlive](https://cygwin.com/cgi-bin2/package-grep.cgi?grep=texlive)
- [https://cygwin.com/packages/summary/texlive-collection-langjapanese.html](https://cygwin.com/packages/summary/texlive-collection-langjapanese.html)
- [https://cygwin.com/packages/summary/texlive-collection-luatex.html](https://cygwin.com/packages/summary/texlive-collection-luatex.html)
- [https://cygwin.com/packages/summary/texlive-collection-latexextra.html](https://cygwin.com/packages/summary/texlive-collection-latexextra.html)
- [https://cygwin.com/packages/summary/texlive.html](https://cygwin.com/packages/summary/texlive.html)
- [https://ftp.jaist.ac.jp/pub/cygwin/noarch/release/texlive-collection-langjapanese/](https://ftp.jaist.ac.jp/pub/cygwin/noarch/release/texlive-collection-langjapanese/)
- [https://ftp.jaist.ac.jp/pub/cygwin/noarch/release/texlive-collection-luatex/](https://ftp.jaist.ac.jp/pub/cygwin/noarch/release/texlive-collection-luatex/)
- [https://ftp.jaist.ac.jp/pub/cygwin/noarch/release/texlive-collection-latexextra/](https://ftp.jaist.ac.jp/pub/cygwin/noarch/release/texlive-collection-latexextra/)
- [https://ftp.jaist.ac.jp/pub/cygwin/x86_64/release/texlive/](https://ftp.jaist.ac.jp/pub/cygwin/x86_64/release/texlive/)

#### TeX Live/Cygwin のインストール {#fc129d62}

Cygwin オフィシャルインストーラの setup-x86_64.exe を使って TeX Live/Cygwin をインストールできます．
パッケージ選択画面で Publishing を Default から Install に変更すると TeX Live/Cygwin がフルインストールされます．

#### タイプセットのしかた {#ba49fc90}

(u)pLaTeX + dvipdfmx を実行する場合は [ptex2pdf](/ptex2pdf/) が便利です．
使用法は上の TeX Live 公式パッケージの該当項目を参照してください．

### 注意点 {#o2b6fd0e}

#### TeX Live/Cygwin の dvipdfmx が TeX Live 公式パッケージの dvipdfmx よりも優先的に実行されて Unable to find TFM file のエラーが発生することがある {#yc6e672e}

TeX Live/Cygwin の dvipdfmx が TeX Live 公式パッケージの dvipdfmx よりも優先的に実行されて Unable to find TFM file のエラーが発生することがあるようです．

TeX Live 公式パッケージの dvipdfmx が優先的に実行されるように PATH を変更するとうまくいくようです．

- [Unable to find TFM file “″ で2時間無駄にした](https://masuku0w0.hatenablog.jp/entry/2016/04/27/013612)
- [【cygwin】w32texとの競合問題](https://bluepost69-tech.hatenablog.com/entry/2016/01/22/031818)

### 不具合 {#iffd4e02}

#### TeX Live/Cygwin の dvipdfmx が rungs の呼び出しに失敗する → /usr/share/texmf-dist/dvipdfmx/dvipdfmx.cfg を修正する {#oe289452}

TeX Live/Cygwin の [dvipdfmx](/dvipdfmx/) がうまく動作しない場合は
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

- [dvipdfmx fails to call rungs](https://cygwin.com/ml/cygwin/2013-01/msg00366.html)
    - [Re: dvipdfmx fails to call rungs](https://cygwin.com/ml/cygwin/2013-01/msg00370.html)
- [Cygwin の TeXLive の dvipdfmx が失敗する](https://tsntsumi.hatenadiary.org/entry/20120514/DvipdfmxInTexLiveOnCygwinFailed) → [Cygwin の TeXLive の dvipdfmx が成功した](https://tsntsumi.hatenadiary.org/entry/20120515/DvipdfmxInTeXLiveOnCygwinSucceeded)

### 関連リンク {#bc8cfcc3}

- [Cygwin](https://www.cygwin.com/)
    - [The Cygwin Project mailing list archives](https://cygwin.com/ml/cygwin/)
    - [The cygwin-announce mailing list archives](https://cygwin.com/ml/cygwin-announce/)
    - [The cygwin-apps mailing list archives](https://cygwin.com/ml/cygwin-apps/)
- [Cygwin Ports project](https://sourceware.org/cygwinports/)

#### 動作環境 {#n6af06c2}

- [https://www.cygwin.com/faq.html#faq.what.supported](https://www.cygwin.com/faq.html#faq.what.supported)

#### License {#fe355f24}

GPLv3

- [https://www.cygwin.com/faq.html#faq.what.free](https://www.cygwin.com/faq.html#faq.what.free)
- [https://cygwin.com/licensing.html](https://cygwin.com/licensing.html)

#### ChangeLog {#t7089ab8}

- [https://cygwin.com/git/gitweb.cgi?p=newlib-cygwin.git](https://cygwin.com/git/gitweb.cgi?p=newlib-cygwin.git)
    - [https://cygwin.com/git/gitweb.cgi?p=newlib-cygwin.git;a=shortlog](https://cygwin.com/git/gitweb.cgi?p=newlib-cygwin.git;a=shortlog)
    - [https://cygwin.com/git/gitweb.cgi?p=newlib-cygwin.git;a=log](https://cygwin.com/git/gitweb.cgi?p=newlib-cygwin.git;a=log)
