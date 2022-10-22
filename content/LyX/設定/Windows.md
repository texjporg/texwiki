---
title: "LyX/設定/Windows"
url: "/LyX/設定/Windows/"
date: 2012-10-02T12:08:39Z
pukiwiki: "LyX/設定/Windows"
---

# LyX/設定/Windows

[LyX](/LyX/) > [設定](</LyX/設定/>) > Windows

***

***

## 設定 {#ue19dc3a}

### LaTeX {#m41cae1f}

\[ツール(T)\] &gt; \[設定(P)...\] &gt; \[出力\] &gt; \[LaTeX\]

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
> &nbsp;処理子(R):　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[任意設定　　　　　　　　　　　　　　　　 ▼\]</span><br>
> &nbsp;コマンド(O):　　　　　upbibtex[^3]<br>
> &nbsp;日本語用処理子(J):　<span style="color:Black;background-color:#EEEEEE;">\[自動　　　　　　　　　　　　　　　　　　 ▼\]</span><br>
> &nbsp;オプション(I):　　　　　[^4]<br>
> 索引の生成<br>
> &nbsp;処理子(P):　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[texindy　　　　　　　　　　　　　　　　　▼\]</span><br>
> &nbsp;オプション(T):　　　　　[^5]<br>
> &nbsp;日本語用処理子(J):　<ins>upmendex -c -q</ins>[^6]<br>
>
> <br>
>
> &nbsp;用語集コマンド(N):　<ins>makeindex -s nomencl.ist</ins>[^7]<br>
> &nbsp;CheckTeXコマンド:　<ins>chktex -n1 -n3 -n6 -n9 -n22 -n25 -n30 -n38</ins>[^8]<br>
> &nbsp;☑ LaTeXファイルでWindows流のパス表記を使う(U)[^9]<br>
> &nbsp;☐ 文書クラス変更時にクラスオプションをリセットする(E)[^10]<br>

\[適用(A)\] &gt; \[保存(S)\] をクリックして設定を反映させます．

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

\[修正(M)\] &gt; \[適用(A)\] &gt; \[保存(S)\] をクリックして設定を反映させます．

#### LaTeX (pLaTeX) -> DVI {#p0550e68}

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

\[修正(M)\] &gt; \[適用(A)\] &gt; \[保存(S)\] をクリックして設定を反映させます．

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

\[修正(M)\] &gt; \[適用(A)\] &gt; \[保存(S)\] をクリックして設定を反映させます．

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

\[修正(M)\] &gt; \[適用(A)\] &gt; \[保存(S)\] をクリックして設定を反映させます．

### ファイル形式 {#k5d395e1}

\[ツール(T)\] &gt; \[設定(P)...\] &gt; \[ファイル処理\] &gt; \[ファイル形式\]

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
> 　　　　　　　　　　変換子<br>
> 　　　　　　　　　<span style="color:Black;background-color:#DAEAFF;">　ファイル形式　　　</span><br>

#### PDF (dvipdfm) {#xc68f23e}

■ [SumatraPDF](/SumatraPDF/) の場合

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 形式(F):　　　　　　　　<ins>PDF (dvipdfm)　　　　　　　　　　 <strong>ᐯ</strong></ins><br>
> 　　　　　　　　　　　　☑ 文書形式(D)<br>
> 　　　　　　　　　　　　☑ 書き出しメニューに表示(W)<br>
> 　　　　　　　　　　　　☑ ベクトル画像形式(G)<br>
> 短縮名(H):　　　　　　<ins>pdf3</ins><br>
> 拡張子(X):　　　　　　<ins>pdf</ins><br>
> MIME:　　　　　　　　　<ins>application/pdf</ins><br>
> 捷径(U):　　　　　　　 <ins>m</ins><br>
> 編集プログラム(I):　 <span style="color:Black;background-color:#EEEEEE;">\[なし　　　　　　　　　　　　　　　　 ▼\]</span><br>
> 閲覧プログラム(V):　<span style="color:Black;background-color:#EEEEEE;">\[任意設定　　　　　　　　　　　　　▼\]</span>　<ins>start SumatraPDF -reuse-instance</ins><br>
> 複写子(P):<br>

\[適用(A)\] &gt; \[保存(S)\] をクリックして設定を反映させます．

■ [TeXworks](/TeXworks/) の場合

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 形式(F):　　　　　　　　<ins>PDF (dvipdfm)　　　　　　　　　　 <strong>ᐯ</strong></ins><br>
> 　　　　　　　　　　　　☑ 文書形式(D)<br>
> 　　　　　　　　　　　　☑ 書き出しメニューに表示(W)<br>
> 　　　　　　　　　　　　☑ ベクトル画像形式(G)<br>
> 短縮名(H):　　　　　　<ins>pdf3</ins><br>
> 拡張子(X):　　　　　　<ins>pdf</ins><br>
> MIME:　　　　　　　　　<ins>application/pdf</ins><br>
> 捷径(U):　　　　　　　 <ins>m</ins><br>
> 編集プログラム(I):　 <span style="color:Black;background-color:#EEEEEE;">\[なし　　　　　　　　　　　　　　　　 ▼\]</span><br>
> 閲覧プログラム(V):　<span style="color:Black;background-color:#EEEEEE;">\[任意設定　　　　　　　　　　　　　▼\]</span>　<ins>texworks</ins><br>
> 複写子(P):<br>

\[適用(A)\] &gt; \[保存(S)\] をクリックして設定を反映させます．

■ Adobe Acrobat Reader の場合

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 形式(F):　　　　　　　　<ins>PDF (dvipdfm)　　　　　　　　　　 <strong>ᐯ</strong></ins><br>
> 　　　　　　　　　　　　☑ 文書形式(D)<br>
> 　　　　　　　　　　　　☑ 書き出しメニューに表示(W)<br>
> 　　　　　　　　　　　　☑ ベクトル画像形式(G)<br>
> 短縮名(H):　　　　　　<ins>pdf3</ins><br>
> 拡張子(X):　　　　　　<ins>pdf</ins><br>
> MIME:　　　　　　　　　<ins>application/pdf</ins><br>
> 捷径(U):　　　　　　　 <ins>m</ins><br>
> 編集プログラム(I):　 <span style="color:Black;background-color:#EEEEEE;">\[なし　　　　　　　　　　　　　　　　 ▼\]</span><br>
> 閲覧プログラム(V):　<span style="color:Black;background-color:#EEEEEE;">\[任意設定　　　　　　　　　　　　　▼\]</span>　<ins>pdfview</ins><br>
> 複写子(P):<br>

\[適用(A)\] &gt; \[保存(S)\] をクリックして設定を反映させます．

#### PDF (LuaTeX) {#p51f4c4b}

■ [SumatraPDF](/SumatraPDF/) の場合

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 形式(F):　　　　　　　　<ins>PDF (LuaTeX)　　　　　　　　　　 <strong>ᐯ</strong></ins><br>
> 　　　　　　　　　　　　☑ 文書形式(D)<br>
> 　　　　　　　　　　　　☑ 書き出しメニューに表示(W)<br>
> 　　　　　　　　　　　　☑ ベクトル画像形式(G)<br>
> 短縮名(H):　　　　　　<ins>pdf5</ins><br>
> 拡張子(X):　　　　　　<ins>pdf</ins><br>
> MIME:　　　　　　　　　<ins>application/pdf</ins><br>
> 捷径(U):　　　　　　　 <ins>u</ins><br>
> 編集プログラム(I):　 <span style="color:Black;background-color:#EEEEEE;">\[なし　　　　　　　　　　　　　　　　 ▼\]</span><br>
> 閲覧プログラム(V):　<span style="color:Black;background-color:#EEEEEE;">\[任意設定　　　　　　　　　　　　　▼\]</span>　<ins>start SumatraPDF -reuse-instance</ins><br>
> 複写子(P):<br>

\[適用(A)\] &gt; \[保存(S)\] をクリックして設定を反映させます．

■ [TeXworks](/TeXworks/) の場合

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 形式(F):　　　　　　　　<ins>PDF (LuaTeX)　　　　　　　　　　 <strong>ᐯ</strong></ins><br>
> 　　　　　　　　　　　　☑ 文書形式(D)<br>
> 　　　　　　　　　　　　☑ 書き出しメニューに表示(W)<br>
> 　　　　　　　　　　　　☑ ベクトル画像形式(G)<br>
> 短縮名(H):　　　　　　<ins>pdf5</ins><br>
> 拡張子(X):　　　　　　<ins>pdf</ins><br>
> MIME:　　　　　　　　　<ins>application/pdf</ins><br>
> 捷径(U):　　　　　　　 <ins>u</ins><br>
> 編集プログラム(I):　 <span style="color:Black;background-color:#EEEEEE;">\[なし　　　　　　　　　　　　　　　　 ▼\]</span><br>
> 閲覧プログラム(V):　<span style="color:Black;background-color:#EEEEEE;">\[任意設定　　　　　　　　　　　　　▼\]</span>　<ins>texworks</ins><br>
> 複写子(P):<br>

\[適用(A)\] &gt; \[保存(S)\] をクリックして設定を反映させます．

■ Adobe Acrobat Reader の場合

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 形式(F):　　　　　　　　<ins>PDF (LuaTeX)　　　　　　　　　　 <strong>ᐯ</strong></ins><br>
> 　　　　　　　　　　　　☑ 文書形式(D)<br>
> 　　　　　　　　　　　　☑ 書き出しメニューに表示(W)<br>
> 　　　　　　　　　　　　☑ ベクトル画像形式(G)<br>
> 短縮名(H):　　　　　　<ins>pdf4</ins><br>
> 拡張子(X):　　　　　　<ins>pdf</ins><br>
> MIME:　　　　　　　　　<ins>application/pdf</ins><br>
> 捷径(U):　　　　　　　 <ins>X</ins><br>
> 編集プログラム(I):　 <span style="color:Black;background-color:#EEEEEE;">\[なし　　　　　　　　　　　　　　　　 ▼\]</span><br>
> 閲覧プログラム(V):　<span style="color:Black;background-color:#EEEEEE;">\[任意設定　　　　　　　　　　　　　▼\]</span>　<ins>pdfview</ins><br>
> 複写子(P):<br>

\[適用(A)\] &gt; \[保存(S)\] をクリックして設定を反映させます．

### 順検索 (forward search) {#ffa7876e}

PDFコマンドは [SumatraPDF](/SumatraPDF/) を使用します．

\[ツール(T)\] &gt; \[設定(P)...\] &gt; \[出力\] &gt; \[一般\]

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
> 　　　　　　　　　<span style="color:Black;background-color:#DAEAFF;">　一般　　　　　　　　</span><br>
> 　　　　　　　　　　プリンタ<br>
> 　　　　　　　　　　LaTeX<br>
> 　　　　　　▷　ファイル処理<br>

#### SumatraPDF を前面に表示したい場合 {#d7bb0d3c}

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 順検索<br>
> 　DVIコマンド: <br>
> 　PDFコマンド: <ins>rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance $$o -forward-search $$t $$n</ins><br>

#### SumatraPDF を前面に表示したくない場合 {#w7121c3e}

[SumatraPDF/fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) の fwdsumatrapdf.exe を使用します．

> <span style="color:#DFBE0C;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　<span style="color:Black;"><strong>LyX: 設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:#DFBE0C;background-color:#DFBE0C;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;">&#x1f5d9;</span>　\]<ins></span></ins></span><br>
>
> <br>
>
> 順検索<br>
> 　DVIコマンド: <br>
> 　PDFコマンド: <ins>fwdsumatrapdf.exe $$o $$t $$n</ins><br>

\[適用(A)\] &gt; \[保存(S)\] をクリックして設定を反映させます．
\[移動(N)\] &gt; \[順検索(F)\] または 右クリック → \[順検索(F)\] で 順検索 (forward search) ができます．

## [SumatraPDF](/SumatraPDF/) との連携 {#a046c6e0}

\[文書(D)\] &gt; \[設定(S)...\] &gt; \[形式\] の出力と同期(Y)をチェックして調整用マクロ(U):から \synctex=1 を選択します．

変換子のコマンドオプションに直接 -synctex=1 を追加しても OK です．

### forward search {#u9f206c7}

[順検索 (forward search)](</LyX/設定/Windows/#ffa7876e>) を参照してください．

### inverse search {#vefda83b}

<strong>ユーザー アカウント名が Lydia の場合で説明します．</strong>

<strong>Lydia の部分は自分のアカウント名に置き換えてください．</strong>

\[ツール(T)\] &gt; \[設定(P)...\] &gt; \[パス\] &gt; \[LyXサーバパイプ\] に

```
\\.\pipe\lyxpipe
```

を記述して \[適用(A)\] &gt; \[保存(S)\] をクリックして LyX を再起動します．

全てのユーザーに対してインストールした場合は
C:\Program Files\LyX 2.3\bin\lyxeditor.cmd を作成します．

自分専用にインストールした場合は
C:\Users\Lydia\AppData\Local\LyX 2.3\bin\lyxeditor.cmd を作成します．

***

- C:\Program Files\LyX 2.3\bin\lyxeditor.cmd (全てのユーザーに対してインストールした場合)
- C:\Users\Lydia\AppData\Local\LyX 2.3\bin\lyxeditor.cmd (自分専用にインストールした場合)

***

```
@echo off
setlocal enabledelayedexpansion
set file=%1
set row=%2
REM remove quotes from variables 
set file=!file:"=!
set row=!row:"=!
%comspec% /q /c (@echo LYXCMD:revdvi:server-goto-file-row:%file% %row%)> \\.\pipe\lyxpipe.in&&type \\.\pipe\lyxpipe.out
endlocal
```

***

全てのユーザーに対してインストールした場合に lyxeditor.cmd が作成できない場合は，デスクトップで lyxeditor.cmd ファイルを作成して C:\Program Files\LyX 2.3\bin\ に作成した lyxeditor.cmd ファイルをペーストしてください．

SumatraPDF の \[☰\] &gt; \[設定(S)\] &gt; \[オプション(O)...\] の逆順検索コマンドラインの設定に<br>
全てのユーザーに対してインストールした場合は

```
"C:\Program Files\LyX 2.3\bin\lyxeditor.cmd" "%f" %l
```

自分専用にインストールした場合は

```
"C:\Users\Lydia\AppData\Local\LyX 2.3\bin\lyxeditor.cmd" "%f" %l
```

を記述します．

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
