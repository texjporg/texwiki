---
title: "GSview"
url: "/GSview/"
date: 2015-07-07T03:47:20Z
pukiwiki: "GSview"
---

# GSview

## [GSview](http://www.ghostgum.com.au/software/gsview.htm) (Ghostgum GSview) {#o3c38991}

GSview は，[Ghostscript](/Ghostscript/) のフロントエンドです。
紛らわしいですが，Artifex Software による [GSView](/GSview/) とは別物です。
なお、Artifex GSView 6.0 の開発・サポートは終了しました。

<!-- [[Ghostscript/Windows]] から移転してきました。 -->

***

***

### お知らせ {#x301c4e2}

- 阿部紀行さんによる「TeX インストーラ 3」を使用して W32TeX をインストールした場合は，GSview がインストールされません。GSview のファイル名が表示されないトラブルが発生するようです．([参考](https://twitter.com/nikola_yamamoto/status/1044300935210590211))
    - [Windows への TeX インストール（簡単 W32TeX・前編）](http://acetaminophen.hatenablog.com/entry/2015/05/16/142557)には途中経過のスクリーンショットがあります。

- GSview は CTAN から提供されなくなりました。
    - 参考：[GSview is no longer avail­able from CTAN: it should be re­trieved from its home page.](https://ctan.org/pkg/gsview)

- The Fossies Software Archive からも GSview が入手できるようです。
    - [https://fossies.org/linux/misc/old/ghost/ghostgum/](https://fossies.org/linux/misc/old/ghost/ghostgum/)
        <!-- - --https://fossies.org/linux/misc/old/ghost/ghostgum/gsv50w64.exe -->
        <!-- - --https://fossies.org/linux/misc/old/ghost/ghostgum/gsv50w32.exe -->

### インストール {#je84b8ea}

GSview は，Ghostscript を正常にインストールした後にインストールしてください（Ghostscript のレジストリ情報が使用されるためです）。
Windows への Ghostscript のインストール方法は [Ghostscript/Windows](/Ghostscript/Windows/) で解説しています。

GSview 5.0 インストーラを [Obtaining GSview 5.0](http://www.ghostgum.com.au/software/gsview.htm) からダウンロードし，実行します。

- GSview 5.0 には 64-bit 版/32-bit 版の区別がありますが，これは<strong>使用する Ghostscript の 64-bit 版/32-bit 版に合わせなけなければなりません</strong>。64-bit 版 Ghostscript をインストールした場合は 64-bit 版 GSview を，32-bit 版 Ghostscript をインストールした場合は 32-bit 版 GSview を選択してください。

<!-- -GSview のインストーラ -->
<!-- - -[[GSview 5.0:http://www.ghostgum.com.au/software/gsview.htm]] Ghostscript を GUI 操作できるソフトウェア -->
<!-- - --[[GSview 5.0 (64-bit版):http://www.ghostgum.com.au/download/gsv50w64.exe]]（64-bit版の Ghostscript が必要） -->
<!-- - --[[GSview 5.0 (32-bit版):http://www.ghostgum.com.au/download/gsv50w32.exe]]（32-bit版の Ghostscript が必要） -->

インストーラを起動したら，あとは指示に従うだけでインストールが完了します。

### 注意点 {#y9339e21}

#### \[PS to EPS\] の機能 {#zf437909}

GSview の \[File\]->\[PS to EPS\] の機能は十分に注意を払って使用してください。
ps file を与えた場合に出来上がるのは不正な eps file です。
出来上がった eps file を思い通りに扱えない dviware も存在するので，これは簡易的な機能であると理解してください。
このことに関しては，\[File\]->\[PS to EPS\] のダイヤログに現れる \[Help\] のボタンを押すと解説を見ることができます。
なお，ps ではなく eps file を与えた場合には，この機能は BoundingBox を gui で付け替える有用な tool となります。

#### 用紙サイズ設定 {#pce45cf1}

GSview のデフォルトの用紙サイズ設定には，日本で用いられる JIS 規格・B 系列のサイズは含まれていません。
つまり，日本語文書を用いる場合に ps file を得る段階までにおいて，通常の感覚で B4 とか B5 の用紙サイズを指定していた場合に，GSview で表示させても思い通りのサイズでは表示されない場合があります。
これに対する設定を行う場合には，GSview のフォルダーにある printer.ini の中の \[UserMedia\] の部分に以下のデータを付け加え，GSview の \[Options\]->\[Advanced Configure...\] のダイヤログで「Copy Printer Defaults」のみにチェックマークを入れて \[OK\] を押してバイナリを書き換えます。

```
jisB0=2920,4127
jisB1=2064,2920
jisB2=1460,2064
jisB3=1032,1460
jisB4=729,1032
jisB5=516,729
jisB6=363,516
jisB7=258,363
jisB8=181,258
```

無論こんなにたくさん用意する必要はなく，自分に必要なものを設定すればそれで十分です。

### 関連リンク {#yb0d4b4b}

- [Windows 用 gs-9.25 と gsview-5.0 について](https://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=2500)
- [gs-9.19 for windows](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1867)
- [gs-9.18 for windows](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1678)
- [USBメモリ活用講座【実践編・Ghostscript&amp;GSviewポータブル化】](http://www.nagaoka-ct.ac.jp/ec/labo/visu/usb/tex/gsview.shtml)
