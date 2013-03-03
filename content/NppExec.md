---
title: "NppExec"
url: "/NppExec/"
date: 2013-01-21T00:14:03Z
pukiwiki: "NppExec"
---

# NppExec

[Notepad++](/Notepad++/) > NppExec

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## [NppExec](http://sourceforge.net/projects/npp-plugins/files/NppExec/) {#n297fed5}

NppExec を使うと LaTeX 環境を簡単に作ることができます．

UNICODE 版の場合，デフォルトではインストールされていないので \[プラグイン\]-\[Plugin Manager\]-\[Show Plugin Manager\] でインストールします．

\[プラグイン\]-\[NppExec\]-\[Show Console Dialog\] にチェックをいれた場合は，NPP_CONSOLE 1 の処理は書かなくても OK です．

\[プラグイン\]-\[NppExec\]-\[Follow $(CURRENT_DIRECTORY)\] にチェックをいれた場合は，cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; の処理は書かなくても OK です．

\[プラグイン\]-\[NppExec\]-\[Execute...\] または F6 キーで設定および実行ができます．

コマンドを設定して名前を付けて保存します．

設定した後で \[プラグイン\]-\[NppExec\]-\[Advanced Options...\] の Menu item から設定した項目を登録します．

\[設定\]-\[ショートカット管理...\]-\[Plugin commands\] から登録した項目のショートカットの設定をします．

- [NppExec (コマンドの実行) - Notepad++のプラグイン解説](http://www.crystal-creation.com/software/technical-information/tool/editor/notepad-plus/plug-in/nppexec.htm)

### pdfpLaTeX {#o4701461}

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong> 　\]<ins></span> </ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; platex -synctex=1 -guess-input-enc -kanji=utf8 -sjis-terminal -jobname="$(NAME_PART)" "$(NAME_PART)" &amp;&amp; dvipdfmx "$(NAME_PART)"<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">pdfpLaTeX</span>　　　　　　　　　　　　　　　　　　▼\]</ins><br>

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Shortcut</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ <strong><span style="color:White;">✕</span></strong> \]<ins></span> </ins></span><br>

<br>

　　　　　　Name :　<ins>pdfpLaTeX</ins><br>
　　　☑CTRL<br>
　　　　　　　　　　+ ☐SHIFT　　+　　<span style="color:Black;background-color:#EEEEEE;">\[J　　　　　　　　　▼\]</span><br>
　　　☑ALT<br>

<br>

　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[　　　OK　　　\]</span>　　　　 <span style="color:Black;background-color:#EEEEEE;">\[　　Cancel　　\]</span><br>

<br>

***

### pdfpLaTeX2 {#y481dee8}

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong> 　\]<ins></span> </ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; platex -synctex=1 -guess-input-enc -kanji=utf8 -sjis-terminal -jobname="$(NAME_PART)" "$(NAME_PART)" &amp;&amp; dvips -Ppdf -z -f "$(NAME_PART).dvi" | convbkmk -g > "$(NAME_PART).ps" &amp;&amp; ps2pdf.bat "$(NAME_PART).ps"<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">pdfpLaTeX2</span>　　　　　　　　　　　　　　　　　　　▼\]</ins><br>

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Shortcut</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ <strong><span style="color:White;">✕</span></strong> \]<ins></span> </ins></span><br>

<br>

　　　　　　Name :　<ins>pdfpLaTeX2</ins><br>
　　　☑CTRL<br>
　　　　　　　　　　+ ☐SHIFT　　+　　<span style="color:Black;background-color:#EEEEEE;">\[K　　　　　　　　　▼\]</span><br>
　　　☑ALT<br>

<br>

　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[　　　OK　　　\]</span>　　　　 <span style="color:Black;background-color:#EEEEEE;">\[　　Cancel　　\]</span><br>

<br>

***

### pdfupLaTeX {#i86b16de}

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong> 　\]<ins></span> </ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; uplatex -synctex=1 -no-guess-input-enc -kanji=utf8 "$(NAME_PART)" &amp;&amp; dvipdfmx "$(NAME_PART)"<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">pdfupLaTeX</span>　　　　　　　　　　　　　　　　　　▼\]</ins><br>

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Shortcut</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ <strong><span style="color:White;">✕</span></strong> \]<ins></span> </ins></span><br>

<br>

　　　　　　Name :　<ins>pdfupLaTeX</ins><br>
　　　☐CTRL<br>
　　　　　　　　　　+ ☑SHIFT　　+　　<span style="color:Black;background-color:#EEEEEE;">\[J　　　　　　　　　▼\]</span><br>
　　　☑ALT<br>

<br>

　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[　　　OK　　　\]</span>　　　　 <span style="color:Black;background-color:#EEEEEE;">\[　　Cancel　　\]</span><br>

<br>

***

### pdfupLaTeX2 {#k41459c9}

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong> 　\]<ins></span> </ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; uplatex -synctex=1 -no-guess-input-enc -kanji=utf8 "$(NAME_PART)" &amp;&amp; dvips -Ppdf -z -f "$(NAME_PART).dvi" | convbkmk -u > "$(NAME_PART).ps" &amp;&amp; ps2pdf.bat "$(NAME_PART).ps"<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">pdfupLaTeX2</span>　　　　　　　　　　　　　　　　　　　▼\]</ins><br>

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Shortcut</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ <strong><span style="color:White;">✕</span></strong> \]<ins></span> </ins></span><br>

<br>

　　　　　　Name :　<ins>pdfupLaTeX2</ins><br>
　　　☐CTRL<br>
　　　　　　　　　　+ ☑SHIFT　　+　　<span style="color:Black;background-color:#EEEEEE;">\[K　　　　　　　　　▼\]</span><br>
　　　☑ALT<br>

<br>

　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[　　　OK　　　\]</span>　　　　 <span style="color:Black;background-color:#EEEEEE;">\[　　Cancel　　\]</span><br>

<br>

***

### pdfLaTeX {#b792f14c}

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong> 　\]<ins></span> </ins></span><br>

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
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">pdfLaTeX</span>　　　　　　　　　　　　　　　　　　　▼\]</ins><br>

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Shortcut</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ <strong><span style="color:White;">✕</span></strong> \]<ins></span> </ins></span><br>

<br>

　　　　　　Name :　<ins>pdfLaTeX</ins><br>
　　　☐CTRL<br>
　　　　　　　　　　+ ☑SHIFT　　+　　<span style="color:Black;background-color:#EEEEEE;">\[H　　　　　　　　　▼\]</span><br>
　　　☑ALT<br>

<br>

　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[　　　OK　　　\]</span>　　　　 <span style="color:Black;background-color:#EEEEEE;">\[　　Cancel　　\]</span><br>

<br>

***

### LuaLaTeX {#fa30dbb3}

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong> 　\]<ins></span> </ins></span><br>

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
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">LuaLaTeX</span>　　　　　　　　　　　　　　　　　　　▼\]</ins><br>

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Shortcut</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ <strong><span style="color:White;">✕</span></strong> \]<ins></span> </ins></span><br>

<br>

　　　　　　Name :　<ins>LuaLaTeX</ins><br>
　　　☐CTRL<br>
　　　　　　　　　　+ ☑SHIFT　　+　　<span style="color:Black;background-color:#EEEEEE;">\[Y　　　　　　　　　▼\]</span><br>
　　　☑ALT<br>

<br>

　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[　　　OK　　　\]</span>　　　　 <span style="color:Black;background-color:#EEEEEE;">\[　　Cancel　　\]</span><br>

<br>

***

### LuaJITLaTeX {#r054d32d}

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong> 　\]<ins></span> </ins></span><br>

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
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">LuaJITLaTeX</span>　　　　　　　　　　　　　　　　　▼\]</ins><br>

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Shortcut</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ <strong><span style="color:White;">✕</span></strong> \]<ins></span> </ins></span><br>

<br>

　　　　　　Name :　<ins>LuaJITLaTeX</ins><br>
　　　☐CTRL<br>
　　　　　　　　　　+ ☑SHIFT　　+　　<span style="color:Black;background-color:#EEEEEE;">\[U　　　　　　　　　▼\]</span><br>
　　　☑ALT<br>

<br>

　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[　　　OK　　　\]</span>　　　　 <span style="color:Black;background-color:#EEEEEE;">\[　　Cancel　　\]</span><br>

<br>

***

### XeLaTeX {#v5239682}

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong> 　\]<ins></span> </ins></span><br>

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
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">XeLaTeX</span>　　　　　　　　　　　　　　　　　　　▼\]</ins><br>

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Shortcut</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ <strong><span style="color:White;">✕</span></strong> \]<ins></span> </ins></span><br>

<br>

　　　　　　Name :　<ins>XeLaTeX</ins><br>
　　　☐CTRL<br>
　　　　　　　　　　+ ☑SHIFT　　+　　<span style="color:Black;background-color:#EEEEEE;">\[I　　　　　　　　　▼\]</span><br>
　　　☑ALT<br>

<br>

　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[　　　OK　　　\]</span>　　　　 <span style="color:Black;background-color:#EEEEEE;">\[　　Cancel　　\]</span><br>

<br>

***

### pBibTeX {#f74ea44b}

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong> 　\]<ins></span> </ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; pbibtex -kanji=utf8 -sjis-terminal "$(NAME_PART)"<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">pBibTeX</span>　　　　　　　　　　　　　　　　　　　　▼\]</ins><br>

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Shortcut</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ <strong><span style="color:White;">✕</span></strong> \]<ins></span> </ins></span><br>

<br>

　　　　　　Name :　<ins>pBibTeX</ins><br>
　　　☑CTRL<br>
　　　　　　　　　　+ ☐SHIFT　　+　　<span style="color:Black;background-color:#EEEEEE;">\[N　　　　　　　　　▼\]</span><br>
　　　☑ALT<br>

<br>

　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[　　　OK　　　\]</span>　　　　 <span style="color:Black;background-color:#EEEEEE;">\[　　Cancel　　\]</span><br>

<br>

***

### upBibTeX {#uea6702c}

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong> 　\]<ins></span> </ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; upbibtex "$(NAME_PART)"<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">upBibTeX</span>　　　　　　　　　　　　　　　　　　　　▼\]</ins><br>

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Shortcut</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ <strong><span style="color:White;">✕</span></strong> \]<ins></span> </ins></span><br>

<br>

　　　　　　Name :　<ins>upBibTeX</ins><br>
　　　☐CTRL<br>
　　　　　　　　　　+ ☑SHIFT　　+　　<span style="color:Black;background-color:#EEEEEE;">\[N　　　　　　　　　▼\]</span><br>
　　　☑ALT<br>

<br>

　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[　　　OK　　　\]</span>　　　　 <span style="color:Black;background-color:#EEEEEE;">\[　　Cancel　　\]</span><br>

<br>

***

### Mendex {#y0117ee8}

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong> 　\]<ins></span> </ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; mendex -U -T "$(NAME_PART)"<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">Mendex</span>　　　　　　　　　　　　　　　　　　　　▼\]</ins><br>

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Shortcut</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ <strong><span style="color:White;">✕</span></strong> \]<ins></span> </ins></span><br>

<br>

　　　　　　Name :　<ins>Mendex</ins><br>
　　　☑CTRL<br>
　　　　　　　　　　+ ☐SHIFT　　+　　<span style="color:Black;background-color:#EEEEEE;">\[M　　　　　　　　　▼\]</span><br>
　　　☑ALT<br>

<br>

　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[　　　OK　　　\]</span>　　　　 <span style="color:Black;background-color:#EEEEEE;">\[　　Cancel　　\]</span><br>

<br>

***

### TeXworks {#d203fe0e}

[TeXworks#組み込みの PDF ビューアに日本語を表示させる](/TeXworks/#t5313ebc) を参照してフォントの埋め込みの設定を行います．

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong> 　\]<ins></span> </ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_CONSOLE 0<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; echo texworks "$(NAME_PART).pdf" | cmd<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">TeXworks</span>　　　　　　　　　　　　　　　　　　　▼\]</ins><br>

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Shortcut</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ <strong><span style="color:White;">✕</span></strong> \]<ins></span> </ins></span><br>

<br>

　　　　　　Name :　<ins>TeXworks</ins><br>
　　　☑CTRL<br>
　　　　　　　　　　+ ☐SHIFT　　+　　<span style="color:Black;background-color:#EEEEEE;">\[O　　　　　　　　　▼\]</span><br>
　　　☑ALT<br>

<br>

　　　　　　<span style="color:Black;background-color:#DAEAFF;">\[　　　OK　　　\]</span>　　　　 <span style="color:Black;background-color:#EEEEEE;">\[　　Cancel　　\]</span><br>

<br>

***

## SumatraPDF との連携 {#jbc79e5b}

### forward and inverse search (SumatraPDF を前面に表示したい場合) {#qbc5204b}

#### SumatraPDF {#ld44000d}

以下のように設定します．<br>

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong> 　\]<ins></span> </ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_CONSOLE 0<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; if exist "C:\Program Files\SumatraPDF\SumatraPDF.exe" (echo "C:\Program Files\SumatraPDF\SumatraPDF" -reuse-instance "$(NAME_PART).pdf" -inverse-search "\\"$(#0)\\" \\"%f\\" -n%l" -forward-search "$(FILE_NAME)" $(CURRENT_LINE)) else (echo "C:\Program Files (x86)\SumatraPDF\SumatraPDF" -reuse-instance "$(NAME_PART).pdf" -inverse-search "\\"$(#0)\\" \\"%f\\" -n%l" -forward-search "$(FILE_NAME)" $(CURRENT_LINE)) | cmd<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">SumatraPDF</span>　　　　　　　　　　　　　　　　　　▼\]</ins><br>

***

### forward search (SumatraPDF を前面に表示したくない場合) {#dfc0b616}

[SumatraPDF#fwdsumatrapdf.exe](/SumatraPDF/#n8da77e2) の fwdsumatrapdf.exe を使用します．<br>

#### fwdsumatrapdf {#b6351a6e}

以下のように設定します．<br>

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong> 　\]<ins></span> </ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_CONSOLE 0<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; fwdsumatrapdf.exe "$(NAME_PART).pdf" "$(FILE_NAME)" $(CURRENT_LINE)<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">fwdsumatrapdf</span>　　　　　　　　　　　　　　　　　▼\]</ins><br>

***

### inverse search {#fe81f375}

```
C:\npp\unicode\notepad++.exe "%f" -n%l
```

## Adobe Reader との連携 {#wbbe918a}

### pdfpLaTeXA {#zd0370fb}

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong> 　\]<ins></span> </ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; pdfopen --rxi --file "$(NAME_PART).pdf" &amp;&amp; pdfclose --rxi --file "$(NAME_PART).pdf" &amp; platex -guess-input-enc -kanji=utf8 -sjis-terminal -jobname="$(NAME_PART)" "$(NAME_PART)" &amp;&amp; dvipdfmx "$(NAME_PART)" &amp;&amp; powershell -Command "&amp; {$pdf = """$(NAME_PART).pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)\[1\]; pdfopen --rxi --file $pdf --page $page}"<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">pdfpLaTeXA</span>　　　　　　　　　　　　　　　　　▼\]</ins><br>

***

### pdfpLaTeX2A {#r078522e}

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong> 　\]<ins></span> </ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; pdfopen --rxi --file "$(NAME_PART).pdf" &amp;&amp; pdfclose --rxi --file "$(NAME_PART).pdf" &amp; platex -guess-input-enc -kanji=utf8 -sjis-terminal -jobname="$(NAME_PART)" "$(NAME_PART)" &amp;&amp; dvips -Ppdf -z -f "$(NAME_PART).dvi" | convbkmk -g > "$(NAME_PART).ps" &amp;&amp; ps2pdf.bat "$(NAME_PART).ps" &amp;&amp; powershell -Command "&amp; {$pdf = """$(NAME_PART).pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)\[1\]; pdfopen --rxi --file $pdf --page $page}"<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">pdfpLaTeX2A</span>　　　　　　　　　　　　　　　　　　▼\]</ins><br>

***

### pdfupLaTeXA {#w63fc0bc}

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong> 　\]<ins></span> </ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; pdfopen --rxi --file "$(NAME_PART).pdf" &amp;&amp; pdfclose --rxi --file "$(NAME_PART).pdf" &amp; uplatex -no-guess-input-enc -kanji=utf8 "$(NAME_PART)" &amp;&amp; dvipdfmx "$(NAME_PART)" &amp;&amp; powershell -Command "&amp; {$pdf = """$(NAME_PART).pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)\[1\]; pdfopen --rxi --file $pdf --page $page}"<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">pdfupLaTeXA</span>　　　　　　　　　　　　　　　　　▼\]</ins><br>

***

### pdfupLaTeX2A {#te20483a}

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong> 　\]<ins></span> </ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; pdfopen --rxi --file "$(NAME_PART).pdf" &amp;&amp; pdfclose --rxi --file "$(NAME_PART).pdf" &amp; uplatex -no-guess-input-enc -kanji=utf8 "$(NAME_PART)" &amp;&amp; dvips -Ppdf -z -f "$(NAME_PART).dvi" | convbkmk -u > "$(NAME_PART).ps" &amp;&amp; ps2pdf.bat "$(NAME_PART).ps" &amp;&amp; powershell -Command "&amp; {$pdf = """$(NAME_PART).pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)\[1\]; pdfopen --rxi --file $pdf --page $page}"<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">pdfupLaTeX2A</span>　　　　　　　　　　　　　　　　　　▼\]</ins><br>

***

### pdfLaTeXA {#w4e87b4b}

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong> 　\]<ins></span> </ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; pdfopen --rxi --file "$(NAME_PART).pdf" &amp;&amp; pdfclose --rxi --file "$(NAME_PART).pdf" &amp; pdflatex "$(NAME_PART)" &amp;&amp; powershell -Command "&amp; {$pdf = """$(NAME_PART).pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)\[1\]; pdfopen --rxi --file $pdf --page $page}"<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">pdfLaTeXA</span>　　　　　　　　　　　　　　　　　　▼\]</ins><br>

***

### LuaLaTeXA {#j6d6a21e}

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong> 　\]<ins></span> </ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; pdfopen --rxi --file "$(NAME_PART).pdf" &amp;&amp; pdfclose --rxi --file "$(NAME_PART).pdf" &amp; lualatex "$(NAME_PART)" &amp;&amp; powershell -Command "&amp; {$pdf = """$(NAME_PART).pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)\[1\]; pdfopen --rxi --file $pdf --page $page}"<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">LuaLaTeXA</span>　　　　　　　　　　　　　　　　　　▼\]</ins><br>

***

### LuaJITLaTeXA {#b880cc86}

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong> 　\]<ins></span> </ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; pdfopen --rxi --file "$(NAME_PART).pdf" &amp;&amp; pdfclose --rxi --file "$(NAME_PART).pdf" &amp; luajitlatex "$(NAME_PART)" &amp;&amp; powershell -Command "&amp; {$pdf = """$(NAME_PART).pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)\[1\]; pdfopen --rxi --file $pdf --page $page}"<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">LuaJITLaTeXA</span>　　　　　　　　　　　　　　　　▼\]</ins><br>

***

### XeLaTeXA {#e131fdc9}

***

<span style="color:Black;background-color:#94CE18;"><ins>　<span style="color:White;"><strong>Execute...</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong> 　\]<ins></span> </ins></span><br>

<br>

　　Command(s):<br>
　　　NPP_SAVE<br>
　　　NPP_CONSOLE 1<br>
　　　cmd /c cd /d "$(CURRENT_DIRECTORY)" &amp;&amp; tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul &amp;&amp; pdfopen --rxi --file "$(NAME_PART).pdf" &amp;&amp; pdfclose --rxi --file "$(NAME_PART).pdf" &amp; xelatex "$(NAME_PART)" &amp;&amp; powershell -Command "&amp; {$pdf = """$(NAME_PART).pdf"""; $pages = (pdfinfo $pdf | Select-String "^Pages:"); $page = (-split $pages)\[1\]; pdfopen --rxi --file $pdf --page $page}"<br>

<br>

<br>

<br>

<br>

　　<span style="color:Black;background-color:#EEEEEE;">　Script name:　　　　　　　　　　　　　　　　　　　　　</span><br>
　　　 <ins>\[<span style="color:White;background-color:#1188FF;">XeLaTeXA</span>　　　　　　　　　　　　　　　　　　▼\]</ins><br>

***

## 関連リンク {#l148aa58}

- [餅と輪 &raquo; Windows環境でLaTeX2εをインストール](http://blog.mochiring.net/archives/550)
