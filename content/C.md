---
title: "C"
url: "/C/"
date: 2013-05-19T16:55:32Z
pukiwiki: "C"
---

# C

## fwdsumatrapdf の例示ソース {#w4b5f216}

fwdsumatrapdf（SumatraPDF で forward search を行うツール）の，C 言語による例示ソースです． <!-- 意外と fwdsumatrapdf 自体は外部サイトからリンクされていることが判明したため，最も使いやすい --> <!-- C 言語版のみソースを再公開します． -->

forward search するときに [SumatraPDF](/SumatraPDF/) を前面に表示したい場合は単に
SumatraPDF のコマンドラインオプションを使用すれば済みますが，逆に
SumatraPDF を前面に表示したくない場合は fwdsumatrapdf を使ってください．
ただし，SumatraPDF の起動時は SumatraPDF が前面に表示されます．

***

- fwdsumatrapdf.c

***

```
/* vim: ts=4 sw=4 expandtab:
 *
 * MinGW/MinGW-W64
 * $ gcc -std=c11 -static -o fwdsumatrapdf.exe fwdsumatrapdf.c -luser32 -lshell32 -ladvapi32 -lshlwapi
 *
 * Clang/LLVM
 * $ clang -std=c11 -static -o fwdsumatrapdf.exe fwdsumatrapdf.c -luser32 -lshell32 -ladvapi32 -lshlwapi
 *
 * Microsoft Visual Studio Community
 * >cl fwdsumatrapdf.c user32.lib advapi32.lib shlwapi.lib
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
#if defined (_MSC_VER)
#pragma comment(lib, "user32.lib")
#pragma comment(lib, "advapi32.lib")
#pragma comment(lib, "shlwapi.lib")
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

#if defined (SecureZeroMemory)
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
        HANDLE hStdError = GetStdHandle(STD_ERROR_HANDLE);
        DWORD dwWriteByte;
        wchar_t usage[256] = L"";
        wcscat(usage, L"usage: ");
        wcscat(usage, argv[0]);
        wcscat(usage, L" pdffile texfile line\n");
        WriteConsoleW(hStdError, usage, wcslen(usage), &dwWriteByte, NULL);
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
