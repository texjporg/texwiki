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

### Markdown 関連リンク {#i482f02d}

- [Markdown](http://daringfireball.net/projects/markdown/)
- [https://pypi.python.org/pypi/Markdown](https://pypi.python.org/pypi/Markdown)
- [Wikipedia.ja:Markdown](https://ja.wikipedia.org/wiki/Markdown)
- [Markdown CMS Coqoo ―虚空― | Markdown CMS Coqoo ―虚空―](http://coqoo.net/)
- [kramdown](http://kramdown.gettalong.org/)
- [Redcarpet](https://github.com/vmg/redcarpet)
- [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown)
- [markdown2latex](http://pypi.python.org/pypi/markdown2latex/)

### エディタ {#vb4c5393}

- [Emacs](/Emacs/)
    - [Emacs Markdown Mode](http://jblevins.org/projects/markdown-mode/)
- [Vim](/Vim/)
    - [Markdown Vim Mode](https://github.com/plasticboy/vim-markdown)
    - [vim-instant-markdown](https://github.com/suan/vim-instant-markdown)
    - [VimでMarkdown, ブラウザでプレビュー](http://qiita.com/us10096698/items/1ac05c5c9543d2f79fa3)
    - [Vim で GitHub Flavored Markdown をプレビューする](http://superbrothers.hatenablog.com/entry/2013/09/28/123546)
- [Atom](/Atom/)
- [Brackets](/Brackets/)
- [CuteMarkEd](http://cloose.github.io/CuteMarkEd/)
- [StackEdit](https://stackedit.io/)
    - [https://github.com/benweet/stackedit](https://github.com/benweet/stackedit)
- [NoTex](https://notex.ch) An online text editor for reStructuredText, Markdown, LaTex and more!

### Markdown から LaTeX への変換 {#v519987b}

- [Pandoc](/Pandoc/)

### Markdown から PDF を生成 {#yab0f4c6}

[markdown-pdf](https://www.npmjs.com/package/markdown-pdf) で Markdown 文書から PDF を生成できます。
markdown-pdf は Markdown 文書をまず HTML へ変換し，[PhantomJS](http://phantomjs.org/) によりレンダリングし，PDF を生成します。PhantomJS は QtWebKit をベースとしたヘッドレスブラウザです。CSS でスタイル付する事ができます。
