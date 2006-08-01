---
title: "hyperref"
url: "/hyperref/"
date: 2006-08-01T20:50:29Z
pukiwiki: "hyperref"
---

# hyperref

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
<tr><td>bookmarksnumbered</td><td>put section numbers in bookmarks</td><td>true/<strong>false</strong></td></tr>
<tr><td>bookmarksopen</td><td>open up bookmark tree</td><td>true/<strong>false</strong></td></tr>
<tr><td>bookmarksopenlevel</td><td>level to which bookmarks are open</td><td><strong>\maxdimen</strong></td></tr>
<tr><td>bookmarkstype</td><td>to specify which `toc' file to mimic</td><td><strong>toc</strong></td></tr>
<tr><td>breaklinks</td><td>allow links to break over lines</td><td>true/<strong>false</strong></td></tr>
<tr><td>citebordercolor</td><td>color of border around cites</td><td><strong>0 1 0</strong></td></tr>
<tr><td>citecolor</td><td>color of citation links</td><td><strong>green</strong></td></tr>
<tr><td>colorlinks</td><td>color links</td><td>true/<strong>false</strong>/true ただし、tex4htとdviwindoのデフォルトはtrue</td></tr>
<tr><td>debug</td><td>provide details of anchors defined</td><td>true/<strong>false</strong></td></tr>
<tr><td>draft</td><td>do not do any hyper linking</td><td>true/<strong>false</strong></td></tr>
<tr><td>dvipdf</td><td>use dvipdf backend</td><td style="text-align:center"> -</td></tr>
<tr><td>dvipdfm</td><td>use dvipdfm backend</td><td style="text-align:center"> -</td></tr>
<tr><td>dvips</td><td>use dvips backend</td><td style="text-align:center"> -</td></tr>
<tr><td>dvipsone</td><td>use dvipsone backend</td><td style="text-align:center"> -</td></tr>
<tr><td>dviwindo</td><td>use dviwindo backend</td><td style="text-align:center"> -</td></tr>
<tr><td>executivepaper</td><td>use executivepaper</td><td style="text-align:center"> -</td></tr>
<tr><td>extension</td><td>suffix of linked files</td><td><strong>dvi</strong></td></tr>
<tr><td>filebordercolor</td><td>color of border around file links</td><td><strong>0 .5 .5</strong></td></tr>
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
<tr><td>linkbordercolor</td><td>color of border around links</td><td><strong>1 0 0</strong></td></tr>
<tr><td>linkcolor</td><td>color of links</td><td><strong>red</strong></td></tr>
<tr><td>linktocpage</td><td>make page number, not text, be link on TOC, LOF and LOT</td><td>true/<strong>false</strong></td></tr>
<tr><td>menubordercolor</td><td>color of border around menu links</td><td><strong>1 0 0</strong></td></tr>
<tr><td>menucolor</td><td>color for menu links</td><td><strong>red</strong></td></tr>
<tr><td>naturalnames</td><td>use LATEX-computed names for links</td><td>true/<strong>false</strong></td></tr>
<tr><td>nesting</td><td>allow nesting of links</td><td>true/<strong>false</strong></td></tr>
<tr><td>pageanchor</td><td>put an anchor on every page</td><td><strong>true</strong>/false</td></tr>
<tr><td>pagebackref</td><td>backreference by page number</td><td>true/<strong>false</strong></td></tr>
<tr><td>pagebordercolor</td><td>color of border around page links</td><td><strong>1 1 0</strong></td></tr>
<tr><td>pagecolor</td><td>color of page links</td><td><strong>red</strong></td></tr>
<tr><td>pdfauthor</td><td>text for PDF Author field</td><td>空</td></tr>
<tr><td>pdfborder</td><td>width of PDF link border</td><td>0 0 1 ただし、colorlinksのデフォルトは 0 0 0</td></tr>
<tr><td>pdfcenterwindow</td><td>position the document window center of the screen</td><td>true/<strong>false</strong></td></tr>
<tr><td>pdfcreator</td><td>text for PDF Creator field</td><td><strong>LaTeX with hyperref package</strong></td></tr>
<tr><td>pdffitwindow</td><td>resize document window to fit document size</td><td>true/<strong>false</strong></td></tr>
<tr><td>pdfhighlight</td><td>set highlighting of PDF links</td><td><strong>/I</strong></td></tr>
<tr><td>pdfkeywords</td><td>text for PDF Keywords field</td><td>空</td></tr>
<tr><td>pdfmenubar</td><td>make PDF viewer's menu bar visible</td><td><strong>true</strong>/false</td></tr>
<tr><td>pdfnewwindow</td><td>make links that open another PDF file start a new window</td><td>true/<strong>false</strong></td></tr>
<tr><td>pdfpagelayout</td><td>set layout of PDF pages</td><td>空</td></tr>
<tr><td>pdfpagemode</td><td>set default mode of PDF display</td><td>空</td></tr>
<tr><td>pdfpagelabels</td><td>set PDF page labels</td><td>true/<strong>false</strong></td></tr>
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
<tr><td>plainpages</td><td>do page number anchors as plain arabic</td><td><strong>true</strong>/false</td></tr>
<tr><td>ps2pdf</td><td>use ps2pdf backend</td><td style="text-align:center"> -</td></tr>
<tr><td>raiselinks</td><td>raise up links (for HyperTeX backend)</td><td>true/<strong>false</strong></td></tr>
<tr><td>runbordercolor</td><td>color of border around `run' links</td><td><strong>0 .7 .7</strong></td></tr>
<tr><td>setpagesize</td><td>set page size by special driver commands</td><td><strong>true</strong>/false</td></tr>
<tr><td>tex4ht</td><td>use TEX4ht backend</td><td style="text-align:center"> -</td></tr>
<tr><td>textures</td><td>use Textures backend</td><td style="text-align:center"> -</td></tr>
<tr><td>unicode</td><td>Unicode encoded pdf strings</td><td></td></tr>
<tr><td>urlbordercolor</td><td>color of border around URL links</td><td><strong>0 1 1</strong></td></tr>
<tr><td>urlcolor</td><td>color of URL links</td><td><strong>magenta</strong></td></tr>
<tr><td>verbose</td><td>be chatty</td><td>true/<strong>false</strong></td></tr>
<tr><td>vtex</td><td>use VTEX backend</td><td style="text-align:center"> -</td></tr>
<tr><td>plainpages</td><td>true/false</td><td>true/<strong>false</strong></td></tr>
<tr><td>pdfpagelabels</td><td> </td><td><strong>true</strong>/false</td></tr>
<tr><td>pdfescapeform</td><td> </td><td> </td></tr>
<tr><td>pdfborderstyle</td><td> </td><td>/S/U</td></tr>
</tbody>
</table>

***
