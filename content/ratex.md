---
title: "ratex"
url: "/ratex/"
date: 2026-09-23T08:22:41Z
pukiwiki: "ratex"
---

# ratex

## ratex {#s28c5d8a}

ratex は超高速で自己完結型の pure Rust で書かれた TeX エンジンとタイプセット（組版）ツールチェーンです。

- [GitHub - leoliu0/ratex · GitHub](https://github.com/leoliu0/ratex)
- [Rust製TeX「ratex」で日本語PDFを作る：v0.4.0でxeCJKが通るように。Typst・LuaLaTeXとの速度比較](https://zenn.dev/dannchu/articles/ratex-japanese-pdf-typst-benchmark)
- [今更だがRatexの0.3.0版で日本語する件について](https://zrbabbler.hatenablog.com/entry/2026/09/22/062924)
- [ratexがつけられた記事一覧 - Qiita](https://qiita.com/tags/ratex)
    - [とりあえずRatexの仕様をまとめてみた](https://qiita.com/zr_tex8r/items/de9b8d5b108dd3967710)

### インストール {#ye61bf13}

Windows, macOS, Linux のバイナリがあります。ratex 0.4.3 をインストールしたところディスク容量の消費サイズは 583 MB でした。

- [Releases · leoliu0/ratex · GitHub](https://github.com/leoliu0/ratex/releases)

### 使い方 {#h990923c}

#### コマンドラインオプション {#d8f63fc9}

```
PS C:\> ratex --version
ratex 0.4.3 (Rust TeX engine)
PS C:\> ratex --help
usage: texmk [options] file.tex
  -pdf / -xelatex / -lualatex   engine (default: auto from preamble)
  -output-directory DIR         write the final PDF in DIR
  -aux-directory DIR            use DIR for persistent build state
  --cache-directory DIR         use DIR as the private cache root
  -jobname NAME                 job name (default: file stem)
  --keep-intermediates, -k       export auxiliary files beside the PDF
  --keep-logs                    export the transcript beside the PDF
  --optimize-pdf-size            spend more CPU minimizing converted PNG streams
  -c                             remove cached state; preserve the PDF
  -C                             remove cached state and an owned PDF
  -interaction=MODE             passed to the engine (default nonstopmode)
  -halt-on-error                passed to the engine
  --silent, -q                  suppress engine output (default)
  --verbose, -V                 print detailed engine and tool output
  -h, --help                    this text
  -v, --version                 version
```

#### xeCJK {#ub2222d3}

```
\documentclass{scrartcl}
\usepackage{fontspec}
\usepackage{xeCJK}
\setmainfont{HaranoAjiMincho-Regular.otf}
\setCJKmainfont{HaranoAjiMincho-Regular.otf}
\begin{document}
ABCDEあいうえお①
\end{document}
```

上記の文書を xeCJK_test.tex で保存して ratex を実行するとタイプセットできました。xeLaTeX よりも高速にタイプセットできます。

```
PS C:\> ratex -xelatex xeCJK_test.tex
texmk: xelatex compatibility mode uses Ratex, not the XeTeX or LuaTeX runtime.
texmk: build OK: \\?\C:\xeCJK_test.pdf (page count unknown, 1 Ratex pass(es))
```
