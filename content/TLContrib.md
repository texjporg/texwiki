---
title: "TLContrib"
url: "/TLContrib/"
date: 2018-07-05T20:15:26Z
pukiwiki: "TLContrib"
---

# TLContrib

[TeX Live](</TeX Live/>) &gt; TLContrib

TLContrib は TeX Live に収録できないパッケージを補完するためのリポジトリです．

- [TeX Live Contrib Area](http://contrib.texlive.info/)

### macOS 10.14 Mojave / macOS 10.13 High Sierra / macOS 10.12 Sierra / OS X 10.11 El Capitan  に付属するヒラギノフォントへの対応 <a id="mojave"></a> <a id="high-sierra"></a> <a id="highsierra"></a> <a id="sierra"></a> <a id="elcapitan"></a> {#xb9a2a27}

2015年10月3日（日本時間）に，macOS Sierra / OS X El Capitan のヒラギノフォントに対応した ptex-fontmaps (旧名:jfontmaps) &amp; cjk-gs-integrate 20151002.0 が TeX Live 2015 に取り込まれました。
しかし ptex-fontmaps &amp; cjk-gs-integrate 20180306.0 で [macOS Sierra / OS X El Capitan のヒラギノフォントに対応した ptex-fontmaps が削除され](http://www.tug.org/svn/texlive?view=revision&revision=46861)，
[cjk-gs-integrate で OS X 10.11 El Capitan 以降に付属するヒラギノフォントを扱う場合は外部のデータベースを取得して利用する方法に変更されました](http://www.tug.org/svn/texlive/trunk/Build/source/texk/texlive/linked_scripts/cjk-gs-integrate/cjk-gs-integrate.pl?r1=46862&r2=46861&pathrev=46862)。
そのため macOS Sierra / OS X El Capitan に付属するヒラギノフォントは TeX Live 2018 ではサポートされなくなりました。TeX Live 2018 以降は TeX Live に収録できないパッケージを補完するためのリポジトリである TLContrib から japanese-otf-nonfree, japanese-otf-uptex-nonfree, ptex-fontmaps-macos, cjk-gs-integrate-macos を別途インストールして設定する必要があります。
<strong>pLaTeX / upLaTeX + dvipdfmx では macOS Mojave / macOS High Sierra / macOS Sierra / OS X El Capitan に付属するヒラギノフォントを埋め込み可能です。</strong>

macOS 付属のヒラギノフォントに関する一連の対応については，以下を参照してください。

- [cjk-gs-integrate &amp; ptex-fontmaps 20180306.0](https://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=2382)
- [TeX界の El Capitan 迎撃戦記](http://doratex.hatenablog.jp/entry/20151008/1444310306)

この情報は macOS Mojave / macOS High Sierra / macOS Sierra / OS X El Capitan へのアップグレードをすすめるものではありません。
ただし，OS X Yosemite 以前には既知の脆弱性があり，その対策は macOS Mojave / macOS High Sierra / macOS Sierra / OS X El Capitan へのアップデートでしか提供されていないため，macOS Mojave / macOS High Sierra / macOS Sierra / OS X El Capitan へのアップグレードを見合わせるということは TeX や DTP のためにセキュリティ対策を犠牲にしていると心得る必要があります。

- TeX Live 2015 に収録されている [LuaTeX](/LuaTeX/) beta-0.80.0 は，macOS Mojave / macOS High Sierra / macOS Sierra / OS X El Capitan に搭載された新しい形式のヒラギノフォントを利用することができません。
    したがって，[LuaTeX-ja](/LuaTeX-ja/) でヒラギノフォントを使うためには2015年10月8日にリリースされた LuaTeX beta-0.81.0 以降に更新する必要があります（ただし，luaotfload パッケージの対応が未完了）。
    なお，IPA(ex) フォントを利用するのであれば無理に LuaTeX を更新する必要はありません。

- DTP で OS X El Capitan（10.11、10.11.1）搭載のヒラギノフォントを利用する場合，以前のヒラギノフォントとの互換性の問題により「Adobe InDesign CC/CS や Illustrator CC/CS などで文字間のカーニングをオプティカルに設定していると組体裁が崩れる」という情報もあります。
    （多くの場合，ヒラギノフォントを macOS にたよらず購入していることが想定されますが…）
    - 参考：[OS X El Capitan（10.11、10.11.1）搭載のヒラギノフォントと弊社製品版フォントについて](http://www.screen.co.jp/ga_product/sento/support/otf_osx_El_Capitan_1011_10111.html)
    - 追記 (2015-12-11)：OS X El Capitan 10.11.2 でついに深刻な問題が解消されました。[OS X El Capitan（10.11.2）搭載のヒラギノフォントと弊社製品版フォントについて](http://www.screen.co.jp/ga_product/sento/support/otf_osx_El_Capitan.html)
    - 追記 (2016-12-02)：macOS Sierra と OS X El Capitan に搭載のヒラギノフォントは同じ仕様です。[Sierra 時代の TeX Live 環境](http://doratex.hatenablog.jp/entry/20161202/1480665692)

- macOS Mojave / macOS High Sierra / macOS Sierra / OS X El Capitan に新たに収録された日本語フォントの多くは，従来の拡張子 .otf の OpenType Font を束ねた形式の OpenType Collection Font です。
    OpenType Collection Font の拡張子は既存の TrueType Collection Font と同じ .ttc ですが中身は別物ですので，TeX Live 2014 以前に収録されている dvipdfmx は OpenType Collection Font に対応していません。
    - 参考：[TeX で OpenType Collection フォントを扱ってみると（その1）](http://d.hatena.ne.jp/acetaminophen/20151003/1443865926)，[（その2）](http://d.hatena.ne.jp/acetaminophen/20151004/1443980435)，[（その3）](http://d.hatena.ne.jp/acetaminophen/20151005/1443984259)，[El Capitan フォントリスト](https://www.muskmelon.jp/?p=1169)，[El Capitan Japanese Font List](https://docs.google.com/spreadsheets/d/1hfZiU3YdAz7a6N_yM7aASUVFiHaOqHv2_1wZZejxCcU)，[Sierra Japanese Font List](https://docs.google.com/spreadsheets/d/1XOTLBnKsiIJd1Y8yBaIoqU_YVyCre0jVc3MTzGGlPd0)，[High Sierra Japanese Font List](https://docs.google.com/spreadsheets/d/1jVy2l1SJif8fP7hLxjt05l3Kmh7_2_YJ3M5oGtM6Lqw)

#### macOS Mojave / macOS High Sierra / macOS Sierra / OS X El Capitan に付属するヒラギノフォントのセットアップ {#l8c867e9}

macOS Mojave / macOS High Sierra / macOS Sierra / OS X El Capitan に付属するヒラギノフォントを TeX Live で利用したい場合は，はじめに

- macOS Mojave / macOS High Sierra / macOS Sierra / OS X El Capitan へのアップグレード
- TeX Live 2018 / MacTeX-2018 / BasicTeX-2018 のインストール

を完了させてください（どちらを先に行ってもかまいません；TeX Live / MacTeX / BasicTeX のインストールは，macOS Mojave / macOS High Sierra / macOS Sierra / OS X El Capitan かどうかにかかわらず従来と同じ方法で可能です[^1]）。
そのうえで，macOS Mojave / macOS High Sierra / macOS Sierra / OS X El Capitan に付属するヒラギノフォントのセットアップ手順は以下のとおりです：

macOS Mojave を使用している場合は
[TLContrib の cjk-gs-integrate-macos.pl](http://git.texlive.info/tlcontrib/tree/texmf-dist/scripts/cjk-gs-integrate-macos/cjk-gs-integrate-macos.pl) が
[macOS Mojave に対応した cjk-gs-integrate-macos.pl](https://github.com/texjporg/cjk-gs-support/blob/master/cjk-gs-integrate-macos.pl)
かどうかを確認します。
TLContrib の cjk-gs-integrate-macos.pl の [$macos_ver_minor の値が 14 の場合の処理](https://github.com/texjporg/cjk-gs-support/commit/4aa66186f854701bcfff77c9b4b32314cafeb90a#diff-c3805f5784f287c20c6562ee48a1c6d9)が記述されていない場合は macOS Mojave に対応していないので
[Bibunsho7-patch/Patch.app: ［改訂第7版］LaTeX2e美文書作成入門 ヒラギノフォントパッチ](https://github.com/munepi/bibunsho7-patch)を使用します。([参考](https://twitter.com/aminophen/status/1054735620776570881))

TLContrib の cjk-gs-integrate-macos.pl が macOS Mojave に対応している場合あるいは macOS High Sierra / macOS Sierra / OS X El Capitan を使用している場合は以下を実行してヒラギノフォントを pLaTeX / upLaTeX + dvipdfmx で PDF に埋め込むことができます。

ターミナルから [tlmgr](/tlmgr/) を実行して TeX Live を最新の状態に更新します。

```
sudo tlmgr update --self --all
```

TLContrib から japanese-otf-nonfree, japanese-otf-uptex-nonfree, ptex-fontmaps-macos, cjk-gs-integrate-macos をインストールします。

```
sudo tlmgr repository add http://contrib.texlive.info/current tlcontrib
sudo tlmgr pinning add tlcontrib '*'
sudo tlmgr install japanese-otf-nonfree japanese-otf-uptex-nonfree ptex-fontmaps-macos cjk-gs-integrate-macos
```

cjk-gs-integrate を --link-texmf --cleanup オプション付きで実行します。

```
sudo cjk-gs-integrate --link-texmf --cleanup
```

cjk-gs-integrate-macos を --link-texmf オプション付きで実行します。

```
sudo cjk-gs-integrate-macos --link-texmf
```

mktexlsr を実行します。

```
sudo mktexlsr
```

最後に，macOS Mojave / macOS High Sierra / macOS Sierra / OS X El Capitan に付属するヒラギノフォントを埋め込むためのマップファイルを指定します。

macOS Mojave / macOS High Sierra の場合は

```
sudo kanji-config-updmap-sys --jis2004 hiragino-highsierra-pron
```

macOS Sierra / OS X El Capitan の場合は

```
sudo kanji-config-updmap-sys --jis2004 hiragino-elcapitan-pron
```

を実行します。

以上で，ヒラギノフォントを pLaTeX / upLaTeX + dvipdfmx で PDF に埋め込むことができます。

### 関連リンク {#p834f689}

- [Bibunsho7-patch/Patch.app: ［改訂第7版］LaTeX2e美文書作成入門 ヒラギノフォントパッチ](https://github.com/munepi/bibunsho7-patch)
- [macOS High Sierra に LaTeX 環境を作る#ヒラギノ](https://qiita.com/sira/items/d7f5c411ccb0f90c43d8#%E3%83%92%E3%83%A9%E3%82%AE%E3%83%8E)
- \[[issue:200\] TLContrib packages into MacPorts?](https://ml.texjp.org/pipermail/issue/2018-July/#162)
- [TeX Live 2018 注目ポイントまとめ (2)#8. macOS 向けサポートファイルの分離・TLContrib 収録](http://acetaminophen.hatenablog.com/entry/tl2018-02#main-8)
- [cjk-gs-integrate &amp; ptex-fontmaps 20180306.0](https://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=2382)
- [japanese-otf &amp; japanese-otf-uptex 2018-02-11](https://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=2366)
- [http://www.preining.info/blog/tag/tlcontrib/](http://www.preining.info/blog/tag/tlcontrib/)

### ChangLog {#s9b42273}

- [http://git.texlive.info/tlcontrib/](http://git.texlive.info/tlcontrib/)
    - [log](http://git.texlive.info/tlcontrib/log/)

[^1]: 古いバージョンの TeX Live がインストールされていても気にせずに，新規インストールと同じ手順でインストールします。
