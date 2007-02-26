---
title: "LaTeX コマンドの誤用例"
url: "/LaTeX コマンドの誤用例/"
date: 2007-02-26T02:39:15Z
pukiwiki: "LaTeX コマンドの誤用例"
---

# LaTeX コマンドの誤用例

LaTeX（および各種パッケージ）が提供するコマンドの誤用例であって，
しかも，ユーザ自身ではそれが誤用であることに気づきにくいものを取り上げてみます．

***

#### 箇条書きの環境において，箇条書きの各項目を \item の引数にしている {#pb4e2e9c}

enumerate，itemize といった箇条書きの環境
（内部で list，trivlist 環境を用いている環境）の \item は
<strong>必須の引数をとりません</strong>．

つまり，

```
\begin{itemize}
  \item foo
  \item bar
\end{itemize}
```

のように各項目を余分な括弧で囲まずに記述するのが<strong>正しく</strong>，

```
\begin{itemize}
  \item{foo}
  \item{bar}
\end{itemize}
```

のように各項目を \item の通常の引数であるかのように記述するのは<strong>誤り</strong>です． <!-- この誤用がもたらす問題の一例は [[qa:]] にあります． --> <!-- // TODO: 過去ログにあったはずなので，後で番号を入れる． -->

> なお，\item には項目の番号・記号を直接指定するためのオプション引数はありますが，
> それと混同しないでください．
