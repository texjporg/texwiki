---
title: "TeX入門/HTMLとLaTeXの比較"
url: "/TeX入門/HTMLとLaTeXの比較/"
date: 2004-09-10T21:03:15Z
pukiwiki: "TeX入門/HTMLとLaTeXの比較"
---

# TeX入門/HTMLとLaTeXの比較

[FrontPage](/)

## HTML と LaTeX の比較 {#g8b7bce6}

HTML と LaTeX には次のような対応関係があります。 

***

html>                     \documentclass{jarticle}

```
                          または \documentclass{jsarticle} など
```

head>
title>...&lt;/title>
link rel="stylesheet"     % スタイルシートに対応するものは

```
     type="text/css"      % ドキュメントクラスとパッケージ
     href="hoge.css">     \usepackage{txfonts}
```

/head>
body>                     \begin{document}

h1>...&lt;/h1>               \title{題名}

```
                          \author{著者}
                          \date{日付}
                          \maketitle
```

h2>...&lt;/h2>               \section{節見出し}

h3>...&lt;/h3>               \subsection{小節見出し}

p>...                     段落の区切りは
...                        空行で表す

p>...&lt;br>                 段落の途中の強制改行は \\\\
...                        (TeXでは強制改行はあまり使わない)

blockquote>               \begin{quote}

```
 ...                        頭を字下げしない引用
```

/blockquote>              \end{quote}

blockquote>               \begin{quotation}

```
 ...                        頭を字下げする引用
```

/blockquote>              \end{quotation}

ul>                       \begin{itemize}

```
 <li>...                  \item 単なる箇条書き
 <li>...                  \item ...
```

/ul>                      \end{itemize}

ol>                       \begin{enumerate}

```
 <li>...                  \item 番号つき箇条書き
 <li>...                  \item ...
```

/ol>                      \end{enumerate}

!-- ... -->               % パーセントから行末までコメント

pre>                      \begin{verbatim}

```
 ...                        そのまま出力
```

/pre>                     \end{verbatim}

/body>                    \end{document}
/html>
