---
title: "LaTeXiT"
url: "/LaTeXiT/"
date: 2011-11-22T01:20:44Z
pukiwiki: "LaTeXiT"
---

# LaTeXiT

## [LaTeXiT](http://www.chachatelier.fr/latexit/) {#b58323c5}

<img src="http://www.chachatelier.fr/latexit/images/latexit_128.png" alt="LaTeXiT" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## LaTeXiT とは {#j7c51563}

LaTeXiT は OS X で動作する数式エディタです．

- [LaTeXiT](http://www.chachatelier.fr/latexit/)
    <!-- -[[LaTeXiT:http://pierre.chachatelier.fr/latexit]] -->
    - [Downloads](http://www.chachatelier.fr/latexit/latexit-downloads.php)
        - [Beta](http://www.chachatelier.fr/latexit/latexit-beta.php)

### リリース情報 {#sb3b1ab6}

2011-06-13 LaTeXiT 2.4.1<br>

## 環境設定 (MacTeX &amp; TeX Live の場合) {#tab3d738}

<strong>MacTeX で配布されている Ghostscript では LaTeXiT で日本語が表示されないようです．</strong><br>

日本語が表示されない場合は [Ghostscript.app - マスクメロン](http://www.muskmelon.jp/?page_id=75) や [JIS X0212 for pTeX](http://www2.kumagaku.ac.jp/teacher/herogw/) で配布されている Ghostscript に変更してください．<br>

### プログラム {#xab14b42}

#### コマンド {#a32b734b}

\[プログラム\]-\[コマンド\] で latex+dvipdf を選択して \[変更...\] を使用せずにプログラムのパスを直接入力します．<br>

***

<span style="color:Gray;background-color:#EEEEEE;">　<span style="color:#DDDDDD;background-color:#EEEEEE;">●</span> <span style="color:#DDDDDD;background-color:#EEEEEE;">●</span> <span style="color:#DDDDDD;background-color:#EEEEEE;">●</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<strong>環境設定</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span><br>

<span style="color:Gray;background-color:#EEEEEE;"><ins>　<strong>一般</strong>　　<strong>テキスト編集</strong>　　<strong>テンプレート</strong>　</ins></span><span style="color:Gray;background-color:#DDDDDD;"><ins><span style="color:#DDDDDD;">\[</span>　<strong>プログラム</strong>　<span style="color:#DDDDDD;">\]</span></ins></span><span style="color:Gray;background-color:#EEEEEE;"><ins>　<strong>ライブラリ</strong>　　<strong>履歴</strong>　　<strong>サービス</strong>　　<strong>詳細</strong>　　<strong>ウェブ</strong>　　　　　　　　　　　　　　　</ins></span><br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　<strong>処理に使用するプログラム</strong><br>
　　　　　　　　　　　　　　　　　　　　　　　　構成： <span style="color:Black;background-color:#FAFAFA;"><ins>\[ デフォルト　　　　　　　　　　　 ◆ \]</ins></span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　<ins><span style="color:#F1F1F1;background-color:#555555;"><span style="color:#555555;">\[</span>　<strong>コマンド</strong>　<span style="color:#555555;">\]</span></span><span style="color:Black;background-color:#EEEEEE;">\[　<strong>追加スクリプト</strong>　\]</span></ins><br>
　　　　　　　　　　　　　　　　　　　　　　◯ pdflatex　　　◯ xelatex　　　　<span style="color:Black;background-color:#9FCFFB;">◎</span> latex+dvipdf<br>

　　　　　　　　　　pdfLaTeX　　　　　<ins>/usr/texbin/pdflatex</ins><br>
　　　　　　　　　　XeLaTeX　　　　　<span style="color:Gray;"><ins>/usr/texbin/xelatex</ins></span><br>
　　　　　　　　　　LaTeX　　　　　　　<ins>/usr/texbin/platex</ins> または <ins>/usr/texbin/uplatex</ins><br>
　　　　　　　　　　dvipdf　　　　　　　<ins>/usr/texbin/dvipdfmx</ins><br>
　　　　　　　　　　Ghostscript (gs)　<ins>/usr/local/bin/gs</ins>　← 日本語が表示されない場合は [Ghostscript.app - マスクメロン](http://www.muskmelon.jp/?page_id=75) や [JIS X0212 for pTeX](http://www2.kumagaku.ac.jp/teacher/herogw/) で配布されている Ghostscript に変更<br>
　　　　　　　　　　ps2pdf　　　　　　　<ins>/usr/local/bin/ps2pdf</ins>　← 日本語が表示されない場合は [Ghostscript.app - マスクメロン](http://www.muskmelon.jp/?page_id=75) や [JIS X0212 for pTeX](http://www2.kumagaku.ac.jp/teacher/herogw/) で配布されている Ghostscript に変更<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ ユーザのログインシェルを使用<br>

***

#### コマンドの引数 (/usr/texbin/platex または /usr/texbin/uplatex) {#x1c644d6}

コマンドの引数
: -kanji=utf8

## 関連リンク {#tab9989c}

- [Mac OSX LionでLatexitを使う](http://d.hatena.ne.jp/satojkovic/20120408/1333927675)
- [2012年、Mac(Lion)とTeXと日本語と、あとhomebrew - A Way of Code](http://toggtc.hatenablog.com/entry/2012/02/20/230500)
- [tips of LaTeXiT](http://astr.phys.saga-u.ac.jp/~funakubo/research/LaTeXiT_tips/LaTeXiT.html)
- MacWiki:LaTeXiT
- [LaTeXiTでアレする](http://ototorosama.com/blog/2011/11/latexit%E3%81%A7%E3%82%A2%E3%83%AC%E3%81%99%E3%82%8B/)
- [久し振りの単独記事は、MacOSX LionにTeX環境を入れる話。](http://blog.goo.ne.jp/superspeed1963/e/09803682db0044e5bb3e5f6d5674c95c)
- [pTeX.app+LaTeXiT.appで日本語を表示する．](http://d.hatena.ne.jp/beehive62/20100606/1275809660)
- LaTeXiTでUndefined control sequence.l.1 \documentclass とのエラーメッセージがでる ([qa:56339](https://okumuralab.org/~okumura/texfaq/qa/56339.html), [qa:56340](https://okumuralab.org/~okumura/texfaq/qa/56340.html), [qa:56341](https://okumuralab.org/~okumura/texfaq/qa/56341.html), [qa:56342](https://okumuralab.org/~okumura/texfaq/qa/56342.html), [qa:56343](https://okumuralab.org/~okumura/texfaq/qa/56343.html), [qa:56344](https://okumuralab.org/~okumura/texfaq/qa/56344.html), [qa:56345](https://okumuralab.org/~okumura/texfaq/qa/56345.html), [qa:56346](https://okumuralab.org/~okumura/texfaq/qa/56346.html), [qa:56347](https://okumuralab.org/~okumura/texfaq/qa/56347.html), [qa:56352](https://okumuralab.org/~okumura/texfaq/qa/56352.html), [qa:56353](https://okumuralab.org/~okumura/texfaq/qa/56353.html), [qa:56359](https://okumuralab.org/~okumura/texfaq/qa/56359.html))
