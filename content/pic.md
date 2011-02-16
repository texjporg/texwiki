---
title: "pic"
url: "/pic/"
date: 2009-09-12T01:43:50Z
pukiwiki: "pic"
---

# pic

## pic {#ce82732b}

picとは，A Graphics Language for Typesetting

- [http://www.cs.bell-labs.com/10thEdMan/pic.pdf](http://www.cs.bell-labs.com/10thEdMan/pic.pdf)  by Brian W. Kernighan

### dpic {#n4789561}

- [http://www.ece.uwaterloo.ca/~aplevich/dpic](http://www.ece.uwaterloo.ca/~aplevich/dpic)

### gpic {#re376f4f}

- [http://www.math.uiuc.edu/~west/gpic.html](http://www.math.uiuc.edu/~west/gpic.html)  by  Douglas B. West

## xy-pic {#b9215e15}

- [http://tug.org/applications/Xy-pic/](http://tug.org/applications/Xy-pic/)
- [http://www.math.columbia.edu/~lauda/xy/](http://www.math.columbia.edu/~lauda/xy/)
- [http://www.math.unm.edu/~loring/links/graph_s07/](http://www.math.unm.edu/~loring/links/graph_s07/)
- [http://tug.org/pipermail/xy-pic/](http://tug.org/pipermail/xy-pic/)
- [http://www.math.sci.hokudai.ac.jp/~abenori/tex/index.html#xy-pic](http://www.math.sci.hokudai.ac.jp/~abenori/tex/index.html#xy-pic)
- [http://akagi.ms.u-tokyo.ac.jp/ftp-j.html](http://akagi.ms.u-tokyo.ac.jp/ftp-j.html) （日本語での解説，より詳しい解説）

### 例 {#xd92553b}

ノード近傍の重なり（接触）が多少見苦しい

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

## ketpic {#d0d77e0e}

- [http://ketpic.com/](http://ketpic.com/)
