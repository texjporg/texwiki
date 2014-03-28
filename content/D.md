---
title: "D"
url: "/D/"
date: 2013-08-25T17:36:53Z
pukiwiki: "D"
---

# D

## D {#kd5e7295}

<img src="http://dlang.org/images/d3.png" alt="D" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## D 2.0 {#m0ebe189}

- [http://dlang.org/](http://dlang.org/)
    - [https://github.com/D-Programming-Language/dmd](https://github.com/D-Programming-Language/dmd)
- [http://www.kmonos.net/alang/d/](http://www.kmonos.net/alang/d/)
- [Wikipedia.ja:D言語](https://ja.wikipedia.org/wiki/D%E8%A8%80%E8%AA%9E)
- [http://qiita.com/tags/dlang](http://qiita.com/tags/dlang)
- [D言語 Advent Calendar 2013 - Qiita \[キータ\]](http://qiita.com/advent-calendar/2013/dlang)
- [D言語基礎文法最速マスター](https://gist.github.com/repeatedly/2470712)
- [Windows API: Strange behaviour after calling GetModuleFileNameExA](http://forum.dlang.org/thread/fieksv$pa7$1@digitalmars.com)

## [fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) <a id="fwdsumatrapdf"></a> {#nfc264ca}

### D 版 {#b96c322d}

DMD32 D Compiler v2.065 でビルドできます．<br>
Windows PowerShell またはコマンド プロンプトから以下のようにしてビルドします．<br>

```
PS C:\w32tex\bin> dmd fwdsumatrapdf.d
```

***

- C:\w32tex\bin\fwdsumatrapdf.d

***

```
// vim: ts=4 sw=4 expandtab:
// -*- coding: utf-8 -*-
// >dmd fwdsumatrapdf.d

module fwdsumatrapdf;

version (DigitalMars)
{
    pragma (lib, "kernel32.lib");
    pragma (lib, "user32.lib");
    pragma (lib, "advapi32.lib");
}

import core.stdc.stdlib;
import std.conv;
import std.exception;
import std.file;
import std.path;
import std.stdio;
import std.utf;
import std.windows.registry;

immutable APPCMD_CLIENTONLY = 0x10u;
immutable CP_WINUNICODE = 1200;
immutable CF_UNICODETEXT = 13u;
immutable XCLASS_FLAGS = 0x4000u;
immutable XTYP_EXECUTE = (0x0050u | XCLASS_FLAGS);

immutable TIMEOUT = 10000;
auto existSumatraHWND = false;

class DdemlError : Exception {
    this(in string e) {
        super(e);
    }
}

struct STARTUPINFOW {
    uint cb;
    wchar* lpReserved;
    wchar* lpDesktop;
    wchar* lpTitle;
    uint dwX;
    uint dwY;
    uint dwXSize;
    uint dwYSize;
    uint dwXCountChars;
    uint dwYCountChars;
    uint dwFillAttribute;
    uint dwFlags;
    ushort wShowWindow;
    ushort cbReserved2;
    byte* lpReserved2;
    void* hStdInput;
    void* hStdOutput;
    void* hStdError;
}

struct PROCESS_INFORMATION {
    void* hProcess;
    void* hThread;
    uint dwProcessId;
    uint dwThreadId;
}

extern (C)
{
    wchar* wcsrchr(in wchar*, in wchar);
    int wcscmp(in wchar*, in wchar*);
}

extern (Windows)
{
    int GetWindowTextW(void*, in wchar*, int);
    auto GetSumatraHWND = function bool(void* hwnd, uint lParam) {
        immutable maxSize = 1024;
        wchar[maxSize] windowText;
        GetWindowTextW(hwnd, windowText.ptr, maxSize);

        if (windowText[0] == to!wchar('\0')) {
            return true;
        }

        wchar* title = null;
        if ((title = wcsrchr(cast(wchar*)windowText.ptr, to!wchar('S'))) == null) {
            return true;
        }

        wstring sumatrapdf = "SumatraPDF";
        if (wcscmp(title, sumatrapdf.ptr) != 0) {
            return true;
        }

        existSumatraHWND = true;

        return true;
    };
    bool EnumWindows(bool function (void*, uint), uint);
    bool CreateProcessW(in wchar*, in wchar*, void*, void*, bool, uint, void*, void*, void*, void*);
    uint WaitForInputIdle(void*, uint);
    auto sumatraDdeCallback = function void* (uint uType, uint uFmt, void* hconv, void* hsz1, void* hsz2, void* hdata, uint dwData1, uint dwData2) { return null; };
    uint DdeInitializeW(uint*, void* function (uint, uint, void*, void*, void*, void*, uint, uint), uint, uint);
    bool DdeUninitialize(uint);
    void* DdeCreateStringHandleW(uint, in wchar*, int);
    bool DdeFreeStringHandle(uint, void*);
    void* DdeCreateDataHandle(uint, in wchar*, uint, uint, void*, const uint, uint);
    bool DdeFreeDataHandle(void*);
    void* DdeConnect(uint, void*, void*, void*);
    bool DdeDisconnect(void*);
    void* DdeClientTransaction(void*, uint, void*, void*, uint, uint, uint, void*);
}

struct DDEClient {
    private string server;
    private string topic;
    private uint idInstance;
    private void* hszServer;
    private void* hszTopic;
    private void* hConvClient;
    private void* hDdeData;
    private void* hDdeTransactionData;

    this(in string server, in string topic)
    {
        this.server = server;
        this.topic = topic;
        this.idInstance = 0u;
        this.hszServer = null;
        this.hszTopic = null;
        this.hConvClient = null;
        this.hDdeData = null;
        this.hDdeTransactionData = null;
    }

    ~this()
    {
        if (this.hDdeTransactionData != null) DdeFreeDataHandle(this.hDdeTransactionData);
        if (this.hDdeData != null) DdeFreeDataHandle(this.hDdeData);
        if (this.hszServer != null) DdeFreeStringHandle(this.idInstance, this.hszServer);
        if (this.hszTopic != null) DdeFreeStringHandle(this.idInstance, this.hszTopic);
        if (this.hConvClient != null) DdeDisconnect(this.hConvClient);
        if (this.idInstance != 0) DdeUninitialize(this.idInstance);
    }

    auto execute(in string command)
    {
        DdeInitializeW(&this.idInstance, sumatraDdeCallback, APPCMD_CLIENTONLY, 0);
        if (this.idInstance == 0u) throw new DdemlError("DdeInitializeW error");
        this.hszServer = DdeCreateStringHandleW(this.idInstance, toUTF16z(server), CP_WINUNICODE);
        if (this.hszServer == null) throw new DdemlError("DdeCreateStringHandleW error");
        this.hszTopic = DdeCreateStringHandleW(this.idInstance, toUTF16z(topic), CP_WINUNICODE);
        if (this.hszTopic == null) throw new DdemlError("DdeCreateStringHandleW error");
        this.hConvClient = DdeConnect(this.idInstance, this.hszServer, this.hszTopic, null);
        if (this.hConvClient == null) throw new DdemlError("DdeConnect error");
        this.hDdeData = DdeCreateDataHandle(this.idInstance, toUTF16z(command), to!uint((command.length + 1)*wchar.sizeof), 0, null, CF_UNICODETEXT, 0u);
        if (this.hDdeData == null) throw new DdemlError("DdeCreateDataHandle error");
        this.hDdeTransactionData = DdeClientTransaction(this.hDdeData, cast(uint)-1, this.hConvClient, null, 0, XTYP_EXECUTE, to!uint(TIMEOUT), null);
        if (this.hDdeTransactionData == null) throw new DdemlError("DdeClientTransaction error");

        return;
    }
}

auto
DdeExecute(string server, string topic, string command)
{
    auto dde = DDEClient(server, topic);
    return dde.execute(command);
}

auto
RunSumatraPDF(string pdf)
{
    uint hList;
    EnumWindows(GetSumatraHWND, hList);
    if (existSumatraHWND == true) {
        return;
    }

    immutable keyPath = r"SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\SumatraPDF.exe";
    string sumatrapdf = r"SumatraPDF.exe";
    try {
        auto key = Registry.localMachine.getKey(keyPath);
        auto val = key.getValue(null);
        sumatrapdf = "\"" ~ val.value_SZ() ~ "\"";
    } catch (Exception e) {
        immutable sumatrapdfWin32Default = r"C:\Program Files\SumatraPDF\SumatraPDF.exe";
        immutable sumatrapdfWin64Default = r"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe";
        if (exists(sumatrapdfWin32Default)) {
            sumatrapdf = "\"" ~ sumatrapdfWin32Default ~ "\"";
        } else if (exists(sumatrapdfWin64Default)) {
            sumatrapdf = "\"" ~ sumatrapdfWin64Default ~ "\"";
        } else {
            sumatrapdf = r"C:\Windows\System32\rundll32 shell32,ShellExec_RunDLL SumatraPDF";
        }
    }

    immutable sumatrapdfCommandLine = sumatrapdf ~ " -reuse-instance " ~ "\"" ~ pdf ~ "\"";
    STARTUPINFOW si;
    PROCESS_INFORMATION pi;
    if (CreateProcessW(null, toUTF16z(sumatrapdfCommandLine), null, null, false, 0u, null, null, &si, &pi) == false) {
        throw new Exception("CreateProcessW error");
        return;
    }

    WaitForInputIdle(pi.hProcess, to!uint(TIMEOUT));

    return;
}

auto
Usage(in string[] args)
{
    if (args.length != 4) {
        stderr.writefln("usage: %s pdf tex line", baseName(args[0]));
        exit(2);
    }

    return;
}

void
main(string[] args)
{
    Usage(args);
    immutable pdf = args[1];
    immutable tex = args[2];
    immutable line = args[3];
    try {
        to!int(line);
        RunSumatraPDF(absolutePath(pdf));
        immutable active = 0;
        immutable forwardSearch = "[ForwardSearch(\"" ~ absolutePath(pdf) ~ "\",\"" ~ absolutePath(tex) ~ "\"," ~ line ~ ",0,0," ~ to!string(active) ~ ")]";
        DdeExecute("SUMATRA", "control", forwardSearch);
    } catch (Exception e) {
        stderr.writefln(to!string(e));
        exit(1);
    }
}
```

***
