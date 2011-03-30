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

## マクロ {#oa5f5cea}

[サクラエディタ](</サクラエディタ/>) と同様に，マクロを使って TeX ファイルのコンパイルができます．

マクロは，メニューの \[マクロ(M)\] から選択することで実行できます．

### pdfLaTeX.js {#u17bbe76}

***

```
function main()
{
  var shell = new ActiveXObject("WScript.Shell");
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var c = document.Path;
  var f = document.Name;
  var b = fso.GetBaseName(f);
  var cd = "cd /d " + ["\"", c, "\""].join("");
  var pdflatex = "pdflatex" + " " + ["\"", f, "\""].join("");
  var pdfopen = "pdfopen --file=" + ["\"", b, ".pdf", "\""].join("");
  var pdfclose = "echo exit | pdfdde";
  var cmd = "cmd /c " + cd + " && " + pdfclose + " & " + pdflatex + " && " + pdfopen;

  document.Save();
  shell.Run(cmd, 1, true);
}

main();
```

***

\[マクロ(M)\]-\[カスタマイズ(C)...\]-\[新規作成(N)\] で pdfLaTeX.js を選択します．

\[ツール(T)\]-\[オプション(O)...\]-\[キーボード\] でショートカットキーを追加して割り当てます．

***

<span style="color:Black;background-color:#AA77FF;"><ins>　<span style="color:White;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　基本　\]\[　表示　\]\[　記号　\]\[　関連付け　\]</ins></span><strong>\[　キーボード　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　履歴　\]</ins></span><br>

<br>

　　　分類(<ins>C</ins>)：　　　　　　　　　　　　　　　　　　　　追加するショートカットキー(<ins>N</ins>)：<br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[マイ マクロ　　　　　　　　　　　　　　▼\]</span>　　　<ins>Shift+Alt+H</ins><br>

<br>

　　　コマンド(<ins>O</ins>)：　　　　　　　　　　　　　　　　　　現在のキー(<ins>U</ins>)：<br>
　　　<span style="color:White;background-color:#1188FF;">pdfLaTeX.js 　　　　　　　　　　　　　　　</span><br>

<br>

***

### pdfepLaTeX.js {#h14da8ca}

***

```
function main()
{
  var shell = new ActiveXObject("WScript.Shell");
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var c = document.Path;
  var f = document.Name;
  var b = fso.GetBaseName(f);
  var cd = "cd /d " + ["\"", c, "\""].join("");
  var latex = "eplatex" + " " + ["\"", f, "\""].join("");
  var dvipdfm = "dvipdfmx" + " " + ["\"", b, ".dvi", "\""].join("");
  var pdfopen = "pdfopen --file=" + ["\"", b, ".pdf", "\""].join("");
  var pdfclose = "echo exit | pdfdde";
  var cmd = "cmd /c " + cd + " && " + pdfclose + " & " + latex + " && " + dvipdfm + " && " + pdfopen;

  document.Save();
  shell.Run(cmd, 1, true);
}

main();
```

***

\[マクロ(M)\]-\[カスタマイズ(C)...\]-\[新規作成(N)\] で pdfepLaTeX.js を選択します．

\[ツール(T)\]-\[オプション(O)...\]-\[キーボード\] でショートカットキーを追加して割り当てます．

***

<span style="color:Black;background-color:#AA77FF;"><ins>　<span style="color:White;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　基本　\]\[　表示　\]\[　記号　\]\[　関連付け　\]</ins></span><strong>\[　キーボード　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　履歴　\]</ins></span><br>

<br>

　　　分類(<ins>C</ins>)：　　　　　　　　　　　　　　　　　　　　追加するショートカットキー(<ins>N</ins>)：<br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[マイ マクロ　　　　　　　　　　　　　　▼\]</span>　　　<ins>Ctrl+Alt+J</ins><br>

<br>

　　　コマンド(<ins>O</ins>)：　　　　　　　　　　　　　　　　　　現在のキー(<ins>U</ins>)：<br>
　　　pdfLaTeX.js<br>
　　　<span style="color:White;background-color:#1188FF;">pdfepLaTeX.js　　　　　　　　　　　　　　</span><br>

<br>

***

### pdfepLaTeX2.js {#gd894185}

***

```
function main()
{
  var shell = new ActiveXObject("WScript.Shell");
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var c = document.Path;
  var f = document.Name;
  var b = fso.GetBaseName(f);
  var cd = "cd /d " + ["\"", c, "\""].join("");
  var latex = "eplatex" + " " + ["\"", f, "\""].join("");
  var dvips = "dvips -Ppdf -z -f" + " " + ["\"", b, ".dvi", "\""].join("") + " | bkmk2uni > " + ["\"", b, ".ps", "\""].join("");
  var ps2pdf = "ps2pdf.bat" + " " + ["\"", b, ".ps", "\""].join("");
  var pdfopen = "pdfopen --file=" + ["\"", b, ".pdf", "\""].join("");
  var pdfclose = "echo exit | pdfdde";
  var cmd = "cmd /c " + cd + " && " + pdfclose + " & " + latex + " && " + dvips + " && " + ps2pdf + " && " + pdfopen;

  document.Save();
  shell.Run(cmd, 1, true);
}

main();
```

***

\[マクロ(M)\]-\[カスタマイズ(C)...\]-\[新規作成(N)\] で pdfepLaTeX2.js を選択します．

\[ツール(T)\]-\[オプション(O)...\]-\[キーボード\] でショートカットキーを追加して割り当てます．

***

<span style="color:Black;background-color:#AA77FF;"><ins>　<span style="color:White;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　基本　\]\[　表示　\]\[　記号　\]\[　関連付け　\]</ins></span><strong>\[　キーボード　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　履歴　\]</ins></span><br>

<br>

　　　分類(<ins>C</ins>)：　　　　　　　　　　　　　　　　　　　　追加するショートカットキー(<ins>N</ins>)：<br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[マイ マクロ　　　　　　　　　　　　　　▼\]</span>　　　<ins>Ctrl+Alt+K</ins><br>

<br>

　　　コマンド(<ins>O</ins>)：　　　　　　　　　　　　　　　　　　現在のキー(<ins>U</ins>)：<br>
　　　pdfLaTeX.js<br>
　　　pdfepLaTeX.js<br>
　　　<span style="color:White;background-color:#1188FF;">pdfepLaTeX2.js 　　　　　　　　　　　　　</span><br>

<br>

***

### pdfeupLaTeX.js {#hdc45060}

***

```
function main()
{
  var shell = new ActiveXObject("WScript.Shell");
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var c = document.Path;
  var f = document.Name;
  var b = fso.GetBaseName(f);
  var cd = "cd /d " + ["\"", c, "\""].join("");
  var latex = "euplatex" + " " + ["\"", f, "\""].join("");
  var dvipdfm = "updvipdfmx" + " " + ["\"", b, ".dvi", "\""].join("");
  var pdfopen = "pdfopen --file=" + ["\"", b, ".pdf", "\""].join("");
  var pdfclose = "echo exit | pdfdde";
  var cmd = "cmd /c " + cd + " && " + pdfclose + " & " + latex + " && " + dvipdfm + " && " + pdfopen;

  document.Save();
  shell.Run(cmd, 1, true);
}

main();
```

***

\[マクロ(M)\]-\[カスタマイズ(C)...\]-\[新規作成(N)\] で pdfeupLaTeX.js を選択します．

\[ツール(T)\]-\[オプション(O)...\]-\[キーボード\] でショートカットキーを追加して割り当てます．

***

<span style="color:Black;background-color:#AA77FF;"><ins>　<span style="color:White;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　基本　\]\[　表示　\]\[　記号　\]\[　関連付け　\]</ins></span><strong>\[　キーボード　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　履歴　\]</ins></span><br>

<br>

　　　分類(<ins>C</ins>)：　　　　　　　　　　　　　　　　　　　　追加するショートカットキー(<ins>N</ins>)：<br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[マイ マクロ　　　　　　　　　　　　　　▼\]</span>　　　<ins>Shift+Alt+J</ins><br>

<br>

　　　コマンド(<ins>O</ins>)：　　　　　　　　　　　　　　　　　　現在のキー(<ins>U</ins>)：<br>
　　　pdfLaTeX.js<br>
　　　pdfepLaTeX.js<br>
　　　pdfepLaTeX2.js<br>
　　　<span style="color:White;background-color:#1188FF;">pdfeupLaTeX.js　　　　　　　　　　　　　</span><br>

<br>

***

### pdfeupLaTeX2.js {#r820202a}

***

```
function main()
{
  var shell = new ActiveXObject("WScript.Shell");
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var c = document.Path;
  var f = document.Name;
  var b = fso.GetBaseName(f);
  var cd = "cd /d " + ["\"", c, "\""].join("");
  var latex = "euplatex" + " " + ["\"", f, "\""].join("");
  var dvips = "dvips -Ppdf -z -f" + " " + ["\"", b, ".dvi", "\""].join("") + " | convbkmk -g > " + ["\"", b, ".ps", "\""].join("");
  var ps2pdf = "ps2pdf.bat" + " " + ["\"", b, ".ps", "\""].join("");
  var pdfopen = "pdfopen --file=" + ["\"", b, ".pdf", "\""].join("");
  var pdfclose = "echo exit | pdfdde";
  var cmd = "cmd /c " + cd + " && " + pdfclose + " & " + latex + " && " + dvips + " && " + ps2pdf + " && " + pdfopen;

  document.Save();
  shell.Run(cmd, 1, true);
}

main();
```

***

\[マクロ(M)\]-\[カスタマイズ(C)...\]-\[新規作成(N)\] で pdfeupLaTeX2.js を選択します．

\[ツール(T)\]-\[オプション(O)...\]-\[キーボード\] でショートカットキーを追加して割り当てます．

***

<span style="color:Black;background-color:#AA77FF;"><ins>　<span style="color:White;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　基本　\]\[　表示　\]\[　記号　\]\[　関連付け　\]</ins></span><strong>\[　キーボード　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　履歴　\]</ins></span><br>

<br>

　　　分類(<ins>C</ins>)：　　　　　　　　　　　　　　　　　　　　追加するショートカットキー(<ins>N</ins>)：<br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[マイ マクロ　　　　　　　　　　　　　　▼\]</span>　　　<ins>Shift+Alt+K</ins><br>

<br>

　　　コマンド(<ins>O</ins>)：　　　　　　　　　　　　　　　　　　現在のキー(<ins>U</ins>)：<br>
　　　pdfLaTeX.js<br>
　　　pdfepLaTeX.js<br>
　　　pdfepLaTeX2.js<br>
　　　pdfeupLaTeX.js<br>
　　　<span style="color:White;background-color:#1188FF;">pdfeupLaTeX2.js　　　　　　　　　　　　　</span><br>

<br>

***

### pBibTeX.js {#qbbeae1b}

***

```
function main()
{
  var shell = new ActiveXObject("WScript.Shell");
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var c = document.Path;
  var f = document.Name;
  var b = fso.GetBaseName(f);
  var cd = "cd /d " + ["\"", c, "\""].join("");
  var bibtex = "pbibtex" + " " + ["\"", b, "\""].join("");
  var cmd = "cmd /c " + cd + " && " + bibtex;

  document.Save();
  shell.Run(cmd, 1, true);
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
　　　pdfLaTeX.js<br>
　　　pdfepLaTeX.js<br>
　　　pdfepLaTeX2.js<br>
　　　pdfeupLaTeX.js<br>
　　　pdfeupLaTeX2.js<br>
　　　<span style="color:White;background-color:#1188FF;">pBibTeX.js　　　　　　　　　　　　　　　　</span><br>

<br>

***

### upBibTeX.js {#v9f70ec9}

***

```
function main()
{
  var shell = new ActiveXObject("WScript.Shell");
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var c = document.Path;
  var f = document.Name;
  var b = fso.GetBaseName(f);
  var cd = "cd /d " + ["\"", c, "\""].join("");
  var bibtex = "upbibtex" + " " + ["\"", b, "\""].join("");
  var cmd = "cmd /c " + cd + " && " + bibtex;

  document.Save();
  shell.Run(cmd, 1, true);
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
　　　pdfLaTeX.js<br>
　　　pdfepLaTeX.js<br>
　　　pdfepLaTeX2.js<br>
　　　pdfeupLaTeX.js<br>
　　　pdfeupLaTeX2.js<br>
　　　pBibTeX.js<br>
　　　<span style="color:White;background-color:#1188FF;">upBibTeX.js　　　　　　　　　　　　　　　　</span><br>

<br>

***

### Mendex.js {#ff7fca42}

***

```
function main()
{
  var shell = new ActiveXObject("WScript.Shell");
  var fso = new ActiveXObject("Scripting.FileSystemObject");
  var c = document.Path;
  var f = document.Name;
  var b = fso.GetBaseName(f);
  var cd = "cd /d " + ["\"", c, "\""].join("");
  var makeindex = "mendex" + " " + ["\"", b, "\""].join("");
  var cmd = "cmd /c " + cd + " && " + makeindex;

  document.Save();
  shell.Run(cmd, 1, true);
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
　　　pdfLaTeX.js<br>
　　　pdfepLaTeX.js<br>
　　　pdfepLaTeX2.js<br>
　　　pdfeupLaTeX.js<br>
　　　pdfeupLaTeX2.js<br>
　　　pBibTeX.js<br>
　　　upBibTeX.js<br>
　　　<span style="color:White;background-color:#1188FF;">Mendex.js　　　　　　　　　　　　　　　　　</span><br>

<br>

***

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
