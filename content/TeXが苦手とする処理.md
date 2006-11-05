---
title: "TeXが苦手とする処理"
url: "/TeXが苦手とする処理/"
date: 2006-11-05T05:57:50Z
pukiwiki: "TeXが苦手とする処理"
---

# TeXが苦手とする処理

[TeX Q &amp; A](https://okumuralab.org/~okumura/texfaq/qa/index.html) などでしばしば話題になる処理のうち，TeX 本体では提供されず，
ときとして TeX 自身は不得手とする処理について挙げます．
既製品があるものについては既製品も紹介していますが，
それらを用いた場合の出力結果に不満がある場合には，
ユーザ自身で対処することになります．

ここに挙げる処理を行うのが単なる「書き手の趣味」である場合には，
無理をせずに書き手自身の腕で無難にできる範囲の処理で済ませる（か，
画像にしてしまう）ほうが賢明である場合もあることでしょう．

### 丸数字 {#s7930698}

まず，丸数字の類は（従来の EUC-JP, Shift_JIS などを用いて記述する限り）
「環境依存」文字であることに注意してください (See [qa:45781](https://okumuralab.org/~okumura/texfaq/qa/45781.html))．

対処法は，大別すると次の 2 通りになります．

- 丸数字などの字形をもったフォントを利用:
    - ZapfDingbats フォント （“{\usefont{U}{pzd}{m}{n} \symbol{"AC}}” など）
    - pifont パッケージ（“\ding{172}”，“\Pisymbol{pzd}{"AC}” （= まる1）など）
    - [otf パッケージ](/OTF/)（“\ajMaru{1}”，“\UTF{2460}” など）
- 丸の中身と丸を合成:
    - \textcircled マクロ（LaTeX 自身が提供）
    - \MARU マクロ（okumacro パッケージが提供するほか，
        同種のものがあちこちで定義されています (See [qa:29584](https://okumuralab.org/~okumura/texfaq/qa/29584.html))）

### 複数行にわたる下線（あるいは波線・破線など） {#t65559ac}

まず，[qa:32045](https://okumuralab.org/~okumura/texfaq/qa/32045.html) でコメントされている現実があることを認識してください．
そのうえで既製品にあたると，
大石氏のサイトに下線類を作成するマクロについての比較を行った文書
『[下線に関するマクロ比較](http://www17.plala.or.jp/ohishi-masaru/tex/library/underline.pdf)』
（ただし，未完成）があり，その中でいくつかの既製品が紹介されています．
現在（特定のコミュニティのメンバーでなくとも）入手可能なもののうち，
和文テキストを取り扱うことを念頭に置いたもので，
かつ比較的完成度の高いものを挙げます．

- [jumoline パッケージ](http://www.para.tutics.tut.ac.jp/~nakasima/latex/):
    下線 (\Underline)，上線 (\Overline)，打ち消し線 (\Midline) を提供

- [udline パッケージ](http://homepage2.nifty.com/domae/tex.html):
    実線，破線，点線，波線などによる下線，打ち消し線，上線を提供

- [uline-- パッケージ](http://www.h4.dion.ne.jp/~latexcat/macros/macro-index.html):
    吉永徹美氏．実線，波線による下線，打ち消し線，上線を提供（縦組み対応）

なお，欧文のみでよければ，
[ulem パッケージ](https://mirror.ctan.org/macros/latex/contrib/misc/ulem.sty) が下線，二重下線，
打ち消し線，波線などを提供しています．

### 飾り枠（ときとしてページ分割可能なもの） {#t43fb31c}

まず，TeX は「お絵描き」ソフトではない以上，そのような飾り枠の類は苦手とします．
枠の途中でのページ分割の必要がなければ，
画像にするなり pstricks などの「描画用」パッケージを用いるなりするのが簡単でしょう．
比較的単純な形状の枠については ascmac パッケージが提供する
itembox 環境といったものが存在します（さらに，枠の四隅の形状を変更した例が
[qa:45183](https://okumuralab.org/~okumura/texfaq/qa/45183.html) にみられます）．

一方，ページ分割の必要がある場合，長方形の枠については
[eclbkbox パッケージ](http://mechanics.civil.tohoku.ac.jp/~bear/bear-collections/style-files/eclbkbox.lzh)
が提供する breakbox 環境が利用できます．
なお，ページ分割可能な枠の四隅を四分円にしたり
斜めに切り落とした（八角形状の）枠にしたものは，
（著名な）既製品では提供されていないようですので，ユーザ自身で作成することになります．
要は，eclbkbox パッケージによる breakbox 環境などの処理をふまえつつ
「枠の四隅」のところだけ書き換えればよいということになります
（やるべきことは [qa:45183](https://okumuralab.org/~okumura/texfaq/qa/45183.html) の例と同様です）．
