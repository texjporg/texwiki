---
title: "Xy-pic"
url: "/Xy-pic/"
date: 2015-02-10T04:30:14Z
pukiwiki: "Xy-pic"
---

# Xy-pic

## [Xy-pic](http://www.ctan.org/pkg/xypic) {#b9215e15}

<!-- pic というページから移転し，個別項目としました． (2015-02-10 アセトアミノフェン) -->

Xy-pic は，様々な図式を描くことに特化したパッケージです．
標準の TeX の機能内で描画する機能も持ちますが，[tpic specials](/pic/#xda9ac26) や
[PostScript](/PostScript/) の機能を使って高品質な出力を行う機能もあります．

- [http://tug.org/applications/Xy-pic/Xy-pic.html](http://tug.org/applications/Xy-pic/Xy-pic.html)
- [http://maths.mq.edu.au/~ross/Xy-pic.html](http://maths.mq.edu.au/~ross/Xy-pic.html)
- [http://tug.org/pipermail/xy-pic/](http://tug.org/pipermail/xy-pic/)
- [http://www.math.unm.edu/~loring/links/graph_s07/](http://www.math.unm.edu/~loring/links/graph_s07/)
- [Xy-pic 入門](http://www.math.sci.hokudai.ac.jp/~abenori/tex/index.html#xy-pic)
- [Xy-pic（日本語での解説，より詳しい解説）](http://akagi.ms.u-tokyo.ac.jp/ftp-j.html)
- [Xy-pic - LaTeX パッケージ](http://www.biwako.shiga-u.ac.jp/sensei/kumazawa/tex/xypic.html)
- [xy-picのインストールスクリプト ](http://itchyny.hatenablog.com/entry/20111106/1320541226)
- [Tsukuda--Xypic--](http://www.math.u-ryukyu.ac.jp/~tsukuda/computer/Xy-pic.html)

### 例 {#xd92553b}

ノード近傍の重なり（接触）が多少見苦しい．

```
\documentclass{article} 
\usepackage{amsmath}
\usepackage[all]{xy}
\begin{document}
\xygraph{
 {     {\alpha}*+!D{\quad}="1"
   [r] {\bullet}*+!D{\text{Tokyo}}*+!U{\quad}="t"
   [d] {\bullet}*+!U{{\oalign{{Hachioji}\crcr{Tachikawa}}}} ="h"
     "1" : "t"
     "h" : "t"
     :_*+{\varDelta \tau_1} 
   [rr] {\bullet}*+!D{\text{Nagoya}}*+!U{t_1}
     :_*+{\varDelta \tau_2} 
   [rru] {\bullet}*+!D{\text{Kyoto}}*+!U{t_2} 
     :_*+{\varDelta \tau_3} 
   [rrd] {\bullet}*+!D{\text{Osaka}}*+!U{t_3} 
     :_*+{\varDelta \tau_4} 
   [rr] {\bullet}*+!D{\text{Kobe}}*+!U{\quad} ="k"
   [d] {\bullet}*+!U{\text{Sanda}} ="s"
     "s" : "k"
     "k" :  
   [r] {\beta}*+!D{\quad}
}
\end{document}
```
