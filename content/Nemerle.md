---
title: "Nemerle"
url: "/Nemerle/"
date: 2014-06-23T16:52:20Z
pukiwiki: "Nemerle"
---

# Nemerle

## Nemerle {#r60d5339}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Summary {#p5f87986}

- [http://nemerle.org/](http://nemerle.org/)
- [https://github.com/rsdn/nemerle/](https://github.com/rsdn/nemerle/)
- [https://github.com/rsdn/nemerle/wiki/Quick-guide](https://github.com/rsdn/nemerle/wiki/Quick-guide)
- [https://github.com/rsdn/nemerle/wiki/CSharp-Similarities-and-Differences](https://github.com/rsdn/nemerle/wiki/CSharp-Similarities-and-Differences)
- [http://qiita.com/tags/nemerle](http://qiita.com/tags/nemerle)
- [Wikipedia.ja:Nemerle](https://ja.wikipedia.org/wiki/Nemerle)
- [Nemerle (.NET 4.5.1, Visual Studio 2013)](http://visualstudiogallery.msdn.microsoft.com/fb29c7b2-d1e5-42e4-8a56-9b9c022c22a9)
- [マイナー言語 Advent Calendar 2013 #16: Nemerle について](http://lambdalice.blogspot.jp/2013/12/advent-calendar-2013-16-nemerle.html)
- [Nemerle で hello world](http://pasberth.github.io/blog/entry/2013-11-18/)
- [Nemerleでコンパイル時に迷路を解いてみた](http://kmizu.hatenablog.com/entry/20100113/1263375171)

### IDE・エディタ {#pb442386}

- [Vim](/Vim/)
    - [VimのNemerle用設定](http://rakugakist.youpage.jp/?p=114)

## [fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) <a id="fwdsumatrapdf"></a> {#i8d36f0c}

### Nemerle 版 {#w7a71c40}

Nemerle Compiler (ncc) version 1.2.0.239 (git) で動作確認しています．<br>
コマンドラインからビルドする場合は以下のようにしてビルドします．<br>

```
ncc /r:Microsoft.VisualBasic.dll /o:fwdsumatrapdf.exe fwdsumatrapdf.n
```

***

- fwdsumatrapdf.n

***

```
// vim: ts=4 sw=4 expandtab:
// >ncc /r:Microsoft.VisualBasic.dll /o:fwdsumatrapdf.exe fwdsumatrapdf.n

namespace Ddeml
{
    using System;
    using System.Runtime.InteropServices;

    public module Ddeml
    {
        public class DdemlError : Exception
        {
            public this(e: string)
            {
                base(e);
            }
        }
        public delegate DdeCallback(uType: uint, uFmt: uint, hconv: IntPtr, hsz1: IntPtr, hsz2: IntPtr, hdata: IntPtr, dwData1: uint, dwData2: uint): IntPtr;
        public APPCMD_CLIENTONLY: uint = 0x10u;
        public CP_WINUNICODE: int = 1200;
        public CF_UNICODETEXT: uint = 13u;
        public XCLASS_FLAGS: uint = 0x4000u;
        public XTYP_EXECUTE: uint = (0x0050u | XCLASS_FLAGS);
        [DllImport(@"user32.dll", EntryPoint="DdeInitializeW", CharSet=CharSet.Unicode)]
        public static extern DdeInitializeW(pidInst: ref uint, pfnCallback: DdeCallback, afCmd: uint, ulRes: uint): uint;
        [DllImport(@"user32.dll", EntryPoint="DdeUninitialize", CharSet=CharSet.Unicode)]
        public static extern DdeUninitialize(idInst: uint): bool;
        [DllImport(@"user32.dll", EntryPoint="DdeCreateStringHandleW", CharSet=CharSet.Unicode)]
        public static extern DdeCreateStringHandleW(idInst: uint, psz: string, iCodePage: int): IntPtr;
        [DllImport(@"user32.dll", EntryPoint="DdeFreeStringHandle", CharSet=CharSet.Unicode)]
        public static extern DdeFreeStringHandle(idInst: uint, hsz: IntPtr): bool;
        [DllImport(@"user32.dll", EntryPoint="DdeCreateDataHandle", CharSet=CharSet.Unicode)]
        public static extern DdeCreateDataHandle(idInst: uint, pSrc: string, cb: uint, cbOff: uint, hszItem: IntPtr, wFmt: uint, afCmd: uint): IntPtr;
        [DllImport(@"user32.dll", EntryPoint="DdeFreeDataHandle", CharSet=CharSet.Unicode)]
        public static extern DdeFreeDataHandle(hData: IntPtr): bool;
        [DllImport(@"user32.dll", EntryPoint="DdeConnect", CharSet=CharSet.Unicode)]
        public static extern DdeConnect(idInst: uint, hszServer: IntPtr, hszTopic: IntPtr, pCC: IntPtr): IntPtr;
        [DllImport(@"user32.dll", EntryPoint="DdeDisconnect", CharSet=CharSet.Unicode)]
        public static extern DdeDisconnect(hConvList: IntPtr): bool;
        [DllImport(@"user32.dll", EntryPoint="DdeClientTransaction", CharSet=CharSet.Unicode)]
        public static extern DdeClientTransaction(pData: IntPtr, cbData: uint, hConv: IntPtr, hszItem: IntPtr, wFmt: uint, wType: uint, dwTimeout: uint, pdwResult:IntPtr): IntPtr;
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

    public module ForwardSearch
    {
        private static timeout: int = 10000;

        private static Usage(args: array [string]): void
        {
            def s = "usage: " + Environment.GetCommandLineArgs()[0] + " pdffile texfile line";
            match (args.Length) {
                | 3 => ();
                | _ => {
                    Console.Error.WriteLine(s);
                    Environment.Exit(2);
                }
            }
        }

        private static RunSumatraPDF(pdf: string): void
        {
            match (Process.GetProcessesByName("SumatraPDF").Length) {
                | 0 => {
                    def ps = Process();
                    try {
                        mutable sumatrapdfRegistry = "SumatraPDF.exe";
                        def keyPath = @"SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\SumatraPDF.exe";
                        using (rKey = Registry.LocalMachine.OpenSubKey(keyPath)) {
                            sumatrapdfRegistry = rKey.GetValue(string.Empty).ToString();
                        }
                        if (File.Exists(sumatrapdfRegistry)) {
                            ps.StartInfo.FileName = sumatrapdfRegistry;
                        }
                        else {
                            throw FileNotFoundException();
                        }
                    }
                    catch {
                        | _ is Exception => {
                            def sumatrapdfWin32Default = @"C:\Program Files\SumatraPDF\SumatraPDF.exe";
                            def sumatrapdfWin64Default = @"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe";
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
                    }
                    ps.StartInfo.Arguments = "-reuse-instance " + "\"" + pdf + "\"";
                    _ = ps.Start();
                    _ = ps.WaitForInputIdle(timeout);
                }
                | _ => ();
            }
        }

        private static DdeExecute(server: string, topic: string, command: string): void
        {
            mutable idInstance = 0u;
            mutable hszServer = IntPtr.Zero;
            mutable hszTopic = IntPtr.Zero;
            mutable hConvClient = IntPtr.Zero;
            mutable hDdeData = IntPtr.Zero;
            mutable hDdeTransactionData = IntPtr.Zero;
            try {
                _ = Ddeml.DdeInitializeW(ref idInstance, (_, _, _, _, _, _, _, _) => IntPtr.Zero, Ddeml.APPCMD_CLIENTONLY, 0u);
                when (idInstance == 0u) throw Ddeml.DdemlError("DdeInitializeW error");
                hszServer = Ddeml.DdeCreateStringHandleW(idInstance, server, Ddeml.CP_WINUNICODE);
                when (hszServer == IntPtr.Zero) throw Ddeml.DdemlError("DdeCreateStringHandleW error");
                hszTopic = Ddeml.DdeCreateStringHandleW(idInstance, topic, Ddeml.CP_WINUNICODE);
                when (hszTopic == IntPtr.Zero) throw Ddeml.DdemlError("DdeCreateStringHandleW error");
                hConvClient = Ddeml.DdeConnect(idInstance, hszServer, hszTopic, IntPtr.Zero);
                when (hConvClient == IntPtr.Zero) throw Ddeml.DdemlError("DdeConnect error");
                hDdeData = Ddeml.DdeCreateDataHandle(idInstance, command, ((command.Length + 1)*sizeof(char)) :> uint, 0u, IntPtr.Zero, Ddeml.CF_UNICODETEXT, 0u);
                when (hDdeData == IntPtr.Zero) throw Ddeml.DdemlError("DdeCreateDataHandle error");
                hDdeTransactionData = Ddeml.DdeClientTransaction(hDdeData, unchecked(-1 :> uint), hConvClient, IntPtr.Zero, 0u, Ddeml.XTYP_EXECUTE, timeout :> uint, IntPtr.Zero);
                when (hDdeTransactionData == IntPtr.Zero) throw Ddeml.DdemlError("DdeClientTransaction error");
            }
            finally {
                when (hDdeTransactionData != IntPtr.Zero) _ = Ddeml.DdeFreeDataHandle(hDdeTransactionData);
                when (hDdeData != IntPtr.Zero) _ = Ddeml.DdeFreeDataHandle(hDdeData);
                when (hszServer != IntPtr.Zero) _ = Ddeml.DdeFreeStringHandle(idInstance, hszServer);
                when (hszTopic != IntPtr.Zero) _ = Ddeml.DdeFreeStringHandle(idInstance, hszTopic);
                when (hConvClient != IntPtr.Zero) _ = Ddeml.DdeDisconnect(hConvClient);
                when (idInstance != 0u) _ = Ddeml.DdeUninitialize(idInstance);
            }
        }

        [STAThread]
        public static Main(args: array [string]): void
        {
            Usage(args);
            def pdf = args[0];
            def tex = args[1];
            def line = args[2];
            try {
                _ = int.Parse(line);
                RunSumatraPDF(pdf);
                def active = 0;
                def forwardSearch = "[ForwardSearch(\"" + pdf + "\",\"" + tex + "\"," + line + ",0,0," + active.ToString() + ")]";
                DdeExecute("SUMATRA", "control", forwardSearch);
            }
            catch {
                | e is Win32Exception => {
                    Console.Error.WriteLine(e.Message);
                    Environment.Exit(-3);
                }
                | e is InvalidOperationException => {
                    Console.Error.WriteLine(e.Message);
                    Environment.Exit(-2);
                }
                | e is Exception => {
                    Console.Error.WriteLine(e.Message);
                    Environment.Exit(-1);
                }
            }
        }
    }
}
```

***
