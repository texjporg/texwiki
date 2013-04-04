---
title: "Emacs"
url: "/Emacs/"
date: 2013-04-04T03:55:54Z
bookCollapseSection: true
pukiwiki: "Emacs"
---

# Emacs

## [Emacs](http://www.gnu.org/software/emacs/) {#lc308d9d}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/08/EmacsIcon.svg/200px-EmacsIcon.svg.png" alt="Emacs" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

<div style="clear:both"></div>

## Emacs とは {#a9896c87}

Emacs は，拡張性のあるカスタマイズ可能なテキストエディタです．でも，それだけではありません．<br>
Emacs の核となる部分は Emacs Lisp インタプリタです．<br>
Emacs Lisp は Lisp の方言の一つで，テキストの編集をサポートする機能があります．<br>
Emacs Lisp を使えば自由に楽しくカスタマイズすることができます．<br>

- [Emacs JP](http://emacs-jp.github.com/)
- [emacs-jp/emacs-jp.github.com · GitHub](https://github.com/emacs-jp/emacs-jp.github.com)

### GNU Emacs {#e77c7c99}

- [GNU Emacs - GNU Project - Free Software Foundation (FSF)](http://www.gnu.org/software/emacs/)
    - [ftp://ftp.gnu.org/gnu/emacs/windows/](ftp://ftp.gnu.org/gnu/emacs/windows/)
    - [http://ftp.gnu.org/gnu/emacs/windows/](http://ftp.gnu.org/gnu/emacs/windows/)
    - [ftp://alpha.gnu.org/gnu/emacs/windows/](ftp://alpha.gnu.org/gnu/emacs/windows/)
    - [http://alpha.gnu.org/gnu/emacs/windows/](http://alpha.gnu.org/gnu/emacs/windows/)

#### 動作環境 {#tabe669d}

[Supported Platforms](http://www.gnu.org/software/emacs/#Platforms) を参照．

#### License {#u2ed578f}

GNU Emacs は，フリーソフトウェアです．<br>
[GPLv3](http://gplv3.fsf.org/) ([日本語訳](http://sourceforge.jp/projects/opensource/wiki/licenses%2FGNU_General_Public_License_version_3.0)) でリリースされています．<br>

#### リリース情報 {#z96ff3b2}

[Releases](http://www.gnu.org/software/emacs/#Releases) を参照．<br>

- [WHAT’S NEW IN EMACS 24.3](http://www.masteringemacs.org/articles/2013/03/11/whats-new-emacs-24-3/)

#### ChangeLog {#eba94bf5}

- [Browsing /emacs - Savannah Bazaar repositories](http://bzr.savannah.gnu.org/lh/emacs/)
    - [コミットログ](http://bzr.savannah.gnu.org/lh/emacs/trunk/changes/)
    - [ChangeLog](http://bzr.savannah.gnu.org/lh/emacs/trunk/annotate/head:/ChangeLog)
- [emacs.git - Git mirror of Emacs bzr repo](http://git.savannah.gnu.org/cgit/emacs.git)
    - [コミットログ](http://git.savannah.gnu.org/cgit/emacs.git/log/)
    - [ChangeLog](http://git.savannah.gnu.org/cgit/emacs.git/tree/ChangeLog)
- [Savannah Git Hosting - emacs.git/summary](http://git.savannah.gnu.org/gitweb/?p=emacs.git)
    - [コミットログ](http://git.savannah.gnu.org/gitweb/?p=emacs.git;a=shortlog)
    - [ChangeLog](http://git.savannah.gnu.org/gitweb/?p=emacs.git;a=blob;f=ChangeLog;hb=HEAD)
- [Public Git Hosting - emacs.git/summary](http://repo.or.cz/w/emacs.git)
    - [コミットログ](http://repo.or.cz/w/emacs.git/shortlog)
    - [ChangeLog](http://repo.or.cz/w/emacs.git/blob/master:/ChangeLog)

### 派生版 {#n86b811e}

#### Windows {#k091604e}

- [emacs for gnupack](http://sourceforge.jp/projects/gnupack/releases/?package_id=10839)
    - [gnupackの開発メモ](http://d.hatena.ne.jp/ksugita0510/)
    - [gnupack Users Guide](http://gnupack.sourceforge.jp/docs/current/UsersGuide.html)
    - [gnupack](http://gnupack.sourceforge.jp/docs/current/UsersGuide_download.html)[#emacs for gnupack](http://gnupack.sourceforge.jp/docs/current/UsersGuide_download.html#_download_emacs)
    - [ビルド記録](http://gnupack.sourceforge.jp/docs/current/UsersGuide_build_procedure.html#_emacs)
    - [http://jaist.dl.sourceforge.jp/gnupack/](http://jaist.dl.sourceforge.jp/gnupack/)
- [GNU emacs(x64)](http://hp.vector.co.jp/authors/VA052357/emacs.html)
    - [GNU emacs windows(x64)バイナリパッケージ](http://www.vector.co.jp/soft/winnt/writing/se494046.html)
- [NTEmacs](http://cha.la.coocan.jp/doc/NTEmacs.html)
- [Emacs for Windows Modified](http://vgoulet.act.ulaval.ca/en/emacs/windows/)

#### OS X {#v2ece0ad}

- [Emacs.app - マスクメロン](http://www.muskmelon.jp/?page_id=79)
    - [Emacs Mac port \[experimental/hackers-only\]](ftp://ftp.math.s.chiba-u.ac.jp/emacs/)
        - [Mac OS X での Emacs (2)](http://skalldan.wordpress.com/2011/08/05/mac-os-x-%E3%81%A7%E3%81%AE-emacs-2/)
        - [Emacs Mac port を使う](http://kouzuka.blogspot.com/2011/03/emacs-mac-port.html)
- [Emacs For Mac OS X](http://www.emacsformacosx.com/)
    - [Emacs For Mac OS X: Releases, Pretests &amp; Nightlies](http://www.emacsformacosx.com/builds)
- [Emacs for OS X Modified](http://vgoulet.act.ulaval.ca/en/emacs/mac/)
- [Aquamacs Emacs](http://aquamacs.org/)
    - MacWiki:Aquamacs_Emacs によると Aquamacs Emacs は，ネットワーク経由でモードの利用情報などを収集するらしいです．(setq aquamacs-version-check-url nil) でオフにできます．詳しくは [check-for-updates.el](https://github.com/davidswelt/aquamacs-emacs/blob/master/aquamacs/src/site-lisp/check-for-updates.el) を参照．
    - [コミットログ](https://github.com/davidswelt/aquamacs-emacs/commits/master)

#### Windows, OS X, Linux {#l1a2cc42}

- [XEmacs: The next generation of Emacs](http://www.xemacs.org/)
    - [xemacs &mdash; Bitbucket](https://bitbucket.org/xemacs/)
        - [コミットログ](https://bitbucket.org/xemacs/xemacs/changesets)
- [ErgoEmacs](http://ergoemacs.org/)

#### Android {#meb27277}

- [Emacs - Android Apps on Google Play](https://play.google.com/store/apps/details?id=com.zielm.emacs&hl=ja)

#### iOS {#nf68bb78}

- [Emacs for iOS](http://gamma-level.com/iphoneos/ports/)

### [EmacsWiki](http://www.emacswiki.org/) {#mde20549}

- [CategoryWThirtyTwo](http://www.emacswiki.org/emacs/CategoryWThirtyTwo)
- [EmacsForMacOS](http://www.emacswiki.org/emacs/EmacsForMacOS)

### メニューの日本語化 {#q01dd8c4}

- [menu-tree.elのぺえじ](http://www11.atwiki.jp/s-irie/pages/13.html)

## Emacs で LaTeX {#p527fec0}

### [TeX mode](http://bzr.savannah.gnu.org/lh/emacs/trunk/annotate/head:/lisp/textmodes/tex-mode.el) <a id="tex-mode"></a> {#h04d4173}

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
(setq latex-run-command "platex -kanji=utf8 -guess-input-enc -synctex=1 -interaction=nonstopmode")
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
(setq latex-run-command "/usr/texbin/platex -synctex=1 -interaction=nonstopmode")
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
(setq latex-run-command "platex -synctex=1 -interaction=nonstopmode")
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

### その他の TeX に関する便利な elisp {#s94c0123}

- [EmacsWiki: Category Tex](http://www.emacswiki.org/emacs/CategoryTex)
- [YASnippet](/YASnippet/) スニペットプラグイン
- [AUCTeX](/AUCTeX/) GNU Emacs や XEmacs で TeX ファイルを編集するための拡張パッケージ
- [YaTeX](/YaTeX/) Yet Another TeX mode for Emacs．YaTeX (野鳥) は，Emacs の TeX 入力支援環境です．
- Org mode Org mode is for keeping notes, maintaining TODO lists, planning projects, and authoring documents with a fast and effective plain-text system.
- [latex-math-preview.el](http://transitive.info/software/latex-math-preview/) TeX ファイル中の数式を Emacs や Meadow でプレビューするための Emacs Lisp
    - [Windows XP で latex-math-preview.el を使う](http://transitive.info/software/latex-math-preview/meadow/)
    - [EmacsWiki:LaTeXMathPreview](http://www.emacswiki.org/emacs/LaTeXMathPreview)
    - [latex-math-previewについて &laquo; blog &#8211; 鶫](http://tsugumimath.wordpress.com/latex-math-preview%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/)
    - [QA: YaTeXで数式のpreview](http://oku.edu.mie-u.ac.jp/tex/mod/forum/discuss.php?d=349)
- [WYSIWYG-TeX.el](https://github.com/laysakura/WYSIWYG-TeX-el) WYSIWYG-TeX.el は， Emacs 上で TeX を WYSIWYG (What You See Is What You Get) 編集するための拡張です．
- [auto-complete-latex-light](https://github.com/tequilasunset/auto-complete-latex-light)
    - [auto-complete-latex-light.el](http://d.hatena.ne.jp/tequilasunset/20110104/p1)
- [Auto Complete LaTeX](https://bitbucket.org/tequilasunset/auto-complete-latex)
    - [最近の auto-complete-latex について](http://d.hatena.ne.jp/tequilasunset/20100224/p1)
    - [auto-complete-latex がとってもすばらしい](http://d.hatena.ne.jp/whitypig/20110908/1315477128)
- [auto-complete-mode パッケージを作ってみた (auto-complete-yatex)](http://d.hatena.ne.jp/munepi/20110825/emacs)
- [Anything-BibTeX を作りました](http://d.hatena.ne.jp/k6ky/20111227/1324987106)
- [flymake-LaTeX](https://github.com/IKEGAMIDaisuke/flymake-LaTeX)
- [sumatra-forward.el](http://william.famille-blum.org/blog/static.php?page=static081010-000413) (X)Emacs frontend to forward search with SumatraPDF
- [UltraTexMode](http://www.emacswiki.org/emacs/UltraTexMode)
    - [LightningCompletion](http://www.emacswiki.org/emacs/LightningCompletion) を使って動的補完をするメジャーモード
- [SwifTeX](https://mirror.ctan.org/help/Catalogue/entries/swiftex.html)
    SwifTeX created for doc.sty, derived mode

- [RefTeX](http://www.emacswiki.org/emacs/RefTeX)  support for labels, references, citations and indices
- [BibTeX](http://www.emacswiki.org/emacs/BibTeX) bibliography in LaTeX, editing style files
- [CDLaTeX](http://www.emacswiki.org/emacs/CDLaTeX)  minor mode, templates
- [Talcum](http://www.emacswiki.org/emacs/Talcum)  unclutter, command insertion, refresh preview window after compilation
- [PreviewLaTeX](http://www.emacswiki.org/emacs/PreviewLaTeX)  visualization of images, tables, math directly as images in the source buffer.
- [XSymbolMode](http://www.emacswiki.org/emacs/XSymbolMode)  assist input of symbols in some token languages; uses a special font to display math
- [WhizzyTeX](http://www.emacswiki.org/emacs/WhizzyTeX)  real-time updates in a separate preview window while you type
- [LatexOverview](http://www.emacswiki.org/emacs/LatexOverview)  LatexOverview describes how to get overview without [AUCTeX](/AUCTeX/)
- [LaTeXSymbols](http://www.emacswiki.org/emacs/LaTeXSymbols)  LaTeXSymbols input of TeX symbols, XEmacs only
- [InverseDviSearch](http://www.emacswiki.org/emacs/InverseDviSearch)  going from dvi preview to editor and vice versa
- [NonbreakableSpace](http://www.emacswiki.org/emacs/NonbreakableSpace)  inserting nonbreakable spaces into document
- [iTe](http://www.emacswiki.org/emacs/iTe) A semi-WYSIWYG TeX mode, for in buffer manipulation of objects (images fragments)
- [TeXPict](https://mirror.ctan.org/help/Catalogue/entries/texpict.html) LaTeX picture Tcl/Tk editor, with some Emacs integration (via clipboard)
- [latex-doc.el](http://ee.usyd.edu.au/~thlai/emacs/index.html)　 latex-doc.el  displays a brief document of LaTeX
- [zencoding](https://github.com/reedobrien/zencoding)
- [latex_editor](http://sourceforge.net/projects/editorlatex/) emacs + auctex, vim + latex suite enviroment for windows.
- [emacsでpdfファイルを閲覧する](http://d.hatena.ne.jp/daharu/20111126/1322272094)
- [M-x align で TeX の表を整列できるようにする](http://d.hatena.ne.jp/supermassiveblackhole/20110223/1298443861)
- [emacs-jp/migemo · GitHub](https://github.com/emacs-jp/migemo)

#### [DocView](http://bzr.savannah.gnu.org/lh/emacs/trunk/annotate/head:/lisp/doc-view.el) <a id="docview"></a> {#s0614314}

DocView を使用すると Emacs で PDF/PS/DVI ファイルを表示することができます．

- [Document View - GNU Emacs Manual](http://www.gnu.org/software/emacs/manual/html_node/emacs/Document-View.html)

<table>
<tbody>
<tr><th style="color:#FFF;background-color:#36A;text-align:center">メニュー [DocView]</th><th style="color:#FFF;background-color:#36A;text-align:center">入力</th><th style="color:#FFF;background-color:#36A;text-align:center">機能</th></tr>
<tr><td>Toggle display</td><td>C-c C-c</td><td>表示の切り替え</td></tr>
<tr><td>Search</td><td>C-s</td><td>検索</td></tr>
<tr><td>Search Backwards</td><td>C-r</td><td>逆順検索</td></tr>
</tbody>
</table>

## SumatraPDF との連携 {#haedf247}

### forward search {#i028a48f}

[TeX mode#Windows](/Emacs/#m2df1dd4)<br>
[AUCTeX#インストール#Windows#設定](/AUCTeX/#g637a7d7)<br>
[YaTeX#インストール#Windows#設定](/YaTeX/#edc51324), [YaTeX#SumatraPDF との連携 (forward search)](/YaTeX/#ra95ecfb)<br>
を参照してください．

あるいは [sumatra-forward.el](http://william.famille-blum.org/blog/static.php?page=static081010-000413) を利用して forward search を行うことも可能です．<br>
sumatra-forward.el を使用する場合は，あらかじめ SumatraPDF を起動しておいてください．<br>
[emacs for gnupack](http://sourceforge.jp/projects/gnupack/releases/?package_id=10839) には ddeclient.exe が含まれているので別途ダウンロードする必要はありません．<br>

### inverse search {#a06810d6}

[Emacs Server - GNU Emacs Manual](http://www.gnu.org/software/emacs/manual/html_node/emacs/Emacs-Server.html#Emacs-Server)<br>
[emacsclient Options - GNU Emacs Manual](http://www.gnu.org/software/emacs/manual/html_node/emacs/emacsclient-Options.html)<br>

```
M-x server-start もしくは ~/.emacs.d/init.el に (server-start) を記述しておきます
```

inverse search は SumatraPDF の \[設定(S)\]-\[オプション(O)...\]-\[逆順検索コマンドラインの設定\] に

```
C:\emacs\bin\emacsclientw.exe --no-wait +%l "%f"
```

です．

ダブルクリックで対応する TeX 文書の該当箇所にジャンプします．

## Skim との連携 {#de8b4fcd}

### forward search {#s6b956ef}

[TeX mode#OS X](/Emacs/#g5794e10)<br>
[AUCTeX#インストール#OS X#設定](/AUCTeX/#n55816de)<br>
[YaTeX#インストール#OS X#設定](/YaTeX/#qe563613), [YaTeX#Skim との連携 (forward search)](/YaTeX/#f978a43b)<br>
を参照してください．

### inverse search {#e9c08b3d}

```
M-x server-start もしくは ~/.emacs.d/init.el に (server-start) を記述しておきます
```

[AUCTeX の設定と便利な機能 | Amrta](http://skalldan.wordpress.com/2011/07/20/auctex-%E3%81%AE%E8%A8%AD%E5%AE%9A%E3%81%A8%E4%BE%BF%E5%88%A9%E3%81%AA%E6%A9%9F%E8%83%BD/)<br>
を参照してください．

PDF-TeX 同期サポート:
: &nbsp;

初期値:
: Emacs

コマンド:
: emacsclient

引数:
: --no-wait +%line "%file"

Shift-Command-Click で対応する TeX 文書の該当箇所にジャンプします．

## Evince との連携 {#v19f2543}

### forward search {#p2255022}

[TeX mode#Linux](/Emacs/#q1bd16f3)<br>
[AUCTeX#インストール#Linux#設定](/AUCTeX/#p2d711b9), [AUCTeX#Evince との連携 (forward and inverse search)](/AUCTeX/#l4ab70a6)<br>
[YaTeX#インストール#Linux#設定](/YaTeX/#nec42ee2), [YaTeX#Evince との連携 (forward search)](/YaTeX/#h118b5e5)<br>
を参照してください．

### inverse search {#vecb4fd9}

TeX Live 2012, Evince 3.4.0, GNU Emacs 23.3.1 で動作確認しています．<br>
&#x7e;/.emacs.d/init.el に設定を記述します．<br>

```
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
```

Ctrl + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## Okular との連携 {#k7216a91}

### forward search {#maa4da39}

[TeX mode#Linux](/Emacs/#q1bd16f3)<br>
[AUCTeX#Linux#設定](/AUCTeX/#p2d711b9)<br>
[YaTeX#Okular との連携 (forward search)](/YaTeX/#o8772291)<br>
を参照してください．

### inverse search {#z0944532}

```
M-x server-start もしくは ~/.emacs.d/init.el に (server-start) を記述しておきます
```

\[Settings\]-\[Configure Okular...\]-\[Editor\] の項目から Emacs client を選択します．

Editor:
: Emacs client

Command:
: emacsclient -a emacs --no-wait +%l %f

Shift + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## zathura との連携 {#kb46ca7c}

### inverse search {#a432be77}

```
M-x server-start もしくは ~/.emacs.d/init.el に (server-start) を記述しておきます
```

- TeX mode の場合
    [TeX mode#Linux](/Emacs/#q1bd16f3)<br>

- AUCTeX の場合
    [AUCTeX#Linux#設定](/AUCTeX/#p2d711b9)<br>

- YaTeX の場合

    ```
    (setq dvi2-command "zathura -s -x \"emacsclient --no-wait +%{line} %{input}\"")
    ```

Ctrl + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## qpdfview との連携 {#b9ae3c2f}

### forward search {#te740b85}

[TeX mode#Linux](/Emacs/#q1bd16f3)<br>
[AUCTeX#Linux#設定](/AUCTeX/#p2d711b9)<br>
[YaTeX#qpdfview との連携 (forward search)](/YaTeX/#ic7abdb4)<br>
を参照してください．

### inverse search {#n709a57e}

```
M-x server-start もしくは ~/.emacs.d/init.el に (server-start) を記述しておきます
```

\[Edit\]-\[Settings...\]-\[Behaviour\]

Source editor:
: emacsclient -a emacs --no-wait +%2 "%1"

ダブルクリックで対応する TeX 文書の該当箇所にジャンプします．

## PdfViewer との連携 {#j5194364}

### forward search {#r571d61f}

[TeX mode#Linux](/Emacs/#q1bd16f3)<br>
[AUCTeX#Linux#設定](/AUCTeX/#p2d711b9)<br>
[YaTeX#PdfViewer との連携 (forward search)](/YaTeX/#c33117a9)<br>
を参照してください．

### inverse search {#ub3f8f81}

```
M-x server-start もしくは ~/.emacs.d/init.el に (server-start) を記述しておきます
```

\[Tools\]-\[Settings\]-\[Configure PdfViewer...\]

Editor:
: emacsclient -a emacs --no-wait +%l "%f"

Ctrl + 左クリックで対応する TeX 文書の該当箇所にジャンプします．

## スペルチェック {#d14df590}

[Aspell](/Aspell/) を使います．

## 設定に関するリンク {#pd1c5cfc}

### Windows {#a1ddfe8b}

- [Emacs 24のpackage管理機能を使う](http://keisanbutsuriya.blog.fc2.com/blog-entry-43.html)
- [NTEmacs version 24 とパッケージマネージャ](http://skalldan.wordpress.com/2012/06/26/ntemacs-version-24-%E3%81%A8%E3%83%91%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B8%E3%83%9E%E3%83%8D%E3%83%BC%E3%82%B8%E3%83%A3/)
- [emacs.exe と emacsclient.exe を自動的に使い分ける AutoHotkey のスクリプトを作成した (gnupack 向け)](http://blechmusik.hatenablog.jp/entry/20120721/1342805665)
- [うわっ...私のEmacs、使いにくすぎ？だったら...ｶｽﾀﾏｲｽﾞｼﾔｯｾｰ!!ﾀﾞｧﾀﾞｧｼｴﾘｲｪｯｽｯｼｪｰｼｮｰﾍｲﾍｲ!!!](http://d.hatena.ne.jp/sandai/20120304/p2)
- [NTEmacs で UTF-8 な環境構築を試行錯誤](http://skalldan.wordpress.com/2011/11/09/ntemacs-%E3%81%A7-utf-8-%E3%81%AA%E7%92%B0%E5%A2%83%E6%A7%8B%E7%AF%89%E3%82%92%E8%A9%A6%E8%A1%8C%E9%8C%AF%E8%AA%A4/)
- [Winodws 7 で Cygwin + NTEmacs 事始め](http://skalldan.wordpress.com/2011/11/04/winodws-7-%E3%81%A7-cygwin-ntemacs-%E4%BA%8B%E5%A7%8B%E3%82%81/)
- [EmacsをWindowsXPに入れる](http://stackstock.net/archives/1349/)
- [Emacs使いのミサワがWindowsで(NT)Emacs使うってそれどこ情報よー](http://d.hatena.ne.jp/sandai/20101015/p1)
- [SanRin舎 &raquo; Emacs](http://sanrinsha.lolipop.jp/blog/2010/07/emacs-1.html)
- [emacs 23.2 for windows(NTEmacs in gnupack)なら日本語入力(IME挙動)も問題なし](http://d.hatena.ne.jp/end0tknr/20100815/1281872885)
- [Emacs 23.1登場](http://dev.ariel-networks.com/articles/emacs/part6/)
- [GNU Emacsのinitファイルの置き場所＠Windows7](http://tamatamablog.blog.so-net.ne.jp/2010-02-10)
- [Windows環境でGnu Emacsな論文執筆環境を整える](http://hawaii.naist.jp/~chihiro-o/)
- [ntemacs 導入メモ](http://d.hatena.ne.jp/whitypig/20101109)
- \[[ソフトウェア\] NTEmacs 23.2 のインストール・設定](http://d.hatena.ne.jp/itouhiro/20100605)
- \[[ソフトウェア\] NTEmacs 23.1 のインストール・設定](http://d.hatena.ne.jp/itouhiro/20091027)
- [NTEmacs23起動バッチ](http://ameblo.jp/tonjiru2121/entry-10469734020.html)
- [Emacs23 日本語向け設定例](http://nijino.homelinux.net/emacs/emacs23-ja.html)

### OS X {#pa8b5a16}

- [Emacs : 紹介マニア](http://sakito.jp/emacs)
    - [Emacs24 のインストールと新機能](http://sakito.jp/emacs/emacs24.html)
    - [Emacs23 (Cocoa Emacs) 入門から中毒まで](http://sakito.jp/emacs/emacs23.html)
- [emacs:init.el - PastelWiki](http://pastelwill.jp/wiki/doku.php?id=emacs:init.el)
- [MacEmacs JP Project](http://macemacsjp.sourceforge.jp/)
- [Emacs Lisp で 変数や関数が定義されているファイルパスを取得するには](http://gongo.hatenablog.com/entry/2013/02/05/232633)
- [Retina を活かす Emacs へ移行](http://milanista224.blogspot.jp/2012/08/retina-emacs24.html)
- [Mac研究環境/【エディタ】](http://www.rmss.is.uec.ac.jp/pukiwiki/index.php?Mac%B8%A6%B5%E6%B4%C4%B6%AD%2F%A1%DA%A5%A8%A5%C7%A5%A3%A5%BF%A1%DB)
- [Build Emacs 24.1 on Mac OS X Lion](http://henry.animeo.jp/wp/?p=1648)
- [うわっ...私のEmacs、使いにくすぎ？だったら...ｶｽﾀﾏｲｽﾞｼﾔｯｾｰ!!ﾀﾞｧﾀﾞｧｼｴﾘｲｪｯｽｯｼｪｰｼｮｰﾍｲﾍｲ!!!](http://d.hatena.ne.jp/sandai/20120304/p2)
- [Cocoa Emacs のフォント設定について](http://d.hatena.ne.jp/setoryohei/20110117/1295336454)
- [Cocoa Emacs 64bit版を作ってみる](http://moimoitei.blogspot.com/2010/05/build-cocoa-emacs-64bit.html)
- [Emacs.app の設定 - マスクメロン](http://www.muskmelon.jp/?page_id=410)
- [CocoaEmacsに環境変数は引き継がれない](http://d.hatena.ne.jp/sugyan/20100704/1278241492)

### Linux {#l2b4bca7}

- [Ubuntu12.04にEmacs24.1をソースからコンパイルしてインストールする方法](http://dqn.sakusakutto.jp/2012/06/ubuntu1204_emacs241_build.html)

## 使い方 {#e776cf5f}

- [Evil: EmacsをVimのごとく使う - 導入編](http://d.hatena.ne.jp/tarao/20130303/evil_intro)
- [Emacs超入門［1］：Emacsの基本的な使い方とショートカットキー](http://sourceforge.jp/magazine/09/04/06/1138226)
- [Emacs Lisp 入門の Texinfo の和訳](http://www.math.s.chiba-u.ac.jp/~matsu/lisp/emacs-lisp-intro-jp_toc.html)
- [Emacs Lisp てほどき (PDF)](http://www.oki-osk.jp/esc/lecture/emacslisp.pdf)
- [スクリプト言語としてのEmacs Lisp](http://cx4a.org/pub/emacs-lisp-for-scripting.ja.html)
- [emacsでtexの不要なファイルを適当に削除する方法](http://blog.goo.ne.jp/koyusoma5102/e/3741fbda5033eb6a46f3474d4626554a)
- [ubuntuでjbibtexを使うときに文字化けしない](http://unaju.net/2011/06/ubuntu%E3%81%A7jbibtex%E3%82%92%E4%BD%BF%E3%81%86%E3%81%A8%E3%81%8D%E3%81%AB%E6%96%87%E5%AD%97%E5%8C%96%E3%81%91%E3%81%97%E3%81%AA%E3%81%84/)
