---
title: "LyX"
url: "/LyX/"
date: 2014-12-15T17:07:54Z
bookCollapseSection: true
pukiwiki: "LyX"
---

# LyX

## [LyX](https://www.lyx.org/) {#odce06b4}

LyX は，LaTeX 文書が出力できるドキュメントプロセッサです．
LyX は，文書の「構造」 (WYSIWYM) に基づいた書き方を支援します．
文書の見た目による (WYSIWYG) 書き方を支援するものではありません．

- [LyX | LyX &ndash; The Document Processor](https://www.lyx.org/)
- [LyX | LyX &ndash; 文書プロセッサ](https://www.lyx.org/WebJa.Home)
- [LyX wiki | LyX / LyX](https://wiki.lyx.org/)
    <!-- - -[[SyncTeX:https://wiki.lyx.org/LyX/SyncTeX]] -->
    <!-- - -[[Logotype:https://wiki.lyx.org/LyX/Logotype]] -->
    <!-- - -[[SplashScreen:https://wiki.lyx.org/LyX/SplashScreen]] -->

- [lyx-devel](https://www.mail-archive.com/lyx-devel@lists.lyx.org/)

***

***

### お知らせ {#o7c8c524}

- LyX 2.5 で日本語入力のかな漢字変換の際に表示される文字列が既存の文章の文字列を上書きして表示していた（[OverTheSpot](https://docs.oracle.com/cd/E19455-01/806-2798/appendixa-16/index.html)）のが上書きせずに表示するように変更されました（[OnTheSpot](https://docs.oracle.com/cd/E19455-01/806-2798/appendixa-6/index.html)）。
    - [What is new in LyX 2.5?#7.  Text editing features](https://wiki.lyx.org/LyX/NewInLyX25#toc7)
    - [明星大学学術機関リポジトリ - LyX におけるOnTheSpot様式の実装](https://meisei.repo.nii.ac.jp/records/2000282)
    - [Introducing OnTheSpot-style input method editing &amp; IME integration](https://git.lyx.org/gitweb/?p=lyx.git;a=commit;h=b9c5f6be5ef617d4776abeeaec4c271410fedcc2)
    - [LyX 2.5 Release Candidate 1 が出ました．](https://x.com/twit_uji/status/1980773216374476955)

### 動作環境 {#xd7ee343}

Windows (x64, Cygwin), macOS, Linux

### LyX の読み方 {#r8403bf4}

- [https://wiki.lyx.org/FAQ/Pronunciation](https://wiki.lyx.org/FAQ/Pronunciation)
- [https://en.wikipedia.org/wiki/LyX#Pronunciation](https://en.wikipedia.org/wiki/LyX#Pronunciation)

によると LyX の開発者は「りっくす」，「りくす」，「りーくす」などと発音しているようですが，結論としては自分の好きなように発音していいようです．

### 特徴 {#safe878b}

- WYSIWYM なので TeX ファイルをタイプセットしなくても視覚的に確認することができます．
- 数式がほぼリアルタイムで表示できるので数式を多用する文書で威力を発揮します．
- 出力結果を細かく調整したい場合は TeX のコードを直接入力することもできます．

## ダウンロード {#x6ddd58f}

[LyX | ダウンロード](http://www.lyx.org/WebJa.Download) からダウンロードできます．

- HTTPS (山形大学 工学部／大学院理工学研究科／大学院有機材料システム研究科)
    - [https://ftp.yz.yamagata-u.ac.jp/pub/lyx/bin/](https://ftp.yz.yamagata-u.ac.jp/pub/lyx/bin/) 安定版のバイナリ
    - [https://ftp.yz.yamagata-u.ac.jp/pub/lyx/stable/](https://ftp.yz.yamagata-u.ac.jp/pub/lyx/stable/) 安定版のソースコード
    - [https://ftp.yz.yamagata-u.ac.jp/pub/lyx/devel/](https://ftp.yz.yamagata-u.ac.jp/pub/lyx/devel/) 開発版のバイナリとソースコード
- HTTPS (プライマリサーバー)
    - [https://ftp.lip6.fr/pub/lyx/bin/](https://ftp.lip6.fr/pub/lyx/bin/) 安定版のバイナリ
    - [https://ftp.lip6.fr/pub/lyx/stable/](https://ftp.lip6.fr/pub/lyx/stable/) 安定版のソースコード
    - [https://ftp.lip6.fr/pub/lyx/devel/](https://ftp.lip6.fr/pub/lyx/devel/) 開発版のバイナリとソースコード

## インストール {#r9ac9b39}

### Windows {#a32278c6}

#### Windows {#yd2a5f14}

<strong>ユーザー アカウント名が Lydia の場合で説明します．</strong>

<strong>Lydia の部分は自分のアカウント名に置き換えてください．</strong>

LyX のインストーラーを右クリックします。

> 　　　<strong>開く(O)</strong><br>
> 　　　...<br>
> <span style="color:Black;background-color:#DAEAFF;">　　　プロパティ(R)　　　　　　　　　　　　　　　　　　　　　　　　</span><br>

\[プロパティ(R)\] を選択します。

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span> <span style="color:White;"><strong>LyX-250rc1-Installer-1-x64.exeのプロパティ</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> 　　<strong>\[ 全般　　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ 互換性 \]\[ セキュリティ \]\[ 詳細　　\]\[ 以前のバージョン \]</ins></span><br>

　　　　<img src="https://raw.githubusercontent.com/cburschka/lyx/refs/heads/master/lib/images/lyx.png" alt="LyX" style="float:left">　
　　　　　　 <ins>LyX-250rc1-Installer-1-x64.exe</ins><br>
　　　　ファイルの種類:　　 アプリケーション (.exe)<br>
　　　　説明:　　　　　　　　　LyX - The Document Processor

<br>

　　　　場所:　　　　　　　　　C:\Users\Lydia\Downloads<br>
　　　　サイズ:　　　　　　　　58.3 MB (61,144,589 バイト)<br>
　　　　ディスク上　　　　　　58.3 MB (61,145,088 バイト)<br>
　　　　のサイズ:<br>

<br>

　　　　作成日時:　　　　　　2025年10月20日、00:00:00<br>
　　　　更新日時:　　　　　　2025年10月20日、00:00:00<br>
　　　　アクセス日時:　　　　2025年10月20日、00:00:00<br>

<br>

　　　　属性:　　　　　　☐読み取り専用(R)　　☐隠しファイル(H)　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 詳細設定(D)... \]</span><br>
　　　　セキュリティ:　　このファイルは他のコンピューターから取得し<br>
　　　　　　　　　　　　 たものです。このコンピューターを保護するた　　☑許可する(K) &lt;-- 許可するをチェックして \[適用(A)\] と \[OK\] をクリック<br>
　　　　　　　　　　　　 め、このファイルへのアクセスはブロックされる<br>
　　　　　　　　　　　　 可能性があります。<br>

<br>

　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　OK　　　　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[　　キャンセル　　\]</span>　<span style="color:Gray;background-color:#EEEEEE;">\[ 　　適用(A)　　 \]</span><br>

☑許可する(K) の状態にして \[適用(A)\] と \[OK\] をクリックします。

<!-- LyX のインストーラーを右クリックします。 -->
<!--  -->
<!-- > -->
<!-- 　　　''開く(O)''&br; -->
<!-- &color(Black,#DAEAFF){　　　管理者として実行(A)　　　　　　　　　　　　　　　　　　　　};&br; -->
<!-- 　　　...&br; -->
<!-- < -->
<!--  -->
<!-- [管理者として実行(A)] を選択して LyX のインストーラーを起動します。 -->

LyX のインストーラーをダブルクリックして起動します。

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span> <span style="color:White;"><strong>LyX 2.5.0 セットアップ</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;">&#x1f5d5;</span> \]<ins></span><span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;">&#x1f5d6;</span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>

　　　　　　　　　　　　　　　　　　　　　 <strong>LyX 2.5.0 セットアップへようこそ</strong><br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　このウィザードが、あなたのLyX導入作業中のご案内をします。<br>
　　　　　　　　　　　　　　　　　　　　　\[次へ\] をクリックし続行します。<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[ 　次へ(N) >　 \]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ 　キャンセル　 \]</span>

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span> <span style="color:White;"><strong>LyX 2.5.0 セットアップ</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;">&#x1f5d5;</span> \]<ins></span><span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;">&#x1f5d6;</span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> 　<strong>使用許諾契約</strong><br>
> 　　LyX 2.5.0 をインストールする前に、ライセンス条件を確認してくださ<br>
> 　　い。<br>
>
> <br>
>
> 　　\[Page Down\] を押し契約をすべてお読みください。<br>
> 　　　　　　　　　　　　<strong>LyX Windows Distribution License Agreement</strong><br>
> 　　...<br>
> 　　誓約のすべての条件に同意するなら、「同意する」を選択しインストールを続行します。LyX 2.5.0 を<br>
> 　　インストールするには、契約に同意する必要があります。<br>
>
> <br>
>
> <br>
>
> 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　&lt; 戻る(B)　 \]</span><span style="color:Black;background-color:#DAEAFF;">\[　同意する(A)　\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ 　キャンセル　 \]</span>

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span> <span style="color:White;"><strong>LyX 2.5.0 セットアップ</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;">&#x1f5d5;</span> \]<ins></span><span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;">&#x1f5d6;</span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> 　<strong>ユーザーの選択</strong><br>
> 　　どのユーザーのために LyX 2.5.0 をインストールするか選択してくださ<br>
> 　　い。<br>
>
> <br>
>
> 　　LyX 2.5.0 を自分自身のためだけにインストールするのか、このコンピューターのすべてのユーザー<br>
> 　　にインストールするのか選択してください。「次へ」をクリックし続行します。<br>
>
> <br>
>
> すべてのユーザーにインストールする場合<br>
> 　　　　　🔘 このコンピューターを使用する全員にインストール &lt;-- <strong>このコンピューターを使用する全員にインストール を選択</strong><br>
> 　　　　　◯ 自分にのみインストール<br>
>
> <br>
>
> 自分にのみインストールする場合<br>
> 　　　　　◯ このコンピューターを使用する全員にインストール<br>
> 　　　　　🔘 自分にのみインストール &lt;-- <strong>自分にのみインストール を選択</strong><br>
>
> <br>
>
> <br>
>
> <br>
>
> 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　&lt; 戻る(B)　 \]</span><span style="color:Black;background-color:#DAEAFF;">\[ 　次へ(N) >　 \]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ 　キャンセル　 \]</span>

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span> <span style="color:White;"><strong>LyX 2.5.0 セットアップ</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;">&#x1f5d5;</span> \]<ins></span><span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;">&#x1f5d6;</span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> 　<strong>インストール先の選択</strong><br>
> 　　LyX 2.5.0 をインストールするフォルダを選択してください。<br>
>
> <br>
>
> 　　LyX 2.5.0 を以下のフォルダにインストールします。別のフォルダにインストールするには、「参照」を<br>
> 　　押しフォルダを選択してください。「次へ」をクリックし続行します。<br>
>
> <br>
>
> <br>
>
> <br>
>
> 　　　インストール先のフォルダ<br>
> 　　　　<ins>C:\Program Files\LyX 2.5</ins> &lt;-- <strong>すべてのユーザーにインストールする場合</strong><br>
> 　　　　<ins>C:\Users\Lydia\AppData\Local\Programs\LyX 2.5</ins> &lt;-- <strong>自分にのみインストールする場合</strong><br>
>
> <br>
>
> 　　必要容量: 283.1 MB<br>
> 　　空き容量: 272.1 GB<br>
> 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　&lt; 戻る(B)　 \]</span><span style="color:Black;background-color:#DAEAFF;">\[ 　次へ(N) >　 \]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ 　キャンセル　 \]</span>

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span> <span style="color:White;"><strong>LyX 2.5.0 セットアップ</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;">&#x1f5d5;</span> \]<ins></span><span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;">&#x1f5d6;</span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> 　<strong>構成要素の選択</strong><br>
> 　　インストールしたい LyX 2.5.0 の機能を選択してください。<br>
>
> <br>
>
> 　　インストールしたい構成要素にチェックしてください。不要なものはチェックを外して下さい。「次へ」<br>
> 　　をクリックし続行します。<br>
>
> <br>
>
> 　　インストールする構成要素を選　　　　　　　　　　　　　　　　　　　　　　　説明<br>
> 　　択：　　　　　　　　　　　　　　　　　　　<span style="color:Green;">☑</span> ファイル関連付け　　　　　　　<span style="color:#888888;background-color:White;">構成要素にマウスカーソ</span><br>
> 　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Green;">☑</span> デスクトップ・アイコン　　　　<span style="color:#888888;background-color:White;">ルを載せると、説明が表</span><br>
> 　　　　　　　　　　　　　　　　　　　　 \[+\]　<span style="color:#EEEEEE;background-color:#888888;">☑</span> 辞書　　　　　　　　　　　　 　 <span style="color:#888888;background-color:White;">示されます。</span><br>
> 　　　　　　　　　　　　　　　　　　　　 \[+\]　☐ シソーラス<br>
>
> <br>
>
> 　　必要容量: 283.1 MB<br>
> 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　&lt; 戻る(B)　 \]</span><span style="color:Black;background-color:#DAEAFF;">\[ 　次へ(N) >　 \]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ 　キャンセル　 \]</span>

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span> <span style="color:White;"><strong>LyX 2.5.0 セットアップ</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;">&#x1f5d5;</span> \]<ins></span><span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;">&#x1f5d6;</span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> 　<strong>スタートメニューのフォルダの選択</strong><br>
> 　　LyX 2.5.0 のショートカットを作成するスタートメニューのフォルダを選<br>
> 　　択してください。<br>
>
> <br>
>
> 　　このプログラムのショートカットを作成したいスタートメニューのフォルダを選択してください。また、新<br>
> 　　規フォルダの名前を入力することもできます。<br>
>
> <br>
>
> 　　<ins>LyX 2.5</ins><br>
>
> <br>
>
> <br>
>
> <br>
>
> <br>
>
> <br>
>
> <br>
>
> 　　☐ ショートカットを作成しない
>
> <br>
>
> 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　&lt; 戻る(B)　 \]</span><span style="color:Black;background-color:#DAEAFF;">\[ 　次へ(N) >　 \]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ 　キャンセル　 \]</span>

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span> <span style="color:White;"><strong>LyX 2.5.0 セットアップ</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;">&#x1f5d5;</span> \]<ins></span><span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;">&#x1f5d6;</span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> 　<strong>LaTeX頒布版</strong><br>
> 　　LyXが使うべきLaTeX頒布版を指定してください。<br>
>
> <br>
>
> 　　　　　ここでは、"latex.exe"ファイルへのパスを指定することができます。そうすることによって、LyXが使<br>
> 　　　　　用すべきLaTeX頒布版を指定することができます。<br>
> 　　　　　もしLaTeXを使わなければ、LyXは文書を出力することができません！<br>
>
> <br>
>
> 　　　　　導入プログラムは、システム上にLaTeX頒布版として"TeXLive"があることを検出しました。下欄に<br>
> 　　　　　はそのパスが表示されています。<br>
>
> <br>
>
> 　　　　"latex.exe"ファイルへのパス<br>
> 　　　　　<ins>C:\texlive\2025\bin\windows</ins><br>
>
> <br>
>
> <br>
>
> 　　　　　☐LaTeXを使用しない
>
> <br>
>
> <br>
>
> 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ 　&lt; 戻る(B)　 \]</span><span style="color:Black;background-color:#DAEAFF;">\[ インストール(I) \]</span>　<span style="color:Black;background-color:#EEEEEE;">\[ 　キャンセル　 \]</span>

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span> <span style="color:White;"><strong>LyX 2.5.0 セットアップ</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;">&#x1f5d5;</span> \]<ins></span><span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;">&#x1f5d6;</span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> 　<strong>インストール</strong><br>
> 　　LyX 2.5.0 をインストール中です。お待ちください。<br>
>
> <br>
>
> <br>
>
> 　　LyXを構成しています (TeXLiveが不足分のパッケージをダウンロードするかもしれないので、時間のかかることがあります) ...<br>
> 　　<span style="color:Black;background-color:#00CC44;">\[　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span><span style="color:Black;background-color:#EEEEEE;">　\]</span><br>
> 　　<span style="color:Black;background-color:#DAEAFF;">\[ 詳細を表示(D) \]</span><br>
>
> <br>
>
> <br>
>
> <br>
>
> <br>
>
> <br>
>
> <br>
>
> 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:#EEEEEE;">\[ 　&lt; 戻る(B)　 \]</span><span style="color:#888888;background-color:#EEEEEE;">\[ 　次へ(N) >　 \]</span>　<span style="color:#888888;background-color:#EEEEEE;">\[ 　キャンセル　 \]</span>

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span> <span style="color:White;"><strong>LyX 2.5.0 セットアップ</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;">&#x1f5d5;</span> \]<ins></span><span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;">&#x1f5d6;</span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>

　　　　　　　　　　　　　　　　　　　　　 <strong>LyX 2.5.0 セットアップの完了</strong><br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　LyX 2.5.0 は、このコンピュータにインストールされました。

　　　　　　　　　　　　　　　　　　　　　「完了」をクリックしセットアップを閉じます。<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　☐LyXを起動する<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　[lyx.orgを開いて最新ニュースやサポート、ヒントなどを入手する](http://www.lyx.org/)<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:#EEEEEE;">\[ 　&lt; 戻る(B)　 \]</span><span style="color:Black;background-color:#DAEAFF;">\[ 　 完了(F) 　 \]</span>　<span style="color:#888888;background-color:#EEEEEE;">\[ 　キャンセル　 \]</span>

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span> <span style="color:White;"><strong>Welcome.lyx (\[examples/ja\]) - LyX</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;">&#x1f5d5;</span> \]<ins></span><span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;">&#x1f5d6;</span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <span style="color:Black;background-color:#DAE0FE;"><ins>　ファイル(F)　 編集(E)　 表示(V)　 挿入(I)　 移動(N)　 文書(D)　 ツール(T)　 ヘルプ(H)　　　　　　　　　　　　　　　　　　 </ins></span><br>
>
> <span style="color:Black;background-color:#EEEEEE;">\[表題　　　　　　ᐯ\]</span>
>
> ![新規文書 [Ctrl+N]](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/buffer-new.png)
> ![文書を開く [Ctrl+O]](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/file-open.png)
> ![文書を保存 [Ctrl+S]](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/buffer-write.png) <!-- &ref(https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/dialog-show_print.png,around,nolink,文書を印刷 [Ctrl+P]); -->
> ![スペルチェック [F7]](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/dialog-show_spellchecker.png)
> ![連続スペルチェック](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/spelling-continuously.png)
> ![元に戻す [Ctrl+Z]](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/undo.png)
> ![やり直す [Ctrl+Y]](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/redo.png)
> ![切り取り [Ctrl+X]](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/cut.png)
> ![コピー [Ctrl+C]](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/copy.png)
> ![貼り付け [Ctrl+V]](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/paste.png)▼
> ![検索・置換 [Ctrl+F]](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/dialog-show_findreplace.png)
> ![検索・置換(詳細)](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/dialog-toggle_findreplaceadv.png)
> ![元の位置に戻る [Ctrl+<]](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/bookmark-goto_0.png)
> ![強調の入切 [Ctrl+E]](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/font-emph.png)
> ![Noun形式の入切 [Alt+C C]](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/font-noun.png)
> ![最近の文辞特性を適用する](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/textstyle-apply.png)▼
> ![特別文辞様式](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/textstyle-apply.png)
> ![数式を挿入](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/math-mode.png)
> ![画像を挿入](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/dialog-show-new-inset_graphics.png)
> ![表を挿入](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/tabular-insert.png)
> ![文書構造を入切](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/dialog-toggle_toc.png)
> ![数式ツールバーを表示](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/toolbar-toggle_math.png)
> ![表ツールバーを表示](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/toolbar-toggle_table.png)
> ![校閲ツールバーを表示](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/toolbar-toggle_table.png)<br>
> ![表示 [Ctrl+R]](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/buffer-view.png)
> ![更新 [Ctrl+Shift+R]](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/buffer-update.png)
> ![親文書を表示 [Ctrl+Alt+R]](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/master-buffer-view.png)
> ![親文書を更新](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/master-buffer-update.png)
> ![出力先検索・原文検索を有効にする](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/buffer-toggle-output-sync.png)
> ![他の形式を表示](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/view-others.png)
> ![他の形式を更新](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/update-others.png)
> ![既定値](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/layout.png)
> ![箇条書き(連番) [Alt+P E]](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/layout_Enumerate.png)
> ![箇条書き(記号) [Alt+P B]](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/layout_Itemize.png)
> ![ラベル一覧 [Alt+P L]](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/layout_List.png)
> ![記述 [Alt+P D]](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/layout_Description.png)
> ![節](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/layout_Section.png)
> ![階層を下げる [Alt+Shift+Right]](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/depth-increment.png)
> ![階層を上げる [Alt+Shift+Left]](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/depth-decrement.png)
> ![図フロートの挿入](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/float-insert_figure.png)
> ![表フロートの挿入](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/float-insert_table.png)
> ![ラベルを挿入](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/label-insert.png)
> ![相互参照を挿入](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/dialog-show-new-inset_ref.png)
> ![書誌情報を挿入](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/dialog-show-new-inset_citation.png)
> ![索引登録](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/index-insert.png)
> ![用語集登録](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/nomencl-insert.png)
> ![脚注を挿入](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/footnote-insert.png)
> ![傍注を挿入](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/marginalnote-insert.png)
> ![LyX注釈を挿入](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/note-insert.png)
> ![ボックスを挿入](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/box-insert.png)
> ![ハイパーリンクを挿入](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/url-insert.png)
> ![TeXコードを挿入 [Ctrl+L]](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/ert-insert.png)
> ![数式マクロを挿入](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/math-macro_newmacroname_newcommand.png)
> ![ファイルを内包する](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/dialog-show-new-inset_include.png)
> ![文辞特性](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/dialog-show_character.png)
> ![段落設定](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/layout-paragraph.png)
> ![類語辞典 [Shift+F7]](https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/thesaurus-entry.png)<br>
>
> <br>
>
> <br>
>
> 　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="font-size:30px">LyXへようこそ！</span><br>
>
> <br>
>
> <br>
>
> 　<span style="font-size:22px"><strong>LyXを使う上でとくに知っておくべき大切なこと</strong></span><br>
>
> <br>
>
> 　　1. LyXには，すばらしい取扱説明書が同梱されています —— これをお使いください！まずメニュー<br>
> 　　　のヘルプ <span style="color:#1188FF;">▷</span> はじめの一歩を開くと，取扱説明書類の簡潔な紹介があります．それからヘル<br>
> 　　　プ <span style="color:#1188FF;">▷</span> 入門篇を読んで，LyXの使い方を学んでください．<br>
>
> <br>
>
> 　　2. 私たちは，LyXを「文書プロセッサ」と呼んでいます．これは——文書の執筆が容易になるよう<br>
> 　　　に——設計思想が，通常のワードプロセッサと異なっています．しかしながら，わずかな違いで<br>
> 　　　すので，恐れるまでもありません．取扱説明書を参照すれば，すべてお分かりになるでしょ<br>
> 　　　う．<br>
>
> <br>
>
> 　　3. LyXの出力は素晴らしいのです！メニューから文書 <span style="color:#1188FF;">▷</span> \[PDF (dvipdfm)\] を表示を選択するか，<br>
> 　　　ツールバーボタンの<img src="https://raw.githubusercontent.com/cburschka/lyx/refs/heads/2.1.x/lib/images/buffer-view.png" alt="表示 [Ctrl+R]" style="float:left">を押して，ご自身で確かめてみてください．<br>
>
> <br>
>
> 　　4. なによりも，LyXは（ほとんど）すべてのLaTeXの機能を実現することができます．さら<br>
> 　　　に，LyXはLaTeXファイルを読み込むこともできます．熟練したLaTeXユーザーの方々は，入門<br>
> 　　　篇の他の部分にはざっと目を通した上で，同篇の「LaTeXユーザーのためのLyX」という節を読ん<br>
> 　　　でください（その他の方々へ：LyXを使うのにLaTeXを知っている必要はありませんので，ご安<br>
> 　　　心ください）．<br>
>
> <br>
>
> 　　5. LyXは，英語以外の言語を読み書きする方のための機能を多く備えています．それだけでな<br>
> 　　　く，キー割当てやツールバー，その他多くの特徴が，たいへん自由に設定可能です．詳しく<br>
> 　　　は、ヘルプ <span style="color:#1188FF;">▷</span> カスタマイズ篇をご覧ください．<br>
>
> <br>
>
> 　　6. LyXのホームページは，[&#x68;ttps://www.lyx....](https://www.lyx.org/WebJa.Home) にあります．LyXの情報を収集したり，LyXメ<br>
> 　　　ーリングリストに加入したり，LyXのグラフィカル・ツアーを見てみるな<br>
> 　　　ど[&#x68;ttps://www.lyx....](https://www.lyx.org/WebJa.Walkthrough)，さまざまなことが提供されています．<br>
>
> <br>
>
> 　　7. <strong>Linux ユーザーへの注釈:</strong> LaTeX頒布のTeX Live用の言語パッケージが導入済みかどうかチェッ<br>
> 　　　クしてください．もしない場合は，LaTeXエラーが発生することになります．<br>
> 　　　例えば，Linux頒布の(K,X)UbuntuおよびDebianでは，ドイツ語用のパッケージ名はtexliv<br>
> 　　　e-lang-germanです．<br>
> 　　　言語パッケージの導入後，LyXメニューからツール <span style="color:#1188FF;">▷</span> 環境構成を実行しなくてはなりません．<br>

#### Cygwin {#gf73e678}

Cygwin 版の LyX は公式サイトの Cygwin 用バイナリ以外に Cygwin のインストーラーからもインストールすることができます．

### macOS {#l288fea5}

macOS 用の dmg ファイルをダブルクリックします．

Homebrew Cask、MacPorts でインストールすることもできます．

#### Homebrew Cask {#se88dc8b}

- [https://formulae.brew.sh/cask/lyx](https://formulae.brew.sh/cask/lyx)

```
brew install --cask lyx
```

#### MacPorts {#q338f601}

- [https://ports.macports.org/port/lyx/](https://ports.macports.org/port/lyx/)

```
sudo port install lyx
```

### Linux {#g8a44f96}

#### Arch Linux {#p780bd78}

- [https://aur.archlinux.org/packages/lyx](https://aur.archlinux.org/packages/lyx)

```
paru -S lyx
```

#### Linux Mint/Debian/Ubuntu {#o9ab2f9b}

- [https://packages.ubuntu.com/search?keywords=lyx](https://packages.ubuntu.com/search?keywords=lyx)
- [https://packages.debian.org/search?keywords=lyx](https://packages.debian.org/search?keywords=lyx)

```
sudo apt install lyx
```

#### Fedora {#e67f26b3}

- [https://rpms.remirepo.net/rpmphp/zoom.php?rpm=lyx](https://rpms.remirepo.net/rpmphp/zoom.php?rpm=lyx)
- [https://packages.fedoraproject.org/pkgs/lyx/lyx/](https://packages.fedoraproject.org/pkgs/lyx/lyx/)

```
sudo dnf install lyx
```

#### openSUSE {#s2677dff}

- [https://software.opensuse.org/package/lyx](https://software.opensuse.org/package/lyx)

```
sudo zypper install lyx
```

## 不具合 {#h17851b4}

- [LyX Bug Tracker](http://www.lyx.org/trac/wiki/BugTrackerHome)

<!-- **Japanese IME: preedit is shown while selecting conversion candidate → LyX 2.4.1 で修正確認 [#r4c8f06e] -->
<!--  -->
<!-- -[[#11723 (Japanese IME: preedit is shown while selecting conversion candidate) – The LyX Project:https://www.lyx.org/trac/ticket/11723]] -->

## 設定 {#ue19dc3a}

[LyX/設定](</LyX/設定/>) を参照

## 使い方 {#m277af28}

[LyX/使い方](</LyX/使い方/>) を参照．

## 関連リンク {#j2a0a89a}

- [Newest &#39;lyx&#39; Questions - TeX - LaTeX - Stack Exchange](http://tex.stackexchange.com/questions/tagged/lyx)
- [TeXインストール | Fluid Dynamics Lab.  Kyoto Univ.](https://fd.kuaero.kyoto-u.ac.jp/ja/lyx_install)
- [2024年版LyXの使い方](https://qiita.com/777shuang/items/b486f70ab252748f2e4f)
- [&#8220;LyX&#8221; の検索結果  |  数学で行こう](https://blog.lets-go-with-math.net/?s=LyX)
- [https://okumuralab.org/tex/mod/forum/search.php?search=LyX&id=2](https://okumuralab.org/tex/mod/forum/search.php?search=LyX&id=2)
- [スタイルファイルの導入～LyXでのレイアウト設定まで\[Win10+texlive+LyX\]](https://qiita.com/merliborn/items/ac0d0a01f056d9e179b5)
- [LyXで日本語を使うようにする設定(Windows)](https://differentialengine.wordpress.com/2018/10/24/lyx%E3%81%A7%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%82%92%E4%BD%BF%E3%81%86%E3%82%88%E3%81%86%E3%81%AB%E3%81%99%E3%82%8B%E8%A8%AD%E5%AE%9Awindows/)
- [https://konno.wordpress.com/?s=LyX](https://konno.wordpress.com/?s=LyX)
- [https://knnlog.wordpress.com/?s=LyX](https://knnlog.wordpress.com/?s=LyX)
- [LyX: LaTeX文書を楽に作成できるツール](http://sci-tech.ksc.kwansei.ac.jp/~yamane/misc.html)
- [日本語環境のためのLyX(TeXをグラフィカルに編集するためのソフト)の初期設定](http://qiita.com/Tats_U_/items/b7d207f6c453899fe29e)
- [LyX &laquo; Konno Log](https://knnlog.wordpress.com/tag/lyx/)
- [Search - LyX - Pseudo Moon](https://www.pseudomoon.jp/dotclear/index.php?q=LyX)
- [LyX - My memory for future](https://sites.google.com/site/mymemoryforfuture/lyx)
- [https://miyazakikenji.wordpress.com/tag/lyx/](https://miyazakikenji.wordpress.com/tag/lyx/)
- [LyX の検索結果 - 跳慮跋考](http://kino.hateblo.jp/search?q=LyX)
- [LyX カテゴリーの記事一覧 - ill-identified diary](https://ill-identified.hatenablog.com/archive/category/LyX)
- [LyX 2.xでUTF-8のプレーンLaTeXファイルを読みこむには](http://www.dbc-works.org/feedback/entry/2014/12/1/)
- [LyX、TeXstudio、Texmakerを少しだけ試用](http://blawat2015.no-ip.com/~mieki256/diary/201409211.html)
- [LyX を使用してグラフィカルな方法で LaTeX 文書を作成する](http://www.ibm.com/developerworks/jp/opensource/library/os-lyx/)
- [Lyx で Beamer](http://hasundue.hatenablog.com/entry/2012/06/17/134329)
- [博士論文の執筆で役に立ったソフトウェア](https://web.archive.org/web/20220420011901/http://blogos.com/article/45299/)
- [LyX HowTo](https://web.archive.org/web/20170802204739/http://www.int.otaru-uc.ac.jp/lyx-howto.aspx/) 横田 宏治 さんによる詳しい解説
- [インド学仏教学における LyX の利用](https://web.archive.org/web/20200808084242/http://skalldan.wordpress.com/2011/12/01/%E3%82%A4%E3%83%B3%E3%83%89%E5%AD%A6%E4%BB%8F%E6%95%99%E5%AD%A6%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B-lyx-%E3%81%AE%E5%88%A9%E7%94%A8/)
- [LyX の導入と Zotero との連携](https://web.archive.org/web/20170710224047/http://skalldan.wordpress.com/2011/11/30/lyx-%E3%81%AE%E5%B0%8E%E5%85%A5%E3%81%A8-zotero-%E3%81%A8%E3%81%AE%E9%80%A3%E6%90%BA/)
- [Lyxを使ってみました](https://mfumi.hatenadiary.org/entry/20090902/1251900233)

### License {#pb9a4019}

- [GPLv2](https://www.lyx.org/License) ([日本語訳](https://www.lyx.org/WebJa.License))
- [git.lyx.org Git - lyx.git/blob - COPYING](https://git.lyx.org/gitweb/?p=lyx.git;a=blob;f=COPYING;hb=HEAD)

### リリース情報 {#k8ba7cf7}

- [LyX | ニュース](https://www.lyx.org/WebJa.News)
- [https://git.lyx.org/gitweb/?p=lyx.git;a=tags](https://git.lyx.org/gitweb/?p=lyx.git;a=tags)

を参照．

### ChangeLog {#uf3685b6}

- [git.lyx.org](https://git.lyx.org/gitweb/?p=lyx.git;a=summary)
    - [shortlog](https://git.lyx.org/gitweb/?p=lyx.git;a=shortlog)
- [timeline](https://www.lyx.org/trac/timeline)
- [https://www.lyx.org/trac/log/lyxgit/](https://www.lyx.org/trac/log/lyxgit/)
- [https://code.launchpad.net/lyx](https://code.launchpad.net/lyx)
    - [https://code.launchpad.net/~lyx-devel/lyx/trunk](https://code.launchpad.net/~lyx-devel/lyx/trunk)
- [https://salsa.debian.org/debian/lyx](https://salsa.debian.org/debian/lyx)
    - [https://salsa.debian.org/debian/lyx/-/commits/debian/latest](https://salsa.debian.org/debian/lyx/-/commits/debian/latest)

<!-- **派生版 [#h5bb137d] -->
