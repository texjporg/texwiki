---
title: "TeXShop"
url: "/TeXShop/"
date: 2011-07-29T03:11:29Z
bookCollapseSection: true
pukiwiki: "TeXShop"
---

# TeXShop

## [TeXShop](http://pages.uoregon.edu/koch/texshop/) {#of2f7ba2}

<img src="http://upload.wikimedia.org/wikipedia/commons/9/95/TeXShop_icon.png" alt="TeXShop" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

<div style="clear:both"></div>

## TeXShop とは {#q728ac5b}

TeXShop は [OS X](/Mac/) で動作する TeX 統合環境です．<br>
[TeXworks](/TeXworks/) は TeXShop をモデルにしています．<br>
TeXShop に関する詳細は次のページを御覧下さい．<br>

- [TeXShop](http://pages.uoregon.edu/koch/texshop/) (本家)
- MacWiki:TeXShop
- [texshopとは - はてなキーワード](http://d.hatena.ne.jp/keyword/texshop)
- [「texshop」を含むブログ - はてなキーワード](http://k.hatena.ne.jp/keywordblog/texshop)

### リリース情報 {#td599942}

- [TeXShop for Lion の実験的新バージョン3.05，3.06がリリースされました。](http://twitter.com/#!/doraTeX/status/110489378907889665)
- [3.05は，Lionの「バージョン」機能に関わる改善です。3.04までは，タイプセットのたびに新しい「バージョン」が保存されましたが，それでは，こまめにタイプセットしていると「すべてのバージョンをブラウズ」したときにあまりに大量のバージョンが存在して面倒でした。（続く）](http://twitter.com/#!/doraTeX/status/110491486633738241)
- [そこで，3.05では，明示的にCommand+Sしたときにのみ「バージョン」が保存されるようになりました。3.06では，それに加え，OgreKit検索パネルが改善され，TeXShop同等のカラーリングや補完機能が使えるようになりました。（続く）](http://twitter.com/#!/doraTeX/status/110491608440520704)
- [また，全置換直後に文字色が真っ黒になる現象を修正したり，Spaces使用時にCommand+Fでスペースの遷移が起こらないようにしたりしました。あと，BibTeXの設定でオプションを許容するように変更したり，その他いくつかのバグ修正がなされています。](http://twitter.com/#!/doraTeX/status/110492227951792128)
    <!-- -[[Lion 用 TeXShop 3.02 がリリースされました！:http://twitter.com/#!/doraTeX/status/98562818227445760]] -->
    <!-- -[[Lion専用の新バージョン TeXShop-64 がリリースされました！:http://twitter.com/#!/doraTeX/status/93699401658269697]] -->

## MacTeX-2011 の場合の設定 {#hd2204af}

MacTeX-2011 に [Additional Tools for MacTeX/TeXLive 2011](http://www2.kumagaku.ac.jp/teacher/herogw/) を追加します．

### &#x7e;/Library/TeXShop/bin/eptex2pdf-utf8 {#v264f812}

***

- &#x7e;/Library/TeXShop/bin/eptex2pdf-utf8

***

```
#!/bin/sh
# iNoue Koich! (modified by S. Zenitani)

export PATH=$PATH:/usr/texbin:/usr/local/bin

COMMAND=${0##*/}
PTEX=${COMMAND%2pdf-*}
ENCODE=${COMMAND#*-}
JOBNAME=${1##*/}
JOBNAME=${JOBNAME%.*}

eptex -kanji=$ENCODE -progname=$PTEX $1 && \
dvipdfmx $JOBNAME

```

***

### &#x7e;/Library/TeXShop/bin/platex2pdf-utf8 {#c6b7a84a}

***

- &#x7e;/Library/TeXShop/bin/platex2pdf-utf8

***

```
#!/bin/sh
# iNoue Koich! (modified by S. Zenitani)

export PATH=$PATH:/usr/texbin:/usr/local/bin

COMMAND=${0##*/}
PTEX=${COMMAND%2pdf-*}
ENCODE=${COMMAND#*-}
JOBNAME=${1##*/}
JOBNAME=${JOBNAME%.*}

eptex -kanji=$ENCODE -progname=$PTEX $1 && \
dvipdfmx $JOBNAME

```

***

### TeXShop 環境設定 {#d2699f04}

#### 書類 {#n0747af1}

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　　　<strong>TeXShop 環境設定</strong>　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　　<ins><span style="color:#F1F1F1;background-color:#555555;"><span style="color:#555555;">\[</span>　<strong>書類</strong>　<span style="color:#555555;">\]</span></span><span style="color:Black;background-color:#EEEEEE;">\[　<strong>プレビュー</strong>　\]\[　<strong>コンソール</strong>　\]\[　<strong>タイプセット</strong>　\]\[　<strong>内部設定</strong>　\]\[　<strong>コピー</strong>　\]\[　<strong>詳細</strong>　\]</span></ins><br>

<br>

　　　　<strong>フォント</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<strong>背景色</strong><br>
　　　　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[　設定...　\]</ins></span><br>

<br>

　　　　<strong>ソースウインドウの位置</strong>　　　　　　　　　　　　　　　<strong>エディタ</strong><br>
　　　　<span style="color:Black;background-color:#9FCFFB;">◎</span> 閉じたときの位置を保存　　　　　　　　　　　　　　　　　　　　タブ幅 <ins>4</ins>　　　文字<br>
　　　　◯ いつも同じ位置で開く　　　　　　　　　　　　　　　 　 <span style="color:Black;background-color:#9FCFFB;">☑</span> ソースのカラー表示<br>
　　　　　　　<span style="color:Gray;background-color:#EEEEEE;"><ins>\[　　　　現在の位置に設定　　　　\]</ins></span>　　　　　　　　<span style="color:Black;background-color:#9FCFFB;">☑</span> 括弧の対応チェック<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#9FCFFB;">☑</span> スペルチェック<br>
　　　　<strong>起動時に</strong>　　　　　　　　　　　　　　　　　　　　　　　　　 ☐ キーバインド<br>
　　　　　<span style="color:Black;background-color:#9FCFFB;">☑</span> 新しいファイルを作成する　　　　　　　　　　　　　☐ BibDesk オートコンプリート<br>
　　　　　☐ 外部エディタでソースを編集　　　　　　　　　　　　<span style="color:Black;background-color:#9FCFFB;">☑</span> 選択時にカーソルを移動<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#9FCFFB;">☑</span> 行番号<br>
　　　　<strong>コマンド補完キー</strong>　　　　　　　　　　　　　　　　　　　　 ☐ Arabic, Hebrew, Persian<br>
　　　　　<span style="color:Black;background-color:#9FCFFB;">◎</span> Escape キー　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#9FCFFB;">☑</span> オートセーブ (再起動後有効)<br>
　　　　　◯ Tab キー<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<strong>エンコーディング</strong><br>
　　　　<strong>検索パネル (TeXShop再起動後)</strong>　　　　　　　　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[ Unicode (UTF-8)　　　　　　　 ◆ \]</ins></span><br>
　　　　　◯ Apple 標準検索パネル<br>
　　　　　◯ Apple 標準検索バー　　　　　　　　　　　　　　 <strong>括弧の対応チェック対象と強調色</strong><br>
　　　　　<span style="color:Black;background-color:#9FCFFB;">◎</span> OgreKit 検索パネル　　　　　　　　　　　　　　　<span style="color:Black;background-color:#9FCFFB;">☑</span> { }　<span style="color:Black;background-color:#9FCFFB;">☑</span> \[ \]　<span style="color:Black;background-color:#9FCFFB;">☑</span> ( )　☐ &lt; ><br>

<br>

　　　　<strong>不可視文字の表示</strong>　　　　　　　　　　　　　　　　　 <strong>括弧の対応チェックの詳細</strong><br>
　　　　　☐ 半角スペース　　<span style="color:Black;background-color:#9FCFFB;">◎</span>　　　　　◯　　　　　　　　　　<span style="color:Black;background-color:#9FCFFB;">☑</span> 囲まれる部分を強調<br>
　　　　　☐ 全角スペース　　<span style="color:Black;background-color:#9FCFFB;">◎</span>　　　　　◯　　　　　　　　　　☐ 移動中も黄色くポップアップ<br>
　　　　　☐ 改行　　　　　　　<span style="color:Black;background-color:#9FCFFB;">◎</span>　　　　　◯　　　　　　　　　　<span style="color:Black;background-color:#9FCFFB;">☑</span> 対応する括弧を点滅<br>
　　　　　☐ タブ　　　　　　　 <span style="color:Black;background-color:#9FCFFB;">◎</span>　　　　　◯　　　　　　　　　　☐ 孤立括弧を音で警告<br>
　　　　　☐ ファイルを開いた直後から表示　　　　　　　　　☐ 孤立括弧を背景色で警告<br>

<br>

　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[ 設定プロファイル　　 ▼ \]</ins></span>　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[ 　キャンセル　 \]</ins></span>　<span style="color:Black;background-color:#9FCFFB;"><ins>\[ 　　OK　　 \]</ins></span><br>
　　　　TeXShop 標準<br>
　　<span style="color:White;background-color:#2358FF;">　　pTeX (ShiftJIS)　　　　</span><br>
　　　　pTeX (EUC)

***

#### 内部設定 {#ubede387}

■ [simpdftex](http://www.tug.org/svn/texlive/trunk/Master/texmf/scripts/simpdftex/simpdftex?view=markup) を使用する場合

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　　　<strong>TeXShop 環境設定</strong>　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　　<ins><span style="color:Black;background-color:#EEEEEE;">\[　<strong>書類</strong>　\]\[　<strong>プレビュー</strong>　\]\[　<strong>コンソール</strong>　\]\[　<strong>タイプセット</strong>　\]</span><span style="color:#F1F1F1;background-color:#555555;"><span style="color:#555555;">\[</span>　<strong>内部設定</strong>　<span style="color:#555555;">\]</span></span><span style="color:Black;background-color:#EEEEEE;">\[　<strong>コピー</strong>　\]\[　<strong>詳細</strong>　\]</span></ins><br>

<br>

　　　　<strong>パス設定</strong><br>
　　　　(pdf)TeX (デフォルト:/usr/texbin)<br>
　　　　<ins>/usr/texbin</ins><br>
　　　　Distiller (Ghostscript) (デフォルト:/usr/local/bin)<br>
　　　　<ins>/usr/local/bin</ins><br>

<br>

　　　　<strong>pdfTeX</strong>　　　　　　　　　　　　　　　　　　　　　　　<strong>TeX + dvips + distiller</strong><br>
　　　　　Tex　　 <span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span>　　　　　　　　　　　　　　　Tex　　 <span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span><br>
　　　　　<ins>pdftex --file-line-error --synctex=1</ins>　　　　　　<ins>simpdftex eptex --mode dvipdfmx --maxpfb --extratexopts "-file-line-error -synctex=1"</ins><br>
　　　　　Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span>　　　　　　　　　　　　　　　 Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span><br>
　　　　　<ins>pdflatex --file-line-error --synctex=1</ins>　　　　　<ins>simpdftex platex --mode dvipdfmx --maxpfb --extratexopts "-file-line-error -synctex=1"</ins><br>
　　　　　☐ Shell Escape を警告　　　　　　　　　　　　　 ☐ PostScript ファイルを保存<br>

<br>

　　　　<strong>検索用コマンド</strong><br>
　　　　kpsetool (デフォルト:kpsetool -w -n latex tex)<br>
　　　　　<ins>kpsewhich -w -n latex tex</ins><br>

<br>

　　　　<strong>BibTeX エンジン</strong><br>
　　　　デフォルト:bibtex<br>
　　　　　<ins>pbibtex</ins><br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[ 設定プロファイル　　 ▼ \]</ins></span>　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[ 　キャンセル　 \]</ins></span>　<span style="color:Black;background-color:#9FCFFB;"><ins>\[ 　　OK　　 \]</ins></span><br>

***

■ [&#x7e;/Library/TeXShop/bin/eptex2pdf-utf8](/TeXShop/#v264f812), [&#x7e;/Library/TeXShop/bin/platex2pdf-utf8](/TeXShop/#c6b7a84a) を使用する場合

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　　　<strong>TeXShop 環境設定</strong>　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　　<ins><span style="color:Black;background-color:#EEEEEE;">\[　<strong>書類</strong>　\]\[　<strong>プレビュー</strong>　\]\[　<strong>コンソール</strong>　\]\[　<strong>タイプセット</strong>　\]</span><span style="color:#F1F1F1;background-color:#555555;"><span style="color:#555555;">\[</span>　<strong>内部設定</strong>　<span style="color:#555555;">\]</span></span><span style="color:Black;background-color:#EEEEEE;">\[　<strong>コピー</strong>　\]\[　<strong>詳細</strong>　\]</span></ins><br>

<br>

　　　　<strong>パス設定</strong><br>
　　　　(pdf)TeX (デフォルト:/usr/texbin)<br>
　　　　<ins>/usr/texbin</ins><br>
　　　　Distiller (Ghostscript) (デフォルト:/usr/local/bin)<br>
　　　　<ins>/usr/local/bin</ins><br>

<br>

　　　　<strong>pdfTeX</strong>　　　　　　　　　　　　　　　　　　　　　　　<strong>TeX + dvips + distiller</strong><br>
　　　　　Tex　　 <span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span>　　　　　　　　　　　　　　　Tex　　 <span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span><br>
　　　　　<ins>pdftex --file-line-error --synctex=1</ins>　　　　　　<ins>&#x7e;/Library/TeXShop/bin/eptex2pdf-utf8</ins><br>
　　　　　Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span>　　　　　　　　　　　　　　　 Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span><br>
　　　　　<ins>pdflatex --file-line-error --synctex=1</ins>　　　　　<ins>&#x7e;/Library/TeXShop/bin/platex2pdf-utf8</ins><br>
　　　　　☐ Shell Escape を警告　　　　　　　　　　　　　 ☐ PostScript ファイルを保存<br>

<br>

　　　　<strong>検索用コマンド</strong><br>
　　　　kpsetool (デフォルト:kpsetool -w -n latex tex)<br>
　　　　　<ins>kpsewhich -w -n latex tex</ins><br>

<br>

　　　　<strong>BibTeX エンジン</strong><br>
　　　　デフォルト:bibtex<br>
　　　　　<ins>pbibtex</ins><br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[ 設定プロファイル　　 ▼ \]</ins></span>　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[ 　キャンセル　 \]</ins></span>　<span style="color:Black;background-color:#9FCFFB;"><ins>\[ 　　OK　　 \]</ins></span><br>

***

#### 詳細 {#ae4b4710}

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　　　<strong>TeXShop 環境設定</strong>　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　　<ins><span style="color:Black;background-color:#EEEEEE;">\[　<strong>書類</strong>　\]\[　<strong>プレビュー</strong>　\]\[　<strong>コンソール</strong>　\]\[　<strong>タイプセット</strong>　\]\[　<strong>内部設定</strong>　\]\[　<strong>コピー</strong>　\]</span><span style="color:#F1F1F1;background-color:#555555;"><span style="color:#555555;">\[</span>　<strong>詳細</strong>　<span style="color:#555555;">\]</span></span></ins><br>

<br>

<br>

　　　　　　　　　　　<strong>パーソナルスクリプト</strong><br>
　　　　　　　　　　　　TeXプログラム<br>
　　　　　　　　　　　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br>
　　　　　　　　　　　　LaTeXプログラム<br>
　　　　　　　　　　　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins><br>

<br>

　　　　　　　　　　　<strong>Distiller</strong>　　　　　　　　　　　　　　　　　　　<strong>pTeX 拡張機能</strong><br>
　　　　　　　　　　　　<span style="color:Black;background-color:#9FCFFB;">◎</span> Ghostscript<br>
　　　　　　　　　　　　◯ Apple Distiller　　　　　　　　　　　　　　<span style="color:Black;background-color:#9FCFFB;">☑</span> utf パッケージ対応<br>

<br>

　　　　　　　　　　　<strong>保存時の処理 (日本語濁点問題の対処)</strong><br>

<br>

　　　　　　　　　　　　　<span style="color:Black;background-color:#9FCFFB;">☑</span> UTF-8-MAC を UTF-8 に自動変換<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[ 設定プロファイル　　 ▼ \]</ins></span>　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[ 　キャンセル　 \]</ins></span>　<span style="color:Black;background-color:#9FCFFB;"><ins>\[ 　　OK　　 \]</ins></span><br>

***

## 小川版 (Drag &amp; Drop UpTeX) の場合の設定 {#h991fc27}

次のページを御覧下さい．<br>

- [Mac - TeX Wiki#小川版](/Mac/#tea5dffe)

## MacPorts (pTeX) の場合の設定 {#s81bdf6c}

次のページを御覧下さい．<br>

- [Mac - TeX Wiki#MacPorts (pTeX)](/Mac/#hcfd86af)

## [Make](/Make/) の場合の設定 {#n9cdd334}

ここでは [Make](/Make/)
などを見てソースからインストールされた方のために，簡単な設定法を書いておきます．

まず [TeXShop](http://pages.uoregon.edu/koch/texshop/) (本家) から最新版の TeXShop (texshop.zip) をダウンロードし，展開します．
中にある TeXShop アイコンをアプリケーションフォルダに入れます．
よく使うなら，Dock にも入れておきましょう．

起動して，「環境設定」でまず「書類」でフォントを好みのもの（例えば Osaka
レギュラー等幅），エンコーディングを Japanese (EUC) にします．
起動時に「新しいファイルを作成する」はチェックを外しました．
「内部設定」のパス設定（デフォルトは /usr/local/teTeX/bin/powerpc-apple-darwin-current）は /usr/local/teTeX/bin，
パーソナルスクリプトの TeX 欄を pdfmptex，LaTeX 欄を pdfmplatex にします．
「タイプセット」でデフォルトのスクリプトをパーソナルスクリプトにしておきます．

井上さんの
「[pTeXShop 用のコンパイル・PDF 化スクリプト](http://www.ma.ns.musashi-tech.ac.jp/Pages/Macintosh/pdfmtex.html)」
の「実際のスクリプトは以下の通り」と書いてある部分をコピーし，
/usr/local/teTeX/bin/pdfmplatex
とします（実行許可を与えるのを忘れぬように）．
さらに，同じ内容の pdfmptex
というファイルも作っておきます（シンボリックリンクまたはハードリンクでもかまいません）．

これで出来上がりです．
設定前に開いていたファイルは念のためいったん閉じて開き直して下さい．

## 問題点 {#i951d24e}

Emacs で書いて LaTeX 処理し，TeXShop は dvipdfmx とプレビューだけ，といった使い方もできます．
ただ，下手をすれば，Emacs で開いて保存すると例えば foo.tex が foo.tex~ にリネームされて新たに foo.tex が作られるので，これを追跡している TeXShop で管理している名前も foo.tex~ になってしまい，foo.tex~.dvi を dvipdfmx 処理して foo.tex~.pdf を開こうとしてエラーになってしまいます．
対策としては，Emacs の側で

```
(setq backup-by-copying t)
```

と設定して逃げることができます（Thanks: seto さん）．
ただし，Emacs が多少重くなるかもしれません．

Mac OS X 10.2 では，埋め込んでいない和文フォントがすべてゴシック体で表示されてしまいます．
10.3 以降なら大丈夫です．

TeXShop のプレビュー画面から範囲指定してコピーし，他のソフトに貼り付けることができます．
これで PowerPoint に数式を貼り付けられる……と思ったのですが，残念ながら PowerPoint も Word
も PDF 形式の貼り付けには対応していないようです（テキストエディットでも対応しているのに）．
PDF 以外の形式なら貼り付けられますが、（ベクトル形式の画像フォーマットではないため）画像を拡大するとぎざぎざになります．

Keynote は PDF で貼り付けられます．
しかも，文字以外の部分は透明になるので，Keynote の背景色や背景画像が適用されます．

## 使い方 {#i4c3aa46}

### タイプセット {#b06dc45a}

#### [TeXShop の engine ファイル](http://homepage.mac.com/fuhmi/) {#q2990ba4}

### [TeXShopは画像ファイルhoge.\*をDrag&amp;Dropだけで\includegraphics\[\]{hoge.\*}してくれる](http://twitter.com/#!/ysykimura/status/105009020062015488) {#qa99ad06}

### [TeXShop と外部エディタの連携](http://skalldan.wordpress.com/2011/07/19/texshop-%E3%81%A8%E5%A4%96%E9%83%A8%E3%82%A8%E3%83%87%E3%82%A3%E3%82%BF%E3%81%AE%E9%80%A3%E6%90%BA/) {#w825259c}

## ツール {#kffeddd2}

### [Ramón's TeXShop Tools](http://www2.hawaii.edu/~ramonf/TeXShop/) {#db2483a1}
