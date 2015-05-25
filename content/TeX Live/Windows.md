---
title: "TeX Live/Windows"
url: "/TeX Live/Windows/"
date: 2015-05-25T19:48:55Z
pukiwiki: "TeX Live/Windows"
---

# TeX Live/Windows

[TeX Live](</TeX Live/>) > [Windows](</Microsoft Windows/>)

***

***

## インストール {#rc65f8ae}

ネットワークインストーラである install-tl-windows.exe / install-tl.zip と，全てのファイルが入っている ISO イメージからダウンロードする二つの方法があります．どれをもちいてもインストーラの手順はほぼ変わりません．基本的にはネットワークインストーラをもちいるとよいと思いますが，うまく行かない場合などは ISO イメージを試してみてください．

いくつか追加で設定を行っておくと更に便利です．追加設定の項もご覧ください．

### ネットワークインストーラの場合 {#w369638d}

[Installing TeX Live over the Internet](https://www.tug.org/texlive/acquire-netinstall.html) から install-tl-windows.exe または install-tl.zip のどちらかをダウンロードします．

- install-tl-windows.exe の場合はダウンロード後ダブルクリック（全ユーザにインストールする場合は右クリックから「管理者として実行(A)」を選ぶ）
- install-tl.zip の場合は解凍後 install-tl-windows.bat をダブルクリック（全ユーザにインストールする場合は右クリックから「管理者として実行(A)」を選ぶ）
    すればインストーラが起動します．後は指示に従えば自動でインストールがされます．

相当な時間がかかります．環境にもよりますが，一時間では厳しいです．二時間あれば多くの場合は終わるのではないかと思われます．

以下は install-tl-windows.exe をもちいて，また右クリックから「管理者として実行(A)」を選んだ場合の例です．

<a href="/attach/TeX%20Live/Windows/inst1.png"><img src="/attach/TeX%20Live/Windows/inst1.png" alt=""></a>

\[Next >\] を押します．

<a href="/attach/TeX%20Live/Windows/inst2.png"><img src="/attach/TeX%20Live/Windows/inst2.png" alt=""></a>

\[Install\] を押します．

<a href="/attach/TeX%20Live/Windows/inst3.png"><img src="/attach/TeX%20Live/Windows/inst3.png" alt=""></a>

待ちます．

<a href="/attach/TeX%20Live/Windows/inst4.png"><img src="/attach/TeX%20Live/Windows/inst4.png" alt=""></a>

\[次へ→\] を押します．

<a href="/attach/TeX%20Live/Windows/inst5.png"><img src="/attach/TeX%20Live/Windows/inst5.png" alt=""></a>

待ちます．

<a href="/attach/TeX%20Live/Windows/inst6.png"><img src="/attach/TeX%20Live/Windows/inst6.png" alt=""></a>

\[次へ→\] を押します．

<a href="/attach/TeX%20Live/Windows/inst7.png"><img src="/attach/TeX%20Live/Windows/inst7.png" alt=""></a>

\[次へ→\] を押します．

<a href="/attach/TeX%20Live/Windows/inst8.png"><img src="/attach/TeX%20Live/Windows/inst8.png" alt=""></a>

\[導入\] を押します．

<a href="/attach/TeX%20Live/Windows/inst9.png"><img src="/attach/TeX%20Live/Windows/inst9.png" alt=""></a>

インストールが開始されたので待ちます．これが長いです．表示は一時間九分となっていますが，この後数字が伸びて結局一時間二十分かかりました．

<a href="/attach/TeX%20Live/Windows/inst10.png"><img src="/attach/TeX%20Live/Windows/inst10.png" alt=""></a>

こんな感じの画面になったら終了です．\[終了\] を押します．（実は警告が出てしまったので，そのメッセージを隠して表示させています．）

<a href="/attach/TeX%20Live/Windows/inst11.png"><img src="/attach/TeX%20Live/Windows/inst11.png" alt=""></a>

裏にこっそり残っていたこの画面を \[Close\] を押して閉じたらインストールは完了です．

#### 詳細な設定を行う場合 {#l8a32d32}

install-tl.zip を解凍して現れる install-tl-advanced.bat をダブルクリック（または右クリックから「管理者として実行(A)」）するとインストールに関する詳しい設定を行うことができます．

#### テキストモードでのインストール {#f2f98067}

Windows PowerShell またはコマンド プロンプトから install-tl-windows.bat に -nogui オプションをつけて実行することで，テキストモードでのインストールが可能となります．

> .\install-tl-windows.bat -help

でヘルプを参照してください．

### ISO イメージからのインストール {#zc468876}

[Acquiring TeX Live as an ISO image](http://www.tug.org/texlive/acquire-iso.html) から ISO イメージがダウンロードできます．「download from a nearby CTAN mirror」から，texlive2015.iso をダウンロードしてください．
Wndows 7 以前では ISO イメージの中身を見るには追加でソフトウェアが必要です．Windows 8 以降では基本機能で可能となりました．ダブルクリックすると DVD ドライブとしてマウントされます．
中には install-tl-windows.bat がありますので，後はネットワークインストールと同様の手順でインストールが可能です．

### トラブル時 {#s0045851}

途中でエラーが発生した場合には，もう一度実行してみるとよいかもしれません．また，インストールフォルダー（デフォルトではC:\texlive\2015）以下の instal-tl.log にはインストール時の情報が書き込まれています．Forum で相談する際などにも有用です．

TeX Live をインストールするときにウイルス対策ソフトが原因でインストールできない場合はウイルス対策ソフトを無効にしてから TeX Live をインストールしてください．<br>

- [TeX Live へようこそ！](http://www.baldanders.info/spiegel/log2/000698.shtml)
- [「セキュリティソフト」がインストールの障害になっている例](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1226)

以下も参考に．

- [windowsにtexliveをインストール出来ません](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1126)
- [インストーラーの初期化に失敗しました。](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1124)

### 追加設定 {#t30edd37}

以下の設定を自動で行う [abtlinst_patch.exe](http://www.math.sci.hokudai.ac.jp/~abenori/soft/#ABTLINSTPATCH) があります．ダウンロード後ダブルクリックを行えば自動で設定が行われます．（TeX Live のインストール後に実行してください．）

以下は手動で行う方法です．

#### TeXworksの設定 {#wa1faa7d}

LaTeX 用のエディタとして TeXworks が TeX Live とともにインストールされています．<br>
手軽で便利なエディタですので，特にこだわりのエディタがなければ使ってみてください．<br>
スタートメニューから起動することで動きます．<br>
ただし，日本語用の設定が必要です → [TeXworks/設定](</TeXworks/設定/>) をご覧ください．

#### インストールのやり方などの事例 {#w0a33f0d}

- [TeX Live 2015 でアップデートされたパッケージ](http://ichiro-maruta.blogspot.jp/2015/06/tex-live-2015.html)
- [Windows 8.1 における TeX Live 2015 のセットアップ作業のメモ](http://yoshiiz.blog129.fc2.com/blog-entry-826.html)
- [Windows 8.1 における TeX Live 2015 のセットアップ作業のメモ ISO イメージ編](http://yoshiiz.blog129.fc2.com/blog-entry-827.html)
- [TeX Live 2015をWindows 8にインストールする](http://qiita.com/makisyu/items/df20f7d51c2bff90ffd3)

## アップデート {#a6223106}

スタートメニューから 「TeX Live 2015」→「TeX Live Manager」 と起動することで，アップデートが可能です．「導入済のものを全て更新」を押せば更新されます．場合によっては（特にインストール直後などは）かなり時間がかかることもあります．

Windows PowerShell またはコマンド プロンプトから

```
tlmgr update --self --all
```

でも行えます．

ただし，アップデートによってパッケージや設定が変更されて，今まで動いていたものが動かなくなったりすることがあるかもしれません．<br>

- C:\texlive\2015\tlpkg\backups

にパッケージのバックアップが保存されます．<br>
アップデートによって動作しなくなった場合は以前のバージョンに戻してください．<br>

パッケージは

- [tlmgr](/tlmgr/) (コマンドライン)
- [TeX Live Manager](</TeX Live Manager/>) (GUI)

で管理できます．<br>

## 仮想マシン上の Linux への TeX Live のインストール {#s797439a}

[VirtualBox](https://www.virtualbox.org/) などの仮想マシン上に [Linux](/Linux/) をインストールして TeX Live を使用する方法もあります。
Windows を使用していて LaTeX の実行速度が遅い場合は Linux を使用するのも一つの手です。

***

<span style="color:#DAF0FE;background-color:#DAE0FE;"><ins>　　<span style="color:Black;">ファイル(F)</span>　 <span style="color:Black;">仮想マシン(M)</span>　 <span style="color:Black;">ヘルプ(H)</span>　　　　　　　　　　　　　</ins></span><br>

<br>

　　新規(N)　 設定(S)　 起動(T)　 <span style="color:#888888;">破棄</span><br>
<span style="color:White;background-color:#1188FF;">　　　　　Arch Linux　　　　　　　　　　　　　　　　　　</span><br>

　　　　　CentOS<br>
　　　　　Debian<br>
　　　　　Fedora<br>
　　　　　Linux Mint<br>
　　　　　Lubuntu<br>
　　　　　openSUSE<br>
　　　　　Vine Linux<br>

***

<span style="color:Black;background-color:#DAE0FE;"><ins>　　仮想マシン　 ビュー　 デバイス　 ヘルプ　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

```
$ uplatex -v
e-upTeX 3.14159265-p3.6-u1.20-141210-2.6 (utf8.uptex) (TeX Live 2015)
kpathsea version 6.2.1
ptexenc version 1.3.3
Copyright 2015 D.E. Knuth.
There is NO warranty.  Redistribution of this software is
covered by the terms of both the e-upTeX copyright and
the Lesser GNU General Public License.
For more information about these matters, see the file
named COPYING and the e-upTeX source.
Primary author of e-upTeX: Peter Breitenlohner.
```

***
