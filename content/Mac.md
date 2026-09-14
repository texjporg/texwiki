---
title: "Mac"
url: "/Mac/"
date: 2014-10-20T17:26:06Z
pukiwiki: "Mac"
---

# Mac

## [macOS](https://www.apple.com/jp/os/macos/) (Mac) での TeX の利用 {#headline}

macOS (Mac) に TeX をインストールして使えるようになるまでの大まかな流れとしては，[TeX 入手法](</TeX入手法/>)で簡単に述べたとおり

1. TeX の処理系（“TeX ディストリビューション”）のインストールと設定
1. 統合環境またはエディタ，PDF ビューアなどの周辺ツールのインストールと設定

が必要です。

***

***

## TeX ディストリビューション {#distribution}

TeX 及び関連ソフトウェアをまとめたものを TeX ディストリビューションといいます。
macOS 上で日本語が利用可能な TeX ディストリビューションは [TeX Live](</TeX Live/>) です。
[MacTeX](/MacTeX/) や [BasicTeX](/BasicTeX/) というディストリビューションも，この TeX Live をベースとしたものです。
奥村先生の[［改訂第9版］LaTeX美文書作成入門](https://github.com/okumuralab/bibun9)の「A.3　Macへのインストールと設定」には [MacTeX](/MacTeX/) のインストール方法が書かれています。

macOS への TeX Live のインストール方法は [TeX Live/Mac](</TeX Live/Mac/>) を参照してください。

- [https://tug.org/texlive/quickinstall.html](https://tug.org/texlive/quickinstall.html)
- [https://tug.org/texlive/doc/texlive-en/texlive-en.html#x1-160003.1.2](https://tug.org/texlive/doc/texlive-en/texlive-en.html#x1-160003.1.2)
- [https://wtsnjp.com/pdf/texlive-ja.pdf#subsubsection.3.1.2](https://wtsnjp.com/pdf/texlive-ja.pdf#subsubsection.3.1.2)

にも情報があります。

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

には，macOS で使用可能な LaTeX 用の統合環境・エディタが紹介されています。

### フリーソフトウェア（オープンソースソフトウェア） {#editor-free}

<!-- LyX, TeXstudio, Texmaker, TeXworks 等の Qt アプリケーションでは，Qt のバグのせいでバックスラッシュが入力できないようです． -->
<!-- この場合は，[[Karabiner>Karabiner-Elements]] で Backslash が優先されるようにキーバインドを変更してください。 -->

<!-- ここに並べる統合環境は -->
<!-- 1. TeX ディストリビューションにバンドルされているもの (TeXworks, TeXShop) -->
<!-- 2. そうではないが，広く使われていて TeX Wiki にも情報が充実しているもの -->
<!-- の順のつもり．従来の「アルファベット順」は無意味なので変更． -->

- 統合環境（TeX, LaTeX に特化した機能を備えています）
    - <strong>[TeXShop](/TeXShop/)</strong>
        - MacTeX の GUI Applications に収録されています。
    - <strong>[TeXstudio](/TeXstudio/)</strong>
        - 【注意】組み込みの PDF ビューアで日本語が表示されない場合は poppler-data を適切な場所に配置してください。(→ [TeXstudio#組み込みの PDF ビューアに日本語を表示させる](/TeXstudio/#o84f3d5c))
    - <strong>[LyX](/LyX/)</strong>
    - <strong>[TeXworks](/TeXworks/)</strong>
    - [Texmaker](/Texmaker/)

- 汎用エディタ（TeX, LaTeX 用のパッケージが用意されているものがあります）
    - [Visual Studio Code](</Visual Studio Code/>)
        - [LaTeX](</Visual Studio Code/LaTeX/>)
    - [Emacs](/Emacs/)
        - [Org mode](</Emacs/Org mode/>)
        - [TeX mode](</Emacs/TeX mode/>)
        - [AUCTeX](/AUCTeX/)
        - [YaTeX](/YaTeX/)（野鳥）
    - [Vim](/Vim/)/[Neovim](/Neovim/)
        - [VimTeX](/VimTeX/)

## PDF ファイルビューア {#pdfviewer}

かつて LaTeX ファイルの編集には，dvi によるプレビューがもちいられていました．
現在では様々な理由から PDF によるプレビューが推奨されています．（[古い情報](</古い情報/>)も参考に．）
TeXShop, TeXworks, TeXstudio, Texmaker などの統合環境には PDF 用のビューアが組み込まれています．
単独の LaTeX 用 PDF プレビューアとしては

- <strong>[Skim](/Skim/)</strong>：軽量な LaTeX 用の PDF ビューアとして最適で，特にお勧めします．
- <strong>[Galley](/Galley/)</strong>：macOS用TeX/LaTeXの軽量なPDFビューア
- [Okular](/Okular/)：KDE Plasma 標準の PDF ビューア
- [zathura](/zathura/)：軽量な PDF ビューア
- [qpdfview](/qpdfview/)：タブ切り替え型の PDF ビューア
- [Sioyek](/Sioyek/)：教科書や論文を読むことに特化した PDF ビューア
- [MuPDF](/MuPDF/)：軽量な PDF ビューア．
- [Poppler](/Poppler/)：PDF のレンダリングライブラリ．TeXworks, TeXstudio などで使われています．
- [LiveTeX](https://github.com/questbeat/LiveTeX)：LiveTeX is a PDF previewer for TeX writing. --&gt; [TeX のプレビュー用アプリを作った](http://questbeat.hatenablog.jp/entry/2016/02/16/213249)

などがあります．

## PostScript、EPS ファイルについて {#ibffc092}

macOS Sonoma 14 で PostScript、EPS ファイルを PDF ファイルに変換する機能が削除されたため、macOS の機能を用いた PostScript、EPS ファイルのプレビューはできなくなりました。

- [Mac で .ps ファイルや .eps ファイルを表示する](https://support.apple.com/ja-jp/108775)
- [macOS14 Sonoma でEPSをプレビューしたい](https://discussionsjapan.apple.com/thread/255488713)
- [macOS 14 Sonomaでは、PostScriptとEPSのサポート終了がさらに進み、.ps/.epsファイルをプリンタキューにも追加できない状態に。](https://applech2.com/archives/macos-14-sonoma-eos-ps-and-eps.html)
- [Apple、macOS 14 SonomaでPostScriptとEPSファイルをPDFへ変換する機能を削除。これによりAdobeのAcrobatなどでPDFファイルを印刷できなくなっているので注意を。](https://applech2.com/archives/20230612-apple-remove-ps-eps-to-pdf-from-macos-14-sonoma.html)
- [Apple、macOS 13 VenturaのプレビューアプリでPostScript(.ps/.eps)ファイルのサポートを終了。](https://applech2.com/archives/20221028-macos-13-ventura-preview-app-drop-support-postscript.html)

## 署名の無いアプリについて {#u25b42a8}

macOS Sequoia 15 から署名の無いアプリを開く手続きが変わったようです。

- \[[解決\]macOS Sequoiaで野良アプリが開けない問題](https://note.com/5mingame2/n/n5912b7ce9474)

## 周辺ツールの利用 {#tools}

### 文献管理ツール {#bibtex}

オープンソースの文献管理ツールとして，以下を挙げておきます。

- [Zotero](/Zotero/)
- [JabRef](/JabRef/)
- [BibDesk](/BibDesk/)

このほかにも

- [TeX Wiki 内の「BibTeX 関連ツール」紹介ページ](</BibTeX関連ツール/>)

には，macOS で使用可能な文献管理ツールが紹介されています。

### スペルチェッカー {#spell}

- [Hunspell](/Hunspell/)
- [cocoAspell](http://people.ict.usc.edu/~leuski/cocoaspell/)

## JIS キーボードでバックスラッシュ &#x5c; ではなく円記号 &#xa5; が入力される場合 {#me741d27}

macOS で日本語 JIS キーボードを利用している場合，設定によっては Backslash (U+005C) を入力しているつもりが 円記号 (U+00A5) になる場合があります。
いくつかの対処法を紹介します。

- [Macでバックスラッシュを入力するための設定](https://www.cc.kyoto-su.ac.jp/~mmina/bp1/settingForBackslash.html)
- [【Tips】Macで円記号ではなくバックスラッシュを確実に入力する方法](https://softantenna.com/blog/input-backslash-on-osx/)
- [Solutions for typing backslash on MacOS with Japanese keyboard in specific app](https://apple.stackexchange.com/questions/347389/solutions-for-typing-backslash-on-macos-with-japanese-keyboard-in-specific-app)
- [MacのJISキーボードで円マークを打ったときにバックスラッシュが入るようにする（DefaultKeyBinding.dictを使う）](https://snap.hyuki.com/20180622223225/)
- [OS X Yosemiteでバックスラッシュが円マークになっちゃう問題](https://chalow.net/2014-10-28-1.html)
- [Macにおけるバックスラッシュ（\）の入力方法](https://qiita.com/miyohide/items/6cb8967282d4b2db0f61)
- [テキスト編集のキー操作を自在にコントロールする - ザリガニが見ていた…。](https://zariganitosh.hatenablog.jp/entry/20101026/text_key_binding)
- 参考：[(1)](https://x.com/doraTeX/status/630575968025849856), [(2)](https://x.com/doraTeX/status/630576724271435776)

### &#x7e;/Library/KeyBindings/DefaultKeyBinding.dict によるキーバインドの変更 {#defaultkeybinding-dict}

&#x7e;/Library/KeyBindings/DefaultKeyBinding.dict
に次の4行を記したファイルを配置し，再ログインすれば \ と ¥ が逆転します。すなわち，¥ キーで \ が，option+¥ で ¥ が入力されるようになります。

```
{
  "¥" = ("insertText:", "\\");
  "~\\" = ("insertText:", "¥");
}
```

なお，デフォルトでは

> &#x7e;/Library/KeyBindings

というディレクトリは存在しませんので，次のようにして作成してください。

1. オプションキーを押しながら Finder の「移動」をクリックする。
1. 「ライブラリ」をクリックすると，~/Library が開かれる。
1. Finder で新規フォルダを作成し，KeyBindings と名付ける。
1. その中に DefaultKeyBinding.dict という名前のテキストファイルを作成し，上記内容を記載する。
1. 一旦ログアウトして，再ログインすると，\ と ¥ の入れ替えが有効になる。

### Karabiner-Elements によるキーバインドの変更 {#karabiner}

macOS 用の汎用的なキーボードカスタマイズツール [Karabiner-Elements](/Karabiner-Elements/) で，¥ を入力すると \ に変換することができます。

### Ukelele  によるキーバインドの変更 {#pc59ea4e}

Unicode Keyboard Layout Editor の [Ukelele](https://software.sil.org/ukelele/) で，\_（アンダースコア） を入力すると \ に変換することができます。

- [Mac(Sierra)でのキーリマップ](https://uitspitss.hatenablog.com/entry/2017/05/31/031642)

### Hammerspoon によるキーバインドの変更 {#o4723e6f}

macOS 用の自動化ツール [Hammerspoon](http://www.hammerspoon.org/) で，¥ を入力すると \ に変換することができます。

- [IntelliJとかJVMのIDE使いでもKarabinerなしでバックスラッシュを片手入力したい](http://qiita.com/tanakahisateru/items/d8a67ad89c07baf8c0da)

### macOS の日本語入力（旧ことえり）によるキーバインドの変更 {#w93e863d}

JIS キーボードの ¥ キーで入力する文字を \ に変更する設定が可能です。

- 「日本語」の場合

> [![](/attach/Mac/MacJP-bs.png)](/attach/Mac/MacJP-bs.png)

- 「ことえり」の場合

> [![](/attach/Mac/Kotoeri-bs.png)](/attach/Mac/Kotoeri-bs.png)

### Google 日本語入力によるキーバインドの変更 {#googleime}

こちらも JIS キーボードの ¥ キーで入力する文字を \ に変更する設定が可能です。

> [![](/attach/Mac/Google-bs.png)](/attach/Mac/Google-bs.png)

### ATOK を利用している場合 {#atok}

日本語入力に ATOK を利用している場合は，ATOK 2017 for Mac でも JIS キーボードの ¥ キーで入力する文字を \ に変更する設定画面がありません。

[&#x7e;/Library/KeyBindings/DefaultKeyBinding.dict によるキーバインドの変更](/Mac/#defaultkeybinding-dict) を参照して設定します。

### 統合環境による対症療法 {#k7ca107f}

いくつかの macOS 用統合環境は，この問題に対処する方法を用意しています。

- [TeXShop](</TeXShop FAQ/#y43ef465>) や [LaTeXiT](/LaTeXiT/#pd5cb643) ではキーマップの設定が可能ですので，ここで ¥ キーを \ に変換できます。
- [TeX2img](</TeX2img FAQ/#a8b7895d>) にはメニューに「編集＞入力された ¥ を \ に置換」という項目があり，ここで ¥ キーを \ に変換できます。

## 関連リンク {#links}

- [Newest &#39;mac&#39; Questions - TeX - LaTeX Stack Exchange](https://tex.stackexchange.com/questions/tagged/mac)
- [The MacOSX-TeX Archives](https://email.esm.psu.edu/pipermail/macosx-tex/)
