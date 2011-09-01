---
title: "ATP"
url: "/ATP/"
date: 2011-08-23T16:40:45Z
pukiwiki: "ATP"
---

# ATP

[Vim](/Vim/) > Automatic LaTeX Plugin (ATP)

## [Automatic LaTeX Plugin (ATP)](http://atp-vim.sourceforge.net/) {#j0660b72}

<img src="http://atp-vim.sourceforge.net/vim-logo-128.png" alt="Automatic LaTeX Plugin (ATP)" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

<div style="clear:both"></div>

## Automatic LaTeX Plugin (ATP) とは {#x5205d30}

Automatic LaTeX Plugin (ATP) は [Vim](/Vim/) で LaTeX ドキュメントを編集，コンパイル，プレビューするためのプラグインです．<br>
ATP は GPLv3 でリリースされています．<br>
ATP は Vim 7.3 以上で動作します．<br>

GVim 7.3.034 よりも前のバージョンには DLL 読み込みに関する脆弱性が存在します．<br>
最新版へアップデートしてください．<br>
詳細は [GVim における DLL 読み込みに関する脆弱性](http://jvn.jp/jp/JVN27868039/) を参照してください．<br>

- [Automatic LaTeX Plugin (ATP)](http://atp-vim.sourceforge.net/)
    - [ATP Requirements](http://atp-vim.sourceforge.net/requirements.shtml)
- [Automatic LaTex Plugin for Vim at SourceForge](http://sourceforge.net/projects/atp-vim/)
    - [コミットログ](http://atp-vim.svn.sourceforge.net/viewvc/atp-vim/trunk/?view=log)
- [AutomaticTexPlugin - Background compilation, completion, bib serch, toc and other nice features. : vim online](http://www.vim.org/scripts/script.php?script_id=2945)

## ダウンロード/インストール {#n5f1b86f}

- [安定版](http://sourceforge.net/projects/atp-vim/files/releases/)
- [開発版](http://sourceforge.net/projects/atp-vim/files/snapshots/)

ATP の動作には

- [Python](http://www.python.org/)
- [psutil](http://code.google.com/p/psutil/)

が必要です．

Vim を起動し

```
 :echo $HOME
```

で，$HOME の場所を確認します．

パッケージを展開し

- $HOME/.vim/ (UNIX, Linux)
- $HOME/vimfiles/ (Windows)

に

- autoload/
- colors/
- doc/
- ftplugin/
- syntax/

を配置します．

vimrc に以下の記述を追加します．

***

```
""
"" Automatic LaTeX Plugin (ATP)
""
filetype plugin on
filetype indent on
syntax on
```

***

## 使い方 {#w8da234e}

### コンパイル・プレビュー {#x0397616}

ATP 10.3 のコンパイル・プレビューは Windows ではうまく動作しません．<br>
コンパイル・プレビューは OMake や latexmk を使ってください．<br>
簡単すぎて身長が伸びるかも．[^1]<br>

- [OMake つかって LaTeX コンパイルしたら簡単すぎて身長が5cm伸びた](http://d.hatena.ne.jp/hayamiz/20081208/1228727272)
- [latexmk つかって LaTeX コンパイルしたら簡単すぎて身長が10cm伸びた](http://d.hatena.ne.jp/yambi/20091117/1258452926)

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#40C;text-align:center">メニュー [LaTeX]</th><th style="color:#FFF;background-color:#40C;text-align:center">ノーマルモード</th><th style="color:#FFF;background-color:#40C;text-align:center">機能</th></tr>
> <tr><td>Compile</td><td>\l</td><td>コンパイル</td></tr>
> <tr><td>View Output</td><td>\v</td><td>プレビュー</td></tr>
> </tbody>
> </table>
>

### 補完 {#v9176e7e}

#### 基本的な補完 {#m1120519}

基本的な補完は &lt;TAB> を使用します．

```
\be<TAB> で \begin{
\begin{i<TAB> で \begin{itemize}
\i<TAB> で \item などの候補が表示されます
\item の入力が終わって <TAB> を入力すると \end{itemize} が補完されます
カーソルは \end{itemize} の後に自動的に移動します
```

#### [オムニ補完](https://sites.google.com/site/vimdocja/usr_24-html#24.3) {#i3ad1ad9}

オムニ補完 &lt;CTRL-X>&lt;CTRL-O> も使用できます．

```
\be<CTRL-X><CTRL-O> で  \begin{
\begin{i<CTRL-X><CTRL-O> で \begin{itemize}
\i<CTRL-X><CTRL-O> で \item の補完が行われます
\en<CTRL-X><CTRL-O> で \end{
\end{i<CTRL-X><CTRL-O> で \end{itemize}
ただし \end{itemize} は自動インデントされないようなので \end{itemize} を補完する場合は <TAB> を使用しましょう
```

#### ENVIRONMENT IMAPS {#odbdb26f}

\]I を素早く入力すると \begin{itemize}\item\end{itemize} を補完します．

```
]I
\begin{itemize}
	\item
\end{itemize}
```

\]i を素早く入力すると \item を補完します．

```
]i
\item
```

#### FONT COMMANDS {#l4bb69da}

##rm を素早く入力すると \textrm{} を補完します．

```
##rm
\textrm{}
```

数式モード中で ##rm を素早く入力すると \mathrm{} を補完します．

```
$##rm
$\mathrm{}
```

#### GREEK LETTERS {#ufe42a77}

数式モード中で #a を素早く入力すると \alpha を補完します．

```
$#a
$\alpha
```

[^1]: <span style="color:White;background-color:White;">※ただしイケメンに限る</span>
