---
title: "LyX/設定"
url: "/LyX/設定/"
date: 2012-07-12T19:19:01Z
bookCollapseSection: true
pukiwiki: "LyX/設定"
---

# LyX/設定

[LyX](/LyX/) > 設定

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## 設定 {#d6c4c951}

### 言語 {#j97f863b}

#### 日本語の文書を作成する場合 {#v60a198e}

日本語の文書を作成する場合は babel を off にします．

\[ツール(T)\]-\[設定(P)...\]-\[言語設定\]-\[言語\]

***

<span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　　　　　　　　　　　　　　　　　　</ins></span><br>

　　　　　　▷　操作性<br>
　　　　　　▷　編集<br>
　　　　　　 　 パス<br>
　　　　　　 　 利用者情報<br>
　　　　　　◢　言語設定<br>
　　　　　　　　　<span style="color:Black;background-color:#DAEAFF;">　言語　　　　　　　　</span><br>
　　　　　　　　　　スペルチェッカー<br>
　　　　　　▷　出力<br>
　　　　　　▷　ファイル処理<br>

***

<span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

操作画面用言語(I): <span style="color:Black;background-color:#EEEEEE;">\[日本語　　　　　　　　　　　　　▼\]</span>[^1]<br>
言語パッケージ(P): <span style="color:Black;background-color:#EEEEEE;">\[任意設定　▼\]</span>[^2]　<ins>　　　　　　　　　　</ins>[^3] ← 言語パッケージを任意設定に変更し \usepackage{babel} を削除します．<br>
開始コマンド(T): 　　<ins>　　　　　　　　　　</ins>[^4] ← 開始コマンドの \selectlanguage{$$lang} を削除します．<br>
終了コマンド(N): 　　<ins>　　　　　　　　　　</ins>[^5]<br>
小数点記号の既定値(S): 　　<ins>.</ins><br>
長さ単位の既定値(U): <span style="color:Black;background-color:#EEEEEE;">\[cm　　　　　　　　　　　　　 ▼\]</span><br>
☐言語を大域的に設定(G)[^6] ← 言語を大域的に設定のチェックをはずします．<br>
☑自動開始(B)[^7]<br>
☑自動終了(E)[^8]<br>
☐外国語をマークする(F)[^9] ← 外国語をマークするのチェックをはずします．<br>
右から左書きの言語をサポート<br>
　☑右横書きサポートを有効化(R)[^10]<br>
　カーソルの動き: 🔘 論理的(L)　◯ 視覚的(V)<br>

***

\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

#### babel を使用して文書を作成する場合 {#j34bc968}

babel を使用して文書を作成する場合は babel を on にします．

babel のオプションを設定する場合は以下の方法があります．

- クラスオプションでグローバルに設定する
- babel のオプションでローカルに設定する

### LaTeX, 変換子, ファイル形式, 順検索 (forward search) {#o4630905}

{{< children >}}

```

```

を参照．

## 文書の設定 {#x90c6e46}

### レイアウトファイルの追加 {#g3fd040c}

- [LyX wiki | Layouts / Layouts](http://wiki.lyx.org/Layouts/Layouts)
- [LyX wiki | Layouts / CreatingLayouts](http://wiki.lyx.org/Layouts/CreatingLayouts)

LyX で自作文書クラスなどを使用したい場合は \[ヘルプ(H)\]-\[カスタマイズ篇(C)\] の 『第5章 文書クラスを新規に導入する』 を参照してください．<br>
pdfLaTeX/XeLaTeX/LuaLaTeX/LuaJITLaTeX で新ドキュメントクラス相当のレイアウトを実現したい場合はレイアウトファイルを作成して追加します．<br>
レイアウトファイルは [layouts](http://git.lyx.org/?p=lyx.git;a=tree;f=lib/layouts;hb=HEAD) フォルダーに存在する [jsarticle.layout](http://git.lyx.org/?p=lyx.git;a=blob;f=lib/layouts/jsarticle.layout;hb=HEAD) などを参考にして作成すれば OK です．<br>

#### bxjsarticle.layout {#zcc42b2e}

bxjsarticle.layout ファイルを新規作成して以下の内容を編集します．

***

```
#% Do not delete the line below; configure depends on this
#  \DeclareLaTeXClass{Japanese Article (bxjsarticle)}
#  \DeclareCategory{Articles}
# Japanese new article textclass definition file.

# This style provides japanese features 
Format 54
Provides japanese 1

# Input general definitions
Input article.layout
```

***

#### bxjsreport.layout {#a19d53bc}

bxjsreport.layout ファイルを新規作成して以下の内容を編集します．

***

```
#% Do not delete the line below; configure depends on this
#  \DeclareLaTeXClass{Japanese Report (bxjsreport)}
#  \DeclareCategory{Reports}
# Japanese new report textclass definition file.

# This style provides japanese features 
Format 54
Provides japanese 1

# Input general definitions
Input report.layout
```

***

#### bxjsbook.layout {#p03557b7}

bxjsbook.layout ファイルを新規作成して以下の内容を編集します．

***

```
#% Do not delete the line below; configure depends on this
#  \DeclareLaTeXClass{Japanese Book (bxjsbook)}
#  \DeclareCategory{Books}
# Japanese new book textclass definition file.

# This style provides japanese features 
Format 54
Provides japanese 1

# Input general definitions
Input book.layout
```

***

#### ltjsarticle.layout {#v6cea741}

ltjsarticle.layout ファイルを新規作成して以下の内容を編集します．

***

```
#% Do not delete the line below; configure depends on this
#  \DeclareLaTeXClass{Japanese Article (ltjsarticle)}
#  \DeclareCategory{Articles}
# Japanese new article textclass definition file.

# This style provides japanese features 
Format 54
Provides japanese 1

# Input general definitions
Input article.layout
```

***

#### ltjsbook.layout {#p91c61b8}

ltjsbook.layout ファイルを新規作成して以下の内容を編集します．

***

```
#% Do not delete the line below; configure depends on this
#  \DeclareLaTeXClass{Japanese Book (ltjsbook)}
#  \DeclareCategory{Books}
# Japanese new book textclass definition file.

# This style provides japanese features 
Format 54
Provides japanese 1

# Input general definitions
Input book.layout
```

***

#### Windows の場合 {#k55c07b3}

レイアウトファイルを

- %APPDATA%\LyX2.1\layouts\\
    <!-- -C:\Users\Lydia\AppData\Local\LyX 2.1\Resources\layouts\ -->
    <!-- -C:\Program Files\LyX 2.1\Resources\layouts\ (32-bit Windows の場合) -->
    <!-- -C:\Program Files (x86)\LyX 2.1\Resources\layouts\ (64-bit Windows の場合) -->

フォルダーにコピーします．<br>
\[ツール(T)\]-\[環境構成(R)\] をクリックして LyX を再起動します．<br>
\[文書(D)\]-\[設定(S)...\]-\[文書クラス\] に

- Japanese Article (bxjsarticle)
- Japanese Report (bxjsreport)
- Japanese Book (bxjsbook)
- Japanese Article (ltjsarticle)
- Japanese Book (ltjsbook)

が追加されていることを確認します．<br>

#### OS X の場合 {#r68e04c4}

レイアウトファイルを

<!-- -/Applications/LyX.app/Contents/Resources/layouts/ -->
- &#x7e;/Library/Application Support/LyX-2.1/layouts/

フォルダにコピーします．<br>
\[ツール(T)\]-\[環境構成(R)\] をクリックして LyX を再起動します．<br>
\[文書(D)\]-\[設定(S)...\]-\[文書クラス\] に

- Japanese Article (bxjsarticle)
- Japanese Report (bxjsreport)
- Japanese Book (bxjsbook)
- Japanese Article (ltjsarticle)
- Japanese Book (ltjsbook)

が追加されていることを確認します．<br>

#### Linux の場合 {#aa21cddd}

レイアウトファイルを

- &#x7e;/.lyx/layouts/

ディレクトリにコピーします．<br>
\[ツール(T)\]-\[環境構成(R)\] をクリックして LyX を再起動します．<br>
\[文書(D)\]-\[設定(S)...\]-\[文書クラス\] に

- Japanese Article (bxjsarticle)
- Japanese Report (bxjsreport)
- Japanese Book (bxjsbook)
- Japanese Article (ltjsarticle)
- Japanese Book (ltjsbook)

が追加されていることを確認します．<br>

### 言語 {#a5afecd2}

#### 日本語の文書を作成する場合 {#ea058295}

日本語の文書を作成する場合は babel を off にします．

\[文書(D)\]-\[設定(S)...\]-\[言語\]

***

<span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　　　　　　　　　　　　　　　　　　</ins></span><br>

<br>

　　　　　文書クラス<br>
　　　　　モジュール<br>
　　　　　ローカルのレイアウト<br>
　　　　　フォント<br>
　　　　　本文レイアウト<br>
　　　　　ページレイアウト<br>
　　　　　ページ余白<br>
　　　　<span style="color:Black;background-color:#DAEAFF;">　言語　　　　　　　　　　</span><br>
　　　　　色<br>
　　　　　連番と目次<br>
　　　　　書誌情報<br>
　　　　　索引<br>
　　　　　PDF特性<br>
　　　　　数式オプション<br>
　　　　　フロートの配置<br>
　　　　　リスト<br>
　　　　　ブリット<br>
　　　　　派生枝<br>
　　　　　出力<br>
　　　　　LaTeXプリアンブル<br>

***

日本語の文書を作成する場合は，言語を日本語に設定します．<br>
LaTeX (pLaTeX) で書き出しするときに UTF-8 で出力したい場合は文字コードは 日本語(pLaTeX) (UTF8) を選択します．<br>
言語に日本語を選択して文字コードに言語既定値を選択した場合は文字コードは JIS (ISO-2022-JP) になります．<br>
出力した文書が文字化けしてしまう場合は uplatex, upbibtex, upmendex で処理する文字コードと出力文字コードが一致しているかどうか確認してください．<br>

LaTeX (pLaTeX) で書き出しすると指定した文字コードで出力されます．<br>
lyx ファイル自体は常に UTF-8 で保存されます．<br>

***

<span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

言語(L): 　　　<span style="color:Black;background-color:#EEEEEE;">\[日本語　　　　　　　　　　　　　▼\]</span> ← 言語を日本語に設定します<br>
引用様式(Q): <span style="color:Black;background-color:#EEEEEE;">\[\`\`テキスト"　　　　　　　　　　 ▼\]</span><br>
文字コード<br>
　◯言語既定値(D)<br>
　🔘その他(E): <span style="color:Black;background-color:#EEEEEE;">\[日本語(pLaTeX) (UTF8)　　　　　　▼\]</span><br>

<br>

言語パッケージ(K): <span style="color:Black;background-color:#EEEEEE;">\[任意設定　▼\]</span>[^11]　<ins>　　　　　　　　　　</ins>[^12] ← 言語パッケージを任意設定に変更し，なにも入力しません．<br>

***

\[適用(A)\] をクリックします．<br>

#### babel を使用して文書を作成する場合 {#ca4fc5c1}

babel を使用して文書を作成する場合は babel を on にします．

***

<span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

言語(L): 　　　<span style="color:Black;background-color:#EEEEEE;">\[日本語　　　　　　　　　　　　　▼\]</span> ← 言語を日本語に設定します<br>
引用様式(Q): <span style="color:Black;background-color:#EEEEEE;">\[\`\`テキスト"　　　　　　　　　　 ▼\]</span><br>
文字コード<br>
　◯言語既定値(D)<br>
　🔘その他(E): <span style="color:Black;background-color:#EEEEEE;">\[日本語(pLaTeX) (UTF8)　　　　　　▼\]</span><br>

<br>

言語パッケージ(K): <span style="color:Black;background-color:#EEEEEE;">\[任意設定　▼\]</span>　<ins>\usepackage\[ngerman,english,japanese\]{babel}</ins> ← 言語パッケージを任意設定に変更し，使用する言語オプションを指定します．<br>

***

\[適用(A)\] をクリックします．<br>

#### [XeLaTeX](/XeTeX/)/[LuaLaTeX](/LuaTeX/)/LuaJITLaTeX で文書を作成する場合 {#n7a3be37}

XeLaTeX/LuaLaTeX/LuaJITLaTeX で文書を作成する場合は文字コードを ユニコード(XeTeX) (utf8) に設定します．

***

<span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

言語(L): 　　　<span style="color:Black;background-color:#EEEEEE;">\[日本語　　　　　　　　　　　　　▼\]</span><br>
引用様式(Q): <span style="color:Black;background-color:#EEEEEE;">\[\`\`テキスト"　　　　　　　　　　 ▼\]</span><br>
文字コード<br>
　◯言語既定値(D)<br>
　🔘その他(E): <span style="color:Black;background-color:#EEEEEE;">\[ユニコード(XeTeX) (utf8)　　　　　▼\]</span><br>

<br>

言語パッケージ(K): <span style="color:Black;background-color:#EEEEEE;">\[任意設定　▼\]</span>　<ins>　　　　　　　　　　</ins><br>

***

\[適用(A)\] をクリックします．<br>

### フォント {#r177f199}

\[文書(D)\]-\[設定(S)...\]-\[フォント\]

***

<span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　　　　　　　　　　　　　　　　　　</ins></span><br>

<br>

　　　　　文書クラス<br>
　　　　　モジュール<br>
　　　　　ローカルのレイアウト<br>
　　　　<span style="color:Black;background-color:#DAEAFF;">　フォント　　　　　　　　</span><br>
　　　　　本文レイアウト<br>
　　　　　ページレイアウト<br>
　　　　　ページ余白<br>
　　　　　言語<br>
　　　　　色<br>
　　　　　連番と目次<br>
　　　　　書誌情報<br>
　　　　　索引<br>
　　　　　PDF特性<br>
　　　　　数式オプション<br>
　　　　　フロートの配置<br>
　　　　　リスト<br>
　　　　　ブリット<br>
　　　　　派生枝<br>
　　　　　出力<br>
　　　　　LaTeXプリアンブル<br>

***

文書で使用するフォントを設定します．<br>
12pt で文書を作成する場合は基本寸法を 12 に変更します．<br>
10pt, 11pt, 12pt 以外の大きさの基本寸法を使用する場合は文書クラスのクラスオプションで指定します．<br>
設定を反映させるために \[適用(A)\] をクリックします．<br>
XeLaTeX/LuaLaTeX を使用して日本語文書を作成する場合は [xeCJK/ZXjatype](/xeCJK/), [LuaTeX-ja](/LuaTeX-ja/) を使用して LaTeXプリアンブルに日本語文書に使用するフォントの設定を記述してください．<br>

***

<span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

☐ 非TeXフォントを使用（XeTeX/LuaTeX経由）(U)[^13]<br>
既定のフォント族(D):　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　　　　　　　　　　　　　　　　　▼\]</span>[^14]　基本寸法(B):<span style="color:Black;background-color:#EEEEEE;">\[12　　　　▼\]</span><br>
LaTeXフォントエンコーディング: <span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　　　　　　　　　　　　　　　　　▼\]</span>　<ins>　　　　　　　　　　　　</ins>[^15]<br>
ローマン体(R):　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　　　　　　　　　　　　　　　　　▼\]</span>[^16]<br>
サンセリフ体(S):　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　　　　　　　　　　　　　　　　　▼\]</span>[^17]　<span style="color:#888888;background-color:#EEEEEE;">縮尺(C) (%): <ins>100　　　\[<strong>⇕</strong>\]</ins></span><br>
タイプライタ体(T):　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　　　　　　　　　　　　　　　　　▼\]</span>[^18]　<span style="color:#888888;background-color:#EEEEEE;">縮尺(A) (%): <ins>100　　　\[<strong>⇕</strong>\]</ins></span><br>
CJK:　　　　　　　　　　　　　　　　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins>[^19]<br>
　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:#EEEEEE;">☐ 真性スモールキャップ体を使う(M)</span>[^20]<br>
　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:#EEEEEE;">☐ 旧様式数字を使う(O)</span>[^21]<br>

***

### 出力 {#pcd2eafa}

\[文書(D)\]-\[設定(S)...\]-\[出力\]

***

<span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　　　　　　　　　　　　　　　　　　</ins></span><br>

<br>

　　　　　文書クラス<br>
　　　　　モジュール<br>
　　　　　ローカルのレイアウト<br>
　　　　　フォント<br>
　　　　　本文レイアウト<br>
　　　　　ページレイアウト<br>
　　　　　ページ余白<br>
　　　　　言語<br>
　　　　　色<br>
　　　　　連番と目次<br>
　　　　　書誌情報<br>
　　　　　索引<br>
　　　　　PDF特性<br>
　　　　　数式オプション<br>
　　　　　フロートの配置<br>
　　　　　リスト<br>
　　　　　ブリット<br>
　　　　　派生枝<br>
　　　　<span style="color:Black;background-color:#DAEAFF;">　出力　　　　　　　　　　</span><br>
　　　　　LaTeXプリアンブル<br>

***

#### PDF (dvipdfm) {#lca582a6}

文字コードが 日本語(pLaTeX) の場合は既定値は DVI です．<br>
日本語の文書を作成する場合に，dvipdfmx を使用して PDF ファイルで表示を確認したい場合は，既定出力形式を PDF (dvipdfm) に変更して \[適用(A)\] をクリックします．<br>

***

<span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

出力形式<br>
　既定出力形式(F):　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[PDF (dvipdfm)　　　　　　　　　　　　　　　　　　　　▼\]</span>[^22]<br>

***

#### PDF (ps2pdf) {#s335ea5f}

文字コードが 日本語(pLaTeX) の場合は既定値は DVI です．<br>
日本語の文書を作成する場合に，dvips + ps2pdf を使用して PDF ファイルで表示を確認したい場合は，既定出力形式を PDF (ps2pdf) に変更して \[適用(A)\] をクリックします．<br>

***

<span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

出力形式<br>
　既定出力形式(F):　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[PDF (ps2pdf)　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>

***

#### PDF (LuaTeX) {#g2e3c1cf}

文字コードが ユニコード(XeTeX) (utf8) の場合は既定値は PDF (pdflatex) です．<br>
LuaLaTeX, LuaJITLaTeX を使用したい場合は，既定出力形式を PDF (LuaTeX) に変更して \[適用(A)\] をクリックします．<br>

***

<span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

出力形式<br>
　既定出力形式(F):　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[PDF (LuaTeX)　　　　　　　　　　　　　　　　　　　　▼\]</span><br>

***

#### PDF (XeTeX) {#zd1cca72}

文字コードが ユニコード(XeTeX) (utf8) の場合は既定値は PDF (pdflatex) です．<br>
XeLaTeX を使用したい場合は，既定出力形式を PDF (XeTeX) に変更して \[適用(A)\] をクリックします．<br>

***

<span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

出力形式<br>
　既定出力形式(F):　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[PDF (XeTeX) 　　　　　　　　　　　　　　　　　　　　▼\]</span><br>

***

### 文書クラス {#g33dd885}

\[文書(D)\]-\[設定(S)...\]-\[文書クラス\]

***

<span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　　　　　　　　　　　　　　　　　　</ins></span><br>

<br>

　　　　<span style="color:Black;background-color:#DAEAFF;">　文書クラス　　　　　　　</span><br>
　　　　　モジュール<br>
　　　　　ローカルのレイアウト<br>
　　　　　フォント<br>
　　　　　本文レイアウト<br>
　　　　　ページレイアウト<br>
　　　　　ページ余白<br>
　　　　　言語<br>
　　　　　色<br>
　　　　　連番と目次<br>
　　　　　書誌情報<br>
　　　　　索引<br>
　　　　　PDF特性<br>
　　　　　数式オプション<br>
　　　　　フロートの配置<br>
　　　　　リスト<br>
　　　　　ブリット<br>
　　　　　派生枝<br>
　　　　　出力<br>
　　　　　LaTeXプリアンブル<br>

***

#### uplatex + dvipdfmx の場合 {#ica39b31}

文書クラスで Japanese Article (bxjsarticle) を選択し，クラスオプションを設定します．<br>
uplatex + dvipdfmx で bxjsarticle を使用する場合は，クラスオプションに uplatex と dvipdfmx を設定してグラフィックドライバに 既定値を指定します．<br>
他の文書クラスを使用していてクラスオプションに dvipdfmx を設定しない場合はグラフィックドライバに DVIPDFMx を指定します．<br>
設定を反映させるために \[適用(A)\] をクリックします．<br>

***

<span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　文書クラス(C)<br>
　<span style="color:Black;background-color:#EEEEEE;">\[Japanese Article (bxjsarticle)　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>

<br>

　クラスオプション<br>
　<span style="color:#888888;background-color:#EEEEEE;">☑事前定義(P):</span>　　<span style="color:#888888;background-color:#EEEEEE;">\[事前定義されたオプションがありません\]</span><br>
　任意設定(T):　　　 <ins>uplatex,dvipdfmx,12pt,ja=standard</ins><br>

<br>

グラフィックドライバ(G):　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　▼\]</span><br>

***

#### uplatex + dvips + ps2pdf の場合 {#p803a02d}

文書クラスで Japanese Article (bxjsarticle) を選択し，クラスオプションを設定します．<br>
uplatex + dvips + ps2pdf で bxjsarticle を使用する場合は，クラスオプションに uplatex と dvips を設定してグラフィックドライバに 既定値を指定します．<br>
他の文書クラスを使用していてクラスオプションに dvips を設定しない場合はグラフィックドライバに  既定値 または Dvips を指定します．<br>
設定を反映させるために \[適用(A)\] をクリックします．<br>

***

<span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　文書クラス(C)<br>
　<span style="color:Black;background-color:#EEEEEE;">\[Japanese Article (bxjsarticle)　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>

<br>

　クラスオプション<br>
　<span style="color:#888888;background-color:#EEEEEE;">☑事前定義(P):</span>　　<span style="color:#888888;background-color:#EEEEEE;">\[事前定義されたオプションがありません\]</span><br>
　任意設定(T):　　　 <ins>uplatex,dvips,12pt,ja=standard</ins><br>

<br>

グラフィックドライバ(G):　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　▼\]</span><br>

***

#### pdflatex の場合 {#n5e2e894}

<!-- 文書クラスで KOMA-Script Article または Article (標準クラス) を選択し，クラスオプションを設定します．~ -->

文書クラスで Japanese Article (bxjsarticle) を選択し，クラスオプションを設定します．<br>
pdflatex で bxjsarticle を使用する場合は，クラスオプションに pdflatex を設定してグラフィックドライバに 既定値を指定します．<br>
他の文書クラスを使用していてクラスオプションに pdflatex を設定しない場合はグラフィックドライバに  既定値 または pdfTeX を指定します．<br>
設定を反映させるために \[適用(A)\] をクリックします．<br>

***

<span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　文書クラス(C)<br> <!-- 　&color(Black,#EEEEEE){[KOMA-Script Article 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　▼]};&br; -->
　<span style="color:Black;background-color:#EEEEEE;">\[Japanese Article (bxjsarticle)　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>

<br>

　クラスオプション<br>
　<span style="color:#888888;background-color:#EEEEEE;">☑事前定義(P):</span>　　<span style="color:#888888;background-color:#EEEEEE;">\[事前定義されたオプションがありません\]</span><br>
　任意設定(T):　　　 <ins>pdflatex,12pt,ja=standard</ins><br>

<br>

グラフィックドライバ(G):　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　▼\]</span><br>

***

#### lualatex, luajitlatex の場合 {#l1a666c4}

文書クラスで Japanese Article (ltjsarticle) を選択し，クラスオプションを設定します．<br>
lualatex, luajitlatex で ltjsarticle を使用する場合は，グラフィックドライバに 既定値 または pdfTeX を指定します．<br>
設定を反映させるために \[適用(A)\] をクリックします．<br>

***

<span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　文書クラス(C)<br>
　<span style="color:Black;background-color:#EEEEEE;">\[Japanese Article (ltjsarticle)　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>

<br>

　クラスオプション<br>
　<span style="color:#888888;background-color:#EEEEEE;">☑事前定義(P):</span>　　<span style="color:#888888;background-color:#EEEEEE;">\[事前定義されたオプションがありません\]</span><br>
　任意設定(T):　　　 <ins>12pt</ins><br>

<br>

グラフィックドライバ(G):　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　▼\]</span><br>

***

#### xelatex の場合 {#ce0db196}

文書クラスで Japanese Article (bxjsarticle) を選択し，クラスオプションを設定します．<br>
xelatex で bxjsarticle を使用する場合は，クラスオプションに xelatex を設定してグラフィックドライバに 既定値を指定します．<br>
他の文書クラスを使用していてクラスオプションに xelatex を設定しない場合はグラフィックドライバに  既定値 または XeTeX を指定します．<br>
設定を反映させるために \[適用(A)\] をクリックします．<br>

***

<span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<br>

　文書クラス(C)<br>
　<span style="color:Black;background-color:#EEEEEE;">\[Japanese Article (bxjsarticle)　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>

<br>

　クラスオプション<br>
　<span style="color:#888888;background-color:#EEEEEE;">☑事前定義(P):</span>　　<span style="color:#888888;background-color:#EEEEEE;">\[事前定義されたオプションがありません\]</span><br>
　任意設定(T):　　　 <ins>xelatex,12pt,ja=standard</ins><br>

<br>

グラフィックドライバ(G):　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　▼\]</span><br>

***

### フロートの配置 {#ofebe217}

図や表を使用する場合は

\[文書(D)\]-\[設定(S)...\]-\[フロートの配置\] で設定可能です．

***

<span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　　　　　　　　　　　　　　　　　　</ins></span><br>

<br>

　　　　　文書クラス<br>
　　　　　モジュール<br>
　　　　　ローカルのレイアウト<br>
　　　　　フォント<br>
　　　　　本文レイアウト<br>
　　　　　ページレイアウト<br>
　　　　　ページ余白<br>
　　　　　言語<br>
　　　　　色<br>
　　　　　連番と目次<br>
　　　　　書誌情報<br>
　　　　　索引<br>
　　　　　PDF特性<br>
　　　　　数式オプション<br>
　　　　<span style="color:Black;background-color:#DAEAFF;">　フロートの配置　　　　</span><br>
　　　　　リスト<br>
　　　　　ブリット<br>
　　　　　派生枝<br>
　　　　　出力<br>
　　　　　LaTeXプリアンブル<br>

***

☐ 既定の配置を使用する(D) ← チェックをはずす<br>
　配置の詳細オプション<br>
　<span style="color:#888888;background-color:#EEEEEE;">☐ ページ上部(T)</span><br>
　<span style="color:#888888;background-color:#EEEEEE;">☐ ページ下部(B)</span><br>
　<span style="color:#888888;background-color:#EEEEEE;">☐ フロートを独立したページに(P)</span><br>
　<span style="color:#888888;background-color:#EEEEEE;">☐ 可能ならば現在位置に(H)</span><br>
　☑ 何としても現在位置に置く(F)<br>
　<span style="color:#888888;background-color:#EEEEEE;">☐ LaTeXの規則を無視する(I)</span><br>

***

### LaTeXプリアンブル {#lb7cb5ad}

プリアンブルを編集したい場合は

\[文書(D)\]-\[設定(S)...\]-\[LaTeXプリアンブル\] で編集可能です．

***

<span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　　　　　　　　　　　　　　　　　　</ins></span><br>

<br>

　　　　　文書クラス<br>
　　　　　モジュール<br>
　　　　　ローカルのレイアウト<br>
　　　　　フォント<br>
　　　　　本文レイアウト<br>
　　　　　ページレイアウト<br>
　　　　　ページ余白<br>
　　　　　言語<br>
　　　　　色<br>
　　　　　連番と目次<br>
　　　　　書誌情報<br>
　　　　　索引<br>
　　　　　PDF特性<br>
　　　　　数式オプション<br>
　　　　　フロートの配置<br>
　　　　　リスト<br>
　　　　　ブリット<br>
　　　　　派生枝<br>
　　　　　出力<br>
　　　　<span style="color:Black;background-color:#DAEAFF;">　LaTeXプリアンブル　　</span><br>

***

uplatex + dvipdfmx, pdflatex, lualatex, luajitlatex, xelatex で文書のプロパティのタイトル・作成者・サブタイトル・キーワードを作成したい場合は LaTeXプリアンブルで

***

<span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

```
\usepackage{ifpdf}
\usepackage{ifluatex}
\usepackage{ifxetex}
\ifpdf
  \ifluatex
    \usepackage[pdfencoding=auto]{hyperref}
  \else
    \usepackage[whole,autotilde]{bxcjkjatype}
    \usepackage[unicode]{hyperref}
  \fi
\else
  \ifxetex
    \usepackage{hyperref}
    \usepackage{zxjatype}
    \setjamainfont{ipaexm.ttf}
    \setjasansfont{ipaexg.ttf}
    \setjamonofont{ipaexg.ttf}
  \else
    \usepackage[dvipdfmx]{hyperref}
    \usepackage{pxjahyper}
  \fi
\fi
\hypersetup{%
 bookmarksnumbered=true,%
 colorlinks=true,%
 setpagesize=false,%
 pdftitle={WYSIWYMのLyXで},%
 pdfauthor={たのしい},%
 pdfsubject={LaTeXが},%
 pdfkeywords={ポポポポ～ン}}
```

***

のように編集すれば OK です．<br>

LaTeXプリアンブルで [hyperref](/hyperref/) パッケージを読み込んでいる場合

\[挿入(I)\]-\[TeXコード\] で

```
\def\LyX{\texorpdfstring{L\kern-.1667em\lower.25em\hbox{Y}\kern-.125emX\@}{LyX}}
\section{\LyX{}するたびファイルがふえるね}
```

のように入力して \[文書(D)\]-\[\[PDF (dvipdfm)\] を表示(V)\] をすると自動的にしおりを作成してくれます．

## [Inkscape](/Inkscape/) との連携 {#r74179c0}

- [LyXとInkscapeを連携させる](http://shogo82148.hatenablog.com/entry/20100521/1274429760)
- [LyX wiki | Tips / UseInkscapeSVGImages](http://wiki.lyx.org/Tips/UseInkscapeSVGImages)

[^1]: 操作画面 (メニューやダイアログなど) 用言語を選択してください。
[^2]: どの言語パッケージをLyXが使うべきか選択してください
[^3]: 言語パッケージを読み込むコマンドを入力してください (既定値：\usepackage{babel}) 
[^4]: 外国語への切替を開始するLaTeXコマンド
[^5]: 外国語への切替を終了させるLaTeXコマンド。
[^6]: 言語を大域的に (文書クラスに) 渡して局所的に (言語パッケージに) は渡さない場合にチェックします
[^7]: 有効にすると、言語切替コマンドで明示的に文書言語を設定することをしないようにします
[^8]: 有効にすると、言語切替コマンドで文書言語を明示的に閉じることをしないようにします
[^9]: 作業領域で外国語を視覚的にハイライトする時にチェックしてください
[^10]: 右から左へ書く言語 (ヘブライ語、アラビア語など) をサポートするときに選択してください。
[^11]: どの言語パッケージをLyXが使うべきか選択してください
[^12]: 言語パッケージを読み込むコマンドを入力してください (既定値：\usepackage{babel}) 
[^13]: fontspecパッケージを使用して、OpenTypeやTrueTypeフォントを使用する (要XeTeXないしLuaTeX) 
[^14]: 文書の既定フォント族を選択してください
[^15]: フォントエンコーディングを指定します (例: T1)。
[^16]: ローマン (セリフ) 体の書体を選んでください
[^17]: サンセリフ (グロテスク) 体の書体を選んでください
[^18]: タイプライタ (等間隔) 体の書体を選んでください
[^19]: 日中韓 (CJK) で文字で使用するフォントを入力してください
[^20]: フォントが提供していれば、擬似でないスモールキャップ体を使用する
[^21]: 図を並べない旧様式を使用する
[^22]: 既定の用紙寸法を指定してください(表示・更新用) 
