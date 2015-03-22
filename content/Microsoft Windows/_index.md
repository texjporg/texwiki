---
title: "Microsoft Windows"
url: "/Microsoft Windows/"
date: 2014-05-15T22:21:45Z
bookCollapseSection: true
pukiwiki: "Microsoft Windows"
---

# Microsoft Windows

## [Microsoft Windows](http://www.windows.com/) {#i4bf0c85}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Windows_logo_and_wordmark_-_2012.svg/500px-Windows_logo_and_wordmark_-_2012.svg.png" alt="Microsoft Windows" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## TeX ディストリビューション {#vb660ba1}

TeX 及び関連ソフトウェアをまとめたものを TeX ディストリビューションといいます．Windows 上で日本語が利用可能な TeX ディストリビューションは次の二つのどちらかでしょう．

- TeX Live: Windows だけでなく様々な OS で使えるディスビューションです．CTAN にある膨大なパッケージが含まれています．
- W32TeX: 角藤さんにより配布されている TeX ディストリビューションです．頻繁に更新がされています．

どちらを選んでも大差はありません．Web 上の情報は W32TeX の方が多いかもしれません．（TeX Live に日本語用 TeX が取り込まれたのが 2010 年からなため．）

### [W32TeX](/W32TeX/) <a id="w32tex"></a> {#yd4deb73}

W32TeX のインストールについては [W32TeX - TeX Wiki](/W32TeX/) を参照してください．

### [TeX Live](</TeX Live/>) (Win64, Win32) <a id="texlive"></a><a id="texlive-win64-win32"></a> {#ia336ed2}

TeX Live のインストールについては [TeX Live/Windows](</TeX Live/Windows/>) を参照してください．

## テスト等 {#bfc3538f}

インストールされたかのチェックを兼ねて，基本的な使い方を試してみましょう．

LaTeX ソース編集にはテキストエディタが必要です．すでにお気に入りのエディタがある場合は，LaTeX 用のマクロがあるか探してみるとよいでしょう．
特にこだわりのない方は，TeX Live とともにインストールされる TeXworks がお勧めです．
（長らく推奨されていた WinShell よりお勧めです．WinShell に関しては[古い情報](</古い情報/>)もご覧ください．）

以下では，TeXworksをもちいてみます．
TeXworksは

- W32TeX を TeX インストーラ 3 でインストールした場合はデスクトップのアイコンから
- TeX Live をインストールした場合はスタートメニューの「TeX Live 2014」→「TeXworks editor」から
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
後は[TeX入門](</TeX入門/>)などを参照しつつ文書の作成を行ってみてください．

### エラー時 {#b258335d}

エラーが起こったからといって，「インストールに失敗した！」と判断するのは早すぎます．打ち込んだものにミスがあるかもしれません．

#### 「プログラム"\*\*\*"が見付かりません」というエラー {#sdeb8cbf}

残念ながらインストールに失敗しているでしょう．もう一度インストールを試してみてください．または，インストール後手動で設定した場合は，その際にミスをしているかもしれません．もう一度確認をしてみてください．

#### LaTeX のエラー {#j87636b4}

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

## [統合環境・エディタ](</TeX用エディタ/>) {#e8efca0f}

LaTeX での文書作成を支援するための統合環境・エディタが各種開発されています．<br>

- [Wikipedia:Comparison_of_TeX_editors](https://www.wikipedia.org/wiki/Comparison_of_TeX_editors)
- [LaTeX Editors/IDEs](http://tex.stackexchange.com/questions/339/latex-editors-ides)

にも Microsoft Windows で使用可能な LaTeX 用の統合環境・エディタが紹介されています．

### フリーソフトウェア (オープンソースソフトウェア) {#e2433aac}

#### Windows, OS X, Linux {#aa9eced6}

- [LyX](/LyX/)
- [TeXstudio](/TeXstudio/)
- [Texmaker](/Texmaker/)
- [TeXworks](/TeXworks/)
- TexitEasy
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

#### Windows {#p928a24e}

- [TeXnicCenter](/TeXnicCenter/)
- [Notepad++](/Notepad++/)
    - [NppExec](/NppExec/)
    - [jN](/jN/)
    - [Python Script](</Python Script/>)
- [サクラエディタ](</サクラエディタ/>)
    - [Happy](/Happy/)

## PDF ファイルビューア {#y17ec745}

長らく LaTeX ファイルの編集は，dvi によるプレビューがもちいられてきました．<br>
ただ，最近は様々な理由から PDF によるプレビューが推奨されています．（[古い情報](</古い情報/>)も参考に．）<br>
TeXworks には PDF 用のビューアが組み込まれています．<br>
単独の LaTeX 用 PDF プレビューアは [SumatraPDF](/SumatraPDF/) がお勧めです．

## その他の選択肢 {#q9151c7a}

W32TeX，TeX Live 以外にも Windows で利用可能な TeX ディストリビューションが存在します．

- [Cygwin](/Cygwin/): Windows 上に UNIX のような環境を提供する Cygwin 用に 提供されています．[Cygwin](/Cygwin/) をご覧ください．
- [MiKTeX](/MiKTeX/): 主に国外で使われている（と思う）TeX ディストリビューションです．pTeX が入っていません．[MiKTeX](/MiKTeX/) をご覧ください．

<!-- W32TeX から．TeX Liveの項にでも書く？ -->
<!-- **$TEXMF, $TEXMFMAIN, $TEXMFLOCAL, $TEXMFPROJECTS [#s503cb80] -->
<!-- TeX についての解説を読んでいると，$TEXMF，$TEXMFMAIN，$TEXMFLOCAL，$TEXMFPROJECTS -->
<!-- という単語が出てくることがあります。~ -->
<!-- ''$TEXMFMAIN'' とは -->
<!-- TeX をインストールしたフォルダー（ディレクトリ）の中にある -->
<!-- share/texmf-dist というフォルダーのことを指しています。~ -->
<!-- ''$TEXMFDIST'' は　''$TEXMFMAIN'' と同じです。~ -->
<!-- ''$TEXMFLOCAL'' とは -->
<!-- TeX をインストールしたフォルダーの中にある -->
<!-- share/texmf-local というフォルダーのことを指しています。~ -->
<!-- ''$TEXMFPROJECTS'' とはTeX をインストールしたフォルダーの中にある -->
<!-- share/texmf-projetcs というフォルダーのことを指しています。~ -->
<!-- 例えば TeX を C:/w32tex/ にインストールしたのなら， -->
<!-- -$TEXMFMAIN = C:/w32tex/share/texmf-dist -->
<!-- -$TEXMFLOCAL = C:/w32tex/share/texmf-local -->
<!-- -$TEXMFPROJECTS = C:/w32tex/share/texmf-projects -->
<!--  -->
<!-- となります。~ -->
<!-- そして ''$TEXMF'' は -->
<!-- $TEXMFMAIN, $TEXMFLOCAL, $TEXMFPROJECTS のどれか，もしくは全てのことを指しています。~ -->
<!--  -->
<!-- **texmf.cnf の優先順位 [#a06d0a7b] -->
<!--   $SELFAUTOLOC -->
<!--   $SELFAUTOLOC/share/texmf-local/web2c -->
<!--   $SELFAUTOLOC/share/texmf-dist/web2c -->
<!--   $SELFAUTOLOC/share/texmf/web2c -->
<!--   $SELFAUTOLOC/texmf-local/web2c -->
<!--   $SELFAUTOLOC/texmf-dist/web2c -->
<!--   $SELFAUTOLOC/texmf/web2c -->
<!--   $SELFAUTODIR -->
<!--   $SELFAUTODIR/share/texmf-local/web2c -->
<!--   $SELFAUTODIR/share/texmf-dist/web2c -->
<!--   $SELFAUTODIR/share/texmf/web2c -->
<!--   $SELFAUTODIR/texmf-local/web2c -->
<!--   $SELFAUTODIR/texmf-dist/web2c -->
<!--   $SELFAUTODIR/texmf/web2c -->
<!--   $SELFAUTOGRANDPARENT/texmf-local/web2c -->
<!--   $SELFAUTOPARENT -->
<!--   $SELFAUTOPARENT/share/texmf-local/web2c -->
<!--   $SELFAUTOPARENT/share/texmf-dist/web2c -->
<!--   $SELFAUTOPARENT/share/texmf/web2c -->
<!--   $SELFAUTOPARENT/texmf-local/web2c -->
<!--   $SELFAUTOPARENT/texmf-dist/web2c -->
<!--   $SELFAUTOPARENT/texmf/web2c -->
<!--  -->
<!--  -->
<!--   $SELFAUTOLOC:         バイナリディレクトリ -->
<!--   $SELFAUTODIR:         バイナリディレクトリより1段階上のディレクトリ -->
<!--   $SELFAUTOPARENT:      バイナリディレクトリより2段階上のディレクトリ -->
<!--   $SELFAUTOGRANDPARENT: バイナリディレクトリより3段階上のディレクトリ -->
<!--  -->
<!--   但し、ルートディレクトリに達すると、その上は無いので、 -->
<!--   "ルートディレクトリの上" は、ルートディレクトリに一致する。 -->
<!--  -->
<!--   環境変数 TEXMFCNF を定義していなければ、上の順番で存在する全ての -->
<!--   texmf.cnf が読まれる。同じ変数定義が複数存在する場合、先に読み込んだ -->
<!--   定義が有効となる。 -->
<!--  -->
<!--   W32TeX の場合、配布される texmf.cnf は -->
<!--   $SELFAUTODIR/share/texmf-dist/web2c -->
<!--   にある。自分専用の texmf.cnf はこれより優先される -->
<!--   $SELFAUTODIR/share/texmf-local/web2c -->
<!--   に置いておけばよい。そうすれば、上書きされて専用の設定が消去 -->
<!--   されるようなことは無い。自分専用の texmf.cnf には必要最小限度の -->
<!--   ことを書いておくこと。配布される texmf.cnf に記述してあることを -->
<!--   専用の texmf.cnf に記述する必要は無い。 -->
<!--  -->
<!--  -->
<!-- 拡張子表示は書いておいた方がよいかも？ -->
<!-- *フォルダー オプション [#y4579ed3] -->
<!--  -->
<!-- W32TeX をインストールする前に拡張子や隠しファイル、隠しフォルダーおよび隠しドライブを表示する設定をします．~ -->
<!--  -->
<!-- Windows PowerShell または コマンド プロンプトを起動します．~ -->
<!-- > -->
<!-- |CENTER:~バージョン|CENTER:~Windows PowerShell の起動方法|h -->
<!-- |Windows 10|［Windows キーを押す］-［Search everywhere］-［テキストボックスに PowerShell を入力］-［Windows PowerShell］| -->
<!-- |Windows 8.1|［Windows キー + Q キーを押す］-［検索］-［テキストボックスに PowerShell を入力］-［Windows PowerShell］| -->
<!-- |Windows 7|［Windows キーを押す］-［プログラムとファイルの検索］-［テキストボックスに PowerShell を入力］-［Windows PowerShell］| -->
<!-- < -->
<!-- > -->
<!-- |CENTER:~バージョン|CENTER:~コマンド プロンプトの起動方法|h -->
<!-- |Windows 10|［Windows キーを押す］-［Search everywhere］-［テキストボックスに cmd を入力］-［コマンド プロンプト］| -->
<!-- |Windows 8.1|［Windows キー + Q キーを押す］-［検索］-［テキストボックスに cmd を入力］-［コマンド プロンプト］| -->
<!-- |Windows 7|［Windows キーを押す］-［プログラムとファイルの検索］-［テキストボックスに cmd を入力］-［コマンド プロンプト］| -->
<!-- < -->
<!--  -->
<!-- Windows PowerShell またはコマンド プロンプトに次のように -->
<!-- 打ち込んでフォルダー オプションを表示します．~ -->
<!--  -->
<!-- control folders -->
<!--  -->
<!-- 表示タブをクリックします．~ -->
<!--  -->
<!-- -隠しファイル、隠しフォルダーおよび隠しドライブを表示する -->
<!--  -->
<!-- を選択します．~ -->
<!--  -->
<!-- -登録されている拡張子は表示しない -->
<!--  -->
<!-- のチェックをはずします．~ -->
<!-- - --  -->
<!-- &color(#3EAEC0,#3EAEC0){%%%　　　　　　　　　　　　　　　　　　　&color(Black){''フォルダー オプション''};　　　　　　　　　　　　　　　　　　　　&color(#DD4444,#DD4444){%%%[ &color(White){''×''}; ]%%%};%%%};&br; -->
<!-- &color(Black,#EEEEEE){%%%[ 全般　 ]%%%};''[ 表示　 ]''&color(Black,#EEEEEE){%%%[ 検索　 ]%%%};&br; -->
<!--  -->
<!-- 　　 フォルダーの表示&br; -->
<!-- 　　　　　　　　　　　　この表示方法 (詳細表示やアイコンなど) をこの種類のフォルダーす&br; -->
<!-- 　　　　　　　　　　　　べてに適用することができます。&br; -->
<!-- 　　　　　　　　　　　　　&color(#888888,#EEEEEE){[　　フォルダーに適用(L)　　]};　&color(Black,#EEEEEE){[　　フォルダーをリセット(R)　　]};&br; -->
<!-- &br; -->
<!-- &br; -->
<!-- 　　 詳細設定:&br; -->
<!-- 　　　　ファイルおよびフォルダー&br; -->
<!-- 　　　　☑ ステータス バーを表示する&br; -->
<!-- 　　　　☐ タイトル バーに完全なパスを表示する&br; -->
<!-- 　　　　☐ チェックボックスを使用して項目を選択する&br; -->
<!-- 　　　　☑ ドライブ文字を表示する&br; -->
<!-- 　　　　　ファイルとフォルダーの表示&br; -->
<!-- 　　　　　&color(black,yellow){''(●) 隠しファイル、隠しフォルダーおよび隠しドライブを表示する ← 選択する''};&br; -->
<!-- 　　　　　 ◯ 隠しファイル、隠しフォルダーおよび隠しドライブを表示しない&br; -->
<!-- 　　　　☑ フォルダーとデスクトップの項目の説明をポップアップで表示する&br; -->
<!-- 　　　　☑ フォルダーのヒントにファイル サイズ情報を表示する&br; -->
<!-- 　　　　☑ フォルダーの結合の競合を非表示にする&br; -->
<!-- 　　　　☑ プレビュー ウィンドウでプレビューのハンドラーを表示する&br; -->
<!-- 　　　　　リスト ビューで入力するとき&br; -->
<!-- 　　　　　 ◯ 検索ボックスに自動的に入力する&br; -->
<!-- 　　　　　(●) 入力した項目をビューで選択する&br; -->
<!-- 　　　　☐ ログオン時に以前のフォルダー ウィンドウを表示する&br; -->
<!-- 　　　　☑ 暗号化や圧縮された NTFS ファイルをカラーで表示する&br; -->
<!-- 　　　　☑ 共有ウィザードを使用する (推奨)&br; -->
<!-- 　　　　☑ 空のドライブは表示しない&br; -->
<!-- 　　　　☑ 縮小版にファイル アイコンを表示する&br; -->
<!-- 　　　　☐ 常にアイコンを表示し、縮小版は表示しない&br; -->
<!-- 　　　　☐ 常にメニューを表示する&br; -->
<!-- 　　　　&color(black,yellow){''☐ 登録されている拡張子は表示しない ← チェックをはずす''};&br; -->
<!-- 　　　　☐ 別のプロセスでフォルダー ウィンドウを開く&br; -->
<!-- 　　　　☑ 保護されたオペレーティング システム ファイルを表示しない (推奨)&br; -->
<!-- &br; -->
<!-- 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　&color(Black,#EEEEEE){[　　既定値に戻す(D)　　]};&br; -->
<!-- - --  -->
<!--  -->
