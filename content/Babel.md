---
title: "Babel"
url: "/Babel/"
date: 2012-11-25T00:02:31Z
pukiwiki: "Babel"
---

# Babel

## Babel {#r809659f}

Babel は LaTeX で多言語文書を作成するためのパッケージです．<br>

- [CTAN web interface: package babel](http://www.ctan.org/pkg/babel)
- [CTAN web interface: Directory listing for /macros/latex/required/babel](http://www.ctan.org/tex-archive/macros/latex/required/babel)
- [「Babel」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=Babel)
- [日本語 LaTeX による多言語処理](http://www2.tba.t-com.ne.jp/ing/)
- [pTeXと多言語処理](</pTeXと多言語処理/>)
- [新 pTeX とBabel](</新 pTeX とBabel/>)

### japanese {#h2523f84}

#### ChangeLog {#e19afea7}

- \[[texlive\] Index of /trunk/Master/texmf-dist/tex/platex/japanese](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/platex/japanese/)
    - [log](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/platex/japanese/?view=log)
- \[[texlive\] Index of /trunk/Master/texmf-dist/source/platex/japanese](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/source/platex/japanese/)
    - [log](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/source/platex/japanese/?view=log)

#### インストール {#u48e60e8}

TeX Live 2012, MacTeX-2012 を使用している場合は Babel の japanese パッケージはすでにインストールされています．<br>

W32TeX の場合は Babel の japanese パッケージをインストールする必要があります．<br>
インストール方法は以下のとおりです．<br>

1. [CTAN:language/japanese/japanese.zip](https://mirror.ctan.org/language/japanese/japanese.zip) から japanese.zip をダウンロードします．
1. japanese.zip を展開します．
1. 展開すると japanese.ins というファイルがあるので，japanese.ins を C:\w32tex\bin\platex.exe に Drag &amp; Drop します．
1. japanese.ins と同じフォルダに japanese.ldf が作成されます．
1. japanese.ldf をコピーして C:\w32tex\share\texmf-dist\tex\generic\babel にペースト(貼り付け)すればインストール完了です．
1. もし C:\w32tex\share\texmf-dist\ls-R が存在する場合は C:\w32tex\bin\deltexlsr.exe をダブルクリックして C:\w32tex\share\texmf-dist\ls-R を削除してください．

- [funyarara @ Wiki - インストール](http://www35.atwiki.jp/funyarara/pages/43.html) にも japanese.ldf のインストール・設定方法があります．
