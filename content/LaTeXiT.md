---
title: "LaTeXiT"
url: "/LaTeXiT/"
date: 2011-11-22T01:20:44Z
pukiwiki: "LaTeXiT"
---

# LaTeXiT

## [LaTeXiT](http://pierre.chachatelier.fr/latexit/) {#b58323c5}

LaTeXiT は，TeX ソースコードをタイプセットして画像に変換するアプリケーションです．
[MacTeX](</TeX Live/Mac/#mactex>) に標準で含まれています．

<strong>公式サイト</strong>

- [LaTeXiT](http://pierre.chachatelier.fr/latexit/)
- [LaTeXiT | Facebook](https://www.facebook.com/LaTeXit)

類似ソフトウェアとして，[TeX2img](/TeX2img/) があります．

***

***

### 出力形式 {#j810704f}

LaTeXiT が出力できる画像形式は以下のとおりです．

- ベクター画像
    - アウトラインをとった EPS ファイル
    - アウトラインをとった PDF ファイル (PDF with outlined fonts)
    - テキストを保持した PDF ファイル
- ビットマップ画像
    - JPEG ファイル
    - PNG ファイル
    - TIFF ファイル

PNG は背景を透過させることができます．

オプションで [pdf2svg](/pdf2svg/) をインストールすれば，SVG ファイルも出力できるそうです． <!-- ただ，インストールと連携に成功していないので未確認． -->

バージョン 2.3.0 以降は，試験的に MathML 形式でも出力できる機能が付加されました．

### 動作環境 {#e0e2eaf2}

OS X で動作します．
[COMPATIBILITY](http://pierre.chachatelier.fr/latexit/latexit-features.php?lang=en#main)
を参照してください．

### インストール {#z9061d08}

LaTeXiT 本体は以下のリンクからダウンロードできます．

- [LaTeXiT Downloads](http://pierre.chachatelier.fr/latexit/latexit-downloads.php)

Beta 版も入手できます，

- [LaTeXiT Beta](http://pierre.chachatelier.fr/latexit/latexit-beta.php)

### 環境設定 {#tab3d738}

#### プログラム {#a32b734b}

\[プログラム\]-\[コマンド\] で latex+dvipdf を選択して \[変更...\] を使用せずにプログラムのパスを直接入力します．

***

<span style="color:Gray;background-color:#EEEEEE;">　<span style="color:#DDDDDD;background-color:#EEEEEE;">●</span> <span style="color:#DDDDDD;background-color:#EEEEEE;">●</span> <span style="color:#DDDDDD;background-color:#EEEEEE;">●</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<strong>環境設定</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span><br>

<span style="color:Gray;background-color:#EEEEEE;"><ins>　<strong>一般</strong>　　<strong>テキスト編集</strong>　　<strong>テンプレート</strong>　</ins></span><span style="color:Gray;background-color:#DDDDDD;"><ins><span style="color:#DDDDDD;">\[</span>　<strong>プログラム</strong>　<span style="color:#DDDDDD;">\]</span></ins></span><span style="color:Gray;background-color:#EEEEEE;"><ins>　<strong>ライブラリ</strong>　　<strong>履歴</strong>　　<strong>サービス</strong>　　<strong>詳細</strong>　　<strong>ウェブ</strong>　　　　　　　　　　　　　　　</ins></span><br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　<strong>処理に使用するプログラム</strong><br>
　　　　　　　　　　　　　　　　　　　　　　　　構成： <span style="color:Black;background-color:#FAFAFA;"><ins>\[ デフォルト　　　　　　　　　　　 <strong>⇕</strong> \]</ins></span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　<ins><span style="color:#F1F1F1;background-color:#0F7FFF;"><span style="color:#0F7FFF;">\[</span>　<strong>コマンド</strong>　<span style="color:#0F7FFF;">\]</span></span><span style="color:Black;background-color:White;">\[　<strong>追加スクリプト</strong>　\]</span></ins><br>
　　　　　　　　　　　　　　　　　　　　　　◯ pdflatex　　　◯ xelatex　　　　<span style="color:White;background-color:#0F7FFF;">🔘</span> latex+dvipdf<br>

　　　　　　　　　　pdfLaTeX　　　　　<ins>/usr/texbin/pdflatex</ins><br>
　　　　　　　　　　XeLaTeX　　　　　<span style="color:Gray;"><ins>/usr/texbin/xelatex</ins></span><br>
　　　　　　　　　　LaTeX　　　　　　　<ins>/usr/texbin/uplatex</ins><br>
　　　　　　　　　　dvipdf　　　　　　　<ins>/usr/texbin/dvipdfmx</ins><br>
　　　　　　　　　　Ghostscript (gs)　<ins>/usr/local/bin/gs-noX11</ins>　← [Ghostscript.app - マスクメロン](http://www.muskmelon.jp/?page_id=75) を使用する場合は <ins>/Applications/Ghostscript.app/bin/gs</ins> に変更<br>
　　　　　　　　　　ps2pdf　　　　　　　<ins>/usr/local/bin/ps2pdf</ins>　← [Ghostscript.app - マスクメロン](http://www.muskmelon.jp/?page_id=75) を使用する場合は <ins>/Applications/Ghostscript.app/bin/ps2pdf</ins> に変更<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ ユーザのログインシェルを使用<br>

***

### 関連リンク {#tab9989c}

- [LaTeXiT FAQ](http://pierre.chachatelier.fr/latexit/latexit-faq.php)
- [MacのLaTeX環境構築とプレゼン資料に数式を貼り付けるのに便利な「LaTeXiT」](http://ottan.xyz/mac-latex-presentation-92/)
- [MacにLaTeXiT (+LaTeX) を導入＆日本語に対応](http://harulab.info/?p=631)
- [Texの設定(MacTex)](https://sites.google.com/site/yoshitoshimajiri/memo-for-researches/texno-she-ding-m)
- [tips of LaTeXiT](http://astr.phys.saga-u.ac.jp/~funakubo/research/LaTeXiT_tips/LaTeXiT.html)
- MacWiki:LaTeXiT
- LaTeXiTでUndefined control sequence.l.1 \documentclass とのエラーメッセージがでる ([qa:56339](https://okumuralab.org/~okumura/texfaq/qa/56339.html), [qa:56340](https://okumuralab.org/~okumura/texfaq/qa/56340.html), [qa:56341](https://okumuralab.org/~okumura/texfaq/qa/56341.html), [qa:56342](https://okumuralab.org/~okumura/texfaq/qa/56342.html), [qa:56343](https://okumuralab.org/~okumura/texfaq/qa/56343.html), [qa:56344](https://okumuralab.org/~okumura/texfaq/qa/56344.html), [qa:56345](https://okumuralab.org/~okumura/texfaq/qa/56345.html), [qa:56346](https://okumuralab.org/~okumura/texfaq/qa/56346.html), [qa:56347](https://okumuralab.org/~okumura/texfaq/qa/56347.html), [qa:56352](https://okumuralab.org/~okumura/texfaq/qa/56352.html), [qa:56353](https://okumuralab.org/~okumura/texfaq/qa/56353.html), [qa:56359](https://okumuralab.org/~okumura/texfaq/qa/56359.html))
- [LaTeXItで数式の一部に日本語](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=833)

#### ChangeLog {#sb3b1ab6}

- [ChangeLog](http://pierre.chachatelier.fr/latexit/latexit-downloads.php#main)
