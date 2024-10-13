---
title: "TLContrib"
url: "/TLContrib/"
date: 2018-07-05T20:15:26Z
pukiwiki: "TLContrib"
---

# TLContrib

## TLContrib {#y561e069}

[TeX Live](</TeX Live/>) は書籍の付録として DVD に入る場合もあるため，

- 利用や改変，商用再配布にライセンス上制約がない（＝「フリー」）
- 「フリー」でない物が動作条件として必須でない

という条件を満たすものだけを採用する方針をとっています（Debian と同様）。
この方針やその他の様々な事情で TeX Live には収録されないものの，「パッケージ自体にはライセンスの制約がなく，利用や再配布が自由である」という場合が多々あります。
このようなパッケージを代わりに収録して，いわば「TeX Live を補完する」という目的で作られているディストリビューションが TLContrib です。

- [TeX Live Contrib Area](http://contrib.texlive.info/)

***

***

### TLContrib に収録されているものの例 {#e4db4d96}

#### getnonfreefonts {#bab3197f}

先述の TeX Live の方針により，「商用・非商用を問わず無料で利用可能だが，商用再配布を禁じるフォント」は TeX Live には採用されません。
getnonfreefonts はそのような「無料だが『フリー』でないフォント」をインストールするためのスクリプトで，それ自体は LaTeX Project Public License (LPPL) v1.3 以降で配布されています。

- [getnonfreefonts](https://www.tug.org/fonts/getnonfreefonts/)

#### cjk-gs-integrate-macos, ptex-fontmaps-macos {#dde9becc}

2015 年 10 月 3 日以降の TeX Live 2015 及び TeX Live 2016，2017 には，macOS Sierra / OS X El Capitan のヒラギノフォントに対応した ptex-fontmaps (旧名:jfontmaps) &amp; cjk-gs-integrate が収録されていました。
しかし，これらは TeX Live 2018 以降では削除され，macOS 専用のヒラギノ（OS X 10.11 El Capitan 以降に付属するもの）を扱う場合は外部のデータベースからファイルを取得する方法に変更されました。
この外部データベースなどを収録したのが cjk-gs-integrate-macos，ptex-fontmaps-macos です。
セットアップ方法は[ヒラギノフォント](</ヒラギノフォント/#macos-hiragino-setup>)に説明があります。

- [cjk-gs-integrate 20190303.0（Mojave 対応）](https://okumuralab.org/tex/mod/forum/discuss.php?d=2583)
- [cjk-gs-integrate &amp; ptex-fontmaps 20180306.0](https://okumuralab.org/tex/mod/forum/discuss.php?d=2382)

#### japanese-otf-nonfree {#m957f673}

いわゆる [OTF](/OTF/) パッケージ（pLaTeX 用）とその upLaTeX 対応版です。
ヒラギノフォントの仮名文字や記号類といったプロポーショナル和文文字を使用する \propshape という命令のために使われる TFM / VF のセットが含まれています。

- [japanese-otf  2022-02-17](https://okumuralab.org/tex/mod/forum/discuss.php?d=3330)

#### hiraprop {#nea4705d}

2021年以降、hirapropパッケージもtlcontribリポジトリに収録されました。

実際に、tlcontribはTeX Live 2016以降で動作しますので、TeX Live 2016以降でhirapropパッケージを使いたい場合に、tlcontribリポジトリも利用するとよいでしょう。

### 関連リンク {#vd8e3fd2}

- \[[issue:200\] TLContrib packages into MacPorts?](https://ml.texjp.org/pipermail/issue/2018-July/#162)
- [http://www.preining.info/blog/tag/tlcontrib/](http://www.preining.info/blog/tag/tlcontrib/)

### ChangLog {#s9b42273}

- [https://git.texlive.info/tlcontrib/](https://git.texlive.info/tlcontrib/)
    - [log](https://git.texlive.info/tlcontrib/log/)
