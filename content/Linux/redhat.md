---
title: "Linux/redhat"
url: "/Linux/redhat/"
date: 2004-09-06T17:06:15Z
pukiwiki: "Linux/redhat"
---

# Linux/redhat

## LinuxでのLaTeX導入(teTeXをRed Hat Linux 9とFedora Core 1に)備忘録 {#w5d02a29}

\[最終更新 2004-09-07\]

このページの初稿は2004年1月ころのRed Hat Linux 9 および Fedora Core 1 における情報がベースです。記述に間違いがあるかもしれません。訂正宜しくお願いします。

### 内容 {#e252d1d2}

### はじめに {#y7a7a0e5}

Red Hat Linux 9 (RHL9) (および Fedora Core 1 (FC1) )での日本語TeX環境設定について。詳しい人は見ても参考になりません。

<strong>重要(1) 本ページは基本的に RHL9 での導入をメモしてありますが，FC1 の場合も基本的な作業，構成は共通です。しかしそもそもの文字コードが異なるという根本的な相違がありますので，次の重要(2)も参考に注意して設定します</strong>

<strong>たとえば本サイトの FAQ掲示板 における Fedora での[検索結果](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/qa/search.pl?Q=Fedora)等をじっくり読むのが参考になります。</strong>

<strong>重要(2) Fedora Core 1では標準の文字コードがUTF8ですが，ここではeucJPに変更した環境での設定があります。通常のインストールではおそらく pxdvi もdvips (日本語対応)も文字化けします。追加設定が必要です。「EUC に変えるなんて逃げだ，敗北だ，絶対 UTF-8 でやる」という将来を見据えた気合いのある方はこのページは見ないでください。なお、Fedora Core 1をeucJPな環境にする方法はGoogleなどでたくさん情報が発見できます。</strong>

### install {#r18a1d45}

#### RHL9標準のTeX {#ubd76e53}

RHL9インストール時にパッケージの選択から導入した場合は teTeX 1.0.x が

```
/usr/share/texmf/
```

以下に入っています。2003年春に teTeX 2.0 シリーズがリリースされて，微妙に変更があったので更新することにしました。基本的にすべて奥村さんのサイトに従えばOK。ですが，奥村さんのサイトの流れは，ちょっと高等なフォントの応用的な扱いにまで言及されているので，とりあえず「英語環境メインで，時々日本語も書きたい。さらに昔の大量の日本語 TeX も引き継ぎたい」という程度の意識で，奥村さんのサイトから必要最低限をピックアップしました。
なので，達人な方はこのページは見ないでください。でも間違いの指摘は大歓迎です。よろしくお願いします。

#### teTeX本体 {#q00cfbad}

以降，TeX 一式は

```
/usr
```

以下にインストールことにします。 これは RHL9 (FC1) のインストール時にデフォルトで入る場所と同じです。違う場所でも path さえ気をつければ問題ないようですが，簡便のため OS 標準と同じ場所にしました。従いまして，以降 /usr/share/texmf/ 以下に展開されることになります。奥村さんのサイトにある説明とは異なるので以降混乱に注意してください。make 時の引数は --prefix=/usr となります。

```
mkdir -p /usr/share/texmf
mkdir -p /usr/local/src
tar xvzf tetex-texmf-2.0.2.tar.gz -C /usr/share/texmf/
tar xvzf tetex-src-2.0.2.tar.gz -C /usr/local/src/
cd /usr/local/src/tetex-src-2.0.2/
./configure --prefix=/usr --disable-multiplatform --without-xdvik   --without-oxdvik
make world
```

make world は make all install と同等とのことです。

```
$ which latex
/usr/bin/latex
$ which dvips
/usr/bin/dvips
```

を確認。 続いて簡単なファイルでテスト。

```
latex hello
dvips -Ppdf hello
ggv hello.ps
```

RHL9(FC1)では gv ではなく ggv が標準のpsビューワだと思います(違うかも)。とりあえずこれで確認できます。

#### pTeX，pLaTeX2e {#e85095ce}

文字コード EUC を想定。 Shift JIS の場合は ./configure sjis だそうです。

```
tar xvzf ptex-texmf-2.1.tar.gz -C /usr/share/texmf/
mktexlsr
tar xvzf ptex-src-3.1.2.tar.gz -C /usr/local/src/tetex-src-2.0.2/texk/web2c/
cd /usr/local/src/tetex-src-2.0.2/texk/web2c/ptex-3.1.2
./configure euc
make
make install
mktexlsr
```

#### dvips(k) {#x65cd1f4}

```
tar xvzf dvipsk-jpatch-p1.6.tar.gz 
-C /usr/local/src/tetex-src-2.0.2/texk/dvipsk/
cd /usr/local/src/tetex-src-2.0.2/texk/dvipsk/
patch -p1 <dvipsk-5.92b-p1.6.patch
patch -p1 <udvips-5.94a-p1.6.patch
./configure --prefix=/usr --disable-multiplatform
make
make install
cd /usr/share/texmf/dvips/pstricks/
patch </usr/local/src/tetex-src-2.0.2/texk/dvipsk/PSTricks.patch 
```

dvips(k) を修正。 dvips(k)で日本語を使うために。

```
vi /usr/share/texmf/dvips/config/kanji.map
```

以下を書き込みます。

```
rml             Ryumin-Light-H
rmlv            Ryumin-Light-V
gbm             GothicBBB-Medium-H
gbmv            GothicBBB-Medium-V
ryumin-l        Ryumin-Light-H
ryumin-l-v      Ryumin-Light-V
gtbbb-m         GothicBBB-Medium-H
gtbbb-m-v       GothicBBB-Medium-V
futomin-b       FutoMinA101-Bold-H
futomin-b-v     FutoMinA101-Bold-V
futogo-b        FutoGoB101-Bold-H
futogo-b-v      FutoGoB101-Bold-V
jun101-l        Jun101-Light-H
jun101-l-v      Jun101-Light-V
unimin          Ryumin-Light-UniJIS-UCS2-H
unigoth         GothicBBB-Medium-UniJIS-UCS2-H
```

さらに

```
vi /usr/share/texmf/dvips/config/config.ps
```

として，以下変更。

```
% This shows how to add your own map file.
% Remove the comment and adjust the name:
% p +myfonts.map
p +kanji.map % これを追加
```

#### Fedora Core 1でのVFlib追加 {#kcc6cc49}

FC1では「著作と出版」をすべて選んでも日本語 VFlib 関係が入らないので pxdvi 等で日本語が表示できません。これを回避する一つの方法は，例えば fedora.redhat.comのDownload ServerからVFlib2-VFjfm-2.25.6-19.i386.rpmとVFlib2-conf-ja-2.25.6-19.i386.rpmを取ってきてインストールしておくことです。。
そして，/usr/share/VFlib/2.25.6/vfontcap を

```
min:\
:fc=r-kochi-mincho:
# :fc=default-ttf:
goth:\
:fc=r-kochi-gothic:
# :fc=gothic-ttf:
```

というように変更します。そして xfs(かX) を再起動。これで次の日本語テストへ。

#### pLaTeXの動作確認 {#ld76ada5}

日本語の TeX がうまくできるか確認するため，先ほどの簡単なファイルに日本語を加え， \documentclass{jarticle} として。

```
platex hello
dvips -Ppdf hello
ggv hello.ps 
```

うまく表示されればOKです。エラーが出る場合は

```
pdvips hello
```

も試してみてください。xdviについてもredhat9やfedora coreでは

```
pxdvi hoge
```

とするとうまく動作するかもしれません。このあたり、現役ユーザの方の加筆、修正をお願いします。

奥村さんの新ドキュメントクラス群

まずは，jis フォントメトリック一式を入れる。

```
tar xvzf jis.tar.gz
mv jis/tfm/ptex/* /usr/share/texmf/fonts/tfm/ptex/
mv jis/vf/* /usr/share/texmf/fonts/vf/ptex/
```

続いて morisawa 関連の導入。 新ドキュメントクラス に morisawa.sty という感じで入ってる。

```
tar xvzf morisawa.tar.gz
mv morisawa/tfm/dvips/* /usr/share/texmf/fonts/tfm/ptex/
mv morisawa/tfm/ptex/* /usr/share/texmf/fonts/tfm/ptex/
mv morisawa/vf/* /usr/share/texmf/fonts/vf/ptex/
```

日本語 TeX での新標準(?)，奥村さんの新ドキュメントクラスをインストール。

```
cd /usr/share/texmf/ptex/platex
mkdir js
cd js
unzip jsclasses.zip
mktexlsr
```

#### Ghostscript (7.0.x) {#y74bbf3d}

RHL9 は標準で Ghostscript 7.0.5 が，FC1 では Ghostscript 7.0.7 が入ってきます。とりあえずこれを使うこととして，いくつか追加修正を行う必要があります。詳しくは奥村さんのページ:で。

#### dvipdfmx {#y5eaf604}

dvipdfm (土村さんのミラー) および，CJK 版 dvipdfmx を落としてきて，

```
tar xvzf dvipdfmx-20030813.tar.gz -C /usr/local/src/tetex-src-2.0.2/texk/
cd /usr/local/src/tetex-src-2.0.2/texk/dvipdfmx-20030813
./configure --prefix=/usr --with-kpathsea=/usr
make
make install
mktexlsr
```

<del>そして，設定ファイルを修正。具体的には</del>

```
vi /usr/share/texmf/dvipdfm/config/dvipdfmx.cfg 
```

<del>で以下の変更。</del>

```
f cmr.map
f psbase14.map
f lw35urw.map
```

<del>はコメントアウトして，次を付加。</del>

```
f dvipdfm.map
```

上記修正はデフォルトで対応されたとのことです。

dvipdfm.map は /usr/share/texmf/dvips/config の中にあり，dvipdfm_dl14.map または dvipdfm_ndl14.map へのシンボリックリンクになっている。違いはフォントをダウンロードするかしないかだそうです。 また，GNU Ghostscript 7.07 on Linux のページを参考に

```
cd /usr/share/texmf/dvipdfm
ln -s /usr/local/share/ghostscript/Resource .
```

とシンボリックリンク。

#### mendexk のインストール {#vbb4fd8d}

```
tar xvzf mendexk2.5.tar.gz -C /usr/local/src/tetex-src-2.0.2/texk/
cd /usr/local/src/tetex-src-2.0.2/texk/mendexk2.5/
```

Makefile で以下の部分を修正。

```
DISTDIR = /usr/local/teTeX/bin
# for kpathsea-3.*
CFLAGS = -O -DKPATHSEA -DKPATHSEA3
PROGLINK = $(kpathsea_link) $(OBJS) $(kpathsea_3)
# for no kpathsea
#CFLAGS = -O
#PROGLINK = $(CC) $(OBJS) -o $(PROGRAM)
```

```
make
make install
```

#### その他 {#c187b72b}

- mktexlsr
    忘れがち。なにかトラブったらまずこれを疑う。

- 漢字コード
    Windows で作ったファイルなどは文字コードに注意。もう最近は全部 euc-jp-unix にしてしまっています。 Emacs では

    ```
    M x set-buffer-filing-code
    ```

    or

    ```
    C x RET f
    ```

    の後にコードを入力すればOK。あるいは nkf か qkc といったコマンドを使うと便利です。

- explanクラス
    乙部さんの explan クラスを使う際は，上でも書いたが漢字コードに注意。普通に解凍すると SJIS(な上に Windows 改行)なので使えません(?)。解凍したディレクトリのファイルを nkf か qkc で EUC(orJIS)+UNIX 改行に変換。オリジナルの SJIS が不要なら以下のシェルスクリプトでも使うと良いかも。

```
#!/bin/sh
for i * ; do
qkc -e -u < * >
done
```

### 関連サイト {#q4b6cd94}

内容整理中。どなたか編集してください。

### 最後に {#wc183d07}

以下の記述は本ページが以前別の場所にあった時に、記述されたものです。現在本ページは奥村さんのページにマージしましたが、奥村さんに敬意を表して残しておきます。

> 三重<del>松阪</del>大学の奥村晴彦さんは日本のTeX関連ではきわめて有名で、名著「LaTeX美文書作成入門」の著者。[質問掲示板](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/qa/)は超にぎわっております。質問者で「奥村先生」と「先生」付けで呼ぶ人が多いですが、奥村さんは私の先生ではないのであえて「さん」付けにしました。気持ちとしては「大先生」と呼びたいところですが。
