---
title: "表記の哲学/重力加速度の g"
url: "/表記の哲学/重力加速度の g/"
date: 2004-09-14T01:19:31Z
pukiwiki: "表記の哲学/重力加速度の g"
---

# 表記の哲学/重力加速度の g

<strong>重力加速度の g は，斜体のようですが，字形についてはどうなのでしょうか？</strong>

- 横長楕円を 2 つくっつけたような g ([![](</attach/表記の哲学/重力加速度の g/gTxfontsMathItalic.png>)](</attach/表記の哲学/重力加速度の g/gTxfontsMathItalic.png>)) と，
- 丸にひげという感じの，“手書きの「ブロック体」”という感じの g ([![](</attach/表記の哲学/重力加速度の g/gCmMathItalic.png>)](</attach/表記の哲学/重力加速度の g/gCmMathItalic.png>))

の 2 種類があると思うのですが（CM フォントの場合と txfonts の場合を見比べるなど）．

```

```

手書きでは，グラム（印刷では立体 [![](</attach/表記の哲学/重力加速度の g/gCmNormalUpright.png>)](</attach/表記の哲学/重力加速度の g/gCmNormalUpright.png>) で書く）も，どうしても“手書きの「ブロック体」” [![](</attach/表記の哲学/重力加速度の g/gCmMathItalic.png>)](</attach/表記の哲学/重力加速度の g/gCmMathItalic.png>) で書くことが多いので，それと区別するために，重力加速度の g は，ひげの末端をはねるなどしっかり区別して記しなさいと
中学時代に指導されたことがあるのですが，<strong>印刷でも，明瞭に区別するのでしょうか？</strong>

### g の立体と斜体における字体の区別[^1] {#e642887d}

- 単位のグラムは立体
- 物理量を持った重力加速度は斜体

で表すことになっている．

- 立体では【楕円２つ】体 ([![](</attach/表記の哲学/重力加速度の g/gCmNormalUpright.png>)](</attach/表記の哲学/重力加速度の g/gCmNormalUpright.png>)) を
- 数式内斜体では【丸にヒゲ】体 ([![](</attach/表記の哲学/重力加速度の g/gCmMathItalic.png>)](</attach/表記の哲学/重力加速度の g/gCmMathItalic.png>)) を

採用したいときには

- CM フォントでは普通にできるが，

<table><tbody>
<tr><td style="text-align:center">g</td><td style="text-align:center">\itshape g</td><td style="text-align:center">$\mathrm{g}$</td><td style="text-align:center">$g$</td></tr>
<tr><td style="text-align:center"><a href="/attach/%E8%A1%A8%E8%A8%98%E3%81%AE%E5%93%B2%E5%AD%A6/%E9%87%8D%E5%8A%9B%E5%8A%A0%E9%80%9F%E5%BA%A6%E3%81%AE%20g/gCmNormalUpright.png"><img src="/attach/%E8%A1%A8%E8%A8%98%E3%81%AE%E5%93%B2%E5%AD%A6/%E9%87%8D%E5%8A%9B%E5%8A%A0%E9%80%9F%E5%BA%A6%E3%81%AE%20g/gCmNormalUpright.png" alt=""></a></td><td style="text-align:center"><a href="/attach/%E8%A1%A8%E8%A8%98%E3%81%AE%E5%93%B2%E5%AD%A6/%E9%87%8D%E5%8A%9B%E5%8A%A0%E9%80%9F%E5%BA%A6%E3%81%AE%20g/gCmNormalItalic.png"><img src="/attach/%E8%A1%A8%E8%A8%98%E3%81%AE%E5%93%B2%E5%AD%A6/%E9%87%8D%E5%8A%9B%E5%8A%A0%E9%80%9F%E5%BA%A6%E3%81%AE%20g/gCmNormalItalic.png" alt=""></a></td><td style="text-align:center"><a href="/attach/%E8%A1%A8%E8%A8%98%E3%81%AE%E5%93%B2%E5%AD%A6/%E9%87%8D%E5%8A%9B%E5%8A%A0%E9%80%9F%E5%BA%A6%E3%81%AE%20g/gCmMathRoman.png"><img src="/attach/%E8%A1%A8%E8%A8%98%E3%81%AE%E5%93%B2%E5%AD%A6/%E9%87%8D%E5%8A%9B%E5%8A%A0%E9%80%9F%E5%BA%A6%E3%81%AE%20g/gCmMathRoman.png" alt=""></a></td><td style="text-align:center"><a href="/attach/%E8%A1%A8%E8%A8%98%E3%81%AE%E5%93%B2%E5%AD%A6/%E9%87%8D%E5%8A%9B%E5%8A%A0%E9%80%9F%E5%BA%A6%E3%81%AE%20g/gCmMathItalic.png"><img src="/attach/%E8%A1%A8%E8%A8%98%E3%81%AE%E5%93%B2%E5%AD%A6/%E9%87%8D%E5%8A%9B%E5%8A%A0%E9%80%9F%E5%BA%A6%E3%81%AE%20g/gCmMathItalic.png" alt=""></a></td></tr>
</tbody></table>

- txfontsの場合には，

    ```
    \usepackage[varg]{txfonts}
    ```

    と，varg オプションを指定すればよい．

<table><tbody>
<tr><td style="text-align:center">g</td><td style="text-align:center">\itshape g</td><td style="text-align:center">$\mathrm{g}$</td><td style="text-align:center">$g$</td></tr>
<tr><td style="text-align:center"><a href="/attach/%E8%A1%A8%E8%A8%98%E3%81%AE%E5%93%B2%E5%AD%A6/%E9%87%8D%E5%8A%9B%E5%8A%A0%E9%80%9F%E5%BA%A6%E3%81%AE%20g/gTxfontsVargNormalUpright.png"><img src="/attach/%E8%A1%A8%E8%A8%98%E3%81%AE%E5%93%B2%E5%AD%A6/%E9%87%8D%E5%8A%9B%E5%8A%A0%E9%80%9F%E5%BA%A6%E3%81%AE%20g/gTxfontsVargNormalUpright.png" alt=""></a></td><td style="text-align:center"><a href="/attach/%E8%A1%A8%E8%A8%98%E3%81%AE%E5%93%B2%E5%AD%A6/%E9%87%8D%E5%8A%9B%E5%8A%A0%E9%80%9F%E5%BA%A6%E3%81%AE%20g/gTxfontsVargNormalItalic.png"><img src="/attach/%E8%A1%A8%E8%A8%98%E3%81%AE%E5%93%B2%E5%AD%A6/%E9%87%8D%E5%8A%9B%E5%8A%A0%E9%80%9F%E5%BA%A6%E3%81%AE%20g/gTxfontsVargNormalItalic.png" alt=""></a></td><td style="text-align:center"><a href="/attach/%E8%A1%A8%E8%A8%98%E3%81%AE%E5%93%B2%E5%AD%A6/%E9%87%8D%E5%8A%9B%E5%8A%A0%E9%80%9F%E5%BA%A6%E3%81%AE%20g/gTxfontsVargMathRoman.png"><img src="/attach/%E8%A1%A8%E8%A8%98%E3%81%AE%E5%93%B2%E5%AD%A6/%E9%87%8D%E5%8A%9B%E5%8A%A0%E9%80%9F%E5%BA%A6%E3%81%AE%20g/gTxfontsVargMathRoman.png" alt=""></a></td><td style="text-align:center"><a href="/attach/%E8%A1%A8%E8%A8%98%E3%81%AE%E5%93%B2%E5%AD%A6/%E9%87%8D%E5%8A%9B%E5%8A%A0%E9%80%9F%E5%BA%A6%E3%81%AE%20g/gTxfontsVargMathItalic.png"><img src="/attach/%E8%A1%A8%E8%A8%98%E3%81%AE%E5%93%B2%E5%AD%A6/%E9%87%8D%E5%8A%9B%E5%8A%A0%E9%80%9F%E5%BA%A6%E3%81%AE%20g/gTxfontsVargMathItalic.png" alt=""></a></td></tr>
</tbody></table>

- (参考) txfontsの場合で，

    ```
    \usepackage{txfonts}
    ```

    と，デフォルトの場合は以下のように表示される．

<table><tbody>
<tr><td style="text-align:center">g</td><td style="text-align:center">\itshape g</td><td style="text-align:center">$\mathrm{g}$</td><td style="text-align:center">$g$</td></tr>
<tr><td style="text-align:center"><a href="/attach/%E8%A1%A8%E8%A8%98%E3%81%AE%E5%93%B2%E5%AD%A6/%E9%87%8D%E5%8A%9B%E5%8A%A0%E9%80%9F%E5%BA%A6%E3%81%AE%20g/gTxfontsNormalUpright.png"><img src="/attach/%E8%A1%A8%E8%A8%98%E3%81%AE%E5%93%B2%E5%AD%A6/%E9%87%8D%E5%8A%9B%E5%8A%A0%E9%80%9F%E5%BA%A6%E3%81%AE%20g/gTxfontsNormalUpright.png" alt=""></a></td><td style="text-align:center"><a href="/attach/%E8%A1%A8%E8%A8%98%E3%81%AE%E5%93%B2%E5%AD%A6/%E9%87%8D%E5%8A%9B%E5%8A%A0%E9%80%9F%E5%BA%A6%E3%81%AE%20g/gTxfontsNormalItalic.png"><img src="/attach/%E8%A1%A8%E8%A8%98%E3%81%AE%E5%93%B2%E5%AD%A6/%E9%87%8D%E5%8A%9B%E5%8A%A0%E9%80%9F%E5%BA%A6%E3%81%AE%20g/gTxfontsNormalItalic.png" alt=""></a></td><td style="text-align:center"><a href="/attach/%E8%A1%A8%E8%A8%98%E3%81%AE%E5%93%B2%E5%AD%A6/%E9%87%8D%E5%8A%9B%E5%8A%A0%E9%80%9F%E5%BA%A6%E3%81%AE%20g/gTxfontsMathRoman.png"><img src="/attach/%E8%A1%A8%E8%A8%98%E3%81%AE%E5%93%B2%E5%AD%A6/%E9%87%8D%E5%8A%9B%E5%8A%A0%E9%80%9F%E5%BA%A6%E3%81%AE%20g/gTxfontsMathRoman.png" alt=""></a></td><td style="text-align:center"><a href="/attach/%E8%A1%A8%E8%A8%98%E3%81%AE%E5%93%B2%E5%AD%A6/%E9%87%8D%E5%8A%9B%E5%8A%A0%E9%80%9F%E5%BA%A6%E3%81%AE%20g/gTxfontsMathItalic.png"><img src="/attach/%E8%A1%A8%E8%A8%98%E3%81%AE%E5%93%B2%E5%AD%A6/%E9%87%8D%E5%8A%9B%E5%8A%A0%E9%80%9F%E5%BA%A6%E3%81%AE%20g/gTxfontsMathItalic.png" alt=""></a></td></tr>
</tbody></table>

- (参考) PukiWiki + [mimeTeX](/mimeTeX/) では以下のように表示される．

<table><tbody>
<tr><td style="text-align:center">g</td><td style="text-align:center">&#39;&#39;&#39;g&#39;&#39;&#39;</td><td style="text-align:center">&amp;mimetex(\mathrm{g});</td><td style="text-align:right">&amp;mimetex(g);</td></tr>
<tr><td style="text-align:center">g</td><td style="text-align:center"><em>g</em></td><td style="text-align:center"><code>\mathrm{g}</code></td><td style="text-align:center"><code>g</code></td></tr>
</tbody></table>

### コメント {#g27ade79}

- 説明が分かりにくいので、画像を貼ってはどうでしょう。 --  2004-09-16 (木) 13:03:48
- 書き味ともに加工してみましたが，いかがですか？ --  2004-09-16 (木) 21:42:33
- その昔FAQでこの回答をした者です．久しぶりに読んだら分かりづらいなあ．．と思っておりました．ありがとうございます！とても分かりやすくなりましたね！ちなみに，，重力加速度をどちらの字形で示すのかという決まりは「無い」と思われます（あれ以来調べておりましたが，記述は見付かりませんでした）． -- momo 2004-09-16 (木) 23:31:15
- 上記の質問をしたものです．明確な答えがなかったのですが，再度の質問がしにくかったので，この際と思ってまとめてみました．褒めてもらってうれしいです（たぶん論点が少しずれてしまっていたのですよね）．あれ以来ずっと気にしていただいているのもうれしいです．私もそういう記事は見つけられずにいます． -- Kuroky 2004-09-16 (木) 23:53:55
- 単位記号はローマン体，変数記号（重力加速度を含め）は数式用イタリック体，重力加速度gと他の変数gを字形で区別するルールはない（がするのは自由），ということでしょうか -- 奥村 2004-09-20 (月) 20:05:14

[^1]: 今のところ重力加速度はどちらの字形で示すかの回答はない
