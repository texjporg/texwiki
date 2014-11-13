---
title: "Visual Basic"
url: "/Visual Basic/"
date: 2013-09-10T21:47:10Z
pukiwiki: "Visual Basic"
---

# Visual Basic

## Visual Basic {#uaa6ccd6}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Summary {#oa25d360}

- [http://msdn.microsoft.com/ja-jp/library/2x7h1hfk.aspx](http://msdn.microsoft.com/ja-jp/library/2x7h1hfk.aspx)
- [http://msdn.microsoft.com/ja-jp/library/vstudio/2x7h1hfk.aspx](http://msdn.microsoft.com/ja-jp/library/vstudio/2x7h1hfk.aspx)
- [Visual Basic 中学校](http://homepage1.nifty.com/rucio/main/main.htm)
- [Visual Basic Advent Calendar 2013 : ATND](http://atnd.org/events/45244)
- [Visual Basic Advent Calendar 2012 : ATND](http://atnd.org/events/33729)

## 処理系 {#gfc5181e}

### vbc {#b8a94c02}

- [Microsoft Visual Studio Community](</Microsoft Visual Studio Community/>)
- [Microsoft Build Tools 2013](http://www.microsoft.com/ja-jp/download/details.aspx?id=40760) MSBuild, C# コンパイラ, VB コンパイラ

## [fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) <a id="fwdsumatrapdf"></a> {#cd033ba4}

### VB 版 {#ke8d064a}

コマンドラインからビルドする場合は以下のようにしてビルドします．<br>

```
vbc fwdsumatrapdf.vb
```

***

- fwdsumatrapdf.vb

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
