---
title: "SafariNote"
url: "/SafariNote/"
date: 2004-09-04T20:08:15Z
pukiwiki: "SafariNote"
---

# SafariNote

[FrontPage](/)

> Safariで編集すると ? が ? に化けます

文字コードを utf8 にすると、Safari で半角の＼￥～等が文字化けしなくなります。

- cf. [http://www.sodan.ecc.u-tokyo.ac.jp/BTS/guest.cgi?project=FAQ&action=view_report&id=52](http://www.sodan.ecc.u-tokyo.ac.jp/BTS/guest.cgi?project=FAQ&action=view_report&id=52)

PukiWikiはEUC-JP決め打ちで作られているため面倒そうです。

[http://pukiwiki.sourceforge.jp/dev/index.php?PukiWiki%2F1.4%2FUTF-8%B2%BD](http://pukiwiki.sourceforge.jp/dev/index.php?PukiWiki%2F1.4%2FUTF-8%B2%BD)

そうですか... [http://pukiwiki.org/](http://pukiwiki.org/) が UTF-8 なので、最初から UTF-8 に対応しているのかと思いましたが、一筋縄ではいかないようですね。難しいですね。

それと，utf-8対応でないブラウザのことを考えると気が重い……

ずいぶん昔から問題になっていることだと思いますが，いつまで待ってもAppleでは直してくれそうにありませんね。

A5→5Cというマッピングも必要なようですね。

utf-8が読めない環境ってどれくらいありますか？

簡単にできそうならやってみたいと思います。いま情報収集中。

行き詰まってしまいました。^^; ぐしゃぐしゃになってしまったようです。^^; どなたか PHP5 + CVS版でうまくいったかたがおられましたら方法をお教えください。-- 奥村

どうもありがとうございます。私のほうでも何とか通ったみたいです。しかし，dagger がおかしい -- 奥村

しばらく実験してみましたが，記号類が化けるといった弊害が出ましたので，放り出してしまいました。-- 奥村

- Safari でのテスト ~ \ -- 奥村 2004-09-06 (月) 21:42:46

ただしSafariでは¥でなく\を使ってください。

- IEではどうなるかな -- 奥村 2004-09-06 (月) 22:32:31
- MacのIEでは普通に#commentからは書けますが編集すると化け化けになります ;\_; -- 奥村 2004-09-06 (月) 22:33:56

京ぽんから書き込んでいます。

- どうやらWin9x系統の旧型ブラウザではutf-8が駄目なようです。 -- 奥村 2004-09-07 (火) 08:20:43
