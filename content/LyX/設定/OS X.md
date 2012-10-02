---
title: "LyX/設定/OS X"
url: "/LyX/設定/OS X/"
date: 2012-10-02T12:11:48Z
pukiwiki: "LyX/設定/OS X"
---

# LyX/設定/OS X

[LyX](/LyX/) > [設定](</LyX/設定/>) > OS X

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## 関連リンク {#tab664aa}

- [博士論文の執筆で役に立ったソフトウェア](http://blogos.com/article/45299/)
- [Mac OS XにTex Lyx導入](http://d.hatena.ne.jp/mosa_siru/20120627/1340818055)
- [TeX Live 2011( or MacTeX 2011) &amp; LyX 2.0.3の導入](http://texlive2011lyx203.blogspot.jp/)
- [LyX &laquo; Konno Log](http://knnlog.wordpress.com/tag/lyx/)
    - [MacTeX で LyX を使う](http://knnlog.wordpress.com/2012/04/01/mactex-%E3%81%A7-lyx-%E3%82%92%E4%BD%BF%E3%81%86/)
    - [Lion への LyX 導入](http://knnlog.wordpress.com/2011/10/16/lion-%E3%81%B8%E3%81%AE-lyx-%E5%B0%8E%E5%85%A5/)
    - [LyX インストール](http://knnlog.wordpress.com/2011/02/13/lyx-%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB/)
        <!-- -[[LyX | Konno Log:http://knmac.math.kyushu-u.ac.jp/konno/modules/wpkonno/?tag=lyx]] -->

- [TeX | ysykimura](http://ysykimura.wordpress.com/category/tex/)
    - [LyXとgraphicx](http://ysykimura.wordpress.com/2012/07/09/lyx%E3%81%A8graphicx/)
    - [LyXの設定：メモ](http://ysykimura.wordpress.com/2012/03/29/lyx%E3%81%AE%E8%A8%AD%E5%AE%9A%EF%BC%9A%E3%83%A1%E3%83%A2/)
    - [LyX＋α](http://ysykimura.wordpress.com/2011/11/16/lyx%EF%BC%8B%CE%B1/)
    - [LyX (2)](http://ysykimura.wordpress.com/2011/10/22/lyx-2/)
    - [LyX (1)](http://ysykimura.wordpress.com/2011/10/22/lyx/)
- [LyX2 &amp; TeXLive2010/Mac で 日本語PDF表示までしてみた。](http://d.hatena.ne.jp/fu7mu4/20110515/1305422129)
- [/trunk/dports/aqua/LyX/Portfile](http://trac.macports.org/browser/trunk/dports/aqua/LyX/Portfile)
    <!-- -[[LyX上で、自作のLaTeX Document Classを使える様に設定した。LaTeXのローカル環境（~/Library/texmf以下とか）に自作「.cls」ファイルを置いた後に「texhash」を実行、自作クラス定義用に「.layout」レイアウト・ファイルを作成してLyX側でそれを参照すればOK。:http://twitter.com/Shigerello]] -->

- [音楽家のためのLaTeX](http://www.geocities.jp/flutecore/LaTeX.html)
    - [若松久仁光のブログ - LyX , LaTeX](http://www.geocities.jp/flutecore/Weblog/archives/cat_lyxlatex.html)
    - [LyX2.0.4　TeXファイルインポート成功](http://www.geocities.jp/flutecore/Weblog/archives/2012/10/entry_138.html)
    - [LyX2.0.4で書きました　音楽家の為のLaTeX](http://www.geocities.jp/flutecore/Weblog/archives/2012/10/entry_137.html)
    - [LyX2.0.4の欠点 つづき](http://www.geocities.jp/flutecore/Weblog/archives/2012/10/entry_135.html)
    - [LyX2.0.4の設定について](http://www.geocities.jp/flutecore/Weblog/archives/2012/09/entry_136.html)
    - [LyX2.0.4はやはり便利？](http://www.geocities.jp/flutecore/Weblog/archives/2012/09/entry_134.html)
    - [LyX2.0を使おう！#20 TeXWorks, TeXShop](http://www.geocities.jp/flutecore/Weblog/archives/2011/10/entry_102.html)
    - [LyX2.0を使おう！#19](http://www.geocities.jp/flutecore/Weblog/archives/2011/09/entry_99.html)
    - [LyX2.0を使おう！#18 vs TeXmaker](http://www.geocities.jp/flutecore/Weblog/archives/2011/09/entry_98.html)
    - [LyX2.0を使おう!#17 vs TeXWorks](http://www.geocities.jp/flutecore/Weblog/archives/2011/09/entry_94.html)
    - [LyX2.0を使おう!#16 vs TeXWorks](http://www.geocities.jp/flutecore/Weblog/archives/2011/09/entry_93.html)
    - [LyX2.0を使おう! #15](http://www.geocities.jp/flutecore/Weblog/archives/2011/09/entry_92.html)
        - カーソルキーによるカーソル移動をなるべく避けたいのですが TeXコードなどのショートカットが本来のキーバインドで機能する方法はありますか？
        - カーソルキーによるカーソル移動をなるべく避けるにはキーバインドを mac.bind ではなく emacs.bind にすれば良いと言う事でしょうか？

***

Windows 版の LyX ではデフォルトでは cua.bind が設定されています．<br>
カーソルキーによるカーソル移動を避けたいのであれば emacs.bind や xemacs.bind を使用するかまたは [Emacs](/Emacs/) や [Vim](/Vim/) を使うことをおすすめします．<br>
上下左右のカーソル移動に関しては Emacs よりも Vim のほうが効率的なキーバインドです．<br>
cua.bind の TeXコードのショートカットは C-l で ert-insert という関数です．<br>
emacs.bind には TeXコードのショートカットは何も割り当てられていませんでした．<br>
emacs.bind や xemacs.bind には C-l に screen-recenter という関数が割り当てられているので C-l を TeXコードのショートカットに割り当てるには screen-recenter のショートカットを削除するか別のショートカットに割り当てる必要があります．<br>

***

- [LyX2.0を使おう!#14 vs Emacs02](http://www.geocities.jp/flutecore/Weblog/archives/2011/08/entry_91.html)
    - TeXコマンドを呼び出すためのショートカットは TeXコードを挿入\[Ctrl+L\] の他にどんな物がありますか？

***

他はとくにないと思います．<br>
LyX は WYSIWYM で TeX のコードが書けることを目標にしているようなので TeX コードを直接入力することを支援するための機能は実装しないと思います．<br>
TeXコードを直接入力したり，LaTeXプリアンブルを使用したりするのは現在の LyX がサポートしている機能だけではどうしても実現できないこと (日本語のしおりを作成するなど) を TeX で実現するために使用する場合で基本的にはあまり使用は推奨されていないと思います．<br>

***

- ショートカットは自分で作るにはどのようにしたら良いのでしょう？

***

Windows 版の LyX では \[ツール(T)\]-\[設定(P)...\]-\[編集\]-\[短絡キー\] でショートカットの設定ができます．<br>
ただし項目名が関数になっているのでどの機能に対応しているのか分かりにくいかもしれません．<br>

***

- [LyX2.0を使おう！#13 vsEmacs](http://www.geocities.jp/flutecore/Weblog/archives/2011/08/entry_90.html)
    - どのように設定したらショートカットを使って箇条書きモードから抜け出る事が出来ますか？

***

Windows 版の LyX では Alt+Return で箇条書きモードから抜け出ることが可能です．<br>
\[ツール(T)\]-\[設定(P)...\]-\[編集\]-\[短絡キー\] の カーソル関数・マウス関数・編集関数の break-paragraph inverse に Alt+Return が設定されています．<br>

***

- [LyX2.0を使おう！#12　　vs Ulysses2.0](http://www.geocities.jp/flutecore/Weblog/archives/2011/08/entry_89.html)
    - [LyX2.0を使おう！#11 外国語入力](http://www.geocities.jp/flutecore/Weblog/archives/2011/08/entry_88.html)
    - [LyX2.0を使おう！　#10](http://www.geocities.jp/flutecore/Weblog/archives/2011/08/entry_87.html)
    - [LyX2.0を使おう！　#9 vs emacs](http://www.geocities.jp/flutecore/Weblog/archives/2011/08/entry_86.html)
    - [LyX2.0を使おう！　#8](http://www.geocities.jp/flutecore/Weblog/archives/2011/08/entry_85.html)
        - LyX で再変換が出来ない

***

LyX では再変換機能はおそらく実装されていません．<br>
ただし LyX はオープンソースなのでプログラムが書ければ自力で実装することは可能です．<br>

- [入力済み文字列の再変換](http://mspace.sakuraweb.com/comp/prog/reconv.html)
- [日本語の再変換 - Apache OpenOffice Wiki](http://wiki.services.openoffice.org/wiki/JA/translation/Japanese_Reconversion)

***

- [LyX2.0を使おう #7](http://www.geocities.jp/flutecore/Weblog/archives/2011/08/entry_79.html)
    - [LyX2.0 #6 LyXからxtml出力](http://www.geocities.jp/flutecore/Weblog/archives/2011/08/entry_78.html)
    - [LyX2.0 #5 LyXを使おう](http://www.geocities.jp/flutecore/Weblog/archives/2011/08/entry_77.html)
        - 小小節のその下の分岐はないのでしょうか？

***

小小節 (\subsubsection{}) の下には

- 段落 (\paragraph{})
- 小段落 (\subparagraph{})

があります．<br>
ただし，安易に分岐を増やすと読みにくい文章になってしまうので，分岐を増やす前に構成を考え直した方がいいかもしれません．<br>
このことは文章だけでなく，プログラムを書く場合にも適用できます．<br>

***

- [LyX2.0 #4 覚書02](http://www.geocities.jp/flutecore/Weblog/archives/2011/07/entry_69.html)
    - [LyX2.0 #3　覚書01](http://www.geocities.jp/flutecore/Weblog/archives/2011/07/entry_68.html)
    - [LyX MacSbowLeopardで使う#2](http://www.geocities.jp/flutecore/Weblog/archives/2011/07/entry_66.html)
    - [LyXをマックOSXで使う](http://www.geocities.jp/flutecore/Weblog/archives/2011/07/entry_65.html)
    - [LyX2　つづき](http://www.geocities.jp/flutecore/Weblog/archives/2011/07/entry_59.html)
    - [LyX2.0が使えた](http://www.geocities.jp/flutecore/Weblog/archives/2011/07/entry_58.html)
