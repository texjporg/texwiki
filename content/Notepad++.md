---
title: "Notepad++"
url: "/Notepad++/"
date: 2012-03-28T01:34:37Z
pukiwiki: "Notepad++"
---

# Notepad++

## [Notepad++](https://notepad-plus-plus.org/) {#m5f7816e}

***

***

<div style="clear:both"></div>

## Notepad++ とは {#ife0659c}

Notepad++ はテキストエディタです。
Notepad++ のデフォルトの Encoding は UTF-8（BOMなし）です。

Notepad++ 7.5 (2017-08-16) で LaTeX のサポートが追加されました。

- [Add new languages support](https://github.com/notepad-plus-plus/notepad-plus-plus/commit/02bdd11700e6fb225157aa59f1f5f1a453865cee)
- [「Notepad++」v7.5が公開、“LaTeX”や“Rust”、“Erlang”など19言語をサポート](http://forest.watch.impress.co.jp/docs/news/1076002.html)

Notepad++ は

- LaTeX キーワードの色分け
- LaTeX キーワードの補完機能
- 折りたたみ

をサポートしています。

- [Notepad++ 公式サイト](https://notepad-plus-plus.org/)
    - [Download](https://notepad-plus-plus.org/download/)
    - [X](https://x.com/notepad_plus)
    - [facebook](https://www.facebook.com/Notepad.plus.plus)
- [Notepad++ 開発サイト](https://github.com/notepad-plus-plus/notepad-plus-plus)

### 動作環境 {#p5d7567d}

Windows

### License {#p3f91661}

[GPLv3](https://github.com/notepad-plus-plus/notepad-plus-plus/blob/master/LICENSE)

### リリース情報/ChangeLog {#q10cf331}

- [News](https://notepad-plus-plus.org/news/)
- [Releases](https://github.com/notepad-plus-plus/notepad-plus-plus/releases)
- [コミットログ](https://github.com/notepad-plus-plus/notepad-plus-plus/commits/master)

### 派生版 {#l02b5ab5}

#### Notepad Next {#n8f98be2}

Notepad Next はクロスプラットフォームに対応した Notepad++ によく似たテキストエディタです。
Windows/Linux/macOS で動作します。

- [Notepad Next](https://github.com/dail8859/NotepadNext)

#### Notepad-- {#nbb7ded3}

Notepad-- は Notepad++ によく似たテキストエディタです。
Windows/Linux/macOS で動作します。

- [Notepad--](https://github.com/cxasm/notepad--)

#### Notepad++和式 (aka Notepad++JS aka nppjs) {#vf0fc40a}

Notepad++ の派生版 で EUC-JP と ISO-2022-JP に対応した Notepad++和式 が公開されています。公式サイトで提供されている Notepad++ は Shift_JIS には対応していますが EUC-JP と ISO-2022-JP には対応していません。

Notepad++ JS npp-7.5.1.1-js-171025-2200 (日付: 2017-10-25) が最新リリース版のようです。

- Notepad++和式 (aka Notepad++JS aka nppjs)
    - [https://ftp.jaist.ac.jp/pub/sourceforge.jp/l2jacmjpn/](https://ftp.jaist.ac.jp/pub/sourceforge.jp/l2jacmjpn/)
        - [https://ftp.jaist.ac.jp/pub/sourceforge.jp/l2jacmjpn/68568/](https://ftp.jaist.ac.jp/pub/sourceforge.jp/l2jacmjpn/68568/)
    - [https://ftp.iij.ad.jp/pub/osdn.jp/l2jacmjpn/](https://ftp.iij.ad.jp/pub/osdn.jp/l2jacmjpn/)
        - [https://ftp.iij.ad.jp/pub/osdn.jp/l2jacmjpn/68568/](https://ftp.iij.ad.jp/pub/osdn.jp/l2jacmjpn/68568/)

## プラグイン (Plugins) {#k2155ff2}

- [https://github.com/notepad-plus-plus/nppPluginList](https://github.com/notepad-plus-plus/nppPluginList)

### [NppExec](/NppExec/) {#cb7d631d}

NppExec を使うと LaTeX 環境を簡単に作ることができます．
詳細は [NppExec - TeX Wiki](/NppExec/) を参照してください．

### [jN (JavaScript for Notepad++)](/jN/) {#ob32f6ac}

jN  (JavaScript for Notepad++) を使うと LaTeX 環境を簡単に作ることができます．
詳細は [jN - TeX Wiki](/jN/) を参照してください．

### [MTeX for Notepad++](</MTeX for Notepad++/>) {#vf3efa2d}

MTeX for Notepad++ を使うと LaTeX 環境を簡単に作ることができます．
詳細は [MTeX for Notepad++ - TeX Wiki](</MTeX for Notepad++/>) を参照してください．

<!-- **[[LuaScript:https://github.com/dail8859/LuaScript]] [#b879cf21] -->

### [DSpellCheck](https://github.com/Predelnik/DSpellCheck) {#a6ef2445}

スペルチェックは DSpellCheck (Spell Checker プラグイン) が使用できます．
使い方は [Manual](https://github.com/Predelnik/DSpellCheck/wiki/Manual) を参照してください．

## SumatraPDF との連携 {#ted60cbe}

### forward and inverse search {#k51d2c1d}

- [NppExec#SumatraPDF との連携](/NppExec/#jbc79e5b)
- [jN#SumatraPDF との連携](/jN/#u247e15e)
- [MTeX for Notepad++#SumatraPDF との連携](</MTeX for Notepad++/#q214c924>)

を参照してください．

### inverse search {#u3c0d179}

```
"C:\Program Files\Notepad++\notepad++.exe" "%f" -n%l -c%c
```

## 関連リンク {#d8eabd2e}

- [Windowsで快適にTeX](http://qiita.com/mpyw/items/28979ee8dbfdde4ddff6)
- [WindowsでWebコーディング→Notepad++使えば良いとおもうよ！](https://blog.56doc.net/Entry/499/)
- [TeX EditorとしてのNotepad++](http://www-al.nii.ac.jp/~kameda/blog/cmlog/1203230924.htm)
- [Notepad++の使用方法](http://www.crystal-creation.com/software/tech/tool/editor/notepad-plus/)
- [GNU Octave, LaTeX, and Notepad++](http://www.tlhiv.org/ma497/software/)
- [ConTeXt support package for Notepad++](http://wiki.contextgarden.net/Notepad%2B%2B)
- [LaTeX on Windows with MiKTeX and Notepad++](http://nimal.info/blog/2010/latex-on-windows-with-miktex-and-notepad/)
- [DDE Command Line Tools](http://www.robvanderwoude.com/ddecommandline.php)
    - [CMCDDE](http://www.robvanderwoude.com/ddecommandline.php#CMCDDE)
- [Notepad++ Plugins / Discussion / NppExec:con_saveto &lt;file&gt; : &lt;encoding&gt;](https://sourceforge.net/p/npp-plugins/discussion/672146/thread/87237314)
- [【エディタ】Notepad++のインストール後の設定とか、その辺。](http://osyamonnnnn.dispatch-site.com/wordpress/%E3%83%95%E3%83%AA%E3%83%BC%E3%82%BD%E3%83%95%E3%83%88/notepad_plusplus/)
- [Notepad++のNppExecの出力からタグジャンプする設定方法](https://koonies.hatenadiary.org/entry/20110504/NppExec_TagJump)
- [The comment style in TEX language](https://sourceforge.net/p/notepad-plus/discussion/331754/thread/3bcdddda)
- [A about TEX Project manage](https://sourceforge.net/p/notepad-plus/discussion/331753/thread/90de4bf9)
