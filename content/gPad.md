---
title: "gPad"
url: "/gPad/"
date: 2012-05-25T14:38:24Z
pukiwiki: "gPad"
---

# gPad

## [gPad](http://mfactory.me/) {#x0068a70}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## gPad とは {#yc9df0b3}

gPad は Windows 7, Vista, XP, 2000 で動作する国産でフリーの MDI 型テキストエディタです．

- [mFactory](http://mfactory.me/) 公式サイト
- [FrontPage&nbsp;|&nbsp;gPad Wiki](http://gpad.mfactory.me/)
- [窓の杜 - gPad](http://www.forest.impress.co.jp/lib/offc/document/txteditor/gpad.html)
- [Vector - gPad](http://www.vector.co.jp/soft/winnt/writing/se478089.html)

## マクロ {#w9b67570}

マクロを使うと [サクラエディタ](</サクラエディタ/>), Mery と同様に，LaTeX 環境を簡単に作ることができます．

### pdfpLaTeX.js {#b88feabd}

***

```
function main()
{
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var c = document.Path;
  var b = fso.GetBaseName(document.Name);
  var cd = "cd /d " + ["\"", c, "\""].join("");
  var latex = "platex -synctex=1 -guess-input-enc -sjis-terminal";
  latex += " " + "-jobname=" + ["\"", b, "\""].join("") + " " + ["\"", b, "\""].join("");
  var dvipdfm = "dvipdfmx" + " " + ["\"", b, "\""].join("");
  var cmd = "cmd /c " + cd + " && " + latex + " && " + dvipdfm;

  var ok = confirm(cmd);
  if (ok) {
    document.Save();
    new ActiveXObject("WScript.Shell").Run(cmd, 1, true);
  }
}

main();
```

***

### TeXworks.js {#eed78d60}

[TeXworks#組み込みの PDF ビューアに日本語を表示させる](/TeXworks/#t5313ebc) を参照してフォントの埋め込みの設定を行います．

***

```
function main()
{
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var currentTeXFile = document.FullName;
  var pdfFile = currentTeXFile.replace(new RegExp(/\.[^.]*$/), ".pdf");
  var texworks = "C:/w32tex/share/texworks/TeXworks.exe";
  var mainTeXDir;
  var cd;
  var cmd;
  var args;

  if (!fso.FileExists(texworks)) {
    texworks = prompt("Input the path to TeXworks.exe.", "TeXworks.exe");
    if (!fso.FileExists(texworks)) {
      texworks = "TeXworks.exe";
    }
  }

  texworks = ["\"", texworks, "\""].join("");

  if (!fso.FileExists(pdfFile)) {
    var mainTeXFile = prompt("Input the path to main TeX file.", pdfFile.replace(new RegExp(/\.[^.]*$/), ".tex"));
    if (mainTeXFile != "") {
      pdfFile = mainTeXFile.replace(new RegExp(/\.[^.]*$/), ".pdf");
    }
  }

  mainTeXDir = fso.GetParentFolderName(pdfFile);
  cd = "cd /d " + ["\"", mainTeXDir, "\""].join("");
  pdfFile = ["\"", pdfFile, "\""].join("");

  args = texworks + " " + pdfFile;
  cmd = "cmd /c " + cd + " && echo " + args + " | cmd";
  new ActiveXObject("WScript.Shell").Run(cmd, 1, true);
}

main();
```

***
