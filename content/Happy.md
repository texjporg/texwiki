---
title: "Happy"
url: "/Happy/"
date: 2014-01-20T23:46:33Z
pukiwiki: "Happy"
---

# Happy

## Happy {#qc7045dc}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Happy とは {#afbf7ee4}

Happy は TeX を便利に使うためのスクリプトです．<br>
[サクラエディタ](</サクラエディタ/>) などに対応しています．<br>

- [Happy](http://www.u-gakugei.ac.jp/~takizawa/Happy/)
    - HappyTeX (TeX タイプセット＆プレビュー支援スクリプト)
    - HappyInput (TeX 入力支援スクリプト)
- [https://www.autoitscript.com/](https://www.autoitscript.com/)

### 動作環境 {#l8517280}

Windows

## HappyTeX {#la331529}

[サクラエディタ](</サクラエディタ/>) で HappyTeX を使用する場合について記述します．<br>

### bin/HappyTeX.ini {#o68500b3}

HappyTeX.ini に HappyTeX の実行に必要な PATH を設定します．<br>

■ 64-bit Windows の場合

***

```
[Message]
Type=Tokyo

[Program]
TeXbin=C:\w32tex\bin64
dviout=C:\w32tex\dviout-x64\dviout.exe
GSmain=C:\Program Files\gs\gs9.18
gsview=C:\Program Files\Ghostgum\gsview\gsview64.exe

pdfviewer=C:\Program Files (x86)\Adobe\Acrobat Reader DC\Reader\AcroRd32.exe
pdfviewertitle=
pdflock=Yes
pdfopen="%f"
pdfjump=acroviewR15/control/[DocOpen("%f")][DocGoTo("%f",%q)]

pdfviewer=C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe
pdfviewertitle=
pdflock=No
pdfopen=-reuse-instance "%f"
pdfjump=SUMATRA/control/[ForwardSearch("%f","%t",%l,0,0,1)]

cmd-Path=

[Editor]
Path=C:\Program Files (x86)\sakura\sakura.exe
LineNumOpt=-X=1 -Y=*
ArgOrder=1

Path=C:\Program Files (x86)\Mery\Mery.exe
LineNumOpt=/l *
ArgOrder=1

[Delay]
Delay1=0.75
Delay2=3
Delay3=2

[Font]
FontmapList=MS|Win|IPA-ex|Moga|Moga90|Koz|Koz04
psFontmapList=MS-ps|Win-ps|IPA-ex-ps|Moga-ps|Moga90-ps
NoEmbedType=1
EFontType=1
...
```

***

■ 32-bit Windows の場合

***

```
[Message]
Type=Tokyo

[Program]
TeXbin=C:\w32tex\bin
dviout=C:\w32tex\dviout\dviout.exe
GSmain=C:\Program Files\gs\gs9.18
gsview=C:\Program Files\Ghostgum\gsview\gsview32.exe

pdfviewer=C:\Program Files\Adobe\Acrobat Reader DC\Reader\AcroRd32.exe
pdfviewertitle=
pdflock=Yes
pdfopen="%f"
pdfjump=acroviewR15/control/[DocOpen("%f")][DocGoTo("%f",%q)]

pdfviewer=C:\Program Files\SumatraPDF\SumatraPDF.exe
pdfviewertitle=
pdflock=No
pdfopen=-reuse-instance "%f"
pdfjump=SUMATRA/control/[ForwardSearch("%f","%t",%l,0,0,1)]

cmd-Path=

[Editor]
Path=C:\Program Files\sakura\sakura.exe
LineNumOpt=-X=1 -Y=*
ArgOrder=1

Path=C:\Program Files\Mery\Mery.exe
LineNumOpt=/l *
ArgOrder=1

[Delay]
Delay1=0.75
Delay2=3
Delay3=2

[Font]
FontmapList=MS|Win|IPA-ex|Moga|Moga90|Koz|Koz04
psFontmapList=MS-ps|Win-ps|IPA-ex-ps|Moga-ps|Moga90-ps
NoEmbedType=1
EFontType=1
...
```

***

### editor/Sakura/HappyTeX.vbs {#pf371c1a}

HappyTeX.vbs の ScriptPath に HappyTeX.exe のフルパスを設定します．<br>
HappyTeX.vbs をサクラエディタのマクロに登録します．<br>
HappyTeX.vbs をサクラエディタから実行すると以下の様な画面が表示されます．<br>
LaTeX を実行する場合は \[実行\] をクリックします．<br>

***

LaTeX　　　　　　　　　　　　　　　　　　　　　出力ファイル<br>
　◯ pLaTeX　　　🔘 upLaTeX　　　　　　　　🔘 dvi → PDF　　◯ ps → PDF<br>
　◯ LuaLaTeX　　◯ LuaJITLaTeX　　　　　<span style="color:#888888;">◯ PDF</span><br>
　◯ XeLaTeX　　 ◯ pdfLaTeX　　　　　　　 ◯ dvi　　　　　　　 ◯ ps<br>

<br>

途中経過　　　　　　　　　　　　　　　　　　　　出力ファイルの表示<br>
　🔘 毎回表示する　　☐ 確認する　　　　　🔘 表示する　　☐ 非アクティブに<br>
　◯ 今回のみ表示する　　　　　　　　　　　　 ◯ 表示しない（TeX 起動 1回）<br>
　◯ 表示しない　　　　　　　　　　　　　　　　　◯ 表示しない（TeX 起動複数回）<br>

<br>

Warning<br>
　🔘 Font Warning 以外をチェックする　　　オプション（mendex）<br>
　◯ すべてチェックする<br>
　◯ 無視する<br>

<br>

フォント　　　　　　　　　　　　　　　　　　　　　☐ 用紙設定を HappyTeX にまかせない<br>
　和文（.map）　<ins>\[デフォルト　　　<strong>ᐯ</strong>\]</ins>　　　　　☐ TeX で shell-escape を有効にする<br>
　☐ 欧文基本14書体は埋め込まない<br>
　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　Remark　\]</span>　　<span style="color:Black;background-color:#EEEEEE;">\[　ini ファイルの表示　\]</span><br>
　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　About　\]</span>　　<span style="color:Black;background-color:#DAEAFF;">\[　　実行　　\]</span>　　<span style="color:Black;background-color:#EEEEEE;">\[　設定の保存　\]</span><br>

***

### editor/Sakura/HappyTeX2.vbs {#k547ed0e}

HappyTeX2.vbs の ScriptPath に HappyTeX.exe のフルパスを設定します．<br>
HappyTeX2.vbs をサクラエディタのマクロに登録します．<br>
HappyTeX2.vbs をサクラエディタから実行すると HappyTeX.vbs を実行したときに表示される画面は表示されずにすぐに LaTeX が実行されます．<br>
