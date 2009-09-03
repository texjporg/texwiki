---
title: "Linux/vine"
url: "/Linux/vine/"
date: 2004-09-06T17:10:27Z
pukiwiki: "Linux/vine"
---

# Linux/vine

## Vine Linux 5.0 {#vac9e97f}

[Vine Linux 5.0](http://vinelinux.org/whatsnew.html#20090824) がリリースされました。

オンラインドキュメントでは、TeX 関連のドキュメントを少しずつ更新しながら充実させていく予定です。

- [日本語 TeX 利用ガイド - Vine Linux](http://vinelinux.org/manuals/tex-guide.html)

現時点 (2009/09/04) では、第 1 章 日本語 TeX 環境の構築のところで、TeX 関連パッケージの説明を一通り書けていますが、第 2 章 カスタマイズ および 第 3 章 TeX 関連パッケージの紹介 のところは、骨抜きです。

### Emacs 上での TeX コーディング {#w960fd23}

5.0 から Vine Linux のデフォルト設定として vine-default という仕組みを搭載しました。詳細は以下のドキュメントを参照してください。

- [Emacs 利用ガイド - Vine Linux](http://vinelinux.org/manuals/emacs-guide.html)

現在，やてふ（YaTeX）をデフォルトとして対応しています。AUCTeX は未対応ですが、要望があればパッケージングする予定です。

### Adobe Reader のインストール {#d5b65e06}

install-assist-AdobeReader_jpn パッケージをインストールしますと、自動的に rpm を Adobe 社サイトから取得して，その rpm をインストールをする補助をします。

```
$ sudo apt-get install install-assist-AdobeReader_jpn
```

## Vine Linux 4.2 {#oae2fbd9}

[Vine Linux 4.2](http://vinelinux.org/whatsnew.html#20071225) がリリースされました。
おそらく，日本語 TeX を使う上では最もよく調整されたものになっているはずです。
なお Vine Linux 4.0 および 4.1 からは 4.2 にアップグレードすることが勧められています。

ご存じの方も多いと思いますが，Vine Linux 4.0 から[土村さん](http://www.nn.iij4u.or.jp/~tutimura/)の
[ptetex3](http://tutimura.ath.cx/ptetex/?FrontPage) が採用されています（配布版とわずかに異なるようです）。
日本語 TeX 環境として，現在入手しうる限りで最良のもののひとつであると思われます。
なお配布版の[インストール報告](http://tutimura.ath.cx/ptetex/?FrontPage%23h6346efc)もあるようです。

Vine Linux 4.2 で [Adobe Reader 8.1.4](http://get.adobe.com/jp/reader/) を利用するためには，
libstdc++34 に含まれる libstdc++.so.6 が必要です．
詳しくは，[Vine Linux ユーザーフォーラム](http://groups.google.co.jp/group/vine-users-forum) 内の
[Adobe Reader 8.1.1 の Vine Linux 4.2 へのインストール - Vine Linux Tips &amp; Tricks](http://groups.google.co.jp/group/vine-linux-tips-tricks/browse_thread/thread/79c8dbee7a2f6050/441432e146aa0959) 
を参照して下さい．

Vine 3.x の時には AdobeReader_jpn-7.0.8-1 のメニューがちらついていましたが、
4.0/4.1 になってもう大丈夫になりました。

小さな不具合が見つかっています。[qa:47964](https://okumuralab.org/~okumura/texfaq/qa/47964.html)，[qa:47986](https://okumuralab.org/~okumura/texfaq/qa/47986.html)

## Vine Linux 3.2 {#c910db28}

Vine Linux 3.2 がリリースされました。
おそらく，日本語 TeX を使う上では最もよく調整されたものになっているはず。
なお Vine Linux 3.0/3.1 からは 3.2 にアップグレードすることが勧められています。

Errata \[[ 2005,03,01 \] xdvik にセキュリティホール](http://vinelinux.org/errata/3x/20050301-2.html)
\[[ 2005,02,16 \] tetex にセキュリティホール](http://vinelinux.org/errata/3x/20050216-1.html)
が出ていますので “apt-get upgrade” するのがよいでしょう。
ただし，小さなデグレが報告されています。
\[[vine-users:070537\]](http://search.luky.org/vine-users.7/msg00534.html)

<!-- upgrade したあと、dvips で日本語が化けてしまうようになりました。調べてみると、updmap.cfg に、texmf/dvips/config/extmap/kanjifonts.map が書かれていないためのようでした。map ファイル名を追記して updmap したところ、dvips が正しく動作するようになりました。 -->
<!-- →そんなはずはありません。Vine 3.1 の updmap にはパッチが当ててあって、 -->
<!-- texmf/dvips/config/extmap/ 以下のすべての map ファイルを読み込むように -->
<!-- なっています。（あまりにも場当たり的な手法なので、将来廃止します。） -->
<!-- map ファイル名を追記せずに updmap しても直ったと思います。 -->
<!-- $TEXMF が変なところを指してるときに updmap を実行したなんてことはないでしょうか。 -->
<!-- 最初に書いたものです。大学の環境では問題が起きたのですが、自宅では正しく動作していました。おそらく私の設定が何かおかしかったのでしょう。解決したのでコメントアウトします。 -->

### インストール {#c9fbb999}

```
$ sudo apt-get install task-tetex
```

これで，jvf tetex tetex-extra xdvik （Vine Linux 3.1/3.2 では xdvik-search も） dvipdfmx tetex-macros がインストールされる。

その他，必要に応じて下記をインストールする。

|  Name  |  用途  |  tex-apt-get.sh |
|---|---|---|
|  detex  |  TeX コマンドを取り除くプログラム | ○ |
|  ghostscript-fonts  |  Fonts for the Ghostscript PostScript&trade; interpreter. | ○ |
|  latex2html  |  LaTeX ファイルを HTML 形式に変換するツール | ○ |
|  yatex  |  [野鳥 (YaTeX)](http://www.yatex.org/)&mdash;Yet Another TeX mode for Emacs | ○ |
|  TeXmacs  |  A structured wysiwyg scientific  text editor | ○ |
|  auctex  |  Emacs 上での TeX ファイル編集を支援するマクロパッケージです | ○ |
|  dvi2tty  |  convert dvi files to simple ASCII | ○ |
|  jadetex  |  TeX macros used by Jade TeX output. | ○ |
|  latex-xft-fonts  |  xft-compatible LaTeX fonts for math symbols | ○ |
|  lyx  |  LaTeX 形式でも保存できる簡易ワープロ | ○ |
|  mathabx  |  TeX 用の新しい数式フォント（[堀田先生](http://auemath.aichi-edu.ac.jp/~khotta/ghost/)の[作成パッケージ](http://auemath.aichi-edu.ac.jp/~khotta/ghost/mathabx.html)／[ミラーサイト](http://www.geocities.jp/koh_hotta/ghost/mathabx.html)） | ○ |
|  plain2  |  plain-text converter (to LaTeX, ROFF and HTML) | ○ |
|  task-texmacro-info  |  情報科学工学に関する teTeX マクロをインストールするための仮想パッケージ | ○ |
|  task-texmacro-phys  |  物理学に関する teTeX マクロをインストールするための仮想パッケージ | ○ |
|  tetex-doc  |  TeX テキスト整形システムに関する説明文書類 | ○ |
|  texmacro-his  |  teTeX で使うマクロパッケージ ヒューマンインタフェース学会論文原稿作成用 | ○ |
|  texmacro-ieice  |  teTeX で使うマクロパッケージ 電子情報通信学会論文原稿，技術研究報告作成用 | ○ |
|  texmacro-ipsj  |  teTeX で使うマクロパッケージ 情報処理学会論文原稿作成用 | ○ |
|  texmacro-jps  |  teTeX で使うマクロパッケージ 日本物理学会論文原稿作成用 | ○ |
|  texmacro-otf  |  teTeX で使うマクロパッケージ（[齋藤修三郎氏](http://psitau.at.infoseek.co.jp/)による「[OpenType Font 用 VF](http://psitau.at.infoseek.co.jp/otf.html)」） | ○ |
|  tgif2tex  |  tgif の図中の文字列を TeX で処理する | ○ |
|  python-bibtex  |  Python extension to parse BibTeX files. | ○ |
|  ps2jpdf  |  日本語しおりの文字化け対策 + “ps2pdf -dNOKANJI”  | 下の方参照 |
|  xpdfopen  |  Adobe Reader に「ファイルを開く／閉じる」コマンドを送信  |  |

apt-get 自動実行スクリプト

<a href="/attach/Linux/vine/tex-apt-get.sh">tex-apt-get.sh</a>

Vine Linux 3.0 のインストール直後の状態では
jsarticle，jsbook が古いので dvipdfmx と組み合わせたとき不具合が起こる
（update すれば直る。Vine Linux 3.1/3.2 でも大丈夫）
（[qa:32161](https://okumuralab.org/~okumura/texfaq/qa/32161.html)，[qa:32163](https://okumuralab.org/~okumura/texfaq/qa/32163.html)，[qa:32167](https://okumuralab.org/~okumura/texfaq/qa/32167.html)）。

## xdvi 関連の設定 {#j0808b38}

Vine Linux 3.0/3.1/3.2 では xdvi が Type 1 フォントを使えるようになったので，もう pk フォントは必要なくなりました。
また，src-special に対応になりました。xdvi とエディタの間で，対応する部分に相互にジャンプができるようになりました。 

### src-special {#q8a76901}

相互ジャンプをしたいなら，
platex コマンドに “-src-specials” オプションを付けてコンパイルします。

#### Emacs の設定 {#dd48a0a7}

$HOME/.emacs.el の設定は，/etc/skel/.emacs.el に標準的なものが書いてありますが，524行目あたりの

```
     tex-command "platex"
```

を

```
     tex-command "platex -src-specials"
```

に書き換えておくと便利でしょう（Vine Linux 3.0/3.1/3.2 共通）。
emacs の YaTeX 上で TeX のコンパイルをするには，C-c t j です。 <!-- わざわざ .emacs.el をいじらなくても，Vine Linux では YaTeX が標準なので， --> <!-- $HOME/.cshrc に alias で platex を platex -src-specials にしたり， --> <!-- xdvi や dvips，dvipdfmx なども汎用の設定があるならば， --> <!-- alias しておくのが一番簡単だと思います． -->

標準的な設定とは以下のことです。

```
;;; TeX source special のための設定
(require 'xdvi-search) ; 必須
(custom-set-variables
 '(server-switch-hook (quote (raise-frame)))) ; 窓を上に
(custom-set-faces)
(add-hook 'yatex-mode-hook
          '(lambda ()
             (define-key YaTeX-mode-map "\C-c\C-j" 'xdvi-jump-to-line)))
```

Vine Linux 3.1/3.2 ではこの source special の設定を xdvik-search パッケージのファイルにも
書いておきましたので，個人の設定は消しても構いません。
（XEmacs でも設定なしで使えるようになりました。）
また Vine Linux 3.0 から upgrade した人は，
xdvik-search がインストールされてることを確認して下さい。

#### 使い方 {#m58ea2ef}

- Emacs から xdvi へのジャンプは，TeX ソースを編集中に C-c C-j または M-x xdvi-jump-to-line と入力します。
    （必要ならば） xdvi が立ち上がり，該当部分に四角の印がつきます。

- xdvi から Emacs へのジャンプは，Ctrl + マウスクリック です。

## Tips {#i9701d34}

- Ghostscript 7.07 のおかげで，日本語 PDF を作れる場面が増えました。

```
ps2pdf -dNOKANJI hoge.ps
```

と，“-dNOKANJI” オプションを付けるのがポイントです。

あるいは Vine extras の ps2jpdf パッケージをインストールしておけば，
ps2jpdf コマンドがオプションなしで同様の作業をしてくれます。
更に日本語しおりの文字化け対策も含んでいるので，こちらのほうが便利でしょう。
(apt でインストールできますが，
/etc/apt/sources.list を少し編集しておく必要があります。)

なお Ghostscript のフロントエンドとしては，
ggv が採用されました。
以前の gv は VinePlus にあります。apt でインストールできます。

- PDF 作成の dvipdfmx が Vine Linux 本体に収録されました。
    日本語のしおりの作り方が変更になりました。
    dvipdfm で必要だった out2uni は不要になり，
    その代わりにプリアンプルに

```
\usepackage[dvipdfm,bookmarks=true,bookmarksnumbered=true,%
bookmarkstype=toc]{hyperref}
\AtBeginDvi{\special{pdf:tounicode EUC-UCS2}}
```

のように書いておきます。（3行目がポイントです。）
Linux 版 Acrobat Reader 5.0 までは日本語のしおりは化けるので，
Adobe Reader 7.0 か Microsoft Windows 版などで動作確認してください。 <!-- なお、dvipdfm は dvipdfmx へのシンボリックリンクにしています。 -->

- tetex-extra パッケージはインストール CD には収録されていません。
    TX fonts, PX fonts 等も含まれているので，
    apt-get でインストールするのがよいでしょう。

    ```
    # apt-get update
    # apt-get install tetex-extra
    ```

- 齋藤修三郎氏の [OTF パッケージ](/OTF/)が，VinePlus に texmacro-otf として用意されています。
    dvipdfmx と組み合わせると，商用フォントがなくても
    囲み付き文字や「はしご高（&#x9ad9;）」などを含んだ PDF を作れます。

ただし，OTF + dvipdfmx がうまく動きません。
→ texmacro-otf-1.2.6-0vl2 で修正されました。 <!-- しばらくすれば修正されるでしょうが、 --> <!-- 待てない場合は次のように小文字ファイル名にすれば直ります。 --> <!--  # cd /usr/share/texmf/dvipdfm/config/otf/ --> <!--  # mv noFont-udvips.map nofont-udvips.map --> <!--  # updmap-otf -->

- dvipdfmx で大きな括弧など一部のフォントが欠落してしまうことがあります。
    [TeXWiki:Make#teTeX のインストール](/Make/#content_1_4) にある通り，
    \usepackage{type1cm} とするのがよいようです。
    [qa:32659](https://okumuralab.org/~okumura/texfaq/qa/32659.html) のように updmap スクリプトを修正しても構いません。
    →\[[ 2005,02,16 \] tetex にセキュリティホール](http://vinelinux.org/errata/3x/20050216-1.html)
    (tetex-2.0.2-0vl14) で修正されました。

- dvipdfmx で EPS を取り込むときに，
    日本語フォントがビットマップで埋め込まれてしまいます。
    dvipdfmx.cfg の gs を呼び出す引数に “-dNOKANJI” を付け加えた上で，
    [TeXWiki:Ghostscript 7.07#和文フォントの設定（和田研フォント編）](</Ghostscript 7.07/#i37976e7>) のように
    埋め込まない欧文フォント名も列挙しておくのがよいでしょう。
    以下の patch ... EOF をペーストして実行するのが簡単。

```
patch -p0 <<EOF
--- /usr/share/texmf/dvipdfm/config/dvipdfmx.cfg.orig   2004-07-24 09:07:51.000000000 +0900
+++ /usr/share/texmf/dvipdfm/config/dvipdfmx.cfg        2005-04-09 02:11:57.000000000 +0900
@@ -15,8 +15,8 @@
 % D "/usr/local/bin/pstill -c -o %o %i"
 
 % The following line works with GhostScript
-% UNIX/Linux (borrowed from W32TeX by Akira Kakuto)
-D "gs -q -dNOPAUSE -dBATCH -sPAPERSIZE=a0 -sDEVICE=pdfwrite -dCompatibilityLevel=1.3 -dAutoFilterGrayImages=false -dAutoFilterColorImages=false -dGrayImageFilter=/FlateEncode -dColorImageFilter=/FlateEncode -dUseFlateCompression=true -sOutputFile=%o %i -c quit"
+% UNIX/Linux (borrowed from W32TeX by Akira Kakuto + from TeX Wiki by Haruhiko Okumura)
+D "gs -q -dNOPAUSE -dBATCH -sPAPERSIZE=a0 -sDEVICE=pdfwrite -dCompatibilityLevel=1.3 -dAutoFilterGrayImages=false -dAutoFilterColorImages=false -dGrayImageFilter=/FlateEncode -dColorImageFilter=/FlateEncode -dUseFlateCompression=true -sOutputFile=%o -dNOKANJI -c '.setpdfwrite << /NeverEmbed [/Courier /Courier-Bold /Courier-Oblique /Courier-BoldOblique /Helvetica /Helvetica-Bold /Helvetica-Oblique /Helvetica-BoldOblique /Times-Roman /Times-Bold /Times-Italic /Times-BoldItalic /Symbol /ZapfDingbats /Ryumin-Light /GothicBBB-Medium] >> setdistillerparams' -f %i -c quit"
 % Win32 (borrowed from W32TeX by Akira Kakuto)
 % D "gswin32c -q -dNOPAUSE -dBATCH -sPAPERSIZE=a4 -sDEVICE=pdfwrite -dCompatibilityLevel=1.3 -dAutoFilterGrayImages=false -dAutoFilterColorImages=false -dGrayImageFilter=/FlateEncode -dColorImageFilter=/FlateEncode -dUseFlateCompression=true -sOutputFile=%o %i -c quit"
 % The following line works on compressed or uncompressed postscript with GhostScript
EOF
```

この修正をすると dvipdfmx が EPS を埋め込む時に
次のようなメッセージを出すようになりますが，それで正常です。

```
[1][2*** unembeddable CIDFont: /Ryumin-Light
*** unembeddable CIDFont: /GothicBBB-Medium
```

- Adobe Reader 7 （rpm 版）をインストールする前に
    VinePlus の openldap を入れておくと，
    acroread 立ち上げ時のエラー表示がなくなります。
    またバージョンによって微妙にうまく動かないことがあります。
    - AdobeReader_jpn-7.0.0 〜 7.0.1 は印刷時に２枚目以降が文字化けすることがあります。
        ［スピードを優先して最適化］ のチェックをはずすと回避できるようです。
    - AdobeReader_jpn-7.0.5 〜 7.0.9 は，プルダウンメニューがちらつきます。
        避ける方法はなさそうなので，7.0.1 を使うしかないでしょう。

- xpdfopen パッケージを入れておくと，pdfopen/pdfclose コマンドで
    Adobe Reader の閲覧ファイルを制御できるようになります。
    gs/xdvi などと異なり，閲覧中のファイルを更新しても Adobe Reader は再読み込みしてくれませんが，

    ```
    pdfclose --file foo.pdf; make foo.pdf; pdfopen --file foo.pdf
    ```

    とすれば更新ファイルを読み込んでくれます。
    （先頭ページにジャンプしてしまうのが惜しいところです。）
