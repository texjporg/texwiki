---
title: "MathTime"
url: "/MathTime/"
date: 2004-09-22T23:16:14Z
pukiwiki: "MathTime"
---

# MathTime

## MathTime フォント {#c9d10eae}

\[FIXME\] 現状を反映していないかもしれません。

### MathTime とは？ {#v8d5765f}

[MathTime](http://www.YandY.com/mathtime.htm)
（\mathit{MathT\kern-.05em{\i}me}）は Times ベースの数式用フォントで，商品です。
[Y&amp;Y Inc.](http://www.YandY.com/)
からオンライン購入できます。
MathTime Complete (MathTime 1.1 + MathTime Plus) が225ドルです。

\[2004-09-30追記\] Y&amp;Yのサイトはあるものの、実際に営業活動をしていないようです。
MathTimeの後継MathTime Professionalが [http://www.pctex.com/](http://www.pctex.com/) から出ています。
以下にある他のベンダについても古い情報ですのでご注意ください。

\[2003年追記\] ↓現在Y&amp;Yは持ち直しています。
CTAN: macros/latex/contrib/psnfssx/mathtimepro は2003年3月に新版が出ています。

\[2002-10-18 追記\] [Y&amp;Y Inc.](http://www.YandY.com/)
は技術者が退社してしまったようで，今後が心配です。

```
From: ljw1004@cus.cam.ac.uk (Lucian Wischik)
Subject: YandY, we miss you so!
Newsgroups: comp.text.tex
Date: 30 Sep 2002 12:04:56 GMT
Organization: University of Cambridge, England

As mentioned here, YandY seem to have lost their technical support person.
Following an earlier thread, I've had a few people asking me for copies of
the updates that Y&Y sent me towards the end. Therefore I've put these
updates on a web page. (But I'm hoping that Louis Vosloo from YandY tech
support will email me, tell me that the updates are on their own company
servers, and ask me to remove my copies...)
http://www.wischik.com/lu/programmer/latex-stuff.html

--
Lucian Wischik, Queens' College, Cambridge CB3 9ET. www.wischik.com/lu
```

Times ベースの数式フォントとしては，ほかに
[MicroPress](http://www.micropress-inc.com/)
の [TM Math](http://www.micropress-inc.com/fonts/tmmath/tmmain.htm)
($150.00 + 送料 $20.00) や，フリーのものでは [TX フォント](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/txfonts.html)
や，LaTeX の PSNFSS パッケージに含まれている mathptmx などがあります。

- [数式フォントの比較](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/mathtime/comparison.html)

ご覧のように MathTime は TX Fonts よりゆったりとした組み方になるので，TX Fonts で組まれたものを MathTime
で組みなおそうとすると数式が行長を超えたりページ数が増えたりすることがあります。

### オンライン購入とインストール {#ff4fc874}

オンライン購入してみました。
Linux 上の Netscape 6.1J を使いました。
クレジットカード番号などを入れてダウンロードボタンを押します。
ところが，ダウンロードファイル名に非常に長いチェック用文字列が含まれていて，\[OK\] ボタンまで表示されません。
やや焦りましたが，まず \[詳細\] をクリックしてその窓の \[OK\]
をクリックすると，次はエンターキーだけで 1780236バイトの mathtime.zip
がダウンロードできました。
念のため Print Invoice で領収書を表示し，印刷しておきます。

mathtime.zip の中身は次の通りでした。

```
$ unzip -v mathtime.zip
Archive:  /home/okumura/mathtime.zip
Length   Method    Size  Ratio   Date   Time   CRC-32    Name
--------  ------  ------- -----   ----   ----   ------    ----
715511  Defl:N   705921   1%  05-28-97 14:22  375a64d7  MATHPLUS.ZIP
642526  Defl:N   631513   2%  05-28-97 14:26  ece4dfea  MATHTM11.ZIP
354329  Defl:N   265575  25%  05-30-97 08:30  a0192585  TIMEMANU.PDF
250809  Defl:N   176805  30%  05-30-97 08:26  bb1a02e3  PLUSMANU.PDF
--------          -------  ---                            -------
1963175          1779814   9%                            4 files
```

まず展開して PDF の説明書をざっと読みます。

ZIP ファイルは中身も大文字ですので，unzip に -L フラグを付けて小文字で展開します。

MATHTM11.ZIP を展開し，たとえば次のようにします。

```
mkdir -p /usr/local/share/texmf/fonts/type1/yandy/mathtime/
mv *.pfb /usr/local/share/texmf/fonts/type1/yandy/mathtime/
```

MATHPLUS.ZIP を展開し，たとえば次のようにします。

```
mkdir -p /usr/local/share/texmf/fonts/type1/yandy/mathplus/
mv *.pfb /usr/local/share/texmf/fonts/type1/yandy/mathplus/
```

これで teTeX ベースのシステムなら完了です。

teTeX ベースのシステムでないなら，他の設定もしなければなりません。
まずはスタイルファイルです。
いずれかの ZIP ファイルを展開してできる psnfss ディレクトリに LaTeX2e
用の材料が収められています（[CTAN](/CTAN/) の
[macros/latex/contrib/psnfssx/mathtime/](http://www.ring.gr.jp/pub/text/CTAN/macros/latex/contrib/psnfssx/mathtime/)
にも同じものが入っています）。
ここで次のようにします。

```
latex mathtime.ins
```

出てくる \*.tex，\*.sty，\*.fd
ファイルを，たとえば /usr/local/share/texmf/tex/latex/mathtime
ディレクトリに移します。

同様に，ZIP ファイルに含まれる \*.tfm，\*.vf
ファイルを次のようなディレクトリを作ってそれぞれ入れます。

```
/usr/local/share/texmf/fonts/tfm/yandy/mathtime
/usr/local/share/texmf/fonts/tfm/yandy/mathplus
/usr/local/share/texmf/fonts/vf/yandy/mathtime
/usr/local/share/texmf/fonts/vf/yandy/mathplus
```

次のような mt-yy.map を作ります。

```
mtex MTEX <mtex.pfb
mtsy MTSY <mtsy.pfb
rmtmi RMTMI <rmtmi.pfb
```

また，次のような mt-plus.map を作ります。

```
mtexb MTEXB <mtexb.pfb
mtexh MTEXH <mtexh.pfb
mtgu MTGU <mtgu.pfb
mtgub MTGUB <mtgub.pfb
mtls MTLS <mtls.pfb
mtlsb MTLSB <mtlsb.pfb
mtms MTMS <mtms.pfb
mtmsb MTMSB <mtmsb.pfb
mtsyb MTSYB <mtsyb.pfb
mtsyh MTSYH <mtsyh.pfb
mtsyn MTSYN <mtsyn.pfb
rmtmib RMTMIB <rmtmib.pfb
rmtmih RMTMIH <rmtmih.pfb
rmtmub RMTMUB <rmtmub.pfb
rmtmuh RMTMUH <rmtmuh.pfb
```

これらは /usr/local/share/texmf/dvips/config に入れておきます。

/usr/local/share/texmf/dvips/config/config.ps に

```
p +mt-belleek.map
```

あるいは

```
p +mathtime-blk.map
```

のような行があれば消してください。
これらは Belleek フォントという MathTime（Plus
ではない基本3フォントだけ）クローンのフリーのフォントを使うためのマップファイルです。
そして，その代わりに

```
p +mt-yy.map
p +mt-plus.map
```

を加えてください。

これだけで問題なく使えると思いますが，角藤さんの Windows 版 pTeX
配布で gsftopk ではなく ps2pk を使ってビットマップフォント生成をしたい場合は，
ZIP ファイルの afm ディレクトリに含まれる \*.afm
ファイルをたとえば次のようなディレクトリを作って入れます。

```
/usr/local/share/texmf/fonts/afm/yandy/mathtime
/usr/local/share/texmf/fonts/afm/yandy/mathplus
```

そして，/usr/local/share/texmf/dvips/ps2pk/pspksupp.map
に次のように追加します。

```
%
% MathTime
%
mtex       mtex.pfb       0      1
mtsy       mtsy.pfb       0      1
rmtmi      rmtmi.pfb      0      1
%
% MathTime Plus
%
mtexb      mtexb.pfb      0      1
mtexh      mtexh.pfb      0      1
mtgu       mtgu.pfb       0      1
mtgub      mtgub.pfb      0      1
mtls       mtls.pfb       0      1
mtlsb      mtlsb.pfb      0      1
mtms       mtms.pfb       0      1
mtmsb      mtmsb.pfb      0      1
mtsyb      mtsyb.pfb      0      1
mtsyh      mtsyh.pfb      0      1
mtsyn      mtsyn.pfb      0      1
rmtmib     rmtmib.pfb     0      1
rmtmih     rmtmih.pfb     0      1
rmtmub     rmtmub.pfb     0      1
rmtmuh     rmtmuh.pfb     0      1
```

### 使い方 {#afcc2c31}

古い7ビット版の TeX でも使える方法：

```
\documentclass{jsarticle}           % またはjarticleなど
\usepackage{amsmath,amsfonts}       % AMS-LaTeX, AMSFonts
\usepackage[noTS1,mtbold]{mathtime} % ここで MathTime を読み込む
\usepackage[scaled]{helvet}         % Helveticaをやや小さく
\renewcommand{\ttdefault}{cmtt}     % cmttを使うなら
\usepackage{bm}                     % boldmath
\begin{document}
……
\end{document}
```

しかしこれでは注釈で用いるダガー（†）印などが文字化けを起こします。
次のようにT1エンコーディングにすれば解決できます。

```
\documentclass{jsarticle}           % またはjarticleなど
\usepackage[T1]{fontenc}            % T1エンコーディングにする
\usepackage{amsmath,amsfonts}       % AMS-LaTeX, AMSFonts
\usepackage[mtbold]{mathtime}       % ここで MathTime を読み込む
\usepackage[scaled]{helvet}         % Helveticaをやや小さく
\usepackage{bm}                     % boldmath
\begin{document}
……
\end{document}
```

T1エンコーディングの場合，Computer Modernフォントを使うとそのままではビットマップになります。
cm-superを入れるか，Latin Modernフォント・パッケージを入れる，aeパッケージを使う等の手が必要です。

オプションの意味などは，mathtime.dtx を LaTeX
で処理して得られるドキュメントに詳しく書かれています。

### 和文ゴシックが出ない？ {#f8b01a16}

このままでは jarticle 等で \section などの和文がゴシック体になりません。
jsarticle 等では大丈夫です。

#### 理由 {#ea0721c5}

まず，和文のゴシック体は，明朝体の太字（太明朝体）とはまったく違うものです。

jsarticle 等では \section
等のコマンドを「欧文はサンセリフ，和文はゴシック」と定義しています。
ところが，jarticle 等では「欧文も和文も太字」となっています。
つまり，欧文はローマン体の太字，和文は明朝体の太字になるはずです。

しかし，pTeX では明朝体の太字を太明朝体ではなくゴシック体で代用しています。
詳しく言えば，太字の太い方（bx）をゴシック体で代用し，太字の細い方（b）を標準の明朝体のままにしています。

LaTeX の標準では太字は太い方（bx）を使うようになっているので，これで jarticle と jsarticle
で同じ振舞いをするように見えます。
ところが，mathtime では Times を使う関係上，太字は細い方（b）を使うので，辻褄が合わなくなります。

#### 辻褄を合わせる方法その1 {#n3487987}

jarticle 等を fix する。
または jsarticle 等を使う。
本文でゴシック体を使うには，明朝体の太字がゴシック体で代用されることを仮定せず，\gtfamily
または \textgt{...}（または jsarticle 等なら \textsf{...} や \sffamily）を使う。

#### 辻褄を合わせる方法その2 {#d089c836}

pTeX で細い太字（b）もゴシックで代用するようにする：

```
\DeclareFontShape{JY1}{mc}{b}{n}{ssub*gt/m/n}{}
\DeclareFontShape{JT1}{mc}{b}{n}{ssub*gt/m/n}{}
```

これなら jarticle 等もそのままで使えます。
明朝とゴシックの2書体の場合はこれで辻褄が合うでしょうが，多書体化を考えると，やはりまともな実装を最初からしたほうがいいように思います。
