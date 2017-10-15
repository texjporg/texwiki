---
title: "pTeX-ng"
url: "/pTeX-ng/"
date: 2014-10-20T06:47:07Z
pukiwiki: "pTeX-ng"
---

# pTeX-ng

## pTeX-ng {#q8cbbf32}

***

***

### pTeX-ng とは {#bdeeaf1c}

pTeX-ng (next generation pTeX) は [Y&amp;Y TeX](http://www.tug.org/yandy/) をベースに e-TeX, pTeX, upTeX の機能を追加した TeX の処理系を目指すプロジェクトです．
pTeX-ng は PDF ファイルを直接出力します．DVI ファイルも同時に出力します．

- [https://github.com/clerkma/ptex-ng](https://github.com/clerkma/ptex-ng)
- [https://github.com/clerkma/ptex-ng/wiki](https://github.com/clerkma/ptex-ng/wiki)

### 動作環境 {#f40dfed8}

[Platform](https://github.com/clerkma/ptex-ng/wiki/Overview-of-pTeX-ng#platform) を参照．

### License {#f0d46571}

[GPLv2](https://github.com/clerkma/ptex-ng/wiki/Overview-of-pTeX-ng#overview)

### ChangeLog {#p25e0f9c}

- [https://github.com/clerkma/ptex-ng/commits/master](https://github.com/clerkma/ptex-ng/commits/master)

## インストール {#s7b25ce6}

### TeX Live {#c49d734c}

TeX Live の場合は

- [tltexjp](https://texjp.org/#tltexjp)

から入手可能です．

#### インストール (Windows) {#fde376dd}

Windows PowerShell を起動します。

```
PS C:\Users\$Env:USERNAME> tlmgr update --self --all
PS C:\Users\$Env:USERNAME> Invoke-WebRequest -Uri 'https://texlive.texjp.org/tltexjp-key.asc' -OutFile 'tltexjp-key.asc'
PS C:\Users\$Env:USERNAME> tlmgr key add tltexjp-key.asc
```

> gnupg is not found or not set up, cannot continue with action \`key'<br>
> tlmgr.pl: An error has occurred. See above messages. Exiting.<br>

のエラーが発生する場合は [http://files.gpg4win.org/](http://files.gpg4win.org/) から最新版の gpg4win-vanilla-?.?.?.exe (? は数字) をダウンロード・インストールして 環境変数 Path にコマンド検索パス (64-bit Windows にデフォルトでインストールした場合は C:\Program Files (x86)\GNU\GnuPG) を追加して実行しなおすと

> key successfully imported<br>

と表示されます。

```
PS C:\Users\$Env:USERNAME> tlmgr repository add http://texlive.texjp.org/current/tltexjp tltexjp
PS C:\Users\$Env:USERNAME> tlmgr pinning add tltexjp "*"
PS C:\Users\$Env:USERNAME> tlmgr install ptex-ng
```

<!-- ***インストール (Cygwin) [#s534df9d] -->
<!--  -->
<!-- $ tlmgr update - -self - -all -->
<!-- $ powershell -Command "& {Invoke-WebRequest -Uri 'https://texlive.texjp.org/tltexjp-key.asc' -OutFile 'tltexjp-key.asc'}" -->
<!-- $ tlmgr key add tltexjp-key.asc -->
<!-- $ tlmgr repository add http://texlive.texjp.org/current/tltexjp tltexjp -->
<!-- $ tlmgr pinning add tltexjp "*" -->
<!-- $ tlmgr install ptex-ng -->
<!-- $ tlmgr path add -->

#### インストール (macOS) {#bd8cc0a7}

```
$ sudo tlmgr update --self --all
$ curl -O https://texlive.texjp.org/tltexjp-key.asc
$ sudo tlmgr key add tltexjp-key.asc
$ sudo tlmgr repository add http://texlive.texjp.org/current/tltexjp tltexjp
$ sudo tlmgr pinning add tltexjp '*'
$ sudo tlmgr install ptex-ng
$ sudo tlmgr path add
```

#### インストール (Linux) {#d059b61e}

```
$ sudo tlmgr update --self --all
$ wget https://texlive.texjp.org/tltexjp-key.asc
$ sudo tlmgr key add tltexjp-key.asc
$ sudo tlmgr repository add http://texlive.texjp.org/current/tltexjp tltexjp
$ sudo tlmgr pinning add tltexjp '*'
$ sudo tlmgr install ptex-ng
$ sudo tlmgr path add
```

### W32TeX {#vfa6195d}

W32TeX には pTeX-ng が含まれています．

## 関連リンク {#re1f2eda}

- [http://twilog.org/clerk_ma/search?word=pTeX-ng](http://twilog.org/clerk_ma/search?word=pTeX-ng)
- [「pTeX-ng」の検索結果 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/searchdiary?word=pTeX-ng)
- [http://konoyonohana.blog.fc2.com/?q=pTeX-ng](http://konoyonohana.blog.fc2.com/?q=pTeX-ng)
    - [天地有情 pTeX-ng](http://konoyonohana.blog.fc2.com/blog-category-17.html)
    - \[[pTeX-ng\] 新しくエンジン "platex-ng" が加わった](http://konoyonohana.blog.fc2.com/blog-entry-395.html)
    - \[[ptex-ng\] ptex-ng で OpenType を使ってみた](http://konoyonohana.blog.fc2.com/blog-entry-262.html)
    - [天地有情 \[LaTeX\] pTeX-ng 備忘録 -- 新しい TeX 処理系](http://konoyonohana.blog.fc2.com/blog-entry-90.html)
