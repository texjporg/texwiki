---
title: "Perl"
url: "/Perl/"
date: 2013-05-12T16:51:53Z
pukiwiki: "Perl"
---

# Perl

## [Perl](http://www.perl.org/) {#rf8f3586}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Camelia.svg/500px-Camelia.svg.png" alt="Perl" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Perl 6 {#xd216707}

- [Perl 6](http://perl6.org/)
- [Official Perl 6 Documentation](http://perlcabal.org/syn/)
- [https://github.com/perl6/specs](https://github.com/perl6/specs)
- [Wikipedia.en:Perl_6](https://en.wikipedia.org/wiki/Perl_6)
- [Wikipedia.ja:Perl6](https://ja.wikipedia.org/wiki/Perl6)
- [Perl6入門書（Using Perl6）の日本語版を公開しました](http://perl.g.hatena.ne.jp/bosh/20140322/p1)
- [MoarVM - A VM for NQP and Rakudo Perl 6](http://moarvm.com/)
- [https://github.com/jnthn/zavolaj/](https://github.com/jnthn/zavolaj/)
- [Perl6 Advent Calendar 2012](http://qiita.com/advent-calendar/2012/perl6)
- [Perl6 Advent Calendar 2011](http://atnd.org/events/22820)

### ChangeLog {#fbf40da7}

- [https://github.com/rakudo/rakudo](https://github.com/rakudo/rakudo)
    - [https://github.com/rakudo/rakudo/commits/](https://github.com/rakudo/rakudo/commits/)
- [https://github.com/perl6/nqp/](https://github.com/perl6/nqp/)
    - [https://github.com/perl6/nqp/commits/](https://github.com/perl6/nqp/commits/)
- [https://github.com/MoarVM/MoarVM](https://github.com/MoarVM/MoarVM)
    - [https://github.com/MoarVM/MoarVM/commits/](https://github.com/MoarVM/MoarVM/commits/)

### インストール (Windows) {#jc58fcd6}

- [http://rakudo.org/downloads/star/](http://rakudo.org/downloads/star/)
- [http://sourceforge.net/projects/parrotwin32/](http://sourceforge.net/projects/parrotwin32/)

### インストール (Linux) {#yc5da695}

#### Arch Linux {#g18a79fa}

- [https://aur.archlinux.org/packages/rakudo/](https://aur.archlinux.org/packages/rakudo/)

## Perl 5 {#lf5a8369}

- [The Perl Programming Language - www.perl.org](http://www.perl.org/)
- [http://dev.perl.org/](http://dev.perl.org/)
- [https://github.com/Perl](https://github.com/Perl)
- [http://perldoc.jp/](http://perldoc.jp/)
    - [http://perldoc.jp/func/pack](http://perldoc.jp/func/pack)

Perl 5 は汎用スクリプト言語です．<br>
TeX 関連プログラムには Perl 5 で書かれたスクリプトがあります．<br>
latexmk.pl などの Perl 5 で書かれたスクリプトを実行するには Perl 5 の処理系が必要です．<br>
TeX Live (Win32) 版には Perl 5 の処理系が含まれています．<br>
W32TeX を使用する場合は Strawberry Perl をインストールしてください．<br>

### ChangeLog {#i169c6d8}

- [http://perl5.git.perl.org/perl.git](http://perl5.git.perl.org/perl.git)
- [https://github.com/Perl/perl5](https://github.com/Perl/perl5)
    - [https://github.com/Perl/perl5/commits/](https://github.com/Perl/perl5/commits/)

### インストール (Windows) {#l06514b7}

#### Strawberry Perl {#bfff8462}

- [Strawberry Perl](http://strawberryperl.com/)

Strawberry Perl を C:\strawberry にインストールした場合は

```
;C:\strawberry\c\bin;C:\strawberry\perl\site\bin;C:\strawberry\perl\bin
```

がシステム環境変数 Path に追加されます．

#### ActivePerl {#jad19d56}

- [http://downloads.activestate.com/ActivePerl/releases/](http://downloads.activestate.com/ActivePerl/releases/)

#### MSYS2 {#wedf6406}

```
$ pacman -S perl
```

#### tlperl {#x3549067}

TeX Live の Win32 版には Perl の処理系が収録されています．<br>

- [http://www.tug.org/svn/texlive/trunk/Master/tlpkg/tlperl/](http://www.tug.org/svn/texlive/trunk/Master/tlpkg/tlperl/)
    - [log](http://www.tug.org/svn/texlive/trunk/Master/tlpkg/tlperl/?view=log)

### インストール (Linux) {#y6a5abef}

#### Arch Linux {#t5beee15}

- [https://www.archlinux.org/packages/?name=perl](https://www.archlinux.org/packages/?name=perl)

### TeX関連モジュール {#y91d7e77}

- [TeX-DVI - CPAN](http://search.cpan.org/~janpaz/TeX-DVI-1.01/)
- [TeX-XDV-Parse - CPAN](http://search.cpan.org/~jrm/TeX-XDV-Parse-0.02/)

## [fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) <a id="fwdsumatrapdf"></a> {#m5826a55}

### Perl 版 {#ea342970}

Strawberry Perl 5.20.0.1 で動作確認しています．<br>
FFI::Raw がインストールされていない場合は以下を実行して FFI::Raw をインストールします．<br>

```
>cpan
cpan> install FFI::Raw
```

***

- fwdsumatrapdf.pl

***

```
# vim: ts=4 sw=4 expandtab:
# -*- coding: utf-8 -*-

use v5.20;
use feature ':all';
use warnings;
use utf8;
use File::Spec;
use FFI::Raw;
use Win32::API;
use Encode::Locale;
use Encode;

my $TIMEOUT = 10000;

sub wchar($str) {
    return encode('UTF-16LE', $str . "\0");
}

sub runSumatraPDF() {
    my $HKEY_LOCAL_MACHINE = 0x80000002;
    my $KEY_QUERY_VALUE = 0x01;
    my $keyPath = 'SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\SumatraPDF.exe';
    my $RegOpenKeyExW = Win32::API::More->new('advapi32', "RegOpenKeyExW", "NPNNP", "N");
    my $RegQueryValueExW = Win32::API::More->new('advapi32', "RegQueryValueExW", "NPPPPP", "N");
    my $RegCloseKey = Win32::API::More->new('advapi32', "RegCloseKey", "N", "N");
    my $CreateProcessW = Win32::API::More->new("kernel32", "CreateProcessW", "PPPPINPPTT", "I");
    my $WaitForInputIdle = Win32::API::More->new("user32", "WaitForInputIdle", "NN", "N");
#*********************************
#    LPWSTR does **NOT** work!
#*********************************
#    Win32::API::Struct->typedef('STARTUPINFOW', qw(
#        DWORD cb;
#        LPWSTR lpReserved;
#        LPWSTR lpDesktop;
#        LPWSTR lpTitle;
#        DWORD dwX;
#        DWORD dwY;
#        DWORD dwXSize;
#        DWORD dwYSize;
#        DWORD dwXCountChars;
#        DWORD dwYCountChars;
#        DWORD dwFillAttribute;
#        DWORD dwFlags;
#        WORD wShowWindow;
#        WORD cbReserved2;
#        LPBYTE lpReserved2;
#        HANDLE hStdInput;
#        HANDLE hStdOutput;
#        HANDLE hStdError;
#    ));
#*********************************
#    LPWSTR -> LPBYTE
#*********************************
    Win32::API::Struct->typedef('STARTUPINFOW', qw(
        DWORD cb;
        LPBYTE lpReserved;
        LPBYTE lpDesktop;
        LPBYTE lpTitle;
        DWORD dwX;
        DWORD dwY;
        DWORD dwXSize;
        DWORD dwYSize;
        DWORD dwXCountChars;
        DWORD dwYCountChars;
        DWORD dwFillAttribute;
        DWORD dwFlags;
        WORD wShowWindow;
        WORD cbReserved2;
        LPBYTE lpReserved2;
        HANDLE hStdInput;
        HANDLE hStdOutput;
        HANDLE hStdError;
    ));
    Win32::API::Struct->typedef('PROCESS_INFORMATION', qw(
        HANDLE hProcess;
        HANDLE hThread;
        DWORD dwProcessId;
        DWORD dwThreadId;
    ));
    my $si = Win32::API::Struct->new('STARTUPINFOW');
    my $pi = Win32::API::Struct->new('PROCESS_INFORMATION');
    my $subKey = pack('I', 0);
    my $dwType = pack('I', 0);
    my $sz = pack('I', 0);
    $RegOpenKeyExW->Call($HKEY_LOCAL_MACHINE, wchar($keyPath), 0, $KEY_QUERY_VALUE, $subKey);
    $subKey = unpack('I', $subKey);
    $RegQueryValueExW->Call($subKey, 0, 0, $dwType, 0, $sz);
    my $sumatraPDFRegistry = "\0" x unpack('I', $sz);
    $RegQueryValueExW->Call($subKey, 0, 0, $dwType, $sumatraPDFRegistry, $sz);
    $RegCloseKey->Call($subKey);
    my $sumatrapdfRegStrLength = (sprintf("%d", unpack('I', $sz)) - 2) / 2;
    my $regValue = pack('A' . $sumatrapdfRegStrLength, decode('UTF-16LE', $sumatraPDFRegistry));
    my $sumatraPDFCommandLine = '"' . $regValue . '" -reuse-instance';
    $CreateProcessW->Call(0, wchar($sumatraPDFCommandLine), 0, 0, 0, 0, 0, 0, $si, $pi);
    $WaitForInputIdle->Call($pi->{hProcess}, $TIMEOUT);
}

sub ddeExecute($server, $topic, $command) {
    my $wcslen = FFI::Raw->new(
        'msvcrt.dll', 'wcslen',
        FFI::Raw::uint,
        FFI::Raw::str
    );
    my $DdeInitializeW = FFI::Raw->new(
        'user32.dll', 'DdeInitializeW',
        FFI::Raw::uint,
        FFI::Raw::str, FFI::Raw::ptr, FFI::Raw::uint, FFI::Raw::uint
    );
    my $DdeUninitialize = FFI::Raw->new(
        'user32.dll', 'DdeUninitialize',
        FFI::Raw::int,
        FFI::Raw::uint
    );
    my $DdeCreateStringHandleW = FFI::Raw->new(
        'user32.dll', 'DdeCreateStringHandleW',
        FFI::Raw::ptr,
        FFI::Raw::uint, FFI::Raw::str, FFI::Raw::uint
    );
    my $DdeFreeStringHandle = FFI::Raw->new(
        'user32.dll', 'DdeFreeStringHandle',
        FFI::Raw::int,
        FFI::Raw::uint, FFI::Raw::ptr
    );
    my $DdeConnect = FFI::Raw->new(
        'user32.dll', 'DdeConnect',
        FFI::Raw::ptr,
        FFI::Raw::uint, FFI::Raw::ptr, FFI::Raw::ptr, FFI::Raw::ptr
    );
    my $DdeDisconnect = FFI::Raw->new(
        'user32.dll', 'DdeDisconnect',
        FFI::Raw::int,
        FFI::Raw::ptr
    );
    my $DdeCreateDataHandle = FFI::Raw->new(
        'user32.dll', 'DdeCreateDataHandle',
        FFI::Raw::ptr,
        FFI::Raw::uint, FFI::Raw::str, FFI::Raw::uint, FFI::Raw::uint, FFI::Raw::ptr, FFI::Raw::uint, FFI::Raw::uint
    );
    my $DdeFreeDataHandle = FFI::Raw->new(
        'user32.dll', 'DdeFreeDataHandle',
        FFI::Raw::int,
        FFI::Raw::ptr
    );
    my $DdeClientTransaction = FFI::Raw->new(
        'user32.dll', 'DdeClientTransaction',
        FFI::Raw::ptr,
        FFI::Raw::ptr, FFI::Raw::uint, FFI::Raw::ptr, FFI::Raw::ptr, FFI::Raw::uint, FFI::Raw::uint, FFI::Raw::uint, FFI::Raw::ptr
    );
    my $idInstance = pack('I', 0);
    my $APPCMD_CLIENTONLY = 0x10;
    my $CP_WINUNICODE = 1200;
    my $CF_UNICODETEXT = 13;
    my $XCLASS_FLAGS = 0x4000;
    my $XTYP_EXECUTE = (0x0050 | $XCLASS_FLAGS);
    $DdeInitializeW->call($idInstance, 0, $APPCMD_CLIENTONLY, 0);
    $idInstance = unpack('I', $idInstance);
    $idInstance or die "DdeInitializeW error";
    my $hszServer = $DdeCreateStringHandleW->call($idInstance, wchar($server), $CP_WINUNICODE) or die "DdeCreateStringHandleW error";
    my $hszTopic = $DdeCreateStringHandleW->call($idInstance, wchar($topic), $CP_WINUNICODE) or die "DdeCreateStringHandleW error";
    my $hConvClient = $DdeConnect->call($idInstance, $hszServer, $hszTopic, 0) or die "DdeConnect error";
    my $hDdeData = $DdeCreateDataHandle->call($idInstance, wchar($command), ($wcslen->call(wchar($command)) + 1)*2, 0, 0, $CF_UNICODETEXT, 0) or die "DdeCreateDataHandle error";
    my $hDdeTransactionData = $DdeClientTransaction->call($hDdeData, -1, $hConvClient, 0, 0, $XTYP_EXECUTE, $TIMEOUT, 0) or die "DdeClientTransaction error";
    $hDdeTransactionData and $DdeFreeDataHandle->call($hDdeTransactionData);
    $hDdeData and $DdeFreeDataHandle->call($hDdeData);
    $hszServer and $DdeFreeStringHandle->call($idInstance, $hszServer);
    $hszTopic and $DdeFreeStringHandle->call($idInstance, $hszTopic);
    $hConvClient and $DdeDisconnect->call($hConvClient);
    $idInstance and $DdeUninitialize->call($idInstance);
}

if ($0 eq __FILE__) {
    Encode::Locale::decode_argv;
    $#ARGV == 2 or say "Usage: $0 pdf tex line" and exit 2;
    my $pdf = File::Spec->rel2abs($ARGV[0]);
    my $tex = File::Spec->rel2abs($ARGV[1]);
    my $line = sprintf("%d", $ARGV[2]) or die "Invalid argument!";
    my $server = 'SUMATRA';
    my $topic = 'control';
    my $command = '[ForwardSearch("' . $pdf . '","' . $tex . '",' . $line . ',0,0,0)]';
    runSumatraPDF();
    ddeExecute($server, $topic, $command);
}
```

***

## 関連リンク {#lbc0c2cf}

- [This Perl goes to 11](http://perl11.org/)
- [Perl Advent Calendar Japan](http://perl-users.jp/articles/advent-calendar/)
- [https://metacpan.org/release/FFI-Raw](https://metacpan.org/release/FFI-Raw)
- [http://dcbpw.org/dcbpw2014/talk/5394](http://dcbpw.org/dcbpw2014/talk/5394)
- [http://eli.thegreenplace.net/2006/12/04/compiling-c-dlls-and-using-them-from-perl/](http://eli.thegreenplace.net/2006/12/04/compiling-c-dlls-and-using-them-from-perl/)
- [Perl勉強日誌 - スマートマッチ](http://straitwalk.hatenablog.com/entry/2013/06/18/230159)
- [perlのスマートマッチ演算子が怖い](http://itochin2.hatenablog.com/entry/2013/04/09/193633)
