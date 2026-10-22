---
title: "LaTeX"
url: "/LaTeX/"
date: 2015-04-26T16:25:54Z
pukiwiki: "LaTeX"
---

# LaTeX

## LaTeX {#q7391e7f}

LaTeX は Leslie Lamport によって開発された文書処理システムです．
[TeX](/TeX/) のマクロパッケージ[^1]として構築されています．

***

***

### TeX と LaTeX の違い {#b9485cfe}

単に「TeX」と言った場合，それが LaTeX のことを指している場合も多いのですが，TeX と LaTeX は本来区別されるべきものです．

TeX は Donald E. Knuth によって開発された組版エンジン，言語処理系です．
言語処理系だけでは実際の組版を行うのは大変で，プログラミング言語でいうライブラリにあたるものが必要になります．
そこで，まず Knuth が自身の著書を書くための plain TeX というマクロパッケージが作成されました[^2]．
しかし，plain TeX では組版に最低限必要となる程度の機能しか提供されていなかったため，思い通りの出力を得るにはある程度の熟練が必要であり，もっと簡単に論文やレポート作成に活用できるようにしたいという要望がありました．

この要望に応えたのが Leslie Lamport による LaTeX です．
LaTeX では，クラスファイルによってどのように文書が組版されるべきかを指定し，あとは \section などのコマンドや環境と呼ばれるものを用いることで文書の構造を記述（マークアップ）すれば，組版の細部については気にしなくても適切な出力が得られるようにマクロが整備されました．
また，[パッケージ](</パッケージ/>)（スタイルファイル）を読み込むことで，容易に機能拡張ができるようになっています．
パッケージは各ユーザが作成することもでき，こうしたパッケージを集めたサイトが [CTAN](/CTAN/) です．
そして，CTAN に投稿されたパッケージを各種 TeX エンジンのバイナリなどと一緒に配布するものが TeX ディストリビューションであり，国内では [TeX Live](</TeX Live/>) がよく利用されています．

現在では TeX で組版を行う場合には LaTeX を使うことが圧倒的に多いため[^3]，冒頭に述べたような「TeX」で LaTeX を指すような混同が生じています．

### 公式サイト {#efac9d0e}

現在の開発，保守は LaTeX3 project によって行われています．

- [http://www.latex-project.org/](http://www.latex-project.org/)

### チュートリアル {#m2e439ef}

LaTeX のチュートリアルが [LaTeX入門](</LaTeX入門/>)にあります．こちらをお読み下さい．

エラーや警告が出た場合は，以下でメッセージへの対処法が説明されていますので，参考にして下さい．

- [LaTeX のエラーメッセージ](</LaTeX のエラーメッセージ/>)
- [LaTeX の警告メッセージ](</LaTeX の警告メッセージ/>)
- [LaTeX コマンドの誤用例](</LaTeX コマンドの誤用例/>)

### LaTeX2e {#db98cc0c}

LaTeX の現在の最新版であり，単に「LaTeX」と言った場合は通常これを指します．

LaTeX のバージョン2が出た後に，次期バージョンである LaTeX3 の開発が進められました．しかし，これが難航したために，LaTeX3 リリースまでの「つなぎ」として The New Standard LaTeX (LaTeX2e) というバージョンが1994年にリリースされました．
その後も LaTeX3 の開発は続けられていますが，現在でも LaTeX2e が最新版という状態が続いています．

#### TeX Live 2015 以降での変更点 {#s8024647}

これまで，LaTeX2e では互換性を壊すような修正や改善は本体（カーネル）には直接取り込まず，fixltx2e というパッケージを読み込むことで反映されるようにするという方針がとられてきました．
しかし，TeX Live 2015 からはこの方針が転換され，こうした変更点もカーネルに取り込み，もしそれで過去の文書の組版に問題が出るようならば latexrelease パッケージを読み込めば過去のバージョンの動作をするようになりました．

- [LaTeX News, Issue 22](http://latex-project.org/ltnews/ltnews22.pdf)
- kernel の大量の変更点：[forum:1558](https://okumuralab.org/tex/mod/forum/discuss.php?d=1558)
- [LaTeX が新しくなった話](http://d.hatena.ne.jp/zrbabbler/20150429/1430281181)

#### TeX Live 2016 以降での変更点 {#efa6232c}

さらに，2016 年末頃にリリースされる新しい LaTeX2e は，[e-TeX](/e-TeX/) 拡張をもつ
TeX エンジンを必須とする方向に開発が進められています． <!-- これは，e-TeX が持つデバッグ機能やコードの書きやすさ等から，2004 年頃から長きにわたり --> <!-- LaTeX team が「将来的には」と計画してきたこと． -->

- LaTeX 次期バージョンで e-TeX 必須？ [forum:2042](https://okumuralab.org/tex/mod/forum/discuss.php?d=2042)

このため，e-TeX 拡張をもたないエンジン

- 日本でよく知られているものとしては，例えばアスキーのサイトでまだ配布されている
    pTeX 3.1.11 や NTT JTeX など

- Knuth のオリジナルの TeX、Y &amp; Y TeX など

で LaTeX のフォーマットを作成できなくなることが予想されます．

※なお、TeX Live（2012 以降）に含まれる各種 LaTeX（“何々latex” というコマンド）は全て e-TeX 拡張をもつエンジンの上で動作しています。例えば、platex は e-pTeX（e-TeX 拡張の pTeX エンジン）で動作します。

% 要追記．

#### pLaTeX2e {#q968bb54}

pTeX エンジン向けに，日本語組版に必要な機能を LaTeX2e に追加，もしくは改変したものです．
注意が必要な改変点として，フォント関係のコマンド (NFSS2)，脚注とボトムフロートの出力順序の入れ替えなどがあります．

もともと pTeX と同様にアスキー（現：[角川アスキー総合研究所](https://www.lab-kadokawa.com/)）によって開発されてきましたが，2016 年から日本語 TeX 開発コミュニティによって fork されて開発が続けられています．

- [GitHub - texjporg/platex: pLaTeX2e and miscellaneous macros for pTeX](https://github.com/texjporg/platex)

### LaTeX3 {#f2915fa5}

LaTeX の次期バージョンです．
「まずは LaTeX を記述するためのプログラミング言語を作ろう」として動き出したものの，この段階での試行錯誤が長年に渡って続いている状態にあります．

最近では，LaTeX2e の上でも expl3 パッケージを読み込めば開発中のこのプログラミング言語を試すことができるようになっています．
いくつかの新しい LaTeX2e 用のパッケージはこの言語を用いて書かれています．
LaTeX3 は初期から [e-TeX](/e-TeX/) 拡張を必須とし，次第に [pdfTeX](/pdfTeX/) などの拡張も利用するようになりました．
いま（2015 年現在）では素の e-TeX ですら動かせない状態にあります．

#### 注意点 {#t6u982n7}

新しい LaTeX2e 用のパッケージのうち，LaTeX3 の構文で記述されているものとして以下があげられます．

- 例：[media9](/media9/), [siunitx](/siunitx/) など

これらは expl3 を内部で読み込むようになっています．
ただし，2015 年 7 月頃までの expl3 は pTeX や upTeX というエンジンを知らないため，これらを
pdfTeX であると誤判定します．

- このことが直接影響する例：[日本語の文書に media9 パッケージでマルチメディア埋め込み](http://acetaminophen.hatenablog.com/entry/2014/11/28/002341)

対処法として，ZR さんによる [bxexpl3ptex.sty](https://gist.github.com/zr-tex8r/2adc6f1e62cb591a1204) を用いる方法がありましたが，2015 年 8 月頃から
expl3 側が e-(u)pTeX を公式にサポートするようになったため、不要となりました．

ちなみに，pTeX で expl3 がサポートされたのは [qa:55490](https://okumuralab.org/~okumura/texfaq/qa/55490.html)（→ [qa:55523](https://okumuralab.org/~okumura/texfaq/qa/55523.html) でバグ修正）以降ですので，こうしたパッケージはそれ以前では利用できないことにご注意ください．

### LaTeX2.09 {#lb5604b4}

LaTeX2e の一つ前の版であり，一昔前には広く使われていました．
冒頭が \documentclass ではなく \documentstyle になっているものはこのバージョン向けに書かれた文書です．

### 関連リンク {#ta293e5c}

- [LaTeXに関する新着投稿 - Qiita \[キータ\]](http://qiita.com/tags/LaTeX)
- [LaTeXの検索結果 - Qiita \[キータ\]](http://qiita.com/search?utf8=%E2%9C%93&q=LaTeX)
- [CTAN:macros/latex](https://mirror.ctan.org/macros/latex)

[^1]: 紛らわしいことに LaTeX にもパッケージという用語がありますが，マクロパッケージといった場合には単に「TeX のマクロ集（フォーマット）」という意味になります．[TeX の項目を参照](/TeX/#zf0ba6fa)．
[^2]: 現在でも，tex, ptex, pdftex などのコマンドで plain TeX を使うことができます．
[^3]: 他に，TeX の上に構築された文書処理システムとして [ConTeXt](/ConTeXt/) があります．
