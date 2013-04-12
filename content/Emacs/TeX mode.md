---
title: "Emacs/TeX mode"
url: "/Emacs/TeX mode/"
date: 2013-04-12T19:40:16Z
pukiwiki: "Emacs/TeX mode"
---

# Emacs/TeX mode

### [TeX mode](http://bzr.savannah.gnu.org/lh/emacs/trunk/annotate/head:/lisp/textmodes/tex-mode.el) <a id="tex-mode"></a> {#e09eebbf}

- [TeX Mode - GNU Emacs Manual](http://www.gnu.org/software/emacs/manual/html_node/emacs/TeX-Mode.html#TeX-Mode)
- [RefTeX User Manual](http://www.gnu.org/software/emacs/manual/html_node/reftex/)
- [Using pdfTeX in Emacs \`tex-mode'](http://www.emacswiki.org/emacs/PdfTeX)
- [LaTeX メモ#Emacs との連携](http://www-is.amp.i.kyoto-u.ac.jp/lab/kmaeda/latex/#emacs)
- [Meadow で LaTeX を使う](http://www.cymric.jp/old/tex/meadow.html)
- [西谷・平山研Hiki - LaTeX-mode](http://www.kono.cis.iwate-u.ac.jp/~hiki/?LaTeX-mode)
- [Emacs.app の設定 - マスクメロン](http://www.muskmelon.jp/?page_id=410)
- [【電脳】Mac OS Xで「EmacsでLaTeXファイルを編集→pdflatexでコンパイル→Previewでプレビュー」を繰り返す【自動リロード】](http://slashdot.jp/~t-nissie/journal/560083)
- [Emacsのlatex-modeのインデント](http://www.hit.ac.jp/~wachi/misc/latexindent.html)

Emacs には標準で [TeX mode](http://bzr.savannah.gnu.org/lh/emacs/trunk/annotate/head:/lisp/textmodes/tex-mode.el) が含まれています．<br>
スニペットが必要な場合は [YASnippet](/YASnippet/) を使ってください．<br>

#### License {#g3e59977}

GPLv3

#### Windows {#m2df1dd4}

[emacs for gnupack](http://sourceforge.jp/projects/gnupack/releases/?package_id=10839) をインストールします．<br>
Emacs を起動して<br>

```
C-x C-f ~/
```

で，ホームディレクトリ (&#x7e;/) の場所を確認します． ([GNU Emacsのinitファイルの置き場所＠Windows7](http://tamatamablog.blog.so-net.ne.jp/2010-02-10) を参考)<br>
&#x7e;/.emacs.d/ が無ければ新規に作成します．<br>
&#x7e;/.emacs.d/init.el に設定を記述します．<br>
W32TeX の場合は latexmk の実行には [Strawberry Perl](http://strawberryperl.com/) が必要です．<br>

***

```
;;
;; TeX mode
;;
(setq auto-mode-alist
      (append '(("\\.tex$" . latex-mode)) auto-mode-alist))
(setq tex-default-mode 'latex-mode)
(setq tex-start-commands "\\nonstopmode\\input")
(setq tex-run-command "eptex -kanji=utf8 -guess-input-enc -synctex=1 -interaction=nonstopmode")
;(setq tex-run-command "ptex2pdf -e -ot \"-kanji=utf8 -guess-input-enc -synctex=1 -interaction=nonstopmode\"")
(setq latex-run-command "platex -kanji=utf8 -guess-input-enc -synctex=1 -interaction=nonstopmode")
;(setq latex-run-command "ptex2pdf -l -ot \"-kanji=utf8 -guess-input-enc -synctex=1 -interaction=nonstopmode\"")
(setq tex-bibtex-command "pbibtex -kanji=utf8")
(setq tex-dvi-view-command (if (file-exists-p "C:/w32tex/dviout/dviout.exe")
                               "C:/w32tex/dviout/dviout -1"
                             "powershell -Command \"& {$dvi = [System.String]::Concat('\"\"\"',$args,'\"\"\"');$dviout = (Get-Command dviout | Select-Object Path).Path + '/../../../../????/tlpkg/dviout/dviout.exe';Start-Process $dviout -ArgumentList ('-1',$dvi)}\""))
(setq tex-dvi-print-command "dvipdfmx")
(setq tex-compile-commands
      '(("platex -kanji=utf8 -guess-input-enc -synctex=1 -interaction=nonstopmode -jobname=%r %f && dvipdfmx %r" "%f" "%r.pdf")
        ("platex -kanji=utf8 -guess-input-enc -synctex=1 -interaction=nonstopmode -jobname=%r %f && dvips -Ppdf -z -f %r.dvi | convbkmk -g > %r.ps && ps2pdf.bat %r.ps" "%f" "%r.pdf")
        ("uplatex -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode %f && dvipdfmx %r" "%f" "%r.pdf")
        ("uplatex -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode %f && dvips -Ppdf -z -f %r.dvi | convbkmk -u > %r.ps && ps2pdf.bat %r.ps" "%f" "%r.pdf")
        ("pdflatex -synctex=1 -interaction=nonstopmode %f" "%f" "%r.pdf")
        ("lualatex -synctex=1 -interaction=nonstopmode %f" "%f" "%r.pdf")
        ("luajitlatex -synctex=1 -interaction=nonstopmode %f" "%f" "%r.pdf")
        ("xelatex -synctex=1 -interaction=nonstopmode %f" "%f" "%r.pdf")
        ("latexmk %f" "%f" "%r.pdf")
        ("latexmk -e \"$latex=q/platex -kanji=utf8 -guess-input-enc -synctex=1 -interaction=nonstopmode/\" -e \"$bibtex=q/pbibtex -kanji=utf8/\" -e \"$makeindex=q/mendex -U/\" -e \"$dvipdf=q/dvipdfmx %%O -o %%D %%S/\" -norc -gg -pdfdvi %f" "%f" "%r.pdf")
        ("latexmk -e \"$latex=q/platex -kanji=utf8 -guess-input-enc -synctex=1 -interaction=nonstopmode/\" -e \"$bibtex=q/pbibtex -kanji=utf8/\" -e \"$makeindex=q/mendex -U/\" -e \"$dvips=q/dvips %%O -z -f %%S | convbkmk -g > %%D/\" -e \"$ps2pdf=q/ps2pdf.bat %%O %%S %%D/\" -norc -gg -pdfps %f" "%f" "%r.pdf")
        ("latexmk -e \"$latex=q/uplatex -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode/\" -e \"$bibtex=q/upbibtex/\" -e \"$makeindex=q/mendex -U/\" -e \"$dvipdf=q/dvipdfmx %%O -o %%D %%S/\" -norc -gg -pdfdvi %f" "%f" "%r.pdf")
        ("latexmk -e \"$latex=q/uplatex -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode/\" -e \"$bibtex=q/upbibtex/\" -e \"$makeindex=q/mendex -U/\" -e \"$dvips=q/dvips %%O -z -f %%S | convbkmk -u > %%D/\" -e \"$ps2pdf=q/ps2pdf.bat %%O %%S %%D/\" -norc -gg -pdfps %f" "%f" "%r.pdf")
        ("latexmk -e \"$pdflatex=q/pdflatex -synctex=1 -interaction=nonstopmode/\" -e \"$bibtex=q/bibtex/\" -e \"$makeindex=q/makeindex/\" -norc -gg -pdf %f" "%f" "%r.pdf")
        ("latexmk -e \"$pdflatex=q/lualatex -synctex=1 -interaction=nonstopmode/\" -e \"$bibtex=q/bibtexu/\" -e \"$makeindex=q/texindy/\" -norc -gg -pdf %f" "%f" "%r.pdf")
        ("latexmk -e \"$pdflatex=q/luajitlatex -synctex=1 -interaction=nonstopmode/\" -e \"$bibtex=q/bibtexu/\" -e \"$makeindex=q/texindy/\" -norc -gg -pdf %f" "%f" "%r.pdf")
        ("latexmk -e \"$pdflatex=q/xelatex -synctex=1 -interaction=nonstopmode/\" -e \"$bibtex=q/bibtexu/\" -e \"$makeindex=q/texindy/\" -norc -gg -xelatex %f" "%f" "%r.pdf")
        ("pbibtex -kanji=utf8 %r" "%r.aux" "%r.bbl")
        ("upbibtex %r" "%r.aux" "%r.bbl")
        ("bibtex %r" "%r.aux" "%r.bbl")
        ("bibtexu %r" "%r.aux" "%r.bbl")
        ("biber %r" "%r.bcf" "%r.bbl")
        ("mendex -U %r" "%r.idx" "%r.ind")
        ("makeindex %r" "%r.idx" "%r.ind")
        ("texindy %r" "%r.idx" "%r.ind")
        ((concat "\\doc-view" " \"" (car (split-string (format "%s" (tex-main-file)) "\\.")) ".pdf\"") "%r.pdf")
        ("texworks %r.pdf" "%r.pdf")
        ("powershell -Command \"& {$r = Write-Output %r.pdf;$p = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFileName($r),'\"\"\"');Start-Process SumatraPDF -ArgumentList ('-reuse-instance',$p)}\"" "%r.pdf")
        ("powershell -Command \"& {$r = Write-Output %r.pdf;$p = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFileName($r),'\"\"\"');Start-Process firefox -ArgumentList ('-new-window',$p)}\"" "%r.pdf")
        ("powershell -Command \"& {$r = Write-Output %r.pdf;$p = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFullPath($r),'\"\"\"');Start-Process chrome -ArgumentList ('--new-window',$p)}\"" "%r.pdf")
        ("pdfopen --rxi --file %r.pdf" "%r.pdf")))

(defun sumatrapdf-forward-search ()
  (interactive)
  (let* ((ctf (buffer-name))
         (mtf (tex-main-file))
         (pf (concat (car (split-string mtf "\\.")) ".pdf"))
         (ln (format "%d" (line-number-at-pos)))
         (cmd "start SumatraPDF")
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

[TeXworks#組み込みの PDF ビューアに日本語を表示させる](/TeXworks/#t5313ebc) を参照してフォントの埋め込みの設定を行います．

#### OS X {#g5794e10}

[Emacs.app の設定 - マスクメロン](http://www.muskmelon.jp/?page_id=410) を参照．<br>
[Emacs.app](http://www.muskmelon.jp/?page_id=79) または [Emacs For Mac OS X](http://www.emacsformacosx.com/) をインストールします．<br>
Emacs を起動して<br>

```
C-x C-f ~/
```

で，ホームディレクトリ (&#x7e;/) の場所を確認します．<br>
&#x7e;/.emacs.d/ が無ければ新規に作成します．<br>
動作未確認です．<br>
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
(setq tex-run-command "/usr/texbin/eptex -synctex=1 -interaction=nonstopmode")
;(setq tex-run-command "/usr/texbin/ptex2pdf -e -ot \"-synctex=1 -interaction=nonstopmode\"")
(setq latex-run-command "/usr/texbin/platex -synctex=1 -interaction=nonstopmode")
;(setq latex-run-command "/usr/texbin/ptex2pdf -l -ot \"-synctex=1 -interaction=nonstopmode\"")
(setq tex-bibtex-command "/usr/texbin/pbibtex")
(setq tex-dvi-view-command "/usr/bin/open -a PictPrinter.app")
;(setq tex-dvi-view-command "/usr/texbin/pxdvi -watchfile 1")
;(setq tex-dvi-view-command "/usr/bin/open -a Skim.app")
(setq tex-dvi-print-command "/usr/texbin/dvipdfmx")
(setq tex-compile-commands
      '(("/usr/texbin/platex -synctex=1 -interaction=nonstopmode %f && /usr/texbin/dvipdfmx %r" "%f" "%r.pdf")
        ("/usr/texbin/platex -synctex=1 -interaction=nonstopmode %f && /usr/texbin/dvips -Ppdf -z -f %r.dvi | /usr/texbin/convbkmk -g > %r.ps && /usr/local/bin/ps2pdf %r.ps" "%f" "%r.pdf")
        ("/usr/texbin/uplatex -synctex=1 -interaction=nonstopmode %f && /usr/texbin/dvipdfmx %r" "%f" "%r.pdf")
        ("/usr/texbin/uplatex -synctex=1 -interaction=nonstopmode %f && /usr/texbin/dvips -Ppdf -z -f %r.dvi | /usr/texbin/convbkmk -u > %r.ps && /usr/local/bin/ps2pdf %r.ps" "%f" "%r.pdf")
        ("/usr/texbin/pdflatex -synctex=1 -interaction=nonstopmode %f" "%f" "%r.pdf")
        ("/usr/texbin/lualatex -synctex=1 -interaction=nonstopmode %f" "%f" "%r.pdf")
        ("/usr/texbin/luajitlatex -synctex=1 -interaction=nonstopmode %f" "%f" "%r.pdf")
        ("/usr/texbin/xelatex -synctex=1 -interaction=nonstopmode %f" "%f" "%r.pdf")
        ("/usr/texbin/latexmk %f" "%f" "%r.pdf")
        ("/usr/texbin/latexmk -e '$latex=q/platex -synctex=1 -interaction=nonstopmode/' -e '$bibtex=q/pbibtex/' -e '$makeindex=q/mendex/' -e '$dvipdf=q/dvipdfmx %%O -o %%D %%S/' -norc -gg -pdfdvi %f" "%f" "%r.pdf")
        ("/usr/texbin/latexmk -e '$latex=q/platex -synctex=1 -interaction=nonstopmode/' -e '$bibtex=q/pbibtex/' -e '$makeindex=q/mendex/' -e '$dvips=q/dvips %%O -z -f %%S | convbkmk -g > %%D/' -e '$ps2pdf=q/ps2pdf %%O %%S %%D/' -norc -gg -pdfps %f" "%f" "%r.pdf")
        ("/usr/texbin/latexmk -e '$latex=q/uplatex -synctex=1 -interaction=nonstopmode/' -e '$bibtex=q/upbibtex/' -e '$makeindex=q/mendex/' -e '$dvipdf=q/dvipdfmx %%O -o %%D %%S/' -norc -gg -pdfdvi %f" "%f" "%r.pdf")
        ("/usr/texbin/latexmk -e '$latex=q/uplatex -synctex=1 -interaction=nonstopmode/' -e '$bibtex=q/upbibtex/' -e '$makeindex=q/mendex/' -e '$dvips=q/dvips %%O -z -f %%S | convbkmk -u > %%D/' -e '$ps2pdf=q/ps2pdf %%O %%S %%D/' -norc -gg -pdfps %f" "%f" "%r.pdf")
        ("/usr/texbin/latexmk -e '$pdflatex=q/pdflatex -synctex=1 -interaction=nonstopmode/' -e '$bibtex=q/bibtex/' -e '$makeindex=q/makeindex/' -norc -gg -pdf %f" "%f" "%r.pdf")
        ("/usr/texbin/latexmk -e '$pdflatex=q/lualatex -synctex=1 -interaction=nonstopmode/' -e '$bibtex=q/bibtexu/' -e '$makeindex=q/texindy/' -norc -gg -pdf %f" "%f" "%r.pdf")
        ("/usr/texbin/latexmk -e '$pdflatex=q/luajitlatex -synctex=1 -interaction=nonstopmode/' -e '$bibtex=q/bibtexu/' -e '$makeindex=q/texindy/' -norc -gg -pdf %f" "%f" "%r.pdf")
        ("/usr/texbin/latexmk -e '$pdflatex=q/xelatex -synctex=1 -interaction=nonstopmode/' -e '$bibtex=q/bibtexu/' -e '$makeindex=q/texindy/' -norc -gg -xelatex %f" "%f" "%r.pdf")
        ("/usr/texbin/pbibtex %r" "%r.aux" "%r.bbl")
        ("/usr/texbin/upbibtex %r" "%r.aux" "%r.bbl")
        ("/usr/texbin/bibtex %r" "%r.aux" "%r.bbl")
        ("/usr/texbin/bibtexu %r" "%r.aux" "%r.bbl")
        ("/usr/texbin/biber %r" "%r.bcf" "%r.bbl")
        ("/usr/texbin/mendex %r" "%r.idx" "%r.ind")
        ("/usr/texbin/makeindex %r" "%r.idx" "%r.ind")
        ("/usr/texbin/texindy %r" "%r.idx" "%r.ind")
        ((concat "\\doc-view" " \"" (car (split-string (format "%s" (tex-main-file)) "\\.")) ".pdf\"") "%r.pdf")
        ("/usr/bin/open -a Preview.app %r.pdf" "%r.pdf")
        ("/usr/bin/open -a Skim.app %r.pdf" "%r.pdf")
        ("/usr/bin/open -a TeXShop.app %r.pdf" "%r.pdf")
        ("/usr/bin/open -a TeXworks.app %r.pdf" "%r.pdf")
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

#### Linux {#q1bd16f3}

Emacs を起動して<br>

```
C-x C-f ~/
```

で，ホームディレクトリ (&#x7e;/) の場所を確認します．<br>
&#x7e;/.emacs.d/ が無ければ新規に作成します．<br>
&#x7e;/.emacs.d/init.el に設定を記述します．<br>
fwdevince は [Evince - TeX Wiki](/Evince/) の fwdevince を使用します．<br>

***

```
;;
;; TeX mode
;;
(setq auto-mode-alist
      (append '(("\\.tex$" . latex-mode)) auto-mode-alist))
(setq tex-default-mode 'latex-mode)
(setq tex-start-commands "\\nonstopmode\\input")
(setq tex-run-command "eptex -synctex=1 -interaction=nonstopmode")
;(setq tex-run-command "ptex2pdf -e -ot \"-synctex=1 -interaction=nonstopmode\"")
(setq latex-run-command "platex -synctex=1 -interaction=nonstopmode")
;(setq latex-run-command "ptex2pdf -l -ot \"-synctex=1 -interaction=nonstopmode\"")
(setq tex-bibtex-command "pbibtex")
(setq tex-dvi-view-command "pxdvi -watchfile 1")
(setq tex-dvi-print-command "dvipdfmx")
(setq tex-compile-commands
      '(("platex -synctex=1 -interaction=nonstopmode %f && dvipdfmx %r" "%f" "%r.pdf")
        ("platex -synctex=1 -interaction=nonstopmode %f && dvips -Ppdf -z -f %r.dvi | convbkmk -g > %r.ps && ps2pdf %r.ps" "%f" "%r.pdf")
        ("uplatex -synctex=1 -interaction=nonstopmode %f && dvipdfmx %r" "%f" "%r.pdf")
        ("uplatex -synctex=1 -interaction=nonstopmode %f && dvips -Ppdf -z -f %r.dvi | convbkmk -u > %r.ps && ps2pdf %r.ps" "%f" "%r.pdf")
        ("pdflatex -synctex=1 -interaction=nonstopmode %f" "%f" "%r.pdf")
        ("lualatex -synctex=1 -interaction=nonstopmode %f" "%f" "%r.pdf")
        ("luajitlatex -synctex=1 -interaction=nonstopmode %f" "%f" "%r.pdf")
        ("xelatex -synctex=1 -interaction=nonstopmode %f" "%f" "%r.pdf")
        ("latexmk %f" "%f" "%r.pdf")
        ("latexmk -e '$latex=q/platex -synctex=1 -interaction=nonstopmode/' -e '$bibtex=q/pbibtex/' -e '$makeindex=q/mendex/' -e '$dvipdf=q/dvipdfmx %%O -o %%D %%S/' -norc -gg -pdfdvi %f" "%f" "%r.pdf")
        ("latexmk -e '$latex=q/platex -synctex=1 -interaction=nonstopmode/' -e '$bibtex=q/pbibtex/' -e '$makeindex=q/mendex/' -e '$dvips=q/dvips %%O -z -f %%S | convbkmk -g > %%D/' -e '$ps2pdf=q/ps2pdf %%O %%S %%D/' -norc -gg -pdfps %f" "%f" "%r.pdf")
        ("latexmk -e '$latex=q/uplatex -synctex=1 -interaction=nonstopmode/' -e '$bibtex=q/upbibtex/' -e '$makeindex=q/mendex/' -e '$dvipdf=q/dvipdfmx %%O -o %%D %%S/' -norc -gg -pdfdvi %f" "%f" "%r.pdf")
        ("latexmk -e '$latex=q/uplatex -synctex=1 -interaction=nonstopmode/' -e '$bibtex=q/upbibtex/' -e '$makeindex=q/mendex/' -e '$dvips=q/dvips %%O -z -f %%S | convbkmk -u > %%D/' -e '$ps2pdf=q/ps2pdf %%O %%S %%D/' -norc -gg -pdfps %f" "%f" "%r.pdf")
        ("latexmk -e '$pdflatex=q/pdflatex -synctex=1 -interaction=nonstopmode/' -e '$bibtex=q/bibtex/' -e '$makeindex=q/makeindex/' -norc -gg -pdf %f" "%f" "%r.pdf")
        ("latexmk -e '$pdflatex=q/lualatex -synctex=1 -interaction=nonstopmode/' -e '$bibtex=q/bibtexu/' -e '$makeindex=q/texindy/' -norc -gg -pdf %f" "%f" "%r.pdf")
        ("latexmk -e '$pdflatex=q/luajitlatex -synctex=1 -interaction=nonstopmode/' -e '$bibtex=q/bibtexu/' -e '$makeindex=q/texindy/' -norc -gg -pdf %f" "%f" "%r.pdf")
        ("latexmk -e '$pdflatex=q/xelatex -synctex=1 -interaction=nonstopmode/' -e '$bibtex=q/bibtexu/' -e '$makeindex=q/texindy/' -norc -gg -xelatex %f" "%f" "%r.pdf")
        ("pbibtex %r" "%r.aux" "%r.bbl")
        ("upbibtex %r" "%r.aux" "%r.bbl")
        ("bibtex %r" "%r.aux" "%r.bbl")
        ("bibtexu %r" "%r.aux" "%r.bbl")
        ("biber %r" "%r.bcf" "%r.bbl")
        ("mendex %r" "%r.idx" "%r.ind")
        ("makeindex %r" "%r.idx" "%r.ind")
        ("texindy %r" "%r.idx" "%r.ind")
        ((concat "\\doc-view" " \"" (car (split-string (format "%s" (tex-main-file)) "\\.")) ".pdf\"") "%r.pdf")
        ("evince %r.pdf" "%r.pdf")
        ("okular --unique %r.pdf" "%r.pdf")
        ("zathura -s -x \"emacsclient --no-wait +%%{line} %%{input}\" %r.pdf" "%r.pdf")
        ("qpdfview --unique %r.pdf" "%r.pdf")
        ("pdfviewer %r.pdf" "%r.pdf")
        ("texworks %r.pdf" "%r.pdf")
        ("acroread %r.pdf" "%r.pdf")
        ("pdfopen -viewer ar9-tab %r.pdf" "%r.pdf")))

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

(defun pdfviewer-forward-search ()
  (interactive)
  (let* ((ctf (buffer-name))
         (mtf (tex-main-file))
         (pf (concat (car (split-string mtf "\\.")) ".pdf"))
         (ln (format "%d" (line-number-at-pos)))
         (cmd "pdfviewer")
         (args (concat "\"file:" pf "#src:" ln " " ctf "\"")))
    (message (concat cmd " " args))
    (process-kill-without-query
     (start-process-shell-command "pdfviewer" nil cmd args))))

(add-hook 'latex-mode-hook
          '(lambda ()
             (define-key latex-mode-map (kbd "C-c p") 'pdfviewer-forward-search)))

;;
;; RefTeX with TeX mode
;;
(add-hook 'latex-mode-hook 'turn-on-reftex)
```

***

#### 使い方 {#b6d90b9d}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#36A;text-align:center">メニュー [TeX]</th><th style="color:#FFF;background-color:#36A;text-align:center">入力</th><th style="color:#FFF;background-color:#36A;text-align:center">機能</th></tr>
> <tr><td>TeX File</td><td>C-c C-f</td><td>タイプセット</td></tr>
> <tr><td>TeX Kill</td><td>C-c C-k</td><td>タイプセットを中断</td></tr>
> <tr><td>BibTeX File</td><td>C-c C-i または C-c TAB</td><td>BibTeX</td></tr>
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

<span style="color:Black;background-color:#3465A4;"><ins>　</ins></span>[<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/08/EmacsIcon.svg/200px-EmacsIcon.svg.png" alt="GNU Emacs - GNU Project - Free Software Foundation (FSF)" width="28" height="28">](http://www.gnu.org/software/emacs/)<span style="color:Black;background-color:#3465A4;"><ins>　<span style="color:White;"><strong>emacs@TeX mode</strong></span>　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#245594;"></ins>\[ <span style="color:White;"><strong>◛</strong></span> \]<ins></span><span style="color:Black;background-color:#245594;"></ins>\[ <span style="color:White;"><strong>▭</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<span style="color:Black;background-color:#DAE0FE;"><ins>　　ファイル　 編集　 オプション　 バッファ　 ツール　 TeX　 Ref　 ヘルプ　　　　</ins></span><br>

...<br>
&#x2d;U\\---　　<strong>emacs.tex</strong>　　　　　Top L1　　　(LaTeX Ref)-------------------<br>

***

<span style="color:Black;background-color:#3465A4;"><ins>　</ins></span>[<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/08/EmacsIcon.svg/200px-EmacsIcon.svg.png" alt="GNU Emacs - GNU Project - Free Software Foundation (FSF)" width="28" height="28">](http://www.gnu.org/software/emacs/)<span style="color:Black;background-color:#3465A4;"><ins>　<span style="color:White;"><strong>emacs@TeX mode</strong></span>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<span style="color:Black;background-color:#245594;"></ins>\[ <span style="color:White;"><strong>◛</strong></span> \]<ins></span><span style="color:Black;background-color:#245594;"></ins>\[ <span style="color:White;"><strong>▭</strong></span> \]<ins></span><span style="color:Black;background-color:#CC3333;"></ins>\[ 　<span style="color:White;"><strong>✕</strong></span>　 \]<ins></span> </ins></span><br>

<span style="color:Black;background-color:#DAE0FE;"><ins>　　ファイル　 編集　 オプション　 バッファ　 ツール　 TeX　 Errors　 Complete　 In/Out　 Signals　 ヘルプ　　　　</ins></span><br>

...<br>
&#x2d;U\\---　　<strong>emacs.tex</strong>　　　　　Top L1　　　(LaTeX Ref)-----------------------------------------------<br>
...<br>
&#x2d;S:\*\*-　　<strong>\*tex-shell\*</strong>　　　　　Bot L1　　　(TeX-Shell:run Shell-Compile)--------------------------------<br>

***
