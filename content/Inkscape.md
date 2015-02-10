---
title: "Inkscape"
url: "/Inkscape/"
date: 2011-04-27T18:53:11Z
pukiwiki: "Inkscape"
---

# Inkscape

## [Inkscape](https://inkscape.org/) {#ycda5b1e}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

<div style="clear:both"></div>

## Inkscape とは {#v6fd1815}

Inkscape はベクターグラフィックエディタ (SVG エディタ) です．<br>

<table>
<tbody>
<tr><td style="color:#FFF;background-color:#7C0"><strong>入力</strong></td><td style="color:#FFF;background-color:#7C0"><strong>インポート可能な形式</strong></td><td style="color:#FFF;background-color:#7C0"><strong>出力</strong></td></tr>
<tr><td>SVG, PDF, AI (Adobe Illustrator)</td><td>EPS, PS</td><td>SVG, PDF, EPS, PS, ODG</td></tr>
</tbody>
</table>

[PostScriptやEPSをインポートするには、Ghostscriptをインストールする必要があり、ps2pdfがPATH上になければなりません。](<http://wiki.inkscape.org/wiki/index.php/FAQ_(Japanese)#Inkscape.E3.81.A7.E3.82.A4.E3.83.B3.E3.83.9D.E3.83.BC.E3.83.88.2F.E3.82.A8.E3.82.AF.E3.82.B9.E3.83.9D.E3.83.BC.E3.83.88.E3.81.A7.E3.81.8D.E3.82.8B.E3.83.95.E3.82.A1.E3.82.A4.E3.83.AB.E5.BD.A2.E5.BC.8F.E3.81.AF.E3.81.AA.E3.82.93.E3.81.A7.E3.81.99.E3.81.8B.3F>)

- [Inkscape 公式サイト](https://inkscape.org/)
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

[GPLv3, GPLv2](http://bazaar.launchpad.net/~inkscape.dev/inkscape/trunk/annotate/head:/COPYING)

### リリース情報 {#d961699f}

[最新ニュース](https://inkscape.org/ja/news/)を参照．<br>

### ChangeLog {#q8a7ad68}

[Changes](http://bazaar.launchpad.net/~inkscape.dev/inkscape/trunk/changes)

## ダウンロード {#i5a8dfd7}

- [https://inkscape.org/download/](https://inkscape.org/download/)
- [http://www.partha.com/](http://www.partha.com/)

## 注意点 {#tedcde5e}

### Windows 版 Inkscape 0.91  のメニューのフォントがメイリオではない → inkscape\etc\pango\pango.aliases を作成して sans の先頭に meiryo, を追加する {#i6aee1d9}

- [Inkscape Portable の日本語化とフォントを変更する](http://mekemoke.jp/2013/04/1159.html)
- [Windows 版 Inkscape の メニューフォント設定方法](http://www.ginshali.info/2011/12/windows-inkscape.html)

Windows 版 Inkscape 0.91 を起動するとメニューのフォントがメイリオではなく別のフォントが使用されていました．

inkscape\etc\pango\pango.aliases を作成して

```
courier = "courier new"

tahoma = "tahoma,browallia new,mingliu,simhei,gulimche,ms gothic,kartika,latha,mangal,raavi"
sans = "meiryo,arial,browallia new,mingliu,simhei,gulimche,ms gothic,kartika,latha,mangal,raavi"
serif = "times new roman,angsana new,mingliu,simsun,gulimche,ms gothic,kartika,latha,mangal,raavi"
mono = "courier new,courier monothai,mingliu,simsun,gulimche,ms gothic,kartika,latha,mangal,raavi"
monospace = "courier new,courier monothai,mingliu,simsun,gulimche,ms gothic,kartika,latha,mangal,raavi"
```

を記述して Inkscape を再起動するとメイリオで表示されるようになりました．

## PDF/EPS/PS + LaTeX {#d6b72996}

- [Inkscape Wiki](http://wiki.inkscape.org)
    - [LaTeX - Inkscape Wiki](http://wiki.inkscape.org/wiki/index.php/LaTeX)
    - [Release notes/0.91 - Inkscape Wiki#PDF/EPS/PS + LaTeX](http://wiki.inkscape.org/wiki/index.php/Release_notes/0.91#PDF.2FEPS.2FPS_.2B_LaTeX)
    - [Release notes/0.48 - Inkscape Wiki#New LaTeX export for PDF/EPS/PS](http://wiki.inkscape.org/wiki/index.php/Release_notes/0.48#New_LaTeX_export_for_PDF.2FEPS.2FPS)
- [svg-inkscape](http://www.ctan.org/pkg/svg-inkscape), [CTAN:help/Catalogue/entries/svg-inkscape.html](https://mirror.ctan.org/help/Catalogue/entries/svg-inkscape.html)
    - 使い方は texdoc で確認してください

        ```
        texdoc svg-inkscape
        ```

- [InkscapeでTex用の図を作成する方法](http://akitosblog.seesaa.net/article/225071699.html)
- [InkscapeでLaTeX用の図を書く](http://d.hatena.ne.jp/amarui/20130124/1358995146)

Inkscape は PDF, EPS, PS ファイルで保存する場合に PDF+LaTeX, EPS+LaTeX, PS+LaTeX を指定できます．<br>

***

<span style="color:#72C304;background-color:#72C304;"><ins>        <span style="color:Black;"><strong>Portable Document Format</strong></span>       <span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

 PDF バージョン制限 <ins> PDF 1.5               \[ <strong>ᐯ</strong> \]</ins><br>
  ☐ テキストをパスに変換する<br>
  ☑ PDF+LaTeX: PDF のテキストを除外して LaTeX ファイルを生成<br>
  ☑ フィルダーエフェクトをラスタライズする<br>
 ラスタライズ解像度 (dpi)：　　　　　　　　　　　　　　　　　　　　　　<ins>90 \[<strong>⇕</strong>\]</ins><br>
 出力ページサイズ：　　　　🔘 ドキュメントのページサイズを使用<br>
            ◯ エクスポートオブジェクトのサイズを使用<br>
 裁ち落し/マージン (mm)： 　　　　　　　　　　　　　　　  　<ins>0.0　　　　\[<strong>⇕</strong>\]</ins><br>
 オブジェクトのエクスポートを ID で制限する： <ins>　　　　　　　　　　　　　　　</ins><br>

***

<span style="color:#72C304;background-color:#72C304;"><ins>　　　　　　　　　　　　　<span style="color:Black;"><strong>Encapsulated PostScript</strong></span>　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

 PS レベル制限 <ins> PostScript level 3             \[ <strong>ᐯ</strong> \]</ins><br>
  ☐ テキストをパスに変換する<br>
  ☑ EPS+LaTeX: EPS のテキストを除外して LaTeX ファイルを生成<br>
  ☑ フィルダーエフェクトをラスタライズする<br>
 ラスタライズ解像度 (dpi)：　　　　　　　　　　　　　　　　　　　　　　<ins>90 \[<strong>⇕</strong>\]</ins><br>
 出力ページサイズ：　　　　🔘 ドキュメントのページサイズを使用<br>
            ◯ エクスポートオブジェクトのサイズを使用<br>
 裁ち落し/マージン (mm)： 　　　　　　　　　　　　　　　  　<ins>0.0　　　　\[<strong>⇕</strong>\]</ins><br>
 オブジェクトのエクスポートを ID で制限する： <ins>　　　　　　　　　　　　　　　</ins><br>

***

<span style="color:#72C304;background-color:#72C304;"><ins>　　　　　　　　　　　　　　　　　 <span style="color:Black;"><strong>PostScript</strong></span> 　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

 PS レベル制限 <ins> PostScript level 3             \[ <strong>ᐯ</strong> \]</ins><br>
  ☐ テキストをパスに変換する<br>
  ☑ PS+LaTeX: PS のテキストを除外して LaTeX ファイルを生成<br>
  ☑ フィルダーエフェクトをラスタライズする<br>
 ラスタライズ解像度 (dpi)：　　　　　　　　　　　　　　　　　　　　　　<ins>90 \[<strong>⇕</strong>\]</ins><br>
 出力ページサイズ：　　　　🔘 ドキュメントのページサイズを使用<br>
            ◯ エクスポートオブジェクトのサイズを使用<br>
 裁ち落し/マージン (mm)： 　　　　　　　　　　　　　　　  　<ins>0.0　　　　\[<strong>⇕</strong>\]</ins><br>
 オブジェクトのエクスポートを ID で制限する： <ins>　　　　　　　　　　　　　　　</ins><br>

***

コマンドラインから PDF+LaTeX, EPS+LaTeX, PS+LaTeX で出力することも可能です．

<!-- -https://inkscape.modevia.com/inkscape-man.html -->

```
inkscape -D -z --file=image.svg --export-pdf=image.pdf --export-latex
inkscape -D -z --file=image.svg --export-eps=image.eps --export-latex
inkscape -D -z --file=image.svg --export-ps=image.ps --export-latex
```

### 注意点 {#i348fa25}

#### ! LaTeX Error: Cannot determine size of graphic in ???.eps_tex (no BoundingBox) → 「EPS+LaTeX: EPS のテキストを除外して LaTeX ファイルを生成」 のチェックボックスを解除する {#p8fa7725}

! LaTeX Error: Cannot determine size of graphic in ???.eps_tex (no BoundingBox) のエラーが発生する場合は 「EPS+LaTeX: EPS のテキストを除外して LaTeX ファイルを生成」 のチェックボックスを解除してください． (→ [inkscapeで作った画像epsをtexでの利用の仕方がわからず困っています．](http://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q10107244200))<br>

## エクステンション {#s696e33c}

- <span style="color:Red;"><strong>エクステンションを修正する場合の注意点</strong></span>
    - <span style="color:Red;"><strong>Python はインデントに意味を持つので修正する場合はインデントに注意して修正してください．</strong></span>
    - <span style="color:Red;"><strong>タブではなくスペースでインデントすることをおすすめします．</strong></span>
    - <span style="color:Red;"><strong>コメントアウトは # (シャープ) を使用します．</strong></span>
    - <span style="color:Red;"><strong>Python で Windows の PATH を文字列で表す場合は raw 文字列 (r'...') を使用すると便利です．</strong></span>

### [EqTeXSvg (LaTeX formula)](http://www.julienvitard.eu/en/eqtexsvg_en.html) {#w6edd3aa}

LaTeX と連携するためのエクステンション．<br>
<strong>環境変数 PATH に [pstoedit](/pstoedit/), [dvisvgm](/dvisvgm/), [dvips](/dvips/), latex が存在するディレクトリが含まれていれば</strong> \[エクステンション(N)\] → \[レンダリング\] → \[LaTeX formula...\] から使用可能．<br>

[EqTeXSvg の公式サイト](http://www.julienvitard.eu/en/eqtexsvg_en.html)から最新版 (2011-05-17) をインストールしてください ([インストール](/Inkscape/#v77ed75c) を参照)．<br>
[Inkscape にデフォルトで含まれています](http://bazaar.launchpad.net/~inkscape.dev/inkscape/trunk/view/head:/share/extensions/eqtexsvg.py)が，バージョンが古く (2010-04-04)，正しく動作しません．<br>

- [Inkscape (Win)でLaTeX数式を使えるようにする](http://ohtsuka.cocolog-nifty.com/blog/2013/04/inkscape-winlat.html)
- [InkscapeでLaTexを使う](http://chiron.blog.ocn.ne.jp/astrocal/2012/09/inkscapelatex_1.html)
- [InkscapeでLaTexを使えるようにできたメモ](http://d.hatena.ne.jp/biost/20120302/1330660995)
- [Inkscape で LaTeX 数式を表示しようとするとエラーになる](http://d.hatena.ne.jp/nlogn/20120131/1327995778)

#### インストール (Windows) {#v77ed75c}

[TeX Live](</TeX Live/>) には dvisvgm, dvips, latex が含まれています．<br>
[W32TeX](/W32TeX/) には pstoedit, dvisvgm, dvips, latex が含まれています．<br>

***

TeX Live を使用している場合は [pstoedit](/pstoedit/) をダウンロード，インストールして pstoedit.exe のフォルダーに PATH を通します．

***

- [https://inkscape.org/en/download/](https://inkscape.org/en/download/)

から Inkscape 最新版をダウンロードして展開します．

展開したフォルダーを C:\inkscape と仮定します．別のフォルダーに展開した場合は読み替えてください．

***

[EqTeXSvg](http://www.julienvitard.eu/en/eqtexsvg_en.html) から eqtexsvg.zip をダウンロードします．

eqtexsvg.zip を展開し，eqtexsvg.inx, eqtexsvg.py を C:\inkscape\\\share\extensions にコピーして元々の eqtexsvg.inx, eqtexsvg.py を上書きします．

***

EqTeXSvg (LaTeX formula) は tempdir に inkscape-?????? フォルダーを作成しますが作成される inkscape-?????? フォルダーの親ディレクトリは

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

Inkscape を起動すると \[エクステンション(N)\] → \[レンダリング\] → \[LaTeX formula...\] が使用出来ます．<br>

#### 使用方法 {#se15d9b2}

- <strong>環境変数 PATH に pstoedit, dvisvgm, dvips, latex が存在するディレクトリが含まれていれば</strong> \[エクステンション(N)\] → \[レンダリング\] → \[LaTeX formula...\] から使用可能．

PATH を通しているのに LaTeX formula が表示されない場合は，まず PATH を確認します．<br>
Windows PowerShell の場合は

```
$Env:Path
```

コマンド プロンプトの場合は

```
path
```

を実行します．<br>
pstoedit, dvisvgm, dvips, latex が格納されているディレクトリが PATH に登録されていれば Windows PowerShell またはコマンド プロンプトから

```
.\inkscape
```

として Inkscape を起動してみてください．

***

<span style="color:#72C304;background-color:#72C304;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LaTeX formula</strong></span>　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　LaTeX formula: <ins>\\(\frac{\pi^2}{6}=\lim\_{n \to \infty}\sum\_{k=1}^n \frac{1}{k^2}\\)</ins><br>
　追加パッケージ(カンマ区切り)：<br>
　☐ Debug information<br>

<br>

　☑ ライブプレビュー<br>

***

デフォルトでは LaTeX formula は \\( ～ \\) となっているようです．

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

### [SVG2TikZ](https://github.com/kjellmf/svg2tikz) {#u5ee2f7d}

Inkscape 等で作成した SVG ファイルを TikZ のコードに変換するプログラムです．

### [JessyInk](https://launchpad.net/jessyink) {#k0206a78}

- [Inkscapeでプレゼンテーション](http://d.hatena.ne.jp/yambi/20110405/1301974923)

## Inkscape で TeX 数式 {#f9da7d32}

[TeX2img](/TeX2img/) (Windows/Mac) を使用して，TeX ソースから数式画像を EPS/PDF 形式でアウトライン化して出力するのが簡単です．
なお，TeX2img は数式以外の地の文や日本語も問題なく処理できます．

- [InkscapeでTeX数式](http://hooktail.org/computer/index.php?Inkscape%A4%C7TeX%BF%F4%BC%B0)
- [Inkscapeでtex数式を使う(数式はアウトラインに)](http://www.my-chicken-heart.com/2007/09/inkscapetex.html)
- [Latexの数式をsvgに](http://blog.livedoor.jp/les_paul_sp/archives/317234.html)
- [TeX, EPS, Inkscape for Win](http://researchmap.jp/jo8ju0xue-10163/#_10163)
- [PDFのトリミングとベクター画像抽出](http://acetaminophen.hatenablog.com/entry/2014/09/15/075714)

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
