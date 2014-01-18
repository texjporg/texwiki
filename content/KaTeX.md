---
title: "KaTeX"
url: "/KaTeX/"
date: 2011-09-29T04:00:35Z
pukiwiki: "KaTeX"
---

# KaTeX

[xyzzy](/xyzzy/) > KaTeX

## KaTeX (配布終了) → [YaTeX](/YaTeX/) を使用する {#ife6863a}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## 設定 {#pea65968}

環境変数 XYZZYHOME が設定されている場合，.xyzzy ファイルは [MinGW](/MinGW/) Shell (MSYS または MSYS2) や [Cygwin](/Cygwin/) Bash Shell から

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

&#x7e;/.xyzzy ファイルに設定を記述します．<br>
以下の設定では [ptex2pdf](/ptex2pdf/) を使用しています．<br>
W32TeX の場合は latexmk の実行には [Strawberry Perl](http://strawberryperl.com/) が必要です．<br>

***

```
;;
;; KaTeX
;;
(push (merge-pathnames "site-lisp/katex" (si:system-root)) *load-path*)
(require "elisp")
(push '("\\.\\(tex\\|ltx\\|cls\\|sty\\|clo\\|bbl\\)$" . elisp::katex-mode) *auto-mode-alist*)
(autoload 'elisp::katex-mode "katex" t)
(setq elisp::KaTeX-inhibit-prefix-letter t)
(setq elisp::KaTeX-kanji-code nil)
(setq elisp::KaTeX-use-AMS-LaTeX t)
(setq elisp::KaTeX-default-documentclass "jsarticle")
(setq elisp::tex-command "ptex2pdf -u -l -ot \"-kanji=utf8 -no-guess-input-enc -synctex=1\"")
;(setq elisp::tex-command "pdflatex -synctex=1")
;(setq elisp::tex-command "lualatex -synctex=1")
;(setq elisp::tex-command "luajitlatex -synctex=1")
;(setq elisp::tex-command "xelatex -synctex=1")
;(setq elisp::tex-command "latexmk")
;(setq elisp::tex-command "latexmk -e \"$latex=q/uplatex -kanji=utf8 -no-guess-input-enc -synctex=1/\" -e \"$bibtex=q/upbibtex/\" -e \"$makeindex=q/mendex -U/\" -e \"$dvipdf=q/dvipdfmx %O -o %D %S/\" -norc -gg -pdfdvi")
;(setq elisp::tex-command "latexmk -e \"$latex=q/uplatex -kanji=utf8 -no-guess-input-enc -synctex=1/\" -e \"$bibtex=q/upbibtex/\" -e \"$makeindex=q/mendex -U/\" -e \"$dvips=q/dvips %O -z -f %S | convbkmk -u > %D/\" -e \"$ps2pdf=q/ps2pdf.bat %O %S %D/\" -norc -gg -pdfps")
;(setq elisp::tex-command "latexmk -e \"$pdflatex=q/pdflatex -synctex=1/\" -e \"$bibtex=q/bibtex/\" -e \"$makeindex=q/makeindex/\" -norc -gg -pdf")
;(setq elisp::tex-command "latexmk -e \"$pdflatex=q/lualatex -synctex=1/\" -e \"$bibtex=q/bibtexu/\" -e \"$makeindex=q/texindy/\" -norc -gg -pdf")
;(setq elisp::tex-command "latexmk -e \"$pdflatex=q/luajitlatex -synctex=1/\" -e \"$bibtex=q/bibtexu/\" -e \"$makeindex=q/texindy/\" -norc -gg -pdf")
;(setq elisp::tex-command "latexmk -e \"$pdflatex=q/xelatex -synctex=1/\" -e \"$bibtex=q/bibtexu/\" -e \"$makeindex=q/texindy/\" -norc -gg -pdf")
(setq elisp::bibtex-command (cond ((string-match "ptex2pdf\\|uplatex" elisp::tex-command) "upbibtex")
                                  ((string-match "lualatex\\|luajitlatex\\|xelatex" elisp::tex-command) "bibtexu")
                                  ((string-match "pdflatex\\|latex" elisp::tex-command) "bibtex")
                                  (t "upbibtex")))
(setq elisp::makeindex-command (cond ((string-match "ptex2pdf\\|uplatex" elisp::tex-command) "mendex -U")
                                     ((string-match "lualatex\\|luajitlatex\\|xelatex" elisp::tex-command) "texindy")
                                     ((string-match "pdflatex\\|latex" elisp::tex-command) "makeindex")
                                     (t "mendex -U")))
(setq elisp::dvi2-command "texworks")
;(setq elisp::dvi2-command "rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance")
;(setq elisp::dvi2-command "rundll32 shell32,ShellExec_RunDLL firefox -new-window")
;(setq elisp::dvi2-command "powershell -Command \"& {$p = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFullPath($args),'\"\"\"');Start-Process chrome -ArgumentList ('--new-window',$p)}\"")
(setq elisp::dviprint-command-format "pdfopen --rxi --file %s.pdf")
(setq elisp::*KaTeX-use-toolbar* t)
(set-extended-key-translate-table exkey-M-return #\M-RET)

(defun user::katex-mode ()
  (interactive)
  (elisp::katex-mode))

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

(defun fwdsumatrapdf-forward-search ()
  (interactive)
  (let* ((tex-file (get-buffer-file-name))
         (pdf-file (concat (el::KaTeX-get-preview-file-name) ".pdf"))
         (line (format nil "~D" (current-line-number)))
         (cmd "fwdsumatrapdf")
         (args))
    (setq args (concat "\"" pdf-file "\" \"" tex-file "\" " line))
    (message (concat cmd " " args))
    (call-process (concat cmd " " args)
                  :exec-directory (directory-namestring tex-file))))

(add-hook 'elisp::katex-mode-hook
          #'(lambda ()
              (define-key elisp::*KaTeX-mode-map* '(#\C-c #\w) 'fwdsumatrapdf-forward-search)))

(add-hook 'elisp::katex-mode-hook
          #'(lambda ()
              (auto-fill-mode nil)))

(require "katex")
(require "katexlib")
(require "katexprc")

(defun elisp::KaTeX-preview (preview-command preview-file)
  "Execute xdvi (or other) to tex-preview."
  (interactive
      (list
       (elisp::read-string-with-history
	"Preview command: "
	(or (elisp::KaTeX-get-builtin "PREVIEW") elisp::dvi2-command)
	'elisp::KaTeX-preview-command-history)
       (elisp::read-string-with-history
	;"Preview file[.dvi]: "
	"Preview file: "
	(if (get 'dvi2-command 'region)
	    (substring KaTeX-texput-file
		       0 (rindex KaTeX-texput-file #\.))
	  (elisp::KaTeX-get-preview-file-name))
	'elisp::KaTeX-preview-file-history)))
  (setq dvi2-command preview-command)	;`dvi2command' is buffer local
  ;(unless (string-matchp "\.dvi$" preview-file)
  ;    (setq preview-file (concat preview-file ".dvi")))
  (if (string-matchp "dviout" elisp::dvi2-command)
      (setq preview-file (concat preview-file ".dvi"))
    (setq preview-file (concat preview-file ".pdf")))
  (cond
   ((file-exist-p preview-file)  ;m.m
    (save-excursion
      (elisp::KaTeX-visit-main t)
      (let ((pbuffer "*dvi-preview*") (dir default-directory))
;;;          (KaTeX-showup-buffer                     ;-> m.m
;;;            pbuffer (function (lambda (x) (nth 3 (window-edges x)))))
;;;	(set-buffer (get-buffer-create pbuffer))
;;;	(erase-buffer)
	(make-local-variable 'need-not-save)
	(setq need-not-save t) ;m.m <-
	(setq default-directory dir)	;for 18
	(cd dir)				;for 19
	(setq preview-command (concat preview-command " " preview-file))
	(when elisp::*typeset-with-shell-command*
	  (setq preview-command (concat *shell* " " KaTeX-shell-command-option
					" " preview-command)))
        (editor::call-process preview-command :no-std-handles t :show :show)
	(message
	 (concat "Starting " preview-command
		 " to preview " preview-file))
	(refresh-screen) ;m.m (redraw-display)
	)))
   (elisp::*preview-with-typeset*  ;m.m ->
    (setq *typeset-and-preview* t
	  *last-preview-command* preview-command
	  *last-preview-file* preview-file)
    (KaTeX-typeset-buffer))
   (t
    nil)))
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
