---
title: "TeXstudio/設定"
url: "/TeXstudio/設定/"
date: 2012-12-01T03:34:03Z
bookCollapseSection: true
pukiwiki: "TeXstudio/設定"
---

# TeXstudio/設定

[TeXstudio](/TeXstudio/) > 設定

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## 設定 {#p076e369}

\[オプション(O)\]-\[TeXstudioの設定(C)\]

### 高度なオプションの表示 {#r962ad23}

高度なオプションの表示をチェックすると詳細設定ができます．<br>

***

<span style="color:#3F43EF;background-color:#3F43EF;"><ins>　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>TeXstudio</strong></span>　　　　　　　　　　　　　　　　　　　　　<span style="color:#DD4444;background-color:#DD4444;"></ins>\[ <span style="color:White;"><strong>×</strong></span> \]<ins></span></ins></span><br>

　　　　　高度なオプションを有効化しました。<br>
　　　　　これで詳細にTXSを設定することが可能です。<br>
　　　　　一般的な設定のみを見るには再度高度なオプションを無効化してください。<br>

***

### 設定ファイル {#g2cec334}

> <table>
> <thead>
> <tr><th style="text-align:center">環境</th><th style="text-align:center">設定ファイルが保存されるフォルダー</th><th style="text-align:center">ファイル名</th></tr>
> </thead>
> <tbody>
> <tr><td>Portable バージョン</td><td>TeXstudio の実行ファイルと同じフォルダー</td><td>texstudio.ini</td></tr>
> <tr><td>Windows</td><td>%APPDATA%\texstudio\</td><td>texstudio.ini</td></tr>
> <tr><td>UNIX, Linux, OS X</td><td>$HOME/.config/texstudio/</td><td>texstudio.ini</td></tr>
> </tbody>
> </table>
>

### コマンド {#yc27e161}

{{< children >}}

を参照して uplatex, upbibtex, biber, dvipdfmx, latexmk などの設定をします．<br>

### ビルド {#cb495de1}

#### 高度なオプションの表示が OFF の場合 {#f13fa401}

uplatex + dvipdfmx を実行して PDF ファイルを表示する場合は ビルド &amp; 表示 を DVI->PDFチェーン に変更します．<br>
Latexmk を実行して PDF ファイルを表示する場合は ビルド &amp; 表示 を コンパイル &amp; 表示 に変更して 既定のコンパイラ を Latexmk に変更します．<br>

***

<span style="color:#3F43EF;background-color:#3F43EF;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>TeXstudioの設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#3F43EF;background-color:#3F43EF;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_general.png" alt="一般" width="37" height="37" style="float:left">

一般　　　　　　　　　　　　　　メタコマンド<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_commands.png" alt="コマンド" width="37" height="37" style="float:left">

コマンド　　　　　　　　　　　　　ビルド &amp; 表示　　　<span style="color:Black;background-color:#EEEEEE;">\[DVI->PDFチェーン　　　　　　　　　　　　▼\]</span><span style="color:black;background-color:yellow;"><strong>← DVI->PDFチェーン に変更する</strong></span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_quickbuild.png" alt="ビルド" width="37" height="37" style="float:left">

<span style="color:Black;background-color:#DAEAFF;">ビルド 　　　　　　　　　　</span>　　　 既定のコンパイラ <span style="color:Black;background-color:#EEEEEE;">\[Latexmk　　　　　　　　　　　　　　　　　　▼\]</span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_shortcut.png" alt="キーボードショートカット" width="37" height="37" style="float:left">

キーボードショートカット　　　 既定のビューワー <span style="color:Black;background-color:#EEEEEE;">\[PDFビューア　　　　　　　　　　　　　　　▼\]</span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_editor.png" alt="エディタ" width="37" height="37" style="float:left">

エディタ　　　　　　　　　　　　　PDFビューア　　　<span style="color:Black;background-color:#EEEEEE;">\[組み込みPDFビューア (埋め込み)　　　▼\]</span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_highlighting.png" alt="構文の強調表示" width="37" height="37" style="float:left">

構文の強調表示　　　　　　　 既定の文献　　　<span style="color:Black;background-color:#EEEEEE;">\[Biber　　　　　　　　　　　　　　　　　　　　　▼\]</span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_completion.png" alt="コマンドの補完" width="37" height="37" style="float:left">

コマンドの補完<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_editor.png" alt="文法" width="37" height="37" style="float:left">

文法<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_preview.png" alt="プレビュー" width="37" height="37" style="float:left">

プレビュー<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_svn.png" alt="SVN" width="37" height="37" style="float:left">

SVN<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザーコマンド<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　<span style="color:Green;"><strong>✚</strong></span> 追加 　\]</span><br>

<br>

<br>

　☐ 高度なオプションの表示

<br>

***

#### 高度なオプションの表示が ON の場合 {#x0fa4d02}

uplatex + dvipdfmx を実行して PDF ファイルを表示する場合は ビルド &amp; 表示 を txs:///dvi-pdf-chain に変更します．<br>
Latexmk を実行して PDF ファイルを表示する場合は ビルド &amp; 表示 を txs:///compile &#x7c; txs:///view に変更して 既定のコンパイラ を txs:///latexmk に変更します．<br>

***

<span style="color:#3F43EF;background-color:#3F43EF;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>TeXstudioの設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#3F43EF;background-color:#3F43EF;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_general.png" alt="一般" width="37" height="37" style="float:left">

一般　　　　　　　　　　　　　　メタコマンド<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_commands.png" alt="コマンド" width="37" height="37" style="float:left">

コマンド　　　　　　　　　　　　　ビルド &amp; 表示　　　　　　\[txs:///dvi-pdf-chain　　　　　　　　　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]<span style="color:black;background-color:yellow;"><strong>← txs:///dvi-pdf-chain に変更する</strong></span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_quickbuild.png" alt="ビルド" width="37" height="37" style="float:left">

<span style="color:Black;background-color:#DAEAFF;">ビルド 　　　　　　　　　　</span>　　　 既定のコンパイラ　　　 \[txs:///latexmk　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_shortcut.png" alt="キーボードショートカット" width="37" height="37" style="float:left">

キーボードショートカット　　　 既定のビューワー　　　 \[txs:///view-pdf　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_latexmenus.png" alt="メニュー" width="37" height="37" style="float:left">

メニュー　　　　　　　　　　　　 PDFビューア　　　　　　\[txs:///view-pdf-internal --embedded　　　 　　　　　　　　　　　　　<strong>ᐯ</strong>\]<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_toolbars.png" alt="ツールバー" width="37" height="37" style="float:left">

ツールバー　　　　　　　 　　　既定の文献　　　　　　　\[txs:///biber　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_editor.png" alt="エディタ" width="37" height="37" style="float:left">

エディタ　　　　　　　 　　　　　既定の索引ツール　　　 \[txs:///makeindex　　　　　　　　　　　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_advancededitor.png" alt="詳細なエディタ設定" width="37" height="37" style="float:left">

詳細なエディタ設定　　　　　 PSチェーン　　　　　　　\[txs:///latex &#x7c; txs:///dvips &#x7c; txs:///view-ps　　　　　　　　　　　　　<strong>ᐯ</strong>\]<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_highlighting.png" alt="構文の強調表示" width="37" height="37" style="float:left">

構文の強調表示　　　　　　　DVIチェーン　　　　　　　\[txs:///latex &#x7c; txs:///view-dvi　　　　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_highlighting.png" alt="カスタム強調表示" width="37" height="37" style="float:left">

カスタム強調表示　　　　　　PDFチェーン　　　　　　　\[txs:///pdflatex &#x7c; txs:///view-pdf　　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong>\]<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_completion.png" alt="コマンドの補完" width="37" height="37" style="float:left">

コマンドの補完　　　　　　　　DVI->PDFチェーン　　　　\[txs:///latex &#x7c; txs:///dvipdf &#x7c; txs:///view-pdf　　　　　　　　　　　<strong>ᐯ</strong>\]<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_editor.png" alt="文法" width="37" height="37" style="float:left">

文法　　　　　　　　　　　　　　DVI->PS->PDFチェーン　\[txs:///latex &#x7c; txs:///dvips &#x7c; txs:///ps2pdf &#x7c; txs:///view-pdf　　<strong>ᐯ</strong>\]<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_preview.png" alt="プレビュー" width="37" height="37" style="float:left">

プレビュー　　　　　　　　　　 Asymptote DVIチェーン　\[txs:///latex &#x7c; txs:///asy &#x7c; txs:///latex &#x7c; txs:///view-dvi　　　　　<strong>ᐯ</strong>\]<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_svn.png" alt="SVN" width="37" height="37" style="float:left">

SVN　　　　　　　　　　　　　　Asymptote PDFチェーン　\[txs:///pdflatex &#x7c; txs:///asy &#x7c; txs:///pdflatex &#x7c; txs:///view-pdf　<strong>ᐯ</strong>\]<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　ユーザーコマンド<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[　<span style="color:Green;"><strong>✚</strong></span> 追加 　\]</span><br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　ビルドオプション<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　☑ コンパイル前に参考文献を確認・更新<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　☑ コンパイル開始時にメッセージを表示<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　☐ すでにdvi/ps/pdfファイルが開いている場合、新たにビューアを起動しない<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　標準出力に表示:　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;">\[ユーザーコマンドに対してのみ　　　　　　　　　　　　　▼\]</span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　コンパイルの繰り返しの最大数:　　　　　　　　<ins>5　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\[<strong>⇕</strong>\]</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　追加の検索パス:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　ログファイル<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　PDFファイル<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　コマンド($PATH)<br>

<br>

　☑ 高度なオプションの表示

<br>

***

### エディタ {#m95b4393}

#### 高度なオプションの表示が OFF の場合 {#j5e857fd}

デフォルトの文字コードは UTF-8 です．<br>
日本語の文書を作成する場合はインラインチェックのチェックをはずします．<br>

***

<span style="color:#3F43EF;background-color:#3F43EF;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>TeXstudioの設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#3F43EF;background-color:#3F43EF;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_general.png" alt="一般" width="37" height="37" style="float:left">

一般　　　　　　　　　　　　　　エディタ<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_commands.png" alt="コマンド" width="37" height="37" style="float:left">

コマンド　　　　　　　　　　　　フォントファミリー:　　　　　　　　　　<ins>メイリオ　　　　　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong></ins> ☐ モノスペースフォントのみ表示<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_quickbuild.png" alt="ビルド" width="37" height="37" style="float:left">

ビルド　　　　　　　　　　　　　フォントサイズ:　　　　　　　　　　　　<ins>12　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\[<strong>⇕</strong>\]</ins><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_shortcut.png" alt="キーボードショートカット" width="37" height="37" style="float:left">

キーボードショートカット　　　既定のフォントエンコーディング:　<span style="color:Black;background-color:#EEEEEE;"><ins>\[UTF-8　　　　　　　　　　　　　　　　　　　　　　▼\]</ins></span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_editor.png" alt="エディタ" width="37" height="37" style="float:left">

<span style="color:Black;background-color:#DAEAFF;">エディタ 　　　　　　　　　</span>　　　エンコーディングの自動検出:　　　☑ LaTeXの解析(%!TeX encoding, inputenc, inputenx)　　　　　☑ 文字の解析<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_highlighting.png" alt="構文の強調表示" width="37" height="37" style="float:left">

構文の強調表示　　　　　　　　　　　　　　　　　　　　　　　　　　　 ☑ 折りたたむ<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_completion.png" alt="コマンドの補完" width="37" height="37" style="float:left">

コマンドの補完　　　　　　　　字下げモード:　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[字下げと字下げの解除を自動的に行う　　▼\]</ins></span> ☐ タブを空白で置換<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_editor.png" alt="文法" width="37" height="37" style="float:left">

文法　　　　　　　　　　　　　　二重引用符の置換:　　　　　　　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[置換しない　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</ins></span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_preview.png" alt="プレビュー" width="37" height="37" style="float:left">

プレビュー　　　　　　　　　　　<span style="color:black;background-color:yellow;"><strong>☐ インラインチェック: ← 日本語の文書を作成する場合はチェックをはずす</strong></span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_svn.png" alt="SVN" width="37" height="37" style="float:left">

SVN<br>

<br>

<br>

<br>

<br>

<br>

　☐ 高度なオプションの表示

<br>

***

#### 高度なオプションの表示が ON の場合 {#j2e0dcc0}

デフォルトの文字コードは UTF-8 です．<br>
日本語の文書を作成する場合はインラインチェックのチェックをはずします．<br>

***

<span style="color:#3F43EF;background-color:#3F43EF;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>TeXstudioの設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#3F43EF;background-color:#3F43EF;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_general.png" alt="一般" width="37" height="37" style="float:left">

一般　　　　　　　　　　　　　　エディタ<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_commands.png" alt="コマンド" width="37" height="37" style="float:left">

コマンド　　　　　　　　　　　　フォントファミリー:　　　　　　　　　　<ins>メイリオ　　　　　　　　　　　　　　　　　　　　　　<strong>ᐯ</strong></ins> ☐ モノスペースフォントのみ表示<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_quickbuild.png" alt="ビルド" width="37" height="37" style="float:left">

ビルド　　　　　　　　　　　　　フォントサイズ:　　　　　　　　　　　　<ins>12　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\[<strong>⇕</strong>\]</ins><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_shortcut.png" alt="キーボードショートカット" width="37" height="37" style="float:left">

キーボードショートカット　　　行間隔:　　　　　　　　　　　　　　　　<ins>100%　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\[<strong>⇕</strong>\]</ins><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_latexmenus.png" alt="メニュー" width="37" height="37" style="float:left">

メニュー　　　　　　　　　　　　既定のフォントエンコーディング:　<span style="color:Black;background-color:#EEEEEE;"><ins>\[UTF-8　　　　　　　　　　　　　　　　　　　　　　▼\]</ins></span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_toolbars.png" alt="ツールバー" width="37" height="37" style="float:left">

ツールバー　　　　　　　　　　エンコーディングの自動検出:　　　☑ LaTeXの解析(%!TeX encoding, inputenc, inputenx)　　　　　☑ 文字の解析<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_editor.png" alt="エディタ" width="37" height="37" style="float:left">

<span style="color:Black;background-color:#DAEAFF;">エディタ 　　　　　　　　　</span>　　　　　　　　　　　　　　　　　　　　　　　 ☑ 折りたたむ<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_advancededitor.png" alt="詳細なエディタ設定" width="37" height="37" style="float:left">

詳細なエディタ設定　　　　　 字下げモード:　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[字下げと字下げの解除を自動的に行う　　▼\]</ins></span> ☐ タブを空白で置換<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_highlighting.png" alt="構文の強調表示" width="37" height="37" style="float:left">

構文の強調表示　　　　　　　 二重引用符の置換:　　　　　　　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[置換しない　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</ins></span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_highlighting.png" alt="カスタム強調表示" width="37" height="37" style="float:left">

カスタム強調表示　　　　　　<span style="color:black;background-color:yellow;"><strong>☐ インラインチェック: ← 日本語の文書を作成する場合はチェックをはずす</strong></span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_completion.png" alt="コマンドの補完" width="37" height="37" style="float:left">

コマンドの補完　　　　　　　 ☑ 非テキスト環境でのスペルミスを隠す　　　　　　　　　　　　　☑ 非テキスト環境での文法エラーを隠す<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_editor.png" alt="文法" width="37" height="37" style="float:left">

文法　　　　　　　　　　　　　　☑ 非texファイルの確認<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_preview.png" alt="プレビュー" width="37" height="37" style="float:left">

プレビュー　　　　　　　　　　☐ 含まれるファイルを自動的に読み込む<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_svn.png" alt="SVN" width="37" height="37" style="float:left">

SVN<br>

<br>

<br>

<br>

<br>

<br>

　☑ 高度なオプションの表示

<br>

***

### 詳細なエディタ設定 {#wbe91d52}

#### 高度なオプションの表示が ON の場合 {#a0833273}

Windows の TeXstudio で日本語入力するとカーソルが文字の位置から右にずれる場合は高度なオプションの表示を ON にして詳細なエディタ設定からハック/回避策の最適なディスプレイオプションの自動選択を OFF にして描画モードを QCE（推奨） から Qt に変更してください．<br>
デフォルトでは行番号を表示しません．<br>
行番号を表示する場合は外観の行番号を表示ですべての行番号を選択します．<br>

***

<span style="color:#3F43EF;background-color:#3F43EF;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>TeXstudioの設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#3F43EF;background-color:#3F43EF;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_general.png" alt="一般" width="37" height="37" style="float:left">

一般　　　　　　　　　　　　　　外観<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_commands.png" alt="コマンド" width="37" height="37" style="float:left">

コマンド　　　　　　　　　　　　☑ 行変更の状態を表示　　　　　　　　　　　　　　　　　　　　☐ 空白を表示<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_quickbuild.png" alt="ビルド" width="37" height="37" style="float:left">

ビルド　　　　　　　　　　　　　☑ 状態パネルを表示　　　　　　　　　　　　　　　　　　　　　　タブ幅:　<ins>4　　\[<strong>⇕</strong>\]</ins><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_shortcut.png" alt="キーボードショートカット" width="37" height="37" style="float:left">

キーボードショートカット　　　行番号を表示:　<span style="color:Black;background-color:#EEEEEE;"><ins>\[すべての行番号　　　　▼\]</ins></span>　　　　　　　　☑ 太いカーソル<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_latexmenus.png" alt="メニュー" width="37" height="37" style="float:left">

メニュー　　　　　　　　　　　　検索パネル<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_toolbars.png" alt="ツールバー" width="37" height="37" style="float:left">

ツールバー　　　　　　　　　　☐ 検索・置換パネルを共に閉じる<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_editor.png" alt="エディタ" width="37" height="37" style="float:left">

エディタ　　　　　　　　　　　　 ☑ 単語検索として単一行選択を使用<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_advancededitor.png" alt="詳細なエディタ設定" width="37" height="37" style="float:left">

<span style="color:Black;background-color:#DAEAFF;">詳細なエディタ設定　　　</span>　　☑ 検索範囲を既存の選択部に制限<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_highlighting.png" alt="構文の強調表示" width="37" height="37" style="float:left">

構文の強調表示　　　　　　　 特別なオプション<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_highlighting.png" alt="カスタム強調表示" width="37" height="37" style="float:left">

カスタム強調表示　　　　　　　☑ 括弧の自動補完　　　　　　　　　　　　　　　　　　　 ☑ ツールチップとしてエディタ上のテキストにヘルプを表示<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_completion.png" alt="コマンドの補完" width="37" height="37" style="float:left">

コマンドの補完　　　　　　　　　☑ マウスホイールによるズーム　　　　　　　　　　　　☑ ツールチップとしてエディタ上の式のプレビューを表示<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_editor.png" alt="文法" width="37" height="37" style="float:left">

文法　　　　　　　　　　　　　　　 ☑ なめらかなスクロール　　　　　　　　　　　　　　　　 ☑ 組み込みpdfビューワーでコマンドのヘルプを表示(texdoc)<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_preview.png" alt="プレビュー" width="37" height="37" style="float:left">

プレビュー　　　　　　　　　　　　☑ プレースホルダ前の開き括弧を上書き<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_svn.png" alt="SVN" width="37" height="37" style="float:left">

SVN　　　　　　　　　　　　　　　　☑ プレースホルダ後の閉括弧を上書き<br>

<br>

　　　　　　　　　　　　　　　　　　　　　　　　　　　　行のワードラップ:　　　　　　　　　　　　　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[ウィンドウ端で緩やかに行のワードラップを行う　　　　　　　　　　　　▼\]</ins></span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　最大文字数:　　　　　　　　　　　　　　　　　<ins>80　　　　　　　　\[<strong>⇕</strong>\]</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　全てのファイルを自動保存:　　　　　　　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[しない　　　　　▼\]</ins></span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ 暗黙的に、保存したファイルを再読み込みして外部での変更を適用（アンドゥ／リドゥスタックを破棄）<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ 記号をユニコード文字として挿入　　　　　　　　　　 ☐ 「Esc」キーで全画面表示モードを閉じることを無効化<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ ログ項目のクリック時にログマーカーを表示　　　　☑ ログの表示時にエラー行へ移動<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　コンテキストメニューからのスペルチェック:　　　　　<span style="color:Black;background-color:#EEEEEE;"><ins>\[項目をコンテキストメニューへ直接追加　　　　　　　　　　　▼\]</ins></span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　文書の構造パネル<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ 構造ツリーに含まれるもののインデントを維持する<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　コンテキストメニューでの参照コマンド:　<ins>\ref</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　表の自動整形<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　特殊コマンド:　　　　　<ins>\hline,\cline,\intertext,\shortintertext,\toprule,\midrule,\bottomrule</ins><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　特殊コマンドの位置:　<span style="color:Black;background-color:#EEEEEE;"><ins>\[改行の後ろ　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</ins></span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ セルあたり1行<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　追加の検索パス<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　Bibファイル:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　画像ファイル:<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　Bi-Di（双方向表記）<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ LRM(left-to-right mark)文字を自動的に挿入<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ ビジュアルコラムカーソルモード（右から左へ読むテキストで矢印キーの方向にカーソルを移動させる）<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　ハック/回避策<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ アクセント記号タイプ時に回避策を無効化（Mac OS Xのみ）<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:black;background-color:yellow;"><strong>☐ 最適なディスプレイオプションの自動選択 ← チェックをはずす</strong></span><br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ 固定ピッチモードを無効化<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ 文字幅のキャッシュを無効化<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　☐ 描画された行のキャッシュを無効化<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:black;background-color:yellow;"><strong>描画モード:</strong></span> <span style="color:Black;background-color:#EEEEEE;">\[ Qt　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　▼\]</span><span style="color:black;background-color:yellow;"><strong> ← Qt に変更する</strong></span><br>

<br>

　☑ 高度なオプションの表示

<br>

***

### コマンドの補完 {#o8d22117}

#### 高度なオプションの表示が ON の場合 {#qff82cf9}

自動補完機能でキーワードを補完したあとでプレースホルダーに日本語入力して確定すると確定した日本語が二重に入力されます．<br>

\begin{do とタイプして Enter を入力すると自動補完機能で以下のような状態になります．<br>

```
\begin{document}
	content...
\end{document}
```

この状態でプレースホルダー (ここでは content...) に日本語入力して確定すると確定した日本語が二重に入力されます．<br>

```
\begin{document}
	日本語日本語
\end{document}
```

高度なオプションの表示を ON にしてコマンドの補完のプレースホルダーを使用を OFF にすることで回避できます．<br>

***

<span style="color:#3F43EF;background-color:#3F43EF;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>TeXstudioの設定</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:#3F43EF;background-color:#3F43EF;"></ins>\[ <span style="color:Black;"><strong>？</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_general.png" alt="一般" width="37" height="37" style="float:left">

一般　　　　　　　　　　　　　　コマンドの補完<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_commands.png" alt="コマンド" width="37" height="37" style="float:left">

コマンド　　　　　　　　　　　　☑ LaTeXコマンド入力時に自動的に補完を開始　　　　　　　　　　　　　　　好みのコマンドセット:　<span style="color:Black;background-color:#EEEEEE;"><ins>\[典型的　　　　▼\]</ins></span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_quickbuild.png" alt="ビルド" width="37" height="37" style="float:left">

ビルド　　　　　　　　　　　　　☑ 大文字と小文字を区別する　　　　　　　　　　　　　　　　　　　　　　　　　　☑ LaTeXコマンドの自動置換<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_shortcut.png" alt="キーボードショートカット" width="37" height="37" style="float:left">

キーボードショートカット　　　　　　☑ 最初の文字で区別　　　　　　　　　　　　　　　　　　　　　　　　　　　☑ ツールチップヘルプ<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_latexmenus.png" alt="メニュー" width="37" height="37" style="float:left">

メニュー　　　　　　　　　　　　☑ 共通する接頭語の自動補完<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_toolbars.png" alt="ツールバー" width="37" height="37" style="float:left">

ツールバー　　　　　　　　　　☑ 非文字キャラクタを押すと選択したテキストを補完　　　　　　　　　　　　タブバーの大きさ　<ins>100&#x25;　　\[<strong>⇕</strong>\]</ins><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_editor.png" alt="エディタ" width="37" height="37" style="float:left">

エディタ　　　　　　　　　　　　 <span style="color:black;background-color:yellow;"><strong>☐ プレースホルダーを使用 ← チェックをはずす</strong></span>　　　　　　　　　　　　　　☑ プレースホルダーを表示<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_advancededitor.png" alt="詳細なエディタ設定" width="37" height="37" style="float:left">

詳細なエディタ設定　　　　　次の補完ファイルを使用:<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_highlighting.png" alt="構文の強調表示" width="37" height="37" style="float:left">

構文の強調表示<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_highlighting.png" alt="カスタム強調表示" width="37" height="37" style="float:left">

カスタム強調表示<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_completion.png" alt="コマンドの補完" width="37" height="37" style="float:left">

<span style="color:Black;background-color:#DAEAFF;">コマンドの補完　　　　　　</span><br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_editor.png" alt="文法" width="37" height="37" style="float:left">

文法<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_preview.png" alt="プレビュー" width="37" height="37" style="float:left">

プレビュー<br>

<img src="http://hg.code.sf.net/p/texstudio/hg/raw-file/tip/images/config_svn.png" alt="SVN" width="37" height="37" style="float:left">

SVN<br>

<br>

<br>

<br>

<br>

<br>

　☑ 高度なオプションの表示

<br>

***

### 構文の強調表示 {#w15e140c}

- [http://tex.stackexchange.com/questions/108315/anyone-willing-to-share-his-her-custom-dark-theme-for-texstudio](http://tex.stackexchange.com/questions/108315/anyone-willing-to-share-his-her-custom-dark-theme-for-texstudio)
