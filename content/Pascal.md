---
title: "Pascal"
url: "/Pascal/"
date: 2014-06-21T13:04:52Z
pukiwiki: "Pascal"
---

# Pascal

## Pascal {#wce5df79}

<img src="http://upload.wikimedia.org/wikipedia/commons/8/8f/FPClogogif.gif" alt="Pascal" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Summary {#s6ca61dc}

- [http://www.freepascal.org/docs-html/](http://www.freepascal.org/docs-html/)
- [http://www.freepascal.org/docs-html/ref/ref.html](http://www.freepascal.org/docs-html/ref/ref.html)
- [http://computer-programming-forum.com/29-pascal/ced440deb75707a2.htm](http://computer-programming-forum.com/29-pascal/ced440deb75707a2.htm)
- [http://lazpas.e-hiyori.org/wp/](http://lazpas.e-hiyori.org/wp/)
- [Pascal 日和 ホームページ](http://lazpas.e-hiyori.org/hp1/)
    - [Free Pascal コンパイラの設定](http://lazpas.e-hiyori.org/hp1/compiler_freepascal.html)
- [http://merry.whitesnow.jp/SEMIPAS/pastop.html](http://merry.whitesnow.jp/SEMIPAS/pastop.html)
- [http://lagendra.s.kanazawa-u.ac.jp/ogurisu/manuals/pascal2c/doc/index.html](http://lagendra.s.kanazawa-u.ac.jp/ogurisu/manuals/pascal2c/doc/index.html)

## [fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) <a id="fwdsumatrapdf"></a> {#d60ba36b}

### Pascal 版 {#pd28b017}

Free Pascal Compiler version 2.6.4 で動作確認しています．<br>
64-bit Windows の場合は

```
fpc -Twin64 -Px86_64 -Mobjfpc -Ciort -ofwdsumatrapdf.exe fwdsumatrapdf.pas
```

32-bit Windows の場合は

```
fpc -Twin32 -Pi386 -Mobjfpc -Ciort -ofwdsumatrapdf.exe fwdsumatrapdf.pas
```

でビルドします．<br>

***

- fwdsumatrapdf.pas

***

```
// vim: ts=4 sw=4 expandtab:
// >fpc -Twin64 -Px86_64 -Mobjfpc -Ciort -ofwdsumatrapdf.exe fwdsumatrapdf.pas
// >fpc -Twin32 -Pi386 -Mobjfpc -Ciort -ofwdsumatrapdf.exe fwdsumatrapdf.pas

program fwdsumatrapdf;
{$IFDEF FPC}
{$MODE OBJFPC}{$H+}
{$ENDIF}

uses
    SysUtils, Windows;

var
    i: integer;
    idInstance: DWORD = 0;
    hszServer: HSZ = HSZ(nil);
    hszTopic: HSZ = HSZ(nil);
    hConvClient: HCONV = HCONV(nil);
    hDdeData: QWord = QWord(nil);
    hDdeTransactionData: QWord = QWord(nil);
    pdf: UnicodeString;
    tex: UnicodeString;
    lineNumber: UnicodeString;
    command: array [0..1023] of UnicodeChar;
    sumatraPDFRegStrLength: integer;
    sumatraPDFRegistry: array of UnicodeChar;
    sumatraPDFCommandLine: array [0..1023] of UnicodeChar;
    subKey: HKEY;
    dwType: DWORD;
    sz: DWORD;
    sinfo: StartupInfo;
    pinfo: Process_Information;

const
    APPCMD_CLIENTONLY: DWORD = $10;
    CP_WINUNICODE: integer = 1200;
    CF_UNICODETEXT: DWORD = 13;
    XCLASS_FLAGS: DWORD = $4000;
    XTYP_EXECUTE: DWORD = ($0050 or $4000);
    //XTYP_EXECUTE: DWORD = ($0050 or XCLASS_FLAGS);
    TIMEOUT: DWORD = 10000;
    server: array [0..6] of UnicodeChar = 'SUMATRA';
    topic: array [0..6] of UnicodeChar = 'control';
    keyPath: array [0..65] of UnicodeChar = 'SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\SumatraPDF.exe';
    reuseInstance: array [0..16] of UnicodeChar = '" -reuse-instance';

procedure RunSumatraPDF();
begin
    try
        RegOpenKeyExW(HKEY_LOCAL_MACHINE, @keyPath, 0, KEY_QUERY_VALUE, @subKey);
        if subKey = 0 then raise Exception.Create('RegOpenKeyExW error');
        RegQueryValueExW(subKey, nil, nil, @dwType, nil, @sz);
        sumatraPDFRegStrLength := round((sz - 2)/2);
        SetLength(sumatraPDFRegistry, sumatraPDFRegStrLength);
        RegQueryValueExW(subKey, nil, nil, @dwType, PByte(sumatraPDFRegistry), @sz);
    finally
        if subKey <> 0 then begin
            RegCloseKey(subKey);
        end;
    end;
    sumatraPDFCommandLine[0] := '"';
    for i := 0 to sumatraPDFRegStrLength-1 do begin
        sumatraPDFCommandLine[i+1] := sumatraPDFRegistry[i];
    end;
    for i := sumatraPDFRegStrLength to sumatraPDFRegStrLength+Length(reuseInstance)-1 do begin
        sumatraPDFCommandLine[i+1] := reuseInstance[i-sumatraPDFRegStrLength];
    end;
    FillChar(sinfo, SizeOf(StartupInfo), #0);
    FillChar(pinfo, SizeOf(Process_Information), #0);
    sinfo.cb := SizeOf(StartupInfo);
    CreateProcessW(nil, @sumatraPDFCommandLine, nil, nil, False, 0, nil, nil, @sinfo, @pinfo);
    WaitForInputIdle(pinfo.hProcess, TIMEOUT);
end;

procedure DdeExecute(
    var server: array of UnicodeChar;
    var topic: array of UnicodeChar;
    var command: array of UnicodeChar);
begin
    try
        DdeInitializeW(@idInstance, nil, APPCMD_CLIENTONLY, 0);
        if idInstance = 0 then raise Exception.Create('DdeInitializeW error');
        hszServer := DdeCreateStringHandleW(idInstance, @server, CP_WINUNICODE);
        if hszServer = 0 then raise Exception.Create('DdeCreateStringHandleW error');
        hszTopic := DdeCreateStringHandleW(idInstance, @topic, CP_WINUNICODE);
        if hszTopic = 0 then raise Exception.Create('DdeCreateStringHandleW error');
        hConvClient := DdeConnect(idInstance, hszServer, hszTopic, nil);
        if hConvClient = 0 then raise Exception.Create('DdeConnect error');
        hDdeData := DdeCreateDataHandle(idInstance, @command, (Length(command) + 1)*SizeOf(UnicodeChar), 0, QWord(nil), CF_UNICODETEXT, 0);
        if hDdeData = 0 then raise Exception.Create('DdeCreateDataHandle error');
        hDdeTransactionData := DdeClientTransaction(PByte(hDdeData), DWORD(-1), hConvClient, QWord(nil), 0, XTYP_EXECUTE, TIMEOUT, nil);
        if hDdeTransactionData = 0 then raise Exception.Create('DdeClientTransaction error');
    finally
        if hDdeTransactionData <> 0 then DdeFreeDataHandle(hDdeTransactionData);
        if hDdeData <> 0 then DdeFreeDataHandle(hDdeData);
        if hszServer <> 0 then DdeFreeStringHandle(idInstance, hszServer);
        if hszTopic <> 0 then DdeFreeStringHandle(idInstance, hszTopic);
        if hConvClient <> 0 then DdeDisconnect(hConvClient);
        if idInstance <> 0 then DdeUninitialize(idInstance);
    end;
end;

begin
    if ParamCount <> 3 then begin
        Writeln(StdErr, 'Usage: fwdsumatrapdf pdf tex line');
        Halt(2);
    end;
    for i := 1 to ParamCount do begin
        case i of
            1: pdf := ParamStr(1);
            2: tex := ParamStr(2);
            3: lineNumber := ParamStr(3);
            else break;
        end;
    end;
    command := '[ForwardSearch("' + pdf + '","' + tex + '",' + lineNumber + ',0,0,0)]';
    try
        RunSumatraPDF();
        DdeExecute(server, topic, command);
    except
        on Ex: Exception do begin
            Writeln(StdErr, Ex.Message);
            Halt(1);
        end;
    end;
end.
```

***
