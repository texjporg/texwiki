---
title: "MSYS2"
url: "/MSYS2/"
date: 2014-11-19T03:02:17Z
pukiwiki: "MSYS2"
---

# MSYS2

## MSYS2 {#x1532c23}

MSYS2 は [MSYS](http://www.mingw.org/wiki/MSYS) を改良して機能を強化したものです．
[Arch Linux](</Linux/Arch Linux/>) の標準パッケージマネージャーである pacman を使用してパッケージ管理ができます．

- [http://msys2.github.io/](http://msys2.github.io/)
- [https://github.com/msys2](https://github.com/msys2)
- [https://sourceforge.net/projects/msys2/](https://sourceforge.net/projects/msys2/)
- [https://github.com/Alexpux/MSYS2-packages](https://github.com/Alexpux/MSYS2-packages)

### Installing MSYS2 {#sb6496d0}

- [MSYS2 installer](http://msys2.github.io/)
- [https://sourceforge.net/p/msys2/wiki/MSYS2%20installation/](https://sourceforge.net/p/msys2/wiki/MSYS2%20installation/)

### LANG {#w1a07eeb}

- [MSYS2 から Visual C++ （の環境変数を設定するバッチファイル）を叩く](http://d-poppo.nazo.cc/blog/2016/02/msys2-vcvars-bat/)
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

&#x7e;/.bash_profile に以下の記述を追加しておけば文字化けしなくなるようです．

```
cmd /c "chcp 65001 > NUL"
```

## Mingw-w64 {#q2a4db43}

Mingw-w64 は 64-bit Windows または 32-bit Windows のバイナリを出力するためのソフトウェアです．
[MinGW](/MinGW/) と比較すると 64-bit 対応や新しい API サポートなどが追加されています．
MSYS2 でインストールできます．

- [Mingw-w64 - GCC for Windows 64 &amp; 32 bits \[mingw-w64\]](http://mingw-w64.org/)
    <!-- -[[MXE (M cross environment):http://mxe.cc/]] -->
    <!-- -[[MinGW 64 bit | Qt Wiki | Qt Developer Network:http://qt-project.org/wiki/MinGW-64-bit]] -->
    <!-- -[[mingw-w64-dgn:https://sourceforge.net/projects/mingw-w64-dgn/]] -->
    <!-- -[[クロスGCC(on Linux Host for Targeting Mingw-w64 Windows)のビルド:http://sideseeker.hateblo.jp/entry/2013/10/06/072748]] -->
    <!-- -[[MinGW (64bit) + MSYS 環境の構築 (1):http://www.devlog.alt-area.org/?p=2802]], [[(2):http://www.devlog.alt-area.org/?p=2900]] -->
    <!-- -https://sourceforge.net/projects/mingw-w64/files/Toolchains%20targetting%20Win32/Personal%20Builds/mingw-builds/installer/ -->

## TeX Live <a id="texlive"></a> {#s6f9dc00}

### Building TeX Live {#c3b844d4}

- [Building TeX Live](http://www.tug.org/texlive/doc/tlbuild.html)
- [にっき&#9834;: TeX Liveのビルド](http://abenori.blogspot.jp/2015/11/tex-live.html)

C:\msys64\mingw64_shell.bat をダブルクリックして以下のコマンドを実行するとビルドできます．

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
- [http://d-poppo.nazo.cc/blog/?s=MSYS2](http://d-poppo.nazo.cc/blog/?s=MSYS2)
- [http://yaritakunai.hatenablog.com/archive/category/MSYS2](http://yaritakunai.hatenablog.com/archive/category/MSYS2)
- [MSYS2を試してみる](http://verifiedby.me/adiary/055)
- [MSYS2＋VagrantによるWindowsでのUNIX環境](https://tamosblog.wordpress.com/2014/12/25/msys2_vagrant_1/)
- [msys2のpacmanを使ってみた](http://otsukemono.blogspot.jp/2013/11/msys2pacman.html)
