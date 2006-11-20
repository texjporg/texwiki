---
title: "AMS-LaTeX"
url: "/AMS-LaTeX/"
date: 2004-10-16T23:09:41Z
pukiwiki: "AMS-LaTeX"
---

# AMS-LaTeX

## AMS-LaTeX {#wf4b3974}

[AMS-LaTeX](http://www.ams.org/tex/amslatex.html) は
[アメリカ数学会](http://www.ams.org/)（American Mathematical Society）
によって開発されたパッケージおよびクラスファイルです。
AMS-LaTeX は，数式に関する各種のコマンド・環境を定義した amsmath と
アメリカ数学会の組版ルールに従った文書を作るための amscls の 2 つに分けられます。
角藤さんの W32TeX を初めとする多くの TeX システムには最初から含まれていますが，
[http://www.ams.org/tex/amslatex.html](http://www.ams.org/tex/amslatex.html) や
[CTAN:macros/latex/required/amslatex/](https://mirror.ctan.org/macros/latex/required/amslatex/) から入手することができます。

### バグ {#f1f7b248}

AMS-LaTeX で配布されるクラスファイルには脚注に関するバグがあります。
問題は次のソースによって再現します：

```
       \documentclass{amsart}
       \begin{document}
       \Huge $G$
       \normalsize Aha\footnote{Wow!}
       \end{document}
```

これを修正するにはプリアンブルに次のように書けば OK です。

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

以下は，Alexandru Scorpan から texhax メーリングリストに投稿された，
この問題を報告するメールです：

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
