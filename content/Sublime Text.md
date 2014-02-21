---
title: "Sublime Text"
url: "/Sublime Text/"
date: 2012-06-26T20:10:04Z
pukiwiki: "Sublime Text"
---

# Sublime Text

## [Sublime Text](http://www.sublimetext.com/) {#pefc7cc2}

<img src="http://upload.wikimedia.org/wikipedia/en/4/4c/Sublime_Text_Logo.png" alt="Sublime Text" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## Sublime Text とは {#w93773a9}

Sublime Text はカスタマイズ性に優れたモダンなテキストエディタです． (シェアウェア)

- [Sublime Text](http://www.sublimetext.com/)
- [Package Control - the Sublime Text package manager](https://sublime.wbond.net/)

### Sublime Text 3 {#o04f9cc2}

- [Sublime Text 3](http://www.sublimetext.com/3)
- [Sublime Text 3 - Dev Builds](http://www.sublimetext.com/3dev)

### 動作環境 {#ec9465b5}

Windows, OS X, Linux

## 日本語に関するプラグイン {#fa7e32d3}

### 日本語入力のインライン変換対応 {#cde09531}

#### Windows {#nddbaed6}

- [IMESupport for Sublime Text](https://github.com/chikatoike/IMESupport)
- [「IMESupport」の検索結果一覧 - ゆり日記](http://d.hatena.ne.jp/chikatoike/archive?word=IMESupport)
- [WindowsのIMEでインライン変換を正しく表示できるようにしてみた](http://qiita.com/items/5ccbe63d36009680e0e6)
- \[[MAC\]\[WIN\]SUBLIME TEXT のススメと最初にすべき日本語入力環境の改善](http://roguer.info/2012/11/01/6049/)

#### Linux {#bf9812ef}

- [SublimeIBus](https://github.com/chikatoike/SublimeIBus)

### Shift_JIS, EUC-JP 対応 {#bc9dcabf}

- [ConvertToUTF8](https://github.com/seanliang/ConvertToUTF8)

### メニューの日本語化 {#p0f8c581}

- [sublimetext_japanize](https://github.com/kik0220/sublimetext_japanize)

## [LaTeXTools (LaTeX Plugin for Sublime Text)](https://github.com/SublimeText/LaTeXTools) <a id="latextools"></a> {#e60d4c0f}

- [SublimeText/LaTeXTools · GitHub](https://github.com/SublimeText/LaTeXTools)
- [latex | Tech, TeX and Theory](http://tekonomist.wordpress.com/tag/latex/)

### Windows {#m3e22b6d}

- [Sublime Text3におけるLaTeXコンパイル時のゴミファイルの処理](http://hagetak.hatenablog.com/entry/2014/01/05/180432)
- [Windows + sublime text2 + pLatexの環境設定](http://yshtak.tumblr.com/post/65763928976/windows-sublime-text2-platex)
- [Sublime Text2でLaTeX](http://yanoshi.hatenablog.jp/entry/2013/09/17/190954)
- [Sublime Text 2 で LaTeX on Windows](http://ichiro-maruta.blogspot.jp/2013/01/sublime-text-2-latex.html)

#### ビルドコマンドの設定 {#jbbbbc43}

メニューの \[Preferences\]-\[Browse Packages...\] を選択します．<br>
LaTeXTools フォルダーの LaTeX.sublime-build を編集します．<br>
[LaTeX.sublime-build の 50行目から 105行目](https://github.com/SublimeText/LaTeXTools/blob/master/LaTeX.sublime-build#L50-105)あたりで設定されている
Windows での cmd (コマンド) と path (パス) は

```
			// *** BEGIN MikTeX 2009 ***
```

から

```
			// *** END MikTeX 2009 ***
```

で囲まれている以下の設定が初期設定になっています．<br>

```
			"cmd": ["texify", 
					"-b", "-p",
					"--tex-option=\"--synctex=1\""
			],
			
			"path": "",
```

これをコメントアウトします．<br>

```
			// "cmd": ["texify", 
			// 		"-b", "-p",
			// 		"--tex-option=\"--synctex=1\""
			// ],
			
			// "path": "",
```

その下にある

```
			// *** BEGIN TeXLive 2011 ***
```

から

```
			// *** END TeXLive 2011 ***
```

で囲まれている以下の設定<br>

```
			// "cmd": ["latexmk", "-cd",
			// 	"-e", "\\$pdflatex = '%E %O -interaction=nonstopmode -synctex=1 %S'",
			//	//"-silent",
			// 	"-f", "-pdf"],

			// "path": "C:\\texlive\\2011\\bin\\win32;$PATH",
```

の下に cmd (コマンド) と path (パス) の設定を追加します．<br>
■ Latexmk-pdfupLaTeX の場合<br>

```
			"cmd": ["latexmk", "-cd",
				"-e", "\\$latex = 'uplatex %O -no-guess-input-enc -kanji=utf8 -interaction=nonstopmode -synctex=1 %S'",
				"-e", "\\$bibtex = 'upbibtex %O %B'",
				"-e", "\\$biber = 'biber %O --bblencoding=utf8 -u -U --output_safechars %B'",
				"-e", "\\$makeindex = 'makeindex %O -o %D %S'",
				"-e", "\\$dvipdf = 'dvipdfmx %O -o %D %S'",
				//"-silent",
				"-f", "-norc", "-gg", "-pdfdvi"],

			"path": "C:\\texlive\\2013\\bin\\win32;$PATH",
```

■ Latexmk-pdfupLaTeX2 の場合<br>

```
			"cmd": ["latexmk", "-cd",
				"-e", "\\$latex = 'uplatex %O -no-guess-input-enc -kanji=utf8 -interaction=nonstopmode -synctex=1 %S'",
				"-e", "\\$bibtex = 'upbibtex %O %B'",
				"-e", "\\$biber = 'biber %O --bblencoding=utf8 -u -U --output_safechars %B'",
				"-e", "\\$makeindex = 'makeindex %O -o %D %S'",
				"-e", "\\$dvips = 'dvips %O -z -f %S | convbkmk -u > %D'",
				"-e", "\\$ps2pdf = 'ps2pdf.bat %O %S %D'",
				//"-silent",
				"-f", "-norc", "-gg", "-pdfps"],

			"path": "C:\\texlive\\2013\\bin\\win32;$PATH",
```

■ Latexmk-pdfLaTeX の場合<br>

```
			"cmd": ["latexmk", "-cd",
				"-e", "\\$pdflatex = 'pdflatex %O -interaction=nonstopmode -synctex=1 %S'",
				"-e", "\\$bibtex = 'bibtex %O %B'",
				"-e", "\\$biber = 'biber %O --bblencoding=utf8 -u -U --output_safechars %B'",
				"-e", "\\$makeindex = 'makeindex %O -o %D %S'",
				//"-silent",
				"-f", "-norc", "-gg", "-pdf"],

			"path": "C:\\texlive\\2013\\bin\\win32;$PATH",
```

■ Latexmk-LuaLaTeX の場合<br>

```
			"cmd": ["latexmk", "-cd",
				"-e", "\\$pdflatex = 'lualatex %O -interaction=nonstopmode -synctex=1 %S'",
				"-e", "\\$bibtex = 'bibtexu %O %B'",
				"-e", "\\$biber = 'biber %O --bblencoding=utf8 -u -U --output_safechars %B'",
				"-e", "\\$makeindex = 'makeindex %O -o %D %S'",
				//"-silent",
				"-f", "-norc", "-gg", "-pdf"],

			"path": "C:\\texlive\\2013\\bin\\win32;$PATH",
```

■ Latexmk-LuaJITLaTeX の場合<br>

```
			"cmd": ["latexmk", "-cd",
				"-e", "\\$pdflatex = 'luajitlatex %O -interaction=nonstopmode -synctex=1 %S'",
				"-e", "\\$bibtex = 'bibtexu %O %B'",
				"-e", "\\$biber = 'biber %O --bblencoding=utf8 -u -U --output_safechars %B'",
				"-e", "\\$makeindex = 'makeindex %O -o %D %S'",
				//"-silent",
				"-f", "-norc", "-gg", "-pdf"],

			"path": "C:\\texlive\\2013\\bin\\win32;$PATH",
```

■ Latexmk-XeLaTeX の場合<br>

```
			"cmd": ["latexmk", "-cd",
				"-e", "\\$pdflatex = 'xelatex %O -interaction=nonstopmode -synctex=1 %S'",
				"-e", "\\$bibtex = 'bibtexu %O %B'",
				"-e", "\\$biber = 'biber %O --bblencoding=utf8 -u -U --output_safechars %B'",
				"-e", "\\$makeindex = 'makeindex %O -o %D %S'",
				//"-silent",
				"-f", "-norc", "-gg", "-pdf"],

			"path": "C:\\texlive\\2013\\bin\\win32;$PATH",
```

#### SumatraPDF の設定 {#xdcd22a2}

メニューの \[Preferences\]-\[Browse Packages...\] を選択します．<br>
LaTeXTools フォルダーの viewPDF.py を編集します．<br>
[viewPDF.py の 50行目](https://github.com/SublimeText/LaTeXTools/blob/master/viewPDF.py#L50)あたりの

```
			viewercmd = ["SumatraPDF", "-reuse-instance"]
```

を以下のように修正します．

■ SumatraPDF.exe を C:\Program Files (x86)\SumatraPDF にインストールした場合<br>

```
			viewercmd = [r"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe", "-reuse-instance"]
```

■ SumatraPDF.exe を C:\Program Files\SumatraPDF にインストールした場合<br>

```
			viewercmd = [r"C:\Program Files\SumatraPDF\SumatraPDF.exe", "-reuse-instance"]
```

LaTeXTools フォルダーの jumpToPDF.py を編集します．<br>
[jumpToPDF.py の 96行目](https://github.com/SublimeText/LaTeXTools/blob/master/jumpToPDF.py#L96)あたりの

```
				subprocess.Popen(["SumatraPDF.exe","-reuse-instance","-forward-search", srcfile, str(line), pdffile])
```

を以下のように修正します．

■ SumatraPDF.exe を C:\Program Files (x86)\SumatraPDF にインストールした場合<br>

```
				subprocess.Popen([r"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe","-reuse-instance","-forward-search", srcfile, str(line), pdffile])
```

■ SumatraPDF.exe を C:\Program Files\SumatraPDF にインストールした場合<br>

```
				subprocess.Popen([r"C:\Program Files\SumatraPDF\SumatraPDF.exe","-reuse-instance","-forward-search", srcfile, str(line), pdffile])
```

#### 使い方 {#r3b484f1}

TeX ファイルを編集して Ctrl+B をタイプするとビルドが開始されて PDF ファイルが作成されます．<br>
PDF ファイルが作成されると SumatraPDF で PDF ファイルが表示されて forward search が実行されます．<br>

### OS X {#c2e22368}

- [Sublime Text2で書きたくてTeX環境（@Mac）整えようとしたら詰んだ](http://kmdrism.com/2013/texkowai/)
- [Mac Sublime Text2で Tex 初歩の導入から　OS X Mavericks](http://yusuke0.hatenablog.com/entry/2013/10/29/230314)
- [LaTeX on Sublime Text 2](http://izumin.hateblo.jp/entry/2013/05/09/230731)
- [sublime text 2でTeXできるようにしたときのメモ](http://myy.hatenablog.com/entry/2013/04/12/203612)
- [Sublime Text2 で(p)LaTeX文書を扱う](http://wiki.livedoor.jp/fuhmi/d/TeX%a4%cb%b4%d8%a4%b9%a4%eb%b3%d0%a4%a8%bd%f1%a4%ad)
- [Making your first PDF with LaTeX and Sublime Text 2 for Mac](http://economistry.com/2013/01/installing-and-using-latex-for-mac/)

### Linux {#x47ef3df}

- [Sublime Text 2 で LaTeX するまでのメモ](http://skalldan.wordpress.com/2012/11/23/sublime-text-2-%E3%81%A7-latex-%E3%81%99%E3%82%8B%E3%81%BE%E3%81%A7%E3%81%AE%E3%83%A1%E3%83%A2/)

## SumatraPDF との連携 {#hf07fc30}

### forward search {#f7ecc231}

LaTeXTools を使用している場合は Ctrl+L をタイプしたあとで J をタイプすると forward search が実行されます．<br>

### inverse search {#u2a5078e}

```
"C:\Program Files\Sublime Text 3\sublime_text.exe" "%f:%l"
```

## Skim との連携 {#a71db317}

### inverse search {#ud969bd6}

PDF-TeX 同期サポート:
: &nbsp;

初期値:
: Sublime Text 2 または Custom

コマンド:
: /Applications/Sublime Text.app/Contents/SharedSupport/bin/subl

引数:
: "%file":%line

## 関連リンク {#p3fe3a8a}

- [SublimeText Vim Emacs プラグイン比較表](https://github.com/chikatoike/SublimeTextWiki/wiki/SublimeText-Vim-Emacs-%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%E6%AF%94%E8%BC%83%E8%A1%A8)

### Windows {#m51226c8}

- [Sublime Text 3 導入手順 (Windows7)](http://nanoway.net/pc/sublime-text-3)

### OS X {#d13b8a86}

- [Sublime Text 2のTeXビルドシステム](http://www35.atpages.jp/shocker/memoRANDOM/Misc/Misc_index.php)
- [Sublime Text2を使ってTexを書いてコンパイルまでする。](https://gist.github.com/4482213)
- [Soda Theme](https://github.com/buymeasoda/soda-theme)

### Linux {#r2805e10}

- [Sublime Text 2をLinux MintやUbuntuでPPAからインストールする](http://blog.lindwurm.biz/2013/04/how-to-install-sublime.html)
- [Sublime Text 2のプラグインOpen With Vimを書いてみた](http://d.hatena.ne.jp/itiut/20111229/1325138744)
