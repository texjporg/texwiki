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

## SumatraPDF との連携 {#vb348fe8}

### forward and inverse search (SumatraPDF v1.9.4622 以上の場合) {#l2061012}

#### SumatraPDF.js {#vcd32599}

***

```
function main()
{
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var gpad = editor.FullName;
  var currentTeXFile = document.FullName;
  var pdfFile = currentTeXFile.replace(new RegExp(/\.[^.]*$/), ".pdf");
  var line = document.selection.GetActivePointY(ePosLogical);
  var sumatraPDF = "C:/Program Files/SumatraPDF/SumatraPDF.exe";
  var mainTeXDir;
  var cd;
  var cmd;
  var args;

  if (!fso.FileExists(sumatraPDF)) {
    sumatraPDF = "C:/Program Files (x86)/SumatraPDF/SumatraPDF.exe";
    if (!fso.FileExists(sumatraPDF)) {
      sumatraPDF = prompt("Input the path to SumatraPDF.exe.", "SumatraPDF.exe");
      if (!fso.FileExists(sumatraPDF)) {
        sumatraPDF = "SumatraPDF.exe";
      }
    }
  }

  sumatraPDF = ["\"", sumatraPDF, "\""].join("");

  if (!fso.FileExists(pdfFile)) {
    var mainTeXFile = prompt("Input the path to main TeX file.", pdfFile.replace(new RegExp(/\.[^.]*$/), ".tex"));
    if (mainTeXFile != "") {
      pdfFile = mainTeXFile.replace(new RegExp(/\.[^.]*$/), ".pdf");
    }
  }

  mainTeXDir = fso.GetParentFolderName(pdfFile);
  cd = "cd /d " + ["\"", mainTeXDir, "\""].join("");
  currentTeXFile = ["\"", currentTeXFile, "\""].join("");
  pdfFile = ["\"", pdfFile, "\""].join("");

  args = sumatraPDF + " -reuse-instance " + pdfFile + " -inverse-search \"\\\"" + gpad + "\\\" -Y=%l \\\"%f\\\"\"" + " -forward-search " + currentTeXFile + " " + line;
  cmd = "cmd /c " + cd + " && echo " + args + " | cmd";
  new ActiveXObject("WScript.Shell").Run(cmd, 1, true);
}

main();
```

***

### forward search (SumatraPDF v1.9.4622 未満 かつ SumatraPDF v1.7.3952 以上の場合) {#q6af99da}

[SumatraPDF#fwdsumatrapdf.exe](/SumatraPDF/#n8da77e2) の fwdsumatrapdf.exe を使用します．<br>

#### fwdsumatrapdf.js {#c541770c}

***

```
function main()
{
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var currentTeXFile = document.FullName;
  var pdfFile = currentTeXFile.replace(new RegExp(/\.[^.]*$/), ".pdf");
  var line = document.selection.GetActivePointY(ePosLogical);
  var fwdsumatrapdf = "C:/w32tex/NDde/Binary/fwdsumatrapdf.exe";
  var mainTeXDir;
  var cd;
  var cmd;
  var args;
```

```
  if (!fso.FileExists(fwdsumatrapdf)) {
    fwdsumatrapdf = prompt("Input the path to fwdsumatrapdf.exe.", "fwdsumatrapdf.exe");
    if (!fso.FileExists(fwdsumatrapdf)) {
      fwdsumatrapdf = "fwdsumatrapdf.exe";
    }
  }

  fwdsumatrapdf = ["\"", fwdsumatrapdf, "\""].join("");

  if (!fso.FileExists(pdfFile)) {
    var mainTeXFile = prompt("Input the path to main TeX file.", pdfFile.replace(new RegExp(/\.[^.]*$/), ".tex"));
    if (mainTeXFile != "") {
      pdfFile = mainTeXFile.replace(new RegExp(/\.[^.]*$/), ".pdf");
    }
  }

  mainTeXDir = fso.GetParentFolderName(pdfFile);
  cd = "cd /d " + ["\"", mainTeXDir, "\""].join("");
  currentTeXFile = ["\"", currentTeXFile, "\""].join("");
  pdfFile = ["\"", pdfFile, "\""].join("");

  args = fwdsumatrapdf + " " + pdfFile + " " + currentTeXFile + " " + line;
  cmd = "cmd /c " + cd + " && " + args;
  new ActiveXObject("WScript.Shell").Run(cmd, 1, true);
}

main();
```

***

### inverse search {#dae36579}

```
C:\gPad\gPad.exe -Y=%l "%f"
```

## 関連リンク {#j325bf81}

- [Gpadという進化した凡庸エディタ](http://web-edit.jimdo.com/%E6%97%A5%E6%9C%AC%E8%AA%9E%E5%85%A5%E5%8A%9B%E8%A3%9C%E5%AE%8C%E3%81%8C%E5%87%BA%E6%9D%A5%E3%82%8B%E3%82%A8%E3%83%87%E3%82%A3%E3%82%BF/gpad%E3%81%A8%E3%81%84%E3%81%86%E9%80%B2%E5%8C%96%E3%81%97%E3%81%9F%E5%87%A1%E5%BA%B8%E3%82%A8%E3%83%87%E3%82%A3%E3%82%BF/)
