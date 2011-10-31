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

GVim 7.3.344 で UNIX 系 の GVim で起動時にハングしたり起動が遅くなったりしていた問題が修正されました．<br>

- [Automatic LaTeX Plugin (ATP)](http://atp-vim.sourceforge.net/)
    - [ATP Requirements](http://atp-vim.sourceforge.net/requirements.shtml)
- [Automatic LaTex Plugin for Vim at SourceForge](http://sourceforge.net/projects/atp-vim/)
    - [コミットログ](http://atp-vim.svn.sourceforge.net/viewvc/atp-vim/trunk/?view=log)
- [AutomaticTexPlugin - Background compilation, completion, bib serch, toc and other nice features. : vim online](http://www.vim.org/scripts/script.php?script_id=2945)
- [vim-scripts/AutomaticLaTexPlugin - GitHub](https://github.com/vim-scripts/AutomaticLaTexPlugin)

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

に以下の記述を追加します．

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
コンパイル・プレビューは OMake や latexmk を使ってください．<br>
簡単すぎて身長が伸びるかも．[^1]<br>

- [OMake つかって LaTeX コンパイルしたら簡単すぎて身長が5cm伸びた](http://d.hatena.ne.jp/hayamiz/20081208/1228727272)
- [latexmk つかって LaTeX コンパイルしたら簡単すぎて身長が10cm伸びた](http://d.hatena.ne.jp/yambi/20091117/1258452926)

### 補完 {#v9176e7e}

#### Tab 補完 {#m1120519}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#40C;text-align:center">インサートモード</th><th style="color:#FFF;background-color:#40C;text-align:center">機能</th></tr>
> <tr><td>&lt;Tab&gt;</td><td>Tab 補完</td></tr>
> </tbody>
> </table>
>

ATP では基本的に補完は &lt;Tab> を使用します．<br>
&#x3c;Tab> を入力する代わりに &lt;CTRL-I> を使用することもできます．<br>
&#x3c;Tab> 自身を入力したい場合は &lt;CTRL-V>&lt;Tab> を入力します．<br>

```
\be<Tab> で \begin{
\begin{i<Tab> で \begin{itemize}
\i<Tab> で \item などの補完候補が表示されます
補完候補のリストは <CTRL-N>, <CTRL-P> で移動できます
\item の入力が終わって <Tab> を入力すると \end{itemize} が補完されます
カーソルは \end{itemize} の後に自動的に移動します
```

#### [オムニ補完](https://sites.google.com/site/vimdocja/usr_24-html#24.3) {#i3ad1ad9}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#40C;text-align:center">インサートモード</th><th style="color:#FFF;background-color:#40C;text-align:center">機能</th></tr>
> <tr><td>&lt;CTRL-X&gt;&lt;CTRL-O&gt;</td><td>オムニ補完</td></tr>
> </tbody>
> </table>
>

オムニ補完 &lt;CTRL-X>&lt;CTRL-O> も使用できます．<br>

```
\be<CTRL-X><CTRL-O> で  \begin{
\begin{i<CTRL-X><CTRL-O> で \begin{itemize}
\i<CTRL-X><CTRL-O> で \item の補完が行われます
\en<CTRL-X><CTRL-O> で \end{
\end{i<CTRL-X><CTRL-O> で \end{itemize}
```

ただし \end{itemize} は自動インデントされないようなので \end{itemize} を補完する場合は &lt;Tab> を使用しましょう．<br>

#### Environment Imaps {#odbdb26f}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#40C;text-align:center">インサートモード</th><th style="color:#FFF;background-color:#40C;text-align:center">補完</th></tr>
> <tr><td>]I</td><td>\begin{itemize}<br>\item<br>\end{itemize}<br></td></tr>
> <tr><td>]i</td><td>\item</td></tr>
> </tbody>
> </table>
>

\]I を素早く入力すると \begin{itemize}\item\end{itemize} を補完します．<br>

```
]I
```

```
\begin{itemize}
	\item
\end{itemize}
```

\]i を素早く入力すると \item を補完します．<br>

```
]i
```

```
\item
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
##rm
```

```
\textrm{}
```

数式モード中で ##rm を素早く入力すると \mathrm{} を補完します．<br>

```
$##rm
```

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
$#a
```

```
$\alpha
```

## 関連リンク {#xc3bb013}

- [軽く使った感じ、vim-latex より Automatic LaTeX Plugin のほうがよさそうに見えますよー……と書いておこう。だれか拾ってくれるかもしれないし。](http://twitter.com/#!/KainokiKaede/status/129702502739357697)
- [ATP のドキュメントを読むと幸せになれるかもしれない。ってか日本語リソース少なすぎワロタだから軽くレビューなどすると良いのかも。 ](http://twitter.com/#!/KainokiKaede/status/129713711647703040)

[^1]: <span style="color:White;background-color:White;">※ただしイケメンに限る</span>
