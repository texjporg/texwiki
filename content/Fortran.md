---
title: "Fortran"
url: "/Fortran/"
date: 2013-09-01T03:21:09Z
pukiwiki: "Fortran"
---

# Fortran

## Fortran {#pbb06ff1}

- [Fortran Wiki](http://fortranwiki.org/)
    - [Fortran 2008 status](http://fortranwiki.org/fortran/show/Fortran+2008+status)
    - [Fortran 2003 status](http://fortranwiki.org/fortran/show/Fortran+2003+status)
- [Fortran入門](http://www.nag-j.co.jp/fortran/)
- [Fortran 2003入門](http://www.nag-j.co.jp/fortran/fortran2003/)
- [インテル® Fortran Composer XE 2013 Linux\* 版入門](http://nf.nci.org.au/facilities/software/intel-ct/13.5.192/Documentation/ja_JP/get_started_lf.htm)
- [インテル® Fortran コンパイラー XE 13.0 ユーザー・リファレンス・ガイド](http://nf.nci.org.au/facilities/software/intel-ct/13.5.192/Documentation/ja_JP/compiler_f/main_for/index.htm)
- [http://pic.dhe.ibm.com/infocenter/lnxpcomp/v121v141/index.jsp](http://pic.dhe.ibm.com/infocenter/lnxpcomp/v121v141/index.jsp)
- [Fortran2003のページ](http://www.geocities.jp/wjtcx143/fortran.html)
- [Tagged "Fortran2003" | ドウジンテイスウ.log](http://sage-t.tumblr.com/tagged/Fortran2003)
- [fortran66のブログ](http://fortran66.hatenablog.com/)
- [https://github.com/OpenFortranProject](https://github.com/OpenFortranProject)
- [Fortran Archives - Moonmile Solutions Blog](http://www.moonmile.net/blog/archives/category/dev/fortran)
- [http://qiita.com/tags/fortran](http://qiita.com/tags/fortran)
- [FortranからPythonへ](http://www.slideshare.net/shibukawa/fortranpython-presentation)
- [Fortran90/95での引数の値渡し (Pass by value)](http://sgks.blogspot.jp/2008/02/fortran9095-pass-by-value.html)
- [http://gcc.gnu.org/onlinedocs/gfortran/Interoperable-Subroutines-and-Functions.html](http://gcc.gnu.org/onlinedocs/gfortran/Interoperable-Subroutines-and-Functions.html)
- [http://software.intel.com/en-us/forums/topic/270769](http://software.intel.com/en-us/forums/topic/270769)
- [http://publib.boulder.ibm.com/infocenter/comphelp/v8v101/index.jsp?topic=%2Fcom.ibm.xlf101a.doc%2Fxlflr%2Finterop-iso-c-binding-module.htm](http://publib.boulder.ibm.com/infocenter/comphelp/v8v101/index.jsp?topic=%2Fcom.ibm.xlf101a.doc%2Fxlflr%2Finterop-iso-c-binding-module.htm)
- [http://be.nucl.ap.titech.ac.jp/~koba/cgi-bin/moin.cgi/FORTRAN](http://be.nucl.ap.titech.ac.jp/~koba/cgi-bin/moin.cgi/FORTRAN)
- [Fortran 覚書](http://www.gcxx.jp/memo/?fortran)
- [Fortranスマートプログラミング](http://www.ile.osaka-u.ac.jp/research/cmp/text.html) (PDF)
- [Fortran 90/95 入門①](http://www.hucc.hokudai.ac.jp/~a10019/kosyu/pdf2/Fortran_1.pdf) (PDF)
- [Fortran 90/95 入門②](http://www.hucc.hokudai.ac.jp/~a10019/kosyu/pdf2/Fortran_2.pdf) (PDF)
- [データ解析のためのFortran90/95](http://web.agr.ehime-u.ac.jp/~kishou/Lecture/atmosphere/atmo06.htm)
- [Fortran90プログラミング](http://www7b.biglobe.ne.jp/~fortran/)
- [Fortran エラー処理で文番号を使わない方法 ](http://seismon.blog85.fc2.com/blog-entry-90.html)

### 処理系 {#xfad745a}

- [GNU Fortran (gfortran)](http://gcc.gnu.org/wiki/GFortran)
    - [Fortran2008Status - GCC Wiki](http://gcc.gnu.org/wiki/Fortran2008Status)
    - [Fortran2003Status - GCC Wiki](http://gcc.gnu.org/wiki/Fortran2003Status)
    - Windows では [MinGW](/MinGW/), [Cygwin](/Cygwin/), [Strawberry Perl](http://strawberryperl.com/) などに収録されています．
- [Intel Fortran Compiler (ifort)](http://software.intel.com/en-us/fortran-compilers)
    - [http://software.intel.com/en-us/non-commercial-software-development](http://software.intel.com/en-us/non-commercial-software-development) (Linux, 非商用での使用のみ可)
    - [Fortran (Intel Parallel Studio) のインストール](http://pen.agbi.tsukuba.ac.jp/~RStiger/hiki2/?Fortran+%28Intel+Parallel+Studio+XE%29+%A4%CE%A5%A4%A5%F3%A5%B9%A5%C8)

### 使い方 {#r3bbac60}

#### 使用可能な拡張子 {#d9d770b5}

GNU Fortran の場合は拡張子に .f90, .f95, .f03, .f08, .F90, .F95, .F03, .F08 などが使用できます．<br>
GNU Fortran と Intel Fortran Compiler を両方使用してプログラムを作成する場合は拡張子は .f90 または .F90 を使用することをおすめします．<br>

<table>
<tbody>
<tr><td>自由形式 (free form)</td><td>.f90, .f95, .f03, .f08, .F90, .F95, .F03, .F08</td></tr>
<tr><td>固定形式 (fixed form)</td><td>.f, .for, .fpp, .ftn, .F, .FOR, .FPP, .FTN</td></tr>
</tbody>
</table>

- [http://gcc.gnu.org/onlinedocs/gfortran/GNU-Fortran-and-GCC.html](http://gcc.gnu.org/onlinedocs/gfortran/GNU-Fortran-and-GCC.html)
- [http://nf.nci.org.au/facilities/software/intel-ct/13.5.192/Documentation/ja_JP/compiler_f/main_for/GUID-75F416C4-ADD7-41D0-AEFE-E61F50C04A82.htm](http://nf.nci.org.au/facilities/software/intel-ct/13.5.192/Documentation/ja_JP/compiler_f/main_for/GUID-75F416C4-ADD7-41D0-AEFE-E61F50C04A82.htm)

#### 標準出力に "Hello World" を出力 {#x79017be}

***

- helloworld.f90

***

```
! vim: ts=4 sw=4 expandtab:
! $ gfortran -std=f2008 -static -o helloworld helloworld.f90
program helloworld
    implicit none
    print '(g0)', "Hello World"
end program helloworld
```

***

```
! vim: ts=4 sw=4 expandtab:
! $ gfortran -std=f2008 -static -o helloworld helloworld.f90
program helloworld
    use, intrinsic :: iso_fortran_env
    implicit none
    write(unit=output_unit, fmt='(g0)') "Hello World"
end program helloworld
```

***

```
! vim: ts=4 sw=4 expandtab:
! $ gfortran -std=f2008 -static -o helloworld helloworld.f90
module c_stdio
    use, intrinsic :: iso_c_binding
    implicit none
    interface
        subroutine c_puts(s) bind(c, name='puts')
            import
            character(kind=c_char), intent(in) :: s
        end subroutine c_puts
    end interface
end module c_stdio

program helloworld
    use, intrinsic :: iso_c_binding
    use c_stdio
    implicit none
    call c_puts("Hello World" // c_null_char)
end program helloworld
```

***

GNU Fortran 4.8.1 で動作確認しています．<br>
データの出力は print 文や write 文で行います．<br>
C の puts 関数などを呼び出して出力することもできます．<br>
Fortran の文字列は null 終端文字列ではないので C の関数に渡す場合は c_null_char を末尾に追加して渡す必要があります．<br>

```
$ gfortran -std=f2008 -static -o helloworld helloworld.f90
$ ./helloworld
```

MinGW の gfortran でビルドしたバイナリで

- Windows PowerShell から実行するとなにも表示されない
- コマンド プロンプトから実行するとアプリケーションエラーが発生する

といった現象が発生する場合は

```
 $ gfortran -std=f2008 -static -o helloworld helloworld.f90
```

のように -static オプションを追加してビルドすれば OK です．<br>

### Python や C から Fortran を呼び出す {#kaea5749}

- [Calling Fortran from Python](http://www.sfu.ca/~mawerder/notes/calling_fortran_from_python.html)
- [Calling Fortran from C](http://www.sfu.ca/~mawerder/notes/calling_fortran_from_c.html)
- [f2pyを使ってfortranでpythonのモジュールを書く](http://qiita.com/airtoxin/items/b632f2b3f219610f3990)
- [PythonからFortranのサブルーチンを呼ぶ。](http://d.hatena.ne.jp/ignisan/20121017/p1)
