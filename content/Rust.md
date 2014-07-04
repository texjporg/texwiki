---
title: "Rust"
url: "/Rust/"
date: 2013-09-06T04:00:26Z
pukiwiki: "Rust"
---

# Rust

## [Rust](http://www.rust-lang.org/) {#ybc68f10}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Summary {#jf7ccbcc}

- [The Rust Programming Language](http://www.rust-lang.org/)
- [https://github.com/rust-lang/rust](https://github.com/rust-lang/rust)
    - [https://github.com/rust-lang/rust/wiki](https://github.com/rust-lang/rust/wiki)
        - [https://github.com/rust-lang/rust/wiki/Doc-detailed-release-notes](https://github.com/rust-lang/rust/wiki/Doc-detailed-release-notes)
- [https://github.com/rust-lang/rust/blob/master/src/liblibc/lib.rs](https://github.com/rust-lang/rust/blob/master/src/liblibc/lib.rs)
- [Wikipedia.ja:Rust\_(プログラミング言語)](https://ja.wikipedia.org/wiki/Rust_%28%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E%29)
- [http://static.rust-lang.org/doc/master/guide-ffi.html](http://static.rust-lang.org/doc/master/guide-ffi.html)
- [Rust 基礎文法最速マスター (rust 0.7 編)](http://gifnksm.hatenablog.jp/entry/2013/07/15/170736)
- [http://qiita.com/tags/rust](http://qiita.com/tags/rust)
- [http://wontfix.blogspot.jp/search/label/rust](http://wontfix.blogspot.jp/search/label/rust)
- [Rust Advent Calendar 2013 - Qiita \[キータ\]](http://qiita.com/advent-calendar/2013/rust)
- [http://stackoverflow.com/questions/tagged/rust](http://stackoverflow.com/questions/tagged/rust)
    - [http://stackoverflow.com/questions/21569718/exit-rust-program-early](http://stackoverflow.com/questions/21569718/exit-rust-program-early)

## [fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) <a id="fwdsumatrapdf"></a> {#ge410d95}

### Rust 版 {#j7127f95}

rustc 0.11.0 で動作確認しています．<br>
Windows PowerShell またはコマンド プロンプトから以下のようにしてビルドします．<br>

```
rustc fwdsumatrapdf.rs
```

***

- fwdsumatrapdf.rs

***

```
// vim: ts=4 sw=4 expandtab:
// rustc fwdsumatrapdf.rs

extern crate libc;
use libc::{c_int, c_uint, c_short, c_ushort, c_long, c_ulong, c_char, c_void, size_t, wchar_t};

use std::io;
use std::os;
use std::mem;
use std::ptr;

static timeout: c_uint = 10000;
static hkey_local_machine: u32 = 0x80000002;
static key_query_value: u32 = 0x01;
static key_path: &'static str = r"SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\SumatraPDF.exe";
static cp_acp: u32 = 0;
static wc_no_best_fit_chars: u32 = 1024;

type BOOL = c_int;
type LPBOOL = *mut c_int;
type UINT = c_uint;
type BYTE = u8;
type LPBYTE = *mut BYTE;
type VOID = c_void;
type LPVOID = *mut c_void;
type HSZ = LPVOID;
type HCONV = LPVOID;
type HDDEDATA = LPVOID;
type HANDLE = LPVOID;
type HKEY = HANDLE;
type PHKEY = *mut HKEY;
type REGSAM = c_uint;
type LONG = c_long;
type WORD = u16;
type DWORD = c_ulong;
type LPWORD = *mut DWORD;
type LPDWORD = *mut DWORD;
type CCHAR = c_char;
type CHAR = c_char;
type WCHAR = wchar_t;
type LPCWSTR = *const WCHAR;
type LPWSTR = *mut WCHAR;
type LPCSTR = *const CHAR;
type LPSTR = *mut CHAR;
type SIZE_T = size_t;

struct STARTUPINFOW {
    cb: DWORD,
    lpReserved: LPWSTR,
    lpDesktop: LPWSTR,
    lpTitle: LPWSTR,
    dwX: DWORD,
    dwY: DWORD,
    dwXSize: DWORD,
    dwYSize: DWORD,
    dwXCountChars: DWORD,
    dwYCountChars: DWORD,
    dwFillAttribute: DWORD,
    dwFlags: DWORD,
    wShowWindow: WORD,
    cbReserved2: WORD,
    lpReserved2: LPBYTE,
    hStdInput: HANDLE,
    hStdOutput: HANDLE,
    hStdError: HANDLE
}
type LPSTARTUPINFOW = *mut STARTUPINFOW;

struct PROCESS_INFORMATION {
    hProcess: HANDLE,
    hThread: HANDLE,
    dwProcessId: DWORD,
    dwThreadId: DWORD
}
type LPPROCESS_INFORMATION = *mut PROCESS_INFORMATION;

#[cfg(target_os = "win32", target_arch = "x86")]
#[link_name = "advapi32"]
#[allow(non_snake_case_functions)]
extern "stdcall" {
    fn RegOpenKeyExW(
        hKey: HKEY,
        lpSubKey: LPCWSTR,
        ulOptions: DWORD,
        samDesired: REGSAM,
        phkResult: PHKEY)
        -> LONG;
    fn RegQueryValueExW(
        hKey: HKEY,
        lpValueName: LPCWSTR,
        lpReserved: LPDWORD,
        lpType: LPDWORD,
        lpData: LPBYTE,
        lpcbData: LPDWORD)
        -> LONG;
    fn RegCloseKey(
        hKey: HKEY)
        -> LONG;
}

#[cfg(target_os = "win32", target_arch = "x86")]
#[link_name = "user32"]
#[allow(non_snake_case_functions)]
extern "stdcall" {
    fn DdeInitializeW(pidInst: *mut DWORD, pfnCallback: *mut c_void, afCmd: c_uint, ulRes: c_uint) -> c_uint;
    fn DdeUninitialize(idInst: DWORD) -> c_int;
    fn DdeCreateStringHandleW(idInst: DWORD, psz: LPWSTR, iCodePage: c_int) -> HSZ;
    fn DdeFreeStringHandle(idInst: DWORD, hsz: HSZ) -> BOOL;
    fn DdeCreateDataHandle(idInst: DWORD, pSrc: LPBYTE, cb: DWORD, cbOff: DWORD, hszItem: *c_int, wFmt: c_uint, afCmd: c_uint) -> HDDEDATA;
    fn DdeFreeDataHandle(hData: HDDEDATA) -> BOOL;
    fn DdeConnect(idInst: DWORD, hszService: HSZ, hszTopic: HSZ, pCC: *mut c_void) -> HCONV;
    fn DdeDisconnect(hConv: HCONV) -> BOOL;
    fn DdeClientTransaction(pData: LPBYTE, cbData: DWORD, hConv: HCONV, hszItem: *c_int, wFmt: c_uint, wType: c_uint, dwTimeout: c_uint, pdwResult: *c_int) -> HDDEDATA;
    fn WaitForInputIdle(hProcess: HANDLE, dwMilliseconds: DWORD) -> DWORD;
}

#[cfg(target_os = "win32", target_arch = "x86")]
#[link_name = "kernel32"]
#[allow(non_snake_case_functions)]
extern "stdcall" {
    fn CreateProcessW(
        lpApplicationName: LPCWSTR,
        lpCommandLine: LPWSTR,
        lpProcessAttributes: *c_int,
        lpThreadAttributes: *c_int,
        bInheritHandles: BOOL,
        dwCreationFlags: DWORD,
        lpEnvironment: LPVOID,
        lpCurrentDirectory: LPCWSTR,
        lpStartupInfo: LPSTARTUPINFOW,
        lpProcessInformation: LPPROCESS_INFORMATION)
        -> BOOL;
    fn WideCharToMultiByte(
        CodePage: UINT,
        dwFlags: DWORD,
        lpWideCharStr: LPCWSTR,
        cchWideChar: c_int,
        lpMultiByteStr: LPSTR,
        cchMultiByte: c_int,
        lpDefaultChar: LPCSTR,
        lpUserdDefaultChar: LPBOOL)
        -> c_int;
}

#[allow(non_snake_case_functions)]
fn runSumatraPDF() {
    unsafe {
        let mut si = STARTUPINFOW {
            cb: 0,
            lpReserved: ptr::mut_null(),
            lpDesktop: ptr::mut_null(),
            lpTitle: ptr::mut_null(),
            dwX: 0,
            dwY: 0,
            dwXSize: 0,
            dwYSize: 0,
            dwXCountChars: 0,
            dwYCountChars: 0,
            dwFillAttribute: 0,
            dwFlags: 0,
            wShowWindow: 0,
            cbReserved2: 0,
            lpReserved2: ptr::mut_null(),
            hStdInput: ptr::mut_null(),
            hStdOutput: ptr::mut_null(),
            hStdError: ptr::mut_null()};
        let mut pi = PROCESS_INFORMATION {
            hProcess: ptr::mut_null(),
            hThread: ptr::mut_null(),
            dwProcessId: 0,
            dwThreadId: 0};
        let mut subKey = ptr::mut_null();
        let mut dwType = 0u32;
        let mut sz = 0u32;
        RegOpenKeyExW(hkey_local_machine as HKEY, key_path.to_utf16().as_ptr(), 0, key_query_value, &mut subKey);
        RegQueryValueExW(subKey, ptr::null(), ptr::mut_null(), &mut dwType, ptr::mut_null(), &mut sz);
        let mut sumatraPDFRegistry_wchar: Vec<u8> = Vec::from_fn(sz as uint, |idx| 0);
        RegQueryValueExW(subKey, ptr::null(), ptr::mut_null(), &mut dwType, sumatraPDFRegistry_wchar.as_mut_ptr(), &mut sz);
        RegCloseKey(subKey);
        let sumatraPDFRegLength = ((sz - 2) / 2) as c_uint;
        let mut sumatraPDFRegistry: Vec<u8> = Vec::from_fn(sumatraPDFRegLength as uint, |idx| 0);
        WideCharToMultiByte(cp_acp, wc_no_best_fit_chars, sumatraPDFRegistry_wchar.as_ptr() as *u16, -1, sumatraPDFRegistry.as_mut_ptr() as *mut i8, sumatraPDFRegLength as i32, ptr::null(), ptr::mut_null());
        let sumatraPDFCommandLine = format!("\"{}\" -reuse-instance", sumatraPDFRegistry.into_ascii().into_str());
        si.cb = mem::size_of::<STARTUPINFOW>() as DWORD;
        CreateProcessW(ptr::null(), sumatraPDFCommandLine.to_utf16().as_mut_ptr(), ptr::null(), ptr::null(), 0, 0, ptr::mut_null(), ptr::null(), &mut si, &mut pi);
        WaitForInputIdle(pi.hProcess, timeout);
    }
}

#[allow(non_snake_case_functions)]
fn ddeExecute(server: &str, topic: &str, command: &str) {
    unsafe {
        let appcmd_clientonly = 0x10;
        let cp_winunicode = 1200;
        let cf_unicodetext = 13;
        let xclass_flags = 0x4000;
        let xtyp_execute = (0x0050 | xclass_flags);
        let mut idInstance = 0u32;
        let mut hszServer = ptr::mut_null();
        let mut hszTopic = ptr::mut_null();
        let mut hConvClient = ptr::mut_null();
        let mut hDdeData = ptr::mut_null();
        let mut hDdeTransactionData = ptr::mut_null();
        loop {
            DdeInitializeW(&mut idInstance, ptr::mut_null(), appcmd_clientonly, 0);
            if idInstance == 0u32 { writeln!(io::stderr(), "DdeInitializeW error"); break; }
            hszServer = DdeCreateStringHandleW(idInstance, server.to_utf16().as_mut_ptr(), cp_winunicode);
            if hszServer == ptr::mut_null() { writeln!(io::stderr(), "DdeCreateStringHandleW error"); break; }
            hszTopic = DdeCreateStringHandleW(idInstance, topic.to_utf16().as_mut_ptr(), cp_winunicode);
            if hszTopic == ptr::mut_null() { writeln!(io::stderr(), "DdeCreateStringHandleW error"); break; }
            hConvClient = DdeConnect(idInstance, hszServer, hszTopic, ptr::mut_null());
            if hConvClient == ptr::mut_null() {
                runSumatraPDF();
                hConvClient = DdeConnect(idInstance, hszServer, hszTopic, ptr::mut_null());
                if hConvClient == ptr::mut_null() { writeln!(io::stderr(), "DdeConnect error"); break; }
            }
            hDdeData = DdeCreateDataHandle(idInstance, command.to_utf16().as_mut_ptr() as LPBYTE, ((command.char_len() + 1)*mem::size_of::<wchar_t>()) as DWORD, 0, ptr::null(), cf_unicodetext, 0);
            if hDdeData == ptr::mut_null() { writeln!(io::stderr(), "DdeCreateDataHandle error"); break; }
            hDdeTransactionData = DdeClientTransaction(hDdeData as LPBYTE, -1 as DWORD, hConvClient, ptr::null(), 0, xtyp_execute, timeout, ptr::null());
            if hDdeTransactionData == ptr::mut_null() { writeln!(io::stderr(), "DdeClientTransaction error"); break; }
            break;
        }
        if hDdeTransactionData != ptr::mut_null() { DdeFreeDataHandle(hDdeTransactionData); }
        if hDdeData != ptr::mut_null() { DdeFreeDataHandle(hDdeData); }
        if hszServer != ptr::mut_null() { DdeFreeStringHandle(idInstance, hszServer); }
        if hszTopic != ptr::mut_null() { DdeFreeStringHandle(idInstance, hszTopic); }
        if hConvClient != ptr::mut_null() { DdeDisconnect(hConvClient); }
        if idInstance != 0u32 { DdeUninitialize(idInstance); }
    }
}

fn main() {
    let args = os::args();
    if args.len() != 4 {
        writeln!(io::stderr(), "Usage: {} pdf tex line", args.get(0));
        unsafe { libc::exit(2 as libc::c_int); }
    }
    let pdf = args.get(1);
    let tex = args.get(2);
    let line = args.get(3);
    let forwardSearch = format!("[ForwardSearch(\"{}\",\"{}\",{},0,0,0)]", pdf, tex, line);
    match forwardSearch.to_c_str().as_str() {
        //Some(ref command) => {
        //    runSumatraPDF();
        //    ddeExecute("SUMATRA", "control", *command);
        //},
        Some(ref command) => ddeExecute("SUMATRA", "control", *command),
        None => ()
    }
}
```

***
