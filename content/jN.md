---
title: "jN"
url: "/jN/"
date: 2014-01-23T05:03:45Z
pukiwiki: "jN"
---

# jN

[Notepad++](/Notepad++/) > jN

## jN (JavaScript for Notepad++) → 問題が発生する場合は [NppExec](/NppExec/) または [Python Script](</Python Script/>) を使用する {#i71db25c}

- [jn-npp-plugin - Plugin for Notepad++ allowing you to automate some tasks by using JavaScript - Google Project Hosting](https://code.google.com/p/jn-npp-plugin/)
- [jN - API](http://jn-npp-plugin.googlecode.com/svn/wiki/API/api.xml)

### License {#y5793722}

GPLv3

### Typeset.js {#oab03eb3}

***

```
(function(){
    var pdfupLaTeX = {
        text: "pdfupLaTeX",
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
    function execute(commandLine) {
        Editor.saveAll();
        new ActiveXObject("WScript.Shell").Run(commandLine, 1, true);
    }
    var typesetMenu = Editor.addMenu("Typeset");
    typesetMenu.addItem(pdfupLaTeX);
    typesetMenu.addItem(sumatraPDF);
})();
```

***
