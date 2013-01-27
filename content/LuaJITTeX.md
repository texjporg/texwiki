---
title: "LuaJITTeX"
url: "/LuaJITTeX/"
date: 2013-01-25T19:19:43Z
pukiwiki: "LuaJITTeX"
---

# LuaJITTeX

## [LuaJITTeX](http://foundry.supelec.fr/gf/project/luajittex/) {#y53144a3}

LuaJITTeX は [LuaTeX](/LuaTeX/) で使用されている [Lua](http://www.lua.org/) を [LuaJIT](http://luajit.org/) に置き換えたものです.<br>
\[2012/12/30\] 以降の W32TeX に含まれています．<br>
[LuaTeX-ja](/LuaTeX-ja/) も使用可能です．<br>

- [LuaJITTeX](http://foundry.supelec.fr/gf/project/luajittex/)

## 使い方 {#vad7d54e}

LuaJITTeX は [FFI library](http://luajit.org/ext_ffi.html) を使って簡単に Windows API を呼び出すことが可能です．

***

```
\documentclass{article}
\begin{document}
\directlua{
  local ffi = require("ffi")
  ffi.cdef[[
  int MessageBoxA(void* window, const char* text, const char* caption, int type);
  ]]
  ffi.C.MessageBoxA(nil, "Happy LuaJITLaTeXing!", "LuaJITTeX", 0)
}
\end{document}
```

***

LuaJITLaTeX を実行すると以下のような MessageBox が表示されます．

***

<span style="color:Black;background-color:#ACDEFE;"><ins>　LuaJITTeX　　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[　 <span style="color:White;"><strong>✕</strong></span> 　\]</span> </ins></span><br>

　　　Happy LuaJITLaTeXing!

　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　OK　　　\]</span>

***

## 関連リンク {#s999db35}

- [QA: luajittex](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=911)
