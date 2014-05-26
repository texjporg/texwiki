---
title: "MiKTeX"
url: "/MiKTeX/"
date: 2012-04-13T02:05:44Z
pukiwiki: "MiKTeX"
---

# MiKTeX

[Microsoft Windows](</Microsoft Windows/>) > MiKTeX

## [MiKTeX](http://miktex.org/) {#n766a2b6}

<img src="http://upload.wikimedia.org/wikipedia/de/thumb/b/b7/Logo_MiKTeX.svg/500px-Logo_MiKTeX.svg.png" alt="MiKTeX" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## MiKTeX とは {#b83589db}

MiKTeX は TeX のディストリビューションです．<br>

- [MiKTeX Project Page](http://miktex.org/)
    - [MiKTeX Blog - All about MiKTeX development and packaging.](http://blog.miktex.org/)
- [http://sourceforge.net/projects/miktex/](http://sourceforge.net/projects/miktex/)

### 動作環境 {#s7a44d8b}

Windows

### ChangeLog {#o3eda5f2}

- [http://sourceforge.net/p/miktex/code/HEAD/log/](http://sourceforge.net/p/miktex/code/HEAD/log/)

### ミラーサイト {#xfbee989}

- [http://ring.maffin.ad.jp/pub/text/CTAN/systems/win32/miktex/](http://ring.maffin.ad.jp/pub/text/CTAN/systems/win32/miktex/)
- [http://ftp.jaist.ac.jp/pub/CTAN/systems/win32/miktex/](http://ftp.jaist.ac.jp/pub/CTAN/systems/win32/miktex/)

### 派生版 {#v2c807b8}

- [proTeXt](http://www.tug.org/protext/)

## インストール {#c18f5cec}

☐ I accept the MiKTeX copying conditions. をチェックして \[次へ\] をクリックします．<br>

***

Basic MiKTeX 2.9.5105 Installer (64-bit)<br>
　　<strong>Copying Conditions</strong><br>
　　　　 MiKTeX is freely redistributable under certain conditions.<br>

<br>

```
Redistributing MiKTeX
     _________________________________________________________________

COPYING CONDITIONS FOR MiKTeX

   To the best of our knowledge, all software in this distribution is
   freely redistributable (libre, that is, not necessarily gratis),
   within the Free Software Foundation's definition and Debian Free
   Software Guidelines. If you find any non-free files included, please
   contact us (references given below).

   That said, MiKTeX has neither a single copyright holder nor a single
   license covering its entire contents, since it is a collection of many
   disparate packages. Therefore, you may copy, modify, and/or
   redistribute software from MiKTeX only if you comply with the
   requirements placed thereon by the owners of the respective packages.

   To most easily learn these requirements, we suggest checking the TeX
   Catalogue at:
   http://www.ctan.org/tex-archive/help/Catalogue/catalogue.html (or any
   CTAN mirror). The Catalogue is also included in MiKTeX in
   ./texmf/doc/html/catalogue/, but the online version will have updates.
   Of course the legal statements within the packages themselves are the
   final authority.

GUIDELINES FOR REDISTRIBUTION

   In general, you may redistribute MiKTeX, with or without modification,
   for profit or not, according to the usual free software tenets. Here
   are some general guidelines for doing this:
     * If you make any changes to the MiKTeX distribution or any package
       it contains, besides complying with any licensing requirements,
       you must prominently mention such changes in your modified
       distribution so that users do not take your work for ours, and
       know to contact you, not us, in case of questions or problems. A
       new top-level README.yourwork file is a good place to describe the
       general situation.
     * Especially (but not necessarily) if changes or additions are made,
       we recommend a clearly different title, such as "Your work, based
       on MiKTeX x.y.zzzz (with updates)", where x.y.zzzz is the version
       of MiKTeX you are publishing. This credits both our work and
       yours.
     * You absolutely may not place your own copyright on the entire
       distribution, since it is not your work (as stated above, MiKTeX
       is not created by any single person or entity). Statements such as
       "all rights reserved" and "may not be reproduced" are especially
       reprehensible, since they are antithetical to the free software
       principles under which MiKTeX is produced.
     * You may use any cover or media label designs that you wish. Such
       packaging and marketing details are not covered by any MiKTeX
       license.
     * Finally, we make the following requests (not legal requirements):
         a. Acknowledging that MiKTeX is developed as a joint effort by
            all TeX user groups, and encouraging the user/reader to join
            their user group of choice.
            The web page http://www.tug.org/usergroups.html may be
            referenced as a list of TeX user groups. We also appreciate
            your explicitly listing all the user groups as given on that
            page, space permitting.
         b. Referencing the MiKTeX home page: http://www.miktex.org/.
       Such credits may be placed on the label of your media, your cover,
       and/or in accompanying text (for instance, in the acknowledgements
       section of a book).

   Finally, although it is certainly not a requirement, we'd like to
   invite any redistributors to make a donation to the project, whether
   cash or in-kind, for example via http://www.miktex.org/giveback.
   Thanks.

   If you have any questions or comments, please contact us. In general,
   we appreciate being given the chance to review any MiKTeX-related
   material in advance of publication, simply to avoid mistakes. It is
   much better to correct text on a CD label or in a book before
   thousands of copies are made!

   We are also happy to keep anyone planning a publication informed as to
   our deadlines and progress. Just let us know. However, you should be
   aware that MiKTeX is produced entirely by volunteers, and no dates can
   be guaranteed.

REFERENCES

   MiKTeX project page: http://www.miktex.org/

   The FSF's free software definition:
   http://www.gnu.org/philosophy/free-sw.html

   Debian Free Software Guidelines: http://www.debian.org/intro/free

   FSF commentary on existing licenses:
   http://www.gnu.org/licenses/license-list.html

   LPPL: http://www.latex-project.org/lppl.txt
```

　☑ I accept the MiKTeX copying conditions.<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\[　&lt; 戻る(B)　\] \[　次へ(N) >　\]　　\[　キャンセル　\]<br>

***

## 注意事項 {#e87c6af7}

MiKTeX にも platex.exe がありますが，日本語 pLaTeX ではありません．<br>
日本語を使う場合は [pdfLaTeX](/pdfTeX/), [LuaLaTeX](/LuaTeX/), [XeLaTeX](/XeTeX/) を使用してください．<br>

```
>platex.exe
This is pdfTeX, Version 3.14159265-2.3-1.40.12
**
```

また MiKTeX には pdfplatex.exe がありますが，こちらも W32TeX の pdfplatex.bat とは異なるので注意が必要です．

```
>pdfplatex.exe
This is pdfTeX, Version 3.14159265-2.3-1.40.12
**
```

MiKTeX の dvipdfmx は pTeX で処理された日本語の DVI ファイルで使用するとエラーが発生します．<br>

```
** ERROR ** Unable to find TFM file "min10".

Output file removed.
```

MiKTeX の dvips は pTeX で処理された日本語の DVI ファイルで使用するとエラーが発生します．<br>

```
dvips: Font min10 not found; characters will be left blank.
dvips: Can't open font metric file min10.tfm
dvips: I will use cmr10.tfm instead, so expect bad output.
dvips: ! invalid char 9578 from font min10
```

MiKTeX には [Ghostscript](/Ghostscript/) が含まれていますが日本語がうまく扱えないようです．<br>

## 関連リンク {#x1081277}

- [「はじめてのLaTeX」著者サポート：MiKTeX2.9のインストール](http://supportdoc.net/support-latex/newmik.html)
- [「はじめてのLaTeX」: MiKTeXでXeTeXで日本語を](http://supportdoc.net/support-latex/xetex.html)
- [TeXworksでMiKTeXを使う](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=905)
- [TexnicCenter2.0の日本語使用について](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=794)
