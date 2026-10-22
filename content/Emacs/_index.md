---
title: "Emacs"
url: "/Emacs/"
date: 2013-04-04T03:55:54Z
bookCollapseSection: true
pukiwiki: "Emacs"
---

# Emacs

## [Emacs](https://www.gnu.org/software/emacs/) {#lc308d9d}

[Emacs](https://ja.wikipedia.org/wiki/Emacs) は高い拡張性を持ったテキストエディタです．
[Emacs Lisp](https://ja.wikipedia.org/wiki/Emacs_Lisp) と呼ばれる [Lisp](/Lisp/) 方言の一つで多くの部分が実装されており，これを用いてカスタマイズ・拡張が可能です．

***

***

## GNU Emacs {#e77c7c99}

- [GNU Emacs - GNU Project](https://www.gnu.org/software/emacs/)

### リリース情報 {#z96ff3b2}

GNU Emacs 31.1 (2026-08-24) で [Unicode 17.0](https://www.unicode.org/versions/Unicode17.0.0/) (2025-09-09) に対応しました。

- [GNU Emacs - Releases](http://www.gnu.org/software/emacs/#Releases)
- [https://cgit.git.savannah.gnu.org/cgit/emacs.git/refs/tags](https://cgit.git.savannah.gnu.org/cgit/emacs.git/refs/tags)
- [https://www.gnu.org/software/emacs/news/NEWS.31.1](https://www.gnu.org/software/emacs/news/NEWS.31.1)
- [「GNU Emacs 31.1」が公開 ～ターミナルでのマウス操作が既定で有効に、新規ユーザー向けプリセットも](https://forest.watch.impress.co.jp/docs/news/2135207.html)
- [「GNU Emacs 31.1」リリース ─ Tree-sitter文法の自動インストールに対応](https://thinkit.co.jp/news/39489)

### 動作環境 {#tabe669d}

GNU, GNU/Linux, FreeBSD, NetBSD, OpenBSD, Haiku, macOS, MS Windows, Android, Solaris, MS-DOS/FreeDOS などの OS で動作します．

- [GNU Emacs download - GNU Project](https://www.gnu.org/software/emacs/download.html)

### License {#u2ed578f}

GNU Emacs はフリーソフトウェアです．
[GPLv3](https://git.savannah.gnu.org/cgit/emacs.git/tree/COPYING) ([日本語訳](https://licenses.opensource.jp/GPL-3.0/GPL-3.0.html)) ([Welcome to GPLv3](https://gplv3.fsf.org/)) でリリースされています．

### ダウンロード {#m56139cf}

- [GNU Emacs download - GNU Project](https://www.gnu.org/software/emacs/download.html)

### OSごとのバイナリ {#n86b811e}

#### Windows {#k091604e}

- [https://ftp.gnu.org/pub/gnu/emacs/windows/emacs-31/](https://ftp.gnu.org/pub/gnu/emacs/windows/emacs-31/)
    - MELPAで[tr-ime](https://github.com/trueroad/tr-emacs-ime-module)をインストール・設定すると従来のIMEパッチ版とほぼ同じ使い方ができます
- [emacs-w32 on Cygwinについて](http://tanehp.ec-net.jp/heppoko-lab/prog/zakki/emacs/emacs.html#emacs-w32%20on%20Cygwin%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)
- [Emacs Modified for Windows](https://emacs-modified.gitlab.io/windows/)
- [https://packages.msys2.org/search?t=binpkg&q=emacs](https://packages.msys2.org/search?t=binpkg&q=emacs)
    - [https://packages.msys2.org/package/mingw-w64-ucrt-x86_64-emacs](https://packages.msys2.org/package/mingw-w64-ucrt-x86_64-emacs)
    - [https://packages.msys2.org/packages/mingw-w64-clang-x86_64-emacs](https://packages.msys2.org/packages/mingw-w64-clang-x86_64-emacs)
    - [https://packages.msys2.org/packages/mingw-w64-clang-aarch64-emacs](https://packages.msys2.org/packages/mingw-w64-clang-aarch64-emacs)

#### macOS {#v2ece0ad}

- [An enhanced inline patch for GNU Emacs](https://github.com/takaxp/ns-inline-patch#test-pre-built-distribution-package)
- [GNU Emacs For Mac OS X](https://emacsformacosx.com/)
- [Emacs Modified for macOS](https://emacs-modified.gitlab.io/macos/)
- [Emacs Mac Port](https://github.com/railwaycat/homebrew-emacsmacport)

### [EmacsWiki](https://www.emacswiki.org/) {#mde20549}

- [CategoryWThirtyTwo](https://www.emacswiki.org/emacs/CategoryWThirtyTwo)
- [EmacsForMacOS](https://www.emacswiki.org/emacs/EmacsForMacOS)

<!-- ↓http://yohshiy.blog.fc2.com/blog-entry-295.html によると新しい Emacs では menu-tree が使えないらしいです -->
<!-- **メニューの日本語化 [#q01dd8c4] -->
<!-- -[[menu-tree.elのぺえじ:http://www11.atwiki.jp/s-irie/pages/13.html]] -->

### 拡張パッケージの入手 {#o0e71869}

[MELPA](https://melpa.org/) から Emacs の拡張パッケージの更新情報が集められます．

使い方は，[Getting Started](https://melpa.org/#/getting-started) に書いてある設定をして M-x package-list-packages を実行するだけです．
あとは，インストールしたいパッケージを i で選択して，x でインストールします．
インストール済みパッケージの更新も，U, x とするだけでできます．

## Emacs で LaTeX {#p527fec0}

- [EmacsWiki: Category Tex](https://www.emacswiki.org/emacs/CategoryTex)
- [Org mode](</Emacs/Org mode/>)：Org mode is for keeping notes, maintaining TODO lists, planning projects, and authoring documents with a fast and effective plain-text system.
- [TeX mode](</Emacs/TeX mode/>)：Emacs 標準の TeX mode
- [YASnippet](/YASnippet/)：スニペットプラグイン
- [magic-latex-buffer.el](https://github.com/zk-phi/magic-latex-buffer)：magical syntax highlighting for LaTeX-mode buffers.
- [AUCTeX](/AUCTeX/)：GNU Emacs で TeX ファイルを編集するための拡張パッケージ
- [YaTeX](/YaTeX/)：Yet Another TeX mode for Emacs．YaTeX (野鳥) は，Emacs の TeX 入力支援環境です．
- [LaTeX Labeler - Simplify equation labeling in LaTeX](https://github.com/X9hRRDys/latex-labeler)
    - [LaTeXの数式ラベル管理を楽にするEmacsパッケージ、LaTeX Labelerの紹介](https://zenn.dev/mpotarch/articles/9a02e212525073)
- [latex-math-preview.el](https://gitlab.com/latex-math-preview/latex-math-preview)：TeX ファイル中の数式を Emacs でプレビューするための Emacs Lisp
    - [https://transitive.info/software/latex-math-preview/](https://transitive.info/software/latex-math-preview/)
    - [EmacsWiki:LaTeXMathPreview](https://www.emacswiki.org/emacs/LaTeXMathPreview)
    - [QA: YaTeXで数式のpreview](https://okumuralab.org/tex/mod/forum/discuss.php?d=349)
- [sumatra-forward.el](http://william.famille-blum.org/blog/static.php?page=static081010-000413)：(X)Emacs frontend to forward search with SumatraPDF
- [RefTeX](https://www.emacswiki.org/emacs/RefTeX)：support for labels, references, citations and indices
- [BibTeX](https://www.emacswiki.org/emacs/BibTeX)：bibliography in LaTeX, editing style files
- [latex_editor](https://sourceforge.net/projects/editorlatex/)：emacs + auctex, vim + latex suite enviroment for windows.
- [emacs, mozc, TeX 入力](https://okumuralab.org/tex/mod/forum/discuss.php?d=1319)
- [Emacsでpdfを読む (pdf-tools) (2019.07.17追記)](https://taipapamotohus.com/post/pdf-tools/)
- [emacs内でTeX文書の作成からpdf閲覧まで行う](https://ubutun.blogspot.jp/2014/05/emacstexpdf.html)
- [emacsでpdfファイルを閲覧する](http://d.hatena.ne.jp/daharu/20111126/1322272094)
- [M-x align で TeX の表を整列できるようにする](http://d.hatena.ne.jp/supermassiveblackhole/20110223/1298443861)
- [pdf-tools](https://github.com/vedang/pdf-tools)
- [emacs-jp/migemo · GitHub](https://github.com/emacs-jp/migemo)
- [GNU EmacsでLaTeX文書を書く話](https://zenn.dev/maswag/books/latex-on-emacs)

### [DocView](http://git.savannah.gnu.org/cgit/emacs.git/tree/lisp/doc-view.el) <a id="docview"></a> {#s0614314}

DocView を使用すると Emacs で PDF/PS/DVI ファイルを表示することができます．

- [Document View - GNU Emacs Manual](http://www.gnu.org/software/emacs/manual/html_node/emacs/Document-View.html)

<table>
<tbody>
<tr><th style="color:#FFF;background-color:#36A;text-align:center">メニュー [DocView]</th><th style="color:#FFF;background-color:#36A;text-align:center">キーバインド</th><th style="color:#FFF;background-color:#36A;text-align:center">機能</th></tr>
<tr><td>Toggle display</td><td>C-c C-c</td><td>表示の切り替え</td></tr>
<tr><td>Search</td><td>C-s</td><td>検索</td></tr>
<tr><td>Search Backwards</td><td>C-r</td><td>逆順検索</td></tr>
</tbody>
</table>

## SumatraPDF との連携 {#haedf247}

### forward search {#i028a48f}

- [TeX mode#Windows](</Emacs/TeX mode/#m2df1dd4>)
- [AUCTeX#インストール#Windows#設定](/AUCTeX/#g637a7d7)
- [YaTeX#インストール#Windows#設定](/YaTeX/#edc51324), [YaTeX#SumatraPDF との連携 (forward search)](/YaTeX/#ra95ecfb)

を参照してください．

### inverse search {#a06810d6}

- [Emacs Server - GNU Emacs Manual](http://www.gnu.org/software/emacs/manual/html_node/emacs/Emacs-Server.html#Emacs-Server)、[Emacs Server (GNU Emacs Manual (Japanese Translation))](https://ayatakesi.github.io/emacs/29.4/html/Emacs-Server.html#Emacs-Server)
- [emacsclient Options - GNU Emacs Manual](http://www.gnu.org/software/emacs/manual/html_node/emacs/emacsclient-Options.html)、[emacsclient Options (GNU Emacs Manual (Japanese Translation))](https://ayatakesi.github.io/emacs/29.4/html/emacsclient-Options.html)

```
M-x server-start もしくは ~/.emacs.d/init.el に (server-start) を記述しておきます
```

inverse search は SumatraPDF の \[☰\] &gt; \[設定(S)\] &gt; \[オプション(O)...\] の逆順検索コマンドラインの設定に

```
"C:\Program Files\Emacs\emacs-30.1\bin\emacsclientw.exe" --no-wait +%l "%f"
```

です．

ダブルクリックで対応する TeX 文書の該当箇所にジャンプします．

## Skim との連携 {#de8b4fcd}

### forward search {#s6b956ef}

- [TeX mode#macOS](</Emacs/TeX mode/#g5794e10>)
- [AUCTeX#インストール#macOS#設定](/AUCTeX/#n55816de)
- [YaTeX#インストール#macOS#設定](/YaTeX/#qe563613), [YaTeX#Skim との連携 (forward search)](/YaTeX/#f978a43b)

を参照してください．

### inverse search {#e9c08b3d}

```
M-x server-start もしくは ~/.emacs.d/init.el に (server-start) を記述しておきます
```

[AUCTeX の設定と便利な機能 | Amrta](https://web.archive.org/web/20170722130200/https://skalldan.wordpress.com/2011/07/20/auctex-%e3%81%ae%e8%a8%ad%e5%ae%9a%e3%81%a8%e4%be%bf%e5%88%a9%e3%81%aa%e6%a9%9f%e8%83%bd/) を参照してください．

PDF-TeX 同期サポート:
: &nbsp;

初期値:
: Emacs

コマンド:
: emacsclient

引数:
: --no-wait +%line "%file"

Shift-Command-Click で対応する TeX 文書の該当箇所にジャンプします．

## Okular との連携 {#k7216a91}

### forward search {#maa4da39}

- [TeX mode#Linux](</Emacs/TeX mode/#q1bd16f3>)
- [AUCTeX#Okular との連携 (forward and inverse search)](/AUCTeX/#d95e95ee)
- [YaTeX#Okular との連携 (forward search)](/YaTeX/#o8772291)

を参照してください．

### inverse search {#z0944532}

```
M-x server-start もしくは ~/.emacs.d/init.el に (server-start) を記述しておきます
```

\[設定(<ins>S</ins>)\] &gt; \[Okular を設定(<ins>O</ins>)...\] &gt; \[エディタ\] の項目から Emacs クライアント を選択します．

エディタ:
: Emacs クライアント

コマンド:
: emacsclient -a emacs --no-wait +%l %f

Shift + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## zathura との連携 {#kb46ca7c}

### forward search {#xc3a349c}

- [TeX mode#Linux](</Emacs/TeX mode/#q1bd16f3>)
- [AUCTeX#zathura との連携 (forward and inverse search)](/AUCTeX/#nf2a372b)
- [YaTeX#zathura との連携 (forward and inverse search)](/YaTeX/#j4034f6b)

を参照してください．

### inverse search {#a432be77}

```
M-x server-start もしくは ~/.emacs.d/init.el に (server-start) を記述しておきます
```

- TeX mode の場合
    [TeX mode#Linux](</Emacs/TeX mode/#q1bd16f3>)

- AUCTeX の場合
    [AUCTeX#Linux#設定](/AUCTeX/#p2d711b9)

- YaTeX の場合
    [YaTeX#Linux#設定](/YaTeX/#nec42ee2)

Ctrl + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## qpdfview との連携 {#b9ae3c2f}

### forward search {#te740b85}

- [TeX mode#Linux](</Emacs/TeX mode/#q1bd16f3>)
- [AUCTeX#Linux#設定](/AUCTeX/#p2d711b9)
- [YaTeX#qpdfview との連携 (forward search)](/YaTeX/#ic7abdb4)

を参照してください．

### inverse search {#n709a57e}

```
M-x server-start もしくは ~/.emacs.d/init.el に (server-start) を記述しておきます
```

\[編集(E)\] &gt; \[設定...\] &gt; \[挙動(B)\]

ソースエディタ:
: emacsclient -a emacs --no-wait +%2 "%1"

ダブルクリックで対応する TeX 文書の該当箇所にジャンプします．

## スペルチェック {#d14df590}

[Hunspell](/Hunspell/) を使います．

## 設定に関するリンク {#pd1c5cfc}

- [Emacsに関する新着投稿 - Qiita \[キータ\]](http://qiita.com/tags/Emacs)
- [Emacs Lisp で 変数や関数が定義されているファイルパスを取得するには](http://gongo.hatenablog.com/entry/2013/02/05/232633)
- [eval-after-load設定すべきもの, hookで設定すべきもの](http://d.hatena.ne.jp/syohex/20141004/1412385064)

### Windows {#a1ddfe8b}

- [Windows11 に Emacs や macOS に近いキーバインドを設定する](https://christina04.hatenablog.com/entry/emacs-keybinding-in-windows)
- [Emacs29.1 導入](http://minischna.starfree.jp/Emacs29.1/000emacs29_1.pdf)
- [EmacsとWindowsと人生と](https://qiita.com/sylx/items/46bc993471cd71980aa5)
- [NTEmacs の設定](https://www49.atwiki.jp/ntemacs/pages/1.html)
- [Window版emacs24.4をclangでビルドする](http://blog.livedoor.jp/tek_nishi/archives/8597627.html)
- [Emacs の初期設定](http://tomokop.hatenablog.com/entry/2014/04/25/021053)
- [Windows環境でEmacs+C/Migemoの設定に詰まったのでメモ](http://grugrut.hatenablog.jp/entry/2015/04/emacs-migemo-on-windows)
- [Emacs 24のpackage管理機能を使う](http://keisanbutsuriya.hateblo.jp/entry/2015/01/29/182251)
- [emacs.exe と emacsclient.exe を自動的に使い分ける AutoHotkey のスクリプトを作成した (gnupack 向け)](http://blechmusik.hatenablog.jp/entry/20120721/1342805665)
- [Emacs - SanRin舎](https://tmsanrinsha.net/post/2010/07/emacs-1/)
- [Emacs 23.1登場](http://dev.ariel-networks.com/articles/emacs/part6/)
- [GNU Emacsのinitファイルの置き場所＠Windows7](http://tamatamablog.blog.so-net.ne.jp/2010-02-10)
- \[[ソフトウェア\] NTEmacs 23.2 のインストール・設定](http://d.hatena.ne.jp/itouhiro/20100605)
- \[[ソフトウェア\] NTEmacs 23.1 のインストール・設定](http://d.hatena.ne.jp/itouhiro/20091027)
- [NTEmacs23起動バッチ](http://ameblo.jp/tonjiru2121/entry-10469734020.html)

### macOS {#pa8b5a16}

- [https://okumuralab.org/~okumura/macosx/#emacs](https://okumuralab.org/~okumura/macosx/#emacs)
- [Emacs : 紹介マニア](http://sakito.jp/emacs)
- [Emacs Lisp で 変数や関数が定義されているファイルパスを取得するには](http://gongo.hatenablog.com/entry/2013/02/05/232633)
- [Retina を活かす Emacs へ移行](http://milanista224.blogspot.jp/2012/08/retina-emacs24.html)
- [Cocoa Emacs のフォント設定について](http://d.hatena.ne.jp/setoryohei/20110117/1295336454)
- [CocoaEmacsに環境変数は引き継がれない](http://d.hatena.ne.jp/sugyan/20100704/1278241492)

### Linux {#l2b4bca7}

- [Emacs30.1をUbuntu 22.04(WSL)にインストールする](https://zenn.dev/wurly/articles/221603a0a6472a)

### ChangeLog {#eba94bf5}

- [emacs.git - Emacs source repository](http://git.savannah.gnu.org/cgit/emacs.git)
    - [コミットログ](http://git.savannah.gnu.org/cgit/emacs.git/log/)
    - [ChangeLog](http://git.savannah.gnu.org/cgit/emacs.git/tree/ChangeLog.2)
- [Savannah Git Hosting - emacs.git/summary](http://git.savannah.gnu.org/gitweb/?p=emacs.git)
    - [コミットログ](http://git.savannah.gnu.org/gitweb/?p=emacs.git;a=shortlog)
    - [ChangeLog](http://git.savannah.gnu.org/gitweb/?p=emacs.git;a=blob;f=ChangeLog.2;hb=HEAD)

## 使い方 {#e776cf5f}

- [emacs 29.4の日本語マニュアル](https://ayatakesi.github.io/)
- [2010年代のEmacs入門](http://knowledge.sakura.ad.jp/knowledge/8494/) &lt;-- [いま気付いたけど、nill…](https://x.com/tadsan/status/864861829448605696)
- [Evil: EmacsをVimのごとく使う - 導入編](http://d.hatena.ne.jp/tarao/20130303/evil_intro)
- [超入門 Emacs/asir](http://www.math.kobe-u.ac.jp/Asir/emacs-asir.pdf)
- [Emacs Lisp 入門の Texinfo の和訳](http://www.math.s.chiba-u.ac.jp/~matsu/lisp/emacs-lisp-intro-jp_toc.html)
- [Emacs Lisp てほどき (PDF)](http://www.oki-osk.jp/esc/lecture/emacslisp.pdf)
- [スクリプト言語としてのEmacs Lisp](http://cx4a.org/pub/emacs-lisp-for-scripting.ja.html)
- [emacsでtexの不要なファイルを適当に削除する方法](https://web.archive.org/web/20250606023210/https://blog.goo.ne.jp/koyusoma5102/e/3741fbda5033eb6a46f3474d4626554a)
- [Emacs JP](http://emacs-jp.github.com/)
- [emacs-jp/emacs-jp.github.com · GitHub](https://github.com/emacs-jp/emacs-jp.github.com)
- [Emacs Lisp TIPS](https://sci.nao.ac.jp/MEMBER/zenitani/elisp-j.html)
