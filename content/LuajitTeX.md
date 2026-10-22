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

- [https://mailman.ntg.nl/archives/list/ntg-context@ntg.nl/thread/N5TUUVQJTL7RSKIMDUIW7ESZEAFABWDP/](https://mailman.ntg.nl/archives/list/ntg-context@ntg.nl/thread/N5TUUVQJTL7RSKIMDUIW7ESZEAFABWDP/)

上のように現在では LuaTeX と共通のソースとなっています．

***

***

### お知らせ {#jd858e78}

TeX Live 2026 には LuajitHBTeX 1.24.0, LuajitTeX 1.24.0 が収録されています。

TeX Live 2025 初回リリース版には LuajitHBTeX 1.21.0, LuajitTeX 1.21.0 が収録されていますが、この版には「[TL2025でSTIX2とNewComputerModernの積分記号が変わった？](https://okumuralab.org/tex/mod/forum/discuss.php?d=3900)」の投稿で示される不具合があります。この不具合は [Revision 74603](https://svn.tug.org/texlive?view=revision&revision=74603) で修正され、[Revision 74609](https://svn.tug.org/texlive?view=revision&revision=74609) で TeX Live 2025 のブランチに取り込まれました。[Revision 74610](https://svn.tug.org/texlive?view=revision&revision=74610)、[Revision 74611](https://svn.tug.org/texlive?view=revision&revision=74611)、[Revision 74618](https://svn.tug.org/texlive?view=revision&revision=74618)、[Revision 74619](https://svn.tug.org/texlive?view=revision&revision=74619)、[Revision 74624](https://svn.tug.org/texlive?view=revision&revision=74624) に収録されている LuajitHBTeX 1.22.0, LuajitTeX 1.22.0 では積分記号は直っていますが，定積分の積分範囲上下限が積分記号よりかなり離れた位置に配置される新たな不具合が発生します。「[TL2025のlualatexにおける定積分](https://okumuralab.org/tex/mod/forum/discuss.php?d=3904)」の投稿によるとプリアンブルに \mathitalicsmode3 を記述することで問題が解消するようです。[Revision 74669](https://svn.tug.org/texlive?view=revision&revision=74669)、[Revision 74670](https://svn.tug.org/texlive?view=revision&revision=74670)、[Revision 74672](https://svn.tug.org/texlive?view=revision&revision=74672)、[Revision 74677](https://svn.tug.org/texlive?view=revision&revision=74677)、[Revision 74680](https://svn.tug.org/texlive?view=revision&revision=74680) で \mathitalicsmode3 なしでも正しい出力になったようです。[Revision 74708](https://svn.tug.org/texlive?view=revision&revision=74708) で LuajitHBTeX 1.23.1, LuajitTeX 1.23.1 になりました。

TeX Live 2024 には LuajitHBTeX 1.18.0, LuajitTeX 1.18.0 が収録されています。

TeX Live 2023 初回リリース版には LuajitHBTeX 1.16.0, LuajitTeX 1.16.0 が収録されていますが、この版には [CVE-2023-32668](https://security-tracker.debian.org/tracker/CVE-2023-32668) の脆弱性が存在します。この脆弱性は [Revision 66967](https://svn.tug.org/texlive?view=revision&revision=66967) で修正され、[Revision 66984](https://svn.tug.org/texlive?view=revision&revision=66984) で TeX Live 2023 のブランチに取り込まれました。[Revision 66986](https://svn.tug.org/texlive?view=revision&revision=66986), [Revision 66987](https://svn.tug.org/texlive?view=revision&revision=66987), [Revision 66994](https://svn.tug.org/texlive?view=revision&revision=66994), [Revision 66997](https://svn.tug.org/texlive?view=revision&revision=66997), [Revision 67006](https://svn.tug.org/texlive?view=revision&revision=67006) には LuajitHBTeX 1.17.0, LuajitTeX 1.17.0 が収録されています。

TeX Live 2022 には LuajitHBTeX 1.15.0, LuajitTeX 1.15.0 が収録されています。

TeX Live 2021 には LuajitHBTeX 1.13.2, LuajitTeX 1.13.2 が収録されています。

TeX Live 2020 には LuajitHBTeX 1.12.0, LuajitTeX 1.12.0 が収録されています。

TeX Live [Revision 52828](https://svn.tug.org/texlive?view=revision&revision=52828) で LuajitLaTeX が削除されました。

TeX Live 2019 には LuajitTeX 1.10.0 が収録されています。

TeX Live 2018 には LuajitTeX 1.07.0 が収録されています。

#### 内蔵 LuaJIT 処理系のバージョン {#db5f144e}

TeX Live 2026 には LuaJIT 2.1.81742 (windows バイナリ)、LuaJIT 2.1.1736781742 (universal-darwin バイナリ、x86_64-linux バイナリ) が収録されています。

TeX Live 2025 には LuaJIT 2.1.1736781742 が収録されています。--&gt; [LuaJIT 2.1.1736781742 (work in progress). LuaTeX 1.21.0 (7c07c1db) · コミット · TeXLive / luatex · GitLab](https://gitlab.lisn.upsaclay.fr/texlive/luatex/-/commit/7c07c1db91770ec62328b6a1876c186cc5ee9a36)

TeX Live 2024 には LuaJIT 2.1.0-beta3 が収録されています。

TeX Live 2023 には LuaJIT 2.1.0-beta3 が収録されています。

TeX Live 2022 には LuaJIT 2.1.0-beta3 が収録されています。

TeX Live 2021 には LuaJIT 2.1.0-beta3 が収録されています。

TeX Live 2020 には LuaJIT 2.1.0-beta3 が収録されています。

TeX Live 2019 には LuaJIT 2.1.0-beta3 が収録されています。

TeX Live 2018 には LuaJIT 2.1.0-beta3 が収録されています。

### 動作環境 {#p62af3af}

LuajitTeX は Windows, macOS, Linux, \*BSD で動作します。

LuajitTeX は TeX Live がサポートしている全ての環境で提供されているわけではありません。

[x86_64-solaris](https://git.texlive.info/texlive/tree/Master/bin/x86_64-solaris?h=tags/texlive-2026.1) では LuajitTeX は提供されていないのでこれらの環境を使用している場合は LuaTeX を使用してください。

### インストール {#e0acc4f5}

[TeX Live](</TeX Live/>) に含まれています．
[LuaTeX-ja](/LuaTeX-ja/) は LuajitTeX にも対応しています．

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

- [QA: luajittex](https://okumuralab.org/tex/mod/forum/discuss.php?d=911)

#### License {#a9b7759e}

GPLv3, GPLv2

#### ChangeLog <a id="changelog"></a> {#s3ef1408}

- [LuaTeX](/LuaTeX/#changelog)
- [https://svn.tug.org/texlive/trunk/Build/source/libs/luajit/](https://svn.tug.org/texlive/trunk/Build/source/libs/luajit/)
    - [https://svn.tug.org/texlive/trunk/Build/source/libs/luajit/?view=log](https://svn.tug.org/texlive/trunk/Build/source/libs/luajit/?view=log)
- [https://github.com/TeX-Live/texlive-source/tree/trunk/libs/luajit](https://github.com/TeX-Live/texlive-source/tree/trunk/libs/luajit)
    - [https://github.com/TeX-Live/texlive-source/commits/trunk/libs/luajit](https://github.com/TeX-Live/texlive-source/commits/trunk/libs/luajit)
