---
title: "javascripts for Adobe Illustrator CS"
url: "/javascripts for Adobe Illustrator CS/"
date: 2007-01-13T09:22:06Z
pukiwiki: "javascripts for Adobe Illustrator CS"
---

# javascripts for Adobe Illustrator CS

<!-- http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/javascripts.html -->

## はじめに {#ae063b79}

Adobe Illustrator は、javascriptで処理を自動化できます。

Illustratorで入力したテキストを読み込み、
バッチファイルを呼び出してTeX処理、及びEPSファイルの作成を行い、
出来上がったEPSをアクティブなドキュメントのアクティブなレイヤーに
配置するjavascriptを示します。

Illustrator CS windows版 (Windows XP SP2) で動作を確認していますが、
Illustratorのjavascriptはバージョン毎の互換性が悪いらしく、
またその実行環境に影響を受けることさえあるらしいので、
動かなければ適当に直してください。

Illustrator上でのjavascriptに関するマニュアルは、インストールCD中にあります(CSの場合、Adobe テクニカル情報/Illustrator CS/Scripting/Documentation)。

### 参考ページ {#o88510e0}

[TeXの数式をDTPソフトに](</TeXの数式をDTPソフトに/#hf9c85f7>)

[Illustrator CS自動化作戦](http://www.openspc2.org/book/IllustratorCS/)

## 埋め込み配置 {#l35eb979}

### TeX.js {#w6b53952}

C:\temp\というフォルダを作ります。別の場所が良い方は適宜読み替えてください。

"C:\temp\\"に、次の"tex2eps.bat"を保存します。スクリプト中で呼び出して使うことになります。

```
C:
cd C:\temp\
latex eq
dvips -Ppdf -E eq -o eq.eps
gswin32c -q -sDEVICE=epswrite -sOutputFile=outline.eps -r9600 -dNOPAUSE -dBATCH -dSAFER -dEPSCrop eq.eps
```

"C:\Program Files\Adobe\Illustrator CS\プリセット\スクリプト"に、
次の"&amp;TeX.js"を保存します。

```
sel = activeDocument.selection;
txtRange = sel[0].textRange; 
script = txtRange.contents;

fileRef = new File ("/C/temp/eq.tex");
openflag = fileRef.open ("w","","");
if (openflag) fileRef.writeln(""+script+"");
fileRef.close();

batObj = new File("/C/temp/tex2eps.bat");
batObj.execute();

flag = confirm("描画しますか？");

if (flag == true) 
{
	filepath = "/C/temp/outline.eps";
	fileObj = new File(filepath);
	activeDocument.activeLayer.groupItems.createFromFile(fileObj);
}
```

保存したら、Illustratorを起動してください。\[ファイル\]→\[スクリプト\]とたどれば"TeX"があるはずです。

テキストツールを使うなどして、次の内容のテキストオブジェクトを作成します。

```
\documentclass[12pt]{article}
\pagestyle{empty}
\usepackage{amsmath,amssymb}
\begin{document}
\begin{equation*}
A = \begin{pmatrix}
a_{11} & \ldots & a_{1n} \\
\vdots & \ddots & \vdots \\
a_{m1} & \ldots & a_{mn}
\end{pmatrix}
\end{equation*}
\end{document}
```

テキストオブジェクトを選択した状態で、\[ファイル\]→\[スクリプト\]→\[TeX\]を選択し、cmd.exeが終了した後、"描画しますか?"という確認メッセージに「はい」と答えることで数式が埋め込み配置されます。Windowsなら、\[Alt+F\]→\[R\]→\[T\]でスクリプトを実行することも可能です。

### Ini.js {#u080dc63}

パッケージ等を毎回書くのは面倒ですので、カスタマイズ可能な初期設定ファイルを作っておき、これを雛形としてテキストオブジェクトを編集できるようにしておきます。

"C:\temp\\"に、次の"eq.ini"を保存します。

```
\documentclass[12pt]{article}
\pagestyle{empty}
\usepackage{amsmath,amssymb,bm}
\begin{document}

\end{document}
```

"C:\Program Files\Adobe\Illustrator CS\プリセット\スクリプト"に、
次の"&amp;Ini.js"を保存します。

```
LF = String.fromCharCode(10); //  改行コード
CR = String.fromCharCode(13); //  改行コード
array = new Array();
joinedTxt = "";
fileRef = new File("/C/temp/eq.ini");
flag = fileRef.open ("r","","");
if (flag){
	textObj = activeDocument.textFrames.add();
	txt = fileRef.read();
	array = txt.split(LF);
	for(i=0;i<array.length;i++){
		joinedTxt = joinedTxt + array[i];
		if( i != array.length-1 ) joinedTxt = joinedTxt + CR;
		}
	textObj.contents = joinedTxt;
	fileRef.close();
}
```

保存した後Illustratorを起動すれば、\[ファイル\]→\[スクリプト\]に\[Ini\]が追加されているはずです。数式を書き込みたい文書を編集しているときに、このスクリプトを呼び出せば、"eq.ini"内の文書が書き込まれたテキストオブジェクトが作成できます。こちらもWindowsなら、\[Alt+F\]→\[R\]→\[I\]で実行可能です。

***

- リンク配置を行うスクリプトを改良したものです。問題があったためお勧めできませんが、必要であればこのページのバックアップを参照してください。 -- 書いた人 2007-02-21 (水) 00:14:23
