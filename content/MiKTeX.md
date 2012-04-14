---
title: "MiKTeX"
url: "/MiKTeX/"
date: 2012-04-13T02:05:44Z
pukiwiki: "MiKTeX"
---

# MiKTeX

## [MiKTeX](http://miktex.org/) {#n766a2b6}

- [MiKTeX Project Page](http://miktex.org/)
    - [MiKTeX Blog - All about MiKTeX development and packaging.](http://blog.miktex.org/)

### 注意事項 {#e87c6af7}

MiKTeX にも platex.exe がありますが，日本語 pTeX ではないので日本語を使う場合は [XeTeX](/XeTeX/) や [LuaTeX](/LuaTeX/) をおすすめします．

```
>platex.exe
This is pdfTeX, Version 3.1415926-2.3-1.40.12
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
