---
title: "nkf"
url: "/nkf/"
date: 2014-03-15T13:58:09Z
pukiwiki: "nkf"
---

# nkf

## [nkf](http://osdn.jp/projects/nkf/) {#ie06d283}

nkf は，文字コードを変換するツールです。

***

***

### インストール {#s4661abd}

#### Windows {#md1ac383}

[W32TeX](/W32TeX/) には標準で含まれています。
Windows に [TeX Live](</TeX Live/>) を『[［改訂第6版］LaTeX2e 美文書作成入門](http://oku.edu.mie-u.ac.jp/~okumura/bibun6/)』からインストールした場合も付属しています。

それ以外の場合は，Vector のサイトから，ビルド済みのバイナリを入手してインストールするのが簡単です。

- [nkf.exe nkf32.dll Windows用](http://www.vector.co.jp/soft/win95/util/se295331.html)

アーカイブファイルを解凍すると複数の exe ファイルがありますが，このうち
nkfwin/vc2005/win32(98,Me,NT,2000,XP,Vista,7)Windows-31J/
フォルダ配下の nkf32.exe はデフォルトで Windows-31J（Shift_JIS の拡張）に変換してくれるので，よく使われています。
これを nkf.exe とリネームしてパスの通ったディレクトリに配置するとよいでしょう。
（環境変数 PATH については [Microsoft Windows/基礎知識](</Microsoft Windows/基礎知識/>) を参照してください。）

#### OS X {#iac446b4}

MacPorts でインストールすることができます。

```
$ sudo port install nkf
```

Homebrew でインストールすることもできます。

```
$ brew install nkf
```

### ビルド {#vec07303}

#### Windows（MinGW を使用） {#gdd930d3}

ソースからビルドする方法です。

```
$ curl -R -L -O http://prdownloads.osdn.jp/nkf/59912/nkf-2.1.3.tar.gz
$ tar xvf nkf-2.1.3.tar.gz
$ pushd nkf-2.1.3
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

### 使い方 {#t5e5a246}

[upLaTeX](/upTeX,upLaTeX/) や [LuaLaTeX](/LuaTeX/) を使う場合は，TeX ソースやパッケージファイルの文字コードを UTF-8 に統一する必要があります[^1]。
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
