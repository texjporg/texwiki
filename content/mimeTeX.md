---
title: "mimeTeX"
url: "/mimeTeX/"
date: 2004-09-04T14:28:01Z
pukiwiki: "mimeTeX"
---

# mimeTeX

## mimeTeX {#oc02e052}

<!-- % このページもソースが汚いので（しかも環境依存でレイアウトが変わる），画像に置き換えた方がいいですね． - - アセトアミノフェン -->
<!-- % というわけで書き換えました（WebArchive に昔 mimeTeX で生成された gif 画像があったので、流用します）． - - アセトアミノフェン -->

[mimeTeX](http://www.forkosh.com/mimetex.html)
は LaTeX のサブセットで書かれた数式をインライングラフィック化するソフトです。

PukiWiki から使うには
[自作プラグイン/mimetex.inc.php - PukiWiki-official](http://pukiwiki.osdn.jp/?%E8%87%AA%E4%BD%9C%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3/mimetex.inc.php)
で公開されているプラグインを使います。
(mimetex.inc.php のオリジナルは [ \[io\] wiki \[Internet Archive\]](http://web.archive.org/web/20041014104405/130.54.22.201/~key/pukiwiki/?PukiWiki/key%A4%CE%B3%C8%C4%A5/mimetex) です。)

例えば

```
 #mimetex(\sqrt{x^2+y^2}=z^2)
```

と書けば

[![](/attach/mimeTeX/mimetex1.gif)](/attach/mimeTeX/mimetex1.gif)

のようになります。

```
インライン数式にも対応したようです。&mimetex(\sqrt{x^2+y^2}=z^2); のような具合に。
```

インライン数式にも対応したようです。[![](/attach/mimeTeX/mimetex2.gif)](/attach/mimeTeX/mimetex2.gif) のような具合に。
