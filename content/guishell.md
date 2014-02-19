---
title: "guishell"
url: "/guishell/"
date: 2012-10-11T02:32:16Z
pukiwiki: "guishell"
---

# guishell

[秀丸エディタ](</秀丸エディタ/>) > guishell, TeXmac

## [guishell, TeXmac](http://argent.shinshu-u.ac.jp/~otobe/prog/experimental.html) (非推奨) → 祝鳥 を使用する {#h2793999}

[guishell, TeXmac](http://argent.shinshu-u.ac.jp/~otobe/prog/experimental.html)
guishell 1.39.2 (Win32版, x64版, ソースファイル), TeXmac 2.17 (秀丸8以降・x64対応)
(乙部 厳己 さん @ 信州大)

### 設定 {#nd64fa19}

#### guishell.cfg {#g4317aad}

guishell.exe と同じフォルダーに guishell.cfg を作成して以下のように設定します．<br>

***

```
index=4
FormatFile0=uplatex.fmt
FormatFile1=pdflatex.fmt
FormatFile2=lualatex.fmt
FormatFile3=luajitlatex.fmt
FormatFile4=xelatex.fmt
```

***

#### guishell.bat {#t1d838a8}

guishell.exe と同じフォルダーに guishell.bat を作成して以下のように設定します．<br>

***

```
@echo off
set TEXMFROOT=C:\w32tex\share
set TEXMFMAIN=%TEXMFROOT%\texmf-dist
set TEXMFLOCAL=%TEXMFROOT%\texmf-local
set TEXMFHOME=%USERPROFILE%\texmf
set TEXMF=%TEXMFHOME%;%TEXMFLOCAL%;%TEXMFMAIN%
set TEXMFCNF=%TEXMFLOCAL%\web2c;%TEXMFMAIN%\web2c

start guishell.exe
```

***

guishell.bat をダブルクリックすると guishell.exe が起動します．<br>

## 関連リンク {#m2c882b0}

- [角藤版W32TeXでGuishell，TeXMAC，秀丸を利用する](http://homepage3.nifty.com/mamoru/data/800.htm)
- [最新版 guishell の利用方法](http://blogs.yahoo.co.jp/koh_hotta/63204507.html) ← texmf-local側にあるスタイルファイル群にアクセスできなくなるようです．(参照：[TEXMFの設定で反省](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=882))
- [pLaTeX2e for Windows Another Manual Vol.1 Basic Kit 1999 サポートページ](http://argent.shinshu-u.ac.jp/~otobe/tex/book/1999revise.html)
- [GUI-SHELLアップデート](http://argent.shinshu-u.ac.jp/~otobe/tex/book/update.html)
- [guishell が，うまく作動しないため，ご指導願いたい！](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=832)
- [GuiShell を呼び出し，TeX にコンパイルさせるマクロは？](http://www.maruo.co.jp/hidesoft/2/x31262_.html#31262)
- [角藤版 pTeX を， TeXMac &amp; 秀丸 から使う方法](http://mixedmoss.com/Oboegaki/TeXMac%20install.htm)
- [TeXシステムのインストール（１）](https://www.ipc.fukuoka-u.ac.jp/rd/texinstall/inst1/)
- [PC-LaTeX環境](http://graphics.stanford.edu/~naemura/memo/latex-win.html)/[LaTeXとWebの連携](http://graphics.stanford.edu/~naemura/memo/latex-web.html)(苗村さん＠東京大)
