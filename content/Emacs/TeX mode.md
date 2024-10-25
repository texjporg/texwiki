---
title: "Emacs/TeX mode"
url: "/Emacs/TeX mode/"
date: 2013-04-12T19:40:16Z
pukiwiki: "Emacs/TeX mode"
---

# Emacs/TeX mode

[Emacs](/Emacs/) > TeX mode

## [TeX mode](https://git.savannah.gnu.org/cgit/emacs.git/tree/lisp/textmodes/tex-mode.el) <a id="tex-mode"></a> {#e09eebbf}

[TeX mode](https://www.gnu.org/software/emacs/manual/html_node/emacs/TeX-Mode.html#TeX-Mode) は TeX ファイルを編集・タイプセット・プレビューするための Emacs のメジャーモードです．
Emacs には標準で含まれています．

標準添付ですが，設定すれば十分に使い物になります． <!-- 私が普段使っている環境は tex-mode に少し手を入れたものです（RefTeX, Helm や auto-complete も一緒に使っています）．- - kmaeda -->
しかし，TeX mode を拡張したものとして，国内では [YaTeX](/YaTeX/)，海外では [AUCTeX](/AUCTeX/) がよく使われているため，Web 上の情報量もこれらについてのものが多いです．
機能もこれらの方が豊富なので，どれを使用するかは比較検討して下さい．

***

***

## 使い方 {#b6d90b9d}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#36A;text-align:center">メニュー [TeX]</th><th style="color:#FFF;background-color:#36A;text-align:center">キーバインド</th><th style="color:#FFF;background-color:#36A;text-align:center">機能</th></tr>
> <tr><td>TeX File</td><td>C-c C-f</td><td>タイプセット</td></tr>
> <tr><td>TeX Kill</td><td>C-c C-k</td><td>タイプセットを中断</td></tr>
> <tr><td>BibTeX File</td><td>C-c C-i または C-c TAB</td><td>BibTeX</td></tr>
> <tr><td>TeX View</td><td>C-c C-v</td><td>プレビュー</td></tr>
> <tr><td>TeX Print</td><td>C-c C-p</td><td>印刷</td></tr>
> <tr><td></td><td>C-c C-c</td><td>ユーザー定義コマンドの実行</td></tr>
> <tr><td></td><td>C-c C-o</td><td>\begin{...} ... \end{...} の補完</td></tr>
> <tr><td></td><td>C-c C-e</td><td>\end{...} の補完</td></tr>
> <tr><td></td><td>C-c C-u</td><td>環境内の \begin{...} の先頭に移動</td></tr>
> <tr><td></td><td>C-M-m</td><td>\item を入力</td></tr>
> <tr><td></td><td>C-c C-m または C-c RET</td><td>*tex-shell* バッファに RET を入力として送る</td></tr>
> </tbody>
> </table>
>

C-c C-f によるタイプセットは，設定ファイルにおいて latex-run-command（latex-mode の場合．tex-mode の場合は tex-run-command）にセットされたコマンドが実行されます．
デフォルトのコマンドは latex，つまり欧文用なので，このままでは日本語は出ません．
下の設定例を参考に，lualatex などに変更して下さい．

同様に，BibTeX のコマンドのデフォルトは bibtex，プレビューコマンドのデフォルトは xdvi (X Window System), yap (Windows), dvi2tty（それ以外）ですので，適宜変更する必要があります．

プレビューコマンドと印刷コマンドを PDF ビューアに変更する場合は tex-print-file-extension を ".pdf" に設定して tex-dvi-view-command と tex-dvi-print-command をそれぞれ使用する PDF ビューアに設定してください．

lualatex, xelatex, pdflatex, uplatex + dvipdfmx など，複数のコマンドを併用したいときもあると思います．
このような時にはユーザー定義コマンド (tex-compile-commands) に登録しておくと，C-c C-c で選択することができます．

ユーザー定義コマンドは C-c C-c C-i または C-c C-c TAB で一覧が表示できます．
一覧の中からマウスでクリックすると実行されます．
キーボードを使用する場合はある程度キーボードで入力して C-i または TAB を入力すると補完されます．

## 注意点 {#m2671d0c}

### " を入力しようとすると \`\` が入力される {#y76d0516}

TeX mode, AUCTeX, YaTeX では " を入力しようとすると \`\` が入力されます．
\`\` ではなく " を入力したい場合は ""（" を2回打つ）か C-q " (Ctrl-Q を入力した後で " を入力) とします．

- [Emacs + YaTeX でダブルクォーテーションを入力](http://tetu1984.hateblo.jp/entry/20090123/1232651566)

## 設定 {#x084b3ec}

Emacs を起動して

```
C-x C-f ~/
```

でホームディレクトリ (&#x7e;/) の場所を確認します．
&#x7e;/.emacs.d/ が無ければ新規に作成し，&#x7e;/.emacs.d/init.el に設定を記述します．

### Windows での設定例 {#m2df1dd4}

***

```
;;
;; TeX mode
;;
(setq auto-mode-alist
      (append '(("\\.tex$" . latex-mode)) auto-mode-alist))
(setq tex-default-mode 'latex-mode)
(setq tex-start-commands "\\nonstopmode\\input")
(setq tex-run-command "luahbtex -synctex=1 -interaction=nonstopmode")
(setq latex-run-command "lualatex -synctex=1 -interaction=nonstopmode")
(setq tex-bibtex-command "bibtexu")
(setq tex-print-file-extension ".pdf")
(setq tex-dvi-view-command "powershell -Command \"& {$pdf=[System.String]::Concat('\"\"\"',$args,'\"\"\"');$sumatrapdf=[System.String]::Concat('\"\"\"C:/Users/',$Env:USERNAME,'/AppData/Local/SumatraPDF/SumatraPDF.exe\"\"\"');Start-Process $sumatrapdf -ArgumentList ('-reuse-instance',$pdf)}\"")
(setq tex-dvi-print-command "start Acrobat")
(setq tex-compile-commands
      '(("latexmk -e \"$lualatex=q/lualatex %%O -synctex=1 -interaction=nonstopmode %%S/\" -e \"$bibtex=q/bibtexu %%O %%B/\" -e \"$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/\" -e \"$makeindex=q/upmendex %%O -o %%D %%S/\" -norc -gg -pdflua %f" "%f" "%r.pdf")
        ("latexmk -e \"$latex=q/uplatex %%O -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode %%S/\" -e \"$bibtex=q/bibtexu %%O %%B/\" -e \"$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/\" -e \"$makeindex=q/upmendex %%O -o %%D %%S/\" -e \"$dvipdf=q/dvipdfmx %%O -o %%D %%S/\" -norc -gg -pdfdvi %f" "%f" "%r.pdf")
        ((concat "\\doc-view" " \"" (car (split-string (format "%s" (tex-main-file)) "\\.")) ".pdf\"") "%r.pdf")
        ("texworks %r.pdf" "%r.pdf")
        ("texstudio --pdf-viewer-only %r.pdf" "%r.pdf")
        ("powershell -Command \"& {$r = Write-Output %r.pdf;$p = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFileName($r),'\"\"\"');Start-Process firefox -ArgumentList ('-new-window',$p)}\"" "%r.pdf")
        ("powershell -Command \"& {$r = Write-Output %r.pdf;$p = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFullPath($r),'\"\"\"');Start-Process chrome -ArgumentList ('--new-window',$p)}\"" "%r.pdf")
        ("powershell -Command \"& {$r = Write-Output %r.pdf;$p = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFullPath($r),'\"\"\"');Start-Process msedge -ArgumentList ('--new-window',$p)}\"" "%r.pdf")
        ("start Acrobat %r.pdf" "%r.pdf")))

(defun sumatrapdf-forward-search ()
  (interactive)
  (let* ((ctf (buffer-name))
         (mtf (tex-main-file))
         (pf (concat (car (split-string mtf "\\.")) ".pdf"))
         (ln (format "%d" (line-number-at-pos)))
         (cmd (concat "\"C:/Users/" (getenv "USERNAME") "/AppData/Local/SumatraPDF/SumatraPDF.exe\""))
         (args (concat "-reuse-instance \"" pf "\" -forward-search \"" ctf "\" " ln)))
    (message (concat cmd " " args))
    (set-process-query-on-exit-flag
     (start-process-shell-command "sumatrapdf" nil (concat cmd " " args)) nil) t))

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
    (set-process-query-on-exit-flag
     (start-process-shell-command "fwdsumatrapdf" nil (concat cmd " " args)) nil) t))

(add-hook 'latex-mode-hook
          '(lambda ()
             (define-key latex-mode-map (kbd "C-c f") 'fwdsumatrapdf-forward-search)))

;;
;; RefTeX with TeX mode
;;
(add-hook 'latex-mode-hook 'turn-on-reftex)
```

***

### macOS での設定例 {#g5794e10}

動作未確認です．

***

```
;;
;; PATH
;;
(setenv "PATH" "/usr/local/bin:/Library/TeX/texbin/:/Applications/Skim.app/Contents/SharedSupport:$PATH" t)
(setq exec-path (append '("/usr/local/bin" "/Library/TeX/texbin" "/Applications/Skim.app/Contents/SharedSupport") exec-path))

;;
;; TeX mode
;;
(setq auto-mode-alist
      (append '(("\\.tex$" . latex-mode)) auto-mode-alist))
(setq tex-default-mode 'latex-mode)
(setq tex-start-commands "\\nonstopmode\\input")
(setq tex-run-command "luahbtex -synctex=1 -interaction=nonstopmode")
(setq latex-run-command "lualatex -synctex=1 -interaction=nonstopmode")
(setq tex-bibtex-command "bibtexu")
(setq tex-print-file-extension ".pdf")
(setq tex-dvi-view-command "open -a Skim")
(setq tex-dvi-print-command "open -a \"Adobe Acrobat\"")
(setq tex-compile-commands
      '(("latexmk -e '$lualatex=q/lualatex %%O -synctex=1 -interaction=nonstopmode %%S/' -e '$bibtex=q/bibtexu %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/upmendex %%O -o %%D %%S/' -norc -gg -pdflua %f" "%f" "%r.pdf")
        ("latexmk -e '$latex=q/uplatex %%O -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode %%S/' -e '$bibtex=q/bibtexu %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/upmendex %%O -o %%D %%S/' -e '$dvipdf=q/dvipdfmx %%O -o %%D %%S/' -norc -gg -pdfdvi %f" "%f" "%r.pdf")
        ((concat "\\doc-view" " \"" (car (split-string (format "%s" (tex-main-file)) "\\.")) ".pdf\"") "%r.pdf")
        ("open -a Preview %r.pdf" "%r.pdf")
        ("open -a TeXShop %r.pdf" "%r.pdf")
        ("/Applications/TeXworks.app/Contents/MacOS/TeXworks %r.pdf" "%r.pdf")
        ("/Applications/texstudio.app/Contents/MacOS/texstudio --pdf-viewer-only %r.pdf" "%r.pdf")
        ("open -a Firefox %r.pdf" "%r.pdf")
        ("open -a \"Google Chrome\" %r.pdf" "%r.pdf")
        ("open -a \"Adobe Acrobat\" %r.pdf" "%r.pdf")))

(defun skim-forward-search ()
  (interactive)
  (let* ((ctf (buffer-name))
         (mtf (tex-main-file))
         (pf (concat (car (split-string mtf "\\.")) ".pdf"))
         (ln (format "%d" (line-number-at-pos)))
         (cmd "/Applications/Skim.app/Contents/SharedSupport/displayline")
         (args (concat ln " " pf " " ctf)))
    (message (concat cmd " " args))
    (set-process-query-on-exit-flag
     (start-process-shell-command "displayline" nil (concat cmd " " args)) nil) t))

(add-hook 'latex-mode-hook
          '(lambda ()
             (define-key latex-mode-map (kbd "C-c s") 'skim-forward-search)))

;;
;; RefTeX with TeX mode
;;
(add-hook 'latex-mode-hook 'turn-on-reftex)
```

***

### Linux での設定例 {#q1bd16f3}

fwdevince は Evince/fwdevince にあるものを使用することを想定します．

***

```
;;
;; TeX mode
;;
(setq auto-mode-alist
      (append '(("\\.tex$" . latex-mode)) auto-mode-alist))
(setq tex-default-mode 'latex-mode)
(setq tex-start-commands "\\nonstopmode\\input")
(setq tex-run-command "luahbtex -synctex=1 -interaction=nonstopmode")
(setq latex-run-command "lualatex -synctex=1 -interaction=nonstopmode")
(setq tex-bibtex-command "bibtexu")
(setq tex-print-file-extension ".pdf")
(setq tex-dvi-view-command "evince")
(setq tex-dvi-print-command "perl -e 'system(\"wine64 cmd /c start Acrobat.exe `basename $ARGV[0]`\")'")
(setq tex-compile-commands
      '(("latexmk -e '$lualatex=q/lualatex %%O -synctex=1 -interaction=nonstopmode %%S/' -e '$bibtex=q/bibtexu %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/upmendex %%O -o %%D %%S/' -norc -gg -pdflua %f" "%f" "%r.pdf")
        ("latexmk -e '$latex=q/uplatex %%O -kanji=utf8 -no-guess-input-enc -synctex=1 -interaction=nonstopmode %%S/' -e '$bibtex=q/bibtexu %%O %%B/' -e '$biber=q/biber %%O --bblencoding=utf8 -u -U --output_safechars %%B/' -e '$makeindex=q/upmendex %%O -o %%D %%S/' -e '$dvipdf=q/dvipdfmx %%O -o %%D %%S/' -norc -gg -pdfdvi %f" "%f" "%r.pdf")
        ((concat "\\doc-view" " \"" (car (split-string (format "%s" (tex-main-file)) "\\.")) ".pdf\"") "%r.pdf")
        ("xdg-open %r.pdf &" "%r.pdf")
        ("okular --unique %r.pdf &" "%r.pdf")
        ("zathura -x \"emacsclient --no-wait +%%{line} %%{input}\" %r.pdf &" "%r.pdf")
        ("qpdfview --unique %r.pdf &" "%r.pdf")
        ("texworks %r.pdf &" "%r.pdf")
        ("texstudio --pdf-viewer-only %r.pdf" "%r.pdf")
        ("mupdf %r.pdf &" "%r.pdf")
        ("firefox -new-window %r.pdf &" "%r.pdf")
        ("chromium --new-window %r.pdf &" "%r.pdf")
        ("wine64 cmd /c start Acrobat.exe %r.pdf &" "%r.pdf")))

(defun evince-forward-search ()
  (interactive)
  (let* ((ctf (buffer-name))
         (mtf (tex-main-file))
         (pf (concat (car (split-string mtf "\\.")) ".pdf"))
         (ln (format "%d" (line-number-at-pos)))
         (cmd "fwdevince")
         (args (concat "\"" pf "\" " ln " \"" ctf "\"")))
    (message (concat cmd " " args))
    (set-process-query-on-exit-flag
     (start-process-shell-command "fwdevince" nil (concat cmd " " args)) nil) t))

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
  (let* ((fname (decode-coding-string (url-unhex-string (un-urlify file)) 'utf-8))
         (buf (find-file fname))
         (line (car linecol))
         (col (cadr linecol)))
    (if (null buf)
        (message "[Synctex]: %s is not opened..." fname)
      (switch-to-buffer buf)
      (goto-line (car linecol))
      (unless (= col -1)
        (move-to-column col))
      (x-focus-frame (selected-frame)))))

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
    (set-process-query-on-exit-flag
     (start-process-shell-command "okular" nil (concat cmd " " args)) nil) t))

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
    (set-process-query-on-exit-flag
     (start-process-shell-command "zathura" nil (concat cmd " " args)) nil) t))

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
    (set-process-query-on-exit-flag
     (start-process-shell-command "qpdfview" nil (concat cmd " " args)) nil) t))

(add-hook 'latex-mode-hook
          '(lambda ()
             (define-key latex-mode-map (kbd "C-c q") 'qpdfview-forward-search)))

;;
;; RefTeX with TeX mode
;;
(add-hook 'latex-mode-hook 'turn-on-reftex)
```

***

## 関連リンク {#ca23f166}

- [TeX Mode - GNU Emacs Manual](https://www.gnu.org/software/emacs/manual/html_node/emacs/TeX-Mode.html#TeX-Mode)
- [TeX Mode (GNU Emacs Manual(Japanese Translation))](https://ayatakesi.github.io/emacs/29.4/html/TeX-Mode.html#TeX-Mode)
- [RefTeX User Manual](https://www.gnu.org/software/emacs/manual/html_node/reftex/)
- [【電脳】Mac OS Xで「EmacsでLaTeXファイルを編集→pdflatexでコンパイル→Previewでプレビュー」を繰り返す【自動リロード】](https://srad.jp/~t-nissie/journal/560083)

### レポジトリ {#kdedd1cc}

- [https://git.savannah.gnu.org/cgit/emacs.git/tree/lisp/textmodes/tex-mode.el](https://git.savannah.gnu.org/cgit/emacs.git/tree/lisp/textmodes/tex-mode.el)
- [https://git.savannah.gnu.org/gitweb/?p=emacs.git;a=blob;f=lisp/textmodes/tex-mode.el;hb=HEAD](https://git.savannah.gnu.org/gitweb/?p=emacs.git;a=blob;f=lisp/textmodes/tex-mode.el;hb=HEAD)

### ChangeLog {#fe3d1392}

- [https://git.savannah.gnu.org/cgit/emacs.git/log/lisp/textmodes/tex-mode.el](https://git.savannah.gnu.org/cgit/emacs.git/log/lisp/textmodes/tex-mode.el)
