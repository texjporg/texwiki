---
title: "TeXworks/設定/Windows"
url: "/TeXworks/設定/Windows/"
date: 2012-07-13T02:57:05Z
pukiwiki: "TeXworks/設定/Windows"
---

# TeXworks/設定/Windows

[TeXworks](/TeXworks/) > [設定](</TeXworks/設定/>) > [Windows](</Microsoft Windows/>)

***

***

## タイプセットの設定 {#q50d2378}

### [TeX Live](</TeX Live/>) {#kaca20c0}

#### 設定前 {#n2341fff}

公式サイトで配布されている TeXworks は pdfLaTeX がデフォルトになっています．

upLaTeX (ptex2pdf), Latexmk, upLaTeXmk, LuaLaTeXmk を使ってタイプセットできるように設定します．

タイプセットの設定については [Common Workflows](https://github.com/TeXworks/texworks/wiki/AdvancedTypesettingTools#common-workflows) にも記述されているので参考にしてください．

$synctexoption, $fullname, $basename などの意味に関しては，[Defining new typesetting tools](https://github.com/TeXworks/texworks/wiki/AdvancedTypesettingTools#defining-new-typesetting-tools) を参照してください．<br>

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>TeXworksの設定</strong></span>　　　　　　　　　　　　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>🗙</strong></span>　\]<ins></span></ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　全体　\]\[　エディタ　\]\[　プレビュー　\]</ins></span><strong>\[　タイプセット　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　スクリプト　\]</ins></span><br>
　　　　TeXおよび関連プログラムのパス<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/go-up.png" alt="go up" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/go-down.png" alt="go down" width="25" height="25">\]</span><br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>

<br>

　　　　タイプセットの方法<br>
　　　　<span style="color:Black;background-color:#DAEAFF;"> pdfTeX　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span>　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/go-up.png" alt="go up" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/go-down.png" alt="go down" width="25" height="25">\]</span><br>
　　　　 pdfLaTeX　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#EEEEEE;">\[ 編集 \]</span><br>
　　　　 LuaTeX<br>
　　　　 LuaLaTeX<br>
　　　　 XeTeX<br>
　　　　 XeLaTeX<br>
　　　　 ConTeXt (LuaTeX)<br>
　　　　 ConTeXt (pdfTeX)<br>
　　　　 ConTeXt (XeTeX)<br>
　　　　 BibTeX<br>
　　　　 MakeIndex<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　　　デフォルト: <span style="color:Black;background-color:#EEEEEE;">\[ pdfLaTeX　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>

<br>

　　　コンソール出力を表示しない 　　<span style="color:Black;background-color:#EEEEEE;">\[ 自動で隠す　　　　　　　　　　　　　　▼\]</span><br>

***

#### upLaTeX (ptex2pdf) {#r7f9a2a4}

[ptex2pdf](/ptex2pdf/) を使って設定します．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>🗙</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>upLaTeX (ptex2pdf)</ins><br>
　　プログラム: <ins>ptex2pdf</ins><br>
　　引数:　　　　<ins>-u</ins><br>
　　　　　　　　　<ins>-l</ins><br>
　　　　　　　　　<ins>-ot</ins><br>
　　　　　　　　　<ins>$synctexoption -no-guess-input-enc -kanji=utf8</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### Latexmk {#u0fa8c19}

Latexmk で PDF ファイルを作成します．

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>🗙</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>Latexmk</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>$fullname</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### upLaTeXmk {#t6b9c629}

Latexmk で PDF ファイルを作成します．

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>🗙</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>upLaTeXmk</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$latex=q/uplatex %O -synctex=1 -kanji=utf8 -no-guess-input-enc %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/bibtexu %O %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/upmendex %O -o %D %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$dvipdf=q/dvipdfmx %O -o %D %S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdfdvi</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### LuaLaTeXmk {#o5201be5}

Latexmk で PDF ファイルを作成します．

タイプセットの方法の <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックします．

名前とプログラムを入力します．

<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-add.png" alt="list add" width="25" height="25">\]</span> をクリックして新しい引数を追加し，入力します． 

実行後、PDFを表示するにチェックをしてください．組み込みビューアを使用して PDF ファイルを表示します．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>🗙</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>LuaLaTeXmk</ins><br>
　　プログラム: <ins>latexmk</ins><br>
　　引数:　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$lualatex=q/lualatex %O -synctex=1 %S/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$bibtex=q/bibtexu %O %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/</ins><br>
　　　　　　　　　<ins>-e</ins><br>
　　　　　　　　　<ins>$makeindex=q/upmendex %O -o %D %S/</ins><br>
　　　　　　　　　<ins>-norc</ins><br>
　　　　　　　　　<ins>-gg</ins><br>
　　　　　　　　　<ins>-pdflua</ins><br>
　　　　　　　　　<ins>$fullname</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☑ 実行後、PDFを表示する<br>

***

#### 設定後 {#me50c549}

デフォルトを upLaTeX (ptex2pdf) または pdfupLaTeX に変更します．<br>
タイプセットのコンソール出力を確認したい場合は 「コンソール出力を表示しない」 に 『表示する』 を指定します．<br>

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>TeXworksの設定</strong></span>　　　　　　　　　　　　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>🗙</strong></span>　\]<ins></span></ins></span><br>

　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[　全体　\]\[　エディタ　\]\[　プレビュー　\]</ins></span><strong>\[　タイプセット　\]</strong><span style="color:Black;background-color:#EEEEEE;"><ins>\[　スクリプト　\]</ins></span><br>
　　　　TeXおよび関連プログラムのパス<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/go-up.png" alt="go up" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/go-down.png" alt="go down" width="25" height="25">\]</span><br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>

<br>

　　　　タイプセットの方法<br>
　　　　<span style="color:Black;background-color:#DAEAFF;"> upLaTeX (ptex2pdf)　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span>　　　 <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/go-up.png" alt="go up" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/go-down.png" alt="go down" width="25" height="25">\]</span><br>
　　　　 pdfTeX　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#EEEEEE;">\[ 編集 \]</span><br>
　　　　 pdfLaTeX<br>
　　　　 LuaTeX<br>
　　　　 LuaLaTeX<br>
　　　　 XeTeX<br>
　　　　 XeLaTeX<br>
　　　　 ConTeXt (LuaTeX)<br>
　　　　 ConTeXt (pdfTeX)<br>
　　　　 ConTeXt (XeTeX)<br>
　　　　 Latexmk<br>
　　　　 upLaTeXmk<br>
　　　　 LuaLaTeXmk<br>
　　　　 BibTeX<br>
　　　　 MakeIndex<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　　　デフォルト: <span style="color:Black;background-color:#EEEEEE;">\[ upLaTeX (ptex2pdf)　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>

<br>

　　　コンソール出力を表示しない 　　<span style="color:Black;background-color:#EEEEEE;">\[ 表示する　　　　　　　　　　　　　　　▼\]</span><br>

***

## [SumatraPDF](/SumatraPDF/) との連携 {#b23c23fc}

### pdfupLaTeXS {#u9e90942}

pdfuplatexS.bat を作成します．

***

- pdfuplatexS.bat

***

```
@echo off
ptex2pdf -u -l -ot "-synctex=1 -kanji=utf8 -no-guess-input-enc" %1 && ^
if %ERRORLEVEL% equ 0 (
tasklist /fi "IMAGENAME eq SumatraPDF.exe" /nh | ^
findstr "SumatraPDF.exe" > nul || ^
echo rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance "%~n1.pdf" | ^
cmd
)
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>🗙</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>pdfupLaTeXS</ins><br>
　　プログラム: <ins>pdfuplatexS.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### LuaLaTeXS {#m4152f1a}

lualatexS.bat を作成します．

***

- lualatexS.bat

***

```
@echo off
lualatex -synctex=1 %1 && ^
if %ERRORLEVEL% equ 0 (
tasklist /fi "IMAGENAME eq SumatraPDF.exe" /nh | ^
findstr "SumatraPDF.exe" > nul || ^
echo rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance "%~n1.pdf" | ^
cmd
)
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>🗙</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>LuaLaTeXS</ins><br>
　　プログラム: <ins>lualatexS.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### inverse search {#kfe751af}

TeX コマンドのオプションに -synctex=1 を追加します．

SumatraPDF の \[☰\]-\[設定(S)\]-\[オプション(O)...\] の逆順検索コマンドラインの設定に以下の記述を設定します．<br>

```
"C:\texlive\2018\tlpkg\texworks\texworks.exe" --position=%l "%f"
```

&#x2d;-position オプションはファイル名よりも先に指定しなければうまくいきません．

## Adobe Acrobat Reader との連携 {#jad25a78}

### pdfupLaTeXA {#p7c5112a}

pdfuplatexA.bat を作成します．

***

- pdfuplatexA.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq Acrobat.exe" /nh | ^
findstr "Acrobat.exe" > nul && ^
pdfopen --file "%~n1.pdf" && ^
pdfclose --file "%~n1.pdf" & ^
ptex2pdf -u -l -ot "-synctex=1 -kanji=utf8 -no-guess-input-enc" %1 && ^
powershell -Command "& {$pdf = """%~n1.pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)[1]; pdfopen --file $pdf --page $page}"
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>🗙</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>pdfupLaTeXA</ins><br>
　　プログラム: <ins>pdfuplatexA.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***

### LuaLaTeXA {#w51d9af4}

lualatexA.bat を作成します．

***

- lualatexA.bat

***

```
@echo off
tasklist /fi "IMAGENAME eq Acrobat.exe" /nh | ^
findstr "Acrobat.exe" > nul && ^
pdfopen --file "%~n1.pdf" && ^
pdfclose --file "%~n1.pdf" & ^
lualatex -synctex=1 %1 && ^
powershell -Command "& {$pdf = """%~n1.pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)[1]; pdfopen --file $pdf --page $page}"
```

***

実行後、PDFを表示するのチェックをはずします．

***

<span style="color:#00ADDD;background-color:#00ADDD;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>タイプセットの方法を設定する</strong></span>　　　　　　　　　　<span style="color:#00ADDD;background-color:#00ADDD;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>🗙</strong></span>　\]<ins></span></ins></span><br>

<br>

　　名前:　　　　<ins>LuaLaTeXA</ins><br>
　　プログラム: <ins>lualatexA.bat</ins><br>
　　引数:　　　　<ins>$basename</ins><br>

<br>

<br>

<br>

<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-add.png" alt="list add" width="25" height="25">\]</span> <span style="color:Black;background-color:#EEEEEE;">\[<img src="https://raw.githubusercontent.com/TeXworks/texworks/refs/heads/main/res/icons/tango-texworks/actions/32x32/list-remove.png" alt="list remove" width="25" height="25">\]</span><br>
　　☐ 実行後、PDFを表示する<br>

***
