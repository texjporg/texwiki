# TeX Wiki

<https://texwiki.texjp.org/> の中身です。TeX、LaTeX、PDFなどに関する、
読者参加型の情報ページです。

このリポジトリの`content/`以下のMarkdownが各ページで、
[Hugo](https://gohugo.io/)で静的に組み立てて、GitHub Pagesで配信しています。
`main`に入った変更は数分で公開されます。

## 編集するには

GitHubのアカウントがあれば、誰でも編集を提案できます。

1. 各ページの末尾にある「このページを編集する」を押す
2. GitHubのエディタで直し、「Propose changes」でPull Requestを出す
   (自分のアカウントへのforkは自動で作られます)
3. 書き込み権限を持つ人が目を通してマージします。数日以内を目安にしています

まとまった変更や新しいページは、リポジトリをcloneして手元で
`hugo server`を動かしながら書くのが楽です。手順と書き方の約束は
[CONTRIBUTING.md](CONTRIBUTING.md)にあります。

問題の報告や相談は[Issues](https://github.com/texjporg/texwiki/issues)へ。
Pull Requestを出すほどでもない指摘もIssuesで構いません。

## ページの書き方

ページはMarkdown(CommonMark + GitHub風の表、脚注、定義リスト)です。
PukiWikiから変換したページには、Markdownで書けないもの(文字色、
結合した表のセル、アンカー)のためにHTMLがそのまま入っています。
新しく書くときは普通のMarkdownで十分です。

- ページのURLはファイル名ではなく、front matterの`url`で決まります。
  旧TeX WikiのURL(`/TeX Live/Windows/`のような、空白や日本語を含む名前)を
  そのまま使っています
- 他のページへのリンクは`[TeX Live](/TeX Live/)`のように、そのURLで書きます
- 添付ファイルは`static/attach/<ページ名>/`に置き、`/attach/<ページ名>/<ファイル名>`で参照します
- 数式は`{{< katex >}}\pi{{< /katex >}}`(KaTeX)

## 由来とライセンス

TeX Wikiは2004年8月から奥村晴彦氏のサイトでPukiWikiとして運営され、
2016年1月に日本語TeX開発コミュニティ(texjp.org)へ移りました。
2026年10月に、PukiWikiからこのリポジトリ(Hugo + GitHub Pages)へ移行しました。
PukiWiki時代の編集履歴は、PukiWikiが保存していた範囲(3時間以内の連続した
編集は1つにまとまり、古い版から順に120版まで)をgitの履歴として
取り込んであります。投稿者名は残っていないため、すべて
「TeX Wiki contributors」名義です。

旧TeX Wikiは「当Wikiの内容はパブリックドメイン（著作権を放棄し，
著作者人格権を行使しないもの）とします」という表示([著作権](https://texwiki.texjp.org/著作権/)の
ページ)のもとで運営されてきました。日本の著作権法には著作権や
著作者人格権を放棄する手続きがなく、この宣言だけでは法的な位置づけが
あいまいなので、移行にあたって同じ趣旨を法的に有効な形で明示することにし、
このリポジトリの内容は[CC0 1.0 Universal](LICENSE)(CC0-1.0)とします。
CC0は、権利放棄が無効な法域では「権利を行使しない」という約束に
読み替える条項を持ち、上の表示が意図していたことをそのまま表せます。
過去の投稿者全員に改めて同意を求めることは現実的でないため、
上の表示のもとで投稿された内容をCC0として扱います。異議がある場合は
Issuesか<board@texjp.org>へ連絡してください。個別に対応します。

以後の投稿も同じ条件です。Pull Requestを出すことで、その内容を
CC0-1.0で提供することに同意したものとみなします(CONTRIBUTING.md)。

## 運営

日本語TeX開発コミュニティ(<https://texjp.org/>)が運営しています。
サイトの仕組みに関することは[texjporg/texwiki](https://github.com/texjporg/texwiki)の
Issuesへ。
