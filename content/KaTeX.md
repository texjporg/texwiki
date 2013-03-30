---
title: "KaTeX"
url: "/KaTeX/"
date: 2011-09-29T04:00:35Z
pukiwiki: "KaTeX"
---

# KaTeX

[xyzzy](/xyzzy/) > KaTeX

```

```

## [KaTeX オリジナル版](http://web.archive.org/web/20100624030528/http://osuneko.at.infoseek.co.jp/xyzzy/xyzzy.html) &amp; [KaTeX カスタム版](https://github.com/mumurik/NAXEL/downloads) {#f8899a4c}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## KaTeX オリジナル版 &amp; KaTeX カスタム版とは {#o741d921}

### KaTeX オリジナル版とは {#ja14bd5c}

KaTeX (花鳥) オリジナル版は [xyzzy](/xyzzy/) の TeX モードです．<br>
GNU Emacs / XEmacs の TeX モードである [YaTeX](/YaTeX/) を xyzzy に移植したものです．<br>
[xyzzy-022](http://xyzzy-022.github.com/) (0.2.2 系列) と [xyzzy+](http://xyzzy.codeplex.com/) (Unicode 版) とオリジナルの xyzzy 0.2.1.173 以降で動作します．<br>
マルチフレーム版では動作しません．<br>
マルチフレーム版では KaTeX カスタム版を使用してください．<br> <!-- KaTeX (花鳥)，Emacs lisp 移植キット，parentag は GPL v2 で配布されていましたが，「iswebライト」が 2010年10月31日 をもってサービス提供を終了したため，公式サイトは消滅しました．~ -->

- [雄猫のがらくた置き場 (xyzzy) \[Internet Archive\]](http://web.archive.org/web/20100624030528/http://osuneko.at.infoseek.co.jp/xyzzy/xyzzy.html) (公式サイトの Web Archive)

<!-- #ref(http://web.archive.org/web/20060824011710/http://www.klavis.info/xyzzyscr.png,nolink,KaTeX を使った xyzzy の画面) -->

<!-- 公式サイトの Web Archive [[雄猫のがらくた置き場 (xyzzy) [Internet Archive]:http://web.archive.org/web/20100624030528/http://osuneko.at.infoseek.co.jp/xyzzy/xyzzy.html]] -->
<!-- (&ref(http://web.archive.org/web/20070830041740/http://osuneko.at.infoseek.co.jp/xyzzy/packages.l,http://web.archive.org/web/20070830041740/http://osuneko.at.infoseek.co.jp/xyzzy/packages.l);) -->
<!-- から KaTeX を選択してダウンロードできます．~ -->
<!-- Emacs Lisp 移植キットは KaTeX に含まれていますが個別にダウンロードすることもできます． -->

マルチフレーム版を使用している方は，[https://github.com/mumurik/NAXEL/downloads](https://github.com/mumurik/NAXEL/downloads) からダウンロードしたものを使ってください。（KaTeX の公式サイトから入手できるものとは厳密に言うと違うものですので注意してください）。<br>
マルチフレーム版では KaTeX オリジナル版を使用した場合，スタックオーバーフローのエラーが発生します．<br>

### KaTeX カスタム版とは {#m8b25abb}

KaTeX (花鳥) カスタム版は，マルチフレーム版専用の KaTeX です．<br>
KaTeX (花鳥) カスタム版のライセンスは GNU GPL v2 です．<br>
マルチフレーム版ではオリジナルの KaTeX を使用した場合，スタックオーバーフローのエラーが発生するので KaTeX カスタム版を使用してください．<br> <!-- マルチフレーム版専用の KaTeX カスタム版は，[[マルチフレーム版の開発サイトのダウンロードページ:https://bitbucket.org/mumurik/xyzzy/downloads]]からダウンロードできます．~ -->
マルチフレーム版専用の KaTeX カスタム版は，[https://github.com/mumurik/NAXEL/downloads](https://github.com/mumurik/NAXEL/downloads) からダウンロードできます．<br>
マルチフレーム版の開発サイトのダウンロードページに置かれているものは，マルチフレーム版での使用を想定して配布されているものです．<br>
マルチフレーム版でない xyzzy を使う方は，KaTeX オリジナル版を使ってください．<br>

### EmacsLisp移植キット/emacs.l カスタム版とは {#x6836fe0}

EmacsLisp移植キット/emacs.l カスタム版は，マルチフレーム版専用の EmacsLisp移植キット/emacs.l です．<br>
EmacsLisp移植キット/emacs.l カスタム版のライセンスは GNU GPL v2 です．<br> <!-- マルチフレーム版専用の EmacsLisp移植キット/emacs.l カスタム版は，[[マルチフレーム版の開発サイトのダウンロードページ:https://bitbucket.org/mumurik/xyzzy/downloads]]からダウンロードできます．~ -->
マルチフレーム版専用の EmacsLisp移植キット/emacs.l カスタム版は，[https://github.com/mumurik/NAXEL/downloads](https://github.com/mumurik/NAXEL/downloads) からダウンロードできます．<br>
マルチフレーム版の開発サイトのダウンロードページに置かれているものは，マルチフレーム版での使用を想定して配布されているものです．<br>
マルチフレーム版でない xyzzy を使う方は，KaTeX オリジナル版を使ってください．<br>

### License {#x302c417}

KaTeX Version 1.67.1.12 では readme.txt, katex.l, emacs.l, paren.l の License は GPL v2 で表記されています．<br>
KaTeX Version 1.67.1.11 では readme.txt の License はフリーウェア，katex.l, paren.l の License は GPL v2 で表記されています．<br>

#### readme.txt (KaTeX Version 1.67.1.12) {#hd1c97b7}

```
■ライセンス
基本的にGPL v2です。
詳細は、各ファイルを参照してください。
```

- katex.l, emacs.l, paren.l

```
;; This program is free software; you can redistribute it and/or modify
;; it under the terms of the GNU General Public License as published by
;; the Free Software Foundation; either version 2.

;; This program is distributed in the hope that it will be useful,
;; but WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;; GNU General Public License for more details.

;; You should have received a copy of the GNU General Public License
;; along with this program; see the file COPYING.  If not, write to the
;; Software Foundation Inc., 59 Temple Place - Suite 330, Boston, MA
;; 02111-1307, USA.
```

#### readme.txt (KaTeX Version 1.67.1.11) {#m379cf23}

```
■ライセンス
フリーウェアです。
```

- katex.l, paren.l

```
;; This program is free software; you can redistribute it and/or modify
;; it under the terms of the GNU General Public License as published by
;; the Free Software Foundation; either version 2.

;; This program is distributed in the hope that it will be useful,
;; but WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;; GNU General Public License for more details.

;; You should have received a copy of the GNU General Public License
;; along with this program; see the file COPYING.  If not, write to the
;; Software Foundation Inc., 59 Temple Place - Suite 330, Boston, MA
;; 02111-1307, USA.
```

### リリース情報 {#g9333ba6}

2008-10-11 KaTeX Version 1.67.1.12<br>

### スクリーンショット {#wa93a18b}

<img src="http://f.hatena.ne.jp/images/fotolife/k/ks88/20091123/20091123214305.jpg" alt="KaTeX">

<br>

***

<span style="color:Black;background-color:#33CC00;"><ins>　　<span style="color:White;"><strong>xyzzy 0.2.3.12@KaTeX</strong></span> 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#22BB00;"></ins>\[ <span style="color:White;"><strong>◛</strong></span> \]<ins></span><span style="color:Black;background-color:#22BB00;"></ins>\[ <span style="color:White;"><strong>▭</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<span style="color:Black;background-color:#DAE0FE;"><ins>　　ファイル(F)　 編集(E)　 検索(S)　 表示(V)　 ウィンドウ(W)　 ツール(T)　 KaTeX(K)　 ヘルプ(?)　　　　　　　　　　　</ins></span><br>

...<br>
<span style="color:White;background-color:Black;">&#x2d;----　<strong>katex.tex</strong>　(かてふ)　\[utf8n:crlf\]　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</span><br>

<br>

J)latex R)egion B)ibtex mk(I)ndex K)ill-latex P)review S)earch V)iewerr L)pr<br>

***

## KaTeX で TeX の命令をラクラク入力 {#k658955e}

TeX で命令を書いているときに，そうした命令を書いていくのがおっくうになることがありませんか？<br>
例えば箇条書きを書くときにいちいち \begin{itemize} と \end{itemize} を書いてくくり，さらに項目ごとにいちいち先頭に \item などと書かなきゃならない……面倒くさい，そう思うこともあるに違いありません。<br>
そんなときは KaTeX を使ってみましょう。<br>

KaTeX （花鳥）は便利なキーボードショートカットを多数有し，LaTeX の命令や環境の入力を素早く，なおかつ楽にしてくれるマクロです。<br>
[YaTeX](/YaTeX/) の xyzzy 版と言った方がわかりやすいかもしれません。<br>

xyzzy に標準添付されている winkey.l というマクロを使えば，KaTeX などのマクロとのキーボードショートカット上の共存が可能です。<br>
例えば，C-c はマウスによる選択［セレクション］時にはコピーになりますが，選択をしていない場合はコピーには割り当てられません。<br>
従って，マウスで選択さえしていなければ，KaTeX で頻繁に用いられるキー \[prefix\] とも問題なく共存できるのです。<br>

xyzzy は標準では Emacs 風のキーボードショートカットに
なっていますが，xyzzy 標準添付の Gates.l や winkey.l を用いることで
Windows 標準のキーボードショートカットが使えるようになります。<br>
しかしながら，
この二つは「普段は Gates.l 並みに多い Windows 標準のキーボードショートカットを
使いたいが，KaTeX などのマクロのキーボードショートカットも使いたい」という
要望を完全にはかなえてくれません。<br>
そのような方は，
大友さん作の[pavail.l](http://web.archive.org/web/20060824010604/http://www.klavis.info/pavail.l) というマクロをお使いください。<br>
インストールは，[pavail.l](http://web.archive.org/web/20060824010604/http://www.klavis.info/pavail.l) を
ダウンロードして xyzzy/site-lisp/ にコピーし，~/.xyzzy などの
初期設定ファイルで，

```
(load-library "pavail")
```

と記述するだけです。<br>
これで，xyzzy を快適に使うことができるように
なるかもしれません（私が使っている分には，不具合は今のところありません）。<br>
なお，他人様のコードを借用して組み合わせただけのつまらないマクロのため
まったく宣伝していません。
従って，まだ Netinstaller からはインストールできません。<br>
これくらいのことを考えている方は他にもいるはずなのにな……と思ったら
同じことを考えている方がいらっしゃいました。たぶん pavail.l と似た機能の
ものですが，次のところが元祖で pavail.l が後発になると思います。<br>

- [winkey2.l](http://www.uranus.dti.ne.jp/~shiro-/soft/xyzzy/keybind.html#windows)

xyzzy 標準のキーバインドと Windows キーバインドの切り替えには [toggle-gates](http://ohkubo.s53.xrea.com/xyzzy/index.html#toggle-gates) も便利です。

## 設定 {#pea65968}

環境変数 XYZZYHOME が設定されている場合，.xyzzy ファイルは [MinGW](/MinGW/) Shell (MSYS) や [Cygwin](/Cygwin/) Bash Shell から

```
$ cd $XYZZYHOME
$ touch .xyzzy
```

で作成可能です．

MinGW や Cygwin がインストールされていない場合は，環境変数 XYZZYHOME で設定されているフォルダーで，テキスト ドキュメントを新規作成し，メモ帳で

```
".xyzzy"
```

のようにダブルクォーテーションを付けて保存すれば作成可能です．

KaTeX のアーカイブを展開して，フォルダーの名前を katex に変更して katex フォルダーをコピーして xyzzy の site-lisp フォルダーにペーストします．<br>

***

```
C:.
└─xyzzy
    └─site-lisp
        └─katex
```

***

&#x7e;/.xyzzy または site-lisp フォルダーの siteinit.l ファイルに設定を記述します．<br>
siteinit.l に記述した場合は xyzzy.wxp などのダンプファイルを削除します．<br>
以下の設定では W32TeX, TeX Live に含まれている [ptex2pdf](http://www.tug.org/svn/texlive/trunk/Master/texmf-dist/scripts/ptex2pdf/ptex2pdf.lua?view=markup) を使用しています．<br>
pdfplatex.bat は W32TeX に含まれています．<br>
TeX Live を使用する場合は pdfplatex.bat が含まれていないので TeXworks の [pdfplatex.bat](</TeXworks/設定/Windows/#nb7beec9>) を使用してください．<br>
W32TeX の場合は latexmk の実行には [Strawberry Perl](http://strawberryperl.com/) が必要です．<br>

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
(setq elisp::KaTeX-use-AMS-LaTeX t)
(setq elisp::KaTeX-default-documentclass "jsarticle")
(setq elisp::tex-command "ptex2pdf -l -ot \"-kanji=utf8 -guess-input-enc -synctex=1\"")
;(setq elisp::tex-command "ptex2pdf -l -u -ot \"-kanji=utf8 -no-guess-input-enc -synctex=1\"")
;(setq elisp::tex-command "platex -guess-input-enc -kanji=utf8 -synctex=1")
;(setq elisp::tex-command "pdfplatex.bat")
;(setq elisp::tex-command "pdfplatex2.bat")
;(setq elisp::tex-command "uplatex -no-guess-input-enc -kanji=utf8 -synctex=1")
;(setq elisp::tex-command "pdfuplatex.bat")
;(setq elisp::tex-command "pdfuplatex2.bat")
;(setq elisp::tex-command "pdflatex -synctex=1")
;(setq elisp::tex-command "lualatex -synctex=1")
;(setq elisp::tex-command "luajitlatex -synctex=1")
;(setq elisp::tex-command "xelatex -synctex=1")
;(setq elisp::tex-command "latexmk")
;(setq elisp::tex-command "latexmk -e \"$latex=q/platex -kanji=utf8 -guess-input-enc -synctex=1/\" -e \"$bibtex=q/pbibtex -kanji=utf8/\" -e \"$makeindex=q/mendex -U/\" -e \"$dvipdf=q/dvipdfmx %O -o %D %S/\" -norc -gg -pdfdvi")
;(setq elisp::tex-command "latexmk -e \"$latex=q/platex -kanji=utf8 -guess-input-enc -synctex=1/\" -e \"$bibtex=q/pbibtex -kanji=utf8/\" -e \"$makeindex=q/mendex -U/\" -e \"$dvips=q/dvips %O -z -f %S | convbkmk -g > %D/\" -e \"$ps2pdf=q/ps2pdf.bat %O %S %D/\" -norc -gg -pdfps")
;(setq elisp::tex-command "latexmk -e \"$latex=q/uplatex -kanji=utf8 -no-guess-input-enc -synctex=1/\" -e \"$bibtex=q/upbibtex/\" -e \"$makeindex=q/mendex -U/\" -e \"$dvipdf=q/dvipdfmx %O -o %D %S/\" -norc -gg -pdfdvi")
;(setq elisp::tex-command "latexmk -e \"$latex=q/uplatex -kanji=utf8 -no-guess-input-enc -synctex=1/\" -e \"$bibtex=q/upbibtex/\" -e \"$makeindex=q/mendex -U/\" -e \"$dvips=q/dvips %O -z -f %S | convbkmk -u > %D/\" -e \"$ps2pdf=q/ps2pdf.bat %O %S %D/\" -norc -gg -pdfps")
;(setq elisp::tex-command "latexmk -e \"$pdflatex=q/pdflatex -synctex=1/\" -e \"$bibtex=q/bibtex/\" -e \"$makeindex=q/makeindex/\" -norc -gg -pdf")
;(setq elisp::tex-command "latexmk -e \"$pdflatex=q/lualatex -synctex=1/\" -e \"$bibtex=q/bibtexu/\" -e \"$makeindex=q/texindy/\" -norc -gg -pdf")
;(setq elisp::tex-command "latexmk -e \"$pdflatex=q/luajitlatex -synctex=1/\" -e \"$bibtex=q/bibtexu/\" -e \"$makeindex=q/texindy/\" -norc -gg -pdf")
;(setq elisp::tex-command "latexmk -e \"$pdflatex=q/xelatex -synctex=1/\" -e \"$bibtex=q/bibtexu/\" -e \"$makeindex=q/texindy/\" -norc -gg -xelatex")
(setq elisp::bibtex-command (cond ((string-match "uplatex\\|-u" elisp::tex-command) "upbibtex")
                                  ((string-match "platex" elisp::tex-command) "pbibtex -kanji=utf8")
                                  ((string-match "lualatex\\|luajitlatex\\|xelatex" elisp::tex-command) "bibtexu")
                                  ((string-match "pdflatex\\|latex" elisp::tex-command) "bibtex")
                                  (t "pbibtex -kanji=utf8")))
(setq elisp::makeindex-command (cond ((string-match "uplatex\\|-u" elisp::tex-command) "mendex -U")
                                     ((string-match "platex" elisp::tex-command) "mendex -U")
                                     ((string-match "lualatex\\|luajitlatex\\|xelatex" elisp::tex-command) "texindy")
                                     ((string-match "pdflatex\\|latex" elisp::tex-command) "makeindex")
                                     (t "mendex -U")))
(setq elisp::dviprint-command-format (cond ((string-match "pdf\\|lua\\|xe" elisp::tex-command) "pdfopen --rxi --file %s.pdf")
                                           (t "cmd /c tasklist /fi \"IMAGENAME eq AcroRd32.exe\" /nh | findstr \"AcroRd32.exe\" > nul && pdfopen --rxi --file %s.pdf && pdfclose --rxi --file %s.pdf & dvipdfmx %s && pdfopen --rxi --file %s.pdf")))
(if (file-exist-p "C:/w32tex/dviout/dviout.exe")
    (setq elisp::dvi2-command "C:/w32tex/dviout/dviout -1")
  (setq elisp::dvi2-command "C:/texlive/2012/tlpkg/dviout/dviout -1"))
(setq elisp::*KaTeX-use-toolbar* t)
(set-extended-key-translate-table exkey-M-return #\M-RET)

(defun user::katex-mode ()
  (interactive)
  (elisp::katex-mode))

(defun texworks-preview ()
  (interactive)
  (let* ((tex-file (get-buffer-file-name))
         (pdf-file (concat (el::KaTeX-get-preview-file-name) ".pdf"))
         (cmd "texworks")
         (args))
    (setq args pdf-file)
    (message (concat cmd " " args))
    (call-process (concat cmd " " args)
                  :exec-directory (directory-namestring tex-file))))

(add-hook 'elisp::katex-mode-hook
          #'(lambda ()
              (define-key elisp::*KaTeX-mode-map* '(#\C-c #\p) 'texworks-preview)))

(defun sumatrapdf-forward-search ()
  (interactive)
  (let* ((tex-file (get-buffer-file-name))
         (pdf-file (concat (el::KaTeX-get-preview-file-name) ".pdf"))
         (line (format nil "~D" (current-line-number)))
         (cmd "rundll32 shell32,ShellExec_RunDLL SumatraPDF")
         (args))
    (setq args (concat "-reuse-instance \"" pdf-file "\" -forward-search \"" tex-file "\" " line))
    (message (concat cmd " " args))
    (call-process (concat cmd " " args)
                  :exec-directory (directory-namestring tex-file))))

(add-hook 'elisp::katex-mode-hook
          #'(lambda ()
              (define-key elisp::*KaTeX-mode-map* '(#\C-c #\s) 'sumatrapdf-forward-search)))

(add-hook 'elisp::katex-mode-hook
          #'(lambda ()
              (auto-fill-mode nil)))
```

***

## 使い方 {#ycbb077d}

### タイプセット・プレビュー {#q3bf6923}

(setq elisp::KaTeX-inhibit-prefix-letter t) を使用してください．<br>
(setq elisp::KaTeX-inhibit-prefix-letter nil) は，非推奨 (deprecated) です．<br>

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#3C0;text-align:center">メニュー [KaTeX(K)]</th><th style="color:#FFF;background-color:#3C0;text-align:center">入力 (setq elisp::KaTeX-inhibit-prefix-letter t)</th><th style="color:#FFF;background-color:#3C0;text-align:center">機能</th></tr>
> <tr><td>Process menu -&gt; LaTeX</td><td>C-c C-t j</td><td>タイプセット</td></tr>
> <tr><td>Process menu -&gt; BibTeX</td><td>C-c C-t b</td><td>BibTeX</td></tr>
> <tr><td>Process menu -&gt; makeindex</td><td>C-c C-t i</td><td>MakeIndex</td></tr>
> <tr><td>Process menu -&gt; Preview</td><td>C-c C-t p</td><td>プレビュー</td></tr>
> <tr><td></td><td>C-c C-t l</td><td>LPR (印刷)</td></tr>
> <tr><td></td><td>C-c '</td><td>エラー行にジャンプ</td></tr>
> </tbody>
> </table>
>

### 補完 {#m9a1797e}

(setq elisp::KaTeX-inhibit-prefix-letter t) を使用してください．<br>
(setq elisp::KaTeX-inhibit-prefix-letter nil) は，非推奨 (deprecated) です．<br>

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#3C0;text-align:center">メニュー [KaTeX(K)]</th><th style="color:#FFF;background-color:#3C0;text-align:center">入力 (setq elisp::KaTeX-inhibit-prefix-letter t)</th><th style="color:#FFF;background-color:#3C0;text-align:center">補完</th></tr>
> <tr><td>Environment -&gt; リストから選択</td><td>C-c C-b SPC</td><td>begin 型補完</td></tr>
> <tr><td>Environment region -&gt; リストから選択</td><td>C-c B SPC</td><td>指定領域に対して begin 型補完</td></tr>
> <tr><td>Section type -&gt; リストから選択</td><td>C-c C-s</td><td>section 型補完</td></tr>
> <tr><td>Section type region -&gt; リストから選択</td><td>C-c S</td><td>指定領域に対して section 型補完</td></tr>
> <tr><td>Insert end environment</td><td>C-c C-e</td><td>end 補完</td></tr>
> </tbody>
> </table>
>

### タイプセット方式の変更 {#z61cfd29}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#3C0;text-align:center">入力</th><th style="color:#FFF;background-color:#3C0;text-align:center">タイプセット方式</th></tr>
> <tr><td>M-x set-variable RET elisp::tex-command RET latexmk RET</td><td>latexmk</td></tr>
> <tr><td>M-x set-variable RET elisp::tex-command RET platex -synctex=1 RET</td><td>platex</td></tr>
> <tr><td>M-x set-variable RET elisp::tex-command RET pdfplatex RET</td><td>pdfplatex</td></tr>
> <tr><td>M-x set-variable RET elisp::tex-command RET pdfplatex2 RET</td><td>pdfplatex2</td></tr>
> <tr><td>M-x set-variable RET elisp::tex-command RET uplatex -synctex=1 RET</td><td>uplatex</td></tr>
> <tr><td>M-x set-variable RET elisp::tex-command RET pdfuplatex RET</td><td>pdfuplatex</td></tr>
> <tr><td>M-x set-variable RET elisp::tex-command RET pdfuplatex2 RET</td><td>pdfuplatex2</td></tr>
> <tr><td>M-x set-variable RET elisp::tex-command RET pdflatex -synctex=1 RET</td><td>pdflatex</td></tr>
> <tr><td>M-x set-variable RET elisp::tex-command RET lualatex -synctex=1 RET</td><td>lualatex</td></tr>
> <tr><td>M-x set-variable RET elisp::tex-command RET luajitlatex -synctex=1 RET</td><td>luajitlatex</td></tr>
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

一つだけ便利な技を紹介しておきましょう。<br>
ある領域の行の先頭に一気に “%” を付け加え，コメントアウトしたいときは，該当領域をリージョン指定し，Ctrl + c と入力して “>” を入力します (C-c >)。<br>
逆に，“%” を外したいときはリージョン指定をした上で Ctrl + c と入力して “&lt;” を入力します (C-c &lt;)。<br>
「リージョン」というのは，指定したい範囲の起点で Ctrl + SPACE キー (C-SPC) を押し，その後で起点からカーソルを移動した場所までの領域を指します。<br>
見た目には何も起こらないように思えますが，実際はきちんと範囲になっていたりするのです。<br>
そして，リージョンの終点において，先ほどの C-c > や C-c &lt; を実行すればよいのです。<br>
（よく分からない方は，[Emacs におけるリージョン](http://cns-guide.sfc.keio.ac.jp/2004/6/2/4.html)と仕組みは同じですので，そちらを参照していただければと思います。）

## TeXworks との連携 {#lcdfc160}

[TeXworks#組み込みの PDF ビューアに日本語を表示させる](/TeXworks/#t5313ebc) を参照してフォントの埋め込みの設定を行います．<br>

xyzzy から TeXworks で PDF ファイルをプレビューできます．<br>
KaTeX を使う場合は次のような文字列を ~/.xyzzy などの初期設定ファイルに書いておきます．<br>

***

```
(defun texworks-preview ()
  (interactive)
  (let* ((tex-file (get-buffer-file-name))
         (pdf-file (concat (el::KaTeX-get-preview-file-name) ".pdf"))
         (cmd "texworks")
         (args))
    (setq args pdf-file)
    (message (concat cmd " " args))
    (call-process (concat cmd " " args)
                  :exec-directory (directory-namestring tex-file))))

(add-hook 'elisp::katex-mode-hook
          #'(lambda ()
              (define-key elisp::*KaTeX-mode-map* '(#\C-c #\p) 'texworks-preview)))
```

***

C-c p または M-x texworks-preview （Alt を押しながら x を押し，“texworks-preview” と入力して Enterキーを押す）とすることで，PDF ファイルを開いてくれるはずです．<br>
頻繁に使う方はキーボードショートカット（キーバインド）を定義したり自前でツールバー・ツールバーに割り当てる関数を作成しておくことを勧めます．<br>

## SumatraPDF との連携 {#y959d8e3}

&#x7e;/.xyzzy などの初期設定ファイルに，

```
(setq elisp::tex-command "ptex2pdf -l -ot \"-kanji=utf8 -guess-input-enc -synctex=1\"")
```

または

```
(setq elisp::tex-command "ptex2pdf -l -u -ot \"-kanji=utf8 -no-guess-input-enc -synctex=1\"")
```

と書いておきます。

### forward search (SumatraPDF を前面に表示したい場合) {#m08e4ed8}

xyzzy から SumatraPDF の該当箇所にジャンプすることが可能です。<br>
KaTeX を使う場合は次のような文字列を ~/.xyzzy などの初期設定ファイルに書いておきます．<br>

***

```
(defun sumatrapdf-forward-search ()
  (interactive)
  (let* ((tex-file (get-buffer-file-name))
         (pdf-file (concat (el::KaTeX-get-preview-file-name) ".pdf"))
         (line (format nil "~D" (current-line-number)))
         (cmd "rundll32 shell32,ShellExec_RunDLL SumatraPDF")
         (args))
    (setq args (concat "-reuse-instance \"" pdf-file "\" -forward-search \"" tex-file "\" " line))
    (message (concat cmd " " args))
    (call-process (concat cmd " " args)
                  :exec-directory (directory-namestring tex-file))))

(add-hook 'elisp::katex-mode-hook
          #'(lambda ()
              (define-key elisp::*KaTeX-mode-map* '(#\C-c #\s) 'sumatrapdf-forward-search)))
```

***

すると，C-c s または M-x sumatrapdf-forward-search （Alt を押しながら x を押し，“sumatrapdf-forward-search” と入力して Enterキーを押す）とすることで，現在 TeX ファイル中でカーソルのある箇所に相当する PDF ファイルの位置を開いてくれるはずです．<br>
頻繁に使う方はキーボードショートカット（キーバインド）を定義したり自前でツールバー・ツールバーに割り当てる関数を作成しておくことを勧めます．<br>

### forward search (SumatraPDF を前面に表示したくない場合) {#n9aa887a}

[SumatraPDF#fwdsumatrapdf.exe](/SumatraPDF/#n8da77e2) の fwdsumatrapdf.exe を使用します．<br>

xyzzy から SumatraPDF の該当箇所にジャンプすることが可能です。<br>
KaTeX を使う場合は次のような文字列を ~/.xyzzy などの初期設定ファイルに書いておきます．<br>

***

```
(defun sumatrapdf-forward-search ()
  (interactive)
  (let* ((tex-file (get-buffer-file-name))
         (pdf-file (concat (el::KaTeX-get-preview-file-name) ".pdf")))
    (call-process (concat "fwdsumatrapdf" " " pdf-file " " tex-file " "
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

## bibtex-mode, RefTeX for xyzzy {#x70fba46}

- [bibtex-mode \[Internet Archive\]](http://web.archive.org/web/20080923160004/http://f55.aaa.livedoor.jp/~ynomura/xyzzy/#bibtex-mode)
- [RefTeX for xyzzy \[Internet Archive\]](http://web.archive.org/web/20080923160004/http://f55.aaa.livedoor.jp/~ynomura/xyzzy/#reftex)

## 対応括弧を見つけてみる {#xyparenl}

### parentag {#xyprtags}

基本的な命令のみで TeX 文書を書いている場合はいいのですが，XyMTeX などで命令の入れ子を多用する場合や，TeX のパッケージを作成する場合には，ある括弧がどの括弧に対応しているのかが分かりにくくなり，混乱してしまうことがあります。<br>
そんなときは parentag をお試しください。閉じ括弧を書くと，対応する開き括弧にジャンプします。<br>

netinstaller を用いる場合は
[雄猫のがらくた置き場 (xyzzy) \[Internet Archive\]](http://web.archive.org/web/20100624030528/http://osuneko.at.infoseek.co.jp/xyzzy/xyzzy.html)
([http://web.archive.org/web/20070830041740/http://osuneko.at.infoseek.co.jp/xyzzy/packages.l](http://web.archive.org/web/20070830041740/http://osuneko.at.infoseek.co.jp/xyzzy/packages.l))
より，parentag をインストールします。<br>
その上で，たとえば次のように記述します。<br>

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

のように記述します。これでもう括弧で悩むことはなくなるはずです。<br>

## 動的補完でらくらく入力 {#xydb6f8d}

[上の xyzzy の画像 \[Internet Archive\]](http://web.archive.org/web/20060824011710/http://www.klavis.info/xyzzyscr.png)で，\text と入力した後に小さなメニューを出している様子が気にかかった方もいらっしゃるでしょう。
これは，動的補完 (Dabbrev) という xyzzy 標準の機能を利用しているのです。

特に何かインストールする必要はありません。texkey というファイル
（[キーワードファイルのサンプル \[Internet Archive\]](http://web.archive.org/web/20060824011428/http://www.klavis.info/texkey)も
示しておきます）に TeX の命令などをまとめておき，
これをホームディレクトリ（~/.xyzzy のあるフォルダー）に置きます。~/.xyzzy に
[XyzzyWiki:質問箱/112](http://xyzzy.s53.xrea.com/wiki/?%BC%C1%CC%E4%C8%A2/112)
（ご教示くださった方々に感謝）を参考に，

```
(in-package "elisp")
(require "katex")
```

の後ろ（書いていない場合は追加）に

```
;;; keyword list
(defvar *my-latex-completion-list* nil)
(defvar *my-latex-popup-completion-list* :always)
(defvar *my-latex-keyword-hash-table* nil)
(defvar *my-latex-keyword-file* "~/texkey")

(defun my-latex-completion ()
  (interactive)
  (or *my-latex-completion-list*
      (setq *my-latex-completion-list* (make-list-from-keyword-table *my-latex-keyword-hash-table*))
      (return-from my-latex-completion nil))
  (let ((opoint (point)))
    ;(when (skip-syntax-spec-backward "w_.")
    (when (skip-syntax-spec-backward "w_.@")
      (let ((from (point)))
        (goto-char opoint)
        (do-completion from opoint :list *my-latex-completion-list*
                      nil nil *my-latex-popup-completion-list*)))))

(defun my-latex-load-keyword ()
  (and *my-latex-keyword-file*
       (null *my-latex-keyword-hash-table*)
       (setq *my-latex-keyword-hash-table*
             (load-keyword-file *my-latex-keyword-file* t))))

(add-hook 'elisp::katex-mode-hook
         #'(lambda ()
             (my-latex-load-keyword)
             (define-key elisp::*KaTeX-mode-map* #\C-. 'my-latex-completion)))
```

などと記入しておきます。こうしておくと，たとえば \docu などと TeX ソース編集中に書きかけたときに Ctrl + . と入力する (C-.) ことで，\documentclass などのリストが自動的に出てきます。
矢印キーの上下などで選択し，Enter を押すと補完されます。

2005年11月4日9時くらいまでの記述は paren などの設定との共存ができませんでしたが，上記のとおりの記述であれば大丈夫です。
前の設定を書いた方は，申し訳ありませんが前の設定を消して上のものに差し替えてください。

## clickable-uri と小物マクロによる便利技 {#xyclickab}

URI をダブルクリックすると自動的に Web ブラウザが起動するマクロですが，
これを応用するとダブルクリックすることで \includegraphics で指定した
画像ファイルをダブルクリックで開くことができるようになります。xyzzy で
Emacs の preview-latex マクロみたいなことはできませんが，
この機能とその次に述べる，数式環境のみを自動タイプセットする
小物マクロを併用することで，いくぶんやりやすくなるでしょう。

[雑記帖](http://ohkubo.s53.xrea.com/)
([http://ohkubo.s53.xrea.com/xyzzy/packages.l](http://ohkubo.s53.xrea.com/xyzzy/packages.l))
から NetInstaller でインストールしましょう。そして，

```
(push "\\\\includegraphics\\\[*.*\\\]*{.+}"
      *clickable-uri-special-regexp-list*)
(push (cons "^\\\\includegraphics\\\[*.*\\\]*{\\(.+\\)}"
	    #'(lambda (uri)
		(when (string-matchp "\\\\includegraphics\\\[*.*\\\]*{\\(.+\\)}" uri)
		  (goto-char (match-beginning 0))
		  (set-mark-command)
		  (goto-char (match-end 0))
		  (el::KaTeX-typeset-region)
		  (call-interactively 'el::KaTeX-preview)
		  )))
      *clickable-uri-open-command-alist*)
(clickable-uri-set-regexp)
```

と記述しておくことで，\includegraphics{test.jpg} などと書かれている部分をダブルクリックすることで，test.jpg を開けるようになります。

なお次のような関数を定義しておけば，“$” や “\\\[” で囲まれた数式環境を Shift + Ctrl + 左クリック することで，自動的にその領域だけタイプセット・プレビューしてくれます。
タイプセットが終わった後にミニバッファ（下の1行くらいの領域）で2回 Enter を押しておく必要があるでしょう。
（デフォルトの設定では，dviout に PATH を通しておかないと最初に Enter を押す前に dviout のフルパスを指定する羽目になると思います。）

***

```
(defun preview-math-env ()
  (interactive)
  (save-excursion
    (if (and (el::KaTeX-in-math-mode-p)
	     (scan-buffer "\\$\\|begin\\|\\[" :reverse t :regexp t)
	     (cond ((string= (match-string 0) "$")
		    (set-mark) ; はじめの“$”でマークセット
		    (scan-buffer "$" :no-dup t :tail t)) ; 終わりの“$”へポイント移動
		   ((string= (match-string 0) "\[") ;
		    (backward-char)
		    (set-mark) ; はじめの“\[”でマークセット
		    (scan-buffer "\\\]" :no-dup t :tail t)) ; 終わりの“\]”へポイント移動
		   )
	     )
	(progn (el::KaTeX-typeset-region)
	  (call-interactively 'el::KaTeX-preview))
      (message "数式がみつかりません。")
      )))

(define-key elisp::*KaTeX-mode-map* '(#\S-C-LBtnDown) 'preview-math-env)
```

***

応用すれば，equation 環境などでも同じことができそうです。

## template-insert で雛形挿入 {#xyki6f8d}

LaTeX のファイルを新たに開いたときに，自動的に雛形となるファイルが挿入されると
非常に便利でしょう。template-insert はそれを実現するためのマクロです。

[kia's website](http://www.geocities.jp/kiaswebsite/xyzzy/)
([http://www.geocities.jp/kiaswebsite/xyzzy/packages.txt](http://www.geocities.jp/kiaswebsite/xyzzy/packages.txt))
を追加し，template-insert を選びます。あとは ~/.xyzzy のあるフォルダに
insert というフォルダを新たに作り，textemplate.tex という雛形ファイル（例えば

```
\documentclass{jsarticle}
%\documentclass{jarticle}
\begin{document}

\end{document}
```

とする）を作っておき，~/.xyzzy などに

```
(require "template-insert")
(use-package 'template-insert)
(setq *template-insert-directory* "~/insert/")
(setq *template-insert-alist* '((elisp::katex-mode . "textemplate.tex")))
```

と記述します。すると，新たに TeX ソースファイルを作成し，このときに KaTeX を自動読み込みする設定になっていると，雛形ファイル textemplate.tex の内容を自動的に挿入するかどうか聞いてきます。入れたい場合は y と答えます。

## Unicode で多言語 TeX 文書 {#zf0dbbe2}

### Unicode で多言語 TeX 文書を作ってみる（ヨーロッパ言語・ロシア語・ギリシア語編） {#xyutff8d}

中国語・韓國語も含め，多言語設定に関しては
『[入門 xyzzy](http://ssl.ohmsha.co.jp/cgi-bin/menu.cgi?ISBN=4-274-06600-2)』
に詳しいので，そちらもご覧ください。

冒頭で「xyzzy は Unicode を扱える」と申しました。
ここで，「pTeX は Unicode に対応していないのでは？」と思った方も
いらっしゃるかもしれません。しかし，現在では各種フィルタソフトがありますので，
それと併用することで Unicode のまま編集しても大丈夫になりました。
また，Unicode のまま編集することで，Aspell によるスペルチェックも
（いったん ISO-8859-\* エンコーディングに変換する必要はありますが）できます。

フランス語やドイツ語などの Latin-1, Latin-2 文字，ギリシア文字，
ロシア語のキリル文字などについては[安田功さん](http://yasuda.homeip.net/)が
[Utf82TeX](http://yasuda.homeip.net/tex/utf82tex.html) を
公開していますので，これを用いればよさそうです。

さて，ここで “Babel” という言葉を聞いたことのない方は
[TeXWiki:新 pTeX と Babel](</新 pTeX とBabel/>) をご覧ください。
特に欧文・ロシア語・ギリシア語を扱う際には実に美しい出力を得ることができます。

また，Perl をインストールしていない方は
[Strawberry Perl](http://strawberryperl.com/)
をインストールしておきましょう。otfcjk のインストールの際にも必要になります。

まず，[Utf82TeX](http://yasuda.homeip.net/tex/utf82tex.html) の[ダウンロード・サービス](http://yasuda.homeip.net/dl/dl.html#g)から utf82tex-\*.zip をダウンロードし，展開（解凍）します。展開したディレクトリ内の utf82tex というファイルをテキストエディタ（もちろんここでは xyzzy）で開きますと，先頭の行に

```
#!/usr/bin/perl
```

と書いてありますので，これを環境に合わせて（例えば Strawberry Perl をデフォルトのままインストールしたなら

```
#!/strawberry/perl/bin/perl
```

と書く）に直しておきます。

あとは Utf82TeX を PATH の通ったディレクトリ
（例えば TeX のインストールディレクトリ内にある
実行ファイルディレクトリ C:\w32tex\bin など）にコピーします。
ついでに TeX 実行ファイルのインストール先であれば
そのディレクトリ内にある perlexec.exe を utf82tex.exe などに
コピーしておきます。（こうしておくとコマンド実行時に便利ですので。）

では，実際に xyzzy で Unicode 文書を書いてみましょう。
新規作成した後にすぐに ［ファイル］ → ［名前をつけて保存］ で，
ダイアログの「エンコーディング」に \[Unicode (UTF-8)\] を選んで保存します
（UTF-16 などの他の Unicode エンコーディングは選ばないように注意！）。

さまざまな言語の入力ソフト（インストール方法は [Google](http://www.google.co.jp/) から調べましょう）を併用して書いていきます。

まずは入力ソフト（インプットメソッド）のインストールです。参考までに，[フランス語入力](http://wm.tamagawa.ac.jp/manual/Bb/user/FirstStepMyPC_ja_JP/appendix/FirstStepMyPC_c14appendix_12.htm)，[ドイツ語入力](http://wm.tamagawa.ac.jp/manual/Bb/user/FirstStepMyPC_ja_JP/appendix/FirstStepMyPC_c14appendix_13.htm)，[スペイン語入力](http://wm.tamagawa.ac.jp/manual/Bb/user/FirstStepMyPC_ja_JP/appendix/FirstStepMyPC_c14appendix_14.htm)，[ギリシャ語入力](http://homepage1.nifty.com/suzuri/000/pc3.html)，[ロシア語入力](http://www.l.u-tokyo.ac.jp/~slav/05info/winrus/)に関するサイトを挙げておきます。
次に，xyzzy 側の設定です。[ギリシャ語を xyzzy から入力できるようにするための設定](http://homepage1.nifty.com/suzuri/000/xyzzy.html#greek)を参考に，使いたい言語に関して同様の設定を行います。

準備ができたら，[Utf82TeX のページの入力例](http://yasuda.homeip.net/tex/utf82tex.html)も参考に書いていきます。

さて，いろいろ頑張って一通り書き終わりました。このファイルを utftest8.tex とします。ここで Utf82TeX の出番です。コマンドラインから

```
utf82tex <utftest8.tex >utftest8-utex.tex
```

を実行します。すると，utftest8.tex を変換した結果を utf8out.tex に書き出します。

xyzzy から実行したい方は次を ~/.xyzzy などの初期設定ファイルに書いておきます。
Alt + x とした上で “exec-utf82tex” と入力し，Enterキーを押して起動します。前に述べた KaTeX の設定と組み合わせることを勧めます。

```
(defun exec-utf82tex ()
  (interactive)
  (let ((in-file (file-namestring (get-buffer-file-name)))
	(out-file (concat (pathname-name (get-buffer-file-name))
			  "-utex."
			  (pathname-type (get-buffer-file-name))))
	(dir (directory-namestring (get-buffer-file-name)))
	)
    (call-process "utf82tex"
		  :input in-file
		  :output out-file
		  :exec-directory dir
		  :wait t)
    (split-window)
    (other-window)
    (find-file (concat dir out-file))
    ;; 文字コードも自動的に Shift_JIS にしたい場合は
    ;; 下の行の一番左の;を削除（コメントアウト）する。
    ;(set-buffer-fileio-encoding *encoding-sjis*)
    ))
```

書き出した utftest8-utf.tex は UTF-8 のままなので，［ファイル］ → ［名前をつけて保存］ より，「エンコーディング」を ［日本語(Shift_JIS)］ に直して保存しなおします。（上の関数で

```
;(set-buffer-fileio-encoding *encoding-sjis*)
```

の行をコメントアウトしている場合は上記のエンコーディング変換は不要です。）

あとは pLaTeX あるいは LaTeX にかけるだけです。（「そういえばロシア語・ギリシア語を使う環境をまだそろえていなかった」という方は [TeXWiki:新 pTeX と Babel](</新 pTeX とBabel/>)
を是非ご覧ください。）

### Unicode で多言語 TeX 文書を作ってみる（中国語・韓國語編） {#xyutfasd}

- [pTeXと多言語処理](</pTeXと多言語処理/#cjkinqd>) を参照。

では，実際に xyzzy で Unicode 文書を書いてみましょう。新規作成した後に
すぐに ［ファイル］ → ［名前をつけて保存］ で，
ダイアログの「エンコーディング」に \[Unicode (UTF-8)\] を選んで保存します
（UTF-16 などの他の Unicode エンコーディングは選ばないように注意！）。

さて，TeX ソースに中国語・韓國語を入力するためには
設定が必要です。
「[中国語・韓国語を入力したい](http://www.tjf.or.jp/ringo/migaku/post-22.php)」 <!-- ，「[[Windows 系コンピュータで使う中国語・韓国語>http://www2.yamanashi-ken.ac.jp/~yohnishi/pcinfo/windows_tips/international/win-cn-kr.html]]」， --> <!-- 「[[Windowsで中国語・韓国語を扱う方法>http://www.rglk.com/regal/mame-chisiki-j.html]]」 -->
を参考に設定してください。 <!-- xyzzy は Global IME による入力に --> <!-- 対応していますので，Windows 98 などの方は --> <!-- Global IME をインストールしておきましょう。 -->

xyzzy 側での設定ですが，メニューバーより ［ツール］ → ［共通設定］ より ［フォント］タブを選び，それぞれの言語の文字セットについて，フォントなどを適切に対応付けておきます。
（どのフォントを使うのか分からない場合は，Internet Explorer より ［ツール］ → ［インターネットオプション］ より，［全般］タブを選び，［フォント］ボタンをクリックして調べます。それぞれの言語セットの ［テキスト形式フォント］ が xyzzy で使うべきフォントです。）

<!-- Global IME を用いる Windows 98 などのユーザーは ［ツール］ → ［共通設定］ より ［いろいろ］タブを選び，［Global IMEを使う］ にチェックを入れておきます。 -->

otfcjk での書き方は
[Kino さんの入力例](http://www2.odn.ne.jp/alt-quinon/files/ptex/otfcjk/)の
WhatsUniCJK-tex.zip などを参考にしてください。
（Mac OS X を想定した書き方のため，そのままコンパイルはできません。

```
\usepackage[ttf]{mlotf}
```

の “\[ttf\]” を抜いて

```
\usepackage{mlotf}
```

に直すことで，［不具合はあるものの］とりあえずコンパイルは通ります。）
使い方は非常に簡単で，繁體字（正體字）は「繁体中文」環境，
簡化字（&#x7b80;化字，簡体字）は「簡体中文」環境，
ハングル（&#xd55c;&#xae00;）は「ハングル」環境で括るだけです。

自分で書いてみたい方は次のような自己紹介の文章でも良いでしょう。
このファイルを “cjkintro.tex” とします。

***

```
%%% -*- mode: katex; Coding: utf-8; Encoding: UTF-8 -*-
\documentclass{jsarticle}
%\documentclass{jarticle}
\usepackage[multi]{otf}
\usepackage{mlotf}

\begin{document}
\section{Japanese}
こんにちは。私の名前は\textbf{東大}です。よろしくお願いします。

こんにちは。私の名前は\textbf{ひがしひろし}です。よろしくお願いします。

\section{Chinese}
\subsection{Simplified Chinese}
%%% 簡化字中国語（中国大陸などで用いられる）の場合は
%%% 「簡体中文」環境を用います。
\begin{簡体中文}
你好。说\textbf{东大}。请多关照。
\end{簡体中文}

\subsection{Traditional Chinese}
%%% 繁體字中国語（臺灣［台湾］・香港などで用いられる）の場合は
%%% 「繁体中文」環境を用います。
\begin{繁体中文}
你好。說\textbf{東大}。請多關照。
\end{繁体中文}

\section{Korean}
%%% 韓國語・朝鮮語の場合は「ハングル」環境を用います。
\begin{ハングル}
안녕하세요.\textbf{히가시 히로시}라고 합니다.잘 부탁드립니다.
\end{ハングル}

\end{document}
```

***

コマンドラインより次のコマンドで変換します。

```
utf8toutf cjkintro.tex cjkintro-sjis.tex
```

xyzzy から実行したい方は次を ~/.xyzzy などの初期設定ファイルに書いておきます。Alt + x とした上で “exec-utf8toutf” と入力し，Enterキーを押して起動します。
前に述べた KaTeX の設定と組み合わせることを勧めます。

```
(defun exec-utf8toutf ()
  (interactive)
  (let ((in-file (file-namestring (get-buffer-file-name)))
	(out-file (concat (pathname-name (get-buffer-file-name))
			  "-sjis."
			  (pathname-type (get-buffer-file-name))))
	(dir (directory-namestring (get-buffer-file-name)))
	)
    (call-process "utf8toutf"
		  :input in-file
		  :output out-file
		  :exec-directory dir
		  :wait t)
    (split-window)
    (other-window)
    (find-file (concat dir out-file))

    ))
```

これで変換され，文字コードも自動的に Shift_JIS になりました。
生成したファイル名はここでは “cjkintro-sjis.tex” です
（ちなみに Utf82TeX も併用したい場合には
先に Utf82TeX で処理しておくのがコツです）。

あとはいつものように platex などで処理し，PDF 文書で確認しましょう。

```
platex cjkintro-sjis.tex
dvipdfmx cjkintro-sjis.dvi
```

または，

```
platex cjkintro-sjis.tex
dvips cjkintro-sjis.dvi
ps2pdf.bat cjkintro-sjis.ps
```

のように実行します。あとは PDF を開いて
うまく表示されているかどうか確認しましょう。なお，PDF を開いたときに
フォントのインストールを促されたらインストールしておいてください。

最後に。中国語や韓國語は句読点が真ん中に表示されることがありますが，
それで問題ないはずです。
（フォントのグリフの問題です。伝統的な組版かどうかまでは分かりませんが。）

### Unicode で多言語 TeX 文書を作ってみる（グルジア語・ヴェトナム語編） {#xygeorsd}

xyzzy はなぜかグルジア文字を扱えます。また，正式対応ではありませんが，
ヴェトナム語も表示できるようです。折角ですので，
グルジア語やヴェトナム語を TeX で扱う方法についても述べましょう。

グルジア語の場合，TeX では
[mxedruli パッケージ](https://mirror.ctan.org/help/Catalogue/entries/mxedruli.html)を
用いることで，多数のグルジア文字を扱うことができます。
ただ mxedruli パッケージは ASCII アルファベットでグルジア語を記述する必要が
あるため，このままではちょっと不便です。幸い xyzzy ではグルジア文字を
表示できます。ですので，グルジア文字と ASCII 文字転写規則をハッシュとして
表現した上で変換するような Perl Script でもこしらえれば便利そうです。

インストール方法について解説します。

xyzzy でグルジア文字を表示できるようにしておきます。無料のフォントとしては，BPG フォント，例えば BPG Courier New は xyzzy で表示できるフォントですので，これをインストールします。
そして，xyzzy のメニューより ［ツール］ → ［共通設定］ の ［フォント］タブにて，「文字セット」を ［グルジア文字］ にし，例えば \[BPG Courier New\] を選んで \[OK\] を押します。これでめでたくグルジア文字が表示できるようになったはずです。

グルジア語を扱う TeX パッケージである
[mxedruli パッケージ](https://mirror.ctan.org/fonts/georgian/mxedruli/)をダウンロードし，
展開（解凍）します。$TEXMFLOCAL/fonts/source/mxedruli/ に
mf/ ディレクトリの中身を，$TEXMFLOCAL/tex/latex/mxedruli/ に
inputs/ ディレクトリの中身をコピーします。（mxedruli/ ディレクトリは
新たに作ります。名前は別に “mxedruli” でなくても良いですが。）
必要な方は mktexlsr コマンドを実行しておきましょう。

ヴェトナム語の場合は [VnTeX](http://sourceforge.net/projects/vntex/) を
用います。このリンク先から圧縮形式の違うだけのものは除いて
全種類（3種類だと思う）のファイルをダウンロードしてきます。
「[TeX Q &amp; A](https://okumuralab.org/~okumura/texfaq/qa/ndex.html)」の [qa:33515](https://okumuralab.org/~okumura/texfaq/qa/33515.html) および [qa:27846](https://okumuralab.org/~okumura/texfaq/qa/27846.html) の投稿を参考に
インストールします。以下，$TEXMFLOCAL を例えば share/texmf-local などと
自分の環境に合わせて置き換えて考えてください。

vntex-20030303.zip を展開（解凍）し，次のディレクトリはそのまま上書きします。

- vntex-20030303/web2c/ → $TEXMFLOCAL/web2c/
- vntex-20030303/fonts/ → $TEXMFLOCAL/fonts/
- vntex-20030303/tex/ → $TEXMFLOCAL/tex/
- vntex-20030303/doc/ → $TEXMFLOCAL/doc/

次は，$TEXMF/fontname/special.map が存在しない場合のみコピーします。

- vntex-20030303/fontname/special.map → $TEXMFLOCAL/fontname/special.map

次のファイルを次のように適切な場所にコピーします。

- vntex-20030303/dvips/vntex/config.vnr → $TEXMFLOCAL/dvips/config/
- vntex-20030303/dvips/vntex/t5.enc → $TEXMFLOCAL/fonts/enc/dvips/base/
- vntex-20030303/dvips/vntex/vnr.map → $TEXMFLOCAL/fonts/map/dvips/misc/
- vntex-20030303/dvipdfm/config/vnr.map → $TEXMFLOCAL/fonts/map/dvipdfm/base/

dvipdfmx をお使いの場合，$TEXMF/dvipdfmx/config/dvipdfmx.cfg に

```
f vnr.map
```

と書きます。

フォントは基本的に vnr-t1-20030303.zip と urwvn-tex-20030114.zip の
fonts/ や tex/ ディレクトリ (urwvn-tex-20030114.zipのみ) を
そのまま対応するディレクトリ（例えば share/texmf-local/）に上書きしますが
urwvn-tex-20030114/dvips/urwvn/urwvn.map だけは
$TEXMFLOCAL/fonts/map/dvips/misc/ に保存しておいてください。

今回は日本語と一緒に扱うことを前提に，VnTeX を Babel に組み込んでみます。

1. $TEXMFLOCAL/tex/generic/babel/ に
    VnTeX の tex/latex/vietnam/ に含まれている vietnam.ldf を置く。

1. babel.sty の \DeclareOption の並んでいる辺り
    （私は \DeclareOption{USenglish}{\input{english.ldf}} の下にした）に 

    ```
    \DeclareOption{vietnam}{\input{vietnam.ldf}}
    ```

    を追加する。

1. $TEXMF/tex/generic/hyphen/ukhyphen.tex をコピーし，vnhyphen.tex に
    リネームする。（とりあえず外来語に多い英語でやっています。
    古いベトナム書籍の組版ではフランス語やロシア語に倣ったものもあるそうです。）

1. $TEXMF/tex/generic/config/language.dat の末尾に

    ```
    vietnam vnhyphen.tex
    ```

    と追加します。

あとはコマンド プロンプトなどで次のように fmtutil で処理します。

```
fmtutil --byfmt latex
fmtutil --byfmt platex
```

では，実際にソースを記述していきましょう。たとえば次のような感じで書いていきます。
グルジア文字やヴェトナム語の入力環境を整えてない方は，グルジア語やヴェトナム語のキーボードの追加設定を行ってください。

グルジア語の場合，次のようにソースを書いていきます。\usepackage で
mxedruli を読み込みます。グルジア語は mxedr 環境内に書きます。
保存する際には文字コード（エンコーディング）を UTF-8 で保存します。

***

```
%%% -*- mode: katex; Coding: utf-8; Encoding: UTF-8 -*-
\documentclass{jsarticle}
%\documentclass{jarticle}
\usepackage{mxedruli}
\begin{document}
日本語を使いつつ，グルジア語のアルファベットを記述していきます。

\begin{mxedr}
%%% （mxedr 環境にグルジア文字を直接記述します。
%%%   表記できない文字はマニュアルを参考に
%%%   ASCII アルファベットで直接書きます。）
\end{mxedr}

\end{document}
```

***

ヴェトナム語の場合は次の通りです。

***

```
%%% -*- mode: katex; Coding: utf-8; Encoding: UTF-8 -*-
\documentclass{jsarticle}
%\documentclass{jarticle}
\usepackage{inputenc}
\usepackage[T1]{fontenc}
\usepackage{dblaccnt}
\usepackage[vietnam,english]{babel}
%\usepackage{japanese}
\begin{document}

こんな感じです。

\begin{otherlanguage}{vietnam}
%%% この中にヴェトナム語を直接入力
\end{otherlanguage}
\end{document}
```

***

では，変換してみましょう。簡単な変換スクリプトを作ってみましたので，よろしければ使ってみてください。
（私の環境で表示できた an から ha までの文字しか変換できません。その他の文字については，すみませんが ASCII アルファベットで書いてください。
もちろん改良スクリプト随時大募集です。） スクリプトの実行には Perl が必要になりますので，忘れずにインストールしてください。

- G2TeX ([g2tex.pl](http://web.archive.org/web/20060824005927/http://www.klavis.info/g2tex.pl))
- V2TeX ([v2tex.pl](http://web.archive.org/web/20060824010156/http://www.klavis.info/v2tex.pl))

g2tex.pl や v2tex.pl をダウンロードし，PATH の通ったディレクトリ
（例えば TeX のインストールディレクトリ内にある
実行ファイルディレクトリ C:\w32tex\bin など）にコピーします。
ついでに TeX 実行ファイルのインストール先であれば
そのディレクトリ内にある perlexec.exe を g2tex.exe や v2tex.exe に
コピーしておきます。（こうしておくとコマンド実行時に便利ですので。）

コマンド プロンプト上で，入力ファイルが gtest.tex，変換後のファイルが gtesto.tex であれば

```
g2tex <gtest.tex >gtest-o.tex
```

のように実行します。（ヴェトナム語の場合は g2tex を v2tex にします。）すると，gtest-o.tex にグルジア文字やヴェトナム語が ASCII アルファベットに変換されたファイルが出力されます。

xyzzy から実行したい方は次を ~/.xyzzy などの初期設定ファイルに書いておきます。Alt + x とした上で “exec-g2tex” と入力し，Enterキーを押して起動します。
前に述べた KaTeX の設定と組み合わせることを勧めます。（ヴェトナム語の場合は “g2tex” を “v2tex” に直して書きます。）

```
(defun exec-g2tex ()
  (interactive)
  (let ((in-file (file-namestring (get-buffer-file-name)))
	(out-file (concat (pathname-name (get-buffer-file-name))
			  "-o."
			  (pathname-type (get-buffer-file-name))))
	(dir (directory-namestring (get-buffer-file-name)))
	)
    (call-process "g2tex"
		  :input in-file
		  :output out-file
		  :exec-directory dir
		  :wait t)
    (split-window)
    (other-window)
    (find-file (concat dir out-file))
    ;; 文字コードも自動的に Shift_JIS にしたい場合は
    ;; 下の行の一番左の“;”を削除（コメントアウト）する。
    ;(set-buffer-fileio-encoding *encoding-sjis*)
    ))
```

あとはこれを Shift_JIS エンコーディングで保存し，

```
platex gtest-o.tex
```

を実行します。DVI ファイルをプレビューしてみて，うまくいっているかどうかを
確認してください。ヴェトナム語の場合はこれだけではたぶん文字化けしますので，

```
dvipdfmx gtest-o.dvi
```

を実行して PDF ファイルを閲覧するようにしてください。

xyzzy オリジナル版の作者の[亀井哲弥さん](http://www.jsdlab.co.jp/~kamei/)がやる気を出して
他の言語を扱えるようになったら，
その都度グルジア語と同じように，TeX パッケージの転記規則を調べ，
変換スクリプトを作ることで同様に任意の外国語文字を直接入力できるように
なります。今後多種多様な文字を xyzzy で扱えるようになるといいですね。

## その他の使い方 {#xyz162c1}

[Xyzzy Wiki](http://xyzzy.s53.xrea.com/wiki/) に有用な情報が
集積していますので，そちらをご覧ください。

『[入門 xyzzy](http://ssl.ohmsha.co.jp/cgi-bin/menu.cgi?ISBN=4-274-06600-2)』
という本もあります。
体系的に xyzzy の操作方法を習得したい場合は購入を検討してみるとよいでしょう。
メニューバー・ツールバー等の作成まで含めた xyzzy Lisp の書き方も
割と詳しくまとめられていますし，
ここで少し述べた多言語入力法にまで踏み込んで書かれています。

## 関連リンク {#h4cf9c4e}

- [KaTeXのコマンド](http://hoehoetukasa.blogspot.jp/2013/03/katex.html)
- [katex のキーワードハイライト ($~$) を変更する](http://d.hatena.ne.jp/manthano/20120801/1343829179)
- [xyzzyとkatex](http://dai-ao.seesaa.net/article/274397892.html)
- [dviout](http://airhoo.hatenablog.com/entry/2012/05/07/050123)
- [xyzzyみたいな](http://nahxnahx.blogspot.jp/2012/03/xyzzy.html)
- [Windows7 で xyyzzy で KaTeX で TeX ライフ。](http://blog.goo.ne.jp/kei_matsuura2007/e/8c5ccbde9291d5410956b1e94e10dfaa)
- [17 KaTeX-mode - Neko’s Business Law](http://d.hatena.ne.jp/momoume/20110103)
- [\* 小物入れ \*](http://www.ne.jp/asahi/yukinoue/cool/software/)
- [Windows7でLaTeX環境構築（Xyzzy，KaTeX，LaTeXmkなど）](http://ameblo.jp/tex-memo/entry-10476993822.html)
- [KaTeXモードとdefaul文字コード](http://magichilli.blogspot.jp/2009/01/katexdefaul.html)
- [xyzzy - べぇのうぃき.new()](http://dolphing.qee.jp/pukiwiki_new/index.php?xyzzy)
- [xyzzy + KaTeX - chibacarの色々なメモ](http://d.hatena.ne.jp/chibacar/20080420/1225725981)
- [Ill communication  .xyzzy](http://lphyl.blog69.fc2.com/blog-entry-180.html)
- [Texとxyzzy+katexのインストール覚書](http://smallsteps06.blogspot.com/2008/01/texxyzzykatex.html)
- [xyzzy](http://leaf.dyndns.org/lumber/xyzzy.shtml)
    - [『xyzzy への花鳥のインストール』 (PDF)](http://leaf.dyndns.org/lumber/down/xyzzy/install_070203.pdf)
- [xyzzy + KaTeX - \[物理のかぎしっぽ\]](http://hooktail.org/computer/index.php?xyzzy%20%2B%20KaTeX)
- [XyzzyWiki:QuickTour/ext/KaTeX](http://xyzzy.s53.xrea.com/wiki/?QuickTour/ext/KaTeX)
- [XyzzyWiki:QuickTour/ext/KaTeX #KaHTML の設定](http://xyzzy.s53.xrea.com/wiki/?QuickTour/ext/KaTeX#j73htme9)
- [質問箱/112 - XyzzyWiki (Dabbrevで、ある開いていないファイルのみを読み込んで補完する方法)](http://xyzzy.s53.xrea.com/wiki/index.php?%BC%C1%CC%E4%C8%A2%2F112)
- [katex-kill-proc](http://raido.sakura.ne.jp/southly/lisp/ni/view.lisp?33a2536c21b7ead86ca4343ecece4446)
- [katex-autoload-dir](http://raido.sakura.ne.jp/southly/lisp/ni/view.lisp?4876687f1858d1f88578004a36293b60)

<!-- *謝辞 [#xyathxds] -->
<!--  -->
<!-- 本文書を作るにあたり，[[2ch:http://www.2ch.net/]] の xyzzy 関連スレや -->
<!-- [[Xyzzy Wiki:http://xyzzy.s53.xrea.com/wiki/]] のアイディアを -->
<!-- 拝借するなどしています。親切にご教示くださった方々に心より御礼申し上げます。 -->
<!--  -->
<!-- *Comments [#xyacm2ab] -->
<!--  -->
<!-- -編集などは勝手にどうぞ。編集まではしたくないけどツッコミがある場合、新しいアイディアがある場合、この文書に関するご質問がある場合はコメント欄から遠慮なくどうぞ。（質問は一応調べてから来てくれるとうれしいです。） - - ダメダメ筆者 &new{2005-10-26 (水) 09:41:57}; -->
<!-- -項目が多くなって見づらい気がしたので多少整理してみました。ちなみに[[xyzzyでもispellは使える:http://xyzzy.s53.xrea.com/wiki/?QuickTour%2Fetc%2Fispell]]はずです。とはいえ私もaspell派ですが。 - -  &new{2005-10-26 (水) 18:24:05}; -->
<!-- -整理ありがとうございました！ちなみにxyzzyから使えるIspellは亀井さんの移植したものであって角藤さんの移植したものではなかったはずです。亀井さんの移植したIspellにはTeXの命令を無視するなどの機能はありましたっけ？ - - ダメダメ筆者 &new{2005-10-26 (水) 18:36:18}; -->
<!-- -なるほど、そういうことでしたか。ispellは使ってないのできちんと調べずに書いてしまいました。すいません。でも、「角藤先生のispellは使えない」→「Aspellを使うことになる」だとほかの可能性をまったく除外しているように感じました。Aspellを使うことをオススメします、ぐらいでいいのではないでしょうか。 - -  &new{2005-10-26 (水) 20:25:44}; -->
<!-- -ここはTeX WikiなのでAspell以外の選択肢を除外してしまいましたが、やんわりとお勧めしたほうがいいかもしれませんね。直してみました。 - - ダメダメ筆者 &new{2005-10-27 (木) 09:07:26}; -->
<!-- -Aspellはwin2k環境変数LANGにja_JP.SJISがかき込んであるとディスクトップアイコンに英文テキストをドラッグしても起動せず、xyzzyではcannot spown aspellとなって起動しません。ispellは平気です。 - - zyma56 &new{2005-11-02 (水) 05:28:49}; -->
<!-- -ご報告ありがとうございます。早速追記させていただきます。 - - ダメダメ筆者 &new{2005-11-02 (水) 08:32:52}; -->
<!-- -Aspellについて追記しておきました。 - -  &new{2005-11-02 (水) 18:07:56}; -->
<!-- -ありがとうございました。xyzzy+KTeXはここ２週間の使用経験で手放せなくなりました。初心者の私がみなさまのご助言を得て解決したこのケースが他のみなさまのお役にたてば嬉しいです。 - - zyam56 &new{2005-11-02 (水) 20:20:10}; -->
<!-- -自分の書いたコードがここで紹介されていて感激しました． - -  &new{2005-11-05 (土) 15:52:39}; -->
<!-- - どうもありがとうございました＞Aspellについて追記した方＆改良コードを書いてくださった方　私自身はへたれコードしか書けませんので、どなたかより良いコードが書ける方はどんどん直してください。 - - ダメダメ筆者 &new{2005-11-07 (月) 18:14:31}; -->
<!-- - xyzzyのライセンスがMITライセンスになりました。割と重要なことですのでいちおうコメント欄にも書いておきます。 - - ダメダメ筆者 &new{2005-12-19 (月) 14:34:31}; -->
<!-- - パスにスペースが入っている場合も考慮してDVIOUTの設定（srcの%s）を囲みました。 - - 稲原 &new{2005-12-24 (土) 21:57:36}; -->
<!-- - ありがとうございました。なるほど、たしかにこれは必要なことです。 - - ダメダメ筆者 &new{2005-12-27 (火) 08:58:46}; -->
<!-- - outline-treeのバージョン2の解説を書いてみました。間違いなどがありましたらご指摘下さい。 - - ダメダメ筆者 &new{2006-05-26 (金) 15:19:04}; -->
<!-- - parenがnetinstallerから消えるなどしていましたので、parentagをメインに紹介することにしました。 - - ダメダメ筆者 &new{2006-05-30 (火) 18:00:26}; -->
<!-- - xyzzyのインストーラについて追記しました。 - - ダメダメ筆者 &new{2006-06-07 (水) 10:34:10}; -->
<!-- - [[xyzzy上のスペルチェッカー作成:http://keijisaito.info/arc/spell/spell_check.htm]]にaspellの設定説明と片手でできるテンキー用スペルチェックのファイルがあります。 - - 1154736330 &new{2006-08-05 (土) 09:05:30}; -->
<!-- - 動的補完のコードに問題点があったので、修正しました。 - - act &new{2007-02-20 (火) 22:49:36}; -->
<!-- - 「KaTeX で TeX の命令をラクラク入力」のセクションに "pbibtex.exe" 関連の記述を追加しました。 - - 1257567430 &new{2009-11-07 (土) 13:17:10}; -->
<!--  -->
<!-- #comment -->
