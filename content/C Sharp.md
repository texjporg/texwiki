---
title: "C Sharp"
url: "/C Sharp/"
date: 2013-08-07T02:37:33Z
pukiwiki: "C Sharp"
---

# C Sharp

## C# {#j3a00665}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/200px-C_Sharp_wordmark.svg.png" alt="C#" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Summary {#h89884a4}

- [http://msdn.microsoft.com/ja-jp/library/kx37x362.aspx](http://msdn.microsoft.com/ja-jp/library/kx37x362.aspx)
- [http://msdn.microsoft.com/ja-jp/library/vstudio/kx37x362.aspx](http://msdn.microsoft.com/ja-jp/library/vstudio/kx37x362.aspx)
- [http://ufcpp.net/study/csharp/](http://ufcpp.net/study/csharp/)
- [http://www.wgag.net/csharp/](http://www.wgag.net/csharp/)
- [C# Advent Calendar 2014 - Qiita](http://qiita.com/advent-calendar/2014/csharp)
- [.NET Foundation](http://www.dotnetfoundation.org/)
- [AnyCPUなC#モジュールからx86/x64のDLLを呼び分ける方法まとめ](http://cflat-inc.hatenablog.com/entry/20130723/1374535605)

## 処理系 {#h8ce0ca0}

### csc {#fbf8c36a}

- [Microsoft Visual Studio Community](</Microsoft Visual Studio Community/>)
- [Microsoft Build Tools 2013](http://www.microsoft.com/ja-jp/download/details.aspx?id=40760) MSBuild, C# コンパイラ, VB コンパイラ

### mcs {#zfadab82}

- [Mono](http://www.mono-project.com/)

## Microsoft .NET Native {#m68c5d81}

- [Microsoft .NET Native](http://msdn.microsoft.com/en-US/vstudio/dotnetnative)
- [.NET Native](http://ufcpp.wordpress.com/2014/04/03/net-native/)

## [fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) <a id="fwdsumatrapdf"></a> {#xd30da3f}

### C# 版 {#x61699f8}

コマンドラインからビルドする場合は以下のようにしてビルドします．<br>

```
csc /r:Microsoft.VisualBasic.dll fwdsumatrapdf.cs
```

Mono C# compiler (mcs) でもビルドできます．<br>

```
mcs -r:Microsoft.VisualBasic.dll fwdsumatrapdf.cs
```

***

- fwdsumatrapdf.cs

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
