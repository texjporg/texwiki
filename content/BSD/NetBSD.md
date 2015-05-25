---
title: "BSD/NetBSD"
url: "/BSD/NetBSD/"
date: 2013-04-24T02:53:45Z
pukiwiki: "BSD/NetBSD"
---

# BSD/NetBSD

[BSD](/BSD/) > NetBSD

## [NetBSD](http://www.netbsd.org/) {#qf29df7f}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## NetBSD とは {#mb5f216a}

NetBSD はオープンソースの Unix 系オペレーティングシステムです．<br>

- [NetBSD](http://www.netbsd.org/)
- [Japan NetBSD Users' Group](http://www.jp.netbsd.org/)

## TeX Live <a id="texlive"></a> {#j32677f5}

### TeX Live 公式パッケージ {#l183b4de}

#### TeX Live のインストール <a id="texliveinstall"></a> {#q5562f42}

- [http://www.tug.org/texlive/quickinstall.html](http://www.tug.org/texlive/quickinstall.html)
- [http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation](http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation)

を参照．<br>

[ミラーサイト](</TeX Live/#tlnet>)から install-tl-unx.tar.gz をダウンロードします．<br>

```
$ wget http://www.ring.gr.jp/pub/text/CTAN/systems/texlive/tlnet/install-tl-unx.tar.gz
```

install-tl-unx.tar.gz を展開します．<br>

```
$ tar xvf install-tl-unx.tar.gz
```

展開したインストーラのディレクトリに移動します．<br>

```
$ cd install-tl*
```

root 権限でインストーラを実行します．<br>
オプションでダウンロードするリポジトリを指定できます．<br>

```
$ sudo ./install-tl --repository http://www.ring.gr.jp/pub/text/CTAN/systems/texlive/tlnet/

...

Actions:
 <I> start installation to hard disk
 <H> help
 <Q> quit

Enter command: I
```

I を入力してインストールを開始します．<br>
サーバーの接続エラーが発生したり，アーカイブ中に予期せぬ EOF があったりした場合はインストールが途中でストップします．<br>
エラーが発生した場合は以下のコマンドで途中から再開できたりできなかったりします．<br>

```
$ sudo ./install-tl --profile installation.profile
ABORTED INSTALLATION FOUND: installation.profile
Do you want to continue with the exact same settings as before (y/N): y
```

再開できない場合は[接続先を変更](</TeX Live/#tlnet>)するかまたは [ISO ファイル](</TeX Live/#iso>)をミラーサイトからダウンロードしてインストールしてください．<br>
インストールが終了したら /usr/local/bin ディレクトリ配下にシンボリックリンクを追加します．<br>

```
$ sudo /usr/local/texlive/????/bin/*/tlmgr path add
```

#### アップデート {#hb652eef}

アップデートは

```
$ sudo tlmgr update --self --all
```

を実行すれば OK です．<br>

ただし，アップデートによってパッケージや設定が変更されて，今まで動いていたものが動かなくなったりすることがあるかもしれません．<br>

- /usr/local/texlive/????/tlpkg/backups

にパッケージのバックアップが保存されます．<br>
アップデートによって動作しなくなった場合は以前のバージョンに戻してください．<br>

#### フォント埋め込みの設定 {#b1f1c8d3}

kanji-config-updmap(-sys) を使用してフォント埋め込みの設定ができます．<br>
IPAexフォントを埋め込む場合は<br>

```
$ sudo kanji-config-updmap-sys ipaex
```

または

```
$ kanji-config-updmap ipaex
```

を実行します．<br>

TeX Live には IPAex フォント，uptex-ipaex.map が収録されています．<br>

```
$ kpsewhich ipaexm.ttf ipaexg.ttf
/usr/local/texlive/????/texmf-dist/fonts/truetype/public/ipaex/ipaexm.ttf
/usr/local/texlive/????/texmf-dist/fonts/truetype/public/ipaex/ipaexg.ttf
$ kpsewhich uptex-ipaex.map
/usr/local/texlive/????/texmf-dist/fonts/map/dvipdfmx/jfontmaps/ipaex/uptex-ipaex.map
```

upLaTeX + dvipdfmx を実行する場合は ptex2pdf が便利です．<br>

```
$ ptex2pdf -u -l -ot '-synctex=1' -od '-f uptex-ipaex.map' hoge.tex
```

### TeX Live/NetBSD {#ke8ac2b3}

- [http://pkgsrc.se/wip/texlive2013](http://pkgsrc.se/wip/texlive2013)
- [compiling whole texlive in pkgsrc](http://www.ki.nu/~makoto/diary/2013/10/27/)
- [TeX (pkgsrc-2014Q1) が動かない](http://www.uconst.org/blog/archives/417)
- [TeX Live 2013 binaries for NetBSD](http://www.babafou.eu.org/texlive-netbsd/)
