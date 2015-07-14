---
title: "pic"
url: "/pic/"
date: 2009-09-12T01:43:50Z
pukiwiki: "pic"
---

# pic

## pic {#ce82732b}

pic とは，簡単なフローチャートのような図を作成するためのプログラミング言語 (A Graphics Language for Typesetting) です．
troff 用図形プリプロセッサとして実装されています．

- [http://www.cs.bell-labs.com/10thEdMan/pic.pdf](http://www.cs.bell-labs.com/10thEdMan/pic.pdf) --- by Brian W. Kernighan
- [http://surf.ml.seikei.ac.jp/~nakano/JMwww/html/GNU_groff/man1/pic.1.html](http://surf.ml.seikei.ac.jp/~nakano/JMwww/html/GNU_groff/man1/pic.1.html)

***

***

### dpic {#n4789561}

- [https://ece.uwaterloo.ca/~aplevich/dpic/](https://ece.uwaterloo.ca/~aplevich/dpic/)
- [dpic --- 図形作成プログラミング言語](http://konoyonohana.blog.fc2.com/blog-entry-129.html)

### gpic {#re376f4f}

- [http://www.math.uiuc.edu/~west/gpic.html](http://www.math.uiuc.edu/~west/gpic.html)  by  Douglas B. West

### tpic {#xda9ac26}

tpic は，pic を元にして Tim Morgan が作り上げた
TeX 用図形プリプロセッサ，およびそれが出力する special コマンドセットの名称です．

tpic 拡張機能は [dvips](/dvips/), [dvipdfm(x)](/dvipdfmx/), [dviout](/dviout/), [xdvi](/xdvi/) 等の数多くの DVIWare でサポートされています．
一方で，DVI を扱わない [pdfTeX](/pdfTeX/) では tpic 拡張機能がサポートされていません．

- 参考：[BXpict2e パッケージ ～pict2e で eepic な世界～ \[電脳世界の奥底にて\]](http://zrbabbler.sp.land.to/bxpict2e.html)

#### tpic specials を利用する LaTeX 用のマクロ {#kaa909af}

- eepic パッケージでは，picture 環境および epic パッケージの機能を拡張するにあたって DVI ドライバの tpic 拡張を利用します．
- [Xy-pic](/Xy-pic/) パッケージは，標準の TeX の機能内で描画する機能も持ちますが，tpic 拡張を利用して高品質な出力を行う機能もあります．

#### tpic specials のソースを生成するツール {#leb51bcb}

tpic specials を半 WYSIWYG で作成するツールに，[WinTpic](http://aogaeru-lab.my.coocan.jp/sub1.html) があります．

- 参考：[WinTpic - LaTeX](http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/etc011.html)

#### tpic specials のコマンド {#j91d4d68}

% この項は [dviout](/dviout/) のヘルプより引用して整形しました．

個々のグラフィック要素の位置の原点は，TeX が保持している「ページ上の位置」で，
右方向が X 軸，下方向が Y 軸の正の向きとなり，座標はミリインチ (0.254 mm)
単位の整数で表します．

角度は，X 軸の正の方向から時計周りのラジアン単位で，0 から 2π までの値を取ります．
弧の描画では，開始角度を 0 とし，終了角度を
2π 以上にとることにより，完全な円または楕円を表します．

```
\special{pn s}
  % 線幅を s ミリインチにします．
\special{pa x y}% 点 (x,y) を path（経路）に加えます．
\special{fp}
  % それまでに定義された path を，現在の線幅で描きます．
  % シェーディングが設定されていて，パスが閉じていれば，path 内部を実際に塗りつぶします．
  % path 内の点の数は，0にリセットされます．
\special{ip}
  % \special{fp} と同じですが，path を描きません．
  % 条件が満たされれば，シェーディングを行います．
\special{da f}
  % \special{fp} と同じですが，path は破線で描きます．
  % f は実数で，ダッシュあたりの長さをインチ単位で指定します（cf. tpic specials の拡張）．
\special{dt f}
  % \special{fp} と同じですが，path は点線で描きます．
  % f は実数で，点の間隔をインチ単位で指定します．
\special{sp d}
  % \special{fp} と同じですが，path は spline 曲線で描かれます．
  % d は実数で，曲線の種類を指定します．
  %% - d = 0 か d が省略された場合，実線で描きます．
  %% - d > 0 の場合，破線で描きます．d はダッシュの長さです．
  %% - d < 0 の場合，点線で描きます．-d は点間隔です．
\special{ar x y u v s e}
  % 中心(x,y)の弧を描きます．
  % s は開始角度，e は終了角度で，ラジアン単位の実数です．
  % 完全な円か楕円であるばあいは，u, v は，それぞれ x, y 半径を表します．
  % そうでない場合は，u = v であり，s から e へ弧が描かれます．
  % 条件が満たされれば，シェーディングも行います．
\special{ia x y u v s e}
  % これは，\special{ar x y u v s e}と同じですが，弧は描かず，
  % 条件が満たされればシェーディングを行います．
\special{sh s}
  % シェーディングを指定します．
  % このコマンドの次に定義される閉じた図形（3つ以上の pa とそれに続く fp か ip，
  % もしくは，ar か ia）の内部を塗りつぶします．
  % s は，0以上1以下の実数です．
  % 0は白で塗りつぶすことを意味し，図形の下にあったものはテキストも含め，全て消去します．
  % 0以外の値は灰色を意味し，図形の下にあったものを消去せずに灰色を塗り加えます．
  % 0.5がデフォルトの値で，通常の灰色にあたり，1は黒を意味します．
  % s が指定されていなければ0.5の値を用います．
  % シェーディングは図形の内部のみに対して行い，境界線はそれとは独立に，現在の線巾を用いて行います．
\special{wh}
  % \special{sh 0}と同じ．
\special{bk}
  % \special{sh 1}と同じ．
```

## [KETpic](http://ketpic.com/) {#d0d77e0e}

KETpic とは，数式処理システム (Computer algebra system; CAS)
で作成した図を LaTeX 文書に挿入するマクロパッケージです．
現在 Maple 版と Mathematica 版，Maxima 版，Scilab 版があります．
CAS の出力図を tpic 形式に変換して TeX の picture 環境に埋め込みます．

- [KETpic で楽々 TeX グラフ](http://oku.edu.mie-u.ac.jp/texconf11/presentations/yamashita.pdf)
- [KETpic の使い方](https://oku.edu.mie-u.ac.jp/texconf10/presentations/yamashita.pdf)
- [KETpic による曲面描画と教育利用](http://www.kurims.kyoto-u.ac.jp/~kyodo/kokyuroku/contents/pdf/1624-01.pdf)
- [KETpic入門](http://www.ms.u-tokyo.ac.jp/~tado/ketpic/)
- [KETpicメモ](http://www.math.sci.hokudai.ac.jp/~yano/ketpic/ketpic.html)
- [KETpic できれいな図を書こう](http://www.slideshare.net/akimotoyoshitomo/ketpic)
- [うぶつん: KETpic](http://ubutun.blogspot.jp/search/label/KETpic)
