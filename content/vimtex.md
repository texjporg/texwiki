---
title: "vimtex"
url: "/vimtex/"
date: 2015-03-22T22:25:08Z
pukiwiki: "vimtex"
---

# vimtex

[Vim](/Vim/) > vimtex

## vimtex {#z107ab3c}

vimtex は Vim の LaTeX プラグインです．

- [https://github.com/lervag/vimtex](https://github.com/lervag/vimtex)

***

***

## 設定 {#rdcb7242}

- [https://github.com/lervag/vimtex/blob/master/doc/vimtex.txt](https://github.com/lervag/vimtex/blob/master/doc/vimtex.txt)
- [https://github.com/lervag/dotvim/blob/master/vimrc](https://github.com/lervag/dotvim/blob/master/vimrc)
- [【解決済】vimtex 更新で vim + vimtex + latexmk + (p)latex + dvipdfm(x) 環境が壊れる問題](https://www8281uo.sakura.ne.jp/blog/?p=626) --&gt; let g:vimtex_compiler_latexmk_engines = { '\_' : '-pdfdvi' }
- [CLIのneovimでSkimとSyncTeXするには](http://qiita.com/KeitaNakamura/items/87dad47dc09ae8bf6abf)
- [vimtexでuplatexがコンパイルできない（vimtex_compiler_latexmkの設定）](https://sakura-education.com/myblog/archives/936)

vimtex はタイプセットに Latexmk を使用します．
[Latexmk](/Latexmk/) を参照して latexmk の設定ファイルを作成して $HOME/vimfiles/vimrc (Windows), $HOME/.vim/vimrc (macOS, Linux) に

```
let g:vimtex_compiler_latexmk_engines = { '_' : '-pdfdvi' }
```

を記述してください．

vimtex 以外の Vim プラグインとしては，[tex.vim](/Vim/tex.vim/)，LaTeX Box，[quickrun](/quickrun/) があります．

## 使い方 {#x2ba2b16}

### タイプセット・プレビュー {#of23796d}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#57E;text-align:center">ノーマルモード</th><th style="color:#FFF;background-color:#57E;text-align:center">機能</th></tr>
> <tr><td>\ll</td><td>タイプセットまたはタイプセット &amp; プレビュー</td></tr>
> <tr><td>\lv</td><td>プレビューまたは forward search</td></tr>
> <tr><td>\lL</td><td>選択した範囲をタイプセット &amp; プレビュー</td></tr>
> </tbody>
> </table>
>

### 補完 {#j3b2ffeb}

#### [オムニ補完](https://sites.google.com/site/vimdocja/usr_24-html#24.3) {#hf037673}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#57E;text-align:center">インサートモード</th><th style="color:#FFF;background-color:#57E;text-align:center">機能</th></tr>
> <tr><td>&lt;CTRL-X&gt;&lt;CTRL-O&gt;</td><td>オムニ補完</td></tr>
> </tbody>
> </table>
>

## 関連リンク {#h40db22e}

### License {#h515d5d7}

MIT License

### ChangeLog {#f919eebd}

- [https://github.com/lervag/vimtex/commits/master](https://github.com/lervag/vimtex/commits/master)
