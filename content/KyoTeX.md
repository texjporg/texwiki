---
title: "KyoTeX"
url: "/KyoTeX/"
date: 2011-02-13T19:51:41Z
pukiwiki: "KyoTeX"
---

# KyoTeX

[xyzzy](/xyzzy/) > KyoTeX

## [KyoTeX](http://www.ss.scphys.kyoto-u.ac.jp/person/yonezawa/contents/program/xyzzy/kyotex/) {#v6739e44}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## kyotex-mode とは {#sb34eaed}

kyotex-mode は [xyzzy](/xyzzy/) 用の TeX/LaTeX/BibTeX 編集支援モードです．

- [kyotex-mode - xyzzy lisp - 米澤進吾 ホームページ](http://www.ss.scphys.kyoto-u.ac.jp/person/yonezawa/contents/program/xyzzy/kyotex/) 公式サイト

### リリース情報/ChangeLog {#nab7bc0f}

- [kyotex-modeのダウンロード](http://www.ss.scphys.kyoto-u.ac.jp/person/yonezawa/contents/program/xyzzy/kyotex/download.html) を参照．

### スクリーンショット {#t052448d}

<img src="http://www.ss.scphys.kyoto-u.ac.jp/person/yonezawa/contents/program/xyzzy/kyotex/img/snapshot_016.png" alt="kyotex-mode を使った xyzzy の画面">

## インストール {#v1bb481d}

- [kyotex-modeのインストール](http://www.ss.scphys.kyoto-u.ac.jp/person/yonezawa/contents/program/xyzzy/kyotex/install.html) を参照．

環境変数 XYZZYHOME が設定されている場合，&#x7e;/.xyzzy は [MinGW](/MinGW/) Shell (MSYS2 または MSYS) や [Cygwin](/Cygwin/) Bash Shell から

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

kyotex-mode を

- C:\xyzzy\site-lisp\kyotex\kyotex.l
- C:\xyzzy\site-lisp\kyotex\bibtex-template.l
- C:\xyzzy\etc\KyoTeX
- C:\xyzzy\etc\BiBTeX

に配置します．<br>

***

```
C:.
└─xyzzy
    ├─site-lisp
    │   └─kyotex
    │       ├─kyotex.l
    │       └─bibtex-template.l
    └─etc
        ├─KyoTeX
        └─BiBTeX
```

***

etc フォルダーに KyoTeX, BiBTeX を配置していない場合

```
不正なデータ型です: nil: hash-table
```

と表示され kyotex-mode が使用できません．<br>
etc フォルダーに KyoTeX, BiBTeX を配置してください．<br>

## 設定 {#a7481706}

&#x7e;/.xyzzy または site-lisp フォルダーの siteinit.l に設定を記述します．<br>
siteinit.l に記述した場合は xyzzy.wxp などのダンプファイルを削除します．<br>

***

```
;;
;; KyoTeX
;;
(push (merge-pathnames "site-lisp/kyotex" (si:system-root)) *load-path*)
(load-library "kyotex")
(push '("\\.tex$" . kyotex-mode) *auto-mode-alist*)
(push '("\\.bbl$" . kyotex-mode) *auto-mode-alist*)
(push '("\\.bib$" . bibtex-mode) *auto-mode-alist*)

(defun sumatrapdf-forward-search ()
  (interactive)
  (let* ((tex-file (get-buffer-file-name))
         (pdf-file (if (string-equal *kyotex-dvipdfm-recent-output* "")
                       (concat (car (split-string (get-buffer-file-name) "\\.")) ".pdf")
                     *kyotex-dvipdfm-recent-output*))
         (line (format nil "~D" (current-line-number)))
         (cmd "rundll32 shell32,ShellExec_RunDLL SumatraPDF")
         (args))
    (setq args (concat "-reuse-instance \"" pdf-file "\" -forward-search \"" tex-file "\" " line))
    (message (concat cmd " " args))
    (call-process (concat cmd " " args)
                  :exec-directory (directory-namestring tex-file))))

(add-hook '*kyotex-mode-hook*
          #'(lambda ()
              (define-key *kyotex-mode-map* '(#\C-c #\s) 'sumatrapdf-forward-search)))

(defun fwdsumatrapdf-forward-search ()
  (interactive)
  (let* ((tex-file (get-buffer-file-name))
         (pdf-file (if (string-equal *kyotex-dvipdfm-recent-output* "")
                       (concat (car (split-string (get-buffer-file-name) "\\.")) ".pdf")
                     *kyotex-dvipdfm-recent-output*))
         (line (format nil "~D" (current-line-number)))
         (cmd "fwdsumatrapdf")
         (args))
    (setq args (concat "\"" pdf-file "\" \"" tex-file "\" " line))
    (message (concat cmd " " args))
    (call-process (concat cmd " " args)
                  :exec-directory (directory-namestring tex-file))))

(add-hook '*kyotex-mode-hook*
          #'(lambda ()
              (define-key *kyotex-mode-map* '(#\C-c #\w) 'fwdsumatrapdf-forward-search)))
```

***

C-c s または M-x sumatrapdf-forward-search で TeX ファイル中のカーソルのある箇所に相当する PDF ファイルの位置にジャンプします．<br>

### 基本設定 {#mab284ce}

- [kyotex-modeの設定変更方法](http://www.ss.scphys.kyoto-u.ac.jp/person/yonezawa/contents/program/xyzzy/kyotex/setting.html) を参照．

#### コンパイラの設定 {#fee3adeb}

メニューの \[kyotex(Y)\]-\[基本設定\]-\[コンパイラの設定(D)\] で

TeX(T):
: &nbsp;

: uplatex -kanji=utf8 -no-guess-input-enc -synctex=1

BiBTeX(B):
: &nbsp;

: upbibtex

DVI->PDF(P):
: &nbsp;

: dvipdfmx

MakeIndex(M):
: &nbsp;

: makeindex

MakeIndex Option:
: &nbsp;

: @@

Batch commands:
: &nbsp;

: ptex2pdf -u -l -ot "-kanji=utf8 -no-guess-input-enc -synctex=1" @@.tex

に設定して \[設定の保存(S)\] をクリックします．

- C:\xyzzy\site-lisp\kyotex\kyotex-compiler-settings.l

に設定が保存されます．<br>

***

```
(setq *kyotex-default-tex-compiler* "uplatex -kanji=utf8 -no-guess-input-enc -synctex=1")
(setq *kyotex-default-bibtex-compiler* "upbibtex")
(setq *kyotex-default-dvipdfm-compiler* "dvipdfmx")
(setq *kyotex-default-makeindex-compiler* "makeindex")
(setq *kyotex-default-makeindex-args* '("@@"))
(setq *kyotex-default-makeindex-args-str* "@@")
(setq *kyotex-default-batch-commands* '("ptex2pdf -u -l -ot \"-kanji=utf8 -no-guess-input-enc -synctex=1\" @@.tex"))
(setq *kyotex-default-batch-commands-str* "ptex2pdf -u -l -ot \"-kanji=utf8 -no-guess-input-enc -synctex=1\" @@.tex")
```

***

## 使い方 {#w720f92b}

### コンパイルコマンド {#kbf0ab3d}

- [コンパイルコマンド](http://www.ss.scphys.kyoto-u.ac.jp/person/yonezawa/contents/program/xyzzy/kyotex/compile.html) を参照．

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#3C0;text-align:center">メニュー [kyotex(Y)]</th><th style="color:#FFF;background-color:#3C0;text-align:center">入力</th><th style="color:#FFF;background-color:#3C0;text-align:center">機能</th></tr>
> <tr><td>texでコンパイル(G)</td><td>Ctrl+l Ctrl+o</td><td>TeX を実行して DVI ファイルを表示</td></tr>
> <tr><td>tex-&gt;bibtex-&gt;tex-&gt;tex(B)</td><td>Ctrl+l Ctrl+b</td><td>TeX -&gt; BibTeX -&gt; TeX -&gt; TeX を実行して DVI ファイルを表示</td></tr>
> <tr><td>dviファイルからpdfを作る(P)</td><td>Ctrl+l Ctrl+p</td><td>DVI ファイルを PDF ファイルに変換して PDF ファイルを表示</td></tr>
> </tbody>
> </table>
>

kyotex-mode を使用する場合は C-l で recenter するかわりに M-x recenter で recenter が実行できます．<br>

### 補完コマンド {#be009b07}

- [補完コマンド](http://www.ss.scphys.kyoto-u.ac.jp/person/yonezawa/contents/program/xyzzy/kyotex/completion.html) を参照．
