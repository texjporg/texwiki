---
title: "LaTeX入門/HTMLとLaTeXの比較"
url: "/LaTeX入門/HTMLとLaTeXの比較/"
date: 2015-05-22T17:31:02Z
pukiwiki: "LaTeX入門/HTMLとLaTeXの比較"
---

# LaTeX入門/HTMLとLaTeXの比較

[LaTeX入門](</LaTeX入門/>) /
[最初の例](</LaTeX入門/最初の例/>) /
[簡単な数式 (1)](</LaTeX入門/簡単な数式(1)/>) /
[簡単な数式 (2)](</LaTeX入門/簡単な数式(2)/>) /
[各種パッケージの利用](</LaTeX入門/各種パッケージの利用/>) /
[レポート](</LaTeX入門/レポート/>) /
HTML と LaTeX の比較 /
[複雑な数式](</LaTeX入門/複雑な数式/>) /
[図表](</LaTeX入門/図表/>) /
[文献引用](</文献引用/>) /
[索引作成](</索引作成/>) /
[LaTeX マクロの作成](</LaTeX入門/LaTeXマクロの作成/>) /
[スライドの作り方（jsarticle 編）](</LaTeX入門/スライドの作り方（jsarticle編）/>) /
[応用的な使い方](</LaTeX入門/応用的な使い方/>)

***

## HTML と LaTeX の比較 {#g8b7bce6}

Web ページを記述する際に使われるのが，HTML とよばれるマークアップ言語です。
ここで HTML と LaTeX の特徴を比較し，LaTeX の理解につなげましょう。

### HTML と LaTeX の共通点 {#w65cad6d}

LaTeX も HTML も「普通のテキストの中に文書整形の命令を埋め込む」という点で共通しており，この2つに対応関係を見ることが出来ます。
したがって，LaTeX を知っている人なら，HTML を覚えて Web ページを書くことも簡単に出来ると思います。

HTML と LaTeX には次のような対応関係があります。

<table>
<tbody>
<tr><td><strong>HTML</strong>                  </td><td><strong>LaTeX</strong></td></tr>
<tr><td>&lt;!DOCTYPE html&gt;<br>&lt;html lang="ja"&gt;</td><td>\documentclass{jsarticle}</td></tr>
<tr><td>&lt;head&gt;                    </td><td>プリアンブル開始</td></tr>
<tr><td>&lt;meta charset="UTF-8"&gt;    </td><td></td></tr>
<tr><td>&lt;title&gt;...&lt;/title&gt;        </td><td>\title{題名}</td></tr>
<tr><td>                          </td><td>\author{著者}</td></tr>
<tr><td>                          </td><td>\date{日付}</td></tr>
<tr><td>&lt;link rel="stylesheet" type="text/css" href="hoge.css"&gt;</td><td>スタイルシートに対応するものはドキュメントクラスとパッケージ<br>\usepackage{newtxtext,newtxmath}</td></tr>
<tr><td>&lt;/head&gt;                   </td><td>プリアンブル終了</td></tr>
<tr><td>&lt;body&gt;                    </td><td>\begin{document}</td></tr>
<tr><td>                          </td><td>\maketitle</td></tr>
<tr><td>&lt;h1&gt;...&lt;/h1&gt;              </td><td>\section{節見出し}</td></tr>
<tr><td>&lt;h2&gt;...&lt;/h2&gt;              </td><td>\subsection{小節見出し}</td></tr>
<tr><td>&lt;h3&gt;...&lt;/h3&gt;              </td><td>\subsubsection{小々節見出し}</td></tr>
<tr><td>&lt;p&gt;...&lt;/p&gt;                </td><td>段落の区切りは \par または空行で表す</td></tr>
<tr><td>...&lt;br&gt;...                </td><td>段落の途中の強制改行は \\<br>（TeX では強制改行はあまり使わない）</td></tr>
<tr><td>&lt;blockquote&gt;...&lt;/blockquote&gt;</td><td>\begin{quote}...\end{quote}<br>頭を字下げしない引用</td></tr>
<tr><td>&lt;blockquote&gt;...&lt;/blockquote&gt;</td><td>\begin{quotation}...\end{quotation}<br>頭を字下げする引用</td></tr>
<tr><td>&lt;ul&gt;<br>&lt;li&gt;...<br>&lt;li&gt;...<br>&lt;/ul&gt;</td><td>\begin{itemize}<br>\item ...<br>\item ...<br>\end{itemize}<br>単なる箇条書き</td></tr>
<tr><td>&lt;ol&gt;<br>&lt;li&gt;...<br>&lt;li&gt;...<br>&lt;/ol&gt;</td><td>\begin{enumerate}<br>\item ...<br>\item ...<br>\end{enumerate}<br>番号つき箇条書き</td></tr>
<tr><td>&lt;!-- ... --&gt;              </td><td>% パーセントから行末までコメント</td></tr>
<tr><td>&lt;pre&gt;...&lt;/pre&gt;            </td><td>\begin{verbatim}...\end{verbatim}<br>そのまま出力</td></tr>
<tr><td>&lt;/body&gt;                   </td><td>\end{document}</td></tr>
<tr><td>&lt;/html&gt;                   </td><td></td></tr>
</tbody>
</table>

### HTML と LaTeX の相違点 {#f715fbb2}

逆に，HTML と LaTeX の大きく異なる点として「LaTeX はマクロの作成によって semantic に記述できる」ことが挙げられます。
LaTeX マクロの作成方法は後で [LaTeX マクロの作成](</LaTeX入門/LaTeXマクロの作成/>) で扱います。

買い物リストを例に考えると，HTML では次のように視覚レイアウトを直接記述するだけになってしまいます。

```
<ol>
 <li>
  <dt>品目</dt>
    <dd>書籍</dd>
  <dt>タイトル</dt>
    <dd>［改訂第6版］LaTeX2e 美文書作成入門</dd>
  <dt>本体価格</dt>
    <dd>3,200 円</dd>
 </li>
 <li>
  <dt>品目</dt>
    <dd>DVD</dd>
  <dt>タイトル</dt>
    <dd>No Name</dd>
  <dt>本体価格</dt>
    <dd>4,000 円</dd>
 </li>
</ol>
```

これを semantic web の概念[^1]に基づいて XML で記述すると，次のようになるはずです。

```
<ShoppingList>
 <product type = "書籍">
   <title>［改訂第6版］LaTeX2e 美文書作成入門</title>
   <price unit = "yen">3,200</price>
 </product>
 <product type = "DVD">
   <title>No Name</title>
   <price unit = "yen">4,000</price>
 </product>
</ShoppingList>
```

全ての要素を semantic に記述する必要はありませんが，LaTeX は HTML に比べて意味的な論理構造を記述するのに適しています。

[^1]: W3C の Timothy John Berners-Lee が提唱したものです。参考：[Semantic Web](http://www.w3.org/standards/semanticweb/)
