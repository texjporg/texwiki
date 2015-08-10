---
title: "Mac"
url: "/Mac/"
date: 2014-10-20T17:26:06Z
pukiwiki: "Mac"
---

# Mac

## [OS X](http://www.apple.com/jp/osx/) (Mac) での TeX の利用 {#headline}

OS X (Mac) に TeX をインストールして使えるようになるまでの大まかな流れとしては，[TeX 入手法](</TeX入手法/>)で簡単に述べたとおり

1. TeX の処理系（“TeX ディストリビューション”）のインストールと設定
1. 統合環境またはエディタ，PDF ビューアなどの周辺ツールのインストールと設定

が必要です。

***

***

## TeX ディストリビューション {#distribution}

TeX 及び関連ソフトウェアをまとめたものを TeX ディストリビューションといいます。
OS X 上で日本語が利用可能な TeX ディストリビューションは [TeX Live](</TeX Live/>) です[^1]。

奥村先生の[［改訂第6版］LaTeX2e美文書作成入門](http://oku.edu.mie-u.ac.jp/~okumura/bibun6/)には TeX Live 2013 が収録されています。

TeX Live のインストールに関しては

- [http://www.tug.org/texlive/quickinstall.html](http://www.tug.org/texlive/quickinstall.html)
- [http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation](http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#installation)

も参照してください。

この TeX Live をベースにした以下のディストリビューションが人気です。

### [MacTeX](http://tug.org/mactex/) {#mactex}

MacTeX は TeX Live をベースにした OS X 専用の TeX ディストリビューションです。
TeX Live をフルインストールするなら MacTeX が便利です。
TeX Live 本体に加え，統合環境 [TeXShop](/TeXShop/), [LaTeXiT](/LaTeXiT/) や [Ghostscript](/Ghostscript/) もインストールされます。
詳細は [MacTeX](</TeX Live/Mac/#mactex>) を参照してください。

### [BasicTeX](http://tug.org/mactex/morepackages.html) {#basictex}

BasicTeX は TeX Live のサブセットで，OS X 専用の TeX ディストリビューションです。
TeX Live をフルインストールしたくない場合は，この BasicTeX をインストールします。
詳細は [BasicTeX](</TeX Live/Mac/#basictex>) を参照してください。

## 統合環境やエディタのインストール {#editor}

LaTeX での文書作成を支援するための統合環境・エディタが各種開発されています。
これらは，LaTeX のソース中に書かれた特別な命令を色付けしてくれたり，LaTeX によるタイプセットをボタンやショートカットキー一つで実行してくれたりと，便利なものです。
初心者の方はまずは LaTeX 用の統合環境を使用して LaTeX に慣れるのが良いでしょう。

エディタ・マクロ・プラグインの種類によって得手不得手があったり不具合が発生したりする場合があります。
問題が発生した場合は別のエディタを使用してください。
人によってエディタの好みは様々なので自分にあったエディタを見つけてください。 <!-- 見つからない人は自作してみるのもいいかもしれません。 -->

このほかにも

- [TeX Wiki 内の「TeX 用エディタ」紹介ページ](</TeX用エディタ/>)
- [Wikipedia:Comparison_of_TeX_editors](https://www.wikipedia.org/wiki/Comparison_of_TeX_editors)
- [LaTeX Editors/IDEs](http://tex.stackexchange.com/questions/339/latex-editors-ides)

には，OS X で使用可能な LaTeX 用の統合環境・エディタが紹介されています。

### フリーソフトウェア（オープンソースソフトウェア） {#editor-free}

LyX, TeXstudio, Texmaker, TeXworks, TexitEasy 等の Qt アプリケーションでは，Qt のバグのせいでバックスラッシュが入力できないようです．
この場合は，Karabiner で Backslash が優先されるようにキーバインドを変更してください。

<!-- ここに並べる統合環境は -->
<!-- 1. TeX ディストリビューションにバンドルされているもの (TeXworks, TeXShop) -->
<!-- 2. そうではないが，広く使われていて TeX Wiki にも情報が充実しているもの -->
<!-- の順のつもり．従来の「アルファベット順」は無意味なので変更． -->

- 統合環境（TeX, LaTeX に特化した機能を備えています）
    - <strong>[TeXShop](/TeXShop/)</strong> ← MacTeX に標準で付属しています。
        - OS X 用の TeX 統合環境ならこれといっても過言ではないほど評判が良いようです。
    - <strong>[TeXstudio](/TeXstudio/)</strong>
        - 【注意】組み込みの PDF ビューアで日本語が表示されない場合は poppler-data を /usr/local/share/poppler に配置してください。(→ [TeXstudio#組み込みの PDF ビューアに日本語を表示させる](/TeXstudio/#o84f3d5c))
    - <strong>[LyX](/LyX/)</strong>
    - <strong>[TeXworks](/TeXworks/)</strong>
        - 【注意】OS X で公式ビルドの TeXworks 0.4.5 を使用すると TeXworks のプレビューが日本語表示できないので [TeXworks-0.4.6-Yosemite+-ja_JP](http://junk.greencherry.jp/macosx/texworks/) を使用してください。
    - [Texmaker](/Texmaker/)
        - 【注意】組み込みの PDF ビューアで日本語が表示されない場合は poppler-data を /Users/pascalbrachet/poppler64/share/poppler に配置してください。(→ [Texmaker#組み込みの PDF ビューアに日本語を表示させる](/Texmaker/#a258817b))
    - TexitEasy
        - 【注意】組み込みの PDF ビューアで日本語が表示されない場合は poppler-data を /usr/local/share/poppler に配置してください。(→ TexitEasy#組み込みの PDF ビューアに日本語を表示させる)
    - TeXnicle

- 汎用エディタ（TeX, LaTeX 用のモードが用意されているものがあります）
    - [Emacs](/Emacs/)
        - [YaTeX](/YaTeX/)（野鳥）
        - [AUCTeX](/AUCTeX/)
        - [Org mode](</Emacs/Org mode/>) + [YASnippet](/YASnippet/)
        - [TeX mode](</Emacs/TeX mode/>) + [YASnippet](/YASnippet/)
    - [Vim](/Vim/)
        - [Vim-LaTeX](/Vim-LaTeX/)
        - [tex.vim](/Vim/tex.vim/) + (vimtex or LaTeX Box) + [quickrun](/quickrun/) + [neocomplete &amp; neosnippet](/neocomplete/)
        - ATP
    - [gedit](/gedit/)
    - [Atom](/Atom/)
    - [Geany](/Geany/)
    - [Eclipse](/Eclipse/)
        - [TeXlipse](/TeXlipse/)
    - [CotEditor](/CotEditor/)

## PDF ファイルビューア {#pdfviewer}

長らく LaTeX ファイルの編集は，dvi によるプレビューがもちいられてきました．
ただ，最近は様々な理由から PDF によるプレビューが推奨されています．（[古い情報](</古い情報/>)も参考に．）
TeXShop, TeXworks, TeXstudio などの統合環境には PDF 用のビューアが組み込まれています．
単独の LaTeX 用 PDF プレビューアとしては

- <strong>[Skim](/Skim/)</strong>：軽量な LaTeX 用の PDF ビューアとして最適で，特にお勧めします．
- [MuPDF](/MuPDF/)：軽量な PDF/XPS ビューア．
- [Poppler](/Poppler/)：PDF のレンダリングライブラリ．TeXworks, TeXstudio, Texmaker, TexitEasy などで使われています．

などがあります．

## 周辺ツールの利用 {#tools}

### 文献管理ツール {#bibtex}

オープンソースの文献管理ツールとして，以下を挙げておきます。

- [Zotero](https://www.zotero.org/)
- [JabRef](http://jabref.sourceforge.net/)
- [QRef](http://members3.jcom.home.ne.jp/qref/)
- [BibDesk](http://bibdesk.sourceforge.net/)

このほかにも

- [TeX Wiki 内の「BibTeX 関連ツール」紹介ページ](</BibTeX関連ツール/>)
- MacWiki:リスト/TeX#BibTeX 関係

には，OS X で使用可能な文献管理ツールが紹介されています。

### スペルチェッカー {#spell}

- [cocoAspell](http://cocoaspell.leuski.net/)
- [Excalibur](http://excalibur.sourceforge.net/)

このほかにも

- MacWiki:スペルチェック

には，OS X で使用可能なスペルチェッカーが紹介されています。

## JIS キーボードでバックスラッシュ \ ではなく円記号 ¥ が入力される場合 {#me741d27}

OS X で日本語 JIS キーボードを利用している場合，設定によっては Backslash (U+005C) を入力しているつもりが 円記号 (U+00A5) になる場合があります。
いくつかの対処法を紹介します。

- [テキスト編集のキー操作を自在にコントロールする - ザリガニが見ていた…。](http://d.hatena.ne.jp/zariganitosh/20101026/text_key_binding)
- [Macにおけるバックスラッシュ（\）の入力方法](http://qiita.com/miyohide/items/6cb8967282d4b2db0f61)
- [【Yosemite】U.S.キーでバックスラッシュの入力が円記号になってしまう時の対処法](http://ringo-with.com/archives/2668)
- 参考：[(1)](https://twitter.com/doraTeX/status/630575968025849856), [(2)](https://twitter.com/doraTeX/status/630576724271435776)

### Karabiner によるキーバインドの変更 {#c25b5c16}

OS X 用の汎用的なキーボードカスタマイズツール Karabiner で，¥ を入力すると \ に変換することができます。

### OS X の日本語入力（旧ことえり）によるキーバインドの変更 {#w93e863d}

JIS キーボードの ¥ キーで入力する文字を \ に変更する設定が可能です。

- 「日本語」の場合

> [![](/attach/Mac/MacJP-bs.png)](/attach/Mac/MacJP-bs.png)

- 「ことえり」の場合

> [![](/attach/Mac/Kotoeri-bs.png)](/attach/Mac/Kotoeri-bs.png)

### Google 日本語入力によるキーバインドの変更 {#xb16c060}

こちらも JIS キーボードの ¥ キーで入力する文字を \ に変更する設定が可能です。

> [![](/attach/Mac/Google-bs.png)](/attach/Mac/Google-bs.png)

### ATOK を利用している場合 {#s23c1714}

日本語入力に ATOK を利用している場合は，最新 2015 でも JIS キーボードの ¥ キーで入力する文字を \ に変更する設定画面がありません。

```
~/Library/KeyBindings/DefaultKeyBinding.dict
```

に次の4行を記したファイルを配置し，再ログインすれば \ と ¥ が逆転します。すなわち，¥ キーで \ が，Option+¥ で ¥ が入力されるようになります。

```
{
  "¥" = ("insertText:", "\\");
  "~¥" = ("insertText:", "¥");
}
```

なお，デフォルトでは

```
~/Library/KeyBindings
```

というディレクトリは存在しませんので，次のようにして作成してください。

1. オプションキーを押しながら Finder の「移動」をクリックする。
1. 「ライブラリ」をクリックすると，~/Library が開かれる。
1. Finder で新規フォルダを作成し，KeyBindings と名付ける。
1. その中に DefaultKeyBinding.dict という名前のテキストファイルを作成し，上記内容を記載する。
1. 一旦ログアウトして，再ログインすると，\ と ¥ の入れ替えが有効になる。

### 統合環境による対症療法 {#k7ca107f}

いくつかの OS X 用統合環境は，この問題に対処する方法を用意しています。

- [TeXShop](</TeXShop FAQ/#y43ef465>) や [LaTeXiT](/LaTeXiT/#pd5cb643) ではキーマップの設定が可能ですので，ここで ¥ キーを \ に変換できます。
- [TeX2img](</TeX2img FAQ/#a8b7895d>) にはメニューに「編集＞入力された ¥ を \ に置換」という項目があり，ここで ¥ キーを \ に変換できます。

## 関連リンク {#links}

- [Mac TeX Toolbox](http://sourceforge.net/projects/mactextoolbox/)
- [http://qiita.com/tags/mactex](http://qiita.com/tags/mactex)
- [Newest &#39;osx&#39; Questions - TeX - LaTeX Stack Exchange](http://tex.stackexchange.com/questions/tagged/osx)
- [The MacOSX-TeX Archives](http://email.esm.psu.edu/pipermail/macosx-tex/)
- [MacOSX-TeX | Mailing List Archive](http://macosx-tex.576846.n2.nabble.com/)
- MacWiki:リスト/TeX
- [MacTeXにおける実行ファイルの場所](http://d.hatena.ne.jp/seinzumtode/20141001/1412154972)
- [BlueSkyTex](http://blueskytex.com/)

[^1]: 以前は [小川版 Drag &amp; Drop UpTeX](http://www2.kumagaku.ac.jp/teacher/herogw/) という teTeX-3.0 ベース（TeX Live ベースではありません）のパッケージがよく用いられていましたが，teTeX/pteTeX の開発終了に伴い現在は TeX Live が主流です。
