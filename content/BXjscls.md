---
title: "BXjscls"
url: "/BXjscls/"
date: 2013-10-22T19:25:42Z
pukiwiki: "BXjscls"
---

# BXjscls

## [BXjscls](http://zrbabbler.sp.land.to/bxjscls.html) {#l3cac28c}

BXjscls は pdflatex, lualatex, xelatex, uplatex, platex で使用可能な日本語組版のための LaTeX 文書クラスです．
TeX Live, W32TeX に含まれています．

奥村先生の「[pLaTeX2e 新ドキュメントクラス](http://oku.edu.mie-u.ac.jp/~okumura/jsclasses/)」は pLaTeX2e での使用を前提としているため，uplatex, platex 以外では使用することができません．
BXjscls は新ドキュメントクラスから pLaTeX 依存の部分を取り除いたもので，これと各エンジン用の日本語処理パッケージを組み合わせることで，pLaTeX 以外でも新ドキュメントクラスを用いた場合と同等の文書作成が可能となります．

- [https://github.com/zr-tex8r/BXjscls](https://github.com/zr-tex8r/BXjscls)
- [http://www.ctan.org/pkg/bxjscls](http://www.ctan.org/pkg/bxjscls)
- [http://www.ctan.org/tex-archive/language/japanese/BX/bxjscls](http://www.ctan.org/tex-archive/language/japanese/BX/bxjscls)

### ChangeLog {#je081c38}

- [https://github.com/zr-tex8r/BXjscls](https://github.com/zr-tex8r/BXjscls)
    - [https://github.com/zr-tex8r/BXjscls/commits/](https://github.com/zr-tex8r/BXjscls/commits/)
- \[[texlive\] Index of /trunk/Master/texmf-dist/tex/latex/bxjscls](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/latex/bxjscls/)
    - [log](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/tex/latex/bxjscls/?view=log)

## 不具合 {#x3d34063}

### graphicx に明示的に xetex オプションを指定して xelatex で処理すると ! LaTeX Error: Option clash for package graphicx. {#oe701641}

bxjsarticle 2013/10/03 v0.9pre で以下の文書を xelatex で処理すると <strong>! LaTeX Error: Option clash for package graphicx.</strong> が発生します．<br>

***

```
\documentclass[xelatex,jadriver=standard]{bxjsarticle}
\usepackage[xetex]{graphicx}
\begin{document}

吾輩は猫である。名前はまだ無い。

どこで生れたかとんと見当がつかぬ。
何でも薄暗いじめじめした所で
ニャーニャー泣いていた事だけは記憶している。
吾輩はここで始めて人間というものを見た。

\end{document}
```

***

graphicx の xetex オプション指定をはずすとタイプセットできます．<br>

***

```
\documentclass[xelatex,jadriver=standard]{bxjsarticle}
\usepackage{graphicx}
\begin{document}

吾輩は猫である。名前はまだ無い。

どこで生れたかとんと見当がつかぬ。
何でも薄暗いじめじめした所で
ニャーニャー泣いていた事だけは記憶している。
吾輩はここで始めて人間というものを見た。

\end{document}
```

***

## 使い方 {#g8a35a3c}

- [「BXjscls」の検索結果一覧 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/archive?word=BXjscls)
- [BXjscls の pdflatex で日本語組版をしてみた](http://konoyonohana.blog.fc2.com/blog-entry-76.html)

を参照．
