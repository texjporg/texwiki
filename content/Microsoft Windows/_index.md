---
title: "Microsoft Windows"
url: "/Microsoft Windows/"
date: 2014-05-15T22:21:45Z
bookCollapseSection: true
pukiwiki: "Microsoft Windows"
---

# Microsoft Windows

## [Microsoft Windows](https://www.windows.com/) での TeX の利用 {#headline}

<!-- Windows に TeX をインストールして使えるようになるまでの大まかな流れとしては，[[TeX 入手法>TeX入手法]]で簡単に述べたとおり -->
<!--  -->
<!-- +TeX の処理系（“TeX ディストリビューション”）のインストールと設定 -->
<!-- +統合環境またはエディタ，PDF ビューアなどの周辺ツールのインストールと設定 -->
<!--  -->
<!-- が必要です． -->

***

***

## インストール {#install}

[TeX Live/Windows - TeX Wiki](</TeX Live/Windows/>)を参考にしてTeX Liveをインストールしてください．

## TeX を使い始める前に：拡張子の表示 {#extension}

<!-- 拡張子表示は書いておいた方がよいかも？ -->
<!-- // というわけなので，表に出すことにします． -->

TeX を使い始める前に（あるいはインストールする前に），拡張子や隠しファイル，隠しフォルダを表示するように変更しておくと便利かもしれません．
拡張子の表示は，LaTeX 処理の周辺での思いがけない勘違いを予防することに役立ちますし，そのほかにも .jpg や .png といった画像ファイルの違いを普段から意識する助けにもなります．
詳細は[拡張子の表示（基礎知識）](</Microsoft Windows/基礎知識/#extension>)を参照してください．

## TeX を使い始める前に：環境変数 Path の確認 {#o4ae5c5c}

TeX を使うには環境変数 Path の設定が必要です．

環境変数 Path は以下のように確認できます．

> スタート &gt; 設定 &gt;  「設定の検索」と書かれた入力欄に「環境変数」と入力して検索 &gt; 「環境変数を編集」を選択

<!-- -Windows PowerShell の場合 -->
<!--  -->
<!-- $Env:Path -->
<!--  -->
<!-- あるいは -->
<!--  -->
<!-- echo %Env:Path -->
<!--  -->
<!-- -コマンド プロンプトの場合 -->
<!--  -->
<!-- path -->
<!--  -->
<!-- あるいは -->
<!--  -->
<!-- echo %PATH% -->

システム環境変数 Path に以下のパスが含まれているか，いま一度確認してください． <!-- これらが %PATH% にないことにより， --> <!-- ptex2pdf.lua が動かない（実際には os.execute()）など致命的自体に陥る． -->

> %SystemRoot%\system32<br>
> %SystemRoot%<br>

なお，%SystemRoot%（環境変数 SystemRoot）は，通常 C:\WINDOWS です．

## TeX のインストールが成功したかどうかテストする {#test}

インストールされたかのチェックを兼ねて，基本的な使い方を試してみましょう．

LaTeX ソース編集には統合環境やテキストエディタが必要です．
すでにお気に入りのエディタがある場合は，LaTeX 用のマクロがあるか探してみるとよいでしょう．
特にこだわりのない方は，TeX Live とともにインストールされる [TeXworks](/TeXworks/) がお勧めです．
そのほかのエディタなどについては，この後の[統合環境やエディタのインストール](</Microsoft Windows/#editor>)でも紹介しています．

以下では，TeXworks をもちいてみます．
TeXworks は
スタートメニューの「TeX Live 2024」→「TeXworks editor」から
起動することができます．

次の四行を入力してみます．

```
\documentclass{article}
\begin{document}
Hello World!
\end{document}
```

メニューから「ファイル」→「保存」と選び，適当な場所に保存します．（ツールバーの「保存」ボタンを押すか Ctrl + S を押しても保存されます．）名前は半角英数からなるものならば何でもよいです．拡張子は.texとしてください．
保存後，左上の緑の三角の入ったボタンを押してみてください．「Hello World!」と表示されれば成功です．

日本語も試してみましょう．今度は次のようにします．

```
\documentclass{jlreq}
\begin{document}
こんにちは，\LaTeX
\end{document}
```

同様にしてみて「こんにちは，LaTeX」と表示されれば成功です．（LaTeX は大文字 A が上がり，大文字 E が下がった「本来の方法」で表示されているはずです．）
以上で LaTeX のインストールは終了です．
また，TeXworks による編集も行えるようになりました．
後は [LaTeX入門](</LaTeX入門/>) などを参照しつつ文書の作成を行ってみてください．

### エラー時 {#error}

エラーが起こったからといって，「インストールに失敗した！」と判断するのは早すぎます．打ち込んだものにミスがあるかもしれません．

#### 「プログラム"\*\*\*"が見付かりません」というエラー {#error01}

残念ながらインストールに失敗しているでしょう．もう一度インストールを試してみてください．または，インストール後手動で設定した場合は，その際にミスをしているかもしれません．もう一度確認をしてみてください．

#### LaTeX のエラー {#error02}

コンパイルでエラーが発生すると，TeXworks 下段の「ログの表示」にエラーに関する情報が表示されます．たとえば

```
\ddocumentclass{jlreq}
```

としてしまうと（dが一つ多い）次のように表示されます．

```
! Undefined control sequence.
l.1 \ddocumentclass
                   {jlreq}
```

「x」または「e」を入力することで，ファイルの編集に戻ることができます．このようにエラーのある箇所が表示されるので，そこを中心に確認してみてください．エラー内容に関しては[LaTeX のエラーメッセージ](</LaTeX のエラーメッセージ/>)も参考にしてください．

## 統合環境やエディタのインストール {#editor}

LaTeX での文書作成を支援するための統合環境・エディタが各種開発されています．上記 TeXworks もそのような統合環境の一つです．
これらは，LaTeX のソース中に書かれた特別な命令を色付けしてくれたり，LaTeX によるタイプセットをボタンやショートカットキー一つで実行してくれたりと，便利なものです．
初心者の方はまずは LaTeX 用の統合環境を使用して LaTeX に慣れるのが良いでしょう．

エディタ・マクロ・プラグインの種類によって得手不得手があったり不具合が発生したりする場合があります．
問題が発生した場合は別のエディタを使用してください．
人によってエディタの好みは様々なので自分にあったエディタを見つけてください．
TeXworks がよいならばそれでもよいですし，下記のを色々と試してみるのも楽しいかもしれません．

このほかにも

- [TeX Wiki 内の「TeX 用エディタ」紹介ページ](</TeX用エディタ/>)
- [Wikipedia:Comparison_of_TeX_editors](https://www.wikipedia.org/wiki/Comparison_of_TeX_editors)
- [LaTeX Editors/IDEs](http://tex.stackexchange.com/questions/339/latex-editors-ides)

には，Microsoft Windows で使用可能な LaTeX 用の統合環境・エディタが紹介されています．

### フリーソフトウェア（オープンソースソフトウェア） {#editor-free}

<!-- Windows でエディタを選びたいときに，別に -->
<!-- 「Windows, macOS, Linux で動くか，Windows でしか動かないか」 -->
<!-- なんて不要だと思うので，統合環境か汎用エディタかで分類しなおします． -->

<!-- ここに並べる統合環境は -->
<!-- 1. TeX ディストリビューションにバンドルされているもの (TeXworks) -->
<!-- 2. そうではないが，広く使われていて TeX Wiki にも情報が充実しているもの -->
<!-- の順のつもり．従来の「アルファベット順」は無意味なので変更． -->

- 統合環境（TeX, LaTeX に特化した機能を備えています）
    - <strong>[TeXworks](/TeXworks/)</strong> ← TeX Live (windows) に標準で含まれています．
    - <strong>[TeXstudio](/TeXstudio/)</strong>
    - <strong>[LyX](/LyX/)</strong>
    - [Texmaker](/Texmaker/)
    - [TeXnicCenter](/TeXnicCenter/)

- 汎用エディタ（TeX, LaTeX 用のパッケージが用意されているものがあります）
    - [Visual Studio Code](</Visual Studio Code/>)
        - [LaTeX](</Visual Studio Code/LaTeX/>)
    - [Emacs](/Emacs/)
        - [Org mode](</Emacs/Org mode/>)
        - [TeX mode](</Emacs/TeX mode/>)
        - [AUCTeX](/AUCTeX/)
        - [YaTeX](/YaTeX/)（野鳥）
    - [Vim](/Vim/)
        - [VimTeX](/VimTeX/)
    - [Eclipse](/Eclipse/)
        - [TeXlipse](/TeXlipse/)
    - [gedit](/gedit/)
    - [Geany](/Geany/)
    - [Notepad++](/Notepad++/)
        - [NppExec](/NppExec/)
        - [jN](/jN/)
    - [サクラエディタ](</サクラエディタ/>)
        - [Happy](/Happy/)

## PDF ファイルビューア {#pdfviewer}

長らく LaTeX ファイルの編集は，dvi によるプレビューがもちいられてきました．
ただ，最近は様々な理由から PDF によるプレビューが推奨されています（[古い情報](</古い情報/>)も参考に）．
TeXworks, TeXstudio などの統合環境には PDF 用のビューアが組み込まれています．
単独の LaTeX 用 PDF プレビューアとしては

- <strong>[SumatraPDF](/SumatraPDF/)</strong>：軽量な LaTeX 用の PDF ビューアとして最適で，特にお勧めします．
- [Evince](/Evince/)：GNOME 標準の PDF ビューア
- [Okular](/Okular/)：KDE 標準の PDF ビューア
- [qpdfview](/qpdfview/)：タブ切り替え型の PDF ビューア
- [Sioyek](/Sioyek/)：教科書や論文を読むことに特化した PDF ビューア
- [MuPDF](/MuPDF/)：軽量な PDF ビューア．SumatraPDF などで使われています．
- [Poppler](/Poppler/)：PDF のレンダリングライブラリ．TeXworks, TeXstudio などで使われています．

などがあります．

## 周辺ツールの利用 {#tools}

### 文献管理ツール {#bibtex}

オープンソースの文献管理ツールとして，以下を挙げておきます。

- [Zotero](/Zotero/)
- [JabRef](/JabRef/)

このほかにも

- [TeX Wiki 内の「BibTeX 関連ツール」紹介ページ](</BibTeX関連ツール/>)

には，Microsoft Windows で使用可能な文献管理ツールが紹介されています。

## その他の選択肢 {#others}

TeX Live 以外にも Windows で利用可能な TeX ディストリビューションが存在します．

- Cygwin での利用：Windows 上に UNIX のような環境を提供する Cygwin 用にも TeX Live が提供されています．[Cygwin](/Cygwin/) をご覧ください．
- [MiKTeX](/MiKTeX/)：主に国外で使われている（と思う）TeX ディストリビューションです．[MiKTeX](/MiKTeX/) をご覧ください．

## 入出力関連の機能 {#t84cfc3e}

### 漢字入出力対応状況 {#effb8e13}

コンソールやファイル名等での漢字（日本語）の入出力の対応状況をまとめました（2023/7/16 現在）．
Windowsではコンソールやファイル名でのワイド文字・Unicodeの扱いがLinux系と異なるので，それに対応するため「command_line_encoding」という kpathsearch の変数が導入されました．当初W32TeX上のupTeX系のみでしたが，現在はWindows版TeX Live上でXeTeX系, pdfTeX系にも導入されています．

<table>
<thead>
<tr><th rowspan="2"> コマンド </th><th rowspan="2"> command_line_encoding </th><th rowspan="2"> コマンドライン<br>入力 </th><th colspan="2"> コンソール入力 </th><th colspan="2"> コンソール出力 </th><th rowspan="2"> 入出力<br>ファイル名 </th><th rowspan="2"> special <br>ファイル名 </th></tr>
<tr><th> キーボード   </th><th> パイプ    </th><th> スクリーン  </th><th> パイプ      </th></tr>
</thead>
<tbody>
<tr><td> p(la)tex.exe -kanji=sjis </td><td> (無視される)      </td><td> CP932          </td><td> CP932  </td><td> Shift_JIS </td><td>CP932 </td><td> Shift_JIS </td><td> CP932 </td><td> Shift_JIS </td></tr>
<tr><td> p(la)tex.exe<br>p(la)tex.exe -kanji=utf8 </td><td> (無視される)  </td><td> CP932          </td><td> CP932  </td><td> UTF-8 </td><td> CP932(UTF-8) </td><td> UTF-8 </td><td> CP932 </td><td> Shift_JIS </td></tr>
<tr><td> up(la)tex.exe </td><td> utf-8            </td><td> Unicode         </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td></tr>
<tr><td> xe(la)tex.exe </td><td> utf-8            </td><td> Unicode         </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td></tr>
<tr><td rowspan="2"> dvipdfmx.exe<br>pdf(la)tex.exe  </td><td> none          </td><td> CP932          </td><td> --- </td><td> --- </td><td> CP932 </td><td> Shift_JIS </td><td> CP932 </td><td> Shift_JIS </td></tr>
<tr><td> utf-8         </td><td> Unicode        </td><td> --- </td><td> --- </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td></tr>
<tr><td> xdvipdfmx.exe </td><td> utf-8         </td><td> Unicode        </td><td> --- </td><td> --- </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td></tr>
<tr><td> xbb.exe<br>extractbb.exe </td><td> utf-8         </td><td> Unicode        </td><td> --- </td><td> --- </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> --- </td></tr>
<tr><td rowspan="2"> dvips.exe  </td><td> none          </td><td> CP932          </td><td> --- </td><td> --- </td><td> CP932 </td><td> Shift_JIS </td><td> CP932 </td><td> Shift_JIS </td></tr>
<tr><td> utf-8         </td><td> Unicode        </td><td> --- </td><td> --- </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td></tr>
<tr><td> dvi2tty.exe  </td><td> none          </td><td> CP932          </td><td> --- </td><td> --- </td><td> CP932 </td><td> Shift_JIS </td><td> CP932 </td><td> --- </td></tr>
<tr><td> dvi2tty.exe -Eu </td><td> utf-8         </td><td> Unicode        </td><td> --- </td><td> --- </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> --- </td></tr>
<tr><td> upmendex.exe </td><td> (無視される)        </td><td> Unicode         </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> --- </td></tr>
<tr><td> dvibook.exe<br>dviconcat.exe<br>dviselect.exe<br>dvitodvi.exe<br>dvidvi.exe </td><td> utf-8         </td><td> Unicode        </td><td> --- </td><td> --- </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> --- </td></tr>
<tr><td rowspan="2"> bibtex8.exe<br>bibtexu.exe  </td><td> none          </td><td> CP932          </td><td> --- </td><td> --- </td><td> CP932 </td><td> Shift_JIS </td><td> CP932 </td><td> --- </td></tr>
<tr><td> utf-8         </td><td> Unicode        </td><td> --- </td><td> --- </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> --- </td></tr>
<tr><td rowspan="2"> kpsewhich.exe  </td><td rowspan="2"> (-progname= <br>指定先に依存する) </td><td> CP932          </td><td> CP932 </td><td> Shift_JIS </td><td> CP932 </td><td> Shift_JIS </td><td> CP932 </td><td> Shift_JIS </td></tr>
<tr><td> Unicode        </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td></tr>
<tr><td> gswin32c.exe<br>gswin64c.exe  </td><td> ---        </td><td> Unicode        </td><td> --- </td><td> --- </td><td> ??? </td><td> ??? </td><td> Unicode </td><td> --- </td></tr>
<tr><td> GSview  </td><td> ---        </td><td> ???        </td><td> --- </td><td> --- </td><td> ??? </td><td> ??? </td><td> CP932 </td><td> --- </td></tr>
</tbody>
</table>

この表は，日本語版 Windows におけるものです。

「command_line_encoding」とは，texmf.cnf のオプション設定です．
「コンソール入力」は標準入力 (STDIN) からの入力を指し，「コンソール出力」は標準出力 (STDOUT) や標準エラー出力 (STDERR) への出力を指します．
「special ファイル名」とは，挿入する画像のファイル名など，special 命令によって dvi ファイルに書き込まれるファイル名の文字コードを指します．

「CP932」「Unicode」は文字集合の意味で，「Shift_JIS」「UTF-8」は文字エンコーディングの意味で用いています．
スクリーンが「Unicode」「CP932(UTF-8)」のものは，そのままでも文字化けせずに表示させることができます．
以下はその例です．

```
PS C:\work> platex -kanji=utf8 sourcename.tex
```

```
PS C:\work> uplatex sourcename.tex
```

dvi2tty の場合，コードページを UTF-8 に設定することで，文字化けせずに表示させることができます．
以下はその例です．

```
PS C:\work> chcp 65001
PS C:\work> dvi2tty -Eu sourcename.dvi
```

あるいは、ページャーを使用しない場合はそのまま，文字化けせずに表示させることができます．
以下はその例です．

```
PS C:\work> dvi2tty -Eu -q sourcename.dvi
```

最新の Windows版 TeX Live の場合は，texmf.cnf に

```
command_line_encoding = utf-8
```

と設定するとよいでしょう．

現在の TeX Live における
デフォルトは

```
command_line_encoding = utf-8
```

となっています。

最新の TeX Live では dvipdfmx, dvips は command_line_encoding の値によらず，
OS のデフォルト code page (日本語 Windows の場合 CP932) で DVI に名前が書かれて
いるファイルを見つけることができます。

なお，マクロ，パッケージやフォントなどのファイル名は ASCII の範囲にとどめ，漢字(日本語)や他言語の Unicode 文字を使用しないことをお勧めします．
文字エンコーディングの齟齬により，ソフトウェアによっては kpathsea 経由で探し出すことに失敗するケースがあるためです．
また，p(la)tex において special の種類によっては 0x5c を含むファイル名の場合，失敗することがあります．
この場合も ASCII の範囲で使用してください．( → [KANJI file name in special in dvi　(uptex)](https://okumuralab.org/tex/mod/forum/discuss.php?d=1210))
