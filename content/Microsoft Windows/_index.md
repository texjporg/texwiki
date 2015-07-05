---
title: "Microsoft Windows"
url: "/Microsoft Windows/"
date: 2014-05-15T22:21:45Z
bookCollapseSection: true
pukiwiki: "Microsoft Windows"
---

# Microsoft Windows

## [Microsoft Windows](http://www.windows.com/) での TeX の利用 {#headline}

Windows に TeX をインストールして使えるようになるまでの大まかな流れとしては，[TeX 入手法](</TeX入手法/>)で簡単に述べたとおり

1. TeX の処理系（“TeX ディストリビューション”）のインストールと設定
1. 統合環境またはエディタ，PDF ビューアなどの周辺ツールのインストールと設定

が必要です．

***

***

## TeX ディストリビューション {#distribution}

TeX 及び関連ソフトウェアをまとめたものを TeX ディストリビューションといいます．
Windows 上で日本語が利用可能な TeX ディストリビューションは次の二つのどちらかでしょう．

- TeX Live: Windows だけでなく様々な OS で使えるディスビューションです．CTAN にある膨大なパッケージが含まれています．
- W32TeX: 角藤さんにより配布されている TeX ディストリビューションです．頻繁に更新がされています．

どちらを選んでも大差はありません[^1]．
Web 上の情報は TeX Live の方が多いです．
日本語の古い情報は W32TeX の方が多いかもしれません（TeX Live に日本語用 TeX が取り込まれたのが 2010 年からのためです）．

### [TeX Live](</TeX Live/>) (Win64, Win32) {#texlive}

TeX Live のインストールについては [TeX Live/Windows - TeX Wiki](</TeX Live/Windows/>) を参照してください．

### [W32TeX](/W32TeX/) {#w32tex}

W32TeX のインストールについては [W32TeX - TeX Wiki](/W32TeX/) を参照してください．

## TeX を使い始める前に：拡張子の表示 {#extension}

<!-- 拡張子表示は書いておいた方がよいかも？ -->
<!-- // というわけなので，表に出すことにします． -->

TeX を使い始める前に（あるいはインストールする前に），拡張子や隠しファイル，隠しフォルダを表示するように変更しておくと便利かもしれません．

- Microsoft サポートの説明：[ファイルの拡張子を表示するには?](https://support.microsoft.com/en-us/kb/978449/ja?wa=wsignin1.0)

拡張子の表示は，LaTeX 処理の周辺での思いがけない勘違いを予防することに役立ちますし，そのほかにも .jpg や .png といった画像ファイルの違いを普段から意識する助けにもなります[^2]．

たとえば，拡張子が表示されていないと，いわゆる「メモ帳のおせっかい」で ex1.tex としたつもりでも ex1.tex.txt というファイル名にされてしまったり（[LaTeX 入門/最初の例](</LaTeX入門/最初の例/#ka2ad20a>)を試すときなど），texmf.cnf を編集したら texmf.cnf.txt になってしまう（[extractbb の自動実行](</古い情報/#rf074b4b>)の設定など）といったトラブルに気づきづらくなります．

- 拡張子を表示していないことによる失敗例
    - [abc.pdf だと思っていたものが abc.pdf.pdf となっていた](https://okumuralab.org/tex/mod/forum/discuss.php?d=1578%23p9089)

拡張子を常に表示するための設定は，以下のようにして行います：

1. 「フォルダーと検索のオプション」を表示します．
    - フォルダのメニューバーの「整理」から「フォルダーと検索のオプション」をクリックすれば表示されます．
    - Windows PowerShell または コマンド プロンプトから

        ```
        control folders
        ```

        と入力することでも，フォルダー オプションを表示できます．
        <!--  -->
        <!-- Windows PowerShell の起動方法 -->
        <!-- - Windows 10：［Windows キーを押す］-［Search the web and Windows］-［テキストボックスに PowerShell を入力］-［Windows PowerShell］ -->
        <!-- - Windows 8.1：［Windows キー + Q キーを押す］-［検索］-［テキストボックスに PowerShell を入力］-［Windows PowerShell］ -->
        <!-- - Windows 7：［Windows キーを押す］-［プログラムとファイルの検索］-［テキストボックスに PowerShell を入力］-［Windows PowerShell］ -->
        <!--  -->
        <!-- コマンド プロンプトの起動方法 -->
        <!-- - Windows 10：［Windows キーを押す］-［Search the web and Windows］-［テキストボックスに cmd を入力］-［コマンド プロンプト］ -->
        <!-- - Windows 8.1：［Windows キー + Q キーを押す］-［検索］-［テキストボックスに cmd を入力］-［コマンド プロンプト］ -->
        <!-- - Windows 7：［Windows キーを押す］-［プログラムとファイルの検索］-［テキストボックスに cmd を入力］-［コマンド プロンプト］ -->
        <!--  -->

1. ［表示］タブをクリックします．
1. 「登録されている拡張子は表示しない」のチェックをはずします．

同じ画面で「隠しファイル，隠しフォルダーおよび隠しドライブを表示する」を選択すれば，一時フォルダー（ユーザ環境変数 TEMP や TMP で参照されるフォルダ）も可視化され，便利なこともあります．

## TeX のインストールが成功したかどうかテストする {#test}

インストールされたかのチェックを兼ねて，基本的な使い方を試してみましょう．

LaTeX ソース編集には統合環境やテキストエディタが必要です．
すでにお気に入りのエディタがある場合は，LaTeX 用のマクロがあるか探してみるとよいでしょう．
特にこだわりのない方は，TeX Live や W32TeX とともにインストールされる [TeXworks](/TeXworks/) がお勧めです．
（長らく推奨されていた [WinShell](/WinShell/) よりお勧めです．WinShell に関しては[古い情報](</古い情報/>)もご覧ください．）
この後の[統合環境やエディタのインストール](</Microsoft Windows/#editor>)でも紹介しています．

以下では，TeXworks をもちいてみます．
TeXworks は

- TeX Live をインストールした場合はスタートメニューの「TeX Live 2015」→「TeXworks editor」から
- W32TeX を TeX インストーラ 3 でインストールした場合はデスクトップのアイコンから
- W32TeX を簡易インストーラをもちいて（または自分で展開して）インストールした場合は，コマンドプロンプトから 「texworks」で

起動することができます．

次の四行を入力してみます．

```
\documentclass{article}
\begin{document}
Hello World!
\end{document}
```

メニューから「ファイル」→「保存」と選び，適当な場所に保存します．（ツールバーの「保存」ボタンを押すか Ctrl + S を押しても保存されます．）名前は何でもよいです．
左上の緑の三角の入ったボタンを押してみてください．「Hello World!」と表示されれば成功です．

日本語も試してみましょう．今度は次のようにします．

```
\documentclass{jsarticle}
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
\ddocumentclass{jsarticle}
```

としてしまうと（dが一つ多い）次のように表示されます．

```
! Undefined control sequence.
l.1 \ddocumentclass
                   {jsarticle}
```

「x」または「e」を入力することで，ファイルの編集に戻ることができます．このようにエラーのある箇所が表示されるので，そこを中心に確認してみてください．エラー内容に関しては[LaTeX のエラーメッセージ](</LaTeX のエラーメッセージ/>)も参考にしてください．

## 統合環境やエディタのインストール {#editor}

LaTeX での文書作成を支援するための統合環境・エディタが各種開発されています．
これらは，LaTeX のソース中に書かれた特別な命令を色付けしてくれたり，LaTeX によるタイプセットをボタンやショートカットキー一つで実行してくれたりと，便利なものです．
初心者の方はまずは LaTeX 用の統合環境を使用して LaTeX に慣れるのが良いでしょう．

エディタ・マクロ・プラグインの種類によって得手不得手があったり不具合が発生したりする場合があります．
問題が発生した場合は別のエディタを使用してください．
人によってエディタの好みは様々なので自分にあったエディタを見つけてください．

このほかにも

- [TeX Wiki 内の「TeX 用エディタ」紹介ページ](</TeX用エディタ/>)
- [Wikipedia:Comparison_of_TeX_editors](https://www.wikipedia.org/wiki/Comparison_of_TeX_editors)
- [LaTeX Editors/IDEs](http://tex.stackexchange.com/questions/339/latex-editors-ides)

には，Microsoft Windows で使用可能な LaTeX 用の統合環境・エディタが紹介されています．

### フリーソフトウェア（オープンソースソフトウェア） {#editor-free}

<!-- Windows でエディタを選びたいときに，別に -->
<!-- 「Windows, OS X, Linux で動くか，Windows でしか動かないか」 -->
<!-- なんて不要だと思うので，統合環境か汎用エディタかで分類しなおします． -->

- 統合環境（TeX, LaTeX に特化した機能を備えています）
    - <strong>[TeXworks](/TeXworks/)</strong>
    - <strong>[TeXstudio](/TeXstudio/)</strong>
    - <strong>[LyX](/LyX/)</strong>
    - [Texmaker](/Texmaker/)
    - [TeXnicCenter](/TeXnicCenter/)
    - TexitEasy

- 汎用エディタ（TeX, LaTeX 用のモードが用意されているものがあります）
    - <strong>[Emacs](/Emacs/)</strong>
        - <strong>[YaTeX](/YaTeX/)（野鳥）</strong>
        - [AUCTeX](/AUCTeX/)
        - [Org mode](</Emacs/Org mode/>) + [YASnippet](/YASnippet/)
        - [TeX mode](</Emacs/TeX mode/>) + [YASnippet](/YASnippet/)
    - <strong>[Vim](/Vim/)</strong>
        - <strong>[Vim-LaTeX](/Vim-LaTeX/)</strong>
        - [tex.vim](/Vim/tex.vim/) + (vimtex or LaTeX Box) + [quickrun](/quickrun/) + [neocomplete &amp; neosnippet](/neocomplete/)
        - ATP
    - [Eclipse](/Eclipse/)
        - [TeXlipse](/TeXlipse/)
    - [gedit](/gedit/)
    - [Atom](/Atom/)
    - [Geany](/Geany/)
    - [Notepad++](/Notepad++/)
        - [NppExec](/NppExec/)
        - [jN](/jN/)
        - [Python Script](</Python Script/>)
    - [サクラエディタ](</サクラエディタ/>)
        - [Happy](/Happy/)

### シェアウェア {#editor-share}

- 汎用エディタ
    - <strong>[秀丸エディタ](</秀丸エディタ/>)</strong>
        - <strong>祝鳥</strong>

## PDF ファイルビューア {#pdfviewer}

長らく LaTeX ファイルの編集は，dvi によるプレビューがもちいられてきました．
ただ，最近は様々な理由から PDF によるプレビューが推奨されています．（[古い情報](</古い情報/>)も参考に．）
TeXworks, TeXstudio などの統合環境には PDF 用のビューアが組み込まれています．
単独の LaTeX 用 PDF プレビューアとしては

- <strong>[SumatraPDF](/SumatraPDF/)</strong>：軽量な LaTeX 用の PDF ビューアとして最適で，特にお勧めします．
- [MuPDF](/MuPDF/)：軽量な PDF/XPS ビューア．SumatraPDF などで使われています．
- [Poppler](/Poppler/)：PDF のレンダリングライブラリ．TeXworks, TeXstudio, Texmaker, TexitEasy などで使われています．

などがあります．

## 周辺ツールの利用 {#tools}

### 文献管理ツール {#bibtex}

オープンソースの文献管理ツールとして，以下を挙げておきます。

- [Zotero](https://www.zotero.org/)
- [JabRef](http://jabref.sourceforge.net/)
- [QRef](http://members3.jcom.home.ne.jp/qref/)

このほかにも

- [TeX Wiki 内の「BibTeX 関連ツール」紹介ページ](</BibTeX関連ツール/>)

には，Microsoft Windows で使用可能な文献管理ツールが紹介されています。

## その他の選択肢 {#others}

TeX Live, W32TeX 以外にも Windows で利用可能な TeX ディストリビューションが存在します．

- Cygwin での利用：Windows 上に UNIX のような環境を提供する Cygwin 用にも TeX Live が提供されています．[Cygwin](/Cygwin/) をご覧ください．
- [MiKTeX](/MiKTeX/)：主に国外で使われている（と思う）TeX ディストリビューションです．日本語 pTeX が入っていません．[MiKTeX](/MiKTeX/) をご覧ください．

[^1]: パッケージがより多く含まれているのは TeX Live です（約3,000）が，実際に一人のユーザが常用するパッケージはそんなに多くありません．W32TeX は通常の用途で必要なパッケージは網羅しているので，フルインストールした場合は W32TeX のほうが容量を節約できるでしょう．ただし，TeX Live もフルインストールせずに最小限のインストールで済ませれば，それほど容量を必要としません．
[^2]: Windows が標準で「何らかのプログラムに関連づけられたファイル」の拡張子を表示していないのは，「よく知らないユーザがファイル名を変えようとして拡張子ごと変更してしまい，関連づけられたプログラムで開けなくなってしまう」というトラブルを防ぐためです．しかし，LaTeX を使う際にはこの拡張子が目に見えたほうがトラブルは少なくなりますし，単にファイル名変更時に気をつけさえすればいいのです．
