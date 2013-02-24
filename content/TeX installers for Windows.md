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

このページでは，Windows 向け（[W32TeX](/W32TeX/), [TeX Live](</TeX Live/>)）の
TeX インストーラを色々な視点から比較してみます。

インストーラは多種多様なものがあってよいですし，
ユーザーの好みやレベルに合ったものを選べばよいでしょう。
インストーラを選ぶときの参考にして下さい。

初心者の方は 「TeX インストーラ 3」 または 「install-tl.bat」がおすすめです。

<!-- 色々と挙げていますが，今の時点では「TeX インストーラ 3」が -->
<!-- 多くのユーザーにとって無難でかつ単純なインストーラではないでしょうか？ -->

<!-- “最も多くのユーザーにとって”というのは，いささか疑問です． -->
<!-- “大半の初心者ユーザにとって”無難で単純というのでしたら， -->
<!-- そうでしょうけれども． -->
<!-- 初心者ではないつもりですが「TeX インストーラ3」を使っています。 -->
<!-- 私の発言は“非初心者でかつ TeX インストーラ3 を用いるユーザ”の -->
<!-- 存在を否定するものなのですか？ そんなことはありませんが？ -->

<!-- TeX の初心者であって，計算機の初心者じゃないこともありますよね? -->

<!-- ''ただし，W32TeX を手動インストールできないような技術レベルであれば，TeX に手を出す前に然るべき技術的基礎を学んでください。'' -->

<!-- 【注意】下記のインストーラの紹介における「初心者オススメ度」というのは -->
<!-- 「''PC 非初心者''だが，TeX は初めて」というユーザ -->
<!-- （つまり，「TeX に関してだけは初心者」というユーザ） -->
<!-- に対するお勧め度と考えるのがよろしいでしょう． -->
<!-- 「PC 初心者」には「TeX に手を出す前に学習すべきこと」が多々あります． -->
<!-- 実際，現時点では，「各種の形式のアーカイブの展開操作」， -->
<!-- 「環境変数の設定などのユーザ環境のカスタマイズ」といった処理ができる， -->
<!-- ということは TeX のようなソフトウェアを用いるための「レディネス」の一部です． -->
<!-- 「そういったことは自力で（手動で）できるが， -->
<!-- ただ単に手間の削減のために各種のインストーラを用いる」というのは結構なことです． -->
<!-- しかし，「然るべき技術的基本をふまえていない状態で， -->
<!-- わからないままインストールしようとする」のは， -->
<!-- 決して勧められたものではありません -->
<!-- （単に，「ユーザ環境の維持に必要な知識をあらかじめ身につけておいてください」 -->
<!-- と言っても構いません）． -->
<!-- もっとも，そういう「技術的基本をふまえていないユーザ」であっても問題なく -->
<!-- 「問題なく使える環境を構築および *維持* できる」ものが用意されれば， -->
<!-- 話は別ですが，今のところそのようなものは存在しません（構築するだけなら， -->
<!-- 下記のインストーラのうちの適当なものを使ってどうにかなるようですが）． -->
<!-- 間違ったことは言っていませんが，どうせ「初心者の味方」に叩かれるでしょう． -->

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
    <!-- dviout の初期設定で，Resolution（解像度）が 600 dpi -->
    <!-- 以上でない（好みの問題ですが……）。 -->
    ファイルの配布方法が変更された場合にうまく動作しなくなる可能性があります。
    <!-- 追加マクロパッケージや関連ツールをインストーラーに対応させたい場合に， -->
    <!-- 専用のプラグイン dll を Visual C++ を起動して， -->
    <!-- ビルドしないといけないので，それなりに知識と経験がないと， -->
    <!-- 追加マクロなどのパッケージを簡単に作成できない． -->

- <strong>備考</strong>： TeX インストーラ 3 ローカル特化バージョンも別途公開されています。
    その他，多数の TeX 関連ツールおよび解説をされています。

- <strong>参考</strong>：TeXWiki:AbTeXInstaller

## install-tl.bat {#g1a25b59}

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

- <strong>備考</strong>： 詳細な設定ができる install-tl-advanced.bat もあります。
- <strong>参考</strong>：[Microsoft Windows - TeX Wiki](</Microsoft Windows/>)

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

<!-- *LabTeX Installer (LabTeXInst.exe) [#o135f7b5] -->
<!-- -''URL'': http://labsoft.web.fc2.com/index.html -->
<!-- -''作者''： 斎藤 卓也さん -->
<!-- -''初心者オススメ度''： &color(#ff9933){★★★★★}; -->
<!-- -''ライセンス''： 個人での使用における使用に制限なし。 -->
<!-- ただし，再配布は同梱の様々なソフトウェアのライセンスを守るように。 -->
<!-- -''インストールする対象''： W32TeX バイナリ，jsclasses，Ghostscript，GSview, DVIOUT -->
<!-- -''ユーザーインターフェース''： GUI -->
<!-- -''ネット・ローカルインストール''： ローカルインストーラ。 -->
<!-- -''環境変数・レジストリ''： 自動（環境変数 PATH） -->
<!-- -''長所''： LabEditor用のTeXインストーラです。LabEditorでの使用を想定していますが、汎用TeXインストーラとしても使えます。 -->
<!-- ローカルインストーラなので、ネットワークにつないでいる必要もなく、またネットワークからダウンロードが失敗してインストールできないということもありません。GhostscriptやDVIOUT等のインストールは解説付きで本来のインストーラを操作させるタイプですので、ブラックボックス化されておらず、自分が何をやっているのか良く分かります。Windows Vistaにも対応しています。 -->
<!-- -''短所''：LabEditorで使用したときに問題が生じないようにインストールが固定化されているため、カスタマイズはほとんどできません。 -->
<!--  -->
<!-- * TeX 環境インストーラ [#k886a93e] -->
<!-- -''URL'': http://www.c.csce.kyushu-u.ac.jp/kb/wiki/?TeX/Windows%BE%E5%A4%C7%A4%CEpLaTeX%A5%A4%A5%F3%A5%B9%A5%C8%A1%BC%A5%EB -->
<!-- -''作者''： 三輪 英樹さん -->
<!-- -''初心者オススメ度''： ★★☆☆☆ -->
<!-- -''ライセンス''： -->
<!-- -''インストールする対象''： W32TeX バイナリの標準インストールまでの -->
<!-- パッケージ，Ghostscript，dviout，emf2eps -->
<!-- -''ユーザーインターフェース''： ダブルクリック後，CUI + dviout 設定は dviout の GUI -->
<!-- -''ネット・ローカルインストール''： ローカルのみ。 -->
<!-- -''環境変数・レジストリ''： 自動（環境変数 PATH），手動（dviout の設定） -->
<!-- -''長所''： -->
<!-- -''短所''： CUI 画面でインストール作業メッセージが出るところに違和感を覚える人もあるかも。 -->
<!-- -''備考''： dviout の初期化設定も，強制的にやらせるようです。 -->
<!--  -->
<!--  -->
<!-- - --  -->
<!-- - LabTeX Installerを追加しました。 - - つちのこ &new{2008-07-04 (金) 17:19:32}; -->
<!--  -->
<!-- #comment -->
