---
title: "ptex2pdf"
url: "/ptex2pdf/"
date: 2013-10-20T14:33:01Z
pukiwiki: "ptex2pdf"
---

# ptex2pdf

## TeX ファイルから PDF ファイルを生成するプログラム ptex2pdf {#headline}

ptex2pdf は uplatex, euptex, uptex, platex, eptex, ptex の中から指定したコマンドと dvipdfmx とを連続して実行する Lua スクリプトです．
ptex2pdf は [TeX Live](</TeX Live/>), [W32TeX](/W32TeX/) に含まれています．
もともとは [TeXworks](/TeXworks/) での使用を簡便にするために開発されましたが，[TeXShop](/TeXShop/) などの統合環境においても使用できますし，コマンドライン（ターミナルからの直接の入力）でも使用できます．

***

***

### 使い方 {#usage}

```
ptex2pdf <オプション> <ファイル名.tex>
```

#### オプション一覧 {#options}

- -v  version
- -h  help
- --help （help の完全版で，TeXworks での設定の説明も含む）
- -e  use eptex class of programs（euptex, eptex を使用する場合に指定）
- -u  use uptex class of programs（uplatex, euptex, uptex を使用する場合に指定）
- -l  use latex based formats（uplatex, platex を使用する場合に指定）
- -s  stop at dvi（PDF を作成しない）
- -i  retain intermediate files（dvi を削除しない）
- -ot '&lt;opts>' extra options for TeX（TeX コンパイラのオプション指定）
- -od '&lt;opts>' extra options for dvipdfmx（dvipdfmx のオプション指定）

#### 使用例 {#practices}

- pLaTeX でコンパイル

    ```
    ptex2pdf -l hoge.tex
    ```

- upLaTeX でコンパイル

    ```
    ptex2pdf -u -l hoge.tex
    ```

- upLaTeX でコンパイル，synctex 有効（TeXShop の設定プロファイルから upTeX (ptex2pdf) を設定したときのデフォルト）

    ```
    ptex2pdf -u -l -ot "-synctex=1 -file-line-error" hoge.tex
    ```

- upLaTeX でコンパイル，synctex 有効，-shell-escape 有効，B5 サイズ指定，PDF 暗号化，印刷のみ許可

    ```
    ptex2pdf -u -l -ot "-synctex=1 -file-line-error -shell-escape" -od "-p b5 -S -P 0x0804" hoge.tex
    ```

### 注意点 {#notice}

#### OS X の TeXstudio で ptex2pdf が動作しない {#osx_texstudio}

OS X の [TeXstudio](/TeXstudio/) で ptex2pdf が動作しないという報告「[(mac) TexStudioでptex2pdfが動かない](http://tipsboardx.blogspot.jp/2014/06/mac-texstudioptex2pdf.html)」があります．

原因の切分けが完全ではありませんが，以下の2ステップを行えば解決するようです．

- ptex2pdf のバージョンが 0.6 より前であれば，
    ptex2pdf.lua の shebang line

    ```
    #!/usr/bin/env texlua  
    ```

    の texlua の後ろの余分なスペース2つを削除する

- /usr/texbin へ PATH を通す（たとえば，~/.bash_profile に export PATH=$PATH:/usr/texbin を追加する）

### 不具合 {#bugs}

#### <del>TeX Live/Cygwin で ptex2pdf を実行すると /usr/bin/env: texlua  : No such file or directory のエラーが発生する</del>（バーション0.6で修正済み） {#extra_spaces}

バージョン0.6より前では，TeX Live/Cygwin で ptex2pdf を実行すると /usr/bin/env: texlua  : No such file or directory のエラーが発生します．

```
$ ptex2pdf -u -l hoge.tex
/usr/bin/env: texlua  : No such file or directory
```

この場合，ptex2pdf.lua の shebang line

```
#!/usr/bin/env texlua  
```

の texlua の後ろの余分なスペース2つを削除してください．

- [Cygwin の setup から texlive パッケージを入れて ptex2pdf -l &lt;FILENAME> としたら "/usr/bin/env: texlua  : No such file or directory" ってエラーになった．](https://twitter.com/tsubuyakisc/status/351962192901443585)
- [#!/usr/bin/env texlua   って texlua の後ろに空白文字が2文字ついてた．これを削除して無事 ptex2pdf が動くようになった．](https://twitter.com/tsubuyakisc/status/351962660453093376)

バージョン0.6でこのバグは修正されました．

### リンク {#links}

#### 作者による解説 {#project}

[http://www.preining.info/blog/software-projects/ptex2pdf/](http://www.preining.info/blog/software-projects/ptex2pdf/)

#### 開発版レポジトリ {#repository}

[https://github.com/norbusan/ptex2pdf](https://github.com/norbusan/ptex2pdf)

#### ライセンス {#license}

[GPLv2](https://github.com/norbusan/ptex2pdf#copyright-and-license)

#### 変更履歴 {#changelog}

[https://github.com/norbusan/ptex2pdf#changelog](https://github.com/norbusan/ptex2pdf#changelog)

#### CTAN 配布サイト {#ctanurl}

[http://www.ctan.org/pkg/ptex2pdf](http://www.ctan.org/pkg/ptex2pdf)

#### TeX Live 上の位置 {#texlive}

- ユーザがインストールする位置：[texmf-dist/scripts/ptex2pdf/](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/scripts/ptex2pdf/)
- 開発レポジトリ上の関連する置き場：
    - [http://www.tug.org/svn/texlive/trunk/Build/source/texk/texlive/linked_scripts/ptex2pdf/](http://www.tug.org/svn/texlive/trunk/Build/source/texk/texlive/linked_scripts/ptex2pdf/)
    - [http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/doc/latex/ptex2pdf/](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/doc/latex/ptex2pdf/)

### 関連記事 {#references}

- ptex2pdf は (e)(u)p(la)tex→dvipdfmx という動作に特化していますが，より高い自由度で TeX 関連プログラムを連続起動する仕組みに，[latexmk](/Latexmk/) があります．（Cf. [latexmk と ptex2pdf](http://konoyonohana.blog.fc2.com/blog-entry-25.html)）
