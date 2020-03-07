---
title: "TeX Live/pretest"
url: "/TeX Live/pretest/"
date: 2017-06-03T23:40:45Z
pukiwiki: "TeX Live/pretest"
---

# TeX Live/pretest

[TeX Live](</TeX Live/>) &gt; pretest

TeX Live pretest はミラーサイトを利用してください．
TUG から直接ダウンロードするよりもミラーサイトを利用したほうが早くダウンロードできます．

- [Testing TeX Live before release](http://www.tug.org/texlive/pretest.html)
- [ftp://ftp.tug.org/texlive/tlpretest/](ftp://ftp.tug.org/texlive/tlpretest/)
- [ftp://ftp.tug.org/texlive/Images/test/](ftp://ftp.tug.org/texlive/Images/test/)
- [http://ftp.tug.org/texlive/Images/test/](http://ftp.tug.org/texlive/Images/test/)
- [http://www.tug.org/texlive/Images/test/](http://www.tug.org/texlive/Images/test/)

#### ミラーサイト {#b6196164}

- [the status of texlive-pretest mirrors](http://www.tug.org/texlive/mirmon/)

- Network Based Installer, MacTeX, BasicTeX
    - [http://ftp.math.utah.edu/pub/texlive/tlpretest/](http://ftp.math.utah.edu/pub/texlive/tlpretest/)
    - [ftp://ftp.math.utah.edu/pub/texlive/tlpretest/](ftp://ftp.math.utah.edu/pub/texlive/tlpretest/)
    - [https://texlive.texjp.org/pretest/tlnet/](https://texlive.texjp.org/pretest/tlnet/)
- TeX Live ISO Images
    - [http://ftp.math.utah.edu/pub/texlive/Images/test/](http://ftp.math.utah.edu/pub/texlive/Images/test/)
    - [ftp://ftp.math.utah.edu/pub/texlive/Images/test/](ftp://ftp.math.utah.edu/pub/texlive/Images/test/)

### TeX Live pretest のインストール {#j4d40fa3}

#### Windows {#y535f93e}

install-tl.zip をダウンロードして install-tl.zip を展開します．
Windows PowerShell またはコマンド プロンプトから

```
.\install-tl-windows.bat -no-gui -repository http://ftp.math.utah.edu/pub/texlive/tlpretest/
```

または管理者として実行した Windows PowerShell またはコマンド プロンプトから

```
.\install-tl-advanced.bat -no-gui -repository http://ftp.math.utah.edu/pub/texlive/tlpretest/
```

を実行します．

#### macOS {#a9a1fd1b}

mactex-\*.pkg または mactex-basictex-\*.pkg をダウンロードしてインストールします．

#### Linux {#v9c33c6a}

- [TeX Live 2020 pretest 配布開始](http://www.fugenji.org/~thomas/diary/index.php?mode=res_view&no=1328)

install-tl-unx.tar.gz をダウンロードします．

- wget を使用する場合

    ```
    $ wget http://ftp.math.utah.edu/pub/texlive/tlpretest/install-tl-unx.tar.gz
    ```

- curl を使用する場合

    ```
    $ curl -O http://ftp.math.utah.edu/pub/texlive/tlpretest/install-tl-unx.tar.gz
    ```

install-tl-unx.tar.gz を展開します．

```
$ tar xvf install-tl-unx.tar.gz
```

展開したインストーラのディレクトリに移動します．

```
$ cd install-tl*
```

root 権限でインストーラを実行します．
オプションでダウンロードするリポジトリを指定できます．

```
$ sudo ./install-tl -no-gui -repository http://ftp.math.utah.edu/pub/texlive/tlpretest/
```
