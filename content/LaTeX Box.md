---
title: "LaTeX Box"
url: "/LaTeX Box/"
date: 2014-01-25T05:21:22Z
pukiwiki: "LaTeX Box"
---

# LaTeX Box

[Vim](/Vim/) > LaTeX Box

## LaTeX Box → 問題が発生する場合は [tex.vim](/Vim/tex.vim/) または vim-latex または [quickrun](/quickrun/) を使用する {#qb2360b5}

<img src="https://raw.github.com/LaTeX-Box-Team/LaTeX-Box/master/doc/LaTeX-BoX.png" alt="LaTeX Box" width="255" height="255" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## LaTeX Box とは {#b7476093}

LaTeX Box は Vim の LaTeX プラグインです．<br>

- [https://github.com/LaTeX-Box-Team/LaTeX-Box](https://github.com/LaTeX-Box-Team/LaTeX-Box)
- [Latexmkとvim, vim-boxの設定](http://d.hatena.ne.jp/wal-neko/20101119/1290158352)

### License {#b8ba19ac}

GPLv3

### ChangeLog {#k295b876}

- [https://github.com/LaTeX-Box-Team/LaTeX-Box/commits/](https://github.com/LaTeX-Box-Team/LaTeX-Box/commits/)

## 設定 {#w2c299bd}

LaTeX Box はタイプセットに Latexmk を使用します．<br>
[Latexmk](/Latexmk/) を参照して latexmk の設定ファイルを作成してください．<br>
LaTeX Box が動作しない場合は [tex.vim](/Vim/tex.vim/) または [quickrun](/quickrun/) を使用してタイプセットしてください．<br>

### Windows {#o6005237}

タイプセット (ノーマルモードで \ll) すると Compiling to pdf ... there were warnings! が表示されて PDF ファイルが作成されない場合は<br>
latexmk.vim の<br>

```
	let cmd .= ' -e ' . shellescape('$pdflatex =~ s/ / -file-line-error /')
	let cmd .= ' -e ' . shellescape('$latex =~ s/ / -file-line-error /')
```

を

```
	"let cmd .= ' -e ' . shellescape('$pdflatex =~ s/ / -file-line-error /')
	"let cmd .= ' -e ' . shellescape('$latex =~ s/ / -file-line-error /')
```

に修正します．<br>

プレビュー (ノーマルモードで \lv コマンドラインモードで :LatexView) が動作しない場合は<br>
common.vim の<br>

```
let cmd = g:LatexBox_viewer . ' ' . lvargs . ' ' . shellescape(outfile)
```

を<br>

```
let cmd = g:LatexBox_viewer . ' ' . lvargs . ' ' . outfile
```

に修正します．<br>

***

```
""
"" LaTeX Box
""
let g:LatexBox_output_type = 'pdf'
let g:LatexBox_latexmk_options = '-pdfdvi'
let g:LatexBox_viewer = 'rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance -inverse-search "\"' . $VIM . '\gvim.exe\" -n --remote-silent +\%l \"\%f\""'
```

***

### OS X {#ae1545aa}

***

```
""
"" LaTeX Box
""
let g:LatexBox_output_type = 'pdf'
let g:LatexBox_latexmk_options = '-pdfdvi'
let g:LatexBox_viewer = 'open'
```

***

### Linux {#c34997e3}

***

```
""
"" LaTeX Box
""
let g:LatexBox_output_type = 'pdf'
let g:LatexBox_latexmk_options = '-pdfdvi'
let g:LatexBox_viewer = 'xdg-open'
```

***

## 使い方 {#v3610f47}

### タイプセット・プレビュー {#f14973a8}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#57E;text-align:center">ノーマルモード</th><th style="color:#FFF;background-color:#57E;text-align:center">機能</th></tr>
> <tr><td>\ll</td><td>タイプセット</td></tr>
> <tr><td>\lv</td><td>プレビュー</td></tr>
> </tbody>
> </table>
>

### 補完 {#s00ed4b2}

#### [オムニ補完](https://sites.google.com/site/vimdocja/usr_24-html#24.3) {#bd2eeff8}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#57E;text-align:center">インサートモード</th><th style="color:#FFF;background-color:#57E;text-align:center">機能</th></tr>
> <tr><td>&lt;CTRL-X&gt;&lt;CTRL-O&gt;</td><td>オムニ補完</td></tr>
> </tbody>
> </table>
>
