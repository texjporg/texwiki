---
title: "TeXで外字"
url: "/TeXで外字/"
date: 2004-12-26T14:51:20Z
pukiwiki: "TeXで外字"
---

# TeXで外字

<!-- http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/gaiji.html -->

## OTFパッケージで2万字 {#ve311433}

[OTFパッケージ](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/otf.html) でAdobe-Japan1-5の2万グリフが使えます。ほとんどの文字はこれで大丈夫です。 

## Illustratorで外字作成 {#oad7ee64}

Adobe-Japan1-5にもない文字はIllustratorで作ってしまいましょう。 

まず目印に一辺100ポイントの正方形を描いておきます。間違えて消したり動かしたりしないようにロックしておくといいでしょう。 

![](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/gaiji1.png)

左下隅から12ポイント上がったところが起点になるように元となる文字を入力します。 

![](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/gaiji2.png)

文字のアウトラインをとって，修正します。この場合，中央の「一」と「口」を選択して「←」キーを数回押し，次に「口」の左縦棒だけ選択してさらに「←」キーを数回押せばいいでしょう。 

![](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/gaiji3.png)

目印の正方形の枠の塗りをなしにしてからEPS形式で保存します。 

![](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/gaiji4.png)

ここではファイル名を kou-itai.eps としました。これを次のようにして使います。 

```
\documentclass{jsarticle}
\usepackage[dvips]{graphicx}
\begin{document}

精興社

精\raisebox{-0.12zw}{\includegraphics[width=1zw]{kou-itai.eps}}社

\end{document}
```

dvipdfmxを使う場合は，上と同じでもかまいませんが，次のようにすると，処理が速くなります。 

まず ps2pdf kou-itai.eps で kou-itai.pdf を作ります。 

それを次のようにして取り込みます。 

```
\documentclass{jsarticle}
\usepackage[dvipdfm]{graphicx}
\begin{document}

精興社

精\raisebox{-0.12zw}{\includegraphics[width=1zw,bb=0 0 100 100]{kou-itai}}社

\end{document}
```

これを処理した結果です：

![](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/seikosha.png)

## 他の例 {#m89aa07c}

- Appleマーク [apple.eps](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/apple.eps) (comp.text.tex に流れていたもの)
    コメントにも書いてありますが stroke を fill に直すと塗り潰されます。 

- Commandマーク（要調整）：

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

    Adobe-Japan1-5 なフォントなら \CID{16271} でも出ますが，ちょっと細い。

<br>

    \[2003-08-30追記\] 「Lucida Grande ならいかがでしょう？…… こういうシンボルは OS 9 の Charcoal や Chicago にも入っています」(Thanks: 木下さん)

<br>

    \[2003-09-09追記\] Osakaフォントの未定義領域にも入っていました (Thanks: 木下さん) 

有用なマークをEPS化されたものがありましたら，実体またはURLを送っていただければ幸いです。 

[Creator's Exchange](http://www.radiocom.co.jp/) というところに各種マークがあるようです (Thanks: 谷村さん [qa:21265](https://okumuralab.org/~okumura/texfaq/qa/21265.html))。
