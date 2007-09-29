---
title: "javascripts for Adobe Illustrator CS"
url: "/javascripts for Adobe Illustrator CS/"
date: 2007-01-13T09:22:06Z
pukiwiki: "javascripts for Adobe Illustrator CS"
---

# javascripts for Adobe Illustrator CS

<!-- http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/javascripts.html -->

<!-- pLaTeX(- -kanji=utf8オプション) とdvipsk，gs7.07 で数式混じりの和文も処理できる改訂版 [[illustratorTeX.lzh(6kb):http://scientificlifehack.googlepages.com/illustratorTeX.lzh]] と[[その紹介:http://leftformula.blogspot.com/2007/06/illustrator-latex-javascript.html]]を書きましたのでよろしければどうぞ．配置した数式の再編集も比較的楽に行えるように改善してあります． -->

## はじめに {#ae063b79}

[TeXの数式をDTPソフトに](</TeXの数式をDTPソフトに/#hf9c85f7>)の方法をできる限り楽にするために書いたスクリプトです．
フォントをそのまま使うと[qa:27936](https://okumuralab.org/~okumura/texfaq/qa/27936.html) にあるように問題が生じるので，アウトラインをとって貼り付けます．
Illustrator CS のほかに，LaTeX とdvips, Ghostscript が必要です．
和文も処理したい場合は，(--kanji=utf8 オプションが指定可能な)pLaTeX とdvipsk, GNU Ghostscript 7.07 が使える環境を用意してください．以下の内容はすべて和文も処理することを前提にしたものです．また，都合3つのファイルを作成して然るべき場所へ保存する必要がありますが，面倒な方は[こちらへ](http://leftformula.blogspot.com/2007/08/illustrator-latex.html)．

Illustrator にさせている仕事は

- 雛形であるeq.ini の該当部分をテキストオブジェクトの内容で置き換えてeq.tex を書き出す．
- makeEPS.bat を実行してeq.tex -> eq.dvi -> eq.eps -> outline.eps．
- outline.eps をテキストオブジェクトの場所に貼り付ける．

の3つです．TeX 関係のなんらかの処理を変えたい時はeq.ini とmakeEPS.bat を書き換えれば充分で，使用する上ではIllustrator Javascript に関する特別な知識は要らないはずです．

<!-- Illustrator CS のドキュメント中に、楽にLaTeX の数式を配置するためのスクリプトです。 -->
<!-- [[qa:27936]] の問題を回避するため、冗長になっています。 -->
<!-- Illustrator CS のほかに、LaTeX とdvips、(一部のフォントを含む数式を埋め込み配置する場合は)Ghostscript が必要です。当然ですが、Illustrator で処理が完結しているわけではなく、Illustrator は外部ファイルの書き換えや実行、配置を行う命令を出しているだけです。 -->

Illustrator CS windows 版 (Windows XP SP2) で動作を確認していますが、Illustrator のjavascript はバージョン毎の互換性が悪いらしく、またその実行環境に影響を受けることさえあるらしいので、動かなければ適当に直してください。

> Illustrator CS3 windows 版 (Windows XP SP2) でもそのままで動くようです．

Illustrator 上でのjavascript に関するマニュアルはインストールCD中にあります(CSの場合、Adobe テクニカル情報/Illustrator CS/Scripting/Documentation)。

<!-- **参考ページ [#o88510e0] -->

<!-- [[TeXの数式をDTPソフトに>TeXの数式をDTPソフトに#hf9c85f7]] -->

<!-- [[Illustrator CS自動化作戦:http://www.openspc2.org/book/IllustratorCS/]] -->

<!-- [[qa:27936]] -->

<!-- [[Illustrator のリンク配置と埋め込み配置の違い:http://support.adobe.co.jp/faq/qadoc/AJ25.nsf/041584e8dbf36c09492569690008402c/0d1c8a5d4ac9e53549256e3600074edc?OpenDocument]] -->

## 準備 {#d06797b4}

### 作業用フォルダの作成 {#q425d35e}

<!-- C:\AI\というフォルダを作ります。別の場所が良い方は適宜読み替えてください(パスは半角英数のみ)。 -->

eq.tex -> eq.dvi -> eq.eps -> outline.eps という処理を行うフォルダを用意します．
C:\Documents and Settings\All Users\Application Data\Adobe\Illustrator CS\temp\ あたりが妥当かと思いますが，どこでもかまいません．以下では説明の便宜上"C:\AI\\" を作ったことにして説明します．意味が分からない場合は，Cドライブの直下に新しいフォルダを作ってAI という名前をつけてください．

### eq.ini {#ubf2a4af}

eq.tex の雛形になるテキストファイルです．テキストドキュメントを新規作成し，以下の内容を書き込んでeq.iniという名前で作業用フォルダの作成で作成したフォルダに保存します．以下は一例ですので，場合によってはフォントサイズを変えたり適当なパッケージを読み込んだり，好きなマクロを追加したり自由に改変してください．

```
\documentclass[10pt]{jarticle}
\pagestyle{empty}
\usepackage{%
amsmath,%
amssymb,%
bm,%
% txfonts%
}
\usepackage{mathrsfs}
\AtBeginDocument{%
% 日本語フォントのデフォルトをゴシックにする
%  http://tex.dante.jp/typo/index.php?%A5%D7%A5%EC%A5%BC%A5%F3%A5%B9%A5%E9%A5%A4%A5%C9
\renewcommand\mcdefault{gt}%
\kanjifamily \gtdefault \selectfont 
}

\usepackage{braket}
\newcommand{\kvec}{\bm{\mathrm{k}}}
\newcommand{\rvec}{\bm{\mathrm{r}}}
\newcommand{\pvec}{\bm{\mathrm{p}}}
\newcommand{\ketbra}[2]{\Ket{#1}\!\!\Bra{#2}} 

\begin{document}
<r>
\end{document}
```

最後の&lt;r>をテキストオブジェクトの内容(その他)で置き換えてeq.tex を書き出します．

### MakeEPS.bat {#p0c06018}

eq.tex -> eq.dvi -> eq.eps -> outline.eps という処理を行うバッチファイルです．
テキストドキュメントを新規作成し，以下の内容を書き込んでMakeEPS.batという名前で作業用フォルダの作成で作成したフォルダに保存します．

```
cd /d C:\AI\
platex --kanji=utf8 eq
dvipsk -Pdl -E eq -o eq.eps
gswin32c -q -sDEVICE=epswrite -r19200 -dNOPAUSE -dBATCH -dSAFER -dEPSCrop -sOutputFile=outline.eps eq.eps
```

第一行目の「cd /d C:\AI\」は，作業用フォルダの作成で作成したフォルダに移動するコマンドです．作業用フォルダの作成でC:\Documents and Settings\All Users\Application Data\Adobe\Illustrator CS\temp\を作った場合は

```
cd /d C:\Documents and Settings\All Users\Application Data\Adobe\Illustrator CS\temp\
```

に書き換えてください．

### TeX(&amp;T).js {#w5a4bc73}

Illustrator CS で作業中に呼び出すことになるスクリプトの本体です．
テキストドキュメントを新規作成して，以下の内容を書き込んでTeX(&amp;T).js という名前で"C:\Program Files\Adobe\Illustrator CS\プリセット\スクリプト" に保存します．なお，"C:\Program Files..." はIllustrator をデフォルトの設定でインストールした場合です．"Illustrator CS\プリセット\スクリプト\\"に保存すれば，スクリプトを呼び出すときに便利です．

第一行目の「AI = "/C/AI/";」は，作業用フォルダの作成で作成したフォルダ名を指定しています．作業用フォルダの作成でC:\Documents and Settings\All Users\Application Data\Adobe\Illustrator CS\temp\を作った場合は「AI = "/C/Documents and Settings/All Users/Application Data/Adobe/Illustrator CS/temp/";」に書き換えてください．

```
AI = "/C/AI/";
d_document = false;	//true→本文環境 false→数式環境
o_document = "%d";
d_keep = false;	//true→テキストオブジェクトを残す false→残さない
o_keep = "%k";
environment = "align*";
CR = String.fromCharCode(13);
LF = String.fromCharCode(10);

/**********************************************
		      main
***********************************************/
docName = app.activeDocument.name.split(".")[0];
dir = app.activeDocument.path.toString();
if (dir.length < 3)
 {//ルート(C:\など)がdirとして指定されている場合
	alert(" ファイルパスが不正です．\n 一度も保存されていない可能性があります．\n 数式を再編集したい場合は適当な場所にフォルダを作り，\n そこにドキュメントを保存してから実行してください．");
	iniflag = false;
 }
 else
  {
	saveDir = dir + "/" + docName + "/";
	saveFolder = new Folder( saveDir ) ;
	if(!saveFolder.exists) saveFolder.create();
	iniflag = true;
  }
selectObj = app.selection;
selLength = selectObj.length;

if (selLength == 0 && iniflag && confirm("不要なテキストファイルを削除しますか? ")) DelTxtFiles(saveDir);//何も選択されておらず，ドキュメントが保存されていて，確認メッセージに「はい」と答えた場合，不要なテキストファイルを検索して削除．
ctr=0;
for (step=0;step<selLength;step++)
{
	ctr += MainProc(step);
}
if (selLength != 0 && ctr == 0) alert("選択されたすべてのオブジェクトはこのスクリプトで処理できるものではありません．");//選択されたオブジェクトが0でないのにも関わらず，MainProc()が一度も正常に終了しなかった場合に報告する．

/**********************************************
		      関数
***********************************************/

function MainProc(i)
{//INT_iはfor用のステップ．なんらかの処理に成功すると1，何もしないと0を返す．
	if (selectObj[i].textRange == undefined) 
	 {//選択したオブジェクトがテキストオブジェクトでなければ
	 	filename = selectObj[i].name;//オブジェクト名を取得
 		if (filename != undefined && iniflag)	
 	 	 {//選択したオブジェクトの名前が未定義でなく，保存されていれば
			//オブジェクトの座標，大きさを取得
			x = selectObj[i].left;
			y = selectObj[i].top;
			w = selectObj[i].width;
			h = selectObj[i].height;
			dy = -h-5;
 			if(PasteTxt(saveDir + filename + ".txt",x+w/2,y+dy)) return 1;//存在すればテキストを呼び出して式の直下にペースト
	 	 }
	 	return 0;
	 }
	 else
	 {//選択したオブジェクトがテキストオブジェクトなら
		equation = selectObj[i].textRange.contents;//テキストを取得
		//オブジェクトの座標，大きさを取得
		x = selectObj[i].left;
		y = selectObj[i].top;
		w = selectObj[i].width;
		h = selectObj[i].height;
		//オプションの有無によってフラグを変更
		if(equation.indexOf(o_document)!=-1) document = !d_document;
		 else document = d_document;
		if(equation.indexOf(o_keep)!=-1) keep = !d_keep;
		 else keep = d_keep;

		if (keep)
		 {//テキストオブジェクトを残す場合の位置のオフセット
			d = 0;
			dy = -h-5;
		 }
		 else
		  {//テキストオブジェクトを残さない場合の位置のオフセット
			d = 1;
			dy = -h/2;
		  }
		if(document == false) revequation = "\\begin{"+environment+"}"+CR+equation+CR+"\\end{"+environment+"}";//数式環境なら，equationの前後に\begin{align}\end{align}を挿入
		else revequation = equation;//数式環境でなければそのまま．
		if (!ReplaceTextDoc(AI+"eq.ini",AI+"eq.tex","<r>",revequation)) return 0;//eq.texの置換．失敗したら終了．
	 }
	 
	 time = new Date().getTime();//貼り付けるオブジェクトの名前＆保存されるテキストの名前に使用
	 if (!Exe(AI+"MakeEPS.bat")) return 0;//MakeEPS.bat を実行．失敗したら終了．
	 if (confirm("描画しますか？"))
	 {//確認メッセージに「はい」と答えたら
	 	if(iniflag) MakeTextDoc(saveDir+time+".txt",equation);//アクティブなドキュメントが保存されていればテキストオブジェクトの内容をバックアップ
	 	if(ImportImg(AI+"outline.eps",time,x+w/2,y+dy,d) && !keep) selectObj[i].remove();//outline.eps をペースト．オブジェクトを残さない場合は選択されているオブジェクトを消去．
	 }
	 return 1;
}

function MakeTextDoc(filepath,txt)
{//txtに与えられた文字列を書き込んだテキストファイルを作成．存在する場合は上書き．
//成功すればtrue, 失敗すればfalse を返す．
	FileObj = new File (filepath);
	flag = FileObj.open ("w");
	if(!flag)
	 {
		alert(filepath+"を読めません");
		return false;
	 }
	FileObj.writeln(txt);
	if(!FileObj.close()) return false;
	return true;
}

function ReplaceTextDoc(readfilepath,writefilepath,regexp,newString)
{//readfilepath中のregexpという文字列をnewStringという文字列に置換し，writefilepathとして書き出す．
//成功すればtrue, 失敗すればfalseを返す．
	readFileObj = new File(readfilepath);
	rflag = readFileObj.open ("r");
	if (!rflag)
	 {
		alert(readfilepath+"を読めません");
		return false;
	 }
	readtext = readFileObj.read();
	readFileObj.close();
	
	replacedtext = readtext.replace(regexp,newString);
	return MakeTextDoc(writefilepath,replacedtext);
}
	
function Exe(filepath)
{//filepathで指定したファイルを既定のアプリで実行する．成功すればtrue，失敗すればfalseを返す．
	fileObj = new File(filepath);
	if (!fileObj.exists)
	 {
		alert(filepath+"が見つかりません");
		return false;
	 }
	fileObj.execute();
	return true;
}
	
function ImportImg(filepath,objName,x,y,d)
{//filepathに指定したEPSファイルをアクティブなドキュメントにグループパスアイテムとして配置する．
//objNameは配置されたオブジェクトの名前を与える文字列．x,yは位置座標．
//成功したらtrue, 失敗したらfalseを返す．
	fileObj = new File (filepath);
	if (!fileObj.exists)
	 {
		alert(filepath+"が見つかりません");
		return false;
	 }
	placedImg = app.activeDocument.activeLayer.groupItems.createFromFile(fileObj);
	placedImg.name = objName;
	pw = placedImg.width;
	ph = placedImg.height;
	placedImg.left = x - pw/2 ;
	placedImg.top = y + d*ph/2 ;
	return true ;
}

function PasteTxt(filepath,x,y)
{//filepathに指定したテキストファイルをアクティブなドキュメントにテキストアイテムとして配置する．
//x,yは位置座標．成功したらtrue, 失敗したらfalseを返す．
	fileObj = new File(filepath);
	flag = fileObj.open ("r");
	if (!flag)
	{
//		alert(filepath+"が見つかりません");
		return false;
	}
	textObj = activeDocument.textFrames.add();
	text = fileObj.read();
	if (!fileObj.close()) return false;
	array = new Array();
	joinedTxt = "";
	array = text.split(LF);
	for(i=0;i<array.length-1;i++)
	{
		joinedTxt += array[i];
		if( i != array.length-2 ) joinedTxt += CR;
	}
	textObj.contents = joinedTxt;
	pw = textObj.width;
	textObj.left = x - pw/2 ;
	textObj.top = y ;
	return true;
}

function DelTxtFiles(folderpath)
{//folderpathに指定したフォルダ中の不要なテキストファイルを検索して削除
	grpObj = app.activeDocument.groupItems;
	ref = "";
	for(i=0;i<grpObj.length;i++)
	 {//アクティブなドキュメント中のグループアイテムの名前をひとつの文字列にまとめる
		ref += grpObj[i].name + ".txt ";
	 }
	folderObj = new Folder(folderpath);
	fileList = folderObj.getFiles("*.txt");//指定したフォルダ中のテキストファイル名をリストにする
	del = 0;//消去したテキストファイルの数．初期化．
	for(i=0;i<fileList.length;i++)
	 {
		if(ref.indexOf(fileList[i].name) == -1 )
		 {//ref に存在しない文字列がfileListにあった場合
			del += 1;//消去したテキストファイルの数に１を加え
			filepath = folderpath + fileList[i].name;
			fileObj = new File(filepath);
			fileObj.remove();//該当ファイルを消去
		 }
	 }
	alert(del + "個の不要ファイルを削除しました．");
}
```

<!-- テキストドキュメントに次のように記述して、"outline.bat" という名前で"C:\AI\" に保存します。 -->

<!-- cd /d c:\AI\ -->
<!-- latex eq -->
<!-- dvips -Pdl -E eq -o eq.eps -->
<!-- gswin32c -q -sDEVICE=epswrite -sOutputFile=outline.eps -r9600 -dNOPAUSE -dBATCH -dSAFER -dEPSCrop eq.eps -->

<!-- テキストドキュメントに次のように記述して、"bat.ini" という名前で"C:\AI\" に保存します(埋め込み配置のみでよいならば不要)。 -->

<!-- cd /d c:\AI\ -->
<!-- latex eq -->
<!-- dvips -Pdl -E eq -o Link\<r>.eps -->

<!-- テキストドキュメントに次のように記述して、"eq.ini" という名前で"C:\AI\" に保存します。これは一例に過ぎません。"<r>" の部分をスクリプトで置き換えて使いますので、その他の部分は適当に編集してください。 -->

<!-- \documentclass[12pt]{article} -->
<!-- \pagestyle{empty} -->
<!-- \usepackage{amsmath,amssymb,bm} -->
<!-- \begin{document} -->
<!-- \begin{align*} -->
<!-- <r> -->
<!-- \end{align*} -->
<!-- \end{document} -->

<!-- テキストドキュメントに次のように記述して、"&TeX.js" という名前で"C:\Program Files\Adobe\Illustrator CS\プリセット\スクリプト" に保存します。なお、"C:\Program Files..." はIllustrator をデフォルトの設定でインストールした場合です。 -->

<!-- link = false;	//true→リンク配置 false→埋め込み配置 -->
<!-- AI = "/C/AI/"; -->
<!-- 	 -->
<!-- chr_f = app.activeDocument.name.split("."); -->
<!-- docName = escape(chr_f[0]).replace(/%/g,""); -->
<!-- saveDir = AI+"Link/"+docName+"/"; -->
<!-- folderObj = new Folder(saveDir) ; -->
<!-- if (!folderObj.exists && link) folderObj.create(); -->
<!-- selectObj = app.selection; -->
<!-- selectLnt = selectObj.length; -->
<!--  -->
<!-- ctr = 0; -->
<!-- for (i=0;i<selectLnt;i++) -->
<!-- {	 -->
<!-- 	if(link) -->
<!-- 	{	 -->
<!-- 		numOfFiles = folderObj.getFiles("*.eps").length; -->
<!-- 		if (numOfFiles < 10) numOfFiles = "000"+numOfFiles+""; -->
<!-- 		else if (numOfFiles < 100) numOfFiles = "00"+numOfFiles+""; -->
<!-- 		else if (numOfFiles < 1000) numOfFiles = "0"+numOfFiles+""; -->
<!-- 	} -->
<!-- 	else numOfFiles = 0; -->
<!-- 	 -->
<!-- 	if (selectObj[i].textRange == undefined) editflag = false; -->
<!-- 	else -->
<!-- 	{ -->
<!-- 		ctr += 1; -->
<!-- 		equation = selectObj[i].textRange.contents; -->
<!-- 		x = selectObj[i].left; -->
<!-- 		y = selectObj[i].top; -->
<!-- 		w = selectObj[i].width; -->
<!-- 		h = selectObj[i].height; -->
<!-- 		if (equation.indexOf("%") == equation.length - 1) -->
<!-- 		{	 -->
<!-- 			d = 0; -->
<!-- 			dy = -h-5; -->
<!-- 		} -->
<!-- 		else -->
<!-- 		{ -->
<!-- 			d = 1; -->
<!-- 			dy = -h/2; -->
<!-- 			selectObj[i].remove(); -->
<!-- 		} -->
<!-- 		editflag = ReplaceTextDoc(AI+"/eq.ini",AI+"eq.tex","<r>",equation); -->
<!-- 	} -->
<!-- 		 -->
<!-- 	if (link && editflag && ReplaceTextDoc(AI+"bat.ini",AI+"nooutline.bat","<r>",docName+"\\"+numOfFiles)) exeflag = Exe(AI+"nooutline.bat"); -->
<!-- 	else if (!link && editflag) exeflag = Exe(AI+"outline.bat"); -->
<!-- 	else exeflag = false; -->
<!-- 	 -->
<!-- 	if (exeflag && confirm("描画しますか？")) ImportImg(saveDir+numOfFiles+".eps",AI+"outline.eps",x+w/2,y+dy,d,link); -->
<!-- } -->
<!-- if (ctr == 0) alert("1つ以上のテキストオブジェクトを選択してください"); -->
<!-- 	 -->
<!-- function ReplaceTextDoc(readfilepath,writefilepath,regexp,newString) -->
<!-- { -->
<!-- 	readFileObj = new File(readfilepath); -->
<!-- 	rflag = readFileObj.open ("r"); -->
<!-- 	if (!rflag) -->
<!-- 	{ -->
<!-- 		alert(readfilepath+"を読めません"); -->
<!-- 		return false; -->
<!-- 	} -->
<!-- 	readtext = readFileObj.read(); -->
<!-- 	readFileObj.close(); -->
<!-- 	 -->
<!-- 	replacedtext = readtext.replace(regexp,newString); -->
<!-- 	writeFileObj = new File (writefilepath); -->
<!-- 	wflag = writeFileObj.open ("w"); -->
<!-- 	if (!wflag) -->
<!-- 	{ -->
<!-- 		alert(writefilepath+"に書き込めません"); -->
<!-- 		return false; -->
<!-- 	} -->
<!-- 	writeFileObj.writeln(replacedtext); -->
<!-- 	writeFileObj.close(); -->
<!-- 	return true; -->
<!-- } -->
<!-- 	 -->
<!-- function Exe(filepath) -->
<!-- { -->
<!-- 	fileObj = new File(filepath); -->
<!-- 	if (!fileObj.exists) -->
<!-- 	{ -->
<!-- 		alert(filepath+"が見つかりません"); -->
<!-- 		return false; -->
<!-- 	} -->
<!-- 	fileObj.execute(); -->
<!-- 	return true; -->
<!-- } -->
<!-- 	 -->
<!-- function ImportImg(linkfilepath,embedfilepath,x,y,d,flag) -->
<!-- { -->
<!-- 	if(flag) -->
<!-- 	{ -->
<!-- 		fileObj = new File (linkfilepath); -->
<!-- 		if (!fileObj.exists) -->
<!-- 		{ -->
<!-- 			alert(linkfilepath+"が見つかりません。") -->
<!-- 			return false; -->
<!-- 		} -->
<!-- 		array = new Array(); -->
<!-- 		array = linkfilepath.split("/"); -->
<!-- 		filename = array[array.length - 1].replace(".eps",""); -->
<!-- 		placedImg = activeDocument.activeLayer.placedItems.add() ; -->
<!-- 		placedImg.file = fileObj; -->
<!-- 		placedImg.name = filename; -->
<!-- 	} -->
<!-- 	else -->
<!-- 	{ -->
<!-- 		fileObj = new File (embedfilepath); -->
<!-- 		if (!fileObj.exists) -->
<!-- 		{ -->
<!-- 			alert(embedfilepath+"が見つかりません。") -->
<!-- 			return false; -->
<!-- 		} -->
<!-- 		placedImg = app.activeDocument.activeLayer.groupItems.createFromFile(fileObj); -->
<!-- 	} -->
<!-- 	pw = placedImg.width; -->
<!-- 	ph = placedImg.height; -->
<!-- 	placedImg.left = x - pw/2 ; -->
<!-- 	placedImg.top = y + d*ph/2 ; -->
<!-- 	return true ; -->
<!-- } -->

<!-- 最後に、C:\AI\Link\ というフォルダを作ってください(これも埋め込み配置のみで良いならば不要)。 -->

<!-- *埋め込み配置 [#l35eb979] -->

## スクリプトの利用 {#h8061542}

Illustrator を起動してください．\[ファイル\]→\[スクリプト\]とたどれば"TeX" があるはずです．ドキュメントを適当な場所に保存し，テキストツールを使って，例えば次の内容のテキストオブジェクトを作ります．

```
&\int_{-\infty}^{\infty}\!\!\!\delta(x-\alpha)f(x)\mathrm{d}x=f(\alpha)\\
&A = \begin{pmatrix}
a_{11} & \ldots & a_{1n} \\
\vdots & \ddots & \vdots \\
a_{m1} & \ldots & a_{mn}
\end{pmatrix}
```

このテキストのフレームを選択した状態で，\[ファイル\]→\[スクリプト\]→\[TeX\]を選択し，cmd.exe が終了した後，"描画しますか?" という確認メッセージに「はい」と答えればテキストオブジェクトが数式に置換されます．なお，Windows なら\[Alt+F\]→\[R\]→\[T\]でスクリプトを実行することも可能です．

置換したくない場合は数式の最後に"%k" を付けてください( 上の例では"...\end{pmatrix}" を"...\end{pmatrix}%k" とする )．テキストの真下に数式が配置されます．また，複数のテキストを選択した状態でスクリプトを実行すれば，選択されているすべてのテキストに対して順に処理を行います．

数式を選択した状態で同じスクリプトを実行すると，テキストを復活させることができます．
このスクリプトを使用して数式を貼り付けると，Illustrator のファイルが保存されているディレクトリにファイル名と同じ名前のフォルダが作られ，そこに数式に対応したテキストが保存されます．オブジェクトの名前とテキストファイルのファイル名を対応させているので，例えばグループ解除などの操作をしてオブジェクトの名前を変えてしまうとテキストを復活させることができなくなります．また，テキストファイルが格納されているフォルダを削除/移動した場合もテキストを復活させられなくなります．Illustrator のファイルから見た相対パスが重要なので，Illustrator のファイルを移動させるときはこのフォルダも一緒に移動してやってください．逆に言えば，再編集の必要が無いならこのフォルダを消してしまっても問題ありません．

何も選択しない状態でこのスクリプトを実行すると，不要になったテキストファイル(スクリプトから呼び出せないテキストファイル)を探して消去します．

標準では，テキストオブジェクトの内容に

```
\begin{align*}

\end{align*}
```

を補完してeq.tex を書き出す(eq.ini 内の&lt;r> と置換する)仕様です．
この補完をさせないためには，テキストオブジェクトの末尾に"%d" をつけてください．
例えば，

```
Suppose $\hat{A}$ is any linear operator on a Hilbert space, $V$.  
There exists a unique linear operator $\hat{A}^\dagger$ on $V$ such that....
```

という内容のテキストオブジェクトに対してスクリプトを実行すると

```
\begin{document}
\begin{align*}
Suppose $\hat{A}$ is any linear operator on a Hilbert space, $V$.  
There exists a unique linear operator $\hat{A}^\dagger$ on $V$ such that....
\end{align*}
\end{document}
```

を処理したことになるのでエラーが出ますが，

```
Suppose $\hat{A}$ is any linear operator on a Hilbert space, $V$.  
There exists a unique linear operator $\hat{A}^\dagger$ on $V$ such that....%d
```

なら

```
\begin{document}
Suppose $\hat{A}$ is any linear operator on a Hilbert space, $V$.  
There exists a unique linear operator $\hat{A}^\dagger$ on $V$ such that....%d
\end{document}
```

となるので問題なく処理できます．

ちなみに，補完される数式環境はデフォルトでは"align\*" ですが，
これはスクリプトの第6行目

```
environment = "align*";
```

で定義されています．別の環境が良い場合は，ここを適当に書き換えてください．

<!-- W32TeX およびGhostscript がインストールされている通常の環境であれば、 -->
<!-- Illustrator に特別な設定をしなくとも数式が確認できるはずです。 -->
<!-- 上記のスクリプト( とバッチファイル )は、Ghostscript のepswrite で数式のアウトラインを書き出し、得られたクローズドパスを埋め込み配置するように設定されています。 -->

<!-- これは、フォント関連の問題を回避したい場合(例えばA0サイズのポスターの印刷を外注)に有効です。特にIllustrator CS では、一部のフォントだけがＭＳ　ゴシックに強制的に置き換わるという問題( [[qa:27936]]を参照。) があり、Illustrator 上で何らかの編集を行う上ではアウトライン化しておくほうが安全だと思われます。 -->

<!-- *リンク配置 [#x5d180c8] -->

<!-- 数式に対して拡大縮小や回転といった単純な編集だけで十分で、自分の環境でPDF化または印刷が可能な場合は、作成したEPS画像をリンク配置すればよいでしょう。リンク配置した画像を含むファイルをPDF形式、EPS形式などで保存すれば、フォント情報を保ったままTeX で作成した文書に挿入することが可能です。また、PDF形式で保存すればAdobe Reader などで通常どおり閲覧できます。 -->

<!-- この方法で数式を配置する場合は、C:\Program Files\Common Files\Adobe\Fonts\Reqrd\Baseに...\share\texmf\fonts\type1 をフォルダごとコピー(またはリンク)する必要があります。これを行うと、Illustrator の起動時に読み込むフォントリストが大きくなり、起動に時間がかかるようになるので注意してください。また、Illustrator のメニューから[編集]→[環境設定]→[ファイル・クリップボードの管理]とたどって[リンクされたEPS画像に低解像度の表示用画像(プレビュー)を使用]のチェックボックスを空欄にしておくと分かりやすいでしょう( [[TeXの数式をDTPソフトに>TeXの数式をDTPソフトに#hf9c85f7]] を参照)。 -->

<!-- 続いて、&TeX.js の1行目 -->
<!-- link = false;	//true→リンク配置 false→埋め込み配置 -->
<!-- を -->
<!-- link = true;	//true→リンク配置 false→埋め込み配置 -->
<!-- に書き換えてください。 -->
<!-- 埋め込み配置と同じ要領で操作すれば所望の数式がリンク配置されます。 -->
<!-- なお、リンクはC:\AI\Link\ のサブディレクトリを参照しています。 -->
<!-- リンク先のドキュメント名ごとに分類される仕様ですが、 -->
<!-- ドキュメント名は半角英数のみで構成したほうが無難です。 -->

<!-- リンクウィンドウ中の詳細メニューから[画像を埋め込み]を選択することで、 -->
<!-- リンク画像をドキュメント中に埋め込み配置することも可能です。 -->
<!-- ただし、このようにして埋め込んだ場合は、前述のように一部のフォントが置換される場合があります。埋め込まれた画像中のフォントは[文字]→[アウトラインを作成]でパスに変換できます。 -->

<!-- リンク配置や埋め込み配置に関する詳細は、[[Illustrator のリンク配置と埋め込み配置の違い:http://support.adobe.co.jp/faq/qadoc/AJ25.nsf/041584e8dbf36c09492569690008402c/0d1c8a5d4ac9e53549256e3600074edc?OpenDocument]] をご参照ください。 -->
