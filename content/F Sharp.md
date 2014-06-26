---
title: "F Sharp"
url: "/F Sharp/"
date: 2013-08-07T02:37:49Z
pukiwiki: "F Sharp"
---

# F Sharp

## F# {#e8696677}

<img src="http://upload.wikimedia.org/wikipedia/commons/9/93/FSharp_Logo.png" alt="F#" width="400" height="277" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Summary {#ff18d823}

- [The F# Software Foundation](http://fsharp.org/)
- [F# at Microsoft Research - Microsoft Research](http://research.microsoft.com/fsharp/)
- [http://msdn.microsoft.com/ja-jp/library/dd233154.aspx](http://msdn.microsoft.com/ja-jp/library/dd233154.aspx)
- [http://msdn.microsoft.com/ja-jp/library/vstudio/dd233154.aspx](http://msdn.microsoft.com/ja-jp/library/vstudio/dd233154.aspx)
- [http://qiita.com/tags/fsharp](http://qiita.com/tags/fsharp)
- [F#入門](http://fsharp.web.fc2.com/)
- [F# - 七誌の開発Wiki](http://seesaawiki.jp/w/n7shi/d/F%23)
- [静的に型付けされた関数型プログラミング言語を使用するべきではない10の理由](https://github.com/yukitos/notes/blob/master/tenreasons/index.md)
- [F# Advent Calendar 2013](http://connpass.com/event/3935/)
- [http://fsharp.github.io/FAKE/](http://fsharp.github.io/FAKE/)

### F# → JavaScript {#c5c64235}

- [WebSharper](http://www.websharper.com/)

### インストール {#s1f0cd41}

#### Windows {#a1ea7f03}

[Use F# on Windows](http://fsharp.org/use/windows/)<br>
[Announcing Visual F# Tools 3.1.1, with support for Desktop and Web express](http://blogs.msdn.com/b/fsharpteam/archive/2014/01/22/announcing-visual-f-3-1-1-and-support-for-desktop-express.aspx)<br>

を参照．<br>

[Microsoft Visual Studio Express 2013 for Windows Desktop](http://www.microsoft.com/ja-jp/download/details.aspx?id=40787) または [Microsoft Visual Studio Express 2013 for Web](http://www.microsoft.com/ja-jp/download/details.aspx?id=40747) を使用している場合は [Visual F# Out of Band Release 3.1.1](http://www.microsoft.com/en-us/download/details.aspx?id=41654) をインストールすれば F# が使用できます．<br>

#### OS X {#ja93cdf9}

[Use F# on Mac OSX](http://fsharp.org/use/mac/)<br>
[MacでF#](http://qiita.com/disktnk/items/cb643ac86c0fd5a0bba2)<br>

を参照．<br>

#### Linux {#z59322bf}

[Use F# on Linux](http://fsharp.org/use/linux/) を参照．<br>

#### Arch Linux {#pfcfbb1b}

- [https://aur.archlinux.org/packages/fsharp/](https://aur.archlinux.org/packages/fsharp/)

### 派生版 {#p7256a00}

#### F\* {#q4500a04}

- [http://research.microsoft.com/en-us/projects/fstar/](http://research.microsoft.com/en-us/projects/fstar/)
- [https://github.com/FStarLang/FStar](https://github.com/FStarLang/FStar)
- [Wikipedia.en:F\*\_(programming_language)](https://en.wikipedia.org/wiki/F%2A_%28programming_language%29)

## [fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) <a id="fwdsumatrapdf"></a> {#d94cb19a}

### F# 版 {#cfffdb72}

F# 版の fwdsumatrapdf のビルド・実行には F# が必要です．<br>

- fwdsumatrapdf の作成方法
    - F# をインストールします．
    - C:\texlive\2014\bin\win32\fwdsumatrapdf.fs または C:\texlive\2014\bin\win32\fwdsumatrapdf.fsx を作成します．

***

- C:\texlive\2014\bin\win32\fwdsumatrapdf.fs
- C:\texlive\2014\bin\win32\fwdsumatrapdf.fsx

***

```
// vim: ts=4 sw=4 expandtab:
// >fsc -r:Microsoft.VisualBasic.dll fwdsumatrapdf.fs
// >fsc -r:Microsoft.VisualBasic.dll fwdsumatrapdf.fsx
#if INTERACTIVE
#r @"Microsoft.VisualBasic.dll"
#endif

#light

module Fwdsumatrapdf

module Ddeml =
    open System
    open System.Runtime.InteropServices

    //exception DdemlError of string
    type DdemlError (e) = inherit Exception (e)
    type DdeCallback = delegate of uint32 * uint32 * nativeint * nativeint * nativeint * nativeint * uint32 * uint32 -> nativeint
    let APPCMD_CLIENTONLY = 0x10u
    let CP_WINUNICODE = 1200
    let CF_UNICODETEXT = 13u
    let XCLASS_FLAGS = 0x4000u
    let XTYP_EXECUTE = (0x0050u ||| XCLASS_FLAGS)
    [<DllImport(@"user32.dll", EntryPoint="DdeInitializeW", CharSet=CharSet.Unicode)>]
    extern uint32 DdeInitializeW (uint32&, DdeCallback, uint32, uint32)
    [<DllImport(@"user32.dll", EntryPoint="DdeUninitialize", CharSet=CharSet.Unicode)>]
    extern bool DdeUninitialize (uint32)
    [<DllImport(@"user32.dll", EntryPoint="DdeCreateStringHandleW", CharSet=CharSet.Unicode)>]
    extern nativeint DdeCreateStringHandleW (uint32, string, int)
    [<DllImport(@"user32.dll", EntryPoint="DdeFreeStringHandle", CharSet=CharSet.Unicode)>]
    extern bool DdeFreeStringHandle (uint32, nativeint)
    [<DllImport(@"user32.dll", EntryPoint="DdeCreateDataHandle", CharSet=CharSet.Unicode)>]
    extern nativeint DdeCreateDataHandle (uint32, string, uint32, uint32, nativeint, uint32, uint32)
    [<DllImport(@"user32.dll", EntryPoint="DdeFreeDataHandle", CharSet=CharSet.Unicode)>]
    extern bool DdeFreeDataHandle (nativeint)
    [<DllImport(@"user32.dll", EntryPoint="DdeConnect", CharSet=CharSet.Unicode)>]
    extern nativeint DdeConnect (uint32, nativeint, nativeint, nativeint)
    [<DllImport(@"user32.dll", EntryPoint="DdeDisconnect", CharSet=CharSet.Unicode)>]
    extern bool DdeDisconnect (nativeint)
    [<DllImport(@"user32.dll", EntryPoint="DdeClientTransaction", CharSet=CharSet.Unicode)>]
    extern nativeint DdeClientTransaction (nativeint, uint32, nativeint, nativeint, uint32, uint32, uint32, nativeint)

module SumatraPDFClient =
    open System
    open System.IO
    open System.Diagnostics
    open System.ComponentModel
    open Microsoft.Win32
    open Microsoft.VisualBasic

    let timeout = 10000

    let Usage args = do
#if INTERACTIVE
        let s = "usage: fsi " + fsi.CommandLineArgs.[0] + " pdffile texfile line"
#else
        let s = "usage: " + (Environment.GetCommandLineArgs ()).[0] + " pdffile texfile line"
#endif
        match Array.length args with
        | 3 -> ()
        | _ -> do
            Console.Error.WriteLine s
            Environment.Exit 2

    let RunSumatraPDF pdf = do
        match Process.GetProcessesByName "SumatraPDF" |> Array.length with
        | 0 -> do
            let ps = new Process ()
            try
                let registryValue = ref "SumatraPDF.exe"
                let keyPath = @"SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\SumatraPDF.exe"
                using (Registry.LocalMachine.OpenSubKey keyPath) ( fun rKey ->
                    registryValue := String.Empty |> rKey.GetValue |> string
                )
                let sumatrapdfRegistry = !registryValue
                match File.Exists sumatrapdfRegistry with
                | true  -> ps.StartInfo.FileName <- sumatrapdfRegistry
                | false -> new FileNotFoundException "File Not Found." |> raise
            with
                | e -> do
                     let sumatrapdfWin32Default = @"C:\Program Files\SumatraPDF\SumatraPDF.exe"
                     let sumatrapdfWin64Default = @"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe"
                     match (File.Exists sumatrapdfWin32Default, File.Exists sumatrapdfWin64Default) with
                     | (true, true)   -> ps.StartInfo.FileName <- sumatrapdfWin32Default
                     | (true, false)  -> ps.StartInfo.FileName <- sumatrapdfWin32Default
                     | (false, true)  -> ps.StartInfo.FileName <- sumatrapdfWin64Default
                     | (false, false) -> ps.StartInfo.FileName <- Interaction.InputBox ("Input the path to SumatraPDF.exe.", "fwdsumatrapdf", "SumatraPDF.exe")
            ps.StartInfo.Arguments <- "-reuse-instance " + "\"" + pdf + "\""
            ps.Start () |> ignore
            ps.WaitForInputIdle timeout |> ignore
        | _ -> ()

    let DdeExecute server topic command = do
        let mutable idInstance = 0u
        let mutable hszServer = 0n
        let mutable hszTopic = 0n
        let mutable hConvClient = 0n
        let mutable hDdeData = 0n
        let mutable hDdeTransactionData = 0n
        try
            Ddeml.DdeInitializeW (&idInstance, new Ddeml.DdeCallback (fun uType uFmt hconv hsz1 hsz2 hdata dwData1 dwData2 -> 0n), Ddeml.APPCMD_CLIENTONLY, 0u) |> ignore
            if idInstance = 0u then new Ddeml.DdemlError "DdeInitializeW error" |> raise
            hszServer <- Ddeml.DdeCreateStringHandleW (idInstance, server, Ddeml.CP_WINUNICODE)
            if hszServer = 0n then new Ddeml.DdemlError "DdeCreateStringHandleW error" |> raise
            hszTopic <- Ddeml.DdeCreateStringHandleW (idInstance, topic, Ddeml.CP_WINUNICODE)
            if hszTopic = 0n then new Ddeml.DdemlError "DdeCreateStringHandleW error" |> raise
            hConvClient <- Ddeml.DdeConnect (idInstance, hszServer, hszTopic, 0n)
            if hConvClient = 0n then new Ddeml.DdemlError "DdeConnect error" |> raise
            hDdeData <- Ddeml.DdeCreateDataHandle (idInstance, command, uint32 ((String.length command + 1)*sizeof<char>), 0u, 0n, Ddeml.CF_UNICODETEXT, 0u)
            if hDdeData = 0n then new Ddeml.DdemlError "DdeCreateDataHandle error" |> raise
            hDdeTransactionData <- Ddeml.DdeClientTransaction (hDdeData, uint32 -1, hConvClient, 0n, 0u, Ddeml.XTYP_EXECUTE, uint32 timeout, 0n)
            if hDdeTransactionData = 0n then new Ddeml.DdemlError "DdeClientTransaction error" |> raise
        finally
            if hDdeTransactionData <> 0n then Ddeml.DdeFreeDataHandle (hDdeTransactionData) |> ignore
            if hDdeData <> 0n then Ddeml.DdeFreeDataHandle (hDdeData) |> ignore
            if hszServer <> 0n then Ddeml.DdeFreeStringHandle (idInstance, hszServer) |> ignore
            if hszTopic <> 0n then Ddeml.DdeFreeStringHandle (idInstance, hszTopic) |> ignore
            if hConvClient <> 0n then Ddeml.DdeDisconnect (hConvClient) |> ignore
            if idInstance <> 0u then Ddeml.DdeUninitialize (idInstance) |> ignore

    let Main args = do
        Usage args
        let pdf = args.[0]
        let tex = args.[1]
        let line = args.[2]
        try
            int line |> ignore
            RunSumatraPDF pdf
            let active = 0
            let forwardSearch = "[ForwardSearch(\"" + pdf + "\",\"" + tex + "\"," + line + ",0,0," + string active + ")]"
            DdeExecute "SUMATRA" "control" forwardSearch
        with
            | :? Win32Exception as e -> do
                 Console.Error.WriteLine e.Message
                 Environment.Exit -3
            | :? InvalidOperationException as e -> do
                 Console.Error.WriteLine e.Message
                 Environment.Exit -2
            | e -> do
                 Console.Error.WriteLine e.Message
                 Environment.Exit -1

module Main =
    open System
    open SumatraPDFClient

#if INTERACTIVE
    fsi.CommandLineArgs |> Array.toList |> List.tail |> List.toArray |> Main
#else
    [<EntryPoint; STAThread>]
    let EntryPoint args =
        Main args
        0
#endif
```

***

- fwdsumatrapdf.fs または fwdsumatrapdf.fsx をビルドして fwdsumatrapdf.exe を作成します．

C:\texlive\2014\bin\win32\fwdsumatrapdf.fsx を fsc.exe でコンパイルすると C:\texlive\2014\bin\win32\fwdsumatrapdf.exe が作成されます．<br>
コマンドラインからビルドする場合は以下のようにしてビルドします．<br>

```
>C:
>cd C:\texlive\2014\bin\win32
C:\texlive\2014\bin\win32>fsc -r:Microsoft.VisualBasic.dll fwdsumatrapdf.fs
C:\texlive\2014\bin\win32>fsc -r:Microsoft.VisualBasic.dll fwdsumatrapdf.fsx
```

上記のコマンドでうまく動作しない場合は

```
C:\texlive\2014\bin\win32>fsc -r:Microsoft.VisualBasic.dll -r:System.ServiceModel.Internals -r:SMDiagnostics --standalone fwdsumatrapdf.fs
C:\texlive\2014\bin\win32>fsc -r:Microsoft.VisualBasic.dll -r:System.ServiceModel.Internals -r:SMDiagnostics --standalone fwdsumatrapdf.fsx
```

***

- 64-bit Windows の場合

***

```
C:.
├─texlive
│  └─2014
│      └─bin
│          └─win32
│              ├─fwdsumatrapdf.exe
│              ├─fwdsumatrapdf.fs
│              └─fwdsumatrapdf.fsx
└─Program Files (x86)
    └─Microsoft SDKs
        └─F#
            └─3.1
                └─Framework
                    └─v4.0
                        ├─Fsc.exe
                        └─Fsi.exe
```

***

- 32-bit Windows の場合

***

```
C:.
├─texlive
│  └─2014
│      └─bin
│          └─win32
│              ├─fwdsumatrapdf.exe
│              ├─fwdsumatrapdf.fs
│              └─fwdsumatrapdf.fsx
└─Program Files
    └─Microsoft SDKs
        └─F#
            └─3.1
                └─Framework
                    └─v4.0
                        ├─Fsc.exe
                        └─Fsi.exe
```

***

fwdsumatrapdf.fsx のように拡張子を .fsx とすればビルドせずに fsi.exe で実行することが可能です．<br>
ただしビルドした場合に比べると動作は遅くなります．<br>

```
>fsi C:\texlive\2014\bin\win32\fwdsumatrapdf.fsx hoge.pdf hoge.tex 30
```

引数に渡すパラメータや状況によって例外が発生することがあります．<br>
