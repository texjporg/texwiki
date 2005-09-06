---
title: "新 pTeX とBabel"
url: "/新 pTeX とBabel/"
date: 2004-09-25T02:27:59Z
pukiwiki: "新 pTeX とBabel"
---

# 新 pTeX とBabel

## 新 pTeX と Babel（Babel でロシア語・ギリシア語を使えるようにするための方法） {#u0b9622c}

- \[050906\]
    W32TeX の8月12日版以降(ptetex3-20050811 以降)では，hyphen.cfg をいじる必要がなくなったことから，記述を全面的に改めました。[qa:37829](https://okumuralab.org/~okumura/texfaq/qa/37829.html) 参照。また，多くのハイフネーションパタンが組み込まれたフォーマットファイルが予め用意されていますので，ハイフネーションの拡張作業を行う必要すらなくなりました。ですから，サブタイトルも変えました (^^;

- \[050528\]
    UNIX 系でのロシア語ハイフネーションファイルは ruhyphen7.tex だと platex とうまくいくようです。[qa:36079](https://okumuralab.org/~okumura/texfaq/qa/36079.html) 参照（安田さんによる）。

- \[050527\]
    「Babel による多言語構築ガイド 第3版」（栗山さんによる）もご覧ください。[qa:36022](https://okumuralab.org/~okumura/texfaq/qa/36022.html)

- \[050521\]
    fmtutil --byfmt のように「ハイフン」を追加しておきました。

- \[041020\]
    ハンガリー語・トルコ語・ウクライナ語等々までをも含めた pLaTeX のフォーマットファイルを作成する方法については [稲垣さんの Hyphenation](http://www2.tba.t-com.ne.jp/ing/ctan.html) をご覧ください。現時点で Babel がサポートしている言語すべてを，正確なハイフネーションパタンまで含めて，pLaTeX を用いて処理できるようになります。

- \[040929\]
    ギリシア数字の出力に関して greek.ldf にバグがあります。\[[qa:31769\]](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/qa/31769.html)

- \[040929\]
    russian を使う際のエンコーディングは OT2 としてハイフネーションパタンを組み込むようにしました。

- \[040927\]
    map ファイルも texmf-local/ 以下に置けることが分かりましたので，関連するインストール先を少々書き換えておきました。これにより，texmf/ メインツリーには基本的に手を加えないでよいこととなります。

- \[040925\]
    新 pTeX (pTeX3.1.4) では8ビットのハイフネーションパタンも「（基本的に）そのまま」組み込めるようになりました。

以下では LaTeX/pLaTeX システムで Babel パッケージとともにギリシア語・ロシア語を使えるようにする方法を具体例で記します。

***

システムの具体例<br>

角藤版 TeX 一式（2005.09.06.付け）<br>

LaTeX/pLaTeX とも，最初から，english, usenglishmax, basque,<br>
bulgarian, coptic, welsh, czech, slovak, german, ngerman,<br>
danish, spanish, catalan, estonian, finnish, french, greek,<br>
monogreek, ancientgreek, croatian, hungarian, interlingua,<br>
ibycus, indonesian, icelandic, italian, latin, mongolian,<br>
dutch, norsk, polish, portuguese, pinyin, romanian, russian,<br>
slovene, uppersorbian, serbian, swedish, turkish, ukenglish,<br>
ukrainian のハイフネーションパタンが組み込まれています。

***

実際に行う作業は，キリルアルファベット（ロシア語）関連フォントとギリシアアルファベット関連ファイルをインストールすることだけです。これらの追加パッケージは texmf-local/ 以下に入れることにします。

### キリルアルファベット（ロシア語）フォント関連ファイルのダウンロードとインストール {#ka19a2ab}

- 
    CTAN から fonts/cyrillic/lh.zip をダウンロードし，lh/texmf/ を texmf-local/ と読み替える以外は元のツリー構造を保ったまま texmf-local/ 以下に展開する。

- 
    texmf-local/source/lh/tex/setter.tex を開き \MakeFileHeadsfalse とある箇所の false 部分を true と書き換え，上書き保存する。

- 
    texmf-local/source/lh/tex/wrk/ フォルダを作成する。

- 
    コマンドプロンプトで（texmf-local/source/lh/tex/ 上で）

    ```
    tex 99allenc
    ```

    と打ち込めば必要となるファイル群が wrk/ 内に自動生成されるので，wrk/ ディレクトリ内にある \*.mf ファイルを全て，texmf-local/fonts/source/lh/ ディレクトリ内に移動する。

### ギリシアアルファベットフォント関連ファイルのダウンロードとインストール {#ud937b30}

- 
    CTAN から fonts/greek/cbfonts.zip をダウンロードし，適当な作業ディレクトリに展開する。

- 
    展開してできた cbfonts/ ディレクトリを開き，その中にある dvips/, encodings/, mf/, tfm/, type1/ の各ディレクトリを，それぞれ cbfonts/ とリネームしてから，<br>
    texmf-local/fonts/map/dvips/<br>
    texmf-local/fonts/enc/<br>
    texmf-local/fonts/source/<br>
    texmf-local/fonts/tfm/<br>
    texmf-local/fonts/type1/<br>
    内に移動する（存在しないディレクトリは予め作っておく）。

### DVIOUT のカスタマイズ {#r9f015cc}

- 
    texmf-local/fonts/ 以下のファイルも参照されるように，DVIOUT の Option--Setup Parameters--Font, TEXROOT 欄に ;c:\usr\local\share\texmf-local\fonts を追加記述し，Save, OK する。

### type1ec.sty のインストール {#sea65834}

- 
    CTAN から fonts/ps-type1/cm-super/type1ec.sty をダウンロードし，<br>
    texmf-local/tex/latex/cm-super/ 内に格納する（存在しないディレクトリは予め作っておく）。

### タイプセットのテスト {#mafcbf19}

- 
    以下のファイルをタイプセットしてみてください。latex, platex のいずれでも OK となっているはずです（出力結果は『\[改訂3版\]美文書』付録J340ページと同じになります）。

***

```
\documentclass[b5paper]{article}
\usepackage[10pt]{type1ec}% <--- New!!
\usepackage[OT2,T1]{fontenc}
\usepackage[greek,russian,english,french,german]{babel}
\languageattribute{greek}{polutoniko}
\pagestyle{empty}
\begin{document}
\selectlanguage{english}
\section{THE GOSPEL ACCORDING TO JOHN}
In the beginning was the Word, and the Word was with God,
and the Word was God. He was in the beginning with God.
All things came into being through him, and without him
not one thing came into being. What has come into being
in him was life, and the life was the light of all people.
The light shines in the darkness, and the darkness did not
overcome it.
\selectlanguage{french}
\section{\'EVANGILE SELON JEAN}
Au commencement \'etait le Verbe, et le Verbe \'etait tourn\'e
vers Dieu, et le Verbe \'etait Dieu. Il \'etait au commencement
tourn\'e vers Dieu. Tout fut par lui, et rien de ce qui fut,
ne fut sans lui. En lui \'etait la vie et la vie \'etait la
lumi\`ere des hommes, et la lumi\`ere brille dans les
t\'en\`ebres, et les t\'en\`ebres ne l'ont point comprise.
Il y eut un homme, envoy\'e de Dieu: son nom \'etait Jean.
\selectlanguage{german}
\section{DAS EVANGELIUM NACH JOHANNES}
Im Anfang war das Wort, und das Wort war bei Gott, und
das Wort war Gott. Dieses war im Anfang bei Gott. Alles
wurde durch dasselbe, und ohne dasselbe wurde auch nicht
eines, das geworden ist. In ihm war Leben, und das Leben
war das Licht der Menschen. Und das Licht scheint in der
Finsternis, und die Finsternis hat es nicht erfa"st.
\selectlanguage{greek}
\section{KATA IWANNHN}
>En >arq~h| ~>hn <o l'ogos, ka`i <o l'ogos ~>hn pr`os t`on
je'on, ka`i je`os ~>hn <o l'ogos. o~<utos ~>hn >en >arq~h|
pr`os t`on je'on. p'anta di'' a>uto~u >eg'eneto, ka`i qwr`is
a>uto~u >eg'eneto o>ud`e <'en. <`o g'egonen >en a>ut~w|
zw`h ~>hn, ka`i <h zw`h ~>hn t`o f~ws t~wn >anjr'wpwn;
ka`i t`o f~ws >en t~h| skot'ia| fa'inei, ka`i <h skot'ia
a>ut`o o>u kat'elaben.
\selectlanguage{russian}
\section{EVANGELIE OT IOANNA}
V naqale bylo Slovo, i Slovo bylo u Boga, i Slovo bylo Bog.
Ono bylo v naqale u Boga. Vse qrez Nego n\'aqalo byt{p1},
i bez Nego niqto ne n\'aqalo byt{p1}, qto n\'aqalo byt{p1}.
V Nem byla {zh}izn{p1}, i {zh}izn{p1} byla svet qelovekov.
I svet vo t{p1}me svetit, i t{p1}ma ne ob{p2}{ya}la ego.
\end{document}
```

***

ここから先は Type1 フォントを使うための設定です。不必要であれば無視してください。

### cm-super パッケージ（巨大！ 約64.1MB）のダウンロードとインストール {#a4477ec1}

- 
    （cm-super には LH（キリルアルファベット）や EC（ラテンアルファベット）の Type1 が含まれています）<br>
    CTAN の fonts/ps-type1/cm-super.zip をダウンロードし，元のツリー構造を保ったまま，texmf-local/tex/latex/cm-super/ 以下に展開する。先の type1ec.sty は上書きして良い。

- 
    texmf-local/tex/latex/cm-super/ ディレクトリを開き，その中にある pfb/ ディレクトリだけを cm-super/ とリネームしてから，ディレクトリごと texmf-local/fonts/type1/ 以下に移動する（それ以外のファイルは，さしあたって，不必要）。

### キリルアルファベットの追加 {#p1435221}

- 
    キリルアルファベット系で OT2 フォントエンコーディング指定した際に使用される wn\* フォントに関しては，残念ながら cm-super に Type1 が用意されていません。先に挙げた例でテストする場合は，さらに，[ここのページ](http://www.lg.fukuoka-u.ac.jp/~ynagata/bibunsho3_j_support.html) にある bibunj-cyrillic.map, wnr10.pfb, wnbx12.pfb をダウンロードし，\*.pfb は texmf-local/fonts/type1/wn-cyrillic/ 以下に \*.map は texmf-local/fonts/map/dvips/wn-cyrillic/ 以下にコピーしてください（存在しないディレクトリは予め作っておく）。

### updmap ツールを使って関連ファイルの一括更新 {#r7d115bb}

- 
    texmf/web2c/updmap.cfg に（必要に応じて）

    ```
    Map cbgreek.map
    Map cm-super-t1.map
    Map cm-super-ts1.map
    Map cm-super-t2a.map
    Map cm-super-t2b.map
    Map cm-super-t2c.map
    Map cm-super-x2.map
    Map bibunj-cyrillic.map
    ```

    と記述し，コマンドプロンプトにて

    ```
    updmap
    ```

    と打ち込む。

### PDF 作成テスト {#mca7623b}

- 
    以上で，先のタイプセット用ファイル（名前を仮に johannes.tex とします）に

    ```
    (p)latex johannes
    dvipdfm(x) johannes
    ```

    とすることで Type1 の埋め込まれた PDF が作成されます。

### もっと本格的に・・・ {#z684b1d0}

世界の言語あるいは文字をどこまで表現できるかについては，[日本語 LaTeX による多言語処理](http://www2.tba.t-com.ne.jp/ing/index.html) のページを参照してください
