---
title: "BibTeX関連ツール"
url: "/BibTeX関連ツール/"
date: 2004-09-15T20:51:30Z
pukiwiki: "BibTeX関連ツール"
---

# BibTeX関連ツール

## BibTeX 関連ツール {#v6a96b9b}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## BibTeX 用の文献管理ソフト {#w7ec403f}

|  名前  |  動作条件  |  説明  |
|---|---|---|
| [Zotero](https://www.zotero.org/) | Firefox, Windows, OS X, Linux | フリーソフトウェア． |
|  [JabRef](http://jabref.sourceforge.net)  | Java  | BibTeXファイル編集ソフト．日本語の読込書込OK，検索，PDFとの連携，ファイルごとにタブ化され，異なるファイル間でエントリをコピー＆ペーストできる．文献リストをhtmlへエクスポートでき，[JabRefによるBibTeX文献管理とJab2HTML](http://keijisaito.info/arc/biblio/jabref_jbib.htm)のJab2HTMLを用いると，より詳しい情報の入った文献リストhtmlが作成できる． |
| [QRef](http://members3.jcom.home.ne.jp/qref/) | Windows<br>OS X<br>Linux | フリーソフトウェア．文献をインターネット経由で収集，データベース管理，文献引用を自動化．[LaTeXのサポート](http://members3.jcom.home.ne.jp/qref/html/latex.htm) |
|  [BibDesk](http://bibdesk.sourceforge.net/)  | OS X |  BibTeXファイル編集ソフト．検索機能やBibTeXエントリとPDFを関連づける機能も持っているので，簡易的な論文データベースを構築できます  |
|  [KBibTeX](http://home.gna.org/kbibtex/) |  KDE  | KDE 用の BibTeX エディタ． |
|  [Mendeley](http://www.mendeley.com/)  |  Web ブラウザ, Windows, OS X, Linux  | 文献管理ソフト |
| [BibTool](http://www.gerd-neugebauer.de/software/TeX/BibTool/index.en.html) |   | .bib ファイルの管理ソフト．[CTAN](https://mirror.ctan.org/biblio/bibtex/utils/bibtool/) |
|  [Tellico](http://tellico-project.org/)  |  KDE >= 4, Qt >= 4, libxml2, libxslt1 >= 1.0.19  |  KDE用の蔵書管理ソフト．データファイルは独自の形式だが，bibファイルを含むいろいろな形式をインポートエキスポートできる． |
|  [Xfbib](http://goodies.xfce.org/projects/applications/xfbib) |  Xfce  | Xfce 用のLightweight な BibTeX エディタ． |
| [Pybliographer](http://pybliographer.org/) | gtk python | 多機能な書誌データベース管理ツール．PubMedなど文献データベースにアクセスし自動検索・ダウンロード機能，著者別HTMLを出力など機能がてんこ盛り． |

## bib ファイルの作成編集支援ツール {#t7b99d07}

|  名前  |  動作条件  |  説明  |
|---|---|---|
| bibtex.el  |  emacs  |  文献の効率的入力を支援 |
| [reftex.el](http://www.gnu.org/software/auctex/reftex.html)  |  emacs  |  LaTeX文書とbibファイルの連携機能を提供 |
| [Ebib](http://joostkremers.github.io/ebib/) | emacs | emacs用のBibTeXデータベースマネージャ．複数のbibファイルを同時に操作できる． |
|  bibfind  | perl | bibファイルの中を検索  |
|  bibindex  | UNIX | bibファイルをbixファイルに変換．bixファイルの中を検索  |
|  bible  | windows | bibファイル作成  |
|  bibextract  | UNIX | bibファイルから検索条件に合致したエントリを抽出  |
|  bibsort  | UNIX  | .bibファイルの中の文献データをsortするプログラム．emacsのBiBTeXモードのM-x bibtex-sort-bufferよりの断然速い  |
| [xbibfile](https://mirror.ctan.org/biblio/bibtex/utils/xbibfile/) | gtk+ | .bib ファイルの作成・検索などを対話的に行う GUI プログラム．日本語が通らない． |
| [tkbibtex](https://mirror.ctan.org/biblio/bibtex/utils/tkbibtex/) | tcl/tk | .bib ファイル作成編集プログラム．日本語表示 OK だが，atokx では入力できない． |
| [lookbibtex](https://mirror.ctan.org/biblio/bibtex/utils/lookbibtex/) |   | .bib ファイル内の検索と置換 |
| [bibcursed](http://sourceforge.net/projects/bibcursed/) | ncurses | .bibファイル編集ソフト．ncursesを利用したインターフェイスで非常に高速に入力できる．日本語OK |
| [BibFile Editor](http://www.h7.dion.ne.jp/~yochian/macro.htm) | Windows95 | 簡易エディタ． |
| [bibclean](http://ftp.math.utah.edu/pub//bibclean/) | unix | .bibファイルの文法チェックや整形を行うプログラム．日本語可． |

[Emacs](/Emacs/) を使用する場合は，bibtex-mode (bibtex.el) が断然効率的です．<br>
日本語文献では yomi が欲しいので，&#x7e;/.emacs.d/init.el に，

```
(setq bibtex-user-optional-fields
 '(("annote" "Personal annotation (ignored)")
 ("yomi" "Yomigana")
 ("location" "where it is (ignored)")
 ("memo" "Memorundum (ignored)")
))
```

と設定しておくとよいでしょう．

## BibTeX 形式への変換ツール（インポート） {#t7366eb3}

|  名前  |  動作条件  |  説明  |
|---|---|---|
|  [isi](http://isi-rb.rubyforge.org/)  | Ruby | [ISI Web of Science](http://www.isiknowledge.com) の検索結果（タグつきのテキストファイル）をBibTeX書式に変換．旧名isi.rbまたはisi2bibtex.rb．ライブラリとしても機能し，ある特定の形式に変換するプログラムを書くときにも便利． |
|  ams2bib  | Unixなど  | AmSTeX文献をBibTeX形式に変換  |
| [medlinebib](http://www.lecb.ncifcrf.gov/~toms/delila/medlinebib.html) | UNIX? | MEDLINE形式データのインポート |
| [ichu2bibtex.pl](http://www2.hyo-med.ac.jp/~tanimura/Downloads/ichu2bibtex.pl.html) | perl | 和文医学文献データベースである医学中央雑誌の出力ファイルをBibTeX形式に変換するプログラム |
| [rfc2bib](https://mirror.ctan.org/biblio/bibtex/utils/rfc2bib/) | awk | rfc-index.txt を BibTeX 形式に変換 |
| [refer-tools](https://mirror.ctan.org/biblio/bibtex/utils/refer-tools/) | perl | refer 形式を BibTeX 形式に変換 |
|  [r2bib](http://tug.ctan.org/tex-archive/biblio/bibtex/utils/r2bib)  |   |  referからBibTeXに変換するツールだが，[EndNoteに対応した](http://www.mail-archive.com/ctan-ann@dante.de/msg00062.html)．8-bit Windows 文字コード(具体的な名称は不明)をLaTeX風に書き換えてくれるらしい．  |
| [Writer2BibTeX](http://writer2latex.sourceforge.net/) | Java, LibreOffice/Apache OpenOffice | Writer文書から文献情報を抜き出し，BibTeX形式で保存するLibreOffice/Apache OpenOfficeのマクロ |
| [mathsci2bibtex](https://mirror.ctan.org/help/Catalogue/entries/mathsci2bibtex.html) | perl | MathSciからBibTeXへの変換 |
| [mathscinet](http://tug.ctan.org/tex-archive/biblio/bibtex/utils/mathscinet) |   | MathSciNetからBibTeX形式に変換． |
| [stdinRIS2bib.pl ris2bib.pl](http://marc.herbert.free.fr/refdb/) | perl | RIS形式をBibTeX形式へ変換する．[ris2bib](http://www.ecst.csuchico.edu/~jacobsd/bib/archives/ris2bib)が正常に動作しない最近の環境でもOK．キーは自分でつける必要あり．出力されたbibファイルは，bibcleanに通した方がよいかも．ris2bib.plはstdinRIS2bib.plから内部的に呼び出されるので同一ディレクトリにおいておくこと．<br>【使い方】$ cat risファイル ｜ stdinRISbib.pl > bibファイル <br> T1やABをそれぞれtitleやabstractにするには，ris2bib.plにそれらの定義を追加する必要がある． |
| [Bibutils](http://www.scripps.edu/~cdputnam/software/bibutils/) | なし | さまざまな形式の文献データをXML経由でBib形式に変換する．含まれるコマンドは，bib2xml, copac2xml, end2xml, isi2xml, med2xml, modsclean, ris2xml, xml2bib, xml2end, xml2risがあり，UNIX(SunOS, IRIX)版，Linux版，OSX版，Windows版などが用意されている．<br>【利用例】$ ris2xml risファイル｜xml2bib > bibファイル |
| [mab2bib](http://texcatalogue.sarovar.org/entries/mab2bib.html) |  Python  |   Simple Python scripts to convert MAB bibliography files into BibTeX and UTF-8 encoded text files into ASCII with LaTeX codes  |
| [ama2bib](http://mytexpert.osdn.jp/index.php?ama2bib) |  Perl  |  [Amazon Web Service](http://www.amazon.co.jp/exec/obidos/subst/associates/join/webservices.html/249-1233918-9751503)の検索結果をBibTeX形式に変換するスクリプト |

### Web 上で提供されている BibTeX 出力サービス {#o3a13db0}

BibTeX 形式の出力がある Web アプリを公開しているサイトです．

- [Google Scholar](http://scholar.google.com/) \[#ydd7d667\]
    - [BibTeX文献情報のWeb検索](http://keijisaito.info/arc/bibtex/get_bib.htm#getgoo)

- [Lead2Amazon](http://lead.to/amazon/jp/) \[#x7babcbd\]
    - [Amazonのカスタマイズ検索（Lead2Amazon）](http://lead.to/amazon/jp/search/use.htm)
- [Lead2Amazonの出力：BibTeX文献情報](http://lead.to/amazon/jp/search/output.htm#bibtex)

- [PubMed](http://pubmed.gov) \[#h4890ebf\]
    - [TeXMed - a BibTeX interface for PubMed](http://www.sbg.bio.ic.ac.uk/~mueller/TeXMed/)
    - [An alternative interface to the PubMed medical literature database](http://www.pmbrowser.info/)
    - [PM2BibTex](http://misshie.jp/pm2bibtex/)
        PubMed IDをBibTexエントリーに変換するWebツール．BioRubyの機能をそのまま使いました．FireFoxのQuick Serch機能と[組み合わせると](http://misshie.jp/iowa/index.php?pm2bibtex)それなりに便利に使えるのではないでしょうか．

- [Web of Science](http://wos.consortium.ch/) \[#w19853cd\]
    - [wos2bib](http://iacweb.ethz.ch/staff/maeder/wos2bib.php)

- [CiteULike](http://jp.citeulike.org/) \[#e360efa9\]
    - [export](http://jp.citeulike.org/export.adp)

- [Makino Takaki's Page (.ja)](http://www.snowelm.com/~t/index.ja.html) \[#ded39e28\]
    - [平文から BiBTeX エントリを自動生成](http://www.snowelm.com/~t/doc/tips/makebib.ja.html)

- [BibTeX Online Editor](http://truben.no/latex/bibtex/) \[#e090c56d\]

他にも，BibTeX の出力が可能なデータベースが多数あります．

- [ブラウザからの論文検索](http://ready.to/search/list/cs_thesis.htmm) の \[BibTeX文献情報含む\] と書かれているもの

## BibTeX ファイルを他の形式に変換するツール（エクスポート） {#ubc94a7f}

|  名前  |  動作条件  |  説明  |
|---|---|---|
|  bbl2html.awk  | awk | bblファイルをhtmlに変換するawkスクリプト  |
|  bibweb  |   |   |
|  bib2dvi  | Unixなど  | bibファイルをdviに変換  |
|  printbib  | Unix  | .bibファイルの中の全文献を処理して.dviファイルを作るシェルスクリプト  |
| [bunkenhtml](http://www.media.osaka-cu.ac.jp/~k-abe/bunkenhtml/) | perl | BibTeXのデータベースから業績リストをHTMLで作成するプログラム．[使用例1](http://narayama.aist-nara.ac.jp/~y-takata/research/)，[使用例2](http://www.forest.eis.ynu.ac.jp/~mori/ja/pub.html)  |
| [bib2html](http://www.litech.org/~wkiri/bib2html/) | Unix | .bibファイルをHTMLに変換 |
| [bibtex2html](http://www.lri.fr/~filliatr/bibtex2html/) | UNIX/Windows | .bibファイルをHTMLに変換．abstract, url, ps, pdfなどを勝手にリンク付けしてくれる．[pubabstract.perl](http://www.reitter-it-media.de/software/pubabstract.perl)と組み合わせると，1文献1ファイルのHTMLも用意してくれる．日本語はOKだがupbibtexと日本語用bstファイルを使用する必要あり．[使用例1](http://shakan2.tm.nagasaki-u.ac.jp/Research.html#sec5)．VinePlusに収録されいてるので，VineLinuxユーザはapt-getでインストール可能．．  |
| [Bib2ML (aka. Bib2HTML)](http://www.arakhne.org/bib2ml/) | perl |  Stéphane GALLANDによって作成された.bibファイルから文献データベースサイトを作成するプログラム．Kiri Wagstaff の [bib2html](http://www.litech.org/~wkiri/bib2html/) とほぼ同名であるため注意． |
| [bib2xhtml](http://www.spinellis.gr/sw/textproc/bib2xhtml/) | perl | .bibファイルをXHTML1.0に変換 |
| [Jab2HTML](http://keijisaito.info/arc/biblio/jabref_jbib.htm#jbib_export) | Java | JabRefからhtmlへエクスポート |

## その他 {#w326cd17}

|  名前  |  動作条件  |  説明  |
|---|---|---|
|  findbib  | UNIX, lynx  | 決められたキーで引用しておくと，WWW-SPIRES.SLAC.STANFORD.EDUの文献アーカイブから文献情報を取得してくれるプログラム  |
| Biblos |  Windows95/NT  |  bibファイルを公開するためのcgi  |
| [Text-BibTeX](http://www.gerg.ca/software/btOOL/) | perl | BibTeXを扱うためのperlモジュール．[btOOL](http://www.gerg.ca/software/btOOL/)で公開されている． |
| [RubybTeX](http://www.tomilab.net/~tominaga/rubybtex/) | Ruby | BibTeXコマンド・クローン．文献スタイルファイルは独自型式のものを用いる． |
| [Pybtex](http://pybtex.sourceforge.net/) | Python | BibTeXコマンド・クローン．書誌データはYAML形式で書く |
| [bibtex-spirit](http://home.no/sergiu/bibtex-spirit/) | C++ | BibTeX C++ parser library |
| [BibtexParser](https://bibtexparser.readthedocs.org/en/latest/) | Python | bibファイル形式をパースするライブラリ |

## LaTeX パッケージの利用 {#baf51e15}

LaTeX における参考文献管理を強化するパッケージに [BibLaTeX](/Biblatex/) があります．<br>
BibLaTeX はバックエンドとして biber や BibTeX を使用します．<br>

## 関連リンク {#j1aaae63}

- [Bibliographic Conversion Tools](http://www.ecst.csuchico.edu/~jacobsd/bib/tools/converters.html)
- [http://www.ccrnp.ncifcrf.gov/~toms/latex.html](http://www.ccrnp.ncifcrf.gov/~toms/latex.html) なども参考になるかも．

<br>
