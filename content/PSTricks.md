---
title: "PSTricks"
url: "/PSTricks/"
date: 2004-09-22T22:57:55Z
pukiwiki: "PSTricks"
---

# PSTricks

## PSTricks {#c2b5878d}

\[FIXME\] 以下の内容はかなり古いので，どなたか改訂お願いします。

PSTricks は TeX，LaTeX 文書ファイルの中で PostScript
の命令を直接使って簡単に表現力豊かな描画ができる便利なパッケージ（スタイルファイル）です。
ただし，dvi ファイルに \special で PostScript
の命令を埋め込むので，
PostScript プリンタ（あるいは Ghostscript など）の利用が前提になります。
METAFONT や [MetaPost](/MetaPost/)
ほど洗練されていないかもしれませんが，
PostScript でできることは何でもできます。
日本語も使えますし，
曲線のパス長も METAFONT や MetaPost より長くても大丈夫のようです。

PSTricks はプリンストン大の [Timothy van Zandt](http://www.princeton.edu/~tvz/) が作り，
フランスの Denis Girou によって育てられ，
Sebastian Rahtz も加わって，
1997年春に PSTricks 97 として集大成されました。
その後も修正作業は続いています。
Girou による
[PSTricks](http://www.tug.org/applications/PSTricks/)
ホームページにはたくさんの例が載っています。
LaTeX3 プロジェクトチームによる
The LaTeX Graphics Companion
(Michel Goossens, Sebastian Rahtz, Frank Mittelbach 著, Addison Wesley, 1997)
という本にも詳しい解説があります。

> 邦訳『LaTeXグラフィックスコンパニオン』が出ました
> （鷺谷好輝訳，ISBN4-7561-3461-0，本体5400円，アスキー）。

PSTricks は [CTAN](/CTAN/)
の graphics/pstricks ディレクトリにあります。

インストールは，TeX が /usr/local/share/texmf
以下にインストールされていれば，
PSTricks 配布ディレクトリ中の generic ディレクトリの中身は，
/usr/local/share/texmf/tex/generic/pstricks
というディレクトリを作ってその中に移動し，
PSTricks 配布ディレクトリ中の latex ディレクトリの中身は，
/usr/local/share/texmf/tex/latex/pstricks
というディレクトリを作ってその中に移動し，
PSTricks 配布ディレクトリ中の dvips ディレクトリの中身は，
/usr/local/share/texmf/dvips/pstricks
というディレクトリを作ってその中に移動します。
あとは必要に応じて contrib
の中の \*.tex を /usr/local/share/texmf/tex/generic/pstricks
に，\*.sty ファイルを /usr/local/share/texmf/tex/latex/pstricks
に入れます
（たとえば contrib/pst-poly の中身や contrib/misc/pst-key.\*）。

dvips 用の pst-text.pro は，
アスキーのdvipsk日本語パッチに含まれる松田一朗さんの PSTricks.patch
に従って修正します。

最後に，システムによっては mktexlsr コマンドの実行が必要です。

基本的な使い方は，LaTeX2e ならプリアンブルで

```
\usepackage{pstricks}
```

とします。さらに，特定の拡張機能を使うなら，
次のうち必要なファイルを \usepackage します。

multido
: ループマクロ

pst-3d
: 3次元射影

pst-char
: 文字パスのストローキングとフィリング

pst-coil
: コイルとジグザグ

pst-eps
: EPS への変換

pst-fill
: フィリングとタイリング

pst-grad
: 色のグラディエント

pst-node
: ノードとその接続

pst-plot
: プロット

pst-text
: 文字をパスに沿わせる

pst-tree
: 木表示

pst-all
: 以上すべてと，標準 graphics パッケージ中の pstcol を読み込む

これらのいずれかを読み込めば，
\usepackage{pstricks} は省略できます。

LaTeX2e 通常の graphics パッケージ集を使う場合は，
PSTricks の後にロードすれば，
同じ名前の命令は graphics パッケージの方が生きます。
graphics パッケージ集の中の color パッケージは PSTricks と併用できません。
color の代わりに graphics パッケージ集の中にある pstcol を使ってください。

以下はごく簡単な例です。

```
\documentclass{jarticle}
\usepackage{pst-node}
\begin{document}
\begin{center}
\begin{pspicture}(0,0)(5,4)
\pspolygon(0,0)(5,4)(5,0)
\pcline(0,0)(5,4)\lput*{:U}{斜辺}
\end{pspicture}
\end{center}
\end{document}
```

独立の EPS を作るためには，PSTricks の中の pst-eps
パッケージの PSTtoEPS という命令を使います。
ただし，これを使うと図中に文字を書き込む命令 \rput
などが使えなくなります。
文字を含む EPS を作るには，PSTtoEPS を使わず，
いったん dvi ファイルにしておいて，
dvips の -E オプションを使う方法しかないようです。
しかし，これではバウンディングボックス情報が正しく入らないため，
後で EPS ファイルを編集する必要があり，面倒です。

そこで PSTtoEPS や dvips の -E オプションを使わずに PSTricks の PDF 変換の
ためのマクロ pstpdfmx を作りました．
まずは『丸ごとパック [pstpsrc.tgz](/attach/PSTricks/pstpsrc.tgz)を
ダウンロードしてください (Unix 系 OS 専用です，要 bash/Make/gcc)．
これを使うとデバイスドライバに dvipdfm(x)を使って PSTricks のある程度のマクロを
使えるようになります．

丸ごとパック [pstpsrc.tgz](/attach/PSTricks/pstpsrc.tgz)
: pstpdfmx, bbb, genpdf.sh 等がすべて含まれています．

pstpdfmx の解説 [pstpdfmx.pdf](/attach/PSTricks/pstpdfmx.pdf)
: pstpdfmx パッケージの説明書．

出力例 [p2p.pdf](/attach/PSTricks/p2p.pdf)
: 実際に pstpdfmx, genpdf.sh, bbb, Make を使って作成した PDF．

方針としては原稿中の PSTricks による図を一度別ファイル fig.tex に書き出し，そのファイルを

```
platex fig.tex
pdvips -Ppdf -o fig.ps fig.dvi
epstopdf fig.ps fig.pdf
gs -sDEVICE=pbm -fig.ps -sOutputFIle=fig.pbm
bbb < fig.pbm > fib.bb
```

という作業を，図の数だけ行います．そうすると正しいバウンディングボックス情報 fig.bb 
と PSTricks 画像から PDF に変換したファイル fig.pdf ができます．元原稿では
ファイル fig.pdf が存在する時だけ fig.pdf を読み込むようにすることになります．

上記の PDF を生成するスクリプトは genpdf.sh というファイルにまとめています．
すると完全な PDF ファイル file.pdf は次のように作ることになります．

```
platex file
./genpdf.sh file
platex file
dvipdfmx file
```

dvips にこのマクロを流用するには 1 行か 2 行の修正で済みます (デバイスドライバに
dvips を指定し， genpdf.sh の中で fig.ps の BoundingBox を awk/perl で
プログラム bbb が出力した正しいものに置換するだけです)．しかし、やはり大変面倒です． 
pdfLaTeX などが日本語化されれば pdftricks や ps4pdf などのパッケージが使える
ようになるでしょう．いずれにしても pdfTeX/pdfLaTeX で日本語が使
えるようになるまでは，このような面倒な処理が必要になると思います．
