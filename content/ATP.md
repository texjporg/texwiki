---
title: "ATP"
url: "/ATP/"
date: 2011-08-23T16:40:45Z
pukiwiki: "ATP"
---

# ATP

[Vim](/Vim/) > Automatic LaTeX Plugin for Vim (ATP)

## [Automatic LaTeX Plugin for Vim (ATP)](http://atp-vim.sourceforge.net/) {#j0660b72}

<img src="http://atp-vim.sourceforge.net/vim-logo-128.png" alt="Automatic LaTeX Plugin (ATP)" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

<div style="clear:both"></div>

## Automatic LaTeX Plugin for Vim (ATP) とは {#x5205d30}

Automatic LaTeX Plugin for Vim (ATP) は [Vim](/Vim/) で LaTeX ドキュメントを編集，コンパイル，プレビューするためのプラグインです．<br>
ATP は GPLv3 でリリースされています．<br>
ATP は Vim 7.3 以上で動作します．<br>

GVim 7.3.034 よりも前のバージョンには DLL 読み込みに関する脆弱性が存在します．<br>
最新版へアップデートしてください．<br>
詳細は [GVim における DLL 読み込みに関する脆弱性](http://jvn.jp/jp/JVN27868039/) を参照してください．<br>

GVim 7.3.344 で UNIX 系 の GVim で起動時にハングしたり起動が遅くなったりしていた問題が修正されました．<br>
Gvim 7.3.520 で Ubuntu 12.04 でパッケージマネージャ経由でインストールされた GVim が起動時に数十秒ハングする問題が修正されました．<br>

- [Automatic LaTeX Plugin (ATP)](http://atp-vim.sourceforge.net/)
    - [ATP Requirements](http://atp-vim.sourceforge.net/requirements.shtml)
- [Automatic LaTex Plugin for Vim at SourceForge](http://sourceforge.net/projects/atp-vim/)
- [SourceForge - atp-vim/atp-vim/summary](http://atp-vim.git.sourceforge.net/git/gitweb.cgi?p=atp-vim/atp-vim)
    <!-- - -[[コミットログ:http://atp-vim.svn.sourceforge.net/viewvc/atp-vim/trunk/?view=log]] -->

- [AutomaticTexPlugin - Background compilation, completion, bib serch, toc and other nice features. : vim online](http://www.vim.org/scripts/script.php?script_id=2945)
- [vim-scripts/AutomaticLaTexPlugin - GitHub](https://github.com/vim-scripts/AutomaticLaTeXPlugin)

## ATP の動作に必要なもの {#g428a1c8}

ATP の動作には

- [Python](http://www.python.org/)
- [psutil](http://code.google.com/p/psutil/)

が必要です．

Python と psutil がインストールされていない場合はこれらをインストールしておいてください．

## ダウンロード/インストール {#n5f1b86f}

- [Automatic LaTex Plugin for Vim -  Browse Files at SourceForge.net](http://sourceforge.net/projects/atp-vim/files/)
    - [安定版](http://sourceforge.net/projects/atp-vim/files/releases/)
    - [開発版](http://sourceforge.net/projects/atp-vim/files/snapshots/)

からパッケージをダウンロードします．

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

- $HOME/.vimrc (UNIX, Linux)
- $HOME/\_vimrc (Windows)

に設定を記述します．

***

```
""
"" Automatic LaTeX Plugin (ATP)
""
filetype plugin on
filetype indent on
syntax on
let g:atp_folding = 1
let g:atp_fold_environments = 1
```

***

## 使い方 {#w8da234e}

### 折りたたみ {#dcf34c0d}

デフォルトでは折りたたみは off になっています．

```
let g:atp_folding = 1
```

を追加すると折りたたみが on になります．

environments の折りたたみ を on にする場合は

```
let g:atp_fold_environments = 1
```

を追加します．

カーソル位置の折りたたみを開く場合は &lt;Space> で代用できます．

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#40C;text-align:center">ノーマルモード</th><th style="color:#FFF;background-color:#40C;text-align:center">機能</th></tr>
> <tr><td>&lt;Space&gt;</td><td>カーソル位置の折りたたみを開いて桁を1つ進める</td></tr>
> </tbody>
> </table>
>

[Vim#使い方#折りたたみ](/Vim/#ff31000b) も参照してください．

### コンパイル・プレビュー {#x0397616}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#40C;text-align:center">メニュー [LaTeX]</th><th style="color:#FFF;background-color:#40C;text-align:center">ノーマルモード</th><th style="color:#FFF;background-color:#40C;text-align:center">コマンドラインモード</th><th style="color:#FFF;background-color:#40C;text-align:center">機能</th></tr>
> <tr><td>pdfLaTeX</td><td>\l</td><td>:TEX</td><td>pdfLaTeX</td></tr>
> <tr><td>Bibtex</td><td>\b</td><td>:Bibtex</td><td>BibTeX</td></tr>
> <tr><td>View Output</td><td>\v</td><td>:ViewOutput</td><td>プレビュー</td></tr>
> </tbody>
> </table>
>

\l, \b, \v は素早く入力する必要があります．

***

<span style="color:Black;background-color:#4E03C7;"><ins>　</ins></span>[<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/200px-Vimlogo.svg.png" alt="welcome home : vim online" width="28" height="28">](http://www.vim.org/)<span style="color:Black;background-color:#4E03C7;"><ins>　<span style="color:White;"><strong>vim.tex - GVIM1</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#3E03B7;"></ins>\[ <span style="color:White;"><strong>◛</strong></span> \]<ins></span><span style="color:Black;background-color:#3E03B7;"></ins>\[ <span style="color:White;"><strong>▭</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<span style="color:Black;background-color:#DAE0FE;"><ins>　　ファイル(F)　 編集(E)　 ツール(T)　 シンタックス(S)　 バッファ(B)　 ウィンドウ(W)　 LaTeX　 ヘルプ(H)　　　</ins></span><br>

***

ATP 10.6 のコンパイル・プレビューは Windows ではうまく動作しません．<br>
コンパイル・プレビューは [Make - TeX Wiki](/Make/) を参考にして Latexmk や OMake などを使ってください．<br>

### 移動 {#xdfac89b}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#40C;text-align:center">ノーマルモード</th><th style="color:#FFF;background-color:#40C;text-align:center">インサートモード</th><th style="color:#FFF;background-color:#40C;text-align:center">移動</th></tr>
> <tr><td>&lt;CTRL-J&gt;</td><td>&lt;CTRL-J&gt;</td><td>次に進む</td></tr>
> </tbody>
> </table>
>

&#x3c;CTRL-J> を入力すると [Vim-LaTeX](/Vim-LaTeX/) のような place holder の機能が実現できます．<br>
ただし &lt;++> のように TeX ファイルに place holder を出力しません．

### 補完 {#v9176e7e}

#### [オムニ補完](https://sites.google.com/site/vimdocja/usr_24-html#24.3) {#i3ad1ad9}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#40C;text-align:center">インサートモード</th><th style="color:#FFF;background-color:#40C;text-align:center">機能</th></tr>
> <tr><td>&lt;CTRL-X&gt;&lt;CTRL-O&gt;</td><td>オムニ補完</td></tr>
> </tbody>
> </table>
>

ATP では基本的に補完はオムニ補完 &lt;CTRL-X>&lt;CTRL-O> を入力します．<br>

```
\be<CTRL-X><CTRL-O> で  \begin{
\begin{i<CTRL-X><CTRL-O> で \begin{itemize}
\i<CTRL-X><CTRL-O> で \item などの補完候補が表示されます
補完候補のリストは <CTRL-N>, <CTRL-P> で移動できます
```

<!-- \item の入力が終わって <CTRL-X><CTRL-O> を入力すると \end{itemize} が補完されます -->

#### Environment Imaps {#odbdb26f}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#40C;text-align:center">インサートモード</th><th style="color:#FFF;background-color:#40C;text-align:center">補完</th></tr>
> <tr><td>]b</td><td>\begin{}</td></tr>
> <tr><td>]e</td><td>\end{}</td></tr>
> <tr><td>]I</td><td>\begin{itemize}<br>\item<br>\end{itemize}<br></td></tr>
> <tr><td>]i</td><td>\item</td></tr>
> </tbody>
> </table>
>

\]I を素早く入力すると \begin{itemize}\item\end{itemize} を補完します．<br>

```
\begin{itemize}
  \item
\end{itemize}
```

\]i を素早く入力すると \item を補完します．<br>

```
\item
```

#### Math Imaps Misc {#e8334d60}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#40C;text-align:center">インサートモード</th><th style="color:#FFF;background-color:#40C;text-align:center">補完 (数式モード)</th></tr>
> <tr><td>#/</td><td>\frac{}{}</td></tr>
> </tbody>
> </table>
>

数式モード中で #/ を素早く入力すると \frac{}{} を補完します．<br>

```
$\frac{}{}
```

#### Font Commands {#l4bb69da}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#40C;text-align:center">インサートモード</th><th style="color:#FFF;background-color:#40C;text-align:center">補完</th><th style="color:#FFF;background-color:#40C;text-align:center">補完 (数式モード)</th></tr>
> <tr><td>##rm</td><td>\textrm{}</td><td>\mathrm{}</td></tr>
> </tbody>
> </table>
>

##rm を素早く入力すると \textrm{} を補完します．<br>

```
\textrm{}
```

数式モード中で ##rm を素早く入力すると \mathrm{} を補完します．<br>

```
$\mathrm{}
```

#### Greek Letters {#ufe42a77}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#40C;text-align:center">インサートモード</th><th style="color:#FFF;background-color:#40C;text-align:center">補完 (数式モード)</th></tr>
> <tr><td>#a</td><td>\alpha</td></tr>
> </tbody>
> </table>
>

数式モード中で #a を素早く入力すると \alpha を補完します．<br>

```
$\alpha
```
