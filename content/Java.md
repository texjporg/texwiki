---
title: "Java"
url: "/Java/"
date: 2013-05-19T16:44:31Z
pukiwiki: "Java"
---

# Java

## Java {#m5391c84}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Java_logo_and_wordmark.svg/200px-Java_logo_and_wordmark.svg.png" alt="Java" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## Summary {#e1088309}

- [http://java.com/](http://java.com/)
- [JDKのインストール(Windows)と Java 関連用語の説明](http://yohshiy.blog.fc2.com/blog-entry-226.html)
- [http://stackoverflow.com/questions/5826070/java-runtime-process-check-if-waiting-for-input](http://stackoverflow.com/questions/5826070/java-runtime-process-check-if-waiting-for-input)
- [http://stackoverflow.com/questions/10765928/java-how-to-know-if-a-process-is-waiting-for-input](http://stackoverflow.com/questions/10765928/java-how-to-know-if-a-process-is-waiting-for-input)
- [http://stackoverflow.com/questions/54686/how-to-get-a-list-of-current-open-windows-process-with-java](http://stackoverflow.com/questions/54686/how-to-get-a-list-of-current-open-windows-process-with-java)
- [http://stackoverflow.com/questions/15050391/how-to-make-structure-in-jna](http://stackoverflow.com/questions/15050391/how-to-make-structure-in-jna)
- [http://qiita.com/tags/java](http://qiita.com/tags/java)
- [http://qiita.com/tags/jvm](http://qiita.com/tags/jvm)
    - [見せてやろうJVMが持つ真のチカラを！ JVMのオプションを一覧する方法について。](http://qiita.com/taichi@github/items/7d2bb7d4af7fec8530c3)
- [大刷新リリース Java 8の新機能](http://news.mynavi.jp/special/2014/java8/)
- [Java/「現在ディレクトリ」(Current Working Directory)の変更](http://www.glamenv-septzen.net/view/1213)
- [Java からコマンドを実行 - Runtime クラスの利用 -](http://www.whitemark.co.jp/tec/java/javaExamples9.html)
- [Javaでシェルコマンドを実行して標準出力を取得する](http://blog.app-works.org/archives/194)
- [Java Advent Calendar 2014 - Qiita](http://qiita.com/advent-calendar/2014/java)

### Java™ Platform, Standard Edition (JRE &amp; JDK) {#o8881b8e}

- [Java SE Downloads](http://www.oracle.com/technetwork/java/javase/downloads/)
- [https://jdk8.java.net/download.html](https://jdk8.java.net/download.html)

Java で書かれたアプリケーションを使用する場合は JRE をインストールします．<br>
Java でプログラミングをしたい人は JDK をインストールします．<br>

### ライブラリ {#t5f9c39b}

- [Java Native Access (JNA)](https://github.com/twall/jna)
- [WinRun4J](https://github.com/poidasmith/winrun4j)
    - [http://winrun4j.sourceforge.net/](http://winrun4j.sourceforge.net/)
    - [https://github.com/poidasmith/winrun4j/blob/master/org.boris.winrun4j.test/java/src/org/boris/winrun4j/winapi/DDEML.java](https://github.com/poidasmith/winrun4j/blob/master/org.boris.winrun4j.test/java/src/org/boris/winrun4j/winapi/DDEML.java)
- [JDDE (Dynamic Data Exchange For Java)](http://jdde.pretty-tools.com/)
    - [http://sourceforge.net/projects/jdde/](http://sourceforge.net/projects/jdde/)
- [JRegistry](http://sourceforge.net/projects/jregistry/)

### IDE {#efcb0c41}

- [Eclipse](/Eclipse/)

## [fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) <a id="fwdsumatrapdf"></a> {#d64fe02a}

### Java 版 {#h4cb0cda}

ビルド・実行には

- JDK
- [JDDE (Dynamic Data Exchange For Java)](http://jdde.pretty-tools.com/)
- [JRegistry](http://sourceforge.net/projects/jregistry/)
- [Java Native Access (JNA)](https://github.com/twall/jna)

が必要です．<br>
JDK 8, JDDE 2.0.3, JRegistry 1.8.1, JNA 4.1.0 で動作確認しています．<br>

```
>javac -cp .;pretty-tools-JDDE-2.0.3.jar;jregistry-1.8.1.jar;jna-4.1.0.jar Fwdsumatrapdf.java
```

```
C:.
└─w32tex
    └─bin
        ├─Fwdsumatrapdf.java
        ├─Fwdsumatrapdf.class
        ├─pretty-tools-JDDE-2.0.3.jar
        ├─JavaDDE.dll
        ├─JavaDDEx64.dll
        ├─jregistry-1.8.1.jar
        ├─reg.dll
        ├─reg_x64.dll
        ├─jna-4.1.0.jar
        └─jna-platform-4.1.0.jar
```

***

- Fwdsumatrapdf.java

***

```
/* vim: ts=4 sw=4 expandtab:
 * >javac -cp .;pretty-tools-JDDE-2.0.3.jar;jregistry-1.8.1.jar;jna-4.1.0.jar Fwdsumatrapdf.java
 * >java -cp .;pretty-tools-JDDE-2.0.3.jar;jregistry-1.8.1.jar;jna-4.1.0.jar Fwdsumatrapdf
 */

import java.util.List;
import java.util.Arrays;
import com.registry.RegistryKey;
import com.registry.RegistryValue;
import com.registry.RegStringValue;
import com.pretty_tools.dde.ClipboardFormat;
import com.pretty_tools.dde.DDEException;
import com.pretty_tools.dde.client.DDEClientConversation;
import com.pretty_tools.dde.DDEMLException;
import com.sun.jna.Library;
import com.sun.jna.win32.StdCallLibrary;
import com.sun.jna.Native;
import com.sun.jna.WString;
import com.sun.jna.Structure;
import com.sun.jna.Pointer;

public class Fwdsumatrapdf {
    public static class STARTUPINFOW extends Structure {
        public int cb;
        public WString lpReserved;
        public WString lpDesktop;
        public WString lpTitle;
        public int dwX;
        public int dwY;
        public int dwXSize;
        public int dwYSize;
        public int dwXCountChars;
        public int dwYCountChars;
        public int dwFillAttribute;
        public int dwFlags;
        public short wShowWindow;
        public short cbReserved2;
        public Pointer lpReserved2;
        public Pointer hStdInput;
        public Pointer hStdOutput;
        public Pointer hStdError;
        @Override
        protected List<String> getFieldOrder() {
            return Arrays.asList(
                    "cb",
                    "lpReserved",
                    "lpDesktop",
                    "lpTitle",
                    "dwX",
                    "dwY",
                    "dwXSize",
                    "dwYSize",
                    "dwXCountChars",
                    "dwYCountChars",
                    "dwFillAttribute",
                    "dwFlags",
                    "wShowWindow",
                    "cbReserved2",
                    "lpReserved2",
                    "hStdInput",
                    "hStdOutput",
                    "hStdError");
        }
    }

    public static class PROCESS_INFORMATION extends Structure {
        public Pointer hProcess;
        public Pointer hThread;
        public int dwProcessId;
        public int dwThreadId;
        @Override
        protected List<String> getFieldOrder() {
            return Arrays.asList(
                    "hProcess",
                    "hThread",
                    "dwProcessId",
                    "dwThreadId");
        }
    }

    public interface Kernel32 extends StdCallLibrary {
        public boolean CreateProcessW(
                Pointer lpApplicationName,
                WString lpCommandLine,
                Pointer lpProcessAttributes,
                Pointer lpThreadAttributes,
                boolean bInheritHandles,
                int dwCreationFlags,
                Pointer lpEnvironment,
                Pointer lpCurrentDirectory,
                STARTUPINFOW lpStartupInfo,
                PROCESS_INFORMATION lpProcessInformation);
    }

    public interface User32 extends StdCallLibrary {
        public int WaitForInputIdle(
                Pointer hProcess,
                int dwMilliseconds);
    }

    public static void usage(String[] args) {
        if (args.length != 3) {
            String s = "usage: java -cp .;pretty-tools-JDDE-2.0.3.jar;jregistry-1.8.1.jar;jna-4.1.0.jar Fwdsumatrapdf pdf tex line";
            System.err.println(s);
            System.exit(2);
        }
    }

    public static void ddeExecute(String[] args) {
        try {
            final RegistryKey root = RegistryKey.getRootKeyForIndex(RegistryKey.HKEY_LOCAL_MACHINE_INDEX);
            final String subKey = "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths\\SumatraPDF.exe";
            final RegistryKey regKey = new RegistryKey(root, subKey);
            final RegStringValue keyVal = (RegStringValue)regKey.getValue(null);
            final WString cmd = new WString("\"" + keyVal.getValue() + "\" -reuse-instance");
            final DDEClientConversation conversation = new DDEClientConversation();
            final int TIMEOUT = 10000;
            conversation.setTextFormat(ClipboardFormat.CF_UNICODETEXT);
            STARTUPINFOW si = new STARTUPINFOW();
            PROCESS_INFORMATION pi = new PROCESS_INFORMATION();
            Kernel32 kernel32 = (Kernel32)Native.loadLibrary("kernel32", Kernel32.class);
            User32 user32 = (User32)Native.loadLibrary("user32", User32.class);
            kernel32.CreateProcessW(Pointer.NULL, cmd, Pointer.NULL, Pointer.NULL, false, 0, Pointer.NULL, Pointer.NULL, si, pi);
            user32.WaitForInputIdle(pi.hProcess, TIMEOUT);

            try {
                final String SERVER = "SUMATRA";
                final String TOPIC = "control";
                conversation.connect(SERVER, TOPIC);
                final String pdf = args[0];
                final String tex = args[1];
                final String line = args[2];
                final String active = "0";
                final String forwadSearch = "[ForwardSearch(\"" + pdf + "\",\"" + tex + "\"," + line + ",0,0," + active + ")]";
                conversation.execute(forwadSearch);
            }
            finally {
                conversation.disconnect();
            }
        }
        catch (DDEMLException e) {
            System.err.println("DDEMLException: 0x" + Integer.toHexString(e.getErrorCode()) + " " + e.getMessage());
            System.exit(1);
        }
        catch (DDEException e) {
            System.err.println("DDEClientException: " + e.getMessage());
            System.exit(1);
        }
        catch (Exception e) {
            System.err.println("Exception: " + e);
            System.exit(1);
        }
    }

    public static void main(String[] args) {
        try {
            usage(args);
            ddeExecute(args);

        }
        catch (Exception e) {
            System.err.println("Exception: " + e);
            System.exit(1);
        }
    }
}
```

***
