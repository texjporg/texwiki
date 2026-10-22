---
title: "Markdown"
url: "/Markdown/"
date: 2013-09-25T23:07:38Z
pukiwiki: "Markdown"
---

# Markdown

## Markdown {#a240b407}

Markdown は軽量マークアップ言語の一種で，プレーンテキスト形式で書いた文書から HTML を生成するために良く用いられています。
[CTAN](/CTAN/) も Markdown 形式のファイル (.md) の表示に対応し，各種パッケージのドキュメント Readme.md が見やすい形式でフォーマットされるようになっています。

- Information/question from the CTAN team (tex-live mailing list)
    - [(1)](https://www.tug.org/pipermail/tex-live/2015-July/037186.html), [(2)](https://www.tug.org/pipermail/tex-live/2015-July/037187.html), [(3)](https://www.tug.org/pipermail/tex-live/2015-July/037188.html), [(4)](https://www.tug.org/pipermail/tex-live/2015-July/037190.html), [(5)](https://www.tug.org/pipermail/tex-live/2015-July/037192.html),[(6)](https://www.tug.org/pipermail/tex-live/2015-July/037192.html)

### エディタ {#vb4c5393}

様々なエディタで Markdown 文書編集のための環境を整えることができます。

- [Visual Studio Code](</Visual Studio Code/>)
    - [Markdown editing with Visual Studio Code](https://code.visualstudio.com/docs/languages/markdown)
- [Emacs](/Emacs/)
    - [Emacs Markdown Mode](http://jblevins.org/projects/markdown-mode/)
- [Vim](/Vim/)
    - [Markdown Vim Mode](https://github.com/plasticboy/vim-markdown)
    - [vim-instant-markdown](https://github.com/suan/vim-instant-markdown)
    - [VimでMarkdown, ブラウザでプレビュー](http://qiita.com/us10096698/items/1ac05c5c9543d2f79fa3)
    - [Vim で GitHub Flavored Markdown をプレビューする](http://superbrothers.hatenablog.com/entry/2013/09/28/123546)

### Markdown から LaTeX への変換 {#v519987b}

- [Pandoc](/Pandoc/)

### Markdown から PDF を生成 {#yab0f4c6}

[markdown-pdf](https://www.npmjs.com/package/markdown-pdf) で Markdown 文書から PDF を生成できます。
markdown-pdf は Markdown 文書をまず HTML へ変換し，[PhantomJS](http://phantomjs.org/) によりレンダリングし，PDF を生成します。PhantomJS は QtWebKit をベースとしたヘッドレスブラウザです。CSS でスタイル付する事ができます。

[Pandoc](/Pandoc/)によってMarkdownからPDFを直接生成できます。日本語を含んだ文書の場合は、

```
$ pandoc input.md -o output.pdf --latex-engine=lualatex -V documentclass=ltjarticle
```

のように、LaTeXエンジンをLuaLaTeXに、ドキュメントクラスを日本語LuaTeX用のもの（上の例ではltjarticle）に指定する必要があります。

### Visual Studio Code による執筆環境 {#v6c4a934}

Visual Studio Code は標準で Markdown 文書のリアルタイム・プレビュー機能を備えています。

### Markdown 記法 {#p66867c9}

段落は空行によって分けられます。

見出しは、

```
 H1 Header
 =========
```

や

```
 h2 header
 ---------
```

のように下線を引きます。

引用は

```
 > これは引用です。
 > 複数行にまたがる引用も可能です。
```

のように　&gt; で行を始めます。

リストは

```
 * リスト
 * リスト
 * リスト
```

や

```
 1. 最初のアイテム
 2. 次のアイテム
 3. 3番目
```

とし、ネストしたリストは、スペース4つでインデントして

```
 1. 最初のアイテム
```

```
     * その子要素
     * ...
```

のようにします。

スペース4つでインデントすることにより、コードブロックを記述します。

その他、詳しくは

- [Markdown文法まとめ](http://qiita.com/higuma/items/3344387e0f2cce7f2cfe)

などを参照してください。

### Markdown 関連リンク {#i482f02d}

- [Markdown](http://daringfireball.net/projects/markdown/)
- [日本語Markdownユーザー会](http://www.markdown.jp/)
- [https://pypi.python.org/pypi/Markdown](https://pypi.python.org/pypi/Markdown)
- [Wikipedia.ja:Markdown](https://ja.wikipedia.org/wiki/Markdown)
- [Markdown CMS Coqoo ―虚空― | Markdown CMS Coqoo ―虚空―](http://coqoo.net/)
- [kramdown](http://kramdown.gettalong.org/)
- [Redcarpet](https://github.com/vmg/redcarpet)
- [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown)
- [markdown2latex](http://pypi.python.org/pypi/markdown2latex/)
