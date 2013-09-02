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
- [Tagged "Fortran2003" | ドウジンテイスウ.log](http://sage-t.tumblr.com/tagged/Fortran2003)
- [fortran66のブログ](http://fortran66.hatenablog.com/)
- [https://github.com/OpenFortranProject](https://github.com/OpenFortranProject)
- [Fortran Archives - Moonmile Solutions Blog](http://www.moonmile.net/blog/archives/category/dev/fortran)
- [PythonからFortranのサブルーチンを呼ぶ。](http://d.hatena.ne.jp/ignisan/20121017/p1)
- [FortranからPythonへ](http://www.slideshare.net/shibukawa/fortranpython-presentation)
- [http://gcc.gnu.org/onlinedocs/gfortran/Interoperable-Subroutines-and-Functions.html](http://gcc.gnu.org/onlinedocs/gfortran/Interoperable-Subroutines-and-Functions.html)
- [http://software.intel.com/en-us/forums/topic/270769](http://software.intel.com/en-us/forums/topic/270769)
- [http://publib.boulder.ibm.com/infocenter/comphelp/v8v101/index.jsp?topic=%2Fcom.ibm.xlf101a.doc%2Fxlflr%2Finterop-iso-c-binding-module.htm](http://publib.boulder.ibm.com/infocenter/comphelp/v8v101/index.jsp?topic=%2Fcom.ibm.xlf101a.doc%2Fxlflr%2Finterop-iso-c-binding-module.htm)

### 処理系 {#xfad745a}

- [GNU Fortran (gfortran)](http://gcc.gnu.org/wiki/GFortran)
    - [Fortran2008Status - GCC Wiki](http://gcc.gnu.org/wiki/Fortran2008Status)
    - [Fortran2003Status - GCC Wiki](http://gcc.gnu.org/wiki/Fortran2003Status)
    - Windows では [MinGW](/MinGW/), [Cygwin](/Cygwin/), [Strawberry Perl](http://strawberryperl.com/) などに収録されています．
- [Intel Fortran Compiler (ifort)](http://software.intel.com/en-us/fortran-compilers)
    - [http://software.intel.com/en-us/non-commercial-software-development](http://software.intel.com/en-us/non-commercial-software-development) (Linux, 非商用のみ)

### 使い方 {#r3bbac60}

GNU Fortran 4.8.1 で動作確認しています．<br>

#### 使用可能な拡張子 {#d9d770b5}

GNU Fortran の場合は拡張子に .f, .for, .ftn, .f90, .f95, .f03, .f08 などが使用できるようです． → [http://gcc.gnu.org/onlinedocs/gfortran/GNU-Fortran-and-GCC.html](http://gcc.gnu.org/onlinedocs/gfortran/GNU-Fortran-and-GCC.html)

#### 標準出力に "Hello World" を出力 {#x79017be}

***

- helloworld.f08

***

```
! vim: ts=4 sw=4 expandtab:
! $ gfortran -static -o helloworld helloworld.f08
program helloworld
    implicit none
    print '(a)', "Hello World"
end program helloworld
```

***

```
! vim: ts=4 sw=4 expandtab:
! $ gfortran -static -o helloworld helloworld.f08
program helloworld
    use iso_fortran_env
    implicit none
    write(unit=output_unit, fmt='(a)') "Hello World"
end program helloworld
```

***

```
! vim: ts=4 sw=4 expandtab:
! $ gfortran -static -o helloworld helloworld.f08
module c_stdio
    use iso_c_binding
    implicit none
    interface
        subroutine c_puts(s) bind(C, name='puts')
            import
            character(kind=c_char), intent(in) :: s
        end subroutine c_puts
    end interface
end module c_stdio

program helloworld
    use iso_c_binding
    use c_stdio
    implicit none
    call c_puts("Hello World" // c_null_char)
end program helloworld
```

***

データの出力は print 文や write 文で行います．<br>
C の puts 関数などを呼び出して出力することもできます．<br>
Fortran の文字列は null 終端文字列ではないので C の関数に渡す場合は c_null_char を末尾に追加して渡す必要があります．<br>

```
$ gfortran -static -o helloworld helloworld.f08
$ ./helloworld
```

MinGW の gfortran でビルドしたバイナリで

- Windows PowerShell から実行するとなにも表示されない
- コマンド プロンプトから実行するとアプリケーションエラーが発生する

といった現象が発生する場合は

```
 $ gfortran -static -o helloworld helloworld.f08
```

のように -static オプションを追加してビルドすれば OK です．<br>
