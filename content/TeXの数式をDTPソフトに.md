---
title: "TeXの数式をDTPソフトに"
url: "/TeXの数式をDTPソフトに/"
date: 2004-12-26T14:41:26Z
pukiwiki: "TeXの数式をDTPソフトに"
---

# TeXの数式をDTPソフトに

## TeX の数式を DTP ソフトに {#b627e369}

[Illustrator](/Illustrator/) などのソフトウェアできれいな数式を作るのって，大変ですよね。
TeX, LaTeX を使えば簡単にきれいな数式ができます。

***

***

### 数式用のフォントを追加して Illustrator などで頑張る方法 {#td464375}

TeX で無指定で使われるフォントは，本文は Computer Modern Roman 10pt (cmr10)，数式は Computer Modern Math Italic 10pt (cmmi10) です。
これらは（PostScript アウトラインデータ形式の）OpenType フォント，TrueType フォント，Type 1 フォントのそれぞれの形式で配布されていますので，これらを他のアプリケーションで使うことができます。
もちろん Illustrator でも使えます。

Computer Modern フォントの OpenType 形式が [CTAN:fonts/cm/ps-type1/bakoma/otf/](https://mirror.ctan.org/fonts/cm/ps-type1/bakoma/otf/) から，Latin Modern フォントの OpenType 形式が [CTAN:fonts/lm/fonts/opentype/public/lm/](https://mirror.ctan.org/fonts/lm/fonts/opentype/public/lm/) から入手できます。

TrueType 形式の Computer Modern フォントの一つである BaKoMa フォントは，例えば [CTAN:fonts/cm/ps-type1/bakoma/ttf/](https://mirror.ctan.org/fonts/cm/ps-type1/bakoma/ttf/) から入手できます。
Type 1 フォント形式の一つである PFB 形式のフォントは TeX に標準で入っています。
$TEXMF/fonts/type1/{bluesky,bakoma}/\*.pfb を検索してください。

### 数式を EPS 形式で出力して取り込む {#hf9c85f7}

複雑な数式は LaTeX を使ってタイプセットし，EPS などの形式でインポートするとよいでしょう。

#### お手軽なツールを使う方法 (Windows/Mac) {#oe0e5138}

TeX の数式をクリック一つで PDF/EPS/SVG/PNG/JPEG 形式などの画像ファイルに変換するツールとして [KLatexFormula](/KLatexFormula/) あるいは [TeX2img](/TeX2img/) があります。
コマンドラインを使いたくない人は，このツールで EPS ファイルを生成し，InDesign や Illustrator に「配置」するのがお手軽でしょう。
この方法は EPS ファイルの文字をアウトライン化してくれるので，数式用フォントを OS にインストールしなくても文字化けの心配がありません。

#### コマンドラインを使う方法 {#ma3ea888}

例えば次の数式を作ってみましょう。

<img src="https://warp.ndl.go.jp/20150806/20150805053920im_/http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/testeq.jpg" alt="LaTeX で作った数式">

<!-- #ref(https://web.archive.org/web/20111118063529if_/http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/testeq.jpg,nolink,LaTeX で作った数式) -->

お好きなテキストエディタに次のように打ち込んでください（Linux でも macOS でも Microsoft Windows でも何でもかまいません）。

```
\documentclass{article}
\pagestyle{empty}
\begin{document}
\[ \int_{0}^{\infty} \frac{\sin x}{\sqrt{x}} dx = \sqrt{\frac{\pi}{2}} \]
\end{document}
```

これを例えば “testeq.tex” というファイル名で保存します。

LaTeX がインストールしてあるとして，次のようにコマンドを打ちます（あるいはマウスでこれに相当する操作をします）。

```
$ latex testeq.tex
$ dvips -E testeq.dvi -o testeq.eps
```

これで [testeq.eps](https://warp.da.ndl.go.jp/info:ndljp/pid/9530765/oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/testeq.eps) という EPS ファイルができます。 <!-- これで &ref(https://web.archive.org/web/20111118063732/http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/testeq.eps); という EPS ファイルができます。 -->
ここで “-E” は EPS 形式で保存するオプションです。
これを忘れると EPS でない PostScript 形式になってしまいます。
この方法は（文字をアウトライン化しないので）テキストを保持した状態の EPS ファイルを出力します。

## InDesign に配置 {#n2deff3f}

上で作った EPS ファイルをそのまま InDesign 2.0 に「配置」すると，次のようになります。

<img src="https://warp.ndl.go.jp/20150806/20150805053920im_/http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/indesign.jpg" alt="InDesign 2.0 に配置したところ">

<!-- #ref(https://web.archive.org/web/20111118063622if_/http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/indesign.jpg,nolink,InDesign 2.0 に配置したところ) -->

上の例では，LaTeX のデフォルトのフォント (Computer Modern) を使いました。
「[数式フォントの比較](https://warp.da.ndl.go.jp/info:ndljp/pid/11040512/oku.edu.mie-u.ac.jp/~okumura/texfaq/mathtime/comparison.html)」のページに，LaTeX で簡単に使えるいくつかの数式フォントを比較しています。 <!-- 「[[数式フォントの比較:https://web.archive.org/web/20180404184346/http://oku.edu.mie-u.ac.jp/~okumura/texfaq/mathtime/comparison.html]]」のページに，LaTeX で簡単に使えるいくつかの数式フォントを比較しています。 -->

InDesign で数式を扱う場合は [Latex to InDesign](https://creativepro.com/latex-to-indesign/) や [latex.insert](https://github.com/ksatolab-uec/latex-insert) が便利です。

## Illustrator に配置 1 {#q2427dd4}

【追記】
Illustrator CS の環境設定で「リンクされたEPSに低解像度の表示用画像（プレビュー）を使用」のチェックを外してリンク配置すれば，EPS でも問題なく文字が表示されました。
PDF でもリンク配置なら問題ありません。macOS のプレビューを使えば PDF を範囲指定してクロップできます。

<table>
<tbody>
<tr><td><img src="https://warp.ndl.go.jp/20150806/20150805053920im_/http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/illustrator.jpg" alt="箱しか見えない EPS 画像"></td><td><img src="https://warp.ndl.go.jp/20150806/20150805053920im_/http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/illustrator2.jpg" alt="Illustrator から保存したプレビュー附き EPS 画像"></td></tr>
<tr><td>Illustrator 10.0.3 に配置したところ。箱しか見えない。</td><td style="text-align:center">Illustrator から保存した EPS。</td></tr>
</tbody>
</table>

<!-- |#ref(https://web.archive.org/web/20111118063631if_/http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/illustrator.jpg,nolink,箱しか見えない EPS 画像)|#ref(https://web.archive.org/web/20111118063533if_/http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/illustrator2.jpg,nolink,Illustrator から保存したプレビュー附き EPS 画像)| -->
<!-- |Illustrator 10.0.3 に配置したところ。箱しか見えない。|CENTER:Illustrator から保存した EPS。| -->

EPS を作るところまでは上と同じです。
ただ，この EPS をそのまま Illustrator に［ファイル］→［配置...］（「配置」ダイアログボックスの「リンク」チェックボックスをオフにした状態で）すると，「所在不明のフォントは，初期設定のフォントで代用されます。」というメッセージが出て，文字化けします。

別の方法も後で書きますが，簡単かつ確実な方法は，「配置」ダイアログボックスの「リンク」チェックボックスをオンにすることです。
dvips の出力する EPS にはプレビュー画像が附いていませんので，配置してもただの箱に見えます。
これでも PostScript デバイス（PS プリンタや Adobe Acrobat Distiller）に出力すれば，きれいに出ます。
また，Illustrator から EPS で保存しても大丈夫です（保存時に「配置した画像を含む」チェックボックスをオンにします）。

EPS にプレビューを付けておけば，配置したときにプレビューを見ることができますので便利です。
[GSview](/GSview/) の \[Edit\] → \[Add EPS Preview\] でプレビューが付けられます。

この方法では Illustrator から直接 PDF で保存すると文字化けしますので，PDF 化するならいったん EPS で保存してから Adobe Acrobat Distiller で処理してください。

## Illustrator に配置 2 (Microsoft Windows) {#wfad6f6b}

箱じゃ不安，あるいは Illustrator の中で数式を編集したい，という場合には次のようにします。
ただし，Illustrator のフォントリストにたくさんのフォントが追加されてしまいますのでご注意ください。

あらかじめ $TEXMF\fonts\type1\ フォルダー（例えば C:\texlive\2024\texmf-dist\fonts\type1\）をフォルダーごと "C:\Program Files\Common Files\Adobe\Fonts\\" 以下のフォルダーにコピーまたはリンクしておきます（Thanks: 長さん [qa:20350](https://okumuralab.org/~okumura/texfaq/qa/20350.html)，角藤さん [qa:20353](https://okumuralab.org/~okumura/texfaq/qa/20353.html)）。
こうすると，TeX で使う多数の Type 1 フォントを Windows に登録せずに Adobe 製品で使うことができます。
Illustrator から直接 PDF で保存しても大丈夫です。

mathpazo，newtx，newpx 等のパッケージを使った場合は，dvips に PostScript Level 2 での基本35書体をダウンロードするオプションを付けます（TeX Live なら “-Pdownload35”）。

## Illustrator に配置 3 (macOS) {#z9ef5010}

（この項については内山さんからご教示をいただきました。）

macOS でも，TeX からは UNIX や Windows と同じ Type 1 (PFB) フォントが使えますが，一般のアプリケーションからは使えません。
[http://www.botik.ru/~znamensk/CTAN-2002/fonts/cm/ps-type1/bluesky/](http://www.botik.ru/~znamensk/CTAN-2002/fonts/cm/ps-type1/bluesky/) から cmps-oztex.hqx または cmps-textures.hqx をダウンロードしてお使いください（フォントについては両者の中身は同じようです）。
スクリーンフォントも必要です（→ [MacでフォントをAdobeのアプリが認識しない](https://oversleptabit.com/archives/1319)）。

インストールの場所は，Adobe 製品だけから使うなら /Library/"Application Support"/Adobe/Fonts/ 以下ですが，macOS では次の場所のいずれかに入れるのがいいかもしれません。
macOS では次の順にフォントを探してくれます（→ 「\[[Mac OS\]OS Xにおけるフォント（font）ファイルの保存場所3ヶ所とその意味について｜およびインストール方法](https://ozpa-h4.com/2013/01/11/mac-os-font/)」，「[macOS のフォントの保存場所はどこですか？](https://too-support.my.site.com/faq/s/article/knowledge23473)」）。

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

私は &#x7e;/Library/Fonts/ の中に一つフォルダを作って，その中にまとめて入れました（macOS 10.2 以降で可能）。

ただ，Mac 版 Illustrator 10.0.3 では PDF で保存すると一部の文字が化けます。
“\\\[ \Gamma - \gamma \\\]” で実験してみてください（“$\Gamma$” や “$-$” は化けやすいことで有名）。
Windows 版なら大丈夫なのに残念です。
Mac 版でも，Illustrator から EPS で保存したものは大丈夫です。
PDF にしたければ EPS で保存して Adobe Acrobat Distiller で変換すればいいでしょう。

念のため TrueType 形式の Computer Modern フォント（BaKoMa フォント：[CTAN:fonts/cm/ps-type1/bakoma/ttf/](https://mirror.ctan.org/fonts/cm/ps-type1/bakoma/ttf/)）でも試してみました。
「テキストエディット」では使えましたが，Illustrator ではフォントリストには出るけれども表示できません。

## WMF/EMF に変換する方法 {#b65fa32a}

この方法は Microsoft Windows でしか使えません。また，あらかじめ Windows のシステムに BaKoMa の Computer Modern TrueType フォントなどをインストールしておく必要があります。

[dviout](/dviout/)（2002年10月9日以降のもの）では次のようにして EMF 形式でクリップボードにコピーできます。
まず \[Display\] → \[Region\] → \[On\]（ショートカットは “Ctrl + \[”）にして，Shift を押しながら左クリックで矩形領域の左上隅，やはり Shift を押しながら右クリックで右下隅を指定します。
これで \[File\] → \[Save as image\] → \[EMF in clipboard\]（ショートカットは “Alt + (F, S, E)”）すると，クリップボードにコピーされます。
これで Illustrator などの EMF 形式を理解するソフトに貼り付ければ OK です。

また，[pstoedit](/pstoedit/) を [GSview](/GSview/) と同じところ（標準では "C:\Program Files\Ghostgum\pstoedit\\"）にインストールしておけば，GSview から \[Edit\] → \[Convert to vector format...\] で WMF や EMF に変換できます。

[TeX2img](/TeX2img/) は EMF 形式のファイルを出力することができます。
また，Windows 版に付属の pdfiumdraw （TeX2img が内部から利用している）を使い

```
> pdfiumdraw --emf input.pdf
```

とすることで，input.pdf を EMF へと変換することもできます。

## Ghostscript でアウトライン化する方法 {#bf206395}

Ghostscript の eps2write デバイスを使ってアウトラインを取る方法もあります（→ [qa:20472](https://okumuralab.org/~okumura/texfaq/qa/20472.html)）。
eps2write は gs9.14 以降で追加されたデバイスなので，お使いのバージョンが gs9.14 より古い場合は以下 epswrite と読み替えてください．

まず，次のように充分大きいサイズで式を作ります
（[jsclasses](/jsclasses/) なら
簡単にできます）。
文字が小さいとアウトラインではなくビットマップ化されてしまいます。

```
\documentclass[uplatex,dvips,30pt]{jsarticle}
\pagestyle{empty}
\begin{document}
\[ \int_{0}^{\infty} \frac{\sin x}{\sqrt{x}} dx = \sqrt{\frac{\pi}{2}} \]
\end{document}
```

次のコマンドを順に打ち込みます（Unix-like OS の場合）。

```
$ uplatex testeq.tex
$ dvips -E testeq.dvi -o testeq.eps
$ eps2eps testeq.eps testeq2.eps
```

この eps2eps は Ghostscript で eps2write デバイスを使うシェルスクリプトです。
Microsoft Windows ならおそらく次に相当します（さらに正確には “-dDEVICEWIDTH=250000 -dDEVICEHEIGHT=250000” というオプションも含んでいます）。

```
>rungs -dSAFER -q -dBATCH -dNOPAUSE -sDEVICE=eps2write -sOutputFile=testeq2.eps testeq.eps
```

これでアウトラインが取れます。日本語も大丈夫です。
できた testeq2.eps の &#x25;&#x25;BoundingBox: 行がなぜか変なので，元の testeq.eps の &#x25;&#x25;BoundingBox: 行と置き換えます。
これで testeq2.eps はフォントを含まないアウトラインだけの EPS になり，Mac でも Windows でも Illustrator などに安全に配置できます。

jsclasses を使う方法以外に，\scalebox で数式を拡大する方法もあります。
この場合には
次の例のように数式を $\displaystyle ...$ で書くといいでしょう。

```
\documentclass[dvips]{article}
\pagestyle{empty}
\usepackage{graphicx}
\begin{document}
\scalebox{3}{$\displaystyle
  \int_0^\infty \frac{\sin x}{\sqrt{x}} dx = \sqrt{\frac{\pi}{2}}$}
\end{document}
```

別解として，dvips に “-x 3000” のようなオプションを与えれば3倍に拡大されます。

［2006年7月3日 追記］ 次のようにすれば，充分大きいサイズで式を作る必要もなく，&#x25;&#x25;BoundingBox: 行も変にならないようです（→ [qa:43337](https://okumuralab.org/~okumura/texfaq/qa/43337.html)）。

```
>rungs -dSAFER -q -dBATCH -dNOPAUSE -sDEVICE=eps2write -dEPSCrop -r9600 -sOutputFile=testeq2.eps testeq.eps
```

端が欠ける場合は “-dEPSCrop” を外せばいいようです。

なお，お手軽ツール [TeX2img](/TeX2img/) も eps2write デバイスを使用して文字をアウトライン化しています。
ほかにも，TeX2img は便利な画像変換ノウハウを多く備えていますので，（たとえ TeX2img を使わないとしても，Windows/Mac 以外でも）この画像変換スキームは参考になることでしょう。

- 参考：[TeX2img (Windows/Mac) の動作の詳細（改訂版）](http://acetaminophen.hatenablog.com/entry/tex2img-converter)

## 他の方法 {#b00fa762}

### LibreOffice/Apache OpenOffice Math {#e2697394}

[LibreOffice/Apache OpenOffice](/LibreOffice/) Math は OLE に対応しています。

### 上記以外の方法 {#m911530d}

[プレゼンツール](</プレゼンツール/>)を参照してください。

## リンク {#qed253c5}

- [IllustratorにLaTeXiT!で貼り付けた数式(PDF)をIllustratorで編集する](http://rhythm-waltz.tumblr.com/post/29630360920/illustrator-latexit-pdf-illustrator)
- Computer Modern フォントの OpenType フォント形式ファイル：
    [CTAN:fonts/cm/ps-type1/bakoma/otf](https://mirror.ctan.org/fonts/cm/ps-type1/bakoma/otf)

- Latin Modern フォントの OpenType フォント形式ファイル：
    [CTAN:fonts/lm/fonts/opentype/public/lm](https://mirror.ctan.org/fonts/lm/fonts/opentype/public/lm)

- [Mac 版 Illustrator での数式の編集](https://okumuralab.org/tex/mod/forum/discuss.php?d=1048)

- [Applied Symbols](http://www.appliedsymbols.com/cm/) （Computer Modern フォントの OpenType 版［商品］）

## オマケ {#u03ab148}

- [tex.eps](https://warp.ndl.go.jp/20150806/20150805053920/http://oku.edu.mie-u.ac.jp/~okumura/texfaq/tex.eps)
    <!-- -&ref(http://web.archive.org/web/20111118062821/http://oku.edu.mie-u.ac.jp/~okumura/texfaq/tex.eps); -->
    （Illustrator でアウトラインを取った TeX のロゴです。何かに使えるかな？）
