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

- [https://github.com/lervag/dotvim/blob/master/vimrc](https://github.com/lervag/dotvim/blob/master/vimrc)

vimtex はタイプセットに Latexmk を使用します．
[Latexmk](/Latexmk/) を参照して latexmk の設定ファイルを作成してください．

vimtex 以外の Vim プラグインとしては，[tex.vim](/Vim/tex.vim/)，LaTeX Box，[quickrun](/quickrun/) があります．

### Windows {#if79953a}

***

```
""
"" vimtex
""
let g:vimtex_latexmk_continuous = 1
let g:vimtex_latexmk_background = 1
"let g:vimtex_latexmk_options = '-pdf'
let g:vimtex_latexmk_options = '-pdfdvi'
"let g:vimtex_latexmk_options = '-pdfps'
let g:vimtex_view_general_viewer = 'SumatraPDF'
let g:vimtex_view_general_options = '-reuse-instance -inverse-search "\"' . $VIM . '\gvim.exe\" -n --remote-silent +\%l \"\%f\"" -forward-search @tex @line @pdf'
let g:vimtex_view_general_options_latexmk = '-reuse-instance'
"let g:vimtex_view_general_viewer = 'texworks'
```

***

### OS X {#t8820201}

***

```
""
"" vimtex
""
let g:vimtex_latexmk_continuous = 1
let g:vimtex_latexmk_background = 1
"let g:vimtex_latexmk_options = '-pdf'
let g:vimtex_latexmk_options = '-pdfdvi'
"let g:vimtex_latexmk_options = '-pdfps'
"let g:vimtex_view_general_viewer = 'open'
let g:vimtex_view_general_viewer = '/Applications/Skim.app/Contents/SharedSupport/displayline'
let g:vimtex_view_general_options = '@line @pdf @tex'
```

***

### Linux {#ge0c1dc0}

***

```
""
"" vimtex
""
let g:vimtex_latexmk_continuous = 1
let g:vimtex_latexmk_background = 1
"let g:vimtex_latexmk_options = '-pdf'
let g:vimtex_latexmk_options = '-pdfdvi'
"let g:vimtex_latexmk_options = '-pdfps'
let g:vimtex_view_general_viewer = 'xdg-open'
"let g:vimtex_view_general_viewer = 'okular'
"let g:vimtex_view_general_options = '--unique @pdf\#src:@line@tex'
"let g:vimtex_view_general_options_latexmk = '--unique'
"let g:vimtex_view_general_viewer = 'qpdfview'
"let g:vimtex_view_general_options = '--unique @pdf\#src:@tex:@line:@col'
"let g:vimtex_view_general_options_latexmk = '--unique'
```

***

## 使い方 {#x2ba2b16}

### タイプセット・プレビュー {#of23796d}

let g:vimtex_latexmk_continuous = 1 の場合は latexmk のオプションに -pvc が追加され，\ll を実行したあとでファイルを保存すれば自動的にタイプセットが行われます．

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#57E;text-align:center">ノーマルモード</th><th style="color:#FFF;background-color:#57E;text-align:center">機能</th></tr>
> <tr><td>\ll</td><td>タイプセット (let g:vimtex_latexmk_continuous = 1 の場合はタイプセット &amp; プレビュー)</td></tr>
> <tr><td>\lv</td><td>プレビューまたは forward search</td></tr>
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

- [Vim の LaTeX 環境を作ってみた](http://hikaru515.hatenablog.com/entry/2016/04/03/115845)
- [【メモ】vimtexでLuaTeXの環境構築](http://rago1975.blog.shinobi.jp/linux_app/0072)

### License {#h515d5d7}

MIT License

### ChangeLog {#f919eebd}

- [https://github.com/lervag/vimtex/commits/master](https://github.com/lervag/vimtex/commits/master)
