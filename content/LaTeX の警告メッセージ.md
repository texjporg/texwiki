---
title: "LaTeX の警告メッセージ"
url: "/LaTeX の警告メッセージ/"
date: 2004-12-13T05:50:07Z
pukiwiki: "LaTeX の警告メッセージ"
---

# LaTeX の警告メッセージ

エラーメッセージが現れる場合とは異なり，
警告メッセージが現れる場合には処理が中断せずに一応続行してしまうため，
ともすると警告メッセージは軽視されがちです．
しかし，警告メッセージが現れた場合には
“処理結果が意図したものとは異なるものになっている可能性”があるため，
エラーメッセージと同等に注意を払うべきメッセージもあります．

なお，以下の記述では \somecs を“コマンド名を一般的に表す記号”として用いています．
メッセージに \somecs という文字列が現れているわけではないので注意してください．
また，メッセージは原則としてアルファベット順に並べ，
メッセージ中の“on input line <em>lineno</em>”（<em>lineno</em> は行番号）
という記述は原則として“...”と略し，
メッセージの 2 行目以降の先頭に現れることがある“(Font)”の類の
（メッセージが継続していることを表す）記述は省略しています．

対処法の説明はごく手短に述べています．
特に，フォントの属性に用いられる文字列の意味やフォント定義の与え方といった
NFSS に関することについては，NFSS に関する解説を含む文献
（例えば，『LaTeX コンパニオン』）を参照してください．

> なお，自力では対処できそうにない場合には，
> 問題となっている状況が再現する<strong>完全な</strong>
> （すなわち，それ自身でタイプセット可能な \documentclass から
> \end{document} まで完備した）例を提示して，
> 問題点のチェックを然るべきところで依頼するとよいでしょう．

<!-- #contents -->
<!-- 目次そのものが無くてもリンクをはることが出来るようなので，目次の出力はコメントしてみました。 -->

***

#### LaTeX Font Warning: \*\*\* NFSS release 1 command \somecs found<br> \*\*\* Update by using release 2 command \DeclareFontShape.<br> \*\*\* Recovery is probably possible .... {#w12358e7}

NFSS1 のコマンド \somecs を用いた場合に現れるメッセージです．<br>
→ メッセージ通り，\DeclareFontShape を用いて書き換えてください．
必要があれば，パッケージあるいはクラスファイルの作成者に連絡して訂正を促すことになるでしょう．

#### LaTeX Font Warning: Command \somecs invalid in math mode .... {#o524b45d}

数式中では使えない \normalsize のようなコマンド
\somecs を数式中で用いた場合に現れるメッセージです．<br>
→ 問題となっている \somecs を用いるのを取り止めるか，
\somecs を用いる箇所（あるいは \somecs の適用範囲）を
\mbox に入れるといった対処を施してください．

#### LaTeX Font Warning: Command \tracingfonts not provided.<br> Use the \`tracefnt&#39; package.<br> Command found: .... {#g9a1640f}

文字通り，tracefnt パッケージを用いない状態で \tracingfonts コマンドを用いた場合のエラーメッセージです．<br>
→ tracefnt パッケージを読み込んでください．

#### LaTeX Font Warning: Encoding \`<em>encoding_A</em>&#39; has changed to \`<em>encoding_B</em>&#39; for symbol font<br> \`<em>group</em>&#39; in the math version \`<em>version</em>&#39; .... {#q89e972d}

\SetSymbolFont を用いた際に，バージョン <em>version</em> の数式で数式グループ <em>group</em>
に対して用いるフォントのエンコーディングを <em>encoding_A</em> から
<em>encoding_B</em> に変更した場合に現れるメッセージです．<br>

→ 出力結果に問題がなければ，このメッセージは無視して構わないのですが，
念のため“エンコーディングの不一致部分”に属する文字が正しく出力されるかを確認してください．
正しく出力されていない文字があれば，そのような文字だけを出力するための数式グループを新設するか，
エンコーディングを揃えた適当な仮想フォントを使用する，といった対策をとることになります．

#### LaTeX Font Warning: External font \`<em>fontname</em>&#39; loaded for size<br>&lt;<em>size</em>> .... {#tf4bb669}

ある属性のフォントのフォント定義において，サイズ <em>size</em>pt ではサイズ関数 fixed
によってフォント <em>fontname</em> を用いることに設定している場合に現れるメッセージです．<br>
→  出力結果に問題がない（あるいは出力結果が意図どおりである）場合には，
このメッセージは無視して構いません．
出力結果に問題がある場合には，フォント <em>fontname</em> に対応するフォント定義を探して
（どの属性のフォントであるかはメッセージには現れていないので，
各種 fd ファイルの中身を検索してください）適宜変更してください．

#### LaTeX Font Warning: Font shape \`<em>attributes</em>&#39; in size <em>size</em> not available<br> external font \`<em>fontname</em>&#39; used .... {#u97357b1}

属性 <em>attributes</em> のフォント定義において，サイズ <em>size</em>pt ではサイズ関数 subf
を用いてフォント <em>fontname</em> を用いることに設定している場合に現れるメッセージです．<br>
→  出力結果に問題がない（あるいは出力結果が意図どおりである）場合には，
このメッセージは無視して構いません．
正確に指定したとおりの属性をもった書体を用いたい場合には，
属性 <em>attributes</em> に対するフォント定義を適宜変更してください．

#### LaTeX Font Warning: Font shape \`<em>attributes_A</em>&#39; in size &lt;<em>size</em>> not available<br> Font shape \`<em>attributes_B</em>&#39; tried instead .... {#p8da8490}

属性 <em>attributes_A</em> のフォント定義において，サイズ <em>size</em>pt では属性
<em>attributes_B</em> で代替する指定がなされている場合に現れることがあるメッセージです

（ただし，フォント定義によっては単に“LaTeX Font Info”として
log ファイルに記録されるだけのこともあります）．<br>
→ 出力結果に問題がない（あるいは出力結果が意図どおりである）場合には，
このメッセージは無視して構いません．
正確に指定したとおりの属性をもった書体を用いたい場合には，
属性 <em>attributes_A</em> に対するフォント定義を適宜変更してください．

#### LaTeX Font Warning: Font shape \`<em>attributes</em>&#39; in size &lt;<em>size</em>> not available<br> size &lt;<em>altsize</em>> substituted .... {#zafd453e}

属性 <em>attributes</em> のフォントについて，サイズ <em>size</em>pt では使用できないために，
サイズ <em>altsize</em>pt が用いられた場合に現れることがあるメッセージです．<br>
→ 出力結果に問題がない（あるいは出力結果が意図どおりである）場合には，
このメッセージは無視して構いません．
正確に指定したとおりのサイズを用いたい場合には，
属性 <em>attributes</em> に対するフォント定義を適宜変更
（例えば，type1cm パッケージを使用）してください．

> このメッセージは <em>size</em> と <em>altsize</em> の差が \fontsubfuzz
> （LaTeX のデフォルトでは 0.4pt）を超えない場合には表示されません．

#### LaTeX Font Warning: Font shape \`<em>attributes_A</em>&#39; undefined&#39; using \`<em>attributes_B</em>&#39; instead .... {#u6ae5db6}

#### LaTeX Font Warning: Font shape \`<em>attributes_A</em>&#39; undefined&#39; using \`<em>attributes_B</em>&#39; instead<br> for symbol \`<em>something</em>&#39;.... {#y0ab82fc}

属性 <em>attributes_A</em> に対するフォント定義がなされていないために
属性 <em>attributes_B</em> で代替された場合に現れるメッセージです
（上段は通常の書体変更に伴うメッセージで，下段は文字 <em>something</em>を出力する際に一時的に
（その文字を含むような）属性への変更を必要とした場合のメッセージです）．<br>
→ 出力結果が“使用可能”なものでしたら，このメッセージは無視しても構いません．
“使用可能”でないほど書体の違いが問題になる場合には，
属性 <em>attributes_A</em> に対するフォント定義を与えてください．

#### LaTeX Font Warning: Font shape \`<em>attributes</em>&#39; will be<br> scaled to size <em>size</em> .... {#d3f55002}

属性 <em>attributes</em> のフォントをあるサイズで使用したときに，指定したサイズではなく別のサイズ <em>size</em>
にスケーリングする指定がなされている場合に現れることがあるメッセージです
（ただし，フォント定義によっては単に“LaTeX Font Info”として
log ファイルに記録されるだけのこともあります）．<br>
→ 出力結果に問題がなければ，このメッセージは無視して構いません．
このメッセージに対応する箇所の文字サイズが狂っている場合には，
属性 <em>attributes</em> に対するフォント定義を変更して，
スケーリング後の実寸が適切なサイズになるようにしてください．

#### LaTeX Font Warning: Size substitutions with differences<br> up to <em>difference</em> have occurred. {#ib5a6464}

ある属性のフォントについて利用できないサイズがあったためにサイズ代用が行われた場合に現れることがあるメッセージです
（<em>difference</em> は代用されたサイズとオリジナルのサイズの差の最大値です）．<br>
→ 出力結果に問題がない（あるいは出力結果が意図どおりである）場合には，
このメッセージは無視して構いません．
正確に指定したとおりのサイズを用いたい場合には，
各種のフォント定義を（例えば，type1cm パッケージを使用して）適宜変更してください．
フォント定義を変更すべき属性は log ファイルに記録されているメッセージ
“LaTeX Font Warning: Font shape \`<em>attributes</em>&#39; in size &lt;<em>size</em>>
not available size &lt;<em>altsize</em>> substituted ....”を調べればわかります．

> このメッセージは <em>difference</em>  が \fontsubfuzz （LaTeX のデフォルトでは 0.4pt）
> を超えない場合には表示されません．

#### LaTeX Font Warning: Size substitutions with differences<br> up to <em>difference</em> have occurred.<br> Please check the transcript file carefully<br> and redo the format generation if necessary! {#x746e010}

フォーマットファイル作成時に，ある属性のフォントについて利用できないサイズがあったためにサイズ代用が行われた場合に現れることがあるメッセージです
（<em>difference</em> は代用されたサイズとオリジナルのサイズの差の最大値です）．<br>
→ 必要があれば各種の fd ファイルにおけるフォント定義を直接変更
（適切なサイズに対する定義を追加）した上でフォーマットファイルを再作成してください．

#### LaTeX Font Warning: Some font shapes were not available, defaults substituted. {#ub784b7a}

文書中で使用したフォント（の属性）の中にほかの属性で代替されたものがある場合に現れるメッセージです．
代替された属性に関する具体的な情報は，log ファイル中のほかの“LaTeX Font Warning”
メッセージを読めば，知ることができます．

#### LaTeX Warning: Citation \`<em>key</em>&#39; undefined .... {#d0412be9}

#### LaTeX Warning: Citation \`<em>key</em>&#39; on page <em>page</em> undefined .... {#rf8e41bb}

\cite または \nocite の引数に与えた参照キー <em>key</em> に対応する \bibitem が存在しない場合に現れるメッセージです
（上段は \nocite の場合で，下段は \cite の場合です）．<br>
→ まず，参照キーに与えた文字列が正しいかどうかをチェックしてください．
正しくない（あるいは不要なものである）場合には，問題の参照キーを修正するか削除してください．
正しい場合には，thebibliography 環境（文献リスト）に必要な \bibitem を補ってください．

#### LaTeX Warning: Command \somecs has changed.<br> Check if current package is valid. {#q87cfb11}

\CheckCommand によって \somecs の定義が“意図どおりの”（多くの場合には，
LaTeX のデフォルトの）ものであるかどうかを検査した際に，
\somecs が再定義されたことが判明された場合に現れるメッセージです．<br>
→ このメッセージを与えたパッケージまたはクラスファイル
（あるいは LaTeX 自身）を最新のものに更新してください．
ただし，pLaTeX は \\@makefntext，\\@setref といった一部のマクロを再定義するため，
pLaTeX が再定義したものに関しても上記のメッセージが現れることがあります．
その場合には，作成している文書の処理に支障がなければこのメッセージを無視しても構いません．
支障がある場合には… メッセージ中の \somecs の再定義に関わる部分を
pLaTeX で用いることができるように変更することになります．

#### LaTeX Warning: Command \somecs invalid in math mode .... {#d10f2f49}

$\\^a$ のように数式中では使えないコマンド \somecs を数式中で用いた場合に現れるメッセージ
（のひとつ）です．<br>
→ 今の例で言えば $\\^a$ を $\hat{a}$ に変更する，という具合に
\somecs を数式用のコマンドで書き換えてください．

#### LaTeX Warning: File \`<em>filename</em>&#39; already exists on the system.<br> Not generating it from this source. {#r01d28c3}

filecontents(\*) 環境を用いてファイル <em>filename</em> を生成しようとした際に，
すでにこのファイルが存在していたため生成するのを取り止めた場合に現れるメッセージです．<br>
→ 無視しても構いませんが，処理結果がおかしい場合にはファイル <em>filename</em>
の中身が filecontents(\*) 環境から生成させたものと一致するかどうかを確認してください．
一致しない場合には，すでに存在しているほうのファイル <em>filename</em>
を削除するか退避させたのち，filecontents(\*) 環境から生成させたものを用いてください．

#### LaTeX Warning: Float too large for page by <em>size</em> .... {#y58699cc}

float（figure，table の両環境で取り扱われるような対象）の高さが大きすぎる
（版面の高さより <em>size</em> だけ大きい）場合に現れるメッセージです．<br>
→ 配置する図表の類の寸法をチェックしてください．
必要があれば図表の全体を（\includegraphics のオプション指定や
\scalebox を用いて）縮小することになるでしょう．

#### LaTeX Warning: Form Feed has been converted to Blank Line. {#k6a2842e}

filecontents(\*) 環境内に改ページ文字（^^L）が存在する場合に現れるメッセージです．<br>
→ （LaTeX のデフォルトの設定では改ページ文字は改段落とほぼ同じなので）
改ページ文字が空白行に変換されても問題はないでしょうから，
このメッセージは無視しても構わないでしょう．
本当に改ページ文字を用いなければならない場合には，
filecontents(\*) 環境で生成させるのではなく，
作成済みのファイルを別途用意してください．

#### LaTeX Warning: \`h&#39; float specifier changed to \`ht&#39;. {#q4c42826}

#### LaTeX Warning: \`!h&#39; float specifier changed to \`!ht&#39;. {#g0cf562c}

位置指定として h（あるいは !h）しかなされていない
float（figure，table の両環境で取り扱われるような対象）を
h 指定に従って配置することができなかった場合に現れるメッセージです．<br>
→ 無視して構いません．
あくまでも h 配置にしたいというのでしたら，文書自身を手直しして，
問題となっている図を配置するだけのスペースを確保してください．

#### LaTeX Warning: Ignoring text \`<em>text</em>&#39; after \end{filecontents} .... {#s3738041}

#### LaTeX Warning: Ignoring text \`<em>text</em>&#39; after \end{filecontents\*} .... {#c151a460}

filecontents(\*) 環境の終端の \end{filecontents}/\end{filecontents\*} の後に文字列
<em>text</em> がある場合に現れるメッセージです．<br>

→ \end{filecontents}/\end{filecontents\*} の直後で改行してください．

#### LaTeX Warning: inputting \`<em>newfile</em>&#39; instead of obsolete \`<em>oldfile</em>&#39;. {#p71bad2d}

ファイル <em>oldfile</em> に代わる新しいファイル <em>newfile</em> が用いられた場合に現れるメッセージです．<br> <!-- 一般的な場合ではない（そして，正しいやり方でもない）のですが， --> <!-- \usepackage{fleqn} という記述をプリアンブルに入れると，このメッセージを目にすることができます． -->
→ 読み込むファイル（パッケージ）の名称，
\documentclass のオプション指定などを変更して，
実際に用いられた <em>newfile</em> が読み込まれるように変更してください．
もし，本当に古い版の <em>oldfile</em> でなければ正しく処理されない場合には…
<em>oldfile</em> が利用可能であるような（以前の）システムで処理するか，

文書全体を現在の (p)LaTeX2e にあわせて書き換えてください．

#### LaTeX Warning: Label \`<em>label</em>&#39; multiply defined. {#za840dca}

LaTeX 文書中の \label{<em>label</em>} あるいは \bibitem{<em>label</em>}
が重複している場合に現れるメッセージです．<br>
→ 重複している \label{<em>label</em>} あるいは \bibitem{<em>label</em>}
のいずれかを適宜書き換えるか，不要なものを削除してください．

#### LaTeX Warning: Label(s) may have changed. Rerun to get cross-references right. {#me70cf34}

文書中の相互参照に関する情報に変化があった場合に現れるメッセージです．<br>
→ このメッセージが現れなくなるまで (p)LaTeX での処理を繰り返してください．

> まれに，相互参照結果を更新したことによる文字列の長さの変化により，
> ある \label があるページとその次のページとを行ったり来たりすることがあります．
> 5 回程度処理を繰り返しても上記のメッセージが現れるようでしたら，
> この場合に該当するかどうかをチェックしてください．
> なお，この場合に該当すると… 文書自身を手直しするしかないのですが，
> 適宜 \newpage を用いて改ページ箇所を固定したり，
> （\pageref の結果が 99 と100 を行ったり来たりするような）
> 参照結果の長さが変動している \pageref の類を含む段落に“\looseness=1”
> あるいは“\looseness=-1”の指定を適用して段落の行数が不用意に増減しないようにする，
> といった方法が使えることもあります．

#### LaTeX Warning: Marginpar on page <em>page</em> moved. {#x39bf235}

（同じ行に複数の傍注を記述した場合のように）傍注が衝突した場合に現れるメッセージです．<br>
→ 出力結果に問題がなければ，このメッセージは無視しても構いません．
傍注がページ下端から下にはみ出しているといった不具合があるページに対しては，
\marginpar を用いる箇所を変更するか，\marginpar{\vspace{-100pt}...}
のような具合に傍注の位置をごまかしてください．

#### LaTeX Warning: No \author given. {#c3f398a6}

\maketitle を用いた際，\author による著者リストの登録がなされていない場合に現れるメッセージです
（使用するクラスファイルによっては現れないこともあります）．<br>
→ \maketitle 以前の部分で \author を用いてください．

#### LaTeX Warning: No positions in optional float specifier.<br> Default added (so using \`<em>positions</em>&#39;). {#jcbb49db}

figure 環境などの配置指定（オプション指定）に
h，t，b，p のいずれも含まれない場合に現れるメッセージです．<br>
→ 適切な位置指定を行ってください．

#### LaTeX Warning: Optional argument of \twocolumn too tall on page <em>page</em>. {#q6d4ae2b}

\twocolumn のオプション引数の高さが大きすぎる場合に現れるメッセージです．<br>
→ \twocolumn のオプション引数（1 段組部分）の記述を見直してください．
やむを得ない場合には，1 段組部分をいったん通常の 1 段組のテキストとして処理して
“末尾の 1 ページ未満の部分”とそれ以外の“完成したページ”
とに分割する見当をつけてください．
そして，“完成したページ”の部分は通常の 1 段組部分として処理し，
“末尾の 1 ページ未満の部分”のみを \twocolumn のオプションにしてください．

> これは \twocolumn のオプション部分が float（figure，table
> の両環境で取り扱われるような対象）と同じ取り扱いを受けることによる制限です．
> なお，既存のクラスファイルの中で“文書の表題部分および概要だけを 1 段組にする”
> 処理を自動化している場合に概要部分が長すぎて上記のメッセージが現れる状況になると面倒ですが…
> その場合には諦めて概要部分を短くするか，使用しているクラスファイルの作成者に
> “長い概要”も処理できるようにする変更を求めることになるでしょう．

#### LaTeX Warning: \oval, \circle, or \line size unavailable .... {#oe2608da}

picture 環境内で短すぎる \line や大きすぎる \circle の類を用いたときに現れるメッセージです．<br>
→ 適当な画像を作成して，それを \includegraphics で読み込むようにするのがよいでしょう．
picture 環境を用いるのでしたら，\unitlength の設定などにも注意して，
\line などがみたすべき制限（例えば，水平・垂直のどちらでもない \line の両端の
水平距離・垂直距離の少なくとも一方は 10pt 以上でなければなりません）
をみたすように変更してください．

#### LaTeX Warning: Reference \`<em>label</em>&#39; on page <em>page</em> undefined. {#q976e704}

\ref または \pageref の引数に与えたラベル <em>label</em> に対応する \label が存在しない場合に現れるメッセージです．<br>
→ まず，ラベル文字列が正しいかどうかをチェックしてください．
正しくない（あるいは不要なものである）場合には，
ラベル文字列を修正するか問題となっている \ref，\pageref を削除してください．
正しい場合には，必要な \label を補ってください．

#### LaTeX Warning: Tab has been converted to Blank Space. {#ve7331a8}

filecontents(\*) 環境内にタブ文字が存在する場合に現れるメッセージです．<br>
→ 特に（moreverb パッケージによる）\verbatimtabinput あたりで読み込むファイルでもなければ，
タブが空白文字に変換されても問題はないでしょうから，このメッセージは無視しても構わないでしょう．
本当にタブ文字を用いなければならない場合には，
filecontents(\*) 環境で生成させるのではなく，
作成済みのファイルを別途用意してください．

#### LaTeX Warning: There were multiply-defined labels. {#u125e193}

LaTeX 文書中に重複した \label，\bibitem がある場合に現れるメッセージです．<br>
→ log ファイルの中の“LaTeX Warning: Label \`<em>label</em>&#39; multiply defined.”
というメッセージを調べて，重複している \label{<em>label</em>} あるいは
\bibitem{<em>label</em>} のいずれかを適宜書き換えるか，不要なものを削除してください．

#### LaTeX Warning: There were undefined references. {#v80b6ed4}

\ref，\pageref による相互参照あるいは \cite による文献の参照を行った際に，\label あるいは
\bibitem によって設定した参照キー以外の参照キーが用いられている場合現れるメッセージです
（ただし，aux ファイルの中身が確定しない間にも現れることがあります）．<br>
→ まず，文書全体をもう 1 回余分に (p)LaTeX で処理してください．
それでもこのメッセージが出ている場合には，log ファイルの中の
“LaTeX Warning: Reference \`<em>label</em>&#39; on page <em>page</em> undefined.”
あるいは
“LaTeX Warning: Citation \`<em>key</em>&#39; on page <em>page</em> undefined.”
というメッセージを調べて，必要な \label，\bibitem を補うか，
不要な \ref などを削除してください．

#### LaTeX Warning: Text page <em>page</em> contains only floats. {#a8c86101}

本文に属するテキストを含むはずのページ（あるいは 2 段組時の各段）が
float（figure，table の両環境で取り扱われるような対象）のみになった場合に現れるメッセージです．<br>
→ figure 環境などの配置指定（それらの環境のオプション指定）に
! を多用するとこのメッセージが現れやすくなります．
メッセージに示されているページ上に配置されている figure 環境などを
p 指定で配置するとよいでしょう．

#### LaTeX Warning: Unused global option(s):<br> \[<em>options</em>\]. {#k742e0fb}

\documentclass のオプションに，クラスファイル自身のオプションではなくて，
しかも読み込んだパッケージでも使用されなかったもの
（メッセージの中の <em>options</em>）が存在する場合に現れるメッセージです．<br>
→ \documentclass のオプション指定が正しいものであるか，必要なものであるかをチェックしてください．

> 世間には LaTeX 2.09 形式の記述を行ったドキュメントがいまだに存在し，
> そのようなものを読んだ人がときどき \documentclass\[<em>package</em>,...\]{<em>class</em>}
> のような具合にパッケージの読み込みを
> \documentclass のオプションにしていることがありますが，
> そのような場合にもこの警告が現れます．
> また，“LaTeX 2.09 形式の文書を無造作に LaTeX2e 形式に更新しようとした場合”
> にも同様のことが起こり得ます．
> これに該当するときには，パッケージの読み込みを \usepackage を用いて書き換えてください． <!-- LaTeX 2.09 では \documentstyle のオプションで“スタイルファイル” --> <!-- （“パッケージ”の旧称）の読み込みを行っていましたし，その形式の記述は --> <!-- “LaTeX2e の LaTeX 2.09 互換モード”でも使用できます（が，いまさら --> <!-- LaTeX 2.09 時代の形式について述べることもありませんね）． --> <!-- しかし，\documentclass のオプション引数には“読み込むパッケージの指定”の --> <!-- 意味はありません．クラスファイル自身に対するオプション指定と --> <!-- パッケージの指定を分離し，かつ，個々のパッケージに対するオプション指定を --> <!-- 可能にするために \usepackage が導入されているわけです． -->

#### LaTeX Warning: Writing file \`<em>filename</em>&#39;. {#x8adb4fa}

filecontents(\*) 環境を用いてファイル <em>filename</em> を生成する場合に現れるメッセージです．
ファイル <em>filename</em> がほかの重要なファイルと同じ名称である，
というのでもなければ，このメッセージは無視して構いません．

#### LaTeX Warning: Writing text \`<em>text</em>&#39; before \end{filecontents} as last line of <em>filename</em> .... {#o886c1e0}

#### LaTeX Warning: Writing text \`<em>text</em>&#39; before \end{filecontents\*} as last line of <em>filename</em> .... {#w9bebfa4}

filecontents(\*) 環境の終端の \end{filecontents}/\end{filecontents\*} の前に文字列
<em>text</em> がある場合に現れるメッセージです．<br>

→ 無視しても構いませんが，念のため \end{filecontents}/\end{filecontents\*}
の直前で改行しておくとよいでしょう．

#### LaTeX Warning: You have requested, ..., version<br> \`<em>version_A</em>&#39; of document class <em>class</em>,<br> but only version<br> \`<em>version_B</em>&#39;<br> is available. {#ic35a600}

#### LaTeX Warning: You have requested, ..., version<br> \`<em>version_A</em>&#39; of package <em>package</em>,<br> but only version<br> \`<em>version_B</em>&#39;<br> is available. {#kedd4835}

\documentclass あるいは \usepackage/\RequirePackage のオプション指定で
<em>version_A</em> 版のクラスファイル <em>class</em>.cls あるいは

<em>package</em> パッケージを必要としているにもかかわらず，

処理時に用いたものはそれより古い <em>version_B</em> 版である場合に現れるメッセージです．<br>
→ 処理結果に問題がなければ無視しても構いませんが，クラスファイル <em>class</em>.cls
あるいは <em>package</em> パッケージを更新するのが無難でしょう．

#### LaTeX Warning: You have requested document class \`<em>class_A</em>&#39;,<br> but the document class provides \`<em>class_B</em>&#39;. {#m30d15ba}

#### LaTeX Warning: You have requested package \`<em>package_A</em>&#39;,<br> but the package provides \`<em>package_B</em>&#39;. {#r2295994}

読み込んだクラスファイルあるいはパッケージのファイル名（<em>class_A</em>.cls あるいは
<em>package_A</em>.sty）とその中身（\ProvidesClass あるいは \ProvidesPackage

に記述してある文字列，<em>class_B</em> あるいは<em>package_B</em>）
が一致しない場合に現れるメッセージです．<br>
→ とりあえず，クラスファイル <em>class_A</em>.cls あるいは
<em>package_A</em> パッケージを更新してください．

それでも上記のメッセージが出るようでしたら，
そのクラスファイルあるいはパッケージの作者に連絡して訂正を促すことになります．

#### LaTeX Warning: You have requested release \`<em>version_A</em>&#39; of LaTeX,<br> but only release \`<em>version_B</em>&#39; is available. {#afa2fda3}

#### LaTeX Warning: You have requested release \`<em>version_A</em>&#39; of pLaTeX,<br> but only release \`<em>version_B</em>&#39; is available. {#y0d128d1}

クラスファイル（あるいはパッケージ）の中の \NeedsTeXFormat のオプション指定で
<em>version_A</em> 版の LaTeX（あるいは pLaTeX）を必要としているにもかかわらず，

処理時に用いたフォーマットファイルはそれよりも古い
<em>version_B</em> 版である場合に現れるメッセージです．<br>

→ 処理結果に問題がなければ，このメッセージは無視しても構わないのですが…
むしろ (p)LaTeX システムを更新したほうがよいでしょう．

<!-- ファイル latex.ltx の中の警告メッセージとおぼしきものを抜き出しました． -->
