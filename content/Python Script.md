---
title: "Python Script"
url: "/Python Script/"
date: 2013-12-09T00:45:33Z
pukiwiki: "Python Script"
---

# Python Script

[Notepad++](/Notepad++/) > Python Script

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Python Script → 問題が発生する場合は [NppExec](/NppExec/) または [jN](/jN/) を使用する {#k806f6f8}

Python Script を使うと LaTeX 環境を簡単に作ることができます．<br>
\[プラグイン\]-\[Plugin Manager\]-\[Show Plugin Manager\] で Python Script を選択してインストールできます．<br>
\[プラグイン\]-\[Python Script\]-\[Configuration\] で Python Script の設定をします．<br>
plugins\Config\PythonScript\scripts\ フォルダーに Pyhton Script を作成すると Machine Scripts に Python Script が表示されます．<br>
表示された Python Script は Menu items に追加できます．<br>

- [https://github.com/bruderstein/PythonScript](https://github.com/bruderstein/PythonScript)
- [Welcome to PythonScript’s documentation!](http://npppythonscript.sourceforge.net/docs/latest/)

### License {#cb3f7a8f}

[GPLv3](https://github.com/bruderstein/PythonScript/blob/master/www/header.inc#L37)

<!-- **注意事項 [#f37b5e02] -->
<!--  -->
<!-- Python Script は 2 つのスクリプトを同時に実行できません．~ -->
<!-- 2 つのスクリプトを同時に実行しようとすると以下のメッセージが表示されます．~ -->
<!--  -->
<!-- Another script is currently running. Running two scripts at the same time -->
<!-- could produce unpredicable results, and is therefore disabled. -->

### pdfupLaTeX.py {#p02f8a95}

***

```
import os
import os.path

class Command:
    def run(self):
        b = os.path.splitext(os.path.basename(notepad.getCurrentFilename()))[0]
        c = os.path.dirname(notepad.getCurrentFilename())
        ptex2pdf = 'ptex2pdf -u -l -ot "-no-guess-input-enc -kanji=utf8 -synctex=1" "' + b + '"'
        notepad.save()
        os.chdir(c)
        console.clear()
        console.show()
        console.run(ptex2pdf)

if __name__ == '__main__':
    Command().run()
```

***

### LuaLaTeX.py {#p03245f3}

***

```
import os
import os.path

class Command:
    def run(self):
        b = os.path.splitext(os.path.basename(notepad.getCurrentFilename()))[0]
        c = os.path.dirname(notepad.getCurrentFilename())
        pdflatex = 'lualatex -synctex=1 "' + b + '"'
        notepad.save()
        os.chdir(c)
        console.clear()
        console.show()
        console.run(pdflatex)

if __name__ == '__main__':
    Command().run()
```

***

## SumatraPDF との連携 {#w3ac6f2d}

### forward and inverse search (SumatraPDF を前面に表示したい場合) {#cb16bf11}

#### SumatraPDF.py {#i6e4d0a2}

***

```
import sys
import os.path

if sys.version_info >= (3, 0, 0):
    from winreg import *
else:
    from _winreg import *

class Command:
    def run(self):
        npp = r'\"' + notepad.getNppDir() + r'\notepad++.exe' + r'\"'
        tex = notepad.getCurrentFilename()
        pdf = os.path.splitext(tex)[0] + '.pdf'
        line = str(editor.lineFromPosition(editor.getCurrentPos()) + 1)

        regValue = None
        with OpenKeyEx(HKEY_LOCAL_MACHINE, r'SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\SumatraPDF.exe') as key:
            regValue = QueryValue(key, None)

        sumatraPDF = None
        if os.path.exists(regValue):
            sumatraPDF = '"' + regValue + '" -reuse-instance "' + pdf + '" -inverse-search "' + npp + r' \"%f\" -n%l" -forward-search "' + tex + '" ' + line
        else:
            inputValue = notepad.prompt('Input the path to SumatraPDF.exe', 'Notepad++', 'SumatraPDF.exe')
            if os.path.exists(inputValue):
                sumatraPDF = '"' + inputValue + '" -reuse-instance "' + pdf + '" -inverse-search "' + npp + r' \"%f\" -n%l" -forward-search "' + tex + '" ' + line
            else:
                sumatraPDF = 'rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance "' + pdf + '" -inverse-search "' + npp + r' \"%f\" -n%l -c%c" -forward-search "' + tex + '" ' + line

        cmd = 'cmd /c echo ' + sumatraPDF + ' | cmd'
        console.clear()
        console.show()
        console.run(cmd)

if __name__ == '__main__':
    Command().run()
```

***

### forward search  (SumatraPDF を前面に表示したくない場合) {#p5e94fc2}

[SumatraPDF/fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) の fwdsumatrapdf.exe を使用します．<br>

#### fwdsumatrapdf.py {#ubae479b}

***

```
import os.path

class Command:
    def run(self):
        fwdsumatrapdf = 'fwdsumatrapdf'
        tex = notepad.getCurrentFilename()
        pdf = os.path.splitext(tex)[0] + '.pdf'
        line = str(editor.lineFromPosition(editor.getCurrentPos()) + 1)
        cmd = fwdsumatrapdf + ' ' + pdf + ' ' + tex + ' ' + line
        console.clear()
        console.show()
        console.run(cmd)

if __name__ == '__main__':
    Command().run()
```

***

### inverse search {#y839062a}

[Notepad++#SumatraPDF との連携](/Notepad++/#ted60cbe) を参照．
