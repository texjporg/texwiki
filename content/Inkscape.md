---
title: "Inkscape"
url: "/Inkscape/"
date: 2011-04-27T18:53:11Z
pukiwiki: "Inkscape"
---

# Inkscape

## [Inkscape](http://inkscape.org/) {#ycda5b1e}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Inkscape_logo_2.svg/120px-Inkscape_logo_2.svg.png" alt="Inkscape" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

<div style="clear:both"></div>

## Inkscape とは {#v6fd1815}

Inkscape は，オープンソースのベクターグラフィックエディタ (SVG エディタ) です．

Windows, Linux, Mac OS X, Unix で動作します．

2011-09-06 Inkscape 0.48.2 がリリースされました．

<table>
<tbody>
<tr><td style="color:#FFF;background-color:#7C0"><strong>入力</strong></td><td style="color:#FFF;background-color:#7C0"><strong>インポート可能な形式</strong></td><td style="color:#FFF;background-color:#7C0"><strong>出力</strong></td></tr>
<tr><td>SVG, PDF, AI (Adobe Illustrator)</td><td>EPS, PS</td><td>SVG, PDF, EPS, PS, ODG</td></tr>
</tbody>
</table>

[PostScriptやEPSをインポートするには、Ghostscriptをインストールする必要があり、ps2pdfがPATH上になければなりません。](<http://wiki.inkscape.org/wiki/index.php/FAQ_(Japanese)#Inkscape.E3.81.A7.E3.82.A4.E3.83.B3.E3.83.9D.E3.83.BC.E3.83.88.2F.E3.82.A8.E3.82.AF.E3.82.B9.E3.83.9D.E3.83.BC.E3.83.88.E3.81.A7.E3.81.8D.E3.82.8B.E3.83.95.E3.82.A1.E3.82.A4.E3.83.AB.E5.BD.A2.E5.BC.8F.E3.81.AF.E3.81.AA.E3.82.93.E3.81.A7.E3.81.99.E3.81.8B.3F>)

<!-- 外部プログラムとして -->
<!--  -->
<!-- -Windows なら [[pstoedit:http://pstoedit.sourceforge.net/]] -->
<!-- -UNIX なら [[pstoedit:http://pstoedit.sourceforge.net/]] と （[[Skencil>WikiPedia.ja:Skencil]] に含まれている） skconvert.py -->
<!--  -->
<!-- を使用することで EPS, PS の入力も可能です． -->

- [Inkscape 公式サイト](http://inkscape.org/)
- [Inkscape 開発サイト](https://launchpad.net/~inkscape.dev)
    - [コミットログ](http://bazaar.launchpad.net/~inkscape.dev/inkscape/trunk/changes)
- [Inkscape Wiki](http://wiki.inkscape.org)
    - [FAQ (Japanese) - Inkscape Wiki](<http://wiki.inkscape.org/wiki/index.php/FAQ_(Japanese)>)
        - [数学記号や特殊記号を入力するには?](<http://wiki.inkscape.org/wiki/index.php/FAQ_(Japanese)#.E6.95.B0.E5.AD.A6.E8.A8.98.E5.8F.B7.E3.82.84.E7.89.B9.E6.AE.8A.E8.A8.98.E5.8F.B7.E3.82.92.E5.85.A5.E5.8A.9B.E3.81.99.E3.82.8B.E3.81.AB.E3.81.AF.3F>)
        - [Inkscapeでインポート/エクスポートできるファイル形式はなんですか?](<http://wiki.inkscape.org/wiki/index.php/FAQ_(Japanese)#Inkscape.E3.81.A7.E3.82.A4.E3.83.B3.E3.83.9D.E3.83.BC.E3.83.88.2F.E3.82.A8.E3.82.AF.E3.82.B9.E3.83.9D.E3.83.BC.E3.83.88.E3.81.A7.E3.81.8D.E3.82.8B.E3.83.95.E3.82.A1.E3.82.A4.E3.83.AB.E5.BD.A2.E5.BC.8F.E3.81.AF.E3.81.AA.E3.82.93.E3.81.A7.E3.81.99.E3.81.8B.3F>)
    - [Tools](http://wiki.inkscape.org/wiki/index.php/Tools)
    - [Extension repository](http://wiki.inkscape.org/wiki/index.php/ExtensionsRepository)
- WikiPedia.ja:Inkscape
- [Wikibooks.ja:Inkscape](http://ja.wikibooks.org/wiki/Inkscape)
- MacWiki:Inkscape
- [窓の杜 - Inkscape](http://www.forest.impress.co.jp/lib/pic/piccam/paint/inkscape.html)
- [Mac版Inkscape日本語化](http://shinob.cocolog-nifty.com/mix_dvd/2008/04/macinkscape_978d.html)
- [Mac用ドローイングソフトInkscapeを日本語化する](http://idita.blog11.fc2.com/blog-entry-469.html)
- [Inkscape+日本語環境 \[Mac\]\[Free\]](http://lime1100.blog108.fc2.com/blog-entry-56.html)

## 不具合 {#tedcde5e}

### Windows 版 Inkscape 0.48.2 のメニューのフォントがおかしい {#i6aee1d9}

Windows 版 Inkscape 0.48.2 を起動するとメニューのフォントが 0.48.1 とは異なっていました．

inkscape の etc\pango\pango.aliases の

```
sans = "arial,browallia new,mingliu,simhei,gulimche,ms gothic,kartika,latha,mangal,raavi"
```

を

```
sans = "meiryo,arial,browallia new,mingliu,simhei,gulimche,ms gothic,kartika,latha,mangal,raavi"
```

に修正して Inkscape を再起動すると解決しました．

## PDF+LaTeX/EPS+LaTeX/PS+LaTeX {#d6b72996}

- [LaTeX - Inkscape Wiki](http://wiki.inkscape.org/wiki/index.php/LaTeX)
- [Release notes/0.48#New LaTeX export for PDF/EPS/PS - Inkscape Wiki](http://wiki.inkscape.org/wiki/index.php/Release_notes/0.48#New_LaTeX_export_for_PDF.2FEPS.2FPS)
- [CTAN:help/Catalogue/entries/svg-inkscape.html](https://mirror.ctan.org/help/Catalogue/entries/svg-inkscape.html), [http://az.ctan.org/pkg/svg-inkscape](http://az.ctan.org/pkg/svg-inkscape)
- [http://sites.google.com/site/richardhenwood/inkscapelatexextension](http://sites.google.com/site/richardhenwood/inkscapelatexextension)
- [InkscapeでTex用の図を作成する方法](http://akitosblog.seesaa.net/article/225071699.html)

Inkscape 0.48 から PDF, EPS, PS ファイルで保存する場合に PDF+LaTeX, EPS+LaTeX, PS+LaTeX を指定することが可能になりました．

***

<span style="color:Black;background-color:#72C304;"><ins>　　　<span style="color:White;"><strong>Portable Document Format</strong></span>　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　PDF バージョン制限 <ins> PDF 1.5　　　　　　　　　　　　　　　　　\[ ▼ \]</ins><br>
　テキストをパスに変換　　　　　　　　　　　　　　　　　　　　　　　　　　☐<br>
　PDF+LaTeX: PDF のテキストを除外して LaTeX ファイルを生成　☑<br>
　フィルタエフェクトをラスタライズ　　　　　　　　　　　　　　　　　　　　☑<br>
　ラスタライズ解像度 (dpi):　　　　　　　　　　　　　　　　　　　　　　<ins>600</ins><br>
　エクスポート領域は描画全体　　　　　　　　　　　　　　　　　　　　　☑<br>
　エクスポート領域はページ　　　　　　　　　　　　　　　　　　　　　　　☐<br>
　オブジェクトを ID で制限する <ins>　　　　　　　　　　　　　　　　　　　　　</ins><br>

***

<span style="color:Black;background-color:#72C304;"><ins>　　　<span style="color:White;"><strong>Encapsulated PostScript</strong></span>　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　PS レベル制限 <ins> PostScript level 3　　　　　　　　　　　　　　\[ ▼ \]</ins><br>
　テキストをパスに変換　　　　　　　　　　　　　　　　　　　　　　　　　　☐<br>
　EPS+LaTeX: EPS のテキストを除外して LaTeX ファイルを生成　☑<br>
　フィルタエフェクトをラスタライズ　　　　　　　　　　　　　　　　　　　　☑<br>
　ラスタライズ解像度 (dpi):　　　　　　　　　　　　　　　　　　　　　　<ins>600</ins><br>
　エクスポート領域は描画全体　　　　　　　　　　　　　　　　　　　　　☑<br>
　エクスポート領域はページ　　　　　　　　　　　　　　　　　　　　　　　☐<br>
　オブジェクトを ID で制限する <ins>　　　　　　　　　　　　　　　　　　　　　</ins><br>

***

<span style="color:Black;background-color:#72C304;"><ins>　　　<span style="color:White;"><strong>PostScript</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　PS レベル制限 <ins> PostScript level 3　　　　　　　　　　　　　　\[ ▼ \]</ins><br>
　テキストをパスに変換　　　　　　　　　　　　　　　　　　　　　　　　　　☐<br>
　PS+LaTeX: PS のテキストを除外して LaTeX ファイルを生成　　 ☑<br>
　フィルタエフェクトをラスタライズ　　　　　　　　　　　　　　　　　　　　☑<br>
　ラスタライズ解像度 (dpi):　　　　　　　　　　　　　　　　　　　　　　<ins>600</ins><br>
　エクスポート領域は描画全体　　　　　　　　　　　　　　　　　　　　　☑<br>
　エクスポート領域はページ　　　　　　　　　　　　　　　　　　　　　　　☐<br>
　オブジェクトを ID で制限する <ins>　　　　　　　　　　　　　　　　　　　　　</ins><br>

***

コマンドラインから PDF+LaTeX, EPS+LaTeX, PS+LaTeX で出力することも可能です．

<!-- -http://inkscape.modevia.com/inkscape-man.html -->

```
inkscape -D -z --file=image.svg --export-pdf=image.pdf --export-latex
inkscape -D -z --file=image.svg --export-eps=image.eps --export-latex
inkscape -D -z --file=image.svg --export-ps=image.ps --export-latex
```

## Inkscape で TeX 数式 {#f9da7d32}

- [InkscapeでTeX数式](http://hooktail.org/computer/index.php?Inkscape%A4%C7TeX%BF%F4%BC%B0)
- [Inkscapeでtex数式を使う(数式はアウトラインに)](http://www.my-chicken-heart.com/2007/09/inkscapetex.html)
- [Latexの数式をsvgに](http://blog.livedoor.jp/les_paul_sp/archives/317234.html)
- [TeX, EPS, Inkscape for Win](http://researchmap.jp/jo8ju0xue-10163/#_10163)

## エクステンション {#s696e33c}

- <span style="color:Red;"><strong>エクステンションを修正する場合の注意点</strong></span>
    - <span style="color:Red;"><strong>Python はインデントに意味を持つので修正する場合はインデントに注意して修正してください．</strong></span>
    - <span style="color:Red;"><strong>タブではなくスペースでインデントすることをおすすめします．</strong></span>
    - <span style="color:Red;"><strong>コメントアウトは # (シャープ) を使用します．</strong></span>
    - <span style="color:Red;"><strong>Python で Windows の PATH を文字列で表す場合は raw 文字列 (r'...') を使用すると便利です．</strong></span>

### [EqTeXSvg (Latex 数式)](http://www.julienvitard.eu/en/eqtexsvg_en.html) {#w6edd3aa}

LaTeX と連携するためのエクステンション．<br>
[Inkscape にデフォルトで含まれています](http://bazaar.launchpad.net/~inkscape.dev/inkscape/trunk/view/head:/share/extensions/eqtexsvg.py)が，バージョンが古く (2010-04-04)，修正しないと正しく動作しないので，[EqTeXSvg の公式サイト](http://www.julienvitard.eu/en/eqtexsvg_en.html)の最新版 (2011-05-17) をインストールしてください ([インストール](/Inkscape/#v77ed75c) を参照)．

- 環境変数 PATH に latex, dvisvgm, dvips, pstoedit が存在するディレクトリが含まれていれば \[エクステンション(N)\] → \[レンダリング\] → \[Latex 数式...\] から使用可能．
    - pstoedit に PATH が通っていればコマンドプロンプトから

        ```
        C:\>pstoedit
        pstoedit: version 3.50 / DLL interface 108 (build Aug 10 2009 - release build -
        MS VC++ 1300) : Copyright (C) 1993 - 2009 Wolfgang Glunz
        No output format specified (-f option) and format could not be deduced from suff
        ix of output file since no output file name was given
        Usage: "pstoedit -f format inputfile outputfile" or run "pstoedit -help" to get
        a complete list available options.
        ```

        として表示されます．<br>
        PATH を通しているのに Latex 数式が表示されない場合は，まずコマンドプロンプトから

        ```
        C:\>echo %PATH%
        ```

        として PATH を確認します．<br>
        latex, dvisvgm, dvips, pstoedit が格納されているディレクトリが PATH に登録されていればコマンドプロンプトから

        ```
        C:\inkscape>inkscape
        ```

        として Inkscape を起動してみてください．

- デフォルトで含まれている eqtexsvg.py (2010-04-04) を使用すると，数式がうまく表示されなかったので eqtexsvg.py の dvips コマンドのオプションを以下のように修正すると表示されました．最新版 (2011-05-17) では修正しなくても表示されました．<br>

    ```
            #os.system('dvips -q -f -E -D 600 -y 5000 -o "%s" "%s"' % (ps_file, dvi_file))
            os.system('dvips -q -f -E -Ppdf -o "%s" "%s"' % (ps_file, dvi_file))
    ```

- eqtexsvg.py は tempdir に inkscape-?????? フォルダを作成しますが作成される inkscape-?????? フォルダの親ディレクトリは

    ```
    C:\inkscape>.\python\python.exe
    Python 2.6.5 (r265:79096, Mar 19 2010, 21:48:26) [MSC v.1500 32 bit (Intel)] on
    win32
    Type "help", "copyright", "credits" or "license" for more information.
    >>> import tempfile
    >>> tempfile.gettempdir()
    ```

    とすることで確認できます．<br>
    もし，tempfile.gettempdir() がスペースの含まれたディレクトリであれば，スペースの含まないディレクトリ (C:\inkscape\tmp) を作成します．<br>

最新版の eqtexsvg.py (2011-05-17)  を使用する場合は<br>

```
class Equation:
    """Current LaTeX Equation"""

    def __init__(self, param={}):
```

```
    ...
 
        try: 
            #self.temp_dir = tempfile.mkdtemp('', 'inkscape-')
            self.temp_dir = tempfile.mkdtemp('', 'inkscape-', r'C:\inkscape\tmp')
```

デフォルトで含まれている eqtexsvg.py (2010-04-04) を使用する場合は<br>

```
    def effect(self):

        #base_dir = tempfile.mkdtemp("", "inkscape-");
        base_dir = tempfile.mkdtemp('', 'inkscape-', r'C:\inkscape\tmp')
```

などとして eqtexsvg.py の self.temp_dir や base_dir を修正します．<br>
この場合は，C:\inkscape\tmp\inkscape-?????? に一時ファイルを作成します．<br>
処理がうまくいけば，一時ファイルと C:\inkscape\tmp\inkscape-?????? が削除されます．

- InkscapeをLaTeXと一緒に使う
    - [http://sora-blue.net/~shogo82148/memo/soft/inkscape/with-LaTeX.html](http://sora-blue.net/~shogo82148/memo/soft/inkscape/with-LaTeX.html)
    - [http://sora-blue.net/~shogo82148/i/memo/soft/inkscape/with-LaTeX.html](http://sora-blue.net/~shogo82148/i/memo/soft/inkscape/with-LaTeX.html)
- [Inkscape で LaTeX の数式を入力する](http://www.empitsu.com/wp/?p=24)
- [Inkscape で LaTeX の数式を入力する（続編）](http://www.empitsu.com/wp/?p=85)
- [Windows版の Inkscape で LaTeX の数式を入力する](http://d.hatena.ne.jp/hiroki777/20080221)

***

<span style="color:Black;background-color:#72C304;"><ins>　　　<span style="color:White;"><strong>Latex 数式</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<strong><span style="color:White;">✕</span></strong>　 \]<ins></span> </ins></span><br>

　Latex 数式: <ins>\\\[\frac{\pi^2}{6}=\lim\_{n \to \infty}\sum\_{k=1}^n \frac{1}{k^2}\\\]</ins><br>
　追加パッケージ(カンマで区切る):<br>
　Debug information　　　　　　　　　　　　　　　　　　　　　　　☐<br>

<br>

　ライブプレビュー　　　　　　　　　　　　　　　　　　　　　　　　☑<br>

***

#### インストール {#v77ed75c}

***

- [http://www.pstoedit.net/](http://www.pstoedit.net/)

から pstoedit をダウンロード，インストールして pstoedit.exe のフォルダに PATH を通します．

***

- [http://inkscape.org/download/](http://inkscape.org/download/)

から Inkscape のリリース版をダウンロードして展開します．

展開したフォルダを C:\inkscape と仮定します．別のフォルダに展開した場合は読み替えてください．

***

[EqTeXSvg](http://www.julienvitard.eu/en/eqtexsvg_en.html) から eqtexsvg.zip をダウンロードします．

eqtexsvg.zip を展開し，eqtexsvg.inx, eqtexsvg.py を C:\inkscape\\\share\extensions にコピーして元々の eqtexsvg.inx, eqtexsvg.py を上書きします．

***

EqTeXSvg (Latex 数式) は tempdir に inkscape-?????? フォルダを作成しますが作成される inkscape-?????? フォルダの親ディレクトリは

```
C:\inkscape>.\python\python.exe
Python 2.6.5 (r265:79096, Mar 19 2010, 21:48:26) [MSC v.1500 32 bit (Intel)] on
win32
Type "help", "copyright", "credits" or "license" for more information.
>>> import tempfile
>>> tempfile.gettempdir()
```

とすることで確認できます．

もし，tempfile.gettempdir() がスペースの含まれたディレクトリであれば，スペースの含まないディレクトリ (C:\inkscape\tmp) を作成して

```
class Equation:
    """Current LaTeX Equation"""

    def __init__(self, param={}):

    ...

        try: 
            #self.temp_dir = tempfile.mkdtemp('', 'inkscape-')
            self.temp_dir = tempfile.mkdtemp('', 'inkscape-', r'C:\inkscape\tmp')
```

などとして C:\inkscape\share\extensions\eqtexsvg.py の self.temp_dir を修正してください．<br>
この場合は，C:\inkscape\tmp\inkscape-?????? に一時ファイルを作成します．<br>
処理がうまくいけば，一時ファイルと C:\inkscape\tmp\inkscape-?????? が削除されます．

***

デフォルトでは Latex 数式は \\( ～ \\) となっているようです．

```
\(\frac{\pi^2}{6}=\lim_{n \to \infty}\sum_{k=1}^n \frac{1}{k^2}\)
```

以下の数式モードが使用可能です．

- インライン数式モード
    - \\( ～ \\)

        ```
        \(\frac{\pi^2}{6}=\lim_{n \to \infty}\sum_{k=1}^n \frac{1}{k^2}\)
        ```

    - $ ～ $

        ```
        $\frac{\pi^2}{6}=\lim_{n \to \infty}\sum_{k=1}^n \frac{1}{k^2}$
        ```

    - \begin{math} ～ \end{math}

        ```
        \begin{math}\frac{\pi^2}{6}=\lim_{n \to \infty}\sum_{k=1}^n \frac{1}{k^2}\end{math}
        ```

- ディスプレイ数式モード (番号を付けない場合)
    - \\\[ ～ \\\]

        ```
        \[\frac{\pi^2}{6}=\lim_{n \to \infty}\sum_{k=1}^n \frac{1}{k^2}\]
        ```

    - $$ ～ $$

        ```
        $$\frac{\pi^2}{6}=\lim_{n \to \infty}\sum_{k=1}^n \frac{1}{k^2}$$
        ```

    - \begin{displaymath} ～ \end{displaymath}

        ```
        \begin{displaymath}\frac{\pi^2}{6}=\lim_{n \to \infty}\sum_{k=1}^n \frac{1}{k^2}\end{displaymath}
        ```

    - \begin{equation\*} ～ \end{equation\*}

        ```
        \begin{equation*}\frac{\pi^2}{6}=\lim_{n \to \infty}\sum_{k=1}^n \frac{1}{k^2}\end{equation*}
        ```

    - \begin{eqnarray\*} ～ \end{eqnarray\*}

        ```
        \begin{eqnarray*}\frac{\pi^2}{6}=\lim_{n \to \infty}\sum_{k=1}^n \frac{1}{k^2}\end{eqnarray*}
        ```

    - \begin{align\*} ～ \end{align\*}

        ```
        \begin{align*}\frac{\pi^2}{6}=\lim_{n \to \infty}\sum_{k=1}^n \frac{1}{k^2}\end{align*}
        ```

    - \begin{gather\*} ～ \end{gather\*}

        ```
        \begin{gather*}\frac{\pi^2}{6}=\lim_{n \to \infty}\sum_{k=1}^n \frac{1}{k^2}\end{gather*}
        ```

- ディスプレイ数式モード (番号を付ける場合)
    - \begin{equation} ～ \end{equation}

        ```
        \begin{equation}\frac{\pi^2}{6}=\lim_{n \to \infty}\sum_{k=1}^n \frac{1}{k^2}\end{equation}
        ```

    - \begin{eqnarray} ～ \end{eqnarray}

        ```
        \begin{eqnarray}\frac{\pi^2}{6}=\lim_{n \to \infty}\sum_{k=1}^n \frac{1}{k^2}\end{eqnarray}
        ```

    - \begin{align} ～ \end{align}

        ```
        \begin{align}\frac{\pi^2}{6}=\lim_{n \to \infty}\sum_{k=1}^n \frac{1}{k^2}\end{align}
        ```

    - \begin{gather} ～ \end{gather}

        ```
        \begin{gather}\frac{\pi^2}{6}=\lim_{n \to \infty}\sum_{k=1}^n \frac{1}{k^2}\end{gather}
        ```

***

### [textext](http://pav.iki.fi/software/textext/) {#b9881c0b}

LaTeX 形式の数式を Inkscape に含めることが可能なエクステンション．<br>
再編集も可能です．<br>
意図した場所に出力されないかもしれませんがどこかに存在するのでがんばって探し当ててください．<br>

- [textext 公式サイト](http://pav.iki.fi/software/textext/)
- [textext 開発サイト](https://bitbucket.org/pv/textext/)
    - [コミットログ](https://bitbucket.org/pv/textext/changesets)
    - [https://bitbucket.org/pv/textext/issue/55/textext-using-inkscape048](https://bitbucket.org/pv/textext/issue/55/textext-using-inkscape048)
    - [https://bitbucket.org/pv/textext/issue/59/textext-with-portable-inkscape](https://bitbucket.org/pv/textext/issue/59/textext-with-portable-inkscape)
- [Inkscape Portable with Textext (MikTex, pstoedit, gs)](http://portableapps.com/node/28897)
- [textext, pdf2svg on Windows](http://hil.t.u-tokyo.ac.jp/~t-nakano/textext_pdf2svg.html)
- [ぼやっきんぐ   &raquo; Inkscape](http://www.empitsu.com/wp/?cat=8)
- [ＯＺのＸＸ使い: textextの検索結果](http://kozimathewizard.blogspot.com/search?q=textext)
- [いわにぃのブログ : textext を含む記事](http://blog.livedoor.jp/ti5942/search?q=textext)
- [仮想化された日々:textext を含む記事](http://blog.livedoor.jp/les_paul_sp/search?q=textext)
- [textext を含む記事:たなぴのブログ](http://blog.livedoor.jp/tanapy/search?q=textext)
- [うぶつん&#12288;&#65374;退化する脳みそのための備忘録&#65374;: inkscape](http://ubutun.blogspot.com/search/label/inkscape)
- [inkscape - Wiki 小さなそして広がっていく世界](http://ac206223.ppp.asahi-net.or.jp/adiary/memo/adiary.cgi/hirosugu/inkscape)
- [Inkscape に textextを導入](http://d.hatena.ne.jp/m_katsurai/20100908/1283915982)
- [Fixing textext on Inkscape 0.48](http://laconsigna.wordpress.com/2010/11/13/fixing-textext-on-inkscape-0-48/)
- [XeLaTex](http://d.hatena.ne.jp/yambi/20110405/1302005022)
- [InkscapeでLatex数式](http://d.hatena.ne.jp/HRM-7/20100710/1278752062)
- [Inkscape - PukiWiki](http://mizupc8.bio.mie-u.ac.jp/pukiwiki/index.php?Inkscape)
- [Mac/OS X/X11/Inkscape - PukiWiki](http://mizupc8.bio.mie-u.ac.jp/pukiwiki/index.php?Mac%2FOS%20X%2FX11%2FInkscape)
- [MacのInkscapeでTeXを使う](http://d.hatena.ne.jp/colourful/20081219/p1)
- [QA: 電子回路図の挿入](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=582&parent=3140&mode=3)

#### インストール {#y0f25738}

***

- [http://www.pstoedit.net/](http://www.pstoedit.net/)

から pstoedit をダウンロード，インストールして pstoedit.exe のフォルダに PATH を通します．

***

- [http://inkscape.org/download/](http://inkscape.org/download/)

から Inkscape のリリース版をダウンロードして展開します．

展開したフォルダを C:\inkscape と仮定します．別のフォルダに展開した場合は読み替えてください．

***

- [https://bitbucket.org/pv/textext/src](https://bitbucket.org/pv/textext/src)

の get source >> から最新版の textext のファイル (zip, gz, bz2 のうちから好きなものを選択)

- [https://bitbucket.org/pv/textext/get/tip.zip](https://bitbucket.org/pv/textext/get/tip.zip)
- [https://bitbucket.org/pv/textext/get/tip.tar.gz](https://bitbucket.org/pv/textext/get/tip.tar.gz)
- [https://bitbucket.org/pv/textext/get/tip.tar.bz2](https://bitbucket.org/pv/textext/get/tip.tar.bz2)

をダウンロード，展開して

- textext.py
- textext.inx

を C:\inkscape\share\extensions にコピーします．

***

Inkscape を起動して \[エクステンション(N)\]-\[Tex Text\] を実行しようとすると RuntimeError の例外が発生します．

***

<span style="color:Black;background-color:#72C304;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　　　　　　　　Inkscapeは、実行したスクリプトから追加データを受け取りまし<br>
　　　　　　　　　た。スクリプトはエラーを返しませんでしたが、実行結果が意図し<br>
　　　　　　　　　ないものになっていることを示唆している可能性があります。<br>

<br>

```
Traceback (most recent call last):
  File "textext.py", line 403, in <module>
    raise RuntimeError("Neither pygtk nor Tkinter is available!")
RuntimeError: Neither pygtk nor Tkinter is available!
```

***

- [http://dgleich.wordpress.com/2010/10/26/fixing-textext-on-inkscape-for-windows/](http://dgleich.wordpress.com/2010/10/26/fixing-textext-on-inkscape-for-windows/)

から site-packages.zip をダウンロードして
C:\inkscape\python\Lib\site-packages に

- cairo\\
- gtk-2.0\\
- pycairo-1.8.10-py2.6.egg-info
- pygtk.pth
- pygtk.py
- pygtk.pyc
- pygtk.pyo

を展開します．

<!-- -http://ftp.gnome.org/pub/GNOME/binaries/win32/pygtk/2.24/ -->
<!-- -http://ftp.gnome.org/pub/GNOME/binaries/win32/pycairo/1.8/ -->
<!-- -http://ftp.gnome.org/pub/GNOME/binaries/win32/pygobject/2.28/ -->

***

Inkscape を起動して \[エクステンション(N)\]-\[Tex Text\] を実行しようとすると AttributeError の例外が発生します．

***

<span style="color:Black;background-color:#72C304;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　　　　　　　　Inkscapeは、実行したスクリプトから追加データを受け取りまし<br>
　　　　　　　　　た。スクリプトはエラーを返しませんでしたが、実行結果が意図し<br>
　　　　　　　　　ないものになっていることを示唆している可能性があります。<br>

<br>

```
Traceback (most recent call last):
  File "textext.py", line 741, in <module>
    paths += [os.path.join(os.abspath(os.dirname(sys.argv[0])), '..', '..')]
AttributeError: 'module' object has no attribute 'abspath'
```

***

C:\inkscape\share\extensions\textext.py の 741 行目あたりの os.abspath, os.dirname を os.path.abspath, os.path.dirname に修正します．

***

```
    # The path where Inkscape is likely to be
    #paths += [os.path.join(os.abspath(os.dirname(sys.argv[0])), '..', '..')]
    paths += [os.path.join(os.path.abspath(os.path.dirname(sys.argv[0])), '..', '..')]
```

***

Inkscape を起動して \[エクステンション(N)\]-\[Tex Text\] を実行します．<br>
Text に \begin{document} ～ \end{document} に入れる文章を入力します．<br>
ここでは Scale factor を 100 にして Text に Happy Inkscaping と入力しました．<br>

<span style="color:Black;background-color:#72C304;"><ins>　　<span style="color:White;"><strong>TeX Text</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#62B304;"></ins>\[ <span style="color:White;"><strong>◛</strong></span> \]<ins></span><span style="color:Black;background-color:#62B304;"></ins>\[ <span style="color:White;"><strong>▭</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　Preamble file:　　　(なし)<br>
　　Scale factor:　　100.00<br>
LaTeX page width: 10cm<br>
　　 Converter:　　　Pstoedit<br>
　　　　　　　　　　　　Happy Inkscaping<br>

<br>

<br>

<br>

<br>

　　　Text:<br>

<br>

<br>

<br>

<br>

<br>

***

実行すると RuntimeError の例外が発生します．

<span style="color:Black;background-color:#72C304;"><ins>　　<span style="color:White;"><strong>Textext Error</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　　　　　　　<strong>Error occurred while converting text from Latex to SVG:</strong><br>

```
Traceback (most recent call last):
  File "textext.py", line 246, in cb_ok
    self.callback()
  File "textext.py", line 456, in <lambda>
    asker.ask(lambda: self.do_convert(info, old_node))
  File "textext.py", line 470, in do_convert
    new_node = converter.convert(info)
  File "textext.py", line 1043, in convert
    self.tex_to_pdf(info)
  File "textext.py", line 1014, in tex_to_pdf
    out = exec_command(['pdflatex', self.tmp('tex')] + latex_opts)
  File "textext.py", line 698, in exec_command
    % (' '.join(cmd), p.returncode, out + err))
RuntimeError: Command pdflatex ...
...
```

***

C:\inkscape\share\extensions\textext.py の 1014 行目あたりを修正します．

pdfcrop の実行には Perl が必要です．

***

```
        # Exec pdflatex: tex -> pdf
        #out = exec_command(['pdflatex', self.tmp('tex')] + latex_opts)
        out = exec_command(['pdflatex', latex_opts, self.tmp('tex')])
        out = exec_command(['pdfcrop', '--clip', self.tmp('pdf').replace('\\', '/'), self.tmp('pdf').replace('\\', '/')])
```

***

textext は tempdir に tmp?????? フォルダを作成しますが作成される tmp?????? フォルダの親ディレクトリは

```
C:\inkscape>.\python\python.exe
Python 2.6.5 (r265:79096, Mar 19 2010, 21:48:26) [MSC v.1500 32 bit (Intel)] on
win32
Type "help", "copyright", "credits" or "license" for more information.
>>> import tempfile
>>> tempfile.gettempdir()
```

とすることで確認できます．

もし，tempfile.gettempdir() がスペースの含まれたディレクトリであれば

```
class LatexConverterBase
    def __init__(self, document):
        #self.tmp_path = tempfile.mkdtemp()
        self.tmp_path = tempfile.mkdtemp('', tempfile.gettempprefix(), r'C:\inkscape\tmp')
```

などとしてスペースの含まないディレクトリ (C:\inkscape\tmp) を作成して self.tmp_path を修正してください．<br>
tempfile.gettempprefix() は

```
C:\inkscape>.\python\python.exe
Python 2.6.5 (r265:79096, Mar 19 2010, 21:48:26) [MSC v.1500 32 bit (Intel)] on
win32
Type "help", "copyright", "credits" or "license" for more information.
>>> import tempfile
>>> tempfile.gettempprefix()
'tmp'
```

とすることで確認できます．<br>
この場合は，C:\inkscape\tmp\tmp?????? に一時ファイルを作成します．<br>
処理がうまくいけば，一時ファイルが削除されます．<br>
C:\inkscape\tmp\tmp?????? は OSError の例外が発生し，

```
[Error 32] プロセスはファイルにアクセスできません。別のプロセスが使用中です。: 'C:\inkscape\tmp\tmp??????'
```

となり削除できません．<br>
プログラム上では pass してこのエラーを無視しているので，この例外のエラーメッセージは表示されません．<br>
気になる場合はプログラムを修正するか手動でディレクトリを削除するかしてください．

***

#### textext で日本語を使う {#q35ff2bf}

pdflatex では，日本語を使えないので日本語を使える Tex Text Japanese を作成します．

***

C:\inkscape\share\extensions\textext.py をコピー，貼り付けして C:\inkscape\share\extensions\textext_ja.py にリネームします．<br>
C:\inkscape\share\extensions\textext.inx をコピー，貼り付けして C:\inkscape\share\extensions\textext_ja.inx にリネームします．<br>

***

C:\inkscape\share\extensions\textext_ja.inx を編集します．

***

- &lt;\_name>Tex Text Japanese&lt;/\_name>
- &lt;id>org.ekips.filter.textext_ja&lt;/id>
- &lt;dependency type="executable" location="extensions">textext_ja.py&lt;/dependency>
- &lt;command reldir="extensions" interpreter="python">textext_ja.py&lt;/command>

に変更します．

***

```
<inkscape-extension>
  <_name>Tex Text Japanese</_name>
  <id>org.ekips.filter.textext_ja</id>
  <dependency type="executable" location="extensions">textext_ja.py</dependency>
  <dependency type="executable" location="extensions">inkex.py</dependency>
  <effect>
    <object-type>all</object-type>
  </effect>
  <script>
    <command reldir="extensions" interpreter="python">textext_ja.py</command>
  </script>
</inkscape-extension>
```

***

C:\inkscape\share\extensions\textext_ja.py の 109 行目あたりの windows.set_title を "TeX Text Japanese" に変更します．

***

```
            window.set_title("TeX Text Japanese")
```

***

textext の Text に入力された日本語は UTF-8 で保存されます．

最新版の W32TeX はデフォルトでは [ptexenc](http://tutimura.ath.cx/ptexlive/?ptexenc%2F%CA%B8%BB%FA%A5%B3%A1%BC%A5%C9%C8%BD%C4%EA) を用いて自動判別するので文字コードを指定したり変換したりする必要はありません．

ただし，日本語① などの文字列 (この場合は platex ではなく euplatex で処理しないと ① が表示されません) の場合は UTF-8 と判別できないようなので -no-guess-input-enc で自動判別をしないようにして -kanji=utf8 を追加します．

C:\inkscape\share\extensions\textext_ja.py の 1014 行目あたりの # Exec pdflatex: tex -> pdf を

- # Exec pdfplatex: tex -> dvi -> pdf
- # Exec pdfeuplatex: tex -> dvi -> pdf
- # Exec pdfplatex2: tex -> dvi -> eps -> pdf
- # Exec pdfeuplatex2: tex -> dvi -> eps -> pdf

のどれかに修正します．

pdfcrop, epstopdf の実行には Perl が必要です．

***

```
        # Exec pdfplatex: tex -> dvi -> pdf
        out = exec_command(['platex', '-no-guess-input-enc', '-kanji=utf8', latex_opts, self.tmp('tex')])
        out = exec_command(['dvipdfmx', self.tmp('dvi')])
        out = exec_command(['pdfcrop', '--clip', self.tmp('pdf').replace('\\', '/'), self.tmp('pdf').replace('\\', '/')])
```

***

または

***

```
        # Exec pdfeuplatex: tex -> dvi -> pdf
        out = exec_command(['euplatex', '-no-guess-input-enc', '-kanji=utf8', latex_opts, self.tmp('tex')])
        out = exec_command(['updvipdfmx', self.tmp('dvi')])
        out = exec_command(['pdfcrop', '--clip', self.tmp('pdf').replace('\\', '/'), self.tmp('pdf').replace('\\', '/')])
```

***

または

***

```
        # Exec pdfplatex2: tex -> dvi -> eps -> pdf
        out = exec_command(['platex', '-no-guess-input-enc', '-kanji=utf8', latex_opts, self.tmp('tex')])
        out = exec_command(['dvips', '-Ppdf', '-E', '-o', self.tmp('eps'), self.tmp('dvi')])
        out = exec_command(['epstopdf', self.tmp('eps')])
```

***

または

***

```
        # Exec pdfeuplatex2: tex -> dvi -> eps -> pdf
        out = exec_command(['euplatex', '-no-guess-input-enc', '-kanji=utf8', latex_opts, self.tmp('tex')])
        out = exec_command(['dvips', '-Ppdf', '-E', '-o', self.tmp('eps'), self.tmp('dvi')])
        out = exec_command(['epstopdf', self.tmp('eps')])
```

***

C:\inkscape\share\extensions\textext_ja.py の 1153 行目あたりの # Exec pstoedit: pdf -> svg の項目を # Exec Ghostscript (epswrite) and pstoedit: pdf -> eps -> svg に修正します．

***

```
        # Exec Ghostscript (epswrite) and pstoedit: pdf -> eps -> svg
        exec_command(['gswin32c', '-dSAFER', '-q', '-dBATCH', '-dNOPAUSE',
                      '-sDEVICE=epswrite', '-dEPSCrop', '-r9600',
                      '-sOutputFile='+self.tmp('eps'), self.tmp('pdf')])
        exec_command(['pstoedit', '-ndt', '-f', 'plot-svg',
                      self.tmp('eps'), self.tmp('svg')]
                     + pstoeditOpts)
```

***

入力する文字列によっては (例えば abc) 実行すると XMLSyntaxError の例外が発生します．<br>
入力する文字列によっては (例えば 日本語) 実行しても XMLSyntaxError の例外は発生しません．<br>
Ghostscript (epswrite) and pstoedit で pdf -> eps -> svg 変換して処理しようとすると発生するようです．<br>
pstoedit で pdf -> svg 変換して処理すれば発生しませんでした．(ただし，日本語は表示されません)<br>

<span style="color:Black;background-color:#72C304;"><ins>　　<span style="color:White;"><strong>Textext Error</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

　　　　　　　　<strong>Error occurred while converting text from Latex to SVG:</strong><br>

```
Traceback (most recent call last):
  File "textext_ja.py", line 246, in cb_ok
    self.callback()
  File "textext_ja.py", line 456, in <lambda>
    asker.ask(lambda: self.do_convert(info, old_node))
  File "textext_ja.py", line 470, in do_convert
    new_node = converter.convert(info)
  File "textext_ja.py", line 1050, in convert
    new_node = self.svg_to_group()
  File "textext_ja.py", line 1072, in svg_to_group
    tree = etree.parse(self.tmp('svg'))
  File "lxml.etree.pyx", line 2692, in lxml.etree.parse (src/lxml/lxml.etree.c:49594)
  File "parser.pxi", line 1500, in lxml.etree._parseDocument (src/lxml/lxml.etree.c:71364)
  File "parser.pxi", line 1529, in lxml.etree._parseDocumentFromURL (src/lxml/lxml.etree.c:71647)
  File "parser.pxi", line 1429, in lxml.etree._parseDocFromFile (src/lxml/lxml.etree.c:70742)
  File "parser.pxi", line 975, in lxml.etree._BaseParser._parseDocFromFile (src/lxml/lxml.etree.c:67740)
  File "parser.pxi", line 539, in lxml.etree._ParserContext._handleParseResultDoc (src/lxml/lxml.etree.c:63824)
  File "parser.pxi", line 625, in lxml.etree._handleParseResult (src/lxml/lxml.etree.c:64745)
  File "parser.pxi", line 565, in lxml.etree._raiseParseError (src/lxml/lxml.etree.c:64088)
XMLSyntaxError: Document is empty, line 1, column 1
```

***

#### [pdf2svg](http://www.cityinthesky.co.uk/opensource/pdf2svg) {#yec57718}

Converter には pstoedit の他に [pdf2svg](http://www.cityinthesky.co.uk/opensource/pdf2svg) もあります．

pdf2svg の Windows バイナリが [textext, pdf2svg on Windows](http://hil.t.u-tokyo.ac.jp/~t-nakano/textext_pdf2svg.html) からダウンロードできます．

pdf2svg は日本語の PDF も SVG に変換可能ですが poppler-data の配置場所と fontconfig の FONTCONFIG_PATH が正しく設定されていることが必要です．

poppler-data を正しい位置に配置していない場合 Fontconfig error が発生します．

```
>pdf2svg tmp.pdf tmp.svg
Fontconfig error: Cannot load default config file
Error: Couldn't open 'nameToUnicode' file 'C:\target\share\poppler\nameToUnicode
\%'
Error: Missing language pack for 'Adobe-Japan1' mapping
Error: Unknown font tag 'F1'
Error (176): No font in show/space
```

のエラーが表示される場合は W32TeX の C:\w32tex\share\texworks\poppler-data をコピーして C:\target\share にペーストして poppler にリネームしてください．<br>
これで poppler-data が正しい位置に配置されます．

***

```
C:.
├─w32tex
│  └─share
│      └─texworks
│          └─poppler-data
└─target
    └─share
        └─poppler
```

***

poppler-data を正しい位置に配置しても FONTCONFIG_PATH が正しく設定されていなければ Fontconfig error が発生します．

```
>pdf2svg tmp.pdf tmp.svg
Fontconfig error: Cannot load default config file
Error: Couldn't find a font for 'Ryumin Light Identity H'
some font thing failed
```

[Texmaker のかな漢字変換をする際に，文字と背景が黒く表示され，判読不能になる不具合の修正方法](/Texmaker/#e1ab5b1e) を参考に fontconfig をインストールして

MinGW Shell (MSYS) の場合は

```
$ export FONTCONFIG_PATH=C:/MinGW/etc/fonts
$ pdf2svg tmp.pdf tmp.svg
```

コマンドプロンプトの場合は

```
>set FONTCONFIG_PATH=C:\MinGW\etc\fonts
>pdf2svg tmp.pdf tmp.svg
```

とすることで FONTCONFIG_PATH が正しく設定され，日本語の PDF も SVG に変換可能になります．

ただし，変換できない場合もあります．

```
>pdf2svg tmp2.pdf tmp2.svg
Error: Missing or invalid Encoding entry in Type 0 font
Error: Unknown font tag 'R10'
Error (238): No font in show/space
```

### [svg2latex](https://gitorious.org/svg2latex/svg2latex) {#x3c0d408}

svg2latex takes an svg file and produces a file with latex markup and a pdf or eps file which is called in by the latex markup.

- [svg2latex - Gitorious](https://gitorious.org/svg2latex/svg2latex)
- [svg2latex](http://sites.google.com/site/richardhenwood/svg2latex2)

### [svg2tex](https://github.com/Oni/svg2tex) {#wc9b7463}

Svg2tex is a python script that extracts all text from a \*.svg file to a LaTeX picture environment. This way the picture's text is processed directly by LaTeX and can be included into the document.

### [JessyInk](http://code.google.com/p/jessyink/) {#k0206a78}

- [JessyInk](http://code.google.com/p/jessyink/)
- [Inkscapeでプレゼンテーション](http://d.hatena.ne.jp/yambi/20110405/1301974923)
