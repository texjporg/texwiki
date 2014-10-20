---
title: "Karabiner"
url: "/Karabiner/"
date: 2014-07-13T11:38:45Z
pukiwiki: "Karabiner"
---

# Karabiner

## Karabiner {#oad54c3b}

Karabiner はキーボードカスタマイズツールです．<br>

- [Karabiner - OS X用のソフトウェア](https://pqrs.org/osx/karabiner/index.html.ja)

### 動作環境 {#heaf4daa}

OS X

### License {#qb66f01c}

[Public Domain](https://github.com/tekezo/Karabiner/blob/master/COPYING)

### ChangeLog {#i8edb00b}

- [https://github.com/tekezo/Karabiner](https://github.com/tekezo/Karabiner)
    - [https://github.com/tekezo/Karabiner/commits/master](https://github.com/tekezo/Karabiner/commits/master)

## 使い方 {#g3053829}

### キーバインドの変更 {#j490b288}

OS X の Qt アプリケーションで [Backslash](https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%83%E3%82%AF%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5) (U+005C) が [円記号](https://ja.wikipedia.org/wiki/%E5%86%86%E8%A8%98%E5%8F%B7) (U+00A5) に変換されるバグがあるようです．→ [Backslash is converted to YEN SIGN on Qt for Mac with JIS keyboard.](https://bugreports.qt-project.org/browse/QTBUG-10543)<br>
Karabiner で Backslash が優先されるようにキーバインドを変更すると不具合を回避できるそうです．<br>

***

<span style="color:#595857;background-color:#DFDFDF;"><ins>　<span style="color:#FF0000;background-color:#DFDFDF;">●</span> <span style="color:#FFD700;background-color:#DFDFDF;">●</span> <span style="color:#C9C9C9;background-color:#DFDFDF;">●</span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　<strong>Karabiner</strong>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</ins></span><br>

　　　　<ins><span style="color:#F1F1F1;background-color:#0F7FFF;"><span style="color:#0F7FFF;">\[</span>　<strong>Change Key</strong>　<span style="color:#0F7FFF;">\]</span></span><span style="color:Black;background-color:White;">\[　<strong>Key Repeat</strong>　\]\[　<strong>Status Message</strong>　\]\[　<strong>MenuBar</strong>　\]\[　<strong>AXNotifier</strong>　\]\[　<strong>Misc &amp; Uninstall</strong>　\]</span></ins><br>
　　　　<span style="color:Black;background-color:#FAFAFA;">\[<ins>&#x1f50d; Change Yen　　　　　　　　　　　　　　　　　　</ins>\]</span>　　☐ Show enabled only (1 item)　　　　　　　<ins>\[ <strong>↻</strong> ReloadXML \]</ins><br>
　　　　remapping<br>
　　　　<span style="color:#595857;">▼</span>For Japanese<br>
　　　　　　<span style="color:#595857;">▼</span>Change Yen(￥) Key<br>
　　　　　　　　　<span style="color:White;background-color:#0F7FFF;">☑</span> JIS Yen(￥) to Backslash(＼)<br>
　　　　　　　　　　　　(except virtual machine, X11, RDC)<br>

***
