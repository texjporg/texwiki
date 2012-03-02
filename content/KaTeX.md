---
title: "KaTeX"
url: "/KaTeX/"
date: 2011-09-29T04:00:35Z
pukiwiki: "KaTeX"
---

# KaTeX

[xyzzy](/xyzzy/) > KaTeX

## [KaTeX](https://bitbucket.org/mumurik/xyzzy/downloads) {#f8899a4c}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## KaTeX カスタム版とは {#m8b25abb}

KaTeX (花鳥) カスタム版は，マルチフレーム版専用の KaTeX です．<br>
マルチフレーム版専用の KaTeX カスタム版は，[マルチフレーム版の開発サイトのダウンロードページ](https://bitbucket.org/mumurik/xyzzy/downloads)からダウンロードできます．<br>
マルチフレーム版の開発サイトのダウンロードページに置かれているものは，マルチフレーム版での使用を想定して配布されているものです．<br>
マルチフレーム版でないxyzzyを使う方は，[雄猫のがらくた置き場 (xyzzy) \[Internet Archive\]](http://web.archive.org/web/20100624030528/http://osuneko.at.infoseek.co.jp/xyzzy/xyzzy.html) からダウンロードしたものを使ってください．<br>

multiframe 0.2.3.4 RC2 でテストしてみたところ，タイプセットはオリジナル版と変わらず普通に動作するようです．<br>
C-c C-b i で補完しようとするとオリジナル版とは動作が異なり

```
katexenv start loading by mumurik
```

と表示された後

```
katexenv end loading by mumurik
```

と表示されて補完されるようです．<br>
表示されるのは初回の補完時のみで2回目以降は表示されません．<br>

## EmacsLisp移植キット/emacs.l カスタム版とは {#x6836fe0}

EmacsLisp移植キット/emacs.l カスタム版は，マルチフレーム版専用の EmacsLisp移植キット/emacs.l です．<br>
マルチフレーム版専用の EmacsLisp移植キット/emacs.l カスタム版は，[マルチフレーム版の開発サイトのダウンロードページ](https://bitbucket.org/mumurik/xyzzy/downloads)からダウンロードできます．<br>
マルチフレーム版の開発サイトのダウンロードページに置かれているものは，マルチフレーム版での使用を想定して配布されているものです．<br>
マルチフレーム版でないxyzzyを使う方は，[雄猫のがらくた置き場 (xyzzy) \[Internet Archive\]](http://web.archive.org/web/20100624030528/http://osuneko.at.infoseek.co.jp/xyzzy/xyzzy.html) からダウンロードしたものを使ってください．<br>

## KaTeX とは {#o741d921}

KaTeX (花鳥) は [xyzzy](/xyzzy/) の TeX モードです．<br>
GNU Emacs / XEmacs の TeX モードである [YaTeX](/YaTeX/) を xyzzy に移植したものです．<br>
KaTeX (花鳥)，Emacs lisp 移植キット，parentag は GPL v2 で配布されていましたが，「iswebライト」が 2010年10月31日 をもってサービス提供を終了したため，公式サイトは消滅しました．<br>

- [雄猫のがらくた置き場 (xyzzy) \[Internet Archive\]](http://web.archive.org/web/20100624030528/http://osuneko.at.infoseek.co.jp/xyzzy/xyzzy.html) (公式サイトの Web Archive)

<!-- #ref(http://web.archive.org/web/20060824011710/http://www.klavis.info/xyzzyscr.png,nolink,KaTeX を使った xyzzy の画面) -->

### ChangeLog {#g9333ba6}

#### Thu Oct 11 2008 Version 1.67.1.12 {#o70ed34c}

- typeset時にエラーになったら自動で終了する変数（\*typeset-stop-at-error\*）を導入。
- file-name-all-completionsとfile-name-completionを追加。
- file-name-nondirectoryを修正。
- eval-whenをいくつか追加。
- help,doc以下をYaTeX1.72と同じにした。
- typoをいくつか修正。
- 他いろいろ修正（忘れた）。

#### Thu Oct 14 2004 Version 1.67.1.11 {#e24405e3}

- KaTeXとkahtmlを同時に起動すると動作がおかしかったのを修正。
- sample.xyzzyを作成。
- typoをいくつか修正。
- kahtmlでファイル読み込みが怪しかったのを修正。

#### Fri Jul 23 2004 Version 1.67.1.10 {#b4fbb95e}

- letの再定義がおかしかったのを修正。
- typoをいくつか修正。
- プロセスの状態をきちんと取れていなかったのを修正。
- fillの挙動が怪しかったのを修正。

#### Sun May 30 2004 Version 1.67.1.9 {#ef750829}

- kahtml で css ファイルを使っているソースを開けなかったのを修正。

#### Sat Nov 01 2003 Version 1.67.1.8 {#de7f33d3}

- 正規表現のキーワード色分けが、出来なくなっていたのを修正。
- yahtml ならぬ kahtml を作ってみたり(要browserex関係)。

#### Wed Sep 18 2003 Version 1.67.1.7 {#fd42f62a}

- dvioutを起動したときに、dos画面が表示されるのを、されないようにした。
- Toolbarを作ってみた。(詳細はkatexbar.l)
- 数式モード等でTABを打つとエラーになるのを修正。
- オンラインヘルプを使えるようにしてみた。(install.txtの５参照)
- メニューにあったtypoを修正。
- lprコマンドが使えるようになったかも。

#### Wed Jan 22 2003 Version 1.67.1.6 {#bd92f3ce}

- $ の入力がとっても遅くなるのを避けれるような変数(\*not-use-verbatime\*)を追加。
- 試しに正規表現のキーワード色分けを入れてみた。\*KaTeX-math-formats\*で設定。
- KaTeX-indent-line がおかしかったのを修正。
- preview するときに黒い画面を出さないようにした。

#### Sat Sep 08 2001 Version 1.67.1.5 {#s2671e3f}

- \\%でもコメントと認識されるのを修正。
- 数式記号イメージ補完、ギリシャ文字補完が数式環境中でできなかったのを修正。
- LaTeXコマンドの変更が変になっていたのを修正。
- mode-specific-indent-command を 'KaTeX-indent-line に設定した。
- fill がおかしかったのを修正。

#### Mon Jul 16 2001 Version 1.67.1.4 {#v586b59c}

- auto-fill が時々おかしくなるのを修正。
- \ref{}の補完入力で、fig:fooとかできなかったのを修正。
- section型の補完を途中でやめたとき変だったのを修正。

#### Thu Jun 21 2001 Version 1.67.1.3 {#ubc814db}

- section型でヒストリが効かなかったのを修正。
- byte-compile できなかったのを修正。
- メニューを起動時に読み込むようにした。
- "$"の入力時に黙り込む時間を短くした（つもり）。
- \ref{}の補完入力がおかしかったのを修正。

#### Mon May 07 2001 Version 1.67.1.2 {#ka45c0b6}

- ユーザー辞書への保存が変だったのを修正。
- documentstyle,documentclassで補完できなかったのを修正。
- auto-fillできなかったのを修正。

#### Tue May 01 2001 Version 1.67.1.1 {#o11bdcbe}

- メニューを作ってみたりした。
- エラーした行にときどき飛ばなかったのを修正(したつもり)。
- タイプセットしてエラーが出たときの動作を変更。
- ヒストリを保存するようにした。
- ユーザー辞書に保存したキーワードが、有効にならなかったのを修正。
- 数式記号イメージ、ギリシャ文字補完のリストの表示を変更。
- section型補完のとき、ミニバッファ中で補完が出来なかったのを修正。
- \[prefix\] #\SPC で随時補完できなかったのを修正。
- そのほか細かいバグ取り(したつもり)。

#### Wed Mar 14 2001 Version 1.67.1.0 {#cce2de92}

- 名前をKaTeX(花鳥)に変更。正式リリース。
- ChangeLog(これ)を作った。
- window-edgesがおかしかったのを修正。
- auto-fill-modeでfillしたついでにインデントさせるのを忘れていたのを修正。
- YaTeX-do-completion,YaTeX-sign-alist-defaultのなかで、文字コードが直っていなかったのを修正。
- YaTeX-insert-braces-regionの引数 beg end の入れ替えをしていなかったのを修正。
- ラベルの参照で、他のファイルにあるラベルを参照できなかったのを修正。
- messageをminibufferに出力するようにした。

#### Fri Dec 22 2000 Version 2.2 {#h99d2aad}

- insert-charが間違っていたのを修正。
- scroll-up,scroll-downを追加。
- substringの仕様がEmacs Lispと違ったのを修正。
- window-edgesを追加。
- YaTeX-math-(forward|backward)が動かなかったのを修正。
- YaTeX-change-math-imageが動かなかったのを修正。
- {\large ...}関係が \[prefix\] k で削除できなかったのを修正。
- math-modeで ;\[TAB\] の時に出てくるメニューのタイトルが２カラム分あるのにメニューは１カラムしかでなかったのを修正
- math-modeの ;-\[TAB\] で、"-"から始まる補完リストだけを表示できなかったのを修正。
- math-modeで ; の後に -,--,--> とタイプするとカーソル位置に\mp,\equiv,\longrightarrowとコマンドが表示できなかったのを修正。
- YaTeX-math-need-imageが動かなかったのを修正。
- YaTeX-make-sectionで、２つの引数をとる辞書にないコマンドが実行することができなかったのを修正。
- \[prefix\] 4 g などが使えなかったのを修正。
- YaTeX-inhibit-prefix-letterが設定できなかったのを修正。
- セクション区切りのアウトライン表示が動かなかったのを修正。
- すでに書いたテキストを括る補完ができなかったのを修正。

#### Thu Nov 30 2000 Version 2.1 {#m824b408}

- call-processを間違えて消してしまったのを復活。
- enumerate環境のitemの補完ができなくなったのを修正。
- \ref{}が動かなかったのを修正。
- イタリック補正ができなかったのを修正。
- YaTeX-typeset-bufferで他のバッファにYaTeXのファイルがあるとき、保存できなかったのを修正。

#### Mon Nov 13 2000 Version 2.0 {#sa49e6e4}

- elispパッケージを作って、その中に入れた。

#### Thu Nov 02 2000 Version 1.0 {#y0129a3c}

- xyzzy ML内にてとりあえず公開。

## KaTeX で TeX の命令をラクラク入力 {#k658955e}

TeX で命令を書いているときに，そうした命令を書いていくのがおっくうになることがありませんか？ 例えば
箇条書きを書くときにいちいち \begin{itemize} と \end{itemize} を書いてくくり，さらに項目ごとにいちいち先頭に \item などと書かなきゃならない……面倒くさい，そう思うこともあるに違いありません。
そんなときは KaTeX を使ってみましょう。

KaTeX （花鳥）は便利なキーボードショートカットを多数有し，LaTeX の命令や
環境の入力を素早く，なおかつ楽にしてくれるマクロです。[YaTeX](/YaTeX/) の
xyzzy 版と言った方がわかりやすいかもしれません。

公式サイトの Web Archive [雄猫のがらくた置き場 (xyzzy) \[Internet Archive\]](http://web.archive.org/web/20100624030528/http://osuneko.at.infoseek.co.jp/xyzzy/xyzzy.html)
([http://web.archive.org/web/20070830041740/http://osuneko.at.infoseek.co.jp/xyzzy/packages.l](http://web.archive.org/web/20070830041740/http://osuneko.at.infoseek.co.jp/xyzzy/packages.l))
から KaTeX を選択してダウンロードできます．<br>
Emacs Lisp 移植キットは KaTeX に含まれていますが個別にダウンロードすることもできます．

マルチフレーム版を試している方は，[マルチフレーム版の開発サイトのダウンロードページ](https://bitbucket.org/mumurik/xyzzy/downloads)からダウンロードしたものを使ってください。（上記公式サイトの Web Archive から入手できるものとは厳密に言うと違うものですので注意してください）。

## 設定 {#pea65968}

<!-- KaTeX 用の設定ですが，お勧めの設定とあわせ，~/.xyzzy に -->

katex.zip または katex.lzh を展開して katex フォルダーをコピーして xyzzy の site-lisp フォルダーにペーストします．<br>
&#x7e;/.xyzzy などの初期設定ファイルに設定を記述します．<br>

***

```
;;
;; KaTeX
;;
(push (merge-pathnames "site-lisp/katex" (si:system-root)) *load-path*)
(require "elisp")
(push '("\\.\\(tex\\|aux\\|toc\\|lof\\|lot\\|idx\\|ind\\|glo\\|gls\\|bbl\\|sty\\|cls\\|clo\\|dtx\\|fdd?\\|ltx\\|dfu\\|ldf\\|4ht\\)$" . elisp::katex-mode) *auto-mode-alist*)
(autoload 'elisp::katex-mode "katex" t)
(setq elisp::KaTeX-inhibit-prefix-letter t)
(setq elisp::KaTeX-kanji-code nil)
(setq elisp::tex-command "platex -no-guess-input-enc -kanji=utf8 -synctex=1 -src-specials")
;(setq elisp::tex-command "uplatex -no-guess-input-enc -kanji=utf8 -synctex=1 -src-specials")
(setq elisp::bibtex-command "pbibtex -kanji=utf8")
;(setq elisp::bibtex-command "upbibtex -kanji=utf8")
(setq elisp::makeindex-command "mendex -U")
(setq elisp::dviprint-command-format "cmd /c tasklist /fi \"IMAGENAME eq AcroRd32.exe\" /nh | findstr \"AcroRd32.exe\" > nul && echo exit | pdfdde & dvipdfmx %s && pdfopen --file %s.pdf")
(setq elisp::dvi2-command "C:/w32tex/dviout/dviout -1")
(set-extended-key-translate-table exkey-M-return #\M-RET)
(setq elisp::*KaTeX-use-toolbar* t)
(defun user::katex-mode ()
  (interactive)
  (elisp::katex-mode))
(setq elisp::KaTeX-default-documentclass "jsarticle")
(add-hook 'elisp::katex-mode-hook
          #'(lambda ()
              (auto-fill-mode nil)))
(defun sumatrapdf-forward-search ()
  (interactive)
  (let* ((tex-file (get-buffer-file-name))
         (pdf-file (concat (el::KaTeX-get-preview-file-name) ".pdf")))
    (call-process (concat "\"C:/Program Files/SumatraPDF/SumatraPDF\"" " -reuse-instance " pdf-file " -forward-search " tex-file " "
                          (format nil "~D" (current-line-number)))
                  :exec-directory (directory-namestring tex-file))))
(add-hook 'elisp::katex-mode-hook
          #'(lambda ()
              (define-key elisp::*KaTeX-mode-map* '(#\C-c #\s) 'sumatrapdf-forward-search)))
(defun dviout-forward-search ()
  (interactive)
  (let* ((tex-file (get-buffer-file-name))
         (dvi-file (el::KaTeX-get-preview-file-name)))
    (call-process (concat el::dvi2-command " -1 " dvi-file " \"\# "
                          (format nil "~D" (current-line-number)) " " tex-file "\"")
                  :exec-directory (directory-namestring tex-file))))
(add-hook 'elisp::katex-mode-hook
          #'(lambda ()
              (define-key elisp::*KaTeX-mode-map* '(#\C-c #\d) 'dviout-forward-search)))
```

***

上記の設定では

```
;; ロードパスに KaTeX のあるディレクトリを追加
;; elispパッケージを有効にする
;; 拡張子と関数の関連付け
;; （拡張子 “.ins”，“.ini” は
;;   Windows 上で TeX 関連以外のプログラムと関連付けられており，
;;   拡張子 “.def”，“.cfg” は
;;   TeX 関連以外のプログラムでもよく使われているので，
;;   この4つの拡張子は含めていない。）
;; KaTeX のオートロード
;; YaTeX のデフォルトが (setq YaTeX-inhibit-prefix-letter t) に変更されたので
;; KaTeX も (setq elisp::KaTeX-inhibit-prefix-letter t) に設定
;; (setq YaTeX-kanji-code nil) に合わせて
;; (setq elisp::KaTeX-kanji-code nil) に設定
;; タイプセットを e-pLaTeX で
;; タイプセットを e-upLaTeX で
;; pbibtex を使う
;; upbibtex を使う
;; mendex を使う
;; Adobe Reader が起動していれば Adobe Reader を終了して dvipdfmx + pdfopen を使う
;; C:\w32tex\dviout\dviout をプレビューに使う
;; M-RET を有効に
;; ツールバー表示
;; ショートカット
;; jsarticle をデフォルトに
;; 自動改行なし
;; SumatraPDF で forward search
;; dviout で forward search
```

といった設定がされています。<br>
「自動改行なし」や jsarticle 関連，ツールバーの表示あたりはお好みです。<br>

## 使い方 {#ycbb077d}

### タイプセット・プレビュー {#q3bf6923}

(setq elisp::KaTeX-inhibit-prefix-letter t) を使用してください．<br>
(setq elisp::KaTeX-inhibit-prefix-letter nil) は，非推奨 (deprecated) です．<br>

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#3C0;text-align:center">メニュー [KaTeX(K)]</th><th style="color:#FFF;background-color:#3C0;text-align:center">入力 (setq elisp::KaTeX-inhibit-prefix-letter t)</th><th style="color:#FFF;background-color:#3C0;text-align:center">入力 (setq elisp::KaTeX-inhibit-prefix-letter nil)</th><th style="color:#FFF;background-color:#3C0;text-align:center">機能</th></tr>
> <tr><td>Process menu -&gt; LaTeX</td><td>C-c C-t j</td><td>C-c t j</td><td>タイプセット</td></tr>
> <tr><td>Process menu -&gt; BibTeX</td><td>C-c C-t b</td><td>C-c t b</td><td>BibTeX</td></tr>
> <tr><td>Process menu -&gt; makeindex</td><td>C-c C-t i</td><td>C-c t i</td><td>MakeIndex</td></tr>
> <tr><td>Process menu -&gt; Preview</td><td>C-c C-t p</td><td>C-c t p</td><td>プレビュー</td></tr>
> <tr><td></td><td>C-c C-t l</td><td>C-c t l</td><td>LPR (印刷)</td></tr>
> </tbody>
> </table>
>

### 補完 {#m9a1797e}

(setq elisp::KaTeX-inhibit-prefix-letter t) を使用してください．<br>
(setq elisp::KaTeX-inhibit-prefix-letter nil) は，非推奨 (deprecated) です．<br>

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#3C0;text-align:center">メニュー [KaTeX(K)]</th><th style="color:#FFF;background-color:#3C0;text-align:center">入力 (setq elisp::KaTeX-inhibit-prefix-letter t)</th><th style="color:#FFF;background-color:#3C0;text-align:center">入力 (setq elisp::KaTeX-inhibit-prefix-letter nil)</th><th style="color:#FFF;background-color:#3C0;text-align:center">補完</th></tr>
> <tr><td>Environment -&gt; リストから選択</td><td>C-c C-b SPC</td><td>C-c b SPC</td><td>begin 型補完</td></tr>
> <tr><td>Environment region -&gt; リストから選択</td><td>C-c B SPC</td><td>C-c B SPC</td><td>指定領域に対して begin 型補完</td></tr>
> <tr><td>Section type -&gt; リストから選択</td><td>C-c C-s</td><td>C-c s</td><td>section 型補完</td></tr>
> <tr><td>Section type region -&gt; リストから選択</td><td>C-c S</td><td>C-c S</td><td>指定領域に対して section 型補完</td></tr>
> <tr><td>Insert end environment</td><td>C-c C-e</td><td>C-c e</td><td>end 補完</td></tr>
> </tbody>
> </table>
>

### タイプセット方式の変更 {#z61cfd29}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#3C0;text-align:center">入力</th><th style="color:#FFF;background-color:#3C0;text-align:center">タイプセット方式</th></tr>
> <tr><td>M-x set-variable RET elisp::tex-command RET platex -kanji=utf8 -no-guess-input-enc -synctex=1 -src-specials RET</td><td>platex</td></tr>
> <tr><td>M-x set-variable RET elisp::tex-command RET pdfplatex.bat RET</td><td>pdfplatex</td></tr>
> <tr><td>M-x set-variable RET elisp::tex-command RET uplatex -kanji=utf8 -no-guess-input-enc -synctex=1 -src-specials RET</td><td>uplatex</td></tr>
> <tr><td>M-x set-variable RET elisp::tex-command RET pdfuplatex.bat RET</td><td>pdfuplatex</td></tr>
> <tr><td>M-x set-variable RET elisp::tex-command RET pdflatex -synctex=1 RET</td><td>pdflatex</td></tr>
> <tr><td>M-x set-variable RET elisp::tex-command RET lualatex -synctex=1 RET</td><td>lualatex</td></tr>
> <tr><td>M-x set-variable RET elisp::tex-command RET xelatex -synctex=1 RET</td><td>xelatex</td></tr>
> </tbody>
> </table>
>

### タイプセット方式の確認 {#fe934cb0}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#3C0;text-align:center">入力</th></tr>
> <tr><td>M-x describe-variable RET elisp::tex-command RET</td></tr>
> </tbody>
> </table>
>

### その他 {#t6621c20}

使い方は Emacs のマクロ (Elisp) である YaTeX とほぼ同じですので，[TeXWiki:YaTeX](/YaTeX/) も参照してください。

一つだけ便利な技を紹介しておきましょう。
ある領域の行の先頭に一気に “%” を付け加え，コメントアウトしたいときは，該当領域をリージョン指定し，Ctrl + c と入力して “>” を入力します (C-c >)。
逆に，“%” を外したいときはリージョン指定をした上で Ctrl + c と入力して “&lt;” を入力します (C-c &lt;)。
「リージョン」というのは，指定したい範囲の起点で Ctrl + SPACE キー (C-SPC) を押し，その後で起点からカーソルを移動した場所までの領域を指します。
見た目には何も起こらないように思えますが，実際はきちんと範囲になっていたりするのです。
そして，リージョンの終点において，先ほどの C-c > や C-c &lt; を実行すればよいのです。
（よく分からない方は，[Emacs におけるリージョン](http://cns-guide.sfc.keio.ac.jp/2001/7/2/4.html)と仕組みは同じですので，そちらを参照していただければと思います。）

## SumatraPDF との連携 {#y959d8e3}

&#x7e;/.xyzzy などの初期設定ファイルに，

```
(setq elisp::tex-command "platex -synctex=1 -src-specials")
```

と書いておきます。

### forward search (SumatraPDF v1.9.4622 以上の場合) {#m08e4ed8}

xyzzy から SumatraPDF の該当箇所にジャンプすることが可能です。<br>
KaTeX を使う場合は次のような文字列を ~/.xyzzy などの初期設定ファイルに書いておきます．<br>

***

```
(defun sumatrapdf-forward-search ()
  (interactive)
  (let* ((tex-file (get-buffer-file-name))
         (pdf-file (concat (el::KaTeX-get-preview-file-name) ".pdf")))
    (call-process (concat "\"C:/Program Files/SumatraPDF/SumatraPDF\"" " -reuse-instance " pdf-file " -forward-search " tex-file " "
                          (format nil "~D" (current-line-number)))
                  :exec-directory (directory-namestring tex-file))))
(add-hook 'elisp::katex-mode-hook
          #'(lambda ()
              (define-key elisp::*KaTeX-mode-map* '(#\C-c #\s) 'sumatrapdf-forward-search)))
```

***

すると，C-c s または M-x sumatrapdf-forward-search （Alt を押しながら x を押し，“sumatrapdf-forward-search” と入力して Enterキーを押す）とすることで，現在 TeX ファイル中でカーソルのある箇所に相当する PDF ファイルの位置を開いてくれるはずです．<br>
頻繁に使う方はキーボードショートカット（キーバインド）を定義したり自前でツールバー・ツールバーに割り当てる関数を作成しておくことを勧めます．<br>

### forward search (SumatraPDF v1.9.4622 未満の場合) {#n9aa887a}

[SumatraPDF#fwdsumatrapdf.exe](/SumatraPDF/#n8da77e2) の fwdsumatrapdf.exe を使用します．<br>

xyzzy から SumatraPDF の該当箇所にジャンプすることが可能です。<br>
KaTeX を使う場合は次のような文字列を ~/.xyzzy などの初期設定ファイルに書いておきます．<br>

***

```
(defun sumatrapdf-forward-search ()
  (interactive)
  (let* ((tex-file (get-buffer-file-name))
         (pdf-file (concat (el::KaTeX-get-preview-file-name) ".pdf")))
    (call-process (concat "C:/w32tex/NDde/Binary/fwdsumatrapdf" " " pdf-file " " tex-file " "
                          (format nil "~D" (current-line-number)))
                  :exec-directory (directory-namestring tex-file))))
(add-hook 'elisp::katex-mode-hook
          #'(lambda ()
              (define-key elisp::*KaTeX-mode-map* '(#\C-c #\s) 'sumatrapdf-forward-search)))
```

***

すると，C-c s または M-x sumatrapdf-forward-search （Alt を押しながら x を押し，“sumatrapdf-forward-search” と入力して Enterキーを押す）とすることで，現在 TeX ファイル中でカーソルのある箇所に相当する PDF ファイルの位置を開いてくれるはずです．<br>
頻繁に使う方はキーボードショートカット（キーバインド）を定義したり自前でツールバー・ツールバーに割り当てる関数を作成しておくことを勧めます．<br>

### inverse search {#v8e96370}

[xyzzy#SumatraPDF との連携#inverse search](/xyzzy/#n1f72109) を参照．

## dviout との連携 {#u0efc8e1}

&#x7e;/.xyzzy などの初期設定ファイルに，

```
(setq elisp::tex-command "platex -synctex=1 -src-specials")
```

と書いておきます。

### forward search {#h429b3b5}

xyzzy から dviout for Windows の該当箇所にジャンプすることが可能です．<br>
KaTeX を使う場合は [XyzzyWiki:質問箱/121](http://xyzzy.s53.xrea.com/wiki/?%BC%C1%CC%E4%C8%A2/121) を参考に次のような文字列を ~/.xyzzy などの初期設定ファイルに書いておきます．<br>

***

```
(defun dviout-forward-search ()
  (interactive)
  (let* ((tex-file (get-buffer-file-name))
         (dvi-file (el::KaTeX-get-preview-file-name)))
    (call-process (concat el::dvi2-command " -1 " dvi-file " \"\# "
                          (format nil "~D" (current-line-number)) " " tex-file "\"")
                  :exec-directory (directory-namestring tex-file))))
(add-hook 'elisp::katex-mode-hook
          #'(lambda ()
              (define-key elisp::*KaTeX-mode-map* '(#\C-c #\d) 'dviout-forward-search)))
```

***

すると，C-c d または M-x dviout-forward-search （Alt を押しながら x を押し，“dviout-forward-search” と入力して Enterキーを押す）とすることで，現在 TeX ファイル中でカーソルのある箇所に相当する DVI ファイルの位置を開いてくれるはずです．<br>
頻繁に使う方はキーボードショートカット（キーバインド）を定義したり自前でツールバー・ツールバーに割り当てる関数を作成しておくことを勧めます．<br>

### inverse search {#o8fecad0}

[xyzzy#dviout との連携#inverse search](/xyzzy/#g1e55b81) を参照．

## コマンドの追加 {#j3178c6b}

さらに，KaTeX からその他のコマンドを実行できるように改造してみましょう。
次のコメント行（セミコロン “;” から始まる，xyzzy が命令を読み込まない行）を参考にすれば，任意のコマンドを登録できるようになるでしょう。
ここでは “out2uni” というコマンドを登録しています
（今ではあまり使わないコマンドですが，ちょっとネタが思いつかないので）。

長いものですが，基本的には「ここから」から「ここまで」のみを編集していけば OK です。なお，前に

```
(in-package "elisp")
(require "katex")
```

の2行を記述してない場合は，記述しておくようにしてください。

```
(defun KaTeX-typeset-menu (arg &optional char)
  "Typeset, preview, visit error and miscellaneous convenient menu.
Optional second argument CHAR is for non-interactive call from menu."
  (interactive "P")
  (message
   (concat "J)latex R)egion B)ibtex mk(I)ndex "
	   (if (fboundp 'start-process) "K)ill-latex ")
	   "P)review "
	   (and (boundp 'window-system) window-system "S)earch ")
	   "V)iewerr L)pr D)vips dvipdF)m"
	   ;; ここでさらにコマンドを追加する場合は説明文をダブルクウォート (") で区切って
	   ;; 追加する。ここでは「O)ut2uni」というのをスペースのあとに追加する。
	   ;; 二つ以上追加したい場合（ここでは「A)command」というのを追加する）は
	   ;; 例えば「O)ut2uni」のあとにスペースで区切り，
	   ;; " O)ut2uni A)command"
	   ;; のように書く。
	   ;;
	   ;; ここから
	   
	   " O)ut2uni"
	   
	   ;; ここまで
	   ))
  (let ((pre-ime (and (get-ime-mode) (toggle-ime)))
	(sw (selected-window)) (c (or char (read-char))))
    (require "katexprc") ;for Nemacs's bug
    (select-window sw)
    (cond
     ((= c #\j) (KaTeX-typeset-buffer))
     ((= c #\r) (KaTeX-typeset-region))
     ((= c #\b) (KaTeX-call-command-on-file
		 bibtex-command "*KaTeX-bibtex*"))
    ((= c #\i) (KaTeX-call-command-on-file
		 makeindex-command "*KaTeX-makeindex*"))
     ((= c #\k) (KaTeX-kill-typeset-process KaTeX-typeset-process))
     
     ((= c #\p) (call-interactively 'KaTeX-preview))
     ;((= c #\q) (KaTeX-system "lpq" "*Printer queue*"))
     ((= c #\v) (KaTeX-view-error))
     ((= c #\l) (KaTeX-lpr arg))
     ((= c #\m) (KaTeX-switch-mode-menu arg))
     ((= c #\b) (KaTeX-insert-string "\\")) ;???
     ;((= c #\s) (KaTeX-xdvi-remote-search arg))
     ;; -----------------------------------------------------------
     ;; added command
     ((= c #\d) (KaTeX-dvi2ps))
     ((= c #\f) (KaTeX-dvipdfm))
     ;; さらに加えたいコマンドを「ここから」から「ここまで」まで以下に次の様式で記入します。
     ;; ((= c #\【Ctrl + c, t の後に押すキーボード】) (【コマンドを実行するための関数名】))
     ;; 一例では Ctrl + c, t そして“o”の順に押すキーボードショートカットに
     ;; “KaTeX-out2uni”という関数を割り当てます。
     ;; 二つ以上関数を割り当てる場合は，上の added command の下のように改行するなりして並べます。
     ;;
     ;; ここから
    
     ((= c #\o) (KaTeX-out2uni))
     
     ;; ここまで
     )
    (and pre-ime (not (get-ime-mode)) (toggle-ime))))
(KaTeX-define-key #\t 'KaTeX-typeset-menu)
```

```
(defvar dvips-command "dvips -Ppdf ")
(defun KaTeX-dvi2ps ()
(interactive)
(KaTeX-save-buffers)
(KaTeX-call-command-on-file dvips-command KaTeX-typeset-buffer))
```

```
(defvar dvipdfm-command "dvipdfmx ")
(defun KaTeX-dvipdfm ()
(interactive)
(KaTeX-save-buffers)
(KaTeX-call-command-on-file dvipdfm-command KaTeX-typeset-buffer))
```

```
;;; 実際にコマンドを呼び出す関数を作ります。
;;; 先ほど，“KaTeX-out2uni”という関数に Ctrl + c, t, o というキーボードショートカットを
;;; 割り当てました。これは「out2uni （現在編集中のファイルから拡張子を抜いたファイル名）」という外部コマンドを呼び出す関数です。
;;; あとは次のテンプレートを参考に，見よう見まねで作ってください。
;;; 複数以上コマンドを割り当てるときは defvar から KaTeX-call-command-on-file の行まで追記します。
;;;
;;; (defvar 【適当な分かりやすい変数の名前。なんでもいい。】 "【呼び出すコマンド。最後のスペースをお忘れなく】")
;;; (defun 【先ほどキーボードショートカットに割り当てた関数名】 ()
;;; (interactive)
;;; (KaTeX-save-buffers)
;;; (KaTeX-call-command-on-file 【先ほど defvar... で記述した変数の名前】 KaTeX-typeset-buffer))
;;; 自作した各種コマンド起動関数，たとえば多言語関連で後述する UTF82TeX などを起動する関数
;;; などについてもこの下に記入します。
;;;
;;; ここから
```

```
(defvar out2uni-command "out2uni ")
(defun KaTeX-out2uni ()
  (interactive)
  (KaTeX-save-buffers)
  (KaTeX-call-command-on-file out2uni-command KaTeX-typeset-buffer))
```

```
;;; ここまで
```

なお，KaTeX には，同じマークアップ言語である HTML （正確には違うらしい）を
編集するための KaHTML というのも同梱してあります。exbrowserdll と browserex と
併用することで非常に便利な HTML 編集環境を作ることができます。

KaHTML についての記述は
[XyzzyWiki:QuickTour/ext/KaTeX #KaHTML の設定](http://xyzzy.s53.xrea.com/wiki/?QuickTour/ext/KaTeX#j73htme9)
に移転することにしました。そちらを是非ご参照いただければと思います。

## 対応括弧を見つけてみる {#xyparenl}

### parentag {#xyprtags}

基本的な命令のみで TeX 文書を書いている場合はいいのですが，XyMTeX などで命令の入れ子を多用する場合や，TeX のパッケージを作成する場合には，ある括弧がどの括弧に対応しているのかが分かりにくくなり，混乱してしまうことがあります。

そんなときは parentag をお試しください。閉じ括弧を書くと，対応する開き括弧にジャンプします。

netinstaller を用いる場合は
[雄猫のがらくた置き場 (xyzzy) \[Internet Archive\]](http://web.archive.org/web/20100624030528/http://osuneko.at.infoseek.co.jp/xyzzy/xyzzy.html)
([http://web.archive.org/web/20070830041740/http://osuneko.at.infoseek.co.jp/xyzzy/packages.l](http://web.archive.org/web/20070830041740/http://osuneko.at.infoseek.co.jp/xyzzy/packages.l))
より，parentag をインストールします。その上で，たとえば次のように記述します。

```
;;; parentag
(require "paren")
(turn-on-paren) ; 常に paren を使いたいとき
```

これで，対応する括弧がわかりやすくなりました。

### paren {#parenlsd}

paren は以下のサイトから入手可能です．

[xyzzyはすごいぜ#paren](http://kitaj.no-ip.com/xyzzy/#paren)

以下のように設定してください．

KaTeX をお使いの場合，~/.xyzzy などの初期設定ファイルには

```
;;; paren
(require "paren")
(turn-on-global-paren)
```

と書いておきます。さらに，KaTeX のインストール時に ~/.xyzzy などの初期設定ファイルに

```
(require "elisp")
```

などと書いたと思いますので，そこから後ろにでも，

```
;;; paren を KaTeXモードに対応
(add-hook 'elisp::katex-mode-hook #'(lambda()
  (set-syntax-match (syntax-table) #\( #\))
  (set-syntax-match (syntax-table) #\{ #\})
  (set-syntax-match (syntax-table) #\[ #\])
))
```

のように記述します。これでもう括弧で悩むことはなくなるはずです。

## 関連リンク {#h4cf9c4e}

- [Windows7 で xyyzzy で KaTeX で TeX ライフ。](http://blog.goo.ne.jp/kei_matsuura2007/e/8c5ccbde9291d5410956b1e94e10dfaa)
- [17 KaTeX-mode - Neko’s Business Law](http://d.hatena.ne.jp/momoume/20110103)
- [Windows7でLaTeX環境構築（Xyzzy，KaTeX，LaTeXmkなど）](http://ameblo.jp/tex-memo/entry-10476993822.html)
- [xyzzy - べぇのうぃき.new()](http://dolphing.qee.jp/pukiwiki_new/index.php?xyzzy)
- [xyzzy + KaTeX - chibacarの色々なメモ](http://d.hatena.ne.jp/chibacar/20080420/1225725981)
- [Ill communication  .xyzzy](http://lphyl.blog69.fc2.com/blog-entry-180.html)
- [xyzzy](http://leaf.dyndns.org/lumber/xyzzy.shtml)
    - [『xyzzy への花鳥のインストール』 (PDF)](http://leaf.dyndns.org/lumber/down/xyzzy/install_070203.pdf)
- [xyzzy + KaTeX - \[物理のかぎしっぽ\]](http://hooktail.org/computer/index.php?xyzzy%20%2B%20KaTeX)
- [XyzzyWiki:QuickTour/ext/KaTeX](http://xyzzy.s53.xrea.com/wiki/?QuickTour/ext/KaTeX)
- [katex - calyoMEMO](http://www.wikihouse.com/calyo/index.php?katex)
- [katex-kill-proc](http://raido.sakura.ne.jp/southly/lisp/ni/view.lisp?33a2536c21b7ead86ca4343ecece4446)
- [katex-autoload-dir](http://raido.sakura.ne.jp/southly/lisp/ni/view.lisp?4876687f1858d1f88578004a36293b60)
