---
title: "quickrun"
url: "/quickrun/"
date: 2013-11-19T04:22:50Z
pukiwiki: "quickrun"
---

# quickrun

[Vim](/Vim/) > quickrun

## quickrun {#f53cc325}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## quicrun とは {#nc05191d}

quickrun は Vim のプラグインです．<br>

- [https://github.com/thinca/vim-quickrun](https://github.com/thinca/vim-quickrun)

### License {#xf347db8}

[zlib License](https://github.com/thinca/vim-quickrun/blob/master/plugin/quickrun.vim)

## 設定 {#j9d8b43e}

### Windows {#i23c9f0a}

<span style="color:red;"><strong>Windows 環境では set shellslash を設定している場合は quickrun がうまく動作しない可能性があります．</strong></span><br>

<span style="color:red;"><strong>quickrun がうまく動作しない場合は set noshellslash を設定してください．</strong></span><br>

- [shellescape() doesn't work in Windows with 'shellslash' set](https://groups.google.com/forum/#!topic/vim_dev/MEJ3jG-rnR8)

#### pLaTeX (ptex2pdf), TeXworks を使用する場合 {#q2096557}

***

```
""
"" quickrun
""
set noshellslash
let g:quickrun_config = {
\   'tex': {
\       'command': 'ptex2pdf',
\       'exec': ['%c -l -ot "-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode" "%s"', 'texworks "%S:r.pdf"']
\   },
\}
```

***

#### pLaTeX (ptex2pdf), SumatraPDF を使用する場合 {#g53848c7}

***

```
""
"" quickrun
""
set noshellslash
let g:quickrun_config = {
\   'tex': {
\       'command': 'ptex2pdf',
\       'exec': ['%c -l -ot "-guess-input-enc -kanji=utf8 -synctex=1 -interaction=nonstopmode" "%s"', 'rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance "%S:r.pdf"']
\   },
\}
```

***

### OS X {#i9f3f366}

動作未確認です．<br>

#### pLaTeX (ptex2pdf), open を使用する場合 {#m9aff51a}

***

```
""
"" quickrun
""
let g:quickrun_config = {
\   'tex': {
\       'command': 'ptex2pdf',
\       'exec': ['%c -l -ot "-synctex=1 -interaction=nonstopmode" %s', 'open %s:r.pdf']
\   },
\}
```

***

### Linux {#gf5cf76a}

#### pLaTeX (ptex2pdf), xdg-open を使用する場合 {#d6cc8509}

***

```
""
"" quickrun
""
let g:quickrun_config = {
\   'tex': {
\       'command': 'ptex2pdf',
\       'exec': ['%c -l -ot "-synctex=1 -interaction=nonstopmode" %s', 'xdg-open %s:r.pdf']
\   },
\}
```

***

## 関連リンク {#p20fe037}

- [http://twilog.org/ti5942/search?word=quickrun](http://twilog.org/ti5942/search?word=quickrun)
- [vimのbackgroundでtexコンパイルできるようにしたり](http://www.haconeco.com/?p=176)
- [vim-quickrunでMarkdown(Mathjaxつき)](http://rutto-ysgr.net/post/46932083342/vim-quickrun-markdown-mathjax)
- [quickrun.vim について語る](http://d.hatena.ne.jp/osyo-manga/20130311/1363012363)
- [【Linux Mint, vim】日本語のtexをvimで書く環境を整える](http://calorie001.hatenablog.com/entry/2012/12/13/182057)
- [LaTeXをquickrunで楽に処理する](http://d.hatena.ne.jp/itchyny/20121001/1349094989)
- [ほぼ完成？：quickrun.vimでTeX編集してpdfで見る．](http://d.hatena.ne.jp/fijixfiji/20091218/1261117585)
- [http://lingr.com/room/vim/archives/2009/12/16](http://lingr.com/room/vim/archives/2009/12/16)
