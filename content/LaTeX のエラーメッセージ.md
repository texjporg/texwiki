---
title: "LaTeX のエラーメッセージ"
url: "/LaTeX のエラーメッセージ/"
date: 2004-12-09T23:17:11Z
pukiwiki: "LaTeX のエラーメッセージ"
---

# LaTeX のエラーメッセージ

下記では“\somecs”，“\othercs”を“コマンド名を一般的に表す記号”として用いています．
メッセージに“\somecs”，“\othercs”という文字列が現れているわけではありません．
また，メッセージは原則としてアルファベット順に並べています．

<!-- 目次があった方が検索性は増すし，リンクのためのアンカーも付くので良いと思う。 -->

```

```

***

#### ! \*\*\* What's this? NFSS release 0? \*\*\* {#s747d530}

NFSS1 のコマンド \new@fontshape の引数を調べている最中に，
仕様に合わない記述が見つかった場合のエラーメッセージのようですが…
もしこれを目にしたら，問題となっている \new@fontshape を
\DeclareFontShape を用いて書き換えてください．
必要があれば，パッケージあるいはクラスファイルの作成者に連絡して修正を促すことになるでしょう．

#### ! Corrupted NFSS tables. {#fd9ea825}

何らかの理由でフォントの代替に失敗した場合に現れるエラーメッセージ（のひとつ）です．
NFSS 関係のマクロの引数を書き間違えたくらいではこのエラーにお目にかかることはまずないでしょう．
例えば，次のような記述を行うとこのエラーが生じます．

```
\documentclass{article}
\begin{document}
\makeatletter
\@namedef{D@OT1}{%
  \def\default@family{cmr}%
  \def\default@series{mc}%
  \def\default@shape{n}}%
\makeatother
{\fontseries{mc}\selectfont a}
\end{document}
```

→ このエラーが生じた場合には…
LaTeX システム自体を構成するファイルのどれかが壊れている，
という可能性を疑った方がよいでしょう．

#### ! LaTeX Error: \\&lt; in mid line. {#rd81bf4a}

tabbing 環境で \\&lt;（現在の行の先頭項目のタブ位置（項目を揃える位置）を 1 個前のタブ位置に戻すマクロ）
を行の先頭項目以外で用いた場合に（原則として）現れるエラーメッセージです．<br> <!-- 行の左端（から 0pt だけ下がったところ）に複数のタブ位置を設定するような記述を行うと， --> <!-- \< をある行の 2 番目以降の項目の中で用いてもエラーにならない場合が起こり得ます． -->
→ tabbing 環境内で \\&lt; を用いる場合には，行の先頭項目の中（先頭に置くのがよいでしょう）で用いてください．

#### ! LaTeX Error: Bad \line or \vector argument. {#wcc0143f}

（picture 環境内の）\line あるいは \vector の方向が
“処理可能なもの”ではない場合のエラーメッセージです．<br>
→ \line あるいは \vector の方向の指定が正しいかどうかをチェックしてください．
なお，特に \line あるいは \vector の機能を拡張していない場合には，
水平・垂直のどちらでもない線分・矢印の方向は次の条件をみたさなければなりません．

- \line(<em>m</em>,<em>n</em>){...} の <em>m</em>，<em>n</em>:
    どちらも -6 以上 6 以下の整数で，<em>m</em> と <em>n</em> は互いに素になるようにします．

- \vector(<em>m</em>,<em>n</em>){...} の <em>m</em>，<em>n</em>:
    どちらも -4 以上 4 以下の整数で，<em>m</em> と <em>n</em> は互いに素になるようにします．

#### ! LaTeX Error: Bad math environment delimiter. {#ea7e2e5a}

\\( を数式中で用いた場合のように，\\(，\\)，\\\[，\\\] を不適切な箇所で用いた場合に現れるエラーメッセージです．<br>
→ 数式になる部分の範囲をチェックして，\\(，\\)，\\\[，\\\]
をインライン数式・ディスプレイ数式の範囲を正しく表すように使用してください．

#### ! LaTeX Error: \begin{<em>env_X</em>} on input line <em>lineno</em> ended by \end{<em>env_Y</em>}. {#rfc615e6}

環境の \begin と \end の対応が狂っているときに現れるエラーメッセージです．<br>
→ まず，環境名が正しいかどうかをチェックしてください．
正しければ，エラーメッセージ中およびエラーメッセージの後に現れている行番号などを参考にして
“個々の環境の開始位置・終了位置”をチェックしてください．
環境の終了順序を間違えているということもよくあることですし，
また，必要があれば \end{<em>env_X</em>} あるいは \begin{<em>env_Y</em>} を補うことになるでしょう．

#### ! LaTeX Error: Can be used only in preamble. {#hed16dca}

\usepackage のようなプリアンブルでしか使えないコマンドを本文部分
（\begin{document} のあと）で用いた場合に現れるエラーメッセージです．<br>
→ このエラーを引き起こした記述をプリアンブルに移動してください．

#### ! LaTeX Error: Cannot be used in preamble. {#kf524371}

\nocite をプリアンブルで用いた場合に現れるエラーメッセージです．<br> <!-- LaTeX2e <2003/12/01> での変更点． -->
→ \nocite を本文部分（\begin{document} 以降）に移動してください．

#### ! LaTeX Error: \caption outside float. {#ee50ed0c}

\caption を figure 環境や table 環境の外部で用いた場合に現れるエラーメッセージです．<br>
→ \caption および \caption をつける対象を figure 環境などの適切な環境に入れてください． <!-- 図版の配置を figure 環境などを用いずに済ますために，figure 環境などの内部ではないところにおいて --> <!-- \@captype を直接定義した上で \caption を使用する，という方法が用いられることもありますが… --> <!-- そういうことをするよりも float パッケージあるいは here パッケージといったものを --> <!-- 用いて図版の配置の自由度を増した方がよいでしょう． -->

#### ! LaTeX Error: Command \`\somecs&#39; already defined. {#t0a9fe7d}

\DeclareMathAlphabet，\DeclareMathSymbol
などを用いて数式用書体変更コマンドや数式用記号を定義（あるいは再定義）する際に，
\somecs が定義済みであって，かつ，\DeclareMathAlphabet などによっては定義を上書きできない
（と判定された）場合のエラーメッセージです．
例えば，

```
\DeclareMathSymbol{\circle}{\mathord}{symbols}{"0D}
```

のような記述を行った場合に現れます．<br>
→ まず，定義あるいは再定義するコマンドの名称が正しいかどうかを確認してください．
正しい場合（全く別の意味で定義されているが，
真にやむを得ない事情により数式用のコマンドとして再定義する場合）には，
再定義する前に \let\somecs\relax のように \somecs の定義を消去してください．

#### ! LaTeX Error: Command \somecs already defined.<br>  Or name \end... illegal, see p.192 of the manual. {#ca8d2049}

\newcommand などで \somecs を定義しようとしている場合に，
(1) \somecs が定義済みである
(2) \somecs が \end... という形をしている
(3) \somecs が \relax そのものである
のいずれかの理由で（新規に）定義できない場合のエラーメッセージです．<br>
→ コマンドを新設する場合には，\somecs の名称を既存のコマンドと衝突しないものに変更してください．
本当に再定義する場合には \renewcommand を用いてください．
なお，あるパッケージで定義されているマクロと同じマクロが別のパッケージでも
\newcommand で定義されていると，パッケージの読み込み順によっては
\newcommand を用いたほうのパッケージの読み込み時にこのエラーが生じることがあります．

> 環境 <em>envname</em> は環境の開始時に \\<em>envname</em> を用い，終了時に \end<em>envname</em> を用います．
> ここで，環境の終了時には特に何もしない，という場合には \end<em>envname</em> は未定義であったとしても構いません．
> そのため，仮に \end... という形の名称のあるコマンドが未定義であったとしても，
> それを不用意に定義すると既存の環境の挙動に影響を与える可能性があります．
> そこで，\newcommand で定義する際には \end... という形の名称のコマンドは定義できないようにしてあります．

#### ! LaTeX Error: Command \somecs invalid in math mode. {#r47ae91e}

コマンド \somecs は数式中では使えない，ということですから，
数式用のコマンドを使って書き換えてください．
例えば，${\rmfamily a}$ → $\mathrm{a}$ のようにします．

#### ! LaTeX Error: Command \`\somecs&#39; not defined as a math alphabet. {#j08c7ccd}

\SetMathAlphabet を用いて“あるバージョンの数式で数式用書体変更コマンド \somecs
に対して用いる書体”を指定しようとした場合に，
その \somecs が数式用書体書体変更コマンドとして定義されていない場合のエラーメッセージです．
例えば，

```
\SetMathAlphabet\textrm{bold}{OT1}{cmr}{bx}{n}
```

のような記述を行った場合に現れます．<br>
→ まず，\SetMathAlphabet による設定を追加する対象のコマンド（\somecs）
の名称が正しいかどうかを確認してください．
正しい場合には，次のように対処してください．

- 未定義なら \DeclareMathAlphabet あるいは \DeclareSymbolFontAlphabet を用いて，
    \somecs を数式用書体変更コマンドとして定義（normal バージョンの数式で
    \somecs に対して用いる書体を設定）してください．

- 定義済みなら（全く別の意味で定義されているが，
    真にやむを得ない事情により数式用書体変更コマンドとして再定義するのなら），
    \let\somecs\relax のように \somecs の定義を消去したのち，
    未定義の場合と同様に扱ってください．

#### ! LaTeX Error: Command \somecs not provided in base LaTeX2e. {#u00632eb}

latexsym パッケージあるいは amsmath パッケージ（あるいはそれに代わるようなパッケージ）
を使用しない状態で \mho，\Join，\Box，\Diamond，\leadsto，\sqsubset，
\sqsupset，\lhd，\unlhd，\rhd，\unrhd のいずれかを用いた場合に現れるエラーメッセージです．<br>
→ latexsym パッケージなどを用いて，使いたい記号に対応するコマンドを定義してください．

#### ! LaTeX Error: Command \somecs unavailable in encoding <em>encoding</em>. {#s9edb3ac}

現在のエンコーディングが <em>encoding</em> である箇所で，
そのエンコーディングでは利用できない文字に対応するコマンド \somecs
を用いた場合に現れるエラーメッセージです．
例えば，

```
\documentclass{article}
\begin{document}
10\textperthousand
\end{document}
```

のような記述を処理すると現れます．<br>
→ 今の例で言えば 10\textperthousand の部分を
10{\fontencoding{T1}\selectfont\textperthousand}
のように変更して然るべき字形を提供するエンコーディングを使用するか，
もっと単純に textcomp パッケージを用いて \textperthousand を
（特に細工しなくても出力されるように）再定義するとよいでしょう．
ほかの記号に関しても同様です．

#### ! LaTeX Error: Command <em>something</em> invalid in math mode. {#z4fff370}

数式中では使えない記述  <em>something</em> を数式中で用いた場合のエラーメッセージで，
数式中で \item を用いた場合などに現れます．<br>
→ エラーを引き起こした記述が数式の外に出るように，文書を修正してください．
例えば，\item がこのエラーを引き起こした場合には，
その \item の直前の項目の中に終了していないインライン数式がある，
といったことが考えられます．

#### ! LaTeX Error: Counter too large. {#ia76fef7}

LaTeX のカウンタの値を \alph，\Alph，\fnsymbol などで文字列化する際に，
カウンタの値が文字列化できる値の上限を超えた場合のエラーメッセージです．<br>
→ 番号の形式を変更しないのなら，文書自身に手を加えて，
問題となっているカウンタの値が大きくなりすぎないようにすることになります．
文書自身に手を加えることができないなら，\alph などのコマンドを別のものに取り換えるか再定義して，
文字列化できる範囲を拡大することになります（例えば，\alph の場合なら，
27 以降の番号に対しては a に戻るか，aa，ab のように続ける，といった変更が考えられるでしょう）．

#### ! LaTeX Error: Encoding scheme  \`<em>encoding</em>&#39; unknown. {#p4b7362a}

\DeclareFontFamily や \fontencoding などを用いた際に，
指定したエンコーディング名 <em>encoding</em> が未定義である場合のエラーメッセージです．<br>
→ まず，エンコーディング名が正しいかどうかを確認してください．
正しければ，\DeclareFontEncoding を用いてエンコーディング  <em>encoding</em> の宣言を行ってください．

#### ! LaTeX Error: Environment <em>envname</em> undefined. {#k8a066dd}

\renewenvironment で <em>envname</em> 環境を再定義しようとしているにもかかわらず，
その <em>envname</em> 環境が未定義であった場合のエラーメッセージです．<br>
→ まず，環境名が正しいかどうかを確認してください．
正しければ（環境を新設する場合なら），\renewenvironment ではなく \newenvironment を使ってください．

#### ! LaTeX Error: File \`<em>filename</em>&#39; not found. {#yc513d3e}

\usepackage や \input などでファイルを読み込む際に，
読み込み対象のファイルが見つからなかった場合に現れるエラーメッセージです．<br>
→ まず，読み込み対象のファイル名・パッケージ名などを確認してください．
正しいファイル名などを指定している場合には，
そのファイルが“TeX が探し出せる”ディレクトリ
（カレント・ディレクトリあるいはファイル texmf.cnf の TEXINPUTS.platex
などで指定されるディレクトリ）にあるかどうかをチェックしてください．
ユーザ自身が所有していないファイルを読み込もうとしていた場合には，もちろん，
然るべきファイル（あるいはパッケージ）を入手（あるいはインストール）することになります．

> ファイル ls-R（ファイル検索用のデータベース・ファイル）を利用しているのでしたら，
> パッケージ類のインストールを行った際には mktexlsr（に相当する処理）
> も行ってファイル ls-R を更新してください．

#### ! LaTeX Error: Font <em>attributes</em> not found. {#o6eb2ec1}

書体・文字サイズの変更などの際に，属性 <em>attributes</em> に対して使用するフォントを割り出せなかった場合のエラーメッセージです．<br>
→ 使用することになった属性 <em>attributes</em> に対するフォント定義が適切なものであるかどうかを確認してください
（\DeclareFontShape の第 5 引数の記述に不備があって，
フォント定義がすべてのサイズをカバーしていないかサイズ代用ができないようになっていると考えられます）．
専用フォントを用いるようなパッケージを使用している場合には，そのパッケージに含まれる
fd ファイルが充分に新しいものであるかどうかにも注意してください．

#### ! LaTeX Error: Font family \`<em>encoding</em>+<em>family</em>&#39; unknown. {#e2c51296}

\DeclareFontShape を用いてエンコーディングが <em>encoding</em> でファミリーが <em>family</em>
の何らかのシリーズ・シェイプに対するフォント定義を与える際に，
このエンコーディング <em>encoding</em> とファミリー <em>family</em>
の組み合わせが宣言されていない場合のエラーメッセージです．<br>
→ まず，エンコーディング名・ファミリー名が正しいかどうかを確認してください．
正しければ，\DeclareFontFamily または \DeclareKanjiFamily を用いてエンコーディング
<em>encoding</em> にファミリー <em>family</em> が存在することを宣言してください．

#### ! LaTeX Error: Illegal character in array arg. {#i55d4bb2}

array，tabular 両環境の引数（個々の列の揃え方の指定）の中に使用できない文字
（k など）が存在する場合のエラーメッセージです．<br>
→ 列の揃え方の指定が c，r などの使用できる指定だけからなるかどうかををチェックしてください．

#### ! LaTeX Error: \include cannot be nested. {#z1a6e5cc}

\include で読み込んだファイルの中で再び \include を用いた場合に現れるエラーメッセージです．<br>
→ \include で読み込んだファイルの中では \include を使わずに \input などを用いてください．

#### ! LaTeX Error: KANJI Encoding scheme  \`<em>encoding</em>&#39; unknown. {#zbba26a3}

\DeclareKanjiFamily や \fontencoding（\kanjiencoding）などを用いた際に，
指定した和文フォント用のエンコーディング名 <em>encoding</em> が未定義である場合のエラーメッセージです．<br>
→ まず，エンコーディング名が正しいかどうかを確認してください．
正しければ，\DeclareTateKanjiEncoding あるいは \DeclareYokoKanjiEncoding
を用いてエンコーディング  <em>encoding</em> の宣言を行ってください
（充分に新しい pLaTeX では，さらに \KanjiEncodingPair の設定も適宜行うことになるでしょう）．

#### ! LaTeX Error: \LoadClass in package file. {#nf7528a2}

パッケージ（.sty）ファイル内で \LoadClass が用いられている場合に現れることがあるエラーメッセージのひとつです
（典型的な場合は，そのようなパッケージをクラスファイル内で \RequirePackage で読み込んだ場合）．<br>
→ \LoadClass はクラスファイル内でしか使えないので，
読み込むことにするファイルの拡張子を変えて \RequirePackage あたりを用いてください．
もし，既存のクラスファイルを読み込まなければならない場合には，
\LoadClass を用いているパッケージファイルをクラスファイルに格上げしてください
（なお，\LoadClass で読み込まれるクラスファイルがさらに別のクラスファイルを
\LoadClass で読み込むのは構いません）．

#### ! LaTeX Error: Lonely \item--perhaps a missing list environment. {#n1fd34a4}

enumetate 環境，itemize 環境といった list 系の環境の外部で
\item を用いた場合などに現れるエラーメッセージです．
“など”と書いていますが，特に変わったことをしていなければ，
ほかの場合は考えなくても構いません．<br>
→ \item を用いた箇所の周囲の記述を調べ，
その \item が適切な箇条書きの環境に含まれるように変更してください．

#### ! LaTeX Error: Math alphabet identifier \somecs is undefined in math version \`<em>version</em>&#39;. {#sa91836b}

“数式用書体変更コマンド \somecs は，数式バージョン <em>version</em> に対しては未定義”ということですが…
きちんとメンテナンスされていて，かつ，充分に新しいクラスファイル・パッケージを使用している場合にはお目にかかることはないでしょう．
もし，これを目にした場合は，使用しているパッケージあるいはクラスファイルの中の
<strong>NFSS1 形式</strong>の記述を現行の NFSS2 形式の記述に変更してください．

#### ! LaTeX Error: Math version \`<em>version</em>&#39; is not defined. {#v358caa5}

\mathversion を用いた際に，指定したバージョン <em>version</em> が未定義である場合のエラーメッセージです．<br>
→ まず，バージョン名が正しいかどうかを確認してください．
正しければ，\DeclareMathVersion を用いて数式バージョン <em>version</em> を宣言してください．
必要があれば，さらに \SetSymbolFont，\SetMathAlphabet を用いてこのバージョンの数式で用いるフォントの設定を行ってください．

#### ! LaTeX Error: Missing @-exp in array arg. {#qbae2773}

array，tabular 両環境の引数（個々の列の揃え方の指定）の末尾が文字 @
である場合のエラーメッセージです．<br>
→ @ の後に適切な記述を追加してください（@ は @{<em>item</em>} という形で
<em>item</em> を挿入するために用います）．

#### ! LaTeX Error: Missing \begin{document}. {#d3420228}

\begin{document} がない，すなわち LaTeX 文書のプリアンブル部分に本文部分に属する記述が入り込んでいる，
ということですが，むしろ，“プリアンブル部分で用いるコマンドの引数の個数を間違えたために，
後続のコマンドの引数になるはずのものがただの文字列として扱われている”
ということも多いようです．いずれにせよ，プリアンブル部分の記述を見直すことになります．

#### ! LaTeX Error: Missing p-arg in array arg. {#sedf0449}

array，tabular 両環境の引数（個々の列の揃え方の指定）の末尾が文字 p
である場合のエラーメッセージです．<br>
→ p の後に項目の幅を表す寸法を追加してください（p は p{<em>size</em>}
（<em>size</em> は寸法）という形で幅が <em>size</em> の段落型の項目を指定するために用います）．

#### ! LaTeX Error: \*\*\*  NFSS release 1 command \somecs found<br>\*\*\*  Recovery not possible. Use \othercs. {#z62addf5}

文字通りです．NFSS の旧版（NFSS1）のコマンド \somecs が用いられている場合のエラーメッセージですので，
メッセージ中の \othercs を用いて書き換えてください．
必要があれば，パッケージ（あるいはクラスファイル）の作成者に連絡して訂正を促すことになります．

#### ! LaTeX Error: \*\*\* NFSS release 1 command \newmathalphabet found<br>\*\*\* Automatic recovery not possible.<br>\*\*\* TYPE H for Help. {#ma648b4d}

これも文字通りです．
パッケージあるいはクラスファイル中の \newmathalphabet が用いられている箇所を
\DeclareMathAlphabet を用いて書き換えてください．
必要があれば，パッケージ（あるいはクラスファイル）の作成者に連絡して訂正を促すことになります．

#### ! LaTeX Error: No counter &#39;<em>cntname</em>&#39; defined. {#f0042c79}

\addtocounter，\setcounter，\stepcounter によって LaTeX のカウンタの操作を行う際などに，
カウンタ <em>cntname</em> が未定義である場合のエラーメッセージです．<br>
→ カウンタ名 <em>cntname</em> が正しいかどうか（あるいは定義済みであるかどうか）をチェックしてください．
新設すべき場合には \newcounter でカウンタ <em>cntname</em> を定義してください．

> （v2.13 の）amsmath パッケージの \numberwithin の第 2 引数に未定義のカウンタ名を用いると，
> <em>cntname</em> が ? になったメッセージが現れますが，
>
> これは単にエラーメッセージに関する処理の変更漏れと思われます．

#### ! LaTeX Error: No \title given. {#y458ebfd}

\title を用いない状態で \maketitle を行った場合に現れるエラーメッセージです
（使用するクラスファイルによっては現れないこともあります）．<br>
→ \maketitle を用いる前に \title を用いて文書の表題を与えてください．

#### ! LaTeX Error: Not a command name: \`<em>something</em>&#39;. {#x14fd096}

\DeclareMathAccent の第 1 引数（数式用アクセント記号として定義されるコマンドのはずのもの）が，
コマンドではない場合のエラーメッセージです．
例えば，

```
\DeclareMathAccent{z}{\mathalpha}{letters}{"7E}
```

のような記述を行った場合に現れます．<br>
→ \DeclareMathAccent の第 1 引数を修正して何らかのコマンドを用いるようにしてください．

#### ! LaTeX Error: Not in outer par mode. {#wcaeb252}

figure，table の両環境や \marginpar を“ページ分割できない”箇所で用いた場合のエラーメッセージです．<br>
→ figure 環境などの記述位置が“ページ分割可能な箇所”であるかどうかチェックしてください．
ページ分割可能でない（ものとみなされる）箇所に figure 環境などがある場合には，
それらの位置を適宜変更してください．

> なお，eclbkbox パッケージによる breakbox 環境のようなある種の枠囲みの環境では，
> 出力結果自体はページ分割可能であっても，処理上は“一度（ひとつの）ボックスを作成したのち，
> そのボックスを適宜分割・加工して並べ直す”という取り扱いがなされていることがあります．
> そのような場合，（明示的に作成されたボックスの中，というのはページ分割可能な箇所とは
> （一般には）言えませんので）breakbox 環境の中のようなところでも figure 環境の類は使えない，
> ということになります．

#### ! LaTeX Error: Option clash for package <em>package</em>. {#i77dcb0e}

<em>package</em> パッケージを 2 度以上読み込んだ際に，

個々の読み込みの際のオプション指定が一致していない場合に現れるエラーメッセージです．
例えば，プリアンブルで

```
\usepackage[dvips]{graphicx}
\usepackage[dvipdfm]{graphicx}
```

のような記述を行うと上記のエラーメッセージが現れます．<br>
→ 同じパッケージを複数回読み込まないようにするとよいでしょう．

> 何らかのパッケージが（不要なオプション指定とともに）
> 別のパッケージあるいはクラスファイルの中で読み込まれていると，
> 話は面倒ですが…そのような場合はそのパッケージあるいはクラスファイルの作成者に
> “内部で読み込まれているパッケージのオプション指定”
> を調整するためのオプションの導入を促すか，
> 特定の環境を前提としているものとして諦めるか，のいずれかでしょう．

#### ! LaTeX Error: \pushtabs and \poptabs don't match. {#e0554bfb}

tabbing 環境の中では \pushtabs によってタブ位置（\\= によって設定した，各項目を揃える位置）
を保存し，保存しておいたタブ位置を \poptabs によって復元することができますが，
復元するようなタブ位置を保存していない状態で \poptabs を用いると上記のエラーメッセージが現れます．<br>
→ \pushtabs と \poptabs の対応をチェックしてください（余分な \poptabs があるか，
\pushtabs の書き忘れであることが大半でしょう）．

#### ! LaTeX Error: \RequirePackage or \LoadClass in Options Section. {#yb89ccf5}

クラスファイルあるいはパッケージファイルの中の \ExecuteOptions
または \ProcessOptions（オプション指定を処理する部分）で
\RequirePackage または \LoadClass が用いられた場合に現れるエラーメッセージです．<br>
→ \DeclareOption によるオプションの処理内容の定義の中には，
\RequirePackage または \LoadClass を含めることはできないので，
それらを含まないように書き換えます．
何らかのパッケージの読み込みを必要とするオプションがある場合には，
オプション自身には適当なフラグを立てさせるだけにし，\ExecuteOptions および
\ProcessOptions の処理ののちにそのフラグに従ったパッケージの読み込みを行う，
といった方法をとることができます．

#### ! LaTeX Error: \somecs allowed only in math mode. {#bada1d0b}

文字通り“\somecs は数式中でしか使えない”ということですから，
\somecs が用いられている箇所が数式に含まれるように変更するか，
数式の外部でも使えるコマンドで書き換える（例えば，\mathbf → \textbf）
ことになります．

#### ! LaTeX Error: \somecs undefined. {#l442ef96}

\renewcommand で \somecs を再定義しようとしているにもかかわらず，
その \somecs が未定義であった場合のエラーメッセージです．<br>
→ まず，再定義しようとしているコマンドの名称が正しいかどうかを確認してください．
正しければ（コマンドを新設することになるのなら），
\renewcommand ではなく \newcommand を使ってください．

#### ! LaTeX Error: Something's wrong--perhaps a missing \item. {#j1b0c880}

メッセージにもあるように，enumerate 環境などで \item
を忘れた状態で環境の中身のテキストを書いた場合などに現れるエラーメッセージです．<br>
→ \item を忘れていないかどうかチェックしてください．
ただし，\addvspace を段落内で用いた場合にも上記のエラーメッセージが現れるので，
ユーザ自身が \addvspace を（手動で）用いる場合には
\addvspace を用いる前に段落を終了させるように注意してください．

> なお，LaTeX 2.09 ではそのあたりのチェックが甘くて \item なしでもエラーにならない場合があったようです．
> そのバグを使って(?) quote 環境か何かを用いるべきところを \item なしの
> enumerate 環境あたりで書くようなことがなされてもいたようですが，
> そのような記述は然るべき記述に書き換えてください．

#### ! LaTeX Error: Symbol font \`<em>mathgroup</em>&#39; is not defined. {#je2304f5}

\SetMathAlphabet を用いて数式グループ <em>mathgroup</em> に対するフォントの設定を行う場合や
\DeclareMathSymbol などを用いて数式グループ <em>mathgroup</em>
のフォントを使用して出力する文字・記号の定義を行う際に数式グループ <em>mathgroup</em>
が未定義である場合のエラーメッセージです．<br>
→ まず，数式グループ名が正しいかどうかを確認してください．
正しければ，\DeclareMathAlphabet を用いて数式グループ <em>mathgroup</em> を導入してください．

> （ファイル latex.ltx 中の記述の不統一により）エラーメッセージ中の“is”が欠けている場合があります．

#### ! LaTeX Error: Tab overflow. {#xe83f701}

tabbing 環境では \\= によってタブ位置（項目を揃える位置）を設定できますが，
設定できるタブ位置の個数の上限を超えてタブ位置を設定しようとしたときに現れるエラーメッセージです．<br>
→ タブ位置の設定の仕方を再検討してタブ位置を減らしてください．

> 設定可能なタブ位置の個数を増やすのは，
> ファイル latex.ltx に手を加えてからフォーマットファイルを再作成するか，
> tabbing 環境の実装にかなり手を加えない限り無理のようです． <!-- 既製品がどこかにあるかもしれませんが． -->

#### ! LaTeX Error: The font size command \normalsize is not defined:<br>  there is probably something wrong with the class file. {#bfa94d51}

\normalsize が適切に定義されていない状態で \normalsize を用いた場合に現れるエラーメッセージです．
メッセージ通りにクラスファイルがおかしい場合もありますが，
\documentclass を用いるのを忘れている，という可能性もあります．

#### ! LaTeX Error: There's no line here to end. {#fdcbc5c5}

強制改行の \\\，\linebreak あるいは行分割の抑制の \nolinebreak を段落間
（のような，行分割の強制または抑制の対象となる行が存在しない箇所）
で用いた場合のエラーメッセージです．<br>
→ 本当に \\\ などを用いる必要があれば，\\\ などの前に \leavevmode を入れて
段落を開始してください．

> list 系の環境（enumerate/itemize/description の各環境や \newtheorem で作成した環境など）の
> \item の直後はまだ段落間になっていることに注意してください
> （\item によって与えられる箇条書きの番号・記号は \item に続く段落の開始時に出力されます）．
> したがって，description 環境などで \item\[...\] の直後で改行するには，
>
> ```
> \item[...] \leavevmode \\
> ```
>
> という具合に記述することになります．

#### ! LaTeX Error: This file needs format \`<em>format_X</em>&#39;<br>  but this is \`<em>format_Y</em>&#39;. {#ubb38849}

クラスファイル内の \NeedsTeXFormat によって（処理に必要な）
フォーマットとして指定されている <em>format_X</em> と，
実際に処理に用いたフォーマット <em>format_Y</em> が異なる場合に現れるエラーメッセージです
（ただし，pLaTeX 使用時には，\NeedsTeXFormat によって“LaTeX2e”
を指定してあってもエラーなく処理できるようになっています）．<br>
→ \NeedsTeXFormat の指定に沿った処理系で処理してください．
典型的な場合としては，jarticle.cls などの pLaTeX 用のクラスファイルを用いた文書を
オリジナルの LaTeX で処理すると上記のエラーメッセージが現れるので，
オリジナルの LaTeX ではなく pLaTeX で処理するようにします．

#### ! LaTeX Error: This may be a LaTeX bug. {#z1a01024}

バグかもしれないと言っていますが，実際には単に“起こり得ないはずの状況”が起こった，ということです．
これを目にしている，ということはおそらく出力ルーチンの改造に手をつけているのでしょうから，
きっちり机上デバッグを行ってから実装を試みましょう．

#### ! LaTeX Error: This NFSS system isn't set up properly. {#i58d8b4b}

（\DeclareFontSubstitution で設定される）
あるエンコーディングに対するデフォルトのファミリー・シリーズ・シェイプの指定が適切でない
（デフォルトの属性に対するフォント定義がなされていない）場合のエラーメッセージです．<br>
→ どのエンコーディングに対する設定が適切でないかは，
このエラーメッセージに対して“H”と返答したときのヘルプメッセージに含まれているので，
そのエンコーディングに対する \DeclareFontSubstitution の指定を変更するか
\DeclareFontSubstitution で与えた属性に対応するフォント定義を追加します．

> 実は，\DeclareErrorFont による“非常時用の”
> 代替フォントの設定が適切でない場合にも上記のエラーメッセージが現れますが…
> ユーザ自身が独自のフォーマットファイルを作りでもしない限り
> \DeclareErrorFont の設定の不備のほうで上記のエラーメッセージを見ることはないでしょう．

#### ! LaTeX Error: Too deeply nested. {#p21abe7a}

enumerate，itemize，description といった箇条書きの環境は多重にして用いることができますが，
無制限に重ねることができるわけではなく，制限があります
（デフォルトでは，enumerate，itemize の各環境のそれぞれについて 4 段階までで，
enumerate，itemize，description といった環境の合計で 6 段階までです）．
その制限を超えて重ねた場合に上記のエラーメッセージが生じます．<br>
→ 文書自身に手を加えて，箇条書きをむやみに重ねずに済むように変更してください．
ただし，真にやむを得ない場合には，\itemize の定義中の

```
\ifnum \@itemdepth > \thr@@ \@toodeep
```

の部分の \thr@@（= 3）を増やし，\labelitemv などを追加すれば
5 段階目（以降）の itemize 環境が使えるようになります．
enumerate 環境についても同様に拡張することができます．
ただし，そのような拡張を行う場合には \list の定義の冒頭の

```
 \ifnum \@listdepth >5\relax
```

の 5 という数値も適宜大きくし，
\\@listvii といった list 系の環境の初期化マクロも追加するとよいでしょう．

#### ! LaTeX Error: Too many columns in eqnarray environment. {#ec5926e0}

eqnarray 環境のひとつの行の中に 3 個以上の &amp; が存在する場合のエラーメッセージです．<br>
→ 余分な &amp; がないかどうか，あるいは \\\ を書き忘れていないかどうかをチェックしてください．
揃える箇所が 3 箇所以上存在する場合には，amsmath パッケージによる
align 環境などを用いるとよいでしょう．
また，揃える箇所が 2 箇所以下でも align 環境などを用いた方がいい，
という意見もあります（実際，eqnarray 環境をデフォルトのままで使うくらいなら
amsmath パッケージが提供する環境を用いたほうがよいでしょう）． <!-- ただし，amsmath パッケージが提供する各種ディスプレイ数式環境には --> <!-- “環境の中身を複数回処理する”というあまり感心しない癖があるので --> <!-- （…処理の都合で半ばやむを得ないというのはわかりますが…）， --> <!-- eqnarray 環境を再定義して済ませることができるのであれば --> <!-- それにこしたことはありません． -->

#### ! LaTeX Error: Too many math alphabets used in version <em>version</em>. {#bf22f8e1}

\mathsf などの数式用書体変更コマンドを多種類用いたためにバージョン <em>version</em>
の数式で使用可能な数式用フォント（個々のバージョンにつき 16 種が上限）
を使い果たした場合のエラーメッセージです．<br>
→ 文書中で使用している数式用書体変更コマンドの種類を減らしてください．
例えば，添字の中では用いていない文字の書体を変更するには \mathsf の代わりに
\textsf を用いることができます．
また，bm パッケージを使用していて，かつ，amsmath パッケージによる \boldsymbol で間に合う場合には，
bm パッケージの使用を取り止めて \boldsymbol を用いることにするとこのエラーを回避できることがあります．

> 余談ですが，bm パッケージは \boldsymbol を \bm のコピーにします
> （\let\boldsymbol\bm という設定を含みます）ので，
> いつでも \boldsymbol で記述しておけば bm パッケージ使用時には \bm で処理されます．

#### ! LaTeX Error: Too many unprocessed floats. {#ob9c5ce7}

未出力の figure 環境・table 環境の個数が多すぎて，
これ以上 figure 環境・table 環境を使えない状態になったときに現れるエラーメッセージです．<br>
→ 文書中に適宜 \clearpage を入れたり，\topfraction や topnumber カウンタの値などの図版の配置に関するパラメータを変更して，
未出力の図版が生じにくくなるようにしてください．
\clearpage を入れる際には afterpage パッケージを併用して \afterpage{\clearpage} のようにするのもよいでしょう． <!-- float 系環境を用いずに直接記述，というのは“やるべきではないこと”に属するので，言及しない． -->
真にやむを得ない場合には，

```
\makeatletter
\count@\z@
\@whilenum\count@<16\do{%
   \advance\count@\@ne
   \expandafter\newinsert\csname bx@\romannumeral\count@\endcsname
   \@cons\@freelist{\csname bx@\romannumeral\count@\endcsname}}
\makeatother
```

のような記述をプリアンブルに入れて“保存可能な図版の個数”を増やすこともできます
（上記の記述の中の 16 という値は適宜変更して構いませんが，
極端に大きくするとエラーが生じます）．

#### ! LaTeX Error: Two \documentclass or \documentstyle commands. {#da43bda4}

文字通り，\documentclass，\documentstyle を複数回用いた場合に現れるエラーメッセージです．<br>
→ LaTeX 文書では \documentclass（あるいは \documentstyle）はただ 1 回しか使えませんので，
不要な \documentclass（あるいは \documentstyle）を削除してください．

#### ! LaTeX Error: Two \LoadClass commands. {#zeb70948}

ひとつのクラスファイルの中で \LoadClass を 2 回以上用いたり，
\LoadClass が含まれるパッケージファイルを（プリアンブルで）\usepackage
で読み込んだ場合に現れるエラーメッセージです．<br>
→ クラスファイル中の \LoadClass については，本当に必要なものを 1 個のみ残し，
ほかの \LoadClass を用いるのは取り止めてください
（文書クラスというのはその性格上，複数のクラスを同時に用いることはできません）．
一方，\usepackage で読み込むパッケージの中の \LoadClass については，
読み込まれるファイルの拡張子を変更して \RequirePackage あたりで済ませてください．

#### ! LaTeX Error: Undefined tab position. {#y5a7553b}

tabbing 環境では \\= によってタブ位置（項目を揃える位置）を設定できますが，
\\> を用いて次のタブ位置に移動するときなどに未設定のタブ位置を使用しようとした場合に上記のエラーメッセージが現れます．<br>
→ \\= を用いて適切なタブ位置を与えてください（途中の行でタブ位置を追加・変更しても構いません）．
または，不要な \\>，\\&lt; などがないかどうか調べ，不要なものを削除してください．

#### ! LaTeX Error: Unknown option \`<em>option</em>&#39; for package \`<em>package</em>&#39;. {#r7f57ab1}

<em>package</em> パッケージに対して，そのパッケージが理解できないオプション <em>option</em>

を指定した場合に現れるエラーメッセージです．<br>
→ \usepackage，\RequirePackage（あるいは \PassOptionsToPackage）
のオプション指定の部分が <em>package</em> パッケージに対して適切なものであるかどうかチェックしてください．

#### ! LaTeX Error: Unknown symbol font \`<em>mathgroup</em>&#39;. {#r9320551}

\DeclareSymbolFontAlphabet を用いて数式用書体変更コマンドを定義しようとしたときに，
\DeclareSymbolFontAlphabet の第 2 引数が既存の数式グループ名ではない場合のエラーメッセージです．<br>
→ \DeclareSymbolFontAlphabet の第 2 引数が正しいかどうかをチェックしてください
（\DeclareSymbolFontAlphabet ではなく \DeclareMathAlphabet
を用いるべき場合であるかどうかもチェックするとよいでしょう）．
正しい場合には，\DeclareSymbolFontAlphabet を用いる前に \DeclareSymbolFont を用いて
\DeclareSymbolFontAlphabet の第 2 引数を数式グループ名として宣言してください．

#### ! LaTeX Error: \usepackage before \documentclass. {#labd30d2}

文字通り，\usepackage を \documentclass よりも前で用いた場合に現れるエラーメッセージです．<br>
→ \usepackage を \documentclass コマンドと \begin{document} の間の部分に移動してください．

#### ! LaTeX Error: \verb ended by end of line. {#c70f9d04}

文字通り，行末にいたっても \verb の範囲が終わっていない場合に現れるエラーメッセージです．<br>
→ \verb+...; のように \verb の適用範囲を挟む文字が異なる文字になっている箇所を探し，
\verb の適用範囲を同じ文字で挟むように書き換えてください．

#### ! LaTeX Error: \verb illegal in command argument. {#ycd00145}

\verb をほかのコマンドの引数の中（例えば，脚注のテキストや \section などの見出し文字列）
で用いた場合に現れるエラーメッセージです．<br>
→ \verb は（原則として）ほかのコマンドの引数の中では使えないので，
\texttt などを用いて書き換えてください．
特殊文字に関しては \symbol{\`\\^}，\symbol{\`\\\\} のように記述することができます．

#### ! LaTeX source files more than 5 years old!. {#ie24ee78}

文字通りです．
5 年前より昔の latex.ltx を用いてフォーマットファイルを作成しようとした場合に現れるエラーメッセージです．<br>
→ LaTeX システム全体を更新しましょう．

#### ! No declaration for shape <em>attributes</em>. {#e9990ea5}

（sub/ssub サイズ関数を用いた）フォントの代替の際に，
代替先の属性 <em>attributes</em> のフォント定義がなされていない場合に現れるエラーメッセージです．<br>
→ 代替元のフォント定義を修正して適切な代替先に変更するか，
属性 <em>attributes</em> のフォント定義を追加してください．

<!-- とりあえず，ファイル latex.ltx などにあるものをチェックしました． -->
<!-- 各種パッケージが（パッケージのエラー・警告としてではなく） -->
<!-- LaTeX のエラーとして出すエラーメッセージについては少しずつ取り上げます． -->
