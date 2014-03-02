---
title: "jN"
url: "/jN/"
date: 2014-01-23T05:03:45Z
pukiwiki: "jN"
---

# jN

[Notepad++](/Notepad++/) > jN

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## jN (JavaScript for Notepad++) → 問題が発生する場合は [NppExec](/NppExec/) または [Python Script](</Python Script/>) を使用する {#i71db25c}

jN (JavaScript for Notepad++) を使うと LaTeX 環境を簡単に作ることができます．<br>
plugins\jN\includes\ フォルダーに js ファイルを作成すると JavaScript が実行できます．<br>

- [jn-npp-plugin - Plugin for Notepad++ allowing you to automate some tasks by using JavaScript - Google Project Hosting](https://code.google.com/p/jn-npp-plugin/)
- [jN - API](http://jn-npp-plugin.googlecode.com/svn/wiki/API/api.xml)

### License {#y5793722}

GPLv3

### ChangeLog {#w5083e4f}

- [https://code.google.com/p/jn-npp-plugin/source/list](https://code.google.com/p/jn-npp-plugin/source/list)

### Typeset.js {#oab03eb3}

plugins\jN\includes\Typeset.js を作成します．<br>
メニューの \[Typeset\] から実行できます．<br>

***

```
(function(){
    var pdfupLaTeX = {
        text: "upLaTeX (ptex2pdf)",
        cmd: function(){
            var fso = new ActiveXObject("Scripting.FileSystemObject");
            var currentTeXFile = Editor.currentView.files[Editor.currentView.file];
            var c = fso.GetParentFolderName(currentTeXFile);
            var b = fso.GetBaseName(currentTeXFile);
            var cd = "cd /d " + ["\"", c, "\""].join("");
            var ptex2pdf = "ptex2pdf -u -l -ot \"-synctex=1 -no-guess-input-enc -kanji=utf8 -sjis-terminal\"" + " " + ["\"", b, "\""].join("");
            var cmd = "cmd /c " + cd + " && " + ptex2pdf;
            execute(cmd);
        }
    };
    var pdfupLaTeX2 = {
        text: "upLaTeX (dvips + ps2pdf)",
        cmd: function(){
            var fso = new ActiveXObject("Scripting.FileSystemObject");
            var currentTeXFile = Editor.currentView.files[Editor.currentView.file];
            var c = fso.GetParentFolderName(currentTeXFile);
            var b = fso.GetBaseName(currentTeXFile);
            var cd = "cd /d " + ["\"", c, "\""].join("");
            var uplatex = "uplatex -synctex=1 -no-guess-input-enc -kanji=utf8 -sjis-terminal" + " " + ["\"", b, "\""].join("");
            var dvips = "dvips -Ppdf -z -f" + " " + ["\"", b, ".dvi", "\""].join("") + " | convbkmk -u > " + ["\"", b, ".ps", "\""].join("");
            var ps2pdf = "ps2pdf.bat" + " " + ["\"", b, ".ps", "\""].join("");
            var uplatex_dvips_ps2pdf = uplatex + " && " + dvips + " && " + ps2pdf;
            var cmd = "cmd /c " + cd + " && " + uplatex_dvips_ps2pdf;
            execute(cmd);
        }
    };
    var pdfLaTeX = {
        text: "pdfLaTeX",
        cmd: function(){
            var fso = new ActiveXObject("Scripting.FileSystemObject");
            var currentTeXFile = Editor.currentView.files[Editor.currentView.file];
            var c = fso.GetParentFolderName(currentTeXFile);
            var b = fso.GetBaseName(currentTeXFile);
            var cd = "cd /d " + ["\"", c, "\""].join("");
            var pdflatex = "pdflatex -synctex=1" + " " + ["\"", b, "\""].join("");
            var cmd = "cmd /c " + cd + " && " + pdflatex;
            execute(cmd);
        }
    };
    var luaLaTeX = {
        text: "LuaLaTeX",
        cmd: function(){
            var fso = new ActiveXObject("Scripting.FileSystemObject");
            var currentTeXFile = Editor.currentView.files[Editor.currentView.file];
            var c = fso.GetParentFolderName(currentTeXFile);
            var b = fso.GetBaseName(currentTeXFile);
            var cd = "cd /d " + ["\"", c, "\""].join("");
            var pdflatex = "lualatex -synctex=1" + " " + ["\"", b, "\""].join("");
            var cmd = "cmd /c " + cd + " && " + pdflatex;
            execute(cmd);
        }
    };
    var luaJITLaTeX = {
        text: "LuaJITLaTeX",
        cmd: function(){
            var fso = new ActiveXObject("Scripting.FileSystemObject");
            var currentTeXFile = Editor.currentView.files[Editor.currentView.file];
            var c = fso.GetParentFolderName(currentTeXFile);
            var b = fso.GetBaseName(currentTeXFile);
            var cd = "cd /d " + ["\"", c, "\""].join("");
            var pdflatex = "luajitlatex -synctex=1" + " " + ["\"", b, "\""].join("");
            var cmd = "cmd /c " + cd + " && " + pdflatex;
            execute(cmd);
        }
    };
    var xeLaTeX = {
        text: "XeLaTeX",
        cmd: function(){
            var fso = new ActiveXObject("Scripting.FileSystemObject");
            var currentTeXFile = Editor.currentView.files[Editor.currentView.file];
            var c = fso.GetParentFolderName(currentTeXFile);
            var b = fso.GetBaseName(currentTeXFile);
            var cd = "cd /d " + ["\"", c, "\""].join("");
            var pdflatex = "xelatex -synctex=1" + " " + ["\"", b, "\""].join("");
            var cmd = "cmd /c " + cd + " && " + pdflatex;
            execute(cmd);
        }
    };
    var sumatraPDF = {
        text: "SumatraPDF",
        cmd: function(){
            var fso = new ActiveXObject("Scripting.FileSystemObject");
            var wshShell = new ActiveXObject("WScript.Shell");
            var npp = Editor.nppDir + "\\notepad++.exe";
            var currentTeXFile = Editor.currentView.files[Editor.currentView.file];
            var suffix = /\.[^.]*$/;
            var pdfFile = currentTeXFile.replace(suffix, ".pdf");
            var line = Editor.currentView.line + 1;
            var sumatraPDF = "C:\\Program Files\\SumatraPDF\\SumatraPDF.exe";
            var existSumatraPDF = true;

            try {
                sumatraPDF = wshShell.RegRead("HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths\\SumatraPDF.exe\\");
            } catch (e) {
                if (!fso.FileExists(sumatraPDF)) {
                    sumatraPDF = "SumatraPDF.exe";
                    existSumatraPDF = false;
                }
            }

            if (existSumatraPDF) {
                sumatraPDF = ["\"", sumatraPDF, "\""].join("");
            }

            var mainTeXDir = fso.GetParentFolderName(pdfFile);
            var cd = "cd /d " + ["\"", mainTeXDir, "\""].join("");
            currentTeXFile = ["\"", currentTeXFile, "\""].join("");
            pdfFile = ["\"", pdfFile, "\""].join("");

            var args = "-reuse-instance " + pdfFile + " -inverse-search \"\\\"" + npp + "\\\" \\\"%f\\\" -n%l -c%c\"" + " -forward-search " + currentTeXFile + " " + line;
            new ActiveXObject("Shell.Application").ShellExecute(sumatraPDF, args, "", "open", 1);
        }
    };
    var fwdsumatrapdf = {
        text: "fwdsumatrapdf",
        cmd: function(){
            var fso = new ActiveXObject("Scripting.FileSystemObject");
            var wshShell = new ActiveXObject("WScript.Shell");
            var currentTeXFile = Editor.currentView.files[Editor.currentView.file];
            var suffix = /\.[^.]*$/;
            var pdfFile = currentTeXFile.replace(suffix, ".pdf");
            var line = Editor.currentView.line + 1;
            var fwdsumatrapdf = "fwdsumatrapdf";

            var mainTeXDir = fso.GetParentFolderName(pdfFile);
            var cd = "cd /d " + ["\"", mainTeXDir, "\""].join("");
            currentTeXFile = ["\"", currentTeXFile, "\""].join("");
            pdfFile = ["\"", pdfFile, "\""].join("");

            var args = pdfFile + " " + currentTeXFile + " " + line;
            new ActiveXObject("Shell.Application").ShellExecute(fwdsumatrapdf, args, "", "open", 1);
        }
    };
    function execute(commandLine) {
        Editor.saveAll();
        new ActiveXObject("WScript.Shell").Run(commandLine, 1, true);
    }
    var typesetMenu = Editor.addMenu("Typeset");
    typesetMenu.addItem(pdfupLaTeX);
    typesetMenu.addItem(pdfupLaTeX2);
    typesetMenu.addItem(pdfLaTeX);
    typesetMenu.addItem(luaLaTeX);
    typesetMenu.addItem(luaJITLaTeX);
    typesetMenu.addItem(xeLaTeX);
    typesetMenu.addItem(sumatraPDF);
    typesetMenu.addItem(fwdsumatrapdf);
})();
```

***

## SumatraPDF との連携 {#u247e15e}

### forward and inverse search (SumatraPDF を前面に表示したい場合) {#c9243731}

\[Typeset\]-\[SumatraPDF\] を実行します．<br>

### forward search (SumatraPDF を前面に表示したくない場合) {#kb787423}

[SumatraPDF/fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) の fwdsumatrapdf.exe を使用します．<br>

\[Typeset\]-\[fwdsumatrapdf\] を実行します．<br>

### inverse search {#r1527f9a}

[Notepad++#SumatraPDF との連携](/Notepad++/#ted60cbe) を参照．<br>
