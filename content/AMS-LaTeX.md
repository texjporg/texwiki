---
title: "AMS-LaTeX"
url: "/AMS-LaTeX/"
date: 2004-10-16T23:09:41Z
pukiwiki: "AMS-LaTeX"
---

# AMS-LaTeX

Alexandru Scorpan から texhax メーリングリスト宛のメ
ール:

I don't know if you know, but I though I'd let you know:
There a new version (v.2) of AMSLaTeX available to download as
[ftp://ftp.ams.org/pub/tex/amsltx2.zip](ftp://ftp.ams.org/pub/tex/amsltx2.zip)

It's funny though that they haven't fixed their \footnote bug, which in
all AMS classes types the footnote mark in the last size used in math
mode.

To see it in action, simply typeset

```
       \documentclass{amsart}
       \begin{document}
       \Huge $G$
       \normalsize Aha\footnote{Wow!}
       \end{document}
```

Here the fix for it: add to your preamble

```
       \makeatletter
       \def\@makefnmark{%
               \leavevmode
               \raise.9ex\hbox{\check@mathfonts
                       \fontsize\sf@size\z@\normalfont%
                               \@thefnmark}%
       }
       \makeatother
```

I think this fix is due to F. Mittelbach.

-- Alex
