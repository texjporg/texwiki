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

- コンパイルは \l
- プレビューは \v

### 補完 {#v9176e7e}

補完は基本的には &lt;Tab> とオムニ補完 &lt;Ctrl-X>&lt;Ctrl-O> を使用します．

```
\be<TAB> で \begin{
\begin{i<TAB> で \begin{itemize}
\i<TAB> で \item などの候補が表示されます
\i<Ctrl-X><Ctrl-O> でオムニ補完による \item の補完が行われます
\item の入力が終わって <Tab> を入力すると \end{itemize} が補完されます
カーソルは \end{itemize} の後に自動的に移動します
```
