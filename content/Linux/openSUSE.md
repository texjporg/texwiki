---
title: "Linux/openSUSE"
url: "/Linux/openSUSE/"
date: 2011-10-16T16:15:57Z
pukiwiki: "Linux/openSUSE"
---

# Linux/openSUSE

## [openSUSE](http://www.opensuse.org/) {#nea99a9d}

- [openSUSE.org](http://www.opensuse.org/)
- [メインページ - openSUSE](http://ja.opensuse.org/)
- [Bloody Rose ～ Red456 の openSUSE 導入メモ ～  LaTeX 日本語環境のインストール](http://red456.blog5.fc2.com/blog-entry-174.html)

## SUSE Linux 9.1でのLaTeX導入備忘録 {#q683ee52}

\[最終更新 2004-09-07\]
以降はSUSE 9.1 Personal FTP(iso386)版をベースにした記述です。

### 内容 {#sc391ec9}

### links {#k70b7cec}

こちらのページが参考になります。

- [Personal 版と日本語環境:](http://ssjv.sourceforge.jp/modules.php?name=News&file=article&sid=48)
- [2ch SUSE Linux Part 4 (156-157さん):](http://pc5.2ch.net/test/read.cgi/linux/1085746783/156-157)
- [SUSE pTeX:](http://www.suse.de/~mfabian/suse-cjk/ptex-platex.html)
- [suse-linux-ja@suse.com Mailing list:](http://www.suse.de/~mfabian/suse-linux-ja-mailing-list.html)

### install {#h6ddc907}

FTP isoからインストールしたSUSEは日本語が<strong>読めても書けません</strong>。日本語を使いたい人はまず日本語環境を整備しておいてください(ghostscript関連など必須です)。なお、こちらに関連事項があります。

#### pTeX基本一式 {#q77e22e6}

SUSEでpTeXを入れます。基本的な作業はYaSTから全て行えます。必要なパッケージを検索して選択します。cjkで検索しますと，とりあえず TeX では次のようなものが検索されます。

- cjk-latex
- cjk-latex-hbf-jisksp40
- cjk-latex-hbf-kanji48
- cjk-latex-wadalab-gothic
- cjk-latex-wadalab-maru
- cjk-latex-wadalab-maru2
- cjk-latex-wadalab-mincho
- cjk-latex-wadalab-mincho2
- te_ptex

> (2004-07-07追記)但し、cjk-latexはptexとは違い、cjk環境に対応させるためのマクロパッケージで、例えばptex用のソースがそのままではコンパイルが通らない等の問題があるため、ASCIIのptexを使いたい人には必要無いでしょう。

<!-- というご指摘をいただきましたので，選択するのは te_ptex のみとします。自動的に依存関係がチェックされて tetex 本体も入ります。 -->

その他、検索機能を使って必要なものを追加しても良いと思います。キーワードは「LaTeX」や「cjk」などが良い感じです。

標準のSUSEにおける日本語TeXでは<strong>日本語に対応したxdviが用意されていない</strong>ので、プレビューはpsを使った方が楽です。どうしてもdviでプレビューしたい場合は下の記述も参考にしてください。

#### 奥村さんの新ドキュメントクラス {#c66f32b1}

ばっちりパッケージが用意されています。
YaSTでjsclassなどをキーワードに検索すればすぐに見付かります。 

### 動作確認 {#r5fdf490}

#### ps {#v0363c7e}

動作確認は基本的に他のディストリビューションと同じで簡単なTeXファイルを作ってテストします。
SUSE Personalでは<strong>標準の dvips では日本語を正しく処理できない</strong>ので <strong>pdvips</strong> を使います。
さらに修正事項としては、
/usr/share/texmf/pdvips/config/config.ps を開き，45行目付近の

```
% This shows how to add your own map file.
% Remove the comment and adjust the name:
% p +myfonts.map
```

の下あたりに

```
p +kanji.map
```

を追加しておきます。

```
pdvips hoge.dvi
gv hoge.ps
```

で確認します。gvの代わりにggvやKDE標準のpsビューワも使えます。

#### dvi {#x67704bd}

やはり dvi でもプレビューしたいという人、SUSE標準パッケージのxdviは日本語未対応です。
どうしても dvi を見たいならば、とりあえず[http://rpm.pbone.net/から](<http://rpm.pbone.net/から>) [TeX-Guy](http://gull.se.hiroshima-u.ac.jp/TeX-Guy/) と VFlib3 を入れて、xgdvi を使ってみてください。

```
xgdvi hoge.dvi
```

また、単に

```
xgdvi
```

として起動すると、詳細なマニュアルが読めます。
それから、kde 標準の dvi ビューワも使えそうです(まだ試していません)。

### PDF {#d54a9836}

#### ps2pdf {#v2aba6ed}

私の環境では日本語を含んだファイルの場合、とりあえず

```
ps2pdf hoge.ps
```

でPDFが作成できています。細かいテストをしていないので情報を頂けると幸いです。

#### dvipdfmx {#q55e61f7}

で、問題の dvipdfmx です。こちらについてはパッケージからすんなりというわけにはいかないようです。最近の SUSE は redhat 系とかなり互換性があるので、redhat でソースから入れたようにすれば動くかもしれません。が未確認です。こちらも情報お願いします。

### kile {#f87e3039}

Win32 環境ですと、WInshell なる統合環境が結構人気みたいです。Linux 系の人はEmacs+YaTeX or AUCTeX という方が多いかと思いますが、SUSE 標準の KDE の関連パッケージで kile というものがあり、Winhell に似た感じで使い方次第では便利そうです。私はEmacs+YaTeX なのであまり詳しくないのですが一応メモ。

#### Install {#se5ba998}

YaST でkile にチェックを入れてアップデートするだけです。

#### Config {#w5b4eb5c}

UIについては各自のお好みでということで、TeX 処理関係の設定に付いて。上記のような標準的な日本語環境を作られた場合は

- TeX処理：platex
- dviプレビュ：切る or xgdvi
- ps作成：pdvips
- pdf作成：ps2pdf

とすれば、最低限の作業はできます。
