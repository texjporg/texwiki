# TeX Wikiに書く

## いちばん簡単な方法

ページの末尾の「このページを編集する」からGitHubのエディタで直して、
Pull Requestを出してください。誤字の修正や1行の追記はこれで十分です。
書き込み権限を持つ人が確認してマージします。

## 手元で書く

```
git clone --recurse-submodules https://github.com/texjporg/texwiki.git
cd texwiki
hugo server
```

<http://localhost:1313/> で表示を確かめながら書けます。Hugoは
<https://gohugo.io/installation/> から。extended版は要りません。

## ページの約束

- 1ページ1ファイル。`content/<ページ名>.md`で、サブページを持つページは
  `content/<ページ名>/_index.md`
- front matterの`title`と`url`は必ず書く。`url`がページのURLになる
  (`url: /TeX Live/Windows/`)。ページ名に空白や日本語が入っていても
  そのまま
- 本文の先頭は`# <ページ名>`。見出しは`##`から
- 見出しに`{#id}`が付いているものは、他のページからリンクされている
  アンカーなので消さない
- 他のページへのリンクは`[表示名](/ページ名/)`。ページ名に空白があれば
  `[表示名](</TeX Live/>)`
- 画像や添付は`static/attach/<ページ名>/`に置いて`/attach/<ページ名>/<ファイル名>`
- 数式は`{{< katex >}}…{{< /katex >}}`
- 新しいページを作ったら、関係のあるページか[サイトマップ](content/サイトマップ.md)から
  リンクしてください。リンクされていないページは見つけてもらえません

PukiWikiから変換したページには`<span style>`や`<table>`などのHTMLが
残っています。直す必要はありません。書き換えるときにMarkdownにして
くれると、あとの人が助かります。

## 内容の方針

[TeX Wiki編集方針](https://texwiki.texjp.org/TeX%20Wiki編集方針/)に従います。
要点は、事実と出典、再現できる手順、古くなった情報の整理です。

## ライセンス

このリポジトリの内容はCC0 1.0 Universalです。Pull Requestを出すことで、
その内容をCC0 1.0 Universalで提供することに同意したものとみなします。
他の人の文章や画像をそのまま持ち込むときは、CC0で提供できるものに
限ってください。

## マージする人へ

- CIのビルド(Hugo)が通っていること。それ以外の自動の条件はありません
- 内容を一読して、明らかな荒らしや宣伝でなければマージする。細部の
  正確さは、あとから誰でも直せます
- 新しいPull Requestの通知はSlackに流れます。数日以内に誰かが見る、を目安に
