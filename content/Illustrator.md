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

### トラブル {#id16611b}

Illustrator CS でCMフォントの数式が変になる [qa:27936](https://okumuralab.org/~okumura/texfaq/qa/27936.html) のスレッド（未解決）。
