---
title: "Web で数式"
url: "/Web で数式/"
date: 2015-01-16T22:40:55Z
pukiwiki: "Web で数式"
---

# Web で数式

## Web で数式 {#v9c19ee5}

Web 上で数式を表示するための各種方法をまとめておきます．
[TeX2img](/TeX2img/) などの画像化ツールを使用していったん PNG や SVG 形式の画像に変換し，アップロードするのも一つの手ですが，ここでは直接コマンドを書いて表示させる方法を考えます． <!-- 個別ページ「mimeTeX」から持ってきました． - - アセトアミノフェン (2015-01-17) -->

<em>TODO</em>：実際の利用例を募集します．実際に利用するにあたり注意すべき点（環境依存性・表示速度など）が分かると利用しやすいと思います． -- アセトアミノフェン (2015-04-22)

### mimeTeX {#w7d4afa0}

[mimeTeX - TeX Wiki](/mimeTeX/) も参照．

- [http://www.forkosh.com/mimetex.html](http://www.forkosh.com/mimetex.html)

### MathJax {#o195bffa}

- [http://www.mathjax.org/](http://www.mathjax.org/)
- [https://github.com/mathjax/MathJax/](https://github.com/mathjax/MathJax/)
- 利用例：[MathJax（v1.1）を使ってみた](http://tractatus-online.appspot.com/Math/MathJax.html)（MathJax/jsMath/MathML を同じソースで比較可能）

### KaTeX {#kf09ac9a}

[KaTeX - TeX Wiki](/KaTeX/) も参照．

- [http://khan.github.io/KaTeX/](http://khan.github.io/KaTeX/)

### mathTeX {#he6333d4}

- [http://www.forkosh.com/mathtex.html](http://www.forkosh.com/mathtex.html)

### imgTeX {#za7a547f}

- [http://www.eaflux.com/imgtex/](http://www.eaflux.com/imgtex/)
    - [インタラクティヴに](http://www.eaflux.com/imgtex/interactive.html)
    - [PukiWikiプラグイン](http://www.eaflux.com/imgtex/sources/imgtex_inc_php.txt)

cf.) [qa:33461](https://okumuralab.org/~okumura/texfaq/qa/33461.html), [qa:33504](https://okumuralab.org/~okumura/texfaq/qa/33504.html), [qa:33899](https://okumuralab.org/~okumura/texfaq/qa/33899.html)

### jsMath {#o7441380}

- [http://www.math.union.edu/~dpvc/jsMath/](http://www.math.union.edu/~dpvc/jsMath/)

varGammaも利用可とする方法

jsMath.js の mathchardef テーブル内に追加

```
   varGamma:     [0,1,0x00],
   varDelta:     [0,1,0x01],
   varTheta:     [0,1,0x02],
   varLambda:    [0,1,0x03],
   varXi:        [0,1,0x04],
   varPi:        [0,1,0x05],
   varSigma:     [0,1,0x06],
   varUpsilon:   [0,1,0x07],
   varPhi:       [0,1,0x08],
   varPsi:       [0,1,0x09],
   varOmega:     [0,1,0x0A],
```

### MathML {#ndc0f583}

- [http://washitake.com/MathML/](http://washitake.com/MathML/)

### tex.inc.php {#qfd69102}

- [http://abicky.net/pukiwiki/plugins/index.php?tex.inc.php](http://abicky.net/pukiwiki/plugins/index.php?tex.inc.php)
- [http://pukiwiki.osdn.jp/?%E8%87%AA%E4%BD%9C%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3/tex.inc.php](http://pukiwiki.osdn.jp/?%E8%87%AA%E4%BD%9C%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3/tex.inc.php)

### texvc {#te0254cd}

- [http://www.mediawiki.org/wiki/Texvc](http://www.mediawiki.org/wiki/Texvc)

### phpTeX {#nd0cba4b}

- [http://phptex.sourceforge.net/](http://phptex.sourceforge.net/)
- [http://sourceforge.net/projects/phptex/](http://sourceforge.net/projects/phptex/)

### phptex.inc {#ca665441}

- [このサイトの数式](http://oku.edu.mie-u.ac.jp/~okumura/stat/phptex.php)
- [LaTeX数式のweb表示方法（奥村晴彦先生方式）](http://www.makisima.org/v3/2011/09/06/web-latex-okumura/)

### Suim {#a6b583f5}

- [Suim - Web-based Input Method for Mathematics](http://suim.heroku.com/)

### Google Closure Library {#q729594e}

- [Google Closure Library](https://developers.google.com/closure/library/)
- 数式エディタデモがアーカイブ内 closure/goog/demos/editor/equationeditor.html にあります．

### 関連リンク {#l39ce401}

- [Ubuntu　Blog や Website で数式を表現](http://kurumatorajirou.blogspot.jp/2013/01/ubuntublog-website.html)
