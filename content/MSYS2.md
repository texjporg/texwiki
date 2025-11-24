---
title: "MSYS2"
url: "/MSYS2/"
date: 2014-11-19T03:02:17Z
pukiwiki: "MSYS2"
---

# MSYS2

## MSYS2 {#x1532c23}

MSYS2 は [MSYS](https://ja.wikipedia.org/wiki/MSYS) を改良して機能を強化したものです．
[Arch Linux](</Linux/Arch Linux/>) の標準パッケージマネージャーである pacman を使用してパッケージ管理ができます．

- [https://www.msys2.org/](https://www.msys2.org/)
- [https://github.com/msys2](https://github.com/msys2)
- [https://repo.msys2.org/mingw/](https://repo.msys2.org/mingw/)

### Installing MSYS2 {#sb6496d0}

- [https://www.msys2.org/](https://www.msys2.org/)

### Environments {#w4856bbb}

- [https://www.msys2.org/docs/environments/](https://www.msys2.org/docs/environments/)
- [MSYS2 にある複数環境、C++ アプリ開発](https://qiita.com/hira_kuni_45/items/fc297bc3b34a631f8d69)

### LANG {#w1a07eeb}

- [MSYS2 から Visual C++ （の環境変数を設定するバッチファイル）を叩く](https://blog.miz-ar.info/2016/02/msys2-vcvars-bat/)
- [CygwinとMSYS2でのWindowsコマンドの文字化け対策](http://myfuturesightforpast.blogspot.jp/2015/10/cygwinmsys2windows.html)

日本語版 Windows では MSYS2 の環境変数 LANG は ja_JP.UTF-8 です．

```
$ echo $LANG
ja_JP.UTF-8
```

Windows PowerShell のヘルプなどを表示する場合に MSYS2 で日本語が正しく表示されない場合は
iconv で 入力文字コードに CP932，出力文字コードに UTF-8 を指定して変換すれば日本語が正しく表示できます．

```
$ powershell -? | iconv -f CP932 -t UTF-8
```

&#x7e;/.bash_profile に以下の記述を追加すると文字化けしなくなりました．

```
cmd /c "chcp 65001 > NUL"
```

## mingw-w64 {#q2a4db43}

mingw-w64 は 64-bit Windows (x64, aarch64) のバイナリを出力するためのソフトウェアです．
MSYS2 でインストールできます．

- [mingw-w64](https://www.mingw-w64.org/)
    <!-- -[[MXE (M cross environment):http://mxe.cc/]] -->
    <!-- -[[MinGW 64 bit | Qt Wiki | Qt Developer Network:http://qt-project.org/wiki/MinGW-64-bit]] -->
    <!-- -[[mingw-w64-dgn:https://sourceforge.net/projects/mingw-w64-dgn/]] -->
    <!-- -[[クロスGCC(on Linux Host for Targeting Mingw-w64 Windows)のビルド:http://sideseeker.hateblo.jp/entry/2013/10/06/072748]] -->
    <!-- -[[MinGW (64bit) + MSYS 環境の構築 (1):http://www.devlog.alt-area.org/?p=2802]], [[(2):http://www.devlog.alt-area.org/?p=2900]] -->
    <!-- -https://sourceforge.net/projects/mingw-w64/files/Toolchains%20targetting%20Win32/Personal%20Builds/mingw-builds/installer/ -->

## TeX Live <a id="texlive"></a> {#s6f9dc00}

MSYS2 で TeX Live をインストールしたりビルドしたりできます。

### TeX Live/Built by MSYS2 project {#p4932a37}

- [https://packages.msys2.org/groups/mingw-w64-ucrt-x86_64-texlive-scheme-full](https://packages.msys2.org/groups/mingw-w64-ucrt-x86_64-texlive-scheme-full)

```
pacman -S mingw-w64-ucrt-x86_64-texlive-scheme-full
```

- [https://packages.msys2.org/groups/mingw-w64-clang-x86_64-texlive-scheme-full](https://packages.msys2.org/groups/mingw-w64-clang-x86_64-texlive-scheme-full)

```
pacman -S mingw-w64-clang-x86_64-texlive-scheme-full
```

### Building TeX Live {#c3b844d4}

- [Building TeX Live](http://www.tug.org/texlive/doc/tlbuild.html)
- [にっき&#9834;: TeX Liveのビルド](http://abenori.blogspot.jp/2015/11/tex-live.html)

C:\msys64\mingw64.exe をダブルクリックして以下のコマンドを実行するとビルドできます．

```
$ pacman -S mingw-w64-x86_64-gcc mingw-w64-x86_64-gcc-libs mingw-w64-x86_64-fontconfig make rsync
$ mkdir texlive-win64 && cd texlive-win64
$ rsync -a --delete --exclude=.svn --exclude=Work tug.org::tldevsrc/Build/source/ .
$ mkdir Work && cd Work
$ ../Build --no-clean
```

途中でエラーが発生する場合はエラーメッセージを読んで適切に修正します．
上記の方法でビルドした場合は  ~/texlive-win64/inst/bin/x86_64-pc-mingw64/ 配下に実行ファイルが作成されました．

## MSYS2 関連リンク {#i2a5ff0e}

- [http://qiita.com/tags/msys](http://qiita.com/tags/msys)
- [https://sourceforge.jp/projects/msys2-crossgcc/](https://sourceforge.jp/projects/msys2-crossgcc/)
    - [https://sourceforge.jp/projects/msys2-crossgcc/howto/install](https://sourceforge.jp/projects/msys2-crossgcc/howto/install)
- [https://blog.miz-ar.info/?s=MSYS2](https://blog.miz-ar.info/?s=MSYS2)
- [http://yaritakunai.hatenablog.com/archive/category/MSYS2](http://yaritakunai.hatenablog.com/archive/category/MSYS2)
- [MSYS2を試してみる](http://verifiedby.me/adiary/055)
- [MSYS2＋VagrantによるWindowsでのUNIX環境](https://tamosblog.wordpress.com/2014/12/25/msys2_vagrant_1/)
- [msys2のpacmanを使ってみた](http://otsukemono.blogspot.jp/2013/11/msys2pacman.html)
- [gnupack_msys2](https://github.com/oziidi/gnupack_msys2)
