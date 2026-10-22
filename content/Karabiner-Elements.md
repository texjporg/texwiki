---
title: "Karabiner-Elements"
url: "/Karabiner-Elements/"
date: 2021-09-04T13:22:53Z
pukiwiki: "Karabiner-Elements"
---

# Karabiner-Elements

## Karabiner-Elements, Karabiner {#oad54c3b}

Karabiner-Elements と Karabiner は macOS 用のキーボードカスタマイズツールです．

- [Karabiner-Elements](https://karabiner-elements.pqrs.org/)

### 注意点 {#ofc2fe00}

Sierra 以降の macOS では Karabiner は動作せず、Karabiner-Elements を使用します．ただし，Sierra 以降の macOS の制約により， <strong> [円記号](https://ja.wikipedia.org/wiki/%E5%86%86%E8%A8%98%E5%8F%B7) (U+00A5) &lt;-> [Backslash](https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%83%E3%82%AF%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5) (U+005C)の交換は Karabiner-Elements ではできるかもしれないしできないかもしれません</strong>．Karabiner-Elements でキーバインドの変更ができない場合は [Hammerspoon](http://www.hammerspoon.org) などのツールを使用すればできるようです．

### 使い方 {#g3053829}

#### キーバインドの変更（Karabiner-Elements） {#s5d572d9}

- [https://ke-complex-modifications.pqrs.org/#swap_yen_and_backslash_jis](https://ke-complex-modifications.pqrs.org/#swap_yen_and_backslash_jis)
- [https://ke-complex-modifications.pqrs.org/json/swap_yen_and_backslash_jis.json](https://ke-complex-modifications.pqrs.org/json/swap_yen_and_backslash_jis.json)
- [TeX打ちの最高環境を構築したい](https://ddd3h.github.io/posts/2022-09-13/)
- [M1 Macでバックスラッシュを打つ](https://qiita.com/nekoko/items/ad0c6d36cbe7d7ac36f4)
- [【エンジニア必見】Macでのバックスラッシュ2つの入力方法](https://q3task.com/mac_backslash/)
- [JIS配列のMacで、バックスラッシュをさくっと入力する方法(JetBrainsのIDE対応)](https://qiita.com/kunit/items/f6ec7e159d93002bfc48)

#### キーバインドの変更（Karabiner） {#j490b288}

macOS の Qt アプリケーションで [Backslash](https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%83%E3%82%AF%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5) (U+005C) が [円記号](https://ja.wikipedia.org/wiki/%E5%86%86%E8%A8%98%E5%8F%B7) (U+00A5) に変換されるバグがあるようです．

- [Backslash is converted to YEN SIGN on Qt for Mac with JIS keyboard.](https://bugreports.qt.io/browse/QTBUG-10543)

Karabiner で Backslash が優先されるようにキーバインドを変更すると不具合を回避できます．

> ![](/)

#### License {#qb66f01c}

[Public Domain](https://github.com/tekezo/Karabiner-Elements/blob/master/LICENSE.md)

#### ChangeLog {#i8edb00b}

- [https://github.com/tekezo/Karabiner-Elements](https://github.com/tekezo/Karabiner-Elements)
    - [https://github.com/tekezo/Karabiner-Elements/commits/master](https://github.com/tekezo/Karabiner-Elements/commits/master)
