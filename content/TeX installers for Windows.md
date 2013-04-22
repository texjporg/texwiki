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
ユーザーの好みやレベルに合ったものを選べばよいでしょう。
インストーラを選ぶときの参考にして下さい。

初心者の方は 

- TeX Live をインストールする場合は「install-tl.zip」
- W32TeX をインストールする場合は「TeX インストーラ 3」

がおすすめです。

## install-tl.zip {#g1a25b59}

- <strong>ウェブサイト</strong>：[mirror.ctan.org/systems/texlive/tlnet/](http://mirror.ctan.org/systems/texlive/tlnet/)
- <strong>作者</strong>：[TUG](http://www.tug.org/)さん
- <strong>初心者オススメ度</strong>：★★★★★
- <strong>ライセンス</strong>：LPPL, GPL
- <strong>インストールする対象</strong>：TeX Live バイナリ，dviout for Windows，Ghostscript，PS_View，TeXworks
- <strong>ユーザーインターフェース</strong>：GUI
- <strong>ネット・ローカルインストール</strong>：ネットワークインストーラー。ISO ファイルもあります。
- <strong>環境変数・レジストリ</strong>：自動（環境変数 PATH，レジストリ）
- <strong>長所</strong>：パッケージの管理が可能で最新のバージョンに簡単にアップデートできます。
- <strong>短所</strong>：
    サイズが大きいのでインストールする場合は空き容量に注意する必要があります。

- <strong>備考</strong>： install-tl.bat の他に詳細な設定ができる install-tl-advanced.bat もあります。
- <strong>参考</strong>：[Microsoft Windows - TeX Wiki](</Microsoft Windows/>)

## TeX インストーラ 3 (abtexinst.exe) {#w0d7240a}

- <strong>ウェブサイト</strong>：[www.math.sci.hokudai.ac.jp/~abenori/soft/abtexinst.html](http://www.math.sci.hokudai.ac.jp/~abenori/soft/abtexinst.html)
- <strong>作者</strong>：[阿部 紀行](http://www.math.sci.hokudai.ac.jp/~abenori/)さん
- <strong>初心者オススメ度</strong>：★★★★★
- <strong>ライセンス</strong>：修正 BSD（2009/9/10, バージョン 0.75 から）
- <strong>インストールする対象</strong>：W32TeX バイナリ，dviout for Windows，Ghostscript，GSview，TeXworks（DLL プラグインおよび Ruby スクリプトの追加方式により xypic，ispell，WinShell）
- <strong>ユーザーインターフェース</strong>：GUI
- <strong>ネット・ローカルインストール</strong>：ネットインストーラ。ローカルにも対応しています。
- <strong>環境変数・レジストリ</strong>：自動（環境変数 PATH，レジストリ）
- <strong>長所</strong>：『モットーは「誰にでもインストール出来る TeX」』の通りのインストーラ。単にサーバーからのダウンロードなので，インストーラ用のパッケージャーが不要。おそらく最も汎用性がある，多くの Windows の TeX を使う人をカバーするインストーラ。専用プラグインは Ruby により，比較的簡単に作成できる。
- <strong>短所</strong>：
    ファイルの配布方法や W32TeX の内部構造が変更された場合にうまく動作しなくなる可能性があります。

- <strong>備考</strong>： TeX インストーラ 3 ローカル特化バージョンも別途公開されています。
    その他，多数の TeX 関連ツールおよび解説をされています。

- <strong>参考</strong>：TeXWiki:AbTeXInstaller

## texinst {#v558e4b5}

- <strong>ウェブサイト</strong>：[w32tex.org](http://w32tex.org/)
- <strong>作者</strong>：角藤 亮さん
- <strong>初心者オススメ度</strong>：★★★★☆
- <strong>ライセンス</strong>：フリーウェア
- <strong>インストールする対象</strong>：W32TeX バイナリ
- <strong>ユーザーインターフェース</strong>：CUI（コマンド プロンプト）
- <strong>ネット・ローカルインストール</strong>：ローカルのみ
- <strong>環境変数・レジストリ</strong>：手動（環境変数 PATH）
- <strong>長所</strong>：最もシンプルなインストーラ。自作のバッチファイル
    update.bat などを自分用に用意すれば，他の処理とも連携できます。

- <strong>短所</strong>：Microsoft Windows の GUI
    しか触ったことのない人や，初心者には厳しいかもしれません。しかしながら，最も TeX システムというものを [TDS](https://mirror.ctan.org/help/Catalogue/entries/tds.html) (<strong>T</strong>eX <strong>D</strong>irectory <strong>S</strong>tructure) から見せてくれるところがよい。初心者の方も勉強だと思って，これを用いて
    TeX 環境を構築されるのが一番良いでしょう。

- <strong>参考</strong>：[TeXWiki:W32TeX](/W32TeX/)

## Visual Installer for W32TeX {#c70efefe}

- <strong>URL</strong>: [http://www.vector.co.jp/soft/win95/writing/se453191.html](http://www.vector.co.jp/soft/win95/writing/se453191.html)
- <strong>作者</strong>： 安江 正樹さん
- <strong>初心者オススメ度</strong>：
- <strong>ライセンス</strong>：
- <strong>インストールする対象</strong>：W32TeX バイナリ，dviout
- <strong>ユーザーインターフェース</strong>：GUI
- <strong>ネット・ローカルインストール</strong>：
- <strong>環境変数・レジストリ</strong>：
- <strong>長所</strong>：
- <strong>短所</strong>：

## WTeXInst {#e014b4e0}

- <strong>URL</strong>: [http://www2.marukotv.jp/~cil/softland/softland1.htm#WTeXInst](http://www2.marukotv.jp/~cil/softland/softland1.htm#WTeXInst)
- <strong>作者</strong>： 松原 邦彦さん
- <strong>初心者オススメ度</strong>：
- <strong>ライセンス</strong>：
- <strong>インストールする対象</strong>：W32TeX バイナリ
- <strong>ユーザーインターフェース</strong>：GUI
- <strong>ネット・ローカルインストール</strong>：
- <strong>環境変数・レジストリ</strong>：
- <strong>長所</strong>：
- <strong>短所</strong>：

## Infty TeX installer {#fcd5b6b1}

- <strong>URL</strong>: [http://www.fukuoka-edu.ac.jp/~fujimoto/tex.html](http://www.fukuoka-edu.ac.jp/~fujimoto/tex.html)
- <strong>作者</strong>：藤本 光史さん/InftyProjectさん
- <strong>初心者オススメ度</strong>：
- <strong>ライセンス</strong>：フリーウェア
- <strong>インストールする対象</strong>：W32TeX, dviout for Windows, GPL Ghostscript, BaKoMa Fonts, TeXworks
- <strong>ユーザーインターフェース</strong>：GUI
- <strong>ネット・ローカルインストール</strong>：ローカルのみ
- <strong>環境変数・レジストリ</strong>：自動（環境変数 PATH，レジストリ）
- <strong>長所</strong>：TeX初心者が安心して利用できるよう、安定したバージョンをパッケージングしています。環境変数PATHの設定とTeXworksの設定（PDFへの日本語フォント埋め込み設定、拡張子.tex への関連付け、デスクトップへのショートカット作成）を自動で行います。
- <strong>短所</strong>：LuaTeX、XeTeX、upTeXはインストールされません。
- <strong>参考</strong>：[InftyProject](http://www.inftyproject.org/jp/software.html#TeXInstaller)
