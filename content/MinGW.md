---
title: "MinGW"
url: "/MinGW/"
date: 2012-12-05T16:33:35Z
pukiwiki: "MinGW"
---

# MinGW

## [MinGW](http://www.mingw.org/) {#c9002cc1}

## MinGW とは {#tb48dbc4}

MinGW は "Minimalist GNU for Windows" の略語で Microsoft Windows アプリケーションを開発するための最小限の開発環境を提供します．<br>
TeX 関連プログラムには C, C++ で書かれたプログラムがあります．<br>
MinGW を使用すれば TeX Live の最新の開発版を自分でビルドして使用することができます．<br>

- [MinGW | Minimalist GNU for Windows](http://www.mingw.org/)

## インストーラー {#x50e277a}

[http://sourceforge.net/projects/mingw/files/Installer/](http://sourceforge.net/projects/mingw/files/Installer/)

## MSYS {#o619b52f}

### MSYS2 {#x1532c23}

- [http://www.mingw.org/wiki/MSYS2](http://www.mingw.org/wiki/MSYS2)
- [http://sourceforge.net/projects/msys2/](http://sourceforge.net/projects/msys2/)
- [msys2のpacmanを使ってみた](http://otsukemono.blogspot.jp/2013/11/msys2pacman.html)

MSYS2 では LANG が ja_JP.UTF-8 になっています．<br>

```
$ echo $LANG
ja_JP.UTF-8
```

### MSYS1 {#pb3bd48b}

- [http://www.mingw.org/wiki/MSYS](http://www.mingw.org/wiki/MSYS)

#### /etc/fstab の作成 {#n8a19258}

/mingw が存在しない場合は /etc/fstab を作成して c:/mingw		/mingw を追加します．<br>

***

- C:\MinGW\msys\1.0\etc\fstab

***

```
#fstab.sample
#This is a sample file for /etc/fstab.
#Currently /etc/fstab is only read during dll initialization.
#I will eventually watch the directory for changes and reread the file.
#The line format is simple in that you give the Win32 path, followed by one or
#more space or tab delimiter, followed by the mount point.  Mount points in 
#typical UNIX environments must be a physical name on a drive before it can 
#actually be used as a mount point.  In this implementation the "must exist" 
#requirement isn't enforced, however, it will be an aide to such programs as 
#find and readline's tab completion if it does exist.

#You can use a # as the first character on the line as a comment indicator.
#Blank lines are ignored.

#Win32_Path		Mount_Point
c:/mingw		/mingw
```

***

## TeX Live <a id="texlive"></a> {#h63c1837}

- [TeX Liveをmakeしようと試みてみた](http://d.hatena.ne.jp/abenori/20111105)
- [runscript.dllがないと怒られる．](http://d.hatena.ne.jp/abenori/20111216)

MinGW をフルインストールします．<br>
MinGW Shell を起動します．

```
$ mkdir texlive
$ cd texlive
$ rsync -a --delete --exclude=.svn tug.org::tldevsrc/Build/source/ .
$ ./Build --without-x --without-ln-s --disable-xetex --disable-xdvipdfmx --disable-xdvik
```

make  check-TESTS でエラーが発生しました．

```
make  check-TESTS
make[5]: Entering directory
```

***

unzzip.exe は動作を停止しました

問題の解決をオンラインで確認できます。<br>

　→　オンラインで解決策を確認してプログラムを終了します<br>

　→　プログラムを終了します<br>

***

```
FAIL: zziplib.test
```

```
real    89m49.329s
user    18m45.910s
sys     37m58.710s
```

```
./Build: 278 executables in ~/texlive/inst/bin.
```

ビルドにはおよそ1時間半ぐらいかかるようです．<br>
inst/bin/i686-pc-mingw32/ 以下に実行ファイルが作成されます．<br>

```
$ ls ~/texlive/inst/bin/i686-pc-mingw32/
a2ping.exe        fmtutil.exe            pdvitype.exe
afm2afm.exe       fragmaster.exe         pedigree.exe
afm2pl.exe        gbklatex.exe           perltex.exe
afm2tfm.exe       gbkpdflatex.exe        pfb2pfa.exe
aleph.exe         gftodvi.exe            pk2bm.exe
arlatex.exe       gftopk.exe             pkfix-helper.exe
authorindex.exe   gftype.exe             pkfix.exe
autoinst.exe      gsftopk.exe            pktogf.exe
bbox.exe          hbf2gf.exe             pktype.exe
bg5conv.exe       ht.bat                 pltotf.exe
bg5latex.exe      ht.exe                 pmx2pdf.exe
bg5pdflatex.exe   htcontext.bat          pmxab.exe
biber.exe         htcontext.exe          pooltype.exe
bibtex.exe        htlatex.bat            ppltotf.exe
bibtex8.exe       htlatex.exe            prepmx.exe
bibtexu.exe       htmex.bat              ps2eps.exe
bundledoc.exe     htmex.exe              ps2pk.exe
cachepic.exe      httex.bat              psbook.exe
cef5conv.exe      httex.exe              psmerge.exe
cef5latex.exe     httexi.bat             psnup.exe
cef5pdflatex.exe  httexi.exe             psresize.exe
cefconv.exe       htxelatex.bat          psselect.exe
ceflatex.exe      htxelatex.exe          pst2pdf.exe
cefpdflatex.exe   htxetex.bat            pstops.exe
cefsconv.exe      htxetex.exe            ptex.exe
cefslatex.exe     includeres.exe         ptftopl.exe
cefspdflatex.exe  inimf.exe              purifyeps.exe
cfftot1.exe       initex.exe             repstopdf.exe
checkcites.exe    kpseaccess.exe         rpdfcrop.exe
chktex.exe        kpsereadlink.exe       rungs.exe
context.exe       kpsestat.exe           scor2prt.exe
convbkmk.exe      kpsewhich.exe          sjisconv.exe
ctangle.exe       lacheck.exe            sjislatex.exe
ctanify.exe       latex2man.exe          sjispdflatex.exe
ctanupload.exe    latexdiff-vc.exe       splitindex.exe
ctie.exe          latexdiff.exe          sty2dtx.exe
cweave.exe        latexmk.exe            svn-multi.exe
de-macro.exe      latexpand.exe          synctex.exe
detex.exe         latexrevise.exe        t1ascii.exe
devnag.exe        luatex.exe             t1asm.exe
deweb.exe         m-tx.exe               t1binary.exe
disdvi.exe        mag.exe                t1disasm.exe
dosepsbin.exe     makeglossaries.exe     t1dotlessj.exe
dt2dv.exe         makeindex.exe          t1lint.exe
dv2dt.exe         makejvf.exe            t1mac.exe
dvi2tty.exe       match_parens.exe       t1rawafm.exe
dviasm.exe        mathspic.exe           t1reencode.exe
dvibook.exe       mendex.exe             t1testpage.exe
dviconcat.exe     mf-nowin.exe           t1unmac.exe
dvicopy.exe       mf.exe                 t4ht.exe
dvidvi.exe        mf2pt1.exe             tangle.exe
dvigif.exe        mfplain.exe            tex.exe
dvihp.exe         mft.exe                tex4ht.exe
dvilj.exe         mk4ht.exe              texcount.exe
dvilj2p.exe       mkgrkindex.exe         texdef.exe
dvilj4.exe        mkjobtexmf.exe         texdiff.exe
dvilj4l.exe       mkluatexfontdb.exe     texdirflatten.exe
dvilj6.exe        mkocp.exe              texdoc.exe
dvipdfm.exe       mkofm.exe              texdoctk.exe
dvipdfmx.exe      mkt1font.exe           texhash.exe
dvipng.exe        mktexfmt.exe           texliveonfly.exe
dvipos.exe        mktexlsr.exe           texloganalyser.exe
dvips.exe         mktexmf.exe            texlua.exe
dviselect.exe     mktexpk.exe            texluac.exe
dvisvgm.exe       mktextfm.exe           tftopl.exe
dvitodvi.exe      mktexupd.exe           thumbpdf.exe
dvitomp.exe       mmafm.exe              tie.exe
dvitype.exe       mmpfb.exe              tlmgr.exe
e2pall.exe        mpost.exe              ttf2afm.exe
ebb.exe           mptopdf.exe            ttf2pk.exe
ebong.exe         mtxrun.exe             ttf2tfm.exe
epsffit.exe       musixflx.exe           ttfdump.exe
epspdf.exe        musixtex.exe           ttftotype42.exe
epspdftk.exe      odvicopy.exe           ulqda.exe
epstopdf.exe      odvitype.exe           upbibtex.exe
eptex.exe         ofm2opl.exe            kanji-config-updmap-sys.exe
euptex.exe        omfonts.exe            kanji-config-updmap.exe
exceltex.exe      opl2ofm.exe            updmap-sys.exe
extconv.exe       ot2kpx.exe             updmap.exe
extractbb.exe     otangle.exe            updvitype.exe
extractres.exe    otfinfo.exe            uppltotf.exe
fig4latex.exe     otftotfm.exe           uptex.exe
findhyph.exe      otp2ocp.exe            uptftopl.exe
fixdlsrps.exe     outocp.exe             urlbst.exe
fixfmps.exe       ovf2ovp.exe            vftovp.exe
fixpsditps.exe    ovp2ovf.exe            vlna.exe
fixpspps.exe      patgen.exe             vpe.exe
fixscribeps.exe   pbibtex.exe            vpl2ovp.exe
fixtpps.exe       pdfannotextractor.exe  vpl2vpl.exe
fixwfwps.exe      pdfatfi.exe            vptovf.exe
fixwpps.exe       pdfcrop.exe            weave.exe
fixwwps.exe       pdftex.exe             wovp2ovf.exe
fmtutil-sys.exe   pdftosrc.exe
```

64-bit Windows のネイティブなバイナリをビルドしたい場合は [MinGW-w64](http://mingw-w64.sourceforge.net/) を使うとビルドできるかもしれません．

## 関連リンク {#e987affa}

- [MinGW-builds](http://sourceforge.net/projects/mingwbuilds/)
- [News - nuwen.net](http://nuwen.net/)
    - [MinGW Distro - nuwen.net](http://nuwen.net/mingw.html)
- [mingw-w64-dgn](https://code.google.com/p/mingw-w64-dgn/)
- [MXE (M cross environment)](http://mxe.cc/)
- [MinGW | Qt Wiki | Qt Project](http://qt-project.org/wiki/MinGW)
- [MinGW 64 bit | Qt Wiki | Qt Developer Network](http://qt-project.org/wiki/MinGW-64-bit)
- [FAQ | MinGW](http://www.mingw.org/wiki/FAQ)
- [C::B advanced](http://sourceforge.net/projects/cbadvanced/)
- [Index of /repositories/windows:/mingw:/win32/openSUSE_Factory/noarch](http://download.opensuse.org/repositories/windows:/mingw:/win32/openSUSE_Factory/noarch/)
- [http://download.opensuse.org/repositories/home:/hiberis:/wix/openSUSE_Factory/noarch/](http://download.opensuse.org/repositories/home:/hiberis:/wix/openSUSE_Factory/noarch/)
- [Where can I download precompiled GTK+ 3 binaries or windows installer?](http://stackoverflow.com/questions/6006689/where-can-i-download-precompiled-gtk-3-binaries-or-windows-installer)
- [クロスGCC(on Linux Host for Targeting Mingw-w64 Windows)のビルド](http://sideseeker.hateblo.jp/entry/2013/10/06/072748)
- [七誌の開発日記](http://7shi.hateblo.jp/archive/category/MSYS) (MSYS)
- [片っ端から忘れていけばいいじゃない。 mingw](http://0xc000013a.blog96.fc2.com/?tag=mingw)
- [Console2 + Nyaos + MinGWで快適Windwosターミナル](http://upinetree.hatenablog.com/entry/2013/03/06/220800)
- [MinGW (64bit) + MSYS 環境の構築 (1)](http://www.devlog.alt-area.org/?p=2802)
- [MinGW (64bit) + MSYS 環境の構築 (2)](http://www.devlog.alt-area.org/?p=2900)
