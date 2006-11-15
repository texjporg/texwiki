---
title: "cm-super"
url: "/cm-super/"
date: 2005-01-05T08:17:56Z
pukiwiki: "cm-super"
---

# cm-super

<!-- http://oku.edu.mie-u.ac.jp/~okumura/texfaq/cm-super.html -->

## cm-super {#vb256d79}

[CTAN:fonts/ps-type1/cm-super/](https://mirror.ctan.org/fonts/ps-type1/cm-super/) でミラーされています。 
[cm-super.tar.gz](https://mirror.ctan.org/fonts/ps-type1/cm-super.tar.gz) の形で圧縮ダウンロードしても 60 MB 以上あります。

### インストール： {#iaa9cbb7}

```
mv pfb /usr/local/teTeX/share/texmf/fonts/type1/public/cm-super
mv dvips /usr/local/teTeX/share/texmf/dvips/cm-super
mv dvipdfm/* /usr/local/teTeX/share/texmf/dvipdfm/config/
# 以下は必要なし。ディスクが溢れる可能性あり :-)
# mv afm /usr/local/teTeX/share/texmf/fonts/afm/public/cm-super
# cd /usr/local/teTeX/share/texmf/fonts/afm/public/cm-super/
# gunzip *.afm.gz
```

dvips で使う場合は /usr/local/teTeX/share/texmf/dvips/config/config.ps に次のように追加しておきます。 

```
p +cm-super-t1.map
p +cm-super-ts1.map
p +cm-super-t2a.map
p +cm-super-t2b.map
p +cm-super-t2c.map
p +cm-super-x2.map
```

dvipdfm(x) で使う場合は /usr/local/teTeX/share/texmf/dvipdfm/config/config および dvipdfmx.cfg に次のように追加しておきます。 

```
f cm-super-t1.map
f cm-super-t2a.map
f cm-super-t2b.map
f cm-super-t2c.map
f cm-super-ts1.map
f cm-super-x2.map
```

pdfTeX で使う場合は /usr/local/teTeX/share/texmf/pdftex/config/pdftex.cfg に次のように追加しておきます。 

```
map +cm-super-t1.map
map +cm-super-ts1.map
map +cm-super-t2a.map
map +cm-super-t2b.map
map +cm-super-t2c.map
map +cm-super-x2.map
```
