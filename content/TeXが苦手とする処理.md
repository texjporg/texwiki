---
title: "TeXが苦手とする処理"
url: "/TeXが苦手とする処理/"
date: 2006-11-05T05:57:50Z
pukiwiki: "TeXが苦手とする処理"
---

# TeXが苦手とする処理

<!-- -+- -- -1- -- -+- -- -2- -- -+- -- -3- -- -+- -- -4- -- -+- -- -5- -- -+- -- -6- -- -+- -- -7- -- -+-  -->

### 原稿用紙 {#i5d966d4}

枠は必須でなくとも「20文字&times;20行」のような体裁を要求されることがあります。

- [http://home.hiroshima-u.ac.jp/mnishida/linux/genkou01.html](http://home.hiroshima-u.ac.jp/mnishida/linux/genkou01.html)
- [http://www.sapmed.ac.jp/satui/std/doc/genkou.sty.news](http://www.sapmed.ac.jp/satui/std/doc/genkou.sty.news) （LaTeX 2.09 用）
- [http://www.sapmed.ac.jp/satui/std/doc/genkou.sty.patch1](http://www.sapmed.ac.jp/satui/std/doc/genkou.sty.patch1) （上のパッチ）

### 環境依存文字（謂ゆる機種依存文字） {#p625d750}

#### どの環境でも気を付けるべき環境依存文字 {#y42d0186}

- 【注】 Mac OS，Microsoft Windows 以外の環境では，
    次の表内の環境依存文字を正しく表示できない可能性があります。

<table>
<thead>
<tr><th colspan="10" rowspan="2" style="text-align:center">Shift_JIS, ISO-2022-JP, EUC-JP に<br>おける環境依存文字</th><th colspan="4" style="text-align:center">代替処置の例</th></tr>
<tr><th colspan="2" style="text-align:center">テキスト</th><th colspan="2" style="text-align:center">LaTeX や OTF/UTF/ums package の命令</th></tr>
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

<!-- Windows-31J …… Microsoft による Shift_JIS の拡張。 -->
<!-- x-CP50220 …… Microsoft による ISO-2022-JP の拡張。IANA 非登録なので，MIME では “x-” または “X-” で始まる非標準の名称として用いる必要がある。 -->
<!-- x-CP51932 …… Microsoft による EUC-JP の拡張。IANA 非登録なので，MIME では “x-” または “X-” で始まる非標準の名称として用いる必要がある。 -->

- 【注】 Microsoft Windows 以外の環境では，
    次の表内の環境依存文字を正しく表示できない可能性があります。

<table>
<thead>
<tr><th rowspan="2" style="text-align:center">Shift_JIS,<br>ISO-2022-JP,<br>EUC-JP<br>における<br>環境依存文字</th><th colspan="3" style="text-align:center">代替処置の例</th></tr>
<tr><th style="text-align:center">テキスト</th><th colspan="2" style="text-align:center">LaTeX や OTF/UTF/ums package の命令</th></tr>
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
<tr><th colspan="5" style="text-align:center">テキスト</th><th style="text-align:center">OTF<br>UTF<br>ums</th></tr>
</thead>
<tbody>
<tr><td rowspan="4" style="text-align:center">人<br>名<br>用<br>漢<br>字</td><td rowspan="4" style="text-align:center">旧<br>字<br>体</td><td style="text-align:center">&#x9ed1;</td><td style="text-align:center">&#x6a6b;</td><td style="text-align:center">&#xfa19;</td><td style="text-align:center">&#xfa1b;</td><td style="text-align:center">&#xfa1a;</td><td style="text-align:center">黒</td><td style="text-align:center">横</td><td style="text-align:center">神</td><td style="text-align:center">福</td><td style="text-align:center">祥</td><td rowspan="14" style="text-align:left">\UTF{}<br><br>\CID{}<br><br>\UMS{}</td></tr>
<tr><td style="text-align:center">&#xfa26;</td><td style="text-align:center">&#xfa22;</td><td style="text-align:center">&#x7dd6;</td><td style="text-align:center">&#xfa16;</td><td style="text-align:center">&#x589e;</td><td style="text-align:center">都</td><td style="text-align:center">諸</td><td style="text-align:center">緒</td><td style="text-align:center">猪</td><td style="text-align:center">増</td></tr>
<tr><td style="text-align:center">&#x5fb7;</td><td style="text-align:center">&#xf929;</td><td style="text-align:center">&#x90de;</td><td style="text-align:center">&#x5bec;</td><td style="text-align:center">&#x85b0;</td><td style="text-align:center">徳</td><td style="text-align:center">朗</td><td style="text-align:center">郎</td><td style="text-align:center">寛</td><td style="text-align:center">薫</td></tr>
<tr><td style="text-align:center">&#x8cf4;</td><td style="text-align:center">&#x7028;</td><td colspan="3" style="text-align:center"></td><td style="text-align:center">頼</td><td style="text-align:center">瀬</td><td colspan="3" style="text-align:center"></td></tr>
<tr><td colspan="2" rowspan="4" style="text-align:center">旧<br>字<br>体</td><td style="text-align:center">&#x9751;</td><td style="text-align:center">&#xfa12;</td><td style="text-align:center">&#x6df8;</td><td style="text-align:center">&#xfa1d;</td><td style="text-align:center">&#xfa1c;</td><td style="text-align:center">青</td><td style="text-align:center">晴</td><td style="text-align:center">清</td><td style="text-align:center">精</td><td style="text-align:center">靖</td></tr>
<tr><td style="text-align:center">&#x654e;</td><td style="text-align:center">&#xfa1e;</td><td style="text-align:center">&#x9592;</td><td style="text-align:center">&#xfa17;</td><td style="text-align:center">&#x9115;</td><td style="text-align:center">教</td><td style="text-align:center">羽</td><td style="text-align:center">間</td><td style="text-align:center">益</td><td style="text-align:center">郷</td></tr>
<tr><td style="text-align:center">&#xfa2c;</td><td style="text-align:center">&#xfa2a;</td><td style="text-align:center">&#xfa2b;</td><td style="text-align:center">&#xfa10;</td><td style="text-align:center">&#x6085;</td><td style="text-align:center">館</td><td style="text-align:center">飯</td><td style="text-align:center">飼</td><td style="text-align:center">塚</td><td style="text-align:center">悦</td></tr>
<tr><td style="text-align:center">&#xf9dc;</td><td colspan="4" style="text-align:center"></td><td style="text-align:center">隆</td><td colspan="4" style="text-align:center"></td></tr>
<tr><td rowspan="5" style="text-align:center">異<br>体<br>字</td><td rowspan="2" style="text-align:center">古<br>字</td><td rowspan="2" style="text-align:center">&#x51ec;</td><td rowspan="2" style="text-align:center">&#xfa18;</td><td colspan="3" rowspan="2" style="text-align:center"></td><td rowspan="2" style="text-align:center">風</td><td style="text-align:center">禮</td><td colspan="3" rowspan="2" style="text-align:center"></td></tr>
<tr><td style="text-align:center">礼</td></tr>
<tr><td rowspan="3" style="text-align:center">俗<br>字</td><td rowspan="2" style="text-align:center">&#x9ad9;</td><td rowspan="2" style="text-align:center">&#xfa11;</td><td rowspan="2" style="text-align:center">&#x6ff5;</td><td rowspan="2" style="text-align:center">&#x663b;</td><td rowspan="2" style="text-align:center">&#xfa2d;</td><td rowspan="2" style="text-align:center">高</td><td rowspan="2" style="text-align:center">崎</td><td style="text-align:center">濱</td><td rowspan="2" style="text-align:center">&#x6602;</td><td rowspan="2" style="text-align:center">鶴</td></tr>
<tr><td style="text-align:center">浜</td></tr>
<tr><td style="text-align:center">&#x6120;</td><td style="text-align:center">&#xfa14;</td><td colspan="3" style="text-align:center"></td><td style="text-align:center">慍</td><td style="text-align:center">欅</td><td colspan="3" style="text-align:center"></td></tr>
<tr><td colspan="2" style="text-align:center">異体字</td><td style="text-align:center">&#xfa25;</td><td colspan="4" style="text-align:center"></td><td style="text-align:center">逸</td><td colspan="4" style="text-align:center"></td></tr>
</tbody>
</table>

<!-- 「逸」の旧字体は U+FA67 （二点之繞 + 兔）です。 -->

<table>
<tbody>
<tr><td colspan="2">表外漢字</td><td>&#x5f34;</td><td>&#x5f45;</td><td>&#x9127;</td><td>&#x73c9;</td><td>&#x71c1;</td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td colspan="12">他，多数</td></tr>
</tbody>
</table>

- 【注】異体字の（本字，古字，同字［別体字，或体］，俗字［略字や誤字を含む］と
    いう）種類分けについては文献によって解釈が異なるので，
    ある文献による種類分けと上の表の種類分けとが一致しないことがあります。

#### Mac OS 環境で特に気を付けるべき環境依存文字 {#w0cac168}

<!-- x-Mac-Japanese …… Apple による Shift_JIS の拡張。IANA 非登録なので，MIME では “x-” または “X-” で始まる非標準の名称として用いる必要がある。 -->

- 【注】 Mac OS 以外の環境では，
    次の表内の環境依存文字を正しく表示できない可能性があります。

<table>
<thead>
<tr><th colspan="10" rowspan="2" style="text-align:center">Shift_JIS, ISO-2022-JP, EUC-JP に<br>おける環境依存文字</th><th colspan="5" style="text-align:center">代替処置の例</th></tr>
<tr><th colspan="2" style="text-align:center">テキスト</th><th colspan="3" style="text-align:center">LaTeX や OTF/UTF package の命令</th></tr>
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

## Comments {#ada1c094}

- 少なくとも丸数字の1-99くらいまでは、pkフォントがあると重宝すると思うのですが、そういうものはMFソースの形で公開れていないものでしょうか？ -- 通りすがり 2007-09-04 (火) 03:01:40
    <!-- 少なくとも，囲碁の棋譜用のフォントにそのようなものがあるということは -->
    <!-- 知られています（CTAN/fonts/go）． -->

- 私の存在自体がお気に召さない人間が存在するようですので，私が本質的な部分を作成した箇所については撤去します． -- しっぽ愛好家 2007-09-06 (木) 21:25:53
- 何があったのかわかりませんが，しっぽ愛好家さんのファンは多いはずです。 -- 奥村 2007-09-06 (木) 21:40:48
- 私が何か言うたびに某インストーラ作者に当人の日記で絡まれていまして耐えられませんので，引退することにし，それに伴いごみ掃除をいたしました（以前にも質問者を過剰に擁護する人々に絡まれてはきましたが，件の人物の場合は継続的かつ執拗ですので（こういうことを言うと件の人物が凱歌をあげるだけですけれども））．ああいうものが必要なら，あべのり氏をはじめとする「初心者の味方」気取りの皆様に改めて書かせるとよいかと存じます（私などが書いたものよりもっと「初心者に優しい」ものを書いてくださるでしょうから）． -- しっぽ愛好家 2007-09-06 (木) 22:10:34
- お気にされすぎだと思いますけれど。 -- 奥村 2007-09-06 (木) 22:25:34

<!-- -+- -- -1- -- -+- -- -2- -- -+- -- -3- -- -+- -- -4- -- -+- -- -5- -- -+- -- -6- -- -+- -- -7- -- -+-  -->
