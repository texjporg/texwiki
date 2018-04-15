---
title: "LuajitTeX"
url: "/LuajitTeX/"
date: 2018-04-13T12:26:43Z
pukiwiki: "LuajitTeX"
---

# LuajitTeX

## LuajitTeX {#y53144a3}

LuajitTeX は [LuaTeX](/LuaTeX/) で使用されている [Lua](http://www.lua.org/) を
[LuaJIT](http://luajit.org/) に置き換えたものです．
JIT とは <strong>J</strong>ust-<strong>I</strong>n-<strong>T</strong>ime Compiler，つまりその場で機械語へのコンパイルを行うという意味であり，これによりインタプリタ方式の通常の Lua よりも高速な動作が期待できます．

- [http://www.ntg.nl/pipermail/ntg-context/2014/076633.html](http://www.ntg.nl/pipermail/ntg-context/2014/076633.html)

上のように現在では LuaTeX と共通のソースとなっています．

***

***

### お知らせ {#jd858e78}

TeX Live 2018 には 1.07.0 が収録されています。LuaJIT 2.1.0-beta3 が収録されています。

### 動作環境 {#p62af3af}

LuajitTeX は Windows, macOS, Linux, \*BSD で動作します。

LuajitTeX は TeX Live がサポートしている全ての環境で提供されているわけではありません。

[sparc-solaris](http://www.tug.org/svn/texlive/trunk/Master/bin/sparc-solaris/) と [x86_64-solaris](http://www.tug.org/svn/texlive/trunk/Master/bin/x86_64-solaris/) では LuajitTeX は提供されていないのでこれらの環境を使用している場合は LuaTeX を使用してください。

### インストール {#e0acc4f5}

[TeX Live](</TeX Live/>), [W32TeX](/W32TeX/) に含まれています．
[LuaTeX-ja](/LuaTeX-ja/) は LuajitTeX にも対応しています．

#### TeX Live の場合 {#t625c951}

TeX Live をインストールした状態では、luajittex は使えますが、luajitlatex を使用するためには、以下のような手順で設定を行う必要があります。

1. kpsewhich fmtutil.cnf で fmtutil.cnf の path を探す。
1. fmtutil.cnf をエディタで開き、luajitlatex を検索。該当行の行頭は #! でコメントアウトされているので、これを消して行を有効にする。
1. fmtutil-sys --byfmt luajitlatex を実行。
1. luajittex --fmt=luajitlatex.fmt foo.tex で latex として使用可。

Windows の場合は、この設定を行うことで luajitlatex.exe が使用できるようになります。Unix 系 OS（macOS を含む）の場合は、~/.bashrc 等に、

```
   alias luajitlatex='luajittex --fmt=luajitlatex.fmt'
```

を追加して alias として設定するとよいでしょう。

### 使い方 {#vad7d54e}

基本的には通常の LuaTeX と同様に使うことができます．

LuajitTeX では，LuaJIT の追加機能である [FFI library](http://luajit.org/ext_ffi.html) を使って簡単に C の関数を呼び出すことができます．
LuaTeX でも Version 1.0.3 以降は FFI が使えます． LuaTeX では FFI が大域的なので

```
local ffi = require("ffi")
```

は不要です． LuaTeX や LuajitTeX には secure mode は無いと思っておいたほうが
良いそうですが，FFI は特に簡単に危ないことができるので，最新の場合には
LuaTeX でも LuajitTeX でも

```
--shell-escape
```

オプションを使用しないと使用不可になっています．

#### Windows {#b1c497b6}

LuajitTeX は MessageBox などの Windows API を呼び出すことが可能です．

■ MessageBoxA を使用する場合

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
  ffi.C.MessageBoxA(nil, "Happy LuajitLaTeXing!", "LuajitTeX", 0)
\end{luacode*}
\end{document}
```

■ MessageBoxW を使用する場合

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
  user32.MessageBoxW(nil, toWide("Happy LuajitLaTeXing!"), toWide("LuajitTeX"), 0)
\end{luacode*}
\end{document}
```

### 関連リンク {#s999db35}

- [QA: luajittex](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=911)
- [http://standalone.contextgarden.net/current/bin/luajittex/](http://standalone.contextgarden.net/current/bin/luajittex/)
- [http://svn.contextgarden.net/suite-bin/tex/](http://svn.contextgarden.net/suite-bin/tex/)

#### License {#a9b7759e}

GPLv3, GPLv2

#### ChangeLog <a id="changelog"></a> {#s3ef1408}

[LuaTeX](/LuaTeX/#changelog)
