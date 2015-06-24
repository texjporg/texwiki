---
title: "TeXと外字"
url: "/TeXと外字/"
date: 2004-12-26T15:52:51Z
pukiwiki: "TeXと外字"
---

# TeXと外字

## TeX と外字 {#y28d390a}

<!-- http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/gaiji.html -->

ここでは，TeX や LaTeX で外字を扱うための方法を説明します。

外字とは，特定の文字集合（文字コードなど）に含まれない文字をいい，日本では一般に JIS 規格（通常は JIS X 0208，稀に JIS X 0213 や JIS X 0221）に含まれない文字をいいます。
表外字または拡張漢字と呼ばれることもあります。

***

***

### OTF パッケージで Adobe-Japan1-6 の 23,058 グリフ {#ve311433}

[OTF パッケージ（ベータ版・開発版）](/OTF/)を使えば，Adobe-Japan1-6 の 23,058 グリフを出力できます。
ほとんどの文字はこれで大丈夫でしょう。

### Illustrator や Inkscape による外字作成 {#oad7ee64}

Adobe-Japan1-6 にもない文字は [Illustrator](/Illustrator/) や [Inkscape](/Inkscape/) で作ってしまいましょう。
ここでは Illustrator を例に説明します。

まず目印に一辺100ポイントの正方形を描いておきます。
間違えて消したり動かしたりしないようにロックしておくといいでしょう。

<img src="http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/gaiji1.png" alt="100ポイントの正方形">

左下隅から12ポイント上がったところが起点になるように元となる文字を入力します。

<img src="http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/gaiji2.png" alt="元になる文字の入力">

文字のアウトラインをとって，修正します。
この場合，中央の「一」と「口」を選択して「←」キーを数回押し，次に「口」の左縦棒だけ選択してさらに「←」キーを数回押せばいいでしょう。

<img src="http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/gaiji3.png" alt="文字の修正">

目印の正方形の枠の塗りをなしにしてから EPS 形式で保存します。
ここではファイル名を kou-itai.eps としました。

<img src="http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/gaiji4.png" alt="枠の塗りを無しに">

実際に LaTeX 文書中に入れてみましょう。

- [dvips](/dvips/) を使う場合は，これを次のようにして使います。

    ```
    \documentclass[uplatex,dvips,ja=standard]{bxjsarticle}
    \usepackage[dvips]{graphicx}
    \begin{document}

    精興社

    精\raisebox{-0.12zw}{\includegraphics[width=1zw]{kou-itai.eps}}社

    \end{document}
    ```

- [dvipdfmx](/dvipdfmx/) を使う場合は，まず EPS ファイルを PDF ファイルに変換しておくと処理が早くなります。

    ```
    epstopdf kou-itai.eps
    ```

    で kou-itai.pdf に変換し，それを次のようにして取り込みます。

    ```
    \documentclass[uplatex,dvipdfmx,ja=standard]{bxjsarticle}
    \usepackage[dvipdfmx]{graphicx}
    \begin{document}

    精興社

    ```

    <!-- 精\raisebox{-0.12zw}{\includegraphics[width=1zw,bb=0 0 100 100]{kou-itai}}社 -->

    ```
    精\raisebox{-0.12zw}{\includegraphics[width=1zw]{kou-itai}}社

    \end{document}
    ```

これを処理した結果です：

<img src="http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/seikosha.png" alt="精興社と外字の例">

同様にして Inkscape でも外字を作成することができます。

- [Inkscape による TeX の外字作成メモ](http://miko.org/~tatyana/tech/OSX/inkscape/gaiji.html)

### IPAmj 明朝の利用 {#d0fddba5}

人名の表記等，細かな字形の差異を特別に使い分ける必要のある業務等での活用を想定した [IPAmj 明朝](http://mojikiban.ipa.go.jp/1300.html)フォントを利用する [ipamjm パッケージ](http://psitau.kitunebi.com/experiment.html) があります。
IPAmj 明朝の MJ 文字図形名の番号を指定して当該グリフを表示させます。

さらに，IVS による異体字表現をサポートする [PXipamjm パッケージ](https://github.com/zr-tex8r/PXipamjm)もあります。

- [ipamjm パッケージでアレしてみた](http://d.hatena.ne.jp/zrbabbler/20131214/1387029624)
- [pxipamjm パッケージの説明書のような何か](http://d.hatena.ne.jp/zrbabbler/20131221/1387651875)

### グリフウィキの活用 {#mf8ed6c1}

フリーな「漢字字形共有サイト」である[グリフウィキ](http://glyphwiki.org/)で登録された漢字字形を LaTeX 文書で簡単に利用できるようにするパッケージとして，[BXglyphwiki パッケージ](https://github.com/zr-tex8r/BXglyphwiki)が開発されています。

- [LaTeX で使える漢字の数を劇的に増やす方法](http://d.hatena.ne.jp/zrbabbler/20131017/1382008498)（ZR さん）

### 各種マーク {#m89aa07c}

有用なマークを EPS 化されたものがありましたら，実体または URL を送っていただければ幸いです。 

- Apple マーク [apple.eps](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/apple.eps)（comp.text.tex に流れていたもの）
    - コメントにも書いてありますが stroke を fill に直すと塗り潰されます。

- Command マーク（要調整）：

    ```
    %!PS-Adobe-3.0 EPSF-3.0
    %%BoundingBox: 0 0 80 80
    5 setlinewidth
    20 20 10 90 360 arc
    0 40 rlineto
    20 60 10 0 270 arc
    40 0 rlineto
    60 60 10 -90 180 arc
    0 -40 rlineto
    60 20 10 180 450 arc
    closepath stroke
    ```

    - Adobe-Japan1-6 なフォントなら \CID{16271} でも出ますが，ちょっと細いかも。
    - \[2003-08-30 追記\] 「Lucida Grande ならいかがでしょう？…… こういうシンボルは OS 9 の Charcoal や Chicago にも入っています」(Thanks: 木下さん)
    - \[2003-09-09 追記\] Osaka フォントの未定義領域にも入っていました (Thanks: 木下さん)

- [Creator's Exchange \[Internet Archive\]](http://web.archive.org/web/20070702034229/http://www.radiocom.co.jp/) というところに各種マークがあるようです (Thanks: 谷村さん [qa:21265](https://okumuralab.org/~okumura/texfaq/qa/21265.html))。

### 絵文字を出力する {#ndee9c4c}

[upLaTeX](/upTeX,upLaTeX/) で絵文字を出力する試みがあります。

- [TeXで絵文字を入出力する (1) 〜 白黒絵文字篇](http://doratex.hatenablog.jp/entry/20140107/1389033238)
- [TeXで絵文字を入出力する (2) 〜 カラー絵文字篇](http://doratex.hatenablog.jp/entry/20140107/1389103370)

[XeLaTeX](/XeTeX/) や [LuaLaTeX](/LuaTeX/) で絵文字を出力する方法の紹介です。

- [LaTeX文書中に絵文字的なもの（Font-Awesome）を取り入れる](http://qiita.com/uri/items/00afdd95e68d47fd917b)

### 関連リンク {#i9089a08}

- 各種記号の出力法が[各種記号やフォント](</各種記号やフォント/>)でまとめられています。
- [TeXでJIS補助漢字を使う](http://super.para.media.kyoto-u.ac.jp/~tasuku/jishojo/jishojo.html)
