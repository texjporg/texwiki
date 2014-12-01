---
title: "Standard ML"
url: "/Standard ML/"
date: 2014-06-23T06:05:33Z
pukiwiki: "Standard ML"
---

# Standard ML

## Standard ML {#w51925e4}

- [http://sml-family.org/](http://sml-family.org/)
    - [http://sml-family.org/Basis/](http://sml-family.org/Basis/)
        - [http://sml-family.org/Basis/command-line.html](http://sml-family.org/Basis/command-line.html)
- [https://github.com/SMLFamily](https://github.com/SMLFamily)
    - [https://github.com/SMLFamily/The-Definition-of-Standard-ML-Revised](https://github.com/SMLFamily/The-Definition-of-Standard-ML-Revised)

### 処理系 {#f73475e7}

- [Standard ML of New Jersey](http://www.smlnj.org/) (SML/NJ)
- [MLton](http://www.mlton.org/)
- [Moscow ML](http://mosml.org/)
    - [http://www.itu.dk/~sestoft/mosml.html](http://www.itu.dk/~sestoft/mosml.html)
- [Poly/ML](http://www.polyml.org/)
- [SML# - SML＃プロジェクト](http://www.pllab.riec.tohoku.ac.jp/smlsharp/ja/)
    - [https://github.com/smlsharp/smlsharp](https://github.com/smlsharp/smlsharp)
    - [http://www.pllab.riec.tohoku.ac.jp/smlsharp/ja/?Library](http://www.pllab.riec.tohoku.ac.jp/smlsharp/ja/?Library)
        - [http://www.pllab.riec.tohoku.ac.jp/smlsharp/lib/Basis/doc/api/](http://www.pllab.riec.tohoku.ac.jp/smlsharp/lib/Basis/doc/api/)
        - [http://www.pllab.riec.tohoku.ac.jp/smlsharp/ja/?Library%2FFFI](http://www.pllab.riec.tohoku.ac.jp/smlsharp/ja/?Library%2FFFI)
        - [http://www.pllab.riec.tohoku.ac.jp/smlsharp/ja/?Library%2FLMLML](http://www.pllab.riec.tohoku.ac.jp/smlsharp/ja/?Library%2FLMLML)
    - [http://www.ueda.info.waseda.ac.jp/~shinobu/smlsharp/install_mingw.html](http://www.ueda.info.waseda.ac.jp/~shinobu/smlsharp/install_mingw.html)

C:\MinGW\var\lib\mingw-get\data\profile.xml に以下の行を追加

```
  <repository uri="http://www.pllab.riec.tohoku.ac.jp/smlsharp/download/mingw32/%F.xml.lzma">
    <package-list catalogue="smlsharp-package-list" />
  </repository>
```

MinGW Shell (MSYS) から以下のコマンドを実行

```
$ mingw-get update
$ mingw-get install smlsharp
```

### FFI {#l0fcfe26}

#### SML/NJ {#pb212d79}

- [他言語との連携 ～ NLFFIをつかう](http://daweb.ism.ac.jp/~saitohm/top/_tnUp6t-.html)
- [http://daweb.ism.ac.jp/~saitohm/code/sml-toy/win32test/](http://daweb.ism.ac.jp/~saitohm/code/sml-toy/win32test/)

#### MLton {#qcc7200c}

- [mlton-20070826のFFI](http://d.hatena.ne.jp/uenoB/20070829/1188392658)
- [http://www.mlton.org/CallingFromSMLToCFunctionPointer](http://www.mlton.org/CallingFromSMLToCFunctionPointer)

#### Poly/ML {#w02b8a16}

- [Poly/MLのFFIでTclを呼ぶ](http://rainyday.blog.so-net.ne.jp/2013-09-28)

#### SML# {#z15b6c9c}

- [SML# - Cとのシームレスな連携](http://www.pllab.riec.tohoku.ac.jp/smlsharp/ja/?FeatureInteroperability)
- [SML# - C言語バインディング まとめ (ML/LL AdventCalendar20日目)](http://d.hatena.ne.jp/eldesh/20121220/1355970020)
- [SML#の威力](http://d.hatena.ne.jp/sumii/20070402/p1)
- [SML# 0.20 から Tcl を呼ぶ](http://rainyday.blog.so-net.ne.jp/2007-03-31)

***

- hellomsg.smi

***

```
_require "basis.smi"
_require "ffi.smi"
```

***

***

- hellomsg.sml

***

```
val user32 = DynamicLink.dlopen "user32.dll"
val MessageBoxA =
    DynamicLink.dlsym (user32, "MessageBoxA")
    : _import _stdcall (unit ptr, string, string, Word32.word) -> int
val MB_SYSTEMMODEL = 0wx1000
val () = ignore (MessageBoxA (Pointer.NULL (), "Hello World!", "SMLSharp", MB_SYSTEMMODEL))
```

***

```
smlsharp -o hellomsg.exe hellomsg.sml
```

### 関連リンク {#p0683ab9}

- [SML#のoverLoad](http://d.hatena.ne.jp/keita44_f4/20121203)
- [SCM Boot Camp in Nagoya に行ってきた・・・と見せかけた SML# の多相レコードの話](http://bleis-tift.hatenablog.com/entry/20120423/1335162974)
