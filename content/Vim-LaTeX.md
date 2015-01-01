---
title: "vim-latex"
url: "/vim-latex/"
date: 2014-10-28T03:23:57Z
pukiwiki: "vim-latex"
---

# vim-latex

[Vim](/Vim/) > vim-latex

## [vim-latex](https://github.com/lervag/vim-latex) → 問題が発生する場合は [tex.vim](/Vim/tex.vim/) または LaTeX Box または [quickrun](/quickrun/) を使用する {#g346a447}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## vim-latex とは {#o7968673}

vim-latex は Vim の LaTeX プラグインです．<br>

- [https://github.com/lervag/vim-latex](https://github.com/lervag/vim-latex)

### Licensen {#h13da126}

MIT License

### ChangeLog {#d6db27ee}

- [https://github.com/lervag/vim-latex/commits/master](https://github.com/lervag/vim-latex/commits/master)

## 不具合 {#s52eaaa5}

### let g:latex_latexmk_output = 'pdfdvi' を設定して \lv でプレビューしようとすると Can't view: Output file is not readable! と表示される → view.vim の let outfile = g:latex#data\[b:latex.id\].out() を let outfile = fnamemodify(g:latex#data\[b:latex.id\].base, ":p:r") . '.pdf' に修正する {#x9b144a5}

let g:latex_latexmk_output = 'pdfdvi' を設定して \lv でプレビューしようとすると Can't view: Output file is not readable! と表示されます．<br>
g:latex_latexmk_output の設定が outfile の拡張子に反映されてしまうのが原因です．<br>

view.vim の

```
let outfile = g:latex#data[b:latex.id].out()
```

をコメントアウトして

```
"let outfile = g:latex#data[b:latex.id].out()
```

次の行に

```
let outfile = fnamemodify(g:latex#data[b:latex.id].base, ":p:r") . '.pdf'
```

を追加します．<br>

## 設定 {#i0954e9c}

vim-latex はタイプセットに Latexmk を使用します．<br>
[Latexmk](/Latexmk/) を参照して latexmk の設定ファイルを作成してください．<br>
vim-latex が動作しない場合は [tex.vim](/Vim/tex.vim/) または LaTeX Box または [quickrun](/quickrun/) を使用してタイプセットしてください．<br>

### Windows {#u832ac80}

SumatraPDF.exe が存在するディレクリを環境変数 PATH に追加します．<br>
PATH に追加したくない場合は<br>
view.vim の

```
call s:check_method_sumatrapdf()
```

をコメントアウトして<br>

```
"call s:check_method_sumatrapdf()
```

view.vim の

```
let exe.cmd = 'SumatraPDF ' . g:latex_view_sumatrapdf_options
```

を

```
let exe.cmd = 'rundll32 shell32,ShellExec_RunDLL SumatraPDF ' . g:latex_view_sumatrapdf_options
```

に修正します．<br>

***

```
""
"" vim-latex
""
let g:latex_latexmk_continuous = 1
let g:latex_latexmk_background = 1
"let g:latex_latexmk_output = 'pdf'
let g:latex_latexmk_output = 'pdfdvi'
"let g:latex_latexmk_output = 'pdfps'
let g:latex_view_method = 'sumatrapdf'
let g:latex_view_sumatrapdf_options = '-reuse-instance -inverse-search "\"' . $VIM . '\gvim.exe\" -n --remote-silent +\%l \"\%f\""'
let g:latex_view_general_viewer = 'texworks'
```

***

### OS X {#qb1b9436}

- [LaTeX-suite じゃない vim-latex を使ってvimによるLaTeX作成環境を整える](http://mmi.hatenablog.com/entry/2015/01/02/003517)

***

```
""
"" vim-latex
""
let g:latex_latexmk_continuous = 1
let g:latex_latexmk_background = 1
"let g:latex_latexmk_output = 'pdf'
let g:latex_latexmk_output = 'pdfdvi'
"let g:latex_latexmk_output = 'pdfps'
let g:latex_view_general_viewer = 'open'
```

***

### Linux {#wb2cfac5}

***

```
""
"" vim-latex
""
let g:latex_latexmk_continuous = 1
let g:latex_latexmk_background = 1
"let g:latex_latexmk_output = 'pdf'
let g:latex_latexmk_output = 'pdfdvi'
"let g:latex_latexmk_output = 'pdfps'
let g:latex_view_method = 'mupdf'
let g:latex_view_general_viewer = 'xdg-open'
```

***

## 使い方 {#r2f5a425}

### タイプセット・プレビュー {#w62b0f3d}

let g:latex_latexmk_continuous = 1 の場合は latexmk のオプションに -pvc が追加され，\ll を実行したあとでファイルを保存すれば自動的にタイプセットが行われます．<br>

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#57E;text-align:center">ノーマルモード</th><th style="color:#FFF;background-color:#57E;text-align:center">機能</th></tr>
> <tr><td>\ll</td><td>タイプセット (let g:latex_latexmk_continuous = 1 の場合はタイプセット &amp; プレビュー)</td></tr>
> <tr><td>\lv</td><td>プレビュー &amp; forward search</td></tr>
> </tbody>
> </table>
>

### 補完 {#q3719b55}

#### [オムニ補完](https://sites.google.com/site/vimdocja/usr_24-html#24.3) {#x8c6a0ed}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#57E;text-align:center">インサートモード</th><th style="color:#FFF;background-color:#57E;text-align:center">機能</th></tr>
> <tr><td>&lt;CTRL-X&gt;&lt;CTRL-O&gt;</td><td>オムニ補完</td></tr>
> </tbody>
> </table>
>
