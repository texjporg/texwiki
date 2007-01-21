---
title: "Illustrator"
url: "/Illustrator/"
date: 2004-09-22T23:32:16Z
pukiwiki: "Illustrator"
---

# Illustrator

## Adobe Illustrator {#w6d2965c}

Illustrator関連の話題を書き込んでください。

### Illustratorの図をTeXに {#sa00c636}

IllustratorでEPS保存したものをLaTeXに挿入する例：

```
\documentclass{...}
\usepackage[dvips]{graphicx}
\begin{document}
...
\includegraphics[width=50mm,clip]{hoge.eps}
...
\end{document}
```

Illustratorで保存時の注意：

- プレビューを付けない（なるべく）
- サムネイルを付けない（Illustrator 7〜10のバグのため不正なEPSになることがある）
- フォントを埋め込む

不正なEPSは，
[Tomas Rokicki](http://tomas.rokicki.com/)
の [Illustrator 7.0/8.0/9.0 BeginData Bug](http://tomas.rokicki.com/illbug/)
から fixill.pl をいただいてきて直す。
次のようにして使う。

```
fixill.pl <old.eps >new.eps
```

fixill.pl はPerlスクリプトであり，実行にはPerlが必要。
WindowsならCygwinを使うか，あるいは [ActiveState](http://www.activestate.com/)
からActivePerlをダウンロードしてインストールすればいいであろう。
角藤さんの dvipsk-w32.tar.gz には fixill.pl と fixill.exe が含まれる。

```
fixill <old.eps >new.eps
```

最終的にPDFで出力するならば、Adobe Illustrator Artwork (拡張子.ai)のままでもOK。
AI形式は実質的にPDFなので、PDF形式の図の挿入と同様に処理できる。
Ghostscriptが呼び出されないので処理も高速。

例(hoge.aiを挿入):

```
\documentclass{article}
\usepackage[dvipdfmx]{graphicx}
\usepackage{mediabb}
\begin{document}
\includegraphics{hoge.ai}
\end{document}
```

Adobe Illustrator CS (11.0.0)で作られたファイルで確認。

### トラブル {#id16611b}

Illustrator CS でCMフォントの数式が変になる [qa:27936](https://okumuralab.org/~okumura/texfaq/qa/27936.html) のスレッド（未解決）。

### そのほか {#a59267c4}

ご参考情報
「Illustratorの図をTeXに」- [http://tex.dante.jp/typo/index.php?plugin=related&page=Illustrator%A4%CE%BF%DE%A4%F2TeX%A4%CB](http://tex.dante.jp/typo/index.php?plugin=related&page=Illustrator%A4%CE%BF%DE%A4%F2TeX%A4%CB)
