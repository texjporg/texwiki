---
title: "NppExec"
url: "/NppExec/"
date: 2013-01-21T00:14:03Z
pukiwiki: "NppExec"
---

# NppExec

[Notepad++](/Notepad++/) > NppExec

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## [NppExec](http://sourceforge.net/projects/npp-plugins/files/NppExec/) → 問題が発生する場合は [jN](/jN/) または [Python Script](</Python Script/>) を使用する {#n297fed5}

NppExec を使うと LaTeX 環境を簡単に作ることができます．<br>
\[プラグイン\]-\[Plugin Manager\]-\[Show Plugin Manager\] で NppExec を選択してインストールできます．<br>
\[プラグイン\]-\[NppExec\]-\[Show Console Dialog\] にチェックをいれた場合は，NPP_CONSOLE 1 の処理は書かなくても OK です．<br>
\[プラグイン\]-\[NppExec\]-\[Follow $(CURRENT_DIRECTORY)\] にチェックをいれた場合は，cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; の処理は書かなくても OK です．<br>
\[プラグイン\]-\[NppExec\]-\[Execute...\] または F6 キーで設定および実行ができます．<br>
コマンドを設定して名前を付けて保存します．<br>
設定した後で \[プラグイン\]-\[NppExec\]-\[Advanced Options...\] の Menu item から設定した項目を登録します．<br>
\[設定\]-\[ショートカット管理...\]-\[Plugin commands\] から登録した項目のショートカットの設定をします．<br>

- [NppExec (コマンドの実行) - Notepad++のプラグイン解説](http://www.crystal-creation.com/software/technical-information/tool/editor/notepad-plus/plug-in/nppexec/)

### License {#b6f13e16}

GPLv3

### pdfupLaTeX {#i86b16de}

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; ptex2pdf -u -l -ot "-synctex=1 -no-guess-input-enc -kanji=utf8 -sjis-terminal" "$(NAME_PART)"<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">pdfupLaTeX</span>　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</ins><br>

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　<span style="color:Black;"><strong>Shortcut</strong></span>　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[<span style="color:White;"><strong>×</strong></span>\]<ins></span></ins></span><br>

<br>

　　　　　　Name :　<ins>pdfupLaTeX</ins><br>
　　　☑CTRL<br>
　　　　　　　　　　+ ☐SHIFT　　+　　<span style="color:Black;background-color:#EEEEEE;">\[J　　　　　　　　　<strong>ᐯ</strong>\]</span><br>
　　　☑ALT<br>

<br>

　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[　　　OK　　　\]</span>　　　　 <span style="color:Black;background-color:#EEEEEE;">\[　　Cancel　　\]</span><br>

<br>

***

### pdfupLaTeX2 {#k41459c9}

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; uplatex -synctex=1 -no-guess-input-enc -kanji=utf8 -sjis-terminal "$(NAME_PART)" &amp;&amp; dvips -Ppdf -z -f "$(NAME_PART).dvi" | convbkmk -u > "$(NAME_PART).ps" &amp;&amp; ps2pdf.exe "$(NAME_PART).ps"<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">pdfupLaTeX2</span>　　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</ins><br>

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　<span style="color:Black;"><strong>Shortcut</strong></span>　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[<span style="color:White;"><strong>×</strong></span>\]<ins></span></ins></span><br>

<br>

　　　　　　Name :　<ins>pdfupLaTeX2</ins><br>
　　　☑CTRL<br>
　　　　　　　　　　+ ☐SHIFT　　+　　<span style="color:Black;background-color:#EEEEEE;">\[K　　　　　　　　　<strong>ᐯ</strong>\]</span><br>
　　　☑ALT<br>

<br>

　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[　　　OK　　　\]</span>　　　　 <span style="color:Black;background-color:#EEEEEE;">\[　　Cancel　　\]</span><br>

<br>

***

### pLaTeX-ng {#u5967a24}

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; platex-ng -synctex=1 "$(NAME_PART)"<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">pLaTeX-ng</span>　　　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</ins><br>

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　<span style="color:Black;"><strong>Shortcut</strong></span>　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[<span style="color:White;"><strong>×</strong></span>\]<ins></span></ins></span><br>

<br>

　　　　　　Name :　<ins>pLaTeX-ng</ins><br>
　　　☑CTRL<br>
　　　　　　　　　　+ ☐SHIFT　　+　　<span style="color:Black;background-color:#EEEEEE;">\[N　　　　　　　　　<strong>ᐯ</strong>\]</span><br>
　　　☑ALT<br>

<br>

　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[　　　OK　　　\]</span>　　　　 <span style="color:Black;background-color:#EEEEEE;">\[　　Cancel　　\]</span><br>

<br>

***

### pdfLaTeX {#b792f14c}

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; pdflatex -synctex=1 "$(NAME_PART)"<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">pdfLaTeX</span>　　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</ins><br>

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　<span style="color:Black;"><strong>Shortcut</strong></span>　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[<span style="color:White;"><strong>×</strong></span>\]<ins></span></ins></span><br>

<br>

　　　　　　Name :　<ins>pdfLaTeX</ins><br>
　　　☐CTRL<br>
　　　　　　　　　　+ ☑SHIFT　　+　　<span style="color:Black;background-color:#EEEEEE;">\[H　　　　　　　　　<strong>ᐯ</strong>\]</span><br>
　　　☑ALT<br>

<br>

　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[　　　OK　　　\]</span>　　　　 <span style="color:Black;background-color:#EEEEEE;">\[　　Cancel　　\]</span><br>

<br>

***

### LuaLaTeX {#fa30dbb3}

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; lualatex -synctex=1 "$(NAME_PART)"<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">LuaLaTeX</span>　　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</ins><br>

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　<span style="color:Black;"><strong>Shortcut</strong></span>　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[<span style="color:White;"><strong>×</strong></span>\]<ins></span></ins></span><br>

<br>

　　　　　　Name :　<ins>LuaLaTeX</ins><br>
　　　☐CTRL<br>
　　　　　　　　　　+ ☑SHIFT　　+　　<span style="color:Black;background-color:#EEEEEE;">\[J　　　　　　　　　<strong>ᐯ</strong>\]</span><br>
　　　☑ALT<br>

<br>

　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[　　　OK　　　\]</span>　　　　 <span style="color:Black;background-color:#EEEEEE;">\[　　Cancel　　\]</span><br>

<br>

***

### LuaJITLaTeX {#r054d32d}

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; luajitlatex -synctex=1 "$(NAME_PART)"<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">LuaJITLaTeX</span>　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</ins><br>

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　<span style="color:Black;"><strong>Shortcut</strong></span>　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[<span style="color:White;"><strong>×</strong></span>\]<ins></span></ins></span><br>

<br>

　　　　　　Name :　<ins>LuaJITLaTeX</ins><br>
　　　☐CTRL<br>
　　　　　　　　　　+ ☑SHIFT　　+　　<span style="color:Black;background-color:#EEEEEE;">\[K　　　　　　　　　<strong>ᐯ</strong>\]</span><br>
　　　☑ALT<br>

<br>

　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[　　　OK　　　\]</span>　　　　 <span style="color:Black;background-color:#EEEEEE;">\[　　Cancel　　\]</span><br>

<br>

***

### XeLaTeX {#v5239682}

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; xelatex -synctex=1 "$(NAME_PART)"<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">XeLaTeX</span>　　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</ins><br>

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　<span style="color:Black;"><strong>Shortcut</strong></span>　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[<span style="color:White;"><strong>×</strong></span>\]<ins></span></ins></span><br>

<br>

　　　　　　Name :　<ins>XeLaTeX</ins><br>
　　　☐CTRL<br>
　　　　　　　　　　+ ☑SHIFT　　+　　<span style="color:Black;background-color:#EEEEEE;">\[I　　　　　　　　　<strong>ᐯ</strong>\]</span><br>
　　　☑ALT<br>

<br>

　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[　　　OK　　　\]</span>　　　　 <span style="color:Black;background-color:#EEEEEE;">\[　　Cancel　　\]</span><br>

<br>

***

## SumatraPDF との連携 {#jbc79e5b}

### forward and inverse search (SumatraPDF を前面に表示したい場合) {#qbc5204b}

#### SumatraPDF {#ld44000d}

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; set CURRENT_LINE=$(CURRENT_LINE) &amp;&amp; set /a CURRENT_LINE=CURRENT_LINE+1 &amp;&amp; echo rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance "$(NAME_PART).pdf" -inverse-search "\\"$(#0)\\" \\"%f\\" -n%l -c%c" -forward-search "$(FILE_NAME)" %CURRENT_LINE% | cmd<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">SumatraPDF</span>　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</ins><br>

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　<span style="color:Black;"><strong>Shortcut</strong></span>　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[<span style="color:White;"><strong>×</strong></span>\]<ins></span></ins></span><br>

<br>

　　　　　　Name :　<ins>SumatraPDF</ins><br>
　　　☑CTRL<br>
　　　　　　　　　　+ ☐SHIFT　　+　　<span style="color:Black;background-color:#EEEEEE;">\[O　　　　　　　　　<strong>ᐯ</strong>\]</span><br>
　　　☑ALT<br>

<br>

　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[　　　OK　　　\]</span>　　　　 <span style="color:Black;background-color:#EEEEEE;">\[　　Cancel　　\]</span><br>

<br>

***

### forward search (SumatraPDF を前面に表示したくない場合) {#dfc0b616}

[SumatraPDF/fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) の fwdsumatrapdf.exe を使用します．<br>

#### fwdsumatrapdf {#b6351a6e}

以下のように設定します．<br>

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; fwdsumatrapdf.exe "$(NAME_PART).pdf" "$(FILE_NAME)" $(CURRENT_LINE)<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">fwdsumatrapdf</span>　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</ins><br>

***

### inverse search {#fe81f375}

[Notepad++#SumatraPDF との連携](/Notepad++/#ted60cbe) を参照．

## TeXworks との連携 {#f405549d}

### forward search {#h0f139e4}

#### TeXworks {#d203fe0e}

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; set CURRENT_LINE=$(CURRENT_LINE) &amp;&amp; set /a CURRENT_LINE=CURRENT_LINE+1 &amp;&amp; echo synctex view -i "%CURRENT_LINE%:0:$(FILE_NAME)" -o "$(NAME_PART).pdf" -x "texworks --position=%{page+1} "%{output}"" | cmd<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">TeXworks</span>　　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</ins><br>

***

## Adobe Acrobat Reader DC との連携 {#wbbe918a}

### forward search {#safe0b18}

#### pdfupLaTeXA {#w63fc0bc}

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; pdfopen --r15 --file "$(NAME_PART).pdf" &amp;&amp; pdfclose --r15 --file "$(NAME_PART).pdf" &amp; ptex2pdf -u -l -ot "-no-guess-input-enc -kanji=utf8 -synctex=1 -sjis-terminal" "$(NAME_PART)" &amp;&amp; set CURRENT_LINE=$(CURRENT_LINE) &amp;&amp; set /a CURRENT_LINE=CURRENT_LINE+1 &amp;&amp; echo synctex view -i "%CURRENT_LINE%:0:$(FILE_NAME)" -o "$(NAME_PART).pdf" -x "pdfopen --r15 --file "%{output}" --page %{page+1}" | cmd<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">pdfupLaTeXA</span>　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</ins><br>

***

#### pdfupLaTeX2A {#te20483a}

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; pdfopen --r15 --file "$(NAME_PART).pdf" &amp;&amp; pdfclose --r15 --file "$(NAME_PART).pdf" &amp; uplatex -no-guess-input-enc -kanji=utf8 -synctex=1 -sjis-terminal "$(NAME_PART)" &amp;&amp; dvips -Ppdf -z -f "$(NAME_PART).dvi" | convbkmk -u > "$(NAME_PART).ps" &amp;&amp; ps2pdf.exe "$(NAME_PART).ps" &amp;&amp; set CURRENT_LINE=$(CURRENT_LINE) &amp;&amp; set /a CURRENT_LINE=CURRENT_LINE+1 &amp;&amp; echo synctex view -i "%CURRENT_LINE%:0:$(FILE_NAME)" -o "$(NAME_PART).pdf" -x "pdfopen --r15 --file "%{output}" --page %{page+1}" | cmd<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">pdfupLaTeX2A</span>　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</ins><br>

***

#### pLaTeX-ngA {#w213bfdd}

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; pdfopen --r15 --file "$(NAME_PART).pdf" &amp;&amp; pdfclose --r15 --file "$(NAME_PART).pdf" &amp; platex-ng -synctex=1 "$(NAME_PART)" &amp;&amp; set CURRENT_LINE=$(CURRENT_LINE) &amp;&amp; set /a CURRENT_LINE=CURRENT_LINE+1 &amp;&amp; echo synctex view -i "%CURRENT_LINE%:0:$(FILE_NAME)" -o "$(NAME_PART).pdf" -x "pdfopen --r15 --file "%{output}" --page %{page+1}" | cmd<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">pLaTeX-ngA</span>　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</ins><br>

***

#### pdfLaTeXA {#w4e87b4b}

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; pdfopen --r15 --file "$(NAME_PART).pdf" &amp;&amp; pdfclose --r15 --file "$(NAME_PART).pdf" &amp; pdflatex -synctex=1 "$(NAME_PART)" &amp;&amp; set CURRENT_LINE=$(CURRENT_LINE) &amp;&amp; set /a CURRENT_LINE=CURRENT_LINE+1 &amp;&amp; echo synctex view -i "%CURRENT_LINE%:0:$(FILE_NAME)" -o "$(NAME_PART).pdf" -x "pdfopen --r15 --file "%{output}" --page %{page+1}" | cmd<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">pdfLaTeXA</span>　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</ins><br>

***

#### LuaLaTeXA {#j6d6a21e}

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; pdfopen --r15 --file "$(NAME_PART).pdf" &amp;&amp; pdfclose --r15 --file "$(NAME_PART).pdf" &amp; lualatex -synctex=1 "$(NAME_PART)" &amp;&amp; set CURRENT_LINE=$(CURRENT_LINE) &amp;&amp; set /a CURRENT_LINE=CURRENT_LINE+1 &amp;&amp; echo synctex view -i "%CURRENT_LINE%:0:$(FILE_NAME)" -o "$(NAME_PART).pdf" -x "pdfopen --r15 --file "%{output}" --page %{page+1}" | cmd<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">LuaLaTeXA</span>　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</ins><br>

***

#### LuaJITLaTeXA {#b880cc86}

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; pdfopen --r15 --file "$(NAME_PART).pdf" &amp;&amp; pdfclose --r15 --file "$(NAME_PART).pdf" &amp; luajitlatex -synctex=1 "$(NAME_PART)" &amp;&amp; set CURRENT_LINE=$(CURRENT_LINE) &amp;&amp; set /a CURRENT_LINE=CURRENT_LINE+1 &amp;&amp; echo synctex view -i "%CURRENT_LINE%:0:$(FILE_NAME)" -o "$(NAME_PART).pdf" -x "pdfopen --r15 --file "%{output}" --page %{page+1}" | cmd<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">LuaJITLaTeXA</span>　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</ins><br>

***

#### XeLaTeXA {#e131fdc9}

***

<span style="color:#94CE18;background-color:#94CE18;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; pdfopen --r15 --file "$(NAME_PART).pdf" &amp;&amp; pdfclose --r15 --file "$(NAME_PART).pdf" &amp; xelatex -synctex=1 "$(NAME_PART)" &amp;&amp; set CURRENT_LINE=$(CURRENT_LINE) &amp;&amp; set /a CURRENT_LINE=CURRENT_LINE+1 &amp;&amp; echo synctex view -i "%CURRENT_LINE%:0:$(FILE_NAME)" -o "$(NAME_PART).pdf" -x "pdfopen --r15 --file "%{output}" --page %{page+1}" | cmd<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">XeLaTeXA</span>　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]</ins><br>

***

## 関連リンク {#l148aa58}

- [餅と輪 &raquo; Windows環境でLaTeX2εをインストール](http://blog.mochiring.net/archives/550)
