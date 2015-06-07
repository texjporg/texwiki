---
title: "TeXとフォント"
url: "/TeXとフォント/"
date: 2015-06-07T00:25:59Z
pukiwiki: "TeXとフォント"
---

# TeXとフォント

## TeX とフォント {#se78b0cf}

TeX におけるフォントの基礎知識や、LaTeXをはじめとしたシステム上でのフォントの利用等についての情報を提供します。

***

***

## はじめに {#r78a6606}

TeX あるいは LaTeX におけるフォントの利用については、なかなか思うようにいかなかったり、使いたいフォントがあってもどうしたらよいのか分からなかったりして、困った経験がある方も多いと思われます。

これは TeX におけるフォントの利用が、TeX が WYSIWYG でないために、あまり直接的・直観的に把握するのが困難であったり、見通しの良いものではないことに起因します。TeX は一般に、ユーザが接する「フォント」そのものについては利用しません。そこから抽出した情報の一部を利用するのみです。TeX の仕事はページ上に文字を綺麗に並べることですが、その仕事には具体的な文字（グリフ）の形を知る必要はなく、文字のだいたいの大きさなどを知るのみで十分だからです。

このことは、例えば LaTeX で TrueType や PostScritp などのフォントを利用する際に、かなりの手間と不思議なファイル群の導入や各種設定の必要性をもたらします。LaTeX で PostScript Type1 フォントを利用して出力を得る際のおおまかな流れは、

1. フォントファイルから組版に必要な情報を抽出する。（TFMファイルや .enc ファイルの生成）
1. 上記で抽出した情報に、ある一定の規則でアクセスする設定を行う。（.fd ファイルの作成）<br>
    フォントファミリとエンコーディングやフォント属性のセットを指定することでフォント情報にアクセスできるようにします。

1. フォント情報と実際のフォントファイルとの対応付けを行う。(.mapファイルの編集）

といった感じです。これらの面倒な作業を行う自信がなければ、[CTAN](/CTAN/) からパッケージが入手できないかまず考えましょう。なければ諦めます。

フォント設定の煩わしさを少しでも軽減したければ、XeLaTeX や LuaLaTeX への移行を考えましょう。

## フォントを変えてみる（欧文フォント） {#wb9a55f8}

Computer Modern に飽きたら本文用フォントを変えてみましょう。ここでは、入手可能な LaTeX パッケージが存在し、本文用として使える本格的なフォントを利用する例をいくつかあげます。比較的広範な文字集合を含み、リガチャなどが充実したものを主に例示します。

### [Latin Modern](http://www.gust.org.pl/projects/e-foundry/latin-modern) {#h96ac87b}

ポーランドの TeX Users Group、[GUST](http://www.gust.org.pl/) で開発された、数式用を含む、広範な文字集合をサポートするフォントセットです。[Latin Modern](</Latin Modern/>) のページを参照してください。Bogusław “Jacko” Jackowski と Janusz M. Nowacki　による設計です。ラテン文字をサポートします。ベトナム語でも利用可能です。

### [EB Garamond](http://www.georgduffner.at/ebgaramond/) {#tdbd7142}

Georg Duffner　によるフォントです。デザインは Claude Garamond による有名な書体が元になっています。Garamond 系のフォントに関しては [Adobe](https://store1.adobe.com/cfusion/store/html/index.cfm?store=OLS-JP&event=displayFontPackage&code=1703) をはじめとして様々なフォントベンダで作成されています。いわゆるオールド・スタイル・セリフに分類されます。利用可能な文字集合として、ラテン文字・ギリシャ文字・キリル文字があります。標準的な各種リガチャに加え、st や ct などのリガチャもあり、スモールキャップ・オールドスタイル数字もサポートします。いくつかのオプティカルサイズが用意されています。

TeXLive では tlmgr からインストール可能ですのでそれを利用しましょう。CTAN のページは

- [http://www.ctan.org/tex-archive/fonts/ebgaramond](http://www.ctan.org/tex-archive/fonts/ebgaramond)

Google Fonts のページ

- [http://www.google.com/fonts/specimen/EB+Garamond](http://www.google.com/fonts/specimen/EB+Garamond)

インストールしたらあとは

```
   \usepackage{ebgaramond}
```

するだけです。イタリックも利用可能ですが、ボールドはありません。オプションとして、

```
   oldstyle,osf    old-style figures
   lining,nf,lf    lining figures
```

```
   proportional,p  varying-width figures
   tabular,t       fixed-width figures
```

があります。上付き・下付き数字（\textsu{}、\textinf{}）、スワッシュ・イタリック（\textsw{}）やいくつかの文字に関しては装飾付のものがあります（\textin{}）。数式用はありません。

### [Libre Baskerville](http://www.impallari.com/projects/overview/libre-baskerville) {#bd51fe97}

トラディショナルに分類されるフォントです。Libre Baskerville は Baskerville の活字をもとにしたフォントで、webfont としての利用を想定して設計されています。

CTAN および Google Fonts のページは

- [https://www.ctan.org/tex-archive/fonts/librebaskerville](https://www.ctan.org/tex-archive/fonts/librebaskerville)
- [https://www.google.com/fonts/specimen/Libre+Baskerville](https://www.google.com/fonts/specimen/Libre+Baskerville)

です。サポートする文字集合はラテン文字です。ボールドとイタリックも利用可能です。インストールしたのち、

```
   \usepackage{librebaskerville}
```

しましょう。数式用はありません。

## CTAN にないフォントを利用する {#z14d6053}

### TFM ファイルの生成 {#r85aade4}

### Font Definition (.fd) ファイル {#d5a8cb68}

### Map　ファイルの編集 {#ja3c2d3b}
