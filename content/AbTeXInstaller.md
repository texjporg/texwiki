---
title: "AbTeXInstaller"
url: "/AbTeXInstaller/"
date: 2011-08-01T18:37:25Z
pukiwiki: "AbTeXInstaller"
---

# AbTeXInstaller

## [TeX インストーラ 3](http://www.math.sci.hokudai.ac.jp/~abenori/soft/abtexinst.html) {#fa0ee5c0}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## TeX インストーラ 3 とは {#wd4d33ba}

「TeX インストーラ 3」は TeX のインストーラーです。<br>

- [W32TeX](/W32TeX/) (角藤さんのサイトでいう「フルインストール」の内容に相当)
- dviout for Windows
- [Ghostscript](/Ghostscript/)
- [GSview](/Ghostscript/#gsview)
- [TeXworks](/TeXworks/)

をサーバからダウンロードしてインストールします。<br>
環境変数 PATH の設定や TeXworks のショートカットの作成などの作業をユーザーが直接しなくても済みますので，<br>
手軽なインストール方法として活用できると思います。

- [TeX インストーラ 3](http://www.math.sci.hokudai.ac.jp/~abenori/soft/abtexinst.html)

### 動作環境 {#ge54c4b7}

Windows 8.1, 8, 7, Vista, XP

### リリース情報 {#f691af94}

[TeX インストーラ 3](http://www.math.sci.hokudai.ac.jp/~abenori/soft/abtexinst.html) を参照．<br>

<!-- **注意事項 [#bb499d3c] -->

## インストール {#gbf84ff3}

Windows PowerShell または コマンド プロンプトを起動します．<br>
Windows 8.1, 8, 7 は Windows PowerShell が標準搭載されています．<br>

> <table>
> <thead>
> <tr><th style="text-align:center">バージョン</th><th style="text-align:center">Windows PowerShell の起動方法</th></tr>
> </thead>
> <tbody>
> <tr><td>Windows 8.1</td><td>［Windows キー + X キーを押す］または［左下隅を右クリック］-［Windows PowerShell］</td></tr>
> <tr><td>Windows 8</td><td>［Windows キー + Q キーを押す］-［検索］-［テキストボックスに PowerShell を入力］-［Windows PowerShell］</td></tr>
> <tr><td>Windows 7</td><td>［Windows キーを押す］-［プログラムとファイルの検索］-［テキストボックスに PowerShell を入力］-［Windows PowerShell］</td></tr>
> <tr><td>Windows Vista</td><td>［Windows キーを押す］-［検索の開始］-［テキストボックスに PowerShell を入力］-［Windows PowerShell］</td></tr>
> <tr><td>Windows XP</td><td>［スタート］-［すべてのプログラム］-［アクセサリ］-［Windows PowerShell］-［Windows PowerShell］</td></tr>
> </tbody>
> </table>
>

> <table>
> <thead>
> <tr><th style="text-align:center">バージョン</th><th style="text-align:center">コマンド プロンプトの起動方法</th></tr>
> </thead>
> <tbody>
> <tr><td>Windows 8.1</td><td>［Windows キー + Q キーを押す］-［検索］-［テキストボックスに cmd を入力］-［コマンド プロンプト］</td></tr>
> <tr><td>Windows 8</td><td>［Windows キー + X キーを押す］または［左下隅を右クリック］-［コマンド プロンプト］</td></tr>
> <tr><td>Windows 7</td><td>［Windows キーを押す］-［プログラムとファイルの検索］-［テキストボックスに cmd を入力］-［コマンド プロンプト］</td></tr>
> <tr><td>Windows Vista</td><td>［Windows キーを押す］-［検索の開始］-［テキストボックスに cmd を入力］-［コマンド プロンプト］</td></tr>
> <tr><td>Windows XP</td><td>［スタート］-［すべてのプログラム］-［アクセサリ］-［コマンド プロンプト］</td></tr>
> </tbody>
> </table>
>

Windows PowerShell またはコマンド プロンプトに次のように
打ち込んでフォルダー オプションを表示します．<br>

```
control folders
```

表示タブをクリックします．<br>

- 隠しファイル、隠しフォルダーおよび隠しドライブを表示する

を選択します．<br>

- 登録されている拡張子は表示しない
- 保護されたオペレーティング システム ファイルを表示しない (推奨)

のチェックをはずします．<br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>フォルダー オプション</strong></span>　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ 全般　 \]</ins></span><strong>\[ 表示　 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ 検索　 \]</ins></span><br>

　　 フォルダーの表示<br>
　　　　　　　　　　　　この表示方法 (詳細表示やアイコンなど) をこの種類のフォルダーす<br>
　　　　　　　　　　　　べてに適用することができます。<br>
　　　　　　　　　　　　　<span style="color:#888888;background-color:#EEEEEE;">\[　　フォルダーに適用(L)　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[　　フォルダーをリセット(R)　　\]</span><br>

<br>

<br>

　　 詳細設定:<br>
　　　　ファイルおよびフォルダー<br>
　　　　☑ ステータス バーを表示する<br>
　　　　☐ タイトル バーに完全なパスを表示する<br>
　　　　☐ チェックボックスを使用して項目を選択する<br>
　　　　☑ ドライブ文字を表示する<br>
　　　　　ファイルとフォルダーの表示<br>
　　　　　<strong>(●) 隠しファイル、隠しフォルダーおよび隠しドライブを表示する ← 選択する</strong><br>
　　　　　 ◯ 隠しファイル、隠しフォルダーおよび隠しドライブを表示しない<br>
　　　　☑ フォルダーとデスクトップの項目の説明をポップアップで表示する<br>
　　　　☑ フォルダーのヒントにファイル サイズ情報を表示する<br>
　　　　☑ フォルダーの結合の競合を非表示にする<br>
　　　　☑ プレビュー ウィンドウでプレビューのハンドラーを表示する<br>
　　　　　リスト ビューで入力するとき<br>
　　　　　 ◯ 検索ボックスに自動的に入力する<br>
　　　　　(●) 入力した項目をビューで選択する<br>
　　　　☐ ログオン時に以前のフォルダー ウィンドウを表示する<br>
　　　　☑ 暗号化や圧縮された NTFS ファイルをカラーで表示する<br>
　　　　☑ 共有ウィザードを使用する (推奨)<br>
　　　　☑ 空のドライブは表示しない<br>
　　　　☑ 縮小版にファイル アイコンを表示する<br>
　　　　☐ 常にアイコンを表示し、縮小版は表示しない<br>
　　　　☐ 常にメニューを表示する<br>
　　　　<strong>☐ 登録されている拡張子は表示しない ← チェックをはずす</strong><br>
　　　　☐ 別のプロセスでフォルダー ウィンドウを開く<br>
　　　　<strong>☐ 保護されたオペレーティング システム ファイルを表示しない (推奨) ← チェックをはずす</strong><br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　既定値に戻す(D)　　\]</span><br>

***

[TeX インストーラ 3](http://www.math.sci.hokudai.ac.jp/~abenori/soft/abtexinst.html)
から TeXインストーラ3 の最新版をダウンロードして展開 (解凍) します。<br>
展開したフォルダーの "abtexinst.exe" をダブルクリックします。<br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>TeXのインストール</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　　　Windows用TeXの基本的なソフトウェア群である以下をダウンロード&amp;インストール<br>
　　　　します．　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　Change Language　\]</span><br>

<br>

　　　　角藤さんによるW32TeX<br>
　　　　dviout for Windows<br>
　　　　Ghostscript<br>
　　　　GSview<br>
　　　　TeXworks<br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>TeXのインストール</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　　　W32TeXのインストール設定を行います．<br>

<br>

　　　　ファイル保存場所<br>
　　　　<ins>C:\w32tex\download\\</ins><br>
　　　　インストール先<br>
　　　　<ins>C:\w32tex\\</ins><br>
　　　　※ 保存先、インストール先には全角文字やスペースの入ったフォルダ名は使用出来ません．<br>
　　　　URL<br>
　　　　　　<ins>&#x66;tp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/</ins><br> <!-- 　　　　　　%%%&#x66;tp://ftp.kddilabs.jp/TeX/ptex-win32/current/%%%&br; -->
　　　　　　☐一覧以外を使う（↓に入力）<br>
　　　　　　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　高度な設定　　\]</span> ← otf と luatex のパッケージを変更してインストールする場合は \[高度な設定\] をクリック<br>
　　　　☑環境変数PATHに実行ファイルのフォルダを追加する．<br>
　　　　☐ネットワークを使わない．（ローカルのファイルからインストールします．）<br>
　　　　☑ダウンロードをキャッシュから読み込まないようにする．<br>
　　　　　Proxy（HTTPのみ）　空欄ならシステム設定を使います．　　　　　　　　　　Port<br>
　　　　　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins>　　　　<ins>　　　　　</ins><br>

***

デフォルトでは otfbeta がインストールされます。<br>
otf パッケージの最新版は otfbeta です。<br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>W32TeXの高度な設定</strong></span>　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　インストールするファイルを選んでください．<br>
　　　　◯ otf<br>
　　　　◯ otfdevel<br>
　　　 (●) otfbeta<br>

　　　 (●) luatex-w32<br>
　　　　◯ luatex-dev-w32<br>

　　　 (●) luatex-w64<br>
　　　　◯ luatex-dev-w64<br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>dviout, Ghostscript, GSviewのインストール設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　　　dviout，Ghostscript，GSviewのインストール設定を行います．<br>
　　　　dvioutのURL<br> <!-- 　　　　　　　　&color(#888888,#EEEEEE){%%%&#x66;tp://akagi.ms.u-tokyo.ac.jp/pub/TeX/dviout/current/%%%};&br; -->
　　　　　　　　<ins>&#x66;tp://ftp.ring.gr.jp/pub/text/TeX/dviout/</ins><br>
　　　　　　　　☐一覧以外を使う（↓に入力）<br> <!-- 　　　　　　　　☑一覧以外を使う（↓に入力）&br; -->
　　　　　　　　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br> <!-- 　　　　　　　　%%%&#x66;tp://ftp.kddilabs.jp/TeX/dviout/current/%%%&br; -->
　　　　GhostscriptのURL<br> <!-- 　　　　　　　　&color(#888888,#EEEEEE){%%%&#x68;ttp://www.ring.gr.jp/pub/text/TeX/ptex-win32/gs/%%%};&br; -->
　　　　　　　　<ins>&#x66;tp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/gs/</ins><br>
　　　　　　　　☐一覧以外を使う（↓に入力）<br> <!-- 　　　　　　　　☑一覧以外を使う（↓に入力）&br; -->
　　　　　　　　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br> <!-- 　　　　　　　　%%%&#x66;tp://ftp.kddilabs.jp/TeX/ptex-win32/gs/%%%&br; -->
　　　　GSviewのURL<br>
　　　　　　　　<ins>&#x68;ttp://pages.cs.wisc.edu/~ghost/gsview/download/</ins><br>
　　　　　　　　☐一覧以外を使う（↓に入力）<br>
　　　　　　　　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br>

<br>

　　　　※ 保存先，proxy，portの設定はTeXのものを使います．<br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>その他のソフトのインストール設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　　　ダブルクリックで設定画面を開くことができます．<br>
　　　　ソフト名　　　　　｜説明<br>
　　　　TeXworks　　　　　TeXworks の設定<br>

***

デフォルトでは W32TeX のデフォルトの指定を使います。<br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>TeXworks 設定</strong></span>　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　☑ TeXworksのショートカットをデスクトップに作成する<br>
　TeXworks 利用時に埋め込むフォントを指定してください．<br>
　 (●) デフォルトの指定を使います．<br>
　　◯ msmingoth.map（ＭＳ 明朝・ＭＳ ゴシックを用います．）<br>
　　◯ hiragino.map（ヒラギノフォントを用います．）<br>
　　◯ ipaex.map（IPAex フォントを用います．）<br>
　　◯ kozuka.map（小塚明朝・ゴシック Pro を用います．）<br>
　　◯ kozukapr6n.map（小塚明朝・ゴシック Pr6N を用います．）<br>
　　◯ noembed.map（埋め込みません．TeXworks ではＭＳ 明朝のみで表示．）<br>
　　☐ 2004JIS 字形を使う．（デフォルトの指定を選択時は無視されます．）<br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>インストールファイルの選択</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　　ダウンロード&amp;インストールするファイルを選んでください．<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　dviout<br>
　　　W32TeX　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 ∣<ins> ファイル名　　　　　　　　　　　　　　∣ 状態　　∣ サイズ　　</ins>∣<br>
　　　　 ∣<ins> ファイル名　　　　　　　　　　　　　　∣ 状態　　∣ サイズ　　</ins>∣　　　 ∣☑tex318w.zip　　　　　　　　　　　　　　無い　　　2.9MB<br>
　　　　 ∣☑aleph-w32.tar.xz　　　　　　　　　　　無い　　　4.1MB　　　　　　 ∣<br>
　　　　 ∣☑biblatex-biber.tar.xz　　　　　　　　　無い　　　14.8MB　　　　Ghostscript<br>
　　　　 ∣☑context-doc.tar.xz　　　　　　　　　　無い　　　14.0MB　　　　　∣<ins> ファイル名　　　　　　　　　　　　　　∣ 状態　　∣ サイズ　　</ins>∣<br>
　　　　 ∣☑context.tar.xz　　　　　　　　　　　　　無い　　　15.0MB　　　　　∣☐gs707w32full.zip　　　　　　　　　　　無い　　　6.8MB<br>
　　　　 ∣☑cweb-w32.tar.xz　　　　　　　　　　　無い　　　426KB　　　　　　∣☐gs870w32full-gpl.zip　　　　　　　　無い　　　12.5MB<br>
　　　　 ∣☑dvi2ps-w32.tar.xz　　　　　　　　　　 無い　　　447KB　　　　　　∣☐gs871w32full-gpl.zip　　　　　　　　無い　　　16.0MB<br>
　　　　 ∣☑dvi2tty-w32.tar.xz　　　　　　　　　　無い　　　145KB　　　　　　∣☐gs900w32full-gpl.zip　　　　　　　　無い　　　14.4MB<br>
　　　　 ∣☑dvipdfm-w32.tar.xz　　　　　　　　　　無い　　　1.6MB　　　　　　∣☐gs901w32full-gpl.zip　　　　　　　　無い　　　14.8MB<br>
　　　　 ∣☑dvipsk-w32.tar.xz　　　　　　　　　　　無い　　　4.4MB　　　　　　∣☐gs902w32full-gpl.zip　　　　　　　　無い　　　14.8MB<br>
　　　　 ∣☑dvitools-w32.tar.xz　　　　　　　　　　無い　　　1.2MB　　　　　　∣☐gs904w32full-gpl.zip　　　　　　　　無い　　　15.1MB<br>
　　　　 ∣☑jtex-w32.tar.xz　　　　　　　　　　　　 無い　　　1.0MB　　　　　　∣☐gs905w32full-gpl.exe　　　　　　　　無い　　　10.5MB<br>
　　　　 ∣☑latex.tar.xz　　　　　　　　　　　　　　　無い　　　6.7MB　　　　　　∣☐gs906w32full-gpl.exe　　　　　　　　無い　　　10.6MB<br>
　　　　 ∣☑lcdf-typetools-w32.tar.xz　　　　　　無い　　　782KB　　　　　　∣☐gs907w32full-gpl.exe　　　　　　　　無い　　　10.5MB<br>
　　　　 ∣☑ltxpkgs.tar.xz　　　　　　　　　　　　　　無い　　　185MB　　　　　 ∣☑gs908w32full-gpl.exe　　　　　　　　無い　　　10.8MB<br>
　　　　 ∣☑luajittex-w32.tar.xz　　　　　　　　　　無い　　　 3.8MB　　　　　 ∣<br>
　　　　 ∣☑luatex-w32.tar.xz　　　　　　　　　　　無い　　　 9.0MB　　　　GSview<br>
　　　　 ∣☑luatexja.tar.xz　　　　　　　　　　　　　無い　　　2.8MB　　　　　　∣<ins> ファイル名　　　　　　　　　　　　　　∣ 状態　　∣ サイズ　　</ins>∣<br>
　　　　 ∣☑m-tx.tar.xz　　　　　　　　　　　　　　　無い　　　384KB　　　　　 ∣☑gsv50w32.exe　　　　　　　　　　　　無い　　　1.9MB<br>
　　　　 ∣☑makeindex-w32.tar.xz　　　　　　　　 無い　　　203KB　　　　　　∣<br>
　　　　 ∣☑manual.tar.xz　　　　　　　　　　　　　無い　　　1.3MB<br>
　　　　 ∣☑mftools.tar.xz　　　　　　　　　　　　　無い　　　97KB<br>
　　　　 ∣☑omegaj-w32.tar.xz　　　　　　　　   　　無い　　　1.0MB<br>
　　　　 ∣☑otfbeta.tar.xz　　　　　　　　　　 　　 無い　　　239KB<br>
　　　　 ∣☑pdftex-w32.tar.xz　　　　　　　　　　　無い　　　8.7MB<br>
　　　　 ∣☑plain2-2.54-w32.tar.xz　　　　　　　　無い　　　177KB<br>
　　　　 ∣☑platex.tar.xz　　　　　　　　　　　　　　無い　　　93KB<br>
　　　　 ∣☑pmx.tar.xz　　　　　　　　　　　　　　　無い　　　1.9MB<br>
　　　　 ∣☑pstricks.tar.xz　　　　　　　　　　　　無い　　　92.4MB<br>
　　　　 ∣☑psutils-w32.tar.xz　　　　　　　　　　無い　　　85KB<br>
　　　　 ∣☑ptex-w32.tar.xz　　　　　　　　　　　無い　　　4.2MB<br>
　　　　 ∣☑qpdf-w32.tar.xz　　　　　　　　　　　無い　　　698KB<br>
　　　　 ∣☑sam2p-w32.tar.xz　　　　　　　　　　無い　　　538KB<br>
　　　　 ∣☑t1fonts.tar.xz　　　　　　　　　　　　　無い　　　22.9MB<br>
　　　　 ∣☑t1utils-w32.tar.xz　　　　　　　　　　無い　　　119KB<br>
　　　　 ∣☑tex-gyre.tar.xz　　　　　　　　　　　　無い　　　12MB<br>
　　　　 ∣☑tex4htk-w32.tar.xz　　　　　　　　　　無い　　　1.6MB<br>
　　　　 ∣☑texinfotools-w32.tar.xz　　　　　　　無い　　　2.5MB<br>
　　　　 ∣☑tiff2png-w32.tar.xz　　　　　　　　　　無い　　　87KB<br>
　　　　 ∣☑timesnew.tar.xz　　　　　　　　　　　　無い　　　301KB<br>
　　　　 ∣☑ttf2pk-w32.tar.xz　　　　　　　　　　　無い　　　470KB<br>
　　　　 ∣☑ttf2pt1-w32.tar.xz　　　　　　　　　　無い　　　445KB<br>
　　　　 ∣☑txpx-pazofonts.tar.xz　　　　　　　　無い　　　1.6MB<br>
　　　　 ∣☑txtutil.tar.xz　　　　　　　　　　　　　　無い　　　3KB<br>
　　　　 ∣☑ums.tar.xz　　　　　　　　　　　　　　　無い　　　70KB<br>
　　　　 ∣☑uptex-w32.tar.xz　　　　　　　　　　　無い　　　2.1MB<br>
　　　　 ∣☑utf.tar.xz　　　　　　　　　　　　　　　　無い　　　706KB<br>
　　　　 ∣☑vf-a2bk.tar.xz　　　　　　　　　　　　　無い　　　10KB<br>
　　　　 ∣☑vf-n2bk.tar.xz　　　　　　　　　　　　　無い　　　13KB<br>
　　　　 ∣☑web2c-lib.tar.xz　　　　　　　　　　　　無い　　　26.4MB<br>
　　　　 ∣☑web2c-w32.tar.xz　　　　　　　　　　　無い　　　16.0MB<br>
　　　　 ∣☑win64/aleph-w64.tar.xz　　　　　　　無い　　　771KB<br>
　　　　 ∣☑win64/context-w64.tar.xz　　　　　　無い　　　1.1MB<br>
　　　　 ∣☑win64/dvi2ps-w64.tar.xz　　　　　　　無い　　　689KB<br>
　　　　 ∣☑win64/dvi2tty-w64.tar.xz　　　　　　　無い　　　428KB<br>
　　　　 ∣☑win64/dvipdfm-w64.tar.xz　　　　　　無い　　　729KB<br>
　　　　 ∣☑win64/dvipsk-w64.tar.xz　　　　　　　無い　　　601KB<br>
　　　　 ∣☑win64/dvitools-w64.tar.xz　　　　　　無い　　　1.1MB<br>
　　　　 ∣☑win64/jtex-w64.tar.xz　　　　　　　　無い　　　570KB<br>
　　　　 ∣☑win64/luajittex-w64.tar.xz　　　　　 無い　　　2.5MB<br>
　　　　 ∣☑win64/luatex-w64.tar.xz　　　　　　 無い　　　2.5MB<br>
　　　　 ∣☑win64/m-tx-w64.tar.xz　　　　　　　 無い　　　391KB<br>
　　　　 ∣☑win64/makeindex-w64.tar.xz　　　　無い　　　477KB<br>
　　　　 ∣☑win64/mftools-w64.tar.xz　　　　　　無い　　　417KB<br>
　　　　 ∣☑win64/mftrace-w64.tar.xz　　　　　　無い　　　364KB<br>
　　　　 ∣☑win64/omegaj-w64.tar.xz　　　　　　　無い　　　392KB<br>
　　　　 ∣☑win64/pdftex-w64.tar.xz　　　　　　　無い　　　1.8MB<br>
　　　　 ∣☑win64/plain2-2.54-w64.tar.xz　　　　無い　　　45KB<br>
　　　　 ∣☑win64/pmx-w64.tar.xz　　　　　　　　無い　　　576KB<br>
　　　　 ∣☑win64/psutils-w64.tar.xz　　　　　　　無い　　　368KB<br>
　　　　 ∣☑win64/ptex-w64.tar.xz　　　　　　　　無い　　　1.5MB<br>
　　　　 ∣☑win64/sam2p-w64.tar.xz　　　　　　　無い　　　397KB<br>
　　　　 ∣☑win64/t1utils-w64.tar.xz　　　　　　　無い　　　39KB<br>
　　　　 ∣☑win64/tex4htk-w64.tar.xz　　　　　　　無い　　　405KB<br>
　　　　 ∣☑win64/tiff2png-w64.tar.xz　　　　　　　無い　　　93KB<br>
　　　　 ∣☑win64/ttf2pk-w64.tar.xz　　　　　　　無い　　　735KB<br>
　　　　 ∣☑win64/ttf2pt1-w64.tar.xz　　　　　　　無い　　　627KB<br>
　　　　 ∣☑win64/txtutil-w64.tar.xz　　　　　　　無い　　　42KB<br>
　　　　 ∣☑win64/uptex-w64.tar.xz　　　　　　　無い　　　1.4MB<br>
　　　　 ∣☑win64/web2c-w64.tar.xz　　　　　　　無い　　　1.9MB<br>
　　　　 ∣☑win64/xetex-w64.tar.xz　　　　　　　無い　　　7.7MB<br>
　　　　 ∣☑xetex-w32.tar.xz　　　　　　　　　　　無い　　　15.8MB<br>
　　　　 ∣☑xindy-w32.tar.xz　　　　　　　　　　　無い　　　1.6MB<br>
　　　　 ∣☑xypic.tar.xz　　　　　　　　　　　　　　無い　　　4.1MB<br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>その他のソフトウェア</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　　　インストールするソフトウェアにチェックをいれてください．<br>
　　　　ソフト名　　　　　｜説明<br>
　　　　☑TeXworks　　　　TeXworks の設定<br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>インストールの完了</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　　　インストールが終了しました完全な終了の為には再起動が必要です．<br>

<br>

　　　　インストール結果<br>
　　　　W32TeX　　　　　　　　　: 成功<br>
　　　　dviout　　　　　　　　　　 : 成功<br>
　　　　dvioutの設定　　　　　　: 成功<br>
　　　　Ghostscript　　　　　　　: 成功<br>
　　　　GSview　　　　　　　　　 : 成功<br>
　　　　環境変数　　　　　　　　 : 成功<br>
　　　　その他のソフトウェア　 : 成功<br>

<br>

　　　　インストールに失敗した場合はreadme等を参考にして手動インストールを試みてください．<br>
　　　　また詳細なインストール結果及びエラー情報はabtexinst_log.txtに保存されています<br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　<span style="color:Black;"><strong>AbTeXinst.exe</strong></span>　　　　　　　　　　　　</ins></span><br>

<br>

　　再起動が必要です．今すぐ再起動しますか？<br>

<br>

　　　　　　　　　　\[ 　　はい(Y)　　 \]　\[　　いいえ(N)　　\]<br>

***

<!-- 【注意】「TeX インストーラ 3」は確かに手軽なインストーラですが，''「これでしかインストールできない」ようであれば，TeX に手を出す前に「昔はパソコン入門でやっていたようなこと」（ユーザ環境のカスタマイズ，コマンドライン上での作業など）を学んでおいた方が良いでしょう''。 -->
<!--  -->
<!-- 【↑】[[「TeX インストーラ 3」以外のインストーラー>TeX installers for Windows]]のことも時々でいいから思い出してあげてください。 -->

## 参考 {#r85dc0a5}

- [あべのりページ](http://www.math.sci.hokudai.ac.jp/~abenori/) ([阿部紀行さん](http://d.hatena.ne.jp/abenori/) ([twitter](https://twitter.com/abenori)))
    「作ったもの，書いたもの，その他」に TeX のインストーラやシェルなどがあります
    <!-- ↑一次配布元などではないので、このあたりが妥当 -->
    <!-- // 「インストーラの配布元だ」という揚げ足取りはご遠慮ください． -->

- [もう難しいなんて言わせない！たった20分でできる簡単TeXインストールWindows編](http://did2memo.net/2012/04/23/easy-latex-install-windows-201204/), [TeXインストーラでインストールしたソフトウェア一式をアンインストールする方法](http://did2memo.net/2012/04/27/tex-uninstall/)
- [Windows 8にTeXをインストールして使うまでの手順](http://hitgot.org/archives/setting-of-tex-on-win8/)
- [LaTeX2eの設定: Windows](http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/settingwindows.html)
