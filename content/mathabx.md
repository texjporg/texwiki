---
title: "mathabx"
url: "/mathabx/"
date: 2004-10-09T10:05:31Z
pukiwiki: "mathabx"
---

# mathabx

## Mathabx {#p8fc2df2}

#CONTENTS

### What is {#ib3a49d5}

Mathabx は [Anthony Phan](http://www-math.univ-poitiers.fr/~phan/) 氏により2002年4月30日に初めて公開された新しい数式用フォントで、Computer Modern および AMS fonts の上位互換を目指してデザインされています。名称は初期の配布が matha, mathb, mathx シリーズからなるものであったことに由来すると思われます。

<!-- ここでは配布元としてCTANを想定して記述しておきますが、 -->
<!-- 一次配布元である作者のページには2005年9月15日版があるみたいですね。 -->

最初の公開から幾度かの改定を経て、現在の配布（2005年5月18日版）には以下のフォントシリーズが含まれています。

- Matha : よく用いられる数式記号類 (major symbols series)
- Mathb : しばしば用いられる数式記号類 (minor symbols series)
- Mathc : 小文字まで含む筆記体アルファベット (unsupported calligraphic series)
- Mathx : 伸張可能な括弧類 (major extensible symbols series)
- Mathu : 特殊な数式記号類 (unsupported symbols series)
- Mathux : 特殊な大型演算子等を含む数式記号類 (unsupported extensible symbols series)
- Mathastrotest : 天文記号等 (about the metaness of astronomical/logical symbols)

詳細は配布に含まれる [mathtest.tex](http://www.ring.gr.jp/pub/text/CTAN/fonts/mathabx/mathtest.tex) を tex で typeset して得られる文書を参照してください。これはそれ自体が Mathabx フォントのサンプルと簡単な説明を兼ねたものになっています。同じものを PS 形式 ([mathtest.ps](http://www.ring.gr.jp/pub/text/CTAN/fonts/mathabx/mathtest.ps)) および PDF 形式 ([mathtest.pdf](http://www.ring.gr.jp/pub/text/CTAN/fonts/mathabx/mathtest.pdf)) に変換したものも CTAN の同じディレクトリ ([CTAN:fonts/mathabx/](https://mirror.ctan.org/fonts/mathabx/)) に置いてあります。あるいは[一次配布元](http://www-math.univ-poitiers.fr/~phan/metafont.html#mathabx)には PS を gzip で固めたものが置いてあります。

### インストール {#q2fbcaf5}

[CTAN](https://mirror.ctan.org/fonts/mathabx/) から MetaFont 形式のフォント本体 (source ディレクトリ下) とマクロ (texinputs ディレクトリ下) を取ってきて、[README](http://www.ring.gr.jp/pub/text/CTAN/fonts/mathabx/README) にしたがって適切なディレクトリに収めてください。実際の利用には TFM (\*.tfm) や Type1 フォント (\*.pfb) 等を自動または手動で生成して使用することになるでしょう。

後述の堀田先生のページには、すぐに利用可能な形でこれらのファイルをまとめたものが用意されていますので、そちらからパッケージを頂いてきたほうが簡単です。Vine Linux 3.1 用の Vine Plus には mathabx-2003-0vl3.noarch.rpm として、堀田先生の公開パッケージが同梱されています。

### その他 Web 上にある情報 {#qad506aa}

愛知教育大数学教室の堀田先生が、利用に必要な mathabx パッケージの配布および mathabx の利用方法についての詳細な解説をしておられますので、以下のページを参考になさってください。

- (メインサイト) [http://auemath.aichi-edu.ac.jp/~khotta/ghost/mathabx.html](http://auemath.aichi-edu.ac.jp/~khotta/ghost/mathabx.html)
- (ミラー) [http://www.geocities.jp/koh_hotta/ghost/mathabx.html](http://www.geocities.jp/koh_hotta/ghost/mathabx.html)

## コメント {#z9f27a38}

#COMMENT
