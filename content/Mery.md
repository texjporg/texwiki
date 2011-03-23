---
title: "Mery"
url: "/Mery/"
date: 2010-10-25T12:56:50Z
pukiwiki: "Mery"
---

# Mery

## [Mery](http://www.haijin-boys.com/island/wiki/) {#l6f5ffa3}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## Mery とは {#acb30ba1}

Mery は Windows 7, Vista, XP で動作する国産でフリーのシンプルなテキストエディタです．

Mery は TeX の色分け，アウトライン解析，辞書ファイルによる入力補完に対応しています．

- [Mery - Mery's Factory](http://www.haijin-boys.com/island/wiki/)
    - [更新履歴](http://www.haijin-boys.com/island/wiki/index.php?title=Mery%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89)
    - [マクロリファレンス](http://www.haijin-boys.com/island/wiki/index.php?title=%E3%83%9E%E3%82%AF%E3%83%AD%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9)
    - [kuro (haijinboys) on Twitter](http://twitter.com/haijinboys)
- [窓の杜 - Mery](http://www.forest.impress.co.jp/lib/offc/document/txteditor/mery.html)
- [Vector - Mery](http://www.vector.co.jp/soft/winnt/writing/se476839.html)

## マクロ {#oa5f5cea}

マクロを使って TeX ファイルをコンパイルすることが可能です．

### pdfepLaTeX.js {#h14da8ca}

```
function main()
{
  var shell = new ActiveXObject("WScript.Shell");
  var c = document.Path;
  var f = document.Name;
  var b = document.Name.replace(/\..+$/, "");
  var cmd = "cmd /c cd /d " + ["\"", c, "\""].join("") + " && echo exit | pdfdde & eplatex " + ["\"", f, "\""].join("") + " && dvipdfmx " + ["\"", b, ".dvi", "\""].join("") + " && pdfopen --file=" + ["\"", b, ".pdf", "\""].join("");

  document.Save();
  shell.Run(cmd, 1, true);
}

main();
```

## 入力補完 {#p98d874e}

Mery には TeX の入力補完機能があります．

Mery.exe と同じフォルダ内に ext というフォルダがあります．(存在しない場合は作成してください．)

その中に tex.txt という名前の辞書ファイルを作成します．

辞書ファイルの内容を例えば

```
documentclass
section
```

とすると

- \d を入力した後で Ctrl+Space を入力すると \documentclass
- \s を入力した後で Ctrl+Space を入力すると \section

が補完されます．
