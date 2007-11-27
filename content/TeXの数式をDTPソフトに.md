---
title: "TeXの数式をDTPソフトに"
url: "/TeXの数式をDTPソフトに/"
date: 2004-12-26T14:41:26Z
pukiwiki: "TeXの数式をDTPソフトに"
---

# TeXの数式をDTPソフトに

<!-- -+- -- -1- -- -+- -- -2- -- -+- -- -3- -- -+- -- -4- -- -+- -- -5- -- -+- -- -6- -- -+- -- -7- -- -+-  -->

<!-- http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/math.html -->

## 初めに {#g4e20e7a}

Illustrator できれいな数式を作るのって，たいへんですよね。 

TeX なら簡単にきれいな数式ができます。 

このページはまだ作り始めたばかりです。ご要望をお寄せください。 

## 数式用のフォント {#td464375}

TeX で無指定で使われるフォントは，本文は Computer Modern Roman 10 pt (cmr10)，
数式は Computer Modern Math Italic 10 pt (cmmi10) です。
これらは（PostScript アウトラインデータ形式の） OpenType フォント，TrueType
フォント，Type 1 フォントのそれぞれの形式で配布されていますので，
これらを他のアプリケーションで使うことができます。

Computer Modern フォントの OpenType 形式が
[CTAN:fonts/cm/ps-type1/bakoma/otf/](https://mirror.ctan.org/fonts/cm/ps-type1/bakoma/otf/) から，Latin Modern フォントの
OpenType 形式が [CTAN:fonts/lm/fonts/opentype/public/lm/](https://mirror.ctan.org/fonts/lm/fonts/opentype/public/lm/) から入手できます。

TrueType 形式の Computer Modern フォントの一つである BaKoMa フォントは，
例えば [CTAN:fonts/cm/ps-type1/bakoma/ttf/](https://mirror.ctan.org/fonts/cm/ps-type1/bakoma/ttf/)
や[bakoma.lzh](ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/font/bakoma/bakoma.lzh) から入手
できます。Type 1 フォント形式の一つである PFB 形式のフォントは TeX に標準で
入っています。$TEXMF/fonts/type1/{bluesky,bakoma}/\*.pfb を検索してください。 

## 数式を EPS にする {#hf9c85f7}

複雑な数式は EPS などの形式でインポートします。 

### お手軽なツールを使う方法 (Windows) {#oe0e5138}

Windows 環境の場合，TeX の数式をクリック一つで EPS 形式の画像に変換する
ツール [TeX2img](http://island.geocities.jp/loveinequality/) があります。
コマンドラインを使いたくない人は，このツールで EPS ファイルを
生成し，InDesign や Illustrator に「配置」するのがお手軽でしょう。

### コマンドラインを使う方法 {#ma3ea888}

例えば次の数式を作ってみましょう。 

<img src="http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/testeq.jpg" alt="LaTeX で作った数式">

お好きなテキストエディタに次のように打ち込んでください
（Linux でも Mac OS X でも Microsoft Windows でも何でもかまいません）。 

***

```
\documentclass{article}
\pagestyle{empty}
\begin{document}
\[ \int_{0}^{\infty} \frac{\sin x}{\sqrt{x}} dx = \sqrt{\frac{\pi}{2}} \]
\end{document}
```

***

これを例えば “testeq.tex” というファイル名で保存します。 

LaTeX がインストールしてあるとして，次のようにコマンドを打ちます
（あるいはマウスでこれに相当する操作をします）。 

```
$ latex testeq.tex
$ dvips -E -Ppdf testeq.dvi -o testeq.eps
```

これで[testeq.eps](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/testeq.eps) という
EPS ファイルができます。ここで “-E” は EPS 形式で保存するオプションです。
これを忘れると EPS でない PostScript 形式になってしまいます。 

## InDesign に配置 {#n2deff3f}

上で作った EPS ファイルをそのまま InDesign 2.0 に「配置」すると，
次のようになります。 

<img src="http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/indesign.jpg" alt="InDesign 2.0 に配置したところ">

上の例では，LaTeX のデフォルトのフォント (Computer Modern) を使いました。 

「[数式フォントの比較](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/mathtime/comparison.html)」
のページに，LaTeX で簡単に使えるいくつかの数式フォントを比較しています。 

## Illustrator に配置 1 {#q2427dd4}

【追記】
Illustrator CS の環境設定で
「リンクされたEPSに低解像度の表示用画像（プレビュー）を使用」のチェックを
外してリンク配置すれば，EPS でも問題なく文字が表示されました。PDF でも
リンク配置なら問題ありません。Mac OS X のプレビューを使えば
PDF を範囲指定してクロップできます。

<table>
<tbody>
<tr><td><img src="http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/illustrator.jpg" alt="箱しか見えない EPS 画像"></td><td><img src="http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/illustrator2.jpg" alt="Illustrator から保存したプレビュー附き EPS 画像"></td></tr>
<tr><td>Illustrator 10.0.3 に配置したところ。箱しか見えない。</td><td style="text-align:center">Illustrator から保存した EPS。</td></tr>
</tbody>
</table>

EPS を作るところまでは上と同じです。
ただ，この EPS をそのまま Illustrator に ［ファイル］→［配置...］
（「配置」ダイアログボックスの「リンク」チェックボックスをオフにした状態で）
すると，「所在不明のフォントは、初期設定のフォントで代用されます。」という
メッセージが出て，文字化けします。 

別の方法も後で書きますが，簡単かつ確実な方法は，「配置」ダイアログボックスの
「リンク」チェックボックスをオンにすることです。dvips の出力する EPS には
プレビュー画像が附いていませんので，配置してもただの箱に見えます。
これでも PostScript デバイス（PS プリンタや Distiller \[Adobe PDF\]）に
出力すれば，きれいに出ます。また，Illustrator から EPS で保存しても大丈夫です
（保存時に「配置した画像を含む」チェックボックスをオンにします）。 

EPS にプレビューを付けておけば，
配置したときにプレビューを見ることができますので，
便利です。GSview の ［Edit］→［Add EPS Preview］ でプレビューが付けられます。 

この方法では Illustrator から直接 PDF で保存すると文字化けしますので，PDF 化
するならいったん EPS で保存してから Distiller で処理してください。 

## Illustrator に配置 2 (Microsoft Windows) {#wfad6f6b}

箱じゃ不安，あるいは Illustrator の中で数式を編集したい，という場合には
次のようにします。ただし，Illustrator のフォントリストに
たくさんのフォントが追加されてしまいますのでご注意ください。 

あらかじめ $TEXMF\fonts\type1\ フォルダ
（例えば C:\usr\local\W32TeX\share\texmf\fonts\type1\）を
フォルダごと "C:\Program Files\Common Files\Adobe\Fonts\\" 以下のフォルダに
コピーまたはリンクしておきます
（Thanks: 長さん [qa:20350](https://okumuralab.org/~okumura/texfaq/qa/20350.html)，角藤さん [qa:20353](https://okumuralab.org/~okumura/texfaq/qa/20353.html)）。こうすると，TeX で
使う多数の Type 1 フォントを Windows に登録せずに Adobe 製品で
使うことができます。Illustrator から直接 PDF で保存しても大丈夫です。 

times，mathpazo，txfonts，pxfonts 等のパッケージを使った場合は，dvips に
PostScript Level 2 での基本35書体をダウンロードするオプションを付け
（“-Ppdf” の代わりに teTeX なら“-Pdownload35”，W32TeX なら “-Pdl”），
さらに Ghostscript 附属の Type 1 (PFB) フォントをやはり Illustrator から
見える場所にコピーしておけばいいのではないかと思います（テストしていません）。

↑訂正1： txfonts の場合は config.ps に “p +txr2.map” という行を書くのでした
（←訂正： W32TeX では “-Pdl” オプションで
同じことになるのでした。teTeX では “-Pdownload35” です）。 

↑訂正2： Ghostscript のフォントはすでに W32TeX にも入っていました
（teTeX 同様）。コピーは不要です。 

## Illustrator に配置 3 (Mac OS X) {#z9ef5010}

（この項については内山さんからご教示をいただきました。）

Mac OS でも，TeX からは UNIX や Windows と同じ Type 1 (PFB) フォントが
使えますが，一般のアプリケーションからは使えません。 [CTAN](/CTAN/) の
[fonts/cm/ps-type1/bluesky/](https://mirror.ctan.org/fonts/cm/ps-type1/bluesky/) にある
cmps-oztex.hqx または cmps-textures.hqx をインストールしてお使いください
（フォントについては両者の中身は同じようです）。スクリーンフォントも必要です。

インストールの場所は，Adobe 製品だけから使うなら
/Library/"Application Support"/Adobe/Fonts/ 以下ですが，Mac OS X では
Mxdvi も同じフォントを使うことを考えれば，次の場所のいずれかに
入れるのがいいかもしれません。Mac OS X では次の順にフォントを探してくれます
（→ 「[Mac OS X 10: フォントの保存場所とその目的](http://docs.info.apple.com/jarticle.html?artnum=106417)」）。

1. /Library/"Application Support"// 以下（特定のアプリケーション用）
    - /Library/"Application Support"/Adobe/Fonts// 以下
        （Adobe アプリケーション用）
    - &#x7e;/Library/"Application Support"/Adobe/Fonts//
        (= /Users/$USER/Library/"Application Support"/Adobe/Fonts//) 以下
        （Adobe アプリケーションの User ドメイン用）

1. &#x7e;/Library/Fonts// (= /Users/$USER/Library/Fonts//) 以下
    （User ドメイン用。自分だけで使うなら）

1. /Library/Fonts// 以下（Local ドメイン用。ローカルユーザ全員で使うなら）
1. /Network/Library/Fonts// 以下（Network ドメイン用）
1. /System/Library/Fonts/ （System ドメイン用。通常はここにはさわらない）
1. /"System Folder"/Fonts/
    （Classic ドメイン用。Classic 環境用だが Mac OS X 10.4 \[PowerPC\] でも使える）

私は &#x7e;/Library/Fonts/ の中に一つフォルダを作って，
その中にまとめて入れました（Mac OS X 10.2 以降で可能）。

ただ，Mac 版 Illustrator 10.0.3 では PDF で保存すると一部の文字が化けます。
“\\\[ \Gamma - \gamma \\\]” で実験してみてください
（“$\Gamma$” や “$-$” は化けやすいことで有名）。Windows 版なら大丈夫なのに
残念です。Mac 版でも，Illustrator から EPS で保存したものは大丈夫です。PDF に
したければ EPS で保存して Distiller で変換すればいいでしょう。 

念のため TrueType 形式の Computer Modern フォント（BaKoMa フォント：
[bakoma.lzh](ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/font/bakoma/bakoma.lzh)）
でも試してみました。「テキストエディット」では使えましたが，Illustrator では
フォントリストには出るけれども表示できません。 

## WMF/EMF に変換する方法 {#b65fa32a}

この方法は Microsoft Windows でしか使えません。また，あらかじめ Windows の
システムに BaKoMa の Computer Modern TrueType フォントなどを
インストールしておく必要があります。 

dviout （2002年10月9日以降のもの）では次のようにして EMF 形式で
クリップボードにコピーできます。まず ［Display］→［Region］→［On］
（ショートカットは “Ctrl + \[”）にして，Shift を押しながら左クリックで
矩形領域の左上隅，やはり Shift を押しながら右クリックで右下隅を指定します。
これで ［File］→［Save as image］→［EMF in clipboard］（ショートカット
は “Alt + (F, S, E)”）すると，クリップボードにコピーされます。これで
Illustrator （EMF 形式を理解するソフトなら何でも）に貼り付ければ OK です。

また，[pstoedit](http://www.pstoedit.net/pstoedit/) を GSview と
同じところ（標準では "C:\Program Files\Ghostgum\pstoedit\\"）にインストールして
おけば，GSview から ［Edit］→［Convert to vector format...］ で
WMF や EMF に変換できます。 

## Ghostscript でアウトライン化する方法 {#bf206395}

Ghostscript の epswrite デバイスを使って
アウトラインを取る方法もあります（→ [qa:20472](https://okumuralab.org/~okumura/texfaq/qa/20472.html)）。

まず，次のように充分大きいサイズで式を作ります
（[新ドキュメントクラス](http://oku.edu.mie-u.ac.jp/~okumura/jsclasses/)なら
簡単にできます）。
文字が小さいとアウトラインではなくビットマップ化されてしまいます。

***

```
\documentclass[30pt]{jsarticle}
\pagestyle{empty}
\begin{document}
\[ \int_{0}^{\infty} \frac{\sin x}{\sqrt{x}} dx = \sqrt{\frac{\pi}{2}} \]
\end{document}
```

***

次のコマンドを順に打ち込みます（Unix-like OS の場合）。 

```
$ platex testeq.tex
$ dvips -E -Ppdf testeq.dvi -o testeq.eps
$ eps2eps testeq.eps testeq2.eps
```

この eps2eps は Ghostscript で epswrite デバイスを使う
シェルスクリプトです。Microsoft Windows ならおそらく次に相当します
（さらに正確には “-dDEVICEWIDTH=250000 -dDEVICEHEIGHT=250000” という
オプションも含んでいます）。

```
>gswin32c -dSAFER -q -dBATCH -dNOPAUSE -sDEVICE=epswrite -sOutputFile=testeq2.eps testeq.eps
```

これでアウトラインが取れます。日本語も大丈夫です
（Windows なら dvips の代わりに dvipsk を使います）。
できた testeq2.eps の &#x25;&#x25;BoundingBox: 行がなぜか変なので，
元の testeq.eps の &#x25;&#x25;BoundingBox: 行と置き換えます。
これで testeq2.eps はフォントを含まないアウトラインだけの
EPS になり，Mac でも Windows でも Illustrator などに安全に配置できます。 

新ドキュメントクラスを使う方法以外に，\scalebox で
数式を拡大する方法もあります。この場合には
次の例のように数式を $\displaystyle ...$ で書くといいでしょう。 

***

```
\documentclass{article}
\pagestyle{empty}
\usepackage[dvips]{graphicx}
\begin{document}
\scalebox{3}{$\displaystyle
  \int_0^\infty \frac{\sin x}{\sqrt{x}} dx = \sqrt{\frac{\pi}{2}}$}
\end{document}
```

***

別解として，dvips に “-x 3000” のようなオプションを
与えれば3倍に拡大されます。 

［2006年7月3日 追記］ 次のようにすれば，充分大きいサイズで式を作る必要も
なく，&#x25;&#x25;BoundingBox: 行も変にならないようです（→ [qa:43337](https://okumuralab.org/~okumura/texfaq/qa/43337.html)）。

```
 >gswin32c -dSAFER -q -dBATCH -dNOPAUSE -sDEVICE=epswrite -dEPSCrop -r9600 -sOutputFile=testeq2.eps testeq.eps
```

端が欠ける場合は “-dEPSCrop” を外せばいいようです。

## 他の方法 {#b00fa762}

### Equation Magic (Lite) {#e1e0d1fe}

TeX ではありませんが同様な機能を持つ数式エディタとして
[Equation Magic Lite](http://www.micropress-inc.com/eqmlite.htm) があります。
これは [Equation Magic Pro](http://www.micropress-inc.com/eqmpro/) の
機能制限版で，無償で配布されています。これは Microsoft Office Word などの
OLE 対応ソフトからは ［挿入］→［オブジェクト］→［Equation Magic］ で
編集することができます。 <!-- 全角の［］ですか……。 -->
Illustrator にはクリップボード経由で文字として貼り付けられます。Microsoft
Windows に “mv” で始まる名前の TrueType フォントが9個インストールされ，
それが使われますので，Illustrator の中から簡単な修正ができます。
これらのフォントは Computer Modern とそっくりです。 

### OLETeX {#bf856a64}

Microsoft Office Word/PowerPoint に Microsoft Windows の OLE 機能を使って
数式を貼り込むものとして，OLETeX があります。
これについては 市川さん，坂井さん の解説をご覧ください。 

## リンク {#qed253c5}

- Computer Modern フォントの OpenType フォント形式ファイル：
    [CTAN:fonts/cm/ps-type1/bakoma/otf/](https://mirror.ctan.org/fonts/cm/ps-type1/bakoma/otf/)

- Latin Modern フォントの OpenType フォント形式ファイル：
    [CTAN:fonts/lm/fonts/opentype/public/lm/](https://mirror.ctan.org/fonts/lm/fonts/opentype/public/lm/)

- [Applied Symbols](http://www.appliedsymbols.com/cm/) （Computer Modern フォントの OpenType 版［商品］）

## オマケ {#u03ab148}

- [tex.eps](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/tex.eps)
    （Illustrator でアウトラインを取った TeX のロゴです。何かに使えるかな？）
