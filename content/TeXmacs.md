---
title: "TeXmacs"
url: "/TeXmacs/"
date: 2013-02-19T19:22:45Z
pukiwiki: "TeXmacs"
---

# TeXmacs

## [TeXmacs](http://www.texmacs.org/) {#xae4dfa5}

- [Welcome to GNU TeXmacs (FSF GNU project)](http://www.texmacs.org/)
- [TeXmacs home page (FSF GNU project)](http://www.math.u-psud.fr/~anh/TeXmacs/TeXmacs.html)
- [CTAN:help/Catalogue/entries/texmacs.html](https://mirror.ctan.org/help/Catalogue/entries/texmacs.html)

### 動作環境 {#y75432ed}

Windows, OS X, Linux

### License {#s04f486d}

[GPLv3](http://svn.savannah.gnu.org/viewvc/trunk/src/LICENSE?view=markup&root=texmacs)

## 不具合 {#lc42b494}

### OS X の TeXmacs で，文字コードが UTF-8 の場合に Backslash (U+005C) が入力できず 円記号 (U+00A5) になってしまう → [KeyRemap4MacBook](http://pqrs.org/macosx/keyremap4macbook/index.html.ja) で Backslash が優先されるようにキーバインドを変更する {#i1c257a6}

- [Ubuntu日本語フォーラム / texmacs で　&quot;\\&quot;(backslash)の入力ができません．](https://forums.ubuntulinux.jp/viewtopic.php?id=13561)

OS X の Qt アプリケーションで Backslash (U+005C) が 円記号 (U+00A5) に変換されるバグがあるようです．→ [Backslash is converted to YEN SIGN on Qt for Mac with JIS keyboard.](https://bugreports.qt-project.org/browse/QTBUG-10543)<br>
[KeyRemap4MacBook](http://pqrs.org/macosx/keyremap4macbook/index.html.ja) で Backslash が優先されるようにキーバインドを変更するといいようです．<br>

***

<span style="color:Black;background-color:#CCCCCC;">　<span style="color:#DD0000;background-color:#CCCCCC;">●</span> <span style="color:#DDDD00;background-color:#CCCCCC;">●</span> <span style="color:#DDDDDD;background-color:#CCCCCC;">●</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<strong>KeyRemap4MacBook</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span><br>

<span style="color:Black;background-color:#CCCCCC;"><ins>　<span style="color:Black;background-color:#EEEEEE;"></ins>\[ ◀ \]<ins></span><span style="color:Gray;background-color:#EEEEEE;"></ins>\[ ▶ \]<ins></span>　<span style="color:Black;background-color:#EEEEEE;"></ins>\[　すべてを表示　\]<ins></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#FAFAFA;">(</ins>　　　　　　　　　　　　　　　　　<ins>)</span> 　</ins></span><br>

<br>

　　　　　　　　　　　　　　<ins><span style="color:#F1F1F1;background-color:#555555;"><span style="color:#555555;">\[</span>　<strong>Change Key</strong>　<span style="color:#555555;">\]</span></span><span style="color:Black;background-color:#EEEEEE;">\[　<strong>Key Repeat</strong>　\]\[　<strong>MenuBar</strong>　\]\[　<strong>Misc &amp; Uninstall</strong>　\]</span></ins><br>
　　　<span style="color:Black;background-color:#FAFAFA;">(<ins>　　　　　　　　　　　　　　　　　　　　　　　　　</ins>)</span>　　☐ Show enabled only (1 item)　　　　<ins>\[ <strong>↻</strong> ReloadXML \]</ins><br>
　　　remapping<br>
　　　　　▼Change Yen(￥) Key<br>
　　　　　　　<span style="color:Black;background-color:#9FCFFB;">☑</span> JIS Yen(￥) to Backslash(＼)<br>
　　　　　　　　　　(except virtual machine, X11, RDC)<br>

***

## 関連リンク {#id8a740a}

- [GNU TeXmacsのすすめ](http://mlog.euqset.org/archives/debian-users/50974.html)
