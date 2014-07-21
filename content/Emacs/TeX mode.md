---
title: "Emacs/TeX mode"
url: "/Emacs/TeX mode/"
date: 2013-04-12T19:40:16Z
pukiwiki: "Emacs/TeX mode"
---

# Emacs/TeX mode

[Emacs](/Emacs/) > TeX mode

## [TeX mode](http://bzr.savannah.gnu.org/lh/emacs/trunk/annotate/head:/lisp/textmodes/tex-mode.el) <a id="tex-mode"></a> {#e09eebbf}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## TeX mode とは {#b759a43a}

TeX mode は TeX ファイルを編集・タイプセット・プレビューするためのモードです．<br>
Emacs には標準で [TeX mode](http://www.gnu.org/software/emacs/manual/html_node/emacs/TeX-Mode.html#TeX-Mode) が含まれています．<br>
スニペットが必要な場合は [YASnippet](/YASnippet/) を使ってください．<br>

- [http://bzr.savannah.gnu.org/lh/emacs/trunk/annotate/head:/lisp/textmodes/tex-mode.el](http://bzr.savannah.gnu.org/lh/emacs/trunk/annotate/head:/lisp/textmodes/tex-mode.el)
- [http://git.savannah.gnu.org/cgit/emacs.git/tree/lisp/textmodes/tex-mode.el](http://git.savannah.gnu.org/cgit/emacs.git/tree/lisp/textmodes/tex-mode.el)
- [http://git.savannah.gnu.org/gitweb/?p=emacs.git;a=blob;f=lisp/textmodes/tex-mode.el;hb=HEAD](http://git.savannah.gnu.org/gitweb/?p=emacs.git;a=blob;f=lisp/textmodes/tex-mode.el;hb=HEAD)

### License {#g3e59977}

GPLv3

## 注意点 {#m2671d0c}

### " を入力しようとすると \`\` が入力される → C-q " {#y76d0516}

- [Emacs (Meadow) + YaTeX でダブルクォーテーションを入力](http://tetu1984.hateblo.jp/entry/20090123/1232651566)

TeX mode, AUCTeX, YaTeX では " を入力しようとすると \`\` が入力されます．<br>
\`\` ではなく " を入力したい場合は C-q " (Ctrl-Q を入力した後で " を入力) とします．<br>

## 設定 {#x084b3ec}

### Windows {#m2df1dd4}

[EmacsのMinGWビルド](http://www.rainyman.net/nest/?p=861) または [NTEmacs](http://cha.la.coocan.jp/doc/NTEmacs.html) または [emacs for gnupack](http://sourceforge.jp/projects/gnupack/) をインストールします．<br>
Emacs を起動して<br>

```
C-x C-f ~/
```

で，ホームディレクトリ (&#x7e;/) の場所を確認します．<br>
&#x7e;/.emacs.d/ が無ければ新規に作成します．<br>
&#x7e;/.emacs.d/init.el に設定を記述します．<br>
fwdsumatrapdf.exe は [SumatraPDF/fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) の fwdsumatrapdf.exe を使用します．<br>

***

```
;;
;; TeX mode
;;
(setq auto-mode-alist
      (append '(("\\.tex$" . latex-mode)) auto-mode-alist))
(setq tex-default-mode 'latex-mode)
(setq tex-start-commands "\\nonstopmode\\input")
(setq tex-run-command "ptex2pdf -u -e -ot \"-kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode\"")
;(setq tex-run-command "luatex -synctex=1 -interaction=nonstopmode")
;(setq tex-run-command "luajittex -synctex=1 -interaction=nonstopmode")
;(setq tex-run-command "xetex -synctex=1 -interaction=nonstopmode")
;(setq tex-run-command "pdftex -synctex=1 -interaction=nonstopmode")
(setq latex-run-command "ptex2pdf -u -l -ot \"-kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode\"")
;(setq latex-run-command "lualatex -synctex=1 -interaction=nonstopmode")
;(setq latex-run-command "luajitlatex -synctex=1 -interaction=nonstopmode")
;(setq latex-run-command "xelatex -synctex=1 -interaction=nonstopmode")
;(setq latex-run-command "pdflatex -synctex=1 -interaction=nonstopmode")
(setq tex-bibtex-command "latexmk -e \"$latex=q/uplatex %O -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode %S/\" -e \"$bibtex=q/upbibtex %O %B/\" -e \"$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/\" -e \"$makeindex=q/mendex %O -U -o %D %S/\" -e \"$dvipdf=q/dvipdfmx %O -o %D %S/\" -norc -gg -pdfdvi")
(require 'tex-mode)
(defun tex-view ()
  (interactive)
  (tex-send-command "rundll32 shell32,ShellExec_RunDLL SumatraPDF -reuse-instance" (tex-append tex-print-file ".pdf")))
(defun tex-print (&optional alt)
  (interactive "P")
  (if (tex-shell-running)
      (tex-kill-job)
    (tex-start-shell))
  (tex-send-command "pdfopen --rxi --file" (tex-append tex-print-file ".pdf")))
(setq tex-compile-commands
      '(("ptex2pdf -u -l -ot \"-kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode\" %f" "%f" "%r.pdf")
        ("uplatex -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode %f && dvips -Ppdf -z -f %r.dvi | convbkmk -u > %r.ps && ps2pdf.exe %r.ps" "%f" "%r.pdf")
        ("pdflatex -synctex=1 -interaction=nonstopmode %f" "%f" "%r.pdf")
        ("lualatex -synctex=1 -interaction=nonstopmode %f" "%f" "%r.pdf")
        ("luajitlatex -synctex=1 -interaction=nonstopmode %f" "%f" "%r.pdf")
        ("xelatex -synctex=1 -interaction=nonstopmode %f" "%f" "%r.pdf")
        ("latexmk %f" "%f" "%r.pdf")
        ("latexmk -e \"$latex=q/uplatex %%O -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode %%S/\" -e \"$bibtex=q/upbibtex %%O %%B/\" -e \"$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/\" -e \"$makeindex=q/mendex %%O -U -o %%D %%S/\" -e \"$dvipdf=q/dvipdfmx %%O -o %%D %%S/\" -norc -gg -pdfdvi %f" "%f" "%r.pdf")
        ("latexmk -e \"$latex=q/uplatex %%O -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode %%S/\" -e \"$bibtex=q/upbibtex %%O %%B/\" -e \"$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/\" -e \"$makeindex=q/mendex %%O -U -o %%D %%S/\" -e \"$dvips=q/dvips %%O -z -f %%S | convbkmk -u > %%D/\" -e \"$ps2pdf=q/ps2pdf.exe %%O %%S %%D/\" -norc -gg -pdfps %f" "%f" "%r.pdf")
        ("latexmk -e \"$pdflatex=q/pdflatex %%O -synctex=1 -interaction=nonstopmode %%S/\" -e \"$bibtex=q/bibtex %%O %%B/\" -e \"$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/\" -e \"$makeindex=q/makeindex %%O -o %%D %%S/\" -norc -gg -pdf %f" "%f" "%r.pdf")
        ("latexmk -e \"$pdflatex=q/lualatex %%O -synctex=1 -interaction=nonstopmode %%S/\" -e \"$bibtex=q/bibtexu %%O %%B/\" -e \"$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/\" -e \"$makeindex=q/makeindex %%O -o %%D %%S/\" -norc -gg -pdf %f" "%f" "%r.pdf")
        ("latexmk -e \"$pdflatex=q/luajitlatex %%O -synctex=1 -interaction=nonstopmode %%S/\" -e \"$bibtex=q/bibtexu %%O %%B/\" -e \"$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/\" -e \"$makeindex=q/makeindex %%O -o %%D %%S/\" -norc -gg -pdf %f" "%f" "%r.pdf")
        ("latexmk -e \"$pdflatex=q/xelatex %%O -synctex=1 -interaction=nonstopmode %%S/\" -e \"$bibtex=q/bibtexu %%O %%B/\" -e \"$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/\" -e \"$makeindex=q/makeindex %%O -o %%D %%S/\" -norc -gg -pdf %f" "%f" "%r.pdf")
        ((concat "\\doc-view" " \"" (car (split-string (format "%s" (tex-main-file)) "\\.")) ".pdf\"") "%r.pdf")
        ("powershell -Command \"& {$r = Write-Output %r.pdf;$p = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFileName($r),'\"\"\"');Start-Process SumatraPDF -ArgumentList ('-reuse-instance',$p)}\"" "%r.pdf")
        ("texworks %r.pdf" "%r.pdf")
        ("texstudio --pdf-viewer-only %r.pdf" "%r.pdf")
        ("powershell -Command \"& {$r = Write-Output %r.pdf;$p = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFileName($r),'\"\"\"');Start-Process firefox -ArgumentList ('-new-window',$p)}\"" "%r.pdf")
        ("powershell -Command \"& {$r = Write-Output %r.pdf;$p = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFullPath($r),'\"\"\"');Start-Process chrome -ArgumentList ('--new-window',$p)}\"" "%r.pdf")
        ("pdfopen --rxi --file %r.pdf" "%r.pdf")))

(defun sumatrapdf-forward-search ()
  (interactive)
  (let* ((ctf (buffer-name))
         (mtf (tex-main-file))
         (pf (concat (car (split-string mtf "\\.")) ".pdf"))
         (ln (format "%d" (line-number-at-pos)))
         (cmd "rundll32 shell32,ShellExec_RunDLL SumatraPDF")
         (args (concat "-reuse-instance \"" pf "\" -forward-search \"" ctf "\" " ln)))
    (message (concat cmd " " args))
    (process-kill-without-query
     (start-process-shell-command "sumatrapdf" nil cmd args))))

(add-hook 'latex-mode-hook
          '(lambda ()
             (define-key latex-mode-map (kbd "C-c s") 'sumatrapdf-forward-search)))

(defun fwdsumatrapdf-forward-search ()
  (interactive)
  (let* ((ctf (buffer-name))
         (mtf (tex-main-file))
         (pf (concat (car (split-string mtf "\\.")) ".pdf"))
         (ln (format "%d" (line-number-at-pos)))
         (cmd "fwdsumatrapdf")
         (args (concat "\"" pf "\" \"" ctf "\" " ln)))
    (message (concat cmd " " args))
    (process-kill-without-query
     (start-process-shell-command "fwdsumatrapdf" nil cmd args))))

(add-hook 'latex-mode-hook
          '(lambda ()
             (define-key latex-mode-map (kbd "C-c w") 'fwdsumatrapdf-forward-search)))

;;
;; RefTeX with TeX mode
;;
(add-hook 'latex-mode-hook 'turn-on-reftex)
```

***

### OS X {#g5794e10}

動作未確認です．<br>
[MacEmacs JP](http://sourceforge.jp/projects/macemacsjp/releases/?package_id=13490) または [Emacs.app](http://www.muskmelon.jp/?page_id=79) をインストールします．<br>
Emacs を起動して<br>

```
C-x C-f ~/
```

で，ホームディレクトリ (&#x7e;/) の場所を確認します．<br>
&#x7e;/.emacs.d/ が無ければ新規に作成します．<br>
&#x7e;/.emacs.d/init.el に設定を記述します．<br>

***

```
;;
;; TeX mode
;;
(setq auto-mode-alist
      (append '(("\\.tex$" . latex-mode)) auto-mode-alist))
(setq tex-default-mode 'latex-mode)
(setq tex-start-commands "\\nonstopmode\\input")
(setq tex-run-command "/usr/texbin/ptex2pdf -u -e -ot '-synctex=1 -interaction=nonstopmode'")
;(setq tex-run-command "/usr/texbin/luatex -synctex=1 -interaction=nonstopmode")
;(setq tex-run-command "/usr/texbin/luajittex -synctex=1 -interaction=nonstopmode")
;(setq tex-run-command "/usr/texbin/xetex -synctex=1 -interaction=nonstopmode")
;(setq tex-run-command "/usr/texbin/pdftex -synctex=1 -interaction=nonstopmode")
(setq latex-run-command "/usr/texbin/ptex2pdf -u -l -ot '-synctex=1 -interaction=nonstopmode'")
;(setq latex-run-command "/usr/texbin/lualatex -synctex=1 -interaction=nonstopmode")
;(setq latex-run-command "/usr/texbin/luajitlatex -synctex=1 -interaction=nonstopmode")
;(setq latex-run-command "/usr/texbin/xelatex -synctex=1 -interaction=nonstopmode")
;(setq latex-run-command "/usr/texbin/pdflatex -synctex=1 -interaction=nonstopmode")
(setq tex-bibtex-command "/usr/texbin/latexmk -e '$latex=q/uplatex %O -synctex=1 -interaction=nonstopmode %S/' -e '$bibtex=q/upbibtex %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/mendex %O -U -o %D %S/' -e '$dvipdf=q/dvipdfmx %O -o %D %S/' -norc -gg -pdfdvi")
(require 'tex-mode)
(defun tex-view ()
  (interactive)
  (tex-send-command "/usr/bin/open -a Skim.app" (tex-append tex-print-file ".pdf")))
(defun tex-print (&optional alt)
  (interactive "P")
  (if (tex-shell-running)
      (tex-kill-job)
    (tex-start-shell))
  (tex-send-command "/usr/bin/open -a \"Adobe Reader.app\"" (tex-append tex-print-file ".pdf")))
(setq tex-compile-commands
      '(("/usr/texbin/ptex2pdf -u -l -ot '-synctex=1 -interaction=nonstopmode' %f" "%f" "%r.pdf")
        ("/usr/texbin/uplatex -synctex=1 -interaction=nonstopmode %f && /usr/texbin/dvips -Ppdf -z -f %r.dvi | /usr/texbin/convbkmk -u > %r.ps && /usr/local/bin/ps2pdf %r.ps" "%f" "%r.pdf")
        ("/usr/texbin/pdflatex -synctex=1 -interaction=nonstopmode %f" "%f" "%r.pdf")
        ("/usr/texbin/lualatex -synctex=1 -interaction=nonstopmode %f" "%f" "%r.pdf")
        ("/usr/texbin/luajitlatex -synctex=1 -interaction=nonstopmode %f" "%f" "%r.pdf")
        ("/usr/texbin/xelatex -synctex=1 -interaction=nonstopmode %f" "%f" "%r.pdf")
        ("/usr/texbin/latexmk %f" "%f" "%r.pdf")
        ("/usr/texbin/latexmk -e '$latex=q/uplatex %%O -synctex=1 -interaction=nonstopmode %%S/' -e '$bibtex=q/upbibtex %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/mendex %%O -U -o %%D %%S/' -e '$dvipdf=q/dvipdfmx %%O -o %%D %%S/' -norc -gg -pdfdvi %f" "%f" "%r.pdf")
        ("/usr/texbin/latexmk -e '$latex=q/uplatex %%O -synctex=1 -interaction=nonstopmode %%S/' -e '$bibtex=q/upbibtex %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/mendex %%O -U -o %%D %%S/' -e '$dvips=q/dvips %%O -z -f %%S | convbkmk -u > %%D/' -e '$ps2pdf=q/ps2pdf %%O %%S %%D/' -norc -gg -pdfps %f" "%f" "%r.pdf")
        ("/usr/texbin/latexmk -e '$pdflatex=q/pdflatex %%O -synctex=1 -interaction=nonstopmode %%S/' -e '$bibtex=q/bibtex %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/makeindex %%O -o %%D %%S/' -norc -gg -pdf %f" "%f" "%r.pdf")
        ("/usr/texbin/latexmk -e '$pdflatex=q/lualatex %%O -synctex=1 -interaction=nonstopmode %%S/' -e '$bibtex=q/bibtexu %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/makeindex %%O -o %%D %%S/' -norc -gg -pdf %f" "%f" "%r.pdf")
        ("/usr/texbin/latexmk -e '$pdflatex=q/luajitlatex %%O -synctex=1 -interaction=nonstopmode %%S/' -e '$bibtex=q/bibtexu %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/makeindex %%O -o %%D %%S/' -norc -gg -pdf %f" "%f" "%r.pdf")
        ("/usr/texbin/latexmk -e '$pdflatex=q/xelatex %%O -synctex=1 -interaction=nonstopmode %%S/' -e '$bibtex=q/bibtexu %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/makeindex %%O -o %%D %%S/' -norc -gg -pdf %f" "%f" "%r.pdf")
        ((concat "\\doc-view" " \"" (car (split-string (format "%s" (tex-main-file)) "\\.")) ".pdf\"") "%r.pdf")
        ("/usr/bin/open -a Skim.app %r.pdf" "%r.pdf")
        ("/usr/bin/open -a Preview.app %r.pdf" "%r.pdf")
        ("/usr/bin/open -a TeXShop.app %r.pdf" "%r.pdf")
        ("/Applications/TeXworks.app/Contents/MacOS/TeXworks %r.pdf" "%r.pdf")
        ("/Applications/texstudio.app/Contents/MacOS/texstudio --pdf-viewer-only %r.pdf" "%r.pdf")
        ("/usr/bin/open -a Firefox.app %r.pdf" "%r.pdf")
        ("/usr/bin/open -a \"Adobe Reader.app\" %r.pdf" "%r.pdf")))

(defun skim-forward-search ()
  (interactive)
  (let* ((ctf (buffer-name))
         (mtf (tex-main-file))
         (pf (concat (car (split-string mtf "\\.")) ".pdf"))
         (ln (format "%d" (line-number-at-pos)))
         (cmd "/Applications/Skim.app/Contents/SharedSupport/displayline")
         (args (concat ln " " pf " " ctf)))
    (message (concat cmd " " args))
    (process-kill-without-query
     (start-process-shell-command "displayline" nil cmd args))))

(add-hook 'latex-mode-hook
          '(lambda ()
             (define-key latex-mode-map (kbd "C-c s") 'skim-forward-search)))

;;
;; RefTeX with TeX mode
;;
(add-hook 'latex-mode-hook 'turn-on-reftex)
```

***

### Linux {#q1bd16f3}

Emacs を起動して<br>

```
C-x C-f ~/
```

で，ホームディレクトリ (&#x7e;/) の場所を確認します．<br>
&#x7e;/.emacs.d/ が無ければ新規に作成します．<br>
&#x7e;/.emacs.d/init.el に設定を記述します．<br>
fwdevince は Evince/fwdevince の fwdevince を使用します．<br>

***

```
;;
;; TeX mode
;;
(setq auto-mode-alist
      (append '(("\\.tex$" . latex-mode)) auto-mode-alist))
(setq tex-default-mode 'latex-mode)
(setq tex-start-commands "\\nonstopmode\\input")
(setq tex-run-command "ptex2pdf -u -e -ot '-synctex=1 -interaction=nonstopmode'")
;(setq tex-run-command "luatex -synctex=1 -interaction=nonstopmode")
;(setq tex-run-command "luajittex -synctex=1 -interaction=nonstopmode")
;(setq tex-run-command "xetex -synctex=1 -interaction=nonstopmode")
;(setq tex-run-command "pdftex -synctex=1 -interaction=nonstopmode")
(setq latex-run-command "ptex2pdf -u -l -ot '-synctex=1 -interaction=nonstopmode'")
;(setq latex-run-command "lualatex -synctex=1 -interaction=nonstopmode")
;(setq latex-run-command "luajitlatex -synctex=1 -interaction=nonstopmode")
;(setq latex-run-command "xelatex -synctex=1 -interaction=nonstopmode")
;(setq latex-run-command "pdflatex -synctex=1 -interaction=nonstopmode")
(setq tex-bibtex-command "latexmk -e '$latex=q/uplatex %O -synctex=1 -interaction=nonstopmode %S/' -e '$bibtex=q/upbibtex %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/mendex %O -U -o %D %S/' -e '$dvipdf=q/dvipdfmx %O -o %D %S/' -norc -gg -pdfdvi")
(require 'tex-mode)
(defun tex-view ()
  (interactive)
  (tex-send-command "xdg-open" (tex-append tex-print-file ".pdf") " &"))
(defun tex-print (&optional alt)
  (interactive "P")
  (if (tex-shell-running)
      (tex-kill-job)
    (tex-start-shell))
  (tex-send-command "xdg-open" (tex-append tex-print-file ".pdf") " &"))
(setq tex-compile-commands
      '(("ptex2pdf -u -l -ot '-synctex=1 -interaction=nonstopmode' %f" "%f" "%r.pdf")
        ("uplatex -synctex=1 -interaction=nonstopmode %f && dvips -Ppdf -z -f %r.dvi | convbkmk -u > %r.ps && ps2pdf %r.ps" "%f" "%r.pdf")
        ("pdflatex -synctex=1 -interaction=nonstopmode %f" "%f" "%r.pdf")
        ("lualatex -synctex=1 -interaction=nonstopmode %f" "%f" "%r.pdf")
        ("luajitlatex -synctex=1 -interaction=nonstopmode %f" "%f" "%r.pdf")
        ("xelatex -synctex=1 -interaction=nonstopmode %f" "%f" "%r.pdf")
        ("latexmk %f" "%f" "%r.pdf")
        ("latexmk -e '$latex=q/uplatex %%O -synctex=1 -interaction=nonstopmode %%S/' -e '$bibtex=q/upbibtex %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/mendex %%O -U -o %%D %%S/' -e '$dvipdf=q/dvipdfmx %%O -o %%D %%S/' -norc -gg -pdfdvi %f" "%f" "%r.pdf")
        ("latexmk -e '$latex=q/uplatex %%O -synctex=1 -interaction=nonstopmode %%S/' -e '$bibtex=q/upbibtex %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/mendex %%O -U -o %%D %%S/' -e '$dvips=q/dvips %%O -z -f %%S | convbkmk -u > %%D/' -e '$ps2pdf=q/ps2pdf %%O %%S %%D/' -norc -gg -pdfps %f" "%f" "%r.pdf")
        ("latexmk -e '$pdflatex=q/pdflatex %%O -synctex=1 -interaction=nonstopmode %%S/' -e '$bibtex=q/bibtex %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/makeindex %%O -o %%D %%S/' -norc -gg -pdf %f" "%f" "%r.pdf")
        ("latexmk -e '$pdflatex=q/lualatex %%O -synctex=1 -interaction=nonstopmode %%S/' -e '$bibtex=q/bibtexu %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/makeindex %%O -o %%D %%S/' -norc -gg -pdf %f" "%f" "%r.pdf")
        ("latexmk -e '$pdflatex=q/luajitlatex %%O -synctex=1 -interaction=nonstopmode %%S/' -e '$bibtex=q/bibtexu %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/makeindex %%O -o %%D %%S/' -norc -gg -pdf %f" "%f" "%r.pdf")
        ("latexmk -e '$pdflatex=q/xelatex %%O -synctex=1 -interaction=nonstopmode %%S/' -e '$bibtex=q/bibtexu %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/makeindex %%O -o %%D %%S/' -norc -gg -pdf %f" "%f" "%r.pdf")
        ((concat "\\doc-view" " \"" (car (split-string (format "%s" (tex-main-file)) "\\.")) ".pdf\"") "%r.pdf")
        ("xdg-open %r.pdf &" "%r.pdf")
        ("evince %r.pdf &" "%r.pdf")
        ("okular --unique %r.pdf &" "%r.pdf")
        ("zathura -s -x \"emacsclient --no-wait +%%{line} %%{input}\" %r.pdf &" "%r.pdf")
        ("qpdfview --unique %r.pdf &" "%r.pdf")
        ("texworks %r.pdf &" "%r.pdf")
        ("texstudio --pdf-viewer-only %r.pdf" "%r.pdf")
        ("mupdf %r.pdf &" "%r.pdf")
        ("firefox -new-window %r.pdf &" "%r.pdf")
        ("chromium --new-window %r.pdf &" "%r.pdf")))

(defun evince-forward-search ()
  (interactive)
  (let* ((ctf (buffer-name))
         (mtf (tex-main-file))
         (pf (concat (car (split-string mtf "\\.")) ".pdf"))
         (ln (format "%d" (line-number-at-pos)))
         (cmd "fwdevince")
         (args (concat "\"" pf "\" " ln " \"" ctf "\"")))
    (message (concat cmd " " args))
    (process-kill-without-query
     (start-process-shell-command "fwdevince" nil cmd args))))

(add-hook 'latex-mode-hook
          '(lambda ()
             (define-key latex-mode-map (kbd "C-c e") 'evince-forward-search)))

(require 'dbus)

(defun un-urlify (fname-or-url)
  "A trivial function that replaces a prefix of file:/// with just /."
  (if (string= (substring fname-or-url 0 8) "file:///")
      (substring fname-or-url 7)
    fname-or-url))

(defun evince-inverse-search (file linecol &rest ignored)
  (let* ((fname (un-urlify file))
         (buf (find-file fname))
         (line (car linecol))
         (col (cadr linecol)))
    (if (null buf)
        (message "[Synctex]: %s is not opened..." fname)
      (switch-to-buffer buf)
      (goto-line (car linecol))
      (unless (= col -1)
        (move-to-column col)))))

(dbus-register-signal
 :session nil "/org/gnome/evince/Window/0"
 "org.gnome.evince.Window" "SyncSource"
 'evince-inverse-search)

(defun okular-forward-search ()
  (interactive)
  (let* ((ctf (buffer-file-name))
         (mtf (tex-main-file))
         (pf (concat (car (split-string mtf "\\.")) ".pdf"))
         (ln (format "%d" (line-number-at-pos)))
         (cmd "okular")
         (args (concat "--unique \"file:" pf "#src:" ln " " ctf "\"")))
    (message (concat cmd " " args))
    (process-kill-without-query
     (start-process-shell-command "okular" nil cmd args))))

(add-hook 'latex-mode-hook
          '(lambda ()
             (define-key latex-mode-map (kbd "C-c o") 'okular-forward-search)))

(defun zathura-forward-search ()
  (interactive)
  (let* ((ctf (buffer-name))
         (mtf (tex-main-file))
         (pf (concat (car (split-string mtf "\\.")) ".pdf"))
         (ln (format "%d" (line-number-at-pos)))
         (cmd "zathura")
         (args (concat "--synctex-forward " ln ":0:" ctf " " pf)))
    (message (concat cmd " " args))
    (process-kill-without-query
     (start-process-shell-command "zathura" nil cmd args))))

(add-hook 'latex-mode-hook
          '(lambda ()
             (define-key latex-mode-map (kbd "C-c z") 'zathura-forward-search)))

(defun qpdfview-forward-search ()
  (interactive)
  (let* ((ctf (buffer-name))
         (mtf (tex-main-file))
         (pf (concat (car (split-string mtf "\\.")) ".pdf"))
         (ln (format "%d" (line-number-at-pos)))
         (cmd "qpdfview")
         (args (concat "--unique \"" pf "#src:" ctf ":" ln ":0\"")))
    (message (concat cmd " " args))
    (process-kill-without-query
     (start-process-shell-command "qpdfview" nil cmd args))))

(add-hook 'latex-mode-hook
          '(lambda ()
             (define-key latex-mode-map (kbd "C-c q") 'qpdfview-forward-search)))

;;
;; RefTeX with TeX mode
;;
(add-hook 'latex-mode-hook 'turn-on-reftex)
```

***

## 使い方 {#b6d90b9d}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#36A;text-align:center">メニュー [TeX]</th><th style="color:#FFF;background-color:#36A;text-align:center">入力</th><th style="color:#FFF;background-color:#36A;text-align:center">機能</th></tr>
> <tr><td>TeX File</td><td>C-c C-f</td><td>タイプセット</td></tr>
> <tr><td>TeX Kill</td><td>C-c C-k</td><td>タイプセットを中断</td></tr>
> <tr><td>BibTeX File</td><td>C-c C-i または C-c TAB</td><td>Biblatex, BibTeX</td></tr>
> <tr><td>TeX View</td><td>C-c C-v</td><td>プレビュー</td></tr>
> <tr><td>TeX Print</td><td>C-c C-p</td><td>印刷</td></tr>
> <tr><td></td><td>C-c C-c</td><td>ユーザー定義コマンドの実行</td></tr>
> </tbody>
> </table>
>

ユーザー定義コマンドは C-c C-c C-i または C-c C-c TAB で一覧が表示できます．<br>
一覧の中からマウスでクリックすると実行されます．<br>
キーボードを使用する場合はある程度キーボードで入力して C-i または TAB を入力すると補完されます．<br>

***

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#36A;text-align:center">入力</th><th style="color:#FFF;background-color:#36A;text-align:center">機能</th></tr>
> <tr><td>C-c C-o</td><td>\begin{...} ... \end{...} の補完</td></tr>
> <tr><td>C-c C-e</td><td>\end{...} の補完</td></tr>
> <tr><td>C-c C-u</td><td>環境内の \begin{...} の先頭に移動</td></tr>
> </tbody>
> </table>
>

***

<span style="color:#3465A4;background-color:#3465A4;"><ins>　</ins></span>[<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/08/EmacsIcon.svg/200px-EmacsIcon.svg.png" alt="GNU Emacs - GNU Project - Free Software Foundation (FSF)" width="28" height="28">](http://www.gnu.org/software/emacs/)<span style="color:#3465A4;background-color:#3465A4;"><ins>　　　　　　　　　　　　　　　<span style="color:Black;"><strong>emacs@TeX mode</strong></span>　　　　　　　<span style="color:#3465A4;background-color:#3465A4;"></ins>\[ <span style="color:Black;"><strong>◛</strong></span> \]<ins></span><span style="color:#3465A4;background-color:#3465A4;"></ins>\[ <span style="color:Black;"><strong>▭</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<span style="color:Black;background-color:#DAE0FE;"><ins>　　ファイル　 編集　 オプション　 バッファ　 ツール　 TeX　 Ref　 ヘルプ　　　　</ins></span><br>

...<br>
&#x2d;U\\---　　<strong>emacs.tex</strong>　　　　　Top L1　　　(LaTeX Ref)-------------------<br>

***

<span style="color:#3465A4;background-color:#3465A4;"><ins>　</ins></span>[<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/08/EmacsIcon.svg/200px-EmacsIcon.svg.png" alt="GNU Emacs - GNU Project - Free Software Foundation (FSF)" width="28" height="28">](http://www.gnu.org/software/emacs/)<span style="color:#3465A4;background-color:#3465A4;"><ins>　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;"><strong>emacs@TeX mode</strong></span>　　　　　　　　　　　　　　　　　<span style="color:#3465A4;background-color:#3465A4;"></ins>\[ <span style="color:Black;"><strong>◛</strong></span> \]<ins></span><span style="color:#3465A4;background-color:#3465A4;"></ins>\[ <span style="color:Black;"><strong>▭</strong></span> \]<ins></span><span style="color:#DD4444;background-color:#DD4444;"></ins>\[　<span style="color:White;"><strong>×</strong></span>　\]<ins></span></ins></span><br>

<span style="color:Black;background-color:#DAE0FE;"><ins>　　ファイル　 編集　 オプション　 バッファ　 ツール　 TeX　 Errors　 Complete　 In/Out　 Signals　 ヘルプ　　　　</ins></span><br>

...<br>
&#x2d;U\\---　　<strong>emacs.tex</strong>　　　　　Top L1　　　(LaTeX Ref)-----------------------------------------------<br>
...<br>
&#x2d;S:\*\*-　　<strong>\*tex-shell\*</strong>　　　　　Bot L1　　　(TeX-Shell:run Shell-Compile)--------------------------------<br>

***

## 関連リンク {#ca23f166}

- [TeX Mode - GNU Emacs Manual](http://www.gnu.org/software/emacs/manual/html_node/emacs/TeX-Mode.html#TeX-Mode)
- [RefTeX User Manual](http://www.gnu.org/software/emacs/manual/html_node/reftex/)
- [Using pdfTeX in Emacs \`tex-mode'](http://www.emacswiki.org/emacs/PdfTeX)
- [LaTeX メモ#Emacs との連携](http://www-is.amp.i.kyoto-u.ac.jp/lab/kmaeda/latex/#emacs)
- [Meadow で LaTeX を使う](http://www.cymric.jp/old/tex/meadow.html)
- [西谷・平山研Hiki - LaTeX-mode](http://www.kono.cis.iwate-u.ac.jp/~hiki/?LaTeX-mode)
- [MacPortsでインストールしたTeXLive2013をEmacsのTeX-modeで使う](http://d.hatena.ne.jp/tnil/20130824/1377290688)
- [Emacs.app の設定 - マスクメロン](http://www.muskmelon.jp/?page_id=410)
- [【電脳】Mac OS Xで「EmacsでLaTeXファイルを編集→pdflatexでコンパイル→Previewでプレビュー」を繰り返す【自動リロード】](http://slashdot.jp/~t-nissie/journal/560083)
- [Emacsのlatex-modeのインデント](http://www.hit.ac.jp/~wachi/misc/latexindent.html)
