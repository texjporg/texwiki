---
title: "Illustrator"
url: "/Illustrator/"
date: 2004-09-22T23:32:16Z
pukiwiki: "Illustrator"
---

# Illustrator

## Adobe Illustrator {#w6d2965c}

[Adobe Illustrator](http://www.adobe.com/jp/products/illustrator/) 関連の
話題を書き込んでください。

<strong>目次</strong>

### リリース情報 {#u178a7b2}

- Illustrator CC 17.1.0 2014年

情報等

- [http://ja.wikipedia.org/wiki/Adobe_Illustrator](http://ja.wikipedia.org/wiki/Adobe_Illustrator)
- [Illustrator CC の新機能](http://helpx.adobe.com/jp/illustrator/using/whats-new.html)

### Illustrator の図を TeX に {#sa00c636}

#### ai/PDF 形式ファイル {#l3862bb1}

最終的に PDF で出力するならば，Adobe Illustrator Artwork （拡張子 “.ai”）のままで OK です。<br>
TeX Live 2014 以降, W32TeX では dvipdfmx で Adobe Illustrator Artwork （拡張子 “.ai”）がサポートされています。<br>
なお Adobe Illustrator の Artwork （拡張子 “.ai”）と同 PDF （拡張子 “.pdf”）ファイル（両者は実質的に同等）は，EPS 仕様型の bounding box 情報（描かれている図形ぴったりの矩形サイズの値）が内部に書き込まれています。<br>
TeX文書内への図の挿入は EPS ファイルの場合と同様に処理されます（[TeX入門/図表](</TeX入門/図表/>)も参照のこと）。<br> <!-- AI 形式は実質的に PDF なので，[[TeX入門/図表]]と同様に処理できる。Ghostscript が呼び出されないので処理も高速 -->

例（hoge.ai を挿入）：

dvipdfmx.def \[2014/04/28 v4.01 LaTeX color/graphics driver for dvipdfmx (TeX Live/ChoF)\] 以降にアップデートします．<br> <!-- .aiはPDFの一種なのでbmpsizeは無意味. -->

```
%%% -*- mode: yatex; Coding: utf-8; Encoding: UTF-8 -*-
\documentclass[uplatex]{jsarticle}
\usepackage[dvipdfmx]{graphicx}
\begin{document}
\includegraphics{hoge.ai}
\end{document}
```

Adobe Illustrator CC 17.1.0 で作られたファイルで確認。<br>

#### EPS 形式ファイル {#h86d212a}

Illustrator で EPS 保存したものを LaTeX に挿入する例：

```
%%% -*- mode: yatex; Coding: utf-8; Encoding: UTF-8 -*-
\documentclass[uplatex]{jsarticle}
\usepackage[dvips]{graphicx}
\begin{document}
\includegraphics[width=50mm,clip]{hoge.eps}
\end{document}
```

Illustrator で保存時の注意：

- プレビューを付けない（なるべく）
- サムネイルを付けない（Illustrator 7&ndash;10のバグのため不正な EPS になることがある）
- フォントを埋め込む

不正な EPS は，
[Tomas Rokicki](http://tomas.rokicki.com/)
の [Illustrator 7.0/8.0/9.0 BeginData Bug](http://tomas.rokicki.com/illbug/)
から “fixill.pl” を頂いてきて直す。<br>
次のようにして使う。<br>

```
$ fixill.pl <old.eps >new.eps
```

“fixill.pl” は Perl スクリプトであり，実行には Perl が必要。<br>
W32TeX なら [Strawberry Perl](http://strawberryperl.com/) をダウンロードしてインストールすればいいであろう。<br>
W32TeX の “dvipsk-w32.tar.xz” には “fixill.pl” と “fixill.exe” が含まれる。<br>

```
>fixill.exe <old.eps >new.eps
```

### トラブル {#id16611b}

Illustrator CS で CM フォントの数式が変になる [qa:27936](https://okumuralab.org/~okumura/texfaq/qa/27936.html), [qa:27942](https://okumuralab.org/~okumura/texfaq/qa/27942.html) のスレッド（未解決）。

### その他 {#a59267c4}

- [Illustrator用script](http://cms.phys.s.u-tokyo.ac.jp/~morimoto/programs/download.php)
    Illustrator CS で tex のコマンドをつかって数式を書くことのできる script
    - [ファイルダウンロード](http://www.ritsumei.ac.jp/se/~morimoto/files.html)

【参考情報】

- [IllustratorのAIファイルを直接LaTeXに貼り付ける](http://qiita.com/hayamiz/items/45ba4bd75b3898150180)
- \[[Illustrator\] - ちくちく日記](http://d.hatena.ne.jp/akane_neko/searchdiary?word=%2A%5BIllustrator%5D)
- [Illustrator で作った図を .ai ファイルのまま LaTeX に埋め込む](http://mkdir.g.hatena.ne.jp/ymrl/20121201/1354389731)
- [チュートリアル/Illustratorの図をTeXに - MyTeXpert](http://mytexpert.sourceforge.jp/index.php?%A5%C1%A5%E5%A1%BC%A5%C8%A5%EA%A5%A2%A5%EB%2FIllustrator%A4%CE%BF%DE%A4%F2TeX%A4%CB)
- [雑記 - tex](http://ult.riise.hiroshima-u.ac.jp/~nagato/?tex)
