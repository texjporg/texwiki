---
title: "SynWrite"
url: "/SynWrite/"
date: 2014-01-05T18:31:50Z
pukiwiki: "SynWrite"
---

# SynWrite

## SynWrite {#sa2a9617}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## SynWrite とは {#w5080894}

SynWrite は Unicode をサポートしたテキストエディタです．<br>

- [SynWrite](http://www.uvviewsoft.com/synwrite/)
- [http://sourceforge.net/projects/synwrite/](http://sourceforge.net/projects/synwrite/)
- [SynWrite / Wiki / Home](http://sourceforge.net/p/synwrite/wiki/)

### 動作環境 {#cee93992}

Windows 8.1, 8, 7, Vista, XP

### License {#b11e6ba2}

MPL

### ChangeLog {#v9496de5}

- [https://github.com/Alexey-T/SynWrite](https://github.com/Alexey-T/SynWrite)
    - [https://github.com/Alexey-T/SynWrite/commits/](https://github.com/Alexey-T/SynWrite/commits/)

## メニューの日本語化 {#y0f1c588}

\[Options\]-\[Customize...\]-\[Interface\]-\[Program Settings\]-\[Language\]-\[日本語 (日本)\] を選択するとメニューが日本語になります．<br>

## エンコーディング {#rf06b30b}

### 新規ドキュメント → UTF-8, no BOM に変更する {#e80f4d2b}

初期設定では ANSI (Windows) に設定されています．<br>
UTF-8, no BOM に変更します．<br>

\[設定(O)\]-\[環境設定\]-\[ファイル/フォルダ\]-\[新規/開く\]-\[新規ドキュメント\]-\[エンコーディング\]-\[UTF-8, no BOM\]

### エンコーディングの変更 {#vdd1880a}

エンコーディングを UTF-8, BOM無 に変更することができます．<br>

\[書式(N)\]-\[エンコーディングの変更(C)\]-\[Unicode\]-\[UTF-8, BOM無\]

## プラグイン {#zd70eebc}

SynWrite は [Python](/Python/) を使用してプラグインを作成できます．<br>

- [SynWrite / Wiki / Plugins Python API](http://sourceforge.net/p/synwrite/wiki/Plugins%20Python%20API/)
- [SynWrite / Wiki / Plugins Python API functions](http://sourceforge.net/p/synwrite/wiki/Plugins%20Python%20API%20functions/)

### SynPdfupLaTeX {#k5d9b009}

\[ツール(R)\]-\[新規プラグイン...\]

pdfupLaTeX を入力して OK をクリックします．<br>
\__init_\_.py を以下のように編集します．<br>

***

- \__init_\_.py

***

```
from sw import *
from sw_util import *
import os
import os.path
import subprocess

class Command:
    def run(self):
        b = os.path.splitext(os.path.basename(file_get_name(FILENAME_CURRENT)))[0]
        c = os.path.dirname(file_get_name(FILENAME_CURRENT))
        ptex2pdf = ['ptex2pdf', '-l', '-u', '-ot', '"', '-no-guess-input-enc', '-kanji=utf8', '-synctex=1', '-sjis-terminal', '"', b]
        ok = msg_box(MSG_CONFIRM, ' '.join(ptex2pdf))
        if ok == True:
            file_save()
            os.chdir(c)
            subprocess.call(ptex2pdf)

if __name__ == '__main__':
    Command().run()
```

***

\[ツール(R)\]-\[プラグイン(P)\]-\[SynPdfupLaTeX\] で実行できます．<br>

## SumatraPDF との連携 {#ea9c18ec}

### forward and inverse search (SumatraPDF を前面に表示したい場合) {#n5679ec0}

#### SynSumatraPDF {#m2c207ba}

\[ツール(R)\]-\[新規プラグイン...\]

SumatraPDF を入力して OK をクリックします．<br>
\__init_\_.py を以下のように編集します．<br>

inverse search をする場合は起動中の SynWrite を終了する必要があります．<br>
\__init_\_.py は inverse search の設定に起動中の SynWrite を終了する処理を追加しています．<br>

***

- \__init_\_.py

***

```
from sw import *
from sw_util import *
import os.path
import subprocess
import winreg

class Command:
    def run(self):
        taskkill = r'cmd /c tasklist /fi \"IMAGENAME eq Syn.exe\" /nh | findstr \"Syn.exe\" > nul && taskkill /F /IM Syn.exe /T'
        synWrite = r'\"' + app_exe_dir() + r'\Syn.exe' + r'\"'
        tex = file_get_name(FILENAME_CURRENT)
        pdf = os.path.splitext(tex)[0] + '.pdf'
        line = str(ed_get_caret_xy()[1] + 1)

        regValue = None
        with winreg.OpenKeyEx(winreg.HKEY_LOCAL_MACHINE, r'SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\SumatraPDF.exe') as key:
            regValue = winreg.QueryValue(key, None)

        sumatraPDF = None
        if os.path.exists(regValue):
            sumatraPDF = '"' + regValue + '" -reuse-instance "' + pdf + '" -inverse-search "' + taskkill + ' & ' + synWrite + r' \"%f\" /s /n=%l" -forward-search "' + tex + '" ' + line
        else:
            inputValue = dlg_input('Input the path to SumatraPDF.exe', 'SumatraPDF.exe', '', '')
            if os.path.exists(inputValue):
                sumatraPDF = '"' + inputValue + '" -reuse-instance "' + pdf + '" -inverse-search "' + taskkill + ' & ' + synWrite + r' \"%f\" /s /n=%l" -forward-search "' + tex + '" ' + line
            else:
                sumatraPDF = 'rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance "' + pdf + '" -inverse-search "' + taskkill + ' & ' + synWrite + r' \"%f\" /s /n=%l" -forward-search "' + tex + '" ' + line

        cmd = 'cmd /c echo ' + sumatraPDF + ' | cmd'
        subprocess.call(cmd, shell=True)

if __name__ == '__main__':
    Command().run()
```

***

\[ツール(R)\]-\[プラグイン(P)\]-\[SynSumatraPDF\] で実行できます．<br>

### inverse search {#hdae615d}

inverse search をする場合は起動中の SynWrite を終了する必要があります．<br>
以下の inverse search の設定は起動中の SynWrite を終了する処理を追加しています．<br>

```
cmd /c tasklist /fi "IMAGENAME eq Syn.exe" /nh | findstr "Syn.exe" > nul && taskkill /F /IM Syn.exe /T & "C:\Program Files\SynWrite\Syn.exe" "%f" /s /n=%l
cmd /c tasklist /fi "IMAGENAME eq Syn.exe" /nh | findstr "Syn.exe" > nul && taskkill /F /IM Syn.exe /T & "C:\Program Files (x86)\SynWrite\Syn.exe" "%f" /s /n=%l
```
