---
title: "LyX/設定/Windows"
url: "/LyX/設定/Windows/"
date: 2012-10-02T12:08:39Z
pukiwiki: "LyX/設定/Windows"
---

# LyX/設定/Windows

[LyX](/LyX/) > 設定

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

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

変換子(O):　　　<ins>tex2lyx -e utf8 -f $$i $$o</ins><br>
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

## 文書の設定 {#x90c6e46}

### 言語 {#a5afecd2}

#### 日本語の文書を作成する場合 {#ea058295}

日本語の文書を作成する場合は babel を off にします．

\[文書(D)\]-\[設定(S)...\]-\[言語\]

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　<span style="color:White;"><strong>LyX: 文書の設定</strong></span>　　　　　　</ins></span><br>

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
文字コードは以下の中から選択します．<br>
LaTeX (pLaTeX) で書き出しするときに出力したい文字コードを選択してください．<br>

- Japanese (non-CJK) (UTF-8)
- 日本語(CJK不使用) (EUC-JP)
- 日本語(CJK不使用) (JIS)
- 日本語(CJK不使用) (SJIS)

言語に日本語を選択して文字コードに言語既定値を選択した場合は文字コードは JIS (ISO-2022-JP) になります．<br>
出力した文書が文字化けしてしまう場合は (u)platex, (u)pbibtex, mendex で処理する文字コードと出力文字コードが一致しているかどうか確認してください．<br>

LaTeX (pLaTeX) で書き出しすると指定した文字コードで出力されます．<br>
lyx ファイル自体は常に UTF-8 で保存されます．<br>

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

言語(L): 　　　<span style="color:Black;background-color:#EEEEEE;">\[日本語　　　　　　　　　　　　　▼\]</span> ← 言語を日本語に設定します<br>
引用様式(Q): <span style="color:Black;background-color:#EEEEEE;">\[\`\`テキスト"　　　　　　　　　　 ▼\]</span><br>
文字コード<br>
　◯言語既定値(D)<br>
　<span style="color:#3333CC;">◎</span>その他(E): <span style="color:Black;background-color:#EEEEEE;">\[Japanese (non-CJK) (UTF-8)　　▼\]</span><br>

<br>

言語パッケージ(K): <span style="color:Black;background-color:#EEEEEE;">\[任意設定　▼\]</span>[^24]　<ins>　　　　　　　　　　</ins>[^25] ← 言語パッケージを任意設定に変更し，なにも入力しません．<br>

***

\[適用(A)\] をクリックします．<br>

#### babel を使用して文書を作成する場合 {#ca4fc5c1}

babel を使用して文書を作成する場合は babel を on にします．

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

言語(L): 　　　<span style="color:Black;background-color:#EEEEEE;">\[日本語　　　　　　　　　　　　　▼\]</span> ← 言語を日本語に設定します<br>
引用様式(Q): <span style="color:Black;background-color:#EEEEEE;">\[\`\`テキスト"　　　　　　　　　　 ▼\]</span><br>
文字コード<br>
　◯言語既定値(D)<br>
　<span style="color:#3333CC;">◎</span>その他(E): <span style="color:Black;background-color:#EEEEEE;">\[Japanese (non-CJK) (UTF-8)　　▼\]</span><br>

<br>

言語パッケージ(K): <span style="color:Black;background-color:#EEEEEE;">\[任意設定　▼\]</span>　<ins>\usepackage\[ngerman,english,japanese\]{babel}</ins> ← 言語パッケージを任意設定に変更し，使用する言語オプションを指定します．<br>

***

\[適用(A)\] をクリックします．<br>

#### [XeTeX](/XeTeX/)/[LuaTeX](/LuaTeX/) で文書を作成する場合 {#n7a3be37}

XeTeX/LuaTeX で文書を作成する場合は文字コードを ユニコード(XeTeX) (UTF-8) に設定します．

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

言語(L): 　　　<span style="color:Black;background-color:#EEEEEE;">\[日本語　　　　　　　　　　　　　▼\]</span><br>
引用様式(Q): <span style="color:Black;background-color:#EEEEEE;">\[\`\`テキスト"　　　　　　　　　　 ▼\]</span><br>
文字コード<br>
　◯言語既定値(D)<br>
　<span style="color:#3333CC;">◎</span>その他(E): <span style="color:Black;background-color:#EEEEEE;">\[ユニコード(XeTeX) (UTF-8)　　　　▼\]</span><br>

<br>

言語パッケージ(K): <span style="color:Black;background-color:#EEEEEE;">\[任意設定　▼\]</span>　<ins>　　　　　　　　　　</ins><br>

***

\[適用(A)\] をクリックします．<br>

### フォント {#r177f199}

\[文書(D)\]-\[設定(S)...\]-\[フォント\]

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　<span style="color:White;"><strong>LyX: 文書の設定</strong></span>　　　　　　</ins></span><br>

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

***

☐ 非TeXフォントを使用（XeTeX/LuaTeX経由）(U)[^26]<br>
既定のフォント族(D):　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　　　　　　　　　　　　　　　　　▼\]</span>[^27]　基本寸法(B):<span style="color:Black;background-color:#EEEEEE;">\[12　　　　▼\]</span><br>
LaTeXフォントエンコーディング: <span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　　　　　　　　　　　　　　　　　▼\]</span>　<ins>　　　　　　　　　　　　</ins>[^28]<br>
ローマン体(R):　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　　　　　　　　　　　　　　　　　▼\]</span>[^29]<br>
サンセリフ体(S):　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　　　　　　　　　　　　　　　　　▼\]</span>[^30]　<span style="color:#888888;background-color:#EEEEEE;">縮尺(C) (%): <ins>100　　　\[◆\]</ins></span><br>
タイプライタ体(T):　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[既定値　　　　　　　　　　　　　　　　　　　　▼\]</span>[^31]　<span style="color:#888888;background-color:#EEEEEE;">縮尺(A) (%): <ins>100　　　\[◆\]</ins></span><br>
CJK:　　　　　　　　　　　　　　　　<ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins>[^32]<br>
　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:#EEEEEE;">☐ 真性スモールキャップ体を使う(M)</span>[^33]<br>
　　　　　　　　　　　　　　　　　　　<span style="color:#888888;background-color:#EEEEEE;">☐ 旧様式数字を使う(O)</span>[^34]<br>

***

### 出力 {#pcd2eafa}

\[文書(D)\]-\[設定(S)...\]-\[出力\]

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　<span style="color:White;"><strong>LyX: 文書の設定</strong></span>　　　　　　</ins></span><br>

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

文字コードが Japanese (non-CJK) (日本語(CJK不使用)) の場合は既定値は DVI です．<br>
日本語の文書を作成する場合に，dvipdfmx を使用して PDF ファイルで表示を確認したい場合は，既定出力形式を PDF (dvipdfm) に変更して \[適用(A)\] をクリックします．<br>

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

出力形式<br>
　既定出力形式(F):　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[PDF (dvipdfm)　　　　　　　　　　　　　　　　　　　　▼\]</span>[^35]<br>

***

#### PDF (LuaTeX) {#g2e3c1cf}

文字コードが ユニコード(XeTeX) (UTF-8) の場合は既定値は PDF (pdflatex) です．<br>
LuaTeX を使用したい場合は，既定出力形式を PDF (LuaTeX) に変更して \[適用(A)\] をクリックします．<br>

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

出力形式<br>
　既定出力形式(F):　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[PDF (LuaTeX)　　　　　　　　　　　　　　　　　　　　▼\]</span><br>

***

### 文書クラス {#g33dd885}

\[文書(D)\]-\[設定(S)...\]-\[文書クラス\]

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　<span style="color:White;"><strong>LyX: 文書の設定</strong></span>　　　　　　</ins></span><br>

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

文書クラスで article (Japanese New) を選択し，クラスオプションを設定します．<br>
dvipdfmx を使用する場合は，グラフィックドライバに DVIPDFMx を指定します．<br>
lualatex を使用する場合は，グラフィックドライバに pdfTeX を指定します．<br>
設定を反映させるために \[適用(A)\] をクリックします．<br>

■ platex + dvipdfmx の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　文書クラス(C)<br>
　<span style="color:Black;background-color:#EEEEEE;">\[article (Japanese New)　　　　　　　　　　　　　　　　　　　　▼\]</span><br>

<br>

　クラスオプション<br>
　<span style="color:#888888;background-color:#EEEEEE;">☑事前定義(P):</span>　　<span style="color:#888888;background-color:#EEEEEE;">\[事前定義されたオプションがありません\]</span><br>
　任意設定(T):　　　 <ins>12pt,papersize</ins><br>

<br>

グラフィックドライバ(G):　　　　<span style="color:Black;background-color:#EEEEEE;">\[DVIPDFMx　▼\]</span><br>

***

■ uplatex + dvipdfmx の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　文書クラス(C)<br>
　<span style="color:Black;background-color:#EEEEEE;">\[article (Japanese New)　　　　　　　　　　　　　　　　　　　　▼\]</span><br>

<br>

　クラスオプション<br>
　<span style="color:#888888;background-color:#EEEEEE;">☑事前定義(P):</span>　　<span style="color:#888888;background-color:#EEEEEE;">\[事前定義されたオプションがありません\]</span><br>
　任意設定(T):　　　 <ins>uplatex,12pt,papersize</ins><br>

<br>

グラフィックドライバ(G):　　　　<span style="color:Black;background-color:#EEEEEE;">\[DVIPDFMx　▼\]</span><br>

***

■ lualatex の場合

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<br>

　文書クラス(C)<br>
　<span style="color:Black;background-color:#EEEEEE;">\[article (Japanese New for LuaTeX)　　　　　　　　　　　　　　▼\]</span><br>

<br>

　クラスオプション<br>
　<span style="color:#888888;background-color:#EEEEEE;">☑事前定義(P):</span>　　<span style="color:#888888;background-color:#EEEEEE;">\[事前定義されたオプションがありません\]</span><br>
　任意設定(T):　　　 <ins>12pt</ins><br>

<br>

グラフィックドライバ(G):　　　　<span style="color:Black;background-color:#EEEEEE;">\[pdfTeX　　　　▼\]</span><br>

***

### フロートの配置 {#ofebe217}

図や表を使用する場合は

\[文書(D)\]-\[設定(S)...\]-\[フロートの配置\] で設定可能です．

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　<span style="color:White;"><strong>LyX: 文書の設定</strong></span>　　　　　　</ins></span><br>

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

<span style="color:Black;background-color:#DFBE0C;"><ins>　<span style="color:#2C9EEF;background-color:#805000;"><strong>L</strong></span><span style="color:#DFCE3C;background-color:#805000;"><strong>Y</strong></span><span style="color:#DE3232;background-color:#805000;"><strong>X</strong></span>　<span style="color:White;"><strong>LyX: 文書の設定</strong></span>　　　　　　</ins></span><br>

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

(u)platex + dvipdfmx, lualatex, xelatex で文書のプロパティのタイトル・作成者・サブタイトル・キーワードを作成したい場合は LaTeXプリアンブルで

***

<span style="color:Black;background-color:#DFBE0C;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <span style="color:Black;background-color:#CFAE0C;"></ins>\[ <span style="color:White;"><strong>?</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

```
\usepackage{ifpdf}
\usepackage{ifluatex}
\usepackage{ifxetex}
\ifpdf
  \ifluatex
    \usepackage[pdftex,pdfencoding=auto]{hyperref}
  \else
    \usepackage[pdftex]{hyperref}
  \fi
\else
  \ifxetex
    \usepackage[xetex]{hyperref}
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

のように編集すれば OK です．

LaTeXプリアンブルで [hyperref](/hyperref/) パッケージを読み込んでいる場合

\[挿入(I)\]-\[TeXコード\] で

```
\def\LyX{\texorpdfstring{L\kern-.1667em\lower.25em\hbox{Y}\kern-.125emX\@}{LyX}}
\section{\LyX{}するたびファイルがふえるね}
```

のように入力して \[表示(V)\]-\[PDF (dvipdfm) を表示(V)\] をすると自動的にしおりを作成してくれます．

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
[^24]: どの言語パッケージをLyXが使うべきか選択してください
[^25]: 言語パッケージを読み込むコマンドを入力してください (既定値：babel) 
[^26]: OpenTypeやTrueTypeフォントを直接使用する (要XeTeXないしLuaTeX) 
[^27]: 文書の既定フォント族を選択してください
[^28]: フォントエンコーディングを指定します (例: T1)。
[^29]: ローマン (セリフ) 体の書体を選んでください
[^30]: サンセリフ (グロテスク) 体の書体を選んでください
[^31]: タイプライタ (等間隔) 体の書体を選んでください
[^32]: 日中韓 (CJK) で文字で使用するフォントを入力してください
[^33]: フォントが提供していれば、擬似でないスモールキャップ体を使用する
[^34]: 図を並べない旧様式を使用する
[^35]: 既定の用紙寸法を指定してください(表示・更新用) 
