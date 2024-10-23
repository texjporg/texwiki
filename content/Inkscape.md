---
title: "Inkscape"
url: "/Inkscape/"
date: 2011-04-27T18:53:11Z
pukiwiki: "Inkscape"
---

# Inkscape

## [Inkscape](https://inkscape.org/) {#ycda5b1e}

***

***

## Inkscape とは {#v6fd1815}

Inkscape はベクターグラフィックエディタ (SVG エディタ) です．

<table>
<tbody>
<tr><td style="color:#FFF;background-color:#7C0"><strong>入力</strong></td><td style="color:#FFF;background-color:#7C0"><strong>インポート可能な形式</strong></td><td style="color:#FFF;background-color:#7C0"><strong>出力</strong></td></tr>
<tr><td>SVG, PDF</td><td>EPS, PS</td><td>SVG, PDF, EPS, PS, ODG</td></tr>
</tbody>
</table>

[PostScript や EPS をインポートするには、Ghostscript をインストールする必要があり、ps2pdf が環境変数 Path 上になければなりません。](https://inkscape.org/ja/learn/faq-ja/#how-open-eps-files-windows)

- [Inkscape 公式サイト](https://inkscape.org/)
- [Inkscape 開発サイト](https://gitlab.com/inkscape/inkscape)
    - [コミットログ](https://gitlab.com/inkscape/inkscape/commits/master)
    - [よくある質問 | Inkscape](https://inkscape.org/ja/learn/faq-ja/)
- [Inkscape Wiki](http://wiki.inkscape.org)
    - [Tools](http://wiki.inkscape.org/wiki/index.php/Tools)
    - [Extension repository](http://wiki.inkscape.org/wiki/index.php/ExtensionsRepository)

### 動作環境 {#a70b2acc}

Windows, macOS, Linux

### License {#ibc5e002}

[GPLv2 or later (GIMP からコピーしたファイルに関しては GPLv3 or later)](https://gitlab.com/inkscape/inkscape/blob/master/COPYING)

### リリース情報 {#d961699f}

[最新ニュース](https://inkscape.org/ja/news/)を参照．

### ChangeLog {#q8a7ad68}

[コミットログ](https://gitlab.com/inkscape/inkscape/commits/master)

## ダウンロード {#i5a8dfd7}

- [https://inkscape.org/ja/release/](https://inkscape.org/ja/release/)

## 不具合 {#caadafb3}

- [https://gitlab.com/inkscape/inkscape/issues](https://gitlab.com/inkscape/inkscape/issues)

## SVG/PowerPoint → PDF/EPS {#ha8334f6}

- [PowerPointの図からInkscapeで余白のないPDFとEPSファイルを作成する方法](https://note.com/assistdev/n/nbdce484a091f)
- [Inkscapeを使ってPowerPoint図をEPS画像に変換する](https://catdance124.hatenablog.jp/entry/2020/11/02/102253)

## PDF/EPS/PS + LaTeX {#d6b72996}

- [Inkscape Wiki](http://wiki.inkscape.org)
    - [LaTeX - Inkscape Wiki](http://wiki.inkscape.org/wiki/index.php/LaTeX)
        - [Release notes/0.92 - Inkscape Wiki#Export PDF / EPS / PS](http://wiki.inkscape.org/wiki/index.php/Release_notes/0.92#Export_PDF_.2F_EPS_.2F_PS)
        - [Release notes/0.91 - Inkscape Wiki#PDF/EPS/PS + LaTeX](http://wiki.inkscape.org/wiki/index.php/Release_notes/0.91#PDF.2FEPS.2FPS_.2B_LaTeX)
        - [Release notes/0.48 - Inkscape Wiki#New LaTeX export for PDF/EPS/PS](http://wiki.inkscape.org/wiki/index.php/Release_notes/0.48#New_LaTeX_export_for_PDF.2FEPS.2FPS)

Inkscape は PDF, EPS, PS ファイルで保存する場合に PDF, EPS, PS のテキストを除外して LaTeX ファイルを生成できます．

> <span style="color:#72C304;background-color:#72C304;"><ins>        <span style="color:Black;"><strong>Portable Document Format</strong></span>       <span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>
>
>  PDF バージョン制限 <ins> PDF 1.5               \[ <strong>ᐯ</strong> \]</ins><br>
>  テキスト出力オプション：  ◯ フォントを埋め込む<br>
>             ◯ テキストをパスに変換<br>
>             🔘 PDF のテキストを除外して LaTeX ファイルを生成<br>
>   ☑ フィルターエフェクトをラスタライズする<br>
>  ラスタライズ解像度 (dpi)：　　　　　　　　　　　　　　　　　　　　　　<ins>90 \[<strong>⇕</strong>\]</ins><br>
>  丸め補正：　　　　🔘 丸目を補正（推奨）<br>
>             ◯ 補正しない<br>
>
> <br>
>
>  「エクスポート」ダイアログからエクスポートする場合、エクスポートするオブジェクト<br>
>  を選択できます。「コピーを保存」/「名前を付けて保存」を選択すると、すべて<br>
>  のページがエクスポートされます。<br>
>
> <br>
>
>  ページブリードはページツールで設定可能です。<br>

> <span style="color:#72C304;background-color:#72C304;"><ins>　　　　　　　　　　　　　<span style="color:Black;"><strong>Encapsulated PostScript</strong></span>　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>
>
>  PS レベル制限 <ins> PostScript level 3             \[ <strong>ᐯ</strong> \]</ins><br>
>  テキスト出力オプション：  ◯ フォントを埋め込む<br>
>             ◯ テキストをパスに変換<br>
>             🔘 PDF のテキストを除外して LaTeX ファイルを生成<br>
>   ☑ フィルターエフェクトをラスタライズする<br>
>  ラスタライズ解像度 (dpi)：　　　　　　　　　　　　　　　　　　　　　　<ins>90 \[<strong>⇕</strong>\]</ins><br>
>
> <br>
>
>  「エクスポート」ダイアログからエクスポートする場合、エクスポートするオブジェクト<br>
>  を選択できます。「コピーを保存」/「名前を付けて保存」を選択すると、すべて<br>
>  のページがエクスポートされます。<br>
>
> <br>
>
>  ページブリードはページツールで設定可能です。<br>

> <span style="color:#72C304;background-color:#72C304;"><ins>　　　　　　　　　　　　　　　　　 <span style="color:Black;"><strong>PostScript</strong></span> 　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>
>
>  PS レベル制限 <ins> PostScript level 3             \[ <strong>ᐯ</strong> \]</ins><br>
>  テキスト出力オプション：  ◯ フォントを埋め込む<br>
>             ◯ テキストをパスに変換<br>
>             🔘 PDF のテキストを除外して LaTeX ファイルを生成<br>
>   ☑ フィルターエフェクトをラスタライズする<br>
>  ラスタライズ解像度 (dpi)：　　　　　　　　　　　　　　　　　　　　　　<ins>90 \[<strong>⇕</strong>\]</ins><br>
>
> <br>
>
>  「エクスポート」ダイアログからエクスポートする場合、エクスポートするオブジェクト<br>
>  を選択できます。「コピーを保存」/「名前を付けて保存」を選択すると、すべて<br>
>  のページがエクスポートされます。<br>
>
> <br>
>
>  ページブリードはページツールで設定可能です。<br>

コマンドラインから PDF, EPS, PS のテキストを除外して LaTeX ファイルを出力することも可能です．

- [https://inkscape.org/nl/forums/questions/what-happened-to-save-as-pdf-tex/](https://inkscape.org/nl/forums/questions/what-happened-to-save-as-pdf-tex/)

Windows の場合

```
inkscape.com --export-type=pdf --export-latex file.svg
inkscape.com --export-type=eps --export-latex file.svg
inkscape.com --export-type=ps --export-latex file.svg
```

macOS, Linux の場合

```
inkscape --export-type=pdf --export-latex file.svg
inkscape --export-type=eps --export-latex file.svg
inkscape --export-type=ps --export-latex file.svg
```

## svg – Include and extract SVG pictures in LaTeX documents {#p2c351e1}

- [svg](https://ctan.org/pkg/svg)
    - \[[LaTeX\] svg --- LaTeX文書にSVG画像を含める方法](http://konoyonohana.blog.fc2.com/blog-entry-432.html)

## エクステンション {#s696e33c}

### LaTeX (pdflatex) {#w6edd3aa}

pdflatex を実行して数式を埋め込むエクステンション．
Inkscape に標準で収録されています．

- [https://gitlab.com/inkscape/extensions/blob/master/pdflatex.inx](https://gitlab.com/inkscape/extensions/blob/master/pdflatex.inx)
- [https://gitlab.com/inkscape/extensions/blob/master/pdflatex.py](https://gitlab.com/inkscape/extensions/blob/master/pdflatex.py)

#### 動作環境 {#z851d64f}

Windows 10 Pro バージョン 1909 x64、Inkscape 1.0 x64 with Python 3.8.2、TeX Live 2020 win32 版で動作することを確認しています。

macOS では Finder からダブルクリックで Inkscape を実行するとグレーアウトされて動作しないようですが、Terminal から Inkscape を実行すると動作するようです。--&gt; [Mac版Inkscape1.0のpdflatex](https://okumuralab.org/tex/mod/forum/discuss.php?d=2849) <!-- macOS ではグレーアウトされて動作しないようですが、TexText が動作するので問題ないようです。- -&gt; [[Inkscape ver.1.0では LaTeX (pdflatex)のレンダリングは 出来ない？>forum:2844]], [[「Inkscape グレーアウト問題は解決」の報告フォーマットに関して>forum:2845]], [[Inkscape Can not find the command 'pdflatex'>forum:2847]], [[Can not find the command &#39;pdflatex&#39; (#1221) · Issues · Inkscape / Inbox · GitLab:https://gitlab.com/inkscape/inbox/issues/1221]] -->

Linux の AppImage 版ではグレーアウトはしませんが Debian GNU/Linux 10 (Buster) で動作に失敗するようです。--&gt; [Re: Inkscape ver.1.0では LaTeX (pdflatex)のレンダリングは 出来ない。](https://okumuralab.org/tex/mod/forum/discuss.php?d=2844%23p16693)

#### 使用方法 {#se15d9b2}

\[エクステンション(N)\] &gt; \[レンダリング\] &gt; \[Mathmatics\] &gt; \[LaTeX (pdflatex)...\] を選択．

> <span style="color:#72C304;background-color:#72C304;"><ins>　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>LaTeX (pdflatex)</strong></span>　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>🗙</strong></span> \]<ins></span></ins></span><br>
>
> 　LaTeX Input: <ins>\\(\displaystyle\frac{\pi^2}{6}=\lim\_{n \to \infty}\sum\_{k=1}^n \frac{1}{k^2}\\)</ins><br>
> 　Additional packages(comma-separated)：<br>
>
> <br>
>
> 　☑ ライブプレビュー<br>

### [TexText](https://github.com/textext/textext) {#l1a0873e}

Inkscape で LaTeX のグラフィックスを埋め込むエクステンション．再編集可能．

- [https://github.com/textext/textext](https://github.com/textext/textext)
- [https://textext.github.io/textext/](https://textext.github.io/textext/)

#### インストール {#j75ce7d3}

- [https://textext.github.io/textext/index.html#installation-toc](https://textext.github.io/textext/index.html#installation-toc)
- [FYI：Mac版TeXTextのインストール](https://okumuralab.org/tex/mod/forum/discuss.php?d=2842)

#### 使用方法 {#fce319ec}

- [https://textext.github.io/textext/index.html#usage-toc](https://textext.github.io/textext/index.html#usage-toc)

### SVG2TikZ, svg2tikz {#u5ee2f7d}

Inkscape 等で作成した SVG ファイルを TikZ のコードに変換するプログラムです．

- [SVG2TikZ](https://github.com/kjellmf/svg2tikz)
- [svg2tikz](https://github.com/paaguti/svg2tikz)
- [SVG を TikZ ソースに変換する Docker コンテナを作る](https://qiita.com/doraTeX/items/4d48e86cf3fc6f2ae132)

### svg2pdf {#g07406d0}

- [https://github.com/yambi/bin/blob/master/svg2pdf](https://github.com/yambi/bin/blob/master/svg2pdf)
- [続・Inkscape SVG の各レイヤを PDF にエクスポートする](http://empitsu.hatenablog.com/entry/2013/02/06/205135)
- [Inkscapeでプレゼンテーション（jessyinkなし）](http://yambi.hatenablog.com/entry/20140211/1392110852)

### [JessyInk](https://launchpad.net/jessyink) {#k0206a78}

- [Inkscapeでプレゼンテーション](https://yambi.hatenablog.com/entry/20110405/1301974923)

## Inkscape で TeX 数式 {#f9da7d32}

[TeX2img](/TeX2img/) (Windows/Mac) を使用して，TeX ソースから数式画像を PDF/EPS 形式でアウトライン化して出力するのが簡単です．
なお，TeX2img は数式以外の地の文や日本語も問題なく処理できます．

- [InkscapeでTeX数式](http://hooktail.org/computer/index.php?Inkscape%A4%C7TeX%BF%F4%BC%B0)
- [Inkscapeでtex数式を使う(数式はアウトラインに)](http://www.my-chicken-heart.com/2007/09/inkscapetex.html)
- [Latexの数式をsvgに](http://blog.livedoor.jp/les_paul_sp/archives/317234.html)
- [PDFのトリミングとベクター画像抽出](http://acetaminophen.hatenablog.com/entry/2014/09/15/075714)

## 関連リンク {#l46f1d34}

- [InkscapeでDesign](http://inkscapedesign.web.fc2.com/)
- [Inkscaper ～Inkscapeの使い方～](http://logo.dollsent.jp/)
- [Wikipedia.ja:Inkscape](https://ja.wikipedia.org/wiki/Inkscape)
- [Wikibooks.ja:Inkscape](https://ja.wikibooks.org/wiki/Inkscape)
- [Inkscape - 窓の杜ライブラリ](http://www.forest.impress.co.jp/library/software/inkscape/)
- [Beamerscape](https://github.com/jbohren/beamerscape)
