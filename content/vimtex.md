---
title: "vimtex"
url: "/vimtex/"
date: 2015-03-22T22:25:08Z
pukiwiki: "vimtex"
---

# vimtex

[Vim](/Vim/) > vimtex

## [vimtex](https://github.com/lervag/vimtex) → 問題が発生する場合は [tex.vim](/Vim/tex.vim/) または LaTeX Box または [quickrun](/quickrun/) を使用する {#z6cb8a04}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## vimtex とは {#eb8e96c5}

vimtex は Vim の LaTeX プラグインです．<br>

- [https://github.com/lervag/vimtex](https://github.com/lervag/vimtex)

### License {#h515d5d7}

MIT License

### ChangeLog {#f919eebd}

- [https://github.com/lervag/vimtex/commits/master](https://github.com/lervag/vimtex/commits/master)

## 設定 {#rdcb7242}

- [https://github.com/lervag/dotvim/blob/master/vimrc](https://github.com/lervag/dotvim/blob/master/vimrc)

vimtex はタイプセットに Latexmk を使用します．<br>
[Latexmk](/Latexmk/) を参照して latexmk の設定ファイルを作成してください．<br>
vimtex が動作しない場合は [tex.vim](/Vim/tex.vim/) または LaTeX Box または [quickrun](/quickrun/) を使用してタイプセットしてください．<br>

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
let g:vimtex_view_sumatrapdf_options = '-reuse-instance -inverse-search "\"' . $VIM . '\gvim.exe\" -n --remote-silent +\%l \"\%f\""'
"let g:vimtex_view_general_viewer = 'texworks'
let g:vimtex_view_general_viewer = 'SumatraPDF'
let g:vimtex_view_general_options = '-reuse-instance -inverse-search "\"' . $VIM . '\gvim.exe\" -n --remote-silent +\%l \"\%f\"" -forward-search @tex @line @pdf'
let g:vimtex_view_general_options_latexmk = '-reuse-instance'
```

***

### OS X {#t8820201}

- [vim-latex/vim-latexからlervag/vimtexに乗り換えた話](http://inaka-boyaki.hatenablog.com/entry/2015/09/15/234310)

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

let g:vimtex_latexmk_continuous = 1 の場合は latexmk のオプションに -pvc が追加され，\ll を実行したあとでファイルを保存すれば自動的にタイプセットが行われます．<br>

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#57E;text-align:center">ノーマルモード</th><th style="color:#FFF;background-color:#57E;text-align:center">機能</th></tr>
> <tr><td>\ll</td><td>タイプセット (let g:vimtex_latexmk_continuous = 1 の場合はタイプセット &amp; プレビュー)</td></tr>
> <tr><td>\lv</td><td>プレビュー &amp; forward search</td></tr>
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
