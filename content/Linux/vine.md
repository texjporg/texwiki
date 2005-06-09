---
title: "Linux/vine"
url: "/Linux/vine/"
date: 2004-09-06T17:10:27Z
pukiwiki: "Linux/vine"
---

# Linux/vine

## VineLinux3.1 {#c910db28}

VineLinux3.1がリリースされました。おそらく、日本語TeXを使う上では
最もよく調整されたものになっているはず。
なお Vine3.0 からは 3.1 にアップグレードすることが勧められています。

Errata \[[ 2005,03,01 \] xdvik にセキュリティホール](http://vinelinux.org/errata/3x/20050301-2.html)
\[[ 2005,02,16 \] tetex にセキュリティホール](http://vinelinux.org/errata/3x/20050216-1.html)
が出ていますので apt-get upgrade するのがよいでしょう。
ただし、小さなデグレが報告されています。
\[[vine-users:070537\]](http://search.luky.org/vine-users.7/msg00534.html)

upgradeしたあと、dvipsで日本語が化けてしまうようになりました。調べてみると、updmap.cfgに、texmf/dvips/config/extmap/kanjifonts.mapが書かれていないためのようでした。mapファイル名を追記してupdmapしたところ、dvipsが正しく動作するようになりました。

### インストール {#c9fbb999}

```
$ sudo apt-get install task-tetex
```

これで、jvf tetex tetex-extra xdvik (Vine3.1 では xdvik-search も) dvipdfmx tetex-macros がインストールされる。

その他、必要に応じて下記をインストールする。

<table>
<tbody>
<tr><td> Name </td><td> 用途 </td><td> tex-apt-get.sh</td></tr>
<tr><td> detex </td><td> TeXコマンドを取り除くプログラム</td><td>○</td></tr>
<tr><td> ghostscript-fonts </td><td> Fonts for the Ghostscript PostScript(TM) interpreter.</td><td>○</td></tr>
<tr><td> latex2html </td><td> LaTeX ファイルを HTML 形式に変換するツール</td><td>○</td></tr>
<tr><td> yatex </td><td> 野鳥(YaTeX) - Yet Another TeX mode for Emacs</td><td>○</td></tr>
<tr><td> TeXmacs </td><td> A structured wysiwyg scientific  text editor</td><td>○</td></tr>
<tr><td> auctex </td><td> Emacs 上でのtexファイル編集を支援するマクロパッケージです</td><td>○</td></tr>
<tr><td> dvi2tty </td><td> convert dvi files to simple ASCII</td><td>○</td></tr>
<tr><td> jadetex </td><td> TeX macros used by Jade TeX output.</td><td>○</td></tr>
<tr><td> latex-xft-fonts </td><td> xft-compatible LaTeX fonts for math symbols</td><td>○</td></tr>
<tr><td> lyx </td><td> LaTeX形式でも保存できる簡易ワープロ</td><td>○</td></tr>
<tr><td> mathabx </td><td> TeX 用の新しい数式フォント (堀田先生の<a href="http://auemath.aichi-edu.ac.jp/~khotta/ghost/mathabx.html">作成パッケージ</a> / <a href="http://www.geocities.jp/koh_hotta/ghost/mathabx.html">ミラーサイト</a>)</td><td>○</td></tr>
<tr><td> plain2 </td><td> plain-text converter (to LaTeX, ROFF and HTML)</td><td>○</td></tr>
<tr><td> task-texmacro-info </td><td> 情報科学工学に関する teTeX マクロをインストールするための仮想パッケージ</td><td>○</td></tr>
<tr><td> task-texmacro-phys </td><td> 物理学に関する teTeX マクロをインストールするための仮想パッケージ</td><td>○</td></tr>
<tr><td> tetex-doc </td><td> TeX テキスト整形システムに関する説明文書類</td><td>○</td></tr>
<tr><td> texmacro-his </td><td> tetex で使うマクロパッケージ ヒューマンインタフェース学会論文原稿作成用</td><td>○</td></tr>
<tr><td> texmacro-ieice </td><td> teTeX で使うマクロパッケージ 電子情報通信学会論文原稿、技術研究報告作成用</td><td>○</td></tr>
<tr><td> texmacro-ipsj </td><td> teTeX で使うマクロパッケージ 情報処理学会論文原稿作成用</td><td>○</td></tr>
<tr><td> texmacro-jps </td><td> tetex で使うマクロパッケージ 日本物理学会論文原稿作成用</td><td>○</td></tr>
<tr><td> texmacro-otf </td><td> tetex で使うマクロパッケージ (齋藤修三郎氏による「OpenType Font用VF」)</td><td>○</td></tr>
<tr><td> tgif2tex </td><td> tgif の図中の文字列を TeX で処理する</td><td>○</td></tr>
<tr><td> python-bibtex </td><td> Python extension to parse BibTeX files.</td><td>○</td></tr>
</tbody>
</table>

apt-get 自動実行スクリプト

<a href="/attach/Linux/vine/tex-apt-get.sh">tex-apt-get.sh</a>

Vine3.0 のインストール直後の状態では
jsarticle，jsbookが古いのでdvipdfmxと組み合わせたとき不具合が起こる
(update すれば直る、Vine3.1 でも大丈夫)
[qa:32161](https://okumuralab.org/~okumura/texfaq/qa/32161.html)，
[qa:32163](https://okumuralab.org/~okumura/texfaq/qa/32163.html)，
[qa:32167](https://okumuralab.org/~okumura/texfaq/qa/32167.html)。

## xdvi関連の設定 {#j0808b38}

Vine3.0/3.1 では、xdviがType1 フォントを使えるようになったので、もう pk フォントは必要なくなりました。また、src-special に対応になりました。 xdvi とエディタの間で、対応する部分に相互にジャンプができるようになりました。 

### src-special {#q8a76901}

platexコマンドにに-src-specialsオプションを付けてコンパイルするとsrc-specialが埋め込まれたdviができあがります。

#### emacsの設定 {#dd48a0a7}

$HOME/.emacs.el の設定は、/etc/skel/.emacs.el に標準的なものが書いてありますが、524行目あたりの

```
     tex-command "platex"
```

を

```
     tex-command "platex -src-specials"
```

に書き換えておくと便利でしょう。(Vine3.0/3.1 共通)

標準的な設定とは以下のことです。

```
;; TeX source special のための設定
(require 'xdvi-search) ; 必須
(custom-set-variables
 '(server-switch-hook (quote (raise-frame)))) ; 窓を上に
(custom-set-faces)
(add-hook 'yatex-mode-hook
          '(lambda ()
             (define-key YaTeX-mode-map "\C-c\C-j" 'xdvi-jump-to-line)))
```

Vine3.1 ではこの source special の設定を xdvik-search パッケージのファイルにも
書いておきましたので、個人の設定は消しても構いません。
（XEmacs でも設定なしで使えるようになりました。）
また Vine3.0 からupgrade した人は、
xdvik-search がインストールされてることを確認して下さい。

#### 使い方 {#m58ea2ef}

- emacs から xdvi へのジャンプは、 TeX ソースを編集中に C-c C-j または M-x xdvi-jump-to-line と入力します。（必要ならば）xdvi が立ち上がり、該当部分に四角の印がつきます。

- xdvi から emacs へのジャンプは、 Ctrl + マウスクリックです。

## Tips {#i9701d34}

- ghostscript-7.07 のおかげで、日本語PDFを作れる場面が増えました。

```
ps2pdf -dNOKANJI hoge.ps
```

と、"-dNOKANJI" オプションを付けるのがポイントです。

あるいは、Vine extras の ps2jpdf パッケージをインストールしておけば、
ps2jpdf コマンドがオプションなしで同様の作業をしてくれます。
更に、日本語しおりの文字化け対策も含んでいるので、こちらのほうが便利でしょう。
(apt でインストールできますが、
/etc/apt/sources.list を少し編集しておく必要があります。)

なお、ghostscript のフロントエンドとしては、
ggv が採用されました。
以前の gv は VinePlus にあります。apt でインストールできます。

- PDF 作成の dvipdfmx が Vine本体に収録されました。
    日本語のしおりの作り方が変更になりました。
    dvipdfm で必要だった out2uni は不要になり、
    その代わりに、プリアンプルに

```
\usepackage[dvipdfm,bookmarks=true,bookmarksnumbered=true,%
bookmarkstype=toc]{hyperref}
\AtBeginDvi{\special{pdf:tounicode EUC-UCS2}}
```

のように書いておきます。（３行目がポイントです。）
Linux 版 Acrobat Reader 5.0 までは日本語のしおりは化けるので、
Adobe Reader 7.0 か Win 版などで動作確認してください。 <!-- なお、dvipdfm は dvipdfmx へのシンボリックリンクにしています。 -->

- tetex-extra パッケージはインストール CD には収録されていません。
    TX fonts, PX fonts 等も含まれているので、
    apt-get でインストールするのがよいでしょう。

    ```
    # apt-get update
    # apt-get install tetex-extra
    ```

- 齋藤修三郎氏の OTF パッケージが、VinePlus に texmacro-otf として用意されています。
    dvipdfmx と組み合わせると、商用フォントがなくても、
    囲み付き文字や「はしご高 (&#x9ad9;)」などを含んだ PDF を作れます。

ただし、OTF + dvipdfmx がうまく動きません。
→ texmacro-otf-1.2.6-0vl2 で修正されました。 <!-- しばらくすれば修正されるでしょうが、 --> <!-- 待てない場合は次のように小文字ファイル名にすれば直ります。 --> <!--  # cd /usr/share/texmf/dvipdfm/config/otf/ --> <!--  # mv noFont-udvips.map nofont-udvips.map --> <!--  # updmap-otf -->

- dvipdfmx で大きな括弧など一部のフォントが欠落してしまうことがあります。
    [ソースからのMake](/Make/#content_1_4) にある通り、
    \usepackage{type1cm} とするのがよいようです。
    [qa:32659](https://okumuralab.org/~okumura/texfaq/qa/32659.html) のように updmap スクリプトを修正しても構いません。
    →\[[ 2005,02,16 \] tetex にセキュリティホール](http://vinelinux.org/errata/3x/20050216-1.html)
    (tetex-2.0.2-0vl14) で修正されました。

- dvipdfmx で EPS を取り込むときに、
    日本語フォントがビットマップで埋め込まれてしまいます。
    dvipdfmx.cfg の gs を呼び出す引数に -dNOKANJI を付け加えた上で、
    [Ghostscript 7.07](</Ghostscript 7.07/#i37976e7>) のように
    埋め込まない欧文フォント名も列挙しておくのがよいでしょう。
    以下の patch 〜 EOF をペーストして実行するのが簡単。

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
