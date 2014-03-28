---
title: "Bash"
url: "/Bash/"
date: 2013-08-20T04:59:56Z
pukiwiki: "Bash"
---

# Bash

## Bash {#f79a5d3a}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Summary {#ga73dcc0}

- [Bash - GNU Project - Free Software Foundation](http://www.gnu.org/software/bash/bash.html)
- [Super Technique 講座～bash 超プログラム術](http://www.nurs.or.jp/~sug/soft/super/bash.htm)
- [UNIX &amp; Linux コマンド・シェルスクリプト リファレンス](http://shellscript.sunone.me/)
- [sedのお勉強](http://qiita.com/takc923/items/bdce8c1a2126cac52492)
- [Linux上のプロセスを監視して、プロセスがダウンしたら再起動させるShell](http://tech.thekyo.jp/linux%E4%B8%8A%E3%81%AE%E3%83%97%E3%83%AD%E3%82%BB%E3%82%B9%E3%82%92%E7%9B%A3%E8%A6%96%E3%81%97%E3%81%A6%E3%80%81%E3%83%97%E3%83%AD%E3%82%BB%E3%82%B9%E3%81%8C%E3%83%80%E3%82%A6%E3%83%B3%E3%81%97/91/)

## シェルスクリプト {#e6dabee0}

### pdfupLaTeX <a id="pdfuplatex"></a> {#u19cdc5d}

***

- pdfuplatex

***

```
#!/bin/sh
uplatex -synctex=1 "$1" && \
dvipdfmx "`basename "$1" .tex`"
```

***

### pdfupLaTeX2 <a id="pdfuplatex2"></a> {#t952e801}

***

- pdfuplatex2

***

```
#!/bin/sh
uplatex -synctex=1 "$1" && \
dvips -Ppdf -z -f "`basename "$1" .tex`.dvi" | \
convbkmk -u > "`basename "$1" .tex`.ps" && \
ps2pdf "`basename "$1" .tex`.ps"
```

***
