---
title: "RJ TextEd"
url: "/RJ TextEd/"
date: 2013-04-05T05:20:00Z
pukiwiki: "RJ TextEd"
---

# RJ TextEd

## [RJ TextEd](http://www.rj-texted.se/) {#ec487c4b}

<!-- #ref(http://www.rj-texted.se/bilder/rjteheader.png,right,around,nolink,RJ TextEd) -->

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## RJ TextEd とは {#r9769625}

RJ TextEd は Unicode をサポートしたテキストエディタです．<br>

- [RJ TextEd](http://www.rj-texted.se/)

### 動作環境 {#c77f0dbf}

Windows 8.1, 8, 7, Vista, XP

## メニューの日本語化 {#mb8b01ee}

\[Env<ins>i</ins>ronment\]-\[Languages\]-\[\[jpn\] - Japanese (日本語)\] を選択するとメニューが日本語になります．

## TeX ファイルの色分け {#j03604b9}

デフォルトでは TeX ファイルの色分けは無効になっています．<br>

\[環境(<ins>N</ins>)\]-\[アドオン(<ins>A</ins>)...\]

強調設定タブから LaTeX を選択してファイル拡張子に .tex を追加して有効化します．<br>

## フォント {#s44cec9e}

\[環境(<ins>N</ins>)\]-\[オプション(<ins>O</ins>)...\]

フォントとタブからフォント設定ができます．<br>
設定を変更する場合は項目の右側の☐にチェック(☑)を入れれば設定が変更できるようになります．<br>

## スクリプト {#ee04f0fa}

\[ツール(<ins>T</ins>)\]-\[ツール設定...\]

ツールメニューのツールから \[追加\] をクリックしてスクリプトを追加します．<br>
追加したスクリプトはメニューの \[ツール(<ins>T</ins>)\] に表示されます．<br>

### pdfpLaTeX.js {#g293b7d1}

***

```
{
    var fso = CreateOleObject("Scripting.FileSystemObject");
    var wshShell = CreateOleObject("WScript.Shell");
    var c = fso.GetParentFolderName(Document.FileName);
    var b = fso.GetBaseName(Document.FileName);
    var cd = "cd /d " + "\"" + c + "\"";
    var ptex2pdf = "ptex2pdf -l -ot \"-synctex=1 -kanji=utf8 -guess-input-enc -sjis-terminal\"" + " " + "\"" + b + "\"";
    var cmd = "cmd /c " + cd + " && " + ptex2pdf;
    var ok = wshShell.Popup(cmd, 0, "RJ TextEd", 1 + 64);
    if (ok == 1) {
        Document.Save();
        MainApp.RunApp("C:\\Windows\\System32\\cmd.exe", cmd, true, true);
    }
}
```

***

### pdfupLaTeX.js {#y2fd8be4}

***

```
{
    var fso = CreateOleObject("Scripting.FileSystemObject");
    var wshShell = CreateOleObject("WScript.Shell");
    var c = fso.GetParentFolderName(Document.FileName);
    var b = fso.GetBaseName(Document.FileName);
    var cd = "cd /d " + "\"" + c + "\"";
    var ptex2pdf = "ptex2pdf -l -u -ot \"-synctex=1 -kanji=utf8 -no-guess-input-enc -sjis-terminal\"" + " " + "\"" + b + "\"";
    var cmd = "cmd /c " + cd + " && " + ptex2pdf;
    var ok = wshShell.Popup(cmd, 0, "RJ TextEd", 1 + 64);
    if (ok == 1) {
        Document.Save();
        MainApp.RunApp("C:\\Windows\\System32\\cmd.exe", cmd, true, true);
    }
}
```

***

### TeXworks.js {#g8325174}

***

```
{
    var fso = CreateOleObject("Scripting.FileSystemObject");
    var wshShell = CreateOleObject("WScript.Shell");
    var re = CreateOleObject("VBScript.RegExp");
    re.Pattern = "\.[^.]*$";
    var currentTeXFile = Document.FileName;
    var pdfFile = re.Replace(currentTeXFile, ".pdf");
    var texworks = "texworks";

    if (!fso.FileExists(pdfFile)) {
        var mainTeXFile = MainApp.InputBox("RJ TextEd", "Input the path to main TeX file.");
        if (mainTeXFile != "") {
            pdfFile = re.Replace(mainTeXFile, ".pdf");
        }
    }

    var mainTeXDir = fso.GetParentFolderName(pdfFile);
    var cd = "cd /d " + "\"" + mainTeXDir + "\"";
    pdfFile = "\"" + pdfFile + "\"";

    var args = texworks + " " + pdfFile;
    var cmd = "cmd /c " + cd + " && echo " + args + " | cmd";
    MainApp.RunApp("C:\\Windows\\System32\\cmd.exe", cmd, false, true);
}
```

***
