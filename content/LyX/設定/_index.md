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

### 変換子 {#l23ec9b3}

\[ツール(T)\] &gt; \[設定(P)...\] &gt; \[ファイル処理\] &gt; \[変換子\]

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　　　　　　　　　　　　　　　　　　</ins></span><br>
>
> <br>
>
> 　　　　　　▷　操作性<br>
> 　　　　　　▷　編集<br>
> 　　　　　　 　 パス<br>
> 　　　　　　 　 利用者情報<br>
> 　　　　　　▷　言語設定<br>
> 　　　　　　▷　出力<br>
> 　　　　　　◢　ファイル処理<br>
> 　　　　　　　　　<span style="color:Black;background-color:#DAEAFF;">　変換子　　　　　　</span><br>
> 　　　　　　　　　　ファイル形式<br>

#### LaTeX (pLaTeX) -> DVI {#p0550e68}

2024年12月08日に日本語の文書のデフォルトが upLaTeX に変更されました。--&gt; [Make upLaTeX a default compiler for Japanese documents](https://git.lyx.org/gitweb/?p=lyx.git;a=commit;h=6bfa5f2e380e7513257a5373e537f9f3e461f439)

platex が設定されている場合は uplatex に変更します。

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 変換子の定義(N)<br>
> <span style="color:Black;background-color:#DAEAFF;">LaTeX (pLaTeX) -> DVI　　　　　　　　　　　　　　　　　　　　　　　　　　</span><br>
>
> ...<br>
> 変換元の形式(F):　　　　　　　　　　　　　　　　　　変換先の形式(T):<br>
> <span style="color:Black;background-color:#EEEEEE;">\[LaTeX (pLaTeX)　　　　　　　　　　　　　　　▼\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[DVI　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
>
> 変換子(O):　　　<ins>uplatex -no-guess-input-enc -kanji=utf8 -synctex=1</ins><br>
> 追加フラグ(X):　<ins>latex=uplatex</ins><br>

#### DVI -> PDF (dvipdfm) {#sb00b474}

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 変換子の定義(N)<br>
> <span style="color:Black;background-color:#DAEAFF;">DVI -> PDF (dvipdfm)　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span><br>
>
> ...<br>
> 変換元の形式(F):　　　　　　　　　　　　　　　　　　変換先の形式(T):<br>
> <span style="color:Black;background-color:#EEEEEE;">\[DVI　　　　　　　　　　　　　　　　　　　　　　　▼\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[PDF (dvipdfm)　　　　　　　　　　　　　　　　▼\]</span><br>
>
> 変換子(O):　　　<ins>dvipdfmx -o $$o $$i</ins><br>
> 追加フラグ(X):　<br>

#### LaTeX (LuaTeX) -> PDF (LuaTeX) {#ud8c1b28}

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 変換子の定義(N)<br>
> <span style="color:Black;background-color:#DAEAFF;">LaTeX (LuaTeX) -> PDF (LuaTeX)　　　　　　　　　　　　　　　　　　　　　　</span><br>
>
> ...<br>
> 変換元の形式(F):　　　　　　　　　　　　　　　　　　変換先の形式(T):<br>
> <span style="color:Black;background-color:#EEEEEE;">\[LaTeX (LuaTeX)　　　　　　　　　　　　　　　▼\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[PDF (LuaTeX)　　　　　　　　　　　　　　　　　　　▼\]</span><br>
>
> 変換子(O):　　　<ins>lualatex -synctex=1</ins><br>
> 追加フラグ(X):　<ins>latex=lualatex</ins><br>

#### LaTeX (plain) -> LyX {#tcc5ab59}

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 変換子の定義(N)<br>
> <span style="color:Black;background-color:#DAEAFF;">LaTeX (plain) -> LyX　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span><br>
>
> ...<br>
> 変換元の形式(F):　　　　　　　　　　　　　　　　　　変換先の形式(T):<br>
> <span style="color:Black;background-color:#EEEEEE;">\[LaTeX (plain)　　　　　　　　　　　　　　　　　▼\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[LyX　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
>
> 変換子(O):　　　<ins>tex2lyx -e utf8 -f $$i $$o</ins><br>
> 追加フラグ(X):<br>

### LaTeX {#m41cae1f}

\[ツール(T)\] &gt; \[設定(P)...\] &gt; \[出力\] &gt; \[LaTeX\]

書誌情報の生成の処理プログラムのコマンドを bibtexu に設定します。

索引の生成の処理プログラムのコマンドを upmendex に設定します。

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　　　　　　　　　　　　　　　　　　</ins></span><br>
>
> <br>
>
> 　　　　　　▷　操作性<br>
> 　　　　　　▷　編集<br>
> 　　　　　　 　 パス<br>
> 　　　　　　 　 利用者情報<br>
> 　　　　　　▷　言語設定<br>
> 　　　　　　◢　出力<br>
> 　　　　　　　　　　一般<br>
> 　　　　　　　　　　プリンタ<br>
> 　　　　　　　　　<span style="color:Black;background-color:#DAEAFF;">　LaTeX　　　　　　　</span><br>
> 　　　　　　▷　ファイル処理<br>

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> ☑ LaTeXフォントエンコーディング:　　<ins>T1</ins>[^1] ← デフォルトでは \usepackage\[T1\]{fontenc} がプリアンブルに追加されます．<br> <!-- 既定の用紙寸法(Z):　　　　　　&color(Black,#EEEEEE){[既定値　　　　　　　　　　　　▼]};&br; -->
> DVIビューア用紙寸法設定:　　[^2]<br>
> 書誌情報の生成<br>
> &nbsp;処理プログラム(R):　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[詳細設定　　　　　　　　　　　　　　　　 ▼\]</span><br>
> &nbsp;コマンド(O):　　　　　<ins>bibtexu</ins>[^3]<br>
> &nbsp;日本語用処理プログラム(J):　<span style="color:Black;background-color:#EEEEEE;">\[詳細設定　　　　　　　　　　　　　　　　　　 ▼\]</span><br>
> &nbsp;コマンド(M):　　　　　<ins>bibtexu</ins>[^4]<br>
> 索引の生成<br>
> &nbsp;処理プログラム(P):　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[詳細設定　　　　　　　　　　　　　　　　　▼\]</span><br>
> &nbsp;コマンド(M):　　　　　<ins>upmendex -c -q</ins>[^5]<br>
> &nbsp;日本語用処理プログラム(J):　<ins>upmendex -c -q</ins>[^6]<br>
>
> <br>
>
> &nbsp;用語集コマンド(N):　<ins>upmendex -s nomencl.ist</ins>[^7]<br>
> &nbsp;CheckTeXコマンド:　<ins>chktex -n1 -n3 -n6 -n9 -n22 -n25 -n30 -n38</ins>[^8]<br>
> &nbsp;☑ LaTeXファイルでWindows流のパス表記を使う(U)[^9]<br>
> &nbsp;☐ 文書クラス変更時にクラスオプションをリセットする(E)[^10]<br>

### 言語 {#j97f863b}

#### upLaTeX で日本語の文書を作成する場合 {#v60a198e}

upLaTeX で日本語の文書を作成する場合は babel を無効にします．

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
> 操作画面用言語(I): <span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　　　　　　　　　　▼\]</span>[^11]<br>
> LaTeX言語サポート<br>
> 　言語パッケージ(P): <span style="color:Black;background-color:#EEEEEE;">\[詳細設定　▼\]</span>[^12]　<ins>　　　　　　　　　　</ins>[^13] ← 言語パッケージを詳細設定に変更し \usepackage{babel} を削除します．<br>
> 　開始コマンド(T): 　　<ins>　　　　　　　　　　</ins>[^14] ← 開始コマンドの \selectlanguage{$$lang} を削除します．<br>
> 　終了コマンド(N): 　　<ins>　　　　　　　　　　</ins>[^15]<br>
> 　☐言語を大域的に設定(G)[^16] ← 言語を大域的に設定のチェックをはずします．<br>
> 　☐文書言語を明示的に設定(X)[^17]<br>
> 　☐文書言語を明示的に解除(U)[^18]<br>
> エディタの設定<br>
> 　☑追加言語をマークする(M)[^19]<br>
> 　右横書きでのカーソルの移動[^20]: 🔘 論理的(L)　◯ 視覚的(V)<br>
> ローカル設定<br>
> 　小数点記号の既定値(S): <span style="color:Black;background-color:#EEEEEE;">\[言語既定値 ▼\]</span><br>
> 　長さ単位の既定値(U):　 <span style="color:Black;background-color:#EEEEEE;">\[cm　　　　▼\]</span><br>

#### upLaTeX で babel を使用して多言語文書を作成する場合 {#j34bc968}

babel を使用して多言語文書を作成する場合は babel を有効にします．

babel のオプションを設定する場合は以下の方法があります．

- クラスオプションでグローバルに設定する (\[ツール(T)\] &gt; \[設定(P)...\] &gt; \[言語設定\] &gt; \[言語\])
- babel のオプションでローカルに設定する (\[文書(D)\] &gt; \[設定(S)...\] &gt; \[言語\])

### ファイル形式, 順検索 (forward search) {#o4630905}

{{< children >}}

```

```

を参照．

## 文書の設定 {#x90c6e46}

### レイアウトファイルの追加 {#g3fd040c}

- [LyX wiki | Layouts / Layouts](http://wiki.lyx.org/Layouts/Layouts)
- [LyX wiki | Layouts / CreatingLayouts](http://wiki.lyx.org/Layouts/CreatingLayouts)

LyX で自作文書クラスなどを使用したい場合は \[ヘルプ(H)\] &gt; \[カスタマイズ篇(C)\] の 『第5章 文書クラスを新規に導入する』 を参照してください．

レイアウトファイルは [layouts](https://git.lyx.org/gitweb/?p=lyx.git;a=tree;f=lib/layouts) フォルダーに存在する [article.layout](https://git.lyx.org/gitweb/?p=lyx.git;a=blob;f=lib/layouts/article.layout)、[jlreq-common.inc](https://git.lyx.org/gitweb/?p=lyx.git;a=blob;f=lib/layouts/jlreq-common.inc)、[jlreq-article.layout](https://git.lyx.org/gitweb/?p=lyx.git;a=blob;f=lib/layouts/jlreq-article.layout)、[bxjsarticle.layout](https://git.lyx.org/gitweb/?p=lyx.git;a=blob;f=lib/layouts/bxjsarticle.layout) などを参考にして作成すれば OK です．

Format 番号は LyX のバージョンによって異なります．

使用している LyX のバージョンの Format 番号を確認して編集してください．

#### レイアウトファイルを LyX に追加する {#k55c07b3}

Windows の場合はレイアウトファイルを

- %APPDATA%\LyX2.5\layouts\\
    <!-- -C:\Users\Lydia\AppData\Local\LyX 2.5\Resources\layouts\ -->
    <!-- -C:\Program Files\LyX 2.5\Resources\layouts\ -->

フォルダーにコピーします．

macOS の場合はレイアウトファイルを

<!-- -/Applications/LyX.app/Contents/Resources/layouts/ -->
- &#x7e;/Library/Application Support/LyX-2.5/layouts/

フォルダにコピーします．

Linux の場合はレイアウトファイルを

- &#x7e;/.lyx/layouts/

ディレクトリにコピーします．

\[ツール(T)\] &gt; \[環境構成(R)\] をクリックして LyX を再起動します．
\[文書(D)\] &gt; \[設定(S)...\] &gt; \[文書クラス\] に
作成した文書クラス
が追加されていることを確認します．

### 言語 {#a5afecd2}

#### upLaTeX で日本語の文書を作成する場合 {#ea058295}

upLaTeX で日本語の文書を作成する場合は babel を無効にします．

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
> 　　　　　色彩<br>
> 　　　　　変更追跡機能<br>
> 　　　　　連番と目次<br>
> 　　　　　書誌情報<br>
> 　　　　　索引<br>
> 　　　　　PDF特性<br>
> 　　　　　数式オプション<br>
> 　　　　　フロートの設定<br>
> 　　　　　プログラムリスト<br>
> 　　　　　ブリット<br>
> 　　　　　派生枝<br>
> 　　　　　出力<br>
> 　　　　　LaTeXプリアンブル<br>

upLaTeX で日本語の文書を作成する場合は，文字コードの類型を 拡張 \[pLaTeX\] (日本語) に設定します．

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 言語(L): 　　　<span style="color:Black;background-color:#EEEEEE;">\[日本語　　　　　　　　　　　　　▼\]</span><br>
> 引用様式(Q): <span style="color:Black;background-color:#EEEEEE;">\[「外側」および『内側』（言語既定値） ▼\]</span><br>
> 　　　　　　☐動的引用符を使用する(Y)[^21]<br>
> 文字コード<br>
> 　型(T):　　　　　　　 <span style="color:Black;background-color:#EEEEEE;">\[Unicode (utf8)　　　　▼\]</span><br>
> 　類型(V):　　　　　　 <span style="color:Black;background-color:#EEEEEE;">\[拡張 \[pLaTeX\] (日本語) ▼\]</span> ← 類型を 拡張 \[pLaTeX\] (日本語) に設定します．<br>
>
> <br>
>
> 言語パッケージ(C): <span style="color:Black;background-color:#EEEEEE;">\[詳細設定　▼\]</span>[^22]　<ins>　　　　　　　　　　</ins>[^23] ← 言語パッケージを詳細設定に変更し，なにも入力しません．<br>

#### upLaTeX で babel を使用して多言語文書を作成する場合 {#ca4fc5c1}

upLaTeX で babel を使用して文書を作成する場合は babel を有効にします．

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 言語(L): 　　　<span style="color:Black;background-color:#EEEEEE;">\[日本語　　　　　　　　　　　　　▼\]</span><br>
> 引用様式(Q): <span style="color:Black;background-color:#EEEEEE;">\[「外側」および『内側』（言語既定値） ▼\]</span><br>
> 　　　　　　☐動的引用符を使用する(Y)<br>
> 文字コード<br>
> 　型(T):　　　　　　　 <span style="color:Black;background-color:#EEEEEE;">\[Unicode (utf8)　　　　▼\]</span><br>
> 　類型(V):　　　　　　 <span style="color:Black;background-color:#EEEEEE;">\[拡張 \[pLaTeX\] (日本語) ▼\]</span><br>
>
> <br>
>
> 言語パッケージ(C): <span style="color:Black;background-color:#EEEEEE;">\[詳細設定　▼\]</span>　<ins>\usepackage\[ngerman,english,japanese\]{babel}</ins> ← 言語パッケージを詳細設定に変更し，使用する言語オプションを指定します．<br>

#### [LuaLaTeX](/LuaTeX/) で文書を作成する場合 {#n7a3be37}

LuaLaTeX で文書を作成する場合は，文字コードの類型を 直接 (inputencなし) に設定します．

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 言語(L): 　　　<span style="color:Black;background-color:#EEEEEE;">\[日本語　　　　　　　　　　　　　▼\]</span><br>
> 引用様式(Q): <span style="color:Black;background-color:#EEEEEE;">\[「外側」および『内側』（言語既定値） ▼\]</span><br>
> 　　　　　　☐動的引用符を使用する(Y)<br>
> 文字コード<br>
> 　型(T):　　　　　　　 <span style="color:Black;background-color:#EEEEEE;">\[Unicode (utf8)　　　　▼\]</span><br>
> 　類型(V):　　　　　　 <span style="color:Black;background-color:#EEEEEE;">\[直接 (inputencなし) 　 ▼\]</span> ← 類型を 直接 (inputencなし) に設定します．<br>
>
> <br>
>
> 言語パッケージ(C): <span style="color:Black;background-color:#EEEEEE;">\[詳細設定　▼\]</span>　<ins>　　　　　　　　　　</ins><br>

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
> 　　　　　色彩<br>
> 　　　　　変更追跡機能<br>
> 　　　　　連番と目次<br>
> 　　　　　書誌情報<br>
> 　　　　　索引<br>
> 　　　　　PDF特性<br>
> 　　　　　数式オプション<br>
> 　　　　　フロートの設定<br>
> 　　　　　プログラムリスト<br>
> 　　　　　ブリット<br>
> 　　　　　派生枝<br>
> 　　　　　出力<br>
> 　　　　　LaTeXプリアンブル<br>

文書で使用するフォントを設定します．
11pt で文書を作成する場合は基本寸法を 11 に変更します．
10pt, 11pt, 12pt 以外の大きさの基本寸法を使用する場合は文書クラスのクラスオプションで指定します．
LuaLaTeX を使用して日本語文書を作成する場合は LaTeXプリアンブルに日本語文書に使用するフォントの設定を記述してください．

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> ☐ 非TeXフォントを使用（XeTeX/LuaTeX経由）(U)[^24]<br>
> 既定のフォント族(D):　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　　　　　　　　　　　　　　　　　▼\]</span>[^25]　基本寸法(B):<span style="color:Black;background-color:#EEEEEE;">\[11　　　　▼\]</span><br>
> LaTeXフォント符号化方式: <span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　　　　　　　　　　　　　　　　　▼\]</span>　<ins>　　　　　　　　　　　　</ins>[^26]<br>
> ローマン体(R):　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　　　　　　　　　　　　　　　　　▼\]</span>[^27]　<span style="color:#888888;background-color:#EEEEEE;">☐ 真のスモールキャップ体を使う(M)</span>[^28]<br>
> 　　　　　　　　　　　　　<span style="color:#888888;background-color:#EEEEEE;">☐ オールドスタイル数字を使う(O)</span>[^29]<br>
> サンセリフ体(S):　　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　　　　　　　　　　　　　　　　　▼\]</span>[^30]　<span style="color:#888888;background-color:#EEEEEE;">縮尺(C) (%): <ins>100　　　\[<strong>⇕</strong>\]</ins></span><br>
> 　　　　　　　　　　　　　<span style="color:#888888;background-color:#EEEEEE;">☐ オールドスタイル数字を使う(Y)</span>[^31]<br>
> タイプライタ体(T):　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　　　　　　　　　　　　　　　　　▼\]</span>[^32]　<span style="color:#888888;background-color:#EEEEEE;">縮尺(A) (%): <ins>100　　　\[<strong>⇕</strong>\]</ins></span><br>
> 　　　　　　　　　　　　　<span style="color:#888888;background-color:#EEEEEE;">☐ オールドスタイル数字を使う(F)</span>[^33]<br>
> 数式(M):　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[自動　　　　　　　　　　　　　　　　　　　　　▼\]</span>[^34]<br>
> CJK:　　　　　　　　　　　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins>[^35]<br>
> ☐ マイクロタイポグラフィ拡張を有効にする(O)[^36]<br>
> ☐ ダッシュ後の改行を不許可(I)[^37]<br>

### 出力 {#pcd2eafa}

\[文書(D)\] &gt; \[設定(S)...\] &gt; \[出力\]

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
> 　　　　　色彩<br>
> 　　　　　変更追跡機能<br>
> 　　　　　連番と目次<br>
> 　　　　　書誌情報<br>
> 　　　　　索引<br>
> 　　　　　PDF特性<br>
> 　　　　　数式オプション<br>
> 　　　　　フロートの設定<br>
> 　　　　　プログラムリスト<br>
> 　　　　　ブリット<br>
> 　　　　　派生枝<br>
> 　　　　<span style="color:Black;background-color:#DAEAFF;">　出力　　　　　　　　　　</span><br>
> 　　　　　LaTeXプリアンブル<br>

#### PDF (dvipdfm) {#lca582a6}

upLaTeX + dvipdfmx の場合は，既定出力形式を PDF (dvipdfm) に変更します．

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 出力形式<br>
> 　既定出力形式(F):　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[PDF (dvipdfm)　　　　　　　　　　　　　　　　　　　　▼\]</span>[^38]<br>

#### PDF (LuaTeX) {#g2e3c1cf}

LuaLaTeX の場合は，既定出力形式を PDF (LuaTeX) に変更します．

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
> 　　　　　色彩<br>
> 　　　　　変更追跡機能<br>
> 　　　　　連番と目次<br>
> 　　　　　書誌情報<br>
> 　　　　　索引<br>
> 　　　　　PDF特性<br>
> 　　　　　数式オプション<br>
> 　　　　　フロートの設定<br>
> 　　　　　プログラムリスト<br>
> 　　　　　ブリット<br>
> 　　　　　派生枝<br>
> 　　　　　出力<br>
> 　　　　　LaTeXプリアンブル<br>

#### upLaTeX + dvipdfmx の場合 {#ica39b31}

文書クラスで 日本語Article (JLReqクラス) または 日本語Article (BXシリーズ) を選択し，クラスオプションを設定します．
upLaTeX + dvipdfmx で 日本語Article (JLReqクラス) を使用する場合は，クラスオプションに uplatex,dvipdfmx を設定してグラフィックドライバに既定値を指定します．
upLaTeX + dvipdfmx で 日本語Article (BXシリーズ) を使用する場合は，グラフィックドライバに既定値を指定します．

■ 日本語Article (JLReqクラス) の場合

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 　文書クラス(C)<br>
> 　<span style="color:Black;background-color:#EEEEEE;">\[日本語Article (JLReqクラス)　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
>
> <br>
>
> 　クラスオプション<br>
> 　<span style="color:#888888;background-color:#EEEEEE;">☑事前定義(P):</span>　　<span style="color:#888888;background-color:#EEEEEE;">\[事前定義されたオプションがありません\]</span><br>
> 　詳細設定(T):　　　 <ins>uplatex,dvipdfmx,11pt</ins><br>
>
> <br>
>
> グラフィックドライバ(G):　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　▼\]</span><br>

■ 日本語Article (BXシリーズ) の場合

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 　文書クラス(C)<br>
> 　<span style="color:Black;background-color:#EEEEEE;">\[日本語Article (BXシリーズ)　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
>
> <br>
>
> 　クラスオプション<br>
> 　☑事前定義(P):　　<ins>autodetect-engine, dvi=dvipdfmx, ja=standard</ins><br>
> 　詳細設定(T):　　　 <ins>11pt</ins><br>
>
> <br>
>
> グラフィックドライバ(G):　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　▼\]</span><br>

#### LuaLaTeX の場合 {#l1a666c4}

文書クラスで 日本語Article (JLReqクラス) または 日本語Article (BXシリーズ) を選択し，クラスオプションを設定します．
LuaLaTeX で 日本語Article (JLReqクラス) を使用する場合は，グラフィックドライバに既定値を指定します．
LuaLaTeX で 日本語Article (BXシリーズ) を使用する場合は，グラフィックドライバに既定値を指定します．

■ 日本語Article (JLReqクラス) の場合

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 　文書クラス(C)<br>
> 　<span style="color:Black;background-color:#EEEEEE;">\[日本語Article (JLReqクラス)　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
>
> <br>
>
> 　クラスオプション<br>
> 　<span style="color:#888888;background-color:#EEEEEE;">☑事前定義(P):</span>　　<span style="color:#888888;background-color:#EEEEEE;">\[事前定義されたオプションがありません\]</span><br>
> 　詳細設定(T):　　　 <ins>11pt</ins><br>
>
> <br>
>
> グラフィックドライバ(G):　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　▼\]</span><br>

■ 日本語Article (BXシリーズ) の場合

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 文書の設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 　文書クラス(C)<br>
> 　<span style="color:Black;background-color:#EEEEEE;">\[日本語Article (BXシリーズ)　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>
>
> <br>
>
> 　クラスオプション<br>
> 　☑事前定義(P):　　<ins>autodetect-engine, dvi=dvipdfmx, ja=standard</ins><br>
> 　詳細設定(T):　　　 <ins>11pt</ins><br>
>
> <br>
>
> グラフィックドライバ(G):　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　▼\]</span><br>

### フロートの設定 {#ofebe217}

図や表を使用する場合は

\[文書(D)\] &gt; \[設定(S)...\] &gt; \[フロートの設定\] で設定可能です．

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
> 　　　　　色彩<br>
> 　　　　　変更追跡機能<br>
> 　　　　　連番と目次<br>
> 　　　　　書誌情報<br>
> 　　　　　索引<br>
> 　　　　　PDF特性<br>
> 　　　　　数式オプション<br>
> 　　　　<span style="color:Black;background-color:#DAEAFF;">　フロートの設定　　　　</span><br>
> 　　　　　プログラムリスト<br>
> 　　　　　ブリット<br>
> 　　　　　派生枝<br>
> 　　　　　出力<br>
> 　　　　　LaTeXプリアンブル<br>

> ページ上の場所<br>
> 　配置の設定(M): <span style="color:Black;background-color:#EEEEEE;">\[詳細設定　　　　　　▼\]</span><br>
> 　<span style="color:#888888;background-color:#EEEEEE;">☐ ページ上部(T)</span><br>
> 　<span style="color:#888888;background-color:#EEEEEE;">☐ ページ下部(B)</span><br>
> 　<span style="color:#888888;background-color:#EEEEEE;">☐ フロートを独立したページに(P)</span><br>
> 　<span style="color:#888888;background-color:#EEEEEE;">☐ 可能ならば現在位置に(H)</span><br>
> 　☑ 何としても現在位置に(F)<br>
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
> 　　　　　色彩<br>
> 　　　　　変更追跡機能<br>
> 　　　　　連番と目次<br>
> 　　　　　書誌情報<br>
> 　　　　　索引<br>
> 　　　　　PDF特性<br>
> 　　　　　数式オプション<br>
> 　　　　　フロートの設定<br>
> 　　　　　プログラムリスト<br>
> 　　　　　ブリット<br>
> 　　　　　派生枝<br>
> 　　　　　出力<br>
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

[^1]: フォントエンコーディングを指定します (例: T1)。
[^2]: 特定のDVIビューアが使う用紙寸法フラグを設定(-paper) 
[^3]: BibTeXコマンドとオプション
[^4]: pLaTeX(日本語)使用時のBibTeXコマンドとオプション
[^5]: 索引コマンドとオプション(makeindex, xindy) 
[^6]: pLaTeX(日本語)使用時の索引コマンドとオプション
[^7]: 用語集コマンドとオプション(通常makeindex) 
[^8]: CheckTeX開始コマンドとオプション
[^9]: Select whether LyX should output Windows or Cygwin style paths to LaTeX files. Don't change the default unless the TeX engine was not correctly detected at configure time. Warning: Your changes here will not be saved.
[^10]: クラスが変更された時にクラスオプションを既定値にする
[^11]: 操作画面 (メニューやダイアログなど) 用言語を選択してください。
[^12]: どの (LaTeX) 言語パッケージを既定として使うべきか選択してください
[^13]: 言語パッケージを読み込むコマンドを入力してください (既定値：\usepackage{babel}) 
[^14]: 別の言語への切替を開始するLaTeXコマンドです。$$langは実際の言語名に置き換えられます。
[^15]: 別の言語への切替を終了するLaTeXコマンドです。$$langは実際の言語名に置き換えられます。
[^16]: 有効にすると、言語を局所的に (言語パッケージに) は渡さずに、大域的に (文書クラスに) 渡すようになり、使用言語が他のパッケージにも知れ渡るようになります。
[^17]: 有効にすると、文書言語は、言語切替コマンドで明示的に設定されるようになります
[^18]: 有効にすると、文書言語は、言語切替コマンドで明示的に閉じるようになります
[^19]: 有効にすると、作業領域で (文書言語でない) 追加言語を視覚的にハイライトするようになります
[^20]: 右横書き (RTL) のスクリプトにおける矢印キーの挙動をここで指定します
[^21]: 上で選択した様式に自動的に適応した引用符を出力します．これを選択しない場合には，引用符は挿入されたときの様式を維持します．
[^22]: どの言語パッケージをLyXが使うべきか選択してください
[^23]: 言語パッケージを読み込むコマンドを入力してください (既定値：\usepackage{babel}) 
[^24]: fontspecパッケージを使用して、OpenTypeやTrueTypeフォントを使用する (要XeTeXないしLuaTeX) 
[^25]: 文書の既定フォント族を選択してください
[^26]: フォントエンコーディングを指定します (例: T1)。
[^27]: ローマン (セリフ) 体の書体を選んでください
[^28]: フォントが提供していれば、擬似でないスモールキャップ体を使用する
[^29]: ライニング数字ではなくオールドスタイル数字を使用する
[^30]: サンセリフ (グロテスク) 体の書体を選んでください
[^31]: ライニング数字ではなくオールドスタイル数字を使用する
[^32]: タイプライタ (等間隔) 体の書体を選んでください
[^33]: ライニング数字ではなくオールドスタイル数字を使用する
[^34]: 数式の書体を選んでください
[^35]: 日中韓 (CJK) で文字で使用するフォントを入力してください
[^36]: microtypeパッケージを使用したぶら下げやフォント拡大などの拡張を有効にします
[^37]: By default, a line break can occur en- and em-dashes. Checking this box prevents that.
[^38]: 既定の用紙寸法を指定してください(表示・更新用) 
