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
<tr><td> mathabx </td><td> TeX 用の新しい数式フォント</td><td>○</td></tr>
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

Vine3.0 ではjsarticle，jsbookが古いのでdvipdfmxと組み合わせたとき不具合が起こる
(Vine3.1 では大丈夫)
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

なお、ghostscript のフロントエンドとしては、
ggv が採用されました。
以前の gv は VinePlus にあります。

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
Linux 版 Adobe Reader では日本語のしおりは化けるので、
Win 版などで動作確認してください。
なお、dvipdfm は dvidfmx へのシンボリックリンクにしています。

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

- dvipdfmx で大きな括弧など一部のフォントが欠落してしまうことがあります。
    [Make](/Make/#content_1_4) にある通り、\usepackage{type1cm} とするのがよいようです。
    どうしても気になる人は、updmap スクリプトを修正しても構いません。
    [qa:32659](https://okumuralab.org/~okumura/texfaq/qa/32659.html) を御覧下さい。
