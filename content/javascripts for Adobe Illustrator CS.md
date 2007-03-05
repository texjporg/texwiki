---
title: "javascripts for Adobe Illustrator CS"
url: "/javascripts for Adobe Illustrator CS/"
date: 2007-01-13T09:22:06Z
pukiwiki: "javascripts for Adobe Illustrator CS"
---

# javascripts for Adobe Illustrator CS

<!-- http://oku.edu.mie-u.ac.jp/~okumura/texfaq/dtp/javascripts.html -->

## はじめに {#ae063b79}

Illustrator CS のドキュメント中に、楽にLaTeX の数式を配置するためのスクリプトです。
[qa:27936](https://okumuralab.org/~okumura/texfaq/qa/27936.html) の問題を回避するため、冗長になっています。
Illustrator CS のほかに、LaTeX とdvips、(一部のフォントを含む数式を埋め込み配置する場合は)Ghostscript が必要です。当然ですが、Illustrator で処理が完結しているわけではなく、Illustrator は外部ファイルの書き換えや実行、配置を行う命令を出しているだけです。

Illustrator CS windows 版 (Windows XP SP2) で動作を確認していますが、Illustrator のjavascript はバージョン毎の互換性が悪いらしく、またその実行環境に影響を受けることさえあるらしいので、動かなければ適当に直してください。

Illustrator 上でのjavascript に関するマニュアルはインストールCD中にあります(CSの場合、Adobe テクニカル情報/Illustrator CS/Scripting/Documentation)。

### 参考ページ {#o88510e0}

[TeXの数式をDTPソフトに](</TeXの数式をDTPソフトに/#hf9c85f7>)

[Illustrator CS自動化作戦](http://www.openspc2.org/book/IllustratorCS/)

[qa:27936](https://okumuralab.org/~okumura/texfaq/qa/27936.html)

[Illustrator のリンク配置と埋め込み配置の違い](http://support.adobe.co.jp/faq/qadoc/AJ25.nsf/041584e8dbf36c09492569690008402c/0d1c8a5d4ac9e53549256e3600074edc?OpenDocument)

## 準備 {#d06797b4}

C:\AI\というフォルダを作ります。別の場所が良い方は適宜読み替えてください(パスは半角英数のみ)。

テキストドキュメントに次のように記述して、"outline.bat" という名前で"C:\AI\\" に保存します。

```
c:
cd c:\AI\
latex eq
dvips -Ppdf -E eq -o eq.eps
gswin32c -q -sDEVICE=epswrite -sOutputFile=outline.eps -r9600 -dNOPAUSE -dBATCH -dSAFER -dEPSCrop eq.eps
```

テキストドキュメントに次のように記述して、"bat.ini" という名前で"C:\AI\\" に保存します(埋め込み配置のみでよいならば不要)。

```
c:
cd c:\AI\
latex eq
dvips -Ppdf -E eq -o Link\<r>.eps
```

テキストドキュメントに次のように記述して、"eq.ini" という名前で"C:\AI\\" に保存します。これは一例に過ぎません。"&lt;r>" の部分をスクリプトで置き換えて使いますので、その他の部分は適当に編集してください。

```
\documentclass[12pt]{article}
\pagestyle{empty}
\usepackage{amsmath,amssymb,bm}
\begin{document}
\begin{align*}
<r>
\end{align*}
\end{document}
```

テキストドキュメントに次のように記述して、"&amp;TeX.js" という名前で"C:\Program Files\Adobe\Illustrator CS\プリセット\スクリプト" に保存します。なお、"C:\Program Files..." はIllustrator をデフォルトの設定でインストールした場合です。

```
link = false;	//true→リンク配置 false→埋め込み配置
AI = "/C/AI/";
	
chr_f = app.activeDocument.name.split(".");
docName = escape(chr_f[0]).replace(/%/g,"");
saveDir = ""+AI+"Link/"+docName+"/";
folderObj = new Folder(saveDir) ;
if (!folderObj.exists && link) folderObj.create();
selectObj = app.selection;
selectLnt = selectObj.length;

ctr = 0;
for (i=0;i<selectLnt;i++)
{	
	if(link)
	{	
		numOfFiles = folderObj.getFiles("*.eps").length;
		if (numOfFiles < 10) numOfFiles = "000"+numOfFiles+"";
		else if (numOfFiles < 100) numOfFiles = "00"+numOfFiles+"";
		else if (numOfFiles < 1000) numOfFiles = "0"+numOfFiles+"";
	}
	else numOfFiles = 0;
	
	if (selectObj[i].textRange == undefined) editflag = false;
	else
	{
		ctr += 1;
		equation = selectObj[i].textRange.contents;
		x = selectObj[i].left;
		y = selectObj[i].top;
		w = selectObj[i].width;
		h = selectObj[i].height;
		if (equation.indexOf("%") == equation.length - 1)
		{	
			d = 0;
			dy = -h-5;
		}
		else
		{
			d = 1;
			dy = -h/2;
			selectObj[i].remove();
		}
		editflag = ReplaceTextDoc(""+AI+"/eq.ini",""+AI+"eq.tex","<r>",equation);
	}
		
	if (link && editflag && ReplaceTextDoc(""+AI+"bat.ini",""+AI+"nooutline.bat","<r>",""+docName+"\\"+numOfFiles+"")) exeflag = Exe(""+AI+"nooutline.bat");
	else if (!link && editflag) exeflag = Exe(""+AI+"outline.bat");
	else exeflag = false;
	
	if (exeflag && confirm("描画しますか？")) ImportImg(""+saveDir+""+numOfFiles+".eps",""+AI+"outline.eps",x+w/2,y+dy,d,link);
}
if (ctr == 0) alert("1つ以上のテキストオブジェクトを選択してください");
	
function ReplaceTextDoc(readfilepath,writefilepath,regexp,newString)
{
	readFileObj = new File(readfilepath);
	rflag = readFileObj.open ("r");
	if (!rflag)
	{
		alert(""+readfilepath+"を読めません");
		return false;
	}
	readtext = readFileObj.read();
	readFileObj.close();
	
	replacedtext = readtext.replace(regexp,newString);
	writeFileObj = new File (writefilepath);
	wflag = writeFileObj.open ("w");
	if (!wflag)
	{
		alert(""+writefilepath+"に書き込めません");
		return false;
	}
	writeFileObj.writeln(replacedtext);
	writeFileObj.close();
	return true;
}
	
function Exe(filepath)
{
	fileObj = new File(filepath);
	if (!fileObj.exists)
	{
		alert(""+filepath+"が見つかりません");
		return false;
	}
	fileObj.execute();
	return true;
}
	
function ImportImg(linkfilepath,embedfilepath,x,y,d,flag)
{
	if(flag)
	{
		fileObj = new File (linkfilepath);
		if (!fileObj.exists)
		{
			alert(""+linkfilepath+"が見つかりません。")
			return false;
		}
		array = new Array();
		array = linkfilepath.split("/");
		filename = array[array.length - 1].replace(".eps","");
		placedImg = activeDocument.activeLayer.placedItems.add() ;
		placedImg.file = fileObj;
		placedImg.name = filename;
	}
	else
	{
		fileObj = new File (embedfilepath);
		if (!fileObj.exists)
		{
			alert(""+embedfilepath+"が見つかりません。")
			return false;
		}
		placedImg = app.activeDocument.activeLayer.groupItems.createFromFile(fileObj);
	}
	pw = placedImg.width;
	ph = placedImg.height;
	placedImg.left = x - pw/2 ;
	placedImg.top = y + d*ph/2 ;
	return true ;
}
```

最後に、C:\AI\Link\ というフォルダを作ってください(これも埋め込み配置のみで良いならば不要)。

## 埋め込み配置 {#l35eb979}

Illustrator を起動してください。\[ファイル\]→\[スクリプト\]とたどれば"TeX" があるはずです。テキストツールを使って、例えば次の内容のテキストオブジェクトを作ります。

```
&\int_{-\infty}^{\infty}\!\!\!\delta(x-\alpha)f(x)\mathrm{d}x=f(\alpha)\\
&A = \begin{pmatrix}
a_{11} & \ldots & a_{1n} \\
\vdots & \ddots & \vdots \\
a_{m1} & \ldots & a_{mn}
\end{pmatrix}
```

このテキストのフレームを選択した状態で、\[ファイル\]→\[スクリプト\]→\[TeX\]を選択し、cmd.exe が終了した後、"描画しますか?" という確認メッセージに「はい」と答えれば、テキストオブジェクトが数式に置換されます。なお、Windows なら、\[Alt+F\]→\[R\]→\[T\]でスクリプトを実行することも可能です。

置換したくない場合は、数式の最後に"%" を付けてください( 上の例では"...\end{pmatrix}" を"...\end{pmatrix}%" とする )。テキストの真下に数式が配置されます。また、複数のテキストを選択した状態でスクリプトを実行すれば、選択されているすべてのテキストに対して順に処理を行います。

W32TeX およびGhostscript がインストールされている通常の環境であれば、
Illustrator に特別な設定をしなくとも数式が確認できるはずです。
上記のスクリプト( とバッチファイル )は、デフォルトでは、Ghostscript のepswrite で数式のアウトラインを書き出し、得られたクローズドパスを埋め込み配置するように設定されています。これは、フォント関連の問題を回避したい場合(例えばA0サイズのポスターの印刷を外注)に有効です。特にIllustrator CS では、一部のフォントだけがＭＳ　ゴシックに強制的に置き換わるという問題( [qa:27936](https://okumuralab.org/~okumura/texfaq/qa/27936.html)を参照。) があり、Illustrator 上で何らかの編集を行う上ではアウトライン化しておくほうが安全だと思われます。

## リンク配置 {#x5d180c8}

数式に対して拡大縮小や回転といった単純な編集だけで十分で、自分の環境でPDF化または印刷が可能な場合は、作成したEPS画像をリンク配置すればよいでしょう。リンク配置した画像を含むファイルをPDF形式、EPS形式などで保存すれば、フォント情報を保ったままTeX で作成した文書に挿入することが可能です。また、PDF形式で保存すればAdobe Reader などで通常どおり閲覧できます。

この方法で数式を配置する場合は、C:\Program Files\Common Files\Adobe\Fonts\Reqrd\Baseに...\share\texmf\fonts\type1 をフォルダごとコピー(またはリンク)する必要があります。これを行うと、Illustrator の起動時に読み込むフォントリストが大きくなり、起動に時間がかかるようになるので注意してください。また、Illustrator のメニューから\[編集\]→\[環境設定\]→\[ファイル・クリップボードの管理\]とたどって\[リンクされたEPS画像に低解像度の表示用画像(プレビュー)を使用\]のチェックボックスを空欄にしておくと分かりやすいでしょう( [TeXの数式をDTPソフトに](</TeXの数式をDTPソフトに/#hf9c85f7>) を参照)。

続いて、&amp;TeX.js の1行目

```
link = false;	//true→リンク配置 false→埋め込み配置
```

を

```
link = true;	//true→リンク配置 false→埋め込み配置
```

に書き換えてください。
埋め込み配置と同じ要領で操作すれば所望の数式がリンク配置されます。
なお、リンクはC:\AI\Link\ のサブディレクトリを参照しています。
リンク先のドキュメント名ごとに分類される仕様ですが、
ドキュメント名は半角英数のみで構成したほうが無難です。

リンクウィンドウ中の詳細メニューから\[画像を埋め込み\]を選択することで、
リンク画像をドキュメント中に埋め込み配置することも可能です。
ただし、このようにして埋め込んだ場合は、前述のように一部のフォントが置換される場合があります。埋め込まれた画像中のフォントは\[文字\]→\[アウトラインを作成\]でパスに変換できます。

リンク配置や埋め込み配置に関する詳細は、[Illustrator のリンク配置と埋め込み配置の違い](http://support.adobe.co.jp/faq/qadoc/AJ25.nsf/041584e8dbf36c09492569690008402c/0d1c8a5d4ac9e53549256e3600074edc?OpenDocument) をご参照ください。
