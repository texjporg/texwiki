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

LuaJITTeX は [LuaTeX](/LuaTeX/) で使用されている Lua を LuaJIT に置き換えたものです．

- [http://www.ntg.nl/pipermail/ntg-context/2014/076633.html](http://www.ntg.nl/pipermail/ntg-context/2014/076633.html)

上のように現在では LuaTeX と共通のソースとなっています．

### License {#a9b7759e}

[GPLv3, GPLv2](https://foundry.supelec.fr/scm/viewvc.php/trunk/COPYING?view=markup&root=luatex)

### ChangeLog {#s3ef1408}

- [FusionForge: LuaTeX: SCM Repository](https://foundry.supelec.fr/scm/viewvc.php/trunk/?root=luatex)
    - [log](https://foundry.supelec.fr/scm/viewvc.php/trunk/?root=luatex&view=log)

## インストール {#e0acc4f5}

TeX Live 2014, W32TeX に含まれています．
[LuaTeX-ja](/LuaTeX-ja/) は LuaJITTeX にも対応しています．

## 使い方 {#vad7d54e}

LuaJITTeX は [FFI library](http://luajit.org/ext_ffi.html) を使って簡単に C の関数を呼び出すことができます．

### Windows {#b1c497b6}

LuaJITTeX は MessageBox などの Windows API を呼び出すことが可能です．

***

```
\documentclass{article}
\usepackage{luacode}
\begin{document}
\begin{luacode*}
  local ffi = require("ffi")
  ffi.cdef[[
    typedef void*          HANDLE;
    typedef HANDLE         HWND;
    typedef unsigned int   UINT;
    typedef const char*    LPCSTR;
    int MessageBoxA(HWND hWnd, LPCSTR lpText, LPCSTR lpCaption, UINT uType);
  ]]
  ffi.C.MessageBoxA(nil, "Happy LuaJITLaTeXing!", "LuaJITTeX", 0)
\end{luacode*}
\end{document}
```

***

```
\documentclass{article}
\usepackage{luacode}
\begin{document}
\begin{luacode*}
  local ffi = require("ffi")
  ffi.cdef[[
    typedef void*          HANDLE;
    typedef HANDLE         HWND;
    typedef unsigned int   UINT;
    typedef unsigned short WORD;
    typedef unsigned long  DWORD;
    typedef const char*    LPCSTR;
    typedef wchar_t*       LPWSTR;
    typedef const wchar_t* LPCWSTR;
    enum{
      CP_UTF8 = 65001
    };
    int MultiByteToWideChar(UINT CodePage, DWORD dwFlags, LPCSTR lpMultiByteStr,
          int cbMultiByte, LPWSTR lpWideCharStr, int cchWideChar);
    int MessageBoxW(HWND hWnd, LPCWSTR lpText, LPCWSTR lpCaption, UINT uType);
  ]]
  local kernel32 = ffi.load("kernel32")
  local user32 = ffi.load("user32")
  local function toWide(str)
    local size = kernel32.MultiByteToWideChar(ffi.C.CP_UTF8, 0, str, str:len(), nil, 0)
    local buffer = ffi.new("wchar_t[?]", size + 1)
    ffi.fill(buffer, (size + 1) * ffi.sizeof("wchar_t"), 0)
    if kernel32.MultiByteToWideChar(ffi.C.CP_UTF8, 0, str, str:len(), buffer, size) ~= size then
        return nil
    end
    return buffer
  end
  user32.MessageBoxW(nil, toWide("Happy LuaJITLaTeXing!"), toWide("LuaJITTeX"), 0)
\end{luacode*}
\end{document}
```

***

LuaJITLaTeX を実行すると以下のような MessageBox が表示されます．

***

<span style="color:#3EAEC0;background-color:#3EAEC0;"><ins>　　　　　<span style="color:Black;"><strong>LuaJITTeX</strong></span>　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

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
- [http://standalone.contextgarden.net/current/bin/luajittex/](http://standalone.contextgarden.net/current/bin/luajittex/)
- [http://svn.contextgarden.net/suite-bin/tex/](http://svn.contextgarden.net/suite-bin/tex/)
