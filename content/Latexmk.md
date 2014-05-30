---
title: "Latexmk"
url: "/Latexmk/"
date: 2014-02-05T02:00:25Z
pukiwiki: "Latexmk"
---

# Latexmk

## Latexmk {#ra50ed94}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

### Latexmk とは {#s94c7ed2}

Latexmk は文書を作成するのに必要な回数タイプセットしてくれるツールです．<br>

- [http://www.phys.psu.edu/~collins/software/latexmk-jcc/](http://www.phys.psu.edu/~collins/software/latexmk-jcc/)

### インストール {#t07c147c}

TeX Live, W32TeX には Latexmk が最初から含まれています．<br>

#### Arch Linux {#qee2215d}

- [https://www.archlinux.org/packages/?name=texlive-core](https://www.archlinux.org/packages/?name=texlive-core)
- [https://www.archlinux.org/packages/?name=texlive-bin](https://www.archlinux.org/packages/?name=texlive-bin)

#### Linux Mint {#r8b1b822}

- [http://packages.ubuntu.com/ja/latexmk](http://packages.ubuntu.com/ja/latexmk)

#### Debian {#la23c405}

- [https://packages.debian.org/ja/latexmk](https://packages.debian.org/ja/latexmk)

### Latexmk-pdfupLaTeX, Latexmk-pdfupLaTeX2, Latexmk-LuaLaTeX の場合 (TeXworks, YaTeX, AUCTeX (TeX-interactive-mode が ON の場合), tex.vim, LaTeX Box などの場合) {#q3ee8e1b}

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
  $makeindex = 'mendex %O -U -o %D %S';
  $dvipdf = 'dvipdfmx %O -o %D %S';
  $dvips = 'dvips %O -z -f %S | convbkmk -u > %D';
  $ps2pdf = 'ps2pdf.bat %O %S %D';
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
  $makeindex = 'mendex %O -U -o %D %S';
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

### Latexmk-pdfupLaTeX, Latexmk-pdfupLaTeX2, Latexmk-LuaLaTeX の場合 (TeXstudio, Texmaker, Emacs の TeX mode, AUCTeX (TeX-interactive-mode が OFF の場合), quickrun などの場合) {#ke005cd5}

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
  $makeindex = 'mendex %O -U -o %D %S';
  $dvipdf = 'dvipdfmx %O -o %D %S';
  $dvips = 'dvips %O -z -f %S | convbkmk -u > %D';
  $ps2pdf = 'ps2pdf.bat %O %S %D';
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
  $makeindex = 'mendex %O -U -o %D %S';
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

### 中間ファイルの削除 {#ob05c2ba}

```
latexmk -c
```

### 中間ファイルと .dvi, .ps, .pdf の削除 {#u43f86f3}

```
latexmk -C
```

### リンク {#yb5452a3}

- [ぼくの .latexmkrc](http://kwakita.wordpress.com/2014/04/01/my-latexmkrc-setting/)
- [latexmk で楽々 TeX タイプセットの薦め（＆ biblatex+biberで先進的な参考文献処理） - konn-san.com](http://konn-san.com/prog/why-not-latexmk.html)
- [【質問】日本語環境における文献処理について](http://qiita.com/mr_konn/items/3f523eb6dcf1d9837c92)
- [https://gist.github.com/konn](https://gist.github.com/konn)
    - [https://gist.github.com/konn/8234466](https://gist.github.com/konn/8234466)
- [latexmk](http://kamae-norihiro.blogspot.jp/2013/06/latexmk.html)
- [LaTeX on SublimeText 2](http://izumin.hateblo.jp/entry/2013/05/09/230731)
- [Latexmkのススメ](http://xaro.hatenablog.jp/entry/2013/01/06/125723)
- [latexmk と ptex2pdf](http://konoyonohana.blog.fc2.com/blog-entry-25.html)
- [YaTeX#Latexmkを使う場合](/YaTeX/#naf0d69e)
- [latexmk を LaTeX コンパイルに使ってみた](http://unvalance.g.hatena.ne.jp/KainokiKaede/20111124/1322117707)
- [latexmk つかって LaTeX コンパイルしたら簡単すぎて身長が10cm伸びた](http://d.hatena.ne.jp/yambi/20091117/1258452926)
