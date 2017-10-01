---
title: "Karabiner"
url: "/Karabiner/"
date: 2014-07-13T11:38:45Z
pukiwiki: "Karabiner"
---

# Karabiner

## Karabiner {#oad54c3b}

Karabiner は OS X （〜El Capitan）用のキーボードカスタマイズツールです．

- [Karabiner - Software for macOS](https://pqrs.org/osx/karabiner/)
    Sierra 以降の OS X では Karabiner は動作せず、Karabiner-Elements を使用することになります．ただし，Sierra 以降の OS X の制約により， <strong> [円記号](https://ja.wikipedia.org/wiki/%E5%86%86%E8%A8%98%E5%8F%B7) (U+00A5) &lt;-> [Backslash](https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%83%E3%82%AF%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5) (U+005C)の交換は Karabiner-Elements ではできません</strong>．そのようなキーバインドの変更には [Hammerspoon](http://www.hammerspoon.org) などのツールが必要です．

### 使い方 {#g3053829}

#### キーバインドの変更（Karabiner-Elements） {#s5d572d9}

- [https://pqrs.org/osx/karabiner/complex_modifications/json/exchange_underscore_and_backslash.json](https://pqrs.org/osx/karabiner/complex_modifications/json/exchange_underscore_and_backslash.json)
- [Karabiner-Elementsでアンダースコアをバックスラッシュへ変換](http://koodzy.hatenadiary.jp/entry/2017/09/19/010447)

#### キーバインドの変更（Karabiner 10） {#j490b288}

macOS の Qt アプリケーションで [Backslash](https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%83%E3%82%AF%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5) (U+005C) が [円記号](https://ja.wikipedia.org/wiki/%E5%86%86%E8%A8%98%E5%8F%B7) (U+00A5) に変換されるバグがあるようです．

- [Backslash is converted to YEN SIGN on Qt for Mac with JIS keyboard.](https://bugreports.qt.io/browse/QTBUG-10543)

Karabiner 10 で Backslash が優先されるようにキーバインドを変更すると不具合を回避できます．

> [![](/attach/Karabiner/Karabiner-bs.png)](/attach/Karabiner/Karabiner-bs.png)

#### License {#qb66f01c}

[Public Domain](https://github.com/tekezo/Karabiner-Elements/blob/master/LICENSE.md)

#### ChangeLog {#i8edb00b}

- [https://github.com/tekezo/Karabiner-Elements](https://github.com/tekezo/Karabiner-Elements)
    - [https://github.com/tekezo/Karabiner-Elements/commits/master](https://github.com/tekezo/Karabiner-Elements/commits/master)
