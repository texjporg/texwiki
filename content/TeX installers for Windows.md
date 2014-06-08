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

- 「install-tl-windows.exe (TeX Live 2013 の場合は install-tl.exe) または install-tl.zip」

がおすすめです。

## install-tl-windows.exe (TeX Live 2013 の場合は install-tl.exe) または install-tl.zip {#g1a25b59}

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
- <strong>インストールする対象</strong>：W32TeX バイナリ，TeXworks
- <strong>ユーザーインターフェース</strong>：CUI（Windows PowerShell, コマンド プロンプト）
- <strong>ネットワーク・ローカルインストール</strong>：ローカルのみ
- <strong>環境変数・レジストリ</strong>：手動（環境変数 PATH）
- <strong>長所</strong>：最もシンプルなインストーラー。自作の PowerShell スクリプトやバッチファイルなどを自分用に用意すれば，他の処理とも連携できます。
- <strong>短所</strong>：GUI
    しか触ったことのない人や，初心者には厳しいかもしれません。初心者の方は install-tl.zip を使ったほうがいいでしょう。

- <strong>参考</strong>：[W32TeX - TeX Wiki](/W32TeX/)

## MiKTeX {#yf4cb922}

- <strong>ウェブサイト</strong>：[MiKTeX Project Page](http://miktex.org/)
- <strong>作者</strong>：Christian Schenk さん
- <strong>初心者オススメ度</strong>：★★★☆☆
- <strong>ライセンス</strong>：フリーウェア
- <strong>インストールする対象</strong>：MiKTeX バイナリ，TeXworks，Ghostscript，yap
- <strong>ユーザーインターフェース</strong>：GUI
- <strong>ネットワーク・ローカルインストール</strong>：Basic Installer, Net Installer, Portable Edition などがあります。ISO Image でローカルインストールもできます。
- <strong>環境変数・レジストリ</strong>：自動（環境変数 PATH，レジストリ）
- <strong>長所</strong>：自動アップデート機能があります。
- <strong>短所</strong>：日本語 (u)pTeX が含まれていません。
- <strong>参考</strong>：[MiKTeX - TeX Wiki](/MiKTeX/)
