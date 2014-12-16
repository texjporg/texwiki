---
title: "Ruby"
url: "/Ruby/"
date: 2013-05-12T16:56:39Z
pukiwiki: "Ruby"
---

# Ruby

## [Ruby](https://www.ruby-lang.org/) {#ufdd9309}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/200px-Ruby_logo.svg.png" alt="Ruby" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Summary {#z9c2e043}

Ruby は汎用スクリプト言語です．<br>
TeX 関連プログラムには Ruby で書かれたスクリプトがあります．<br>
[convbkmk.rb](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/scripts/convbkmk/convbkmk.rb?view=markup) などの Ruby で書かれたスクリプトを実行するには Ruby の処理系が必要です．<br>

- [https://www.ruby-lang.org/](https://www.ruby-lang.org/)
- [http://www.ruby-doc.org/](http://www.ruby-doc.org/)

### 関連リンク {#ha4e0479}

- [http://ruby.morphball.net/](http://ruby.morphball.net/)
- [「若手エンジニア／初心者のためのRuby 2.1入門」最新記事一覧](http://www.atmarkit.co.jp/ait/kw/ruby_nyumon.html)
- [Ruby Advent Calendar 2014 - Qiita](http://qiita.com/advent-calendar/2014/ruby)
- [Rubyで外部コマンドを実行して結果を受け取る方法あれこれ](http://qiita.com/tyabe/items/56c9fa81ca89088c5627)
- [shebangが/bin/envかruby直接指定かで$0利用時の挙動がかわる](http://takai.tumblr.com/post/13843318337/shebang-bin-env-ruby-0)
- [Ruby: コマンドライン引数の解析で使うoptparseをもっと柔軟に](http://sky-y.hatenablog.jp/entry/20120817/1345195421)
- [RubyのFile.expand_path('相対パス', \__FILE_\_)の意味](http://d.hatena.ne.jp/maeharin/20130104/p1)

### 派生版 {#w5708e1c}

- [JRuby](http://jruby.org/)
- [Rubinius](http://rubini.us/)
- [Topaz](http://topazruby.com/)

#### mruby (組み込み向け Ruby) {#we4042fb}

- [https://github.com/mruby/mruby](https://github.com/mruby/mruby)

## インストール {#oe1e1c67}

### Windows {#j2a4eaa7}

#### RubyInstaller for Windows {#p44e196d}

- [RubyInstaller for Windows](http://rubyinstaller.org/)
- [https://github.com/oneclick/rubyinstaller](https://github.com/oneclick/rubyinstaller)

RubyInstaller for Windows の Ruby を C:\Ruby21-x64 にインストールした場合は

```
;C:\Ruby21-x64\bin
```

を環境変数 PATH に追加します

RubyInstaller for Windows の Ruby を C:\Ruby21 にインストールした場合は

```
;C:\Ruby21\bin
```

を環境変数 PATH に追加します

<!-- ***ActiveScriptRuby [#y961023d] -->
<!--  -->
<!-- -[[ActiveScriptRuby and Other packages:http://www.artonx.org/data/asr/]] -->

#### MSYS2 {#a7424fa6}

```
$ pacman -S ruby
```

### OS X {#def5cf73}

- [Mac OS X 10.10にrbenvを使って複数バージョンのRubyをインストールする](http://qiita.com/ryam/items/73ae65fc430c2e99cb83)

### Linux {#pfcca84f}

#### Arch Linux {#k152c3d6}

- [https://www.archlinux.org/packages/?name=ruby](https://www.archlinux.org/packages/?name=ruby)

#### Linux Mint {#o6dd6f52}

- [http://packages.ubuntu.com/ja/ruby](http://packages.ubuntu.com/ja/ruby)
- [http://packages.ubuntu.com/ja/ruby-full](http://packages.ubuntu.com/ja/ruby-full)
- [http://packages.ubuntu.com/ja/ruby2.1](http://packages.ubuntu.com/ja/ruby2.1)

#### Debian {#z226ac1e}

- [https://packages.debian.org/ja/ruby](https://packages.debian.org/ja/ruby)
- [https://packages.debian.org/ja/ruby-full](https://packages.debian.org/ja/ruby-full)
- [https://packages.debian.org/ja/ruby2.1](https://packages.debian.org/ja/ruby2.1)

#### Fedora {#c69aed3b}

- [https://apps.fedoraproject.org/packages/ruby](https://apps.fedoraproject.org/packages/ruby)

#### openSUSE {#r7994550}

- [http://software.opensuse.org/package/ruby](http://software.opensuse.org/package/ruby)

## fwdevince <a id="fwdevince"></a> {#x681ced4}

### Ruby 版 {#bf356aaf}

inverse search は実装していません．<br>
forward search のみ実装しています．<br>
Evince 3.12.1, Ruby 2.1.2, ruby-dbus 0.11.0 で動作確認しています．<br>

```
$ sudo gem install ruby-dbus
Fetching: ruby-dbus-0.11.0.gem (100%)
Successfully installed ruby-dbus-0.11.0
Parsing documentation for ruby-dbus-0.11.0
Installing ri documentation for ruby-dbus-0.11.0
Done installing documentation for ruby-dbus after 1 seconds
1 gem installed
```

***

- fwdevince

***

```
#!/usr/bin/env ruby

require 'dbus'

pdf = File.expand_path(ARGV[0]).gsub(/ /, '%20')
line = ARGV[1].to_i
tex = File.expand_path(ARGV[2])
bus = DBus::SessionBus.instance
daemon = bus.introspect('org.gnome.evince.Daemon', '/org/gnome/evince/Daemon')
dbus_name = daemon['org.gnome.evince.Daemon'].FindDocument('file://' + pdf, true)[0]
window = bus.introspect(dbus_name, '/org/gnome/evince/Window/0')
sleep(0.2)
window['org.gnome.evince.Window'].SyncView(tex, [line, 1], 0)
```

***

## [fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) <a id="fwdsumatrapdf"></a> {#qec9c8d7}

### Ruby 版 {#p8b1b4df}

RubyInstaller for Windows の ruby 2.1.5p273 (2014-11-13 revision 48405) \[x64-mingw32\] で動作確認しています．<br>

***

- fwdsumatrapdf.rb

***

```
# vim: ts=4 sw=4 expandtab:
# -*- coding: utf-8 -*-

require 'win32/registry'
require 'fiddle/import'
require 'optparse'

APPCMD_CLIENTONLY = 0x10
CP_WINUNICODE = 1200
CF_UNICODETEXT = 13
XCLASS_FLAGS = 0x4000
XTYP_EXECUTE = (0x0050 | XCLASS_FLAGS)

TIMEOUT = 10000

class String
    def wchar()
        return (self + "\0").encode('UTF-16LE')
    end
end

module Msvcrt
    extend Fiddle::Importer
    dlload 'msvcrt.dll'
    extern 'size_t wcslen(const wchar_t*)'
end

module Kernel32
    extend Fiddle::Importer
    dlload 'kernel32.dll'
    typealias 'DWORD', 'unsigned int'
    typealias 'LPDWORD', 'DWORD*'
    typealias 'LPWSTR', 'wchar_t*'
    typealias 'LPCWSTR', 'const wchar_t*'
    typealias 'LPSECURITY_ATTRIBUTES', 'void*'
    typealias 'LPVOID', 'void*'
    typealias 'LPSTARTUPINFOW', 'STARTUPINFOW*'
    typealias 'LPPROCESS_INFORMATION', 'PROCESS_INFORMATION*'
    typealias 'BOOL', 'int'
    extern 'BOOL CreateProcessW(LPCWSTR, LPWSTR, LPSECURITY_ATTRIBUTES, LPSECURITY_ATTRIBUTES, BOOL, DWORD, LPVOID, LPCWSTR, LPSTARTUPINFOW, LPPROCESS_INFORMATION)'
end

module User32
    extend Fiddle::Importer
    dlload 'user32.dll'
    typealias 'WORD', 'unsigned short'
    typealias 'DWORD', 'unsigned int'
    typealias 'LPDWORD', 'DWORD*'
    typealias 'BYTE', 'unsigned char'
    typealias 'LPBYTE', 'unsigned char*'
    typealias 'LPWSTR', 'wchar_t*'
    typealias 'UINT', 'unsigned int'
    typealias 'HANDLE', 'void*'
    typealias 'PFNCALLBACK', 'void*'
    typealias 'HSZ', 'void*'
    typealias 'HCONV', 'void*'
    typealias 'BOOL', 'int'
    typealias 'PCONVCONTEXT', 'void*'
    typealias 'HDDEDATA', 'void*'
    typealias 'LPBYTE', 'unsigned char*'
    extern 'UINT DdeInitializeW(LPDWORD, PFNCALLBACK, DWORD, DWORD)'
    extern 'BOOL DdeUninitialize(DWORD)'
    extern 'HSZ DdeCreateStringHandleW(DWORD, LPWSTR, int)'
    extern 'BOOL DdeFreeStringHandle(DWORD, HSZ)'
    extern 'HCONV DdeConnect(DWORD, HSZ, HSZ, PCONVCONTEXT)'
    extern 'BOOL DdeDisconnect(HCONV)'
    extern 'HDDEDATA DdeCreateDataHandle(DWORD, LPBYTE, DWORD, DWORD, HSZ, UINT, UINT)'
    extern 'BOOL DdeFreeDataHandle(HDDEDATA)'
    extern 'HDDEDATA DdeClientTransaction(LPBYTE, DWORD, HCONV, HSZ, UINT, UINT, DWORD, LPDWORD)'
    extern 'DWORD WaitForInputIdle(HANDLE, DWORD)'
    StartupInfoW = struct(['DWORD cb', \
                           'LPWSTR lpReserved', \
                           'LPWSTR lpDesktop', \
                           'LPWSTR lpTitle', \
                           'DWORD dwX', \
                           'DWORD dwY', \
                           'DWORD dwXSize', \
                           'DWORD dwYSize', \
                           'DWORD dwXCountChars', \
                           'DWORD dwYCountChars', \
                           'DWORD dwFillAttribute', \
                           'DWORD dwFlags', \
                           'WORD wShowWindow', \
                           'WORD cbReserved2', \
                           'LPBYTE lpReserved2', \
                           'HANDLE hStdInput', \
                           'HANDLE hStdOutput', \
                           'HANDLE hStdError'])
    Process_Information = struct(['HANDLE hProcess', \
                                  'HANDLE hThread', \
                                  'DWORD dwProcessId', \
                                  'DWORD dwThreadId'])
end

def runSumatraPDF()
    regValue = nil
    Win32::Registry::HKEY_LOCAL_MACHINE.open('SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\SumatraPDF.exe') do |reg|
        regValue = reg.read("")[1]
    end
    sumatraPDFCommandLine = nil
    if regValue and File.exists?(regValue) then
        sumatraPDFCommandLine = "\"" + regValue + "\" -reuse-instance"
    else
        sumatraPDFCommandLine = "C:\\Windows\\System32\\rundll32.exe shell32,ShellExec_RunDLL SumatraPDF -reuse-instance"
    end
    siAddr = "\0" * User32::StartupInfoW.size
    piAddr = "\0" * User32::Process_Information.size
    si = User32::StartupInfoW.new(Fiddle::Pointer[siAddr])
    pi = User32::Process_Information.new(Fiddle::Pointer[piAddr])
    Kernel32::CreateProcessW(Fiddle::NULL, sumatraPDFCommandLine.wchar, Fiddle::NULL, Fiddle::NULL, 0, 0, Fiddle::NULL, Fiddle::NULL, si.to_ptr, pi.to_ptr)
    User32::WaitForInputIdle(pi.hProcess, TIMEOUT)
end

def ddeExecute(server, topic, command)
    idInstance = 0
    begin
        idInstPtr = Fiddle::Pointer[idInstance]
        User32.DdeInitializeW(idInstPtr.ref, Fiddle::NULL, APPCMD_CLIENTONLY, 0)
        idInstance = idInstPtr.to_i
        if idInstance == 0 then raise 'DdeInitializeW error' end
        hszServer = User32.DdeCreateStringHandleW(idInstance, server.wchar, CP_WINUNICODE)
        if hszServer == Fiddle::NULL then raise 'DdeCreateStringHandleW error' end
        hszTopic = User32.DdeCreateStringHandleW(idInstance, topic.wchar, CP_WINUNICODE)
        if hszTopic == Fiddle::NULL then raise 'DdeCreateStringHandleW error' end
        hConvClient = User32.DdeConnect(idInstance, hszServer, hszTopic, Fiddle::NULL)
        if hConvClient == Fiddle::NULL then raise 'DdeConnect error' end
        hDdeData = User32.DdeCreateDataHandle(idInstance, command.wchar, (Msvcrt.wcslen(command.wchar) + 1)*2, 0, Fiddle::NULL, CF_UNICODETEXT, 0)
        if hDdeData == Fiddle::NULL then raise 'DdeCreateDataHandle error' end
        hDdeTransactionData = User32.DdeClientTransaction(hDdeData, -1, hConvClient, Fiddle::NULL, 0, XTYP_EXECUTE, TIMEOUT, Fiddle::NULL)
        if hDdeTransactionData == Fiddle::NULL then raise 'DdeClientTransaction error' end
    ensure
        if hDdeTransactionData != Fiddle::NULL then User32.DdeFreeDataHandle(hDdeTransactionData) end
        if hDdeData != Fiddle::NULL then User32.DdeFreeDataHandle(hDdeData) end
        if hszServer != Fiddle::NULL then User32.DdeFreeStringHandle(idInstance, hszServer) end
        if hszTopic != Fiddle::NULL then User32.DdeFreeStringHandle(idInstance, hszTopic) end
        if hConvClient != Fiddle::NULL then User32.DdeDisconnect(hConvClient) end
        if idInstance != 0 then User32.DdeUninitialize(idInstance) end
    end
end

if $0 == __FILE__ then
    begin
        opt = OptionParser.new
        opt.permute!(ARGV)
        pdf = File.expand_path(ARGV[0])
        tex = File.expand_path(ARGV[1])
        line = ARGV[2] and Integer(line)
        server = 'SUMATRA'
        topic = 'control'
        command = '[ForwardSearch("' + pdf + '","' + tex + '",' + line + ',0,0,0)]'
        runSumatraPDF()
        ddeExecute(server, topic, command)
    rescue => e
        p e
    end
end
```

***
