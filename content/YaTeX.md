---
title: "YaTeX"
url: "/YaTeX/"
date: 2014-04-28T19:44:48Z
pukiwiki: "YaTeX"
---

# YaTeX

[Emacs](/Emacs/) > YaTeX

## [YaTeX](https://www.yatex.org/) {#o2c95a66}

YaTeX（野鳥）は Emacs の TeX 用メジャーモードです．
[TeX mode](</Emacs/TeX mode/>) に比べ機能が大幅に拡張されています．
もう一つ，有名な拡張として [AUCTeX](/AUCTeX/) があり，海外ではこちらがよく使われているようです．
国内では YaTeX の方が人気があり，そのため日本語の情報が Web 上でたくさん見つかります．

***

***

## YaTeX とは {#q88fd71b}

- [YaTeX (Yet Another LaTeX mode for Emacs.)](https://www.yatex.org/) (公式ページ)
    - [『野鳥』クイックリファレンス](https://www.yatex.org/yatexref.txt)
    - [Yet Another tex-mode for Emacs - Table of Contents](https://www.yatex.org/info/yatexj_toc.html)

### スクリーンショット {#c84d00bd}

<!-- #ref(https://okumuralab.org/tex/file.php/2/moddata/forum/2/1712/LaTeXMathPreviewScreenshot.png,nolink,latex-math-preview.el) -->

<img src="https://www.emacswiki.org/pics/static/LaTeXMathPreviewScreenshot.png" alt="latex-math-preview.el">

## 注意点 {#x8b18a1c}

### " を入力しようとすると \`\` が入力される {#ibf10abb}

- [Emacs + YaTeX でダブルクォーテーションを入力](http://tetu1984.hateblo.jp/entry/20090123/1232651566)

YaTeX, TeX mode, AUCTeX では " を入力しようとすると \`\` が入力されます．
\`\` ではなく " を入力したい場合は C-q " (Ctrl-Q を入力した後で " を入力) とします．

<!-- *不具合 [#m12f4e1b] -->
<!--  -->
<!-- **YaTeX 1.80 で (setq dvi2-command "okular - -unique") を設定して C-c C-g を入力すると forward search ができない [#l5f1c74e] -->
<!--  -->
<!-- Okular は TeX ファイルをフルパスで指定しないと forward search ができないので，cf がフルパスでない場合は (expand-file-name cf) に修正する必要があります． -->
<!-- ただし，[[2016-01-08:https://www.yatex.org/hgrepos/hgweb.cgi/yatex/rev/e78a87bc2c9e]] 以降では (cf (buffer-file-name)) に変更されて cf はフルパスになったため，この修正は必要ありません． -->
<!--  -->
<!-- Okular の format "%s '%s.pdf#src:%d' '%s'" の設定は間違いで，format "%s '%s.pdf#src:%d %s'" に修正する必要があります． -->
<!--  -->
<!-- &#x7e;/.emacs.d/init.el に yatexprc.el の YaTeX-preview-jump-line を修正したものを再設定します． -->
<!--  -->
<!-- // (expand-file-name cf) はフルパスには関係なくて，フルパスになったの2016-01-08 に修正された -->
<!-- // (cf (buffer-file-name)) ではないのかと思います． -->
<!--  -->
<!-- // ↑ -->
<!-- // ご指摘ありがとうございます． -->
<!-- // たしかに cf がフルパスに変更されていますね． -->
<!-- // Okular 以外のビューアはフルパスでなくても実行できると思うのですが -->
<!-- // すべてフルパスになっていても問題ないと思います． -->
<!--  -->
<!-- (with-eval-after-load 'yatexprc -->
<!--   (defun YaTeX-preview-jump-line () -->
<!--     "Call jump-line function of various previewer on current main file" -->
<!--     (interactive) -->
<!--     (save-excursion -->
<!--       (save-restriction -->
<!--         (widen) -->
<!--         (let*((pf (or YaTeX-parent-file -->
<!--                       (save-excursion (YaTeX-visit-main t) (buffer-file-name)))) -->
<!--               (pdir (file-name-directory pf)) -->
<!--               (bnr (substring pf 0 (string-match "\\....$" pf))) -->
<!--               ;(cf (file-relative-name (buffer-file-name) pdir)) -->
<!--               (cf (buffer-file-name)) ;2016-01-08 -->
<!--               (buffer (get-buffer-create " *preview-jump-line*")) -->
<!--               (line (count-lines (point-min) (point-end-of-line))) -->
<!--               (previewer (YaTeX-preview-default-previewer)) -->
<!--               (cmd (cond -->
<!--                     ((string-match "Skim" previewer) -->
<!--                      (format "%s %d '%s.pdf' '%s'" -->
<!--                              YaTeX-cmd-displayline line bnr cf)) -->
<!--                     ((string-match "evince" previewer) -->
<!--                      (format "%s '%s.pdf' %d '%s'" -->
<!--                              "fwdevince" bnr line cf)) -->
<!--                     ((string-match "sumatra" previewer) -->
<!--                      (format "%s \"%s.pdf\" -forward-search \"%s\" %d" -->
<!--                              previewer bnr cf line)) -->
<!--                     ((string-match "zathura" previewer) -->
<!--                      (format "%s - -synctex-forward '%d:0:%s' '%s.pdf'" -->
<!--                              previewer line cf bnr)) -->
<!--                     ((string-match "qpdfview" previewer) -->
<!--                      (format "%s '%s.pdf#src:%s:%d:0'" -->
<!--                              previewer bnr cf line)) -->
<!--                     ((string-match "okular" previewer) -->
<!--                      (format "%s '%s.pdf#src:%d %s'" -->
<!--                              previewer bnr line (expand-file-name cf))) -->
<!--                     ))) -->
<!--           (YaTeX-system cmd "jump-line" 'noask pdir)))))) -->
<!--  -->
<!-- **C-c C-t j でのコンパイル時に \includeonly の引数の置き換えがうまくできない [#ga957746] -->
<!--  -->
<!-- Emacs 26.1 から switch-to-buffer の仕様が変更されたため想定通りの動作をしない．YaTeX 1.80.3 で修正されたので YaTeX を更新する． -->

## ダウンロード {#g0fb682c}

- [YaTeX リリース版](https://www.yatex.org/), [Releases - yuuji/yatex](https://www.yatex.org/gitbucket/yuuji/yatex/releases)
- [YaTeX テスト版](http://www.gentei.org/~yuuji/bin/yatexcurrent.cgi)

## インストール {#b2ec65b9}

### MELPA からインストール {#x0d7daaa}

[MELPA](https://melpa.org/) から YaTeX がインストールできます．

- [https://melpa.org/#/yatex](https://melpa.org/#/yatex)
- [https://github.com/melpa/melpa/blob/master/recipes/yatex](https://github.com/melpa/melpa/blob/master/recipes/yatex)
- [https://github.com/melpa/melpa/commits/master/recipes/yatex](https://github.com/melpa/melpa/commits/master/recipes/yatex)

### 公式サイトのパッケージを使用する場合 {#jde46c87}

[YaTeX リリース版](https://www.yatex.org/) または [YaTeX テスト版](http://www.gentei.org/~yuuji/bin/yatexcurrent.cgi) をダウンロードして展開します．
展開したフォルダー名を yatex に変更します．

Emacs を起動して

```
C-x C-f ~/
```

で，ホームディレクトリ (&#x7e;/) の場所を確認します．

yatex フォルダーをコピーして &#x7e;/.emacs.d/site-lisp/ にペーストします．(&#x7e;/.emacs.d/site-lisp/ が無ければ新規に作成します．)

```
~
└─.emacs.d
    └─site-lisp
        └─yatex
```

&#x7e;/.emacs.d/init.el に以下の設定を記述します．

```
(add-to-list 'load-path "~/.emacs.d/site-lisp/yatex")
```

## 設定 {#p24cdf4a}

### Windows での設定例 {#n699538a}

&#x7e;/.emacs.d/init.el に設定を記述します．

プレビューと forward search は [SumatraPDF](/SumatraPDF/) を使用します．
SumatraPDF を前面に表示したくない場合は [SumatraPDF/fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) の fwdsumatrapdf.exe を使用します．
SumatraPDF の inverse search については [Emacs#SumatraPDF との連携#inverse search](/Emacs/#a06810d6) を参照してください．

***

```
;;
;; YaTeX
;;
(autoload 'yatex-mode "yatex" "Yet Another LaTeX mode" t)
(setq auto-mode-alist
      (append '(("\\.tex$" . yatex-mode)
                ("\\.ltx$" . yatex-mode)
                ("\\.cls$" . yatex-mode)
                ("\\.sty$" . yatex-mode)
                ("\\.clo$" . yatex-mode)
                ("\\.bbl$" . yatex-mode)) auto-mode-alist))
(setq YaTeX-inhibit-prefix-letter t)
(setq YaTeX-kanji-code nil)
(setq YaTeX-latex-message-code 'utf-8)
(setq YaTeX-use-LaTeX2e t)
(setq YaTeX-use-AMS-LaTeX t)
(setq YaTeX-dvi2-command-ext-alist
      '(("TeXworks\\|texworks\\|texstudio\\|mupdf\\|SumatraPDF\\|Preview\\|Skim\\|TeXShop\\|evince\\|atril\\|xreader\\|okular\\|zathura\\|qpdfview\\|Firefox\\|firefox\\|chrome\\|chromium\\|msedge\\|Adobe\\|Acrobat\\|acroread\\|pdfopen\\|xdg-open\\|open\\|start" . ".pdf")))
(setq tex-command "lualatex -synctex=1")
(setq bibtex-command "bibtexu")
(setq makeindex-command "upmendex")
(setq dvi2-command (concat "\"C:/Users/" (getenv "USERNAME") "/AppData/Local/SumatraPDF/SumatraPDF.exe\" -reuse-instance"))
(setq tex-pdfview-command (concat "\"C:/Users/" (getenv "USERNAME") "/AppData/Local/SumatraPDF/SumatraPDF.exe\" -reuse-instance"))
(setq dviprint-command-format "powershell -Command \"& {$r = Write-Output %s;$p = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFileNameWithoutExtension($r),'.pdf','\"\"\"');Start-Process Acrobat -ArgumentList ($p)}\"")
```

```
(defun fwdsumatrapdf-forward-search ()
  (interactive)
  (progn
    (process-query-on-exit-flag
     (start-process
      "fwdsumatrapdf"
      nil
      "fwdsumatrapdf"
      (expand-file-name
       (concat (file-name-sans-extension (or YaTeX-parent-file
                                             (save-excursion
                                               (YaTeX-visit-main t)
                                               buffer-file-name)))
               ".pdf"))
      (buffer-name)
      (number-to-string (save-restriction
                          (widen)
                          (count-lines (point-min) (point))))))))
```

```
(add-hook 'yatex-mode-hook
          '(lambda ()
             (define-key YaTeX-mode-map (kbd "C-c f") 'fwdsumatrapdf-forward-search)))
```

```
(add-hook 'yatex-mode-hook
          '(lambda ()
             (auto-fill-mode -1)))
```

```
;;
;; RefTeX with YaTeX
;;
;(add-hook 'yatex-mode-hook 'turn-on-reftex)
(add-hook 'yatex-mode-hook
          '(lambda ()
             (reftex-mode 1)
             (define-key reftex-mode-map (concat YaTeX-prefix ">") 'YaTeX-comment-region)
             (define-key reftex-mode-map (concat YaTeX-prefix "<") 'YaTeX-uncomment-region)))
```

***

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#22D;text-align:center">メニュー [YaTeX]</th><th style="color:#FFF;background-color:#22D;text-align:center">キーバインド (setq YaTeX-inhibit-prefix-letter t)</th><th style="color:#FFF;background-color:#22D;text-align:center">機能</th></tr>
> <tr><td>Process -&gt; LaTeX</td><td>C-c C-t j または C-c C-t C-j</td><td>LuaLaTeX</td></tr>
> <tr><td>Process -&gt; BibTeX</td><td>C-c C-t b RET</td><td>bibtexu</td></tr>
> <tr><td>Process -&gt; makeindex</td><td>C-c C-t i RET</td><td>upmendex</td></tr>
> <tr><td>Process -&gt; Preview</td><td>C-c C-t p RET RET</td><td>PDF プレビュー</td></tr>
> <tr><td>Process -&gt; lpr</td><td>C-c C-t l RET</td><td>Adobe Acrobat Reader で PDF プレビューまたは印刷</td></tr>
> <tr><td></td><td>C-c C-g</td><td>SumatraPDF で forward search</td></tr>
> <tr><td></td><td>C-c f または M-x fwdsumatrapdf-forward-search RET</td><td>fwdsumatrapdf で forward search</td></tr>
> </tbody>
> </table>
>

### macOS での設定例 {#p7238e02}

- [Mac miniをセットアップする その3 ~emacs,yatex,skim編~](http://t44or2.hatenablog.com/entry/2016/10/29/152327)
- [emacsでyatexを使う簡単な方法(Mac)](http://ganmacs.hatenablog.com/entry/2013/09/07/225350)
- [EmacsとSkim.appでTeX・PDFシンクロ](http://d.hatena.ne.jp/setoryohei/20110102/1294003836)
- [emacs_and_tex](https://github.com/ryseto/emacs_and_tex)
- [Retina を活かす Emacs へ移行2](http://milanista224.blogspot.jp/2013/07/retina-emacs243.html)

を参照．

&#x7e;/.emacs.d/init.el に設定を記述します．

プレビューと forward search は [Skim](/Skim/) を使用します．
Skim の inverse search については [Emacs#Skim との連携#inverse search](/Emacs/#e9c08b3d) を参照してください．

動作未確認です．

***

```
;;
;; PATH
;;
(setenv "PATH" "/usr/local/bin:/Library/TeX/texbin/:/Applications/Skim.app/Contents/SharedSupport:$PATH" t)
(setq exec-path (append '("/usr/local/bin" "/Library/TeX/texbin" "/Applications/Skim.app/Contents/SharedSupport") exec-path))

;;
;; YaTeX
;;
(autoload 'yatex-mode "yatex" "Yet Another LaTeX mode" t)
(setq auto-mode-alist
      (append '(("\\.tex$" . yatex-mode)
                ("\\.ltx$" . yatex-mode)
                ("\\.cls$" . yatex-mode)
                ("\\.sty$" . yatex-mode)
                ("\\.clo$" . yatex-mode)
                ("\\.bbl$" . yatex-mode)) auto-mode-alist))
(setq YaTeX-inhibit-prefix-letter t)
(setq YaTeX-kanji-code nil)
(setq YaTeX-latex-message-code 'utf-8)
(setq YaTeX-use-LaTeX2e t)
(setq YaTeX-use-AMS-LaTeX t)
(setq YaTeX-dvi2-command-ext-alist
      '(("TeXworks\\|texworks\\|texstudio\\|mupdf\\|SumatraPDF\\|Preview\\|Skim\\|TeXShop\\|evince\\|atril\\|xreader\\|okular\\|zathura\\|qpdfview\\|Firefox\\|firefox\\|chrome\\|chromium\\|msedge\\|Adobe\\|Acrobat\\|acroread\\|pdfopen\\|xdg-open\\|open\\|start" . ".pdf")))
(setq tex-command "lualatex -synctex=1")
(setq bibtex-command "bibtexu")
(setq makeindex-command "upmendex")
(setq dvi2-command "open -a Skim")
(setq tex-pdfview-command "open -a Skim")
(setq dviprint-command-format "open -a \"Adobe Acrobat\" `echo %s | gsed -e \"s/\\.[^.]*$/\\.pdf/\"`")

(add-hook 'yatex-mode-hook
          '(lambda ()
             (auto-fill-mode -1)))

;;
;; RefTeX with YaTeX
;;
;(add-hook 'yatex-mode-hook 'turn-on-reftex)
(add-hook 'yatex-mode-hook
          '(lambda ()
             (reftex-mode 1)
             (define-key reftex-mode-map (concat YaTeX-prefix ">") 'YaTeX-comment-region)
             (define-key reftex-mode-map (concat YaTeX-prefix "<") 'YaTeX-uncomment-region)))
```

***

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#22D;text-align:center">メニュー [YaTeX]</th><th style="color:#FFF;background-color:#22D;text-align:center">キーバインド (setq YaTeX-inhibit-prefix-letter t)</th><th style="color:#FFF;background-color:#22D;text-align:center">機能</th></tr>
> <tr><td>Process -&gt; LaTeX</td><td>C-c C-t j または C-c C-t C-j</td><td>LuaLaTeX</td></tr>
> <tr><td>Process -&gt; BibTeX</td><td>C-c C-t b RET</td><td>bibtexu</td></tr>
> <tr><td>Process -&gt; makeindex</td><td>C-c C-t i RET</td><td>upmendex</td></tr>
> <tr><td>Process -&gt; Preview</td><td>C-c C-t p RET RET</td><td>PDF プレビュー</td></tr>
> <tr><td>Process -&gt; lpr</td><td>C-c C-t l RET</td><td>Adobe Acrobat Reader で PDF プレビューまたは印刷</td></tr>
> <tr><td></td><td>C-c C-g</td><td>Skim で forward search</td></tr>
> </tbody>
> </table>
>

### Linux での設定例 {#e2cbcccd}

&#x7e;/.emacs.d/init.el に設定を記述します．

fwdevince は Evince/fwdevince にあるものを使用します．
Evince の inverse search については [Emacs#Evince との連携#inverse search](/Emacs/#vecb4fd9) を参照してください．

***

```
;;
;; YaTeX
;;
(autoload 'yatex-mode "yatex" "Yet Another LaTeX mode" t)
(setq auto-mode-alist
      (append '(("\\.tex$" . yatex-mode)
                ("\\.ltx$" . yatex-mode)
                ("\\.cls$" . yatex-mode)
                ("\\.sty$" . yatex-mode)
                ("\\.clo$" . yatex-mode)
                ("\\.bbl$" . yatex-mode)) auto-mode-alist))
(setq YaTeX-inhibit-prefix-letter t)
(setq YaTeX-kanji-code nil)
(setq YaTeX-latex-message-code 'utf-8)
(setq YaTeX-use-LaTeX2e t)
(setq YaTeX-use-AMS-LaTeX t)
(setq YaTeX-dvi2-command-ext-alist
      '(("TeXworks\\|texworks\\|texstudio\\|mupdf\\|SumatraPDF\\|Preview\\|Skim\\|TeXShop\\|evince\\|atril\\|xreader\\|okular\\|zathura\\|qpdfview\\|Firefox\\|firefox\\|chrome\\|chromium\\|msedge\\|Adobe\\|Acrobat\\|acroread\\|pdfopen\\|xdg-open\\|open\\|start" . ".pdf")))
(setq tex-command "lualatex -synctex=1")
(setq bibtex-command "bibtexu")
(setq makeindex-command "upmendex")
(setq dvi2-command "evince")
(setq tex-pdfview-command "evince")
(setq dviprint-command-format "wine64 cmd /c start Acrobat.exe `echo %s | sed -e \"s/\\.[^.]*$/\\.pdf/\"`")

(add-hook 'yatex-mode-hook
          '(lambda ()
             (auto-fill-mode -1)))

;;
;; RefTeX with YaTeX
;;
;(add-hook 'yatex-mode-hook 'turn-on-reftex)
(add-hook 'yatex-mode-hook
          '(lambda ()
             (reftex-mode 1)
             (define-key reftex-mode-map (concat YaTeX-prefix ">") 'YaTeX-comment-region)
             (define-key reftex-mode-map (concat YaTeX-prefix "<") 'YaTeX-uncomment-region)))
```

***

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#22D;text-align:center">メニュー [YaTeX]</th><th style="color:#FFF;background-color:#22D;text-align:center">キーバインド (setq YaTeX-inhibit-prefix-letter t)</th><th style="color:#FFF;background-color:#22D;text-align:center">機能</th></tr>
> <tr><td>Process -&gt; LaTeX</td><td>C-c C-t j または C-c C-t C-j</td><td>LuaLaTeX</td></tr>
> <tr><td>Process -&gt; BibTeX</td><td>C-c C-t b RET</td><td>bibtexu</td></tr>
> <tr><td>Process -&gt; makeindex</td><td>C-c C-t i RET</td><td>upmendex</td></tr>
> <tr><td>Process -&gt; Preview</td><td>C-c C-t p RET RET</td><td>PDF プレビュー</td></tr>
> <tr><td>Process -&gt; lpr</td><td>C-c C-t l RET</td><td>Adobe Acrobat Reader で PDF プレビューまたは印刷</td></tr>
> <tr><td></td><td>C-c C-g</td><td>Evince で forward search<br>Okular で forward search<br>zathura で forward search<br>qpdfview で forward search</td></tr>
> </tbody>
> </table>
>

## 使い方 {#v90b1615}

さまざまな機能がありますので、まずは少しだけ。

### キーバインドについての注意（昔からの利用者向け） {#je823773}

(setq YaTeX-inhibit-prefix-letter t) を使用してください．
(setq YaTeX-inhibit-prefix-letter nil) は，非推奨 (deprecated) です．
t と nil ではキーバインドが異なります（前者だと C-c C-t letter，後者だと C-c t letter になる）．

```
(setq YaTeX-inhibit-prefix-letter t)
```

Linux Mint, Debian GNU/Linux, Vine Linux に収録されている YaTeX の最新版はデフォルトで t となっており，YaTeX の作者も t を推奨しています （YaTeX ML \[yatex:04567\] を参照）．
変更の理由は YaTeX が使用していたキーバインドがユーザー向けに予約されていた C-c letter に設定されていたためと思われます．

[https://github.com/emacs-jp/elisp-manual-ja/blob/master/tips.texi#L172-L198](https://github.com/emacs-jp/elisp-manual-ja/blob/master/tips.texi#L172-L198) より

> - 読者のメジャーモードでは、 C-c letter をキーとして定義しないこと。 これらのキー列はユーザー向けに予約済みである。 それら<strong>だけ</strong>がユーザー向けに予約されたキー列であり、 それらを禁止しないこと。

> かわりに、C-c のあとにコントロール文字か数字文字か特定の句読点文字が続く キー列を定義する。 これらのキー列は、メジャーモード用に予約してある。

> Emacs のすべてのモードをこの慣習に従うように変換するのは たいへんな作業量であった。 この慣習を捨てさるとその作業をむだにしてしまい、ユーザーにも不便である。

### タイプセット・プレビュー {#r68a2a97}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#22D;text-align:center">メニュー [YaTeX]</th><th style="color:#FFF;background-color:#22D;text-align:center">キーバインド (setq YaTeX-inhibit-prefix-letter t)</th><th style="color:#FFF;background-color:#22D;text-align:center">機能</th></tr>
> <tr><td>Process -&gt; LaTeX</td><td>C-c C-t j または C-c C-t C-j</td><td>タイプセット</td></tr>
> <tr><td>Process -&gt; LaTeX+PDF</td><td>C-c C-t d</td><td>latex + dvipdfmx</td></tr>
> <tr><td>Process -&gt; Kill LaTeX</td><td>C-c C-t k</td><td>タイプセットを中断</td></tr>
> <tr><td>Process -&gt; Preview</td><td>C-c C-t p RET RET</td><td>プレビュー</td></tr>
> <tr><td>Process -&gt; BibTeX</td><td>C-c C-t b RET</td><td>BibTeX</td></tr>
> <tr><td>Process -&gt; makeindex</td><td>C-c C-t i RET</td><td>MakeIndex</td></tr>
> <tr><td>Process -&gt; lpr</td><td>C-c C-t l RET</td><td>LPR (印刷)</td></tr>
> <tr><td></td><td>C-c C-g</td><td>forward search</td></tr>
> <tr><td></td><td>C-c '</td><td>エラー行にジャンプ</td></tr>
> <tr><td></td><td>M-x yatex</td><td>親ファイルの再設定</td></tr>
> </tbody>
> </table>
>

### 補完 {#g3780d28}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#22D;text-align:center">メニュー [YaTeX]</th><th style="color:#FFF;background-color:#22D;text-align:center">キーバインド (setq YaTeX-inhibit-prefix-letter t)</th><th style="color:#FFF;background-color:#22D;text-align:center">補完</th></tr>
> <tr><td>Environment -&gt; リストから選択</td><td>C-c C-b SPC</td><td>begin 型補完</td></tr>
> <tr><td>Environment region -&gt; リストから選択</td><td>C-c B SPC</td><td>指定領域に対して begin 型補完</td></tr>
> <tr><td>Section type -&gt; リストから選択</td><td>C-c C-s</td><td>section 型補完</td></tr>
> <tr><td>Section type region (long name) -&gt; リストから選択</td><td>C-c S</td><td>指定領域に対して section 型補完</td></tr>
> <tr><td></td><td>C-c C-e</td><td>end 補完</td></tr>
> </tbody>
> </table>
>

補完を使わないと

```
\begin{itemize}
\item AUCTeX
\item YaTeX
\end{今度からはちゃんと ^C b を使いましょう}
```

と言われます．

begin 型補完を使うのを忘れた場合は

```
\begin{itemize}
\item AUCTeX
\item YaTeX
```

の時に end 補完を使うと

```
\end{itemize}
```

を補完してくれます．

### タイプセット方式の変更 {#m8567380}

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#22D;text-align:center">入力</th><th style="color:#FFF;background-color:#22D;text-align:center">タイプセット方式</th></tr>
> <tr><td>M-x set-variable RET tex-command RET "latexmk" RET</td><td>latexmk</td></tr>
> <tr><td>M-x set-variable RET tex-command RET "pdflatex -synctex=1" RET</td><td>pdflatex</td></tr>
> <tr><td>M-x set-variable RET tex-command RET "lualatex -synctex=1" RET</td><td>lualatex</td></tr>
> <tr><td>M-x set-variable RET tex-command RET "xelatex -synctex=1" RET</td><td>xelatex</td></tr>
> </tbody>
> </table>
>

### タイプセット方式の確認 {#k374ed95}

```
M-x describe-variable RET tex-command RET
```

### その他 {#za795743}

詳細は [Yet Another tex-mode for Emacs - Table of Contents](https://www.yatex.org/info/yatexj_toc.html) をご覧下さい．

- [『野鳥』クイックリファレンス](https://www.yatex.org/yatexref.txt) もご覧下さい．
- [瀬戸 亮平](http://d.hatena.ne.jp/setoryohei/) さんの [YaTeX demo](http://d.hatena.ne.jp/setoryohei/20120106) で YaTeX の機能が紹介されています．

## ソースのサンプル {#q88c5ad1}

ヘッダー部分に用途別に追加してみました．テンプレートとしても使えるかもしれません．

```
%% -*- coding: utf-8-unix -*-
%#!lualatex -synctex=1 hogehoge
% #!tasklist /fi "IMAGENAME eq Acrobat.exe" /nh | findstr "Acrobat.exe" > nul && taskkill /im Acrobat.exe & lualatex hogehoge && start Acrobat hogehoge.pdf
%#BIBTEX bibtexu hogehoge
%#MAKEINDEX upmendex hogehoge
%#LPR if exist "C:\Program Files\Adobe\Acrobat DC\Acrobat\Acrobat.exe" ("C:\Program Files\Adobe\Acrobat DC\Acrobat\Acrobat.exe" /p hogehoge.pdf) else rundll32 shell32,ShellExec_RunDLL Acrobat /p hogehoge.pdf
% #LPR acroread.bat /p hogehoge.pdf
```

```
\documentclass{jlreq}
\begin{document}
Welcom to YaTeX World!
\end{document}
```

```
%%% Local Variables:
%%% TeX-master: "hogehoge"
%%% End:
```

PDF ファイルでの印刷が多くなってきているので，LPR も PDF ファイルに対応させてみました．
パスの通ったところに，acroread.bat というファイル名で以下のスクリプトを保存します．

```
@echo off
REM USAGE: acroread.bat [options] filename
if exist "C:\Program Files\Adobe\Acrobat DC\Acrobat\Acrobat.exe" (
  "C:\Program Files\Adobe\Acrobat DC\Acrobat\Acrobat.exe" %1 %2 %3 %4 %5 %6 %7 %8 %9
) else (
  rundll32 shell32,ShellExec_RunDLL Acrobat %1 %2 %3 %4 %5 %6 %7 %8 %9
)
```

## &#x7e;/.emacs.d/init.el 見せてください． {#uc0145ec}

あくまで一例です。
ぜひ修正、加筆お願いします。

### ‘load-path’に yatex.el が存在するフォルダー (ディレクトリ) を追加 {#pe637e19}

```
(add-to-list 'load-path "~/.emacs.d/site-lisp/yatex")
```

### \*.texで自動的にYaTeXモード {#d7fc1e0e}

```
(setq auto-mode-alist
      (append '(("\\.tex$" . yatex-mode)) auto-mode-alist))
(autoload 'yatex-mode "yatex" "Yet Another LaTeX mode" t)
```

または

```
(setq auto-mode-alist
      (cons (cons "\\.tex$" 'yatex-mode) auto-mode-alist))
(autoload 'yatex-mode "yatex" "Yet Another LaTeX mode" t)
```

### ファイルを保存する際の文字コードの指定 {#j78164d5}

YaTeX-kanji-code を nil 以外にすると<strong>指定した文字コード以外の TeX ファイルや sty ファイルも指定した文字コードで保存されてしまう</strong>ので <strong>nil を指定することをおすすめします</strong>．

YaTeX 1.80 で YaTeX-kanji-code のデフォルトが nil に変更されました．

- [8.4.3 文字エンコーディングの設定](http://hwb.ecc.u-tokyo.ac.jp/current/literacy/editor/emacs/encoding/)

```
;;;   nil: Do not care (Preserve coding-system) -> ファイルの文字コードを変更せずに保存する
;;;   0: no-converion -> Emacs 内部で使用されている文字コードで保存される（Emacs 23 以降では utf-8-emacs）
;;;   1: Shift JIS (Shift_JIS) -> Shift_JIS で保存される
;;;   2: JIS (ISO-2022-JP) -> ISO-2022-JP で保存される
;;;   3: EUC (EUC-JP) -> EUC-JP で保存される
;;;   4: UTF-8 -> UTF-8 で保存される
(setq YaTeX-kanji-code nil)
```

### LaTeX でタイプセットしたときに出力されるメッセージの文字コードを指定 (\*YaTeX-typesetting\* バッファの文字コードの指定) {#v14da95b}

```
(setq YaTeX-latex-message-code 'utf-8)
```

### TeX typeset {#h9687728}

#### LuaLaTeX {#r2c74452}

```
(setq tex-command "lualatex -synctex=1")
```

#### LuaLaTeXmk {#d4a80fb8}

```
(if (eq system-type 'windows-nt)
    (setq tex-command "latexmk -e \"$lualatex=q/lualatex %O -synctex=1 %S/\" -e \"$bibtex=q/bibtexu %O %B/\" -e \"$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/\" -e \"$makeindex=q/upmendex %O -o %D %S/\" -norc -gg -pdflua")
  (setq tex-command "latexmk -e '$lualatex=q/lualatex %O -synctex=1 %S/' -e '$bibtex=q/bibtexu %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -norc -gg -pdflua"))
```

#### upLaTeXmk {#bc88da07}

```
(if (eq system-type 'windows-nt)
    (setq tex-command "latexmk -e \"$latex=q/uplatex %O -kanji=utf8 -no-guess-input-enc -synctex=1 %S/\" -e \"$bibtex=q/bibtexu %O %B/\" -e \"$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/\" -e \"$makeindex=q/upmendex %O -o %D %S/\" -e \"$dvipdf=q/dvipdfmx %O -o %D %S/\" -norc -gg -pdfdvi")
  (setq tex-command "latexmk -e '$latex=q/uplatex %O -kanji=utf8 -no-guess-input-enc -synctex=1 %S/' -e '$bibtex=q/bibtexu %O %B/' -e '$biber=q/biber %O --bblencoding=utf8 -u -U --output_safechars %B/' -e '$makeindex=q/upmendex %O -o %D %S/' -e '$dvipdf=q/dvipdfmx %O -o %D %S/' -norc -gg -pdfdvi"))
```

### bibtexu の指定 {#q198d21d}

```
(setq bibtex-command "bibtexu")
```

### biber の指定 {#o3f4bd25}

```
(setq bibtex-command "biber --bblencoding=utf8 -u -U --output_safechars")
```

### upmendex の指定 {#i3950de0}

```
(setq makeindex-command "upmendex")
```

### YaTeX-dvi2-command-ext-alist {#x19206ad}

```
(setq YaTeX-dvi2-command-ext-alist
      '(("TeXworks\\|texworks\\|texstudio\\|mupdf\\|SumatraPDF\\|Preview\\|Skim\\|TeXShop\\|evince\\|atril\\|xreader\\|okular\\|zathura\\|qpdfview\\|Firefox\\|firefox\\|chrome\\|chromium\\|msedge\\|Adobe\\|Acrobat\\|acroread\\|pdfopen\\|xdg-open\\|open\\|start" . ".pdf")))
```

### dvi2-command (C-c C-t j でタイプセットしたあとで C-c C-t p すると表示される PDF ビューア) {#t737f278}

#### SumatraPDF {#d0c29303}

```
(setq dvi2-command (concat "\"C:/Users/" (getenv "USERNAME") "/AppData/Local/SumatraPDF/SumatraPDF.exe\" -reuse-instance"))
```

#### TeXworks {#v93f2569}

```
(if (eq system-type 'darwin)
    (setq dvi2-command "/Applications/TeXworks.app/Contents/MacOS/TeXworks")
  (setq dvi2-command "texworks"))
```

#### TeXstudio {#y5d1ba30}

```
(if (eq system-type 'darwin)
    (setq dvi2-command "/Applications/texstudio.app/Contents/MacOS/texstudio --pdf-viewer-only")
  (setq dvi2-command "texstudio --pdf-viewer-only"))
```

#### MuPDF {#n79f13fd}

```
(setq dvi2-command "mupdf")
```

#### Firefox (PDF.js) {#r971ee00}

```
(if (eq system-type 'windows-nt)
    (setq dvi2-command "powershell -Command \"& {$p = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFileName($args),'\"\"\"');Start-Process firefox -ArgumentList ('-new-window',$p)}\"")
  (setq dvi2-command "firefox -new-window"))
```

#### Chrome/Chromium PDF Viewer (PDFium) {#r552a7fd}

```
(if (eq system-type 'windows-nt)
    (setq dvi2-command "powershell -Command \"& {$p = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFullPath($args),'\"\"\"');Start-Process chrome -ArgumentList ('--new-window',$p)}\"")
  (setq dvi2-command "chromium --new-window"))
```

#### Preview {#j3fea9fe}

```
(setq dvi2-command "open -a Preview")
```

#### Skim {#vb4cc051}

```
(setq dvi2-command "open -a Skim")
```

#### TeXShop {#w3687acc}

```
(setq dvi2-command "open -a TeXShop")
```

#### Evince {#k6ed9ab5}

```
(setq dvi2-command "evince")
```

#### Atril {#vf039437}

```
(setq dvi2-command "atril")
```

#### Okular {#uf59e41d}

```
(setq dvi2-command "okular --unique")
```

#### zathura {#g500937c}

```
(setq dvi2-command "zathura -x \"emacsclient --no-wait +%{line} %{input}\"")
```

#### qpdfview {#ze129dad}

```
(setq dvi2-command "qpdfview --unique")
```

### tex-pdfview-command (C-c C-t d でタイプセットしたあとで C-c C-t p すると表示される PDF ビューア) {#ia0437ce}

#### SumatraPDF {#i2f07080}

```
(setq tex-pdfview-command (concat "\"C:/Users/" (getenv "USERNAME") "/AppData/Local/SumatraPDF/SumatraPDF.exe\" -reuse-instance"))
```

#### TeXworks {#y4efa0cf}

```
(if (eq system-type 'darwin)
    (setq tex-pdfview-command "/Applications/TeXworks.app/Contents/MacOS/TeXworks")
  (setq tex-pdfview-command "texworks"))
```

#### TeXstudio {#wb93592a}

```
(if (eq system-type 'darwin)
    (setq tex-pdfview-command "/Applications/texstudio.app/Contents/MacOS/texstudio --pdf-viewer-only")
  (setq tex-pdfview-command "texstudio --pdf-viewer-only"))
```

#### MuPDF {#q15298f3}

```
(setq tex-pdfview-command "mupdf")
```

#### Firefox (PDF.js) {#j10835f3}

```
(if (eq system-type 'windows-nt)
    (setq tex-pdfview-command "powershell -Command \"& {$p = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFileName($args),'\"\"\"');Start-Process firefox -ArgumentList ('-new-window',$p)}\"")
  (setq tex-pdfview-command "firefox -new-window"))
```

#### Chrome/Chromium PDF Viewer (PDFium) {#k977257b}

```
(if (eq system-type 'windows-nt)
    (setq tex-pdfview-command "powershell -Command \"& {$p = [System.String]::Concat('\"\"\"',[System.IO.Path]::GetFullPath($args),'\"\"\"');Start-Process chrome -ArgumentList ('--new-window',$p)}\"")
  (setq tex-pdfview-command "chromium --new-window"))
```

#### Preview {#u986e521}

```
(setq tex-pdfview-command "open -a Preview")
```

#### Skim {#c9ac9d17}

```
(setq tex-pdfview-command "open -a Skim")
```

#### TeXShop {#g2f83bb4}

```
(setq tex-pdfview-command "open -a TeXShop")
```

#### Evince {#j390cbe8}

```
(setq tex-pdfview-command "evince")
```

#### Atril {#vb288c5f}

```
(setq tex-pdfview-command "atril")
```

#### Okular {#y8537029}

```
(setq tex-pdfview-command "okular --unique")
```

#### zathura {#v709670e}

```
(setq tex-pdfview-command "zathura -x \"emacsclient --no-wait +%{line} %{input}\"")
```

#### qpdfview {#l8d529be}

```
(setq tex-pdfview-command "qpdfview --unique")
```

### use LaTeX2e and AMS-LaTeX {#s49fcef1}

デフォルトでは YaTeX-use-AMS-LaTeX の値は t です．
AMS-LaTeX がうまく動作しない場合は YaTeX をロードする前に設定してみてください．

```
(setq YaTeX-use-LaTeX2e t)
(setq YaTeX-use-AMS-LaTeX t)
```

### font latex hook {#j998f541}

```
(add-hook 'yatex-mode-hook
          '(lambda ()
             (require 'font-latex)
             (font-latex-setup)))
```

### RefTeX mode {#iabc8ab6}

```
(add-hook 'yatex-mode-hook 'turn-on-reftex)
```

または

```
(add-hook 'yatex-mode-hook '(lambda () (reftex-mode t)))
```

YaTeX の comment region, uncomment region, insert parens region のキーバインドを優先させる場合は以下のようにします．(参照 [YaTeXとRefTeXの共存](http://ubutun.blogspot.jp/2011/06/yatexreftex.html))

```
(add-hook 'yatex-mode-hook
          '(lambda ()
             (reftex-mode 1)
             (define-key reftex-mode-map (concat YaTeX-prefix ">") 'YaTeX-comment-region)
             (define-key reftex-mode-map (concat YaTeX-prefix "<") 'YaTeX-uncomment-region)
             (define-key reftex-mode-map (concat YaTeX-prefix ")") 'YaTeX-insert-parens-region)))
```

### auto fill mode {#ua5c62a9}

on の場合

```
(add-hook 'yatex-mode-hook '(lambda () (auto-fill-mode t) (setq fill-column 70)))
```

off の場合

```
(add-hook 'yatex-mode-hook '(lambda () (auto-fill-mode -1)))
```

### color {#ee4c8027}

```
;(setq YaTeX-use-font-lock t)
; section color
;(setq YaTeX-hilit-sectioning-face '(light時のforecolor/backcolor dark時の forecolor/backcolor))
;(setq YaTeX-hilit-sectioning-face '(white/snow3 snow1/snow3))
(add-hook 'yatex-mode-hook
'(lambda () (require 'font-latex)
            (font-latex-setup)
            (progn
              (modify-syntax-entry ?% "<" (syntax-table))
              (modify-syntax-entry 10 ">" (syntax-table))
              (make-variable-buffer-local 'outline-level)
              (setq outline-level 'latex-outline-level)
              (make-variable-buffer-local 'outline-regexp)
              (setq outline-regexp
                    (concat "[  \t]*\\\\\\(documentstyle\\|documentclass\\|chapter\\|"
                           "section\\|subsection\\|subsubsection\\|paragraph\\)"
                            "\\*?[ \t]*[[{]")
                    ))))
```

### outline-minor-mode {#nf399cda}

```
(add-hook 'yatex-mode-hook '(lambda () (outline-minor-mode t)))
(setq-default outline-level 'outline-level)
```

```
(defun latex-outline-level ()
  (save-excursion
    (looking-at outline-regexp)
    (let ((title (buffer-substring (match-beginning 1) (match-end 1))))
      (cond ((equal (substring title 0 4) "docu") 20)
            ((equal (substring title 0 4) "para") 15)
            ((equal (substring title 0 4) "chap") 0)
            ((equal (substring title 0 4) "appe") 0)
            (t (length title))))))
```

### misc mode {#w545e459}

```
(add-hook 'yatex-mode-load-hook
          (function
           (lambda ()
             (YaTeX-define-key "w" 'sdic-describe-word)
             (YaTeX-define-key "\C-w" 'YaTeX-switch-mode-menu))))
```

### math-sign の追加 {#teb10e47}

```
(setq
 YaTeX-math-sign-alist-private
 '(
   ("q"         "Q"          "(Q)")
   ("z"         "Z"          "ZZ")
   ("t""text""text")
   ("qu"        "quad"         "__")
   ("qq"        "qquad"         "____")
   ("ls"        "varlimsup"     "___\nlim")
   ("li"        "varliminf"     "lim\n---")
   ("il"        "varinjlim"     "lim\n-->")
   ("pl"        "varprojlim"    "lim\n<--")
   ("st"        "text{ s.t. }" "s.t.")
   ("bigop"     "bigoplus"      "_\n(+)~")
   ("bigot"     "bigotimes"     "_\n(x)\n ~")
   ))
```

### テンプレート {#pff757f3}

```
; ~/.LaTeX-templateは新規ファイル作成時に自動挿入するファイル名
(setq YaTeX-template-file "~/.LaTeX-template")
```

### \textit{...}など対するフォント変更 {#j27c726d}

なぜか，\textbf{...}以外の\textXX{...}のフォント変更がうまく働いていないようなので少々 ~/.emacs.d/init.el に追加。ついでに\emph{...}にも対応。

<!-- どなたか、開発元に連絡してくださるかたがいらっしゃいませんか。 -->
<!-- よろしくお願いします。 -->

```
;ここはすでにyatex19.elに記述されてる
;(add-to-list 'YaTeX-hilit-patterns-alist
;      '(YaTeX-19-region-section-type "\\\\textbf\\>" bold))
(add-to-list 'YaTeX-hilit-patterns-alist
	     '(YaTeX-19-region-section-type "\\\\textgt\\>" bold))
(add-to-list 'YaTeX-hilit-patterns-alist
	     '(YaTeX-19-region-section-type "\\\\textit\\>" italic))
(add-to-list 'YaTeX-hilit-patterns-alist
	     '(YaTeX-19-region-section-type "\\\\textsl\\>" italic))
(add-to-list 'YaTeX-hilit-patterns-alist
	     '(YaTeX-19-region-section-type "\\\\emph\\>" italic))
(add-to-list 'YaTeX-hilit-patterns-alist
	     '(YaTeX-19-region-section-type "\\\\texttt\\>" tt))
```

### SumatraPDF との連携 (forward search) {#ra95ecfb}

#### SumatraPDF を前面に表示したい場合 {#x4a4f83a}

```
(setq YaTeX-inhibit-prefix-letter t)
(setq YaTeX-dvi2-command-ext-alist
      '(("TeXworks\\|texworks\\|texstudio\\|mupdf\\|SumatraPDF\\|Preview\\|Skim\\|TeXShop\\|evince\\|atril\\|xreader\\|okular\\|zathura\\|qpdfview\\|Firefox\\|firefox\\|chrome\\|chromium\\|msedge\\|Adobe\\|Acrobat\\|acroread\\|pdfopen\\|xdg-open\\|open\\|start" . ".pdf")))
(setq dvi2-command (concat "\"C:/Users/" (getenv "USERNAME") "/AppData/Local/SumatraPDF/SumatraPDF.exe\" -reuse-instance"))
(setq tex-pdfview-command (concat "\"C:/Users/" (getenv "USERNAME") "/AppData/Local/SumatraPDF/SumatraPDF.exe\" -reuse-instance"))
```

を設定して C-c C-g を入力すれば SumatraPDF で forward seasrch ができます．

#### SumatraPDF を前面に表示したくない場合 {#d9c64d40}

```
(defun fwdsumatrapdf-forward-search ()
  (interactive)
  (progn
    (process-query-on-exit-flag
     (start-process
      "fwdsumatrapdf"
      nil
      "fwdsumatrapdf"
      (expand-file-name
       (concat (file-name-sans-extension (or YaTeX-parent-file
                                             (save-excursion
                                               (YaTeX-visit-main t)
                                               buffer-file-name)))
               ".pdf"))
      (buffer-name)
      (number-to-string (save-restriction
                          (widen)
                          (count-lines (point-min) (point))))))))
```

```
(add-hook 'yatex-mode-hook
          '(lambda ()
             (define-key YaTeX-mode-map (kbd "C-c f") 'fwdsumatrapdf-forward-search)))
```

fwdsumatrapdf は [SumatraPDF/fwdsumatrapdf](/SumatraPDF/fwdsumatrapdf/) にあるものを使用します．
forward search は C-c f または M-x fwdsumatrapdf-forward-search RET をタイプします．

### Skim との連携 (forward search) {#f978a43b}

```
(setq YaTeX-inhibit-prefix-letter t)
(setq YaTeX-dvi2-command-ext-alist
      '(("TeXworks\\|texworks\\|texstudio\\|mupdf\\|SumatraPDF\\|Preview\\|Skim\\|TeXShop\\|evince\\|atril\\|xreader\\|okular\\|zathura\\|qpdfview\\|Firefox\\|firefox\\|chrome\\|chromium\\|msedge\\|Adobe\\|Acrobat\\|acroread\\|pdfopen\\|xdg-open\\|open\\|start" . ".pdf")))
(setq dvi2-command "open -a Skim")
(setq tex-pdfview-command "open -a Skim")
```

を設定して C-c C-g を入力すれば Skim で forward seasrch ができます．

### Evince との連携 (forward and inverse search) {#g214bbe8}

- [https://gitlab.com/latex-math-preview/synctex-for-evince-yatex](https://gitlab.com/latex-math-preview/synctex-for-evince-yatex)
- [http://kurasawa.c.ooco.jp/ubuntu.html#emacs](http://kurasawa.c.ooco.jp/ubuntu.html#emacs)

### Evince との連携 (forward search) {#h118b5e5}

Evince/fwdevince をインストールして

```
(setq YaTeX-inhibit-prefix-letter t)
(setq YaTeX-dvi2-command-ext-alist
      '(("TeXworks\\|texworks\\|texstudio\\|mupdf\\|SumatraPDF\\|Preview\\|Skim\\|TeXShop\\|evince\\|atril\\|xreader\\|okular\\|zathura\\|qpdfview\\|Firefox\\|firefox\\|chrome\\|chromium\\|msedge\\|Adobe\\|Acrobat\\|acroread\\|pdfopen\\|xdg-open\\|open\\|start" . ".pdf")))
(setq dvi2-command "evince")
(setq tex-pdfview-command "evince")
```

を設定して C-c C-g を入力すれば Evince で forward seasrch ができます．

### Evince との連携 (inverse search) {#tfced2b6}

Evince の inverse search については [Emacs#Evince との連携#inverse search](/Emacs/#vecb4fd9) を参照してください．

### Okular との連携 (forward search) {#o8772291}

```
(setq YaTeX-inhibit-prefix-letter t)
(setq YaTeX-dvi2-command-ext-alist
      '(("TeXworks\\|texworks\\|texstudio\\|mupdf\\|SumatraPDF\\|Preview\\|Skim\\|TeXShop\\|evince\\|atril\\|xreader\\|okular\\|zathura\\|qpdfview\\|Firefox\\|firefox\\|chrome\\|chromium\\|msedge\\|Adobe\\|Acrobat\\|acroread\\|pdfopen\\|xdg-open\\|open\\|start" . ".pdf")))
(setq dvi2-command "okular --unique")
(setq tex-pdfview-command "okular --unique")
```

を設定して C-c C-g を入力すれば Okular で forward seasrch ができます．

### zathura との連携 (forward search) {#j4034f6b}

```
(setq YaTeX-inhibit-prefix-letter t)
(setq YaTeX-dvi2-command-ext-alist
      '(("TeXworks\\|texworks\\|texstudio\\|mupdf\\|SumatraPDF\\|Preview\\|Skim\\|TeXShop\\|evince\\|atril\\|xreader\\|okular\\|zathura\\|qpdfview\\|Firefox\\|firefox\\|chrome\\|chromium\\|msedge\\|Adobe\\|Acrobat\\|acroread\\|pdfopen\\|xdg-open\\|open\\|start" . ".pdf")))
(setq dvi2-command "zathura -x \"emacsclient --no-wait +%{line} %{input}\"")
(setq tex-pdfview-command "zathura -x \"emacsclient --no-wait +%{line} %{input}\"")
(with-eval-after-load 'yatexprc
  (defun YaTeX-preview-jump-line ()
    "Call jump-line function of various previewer on current main file"
    (interactive)
    (save-excursion
      (save-restriction
        (widen)
        (let*((pf (or YaTeX-parent-file
                      (save-excursion (YaTeX-visit-main t) (buffer-file-name))))
              (pdir (file-name-directory pf))
              (bnr (substring pf 0 (string-match "\\....$" pf)))
              ;(cf (file-relative-name (buffer-file-name) pdir))
              (cf (buffer-file-name)) ;2016-01-08
              (buffer (get-buffer-create " *preview-jump-line*"))
              (line (count-lines (point-min) (point-end-of-line)))
              (previewer (YaTeX-preview-default-previewer))
              (cmd (cond
                    ((string-match "Skim" previewer)
                     (format "%s %d '%s.pdf' '%s'"
                             YaTeX-cmd-displayline line bnr cf))
                    ((string-match "evince" previewer)
                     (format "%s '%s.pdf' %d '%s'"
                             "fwdevince" bnr line cf))
                    ((string-match "sumatra" previewer)
                     (format "%s \"%s.pdf\" -forward-search \"%s\" %d"
                             previewer bnr cf line))
                    ((string-match "zathura" previewer)
                     (format "%s --synctex-forward '%d:0:%s' '%s.pdf'"
                             previewer line cf bnr))
                    ((string-match "qpdfview" previewer)
                     (format "%s '%s.pdf#src:%s:%d:0'"
                             previewer bnr cf line))
                    ((string-match "okular" previewer)
                     (format "%s '%s.pdf#src:%d %s'"
                             previewer bnr line (expand-file-name cf)))
                    )))
          (YaTeX-system cmd "jump-line" 'noask pdir))))))
```

を設定して C-c C-g を入力すれば zathura で forward seasrch ができます．

### qpdfview との連携 (forward search) {#c86f086b}

```
(setq YaTeX-inhibit-prefix-letter t)
(setq YaTeX-dvi2-command-ext-alist
      '(("TeXworks\\|texworks\\|texstudio\\|mupdf\\|SumatraPDF\\|Preview\\|Skim\\|TeXShop\\|evince\\|atril\\|xreader\\|okular\\|zathura\\|qpdfview\\|Firefox\\|firefox\\|chrome\\|chromium\\|msedge\\|Adobe\\|Acrobat\\|acroread\\|pdfopen\\|xdg-open\\|open\\|start" . ".pdf")))
(setq dvi2-command "qpdfview --unique")
(setq tex-pdfview-command "qpdfview --unique")
```

を設定して C-c C-g を入力すれば qpdfview で forward seasrch ができます．

## その他（改造など） {#q5a5c09f}

### includegraphicsにclipオプションを追加 {#r1cf7758}

yatexadd.elのYaTeX:includegraphicsの最後を下記のように変更

```
(if (string= "" str) "[clip]"
     (concat "[" str ",clip]")) ;
```

### コマンドおよび環境などの入力支援のカスタマイズ {#c42fc6d4}

yatexhks.elにカスタマイズした関数を記述しておけばYaTeXの入力支援に利用できる．
例えば，enumitemパッケージのenumerate環境でresumeオプションを使うか常に問う場合は次のような関数を記述しておけばよい．

```
(defun YaTeX:enumerate ()
 ((let (op (if y-or-n-p "resume オプションを使いますか? ")
    "resume"))
  (if (> (length op) 0)
      (concat "[" op "]"))))
```

### コンパイルプログラムの使い分け {#ga20e87e}

普段は LuaLaTeX を使っていても，投稿先のスタイルシートによっては pdfLaTeX を前提としているものがあります．
TeX ソースの先頭行に例えば，

```
%#!pdflatex
```

と書いておくと、普段はタイプセットの時に LuaLaTeX で処理されていても，この場合だけ pdfLaTeX で処理してくれます．

記述例をあげると，

```
%#!lualatex -synctex=1 hogehoge
```

としたりできます．

## 関連リンク {#fcad5d2d}

- [YaTeXからSumatraPDFを起動](https://uep.media.hosei.ac.jp/yatex%E3%81%8B%E3%82%89sumatrapdf%E3%82%92%E8%B5%B7%E5%8B%95/)
- [私的 YaTeX 事始め](http://mtino1594.hatenablog.com/entry/2019/04/07/200000)
- [YaTeXのカスタマイズおよびevinceとの連携](http://startlinux.ninja-mania.jp/yatex/index.html)
- [ Emacs26.1を入れてみる（その15）EmacsでLaTeX](https://blogs.yahoo.co.jp/t_terui/66967449.html), [ Emacs26.1を入れてみる（その16）YaTeX にアウトラインモードを追加](https://blogs.yahoo.co.jp/t_terui/66970175.html)
- [YaTeX \[ShotakahaDokuWiki](http://www-he.scphys.kyoto-u.ac.jp/member/shotakaha/dokuwiki/doku.php?id=toolbox:emacs:yatex:start)\]
- [モダンな日本語 TeX 環境を整える](http://qiita.com/ynakayama/items/706ae9e59c1b6fd3e3d2)
- [Ubuntu 14.04でのEmacsの設定](http://ubutun.blogspot.jp/2014/06/ubuntu-1404emacs.html)
- [Linux Mintを導入する（８）](http://note.chiebukuro.yahoo.co.jp/detail/n220718)
- [NTEmacsでYaTeXによるフルパス内に日本語を含む .tex のタイプセット](http://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q12106481462), [（再）NTEmacsでYaTeXによるフルパス内に日本語を含む .tex のタイプセット](http://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q11106826351)
- [文字コード毎の tex-command and bibtex-command 切り替え for yatex](http://meq-yo.sblo.jp/article/64863422.html)
- [YaTeX の設定と利用法](http://www.proton.jp/main/latex/yatex.html)
- [yatex-modeでPDFプレビュー](http://d.hatena.ne.jp/hico_horiuchi/20130329/1364563601)
- [YaTeXモードで句読点と全角英数字を変換して保存するEmacsLisp](http://d.hatena.ne.jp/FromAtom/20130112/1358009997)
- [Emacsへフォーカス](http://d.hatena.ne.jp/eggtoothcroc/20121106/p1)
- [YaTeXメモ](http://d.hatena.ne.jp/su48us/20120731)
- [YaTeX でタイプセットからプレビューまで一括して行う](http://ryo1miya.hatenablog.com/entry/20120614/1339697123)
- [Yatex導入](http://blogs.yahoo.co.jp/echotechsoft/158191.html)
- [Emacs+YaTex-導入編](http://d.hatena.ne.jp/tukasa1919/20110507/1304783879)
- [Emacs+YaTeX－使い方編](http://d.hatena.ne.jp/tukasa1919/20110509/1304937507)
- [YaTeX reftex-modeの動作について](https://okumuralab.org/tex/mod/forum/discuss.php?d=308)
- [YaTeX World (野鳥わぁるど)](http://www.nk.rim.or.jp/~naru/yatex/) (成宮 隆之 さん)
- [yatex キー操作](http://www.cosmo.sci.hokudai.ac.jp/~kk/emacs/yatex_key.html)
- [YaTeXとRefTeXの共存](http://ubutun.blogspot.com/2011/06/yatexreftex.html)
- [SyncTeXの設定。 Emacs(YaTeX) + Evince](http://ubutun.blogspot.jp/2012/05/synctex-emacsyatex-evince.html)
- [RjpWiki:SweaveでエディタとDVIビューア間の相互移動](<http://www.okadajp.org/RWiki/?SweaveでエディタとDVIビューア間の相互移動>)
- [EmacsとSkim.appでTeX・PDFシンクロ](http://d.hatena.ne.jp/setoryohei/20110102/1294003836)
- [http://d.hatena.ne.jp/munepi/searchdiary?word=YaTeX](http://d.hatena.ne.jp/munepi/searchdiary?word=YaTeX)
- [yatex-modeになったときにマイナーモードcdlatexを起動する](http://d.hatena.ne.jp/daharu/20111106/1320562641)
- [YaTeX の気になる所](http://d.hatena.ne.jp/setoryohei/20120127/1327680856)
- [TeX Memo \[Internet Archive\]](http://web.archive.org/web/20100601184838/http://homepages.inf.ed.ac.uk/s0675112/tex_memo.html)

### リリース情報 {#w889e1b2}

[yatex: tags](https://www.yatex.org/hgrepos/hgweb.cgi/yatex/tags) を参照．

### [ChangeLog](https://www.yatex.org/yatex-new.txt) {#n0cf386c}

- [YaTeX Mercurial Repositories](https://www.yatex.org/hgrepos/hgweb.cgi/yatex/)
    - [コミットログ](https://www.yatex.org/hgrepos/hgweb.cgi/yatex/shortlog/)
    - [変更点](https://www.yatex.org/hgrepos/hgweb.cgi/yatex/file/tip/yatex.new)
- [YaTeX Git Repositories](https://www.yatex.org/gitbucket/yuuji/yatex)
    - [コミットログ](https://www.yatex.org/gitbucket/yuuji/yatex/commits/devel)
    - [変更点](https://www.yatex.org/gitbucket/yuuji/yatex/blob/devel/yatex.new)
- [What's new in Japanese](https://www.yatex.org/yatex-new.txt)
- [http://twilog.org/hiroseyuuji/search?word=YaTeX](http://twilog.org/hiroseyuuji/search?word=YaTeX)
