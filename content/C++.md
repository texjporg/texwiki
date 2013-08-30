---
title: "C++"
url: "/C++/"
date: 2013-05-19T16:53:12Z
pukiwiki: "C++"
---

# C++

## C++ {#j4003691}

- [http://www.stroustrup.com/](http://www.stroustrup.com/)
- [http://ja.wikipedia.org/wiki/C++](http://ja.wikipedia.org/wiki/C++)
- [http://ja.wikibooks.org/wiki/C++](http://ja.wikibooks.org/wiki/C++)
- [http://www.cplusplus.com/](http://www.cplusplus.com/)
- [C++：CodeZine（コードジン）](http://codezine.jp/article/tag/165)
- [本の虫](http://cpplover.blogspot.jp/)
- [n次正方行列の逆行列をTeX形式で出力するプログラム](http://nazolab.net/notes/n/145)
- [http://msdn.microsoft.com/ja-jp/library/60k1461a.aspx](http://msdn.microsoft.com/ja-jp/library/60k1461a.aspx)
- [http://msdn.microsoft.com/ja-jp/library/vstudio/60k1461a.aspx](http://msdn.microsoft.com/ja-jp/library/vstudio/60k1461a.aspx)
- [http://pic.dhe.ibm.com/infocenter/comphelp/v121v141/index.jsp](http://pic.dhe.ibm.com/infocenter/comphelp/v121v141/index.jsp)
- [http://dev.activebasic.com/egtra/category/cpp/](http://dev.activebasic.com/egtra/category/cpp/)
- [http://dev.activebasic.com/egtra/tag/cplusplus11/](http://dev.activebasic.com/egtra/tag/cplusplus11/)
- [Visual C++ の勉強部屋](http://homepage3.nifty.com/ishidate/vcpp.htm)
- [最新のC++を学ぶ - Barbara Moo氏インタビュー](http://www.infoq.com/jp/articles/modern-C-book-moo)
- [void\*にdeleteしてもデストラクタが呼ばれない！？](http://okazuki.hatenablog.com/entry/20120204/1328323854)
- [newしてvoid\*化してdeleteするとはまる！](http://marupeke296.com/CPP_NewVoidDelete.html)
- [32bit プロセスは 64bit プロセスを見つけられない](http://d.hatena.ne.jp/tt_clown/20110416/1302927489)

### 処理系 {#zc4c802d}

- [GCC, the GNU Compiler Collection - GNU Project - Free Software Foundation (FSF)](http://gcc.gnu.org/)
- ["clang" C Language Family Frontend for LLVM](http://clang.llvm.org/)
- [Microsoft Visual Studio Express](http://www.microsoft.com/japan/msdn/vstudio/express/)

### ライブラリ・フレームワーク {#se7f734e}

- [Boost](http://www.boost.org/)
- [Qt](http://qt-project.org/)
    - [Qt関連情報](http://uilabo.web.fc2.com/Qt/index.html)
    - [Connect to DDE Server](http://qt-project.org/forums/viewthread/16309/)

## [fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) <a id="fwdsumatrapdf"></a> {#m066ad0f}

### C++11 版 {#qea0161e}

[MinGW](/MinGW/) の GCC でビルドできます．<br>

```
$ cd /c/w32tex/bin
$ g++ -std=c++11 -static -o fwdsumatrapdf.exe fwdsumatrapdf.cpp -luser32 -lshell32 -ladvapi32 -lshlwapi
```

Clang/LLVM でもビルド可能です．<br>

```
$ cd /c/w32tex/bin
$ clang++ -std=c++11 -static -o fwdsumatrapdf.exe fwdsumatrapdf.cpp -luser32 -lshell32 -ladvapi32 -lshlwapi
```

Microsoft Visual Studio Express 2013 以降の C/C++ Optimizing Compiler for x86/x64 でもビルド可能です．<br>

```
>cd /d c:\w32tex\bin
>cl fwdsumatrapdf.cpp user32.lib advapi32.lib shlwapi.lib
```

***

- C:\w32tex\bin\fwdsumatrapdf.cpp

***

```
/* vim: ts=4 sw=4 expandtab:
 *
 * MinGW
 * $ g++ -std=c++11 -static -o fwdsumatrapdf.exe fwdsumatrapdf.cpp -luser32 -lshell32 -ladvapi32 -lshlwapi
 *
 * Clang/LLVM
 * $ clang++ -std=c++11 -static -o fwdsumatrapdf.exe fwdsumatrapdf.cpp -luser32 -lshell32 -ladvapi32 -lshlwapi
 *
 * Microsoft Visual Studio Express
 * >cl fwdsumatrapdf.cpp user32.lib advapi32.lib shlwapi.lib
 */

#include <windows.h>
#include <shlwapi.h>
#include <ddeml.h>
#if !defined (_MSC_VER)
#include <shellapi.h>
#endif
#include <iostream>
#include <sstream>
#include <iomanip>
#include <string>
#include <cstring>
#include <cstdlib>
#include <cwchar>
#include <cerrno>

using namespace std;

auto static const TIMEOUT = 10000;
auto static existSumatraHWND = FALSE;

auto inline SumatraDdeCallback() -> HDDEDATA (CALLBACK *)(UINT uType, UINT uFmt, HCONV hconv, HSZ hsz1, HSZ hsz2, HDDEDATA hdata, DWORD dwData1, DWORD dwData2) { return nullptr; };

auto CALLBACK GetSumatraHWND(HWND hwnd, LPARAM lParam) -> BOOL
{
    UNREFERENCED_PARAMETER(lParam);

    auto const maxSize = 1024;
    basic_string<wchar_t> windowText(maxSize, L'\0');
    GetWindowTextW(hwnd, const_cast<wchar_t*>(windowText.c_str()), maxSize);

    if (windowText.at(0) == L'\0') {
        return TRUE;
    }

    wchar_t* title = nullptr;
    if ((title = wcsrchr(const_cast<wchar_t*>(windowText.c_str()), L'S')) == nullptr) {
        return TRUE;
    }

    if (wcscmp(title, L"SumatraPDF") != 0) {
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
        basic_string<wchar_t> server;
        basic_string<wchar_t> topic;
        DWORD idInstance;
        HSZ hszServer;
        HSZ hszTopic;
        HCONV hConvClient;
        HDDEDATA hDdeData;
        HDDEDATA hDdeTransactionData;

    public:
        explicit DDEClient(const basic_string<wchar_t>& server, const basic_string<wchar_t>& topic)
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
                if (DdeFreeDataHandle(this->hDdeTransactionData) == FALSE) {
                    if (DdeGetLastError(this->idInstance) != 0) {
                        wcerr << L"DdeFreeDataHandle error" << endl;
                    }
                }
            }

            if (this->hDdeData != nullptr) {
                if (DdeFreeDataHandle(this->hDdeData) == FALSE) {
                    if (DdeGetLastError(this->idInstance) != 0) {
                        wcerr << L"DdeFreeDataHandle error" << endl;
                    }
                }
            }

            if (this->hszServer != nullptr) {
                if (DdeFreeStringHandle(this->idInstance, this->hszServer) == FALSE) {
                    wcerr << L"DdeFreeStringHandle error" << endl;
                }
            }

            if (this->hszTopic != nullptr) {
                if (DdeFreeStringHandle(this->idInstance, this->hszTopic) == FALSE) {
                    wcerr << L"DdeFreeStringHandle error" << endl;
                }
            }

            if (this->hConvClient != nullptr) {
                if (DdeDisconnect(this->hConvClient) == FALSE) {
                    wcerr << L"DdeDisconnect error" << endl;
                }
            }

            if (this->idInstance != 0) {
                if (DdeUninitialize(this->idInstance) == FALSE) {
                    wcerr << L"DdeUninitialize error" << endl;
                }
            }

        }

        auto execute(const basic_string<wchar_t>& command) -> int
        {
            if (DdeInitializeW(&(this->idInstance), reinterpret_cast<PFNCALLBACK>(SumatraDdeCallback()), APPCMD_CLIENTONLY, 0) != DMLERR_NO_ERROR) {
                wcerr << L"DdeInitializeW error" << endl;
                return 4;
            }

            if ((this->hszServer = DdeCreateStringHandleW(this->idInstance, this->server.c_str(), CP_WINUNICODE)) == nullptr) {
                wcerr << L"DdeCreateStringHandleW error" << endl;
                return DdeGetLastError(idInstance);
            }

            if ((this->hszTopic = DdeCreateStringHandleW(this->idInstance, this->topic.c_str(), CP_WINUNICODE)) == nullptr) {
                wcerr << L"DdeCreateStringHandleW error" << endl;
                return DdeGetLastError(idInstance);
            }

            if ((this->hConvClient = DdeConnect(this->idInstance, this->hszServer, this->hszTopic, nullptr)) == nullptr) {
                wcerr << L"DdeConnect error" << endl;
                return DdeGetLastError(idInstance);
            }

            if ((this->hDdeData = DdeCreateDataHandle(this->idInstance, reinterpret_cast<BYTE*>(const_cast<wchar_t*>(command.c_str())), static_cast<DWORD>((command.length() + 1)*sizeof(wchar_t)), 0, nullptr, CF_UNICODETEXT, 0)) == nullptr) {
                wcerr << L"DdeCreateDataHandle error" << endl;
                return DdeGetLastError(idInstance);
            }

            if ((this->hDdeTransactionData = DdeClientTransaction(reinterpret_cast<BYTE*>(this->hDdeData), static_cast<DWORD>(-1), this->hConvClient, nullptr, 0, XTYP_EXECUTE, TIMEOUT, nullptr)) == nullptr) {
                wcerr << L"DdeClientTransaction error" << endl;
                return DdeGetLastError(idInstance);
            }

            return 0;
        }

    };
}

using namespace sumatrapdfclient;

auto static RunSumatraPDF(const basic_string<wchar_t>& pdf) -> int
{
    auto err = 0;

    static HWND hList;
    EnumWindows(reinterpret_cast<WNDENUMPROC>(GetSumatraHWND), reinterpret_cast<LPARAM>(hList));

    if (existSumatraHWND == TRUE) {
        return err;
    }

    HKEY subKey = nullptr;
    const basic_string<wchar_t> keyPath(LR"(SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\SumatraPDF.exe)");
    if (RegOpenKeyExW(HKEY_LOCAL_MACHINE, keyPath.c_str(), 0, KEY_QUERY_VALUE, &subKey) != ERROR_SUCCESS) {
        err = 1;
    }

    DWORD dwType = 0;
    DWORD sz = 0;
    if (subKey != nullptr) {
        if (RegQueryValueExW(subKey, nullptr, nullptr, &dwType, nullptr, &sz) != ERROR_SUCCESS) {
            err = 1;
        }
    }

    basic_string<wchar_t> sumatrapdfRegistry(sz, L'\0');
    if (subKey != nullptr) {
        if (RegQueryValueExW(subKey, nullptr, nullptr, &dwType, reinterpret_cast<BYTE*>(const_cast<wchar_t*>(sumatrapdfRegistry.c_str())), &sz) != ERROR_SUCCESS) {
            err = 1;
        }
    }

    if (subKey != nullptr) {
        RegCloseKey(subKey);
        subKey = nullptr;
    }

    basic_string<wchar_t> sumatrapdf(L"SumatraPDF.exe");
    if (err == 0) {
        if (sumatrapdfRegistry.length() != 0) {
            if (PathFileExistsW(sumatrapdfRegistry.c_str())) {
                sumatrapdf = sumatrapdfRegistry;
            } else {
                err = 1;
            }
        }
    }

    if (err != 0) {
        err = 0;
        const wchar_t* sumatrapdfWin32Default = LR"(C:\Program Files\SumatraPDF\SumatraPDF.exe)";
        const wchar_t* sumatrapdfWin64Default = LR"#(C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe)#";
        if (PathFileExistsW(sumatrapdfWin32Default)) {
            sumatrapdf = sumatrapdfWin32Default;
        } else if (PathFileExistsW(sumatrapdfWin64Default)) {
            sumatrapdf = sumatrapdfWin64Default;
        } else {
            sumatrapdf = L"SumatraPDF.exe";
        }
    }

    STARTUPINFOW si;
    PROCESS_INFORMATION pi;

#if defined (_MSC_VER)
    SecureZeroMemory(&si, sizeof(si));
    SecureZeroMemory(&pi, sizeof(pi));
#else
    ZeroMemory(&si, sizeof(si));
    ZeroMemory(&pi, sizeof(pi));
#endif

    si.cb = sizeof(si);

    const basic_string<wchar_t> reuseInstance(L"-reuse-instance");
    basic_ostringstream<wchar_t> oss;
    oss << L"\"" << sumatrapdf << L"\" " << reuseInstance << L" \"" << pdf << L"\"";
    basic_string<wchar_t> sumatrapdfCommandLine(oss.str());

    if (CreateProcessW(nullptr, const_cast<wchar_t*>(sumatrapdfCommandLine.c_str()), nullptr, nullptr, FALSE, 0, nullptr, nullptr, &si, &pi) == 0) {
        err = 3;
        return err;
    }

    WaitForInputIdle(pi.hProcess, TIMEOUT);

    return err;
}

auto static DdeExecute(const basic_string<wchar_t>& server, const basic_string<wchar_t>& topic, const basic_string<wchar_t>& command) -> int
{
    auto dde = DDEClient(server, topic);
    return dde.execute(command);
}

#if defined (_MSC_VER)
auto wmain(int argc, wchar_t** argv) -> int
#else
auto main() -> int
#endif
{
    auto err = 0;
#if !defined (_MSC_VER)
    auto argc = 0;
    auto argv = CommandLineToArgvW(GetCommandLineW(), &argc);
#endif

    if (argc != 4) {
        wcerr << L"usage: " << argv[0] << L" pdffile texfile line" << endl;
        err = 2;
        return err;
    }

    const basic_string<wchar_t> pdf(argv[1]);
    const basic_string<wchar_t> tex(argv[2]);
    const basic_string<wchar_t> line(argv[3]);

    if (wcstol(line.c_str(), nullptr, 0) == 0 || errno == ERANGE) {
        wcerr << line << L" can't convert to the line number." << endl;
        err = -1;
        return err;
    }

    if ((err = RunSumatraPDF(pdf)) != 0) {
        return err;
    }

    auto active = 0;
    basic_ostringstream<wchar_t> woss;
    woss << L"[ForwardSearch(\"" << pdf << L"\",\"" << tex << L"\"," << line << L",0,0," << active << L")]";
    const basic_string<wchar_t> forwardSearch(woss.str());
    const basic_string<wchar_t> server(L"SUMATRA");
    const basic_string<wchar_t> topic(L"control");

    if ((err = DdeExecute(server, topic, forwardSearch)) != 0) {
        return err;
    }

    return err;
}
```

***
