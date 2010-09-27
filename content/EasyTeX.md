---
title: "EasyTeX"
url: "/EasyTeX/"
date: 2010-06-15T08:07:06Z
pukiwiki: "EasyTeX"
---

# EasyTeX

## EasyTeX {#et3357}

## EasyTeX とは {#eta184ab}

EasyTeX は Windows 98, 2000, XP, Vista, 7 上で動作する国産でフリーの TeX 統合環境です．

TeX の入力とコマンドの実行が簡単にできます．

公式サイトは次のところにあります．

- [中川仁のホームページ &mdash; TeX を使って数式をきれいに書こう](http://www.juen.ac.jp/math/nakagawa/texguide.html)

<img src="http://www.2009-s1-34.com/index.php?plugin=attach&amp;refer=LaTeX%A4%C8%A4%AB&amp;openfile=05.jpg" alt="EasyTeX の画面">

### 特徴 {#c007c9f5}

- TeX の命令を色付けして表示できます．
- LaTeX コマンドをマウスで選び，クリックすることで，自動的にコマンドが挿入される補完機能を持っています．
- ヘルプには LaTeX の解説が付属しています．
- [Aspell](/Aspell/) などのスペルチェッカーが起動可能です．
- 登録されてないコマンドのメニューを新たに作ることができ，ショートカットのカスタマイズも可能です．
- IME および ATOK による再変換をサポートしています．

シンプルな統合環境なので，これから TeX を使い始める方におすすめのソフトです．

## ダウンロード {#bf9167cb}

### EasyTeX の入手先 {#qe994380}

- [EasyTeX(Windows)でTeX統合環境](http://www.juen.ac.jp/math/nakagawa/texguide.html#easytex)

### インストール {#sfc300c2}

zip ファイルの場合はファイルを適当な場所に展開 (解凍) するだけでインストールは終了です．

exe ファイル (インストーラー機能付き) の場合はインストーラーの指示に従ってインストールします．

### アンインストール {#l7ffd31d}

zip ファイル版は，レジストリ[^1]への書き込みを行いません．アンインストールするときはフォルダごと削除してください．

exe ファイル版 (インストーラー機能付き) のアンインストールをするときは \[スタート\]-\[コントロールパネル\]-\[プログラムのアンインストール\] からアンインストールしてください．

## 設定 {#etcb6f8d}

インストール終了後，EasyTeX.exe を実行してください．

初回起動時は， 「TeX環境設定」 が表示されます．

***

<span style="color:Black;background-color:#ACDEFE;">TeX環境設定　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[　 <strong><span style="color:White;">✕</span></strong> 　\]</span> </span><br>

<strong>\[ TeXExe \]</strong><span style="color:Black;background-color:#EEEEEE;">\[ TeXOption \]\[ Spell \]\[ PS/PDF \]</span>

> <span style="color:Black;background-color:#EEEEEE;">\[TeX実行ファイルのパス\]</span><br>
>
> <span style="color:Black;background-color:#EEEEEE;">\[　　　　DVIドライバ　　　 \]</span><br>
>
> 　<br>
> 　<br>
> 　<br>

<span style="color:Black;background-color:#EEEEEE;">\[　　TeX環境を自動設定する　　\]</span><br>

<span style="color:Black;background-color:#EEEEEE;">\[ Iniファイルに保存 \]</span>　<span style="color:Black;background-color:#EEEEEE;">\[　<strong><span style="color:#119933;">✓</span></strong>OK　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[<strong><span style="color:#993311;">✗</span></strong>キャンセル\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[<strong><span style="color:#1199AA;">？</span></strong>ヘルプ(H)\]</span><br>

***

これから EasyTeX の初期設定をします．

\[　　TeX環境を自動設定する　　\] は使わずに，手動で設定を行います．

### TeXExe {#o3f9cb28}

***

<strong>\[ TeXExe \]</strong><span style="color:Black;background-color:#EEEEEE;">\[ TeXOption \]\[ Spell \]\[ PS/PDF \]</span>

> <span style="color:Black;background-color:#EEEEEE;">\[TeX実行ファイルのパス\]</span> C:\w32tex\bin<br>
>
> <span style="color:Black;background-color:#EEEEEE;">\[　　　　DVIドライバ　　　 \]</span> C:\w32tex\dviout\dviout.exe

***

TeX実行ファイルのパスを指定します．

ここでは，eplatex.exe (epLaTeX の実行ファイル) が C:\w32tex\bin に存在すると仮定しています．

DVIドライバは dviout.exe のフルパスを指定します．

### TeXOption {#d7b2d9ae}

***

<span style="color:Black;background-color:#EEEEEE;">\[ TeXExe \]</span><strong>\[ TeXOption \]</strong><span style="color:Black;background-color:#EEEEEE;">\[ Spell \]\[ PS/PDF \]</span>

> 言語　　　　　　　　　　　　　 ☐検索したTeXラベルをソートする<br>
> <span style="color:#3333CC;">◎</span>日本語<br>
>
> ◯英語<br>
> 　　　　　　　　　　　　　　　　 ☐source special<br>
> TeXコンパイラ<br>
> pLaTeX　　　　　　 <span style="color:#555555;background-color:#EEEEEE;">▲</span><br>
> <span style="color:White;background-color:#1188FF;">epLaTeX　　　 　 　</span>　　　　　☐ｺﾝﾊﾟｲﾙ画面を表示する<br>
>
> jPlain　　　　　　　　<span style="color:#555555;background-color:#EEEEEE;">▼</span><br>
> <span style="color:Black;background-color:#EEEEEE;">\[TeXソースファイルのパス\]</span>

***

epLaTeX を選択します．

### Spell {#z664fb17}

***

<span style="color:Black;background-color:#EEEEEE;">\[ TeXExe \]\[ TeXOption \]</span><strong>\[ Spell \]</strong><span style="color:Black;background-color:#EEEEEE;">\[ PS/PDF \]</span>

> <span style="color:Black;background-color:#EEEEEE;">\[スペルチェッカー\]</span> C:\Program Files\aspell\bin\aspell.exe<br>
>
> 　　起動オプション --lang=en -t -c

***

aspell.exe のフルパスと起動オプションを指定します．

スペルチェッカーを使わない人は何も入力しなくても OK です．

### PS/PDF {#ubd35880}

***

<span style="color:Black;background-color:#EEEEEE;">\[ TeXExe \]\[ TeXOption \]\[ Spell \]</span><strong>\[ PS/PDF \]</strong>

> <span style="color:Black;background-color:#EEEEEE;">\[　 GhostView 　\]</span> C:\Program Files\Ghostgum\gsview\gsview32.exe<br>
>
> <span style="color:Black;background-color:#EEEEEE;">\[　PDF Reader　\]</span> C:\Program Files\Adobe\Reader 9.0\Reader\AcroRd32.exe<br>
>
> 　PDF Readerを開くタイミング　　300　　⧫

***

gsview32.exe と AcroRd32.exe のフルパスを指定します．

PDF Readerを開くタイミングはお好みで設定してください．ここでは 300 に設定しました．

### 設定の保存 {#lf745908}

<strong>設定が完了したら，\[ Iniファイルに保存 \] をクリックして \[　<span style="color:#119933;">✓</span>OK　\] をクリックします．</strong>

この設定は，メニューの \[ｵﾌﾟｼｮﾝ(O)\] → \[TeX環境設定(T)\] から変更することができます．

<!-- 現在の EasyTeX は DVI -> PDF 変換機能や PDF ファイル閲覧機能があるので -->
<!-- ここはコメントアウトしときます -->

<!-- ついでに，［オプション］ → ［ツールの設定］ で -->
<!-- Program0 を dvipdfmx に，Program1 を「PDF 閲覧」に設定しておきます。 -->

<!-- :DVI → PDF| -->
<!-- :タイトル|DVI → PDF -->
<!-- :プログラム|dvipdfmx.exe -->
<!-- :実行時引数|%n.dvi -->

<!-- - --  -->

<!-- :PDF 閲覧| -->
<!-- :タイトル|PDF 閲覧 -->
<!-- :プログラム|cmd.exe /C START （Windows 95, 98, Me では -->
<!-- cmd.exe を command.com に置き換えるとうまくいくかも。） -->
<!-- :実行時引数|%n.pdf -->

<!-- あとは ［登録］ボタンを押し，[OK] をクリックします。 -->

<!-- こうすることでメニューバーの ［ツール］ より，[DVI → PDF] を選べば -->
<!-- dvipdfmx で DVI ファイルが PDF ファイルに変換され，［PDF 閲覧］ を選べば -->
<!-- PDF ファイルが（関連付けに従って Adobe Reader などが起動し，） -->
<!-- PDF を閲覧できるようになります。 -->

## 使い方 {#etu162c1}

簡単な TeX ソースを作り，コンパイル，プレビューまで行いましょう．

まず，［ﾌｧｲﾙ(F)］ → ［新規作成(N)］ と選んでいきます．

新規ファイルのウィンドウが開きます．

次に，［TeXﾃｷｽﾄ(T)］ → ［文書ｸﾗｽ(D)］と選んでいきます．

「文書ｸﾗｽの設定」 で，jsarticle を指定します．

***

<span style="color:Black;background-color:#ACDEFE;">文書ｸﾗｽの設定　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[　 <strong><span style="color:White;">✕</span></strong> 　\]</span> </span><br>

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
　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　<strong><span style="color:#119933;">✓</span></strong>OK　\]</span>　　<span style="color:Black;background-color:#EEEEEE;">\[<strong><span style="color:#993311;">✗</span></strong>キャンセル\]</span>

***

文字ｻｲｽﾞはデフォルトで 12ポイントが選択されていると思います．

jsarticle は 9pt，10pt，11pt，12pt，14pt，17pt，21pt，25pt，30pt，36pt，43pt を指定することができます．([pLaTeX2e 新ドキュメントクラス](http://oku.edu.mie-u.ac.jp/~okumura/jsclasses/) を参照．)

［ﾀｲﾄﾙ］ と ［著者］ を適当に書きます．

［使用する］ の部分には使用する
スタイルファイルを指定します（\usepackage コマンドで指定するものです）．

一通り終わったら \[　<strong><span style="color:#119933;">✓</span></strong>OK　\] をクリックします．

一気に沢山のコマンドが書き加えられているのが分かりますね．

こうした補完は ［TeXﾃｷｽﾄ(T)］ と ［TeX数式(M)］ に多く入っています．

色々と試してみましょう．

一通り書き終わったら ［ｺﾝﾊﾟｲﾙ(C)］ をクリックします．

うまくいけば，epLaTeX によって DVI ファイルが生成されます．

そして \[DVI(D)\] をクリックすると，DVI ファイルがプレビューできます．

［ﾌｧｲﾙ(F)］ → ［DVI->PDF変換(D)］で 「PDFファイルのページサイズの設定」 が表示されます．

***

<span style="color:Black;background-color:#ACDEFE;">PDFファイルのページサイズの設定　　　　　　<span style="color:Black;background-color:#CC3333;">\[　 <strong><span style="color:White;">✕</span></strong> 　\]</span> </span><br>

　　　　　　　ページサイズ<br>
　　　　　　　a3　　　　<span style="color:#555555;background-color:#EEEEEE;">▲</span><br>
　　　　　　　<span style="color:White;background-color:#1188FF;">a4　　　　</span>　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　　<strong><span style="color:#119933;">✓</span></strong>OK　　 \]</span><br>
　　　　　　　a5<br>
　　　　　　　a6<br>
　　　　　　　b3　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<strong><span style="color:#993311;">✗</span></strong>キャンセル\]</span><br>
　　　　　　　b4　　　　<span style="color:#555555;background-color:#EEEEEE;">▼</span><br>
　<br>
　　　　　　　☐landscape<br>

***

ページサイズを指定し，\[ 　　<strong><span style="color:#119933;">✓</span></strong>OK　　 \] を押すと，dvipdfmx を使った PDF ファイルの生成と表示ができます．

あとの操作は，基本的にメニューの中から入力したい命令を選んでいけば良いでしょう．

［ﾌｧｲﾙ(F)］ → ［DVI->PDF変換2(R)］は dvipdfmx ではなく [dvips](/dvips/) + [Ghostscript](/Ghostscript/) で，処理を行います．

ある範囲を一括コメントイン・コメントアウトする便利な機能もあります．

範囲指定してからメニューより ［編集(E)］ → ［ｺﾒﾝﾄ/ｺﾒﾝﾄ解除(O)］ で，コメントイン・アウトできますので，活用してみてください．

## EasyTeX と dviout との連携 (source special) {#etsa7019}

EasyTeX の実行ファイルである EasyTeX.exe のフルパスが C:\w32tex\editor\easytex323\EasyTeX.exe である場合，[dviout for Windows](/dviout/) の
\[Option\] → \[Setup Parameters...\] → \[Common\] の src: 欄に

```
`easytex easytex +%d %s``C:\w32tex\editor\easytex323\EasyTeX.exe
```

と書き込んで \[Save\] → \[OK\] してください．

dviout でマウスカーソルが矢印になっているときに画面の一部をダブルクリックすると，EasyTeX が前面に出て，該当個所に飛ぶはずです．

次に，EasyTeX のメニューバーより ［ｵﾌﾟｼｮﾝ(O)］ → ［TeX環境設定(T)］ と選びます．

出てきたウィンドウで \[TeXOption\] タブの \[source special\] にチェックを入れます．

\[ Iniファイルに保存 \] → \[　<strong><span style="color:#119933;">✓</span></strong>OK　\] の順にクリックします．

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

## Comments {#etacm8ab}

- 修正等は自由にしていただいて構いません。ちょっとしたコメント・質問等はここにどうぞ。 -- これを書いた人 2005-11-09 (水) 14:54:34
- easyTeXをインストールしましたが、コンパイルできません・・・TEX実行ﾌｧｲﾙのパスが駄目だそうです。どうしたらよいでしょうか？？ -- ﾆｬｵ 2006-07-20 (木) 21:40:08
- 「初期設定」は，終わっているのでしょうか？ 詳しいことが分かりませんので「設定を見直してみてください」ぐらいしかアドバイス出来ません。もちろん TeX そのもののインストールは終わっているんですよね。 -- tony 2006-07-21 (金) 08:39:55
- EasyTeX と dviout との連携がうまくいきません．EasyTeX　も　dviout　も指示通り設定しましたが，どちらからもうまく作動しません．何を間違っているのか分からず困っています． -- textex 2006-07-29 (土) 01:45:13
- [質問のしかた](</質問のしかた/>)をよく読んで，続きは[TeX Q &amp; A 掲示板](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/qa/) で・・・ -- tony 2006-07-29 (土) 04:13:51
- インストール方法を再度チェックしてから，QandA　を同じような質問を探しました．アバウトな質問の仕方をしてすみませんでした．ありがとうございました． -- textex 2006-08-03 (木) 20:01:49

[^1]: ソフトや OS に関する情報のデータベース
