---
title: "LyX/設定"
url: "/LyX/設定/"
date: 2012-07-12T19:19:01Z
bookCollapseSection: true
pukiwiki: "LyX/設定"
---

# LyX/設定

## 設定 {#ue19dc3a}

### 言語 {#j97f863b}

#### 日本語の文書を作成する場合 {#v60a198e}

日本語の文書を作成する場合は babel を off にします．

\[ツール(T)\]-\[設定(P)...\]-\[言語設定\]-\[言語\]

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　<span style="color:White;"><strong>LyX: 設定</strong></span>　　　　　　　　　　</ins></span><br>

<br>

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

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

操作画面用言語(I): <span style="color:Black;background-color:#EEEEEE;">\[日本語　　　　　　　　　　　　　▼\]</span>[^1]<br>
言語パッケージ(K): <span style="color:Black;background-color:#EEEEEE;">\[任意設定　▼\]</span>[^2]　<ins>　　　　　　　　　　</ins>[^3] ← 言語パッケージを任意設定に変更し \usepackage{babel} を削除します．<br>
開始コマンド(T): 　　<ins>　　　　　　　　　　</ins>[^4] ← 開始コマンドの \selectlanguage{$$lang} を削除します．<br>
終了コマンド(N): 　　<ins>　　　　　　　　　　</ins>[^5]<br>
既定小数点(P): 　　<ins>.</ins><br>
☐言語を大域的に設定(G)[^6] ← 言語を大域的に設定のチェックをはずします．<br>
☑自動開始(B)[^7]<br>
☑自動終了(E)[^8]<br>
☐外国語をマークする(F)[^9] ← 外国語をマークするのチェックをはずします．<br>
右から左書きの言語をサポート<br>
　☑RTLサポートを有効化(P)[^10]<br>
　カーソルの動き: <span style="color:#3333CC;">◎</span> 論理的(L)　◯ 視覚的(V)<br>

***

\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．

#### babel を使用して文書を作成する場合 {#j34bc968}

babel を使用して文書を作成する場合は babel を on にします．

babel に関しては

- [日本語 LaTeX による多言語処理](http://www2.tba.t-com.ne.jp/ing/)
- [pTeXと多言語処理 - TeX Wiki](</pTeXと多言語処理/>)
- [新 pTeX とBabel - TeX Wiki](</新 pTeX とBabel/>)

をご覧下さい．

W32TeX の場合は babel の japanese をインストールする必要があります．<br>
インストール方法は以下のとおりです．

1. [CTAN:language/japanese/japanese.zip](https://mirror.ctan.org/language/japanese/japanese.zip) から japanese.zip をダウンロードします．
1. japanese.zip を展開します．
1. 展開すると japanese.ins というファイルがあるので，japanese.ins を C:\w32tex\bin\platex.exe に Drag &amp; Drop します．
1. japanese.ins と同じフォルダに japanese.ldf が作成されます．
1. japanese.ldf をコピーして C:\w32tex\share\texmf\tex\generic\babel にペースト(貼り付け)すればインストール完了です．
1. もし C:\w32tex\share\texmf\ls-R が存在する場合は C:\w32tex\bin\deltexlsr.exe をダブルクリックして C:\w32tex\share\texmf\ls-R を削除してください．

- [funyarara @ Wiki - インストール](http://www35.atwiki.jp/funyarara/pages/43.html) にも japanese.ldf のインストール・設定方法があります．

babel のオプションを設定する場合は以下の方法があります．

- クラスオプションでグローバルに設定する
- babel のオプションでローカルに設定する

グローバルに japanese オプションを設定してエラーが発生した場合はローカルに設定してください．→ [#4597 (Tweak to use Japanese on Windows with pLaTeX)](http://www.lyx.org/trac/ticket/4597#c4)

### LaTeX {#t6075904}

\[ツール(T)\]-\[設定(P)...\]-\[出力\]-\[LaTeX\]

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　<span style="color:White;"><strong>LyX: 設定</strong></span>　　　　　　　　　　</ins></span><br>

<br>

　　　　　　▷　操作性<br>
　　　　　　▷　編集<br>
　　　　　　 　 パス<br>
　　　　　　 　 利用者情報<br>
　　　　　　▷　言語設定<br>
　　　　　　◢　出力<br>
　　　　　　　　　　一般<br>
　　　　　　　　　　プリンタ<br>
　　　　　　　　　<span style="color:Black;background-color:#DAEAFF;">　LaTeX　　　　　　　</span><br>
　　　　　　▷　ファイル処理<br>

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

☐ LaTeXフォントエンコーディング:　　<span style="color:#888888;"><ins>T1</ins></span>[^11] ← 言語が英語の場合に自動的に \usepackage\[T1\]{fontenc} を追加してほしくない場合は LaTeXフォントエンコーディングのチェックをはずします．<br>
既定の用紙寸法(Z):　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　　　　　　　　　▼\]</span><br>
DVIビューア用紙寸法設定:　　[^12]<br>
書誌情報の生成<br>
処理子(P):　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[bibtex　　　　　　　　　　　　　　　　　 ▼\]</span><br>
オプション(O):　　　　　[^13]<br>
日本語用処理子(J):　<ins>pbibtex</ins> または <ins>pbibtex -kanji=utf8</ins> (UTF-8) または <ins>upbibtex</ins>[^14]<br>
索引の生成<br>
処理子(O):　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[texindy　　　　　　　　　　　　　　　　　▼\]</span><br>
オプション(T):　　　　　[^15]<br>
日本語用処理子(J):　<ins>mendex -c -q</ins> または <ins>mendex -c -q -U</ins> (UTF-8)[^16]<br>

<br>

用語集コマンド(N):　<ins>makeindex -s nomencl.ist</ins>[^17]<br>
CheckTeXコマンド:　<ins>chktex -n1 -n3 -n6 -n9 -n22 -n25 -n30 -n38</ins>[^18]<br>
☑ LaTeXファイルでWindows流のパス表記を使う(U)[^19]<br>
☐ 文書クラス変更時にクラスオプションをリセットする(E)[^20]<br>

***

\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．<br>

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

変換子(O):　　　<ins>tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" &amp;&amp; echo exit | pdfdde &amp; dvipdfmx -o $$o $$i</ins><br>
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

変換子(O):　　　<ins>tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" &amp;&amp; echo exit | pdfdde &amp; ps2pdf.bat $$i $$o</ins><br>
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

変換子(O):　　　<ins>tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" &amp;&amp; echo exit | pdfdde &amp; pdflatex -synctex=1 $$i</ins><br>
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

変換子(O):　　　<ins>tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" &amp;&amp; echo exit | pdfdde &amp; lualatex -synctex=1</ins><br>
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

変換子(O):　　　<ins>tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" &amp;&amp; echo exit | pdfdde &amp; xelatex -synctex=1 $$i</ins><br>
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

- Windows の場合

> DVIコマンドは [dviout](/dviout/) を使用します．<br>
> PDFコマンドは [SumatraPDF](/SumatraPDF/) を使用します．<br>

- OS X の場合

> DVIコマンドは pxdvi を使用します．<br>
> PDFコマンドは Skim の displayline を使用します．<br>

- Linux の場合

> DVIコマンドは pxdvi を使用します．<br>
> PDFコマンドは [Evince#fwdevince](/Evince/#ie18c015) の fwdevince を使用します．<br>

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

#### Windows の場合 (SumatraPDF を前面に表示したい場合) {#d7bb0d3c}

■ 32bit Windows の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

出力の行幅(L): <ins>65</ins>[^21]<br>
日付書式(D): 　<ins>&#x25;x</ins>[^22]<br>
書き出し時の上書き(O): <span style="color:Black;background-color:#EEEEEE;">\[許可を求める　　▼\]</span>[^23]<br>
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

#### Windows の場合 (SumatraPDF を前面に表示したくない場合) {#w7121c3e}

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

#### OS X の場合 {#d0572089}

***

<span style="color:Black;background-color:#CCCCCC;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

```

```

<br>

出力の行幅(L): <ins>65</ins><br>
日付書式(D): 　<ins>&#x25;x</ins><br>
書き出し時の上書き(O): <span style="color:Black;background-color:#EEEEEE;">\[許可を求める　　▼\]</span><br>
順検索<br>
　DVIコマンド: <ins>/usr/texbin/pxdvi -nofork $$o -sourceposition "$$n $$t"</ins><br>
　PDFコマンド: <ins>/Applications/Skim.app/Contents/SharedSupport/displayline $$n $$o $$t</ins><br>

***

#### Linux の場合 {#l3e420bc}

[Evince#fwdevince](/Evince/#ie18c015) の fwdevince を使用します．<br>

***

<span style="color:Black;background-color:#222222;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

```

```

<br>

出力の行幅(L): <ins>65</ins><br>
日付書式(D): 　<ins>&#x25;x</ins><br>
書き出し時の上書き(O): <span style="color:Black;background-color:#EEEEEE;">\[許可を求める　　▼\]</span><br>
順検索<br>
　DVIコマンド: <ins>pxdvi -nofork $$o -sourceposition "$$n $$t"</ins><br>
　PDFコマンド: <ins>fwdevince $$o $$n $$t</ins><br>

***

\[適用(A)\]-\[保存(S)\] をクリックして設定を反映させます．<br>
\[移動(N)\]-\[順検索(F)\] または 右クリック → \[順検索(F)\] で 順検索 (forward search) ができます．<br>

[^1]: 操作画面 (メニューやダイアログなど) 用言語を選択してください。
[^2]: どの言語パッケージをLyXが使うべきか選択してください
[^3]: 言語パッケージを読み込むコマンドを入力してください (既定値：babel) 
[^4]: 外国語への切替を開始するLaTeXコマンド
[^5]: 外国語への切替を終了するLaTeXコマンド。
[^6]: 言語を大域的に (文書クラスに) 渡して局所的に (言語パッケージに) は渡さない場合にチェックします
[^7]: 有効にすると、言語切替コマンドで明示的に文書言語を設定することをしないようにします
[^8]: 有効にすると、言語切替コマンドで文書言語を明示的に閉じることをしないようにします
[^9]: 作業領域で外国語を視覚的にハイライトする時にチェックしてください
[^10]: 右から左へ書く言語 (ヘブライ語、アラビア語など) をサポートするときに選択してください。
[^11]: フォントエンコーディングを指定します (例: T1)。
[^12]: 特定のDVIビューアが使う用紙寸法フラグを設定(-paper) 
[^13]: BibTeXコマンドとオプション
[^14]: pLaTeX(日本語)使用時のBibTeXコマンドとオプション
[^15]: 索引コマンドとオプション(makeindex, xindy) 
[^16]: pLaTeX(日本語)使用時の索引コマンドとオプション
[^17]: 用語集コマンドとオプション(通常makeindex) 
[^18]: CheckTeX開始コマンドとオプション
[^19]: Select whether LyX should output Windows or Cygwin style paths to LaTeX files. Don't change the default unless the TeX engine was not correctly detected at configure time. Warning: Your changes here will not be saved.
[^20]: クラスが変更された時にクラスオプションを既定値にする
[^21]: 書き出す平文/LaTeX/SGMLファイルの最大行数。0に設定すると、全ての段落は一行に出力されます。行数が>0ならば、段落行は空白行によって分離されます。
[^22]: strftime出力の日付書式
[^23]: 書き出しに際し、既存ファイルが上書きされる場合にどうするか。
