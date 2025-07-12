---
title: "W32TeX"
url: "/W32TeX/"
date: 2014-02-08T20:14:45Z
pukiwiki: "W32TeX"
---

# W32TeX

## [W32TeX](https://w32tex.org/w32tex-ja.html)（配布終了）→ [TeX Live](</TeX Live/>) に移行してください {#ba560630}

<strong>配布が終了しました．以下は古い情報です．</strong>

W32TeX はかつて角藤 亮さんが [Microsoft Windows](</Microsoft Windows/>)[^1] 向けに作成されていた TeX のディストリビューションでしたが現在は配布が終了しています．[TeX Live](</TeX Live/>) に移行してください．

- [https://w32tex.org/](https://w32tex.org/)
    - [https://w32tex.org/w32tex.html](https://w32tex.org/w32tex.html)
    - [https://w32tex.org/w32tex-ja.html](https://w32tex.org/w32tex-ja.html)
    - [https://w32tex.org/w32tex-zh.html](https://w32tex.org/w32tex-zh.html)

***

***

## インストール {#ib4afbe8}

インストール方法は，阿部紀行さんによって開発された「TeX インストーラ 3」を使う方法と，ターミナルで「簡易インストーラ」を動かす方法があります．
以下で，それぞれの方法を説明します．
現在 TeX インストーラ 3 は配布が終了していますので W32TeX をインストールする場合は簡易インストーラによるインストールを参照してください．

### TeX インストーラ 3 によるインストール {#wd8675d9}

W32TeX 及び関連するソフトウェアを自動でインストールする [TeXインストーラ3（配布終了）](https://web.archive.org/web/20240419153453/https://www.ms.u-tokyo.ac.jp/~abenori/soft/abtexinst.html) ([abtexinst_0_91.zip（WARP）](https://warp.da.ndl.go.jp/info:ndljp/pid/11637957/www.ms.u-tokyo.ac.jp/~abenori/soft/abtexinst.html)) を使うと，楽に Windows 用 TeX 環境を整えることができます．
これは W32TeX 本体と周辺ソフトウェア（[dviout](/dviout/)，[Ghostscript](/Ghostscript/)，[TeXworks](/TeXworks/)）を自動でインストールし，設定まで済ませてくれます．
基本的にはインストーラを取得後，展開し，abtexinst.exe をダブルクリックして指示に従ってください．
環境によっては .exe が表示されていないかもしれませんが，以下のようなアイコンで表示されているものを選んでください．

<a href="/attach/W32TeX/exeicon.png"><img src="/attach/W32TeX/exeicon.png" alt=""></a>

[拡張子の表示](</Microsoft Windows/#extension>)を設定しておくと，拡張子 .exe が表示されてわかりやすくなるでしょう．

#### インストールの事例 {#sfa1e1a0}

以下のサイトには，スクリーンショット付の詳細な解説があります．

- [TeXのインストール方法　Windows 64bit　インストーラ3](https://www.mathtext.info/blog/2018/04/20/tex%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E6%96%B9%E6%B3%95/)
- [簡単LaTeXインストールWindows編（2016年4月版）](https://did2memo.net/2016/04/24/easy-latex-install-windows-10-2016-04/)
- [Windows への TeX インストール（簡単 W32TeX・前編）](https://acetaminophen.hatenablog.com/entry/2015/05/16/142557)，[（簡単 W32TeX・後編）](https://acetaminophen.hatenablog.com/entry/2015/05/16/212810)，[（W32TeX・発展編）](https://acetaminophen.hatenablog.com/entry/2015/05/17/001048)

#### トラブルシューティング {#t3a0d8db}

まずは添付されている readme.txt（やはり環境によっては .txt が表示されません）を参照してください．
<strong>URL の変更は効果的なことが多い</strong>です．

また，TeX インストーラ 3 を実行すると同じフォルダに abtexinst_log.txt（やはり（略））というファイルが作成されます．
エラーに関する情報などがありますので，参照してください．
TeX Forum 等で相談をする時もこのファイルがあると情報がスムーズに伝わることがあります．

### 簡易インストーラによるインストール {#e5885a04}

W32TeX 自身が簡易インストーラを提供しています．
上述の TeX インストーラ 3 に比べて手順がやや複雑なので，基本的には TeX インストーラ 3 をお勧めしますが．
こちらをもちいる場合には，次の手順を踏みます（TeX インストーラ 3 もこれらを自動で行っているだけです）．

1. 各種ファイルをダウンロードする
1. 簡易インストーラをもちいてファイルを展開する
1. 環境変数 Path を設定する

なお，簡易インストーラが行うことは tar.xz により圧縮されているファイルを展開するだけです．
従って，手持ちの展開ソフトが .tar.xz 形式に対応していれば，そちらで展開して，適当な場所に展開することでもインストールが完了します（環境変数 Path の設定は必要です）．

#### ダウンロードサイト {#y2ec963e}

W32TeX は，[ミラーサイト](/W32TeX/#mirror)からダウンロード可能です．

#### 注意点 {#s760b9ef}

ダウンロードツールをお使いの場合には，サーバーに迷惑をかけないようにするために同時接続数を1にしてください．

<!-- ダウンロードしたら，念のため次のことをご確認ください． -->
<!--  -->
<!-- -ファイルの拡張子が正しいか？ -->
<!-- - -Microsoft Edge や Internet Explorer などの一部のブラウザーやダウンローダーは勝手にファイルの拡張子を変えてしまうことがあります．例えば，Microsoft Edge あるいは Internet Explorer 11 を使って %% http://eplang.jp/w32tex/archive/latest/current/ %% から *.tar.xz ファイルを保存した場合に， -->
<!-- > -->
<!-- &#x2a;.tar.xz → *.tar.tar -->
<!-- < -->
<!-- のようにファイルの拡張子が変わります． -->
<!-- 2022-11-17 eplang.jpのリンク切れを確認 -->

#### ダウンロードファイル {#i853d3d5}

W32TeX には，フルインストール / 標準インストール / 最小インストール の三つの構成があります．
<strong>HDD の容量に余裕があればフルインストールを選んでおくのが無難</strong>でしょう．

フルインストールで 2.8 GiB 程度の容量が必要です．

構成によりダウンロードするファイルが変わります．
[ダウンロードファイルの一覧](/W32TeX/#filelist)を参考に，適当なフォルダにダウンロードしてください．
ここでは C:\w32tex\download にダウンロードしたとしておきます．日本語や空白の入っているフォルダはトラブルを引き起こす可能性がありますので，避けてください．

ファイルによっては 64-bit バイナリが存在します．
ただし，対応する 32-bit ファイルもダウンロードが必要です．

#### 簡易インストーラの実行 {#wa3b57f2}

[texinstwin.zip](https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/texinstwin.zip) を展開してください．
展開した場所がインストールフォルダとなります．
以下では，C:\w32tex 内に展開されたとします．

ターミナルを起動し，C:\w32tex に移動後，texinstwin.exe を実行してください．C:\w32tex\download はダウンロードファイルが保存されている場所です．

```
PS C:\Users> cd C:\w32tex
PS C:\w32tex> .\texinstwin C:\w32tex\download
```

ファイルが展開されたら終了です．
次のようなメッセージが表示されます．

```
Add
C:\w32tex\bin
or
C:\w32tex\bin64;C:\w32tex\bin
in the case of 64bit OS
to user's PATH in the control panel.
```

以下のサイトには，texinstwin を使用したインストールの解説があります．

- [W32TeXの導入を自動化した](https://qiita.com/EAGLE_usagi/items/9ead6a9244075828b55a)

#### 環境変数 Path の設定 {#g0475486}

W32TeX は環境変数 Path を設定する必要があります．
上で表示されたメッセージに従い，環境変数 Path に C:\w32tex\bin を追加します．64-bit をもちいる場合は，更に C:\w32tex\bin64 を C:\w32tex\bin32 の<strong>前に</strong>追加します．
方法の詳細は[環境変数の設定（基礎知識）](</Microsoft Windows/基礎知識/#environment-variables>)を参照してください．

自分だけが W32TeX を使いたい場合は，ユーザー環境変数 Path を編集します．環境変数 Path がなければ新規作成してください．
自分だけではなくユーザー全員に W32TeX を使わせたい場合は，管理者権限でシステム環境変数 Path に追加します．

- 64-bit バイナリを使用する場合は Path の値の最後に “;C:\w32tex\bin64;C:\w32tex\bin” を追加し，\[OK\] を押します．
- 32-bit バイナリを使用する場合は Path の値の最後に “;C:\w32tex\bin” を追加し，\[OK\] を押します．

追加したら，ターミナルあるいは TeX 関連のソフトウェアを起動している場合は，いったん閉じてもう一度開きます．
こうすることで，環境変数の変更が反映されます．

#### 以前に TeX をインストールしたことがある場合 {#z02ac16d}

もしユーザー環境変数またはシステム環境変数に “TEXMF”，“TEXMFCNF”，“TEXMFMAIN” といった変数が登録されているなら，削除してください．
次に，ユーザー環境変数のところを見てください．
Path という欄があればそれをクリックして［編集］を押します．
変数値の中に古い TeX へのパス（“;C:\usr\local\bin”，“;C:\tex\bin”，“;C:\ptex\bin” など）があったら削除します．

#### Ghostscript {#zd901fa9}

[Ghostscript](/Ghostscript/) は [PostScript](/PostScript/)/[PDF](/PDF/) のインタープリタ（ソフトウェア RIP）です．
TeX で特に画像を使う上で（裏で）もちいられることが多いので，インストールをしておくことをお勧めします．
なお，TeX インストーラ 3 でインストールした場合は，同時にインストールがされますので，ここでのインストールは不要です．

インストールの詳細に関しては [Ghostscript/Windows](/Ghostscript/Windows/) を参照してください．

#### dviout {#hd6558c1}

[dviout](/dviout/) は dvi ファイルのプレビューアです．
近年では PDF ファイルによるプレビューの方がトラブルが少ないとされており，そちらを使う場合は特に必要ありません．
逆に従来通り dvi ファイルをプレビューしたい場合は必須となります．
インストールと設定は [dviout](/dviout/) をご覧ください．
なお，TeX インストーラ 3 では自動でインストールされます．

## 追加ソフトウェアのインストール {#qe462cfa}

W32TeX を利用するうえで，追加インストールしておくと便利なソフトウェアを紹介します．

### Perl インタプリタ {#c6d961fb}

W32TeX に含まれるいくつかのファイルは [Perl](/Perl/) に依存しています（[latexmk](/Latexmk/) や [pdfcrop](/pdfcrop/) など）．
余裕があればインストールをしておくとよいでしょう（TeX インストーラ 3 を利用した場合も，Perl は自動インストールの対象ではありません）．
[Strawberry Perl の公式サイト](https://strawberryperl.com/) からインストーラをダウンロードし，指示に従えばインストールが完了します．

### SumatraPDF {#g6688c53}

[SumatraPDF](/SumatraPDF/) は [SyncTeX](/SyncTeX/) に対応した PDF/PostScript ビューアです．
[Adobe Acrobat Reader](</Adobe Acrobat Reader/>) のように開いている PDF ファイルをロックせず，ファイルの更新を自動で検知してプレビューを更新する優れもので，軽量な LaTeX 用 PDF ビューアとして最適です．
TeXworks などの PDF ビューア付きの統合環境を利用する場合は不要かもしれませんが，それ以外の場合はインストールするとよいでしょう（TeX インストーラ 3 を利用した場合も，SumatraPDF は自動インストールの対象ではありません）．

## アップデート {#o482d037}

W32TeX のアップデートはインストールと同様の手順で可能です．

［古い W32TeX からアップデートする場合の参考］
2013 年 4 月 7 日以前の W32TeX からアップデートする場合は，share/texmf というディレクトリが share/texmf-dist に変更されたことに注意してください（一度 share/texmf をディレクトリごと削除してからアップデートするとよいでしょう）．[古い情報](</古い情報/#c4916968>)も参照してください．

### TeX インストーラ 3 によるアップデート {#i798ef70}

abtexinst.exe をもう一度起動します（インストール時に設定を変更した場合は同じ設定にします）．
インストール時と同様に指示に従うことで，TeX インストーラ 3 はファイルの更新を検知し，アップデートを自動で行います．

### 直接アップデート {#r88b7452}

アップデートされたファイルをダウンロードし，texinstwin.exe をもちいてインストールと同様の操作を行うことで，古いファイルが上書きされてアップデートされます．
ただし，古いファイルを手動で消さなければならないことがありますので，[ChangeLog](https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/ChangeLog) を参照してください．

## 注意点 {#maff36c0}

### 文字コードの自動判別 {#z6946085}

<strong>TeX Liveにも導入されているため [https://texwiki.texjp.org/?ptexenc#x100a023](https://texwiki.texjp.org/?ptexenc#x100a023) に転記しました．以下は古い情報です．</strong>

W32TeX はデフォルトの設定では (e-)(u)pTeX を使用するとファイルの文字コードを自動判別します．
殆どの場合正しく推定がされますが，誤判定することもあります．（[例](/upTeX,upLaTeX/#zb472e1c)，文字コードの完全な自動判別は原理的に不可能です．）

自動判定を無効にし，文字コードを指定するには次のようにします．

```
platex --no-guess-input-enc --kanji=utf8 sample.tex
```

常に自動判定を無効にするには，kpathsea 変数である guess_input_kanji_encoding を 0 に設定します．（変更方法は，[texmf.cnf ファイル](</texmf.cnf ファイル/>)を参照．）

### 漢字入出力対応状況 {#qc9f2e7d}

<strong>TeX Liveにも導入されているため [https://texwiki.texjp.org/?Microsoft%20Windows#effb8e13](https://texwiki.texjp.org/?Microsoft%20Windows#effb8e13) に転記しました．以下は古い情報です．</strong>

コンソールやファイル名等での漢字（日本語）の入出力の対応状況をまとめました（2020/12/11 現在）．

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

以前存在したオプション -sjis-terminal は廃止されました(2018/6/15)．

最新の W32TeX の場合、または「2019年05月以前の W32TeX で up(la)tex を主に使用される方」は，texmf.cnf に

```
command_line_encoding = utf-8
```

2019年05月以前の W32TeX で p(la)tex を主に使用される方は，texmf.cnf に

```
command_line_encoding = utf-8
command_line_encoding.dvipdfmx = none
command_line_encoding.dvips = none
```

と設定するとよいでしょう．

現在 (2019/05) の W32TeX における
デフォルトは

```
command_line_encoding = utf-8
```

となっています。

最新の W32TeX では dvipdfmx, dvips は command_line_encoding の値によらず，
OS のデフォルト code page (日本語 Windows の場合 CP932) で DVI に名前が書かれて
いるファイルを見つけることができます。

なお，マクロ，パッケージやフォントなどのファイル名は ASCII の範囲にとどめ，漢字(日本語)や他言語の Unicode 文字を使用しないことをお勧めします．
文字エンコーディングの齟齬により，ソフトウェアによっては kpathsea 経由で探し出すことに失敗するケースがあるためです．
また，p(la)tex において special の種類によっては 0x5c を含むファイル名の場合，失敗することがあります．
この場合も ASCII の範囲で使用してください．( → [KANJI file name in special in dvi　(uptex)](https://okumuralab.org/tex/mod/forum/discuss.php?d=1210))

## 関連リンク {#b5892c8c}

- [forumSearch:W32TeX](https://okumuralab.org/tex/mod/forum/search.php?id=2&search=W32TeX)
- [USBメモリ活用講座【実践編・W32TeXポータブル化】](https://www.nagaoka-ct.ac.jp/ec/labo/visu/usb/tex/w32tex.shtml)
- [「W32TeX に TeX Live を移植するプロジェクト」(「W32TeX_p」)](https://rivernizi.shinobiashi.com/PC/TeX/way_W32TeX_install.html)
- [https://ctan.org/pkg/w32tex](https://ctan.org/pkg/w32tex)
- [CTAN:systems/win32/w32tex](https://mirror.ctan.org/systems/win32/w32tex)
- [W32TeX - Wikipedia](https://ja.wikipedia.org/wiki/W32TeX)
- [W32TeXとは コンピュータの人気・最新記事を集めました - はてな](https://d.hatena.ne.jp/keyword/W32TeX)

## W32TeX の詳細情報 {#icae16ae}

### W32TeX ミラーサイト {#mirror}

<strong>HTTPS</strong>

- [JAIST 北陸先端科学技術大学院大学](https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/)
- [山形大学](https://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/win32/w32tex/)
- [理化学研究所](https://ftp.riken.jp/CTAN/systems/win32/w32tex/)
- [jp.mirrors.cicku.me](https://jp.mirrors.cicku.me/ctan/systems/win32/w32tex/)

<strong>HTTP</strong>

- [NAIST 奈良先端科学技術大学院大学](http://ftp.naist.jp/pub/CTAN/systems/win32/w32tex/)
- [Ring Server](http://www.ring.gr.jp/pub/text/TeX/ptex-win32/current/)
- [Ring Server (近いサーバー優先)](http://www.dnsbalance.ring.gr.jp/pub/text/TeX/ptex-win32/current/)
- [Ring Server (core.ring.gr.jp)](http://core.ring.gr.jp/pub/text/TeX/ptex-win32/current/)

<!-- **過去のバージョンの W32TeX [#mirror-old] -->

<!-- 2025-07-12 リンク切れを確認 -->

<!-- 何らかの理由で過去のバージョンが欲しい場合は，KTUG に -->
<!-- W32TeX [2013/12/24] と W32TeX [2008/03/18] が保存されています。 -->
<!-- （参照：[[古い TeX をインストールする (W32TeX, TeX Live):https://acetaminophen.hatenablog.com/entry/2016/05/18/221948]]） -->

<!-- -[[W32TeX [2013/12/24]:http://ftp.ktug.org/obsolete/TeX/ptex-win32/current/]] -->
<!-- -[[W32TeX [2008/03/18]:http://ftp.ktug.org/obsolete/w32tex/win32/current/]] -->

<!-- 2022-11-17 eplang.jpのリンク切れを確認 -->

<!-- %%何らかの理由で過去のバージョンが欲しい場合は，[[兼宗さん:https://x.com/kanemune]]が以下で提供してくださっています：%% -->
<!-- %%-[[eplang.jp/w32tex/archive/:http://eplang.jp/w32tex/archive/]]%% -->

### 過去の W32TeX の仕様変更 {#changelog-old}

- [https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/ChangeLog](https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/ChangeLog)
- [https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/ChangeLog.4](https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/ChangeLog.4)
- [https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/ChangeLog.3](https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/ChangeLog.3)
- [https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/ChangeLog.2](https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/ChangeLog.2)
- [https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/ChangeLog.1](https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/ChangeLog.1)
- [https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/ChangeLog.0](https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/ChangeLog.0)

を参照。

- \[2013/04/08\]
    - 4月8日付の W32TeX から share/texmf なるディレクトリ名が share/texmf-dist に変更されています。これは，TeX Live 2013 で texmf と texmf-dist が texmf-dist に統一されたことにあわせたものです。
- \[2012/08/21\]
    - 2012/08/20 までの dvipdfmx, xdvipdfmx は SEAC bug が存在するので 2012/08/21 以降の W32TeX にしてください。
- \[2011/12/24\]
    - upovf2ovp.exe と upovp2ovf.exe は無くなりました。更新された wovf2ovp.exe と wovp2ovf.exe が upTeX もサポートするようになっています。
- \[2011/11/23\]
    - updvi2tty.exe は無くなりました。更新された dvi2tty.exe が upTeX の dvi もサポートするようになっています。
- \[2011/11/06\]
    - updvipdfmx が無くなりました。(e-)upTeX でも dvipdfmx を使うようにしてください。hyperref でしおりを作成する場合は

        ```
        \AtBeginShipoutFirst{\special{pdf:tounicode UTF8-UTF16}}
        ```

        が必要になりました。PXjahyper パッケージ を使用しても OK です。詳細は[しおり（bookmark）つきのpdf文書作成](/hyperref/#fe7cad10)を参照してください。

- \[2011/10/22\]
    - euplatex が無くなりました。uplatex は uptex ではなくて euptex の上で動くようになりました。
- \[2011/05/25\]
    - eplatex が無くなりました。platex は ptex ではなくて eptex の上で動くようになりました。
- \[2011/03/21\]
    - ptex 関係において [ptexenc](https://tutimura.ath.cx/ptexlive/?ptexenc%2F%CA%B8%BB%FA%A5%B3%A1%BC%A5%C9%C8%BD%C4%EA) を用いて自動判別するようになりました。デフォルトで自動判別します。自動判別せずに手動で直接文字コードを指定する場合は

        ```
        platex -no-guess-input-enc -kanji=utf8 hoge.tex
        euplatex -no-guess-input-enc -kanji=utf8 hoge.tex
        ```

        のように指定します。

- \[2011/03/06\]
    - ptex 関係において nkf を用いて自動判別する機能が追加されました。デフォルトで自動判別します。
- \[2010/08/14\]
    - pmpost.exe は pmetapost.exe に変更されました。 → 2011/12/23 に pmetapost.exe は元の名前 pmpost.exe に戻されました。
    - upmpost.exe は upmetapost.exe に変更されました。 → 2011/12/23 に upmetapost.exe は元の名前 upmpost.exe に戻されました。
- \[2010/05/06\]
    - dvipsk.exe は dvips.exe に統合されました。
- \[2009/07/20\]
    - jbibtex.exe は pbibtex.exe に変更されました。([qa:53349](https://okumuralab.org/~okumura/texfaq/qa/53349.html))（2010/04/29 以降のものを使用してください → pbibtexの異常終了 ([forum:442](https://okumuralab.org/tex/mod/forum/discuss.php?d=442))）
    - upjbibtex.exe は upbibtex.exe に変更されました。
    - jmpost.exe は pmpost.exe に変更されました。
    - upjmpost.exe は upmpost.exe に変更されました。
- \[2007/08/01\]
    - 7月31日付の W32TeX から $TEXMF/ptex/ ディレクトリが無くなったので pLaTeX のスタイルファイルは $TEXMFLOCAL/tex/platex/ 下のフォルダ（ディレクトリ）に移動するか，新規に入れると良いでしょう。
- \[2004/05/10\]
    - バージョンが 7.5.3 になって fmt ファイルの置き場所が変わったようです。上書きインストールする場合は $TEXMF/web2c// フォルダ（ディレクトリ）以下を削除してから行ってください。
- \[2004/02/11\]
    - 新しい [TDS](</TeX のディレクトリ構成/>) (<strong>T</strong>eX <strong>D</strong>irectory <strong>S</strong>tructure) に準拠した W32TeX がそろそろミラーサイトに出始めているようです。ディレクトリ構造が変わっていますので，古い $TEXMF/ を削除あるいは名前変更してからインストールしてください。

### W32TeX のダウンロードファイルの一覧 {#filelist}

以下のリンクは [https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/](https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/) へのものですが，状況によって上記のミラーサイトを用いてください．

ファイルによっては 64-bit バイナリが存在します．
ただし，対応する 32-bit ファイルもダウンロードが必要です．

<table>
<thead>
<tr><th>64-bit バイナリ</th><th>32-bit バイナリ</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td colspan="3" style="text-align:left"><strong>最小インストール</strong></td></tr>
<tr><td colspan="2" style="text-align:center"><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/latex.tar.xz">latex.tar.xz</a></td><td>必須アーカイブ</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/mftools-w64.tar.xz">mftools-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/mftools.tar.xz">mftools.tar.xz</a></td><td>必須アーカイブ</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/platex.tar.xz">platex.tar.xz</a></td><td>必須アーカイブ</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/pdftex-w64.tar.xz">pdftex-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/pdftex-w32.tar.xz">pdftex-w32.tar.xz</a></td><td>必須アーカイブ．TeX → PDF 変換ツール (<a href="/pdfTeX/">pdfTeX</a>)</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/ptex-w64.tar.xz">ptex-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/ptex-w32.tar.xz">ptex-w32.tar.xz</a></td><td>必須アーカイブ．<a href="/jlreq/">jlreq</a> など</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/web2c-lib.tar.xz">web2c-lib.tar.xz</a></td><td>必須アーカイブ</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/web2c-w64.tar.xz">web2c-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/web2c-w32.tar.xz">web2c-w32.tar.xz</a></td><td>必須アーカイブ</td></tr>
<tr><td colspan="3" style="text-align:left"><strong>標準インストール（最小インストールに加えて）</strong></td></tr>
<tr><td colspan="2" style="text-align:center"><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/datetime2.tar.xz">datetime2.tar.xz</a></td><td>datetime2 パッケージ</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/dvipdfm-w64.tar.xz">dvipdfm-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/dvipdfm-w32.tar.xz">dvipdfm-w32.tar.xz</a></td><td>DVI → <a href="/PDF/">PDF</a> 変換ツール (<a href="/dvipdfmx/">dvipdfmx</a>)</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/dvipsk-w64.tar.xz">dvipsk-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/dvipsk-w32.tar.xz">dvipsk-w32.tar.xz</a></td><td>DVI → <a href="/PostScript/">PostScript</a> 変換ツール (<a href="/dvips/">dvips</a>)</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/jtex-w64.tar.xz">jtex-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/jtex-w32.tar.xz">jtex-w32.tar.xz</a></td><td>NTT JTeX<br>TeX Live には収録されていません．</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/ltxpkgdocs.tar.xz">ltxpkgdocs.tar.xz</a></td><td><a href="https://mirror.ctan.org/macros/latex/base">LaTeX</a>2e の基本パッケージ集のドキュメント</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/ltxpkgs.tar.xz">ltxpkgs.tar.xz</a></td><td><a href="https://mirror.ctan.org/macros/latex/base">LaTeX</a>2e の基本パッケージ集</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/luatexja.tar.xz">luatexja.tar.xz</a></td><td><a href="/LuaTeX-ja/">LuaTeX-ja</a></td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/luatex-w64.tar.xz">luatex-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/luatex-w32.tar.xz">luatex-w32.tar.xz</a></td><td>TeX → PDF 変換ツール (<a href="/LuaTeX/">LuaTeX</a>)</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/makeindex-w64.tar.xz">makeindex-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/makeindex-w32.tar.xz">makeindex-w32.tar.xz</a></td><td><a href="/索引作成/">索引作成</a>ツール (makeindex, mendex)</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/manual.tar.xz">manual.tar.xz</a></td><td>マニュアル類……質問する前に読みましょう</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/newtxpx-boondoxfonts.tar.xz">newtxpx-boondoxfonts.tar.xz</a></td><td><a href="/newtx/">newtx</a>, newpx, boondox フォント</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/pgfcontrib.tar.xz">pgfcontrib.tar.xz</a></td><td><a href="/TikZ/">pgf-tikz</a> contributions</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/t1fonts.tar.xz">t1fonts.tar.xz</a></td><td>Type 1 フォント</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/tex-gyre.tar.xz">tex-gyre.tar.xz</a></td><td><a href="/TeX Gyre/">TeX Gyre</a> フォントと TeX Gyre Math フォント</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/timesnew.tar.xz">timesnew.tar.xz</a></td><td>Times New Roman, Arial を使用するためのパッケージ</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/ttf2pk-w64.tar.xz">ttf2pk-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/ttf2pk-w32.tar.xz">ttf2pk-w32.tar.xz</a></td><td>TrueType → PK 変換ツール</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/txpx-pazofonts.tar.xz">txpx-pazofonts.tar.xz</a></td><td><a href="https://mirror.ctan.org/fonts/txfonts">TX</a>/<a href="https://mirror.ctan.org/fonts/pxfonts">PX</a>/<a href="https://mirror.ctan.org/fonts/mathpazo">Pazo</a> フォント</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/xetex-w64.tar.xz">xetex-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/xetex-w32.tar.xz">xetex-w32.tar.xz</a></td><td>TeX → PDF 変換ツール (<a href="/XeTeX/">XeTeX</a>)</td></tr>
<tr><td>なし</td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/xindy-w32.tar.xz">xindy-w32.tar.xz</a></td><td>Index プロセッサ (<a href="/索引作成/">索引作成</a>ツール xindy)</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/xypic.tar.xz">xypic.tar.xz</a></td><td><a href="/Xy-pic/">Xy-pic</a> パッケージ: 可換図などを描くのに便利</td></tr>
<tr><td colspan="3" style="text-align:left"><strong>フルインストール（標準インストールに加えて）</strong></td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/aleph-w64.tar.xz">aleph-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/aleph-w32.tar.xz">aleph-w32.tar.xz</a></td><td>Aleph</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/biblatex-biber-w64.tar.xz">biblatex-biber-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/biblatex-biber.tar.xz">biblatex-biber.tar.xz</a></td><td><a href="/文献引用/">文献引用</a>ツール (biblatex, biber)</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/cbfonts.tar.xz">cbfonts.tar.xz</a></td><td>cbgreek font</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/cjkzr.tar.xz">cjkzr.tar.xz</a></td><td><a href="/LaTeX-CJK/">LaTeX-CJK</a></td></tr>
<tr><td colspan="2" style="text-align:center"><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/context-doc.tar.xz">context-doc.tar.xz</a></td><td>ConTeXt のドキュメント</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/context-w64.tar.xz">context-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/context.tar.xz">context.tar.xz</a></td><td><a href="/ConTeXt/">ConTeXt</a></td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/cweb-w64.tar.xz">cweb-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/cweb-w32.tar.xz">cweb-w32.tar.xz</a></td><td>CWEB</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/dvi2ps-w64.tar.xz">dvi2ps-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/dvi2ps-w32.tar.xz">dvi2ps-w32.tar.xz</a></td><td>DVI to PS driver</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/dvi2tty-w64.tar.xz">dvi2tty-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/dvi2tty-w32.tar.xz">dvi2tty-w32.tar.xz</a></td><td>DVI to TTY driver</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/dvitools-w64.tar.xz">dvitools-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/dvitools-w32.tar.xz">dvitools-w32.tar.xz</a></td><td>ユーティリティ類</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/extractpdfmark-w64.tar.xz">extractpdfmark-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/extractpdfmark-w32.tar.xz">extractpdfmark-w32.tar.xz</a></td><td>extractpdfmark</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/gregorio-w64.tar.xz">gregorio-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/gregorio-w32.tar.xz">gregorio-w32.tar.xz</a></td><td>Gregorio</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/harftex-w64.tar.xz">harftex-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/harftex-w32.tar.xz">harftex-w32.tar.xz</a></td><td>HarfTeX<br>TeX Live には収録されていません．</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/lcdf-typetools-w64.tar.xz">lcdf-typetools-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/lcdf-typetools-w32.tar.xz">lcdf-typetools-w32.tar.xz</a></td><td>LCDF Typetools</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/luajittex-w64.tar.xz">luajittex-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/luajittex-w32.tar.xz">luajittex-w32.tar.xz</a></td><td><a href="/LuajitTeX/">LuajitTeX</a></td></tr>
<tr><td colspan="2" style="text-align:center"><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/minitoc.tar.xz">minitoc.tar.xz</a></td><td>minitoc パッケージ</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/m-tx-w64.tar.xz">m-tx-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/m-tx-w32.tar.xz">m-tx-w32.tar.xz</a></td><td>M-Tx</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/omegaj-w64.tar.xz">omegaj-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/omegaj-w32.tar.xz">omegaj-w32.tar.xz</a></td><td>日本語サポートつき Omega</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/otfbeta.tar.xz">otfbeta.tar.xz</a></td><td><a href="/OTF/">OTF</a> パッケージ［ベータ版］<br>otf パッケージを入れておくと，日本語文字の組版をより整えることができるようになります．</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/plain2-2.54-w64.tar.xz">plain2-2.54-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/plain2-2.54-w32.tar.xz">plain2-2.54-w32.tar.xz</a></td><td>text to TeX or NROFF translator</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/pmx-w64.tar.xz">pmx-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/pmx-w32.tar.xz">pmx-w32.tar.xz</a></td><td>pmx preprocessor for <a href="/楽譜/#l0a501fd">MusiXTeX</a></td></tr>
<tr><td colspan="2" style="text-align:center"><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/pstricks.tar.xz">pstricks.tar.xz</a></td><td><a href="/PSTricks/">PSTricks</a></td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/pstoedit-w64.tar.xz">pstoedit-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/pstoedit-w32.tar.xz">pstoedit-w32.tar.xz</a></td><td><a href="/pstoedit/">pstoedit</a></td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/psutils-w64.tar.xz">psutils-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/psutils-w32.tar.xz">psutils-w32.tar.xz</a></td><td>ユーティリティ類</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/ptex-ng-w64.tar.xz">ptex-ng-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/ptex-ng-w32.tar.xz">ptex-ng-w32.tar.xz</a></td><td><a href="/pTeX-ng/">pTeX-ng</a><br>TeX Live には収録されていません．</td></tr>
<tr><td>なし</td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/qpdf-w32.tar.xz">qpdf-w32.tar.xz</a></td><td><a href="/QPDF/">QPDF</a><br>TeX Live には収録されていません．</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/sam2p-w64.tar.xz">sam2p-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/sam2p-w32.tar.xz">sam2p-w32.tar.xz</a></td><td>sam2p</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/t1utils-w64.tar.xz">t1utils-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/t1utils-w32.tar.xz">t1utils-w32.tar.xz</a></td><td>ユーティリティ類</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/tex4ht-w64.tar.xz">tex4ht-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/tex4ht-w32.tar.xz">tex4ht-w32.tar.xz</a></td><td>TeX4ht</td></tr>
<tr><td>なし</td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/texinfotools-w32.tar.xz">texinfotools-w32.tar.xz</a></td><td>TeXinfo tools（日本語サポートつき）</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/tiff2png-w64.tar.xz">tiff2png-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/tiff2png-w32.tar.xz">tiff2png-w32.tar.xz</a></td><td>ユーティリティ類</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/ttf2pt1-w64.tar.xz">ttf2pt1-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/ttf2pt1-w32.tar.xz">ttf2pt1-w32.tar.xz</a></td><td>ユーティリティ類</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/ums.tar.xz">ums.tar.xz</a></td><td>ums パッケージ</td></tr>
<tr><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/uptex-w64.tar.xz">uptex-w64.tar.xz</a></td><td><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/uptex-w32.tar.xz">uptex-w32.tar.xz</a></td><td><a href="/upTeX,upLaTeX/">upTeX (内部 Unicode 版 pTeX)</a></td></tr>
</tbody>
</table>

<!-- |>|CENTER:&ref(https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/utf.tar.xz);|UTF パッケージ| -->

<table>
<tbody>
<tr><td colspan="2" style="text-align:center"><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/vf-n2bk.tar.xz">vf-n2bk.tar.xz</a></td><td>NTT-jTeX 用の Virtual font</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/xymtex.tar.xz">xymtex.tar.xz</a></td><td><a href="/XyMTeX/">XyMTeX</a></td></tr>
</tbody>
</table>

<!-- |&ref(https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/win64/txtutil-w64.tar.xz);|&ref(https://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/txtutil.tar.xz);|ユーティリティ類| -->

[^1]: 64ビットプロセッサ ([x86-64](https://ja.wikipedia.org/wiki/X64)) または32ビットプロセッサ ([IA-32](https://ja.wikipedia.org/wiki/IA-32)) 環境で動作する Microsoft Windows．
