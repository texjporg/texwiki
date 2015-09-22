---
title: "LuaJITTeX"
url: "/LuaJITTeX/"
date: 2013-01-25T19:19:43Z
pukiwiki: "LuaJITTeX"
---

# LuaJITTeX

## [LuaJITTeX](https://foundry.supelec.fr/projects/luajittex/) {#y53144a3}

LuaJITTeX は [LuaTeX](/LuaTeX/) で使用されている [Lua](http://www.lua.org/) を
[LuaJIT](http://luajit.org/) に置き換えたものです．
JIT とは <strong>J</strong>ust-<strong>I</strong>n-<strong>T</strong>ime Compiler，つまりその場で機械語へのコンパイルを行うという意味であり，これによりインタプリタ方式の通常の Lua よりも高速な動作が期待できます．

- [http://www.ntg.nl/pipermail/ntg-context/2014/076633.html](http://www.ntg.nl/pipermail/ntg-context/2014/076633.html)

上のように現在では LuaTeX と共通のソースとなっています．

***

***

### インストール {#e0acc4f5}

[TeX Live](</TeX Live/>), [W32TeX](/W32TeX/) に含まれています．
[LuaTeX-ja](/LuaTeX-ja/) は LuaJITTeX にも対応しています．

#### TeX Live の場合 {#t625c951}

TeX Live をインストールした状態では、luajittex は使えますが、luajitlatex を使用するためには、以下のような手順で設定を行う必要があります。

1. kpsewhich fmtutil.cnf で fmtutil.cnf の path を探す。
1. fmtutil.cnf をエディタで開き、luajitlatex を検索。該当行の行頭は #! でコメントアウトされているので、これを消して行を有効にする。
1. fmtutil-sys --byfmt luajitlatex を実行。
1. luajittex --fmt=luajitlatex.fmt foo.tex で latex として使用可。

luajitlatex として使用したい場合は、Un\*x 系 OS（Mac OS X を含む）の場合は alias として設定するとよい。Windows の場合は、

> luajittex --fmt=luajitlatex.fmt %1

のようなバッチファイル luajitlatex.bat を作成すればよい。

### 使い方 {#vad7d54e}

基本的には通常の LuaTeX と同様に使うことができます．

LuaJITTeX では，LuaJIT の追加機能である [FFI library](http://luajit.org/ext_ffi.html) を使って簡単に C の関数を呼び出すことができます．

#### Windows {#b1c497b6}

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

### 関連リンク {#s999db35}

- [Newest &#39;luajittex&#39; Questions - TeX - LaTeX](http://tex.stackexchange.com/questions/tagged/luajittex)
- [QA: luajittex](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=911)
- [https://code.launchpad.net/~reviczky/luatex/debian-luajittex](https://code.launchpad.net/~reviczky/luatex/debian-luajittex)
- [https://code.launchpad.net/~reviczky/+archive/luatex-daily](https://code.launchpad.net/~reviczky/+archive/luatex-daily)
- [https://code.launchpad.net/~reviczky/+recipe/luajittex-daily](https://code.launchpad.net/~reviczky/+recipe/luajittex-daily)
- [http://standalone.contextgarden.net/current/bin/luajittex/](http://standalone.contextgarden.net/current/bin/luajittex/)
- [http://svn.contextgarden.net/suite-bin/tex/](http://svn.contextgarden.net/suite-bin/tex/)

#### License {#a9b7759e}

[GPLv3, GPLv2](https://foundry.supelec.fr/scm/viewvc.php/trunk/COPYING?view=markup&root=luatex)

#### ChangeLog {#s3ef1408}

- [FusionForge: LuaTeX: SCM Repository](https://foundry.supelec.fr/scm/viewvc.php/trunk/?root=luatex)
    - [log](https://foundry.supelec.fr/scm/viewvc.php/trunk/?root=luatex&view=log)
