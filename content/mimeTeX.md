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
[ここ](http://www.sato.kuis.kyoto-u.ac.jp/~key/pukiwiki/?PukiWiki%2Fkey%a4%ce%b3%c8%c4%a5%2Fmimetex)
で公開されているプラグインを使います。例えば

```
 #mimetex(\sqrt{x^2+y^2}=z^2)
```

と書けば
#mimetex(\sqrt{x^2+y^2}=z^2)
のようになります。

```
インライン数式にも対応したようです。&mimetex(\sqrt{x^2+y^2}=z^2); のような具合に。
```

インライン数式にも対応したようです。{{< katex >}}\sqrt{x^2+y^2}=z^2{{< /katex >}} のような具合に。

### imgTeX {#za7a547f}

中丸さん: [imgTeX](http://www.on.cs.keio.ac.jp/~maru/imgtex/), [インタラクティヴに](http://www.on.cs.keio.ac.jp/~maru/imgtex/interactive.html). cf.) [qa:3461](https://okumuralab.org/~okumura/texfaq/qa/3461.html), [qa:33504](https://okumuralab.org/~okumura/texfaq/qa/33504.html)
