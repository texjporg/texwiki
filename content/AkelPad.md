---
title: "AkelPad"
url: "/AkelPad/"
date: 2013-02-05T00:25:28Z
pukiwiki: "AkelPad"
---

# AkelPad

## [AkelPad](http://akelpad.sourceforge.net/) {#n4915b77}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## AkelPad とは {#k63a86af}

AkelPad はコンパクトで高速なテキストエディタです．

- [AkelPad](http://akelpad.sourceforge.net/)
- [AkelPad | Free Development software downloads at SourceForge.net](http://sourceforge.net/projects/akelpad/)
- [AkelPad 4 - User's Manual](http://akelpad.cvs.sourceforge.net/viewvc/akelpad/akelpad_4/AkelFiles/Docs/AkelHelp-Eng.htm)
- [AkelPad の使い方 - AkelPad - SourceForge.JP](http://sourceforge.jp/projects/sfnet_akelpad/howto/usage)
- [http://freesftys.wkeya.com/app/akelpad/](http://freesftys.wkeya.com/app/akelpad/)

### 動作環境 {#yf7ac403}

[Compatibility](http://akelpad.cvs.sourceforge.net/viewvc/akelpad/akelpad_4/AkelFiles/Docs/AkelHelp-Eng.htm#ch0) を参照．

### License {#r4837243}

[BSD 2-Clause](http://akelpad.cvs.sourceforge.net/viewvc/akelpad/akelpad_4/AkelFiles/Docs/AkelHelp-Eng.htm#ch8)

## 設定 {#y9346bd5}

### 既定のコードページ {#da5f19c1}

日本語版 Windows では既定のコードページは 932 (ANSI/OEM - 日本語 Shift-JIS) になっています．<br>
UTF-8 を既定のコードページにする場合は 65001 (UTF-8) に設定します．<br>

***

<span style="color:#0055DD;background-color:#0055DD;"><ins>　</ins></span>![AkelPad](http://akelpad.sourceforge.net/img/l.gif)<span style="color:#0055DD;background-color:#0055DD;"><ins>　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>設定...</strong></span>　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　　<strong>\[ 全般　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[ レジストリー \]\[ エディター 1 \]\[ エディター 2 \]\[ 詳細設定 \]</ins></span><br>
　　　　　実行<br>
　　　　　　　コマンド (%f ファイル, %a akelpad のディレクトリ):<br>

<br>

<br>

　　　　　　　作業ディレクトリ (%d ファイルのディレクトリ):<br>

<br>

<br>

<br>

　　　　コードページの認識:　　　　　　　　　　　　　　　　　　　　　　　　　バッファー:<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[ 日本語 (932, UTF-8)　　　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</span>　　<ins>1024</ins><br>

<br>

　　　　既定のコードページ:<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[ 65001 (UTF-8)　　　　　　　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[　フィルター　\]</span><br>

<br>

　　　　　New file<br>
　　　　　 <span style="color:Black;background-color:#EEEEEE;">\[ 65001 (UTF-8)　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</span>　☐ BOM　　<span style="color:Black;background-color:#EEEEEE;">\[ Win　　　<strong>ᐯ</strong>\]</span><br>

***

## スクリプト {#fe72e81b}

AkelFiles\Plugs\Scripts フォルダーにスクリプトを配置します．<br>
\[オプション(O)\]-\[プラグイン(N)...\] の プラグイン::関数 から Scripts::Main を選択して \[呼び出し\] をクリックします．<br>
Scripts から実行するスクリプトを選択して \[Exec\] をクリックします．<br>

### pdfpLaTeX.js {#mfc340cc}

***

```
(function () {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var c = fso.GetParentFolderName(AkelPad.GetEditFile(0));
    var b = fso.GetBaseName(AkelPad.GetEditFile(0));
    var cd = "cd /d " + ["\"", c, "\""].join("");
    var ptex2pdf = "ptex2pdf -l -ot \"-synctex=1 -guess-input-enc -kanji=utf8 -sjis-terminal\"";
    var codepage = AkelPad.GetEditCodePage(0);
    if (codepage == 65001) {
        ptex2pdf = "ptex2pdf -l -ot \"-synctex=1 -no-guess-input-enc -kanji=utf8 -sjis-terminal\"";
    } else if (codepage == 932) {
        ptex2pdf = "ptex2pdf -l -ot \"-synctex=1 -no-guess-input-enc -kanji=sjis -sjis-terminal\"";
    } else if (codepage == 20932) {
        ptex2pdf = "ptex2pdf -l -ot \"-synctex=1 -no-guess-input-enc -kanji=euc -sjis-terminal\"";
    } else if (codepage == 50220 || codepage == 50221 || codepage == 50222) {
        ptex2pdf = "ptex2pdf -l -ot \"-synctex=1 -no-guess-input-enc -kanji=jis -sjis-terminal\"";
    }
    ptex2pdf += " " + ["\"", b, "\""].join("");
    var cmd = "cmd /c " + cd + " && " + ptex2pdf;

    var ok = AkelPad.MessageBox(AkelPad.GetMainWnd(), cmd, "AkelPad", 1 | 64);
    if (ok == 1) {
        AkelPad.SaveFile(AkelPad.GetEditWnd(), AkelPad.GetEditFile(0));
        AkelPad.Exec(cmd);
    }
}.call(this));
```

***

### pdfupLaTeX.js {#c0a300af}

***

```
(function () {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var c = fso.GetParentFolderName(AkelPad.GetEditFile(0));
    var b = fso.GetBaseName(AkelPad.GetEditFile(0));
    var cd = "cd /d " + ["\"", c, "\""].join("");
    var ptex2pdf = "ptex2pdf -l -u -ot \"-synctex=1 -no-guess-input-enc -kanji=utf8 -sjis-terminal\"" + " " + ["\"", b, "\""].join("");
    var cmd = "cmd /c " + cd + " && " + ptex2pdf;

    var ok = AkelPad.MessageBox(AkelPad.GetMainWnd(), cmd, "AkelPad", 1 | 64);
    if (ok == 1) {
        AkelPad.SaveFile(AkelPad.GetEditWnd(), AkelPad.GetEditFile(0));
        AkelPad.Exec(cmd);
    }
}.call(this));
```

***

### pdfLaTeX.js {#bcb5069b}

***

```
(function () {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var c = fso.GetParentFolderName(AkelPad.GetEditFile(0));
    var b = fso.GetBaseName(AkelPad.GetEditFile(0));
    var cd = "cd /d " + ["\"", c, "\""].join("");
    var pdflatex = "pdflatex -synctex=1" + " " + ["\"", b, "\""].join("");
    var cmd = "cmd /c " + cd + " && " + pdflatex;

    var ok = AkelPad.MessageBox(AkelPad.GetMainWnd(), cmd, "AkelPad", 1 | 64);
    if (ok == 1) {
        AkelPad.SaveFile(AkelPad.GetEditWnd(), AkelPad.GetEditFile(0));
        AkelPad.Exec(cmd);
    }
}.call(this));
```

***

### LuaLaTeX.js {#fdfe69ad}

***

```
(function () {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var c = fso.GetParentFolderName(AkelPad.GetEditFile(0));
    var b = fso.GetBaseName(AkelPad.GetEditFile(0));
    var cd = "cd /d " + ["\"", c, "\""].join("");
    var lualatex = "lualatex -synctex=1" + " " + ["\"", b, "\""].join("");
    var cmd = "cmd /c " + cd + " && " + lualatex;

    var ok = AkelPad.MessageBox(AkelPad.GetMainWnd(), cmd, "AkelPad", 1 | 64);
    if (ok == 1) {
        AkelPad.SaveFile(AkelPad.GetEditWnd(), AkelPad.GetEditFile(0));
        AkelPad.Exec(cmd);
    }
}.call(this));
```

***

### LuaJITLaTeX.js {#h075066b}

***

```
(function () {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var c = fso.GetParentFolderName(AkelPad.GetEditFile(0));
    var b = fso.GetBaseName(AkelPad.GetEditFile(0));
    var cd = "cd /d " + ["\"", c, "\""].join("");
    var luajitlatex = "luajitlatex -synctex=1" + " " + ["\"", b, "\""].join("");
    var cmd = "cmd /c " + cd + " && " + luajitlatex;

    var ok = AkelPad.MessageBox(AkelPad.GetMainWnd(), cmd, "AkelPad", 1 | 64);
    if (ok == 1) {
        AkelPad.SaveFile(AkelPad.GetEditWnd(), AkelPad.GetEditFile(0));
        AkelPad.Exec(cmd);
    }
}.call(this));
```

***

### XeLaTeX.js {#pe628e7a}

***

```
(function () {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var c = fso.GetParentFolderName(AkelPad.GetEditFile(0));
    var b = fso.GetBaseName(AkelPad.GetEditFile(0));
    var cd = "cd /d " + ["\"", c, "\""].join("");
    var xelatex = "xelatex -synctex=1" + " " + ["\"", b, "\""].join("");
    var cmd = "cmd /c " + cd + " && " + xelatex;

    var ok = AkelPad.MessageBox(AkelPad.GetMainWnd(), cmd, "AkelPad", 1 | 64);
    if (ok == 1) {
        AkelPad.SaveFile(AkelPad.GetEditWnd(), AkelPad.GetEditFile(0));
        AkelPad.Exec(cmd);
    }
}.call(this));
```

***

### TeXworks.js {#l8cddb6a}

***

```
(function () {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var currentTeXFile = AkelPad.GetEditFile(0);
    var suffix = new RegExp(/\.[^.]*$/);
    var pdfFile = currentTeXFile.replace(suffix, ".pdf");
    var texworks = "texworks";

    if (!fso.FileExists(pdfFile)) {
        var mainTeXFile = AkelPad.InputBox(AkelPad.GetMainWnd(), "AkelPad", "Input the path to main TeX file.", pdfFile.replace(suffix, ".tex"));
        if (mainTeXFile != "") {
            pdfFile = mainTeXFile.replace(suffix, ".pdf");
        }
    }

    var mainTeXDir = fso.GetParentFolderName(pdfFile);
    var cd = "cd /d " + ["\"", mainTeXDir, "\""].join("");
    pdfFile = ["\"", pdfFile, "\""].join("");

    var args = texworks + " " + pdfFile;
    var cmd = "cmd /c " + cd + " && echo " + args + " | cmd";
    AkelPad.Exec(cmd);
}.call(this));
```

***

### SumatraPDF.js {#k71c47b2}

***

```
(function () {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var wshShell = new ActiveXObject("WScript.Shell");
    var currentTeXFile = AkelPad.GetEditFile(0);
    var suffix = new RegExp(/\.[^.]*$/);
    var pdfFile = currentTeXFile.replace(suffix, ".pdf");
    var texworks = "C:\\Program Files\\SumatraPDF\\SumatraPDF.exe";
    var existSumatraPDF = true;

    try {
        sumatraPDF = wshShell.RegRead("HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths\\SumatraPDF.exe\\");
    } catch (e) {
        if (!fso.FileExists(sumatraPDF)) {
            sumatraPDF = AkelPad.InputBox(AkelPad.GetMainWnd(), "AkelPad", "Input the path to SumatraPDF.exe.", "SumatraPDF.exe");
            if (!fso.FileExists(sumatraPDF)) {
                sumatraPDF = "rundll32 shell32,ShellExec_RunDLL SumatraPDF";
                existSumatraPDF = false;
            }
        }
    }

    if (existSumatraPDF) {
        sumatraPDF = ["\"", sumatraPDF, "\""].join("");
    }

    if (!fso.FileExists(pdfFile)) {
        var mainTeXFile = AkelPad.InputBox(AkelPad.GetMainWnd(), "AkelPad", "Input the path to main TeX file.", pdfFile.replace(suffix, ".tex"));
        if (mainTeXFile != "") {
            pdfFile = mainTeXFile.replace(suffix, ".pdf");
        }
    }

    var mainTeXDir = fso.GetParentFolderName(pdfFile);
    var cd = "cd /d " + ["\"", mainTeXDir, "\""].join("");
    pdfFile = ["\"", pdfFile, "\""].join("");

    var args = sumatraPDF + " -reuse-instance " + pdfFile;
    var cmd = "cmd /c " + cd + " && echo " + args + " | cmd";
    AkelPad.Exec(cmd);
}.call(this));
```

***

<!-- -https://bitbucket.org/FallenPhoenix/akelpad-scripts-collection/src/11cf068e06be7fd69f52cac3309ec2d3c5ed330b/KDJ/GoToEx.js?at=master -->
