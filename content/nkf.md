---
title: "nkf"
url: "/nkf/"
date: 2014-03-15T13:58:09Z
pukiwiki: "nkf"
---

# nkf

## [nkf](https://ja.osdn.net/projects/nkf/) {#ie06d283}

nkf は，文字コードを変換するツールです。

***

***

### ダウンロード {#q89745b2}

- [https://ja.osdn.net/projects/nkf/](https://ja.osdn.net/projects/nkf/)
- [https://jaist.dl.osdn.jp/nkf/](https://jaist.dl.osdn.jp/nkf/)
- [https://iij.dl.osdn.jp/nkf/](https://iij.dl.osdn.jp/nkf/)
- [https://ymu.dl.osdn.jp/nkf/](https://ymu.dl.osdn.jp/nkf/)
- [https://ftp.jaist.ac.jp/pub/sourceforge.jp/nkf/](https://ftp.jaist.ac.jp/pub/sourceforge.jp/nkf/)
- [https://ftp.iij.ad.jp/pub/sourceforge.jp/nkf/](https://ftp.iij.ad.jp/pub/sourceforge.jp/nkf/)
- [https://ftp.iij.ad.jp/pub/osdn.jp/nkf/](https://ftp.iij.ad.jp/pub/osdn.jp/nkf/)

### インストール {#s4661abd}

#### Windows {#md1ac383}

[『［改訂第9版］LaTeX美文書作成入門』サポートページの文字コードを判別・変換するツールnkf、Windows版の入手先（p. 347）](https://github.com/okumuralab/bibun9?tab=readme-ov-file#%E6%96%87%E5%AD%97%E3%82%B3%E3%83%BC%E3%83%89%E3%82%92%E5%88%A4%E5%88%A5%E5%A4%89%E6%8F%9B%E3%81%99%E3%82%8B%E3%83%84%E3%83%BC%E3%83%ABnkfwindows%E7%89%88%E3%81%AE%E5%85%A5%E6%89%8B%E5%85%88p-347)を参考に，以下のサイトから，ビルド済みのバイナリを入手してインストールするのが簡単です。

- [Releases · kkato233/nkf · GitHub](https://github.com/kkato233/nkf/releases)

アーカイブファイルを展開すると win フォルダーに nkf.exe がありますが，
これをパスの通ったディレクトリに配置するとよいでしょう。
（環境変数 Path については [Microsoft Windows/基礎知識](</Microsoft Windows/基礎知識/>) を参照してください。）

#### macOS {#iac446b4}

Homebrew でインストールする場合は

```
$ brew install nkf
```

MacPorts でインストールする場合は

```
$ sudo port install nkf
```

### ビルド {#vec07303}

#### MSYS2 {#if83f36c}

- [MSYS2上で動作するnkfコマンドのパッケージを普通にmakeする](https://qiita.com/u1and0/items/53c9e677472bc1101be6)

#### MinGW {#gdd930d3}

ソースからビルドする方法です。

```
$ curl -kRLO http://jaist.dl.osdn.jp/nkf/70406/nkf-2.1.5.tar.gz
$ tar xvf nkf-2.1.5.tar.gz
$ pushd nkf-2.1.5
$ make
$ make prefix=/mingw install
mkdir /mingw/bin
mkdir: cannot create directory `/mingw/bin': File exists
make: [install] Error 1 (ignored)
mkdir /mingw/man
mkdir: cannot create directory `/mingw/man': File exists
make: [install] Error 1 (ignored)
mkdir /mingw/man/man1
mkdir: cannot create directory `/mingw/man/man1': File exists
make: [install] Error 1 (ignored)
mkdir /mingw/man/ja
mkdir /mingw/man/ja/man1
cp -f nkf /mingw/bin/
cp -f nkf.1 /mingw/man/man1/
cp -f nkf.1j /mingw/man/ja/man1/nkf.1
```

エラーが表示されますがインストールされるので気にしないでください．

```
$ popd
```

### インストールの確認 {#vd5ef2d1}

Windows では nkf の場所は以下のようにして確認できます．

- Windows PowerShell の場合

```
PS > Get-Command nkf | Select-Object Path
エイリアスを使用した場合は
PS > gcm nkf | select path
```

```
Path
----
C:\w32tex\bin64\nkf.exe
C:\w32tex\bin\nkf.exe
```

- コマンド プロンプトの場合

```
>where nkf
C:\w32tex\bin64\nkf.exe
C:\w32tex\bin\nkf.exe
```

- MinGW Shell (MSYS) の場合

```
$ which nkf
/mingw/bin/nkf.exe
```

> または

```
$ type nkf
nkf is /mingw/bin/nkf
```

### 使い方 {#t5e5a246}

[upLaTeX](/upTeX,upLaTeX/), [LuaLaTeX](/LuaTeX/), [XeLaTeX](/XeTeX/) を使う場合は，TeX ソースやパッケージファイルの文字コードを UTF-8 に統一する必要があります[^1]。
このような場合に nkf が有用です。

たとえば，古い TeX 環境などで Shift_JIS で作成した TeX ソース src.tex を UTF-8 に変換して dest.tex として保存したい場合は

```
$ nkf -w src.tex > dest.tex
```

と入力します。
このとき，nkf は変換元の src.tex の文字コードを自動判定して読み込み，-w オプションの指定に従って BOM (Byte Order Mark) 無しの UTF-8 (UTF-8N) へ変換します。
変換結果は標準出力に出るため，これを dest.tex にリダイレクトしています。
BOM 付きの UTF-8 にしたい場合は，オプションを -w の代わりに -w8 とします。

もし，別のファイルに書き出すのではなく上書きして構わない場合は

```
$ nkf -w --overwrite src.tex
```

のように --overwrite オプションを付けます。

学会のスタイルファイルが Shift_JIS で配布されていて，UTF-8 で作成した TeX ソースを提出時に Shift_JIS に変換する必要が生じた場合は

```
$ nkf -s src.tex > dest.tex
```

のようにします。
オプション -s は Shift_JIS への変換を表します。

### 関連リンク {#qf2a585a}

- UTF-8への変換 [forum:545](https://okumuralab.org/tex/mod/forum/discuss.php?d=545)
- [nkfを使ってファイルの文字コードを変換する](http://dev.classmethod.jp/tool/exchange-file-encode-by-nkf/)
- [文字コード変換コマンドの nkfの使い方と実例をまとめました。](http://takuya-1st.hatenablog.jp/entry/20100511/1273585953)
- [macにnkfコマンドがないだと！？じゃあ入れよう！](http://qiita.com/kou_bacchus/items/6448608ee03b0a71dcd4)
- [6.9. 文字コードと改行コードの変換 【nkf】](http://www.turbolinux.co.jp/products/server/10s/manual/command_guide/command_guide/nkf.html)
- [文字コード変換プログラムnkfの使い方](http://www.proton.jp/main/apps/nkf.html)
- [USBメモリ活用講座【実践編・TeXworksとupLaTeX】](http://www.nagaoka-ct.ac.jp/ec/labo/visu/usb/tex/texworks.shtml)
- [Windowsで日本語文字コードの種類の判別や変換を行うには　（nkf のインストール方法）](http://apphy.u-fukui.ac.jp/~tajima/nkf32_install.html)

[^1]: pLaTeX や upLaTeX の場合は ptexenc による文字コード変換が自動で行われるので問題はありませんが，LuaLaTeX の場合は UTF-8 しか受け付けないため他の文字コードでは invalid character のエラーになります（参考：[forum:1651](https://okumuralab.org/tex/mod/forum/discuss.php?d=1651)）。
