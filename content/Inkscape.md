---
title: "Inkscape"
url: "/Inkscape/"
date: 2011-04-27T18:53:11Z
pukiwiki: "Inkscape"
---

# Inkscape

## [Inkscape](http://inkscape.org/) {#ycda5b1e}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Inkscape_logo_2.svg/120px-Inkscape_logo_2.svg.png" alt="Inkscape" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

<div style="clear:both"></div>

## Inkscape とは {#v6fd1815}

Inkscape は，オープンソースのベクターグラフィックエディタ (SVG エディタ) です．<br>

<table>
<tbody>
<tr><td style="color:#FFF;background-color:#7C0"><strong>入力</strong></td><td style="color:#FFF;background-color:#7C0"><strong>インポート可能な形式</strong></td><td style="color:#FFF;background-color:#7C0"><strong>出力</strong></td></tr>
<tr><td>SVG, PDF, AI (Adobe Illustrator)</td><td>EPS, PS</td><td>SVG, PDF, EPS, PS, ODG</td></tr>
</tbody>
</table>

[PostScriptやEPSをインポートするには、Ghostscriptをインストールする必要があり、ps2pdfがPATH上になければなりません。](<http://wiki.inkscape.org/wiki/index.php/FAQ_(Japanese)#Inkscape.E3.81.A7.E3.82.A4.E3.83.B3.E3.83.9D.E3.83.BC.E3.83.88.2F.E3.82.A8.E3.82.AF.E3.82.B9.E3.83.9D.E3.83.BC.E3.83.88.E3.81.A7.E3.81.8D.E3.82.8B.E3.83.95.E3.82.A1.E3.82.A4.E3.83.AB.E5.BD.A2.E5.BC.8F.E3.81.AF.E3.81.AA.E3.82.93.E3.81.A7.E3.81.99.E3.81.8B.3F>)

- [Inkscape 公式サイト](http://inkscape.org/)
- [Inkscape 開発サイト](https://launchpad.net/~inkscape.dev)
    - [コミットログ](http://bazaar.launchpad.net/~inkscape.dev/inkscape/trunk/changes)
- [Inkscape Wiki](http://wiki.inkscape.org)
    - [LaTeX - Inkscape Wiki](http://wiki.inkscape.org/wiki/index.php/LaTeX)
    - [FAQ (Japanese) - Inkscape Wiki](<http://wiki.inkscape.org/wiki/index.php/FAQ_(Japanese)>)
        - [数学記号や特殊記号を入力するには?](<http://wiki.inkscape.org/wiki/index.php/FAQ_(Japanese)#.E6.95.B0.E5.AD.A6.E8.A8.98.E5.8F.B7.E3.82.84.E7.89.B9.E6.AE.8A.E8.A8.98.E5.8F.B7.E3.82.92.E5.85.A5.E5.8A.9B.E3.81.99.E3.82.8B.E3.81.AB.E3.81.AF.3F>)
        - [Inkscapeでインポート/エクスポートできるファイル形式はなんですか?](<http://wiki.inkscape.org/wiki/index.php/FAQ_(Japanese)#Inkscape.E3.81.A7.E3.82.A4.E3.83.B3.E3.83.9D.E3.83.BC.E3.83.88.2F.E3.82.A8.E3.82.AF.E3.82.B9.E3.83.9D.E3.83.BC.E3.83.88.E3.81.A7.E3.81.8D.E3.82.8B.E3.83.95.E3.82.A1.E3.82.A4.E3.83.AB.E5.BD.A2.E5.BC.8F.E3.81.AF.E3.81.AA.E3.82.93.E3.81.A7.E3.81.99.E3.81.8B.3F>)
    - [Tools](http://wiki.inkscape.org/wiki/index.php/Tools)
    - [Extension repository](http://wiki.inkscape.org/wiki/index.php/ExtensionsRepository)

### 動作環境 {#a70b2acc}

Windows, OS X, Linux

### License {#ibc5e002}

[GPL](http://bazaar.launchpad.net/~inkscape.dev/inkscape/trunk/annotate/head:/COPYING)

### リリース情報 {#d961699f}

[最新ニュース](http://inkscape.org/index.php?lang=ja)を参照．<br>

### ChangeLog {#q8a7ad68}

[Changes](http://bazaar.launchpad.net/~inkscape.dev/inkscape/trunk/changes)

## ダウンロード {#i5a8dfd7}

- [http://ftp.jaist.ac.jp/pub/sourceforge/i/in/inkscape/inkscape/](http://ftp.jaist.ac.jp/pub/sourceforge/i/in/inkscape/inkscape/)
- [ftp://ftp.jaist.ac.jp/pub/sourceforge/i/in/inkscape/inkscape/](ftp://ftp.jaist.ac.jp/pub/sourceforge/i/in/inkscape/inkscape/)
- [http://www.partha.com/](http://www.partha.com/)

## 不具合 {#tedcde5e}

### Windows 版 Inkscape 0.48.4 (0.48.2 以降) のメニューのフォントがおかしい → etc\pango\pango.aliases の sans の先頭に meiryo, を追加する {#i6aee1d9}

- [Inkscape Portable の日本語化とフォントを変更する](http://mekemoke.jp/2013/04/1159.html)
- [Windows 版 Inkscape の メニューフォント設定方法](http://www.ginshali.info/2011/12/windows-inkscape.html)

Windows 版 Inkscape 0.48.4 (0.48.2 以降) を起動するとメニューのフォントが 0.48.1 とは異なっていました．

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
- [svg-inkscape](http://www.ctan.org/pkg/svg-inkscape), [CTAN:help/Catalogue/entries/svg-inkscape.html](https://mirror.ctan.org/help/Catalogue/entries/svg-inkscape.html)
    - 使い方は texdoc で確認してください

        ```
        texdoc svg-inkscape
        ```

- [InkscapeでTex用の図を作成する方法](http://akitosblog.seesaa.net/article/225071699.html)
- [InkscapeでLaTeX用の図を書く](http://d.hatena.ne.jp/amarui/20130124/1358995146)

Inkscape 0.48 から PDF, EPS, PS ファイルで保存する場合に PDF+LaTeX, EPS+LaTeX, PS+LaTeX を指定することが可能になりました．<br>
! LaTeX Error: Cannot determine size of graphic in ???.eps_tex (no BoundingBox) のエラーが発生する場合は 「EPS+LaTeX: EPS のテキストを除外して LaTeX ファイルを生成」 のチェックボックスを解除してください． (→ [inkscapeで作った画像epsをtexでの利用の仕方がわからず困っています．](http://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q10107244200))<br>

***

<span style="color:#72C304;background-color:#72C304;"><ins>　　　　　　　　　　　　<span style="color:Black;"><strong>Portable Document Format</strong></span>　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　PDF バージョン制限 <ins> PDF 1.5　　　　　　　　　　　　　　　　　\[ <strong>ᐯ</strong> \]</ins><br>
　テキストをパスに変換　　　　　　　　　　　　　　　　　　　　　　　　　　☐<br>
　PDF+LaTeX: PDF のテキストを除外して LaTeX ファイルを生成　☑<br>
　フィルタエフェクトをラスタライズ　　　　　　　　　　　　　　　　　　　　☑<br>
　ラスタライズ解像度 (dpi):　　　　　　　　　　　　　　　　　　　　　　<ins>600　\[<strong>⇕</strong>\]</ins><br>
　エクスポート領域は描画全体　　　　　　　　　　　　　　　　　　　　　☑<br>
　エクスポート領域はページ　　　　　　　　　　　　　　　　　　　　　　　☐<br>
　オブジェクトを ID で制限する <ins>　　　　　　　　　　　　　　　　　　　　　</ins><br>

***

<span style="color:#72C304;background-color:#72C304;"><ins>　　　　　　　　　　　　　<span style="color:Black;"><strong>Encapsulated PostScript</strong></span>　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　PS レベル制限 <ins> PostScript level 3　　　　　　　　　　　　　　\[ <strong>ᐯ</strong> \]</ins><br>
　テキストをパスに変換　　　　　　　　　　　　　　　　　　　　　　　　　　☐<br>
　EPS+LaTeX: EPS のテキストを除外して LaTeX ファイルを生成　☑ ← ! LaTeX Error: Cannot determine size of graphic in ???.eps_tex (no BoundingBox) のエラーが発生する場合はチェックボックスを解除してください<br>
　フィルタエフェクトをラスタライズ　　　　　　　　　　　　　　　　　　　　☑<br>
　ラスタライズ解像度 (dpi):　　　　　　　　　　　　　　　　　　　　　　<ins>600　\[<strong>⇕</strong>\]</ins><br>
　エクスポート領域は描画全体　　　　　　　　　　　　　　　　　　　　　☑<br>
　エクスポート領域はページ　　　　　　　　　　　　　　　　　　　　　　　☐<br>
　オブジェクトを ID で制限する <ins>　　　　　　　　　　　　　　　　　　　　　</ins><br>

***

<span style="color:#72C304;background-color:#72C304;"><ins>　　　　　　　　　　　　　　　　　 <span style="color:Black;"><strong>PostScript</strong></span> 　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　PS レベル制限 <ins> PostScript level 3　　　　　　　　　　　　　　\[ <strong>ᐯ</strong> \]</ins><br>
　テキストをパスに変換　　　　　　　　　　　　　　　　　　　　　　　　　　☐<br>
　PS+LaTeX: PS のテキストを除外して LaTeX ファイルを生成　　 ☑<br>
　フィルタエフェクトをラスタライズ　　　　　　　　　　　　　　　　　　　　☑<br>
　ラスタライズ解像度 (dpi):　　　　　　　　　　　　　　　　　　　　　　<ins>600　\[<strong>⇕</strong>\]</ins><br>
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

## エクステンション {#s696e33c}

- <span style="color:Red;"><strong>エクステンションを修正する場合の注意点</strong></span>
    - <span style="color:Red;"><strong>Python はインデントに意味を持つので修正する場合はインデントに注意して修正してください．</strong></span>
    - <span style="color:Red;"><strong>タブではなくスペースでインデントすることをおすすめします．</strong></span>
    - <span style="color:Red;"><strong>コメントアウトは # (シャープ) を使用します．</strong></span>
    - <span style="color:Red;"><strong>Python で Windows の PATH を文字列で表す場合は raw 文字列 (r'...') を使用すると便利です．</strong></span>

### [EqTeXSvg (Latex 数式)](http://www.julienvitard.eu/en/eqtexsvg_en.html) {#w6edd3aa}

LaTeX と連携するためのエクステンション．<br>
<strong>環境変数 PATH に pstoedit, dvisvgm, dvips, latex が存在するディレクトリが含まれていれば</strong> \[エクステンション(N)\] → \[レンダリング\] → \[Latex 数式...\] から使用可能．<br>

[EqTeXSvg の公式サイト](http://www.julienvitard.eu/en/eqtexsvg_en.html)から最新版 (2011-05-17) をインストールしてください ([インストール](/Inkscape/#v77ed75c) を参照)．<br>
[Inkscape にデフォルトで含まれています](http://bazaar.launchpad.net/~inkscape.dev/inkscape/trunk/view/head:/share/extensions/eqtexsvg.py)が，バージョンが古く (2010-04-04)，正しく動作しません．<br>

- [InkscapeでLaTexを使う](http://chiron.blog.ocn.ne.jp/astrocal/2012/09/inkscapelatex_1.html)
- [InkscapeでLaTexを使えるようにできたメモ](http://d.hatena.ne.jp/biost/20120302/1330660995)
- [Inkscape で LaTeX 数式を表示しようとするとエラーになる](http://d.hatena.ne.jp/nlogn/20120131/1327995778)

#### インストール (Windows) {#v77ed75c}

dvisvgm, dvips, latex は [TeX Live](</TeX Live/>) または [W32TeX](/W32TeX/) に含まれています．

***

- [http://www.pstoedit.net/](http://www.pstoedit.net/)

から pstoedit をダウンロード，インストールして pstoedit.exe のフォルダーに PATH を通します．

***

- [http://inkscape.org/download/](http://inkscape.org/download/)

から Inkscape のリリース版をダウンロードして展開します．

展開したフォルダーを C:\inkscape と仮定します．別のフォルダーに展開した場合は読み替えてください．

***

[EqTeXSvg](http://www.julienvitard.eu/en/eqtexsvg_en.html) から eqtexsvg.zip をダウンロードします．

eqtexsvg.zip を展開し，eqtexsvg.inx, eqtexsvg.py を C:\inkscape\\\share\extensions にコピーして元々の eqtexsvg.inx, eqtexsvg.py を上書きします．

***

EqTeXSvg (Latex 数式) は tempdir に inkscape-?????? フォルダーを作成しますが作成される inkscape-?????? フォルダーの親ディレクトリは

```
C:\inkscape>.\python\python.exe
Python 2.6.5 (r265:79096, Mar 19 2010, 21:48:26) [MSC v.1500 32 bit (Intel)] on
win32
Type "help", "copyright", "credits" or "license" for more information.
>>> import tempfile
>>> tempfile.gettempdir()
```

とすることで確認できます．

もし，tempfile.gettempdir() がスペースの含まれたディレクトリであれば，スペースの含まないディレクトリ (C:\inkscape\tmp) を作成します．<br>
最新版の eqtexsvg.py (2011-05-17)  を使用する場合は<br>

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

#### インストール (Linux) {#jbc77a7b}

eqtexsvg を最新版に更新します．<br>

```
$ wget http://www.julienvitard.eu/documents/eqtexsvg/eqtexsvg.tar.gz
```

または

```
$ curl -O http://www.julienvitard.eu/documents/eqtexsvg/eqtexsvg.tar.gz
```

eqtexsvg.tar.gz を展開して chmod で実行権限を付加して /usr/share/inkscape/extensions にコピーします．<br>

```
$ tar xvf eqtexsvg.tar.gz
$ chmod +x eqtexsvg.py
$ sudo cp -p eqtexsvg.py eqtexsvg.inx /usr/share/inkscape/extensions
$ rm eqtexsvg.py eqtexsvg.inx eqtexsvg.tar.gz
```

Inkscape を起動すると \[エクステンション(N)\] → \[レンダリング\] → \[Latex 数式...\] が使用出来ます．<br>

#### 使用方法 {#se15d9b2}

- <strong>環境変数 PATH に pstoedit, dvisvgm, dvips, latex が存在するディレクトリが含まれていれば</strong> \[エクステンション(N)\] → \[レンダリング\] → \[Latex 数式...\] から使用可能．

PATH を通しているのに Latex 数式が表示されない場合は，まずコマンド プロンプトから

```
C:\>echo %PATH%
```

として PATH を確認します．<br>
pstoedit, dvisvgm, dvips, latex が格納されているディレクトリが PATH に登録されていればコマンド プロンプトから

```
C:\inkscape>inkscape
```

として Inkscape を起動してみてください．

***

<span style="color:#72C304;background-color:#72C304;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>Latex 数式</strong></span>　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　Latex 数式: <ins>\\(\frac{\pi^2}{6}=\lim\_{n \to \infty}\sum\_{k=1}^n \frac{1}{k^2}\\)</ins><br>
　追加パッケージ(カンマで区切る):<br>
　Debug information　　　　　　　　　　　　　　　　　　　　　　　☐<br>

<br>

　ライブプレビュー　　　　　　　　　　　　　　　　　　　　　　　　☑<br>

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

    - \begin{align\*} ～ \end{align\*}

        ```
        \begin{align*}\frac{\pi^2}{6}=\lim_{n \to \infty}\sum_{k=1}^n \frac{1}{k^2}\end{align*}
        ```

    - \begin{gather\*} ～ \end{gather\*}

        ```
        \begin{gather*}\frac{\pi^2}{6}=\lim_{n \to \infty}\sum_{k=1}^n \frac{1}{k^2}\end{gather*}
        ```

    - \begin{equation\*} ～ \end{equation\*}

        ```
        \begin{equation*}\frac{\pi^2}{6}=\lim_{n \to \infty}\sum_{k=1}^n \frac{1}{k^2}\end{equation*}
        ```

- ディスプレイ数式モード (番号を付ける場合)
    - \begin{align} ～ \end{align}

        ```
        \begin{align}\frac{\pi^2}{6}=\lim_{n \to \infty}\sum_{k=1}^n \frac{1}{k^2}\end{align}
        ```

    - \begin{gather} ～ \end{gather}

        ```
        \begin{gather}\frac{\pi^2}{6}=\lim_{n \to \infty}\sum_{k=1}^n \frac{1}{k^2}\end{gather}
        ```

    - \begin{equation} ～ \end{equation}

        ```
        \begin{equation}\frac{\pi^2}{6}=\lim_{n \to \infty}\sum_{k=1}^n \frac{1}{k^2}\end{equation}
        ```

***

### [inkscape2tikz](https://code.google.com/p/inkscape2tikz/) {#u5ee2f7d}

### [JessyInk](https://code.google.com/p/jessyink/) {#k0206a78}

- [JessyInk](https://code.google.com/p/jessyink/)
- [Inkscapeでプレゼンテーション](http://d.hatena.ne.jp/yambi/20110405/1301974923)

## Inkscape で TeX 数式 {#f9da7d32}

- [InkscapeでTeX数式](http://hooktail.org/computer/index.php?Inkscape%A4%C7TeX%BF%F4%BC%B0)
- [Inkscapeでtex数式を使う(数式はアウトラインに)](http://www.my-chicken-heart.com/2007/09/inkscapetex.html)
- [Latexの数式をsvgに](http://blog.livedoor.jp/les_paul_sp/archives/317234.html)
- [TeX, EPS, Inkscape for Win](http://researchmap.jp/jo8ju0xue-10163/#_10163)

## 関連リンク {#l46f1d34}

- [InkscapeでDesign](http://inkscapedesign.web.fc2.com/)
- [Inkscaper ～Inkscapeの使い方～](http://logo.dollsent.jp/)
- [Wikipedia.ja:Inkscape](https://ja.wikipedia.org/wiki/Inkscape)
- [Wikibooks.ja:Inkscape](http://ja.wikibooks.org/wiki/Inkscape)
- MacWiki:Inkscape
- [Inkscape - 窓の杜ライブラリ](http://www.forest.impress.co.jp/library/software/inkscape/)
- [Mac版Inkscape日本語化](http://shinob.cocolog-nifty.com/mix_dvd/2008/04/macinkscape_978d.html)
- [Inkscape+日本語環境 \[Mac\]\[Free\]](http://lime1100.blog108.fc2.com/blog-entry-56.html)
- [Beamerscape](https://github.com/jbohren/beamerscape)
