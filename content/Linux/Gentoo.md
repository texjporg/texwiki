---
title: "Linux/Gentoo"
url: "/Linux/Gentoo/"
date: 2005-11-09T19:19:31Z
pukiwiki: "Linux/Gentoo"
---

# Linux/Gentoo

Gentoo Linuxに日本語TeX環境を構築するためメモです。とりあえずあまりいじらずに、日本語が通って、日本語が閲覧できることを目標にしています。

以下、適当に日本語環境が整っているものとします。インストールするものは、ptex、dvipdfmx、CJK対応のGhostscript、日本語版Adobe Readerです。

まず、Adobe Readerの日本語版がインストールされるように、/etc/make.confに

```
LINGUAS='ja'
```

を書き込みます。(大抵、日本語デスクトップ環境を構築するときに書き込んでいる設定です。) 一気にemergeします。(prosperとpsutilsはおまけです。)

```
# emerge ptex dvipdfmx ghostscript acroread prosper psutils
```

以前は、xdvikをptexと別々にemergeしないといけませんでしたが、現在ではptexに含まれています。Ghostscriptは、ESP ghostscript 7.07を入れます。8.15や8.16では、cjkのパッチがデフォルトで当たらないようです。

次に、dvipdfmxでちゃんと日本語が通るようにします。

```
# ln -s /usr/share/ghostscript/Resource /usr/share/texmf/dvipdfm/
# mktexlsr
```

を実行します。これをやらないで、日本語を含んだdviを$ dvipdfmx hogehoge.dviとすると、

```
** ERROR ** Could not find encoding file "H".
```

といった有名なエラーが出ます。

***

- すでにある程度の環境が整っているマシンでためした結果ですが，ptetex のコンパイルは正常に終了します． --  2005-11-10 (木) 21:55:12
- 加えてebuildjpのjsclassesをemergeしてみたのですがtetexとぶつかってしまいます。どなたかちゃんとできたかたおられますか？ --  2005-12-06 (火) 14:03:26
- ここの記事を書いた者です。当方の環境では、ptex-3.1.5.ebuildとjsclasses-051026.ebuildでうまくいっています。とりあえず、ebuildを読んでみて依存関係を自分の環境にあうように修正されてはどうでしょうか？ --  2005-12-13 (火) 18:33:30
- 返事おくれました。ebuildjpを更新したら普通にインストールされました。 --  2006-01-10 (火) 22:06:47
- ebuildjpでjsclassesを入れようとすると、[http://oku.edu.mie-u.ac.jp/%7Eokumura/jsclasses/jsclasses-051026.zipを取りに行ったときに403エラーで止まってしまいます](<http://oku.edu.mie-u.ac.jp/%7Eokumura/jsclasses/jsclasses-051026.zipを取りに行ったときに403エラーで止まってしまいます>)。一時的な問題でしょうか。 --  2006-01-18 (水) 08:36:13
- すみません、数時間経って再びemerge したところ無事導入できました。お騒がせしてすみません。 --  2006-01-18 (水) 10:21:53
