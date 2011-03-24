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

\[マクロ(M)\]-\[カスタマイズ(C)...\]-\[新規作成(N)\]

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

\[ツール(T)\]-\[オプション(O)...\]-\[キーボード\] でショートカットキーを追加して割り当てます．

***

<span style="color:Black;background-color:#AA77FF;"><ins>　<span style="color:White;"><strong>オプション</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　基本　\]\[　表示　\]\[　記号　\]\[　関連付け　\]</ins></span><strong>\[　キーボード　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　履歴　\]</ins></span><br>

<br>

　　　分類(<ins>C</ins>)：　　　　　　　　　　　　　　　　　　　　追加するショートカットキー(<ins>N</ins>)：<br>
　　　<span style="color:Black;background-color:#EEEEEE;">\[マイ マクロ　　　　　　　　　　　　　　▼\]</span>　　　<ins>Ctrl+Alt+J</ins><br>

<br>

　　　コマンド(<ins>O</ins>)：　　　　　　　　　　　　　　　　　　現在のキー(<ins>U</ins>)：<br>
　　　<span style="color:White;background-color:#1188FF;">pdfepLaTeX.js　　　　　　　　　　　　　　</span><br>

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

TeX の 部・章・節・小節・小々節 にジャンプできるようにカスタマイズします．

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

***
