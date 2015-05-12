---
title: "MiKTeX"
url: "/MiKTeX/"
date: 2012-04-13T02:05:44Z
pukiwiki: "MiKTeX"
---

# MiKTeX

[Microsoft Windows](</Microsoft Windows/>) > MiKTeX

## [MiKTeX](http://miktex.org/) {#n766a2b6}

MiKTeX は Microsoft Windwos 向けの TeX のディストリビューションです．
TeX Live と並んで国際的に広く使われていますが，日本語 pTeX が含まれていません．
特別な理由がない限り [TeX Live](</TeX Live/>) または [W32TeX](/W32TeX/) の利用をおすすめします．

- [MiKTeX Project Page](http://miktex.org/)
    - [MiKTeX Blog - All about MiKTeX development and packaging.](http://blog.miktex.org/)
- [http://sourceforge.net/projects/miktex/](http://sourceforge.net/projects/miktex/)

***

***

### インストール {#c18f5cec}

I accept the MiKTeX copying conditions.
をチェックして［次へ］をクリックします．
しばらく待つとインストール完了です．

### 注意事項 {#e87c6af7}

MiKTeX にも platex.exe がありますが，日本語 pLaTeX ではありません．
日本語を使う場合は [pdfLaTeX](/pdfTeX/),
[LuaLaTeX](/LuaTeX/), [XeLaTeX](/XeTeX/) を使用してください．

```
>platex.exe
This is pdfTeX, Version 3.14159265-2.3-1.40.12
**
```

また MiKTeX には pdfplatex.exe がありますが，こちらも
W32TeX の pdfplatex.bat とは異なるので注意が必要です．

```
>pdfplatex.exe
This is pdfTeX, Version 3.14159265-2.3-1.40.12
**
```

MiKTeX の dvipdfmx は pTeX で処理された日本語の
DVI ファイルで使用するとエラーが発生します．

```
** ERROR ** Unable to find TFM file "min10".

Output file removed.
```

MiKTeX の dvips は pTeX で処理された日本語の
DVI ファイルで使用するとエラーが発生します．

```
dvips: Font min10 not found; characters will be left blank.
dvips: Can't open font metric file min10.tfm
dvips: I will use cmr10.tfm instead, so expect bad output.
dvips: ! invalid char 9578 from font min10
```

MiKTeX には [Ghostscript](/Ghostscript/) が含まれていますが日本語がうまく扱えないようです．

### 関連リンク {#x1081277}

- [「はじめてのLaTeX」著者サポート：MiKTeX2.9のインストール](http://supportdoc.net/support-latex/newmik.html)
- [「はじめてのLaTeX」: MiKTeXでXeTeXで日本語を](http://supportdoc.net/support-latex/xetex.html)
- [TeXworksでMiKTeXを使う](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=905)
- [TexnicCenter2.0の日本語使用について](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=794)

#### ChangeLog {#o3eda5f2}

- [http://sourceforge.net/p/miktex/code/HEAD/log/](http://sourceforge.net/p/miktex/code/HEAD/log/)

#### ミラーサイト {#xfbee989}

- [http://ring.maffin.ad.jp/pub/text/CTAN/systems/win32/miktex/](http://ring.maffin.ad.jp/pub/text/CTAN/systems/win32/miktex/)
- [http://ftp.jaist.ac.jp/pub/CTAN/systems/win32/miktex/](http://ftp.jaist.ac.jp/pub/CTAN/systems/win32/miktex/)

#### 派生版 {#v2c807b8}

- [proTeXt](http://www.tug.org/protext/)
