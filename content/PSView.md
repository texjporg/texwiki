---
title: "PSView"
url: "/PSView/"
date: 2015-07-07T03:54:19Z
pukiwiki: "PSView"
---

# PSView

## [PS_View](http://psview.sourceforge.net/) {#xe5bc4f2}

PS_View は Ghostscript を使って PS/PDF ファイルを表示するプレビューアです。
[TeX Live](</TeX Live/>) (win32) に標準で含まれています。

<!-- [[Ghostscript/Windows]] から移転してきました。 -->

### W32TeX で PS_View を使用する場合 {#j2f12ac2}

W32TeX で PS_View を使用する場合は PS_View の psv.wx.lua の gsargs の dllloc

```
local gsargs = {
  args= {},      -- arguments to ghostscript (wihout paths)
  dllloc= "",    -- localisation of DLL (passed to wxGhostscript)
```

を角藤版 32-bit Ghostscript の dll ファイル (C:\Program Files\gs\gs9.18\bin\gsdll32.dll) に修正します。
ただし，ディレクトリの区切りは，スラッシュ(/) もしくは バックスラッシュ2つ(\\\\) を使用します。

```
local gsargs = {
  args= {},      -- arguments to ghostscript (wihout paths)
  dllloc= "C:/Program Files/gs/gs9.18/bin/gsdll32.dll",    -- localisation of DLL (passed to wxGhostscript)
```

角藤版 32-bit Ghostscript で -dWINKANJI オプションを使用して日本語を表示するには，psv.wx.lua の PSV_DftGsPars

```
local PSV_DftGsPars = {"-dNOPAUSE","-dDELAYBIND","-dNOEPS"}
```

を

```
local PSV_DftGsPars = {"-dNOPAUSE","-dDELAYBIND","-dNOEPS","-dWINKANJI"}
```

に修正します。

### 関連リンク {#vbe438a4}

- [PS_View 日本語情報トップページ](http://osdn.jp/projects/sfnet_psview/)
