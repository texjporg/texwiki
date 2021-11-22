---
title: "TeXstudio"
url: "/TeXstudio/"
date: 2015-01-23T06:33:30Z
bookCollapseSection: true
pukiwiki: "TeXstudio"
---

# TeXstudio

## [TeXstudio](https://www.texstudio.org/) {#wc9679cf}

TeXstudio は [Texmaker](/Texmaker/) から派生[^1]して機能追加・不具合修正した LaTeX 統合環境です．

- エディタ部分は [QCodeEdit](https://github.com/texstudio-org/texstudio/tree/master/src/qcodeedit) をベースにして改変したものを使用しています．
- PDF ビューアは [TeXworks](/TeXworks/) の PDF ビューアをベースにして改変したものを使用しています．
- メニューは日本語化されており，[SyncTeX](/SyncTeX/) もサポートしています．

***

***

### Webサイト {#w233c0c1}

- [TeXstudio](https://www.texstudio.org/)
- [GitHub - texstudio-org/texstudio: TeXstudio is a fully featured LaTeX editor. Our goal is to make writing LaTeX documents as easy and comfortable as possible.](https://github.com/texstudio-org/texstudio)
- [Home · texstudio-org/texstudio Wiki · GitHub](https://github.com/texstudio-org/texstudio/wiki)
- [https://twitter.com/texstudio](https://twitter.com/texstudio)

### 動作環境 {#e7cc7bd5}

Windows, Linux, macOS

### License {#od98a625}

[GPLv3](https://github.com/texstudio-org/texstudio/blob/master/COPYING)

### ダウンロード/インストール {#f36a3b67}

TeXstudio 公式サイトの Download ページ

> [https://www.texstudio.org/#download](https://www.texstudio.org/#download)

または GitHub

> [https://github.com/texstudio-org/texstudio/releases](https://github.com/texstudio-org/texstudio/releases)

からダウンロードできます．

#### Windows {#ca4cc4c7}

Windows 用のインストーラーをダウンロードして実行します．
インストーラーを実行して「WindowsによってPCが保護されました」と表示される場合は
インストーラーを右クリックして全般タブのセキュリティ:の項目の許可するをチェックして☑許可する(K)の状態にして再度インストーラーを実行します．

#### Linux {#v5002500}

各ディストリビューションのパッケージ管理システムからインストールします．
パッケージ名は大抵 texstudio でしょう．
Debian などでは localization のパッケージ texstudio-l10n として分離されているので，これもインストールするとよいでしょう．

#### macOS {#d9a96322}

macOS 用の dmg ファイルをダウンロードしてダブルクリックします．

Homebrew でインストールすることもできます．

> [https://github.com/Homebrew/homebrew-cask/blob/master/Casks/texstudio.rb](https://github.com/Homebrew/homebrew-cask/blob/master/Casks/texstudio.rb)

```
brew install --cask texstudio
```

### 設定 {#d18b43a8}

[TeXstudio/設定](</TeXstudio/設定/>) を参照．

### 使い方 {#ed1259ec}

[TeXstudio/使い方](</TeXstudio/使い方/>) を参照．

### 更新履歴 {#w7aac056}

- [https://github.com/texstudio-org/texstudio/commits/master](https://github.com/texstudio-org/texstudio/commits/master)
- [https://github.com/texstudio-org/texstudio/blob/master/utilities/manual/CHANGELOG.txt](https://github.com/texstudio-org/texstudio/blob/master/utilities/manual/CHANGELOG.txt)

## 注意点 {#g9d4fa21}

### macOS の TeXstudio で ptex2pdf が動作しない {#zfde7b69}

&#x7e;/.bash_profile に

```
export PATH=$PATH:/Library/TeX/texbin
```

を追加する必要があります．

- [(mac) TexStudioでptex2pdfが動かない](http://tipsboardx.blogspot.jp/2014/06/mac-texstudioptex2pdf.html)

## 不具合 {#k30ccccc}

- [Issues · texstudio-org/texstudio · GitHub](https://github.com/texstudio-org/texstudio/issues)

## 文字コードの変換 {#v4ac40ab}

TeXstudio で使用する文字コードはデフォルトでは UTF-8 です．
このため，Shift_JIS, ISO-2022-JP, EUC-JP の文字コードを使用しているファイルを開きたい場合は，事前にファイルの文字コードを UTF-8 に変換する必要があります．
文字コードの変換には，各種テキストエディタの機能を使う方法と，コマンドラインから変換プログラムを使う方法があります．

- テキストエディタの機能を使う場合は，[メモ帳で UTF-8 に変換する](https://okumuralab.org/tex/mod/forum/discuss.php?d=496%23p2654)方法や[サクラエディタ](</サクラエディタ/>)などのテキストエディタを使う方法があります．
- コマンドラインからの場合，文字コード変換プログラムである [nkf](/nkf/) が利用できます．

## 組み込みの PDF ビューアに日本語を表示させる {#o84f3d5c}

### macOS の場合 {#ued437e7}

- [TexStudio日本語設定（Macでもok）](https://okb-mathphys.wixsite.com/oboegaki/texstudio-mac-ok)
- [MACのTexStudioで日本語を入力＆出力できるようにする](http://robomixcom.hatenablog.com/entry/2020/05/21/014858)

#### 方法1 {#d8cab603}

macOS の TeXstudio で組み込みの PDF ビューアで日本語が表示されない場合は
TeXstudio が使用している libpoppler から文字列 poppler を検索して出力結果に表示されるディレクトリに poppler-data を配置します．
poppler-data は [Poppler の公式サイト](https://poppler.freedesktop.org/)から入手できます．

poppler-data を配置する場所は strings と grep で調べることができます．

```
$ strings -a /Applications/texstudio.app/Contents/Frameworks/libpoppler.*.dylib | grep poppler
```

TeXstudio 4.1.1 の場合は出力結果は以下のようになります．

> &amp;<span style="color:black,yellow">/usr/local/Cellar/poppler/21.11.0/share/poppler</span>;<br>
> %Produced by poppler pdftops version: {0:s} (&#x68;ttp://poppler.freedesktop.org)<br>

出力結果から /usr/local/Cellar/poppler/21.11.0/share/poppler が poppler-data を配置するディレクトリになります．

poppler-data をインストールします．

```
$ cd ~
$ curl -kO https://poppler.freedesktop.org/poppler-data-0.4.11.tar.gz
$ tar xvf poppler-data-0.4.11.tar.gz
$ sudo mkdir -p /usr/local/Cellar/poppler/21.11.0/share/poppler
$ sudo cp -pR ~/poppler-data-0.4.11/* /usr/local/Cellar/poppler/21.11.0/share/poppler
```

<!-- poppler-data は以下のように配置されます． -->
<!--  -->
<!-- / -->
<!-- └─usr/ -->
<!--     └─local/ -->
<!--         └─Cellar/ -->
<!--             └─poppler/ -->
<!--                 └─21.11.0/ -->
<!--                     └─share/ -->
<!--                         └─poppler/ -->
<!--                             ├─cidToUnicode/ -->
<!--                             ├─cMap/ -->
<!--                             ├─nameToUnicode/ -->
<!--                             ├─unicodeMap/ -->
<!--                             ├─CMakeLists.txt -->
<!--                             ├─COPYING -->
<!--                             ├─COPYING.adobe -->
<!--                             ├─COPYING.gpl2 -->
<!--                             ├─Makefile -->
<!--                             └─README -->

TeXstudio を起動している場合は TeXstudio を再起動します．

組み込みの PDF ビューアで日本語が表示できることを確認します．

#### 方法2 {#fca07def}

上記の方法でディレクトリ /usr/local/Cellar/poppler/21.11.0/share/poppler を作成した場合、brew upgrade を実行した際にエラーが発生してパッケージの更新ができなくなることがあります。それを避けるために、/Applications/texstudio.app/Contents/Frameworks/libpoppler.\*.dylib をバイナリエディタで改変するという方法があります。具体的には、libpoppler.\*.dylib において以下のように文字列を変更します。

(変更前) /usr/local/Cellar/poppler/21.11.0/share/poppler

(変更後) /usr/local/share/poppler______________________\_

アンダースコア\[\_\]部分には Null 文字\[00\] を入力して、変更前後の文字列長を維持してください。

※バイナリファイルの変更になりますので、バックアップをとっておく等、細心の注意を払って各個人の責任のもとで実行してください。

## 組み込みの PDF ビューアにゴシック体を表示させる {#j1641579}

Windows 版 TeXstudio の PDF ビューアでゴシック体を表示する場合はフォントを埋め込む必要があります．

### TeX Live の場合 {#xf7e038f}

デフォルトでは原ノ味フォントを埋め込みます．

## 組み込みの PDF ビューアで日本語を表示するために使用される代替フォント {#u9344b03}

### Windows の TeXstudio の場合 {#kc4e2fb3}

Windows の TeXstudio の組み込みの PDF ビューアは日本語のフォントを埋め込んでいない PDF ファイルの場合は MS-Mincho で表示されます．

### Linux の TeXstudio の場合 {#s6cbe6f1}

[代替フォントの設定](/Evince/#fallback)を参照して代替フォントの設定をします．

## 関連リンク {#b0ba1b9b}

- [MyTeXpert:TeXstudio](https://web.archive.org/web/20211022201430/https://mytexpert.osdn.jp/?TeXstudio)
- [August 2013: Project of the Month: TeXstudio  |  SourceForge Community Blog](https://sourceforge.net/blog/august-2013-project-of-the-month-texstudio/)
- [TeXの問題点を解決する開発環境を目指す！開発者に聞く：高機能なTeX・LaTeXコードエディタTeXstudio編](https://mag.osdn.jp/12/07/16/0613248)

[^1]: [Wikipedia.ja:フォーク\_(ソフトウェア開発)](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AF_%28%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E9%96%8B%E7%99%BA%29)
