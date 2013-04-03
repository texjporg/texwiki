---
title: "SumatraPDF"
url: "/SumatraPDF/"
date: 2012-12-28T22:22:46Z
bookCollapseSection: true
pukiwiki: "SumatraPDF"
---

# SumatraPDF

## [SumatraPDF](http://blog.kowalczyk.info/software/sumatrapdf/) {#afa7a42e}

<img src="http://sumatrapdf.googlecode.com/svn/trunk/gfx/SumatraPDF-256x256x32.png" alt="SumatraPDF" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## SumatraPDF とは {#td9ee2f0}

SumatraPDF は PDF, ePub, MOBI, CHM, XPS, DjVu, CBZ, CBR リーダーです．<br>
SyncTeX に対応しています．<br>
ファイルの自動更新機能もあります．<br>
[Adobe Reader](</Adobe Reader/>) よりも TeX のプレビューアに向いています．<br>
PDF ファイルだけではなく PostScript ファイルも表示可能です．([Ghostscript](/Ghostscript/) が必要です．)<br>
プレビューする場合に複数の SumatraPDF が起動するのを防止したい場合は -reuse-instance オプションを追加します．<br>
forward search を行う場合は -forward-search &lt;texfile> &lt;linenumber> オプションを追加します．<br>

- [SumatraPDF 公式サイト](http://blog.kowalczyk.info/software/sumatrapdf/)
    - [News](http://blog.kowalczyk.info/software/sumatrapdf/news.html)
    - [ダウンロード](http://blog.kowalczyk.info/software/sumatrapdf/download-free-pdf-viewer-ja.html)
    - [SumatraPDF pre-release builds](http://blog.kowalczyk.info/software/sumatrapdf/prerelease.html) テスト用のプレリリースビルド版
- [sumatrapdf - PDF viewer for Windows - Google Project Hosting](https://code.google.com/p/sumatrapdf/)
    - [コミットログ](https://code.google.com/p/sumatrapdf/source/list)
    - [Wiki](https://code.google.com/p/sumatrapdf/w/)
        - [DDEcommands ](https://code.google.com/p/sumatrapdf/wiki/DDEcommands)
- [Sumatra PDF Viewer forum](http://forums.fofou.org/sumatrapdf/)
    - [forward search fails in texlive 2011](http://forums.fofou.org/sumatrapdf/topic?id=2131346)
    - [Forward search from Vim to sumatrapdf](http://forums.fofou.org/sumatrapdf/topic?id=2353338)

### 動作環境 {#z85aa9cd}

Windows 8, 7, Vista, XP

### License {#f48c8095}

[GPLv3](https://code.google.com/p/sumatrapdf/source/browse/trunk/COPYING)

### リリース情報/ChangeLog {#b67b5a28}

[News](http://blog.kowalczyk.info/software/sumatrapdf/news.html)<br>
[コミットログ](https://code.google.com/p/sumatrapdf/source/list)<br>

を参照．<br>

v1.9 から コマンドラインオプション (-forward-search &lt;texfile> &lt;linenumber>) を指定して forward search ができるようになりました． ([SumatraPDF v1.9.4622](https://code.google.com/p/sumatrapdf/source/detail?r=4622) を参照)<br>
v1.6 から PostScript ファイルの表示にも対応しました．([Ghostscript](/Ghostscript/) が必要です．)<br>

### 派生版・独自ビルド版 {#i2d3e037}

- [SumatraPDF 先読み対応バージョン](https://gist.github.com/miau/5277670)
- [PDFlite](http://www.pdflite.com/)
- [XhmikosR's builds home/sumatrapdf/](http://xhmikosr.1f0.de/index.php?folder=c3VtYXRyYXBkZg==)
- 最適化ビルド版の [SumatraPDF x86/x64 Optimized Builds](http://guti.is-great.org/static.php?page=SumatraPDFOpt)
- [PortableApps.com](http://portableapps.com/) の [SumatraPDF Portable](http://portableapps.com/apps/office/sumatra_pdf_portable)
- TeX ユーザのための [SumatraPDF-TeX](http://william.famille-blum.org/software/sumatra/) → 本家にマージされました．

## forward search {#m71d9172}

forward search を行うには TeX コマンドのオプションに -synctex=1 または -synctex=-1 を追加する必要があります．<br>
SumatraPDF v1.9 以降はコマンドラインオプション (-forward-search &lt;texfile> &lt;linenumber>) を指定して forward search を行うことが可能です．<br>

以下のエディタ・マクロ・プラグインは SumatraPDF v1.9 以降で forward and inverse search が可能です．

■ フリーソフトウェア (オープンソースソフトウェア)

- [LyX](/LyX/)
- [Texmaker](/Texmaker/)
- [TeXstudio](/TeXstudio/)
- [TeXnicCenter](/TeXnicCenter/)
- [Eclipse](/Eclipse/)
    - [TeXlipse](/TeXlipse/)
- [Emacs](/Emacs/)
    - [TeX mode](/Emacs/#tex-mode)
    - [AUCTeX](/AUCTeX/)
    - [YaTeX](/YaTeX/)
- [Vim](/Vim/)
    - [tex.vim](/Vim/#y0b061e7)
    - [Vim-LaTeX](/Vim-LaTeX/)
- [Notepad++](/Notepad++/)
    - [NppExec](/NppExec/)
    - [MTeX for Notepad++](</MTeX for Notepad++/>)
- [サクラエディタ](</サクラエディタ/>)
    - [SumatraPDF.js](</サクラエディタ/#s758d3d9>)
- [xyzzy](/xyzzy/)
    - KyoTeX
    - [KaTeX](/KaTeX/)

■ フリーウェア (無料)

- EasyTeX
- [WinShell](/WinShell/)
- Visual Windows for TeX
- Mery
    - SumatraPDF.js
- gPad
    - SumatraPDF.js

■ シェアウェア

- [秀丸エディタ](</秀丸エディタ/>) (シェアウェア)
    - [SumatraPDF.mac](</秀丸エディタ/#y16d42fd>)
    - 祝鳥 (のりてふ)
- Sublime Text (シェアウェア)
    - LaTeXTools (LaTeX Plugin for Sublime Text 2)

### fwdsumatrapdf.exe <a id="fwdsumatrapdf"></a> {#n8da77e2}

fwdsumatrapdf.exe は SumatraPDF で forward search を行うツールです．<br>
forward search を行うには TeX コマンドのオプションに -synctex=1 または -synctex=-1 を追加する必要があります．<br>

#### お知らせ {#ebfb06f5}

SumatraPDF v1.9 から コマンドラインオプション -forward-search &lt;texfile> &lt;linenumber> による forward search に対応しました．<br>
forward search するときに SumatraPDF を前面に表示したい場合は fwdsumatrapdf.exe を使用せずに SumatraPDF のコマンドラインオプションを使用してください．<br>
forward search するときに SumatraPDF を前面に表示したくない場合は fwdsumatrapdf.exe を使ってください．<br>
ただし，SumatraPDF の起動時は SumatraPDF が前面に表示されます．<br>

#### F# 版 {#pd9dd173}

F# 版の fwdsumatrapdf.exe のビルド・実行には [F#](http://fsharp.org/) が必要です．<br>

- fwdsumatrapdf.exe の作成方法
    - [F#](http://fsharp.org/) をインストールします．
        - F# 3.0 でビルドできます．Windows 8, Windows 7 SP1 では [F# Tools for Visual Studio Express 2012 for Web](http://www.microsoft.com/en-us/download/details.aspx?id=34675) をダウンロードしてインストールすれば F# 3.0 が使用できます．F# Tools for Visual Studio Express 2012 for Web は Visual Studio Express 2012 をインストールしなくても使用可能ですが F# でプログラムを作成したい方は Visual Studio Express 2012 をインストールすることをおすすめします．(Windows 7 SP1 の場合は .NET Framework 4.5 をインストールする必要があります)
        - F# 2.0 でもビルドできます．Windows Vista, XP では Visual Studio Express 2012 が動作しないので Windows Vista, XP の場合は F# 2.0 を使用してください．F# 2.0 の場合は ([Microsoft F#, April 2011 Community Technology Preview](http://www.microsoft.com/download/en/details.aspx?id=11100)) をダウンロードしてインストールします．
    - C:\w32tex\bin\fwdsumatrapdf.fs または C:\w32tex\bin\fwdsumatrapdf.fsx を作成します．

***

- C:\w32tex\bin\fwdsumatrapdf.fs
- C:\w32tex\bin\fwdsumatrapdf.fsx

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

C:\w32tex\bin\fwdsumatrapdf.fsx を fsc.exe でコンパイルすると C:\w32tex\bin\fwdsumatrapdf.exe が作成されます．<br>
コマンドラインからビルドする場合は以下のようにしてビルドします．<br>

```
>C:
>cd C:\w32tex\bin
```

- F# 3.0 の場合

```
C:\w32tex\bin>fsc -r:Microsoft.VisualBasic.dll fwdsumatrapdf.fs
C:\w32tex\bin>fsc -r:Microsoft.VisualBasic.dll fwdsumatrapdf.fsx
```

上記のコマンドでうまく動作しない場合は

```
C:\w32tex\bin>fsc -r:Microsoft.VisualBasic.dll -r:System.ServiceModel.Internals -r:SMDiagnostics --standalone fwdsumatrapdf.fs
C:\w32tex\bin>fsc -r:Microsoft.VisualBasic.dll -r:System.ServiceModel.Internals -r:SMDiagnostics --standalone fwdsumatrapdf.fsx
```

- F# 2.0 の場合

```
C:\w32tex\bin>fsc -r:Microsoft.VisualBasic.dll fwdsumatrapdf.fs
C:\w32tex\bin>fsc -r:Microsoft.VisualBasic.dll fwdsumatrapdf.fsx
```

上記のコマンドでうまく動作しない場合は

```
C:\w32tex\bin>fsc -r:Microsoft.VisualBasic.dll --standalone fwdsumatrapdf.fs
C:\w32tex\bin>fsc -r:Microsoft.VisualBasic.dll --standalone fwdsumatrapdf.fsx
```

***

- 32bit Windows の場合

***

```
C:.
├─w32tex
│  └─bin
│      ├─fwdsumatrapdf.exe
│      ├─fwdsumatrapdf.fs
│      └─fwdsumatrapdf.fsx
└─Program Files
    └─Microsoft SDKs
        └─F#
            └─3.0
                └─Framework
                    └─v4.0
                        ├─Fsc.exe
                        └─Fsi.exe
```

***

- 64bit Windows の場合

***

```
C:.
├─w32tex
│  └─bin
│      ├─fwdsumatrapdf.exe
│      ├─fwdsumatrapdf.fs
│      └─fwdsumatrapdf.fsx
└─Program Files (x86)
    └─Microsoft SDKs
        └─F#
            └─3.0
                └─Framework
                    └─v4.0
                        ├─Fsc.exe
                        └─Fsi.exe
```

***

fwdsumatrapdf.fsx のように拡張子を .fsx とすればビルドせずに fsi.exe で実行することが可能です．<br>
ただしビルドした場合に比べると動作は遅くなります．<br>

```
>fsi C:\w32tex\bin\fwdsumatrapdf.fsx hoge.pdf hoge.tex 30
```

引数に渡すパラメータや状況によって例外が発生することがあります．<br>

- F# 2.0 でビルドする場合の注意点

F# 2.0 でビルドするときに --standalone オプションを追加しなかった場合，環境によっては fwdsumatrapdf.exe を実行したときに以下のような例外が発生するかもしれません．

```
ハンドルされていない例外: System.IO.FileNotFoundException: ファイルまたはアセン
ブリ 'FSharp.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=????????????
????'、またはその依存関係の 1 つが読み込めませんでした。指定されたファイルが見つ
かりません。
ファイル名 'FSharp.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=??????
??????????' です。
   場所 Fwdsumatrapdf.SumatraPDFClient.Main(String[] args)
   場所 Fwdsumatrapdf.Main.EntryPoint(String[] args)
```

上記のエラーが発生する場合は以下のように --standalone オプションを追加してビルドしてください．

```
>C:
>cd C:\w32tex\bin
C:\w32tex\bin>fsc -r:Microsoft.VisualBasic.dll --standalone fwdsumatrapdf.fs
C:\w32tex\bin>fsc -r:Microsoft.VisualBasic.dll --standalone fwdsumatrapdf.fsx
```

F# 2.0 でビルドするときに --standalone オプションを追加した場合以下の警告が表示されるかもしれませんが実行できるので気にしないでください．

```
warning FS2009: Ignoring mixed managed/unmanaged assembly 'System.Data' during s
tatic linking

warning FS2009: Ignoring mixed managed/unmanaged assembly 'System.Transactions'
during static linking

warning FS2009: Ignoring mixed managed/unmanaged assembly 'System.Data.OracleCli
ent' during static linking
```

<!-- F# 3.0 の場合 -->
<!--  -->
<!-- warning FS2011: Assembly 'System.ServiceModel.Internals' was referenced transiti -->
<!-- vely and the assembly could not be resolved automatically. Static linking will a -->
<!-- ssume this DLL has no dependencies on the F# library or other statically linked -->
<!-- DLLs. Consider adding an explicit reference to this DLL. -->
<!--  -->
<!-- warning FS2011: Assembly 'SMDiagnostics' was referenced transitively and the ass -->
<!-- embly could not be resolved automatically. Static linking will assume this DLL h -->
<!-- as no dependencies on the F# library or other statically linked DLLs. Consider a -->
<!-- dding an explicit reference to this DLL. -->

#### C# 版 {#de1b4851}

C# 版も作成してみました．<br>
コマンドラインからビルドする場合は以下のようにしてビルドします．<br>

```
>C:
>cd C:\w32tex\bin
C:\w32tex\bin>csc /r:Microsoft.VisualBasic.dll fwdsumatrapdf.cs
```

Mono C# compiler (mcs) でもビルドできます．<br>

```
>C:
>cd C:\w32tex\bin
C:\w32tex\bin>mcs -r:Microsoft.VisualBasic.dll fwdsumatrapdf.cs
```

***

- C:\w32tex\bin\fwdsumatrapdf.cs

***

```
// vim: ts=4 sw=4 expandtab:
// >csc /r:Microsoft.VisualBasic.dll fwdsumatrapdf.cs
// >mcs -r:Microsoft.VisualBasic.dll fwdsumatrapdf.cs

namespace Ddeml
{
    using System;
    using System.Runtime.InteropServices;

    public class Ddeml
    {
        public class DdemlError : Exception
        {
            public DdemlError(string e) : base(e)
            {
            }
        }
        public delegate IntPtr DdeCallback(uint uType, uint uFmt, IntPtr hconv, IntPtr hsz1, IntPtr hsz2, IntPtr hdata, uint dwData1, uint dwData2);
        public const uint APPCMD_CLIENTONLY = 0x10u;
        public const int CP_WINUNICODE = 1200;
        public const uint CF_UNICODETEXT = 13u;
        public const uint XCLASS_FLAGS = 0x4000u;
        public const uint XTYP_EXECUTE = (0x0050u | XCLASS_FLAGS);
        [DllImport(@"user32.dll", EntryPoint="DdeInitializeW", CharSet=CharSet.Unicode)]
        public static extern uint DdeInitializeW(ref uint pidInst, DdeCallback pfnCallback, uint afCmd, uint ulRes);
        [DllImport(@"user32.dll", EntryPoint="DdeUninitialize", CharSet=CharSet.Unicode)]
        public static extern bool DdeUninitialize(uint idInst);
        [DllImport(@"user32.dll", EntryPoint="DdeCreateStringHandleW", CharSet=CharSet.Unicode)]
        public static extern IntPtr DdeCreateStringHandleW(uint idInst, string psz, int iCodePage);
        [DllImport(@"user32.dll", EntryPoint="DdeFreeStringHandle", CharSet=CharSet.Unicode)]
        public static extern bool DdeFreeStringHandle(uint idInst, IntPtr hsz);
        [DllImport(@"user32.dll", EntryPoint="DdeCreateDataHandle", CharSet=CharSet.Unicode)]
        public static extern IntPtr DdeCreateDataHandle(uint idInst, string pSrc, uint cb, uint cbOff, IntPtr hszItem, uint wFmt, uint afCmd);
        [DllImport(@"user32.dll", EntryPoint="DdeFreeDataHandle", CharSet=CharSet.Unicode)]
        public static extern bool DdeFreeDataHandle(IntPtr hData);
        [DllImport(@"user32.dll", EntryPoint="DdeConnect", CharSet=CharSet.Unicode)]
        public static extern IntPtr DdeConnect(uint idInst, IntPtr hszServer, IntPtr hszTopic, IntPtr pCC);
        [DllImport(@"user32.dll", EntryPoint="DdeDisconnect", CharSet=CharSet.Unicode)]
        public static extern bool DdeDisconnect(IntPtr hConvList);
        [DllImport(@"user32.dll", EntryPoint="DdeClientTransaction", CharSet=CharSet.Unicode)]
        public static extern IntPtr DdeClientTransaction(IntPtr pData, uint cbData, IntPtr hConv, IntPtr hszItem, uint wFmt, uint wType, uint dwTimeout, IntPtr pdwResult);
    }
}

namespace SumatraPDFClient
{
    using System;
    using System.IO;
    using System.Diagnostics;
    using System.ComponentModel;
    using Microsoft.Win32;
    using Microsoft.VisualBasic;
    using Ddeml;

    public class ForwardSearch
    {
        private const int timeout = 10000;

        private static void Usage(string[] args)
        {
            var s = "usage: " + Environment.GetCommandLineArgs()[0] + " pdffile texfile line";
            if (args.Length == 3) {
                return;
            }
            else {
                Console.Error.WriteLine(s);
                Environment.Exit(2);
            }
        }

        private static void RunSumatraPDF(string pdf)
        {
            if (Process.GetProcessesByName("SumatraPDF").Length != 0) {
                return;
            }
            else {
                var ps = new Process();
                try {
                    var sumatrapdfRegistry = "SumatraPDF.exe";
                    var keyPath = @"SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\SumatraPDF.exe";
                    using (var rKey = Registry.LocalMachine.OpenSubKey(keyPath)) {
                        sumatrapdfRegistry = rKey.GetValue(string.Empty).ToString();
                    }
                    if (File.Exists(sumatrapdfRegistry)) {
                        ps.StartInfo.FileName = sumatrapdfRegistry;
                    }
                    else {
                        throw new FileNotFoundException();
                    }
                }
                catch (Exception) {
                    var sumatrapdfWin32Default = @"C:\Program Files\SumatraPDF\SumatraPDF.exe";
                    var sumatrapdfWin64Default = @"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe";
                    if (File.Exists(sumatrapdfWin32Default)) {
                        ps.StartInfo.FileName = sumatrapdfWin32Default;
                    }
                    else if (File.Exists(sumatrapdfWin64Default)) {
                        ps.StartInfo.FileName = sumatrapdfWin64Default;
                    }
                    else {
                        ps.StartInfo.FileName = Interaction.InputBox("Input the path to SumatraPDF.exe.", "fwdsumatrapdf", "SumatraPDF.exe");
                    }
                }
                ps.StartInfo.Arguments = "-reuse-instance " + "\"" + pdf + "\"";
                ps.Start();
                ps.WaitForInputIdle(timeout);
            }
        }

        private static void DdeExecute(string server, string topic, string command)
        {
            var idInstance = 0u;
            var hszServer = IntPtr.Zero;
            var hszTopic = IntPtr.Zero;
            var hConvClient = IntPtr.Zero;
            var hDdeData = IntPtr.Zero;
            var hDdeTransactionData = IntPtr.Zero;
            try {
                Ddeml.DdeInitializeW(ref idInstance, (uType, uFmt, hconv, hsz1, hsz2, hdata, dwData1, dwData2) => IntPtr.Zero, Ddeml.APPCMD_CLIENTONLY, 0u);
                if (idInstance == 0u) throw new Ddeml.DdemlError("DdeInitializeW error");
                hszServer = Ddeml.DdeCreateStringHandleW(idInstance, server, Ddeml.CP_WINUNICODE);
                if (hszServer == IntPtr.Zero) throw new Ddeml.DdemlError("DdeCreateStringHandleW error");
                hszTopic = Ddeml.DdeCreateStringHandleW(idInstance, topic, Ddeml.CP_WINUNICODE);
                if (hszTopic == IntPtr.Zero) throw new Ddeml.DdemlError("DdeCreateStringHandleW error");
                hConvClient = Ddeml.DdeConnect(idInstance, hszServer, hszTopic, IntPtr.Zero);
                if (hConvClient == IntPtr.Zero) throw new Ddeml.DdemlError("DdeConnect error");
                hDdeData = Ddeml.DdeCreateDataHandle(idInstance, command, (uint)((command.Length + 1)*sizeof(char)), 0u, IntPtr.Zero, Ddeml.CF_UNICODETEXT, 0u);
                if (hDdeData == IntPtr.Zero) throw new Ddeml.DdemlError("DdeCreateDataHandle error");
                hDdeTransactionData = Ddeml.DdeClientTransaction(hDdeData, unchecked((uint)-1), hConvClient, IntPtr.Zero, 0u, Ddeml.XTYP_EXECUTE, (uint)timeout, IntPtr.Zero);
                if (hDdeTransactionData == IntPtr.Zero) throw new Ddeml.DdemlError("DdeClientTransaction error");
            }
            finally {
                if (hDdeTransactionData != IntPtr.Zero) Ddeml.DdeFreeDataHandle(hDdeTransactionData);
                if (hDdeData != IntPtr.Zero) Ddeml.DdeFreeDataHandle(hDdeData);
                if (hszServer != IntPtr.Zero) Ddeml.DdeFreeStringHandle(idInstance, hszServer);
                if (hszTopic != IntPtr.Zero) Ddeml.DdeFreeStringHandle(idInstance, hszTopic);
                if (hConvClient != IntPtr.Zero) Ddeml.DdeDisconnect(hConvClient);
                if (idInstance != 0u) Ddeml.DdeUninitialize(idInstance);
            }
        }

        [STAThread]
        public static void Main(string[] args)
        {
            Usage(args);
            var pdf = args[0];
            var tex = args[1];
            var line = args[2];
            try {
                int.Parse(line);
                RunSumatraPDF(pdf);
                var active = 0;
                var forwardSearch = "[ForwardSearch(\"" + pdf + "\",\"" + tex + "\"," + line + ",0,0," + active.ToString() + ")]";
                DdeExecute("SUMATRA", "control", forwardSearch);
            }
            catch (Win32Exception e) {
                Console.Error.WriteLine(e.Message);
                Environment.Exit(-3);
            }
            catch (InvalidOperationException e) {
                Console.Error.WriteLine(e.Message);
                Environment.Exit(-2);
            }
            catch (Exception e) {
                Console.Error.WriteLine(e.Message);
                Environment.Exit(-1);
            }
        }
    }
}
```

***

#### VB 版 {#hc64ff38}

VB 版も作成してみました．<br>
コマンドラインからビルドする場合は以下のようにしてビルドします．<br>

```
>C:
>cd C:\w32tex\bin
C:\w32tex\bin>vbc fwdsumatrapdf.vb
```

***

- C:\w32tex\bin\fwdsumatrapdf.vb

***

```
' vim: ts=4 sw=4 expandtab:
' >vbc fwdsumatrapdf.vb

Option Compare Binary
Option Explicit On
Option Infer On
Option Strict On

Imports System
Imports System.IO
Imports System.Diagnostics
Imports System.ComponentModel
Imports System.Runtime.InteropServices
Imports Microsoft.Win32
Imports Microsoft.VisualBasic

Namespace Ddeml
    Public Class Ddeml
        Public Class DdemlError
            Inherits Exception
            Public Sub New(e As String)
                MyBase.New(e)
            End Sub
        End Class
        Public Delegate Function DdeCallback(uType As UInteger, uFmt As UInteger, hconv As IntPtr, hsz1 As IntPtr, hsz2 As IntPtr, hdata As IntPtr, dwData1 As UInteger, dwData2 As UInteger) As IntPtr
        Public Const APPCMD_CLIENTONLY As UInteger = &H10UI
        Public Const CP_WINUNICODE As Integer = 1200I
        Public Const CF_UNICODETEXT As UInteger = 13UI
        Public Const XCLASS_FLAGS As UInteger = &H4000UI
        Public Const XTYP_EXECUTE As UInteger = (&H0050UI Or XCLASS_FLAGS)
        <DllImport("user32.dll", EntryPoint:="DdeInitializeW", CharSet:=CharSet.Unicode)> _
        Public Shared Function DdeInitializeW(ByRef pidInst As UInteger, pfnCallback As DdeCallback, afCmd As UInteger, ulRes As UInteger) As UInteger
        End Function
        <DllImport("user32.dll", EntryPoint:="DdeUninitialize", CharSet:=CharSet.Unicode)> _
        Public Shared Function DdeUninitialize(idInst As UInteger) As Boolean
        End Function
        <DllImport("user32.dll", EntryPoint:="DdeCreateStringHandleW", CharSet:=CharSet.Unicode)> _
        Public Shared Function DdeCreateStringHandleW(idInst As UInteger, psz As String, iCodePage As Integer) As IntPtr
        End Function
        <DllImport("user32.dll", EntryPoint:="DdeFreeStringHandle", CharSet:=CharSet.Unicode)> _
        Public Shared Function DdeFreeStringHandle(idInst As UInteger, hsz As IntPtr) As Boolean
        End Function
        <DllImport("user32.dll", EntryPoint:="DdeCreateDataHandle", CharSet:=CharSet.Unicode)> _
        Public Shared Function DdeCreateDataHandle(idInst As UInteger, pSrc As String, cb As UInteger, cbOff As UInteger, hszItem As IntPtr, wFmt As UInteger, afCmd As UInteger) As IntPtr
        End Function
        <DllImport("user32.dll", EntryPoint:="DdeFreeDataHandle", CharSet:=CharSet.Unicode)> _
        Public Shared Function DdeFreeDataHandle(hData As IntPtr) As Boolean
        End Function
        <DllImport("user32.dll", EntryPoint:="DdeConnect", CharSet:=CharSet.Unicode)> _
        Public Shared Function DdeConnect(idInst As UInteger , hszServer As IntPtr, hszTopic As IntPtr, pCC As IntPtr) As IntPtr
        End Function
        <DllImport("user32.dll", EntryPoint:="DdeDisconnect", CharSet:=CharSet.Unicode)> _
        Public Shared Function DdeDisconnect(hConvList As IntPtr) As Boolean
        End Function
        <DllImport("user32.dll", EntryPoint:="DdeClientTransaction", CharSet:=CharSet.Unicode)> _
        Public Shared Function DdeClientTransaction(pData As IntPtr, cbData As UInteger, hConv As IntPtr, hszItem As IntPtr, wFmt As UInteger, wType As UInteger, dwTimeout As UInteger, pdwResult As IntPtr) As IntPtr
        End Function
    End Class
End Namespace

Namespace SumatraPDFClient
    Public Class ForwardSearch
        Private Const timeout As Integer = 10000I

        Private Shared Sub Usage(args As String())
            Dim s = "usage: " & Environment.GetCommandLineArgs()(0) & " pdffile texfile line"
            If args.Length = 3 Then
                Return
            Else
                Console.Error.WriteLine(s)
                Environment.Exit(2)
            End If
        End Sub

        Private Shared Sub RunSumatraPDF(pdf As String)
            If Process.GetProcessesByName("SumatraPDF").Length <> 0 Then
                Return
            Else
                Dim ps = New Process()
                Try
                    Dim sumatrapdfRegistry = "SumatraPDF.exe"
                    Dim keyPath = "SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\SumatraPDF.exe"
                    Using rKey = Registry.LocalMachine.OpenSubKey(keyPath)
                        sumatrapdfRegistry = rKey.GetValue(String.Empty).ToString()
                    End Using
                    If File.Exists(sumatrapdfRegistry) Then
                        ps.StartInfo.FileName = sumatrapdfRegistry
                    Else
                        Throw New FileNotFoundException()
                    End If
                Catch e As Exception
                    Dim sumatrapdfWin32Default = "C:\Program Files\SumatraPDF\SumatraPDF.exe"
                    Dim sumatrapdfWin64Default = "C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe"
                    if File.Exists(sumatrapdfWin32Default) Then
                        ps.StartInfo.FileName = sumatrapdfWin32Default
                    Else If File.Exists(sumatrapdfWin64Default) Then
                        ps.StartInfo.FileName = sumatrapdfWin64Default
                    Else
                        ps.StartInfo.FileName = Interaction.InputBox("Input the path to SumatraPDF.exe.", "fwdsumatrapdf", "SumatraPDF.exe")
                    End If
                End Try
                ps.StartInfo.Arguments = "-reuse-instance " & """" & pdf & """"
                ps.Start()
                ps.WaitForInputIdle(timeout)
            End If
        End Sub

        Private Shared Sub DdeExecute(server As String, topic As String, executeCommand As String)
            Dim idInstance = 0UI
            Dim hszServer = IntPtr.Zero
            Dim hszTopic = IntPtr.Zero
            Dim hConvClient = IntPtr.Zero
            Dim hDdeData = IntPtr.Zero
            Dim hDdeTransactionData = IntPtr.Zero
            Try
                Ddeml.Ddeml.DdeInitializeW(idInstance, Function(uType, uFmt, hconv, hsz1, hsz2, hdata, dwData1, dwData2) IntPtr.Zero, Ddeml.Ddeml.APPCMD_CLIENTONLY, 0UI)
                If idInstance = 0UI Then Throw New Ddeml.Ddeml.DdemlError("DdeInitializeW error")
                hszServer = Ddeml.Ddeml.DdeCreateStringHandleW(idInstance, server, Ddeml.Ddeml.CP_WINUNICODE)
                If hszServer = IntPtr.Zero Then Throw New Ddeml.Ddeml.DdemlError("DdeCreateStringHandleW error")
                hszTopic = Ddeml.Ddeml.DdeCreateStringHandleW(idInstance, topic, Ddeml.Ddeml.CP_WINUNICODE)
                If hszTopic = IntPtr.Zero Then Throw New Ddeml.Ddeml.DdemlError("DdeCreateStringHandleW error")
                hConvClient = Ddeml.Ddeml.DdeConnect(idInstance, hszServer, hszTopic, IntPtr.Zero)
                If hConvClient = IntPtr.Zero Then Throw New Ddeml.Ddeml.DdemlError("DdeConnect error")
                hDdeData = Ddeml.Ddeml.DdeCreateDataHandle(idInstance, executeCommand, CType((executeCommand.Length + 1)*Len(Char.MinValue), UInteger), 0UI, IntPtr.Zero, Ddeml.Ddeml.CF_UNICODETEXT, 0UI)
                If hDdeData = IntPtr.Zero Then Throw New Ddeml.Ddeml.DdemlError("DdeCreateDataHandle error")
                hDdeTransactionData = Ddeml.Ddeml.DdeClientTransaction(hDdeData, UInteger.MaxValue, hConvClient, IntPtr.Zero, 0UI, Ddeml.Ddeml.XTYP_EXECUTE, CType(timeout, UInteger), IntPtr.Zero)
                If hDdeTransactionData = IntPtr.Zero Then Throw New Ddeml.Ddeml.DdemlError("DdeClientTransaction error")
            Finally
                If hDdeTransactionData <> IntPtr.Zero Then Ddeml.Ddeml.DdeFreeDataHandle(hDdeTransactionData)
                If hDdeData <> IntPtr.Zero Then Ddeml.Ddeml.DdeFreeDataHandle(hDdeData)
                If hszServer <> IntPtr.Zero Then Ddeml.Ddeml.DdeFreeStringHandle(idInstance, hszServer)
                If hszTopic <> IntPtr.Zero Then Ddeml.Ddeml.DdeFreeStringHandle(idInstance, hszTopic)
                If hConvClient <> IntPtr.Zero Then Ddeml.Ddeml.DdeDisconnect(hConvClient)
                If idInstance <> 0UI Then Ddeml.Ddeml.DdeUninitialize(idInstance)
            End Try
        End Sub

        <STAThread> _
        Public Shared Sub Main(args As String())
            Usage(args)
            Dim pdf = args(0)
            Dim tex = args(1)
            Dim texLine = args(2)
            Try
                Integer.Parse(texLine)
                RunSumatraPDF(pdf)
                Dim active = 0I
                Dim forwardSearch = "[ForwardSearch(""" & pdf & """,""" & tex & """," & texLine & ",0,0," & active.ToString() & ")]"
                DdeExecute("SUMATRA", "control", forwardSearch)
            Catch e As Win32Exception
                Console.Error.WriteLine(e.Message)
                Environment.Exit(-3)
            Catch e As InvalidOperationException
                Console.Error.WriteLine(e.Message)
                Environment.Exit(-2)
            Catch e As Exception
                Console.Error.WriteLine(e.Message)
                Environment.Exit(-1)
            End Try
        End Sub
    End Class
End Namespace
```

***

#### C++11 版 {#p11a58d5}

C++11 版も作成してみました．<br>
[MinGW](/MinGW/) の GCC でビルドできます．<br>

```
$ cd /c/w32tex/bin
$ g++ -std=c++11 -static -o fwdsumatrapdf.exe fwdsumatrapdf.cpp -luser32 -lshell32 -ladvapi32 -lshlwapi
```

Microsoft Visual Studio Express の C/C++ Optimizing Compiler for x86/x64 でもビルド可能です．<br>

```
>cd /d c:\w32tex\bin
>cl fwdsumatrapdf.cpp user32.lib advapi32.lib shlwapi.lib
```

***

- C:\w32tex\bin\fwdsumatrapdf.cpp

***

```
/* vim: ts=4 sw=4 expandtab:
 *
 * MinGW
 * $ g++ -std=c++11 -static -o fwdsumatrapdf.exe fwdsumatrapdf.cpp -luser32 -lshell32 -ladvapi32 -lshlwapi
 *
 * Microsoft Visual Studio Express
 * >cl fwdsumatrapdf.cpp user32.lib advapi32.lib shlwapi.lib
 */

#include <windows.h>
#include <shlwapi.h>
#include <ddeml.h>
#if !defined (_MSC_VER)
#include <shellapi.h>
#endif
#include <iostream>
#include <sstream>
#include <iomanip>
#include <string>
#include <cstring>
#include <cstdlib>
#include <cwchar>
#include <cerrno>

using namespace std;

auto static const TIMEOUT = 10000;
auto static existSumatraHWND = FALSE;

auto inline SumatraDdeCallback() -> HDDEDATA (CALLBACK *)(UINT uType, UINT uFmt, HCONV hconv, HSZ hsz1, HSZ hsz2, HDDEDATA hdata, DWORD dwData1, DWORD dwData2) { return nullptr; };

auto CALLBACK GetSumatraHWND(HWND hwnd, LPARAM lParam) -> BOOL
{
    UNREFERENCED_PARAMETER(lParam);

    auto const maxSize = 1024;
    basic_string<wchar_t> windowText(maxSize, L'\0');
    GetWindowTextW(hwnd, const_cast<wchar_t*>(windowText.c_str()), maxSize);

    if (windowText.at(0) == L'\0') {
        return TRUE;
    }

    wchar_t* title = nullptr;
    if ((title = wcsrchr(const_cast<wchar_t*>(windowText.c_str()), L'S')) == nullptr) {
        return TRUE;
    }

    if (wcscmp(title, L"SumatraPDF") != 0) {
        return TRUE;
    }

    existSumatraHWND = TRUE;

    return TRUE;
}

namespace sumatrapdfclient
{
    template<typename T>
    class DdeClient
    {
    private:
        DWORD idInstance;
        HSZ hszServer;
        HSZ hszTopic;
        HCONV hConvClient;
        HDDEDATA hDdeData;
        HDDEDATA hDdeTransactionData;

    public:
        explicit DdeClient()
        {
            this->idInstance = 0;
            this->hszServer = nullptr;
            this->hszTopic = nullptr;
            this->hConvClient = nullptr;
            this->hDdeData = nullptr;
            this->hDdeTransactionData = nullptr;
        }

        ~DdeClient()
        {
            if (this->hDdeTransactionData != nullptr) {
                if (DdeFreeDataHandle(this->hDdeTransactionData) == FALSE) {
                    if (DdeGetLastError(this->idInstance) != 0) {
                        wcerr << L"DdeFreeDataHandle error" << endl;
                    }
                }
            }

            if (this->hDdeData != nullptr) {
                if (DdeFreeDataHandle(this->hDdeData) == FALSE) {
                    if (DdeGetLastError(this->idInstance) != 0) {
                        wcerr << L"DdeFreeDataHandle error" << endl;
                    }
                }
            }

            if (this->hszServer != nullptr) {
                if (DdeFreeStringHandle(this->idInstance, this->hszServer) == FALSE) {
                    wcerr << L"DdeFreeStringHandle error" << endl;
                }
            }

            if (this->hszTopic != nullptr) {
                if (DdeFreeStringHandle(this->idInstance, this->hszTopic) == FALSE) {
                    wcerr << L"DdeFreeStringHandle error" << endl;
                }
            }

            if (this->hConvClient != nullptr) {
                if (DdeDisconnect(this->hConvClient) == FALSE) {
                    wcerr << L"DdeDisconnect error" << endl;
                }
            }

            if (this->idInstance != 0) {
                if (DdeUninitialize(this->idInstance) == FALSE) {
                    wcerr << L"DdeUninitialize error" << endl;
                }
            }

        }

        auto execute(const basic_string<T>& server, const basic_string<T>& topic, const basic_string<T>& command) -> int
        {
            if (DdeInitializeW(&(this->idInstance), reinterpret_cast<PFNCALLBACK>(SumatraDdeCallback()), APPCMD_CLIENTONLY, 0) != DMLERR_NO_ERROR) {
                wcerr << L"DdeInitializeW error" << endl;
                return 4;
            }

            if ((this->hszServer = DdeCreateStringHandleW(this->idInstance, server.c_str(), CP_WINUNICODE)) == nullptr) {
                wcerr << L"DdeCreateStringHandleW error" << endl;
                return DdeGetLastError(idInstance);
            }

            if ((this->hszTopic = DdeCreateStringHandleW(this->idInstance, topic.c_str(), CP_WINUNICODE)) == nullptr) {
                wcerr << L"DdeCreateStringHandleW error" << endl;
                return DdeGetLastError(idInstance);
            }

            if ((this->hConvClient = DdeConnect(this->idInstance, this->hszServer, this->hszTopic, nullptr)) == nullptr) {
                wcerr << L"DdeConnect error" << endl;
                return DdeGetLastError(idInstance);
            }

            if ((this->hDdeData = DdeCreateDataHandle(this->idInstance, reinterpret_cast<BYTE*>(const_cast<T*>(command.c_str())), static_cast<DWORD>((command.length() + 1)*sizeof(T)), 0, nullptr, CF_UNICODETEXT, 0)) == nullptr) {
                wcerr << L"DdeCreateDataHandle error" << endl;
                return DdeGetLastError(idInstance);
            }

            if ((this->hDdeTransactionData = DdeClientTransaction(reinterpret_cast<BYTE*>(this->hDdeData), static_cast<DWORD>(-1), this->hConvClient, nullptr, 0, XTYP_EXECUTE, TIMEOUT, nullptr)) == nullptr) {
                wcerr << L"DdeClientTransaction error" << endl;
                return DdeGetLastError(idInstance);
            }

            return 0;
        }

    };
}

using namespace sumatrapdfclient;

template<typename T>
auto static RunSumatraPDF(const basic_string<T>& pdf) -> int
{
    auto err = 0;

    static HWND hList;
    EnumWindows(reinterpret_cast<WNDENUMPROC>(GetSumatraHWND), reinterpret_cast<LPARAM>(hList));

    if (existSumatraHWND == TRUE) {
        return err;
    }

    HKEY subKey = nullptr;
    const basic_string<T> keyPath(L"SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths\\SumatraPDF.exe");
    if (RegOpenKeyExW(HKEY_LOCAL_MACHINE, keyPath.c_str(), 0, KEY_QUERY_VALUE, &subKey) != ERROR_SUCCESS) {
        err = 1;
    }

    DWORD dwType = 0;
    DWORD sz = 0;
    if (subKey != nullptr) {
        if (RegQueryValueExW(subKey, nullptr, nullptr, &dwType, nullptr, &sz) != ERROR_SUCCESS) {
            err = 1;
        }
    }

    basic_string<T> sumatrapdfRegistry(sz, L'\0');
    if (subKey != nullptr) {
        if (RegQueryValueExW(subKey, nullptr, nullptr, &dwType, reinterpret_cast<BYTE*>(const_cast<T*>(sumatrapdfRegistry.c_str())), &sz) != ERROR_SUCCESS) {
            err = 1;
        }
    }

    if (subKey != nullptr) {
        RegCloseKey(subKey);
        subKey = nullptr;
    }

    basic_string<T> sumatrapdf(L"SumatraPDF.exe");
    if (err == 0) {
        if (sumatrapdfRegistry.length() != 0) {
            if (PathFileExistsW(sumatrapdfRegistry.c_str())) {
                sumatrapdf = sumatrapdfRegistry;
            } else {
                err = 1;
            }
        }
    }

    if (err != 0) {
        err = 0;
        const T* sumatrapdfWin32Default = L"C:\\Program Files\\SumatraPDF\\SumatraPDF.exe";
        const T* sumatrapdfWin64Default = L"C:\\Program Files (x86)\\SumatraPDF\\SumatraPDF.exe";
        if (PathFileExistsW(sumatrapdfWin32Default)) {
            sumatrapdf = sumatrapdfWin32Default;
        } else if (PathFileExistsW(sumatrapdfWin64Default)) {
            sumatrapdf = sumatrapdfWin64Default;
        } else {
            sumatrapdf = L"SumatraPDF.exe";
        }
    }

    STARTUPINFOW si;
    PROCESS_INFORMATION pi;

#if defined (_MSC_VER)
    SecureZeroMemory(&si, sizeof(si));
    SecureZeroMemory(&pi, sizeof(pi));
#else
    ZeroMemory(&si, sizeof(si));
    ZeroMemory(&pi, sizeof(pi));
#endif

    si.cb = sizeof(si);

    const basic_string<T> reuseInstance(L"-reuse-instance");
    basic_ostringstream<T> oss;
    oss << L"\"" << sumatrapdf << L"\" " << reuseInstance << L" \"" << pdf << L"\"";
    basic_string<T> sumatrapdfCommandLine(oss.str());

    if (CreateProcessW(nullptr, const_cast<T*>(sumatrapdfCommandLine.c_str()), nullptr, nullptr, FALSE, 0, nullptr, nullptr, &si, &pi) == 0) {
        err = 3;
        return err;
    }

    WaitForInputIdle(pi.hProcess, TIMEOUT);

    return err;
}

template<typename T>
auto static DdeExecute(const basic_string<T>& server, const basic_string<T>& topic, const basic_string<T>& command) -> int
{
    auto dde = DdeClient<T>();
    return dde.execute(server, topic, command);
}

#if defined (_MSC_VER)
auto wmain(int argc, wchar_t** argv) -> int
#else
auto main() -> int
#endif
{
    auto err = 0;
#if !defined (_MSC_VER)
    auto argc = 0;
    auto argv = CommandLineToArgvW(GetCommandLineW(), &argc);
#endif

    if (argc != 4) {
        wcerr << L"usage: " << argv[0] << L" pdffile texfile line" << endl;
        err = 2;
        return err;
    }

    const basic_string<wchar_t> pdf(argv[1]);
    const basic_string<wchar_t> tex(argv[2]);
    const basic_string<wchar_t> line(argv[3]);

    if (wcstol(line.c_str(), nullptr, 0) == 0 || errno == ERANGE) {
        wcerr << line << L" can't convert to the line number." << endl;
        err = -1;
        return err;
    }

    if ((err = RunSumatraPDF(pdf)) != 0) {
        return err;
    }

    auto active = 0;
    basic_ostringstream<wchar_t> woss;
    woss << L"[ForwardSearch(\"" << pdf << L"\",\"" << tex << L"\"," << line << L",0,0," << active << L")]";
    const basic_string<wchar_t> forwardSearch(woss.str());
    const basic_string<wchar_t> server(L"SUMATRA");
    const basic_string<wchar_t> topic(L"control");

    if ((err = DdeExecute(server, topic, forwardSearch)) != 0) {
        return err;
    }

    return err;
}
```

***

#### C, C++ 版 {#qf7ea8bf}

C, C++ 版も作成してみました．<br>
[MinGW](/MinGW/) の GCC でビルドできます．<br>

C の場合

```
$ cd /c/w32tex/bin
$ gcc -std=c11 -static -o fwdsumatrapdf.exe fwdsumatrapdf.c -luser32 -lshell32 -ladvapi32 -lshlwapi
```

C++ の場合

```
$ cd /c/w32tex/bin
$ g++ -std=c++11 -static -o fwdsumatrapdf.exe fwdsumatrapdf.cpp -luser32 -lshell32 -ladvapi32 -lshlwapi
```

Microsoft Visual Studio Express の C/C++ Optimizing Compiler for x86/x64 でもビルド可能です．<br>

C の場合

```
>cd /d c:\w32tex\bin
>cl fwdsumatrapdf.c user32.lib advapi32.lib shlwapi.lib
```

C++ の場合

```
>cd /d c:\w32tex\bin
>cl fwdsumatrapdf.cpp user32.lib advapi32.lib shlwapi.lib
```

***

- C:\w32tex\bin\fwdsumatrapdf.c
- C:\w32tex\bin\fwdsumatrapdf.cpp

***

```
/* vim: ts=4 sw=4 expandtab:
 *
 * MinGW
 * $ gcc -std=c11 -static -o fwdsumatrapdf.exe fwdsumatrapdf.c -luser32 -lshell32 -ladvapi32 -lshlwapi
 * $ g++ -std=c++11 -static -o fwdsumatrapdf.exe fwdsumatrapdf.cpp -luser32 -lshell32 -ladvapi32 -lshlwapi
 *
 * Microsoft Visual Studio Express
 * >cl fwdsumatrapdf.c user32.lib advapi32.lib shlwapi.lib
 * >cl fwdsumatrapdf.cpp user32.lib advapi32.lib shlwapi.lib
 */

#include <windows.h>
#include <shlwapi.h>
#include <ddeml.h>
#if !defined (_MSC_VER)
#include <shellapi.h>
#endif
#if defined (__cplusplus)
#include <cstdio>
#include <cstring>
#include <cstdlib>
#include <cwchar>
#include <cerrno>
#include <clocale>
using namespace std;
#else
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <wchar.h>
#include <errno.h>
#include <locale.h>
#endif

#if defined (__cplusplus)
#define restrict
#elif defined (_MSC_VER) && (_MSC_VER >= 1400)
#define restrict __restrict
#elif defined (__STDC_VERSION__) && (__STDC_VERSION__ < 199901L)
#define restrict
#endif

#if defined (_MSC_VER)
#if (_MSC_VER >= 1400)
#define snwprintf(buffer, count, format, ...) _snwprintf_s(buffer, count, _TRUNCATE, format, __VA_ARGS__)
#else
#define snwprintf _snwprintf
#endif
#endif

HDDEDATA CALLBACK SumatraDdeCallback(UINT, UINT, HCONV, HSZ, HSZ, HDDEDATA, DWORD, DWORD);
BOOL CALLBACK GetSumatraHWND(HWND, LPARAM);
static int RunSumatraPDF(const wchar_t* restrict);
static int DdeExecute(const wchar_t* restrict, const wchar_t* restrict, const wchar_t* restrict);

#define FWDSUMATRAPDF_BUF_SIZE 1024
#define TIMEOUT 10000
static BOOL existSumatraHWND = FALSE;

HDDEDATA CALLBACK
SumatraDdeCallback(UINT uType,
                   UINT uFmt,
                   HCONV hconv,
                   HSZ hsz1,
                   HSZ hsz2,
                   HDDEDATA hdata,
                   DWORD dwData1,
                   DWORD dwData2)
{
  return NULL;
}

BOOL CALLBACK
GetSumatraHWND(HWND hwnd,
               LPARAM lParam)
{
    wchar_t* title = NULL;
    wchar_t windowText[FWDSUMATRAPDF_BUF_SIZE] = L"";

    UNREFERENCED_PARAMETER(lParam);

    GetWindowTextW(hwnd, windowText, FWDSUMATRAPDF_BUF_SIZE);
    if (windowText[0] == L'\0') {
        return TRUE;
    }

    if ((title = wcsrchr(windowText, L'S')) == NULL) {
        return TRUE;
    }

    if (wcscmp(title, L"SumatraPDF") != 0) {
        return TRUE;
    }

    existSumatraHWND = TRUE;

    return TRUE;
}

static int
RunSumatraPDF(const wchar_t* restrict pdf)
{
    int err = 0;
    HKEY subKey = NULL;
    const wchar_t* keyPath = L"SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths\\SumatraPDF.exe";
    DWORD dwType = 0;
    DWORD sz = 0;
    wchar_t sumatrapdfRegistry[FWDSUMATRAPDF_BUF_SIZE] = L"";
    const wchar_t* sumatrapdfWin32Default = L"C:\\Program Files\\SumatraPDF\\SumatraPDF.exe";
    const wchar_t* sumatrapdfWin64Default = L"C:\\Program Files (x86)\\SumatraPDF\\SumatraPDF.exe";
    wchar_t* sumatrapdf = (wchar_t*)L"SumatraPDF.exe";
    const wchar_t* reuseInstance = L"-reuse-instance";
    wchar_t sumatrapdfCommandLine[FWDSUMATRAPDF_BUF_SIZE] = L"";
    static HWND hList;
    STARTUPINFOW si;
    PROCESS_INFORMATION pi;

    EnumWindows((WNDENUMPROC)GetSumatraHWND, (LPARAM)hList);

    if (existSumatraHWND == TRUE) {
        return err;
    }

    if (RegOpenKeyExW(HKEY_LOCAL_MACHINE, keyPath, 0, KEY_QUERY_VALUE, &subKey) != ERROR_SUCCESS) {
        err = 1;
    }

    if (subKey != NULL) {
        if (RegQueryValueExW(subKey, NULL, NULL, &dwType, NULL, &sz) != ERROR_SUCCESS) {
            err = 1;
        }
    }

    if (subKey != NULL) {
        if (RegQueryValueExW(subKey, NULL, NULL, &dwType, (BYTE*)sumatrapdfRegistry, &sz) != ERROR_SUCCESS) {
            err = 1;
        }
    }

    if (subKey != NULL) {
        RegCloseKey(subKey);
        subKey = NULL;
    }

    if (err == 0) {
        if (wcslen(sumatrapdfRegistry) != 0) {
            if (PathFileExistsW(sumatrapdfRegistry)) {
                sumatrapdf = sumatrapdfRegistry;
            } else {
                err = 1;
            }
        }
    }

    if (err != 0) {
        err = 0;
        if (PathFileExistsW(sumatrapdfWin32Default)) {
            sumatrapdf = (wchar_t*)sumatrapdfWin32Default;
        } else if (PathFileExistsW(sumatrapdfWin64Default)) {
            sumatrapdf = (wchar_t*)sumatrapdfWin64Default;
        } else {
            sumatrapdf = (wchar_t*)L"SumatraPDF.exe";
        }
    }

#if defined (_MSC_VER)
    SecureZeroMemory(&si, sizeof(si));
    SecureZeroMemory(&pi, sizeof(pi));
#else
    ZeroMemory(&si, sizeof(si));
    ZeroMemory(&pi, sizeof(pi));
#endif

    si.cb = sizeof(si);

    snwprintf(sumatrapdfCommandLine, FWDSUMATRAPDF_BUF_SIZE-1, L"\"%ls\" %ls \"%ls\"", sumatrapdf, reuseInstance, pdf);

    if (CreateProcessW(NULL, sumatrapdfCommandLine, NULL, NULL, FALSE, 0, NULL, NULL, &si, &pi) == 0) {
        err = 3;
        return err;
    }

    WaitForInputIdle(pi.hProcess, TIMEOUT);

    return err;
}

static int
DdeExecute(const wchar_t* restrict server,
           const wchar_t* restrict topic,
           const wchar_t* restrict command)
{
    int err = 0;
    DWORD idInstance = 0;
    HSZ hszServer = NULL;
    HSZ hszTopic = NULL;
    HCONV hConvClient = NULL;
    HDDEDATA hDdeData = NULL;
    HDDEDATA hDdeTransactionData = NULL;

    if (DdeInitializeW(&idInstance, (PFNCALLBACK)SumatraDdeCallback, APPCMD_CLIENTONLY, 0) != DMLERR_NO_ERROR) {
        fputws(L"DdeInitializeW error\n", stderr);
        err = 4;
        goto exn;
    }

    if ((hszServer = DdeCreateStringHandleW(idInstance, server, CP_WINUNICODE)) == NULL) {
        fputws(L"DdeCreateStringHandleW error\n", stderr);
        err = (int)DdeGetLastError(idInstance);
        goto exn;
    }

    if ((hszTopic = DdeCreateStringHandleW(idInstance, topic, CP_WINUNICODE)) == NULL) {
        fputws(L"DdeCreateStringHandleW error\n", stderr);
        err = (int)DdeGetLastError(idInstance);
        goto exn;
    }

    if ((hConvClient = DdeConnect(idInstance, hszServer, hszTopic, NULL)) == NULL) {
        fputws(L"DdeConnect error\n", stderr);
        err = (int)DdeGetLastError(idInstance);
        goto exn;
    }

    if ((hDdeData = DdeCreateDataHandle(idInstance, (BYTE*)((wchar_t*)command), (DWORD)((wcslen(command) + 1)*sizeof(wchar_t)), 0, NULL, CF_UNICODETEXT, 0)) == NULL) {
        fputws(L"DdeCreateDataHandle error\n", stderr);
        err = (int)DdeGetLastError(idInstance);
        goto exn;
    }

    if ((hDdeTransactionData = DdeClientTransaction((BYTE*)hDdeData, (DWORD)-1, hConvClient, NULL, 0, XTYP_EXECUTE, TIMEOUT, NULL)) == NULL) {
        fputws(L"DdeClientTransaction error\n", stderr);
        err = (int)DdeGetLastError(idInstance);
        goto exn;
    }

exn:
    if (hDdeTransactionData) {
        if (DdeFreeDataHandle(hDdeTransactionData) == FALSE) {
            err = (int)DdeGetLastError(idInstance);
            if (err) {
                fputws(L"DdeFreeDataHandle error\n", stderr);
            }
        }
    }

    if (hDdeData) {
        if (DdeFreeDataHandle(hDdeData) == FALSE) {
            err = (int)DdeGetLastError(idInstance);
            if (err) {
                fputws(L"DdeFreeDataHandle error\n", stderr);
            }
        }
    }

    if (hszServer) {
        if (DdeFreeStringHandle(idInstance, hszServer) == FALSE) {
            fputws(L"DdeFreeStringHandle error\n", stderr);
            err = (int)DdeGetLastError(idInstance);
        }
    }

    if (hszTopic) {
        if (DdeFreeStringHandle(idInstance, hszTopic) == FALSE) {
            fputws(L"DdeFreeStringHandle error\n", stderr);
            err = (int)DdeGetLastError(idInstance);
        }
    }

    if (hConvClient) {
        if (DdeDisconnect(hConvClient) == FALSE) {
            fputws(L"DdeDisconnect error\n", stderr);
            err = (int)DdeGetLastError(idInstance);
        }
    }

    if (idInstance) {
        if (DdeUninitialize(idInstance) == FALSE) {
            fputws(L"DdeUninitialize error\n", stderr);
            err = 5;
        }
    }

    return err;
}

#if defined (_MSC_VER)
int
wmain(int argc,
      wchar_t** argv)
#else
int
main(void)
#endif
{
    int err = 0;
    wchar_t* pdf = NULL;
    wchar_t* tex = NULL;
    wchar_t* line = NULL;
    int active = 0;
    wchar_t forwardSearch[FWDSUMATRAPDF_BUF_SIZE] = L"";
#if !defined (_MSC_VER)
    int argc = 0;
    wchar_t** argv = CommandLineToArgvW(GetCommandLineW(), &argc);
#endif

    if (argc != 4) {
        fwprintf(stderr, L"usage: %ls pdffile texfile line\n", argv[0]);
        err = 2;
        return err;
    }

    pdf = argv[1];
    tex = argv[2];
    line = argv[3];

    if (wcslen(pdf) >= (FWDSUMATRAPDF_BUF_SIZE/4)) {
        fwprintf(stderr, L"%ls is too long.\n", pdf);
        err = -4;
        return err;
    }

    if (wcslen(tex) >= (FWDSUMATRAPDF_BUF_SIZE/4)) {
        fwprintf(stderr, L"%ls is too long.\n", tex);
        err = -3;
        return err;
    }

    if (wcslen(line) >= (FWDSUMATRAPDF_BUF_SIZE/4)) {
        fwprintf(stderr, L"%ls is too long.\n", line);
        err = -2;
        return err;
    }

    if (wcstol(line, NULL, 0) == 0 || errno == ERANGE) {
        fwprintf(stderr, L"%ls can't convert to the line number.\n", line);
        err = -1;
        return err;
    }

    if ((err = RunSumatraPDF(pdf)) != 0) {
        return err;
    }

    snwprintf(forwardSearch, FWDSUMATRAPDF_BUF_SIZE-1, L"%ls%ls%ls%ls%ls%ls%ls%d%ls",
      L"[ForwardSearch(\"", pdf, L"\",\"", tex, L"\",", line, L",0,0,", active, L")]");

    if ((err = DdeExecute(L"SUMATRA", L"control", forwardSearch)) != 0) {
        return err;
    }

    return err;
}
```

***

#### 使用可能なエディタ・マクロ・プラグイン {#g4dd3cd8}

fwdsumatrapdf.exe は以下のエディタ・マクロ・プラグインで使用可能です．

■ フリーソフトウェア (オープンソースソフトウェア)

- [LyX](/LyX/)
- [Texmaker](/Texmaker/)
- [TeXstudio](/TeXstudio/)
- [TeXnicCenter](/TeXnicCenter/)
- [Eclipse](/Eclipse/)
    - [TeXlipse](/TeXlipse/)
- [Emacs](/Emacs/)
    - [TeX mode](/Emacs/#tex-mode)
    - [AUCTeX](/AUCTeX/)
    - [YaTeX](/YaTeX/)
- [Vim](/Vim/)
    - [Vim-LaTeX](/Vim-LaTeX/)
- [Notepad++](/Notepad++/)
    - [NppExec](/NppExec/)
    - [MTeX for Notepad++](</MTeX for Notepad++/>)
- [サクラエディタ](</サクラエディタ/>)
    - [fwdsumatrapdf.js](</サクラエディタ/#ce8c0353>)
- [xyzzy](/xyzzy/)
    - KyoTeX
    - [KaTeX](/KaTeX/)

■ フリーウェア (無料)

- Mery
    - fwdsumatrapdf.js
- gPad
    - fwdsumatrapdf.js

## inverse search {#wfcdbef6}

inverse search を行うには TeX コマンドのオプションに -synctex=1 または -synctex=-1 を追加する必要があります．<br>
inverse search は SumatraPDF の画面をダブルクリックすると実行されます．<br>
SumatraPDF の \[設定(S)\]-\[オプション(O)...\]-\[逆順検索コマンドラインの設定\] で inverse search で実行されるコマンドラインの設定を行います．<br>
inverse search の設定はコマンドラインから -inverse-search オプションで指定することも可能です．<br>
派生版・独自ビルド版の中にはこの設定が削除されているものがあるので，その場合は

- 公式サイトの SumatraPDF を使用する
- SumatraPDF のコマンドラインの -inverse-search オプションで指定する

などの方法で対処してください．<br>
どのように設定するかはエディタ・マクロ・プラグインによって異なるのでそれぞれのマニュアルを見て設定してください．<br>
例えば [W32TeX](/W32TeX/) に含まれている [TeXworks](/TeXworks/) であれば

***

<span style="color:Black;background-color:#FFF100;"><ins>　<span style="color:#FF4000;"><strong>SumatraPDF のオプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

...<br>
　　逆順検索コマンドラインの設定<br>
　　PDF ドキュメント上でダブルクリックしたときに呼び出すコマンドラインを入<br>
　　力:<br>
　　<ins>C:\w32tex\share\texworks\TeXworks.exe --position=%l "%f"</ins><br>

***

となります．

## 関連リンク {#c84cbf92}

- [F# at Microsoft Research - Microsoft Research](http://research.microsoft.com/fsharp/)
- [DDEML Functions (Windows)](<http://msdn.microsoft.com/en-us/library/windows/desktop/ff468833(v=vs.85).aspx>)
- [Windows Data Types (Windows)](<http://msdn.microsoft.com/en-us/library/windows/desktop/aa383751(v=vs.85).aspx>)
- [The New Data Types (Windows)](<http://msdn.microsoft.com/en-us/library/windows/desktop/aa384264(v=vs.85).aspx>)
- [NDde](http://ndde.codeplex.com/)
- [nsisDDE](http://wiz0u.free.fr/prog/nsisDDE/)
- [レジストリの値をコマンド プロンプトで取得する](http://ziomatrix18.blog68.fc2.com/blog-entry-477.html)
- [USBメモリ活用講座【基礎編・PDFビューアのポータブル化－Sumatra PDF】](http://www.nagaoka-ct.ac.jp/ec/labo/visu/usb/pdf/sumatra.shtml)
- [Windows 7 で W32TeX を導入して日本語 SyncTeX を試してみる](http://skalldan.wordpress.com/2011/11/11/windows-7-%E3%81%A7-w32tex-%E3%82%92%E5%B0%8E%E5%85%A5%E3%81%97%E3%81%A6%E6%97%A5%E6%9C%AC%E8%AA%9E-synctex-%E3%82%92%E8%A9%A6%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B/)
- [SweaveでエディタとDVIビューア間の相互移動 - RjpWiki](http://www.okada.jp.org/RWiki/?Sweave%A4%C7%A5%A8%A5%C7%A5%A3%A5%BF%A4%C8DVI%A5%D3%A5%E5%A1%BC%A5%A2%B4%D6%A4%CE%C1%EA%B8%DF%B0%DC%C6%B0)
- [F# 3.0 を Visual Studio なしでインストールする](http://blog.recyclebin.jp/archives/2889)
- [Microsoft、「Visual Studio Express」でF#言語を利用可能にするアドインを公開](http://www.forest.impress.co.jp/docs/news/20120913_559448.html)
- [DDEApp Tutorial (C#, C++)](http://www.codeproject.com/Articles/401117/DDEApp-Tutorial-Csharp-Cplusplus)
- [現在実行しているDLLのパスを取得する。(GetExecutingAssembly )](http://d.hatena.ne.jp/tekk/20110307/1299513821)
- [Process.Start()で起動したプロセスのメインウィンドウのハンドルが取得できない場合の対処法](http://www.slotware.net/blog/2009/11/processstart.html)
- \[[SDK32\] バッファ長の指定が不十分だと DDEML で不具合が発生する](http://support.microsoft.com/kb/107387/ja)
- [DDE Is Still Alive &amp; Kicking](http://chrisoldwood.blogspot.jp/2009/10/dde-is-still-alive-kicking.html)
