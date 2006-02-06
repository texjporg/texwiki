---
title: "mimeTeX"
url: "/mimeTeX/"
date: 2004-09-04T14:28:01Z
pukiwiki: "mimeTeX"
---

# mimeTeX

[mimeTeX](http://www.forkosh.com/mimetex.html)
は LaTeX のサブセットで書かれた数式をインライングラフィック化するソフトです。

PukiWiki から使うには
[ \[io\] wiki](http://www.sato.kuis.kyoto-u.ac.jp/~key/pukiwiki/?PukiWiki%2Fkey%a4%ce%b3%c8%c4%a5%2Fmimetex)
で公開されているプラグインを使います。例えば

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

### imgTeX {#za7a547f}

中丸さん: [imgTeX](http://www.eaflux.com/imgtex/), [インタラクティヴに](http://www.eaflux.com/imgtex/interactive.html),  [PukiWikiプラグイン](http://www.eaflux.com/imgtex/sources/imgtex_inc_php.txt). cf.) [qa:33461](https://okumuralab.org/~okumura/texfaq/qa/33461.html), [qa:33504](https://okumuralab.org/~okumura/texfaq/qa/33504.html), [qa:33899](https://okumuralab.org/~okumura/texfaq/qa/33899.html)

### texvc用 {#v1c9afd6}

藤田さん: [pukiwiki + texvc で TeX 数式の書ける wiki](http://lucille.atso-net.jp/blog/?p=6)

### TeXプラグイン {#a3fcbcf8}

[TeXプラグイン](http://zenjiro.dyndns.org/wiki/pukiwiki/)
（元ネタは西尾泰和さんの[PukiWiki数式表示プラグイン](http://kanaya.aist-nara.ac.jp/Zope/member/nishio/japanese/memo/pukiwiki_mathmode/index_html)）
