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

最終的に PDF で出力するならば，Adobe Illustrator Artwork （拡張子 “.ai”）のままでも OK。
AI 形式は実質的に PDF なので，PDF 形式の図の挿入と同様に処理できる。
Ghostscript が呼び出されないので処理も高速。なお Adobe Illustrator Artwork （拡張子 “.ai”）、同 PDf （拡張子 “.pdf”）ファイルは，EPS 仕様と互換な bounding box 情報を内部に持っているので、通常は mediabb.sty の助けは不要。

例（hoge.ai を挿入）：

```
%%% -*- mode: yatex; Coding: iso-2022-jp; Encoding: ISO-2022-JP -*-
\documentclass{article}
\usepackage[dvipdfmx]{graphicx}
\usepackage{mediabb}
\DeclareGraphicsRule{.ai}{pdf}{*}{}
\begin{document}
\includegraphics{hoge.ai}
\end{document}
```

Adobe Illustrator CS (11.0.0) で作られたファイルで確認。

### トラブル {#id16611b}

Illustrator CS で CM フォントの数式が変になる [qa:27936](https://okumuralab.org/~okumura/texfaq/qa/27936.html) のスレッド（未解決）。

### 各バージョン {#u178a7b2}

- Illustrator CS5.1 (v.15.1)   2011年
- Illustrator CS5 (v.15)   2010年  (64ビット化は見送り，MacOSX では Cocoa 化の可能性）
- Illustrator CS4 (v.14)   2008年
- Illustrator CS3 (v.13)   2007年
- Illustrator CS2 (v.12)   2005年
- Illustrator CS   (v.11)   2003年  (OpenTypeにほぼ対応)
- Illustrator v.10   2001年  (MacOSX では PowerPCバイナリ)

情報等

- [http://ja.wikipedia.org/wiki/Adobe_Illustrator](http://ja.wikipedia.org/wiki/Adobe_Illustrator)
- [Illustrator CS4までの実用的な新機能講座](http://www.incunabula.co.jp/book/Illustcs4_newfun/)
- [Illustrator CS4の主要な新機能](http://www.dtp-transit.jp/adobe/illustrator/post_656.html)

### その他 {#a59267c4}

- [Illustrator用script](http://cms.phys.s.u-tokyo.ac.jp/~morimoto/programs/download.php)
    Illustrator CS で tex のコマンドをつかって数式を書くことのできる script

【参考情報】

- [チュートリアル/Illustratorの図をTeXに - MyTeXpert](http://mytexpert.sourceforge.jp/index.php?%A5%C1%A5%E5%A1%BC%A5%C8%A5%EA%A5%A2%A5%EB%2FIllustrator%A4%CE%BF%DE%A4%F2TeX%A4%CB)
