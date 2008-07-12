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

このページでは，Windows 向け（主に
[W32TeX](http://www.fsci.fuk.kindai.ac.jp/kakuto/win32-ptex/)）の
TeX インストーラを色々な視点から比較してみます。

インストーラは多種多様なものがあってよいですし，
ユーザーの好みやレベルに合ったものを選べばよいでしょう。
インストーラを選ぶときの参考にして下さい。

色々と挙げていますが，今の時点では「TeX インストーラ 3」が
多くのユーザーにとって無難でかつ単純なインストーラではないでしょうか？ <!-- “最も多くのユーザーにとって”というのは，いささか疑問です． --> <!-- “大半の初心者ユーザにとって”無難で単純というのでしたら， --> <!-- そうでしょうけれども． --> <!-- 初心者ではないつもりですが「TeX インストーラ3」を使っています。 --> <!-- 私の発言は“非初心者でかつ TeX インストーラ3 を用いるユーザ”の --> <!-- 存在を否定するものなのですか？ そんなことはありませんが？ -->

<!-- TeX の初心者であって，計算機の初心者じゃないこともありますよね? -->

<strong>ただし，W32TeX を手動インストールできないような技術レベルであれば，TeX に手を出す前に然るべき技術的基礎を学んでください。</strong>

【注意】下記のインストーラの紹介における「初心者オススメ度」というのは
「<strong>PC 非初心者</strong>だが，TeX は初めて」というユーザ
（つまり，「TeX に関してだけは初心者」というユーザ）
に対するお勧め度と考えるのがよろしいでしょう．
「PC 初心者」には「TeX に手を出す前に学習すべきこと」が多々あります．
実際，現時点では，「各種の形式のアーカイブの展開操作」，
「環境変数の設定などのユーザ環境のカスタマイズ」といった処理ができる，
ということは TeX のようなソフトウェアを用いるための「レディネス」の一部です．
「そういったことは自力で（手動で）できるが，
ただ単に手間の削減のために各種のインストーラを用いる」というのは結構なことです．
しかし，「然るべき技術的基本をふまえていない状態で，
わからないままインストールしようとする」のは，
決して勧められたものではありません
（単に，「ユーザ環境の維持に必要な知識をあらかじめ身につけておいてください」
と言っても構いません）．
もっとも，そういう「技術的基本をふまえていないユーザ」であっても問題なく
「問題なく使える環境を構築および \*維持\* できる」ものが用意されれば，
話は別ですが，今のところそのようなものは存在しません（構築するだけなら，
下記のインストーラのうちの適当なものを使ってどうにかなるようですが）． <!-- 間違ったことは言っていませんが，どうせ「初心者の味方」に叩かれるでしょう． -->

## TeX インストーラ 3 (kakuto3.exe) {#w0d7240a}

- <strong>URL</strong>: [http://www.ms.u-tokyo.ac.jp/~abenori/mycreate/](http://www.ms.u-tokyo.ac.jp/~abenori/mycreate/)
- <strong>作者</strong>： 阿部 紀行さん
- <strong>初心者オススメ度</strong>： <span style="color:#ff9933;">★★★★★</span>
- <strong>ライセンス</strong>： ソースは公開されている。
    個人での使用における使用・改変に制限なし。
    ただし，再配布を行う場合に許可が必要。

- <strong>インストールする対象</strong>： W32TeX バイナリ，dviout，Ghostscript，GSview
    （DLL プラグインおよび Ruby スクリプトの追加方式により，jsclasses，xypic，ispell，WinShell）

- <strong>ユーザーインターフェース</strong>： GUI
- <strong>ネット・ローカルインストール</strong>： ネットインストーラ。
    ローカルにも対応しています。

- <strong>環境変数・レジストリ</strong>： 自動（環境変数 PATH，レジストリ）
- <strong>長所</strong>： 『モットーは「誰にでもインストール出来る TeX」』の通りのインストーラ。
    単にサーバーからのダウンロードなので，インストーラ用のパッケージャーが不要。
    おそらく最も汎用性がある，
    多くの Windows の TeX を使う人をカバーするインストーラ。
    専用プラグインは Ruby により，比較的簡単に作成できる。

- <strong>短所</strong>： dviout の初期設定で，Resolution （解像度）が 600 dpi 以上でない
    （好みの問題ですが……）。ファイルのバージョン管理には，それなりの工夫が必要。
    このインストーラの長所はそのまま最大の短所でもあります。
    実際、TeX を用いるための「レディネス」を欠いたユーザですらインストールしてしまえるという弊害があります。
    <!-- 追加マクロパッケージや関連ツールをインストーラーに対応させたい場合に， -->
    <!-- 専用のプラグイン dll を Visual C++ を起動して， -->
    <!-- ビルドしないといけないので，それなりに知識と経験がないと， -->
    <!-- 追加マクロなどのパッケージを簡単に作成できない． -->

- <strong>備考</strong>： TeX インストーラ 3 ローカル特化バージョンも別途公開されています。
    その他，多数の TeX 関連ツールおよび解説をされています。

## texinst {#v558e4b5}

- <strong>URL</strong>: [http://www.fsci.fuk.kindai.ac.jp/kakuto/win32-ptex/](http://www.fsci.fuk.kindai.ac.jp/kakuto/win32-ptex/)
- <strong>作者</strong>： 角藤 亮さん
- <strong>初心者オススメ度</strong>： ★★★☆☆
- <strong>ライセンス</strong>： フリーウェア
- <strong>インストールする対象</strong>： W32TeX バイナリ
- <strong>ユーザーインターフェース</strong>： CUI （コマンドプロンプト）
- <strong>ネット・ローカルインストール</strong>： ローカルのみ
- <strong>環境変数・レジストリ</strong>： 手動（環境変数 PATH）
- <strong>長所</strong>： 最もシンプルなインストーラ。
    自作のバッチファイル update.bat などを自分用に用意すれば，
    他の処理とも連携できます。

- <strong>短所</strong>： Windows の GUI しか触ったことのない人や，
    初心者には厳しいかもしれません。
    しかしながら，最も TeX システムというものを
    TDS (<strong>T</strong>eX <strong>D</strong>irectory <strong>S</strong>tructure) から見せてくれるところがよい。
    初心者の方も勉強だと思って，
    これを用いて TeX 環境を構築されるのが一番良いでしょう。

## TeX 環境インストーラ {#k886a93e}

- <strong>URL</strong>: [http://www.c.csce.kyushu-u.ac.jp/kb/wiki/?TeX/Windows%BE%E5%A4%C7%A4%CEpLaTeX%A5%A4%A5%F3%A5%B9%A5%C8%A1%BC%A5%EB](http://www.c.csce.kyushu-u.ac.jp/kb/wiki/?TeX/Windows%BE%E5%A4%C7%A4%CEpLaTeX%A5%A4%A5%F3%A5%B9%A5%C8%A1%BC%A5%EB)
- <strong>作者</strong>： 三輪 英樹さん
- <strong>初心者オススメ度</strong>： ★★☆☆☆
- <strong>ライセンス</strong>：
- <strong>インストールする対象</strong>： W32TeX バイナリの標準インストールまでの
    パッケージ，Ghostscript，dviout，emf2eps

- <strong>ユーザーインターフェース</strong>： ダブルクリック後，CUI + dviout 設定は dviout の GUI
- <strong>ネット・ローカルインストール</strong>： ローカルのみ。
- <strong>環境変数・レジストリ</strong>： 自動（環境変数 PATH），手動（dviout の設定）
- <strong>長所</strong>：
- <strong>短所</strong>： CUI 画面でインストール作業メッセージが出るところに違和感を覚える人もあるかも。
- <strong>備考</strong>： dviout の初期化設定も，強制的にやらせるようです。

<!-- // 2007 年 12 月末日にて供給終了 -->
<!-- *MyTeX Netinstaller [setup(-ja).exe] [#d5f5ce48] -->
<!-- -''URL'': http://www.math.s.chiba-u.ac.jp/~myamamoto/mytex/mytex.html -->
<!-- -''作者''： 山本 宗宏さん -->
<!-- -''初心者オススメ度''： ★★☆☆☆ -->
<!-- -''ライセンス''： GPL -->
<!-- -''インストールする対象''： W32TeX バイナリ，dviout，Ghostscript， -->
<!-- 様々なクラスファイル・マクロ，関連ツール，TeX 関連のドキュメントなど -->
<!-- （パッケージャーが増えてパッケージが増えれば，どんどん広がる）。 -->
<!-- -''ユーザーインターフェース''： GUI -->
<!-- -''ネット・ローカルインストール''： ネットにもローカルにも対応。 -->
<!-- -''環境変数・レジストリ''： （今のところ，）手動。 -->
<!-- -''長所''： [[Meadow:http://www.meadowy.org/]] や -->
<!-- [[Cygwin:http://www.cygwin.com/]] で見慣れたユーザーインターフェース。 -->
<!-- パッケージャーが増えて MyTeX 用のパッケージ置き場の選択肢が増えれば， -->
<!-- もっと面白くなる！ 豊富な [[CTAN]] のパッケージのインストールが -->
<!-- どれだけ簡単になることか，計り知れません。 -->
<!-- 追加パッケージの作成が，GNU Make と UNIX シェルというテキストベースなので， -->
<!-- 比較的簡単にパッケージ作成ができ， -->
<!-- パッケージに関する様々な情報を付加することや， -->
<!-- パッケージどうしの依存関係も対処することができる。またバージョン管理もできる。 -->
<!-- 特に Windows でなくても，Linux や UNIX，Cygwin などからでも -->
<!-- 開発からパッケージ作成までできる。Ring サーバーから -->
<!-- 最新版 W32TeX バイナリをダウンロードし，（上書きが標準で） -->
<!-- インストールをする専用のカテゴリ _w32tex-{min, std, full} もある。 -->
<!-- -''短所''： （開発者以外の）パッケージャーが基本的に必要です。 -->
<!-- 現段階では GUI のインストーラだとしても，TeX や Windows に関して -->
<!-- 全くの無知の方にとっては使えないインストーラなので， -->
<!-- 初心者にとってやや難しいインストーラとなっています。 -->
<!-- -''備考''： 「何でもかんでも GUI にしない，ブラックボックスにしない」という -->
<!-- 精神が，MyTeX の仕様にも影響しています。 -->

## Cygwin で日本語 TeX {#l3e305ae}

<!-- インストーラは後述の通り，Cygwin Netinstaller そのもの。 -->
<!-- 「Cygwin で日本語 TeX」はプロジェクト名くらいの位置付け。 -->
- <strong>URL</strong>: [http://www.misojiro.t.u-tokyo.ac.jp/~kuroky/tex/](http://www.misojiro.t.u-tokyo.ac.jp/~kuroky/tex/)
- <strong>作者（パッケージ制作者）</strong>： 黒木 裕介さん
    <!-- 長所の項で「パッケージ制作者が増えて」と書かれているので， -->
    <!-- 「作者」の次に「（パッケージ制作者）」と書いておくのがよいかわからない。 -->
    <!-- 「作者」というよりかは「プロジェクトマネージャ」くらいの位置付けか。 -->

- <strong>初心者オススメ度</strong>： ★☆☆☆☆
- <strong>ライセンス</strong>： インストーラは Cygwin Netinstaller をそのまま使っているので GPL。
    <!-- (バイナリ自体も，cygwin1.dll へのリンクが入っているので GPL と定義されるのかもしれません。要調査) -->
    パッケージングスクリプトなど ptetex ソースからの追加分は修正済 BSD
    （ただし「パッケージ制作者が増えて」の分に関しては，各制作者に依る）。
    <!-- ↑黒木氏はスクリプトのライセンスをどうされてるのでしょうか？ -->

- <strong>インストールする対象</strong>： ptetex をコンパイルしたバイナリ
    （pTeX 本体や様々なクラスファイル・マクロ・プレビューアの xdvi）に加え，
    関連ツール（日中韓対応 Ghostscript，ps2jpdf）や追加のマクロなども
    （パッケージ制作者が増えてパッケージが増えれば，どんどん広がる）。

- <strong>ユーザーインターフェース</strong>： GUI (Cygwin Netinstaller)
- <strong>ネット・ローカルインストール</strong>： ネットにもローカルにも対応。
- <strong>環境変数・レジストリ</strong>： 環境変数は自動で設定される。
    レジストリは汚さない方針[^1]。

- <strong>長所</strong>： 日本の UNIX/Linux の定番 TeX ディストリビューション
    ptetex が，Cygwin でもそのまま使える。W32TeX を
    Cygwin で使えるようにする作業などを考える必要がない。all in one と
    言ってよい。パッケージ制作者が増えてパッケージが増えれば，
    もっと面白くなる！ 豊富な [CTAN](/CTAN/) のパッケージのインストールが
    どれだけ簡単になることか，計り知れない。
    追加パッケージ作成はテキストベースなので簡単にできる（参考：
    [Cygwin で 日本語 TeX &mdash; TeX マクロをバイナリ配布するには](http://www.misojiro.t.u-tokyo.ac.jp/~kuroky/tex/package.html)）。

- <strong>短所</strong>： そもそも UNIX 系 OS に馴染みがない人には無縁の世界。Windows しか
    触ったことのない初心者には，かなり高い敷居がある。

- <strong>備考</strong>： 黒木さんのドキュメントは非常に丁寧に書かれていますので，
    一読されると良いでしょう。

## Cygwin JE {#t8ab1da9}

<!-- 詳しい方に後をお譲りします。 -->
- <strong>URL</strong>: [http://sourceforge.jp/projects/cygwin-je/](http://sourceforge.jp/projects/cygwin-je/)
- <strong>作者（パッケージ製作者）</strong>： Rue. SATOH さん
- <strong>初心者オススメ度</strong>： ★☆☆☆☆
- <strong>ライセンス</strong>： インストーラのライセンスは GPL。
- <strong>インストールする対象</strong>： nkf，lha などの日本語環境用のツールが主体。TeX
    関連では，teTeX-2.0 + 日本語化や Ghostscript，xdvi など各種ツールがある。

- <strong>ユーザーインターフェース</strong>： GUI (Cygwin Netinstaller)
- <strong>ネット・ローカルインストール</strong>： ネットにもローカルにも対応。
- <strong>環境変数・レジストリ</strong>：
- <strong>長所</strong>：
- <strong>短所</strong>： teTeX-2.0 ということで，少々古め。
    <strong>開発が止まっている</strong>。
    ソーススクリプトがないパッケージがある（例えば Ghostscript）。
    そもそも UNIX 系 OS に馴染みがない人には無縁の世界。Windows しか
    触ったことのない初心者には，かなり高い敷居がある。

- <strong>備考</strong>： Cygwin の setup.exe に
    [http://cygwin-je.sourceforge.jp/cygwin_je/](http://cygwin-je.sourceforge.jp/cygwin_je/) を追加すると，
    日本語化された各種パッケージがインストールできる。
    その中に teTeX-2.0，Ghostscript，xdvi などが含まれている。

## LabTeX Installer (LabTeXInst.exe) {#o135f7b5}

- <strong>URL</strong>: [http://labsoft.web.fc2.com/index.html](http://labsoft.web.fc2.com/index.html)
- <strong>作者</strong>： 斎藤 卓也さん
- <strong>初心者オススメ度</strong>： <span style="color:#ff9933;">★★★★★</span>
- <strong>ライセンス</strong>： 個人での使用における使用に制限なし。
    ただし，再配布は同梱の様々なソフトウェアのライセンスを守るように。

- <strong>インストールする対象</strong>： W32TeX バイナリ，jsclasses，Ghostscript，GSview, DVIOUT
- <strong>ユーザーインターフェース</strong>： GUI
- <strong>ネット・ローカルインストール</strong>： ローカルインストーラ。
- <strong>環境変数・レジストリ</strong>： 自動（環境変数 PATH）
- <strong>長所</strong>： LabEditor用のTeXインストーラです。LabEditorでの使用を想定していますが、汎用TeXインストーラとしても使えます。
    ローカルインストーラなので、ネットワークにつないでいる必要もなく、またネットワークからダウンロードが失敗してインストールできないということもありません。GhostscriptやDVIOUT等のインストールは解説付きで本来のインストーラを操作させるタイプですので、ブラックボックス化されておらず、自分が何をやっているのか良く分かります。Windows Vistaにも対応しています。

- <strong>短所</strong>：LabEditorで使用したときに問題が生じないようにインストールが固定化されているため、カスタマイズはほとんどできません。

***

- LabTeX Installerを追加しました。 -- つちのこ 2008-07-04 (金) 17:19:32

[^1]: postinstall スクリプトで regtool コマンドあたりを使うと，設定できるらしい。Cygwin 本家からインストールされるパッケージの中には，レジストリの書き込みを行うものがある。
