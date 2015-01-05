---
title: "pTeX-ng"
url: "/pTeX-ng/"
date: 2014-10-20T06:47:07Z
pukiwiki: "pTeX-ng"
---

# pTeX-ng

## pTeX-ng {#q8cbbf32}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

### pTeX-ng とは {#bdeeaf1c}

pTeX-ng (next generation pTeX) は [Y&amp;Y TeX](http://www.tug.org/yandy/) をベースに e-TeX, pTeX, upTeX の機能を追加した TeX の処理系を目指すプロジェクトです．<br>
pTeX-ng は PDF ファイルを直接出力します．DVI ファイルは出力しません．<br>

- [https://github.com/clerkma/ptex-ng](https://github.com/clerkma/ptex-ng)
- [https://github.com/clerkma/ptex-ng/wiki](https://github.com/clerkma/ptex-ng/wiki)
- [https://github.com/YandYTeX](https://github.com/YandYTeX)

### 動作環境 {#f40dfed8}

[Platform](https://github.com/clerkma/ptex-ng/wiki/Overview-of-pTeX-ng#platform) を参照．<br>

### License {#f0d46571}

[GPLv2](https://github.com/clerkma/ptex-ng/wiki/Overview-of-pTeX-ng#overview)

### ChangeLog {#p25e0f9c}

- [https://github.com/clerkma/ptex-ng/commits/master](https://github.com/clerkma/ptex-ng/commits/master)
- [https://github.com/YandYTeX/yandytex-src/commits/master](https://github.com/YandYTeX/yandytex-src/commits/master)

## インストール {#s7b25ce6}

### TeX Live {#c49d734c}

TeX Live の場合は

- [tlptexlive](http://www.preining.info/blog/software-projects/tlptexlive/)

から入手可能です．<br>

#### インストール (Windows) {#fde376dd}

```
PS C:\Users\$Env:USERNAME> tlmgr update --self --all
PS C:\Users\$Env:USERNAME> tlmgr repository add http://www.tug.org/~preining/tlptexlive/ tlptexlive
PS C:\Users\$Env:USERNAME> tlmgr pinning add tlptexlive "*"
PS C:\Users\$Env:USERNAME> tlmgr install ptex-ng
```

<!-- ***インストール (Cygwin) [#s534df9d] -->
<!--  -->
<!-- $ tlmgr update - -self - -all -->
<!-- $ tlmgr repository add http://www.tug.org/~preining/tlptexlive/ tlptexlive -->
<!-- $ tlmgr pinning add tlptexlive "*" -->
<!-- $ tlmgr install ptex-ng -->
<!-- $ tlmgr path add -->

#### インストール (OS X) {#bd8cc0a7}

```
$ sudo tlmgr update --self --all
$ sudo tlmgr repository add http://www.tug.org/~preining/tlptexlive/ tlptexlive
$ sudo tlmgr pinning add tlptexlive '*'
$ sudo tlmgr install ptex-ng
```

#### インストール (Linux) {#d059b61e}

```
$ sudo tlmgr update --self --all
$ sudo tlmgr repository add http://www.tug.org/~preining/tlptexlive/ tlptexlive
$ sudo tlmgr pinning add tlptexlive '*'
$ sudo tlmgr install ptex-ng
$ sudo tlmgr path add
```

### W32TeX {#vfa6195d}

W32TeX には pTeX-ng が含まれています．<br>

## 関連リンク {#re1f2eda}

- [http://twilog.org/clerk_ma/search?word=pTeX-ng](http://twilog.org/clerk_ma/search?word=pTeX-ng)
- [「pTeX-ng」の検索結果 - マクロツイーター](http://d.hatena.ne.jp/zrbabbler/searchdiary?word=pTeX-ng)
- [ptex-ngとtlptexlive](http://www.preining.info/blog/2014/12/ptex-ng-tlptexlive/)
- [ptex-ng - tlptexlive バイナリ](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1451)
- [ptex-ng](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1447)
- [http://konoyonohana.blog.fc2.com/?q=pTeX-ng](http://konoyonohana.blog.fc2.com/?q=pTeX-ng)
    - [天地有情 pTeX-ng](http://konoyonohana.blog.fc2.com/blog-category-17.html)
    - [天地有情 \[LaTeX\] xindy 備忘録 --- もう一つの日本語［索引］ツール](http://konoyonohana.blog.fc2.com/blog-entry-95.html)
    - [天地有情 \[LaTeX\] pTeX-ng 備忘録 -- 新しい TeX 処理系](http://konoyonohana.blog.fc2.com/blog-entry-90.html)
- [ptex-ng を使ってみました](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1409)
