---
title: "Julia"
url: "/Julia/"
date: 2013-09-18T02:22:45Z
pukiwiki: "Julia"
---

# Julia

## [Julia](http://julialang.org/) {#mcc2f191}

<img src="http://upload.wikimedia.org/wikipedia/en/thumb/b/be/Julia_%28programming_language%29_logo.png/320px-Julia_%28programming_language%29_logo.png" alt="Julia" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Summary {#lf53506c}

Julia は科学技術計算向けのプログラミング言語です．<br>

- [The Julia Language](http://julialang.org/)
- [http://julia.readthedocs.org/en/latest/](http://julia.readthedocs.org/en/latest/)
- [http://qiita.com/tags/julia](http://qiita.com/tags/julia)
- [Wikipedia:Julia\_(programming_language)](https://www.wikipedia.org/wiki/Julia_%28programming_language%29)
- [Julia vs. Python: Monte Carlo Simulations of Bitcoin Options](http://rawrjustin.github.io/blog/2014/03/18/julia-vs-python-monte-carlo-simulations-of-bitcoin-options/)
- [Python vs Julia - an example from machine learning](http://tullo.ch/articles/python-vs-julia/)
- [科学計算が得意な言語Juliaを試してみた](http://qiita.com/chezou/items/d090f26dcb31818d6964)
- [RユーザのためのJulia入門（行列編）](http://rishida.hatenablog.com/entry/2013/11/30/194733)
- [30分で分かる最先端プログラミング言語Julia](http://mechawooser.blogspot.jp/2013/06/30julia.html)
- [Julia : スクリプト言語最速? 手軽さと速さを求めた科学技術計算向け言語](http://yohshiy.blog.fc2.com/blog-entry-246.html)
- [Pythonのコマンドライン引数処理の決定版 docopt (あとJuliaに移植したよ)](http://bicycle1885.hatenablog.com/entry/2014/06/08/103010)

### Julia Benchmarks {#ob1e5eb8}

- [http://julialang.org/benchmarks/](http://julialang.org/benchmarks/)

### IDE・エディタ {#r3bb2794}

#### フリーソフトウェア (オープンソースソフトウェア) {#ob9c9c6e}

- [Julia Studio](http://forio.com/julia/)
    - [https://github.com/forio/julia-studio](https://github.com/forio/julia-studio)
    - [Julia Studio で始める Julia 入門](http://cointoss.hatenablog.com/entry/2014/01/02/213638)
- [Emacs](/Emacs/)
- [Vim](/Vim/)

## [fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) <a id="fwdsumatrapdf"></a> {#me14be9e}

### Julia 版 {#yd2ce169}

julia version 0.3.0-prerelease+3590 で動作確認しています．<br>

***

- fwdsumatrapdf.jl

***

```
# vim: ts=4 sw=4 expandtab:
# -*- coding: utf-8 -*-

TIMEOUT = 10000

type STARTUPINFOW
    cb::Cuint
    lpReserved::Ptr{Cwchar_t}
    lpDesktop::Ptr{Cwchar_t}
    lpTitle::Ptr{Cwchar_t}
    dwX::Cuint
    dwY::Cuint
    dwXSize::Cuint
    dwYSize::Cuint
    dwXCountChars::Cuint
    dwYCountChars::Cuint
    dwFillAttribute::Cuint
    dwFlags::Cuint
    wShowWindow::Cushort
    cbReserved2::Cushort
    lpReserved2::Ptr{Cuchar}
    hStdInput::Ptr{Void}
    hStdOutput::Ptr{Void}
    hStdError::Ptr{Void}
end

type PROCESS_INFORMATION
    hProcess::Ptr{Void}
    hThread::Ptr{Void}
    dwProcessId::Cuint
    dwThreadId::Cuint
end

function runSumatraPDF()
    sinfo = STARTUPINFOW(
        0,
        C_NULL,
        C_NULL,
        C_NULL,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        C_NULL,
        C_NULL,
        C_NULL,
        C_NULL)
    pinfo = PROCESS_INFORMATION(
        C_NULL,
        C_NULL,
        0,
        0)
    HKEY_LOCAL_MACHINE = uint32(0x80000002)
    KEY_QUERY_VALUE = uint32(0x01)
    keyPath = "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths\\SumatraPDF.exe"
    subKey = Cuint[0]
    dwType = Cuint[0]
    sz = Cuint[0]
    ccall((:RegOpenKeyExW, "advapi32"), stdcall,
        Clong,
        (Cuint, Ptr{Cwchar_t}, Cuint, Cuint, Ptr{Void}),
        HKEY_LOCAL_MACHINE, wstring(keyPath), 0, KEY_QUERY_VALUE, subKey)
    subKey = subKey[1]
    ccall((:RegQueryValueExW, "advapi32"), stdcall,
        Clong,
        (Cuint, Ptr{Cwchar_t}, Ptr{Cuint}, Ptr{Cuint}, Ptr{Cuchar}, Ptr{Cuint}),
        subKey, C_NULL, C_NULL, dwType, C_NULL, sz)
    sumatraPDFRegistry_wchar = Cuchar[1:sz[1]]
    ccall((:RegQueryValueExW, "advapi32"), stdcall,
        Clong,
        (Cuint, Ptr{Cwchar_t}, Ptr{Cuint}, Ptr{Cuint}, Ptr{Cuchar}, Ptr{Cuint}),
        subKey, C_NULL, C_NULL, dwType, sumatraPDFRegistry_wchar, sz)
    CP_ACP = uint32(0)
    WC_NO_BEST_FIT_CHARS = uint32(1024)
    sumatraPDFRegLength = uint((sz[1] - 2) / 2)
    sumatraPDFRegistry = Cuchar[1:sumatraPDFRegLength]
    ccall((:WideCharToMultiByte, "kernel32"), stdcall,
        Cint,
        (Cuint, Cuint, Ptr{Cwchar_t}, Cint, Ptr{Cchar}, Cint, Ptr{Cchar}, Ptr{Cint}),
        CP_ACP, WC_NO_BEST_FIT_CHARS, wstring(sumatraPDFRegistry_wchar), -1, pointer(sumatraPDFRegistry), sumatraPDFRegLength, C_NULL, C_NULL)
    regValue = bytestring(sumatraPDFRegistry)
    ccall((:RegCloseKey, "advapi32"), stdcall,
        Clong,
        (Cuint,),
        subKey)
    sumatraPDFCommandLine = "\"$regValue\" -reuse-instance"
    ccall((:CreateProcessW, "kernel32"), stdcall,
        Cint,
        (Ptr{Cwchar_t}, Ptr{Cwchar_t}, Ptr{Void}, Ptr{Void}, Cint, Cuint, Ptr{Void}, Ptr{Cwchar_t}, Ptr{STARTUPINFOW}, Ptr{PROCESS_INFORMATION}),
        C_NULL, wstring(sumatraPDFCommandLine), C_NULL, C_NULL, 0, 0, C_NULL, C_NULL, &sinfo, &pinfo)
    ccall((:WaitForInputIdle, "user32"), stdcall,
        Cuint,
        (Ptr{Void}, Cuint),
        pinfo.hProcess, TIMEOUT)
end

function ddeExecute(server, topic, command)
    APPCMD_CLIENTONLY = uint32(0x10)
    CP_WINUNICODE = int32(1200)
    CF_UNICODETEXT = uint32(13)
    XCLASS_FLAGS = uint32(0x4000)
    XTYP_EXECUTE = (uint32(0x0050) | XCLASS_FLAGS)
    idInstance = Cuint[0]
    ccall((:DdeInitializeW, "user32"), stdcall,
        Cuint,
        (Ptr{Cuint}, Ptr{Void}, Cuint, Cuint),
        pointer(idInstance), C_NULL, APPCMD_CLIENTONLY, 0)
    idInstance = idInstance[1]
    if idInstance == uint32(0) throw(ErrorException("DdeInitializeW error")) end
    hszServer = ccall((:DdeCreateStringHandleW, "user32"), stdcall,
        Ptr{Void},
        (Cuint, Ptr{Cwchar_t}, Cint),
        idInstance, wstring(server), CP_WINUNICODE)
    if hszServer == C_NULL throw(ErrorException("DdeCreateStringHandleW error")) end
    hszTopic = ccall((:DdeCreateStringHandleW, "user32"), stdcall,
        Ptr{Void},
        (Cuint, Ptr{Cwchar_t}, Cint),
        idInstance, wstring(topic), CP_WINUNICODE)
    if hszTopic == C_NULL throw(ErrorException("DdeCreateStringHandleW error")) end
    hConvClient = ccall((:DdeConnect, "user32"), stdcall,
        Ptr{Void},
        (Cuint, Ptr{Void}, Ptr{Void}, Ptr{Void}),
        idInstance, hszServer, hszTopic, C_NULL)
    if hConvClient == C_NULL throw(ErrorException("DdeConnect error")) end
    hDdeData = ccall((:DdeCreateDataHandle, "user32"), stdcall,
        Ptr{Void},
        (Cuint, Ptr{Cwchar_t}, Cuint, Cuint, Ptr{Void}, Cuint, Cuint),
        idInstance, wstring(command), (length(command) + 1)*sizeof(Cwchar_t), 0, C_NULL, CF_UNICODETEXT, 0)
    if hDdeData == C_NULL throw(ErrorException("DdeCreateDataHandle error")) end
    hDdeTransactionData = ccall((:DdeClientTransaction, "user32"), stdcall,
        Ptr{Void},
        (Ptr{Void}, Cuint, Ptr{Void}, Ptr{Void}, Cuint, Cuint, Cuint, Ptr{Cuint}),
        hDdeData, convert(Cuint, -1), hConvClient, C_NULL, 0, XTYP_EXECUTE, TIMEOUT, C_NULL)
    if hDdeTransactionData == C_NULL throw(ErrorException("DdeClientTransaction error")) end
    ccall((:DdeFreeDataHandle, "user32"), stdcall,
        Cint,
        (Ptr{Void},),
        hDdeTransactionData)
    ccall((:DdeFreeDataHandle, "user32"), stdcall,
        Cint,
        (Ptr{Void},),
        hDdeData)
    ccall((:DdeFreeStringHandle, "user32"), stdcall,
        Cint,
        (Cuint, Ptr{Void}),
        idInstance, hszServer)
    ccall((:DdeFreeStringHandle, "user32"), stdcall,
        Cint,
        (Cuint, Ptr{Void}),
        idInstance, hszTopic)
    ccall((:DdeDisconnect, "user32"), stdcall,
        Cint,
        (Ptr{Void},),
        hConvClient)
    ccall((:DdeUninitialize, "user32"), stdcall,
        Cint,
        (Cuint,),
        idInstance)
end

if !isinteractive()
    CP_ACP = uint32(0)
    MB_PRECOMPOSED = uint32(1)
    pdf_wchar = wstring(ARGS[1])
    tex_wchar = wstring(ARGS[2])
    ccall((:MultiByteToWideChar, "kernel32"), stdcall,
        Cint,
        (Cuint, Cuint, Ptr{Cchar}, Cint, Ptr{Cwchar_t}, Cint),
        CP_ACP, MB_PRECOMPOSED, ARGS[1], -1, pdf_wchar, length(pdf_wchar))
    ccall((:MultiByteToWideChar, "kernel32"), stdcall,
        Cint,
        (Cuint, Cuint, Ptr{Cchar}, Cint, Ptr{Cwchar_t}, Cint),
        CP_ACP, MB_PRECOMPOSED, ARGS[2], -1, tex_wchar, length(tex_wchar))
    server = "SUMATRA"
    topic = "control"
    pdf = string(pdf_wchar)
    tex = string(tex_wchar)
    line = uint(ARGS[3])
    command = "[ForwardSearch(\"$pdf\",\"$tex\",$line,0,0,0)]"
    try
        runSumatraPDF()
        ddeExecute(server, topic, command)
    catch exn
        error(exn)
    end
end
```

***
