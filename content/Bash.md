---
title: "Bash"
url: "/Bash/"
date: 2013-08-20T04:59:56Z
pukiwiki: "Bash"
---

# Bash

## Bash {#f79a5d3a}

- [Bash - GNU Project - Free Software Foundation](http://www.gnu.org/software/bash/bash.html)
- [Super Technique 講座～bash 超プログラム術](http://www.nurs.or.jp/~sug/soft/super/bash.htm)
- [UNIX &amp; Linux コマンド・シェルスクリプト リファレンス](http://shellscript.sunone.me/)
- [sedのお勉強](http://qiita.com/takc923/items/bdce8c1a2126cac52492)

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
