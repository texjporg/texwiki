---
title: "Mery"
url: "/Mery/"
date: 2010-10-25T12:56:50Z
pukiwiki: "Mery"
---

# Mery

## [Mery](http://www.haijin-boys.com/island/wiki/) {#l6f5ffa3}

<img src="http://www.haijin-boys.com/island/wiki/images/logo.png" alt="Mery" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

<div style="clear:both"></div>

## Mery とは {#acb30ba1}

Mery は Windows 7, Vista, XP で動作する国産でフリーのシンプルなテキストエディタです．

Mery は

- TeX の色分け
- 辞書ファイルによる入力補完
- アウトライン解析

に対応しています．

- [Mery - Mery's Factory](http://www.haijin-boys.com/island/wiki/)
    - [更新履歴](http://www.haijin-boys.com/island/wiki/index.php?title=Mery%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89)
    - [マクロリファレンス](http://www.haijin-boys.com/island/wiki/index.php?title=%E3%83%9E%E3%82%AF%E3%83%AD%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9)
    - [kuro (haijinboys) on Twitter](http://twitter.com/haijinboys)
- [窓の杜 - Mery](http://www.forest.impress.co.jp/lib/offc/document/txteditor/mery.html)
- [Vector - Mery](http://www.vector.co.jp/soft/winnt/writing/se476839.html)
- [まるエミュ for Mery](http://homepage3.nifty.com/kinzoku/editor/)

## マクロ {#oa5f5cea}

マクロを使うと TeraPad, VxEditor, [サクラエディタ](</サクラエディタ/>), [Notepad++](/Notepad++/) と同様に，LaTeX 環境を簡単に作ることができます．

マクロは，メニューの \[マクロ(M)\] から選択することで実行できます．

### pdfpLaTeXA.js {#h14da8ca}

***

```
function main()
{
  var wshShell = new ActiveXObject("WScript.Shell");
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var c = document.Path;
  var b = fso.GetBaseName(document.Name);
  var cd = "cd /d " + ["\"", c, "\""].join("");
  var latex = "platex -guess-input-enc";
  var encoding = document.Encoding;
  if (encoding == meEncodingAutomatic) {
    latex = "platex -guess-input-enc";
  } else if (encoding == meEncodingJIS) {
    latex = "platex -no-guess-input-enc -kanji=jis";
  } else if (encoding == meEncodingEUC) {
    latex = "platex -no-guess-input-enc -kanji=euc";
  } else if (encoding == meEncodingSJIS) {
    latex = "platex -no-guess-input-enc -kanji=sjis";
  } else if (encoding == meEncodingUTF8 || encoding == meEncodingUTF8N) {
    latex = "platex -no-guess-input-enc -kanji=utf8";
  }
  latex += " " + "-jobname=" + ["\"", b, "\""].join("") + " " + ["\"", b, "\""].join("");
  var dvipdfm = "dvipdfmx" + " " + ["\"", b, "\""].join("");
  var pdfopen = "pdfopen --file" + " " + ["\"", b, ".pdf", "\""].join("");
  var pdfclose = "echo exit | pdfdde";
  var cmd = "cmd /c " + cd + " && " + pdfclose + " & " + latex + " && " + dvipdfm + " && " + pdfopen;

  var button = wshShell.Popup(cmd, 0, "pdfpLaTeXA", 1);
  if (button == 1) {
    document.Save();
    wshShell.Run(cmd, 1, true);
  }
}

main();
```

***

\[マクロ(M)\]-\[カスタマイズ(C)...\]-\[新規作成(N)\] で pdfpLaTeXA.js を選択します．

\[ツール(T)\]-\[オプション(O)...\]-\[キーボード\] でショートカットキーを追加して割り当てます．

***

<span style="color:Black;background-color:#AA77FF;"><ins>　<span style="color:White;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　基本　\]\[　表示　\]\[　記号　\]\[　関連付け　\]</ins></span><strong>\[　キーボード　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　履歴　\]</ins></span><br>

<br>

　　　分類(<ins>C</ins>)：　　　　　　　　　　　　　　　　　　　　追加するショートカットキー(<ins>N</ins>)：<br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[マイ マクロ　　　　　　　　　　　　　　▼\]</span>　　　<ins>Ctrl+Alt+J</ins><br>

<br>

　　　コマンド(<ins>O</ins>)：　　　　　　　　　　　　　　　　　　現在のキー(<ins>U</ins>)：<br>
　　　<span style="color:White;background-color:#1188FF;">pdfpLaTeXA.js　　　　　　　　　　　　　　</span><br>

<br>

***

### pdfpLaTeX2A.js {#gd894185}

***

```
function main()
{
  var wshShell = new ActiveXObject("WScript.Shell");
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var c = document.Path;
  var b = fso.GetBaseName(document.Name);
  var cd = "cd /d " + ["\"", c, "\""].join("");
  var latex = "platex -guess-input-enc";
  var encoding = document.Encoding;
  if (encoding == meEncodingAutomatic) {
    latex = "platex -guess-input-enc";
  } else if (encoding == meEncodingJIS) {
    latex = "platex -no-guess-input-enc -kanji=jis";
  } else if (encoding == meEncodingEUC) {
    latex = "platex -no-guess-input-enc -kanji=euc";
  } else if (encoding == meEncodingSJIS) {
    latex = "platex -no-guess-input-enc -kanji=sjis";
  } else if (encoding == meEncodingUTF8 || encoding == meEncodingUTF8N) {
    latex = "platex -no-guess-input-enc -kanji=utf8";
  }
  latex += " " + "-jobname=" + ["\"", b, "\""].join("") + " " + ["\"", b, "\""].join("");
  var dvips = "dvips -Ppdf -z -f" + " " + ["\"", b, ".dvi", "\""].join("") + " | bkmk2uni > " + ["\"", b, ".ps", "\""].join("");
  var ps2pdf = "ps2pdf.bat" + " " + ["\"", b, ".ps", "\""].join("");
  var pdfopen = "pdfopen --file" + " " + ["\"", b, ".pdf", "\""].join("");
  var pdfclose = "echo exit | pdfdde";
  var cmd = "cmd /c " + cd + " && " + pdfclose + " & " + latex + " && " + dvips + " && " + ps2pdf + " && " + pdfopen;

  var button = wshShell.Popup(cmd, 0, "pdfpLaTeX2A", 1);
  if (button == 1) {
    document.Save();
    wshShell.Run(cmd, 1, true);
  }
}

main();
```

***

\[マクロ(M)\]-\[カスタマイズ(C)...\]-\[新規作成(N)\] で pdfpLaTeX2A.js を選択します．

\[ツール(T)\]-\[オプション(O)...\]-\[キーボード\] でショートカットキーを追加して割り当てます．

***

<span style="color:Black;background-color:#AA77FF;"><ins>　<span style="color:White;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　基本　\]\[　表示　\]\[　記号　\]\[　関連付け　\]</ins></span><strong>\[　キーボード　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　履歴　\]</ins></span><br>

<br>

　　　分類(<ins>C</ins>)：　　　　　　　　　　　　　　　　　　　　追加するショートカットキー(<ins>N</ins>)：<br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[マイ マクロ　　　　　　　　　　　　　　▼\]</span>　　　<ins>Ctrl+Alt+K</ins><br>

<br>

　　　コマンド(<ins>O</ins>)：　　　　　　　　　　　　　　　　　　現在のキー(<ins>U</ins>)：<br>
　　　pdfpLaTeXA.js<br>
　　　<span style="color:White;background-color:#1188FF;">pdfpLaTeX2A.js 　　　　　　　　　　　　</span><br>

<br>

***

### pdfeupLaTeXA.js {#hdc45060}

***

```
function main()
{
  var wshShell = new ActiveXObject("WScript.Shell");
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var c = document.Path;
  var b = fso.GetBaseName(document.Name);
  var cd = "cd /d " + ["\"", c, "\""].join("");
  var latex = "euplatex -no-guess-input-enc -kanji=utf8" + " " + ["\"", b, "\""].join("");
  var dvipdfm = "updvipdfmx" + " " + ["\"", b, "\""].join("");
  var pdfopen = "pdfopen --file" + " " + ["\"", b, ".pdf", "\""].join("");
  var pdfclose = "echo exit | pdfdde";
  var cmd = "cmd /c " + cd + " && " + pdfclose + " & " + latex + " && " + dvipdfm + " && " + pdfopen;

  var button = wshShell.Popup(cmd, 0, "pdfeupLaTeXA", 1);
  if (button == 1) {
    document.Save();
    wshShell.Run(cmd, 1, true);
  }
}

main();
```

***

\[マクロ(M)\]-\[カスタマイズ(C)...\]-\[新規作成(N)\] で pdfeupLaTeXA.js を選択します．

\[ツール(T)\]-\[オプション(O)...\]-\[キーボード\] でショートカットキーを追加して割り当てます．

***

<span style="color:Black;background-color:#AA77FF;"><ins>　<span style="color:White;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　基本　\]\[　表示　\]\[　記号　\]\[　関連付け　\]</ins></span><strong>\[　キーボード　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　履歴　\]</ins></span><br>

<br>

　　　分類(<ins>C</ins>)：　　　　　　　　　　　　　　　　　　　　追加するショートカットキー(<ins>N</ins>)：<br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[マイ マクロ　　　　　　　　　　　　　　▼\]</span>　　　<ins>Shift+Alt+J</ins><br>

<br>

　　　コマンド(<ins>O</ins>)：　　　　　　　　　　　　　　　　　　現在のキー(<ins>U</ins>)：<br>
　　　pdfpLaTeXA.js<br>
　　　pdfpLaTeX2A.js<br>
　　　<span style="color:White;background-color:#1188FF;">pdfeupLaTeXA.js　　　　　　　　　　　　</span><br>

<br>

***

### pdfeupLaTeX2A.js {#r820202a}

***

```
function main()
{
  var wshShell = new ActiveXObject("WScript.Shell");
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var c = document.Path;
  var b = fso.GetBaseName(document.Name);
  var cd = "cd /d " + ["\"", c, "\""].join("");
  var latex = "euplatex -no-guess-input-enc -kanji=utf8" + " " + ["\"", b, "\""].join("");
  var dvips = "dvips -Ppdf -z -f" + " " + ["\"", b, ".dvi", "\""].join("") + " | convbkmk -u > " + ["\"", b, ".ps", "\""].join("");
  var ps2pdf = "ps2pdf.bat" + " " + ["\"", b, ".ps", "\""].join("");
  var pdfopen = "pdfopen --file" + " " + ["\"", b, ".pdf", "\""].join("");
  var pdfclose = "echo exit | pdfdde";
  var cmd = "cmd /c " + cd + " && " + pdfclose + " & " + latex + " && " + dvips + " && " + ps2pdf + " && " + pdfopen;

  var button = wshShell.Popup(cmd, 0, "pdfeupLaTeX2A", 1);
  if (button == 1) {
    document.Save();
    wshShell.Run(cmd, 1, true);
  }
}

main();
```

***

\[マクロ(M)\]-\[カスタマイズ(C)...\]-\[新規作成(N)\] で pdfeupLaTeX2A.js を選択します．

\[ツール(T)\]-\[オプション(O)...\]-\[キーボード\] でショートカットキーを追加して割り当てます．

***

<span style="color:Black;background-color:#AA77FF;"><ins>　<span style="color:White;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　基本　\]\[　表示　\]\[　記号　\]\[　関連付け　\]</ins></span><strong>\[　キーボード　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　履歴　\]</ins></span><br>

<br>

　　　分類(<ins>C</ins>)：　　　　　　　　　　　　　　　　　　　　追加するショートカットキー(<ins>N</ins>)：<br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[マイ マクロ　　　　　　　　　　　　　　▼\]</span>　　　<ins>Shift+Alt+K</ins><br>

<br>

　　　コマンド(<ins>O</ins>)：　　　　　　　　　　　　　　　　　　現在のキー(<ins>U</ins>)：<br>
　　　pdfpLaTeXA.js<br>
　　　pdfpLaTeX2A.js<br>
　　　pdfeupLaTeXA.js<br>
　　　<span style="color:White;background-color:#1188FF;">pdfeupLaTeX2A.js　　　　　　　　　　　　</span><br>

<br>

***

### pdfLaTeXA.js {#u17bbe76}

***

```
function main()
{
  var wshShell = new ActiveXObject("WScript.Shell");
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var c = document.Path;
  var b = fso.GetBaseName(document.Name);
  var cd = "cd /d " + ["\"", c, "\""].join("");
  var pdflatex = "pdflatex" + " " + ["\"", b, "\""].join("");
  var pdfopen = "pdfopen --file" + " " + ["\"", b, ".pdf", "\""].join("");
  var pdfclose = "echo exit | pdfdde";
  var cmd = "cmd /c " + cd + " && " + pdfclose + " & " + pdflatex + " && " + pdfopen;

  var button = wshShell.Popup(cmd, 0, "pdfLaTeXA", 1);
  if (button == 1) {
    document.Save();
    wshShell.Run(cmd, 1, true);
  }
}

main();
```

***

\[マクロ(M)\]-\[カスタマイズ(C)...\]-\[新規作成(N)\] で pdfLaTeXA.js を選択します．

\[ツール(T)\]-\[オプション(O)...\]-\[キーボード\] でショートカットキーを追加して割り当てます．

***

<span style="color:Black;background-color:#AA77FF;"><ins>　<span style="color:White;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　基本　\]\[　表示　\]\[　記号　\]\[　関連付け　\]</ins></span><strong>\[　キーボード　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　履歴　\]</ins></span><br>

<br>

　　　分類(<ins>C</ins>)：　　　　　　　　　　　　　　　　　　　　追加するショートカットキー(<ins>N</ins>)：<br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[マイ マクロ　　　　　　　　　　　　　　▼\]</span>　　　<ins>Shift+Alt+H</ins><br>

<br>

　　　コマンド(<ins>O</ins>)：　　　　　　　　　　　　　　　　　　現在のキー(<ins>U</ins>)：<br>
　　　pdfpLaTeXA.js<br>
　　　pdfpLaTeX2A.js<br>
　　　pdfeupLaTeXA.js<br>
　　　pdfeupLaTeX2A.js<br>
　　　<span style="color:White;background-color:#1188FF;">pdfLaTeXA.js 　　　　　　　　　　　　　　</span><br>

<br>

***

### LuaLaTeXA.js {#k5350e5c}

***

```
function main()
{
  var wshShell = new ActiveXObject("WScript.Shell");
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var c = document.Path;
  var b = fso.GetBaseName(document.Name);
  var cd = "cd /d " + ["\"", c, "\""].join("");
  var pdflatex = "lualatex" + " " + ["\"", b, "\""].join("");
  var pdfopen = "pdfopen --file" + " " + ["\"", b, ".pdf", "\""].join("");
  var pdfclose = "echo exit | pdfdde";
  var cmd = "cmd /c " + cd + " && " + pdfclose + " & " + pdflatex + " && " + pdfopen;

  var button = wshShell.Popup(cmd, 0, "LuaLaTeXA", 1);
  if (button == 1) {
    document.Save();
    wshShell.Run(cmd, 1, true);
  }
}

main();
```

***

\[マクロ(M)\]-\[カスタマイズ(C)...\]-\[新規作成(N)\] で LuaLaTeXA.js を選択します．

\[ツール(T)\]-\[オプション(O)...\]-\[キーボード\] でショートカットキーを追加して割り当てます．

***

<span style="color:Black;background-color:#AA77FF;"><ins>　<span style="color:White;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　基本　\]\[　表示　\]\[　記号　\]\[　関連付け　\]</ins></span><strong>\[　キーボード　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　履歴　\]</ins></span><br>

<br>

　　　分類(<ins>C</ins>)：　　　　　　　　　　　　　　　　　　　　追加するショートカットキー(<ins>N</ins>)：<br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[マイ マクロ　　　　　　　　　　　　　　▼\]</span>　　　<ins>Shift+Alt+U</ins><br>

<br>

　　　コマンド(<ins>O</ins>)：　　　　　　　　　　　　　　　　　　現在のキー(<ins>U</ins>)：<br>
　　　pdfpLaTeXA.js<br>
　　　pdfpLaTeX2A.js<br>
　　　pdfeupLaTeXA.js<br>
　　　pdfeupLaTeX2A.js<br>
　　　pdfLaTeXA.js<br>
　　　<span style="color:White;background-color:#1188FF;">LuaLaTeXA.js　　　　　　　　　　　　　　</span><br>

<br>

***

### XeLaTeXA.js {#hbb42785}

***

```
function main()
{
  var wshShell = new ActiveXObject("WScript.Shell");
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var c = document.Path;
  var b = fso.GetBaseName(document.Name);
  var cd = "cd /d " + ["\"", c, "\""].join("");
  var pdflatex = "xelatex" + " " + ["\"", b, "\""].join("");
  var pdfopen = "pdfopen --file" + " " + ["\"", b, ".pdf", "\""].join("");
  var pdfclose = "echo exit | pdfdde";
  var cmd = "cmd /c " + cd + " && " + pdfclose + " & " + pdflatex + " && " + pdfopen;

  var button = wshShell.Popup(cmd, 0, "XeLaTeXA", 1);
  if (button == 1) {
    document.Save();
    wshShell.Run(cmd, 1, true);
  }
}

main();
```

***

\[マクロ(M)\]-\[カスタマイズ(C)...\]-\[新規作成(N)\] で XeLaTeXA.js を選択します．

\[ツール(T)\]-\[オプション(O)...\]-\[キーボード\] でショートカットキーを追加して割り当てます．

***

<span style="color:Black;background-color:#AA77FF;"><ins>　<span style="color:White;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　基本　\]\[　表示　\]\[　記号　\]\[　関連付け　\]</ins></span><strong>\[　キーボード　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　履歴　\]</ins></span><br>

<br>

　　　分類(<ins>C</ins>)：　　　　　　　　　　　　　　　　　　　　追加するショートカットキー(<ins>N</ins>)：<br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[マイ マクロ　　　　　　　　　　　　　　▼\]</span>　　　<ins>Shift+Alt+I</ins><br>

<br>

　　　コマンド(<ins>O</ins>)：　　　　　　　　　　　　　　　　　　現在のキー(<ins>U</ins>)：<br>
　　　pdfpLaTeXA.js<br>
　　　pdfpLaTeX2A.js<br>
　　　pdfeupLaTeXA.js<br>
　　　pdfeupLaTeX2A.js<br>
　　　pdfLaTeXA.js<br>
　　　LuaLaTeXA.js<br>
　　　<span style="color:White;background-color:#1188FF;">XeLaTeXA.js　　　　　　　　　　　　　　</span><br>

<br>

***

### pBibTeX.js {#qbbeae1b}

***

```
function main()
{
  var wshShell = new ActiveXObject("WScript.Shell");
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var c = document.Path;
  var b = fso.GetBaseName(document.Name);
  var cd = "cd /d " + ["\"", c, "\""].join("");
  var bibtex = "pbibtex";
  var encoding = document.Encoding;
  if (encoding == meEncodingAutomatic) {
    bibtex = "pbibtex";
  } else if (encoding == meEncodingJIS) {
    bibtex = "pbibtex -kanji=jis";
  } else if (encoding == meEncodingEUC) {
    bibtex = "pbibtex -kanji=euc";
  } else if (encoding == meEncodingSJIS) {
    bibtex = "pbibtex -kanji=sjis";
  } else if (encoding == meEncodingUTF8 || encoding == meEncodingUTF8N) {
    bibtex = "pbibtex -kanji=utf8";
  }
  bibtex += " " + ["\"", b, "\""].join("");
  var cmd = "cmd /c " + cd + " && " + bibtex;

  var button = wshShell.Popup(cmd, 0, "pBibTeX", 1);
  if (button == 1) {
    document.Save();
    wshShell.Run(cmd, 1, true);
  }
}

main();
```

***

\[マクロ(M)\]-\[カスタマイズ(C)...\]-\[新規作成(N)\] で pBibTeX.js を選択します．

\[ツール(T)\]-\[オプション(O)...\]-\[キーボード\] でショートカットキーを追加して割り当てます．

***

<span style="color:Black;background-color:#AA77FF;"><ins>　<span style="color:White;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　基本　\]\[　表示　\]\[　記号　\]\[　関連付け　\]</ins></span><strong>\[　キーボード　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　履歴　\]</ins></span><br>

<br>

　　　分類(<ins>C</ins>)：　　　　　　　　　　　　　　　　　　　　追加するショートカットキー(<ins>N</ins>)：<br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[マイ マクロ　　　　　　　　　　　　　　▼\]</span>　　　<ins>Ctrl+Alt+N</ins><br>

<br>

　　　コマンド(<ins>O</ins>)：　　　　　　　　　　　　　　　　　　現在のキー(<ins>U</ins>)：<br>
　　　pdfpLaTeXA.js<br>
　　　pdfpLaTeX2A.js<br>
　　　pdfeupLaTeXA.js<br>
　　　pdfeupLaTeX2A.js<br>
　　　pdfLaTeXA.js<br>
　　　LuaLaTeXA.js<br>
　　　XeLaTeXA.js<br>
　　　<span style="color:White;background-color:#1188FF;">pBibTeX.js　　　　　　　　　　　　　　　　</span><br>

<br>

***

### upBibTeX.js {#v9f70ec9}

***

```
function main()
{
  var wshShell = new ActiveXObject("WScript.Shell");
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var c = document.Path;
  var b = fso.GetBaseName(document.Name);
  var cd = "cd /d " + ["\"", c, "\""].join("");
  var bibtex = "upbibtex -kanji=utf8" + " " + ["\"", b, "\""].join("");
  var cmd = "cmd /c " + cd + " && " + bibtex;

  var button = wshShell.Popup(cmd, 0, "upBibTeX", 1);
  if (button == 1) {
    document.Save();
    wshShell.Run(cmd, 1, true);
  }
}

main();
```

***

\[マクロ(M)\]-\[カスタマイズ(C)...\]-\[新規作成(N)\] で upBibTeX.js を選択します．

\[ツール(T)\]-\[オプション(O)...\]-\[キーボード\] でショートカットキーを追加して割り当てます．

***

<span style="color:Black;background-color:#AA77FF;"><ins>　<span style="color:White;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　基本　\]\[　表示　\]\[　記号　\]\[　関連付け　\]</ins></span><strong>\[　キーボード　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　履歴　\]</ins></span><br>

<br>

　　　分類(<ins>C</ins>)：　　　　　　　　　　　　　　　　　　　　追加するショートカットキー(<ins>N</ins>)：<br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[マイ マクロ　　　　　　　　　　　　　　▼\]</span>　　　<ins>Shift+Alt+N</ins><br>

<br>

　　　コマンド(<ins>O</ins>)：　　　　　　　　　　　　　　　　　　現在のキー(<ins>U</ins>)：<br>
　　　pdfpLaTeXA.js<br>
　　　pdfpLaTeX2A.js<br>
　　　pdfeupLaTeXA.js<br>
　　　pdfeupLaTeX2A.js<br>
　　　pdfLaTeXA.js<br>
　　　LuaLaTeXA.js<br>
　　　XeLaTeXA.js<br>
　　　pBibTeX.js<br>
　　　<span style="color:White;background-color:#1188FF;">upBibTeX.js　　　　　　　　　　　　　　　　</span><br>

<br>

***

### Mendex.js {#ff7fca42}

***

```
function main()
{
  var wshShell = new ActiveXObject("WScript.Shell");
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var c = document.Path;
  var b = fso.GetBaseName(document.Name);
  var cd = "cd /d " + ["\"", c, "\""].join("");
  var makeindex = "mendex";
  var encoding = document.Encoding;
  if (encoding == meEncodingAutomatic) {
    makeindex = "mendex";
  } else if (encoding == meEncodingJIS) {
    makeindex = "mendex -J";
  } else if (encoding == meEncodingEUC) {
    makeindex = "mendex -E";
  } else if (encoding == meEncodingSJIS) {
    makeindex = "mendex -S";
  } else if (encoding == meEncodingUTF8 || encoding == meEncodingUTF8N) {
    makeindex = "mendex -U";
  }
  makeindex += " " + ["\"", b, "\""].join("");
  var cmd = "cmd /c " + cd + " && " + makeindex;

  var button = wshShell.Popup(cmd, 0, "Mendex", 1);
  if (button == 1) {
    document.Save();
    wshShell.Run(cmd, 1, true);
  }
}

main();
```

***

\[マクロ(M)\]-\[カスタマイズ(C)...\]-\[新規作成(N)\] で Mendex.js を選択します．

\[ツール(T)\]-\[オプション(O)...\]-\[キーボード\] でショートカットキーを追加して割り当てます．

***

<span style="color:Black;background-color:#AA77FF;"><ins>　<span style="color:White;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　基本　\]\[　表示　\]\[　記号　\]\[　関連付け　\]</ins></span><strong>\[　キーボード　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　履歴　\]</ins></span><br>

<br>

　　　分類(<ins>C</ins>)：　　　　　　　　　　　　　　　　　　　　追加するショートカットキー(<ins>N</ins>)：<br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[マイ マクロ　　　　　　　　　　　　　　▼\]</span>　　　<ins>Ctrl+Alt+M</ins><br>

<br>

　　　コマンド(<ins>O</ins>)：　　　　　　　　　　　　　　　　　　現在のキー(<ins>U</ins>)：<br>
　　　pdfpLaTeXA.js<br>
　　　pdfpLaTeX2A.js<br>
　　　pdfeupLaTeXA.js<br>
　　　pdfeupLaTeX2A.js<br>
　　　pdfLaTeXA.js<br>
　　　LuaLaTeXA.js<br>
　　　XeLaTeXA.js<br>
　　　pBibTeX.js<br>
　　　upBibTeX.js<br>
　　　<span style="color:White;background-color:#1188FF;">Mendex.js　　　　　　　　　　　　　　　　　</span><br>

<br>

***

### MeryからTeXのコンパイル＆PDF生成ができるようにする (LaTeXMacro.js + makepdf.ps1) {#n2ac0dc8}

- [TexをWindowsで使う](http://blog.kassyi.com/2011/05/texwindows_05.html)
- [TeXをWindowsで使う(まとめ)](http://blog.kassyi.com/2011/05/texwindows.html)

## スクリプト {#jd5ec718}

### Happy {#dad3b2d6}

- [Happy](http://www.u-gakugei.ac.jp/~takizawa/Happy/)
    - HappyInput (TeX 入力支援スクリプト)
    - HappyTeX (TeX タイプセット＆プレビュー支援スクリプト)

## 入力補完 {#p98d874e}

Mery には TeX の入力補完機能があります．

Mery.exe と同じフォルダ内に ext というフォルダがあります．(存在しない場合は作成してください．)

その中に tex.txt という名前の辞書ファイルを作成します．

辞書ファイルの内容を例えば

```
documentclass
section
```

とすると

- \d を入力した後で Ctrl+Space を入力すると \documentclass
- \s を入力した後で Ctrl+Space を入力すると \section

が補完されます．

## アウトライン {#c4b6fe35}

Mery にはアウトラインのプラグインが標準添付されています．

LaTeX の

- 部 (\part)
- 章 (\chapter)
- 節 (\section)
- 小節 (\subsection)
- 小々節 (\subsubsection)
- 段落 (\paragraph)
- 小段落 (\subparagraph)

にジャンプできるようにカスタマイズします．

\[ツール(T)\]-\[プラグイン(P)\]-\[プラグインの設定(C)...\]

プラグイン
: Outline

の \[プロパティ(P)\]

***

<span style="color:Black;background-color:#AA77FF;"><ins>　<span style="color:White;"><strong>プロパティ</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

位置(<ins>P</ins>)：　<span style="color:Black;background-color:#EEEEEE;">\[右 　　　　　　　　　　▼\]</span><br>
タイプ(<ins>T</ins>)： <span style="color:Black;background-color:#EEEEEE;">\[カスタム　　　　　　　▼\]</span><br>
レベル<ins>1</ins>： <ins>\\\part</ins>　　　　　　　　　　　　　　　　　　　　☑正規表現(R)<br>
レベル<ins>2</ins>： <ins>\\\chapter</ins>　　　　　　　　　　　　　　　　　　☑正規表現(E)<br>
レベル<ins>3</ins>： <ins>\\\section</ins>　　　　　　　　　　　　　　　　　　☑正規表現(G)<br>
レベル<ins>4</ins>： <ins>\\\subsection</ins>　　　　　　　　　　　　　　　　☑正規表現(U)<br>
レベル<ins>5</ins>： <ins>\\\subsubsection</ins>　　　　　　　　　　　　　　☑正規表現(L)<br>
レベル<ins>6</ins>： <ins>\\\paragraph</ins>　　　　　　　　　　　　　　　　☑正規表現(A)<br>
レベル<ins>7</ins>： <ins>\\\subparagraph</ins>　　　　　　　　　　　　　　☑正規表現(R)<br>

***

## コマンドライン引数 {#uf77c708}

- 「/l 行番号 ファイル名」でそのファイルの指定行で開く。
- 「/fd」でファイルから検索ダイアログ表示。
- 「/ti」でタスクトレイアイコンで起動（スタートアップとかにショートカット作るため）

## SumatraPDF との連携 {#ra6f502f}

### forward search {#t56d91ba}

#### fwdsumatrapdf.js {#a81d6b86}

***

```
function main()
{
  var wshShell = new ActiveXObject("WScript.Shell");
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var c = document.Path;
  var f = document.Name;
  var b = fso.GetBaseName(document.Name);
  var cd = "cd /d " + ["\"", c, "\""].join("");
  var texFile = ["\"", f, "\""].join("");
  var pdfFile = ["\"", b, ".pdf", "\""].join("");
  var line = document.selection.GetActivePointY(mePosLogical);
  var fwdsumatrapdf = "C:/w32tex/NDde/Binary/fwdsumatrapdf.exe" + " " + pdfFile + " " + texFile + " " + line;
  var cmd = "cmd /c " + cd + " && " + fwdsumatrapdf;

  wshShell.Run(cmd, 1, true);
}

main();
```

***

### inverse search {#d4cfb140}

```
C:\Mery\Mery.exe /l %l "%f"
```

## dviout との連携 {#fee7abf9}

### forward search {#x84b65ee}

#### dviout.js {#q13fb76b}

***

```
function main()
{
  var wshShell = new ActiveXObject("WScript.Shell");
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var c = document.Path;
  var f = document.Name;
  var b = fso.GetBaseName(document.Name);
  var cd = "cd /d " + ["\"", c, "\""].join("");
  var texFile = ["\"", f, "\""].join("");
  var dviFile = ["\"", b, ".dvi", "\""].join("");
  var line = document.selection.GetActivePointY(mePosLogical);
  var dviout = "C:/w32tex/dviout/dviout.exe -1" + " " + dviFile + " # " + line + " " + texFile ;
  var cmd = "cmd /c " + cd + " && " + dviout;

  wshShell.Run(cmd, 1, true);
}

main();
```

***

### inverse search {#b5409d96}

```
C:\Mery\Mery.exe^s /l %d "%s"
```
