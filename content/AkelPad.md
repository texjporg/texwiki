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

### 動作環境 {#yf7ac403}

Windows 7, Vista, 2003, XP, 2000, NT 4.0, Me, 98, 95

```

```

## スクリプト {#fe72e81b}

AkelFiles\Plugs\Scripts フォルダーにスクリプトを配置します．<br>
\[Options\]-\[Plug-ins...\] の Plugin::Function から Scripts::Main を選択して \[Call\] をクリックします．<br>
Scripts から実行するスクリプトを選択して \[Exec\] をクリックします．<br>

### pdfpLaTeX.js {#mfc340cc}

***

```
function main()
{
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var c = fso.GetParentFolderName(AkelPad.GetEditFile(0));
  var b = fso.GetBaseName(AkelPad.GetEditFile(0));
  var cd = "cd /d " + ["\"", c, "\""].join("");
  var latex = "platex -synctex=1 -guess-input-enc -sjis-terminal";
  latex += " " + "-jobname=" + ["\"", b, "\""].join("") + " " + ["\"", b, "\""].join("");
  var dvipdfm = "dvipdfmx" + " " + ["\"", b, "\""].join("");
  var cmd = "cmd /c " + cd + " && " + latex + " && " + dvipdfm;

  var ok = AkelPad.MessageBox(AkelPad.GetMainWnd(), cmd, "AkelPad", 65);
  if (ok == 1) {
    AkelPad.SaveFile(AkelPad.GetEditWnd(), AkelPad.GetEditFile(0));
    AkelPad.Exec(cmd);
  }
}

main();
```

***

### TeXworks.js {#l8cddb6a}

***

```
function main()
{
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var currentTeXFile = AkelPad.GetEditFile(0);
  var pdfFile = currentTeXFile.replace(new RegExp(/\.[^.]*$/), ".pdf");
  var texworks = "texworks";

  if (!fso.FileExists(pdfFile)) {
    var mainTeXFile = AkelPad.InputBox(AkelPad.GetMainWnd(), "AkelPad", "Input the path to main TeX file.", pdfFile.replace(new RegExp(/\.[^.]*$/), ".tex"));
    if (mainTeXFile != "") {
      pdfFile = mainTeXFile.replace(new RegExp(/\.[^.]*$/), ".pdf");
    }
  }

  var mainTeXDir = fso.GetParentFolderName(pdfFile);
  var cd = "cd /d " + ["\"", mainTeXDir, "\""].join("");
  pdfFile = ["\"", pdfFile, "\""].join("");

  var args = texworks + " " + pdfFile;
  var cmd = "cmd /c " + cd + " && echo " + args + " | cmd";
  AkelPad.Exec(cmd);
}

main();
```

***
