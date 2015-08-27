---
title: "Latexmk"
url: "/Latexmk/"
date: 2014-02-05T02:00:25Z
pukiwiki: "Latexmk"
---

# Latexmk

## Latexmk {#ra50ed94}

Latexmk は文書を作成するのに必要な回数タイプセットしてくれるツールです．BibTeX や Makeindex などの実行も自動で行われます．

- [http://www.phys.psu.edu/~collins/software/latexmk-jcc/](http://www.phys.psu.edu/~collins/software/latexmk-jcc/)

***

***

### インストール {#t07c147c}

TeX Live, W32TeX には Latexmk が最初から含まれています．ただし，[W32TeX](/W32TeX/) の場合は別途 Perl インタプリタが必要です（[Perl](/Perl/) の項目参照）．

<!-- ***Arch Linux [#qee2215d] -->
<!--  -->
<!-- -https://www.archlinux.org/packages/?name=texlive-core -->
<!-- -https://www.archlinux.org/packages/?name=texlive-bin -->
<!--  -->
<!-- ***Linux Mint [#r8b1b822] -->
<!--  -->
<!-- -http://packages.ubuntu.com/ja/latexmk -->
<!--  -->
<!-- ***Debian [#la23c405] -->
<!--  -->
<!-- -https://packages.debian.org/ja/latexmk -->

### 設定 {#g2a2cf08}

実際にコンパイル時に何を用いるか（uplatex か latex か，upbibtex か bibtex か等々）は，.latexmkrcと言うファイルに記述します．実行時オプションで指定できなくもありません（以下の使い方を参照）．.latexmkrc はホームディレクトリに作成します．ただし Windows の場合ホームディレクトリとは

1. 環境変数 HOME が定義されていればそのフォルダ
1. そうでなければ環境変数 USERPROFILE で指定されたフォルダ

となります．多くの場合は HOME は定義されていないでしょうから，USERPROFILE の指定するフォルダになるでしょう．デフォルトでは USERPROFILE は C:\Users\USERNAME となります．（Wndows が C ドライブにインストールされていて，ユーザ名が USERNAME の場合．）

日本語用の簡単な .latexmkrc です．

```
$latex = 'uplatex -synctex=1 %O %S';
$bibtex = 'upbibtex %O %B';
$dvipdf = 'dvipdfmx %O -o %D %S';
$makeindex = 'upmendex %O -o %D %S';
$max_repeat = 10;
$pdf_previewer = '"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe" -reuse-instance %O %S';
```

%S はソースファイル，%O はオプション，%D は出力ファイル，%B は拡張子無しのソースファイルに置き換えられます．なお，これらを省略しても latexmk は適当に補完をしてくれます．このファイルを .latexmkrc としてホームディレクトリに保存してください．

なお，Windows のエクスプローラでは "." から始まるファイル名を作成することができません．メモ帳を起動し，上記を貼り付けた後「名前をつけて保存」ダイアログを開き，「ファイルの種類」を「全てのファイル (\*.\*)」に変更してから保存してください．

### 使い方 {#nf74ee05}

sample.tex をコンパイルする例です．詳しくは latexmk --help や texdoc latexmk をご覧ください．

- dvi を生成する

    ```
    latexmk sample.tex
    ```

- dvi 経由で pdf を生成する

    ```
    latexmk -pdfdvi sample.tex
    ```

- dvi 経由で pdf を生成，uplatex，dvipdfmx，upbibtex，upmendex を使うことを明示する．

    ```
    latexmk -pdfdvi -latex=uplatex -synctex=1 -e "$dvipdf='dvipdfmx %O %S';$bibtex='upbibtex';$makeindex='upmendex';" sample.tex
    ```

- dvi 経由で pdf を生成し，更にプレビューを行う．

    ```
    latexmk -dvipdf -pv sample.tex
    ```

- pdflatex で pdf を生成する

    ```
    latexmk -pdf sample.tex
    ```

- lualatex で pdf を生成する

    ```
    latexmk -lualatex sample.tex
    ```

- dvi 経由で pdf を生成し，それをプレビュー，更に sample.tex を監視させ，更新されたら再度コンパイルを行う．

    ```
    latexmk -dvipdf -pvc -interaction=nonstopmode sample.texu
    ```

- 中間ファイルを削除する

    ```
    latexmk -c sample.tex
    ```

- 中間ファイルと .dvi, .ps, .pdf を削除する

    ```
    latexmk -C sample.tex
    ```

「dvi 経由で pdf を生成，uplatex，dvipdfmx，upbibtex，upmendex を使うことを明示する．」では %O や %S などを latexmk に補完させています．dvipdfmx は補完に失敗するため，指定しています．

### .latexmkrc のサンプル {#qeabdd2c}

#### Latexmk-upLaTeX-pdfdvi, Latexmk-upLaTeX-pdfps, Latexmk-LuaLaTeX の場合 (TeXworks, AUCTeX (TeX-interactive-mode が ON の場合), YaTeX, tex.vim, LaTeX Box などの場合) {#q3ee8e1b}

***

&#x7e;/.latexmkrc

***

```
#!/usr/bin/env perl
if ($^O eq 'MSWin32') {
  $latex = 'uplatex %O -kanji=utf8 -no-guess-input-enc -synctex=1 %S';
  $pdflatex = 'lualatex %O -synctex=1 %S';
  $biber = 'biber %O --bblencoding=utf8 -u -U --output_safechars %B';
  $bibtex = 'upbibtex %O %B';
  $makeindex = 'upmendex %O -o %D %S';
  $dvipdf = 'dvipdfmx %O -o %D %S';
  $dvips = 'dvips %O -z -f %S | convbkmk -u > %D';
  $ps2pdf = 'ps2pdf.exe %O %S %D';
  $pdf_mode = 3;
  if (-f 'C:/Program Files/SumatraPDF/SumatraPDF.exe') {
    $pdf_previewer = '"C:/Program Files/SumatraPDF/SumatraPDF.exe" -reuse-instance';
  } elsif (-f 'C:/Program Files (x86)/SumatraPDF/SumatraPDF.exe') {
    $pdf_previewer = '"C:/Program Files (x86)/SumatraPDF/SumatraPDF.exe" -reuse-instance';
  } else {
    $pdf_previewer = 'texworks';
  }
} else {
  $latex = 'uplatex %O -synctex=1 %S';
  $pdflatex = 'lualatex %O -synctex=1 %S';
  $biber = 'biber %O --bblencoding=utf8 -u -U --output_safechars %B';
  $bibtex = 'upbibtex %O %B';
  $makeindex = 'upmendex %O -o %D %S';
  $dvipdf = 'dvipdfmx %O -o %D %S';
  $dvips = 'dvips %O -z -f %S | convbkmk -u > %D';
  $ps2pdf = 'ps2pdf %O %S %D';
  $pdf_mode = 3;
  if ($^O eq 'darwin') {
    $pvc_view_file_via_temporary = 0;
    $pdf_previewer = 'open -ga /Applications/Skim.app';
  } else {
    $pdf_previewer = 'xdg-open';
  }
}
```

***

```
latexmk -gg -pdfdvi hoge.tex
latexmk -gg -pdfps hoge.tex
latexmk -gg -pdf hoge.tex
```

#### Latexmk-upLaTeX-pdfdvi, Latexmk-upLaTeX-pdfps, Latexmk-LuaLaTeX の場合 (TeXstudio, Texmaker, Emacs の TeX mode, AUCTeX (TeX-interactive-mode が OFF の場合), vimtex, quickrun などの場合) {#ke005cd5}

***

&#x7e;/.latexmkrc

***

```
#!/usr/bin/env perl
if ($^O eq 'MSWin32') {
  $latex = 'uplatex %O -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode %S';
  $pdflatex = 'lualatex %O -synctex=1 -interaction=nonstopmode %S';
  $biber = 'biber %O --bblencoding=utf8 -u -U --output_safechars %B';
  $bibtex = 'upbibtex %O %B';
  $makeindex = 'upmendex %O -o %D %S';
  $dvipdf = 'dvipdfmx %O -o %D %S';
  $dvips = 'dvips %O -z -f %S | convbkmk -u > %D';
  $ps2pdf = 'ps2pdf.exe %O %S %D';
  $pdf_mode = 3;
  if (-f 'C:/Program Files/SumatraPDF/SumatraPDF.exe') {
    $pdf_previewer = '"C:/Program Files/SumatraPDF/SumatraPDF.exe" -reuse-instance';
  } elsif (-f 'C:/Program Files (x86)/SumatraPDF/SumatraPDF.exe') {
    $pdf_previewer = '"C:/Program Files (x86)/SumatraPDF/SumatraPDF.exe" -reuse-instance';
  } else {
    $pdf_previewer = 'texworks';
  }
} else {
  $latex = 'uplatex %O -synctex=1 -interaction=nonstopmode %S';
  $pdflatex = 'lualatex %O -synctex=1 -interaction=nonstopmode %S';
  $biber = 'biber %O --bblencoding=utf8 -u -U --output_safechars %B';
  $bibtex = 'upbibtex %O %B';
  $makeindex = 'upmendex %O -o %D %S';
  $dvipdf = 'dvipdfmx %O -o %D %S';
  $dvips = 'dvips %O -z -f %S | convbkmk -u > %D';
  $ps2pdf = 'ps2pdf %O %S %D';
  $pdf_mode = 3;
  if ($^O eq 'darwin') {
    $pvc_view_file_via_temporary = 0;
    $pdf_previewer = 'open -ga /Applications/Skim.app';
  } else {
    $pdf_previewer = 'xdg-open';
  }
}
```

***

```
latexmk -gg -pdfdvi hoge.tex
latexmk -gg -pdfps hoge.tex
latexmk -gg -pdf hoge.tex
```

### リンク {#yb5452a3}

- [latexmk で楽々 TeX タイプセットの薦め（＆ biblatex+biberで先進的な参考文献処理） - konn-san.com](http://konn-san.com/prog/why-not-latexmk.html)
- [ぼくの .latexmkrc](http://kwakita.wordpress.com/2014/04/01/my-latexmkrc-setting/)
- [【質問】日本語環境における文献処理について](http://qiita.com/mr_konn/items/3f523eb6dcf1d9837c92)
- [https://gist.github.com/konn](https://gist.github.com/konn)
    - [https://gist.github.com/konn/8234466](https://gist.github.com/konn/8234466)
- [latexmk | miyazakikenji](http://miyazakikenji.wordpress.com/2014/01/27/latexmk/)
- [latexmk](http://kamae-norihiro.blogspot.jp/2013/06/latexmk.html)
- [LaTeX on SublimeText 2](http://izumin.hateblo.jp/entry/2013/05/09/230731)
- [Latexmkのススメ](http://xaro.hatenablog.jp/entry/2013/01/06/125723)
- [latexmk と ptex2pdf](http://konoyonohana.blog.fc2.com/blog-entry-25.html)
- [YaTeX#Latexmkを使う場合](/YaTeX/#naf0d69e)
- [latexmk を LaTeX コンパイルに使ってみた](http://unvalance.g.hatena.ne.jp/KainokiKaede/20111124/1322117707)
- [latexmk つかって LaTeX コンパイルしたら簡単すぎて身長が10cm伸びた](http://d.hatena.ne.jp/yambi/20091117/1258452926)
- [Latexmk（Windows特化で使い方を書いてみる）](http://d.hatena.ne.jp/abenori/20150110)
