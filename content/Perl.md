---
title: "Perl"
url: "/Perl/"
date: 2013-05-12T16:51:53Z
pukiwiki: "Perl"
---

# Perl

## [Perl](http://www.perl.org/) {#rf8f3586}

Perl は汎用スクリプト言語です．

<strong>注意</strong>：この Wiki 内項目では，TeX と関連づけた Perl 5 の利用のみ扱います．

一般的な Perl の情報については外部サイトを参照してください．

TeX 関連プログラムには
Perl 5 で書かれたスクリプトがあります（[latexmk.pl](/Latexmk/) や [pdfcrop.pl](/pdfcrop/) など）．
これらのスクリプトを実行するには Perl 5 の処理系が必要です．

***

***

### インストール (Windows) {#l06514b7}

[TeX Live](</TeX Live/>) の Windows 版には 64-bit
[tlperl.windows](http://www.tug.org/svn/texlive/trunk/Master/tlpkg/tlperl/)（Perl 5
の処理系）が含まれています．
[MiKTeX](/MiKTeX/) を使用する場合は Strawberry Perl をインストールしてください．

#### [Strawberry Perl](https://strawberryperl.com) {#bfff8462}

Strawberry Perl を C:\strawberry にインストールした場合は

```
C:\strawberry\c\bin
```

と

```
C:\strawberry\perl\site\bin
```

と

```
C:\strawberry\perl\bin
```

がシステム環境変数 Path に追加されます．

### TeX 関連モジュール {#y91d7e77}

- [TeX-DVI - CPAN](http://search.cpan.org/~janpaz/TeX-DVI-1.01/)
- [TeX-XDV-Parse - CPAN](http://search.cpan.org/~jrm/TeX-XDV-Parse-0.02/)

### 関連リンク {#f1072f2a}

- [https://x.com/zr_tex8r/status/1760325097947279422](https://x.com/zr_tex8r/status/1760325097947279422)
- [Windows の ANSI コードページを知りたい話(1)](https://zrbabbler.hatenablog.com/entry/20180512/1526105583)
- [Windows の ANSI コードページを知りたい話(2)](https://zrbabbler.hatenablog.com/entry/20180513/1526160513)
