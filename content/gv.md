---
title: "gv"
url: "/gv/"
date: 2018-10-05T11:42:25Z
pukiwiki: "gv"
---

# gv

gv は [Ghostscript](/Ghostscript/) のフロントエンドです。

- [GV - GNU Project - Free Software Foundation](https://www.gnu.org/software/gv/)
- [gv, a PostScript and PDF previewer](http://pages.cs.wisc.edu/~ghost/gv/gv.htm)

### Cygwin {#n4a211dd}

[Cygwin](/Cygwin/) と [VcXsrv](https://sourceforge.net/projects/vcxsrv/) で gv が使用できます。

VcXsrv を起動して Cygwin64 Terminal (64-bit Cygwin) あるいは Cygwin Terminal (32-bit Cygwin) から

```
DISPLAY=:0 gv foo.ps
```

あるいは

```
export DISPLAY=:0
gv foo.ps
```

で foo.ps が gv で表示できます。

適切に設定すれば日本語も表示可能です。

### macOS {#k8b85c7c}

- [https://formulae.brew.sh/formula/gv](https://formulae.brew.sh/formula/gv)
    - [https://github.com/Homebrew/homebrew-core/blob/master/Formula/gv.rb](https://github.com/Homebrew/homebrew-core/blob/master/Formula/gv.rb)
- [https://github.com/macports/macports-ports/blob/master/print/gv/Portfile](https://github.com/macports/macports-ports/blob/master/print/gv/Portfile)
- [&#8220;gv&#8221; の検索結果 &#8211; マスクメロン](http://www.muskmelon.jp/?s=gv)
    - [TeXの記憶(125) — Mac用Ghostscript（gv付き）を入れてみた](https://oversleptabit.com/archives/1337)
- [GS Previewers set for pTeX with X11 (ppc/intel)](http://osksn2.hep.sci.osaka-u.ac.jp/~taku/osx/old/gsv060121.dmg)
    - [教授でもできるMacOSXへのX11とLaTeX、Ghostviewのインストレーション](http://osksn2.hep.sci.osaka-u.ac.jp/~taku/osx/old/install_gv.html)
    - [Mac の設定：A Day in the Life](https://s.webry.info/sp/dayinthelife.at.webry.info/200903/article_3.html)

### Linux {#p8553828}

- [https://www.archlinux.jp/packages/?name=gv](https://www.archlinux.jp/packages/?name=gv)
- [https://packages.debian.org/search?keywords=gv](https://packages.debian.org/search?keywords=gv)
- [https://packages.ubuntu.com/search?keywords=gv](https://packages.ubuntu.com/search?keywords=gv)
- [https://apps.fedoraproject.org/packages/gv](https://apps.fedoraproject.org/packages/gv)
- [https://software.opensuse.org/package/gv](https://software.opensuse.org/package/gv)
