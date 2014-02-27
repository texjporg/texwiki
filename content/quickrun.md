---
title: "quickrun"
url: "/quickrun/"
date: 2013-11-19T04:22:50Z
pukiwiki: "quickrun"
---

# quickrun

[Vim](/Vim/) > quickrun

## quickrun → 問題が発生する場合は [tex.vim](/Vim/tex.vim/) または LaTeX Box を使用する {#f53cc325}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## quicrun とは {#nc05191d}

quickrun は Vim のプラグインです．<br>

- [https://github.com/thinca/vim-quickrun](https://github.com/thinca/vim-quickrun)

### License {#xf347db8}

[zlib License](https://github.com/thinca/vim-quickrun/blob/master/plugin/quickrun.vim)

## 設定 {#j9d8b43e}

quickrun が動作しない場合は [tex.vim](/Vim/tex.vim/) または LaTeX Box を使用してタイプセットしてください．<br>

### Windows {#i23c9f0a}

<span style="color:red;"><strong>Windows 環境では set shellslash を設定している場合は quickrun がうまく動作しない可能性があります．</strong></span><br>

<span style="color:red;"><strong>quickrun がうまく動作しない場合は set noshellslash を設定してください．</strong></span><br>

- [shellescape() doesn't work in Windows with 'shellslash' set](https://groups.google.com/forum/#!topic/vim_dev/MEJ3jG-rnR8)

#### upLaTeX (ptex2pdf), SumatraPDF を使用する場合 {#vd71076c}

***

```
""
"" quickrun
""
set noshellslash
let g:quickrun_config = {
\   'tex': {
\       'command': 'ptex2pdf',
\       'exec': ['%c -l -u -ot "-no-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode" "%S:t:r.tex"', 'rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance -inverse-search "\"' . $VIM . '\gvim.exe\" -n --remote-silent +\%%l \"\%%f\"" ' . '"%S:r.pdf"']
\   },
\}
```

***

#### pdfLaTeX, SumatraPDF を使用する場合 {#i54ae297}

***

```
""
"" quickrun
""
set noshellslash
let g:quickrun_config = {
\   'tex': {
\       'command': 'pdflatex',
\       'exec': ['%c -synctex=1 -interaction=nonstopmode "%S:t:r.tex"', 'rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance -inverse-search "\"' . $VIM . '\gvim.exe\" -n --remote-silent +\%%l \"\%%f\"" ' . '"%S:r.pdf"']
\   },
\}
```

***

#### LuaLaTeX, SumatraPDF を使用する場合 {#f9b3b6d6}

***

```
""
"" quickrun
""
set noshellslash
let g:quickrun_config = {
\   'tex': {
\       'command': 'lualatex',
\       'exec': ['%c -synctex=1 -interaction=nonstopmode "%S:t:r.tex"', 'rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance -inverse-search "\"' . $VIM . '\gvim.exe\" -n --remote-silent +\%%l \"\%%f\"" ' . '"%S:r.pdf"']
\   },
\}
```

***

#### LuaJITLaTeX, SumatraPDF を使用する場合 {#w61e8fca}

***

```
""
"" quickrun
""
set noshellslash
let g:quickrun_config = {
\   'tex': {
\       'command': 'luajitlatex',
\       'exec': ['%c -synctex=1 -interaction=nonstopmode "%S:t:r.tex"', 'rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance -inverse-search "\"' . $VIM . '\gvim.exe\" -n --remote-silent +\%%l \"\%%f\"" ' . '"%S:r.pdf"']
\   },
\}
```

***

#### XeLaTeX, SumatraPDF を使用する場合 {#bc9b26f0}

***

```
""
"" quickrun
""
set noshellslash
let g:quickrun_config = {
\   'tex': {
\       'command': 'xelatex',
\       'exec': ['%c -synctex=1 -interaction=nonstopmode "%S:t:r.tex"', 'rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance -inverse-search "\"' . $VIM . '\gvim.exe\" -n --remote-silent +\%%l \"\%%f\"" ' . '"%S:r.pdf"']
\   },
\}
```

***

#### Latexmk, SumatraPDF を使用する場合 {#xdc8fa7d}

***

```
""
"" quickrun
""
set noshellslash
let g:quickrun_config = {
\   'tex': {
\       'command': 'latexmk',
\       'exec': ['%c -gg -pdfdvi "%S:t:r.tex"', 'rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance -inverse-search "\"' . $VIM . '\gvim.exe\" -n --remote-silent +\%%l \"\%%f\"" ' . '"%S:r.pdf"']
\   },
\}
```

***

### OS X {#i9f3f366}

動作未確認です．<br>

#### upLaTeX (ptex2pdf), open を使用する場合 {#tad5eb4f}

***

```
""
"" quickrun
""
let g:quickrun_config = {
\   'tex': {
\       'command': 'ptex2pdf',
\       'exec': ['%c -l -u -ot "-synctex=1 -interaction=nonstopmode" %s', 'open %s:r.pdf']
\   },
\}
```

***

#### pdfLaTeX, open を使用する場合 {#l161e4d8}

***

```
""
"" quickrun
""
let g:quickrun_config = {
\   'tex': {
\       'command': 'pdflatex',
\       'exec': ['%c -synctex=1 -interaction=nonstopmode %s', 'open %s:r.pdf']
\   },
\}
```

***

#### LuaLaTeX, open を使用する場合 {#tddb72d5}

***

```
""
"" quickrun
""
let g:quickrun_config = {
\   'tex': {
\       'command': 'lualatex',
\       'exec': ['%c -synctex=1 -interaction=nonstopmode %s', 'open %s:r.pdf']
\   },
\}
```

***

#### LuaJITLaTeX, open を使用する場合 {#ha729285}

***

```
""
"" quickrun
""
let g:quickrun_config = {
\   'tex': {
\       'command': 'luajitlatex',
\       'exec': ['%c -synctex=1 -interaction=nonstopmode %s', 'open %s:r.pdf']
\   },
\}
```

***

#### XeLaTeX, open を使用する場合 {#h421cb4d}

***

```
""
"" quickrun
""
let g:quickrun_config = {
\   'tex': {
\       'command': 'xelatex',
\       'exec': ['%c -synctex=1 -interaction=nonstopmode %s', 'open %s:r.pdf']
\   },
\}
```

***

#### Latexmk, open を使用する場合 {#k1fce662}

***

```
""
"" quickrun
""
let g:quickrun_config = {
\   'tex': {
\       'command': 'latexmk',
\       'exec': ['%c -gg -pdfdvi %s', 'open %s:r.pdf']
\   },
\}
```

***

### Linux {#gf5cf76a}

#### upLaTeX (ptex2pdf), xdg-open を使用する場合 {#he92df34}

***

```
""
"" quickrun
""
let g:quickrun_config = {
\   'tex': {
\       'command': 'ptex2pdf',
\       'exec': ['%c -l -u -ot "-synctex=1 -interaction=nonstopmode" %s', 'xdg-open %s:r.pdf']
\   },
\}
```

***

#### pdfLaTeX, xdg-open を使用する場合 {#gac3cd08}

***

```
""
"" quickrun
""
let g:quickrun_config = {
\   'tex': {
\       'command': 'pdflatex',
\       'exec': ['%c -synctex=1 -interaction=nonstopmode %s', 'xdg-open %s:r.pdf']
\   },
\}
```

***

#### LuaLaTeX, xdg-open を使用する場合 {#me505449}

***

```
""
"" quickrun
""
let g:quickrun_config = {
\   'tex': {
\       'command': 'lualatex',
\       'exec': ['%c -synctex=1 -interaction=nonstopmode %s', 'xdg-open %s:r.pdf']
\   },
\}
```

***

#### LuaJITLaTeX, xdg-open を使用する場合 {#m611735a}

***

```
""
"" quickrun
""
let g:quickrun_config = {
\   'tex': {
\       'command': 'luajitlatex',
\       'exec': ['%c -synctex=1 -interaction=nonstopmode %s', 'xdg-open %s:r.pdf']
\   },
\}
```

***

#### XeLaTeX, xdg-open を使用する場合 {#fbebe70c}

***

```
""
"" quickrun
""
let g:quickrun_config = {
\   'tex': {
\       'command': 'xelatex',
\       'exec': ['%c -synctex=1 -interaction=nonstopmode %s', 'xdg-open %s:r.pdf']
\   },
\}
```

***

#### Latexmk, xdg-open を使用する場合 {#mf599954}

***

```
""
"" quickrun
""
let g:quickrun_config = {
\   'tex': {
\       'command': 'latexmk',
\       'exec': ['%c -gg -pdfdvi %s', 'xdg-open %s:r.pdf']
\   },
\}
```

***

## 使い方 {#ed0812b1}

Vim で TeX ファイルを開いてノーマルモードで \r をタイプします．<br>

## 関連リンク {#p20fe037}

- [latexmkとvim-quickrunとneosnippetでVim-LaTeXを卒業しよう](http://rutto-ysgr.net/post/75144999302/latexmk-vim-quickrun-neosnippet-vim-latex)
- [http://twilog.org/ti5942/search?word=quickrun](http://twilog.org/ti5942/search?word=quickrun)
- [Latexmkとquickrun.vimで快適な執筆環境](http://www.tabitha.mydns.jp/2013/10/10/latexmk%E3%81%A8quickrun-vim%E3%81%A7%E5%BF%AB%E9%81%A9%E3%81%AA%E5%9F%B7%E7%AD%86%E7%92%B0%E5%A2%83/)
- [vimのbackgroundでtexコンパイルできるようにしたり](http://www.haconeco.com/?p=176)
- [vim-quickrunでMarkdown(Mathjaxつき)](http://rutto-ysgr.net/post/46932083342/vim-quickrun-markdown-mathjax)
- [quickrun.vim で msvc のバージョンを指定してコンパイルを行う](http://d.hatena.ne.jp/osyo-manga/20130527/1369658235)
- [quickrun.vim について語る](http://d.hatena.ne.jp/osyo-manga/20130311/1363012363)
- [【Linux Mint, vim】日本語のtexをvimで書く環境を整える](http://calorie001.hatenablog.com/entry/2012/12/13/182057)
- [LaTeXをquickrunで楽に処理する](http://d.hatena.ne.jp/itchyny/20121001/1349094989)
- [vim-quickrunで指定ファイルからコンパイル](http://yozorabiyori.blog116.fc2.com/blog-entry-261.html)
- [quickrun.vim で非同期実行できるようにした](http://d.hatena.ne.jp/thinca/20100212/1265948643)
- [ほぼ完成？：quickrun.vimでTeX編集してpdfで見る．](http://d.hatena.ne.jp/fijixfiji/20091218/1261117585)
- [http://lingr.com/room/vim/archives/2009/12/16](http://lingr.com/room/vim/archives/2009/12/16)
