---
title: "W32TeX"
url: "/W32TeX/"
date: 2014-02-08T20:14:45Z
pukiwiki: "W32TeX"
---

# W32TeX

[Microsoft Windows](</Microsoft Windows/>) > W32TeX

## [W32TeX](http://w32tex.org/index-ja.html) {#ba560630}

W32TeX は角藤 亮さんが [Microsoft Windows](</Microsoft Windows/>)[^1] 向けに作成した TeX のディストリビューションです．
W32TeX についての詳細は[公式サイト](http://w32tex.org/index-ja.html)を参照してください．

***

***

## インストール {#ib4afbe8}

インストール方法は，阿部紀行さんによって開発された「TeX インストーラ 3」を使う方法と，コマンド プロンプトで「簡易インストーラ」を動かす方法があります．
初めての方は TeX インストーラ 3 を使うのがおすすめです．
これは W32TeX 本体と周辺ソフトウェア（[dviout](/dviout/)，[Ghostscript](/Ghostscript/)，GSview，[TeXworks](/TeXworks/)[^2]）を自動でインストールし，設定まで済ませてくれます．
以下で，それぞれの方法を説明します．

### TeX インストーラ 3 によるインストール {#wd8675d9}

W32TeX 及び関連するソフトウェアを自動でインストールする [TeXインストーラ3](http://www.math.sci.hokudai.ac.jp/~abenori/soft/abtexinst.html) をもちいるのが楽です．
基本的にはインストーラを取得後，解凍し，abtexinst.exe をダブルクリックして指示に従ってください．
環境によっては .exe が表示されていないかもしれませんが，以下のようなアイコンで表示されているものを選んでください．

<a href="/attach/W32TeX/exeicon.png"><img src="/attach/W32TeX/exeicon.png" alt=""></a>

[拡張子の表示](</Microsoft Windows/#extension>)を設定しておくと，拡張子 .exe が表示されてわかりやすくなるでしょう．

#### インストールの事例 {#sfa1e1a0}

以下のサイトには，スクリーンショット付の詳細な解説があります．

- [簡単LaTeXインストールWindows編（2014年7月版）](http://did2memo.net/2014/03/06/easy-latex-install-windows-8-2014-03/)
- [Windows への TeX インストール（簡単 W32TeX・前編）](http://acetaminophen.hatenablog.com/entry/2015/05/16/142557)，[（簡単 W32TeX・後編）](http://acetaminophen.hatenablog.com/entry/2015/05/16/212810)，[（W32TeX・発展編）](http://acetaminophen.hatenablog.com/entry/2015/05/17/001048)

#### トラブルシューティング {#t3a0d8db}

まずは添付されている abtexinst.txt（やはり環境によっては .txt が表示されません）を参照してください．
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
1. 環境変数 PATH を設定する

なお，簡易インストーラが行うことは tar.xz により圧縮されているファイルを展開するだけです．
従って，手持ちの解凍ソフトが .tar.xz 形式に対応していれば，そちらで解凍して，適当な場所に展開することでもインストールが完了します（環境変数 PATH の設定は必要です）．

#### ダウンロードサイト {#y2ec963e}

W32TeX の最新版は，[ミラーサイト](/W32TeX/#mirror)からダウンロード可能です．

#### 注意点 {#s760b9ef}

ダウンロードツールをお使いの場合には，サーバーに迷惑をかけないようにするために同時接続数を1にしてください．

ダウンロードしたら，念のため次のことをご確認ください．

- ファイルの拡張子が正しいか？
    - Internet Explorer などの一部のブラウザやダウンローダは勝手にファイルの拡張子を変えてしまうことがあります．例えば，Internet Explorer 11 を使って [http://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/](http://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/) から \*.tar.xz ファイルを保存した場合に，

> &#x2a;.tar.xz → \*.tar.tar

のようにファイルの拡張子が変わります．

#### ダウンロードファイル {#i853d3d5}

W32TeX には，最小インストール / 標準インストール / フルインストール の三つの構成があります．
<strong>HDD の容量に余裕があればフルインストールを選んでおくのが無難</strong>でしょう．

フルインストールで 2.6G 程度の容量が必要です．

構成によりダウンロードするファイルが変わります．
[ダウンロードファイルの一覧](/W32TeX/#filelist)を参考に，適当なフォルダにダウンロードしてください．
ここでは C:\w32tex\download にダウンロードしたとしておきます（日本語や空白の入っているフォルダはトラブルを引き起こす可能性がありますので，避けてください）．

ファイルによっては 64-bit バイナリが存在します．
ただし，対応する 32-bit ファイルもダウンロードが必要です．

#### 簡易インストーラの取得 {#wa3b57f2}

[texinst2015.zip](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/texinst2015.zip) を展開してください．
展開した場所がインストールフォルダとなります．
以下では，C:\w32tex 内に展開されたとします．

コマンドプロンプトを起動し，C:\w32tex に移動後，texinst2015.exe を実行してください．（C:\w32tex\download は上記ファイルが保存されている場所です．）

```
C:\Users>cd C:\w32tex
C:\w32tex>texinst2015 C:\w32tex\download
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

#### 環境変数 PATH の設定 {#g0475486}

W32TeX は環境変数 PATH を設定する必要があります．
上で表示されたメッセージに従い，環境変数 PATH に C:\w32tex\bin を追加します（64-bit をもちいる場合は，更に C:\w32tex\bin64 を C:\w32tex\bin32 の<strong>前に</strong>追加します）．
方法の詳細は[環境変数の設定（基礎知識）](</Microsoft Windows/基礎知識/#environment-variables>)を参照してください．

自分だけが W32TeX を使いたい場合は，ユーザー環境変数 Path を編集します（なければ新規作成ししてください）．
自分だけではなくユーザー全員に W32TeX を使わせたい場合は，管理者権限でシステム環境変数に PATH を追加します．

- 32-bit バイナリを使用する場合は PATH の値の最後に “;C:\w32tex\bin” を追加し，\[OK\] を押します．
- 64-bit バイナリを使用する場合は PATH の値の最後に “;C:\w32tex\bin64;C:\w32tex\bin” を追加し，\[OK\] を押します．

追加したら，Windows PowerShell やコマンド プロンプトあるいは TeX 関連のソフトウェアを起動している場合は，いったん閉じてもう一度開きます．
こうすることで，環境変数の変更が反映されます．

#### 以前に TeX をインストールしたことがある場合 {#z02ac16d}

もしユーザー環境変数またはシステム環境変数に “TEXMF”，“TEXMFCNF”，“TEXMFMAIN” といった変数が登録されているなら，削除してください．
次に，ユーザー環境変数のところを見てください．
PATH という欄があればそれをクリックして［編集］を押します．
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
[Strawberry Perl の公式サイト](http://strawberryperl.com/) からインストーラをダウンロードし，指示に従えばインストールが完了します．

### SumatraPDF {#g6688c53}

[SumatraPDF](/SumatraPDF/) は [SyncTeX](/SyncTeX/) に対応した PDF/PostScript ビューアです．
[Adobe Acrobat Reader DC](</Adobe Acrobat Reader DC/>) のように開いている PDF ファイルをロックせず，ファイルの更新を自動で検知してプレビューを更新する優れもので，軽量な LaTeX 用 PDF ビューアとして最適です．
TeXworks などの PDF ビューア付きの統合環境を利用する場合は不要かもしれませんが，それ以外の場合はインストールするとよいでしょう（TeX インストーラ 3 を利用した場合も，SumatraPDF は自動インストールの対象ではありません）．

## アップデート {#o482d037}

W32TeX は常に新しいバイナリ・パッケージが提供され続けていますので，ときどき更新するとよいでしょう．
アップデートもインストールと同様の手順で可能です．

### TeX インストーラ 3 によるアップデート {#i798ef70}

abtexinst.exe をもう一度起動します（インストール時に設定を変更した場合は同じ設定にします）．
インストール時と同様に指示に従うことで，TeX インストーラ 3 はファイルの更新を検知し，アップデートを自動で行います．

### 直接アップデート {#r88b7452}

アップデートされたファイルをダウンロードし，texinst2015.exe をもちいてインストールと同様の操作を行うことで，古いファイルが上書きされてアップデートされます．
ただし，古いファイルを手動で消さなければならないことがありますので，[ChangeLog](http://w32tex.org/ChangeLog)を参照してください．

## 注意点 {#maff36c0}

### 文字コードの自動判別 {#z6946085}

W32TeX はデフォルトの設定では (e-)(u)pTeX を使用するとファイルの文字コードを自動判別します．
texmf.cnf には以下のように設定されています．

```
%
% guess input encoding in pTeX and its friends if 1. (W32 only)
%
guess_input_kanji_encoding = 1
```

文字コードの自動判別は失敗することがあります．
[uplatex -guess-input-enc hoge のように文字コードの自動判別機能を使用してタイプセットすると間違った文字コードで判別されてタイプセットされるパターンが存在する](/upTeX,upLaTeX/#zb472e1c) を参照してください．

## 漢字入出力対応状況 {#qc9f2e7d}

コンソールやファイル名等での漢字(日本語)の入出力の対応状況をまとめました(2014/2/8現在)。

<table>
<thead>
<tr><th rowspan="2"> コマンド </th><th rowspan="2"> command_line_encoding </th><th rowspan="2"> コマンドライン<br>入力 </th><th colspan="2"> コンソール入力 </th><th colspan="2"> コンソール出力 </th><th rowspan="2"> 入出力<br>ファイル名 </th><th rowspan="2"> special<br>ファイル名 </th></tr>
<tr><th> キーボード   </th><th> パイプ    </th><th> スクリーン  </th><th> パイプ      </th></tr>
</thead>
<tbody>
<tr><td> p(la)tex.exe </td><td> (無視される)      </td><td> CP932          </td><td> CP932  </td><td> Shift_JIS </td><td>CP932 </td><td> Shift_JIS </td><td> CP932 </td><td> Shift_JIS </td></tr>
<tr><td> p(la)tex.exe -kanji=utf8 </td><td> (無視される)  </td><td> CP932          </td><td> CP932  </td><td> UTF-8 </td><td> CP932(UTF-8) </td><td> UTF-8 </td><td> CP932 </td><td> Shift_JIS </td></tr>
<tr><td> up(la)tex.exe </td><td> utf-8            </td><td> Unicode         </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td></tr>
<tr><td> xe(la)tex.exe </td><td> utf-8            </td><td> Unicode         </td><td> Unicode </td><td> UTF-8 </td><td> Unicode(*) </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td></tr>
<tr><td rowspan="2"> dvipdfmx.exe  </td><td> (空)          </td><td> CP932          </td><td> --- </td><td> --- </td><td> CP932 </td><td> Shift_JIS </td><td> CP932 </td><td> Shift_JIS </td></tr>
<tr><td> utf-8         </td><td> Unicode        </td><td> --- </td><td> --- </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td></tr>
<tr><td> xdvipdfmx.exe </td><td> utf-8         </td><td> Unicode        </td><td> --- </td><td> --- </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td></tr>
<tr><td> xbb.exe       </td><td> utf-8         </td><td> Unicode        </td><td> --- </td><td> --- </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> --- </td></tr>
<tr><td> extractbb.exe </td><td> utf-8         </td><td> Unicode        </td><td> --- </td><td> --- </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> --- </td></tr>
<tr><td rowspan="2"> dvips.exe  </td><td> (空)          </td><td> CP932          </td><td> --- </td><td> --- </td><td> CP932 </td><td> Shift_JIS </td><td> CP932 </td><td> Shift_JIS </td></tr>
<tr><td> utf-8         </td><td> Unicode        </td><td> --- </td><td> --- </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td></tr>
<tr><td> dvi2tty.exe  </td><td> (空)          </td><td> CP932          </td><td> --- </td><td> --- </td><td> CP932 </td><td> Shift_JIS </td><td> CP932 </td><td> Shift_JIS </td></tr>
<tr><td> dvi2tty.exe -Eu </td><td> utf-8         </td><td> Unicode        </td><td> --- </td><td> --- </td><td> Unicode </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td></tr>
<tr><td rowspan="2"> kpsewhich.exe  </td><td rowspan="2"> (-progname=<br>指定先に依存する) </td><td> CP932          </td><td> CP932 </td><td> Shift_JIS </td><td> CP932 </td><td> Shift_JIS </td><td> CP932 </td><td> Shift_JIS </td></tr>
<tr><td> Unicode        </td><td> Unicode </td><td> UTF-8 </td><td> Unicode(*) </td><td> UTF-8 </td><td> Unicode </td><td> UTF-8 </td></tr>
<tr><td> gswin32c.exe<br>gswin64c.exe  </td><td> ---        </td><td> Unicode        </td><td> --- </td><td> --- </td><td> ??? </td><td> ??? </td><td> Unicode </td><td> --- </td></tr>
<tr><td> GSview  </td><td> ---        </td><td> ???        </td><td> --- </td><td> --- </td><td> ??? </td><td> ??? </td><td> CP932 </td><td> --- </td></tr>
</tbody>
</table>

この表は、日本語版 Windows におけるものです。
ここで、「command_line_encoding」とは、texmf.cnf のオプション設定です。
「コンソール入力」とは、標準入力(STDIN)からの入力、「コンソール出力」とは、標準出力(STDOUT)や標準エラー出力(STDERR)への出力を指します。
「specialファイル名」とは、挿入する画像のファイル名など、special命令によってdviファイルに書き込まれるファイル名の文字コードを指します。
「CP932」「Unicode」は文字集合の意味で、「Shift_JIS」「UTF-8」は文字エンコーディングの意味で用いています。
スクリーンが「Unicode」「CP932(UTF-8)」の場合、(u)p(la)tex.exe では "-sjis-terminal" オプションにて、その他ではリダイレクトやパイプ経由で utf8prin.exe を使用することで、文字化けせずに表示させることができます。
以下はその例です。

```
C:\work>platex -kanji=utf8 -sjis-terminal sourcename.tex
```

```
C:\work>uplatex -sjis-terminal sourcename.tex
```

```
C:\work>dvipdfmx sourcename.dvi 2>&1 | utf8prin
```

スクリーンが「Unicode(\*)」のものは、そのままでも文字化けせずに表示させることができます。
up(la)tex を主に使用される方は、texmf.cnf に

```
command_line_encoding = utf-8
```

p(la)tex を主に使用される方は、texmf.cnf に

```
command_line_encoding = utf-8
command_line_encoding.dvipdfmx =
command_line_encoding.dvips =
```

と設定するとよいでしょう。
なお、マクロ、パッケージやフォントなどのファイル名は ASCII の範囲にとどめ、漢字(日本語)や他言語の Unicode 文字を使用しないことをお勧めします。
文字エンコーディングの齟齬により、ソフトウェアによっては kpathseach 経由で探し出すことに失敗するケースがあるためです。
また、p(la)tex において special の種類によっては 0x5c を含むファイル名の場合、失敗することがあります。
この場合もASCIIの範囲で使用してください。( → [KANJI file name in special in dvi　(uptex)](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=1210))

## 関連リンク {#b5892c8c}

- [W32TeX - Wikipedia](https://ja.wikipedia.org/wiki/W32TeX)
- [W32TeXとは - はてなキーワード](http://d.hatena.ne.jp/keyword/W32TeX)
- [「W32TeX」を含むブログ - はてなキーワード](http://k.hatena.ne.jp/keywordblog/W32TeX)
- [CTAN web interface: package w32tex](http://www.ctan.org/pkg/w32tex)
- [CTAN web interface: Directory listing for /systems/win32/w32tex](http://www.ctan.org/tex-archive/systems/win32/w32tex)
- [USBメモリ活用講座【実践編・W32TeXポータブル化】](http://www.nagaoka-ct.ac.jp/ec/labo/visu/usb/tex/w32tex.shtml)
- [Windows のコマンドプロンプトで空ファイルを作成する方法](http://text.readalittle.net/article.php?id=244)
- [NUL (空のファイル) - DOS コマンド一覧](http://pf-j.sakura.ne.jp/program/dos/doscmd/dev_nul.htm)
- [http://chiebukuro.search.yahoo.co.jp/search?sort=16&p=W32TeX](http://chiebukuro.search.yahoo.co.jp/search?sort=16&p=W32TeX)

## W32TeX の詳細情報 {#icae16ae}

### W32TeX 最新版ミラーサイト {#mirror}

<strong>FTP</strong>
<!-- -[[Ring Server:http://www.ring.gr.jp/]] -->
<!-- - -ftp://ring.airnet.ne.jp/pub/text/TeX/ptex-win32/current/ -->
<!-- - -ftp://ring.maffin.ad.jp/pub/text/TeX/ptex-win32/current/ -->
<!-- - -ftp://ring.nict.go.jp/pub/text/TeX/ptex-win32/current/ -->
<!-- - -ftp://ring.shibaura-it.ac.jp/pub/text/TeX/ptex-win32/current/ -->
<!-- - -ftp://ring.tains.tohoku.ac.jp/pub/text/TeX/ptex-win32/current/ -->
<!-- - -ftp://ring.u-toyama.ac.jp/pub/text/TeX/ptex-win32/current/ -->
<!-- - -ftp://ring.yamanashi.ac.jp/pub/text/TeX/ptex-win32/current/ -->
<!-- - -ftp://ring.ix.oita-u.ac.jp/pub/text/TeX/ptex-win32/current/ -->
- [ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/)
- [ftp://ftp.dnsbalance.ring.gr.jp/pub/text/TeX/ptex-win32/current/](ftp://ftp.dnsbalance.ring.gr.jp/pub/text/TeX/ptex-win32/current/)
- [ftp://core.ring.gr.jp/pub/text/TeX/ptex-win32/current/](ftp://core.ring.gr.jp/pub/text/TeX/ptex-win32/current/)
    <!-- ftp.kddilabs.jp = ftp.kddlabs.co.jp = ftp.ne.jp -->
    <!-- -[[KDDI研究所:http://www.kddilabs.jp/]] -->

- [KDDI研究所](ftp://ftp.kddilabs.jp/TeX/ptex-win32/current/)
    <!-- - -ftp://ftp-srv2.kddilabs.jp/TeX/ptex-win32/current/ -->
    <!-- - -ftp://ftp.ne.jp/TeX/ptex-win32/current/ -->
    <!-- - -ftp://srv2.ftp.ne.jp/TeX/ptex-win32/current/ -->
    <!-- -[[会津大学:http://www.u-aizu.ac.jp/]] -->
    <!-- - -ftp://ftp.u-aizu.ac.jp/pub/tex/ptex-win32/current/ -->
    <!-- -[[文教大学湘南キャンパス:http://open.shonan.bunkyo.ac.jp/]] -->
    <!-- - -ftp://ftp.shonan.bunkyo.ac.jp/pub/TeX/ptex-win32/current/ -->
    <!-- -[[大島研究室:http://akagi.ms.u-tokyo.ac.jp/]]（[[東京大学:http://www.u-tokyo.ac.jp/]] [[大学院数理科学研究科:http://www.ms.u-tokyo.ac.jp/]]） -->

- [東京大学数理科学研究科](ftp://akagi.ms.u-tokyo.ac.jp/pub/TeX/win32/)
- [ftp://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/](ftp://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/)
    <!-- - -ftp://ftp.naist.jp/pub/CTAN/systems/win32/w32tex/ -->
    <!-- - -ftp://ftp.nara.wide.ad.jp/pub/CTAN/systems/win32/w32tex/ -->
    <!-- - -ftp://ftp.kddilabs.jp/pub/ctan/systems/win32/w32tex/ -->
    <!-- - -ftp://ftp-srv2.kddilabs.jp/ctan/systems/win32/w32tex/ -->
    <!-- - -ftp://ftp.ne.jp/pub/ctan/systems/win32/w32tex/ -->
    <!-- - -ftp://srv2.ftp.ne.jp/pub/ctan/systems/win32/w32tex/ -->
    <!-- - -ftp://ftp.riken.go.jp/pub/CTAN/systems/win32/w32tex/ -->
    <!-- - -ftp://ftp.shonan.bunkyo.ac.jp/pub/TeX/CTAN/systems/win32/w32tex/ -->
    <!-- - -ftp://ftp.nuie.nagoya-u.ac.jp/pub/CTAN/systems/win32/w32tex/ -->
    <!-- - -ftp://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/win32/w32tex/ -->
    <!-- - -ftp://ftp.u-aizu.ac.jp/pub/tex/CTAN/systems/win32/w32tex/ -->
    <!-- - -ftp://ftp.ring.gr.jp/pub/text/CTAN/systems/win32/w32tex/ -->
    <!-- - -ftp://ftp.dnsbalance.ring.gr.jp/pub/text/CTAN/systems/win32/w32tex/ -->
    <!-- - -ftp://core.ring.gr.jp/pub/text/CTAN/systems/win32/w32tex/ -->

<strong>HTTP</strong>
<!-- -[[ctan.ijs.si (in スロベニア):http://ctan.ijs.si/]] -->
- [ctan.ijs.si (in スロベニア)](http://ctan.ijs.si/mirror/w32tex/current/)
    <!-- -[[Ring Server:http://www.ring.gr.jp/]] -->
    <!-- - -http://ring.airnet.ne.jp/pub/text/TeX/ptex-win32/current/ -->
    <!-- - -http://ring.maffin.ad.jp/pub/text/TeX/ptex-win32/current/ -->
    <!-- - -http://ring.nict.go.jp/pub/text/TeX/ptex-win32/current/ -->
    <!-- - -http://ring.shibaura-it.ac.jp/pub/text/TeX/ptex-win32/current/ -->
    <!-- - -http://ring.tains.tohoku.ac.jp/pub/text/TeX/ptex-win32/current/ -->
    <!-- - -http://ring.u-toyama.ac.jp/pub/text/TeX/ptex-win32/current/ -->
    <!-- - -http://ring.yamanashi.ac.jp/pub/text/TeX/ptex-win32/current/ -->
    <!-- - -http://ring.ix.oita-u.ac.jp/pub/text/TeX/ptex-win32/current/ -->

- [http://www.ring.gr.jp/pub/text/TeX/ptex-win32/current/](http://www.ring.gr.jp/pub/text/TeX/ptex-win32/current/)
- [http://www.dnsbalance.ring.gr.jp/pub/text/TeX/ptex-win32/current/](http://www.dnsbalance.ring.gr.jp/pub/text/TeX/ptex-win32/current/)
- [http://core.ring.gr.jp/pub/text/TeX/ptex-win32/current/](http://core.ring.gr.jp/pub/text/TeX/ptex-win32/current/)
    <!-- -[[KDDI研究所:http://www.kddilabs.jp/]] -->

- [KDDI研究所](http://ftp.kddilabs.jp/TeX/ptex-win32/current/)
    <!-- - -http://ftp-srv2.kddilabs.jp/TeX/ptex-win32/current/ -->
    <!-- - -http://ftp.ne.jp/TeX/ptex-win32/current/ -->
    <!-- - -http://srv2.ftp.ne.jp/TeX/ptex-win32/current/ -->
    <!-- -[[CTAN]] mirror -->

- [http://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/](http://ftp.jaist.ac.jp/pub/CTAN/systems/win32/w32tex/)
    <!-- - -http://ftp.naist.jp/pub/CTAN/systems/win32/w32tex/ -->
    <!-- - -http://ftp.nara.wide.ad.jp/pub/CTAN/systems/win32/w32tex/ -->
    <!-- - -http://ftp.kddilabs.jp/pub/ctan/systems/win32/w32tex/ -->
    <!-- - -http://ftp-srv2.kddilabs.jp/ctan/systems/win32/w32tex/ -->
    <!-- - -http://ftp.ne.jp/pub/ctan/systems/win32/w32tex/ -->
    <!-- - -http://srv2.ftp.ne.jp/pub/ctan/systems/win32/w32tex/ -->
    <!-- - -http://ftp.riken.go.jp/pub/CTAN/systems/win32/w32tex/ -->
    <!-- - -http://ftp.yz.yamagata-u.ac.jp/pub/CTAN/systems/win32/w32tex/ -->
    <!-- - -http://mirror.math.kyushu-u.ac.jp/tex-archive/systems/win32/w32tex/ -->
    <!-- - -http://www.ring.gr.jp/pub/text/CTAN/systems/win32/w32tex/ -->
    <!-- - -http://www.dnsbalance.ring.gr.jp/pub/text/CTAN/systems/win32/w32tex/ -->
    <!-- - -http://core.ring.gr.jp/pub/text/CTAN/systems/win32/w32tex/ -->
    <!-- - -http://mirror.ctan.org/systems/win32/w32tex/ -->

### 過去のバージョンの W32TeX {#mirror-old}

何らかの理由で過去のバージョンが欲しい場合は，[兼宗さん](https://twitter.com/kanemune)が以下で提供してくださっています：

- [eplang.jp/w32tex/archive/](http://eplang.jp/w32tex/archive/)

### W32TeX のダウンロードファイルの一覧 {#filelist}

以下のリンクは [ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/](ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/) へのものですが，状況によって上記のミラーサイトを用いてください．

なお，頻繁に更新されていますのでバージョン番号は下と異なるかもしれません．
ファイルによっては 64-bit バイナリが存在します．
ただし，対応する 32-bit ファイルもダウンロードが必要です．

<table>
<thead>
<tr><th>64-bit バイナリ</th><th>32-bit バイナリ</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td colspan="3" style="text-align:left"><strong>最小インストール</strong></td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/latex.tar.xz">latex.tar.xz</a></td><td>必須アーカイブ</td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/mftools-w64.tar.xz">mftools-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/mftools.tar.xz">mftools.tar.xz</a></td><td>必須アーカイブ</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/platex.tar.xz">platex.tar.xz</a></td><td>必須アーカイブ</td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/pdftex-w64.tar.xz">pdftex-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/pdftex-w32.tar.xz">pdftex-w32.tar.xz</a></td><td>必須アーカイブ．TeX → PDF 変換ツール (<a href="/pdfTeX/">pdfTeX</a>)</td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/ptex-w64.tar.xz">ptex-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/ptex-w32.tar.xz">ptex-w32.tar.xz</a></td><td>必須アーカイブ</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/web2c-lib.tar.xz">web2c-lib.tar.xz</a></td><td>必須アーカイブ</td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/web2c-w64.tar.xz">web2c-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/web2c-w32.tar.xz">web2c-w32.tar.xz</a></td><td>必須アーカイブ</td></tr>
<tr><td colspan="3" style="text-align:left"><strong>標準インストール（最小インストールに加えて）</strong></td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/dvipdfm-w64.tar.xz">dvipdfm-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/dvipdfm-w32.tar.xz">dvipdfm-w32.tar.xz</a></td><td>DVI → <a href="/PDF/">PDF</a> 変換ツール (<a href="/dvipdfmx/">dvipdfmx</a>)</td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/dvipsk-w64.tar.xz">dvipsk-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/dvipsk-w32.tar.xz">dvipsk-w32.tar.xz</a></td><td>DVI → <a href="/PostScript/">PostScript</a> 変換ツール (<a href="/dvips/">dvips</a>)</td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/jtex-w64.tar.xz">jtex-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/jtex-w32.tar.xz">jtex-w32.tar.xz</a></td><td>NTT JTeX<br>TeX Live には収録されていません．</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/ltxpkgs.tar.xz">ltxpkgs.tar.xz</a></td><td><a href="https://mirror.ctan.org/help/Catalogue/entries/latex.html">LaTeX</a>2e の基本パッケージ集</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/luatexja.tar.xz">luatexja.tar.xz</a></td><td><a href="/LuaTeX-ja/">LuaTeX-ja</a></td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/luatex-w64.tar.xz">luatex-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/luatex-w32.tar.xz">luatex-w32.tar.xz</a></td><td>TeX → PDF 変換ツール (<a href="/LuaTeX/">LuaTeX</a>)</td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/makeindex-w64.tar.xz">makeindex-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/makeindex-w32.tar.xz">makeindex-w32.tar.xz</a></td><td><a href="/索引作成/">索引作成</a>ツール (makeindex, mendex)</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/manual.tar.xz">manual.tar.xz</a></td><td>マニュアル類……質問する前に読みましょう</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/newtxpx-boondoxfonts.tar.xz">newtxpx-boondoxfonts.tar.xz</a></td><td><a href="/newtx/">newtx</a>, newpx, boondox フォント</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/pgfcontrib.tar.xz">pgfcontrib.tar.xz</a></td><td><a href="/TikZ/">pgf-tikz</a> contributions</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/t1fonts.tar.xz">t1fonts.tar.xz</a></td><td>Type 1 フォント</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/tex-gyre.tar.xz">tex-gyre.tar.xz</a></td><td><a href="/TeX Gyre/">TeX Gyre</a> フォントと TeX Gyre Math フォント</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/timesnew.tar.xz">timesnew.tar.xz</a></td><td>Times New Roman, Arial を使用するためのパッケージ</td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/ttf2pk-w64.tar.xz">ttf2pk-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/ttf2pk-w32.tar.xz">ttf2pk-w32.tar.xz</a></td><td>TrueType → PK 変換ツール</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/txpx-pazofonts.tar.xz">txpx-pazofonts.tar.xz</a></td><td><a href="/newtx/#uba8f4cc">TX</a>/<a href="https://mirror.ctan.org/help/Catalogue/entries/pxfonts.html">PX</a>/<a href="https://mirror.ctan.org/help/Catalogue/entries/mathpazo.html">Pazo</a> フォント</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/vf-a2bk.tar.xz">vf-a2bk.tar.xz</a></td><td><a href="https://mirror.ctan.org/help/Catalogue/entries/ptex.html">pTeX</a> 用 virtual fonts</td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/xetex-w64.tar.xz">xetex-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/xetex-w32.tar.xz">xetex-w32.tar.xz</a></td><td>TeX → PDF 変換ツール (<a href="/XeTeX/">XeTeX</a>)</td></tr>
<tr><td>なし</td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/xindy-w32.tar.xz">xindy-w32.tar.xz</a></td><td>Index プロセッサ (<a href="/索引作成/">索引作成</a>ツール xindy)</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/xypic.tar.xz">xypic.tar.xz</a></td><td><a href="/Xy-pic/">Xy-pic</a> パッケージ: 可換図などを描くのに便利</td></tr>
<tr><td colspan="3" style="text-align:left"><strong>フルインストール（標準インストールに加えて）</strong></td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/aleph-w64.tar.xz">aleph-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/aleph-w32.tar.xz">aleph-w32.tar.xz</a></td><td>Aleph</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/biblatex-biber.tar.xz">biblatex-biber.tar.xz</a></td><td><a href="/文献引用/">文献引用</a>ツール (biblatex, biber)</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/cjkzr.tar.xz">cjkzr.tar.xz</a></td><td><a href="/LaTeX-CJK/">LaTeX-CJK</a></td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/context-doc.tar.xz">context-doc.tar.xz</a></td><td>ConTeXt のドキュメント</td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/context-w64.tar.xz">context-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/context.tar.xz">context.tar.xz</a></td><td><a href="/ConTeXt/">ConTeXt</a></td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/cweb-w64.tar.xz">cweb-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/cweb-w32.tar.xz">cweb-w32.tar.xz</a></td><td>CWEB</td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/dvi2ps-w64.tar.xz">dvi2ps-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/dvi2ps-w32.tar.xz">dvi2ps-w32.tar.xz</a></td><td>DVI to PS driver</td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/dvi2tty-w64.tar.xz">dvi2tty-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/dvi2tty-w32.tar.xz">dvi2tty-w32.tar.xz</a></td><td>DVI to TTY driver</td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/dvitools-w64.tar.xz">dvitools-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/dvitools-w32.tar.xz">dvitools-w32.tar.xz</a></td><td>ユーティリティ類</td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/lcdf-typetools-w64.tar.xz">lcdf-typetools-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/lcdf-typetools-w32.tar.xz">lcdf-typetools-w32.tar.xz</a></td><td>LCDF Typetools</td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/luajittex-w64.tar.xz">luajittex-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/luajittex-w32.tar.xz">luajittex-w32.tar.xz</a></td><td>LuaJITTeX</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/minitoc.tar.xz">minitoc.tar.xz</a></td><td>minitoc パッケージ</td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/m-tx-w64.tar.xz">m-tx-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/m-tx-w32.tar.xz">m-tx-w32.tar.xz</a></td><td>M-Tx</td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/omegaj-w64.tar.xz">omegaj-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/omegaj-w32.tar.xz">omegaj-w32.tar.xz</a></td><td>日本語サポートつき Omega</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/otfbeta.tar.xz">otfbeta.tar.xz</a></td><td><a href="/OTF/">OTF</a> パッケージ［ベータ版］<br>otf パッケージを入れておくと，日本語文字の組版をより整えることができるようになります．<br>otf パッケージの最新版は otfbeta です．</td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/plain2-2.54-w64.tar.xz">plain2-2.54-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/plain2-2.54-w32.tar.xz">plain2-2.54-w32.tar.xz</a></td><td>text to TeX or NROFF translator</td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/pmx-w64.tar.xz">pmx-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/pmx-w32.tar.xz">pmx-w32.tar.xz</a></td><td>pmx preprocessor for <a href="/楽譜/#l0a501fd">MusiXTeX</a></td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/pstricks.tar.xz">pstricks.tar.xz</a></td><td><a href="/PSTricks/">PSTricks</a></td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/pstoedit-w64.tar.xz">pstoedit-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/pstoedit-w32.tar.xz">pstoedit-w32.tar.xz</a></td><td><a href="/pstoedit/">pstoedit</a></td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/psutils-w64.tar.xz">psutils-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/psutils-w32.tar.xz">psutils-w32.tar.xz</a></td><td>ユーティリティ類</td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/ptex-ng-w64.tar.xz">ptex-ng-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/ptex-ng-w32.tar.xz">ptex-ng-w32.tar.xz</a></td><td><a href="/pTeX-ng/">pTeX-ng</a></td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/qpdf-w32.tar.xz">qpdf-w32.tar.xz</a></td><td><a href="/QPDF/">QPDF</a></td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/sam2p-w64.tar.xz">sam2p-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/sam2p-w32.tar.xz">sam2p-w32.tar.xz</a></td><td>sam2p</td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/t1utils-w64.tar.xz">t1utils-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/t1utils-w32.tar.xz">t1utils-w32.tar.xz</a></td><td>ユーティリティ類</td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/tex4ht-w64.tar.xz">tex4ht-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/tex4ht-w32.tar.xz">tex4ht-w32.tar.xz</a></td><td>TeX4ht</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/texinfotools-w32.tar.xz">texinfotools-w32.tar.xz</a></td><td>TeXinfo tools（日本語サポートつき）</td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/tiff2png-w64.tar.xz">tiff2png-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/tiff2png-w32.tar.xz">tiff2png-w32.tar.xz</a></td><td>ユーティリティ類</td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/ttf2pt1-w64.tar.xz">ttf2pt1-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/ttf2pt1-w32.tar.xz">ttf2pt1-w32.tar.xz</a></td><td>ユーティリティ類</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/ums.tar.xz">ums.tar.xz</a></td><td>ums パッケージ</td></tr>
<tr><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/uptex-w64.tar.xz">uptex-w64.tar.xz</a></td><td><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/uptex-w32.tar.xz">uptex-w32.tar.xz</a></td><td><a href="/upTeX,upLaTeX/">upTeX (内部 Unicode 版 pTeX)</a></td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/utf.tar.xz">utf.tar.xz</a></td><td>UTF パッケージ</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/vf-n2bk.tar.xz">vf-n2bk.tar.xz</a></td><td>NTT-jTeX 用の Virtual font</td></tr>
<tr><td colspan="2" style="text-align:center"><a href="ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/xymtex.tar.xz.tar.xz">xymtex.tar.xz.tar.xz</a></td><td><a href="/XyMTeX/">XyMTeX</a></td></tr>
</tbody>
</table>

<!-- |&ref(ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/win64/txtutil-w64.tar.xz);|&ref(ftp://ftp.ring.gr.jp/pub/text/TeX/ptex-win32/current/txtutil.tar.xz);|ユーティリティ類| -->

[^1]: 64ビットプロセッサ ([x86-64](https://ja.wikipedia.org/wiki/X64)) または32ビットプロセッサ ([IA-32](https://ja.wikipedia.org/wiki/IA-32)) 環境で動作する Microsoft Windows．
[^2]: 追加のプラグインを使えば，[Ispell](/Ispell/) もインストールされます．
