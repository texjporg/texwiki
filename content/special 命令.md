---
title: "special 命令"
url: "/special 命令/"
date: 2015-11-02T01:48:02Z
pukiwiki: "special 命令"
---

# special 命令

## \special 命令 {#headline}

\special 命令とは，DVI ではサポートしていない，デバイス依存の命令を埋め込むための命令です。
各種図形・画像ファイルのとりこみ，ハイパーテキスト，ソースコードへのジャンプ，用紙サイズの埋め込みなどには全て special 命令が使用されています。

<!-- とりあえず基本的な説明を書くことにする． -->

***

***

### \special 命令とデバイス依存（ドライバ依存） {#device-independent}

元来，TeX による組版結果を記録するファイルは DVI (device-independent) という形式で，その名称の通り， DVI ファイルはデバイス非依存な一種のページ記述言語によるファイルでした。
しかし，TeX 自体は各種図形の描画，画像ファイルのとりこみ，ハイパーリンクなどの機能をもたないため，これらを実現したいという要求がありました。

TeX にはソース中に \special{...} という命令を書き込むと，TeX はそれを解釈せずにそのまま DVI ドライバ（出力デバイス）に受け渡すという機能があります。
この機能を利用し，出力デバイス側で描画やハイパーリンクなどの拡張機能を用意し，DVI ファイル中に埋め込まれた \special 命令を解釈させるという方法がとられるようになりました。
この手法のうち特に有用なものは多くが LaTeX パッケージ（[graphics(x)](/graphicx/)，(x)color，[hyperref](/hyperref/) など）としてまとめられ，一般ユーザにも広く用いられるようになりました。
とはいえ，さまざまな特殊効果を出すためにこれらの拡張機能を直接使いたい場合もあるでしょう。

こうした拡張が進んだ結果，いまどきのユーザは各種の \special を（意図的にあるいは暗黙のうちに） 使うことによって「デバイス依存」な DVI ファイルを作りがちになっています。
しかし，これらの \special 命令を用いて作成した DVI ファイルは，その命令を正しく解釈できるデバイスドライバ以外で正しく印刷することができないことに注意が必要です。

### 主な \special 命令の種類 {#specials-set}

非常に良く使われている \special 命令の例として，画像ファイルのとりこみや文字の拡大縮小・回転を行う [graphicx (graphics)](/graphicx/) パッケージ，文字や図形に色をつけるための (x)color パッケージがあります。
ほかにも，文書やページの設定を行う \special 命令もよく使われています。

大規模な \special コマンドセットでよく知られているものは，次のようなものが挙げられます。

#### PostScript specials {#ps-specials}

[PostScript](/PostScript/) の命令を直接 TeX ソース中に書き込み，多彩な描画表現を可能にするための special コマンドセットです。
これは PostScript 命令をヘッダの内容と組み合わせて解釈できる VTeX 等の ドライバや，組み合わせた PostScript 命令をその場で PostScript インタプリタに処理させられる xdvipdfmx 等のドライバ，あるいは PostScript を解釈せずに次の段階に受け渡す [dvips](/dvips/) 等のドライバを必要とします。
[PSTricks](/PSTricks/) パッケージで使われています。

#### HyperTeX specials {#hypertex-specials}

HTML ライクなハイパーリンクを可能にする special コマンドセットです。
[dvipdfmx](/dvipdfmx/)，[dvips](/dvips/) などの DVI ドライバでサポートされています。
[hyperref](/hyperref/) パッケージで使われています。

- 参考：[HyperTeX](/HyperTeX/)

#### TPIC specials {#tpic-specials}

簡単なフローチャートのような図を作成するためのプログラミング言語 pic を元にして作られた special コマンドセットです。
[dvips](/dvips/)，[dvipdfmx](/dvipdfmx/)，[dviout](/dviout/)，[xdvi](/xdvi/) 等の数多くの DVI ドライバでサポートされています。
一方で，DVI を扱わない pdfTeX では tpic 拡張機能がサポートされていません。
eepic や [Xy-pic](/Xy-pic/) などのパッケージが tpic specials を利用しています。

- 参考：[tpic (pic)](/pic/#xda9ac26)

#### src-specials {#src-specials}

TeX ソースのエディタと DVI ビューアとの間で，相互に対応部分にジャンプすることを目的に作られた special コマンドです。
[dviout](/dviout/) や [xdvi](/xdvi/) などの DVI ビューアが対応しています。
しかし，現在ではほかの多くのデバイス依存パッケージを利用するようになったことから，PDF まで出力してプレビューする方式が一般的となり，[SyncTeX](/SyncTeX/) に取って代わられました。

### dvipdfmx で用いることができる \special 命令 {#specials-dvipdfmx}

dvipdfmx は様々な special 拡張をサポートしています。
文書やページの設定を行うものとして

```
papersize landscape pdf:pagesize pdf:encrypt pdf:minorversion
```

など，dvips 由来のもの，HTML 形式のハイパーリンクなど様々です。
dvipdfm(x) 自身も独自の special による拡張機能を持ちます。
dvipdfm(x) 独自の機能を使う場合は，それにより他の DVI ドライバとの互換性を酷く損なうということに注意してください。

ここでは，LaTeX パッケージの機能以外でさまざまな特殊効果を出すために用いることができる \special 拡張機能を紹介します。

#### ページ設定（用紙サイズなど） {#specials-dvipdfmx-pagesettings}

landscape や papersize などの文書全体に影響するものは PDF への変換前にスキャンされ実行されます。

```
\special{landscape}
```

は用紙を横置きに，

```
\special{papersize=210mm,297mm}
```

は用紙サイズを 210mm × 297mm に設定します。

pagesize は文書の途中でも使えますが，これが実行されるタイミングによっては予期せぬ結果となります。
特にページがシャッフルされる時は意図したようにはなりません。

```
\special{pdf:pagesize width 210mm height 297mm}
```

のように使います。
[jsclasses](/jsclasses/) の papersize オプションは，DVI ファイルに papersize special を挿入することで用紙サイズを規定しています。

#### ファイルを添付 {#specials-dvipdfmx-annotate}

アノーテーション（注釈機能）でファイルを添付：

```
\special{pdf:fstream @fileobj (ファイル名をここに)}%
\special{pdf:ann width 5bp height 10bp
           << /Type /Annot
              /Subtype /FileAttachment
              /FS <<
                    /Type /Filespec
                    /F    (ファイル名をここに)
                    /EF   << /F @fileobj >>
                  >>
              /Name /Paperclip
              /C    [0.8 0.4 0.4]
              /T    (タイトルをここに)
           >>
         }%
```

上の例ではまず最初の special で外部ファイルを取り込み，それを fileobj と名付けます。
次の special で "添付ファイル" アノーテーションを作ります。
出来上がった PDF には小さなクリップが表示され，その上で右クリックするとメニューから添付ファイルを保存できるようになるはずです（ビューアによって操作は異なります）。
このようにして TeX のソースを埋め込んでおくこともできます。

#### PDF に描画・透かしを入れる {#specials-dvipdfmx-drawing}

ページの開始時に任意の PDF 描画コードを挿入することもできます：

```
\special{pdf:bop 0.4 0.4 0.6 rg 0 0 596 842 re 72 72 452 700 re f*}
```

これは余白の部分を塗りつぶします。
"bop" はページの開始時に指定された PDF 描画コードを埋め込みます。

ウォーターマーク（透かし）風のものを入れます：

```
\documentclass[]{article}
\usepackage{bophook}
\AtBeginDocument{
  \special{pdf:obj @Courier-Bold
    <<
      /Type /Font
      /Subtype /Type1
      /BaseFont /Courier-Bold
      /Encoding /WinAnsiEncoding
    >>
  }
  \special{pdf:bop BT 1 Tr /_Fn01 200 Tf
                   0.707 0.707 -0.707 0.707 72 216 Tm (Sample) Tj ET}
}
\AtBeginPage{
  \special{pdf:put @resources << /Font << /_Fn01 @Courier-Bold >> >>}
}
\begin{document}
Hello, world.
\end{document}
```

（bophook.sty が必要です）やや複雑な例です。
"obj" はオブジェクトを定義するコマンドでここでは Courier-Bold というフォントを定義しています。
"bop" はページの開始時に "Sample" という文字列を描画するように指示しています。
"put" の部分では resources で識別される辞書オブジェクト（ここではページリソース）に与えられたオブジェクトを追加します。
ここではフォントリソースに先ほど定義したフォント Courier-Bold を "\_Fn01" という名前で登録しています。

上の例ではページに直接 Sample という文字を書き込みましたがアノーテーションを使ってウォーターマークを入れることもできます。

#### dvipdfmx の \special 使用例のリンク {#specials-dvipdfmx-links}

- [dvipdfmx（谷村さん）](http://www2.hyo-med.ac.jp/~tanimura/LaTeX/dvipdfmx.html)：dvipdfm/dvipdfmx 用の \special の様々な使用例
