---
title: "dvipng"
url: "/dvipng/"
date: 2004-12-09T17:39:12Z
pukiwiki: "dvipng"
---

# dvipng

### dvipngとは？ {#wd523196}

dvipng は dvi ファイルから png 形式の画像を生成するコマンドです。
[preview-latex プロジェクト](http://www.gnu.org/software/auctex/preview-latex.html)の成果物として公開されています。
Version 1.9 から サブフォントに対応しているので、サブフォント機構
を使って作成した dvi の場合には日本語も png 化できます。

- [http://www.nongnu.org/dvipng/](http://www.nongnu.org/dvipng/)
    - [http://savannah.nongnu.org/projects/dvipng/](http://savannah.nongnu.org/projects/dvipng/)
        <!-- -http://dvipng.sourceforge.net/ -->
        <!-- - -http://sourceforge.net/projects/dvipng/ -->

- [http://savannah.gnu.org/projects/auctex/](http://savannah.gnu.org/projects/auctex/)
    <!-- -http://preview-latex.sourceforge.net/ -->
    <!-- - -http://sourceforge.net/projects/preview-latex/ -->

mimeTeX 同様、数式をウェブ用の画像に変換するのに役立ちそうです。

### 参考 {#nc3259d5}

- [qa:17730](https://okumuralab.org/~okumura/texfaq/qa/17730.html)
- [http://hooktail.org/computer/index.php?dvipng](http://hooktail.org/computer/index.php?dvipng)
- [qa:51671](https://okumuralab.org/~okumura/texfaq/qa/51671.html)からの議論で、dvi2dviを通してサブフォント化した日本語dviファイルが変換できるようになりました

### その他 {#i8306226}

- MacOSX (10.3.5+EasyPackage) ではコンパイルに成功しない、という情報が寄せられています。
