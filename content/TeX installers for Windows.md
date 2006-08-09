---
title: "TeX installers for Windows"
url: "/TeX installers for Windows/"
date: 2006-08-03T18:08:58Z
pukiwiki: "TeX installers for Windows"
---

# TeX installers for Windows

このページでは，Windows 向け（主に [W32TeX](http://www.fsci.fuk.kindai.ac.jp/kakuto/win32-ptex/)）の TeX インストーラーを，いろんな視点から比較してみます．

インストーラーは，多種多様なものがあってよいですし，ユーザーの好みやレベルに合ったものを選べばよいでしょう．インストーラーを選ぶときの参考にして下さい．

いろいろとあげていますが，今の時点では，
「TeX インストーラ3」が，最も多くのユーザーにとって，
無難でかつ単純なインストーラーではないでしょうか？

## texinst {#v558e4b5}

- <strong>URL</strong>：[http://www.fsci.fuk.kindai.ac.jp/kakuto/win32-ptex/](http://www.fsci.fuk.kindai.ac.jp/kakuto/win32-ptex/)
- <strong>作者</strong>：角藤 亮さん
- <strong>初心者オススメ度</strong>：★★★☆☆
- <strong>ライセンス</strong>：フリーウェア
- <strong>インストールする対象</strong>：W32TeX バイナリ
- <strong>ユーザーインターフェース</strong>：CUI（コマンドプロンプト）
- <strong>ネット・ローカルインストール</strong>：ローカルのみ
- <strong>環境変数・レジストリ</strong>：手動（環境変数 PATH）
- <strong>長所</strong>：最もシンプルなインストーラー．
    自作のバッチファイル update.bat などを自分用に用意すれば，
    他の処理とも連携できます．

- <strong>短所</strong>：Windows の GUI しか触ったことのない人や，
    初心者には厳しいかもしれません．
    しかしながら，もっとも TeX システムというものを，
    TDS から見せてくれるところがよい．
    初心者の方も勉強だと思って，
    これを用いて TeX 環境を構築されるのが一番いいです．

- <strong>備考</strong>：w32tex.msi という GUI インストーラーも用意されています．
    こちらは環境変数 PATH が自動で設定されます．
    しかしながら，「アプリケーションの追加・削除」に登録されるので，
    （好みの問題ですが，）それくらいならば，
    texinst の方で初めからインストールした方がよいかもしれません．

## TeXインストーラ3（kakuto3.exe） {#w0d7240a}

- <strong>URL</strong>：[http://www.ms.u-tokyo.ac.jp/~abenori/mycreate/index.html](http://www.ms.u-tokyo.ac.jp/~abenori/mycreate/index.html)
- <strong>作者</strong>：阿部 紀行さん
- <strong>初心者オススメ度</strong>：★★★★★
- <strong>ライセンス</strong>：ソースは公開されている．
    個人での使用における使用・改変に制限なし．
    ただし，再配布を行う場合に許可が必要．

- <strong>インストールする対象</strong>：W32TeX バイナリ，dviout，Ghostscript，GS View
    （dll プラグインの追加方式により，jsclasses，xypic，ispell）

- <strong>ユーザーインターフェース</strong>：GUI
- <strong>ネット・ローカルインストール</strong>：ネットインストーラー．
    ローカルにも対応しています．

- <strong>環境変数・レジストリ</strong>：自動（環境変数 PATH，レジストリ）
- <strong>長所</strong>：『モットーは「誰にでもインストール出来るTeX」』の通りのインストーラー．
    単にサーバーからのダウンロードなので，インストーラー用のパッケージャーが不要．
    おそらくもっとも汎用性がある，
    多くの Windows の TeX を使う人をカバーするインストーラー．

- <strong>短所</strong>：dviout の初期設定で，
    Resolusion が 600 dpi 以上でない（好みの問題ですが･･･．）．
    ファイルのバージョン管理には，それなりの工夫が必要．
    追加マクロパッケージや関連ツールをインストーラーに対応させたい場合に，
    専用のプラグイン dll を Visual C++ を起動して，
    ビルドしないといけないので，それなりに知識と経験がないと，
    追加マクロなどのパッケージを簡単に作成できない．

- <strong>備考</strong>：TeX インストーラ 3 ローカル特化バージョンも別途公開されています．
    その他，多数の TeX 関連ツールおよび解説をされています．

## Cygwin で日本語 TeX {#l3e305ae}

<!-- ↑こんな名前でしたっけ？ -->
<!-- / 「ptetex for Cygwin」と書いていただきましたが，サイトのタイトルの -->
<!-- / ほうにさせていただきました． -->
- <strong>URL</strong>：[http://www.misojiro.t.u-tokyo.ac.jp/~kuroky/tex/](http://www.misojiro.t.u-tokyo.ac.jp/~kuroky/tex/)
- <strong>作者（パッケージ製作者）</strong>：黒木 裕介さん
- <strong>初心者オススメ度</strong>：★☆☆☆☆
- <strong>ライセンス</strong>：ファイル・ソースについては ptetex の LICENSE ファイルに記述してある通り．パッケージングスクリプトはパッケージ製作者の思想による．
    インストーラのライセンスは，GPL.

- <strong>インストールする対象</strong>：ptetex そのもの
    （pTeX 本体や様々なクラスファイル・マクロ）に加え，
    関連ツール（日中韓対応 Ghostscript, ps2jpdf）なども．
    （パッケージ製作者が増えて，パッケージが増えれば，どんどん広がる．）

- <strong>ユーザーインターフェース</strong>：GUI（Cygwin Netinstaller）
- <strong>ネット・ローカルインストール</strong>：ネットにもローカルにも対応．
- <strong>環境変数・レジストリ</strong>：自動 (パッケージャは，レジストリに関する設定はしなくてよい[^1]．)
- <strong>長所</strong>：日本の Linux/UNIX の定番 TeX ディストリビューション ptetex が，Cygwin でもそのまま使える．
    W32TeX を Cygwin で使えるようにする作業などを考える必要がない．
    all in one と言ってよい．
    パッケージ製作者が増えてパッケージが増えれば，もっと面白くなる！
    豊富な [CTAN](http://www.ctan.org/) のパッケージのインストールが，
    どれだけ簡単になることか，計り知れない．
    追加パッケージ作成はテキストベースなので簡単にできる
    （参考：[TeX マクロをバイナリ配布するには](http://www.misojiro.t.u-tokyo.ac.jp/~kuroky/tex/package.html)）．

- <strong>短所</strong>：そもそも UNIX 系 OS に馴染みがない人には無縁の世界．
    Windows しか触ったことのない初心者には，かなり高い敷居がある．

- <strong>備考</strong>：黒木さんのドキュメントは，非常に丁寧に書かれていますので，
    一読されるとよいです．

## MyTeX Netinstaller（setup(-ja).exe） {#d5f5ce48}

- <strong>URL</strong>：[http://www.math.s.chiba-u.ac.jp/~myamamoto/mytex/mytex.html](http://www.math.s.chiba-u.ac.jp/~myamamoto/mytex/mytex.html)
- <strong>作者</strong>：山本 宗宏さん
- <strong>初心者オススメ度</strong>：★★☆☆☆
- <strong>ライセンス</strong>：GNU
- <strong>インストールする対象</strong>：W32TeX バイナリ，dviout，Ghostscript，様々なクラスファイル・マクロ，関連ツール，TeX 関連のドキュメントなど．
    （パッケージャーが増えて，パッケージが増えれば，どんどん広がる．）

- <strong>ユーザーインターフェース</strong>：GUI
- <strong>ネット・ローカルインストール</strong>：ネットにもローカルにも対応．
- <strong>環境変数・レジストリ</strong>：（今のところ，）手動．
- <strong>長所</strong>：[Meadow](http://www.meadowy.org/) や [Cygwin](http://www.cygwin.com/) で見慣れたユーザーインターフェース．
    パッケージャーが増えて MyTeX 用のパッケージ置き場の選択肢が増えれば，
    もっと面白くなる！
    豊富な [CTAN](http://www.ctan.org/) のパッケージのインストールが，
    どれだけ簡単になることか，計り知れません．
    追加パッケージの作成が，GNU Make と UNIX シェルというテキストベースなので，
    比較的簡単にパッケージ作成ができ，パッケージに関する様々な情報を付加することや，
    パッケージどうしの依存関係も対処することができる．またバージョン管理もできる．
    特に，Windows でなくても，Linux や UNIX，Cygwin などからでも
    開発からパッケージ作成までできる．

- <strong>短所</strong>：（開発者以外の）パッケージャーが基本的に必要です．
    現段階では GUI のインストーラーだとしても，
    TeX や Windows に関して，全くの無知の方にとっては使えないインストーラーなので，
    初心者にとってやや難しいインストーラーとなっています．

- <strong>備考</strong>：「何でもかんでも GUI にしない，ブラックボックスにしない」という精神が，MyTeX の仕様にも影響しています．

## Cygwin-JE {#t8ab1da9}

- tetex-2 ですが，Cygwin の Netinstaller でインストールできる，日本語化 TeX です．
    <!-- 詳しい方に後をお譲りします． -->

- <strong>URL</strong>: [http://sourceforge.jp/projects/cygwin-je/](http://sourceforge.jp/projects/cygwin-je/)
- Cygwinのsetup.exeに、[http://cygwin-je.sourceforge.jp/cygwin_je/](http://cygwin-je.sourceforge.jp/cygwin_je/) を追加すると日本語化された各種パッケージがインストールできる。その中にtetex-2, gs, xdviなどが含まれている。

***

- 私なりにまとめてみました．追加・修正など，どんどんお願い致します． -- munepi 2006-08-04 (金) 12:14:04

[^1]: もっと言うと，しない方が良いと思う．Cygwin の Netinstaller が自動で書き込むものがあるならば，書き込まれる．
