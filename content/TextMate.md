---
title: "TextMate"
url: "/TextMate/"
date: 2012-08-10T21:32:00Z
pukiwiki: "TextMate"
---

# TextMate

## [TextMate](http://macromates.com/) {#p6e57fff}

<img src="http://upload.wikimedia.org/wikipedia/en/thumb/a/a2/TextmateIcon.png/240px-TextmateIcon.png" alt="TextMate" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## TextMate について {#j770ed33}

TextMate はテキストエディタです．<br>

- [TextMate](http://macromates.com/)
- [textmate/textmate · GitHub](https://github.com/textmate/textmate)
- [trunk/dports/editors/textmate2/Portfile](https://trac.macports.org/browser/trunk/dports/editors/textmate2/Portfile)

### 動作環境 {#v52c157b}

OS X 10.8, 10.7

### License {#u325ac56}

TextMate 2 はフリーソフトウェアでライセンスは [GPLv3](https://github.com/textmate/textmate/blob/master/LICENSE) です．<br>
TextMate 1 はシェアウェアです．<br>

### リリース情報/ChangeLog {#wdfc46c3}

[Tags · textmate/textmate · GitHub](https://github.com/textmate/textmate/tags)<br>
[Commit History · textmate/textmate · GitHub](https://github.com/textmate/textmate/commits/)<br>

を参照．<br>

## ダウンロード {#h1cc4e60}

- [Downloads · textmate/textmate · GitHub](https://github.com/textmate/textmate/downloads)

## 不具合 {#r6935eb2}

- [Issues](https://github.com/textmate/textmate/issues)

## TextMate で LaTeX {#s39b8563}

- [Newest &#39;textmate&#39; Questions - TeX - LaTeX](http://tex.stackexchange.com/questions/tagged/textmate)
- [TextMate support for LaTeX (latex.tmbundle)](https://github.com/textmate/latex.tmbundle)
- [Textmate 2 &amp; LaTeX](http://old.nabble.com/Textmate-2---LaTeX-td34611014.html)
    <!-- -[[How and Why to use TextMate for LaTeX:http://www.astrobetter.com/how-and-why-to-use-textmate-for-latex/]] -->

- [http://www.astrobetter.com/wiki/tiki-index.php?page=TextMate#LaTeX_Bundle](http://www.astrobetter.com/wiki/tiki-index.php?page=TextMate#LaTeX_Bundle)
    <!-- -[[ConTeXt Bundle for TextMate:http://wiki.contextgarden.net/ConTeXt_Bundle_for_TextMate]] -->

- [context.tmbundle](https://github.com/pgundlach)
- [TextMate ConTeXt Bundle](https://bitbucket.org/bernhard/textmate-context-bundle)
- [TextMate LaTeX Extension Bundle](http://www.governatori.net/TextMate/)
- [TextMateでLaTeX](http://d.hatena.ne.jp/eggxile/20091217/1261060064)

### latexmk {#j8976683}

- [latexmkの自動更新でプレビューも更新させる](http://ototorosama.hatenablog.com/entry/2013/02/04/224728)

```
$ latexmk -pvc hoge.tex
```

***

&#x7e;/.latexmkrc

***

```
#!/usr/bin/env perl
$latex = 'platex -synctex=1 -interaction=nonstopmode';
$bibtex = 'pbibtex';
$makeindex = 'mendex';
$dvipdf = 'dvipdfmx %O -o %D %S';
$dvips = 'dvips %O -z -f %S | convbkmk -g > %D';
$ps2pdf = 'ps2pdf %O %S %D';
$pdf_mode = 3;
$pdf_update_method = 4;
$pdf_update_command = 'open -a Preview %S;sleep 0.1;mate';
```

***

## 関連リンク {#ue5b58cc}

- [TextMate2をビルドしてインストールする](http://treeapps.hatenablog.com/entry/2013/01/15/TextMate2%E3%82%92%E3%83%93%E3%83%AB%E3%83%89%E3%81%97%E3%81%A6%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%81%99%E3%82%8B)
- [Let us build a TextMate](http://chajka.from.tv/osx/textmate.html)
- [TextMate 2をソースからコンパイルしてみる](http://blog.f13.jp/post/29942351173/textmate-2)
- \[[Mac\] オープンソース化なテキストエディタ「TextMate 2」をビルドした手順メモ](http://tools4hack.santalab.me/howto-oss-textmate-build.html)
- [TextmateがOSS化されました](http://d.hatena.ne.jp/rochefort/20120810/p1)
- [TextMateがOSS化した件について](http://takkii.hatenablog.com/entry/2012/08/11/113939)
- [TextMate2がオープンソース化](http://blog.is0.me/archives/155)
- [Mac OS X向けテキストエディタ「TextMate 2」、オープンソース化される](http://sourceforge.jp/magazine/12/08/10/0423208)
- [TextMate 2のオープンソース化](http://ystea.org/blog/2012/08/textmate-2%E3%81%AE%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%82%BD%E3%83%BC%E3%82%B9%E5%8C%96/)
- [フリーのプログラミング用テキストエディタTextMate2](http://d.hatena.ne.jp/hjym_u/20120815/1345035066)
- [TextMateがオープンソースになったのでMountain Lionに入れてみた](http://daipresents.com/2012/textmate%E3%81%8C%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%82%BD%E3%83%BC%E3%82%B9%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%9F%E3%81%AE%E3%81%A7mountain-lion%E3%81%AB%E5%85%A5%E3%82%8C%E3%81%A6%E3%81%BF/)
- [My next text editor](http://www.marco.org/2012/08/10/next-text-editor)
