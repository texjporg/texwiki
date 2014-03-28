---
title: "LuaJITTeX"
url: "/LuaJITTeX/"
date: 2013-01-25T19:19:43Z
pukiwiki: "LuaJITTeX"
---

# LuaJITTeX

## [LuaJITTeX](https://foundry.supelec.fr/projects/luajittex/) {#y53144a3}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## LuaJITTeX とは {#u3c93cbf}

LuaJITTeX は [LuaTeX](/LuaTeX/) で使用されている Lua を [LuaJIT](http://luajit.org/) に置き換えたものです.<br>

- [FusionForge: LuaJITTeX: Project Home](https://foundry.supelec.fr/projects/luajittex/)

### License {#a9b7759e}

[GPLv2](https://foundry.supelec.fr/scm/viewvc.php/trunk/COPYING?view=markup&root=luajittex)

### ChangeLog {#s3ef1408}

- [FusionForge: LuaJITTeX: SCM Repository](https://foundry.supelec.fr/scm/viewvc.php/trunk/?root=luajittex)
    - [log](https://foundry.supelec.fr/scm/viewvc.php/trunk/?root=luajittex&view=log)

## インストール {#e0acc4f5}

W32TeX に含まれています．<br>
W32TeX の LuaJITTeX は [LuaTeX-ja](/LuaTeX-ja/) が使用可能です．<br>

Linux の場合は以下のサイトからバイナリが入手出来ます．<br>

- [http://standalone.contextgarden.net/current/bin/luajittex/](http://standalone.contextgarden.net/current/bin/luajittex/)
- [http://svn.contextgarden.net/suite-bin/tex/](http://svn.contextgarden.net/suite-bin/tex/)

```
$ wget http://standalone.contextgarden.net/current/bin/luajittex/linux-64/bin/luajittex
$ chmod +x luajittex
$ sudo cp luajittex /usr/bin
$ sudo ln -s /usr/bin/luajittex /usr/bin/luajitlatex
$ luajitlatex --fmt=lualatex.fmt test.tex
```

などとすればとりあえず動作するようです．

## 使い方 {#vad7d54e}

LuaJITTeX は [FFI library](http://luajit.org/ext_ffi.html) を使って簡単に C の関数を呼び出すことができます．<br>

### Windows {#b1c497b6}

LuaJITTeX は MessageBox などの Windows API を呼び出すことが可能です．

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

<span style="color:Black;background-color:#ACDEFE;"><ins>　<strong>LuaJITTeX</strong>　　　　　　　　<span style="color:Black;background-color:#CC3333;">\[　 <span style="color:White;"><strong>✕</strong></span> 　\]</span> </ins></span><br>

　　 Happy LuaJITLaTeXing!

<span style="color:Black;background-color:#F0F0F0;">　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　　　　OK　　　　\]</span> </span>

***

Windows PowerShell またはコマンド プロンプト (標準出力) に出力したい場合は printf を使用します．

***

```
\documentclass{article}
\usepackage{luacode}
\begin{document}
\begin{luacode*}
  local ffi = require("ffi")
  ffi.cdef[[
  int printf(const char* format, ...);
  ]]
  local msvcrt = ffi.load(ffi.os == "Windows" and "msvcrt")
  msvcrt.printf("%s %s\n", "Happy", "LuaJITLaTeXing!")
\end{luacode*}
\end{document}
```

***

### Linux {#v08e3a2f}

コンソール (標準出力) に出力したい場合は printf を使用します．

***

```
\documentclass{article}
\usepackage{luacode}
\begin{document}
\begin{luacode*}
  local ffi = require("ffi")
  ffi.cdef[[
  int printf(const char* format, ...);
  ]]
  local libc = ffi.load(ffi.os == "Linux" and "libc")
  libc.printf("%s %s\n", "Happy", "LuaJITLaTeXing!")
\end{luacode*}
\end{document}
```

***

## 関連リンク {#s999db35}

- [Newest &#39;luajittex&#39; Questions - TeX - LaTeX](http://tex.stackexchange.com/questions/tagged/luajittex)
- [QA: luajittex](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=911)
- [https://code.launchpad.net/~reviczky/luatex/debian-luajittex](https://code.launchpad.net/~reviczky/luatex/debian-luajittex)
- [https://code.launchpad.net/~reviczky/+archive/luatex-daily](https://code.launchpad.net/~reviczky/+archive/luatex-daily)
- [https://code.launchpad.net/~reviczky/+recipe/luajittex-daily](https://code.launchpad.net/~reviczky/+recipe/luajittex-daily)
