---
title: "guishell"
url: "/guishell/"
date: 2012-10-11T02:32:16Z
pukiwiki: "guishell"
---

# guishell

[秀丸エディタ](</秀丸エディタ/>) > guishell, TeXmac

## [guishell, TeXmac](http://argent.shinshu-u.ac.jp/~otobe/prog/experimental.html) {#h2793999}

[guishell, TeXmac](http://argent.shinshu-u.ac.jp/~otobe/prog/experimental.html)
guishell 1.39.2 (Win32版, x64版, ソースファイル), TeXmac 2.17 (秀丸8以降・x64対応)
(乙部 厳己 さん @ 信州大)

## 設定 {#feaae349}

### guishell {#l396e5fa}

***

設定

- 環境変数 PATH に dviout.exe と guishell.exe の存在するフォルダーを追加する (例えば C:\w32tex\dviout;C:\w32tex\guishell-1.39.2-x64)
- 環境変数 TEXMF に C:\w32tex\share\texmf を設定する
    <!-- TEXMF をこのようにすると、通常はTeX からアクセスできなくなる trees が生じる -->
    <!-- と思いますが大丈夫でしょうか? -->

- 環境変数 TEXMFCNF に C:\w32tex\share\texmf\web2c;C:\w32tex\share\texmf\web2c\eptex を設定する
    <!-- TEXMFCNF の意味が変更されていますが大丈夫でしょうか。 -->
    <!-- またいろいろな texmf.cnf が読めなくなります。 -->

- guishell の \[オプション(O)\]-\[フォーマットファイルの登録(F)...\] で platex.fmt をチェックして 縦組み対応LaTeX2e(platex.fmt) を選択して OK をクリックする
- guishell.cfg を以下のように設定

    ```
    index=0
    FormatFile0=縦組み対応LaTeX2e(platex.fmt)
    ```

***

Gui-Shellの一般的動作設定<br>
　　動作ﾓｰﾄﾞの設定<br>
　　　◎ 日本語ﾓｰﾄﾞ(日本語版のﾌﾟﾛｸﾞﾗﾑを優先します)<br>
　　　◯ 欧文ﾓｰﾄﾞ(ｵﾘｼﾞﾅﾙ版のﾌﾟﾛｸﾞﾗﾑを優先します)<br>
　　画面出力設定<br>
　　☐ Gui-Shellコメントの抑制<br>
　　<span style="color:#CCCCCC;">☑ 標準エラー出力を表示</span><br>
　　☑ エラー行に色をつける<br>
　　環境変数PATHの推定(次回起動時より有効)<br>
　　☐ Ghostscriptディレクトリの推定を行う<br>
　　☐ Adobe Acrobatディレクトリの推定を行う<br>
　　☐ TeX実行プログラムのディレクトリの推定を行う<br>
　　 MRUリストの数(次回GUI-Shell起動時から有効) <ins>9</ins><br>
　　☐ 分割ウィンドウを用いる(推奨されない機能)<br>
　　☐ 終了時メッセージを表示しない<br>
　　☐ クリッピングせずに画面出力<br>
　　☐ DDE接続時もTEXEDITを使う<br>

***

ﾌｫｰﾏｯﾄﾌｧｲﾙ登録<br>
　ｺﾝﾋﾟｭｰﾀ上にあるﾌｫｰﾏｯﾄﾌｧｲﾙ　　　登録済みﾌｫｰﾏｯﾄﾌｧｲﾙ(とその表示順序)<br>

<br>

　 ☐cont-en.fmt　　　　　　　　　　　縦組み対応LaTeX2e(platex.fmt)<br>
　 ☐eptex.fmt<br>
　 ☑platex.fmt<br>
　　　　　　　　　　　　　　　　　　　　　　　　　☑フォーマットファイルバーの表示<br>

***

### TeXmac {#k11d277b}

***

TeXMAC統合環境(1)<br>
コンパイル関係(2)<br>
文書クラス設定(3)<br>
ちょうてふ(4)<br>
TeXMAC-R #1(5)<br>
TeXMAC-R #2(6)<br>
TeXMAC-R #3(7)<br>
TeXMAC-R #4(8)<br>
ﾌｫｰﾏｯﾄﾌｧｲﾙ選択(9)<br>
見出し検索(0)<br>

***

## 関連リンク {#m2c882b0}

- [pLaTeX2e for Windows Another Manual Vol.1 Basic Kit 1999 サポートページ](http://argent.shinshu-u.ac.jp/~otobe/tex/book/1999revise.html)
- [GUI-SHELLアップデート](http://argent.shinshu-u.ac.jp/~otobe/tex/book/update.html)
- [guishell が，うまく作動しないため，ご指導願いたい！](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=832)
- [GuiShell を呼び出し，TeX にコンパイルさせるマクロは？](http://www.maruo.co.jp/hidesoft/2/x31262_.html#31262)
- [角藤版W32TeXでGuishell，TeXMAC，秀丸を利用する](http://homepage3.nifty.com/mamoru/data/800.htm)
- [角藤版 pTeX を， TeXMac &amp; 秀丸 から使う方法](http://mixedmoss.com/Oboegaki/TeXMac%20install.htm)
- [PC-LaTeX環境](http://graphics.stanford.edu/~naemura/memo/latex-win.html)/
    [LaTeXとWebの連携](http://graphics.stanford.edu/~naemura/memo/latex-web.html)(苗村さん＠東京大)
