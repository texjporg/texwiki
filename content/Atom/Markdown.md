---
title: "Atom/Markdown"
url: "/Atom/Markdown/"
date: 2018-10-31T02:22:34Z
pukiwiki: "Atom/Markdown"
---

# Atom/Markdown

[Atom](/Atom/) &gt; Markdown

## Markdown 環境の整備 {#gb093a0b}

Markdown 関連の拡張パッケージも様々あります。Markdown での文書作成にはそれほど苦労しないと思われるので、入力補助ツールはあまり必要ないでしょう。必要に応じて探していくことになると思いますが、とりあえず、[markdown-writer](https://web.pulsar-edit.dev/packages/markdown-writer) などがあればよいでしょう。

Atom は標準で Markdown 文書のリアルタイムプレビュー機能を備えています。

Markdown プレビュー画面を開くには，メニューから

> パッケージ > Markdown Preview > Toggle Preview

を選びます。

### スタイル付け {#l37fd88c}

出力文書のスタイル付けは CSS で行います。メニューの

> ファイル > 環境設定…

で設定画面を開き、"設定フォルダを開く" ボタンを押して、設定フォルダを開きます。そこから style.less を開き、編集します。例えば、Windows 10 向けのフォント設定を行い、両端揃えなどを行うには：

```
 @font-family-min: "Yu Mincho", serif;
 @font-family-got: "Yu Gothic", sans-serif;
 .markdown-preview{
   font-family: @font-family-min;
   font-size: 10pt;
   line-height: 1.9em;
   text-align: justify;
```

```
   h1, h2, h3, h4, h5, h6{
     font-family: @font-family-got;
     font-weight: bold;
   }
```

```
   blockquote {
     border-left: 4px solid #ccc;
     font-style: italic;
     font-size: inherit;
     p { font-size: inherit; }
   }
 }
```

などのようにすると良いでしょう。Chromium ベースなので、今のところハイフネーションはサポートしていないようです。

### 文書の生成と保存 {#j459d751}

HTML へ変換するには、単にプレビュー画面で右クリックをして、"Save As MTML…" を選ぶだけです。
markdown-pdf パッケージを導入することで、PDF への出力も可能です。

### 数式の表示 {#s3c9391f}

[markdown-preview-plus](https://web.pulsar-edit.dev/packages/markdown-preview-plus) パッケージにより、LaTeX 形式での数式入力と表示が可能となります。
MathJax による描画で、保存した HTML にも結果は反映されますが、markdown-pdf では対応していないようです。MathJax を用いる markdown-preview-plus 以外にも、KaTeX を用いる
[markdown-preview-katex](https://web.pulsar-edit.dev/packages/markdown-preview-katex) や [atom-markdown-katex](https://web.pulsar-edit.dev/packages/atom-markdown-katex) があります。

数式を含んだ文書を PDF へ変換したい場合は、一旦 HTML で保存してから、
[wkhtmltopdf](http://wkhtmltopdf.org/) を利用するとなんとかできます。

```
 wkhtmltopdf --javascript-delay 10000 input.html output.pdf
```

のように、javascript-delay オプションをつける必要があるようです。数式の変換がうまくいかなかったら、delay の値を増やしてみます。
