---
title: "PS_View"
url: "/PS_View/"
date: 2017-06-25T06:28:10Z
pukiwiki: "PS_View"
---

# PS_View

## [PS_View](http://psview.sourceforge.net/) {#xe5bc4f2}

PS_View は Ghostscript を使って PS/PDF ファイルを表示するプレビューアです。
[TeX Live](</TeX Live/>) (win32) に標準で含まれています。

<!-- [[Ghostscript/Windows]] から移転してきました。 -->

### TeX Live 2017 以降の PS_View で縦書きの日本語 PostScript ファイルを表示するための設定 {#j2f12ac2}

TeX Live 2017 以降の Ghostscript は -dWINKANJI オプションをサポートしています。

PS_View で縦書きの日本語 PostScript ファイルを表示する場合は psv.wx.lua の PSV_DftGsPars

```
local PSV_DftGsPars = {"-dNOPAUSE","-dDELAYBIND","-dNOEPS"}
```

を

```
local PSV_DftGsPars = {"-dNOPAUSE","-dDELAYBIND","-dNOEPS","-dWINKANJI"}
```

に修正すると正しく表示できるようになります。
