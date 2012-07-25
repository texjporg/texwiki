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

### Illustrator の図を TeX に {#sa00c636}

#### EPS 形式ファイル {#h86d212a}

Illustrator で EPS 保存したものを LaTeX に挿入する例：

```
%%% -*- mode: yatex; Coding: iso-2022-jp; Encoding: ISO-2022-JP -*-
\documentclass{...}
\usepackage[dvips]{graphicx}
\begin{document}
...
\includegraphics[width=50mm,clip]{hoge.eps}
...
\end{document}
```

Illustrator で保存時の注意：

- プレビューを付けない（なるべく）
- サムネイルを付けない（Illustrator 7&ndash;10のバグのため不正な EPS になることがある）
- フォントを埋め込む

不正な EPS は，
[Tomas Rokicki](http://tomas.rokicki.com/)
の [Illustrator 7.0/8.0/9.0 BeginData Bug](http://tomas.rokicki.com/illbug/)
から “fixill.pl” を頂いてきて直す。
次のようにして使う。

```
$ fixill.pl <old.eps >new.eps
```

“fixill.pl” は Perl スクリプトであり，実行には Perl が必要。
Microsoft Windows なら [Strawberry Perl](http://strawberryperl.com/) を使うか，あるいは [ActiveState](http://www.activestate.com/)
から ActivePerl をダウンロードしてインストールすればいいであろう。
角藤さんの “dvipsk-w32.tar.xz” には “fixill.pl” と “fixill.exe” が含まれる。

```
>fixill.exe <old.eps >new.eps
```

#### ai/PDF 形式ファイル {#l3862bb1}

最終的に PDF で出力するならば，Adobe Illustrator Artwork （拡張子 “.ai”）のままでも OK。<br>
なお Adobe Illustrator の Artwork （拡張子 “.ai”）と同 PDF （拡張子 “.pdf”）ファイル（両者は実質的に同等）は，EPS 仕様型の bounding box 情報が内部に書き込まれており（描かれている図形ぴったりの矩形サイズの値）、TeX文書内への図の挿入は EPS ファイルの場合と同様に処理される（[TeX入門/図表](</TeX入門/図表/>)も参照のこと）。通常は mediabb.sty 等の助けは不要。<br> <!-- 従って、TeX文書内への図の挿入は EPS ファイルの場合と同様に処理される（[[TeX入門/図表]]も参照のこと）。 --> <!-- AI 形式は実質的に PDF なので，[[TeX入門/図表]]と同様に処理できる。Ghostscript が呼び出されないので処理も高速 -->

例（hoge.ai を挿入）：

```
%%% -*- mode: yatex; Coding: iso-2022-jp; Encoding: ISO-2022-JP -*-
\documentclass{article}
\usepackage[dvipdfmx]{graphicx}
\usepackage{mediabb} % 通常は不要
\DeclareGraphicsRule{.ai}{pdf}{*}{}
\begin{document}
\includegraphics{hoge.ai}
\end{document}
```

Adobe Illustrator CS (11.0.0) で作られたファイルで確認。

### トラブル {#id16611b}

Illustrator CS で CM フォントの数式が変になる [qa:27936](https://okumuralab.org/~okumura/texfaq/qa/27936.html) のスレッド（未解決）。

### 各バージョン {#u178a7b2}

- Illustrator CS6 (v.16)   2012年
- Illustrator CS5.1 (v.15.1)   2011年
- Illustrator CS5 (v.15)   2010年  (64ビット化は見送り，MacOSX では Cocoa 化の可能性）
- Illustrator CS4 (v.14)   2008年
- Illustrator CS3 (v.13)   2007年
- Illustrator CS2 (v.12)   2005年
- Illustrator CS   (v.11)   2003年  (OpenTypeにほぼ対応)
- Illustrator v.10   2001年  (MacOSX では PowerPCバイナリ)

情報等

- [http://ja.wikipedia.org/wiki/Adobe_Illustrator](http://ja.wikipedia.org/wiki/Adobe_Illustrator)
- [入出力ファイル対応形式 （Illustrator CS6）](http://kb2.adobe.com/jp/cps/936/cpsid_93632.html)
- [Illustrator CS5の新機能／差異](http://www.dtp-transit.jp/adobe/illustrator/post_1090.html)
- [Illustrator CS4の主要な新機能](http://www.dtp-transit.jp/adobe/illustrator/post_656.html)
- [Illustrator CS4までの実用的な新機能講座](http://www.incunabula.co.jp/book/Illustcs4_newfun/)

### その他 {#a59267c4}

- [Illustrator用script](http://cms.phys.s.u-tokyo.ac.jp/~morimoto/programs/download.php)
    Illustrator CS で tex のコマンドをつかって数式を書くことのできる script
    - [ファイルダウンロード](http://www.ritsumei.ac.jp/se/~morimoto/files.html)

【参考情報】

- [チュートリアル/Illustratorの図をTeXに - MyTeXpert](http://mytexpert.sourceforge.jp/index.php?%A5%C1%A5%E5%A1%BC%A5%C8%A5%EA%A5%A2%A5%EB%2FIllustrator%A4%CE%BF%DE%A4%F2TeX%A4%CB)
