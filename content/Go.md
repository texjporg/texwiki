---
title: "Go"
url: "/Go/"
date: 2013-08-31T17:45:18Z
pukiwiki: "Go"
---

# Go

## [Go](http://golang.org/) {#vc3e64fe}

- [The Go Programming Language](http://golang.org/)
- [https://code.google.com/p/go/](https://code.google.com/p/go/)
- [golang.jp - プログラミング言語Goの情報サイト](http://golang.jp/)
- [Wikipedia.ja:Go\_(プログラミング言語)](https://ja.wikipedia.org/wiki/Go_%28%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E%29)
- [http://go.shibu.jp/](http://go.shibu.jp/)
- [http://ryochack.hatenablog.com/archive/category/golang](http://ryochack.hatenablog.com/archive/category/golang)
- [http://golang.org/src/pkg/syscall/syscall_windows.go](http://golang.org/src/pkg/syscall/syscall_windows.go)
- [https://github.com/lxn/win](https://github.com/lxn/win)
- [https://github.com/AllenDang/w32](https://github.com/AllenDang/w32)
- [Go言語で DirectSound を Cgo なしで使えるようにした](http://bl.oov.ch/2013/10/go-directsound-cgo.html)
- [Go言語でDLLの読み込み](http://mattn.kaoriya.net/software/lang/go/20130805173059.htm)
- [unsafeでポインタを使って構造体のプライベートフィールドの値を書き換える例。](https://gist.github.com/hnakamur/6648237)
- [&quot;golang&quot; - 記事一覧 - memoメモ](http://atotto.hatenadiary.jp/archive/category/golang)
- [Go Advent Calendar 2013 - Qiita \[キータ\]](http://qiita.com/advent-calendar/2013/go)

## [fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) <a id="fwdsumatrapdf"></a> {#u3fb5150}

### Go 版 {#j2bc8fe8}

go 1.2.1 でビルドできます．<br>
Windows PowerShell またはコマンド プロンプトから以下のようにしてビルドします．<br>

```
PS C:\w32tex\bin> go build fwdsumatrapdf.go
```

***

- fwdsumatrapdf.go

***

```
// vim: ts=4 sw=4 expandtab:
// > go build fwdsumatrapdf.go

package main

import (
    "fmt"
    "math"
    "os"
    "path/filepath"
    "syscall"
    "unsafe"
)

const timeout = 10000

func usage() {
    if len(os.Args) != 4 {
        progName := os.Args[0]
        fmt.Fprintf(os.Stderr, "Usage: %s pdffile texfile line\n", progName)
        os.Exit(2)
    }
}

func runSumatraPDF() {
    advapi32, err := syscall.LoadDLL("advapi32.dll")
    if err != nil {
        panic(err)
    }
    defer advapi32.Release()

    shlwapi, err := syscall.LoadDLL("shlwapi.dll")
    if err != nil {
        panic(err)
    }
    defer shlwapi.Release()

    kernel32, err := syscall.LoadDLL("kernel32.dll")
    if err != nil {
        panic(err)
    }
    defer kernel32.Release()

    user32, err := syscall.LoadDLL("user32.dll")
    if err != nil {
        panic(err)
    }
    defer user32.Release()

    regOpenKeyExW, err := advapi32.FindProc("RegOpenKeyExW")
    if err != nil {
        panic(err)
    }

    regQueryValueExW, err := advapi32.FindProc("RegQueryValueExW")
    if err != nil {
        panic(err)
    }

    pathFileExistsW, err := shlwapi.FindProc("PathFileExistsW")
    if err != nil {
        panic(err)
    }

    createProcessW, err := kernel32.FindProc("CreateProcessW")
    if err != nil {
        panic(err)
    }

    waitForInputIdle, err := user32.FindProc("WaitForInputIdle")
    if err != nil {
        panic(err)
    }

    subKey := syscall.Handle(0)
    dwType := uint32(0)
    sz := uint32(0)
    var sumatrapdfRegistry [1024]uint16
    const keyPath = "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths\\SumatraPDF.exe"
    sumatrapdf := "C:\\Program Files\\SumatraPDF\\SumatraPDF.exe"
    existSumatraPDF := false

    regOpenKeyExW.Call(
        uintptr(syscall.HKEY_LOCAL_MACHINE),
        uintptr(unsafe.Pointer(syscall.StringToUTF16Ptr(keyPath))),
        uintptr(0),
        uintptr(syscall.KEY_QUERY_VALUE),
        uintptr(unsafe.Pointer(&subKey)))

    if subKey != syscall.Handle(0) {
        regQueryValueExW.Call(
            uintptr(subKey),
            uintptr(unsafe.Pointer(nil)),
            uintptr(unsafe.Pointer(nil)),
            uintptr(unsafe.Pointer(&dwType)),
            uintptr(unsafe.Pointer(nil)),
            uintptr(unsafe.Pointer(&sz)))
    }

    if subKey != syscall.Handle(0) {
        regQueryValueExW.Call(
            uintptr(subKey),
            uintptr(unsafe.Pointer(nil)),
            uintptr(unsafe.Pointer(nil)),
            uintptr(unsafe.Pointer(&dwType)),
            uintptr(unsafe.Pointer(&sumatrapdfRegistry)),
            uintptr(unsafe.Pointer(&sz)))
    }

    sumatrapdfRegistryExists, _, err := pathFileExistsW.Call(uintptr(unsafe.Pointer(&sumatrapdfRegistry)))

    if sumatrapdfRegistryExists != 0 {
        sumatrapdf = syscall.UTF16ToString(sumatrapdfRegistry[:])
        existSumatraPDF = true
    }

    sumatrapdfCommandLine := ""
    if existSumatraPDF {
        sumatrapdfCommandLine = "\"" + sumatrapdf + "\"" + " -reuse-instance"
    } else {
        sumatrapdfCommandLine = "C:\\Windows\\System32\\rundll32 shell32,ShellExec_RunDLL SumatraPDF" + " -reuse-instance"
    }

    si := syscall.StartupInfo{}
    pi := syscall.ProcessInformation{}

    createProcessW.Call(
        uintptr(unsafe.Pointer(nil)),
        uintptr(unsafe.Pointer(syscall.StringToUTF16Ptr(sumatrapdfCommandLine))),
        uintptr(unsafe.Pointer(nil)),
        uintptr(unsafe.Pointer(nil)),
        uintptr(0),
        uintptr(0),
        uintptr(unsafe.Pointer(nil)),
        uintptr(unsafe.Pointer(nil)),
        uintptr(unsafe.Pointer(&si)),
        uintptr(unsafe.Pointer(&pi)))

    waitForInputIdle.Call(
        uintptr(pi.Process),
        uintptr(timeout))
}

func ddeExecute(server, topic, command string) {
    idInstance := uint32(0)
    const appcmd_clientonly = 0x10
    const cp_winunicode = 1200
    const cf_unicodetext = 13
    const xclass_flags = 0x4000
    const xtyp_execute = (0x0050 | xclass_flags)

    user32, err := syscall.LoadDLL("user32.dll")
    if err != nil {
        panic(err)
    }
    defer user32.Release()

    ddeInitializeW, err := user32.FindProc("DdeInitializeW")
    if err != nil {
        panic(err)
    }

    ddeUninitialize, err := user32.FindProc("DdeUninitialize")
    if err != nil {
        panic(err)
    }

    ddeCreateStringHandleW, err := user32.FindProc("DdeCreateStringHandleW")
    if err != nil {
        panic(err)
    }

    ddeFreeStringHandle, err := user32.FindProc("DdeFreeStringHandle")
    if err != nil {
        panic(err)
    }

    ddeCreateDataHandle, err := user32.FindProc("DdeCreateDataHandle")
    if err != nil {
        panic(err)
    }

    ddeFreeDataHandle, err := user32.FindProc("DdeFreeDataHandle")
    if err != nil {
        panic(err)
    }

    ddeConnect, err := user32.FindProc("DdeConnect")
    if err != nil {
        panic(err)
    }

    ddeDisconnect, err := user32.FindProc("DdeDisconnect")
    if err != nil {
        panic(err)
    }

    ddeClientTransaction, err := user32.FindProc("DdeClientTransaction")
    if err != nil {
        panic(err)
    }

    ddeInitializeW.Call(
        uintptr(unsafe.Pointer(&idInstance)),
        uintptr(unsafe.Pointer(nil)),
        uintptr(appcmd_clientonly),
        uintptr(0))
    defer ddeUninitialize.Call(uintptr(idInstance))

    hszServer, _, _ := ddeCreateStringHandleW.Call(
        uintptr(idInstance),
        uintptr(unsafe.Pointer(syscall.StringToUTF16Ptr(server))),
        uintptr(cp_winunicode))
    defer ddeFreeStringHandle.Call(uintptr(idInstance), uintptr(hszServer))

    hszTopic, _, _ := ddeCreateStringHandleW.Call(
        uintptr(idInstance),
        uintptr(unsafe.Pointer(syscall.StringToUTF16Ptr(topic))),
        uintptr(cp_winunicode))
    defer ddeFreeStringHandle.Call(uintptr(idInstance), uintptr(hszTopic))

    hConvClient, _, _ := ddeConnect.Call(
        uintptr(idInstance),
        uintptr(hszServer),
        uintptr(hszTopic),
        uintptr(unsafe.Pointer(nil)))
    defer ddeDisconnect.Call(uintptr(hConvClient))

    hDdeData, _, _ := ddeCreateDataHandle.Call(
        uintptr(idInstance),
        uintptr(unsafe.Pointer(syscall.StringToUTF16Ptr(command))),
        uintptr((len(command) + 1) * 2),
        uintptr(0),
        uintptr(unsafe.Pointer(nil)),
        uintptr(cf_unicodetext),
        uintptr(0))
    defer ddeFreeDataHandle.Call(uintptr(hDdeData))

    hDdeTransactionData, _, _ := ddeClientTransaction.Call(
        uintptr(hDdeData),
        uintptr(math.MaxUint32),
        uintptr(hConvClient),
        uintptr(unsafe.Pointer(nil)),
        uintptr(0),
        uintptr(xtyp_execute),
        uintptr(timeout),
        uintptr(unsafe.Pointer(nil)))
    defer ddeFreeDataHandle.Call(uintptr(hDdeTransactionData))
}

func main() {
    usage()
    pdf, _ := filepath.Abs(os.Args[1])
    tex, _ := filepath.Abs(os.Args[2])
    line := os.Args[3]
    runSumatraPDF()
    forwardSearch := "[ForwardSearch(\"" + pdf + "\",\"" + tex + "\"," + line + ",0,0,0)]"
    ddeExecute("SUMATRA", "control", forwardSearch)
}
```

***
