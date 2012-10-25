---
title: "LyX/設定/Windows"
url: "/LyX/設定/Windows/"
date: 2012-10-02T12:08:39Z
pukiwiki: "LyX/設定/Windows"
---

# LyX/設定/Windows

[LyX](/LyX/) > [設定](</LyX/設定/>) > Windows

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## 設定 {#ue19dc3a}

### 変換子 {#l23ec9b3}

\[ツール(T)\]-\[設定(P)...\]-\[ファイル処理\]-\[変換子\]

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　<span style="color:White;"><strong>LyX: 設定</strong></span>　　　　　　　　　　</ins></span><br>

<br>

　　　　　　▷　操作性<br>
　　　　　　▷　編集<br>
　　　　　　 　 パス<br>
　　　　　　 　 利用者情報<br>
　　　　　　▷　言語設定<br>
　　　　　　▷　出力<br>
　　　　　　◢　ファイル処理<br>
　　　　　　　　　<span style="color:Black;background-color:#DAEAFF;">　変換子　　　　　　</span><br>
　　　　　　　　　　ファイル形式<br>

***

#### LaTeX (plain) -> LyX {#tcc5ab59}

■ TeX ファイルが UTF-8 の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

変換子の定義(N)<br>
<span style="color:Black;background-color:#DAEAFF;">LaTeX (plain) -> LyX　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span><br>

...<br>
変換元の形式(F):　　　　　　　　　　　　　　　　　　変換先の形式(T):<br>
<span style="color:Black;background-color:#EEEEEE;">\[LaTeX (plain)　　　　　　　　　　　　　　　　　▼\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[LyX　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>

変換子(O):　　　<ins>tex2lyx -e UTF8 -f $$i $$o</ins><br>
追加フラグ(X):<br>

***

\[修正(M)\]-\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

#### LaTeX (pLaTeX) -> DVI {#p0550e68}

■ platex (自動判別) の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

変換子の定義(N)<br>
<span style="color:Black;background-color:#DAEAFF;">LaTeX (pLaTeX) -> DVI　　　　　　　　　　　　　　　　　　　　　　　　　　</span><br>

...<br>
変換元の形式(F):　　　　　　　　　　　　　　　　　　変換先の形式(T):<br>
<span style="color:Black;background-color:#EEEEEE;">\[LaTeX (pLaTeX)　　　　　　　　　　　　　　　▼\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[DVI　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>

変換子(O):　　　<ins>platex -guess-input-enc -synctex=1</ins><br>
追加フラグ(X):　<ins>latex=platex</ins><br>

***

■ platex (UTF-8) の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

変換子の定義(N)<br>
<span style="color:Black;background-color:#DAEAFF;">LaTeX (pLaTeX) -> DVI　　　　　　　　　　　　　　　　　　　　　　　　　　</span><br>

...<br>
変換元の形式(F):　　　　　　　　　　　　　　　　　　変換先の形式(T):<br>
<span style="color:Black;background-color:#EEEEEE;">\[LaTeX (pLaTeX)　　　　　　　　　　　　　　　▼\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[DVI　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>

変換子(O):　　　<ins>platex -no-guess-input-enc -kanji=utf8 -synctex=1</ins><br>
追加フラグ(X):　<ins>latex=platex</ins><br>

***

■ uplatex の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

変換子の定義(N)<br>
<span style="color:Black;background-color:#DAEAFF;">LaTeX (pLaTeX) -> DVI　　　　　　　　　　　　　　　　　　　　　　　　　　</span><br>

...<br>
変換元の形式(F):　　　　　　　　　　　　　　　　　　変換先の形式(T):<br>
<span style="color:Black;background-color:#EEEEEE;">\[LaTeX (pLaTeX)　　　　　　　　　　　　　　　▼\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[DVI　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>

変換子(O):　　　<ins>uplatex -no-guess-input-enc -kanji=utf8 -synctex=1</ins><br>
追加フラグ(X):　<ins>latex=uplatex</ins><br>

***

\[修正(M)\]-\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

#### DVI -> PDF (dvipdfm) {#sb00b474}

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

変換子の定義(N)<br>
<span style="color:Black;background-color:#DAEAFF;">DVI -> PDF (dvipdfm)　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span><br>

...<br>
変換元の形式(F):　　　　　　　　　　　　　　　　　　変換先の形式(T):<br>
<span style="color:Black;background-color:#EEEEEE;">\[DVI　　　　　　　　　　　　　　　　　　　　　　　▼\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[PDF (dvipdfm)　　　　　　　　　　　　　　　　▼\]</span><br>

変換子(O):　　　<ins>tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" &amp;&amp; echo exit | pdfdde --rxi &amp; dvipdfmx -o $$o $$i</ins><br>
追加フラグ(X):　<br>

***

\[修正(M)\]-\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

#### DVI -> Postscript {#vcfbecff}

■ platex の場合 (Ruby をインストールしていない場合)

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

変換子の定義(N)<br>
<span style="color:Black;background-color:#DAEAFF;">DVI -> Postscript　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span><br>

...<br>
変換元の形式(F):　　　　　　　　　　　　　　　　　　変換先の形式(T):<br>
<span style="color:Black;background-color:#EEEEEE;">\[DVI　　　　　　　　　　　　　　　　　　　　　　　▼\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[Postscript　　　　　　　　　　　　　　　　　　　▼\]</span><br>

変換子(O):　　　<ins>dvips -Ppdf -z -f $$i | bkmk2uni > $$o</ins><br>
追加フラグ(X):　<br>

***

■ platex の場合 (Ruby をインストールしている場合)

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

変換子の定義(N)<br>
<span style="color:Black;background-color:#DAEAFF;">DVI -> Postscript　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span><br>

...<br>
変換元の形式(F):　　　　　　　　　　　　　　　　　　変換先の形式(T):<br>
<span style="color:Black;background-color:#EEEEEE;">\[DVI　　　　　　　　　　　　　　　　　　　　　　　▼\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[Postscript　　　　　　　　　　　　　　　　　　　▼\]</span><br>

変換子(O):　　　<ins>dvips -Ppdf -z -f $$i | convbkmk -g > $$o</ins><br>
追加フラグ(X):　<br>

***

■ uplatex の場合 (Ruby をインストールしている場合)

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

変換子の定義(N)<br>
<span style="color:Black;background-color:#DAEAFF;">DVI -> Postscript　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span><br>

...<br>
変換元の形式(F):　　　　　　　　　　　　　　　　　　変換先の形式(T):<br>
<span style="color:Black;background-color:#EEEEEE;">\[DVI　　　　　　　　　　　　　　　　　　　　　　　▼\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[Postscript　　　　　　　　　　　　　　　　　　　▼\]</span><br>

変換子(O):　　　<ins>dvips -Ppdf -z -f $$i | convbkmk -u > $$o</ins><br>
追加フラグ(X):　<br>

***

\[修正(M)\]-\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

#### Postscript -> PDF (ps2pdf) {#oa94ff5b}

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

変換子の定義(N)<br>
<span style="color:Black;background-color:#DAEAFF;">Postscript -> PDF (ps2pdf)　　　　　　　　　　　　　　　　　　　　　　　　</span><br>

...<br>
変換元の形式(F):　　　　　　　　　　　　　　　　　　変換先の形式(T):<br>
<span style="color:Black;background-color:#EEEEEE;">\[Postscript　　　　　　　　　　　　　　　　　　　▼\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[PDF (ps2pdf)　　　　　　　　　　　　　　　　　▼\]</span><br>

変換子(O):　　　<ins>tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" &amp;&amp; echo exit | pdfdde --rxi &amp; ps2pdf.bat $$i $$o</ins><br>
追加フラグ(X):　<br>

***

\[修正(M)\]-\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

#### LaTeX (pdflatex) -> PDF (pdflatex) {#cd605672}

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

変換子の定義(N)<br>
<span style="color:Black;background-color:#DAEAFF;">LaTeX (pdflatex) -> PDF (pdflatex)　　　　　　　　　　　　　　　　　　　　</span><br>

...<br>
変換元の形式(F):　　　　　　　　　　　　　　　　　　変換先の形式(T):<br>
<span style="color:Black;background-color:#EEEEEE;">\[LaTeX (pdflatex)　　　　　　　　　　　　　　▼\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[PDF (pdflatex)　　　　　　　　　　　　　　　　　　▼\]</span><br>

変換子(O):　　　<ins>tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" &amp;&amp; echo exit | pdfdde --rxi &amp; pdflatex -synctex=1 $$i</ins><br>
追加フラグ(X):　<ins>latex=pdflatex</ins><br>

***

\[修正(M)\]-\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

#### LaTeX (LuaTeX) -> PDF (LuaTeX) {#ud8c1b28}

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

変換子の定義(N)<br>
<span style="color:Black;background-color:#DAEAFF;">LaTeX (LuaTeX) -> PDF (LuaTeX)　　　　　　　　　　　　　　　　　　　　　　</span><br>

...<br>
変換元の形式(F):　　　　　　　　　　　　　　　　　　変換先の形式(T):<br>
<span style="color:Black;background-color:#EEEEEE;">\[LaTeX (LuaTeX)　　　　　　　　　　　　　　　▼\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[PDF (LuaTeX)　　　　　　　　　　　　　　　　　　　▼\]</span><br>

変換子(O):　　　<ins>tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" &amp;&amp; echo exit | pdfdde --rxi &amp; lualatex -synctex=1</ins><br>
追加フラグ(X):　<ins>latex=lualatex</ins><br>

***

\[修正(M)\]-\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

#### LaTeX (XeTeX) -> PDF (XeTeX) {#c0ff69a0}

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

変換子の定義(N)<br>
<span style="color:Black;background-color:#DAEAFF;">LaTeX (XeTeX) -> PDF (XeTeX)　　　　　　　　　　　　　　　　　　　　　　　</span><br>

...<br>
変換元の形式(F):　　　　　　　　　　　　　　　　　　変換先の形式(T):<br>
<span style="color:Black;background-color:#EEEEEE;">\[LaTeX (XeTeX)　　　　　　　　　　　　　　　 ▼\]</span>　<span style="color:Black;background-color:#EEEEEE;">\[PDF (XeTeX)　　　　　　　　　　　　　　　　　　　 ▼\]</span><br>

変換子(O):　　　<ins>tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" &amp;&amp; echo exit | pdfdde --rxi &amp; xelatex -synctex=1 $$i</ins><br>
追加フラグ(X):　<ins>latex=xelatex</ins><br>

***

\[修正(M)\]-\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

### ファイル形式 {#k5d395e1}

\[ツール(T)\]-\[設定(P)...\]-\[ファイル処理\]-\[ファイル形式\]

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　<span style="color:White;"><strong>LyX: 設定</strong></span>　　　　　　　　　　</ins></span><br>

<br>

　　　　　　▷　操作性<br>
　　　　　　▷　編集<br>
　　　　　　 　 パス<br>
　　　　　　 　 利用者情報<br>
　　　　　　▷　言語設定<br>
　　　　　　▷　出力<br>
　　　　　　◢　ファイル処理<br>
　　　　　　　　　　変換子<br>
　　　　　　　　　<span style="color:Black;background-color:#DAEAFF;">　ファイル形式　　　</span><br>

***

#### DVI {#q37ac96c}

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

形式(F):　　　　　　　　<ins>DVI　　　　　　　　　　　　　　　　　▼</ins><br>
　　　　　　　　　　　　☑ 文書形式(D)<br>
　　　　　　　　　　　　☑ 書き出しメニューに表示(W)<br>
　　　　　　　　　　　　☑ ベクトル画像形式(G)<br>
短縮名(H):　　　　　　<ins>dvi</ins><br>
拡張子(X):　　　　　　<ins>dvi</ins><br>
短絡キー(U):　　　　　<ins>D</ins><br>
編集プログラム(I):　 <span style="color:Black;background-color:#EEEEEE;">\[なし　　　　　　　　　　　　　　　　 ▼\]</span><br>
閲覧プログラム(V):　<span style="color:Black;background-color:#EEEEEE;">\[任意設定　　　　　　　　　　　　　▼\]</span>　<ins>"C:\w32tex\dviout\dviout.exe" -1</ins><br>
複写子(P):<br>

***

\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

#### PDF (dvipdfm) {#xc68f23e}

■ [TeXworks](/TeXworks/) の場合

[TeXworks#組み込みの PDF ビューアに日本語を表示させる](/TeXworks/#t5313ebc) を参照してフォントの埋め込みの設定を行います．

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

形式(F):　　　　　　　　<ins>PDF (dvipdfm)　　　　　　　　　　 ▼</ins><br>
　　　　　　　　　　　　☑ 文書形式(D)<br>
　　　　　　　　　　　　☑ 書き出しメニューに表示(W)<br>
　　　　　　　　　　　　☑ ベクトル画像形式(G)<br>
短縮名(H):　　　　　　<ins>pdf3</ins><br>
拡張子(X):　　　　　　<ins>pdf</ins><br>
短絡キー(U):　　　　　<ins>m</ins><br>
編集プログラム(I):　 <span style="color:Black;background-color:#EEEEEE;">\[なし　　　　　　　　　　　　　　　　 ▼\]</span><br>
閲覧プログラム(V):　<span style="color:Black;background-color:#EEEEEE;">\[任意設定　　　　　　　　　　　　　▼\]</span>　<ins>"C:\w32tex\share\texworks\TeXworks.exe"</ins><br>
複写子(P):<br>

***

\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

■ [SumatraPDF](/SumatraPDF/) の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

形式(F):　　　　　　　　<ins>PDF (dvipdfm)　　　　　　　　　　 ▼</ins><br>
　　　　　　　　　　　　☑ 文書形式(D)<br>
　　　　　　　　　　　　☑ 書き出しメニューに表示(W)<br>
　　　　　　　　　　　　☑ ベクトル画像形式(G)<br>
短縮名(H):　　　　　　<ins>pdf3</ins><br>
拡張子(X):　　　　　　<ins>pdf</ins><br>
短絡キー(U):　　　　　<ins>m</ins><br>
編集プログラム(I):　 <span style="color:Black;background-color:#EEEEEE;">\[なし　　　　　　　　　　　　　　　　 ▼\]</span><br>
閲覧プログラム(V):　<span style="color:Black;background-color:#EEEEEE;">\[任意設定　　　　　　　　　　　　　▼\]</span>　<ins>"C:\Program Files\SumatraPDF\SumatraPDF.exe" -reuse-instance</ins> または <ins>"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe" -reuse-instance</ins><br>
複写子(P):<br>

***

\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

■ [Adobe Reader](</Adobe Reader/>) の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

形式(F):　　　　　　　　<ins>PDF (dvipdfm)　　　　　　　　　　 ▼</ins><br>
　　　　　　　　　　　　☑ 文書形式(D)<br>
　　　　　　　　　　　　☑ 書き出しメニューに表示(W)<br>
　　　　　　　　　　　　☑ ベクトル画像形式(G)<br>
短縮名(H):　　　　　　<ins>pdf3</ins><br>
拡張子(X):　　　　　　<ins>pdf</ins><br>
短絡キー(U):　　　　　<ins>m</ins><br>
編集プログラム(I):　 <span style="color:Black;background-color:#EEEEEE;">\[なし　　　　　　　　　　　　　　　　 ▼\]</span><br>
閲覧プログラム(V):　<span style="color:Black;background-color:#EEEEEE;">\[任意設定　　　　　　　　　　　　　▼\]</span>　<ins>pdfview</ins><br>
複写子(P):<br>

***

\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

#### PDF (ps2pdf) {#f004342d}

■ [TeXworks](/TeXworks/) の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

形式(F):　　　　　　　　<ins>PDF (ps2pdf)　　　　　　　　　　　▼</ins><br>
　　　　　　　　　　　　☑ 文書形式(D)<br>
　　　　　　　　　　　　☑ 書き出しメニューに表示(W)<br>
　　　　　　　　　　　　☑ ベクトル画像形式(G)<br>
短縮名(H):　　　　　　<ins>pdf</ins><br>
拡張子(X):　　　　　　<ins>pdf</ins><br>
短絡キー(U):　　　　　<ins>P</ins><br>
編集プログラム(I):　 <span style="color:Black;background-color:#EEEEEE;">\[なし　　　　　　　　　　　　　　　　 ▼\]</span><br>
閲覧プログラム(V):　<span style="color:Black;background-color:#EEEEEE;">\[任意設定　　　　　　　　　　　　　▼\]</span>　<ins>"C:\w32tex\share\texworks\TeXworks.exe"</ins><br>
複写子(P):<br>

***

\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

■ [SumatraPDF](/SumatraPDF/) の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

形式(F):　　　　　　　　<ins>PDF (ps2pdf)　　　　　　　　　　　▼</ins><br>
　　　　　　　　　　　　☑ 文書形式(D)<br>
　　　　　　　　　　　　☑ 書き出しメニューに表示(W)<br>
　　　　　　　　　　　　☑ ベクトル画像形式(G)<br>
短縮名(H):　　　　　　<ins>pdf</ins><br>
拡張子(X):　　　　　　<ins>pdf</ins><br>
短絡キー(U):　　　　　<ins>P</ins><br>
編集プログラム(I):　 <span style="color:Black;background-color:#EEEEEE;">\[なし　　　　　　　　　　　　　　　　 ▼\]</span><br>
閲覧プログラム(V):　<span style="color:Black;background-color:#EEEEEE;">\[任意設定　　　　　　　　　　　　　▼\]</span>　<ins>"C:\Program Files\SumatraPDF\SumatraPDF.exe" -reuse-instance</ins> または <ins>"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe" -reuse-instance</ins><br>
複写子(P):<br>

***

\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

■ [Adobe Reader](</Adobe Reader/>) の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

形式(F):　　　　　　　　<ins>PDF (ps2pdf)　　　　　　　　　　　▼</ins><br>
　　　　　　　　　　　　☑ 文書形式(D)<br>
　　　　　　　　　　　　☑ 書き出しメニューに表示(W)<br>
　　　　　　　　　　　　☑ ベクトル画像形式(G)<br>
短縮名(H):　　　　　　<ins>pdf</ins><br>
拡張子(X):　　　　　　<ins>pdf</ins><br>
短絡キー(U):　　　　　<ins>P</ins><br>
編集プログラム(I):　 <span style="color:Black;background-color:#EEEEEE;">\[なし　　　　　　　　　　　　　　　　 ▼\]</span><br>
閲覧プログラム(V):　<span style="color:Black;background-color:#EEEEEE;">\[任意設定　　　　　　　　　　　　　▼\]</span>　<ins>pdfview</ins><br>
複写子(P):<br>

***

\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

#### PDF (pdflatex) {#fe61f4c6}

■ [TeXworks](/TeXworks/) の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

形式(F):　　　　　　　　<ins>PDF (pdflatex)　　　　　　　　　　▼</ins><br>
　　　　　　　　　　　　☑ 文書形式(D)<br>
　　　　　　　　　　　　☑ 書き出しメニューに表示(W)<br>
　　　　　　　　　　　　☑ ベクトル画像形式(G)<br>
短縮名(H):　　　　　　<ins>pdf2</ins><br>
拡張子(X):　　　　　　<ins>pdf</ins><br>
短絡キー(U):　　　　　<ins>F</ins><br>
編集プログラム(I):　 <span style="color:Black;background-color:#EEEEEE;">\[なし　　　　　　　　　　　　　　　　 ▼\]</span><br>
閲覧プログラム(V):　<span style="color:Black;background-color:#EEEEEE;">\[任意設定　　　　　　　　　　　　　▼\]</span>　<ins>"C:\w32tex\share\texworks\TeXworks.exe"</ins><br>
複写子(P):<br>

***

\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

■ [SumatraPDF](/SumatraPDF/) の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

形式(F):　　　　　　　　<ins>PDF (pdflatex)　　　　　　　　　　▼</ins><br>
　　　　　　　　　　　　☑ 文書形式(D)<br>
　　　　　　　　　　　　☑ 書き出しメニューに表示(W)<br>
　　　　　　　　　　　　☑ ベクトル画像形式(G)<br>
短縮名(H):　　　　　　<ins>pdf2</ins><br>
拡張子(X):　　　　　　<ins>pdf</ins><br>
短絡キー(U):　　　　　<ins>F</ins><br>
編集プログラム(I):　 <span style="color:Black;background-color:#EEEEEE;">\[なし　　　　　　　　　　　　　　　　 ▼\]</span><br>
閲覧プログラム(V):　<span style="color:Black;background-color:#EEEEEE;">\[任意設定　　　　　　　　　　　　　▼\]</span>　<ins>"C:\Program Files\SumatraPDF\SumatraPDF.exe" -reuse-instance</ins> または <ins>"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe" -reuse-instance</ins><br>
複写子(P):<br>

***

\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

■ [Adobe Reader](</Adobe Reader/>) の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

形式(F):　　　　　　　　<ins>PDF (pdflatex)　　　　　　　　　　▼</ins><br>
　　　　　　　　　　　　☑ 文書形式(D)<br>
　　　　　　　　　　　　☑ 書き出しメニューに表示(W)<br>
　　　　　　　　　　　　☑ ベクトル画像形式(G)<br>
短縮名(H):　　　　　　<ins>pdf2</ins><br>
拡張子(X):　　　　　　<ins>pdf</ins><br>
短絡キー(U):　　　　　<ins>F</ins><br>
編集プログラム(I):　 <span style="color:Black;background-color:#EEEEEE;">\[なし　　　　　　　　　　　　　　　　 ▼\]</span><br>
閲覧プログラム(V):　<span style="color:Black;background-color:#EEEEEE;">\[任意設定　　　　　　　　　　　　　▼\]</span>　<ins>pdfview</ins><br>
複写子(P):<br>

***

\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

#### PDF (LuaTeX) {#p51f4c4b}

■ [TeXworks](/TeXworks/) の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

形式(F):　　　　　　　　<ins>PDF (LuaTeX)　　　　　　　　　　 ▼</ins><br>
　　　　　　　　　　　　☑ 文書形式(D)<br>
　　　　　　　　　　　　☑ 書き出しメニューに表示(W)<br>
　　　　　　　　　　　　☑ ベクトル画像形式(G)<br>
短縮名(H):　　　　　　<ins>pdf5</ins><br>
拡張子(X):　　　　　　<ins>pdf</ins><br>
短絡キー(U):　　　　　<ins>u</ins><br>
編集プログラム(I):　 <span style="color:Black;background-color:#EEEEEE;">\[なし　　　　　　　　　　　　　　　　 ▼\]</span><br>
閲覧プログラム(V):　<span style="color:Black;background-color:#EEEEEE;">\[任意設定　　　　　　　　　　　　　▼\]</span>　<ins>"C:\w32tex\share\texworks\TeXworks.exe"</ins><br>
複写子(P):<br>

***

\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

■ [SumatraPDF](/SumatraPDF/) の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

形式(F):　　　　　　　　<ins>PDF (LuaTeX)　　　　　　　　　　 ▼</ins><br>
　　　　　　　　　　　　☑ 文書形式(D)<br>
　　　　　　　　　　　　☑ 書き出しメニューに表示(W)<br>
　　　　　　　　　　　　☑ ベクトル画像形式(G)<br>
短縮名(H):　　　　　　<ins>pdf5</ins><br>
拡張子(X):　　　　　　<ins>pdf</ins><br>
短絡キー(U):　　　　　<ins>u</ins><br>
編集プログラム(I):　 <span style="color:Black;background-color:#EEEEEE;">\[なし　　　　　　　　　　　　　　　　 ▼\]</span><br>
閲覧プログラム(V):　<span style="color:Black;background-color:#EEEEEE;">\[任意設定　　　　　　　　　　　　　▼\]</span>　<ins>"C:\Program Files\SumatraPDF\SumatraPDF.exe" -reuse-instance</ins> または <ins>"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe" -reuse-instance</ins><br>
複写子(P):<br>

***

\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

■ [Adobe Reader](</Adobe Reader/>) の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

形式(F):　　　　　　　　<ins>PDF (LuaTeX)　　　　　　　　　　 ▼</ins><br>
　　　　　　　　　　　　☑ 文書形式(D)<br>
　　　　　　　　　　　　☑ 書き出しメニューに表示(W)<br>
　　　　　　　　　　　　☑ ベクトル画像形式(G)<br>
短縮名(H):　　　　　　<ins>pdf4</ins><br>
拡張子(X):　　　　　　<ins>pdf</ins><br>
短絡キー(U):　　　　　<ins>X</ins><br>
編集プログラム(I):　 <span style="color:Black;background-color:#EEEEEE;">\[なし　　　　　　　　　　　　　　　　 ▼\]</span><br>
閲覧プログラム(V):　<span style="color:Black;background-color:#EEEEEE;">\[任意設定　　　　　　　　　　　　　▼\]</span>　<ins>pdfview</ins><br>
複写子(P):<br>

***

\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

#### PDF (XeTeX) {#td885a9e}

■ [TeXworks](/TeXworks/) の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

形式(F):　　　　　　　　<ins>PDF (XeTeX)　　　　　　　　　　　▼</ins><br>
　　　　　　　　　　　　☑ 文書形式(D)<br>
　　　　　　　　　　　　☑ 書き出しメニューに表示(W)<br>
　　　　　　　　　　　　☑ ベクトル画像形式(G)<br>
短縮名(H):　　　　　　<ins>pdf4</ins><br>
拡張子(X):　　　　　　<ins>pdf</ins><br>
短絡キー(U):　　　　　<ins>X</ins><br>
編集プログラム(I):　 <span style="color:Black;background-color:#EEEEEE;">\[なし　　　　　　　　　　　　　　　　 ▼\]</span><br>
閲覧プログラム(V):　<span style="color:Black;background-color:#EEEEEE;">\[任意設定　　　　　　　　　　　　　▼\]</span>　<ins>"C:\w32tex\share\texworks\TeXworks.exe"</ins><br>
複写子(P):<br>

***

\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

■ [SumatraPDF](/SumatraPDF/) の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

形式(F):　　　　　　　　<ins>PDF (XeTeX)　　　　　　　　　　　▼</ins><br>
　　　　　　　　　　　　☑ 文書形式(D)<br>
　　　　　　　　　　　　☑ 書き出しメニューに表示(W)<br>
　　　　　　　　　　　　☑ ベクトル画像形式(G)<br>
短縮名(H):　　　　　　<ins>pdf4</ins><br>
拡張子(X):　　　　　　<ins>pdf</ins><br>
短絡キー(U):　　　　　<ins>X</ins><br>
編集プログラム(I):　 <span style="color:Black;background-color:#EEEEEE;">\[なし　　　　　　　　　　　　　　　　 ▼\]</span><br>
閲覧プログラム(V):　<span style="color:Black;background-color:#EEEEEE;">\[任意設定　　　　　　　　　　　　　▼\]</span>　<ins>"C:\Program Files\SumatraPDF\SumatraPDF.exe" -reuse-instance</ins> または <ins>"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe" -reuse-instance</ins><br>
複写子(P):<br>

***

\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

■ [Adobe Reader](</Adobe Reader/>) の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

形式(F):　　　　　　　　<ins>PDF (XeTeX)　　　　　　　　　　　▼</ins><br>
　　　　　　　　　　　　☑ 文書形式(D)<br>
　　　　　　　　　　　　☑ 書き出しメニューに表示(W)<br>
　　　　　　　　　　　　☑ ベクトル画像形式(G)<br>
短縮名(H):　　　　　　<ins>pdf2</ins><br>
拡張子(X):　　　　　　<ins>pdf</ins><br>
短絡キー(U):　　　　　<ins>F</ins><br>
編集プログラム(I):　 <span style="color:Black;background-color:#EEEEEE;">\[なし　　　　　　　　　　　　　　　　 ▼\]</span><br>
閲覧プログラム(V):　<span style="color:Black;background-color:#EEEEEE;">\[任意設定　　　　　　　　　　　　　▼\]</span>　<ins>pdfview</ins><br>
複写子(P):<br>

***

\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

#### Postscript {#h5a8500c}

■ [SumatraPDF](/SumatraPDF/) の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

形式(F):　　　　　　　　<ins>Postscript　　　　　　　　　　　　　▼</ins><br>
　　　　　　　　　　　　☑ 文書形式(D)<br>
　　　　　　　　　　　　☑ 書き出しメニューに表示(W)<br>
　　　　　　　　　　　　☑ ベクトル画像形式(G)<br>
短縮名(H):　　　　　　<ins>ps</ins><br>
拡張子(X):　　　　　　<ins>ps</ins><br>
短絡キー(U):　　　　　<ins>t</ins><br>
編集プログラム(I):　 <span style="color:Black;background-color:#EEEEEE;">\[なし　　　　　　　　　　　　　　　　 ▼\]</span><br>
閲覧プログラム(V):　<span style="color:Black;background-color:#EEEEEE;">\[任意設定　　　　　　　　　　　　　▼\]</span>　<ins>"C:\Program Files\SumatraPDF\SumatraPDF.exe" -reuse-instance</ins> または <ins>"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe" -reuse-instance</ins><br>
複写子(P):<br>

***

\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

■ GSview の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

形式(F):　　　　　　　　<ins>Postscript　　　　　　　　　　　　　▼</ins><br>
　　　　　　　　　　　　☑ 文書形式(D)<br>
　　　　　　　　　　　　☑ 書き出しメニューに表示(W)<br>
　　　　　　　　　　　　☑ ベクトル画像形式(G)<br>
短縮名(H):　　　　　　<ins>ps</ins><br>
拡張子(X):　　　　　　<ins>ps</ins><br>
短絡キー(U):　　　　　<ins>t</ins><br>
編集プログラム(I):　 <span style="color:Black;background-color:#EEEEEE;">\[なし　　　　　　　　　　　　　　　　 ▼\]</span><br>
閲覧プログラム(V):　<span style="color:Black;background-color:#EEEEEE;">\[任意設定　　　　　　　　　　　　　▼\]</span>　<ins>"C:\Program Files\Ghostgum\gsview\gsview32.exe" -e</ins> または <ins>"C:\Program Files (x86)\Ghostgum\gsview\gsview32.exe" -e</ins><br>
複写子(P):<br>

***

\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

### 順検索 (forward search) {#ffa7876e}

DVIコマンドは [dviout](/dviout/) を使用します．<br>
PDFコマンドは [SumatraPDF](/SumatraPDF/) を使用します．<br>

\[ツール(T)\]-\[設定(P)...\]-\[出力\]-\[一般\]

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　<span style="color:White;"><strong>LyX: 設定</strong></span>　　　　　　　　　　</ins></span><br>

<br>

　　　　　　▷　操作性<br>
　　　　　　▷　編集<br>
　　　　　　 　 パス<br>
　　　　　　 　 利用者情報<br>
　　　　　　▷　言語設定<br>
　　　　　　◢　出力<br>
　　　　　　　　　<span style="color:Black;background-color:#DAEAFF;">　一般　　　　　　　　</span><br>
　　　　　　　　　　プリンタ<br>
　　　　　　　　　　LaTeX<br>
　　　　　　▷　ファイル処理<br>

***

#### SumatraPDF を前面に表示したい場合 {#d7bb0d3c}

■ 32bit Windows の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

出力の行幅(L): <ins>65</ins>[^1]<br>
日付書式(D): 　<ins>&#x25;x</ins>[^2]<br>
書き出し時の上書き(O): <span style="color:Black;background-color:#EEEEEE;">\[許可を求める　　▼\]</span>[^3]<br>
順検索<br>
　DVIコマンド: <ins>"C:\w32tex\dviout\dviout.exe" -1 $$o "# $$n '$$t'"</ins><br>
　PDFコマンド: <ins>"C:\Program Files\SumatraPDF\SumatraPDF.exe" -reuse-instance $$o -forward-search $$t $$n</ins><br>

***

■ 64bit Windows の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

出力の行幅(L): <ins>65</ins><br>
日付書式(D): 　<ins>&#x25;x</ins><br>
書き出し時の上書き(O): <span style="color:Black;background-color:#EEEEEE;">\[許可を求める　　▼\]</span><br>
順検索<br>
　DVIコマンド: <ins>"C:\w32tex\dviout\dviout.exe" -1 $$o "# $$n '$$t'"</ins><br>
　PDFコマンド: <ins>"C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe" -reuse-instance $$o -forward-search $$t $$n</ins><br>

***

#### SumatraPDF を前面に表示したくない場合 {#w7121c3e}

[SumatraPDF#fwdsumatrapdf.exe](/SumatraPDF/#n8da77e2) の fwdsumatrapdf.exe を使用します．<br>

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

出力の行幅(L): <ins>65</ins><br>
日付書式(D): 　<ins>&#x25;x</ins><br>
書き出し時の上書き(O): <span style="color:Black;background-color:#EEEEEE;">\[許可を求める　　▼\]</span><br>
順検索<br>
　DVIコマンド: <ins>"C:\w32tex\dviout\dviout.exe" -1 $$o "# $$n '$$t'"</ins><br>
　PDFコマンド: <ins>"C:\w32tex\NDde\Binary\fwdsumatrapdf.exe" $$o $$t $$n</ins><br>

***

\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．<br>
\[移動(N)\]-\[順検索(F)\] または 右クリック → \[順検索(F)\] で 順検索 (forward search) ができます．<br>

## [SumatraPDF](/SumatraPDF/) との連携 {#a046c6e0}

変換子に -synctex=1 を追加します．

### forward search {#u9f206c7}

[順検索 (forward search)](</LyX/設定/#ffa7876e>) を参照してください．

### inverse search {#vefda83b}

\[ツール(T)\]-\[設定(P)...\]-\[パス\]-\[LyXサーバーパイプ\] に

```
\\.\pipe\lyxpipe
```

を記述して \[適用(A)\]-\[保存(S)\] をクリックして LyX を再起動します．

C:\Users\Lydia\AppData\Local\LyX 2.0.4\bin\lyxeditor.cmd <!-- C:\Program Files\LyX 2.0.4\bin\lyxeditor.cmd を作成します． -->

***

- C:\Users\Lydia\AppData\Local\LyX 2.0.4\bin\lyxeditor.cmd
    <!-- -C:\Program Files\LyX 2.0.4\bin\lyxeditor.cmd -->

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

<!-- 作成できない場合は，デスクトップで lyxeditor.cmd ファイルを作成して C:\Program Files\LyX 2.0.4\bin\ に作成した lyxeditor.cmd ファイルをペーストしてください．~ -->

SumatraPDF の \[設定(S)\]-\[オプション(O)...\]-\[逆順検索コマンドラインの設定\] に

```
"C:\Users\Lydia\AppData\Local\LyX 2.0.4\bin\lyxeditor.cmd" "%f" %l
```

<!-- "C:\Program Files\LyX 2.0.4\bin\lyxeditor.cmd" "%f" %l -->

を記述します．

## [dviout](/dviout/) との連携 (非推奨) {#i23ae56f}

[dviout#forward and inverse search](/dviout/#ycc841a2) を参照．

変換子に -src-specials を追加します．

### forward search {#m689e606}

[順検索 (forward search)](</LyX/設定/#ffa7876e>) を参照してください．

### inverse search {#hfe86760}

\[ツール(T)\]-\[設定(P)...\]-\[パス\]-\[LyXサーバーパイプ\] に

```
\\.\pipe\lyxpipe
```

を記述して \[適用(A)\]-\[保存(S)\] をクリックして LyX を再起動します．

C:\Users\Lydia\AppData\Local\LyX 2.0.4\bin\lyxeditor.cmd を作成します． <!-- C:\Program Files\LyX 2.0.4\bin\lyxeditor.cmd を作成します． -->

***

- C:\Users\Lydia\AppData\Local\LyX 2.0.4\bin\lyxeditor.cmd
    <!-- -C:\Program Files\LyX 2.0.4\bin\lyxeditor.cmd -->

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

<!-- 作成できない場合は，デスクトップで lyxeditor.cmd ファイルを作成して C:\Program Files\LyX 2.0.4\bin\ に作成した lyxeditor.cmd ファイルをペーストしてください．~ -->

dviout の \[Option\]-\[Setup Parameters...\]-\[Common\]-\[src:\] に

```
C:\Users\Lydia\AppData\Local\LyX 2.0.4\bin\lyxeditor.cmd^s "%s" %d
```

<!-- C:\Program Files\LyX 2.0.4\bin\lyxeditor.cmd^s "%s" %d -->

を記述します．

## 関連リンク {#gab21d87}

- [TeX Live 2011( or MacTeX 2011) &amp; LyX 2.0.3の導入](http://texlive2011lyx203.blogspot.jp/)
- [Windows7でTeX環境を作った](http://barippi.blog.fc2.com/blog-entry-1309.html)
- [Ｌｙｘ導入](http://coswata.blog20.fc2.com/blog-entry-5409.html)
- [WindowsにおいてLyX2.0で日本語を扱う](http://d.hatena.ne.jp/femm/20111206/1323165881)
- [LyX ～数式エディタとして使う～](http://physchem.web.fc2.com/PC/latex/lyx.html)
- [TeX | どうでもいいメモ（保守中）](http://6esky.wordpress.com/category/tex/)

[^1]: 書き出す平文/LaTeX/SGMLファイルの最大行数。0に設定すると、全ての段落は一行に出力されます。行数が>0ならば、段落行は空白行によって分離されます。
[^2]: strftime出力の日付書式
[^3]: 書き出しに際し、既存ファイルが上書きされる場合にどうするか。
