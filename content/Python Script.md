---
title: "Python Script"
url: "/Python Script/"
date: 2013-12-09T00:45:33Z
pukiwiki: "Python Script"
---

# Python Script

[Notepad++](/Notepad++/) > Python Script

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## Python Script {#k806f6f8}

Python Script を使うと LaTeX 環境を簡単に作ることができます．<br>
\[プラグイン\]-\[Plugin Manager\]-\[Show Plugin Manager\] で Python Script を選択してインストールできます．<br>

- [Python Script - Plugin for Notepad++](http://npppythonscript.sourceforge.net/)

### 注意事項 {#f37b5e02}

Python Script は 2 つのスクリプトを同時に実行できません．<br>
2 つのスクリプトを同時に実行しようとすると以下のメッセージが表示されます．<br>

```
Another script is currently running. Running two scripts at the same time
could produce unpredicable results, and is therefore disabled.
```

### pdfpLaTeX.py {#i5300af4}

***

```
import os
import os.path
import subprocess

b = os.path.splitext(os.path.basename(notepad.getCurrentFilename()))[0]
c = os.path.dirname(notepad.getCurrentFilename())
ptex2pdf = ['ptex2pdf', '-l', '-ot', '"', '-guess-input-enc', '-kanji=utf8', '-synctex=1', '-sjis-terminal', '"', b]
ok = notepad.messageBox(' '.join(ptex2pdf), 'Notepad++', 1)
if ok == 1:
    notepad.save()
    os.chdir(c)
    subprocess.call(ptex2pdf)
```

***

### pdfupLaTeX.py {#p02f8a95}

***

```
import os
import os.path
import subprocess

b = os.path.splitext(os.path.basename(notepad.getCurrentFilename()))[0]
c = os.path.dirname(notepad.getCurrentFilename())
ptex2pdf = ['ptex2pdf', '-l', '-u', '-ot', '"', '-no-guess-input-enc', '-kanji=utf8', '-synctex=1', '-sjis-terminal', '"', b]
ok = notepad.messageBox(' '.join(ptex2pdf), 'Notepad++', 1)
if ok == 1:
    notepad.save()
    os.chdir(c)
    subprocess.call(ptex2pdf)
```

***

## SumatraPDF との連携 {#w3ac6f2d}

### forward and inverse search (SumatraPDF を前面に表示したい場合) {#cb16bf11}

#### SumatraPDF.py {#i6e4d0a2}

***

```
import sys
import os.path
import subprocess

if sys.version_info >= (3, 0, 0):
    from winreg import *
else:
    from _winreg import *

npp = '"' + notepad.getNppDir() + r'\notepad++.exe' + '"'
tex = notepad.getCurrentFilename()
pdf = os.path.splitext(tex)[0] + '.pdf'
line = str(editor.lineFromPosition(editor.getCurrentPos()) + 1)

regValue = None
with OpenKeyEx(HKEY_LOCAL_MACHINE, r'SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\SumatraPDF.exe') as key:
    regValue = QueryValue(key, None)

sumatraPDF = None
if os.path.exists(regValue):
    sumatraPDF = [regValue, '-reuse-instance', pdf, '-inverse-search', npp + ' "%f" -n%l', '-forward-search', tex, line]
else:
    inputValue = notepad.prompt('Input the path to SumatraPDF.exe', 'Notepad++', 'SumatraPDF.exe')
    if os.path.exists(inputValue):
        sumatraPDF = [inputValue, '-reuse-instance', pdf, '-inverse-search', npp + ' "%f" -n%l', '-forward-search', tex, line]
    else:
        sumatraPDF = ['cmd.exe', '/c', 'rundll32', 'shell32,ShellExec_RunDLL', 'SumatraPDF', '-reuse-instance', pdf, '-inverse-search', npp + ' "%f" -n%l', '-forward-search', tex, line]

subprocess.call(sumatraPDF)
```

***
