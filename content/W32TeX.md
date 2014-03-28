---
title: "W32TeX"
url: "/W32TeX/"
date: 2014-02-08T20:14:45Z
pukiwiki: "W32TeX"
---

# W32TeX

[Microsoft Windows](</Microsoft Windows/>) > W32TeX

## [W32TeX](http://w32tex.org/) {#ba560630}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## W32TeX とは {#e3db1415}

W32TeX は角藤 亮さんが [Microsoft Windows](</Microsoft Windows/>)[^1] 向けに作成した TeX のディストリビューションです。<br>
W32TeX は Microsoft Windows の
Windows PowerShell
やコマンド プロンプトで使うものですが，マウスによるドラッグ &amp; ドロップに対応させることもできます。<br>
W32TeX についての詳細は公式サイトを参照してください．<br>

- [W32TeX (English page)](http://w32tex.org/index.html)
- [W32TeX (Japanese page)](http://w32tex.org/index-ja.html)
- [W32TeX (Chinese page)](http://w32tex.org/index-zh.html)

### 動作環境 {#hc2aabb4}

W32TeX は Visual C++ 2010 でビルドされているため Windows XP 以降で動作します。<br>

### 更新履歴 {#xe720032}

- [ChangeLog](http://w32tex.org/ChangeLog)

### 統合環境・エディタ {#o7f5ab09}

Windows PowerShell やコマンド プロンプトでの作業が苦手な方は [LyX](/LyX/)，[TeXstudio](/TeXstudio/)，[TeXworks](/TeXworks/) などの [TeX 専用の統合環境・エディタ](</TeX用エディタ/>) を使用すればマウスを使って作業することができます。<br>

[Emacs](/Emacs/)，[Vim](/Vim/)，[Notepad++](/Notepad++/)，[サクラエディタ](</サクラエディタ/>) などのオープンソースの TeX 対応テキストエディタでも TeX ファイルを編集できます．<br>
[Emacs](/Emacs/)，[Vim](/Vim/)，[Notepad++](/Notepad++/)，[サクラエディタ](</サクラエディタ/>) は UTF-8 に対応しています．<br>
TeX ファイルは UTF-8 以外に Shift_JIS（シフト JIS）[^2]，EUC-JP（日本語 EUC），ISO-2022-JP（いわゆる「JIS コード」）などの文字コードが使用されることもあります．<br>
標準のテキストエディタとしてメモ帳 (Notepad) を使っている方にはこの機会に他のテキストエディタへの乗り換えをお薦めします．<br>
ただし Emacs，Vim は初期設定ではショートカットキーなどの操作性がメモ帳とは異なるので，慣れるまでは大変かもしれません．<br>

[Eclipse](/Eclipse/) を使いたい場合は [TeXlipse](/TeXlipse/) がおすすめです．<br>

## フォルダー オプション {#y4579ed3}

Windows PowerShell または コマンド プロンプトを起動します．<br>

> <table>
> <thead>
> <tr><th style="text-align:center">バージョン</th><th style="text-align:center">Windows PowerShell の起動方法</th></tr>
> </thead>
> <tbody>
> <tr><td>Windows 8.1</td><td>［Windows キー + Q キーを押す］-［検索］-［テキストボックスに PowerShell を入力］-［Windows PowerShell］<br>［Windows キー + X キーを押す］または［左下隅を右クリック］-［Windows PowerShell］</td></tr>
> <tr><td>Windows 7</td><td>［Windows キーを押す］-［プログラムとファイルの検索］-［テキストボックスに PowerShell を入力］-［Windows PowerShell］</td></tr>
> </tbody>
> </table>
>

> <table>
> <thead>
> <tr><th style="text-align:center">バージョン</th><th style="text-align:center">コマンド プロンプトの起動方法</th></tr>
> </thead>
> <tbody>
> <tr><td>Windows 8.1</td><td>［Windows キー + Q キーを押す］-［検索］-［テキストボックスに cmd を入力］-［コマンド プロンプト］<br>［Windows キー + X キーを押す］または［左下隅を右クリック］-［コマンド プロンプト］</td></tr>
> <tr><td>Windows 7</td><td>［Windows キーを押す］-［プログラムとファイルの検索］-［テキストボックスに cmd を入力］-［コマンド プロンプト］</td></tr>
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
　　　　　<span style="color:black;background-color:yellow;"><strong>(●) 隠しファイル、隠しフォルダーおよび隠しドライブを表示する ← 選択する</strong></span><br>
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
　　　　<span style="color:black;background-color:yellow;"><strong>☐ 登録されている拡張子は表示しない ← チェックをはずす</strong></span><br>
　　　　☐ 別のプロセスでフォルダー ウィンドウを開く<br>
　　　　<span style="color:black;background-color:yellow;"><strong>☐ 保護されたオペレーティング システム ファイルを表示しない (推奨) ← チェックをはずす</strong></span><br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　既定値に戻す(D)　　\]</span><br>

***

## ダウンロードサイト {#y2ec963e}

ミラーサイトは下記のウェブサイトなどをご利用ください。若干，更新が遅れることがあります．<br>
W32TeX の更新履歴に関しては [ChangeLog](http://w32tex.org/ChangeLog) を参照してください．<br>

### [FTP](https://ja.wikipedia.org/wiki/File_Transfer_Protocol) {#z04bbc8a}

- [Ring Server](http://www.ring.gr.jp/)
    - [ftp://ring.maffin.ad.jp/pub/text/TeX/ptex-win32/current/](ftp://ring.maffin.ad.jp/pub/text/TeX/ptex-win32/current/)
    - [ftp://ring.nict.go.jp/pub/text/TeX/ptex-win32/current/](ftp://ring.nict.go.jp/pub/text/TeX/ptex-win32/current/)
    - [ftp://ring.airnet.ne.jp/pub/text/TeX/ptex-win32/current/](ftp://ring.airnet.ne.jp/pub/text/TeX/ptex-win32/current/)
    - [ftp://ring.shibaura-it.ac.jp/pub/text/TeX/ptex-win32/current/](ftp://ring.shibaura-it.ac.jp/pub/text/TeX/ptex-win32/current/)
    - [ftp://ring.tains.tohoku.ac.jp/pub/text/TeX/ptex-win32/current/](ftp://ring.tains.tohoku.ac.jp/pub/text/TeX/ptex-win32/current/)
    - [ftp://ring.u-toyama.ac.jp/pub/text/TeX/ptex-win32/current/](ftp://ring.u-toyama.ac.jp/pub/text/TeX/ptex-win32/current/)
    - [ftp://ring.yamanashi.ac.jp/pub/text/TeX/ptex-win32/current/](ftp://ring.yamanashi.ac.jp/pub/text/TeX/ptex-win32/current/)
    - [ftp://ring.ix.oita-u.ac.jp/pub/text/TeX/ptex-win32/current/](ftp://ring.ix.oita-u.ac.jp/pub/text/TeX/ptex-win32/current/)
    - [ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/)
    - [ftp://ftp.dnsbalance.ring.gr.jp/pub/text/TeX/ptex-win32/current/](ftp://ftp.dnsbalance.ring.gr.jp/pub/text/TeX/ptex-win32/current/)
    - [ftp://core.ring.gr.jp/pub/text/TeX/ptex-win32/current/](ftp://core.ring.gr.jp/pub/text/TeX/ptex-win32/current/)
        <!-- ftp.kddilabs.jp = ftp.kddlabs.co.jp = ftp.ne.jp -->

- [KDDI研究所](http://www.kddilabs.jp/)
    - [ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/)
    - [ftp://ftp.ne.jp/TeX/ptex-win32/current/](ftp://ftp.ne.jp/TeX/ptex-win32/current/)
- [会津大学](http://www.u-aizu.ac.jp/)
    - [ftp://ftp.u-aizu.ac.jp/pub/tex/ptex-win32/current/](ftp://ftp.u-aizu.ac.jp/pub/tex/ptex-win32/current/)
- [文教大学湘南キャンパス](http://open.shonan.bunkyo.ac.jp/)
    - [ftp://ftp.shonan.bunkyo.ac.jp/pub/TeX/ptex-win32/current/](ftp://ftp.shonan.bunkyo.ac.jp/pub/TeX/ptex-win32/current/)
- [大島研究室](http://akagi.ms.u-tokyo.ac.jp/)（[東京大学](http://www.u-tokyo.ac.jp/) [大学院数理科学研究科](http://www.ms.u-tokyo.ac.jp/)）
    - [ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/win32/](ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/win32/)
- [CTAN](/CTAN/) mirror
    - [ftp://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/](ftp://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/)
    - [ftp://ftp.naist.jp/pub/CTAN/systems/win32/w32tex/](ftp://ftp.naist.jp/pub/CTAN/systems/win32/w32tex/)
    - [ftp://ftp.nara.wide.ad.jp/pub/CTAN/systems/win32/w32tex/](ftp://ftp.nara.wide.ad.jp/pub/CTAN/systems/win32/w32tex/)
    - [ftp://ftp.kddilabs.jp/pub/ctan/systems/win32/w32tex/](ftp://ftp.kddilabs.jp/pub/ctan/systems/win32/w32tex/)
    - [ftp://ftp.ne.jp/pub/ctan/systems/win32/w32tex/](ftp://ftp.ne.jp/pub/ctan/systems/win32/w32tex/)
    - [ftp://ftp.riken.go.jp/pub/CTAN/systems/win32/w32tex/](ftp://ftp.riken.go.jp/pub/CTAN/systems/win32/w32tex/)
    - [ftp://ftp.shonan.bunkyo.ac.jp/pub/TeX/CTAN/systems/win32/w32tex/](ftp://ftp.shonan.bunkyo.ac.jp/pub/TeX/CTAN/systems/win32/w32tex/)
    - [ftp://ftp.nuie.nagoya-u.ac.jp/pub/CTAN/systems/win32/w32tex/](ftp://ftp.nuie.nagoya-u.ac.jp/pub/CTAN/systems/win32/w32tex/)
    - [ftp://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/win32/w32tex/](ftp://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/win32/w32tex/)
    - [ftp://ftp.u-aizu.ac.jp/pub/tex/CTAN/systems/win32/w32tex/](ftp://ftp.u-aizu.ac.jp/pub/tex/CTAN/systems/win32/w32tex/)
    - [ftp://ftp.ring.gr.jp/pub/text/CTAN/systems/win32/w32tex/](ftp://ftp.ring.gr.jp/pub/text/CTAN/systems/win32/w32tex/)
    - [ftp://ftp.dnsbalance.ring.gr.jp/pub/text/CTAN/systems/win32/w32tex/](ftp://ftp.dnsbalance.ring.gr.jp/pub/text/CTAN/systems/win32/w32tex/)
    - [ftp://core.ring.gr.jp/pub/text/CTAN/systems/win32/w32tex/](ftp://core.ring.gr.jp/pub/text/CTAN/systems/win32/w32tex/)

### [HTTP](https://ja.wikipedia.org/wiki/Hypertext_Transfer_Protocol) {#d85efc2e}

- [ctan.ijs.si (in スロベニア)](http://ctan.ijs.si/)
    - [http://ctan.ijs.si/mirror/w32tex/current/](http://ctan.ijs.si/mirror/w32tex/current/)
- [Ring Server](http://www.ring.gr.jp/)
    - [http://ring.maffin.ad.jp/pub/text/TeX/ptex-win32/current/](http://ring.maffin.ad.jp/pub/text/TeX/ptex-win32/current/)
    - [http://ring.nict.go.jp/pub/text/TeX/ptex-win32/current/](http://ring.nict.go.jp/pub/text/TeX/ptex-win32/current/)
    - [http://ring.airnet.ne.jp/pub/text/TeX/ptex-win32/current/](http://ring.airnet.ne.jp/pub/text/TeX/ptex-win32/current/)
    - [http://ring.shibaura-it.ac.jp/pub/text/TeX/ptex-win32/current/](http://ring.shibaura-it.ac.jp/pub/text/TeX/ptex-win32/current/)
    - [http://ring.tains.tohoku.ac.jp/pub/text/TeX/ptex-win32/current/](http://ring.tains.tohoku.ac.jp/pub/text/TeX/ptex-win32/current/)
    - [http://ring.u-toyama.ac.jp/pub/text/TeX/ptex-win32/current/](http://ring.u-toyama.ac.jp/pub/text/TeX/ptex-win32/current/)
    - [http://ring.yamanashi.ac.jp/pub/text/TeX/ptex-win32/current/](http://ring.yamanashi.ac.jp/pub/text/TeX/ptex-win32/current/)
    - [http://ring.ix.oita-u.ac.jp/pub/text/TeX/ptex-win32/current/](http://ring.ix.oita-u.ac.jp/pub/text/TeX/ptex-win32/current/)
    - [http://www.ring.gr.jp/pub/text/TeX/ptex-win32/current/](http://www.ring.gr.jp/pub/text/TeX/ptex-win32/current/)
    - [http://www.dnsbalance.ring.gr.jp/pub/text/TeX/ptex-win32/current/](http://www.dnsbalance.ring.gr.jp/pub/text/TeX/ptex-win32/current/)
    - [http://core.ring.gr.jp/pub/text/TeX/ptex-win32/current/](http://core.ring.gr.jp/pub/text/TeX/ptex-win32/current/)
- [KDDI研究所](http://www.kddilabs.jp/)
    - [http://ftp.kddilabs.jp/TeX/ptex-win32/current/](http://ftp.kddilabs.jp/TeX/ptex-win32/current/)
    - [http://ftp.ne.jp/TeX/ptex-win32/current/](http://ftp.ne.jp/TeX/ptex-win32/current/)
- [CTAN](/CTAN/) mirror
    - [http://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/](http://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/)
    - [http://ftp.naist.jp/pub/CTAN/systems/win32/w32tex/](http://ftp.naist.jp/pub/CTAN/systems/win32/w32tex/)
    - [http://ftp.nara.wide.ad.jp/pub/CTAN/systems/win32/w32tex/](http://ftp.nara.wide.ad.jp/pub/CTAN/systems/win32/w32tex/)
    - [http://ftp.kddilabs.jp/pub/ctan/systems/win32/w32tex/](http://ftp.kddilabs.jp/pub/ctan/systems/win32/w32tex/)
    - [http://ftp.ne.jp/pub/ctan/systems/win32/w32tex/](http://ftp.ne.jp/pub/ctan/systems/win32/w32tex/)
    - [http://ftp.riken.go.jp/pub/CTAN/systems/win32/w32tex/](http://ftp.riken.go.jp/pub/CTAN/systems/win32/w32tex/)
    - [http://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/win32/w32tex/](http://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/win32/w32tex/)
    - [http://mirror.math.kyushu-u.ac.jp/tex-archive/systems/win32/w32tex/](http://mirror.math.kyushu-u.ac.jp/tex-archive/systems/win32/w32tex/)
    - [http://www.ring.gr.jp/pub/text/CTAN/systems/win32/w32tex/](http://www.ring.gr.jp/pub/text/CTAN/systems/win32/w32tex/)
    - [http://www.dnsbalance.ring.gr.jp/pub/text/CTAN/systems/win32/w32tex/](http://www.dnsbalance.ring.gr.jp/pub/text/CTAN/systems/win32/w32tex/)
    - [http://core.ring.gr.jp/pub/text/CTAN/systems/win32/w32tex/](http://core.ring.gr.jp/pub/text/CTAN/systems/win32/w32tex/)
    - [http://mirror.ctan.org/systems/win32/w32tex/](http://mirror.ctan.org/systems/win32/w32tex/)

### [アーカイブ](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%BC%E3%82%AB%E3%82%A4%E3%83%96) {#b9d7db68}

過去のバージョンが欲しい場合は，[兼宗さん](https://twitter.com/kanemune)が以下で提供してくださっています:

- [eplang.jp/w32tex/archive/](http://eplang.jp/w32tex/archive/)

### 注意点 {#s760b9ef}

ダウンロードツールをお使いの場合には，サーバーに迷惑をかけないようにするために同時接続数を1にしてください。

ダウンロードしたら，念のため次のことをご確認ください。

- ファイルの拡張子が正しいか？
    - Internet Explorer などの一部のブラウザやダウンローダは勝手に
        ファイルの拡張子を変えてしまうことがある。
        - e.g. Internet Explorer 11 を使って
            [http://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/](http://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/) から \*.tar.xz ファイルを保存した場合に，

> &#x2a;.tar.xz → \*.tar.tar

のようにファイルの拡張子が変わる。

## 標準インストールで必要なもの {#s4df79fc}

ダウンロードサイトにあるものを全てダウンロードする必要はありません。<br>
一般の用途には次のものだけで充分でしょう。<br>
W32TeX は 32-bit バイナリと 64-bit バイナリがあります。<br>
32-bit バイナリは 32-bit Windows と 64-bit Windows の両方で動作します。<br>
64-bit バイナリは 64-bit Windows でのみ動作します。<br>
64-bit バイナリを使用する場合は、必ず対応する 32-bit 用アーカイブも<br>
入手してください。何故ならば、64-bit 用アーカイブには、バイナリだけしか<br>
入っていないからです。<br>
また、64-bit バイナリは、Ghostscript が必要な場合、64-bit の Ghostscript<br>
を使用するようになっていますから、64-bit の Ghostscript (例えば gs914w64full-gpl.exe)<br>
をインストールしておいて下さい。<br>
頻繁に更新されていますのでバージョン番号は下と異なるかもしれません。<br>

- [00FILES.sjis](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/00FILES.sjis),
    [00FILES.euc](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/00FILES.euc)（解説）

- [ChangeLog](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/ChangeLog)（変更履歴）← W32TeX
    は更新が頻繁に行われるので目を通しておいた方が良いです。

- [texinst2013.zip](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/texinst2013.zip)（簡易インストーラー）
- [unzip.exe](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/unzip.exe)（ZIP 展開ツール）
    - Windows は ZIP 形式の展開に標準で対応しています。[ZIP 形式](https://ja.wikipedia.org/wiki/ZIP_%28%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%29)の展開に対応したソフトウェア[^3]を用いてもかまいません。
    - unzip.exe は TeX Live Win32 版にも含まれています．
- [web2c-lib.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/web2c-lib.tar.xz)（必須）
- [web2c-w32.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/web2c-w32.tar.xz), [web2c-w64.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/web2c-w64.tar.xz)（必須）
- [latex.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/latex.tar.xz)（必須）
- [mftools.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/mftools.tar.xz), [mftools-w64.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/mftools-w64.tar.xz)（必須）
- [pgfcontrib.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/pgfcontrib.tar.xz)（pgf-tikz contributions）
- [ptex-w32.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/ptex-w32.tar.xz), [ptex-w64.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/ptex-w64.tar.xz)（必須）
- [platex.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/platex.tar.xz)（必須）
- [pdftex-w32.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/pdftex-w32.tar.xz), [pdftex-w64.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/pdftex-w64.tar.xz)（必須）（TeX → PDF 変換ツール）
    ([pdfTeX](/pdfTeX/))

- [dvipdfm-w32.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/dvipdfm-w32.tar.xz), [dvipdfm-w64.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/dvipdfm-w64.tar.xz)（DVI → PDF 変換ツール）
- [dvipsk-w32.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/dvipsk-w32.tar.xz), [dvipsk-w64.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/dvipsk-w64.tar.xz)（DVI → [PostScript](/PostScript/) 変換ツール）
- [ltxpkgs.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/ltxpkgs.tar.xz)（[LaTeX](https://mirror.ctan.org/help/Catalogue/entries/latex.html)2e の基本パッケージ集）
- [luatex-w32.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/luatex-w32.tar.xz), [luatex-w64.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/luatex-w64.tar.xz)（TeX → PDF 変換ツール） ([LuaTeX](/LuaTeX/))
- [makeindex-w32.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/makeindex-w32.tar.xz), [makeindex-w64.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/makeindex-w64.tar.xz)（索引作成ツール）
- [manual.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/manual.tar.xz)（マニュアル類……質問する前に読みましょう）
- [newtxpx-boondoxfonts.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/newtxpx-boondoxfonts.tar.xz)（newtx, newpx, boondox フォント）
- [t1fonts.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/t1fonts.tar.xz)（Type 1 フォント）
- [tex-gyre.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/tex-gyre.tar.xz)（tex-gyre フォントと tex-gyre-math フォント）
- [timesnew.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/timesnew.tar.xz)（TimesNewRoman, Arial を使用するためのパッケージ）
- [ttf2pk-w32.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/ttf2pk-w32.tar.xz), [ttf2pk-w64.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/ttf2pk-w64.tar.xz)（TrueType → PK 変換ツール）
- [txpx-pazofonts.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/txpx-pazofonts.tar.xz)（[TX](/newtx/)/[PX](https://mirror.ctan.org/help/Catalogue/entries/pxfonts.html)/[Pazo](https://mirror.ctan.org/help/Catalogue/entries/mathpazo.html) フォント）
- [vf-a2bk.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/vf-a2bk.tar.xz)（[pTeX](https://mirror.ctan.org/help/Catalogue/entries/ptex.html) 用 virtual fonts）
- [xetex-w32.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/xetex-w32.tar.xz), [xetex-w64.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/xetex-w64.tar.xz)（TeX → PDF 変換ツール） ([XeTeX](/XeTeX/))
- [xindy-w32.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/xindy-w32.tar.xz)（Index プロセッサ）
- [xypic.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/xypic.tar.xz)（xypic パッケージ: 可換図などを描くのに便利）

W32TeX のウェブサイトの標準インストールには NTT JTeX
([jtex-w32.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/jtex-w32.tar.xz), [jtex-w64.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/jtex-w64.tar.xz))
も含まれていますが，jlatex を platex のつもりで使うと悲惨ですので，ここでは省略することにします。<br>

## フルインストールで必要なもの {#o32a14ac}

ディスクに余裕がある場合はフルインストールをおすすめします。<br>

[OTF パッケージ](/OTF/)<br>

> otf パッケージを入れておくと，日本語文字の組版をより整えることができるようになります。<br>
> otf パッケージの最新版は otfbeta です。<br>

- [otfbeta.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/otfbeta.tar.xz)（OTF パッケージ［ベータ版］）

[upTeX (内部 Unicode 版 pTeX)](/upTeX,upLaTeX/)<br>

- [uptex-w32.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/uptex-w32.tar.xz), [uptex-w64.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/uptex-w64.tar.xz)

[LaTeX-CJK](/LaTeX-CJK/)<br>

- [cjkzr.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/cjkzr.tar.xz)

[LuaTeX-ja](/LuaTeX-ja/)<br>

- [luatexja.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/luatexja.tar.xz)

LuaJITTeX<br>

- [luajittex-w32.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/luajittex-w32.tar.xz), [luajittex-w64.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/luajittex-w64.tar.xz)

[PSTricks](/PSTricks/)<br>

- [pstricks.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/pstricks.tar.xz)

ユーティリティ類<br>

- [dvitools-w32.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/dvitools-w32.tar.xz), [dvitools-w64.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/dvitools-w64.tar.xz)
- [psutils-w32.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/psutils-w32.tar.xz), [psutils-w64.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/psutils-w64.tar.xz)
- [t1utils-w32.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/t1utils-w32.tar.xz), [t1utils-w64.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/t1utils-w64.tar.xz)
- [ttf2pt1-w32.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/ttf2pt1-w32.tar.xz), [ttf2pt1-w64.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/ttf2pt1-w64.tar.xz)
- [txtutil.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/txtutil.tar.xz), [txtutil-w64.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/txtutil-w64.tar.xz)
- [tiff2png-w32.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/tiff2png-w32.tar.xz), [tiff2png-w64.tar.xz](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/tiff2png-w64.tar.xz)

## インストール {#s5465eba}

インストールは，ダウンロードした \*.tar.xz ファイルを，C:\w32tex\ で展開するだけです。<br>
スペースやマルチバイト文字を含む名前のフォルダー［例えば
"C:\Program&nbsp;Files\W32TeX\\"，C:\日本語テフ\\
など］で展開することは避けてください。<br>
スペースやマルチバイト文字を含むフォルダーにインストールするとうまく動作しない可能性があります。<br>
W32TeX には簡易インストーラーが付属しています。<br>
簡易インストーラーを解凍ソフトで展開する場合は自動フォルダー生成機能は
OFF にしておいてください。<br>
インストールがうまくいきません。<br>
簡易インストーラーは単に \*.tar.xz ファイルを展開するだけなので
Microsoft Windows
のレジストリは変更しません。<br>
W32TeX のアンインストールは単に TeX
をインストールしたトップフォルダー (C:\w32tex\\) 以下を消すだけです。<br>
C:\w32tex\ に展開したあとは「環境変数 PATH の設定」にお進みください。<br>

以下では W32TeX のインストールをコマンドで行う方法を説明します。<br>
W32TeX をインストールするトップフォルダーは C:\w32tex\\
としています[^4]。<br>
C:\w32tex\ 以外の別のフォルダー（ディレクトリ）にインストールする場合には
“C:\w32tex\” の部分を読み替えてください。<br>

1. ハードディスクに適当なフォルダーを作り，適当な名前（例えば temp）を付けます。<br>
    すでに temp というフォルダーがあれば別の名前にします。<br>
    以下ではCドライブに temp というフォルダー (C:\temp\\) を作ったと仮定します。<br>
    これ以外のフォルダーの場合は，以下の “C:\temp” は適当に読み替えてください。<br>

1. temp フォルダーに W32TeX のファイル群をダウンロードします。<br>
    必要なファイルの抜けがないか，よく確認してください。<br>
    ダウンロードソフトによっては，ファイル名を勝手に変えたりファイルを壊したりするようです。<br>
    ファイル名とサイズを確認しながら作業してください。<br>

1. ハードディスク（Cドライブ）に新規フォルダーを作成し，w32tex という名前を付けます。<br>
    新しい W32TeX は w32tex という名前のフォルダーに入れることをお勧めします。<br>
    w32tex というフォルダーがすでに存在する場合，そこに不要な古い W32TeX がインストールされているなら，削除します。<br>

1. Windows PowerShell またはコマンド プロンプトを起動します。<br>
1. Windows PowerShell またはコマンド プロンプトに次のように
    打ち込んで，C:\w32tex\ フォルダーの中に texinst2013.zip を展開します。<br>
    なお，これはダウンロードしたファイル群がCドライブの
    temp というフォルダーに入っている場合です。<br>

    ```
    PS C:\Users\$Env:USERNAME> c:
    PS C:\Users\$Env:USERNAME> cd \w32tex
    PS C:\w32tex> c:\temp\unzip c:\temp\texinst2013.zip
    ```

1. Windows PowerShell またはコマンド プロンプトに次のように打ち込みます。<br>
    なお，これはダウンロードしたファイル群がCドライブの temp というフォルダーに
    入っている場合です。<br>

    ```
    PS C:\w32tex> .\texinst2013 c:/temp
    ```

    沢山のメッセージが出てきますが，メッセージが完全に止まるまで
    閉じたり再起動したりしないでください。<br>
    展開が完了すると以下のメッセージが表示されます。<br>

    ```
    Add
    C:\w32tex\bin
    or
    C:\w32tex\bin64;C:\w32tex\bin
    in the case of 64bit OS
    to user's PATH in the control panel.
    ```

### $TEXMF, $TEXMFMAIN, $TEXMFLOCAL, $TEXMFPROJECTS {#s503cb80}

TeX についての解説を読んでいると，$TEXMF，$TEXMFMAIN，$TEXMFLOCAL，$TEXMFPROJECTS
という単語が出てくることがあります。<br>
<strong>$TEXMFMAIN</strong> とは

TeX をインストールしたフォルダー（ディレクトリ）の中にある
share/texmf-dist というフォルダーのことを指しています。<br>
<strong>$TEXMFDIST</strong> は　<strong>$TEXMFMAIN</strong> と同じです。<br>

<strong>$TEXMFLOCAL</strong> とは

TeX をインストールしたフォルダーの中にある
share/texmf-local というフォルダーのことを指しています。<br>
<strong>$TEXMFPROJECTS</strong> とはTeX をインストールしたフォルダーの中にある

share/texmf-projetcs というフォルダーのことを指しています。<br>
例えば TeX を C:/w32tex/ にインストールしたのなら，

- $TEXMFMAIN = C:/w32tex/share/texmf-dist
- $TEXMFLOCAL = C:/w32tex/share/texmf-local
- $TEXMFPROJECTS = C:/w32tex/share/texmf-projects

となります。<br>
そして <strong>$TEXMF</strong> は
$TEXMFMAIN, $TEXMFLOCAL, $TEXMFPROJECTS のどれか，もしくは全てのことを指しています。<br>

### texmf.cnf の優先順位 {#a06d0a7b}

```
  $SELFAUTOLOC
  $SELFAUTOLOC/share/texmf-local/web2c
  $SELFAUTOLOC/share/texmf-dist/web2c
  $SELFAUTOLOC/share/texmf/web2c
  $SELFAUTOLOC/texmf-local/web2c
  $SELFAUTOLOC/texmf-dist/web2c
  $SELFAUTOLOC/texmf/web2c
  $SELFAUTODIR
  $SELFAUTODIR/share/texmf-local/web2c
  $SELFAUTODIR/share/texmf-dist/web2c
  $SELFAUTODIR/share/texmf/web2c
  $SELFAUTODIR/texmf-local/web2c
  $SELFAUTODIR/texmf-dist/web2c
  $SELFAUTODIR/texmf/web2c
  $SELFAUTOGRANDPARENT/texmf-local/web2c
  $SELFAUTOPARENT
  $SELFAUTOPARENT/share/texmf-local/web2c
  $SELFAUTOPARENT/share/texmf-dist/web2c
  $SELFAUTOPARENT/share/texmf/web2c
  $SELFAUTOPARENT/texmf-local/web2c
  $SELFAUTOPARENT/texmf-dist/web2c
  $SELFAUTOPARENT/texmf/web2c
```

```
  $SELFAUTOLOC:         バイナリディレクトリ
  $SELFAUTODIR:         バイナリディレクトリより1段階上のディレクトリ
  $SELFAUTOPARENT:      バイナリディレクトリより2段階上のディレクトリ
  $SELFAUTOGRANDPARENT: バイナリディレクトリより3段階上のディレクトリ
```

```
  但し、ルートディレクトリに達すると、その上は無いので、
  "ルートディレクトリの上" は、ルートディレクトリに一致する。
```

```
  環境変数 TEXMFCNF を定義していなければ、上の順番で存在する全ての
  texmf.cnf が読まれる。同じ変数定義が複数存在する場合、先に読み込んだ
  定義が有効となる。
```

```
  W32TeX の場合、配布される texmf.cnf は
  $SELFAUTODIR/share/texmf-dist/web2c
  にある。自分専用の texmf.cnf はこれより優先される
  $SELFAUTODIR/share/texmf-local/web2c
  に置いておけばよい。そうすれば、上書きされて専用の設定が消去
  されるようなことは無い。自分専用の texmf.cnf には必要最小限度の
  ことを書いておくこと。配布される texmf.cnf に記述してあることを
  専用の texmf.cnf に記述する必要は無い。
```

## 環境変数 PATH の設定 {#g0475486}

W32TeX は環境変数 PATH を設定する必要があります。<br>
環境変数 PATH を設定するためにシステムのプロパティを起動します。<br>

<table>
<thead>
<tr><th style="text-align:center">バージョン</th><th style="text-align:center">システムのプロパティの起動方法</th></tr>
</thead>
<tbody>
<tr><td>Windows 8.1</td><td>［Windows キー + Q キーを押す］-［検索］-［テキストボックスに SystemPropertiesAdvanced.exe を入力］-［SystemPropertiesAdvanced.exe］</td></tr>
<tr><td>Windows 7</td><td>［Windows キーを押す］-［プログラムとファイルの検索］-［テキストボックスに SystemPropertiesAdvanced.exe を入力］-［SystemPropertiesAdvanced.exe］</td></tr>
</tbody>
</table>

Windows PowerShell またはコマンド プロンプトから

```
SystemPropertiesAdvanced.exe
```

と打ち込んでも OK です．<br>

システムのプロパティの詳細設定タブの環境変数をクリックします．<br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>システムのプロパティ</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<span style="color:Black;background-color:#EEEEEE;"><ins>\[ コンピューター名 \]\[ ハードウェア \]</ins></span><strong>\[ 詳細設定 \]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ システムの保護 \]\[ リモート \]</ins></span><br>

　　 Administrator としてログオンしない場合は、これらのほとんどは変更できません。

　　　パフォーマンス<br>
　　　 視覚効果、プロセッサのスケジュール、メモリ使用、および仮想メモリ<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　設定(S)...　\]</span><br>

　　　ユーザー プロファイル<br>
　　　 サインインに関連したデスクトップ設定<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　設定(E)...　\]</span><br>

　　　起動と回復<br>
　　　 システム起動、システム障害、およびデバッグ情報<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　設定(T)　 \]</span><br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[ 　　　環境変数(N)...　　　 \]</span><br>

***

もしユーザー環境変数またはシステム環境変数に
“TEXMF”，“TEXMFCNF”，“TEXMFMAIN” といった変数が登録されているなら，
削除してください。<br>
次に，ユーザー環境変数のところを見てください。<br>
PATH という欄が
あればそれをクリックして［編集］を押します。<br>
変数値の中に古い TeX への
パス (“;C:\usr\local\bin”，“;C:\tex\bin”，“;C:\ptex\bin” など) があったら削除します。<br>

■ 64-bit バイナリを使用する場合<br>
64-bit バイナリを使用する場合は変数値の最後に<br>
“;C:\w32tex\bin64;C:\w32tex\bin” を追加し，\[OK\] を押します。<br>
PATH が無ければ［新規］を押し，次のように設定してください。<br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　<span style="color:Black;"><strong>ユーザー変数の編集</strong></span>　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

変数名(N):　　　　　　　<ins>PATH</ins><br>
変数値(V):　　　　　　　<ins>C:\w32tex\bin64;C:\w32tex\bin</ins><br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>環境変数</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　　W32TeX のユーザー環境変数(U)<br>

> <table>
> <tbody>
> <tr><td>変数</td><td>値</td></tr>
> <tr><td>PATH</td><td>C:\w32tex\bin64;C:\w32tex\bin</td></tr>
> <tr><td>TEMP</td><td>%USERPROFILE%\AppData\Local\Temp</td></tr>
> <tr><td>TMP</td><td>%USERPROFILE%\AppData\Local\Temp</td></tr>
> </tbody>
> </table>
>

　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　新規(N)...　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[　編集(E)...　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ 　削除(D)　 \]</span><br>

　　システム環境変数(S)<br>
...<br>
　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　新規(W)...　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[　編集(I)...　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ 　削除(L)　 \]</span><br>

***

■ 32-bit バイナリを使用する場合<br>
32-bit バイナリを使用する場合は変数値の最後に<br>
“;C:\w32tex\bin” を追加し，\[OK\] を押します。<br>
PATH が無ければ［新規］を押し，次のように設定してください。<br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　<span style="color:Black;"><strong>ユーザー変数の編集</strong></span>　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

変数名(N):　　　　　　　<ins>PATH</ins><br>
変数値(V):　　　　　　　<ins>C:\w32tex\bin</ins><br>

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>環境変数</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　　W32TeX のユーザー環境変数(U)<br>

> <table>
> <tbody>
> <tr><td>変数</td><td>値</td></tr>
> <tr><td>PATH</td><td>C:\w32tex\bin</td></tr>
> <tr><td>TEMP</td><td>%USERPROFILE%\AppData\Local\Temp</td></tr>
> <tr><td>TMP</td><td>%USERPROFILE%\AppData\Local\Temp</td></tr>
> </tbody>
> </table>
>

　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　新規(N)...　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[　編集(E)...　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ 　削除(D)　 \]</span><br>

　　システム環境変数(S)<br>
...<br>
　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　新規(W)...　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[　編集(I)...　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ 　削除(L)　 \]</span><br>

***

これで \[OK\] を押します。<br>
再起動の必要はありません。<br>
Windows PowerShell やコマンド プロンプトあるいは TeX 関連のソフトウェアを起動している場合は，いったん閉じてください。<br>
自分だけではなくユーザー全員に W32TeX を使わせたい場合は，管理者権限でシステム環境変数に PATH を追加します。

## Ghostscript {#zd901fa9}

[Ghostscript](/Ghostscript/) は [PostScript](/PostScript/)/[PDF](/PDF/) のインタープリタ（ソフトウェア RIP）です。<br>
PS ファイルを PDF ファイルに変換することができます。

もし古い Ghostscript がインストールされている場合は，環境変数 GS_LIB は
必ず削除しておきます（方法は上で説明した 「環境変数 PATH の設定」 の場合と同じです）。

インストールの詳細に関しては

- [Ghostscript/Windows](/Ghostscript/Windows/)

を参照してください。

## [SumatraPDF](/SumatraPDF/) {#g6688c53}

[SumatraPDF - TeX Wiki](/SumatraPDF/) を参照してください．

## テスト {#bfc3538f}

例えばCドライブの C:\work\ というフォルダーを作成して
C:\work\ フォルダーで作業することにしましょう。<br>

Windows PowerShell またはコマンド プロンプトを起動します。

Windows PowerShell の場合は次のように打ち込みます。<br>

```
PS C:\Users\$Env:USERNAME> Set-Location C:\
PS C:\> New-Item work -ItemType Directory
PS C:\> Set-Location work
PS C:\work> New-Item test.tex -ItemType File
PS C:\work> texworks test.tex
```

コマンド プロンプトの場合は次のように打ち込みます。

```
C:\Users\%USERNAME%>cd /d C:\
C:\>mkdir work
C:\>cd work
C:\work>type nul > test.tex
C:\work>texworks test.tex
```

すると [TeXworks](/TeXworks/) が起動します。

次の例をコピーして [TeXworks](/TeXworks/) に貼り付けてください。

***

```
\documentclass[uplatex]{jsarticle}
\begin{document}

ただいまテスト中。

\TeX

\end{document}
```

***

タイプセットを upLaTeX (ptex2pdf) または pdfupLaTeX に設定して Ctrl+T をタイプするとタイプセットが実行されて PDF ファイルが表示されます．<br>

TeXworks をコマンドラインからではなく<br>
デスクトップでダブルクリックして起動したい場合は<br>
C:\w32tex\share\texworks\TeXworks.exe のアイコンを右クリックして<br>
\[送る\]-\[デスクトップ (ショートカットを作成)\] をクリックします．<br>

## 漢字入出力対応状況 {#qc9f2e7d}

コンソールやファイル名等での漢字(日本語)の入出力の対応状況をまとめました(2014/2/8現在)。<br>

<table>
<thead>
<tr><th rowspan="2"> コマンド </th><th rowspan="2"> command_line_encoding </th><th rowspan="2"> コマンドライン<br>入力 </th><th colspan="2"> コンソール入力 </th><th colspan="2"> コンソール出力 </th><th rowspan="2"> 入出力<br>ファイル名 </th><th rowspan="2"> special<br>ファイル名 </th></tr>
<tr><th> キーボード   </th><th> パイプ    </th><th> スクリーン  </th><th> パイプ      </th></tr>
</thead>
<tbody>
<tr><td> p(la)tex.exe </td><td> (無視される)      </td><td> CP932          </td><td> CP932  </td><td> Shift_JIS </td><td>CP932 </td><td> Shift_JIS </td><td> CP932 </td><td> Shift_JIS </td></tr>
<tr><td> p(la)tex.exe -kanji=utf8 </td><td> (無視される)  </td><td> CP932          </td><td> CP932  </td><td> UTF-8 </td><td> CP932(UTF-8) </td><td> UTF-8 </td><td> CP932 </td><td> Shift_JIS </td></tr>
<tr><td> up(la)tex.exe </td><td> utf-8            </td><td> Unicode         </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td></tr>
<tr><td> xe(la)tex.exe </td><td> utf-8            </td><td> Unicode         </td><td> Unicode </td><td> UTF-8 </td><td> Unicode(*) </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td></tr>
<tr><td rowspan="2"> dvipdfmx.exe  </td><td> (空)          </td><td> CP932          </td><td> --- </td><td> --- </td><td> CP932 </td><td> Shift_JIS </td><td> CP932 </td><td> Shift_JIS </td></tr>
<tr><td> utf-8         </td><td> Unicode        </td><td> --- </td><td> --- </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td></tr>
<tr><td> xdvipdfmx.exe </td><td> utf-8         </td><td> Unicode        </td><td> --- </td><td> --- </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td></tr>
<tr><td> xbb.exe       </td><td> utf-8         </td><td> Unicode        </td><td> --- </td><td> --- </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> --- </td></tr>
<tr><td> extractbb.exe </td><td> utf-8         </td><td> Unicode        </td><td> --- </td><td> --- </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> --- </td></tr>
<tr><td rowspan="2"> dvips.exe  </td><td> (空)          </td><td> CP932          </td><td> --- </td><td> --- </td><td> CP932 </td><td> Shift_JIS </td><td> CP932 </td><td> Shift_JIS </td></tr>
<tr><td> utf-8         </td><td> Unicode        </td><td> --- </td><td> --- </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td></tr>
<tr><td> dvi2tty.exe  </td><td> (空)          </td><td> CP932          </td><td> --- </td><td> --- </td><td> CP932 </td><td> Shift_JIS </td><td> CP932 </td><td> Shift_JIS </td></tr>
<tr><td> dvi2tty.exe -Eu </td><td> utf-8         </td><td> Unicode        </td><td> --- </td><td> --- </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td></tr>
<tr><td rowspan="2"> kpsewhich.exe  </td><td rowspan="2"> (-progname=<br>指定先に依存する) </td><td> CP932          </td><td> CP932 </td><td> Shift_JIS </td><td> CP932 </td><td> Shift_JIS </td><td> CP932 </td><td> Shift_JIS </td></tr>
<tr><td> Unicode        </td><td> Unicode </td><td> UTF-8 </td><td> Unicode(*) </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td></tr>
<tr><td> gswin32c.exe<br>gswin64c.exe  </td><td> ---        </td><td> Unicode        </td><td> --- </td><td> --- </td><td> ??? </td><td> ??? </td><td> Unicode </td><td> --- </td></tr>
<tr><td> GSview  </td><td> ---        </td><td> ???        </td><td> --- </td><td> --- </td><td> ??? </td><td> ??? </td><td> CP932 </td><td> --- </td></tr>
</tbody>
</table>

この表は、日本語版Windowsにおけるものです。<br>
ここで、「command_line_encoding」とは、texmf.cnfのオプション設定です。<br>
「コンソール入力」とは、標準入力(STDIN)からの入力、「コンソール出力」とは、標準出力(STDOUT)や標準エラー出力(STDERR)への出力を指します。<br>
「specialファイル名」とは、挿入する画像のファイル名など、special命令によってdviファイルに書き込まれるファイル名の文字コードを指します。<br>
「CP932」「Unicode」は文字集合の意味で、「Shift_JIS」「UTF-8」は文字エンコーディングの意味で用いています。<br>
スクリーンが「Unicode」「CP932(UTF-8)」の場合、(u)p(la)tex.exeでは"-sjis-terminal"オプションにて、その他ではリダイレクトやパイプ経由でutf8prin.exeを使用することで、文字化けせずに表示させることができます。<br>
以下はその例です。<br>

```
C:\work>platex -kanji=utf8 -sjis-terminal sourcename.tex
```

```
C:\work>uplatex -sjis-terminal sourcename.tex
```

```
C:\work>dvipdfmx sourcename.dvi 2>&1 | utf8prin
```

スクリーンが「Unicode(\*)」のものは、そのままでも文字化けせずに表示させることができます。<br>
p(la)texを主に使用される方は、texmf.cnfに

```
command_line_encoding = utf-8
command_line_encoding.dvipdfmx = 
command_line_encoding.dvips = 
```

up(la)texを主に使用される方は、texmf.cnfに

```
command_line_encoding = utf-8
```

と設定するとよいでしょう。<br>
なお、マクロ、パッケージやフォントなどのファイル名はASCIIの範囲にとどめ、漢字(日本語)や他言語のUnicode文字を使用しないことをお勧めします。<br>
文字エンコーディングの齟齬により、ソフトウェアによってはkpathseach経由で探し出すことに失敗するケースがあるためです。<br>
また、p(la)texにおいてspecialの種類によっては0x5cを含むファイル名の場合、失敗することがあります。この場合もASCIIの範囲で使用してください。( → [KANJI file name in special in dvi　(uptex)](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1210))<br>

## 関連リンク {#b5892c8c}

- [W32TeX - Wikipedia](https://ja.wikipedia.org/wiki/W32TeX)
- [W32TeXとは - はてなキーワード](http://d.hatena.ne.jp/keyword/W32TeX)
- [「W32TeX」を含むブログ - はてなキーワード](http://k.hatena.ne.jp/keywordblog/W32TeX)
- [CTAN web interface: package w32tex](http://www.ctan.org/pkg/w32tex)
- [CTAN web interface: Directory listing for /systems/win32/w32tex](http://www.ctan.org/tex-archive/systems/win32/w32tex)
- [USBメモリ活用講座【実践編・W32TeXポータブル化】](http://www.nagaoka-ct.ac.jp/ec/labo/visu/usb/tex/w32tex.shtml)
- [Windows のコマンドプロンプトで空ファイルを作成する方法](http://text.readalittle.net/article.php?id=244)
- [NUL (空のファイル) - DOS コマンド一覧](http://pf-j.sakura.ne.jp/program/dos/doscmd/dev_nul.htm)
- [http://chiebukuro.search.yahoo.co.jp/search?sort=16&p=W32TeX](http://chiebukuro.search.yahoo.co.jp/search?sort=16&p=W32TeX)

[^1]: 64ビットプロセッサ ([x86-64](https://ja.wikipedia.org/wiki/X64)) または 32ビットプロセッサ ([IA-32](https://ja.wikipedia.org/wiki/IA-32)) 環境で動作する Microsoft Windows。
[^2]: 類似する文字コードとして [Windows-31J](http://msdn.microsoft.com/goglobal/cc305152.aspx) があります。この Windows-31J と Shift_JIS は Microsoft Windows 上ではしばしば混同されます。また，Windows-31J は日本語 Microsoft Windows の「メモ帳」では “ANSI” と表示されます。
[^3]: 例えば [7-Zip](http://sevenzip.sourceforge.jp/)，[7-Zip Portable](http://portableapps.com/apps/utilities/7-zip_portable)，[PeaZip](http://peazip.sourceforge.net/)，[Explzh](http://www.ponsoftware.com/)，[LhaForge](http://claybird.sakura.ne.jp/garage/lhaforge/)，[Lhaz](http://chitora.com/lhaz.html) など。
[^4]: C:\w32tex の場合、フロントエンドのプログラムが自動で見つけてくれるチャンスが増えます。
