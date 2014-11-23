---
title: "Rust"
url: "/Rust/"
date: 2013-09-06T04:00:26Z
pukiwiki: "Rust"
---

# Rust

## [Rust](http://www.rust-lang.org/) {#ybc68f10}

<img src="http://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Rust_programming_language_black_logo.svg/200px-Rust_programming_language_black_logo.svg.png" alt="Rust" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Summary {#jf7ccbcc}

- [The Rust Programming Language](http://www.rust-lang.org/)
- [https://github.com/rust-lang/rust](https://github.com/rust-lang/rust)
    - [https://github.com/rust-lang/rust/wiki](https://github.com/rust-lang/rust/wiki)
        - [https://github.com/rust-lang/rust/wiki/Doc-detailed-release-notes](https://github.com/rust-lang/rust/wiki/Doc-detailed-release-notes)
- [https://github.com/rust-lang/rust/blob/master/src/liblibc/lib.rs](https://github.com/rust-lang/rust/blob/master/src/liblibc/lib.rs)
- [Wikipedia.ja:Rust\_(プログラミング言語)](https://ja.wikipedia.org/wiki/Rust_%28%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E%29)
- [http://static.rust-lang.org/doc/master/book/ffi.html](http://static.rust-lang.org/doc/master/book/ffi.html)
- [http://qiita.com/tags/rust](http://qiita.com/tags/rust)
- [http://wontfix.blogspot.jp/search/label/rust](http://wontfix.blogspot.jp/search/label/rust)
- [Rust Language Advent Calendar 2014 - Adventar](http://www.adventar.org/calendars/462)
- [http://stackoverflow.com/questions/tagged/rust](http://stackoverflow.com/questions/tagged/rust)
    - [http://stackoverflow.com/questions/21569718/exit-rust-program-early](http://stackoverflow.com/questions/21569718/exit-rust-program-early)

## [fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) <a id="fwdsumatrapdf"></a> {#ge410d95}

### Rust 版 {#j7127f95}

rustc 0.12.0 (ba4081a5a 2014-10-07 13:44:41 -0700) で動作確認しています．<br>
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

static TIMEOUT: c_uint = 10000;
static HKEY_LOCAL_MACHINE: u32 = 0x80000002;
static KEY_QUERY_VALUE: u32 = 0x01;
static KEY_PATH: &'static str = r"SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\SumatraPDF.exe";
static CP_ACP: u32 = 0;
static WC_NO_BEST_FIT_CHARS: u32 = 1024;

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

#[cfg(all(target_os = "windows"))]
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

#[cfg(all(target_os = "windows"))]
#[link_name = "user32"]
#[allow(non_snake_case_functions)]
extern "stdcall" {
    fn DdeInitializeW(pidInst: *mut DWORD, pfnCallback: *mut c_void, afCmd: c_uint, ulRes: c_uint) -> c_uint;
    fn DdeUninitialize(idInst: DWORD) -> c_int;
    fn DdeCreateStringHandleW(idInst: DWORD, psz: LPWSTR, iCodePage: c_int) -> HSZ;
    fn DdeFreeStringHandle(idInst: DWORD, hsz: HSZ) -> BOOL;
    fn DdeCreateDataHandle(idInst: DWORD, pSrc: LPBYTE, cb: DWORD, cbOff: DWORD, hszItem: *const c_int, wFmt: c_uint, afCmd: c_uint) -> HDDEDATA;
    fn DdeFreeDataHandle(hData: HDDEDATA) -> BOOL;
    fn DdeConnect(idInst: DWORD, hszService: HSZ, hszTopic: HSZ, pCC: *mut c_void) -> HCONV;
    fn DdeDisconnect(hConv: HCONV) -> BOOL;
    fn DdeClientTransaction(pData: LPBYTE, cbData: DWORD, hConv: HCONV, hszItem: *const c_int, wFmt: c_uint, wType: c_uint, dwTimeout: c_uint, pdwResult: *const c_int) -> HDDEDATA;
    fn WaitForInputIdle(hProcess: HANDLE, dwMilliseconds: DWORD) -> DWORD;
}

#[cfg(all(target_os = "windows"))]
#[link_name = "kernel32"]
#[allow(non_snake_case_functions)]
extern "stdcall" {
    fn CreateProcessW(
        lpApplicationName: LPCWSTR,
        lpCommandLine: LPWSTR,
        lpProcessAttributes: *const c_int,
        lpThreadAttributes: *const c_int,
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
            lpReserved: ptr::null_mut(),
            lpDesktop: ptr::null_mut(),
            lpTitle: ptr::null_mut(),
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
            lpReserved2: ptr::null_mut(),
            hStdInput: ptr::null_mut(),
            hStdOutput: ptr::null_mut(),
            hStdError: ptr::null_mut()};
        let mut pi = PROCESS_INFORMATION {
            hProcess: ptr::null_mut(),
            hThread: ptr::null_mut(),
            dwProcessId: 0,
            dwThreadId: 0};
        let mut subKey = ptr::null_mut();
        let mut dwType = 0u32;
        let mut sz = 0u32;
        RegOpenKeyExW(HKEY_LOCAL_MACHINE as HKEY, KEY_PATH.to_utf16().as_ptr(), 0, KEY_QUERY_VALUE, &mut subKey);
        RegQueryValueExW(subKey, ptr::null(), ptr::null_mut(), &mut dwType, ptr::null_mut(), &mut sz);
        let mut sumatraPDFRegistry_wchar: Vec<u8> = Vec::from_fn(sz as uint, |idx| 0);
        RegQueryValueExW(subKey, ptr::null(), ptr::null_mut(), &mut dwType, sumatraPDFRegistry_wchar.as_mut_ptr(), &mut sz);
        RegCloseKey(subKey);
        let sumatraPDFRegLength = ((sz - 2) / 2) as c_uint;
        let mut sumatraPDFRegistry: Vec<u8> = Vec::from_fn(sumatraPDFRegLength as uint, |idx| 0);
        WideCharToMultiByte(CP_ACP, WC_NO_BEST_FIT_CHARS, sumatraPDFRegistry_wchar.as_ptr() as *const u16, -1, sumatraPDFRegistry.as_mut_ptr() as *mut i8, sumatraPDFRegLength as i32, ptr::null(), ptr::null_mut());
        let sumatraPDFCommandLine = format!("\"{}\" -reuse-instance", sumatraPDFRegistry.into_ascii().into_string());
        si.cb = mem::size_of::<STARTUPINFOW>() as DWORD;
        CreateProcessW(ptr::null(), sumatraPDFCommandLine.to_utf16().as_mut_ptr(), ptr::null(), ptr::null(), 0, 0, ptr::null_mut(), ptr::null(), &mut si, &mut pi);
        WaitForInputIdle(pi.hProcess, TIMEOUT);
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
        let mut hszServer = ptr::null_mut();
        let mut hszTopic = ptr::null_mut();
        let mut hConvClient = ptr::null_mut();
        let mut hDdeData = ptr::null_mut();
        let mut hDdeTransactionData = ptr::null_mut();
        loop {
            DdeInitializeW(&mut idInstance, ptr::null_mut(), appcmd_clientonly, 0);
            if idInstance == 0u32 { writeln!(io::stderr(), "DdeInitializeW error"); break; }
            hszServer = DdeCreateStringHandleW(idInstance, server.to_utf16().as_mut_ptr(), cp_winunicode);
            if hszServer == ptr::null_mut() { writeln!(io::stderr(), "DdeCreateStringHandleW error"); break; }
            hszTopic = DdeCreateStringHandleW(idInstance, topic.to_utf16().as_mut_ptr(), cp_winunicode);
            if hszTopic == ptr::null_mut() { writeln!(io::stderr(), "DdeCreateStringHandleW error"); break; }
            hConvClient = DdeConnect(idInstance, hszServer, hszTopic, ptr::null_mut());
            if hConvClient == ptr::null_mut() { writeln!(io::stderr(), "DdeConnect error"); break; }
            hDdeData = DdeCreateDataHandle(idInstance, command.to_utf16().as_mut_ptr() as LPBYTE, ((command.char_len() + 1)*mem::size_of::<wchar_t>()) as DWORD, 0, ptr::null(), cf_unicodetext, 0);
            if hDdeData == ptr::null_mut() { writeln!(io::stderr(), "DdeCreateDataHandle error"); break; }
            hDdeTransactionData = DdeClientTransaction(hDdeData as LPBYTE, -1 as DWORD, hConvClient, ptr::null(), 0, xtyp_execute, TIMEOUT, ptr::null());
            if hDdeTransactionData == ptr::null_mut() { writeln!(io::stderr(), "DdeClientTransaction error"); break; }
            break;
        }
        if hDdeTransactionData != ptr::null_mut() { DdeFreeDataHandle(hDdeTransactionData); }
        if hDdeData != ptr::null_mut() { DdeFreeDataHandle(hDdeData); }
        if hszServer != ptr::null_mut() { DdeFreeStringHandle(idInstance, hszServer); }
        if hszTopic != ptr::null_mut() { DdeFreeStringHandle(idInstance, hszTopic); }
        if hConvClient != ptr::null_mut() { DdeDisconnect(hConvClient); }
        if idInstance != 0u32 { DdeUninitialize(idInstance); }
    }
}

#[allow(non_snake_case)]
fn main() {
    let args = os::args();
    if args.len() != 4 {
        writeln!(io::stderr(), "Usage: {} pdf tex line", args.get(0));
        unsafe { libc::exit(2 as libc::c_int); }
    }
    let ref pdf = args[1];
    let ref tex = args[2];
    let ref line = args[3];
    let forwardSearch = format!("[ForwardSearch(\"{}\",\"{}\",{},0,0,0)]", pdf, tex, line);
    runSumatraPDF();
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
