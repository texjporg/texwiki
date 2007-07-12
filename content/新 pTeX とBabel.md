---
title: "新 pTeX とBabel"
url: "/新 pTeX とBabel/"
date: 2004-09-25T02:27:59Z
pukiwiki: "新 pTeX とBabel"
---

# 新 pTeX とBabel

## 新 pTeX と Babel （Babel でロシア語・ギリシア語を使えるようにするための方法） {#u0b9622c}

- \[2007/7/12\] 最近更新されたハイフネーションファイルについてまとめておきました ([qa:48601](https://okumuralab.org/~okumura/texfaq/qa/48601.html))。また NTT JTeX で Babel を使用する場合は，スペイン語（新版），ガリシア語（新版），ハンガリー（マジャール）語，オランダ語ハイフネーションファイルについて pat2ascj.pl による処理が必要です。ZRさんに作成いただきました ([qa:48666](https://okumuralab.org/~okumura/texfaq/qa/48666.html))。 -- 栗山
- \[2007/07/06\] 「システムの具体例」を「[推奨環境](#z22ea698)」に更新しました。-- 栗山
- \[2007/05/21\]
    [キリルアルファベット（ロシア語）フォント関連ファイルのダウンロードとインストール](#ka19a2ab) -- LH フォントのリンク先を新版 (3.5f) に合わせて直しました（すっかり忘れていた...）。-- 栗山

- \[2007/05/05\]
    updmap に関する補記 &amp; 一部のブラウザで文字化けが発生するため，全角記号（em dash や矢印，引用符など）を半角文字に置き換えました。 -- 栗山

- \[2007/04/26\]
    [キリルアルファベットの追加](#p1435221) -- 安田さんの Type 1 パッケージへのリンクを追加しました。 -- 栗山

- \[2007/03/06\]
    latin.ldf のバグ -- 以前 [qa:40506](https://okumuralab.org/~okumura/texfaq/qa/40506.html) で報告申し上げました Prosodic Mark （韻律記号）の問題ですが，ZRさんに対処方法をご教授いただきました ([qa:47317](https://okumuralab.org/~okumura/texfaq/qa/47317.html))。プリアンブルに “\languageattribute{latin}{withprosodicmarks}” を指定するだけで，従来通りデフォルトで韻律記号が使えます（“\ProsodicMarksOn”&ndash;“\ProsodicMarksOff” で囲む必要はありません）。また数式等との整合性も保たれています。-- 栗山

- \[2006/10/17\]
    updmap の使い方について、以前角藤先生に W32TeX 版についてまとめていただいたことがありました ([qa:42444](https://okumuralab.org/~okumura/texfaq/qa/42444.html))。teTeX-3 (ptetex3) 版は少しオプションが異なります ([qa:42473](https://okumuralab.org/~okumura/texfaq/qa/42473.html))。-- 栗山

- \[2006/03/13\]
    Babel を使わずに済む方法 --「ちょっとだけ」ギリシア語を引用したいという方のために簡便な出力方法のサンプルができました ([qa:41979](https://okumuralab.org/~okumura/texfaq/qa/41979.html))。ディガンマなど古い字母も含めたサンプルとロシア語については Tackaschi さん ([qa:41982](https://okumuralab.org/~okumura/texfaq/qa/41982.html)) に、ハイフネーションも含めた本格的な出力には稲垣さん ([qa:41983](https://okumuralab.org/~okumura/texfaq/qa/41983.html)) にサンプルを作っていただきました。ありがとうございます。-- 栗山

- \[2005/09/06\]
    W32TeX の8月12日版以降（ptetex3-20050811 以降）では，hyphen.cfg をいじる必要がなくなったことから，記述を全面的に改めました。[qa:37829](https://okumuralab.org/~okumura/texfaq/qa/37829.html) 参照。また，多くのハイフネーションパタンが組み込まれたフォーマットファイルが予め用意されていますので，ハイフネーションの拡張作業を行う必要すらなくなりました。ですから，サブタイトルも変えました (^^;

- \[2005/05/28\]
    UNIX 系でのロシア語ハイフネーションファイルは ruhyphen7.tex だと platex とうまくいくようです。[qa:36079](https://okumuralab.org/~okumura/texfaq/qa/36079.html) 参照（安田さんによる）。

- \[2005/05/27\]
    「[Babel による多言語構築ガイド 第3版](https://okumuralab.org/~okumura/texfaq/qa/36022.html)」（栗山さんによる）もご覧ください。

- \[2005/05/21\]
    fmtutil --byfmt のように「ハイフン」を追加しておきました。

- \[2004/10/20\]
    ハンガリー語・トルコ語・ウクライナ語等々までをも含めた pLaTeX のフォーマットファイルを作成する方法については [稲垣さんの 8-bit-Hyphenation](http://www2.tba.t-com.ne.jp/ing/babel.html#THIRD) をご覧ください。現時点で Babel がサポートしている言語すべてを，正確なハイフネーションパタンまで含めて，pLaTeX を用いて処理できるようになります。

- \[2004/09/29\]
    ギリシア数字の出力に関して greek.ldf にバグがあります ([qa:31769](https://okumuralab.org/~okumura/texfaq/qa/31769.html))。

- \[2004/09/29\]
    russian を使う際のエンコーディングは OT2 としてハイフネーションパタンを組み込むようにしました。

- \[2004/09/27\]
    map ファイルも $TEXMFLOCAL/ 以下に置けることが分かりましたので，関連するインストール先を少々書き換えておきました。これにより，{$TEXMFMAIN,$TEXMFDIST}/ メインツリーには基本的に手を加えないでよいこととなります。

- \[2004/09/25\]
    新 pTeX (pTeX3.1.4) では8ビットのハイフネーションパタンも「（基本的に）そのまま」組み込めるようになりました。

以下では LaTeX/pLaTeX システムで Babel パッケージとともにギリシア語・ロシア語を使えるようにする方法を具体例で記します。

### 推奨環境 {#z22ea698}

#### Microsoft Windows {#q1adb5c8}

[W32TeX](http://www.fsci.fuk.kindai.ac.jp/kakuto/win32-ptex/) では [TeX Live](http://www.tug.org/texlive/) 所収のハイフネーションファイル（43種類）が同梱されています。8ビットコード対応済み ([8bt2ptex.pl](http://www2.tba.t-com.ne.jp/ing/ctan/8bt2ptex.pl))，日本語環境 (pTeX) 用フォーマットファイルも作成済みです（インストール方法はこちら）。

#### UNIX, Unix-like OS, Mac OS, Cygwin {#y673f46e}

[ptetex3](http://tutimura.ath.cx/~nob/tex/ptetex/ptetex3/) では teTeX 3 所収の
ハイフネーションファイル（33種類）が同梱されています。“make babel” で日本語環境向けの処理が全自動で行われます（[ptetex Wiki](http://tutimura.ath.cx/ptetex/?FrontPage) もご覧下さい）。個々のディストリビューション同梱のものや配布バイナリを使用する場合は手作業で調整する必要があります（[こちら](http://www2.tba.t-com.ne.jp/ing/babel.html)を参照）。Cygwin については[こちら](http://www.misojiro.t.u-tokyo.ac.jp/~kuroky/tex/)をご覧下さい。

W32TeX，ptetex3 では，キリルアルファベット（ロシア語）関連フォントとギリシアアルファベット関連ファイルをインストールすることだけで全ての環境が整います。これらの追加パッケージは $TEXMFLOCAL/ (&asymp;texmf-local/) 以下に入れることにします。

### キリルアルファベット（ロシア語）フォント関連ファイルのダウンロードとインストール {#ka19a2ab}

- 
    [CTAN:fonts/cyrillic/lh/](https://mirror.ctan.org/fonts/cyrillic/lh/)
    から[lhfnt35f-gen-mf.zip](http://www.ring.gr.jp/pub/text/CTAN/fonts/cyrillic/lh/lhfnt35f-gen-mf.zip)
    と[lhfnt35f-source.zip](http://www.ring.gr.jp/pub/text/CTAN/fonts/cyrillic/lh/lhfnt35f-source.zip)
    をダウンロードし，lh/texmf/ を $TEXMFLOCAL/ と読み替える以外は元のツリー構造を保ったまま $TEXMFLOCAL/ 以下に展開する。

#### 以下は Windows 環境のみ必要（Cygwin を除く） {#l0bb2df6}

- 
    $TEXMFLOCAL/source/lh/tex/setter.tex を開き “\MakeFileHeadsfalse” とある箇所の “false” 部分を “true” と書き換え，上書き保存する。

- 
    $TEXMFLOCAL/source/lh/tex/wrk/ フォルダを作成する。

- 
    コマンドプロンプトで（$TEXMFLOCAL/source/lh/tex/ 上で）

    ```
    >tex 99allenc.tex
    ```

    と打ち込めば必要となるファイル群が wrk/ 内に自動生成されるので，wrk/ ディレクトリ内にある \*.mf ファイルを全て $TEXMFLOCAL/fonts/source/lh/ ディレクトリ内に移動する。

### ギリシアアルファベットフォント関連ファイルのダウンロードとインストール {#ud937b30}

- 
    [CTAN:fonts/greek/](https://mirror.ctan.org/fonts/greek/) から[cbfonts.zip](http://www.ring.gr.jp/pub/text/CTAN/fonts/greek/cbfonts.zip) をダウンロードし，適当な作業ディレクトリに展開する。

- 
    展開してできた cbfonts/ ディレクトリを開き，その中にある dvips/, encodings/, mf/, tfm/, type1/ の各ディレクトリを，それぞれ cbfonts/ とリネームしてから，<br>
    $TEXMFLOCAL/fonts/map/dvips/<br>
    $TEXMFLOCAL/fonts/enc/<br>
    $TEXMFLOCAL/fonts/source/<br>
    $TEXMFLOCAL/fonts/tfm/<br>
    $TEXMFLOCAL/fonts/type1/<br>
    内に移動する（存在しないディレクトリは予め作っておく）。

### Dviout for Windows のカスタマイズ {#r9f015cc}

- 
    $TEXMFLOCAL/fonts/ 以下のファイルも参照されるように，Dviout for Windows の \[Option\] -> \[Setup Parameters...\] -> \[Font\] -> TEXROOT: 欄に例えば “;c:\usr\local\share\texmf-local\fonts” を追加記述し，\[Save\] -> \[OK\] する。

### type1ec.sty のインストール {#sea65834}

- 
    [CTAN:fonts/ps-type1/cm-super/](https://mirror.ctan.org/fonts/ps-type1/cm-super/) から[type1ec.sty](http://www.ring.gr.jp/pub/text/CTAN/fonts/ps-type1/cm-super/type1ec.sty) をダウンロードし，<br>
    $TEXMFLOCAL/tex/latex/cm-super/ 内に格納する（存在しないディレクトリは予め作っておく）。

### タイプセットのテスト {#mafcbf19}

- 
    以下のファイルをタイプセットしてみてください。latex, platex のいずれでも OK となっているはずです（出力結果は『[［改訂第3版］ LaTeX2e 美文書作成入門](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/bibun3/)』付録J 340ページないし『[［改訂第4版］ LaTeX2e 美文書作成入門](http://oku.edu.mie-u.ac.jp/~okumura/bibun4/)』付録J 357ページとほぼ同じになると思います）。

***

```
%%% -*- mode: yatex -*-
\documentclass[b5paper]{article}
\usepackage[10pt]{type1ec} % <-- New!
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

ここから先は Type 1 フォントを使うための設定です。不必要であれば無視してください。

### cm-super パッケージ（巨大！ 約 64.1 MiB）のダウンロードとインストール {#a4477ec1}

- 
    （cm-super には LH ［キリルアルファベット］や EC ［ラテンアルファベット］の Type 1 が含まれています）<br>
    [CTAN:fonts/ps-type1/](https://mirror.ctan.org/fonts/ps-type1/) から[cm-super.zip](http://www.ring.gr.jp/pub/text/CTAN/fonts/ps-type1/cm-super.zip) をダウンロードし，元のツリー構造を保ったまま，$TEXMFLOCAL/tex/latex/cm-super/ 以下に展開する。先の type1ec.sty は上書きして良い。

- 
    $TEXMFLOCAL/tex/latex/cm-super/ ディレクトリを開き，その中にある pfb/ ディレクトリだけを cm-super/ とリネームしてから，ディレクトリごと $TEXMFLOCAL/fonts/type1/ 以下に移動する（それ以外のファイルは，さしあたって不必要）。

### キリルアルファベットの追加 {#p1435221}

- 
    キリルアルファベット系で OT2 フォントエンコーディング指定した際に使用される
    wn\* フォントに関しては，残念ながら cm-super に Type 1 が用意されていません。
    先に挙げた例でテストする場合は，
    さらに，「[『［改訂第3版］ LaTeX2e 美文書作成入門』付録J章サポートページ](http://www.lg.fukuoka-u.ac.jp/~ynagata/bibunsho3_j_support.html)」に
    ある[bibunj-cyrillic.map](http://www.lg.fukuoka-u.ac.jp/~ynagata/j_support/bibunj-cyrillic.map),
    [wnr10.pfb](http://www.lg.fukuoka-u.ac.jp/~ynagata/j_support/wnr10.pfb),
    [wnbx12.pfb](http://www.lg.fukuoka-u.ac.jp/~ynagata/j_support/wnbx12.pfb)
    をダウンロードし，\*.pfb は $TEXMFLOCAL/fonts/type1/wn-cyrillic/ 以下に \*.map
    は $TEXMFLOCAL/fonts/map/dvips/wn-cyrillic/ 以下にコピーしてください
    （存在しないディレクトリは予め作っておく）。

- 
    なお，現在は[安田さん](http://www.ceres.dti.ne.jp/~i-yasuda/)作成の [LH キリル T2D/OT2 Type 1 フォント集](http://yasuda.homeip.net/tex/cyrillic-type1-fonts.html)（全サイズ版と 10 pt 版あり）がありますので，キリル文字を本格的に使われる方はこちらをご利用下さい（[ダウンロードサイト](http://www.ceres.dti.ne.jp/~i-yasuda/dl/dl.html)）。

### updmap ツールを使って関連ファイルの一括更新 {#r7d115bb}

- 
    $TEXMF/web2c/updmap.cfg （ptetex3 では $TEXMFCONFIG/web2c/updmap.cfg）に，必要に応じて

    ```
    MixedMap cbgreek.map
    Map cm-super-t1.map
    Map cm-super-ts1.map
    Map cm-super-t2a.map
    Map cm-super-t2b.map
    Map cm-super-t2c.map
    Map cm-super-x2.map
    #Map cyrillic-ot2.map      % 安田さんのパッケージ
    #Map cyrillic-t2d.map      % 安田さんのパッケージ
    #Map bibunj-cyrillic.map   % 永田さんのサポートページ
    ```

    と記述し，コマンドプロンプトにて

    ```
    updmap
    ```

    ないし UNIX, Unix-like OS, Mac OS 環境でシステム全体を更新する場合は

    ```
    updmap-sys
    ```

    と打ち込む。

### PDF 作成テスト {#mca7623b}

- 
    以上で，先のタイプセット用ファイル（名前を仮に johannes.tex とします）に

    ```
    (p)latex johannes.tex
    dvipdfm(x) johannes.dvi
    ```

    とすることで Type 1 の埋め込まれた PDF が作成されます。

### もっと本格的に... {#z684b1d0}

世界の言語あるいは文字をどこまで表現できるかについては，稲垣徹さんのウェブサイト「[日本語 LaTeX による多言語処理](http://www2.tba.t-com.ne.jp/ing/)」を参照してください。
