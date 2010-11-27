---
title: "EasyTeX"
url: "/EasyTeX/"
date: 2010-06-15T08:07:06Z
pukiwiki: "EasyTeX"
---

# EasyTeX

## [EasyTeX](http://www.juen.ac.jp/math/nakagawa/nakagawa.html) {#et3357}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## EasyTeX とは {#eta184ab}

EasyTeX は Windows 98, 2000, XP, Vista, 7 上で動作する国産でフリーの TeX 統合環境です．

TeX の入力とコマンドの実行が簡単にできるソフトウェアです．

- [中川仁のホームページ](http://www.juen.ac.jp/math/nakagawa/nakagawa.html) 公式サイト
    - [TeX入門 &mdash; TeXを使って数式をきれいに書こう](http://www.juen.ac.jp/math/nakagawa/texguide.html)

<img src="http://www.2009-s1-34.com/index.php?plugin=attach&amp;refer=LaTeX%A4%C8%A4%AB&amp;openfile=05.jpg" alt="EasyTeX の画面">

### 特徴 {#c007c9f5}

- TeX の命令を色付けして表示できます．
- LaTeX コマンドをマウスで選び，クリックすることで，自動的にコマンドが挿入される補完機能を持っています．
- ヘルプには LaTeX の解説が付属しています．
- [Aspell](/Aspell/) などのスペルチェッカーが起動可能です．
- 登録されてないコマンドのメニューを新たに作ることができ，ショートカットのカスタマイズも可能です．
- IME および ATOK による再変換をサポートしています．

シンプルな統合環境なので，これから TeX を使い始める方におすすめのソフトです．

## [ダウンロード](http://www.juen.ac.jp/math/nakagawa/texguide.html#easytex) {#bf9167cb}

### EasyTeX の入手先 {#qe994380}

- [EasyTeX(Windows)でTeX統合環境](http://www.juen.ac.jp/math/nakagawa/texguide.html#easytex)

## インストール {#sfc300c2}

### zip ファイル {#d9b1ceee}

zip ファイル版の場合はファイルを適当な場所に展開 (解凍) するだけでインストールは終了です．

### exe ファイル {#fac37d0f}

exe ファイル版 (インストーラー機能付き) の場合はインストーラーの指示に従ってインストールします．

## アンインストール {#l7ffd31d}

### zip ファイル {#r2a5838b}

zip ファイル版は，レジストリを使用しません．アンインストールするときはフォルダごと削除してください．

### exe ファイル {#z3b6deb0}

exe ファイル版 (インストーラー機能付き) のアンインストールをするときは \[スタート\]-\[コントロールパネル\]-\[プログラムのアンインストール\] からアンインストールしてください．

## TeX環境設定 {#e3c37dfc}

### 初回起動時 {#x003cff0}

インストール終了後，EasyTeX.exe を実行してください．

初回起動時は， 「TeX環境設定」 が表示されます．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　TeX環境設定　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[　 <span style="color:White;"><strong>✕</strong></span> 　\]</span> </ins></span><br>

　　<strong>\[ TeXExe \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ TeXOption \]\[ Spell \]\[ PS/PDF \]</ins></span><br>

> <span style="color:Black;background-color:#EEEEEE;">\[TeX実行ファイルのパス\]</span><br>
>
> <span style="color:Black;background-color:#EEEEEE;">\[　　　　DVIドライバ　　　 \]</span><br>
>
> 　<br>
> 　<br>
> 　<br>

<span style="color:Black;background-color:#EEEEEE;">\[　　TeX環境を自動設定する　　\]</span><br>

<span style="color:Black;background-color:#EEEEEE;">\[ Iniファイルに保存 \]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ 　　<strong><span style="color:#119933;">✔</span></strong>OK　　 \]</span>　<span style="color:Black;background-color:#EEEEEE;">\[<strong><span style="color:#993311;">✘</span></strong>キャンセル\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[<strong><span style="color:#1199AA;">？</span></strong>ヘルプ(H)\]</span><br>

***

これから EasyTeX の初期設定をします．

\[　　TeX環境を自動設定する　　\] は使わずに，手動で設定を行います．

### TeXExe {#o3f9cb28}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　TeX環境設定　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[　 <span style="color:White;"><strong>✕</strong></span> 　\]</span> </ins></span><br>

　　<strong>\[ TeXExe \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ TeXOption \]\[ Spell \]\[ PS/PDF \]</ins></span><br>

> <span style="color:Black;background-color:#EEEEEE;">\[TeX実行ファイルのパス\]</span> <ins>C:\w32tex\bin</ins><br>
>
> <span style="color:Black;background-color:#EEEEEE;">\[　　　　DVIドライバ　　　 \]</span> <ins>C:\w32tex\dviout\dviout.exe</ins><br>

***

TeX 実行ファイルのパスを指定します．

eplatex.exe (epLaTeX の実行ファイル) が存在するフォルダのフルパスを指定します．ここでは C:\w32tex\bin に設定しました．

DVI ドライバは dviout.exe のフルパスを指定します．

### TeXOption {#d7b2d9ae}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　TeX環境設定　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[　 <span style="color:White;"><strong>✕</strong></span> 　\]</span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ TeXExe \]</ins></span><strong>\[ TeXOption \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ Spell \]\[ PS/PDF \]</ins></span><br>
　　　　　　言語<br>
　　　　　　<span style="color:#3333CC;">◎</span>日本語　　　　　　　　 　 　☐検索したTeXラベルをソートする<br>
　　　　　　◯英語<br>
　　　　　TeXコンパイラ　　　　　　 　 　☐source special<br>
　　　　　pLaTeX　　　　　　 <span style="color:#555555;background-color:#EEEEEE;">▲</span><br>
　　　　　<span style="color:White;background-color:#1188FF;">epLaTeX　　　 　 　</span>　　 　 　 　☐ｺﾝﾊﾟｲﾙ画面を表示する<br>
　　　　　jPlain　　　　　　　　<span style="color:#555555;background-color:#EEEEEE;">▼</span><br>
　　　　<span style="color:Black;background-color:#EEEEEE;">\[TeXソースファイルのパス\]</span>　<ins>　　　　　　　　　　　　　　　　　　　　</ins><br>

***

TeX コンパイラを指定します．

epLaTeX を選択します．

### Spell {#z664fb17}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　TeX環境設定　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[　 <span style="color:White;"><strong>✕</strong></span> 　\]</span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ TeXExe \]\[ TeXOption \]</ins></span><strong>\[ Spell \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ PS/PDF \]</ins></span><br>

> <span style="color:Black;background-color:#EEEEEE;">\[スペルチェッカー\]</span> <ins>C:\Program Files\aspell\bin\aspell.exe</ins><br>
>
> 　　起動オプション <ins>--lang=en -t -c</ins><br>

***

スペルチェッカー (aspell.exe) のフルパスと起動オプションを指定します．

スペルチェッカーを使わない人は何も入力しなくても OK です．

### PS/PDF {#ubd35880}

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　TeX環境設定　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[　 <span style="color:White;"><strong>✕</strong></span> 　\]</span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ TeXExe \]\[ TeXOption \]\[ Spell \]</ins></span><strong>\[ PS/PDF \]</strong><br>

> <span style="color:Black;background-color:#EEEEEE;">\[　 GhostView 　\]</span> <ins>C:\Program Files\Ghostgum\gsview\gsview32.exe</ins><br>
>
> <span style="color:Black;background-color:#EEEEEE;">\[　PDF Reader　\]</span> <ins>C:\Program Files\SumatraPDF\SumatraPDF.exe</ins><br>
>
> 　PDF Readerを開くタイミング　　<ins>300</ins><br>

***

GhostView (gsview32.exe) と PDF Reader (SumatraPDF.exe) のフルパスを指定します．

Adobe Reader X を使用して PDF ファイルを表示したい方は，ツールの設定 の Adobe Reader X を参照して設定してください．

PDF Reader を開くタイミングはお好みで設定してください．ここでは 300 に設定しました．

### TeX環境設定の保存 {#lf745908}

<strong>TeX環境設定が完了したら，\[ Iniファイルに保存 \] をクリックして \[ 　　<span style="color:#119933;">✔</span>OK　　 \] をクリックします．</strong>

この設定は，メニューの \[ｵﾌﾟｼｮﾝ(O)\] → \[TeX環境設定(T)\] から変更することができます．

## ツールの設定 {#h04c9433}

メニューの オプション(O) → ﾂｰﾙの設定(O) からツールの設定をします．

設定を反映させるため，［ 　登録　 ］ボタンを押し，\[ 　　<strong><span style="color:#119933;">✔</span></strong>OK　　 \] をクリックします．

設定したツールはメニューの ﾂｰﾙ(A) から選択できます．

### dvipdfmx {#l0d22111}

dvipdfmx を使用して PDF ファイルを作成．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　ツールの設定　</ins></span><br>

<span style="color:White;background-color:#1188FF;">program0　</span><span style="color:#555555;background-color:#EEEEEE;">▲</span><br>

program1<br>
program2<br>
program3<br>
program4<br>
program5<br>
program6<br>
program7<br>
program8<br>
program9　<span style="color:#555555;background-color:#EEEEEE;">▼</span><br>

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#9CCEDE;">\[ <span style="color:White;"><strong>◛</strong></span> \]</span><span style="color:Black;background-color:#9CCEDE;">\[ <span style="color:White;"><strong>▭</strong></span> \]</span><span style="color:Black;background-color:#CC3333;">\[　 <span style="color:White;"><strong>✕</strong></span> 　\]</span> </ins></span><br>

タイトル<br>
　　　<ins>dvipdfmx</ins><br>
プログラム<br>
　　　<ins>dvipdfmx.exe</ins><br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　　参照　　 \]</span><br>
実行時引数<br>
　　　<ins>"%n.dvi"</ins><br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　登録　 \]</span>　 　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　削除　 \]</span><br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　　<strong><span style="color:#119933;">✔</span></strong>OK　　 \]</span>　　<span style="color:Black;background-color:#EEEEEE;">\[<strong><span style="color:#993311;">✘</span></strong>キャンセル\]</span>　　<span style="color:Black;background-color:#EEEEEE;">\[<strong><span style="color:#1199AA;">？</span></strong>ヘルプ(H)\]</span><br>

***

### Adobe Reader X {#m3a434b8}

Adobe Reader X を使用して PDF ファイルを表示．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　ツールの設定　</ins></span><br>

program0　<span style="color:#555555;background-color:#EEEEEE;">▲</span><br>
<span style="color:White;background-color:#1188FF;">program1　</span><br>

program2<br>
program3<br>
program4<br>
program5<br>
program6<br>
program7<br>
program8<br>
program9　<span style="color:#555555;background-color:#EEEEEE;">▼</span><br>

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#9CCEDE;">\[ <span style="color:White;"><strong>◛</strong></span> \]</span><span style="color:Black;background-color:#9CCEDE;">\[ <span style="color:White;"><strong>▭</strong></span> \]</span><span style="color:Black;background-color:#CC3333;">\[　 <span style="color:White;"><strong>✕</strong></span> 　\]</span> </ins></span><br>

タイトル<br>
　　　<ins>Adobe Reader X</ins><br>
プログラム<br>
　　　<ins>"C:\Program Files\Adobe\Reader 10.0\Reader\AcroRd32.exe"</ins><br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　　参照　　 \]</span><br>
実行時引数<br>
　　　<ins>"%n.pdf"</ins><br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　登録　 \]</span>　 　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　削除　 \]</span><br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　　<strong><span style="color:#119933;">✔</span></strong>OK　　 \]</span>　　<span style="color:Black;background-color:#EEEEEE;">\[<strong><span style="color:#993311;">✘</span></strong>キャンセル\]</span>　　<span style="color:Black;background-color:#EEEEEE;">\[<strong><span style="color:#1199AA;">？</span></strong>ヘルプ(H)\]</span><br>

***

### pbibtex {#cb466707}

pbibtex を使用．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　ツールの設定　</ins></span><br>

program0　<span style="color:#555555;background-color:#EEEEEE;">▲</span><br>
program1<br>
<span style="color:White;background-color:#1188FF;">program2　</span><br>

program3<br>
program4<br>
program5<br>
program6<br>
program7<br>
program8<br>
program9　<span style="color:#555555;background-color:#EEEEEE;">▼</span><br>

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#9CCEDE;">\[ <span style="color:White;"><strong>◛</strong></span> \]</span><span style="color:Black;background-color:#9CCEDE;">\[ <span style="color:White;"><strong>▭</strong></span> \]</span><span style="color:Black;background-color:#CC3333;">\[　 <span style="color:White;"><strong>✕</strong></span> 　\]</span> </ins></span><br>

タイトル<br>
　　　<ins>pbibtex</ins><br>
プログラム<br>
　　　<ins>pbibtex.exe</ins><br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　　参照　　 \]</span><br>
実行時引数<br>
　　　<ins>-kanji=sjis "%n"</ins><br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　登録　 \]</span>　 　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　削除　 \]</span><br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　　<strong><span style="color:#119933;">✔</span></strong>OK　　 \]</span>　　<span style="color:Black;background-color:#EEEEEE;">\[<strong><span style="color:#993311;">✘</span></strong>キャンセル\]</span>　　<span style="color:Black;background-color:#EEEEEE;">\[<strong><span style="color:#1199AA;">？</span></strong>ヘルプ(H)\]</span><br>

***

### mendex {#j08f6352}

mendex を使用．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　ツールの設定　</ins></span><br>

program0　<span style="color:#555555;background-color:#EEEEEE;">▲</span><br>
program1<br>
program2<br>
<span style="color:White;background-color:#1188FF;">program3　</span><br>

program4<br>
program5<br>
program6<br>
program7<br>
program8<br>
program9　<span style="color:#555555;background-color:#EEEEEE;">▼</span><br>

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#9CCEDE;">\[ <span style="color:White;"><strong>◛</strong></span> \]</span><span style="color:Black;background-color:#9CCEDE;">\[ <span style="color:White;"><strong>▭</strong></span> \]</span><span style="color:Black;background-color:#CC3333;">\[　 <span style="color:White;"><strong>✕</strong></span> 　\]</span> </ins></span><br>

タイトル<br>
　　　<ins>mendex</ins><br>
プログラム<br>
　　　<ins>mendex.exe</ins><br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　　参照　　 \]</span><br>
実行時引数<br>
　　　<ins>-S "%n.idx"</ins><br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　登録　 \]</span>　 　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　削除　 \]</span><br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　　<strong><span style="color:#119933;">✔</span></strong>OK　　 \]</span>　　<span style="color:Black;background-color:#EEEEEE;">\[<strong><span style="color:#993311;">✘</span></strong>キャンセル\]</span>　　<span style="color:Black;background-color:#EEEEEE;">\[<strong><span style="color:#1199AA;">？</span></strong>ヘルプ(H)\]</span><br>

***

## 使い方 {#etu162c1}

簡単な TeX ソースを作り，コンパイル，プレビューまで行いましょう．

まず，EasyTeX を起動します．

次に，［TeXﾃｷｽﾄ(T)］ → ［文書ｸﾗｽ(D)］ をクリックします．

「文書ｸﾗｽの設定」 で，jsarticle を指定します．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　文書ｸﾗｽの設定　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[　 <span style="color:White;"><strong>✕</strong></span> 　\]</span> </ins></span><br>

　　　　　　　文書ｸﾗｽ　　　　　　　　　　　用紙ｻｲｽﾞ　　　　　　文字ｻｲｽﾞ<br>
　　小論文 (jarticle)　　　　　<span style="color:#555555;background-color:#EEEEEE;">▲</span>　　　　　A4　　　<span style="color:#555555;background-color:#EEEEEE;">▲</span>　　　　　11ポイント<span style="color:#555555;background-color:#EEEEEE;">▲</span><br>
　　<span style="color:White;background-color:#1188FF;">小論文 (jsarticle)　　　　 </span>　 　　　　　<span style="color:White;background-color:#1188FF;">A4j　 　</span>　　 　　　　<span style="color:White;background-color:#1188FF;">12ポイント</span><br>
　　報告書 (jreport)　　　　　　　　　　　 A5　　　　　　　　　　　　　 　　<span style="color:#555555;background-color:#EEEEEE;">▼</span><br>
　　欧文小論文 (article)　　 <span style="color:#555555;background-color:#EEEEEE;">▼</span>　　　　　A5j　　 <span style="color:#555555;background-color:#EEEEEE;">▼</span>

　　　　　　　　　　　　　　　　　　　　　　　　使用する<br>
　　　　☐2段組をする　　　　　　　　　　amsmath,amsthm,amssymb<span style="color:#555555;background-color:#EEEEEE;">▲</span><br>
　　　　☐タイトルを付けない　　　　　　epic,eepic<br>
　 　 　 　 　 　 　　　　　　　　　　　　 　 　graphicx　 　 　 　 　　　　　<span style="color:#555555;background-color:#EEEEEE;">▼</span><br>
　　　ﾀｲﾄﾙ<br>
　<br>
　　　著者<br>
　<br>
　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　　<strong><span style="color:#119933;">✔</span></strong>OK　　 \]</span>　　　<span style="color:Black;background-color:#EEEEEE;">\[<strong><span style="color:#993311;">✘</span></strong>キャンセル\]</span>

***

文字ｻｲｽﾞはデフォルトで 12ポイントが選択されていると思います．

jsarticle は 9pt，10pt，11pt，12pt，14pt，17pt，21pt，25pt，30pt，36pt，43pt を指定することができます．([pLaTeX2e 新ドキュメントクラス](http://oku.edu.mie-u.ac.jp/~okumura/jsclasses/) を参照．)

［ﾀｲﾄﾙ］ と ［著者］ を適当に書きます．

［使用する］ の部分には使用する
スタイルファイルを指定します（\usepackage コマンドで指定するものです）．

一通り終わったら \[ 　　<strong><span style="color:#119933;">✔</span></strong>OK　　 \] をクリックします．

一気に沢山のコマンドが書き加えられているのが分かりますね．

こうした補完は ［TeXﾃｷｽﾄ(T)］ と ［TeX数式(M)］ に多く入っています．

色々と試してみましょう．

一通り書き終わったら ［ｺﾝﾊﾟｲﾙ(C)］ をクリックします．

うまくいけば，epLaTeX によって DVI ファイルが生成されます．

そして \[DVI(D)\] をクリックすると，DVI ファイルがプレビューできます．

［ﾌｧｲﾙ(F)］ → ［DVI->PDF変換(D)］で 「PDFファイルのページサイズの設定」 が表示されます．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　PDFファイルのページサイズの設定　　　　　　　<span style="color:Black;background-color:#CC3333;">\[　 <span style="color:White;"><strong>✕</strong></span> 　\]</span> </ins></span><br>

　　　　　　　　　ページサイズ<br>
　　　　　　　指定しない　<span style="color:#555555;background-color:#EEEEEE;">▲</span><br>
　　　　　　　a3　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　　<strong><span style="color:#119933;">✔</span></strong>OK　　 \]</span><br>
　　　　　　　<span style="color:White;background-color:#1188FF;">a4　　　　　　</span><br>
　　　　　　　a5<br>
　　　　　　　a6　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<strong><span style="color:#993311;">✘</span></strong>キャンセル\]</span><br>
　　　　　　　b3　　　　　　<span style="color:#555555;background-color:#EEEEEE;">▼</span><br>
　<br>
　　　　　　　☐landscape<br>

***

ページサイズを指定し，\[ 　　<strong><span style="color:#119933;">✔</span></strong>OK　　 \] を押すと，dvipdfmx を使った PDF ファイルの生成と表示ができます．

あとの操作は，基本的にメニューの中から入力したい命令を選んでいけば良いでしょう．

［ﾌｧｲﾙ(F)］ → ［DVI->PDF変換2(R)］は dvipdfmx ではなく [dvips](/dvips/) + [Ghostscript](/Ghostscript/) で，処理を行います．

ある範囲を一括コメントイン・コメントアウトする便利な機能もあります．

範囲指定してからメニューより ［編集(E)］ → ［ｺﾒﾝﾄ/ｺﾒﾝﾄ解除(O)］ で，コメントイン・アウトできますので，活用してみてください．

## EasyTeX と dviout との連携 (source special) {#etsa7019}

EasyTeX の実行ファイルである EasyTeX.exe のフルパスが C:\w32tex\editor\easytex3231\EasyTeX.exe である場合，[dviout for Windows](/dviout/) の
\[Option\] → \[Setup Parameters...\] → \[Common\] の src: 欄に

```
`easytex easytex +%d %s``C:\w32tex\editor\easytex3231\EasyTeX.exe
```

と書き込んで \[Save\] → \[OK\] してください．

dviout でマウスカーソルが矢印になっているときに画面の一部をダブルクリックすると，EasyTeX が前面に出て，該当個所に飛ぶはずです．

次に，EasyTeX のメニューバーより ［ｵﾌﾟｼｮﾝ(O)］ → ［TeX環境設定(T)］ と選びます．

出てきたウィンドウで \[TeXOption\] タブの \[source special\] にチェックを入れます．

\[ Iniファイルに保存 \] → \[ 　　<strong><span style="color:#119933;">✔</span></strong>OK　　 \] の順にクリックします．

EasyTeX を再起動します．

EasyTeX でコンパイルし，LaTeX ソースのある領域を選択しながら \[DVI\] ボタンを押してプレビューしたときに，DVI ファイルの該当領域に
ジャンプするはずです．

> 【注意】この「source specials を用いた連携」は，「TeX ソースファイルの形で
> 他人に渡す文書（投稿論文の TeX ソースの類）の最終版」を作成する際には
> 用いないでください．実際，source specials を用いるか否かによって
> 体裁あるいは「タイプセットの可否」が変わる例が知られています
> ([qa:8914](https://okumuralab.org/~okumura/texfaq/qa/8914.html)，[qa:14224](https://okumuralab.org/~okumura/texfaq/qa/14224.html) 参照)．

## EasyTeX 用マクロ {#j92ac132}

- [AutoHotKey スクリプト](http://ryo-t.com/diary/?p=94)
    (谷内 稜 さん)

- [TeXエディタ](http://www2s.biglobe.ne.jp/~Taiju/leaf/tjsoft17_texeditor.htm)
    (H. Shinozaki さん)

- [漢文エディタ](http://www2s.biglobe.ne.jp/~Taiju/leaf/tjsoft05_kanbun.htm)
    (H. Shinozaki さん)

## 関連リンク {#p8488be5}

- [LaTeXとか - PukiWiki](http://www.2009-s1-34.com/index.php?LaTeX%A4%C8%A4%AB)
- [Easy TeXでbibTeXをつかう](http://yumetaminn.blog91.fc2.com/blog-entry-305.html)

## Comments {#etacm8ab}

- 修正等は自由にしていただいて構いません。ちょっとしたコメント・質問等はここにどうぞ。 -- これを書いた人 2005-11-09 (水) 14:54:34
- easyTeXをインストールしましたが、コンパイルできません・・・TEX実行ﾌｧｲﾙのパスが駄目だそうです。どうしたらよいでしょうか？？ -- ﾆｬｵ 2006-07-20 (木) 21:40:08
- 「初期設定」は，終わっているのでしょうか？ 詳しいことが分かりませんので「設定を見直してみてください」ぐらいしかアドバイス出来ません。もちろん TeX そのもののインストールは終わっているんですよね。 -- tony 2006-07-21 (金) 08:39:55
- EasyTeX と dviout との連携がうまくいきません．EasyTeX　も　dviout　も指示通り設定しましたが，どちらからもうまく作動しません．何を間違っているのか分からず困っています． -- textex 2006-07-29 (土) 01:45:13
- [質問のしかた](</質問のしかた/>)をよく読んで，続きは[TeX Q &amp; A 掲示板](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/qa/) で・・・ -- tony 2006-07-29 (土) 04:13:51
- インストール方法を再度チェックしてから，QandA　を同じような質問を探しました．アバウトな質問の仕方をしてすみませんでした．ありがとうございました． -- textex 2006-08-03 (木) 20:01:49
