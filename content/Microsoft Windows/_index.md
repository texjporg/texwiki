---
title: "Microsoft Windows"
url: "/Microsoft Windows/"
date: 2014-05-15T22:21:45Z
bookCollapseSection: true
pukiwiki: "Microsoft Windows"
---

# Microsoft Windows

## [Microsoft Windows](https://www.windows.com/) での TeX の利用 {#headline}

<!-- Windows に TeX をインストールして使えるようになるまでの大まかな流れとしては，[[TeX 入手法>TeX入手法]]で簡単に述べたとおり -->
<!--  -->
<!-- +TeX の処理系（“TeX ディストリビューション”）のインストールと設定 -->
<!-- +統合環境またはエディタ，PDF ビューアなどの周辺ツールのインストールと設定 -->
<!--  -->
<!-- が必要です． -->

***

***

## インストール {#install}

[TeX Live/Windows - TeX Wiki](</TeX Live/Windows/>)を参考にしてTeX Liveをインストールしてください．

## TeX を使い始める前に：拡張子の表示 {#extension}

<!-- 拡張子表示は書いておいた方がよいかも？ -->
<!-- // というわけなので，表に出すことにします． -->

TeX を使い始める前に（あるいはインストールする前に），拡張子や隠しファイル，隠しフォルダを表示するように変更しておくと便利かもしれません．
拡張子の表示は，LaTeX 処理の周辺での思いがけない勘違いを予防することに役立ちますし，そのほかにも .jpg や .png といった画像ファイルの違いを普段から意識する助けにもなります．
詳細は[拡張子の表示（基礎知識）](</Microsoft Windows/基礎知識/#extension>)を参照してください．

## TeX を使い始める前に：環境変数 Path の確認 {#o4ae5c5c}

TeX を使うには環境変数 Path の設定が必要です．

環境変数 Path は以下のように確認できます．

> スタート &gt; 設定 &gt;  「設定の検索」と書かれた入力欄に「環境変数」と入力して検索 &gt; 「環境変数を編集」を選択

<!-- -Windows PowerShell の場合 -->
<!--  -->
<!-- $Env:Path -->
<!--  -->
<!-- あるいは -->
<!--  -->
<!-- echo %Env:Path -->
<!--  -->
<!-- -コマンド プロンプトの場合 -->
<!--  -->
<!-- path -->
<!--  -->
<!-- あるいは -->
<!--  -->
<!-- echo %PATH% -->

システム環境変数 Path に以下のパスが含まれているか，いま一度確認してください． <!-- これらが %PATH% にないことにより， --> <!-- ptex2pdf.lua が動かない（実際には os.execute()）など致命的自体に陥る． -->

> %SystemRoot%\system32<br>
> %SystemRoot%<br>

なお，%SystemRoot%（環境変数 SystemRoot）は，通常 C:\WINDOWS です．

## TeX のインストールが成功したかどうかテストする {#test}

インストールされたかのチェックを兼ねて，基本的な使い方を試してみましょう．

LaTeX ソース編集には統合環境やテキストエディタが必要です．
すでにお気に入りのエディタがある場合は，LaTeX 用のマクロがあるか探してみるとよいでしょう．
特にこだわりのない方は，TeX Live とともにインストールされる [TeXworks](/TeXworks/) がお勧めです．
そのほかのエディタなどについては，この後の[統合環境やエディタのインストール](</Microsoft Windows/#editor>)でも紹介しています．

以下では，TeXworks をもちいてみます．
TeXworks は
スタートメニューの「TeX Live 2021」→「TeXworks editor」から
起動することができます．

次の四行を入力してみます．

```
\documentclass{article}
\begin{document}
Hello World!
\end{document}
```

メニューから「ファイル」→「保存」と選び，適当な場所に保存します．（ツールバーの「保存」ボタンを押すか Ctrl + S を押しても保存されます．）名前は半角英数からなるものならば何でもよいです．拡張子は.texとしてください．
保存後，左上の緑の三角の入ったボタンを押してみてください．「Hello World!」と表示されれば成功です．

日本語も試してみましょう．今度は次のようにします．

```
\documentclass[dvipdfmx]{jsarticle}
\begin{document}
こんにちは，\LaTeX
\end{document}
```

同様にしてみて「こんにちは，LaTeX」と表示されれば成功です．（LaTeX は大文字 A が上がり，大文字 E が下がった「本来の方法」で表示されているはずです．）
以上で LaTeX のインストールは終了です．
また，TeXworks による編集も行えるようになりました．
後は [LaTeX入門](</LaTeX入門/>) などを参照しつつ文書の作成を行ってみてください．

### エラー時 {#error}

エラーが起こったからといって，「インストールに失敗した！」と判断するのは早すぎます．打ち込んだものにミスがあるかもしれません．

#### 「プログラム"\*\*\*"が見付かりません」というエラー {#error01}

残念ながらインストールに失敗しているでしょう．もう一度インストールを試してみてください．または，インストール後手動で設定した場合は，その際にミスをしているかもしれません．もう一度確認をしてみてください．

#### LaTeX のエラー {#error02}

コンパイルでエラーが発生すると，TeXworks 下段の「ログの表示」にエラーに関する情報が表示されます．たとえば

```
\ddocumentclass[dvipdfmx]{jsarticle}
```

としてしまうと（dが一つ多い）次のように表示されます．

```
! Undefined control sequence.
l.1 \ddocumentclass
                   [dvipdfmx]{jsarticle}
```

「x」または「e」を入力することで，ファイルの編集に戻ることができます．このようにエラーのある箇所が表示されるので，そこを中心に確認してみてください．エラー内容に関しては[LaTeX のエラーメッセージ](</LaTeX のエラーメッセージ/>)も参考にしてください．

## 統合環境やエディタのインストール {#editor}

LaTeX での文書作成を支援するための統合環境・エディタが各種開発されています．上記 TeXworks もそのような統合環境の一つです．
これらは，LaTeX のソース中に書かれた特別な命令を色付けしてくれたり，LaTeX によるタイプセットをボタンやショートカットキー一つで実行してくれたりと，便利なものです．
初心者の方はまずは LaTeX 用の統合環境を使用して LaTeX に慣れるのが良いでしょう．

エディタ・マクロ・プラグインの種類によって得手不得手があったり不具合が発生したりする場合があります．
問題が発生した場合は別のエディタを使用してください．
人によってエディタの好みは様々なので自分にあったエディタを見つけてください．
TeXworks がよいならばそれでもよいですし，下記のを色々と試してみるのも楽しいかもしれません．

このほかにも

- [TeX Wiki 内の「TeX 用エディタ」紹介ページ](</TeX用エディタ/>)
- [Wikipedia:Comparison_of_TeX_editors](https://www.wikipedia.org/wiki/Comparison_of_TeX_editors)
- [LaTeX Editors/IDEs](http://tex.stackexchange.com/questions/339/latex-editors-ides)

には，Microsoft Windows で使用可能な LaTeX 用の統合環境・エディタが紹介されています．

### フリーソフトウェア（オープンソースソフトウェア） {#editor-free}

<!-- Windows でエディタを選びたいときに，別に -->
<!-- 「Windows, macOS, Linux で動くか，Windows でしか動かないか」 -->
<!-- なんて不要だと思うので，統合環境か汎用エディタかで分類しなおします． -->

<!-- ここに並べる統合環境は -->
<!-- 1. TeX ディストリビューションにバンドルされているもの (TeXworks) -->
<!-- 2. そうではないが，広く使われていて TeX Wiki にも情報が充実しているもの -->
<!-- の順のつもり．従来の「アルファベット順」は無意味なので変更． -->

- 統合環境（TeX, LaTeX に特化した機能を備えています）
    - <strong>[TeXworks](/TeXworks/)</strong> ← TeX Live (win32) に標準で含まれています．
    - <strong>[TeXstudio](/TeXstudio/)</strong>
    - <strong>[LyX](/LyX/)</strong>
    - [Texmaker](/Texmaker/)
    - [TeXnicCenter](/TeXnicCenter/)

- 汎用エディタ（TeX, LaTeX 用のパッケージが用意されているものがあります）
    - [Visual Studio Code](</Visual Studio Code/>)
        - [LaTeX](</Visual Studio Code/LaTeX/>)
    - [Atom](/Atom/)
        - [Atom/LaTeX](/Atom/LaTeX/)
    - [Emacs](/Emacs/)
        - [Org mode](</Emacs/Org mode/>)
        - [TeX mode](</Emacs/TeX mode/>)
        - [AUCTeX](/AUCTeX/)
        - [YaTeX](/YaTeX/)（野鳥）
    - [Vim](/Vim/)
        - [VimTeX](/VimTeX/)
    - [Eclipse](/Eclipse/)
        - [TeXlipse](/TeXlipse/)
    - [gedit](/gedit/)
    - [Geany](/Geany/)
    - [Notepad++](/Notepad++/)
        - [NppExec](/NppExec/)
        - [jN](/jN/)
    - [サクラエディタ](</サクラエディタ/>)
        - [Happy](/Happy/)

## PDF ファイルビューア {#pdfviewer}

長らく LaTeX ファイルの編集は，dvi によるプレビューがもちいられてきました．
ただ，最近は様々な理由から PDF によるプレビューが推奨されています（[古い情報](</古い情報/>)も参考に）．
TeXworks, TeXstudio などの統合環境には PDF 用のビューアが組み込まれています．
単独の LaTeX 用 PDF プレビューアとしては

- <strong>[SumatraPDF](/SumatraPDF/)</strong>：軽量な LaTeX 用の PDF ビューアとして最適で，特にお勧めします．
- [MuPDF](/MuPDF/)：軽量な PDF/XPS ビューア．SumatraPDF などで使われています．
- [Poppler](/Poppler/)：PDF のレンダリングライブラリ．TeXworks, TeXstudio などで使われています．

などがあります．

## 周辺ツールの利用 {#tools}

### 文献管理ツール {#bibtex}

オープンソースの文献管理ツールとして，以下を挙げておきます。

- [Zotero](https://www.zotero.org/)
- [JabRef](http://www.jabref.org/)

このほかにも

- [TeX Wiki 内の「BibTeX 関連ツール」紹介ページ](</BibTeX関連ツール/>)

には，Microsoft Windows で使用可能な文献管理ツールが紹介されています。

## その他の選択肢 {#others}

TeX Live 以外にも Windows で利用可能な TeX ディストリビューションが存在します．

- Cygwin での利用：Windows 上に UNIX のような環境を提供する Cygwin 用にも TeX Live が提供されています．[Cygwin](/Cygwin/) をご覧ください．
- [MiKTeX](/MiKTeX/)：主に国外で使われている（と思う）TeX ディストリビューションです．日本語 pTeX が入っていません．[MiKTeX](/MiKTeX/) をご覧ください．
