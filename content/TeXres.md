---
title: "TeXres"
url: "/TeXres/"
date: 2026-10-05T10:12:33Z
pukiwiki: "TeXres"
---

# TeXres

## TeXres {#n8c32513}

TeXres は、Rust で記述された、単一の実行ファイルで構成される TeX ディストリビューションです。

***

***

- [GitHub - leoliu0/texres · GitHub](https://github.com/leoliu0/texres)
- [Leo Liu — Assistant Professor of Finance](https://leoliu0.github.io/)
    - [Blog — Leo Liu](https://leoliu0.github.io/blog.html)
        - [Why I Built ratex: Modernizing TeX While Waiting for Typst](https://leoliu0.github.io/blog-ratex.html)
- [texresの記事一覧 | Zenn](https://zenn.dev/topics/texres)
    - [ratexはtexresに改名。Rust製TeX「texres」v0.7.0で日本語の文書を作る方法まとめ](https://zenn.dev/dannchu/articles/texres-japanese-guide)
- [今更だがRatexの0.3.0版で日本語する件について](https://zrbabbler.hatenablog.com/entry/2026/09/22/062924)
- [ratexがつけられた記事一覧 - Qiita](https://qiita.com/tags/ratex)
    - [とりあえずRatexの仕様をまとめてみた](https://qiita.com/zr_tex8r/items/de9b8d5b108dd3967710)

### インストール {#ye61bf13}

Windows, macOS, Linux のバイナリがあります。TeXres 0.7.0 をインストールしたところディスク容量の消費サイズは 823 MB でした。

- [Releases · leoliu0/texres · GitHub](https://github.com/leoliu0/texres/releases)

### 使い方 {#h990923c}

#### コマンドラインオプション {#d8f63fc9}

```
PS C:\> texres --version
texres 0.7.0 (Rust TeX engine)
PS C:\> texres --help
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

上記の文書を xeCJK_test.tex で保存して TeXres を実行するとタイプセットできました。

```
PS C:\> texres -xelatex xeCJK_test.tex
texmk: build OK: \\?\C:\xeCJK_test.pdf (1 page, 1 TeXres pass(es))
```

### ChatGPT に「[https://leoliu0.github.io/blog-ratex.html](https://leoliu0.github.io/blog-ratex.html) の内容を日本語にしてください。」と質問した結果 {#v5ca9eb3}

質問：

[https://leoliu0.github.io/blog-ratex.html](https://leoliu0.github.io/blog-ratex.html) の内容を日本語にしてください。

回答：※ratexをTeXresに修正しています。

はい。以下が、リンク先の記事 <strong>「Why I Built TeXres: Modernizing TeX While Waiting for Typst」</strong> の日本語訳です。記事の構成・技術用語・コード例はできるだけ原文に沿っています。

<strong>TeXresを作った理由：Typstを待つ間にTeXを現代化する</strong>

2026年9月 • 読了約8分 • TeXres / Rust / Systems

私はTypstが大好きです。構文はきれいで、コンパイラは現代的なRustで書かれており、インクリメンタルレンダリングも非常に新鮮です。Typstが科学・技術文書作成の未来であることは間違いありません。

しかし、<strong>現在のところ、ほとんどの学術誌にTypstを提出することはできません</strong>。

数学、物理学、経済学、コンピュータサイエンスなどの主要な学術誌のほぼすべて、さらにarXivのようなプレプリントサーバーも、Typstのソースファイルを受け付けていません。LaTeXが必須です。そして、20～30年前に書かれた、不可解なマクロ展開や古いパッケージに依存する40ページもの .cls や .sty テンプレートを提供しています。

学術出版の投稿・組版インフラ全体が刷新されるまで――それには10年以上かかる可能性があります――研究者やエンジニアにとってTeXを扱うことは避けられません。

そこで、現実的な問題はこうなりました。

> <strong>世界が追いつくのを待つことなく、今すぐTeXの毎日の苦痛をどう軽減するか？</strong>

この不満から私が作ったのが、TeXresです。

これは新しい言語を作るものではありません。<strong>従来のLaTeX原稿を変更せずに、2020年代のソフトウェア速度でコンパイルできる、TeXエンジンとツールチェーン全体の現代的な純Rustによる再実装</strong>です。

<strong>1. TeXにおける「毎日の4つの苦痛」</strong>

LaTeXで研究論文を書く人なら、次の問題点をよく知っているでしょう。

- <strong>ツールが細かく分かれすぎている</strong><br>

    <br>

    pdflatex？ xelatex？ lualatex？<br>
    bibtex と biber のどちらを使う？<br>
    そもそも、何回再コンパイルすればよいのかを判断するためだけに、なぜ外部のPerlスクリプト（latexmk）が必要なのか？<br>
    文書をビルドするだけなら、単一のきれいなバイナリ1つで済まないのか？<br>

    <br>

- <strong>ほとんど役に立たない補助ファイルが大量に生成される</strong><br>

    <br>

    たった5ページの原稿でも、フォルダには <strong>.aux、.log、.out、.toc、.bbl、.blg、.fls、.fdb_latexmk、.synctex.gz</strong> などが散乱します。<br>
    補助ファイルの1バイトでも壊れると、手動でディレクトリを消去するまでコンパイラ全体が停止してしまいます。<br>

    <br>

- <strong>直感に反する、暗号のようなエラーメッセージ</strong><br>

    <br>

    何かが壊れると、TeXは恐ろしい ? プロンプトで停止したり、自分が書いていないパッケージ内部のマクロについて、800行にも及ぶ理解不能なトレースバックを吐いたりします。<br>
    しかも、<strong>自分のソースコードのどこが間違っているのかを教えてくれません</strong>。<br>

    <br>

- <strong>コンパイルが非常に遅い</strong><br>

    <br>

    標準的なビルドでは3～4個のサブプロセスを順番に起動し、<strong>kpathsea</strong> を使って10万個ものファイルを検索し、ディスクからすべてを再読み込みします。<br>

    <br>

    文章を1か所修正しただけなのに、5～15秒かかることがあります。<br>

<strong>2. 40年間のボトルネック：なぜ従来のTeXは遅いのか</strong>

標準的なTeX実装（Web2C / pdfTeX / XeTeXなど）は、数十年前にさかのぼります。

Donald Knuthによる組版アルゴリズムは数学的な美しさで伝説的ですが、その周辺の実行モデルには、主に4つのアーキテクチャ上のボトルネックがあります。

> <strong>1. ファイルシステムの過剰アクセス（kpathsea）</strong><br>
>
> <br>
>
> たとえば、<br>
>
> <br>
>
> ```
> \usepackage{amsmath}
> ```
>
> <br>
>
> を実行すると、TeX Liveは10万以上のファイルが存在する巨大なディレクトリツリーを、<strong>kpathsea</strong> ライブラリを使って検索します。<br>
>
> <br>
>
> 現代のOSでは、何千回もの <strong>stat()</strong> や <strong>open()</strong> システムコールが発生し、<strong>たった1文字を組版する前に数百ミリ秒を消費</strong>します。<br>
>
> <br>
>
> <strong>2. サブプロセスの連鎖</strong><br>
>
> <br>
>
> 標準的なビルドでは、単にTeXを実行するだけではありません。<br>
>
> <br>
>
> 引用、相互参照、目次などを解決するために、Perlスクリプトの latexmk が複数のプロセスを制御します。<br>
>
> <br>
>
> たとえば、<br>
>
> <br>
>
> <strong>pdflatex</strong> → <strong>bibtex</strong> → <strong>pdflatex</strong> → 再度必要なら実行……<br>
>
> <br>
>
> という具合です。<br>
>
> <br>
>
> そのたびに、初期化やプロセス生成のコストを丸ごと支払う必要があります。<br>
>
> <br>
>
> <strong>3. インクリメンタルな状態検証がない</strong><br>
>
> <br>
>
> セクション3の単なるタイプミスを修正しただけでも、従来のエンジンは文書全体、パッケージ、マクロ、フォントをディスクから読み込み直し、最初から解析し直します。<br>
>
> <br>
>
> <strong>4. メモリ安全性の問題とセグメンテーションフォルト</strong><br>
>
> <br>
>
> 古典的なTeXエンジンは、C言語の固定サイズの静的配列と手動メモリポインタを使用しています。<br>
>
> <br>
>
> メモリ制限を超えたり、複雑なマクロパッケージ同士が衝突したりすると、理解しにくいエラーダンプや、深刻なクラッシュが発生します。<br>

<strong>3. RustでTeXをゼロから再構築した方法</strong>

Knuthの数学的に正確な組版規則を維持しながら、こうしたボトルネックをなくすため、TeXresは3つの原則に基づいて設計されています。

<strong>A. 100%メモリ上でパッケージを解決</strong>

数GBに及ぶTeX Liveのインストールや、ディスク上のディレクトリ階層を検索する代わりに、<strong>TeXres</strong> は圧縮済みのフォーマット資産と<strong>24,000以上の標準TeXパッケージをバイナリに直接組み込みます</strong>。

文書がパッケージを読み込むと、メモリ上のインデックスから50マイクロ秒未満で解決します。

つまり、

- ディスク検索ゼロ
- パッケージが見つからないというダイアログゼロ

です。

<strong>B. 統合されたシングルパス収束</strong>

外部のPerlラッパーや複数のコマンドラインバイナリを実行する代わりに、TeXresは以下を1つのプロセスに組み込みます。

- TeXエンジン
- パッケージ解決機構
- ネイティブBibTeXインタプリタ
- 依存関係追跡ドライバ

補助的な引用や参照をメモリ上で解析し、複数回のコンパイルが必要になる依存関係を、<strong>1つのライフサイクルの中で収束</strong>させます。

<strong>C. 暗号学的アーティファクトキャッシュ</strong>

TeXresはBLAKE3/xxHashによる状態ハッシュを使った軽量な依存関係グラフを保持します。

1つの段落だけを変更した場合、フォントメトリクス、マクロ定義、変更されていない補助ストリームなどを即座に再利用できます。

その結果、<strong>ウォーム状態でのインクリメンタル再ビルドを10ミリ秒未満に短縮</strong>します。

<strong>4. 実環境での性能：3,000本のarXiv論文</strong>

作者は、数学・物理学・コンピュータサイエンス分野の<strong>実際のarXiv論文3,000本</strong>を使ってTeXresを検証した、としています。

| <strong>処理</strong> | <strong>TeXres</strong> | <strong>TeX Live（pdflatex + latexmk）</strong> | <strong>高速化</strong> |
|---|---|---|---|
| インクリメンタル再ビルド（Warm） | 0.8～8.2 ms | 40～60 ms | 10～70倍 |
| 短い論文（1～3ページ） | 12～45 ms | 450～900 ms | 20～35倍 |
| 長い原稿（15～40ページ） | 180～650 ms | 3,200～7,800 ms | 10～18倍 |
| 数式・引用が多い文書 | 240～780 ms | 4,500～11,200 ms | 14～19倍 |

記事ではさらに、

> 「arXiv全体でクリーンにコンパイルできた。TeXresでは2,620本、TeX Liveでは2,613本で、平均の視覚的ピクセル一致率は96.39%だった」

としています。

<strong>5. コンパイラ級の診断：もう不可解な ? プロンプトとはお別れ</strong>

LaTeXユーザーなら、Knuthによる有名な ? プロンプトがビルドを停止させ、.log ファイルの800行も下にある不可解なメッセージを探す羽目になった経験があるでしょう。

たとえば従来のTeXでは、

```
! Undefined control sequence.
l.14 \textbld
             {Empirical Results}
?
```

のようになります。

何を入力すればよいかわからず、間違った文字を入力すると、50個もの連鎖的な「幽霊エラー」が発生したり、エディタや自動CIパイプラインがハングしたりする可能性があります。

TeXresは現代的なプログラミング言語コンパイラとして設計されているため、1980年代的なターミナルプロンプトを、<strong>rustc</strong> <strong>品質の見やすい診断メッセージ</strong>に置き換えます。

```
error[E0042]: undefined command `\textbld`
  --> document.tex:14:5
   |
14 |     \textbld{Empirical Results}
   |     ^^^^^^^^ help: did you mean `\textbf`?
   = note: macro `\textbld` is not defined in any loaded package
```

主な改善点は次のとおりです。

> - <strong>正確なソースコード範囲</strong>

> - ファイル、行番号、列番号を表示し、ソースコードの該当部分を示します。

> - <strong>あいまいなスペルの候補提示</strong>

> - Levenshtein距離を使って、読み込まれているすべてのマクロから似た名前を探します。

> - たとえば \centr → \center などです。

> - <strong>閉じられていない環境の追跡</strong>

> - \end{equation} を忘れた場合、ファイル末尾でエラーにするのではなく、対応する開始タグを正確に指摘します。

> - <strong>インタラクティブなハングをゼロに</strong>

> - 非対話型ターミナルやCIパイプラインで、モーダルな ? プロンプトによって処理を停止させません。

<strong>6. インストールと使い始め方</strong>

TeXresは<strong>MITおよびApache 2.0ライセンスの完全なオープンソース</strong>です。

Linux、macOS、Windows向けのネイティブパッケージが提供されています。

<strong>Arch Linux（AUR）</strong><br>

```
yay -S texres-bin
```

<strong>macOS</strong><br>

> Homebrew
>
> ```
> brew install leoliu0/texres/texres
> ```
>
> またはネイティブ .pkg を使用します。<br>
>
> <br>
>
> GitHub Releasesから .pkg インストーラーをダウンロードできます。<br>

<strong>Windows</strong><br>

> GitHub Releasesからtexres-setup-…-windows-x64.exeをダウンロードします。<br>

<strong>Ubuntu / Debian</strong><br>

```
sudo apt install ./texres_0.7.1_amd64.deb
```

BibTeXの収束も自動的に処理して論文をコンパイルするには、

```
texres paper.tex
```

とするだけです。

また、VS CodeのLaTeX Workshopに直接組み込むこともできます。

```
"latex-workshop.latex.tools": [
  {
    "name": "texres",
    "command": "texres",
    "args": ["-pdf", "%DOC%"]
  }
]
```

<strong>論文のテストと問題報告への協力</strong>

特殊な論文、独自のスタイルファイル、あるいは珍しいマクロパッケージがコンパイルできない場合は、GitHubでissueを開いてほしい、と作者は呼びかけています。

最小限の再現コードやバグ報告を歓迎しています。

<strong>まとめ</strong>

この記事の主張を簡潔にまとめると、\*\*「Typstが将来的に学術出版を変えるとしても、それまでの間はLaTeX/TeXを使わざるを得ない。ならば、TeXそのものを現代的な実装で高速・扱いやすくしよう」\*\*というのがTeXresを作った動機です。

TeXresは新しい文書言語ではなく、<strong>既存のLaTeX資産をそのまま使えることを重視した、Rust製のTeX再実装</strong>という位置づけです。

なお、記事に掲載されている性能値や「3,000本のarXiv論文で検証した」という結果は<strong>記事の著者による記述</strong>です。上記では原文の主張として翻訳しており、それらのベンチマーク結果自体を独立に検証したものではありません。

[原文（Leo Liuのブログ）](https://leoliu0.github.io/blog-ratex.html)<br>
[TeXres GitHubリポジトリ](https://github.com/leoliu0/texres)<br>
