---
title: "Make"
url: "/Make/"
date: 2006-09-10T21:17:39Z
pukiwiki: "Make"
---

# Make

## UNIX 互換 OS での TeX，pTeX，pLaTeX2e 等のインストール {#f27134a5}

[TeX Live](</TeX Live/>) + [追加日本語パッチ](</TeX Live/#w858d62f>) がお薦めです。<br> <!-- 少し前までは TeX Live + ptexlive, teTeX-3.0 + ptetex3 を使う方法がお薦めでした。~ --> <!-- 下の方に長々と書いてある teTeX や ptetex などに関する情報は古い内容です。~ -->

<!-- #contents -->

<!-- ** [[TeX Live]] + [[追加日本語パッチ>TeX Live#w858d62f]] [#kf3854d9] -->

<!-- ** TeX Live + ptexlive [#w4e02083] -->
<!--  -->
<!-- [[TeX Live]] -->
<!-- は teTeX に代わるTeX関連物の集大成です。 -->
<!-- これを pTeX 対応にしたものが ptexlive です。 -->
<!-- 準備は少し面倒ですが，すぐ下の ptetex3 と同様に make できます。 -->
<!--  -->
<!-- 詳しくは -->
<!-- [[ptexlive Wiki:http://tutimura.ath.cx/ptexlive/]] -->
<!-- をご覧ください。 -->
<!--  -->
<!-- * teTeX や ptetex などに関する情報 [#je88611e] -->
<!-- 以下は古い情報です。ptetex が内部で行っていることを理解するため以外には -->
<!-- 必要ありません。 -->
<!--  -->
<!-- ** teTeX-3.0 + ptetex3 [#saac55c2] -->
<!--  -->
<!-- [[teTeX:http://www.tug.org/tetex/]] は -->
<!-- UNIX（互換）OS 用の TeX ディストリビューション -->
<!-- です。[[ptetex:http://tutimura.ath.cx/~nob/tex/ptetex.html]] は -->
<!-- teTeX と [[pTeX:http://ascii.asciimw.jp/pb/ptex/]] 一式を簡単にインストール -->
<!-- するための[[土村展之さん:http://www.nn.iij4u.or.jp/~tutimura/]]作の -->
<!-- ツールです。[[ptetexWiki:全動作報告]] に多数の例が挙がっているので， -->
<!-- 参考になさると良いでしょう。ここでは2005年2月に出た最新の teTeX-3.0 と -->
<!-- それをベースにした pTeX を，ptetex3 を使ってインストールしてみます。 -->
<!--  -->
<!-- まず，あらかじめ C/C++ のコンパイラや -->
<!-- X Window System 用ソフトウェアの開発環境などをインストールしておきます。 -->
<!-- また，（必須ではありませんし，かなりの手間がかかりますが）[[Ghostscript]] の -->
<!-- 日本語対応がなされているものをインストールしても良いでしょう。 -->
<!-- 海外の Linux ディストリビューションに附属する Ghostscript では -->
<!-- 日本語対応が乏しいケースもあるようです。 -->
<!-- 2005年10月以降，md5, gmd5sum 等は自動判定で使い分けるようになりました。 -->
<!-- GNU sed ももう不要です。 -->
<!-- //Mac OS X の場合は，あらかじめ -->
<!-- //[[GNU coreutils:http://www.ring.gr.jp/pub/GNU/coreutils/]] に含まれる -->
<!-- //md5sum コマンドをインストールしておくか，my_option というファイルを作って -->
<!-- // MD5CHECK=md5check -->
<!-- //と書いておきます。 -->
<!-- //[[GNU sed:http://www.ring.gr.jp/pub/GNU/sed/]] は -->
<!-- //2005/6/27 以降は不要になりました。 -->
<!--  -->
<!-- /var/tmp/ptetex3/tetex-src-3.0/ と /usr/local/teTeX/ と ~/texmf/ -->
<!-- と ~/.texmf-conf/ と ~/.texmf-var/ とがすでにある場合には， -->
<!-- 消すか名前を変えておきます。 -->
<!--  -->
<!-- 適当なディレクトリを作り，その中に -->
<!-- &ref(ftp://ftp.ring.gr.jp/pub/text/CTAN/obsolete/systems/unix/teTeX/3.0/distrib/tetex-src-3.0.tar.gz);, -->
<!-- &ref(ftp://ftp.ring.gr.jp/pub/text/CTAN/obsolete/systems/unix/teTeX/3.0/distrib/tetex-texmf-3.0po.tar.gz);, -->
<!-- [[ptetex3:http://tutimura.ath.cx/~nob/tex/ptetex/ptetex3/]]-20090610.tar.gz（最新の日付のもの） -->
<!-- %%[[ptetex-cmap:http://tutimura.ath.cx/~nob/tex/ptetex/ptetex-cmap/]]-2006????.tar.gz%% （←もう不要） -->
<!-- をダウンロードし， -->
<!-- その中で次のようにします（ターミナルでコマンドを打ち込みます）。 -->
<!-- （ptetex-cmap は 2005年11月11日以降ほぼ不要になりました。） -->
<!-- tar xvzf ptetex3-20090610.tar.gz -->
<!-- cd ptetex3-20090610 -->
<!-- cp my_option.sample ../my_option （オプションを変更したいのなら） -->
<!-- shell プロンプトの $ は，わざと書いてないのだと思います． -->
<!-- 初心者が "$" も含めて入力するという事故を防ぐため， -->
<!-- このページは奥村さんが「敢えて」書かないスタイルで統一されたものと思います． -->
<!-- 私もこれに賛成です。ちなみに，shell プロンプトには， -->
<!-- ユーザの $ と root の # という使い分けの習慣があることもお忘れなく． -->
<!-- // さらに (ba)sh と (t)csh では -->
<!-- // User のプロンプトが $ と % のように違います。 -->
<!--  -->
<!-- オプションを変更したいのなら，この my_option というファイルを適宜編集します。 -->
<!-- そして，以下を実行します。 -->
<!-- make -->
<!--  -->
<!-- あるいは [[OTF]]（安定版），[[Babel>新 pTeX とBabel]] 対応を含めるのなら -->
<!-- make all3 -->
<!-- と，あるいは個別に実行するのなら -->
<!-- make all0 -->
<!-- make otf   （オプション） -->
<!-- make babel （オプション） -->
<!-- make font -->
<!-- make test -->
<!-- とします。Mac OS X では “make font” で -->
<!-- （ターミナルを UTF-8 にしておくと） // たぶんしておかなくても -->
<!-- 何回かヒラギノ何とかと聞いてきますので，それについては “y” と答えます。 -->
<!-- 面倒なら “make fonty” とすると，すべての質問に yes と答えたことに -->
<!-- なります。“make” や “make all3” では “make fonty” も含めて実行しますので， -->
<!-- 気にしなくて大丈夫です -->
<!-- （make の引数については，[[ptetexWiki:makeのターゲット]] が参考になります）。 -->
<!--  -->
<!-- “make” や “make all3”，あるいは “make test” で簡単な動作テストをします。 -->
<!-- ここまで root 権限は必要ありません。Mac OS X では “make test” の前に -->
<!-- X11 を立ち上げておきます -->
<!-- （あるいは my_option で xdvi を使わない設定にします）。UTF + ps2pdf で -->
<!-- エラーが出ても大きな問題はないので，気にしないでおきます -->
<!-- （my_option で ps2pdf をテストしないようにもできます）。 -->
<!--  -->
<!-- 動作確認が終わったら，いよいよシステムにインストールしましょう。 -->
<!-- make install （インストール先のディレクトリに書き込み権限がない場合は sudo を付けます） -->
<!--  -->
<!-- /usr/local/teTeX/bin にパスを通します。 -->
<!--  -->
<!-- xdvi は src specials に対応しています。[[Emacs]] で使う -->
<!-- 場合には，[[YaTeX]] の設定は README に書いてあります。[[AUCTeX]] でも -->
<!-- 使えます。/usr/local/teTeX/share/texmf/xdvi/XDvi で emacsclient を -->
<!-- 呼び出すようにしてありますが，[[Carbon Emacs>MacWiki:CarbonEmacs]] なら -->
<!-- /Applications/Emacs.app/Contents/MacOS/bin/emacsclient にしておきます -->
<!-- （他の場所でも設定可）。 -->
<!--  -->
<!-- *** updmap(-sys) の設定 [#n2be1436] -->
<!-- フォントについての設定は updmap（各ユーザごと） -->
<!-- または updmap-sys（システム全体，root 権限が必要）で行います。例えば -->
<!-- [[dvips]] はデフォルトでは [[PostScript]] Level 2 での（欧文用）基本35書体を -->
<!-- 埋め込みませんが，埋め込むようにするには次のようにします。 -->
<!-- updmap - -setoption dvipsDownloadBase35 true -->
<!--  -->
<!-- さらに Mac OS X では，次のように -->
<!-- して[[システムに搭載されている（和文用の）ヒラギノ基本6書体:http://www.apple.com/jp/pro/design/typography/01/]]を -->
<!-- dvipdfmx で埋め込むようにできます。 -->
<!-- Mac のヒラギノと、商品のヒラギノは同一である保証はあるのでしょうか。 -->
<!-- そうでないなら↑このリンクは不適切のような気がします。 -->
<!-- // 「SCREEN｜ヒラギノと Mac OS X のバージョン相関表 (Mac OS X 10.5)」 -->
<!-- // http://www.screen.co.jp/ga_product/sento/support/otf_ver2.html -->
<!-- // に -->
<!-- // 「ヒラギノ OpenType には、Mac OS X バンドル版（6書体）と -->
<!-- // 弊社製品版（ヒラギノ専用仮名書体を含め全54書体）がありますが、 -->
<!-- // フォント名とバージョンが同じなら両者の仕様は同一です。」 -->
<!-- // とあるので，同一だと思います。 -->
<!-- // // 6書体と54書体の違いがあるので、「OS X のヒラギノ」と -->
<!-- // // 「商品のヒラギノ」は概念としては別物だという気がします。 -->
<!-- // // つまり、ここで SCREEN にリンクを張るのには違和感を覚えます。 -->
<!-- // // Apple のページならよいと思います。例えば以下ではどうでしょう。 -->
<!-- // // http://www.apple.com/jp/pro/design/typography/01/index2.html -->
<!-- // // // いいですね。先頭のウェブサイトから始める方が良いと思うので， -->
<!-- // // // http://www.apple.com/jp/pro/design/typography/01/ -->
<!-- // // // でどうですか？ -->
<!-- // 商品のヒラギノを買えば，Mac OS X に限らず Cygwin でも -->
<!-- // 同じ updmap の設定でヒラギノを埋め込めます。 -->
<!-- // そのため Apple のウェブサイトに限定する必要は無く， -->
<!-- // 大日本スクリーン製造へのリンクの方が良いと考えます。 -->
<!-- // // むしろ，販売元の大日本スクリーン製造ではなく製作元の字游工房 -->
<!-- // // http://www.jiyu-kobo.co.jp/works/works.html#Anchor-001 -->
<!-- // // にリンクを貼るべきではないですか？ -->
<!-- // // // ptetex3 の対応しているのは、おそらく OS X のヒラギノのみでしょう。 -->
<!-- // // // Cygwin では OTF に対する処理が 7font-search.sh にありませんので、 -->
<!-- // // // 商品のヒラギノが Mac と同じ手順で使えるとは思えません。本当に使えてますか？ -->
<!-- // // // // 現在 Windows が手元に無く， -->
<!-- // // // // そもそも Windows 用のヒラギノフォントを持っていないので -->
<!-- // // // // 確認はできませんが，手動でヒラギノのフォントファイルを -->
<!-- // // // // $TEXMFLOCAL/fonts/opentype/ -->
<!-- // // // // (= /usr/local/teTeX/share/texmf-local/fonts/opentype/ -->
<!-- // // // //  = C:\cygwin\usr\local\teTeX\share\texmf-local\fonts\opentype\) -->
<!-- // // // // 以下のディレクトリに -->
<!-- // // // // 「PostScript名 + “.otf”」というファイル名で -->
<!-- // // // // コピーするかシンボリックリンクを貼っておけば， -->
<!-- // // // //  updmap - -setoption kanjiEmbed hiragino -->
<!-- // // // // の実行によって少なくとも dvipdfmx では使えるのではないですか？ -->
<!-- Cygwin では下準備が自動化されていないということですね。 -->
<!-- Mac なら下準備も自動化されているので、わざわざここで言及してあるのでしょう。 -->
<!-- この段落の先頭には「Mac OS X ではさらに次のようにして..」とあるのにもご注目。 -->
<!-- そもそも商品の54書体を買ったところで、バンドルと等価な6書体しか使えません。 -->
<!-- 大日本スクリーンへのリンクは、54書体が使えるという誤解を生みそうです。 -->
<!-- // 色々な案が出てきているので，その複合案として書き換えてみました。 -->
<!-- // 大日本スクリーン製造へのリンクは -->
<!-- // 基本6書体パックへのリンクとしてみました。 -->
<!-- // // Cygwin に限らず Linux などでも同様にしてヒラギノが使えるのでは？ -->
<!-- // // // 仕組みとしては使えるでしょうが，ヒラギノフォントはライセンス上， -->
<!-- // // // Mac OS 上か Microsoft Windows 上でしか使うことが許されていません。 -->

<!-- （2006年4月以降の ptetex3） -->
<!-- updmap - -setoption kanjiEmbed hiragino -->

```

```

<!-- （2006年3月以前） -->
<!-- updmap - -nomkmap - -disable otf-noEmbeddedFont.map -->
<!-- updmap - -enable KanjiMap otf-hiraginox.map -->

<!-- ↓ここの文脈で Cygwin のヒラギノに言及する理由がまったく理解できません。 -->
<!-- ptetex3 で簡単にインストールしましょう、 -->
<!-- そして Mac の（高品質な）標準フォントを使う、という話の中に、 -->
<!-- なぜ「OS 非標準のヒラギノを使うには」という話題が必要なのでしょう。 -->
<!-- それにどなたか動作確認をされたのでしょうか。 -->
<!-- Win でのフォントのファイル名がどうなってるかによって、余分な作業が発生する可能性もあります。 -->
<!-- Cygwin -->
<!-- でも[[ヒラギノ基本6書体:http://www.screen.co.jp/ga_product/sento/products/pr_CreativeV8.html#anchor_ot00V8]]の -->
<!-- フォントファイルを $TEXMFLOCAL/fonts/opentype/ 以下のディレクトリに -->
<!-- 配置しておけば，同様にして埋め込めます。 -->

<!-- また [[IPAフォント:http://ossipedia.ipa.go.jp/ipafont/]]の -->
<!-- フォントファイル (ipam.ttf, ipag.ttf) を -->
<!-- $TEXMFLOCAL/fonts/truetype/ 以下のディレクトリに配置しておけば， -->
<!-- updmap - -setoption kanjiEmbed ipa -->
<!-- で IPAフォントを埋め込むようにできます。 -->
<!--  -->
<!-- 同様に -->
<!-- -[[小塚書体:http://www.adobe.com/type/browser/C/C_japanese.html?store=OLS-JP&language=JP]] -->
<!-- - -KozMinPro-Regular-Acro.otf -->
<!-- - -KozMinStd-Bold.otf -->
<!-- - -KozGoStd-Regular.otf -->
<!-- - -KozGoStd-Bold.otf -->
<!-- - -KozGoStd-Heavy.otf -->
<!-- -[[モリサワフォント:http://www.morisawa.co.jp/font/]] -->
<!-- - -A-OTF-RyuminPro-Light.otf -->
<!-- - -A-OTF-FutoMinA101Pro-Bold.otf -->
<!-- - -A-OTF-GothicBBBPro-Medium.otf -->
<!-- - -A-OTF-FutoGoB101Pro-Bold.otf -->
<!-- - -A-OTF-Jun101Pro-Light.otf -->
<!--  -->
<!-- のフォントファイルを $TEXMFLOCAL/fonts/opentype/ 以下のディレクトリに -->
<!-- 配置しておけば， -->
<!-- updmap - -setoption kanjiEmbed kozuka -->
<!-- で小塚書体を， -->
<!-- updmap - -setoption kanjiEmbed morisawa -->
<!-- でモリサワフォントを埋め込むようにできます。 -->
<!--  -->
<!-- 逆に和文フォントを埋め込まないようにするには，次のようにします -->
<!-- （これがデフォルトです）。 -->
<!-- updmap - -setoption kanjiEmbed noEmbed -->
<!--  -->
<!-- また [[OTF パッケージ>OTF]]で中国語フォントや韓國語フォントを -->
<!-- 埋め込まないようにするには，次のようにします（これもデフォルトです）。 -->
<!-- updmap - -setoption kanjiEmbed cktx -->
<!--  -->
<!-- [[ptetexWiki:フォントの集中管理]] に ptetex3 での updmap(-sys) コマンドの -->
<!-- 動作やオプションについて詳しく説明されています。 -->
<!--  -->
<!-- 途中でエラーが出ますが，/usr/local/teTeX/share/texmf/fonts/opentype/ に -->
<!-- STSongStd-Light-Acro.otf，MSungStd-Light-Acro.otf，HYSMyeongJoStd-Medium-Acro.otf -->
<!-- へのシンボリックリンクを張っておけば通ります。 -->
<!--  -->
<!-- - --  -->
<!--  -->
<!-- **News [#i9c0909b] -->
<!--  -->
<!-- -[040723] -->
<!-- [[URWフォントのバグ:http://oku.edu.mie-u.ac.jp/~okumura/texwiki/?URW]] -->
<!--  -->
<!-- **はじめに [#a05fe117] -->
<!--  -->
<!-- 一世代前の teTeX-2.0.2（Web2C 7.4.5），pTeX-3.1.5 を Linux -->
<!-- や FreeBSD や Solaris や Mac OS X（gcc 2.x -->
<!-- または [[3.x>LinuxWiki:GCC]]）にソースからインストールした記録です。 -->
<!--  -->
<!-- 多くの Linux ディストリビューションにはすでに日本語対応の TeX ツール群が含まれています（コマンド名は pxdvi -->
<!-- や pdvips など p が頭に付く場合があります）のでソースからインストールする必要はありません。 -->
<!-- 詳しくはこの TeX Wiki の各ディストリビューションについての記述をご覧ください。 -->
<!--  -->
<!-- >土村さんが -->
<!-- 「[[ptetex&ndash;teTeX 用日本語パッチ集:http://tutimura.ath.cx/~nob/tex/ptetex.html]]」 -->
<!-- を作ってくださいました。 -->
<!-- これを使えばもっと簡単にインストールできます。 -->
<!--  -->
<!-- >teTeX-2.0.2 には2月28日バージョンと3月1日バージョンがあります。 -->
<!-- タイムスタンプが3月1日以降であることをご確認ください。 -->
<!--  -->
<!-- >Ghostscript のインストールも必須です。 -->
<!-- これについては [[GNU Ghostscript 7.07 on Linux>Ghostscript 7.07]] -->
<!-- をご覧ください。 -->
<!--  -->
<!-- >FreeBSD では make を gmake としてください。 -->
<!--  -->
<!-- >Mac OS X では開発ツール（一部コマンドのインストールには X11）をあらかじめインストールしておくことが必要です。 -->
<!-- Mac OS X の make は GNU Make ですのでそのまま使えます。 -->
<!--  -->
<!-- >Vine Linux 3.0でmakeするための注意は -->
<!-- &#x5b;[[qa:30713]]&#x5d; -->
<!-- をご覧ください。 -->
<!--  -->
<!-- 他に参考すべきサイト： -->
<!--  -->
<!-- -[[teTeX-2.0 パッケージングメモ:http://www.nn.iij4u.or.jp/~tutimura/tex/tetex2.html]] -->
<!-- (土村さん) -->
<!-- -[[Mac OS XにTeXをインストールしよう:http://macptex.appi.keio.ac.jp/~uchiyama/macosx/]] -->
<!-- (内山さん) -->
<!--  -->
<!-- **teTeX のインストール [#p46b71c8] -->
<!--  -->
<!-- 下は /usr/local/teTeX/ 以下にインストールする方法です。 -->
<!-- /usr/local/ 以下にインストールするなら - -prefix=/usr/local としてください。 -->
<!--  -->
<!-- xdvik 関係は後で日本語化したものを別途インストールすることを考えて，ここでは省略します。 -->
<!-- X Window System を使わない（標準状態の Mac OS X など）なら - -without-x も必要です。 -->
<!--  -->
<!-- 用意するもの： -->
<!--  -->
<!--  -->
<!-- -[[CTAN:systems/unix/teTeX/2.0/distrib/tetex-texmf-2.0.2.tar.gz]] -->
<!-- -[[CTAN:systems/unix/teTeX/2.0/distrib/tetex-src-2.0.2.tar.gz]] -->
<!--  -->
<!-- mkdir -p /usr/local/teTeX/share/texmf -->
<!-- mkdir -p /usr/local/src -->
<!-- tar xvzf tetex-texmf-2.0.2.tar.gz -C /usr/local/teTeX/share/texmf/ -->
<!-- tar xvzf tetex-src-2.0.2.tar.gz -C /usr/local/src/ -->
<!-- cd /usr/local/src/tetex-src-2.0.2/ -->
<!-- ./configure - -prefix=/usr/local/teTeX - -disable-multiplatform - -without-xdvik - -without-oxdvik -->
<!-- make world -->
<!--  -->
<!-- make world は make all install と同等ですので make install は不要です（Thanks: 河村くん）。 -->
<!--  -->
<!-- /usr/local/teTeX/bin にパスを通します。 -->
<!-- 古い TeX が他の場所にインストールされている場合は，そのパスより先に /usr/local/teTeX/bin -->
<!-- がなければなりません。 -->
<!--  -->
<!-- export PATH=/usr/local/teTeX/bin:$PATH    # sh/bash -->
<!-- setenv PATH /usr/local/teTeX/bin:$PATH    # csh/tcsh -->
<!-- set path=(/usr/local/teTeX/bin $path)     # 上と同じ -->
<!--  -->
<!-- which latex と打ち込んで /usr/local/teTeX/bin/latex と出ることを確認します。 -->
<!--  -->
<!-- which [[dvips:http://www.radicaleye.com/dvips.html]] -->
<!-- と打ち込んで /usr/local/teTeX/bin/dvips と出ることを確認します。 -->
<!--  -->
<!-- これらがうまくいかないなら，bash なら hash -r，tcsh なら rehash してみてください。 -->
<!--  -->
<!-- うまくいったら，上の PATH 設定は .bashrc や .tcshrc の類で設定しておきましょう。 -->
<!--  -->
<!-- とりあえず英語だけですが，うまくいくか実験してみましょう。 -->
<!-- 次のようなファイル hello.tex を作ります。 -->
<!--  -->
<!-- \documentclass{article} -->
<!-- \begin{document} -->
<!--  -->
<!-- Hello, \TeX! -->
<!--  -->
<!-- \end{document} -->
<!--  -->
<!-- 次のように打ち込んでテストしましょう。 -->
<!--  -->
<!-- latex hello       # hello.tex を hello.dvi に変換 -->
<!-- dvips -Ppdf hello # hello.dvi を hello.ps に変換 -->
<!-- gv hello.ps       # プレビューのテスト -->
<!-- lpr hello.ps      # 印刷のテスト -->
<!--  -->
<!-- Mac OS X なら上の代わりに pdflatex hello -->
<!-- と打ち込んで hello.tex を hello.pdf に変換し，open hello.pdf -->
<!-- と打ち込むか，あるいは Finder でダブルクリックしてみてください。 -->
<!--  -->
<!-- これ以降で，何かエラーが起きたなら mktexlsr（または texhash）と打ち込んでみてください。 -->
<!-- こうすると /usr/local/teTeX/share/texmf/ls-R -->
<!-- というデータベース（といっても単に texmf -->
<!-- ディレクトリ以下のリストを収めたテキストファイル）が更新されます。 -->
<!--  -->
<!-- **pTeX，pLaTeX2e のインストール [#g69f2dc9] -->
<!--  -->
<!-- ※以下ではRingサーバのミラー http://www.ring.gr.jp/pub/text/TeX/ascii-ptex/ -->
<!-- をご紹介していますが，オリジナルの配布元は ftp://ftp.ascii.co.jp/pub/TeX/ascii-ptex/ -->
<!-- です。 -->
<!--  -->
<!-- ここでは文字コード EUC 用に作ってみます。 -->
<!-- Shift JIS 用に作るには ./configure sjis です。 -->
<!--  -->
<!-- 用意するもの： -->
<!--  -->
<!-- -http://www.ring.gr.jp/pub/text/TeX/ascii-ptex/tetex/ptex-texmf-2.3.tar.gz -->
<!-- -http://www.ring.gr.jp/pub/text/TeX/ascii-ptex/tetex/ptex-src-3.1.5.tar.gz -->
<!--  -->
<!-- tar xvzf ptex-texmf-2.3.tar.gz -C /usr/local/teTeX/share/texmf/ -->
<!-- mktexlsr -->
<!-- tar xvzf ptex-src-3.1.5.tar.gz -C /usr/local/src/tetex-src-2.0.2/texk/web2c/ -->
<!-- cd /usr/local/src/tetex-src-2.0.2/texk/web2c/ptex-src-3.1.5 -->
<!-- ./configure euc -->
<!-- make -->
<!-- make install -->
<!-- mktexlsr -->
<!--  -->
<!-- ついでに dvips(k) も済ませてしまいましょう。 -->
<!--  -->
<!-- 用意するもの： -->
<!--  -->
<!-- -http://www.ring.gr.jp/pub/text/TeX/ascii-ptex/dvips/dvipsk-jpatch-p1.6a1.tar.gz -->
<!-- -http://www.ring.gr.jp/pub/text/TeX/ptex-win32/utils/udvips-5.94a-p1.6a1.patch -->
<!--  -->
<!-- tar xvzf dvipsk-jpatch-p1.6a1.tar.gz -C /usr/local/src/tetex-src-2.0.2/texk/dvipsk/ -->
<!-- cp udvips-5.94a-p1.6a1.patch /usr/local/src/tetex-src-2.0.2/texk/dvipsk/ -->
<!-- cd /usr/local/src/tetex-src-2.0.2/texk/dvipsk/ -->
<!-- patch -p1 <dvipsk-5.92b-p1.6a1.patch -->
<!-- patch -p1 <udvips-5.94a-p1.6a1.patch -->
<!-- ./configure - -prefix=/usr/local/teTeX - -disable-multiplatform -->
<!-- make -->
<!-- make install -->
<!-- cd /usr/local/teTeX/share/texmf/dvips/pstricks/ -->
<!-- patch </usr/local/src/tetex-src-2.0.2/texk/dvipsk/PSTricks.patch -->
<!--  -->
<!-- dvips(k) を使うには，さらに次の修正が必要です。 -->
<!-- まず /usr/local/teTeX/share/texmf/dvips/config/kanji.map -->
<!-- というファイルを作り，次のように書き込みます。 -->
<!-- 本当はこの段階では最初の4行しか要りませが，後のために余分に設定しておきます。 -->
<!--  -->
<!-- rml             Ryumin-Light-H -->
<!-- rmlv            Ryumin-Light-V -->
<!-- gbm             GothicBBB-Medium-H -->
<!-- gbmv            GothicBBB-Medium-V -->
<!-- ryumin-l        Ryumin-Light-H -->
<!-- ryumin-l-v      Ryumin-Light-V -->
<!-- gtbbb-m         GothicBBB-Medium-H -->
<!-- gtbbb-m-v       GothicBBB-Medium-V -->
<!-- futomin-b       FutoMinA101-Bold-H -->
<!-- futomin-b-v     FutoMinA101-Bold-V -->
<!-- futogo-b        FutoGoB101-Bold-H -->
<!-- futogo-b-v      FutoGoB101-Bold-V -->
<!-- jun101-l        Jun101-Light-H -->
<!-- jun101-l-v      Jun101-Light-V -->
<!-- unimin          Ryumin-Light-UniJIS-UCS2-H -->
<!-- unigoth         GothicBBB-Medium-UniJIS-UCS2-H -->
<!--  -->
<!-- 新しいファイルを作ったら必ず mktexlsr と打ち込んでおきましょう。 -->
<!--  -->
<!-- さらに，/usr/local/teTeX/share/texmf/dvips/config/config.ps -->
<!-- の適当なところ，たとえば -->
<!--  -->
<!-- % This shows how to add your own map file. -->
<!-- % Remove the comment and adjust the name: -->
<!-- % p +myfonts.map -->
<!--  -->
<!-- の次の行あたりに，次のように追加します。 -->
<!--  -->
<!-- p +kanji.map -->
<!--  -->
<!-- いよいよ日本語で実験してみましょう。 -->
<!-- さきほどの hello.tex に日本語を加えます。 -->
<!--  -->
<!-- \documentclass{jarticle} -->
<!-- \begin{document} -->
<!--  -->
<!-- こんにちは, \TeX! -->
<!--  -->
<!-- \end{document} -->
<!--  -->
<!-- 次のように打ち込みます。 -->
<!--  -->
<!-- platex hello      # hello.tex を hello.dvi に変換 -->
<!-- dvips -Ppdf hello # hello.dvi を hello.ps に変換 -->
<!-- gv hello.ps       # プレビューのテスト -->
<!-- lpr hello.ps      # 印刷のテスト -->
<!--  -->
<!-- 角藤さん配布の Win32 バイナリと同じく ([[qa:54955]]) ，上のようにして作った日本語対応バイナリ名は dvips です。 -->
<!--  -->
<!-- 他のフォントの場合も同様です。 -->
<!-- たとえば [[TIPA]] と [[cm-super]] -->
<!-- をインストールしたなら次のようにします（インストールした後で書いてください）。 -->
<!--  -->
<!-- p +tipa.map -->
<!-- p +cm-super-t1.map -->
<!-- p +cm-super-ts1.map -->
<!-- p +cm-super-t2a.map -->
<!-- p +cm-super-t2b.map -->
<!-- p +cm-super-t2c.map -->
<!-- p +cm-super-x2.map -->
<!--  -->
<!-- ただ，dvipdfm(x) と共通の設定にすることを考えて，欧文フォントはここではなく -->
<!-- /usr/local/teTeX/share/texmf/web2c/updmap.cfg -->
<!-- のほうに例えば次のように書くのがいいでしょう。 -->
<!--  -->
<!-- Map lm.map -->
<!-- MixedMap tipa.map -->
<!-- MixedMap mathabx.map -->
<!-- MixedMap yhmath.map -->
<!--  -->
<!-- Mixed の付くほうはビットマップフォントも使う場合です。 -->
<!--  -->
<!-- このように書いておいて updmap コマンドを実行すると自動的に map ファイルが更新されます。 -->
<!--  -->
<!-- >ただ，このようにして作った dvipdfm*.map は -->
<!-- cmex7 default fmex7 -r -->
<!-- cmex8 default fmex8 -r -->
<!-- cmex9 default fmex9 -r -->
<!-- になってしまうようです。 -->
<!-- この3行から -r を取らないと，括弧が出ないなどのトラブルが起こることがあります。 -->
<!-- 昔 Thomas Esser に連絡したはずなのですが，直してもらえていません。 -->
<!-- いずれにしても \usepackage{type1cm} -->
<!-- すべきで，そうすれば上のトラブルには引っ掛かりません。 -->
<!--  -->
<!-- **jis/jisg/morisawa フォント関連 [#se06be7a] -->
<!--  -->
<!-- jis/jisg フォントメトリック関連です。 -->
<!-- 私の [[新ドキュメントクラス:http://oku.edu.mie-u.ac.jp/~okumura/jsclasses/]] -->
<!-- を使う際に必要です。 -->
<!--  -->
<!-- 用意するもの： -->
<!--  -->
<!-- -http://www.ring.gr.jp/pub/text/TeX/ascii-ptex/jvf/jis.tar.gz -->
<!--  -->
<!-- tar xvzf jis.tar.gz -->
<!-- mv jis/tfm/ptex/* /usr/local/teTeX/share/texmf/fonts/tfm/ptex/ -->
<!-- mv jis/vf/* /usr/local/teTeX/share/texmf/fonts/vf/ptex/ -->
<!--  -->
<!-- morisawa 関連です。 -->
<!-- たとえば上の [[新ドキュメントクラス:http://oku.edu.mie-u.ac.jp/~okumura/jsclasses/]] -->
<!-- に含まれる morisawa.sty で使えます。 -->
<!--  -->
<!-- 用意するもの： -->
<!--  -->
<!-- -http://www.ring.gr.jp/pub/text/TeX/ascii-ptex/jvf/morisawa.tar.gz -->
<!--  -->
<!-- tar xvzf morisawa.tar.gz -->
<!-- mv morisawa/tfm/dvips/* /usr/local/teTeX/share/texmf/fonts/tfm/ptex/ -->
<!-- mv morisawa/tfm/ptex/* /usr/local/teTeX/share/texmf/fonts/tfm/ptex/ -->
<!-- mv morisawa/vf/* /usr/local/teTeX/share/texmf/fonts/vf/ptex/ -->
<!--  -->
<!-- 最後に mktexlsr しておきます。 -->
<!--  -->
<!-- **新ドキュメントクラス [#p826d2d8] -->
<!--  -->
<!-- [[新ドキュメントクラス:http://oku.edu.mie-u.ac.jp/~okumura/jsclasses/]] をインストールします。 -->
<!--  -->
<!-- 用意するもの： -->
<!--  -->
<!-- -http://oku.edu.mie-u.ac.jp/~okumura/jsclasses/jsclasses.zip -->
<!--  -->
<!-- cd /usr/local/teTeX/share/texmf/ptex/platex -->
<!-- mkdir js -->
<!-- cd js -->
<!-- unzip jsclasses.zip -->
<!-- mktexlsr -->
<!--  -->
<!-- **mendexk のインストール [#s635011c] -->
<!--  -->
<!-- mendex(k) は makeindex を日本語化したものです。 -->
<!--  -->
<!-- 用意するもの： -->
<!--  -->
<!-- -http://www.ring.gr.jp/pub/text/TeX/ascii-ptex/mendex/mendexk2.5a.tar.gz -->
<!--  -->
<!-- tar xvzf mendexk2.5a.tar.gz -C /usr/local/src/tetex-src-2.0.2/texk/ -->
<!-- cd /usr/local/src/tetex-src-2.0.2/texk/mendexk2.5a/ -->
<!--  -->
<!-- Makefile で以下の部分を修正します（teTeX-2.0.2 の kpathsea は 3.4.5 です）。 -->
<!--  -->
<!-- # インストール先を DISTDIR に指定する -->
<!-- DISTDIR = /usr/local/teTeX/bin -->
<!--  -->
<!-- # for kpathsea-3.* -->
<!-- CFLAGS = -O -DKPATHSEA -DKPATHSEA3 -->
<!-- PROGLINK = $(kpathsea_link) $(OBJS) $(kpathsea_3) -->
<!--  -->
<!-- # for no kpathsea -->
<!-- #CFLAGS = -O -->
<!-- #PROGLINK = $(CC) $(OBJS) -o $(PROGRAM) -->
<!--  -->
<!-- 仕上げです。 -->
<!-- unknown escape sequence の警告は無視してかまいません。 -->
<!--  -->
<!-- make -->
<!-- make install -->
<!--  -->
<!-- **dvipdfmx（旧 dvipdfm 日本語版）のインストール [#b872d2da] -->
<!--  -->
<!-- [[dvipdfm:http://gaspra.kettering.edu/dvipdfm/]] -->
<!-- を平田さんが日本語化されました。 -->
<!-- [[平田さんのサイト [Internet Archive]:http://replay.waybackmachine.org/20050618080951/http://www.nn.iij4u.or.jp/~tutimura/hirata/]] -->
<!--  -->
<!-- CJK 版の開発は [[The DVIPDFMx Project:http://project.ktug.or.kr/dvipdfmx/]] に引き継がれました。 -->
<!-- このページから最新のソースをいただいてきて次のようにインストールします。 -->
<!--  -->
<!-- >古い teTeX では /usr/local/teTeX/share/texmf/dvipdfm/config -->
<!-- がファイルになっているので dvipdfmx の上書きインストールが失敗します。 -->
<!-- teTeX 2.0.2 では大丈夫です。 -->
<!--  -->
<!-- tar xvzf dvipdfmx-20031207.tar.gz -C /usr/local/src/tetex-src-2.0.2/texk/ -->
<!-- cd /usr/local/src/tetex-src-2.0.2/texk/dvipdfmx-20031207 -->
<!-- ./configure - -prefix=/usr/local/teTeX - -with-kpathsea=/usr/local/teTeX -->
<!-- make -->
<!-- make install (configファイルを上書きしたくなければ make install-exec) -->
<!-- mktexlsr -->
<!--  -->
<!-- configure のオプションには必要に応じて - -with-png=DIR，- -with-zlib=DIR -->
<!-- も付けます。 -->
<!-- 20030805 から OpenSSL は不要です。 -->
<!--  -->
<!-- /usr/local/teTeX/share/texmf/dvipdfm/config/dvipdfmx.cfg が設定ファイルになります。 -->
<!-- この中の -->
<!--  -->
<!-- f cmr.map -->
<!-- f psbase14.map -->
<!-- f lw35urw.map -->
<!--  -->
<!-- はコメントアウト（頭に % を付ける）して，代わりに -->
<!--  -->
<!-- f dvipdfm.map -->
<!--  -->
<!-- を入れます ← 配布段階で対応していただきました。 -->
<!-- （dvipdfm.map は /usr/local/teTeX/share/texmf/dvips/config の中にあり，dvipdfm_dl14.map -->
<!-- または dvipdfm_ndl14.map へのシンボリックリンクになっています（それぞれフォントをダウンロードする／しない）。 -->
<!-- ダウンロードする方にしておけば，Times Roman が Times New Roman に置き換えられるといった心配はなくなります。 -->
<!-- ただしダウンロードされるのは URW の互換フォントです。 -->
<!-- デフォルトではダウンロードしないになっています（この方が軽い PDF ができますが Acrobat Reader で Times -->
<!-- や Helvetica が Times New や Arial で置き換えて表示されます）。 -->
<!--  -->
<!-- 実行ファイル名は dvipdfmx です。 -->
<!-- 最後の x を忘れないように！ -->
<!--  -->
<!-- この dvipdfmx ではいくつかの CMap ファイルが必須です。 -->
<!-- [[GNU Ghostscript 7.07 on Linux>Ghostscript 7.07]] -->
<!-- のページを参考にして Ghostscript をインストールされたかたは /usr/local/share/ghostscript/Resource -->
<!-- の下にたくさんの CMap ファイルがありますので，これを -->
<!-- /usr/local/teTeX/share/texmf/dvipdfm -->
<!-- の中にシンボリックリンクしておきます。 -->
<!--  -->
<!-- cd /usr/local/teTeX/share/texmf/dvipdfm -->
<!-- ln -s /usr/local/share/ghostscript/Resource . -->
<!--  -->
<!-- [[Acrobat Reader:http://oku.edu.mie-u.ac.jp/~okumura/linux/acroread.html]] -->
<!-- をインストールされたかたは /usr/local/Acrobat5/Resource/Font -->
<!-- も同様にシンボリックリンクして使えそうです。 -->
<!--  -->
<!-- これで動くはずです。 -->
<!-- テストしてみましょう。 -->
<!--  -->
<!-- platex hello      # hello.tex を hello.dvi に変換 -->
<!-- dvipdfmx hello    # hello.dvi を hello.pdf に変換 -->
<!--  -->
<!-- できた hello.pdf をダブルクリックして見てください。 -->
<!--  -->
<!-- Acrobat Reader なら完璧に見えますが，古い Mac OS X（10.3 以前）の「プレビュー」では明朝がゴシックで代用されてしまいます。 -->
<!-- 少し重くなってもいいからやはりフォントを埋め込みたいという場合は，次のようにします。 -->
<!--  -->
<!-- Mac OS X のヒラギノなら，まず /System/Library/Fonts -->
<!-- の「ヒラギノ明朝 Pro W3.otf」「ヒラギノ角ゴ Pro W3.otf」へのシンボリックリンクをうまく作り，その名前をそれぞれ HiraMinPro-W3.otf，HiraKakuPro-W6.otf //として，dvipdfmx -->
<!-- から見えるところ（たとえば /usr/local/share/ghostscript/Resource/CIDFont -->
<!-- というディレクトリを作ってその中）に入れます。 -->
<!-- mktexlsr を忘れないでください。 -->
<!-- そして，/usr/local/teTeX/share/texmf/dvipdfm/config/cid-x.map の -->
<!--  -->
<!-- rml  H Ryumin-Light -->
<!-- rmlv V Ryumin-Light -->
<!-- gbm  H GothicBBB-Medium -->
<!-- gbmv V GothicBBB-Medium -->
<!--  -->
<!-- となっているところをコメントアウト（頭に % を付ける）して，代わりに次のように書きます。 -->
<!--  -->
<!-- rml   H HiraMinPro-W3.otf -->
<!-- rmlv  V HiraMinPro-W3.otf -->
<!-- gbm   H HiraKakuPro-W6.otf -->
<!-- gbmv  V HiraKakuPro-W6.otf -->
<!--  -->
<!-- 他のフォントでも試してみてください。 -->
<!-- たとえば小塚フォントなら次のようにします。 -->
<!--  -->
<!-- rml   H kozminstd-medium.otf -->
<!-- rmlv  V kozminstd-medium.otf -->
<!-- gbm   H kozgostd-medium.otf -->
<!-- gbmv  V kozgostd-medium.otf -->
<!--  -->
<!-- morisawa.sty で使う場合にはさらにフォント定義を cid-x.map に追加します。 -->
<!-- 次はほんの一例です。 -->
<!--  -->
<!-- ryumin-l      H Ryumin-Light -->
<!-- ryumin-l-v    V Ryumin-Light -->
<!-- gtbbb-m       H GothicBBB-Medium -->
<!-- gtbbb-m-v     V GothicBBB-Medium -->
<!-- futomin-b     H kozminstd-bold.otf -->
<!-- futomin-b-v   V kozminstd-bold.otf -->
<!-- futogo-b      H kozgostd-heavy.otf -->
<!-- futogo-b-v    V kozgostd-heavy.otf -->
<!-- jun101-l      H kozgostd-light.otf -->
<!-- jun101-l-v    V kozgostd-light.otf -->
<!--  -->
<!-- >JIS外字を扱えるようにするには，さらに -->
<!-- ftp://ftp.oreilly.com/pub/examples/nutshell/cjkv/adobe/aj16.tar.Z -->
<!-- を /usr/local/share/ghostscript/Resource -->
<!-- で展開しておき，齋藤修三郎さんの -->
<!-- [[UTF16用VF:http://psitau.kitunebi.com/utf.html]] -->
<!-- から utf パッケージをダウンロードして展開します。 -->
<!-- unzip utfbin.zip -->
<!-- cd utfbin -->
<!-- mv vf /usr/local/teTeX/share/texmf/fonts/vf/utf -->
<!-- mv tfm /usr/local/teTeX/share/texmf/fonts/tfm/utf -->
<!-- mkdir -p /usr/local/teTeX/share/texmf/ptex/platex/misc -->
<!-- mv *.sty /usr/local/teTeX/share/texmf/ptex/platex/misc/ -->
<!-- mv unicode.map /usr/local/teTeX/share/texmf/dvips/config/ -->
<!-- mv unicode-x.map /usr/local/teTeX/share/texmf/dvipdfm/config/ -->
<!-- >これで，ヒラギノをお持ちでしたら，/usr/local/teTeX/share/texmf/dvips/config/config.ps -->
<!-- の適当な場所に p +unicode.map と追加し，/usr/local/teTeX/share/texmf/dvipdfm/config/dvipdfmx.cfg -->
<!-- の最後に f unicode-x.map と追加します。 -->
<!-- ヒラギノ以外のフォントも使えます。 -->
<!--  -->
<!-- >2004/01/07以降のdvipdfmxでは，古い -f 対応パッチを当てないでください。 -->
<!--  -->
<!-- [[otf パッケージ:http://oku.edu.mie-u.ac.jp/~okumura/texwiki/?OTF]] については別ページにしました。 -->
<!--  -->
<!-- >Ignoring stream with with multiple segments というエラーが出たら -->
<!-- [[dvipdfm の日本語化 [Internet Archive]:http://replay.waybackmachine.org/20050618080951/http://www.nn.iij4u.or.jp/~tutimura/hirata/]] -->
<!-- のページにある patch-concat-stream.diff をあててください。 -->
<!-- Makefile.in だけエラーが出ますので，パッチを当てた後で Makefile.in -->
<!-- をエディタで開き，dvipdfmx_SOURCES に filter.c concat.c を追加，dvipdfmx_OBJECTS に filter.o concat.o -->
<!-- を追加します。 -->
<!--  -->
<!-- >古い epsbox.sty 対応のパッチを野田さんが作ってくださいました &#x5b;[[qa:23745]]&#x5d;。 -->
<!-- これは dvipdfmx-20031207 で取り込まれました (Thanks: 土村さん)。 -->
<!--  -->
<!-- **xdvi [#a7bdcae8] -->
<!--  -->
<!-- >Mac OS X では [[Skim>http://skim-app.sourceforge.net/]] のほうがおすすめです。 -->
<!-- Mac OS X + X11 で xdvi をインストールする方法は [[TeXのインストール - PukiWiki [Internet //Archive]:http://web.archive.org/web/20100612224822/http://www.imlab.sie.dendai.ac.jp/~odate/pukiwiki/index.php?TeX%A4%CE%A5%A4%A5%F3%A5%B9%A5%C8%A1%BC%A5%EB]] -->
<!-- に詳しく載っています。 -->
<!-- あるいは統合環境の [[TeXShop]] -->
<!-- を使えばエディタやプレビューアを別途用意する必要もなくなります。 -->
<!--  -->
<!-- >Plamo 3.3 でのコンパイルについては → -->
<!-- &#x5b;[[qa:22697]]&#x5d;，&#x5b;[[qa:22702]]&#x5d;。 -->
<!--  -->
<!-- 土村さんの -->
<!-- [[xdvi 日本語化・機能拡張パッチ:http://www.nn.iij4u.or.jp/~tutimura/tex/xdvi.html]] -->
<!-- のページから xdvik-22.40y1 のパッチをいただいてきます。 -->
<!-- また，土村さんのパッチの元になった最新の xdvik を CTAN -->
<!-- ミラー，たとえば -->
<!-- [[Ring Server の CTAN:dviware/xdvik/>CTAN:dviware/xdvik/]] -->
<!-- からいただいてきて作業します： -->
<!--  -->
<!-- tar xvzf xdvik-22.40y1.tar.gz -->
<!-- cd xdvik-22.40y1 -->
<!-- zcat xdvik-22.40y1-j1.21.patch.gz | patch -p1 -->
<!-- # - -with-vflib=vf2ft で FreeType 対応になります。 -->
<!-- # うまくいかなければ - -with-vflib=vf2ft を外して VFlib でお使いください。 -->
<!-- ./configure - -prefix=/usr/local/teTeX - -disable-multiplatform - -with-vflib=vf2ft -->
<!-- make -->
<!-- # 次の cd をすれば texmf.cnf が上書きされません (Thanks: takiさん) -->
<!-- cd texk/xdvik -->
<!-- make install -->
<!--  -->
<!-- FreeType2 の include ファイルが /usr/local/include/freetype2/freetype -->
<!-- に入っている場合はこのシンボリックリンクを /usr/local/include/freetype -->
<!-- に作っておかないとうまく探せないかもしれません。 -->
<!--  -->
<!-- - -with-vflib=vf2ft しなかった場合は，/usr/local/teTeX/share/texmf/xdvi/vfontmap -->
<!-- に次のように書いておきます。 -->
<!--  -->
<!-- min         min -->
<!-- tmin        tmin -->
<!-- nmin        min -->
<!-- goth        goth -->
<!-- tgoth       tgoth -->
<!-- ngoth       goth -->
<!-- jis         min -->
<!-- jis-v       tmin -->
<!-- jisg        goth -->
<!-- jisg-v      tgoth -->
<!-- dm          min -->
<!-- dg          goth -->
<!-- ryumin-l    min -->
<!-- ryumin-l-v  tmin -->
<!-- gtbbb-m     goth -->
<!-- gtbbb-m-v   tgoth -->
<!-- futomin-b   min -->
<!-- futomin-b-v tmin -->
<!-- futogo-b    goth -->
<!-- futogo-b-v  tgoth -->
<!-- jun101-l    goth -->
<!-- jun101-l-v  tgoth -->
<!--  -->
<!-- この左辺は tfm 名，右辺は /etc/vfontcap の項目名です。 -->
<!-- 適宜書き換えてください。 -->
<!--  -->
<!-- - -with-vflib=vf2ft の場合は右辺はフォントへのフルパスにします。 -->
<!-- 例えば次のようにします。 -->
<!-- ソースツリーの texk/xdvik/vfontmap.sample を参考にして補ってください -->
<!-- （左辺はこれ以外に min や goth など上に挙げてあるものを並べます）。 -->
<!--  -->
<!-- jis     /usr/local/share/ghostscript/fonts/kochi-mincho-subst.ttf -->
<!-- jisg    /usr/local/share/ghostscript/fonts/kochi-gothic-subst.ttf -->
<!-- jis-v   /usr/local/share/ghostscript/fonts/kochi-mincho-subst.ttf -->
<!-- jisg-v  /usr/local/share/ghostscript/fonts/kochi-gothic-subst.ttf -->
<!--  -->
<!-- 私は Linux も Mac OS X も FreeType 対応にしてしまいました。 -->
<!--  -->
<!-- ついでに，/usr/local/teTeX/share/texmf/xdvi/XDvi -->
<!-- または ~/.Xresources（または ~/.Xdefaults）に次のように標準的な開き方の設定しておくといいでしょう。 -->
<!--  -->
<!-- XDvi.Geometry: 950x700+0+0 -->
<!-- XDvi.shrinkFactor: 5 -->
<!-- XDvi.expert: true -->
<!-- XDvi.editor: emacsclient - -no-wait +%l %f -->
<!-- ! または XDvi.editor: gnuclient -q +%l %f -->
<!--  -->
<!-- 書き換えたら xrdb -merge ~/.Xdefaults のようなオマジナイが必要です。 -->
<!--  -->
<!-- Expert モード（右側のメニューがないモード）のオン／オフは x キーです。 -->
<!--  -->
<!-- (p)latex に -src オプションを与えると，xdvi を Ctrl-左クリック で Emacs の該当ソース個所に飛びます。 -->
<!-- 逆に，xdvi-search.el を使えば Emacs から xdvi の該当個所に飛べます。 -->
<!-- 詳細は -->
<!-- [[The Xdvik Homepage:http://xdvi.sourceforge.net/]] -->
<!-- の [[Inverse Search with Xdvi(k):http://xdvi.sourceforge.net/inverse-search.html]] -->
<!-- をご覧ください。 -->
<!-- AUCTeX で使う方法は [[AUCTeX]] のページにも書いておきました。 -->
<!--  -->
<!-- **udvips [#p7a85c4c] -->
<!--  -->
<!-- Unicode対応のdvipsです。 -->
<!--  -->
<!-- cd /usr/local/src/tetex-src-2.0.2/texk/ -->
<!-- mkdir udvipsk -->
<!-- cd udvipsk -->
<!-- cp -p ../dvipsk/* . -->
<!--  -->
<!-- ここでMakefileを次のように修正します。 -->
<!--  -->
<!-- 121c121 -->
<!-- < DEFS = -DHAVE_CONFIG_H $(XDEFS) -->
<!-- -  -->
<!-- > DEFS = -DHAVE_CONFIG_H $(XDEFS) -DUDVIPS -->
<!-- 225c225 -->
<!-- < program = dvips -->
<!-- -  -->
<!-- > program = udvips -->
<!--  -->
<!-- これでmakeします。 -->
<!--  -->
<!-- make clean -->
<!-- make -->
<!-- cp -p udvips /usr/local/teTeX/bin/ -->
<!--  -->
<!-- **日本語MetaPost [#b626cf65] -->
<!--  -->
<!-- 角藤さんが -->
<!-- [[hideyukiさん:http://www.sat.t.u-tokyo.ac.jp/~hideyuki/metapost/]] -->
<!-- のソースへのパッチを作ってくださいました &#x5b;[[qa:17471]]&#x5d;。 -->
<!-- このパッチを当てて少し修正したものを念のため -->
<!-- [[jmpost-0.04a.tar.gz:http://oku.edu.mie-u.ac.jp/~okumura/texfaq/jmpost-0.04a.tar.gz]] -->
<!-- として置いておきます。 -->
<!--  -->
<!-- cd /usr/local/src/tetex-src-2.0.2/texk/web2c/ptex-src-3.1.4/ -->
<!-- tar xvzf jmpost-0.04a.tar.gz -->
<!-- cd jmpost-0.04a/ -->
<!-- ./configure -->
<!-- make -->
<!-- make install -->
<!-- mktexlsr -->
<!--  -->
<!-- /usr/local/teTeX/share/texmf/web2c/texmf.cnf を次のように修正します。 -->
<!--  -->
<!-- MPXCOMMAND.jmpost = pmakempx -->
<!-- MPXCOMMAND = makempx -->
<!--  -->
<!-- あとはたぶん export TEX=platex のように環境変数を設定するだけです。 -->
<!--  -->
<!-- >松山さんも -->
<!-- [[jmpost-0.04-ptex312-cygwin.patch:http://village.infoweb.ne.jp/~fwhw5892/jweb/jmpost-0.04-ptex312-cygwin.patch]] -->
<!-- を作られました。 -->
<!-- hideyuki さんの jmpost-0.04 に対するパッチです。 -->
<!--  -->
<!-- **おまけ [#m65b8b36] -->
<!--  -->
<!-- /usr/local/teTeX/share/texmf/dvips/config/config.ps に o&nbsp;|lpr -->
<!-- という行があると「dvips ファイル名」で印刷が始まってしまいます。 -->
<!-- この仕様が嫌な人はこの行の先頭に % を付けてコメントアウトしておきましょう。 -->
<!--  -->
<!-- 古い dvips では /usr/local/teTeX/share/texmf/dvips/tetex/config.pdf の G -->
<!-- とだけ書いた行があると不都合があることがありましたが，今は問題ありません。 -->
<!--  -->
<!-- /usr/local/teTeX/share/texmf 以下にファイルを追加するたびに mktexlsr -->
<!-- または texhash というコマンドを打ち込まなければなりません。 -->
<!-- これが面倒な人は，/usr/local/teTeX/share/texmf/ls-R -->
<!-- を削除し，/usr/local/teTeX/share/texmf/web2c/texmf.cnf の -->
<!--  -->
<!-- TEXMF = {$HOMETEXMF,!!$TEXMFLOCAL,!!$TEXMFMAIN} -->
<!--  -->
<!-- の !! をすべて消しておきます。 -->
<!--  -->
<!-- ついでに，texmf.cnf で -->
<!--  -->
<!-- TEXINPUTS = .;$TEXMF/tex/{generic,}// -->
<!--  -->
<!-- を -->
<!--  -->
<!-- TEXINPUTS = .;$TEXMF/{tex,ptex}/{generic,}// -->
<!--  -->
<!-- に変えると，kpsewhich jarticle.cls -->
<!-- と打ち込んだとき jarticle.cls -->
<!-- の場所が見つかるようになります。 -->
<!--  -->
<!-- フォントの自動作成を /var/tmp/texfonts 以下にするには， -->
<!-- /usr/local/teTeX/share/texmf/web2c/mktex.cnf で -->
<!--  -->
<!-- : ${MT_FEATURES=appendonlydir,varfonts} -->
<!--  -->
<!-- のようにしておきます。 -->
<!--  -->
<!-- また，[[qa:6863]] -->
<!-- にあるように，鈴木秀幸さんのご指摘に従って -->
<!-- /usr/local/teTeX/share/texmf/tex/latex/graphics/dvips.def -->
<!-- を以下のように修正すると特殊な場合に文字のずれがなくなるようです（しかしこれだと xdvi -->
<!-- がうまく働かない？ ← 日本語パッチを当てなければ大丈夫のようです。Thanks: 土村さん）： -->
<!--  -->
<!-- \def\Gscale@start{\special{ps: gsave currentpoint currentpoint translate -->
<!-- \Gscale@x\space \Gscale@y\space scale neg exch neg exch translate}} -->
<!-- \def\Gscale@end{\special{ps: currentpoint matrix currentmatrix transform -->
<!-- grestore matrix currentmatrix itransform moveto}} -->
<!--  -->
<!-- [[TeX を使ってみよう:http://oku.edu.mie-u.ac.jp/~okumura/tex/]] -->
<!-- のように CGI で運用するときは，texmf.cnf で openin_any = p -->
<!-- にしておかないと危険かもしれません（[[詳細:http://oku.edu.mie-u.ac.jp/~okumura/texwiki/?TeX%E3%82%92Web%E3%81%A7]]）。 -->
<!--  -->
<!-- **新LaTeXのインストール [#xa73b0d0] -->
<!--  -->
<!-- 2004年3月にリリースされた2003年12月付のLaTeXをインストールしてみます。 -->
<!-- ptex-texmf-2.2 は、正式に新LaTeXに対応していますから、必ずこの作業を -->
<!-- して下さい。 -->
<!--  -->
<!-- 適当な近場，例えば Ring Server の [[CTAN:macros/latex/base/]] -->
<!-- をディレクトリごといただいてきて，その中で作業します。 -->
<!--  -->
<!-- initex unpack.ins -->
<!-- initex latex.ltx -->
<!-- mv /usr/local/teTeX/share/texmf/tex/latex/base ../base-bak -->
<!-- mkdir /usr/local/teTeX/share/texmf/tex/latex/base -->
<!-- mv latex.fmt /usr/local/teTeX/share/texmf/web2c/ -->
<!-- mv latexbug.tex testpage.tex lablst.tex idx.tex nfssfont.tex \ -->
<!-- small2e.tex sample2e.tex docstrip.tex \ -->
<!-- *.ltx *.cls *.clo *.sty *.fd *.def *.cfg \ -->
<!-- /usr/local/teTeX/share/texmf/tex/latex/base/ -->
<!-- mv *.ist /usr/local/teTeX/share/texmf/makeindex/ -->
<!-- cd /usr/local/teTeX/share/texmf/ptex/platex/base/ -->
<!-- iniptex platex.ltx -->
<!-- mv platex.fmt /usr/local/teTeX/share/texmf/web2c/ -->
