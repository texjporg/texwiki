---
title: "yhmath"
url: "/yhmath/"
date: 2004-09-23T04:32:41Z
pukiwiki: "yhmath"
---

# yhmath

## yhmath {#c1ec97da}

### 何？ {#rf9b7794}

Yannis Haralambous作の根号や括弧などのフォントです。
通常より大きいものまで用意されています。

yhmathを紹介してくださった本田さんに感謝します。
また，石原さん，uchiyamaさんにご教示をいただきました。

### インストール {#xdd91a7e}

[yhcmex.pfa](http://www.ring.gr.jp/pub/text/CTAN/fonts/yhmath/yhcmex.pfa)
ではなく，これを [t1utils](http://www.lcdf.org/~eddietwo/type/#t1utils)
[PfaEdit](http://pfaedit.sourceforge.net/)
で変換した [yhcmex.pfb](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/yhcmex.pfb) を使う方法を説明します。

ダウンロードするもの：

- [yhmath.ps](http://www.ring.gr.jp/pub/text/CTAN/fonts/yhmath/yhmath.ps)
    (マニュアル)

- [yhmath.dtx](http://www.ring.gr.jp/pub/text/CTAN/macros/latex/contrib/yhmath/yhmath.dtx)
    (適当なフォルダに)

- [yhmath.ins](http://www.ring.gr.jp/pub/text/CTAN/macros/latex/contrib/yhmath/yhmath.ins)
    (上と同じフォルダに)

- [yhmath.sty](http://www.ring.gr.jp/pub/text/CTAN/fonts/yhmath/yhmath.sty)
    (.../texmf/tex/latex/yhmath/ に)

- [yhcmex.pfb](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/yhcmex.pfb)
    (.../texmf/fonts/type1/public/misc/ に) \[29149バイトです。古いものと混同されないように\]

- [yhcmex10.tfm](http://www.ring.gr.jp/pub/text/CTAN/fonts/yhmath/yhcmex10.tfm)
    (.../texmf/fonts/tfm/public/misc/ に)

- [yrcmex10.tfm](http://www.ring.gr.jp/pub/text/CTAN/fonts/yhmath/yrcmex10.tfm)
    (.../texmf/fonts/tfm/public/misc/ に)

- [yhcmex10.vf](http://www.ring.gr.jp/pub/text/CTAN/fonts/yhmath/yhcmex10.vf)
    (.../texmf/fonts/vf/public/misc/ に)

yhmath.ins のあるフォルダに移動して，yhmath.ins を tex で処理します：

```
tex yhmath.ins
```

できた \*.fd を .../texmf/tex/latex/yhmath/ に移します。

もし ls-R を作っているなら mktexlsr を実行します。

.../texmf/dvips/config/psfonts.map に次のように書き足します。

```
yrcmex10 Yhcmex <yhcmex.pfb
```

.../texmf/dvips/config/dvipdfm.map に次のように書き足します：

```
yrcmex10 default yhcmex
```

以上で使えるはずです。

teTeX ベースのものなら，適当なマップファイル（たとえば texmf/dvips/misc/yhmath.map）に

```
yrcmex10 Yhcmex <yhcmex.pfb
```

と書いておいて texmf/web2c/updmap.cfg に MixedMap yhmath.map
と追加して updmap を実行するのが簡単かつ間違いがありません。

### バグ {#vc558236}

長い \[ \] を使うと途中が途切れるというバグが報告されています
\[[qa:21493\]](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/qa/21493.html)。
これについて Haralambous 氏にメールしたのですが，返事がありません。
角藤さん \[[qa:22089\]](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/qa/22089.html) が直してくださいました。
念のためここにも角藤さんの直された
[yhcmex10.tfm](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/yhcmex10.tfm)
と
[yhcmex10.vf](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/archive/yhcmex10.vf)
を置いておきます。

大熊さんがさらにバグと解決法を見つけられました \[[qa:23593\]](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/qa/23593.html)。
これについても Haralambous 氏に連絡しておきました。
