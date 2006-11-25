---
title: "TeXの数式をDTPソフトに"
url: "/TeXの数式をDTPソフトに/"
date: 2004-12-26T14:41:26Z
pukiwiki: "TeXの数式をDTPソフトに"
---

# TeXの数式をDTPソフトに

<!-- http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/math.html -->

## はじめに {#g4e20e7a}

Illustrator できれいな数式を作るのって，たいへんですよね。 

TeX なら簡単にきれいな数式ができます。 

このページはまだ作り始めたばかりです。ご要望をお寄せください。 

［追記］ 今なら
Computer Modern フォントや Latin Modern フォントの OpenType 版があります。

## 簡単な数式なら…… {#td464375}

TeX で無指定で使われるフォントは，本文は Computer Modern Roman 10pt (cmr10)，数式は Computer Modern Math Italic 10pt (cmmi10) です。
これらは TrueType や Type 1 形式で配布されていますので，これをインストールすれば他のアプリケーションでも使えます。

TrueType 版の Computer Modern フォントの一つである BaKoMa フォントは，例えば [bakoma.lzh](ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/font/bakoma/bakoma.lzh) で入手できます。 
pfb 形式のフォントは TeX に標準で入っています。 cmr10.pfb，cmmi10.pfb などを検索してください。 

最近では Computer Modern フォントの OpenType 版が
[CTAN:fonts/cm/ps-type1/bakoma/otf/](https://mirror.ctan.org/fonts/cm/ps-type1/bakoma/otf/) から，Latin Modern フォントの
OpenType 版が [CTAN:fonts/lm/fonts/opentype/public/lm/](https://mirror.ctan.org/fonts/lm/fonts/opentype/public/lm/) から入手できます。

## 数式を EPS にする {#hf9c85f7}

複雑な数式は EPS などの形式でインポートします。 

例えば次の数式を作ってみましょう。 

<img src="http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/testeq.jpg" alt="LaTeX で作った数式">

お好きなテキストエディタに次のように打ち込んでください（Mac でも Windows でも Linux でも何でもかまいません）。 

```
\documentclass{article}
\pagestyle{empty}
\begin{document}

\[ \int_0^\infty \frac{\sin x}{\sqrt{x}} dx = \sqrt{\frac{\pi}{2}} \]

\end{document}
```

これを例えば “testeq.tex” というファイル名で保存します。 

TeX （実際には LaTeX を使います）がインストールしてあるとして，次のようにコマンドを打ちます（あるいはマウスでこれに相当する操作をします）。 

```
$ latex testeq
$ dvips -Ppdf -E testeq -o testeq.eps
```

これで [testeq.eps](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/testeq.eps) という EPS ファイルができます。
ここで “-E” は EPS 形式で保存するオプションです。これを忘れると EPS でない PostScript 形式になってしまいます。 

## InDesign に配置 {#n2deff3f}

上で作った EPS ファイルをそのまま InDesign 2.0 に「配置」すると，次のようになります。 

<img src="http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/indesign.jpg" alt="InDesign 2.0 に配置したところ">

上の例では，LaTeX のデフォルトのフォント (Computer Modern) を使いました。 

[数式フォントの比較](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/mathtime/comparison.html) のページに，LaTeX で簡単に使えるいくつかの数式フォントを比較しています。 

## Illustrator に配置 1 {#q2427dd4}

<span style="color:red;">追記</span>

Illustrator CS の環境設定で「リンクされたEPSに低解像度の表示用画像（プレビュー）を使用」のチェックを外してリンク配置すれば，EPS でも問題なく文字が表示されました。
PDF でもリンク配置なら問題ありません。
Mac OS X のプレビューを使えば PDF を範囲指定してクロップできます。

<table>
<tbody>
<tr><td><img src="http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/illustrator.jpg" alt="箱しか見えない EPS 画像"></td><td><img src="http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/illustrator2.jpg" alt="Illustrator から保存したプレビュー付き EPS 画像"></td></tr>
<tr><td>Illustrator 10.0.3 に配置したところ。箱しか見えない。</td><td style="text-align:center">Illustrator から保存した EPS。</td></tr>
</tbody>
</table>

EPS を作るところまでは上と同じです。
ただ，この EPS をそのまま Illustrator に ［ファイル］→［配置...］（「配置」ダイアログボックスの「リンク」チェックボックスをオフにした状態で）すると，「所在不明のフォントは、初期設定のフォントで代用されます。」というメッセージが出て，文字化けします。 

別の方法も後で書きますが，簡単かつ確実な方法は，「配置」ダイアログボックスの「リンク」チェックボックスをオンにすることです。
dvips の出力する EPS にはプレビュー画像が付いていませんので，配置してもただの箱に見えます。
これでも PostScript デバイス（PS プリンタや Distiller (Adobe PDF)）に出力すれば，きれいに出ます。
また，Illustrator から EPS で保存しても大丈夫です（保存時に「配置した画像を含む」チェックボックスをオンにします）。 

EPS にプレビューを付けておけば，配置したときにプレビューを見ることができますので，便利です。 GSview の ［Edit］→［Add EPS Preview］ でプレビューが付けられます。 

この方法では Illustrator から直接 PDF で保存すると文字化けしますので，PDF 化するならいったん EPS で保存してから Distiller で処理してください。 

## Illustrator に配置 2 (Windows) {#wfad6f6b}

箱じゃ不安，あるいは Illustrator の中で数式を編集したい，という場合は，次のようにします。
ただし，Illustrator のフォントリストにたくさんのフォントが追加されてしまいますのでご注意ください。 

あらかじめ TeX をインストールしたディレクトリの type1 フォルダ（標準では C:\usr\local\share\texmf\fonts\type1\）をフォルダごと "C:\Program Files\Common Files\Adobe\Fonts\Reqrd\Base\\" にコピーまたはリンクしておきます（Thanks: 長さん [qa:20350](https://okumuralab.org/~okumura/texfaq/qa/20350.html)，角藤さん [qa:20353](https://okumuralab.org/~okumura/texfaq/qa/20353.html)）。
こうすると，TeX で使う多数の Type 1 フォントを Windows に登録せずに Adobe 製品で使うことができます。 Illustrator から直接 PDF で保存しても大丈夫です。 

times，mathpazo，txfonts，pxfonts 等を使った場合は，dvips に欧文基本35フォントをダウンロードするオプションを付け（“-Ppdf” の代わりに “-Pdownload35”，Windows 版なら “-Pdl” でしょうか），さらに Ghostscript 付属の Type 1 (pfb) フォントをやはり Illustrator から見える場所にコピーしておけばいいのではないかと思います（テストしていません）。 

↑訂正1：txfonts の場合は config.ps に “p +txr2.map” という行を書くのでした（←訂正：W32TeX では “-Pdl” オプションで同じことになるのでした。teTeX では “-Pdownload35” です）。 

↑訂正2：Ghostscript のフォントはすでに W32TeX にも入っていました（teTeX 同様）。コピーは不要です。 

## Illustrator に配置 2 (Mac) {#z9ef5010}

（この項については内山さんからご教示をいただきました。） 

Mac でも，TeX からは UNIX や Windows と同じ Type 1 (PFB) フォントが使えますが，一般のアプリケーションからは使えません。 
[CTAN](/CTAN/) の [fonts/cm/ps-type1/bluesky/](https://mirror.ctan.org/fonts/cm/ps-type1/bluesky/) にある cmps-oztex.hqx または cmps-textures.hqx をインストールしてお使いください（フォントについては両者の中身は同じようです）。スクリーンフォントも必要です。 

インストールの場所は，Adobe 製品だけから使うなら /Library/Application Support/Adobe/Fonts/Reqrd/Base/ ですが，Mac OS X では Mxdvi も同じフォントを使うことを考えれば，次の場所のいずれかに入れるのがいいかもしれません。
Mac OS X では次の順にフォントを探してくれます（→ [Mac OS X: Font Locations and Their Purposes](http://docs.info.apple.com/article.html?artnum=106417)）。 

1. "/Library/Application Support/" （アプリケーション用）
1. &#x7e;/Library/Fonts/ (= /Users/$USER/Library/Fonts/) （自分だけで使うなら）
1. /Library/Fonts/ （全員で使うなら）
1. /Network/Library/Fonts/ （ネットワーク用）
1. /System/Library/Fonts/ （通常はここはいじらない）
1. "/System Folder/Fonts/" （Classic 環境用だが Mac OS X でも使える）

私は &#x7e;/Library/Fonts の中に一つフォルダを作ってその中にまとめて入れました（Mac OS X 10.2 以降で可能）。 

ただ，Mac 版 Illustrator 10.0.3 では PDF で保存すると一部の文字が化けます。 
“\\\[ \Gamma - \gamma \\\]” で実験してみてください（“$\Gamma$” や “$-$” は化けやすいので有名）。 Windows 版なら大丈夫なのに残念です。 
Mac 版でも，Illustrator から EPS で保存したものは大丈夫です。 PDF にしたければ EPS で保存して Distiller で変換すればいいでしょう。 

念のため TrueType 版の Computer Modern フォント（BaKoMa フォント：[bakoma.lzh](ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/font/bakoma/bakoma.lzh)）でも試してみました。
「テキストエディット」では使えましたが，Illustrator ではフォントリストには出るけれども表示できません。 

## WMF/EMF に変換する方法 {#b65fa32a}

この方法は Windows でしか使えません。
また，あらかじめ Windows に BaKoMa の Computer Modern TrueType フォントなどをインストールしておく必要があります。 

dviout （2002年10月9日以降のもの）では次のようにして EMF 形式でクリップボードにコピーできます。
まず ［Display］→［Region］→［On］（ショートカットは “Ctrl + \[” ）にして，Shift を押しながら左クリックで矩形領域の左上隅，やはり Shift を押しながら右クリックで右下隅を指定します。
これで ［File］→［Save as image］→［EMF in clipboard］（ショートカットは “Alt + (F S E)”）すると，クリップボードにコピーされます。
これで Illustrator （EMF 形式を理解するソフトなら何でも）に貼り付ければ OK です。 

また，[pstoedit](http://www.pstoedit.net/pstoedit/) を GSview と同じところ（標準では C:\Program Files\Ghostgum\pstoedit\）にインストールしておけば，GSview から ［Edit］→［Convert to vector format...］ で WMF や EMF に変換できます。 

## Ghostscript でアウトライン化する方法 {#bf206395}

Ghostscript の epswrite でアウトラインを取る方法もあります（→ [qa:20472](https://okumuralab.org/~okumura/texfaq/qa/20472.html)）。 

まず次のように十分大きいサイズで式を作ります（新ドキュメントクラス なら簡単にできます）。
文字が小さいとアウトラインではなくビットマップ化されてしまいます。 

```
\documentclass[30pt]{jsarticle}
\pagestyle{empty}
\begin{document}

\[ \int_0^\infty \frac{\sin x}{\sqrt{x}} dx = \sqrt{\frac{\pi}{2}} \]

\end{document}
```

次のコマンドを順に打ち込みます（Linux の場合）。 

```
$ platex testeq
$ dvips -Ppdf -E testeq -o testeq.eps
$ eps2eps testeq.eps testeq2.eps
```

この eps2eps は Ghostscript で epswrite デバイスを使うシェルスクリプトです。 
Windows ならたぶん次に相当します（さらに正確には “-dDEVICEWIDTH=250000 -dDEVICEHEIGHT=250000” というオプションも含んでいます）。 

```
>gswin32c -dSAFER -q -dBATCH -dNOPAUSE -sDEVICE=epswrite -sOutputFile=testeq2.eps testeq.eps
```

これでアウトラインが取れます。日本語も大丈夫です（Windows なら dvips の代わりに dvipsk を使います）。
できた testeq2.eps の &#x25;&#x25;BoundingBox: 行がなぜか変なので，元の testeq.eps の &#x25;&#x25;BoundingBox: 行と置き換えます。
これで testeq2.eps はフォントを含まないアウトラインだけの EPS になり，Mac でも Windows でも Illustrator などに安全に配置できます。 

新ドキュメントクラスを使う方法以外に，\scalebox で数式を拡大する方法もあります。
この場合は数式を $\displaystyle ...$ で書くといいでしょう。 

```
\documentclass{article}
\pagestyle{empty}
\usepackage[dvips]{graphicx}
\begin{document}

\scalebox{3}{$\displaystyle
  \int_0^\infty \frac{\sin x}{\sqrt{x}} dx = \sqrt{\frac{\pi}{2}}$}

\end{document}
```

別解として，dvips に “-x 3000” のようなオプションを与えれば3倍に拡大されます。 

［2006/07/03 追記］ 次のようにすれば，十分大きいサイズで式を作る必要もなく，&#x25;&#x25;BoundingBox: 行も変にならないようです（→ [qa:43337](https://okumuralab.org/~okumura/texfaq/qa/43337.html)）。

```
>gswin32c -dSAFER -q -dBATCH -dNOPAUSE -sDEVICE=epswrite -dEPSCrop -r9600 -sOutputFile=testeq2.eps testeq.eps
```

端が欠ける場合は “-dEPSCrop” を外せばいいようです。

## 他の方法 {#b00fa762}

### Equation Magic (Lite) {#e1e0d1fe}

TeX ではありませんが同様な機能を持つ数式エディタとして [Equation Magic Lite](http://www.micropress-inc.com/eqmlite.htm) があります。
これは [Equation Magic Pro](http://www.micropress-inc.com/eqmpro/index.html) の機能制限版で，無償で配布されています。
これは Word など OLE 対応ソフトからは ［挿入］→［オブジェクト］→［Equation Magic］ で編集することができます。 <!-- 全角の［］ですか……。 -->
Illustrator にはクリップボード経由で文字として貼り付けられます。 
Windows に “mv” で始まる名前の TrueType フォントが9個インストールされ，それが使われますので，Illustrator の中から簡単な修正ができます。
これらのフォントは Computer Modern とそっくりです。 

### OLETeX {#bf856a64}

Word や PowerPoint に Windows の OLE 機能を使って数式を貼り込むものとして，OLETeX があります。
これについては 市川さん, 坂井さん の解説をご覧ください。 

## リンク {#qed253c5}

- [Computer Modern フォントの OpenType 版](http://www.appliedsymbols.com/cm/)（商品）

［追記］ 今なら
Computer Modern フォントや Latin Modern フォントの OpenType 版があります。

- Computer Modern フォントの OpenType 版:
    [CTAN:fonts/cm/ps-type1/bakoma/otf/](https://mirror.ctan.org/fonts/cm/ps-type1/bakoma/otf/)

- Latin Modern フォントの OpenType 版:
    [CTAN:fonts/lm/fonts/opentype/public/lm/](https://mirror.ctan.org/fonts/lm/fonts/opentype/public/lm/)

## オマケ {#u03ab148}

- [tex.eps](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/tex.eps) (Illustrator でアウトラインを取った TeX のロゴです。何かに使えるかな？)
