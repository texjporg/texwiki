---
title: "TeXstudio"
url: "/TeXstudio/"
date: 2015-01-23T06:33:30Z
bookCollapseSection: true
pukiwiki: "TeXstudio"
---

# TeXstudio

## [TeXstudio](http://www.texstudio.org/) {#wc9679cf}

TeXstudio は [Texmaker](/Texmaker/) から派生[^1]した LaTeX 統合環境です．

- エディタ部分は [QCodeEdit](http://qcodeedit.org/) をベースにして改変したものを使用しています．
- PDF ビューアには [TeXworks](/TeXworks/) の PDF ビューアを使用しています．
- メニューは日本語化されており，[SyncTeX](/SyncTeX/) もサポートしています．

***

***

### Webサイト {#w233c0c1}

- [TeXstudio](http://www.texstudio.org/)
- [TeXstudio - A LaTeX Editor | SourceForge.net](https://sourceforge.net/projects/texstudio/)
- [TeXstudio - A LaTeX Editor / Wiki / Home](https://sourceforge.net/p/texstudio/wiki/)
- [https://twitter.com/texstudio](https://twitter.com/texstudio)

### 動作環境 {#e7cc7bd5}

Windows, OS X, Linux

### License {#od98a625}

[GPLv2](http://hg.code.sf.net/p/texstudio/hg/file/tip/utilities/COPYING)（QCodeEdit は [GPLv3](http://git.tuxfamily.org/qcodeedit/qce3.git/tree/GPL.txt)）

### ダウンロード/インストール {#f36a3b67}

次のサイトからダウンロードします．

- [http://www.texstudio.org/#download](http://www.texstudio.org/#download)

#### Windows {#ca4cc4c7}

Windows 用のインストーラをダウンロードして実行します．

Qt 5 版の TeXstudio では，日本語を入力するとカーソルが文字の位置からずれたり日本語が重なって表示されたりする現象が発生することがあります（[不具合情報](#ped67bdd)を参照）．

#### OS X {#d9a96322}

OS X 用の zip アーカイブをダウンロードして展開します．

Homebrew や MacPorts からもインストールできます．

- [https://github.com/caskroom/homebrew-cask/blob/master/Casks/texstudio.rb](https://github.com/caskroom/homebrew-cask/blob/master/Casks/texstudio.rb)

```
$ brew cask install texstudio
```

もしくは

```
$ sudo port install texstudio
```

#### Linux {#v5002500}

各ディストリビューションのパッケージ管理システムからインストールします．
パッケージ名は大抵 texstudio でしょう．
Debian などでは localization のパッケージ texstudio-l10n として分離されているので，これもインストールするとよいでしょう．

### 設定 {#d18b43a8}

[TeXstudio/設定](</TeXstudio/設定/>) を参照．

### 使い方 {#ed1259ec}

[TeXstudio/使い方](</TeXstudio/使い方/>) を参照．

### TeXstudio UI 日本語訳用ファイル {#d46c6bb1}

- [TeXstudio UI 日本語訳用ファイル](https://github.com/anastashia/texstudio_jp_ui)

## 注意点 {#g9d4fa21}

### OS X の TeXstudio で ptex2pdf が動作しない {#zfde7b69}

&#x7e;/.bash_profile に

```
export PATH=$PATH:/Library/TeX/texbin
```

を追加する必要があります．

- [(mac) TexStudioでptex2pdfが動かない](http://tipsboardx.blogspot.jp/2014/06/mac-texstudioptex2pdf.html)

## 不具合 {#k30ccccc}

- [TeXstudio - A LaTeX Editor / Bugs](https://sourceforge.net/p/texstudio/bugs/)

### Qt 5 版の TeXstudio で日本語入力するとカーソルが文字の位置からずれたり日本語が重なって表示されたりすることがある {#ped67bdd}

% これもバグ報告しています？

Qt 5 版の TeXstudio では，日本語を入力するとカーソルが文字の位置からずれたり日本語が重なって表示されたりすることがあります．
「高度なオプションの表示」を ON にして「詳細なエディタ設定」から「ハック/回避策」の「最適なディスプレイオプションの自動選択」を OFF にして，描画モードを QCE（推奨） から Qt に変更してください．

なお，Qt 4 版の TeXstudio では，描画モードが QCE（推奨）の場合でも日本語入力するとカーソルが文字の位置からずれたり日本語が重なって表示されたりする現象は発生しませんでした．

- [&#x5b;雑記&#x5d;Mac OS YosemiteへのTeX環境の導入(含TeXStudio) | fenrir's memorandum](http://karlsnautr.blogspot.jp/2015/05/mac-os-yosemitetextexstudio.html)

### OS X の TeXstudio で，文字コードが UTF-8 の場合に Backslash (U+005C) が入力できず 円記号 (U+00A5) になってしまうため自動補完機能が使えない {#ffe2f4b8}

OS X の Qt アプリケーションで [Backslash](https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%83%E3%82%AF%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5) (U+005C) が [円記号](https://ja.wikipedia.org/wiki/%E5%86%86%E8%A8%98%E5%8F%B7) (U+00A5) に変換されるバグがあるようです．
Karabiner で Backslash が優先されるようにキーバインドを変更するといいようです．

また、IMEソフトのGoogle日本語入力では文字入力時に円記号をBackslashに変更するオプションがあります.
これを有効にするとTeXstudioのテキストフィールドにはBackslashが入力されますが、実際には正しくBackslashの文字コードが送られていないようです．
そのためTeXstudioがTeXコマンドを認識できず、自動補完機能が正常に動作しません．
以上からGoogle日本語入力を使用する際もKarabinerを併用するのが良いでしょう．

- [Backslash is converted to YEN SIGN on Qt for Mac with JIS keyboard.](https://bugreports.qt.io/browse/QTBUG-10543)
- [Macで円記号の代わりにバックスラッシュをデフォルトにする](http://hajimesakurai.hatenablog.com/entry/2015/08/26/222753)
- [TeXStudio on Macでコマンド補完が使えない](http://qiita.com/o_nishy/items/e674b6e219e3d3bd7381)

## 文字コードの変換 {#v4ac40ab}

TeXstudio で使用する文字コードはデフォルトでは UTF-8 です．
このため，Shift_JIS, ISO-2022-JP, EUC-JP の文字コードを使用しているファイルを開きたい場合は，事前にファイルの文字コードを UTF-8 に変換する必要があります．
文字コードの変換には，各種テキストエディタの機能を使う方法と，コマンドラインから変換プログラムを使う方法があります．

- テキストエディタの機能を使う場合は，[メモ帳で UTF-8 に変換する](https://okumuralab.org/tex/mod/forum/discuss.php?d=496%23p2654)方法や[サクラエディタ](</サクラエディタ/>)などのテキストエディタを使う方法があります．
- コマンドラインからの場合，文字コード変換プログラムである [nkf](/nkf/) が利用できます．

## 組み込みの PDF ビューアに日本語を表示させる {#o84f3d5c}

### OS X の場合 {#ued437e7}

- [TeXstudioの組み込みPDFビューアで日本語を表示させる(Mac)](http://hayate.me/archives/31)

OS X の TeXstudio で組み込みの PDF ビューアで日本語が表示されない場合は poppler-data を /usr/local/share/poppler に配置します．
poppler-data は [Poppler の公式サイト](https://poppler.freedesktop.org/)から入手できます．
[TeXworks](/TeXworks/) をインストールしている場合は TeXworks に含まれている poppler-data を /usr/local/share/poppler にコピーして使用することもできます．

poppler-data を配置する場所は strings と grep で調べることができます．

```
$ strings -a /Applications/texstudio.app/Contents/Frameworks/libpoppler.??.dylib | grep poppler
/usr/local/share/poppler
Unknown CID font collection, please report to poppler bugzilla.
%Produced by poppler pdftops version: {0:s} (http://poppler.freedesktop.org)
```

この場合は /usr/local/share/poppler が poppler-data を配置するディレクトリになります．
コマンドラインから poppler-data を /usr/local/share/poppler に配置する場合は以下のように実行します．

```
$ brew install poppler
```

または

```
$ cd ~
$ curl -kO https://poppler.freedesktop.org/poppler-data-0.4.7.tar.gz
$ tar xvf poppler-data-0.4.7.tar.gz
$ sudo mkdir -p /usr/local/share/poppler
$ sudo cp -pR ~/poppler-data-0.4.7/* /usr/local/share/poppler
```

***

```
/
└─usr/
    └─local/
        └─share/
            └─poppler/
                ├─cidToUnicode/
                ├─cMap/
                ├─nameToUnicode/
                ├─unicodeMap/
                ├─CMakeLists.txt
                ├─COPYING
                ├─COPYING.adobe
                ├─COPYING.gpl2
                ├─Makefile
                └─README
```

***

## 組み込みの PDF ビューアにゴシック体を表示させる {#j1641579}

Windows 版 TeXstudio の PDF ビューアでゴシック体を表示する場合はフォントを埋め込む必要があります．

### TeX Live の場合 {#xf7e038f}

デフォルトでは和文フォントを埋め込みません．
IPAexフォントを埋め込む場合はコマンド プロンプトから

```
kanji-config-updmap-sys ipaex
```

または

```
kanji-config-updmap ipaex
```

を実行します．

### W32TeX の場合 {#y0816396}

デフォルトでは IPAexMincho・IPAexGothic を埋め込みます．

## 組み込みの PDF ビューアで日本語を表示するために使用される代替フォント {#u9344b03}

### Windows の TeXstudio の場合 {#kc4e2fb3}

Windows の TeXstudio の組み込みの PDF ビューアは日本語のフォントを埋め込んでいない PDF ファイルの場合は MS-Mincho で表示されます．

### Linux の TeXstudio の場合 {#s6cbe6f1}

[代替フォントの設定](/Evince/#substitute)を参照して代替フォントの設定をします．

## 関連リンク {#b0ba1b9b}

- [August 2013: Project of the Month: TeXstudio  |  SourceForge Community Blog](https://sourceforge.net/blog/august-2013-project-of-the-month-texstudio/)
- [TeXの問題点を解決する開発環境を目指す！開発者に聞く：高機能なTeX・LaTeXコードエディタTeXstudio編](https://osdn.jp/magazine/12/07/16/0613248)
- [すぐできるTeX Live + TeXstudioによる論文執筆環境](http://www.hsakurai.com/entry/2015/07/28/150459)

[^1]: [Wikipedia.ja:フォーク\_(ソフトウェア開発)](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AF_%28%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E9%96%8B%E7%99%BA%29)
