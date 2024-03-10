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
- [http://ftp.tug.org/texlive/Images/test/](http://ftp.tug.org/texlive/Images/test/)
- [http://www.tug.org/texlive/Images/test/](http://www.tug.org/texlive/Images/test/)

#### ミラーサイト {#b6196164}

- [the status of texlive-pretest mirrors](http://www.tug.org/texlive/mirmon/)

- Network Based Installer, MacTeX, BasicTeX
    - [https://mirrors.tuna.tsinghua.edu.cn/tlpretest/](https://mirrors.tuna.tsinghua.edu.cn/tlpretest/)
    - [http://ftp.math.utah.edu/pub/texlive/tlpretest/](http://ftp.math.utah.edu/pub/texlive/tlpretest/)
    - [http://texlive.texjp.org/pretest/tlnet/](http://texlive.texjp.org/pretest/tlnet/)

### TeX Live pretest のインストール {#j4d40fa3}

#### Windows {#y535f93e}

install-tl.zip をダウンロードして install-tl.zip を展開します．
ターミナルから

```
.\install-tl-windows.bat -no-gui -repository http://ftp.math.utah.edu/pub/texlive/tlpretest/
```

または管理者として実行したターミナルから

```
.\install-tl-windows.bat -no-gui -repository http://ftp.math.utah.edu/pub/texlive/tlpretest/
```

を実行します．

#### macOS {#a9a1fd1b}

mactex-\*.pkg または mactex-basictex-\*.pkg をダウンロードしてインストールします．

#### Linux {#v9c33c6a}

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
$ cd install-tl-2*
```

root 権限でインストーラを実行します．
オプションでダウンロードするリポジトリを指定できます．

```
$ sudo ./install-tl -no-gui -repository http://ftp.math.utah.edu/pub/texlive/tlpretest/
```
