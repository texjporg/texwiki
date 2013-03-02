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

### 動作環境 {#yf7ac403}

[Compatibility](http://akelpad.cvs.sourceforge.net/viewvc/akelpad/akelpad_4/AkelFiles/Docs/AkelHelp-Eng.htm#ch0) を参照．

### License {#r4837243}

[BSD 2-Clause](http://akelpad.cvs.sourceforge.net/viewvc/akelpad/akelpad_4/AkelFiles/Docs/AkelHelp-Eng.htm#ch8)

## 設定 {#y9346bd5}

### 既定のコードページ {#da5f19c1}

日本語版 Windows では既定のコードページは 932 (ANSI/OEM - 日本語 Shift-JIS) になっています．<br>
UTF-8 を既定のコードページにする場合は 65001 (UTF-8) に設定します．<br>

***

<span style="color:Black;background-color:#0055DD;"><ins>　</ins></span>![AkelPad](http://akelpad.sourceforge.net/img/l.gif)<span style="color:Black;background-color:#0055DD;"><ins><span style="color:White;"><strong>設定...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

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
　　　 <span style="color:Black;background-color:#EEEEEE;">\[ 日本語 (932, UTF-8)　　　　　　　　　　　　　　　　　　　　▼\]</span>　　<ins>1024</ins><br>

<br>

　　　　既定のコードページ:<br>
　　　 <span style="color:Black;background-color:#EEEEEE;">\[ 65001 (UTF-8)　　　　　　　　　　　　　　　　　　　　　　　　▼\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[　フィルター　\]</span><br>

<br>

　　　　既定の改行<br>
　　　　　 <span style="color:#3333CC;">◎</span> Windows　　　　　　　　　◯ Unix　　　　　　　　　　　◯ Mac<br>

***

## スクリプト {#fe72e81b}

AkelFiles\Plugs\Scripts フォルダーにスクリプトを配置します．<br>
\[オプション(O)\]-\[プラグイン(N)...\] の プラグイン::関数 から Scripts::Main を選択して \[呼び出し\] をクリックします．<br>
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
  var codepage = AkelPad.GetEditCodePage(0);
  if (codepage == 65001) {
    latex = "platex -synctex=1 -no-guess-input-enc -kanji=utf8 -sjis-terminal";
  } else if (codepage == 932) {
    latex = "platex -synctex=1 -no-guess-input-enc -kanji=sjis -sjis-terminal";
  } else if (codepage == 20932) {
    latex = "platex -synctex=1 -no-guess-input-enc -kanji=euc -sjis-terminal";
  } else if (codepage == 50220 || codepage == 50221 || codepage == 50222) {
    latex = "platex -synctex=1 -no-guess-input-enc -kanji=jis -sjis-terminal";
  }
  latex += " " + "-jobname=" + ["\"", b, "\""].join("") + " " + ["\"", b, "\""].join("");
  var dvipdfm = "dvipdfmx" + " " + ["\"", b, "\""].join("");
  var cmd = "cmd /c " + cd + " && " + latex + " && " + dvipdfm;

  var ok = AkelPad.MessageBox(AkelPad.GetMainWnd(), cmd, "AkelPad", 1 | 64);
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
