---
title: "Mac"
url: "/Mac/"
date: 2014-10-20T17:26:06Z
pukiwiki: "Mac"
---

# Mac

## [OS X](http://www.apple.com/jp/osx/) (Mac) での TeX の利用 {#ed089b3d}

***

***

## TeX ディストリビューション {#texlive}

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

## [統合環境・エディタ](</TeX用エディタ/>) {#i31113c1}

LaTeX での文書作成を支援するための統合環境・エディタが開発されています。
初心者の方はまずは LaTeX 用の統合環境を使用して LaTeX に慣れるのが良いでしょう。
エディタ・マクロ・プラグインの種類によって得手不得手があったり不具合が発生したりする場合があります。
問題が発生した場合は別のエディタを使用してください。
人によってエディタの好みは様々なので自分にあったエディタを見つけてください。 <!-- 見つからない人は自作してみるのもいいかもしれません。 -->

- [Wikipedia:Comparison_of_TeX_editors](https://www.wikipedia.org/wiki/Comparison_of_TeX_editors)
- [LaTeX Editors/IDEs](http://tex.stackexchange.com/questions/339/latex-editors-ides)

にも OS X で使用可能な LaTeX 用の統合環境・エディタが紹介されています。

### フリーソフトウェア (オープンソースソフトウェア) {#i48e82f9}

LyX, TeXstudio, Texmaker, TeXworks, TexitEasy 等の Qt アプリケーションでバックスラッシュが入力できない場合は Karabiner で Backslash が優先されるようにキーバインドを変更してください。

#### OS X, Windows, Linux {#k3982a05}

- [LyX](/LyX/)
    - 【注意】OS X では Qt のバグのためバックスラッシュ（半角の＼）が入力できません。(→ [LyX の不具合](/LyX/#h17851b4))
    - Karabiner で Backslash が優先されるようにキーバインドを変更します。
- [TeXstudio](/TeXstudio/)
    - 【注意】組み込みの PDF ビューアで日本語が表示されない場合は poppler-data を /usr/local/share/poppler に配置してください。(→ [TeXstudio#組み込みの PDF ビューアに日本語を表示させる](/TeXstudio/#o84f3d5c))
    - 【注意】OS X では Qt のバグのためバックスラッシュ（半角の＼）が入力できません。(→ [TeXstudio の不具合](/TeXstudio/#k30ccccc))
    - Karabiner で Backslash が優先されるようにキーバインドを変更します。
- [Texmaker](/Texmaker/)
    - 【注意】組み込みの PDF ビューアで日本語が表示されない場合は poppler-data を /Users/pascalbrachet/poppler64/share/poppler に配置してください。(→ [Texmaker#組み込みの PDF ビューアに日本語を表示させる](/Texmaker/#a258817b))
    - 【注意】OS X では Qt のバグのためバックスラッシュ（半角の＼）が入力できません。(→ [Texmaker の不具合](/Texmaker/#h6093782))
    - Karabiner で Backslash が優先されるようにキーバインドを変更します。
- [TeXworks](/TeXworks/)
    - 【注意】OS X で公式ビルドの TeXworks 0.4.5 を使用すると TeXworks のプレビューが日本語表示できないので [TeXworks-0.4.6-Yosemite+-ja_JP](http://junk.greencherry.jp/macosx/texworks/) を使用してください。
    - 【注意】OS X では Qt のバグのためバックスラッシュ（半角の＼）が入力できません。(→ [TeXworks の不具合](/TeXworks/#v0f00822))
    - Karabiner で Backslash が優先されるようにキーバインドを変更します。
- TexitEasy
    - 【注意】組み込みの PDF ビューアで日本語が表示されない場合は poppler-data を /usr/local/share/poppler に配置してください。(→ TexitEasy#組み込みの PDF ビューアに日本語を表示させる)
    - 【注意】OS X では Qt のバグのためバックスラッシュ（半角の＼）が入力できません。(→ TexitEasy の不具合)
    - Karabiner で Backslash が優先されるようにキーバインドを変更します。
- [Eclipse](/Eclipse/)
    - [TeXlipse](/TeXlipse/)
- [Emacs](/Emacs/)
    - [Org mode](</Emacs/Org mode/>) + [YASnippet](/YASnippet/)
    - [TeX mode](</Emacs/TeX mode/>) + [YASnippet](/YASnippet/)
    - [AUCTeX](/AUCTeX/)
    - [YaTeX](/YaTeX/)
- [Vim](/Vim/)
    - [tex.vim](/Vim/tex.vim/) + (vimtex or LaTeX Box) + [quickrun](/quickrun/) + [neocomplete &amp; neosnippet](/neocomplete/)
    - [Vim-LaTeX](/Vim-LaTeX/)
    - ATP
- [Atom](/Atom/)
- [Brackets](/Brackets/)
- [Light Table](</Light Table/>)
- [gedit](/gedit/)
- [Geany](/Geany/)

#### OS X {#be65e2ea}

- [TeXShop](/TeXShop/)
- TeXnicle
- [CotEditor](/CotEditor/)

## PDF ファイルビューア {#o2a6bd23}

### フリーソフトウェア (オープンソースソフトウェア) {#id509eef}

- [TeXstudio](/TeXstudio/), [Texmaker](/Texmaker/), [TeXworks](/TeXworks/), TexitEasy, [TeXShop](/TeXShop/), TeXnicle などは PDF ファイルビューアを内蔵しています。
- [Skim](/Skim/)
- [MuPDF](/MuPDF/)
- [Poppler](/Poppler/) PDF のレンダリングライブラリ。TeXstudio, Texmaker, TeXworks, TexitEasy などで使われています。
- [Mozilla Firefox (PDF.js)](</Mozilla Firefox/#pdfjs>)
- [Chrome/Chromium PDF Viewer (PDFium)](</Google Chrome/#chromepdfviewer>)

## [BibTeX 関連](</BibTeX関連ツール/>) {#eb95c992}

- MacWiki:リスト/TeX#BibTeX 関係

### フリーソフトウェア (オープンソースソフトウェア) {#xe20f87e}

- [Zotero](https://www.zotero.org/)
- [JabRef](http://jabref.sourceforge.net/)
- [QRef](http://members3.jcom.home.ne.jp/qref/)
- [BibDesk](http://bibdesk.sourceforge.net/)

## スペルチェッカー {#rdf73ba8}

- MacWiki:スペルチェック
- [cocoAspell](http://cocoaspell.leuski.net/)
- [Excalibur](http://excalibur.sourceforge.net/)

## 関連リンク {#oeb112b9}

- [Mac TeX Toolbox](http://sourceforge.net/projects/mactextoolbox/)
- [http://qiita.com/tags/mactex](http://qiita.com/tags/mactex)
- [Newest &#39;osx&#39; Questions - TeX - LaTeX Stack Exchange](http://tex.stackexchange.com/questions/tagged/osx)
- [The MacOSX-TeX Archives](http://email.esm.psu.edu/pipermail/macosx-tex/)
- [MacOSX-TeX | Mailing List Archive](http://macosx-tex.576846.n2.nabble.com/)
- MacWiki:リスト/TeX
- [MacTeXにおける実行ファイルの場所](http://d.hatena.ne.jp/seinzumtode/20141001/1412154972)
- [BlueSkyTex](http://blueskytex.com/)

[^1]: 以前は [小川版 Drag &amp; Drop UpTeX](http://www2.kumagaku.ac.jp/teacher/herogw/) という teTeX-3.0 ベース（TeX Live ベースではありません）のパッケージがよく用いられていましたが，teTeX/pteTeX の開発終了に伴い現在は TeX Live が主流です。
