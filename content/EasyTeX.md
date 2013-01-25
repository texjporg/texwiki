---
title: "EasyTeX"
url: "/EasyTeX/"
date: 2010-06-15T08:07:06Z
pukiwiki: "EasyTeX"
---

# EasyTeX

## [EasyTeX](http://www.juen.ac.jp/math/nakagawa/texguide.html#easytex) {#et3357}

<img src="http://f.hatena.ne.jp/images/fotolife/K/Kshi_Kshi/20110111/20110111214022.png" alt="EasyTeX" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

<div style="clear:both"></div>

## EasyTeX とは {#eta184ab}

EasyTeX は国産でフリーの TeX 統合環境です．<br>
TeX の入力とコマンドの実行が簡単にできるソフトウェアです．<br>

- [中川仁のホームページ](http://www.juen.ac.jp/math/nakagawa/nakagawa.html) 公式サイト
    - [TeX入門 &mdash; TeXを使って数式をきれいに書こう](http://www.juen.ac.jp/math/nakagawa/texguide.html)
        - [EasyTeX(Windows)でTeX統合環境](http://www.juen.ac.jp/math/nakagawa/texguide.html#easytex)

### 動作環境 {#he80243b}

Windows 7, Vista, XP

### リリース情報 {#nc0d64ca}

[中川仁のホームページ](http://www.juen.ac.jp/math/nakagawa/nakagawa.html)を参照．<br>

EasyTeX Verson 3.30 以降は，Unicode (UTF-16、UTF-16BE、UTF-8、UTF-8BOM)、日本語 (Shit-JIS、EUC、JIS) に対応しています．

### スクリーンショット {#e7b3eafc}

<img src="http://f.hatena.ne.jp/images/fotolife/K/Kshi_Kshi/20110111/20110111220630.png" alt="EasyTeX の画面">

### 特徴 {#c007c9f5}

- EasyTeX Verson 3.30 以降は，Unicode (UTF-16、UTF-16BE、UTF-8、UTF-8BOM)、日本語 (Shit-JIS、EUC、JIS) に対応しています．
- TeX の命令を色付けして表示できます．
- LaTeX コマンドをマウスで選び，クリックすることで，自動的にコマンドが挿入される補完機能を持っています．
- ヘルプには LaTeX の解説が付属しています．
- [Aspell](/Aspell/) などのスペルチェッカーが起動可能です．
- 登録されてないコマンドのメニューを新たに作ることができ，ショートカットのカスタマイズも可能です．
- IME および ATOK による再変換をサポートしています．
- [SumatraPDF](/SumatraPDF/) を使用すれば，SyncTeX による forward and inverse search も可能です．

シンプルな統合環境なので，これから TeX を使い始める方におすすめのソフトです．

## 不具合 {#n8975b09}

[TeXを使って数式をきれいに書こう](http://www.juen.ac.jp/math/nakagawa/texguide.html) の EasyTeX 不具合の報告 を参照．

## [ダウンロード](http://www.juen.ac.jp/math/nakagawa/texguide.html#easytex) {#bf9167cb}

### EasyTeX の入手先 {#qe994380}

- [EasyTeX(Windows)でTeX統合環境](http://www.juen.ac.jp/math/nakagawa/texguide.html#easytex)

## インストール {#sfc300c2}

### zip ファイル {#d9b1ceee}

zip ファイル版の場合はファイルを適当なフォルダーに展開 (解凍) するだけでインストールは終了です．

### exe ファイル {#fac37d0f}

exe ファイル版 (インストーラー機能付き) の場合はインストーラーの指示に従ってインストールします．

## アンインストール {#l7ffd31d}

### zip ファイル {#r2a5838b}

zip ファイル版は，レジストリを使用しません．アンインストールするときはフォルダーごと削除してください．

### exe ファイル {#z3b6deb0}

exe ファイル版 (インストーラー機能付き) のアンインストールをするときはコントロール パネルのプログラムのアンインストールからアンインストールしてください．

## 設定 {#l2b1dc1e}

EasyTeX/設定 を参照．

## 使い方 {#etu162c1}

簡単な TeX ソースを作り，コンパイル，プレビューまで行いましょう．<br>
まず，EasyTeX を起動します．<br>
次に，［TeXﾃｷｽﾄ(T)］ → ［文書クラス(D)］ をクリックします．<br>

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　文書ｸﾗｽの設定　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[　 <span style="color:White;"><strong>✕</strong></span> 　\]</span> </ins></span><br>

　　　　　　　文書ｸﾗｽ　　　　　　　　　　　用紙ｻｲｽﾞ　　　　　　文字ｻｲｽﾞ<br>
　　小論文 (jarticle)　　　　　<span style="color:#555555;background-color:#EEEEEE;">▲</span>　　　　　A4　　　<span style="color:#555555;background-color:#EEEEEE;">▲</span>　　　　　10ポイント<span style="color:#555555;background-color:#EEEEEE;">▲</span><br>
　　<span style="color:White;background-color:#1188FF;">小論文 (jsarticle)　　　　 </span>　 　　　　　<span style="color:White;background-color:#1188FF;">A4j　 　</span>　　 　　　　11ポイント<br>
　　報告書 (jreport)　　　　　　　　　　　 A5　　　　　　　　　 <span style="color:White;background-color:#1188FF;">12ポイント</span><span style="color:#555555;background-color:#EEEEEE;">▼</span><br>
　　欧文小論文 (article)　　 <span style="color:#555555;background-color:#EEEEEE;">▼</span>　　　　　A5j　　 <span style="color:#555555;background-color:#EEEEEE;">▼</span>

　　　　　　　　　　　　　　　　　　　　　　　　使用するﾊﾟｯｹｰｼﾞ<br>
　　　　☐2段組をする　　　　　　　　　　amsmath,amsthm,amssymb<span style="color:#555555;background-color:#EEEEEE;">▲</span><br>
　　　　☐タイトルを付けない　　　　　　epic,eepic<br>
　 　 　 　 　 　 　　　　　　　　　　　　 　 　graphicx　 　 　 　 　　　　　<span style="color:#555555;background-color:#EEEEEE;">▼</span><br>

<br>

　　　ﾀｲﾄﾙ<br>
　　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br>
　　　著者<br>
　　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　　<strong><span style="color:#119933;">✔</span></strong>OK　　 \]</span>　　　<span style="color:Black;background-color:#EEEEEE;">\[<strong><span style="color:#993311;">✘</span></strong>キャンセル\]</span><br>

***

「文書ｸﾗｽの設定」 で，jsarticle を指定します．<br>
文字ｻｲｽﾞはデフォルトで 12ポイントが選択されていると思います．<br>
jsarticle は 9pt，10pt，11pt，12pt，14pt，17pt，21pt，25pt，30pt，36pt，43pt を指定することができます．([pLaTeX2e 新ドキュメントクラス](http://oku.edu.mie-u.ac.jp/~okumura/jsclasses/) を参照．)<br>
［ﾀｲﾄﾙ］ と ［著者］ を適当に書きます．<br>
［使用するﾊﾟｯｹｰｼﾞ］ の部分には使用するスタイルファイルを指定します (\usepackage コマンドで指定するものです)．<br>
Shift + 左クリックで複数のパッケージを選択することが可能です．<br>
一通り終わったら \[ 　　<strong><span style="color:#119933;">✔</span></strong>OK　　 \] をクリックします．<br>
一気に沢山のコマンドが書き加えられているのが分かりますね．<br>
こうした補完は ［TeXﾃｷｽﾄ(T)］ と ［TeX数式(M)］ に多く入っています．<br>
色々と試してみましょう．<br>
一通り書き終わったら［ﾌｧｲﾙ(F)］ → ［コンパイル・Pdfプレビュー(F)］をクリックします．<br>
うまくいけば PDF ファイルが表示されます．<br>
DVI ファイルを表示する場合は［ﾌｧｲﾙ(F)］ → ［コンパイル・Dviプレビュー(B)］をクリックします．<br>
pLaTeX のみ実行する場合は［ｺﾝﾊﾟｲﾙ(C)］ をクリックします．<br>
<strong>Version 3.167 以降では，編集中のファイルは自動的に保存されます．</strong><br>

［ﾌｧｲﾙ(F)］ → ［コンパイル・Pdfプレビュー(F)］(初回のみ) または ［ﾌｧｲﾙ(F)］ → ［DVI->PDF変換(D)］で 「PDFファイルのページサイズの設定」 が表示されます．<br>

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

ページサイズを指定し，\[ 　　<strong><span style="color:#119933;">✔</span></strong>OK　　 \] を押すと，dvipdfmx を使った PDF ファイルの生成と表示ができます．<br>
［ﾌｧｲﾙ(F)］ → ［DVI->PDF変換2(R)］は dvipdfmx ではなく [dvips](/dvips/) + [Ghostscript](/Ghostscript/) で，処理を行います．<br>
あとの操作は，基本的にメニューの中から入力したい命令を選んでいけば良いでしょう．<br>
ある範囲を一括コメントイン・コメントアウトする便利な機能もあります．<br>
範囲指定してからメニューより ［編集(E)］ → ［コメント/コメント解除(O)］ で，コメントイン・アウトできますので，活用してみてください．<br>
ファイルを分割している場合は \[ｵﾌﾟｼｮﾝ(O)\] → \[親ファイルの指定(P)\] でメインのファイルを指定してください．<br>

## EasyTeX 用マクロ {#j92ac132}

- [AutoHotKey スクリプト](http://ryo-t.com/diary/?p=94)
    (谷内 稜 さん)

- [TeXエディタ](http://www2s.biglobe.ne.jp/~Taiju/leaf/tjsoft17_texeditor.htm)
    (H. Shinozaki さん)

- [漢文エディタ](http://www2s.biglobe.ne.jp/~Taiju/leaf/tjsoft05_kanbun.htm)
    (H. Shinozaki さん)

## 関連リンク {#p8488be5}

- [0からTex,EasyTexのインストール (Windows7 32bit)](http://d.hatena.ne.jp/Kshi_Kshi/20110111)
- [Easy TeXでbibTeXをつかう](http://yumetaminn.blog91.fc2.com/blog-entry-305.html)
- [easychair というクラスファイルの使い方](http://ameblo.jp/8713-blog/archive1-201201.html)

<!-- *Comments [#etacm8ab] -->
<!--  -->
<!-- - 修正等は自由にしていただいて構いません。ちょっとしたコメント・質問等はここにどうぞ。 - - これを書いた人 &new{2005-11-09 (水) 14:54:34}; -->
<!-- - easyTeXをインストールしましたが、コンパイルできません・・・TEX実行ﾌｧｲﾙのパスが駄目だそうです。どうしたらよいでしょうか？？ - - ﾆｬｵ &new{2006-07-20 (木) 21:40:08}; -->
<!-- - 「初期設定」は，終わっているのでしょうか？ 詳しいことが分かりませんので「設定を見直してみてください」ぐらいしかアドバイス出来ません。もちろん TeX そのもののインストールは終わっているんですよね。 - - tony &new{2006-07-21 (金) 08:39:55}; -->
<!-- - EasyTeX と dviout との連携がうまくいきません．EasyTeX　も　dviout　も指示通り設定しましたが，どちらからもうまく作動しません．何を間違っているのか分からず困っています． - - textex &new{2006-07-29 (土) 01:45:13}; -->
<!-- - [[質問のしかた]]をよく読んで，続きは[[TeX Q & A 掲示板:http://oku.edu.mie-u.ac.jp/~okumura/texfaq/qa/]] で・・・ - - tony &new{2006-07-29 (土) 04:13:51}; -->
<!-- - インストール方法を再度チェックしてから，QandA　を同じような質問を探しました．アバウトな質問の仕方をしてすみませんでした．ありがとうございました． - - textex &new{2006-08-03 (木) 20:01:49}; -->
<!--  -->
<!-- #comment -->
