---
title: "新 pTeX とBabel"
url: "/新 pTeX とBabel/"
date: 2004-09-25T02:27:59Z
pukiwiki: "新 pTeX とBabel"
---

# 新 pTeX とBabel

## 新 pTeX とBabel（LaTeX/pLaTeX への多言語用ハイフネーションの組み込み方） {#u0b9622c}

- \[040925\]
    新 pTeX (pTeX3.1.4) では8ビットのハイフネーションパタンも「（基本的に）そのまま」組み込めるようになりました(参照：TeX Q &amp; A 投稿記事 31641番）。

以下では LaTeX/pLaTeX フォーマットファイルに追加のハイフネーションパタンを組み込む方法を具体例で記します。

***

システムの具体例<br>
角藤版 TeX 一式（2004.09.24.付け）<br>
LaTeX に greek, russian を追加<br>
pLaTeX に german（旧正書法）, ngerman（新正書法）, french, greek, russian を追加

***

なお，実際に Babel でロシア語を使用するには，さらに，キリルアルファベット関連フォント・フォントエンコーディングファイル・インプットエンコーディングファイルもインストールする必要があります。同様に，ギリシア語の場合はギリシアアルファベット関連ファイルを追加インストールします。これらの追加パッケージは texmf-local/ 以下に入れることにします。

### pLaTeX に german, ngerman, french, greek, russian を組み込む {#r08eeedc}

- 
    texmf/ptex/platex/hyphen.cfg を Orig_hyphen.cfg のようにリネームする

- 
    texmf/tex/generic/config/language.dat を開き greek, russian がある行頭の % 記号を取り去り，上書き保存する

- 
    念のため，texmf/web2c/ptex/platex.fmt を Orig_platex.fmt のようにリネームしておく

- 
    コマンドプロンプトで

    ```
    fmtutil -byfmt platex
    ```

    と打ち込めば終わり（ファイルサイズ：Orig_platex.fmt=661KB, 新platex.fmt=919KB）

### LaTeX に greek, russian を組み込む（german, ngerman, french はデフォルトで組み込み済み） {#q8ded0e1}

- 
    念のため，texmf/web2c/tex/latex.fmt を Orig_latex.fmt のようにリネームしておく

- 
    コマンドプロンプトで

    ```
    fmtutil -byfmt latex
    ```

    と打ち込めば終わり（ファイルサイズ：Orig_latex.fmt=741KB, 新latex.fmt=852KB）

### キリルアルファベット（ロシア語）用フォントエンコーディングファイル・インプットエンコーディングファイルのダウンロードとインストール {#vff90c54}

- 
    CTAN から macros/latex/required/cyrillic.tar.gz (または cyrillic.zip) をダウンロードし，texmf-local/tex/latex/cyrillic/ 以下に展開する

- 
    コマンドプロンプトで（texmf-local/tex/latex/cyrillic/ 上で）

    ```
    latex cyrlatex.ins
    ```

    と打ち込めば必要となるファイル群が自動生成される

### キリルアルファベット（ロシア語）フォント関連ファイルのダウンロードとインストール {#ka19a2ab}

- 
    CTAN から fonts/cyrillic/lh.tar.gz (または lh.zip) をダウンロードし，texmf-local/fonts/source/cyrillic/lh/ 以下に展開する

- 
    texmf-local/fonts/source/cyrillic/lh/tex/setter.tex を開き \MakeFileHeadsfalse とある箇所の false 部分を true と書き換え，上書き保存する

- 
    texmf-local/fonts/source/cyrillic/lh/tex/wrk/ フォルダを作成する

- 
    コマンドプロンプトで（texmf-local/fonts/source/cyrillic/lh/tex/ 上で）

    ```
    tex 99allenc
    ```

    と打ち込めば必要となるファイル群が wrk/ 内に自動生成される

### ギリシアアルファベットフォント関連ファイルのダウンロードとインストール {#ud937b30}

- 
    CTAN から fonts/greek/cb.tar.gz (または cb.zip) をダウンロードし，texmf-local/fonts/source/greek/cb/ 以下に展開する<br>
    （注意：70MB 以上あります。type1 フォントを必要としない場合は cb/ 下の drivers と mf だけダウンロードすれば OK）

### DVIOUT のカスタマイズ {#r9f015cc}

- 
    texmf-local/fonts/ 以下のファイルも参照されるように，DVIOUT の Option--Setup Parameters--Font, TEXROOT 欄に ;c:\usr\local\share\texmf-local\fonts を追加記述し，Save, OK する

### タイプセットのテスト {#mafcbf19}

- 
    以下のファイルをタイプセットしてみてください。latex, platex のいずれでも OK となっているはずです（出力結果は『\[改訂3版\]美文書』付録J340ページと同じになります）

***

```
\documentclass[b5paper]{article}
\usepackage[OT2,T1]{fontenc}
\usepackage[polutonikogreek,russian,english,french,german]{babel}
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
\selectlanguage{polutonikogreek}
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

ここから先は Type1 フォントを使うための設定です。不必要であれば無視してください

### cm-super パッケージ（巨大！ 約65MB）のダウンロードとインストール {#a4477ec1}

- 
    （cm-super には LH（キリルアルファベット）や EC（ラテンアルファベット）の Type1 が含まれています）<br>
    CTAN の fonts/ps-type1/cm-super.tar.gz (または cm-super.zip) をダウンロードし，texmf-local/fonts/type1/cm-super/ 以下に展開する

### cb の Type1 フォントのダウンロードとインストール {#kcaa5534}

- 
    CTAN の fonts/greek/cb/type1.tar.gz (または type1.zip) をダウンロードし，その「中身」を texmf-local/fonts/type1/greek/cb/ 以下に展開する<br>
    （先の工程において cb.tar.gz 等を丸ごとダウンロードしてきた場合には，展開して得られる type1 フォルダを cb とリネームして texmf-local/fonts/type1/greek/ 内に移動する）

### ギリシア語用 map ファイルのダウンロードとインストール {#ve37546c}

- 
    （cm-super 用の map ファイルはデフォルトで存在しています）<br>
    CTAN の fonts/greek/cb/dvips.tar.gz (または dvips.zip) をダウンロードし，その「中身」である cbgreek.map を texmf/fonts/map/dvips/cbgreek/ 以下にコピーする<br>
    （先の工程において cb.tar.gz 等を丸ごとダウンロードしてきた場合には，展開して得られる dvips フォルダを cbgreek とリネームして texmf/fonts/map/dvips/ 内に移動する）

### キリルアルファベットの追加 {#p1435221}

- 
    キリルアルファベット系で OT2 フォントエンコーディング指定した際に使用される wn\* フォントに関しては，残念ながら cm-super に Type1 が用意されていません。先に挙げた例でテストする場合は，さらに，[http://www.lg.fukuoka-u.ac.jp/~ynagata/bibunsho3_j_support.html](http://www.lg.fukuoka-u.ac.jp/~ynagata/bibunsho3_j_support.html) ページにある bibunj-cyrillic.map, wnr10.pfb, wnbx12.pfb をダウンロードし，\*.pfb は texmf-local/fonts/type1/wn-cyrillic/ 以下に \*.map は texmf/fonts/map/dvips/wn-cyrillic/ 以下にコピーしてください

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

    と打ち込む

### PDF 作成テスト {#mca7623b}

- 
    以上で，先のタイプセット用ファイル（名前を仮に johannes.tex とします）に

    ```
    (p)latex johannes
    dvipdfm(x) johannes
    ```

    とすることで Type1 の埋め込まれた PDF が作成されます
