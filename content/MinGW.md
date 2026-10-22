---
title: "MinGW"
url: "/MinGW/"
date: 2012-12-05T16:33:35Z
pukiwiki: "MinGW"
---

# MinGW

## [MinGW](https://www.mingw-w64.org/) {#c9002cc1}

MinGW は "Minimalist GNU for Windows" の略語で，Microsoft Windows アプリケーションを開発するための最小限の開発環境を提供します．

<strong>mingw-w64公式サイト</strong>

- [mingw-w64](https://www.mingw-w64.org/)

TeX 関連プログラムには C, C++ で書かれたプログラムがあります．
mingw-w64 を使用すれば [TeX Live](</TeX Live/>) の 64-bit(x64), AArch64(ARM64) Windows バイナリをビルドして使用することができます．
[MSYS2](/MSYS2/) を使用すれば簡単に環境を構築できます．

***

***

### インストール {#x50e277a}

- [WindowsにMinGW-w64をインストールする 2025年版](https://qiita.com/yomei_o/items/2e706a5fa3ac5ffc3a50)
- [MinGWインストール手順](https://web.yokkaichi-u.ac.jp/yucc/archives/3298)

### 注意点 {#e1429662}

Windows 版の TeX Live をインストールする際に MinGW の xz が悪さをする場合があるようです．

- [ついでにWindows側にTexLive入れておくかと思ったら、うまくインストー<br>ルできない・・・<br>色々探してMinGWのxzが悪さをしていることを突き止めた。<br>インストールのときだけMinGW/をMinGWhoge/に書き換えたらすんなり<br>インストール始まりやがった・・・ｗ](https://x.com/Awed_Urshy/status/1898002831334162872)
- [Error installing latest version of TeX Live on Windows 10](https://tex.stackexchange.com/questions/445086/error-installing-latest-version-of-tex-live-on-windows-10)
- [No Such Blog or Diary - 今日の疑問](https://emoken.net/blog2/category_6/archive/2020-01-10/)

<!-- *MSYS [#o619b52f] -->
<!--  -->
<!-- -https://web.archive.org/web/20201127230203/http://www.mingw.org/wiki/MSYS -->
<!--  -->
<!-- ***/etc/fstab の作成 [#n8a19258] -->
<!--  -->
<!-- /mingw が存在しない場合は /etc/fstab を作成して c:/mingw		/mingw を追加します． -->
<!--  -->
<!-- - --  -->
<!-- -C:\MinGW\msys\1.0\etc\fstab -->
<!-- - --  -->
<!-- #fstab.sample -->
<!-- #This is a sample file for /etc/fstab. -->
<!-- #Currently /etc/fstab is only read during dll initialization. -->
<!-- #I will eventually watch the directory for changes and reread the file. -->
<!-- #The line format is simple in that you give the Win32 path, followed by one or -->
<!-- #more space or tab delimiter, followed by the mount point.  Mount points in  -->
<!-- #typical UNIX environments must be a physical name on a drive before it can  -->
<!-- #actually be used as a mount point.  In this implementation the "must exist"  -->
<!-- #requirement isn't enforced, however, it will be an aide to such programs as  -->
<!-- #find and readline's tab completion if it does exist. -->
<!--  -->
<!-- #You can use a # as the first character on the line as a comment indicator. -->
<!-- #Blank lines are ignored. -->
<!--  -->
<!-- #Win32_Path		Mount_Point -->
<!-- c:/mingw		/mingw -->
<!-- - --  -->
<!--  -->
<!-- ~/.bash_profile に以下の内容を記述します。 -->
<!-- if [ -f ~/.bashrc ]; then . ~/.bashrc; fi -->
<!--  -->
<!-- ~/.bashrc に以下の内容を記述します。 -->
<!-- alias ls='ls - -color=auto - -show-control-chars' -->
<!-- alias cp='cp -i' -->
<!-- alias rm='rm -i' -->
<!--  -->
<!-- /etc/profile の cd "$HOME" の後に source ~/.bashrc を追加します。 -->
<!-- cd "$HOME" -->
<!-- source ~/.bashrc -->

<!-- $ source ~/.bashrc -->

<!-- *TeX Live &aname(texlive); [#h63c1837] -->
<!--  -->
<!-- **Building TeX Live [#p61b773f] -->
<!--  -->
<!-- -[[Building TeX Live:http://www.tug.org/texlive/doc/tlbuild.html]] -->
<!-- -[[TeX LiveとTeXworksのビルド:http://abenori.blogspot.com/2015/05/tex-livetexworks.html]] -->
<!--  -->
<!-- MinGW をフルインストールします． -->
<!--  -->
<!-- MinGW Shell を起動して [[Fontconfig]] をインストールして以下のコマンドを実行します． -->
<!--  -->
<!-- $ mkdir texlive-win32 && cd texlive-win32 -->
<!-- $ rsync -a - -delete - -exclude=.svn - -exclude=Work tug.org::tldevsrc/Build/source/ . -->
<!-- $ mkdir Work && cd Work -->
<!-- $ ../Build - -no-clean - -without-ln-s -->
<!--  -->
<!-- &#x7e;/texlive-win32/inst/bin/i686-pc-mingw32/ 配下に実行ファイルが作成されます． -->
<!--  -->
<!-- 64-bit バイナリをビルドしたい場合は [[MSYS2]] を使うとビルドできます． -->

## MinGW 関連リンク {#e987affa}

- [News - nuwen.net](http://nuwen.net/)
    - [MinGW Distro - nuwen.net](http://nuwen.net/mingw.html)
- [Gnu Tools](https://sourceforge.net/projects/cbadvanced/)
- [https://qiita.com/tags/mingw](https://qiita.com/tags/mingw)
