---
title: "C++"
url: "/C++/"
date: 2013-05-19T16:53:12Z
pukiwiki: "C++"
---

# C++

## C++ {#j4003691}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/C_plus_plus.svg/200px-C_plus_plus.svg.png" alt="C++" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Summary {#g7125441}

C++ は汎用プログラミング言語です．<br>

- [http://www.stroustrup.com/](http://www.stroustrup.com/)
- [http://ja.wikipedia.org/wiki/C++](http://ja.wikipedia.org/wiki/C++)
- [http://ja.wikibooks.org/wiki/C++](http://ja.wikibooks.org/wiki/C++)
- [http://www.cplusplus.com/](http://www.cplusplus.com/)
- [cpprefjp - C++ Library Reference](https://sites.google.com/site/cpprefjp/)
    - [コンパイラの実装状況 - cpprefjp - C++ Library Reference](https://sites.google.com/site/cpprefjp/implementation-status)
    - [site/implementation-status.md at master · cpprefjp/site · GitHub](https://github.com/cpprefjp/site/blob/master/implementation-status.md)
- [C++：CodeZine（コードジン）](http://codezine.jp/article/tag/165)
- [本の虫](http://cpplover.blogspot.jp/)
- [Faith and Brave - C++で遊ぼう](http://faithandbrave.hateblo.jp/)
    - [C++14でのreturnとreturn (…)の違い](http://faithandbrave.hateblo.jp/entry/2014/06/11/164158)
- [http://ppp-lab.sakura.ne.jp/index_ppp.shtml](http://ppp-lab.sakura.ne.jp/index_ppp.shtml)
- [n次正方行列の逆行列をTeX形式で出力するプログラム](http://nazolab.net/notes/n/145)
- [http://msdn.microsoft.com/ja-jp/library/60k1461a.aspx](http://msdn.microsoft.com/ja-jp/library/60k1461a.aspx)
- [http://msdn.microsoft.com/ja-jp/library/vstudio/60k1461a.aspx](http://msdn.microsoft.com/ja-jp/library/vstudio/60k1461a.aspx)
- [http://pic.dhe.ibm.com/infocenter/comphelp/v121v141/index.jsp](http://pic.dhe.ibm.com/infocenter/comphelp/v121v141/index.jsp)
- [http://dev.activebasic.com/egtra/category/cpp/](http://dev.activebasic.com/egtra/category/cpp/)
- [http://dev.activebasic.com/egtra/tag/cplusplus11/](http://dev.activebasic.com/egtra/tag/cplusplus11/)
- [ソフトウエア研究会in秋葉原](http://ssa.techarts.co.jp/)
- [Visual C++ の勉強部屋](http://homepage3.nifty.com/ishidate/vcpp.htm)
- [ゲーム開発者のための C++11/C++14](http://www.slideshare.net/Reputeless/c11c14)
- [最新のC++を学ぶ - Barbara Moo氏インタビュー](http://www.infoq.com/jp/articles/modern-C-book-moo)
- [void\*にdeleteしてもデストラクタが呼ばれない！？](http://okazuki.hatenablog.com/entry/20120204/1328323854)
- [newしてvoid\*化してdeleteするとはまる！](http://marupeke296.com/CPP_NewVoidDelete.html)
- [32bit プロセスは 64bit プロセスを見つけられない](http://d.hatena.ne.jp/tt_clown/20110416/1302927489)
- [C++で大規模な配列追記のパフォーマンス](http://d.hatena.ne.jp/ponkotuy/20111216/1324027752)
- [http://www.slideshare.net/adankevich/c11-15621074](http://www.slideshare.net/adankevich/c11-15621074)
- [You cannot override a class (static) constant](https://gist.github.com/MihailJP/4236262)
- [C++ Advent Calendar 2013 - PARTAKE](http://partake.in/events/91328710-3c7b-436e-bd4e-4d98d88333f9)
- [C++ (fork) Advent Calendar 2013](http://www.adventar.org/calendars/211)
- [main() のすり替え in C++](http://yak-ex.blogspot.jp/2013/12/main-in-c.html)
- [C++ による Windows プログラミングの学習](<http://msdn.microsoft.com/ja-jp/library/windows/desktop/ff381399(v=vs.85).aspx>)

### 処理系 {#zc4c802d}

- [GCC, the GNU Compiler Collection - GNU Project - Free Software Foundation (FSF)](http://gcc.gnu.org/)
- ["clang" C Language Family Frontend for LLVM](http://clang.llvm.org/)
    - [http://clang.llvm.org/cxx_status.html](http://clang.llvm.org/cxx_status.html)
- Microsoft Visual Studio Express
    - [Visual Studio "14" CTP Downloads](http://www.visualstudio.com/en-us/downloads/visual-studio-14-ctp-vs)
    - [Support For C++11 Features (Modern C++)](http://msdn.microsoft.com/en-us/library/vstudio/hh567368.aspx)
    - [C++11 の機能 (Modern C++) のサポート](http://msdn.microsoft.com/ja-jp/library/vstudio/hh567368.aspx)

### ライブラリ・フレームワーク {#se7f734e}

- Boost
- [Qt](/Qt/)

### IDE・エディタ {#a35a736d}

#### フリーソフトウェア (オープンソースソフトウェア) {#e95cc107}

- [Eclipse](/Eclipse/)
    - [Eclipse CDT](http://www.eclipse.org/cdt/)
- [Emacs](/Emacs/)
- [Vim](/Vim/)
- [Notepad++](/Notepad++/)
- [サクラエディタ](</サクラエディタ/>)

## [fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) <a id="fwdsumatrapdf"></a> {#m066ad0f}

### C++ 版 {#qea0161e}

[MinGW/MinGW-W64](/MinGW/) の GCC でビルドできます．<br>

```
g++ -std=c++11 -static -o fwdsumatrapdf.exe fwdsumatrapdf.cpp -luser32 -lshell32 -ladvapi32 -lshlwapi
```

Clang/LLVM でもビルド可能です．<br>

```
clang++ -std=c++11 -static -o fwdsumatrapdf.exe fwdsumatrapdf.cpp -luser32 -lshell32 -ladvapi32 -lshlwapi -isystem /mingw/lib/gcc/mingw32/4.8.1/include/c++ -isystem /mingw/lib/gcc/mingw32/4.8.1/include/c++/mingw32
```

Microsoft Visual Studio "14" CTP 以降の C/C++ Optimizing Compiler for x86/x64 でもビルド可能です．<br>

```
cl fwdsumatrapdf.cpp user32.lib advapi32.lib shlwapi.lib
```

***

- fwdsumatrapdf.cpp

***

```
/* vim: ts=4 sw=4 expandtab:
 *
 * MinGW/MinGW-W64
 * $ g++ -std=c++11 -static -o fwdsumatrapdf.exe fwdsumatrapdf.cpp -luser32 -lshell32 -ladvapi32 -lshlwapi
 *
 * Clang/LLVM
 * $ clang++ -std=c++11 -static -o fwdsumatrapdf.exe fwdsumatrapdf.cpp -luser32 -lshell32 -ladvapi32 -lshlwapi -isystem /mingw/lib/gcc/mingw32/4.8.1/include/c++ -isystem /mingw/lib/gcc/mingw32/4.8.1/include/c++/mingw32
 *
 * Microsoft Visual Studio Express
 * >cl fwdsumatrapdf.cpp user32.lib advapi32.lib shlwapi.lib
 */

#include <windows.h>
#include <shlwapi.h>
#include <ddeml.h>
#if !defined _MSC_VER
#include <shellapi.h>
#endif
#include <iostream>
#include <sstream>
#include <iomanip>
#include <array>
#include <string>
#include <cstring>
#include <cstdlib>
#include <cwchar>
#include <cerrno>
#if defined _MSC_VER
#pragma comment(lib, "user32.lib")
#pragma comment(lib, "advapi32.lib")
#pragma comment(lib, "shlwapi.lib")
#endif

auto static constexpr timeout = 10000;
auto static existSumatraHWND = FALSE;

auto CALLBACK GetSumatraHWND(HWND hwnd, LPARAM lParam) -> BOOL
{
    UNREFERENCED_PARAMETER(lParam);

    auto constexpr maxSize = 1024;
    auto windowText = std::array<wchar_t, maxSize>{L""};
    ::GetWindowTextW(hwnd, windowText.data(), maxSize);

    if (windowText[0] == L'\0') {
        return TRUE;
    }

    wchar_t* title = nullptr;
    if ((title = std::wcsrchr(windowText.data(), L'S')) == nullptr) {
        return TRUE;
    }

    if (std::wcscmp(title, L"SumatraPDF") != 0) {
        return TRUE;
    }

    existSumatraHWND = TRUE;

    return TRUE;
}

namespace sumatrapdfclient
{
    class DDEClient
    {
    private:
        std::basic_string<wchar_t> server;
        std::basic_string<wchar_t> topic;
        DWORD idInstance;
        HSZ hszServer;
        HSZ hszTopic;
        HCONV hConvClient;
        HDDEDATA hDdeData;
        HDDEDATA hDdeTransactionData;

    public:
        explicit DDEClient(const std::basic_string<wchar_t>& server, const std::basic_string<wchar_t>& topic)
        {
            this->server = server;
            this->topic = topic;
            this->idInstance = 0;
            this->hszServer = nullptr;
            this->hszTopic = nullptr;
            this->hConvClient = nullptr;
            this->hDdeData = nullptr;
            this->hDdeTransactionData = nullptr;
        }

        ~DDEClient()
        {
            if (this->hDdeTransactionData != nullptr) {
                if (::DdeFreeDataHandle(this->hDdeTransactionData) == FALSE) {
                    if (::DdeGetLastError(this->idInstance) != 0) {
                        std::wcerr << L"DdeFreeDataHandle error" << std::endl;
                    }
                }
            }

            if (this->hDdeData != nullptr) {
                if (::DdeFreeDataHandle(this->hDdeData) == FALSE) {
                    if (::DdeGetLastError(this->idInstance) != 0) {
                        std::wcerr << L"DdeFreeDataHandle error" << std::endl;
                    }
                }
            }

            if (this->hszServer != nullptr) {
                if (::DdeFreeStringHandle(this->idInstance, this->hszServer) == FALSE) {
                    std::wcerr << L"DdeFreeStringHandle error" << std::endl;
                }
            }

            if (this->hszTopic != nullptr) {
                if (::DdeFreeStringHandle(this->idInstance, this->hszTopic) == FALSE) {
                    std::wcerr << L"DdeFreeStringHandle error" << std::endl;
                }
            }

            if (this->hConvClient != nullptr) {
                if (::DdeDisconnect(this->hConvClient) == FALSE) {
                    std::wcerr << L"DdeDisconnect error" << std::endl;
                }
            }

            if (this->idInstance != 0) {
                if (::DdeUninitialize(this->idInstance) == FALSE) {
                    std::wcerr << L"DdeUninitialize error" << std::endl;
                }
            }

        }

        auto execute(const std::basic_string<wchar_t>& command) -> int
        {
            if (::DdeInitializeW(&(this->idInstance), reinterpret_cast<PFNCALLBACK>([]() -> HDDEDATA (CALLBACK *)(UINT uType, UINT uFmt, HCONV hconv, HSZ hsz1, HSZ hsz2, HDDEDATA hdata, DWORD dwData1, DWORD dwData2) { return nullptr; }()), APPCMD_CLIENTONLY, 0) != DMLERR_NO_ERROR) {
                std::wcerr << L"DdeInitializeW error" << std::endl;
                return 4;
            }

            if ((this->hszServer = ::DdeCreateStringHandleW(this->idInstance, this->server.c_str(), CP_WINUNICODE)) == nullptr) {
                std::wcerr << L"DdeCreateStringHandleW error" << std::endl;
                return ::DdeGetLastError(this->idInstance);
            }

            if ((this->hszTopic = ::DdeCreateStringHandleW(this->idInstance, this->topic.c_str(), CP_WINUNICODE)) == nullptr) {
                std::wcerr << L"DdeCreateStringHandleW error" << std::endl;
                return ::DdeGetLastError(this->idInstance);
            }

            if ((this->hConvClient = ::DdeConnect(this->idInstance, this->hszServer, this->hszTopic, nullptr)) == nullptr) {
                std::wcerr << L"DdeConnect error" << std::endl;
                return ::DdeGetLastError(this->idInstance);
            }

            if ((this->hDdeData = ::DdeCreateDataHandle(this->idInstance, reinterpret_cast<BYTE*>(const_cast<wchar_t*>(command.c_str())), static_cast<DWORD>((command.length() + 1)*sizeof(wchar_t)), 0, nullptr, CF_UNICODETEXT, 0)) == nullptr) {
                std::wcerr << L"DdeCreateDataHandle error" << std::endl;
                return ::DdeGetLastError(this->idInstance);
            }

            if ((this->hDdeTransactionData = ::DdeClientTransaction(reinterpret_cast<BYTE*>(this->hDdeData), static_cast<DWORD>(-1), this->hConvClient, nullptr, 0, XTYP_EXECUTE, timeout, nullptr)) == nullptr) {
                std::wcerr << L"DdeClientTransaction error" << std::endl;
                return ::DdeGetLastError(this->idInstance);
            }

            return 0;
        }

    };
}

auto static RunSumatraPDF(const std::basic_string<wchar_t>& pdf) -> int
{
    auto err = 0;

    static HWND hList;
    ::EnumWindows(reinterpret_cast<WNDENUMPROC>(GetSumatraHWND), reinterpret_cast<LPARAM>(hList));

    if (existSumatraHWND == TRUE) {
        return err;
    }

    HKEY subKey = nullptr;
    const auto keyPath = std::basic_string<wchar_t>(LR"(SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\SumatraPDF.exe)");
    if (::RegOpenKeyExW(HKEY_LOCAL_MACHINE, keyPath.c_str(), 0, KEY_QUERY_VALUE, &subKey) != ERROR_SUCCESS) {
        err = 1;
    }

    DWORD dwType = 0;
    DWORD sz = 0;
    if (subKey != nullptr) {
        if (::RegQueryValueExW(subKey, nullptr, nullptr, &dwType, nullptr, &sz) != ERROR_SUCCESS) {
            err = 1;
        }
    }

    auto sumatrapdfRegistry = std::basic_string<wchar_t>(sz, L'\0');
    if (subKey != nullptr) {
        if (::RegQueryValueExW(subKey, nullptr, nullptr, &dwType, reinterpret_cast<BYTE*>(const_cast<wchar_t*>(sumatrapdfRegistry.c_str())), &sz) != ERROR_SUCCESS) {
            err = 1;
        }
    }

    if (subKey != nullptr) {
        ::RegCloseKey(subKey);
        subKey = nullptr;
    }

    auto sumatrapdf = std::basic_string<wchar_t>{L"SumatraPDF.exe"};
    if (err == 0) {
        if (sumatrapdfRegistry.length() != 0) {
            if (::PathFileExistsW(sumatrapdfRegistry.c_str())) {
                sumatrapdf = sumatrapdfRegistry;
            } else {
                err = 1;
            }
        }
    }

    if (err != 0) {
        err = 0;
        constexpr auto sumatrapdfWin32Default = LR"(C:\Program Files\SumatraPDF\SumatraPDF.exe)";
        constexpr auto sumatrapdfWin64Default = LR"#(C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe)#";
        if (::PathFileExistsW(sumatrapdfWin32Default)) {
            sumatrapdf = sumatrapdfWin32Default;
        } else if (::PathFileExistsW(sumatrapdfWin64Default)) {
            sumatrapdf = sumatrapdfWin64Default;
        } else {
            sumatrapdf = L"SumatraPDF.exe";
        }
    }

    STARTUPINFOW si;
    PROCESS_INFORMATION pi;

#if defined SecureZeroMemory
    SecureZeroMemory(&si, sizeof(si));
    SecureZeroMemory(&pi, sizeof(pi));
#else
    ZeroMemory(&si, sizeof(si));
    ZeroMemory(&pi, sizeof(pi));
#endif

    si.cb = sizeof(si);

    const auto reuseInstance = std::basic_string<wchar_t>{L"-reuse-instance"};
    std::basic_ostringstream<wchar_t> oss;
    oss << L"\"" << sumatrapdf << L"\" " << reuseInstance << L" \"" << pdf << L"\"";
    auto sumatrapdfCommandLine = std::basic_string<wchar_t>{oss.str()};

    if (::CreateProcessW(nullptr, const_cast<wchar_t*>(sumatrapdfCommandLine.c_str()), nullptr, nullptr, FALSE, 0, nullptr, nullptr, &si, &pi) == 0) {
        err = 3;
        return err;
    }

    ::WaitForInputIdle(pi.hProcess, timeout);

    return err;
}

auto static DdeExecute(const std::basic_string<wchar_t>& server, const std::basic_string<wchar_t>& topic, const std::basic_string<wchar_t>& command) -> int
{
    auto dde = sumatrapdfclient::DDEClient{server, topic};
    return dde.execute(command);
}

#if defined _MSC_VER
auto wmain(int argc, wchar_t** argv) -> int
#else
auto main() -> int
#endif
{
    auto err = 0;
#if !defined _MSC_VER
    auto argc = 0;
    auto argv = ::CommandLineToArgvW(::GetCommandLineW(), &argc);
#endif

    if (argc != 4) {
        auto hStdError = ::GetStdHandle(STD_ERROR_HANDLE);
        DWORD dwWriteByte;
        wchar_t usage[256] = L"";
        std::wcscat(usage, L"usage: ");
        std::wcscat(usage, argv[0]);
        std::wcscat(usage, L" pdffile texfile line\n");
        WriteConsoleW(hStdError, usage, std::wcslen(usage), &dwWriteByte, nullptr);
        err = 2;
        return err;
    }

    auto const pdf = std::basic_string<wchar_t>{argv[1]};
    auto const tex = std::basic_string<wchar_t>{argv[2]};
    auto const line = std::basic_string<wchar_t>{argv[3]};

    if (std::wcstol(line.c_str(), nullptr, 0) == 0 || errno == ERANGE) {
        std::wcerr << line << L" can't convert to the line number." << std::endl;
        err = -1;
        return err;
    }

    if ((err = RunSumatraPDF(pdf)) != 0) {
        return err;
    }

    auto active = 0;
    std::basic_ostringstream<wchar_t> woss;
    woss << L"[ForwardSearch(\"" << pdf << L"\",\"" << tex << L"\"," << line << L",0,0," << active << L")]";
    auto const forwardSearch = std::basic_string<wchar_t>{woss.str()};
    auto const server = std::basic_string<wchar_t>{L"SUMATRA"};
    auto const topic = std::basic_string<wchar_t>{L"control"};

    if ((err = DdeExecute(server, topic, forwardSearch)) != 0) {
        return err;
    }

    return err;
}
```

***
