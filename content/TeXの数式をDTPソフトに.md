---
title: "TeXの数式をDTPソフトに"
url: "/TeXの数式をDTPソフトに/"
date: 2004-12-26T14:41:26Z
pukiwiki: "TeXの数式をDTPソフトに"
---

# TeXの数式をDTPソフトに

<!-- http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/math.html -->

## はじめに {#g4e20e7a}

Illustratorできれいな数式を作るのって，たいへんですよね。 

TeXなら簡単にきれいな数式ができます。 

このページはまだ作り始めたばかりです。ご要望をお寄せください。 

## 簡単な数式なら…… {#td464375}

TeX で無指定で使われるフォントは，本文は Computer Modern Roman 10pt (cmr10)，数式は Computer Modern Math Italic 10pt (cmmi10) です。
これらは TrueType や Type 1 形式で配布されていますので，これをインストールすれば他のアプリケーションでも使えます。 

TrueType 版の Computer Modern フォントの一つである BaKoMa フォントは，たとえば [bakoma.lzh](ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/font/bakoma/bakoma.lzh) で入手できます。 
pfb 形式のフォントは TeX に標準で入っています。 cmr10.pfb，cmmi10.pfb などを検索してください。 

## 数式をEPSにする {#hf9c85f7}

複雑な数式は EPS などの形式でインポートします。 

たとえば次の数式を作ってみましょう。 

<img src="http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/testeq.jpg" alt="LaTeXで作った数式">

お好きなテキストエディタに次のように打ち込んでください（MacでもWindowsでもLinuxでも何でもかまいません）。 

```
\documentclass{article}
\pagestyle{empty}
\begin{document}

\[ \int_0^\infty \frac{\sin x}{\sqrt{x}} dx = \sqrt{\frac{\pi}{2}} \]

\end{document}
```

これをたとえば testeq.tex というファイル名で保存します。 

TeX（実際にはLaTeXを使います）がインストールしてあるとして，次のようにコマンドを打ちます（あるいはマウスでこれに相当する操作をします）。 

```
latex testeq
dvips -Ppdf -E testeq -o testeq.eps
```

これで [testeq.eps](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/testeq.eps) というEPSファイルができます。
ここで -E はEPS形式で保存するオプションです。これを忘れるとEPSでないPS形式になってしまいます。 

## InDesignに配置 {#n2deff3f}

上で作ったEPSファイルをそのまま InDesign 2.0 に「配置」すると，次のようになります。 

<img src="http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/indesign.jpg" alt="InDesign 2.0に配置したところ">

上の例では，LaTeXのデフォルトのフォント（Computer Modern）を使いました。 

[数式フォントの比較](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/mathtime/comparison.html) のページに，LaTeXで簡単に使えるいくつかの数式フォントを比較しています。 

## Illustratorに配置1 {#q2427dd4}

<table>
<tbody>
<tr><td><img src="http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/illustrator.jpg" alt="箱しか見えないEPS画像"></td><td><img src="http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/illustrator2.jpg" alt="Illustratorから保存したプレビュー付きEPS画像"></td></tr>
</tbody>
</table>

| Illustrator 10.0.3に配置したところ。箱しか見えない。| Illustratorから保存したEPS。|  

EPSを作るところまでは上と同じです。
ただ，このEPSをそのままIllustratorに［ファイル］→［配置...］（「配置」ダイアログボックスの「リンク」チェックボックスをオフにした状態で）すると，「所在不明のフォントは、初期設定のフォントで代用されます。」というメッセージが出て，文字化けします。 

別の方法も後で書きますが，簡単かつ確実な方法は，「配置」ダイアログボックスの「リンク」チェックボックスをオンにすることです。
dvipsの出力するEPSにはプレビュー画像が付いていませんので，配置してもただの箱に見えます。
これでもPostScriptデバイス（PSプリンタやDistiller（Adobe PDF））に出力すれば，きれいに出ます。
また，IllustratorからEPSで保存しても大丈夫です（保存時に「配置した画像を含む」チェックボックスをオンにします）。 

EPSにプレビューを付けておけば，配置したときにプレビューを見ることができますので，便利です。 GSviewのEdit→Add EPS Previewでプレビューが付けられます。 

この方法ではIllustratorから直接PDFで保存すると文字化けしますので，PDF化するならいったんEPSで保存してからDistillerで処理してください。 

## Illustratorに配置2（Windows） {#wfad6f6b}

箱じゃ不安，あるいはIllustratorの中で数式を編集したい，という場合は，次のようにします。ただし，Illustratorのフォントリストにたくさんのフォントが追加されてしまいますのでご注意ください。 

あらかじめTeXをインストールしたディレクトリの type1 フォルダ（標準では C:\usr\local\share\texmf\fonts\type1）をフォルダごと C:\Program Files\Common Files\Adobe\Fonts\Reqrd\Base にコピーまたはリンクしておきます（Thanks: 長さん [qa:20350](https://okumuralab.org/~okumura/texfaq/qa/20350.html)，角藤さん [qa:20353](https://okumuralab.org/~okumura/texfaq/qa/20353.html)）。
こうすると，TeXで使う多数のType 1フォントをWindowsに登録せずにAdobe製品で使うことができます。 Illustratorから直接PDFで保存しても大丈夫です。 

times，mathpazo，txfonts，pxfonts等を使った場合は，dvipsに基本35フォントをダウンロードするオプションを付け（-Ppdfの代わりに-Pdownload35，Windows版なら-Pdlでしょうか），さらにGhostscript付属のType 1（pfb）フォントをやはりIllustratorから見える場所にコピーしておけばいいのではないかと思います（テストしていません）。 

↑訂正1：txfonts の場合は config.ps に p +txr2.map という行を書くのでした（←訂正：W32TeX では -Pdl オプションで同じことになるのでした。teTeX では -Pdownload35 です）。 

↑訂正2：GhostscriptのフォントはすでにW32TeXにも入っていました（teTeX同様）。コピーは不要です。 

## Illustratorに配置2（Mac） {#z9ef5010}

（この項については内山さんからご教示をいただきました。） 

Macでも，TeXからはUNIXやWindowsと同じType 1（PFB）フォントが使えますが，一般のアプリケーションからは使えません。 
[CTAN](http://www.ring.gr.jp/pub/text/CTAN/) の fonts/cm/ps-type1/bluesky/ にある cmps-oztex.hqx または cmps-textures.hqx をインストールしてお使いください（フォントについては両者の中身は同じようです）。スクリーンフォントも必要です。 

インストールの場所は，Adobe製品だけから使うなら /Library/Application Support/Adobe/Fonts/Reqrd/Base/ ですが，Mac OS XではMxdviも同じフォントを使うことを考えれば，次の場所のいずれかに入れるのがいいかもしれません。
Mac OS Xでは次の順にフォントを探してくれます（→ [Mac OS X: Font Locations and Their Purposes](http://docs.info.apple.com/article.html?artnum=106417)）。 

1. &#x7e;/Library/Fonts (自分だけで使うなら)
1. /Library/Fonts (全員で使うなら)
1. /Network/Library/Fonts (ネットワーク用)
1. /System/Library/Fonts (通常はここはいじらない)
1. /システムフォルダ/フォント (Classic用だがMac OS Xでも使える)

私は &#x7e;/Library/Fonts の中に一つフォルダを作ってその中にまとめて入れました（Mac OS X 10.2以降で可能）。 

ただ，Mac版Illustrator 10.0.3ではPDFで保存すると一部の文字が化けます。 
\\\[ \Gamma - \gamma \\\] で実験してみてください（$\Gamma$ や $-$ は化けやすいので有名）。 Windows版なら大丈夫なのに残念です。 
Mac版でも，IllustratorからEPSで保存したものは大丈夫です。 PDFにしたければEPSで保存してDistillerで変換すればいいでしょう。 

念のためTrueType版のComputer Modernフォント（BaKoMaフォント：[bakoma.lzh](ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/font/bakoma/bakoma.lzh)）でも試してみました。
「テキストエディット」では使えましたが，Illustratorではフォントリストには出るけれども表示できません。 

## WMF/EMFに変換する方法 {#b65fa32a}

この方法はWindowsでしか使えません。
また，あらかじめWindowsにBaKoMaのComputer Modern TrueTypeフォントなどをインストールしておく必要があります。 

dviout（2002年10月9日以降のもの）では次のようにしてEMF形式でクリップボードにコピーできます。
まずDisplay→Region→On（ショートカットは Ctrl+\[）にして，Shiftを押しながら左クリックで矩形領域の左上隅，やはりShiftを押しながら右クリックで右下隅を指定します。
これでFile→Save as image→EMF in clipboard（ショートカットはAlt+FSE）すると，クリップボードにコピーされます。
これでIllustrator（EMF形式を理解するソフトなら何でも）に貼り付ければOKです。 

また，[pstoedit](http://www.pstoedit.net/pstoedit/) をGSviewと同じところ（標準では C:\Program Files\Ghostgum\pstoedit）にインストールしておけば，GSviewからEdit→Convert to vector format...でWMFやEMFに変換できます。 

## Ghostscriptでアウトライン化する方法 {#bf206395}

Ghostscriptのepswriteでアウトラインを取る方法もあります（→ [qa:20472](https://okumuralab.org/~okumura/texfaq/qa/20472.html)）。 

まず次のように十分大きいサイズで式を作ります（新ドキュメントクラス なら簡単にできます）。
文字が小さいとアウトラインではなくビットマップ化されてしまいます。 

```
\documentclass[30pt]{jsarticle}
\pagestyle{empty}
\begin{document}

\[ \int_0^\infty \frac{\sin x}{\sqrt{x}} dx = \sqrt{\frac{\pi}{2}} \]

\end{document}
```

次のコマンドを順に打ち込みます（Linuxの場合）。 

```
platex testeq
dvips -Ppdf -E testeq -o testeq.eps
eps2eps testeq.eps testeq2.eps
```

この eps2eps はGhostscriptでepswriteデバイスを使うシェルスクリプトです。 
Windowsならたぶん次に相当します（さらに正確には -dDEVICEWIDTH=250000 -dDEVICEHEIGHT=250000 というオプションも含んでいます）。 

```
gswin32c -q -sDEVICE=epswrite -sOutputFile=testeq2.eps -dNOPAUSE -dBATCH -dSAFER testeq.eps
```

これでアウトラインが取れます。日本語も大丈夫です（Windowsならdvipsの代わりにdvipskを使います）。
できたtesteq2.epsの &#x25;&#x25;BoundingBox: 行がなぜか変なので，元のtesteq.epsの &#x25;&#x25;BoundingBox: 行と置き換えます。
これでtesteq2.epsはフォントを含まないアウトラインだけのEPSになり，MacでもWindowsでも，Illustratorなどに安全に配置できます。 

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

別解として，dvipsに -x 3000 のようなオプションを与えれば3倍に拡大されます。 

## 他の方法 {#b00fa762}

### Equation Magic（Lite） {#e1e0d1fe}

TeXではありませんが同様な機能を持つ数式エディタとして [Equation Magic Lite](http://www.micropress-inc.com/eqmlite.htm) があります。
これは [Equation Magic Pro](http://www.micropress-inc.com/eqmpro/index.html) の機能制限版で，無償で配布されています。
これはWordなどOLE対応ソフトからは［挿入］→［オブジェクト］→［Equation Magic］で編集することができます。
Illustratorにはクリップボード経由で文字として貼り付けられます。 
Windowsに「mv」で始まる名前のTrueTypeフォントが9個インストールされ，それが使われますので，Illustratorの中から簡単な修正ができます。
これらのフォントはComputer Modernとそっくりです。 

### OLETeX {#bf856a64}

WordやPowerPointにWindowsのOLE機能を使って数式を貼り込むものとして，OLETeXがあります。
これについては 市川さん, 坂井さん の解説をご覧ください。 

## リンク {#qed253c5}

- [Computer ModernフォントのOpenType版](http://www.appliedsymbols.com/cm/) (商品)

## オマケ {#u03ab148}

- [tex.eps](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/tex.eps) (Illustrator でアウトラインを取った TeX のロゴです。何かに使えるかな)
