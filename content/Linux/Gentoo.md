---
title: "Linux/Gentoo"
url: "/Linux/Gentoo/"
date: 2005-11-09T19:19:31Z
pukiwiki: "Linux/Gentoo"
---

# Linux/Gentoo

\[FIXME\] 以下の内容は少し古いですので、ご注意下さい。
[ptetex3](http://www.nn.iij4u.or.jp/~tutimura/tex/ptetex.html) 
をインストールされるのが良いです。
ptetex3 の ebuild もそのうち準備しようと思っています。 <!-- もう ptetex3 の ebuild を書いておられる方はいますでしょうか？ -->

## 日本語TeX環境の構築 {#da9a03a1}

Gentoo Linux に日本語 TeX 環境を構築するためメモです。
とりあえずあまりいじらずに、日本語が通って、
日本語が閲覧できることを目標にしています。

以下、適当に日本語環境が整っているものとします。
インストールするものは、ptex、dvipdfmx、CJK対応の Ghostscript、
日本語版 Adobe Reader です。

まず、Adobe Reader の日本語版がインストールされるように、/etc/make.conf に

```
LINGUAS='ja'
```

を書き込みます。
(大抵、日本語デスクトップ環境を構築するときに書き込んでいる設定です。) 
一気にemergeします。（prosper と psutils はおまけです。)

```
# emerge ptex dvipdfmx ghostscript acroread prosper psutils yatex
```

以前は、xdvik を ptex と別々に emerge しないといけませんでしたが、
現在では ptex に含まれています。
Ghostscript は、ESP ghostscript 7.07 を入れます。
8.15 や 8.16 では、cjk のパッチがデフォルトで当たらないようです。

次に、dvipdfmx でちゃんと日本語が通るようにします。

```
# ln -s /usr/share/ghostscript/Resource /usr/share/texmf/dvipdfm/
# mktexlsr
```

を実行します。
これをやらないで、日本語を含んだdviを $ dvipdfmx hogehoge.dvi とすると、

```
** ERROR ** Could not find encoding file "H".
```

といった有名なエラーが出ます。

## jsclasses（新日本語ドキュメントクラス）のインストール {#ta33e375}

ebuildjp 内の dev-tex/jsclasses にあります。（ebuildjp の設定は、下の「【参考】ebuildJP を使う」を参照して下さい。）

基本的に、

```
# emerge jsclasses
```

をするだけでよいのですが、現在ftp.ascii.co.jpのサーバへの接続ができないようで、jis.tar.gzが取得できません。仕方なく、他のミラーサイトから取ってきます。たとえば、Ringサーバーなど。

```
http://www.ring.gr.jp/pub/text/TeX/ascii-ptex/jvf/jis.tar.gz
```

jis.tar.gzをダウンロードし、/usr/portage/distfiles へ置きます。その後に、# emerge jsclassesを実行してください。 

## emacs &lt;-> xdvi との相互ジャンプ {#q302e62f}

/usr/share/texmf/xdvi/XDvi に

```
XDvi*editor: emacsclient --no-wait +%l %f
```

を追加します。（.Xdefaults や .Xresources に書いても構わないのでしょうけど。）
/usr/share/emacs/site-lisp/xdvik を作成して、
この中に以下の [xdvi-search.el](http://xdvi.sourceforge.net/xdvi-search.el) をダウンロードした上で、入れてください。
（Vine Linux 3.2 xdvik version 22.40y1 j1.21 などから拝借しても構いません。）
xdvi-search.el が入手困難な場合は、Google のキャッシュ [xdvi-search.el](http://72.14.235.104/search?q=cache:JvdfmLEki24J:xdvi.sourceforge.net/xdvi-search.el+xdvi-search.el&hl=ja&ct=clnk&cd=1&inlang=ja) から引っ張ってきてください。 <!-- xdvi のバージョンによって、xdvi-search.el が若干異なるようです。 --> <!-- なぜかわかりませんが、最近 http://xdvi.sourceforge.net/ に接続ができません。 --> <!-- できれば、wiki 上に xdvi-search.el のスクリプトを置いていただけると有り難いです。 -->

次に、.emacs に以下のように書き込みます。

```
;;; TeX src-special のための設定
(server-start) ; emacsclient 起動のために必要
(require 'xdvi-search) ; emacs から xdvi へのジャンプのために必要
(custom-set-variables
 '(server-switch-hook (quote (raise-frame)))) ; 窓を上に
(custom-set-faces)
(add-hook 'yatex-mode-hook
           '(lambda ()
              (define-key YaTeX-mode-map "\C-c\C-j" 'xdvi-jump-to-line)))
```

以上で、emacs &lt;-> xdvi で互いにジャンプし合います。
もちろん、コンパイルするときに -src を付け忘れないでください。

## 【参考】ebuildJPを使う {#gc792193}

/etc/make.confに以下を追加します。

```
PORTDIR_OVERLAY_JP="/usr/local/portagejp"
PORTDIR_OVERLAY="/usr/local/portagejp /usr/local/myportage"
FEATURES="digest"
```

/usr/local/myportageは、僕の個人的なebuildを格納しているところです。
gentoolkit-devをemergeします。

```
# emerge gentoolkit-dev
```

/etc/gensync/ebuildjp.syncsourceを作成して、以下を書き込む。

```
id="ebuildjp"
description="GentooJP ebuild project source"
rsync="rsync://ebuild.gentoo.gr.jp/gentoojp-portage"
overlay="/usr/local/portagejp"
```

gensyncを実行してツリーの取得します。

```
# gensync ebuildjp
```

以上で、準備は終わりです。あとは、いつもどおり、

```
# emerge hogehoge
```

とすれば、hogehogeのパッケージがemergeできます。 

## 関連リンク {#ld62f64f}

- [Gentoo's texlive の現況](http://blogs.yahoo.co.jp/igproj_fusion/12433264.html)\]
- [texlive2010 on Gentoo](http://blogs.yahoo.co.jp/igproj_fusion/10026283.html)
- [GentooにTeX環境をインストールしてみた](http://d.hatena.ne.jp/jouzima/20101118/1290092164)

***

- すでにある程度の環境が整っているマシンでためした結果ですが，ptetex のコンパイルは正常に終了します． --  2005-11-10 (木) 21:55:12
- 加えてebuildjpのjsclassesをemergeしてみたのですがtetexとぶつかってしまいます。どなたかちゃんとできたかたおられますか？ --  2005-12-06 (火) 14:03:26
- ここの記事を書いた者です。当方の環境では、ptex-3.1.5.ebuildとjsclasses-051026.ebuildでうまくいっています。とりあえず、ebuildを読んでみて依存関係を自分の環境にあうように修正されてはどうでしょうか？ --  2005-12-13 (火) 18:33:30
- 返事おくれました。ebuildjpを更新したら普通にインストールされました。 --  2006-01-10 (火) 22:06:47
- ebuildjpでjsclassesを入れようとすると、[http://oku.edu.mie-u.ac.jp/%7Eokumura/jsclasses/jsclasses-051026.zipを取りに行ったときに403エラーで止まってしまいます](<http://oku.edu.mie-u.ac.jp/%7Eokumura/jsclasses/jsclasses-051026.zipを取りに行ったときに403エラーで止まってしまいます>)。一時的な問題でしょうか。 --  2006-01-18 (水) 08:36:13
- すみません、数時間経って再びemerge したところ無事導入できました。お騒がせしてすみません。 --  2006-01-18 (水) 10:21:53
- ln ではだめで、 texmf.cnf を修正しないと dvipdfmx でコケてしまうのはうちだけ? --  2006-02-17 (金) 01:00:42
- ghostscript-esp-7.07.1-r10 でないと日本語PSダメです．8.xはespでもgnuでもはまります．dvipdfmxはls -s ... と mktexlsrでうまく通るようになりました． --  2006-03-01 (水) 04:21:05
- 最近emergeして、上のドキュメントを参照にdvipdfmxなどは正常に動くようになったのですが、xdviでの表示は日本語が ・ になってしまいます。 -- 1152149968 2006-07-06 (木) 10:39:28
- 「\[[gentoojp-users:01784\] xdviの文字化け](http://ml.gentoo.gr.jp/users/200607.month/1784.html)」の件ですね．パッケージャーのusataさんが，メーリングリストにてコメントをしておられます（\[[gentoojp-users:01785\]](http://ml.gentoo.gr.jp/users/200607.month/1785.html)参照）．原因はXがモジュラー化されたからのようです．しばらくの間は混乱がありそうですね．（[モジュラー化されたXへの移行手引き](http://www.gentoo.org/proj/ja/desktop/x/x11/modular-x-howto.xml)参照．）  -- munepi 2006-07-06 (木) 23:24:37
- お返事ありがとうございます。メーリングリストのほうも確認しました。気長に待っておくことにします。 -- 1152205770 2006-07-07 (金) 02:09:30
- とりあえず回避策としては，/etc/portage/package.mask に >=x11-base/xorg-x11-6.9 を書いておけばよいですね．（おまけで，>=app-text/ghostscript-eps-7.07 も追加しておくとよいかもしれません．grepでebuildを調べただけですが，8.15でもcjkのパッチが当たっていないようです．もしかして，コミットされた！？） -- munepi 2006-07-07 (金) 02:44:22
- 解決したようです．（\[[gentoojp-users:01790\]](http://ml.gentoo.gr.jp/users/200607.month/1790.html)，\[[gentoojp-users:01805\]](http://ml.gentoo.gr.jp/users/200607.month/1805.html)参照．） -- munepi 2006-07-12 (水) 01:12:59
- 最新版 ghostscript-esp 8.15 では、emerge 中に digest-ghostscript-esp-7.07.1-r8::gs7.07.1-cjk.diff.bz2 となっているので、問題なく日本語が通ります。 -- 1155954101 2006-08-19 (土) 11:21:41
- まだ、>=app-text/ghostscript-eps-7.07 の方が無難かもしれません。 -- 1157394119 2006-09-05 (火) 03:21:59
- 遅くなりましたが、『emacs &lt;-> xdvi との相互ジャンプ』を書きました。 -- munepi 2006-11-06 (月) 01:40:17
- 自分だけかもしれないですけど、/usr/share/texmf/fonts/map/dvipdfm/cid-x.mapを/usr/share/texmf/dvipdfm/config/にコピーしてupdmapを実行してやらないと、dvipdfmxを使ったときに怒られました。 -- いも 2007-06-21 (木) 14:07:02
