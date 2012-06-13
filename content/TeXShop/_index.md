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
- [「TeXShop」の検索結果 - Twilog](http://twilog.org/tweets.cgi?id=doraTeX&word=TeXShop)

### リリース情報 {#td599942}

2012-06-06 TeXShop (v 3.11)<br>
2012-06-06 TeXShop (v 2.47)<br>

## MacTeX &amp; TeX Live の場合の設定 {#hd2204af}

### 注意事項 {#j76804fc}

--shell-escapeについて
: セキュリティ上の理由により、TeXShopはバージョン2.45/3.10より、pdfTeX/pdfLaTeXのセッティングから--shell-escapeが除かれています。（以前の設定を引き継いでいる場合は残ってしまっていますが。）<br>

また、以下のシェルスクリプトの設定においても、--shell-escapeは有効になっていません。<br>
コンパイルの際に--shell-escapeが必要な場合は、その都度ターミナルからplatex（など）を実行するか、「パーソナルスクリプト」に--shell-escapeを有効にしたスクリプトを指定しておき、--shell-escapeが必要なときにはその都度「タイプセット」メニューから「パーソナルスクリプト」を指定するとよいでしょう（[pTeX/UpTeX.app + TeXShopでshell-escapeを使う](http://www2.kumagaku.ac.jp/teacher/herogw/shell.html)を参照）。

### シェルスクリプトの作成 {#z1cf4023}

一般的なplatexを使用する際には、環境設定の「内部設定」で「TeX + dvips + distiller」を適切に設定する必要があります。<br>
シェルスクリプトを使用するか、それともlatexmkを使用するか、simpdftexを使用するか、設定方法は大きく分けて3通りあり、さらにplatex/uplatexのいずれを使用するのか、dvipdfmx/dvipsのいずれを使用するのか、などによって設定は様々になります。

- シェルスクリプトを作成して割り当てる場合は、「Tex/Latex」それぞれに設定するためのシェルスクリプトを作成し、実行権限を割り当ててから「内部設定」で指定します。<br>
    「pdfeptex/pdfplatex」「pdfeptex2/pdfplatex2」「pdfeuptex/pdfuplatex」「pdfeuptex2/pdfuplatex2」「eptex2pdf-utf8/platex2pdf-utf8」「euptex2pdf-utf8/uplatex2pdf-utf8」の6組の作成方法が以下に示されています。<br>
    たとえばpdfeptexを作成する場合はターミナルで

    ```
    $ nano ~/Library/TeXShop/bin/pdfeptex
    ```

    として下記のシェルスクリプトを記述し、保存してからchmodを実行します。こうして作成したシェルスクリプトを「内部設定」で指定します。

- <strong>latexmk</strong> を使用する場合は、下記を参照して直接記述します。
- <strong>simpdftex</strong> を使用する場合は、下記を参照して直接記述します。しかしこの方法ではエラーが発生してもそのまま dvipdfmx を実行してしまうようです．
- 環境設定の「詳細」では「パーソナルスクリプト」が指定できます。通常使うのとは別のスクリプトを指定しておくことができるので、たとえば--shell-escapeを有効にしたスクリプトを準備しておけば、必要に応じてTeXShopからでも--shell-escapeを用いることができます。

#### &#x7e;/Library/TeXShop/bin/pdfeptex {#u46327c0}

シェルスクリプトを作成します．

***

- &#x7e;/Library/TeXShop/bin/pdfeptex

***

```
#!/bin/sh
eptex -synctex=1 "$1" && \
dvipdfmx "`basename "$1" .tex`" 
```

***

chmod で実行権限を付加します．

```
$ chmod +x ~/Library/TeXShop/bin/pdfeptex
```

#### &#x7e;/Library/TeXShop/bin/pdfplatex {#r809076b}

シェルスクリプトを作成します．

***

- &#x7e;/Library/TeXShop/bin/pdfplatex

***

```
#!/bin/sh
platex -synctex=1 "$1" && \
dvipdfmx "`basename "$1" .tex`"
```

***

chmod で実行権限を付加します．

```
$ chmod +x ~/Library/TeXShop/bin/pdfplatex
```

#### &#x7e;/Library/TeXShop/bin/pdfeptex2 {#q731839a}

シェルスクリプトを作成します．

***

- &#x7e;/Library/TeXShop/bin/pdfeptex2

***

```
#!/bin/sh
eptex -synctex=1 "$1" && \
dvips -Ppdf -z -f "`basename "$1" .tex`.dvi" | \
convbkmk -g > "`basename "$1" .tex`.ps" && \
ps2pdf "`basename "$1" .tex`.ps"
```

***

chmod で実行権限を付加します．

```
$ chmod +x ~/Library/TeXShop/bin/pdfeptex2
```

#### &#x7e;/Library/TeXShop/bin/pdfplatex2 {#a6588dbd}

シェルスクリプトを作成します．

***

- &#x7e;/Library/TeXShop/bin/pdfplatex2

***

```
#!/bin/sh
platex -synctex=1 "$1" && \
dvips -Ppdf -z -f "`basename "$1" .tex`.dvi" | \
convbkmk -g > "`basename "$1" .tex`.ps" && \
ps2pdf "`basename "$1" .tex`.ps"
```

***

chmod で実行権限を付加します．

```
$ chmod +x ~/Library/TeXShop/bin/pdfplatex2
```

#### &#x7e;/Library/TeXShop/bin/pdfeuptex {#e75e7a51}

シェルスクリプトを作成します．

***

- &#x7e;/Library/TeXShop/bin/pdfeuptex

***

```
#!/bin/sh
euptex -synctex=1 "$1" && \
dvipdfmx "`basename "$1" .tex`" 
```

***

chmod で実行権限を付加します．

```
$ chmod +x ~/Library/TeXShop/bin/pdfeuptex
```

#### &#x7e;/Library/TeXShop/bin/pdfuplatex {#i78a916c}

シェルスクリプトを作成します．

***

- &#x7e;/Library/TeXShop/bin/pdfuplatex

***

```
#!/bin/sh
uplatex -synctex=1 "$1" && \
dvipdfmx "`basename "$1" .tex`"
```

***

chmod で実行権限を付加します．

```
$ chmod +x ~/Library/TeXShop/bin/pdfuplatex
```

#### &#x7e;/Library/TeXShop/bin/pdfeuptex2 {#c671711f}

シェルスクリプトを作成します．

***

- &#x7e;/Library/TeXShop/bin/pdfeuptex2

***

```
#!/bin/sh
euptex -synctex=1 "$1" && \
dvips -Ppdf -z -f "`basename "$1" .tex`.dvi" | \
convbkmk -u > "`basename "$1" .tex`.ps" && \
ps2pdf "`basename "$1" .tex`.ps"
```

***

chmod で実行権限を付加します．

```
$ chmod +x ~/Library/TeXShop/bin/pdfeuptex2
```

#### &#x7e;/Library/TeXShop/bin/pdfuplatex2 {#p9f6b0c6}

シェルスクリプトを作成します．

***

- &#x7e;/Library/TeXShop/bin/pdfuplatex2

***

```
#!/bin/sh
uplatex -synctex=1 "$1" && \
dvips -Ppdf -z -f "`basename "$1" .tex`.dvi" | \
convbkmk -u > "`basename "$1" .tex`.ps" && \
ps2pdf "`basename "$1" .tex`.ps"
```

***

chmod で実行権限を付加します．

```
$ chmod +x ~/Library/TeXShop/bin/pdfuplatex2
```

#### &#x7e;/Library/TeXShop/bin/eptex2pdf-utf8 {#v264f812}

シェルスクリプトを作成します．

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

eptex -synctex=1 -kanji=$ENCODE -progname=$PTEX $1 && \
dvipdfmx $JOBNAME

```

***

chmod で実行権限を付加します．

```
$ chmod +x ~/Library/TeXShop/bin/eptex2pdf-utf8
```

#### &#x7e;/Library/TeXShop/bin/platex2pdf-utf8 {#c6b7a84a}

シェルスクリプトを作成します．

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

eptex -synctex=1 -kanji=$ENCODE -progname=$PTEX $1 && \
dvipdfmx $JOBNAME

```

***

chmod で実行権限を付加します．

```
$ chmod +x ~/Library/TeXShop/bin/platex2pdf-utf8
```

#### &#x7e;/Library/TeXShop/bin/euptex2pdf-utf8 {#dcc357ad}

シェルスクリプトを作成します．

***

- &#x7e;/Library/TeXShop/bin/euptex2pdf-utf8

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

euptex -synctex=1 -kanji=$ENCODE -progname=$PTEX $1 && \
dvipdfmx $JOBNAME

```

***

chmod で実行権限を付加します．

```
$ chmod +x ~/Library/TeXShop/bin/euptex2pdf-utf8
```

#### &#x7e;/Library/TeXShop/bin/uplatex2pdf-utf8 {#d8b1bd48}

シェルスクリプトを作成します．

***

- &#x7e;/Library/TeXShop/bin/uplatex2pdf-utf8

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

euptex -synctex=1 -kanji=$ENCODE -progname=$PTEX $1 && \
dvipdfmx $JOBNAME

```

***

chmod で実行権限を付加します．

```
$ chmod +x ~/Library/TeXShop/bin/uplatex2pdf-utf8
```

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
　　　　<strong>コマンド補完キー</strong>　　　　　　　　　　　　　　　　　　　　 ☐ Arabic, Hebrew, Persian<br> <!-- 　　　　　&color(Black,#9FCFFB){◎}; Escape キー　　　　　　　　　　　　　　　　　　　　　&color(Black,#9FCFFB){☑}; オートセーブ (再起動後有効)&br; -->
　　　　　<span style="color:Black;background-color:#9FCFFB;">◎</span> Escape キー<br>
　　　　　◯ Tab キー<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<strong>エンコーディング</strong><br>
　　　　<strong>検索パネル (TeXShop再起動後)</strong>　　　　　　　　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[ Unicode (UTF-8)　　　　　　　 ◆ \]</ins></span> ← エンコーディングは <strong>Unicode (UTF-8) を選択</strong><br>
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
　　<span style="color:White;background-color:#2358FF;">　　pTeX (ShiftJIS)　　　　</span> ← 設定プロファイルから <strong>pTeX (ShiftJIS) を選択</strong><br>
　　　　pTeX (EUC)

***

#### プレビュー {#m412ee77}

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　　　<strong>TeXShop 環境設定</strong>　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　　<ins><span style="color:Black;background-color:#EEEEEE;">\[　<strong>書類</strong>　\]</span><span style="color:#F1F1F1;background-color:#555555;"><span style="color:#555555;">\[</span>　<strong>プレビュー</strong>　<span style="color:#555555;">\]</span></span><span style="color:Black;background-color:#EEEEEE;">\[　<strong>コンソール</strong>　\]\[　<strong>タイプセット</strong>　\]\[　<strong>内部設定</strong>　\]\[　<strong>コピー</strong>　\]\[　<strong>詳細</strong>　\]</span></ins><br>

<br>

　　　　<strong>プレビューウィンドウの位置</strong>　　　　　　　　　　　　　　<strong>ページボタン</strong><br>
　　　　<span style="color:Black;background-color:#9FCFFB;">◎</span> 閉じたときの位置を保存　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#9FCFFB;">☑</span> スクロールしない<br>
　　　　◯ いつも同じ位置で開く<br>
　　　　　　　<span style="color:Gray;background-color:#EEEEEE;"><ins>\[　　　　現在の位置に設定　　　　\]</ins></span>　　　　　　　　<strong>ページレイアウト</strong><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[　連続ページ　　　　　　　　◆ \]</ins></span><br>
　　　　<strong>見開きページ</strong><br>
　　　　<span style="color:Black;background-color:#9FCFFB;">◎</span> 左からスタート (両面)　　　　　　　　　　　　　　　　<strong>ウィンドウのリサイズ後</strong><br>
　　　　◯ 右からスタート (片面)　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[　ウィンドウに合わせる　　◆ \]</ins></span><br>

<br>

　　　　<strong>マウスモード</strong>　　　　　　　　　　　　　　　　　　　　　　　<strong>プレビューウィンドウの倍率</strong><br>
　　　　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[　拡大鏡(大)　　　　　　　　◆ \]</ins></span>　　　　　　　　　　　　　　　　　　　　<ins>100</ins>　<span style="color:Black;background-color:#FAFAFA;"><ins>\[　　設定　　\]</ins></span><br>

<br>

　　　　<strong>外部エディタ</strong>　　　　　　　　　　　　　　　　　　　　　　　<strong>背景色</strong><br>
　　　　　<span style="color:Black;background-color:#9FCFFB;">☑</span> プレビューの自動更新<br>

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

#### タイプセット {#m64f92b0}

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　　　<strong>TeXShop 環境設定</strong>　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　　<ins><span style="color:Black;background-color:#EEEEEE;">\[　<strong>書類</strong>　\]\[　<strong>プレビュー</strong>　\]\[　<strong>コンソール</strong>　\]</span><span style="color:#F1F1F1;background-color:#555555;"><span style="color:#555555;">\[</span>　<strong>タイプセット</strong>　<span style="color:#555555;">\]</span></span><span style="color:Black;background-color:#EEEEEE;">\[　<strong>内部設定</strong>　\]\[　<strong>コピー</strong>　\]\[　<strong>詳細</strong>　\]</span></ins><br>

<br>

<br>

　　　　<strong>デフォルトのコマンド</strong>　　　　　　　　　　　　　　　　<strong>タイプセット後の動作</strong><br>
　　　　◯ TeX　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#9FCFFB;">◎</span> プレビューを手前に移動<br>
　　　　<span style="color:Black;background-color:#9FCFFB;">◎</span> LaTeX　　　　　　　　　　　　　　　　　　　　　　　　 ◯ 編集を続ける<br>
　　　　◯ ConTeXt<br>
　　　　◯ 次のコマンドを利用　　　　　　　　　　　　　　　　<strong>ファイル保存時に</strong><br>
　　　　　　<span style="color:Gray;"><ins>XeLaTeX</ins></span>　　　　　　　　　　　　　　　　　　　　　　　☐ 関連ファイルも保存する<br>

<br>

　　　　<strong>デフォルトのスクリプト</strong>　　　　　　　　　　　　　　　<strong>Sync 方式</strong><br>
　　　　◯ Pdftex　　　　　　　　　　　　　　　　　　　　　　　　 ◯ Pdf Sync (TeXLive2010以前)<br>
　　　　<span style="color:Black;background-color:#9FCFFB;">◎</span> TeX + DVI　　　　　　　　　　　　　　　　　　　　　　◯ PDFを検索<br>
　　　　◯ デフォルトのスクリプト　　　　　　　　　　　　　　　◯ 併用<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#9FCFFB;">◎</span> SyncTeX (TeXLive2010以降) ← TeX Live 2012 では ptex, eptex, uptex, euptex で SyncTeX が使用可能です<br>

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

<br>

　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[ 設定プロファイル　　 ▼ \]</ins></span>　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[ 　キャンセル　 \]</ins></span>　<span style="color:Black;background-color:#9FCFFB;"><ins>\[ 　　OK　　 \]</ins></span><br>

***

#### 内部設定 {#ubede387}

- <strong>latexmk</strong> を使用する

■ <strong>latexmk</strong> で eptex, platex, pbibtex, mendex, dvipdfmx を使用する場合

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
　　　　　<ins>pdftex -file-line-error -synctex=1</ins>　　　　　　　<ins>latexmk -e '$latex=q/eptex -synctex=1/' -e '$bibtex=q/pbibtex/' -e '$makeindex=q/mendex/' -e '$dvipdf=q/dvipdfmx %O -o %D %S/' -norc -gg -pdfdvi</ins><br>
　　　　　Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span>　　　　　　　　　　　　　　　 Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span><br>
　　　　　<ins>pdflatex -file-line-error -synctex=1</ins>　　　　　　<ins>latexmk -e '$latex=q/platex -synctex=1/' -e '$bibtex=q/pbibtex/' -e '$makeindex=q/mendex/' -e '$dvipdf=q/dvipdfmx %O -o %D %S/' -norc -gg -pdfdvi</ins><br>
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

■ <strong>latexmk</strong> で eptex, platex, pbibtex, mendex, dvips, ps2pdf を使用する場合

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
　　　　　<ins>pdftex -file-line-error -synctex=1</ins>　　　　　　　<ins>latexmk -e '$latex=q/eptex -synctex=1/' -e '$bibtex=q/pbibtex/' -e '$makeindex=q/mendex/' -e '$dvips=q/dvips %O -z -f %S | convbkmk -g > %D/' -e '$ps2pdf=q/ps2pdf %O %S %D/' -norc -gg -pdfps</ins><br>
　　　　　Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span>　　　　　　　　　　　　　　　 Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span><br>
　　　　　<ins>pdflatex -file-line-error -synctex=1</ins>　　　　　　<ins>latexmk -e '$latex=q/platex -synctex=1/' -e '$bibtex=q/pbibtex/' -e '$makeindex=q/mendex/' -e '$dvips=q/dvips %O -z -f %S | convbkmk -g > %D/' -e '$ps2pdf=q/ps2pdf %O %S %D/' -norc -gg -pdfps</ins><br>
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

■ <strong>latexmk</strong> で euptex, uplatex, upbibtex, mendex, dvipdfmx を使用する場合

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
　　　　　<ins>pdftex -file-line-error -synctex=1</ins>　　　　　　　<ins>latexmk -e '$latex=q/euptex -synctex=1/' -e '$bibtex=q/upbibtex/' -e '$makeindex=q/mendex/' -e '$dvipdf=q/dvipdfmx %O -o %D %S/' -norc -gg -pdfdvi</ins><br>
　　　　　Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span>　　　　　　　　　　　　　　　 Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span><br>
　　　　　<ins>pdflatex -file-line-error -synctex=1</ins>　　　　　　<ins>latexmk -e '$latex=q/uplatex -synctex=1/' -e '$bibtex=q/upbibtex/' -e '$makeindex=q/mendex/' -e '$dvipdf=q/dvipdfmx %O -o %D %S/' -norc -gg -pdfdvi</ins><br>
　　　　　☐ Shell Escape を警告　　　　　　　　　　　　　 ☐ PostScript ファイルを保存<br>

<br>

　　　　<strong>検索用コマンド</strong><br>
　　　　kpsetool (デフォルト:kpsetool -w -n latex tex)<br>
　　　　　<ins>kpsewhich -w -n latex tex</ins><br>

<br>

　　　　<strong>BibTeX エンジン</strong><br>
　　　　デフォルト:bibtex<br>
　　　　　<ins>upbibtex</ins><br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[ 設定プロファイル　　 ▼ \]</ins></span>　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[ 　キャンセル　 \]</ins></span>　<span style="color:Black;background-color:#9FCFFB;"><ins>\[ 　　OK　　 \]</ins></span><br>

***

■ <strong>latexmk</strong> で euptex, uplatex, upbibtex, mendex, dvips, ps2pdf を使用する場合

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
　　　　　<ins>pdftex -file-line-error -synctex=1</ins>　　　　　　　<ins>latexmk -e '$latex=q/euptex -synctex=1/' -e '$bibtex=q/upbibtex/' -e '$makeindex=q/mendex/' -e '$dvips=q/dvips %O -z -f %S | convbkmk -u > %D/' -e '$ps2pdf=q/ps2pdf %O %S %D/' -norc -gg -pdfps</ins><br>
　　　　　Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span>　　　　　　　　　　　　　　　 Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span><br>
　　　　　<ins>pdflatex -file-line-error -synctex=1</ins>　　　　　　<ins>latexmk -e '$latex=q/uplatex -synctex=1/' -e '$bibtex=q/upbibtex/' -e '$makeindex=q/mendex/' -e '$dvips=q/dvips %O -z -f %S | convbkmk -u > %D/' -e '$ps2pdf=q/ps2pdf %O %S %D/' -norc -gg -pdfps</ins><br>
　　　　　☐ Shell Escape を警告　　　　　　　　　　　　　 ☐ PostScript ファイルを保存<br>

<br>

　　　　<strong>検索用コマンド</strong><br>
　　　　kpsetool (デフォルト:kpsetool -w -n latex tex)<br>
　　　　　<ins>kpsewhich -w -n latex tex</ins><br>

<br>

　　　　<strong>BibTeX エンジン</strong><br>
　　　　デフォルト:bibtex<br>
　　　　　<ins>upbibtex</ins><br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[ 設定プロファイル　　 ▼ \]</ins></span>　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[ 　キャンセル　 \]</ins></span>　<span style="color:Black;background-color:#9FCFFB;"><ins>\[ 　　OK　　 \]</ins></span><br>

***

- <strong>シェルスクリプト</strong>を使用する

■ [&#x7e;/Library/TeXShop/bin/pdfeptex](/TeXShop/#u46327c0), [&#x7e;/Library/TeXShop/bin/pdfplatex](/TeXShop/#r809076b), pbibtex を使用する場合

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
　　　　　<ins>pdftex -file-line-error -synctex=1</ins>　　　　　　　<ins>&#x7e;/Library/TeXShop/bin/pdfeptex</ins><br>
　　　　　Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span>　　　　　　　　　　　　　　　 Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span><br>
　　　　　<ins>pdflatex -file-line-error -synctex=1</ins>　　　　　　<ins>&#x7e;/Library/TeXShop/bin/pdfplatex</ins><br>
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

■ [&#x7e;/Library/TeXShop/bin/pdfeptex2](/TeXShop/#q731839a), [&#x7e;/Library/TeXShop/bin/pdfplatex2](/TeXShop/#a6588dbd), pbibtex を使用する場合

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
　　　　　<ins>pdftex -file-line-error -synctex=1</ins>　　　　　　　<ins>&#x7e;/Library/TeXShop/bin/pdfeptex2</ins><br>
　　　　　Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span>　　　　　　　　　　　　　　　 Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span><br>
　　　　　<ins>pdflatex -file-line-error -synctex=1</ins>　　　　　　<ins>&#x7e;/Library/TeXShop/bin/pdfplatex2</ins><br>
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

■ [&#x7e;/Library/TeXShop/bin/pdfeuptex](/TeXShop/#e75e7a51), [&#x7e;/Library/TeXShop/bin/pdfuplatex](/TeXShop/#i78a916c), upbibtex を使用する場合

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
　　　　　<ins>pdftex -file-line-error -synctex=1</ins>　　　　　　　<ins>&#x7e;/Library/TeXShop/bin/pdfeuptex</ins><br>
　　　　　Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span>　　　　　　　　　　　　　　　 Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span><br>
　　　　　<ins>pdflatex -file-line-error -synctex=1</ins>　　　　　　<ins>&#x7e;/Library/TeXShop/bin/pdfuplatex</ins><br>
　　　　　☐ Shell Escape を警告　　　　　　　　　　　　　 ☐ PostScript ファイルを保存<br>

<br>

　　　　<strong>検索用コマンド</strong><br>
　　　　kpsetool (デフォルト:kpsetool -w -n latex tex)<br>
　　　　　<ins>kpsewhich -w -n latex tex</ins><br>

<br>

　　　　<strong>BibTeX エンジン</strong><br>
　　　　デフォルト:bibtex<br>
　　　　　<ins>upbibtex</ins><br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[ 設定プロファイル　　 ▼ \]</ins></span>　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[ 　キャンセル　 \]</ins></span>　<span style="color:Black;background-color:#9FCFFB;"><ins>\[ 　　OK　　 \]</ins></span><br>

***

■ [&#x7e;/Library/TeXShop/bin/pdfeuptex2](/TeXShop/#c671711f), [&#x7e;/Library/TeXShop/bin/pdfuplatex2](/TeXShop/#p9f6b0c6), upbibtex を使用する場合

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
　　　　　<ins>pdftex -file-line-error -synctex=1</ins>　　　　　　　<ins>&#x7e;/Library/TeXShop/bin/pdfeuptex2</ins><br>
　　　　　Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span>　　　　　　　　　　　　　　　 Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span><br>
　　　　　<ins>pdflatex -file-line-error -synctex=1</ins>　　　　　　<ins>&#x7e;/Library/TeXShop/bin/pdfuplatex2</ins><br>
　　　　　☐ Shell Escape を警告　　　　　　　　　　　　　 ☐ PostScript ファイルを保存<br>

<br>

　　　　<strong>検索用コマンド</strong><br>
　　　　kpsetool (デフォルト:kpsetool -w -n latex tex)<br>
　　　　　<ins>kpsewhich -w -n latex tex</ins><br>

<br>

　　　　<strong>BibTeX エンジン</strong><br>
　　　　デフォルト:bibtex<br>
　　　　　<ins>upbibtex</ins><br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[ 設定プロファイル　　 ▼ \]</ins></span>　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[ 　キャンセル　 \]</ins></span>　<span style="color:Black;background-color:#9FCFFB;"><ins>\[ 　　OK　　 \]</ins></span><br>

***

■ [&#x7e;/Library/TeXShop/bin/eptex2pdf-utf8](/TeXShop/#v264f812), [&#x7e;/Library/TeXShop/bin/platex2pdf-utf8](/TeXShop/#c6b7a84a), pbibtex を使用する場合

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
　　　　　<ins>pdftex -file-line-error -synctex=1</ins>　　　　　　　<ins>&#x7e;/Library/TeXShop/bin/eptex2pdf-utf8</ins><br>
　　　　　Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span>　　　　　　　　　　　　　　　 Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span><br>
　　　　　<ins>pdflatex -file-line-error -synctex=1</ins>　　　　　　<ins>&#x7e;/Library/TeXShop/bin/platex2pdf-utf8</ins><br>
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

■ [&#x7e;/Library/TeXShop/bin/euptex2pdf-utf8](/TeXShop/#dcc357ad), [&#x7e;/Library/TeXShop/bin/uplatex2pdf-utf8](/TeXShop/#d8b1bd48), upbibtex を使用する場合

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
　　　　　<ins>pdftex -file-line-error -synctex=1</ins>　　　　　　　<ins>&#x7e;/Library/TeXShop/bin/euptex2pdf-utf8</ins><br>
　　　　　Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span>　　　　　　　　　　　　　　　 Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span><br>
　　　　　<ins>pdflatex -file-line-error -synctex=1</ins>　　　　　　<ins>&#x7e;/Library/TeXShop/bin/uplatex2pdf-utf8</ins><br>
　　　　　☐ Shell Escape を警告　　　　　　　　　　　　　 ☐ PostScript ファイルを保存<br>

<br>

　　　　<strong>検索用コマンド</strong><br>
　　　　kpsetool (デフォルト:kpsetool -w -n latex tex)<br>
　　　　　<ins>kpsewhich -w -n latex tex</ins><br>

<br>

　　　　<strong>BibTeX エンジン</strong><br>
　　　　デフォルト:bibtex<br>
　　　　　<ins>upbibtex</ins><br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[ 設定プロファイル　　 ▼ \]</ins></span>　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[ 　キャンセル　 \]</ins></span>　<span style="color:Black;background-color:#9FCFFB;"><ins>\[ 　　OK　　 \]</ins></span><br>

***

- <strong>simpdftex</strong> を使用する

■ [simpdftex](http://www.tug.org/svn/texlive/trunk/Master/texmf/scripts/simpdftex/simpdftex?view=markup) (eptex, platex), pbibtex を使用する場合

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
　　　　　<ins>pdftex -file-line-error -synctex=1</ins>　　　　　　　<ins>simpdftex eptex --mode dvipdfmx --extratexopts "-synctex=1 -kanji=utf8"</ins><br>
　　　　　Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span>　　　　　　　　　　　　　　　 Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span><br>
　　　　　<ins>pdflatex -file-line-error -synctex=1</ins>　　　　　　<ins>simpdftex platex --mode dvipdfmx --extratexopts "-synctex=1 -kanji=utf8"</ins><br>
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

simpdftex を使用する方法だとエラーが発生してもそのまま dvipdfmx を実行してしまうようです．

■ [simpdftex](http://www.tug.org/svn/texlive/trunk/Master/texmf/scripts/simpdftex/simpdftex?view=markup) (euptex, uplatex), upbibtex を使用する場合

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
　　　　　<ins>pdftex -file-line-error -synctex=1</ins>　　　　　　　<ins>simpdftex euptex --mode dvipdfmx --extratexopts "-synctex=1 -kanji=utf8"</ins><br>
　　　　　Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span>　　　　　　　　　　　　　　　 Latex　<span style="color:Black;background-color:#EEEEEE;">(<ins> デフォルト </ins>)</span><br>
　　　　　<ins>pdflatex -file-line-error -synctex=1</ins>　　　　　　<ins>simpdftex uplatex --mode dvipdfmx --extratexopts "-synctex=1 -kanji=utf8"</ins><br>
　　　　　☐ Shell Escape を警告　　　　　　　　　　　　　 ☐ PostScript ファイルを保存<br>

<br>

　　　　<strong>検索用コマンド</strong><br>
　　　　kpsetool (デフォルト:kpsetool -w -n latex tex)<br>
　　　　　<ins>kpsewhich -w -n latex tex</ins><br>

<br>

　　　　<strong>BibTeX エンジン</strong><br>
　　　　デフォルト:bibtex<br>
　　　　　<ins>upbibtex</ins><br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[ 設定プロファイル　　 ▼ \]</ins></span>　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#FAFAFA;"><ins>\[ 　キャンセル　 \]</ins></span>　<span style="color:Black;background-color:#9FCFFB;"><ins>\[ 　　OK　　 \]</ins></span><br>

***

simpdftex を使用する方法だとエラーが発生してもそのまま dvipdfmx を実行してしまうようです．

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

TeXShop を再起動します．

## 小川版 (Drag &amp; Drop UpTeX) の場合の設定 {#h991fc27}

次のページを御覧下さい．<br>

- [Mac - TeX Wiki#小川版](/Mac/#tea5dffe)

## MacPorts (pTeX) の場合の設定 {#s81bdf6c}

次のページを御覧下さい．<br>

- [Mac - TeX Wiki#MacPorts (pTeX)](/Mac/#hcfd86af)

<!-- *[[Make]] の場合の設定[#n9cdd334] -->
<!--  -->
<!-- ここでは [[Make]] などを見てソースからインストールされた方のために，簡単な設定法を書いておきます．~ -->
<!--  -->
<!-- まず [[TeXShop:http://pages.uoregon.edu/koch/texshop/]] (本家) から最新版の TeXShop (texshop.zip) をダウンロードし，展開します．~ -->
<!-- 中にある TeXShop アイコンをアプリケーションフォルダに入れます．~ -->
<!-- よく使うなら，Dock にも入れておきましょう．~ -->
<!--  -->
<!-- 起動して，「環境設定」でまず「書類」でフォントを好みのもの（例えば Osaka レギュラー等幅），エンコーディングを Japanese (EUC) にします．~ -->
<!-- 起動時に「新しいファイルを作成する」はチェックを外しました．~ -->
<!-- 「内部設定」のパス設定（デフォルトは /usr/texbin）は /usr/local/teTeX/bin，パーソナルスクリプトの TeX 欄を pdfmptex，LaTeX 欄を pdfmplatex にします．~ -->
<!-- 「タイプセット」でデフォルトのスクリプトをパーソナルスクリプトにしておきます．~ -->
<!--  -->
<!-- 井上さんの 「[[pTeXShop 用のコンパイル・PDF 化スクリプト:http://www.ma.ns.tcu.ac.jp/Pages/TeX/pdfmtex.html]]」 の「実際のスクリプトは以下の通り」と書いてある部分をコピーし， -->
<!-- /usr/local/teTeX/bin/pdfmplatex -->
<!-- とします（実行許可を与えるのを忘れぬように）．~ -->
<!-- さらに，同じ内容の pdfmptex というファイルも作っておきます（シンボリックリンクまたはハードリンクでもかまいません）．~ -->
<!--  -->
<!-- これで出来上がりです．~ -->
<!-- 設定前に開いていたファイルは念のためいったん閉じて開き直して下さい．~ -->

## 使い方 {#i4c3aa46}

### タイプセット {#b06dc45a}

タイプセットは ⌘T (Command+T) で行います．

メニューの「タイプセット」から「pdfTeX」「TeX＋DVI」「パーソナルスクリプト」をその場で切り替えられます。

#### [TeXShop の engine ファイル](http://homepage.mac.com/fuhmi/) {#q2990ba4}

### [TeXShop と外部エディタの連携](http://skalldan.wordpress.com/2011/07/19/texshop-%E3%81%A8%E5%A4%96%E9%83%A8%E3%82%A8%E3%83%87%E3%82%A3%E3%82%BF%E3%81%AE%E9%80%A3%E6%90%BA/) {#w825259c}

### [TexShop での eps 貼り付け](http://d.hatena.ne.jp/yuka_y/20111011/1318302043) {#b3b3e922}

### [TexShop の自動更新](http://koda428.blogspot.com/2011/10/texshop_24.html) {#nc5442a6}

### [TeXのソースを分割してTeXShopでタイプセット](http://hiyokoz.blogspot.jp/2012/04/textexshop.html) {#m38e2900}

### 問題点 {#i951d24e}

Emacs で書いて LaTeX 処理し，TeXShop は dvipdfmx とプレビューだけ，といった使い方もできます．<br>
ただ，下手をすれば，Emacs で開いて保存すると例えば foo.tex が foo.tex~ にリネームされて新たに foo.tex が作られるので，これを追跡している TeXShop で管理している名前も foo.tex~ になってしまい，foo.tex~.dvi を dvipdfmx 処理して foo.tex~.pdf を開こうとしてエラーになってしまいます．<br>
対策としては，Emacs の側で

```
(setq backup-by-copying t)
```

と設定して逃げることができます（Thanks: seto さん）．<br>
ただし，Emacs が多少重くなるかもしれません．<br>

Mac OS X 10.2 では，埋め込んでいない和文フォントがすべてゴシック体で表示されてしまいます．<br>
10.3 以降なら大丈夫です．<br>

TeXShop のプレビュー画面から範囲指定してコピーし，他のソフトに貼り付けることができます．<br>
これで PowerPoint に数式を貼り付けられる……と思ったのですが，残念ながら PowerPoint も Word も PDF 形式の貼り付けには対応していないようです（テキストエディットでも対応しているのに）．<br>
PDF 以外の形式なら貼り付けられますが、（ベクトル形式の画像フォーマットではないため）画像を拡大するとぎざぎざになります．<br>

Keynote は PDF で貼り付けられます．<br>
しかも，文字以外の部分は透明になるので，Keynote の背景色や背景画像が適用されます．<br>

## ツール {#kffeddd2}

### [Flashmode](http://web.me.com/gerhardt/Flashmode/) {#ye507bc3}

Live preview for TeXShop

### [Ramón's TeXShop Tools](http://www2.hawaii.edu/~ramonf/TeXShop/) {#db2483a1}

## 関連リンク {#qb1b8010}

- [TeXShop入れてみた](http://milkyway.holy.jp/?p=143)
- [latexme インストール と TeXShop の設定](http://fbncc112358.blogspot.jp/2012/04/latexme-texshop.html)
- [TeX環境の構築 on Mac OS X Lion](http://henry.animeo.jp/wp/?p=1553)
- [若松久仁光のブログ - TeXworks, TeXShop](http://www.geocities.jp/flutecore/Weblog/archives/cat_texworkstexshop.html)
    - [TeXworks vs TeXShop #2](http://www.geocities.jp/flutecore/Weblog/archives/2011/11/entry_111.html)
    - [TeXworks vs TeXShop](http://www.geocities.jp/flutecore/Weblog/archives/2011/10/entry_108.html)
    - [TeXworks &amp; TeXShop](http://www.geocities.jp/flutecore/Weblog/archives/2011/10/entry_107.html)
- [【TeXShopの設定】](http://www.math.meiji.ac.jp/~mk/diary/2011/09/#tex2html15)
- [美文書５版のtexlive用のツールの設定とか](http://www.cm.kj.yamagata-u.ac.jp/memolog/?logid=37)
- [LaTeX Page](http://new.math.uiuc.edu/math198/latex.html)
- [ネ申](http://twitter.com/#!/h_okumura/status/196009146590572545)
