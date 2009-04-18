---
title: "ipsj+jisフォントメトリック"
url: "/ipsj+jisフォントメトリック/"
date: 2009-04-18T23:35:18Z
pukiwiki: "ipsj+jisフォントメトリック"
---

# ipsj+jisフォントメトリック

## 情報処理学会スタイルでjisフォントメトリックを使うには {#v57694e7}

```
\documentclass{ipsjpapers}
```

の前に

```
\DeclareFontShape{JY1}{mc}{m}{n}{<-> jis}{}
\DeclareFontShape{JY1}{gt}{m}{n}{<-> jisg}{}
\DeclareFontShape{JT1}{mc}{m}{n}{<-> tmin10}{}
\DeclareFontShape{JT1}{gt}{m}{n}{<-> tgoth10}{}
```

を入れる。

新しいスタイルはA4横置きになったので，

```
\documentclass{ipsjpapers}
```

の後に

```
\AtBeginDvi{\special{papersize=845pt,597pt}}
```

を入れる（または dvipdfmx に -l オプションを付ける）。
