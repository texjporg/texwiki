---
title: "hyperref"
url: "/hyperref/"
date: 2006-08-01T20:50:29Z
pukiwiki: "hyperref"
---

# hyperref

目次

## hyperref {#s8bca501}

hyperref パッケージは、TeX 文書（DVI、PDF など）にHTMLと同じハイパーリンク 機能を加えるためのマクロです。

### 指定可能なオプション {#za8c61cb}

プリアンプルに\usepackage\[オプション\]{hyperref}として、オプションを指定する。例えば、下記のようにする

```
\usepackage[dvipdfm,bookmarks=true,bookmarksnumbered=true,%
 pdftitle={LaTeX研修課程},%
 pdfsubject={hyperref入門・演習},%
 pdfauthor={ななしのごんべぇ},%
 pdfkeywords={TeX; dvipdfmx; hyperref; color;},%
 colorlinks=true]{hyperref}
```

または、

```
\hypersetup{オプション}
```

とすることも可能。

<table>
<thead>
<tr><th>オプション</th><th>意味</th><th>指定値(太字はデフォルト)</th></tr>
</thead>
<tbody>
<tr><td>a4paper</td><td>use A4 paper</td><td style="text-align:center"> -</td></tr>
<tr><td>a5paper</td><td>use A5 paper</td><td style="text-align:center"> -</td></tr>
<tr><td>anchorcolor</td><td>set color of anchors</td><td><strong>black</strong></td></tr>
<tr><td>b5paper</td><td>use B5 paper</td><td style="text-align:center"> -</td></tr>
<tr><td>backref</td><td>do bibliographical back references</td><td>true/<strong>false</strong></td></tr>
<tr><td>baseurl</td><td>set base URL for document</td><td>空</td></tr>
<tr><td>bookmarks</td><td>make bookmarks</td><td><strong>true</strong>/false</td></tr>
<tr><td>bookmarksdepth</td><td>しおりのレベル</td><td>数値または名前（sectionやsubsectionなど）を指定する。何も指定しなければtocdepthの値が使われる。</td></tr>
<tr><td>bookmarksnumbered</td><td>put section numbers in bookmarks</td><td>true/<strong>false</strong></td></tr>
<tr><td>bookmarksopen</td><td>open up bookmark tree</td><td>true/<strong>false</strong></td></tr>
<tr><td>bookmarksopenlevel</td><td>level to which bookmarks are open</td><td><strong>\maxdimen</strong></td></tr>
<tr><td>bookmarkstype</td><td>to specify which `toc' file to mimic</td><td><strong>toc</strong></td></tr>
<tr><td>breaklinks</td><td>allow links to break over lines</td><td>true/<strong>false</strong></td></tr>
<tr><td>citebordercolor</td><td>color of border around cites</td><td>RGB値 <strong>0 1 0</strong></td></tr>
<tr><td>citecolor</td><td>color of citation links</td><td><strong>green</strong></td></tr>
<tr><td>colorlinks</td><td>color links</td><td>true/<strong>false</strong> ただし、tex4htまたはdviwindoを指定した際のデフォルトはtrue</td></tr>
<tr><td>debug</td><td>provide details of anchors defined</td><td>true/<strong>false</strong></td></tr>
<tr><td>draft</td><td>do not do any hyper linking</td><td>true/<strong>false</strong></td></tr>
<tr><td>dvipdf</td><td>use dvipdf backend</td><td style="text-align:center"> -</td></tr>
<tr><td>dvipdfm</td><td>use dvipdfm backend</td><td style="text-align:center"> -</td></tr>
<tr><td>dvips</td><td>use dvips backend</td><td style="text-align:center"> -</td></tr>
<tr><td>dvipsone</td><td>use dvipsone backend</td><td style="text-align:center"> -</td></tr>
<tr><td>dviwindo</td><td>use dviwindo backend</td><td style="text-align:center"> -</td></tr>
<tr><td>executivepaper</td><td>use executivepaper</td><td style="text-align:center"> -</td></tr>
<tr><td>extension</td><td>suffix of linked files</td><td><strong>dvi</strong></td></tr>
<tr><td>filebordercolor</td><td>color of border around file links</td><td>RGB値 <strong>0 .5 .5</strong></td></tr>
<tr><td>filecolor</td><td>color of file links</td><td><strong>cyan</strong></td></tr>
<tr><td>frenchlinks</td><td>use small caps instead of color for links</td><td>true/<strong>false</strong></td></tr>
<tr><td>hyperfigures</td><td>make figures hyper links</td><td>true/<strong>false</strong></td></tr>
<tr><td>hyperindex</td><td>set up hyperlinked indices</td><td><strong>true</strong>/false</td></tr>
<tr><td>hypertex</td><td>use HyperTeX backend</td><td style="text-align:center"> -</td></tr>
<tr><td>hypertexnames</td><td>use guessable names for links</td><td><strong>true</strong>/false</td></tr>
<tr><td>implicit</td><td>redefine LATEX internals</td><td><strong>true</strong>/false</td></tr>
<tr><td>latex2html</td><td>use LATEX2HTML backend</td><td style="text-align:center"> -</td></tr>
<tr><td>legalpaper</td><td>use legalpaper</td><td style="text-align:center"> -</td></tr>
<tr><td>letterpaper</td><td>use letterpaper</td><td style="text-align:center"> -</td></tr>
<tr><td>linkbordercolor</td><td>color of border around links</td><td>RGB値 <strong>1 0 0</strong></td></tr>
<tr><td>linkcolor</td><td>color of links</td><td><strong>red</strong></td></tr>
<tr><td>linktocpage</td><td>make page number, not text, be link on TOC, LOF and LOT</td><td>true/<strong>false</strong></td></tr>
<tr><td>menubordercolor</td><td>color of border around menu links</td><td>RGB値 <strong>1 0 0</strong></td></tr>
<tr><td>menucolor</td><td>color for menu links</td><td><strong>red</strong></td></tr>
<tr><td>naturalnames</td><td>use LATEX-computed names for links</td><td>true/<strong>false</strong></td></tr>
<tr><td>nesting</td><td>allow nesting of links</td><td>true/<strong>false</strong></td></tr>
<tr><td>pageanchor</td><td>put an anchor on every page</td><td><strong>true</strong>/false</td></tr>
<tr><td>pagebackref</td><td>backreference by page number</td><td>true/<strong>false</strong></td></tr>
<tr><td>pagebordercolor</td><td>color of border around page links</td><td>RGB値 <strong>1 1 0</strong></td></tr>
<tr><td>pagecolor</td><td>color of page links</td><td><strong>red</strong></td></tr>
<tr><td>pdfauthor</td><td>text for PDF Author field</td><td>空</td></tr>
<tr><td>pdfborder</td><td>width of PDF link border</td><td>0 0 1 ただし、colorlinksのデフォルトは 0 0 0</td></tr>
<tr><td>pdfcenterwindow</td><td>position the document window center of the screen</td><td>true/<strong>false</strong></td></tr>
<tr><td>pdfcreator</td><td>text for PDF Creator field</td><td><strong>LaTeX with hyperref package</strong></td></tr>
<tr><td>pdffitwindow</td><td>resize document window to fit document size</td><td>true/<strong>false</strong></td></tr>
<tr><td>pdfhighlight</td><td>set highlighting of PDF links</td><td><strong>/I</strong> /N /O /P</td></tr>
<tr><td>pdfkeywords</td><td>text for PDF Keywords field</td><td>空</td></tr>
<tr><td>pdfmenubar</td><td>make PDF viewer's menu bar visible</td><td><strong>true</strong>/false</td></tr>
<tr><td>pdfnewwindow</td><td>make links that open another PDF file start a new window</td><td>true/<strong>false</strong></td></tr>
<tr><td>pdfpagelayout</td><td>set layout of PDF pages</td><td>空</td></tr>
<tr><td>pdfpagemode</td><td>set default mode of PDF display</td><td>UseThumbs UseOulines FullScreen</td></tr>
<tr><td>pdfpagelabels</td><td>set PDF page labels</td><td><strong>true</strong>/false <span class="footnote">(6.75aからデフォルトがtrueに変更された)</span></td></tr>
<tr><td>pdfpagescrop</td><td>set crop size of PDF document</td><td>空</td></tr>
<tr><td>pdfpagetransition</td><td>set PDF page transition style</td><td>空</td></tr>
<tr><td>pdfproducer</td><td>text for PDF Producer field</td><td>空</td></tr>
<tr><td>pdfstartpage</td><td>page at which PDF document opens</td><td><strong>1</strong></td></tr>
<tr><td>pdfstartview</td><td>starting view of PDF document</td><td><strong>/Fit</strong></td></tr>
<tr><td>pdfsubject</td><td>text for PDF Subject field</td><td>空</td></tr>
<tr><td>pdftex</td><td>use pdfTEX backend</td><td style="text-align:center"> -</td></tr>
<tr><td>pdftitle</td><td>text for PDF Title field</td><td>空</td></tr>
<tr><td>pdftoolbar</td><td>make PDF toolbar visible</td><td><strong>true</strong>/false</td></tr>
<tr><td>pdfview</td><td>PDF `view' when on link traversal</td><td>空</td></tr>
<tr><td>pdfwindowui</td><td>make PDF user interface elements visible</td><td><strong>true</strong>/false</td></tr>
<tr><td>plainpages</td><td>do page number anchors as plain arabic</td><td>true/<strong>false</strong> <span class="footnote">(6.75aからデフォルトがfalseに変更された)</span></td></tr>
<tr><td>ps2pdf</td><td>use ps2pdf backend</td><td style="text-align:center"> -</td></tr>
<tr><td>raiselinks</td><td>raise up links (for HyperTeX backend)</td><td>true/<strong>false</strong></td></tr>
<tr><td>runbordercolor</td><td>color of border around `run' links</td><td>RGB値 <strong>0 .7 .7</strong></td></tr>
<tr><td>setpagesize</td><td>set page size by special driver commands</td><td><strong>true</strong>/false</td></tr>
<tr><td>tex4ht</td><td>use TEX4ht backend</td><td style="text-align:center"> -</td></tr>
<tr><td>textures</td><td>use Textures backend</td><td style="text-align:center"> -</td></tr>
<tr><td>unicode</td><td>Unicode encoded pdf strings</td><td></td></tr>
<tr><td>urlbordercolor</td><td>color of border around URL links</td><td>RGB値 <strong>0 1 1</strong></td></tr>
<tr><td>urlcolor</td><td>color of URL links</td><td><strong>magenta</strong></td></tr>
<tr><td>verbose</td><td>be chatty</td><td>true/<strong>false</strong></td></tr>
<tr><td>vtex</td><td>use VTEX backend</td><td style="text-align:center"> -</td></tr>
<tr><td>pdfescapeform</td><td>エスケープ処理の有効化</td><td>true/<strong>false</strong></td></tr>
<tr><td>pdfborderstyle</td><td> </td><td>/S/U</td></tr>
</tbody>
</table>

### 提供されるコマンド {#dd6f0c82}

hyperref.styを読み込むことによって下記のコマンドが使用可能。

| コマンド | 説明 |
|---|---|
| \href{URL}{text} | テキストにハイパーリンクを付加する |
| \hyperbaseurl{URL} |   |
| \hyperimage{image URL} |   |
| \hyperdef{category}{name}text  |   |
| \hyperref{URL}{category}{name}{text} |   |
| \hyperlink{name}{text} |   |
| \hypertarget{name}{text} |   |

### url/nolinkurl {#h026c44c}

url及びnolinkurl とは hyperref.styを読み込むことによって使用可能なコマンドの一つ

- url文字列を指定フォントへ変更する
- 改行処理が必要な場合にurl文字列を上手に途中で分割する

#### pdfファイル作成 {#ib05c931}

タイプセットでpdfファイルを作成し，
Adobe Reader で開くと（その御節介機能により），
url文字列にはhyper link機能が付与されます．（下記例ではnolinkurとtextttの両方に）

```
\documentclass{book}
\usepackage[dvipdfm,
 bookmarkstype=toc=true,
 linktocpage=true,
 bookmarks=true
 ]{hyperref}
\begin{document}
\tableofcontents
 \chapter{Test}
 \nolinkurl{http://www.apple.com}  \\
 \texttt{http://www.apple.com}
\end{document}
```

### Adobe Readerを操作するボタン {#bfd00112}

```
\Acrobatmenu{menuoption}{text}
```

pdf文書の中に「次のページへ」や「先頭のページへ」などリンクを埋め込むことができる。

### 他のパッケージとの互換性 {#z442922c}

他のパッケージとhyperrefを同時使用する際には、ちょっとした工夫が必要だったり、読み込む順番に気をつけなればならないものもある。

#### algorithm {#o8dbc2be}

```
  \usepackage{hyperref}
  \usepackage[chapter]{algorithm}% eg.

```

#### amsmath {#se667310}

The environments equation and eqnarray are not supported too well.
For example, there can be spacing problems. Consider using the
environments that package amsmath provide, e.g. gather for equation.
The environment equation can even redefined to use gather:

```

  \usepackage{amsmath}
  \let\equation\gather
  \let\endequation\endgather

```

#### arydshln, longtable {#sf5e3f3f}

Package longtable must be put before hyperref and arydshln,
hyperref after arydshln generates an error, thus the
resulting package order is then:

```

  \usepackage{longtable}
  \usepacakge{hyperref}
  \usepackage{arydshln}

```

#### babel/magyar.ldf {#v90c07e3}

Unsupported.

magyar.ldf's redefinitions of many LaTeX internals conflict
with hyperref's redefinitions of these commands.

```

```

#### bibentry {#zc121442}

Workaround:

```

  \makeatletter
  \let\saved@bibitem\@bibitem
  \let\saved@lbibitem\@lbibitem 
  \makeatother

  \usepackage{bibentry}
  \usepackage{hyperref}

  \begin{document}

  \begingroup
    \makeatletter
    \let\@bibitem\saved@bibitem
    \let\@lbibitem\saved@lbibitem
    \nobibliography{database}
  \endgroup
```

<!-- alpha.bst あたりを使用した場合には，\@lbibitem について \@bibitem と -->
<!-- 同様の衝突回避措置が必要．なお，natbib パッケージを併用しても構わない -->
<!-- 場合には，natbib パッケージを用いてもよい． -->

```

```

#### cite {#x27bc69f}

This is from Mike Shell:

> cite.sty cannot currently be used with hyperref.

> However, I can do a workaround via:

> \makeatletter

> \def\NAT@parse{\typeout{This is a fake Natbib command to fool Hyperref.}}

> \makeatother

> \usepackage\[hypertex\]{hyperref}

> so that hyperref will not redefine any of the biblabel stuff - so cite.sty

> will work as normal - although the citations will not be hyperlinked, of

> course (But this may not be an issue for many people).

#### dblaccnt {#h7b3c5f5}

pd1enc.def or puenc.def should be loaded before:

```
  \usepackage{hyperref}
  \usepackage{dblaccnt}
```

or see entry for "vietnam".

```

```

#### easyeqn {#s2f4cce7}

Not compatible, breaks.

```

```

#### ellipsis {#p3f61fda}

This packages redefines \textellipsis, thus it has to be loaded
after package hyperref (pd1enc.def/puenc.def should be loaded before):

```
  \usepackage{hyperref}
  \usepackage{ellipsis}

```

#### float {#p0427388}

```
  \usepackage{float}
  \usepackage{hyperref}

```

- Several \caption commands are not supported inside one float object.
- Anchor are set at top of the float object, if its style is controlled by float.sty.

    ```

    ```

#### footnote {#f2570f39}

This package is not supported, you have to disable hyperref's footnote
support by using option "hyperfootnotes=false".

```

```

#### IEEEtran.cls {#w0526a31}

```
  version >= V1.6b (because of \@makecaption, see ChangeLog)

```

#### index {#i8981e97}

```
  version >= 1995/09/28 v4.1 (because of \addcontentsline redefinition)

```

#### lastpage {#d840dc39}

Compatible.

```

```

#### linguex {#o8f74e36}

```
  \usepackage{hyperref}
  \usepackage{linguex}

```

#### ltabptch {#u5dadd27}

```
  \usepackage{longtable}
  \usepackage{ltabptch}
  \usepackage{hyperref}

```

#### minitoc-hyper {#v6aa949d}

This package is obsolete, use the uptodate original
package minitoc instead.

```

```

#### multind {#s3bce4df}

```
  \usepackage{multind}
  \usepackage{hyperref}

```

#### natbib {#i112ee0c}

```
  \usepackage{natbib}
  \usepackage{hyperref}

```

#### nomencl {#s2a437f3}

Example for introducing links for the page numbers:

```
\renewcommand*{\pagedeclaration}[1]{\unskip, \hyperpage{#1}}

```

#### prettyref {#n537f78a}

```
%%% example for prettyref %%%
\documentclass{article}
\usepackage{prettyref}
\usepackage[pdftex]{hyperref}

%\newrefformat{FIG}{Figure~\ref{#1}}% without hyperref
\newrefformat{FIG}{\hyperref[{#1}]{Figure~\ref*{#1}}}

\begin{document}
  This is a reference to \prettyref{FIG:ONE}.
  \newpage
  \begin{figure}
    \caption{This is my figure}
    \label{FIG:ONE}
  \end{figure}
\end{document}
%%% example for prettyref %%%

```

#### ntheorem {#dc514872}

ntheorem-hyper.sty is an old patched version of ntheorem.sty.
Newer versions of ntheorem know the option hyperref:

```
    \usepackage{hyperref}
    \usepackage[hyperref]{ntheorem}
```

But there are still unsolved problems (options thref, ...).

```

```

#### setspace {#n2cbb7c1}

```
  \usepackage{setspace}
  \usepackage{hyperref}

```

#### sidecap {#l728be5c}

Before 2002/05/24 v1.5h:

```
    \usepackage{nameref}
    \usepackage{hyperref}
    \usepackage{sidecap}

```

#### subfigure {#pc68b165}

1995/03/06 v2.0:

```
    \usepackage{subfigure}
    \usepackage{hyperref}
    % hypertexnames is set to false.
```

v2.1:

```
    \usepackage{nameref}
    \usepackage{subfigure}
    \usepackage{hyperref}
```

or

```
    \usepackage{hyperref}
    \usepackage{subfigure}
```

v2.1.2: 
please update

v2.1.3:

```
    \usepackage{hyperref}
    \usepackage{subfigure}
    or vice versa?

```

#### titleref {#i6c782d6}

```
  \usepackage{nameref}
  \usepackage{titleref}% without usetoc
  \usepackage{hyperref}

```

#### titlesec {#yf2b34b9}

"nameref" supports titlesec, but hyperref does not
(unsolved is the anchor setting, missing with unnumbered
section, perhaps problems with page breaks with numbered ones).

```

```

#### varioref {#s5f6c173}

```
  \usepackage{nameref}
  \usepackage{varioref}
  \usepackage{hyperref}
```

Some babel versions (eg. 2005/05/21 v3.8g) contain a patch for
varioref that breaks the hyperref support for varioref.
Thus with babel v3.8g varioref cannot be used with hyperref.

```

```

#### verse {#p86d2aed}

Version 2005/08/22 v2.22 contains support for hyperref.

```

```

For older versions see example from 
de.comp.text.tex (2005/08/11, slightly modified):

```

  \documentclass{article}

  % package order does not matter
  \usepackage{verse}
  \usepackage{hyperref}

  \makeatletter
  % make unique poemline anchors
  \newcounter{verse@env}
  \setcounter{verse@env}{0}
  \let\org@verse\verse
  \def\verse{%
    \stepcounter{verse@env}%
    \org@verse
  }
  \def\theHpoemline{\arabic{verse@env}.\thepoemline}

  % add anchor for before \addcontentsline in \@vsptitle
  \let\org@vsptitle\@vsptitle
  \def\@vsptitle{%
    \phantomsection
    \org@vsptitle
  }
  \makeatother

  \begin{document}

  \poemtitle{Poem 1}
  \begin{verse}
  An one-liner.
  \end{verse}

  \newpage

  \poemtitle{Poem 2}
  \begin{verse}
  Another one-liner.
  \end{verse}

  \end{document}

```

#### vietnam {#o7d0377c}

```
  % pd1enc.def should be loaded before package dblaccnt:
  \usepackage[PD1,OT1]{fontenc}
  \usepackage{vietnam}
  \usepackage{hyperref}
```

### 他のパッケージとの重複関係 {#ca4547b3}

#### urlパッケージ {#u1bf19c1}

hyperrefパッケージと同じ(?) \urlコマンドを提供する．

#### beamerクラス {#z7cec6eb}

hyperrefパッケージをデフォルトで読み込む．

***

- \usepackage\[dvipdfm,bookmarkstype=toc=true,colorlinks=true,urlcolor=black,linkcolor=black,citecolor=black,linktocpage=true,bookmarks=false\]{hyperref} -- kd 2007-03-20 (火) 15:21:01
- 修士論文のpdf作成等の際には，ぜひともhyperrefをご利用してpdfファイルを作って下さい．（例えば上記例をプリアンブル部に書けばよいと思います．目次から本文のページ等へジャンプ可能だと読み手が楽です．） -- kd 2007-03-20 (火) 15:27:11
