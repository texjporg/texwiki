---
title: "ptex2pdf"
url: "/ptex2pdf/"
date: 2013-10-20T14:33:01Z
pukiwiki: "ptex2pdf"
---

# ptex2pdf

## ptex2pdf {#u0ef9f2c}

ptex2pdf は ptex, eptex, platex, uptex, euptex, uplatex の中から指定したコマンドと dvipdfmx を実行する Lua スクリプトです．<br>
ptex2pdf は TeX Live, W32TeX に含まれています．<br>
もともとは TeXworks での使用を簡便にするために開発されましたが、TeXShop その他の統合環境においても使用できますし、コマンドライン（ターミナルからの直接の入力）でも使用できます。

- [http://www.ctan.org/pkg/ptex2pdf](http://www.ctan.org/pkg/ptex2pdf)
- [https://gitorious.org/tlptexlive/ptex2pdf](https://gitorious.org/tlptexlive/ptex2pdf)
    - [https://gitorious.org/tlptexlive/ptex2pdf/commits](https://gitorious.org/tlptexlive/ptex2pdf/commits)
- [http://www.preining.info/blog/software-projects/ptex2pdf/](http://www.preining.info/blog/software-projects/ptex2pdf/)
- [http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/scripts/ptex2pdf/ptex2pdf.lua?view=markup](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/scripts/ptex2pdf/ptex2pdf.lua?view=markup)
- [latexmk と ptex2pdf](http://konoyonohana.blog.fc2.com/blog-entry-25.html)

### License {#b37c3e22}

[GPLv2](https://gitorious.org/tlptexlive/ptex2pdf/source/COPYING)

### 使い方 {#dfd1522f}

```
ptex2pdf <オプション> <ファイル名.tex>
```

#### オプション一覧 {#q9a85657}

- -v  version
- -h  help
- --help （help の完全版で、TeXworks での設定の説明も含む）
- -e  use eptex class of programs（eptex）
- -u  use uptex class of programs（uptex, uplatex）
- -l  use latex based formats（platex, uplatex）
- -s  stop at dvi（PDF を作成しない）
- -i  retain intermediate files（dvi を消さない）
- -ot '&lt;opts>' extra options for TeX（TeX コンパイル時のオプション指定）
- -od '&lt;opts>' extra options for dvipdfmx（dvipdfmx のオプション指定）

#### 使用例 {#ldc0b8f0}

- pLaTeX でコンパイル

    ```
    ptex2pdf -l hoge.tex
    ```

- pTeX(pLaTeX) でコンパイル、synctex 有効（TeXShopで設定したときのデフォルト）

    ```
    ptex2pdf -l -ot "-synctex=1"
    ```

- upTeX(upLaTeX) でコンパイル、synctex 有効（TeXShopで設定したときのデフォルト）

    ```
    ptex2pdf -u -l -ot "-synctex=1"
    ```

- pTeX(pLaTeX) でコンパイル、synctex 有効、-shell-escape 有効、B5 サイズ指定、PDF 暗号化、印刷のみ許可

    ```
    ptex2pdf -l -ot "-synctex=1 -shell-escape" -od "-p b5 -S -P 0x0804"
    ```
