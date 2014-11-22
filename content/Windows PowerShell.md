---
title: "Windows PowerShell"
url: "/Windows PowerShell/"
date: 2012-06-22T21:23:04Z
pukiwiki: "Windows PowerShell"
---

# Windows PowerShell

## [Windows PowerShell](http://www.microsoft.com/powershell) {#q8f27306}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Summary {#p39685d9}

Windows PowerShell はコマンドラインシェルまたはオブジェクト指向プログラミングが可能なスクリプト言語です．

- [Microsoft スクリプト センター | TechNet](http://technet.microsoft.com/ja-jp/scriptcenter)
    - [Windows PowerShell でのスクリプティング](http://technet.microsoft.com/ja-jp/scriptcenter/powershell.aspx)
- [Scripting with Windows PowerShell](http://www.microsoft.com/powershell)
- [Windows PowerShell Language Specification Version 3.0](http://www.microsoft.com/en-us/download/details.aspx?id=36389)
- [Windows PowerShell Language Specification Version 2.0](http://www.microsoft.com/en-us/download/details.aspx?id=9706)

## インストール {#o9ec2561}

Windows 8.1 には Windows PowerShell 4.0 が標準搭載されています．<br>
Windows 7 には Windows PowerShell 2.0 が標準搭載されています．<br> <!-- Windows 7 の場合は [スタート]-[すべてのプログラム]-[アクセサリ]-[Windows PowerShell]-[Windows PowerShell] で Windows PowerShell を起動できます．~ -->

Windows 7 SP1 は [Windows Management Framework 4.0](http://www.microsoft.com/ja-jp/download/details.aspx?id=40855) をダウンロードしてインストールすれば Windows PowerShell 4.0 にアップグレードできます．<br>

Windows 8.1 ではタスク バーとナビゲーションのプロパティで「左下隅を右クリックするか Windows キー + X キーを押したときに表示されるメニューで、コマンド プロンプトを Windows PowerShell に置き換える」を ON にするとコマンド プロンプトから Windows PowerShell に置き換えることができます．<br>

- [Windows 8.1 左下隅のナビゲーション メニューをコマンド プロンプトからPowerShellに置き換える](http://nasunoblog.blogspot.jp/2013/11/windows-81-powershell.html)

## 使い方 {#f77eb1cd}

### スクリプトの実行 {#o34da8bc}

デフォルトの設定では実行ポリシーが Restricted に設定されており，スクリプトの実行が無効になっているため実行できません．<br>

```
PS > powershell .\hoge.ps1
.\hoge.ps1 : このシステムではスクリプトの実行が無効になっているため、ファイル C:\Users\<UserName>\Desktop\hoge.ps1 を読み込
むことができません。詳細については、「about_Execution_Policies」(http://go.microsoft.com/fwlink/?LinkID=135170) を参照
してください。
発生場所 行:1 文字:1
+ .\hoge.ps1
+ ~~~~~~~~~~
    + CategoryInfo          : セキュリティ エラー: (: ) []、PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

powershell -ExecutionPolicy RemoteSigned .\hoge.ps1 のように実行ポリシーに RemoteSigned を指定すれば実行できます．<br>

```
PS > powershell -ExecutionPolicy RemoteSigned .\hoge.ps1
```

### Tab 補完 {#b02c3a08}

Windows PowerShell では Tab でコマンドレットやファイル名などが補完できます．<br>
ただし Tab でファイル名を補完すると

```
.\hoge.tex
```

のように補完され

```
ptex2pdf -u -l .\hoge.tex
```

とするとコンパイルできません．

この場合は

```
ptex2pdf -u -l ".\hoge.tex".substring(2)
```

のようにすれば OK です．

コマンド プロンプトでも Tab でファイル名を補完できるので

```
cmd
ptex2pdf -u -l hoge.tex
```

としたほうが簡単かもしれません．

## パッケージ管理 {#l45cb315}

### chocolatey {#ofbc7592}

- [chocolatey](http://chocolatey.org/)
    - [packages](http://chocolatey.org/packages)
    - [wiki](https://github.com/chocolatey/chocolatey/wiki)

## ConEmu {#y7b6d9fc}

コンソールエミュレータ

- [http://sourceforge.net/projects/conemu/](http://sourceforge.net/projects/conemu/)
- [https://code.google.com/p/conemu-maximus5/](https://code.google.com/p/conemu-maximus5/)

## Excel との連携 {#v10b1cbb}

- [Excel PowerShell Tool Version 1.0](http://manamana.ddo.jp/blog/page/Excel-PowerShell-Tool-Version-10.aspx)

## Pash {#q316851f}

Windows PowerShell のオープンソース実装．<br>

- [Pash](https://github.com/Pash-Project/Pash)

## [fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) <a id="fwdsumatrapdf"></a> {#l14444b1}

### Windows PowerShell 版 {#sd5e7a03}

Windows PowerShell 2.0 で動作確認しています．<br>

***

- fwdsumatrapdf.ps1

***

```
#// vim: ts=4 sw=4 expandtab:
#// >powershell -ExecutionPolicy RemoteSigned .\fwdsumatrapdf.ps1 pdf tex line

param($pdf, $tex, $line)

$assemblies = (
    "Microsoft.VisualBasic"
)

$source = @"
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
                        ps.StartInfo.FileName = Interaction.InputBox("Input the path to SumatraPDF.exe.", "fwdsumatrapdf", "SumatraPDF.exe", 0, 0);
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
"@

Add-Type -ReferencedAssemblies $assemblies -TypeDefinition $source -Language CSharpVersion3
[SumatraPDFClient.ForwardSearch]::Main(@($pdf, $tex, $line))
```

***

## 関連リンク {#teb8e64f}

- [Windows PowerShell](http://technet.microsoft.com/ja-jp/library/bb978526.aspx)
    - [Windows PowerShell コア](http://technet.microsoft.com/ja-jp/library/bb978525.aspx)
        - [Windows PowerShell Cmdlet のヘルプ トピック](http://technet.microsoft.com/ja-jp/library/dd347701.aspx)
- [Windows PowerShell Blog - Site Home - MSDN Blogs](http://blogs.msdn.com/b/powershell/)
- [winscript.jp](http://winscript.jp/)
- [基礎知識 (Windows PowerShell)](http://ufcpp.net/study/powershell/basic.html)
- [使う気が無い人向けのPowerShell入門](http://karino2.livejournal.com/69885.html)
- [GUIユーザーのためのPowerShell入門](http://news.mynavi.jp/column/powershell/)
- [GREP and SED with PowerShell](http://blogs.msdn.com/b/zainnab/archive/2007/07/09/grep-and-sed-with-powershell.aspx)
- [Windows PowerShellを便利に使うための10のミニテクニック](http://handasse.blogspot.com/2009/08/powershell10.html)
- [DOSコマンドをPowershellから使う](http://mtgpowershell.blogspot.jp/2010/12/dospowershell.html)
- [コマンドが存在するかしないかを判定して, 条件分岐する構文のまとめ](http://qiita.com/items/d63861293fd6bde1b0d8)
- [.tex->.pdfにするのにコマンド2回たたくのが面倒だからまとめる](http://d.hatena.ne.jp/aldente39/20120609/1339213251)
    - [tex2pdf](https://gist.github.com/2899241)
- [PowerShellの補完機能について質問いたします。](http://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q1189580021)
- [PowerTab](http://powertab.codeplex.com/)
- [PowerTab](https://bitbucket.org/rod/dotfiles/src/tip/WindowsPowerShell/Modules/PowerTab/)
- [Windows Power Shell、なんとコマンドシェルからcomオブジェクトまで使える!!](http://morimorigameblogg.blogspot.jp/2009/11/windows-power-shellcom.html)
- [Dos、バッチ、コマンドプロンプトで仕事をしなければいけない不幸な人に送るforコマンド解説](http://ebi.dyndns.biz/windowsadmin/2012/03/16/dos%E3%80%81%E3%83%90%E3%83%83%E3%83%81%E3%80%81%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%83%97%E3%83%AD%E3%83%B3%E3%83%97%E3%83%88%E3%81%A7%E4%BB%95%E4%BA%8B%E3%82%92%E3%81%97%E3%81%AA%E3%81%91/)
- [連載：Windows 2000コマンドライン徹底活用　第8回　forコマンド（その2） --  1．ディレクトリの再帰的処理](http://www.atmarkit.co.jp/fwin2k/operation/command008/command01.html)
- [連載：Windows 2000コマンドライン徹底活用　第8回　forコマンド（その2） --  2．ファイル解析による繰り返し処理](http://www.atmarkit.co.jp/fwin2k/operation/command008/command02.html)
- [IT技術者が困ったときに見るブログ](http://pollux.tea-nifty.com/blog/)
- [生産性を向上できる Windows PowerShell に関する簡単なヒント](http://gallery.technet.microsoft.com/scriptcenter/cc89a8ff-8e4c-44f9-a47c-d1b8e46f788a)
- [How to remove (all) Windows 8 apps using PowerShell](http://www.ghacks.net/2013/08/20/how-to-remove-all-windows-8-apps-using-powershell/)
- [Learn Windows PowerShell 3 in a Month of Lunches, 2nd Edition](http://it-ebooks.info/book/1539/)
- [PowerShell Advent Calendar 2013 : ATND](http://atnd.org/events/45107)
- [Windows 8.1 でなくなった Windows エクスペリエンス インデックス GUI表示の代りに PowerShell で測定する](http://tech.guitarrapc.com/entry/2013/10/25/075010)
- [Windows batでコマンドの結果を変数に格納](http://qiita.com/long_long_float/items/f1a19816ef0d0070b68f)
- [PowerShell の コマンドレット例外を取得する](http://tech.guitarrapc.com/entry/2013/07/22/000738)
- [PowerShell 2.0の新機能（6）――他言語の利用](http://codezine.jp/article/detail/5007)
- [PC98の起動音をC# とWindows PowerShellで](https://gist.github.com/rsato/9707353)
- [PowerShellスクリプト内でC#コードを書いて使う](http://yomon.hatenablog.com/entry/2013/06/05/PowerShell%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88%E5%86%85%E3%81%A7C%23%E3%82%B3%E3%83%BC%E3%83%89%E3%82%92%E6%9B%B8%E3%81%84%E3%81%A6%E4%BD%BF%E3%81%86)
    <!-- try{(Get-ItemProperty -Path 'HKLM:\SOFTWARE\\Microsoft\Windows\CurrentVersion\App Paths\SumatraPDF.exe' -ErrorAction Stop).'(default)'}catch{Write-Output 'rundll32 shell32,ShellExec_RunDLL SumatraPDF'} -->
    <!-- try{(Get-ItemProperty -Path "HKLM:\SOFTWARE\\Microsoft\Windows\CurrentVersion\App Paths\SumatraPDF.exe" -ErrorAction Stop)."(default)"}catch{Write-Output "rundll32 shell32,ShellExec_RunDLL SumatraPDF"} -->

- [http://qiita.com/tags/powershell](http://qiita.com/tags/powershell)
    - [「 Linux ならできるのに、だから Windows は...」「それ PowerShell でできるよ」](http://qiita.com/cd01/items/da9a36582372e7d0a7f6)
