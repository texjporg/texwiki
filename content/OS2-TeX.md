---
title: "OS2-TeX"
url: "/OS2-TeX/"
date: 2005-02-23T05:57:25Z
pukiwiki: "OS2-TeX"
---

# OS2-TeX

## 目次 {#s0dcfbbc}

## OS/2で TeX をインストールして使用するには {#s5486e27}

OS/2用には emTeX というものがあり、大黒氏による移植、あるいは私(澤田石 順&lt;[jsawa@attglobal.net](mailto:jsawa@attglobal.net)>が移植したものなどありました。すべて古いので、
Linux で広く使用されている [teTeX](http://www.tug.org/teTeX/) をインストールすることを強く薦めます。\[2005-02-23 (水) 23:57:25\]

```
teTeX の最新版は 3.0 で、既に私が移植したバイナリパッケージは
hobbes (ftp) に upload 済みです。現時点[&now;]での最新は Release 2.
Release 3 ではOS/2の XFree86 で使える ghostscript 8.50 , gv 3.6.1 を
追加する予定です。
```

### teTeX 3.0 for OS/2 の入手とインストール {#h5b79a42}

1. [os2tetex-3.0.zip](ftp://hobbes.nmsu.edu/pub/os2/apps/wp/tex/os2tetex-3.0.zip)をダウンロード
1. Unzip して説明書を読んでください。
1. tetex-texmf-3.0.tar.gz を CTAN/systems/unix/teTeX/3.0/distrib/から入手してインストール
1. 説明書に従って、os2tetex-3.0.zip を導入し、環境変数などを設定
1. <strong>texhash</strong>を実行
1. <strong>fmtutil --missing</strong>を実行
1. <strong>updmap</strong>を実行

```
▼ソースからビルドするためのパッチと方法についての説明も入っているので
  ビルドは極めて容易です。私の計算機は Intel Cerelon 1GHz で
  30分そこそこでできています。
   
```

### teTeX 3.0 for OS/2 の特徴 {#u9d3f99c}

- teTeX 3.0に追加されているもの
    - xdvi でDVIファイルを読む際に、ポストスクリプトフォントが適切に見つかるための fontmapを追加し、xdvi.cfgを修正.
    - ASCII ptex 3.1.8 とライブラリファイル
    - 日本語関係のフォント関連ファイル(\*.tfm, psfonts.map....)
    - mendexk 2.5a
    - 日本語対応dvips: アスキーのdvipsk-jpatch-p1.6a
    - 日本語対応xdvi(with VFLIB)
    - Ghostscript 8.50 でOS/2付属の CID フォントを使用するためのインストラクション:日本語PDFが読めます
    - dvipdfmx-20040912: platex + hyperref で作成したDVIからしおり付きの日本語PDF作成!
- WIN32版よりもしかすると優れているところ
    - <strong>exe.exe</strong>という[ユーティリティー](http://www2.tky.3web.ne.jp/~yoh/os2/exe/index.html)
        により teTeXのシェルスクリプトを容易に実行できる。
    - teTeXのシェルスクリプトがWIN32版よりも多く(texconfig, fmtutil....)使用できる

### teTeX 3.0 を使用するための GNU utilitiesの入手先 {#u8dec822}

- 私のweb page: [http://www2s.biglobe.ne.jp/~vtgf3mpr/](http://www2s.biglobe.ne.jp/~vtgf3mpr/)
- hobbesの web page: [http://hobbes.nmsu.edu/](http://hobbes.nmsu.edu/)
