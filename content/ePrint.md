---
title: "ePrint"
url: "/ePrint/"
date: 2004-09-22T22:34:44Z
pukiwiki: "ePrint"
---

# ePrint

## TeXとe-Printアーカイブ {#abcf93c0}

山根さんの
[学術情報のコモンズ](http://black.res.soft.iwate-pu.ac.jp/~s-yamane/diary/2003/0903.html#20030909)
に取り上げていただきました。

### はじめに {#x55fea18}

物理のe-Printアーカイブ（プレプリントサーバ）
[arXiv.org e-Print archive](http://arxiv.org/)
（旧Los Alamos e-Print Server [http://xxx.lanl.gov/](http://xxx.lanl.gov/)）は，1991年にLANL（Los Alamos National Laboratory）のPaul Ginspargが作り，世界中で広く利用されています。
現在では物理学以外に，数学・計算機関係の関連分野も扱っています。
Ginspargが2001年にLANLからCornell Universityに移動し，現在ではarXiv.orgもCornellにあります。
世界各地でミラーされており，日本では京都大学基礎物理学研究所の
[jp.arXiv.org e-Print archive mirror](http://jp.arxiv.org/)
（旧 [http://xxx.yukawa.kyoto-u.ac.jp/](http://xxx.yukawa.kyoto-u.ac.jp/)）でミラーされています。

e-Print archive についての最近の記事では [Physics Today](http://www.physicstoday.org/)
の [Ginsparg Takes Electronic Preprint Archive to Cornell](http://www.physicstoday.org/pt/vol-54/iss-9/p26.html)
があります。

e-Print の投稿は TeX/LaTeX が推奨されています。
TeX/LaTeX で投稿すれば，PostScript や PDF にも自動変換してくれます。

以下では TeX で e-print のためのプレプリントを作る方法と，
それを登録する方法を説明します。

……といいながら，以下はずいぶん前に書いたものです。
明らかな嘘がたくさんあります。
どなたか改訂してください。

### まず登録する {#i9e851ff}

[ヘルプ](http://xxx.yukawa.kyoto-u.ac.jp/help/)
に挙げてある一連のアドレスうち一つ（たとえば [cond-mat@xxx.lanl.gov](mailto:cond-mat@xxx.lanl.gov)）
にタイトルが register のメールを出します。本文は不要です。
すぐにパスワードなどを書いた返事が来ますので，
そこに書いてある指示にしたがって
[登録のページ](http://xxx.lanl.gov/register)
で登録をすませます。

### 原稿を TeX で書く {#g4702048}

TeX/LaTeX の場合，標準は LaTeX2e ですが，1行目に

```
%&latex209
```

と指定すれば LaTeX 2.09 で処理されます。
図は EPS 形式で入れます。
標準的なスタイルファイル類は揃っていますので，送る必要はありません。
PostScript への自動変換は dvips が使われますので，
dvi2ps や jdvi2kps を仮定した書き方はできません。

### 図の入れ方 {#p6c5ac8a}

LaTeX2e なら graphics
パッケージまたはより高機能の graphicx パッケージを使います。
プリアンブルに

```
\usepackage{graphicx}
```

と書いておき，図を読み込ませたいところに，たとえば

```
\begin{center}
\includegraphics[width=8cm]{foo.eps}
\end{center}
```

のように書きます。

LaTeX 2.09 なら Tomas Rokicki の epsf.sty
を使います。dvi2ps と組み合わせてよく使われる eclepsf.sty
も過去に epsf.sty というファイル名で流布したことがありますが，
別物ですので注意しましょう。dvips 用のものしか使えません。

図はアスキー形式の EPS ファイルにします。
PostScript のレベル1にすればいいと思います。
なるべく図には標準的な Helvetica，Times，Courier，Symbol
フォントだけを使うようにしましょう。
ソフトによっては使いもしないフォントをファイルに含めてしまいますので，

```
%%BeginFont
...
%%EndFont
```

の部分をエディタで削除するといいでしょう。
また，ソフトによっては余計なプレビューを標準で含めてしまうことがあるので，
プレビューを含めない設定にするか，それが不可能ならエディタで

```
%%BeginPreview
...
%%EndPreview
```

の部分を削除しましょう。

### 送り方 {#cb7f1914}

送るものは LaTeX ソース（名前は何でもいいが拡張子は tex）と，
それに挿入される EPS 形式の図のファイル群だけです。
dvi ファイルや全体の PS ファイルは送りません。
ファイルはあらかじめ tar + gzip または zip で束ねて圧縮しておきます。

[submit ページ](http://xxx.lanl.gov/submit)
を開きます。ユーザ名とパスワードを聞かれますので入力します。
説明が現れますので，よく読んで［Continue...］を押します。
あとはフォームに入力していくだけです。
例えば次のように入力します。

Archive:
: （適当な分野を選ぶ）

Title:
: A Phenomenological Theory of Hogehoge

Author(s):
: H. Okumura, A. Hoge, B. Hoge

Subj-class:
: 適当なクラスを選ぶ（オプション）

Secondary:
: 必要ならば2番目に適当なクラスを選ぶ（オプション）

Comments:
: 4 pages, 7 figures.~

Submitted to Hogehoge Review Letters

Report-no:
: 所属研究所で出したプレプリント番号とか（もしあれば）

Journal-ref:
: とりあえず無記入（あとで論文誌に載ったら追加する）

Abstract:
: （画面上で20行程度以内に収める）

Upload this file:
: /home/okumura/hogehoge/hogehoge.tar.gz~

（ファイルのフルパス。［参照］から選んでもいい）

最後に［SUBMIT］を押すと，画面が変わって，「しばらく待て」と言ってきます。
10〜30秒ほど待って，［CLICK HERE TO CHECK STATUS］ボタンを押してください。
成功すれば，論文番号（たとえば cond-mat/9806042）と，
論文パスワードを表示する画面になります。
確認のためアブストラクトや PostScript ファイルをダウンロードしてみましょう
（このとき論文番号と論文用パスワードの入力を求められます）。
PostScript ファイルは gzip で圧縮されたものです。
