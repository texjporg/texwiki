---
title: "TeX installers for Windows"
url: "/TeX installers for Windows/"
date: 2006-08-03T18:08:58Z
pukiwiki: "TeX installers for Windows"
---

# TeX installers for Windows

<!-- テンプレート -->
<!-- * -->
<!-- -''URL'': -->
<!-- -''作者''： -->
<!-- -''初心者オススメ度''： -->
<!-- -''ライセンス''： -->
<!-- -''インストールする対象''： -->
<!-- -''ユーザーインターフェース''： -->
<!-- -''ネット・ローカルインストール''： -->
<!-- -''環境変数・レジストリ''： -->
<!-- -''長所''： -->
<!-- -''短所''： -->
<!-- -''備考''： -->

このページでは，[Microsoft Windows](</Microsoft Windows/>) 向けの
TeX インストーラを色々な視点から比較してみます。

インストーラは多種多様なものがあってよいですし，
ユーザーの好みやレベルに合ったものを選べばよいでしょう。<br>
インストーラを選ぶときの参考にして下さい。<br>

初心者の方は 

- 「install-tl-windows.zip (TeX Live 2013 の場合は install-tl.zip)」

がおすすめです。

## install-tl-windows.zip (TeX Live 2013 の場合は install-tl.zip) {#g1a25b59}

- <strong>ウェブサイト</strong>：[mirror.ctan.org/systems/texlive/tlnet/](http://mirror.ctan.org/systems/texlive/tlnet/)
- <strong>作者</strong>：[TUG](http://www.tug.org/)さん
- <strong>初心者オススメ度</strong>：★★★★★
- <strong>ライセンス</strong>：LPPL, GPL
- <strong>インストールする対象</strong>：TeX Live バイナリ，TeXworks，Ghostscript，PS_View，dviout for Windows
- <strong>ユーザーインターフェース</strong>：GUI, CUI（Windows PowerShell, コマンド プロンプト）
- <strong>ネットワーク・ローカルインストール</strong>：ネットワークインストーラー。TeX Live はネットワークインストールが推奨されています。ISO ファイルでローカルインストールもできます。
- <strong>環境変数・レジストリ</strong>：自動（環境変数 PATH，レジストリ）
- <strong>長所</strong>：パッケージの管理が可能で最新のバージョンに簡単にアップデートできます。
- <strong>短所</strong>：
    サイズが大きいのでインストールする場合は空き容量に注意する必要があります。

- <strong>備考</strong>： install-tl-windows.bat (TeX Live 2013 の場合は install-tl.bat) の他に詳細な設定ができる install-tl-advanced.bat もあります。
- <strong>参考</strong>：[Microsoft Windows - TeX Wiki](</Microsoft Windows/>)

## texinst {#v558e4b5}

- <strong>ウェブサイト</strong>：[w32tex.org](http://w32tex.org/)
- <strong>作者</strong>：角藤 亮さん
- <strong>初心者オススメ度</strong>：★★★★☆
- <strong>ライセンス</strong>：フリーウェア
- <strong>インストールする対象</strong>：W32TeX バイナリ
- <strong>ユーザーインターフェース</strong>：CUI（Windows PowerShell, コマンド プロンプト）
- <strong>ネットワーク・ローカルインストール</strong>：ローカルのみ
- <strong>環境変数・レジストリ</strong>：手動（環境変数 PATH）
- <strong>長所</strong>：最もシンプルなインストーラー。自作の PowerShell スクリプトやバッチファイルなどを自分用に用意すれば，他の処理とも連携できます。
- <strong>短所</strong>：GUI
    しか触ったことのない人や，初心者には厳しいかもしれません。初心者の方は install-tl.zip を使ったほうがいいでしょう。

- <strong>参考</strong>：[W32TeX - TeX Wiki](/W32TeX/)

## TeX インストーラ 3 (abtexinst.exe) {#w0d7240a}

- <strong>ウェブサイト</strong>：[www.math.sci.hokudai.ac.jp/~abenori/soft/abtexinst.html](http://www.math.sci.hokudai.ac.jp/~abenori/soft/abtexinst.html)
- <strong>作者</strong>：[阿部 紀行](http://www.math.sci.hokudai.ac.jp/~abenori/)さん
- <strong>初心者オススメ度</strong>：★★★★☆
- <strong>ライセンス</strong>：修正 BSD（2009/9/10, バージョン 0.75 から）
- <strong>インストールする対象</strong>：W32TeX バイナリ，TeXworks，Ghostscript，GSview，dviout for Windows（DLL プラグインおよび Ruby スクリプトの追加方式により ispell，WinShell）
- <strong>ユーザーインターフェース</strong>：GUI
- <strong>ネットワーク・ローカルインストール</strong>：ネットワークインストーラー。ローカルにも対応しています。
- <strong>環境変数・レジストリ</strong>：自動（環境変数 PATH，レジストリ）
- <strong>長所</strong>：『モットーは「誰にでもインストール出来る TeX」』の通りのインストーラ。単にサーバーからのダウンロードなので，インストーラ用のパッケージャーが不要。専用プラグインは Ruby により，比較的簡単に作成できる。
- <strong>短所</strong>：
    W32TeX の仕様が変更された場合にうまく動作しなくなる可能性があります。

- <strong>備考</strong>： TeX インストーラ 3 ローカル特化バージョンも別途公開されています。
    その他，多数の TeX 関連ツールおよび解説をされています。

- <strong>参考</strong>：AbTeXInstaller - TeX Wiki
