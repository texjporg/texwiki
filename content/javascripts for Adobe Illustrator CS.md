---
title: "javascripts for Adobe Illustrator CS"
url: "/javascripts for Adobe Illustrator CS/"
date: 2007-01-13T09:22:06Z
pukiwiki: "javascripts for Adobe Illustrator CS"
---

# javascripts for Adobe Illustrator CS

<!-- http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/javascripts.html -->

## はじめに {#ae063b79}

Adobe Illustrator では、javascriptで処理を自動化できます。

アウトライン化した数式をリンク配置させるスクリプトを示します。
方法自体は[TeXの数式をDTPソフトに](</TeXの数式をDTPソフトに/#hf9c85f7>)と同じです。
現状では、日本語は通りません。エラーの処理も最低限です。改良していただけると幸いです。

以下のスクリプトは、Adobe Illustrator CS (ver.11.0.0)で動作確認しています。
他のバージョンではエラーがでるかもしれません。
また、このスクリプトを使用することによって生じた問題について責任を取ることは不可能ですので、ご利用は自己責任で。

## 概要 {#we9c341f}

半角英数のファイル名で保存されたファイル(hoge.ai)をAdobe Illustratorで開き、
"First.js"を実行する。

- そのファイルが存在するディレクトリに"EqsInhoge"というサブディレクトリが作成される。
- EqsInhogeに"eq.tex"が作られ、エディタで開かれる。
- 数式を編集して保存する。

"Rewrite.js"を実行する。

- EqsInhogeに"eq_outline_1168709197154.eps"のようなEPSファイルができる。末尾の数字は作成時刻。
- アクティブなドキュメントのアクティブなレイヤーに、アウトライン化された数式がリンク配置される。

## First.js {#g4b6c5cc}

以下のスクリプトを"&amp;Fitst.js"というファイル名で保存。

保存先は"C:\Program Files\Adobe\Illustrator CS\プリセット\スクリプト"が便利です。

```
//TeX関係の初期設定
docclass = "article";	//ドキュメントクラス
fontsize = "12";	//フォントサイズ
initialeq = "\\ket{0}_\\mathrm{photon}\\!\\ket{0}_\\mathrm{atom}";
//eps画像保存用フォルダ作成 アクティブなドキュメントのあるdirのsub dirに
//EqsInファイル名というフォルダを作る
folderRef = activeDocument.path;
str = activeDocument.name;
chr_f = str.split(".");
filename = chr_f[0];
if(folderRef=="/c")
{
alert("アクティブなドキュメントを半角英数の名前で保存してください。")
}
else
{
	dir = folderRef.toString();
	saveDir = ""+dir+"/EqsIn"+filename+"/";
	chr_d = saveDir.split("/");
	saveDrive = chr_d[1]+":";
	savefolder = saveDir.slice(2,-1)+"/";
	eqsFolder = new Folder( saveDir ) ;
	
	if( eqsFolder.exists )
	{
 	//editor.batを実行
	fileObj = new File(""+saveDir+"editor.bat");
	fileObj.execute();
	}
	else
	{
	eqsFolder.create();
	//eq.texを書き出す
	  fileRef = new File (""+saveDir+"eq.tex");
	  flag = fileRef.open ("w","","");
		if (flag)
		{
		fileRef.writeln("\\documentclass["+fontsize+"pt]{"+docclass+"}");
 		fileRef.writeln("\\pagestyle{empty}");
 		fileRef.writeln("\\usepackage{braket}");
		fileRef.writeln("\\usepackage{amsmath,amssymb,bm}");
		fileRef.writeln("\\begin{document}");
		fileRef.writeln("\\[");
		fileRef.writeln(""+initialeq+"");
		fileRef.writeln("\\]");
		fileRef.writeln("\\end{document}");
		}
	  fileRef.close()
	//editor.batを記述
	fileRef = new File (""+saveDir+"editor.bat");
	fileRef.open ("w","","");
	fileRef.writeln("cd EqsIn"+filename+"");
	fileRef.writeln("start eq.tex");
	fileRef.writeln("exit");
	fileRef.close();
	//editor.batを実行
	fileObj = new File(""+saveDir+"editor.bat");
	fileObj.execute();
        }
}

```

## Rewrite.js {#w935a51a}

以下のスクリプトを"&amp;Rewrite.js"というファイル名で保存。

保存先は"C:\Program Files\Adobe\Illustrator CS\プリセット\スクリプト"が便利です。

```
//TeX関係の初期設定
gs = "gswin32c";	//アウトラインを作成	
TeX = "latex";		//TeX処理
dvi = "dvips";		//dvi変換
folderRef = activeDocument.path;
str = activeDocument.name;
chr_f = str.split(".");
filename = chr_f[0];
if(folderRef=="/c")
{
alert("アクティブなドキュメントを半角英数の名前で保存してください。")
}
else
{
	dir = folderRef.toString();
	saveDir = ""+dir+"/EqsIn"+filename+"/";
	chr_d = saveDir.split("/");
	saveDrive = chr_d[1]+":";
	savefolder = saveDir.slice(2,-1)+"/";
	eqsFolder = new Folder( saveDir ) ;
	if( !eqsFolder.exists )
	{
	alert("First.jsを先に実行してください");
	}
	else
	{
	time = new Date().getTime();
	//tex2eps_outline.batを記述
	fileRef = new File (""+saveDir+"tex2eps_outline.bat");
	fileRef.open ("w","","");
	fileRef.writeln(""+saveDrive+"");
	fileRef.writeln("cd EqsIn"+filename+"");
	fileRef.writeln(""+TeX+" eq");
	fileRef.writeln(""+dvi+" -Ppdf -E eq -o eq.eps");
	fileRef.writeln(""+gs+" -q -sDEVICE=epswrite -sOutputFile=eq_outline_"+time+".eps -r9600 -dNOPAUSE -dBATCH -dSAFER -dEPSCrop eq.eps");
	fileRef.close();
	//tex2eps_outline.batを実行
	fileObj = new File(""+saveDir+"tex2eps_outline.bat");
	fileObj.execute();
	//TeX処理とEPS書き出しの時間がまちまちなので...
	flag = confirm("描画しますか？");
	if (flag == true) 
	{
	//リンク画像としてアクティブなドキュメントの
	//アクティブなレイヤーに貼り付ける。
	placedImg = activeDocument.activeLayer.placedItems.add() ;
	inputFile = ""+saveDir+"eq_outline_"+time+".eps";
	placedImg.file = new File( inputFile );
	placedImg.name = "+time+";
	placedImg.position = [ 400, 400] ;
	placedImg.selected = true ;
	}
	}
}
```

## 使い方 {#jc24064d}

1. 半角英数のファイル名で保存されたファイル(hoge.ai)をAdobe Illustratorで開く。
1. \[ファイル\]→\[スクリプト\]から"&amp;Fitst.js"を実行。エディタで"eq.tex"が開かれます。
1. 適当に編集した後、\[ファイル\]→\[スクリプト\]から"&amp;Rewrite.js"を実行すれば、対応する数式がリンク配置されます。
1. 続けて別の数式をリンク配置したい場合は、"eq.tex"を編集して保存し、\[ファイル\]→\[スクリプト\]から"&amp;Rewrite.js"を実行するだけです。

## Tips {#if054c37}

- 既にサブディレクトリ"EqsInhoge"が存在する場合は、その中の"eq.tex"が直前に編集された状態で開かれます。
- スクリプトの保存先を"C:\Program Files\Adobe\Illustrator CS\プリセット\スクリプト"にしてあり、スクリプトのファイル名を"&amp;Fitst.js"、"&amp;Rewrite.js"にしてある場合、\[Alt+F\]+\[R\]+\[F\]で"&amp;First.js"、\[Alt+F\]+\[R\]+\[R\]で"&amp;Rewrite.js"が実行されます。
- 「半角英数のファイル名で保存されたファイル(hoge.ai)をAdobe Illustratorで開く」というステップが必要なのは、文字コードの問題です。改良していただけると幸いです。
- エディタを常に最前面に表示するようにしておくと、細かい数式を大量に配置するときに便利です。
