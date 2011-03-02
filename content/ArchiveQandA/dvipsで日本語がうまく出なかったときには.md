---
title: "ArchiveQandA/dvipsで日本語がうまく出なかったときには"
url: "/ArchiveQandA/dvipsで日本語がうまく出なかったときには/"
date: 2011-01-04T01:34:30Z
pukiwiki: "ArchiveQandA/dvipsで日本語がうまく出なかったときには"
---

# ArchiveQandA/dvipsで日本語がうまく出なかったときには

ここでは、[TeX Q &amp; A](https://okumuralab.org/~okumura/texfaq/qa/index.html) で話題になった、pdvipsとghostscriptの日本語設定方法について述べます。

<!-- *目次 [#c74dbb77] -->

### はじめに {#bdcc8e5b}

この内容は次の内容でお悩みの方にとって、価値があると思われます。

- psファイルの閲覧で、日本語が化ける
- beamerを用いた日本語資料の文字が化ける(psを経由した場合で)
- gnuplotでeps出力したファイルで文字が化ける

### 動作環境 {#bdcc8e5a}

QAで実際に問題が生じた環境は以下のものでした。

- OS   : Fedor13.i686
- tex  : platex
    - Version 3.141592-p3.1.10 (euc) (Web2C 7.5.6)) &lt; yumを用いてtexliveよりインストール
- dvips:pdvips
    - p1.7a Copyright 2005 ASCII Corp.([www-ptex@ascii.co.jp](mailto:www-ptex@ascii.co.jp))
        5.96.1 Copyright 2007 Radical Eye Software (www.radicaleye.com))

- ghostscript:8.71
    - 同じくyumでtexliveと共にインストール
- pdf,ps viewer:evince
    ちなみに、問題の発端は、beamer posterスタイルを使用したポスター作成時の文字化けでした。

### pdvipsの設定 {#l91d86a6}

Fedoraの場合、日本語対応したdvipsはpdvipsになるようですが、なにも設定しないでpdvipsを使用すると

```
mktexpk: don't know how to create bitmap font for rml.
kpathsea: Appending font creation commands to missfont.log.
pdvips: Font rml not found, characters will be left blank.
```

といったエラーが出ることがあります。これはrmlというtfmファイルに割り当てるフォントが見つからないために出るエラーです。具体的には、日本語があるはずの部分が空白になります。このエラーには次の対処法を取ります。

- mapファイルを探す

    ```
    kpsewhich --format=.map psfonts.map
    ```

    で、psfonts.mapがどこにあるか探します。QAで取り上げられた問題の場合では、

    ```
    /usr/share/texmf/fonts/map/dvips/updmap/psfonts.map
    ```

    でした。見つからない場合は、配布者に相談してください。

- mapファイルの編集<br>
    mapファイルが見つかったら、rmlにフォントを割り振ります。具体的には

    ```
    rml Ryumin-Light-H
    gbm GothicBBB-Medium-H
    rmlv Ryumin-Light-V
    gbmv GothicBBB-Medium-V
    ```

    を末尾に加えます。このファイルの中身は非常に長いので、実際のファイルの中身はここには掲載できません。

以上ができましたら、もう一度コンパイルをかけます。エラーがなくなれば、pdvipsの設定は終わりです。

### ghostscriptの設定 {#lb61846e}

pdvipsの設定が完了したにも関わらず、まだ日本語がうまく表示されない場合は、ghostscriptや、ファイルではなく閲覧用のアプリケーションの設定が必要です。もし、pdvipsの設定がうまくいっていれば、少なくとも日本語が出る位置には他の文字が出ているはずです。そうでない方は、もう一度pdvipsの確認をしたほうがいいと思います。ちなみに、gnuplotのterminal をpostscript eps enhancedにしている方で、日本語表示にトラブルを抱えている方にとって、この文章は解決のヒントになるかもしれません。具体的な解決方法は以下です。

- 表示問題の特定<br>
    まず、問題がghost scriptなのかを判別するために、適当な日本語を含んだ（漢字が入っていても、いなくても問題ない）ファイルを用意して、オプションをつけてコンパイルします。

    ```
    gs -sDEVICE=x11 test.ps
    ```

    このとき、

    ```
    GPL Ghostscript 8.71 (2010-02-10)
    Copyright (C) 2010 Artifex Software, Inc. All rights reserved.
    This software comes with NO WARRANTY: see the file PUBLIC for details.
    Can't find (or can't open) font file /usr/share/ghostscript/8.71/Resource /Font/Ryumin-Light-H.
    Can't find (or can't open) font file Ryumin-Light-H.
    Querying operating system for font files...
    Can't find (or can't open) font file /usr/share/ghostscript/8.71/Resource /Font/Ryumin-Light-H.
    Can't find (or can't open) font file Ryumin-Light-H.
    Didn't find this font on the system!
    Substituting font Courier for Ryumin-Light-H.
    Loading NimbusMonL-Regu font from /usr/share/fonts/default/Type1/n022003l.pfb... 2628532 1139472 3593500 1984411 1 done.
    >>showpage, press <return> to continue<<
    XIO: fatal IO error 11 (Resource temporarily unavailable) on X server ":0.0"
    after 55 requests (51 known processed) with 0 events remaining.
    ```

    といったエラーが出ている方は、おそらくghostscriptの設定が必要です。QAの事例では、ghostscriptがフォントを探しにいっている
    　/usr/share/ghostscript/8.71/Resource /Font
    というディレクトリすらない状況でした。

- cidfmapを探す。<br>
    問題の特定ができた場合で、かつ上記のエラーが出ている場合は、cidfmapを編集する必要があります。cidfmapは通常ghostscriptのlibディレクトリにあるようですが、見当たらない場合はこれを探さなければなりません。QAの事例では

    ```
    /usr/share/ghostscript/8.71/Resource/Init/cidfmap
    ```

    にありました。このファイルにryuminに当たるフォントを指定（エイリアスを指定）すればいいのですが、cidfmapそのものは、いじるなと警告が記述されている場合があります。QAの事例では、ファイルの中身は

    ```
    %!
    % Don't change following line. We should ensure that the original one is surely loaded.
    (cidfmap.GS) .runlibfile
    % following lines are for CJK fonts.
    (cidfmap.ja) .runlibfileifexists
    (cidfmap.ko) .runlibfileifexists
    (cidfmap.zh_CN) .runlibfileifexists
    (cidfmap.zh_TW) .runlibfileifexists
    % must be at the bottom of line to allow people overriding everything.
    (cidfmap.local) .runlibfileifexists
    ```

    とありました。このような場合、cidfmap.jaやcidfmap.localを探しだし、編集をする必要があります。一般的には/usr/share/ghostscript/8.71/libにあるようですが、QAの事例では

    ```
    /etc/ghostscript/8.71
    ```

    にありました。この辺は、環境に依って結構異なるようです。

- cidfmapの作成<br>
    cidfmapが見当たらない場合、作成することもできます。作成は

    ```
    gs -q -dBATCH -sFONTDIR=/usr/local/share/ghostscript/fonts/ -sCIDFMAP=/usr/local/share/ghostscript/8.71/lib/cidfmap mkcidfm.ps
    ```

    のようなコマンドで行います。sFONTFIRはフォントの格納されているディレクトリ、-sCIDFMAPにはcidfmapを作成するディレクトリを指定します。

- cidfmapを編集する<br>
    ファイルを見つけたら、ファイルの編集に移ります。まず、お手元に適当なTureTypeのフォントが無い方は、これを用意しましょう。cidfmapの編集は [http://oku.edu.mie-u.ac.jp/~okumura/texwiki/?Ghostscript%208.15](http://oku.edu.mie-u.ac.jp/~okumura/texwiki/?Ghostscript%208.15) により詳細なものが出ているので、そちらも確認してください。
    - fontを用意する<br>
        例えば次の東京電気大学のページから持ってくるといいと思います。

        ```
        http://ayapin.film.s.dendai.ac.jp/~matuda/jttf.html
        ```

        フォントが用意できたら、フォントを

        ```
        /usr/share/fonts/
        ```

        に適当なディレクトリを作って格納します。もちろん、シンボリックリンクでも構いません。QAの事例では/usr/share/fonts/sazanami-20040629を作り、

        ```
        sazanami-gothic.ttf  sazanami-mincho.ttf
        ```

        を入れています。
    - エイリアスの設定
        cidfmapとフォントの用意ができましたら、cidfmapに

        ```
        /Ryumin-Light << /FileType /TrueType /Path (/usr/share/fonts/sazanami-20040629/sazanami-mincho.ttf) /SubfontID 0 /CSI [(Japan1) 2]>> ;
        /GothicBBB-Medium << /FileType /TrueType /Path (/usr/share/fonts/sazanami-20040629/sazanami-gothic.ttf) /SubfontID 0 /CSI [(Japan1) 2] >> ;
        ```

        といった文言を加えます。（）の中身は、用意したフォントを指定して下さい。これで対処は終了です。

- 確認<br>
    設定後、psファイルを閲覧し、日本語が出ていれば成功です。ps2pdfなどを使って、psからpdfを作成している場合は、もう一度ps2pdfを使用してコンパイルをしてから確認してください。

### 謝辞 {#m585375b}

この文章を書くに当たって、kakuto先生とkuroky +先生には多大な情報を提供して頂きました。誠に有難うございました。

### 参考 {#m585375c}

- [http://d.hatena.ne.jp/meitetujikokuhyou/20100420/1271777716](http://d.hatena.ne.jp/meitetujikokuhyou/20100420/1271777716)
