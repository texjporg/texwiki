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

- [Testing TeX Live before release](https://www.tug.org/texlive/pretest.html)
    <!-- -https://www.tug.org/texlive/Images/test/ -->
    <!-- -http://ftp.tug.org/texlive/Images/test/ -->

#### ミラーサイト (Network Based Installer, MacTeX, BasicTeX) {#b6196164}

- TeX Live pretest ミラーサイト一覧
    - [the status of texlive-pretest mirrors](https://www.tug.org/texlive/mirmon/)
- ユタ大学 数学科
    - [https://ftp.math.utah.edu/pub/texlive/tlpretest/](https://ftp.math.utah.edu/pub/texlive/tlpretest/)
- 日本語 TeX 開発コミュニティ
    - [https://texlive.texjp.org/pretest/tlnet/](https://texlive.texjp.org/pretest/tlnet/)

### TeX Live pretest のインストール {#j4d40fa3}

#### Windows {#y535f93e}

install-tl.zip をダウンロードして install-tl.zip を展開します．
ターミナルから

```
.\install-tl-windows.bat -no-gui -repository https://ftp.math.utah.edu/pub/texlive/tlpretest/
```

を実行します．

#### macOS {#a9a1fd1b}

MacTeX をインストールする場合は
mactex-\*.pkg
をダウンロードしてインストールします．

BasicTeX をインストールする場合は
mactex-basictex-\*.pkg
をダウンロードしてインストールします．

TeX Live をインストールする場合は Linux のやり方を参照してください．

#### Linux {#v9c33c6a}

install-tl-unx.tar.gz をダウンロードします．

- wcurl を使用する場合

    ```
    $ wcurl https://ftp.math.utah.edu/pub/texlive/tlpretest/install-tl-unx.tar.gz
    ```

- curl を使用する場合

    ```
    $ curl -O https://ftp.math.utah.edu/pub/texlive/tlpretest/install-tl-unx.tar.gz
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
オプションでダウンロードするリポジトリを指定します．

```
$ sudo ./install-tl -no-gui -repository https://ftp.math.utah.edu/pub/texlive/tlpretest/
```
