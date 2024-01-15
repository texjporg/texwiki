---
title: "LyX/設定"
url: "/LyX/設定/"
date: 2012-07-12T19:19:01Z
bookCollapseSection: true
pukiwiki: "LyX/設定"
---

# LyX/設定

[LyX](/LyX/) > 設定

***

***

## 設定 {#d6c4c951}

### 言語 {#j97f863b}

#### 日本語の文書を作成する場合 {#v60a198e}

日本語の文書を作成する場合は babel を off にします．

\[ツール(T)\] &gt; \[設定(P)...\] &gt; \[言語設定\] &gt; \[言語\]

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　　　　　　　　　　　　　　　　　　</ins></span><br>
>
> 　　　　　　▷　操作性<br>
> 　　　　　　▷　編集<br>
> 　　　　　　 　 パス<br>
> 　　　　　　 　 利用者情報<br>
> 　　　　　　◢　言語設定<br>
> 　　　　　　　　　<span style="color:Black;background-color:#DAEAFF;">　言語　　　　　　　　</span><br>
> 　　　　　　　　　　スペルチェッカー<br>
> 　　　　　　▷　出力<br>
> 　　　　　　▷　ファイル処理<br>

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 操作画面用言語(I): <span style="color:Black;background-color:#EEEEEE;">\[日本語　　　　　　　　　　　　　▼\]</span>[^1]<br>
> 言語パッケージ(P): <span style="color:Black;background-color:#EEEEEE;">\[任意設定　▼\]</span>[^2]　<ins>　　　　　　　　　　</ins>[^3] ← 言語パッケージを詳細設定に変更し \usepackage{babel} を削除します．<br>
> 開始コマンド(T): 　　<ins>　　　　　　　　　　</ins>[^4] ← 開始コマンドの \selectlanguage{$$lang} を削除します．<br>
> 終了コマンド(N): 　　<ins>　　　　　　　　　　</ins>[^5]<br>
> 小数点記号の既定値(S): 　　<ins>.</ins><br>
> 長さ単位の既定値(U): <span style="color:Black;background-color:#EEEEEE;">\[cm　　　　　　　　　　　　　 ▼\]</span><br>
> ☐言語を大域的に設定(G)[^6] ← 言語を大域的に設定のチェックをはずします．<br>
> ☑自動開始(B)[^7]<br>
> ☑自動終了(E)[^8]<br>
> ☐外国語をマークする(F)[^9] ← 外国語をマークするのチェックをはずします．<br>
> 右から左書きの言語をサポート<br>
> 　☑右横書きサポートを有効化(R)[^10]<br>
> 　カーソルの動き: 🔘 論理的(L)　◯ 視覚的(V)<br>

\[適用(A)\] &gt; \[保存(S)\] をクリックして設定を反映させます．

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

LyX で自作文書クラスなどを使用したい場合は \[ヘルプ(H)\] &gt; \[カスタマイズ篇(C)\] の 『第5章 文書クラスを新規に導入する』 を参照してください．

レイアウトファイルは [layouts](https://git.lyx.org/?p=lyx.git;a=tree;f=lib/layouts;hb=HEAD) フォルダーに存在する [jlreq-article.layout](https://git.lyx.org/?p=lyx.git;a=blob;f=lib/layouts/jlreq-article.layout;hb=HEAD) などを参考にして作成すれば OK です．

Format 番号は LyX のバージョンによって異なります．

使用している LyX のバージョンの Format 番号を確認して編集してください．

#### レイアウトファイルを LyX に追加する {#k55c07b3}

Windows の場合はレイアウトファイルを

- %APPDATA%\LyX2.4\layouts\\
    <!-- -C:\Users\Lydia\AppData\Local\LyX 2.4\Resources\layouts\ -->
    <!-- -C:\Program Files\LyX 2.4\Resources\layouts\ -->

フォルダーにコピーします．

macOS の場合はレイアウトファイルを

<!-- -/Applications/LyX.app/Contents/Resources/layouts/ -->
- &#x7e;/Library/Application Support/LyX-2.4/layouts/

フォルダにコピーします．

Linux の場合はレイアウトファイルを

- &#x7e;/.lyx/layouts/

ディレクトリにコピーします．

\[ツール(T)\] &gt; \[環境構成(R)\] をクリックして LyX を再起動します．
\[文書(D)\] &gt; \[設定(S)...\] &gt; \[文書クラス\] に
作成した文書クラス
が追加されていることを確認します．

### 言語 {#a5afecd2}

#### 日本語の文書を作成する場合 {#ea058295}

日本語の文書を作成する場合は babel を off にします．

\[文書(D)\] &gt; \[設定(S)...\] &gt; \[言語\]

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　　　　　　　　　　　　　　　　　　</ins></span><br>
>
> <br>
>
> 　　　　　文書クラス<br>
> 　　　　　モジュール<br>
> 　　　　　ローカルのレイアウト<br>
> 　　　　　フォント<br>
> 　　　　　本文レイアウト<br>
> 　　　　　ページレイアウト<br>
> 　　　　　ページ余白<br>
> 　　　　<span style="color:Black;background-color:#DAEAFF;">　言語　　　　　　　　　　</span><br>
> 　　　　　色<br>
> 　　　　　連番と目次<br>
> 　　　　　書誌情報<br>
> 　　　　　索引<br>
> 　　　　　PDF特性<br>
> 　　　　　数式オプション<br>
> 　　　　　フロートの配置<br>
> 　　　　　プログラムリスト<br>
> 　　　　　ブリット<br>
> 　　　　　派生枝<br>
> 　　　　　形式<br>
> 　　　　　LaTeXプリアンブル<br>

日本語の文書を作成する場合は，言語を日本語に設定します．
出力した文書が文字化けしてしまう場合は uplatex, bibtexu, upmendex で処理する文字コードと出力文字コードが一致しているかどうか確認してください．

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 言語(L): 　　　<span style="color:Black;background-color:#EEEEEE;">\[日本語　　　　　　　　　　　　　▼\]</span> ← 言語を日本語に設定します<br>
> 引用様式(Q): <span style="color:Black;background-color:#EEEEEE;">\[「外側」および『内側』（言語既定値） ▼\]</span><br>
> 　　　　　　☐動的引用符を使用する(Y)[^11]<br>
> 文字コード<br>
> 　型(T):　 <span style="color:Black;background-color:#EEEEEE;">\[Unicode (utf8)　　　　　　▼\]</span><br>
> 　類型(V): <span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　　　　　　　▼\]</span><br>
>
> <br>
>
> 言語パッケージ(C): <span style="color:Black;background-color:#EEEEEE;">\[詳細設定　▼\]</span>[^12]　<ins>　　　　　　　　　　</ins>[^13] ← 言語パッケージを詳細設定に変更し，なにも入力しません．<br>

\[適用(A)\] をクリックします．

#### babel を使用して文書を作成する場合 {#ca4fc5c1}

babel を使用して文書を作成する場合は babel を on にします．

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 言語(L): 　　　<span style="color:Black;background-color:#EEEEEE;">\[日本語　　　　　　　　　　　　　▼\]</span> ← 言語を日本語に設定します<br>
> 引用様式(Q): <span style="color:Black;background-color:#EEEEEE;">\[「外側」および『内側』（言語既定値） ▼\]</span><br>
> 　　　　　　☐動的引用符を使用する(Y)<br>
> 文字コード<br>
> 　型(T):　 <span style="color:Black;background-color:#EEEEEE;">\[Unicode (utf8)　　　　　　▼\]</span><br>
> 　類型(V): <span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　　　　　　　▼\]</span><br>
>
> <br>
>
> 言語パッケージ(C): <span style="color:Black;background-color:#EEEEEE;">\[詳細設定　▼\]</span>　<ins>\usepackage\[ngerman,english,japanese\]{babel}</ins> ← 言語パッケージを詳細設定に変更し，使用する言語オプションを指定します．<br>

\[適用(A)\] をクリックします．

### フォント {#r177f199}

\[文書(D)\] &gt; \[設定(S)...\] &gt; \[フォント\]

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　　　　　　　　　　　　　　　　　　</ins></span><br>
>
> <br>
>
> 　　　　　文書クラス<br>
> 　　　　　モジュール<br>
> 　　　　　ローカルのレイアウト<br>
> 　　　　<span style="color:Black;background-color:#DAEAFF;">　フォント　　　　　　　　</span><br>
> 　　　　　本文レイアウト<br>
> 　　　　　ページレイアウト<br>
> 　　　　　ページ余白<br>
> 　　　　　言語<br>
> 　　　　　色<br>
> 　　　　　連番と目次<br>
> 　　　　　書誌情報<br>
> 　　　　　索引<br>
> 　　　　　PDF特性<br>
> 　　　　　数式オプション<br>
> 　　　　　フロートの配置<br>
> 　　　　　プログラムリスト<br>
> 　　　　　ブリット<br>
> 　　　　　派生枝<br>
> 　　　　　形式<br>
> 　　　　　LaTeXプリアンブル<br>

文書で使用するフォントを設定します．
11pt で文書を作成する場合は基本寸法を 11 に変更します．
10pt, 11pt, 12pt 以外の大きさの基本寸法を使用する場合は文書クラスのクラスオプションで指定します．
設定を反映させるために \[適用(A)\] をクリックします．
LuaLaTeX を使用して日本語文書を作成する場合は [LuaTeX-ja](/LuaTeX-ja/) を使用して LaTeXプリアンブルに日本語文書に使用するフォントの設定を記述してください．

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> ☐ 非TeXフォントを使用（XeTeX/LuaTeX経由）(U)[^14]<br>
> 既定のフォント族(D):　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　　　　　　　　　　　　　　　　　▼\]</span>[^15]　基本寸法(B):<span style="color:Black;background-color:#EEEEEE;">\[11　　　　▼\]</span><br>
> LaTeXフォントエンコーディング: <span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　　　　　　　　　　　　　　　　　▼\]</span>　<ins>　　　　　　　　　　　　</ins>[^16]<br>
> ローマン体(R):　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　　　　　　　　　　　　　　　　　▼\]</span>[^17]<br>
> サンセリフ体(S):　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　　　　　　　　　　　　　　　　　▼\]</span>[^18]　<span style="color:#888888;background-color:#EEEEEE;">縮尺(C) (%): <ins>100　　　\[<strong>⇕</strong>\]</ins></span><br>
> タイプライタ体(T):　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　　　　　　　　　　　　　　　　　▼\]</span>[^19]　<span style="color:#888888;background-color:#EEEEEE;">縮尺(A) (%): <ins>100　　　\[<strong>⇕</strong>\]</ins></span><br>
> 数式(M):　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[自動　　　　　　　　　　　　　　　　　　　　　▼\]</span>[^20]<br>
> CJK:　　　　　　　　　　　　　　　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins>[^21]<br>
> 　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:#EEEEEE;">☐ 真のスモールキャップ体を使う(M)</span>[^22]<br>
> 　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:#EEEEEE;">☐ オールドスタイル数字を使う(O)</span>[^23]<br>
> 　　　　　　　　　　　　　　　　　　　☐ マイクロタイポグラフィ拡張を有効にする(O)[^24]<br>
> 　　　　　　　　　　　　　　　　　　　☐ Disallow line breaks after dashes[^25]<br>

### 出力形式 {#pcd2eafa}

\[文書(D)\] &gt; \[設定(S)...\] &gt; \[形式\]

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　　　　　　　　　　　　　　　　　　</ins></span><br>
>
> <br>
>
> 　　　　　文書クラス<br>
> 　　　　　モジュール<br>
> 　　　　　ローカルのレイアウト<br>
> 　　　　　フォント<br>
> 　　　　　本文レイアウト<br>
> 　　　　　ページレイアウト<br>
> 　　　　　ページ余白<br>
> 　　　　　言語<br>
> 　　　　　色<br>
> 　　　　　連番と目次<br>
> 　　　　　書誌情報<br>
> 　　　　　索引<br>
> 　　　　　PDF特性<br>
> 　　　　　数式オプション<br>
> 　　　　　フロートの配置<br>
> 　　　　　プログラムリスト<br>
> 　　　　　ブリット<br>
> 　　　　　派生枝<br>
> 　　　　<span style="color:Black;background-color:#DAEAFF;">　形式　　　　　　　　　　</span><br>
> 　　　　　LaTeXプリアンブル<br>

#### PDF (dvipdfm) {#lca582a6}

dvipdfmx を使用したい場合は，既定出力形式を PDF (dvipdfm) に変更して \[適用(A)\] をクリックします．

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 出力形式<br>
> 　既定出力形式(F):　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[PDF (dvipdfm)　　　　　　　　　　　　　　　　　　　　▼\]</span>[^26]<br>

#### PDF (LuaTeX) {#g2e3c1cf}

LuaLaTeX を使用したい場合は，既定出力形式を PDF (LuaTeX) に変更して \[適用(A)\] をクリックします．

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 出力形式<br>
> 　既定出力形式(F):　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[PDF (LuaTeX)　　　　　　　　　　　　　　　　　　　　▼\]</span><br>

### 文書クラス {#g33dd885}

\[文書(D)\] &gt; \[設定(S)...\] &gt; \[文書クラス\]

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　　　　　　　　　　　　　　　　　　</ins></span><br>
>
> <br>
>
> 　　　　<span style="color:Black;background-color:#DAEAFF;">　文書クラス　　　　　　　</span><br>
> 　　　　　モジュール<br>
> 　　　　　ローカルのレイアウト<br>
> 　　　　　フォント<br>
> 　　　　　本文レイアウト<br>
> 　　　　　ページレイアウト<br>
> 　　　　　ページ余白<br>
> 　　　　　言語<br>
> 　　　　　色<br>
> 　　　　　連番と目次<br>
> 　　　　　書誌情報<br>
> 　　　　　索引<br>
> 　　　　　PDF特性<br>
> 　　　　　数式オプション<br>
> 　　　　　フロートの配置<br>
> 　　　　　プログラムリスト<br>
> 　　　　　ブリット<br>
> 　　　　　派生枝<br>
> 　　　　　形式<br>
> 　　　　　LaTeXプリアンブル<br>

#### upLaTeX + dvipdfmx の場合 {#ica39b31}

文書クラスで Japanese Article (JLReq Class) または Japanese Article (BX Bundle) を選択し，クラスオプションを設定します．
upLaTeX + dvipdfmx で Japanese Article (JLReq Class) を使用する場合は，クラスオプションに dvipdfmx を設定してグラフィックドライバに既定値を指定します．
upLaTeX + dvipdfmx で Japanese Article (BX Bundle) を使用する場合は，グラフィックドライバに既定値を指定します．
設定を反映させるために \[適用(A)\] をクリックします．

■ Japanese Article (JLReq Class) の場合

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 　文書クラス(C)<br>
> 　<span style="color:Black;background-color:#EEEEEE;">\[Japanese Article (JLReq Class)　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
>
> <br>
>
> 　クラスオプション<br>
> 　<span style="color:#888888;background-color:#EEEEEE;">☑事前定義(P):</span>　　<span style="color:#888888;background-color:#EEEEEE;">\[事前定義されたオプションがありません\]</span><br>
> 　任意設定(T):　　　 <ins>dvipdfmx,11pt</ins><br>
>
> <br>
>
> グラフィックドライバ(G):　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　▼\]</span><br>

■ Japanese Article (BX Bundle) の場合

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 　文書クラス(C)<br>
> 　<span style="color:Black;background-color:#EEEEEE;">\[Japanese Article (BX Bundle)　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
>
> <br>
>
> 　クラスオプション<br>
> 　☑事前定義(P):　　<ins>autodetect-engine, dvi=dvipdfmx, ja=standard</ins><br>
> 　任意設定(T):　　　 <ins>11pt</ins><br>
>
> <br>
>
> グラフィックドライバ(G):　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　▼\]</span><br>

#### LuaLaTeX の場合 {#l1a666c4}

文書クラスで Japanese Article (JLReq Class) または Japanese Article (BX Bundle) を選択し，クラスオプションを設定します．
LuaLaTeX で Japanese Article (JLReq Class) を使用する場合は，グラフィックドライバに既定値を指定します．
LuaLaTeX で Japanese Article (BX Bundle) を使用する場合は，グラフィックドライバに既定値を指定します．
設定を反映させるために \[適用(A)\] をクリックします．

■ Japanese Article (JLReq Class) の場合

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 　文書クラス(C)<br>
> 　<span style="color:Black;background-color:#EEEEEE;">\[Japanese Article (JLReq Class)　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
>
> <br>
>
> 　クラスオプション<br>
> 　<span style="color:#888888;background-color:#EEEEEE;">☑事前定義(P):</span>　　<span style="color:#888888;background-color:#EEEEEE;">\[事前定義されたオプションがありません\]</span><br>
> 　任意設定(T):　　　 <ins>11pt</ins><br>
>
> <br>
>
> グラフィックドライバ(G):　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　▼\]</span><br>

■ Japanese Article (BX Bundle) の場合

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 　文書クラス(C)<br>
> 　<span style="color:Black;background-color:#EEEEEE;">\[Japanese Article (BX Bundle)　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
>
> <br>
>
> 　クラスオプション<br>
> 　☑事前定義(P):　　<ins>autodetect-engine, dvi=dvipdfmx, ja=standard</ins><br>
> 　任意設定(T):　　　 <ins>11pt</ins><br>
>
> <br>
>
> グラフィックドライバ(G):　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　▼\]</span><br>

### フロートの配置 {#ofebe217}

図や表を使用する場合は

\[文書(D)\] &gt; \[設定(S)...\] &gt; \[フロートの配置\] で設定可能です．

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　　　　　　　　　　　　　　　　　　</ins></span><br>
>
> <br>
>
> 　　　　　文書クラス<br>
> 　　　　　モジュール<br>
> 　　　　　ローカルのレイアウト<br>
> 　　　　　フォント<br>
> 　　　　　本文レイアウト<br>
> 　　　　　ページレイアウト<br>
> 　　　　　ページ余白<br>
> 　　　　　言語<br>
> 　　　　　色<br>
> 　　　　　連番と目次<br>
> 　　　　　書誌情報<br>
> 　　　　　索引<br>
> 　　　　　PDF特性<br>
> 　　　　　数式オプション<br>
> 　　　　<span style="color:Black;background-color:#DAEAFF;">　フロートの配置　　　　</span><br>
> 　　　　　プログラムリスト<br>
> 　　　　　ブリット<br>
> 　　　　　派生枝<br>
> 　　　　　形式<br>
> 　　　　　LaTeXプリアンブル<br>

> ☐ 既定の配置を使用する(D) ← チェックをはずす<br>
> 　配置の詳細オプション<br>
> 　<span style="color:#888888;background-color:#EEEEEE;">☐ ページ上部(T)</span><br>
> 　<span style="color:#888888;background-color:#EEEEEE;">☐ ページ下部(B)</span><br>
> 　<span style="color:#888888;background-color:#EEEEEE;">☐ フロートを独立したページに(P)</span><br>
> 　<span style="color:#888888;background-color:#EEEEEE;">☐ 可能ならば現在位置に(H)</span><br>
> 　☑ 何としても現在位置に置く(F)<br>
> 　<span style="color:#888888;background-color:#EEEEEE;">☐ LaTeXの規則を無視する(I)</span><br>

### LaTeXプリアンブル {#lb7cb5ad}

プリアンブルを編集したい場合は

\[文書(D)\] &gt; \[設定(S)...\] &gt; \[LaTeXプリアンブル\] で編集可能です．

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　　　　　　　　　　　　　　　　　　</ins></span><br>
>
> <br>
>
> 　　　　　文書クラス<br>
> 　　　　　モジュール<br>
> 　　　　　ローカルのレイアウト<br>
> 　　　　　フォント<br>
> 　　　　　本文レイアウト<br>
> 　　　　　ページレイアウト<br>
> 　　　　　ページ余白<br>
> 　　　　　言語<br>
> 　　　　　色<br>
> 　　　　　連番と目次<br>
> 　　　　　書誌情報<br>
> 　　　　　索引<br>
> 　　　　　PDF特性<br>
> 　　　　　数式オプション<br>
> 　　　　　フロートの配置<br>
> 　　　　　プログラムリスト<br>
> 　　　　　ブリット<br>
> 　　　　　派生枝<br>
> 　　　　　形式<br>
> 　　　　<span style="color:Black;background-color:#DAEAFF;">　LaTeXプリアンブル　　</span><br>

upLaTeX + dvipdfmx あるいは LuaLaTeX で文書のプロパティのタイトル・作成者・サブタイトル・キーワードを作成したい場合は LaTeXプリアンブルで

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> ```
> \usepackage{ifpdf}
> \usepackage{ifluatex}
> \usepackage{ifxetex}
> \ifpdf
>   \ifluatex
>     \usepackage[pdfencoding=auto]{hyperref}
>   \else
>     \usepackage[whole,autotilde]{bxcjkjatype}
>     \usepackage[unicode]{hyperref}
>   \fi
> \else
>   \ifxetex
>     \usepackage{hyperref}
>     \usepackage{zxjatype}
>     \setjamainfont{ipaexm.ttf}
>     \setjasansfont{ipaexg.ttf}
>     \setjamonofont{ipaexg.ttf}
>   \else
>     \usepackage[dvipdfmx]{hyperref}
>     \usepackage{pxjahyper}
>   \fi
> \fi
> \hypersetup{%
>  bookmarksnumbered=true,%
>  colorlinks=true,%
>  setpagesize=false,%
>  pdftitle={WYSIWYMのLyXで},%
>  pdfauthor={たのしい},%
>  pdfsubject={LaTeXが},%
>  pdfkeywords={ポポポポ～ン}}
> ```
>

のように編集すれば OK です．

LaTeXプリアンブルで [hyperref](/hyperref/) パッケージを読み込んでいる場合

\[挿入(I)\] &gt; \[TeXコード\] で

```
\def\LyX{\texorpdfstring{L\kern-.1667em\lower.25em\hbox{Y}\kern-.125emX\@}{LyX}}
\section{\LyX{}するたびファイルがふえるね}
```

のように入力して \[文書(D)\] &gt; \[\[PDF (dvipdfm)\] を表示(V)\] をすると自動的にしおりを作成してくれます．

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
[^11]: 上で選択した様式に自動的に適応した引用符を出力します．これを選択しない場合には，引用符は挿入されたときの様式を維持します．
[^12]: どの言語パッケージをLyXが使うべきか選択してください
[^13]: 言語パッケージを読み込むコマンドを入力してください (既定値：\usepackage{babel}) 
[^14]: fontspecパッケージを使用して、OpenTypeやTrueTypeフォントを使用する (要XeTeXないしLuaTeX) 
[^15]: 文書の既定フォント族を選択してください
[^16]: フォントエンコーディングを指定します (例: T1)。
[^17]: ローマン (セリフ) 体の書体を選んでください
[^18]: サンセリフ (グロテスク) 体の書体を選んでください
[^19]: タイプライタ (等間隔) 体の書体を選んでください
[^20]: 数式の書体を選んでください
[^21]: 日中韓 (CJK) で文字で使用するフォントを入力してください
[^22]: フォントが提供していれば、擬似でないスモールキャップ体を使用する
[^23]: ライニング数字ではなくオールドスタイル数字を使用する
[^24]: microtypeパッケージを使用したぶら下げやフォント拡大などの拡張を有効にします
[^25]: By default, a line break can occur en- and em-dashes. Checking this box prevents that.
[^26]: 既定の用紙寸法を指定してください(表示・更新用) 
