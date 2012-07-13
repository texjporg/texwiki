---
title: "Texmaker/設定/OS X"
url: "/Texmaker/設定/OS X/"
date: 2012-07-13T16:53:28Z
pukiwiki: "Texmaker/設定/OS X"
---

# Texmaker/設定/OS X

## Skim との連携 {#b05a1a86}

LaTeX コマンド, PdfLaTeX コマンドのオプションに -synctex=1 を追加します．

### forward search {#jbc32d2d}

forward search は PDFビューアに

```
"/Applications/Skim.app/Contents/SharedSupport/displayline" @ %.pdf #.tex
```

です．

### inverse search {#q51f9015}

コマンド:
: /Applications/texmaker.app/Contents/MacOS/texmaker

引数:
: "%file" -line %line
