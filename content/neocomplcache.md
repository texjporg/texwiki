---
title: "neocomplcache"
url: "/neocomplcache/"
date: 2011-11-29T14:47:11Z
pukiwiki: "neocomplcache"
---

# neocomplcache

[Vim](/Vim/) > neocomplcache

## [neocomplcache](https://github.com/Shougo/neocomplcache) {#v2e435c4}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## neocomplcache とは {#qfad3d37}

neocomplcache は Vim のプラグインです．

- [neocomplcache](https://github.com/Shougo/neocomplcache)
- [Vim-users.jp - neocomplcache](http://vim-users.jp/tag/neocomplcache/)
- [neocomplcacheとは - はてなキーワード](http://d.hatena.ne.jp/keyword/neocomplcache)

## 不具合 {#k8b031e2}

### neocomplcache で単語の一部を補完すると refresh = always のときに register-. の値がおかしくなる → [Fixed for refresh always problem(experimental)](https://github.com/Shougo/neocomplcache/commit/66985144f271b1d12b43ea70c942575502635511) → Vim [7.3.561](http://code.google.com/p/vim/source/detail?r=a1de7928a7aba45240c85a2bc8d70adadc49e4dc) で修正されました {#d223a02b}

Vim [7.3.561](http://code.google.com/p/vim/source/detail?r=a1de7928a7aba45240c85a2bc8d70adadc49e4dc) で修正されました<br>

- [#97: 補完時のregister-.の挙動の改善 - Issues - vim-jp/issues - GitHub](https://github.com/vim-jp/issues/issues/97)

## ダウンロード/インストール {#fb8cc945}

[neocomplcache](https://github.com/Shougo/neocomplcache) から最新版の neocomplcache をダウンロードします．

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
- doc/
- ftplugin/
- indent/
- plugin/
- syntax/
- .gitignore
- README

を配置します．

- $HOME/.vimrc (UNIX, Linux)
- $HOME/\_vimrc (Windows)

に設定を記述します．

***

```
""
"" neocomplcache
""
let g:neocomplcache_enable_at_startup = 1
imap <C-k>     <Plug>(neocomplcache_snippets_expand)
smap <C-k>     <Plug>(neocomplcache_snippets_expand)
```

***

## 補完 {#j0e0bbeb}

### スニペット補完 {#he9c0c31}

```
\b
```

を入力すると補完候補が表示されます．<br>
補完候補のリストは &lt;CTRL-U>, &lt;CTRL-N>, &lt;CTRL-P> で移動できます．<br>
\begin{itemize} で &#x3c;CTRL-K> を入力するとスニペット補完を行います．<br>
\item の入力が完了して &#x3c;CTRL-K> を入力すると ${0} にジャンプします．<br>

```
\begin{itemize}
  \item 
\end{itemize}
${0}
```

- [neocomplcache-snippets-completeをつかう](http://d.hatena.ne.jp/cobodo/20120612/1339517222)
- [VIM-LaTeXをNeocomplcacheのSnippets補完で再現(1)](http://d.hatena.ne.jp/amone_misya_ap/20111121/1321865189)
- [VIM-LaTeXをNeocomplcacheのSnippets補完で再現(2)](http://d.hatena.ne.jp/amone_misya_ap/20111121/1321865648)
- [$HOME/.vim/after/snippets/tex.snipに置くやつ](http://d.hatena.ne.jp/amone_misya_ap/20111121/1321864865)
- [$HOME/.vim/after/ftplugin/tex.vimに置くやつ](http://d.hatena.ne.jp/amone_misya_ap/20111121/1321864513)

## 関連リンク {#f5958428}

- [Vimで快適なLaTeX環境を作る (Vim-LaTeXを使わずに)](http://d.hatena.ne.jp/amone_misya_ap/20111217/1324120370)
- [Vimで動くLaTeX環境](http://ymatz.net/pukiwiki/index.php?Vim%E3%81%A7%E5%8B%95%E3%81%8FLaTeX%E7%92%B0%E5%A2%83)
