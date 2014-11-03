---
title: "e-pTeX"
url: "/e-pTeX/"
date: 2013-04-06T08:37:44Z
pukiwiki: "e-pTeX"
---

# e-pTeX

e-pTeX は内部処理が Unicode ではないので Unicode を使用した文書を適切に処理できないことがあります．<br>
Unicode を使用して問題が発生する場合は [e-upTeX](/upTeX,upLaTeX/) を使用してください．<br>

## [e-pTeX](http://sourceforge.jp/projects/eptex/wiki/) → 問題が発生する場合は [e-upTeX](/upTeX,upLaTeX/) を使用する {#u8bd5dfc}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## e-pTeX とは {#a746c835}

e-pTeX は pTeX に [e-TeX](/e-TeX/) 拡張を追加したものです．<br>

- [e-pTeX Wiki](http://sourceforge.jp/projects/eptex/wiki/FrontPage)

### ChangeLog {#mf34fb2b}

- \[[texlive\] Index of /trunk/Build/source/texk/web2c/eptexdir](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/eptexdir/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/eptexdir/?view=log)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/eptexdir/ChangeLog?view=markup)

- \[[texlive\] Index of /trunk/Build/source/texk/web2c/ptexdir](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/ptexdir/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/ptexdir/?view=log)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/web2c/ptexdir/ChangeLog?view=markup)

## ptexenc {#w41f5dea}

- [ptexenc/文字コード判定 - ptexlive Wiki](http://tutimura.ath.cx/ptexlive/?ptexenc%2F%CA%B8%BB%FA%A5%B3%A1%BC%A5%C9%C8%BD%C4%EA)
- \[[texlive\] Index of /trunk/Build/source/texk/ptexenc](http://www.tug.org/svn/texlive/trunk/Build/source/texk/ptexenc/)
    - [log](http://www.tug.org/svn/texlive/trunk/Build/source/texk/ptexenc/?view=log)
    - [ChangeLog](http://www.tug.org/svn/texlive/trunk/Build/source/texk/ptexenc/ChangeLog?view=markup)

## 注意点 {#mfa82ee4}

### 丸附き数字 → [LuaTeX](/LuaTeX/), LuaJITTeX, [XeTeX](/XeTeX/), [upTeX](/upTeX,upLaTeX/) など、Unicode 化された TeX を使用する {#s7930698}

丸附き数字（e.g.
&#x2460; \[U+2460\], &#x2461; \[U+2461\], &#x2462; \[U+2462\]）の類は Unicode を使用せずに従来の
Shift_JIS, ISO-2022-JP, EUC-JP などの文字符号化方式を用いて記述する限り
機種依存文字であることに注意してください (See [qa:45781](https://okumuralab.org/~okumura/texfaq/qa/45781.html))。<br>

対処法は，大別すると次の3通りになります。

1. [LuaTeX](/LuaTeX/), LuaJITTeX, [XeTeX](/XeTeX/), [upTeX](/upTeX,upLaTeX/) など、Unicode 化された TeX 族を利用する。
1. 丸附き数字などの字形をもったフォントを利用：
    - ITC Zapf Dingbats フォント（“{\usefont{U}{pzd}{m}{n} \symbol{"AC}}” など）
    - pifont パッケージ（“\ding{"AC}”，“\Pisymbol{pzd}{"AC}” など）
        - 【注意】 “"” は十六進表記の識別子であり，“'” にすれば八進表記，
            何も付けなければ十進表記でも書けます。例えば

> "AC = '254 = 172

です。こういったコードは
[testfont](/testfont/) をタイプセットして一覧を作ると確認できます。

- go.sty パッケージの囲碁用フォント [CTAN:fonts/go/](https://mirror.ctan.org/fonts/go/) (
    ただし「39」が「29」と表示されるバグあり →[修正を行ったもの](http://tony.cocolog-nifty.com/misc/2006/02/_gosty_5257.html)）
    - [OTF パッケージ](/OTF/)（“\ajMaru{1}”，“\UTF{2460}” ［=
        &#x2460; {U+2460}］など）

1. 丸の中身と丸を合成：
    - \textcircled マクロ（LaTeX 自身が提供）
    - \MARU マクロ（okumacro パッケージが提供するほか，
        同種のものがあちこちで定義されています。\[See [qa:29584](https://okumuralab.org/~okumura/texfaq/qa/29584.html)\]）

### 環境依存文字（謂ゆる機種依存文字） → [LuaTeX](/LuaTeX/), LuaJITTeX, [XeTeX](/XeTeX/), [upTeX](/upTeX,upLaTeX/) など、Unicode 化された TeX を使用する {#p625d750}

#### どの環境でも気を付けるべき環境依存文字 {#y42d0186}

- 【注意】 Mac OS，Microsoft Windows 以外の環境では，
    次の表内の環境依存文字を正しく表示できない可能性があります。

<table>
<thead>
<tr><th colspan="10" rowspan="2" style="text-align:center">Shift_JIS, ISO-2022-JP, EUC-JP に<br>おける環境依存文字</th><th colspan="4" style="text-align:center">代替処置の例</th></tr>
<tr><th colspan="2" style="text-align:center">テキスト</th><th colspan="2" style="text-align:center">LaTeX や OTF/ums package の命令</th></tr>
</thead>
<tbody>
<tr><td style="text-align:center">&#x2460;</td><td style="text-align:center">&#x2461;</td><td style="text-align:center">&#x2462;</td><td style="text-align:center">&#x2463;</td><td style="text-align:center">&#x2464;</td><td style="text-align:center">&#x2465;</td><td style="text-align:center">&#x2466;</td><td style="text-align:center">&#x2467;</td><td style="text-align:center">&#x2468;</td><td style="text-align:center">&#x2469;</td><td style="text-align:center">(1)</td><td style="text-align:center">(10)</td><td style="text-align:left">\ding{"AC}, \ding{"C0}, \ajMaru{1}</td><td rowspan="18" style="text-align:left">\UTF{}<br><br>\CID{}<br><br>\UMS{}</td></tr>
<tr><td style="text-align:center">&#x246a;</td><td style="text-align:center">&#x246b;</td><td style="text-align:center">&#x246c;</td><td style="text-align:center">&#x246d;</td><td style="text-align:center">&#x246e;</td><td style="text-align:center">&#x246f;</td><td style="text-align:center">&#x2470;</td><td style="text-align:center">&#x2471;</td><td style="text-align:center">&#x2472;</td><td style="text-align:center">&#x2473;</td><td style="text-align:center">(11)</td><td style="text-align:center">(20)</td><td style="text-align:left">\ajMaru{11}</td></tr>
<tr><td style="text-align:center">&#x2160;</td><td style="text-align:center">&#x2161;</td><td style="text-align:center">&#x2162;</td><td style="text-align:center">&#x2163;</td><td style="text-align:center">&#x2164;</td><td style="text-align:center">&#x2165;</td><td style="text-align:center">&#x2166;</td><td style="text-align:center">&#x2167;</td><td style="text-align:center">&#x2168;</td><td style="text-align:center">&#x2169;</td><td style="text-align:center">VII</td><td style="text-align:center">IX</td><td style="text-align:left">\ajRoman{7}</td></tr>
<tr><td style="text-align:center">&#x3349;</td><td style="text-align:center">&#x3314;</td><td style="text-align:center">&#x3322;</td><td style="text-align:center">&#x334d;</td><td style="text-align:center">&#x3318;</td><td style="text-align:center">&#x3327;</td><td style="text-align:center">&#x3303;</td><td style="text-align:center">&#x3336;</td><td style="text-align:center">&#x3351;</td><td style="text-align:center">&#x3357;</td><td style="text-align:center">ミリ</td><td style="text-align:center">キロ</td><td style="text-align:left">\ajLig{ミリ}</td></tr>
<tr><td style="text-align:center">&#x330d;</td><td style="text-align:center">&#x3326;</td><td style="text-align:center">&#x3323;</td><td style="text-align:center">&#x332b;</td><td style="text-align:center">&#x334a;</td><td style="text-align:center">&#x333b;</td><td colspan="4" style="text-align:center"></td><td style="text-align:center">ドル</td><td style="text-align:center">ページ</td><td style="text-align:left">\ajLig{ドル}</td></tr>
<tr><td style="text-align:center">&#x339c;</td><td style="text-align:center">&#x339d;</td><td style="text-align:center">&#x339e;</td><td style="text-align:center">&#x338e;</td><td style="text-align:center">&#x338f;</td><td style="text-align:center">&#x33c4;</td><td colspan="4" style="text-align:center"></td><td style="text-align:center">mm</td><td style="text-align:center">kg</td><td style="text-align:left">\ajLig{mm}</td></tr>
<tr><td style="text-align:center">&#x33a1;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">m^2</td><td style="text-align:left">m$^2$, m\texttwosuperior, \ajLig{m2}</td></tr>
<tr><td style="text-align:center">&#x301d;</td><td style="text-align:center">&#x301f;</td><td colspan="8" style="text-align:center"></td><td style="text-align:center">「</td><td style="text-align:center">」</td><td style="text-align:left">\UTF{301D}, \UTF{301F}</td></tr>
<tr><td style="text-align:center">&#x2116;</td><td colspan="9" style="text-align:center"></td><td style="text-align:center">No.</td><td style="text-align:center">No</td><td style="text-align:left">\textnumero, \ajLig{No.}, \ajLig{No}</td></tr>
<tr><td style="text-align:center">&#x33cd;</td><td colspan="9" style="text-align:center"></td><td style="text-align:center">K.K.</td><td style="text-align:center">KK</td><td style="text-align:left">\ajLig{K.K.}, \ajLig{KK}, \ajLig{KK.}</td></tr>
<tr><td style="text-align:center">&#x2121;</td><td colspan="9" style="text-align:center"></td><td style="text-align:center">TEL</td><td style="text-align:center">Tel</td><td style="text-align:left">\textsc{Tel}, \ajLig{TEL}, \ajLig{Tel}, \ajLig{tel}</td></tr>
<tr><td style="text-align:center">&#x32a4;</td><td style="text-align:center">&#x32a5;</td><td style="text-align:center">&#x32a6;</td><td style="text-align:center">&#x32a7;</td><td style="text-align:center">&#x32a8;</td><td colspan="5" style="text-align:center"></td><td style="text-align:center">（上）</td><td style="text-align:center">（中）</td><td style="text-align:left">\○上, \ajLig{○上}</td></tr>
<tr><td style="text-align:center">&#x3231;</td><td style="text-align:center">&#x3232;</td><td style="text-align:center">&#x3239;</td><td colspan="7" style="text-align:center"></td><td style="text-align:center">（株）</td><td style="text-align:center">（代）</td><td style="text-align:left">\（株）, \ajLig{(株)}</td></tr>
<tr><td style="text-align:center">&#x337e;</td><td style="text-align:center">&#x337d;</td><td style="text-align:center">&#x337c;</td><td style="text-align:center">&#x337b;</td><td colspan="6" style="text-align:center"></td><td style="text-align:center">昭和</td><td style="text-align:center">平成</td><td style="text-align:left">\ajLig{平成}</td></tr>
<tr><td style="text-align:center">&#x222e;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">&int;</td><td style="text-align:left">$\oint$</td></tr>
<tr><td style="text-align:center">&#x221f;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">&ang;</td><td style="text-align:left">\UTF{221F}</td></tr>
<tr><td style="text-align:center">&#x22bf;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">&Delta;</td><td style="text-align:left">$\mathnormal{\Delta}$, $\varDelta$</td></tr>
<tr><td style="text-align:center">&#x2170;</td><td style="text-align:center">&#x2171;</td><td style="text-align:center">&#x2172;</td><td style="text-align:center">&#x2173;</td><td style="text-align:center">&#x2174;</td><td style="text-align:center">&#x2175;</td><td style="text-align:center">&#x2176;</td><td style="text-align:center">&#x2177;</td><td style="text-align:center">&#x2178;</td><td style="text-align:center">&#x2179;</td><td style="text-align:center">vii</td><td style="text-align:center">ix</td><td style="text-align:left">\ajroman{7}</td></tr>
</tbody>
</table>

#### Microsoft Windows 環境で特に気を付けるべき環境依存文字 {#h9bb4c4e}

- [Windowsの機種依存文字（画像） - CyberLibrarian](http://www.asahi-net.or.jp/~ax2s-kmtn/ref/mdc_img.html)

<!-- Windows-31J …… Microsoft による Shift_JIS の拡張。 -->
<!-- x-CP50220 …… Microsoft による ISO-2022-JP の拡張。IANA 非登録なので，MIME では “x-” または “X-” で始まる非標準の名称として用いる必要がある。 -->
<!-- x-CP51932 …… Microsoft による EUC-JP の拡張。IANA 非登録なので，MIME では “x-” または “X-” で始まる非標準の名称として用いる必要がある。 -->

- 【注意】 Microsoft Windows 以外の環境では，
    次の表内の環境依存文字を正しく表示できない可能性があります。

<table>
<thead>
<tr><th rowspan="2" style="text-align:center">Shift_JIS,<br>ISO-2022-JP,<br>EUC-JP<br>における<br>環境依存文字</th><th colspan="3" style="text-align:center">代替処置の例</th></tr>
<tr><th style="text-align:center">テキスト</th><th colspan="2" style="text-align:center">LaTeX や OTF/ums package の命令</th></tr>
</thead>
<tbody>
<tr><td style="text-align:center">&sum;</td><td style="text-align:center">&Sigma;</td><td style="text-align:left">$\sum$, \Pisymbol{psy}{"E5}</td><td rowspan="8" style="text-align:left">\UTF{}<br><br>\CID{}<br><br>\UMS{}</td></tr>
<tr><td style="text-align:center">&#xffe4;</td><td style="text-align:center">&#x7c;</td><td style="text-align:left">\textbrokenbar</td></tr>
<tr><td style="text-align:center">&#xff07;</td><td style="text-align:center">'</td><td style="text-align:left">\UTF{FF07}</td></tr>
<tr><td style="text-align:center">&#xff02;</td><td style="text-align:center">"</td><td style="text-align:left">\UTF{FF02}</td></tr>
<tr><td style="text-align:center">&#x9ad9;</td><td style="text-align:center">高</td><td style="text-align:left">\ajHashigoTaka</td></tr>
<tr><td style="text-align:center">&#xfa11;</td><td style="text-align:center">崎</td><td style="text-align:left">\ajTatsuSaki</td></tr>
<tr><td rowspan="2" style="text-align:center">&#x6ff5;</td><td style="text-align:center">濱</td><td rowspan="2" style="text-align:left">\ajMayuHama</td></tr>
<tr><td style="text-align:center">浜</td></tr>
</tbody>
</table>

<br>

<table>
<thead>
<tr><th colspan="2" rowspan="2" style="text-align:center"></th><th colspan="5" rowspan="2" style="text-align:center">Shift_JIS,<br>ISO-2022-JP,<br>EUC-JP<br>における<br>環境依存文字</th><th colspan="6" style="text-align:center">代替処置の例</th></tr>
<tr><th colspan="5" style="text-align:center">テキスト</th><th style="text-align:center">OTF<br>ums</th></tr>
</thead>
<tbody>
<tr><th rowspan="4" style="text-align:center">人<br>名<br>用<br>漢<br>字</th><th rowspan="4" style="text-align:center">旧<br>字<br>体</th><td style="text-align:center">&#x9ed1;</td><td style="text-align:center">&#x85b0;</td><td style="text-align:center">&#xfa19;</td><td style="text-align:center">&#xfa1b;</td><td style="text-align:center">&#xfa1a;</td><td style="text-align:center">黒</td><td style="text-align:center">薫</td><td style="text-align:center">神</td><td style="text-align:center">福</td><td style="text-align:center">祥</td><td rowspan="19" style="text-align:left">\UTF{}<br><br>\CID{}<br><br>\UMS{}</td></tr>
<tr><td style="text-align:center">&#xfa26;</td><td style="text-align:center">&#xfa22;</td><td style="text-align:center">&#x7dd6;</td><td style="text-align:center">&#xfa16;</td><td style="text-align:center">&#x6a6b;</td><td style="text-align:center">都</td><td style="text-align:center">諸</td><td style="text-align:center">緒</td><td style="text-align:center">猪</td><td style="text-align:center">横</td></tr>
<tr><td style="text-align:center">&#x7da0;</td><td style="text-align:center">&#x589e;</td><td style="text-align:center">&#x5fb7;</td><td style="text-align:center">&#xf929;</td><td style="text-align:center">&#x90de;</td><td style="text-align:center">緑</td><td style="text-align:center">増</td><td style="text-align:center">徳</td><td style="text-align:center">朗</td><td style="text-align:center">郎</td></tr>
<tr><td style="text-align:center">&#x8cf4;</td><td style="text-align:center">&#x7028;</td><td style="text-align:center">&#x5bec;</td><td colspan="2" style="text-align:center"></td><td style="text-align:center">頼</td><td style="text-align:center">瀬</td><td style="text-align:center">寛</td><td colspan="2" style="text-align:center"></td></tr>
<tr><th colspan="2" rowspan="4" style="text-align:center">旧字体</th><td style="text-align:center">&#x9751;</td><td style="text-align:center">&#xfa12;</td><td style="text-align:center">&#x6df8;</td><td style="text-align:center">&#xfa1d;</td><td style="text-align:center">&#xfa1c;</td><td style="text-align:center">青</td><td style="text-align:center">晴</td><td style="text-align:center">清</td><td style="text-align:center">精</td><td style="text-align:center">靖</td></tr>
<tr><td style="text-align:center">&#x654e;</td><td style="text-align:center">&#xfa1e;</td><td style="text-align:center">&#x9592;</td><td style="text-align:center">&#xfa17;</td><td style="text-align:center">&#x9115;</td><td style="text-align:center">教</td><td style="text-align:center">羽</td><td style="text-align:center">間</td><td style="text-align:center">益</td><td style="text-align:center">郷</td></tr>
<tr><td style="text-align:center">&#xfa2c;</td><td style="text-align:center">&#xfa2a;</td><td style="text-align:center">&#xfa2b;</td><td style="text-align:center">&#xfa10;</td><td style="text-align:center">&#x7501;</td><td style="text-align:center">館</td><td style="text-align:center">飯</td><td style="text-align:center">飼</td><td style="text-align:center">塚</td><td style="text-align:center">瓶</td></tr>
<tr><td style="text-align:center">&#xf9dc;</td><td style="text-align:center">&#x6085;</td><td colspan="3" style="text-align:center"></td><td style="text-align:center">隆</td><td style="text-align:center">悦</td><td colspan="3" style="text-align:center"></td></tr>
<tr><th rowspan="10" style="text-align:center">異<br>体<br>字</th><th style="text-align:center">本字</th><td style="text-align:center">&#x88f5;</td><td colspan="4" style="text-align:center"></td><td style="text-align:center">裴</td><td colspan="4" style="text-align:center"></td></tr>
<tr><th rowspan="2" style="text-align:center">古字</th><td rowspan="2" style="text-align:center">&#x51ec;</td><td rowspan="2" style="text-align:center">&#xfa18;</td><td rowspan="2" style="text-align:center">&#x52db;</td><td rowspan="2" style="text-align:center">&#x8d12;</td><td rowspan="2" style="text-align:center"></td><td rowspan="2" style="text-align:center">風</td><td style="text-align:center">禮</td><td style="text-align:center">勳</td><td rowspan="2" style="text-align:center">賢</td><td rowspan="2" style="text-align:center"></td></tr>
<tr><td style="text-align:center">礼</td><td style="text-align:center">勲</td></tr>
<tr><th rowspan="3" style="text-align:center">同字</th><td rowspan="2" style="text-align:center">&#x5db9;</td><td rowspan="2" style="text-align:center">&#x96af;</td><td rowspan="2" style="text-align:center">&#x5586;</td><td rowspan="2" style="text-align:center">&#x66fa;</td><td rowspan="2" style="text-align:center">&#xfa15;</td><td style="text-align:center">島</td><td style="text-align:center">島</td><td rowspan="2" style="text-align:center">哲</td><td rowspan="2" style="text-align:center">曹</td><td style="text-align:center">煕</td></tr>
<tr><td style="text-align:center">嶋</td><td style="text-align:center">陦</td><td style="text-align:center">熙</td></tr>
<tr><td style="text-align:center">&#x6998;</td><td style="text-align:center">&#x5d53;</td><td style="text-align:center">&#x710f;</td><td style="text-align:center">&#x6198;</td><td style="text-align:center"></td><td style="text-align:center">矩</td><td style="text-align:center">嵒</td><td style="text-align:center">亟</td><td style="text-align:center">憙</td><td style="text-align:center"></td></tr>
<tr><th rowspan="4" style="text-align:center">俗字</th><td style="text-align:center">&#x9ad9;</td><td style="text-align:center">&#x66fb;</td><td style="text-align:center">&#x519d;</td><td style="text-align:center">&#xfa11;</td><td style="text-align:center">&#x6852;</td><td style="text-align:center">高</td><td style="text-align:center">昇</td><td style="text-align:center">宜</td><td style="text-align:center">崎</td><td style="text-align:center">桑</td></tr>
<tr><td rowspan="2" style="text-align:center">&#x6801;</td><td rowspan="2" style="text-align:center">&#x6ff5;</td><td rowspan="2" style="text-align:center">&#x663b;</td><td rowspan="2" style="text-align:center">&#xfa2d;</td><td rowspan="2" style="text-align:center">&#xfa1f;</td><td rowspan="2" style="text-align:center">柳</td><td style="text-align:center">濱</td><td rowspan="2" style="text-align:center">昂</td><td rowspan="2" style="text-align:center">鶴</td><td style="text-align:center">臘</td></tr>
<tr><td style="text-align:center">浜</td><td style="text-align:center">臈</td></tr>
<tr><td style="text-align:center">&#x514a;</td><td style="text-align:center">&#xfa14;</td><td style="text-align:center">&#x6120;</td><td colspan="2" style="text-align:center"></td><td style="text-align:center">兌</td><td style="text-align:center">欅</td><td style="text-align:center">慍</td><td colspan="2" style="text-align:center"></td></tr>
<tr><th colspan="2" style="text-align:center">異体字</th><td style="text-align:center">&#xfa25;</td><td colspan="4" style="text-align:center"></td><td style="text-align:center">逸</td><td colspan="4" style="text-align:center"></td></tr>
</tbody>
</table>

<!-- 「逸」の旧字体は U+FA67 （二点之繞 + 兔）です。 -->

<table>
<tbody>
<tr><th colspan="2">表外漢字</th><td>&#x4e28;</td><td>&#x9127;</td><td>&#x5f34;</td><td>&#x5f45;</td><td>&#x71c1;</td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td colspan="12">他，多数</td></tr>
</tbody>
</table>

- 【注意】異体字の（本字，古字，同字［別体字，或体］，俗字［略字や誤字を含む］
    という）種類分けについては文献によって解釈が異なるので，
    ある文献による種類分けと上の表の種類分けとが一致しないことがあります。

#### Mac OS 環境で特に気を付けるべき環境依存文字 {#w0cac168}

- [Macintoshの機種依存文字（画像） - CyberLibrarian](http://www.asahi-net.or.jp/~ax2s-kmtn/ref/mdcmc_img.html)

<!-- x-Mac-Japanese …… Apple による Shift_JIS の拡張。IANA 非登録なので，MIME では “x-” または “X-” で始まる非標準の名称として用いる必要がある。 -->

- 【注意】 Mac OS 以外の環境では，
    次の表内の環境依存文字を正しく表示できない可能性があります。

<table>
<thead>
<tr><th colspan="10" rowspan="2" style="text-align:center">Shift_JIS, ISO-2022-JP, EUC-JP に<br>おける環境依存文字</th><th colspan="5" style="text-align:center">代替処置の例</th></tr>
<tr><th colspan="2" style="text-align:center">テキスト</th><th colspan="3" style="text-align:center">LaTeX や OTF package の命令</th></tr>
</thead>
<tbody>
<tr><td style="text-align:center">&copy;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">(c)</td><td style="text-align:left">\copyright, \Pisymbol{psy}{"D3}, \Pisymbol{psy}{"E3}</td><td rowspan="2" style="text-align:left">\UTF{}</td><td rowspan="2" style="text-align:left">\CID{}</td></tr>
<tr><td style="text-align:center">&trade;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">TM</td><td style="text-align:left">\texttrademark, \Pisymbol{psy}{"D4}, \Pisymbol{psy}{"E4}, \ajLig{tm}</td></tr>
<tr><td colspan="2" style="text-align:center">&hellip;&#xf87f;</td><td colspan="8" style="text-align:center"> </td><td colspan="2" style="text-align:center">...</td><td style="text-align:left"></td><td style="text-align:left"></td><td style="text-align:center"></td></tr>
<tr><td style="text-align:center">&#x2474;</td><td style="text-align:center">&#x2475;</td><td style="text-align:center">&#x2476;</td><td style="text-align:center">&#x2477;</td><td style="text-align:center">&#x2478;</td><td style="text-align:center">&#x2479;</td><td style="text-align:center">&#x247a;</td><td style="text-align:center">&#x247b;</td><td style="text-align:center">&#x247c;</td><td style="text-align:center">&#x247d;</td><td style="text-align:center">(1)</td><td style="text-align:center">(10)</td><td style="text-align:left">\ajKakko{1}</td><td rowspan="3" style="text-align:left">\UTF{}</td><td rowspan="71" style="text-align:center">\CID{}</td></tr>
<tr><td style="text-align:center">&#x247e;</td><td style="text-align:center">&#x247f;</td><td style="text-align:center">&#x2480;</td><td style="text-align:center">&#x2481;</td><td style="text-align:center">&#x2482;</td><td style="text-align:center">&#x2483;</td><td style="text-align:center">&#x2484;</td><td style="text-align:center">&#x2485;</td><td style="text-align:center">&#x2486;</td><td style="text-align:center">&#x2487;</td><td style="text-align:center">(11)</td><td style="text-align:center">(20)</td><td style="text-align:left">\ajKakko{11}</td></tr>
<tr><td style="text-align:center">&#x2776;</td><td style="text-align:center">&#x2777;</td><td style="text-align:center">&#x2778;</td><td style="text-align:center">&#x2779;</td><td style="text-align:center">&#x277a;</td><td style="text-align:center">&#x277b;</td><td style="text-align:center">&#x277c;</td><td style="text-align:center">&#x277d;</td><td style="text-align:center">&#x277e;</td><td style="text-align:center"></td><td style="text-align:center">(1)</td><td style="text-align:center">(9)</td><td style="text-align:left">\ding{"B6}, \ding{"CA}, \ajKuroMaru{1}</td></tr>
<tr><td colspan="3" style="text-align:center">&#xf860;0.</td><td colspan="7" style="text-align:center"></td><td colspan="2" style="text-align:center">0.</td><td style="text-align:left">\ajPeriod{0}</td><td style="text-align:left"></td></tr>
<tr><td style="text-align:center">&#x2488;</td><td style="text-align:center">&#x2489;</td><td style="text-align:center">&#x248a;</td><td style="text-align:center">&#x248b;</td><td style="text-align:center">&#x248c;</td><td style="text-align:center">&#x248d;</td><td style="text-align:center">&#x248e;</td><td style="text-align:center">&#x248f;</td><td style="text-align:center">&#x2490;</td><td style="text-align:center"></td><td style="text-align:center">1.</td><td style="text-align:center">9.</td><td style="text-align:left">\ajPeriod{1}</td><td rowspan="2" style="text-align:left">\UTF{}</td></tr>
<tr><td style="text-align:center">&#x216a;</td><td style="text-align:center">&#x216b;</td><td colspan="8" style="text-align:center"></td><td style="text-align:center">XI</td><td style="text-align:center">XII</td><td style="text-align:left">\ajRoman{11}</td></tr>
<tr><td colspan="5" style="text-align:center">&#xf862;XIII</td><td colspan="5" style="text-align:center"></td><td colspan="2" style="text-align:center">XIII</td><td style="text-align:left">\ajRoman{13}</td><td style="text-align:left"></td></tr>
<tr><td colspan="4" style="text-align:center">&#xf861;XIV</td><td colspan="6" style="text-align:center"></td><td colspan="2" style="text-align:center">XIV</td><td style="text-align:left">\ajRoman{14}</td><td style="text-align:left"></td></tr>
<tr><td colspan="3" style="text-align:center">&#xf860;XV</td><td colspan="7" style="text-align:center"></td><td colspan="2" style="text-align:center">XV</td><td style="text-align:left">\ajRoman{15}</td><td style="text-align:left"></td></tr>
<tr><td style="text-align:center">&#x217a;</td><td style="text-align:center">&#x217b;</td><td colspan="8" style="text-align:center"></td><td style="text-align:center">xi</td><td style="text-align:center">xii</td><td style="text-align:left">\ajroman{11}</td><td style="text-align:left">\UTF{}</td></tr>
<tr><td colspan="5" style="text-align:center">&#xf862;xiii</td><td colspan="5" style="text-align:center"></td><td colspan="2" style="text-align:center">xiii</td><td style="text-align:left">\ajroman{13}</td><td style="text-align:left"></td></tr>
<tr><td colspan="4" style="text-align:center">&#xf861;xiv</td><td colspan="6" style="text-align:center"></td><td colspan="2" style="text-align:center">xiv</td><td style="text-align:left">\ajroman{14}</td><td style="text-align:left"></td></tr>
<tr><td colspan="3" style="text-align:center">&#xf860;xv</td><td colspan="7" style="text-align:center"></td><td colspan="2" style="text-align:center">xv</td><td style="text-align:left">\ajroman{15}</td><td style="text-align:left"></td></tr>
<tr><td style="text-align:center">&#x249c;</td><td style="text-align:center">&#x249d;</td><td style="text-align:center">&#x249e;</td><td style="text-align:center">&#x249f;</td><td style="text-align:center">&#x24a0;</td><td style="text-align:center">&#x24a1;</td><td style="text-align:center">&#x24a2;</td><td style="text-align:center">&#x24a3;</td><td style="text-align:center">&#x24a4;</td><td style="text-align:center">&#x24a5;</td><td style="text-align:center">(a)</td><td style="text-align:center">(j)</td><td style="text-align:left">\ajKakkoalph{10}, \（j）</td><td rowspan="13" style="text-align:left">\UTF{}</td></tr>
<tr><td style="text-align:center">&#x24a6;</td><td style="text-align:center">&#x24a7;</td><td style="text-align:center">&#x24a8;</td><td style="text-align:center">&#x24a9;</td><td style="text-align:center">&#x24aa;</td><td style="text-align:center">&#x24ab;</td><td style="text-align:center">&#x24ac;</td><td style="text-align:center">&#x24ad;</td><td style="text-align:center">&#x24ae;</td><td style="text-align:center">&#x24af;</td><td style="text-align:center">(k)</td><td style="text-align:center">(t)</td><td style="text-align:left">\ajKakkoalph{20}, \（t）</td></tr>
<tr><td style="text-align:center">&#x24b0;</td><td style="text-align:center">&#x24b1;</td><td style="text-align:center">&#x24b2;</td><td style="text-align:center">&#x24b3;</td><td style="text-align:center">&#x24b4;</td><td style="text-align:center">&#x24b5;</td><td colspan="4" style="text-align:center"></td><td style="text-align:center">(u)</td><td style="text-align:center">(z)</td><td style="text-align:left">\ajKakkoalph{26}, \（z）</td></tr>
<tr><td style="text-align:center">&#x339f;</td><td style="text-align:center">&#x33a0;</td><td style="text-align:center">&#x33a2;</td><td colspan="7" style="text-align:center"></td><td style="text-align:center">mm^2</td><td style="text-align:center">cm^2</td><td style="text-align:left">mm$^2$, mm\texttwosuperior, \ajLig{mm2}</td></tr>
<tr><td style="text-align:center">&#x33a4;</td><td style="text-align:center">&#x33a5;</td><td colspan="8" style="text-align:center"></td><td style="text-align:center">cm^3</td><td style="text-align:center">m^3</td><td style="text-align:left">m$^3$, m\textthreesuperior, \ajLig{m3}</td></tr>
<tr><td style="text-align:center">&#x217f;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">m</td><td style="text-align:left">\ajLig{m}</td></tr>
<tr><td style="text-align:center">&#x210a;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">g</td><td style="text-align:left">\ajLig{g}</td></tr>
<tr><td style="text-align:center">&#x3396;</td><td style="text-align:center">&#x3397;</td><td style="text-align:center">&#x3398;</td><td colspan="7" style="text-align:center"></td><td style="text-align:center">ml</td><td style="text-align:center">dl</td><td style="text-align:left">m$\ell$, \ajLig{ml}</td></tr>
<tr><td style="text-align:center">&#x2113;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">l</td><td style="text-align:left">$\ell$, \ajLig{l}</td></tr>
<tr><td style="text-align:center">&#x33b3;</td><td style="text-align:center">&#x33b1;</td><td style="text-align:center">&#x33b0;</td><td colspan="7" style="text-align:center"></td><td style="text-align:center">ms</td><td style="text-align:center">ns</td><td style="text-align:left">\ajLig{ms}</td></tr>
<tr><td style="text-align:center">&#x33b2;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">&mu;s</td><td style="text-align:left">\textmu s, \Pisymbol{psy}{"6D}s, $\mu$s, \ajLig{micros}</td></tr>
<tr><td style="text-align:center">&#x2109;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">&deg;F</td><td style="text-align:left">\textdegree F, {}$^\circ$F</td></tr>
<tr><td style="text-align:center">&#x33d4;</td><td style="text-align:center">&#x33cb;</td><td style="text-align:center">&#x3390;</td><td style="text-align:center">&#x3385;</td><td style="text-align:center">&#x3386;</td><td style="text-align:center">&#x3387;</td><td colspan="4" style="text-align:center"></td><td style="text-align:center">mb</td><td style="text-align:center">HP</td><td style="text-align:left">\ajLig{HP}</td></tr>
<tr><td colspan="3" style="text-align:center">&#xf860;TB</td><td colspan="7" style="text-align:center"></td><td colspan="2" style="text-align:center">TB</td><td style="text-align:left">\ajLig{TB}</td><td style="text-align:left"></td></tr>
<tr><td style="text-align:center">&#x213b;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">FAX</td><td style="text-align:left">\ajLig{FAX}</td><td rowspan="19" style="text-align:left">\UTF{}</td></tr>
<tr><td style="text-align:center">&#x2664;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center"></td><td style="text-align:left">\ajvarSpade</td></tr>
<tr><td style="text-align:center">&#x2667;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center"></td><td style="text-align:left">\ajvarClub</td></tr>
<tr><td style="text-align:center">&#x2661;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center"></td><td style="text-align:left">$\heartsuit$, \ajHeart</td></tr>
<tr><td style="text-align:center">&#x2662;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">◇</td><td style="text-align:left">$\diamondsuit$, \ajDiamond</td></tr>
<tr><td style="text-align:center">&spades;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center"></td><td style="text-align:left">\ding{"AB}, \Pisymbol{psy}{"AA}, $\spadesuit$, \ajSpade</td></tr>
<tr><td style="text-align:center">&clubs;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center"></td><td style="text-align:left">\ding{"A8}, \Pisymbol{psy}{"A7}, $\clubsuit$, \ajClub</td></tr>
<tr><td style="text-align:center">&hearts;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center"></td><td style="text-align:left">\ding{"AA}, \Pisymbol{psy}{"A9}, \ajvarHeart</td></tr>
<tr><td style="text-align:center">&diams;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">◆</td><td style="text-align:left">\ding{"A9}, \Pisymbol{psy}{"A8}, \ajvarDiamond</td></tr>
<tr><td style="text-align:center">&#x3020;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">〒</td><td style="text-align:left">\ajPostal</td></tr>
<tr><td style="text-align:center">&#x260e;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center"></td><td style="text-align:left">\ajPhone</td></tr>
<tr><td style="text-align:center">&#x3004;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">(JIS)</td><td style="text-align:left">\ajJIS</td></tr>
<tr><td style="text-align:center">&#x261e;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">&rarr;</td><td style="text-align:left">\ding{"2B}, \ajRightHand</td></tr>
<tr><td style="text-align:center">&#x261c;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">&larr;</td><td style="text-align:left">\ajLeftHand</td></tr>
<tr><td style="text-align:center">&#x261d;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">&uarr;</td><td style="text-align:left">\ajUpHand</td></tr>
<tr><td style="text-align:center">&#x261f;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">&darr;</td><td style="text-align:left">\ajDownHand</td></tr>
<tr><td style="text-align:center">&#x21c6;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center"></td><td style="text-align:left">$\leftrightarrows$</td></tr>
<tr><td style="text-align:center">&#x21c4;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center"></td><td style="text-align:left">$\rightleftarrows$</td></tr>
<tr><td style="text-align:center">&#x21c5;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">&uarr;&darr;</td><td style="text-align:left">$\mathord{\uparrow\downarrow}$, \Pisymbol{psy}{"AD}\Pisymbol{psy}{"AF}</td></tr>
<tr><td colspan="3" style="text-align:center">&#xf860;&darr;&uarr;</td><td colspan="7" style="text-align:center"></td><td colspan="2" style="text-align:center">&darr;&uarr;</td><td style="text-align:left">$\mathord{\downarrow\uparrow}$, \Pisymbol{psy}{"AF}\Pisymbol{psy}{"AD}, \CID{8312}</td><td style="text-align:left"></td></tr>
<tr><td style="text-align:center">&#x21e8;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">&rarr;</td><td style="text-align:left">\ajRightWArrow</td><td rowspan="11" style="text-align:left">\UTF{}</td></tr>
<tr><td style="text-align:center">&#x21e6;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">&larr;</td><td style="text-align:left">\ajLeftWArrow</td></tr>
<tr><td style="text-align:center">&#x21e7;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">&uarr;</td><td style="text-align:left">\ajUpWArrow</td></tr>
<tr><td style="text-align:center">&#x21e9;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">&darr;</td><td style="text-align:left">\ajDownWArrow</td></tr>
<tr><td style="text-align:center">&#x27a1;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">&rarr;</td><td style="text-align:left">\ding{"E1}, \ajRightBArrow</td></tr>
<tr><td style="text-align:center">&#x2b05;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">&larr;</td><td style="text-align:left">\ajLeftBArrow</td></tr>
<tr><td style="text-align:center">&#x2b06;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">&uarr;</td><td style="text-align:left">\ajUpBArrow</td></tr>
<tr><td style="text-align:center">&#x2b07;</td><td colspan="9" style="text-align:center"></td><td colspan="2" style="text-align:center">&darr;</td><td style="text-align:left">\ajDownBArrow</td></tr>
<tr><td style="text-align:center">&#x3230;</td><td style="text-align:center">&#x322a;</td><td style="text-align:center">&#x322b;</td><td style="text-align:center">&#x322c;</td><td style="text-align:center">&#x322d;</td><td style="text-align:center">&#x322e;</td><td style="text-align:center">&#x322f;</td><td colspan="3" style="text-align:center"></td><td style="text-align:center">（日）</td><td style="text-align:center">（土）</td><td style="text-align:left">\（土）, \ajKakkoYobi{7}</td></tr>
<tr><td style="text-align:center">&#x3240;</td><td style="text-align:center">&#x3237;</td><td style="text-align:center">&#x3242;</td><td style="text-align:center">&#x3243;</td><td style="text-align:center">&#x323a;</td><td colspan="5" style="text-align:center"></td><td style="text-align:center">（祝）</td><td style="text-align:center">（呼）</td><td style="text-align:left">\（祝）, \ajLig{(祝)}</td></tr>
<tr><td style="text-align:center">&#x323e;</td><td style="text-align:center">&#x3234;</td><td style="text-align:center">&#x323b;</td><td style="text-align:center">&#x3236;</td><td style="text-align:center">&#x3233;</td><td style="text-align:center">&#x3235;</td><td style="text-align:center">&#x323c;</td><td style="text-align:center">&#x323d;</td><td style="text-align:center">&#x323f;</td><td style="text-align:center">&#x3238;</td><td style="text-align:center">（資）</td><td style="text-align:center">（財）</td><td style="text-align:left">\（財）, \ajLig{(財)}</td></tr>
<tr><td colspan="2" style="text-align:center">大&#x20dd;</td><td colspan="8" style="text-align:center"></td><td colspan="2" style="text-align:center">（大）</td><td style="text-align:left">\○大, \ajLig{○大}</td><td style="text-align:left"></td></tr>
<tr><td colspan="2" style="text-align:center">小&#x20dd;</td><td colspan="8" style="text-align:center"></td><td colspan="2" style="text-align:center">（小）</td><td style="text-align:left">\○小, \ajLig{○小}</td><td style="text-align:left"></td></tr>
<tr><td colspan="2" style="text-align:center">控&#x20dd;</td><td colspan="8" style="text-align:center"></td><td colspan="2" style="text-align:center">（控）</td><td style="text-align:left">\○控, \ajLig{○控}</td><td style="text-align:left"></td></tr>
<tr><td style="text-align:center">&#x32a9;</td><td style="text-align:center">&#x3296;</td><td style="text-align:center">&#x329d;</td><td style="text-align:center">&#x3298;</td><td style="text-align:center">&#x329e;</td><td style="text-align:center">&#x3299;</td><td colspan="4" style="text-align:center"></td><td style="text-align:center">（印）</td><td style="text-align:center">（秘）</td><td style="text-align:left">\○印, \ajLig{○印}</td><td rowspan="3" style="text-align:left">\UTF{}</td></tr>
<tr><td style="text-align:center">&#x3316;</td><td style="text-align:center">&#x3305;</td><td style="text-align:center">&#x3333;</td><td style="text-align:center">&#x334e;</td><td style="text-align:center">&#x3315;</td><td style="text-align:center">&#x3339;</td><td style="text-align:center">&#x3342;</td><td colspan="3" style="text-align:center"></td><td style="text-align:center">インチ</td><td style="text-align:center">ヘルツ</td><td style="text-align:left">\ajLig{インチ}</td></tr>
<tr><td style="text-align:center">&#x3300;</td><td style="text-align:center">&#x331e;</td><td style="text-align:center">&#x332a;</td><td style="text-align:center">&#x3331;</td><td style="text-align:center">&#x3347;</td><td style="text-align:center">&#x337f;</td><td colspan="4" style="text-align:center"></td><td style="text-align:center">コーポ</td><td style="text-align:center">ビル</td><td style="text-align:left">\ajLig{コーポ}</td></tr>
<tr><td colspan="5" style="text-align:center">&#xf862;有限会社</td><td colspan="5" style="text-align:center"></td><td colspan="2" style="text-align:center">有限会社</td><td style="text-align:left">\ajLig{有限会社}</td><td style="text-align:left"></td></tr>
<tr><td colspan="5" style="text-align:center">&#xf862;財団法人</td><td colspan="5" style="text-align:center"></td><td colspan="2" style="text-align:center">財団法人</td><td style="text-align:left">\ajLig{財団法人}</td><td style="text-align:left"></td></tr>
<tr><td style="text-align:center">&#x3094;</td><td style="text-align:center">&#x30f7;</td><td style="text-align:center">&#x30f8;</td><td style="text-align:center">&#x30f9;</td><td style="text-align:center">&#x30fa;</td><td colspan="5" style="text-align:center"></td><td style="text-align:center">う゛</td><td style="text-align:center">ワ゛</td><td style="text-align:left">\゛う, \ajLig{う゛}</td><td style="text-align:left">\UTF{}</td></tr>
<tr><td style="text-align:center">&#xfe11;</td><td style="text-align:center">&#xfe12;</td><td style="text-align:center">&#xfe19;</td><td colspan="7" style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:left">\CID{7887}, \CID{7888}, \CID{7897}</td><td style="text-align:left"></td></tr>
<tr><td style="text-align:center">&#xfe33;</td><td style="text-align:center">&#xfe31;</td><td style="text-align:center">&#xfe32;</td><td style="text-align:center">&#xfe30;</td><td colspan="6" style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:left">\UTF{FE33}</td><td rowspan="3" style="text-align:left">\UTF{}</td></tr>
<tr><td style="text-align:center">&#xfe35;</td><td style="text-align:center">&#xfe36;</td><td style="text-align:center">&#xfe39;</td><td style="text-align:center">&#xfe3a;</td><td style="text-align:center">&#xfe47;</td><td style="text-align:center">&#xfe48;</td><td style="text-align:center">&#xfe37;</td><td style="text-align:center">&#xfe38;</td><td style="text-align:center">&#xfe3f;</td><td style="text-align:center">&#xfe40;</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:left">\UTF{FE35}</td></tr>
<tr><td style="text-align:center">&#xfe3d;</td><td style="text-align:center">&#xfe3e;</td><td style="text-align:center">&#xfe41;</td><td style="text-align:center">&#xfe42;</td><td style="text-align:center">&#xfe43;</td><td style="text-align:center">&#xfe44;</td><td style="text-align:center">&#xfe3b;</td><td style="text-align:center">&#xfe3c;</td><td colspan="2" style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:left">\UTF{FE3D}</td></tr>
</tbody>
</table>

## 不具合 {#xf84e130}

### Windows の TeX Live 2013 で 表.tex などの 0x5c を含むファイル名を (e-)pTeX で処理しようとするとファイル名を正しく処理できない → TeX Live 2014 以降にアップデート {#p4d23466}

TeX Live 2014 (→ [Revision 31414](http://www.tug.org/svn/texlive?view=revision&revision=31414) を参照) で (e-)pTeX が 表.tex などの 0x5c を含むファイル名に対応しました．<br>
TeX Live 2013 ではファイル名に日本語を使用した場合，ファイル名を正しく処理できない場合があります．<br>

```
platex 表.tex
```

この場合は .dvi が出力され，表.dvi は出力されません．

同様に

```
platex 予定.tex
platex 構造.tex
platex ソフトウェア.tex
```

も 定.dvi, 造.dvi, フトウェア.dvi が出力され，予定.dvi, 構造.dvi, ソフトウェア.dvi は出力されません．

これを回避する方法としては

```
platex -jobname=表 表.tex
platex -jobname=予定 予定.tex
platex -jobname=構造 構造.tex
platex -jobname=ソフトウェア ソフトウェア.tex
```

のように -jobname= で指定してコンパイルする方法があります． → [TeX Live 2013 を使うときの通称「バカ文字」への配慮](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1430), [platexでダメ文字を含むファイルを処理する](http://d.hatena.ne.jp/tailriver/20101022/1291955342), [TeXmakerで使用可能なファイル名について](http://fagahhe2645.hatenablog.com/entry/2013/02/07/231005)

【参考】

- [Windows版pTeXでダメ文字を含むファイル名を扱う](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1074)
- [Shift_JISのダメ文字](https://sites.google.com/site/fudist/Home/grep/sjis-damemoji-jp)
    - [ダメ文字一覧表](https://sites.google.com/site/fudist/Home/grep/sjis-damemoji-jp/table)
