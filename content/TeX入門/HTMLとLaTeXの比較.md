---
title: "TeX入門/HTMLとLaTeXの比較"
url: "/TeX入門/HTMLとLaTeXの比較/"
date: 2004-09-10T21:03:15Z
pukiwiki: "TeX入門/HTMLとLaTeXの比較"
---

# TeX入門/HTMLとLaTeXの比較

[TeX入門](</TeX入門/>)/
[最初の例](</TeX入門/最初の例/>)/
[簡単な数式(1)](</TeX入門/簡単な数式(1)/>)/
[簡単な数式(2)](</TeX入門/簡単な数式(2)/>)/
[レポート](</TeX入門/レポート/>)/
HTMLとLaTeXの比較/
[複雑な数式](</TeX入門/複雑な数式/>)/
図/
[文献引用](</文献引用/>)

## HTML と LaTeX の比較 {#g8b7bce6}

Webページを記述する際に使われるのが，HTMLとよばれる言語です．LaTeXもHTMLも，「普通のテキストの中に文書整形の命令を埋め込む」という点で共通しており，この2つに対応関係を見ることが出来ます．（したがって，LaTeXを知っている人なら，HTMLを覚えてWebページを書くことも，簡単に出来ると思います．）

HTML と LaTeX には次のような対応関係があります。 

<table>
<tbody>
<tr><td><strong>HTML</strong>                  </td><td><strong>LaTeX</strong></td></tr>
<tr><td rowspan="2">&lt;html&gt;                    </td><td>\documentclass{jarticle}</td></tr>
<tr><td>または \documentclass{jsarticle} など</td></tr>
<tr><td>&lt;head&gt;                    </td><td>% プリアンブル開始</td></tr>
<tr><td>&lt;title&gt;...&lt;/title&gt;        </td><td></td></tr>
<tr><td>&lt;link rel="stylesheet"    </td><td>% スタイルシートに対応するものは</td></tr>
<tr><td>      type="text/css"     </td><td>% ドキュメントクラスとパッケージ</td></tr>
<tr><td>      href="hoge.css"&gt;    </td><td>\usepackage{txfonts}</td></tr>
<tr><td>&lt;/head&gt;                   </td><td>% プリアンブル終了</td></tr>
<tr><td>&lt;body&gt;                    </td><td>\begin{document}</td></tr>
<tr><td>                          </td><td></td></tr>
<tr><td>&lt;h1&gt;...&lt;/h1&gt;              </td><td>\title{題名}</td></tr>
<tr><td>                          </td><td>\author{著者}</td></tr>
<tr><td>                          </td><td>\date{日付}</td></tr>
<tr><td>                          </td><td>\maketitle</td></tr>
<tr><td>                          </td><td></td></tr>
<tr><td>&lt;h2&gt;...&lt;/h2&gt;              </td><td>\section{節見出し}</td></tr>
<tr><td>                          </td><td></td></tr>
<tr><td>&lt;h3&gt;...&lt;/h3&gt;              </td><td>\subsection{小節見出し}</td></tr>
<tr><td>                          </td><td></td></tr>
<tr><td>&lt;p&gt;...                    </td><td>段落の区切りは</td></tr>
<tr><td>...                       </td><td>空行で表す</td></tr>
<tr><td>                          </td><td></td></tr>
<tr><td>&lt;p&gt;...&lt;br&gt;                </td><td>段落の途中の強制改行は \\</td></tr>
<tr><td>...                       </td><td>(TeXでは強制改行はあまり使わない)</td></tr>
<tr><td>                          </td><td></td></tr>
<tr><td>&lt;blockquote&gt;              </td><td>\begin{quote}</td></tr>
<tr><td>  ...                     </td><td>  頭を字下げしない引用</td></tr>
<tr><td>&lt;/blockquote&gt;             </td><td>\end{quote}</td></tr>
<tr><td>                          </td><td></td></tr>
<tr><td>&lt;blockquote&gt;              </td><td>\begin{quotation}</td></tr>
<tr><td>  ...                     </td><td>  頭を字下げする引用</td></tr>
<tr><td>&lt;/blockquote&gt;             </td><td>\end{quotation}</td></tr>
<tr><td>                          </td><td></td></tr>
<tr><td>&lt;ul&gt;                      </td><td>\begin{itemize}</td></tr>
<tr><td>  &lt;li&gt;...                 </td><td>\item 単なる箇条書き</td></tr>
<tr><td>  &lt;li&gt;...                 </td><td>\item ...</td></tr>
<tr><td>&lt;/ul&gt;                     </td><td>\end{itemize}</td></tr>
<tr><td>                          </td><td></td></tr>
<tr><td>&lt;ol&gt;                      </td><td>\begin{enumerate}</td></tr>
<tr><td>  &lt;li&gt;...                 </td><td>\item 番号つき箇条書き</td></tr>
<tr><td>  &lt;li&gt;...                 </td><td>\item ...</td></tr>
<tr><td>&lt;/ol&gt;                     </td><td>\end{enumerate}</td></tr>
<tr><td>                          </td><td></td></tr>
<tr><td>&lt;!-- ... --&gt;              </td><td>% パーセントから行末までコメント</td></tr>
<tr><td>                          </td><td></td></tr>
<tr><td>&lt;pre&gt;                     </td><td>\begin{verbatim}</td></tr>
<tr><td>  ...                     </td><td>  そのまま出力</td></tr>
<tr><td>&lt;/pre&gt;                    </td><td>\end{verbatim}</td></tr>
<tr><td>                          </td><td></td></tr>
<tr><td>&lt;/body&gt;                   </td><td>\end{document}</td></tr>
<tr><td>&lt;/html&gt;                   </td><td></td></tr>
</tbody>
</table>
