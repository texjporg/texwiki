---
title: "Hunspell"
url: "/Hunspell/"
date: 2012-11-04T04:24:50Z
pukiwiki: "Hunspell"
---

# Hunspell

## [Hunspell](http://hunspell.sourceforge.net/) {#g6159d85}

HunspellはTeXに対応したスペルチェッカーです。もともとは、MySpellをベースにしたハンガリー語用のスペルチェッカーでしたが、OpenOffice.orgに採用され、広く普及しています。辞書はUTF-8にエンコードされています。

### 統合環境・エディタ {#t2a70fb7}

以下の統合環境・エディタで使用されています．

#### フリーソフトウェア (オープンソースソフトウェア) {#f0db729e}

- [LyX](/LyX/)
- [TeXstudio](/TeXstudio/)
- [Texmaker](/Texmaker/)
- [TeXworks](/TeXworks/)
- TexitEasy
- [TeXnicCenter](/TeXnicCenter/)
- [Notepad++](/Notepad++/) ([DSpellCheck](https://github.com/Predelnik/DSpellCheck))

### 辞書 {#q4b7f294}

- [https://addons.mozilla.org/ja/thunderbird/language-tools/](https://addons.mozilla.org/ja/thunderbird/language-tools/)
- [http://sourceforge.net/projects/lyxwininstaller/files/hunspell/](http://sourceforge.net/projects/lyxwininstaller/files/hunspell/)

などから入手できます．

### 派生版 {#z489a458}

- [NHunspell](http://sourceforge.net/projects/nhunspell/)
- [Typo.js](https://github.com/cfinke/Typo.js)

## 使い方 {#x189dc32}

### CLIでHunspellを使う {#df042a8e}

TeXやLaTeXファイルのスペルチェックを行うのは、-tオプションをつけます。

```
$ hunspell -t hoge.tex
```

ミススペルの箇所を一覧で出力する場合には、-lオプションをつけます。

```
$ hunspell -l -t hoge.tex
```

### [Emacs](/Emacs/)でHunspellを使う {#d8ba9a05}

$HOME/.emacs.d/init.elに次の行を追加してバイトコンパイルしておきます。

```
(setq ispell-program-name "hunspell")
(setq ispell-really-hunspell t)                            ;hunspellの拡張を使う
```

また、必要に応じて環境変数DICTIONARYやWORDLISTを指定しておきます。
スペルチェックの操作方法はispellと同じです。

## インストール {#y7b755eb}

### Mac OS X {#x81dd2d5}

#### MacPortsを利用したインストール {#i50afc8d}

Hunspell本体と必要な辞書をインストールします。

```
$ sudo port install hunspell hunspell-dict-en_GB hunspell-dict-en_US 
```

### Linux {#f74de4cd}

#### Debian/Ubuntu {#n148086c}

Hunspell本体と辞書をインストールします。

```
$ sudo apt-get install hunspell hunspell-en-us
```

辞書の設定は$HOME/.bashrcなどに書いておきます。

```
export DICTIONARY=en_US
export WORDLIST=$HOME/.hunspell_personal_dictionary
```

複数の辞書を指定するときには、環境変数DICTIONARYにカンマ区切りで指定します。

### Windows {#mcb4fc44}

#### MinGW {#deab3978}

<!-- $ curl -R -L -O http://sourceforge.net/projects/hunspell/files/Hunspell/1.3.3/hunspell-1.3.3.tar.gz -->

```
$ curl -R -L -O http://download.sourceforge.net/hunspell/hunspell-1.3.3.tar.gz
$ tar xvf hunspell-1.3.3.tar.gz
$ pushd hunspell-1.3.3
$ ./configure --prefix=/mingw
$ make
$ make install
$ popd
```
