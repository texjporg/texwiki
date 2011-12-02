---
title: "mimeTeX"
url: "/mimeTeX/"
date: 2004-09-04T14:28:01Z
pukiwiki: "mimeTeX"
---

# mimeTeX

## mimeTeX {#oc02e052}

[mimeTeX](http://www.forkosh.com/mimetex.html)
は LaTeX のサブセットで書かれた数式をインライングラフィック化するソフトです。

PukiWiki から使うには
[自作プラグイン/mimetex.inc.php - PukiWiki-official](http://pukiwiki.sourceforge.jp/?%E8%87%AA%E4%BD%9C%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3/mimetex.inc.php)
で公開されているプラグインを使います。
(mimetex.inc.php のオリジナルは [ \[io\] wiki \[Internet Archive\]](http://web.archive.org/web/20041014104405/130.54.22.201/~key/pukiwiki/?PukiWiki/key%A4%CE%B3%C8%C4%A5/mimetex) です。)

例えば

```
 #mimetex(\sqrt{x^2+y^2}=z^2)
```

<!-- 閉じる中括弧 } は必要だと思うが -->

と書けば
#mimetex(\sqrt{x^2+y^2}=z^2)
のようになります。

```
インライン数式にも対応したようです。&mimetex(\sqrt{x^2+y^2}=z^2); のような具合に。
```

インライン数式にも対応したようです。{{< katex >}}\sqrt{x^2+y^2}=z^2{{< /katex >}} のような具合に。

## Web上で数式を表示するための各種方法 {#v9c19ee5}

### [mimeTeX](http://www.forkosh.com/mimetex.html) {#w7d4afa0}

上記の説明です。

### MathJax {#o195bffa}

- [http://www.mathjax.org/](http://www.mathjax.org/)
- [https://github.com/mathjax/MathJax/](https://github.com/mathjax/MathJax/)

### mathTeX {#he6333d4}

> [http://www.forkosh.com/mathtex.html](http://www.forkosh.com/mathtex.html)

### imgTeX {#za7a547f}

中丸さん: [imgTeX](http://www.eaflux.com/imgtex/), [インタラクティヴに](http://www.eaflux.com/imgtex/interactive.html),  [PukiWikiプラグイン](http://www.eaflux.com/imgtex/sources/imgtex_inc_php.txt). cf.) [qa:33461](https://okumuralab.org/~okumura/texfaq/qa/33461.html), [qa:33504](https://okumuralab.org/~okumura/texfaq/qa/33504.html), [qa:33899](https://okumuralab.org/~okumura/texfaq/qa/33899.html)

### texvc用 {#v1c9afd6}

藤田さん: [pukiwiki + texvc で TeX 数式の書ける wiki](http://lucille.atso-net.jp/blog/?p=6)

### jsMath {#o7441380}

> [http://www.math.union.edu/~dpvc/jsMath/](http://www.math.union.edu/~dpvc/jsMath/)

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

> [http://washitake.com/MathML/](http://washitake.com/MathML/)

### tex.inc.php {#qfd69102}

> [http://pukiwiki.sourceforge.jp/?%E8%87%AA%E4%BD%9C%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3/tex.inc.php](http://pukiwiki.sourceforge.jp/?%E8%87%AA%E4%BD%9C%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3/tex.inc.php)

> [http://abicky.site90.com/pukiwiki/index.php?Plugins/tex.inc.php](http://abicky.site90.com/pukiwiki/index.php?Plugins/tex.inc.php)

### texvc {#te0254cd}

- [texvc](http://www.mediawiki.org/wiki/Texvc)

### phpTeX {#nd0cba4b}

- [phptex](http://phptex.sourceforge.net/)
- [phpTeX](http://sourceforge.net/projects/phptex/)

### phptex.inc {#ca665441}

- [このサイトの数式](http://oku.edu.mie-u.ac.jp/~okumura/stat/phptex.php)
- [LaTeX数式のweb表示方法（奥村晴彦先生方式）](http://www.makisima.org/v3/2011/09/06/web-latex-okumura/)

### Suim {#a6b583f5}

- [Suim - Web-based Input Method for Mathematics](http://suim.jp/)
