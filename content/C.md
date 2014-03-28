---
title: "C"
url: "/C/"
date: 2013-05-19T16:55:32Z
pukiwiki: "C"
---

# C

## C {#hb6b6e11}

<!-- #ref(http://upload.wikimedia.org/wikipedia/commons/thumb/9/95/The_C_Programming_Language%2C_First_Edition_Cover_%282%29.svg/200px-The_C_Programming_Language%2C_First_Edition_Cover_%282%29.svg.png,right,around,nolink,C) -->

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/200px-The_C_Programming_Language_logo.svg.png" alt="C" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Summary {#k4c5d2ad}

- [Wikipedia.ja:C言語](https://ja.wikipedia.org/wiki/C%E8%A8%80%E8%AA%9E)
- [C言語 - Wikibooks](http://ja.wikibooks.org/wiki/C%E8%A8%80%E8%AA%9E)
- [苦しんで覚えるＣ言語](http://9cguide.appspot.com/)
- [C言語は今でも価値のある言語か？](http://www.infoq.com/jp/news/2013/01/C-Language)
- \[[SDK\] プロセスの列挙](http://shoppers-jp.com/tech/sdk037.html)
- [コマンドライン引数の取得（プロセスファイルシステムを利用する） - Linux/C/C++ Tips](http://lldev.jp/linux_c_cpp/tips/pfs_cmdline.html)
- [http://stackoverflow.com/questions/1585989/how-to-parse-proc-pid-cmdline](http://stackoverflow.com/questions/1585989/how-to-parse-proc-pid-cmdline)
- [http://cx20.main.jp/blog/hello/category/win32-api/](http://cx20.main.jp/blog/hello/category/win32-api/)
- [http://cx20.main.jp/blog/hello/2012/06/](http://cx20.main.jp/blog/hello/2012/06/)
- [Wikipedia.ja:呼出規約](https://ja.wikipedia.org/wiki/%E5%91%BC%E5%87%BA%E8%A6%8F%E7%B4%84)
- [桂田研卒研ノート](http://nalab.mind.meiji.ac.jp/~mk/labo/text/)
- [CからFortranルーチンを呼び出す](http://phase.hpcc.jp/phase/o2k/technical_doc_library/docs/porting/fortranfromc.html)
- [11.1.4 ルーチン名の下線 (Sun Studio 12: Fortran プログラミングガイド)](http://docs.oracle.com/cd/E19205-01/820-1203/aeula/index.html)
- [C言語機能の比較](http://www.6809.net/tenk/?C%E8%A8%80%E8%AA%9E%E6%A9%9F%E8%83%BD%E3%81%AE%E6%AF%94%E8%BC%83)
- [C言語で可変個引数を型拘束したい](http://mattn.kaoriya.net/software/lang/c/20140312213057.htm)

### 処理系 {#d2633a16}

- [GCC, the GNU Compiler Collection - GNU Project - Free Software Foundation (FSF)](http://gcc.gnu.org/)
    - [MinGW](/MinGW/)
    - [Cygwin](/Cygwin/)
- ["clang" C Language Family Frontend for LLVM](http://clang.llvm.org/)
- Microsoft Visual Studio Express
    - [C99 library support in Visual Studio 2013](http://blogs.msdn.com/b/vcblog/archive/2013/07/19/c99-library-support-in-visual-studio-2013.aspx)
- [TCC : Tiny C Compiler](http://bellard.org/tcc/)

### ライブラリ・フレームワーク {#w5f859a1}

- [GTK+](http://www.gtk.org/)

### IDE・エディタ {#vaa4f864}

#### フリーソフトウェア (オープンソースソフトウェア) {#n4409bbb}

- [Eclipse](/Eclipse/)
    - [Eclipse CDT](http://www.eclipse.org/cdt/)
- [Emacs](/Emacs/)
- [Vim](/Vim/)
- [Notepad++](/Notepad++/)
- [サクラエディタ](</サクラエディタ/>)

## C から Fortran の関数を呼び出す {#x01bff9e}

Fortran の関数

***

- fsin.f90

***

```
pure function f_sin(x) result(y) bind(c, name='f_sin')
    use, intrinsic :: iso_c_binding
    real(kind=c_double), value :: x
    real(kind=c_double) :: y
    y = sin(x)
end function f_sin
```

***

```
elemental pure function f_sin(x) result(y) bind(c, name='f_sin')
```

とするとエラーになります．<br>

```
$ gfortran -c fsin.f90
$ nm fsin.o
00000000 b .bss
00000000 d .data
00000000 r .eh_frame
00000000 r .rdata$zzz
00000000 t .text
00000000 T _f_sin
         U _sin
```

C の関数

***

- sin.c

***

```
#include <stdio.h>
#define _USE_MATH_DEFINES
#include <math.h>

extern double f_sin(double);

int
main(int argc, char** argv)
{
    double x = M_PI * 0.5;
    printf("f_sin(%f) = %f\n", x, f_sin(x));
    printf("sin(%f) = %f\n", x, sin(x));

    return 0;
}
```

***

```
$ gcc -o sin sin.c fsin.o
$ ./sin
f_sin(1.570796) = 1.000000
sin(1.570796) = 1.000000
```

## コマンドライン引数から整数 N を取得して標準出力に 1 から N までの和を出力 <a id="nsum"></a> {#w46fe110}

[任意精度演算](https://ja.wikipedia.org/wiki/%E4%BB%BB%E6%84%8F%E7%B2%BE%E5%BA%A6%E6%BC%94%E7%AE%97)を扱うためのライブラリである [GMP](http://gmplib.org/) を使用すると C で簡単に記述できます．<br>

***

- nsum.c

***

```
// vim: ts=4 sw=4 expandtab:
// gcc -Wall -Ofast -march=native -std=c11 -static -o nsum nsum.c -lgmp
// gcc -Wall -Ofast -march=native -std=c11 -static -DNSUM1 -o nsum nsum.c -lgmp
#include <ctype.h>
#include <stdbool.h>
#include <stdio.h>
#include <string.h>
#include <gmp.h>

void usage(const char* restrict);
bool valid_number(const char* restrict);
void nsum1(const char* restrict);
void nsum2(const char* restrict);

void
usage(const char* restrict s)
{
    fprintf(stderr, "usage: %s N ...\n", s);
}

bool
valid_number(const char* restrict s)
{
    for (int i = 0; i < strlen(s); i++) {
        if (!isdigit(s[i])) {
            return false;
        }
    }
    return true;
}

void
nsum1(const char* restrict s)
{
    mpz_t n;
    mpz_t k;
    mpz_t inc;
    mpz_t arg;
    mpz_init_set_str(inc, "1", 10);
    mpz_init_set_str(k, "1", 10);
    mpz_init_set_str(n, "0", 10);
    mpz_init_set_str(arg, s, 10);
    while (mpz_cmp(k, arg) <= 0) {
        mpz_add(n, n, k);
        mpz_add(k, k, inc);
    }
    gmp_printf("Sum from 1 to %Zd = %Zd\n", arg, n);
    mpz_clear(arg);
    mpz_clear(inc);
    mpz_clear(k);
    mpz_clear(n);
}

void
nsum2(const char* restrict s)
{
    mpq_t n;
    mpq_t k;
    mpq_t inc;
    mpq_t arg;
    mpq_init(n);
    mpq_init(k);
    mpq_init(inc);
    mpq_init(arg);
    mpq_set_str(inc, "1", 10);
    mpq_set_str(k, "1/2", 10);
    mpq_set_str(n, "0", 10);
    mpq_set_str(arg, s, 10);
    mpq_add(n, arg, inc);
    mpq_mul(n, n, arg);
    mpq_mul(n, n, k);
    gmp_printf("Sum from 1 to %Qd = %Qd\n", arg, n);
    mpq_clear(arg);
    mpq_clear(inc);
    mpq_clear(k);
    mpq_clear(n);
}

int
main(int argc, char** argv)
{
    void (*nsum)(const char* restrict);

    if (argc < 2) {
        usage(argv[0]);
        return 2;
    }

#if defined (NSUM1)
    nsum = nsum1;
#else
    nsum = nsum2;
#endif

    for (int i = 1; i < argc; i++) {
        if (valid_number(argv[i]) == false) {
            continue;
        }
        nsum(argv[i]);
    }

    return 0;
}
```

***

## [fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) <a id="fwdsumatrapdf"></a> {#be8d6381}

### C, C++ 版 {#a48a3eb3}

C, C++ 版は他の言語で作られたバイナリよりも高速に動作します．<br>
[MinGW](/MinGW/) の GCC でビルドできます．<br>

C の場合

```
$ cd /c/w32tex/bin
$ gcc -std=c11 -static -o fwdsumatrapdf.exe fwdsumatrapdf.c -luser32 -lshell32 -ladvapi32 -lshlwapi
```

C++ の場合

```
$ cd /c/w32tex/bin
$ g++ -std=c++11 -static -o fwdsumatrapdf.exe fwdsumatrapdf.cpp -luser32 -lshell32 -ladvapi32 -lshlwapi
```

Clang/LLVM でもビルド可能です．<br>

C の場合

```
$ cd /c/w32tex/bin
$ clang -std=c11 -static -o fwdsumatrapdf.exe fwdsumatrapdf.c -luser32 -lshell32 -ladvapi32 -lshlwapi
```

C++ の場合

```
$ cd /c/w32tex/bin
$ clang++ -std=c++11 -static -o fwdsumatrapdf.exe fwdsumatrapdf.cpp -luser32 -lshell32 -ladvapi32 -lshlwapi
```

Microsoft Visual Studio Express の C/C++ Optimizing Compiler for x86/x64 でもビルド可能です．<br>

C の場合

```
>cd /d c:\w32tex\bin
>cl fwdsumatrapdf.c user32.lib advapi32.lib shlwapi.lib
```

C++ の場合

```
>cd /d c:\w32tex\bin
>cl fwdsumatrapdf.cpp user32.lib advapi32.lib shlwapi.lib
```

***

- C:\w32tex\bin\fwdsumatrapdf.c
- C:\w32tex\bin\fwdsumatrapdf.cpp

***

```
/* vim: ts=4 sw=4 expandtab:
 *
 * MinGW
 * $ gcc -std=c11 -static -o fwdsumatrapdf.exe fwdsumatrapdf.c -luser32 -lshell32 -ladvapi32 -lshlwapi
 * $ g++ -std=c++11 -static -o fwdsumatrapdf.exe fwdsumatrapdf.cpp -luser32 -lshell32 -ladvapi32 -lshlwapi
 *
 * Clang/LLVM
 * $ clang -std=c11 -static -o fwdsumatrapdf.exe fwdsumatrapdf.c -luser32 -lshell32 -ladvapi32 -lshlwapi
 * $ clang++ -std=c++11 -static -o fwdsumatrapdf.exe fwdsumatrapdf.cpp -luser32 -lshell32 -ladvapi32 -lshlwapi
 *
 * Microsoft Visual Studio Express
 * >cl fwdsumatrapdf.c user32.lib advapi32.lib shlwapi.lib
 * >cl fwdsumatrapdf.cpp user32.lib advapi32.lib shlwapi.lib
 */

#include <windows.h>
#include <shlwapi.h>
#include <ddeml.h>
#if !defined (_MSC_VER)
#include <shellapi.h>
#endif
#if defined (__cplusplus)
#include <cstdio>
#include <cstring>
#include <cstdlib>
#include <cwchar>
#include <cerrno>
#include <clocale>
using namespace std;
#else
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <wchar.h>
#include <errno.h>
#include <locale.h>
#endif

#if defined (__cplusplus)
#define restrict
#elif defined (_MSC_VER) && (_MSC_VER >= 1400)
#define restrict __restrict
#elif defined (__STDC_VERSION__) && (__STDC_VERSION__ < 199901L)
#define restrict
#endif

#if defined (_MSC_VER)
#if (_MSC_VER >= 1400)
#define snwprintf(buffer, count, format, ...) _snwprintf_s(buffer, count, _TRUNCATE, format, __VA_ARGS__)
#else
#define snwprintf _snwprintf
#endif
#endif

HDDEDATA CALLBACK SumatraDdeCallback(UINT, UINT, HCONV, HSZ, HSZ, HDDEDATA, DWORD, DWORD);
BOOL CALLBACK GetSumatraHWND(HWND, LPARAM);
static int RunSumatraPDF(const wchar_t* restrict);
static int DdeExecute(const wchar_t* restrict, const wchar_t* restrict, const wchar_t* restrict);

#define FWDSUMATRAPDF_BUF_SIZE 1024
#define TIMEOUT 10000
static BOOL existSumatraHWND = FALSE;

HDDEDATA CALLBACK
SumatraDdeCallback(UINT uType,
                   UINT uFmt,
                   HCONV hconv,
                   HSZ hsz1,
                   HSZ hsz2,
                   HDDEDATA hdata,
                   DWORD dwData1,
                   DWORD dwData2)
{
  return NULL;
}

BOOL CALLBACK
GetSumatraHWND(HWND hwnd,
               LPARAM lParam)
{
    wchar_t* title = NULL;
    wchar_t windowText[FWDSUMATRAPDF_BUF_SIZE] = L"";

    UNREFERENCED_PARAMETER(lParam);

    GetWindowTextW(hwnd, windowText, FWDSUMATRAPDF_BUF_SIZE);
    if (windowText[0] == L'\0') {
        return TRUE;
    }

    if ((title = wcsrchr(windowText, L'S')) == NULL) {
        return TRUE;
    }

    if (wcscmp(title, L"SumatraPDF") != 0) {
        return TRUE;
    }

    existSumatraHWND = TRUE;

    return TRUE;
}

static int
RunSumatraPDF(const wchar_t* restrict pdf)
{
    int err = 0;
    HKEY subKey = NULL;
    const wchar_t* keyPath = L"SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths\\SumatraPDF.exe";
    DWORD dwType = 0;
    DWORD sz = 0;
    wchar_t sumatrapdfRegistry[FWDSUMATRAPDF_BUF_SIZE] = L"";
    const wchar_t* sumatrapdfWin32Default = L"C:\\Program Files\\SumatraPDF\\SumatraPDF.exe";
    const wchar_t* sumatrapdfWin64Default = L"C:\\Program Files (x86)\\SumatraPDF\\SumatraPDF.exe";
    wchar_t* sumatrapdf = (wchar_t*)L"SumatraPDF.exe";
    const wchar_t* reuseInstance = L"-reuse-instance";
    wchar_t sumatrapdfCommandLine[FWDSUMATRAPDF_BUF_SIZE] = L"";
    static HWND hList;
    STARTUPINFOW si;
    PROCESS_INFORMATION pi;

    EnumWindows((WNDENUMPROC)GetSumatraHWND, (LPARAM)hList);

    if (existSumatraHWND == TRUE) {
        return err;
    }

    if (RegOpenKeyExW(HKEY_LOCAL_MACHINE, keyPath, 0, KEY_QUERY_VALUE, &subKey) != ERROR_SUCCESS) {
        err = 1;
    }

    if (subKey != NULL) {
        if (RegQueryValueExW(subKey, NULL, NULL, &dwType, NULL, &sz) != ERROR_SUCCESS) {
            err = 1;
        }
    }

    if (subKey != NULL) {
        if (RegQueryValueExW(subKey, NULL, NULL, &dwType, (BYTE*)sumatrapdfRegistry, &sz) != ERROR_SUCCESS) {
            err = 1;
        }
    }

    if (subKey != NULL) {
        RegCloseKey(subKey);
        subKey = NULL;
    }

    if (err == 0) {
        if (wcslen(sumatrapdfRegistry) != 0) {
            if (PathFileExistsW(sumatrapdfRegistry)) {
                sumatrapdf = sumatrapdfRegistry;
            } else {
                err = 1;
            }
        }
    }

    if (err != 0) {
        err = 0;
        if (PathFileExistsW(sumatrapdfWin32Default)) {
            sumatrapdf = (wchar_t*)sumatrapdfWin32Default;
        } else if (PathFileExistsW(sumatrapdfWin64Default)) {
            sumatrapdf = (wchar_t*)sumatrapdfWin64Default;
        } else {
            sumatrapdf = (wchar_t*)L"SumatraPDF.exe";
        }
    }

#if defined (_MSC_VER)
    SecureZeroMemory(&si, sizeof(si));
    SecureZeroMemory(&pi, sizeof(pi));
#else
    ZeroMemory(&si, sizeof(si));
    ZeroMemory(&pi, sizeof(pi));
#endif

    si.cb = sizeof(si);

    snwprintf(sumatrapdfCommandLine, FWDSUMATRAPDF_BUF_SIZE-1, L"\"%ls\" %ls \"%ls\"", sumatrapdf, reuseInstance, pdf);

    if (CreateProcessW(NULL, sumatrapdfCommandLine, NULL, NULL, FALSE, 0, NULL, NULL, &si, &pi) == 0) {
        err = 3;
        return err;
    }

    WaitForInputIdle(pi.hProcess, TIMEOUT);

    return err;
}

static int
DdeExecute(const wchar_t* restrict server,
           const wchar_t* restrict topic,
           const wchar_t* restrict command)
{
    int err = 0;
    DWORD idInstance = 0;
    HSZ hszServer = NULL;
    HSZ hszTopic = NULL;
    HCONV hConvClient = NULL;
    HDDEDATA hDdeData = NULL;
    HDDEDATA hDdeTransactionData = NULL;

    if (DdeInitializeW(&idInstance, (PFNCALLBACK)SumatraDdeCallback, APPCMD_CLIENTONLY, 0) != DMLERR_NO_ERROR) {
        fputws(L"DdeInitializeW error\n", stderr);
        err = 4;
        goto exn;
    }

    if ((hszServer = DdeCreateStringHandleW(idInstance, server, CP_WINUNICODE)) == NULL) {
        fputws(L"DdeCreateStringHandleW error\n", stderr);
        err = (int)DdeGetLastError(idInstance);
        goto exn;
    }

    if ((hszTopic = DdeCreateStringHandleW(idInstance, topic, CP_WINUNICODE)) == NULL) {
        fputws(L"DdeCreateStringHandleW error\n", stderr);
        err = (int)DdeGetLastError(idInstance);
        goto exn;
    }

    if ((hConvClient = DdeConnect(idInstance, hszServer, hszTopic, NULL)) == NULL) {
        fputws(L"DdeConnect error\n", stderr);
        err = (int)DdeGetLastError(idInstance);
        goto exn;
    }

    if ((hDdeData = DdeCreateDataHandle(idInstance, (BYTE*)((wchar_t*)command), (DWORD)((wcslen(command) + 1)*sizeof(wchar_t)), 0, NULL, CF_UNICODETEXT, 0)) == NULL) {
        fputws(L"DdeCreateDataHandle error\n", stderr);
        err = (int)DdeGetLastError(idInstance);
        goto exn;
    }

    if ((hDdeTransactionData = DdeClientTransaction((BYTE*)hDdeData, (DWORD)-1, hConvClient, NULL, 0, XTYP_EXECUTE, TIMEOUT, NULL)) == NULL) {
        fputws(L"DdeClientTransaction error\n", stderr);
        err = (int)DdeGetLastError(idInstance);
        goto exn;
    }

exn:
    if (hDdeTransactionData) {
        if (DdeFreeDataHandle(hDdeTransactionData) == FALSE) {
            err = (int)DdeGetLastError(idInstance);
            if (err) {
                fputws(L"DdeFreeDataHandle error\n", stderr);
            }
        }
    }

    if (hDdeData) {
        if (DdeFreeDataHandle(hDdeData) == FALSE) {
            err = (int)DdeGetLastError(idInstance);
            if (err) {
                fputws(L"DdeFreeDataHandle error\n", stderr);
            }
        }
    }

    if (hszServer) {
        if (DdeFreeStringHandle(idInstance, hszServer) == FALSE) {
            fputws(L"DdeFreeStringHandle error\n", stderr);
            err = (int)DdeGetLastError(idInstance);
        }
    }

    if (hszTopic) {
        if (DdeFreeStringHandle(idInstance, hszTopic) == FALSE) {
            fputws(L"DdeFreeStringHandle error\n", stderr);
            err = (int)DdeGetLastError(idInstance);
        }
    }

    if (hConvClient) {
        if (DdeDisconnect(hConvClient) == FALSE) {
            fputws(L"DdeDisconnect error\n", stderr);
            err = (int)DdeGetLastError(idInstance);
        }
    }

    if (idInstance) {
        if (DdeUninitialize(idInstance) == FALSE) {
            fputws(L"DdeUninitialize error\n", stderr);
            err = 5;
        }
    }

    return err;
}

int
#if defined (_MSC_VER)
wmain(int argc,
      wchar_t** argv)
#else
main(void)
#endif
{
    int err = 0;
    wchar_t* pdf = NULL;
    wchar_t* tex = NULL;
    wchar_t* line = NULL;
    int active = 0;
    wchar_t forwardSearch[FWDSUMATRAPDF_BUF_SIZE] = L"";
#if !defined (_MSC_VER)
    int argc = 0;
    wchar_t** argv = CommandLineToArgvW(GetCommandLineW(), &argc);
#endif

    if (argc != 4) {
        fwprintf(stderr, L"usage: %ls pdffile texfile line\n", argv[0]);
        err = 2;
        return err;
    }

    pdf = argv[1];
    tex = argv[2];
    line = argv[3];

    if (wcslen(pdf) >= (FWDSUMATRAPDF_BUF_SIZE/4)) {
        fwprintf(stderr, L"%ls is too long.\n", pdf);
        err = -4;
        return err;
    }

    if (wcslen(tex) >= (FWDSUMATRAPDF_BUF_SIZE/4)) {
        fwprintf(stderr, L"%ls is too long.\n", tex);
        err = -3;
        return err;
    }

    if (wcslen(line) >= (FWDSUMATRAPDF_BUF_SIZE/4)) {
        fwprintf(stderr, L"%ls is too long.\n", line);
        err = -2;
        return err;
    }

    if (wcstol(line, NULL, 0) == 0 || errno == ERANGE) {
        fwprintf(stderr, L"%ls can't convert to the line number.\n", line);
        err = -1;
        return err;
    }

    if ((err = RunSumatraPDF(pdf)) != 0) {
        return err;
    }

    snwprintf(forwardSearch, FWDSUMATRAPDF_BUF_SIZE-1, L"%ls%ls%ls%ls%ls%ls%ls%d%ls",
      L"[ForwardSearch(\"", pdf, L"\",\"", tex, L"\",", line, L",0,0,", active, L")]");

    if ((err = DdeExecute(L"SUMATRA", L"control", forwardSearch)) != 0) {
        return err;
    }

    return err;
}
```

***
