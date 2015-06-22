---
title: "nkf"
url: "/nkf/"
date: 2014-03-15T13:58:09Z
pukiwiki: "nkf"
---

# nkf

## [nkf](http://osdn.jp/projects/nkf/) {#ie06d283}

nkf は，文字コードを変換するツールです。

[W32TeX](/W32TeX/) には標準で含まれています。
Windows に [TeX Live](</TeX Live/>) を『[［改訂第6版］LaTeX2e 美文書作成入門](http://oku.edu.mie-u.ac.jp/~okumura/bibun6/)』からインストールした場合も付属しています。

***

***

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

- コマンドプロンプトの場合

    ```
    >where nkf
    C:\w32tex\bin64\nkf.exe
    C:\w32tex\bin\nkf.exe
    ```

### インストール {#s4661abd}

#### Windows（MinGW を使用） {#gdd930d3}

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

### 使い方 {#t5e5a246}

- UTF-8への変換 [forum:545](https://okumuralab.org/tex/mod/forum/discuss.php?d=545)
- [文字コード変換コマンドの nkfの使い方と実例をまとめました。](http://takuya-1st.hatenablog.jp/entry/20100511/1273585953)
- [macにnkfコマンドがないだと！？じゃあ入れよう！](http://qiita.com/kou_bacchus/items/6448608ee03b0a71dcd4)
- [文字コード変換プログラムnkfの使い方](http://www.proton.jp/main/apps/nkf.html)
