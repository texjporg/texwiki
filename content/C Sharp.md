---
title: "C Sharp"
url: "/C Sharp/"
date: 2013-08-07T02:37:33Z
pukiwiki: "C Sharp"
---

# C Sharp

## C#, VB {#j3a00665}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/200px-C_Sharp_wordmark.svg.png" alt="C#" style="float:right">

## C# {#h89884a4}

- [http://msdn.microsoft.com/ja-jp/library/kx37x362.aspx](http://msdn.microsoft.com/ja-jp/library/kx37x362.aspx)
- [http://msdn.microsoft.com/ja-jp/library/vstudio/kx37x362.aspx](http://msdn.microsoft.com/ja-jp/library/vstudio/kx37x362.aspx)
- [http://ufcpp.net/study/csharp/](http://ufcpp.net/study/csharp/)
- [http://www.wgag.net/csharp/](http://www.wgag.net/csharp/)

## VB {#o7ab0df9}

- [http://msdn.microsoft.com/ja-jp/library/2x7h1hfk.aspx](http://msdn.microsoft.com/ja-jp/library/2x7h1hfk.aspx)
- [http://msdn.microsoft.com/ja-jp/library/vstudio/2x7h1hfk.aspx](http://msdn.microsoft.com/ja-jp/library/vstudio/2x7h1hfk.aspx)

## C#, VB コンパイラ {#h8ce0ca0}

### csc, vbc {#fbf8c36a}

- [Microsoft® Build Tools 2013 Preview](http://www.microsoft.com/ja-jp/download/details.aspx?id=39318) MSBuild, C# コンパイラ, VB コンパイラ
- [MSBuild is now part of Visual Studio!](http://blogs.msdn.com/b/visualstudio/archive/2013/07/24/msbuild-is-now-part-of-visual-studio.aspx)
- [MicrosoftのC#とVBコンパイラが無償提供へ](http://www.infoq.com/jp/news/2013/08/msbuildtools)

### mcs {#zfadab82}

- [Mono](http://www.mono-project.com/)

## [fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) <a id="fwdsumatrapdf"></a> {#xd30da3f}

### C# 版 {#x61699f8}

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

### VB 版 {#x51a7ee4}

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
