---
title: "URW"
url: "/URW/"
date: 2004-09-23T04:28:56Z
pukiwiki: "URW"
---

# URW

## URWフォントのバグ {#fdfc8e3a}

Michael Shell が 2004-07-23 に comp.text.tex にポストした
Acrobat Reader 5.x/6.x and Ghostscript's latest URW Palladio fonts
という記事から始まるスレッドで，「新しい」URW フォントにバグがあることがわかりました。

- もし texmf 以下にある uplbi8a.pfb のサイズが 51285 ではなく 131673
    になっていたら，URW フォント全体を CTAN の fonts/urw/base35/pfb にあるものと置き換えてください。
    特に Windows の場合は，角藤さんが配布されている 2004-07-23
    以降の t1fonts.tar.gz を上書きインストールするのが簡単です \[[qa:30444\]](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/qa/30444.html)。

- もし Ghostscript の fonts ディレクトリにある p052024l.pfb のサイズが 51285 ではなく 131673
    になっていたら，上記の CTAN にあるフォント（あるいは角藤さんの新しい t1fonts.tar.gz
    に含まれるもの）を次のようにリネームしたもので置き換えてください（Walter Schmidt）。

```
# rename URW fonts from TeX names back to URW names
mv   uagd8a.pfb      a010015l.pfb
mv   uagdo8a.pfb     a010035l.pfb
mv   uagk8a.pfb      a010013l.pfb
mv   uagko8a.pfb     a010033l.pfb
mv   ubkd8a.pfb      b018015l.pfb
mv   ubkdi8a.pfb     b018035l.pfb
mv   ubkl8a.pfb      b018012l.pfb
mv   ubkli8a.pfb     b018032l.pfb
mv   ucrb8a.pfb      n022004l.pfb
mv   ucrbo8a.pfb     n022024l.pfb
mv   ucrr8a.pfb      n022003l.pfb
mv   ucrro8a.pfb     n022023l.pfb
mv   uhvb8a.pfb      n019004l.pfb
mv   uhvb8ac.pfb     n019044l.pfb
mv   uhvbo8a.pfb     n019024l.pfb
mv   uhvbo8ac.pfb    n019064l.pfb
mv   uhvr8a.pfb      n019003l.pfb
mv   uhvr8ac.pfb     n019043l.pfb
mv   uhvro8a.pfb     n019023l.pfb
mv   uhvro8ac.pfb    n019063l.pfb
mv   uncb8a.pfb      c059016l.pfb
mv   uncbi8a.pfb     c059036l.pfb
mv   uncr8a.pfb      c059013l.pfb
mv   uncri8a.pfb     c059033l.pfb
mv   uplb8a.pfb      p052004l.pfb
mv   uplbi8a.pfb     p052024l.pfb
mv   uplr8a.pfb      p052003l.pfb
mv   uplri8a.pfb     p052023l.pfb
mv   usyr.pfb        s050000l.pfb
mv   utmb8a.pfb      n021004l.pfb
mv   utmbi8a.pfb     n021024l.pfb
mv   utmr8a.pfb      n021003l.pfb
mv   utmri8a.pfb     n021023l.pfb
mv   uzcmi8a.pfb     z003034l.pfb
mv   uzdr.pfb        d050000l.pfb
```

URWフォントは，URWがフリーソフトウェアコミュニティに寄贈した高品位な互換フォントです。
「新しい」URWフォントは，[日本語TeX情報：新着情報 2003](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/new03.html) \[030801\]
でご紹介したように，URWフォントにキリル文字を追加したものですが，ヒンティング情報にバグがあります。
以下はこのバグが特に目立つ例です（Michael Shell）：

```
\documentclass[11pt]{article}
\usepackage{mathpazo}
\begin{document}
\parindent 0pt
\centerline{\LARGE A Test for Acrobat Reader's Rendering of
\textit{\bfseries Bold Italic} Palladio}
\vspace{24pt}
Do some letters in the bold italic words below look vertically offset
from the baseline when viewed on-screen under normal magnification with
Acrobat Reader?

\hrulefill\\[24pt]
\textit{\bfseries President and Treasurer}\\[10pt]
\textit{\bfseries Operations Department Intern}\\[10pt]
\textit{\bfseries Marketing Manager}
\end{document}
```

このバグは
[Type1 URW fonts with Cyrillics](http://freshmeat.net/projects/urw-fonts-cyrillic)
で配布されている最新のものでは修正されていますので，キリル文字が必要ならこれをダウンロードしてください。
TeX から使うだけなら，キリル文字を含まない従来のもののほうがとりあえずは安心のようです。
