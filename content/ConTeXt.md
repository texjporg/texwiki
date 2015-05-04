---
title: "ConTeXt"
url: "/ConTeXt/"
date: 2012-04-17T15:12:49Z
pukiwiki: "ConTeXt"
---

# ConTeXt

## ConTeXt {#f2jmn54o}

ConTeXt は Hans Hagen による TeX のマクロパッケージです．
[LaTeX](/LaTeX/) と同様の位置付けのものですが，ユーザによるカスタマイズのしやすさがより重視されています．
現在のバージョンは Mark IV (MkIV) と呼ばれ，[LuaTeX](/LuaTeX/) と一体的に開発が進められています． <!-- ConTeXt の概要を，日本語で説明したサイトがほぼ見当たりません．詳しい方，加筆お願いします． --> <!-- 全くもって詳しいわけではないですが，ConTeXt Wiki などを参照しながら加筆してみました．事実誤認などあれば修正願います．- - kmaeda (2015-05-05) -->

- [http://www.ctan.org/pkg/context](http://www.ctan.org/pkg/context)

***

***

### LaTeX との違い {#gc7806e0}

LaTeX では，ユーザは文章の内容についてのみ集中すればよく，体裁の調整が必要な場合は第三者が作成したパッケージを読み込むことで対応することになっていました．
もし所望の体裁を実現するパッケージが存在しない場合は自力でなんとかしなければならないということになりますが，大抵の場合は難解な TeX プログラミングを要求されることになり，一般的なユーザには手も足も出ないという結果になるのが通常でした．
また，サードパーティのパッケージによる拡張は相性の問題を生じます．
LaTeX 本体のマクロを書き換えてしまう「行儀の悪い」パッケージが [hyperref](/hyperref/) をはじめとして主要なパッケージにも多数存在しますが，こうしたパッケージ同士が衝突して意図しない動作をしたりエラーを出すこともしばしばでした．

ConTeXt では，内容と体裁を分離するのは LaTeX と同じですが，体裁の調整もユーザ自身によって全て可能となることを目標にしています．
このために，外部パッケージなしでもあらゆる部分が調整可能となるようにインターフェースが整備されています．
裏返すと，ConTeXt は LaTeX 以上に大規模なマクロパッケージであるということになります．
現在のバージョンである MkIV では LuaTeX と一体的に開発が進められており，Lua によるコードが多く含まれています．

一方，LaTeX に対する ConTeXt の欠点としては，ユーザがまだ少ないために（特に日本語の）情報が少ないこと，論文投稿時にほぼ全ての学術出版社や [arXiv](/arXiv/) では LaTeX の原稿しか認められていないことが挙げられます．

- [ConTeXt vs. LaTeX - ConTeXt Wiki](http://wiki.contextgarden.net/FAQ#ConTeXt_vs._LaTeX)
- [ConTeXt について記述し始めてみる - Qiita](http://qiita.com/kuroky_plus/items/c22f5b7e88cabd0faf2f)（黒木さん）

### はじめの一歩 {#uba3ae77}

まず，ConTeXt がインストールされているかどうかを確かめます（以下は [TeX Live](</TeX Live/>) の場合）．

```
$ context --version
```

```
resolvers       | trees | analyzing 'home:texmf'
mtx-context     | ConTeXt Process Management 0.61
mtx-context     |
mtx-context     | main context file: /usr/local/texlive/2015/texmf-dist/tex/context/base/context.mkiv
mtx-context     | current version: 2015.04.18 14:41
```

上のようにバージョン情報が出ればOKです．

[W32TeX](/W32TeX/) の場合は，最初に installmk4 を実行する必要があります．
この際 mktexlsr が実行されるため，ls-R が必要ない人は deltexlsr も実行しましょう．

```
C:\Users\user>installmk4
Generate ConTeXt mkiv format.
first, run mktexlsr
（大量のログ）
```

```
C:\Users\user>deltexlsr
Deleted : C:/w32tex/share/texmf-projects/ls-R
Deleted : C:/w32tex/share/texmf-local/ls-R
Deleted : C:/w32tex/share/texmf-dist/ls-R
deltexlsr: Done.
```

確認が終わったら，次の hello.tex を作成します．

```
\starttext
\startsection[title={Testing \ConTeXt}]
  This is my {\em first} \ConTeXt{} document.
\stopsection
\stoptext
```

次のコマンドを実行すると hello.pdf が生成されます．

```
$ context hello
```

TeX Live の場合は初回実行時に fmt ファイルを作成するため，大量のログが出ます．

- [First Document - ConTeXt Wiki](http://wiki.contextgarden.net/First_Document)

#### カスタマイズ {#ce416d71}

例えば「なんでページ番号がヘッダの真ん中に出るんだよ！」と思った方は，次のように \setuppagenumbering を入れるとフッタに出るようにできます．

```
\setuppagenumbering[location={footer,middle}]
\starttext
\startsection[title={Testing \ConTeXt}]
  This is my {\em first} \ConTeXt{} document.
\stopsection
\stoptext
```

[レイアウトの設定](http://wiki.contextgarden.net/Layout)もやってみましょう．
上下左右の余白 2cm，そのうちヘッダとフッタにそれぞれ 1cm としてみます．

```
\setuplayout[backspace=2cm, % 左端から本文までのスペース
  topspace=1cm,             % 上端からヘッダまでのスペース
  header=1cm,               % ヘッダの高さ
  footer=1cm,               % フッタの高さ
  width=middle,             % 本文が中心になるように残りの余白を設定
  height=middle]
\showframe                  % 設定したレイアウトを枠で表示
\setuppagenumbering[location={footer,middle}]
\starttext
\startsection[title={Testing \ConTeXt}]
  This is my {\em first} \ConTeXt{} document.
\stopsection
\stoptext
```

このように，ConTeXt では体裁調整のコマンドが多数用意されています．
さらに色々試してみたい方は [ConTeXt reference manual](http://wiki.contextgarden.net/ConTeXt_reference_manual) や [Command reference - ConTeXt Wiki](http://wiki.contextgarden.net/Command) を見ましょう．

### ConTeXt で日本語 {#y0a5579a}

MkIV は LuaTeX の上で動作するため，OpenType フォントを簡単に使うことができます．
このおかげで，あとは日本語組版ルールがきちんと実装されれば実用になると期待されます．

まず，フォーラムの以下のトピックから [type-imp-ipaex.mkiv](http://oku.edu.mie-u.ac.jp/tex/file.php/2/moddata/forum/2/8903/type-imp-ipaex.mkiv) をダウンロードし，適当なディレクトリに保存します（2015/05/04 以降の W32TeX では不要，TeX Live 2015 でも不要になる？）．

- ConTeXt での日本語設定：[forum:1562](https://okumuralab.org/tex/mod/forum/discuss.php?d=1562)

同じディレクトリに次のファイルを作成し，context で処理します．
初回実行時はフォントデータベースを作成するため，少し時間がかかります．

```
\starttext
\setupbodyfont[ipaex,10pt]
\startscript[nihongo]
```

```
\hsize=200pt
```

```
日本語の表記では“漢字”や“仮名”だけでなく，“ローマ字”や“アラビア数字”，さら
に“句読点”や“括弧類”などの記述記号を用いる.
% http://www.w3.org/TR/jlreq/
% Fig. 3.5: Examples of quoted text using LEFT DOUBLE QUOTATION MARK and RIGHT DOUBLE QUOTATION MARK.
```

```
\bigskip
```

```
ピリオドは，stopやfull stopともいい，平叙文・命令文の終わりに付ける．
見出しの章・節名や，図版の説明（caption）などでは省いてもよい．しかし，
図版のcaptionが2行や3行になるときには付けるようにする．
% http://www.w3.org/TR/jlreq/
% Fig. 3.34: Example of proportional Western fonts used in Japanese in horizontal writing mode.
```

```
\bigskip
```

```
\type{タイプライタ体（typewriter）}や{\italic イタリック強調（italic）}や{\bold 太字強調（bold）}のフォント設定も確認すべきである．
```

```
\stopscript
\stoptext
```

これで和文部分が IPAex，欧文部分が TeX Gyre Pagella と TeX Gyre Cursor で組まれます．

### 関連リンク {#o29b44da}

- [ConTeXt wiki](http://wiki.contextgarden.net/)
    - [ConTeXt Standalone/Implementation](http://wiki.contextgarden.net/ConTeXt_Standalone/Implementation)
- [http://standalone.contextgarden.net/](http://standalone.contextgarden.net/)
- [http://qiita.com/tags/context](http://qiita.com/tags/context)
- ConTeXt の索引について：[forum:1266](https://okumuralab.org/tex/mod/forum/discuss.php?d=1266)
