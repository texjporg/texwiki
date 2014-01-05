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
- [https://github.com/Alexey-T/SynWrite](https://github.com/Alexey-T/SynWrite)
- [SynWrite / Wiki / Home](http://sourceforge.net/p/synwrite/wiki/)

### 動作環境 {#cee93992}

Windows 8.1, 8, 7, Vista, XP

### License {#b11e6ba2}

MPL

## メニューの日本語化 {#y0f1c588}

\[Options\]-\[Customize...\]-\[Interface\]-\[Program Settings\]-\[Language\]-\[日本語 (日本)\]

## エンコーディング {#rf06b30b}

### 新規ドキュメント → UTF-8, no BOM に変更する {#e80f4d2b}

初期設定では ANSI (Windows) に設定されています．<br>
UTF-8, no BOM に変更します．<br>

\[設定(O)\]-\[環境設定\]-\[ファイル/フォルダ\]-\[新規/開く\]-\[新規ドキュメント\]-\[エンコーディング\]-\[UTF-8, no BOM\]

### エンコーディングの変更 {#vdd1880a}

エンコーディングを UTF-8, BOM無 に変更することができます．<br>

\[書式(N)\]-\[エンコーディングの変更(C)\]-\[Unicode\]-\[UTF-8, BOM無\]

## プラグイン {#zd70eebc}

- [SynWrite / Wiki / Plugins Python API](http://sourceforge.net/p/synwrite/wiki/Plugins%20Python%20API/)
- [SynWrite / Wiki / Plugins Python API functions](http://sourceforge.net/p/synwrite/wiki/Plugins%20Python%20API%20functions/)

### pdfupLaTeX {#k5d9b009}

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
```

***

\[ツール(R)\]-\[プラグイン(P)\]-\[SynPdfupLaTeX\] で実行できます．<br>

## SumatraPDF との連携 {#ea9c18ec}

### forward search {#n5679ec0}

\[ツール(R)\]-\[ツールの構成設定\]

ツールのプロパティ

名前(N):
: &nbsp;

: SumatraPDF

ファイル名(F):
: &nbsp;

: C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe

: C:\Program Files\SumatraPDF\SumatraPDF.exe

パラメータ(P):
: &nbsp;

: -reuse-instance "{FileDir}\\{FileNameNoExt}.pdf" -forward-search "{FileName}" {CurrentLineNum}

構文(L):
: &nbsp;

: LaTeX

事前の保存(S):
: &nbsp;

: なし

TeX ファイルを開いて \[ツール(R)\]-\[SumatraPDF\] で実行できます．<br>

### inverse search {#hdae615d}

inverse search をする場合は起動中の SynWrite を終了する必要があります．<br>
以下の inverse search の設定は起動中の SynWrite を終了する処理を追加しています．<br>
ダブルクリックして SumatraPDF が終了してしまう場合は SynWrite を一度手動で終了してからダブルクリックしてください．<br>

```
cmd /c tasklist /fi "IMAGENAME eq Syn.exe" /nh | findstr "Syn.exe" > nul && taskkill /F /IM Syn.exe /T & "C:\Program Files\SynWrite\Syn.exe" "%f" /s /n=%l
cmd /c tasklist /fi "IMAGENAME eq Syn.exe" /nh | findstr "Syn.exe" > nul && taskkill /F /IM Syn.exe /T & "C:\Program Files (x86)\SynWrite\Syn.exe" "%f" /s /n=%l
```
