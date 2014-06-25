---
title: "C++/CLI"
url: "/C++/CLI/"
date: 2014-06-24T20:05:11Z
pukiwiki: "C++/CLI"
---

# C++/CLI

## C++/CLI {#f965156f}

- [http://msdn.microsoft.com/ja-jp/library/68td296t.aspx](http://msdn.microsoft.com/ja-jp/library/68td296t.aspx)
- [http://msdn.microsoft.com/ja-jp/library/0wf2yk2k.aspx](http://msdn.microsoft.com/ja-jp/library/0wf2yk2k.aspx)
- [http://msdn.microsoft.com/ja-jp/library/ms235282.aspx](http://msdn.microsoft.com/ja-jp/library/ms235282.aspx)
- [Wikipedia.ja:C++/CLI](https://ja.wikipedia.org/wiki/C%2B%2B%2FCLI)
- [http://so-zou.jp/software/tech/programming/language-comparison/](http://so-zou.jp/software/tech/programming/language-comparison/)
- [http://www.infoq.com/jp/news/2011/12/cxxi-mono](http://www.infoq.com/jp/news/2011/12/cxxi-mono)
- [C++/CLI + mono その２](http://d.hatena.ne.jp/ak11/20070313)

## [fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) <a id="fwdsumatrapdf"></a> {#t8977872}

### C++/CLI 版 {#i266eeec}

Microsoft Visual Studio "14" CTP の Microsoft (R) C/C++ Optimizing Compiler Version 19.00.21730.1 で動作確認しています．<br>
コマンドラインからビルドする場合は以下のようにしてビルドします．<br>

```
cl /clr fwdsumatrapdf.cxx
```

***

- fwdsumatrapdf.cxx

***

```
// vim: ts=4 sw=4 expandtab:
// >cl /clr fwdsumatrapdf.cxx

#using <System.dll>
#using <Microsoft.VisualBasic.dll>

namespace Ddeml
{
    using namespace System::Runtime::InteropServices;

    public ref class DdemlError : System::Exception
    {
    public:
        explicit DdemlError(System::String^ e)
        {
            gcnew System::Exception(e);
        };
    };

    using DdeCallback = void* (*)(unsigned int uType, unsigned int uFmt, void* hconv, void* hsz1, void* hsz2, void* hdata, unsigned int dwData1, unsigned int dwData2);
    const unsigned int APPCMD_CLIENTONLY = 0x10u;
    const int CP_WINUNICODE = 1200;
    const unsigned int CF_UNICODETEXT = 13u;
    const unsigned int XCLASS_FLAGS = 0x4000u;
    const unsigned int XTYP_EXECUTE = (0x0050u | XCLASS_FLAGS);
    [DllImport(R"(user32.dll)", EntryPoint="DdeInitializeW", CharSet=CharSet::Unicode)]
    extern "C" auto DdeInitializeW(void* pidInst, DdeCallback pfnCallback, unsigned int afCmd, unsigned int ulRes) -> unsigned int;
    [DllImport(R"(user32.dll)", EntryPoint="DdeUninitialize", CharSet=CharSet::Unicode)]
    extern "C" auto DdeUninitialize(unsigned int idInst) -> bool;
    [DllImport(R"(user32.dll)", EntryPoint="DdeCreateStringHandleW", CharSet=CharSet::Unicode)]
    extern "C" auto DdeCreateStringHandleW(unsigned int idInst, System::String^ psz, int iCodePage) -> void*;
    [DllImport(R"(user32.dll)", EntryPoint="DdeFreeStringHandle", CharSet=CharSet::Unicode)]
    extern "C" auto DdeFreeStringHandle(unsigned int idInst, void* hsz) -> bool;
    [DllImport(R"(user32.dll)", EntryPoint="DdeCreateDataHandle", CharSet=CharSet::Unicode)]
    extern "C" auto DdeCreateDataHandle(unsigned int idInst, System::String^ pSrc, unsigned int cb, unsigned int cbOff, void* hszItem, unsigned int wFmt, unsigned int afCmd) -> void*;
    [DllImport(R"(user32.dll)", EntryPoint="DdeFreeDataHandle", CharSet=CharSet::Unicode)]
    extern "C" auto DdeFreeDataHandle(void* hData) -> bool;
    [DllImport(R"(user32.dll)", EntryPoint="DdeConnect", CharSet=CharSet::Unicode)]
    extern "C" auto DdeConnect(unsigned int idInst, void* hszServer, void* hszTopic, void* pCC) -> void*;
    [DllImport(R"(user32.dll)", EntryPoint="DdeDisconnect", CharSet=CharSet::Unicode)]
    extern "C" auto DdeDisconnect(void* hConvList) -> bool;
    [DllImport(R"(user32.dll)", EntryPoint="DdeClientTransaction", CharSet=CharSet::Unicode)]
    extern "C" auto DdeClientTransaction(void* pData, unsigned int cbData, void* hConv, void* hszItem, unsigned int wFmt, unsigned int wType, unsigned int dwTimeout, void* pdwResult) -> void*;
}

namespace SumatraPDFClient
{
    using namespace System;
    using namespace System::IO;
    using namespace System::Diagnostics;
    using namespace System::ComponentModel;
    using namespace Microsoft::Win32;
    using namespace Microsoft::VisualBasic;

    public class ForwardSearch
    {
    private:
        static const int timeout = 10000;

        auto static Usage(cli::array<System::String^>^ args) -> void
        {
            System::String^ s = "usage: " + Environment::GetCommandLineArgs()[0] + " pdffile texfile line";
            if (args->Length == 3) {
                return;
            }
            else {
                Console::Error->WriteLine(s);
                Environment::Exit(2);
            }
        }

        auto static RunSumatraPDF(String^ pdf) -> void
        {
            if (Process::GetProcessesByName("SumatraPDF")->Length != 0) {
                return;
            }
            else {
                auto ps = gcnew Process();
                try {
                    System::String^ sumatrapdfRegistry = "SumatraPDF.exe";
                    System::String^ keyPath = R"(SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\SumatraPDF.exe)";
                    RegistryKey^ rKey = nullptr;
                    try {
                        rKey = Registry::LocalMachine->OpenSubKey(keyPath);
                        sumatrapdfRegistry = rKey->GetValue(System::String::Empty)->ToString();
                    }
                    finally {
                        if (rKey != nullptr) {
                            rKey->Close();
                        }
                    }
                    if (File::Exists(sumatrapdfRegistry)) {
                        ps->StartInfo->FileName = sumatrapdfRegistry;
                    }
                    else {
                        throw gcnew FileNotFoundException();
                    }
                }
                catch (System::Exception^) {
                    System::String^ sumatrapdfWin32Default = R"(C:\Program Files\SumatraPDF\SumatraPDF.exe)";
                    System::String^ sumatrapdfWin64Default = R"#(C:\Program Files (x86)\SumatraPDF\SumatraPDF.exe)#";
                    if (File::Exists(sumatrapdfWin32Default)) {
                        ps->StartInfo->FileName = sumatrapdfWin32Default;
                    }
                    else if (File::Exists(sumatrapdfWin64Default)) {
                        ps->StartInfo->FileName = sumatrapdfWin64Default;
                    }
                    else {
                        ps->StartInfo->FileName = Interaction::InputBox("Input the path to SumatraPDF.exe.", "fwdsumatrapdf", "SumatraPDF.exe", 0, 0);
                    }
                }
                ps->StartInfo->Arguments = "-reuse-instance " + "\"" + pdf + "\"";
                ps->Start();
                ps->WaitForInputIdle(timeout);
            }
        }

        auto static DdeExecute(System::String^ server, System::String^ topic, System::String^ command) -> void
        {
            unsigned int idInstance = 0u;
            void* hszServer = nullptr;
            void* hszTopic = nullptr;
            void* hConvClient = nullptr;
            void* hDdeData = nullptr;
            void* hDdeTransactionData = nullptr;
            try {
                Ddeml::DdeInitializeW(&idInstance, [] { return nullptr; }(), Ddeml::APPCMD_CLIENTONLY, 0u);
                if (idInstance == 0u) throw gcnew Ddeml::DdemlError("DdeInitializeW error");
                hszServer = Ddeml::DdeCreateStringHandleW(idInstance, server, Ddeml::CP_WINUNICODE);
                if (hszServer == nullptr) throw gcnew Ddeml::DdemlError("DdeCreateStringHandleW error");
                hszTopic = Ddeml::DdeCreateStringHandleW(idInstance, topic, Ddeml::CP_WINUNICODE);
                if (hszTopic == nullptr) throw gcnew Ddeml::DdemlError("DdeCreateStringHandleW error");
                hConvClient = Ddeml::DdeConnect(idInstance, hszServer, hszTopic, nullptr);
                if (hConvClient == nullptr) throw gcnew Ddeml::DdemlError("DdeConnect error");
                hDdeData = Ddeml::DdeCreateDataHandle(idInstance, command, static_cast<unsigned int>((command->Length + 1)*sizeof(wchar_t)), 0u, nullptr, Ddeml::CF_UNICODETEXT, 0u);
                if (hDdeData == nullptr) throw gcnew Ddeml::DdemlError("DdeCreateDataHandle error");
                hDdeTransactionData = Ddeml::DdeClientTransaction(hDdeData, static_cast<unsigned int>(-1), hConvClient, nullptr, 0u, Ddeml::XTYP_EXECUTE, static_cast<unsigned int>(timeout), nullptr);
                if (hDdeTransactionData == nullptr) throw gcnew Ddeml::DdemlError("DdeClientTransaction error");
            }
            finally {
                if (hDdeTransactionData != nullptr) Ddeml::DdeFreeDataHandle(hDdeTransactionData);
                if (hDdeData != nullptr) Ddeml::DdeFreeDataHandle(hDdeData);
                if (hszServer != nullptr) Ddeml::DdeFreeStringHandle(idInstance, hszServer);
                if (hszTopic != nullptr) Ddeml::DdeFreeStringHandle(idInstance, hszTopic);
                if (hConvClient != nullptr) Ddeml::DdeDisconnect(hConvClient);
                if (idInstance != 0u) Ddeml::DdeUninitialize(idInstance);
            }
        }

    public:
        auto static Main(cli::array<String^>^ args) -> void
        {
            Usage(args);
            auto pdf = args[0];
            auto tex = args[1];
            auto line = args[2];
            try {
                System::Int32::Parse(line);
                RunSumatraPDF(pdf);
                System::Int32 active = 0;
                System::String^ server = "SUMATRA";
                System::String^ topic = "control";
                System::String^ forwardSearch = "[ForwardSearch(\"" + pdf + "\",\"" + tex + "\"," + line + ",0,0," + active.ToString() + ")]";
                DdeExecute(server, topic, forwardSearch);
            }
            catch (System::ComponentModel::Win32Exception^ e) {
                System::Console::Error->WriteLine(e->Message);
                System::Environment::Exit(-3);
            }
            catch (System::InvalidOperationException^ e) {
                System::Console::Error->WriteLine(e->Message);
                System::Environment::Exit(-2);
            }
            catch (System::Exception^ e) {
                System::Console::Error->WriteLine(e->Message);
                System::Environment::Exit(-1);
            }
        }
    };
}

[System::STAThread]
auto main(cli::array<System::String^>^ args) -> int
{
    SumatraPDFClient::ForwardSearch::Main(args);

    return 0;
}
```

***
