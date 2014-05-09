---
title: "xyzzy"
url: "/xyzzy/"
date: 2010-05-08T01:39:34Z
pukiwiki: "xyzzy"
---

# xyzzy

## xyzzy → 問題が発生する場合は [Emacs](/Emacs/) を使用する {#r2e32810}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## xyzzy とは {#a651aa7e}

xyzzy は国産のテキストエディタです．<br>

- [xyzzy - カスタマイズ可能で軽快な Windows 用テキストエディタ](http://xyzzy-022.github.io/)
- [xyzzy - 窓の杜ライブラリ](http://www.forest.impress.co.jp/library/software/xyzzy/)

### 動作環境 {#h05168de}

Windows 8.1, 8, 7, Vista, XP

### License {#gf798577}

MIT License

### ChangeLog {#l81f20e0}

- [https://github.com/xyzzy-022/xyzzy/commits/develop](https://github.com/xyzzy-022/xyzzy/commits/develop)

## xyzzy で LaTeX {#mac2333e}

- [xyzzy 付属の LaTeX モード](https://github.com/xyzzy-022/xyzzy/blob/develop/lisp/LaTeX.l)
- KyoTeX

## スクリプト {#ha3f5417}

### Happy {#ra9f73ad}

- [Happy](/Happy/)

## SumatraPDF との連携 {#s1d4a0f1}

### forward search (SumatraPDF を前面に表示したい場合) {#ra3924a4}

xyzzy から SumatraPDF の該当箇所にジャンプすることが可能です。<br>

#### xyzzy 付属の LaTeX モードの場合 {#y959a451}

xyzzy 付属の LaTeX モードの場合は &#x7e;/.xyzzy に以下のように設定します．<br>

***

```
(defun sumatrapdf-forward-search ()
  (interactive)
  (let* ((tex-file (get-buffer-file-name))
         (pdf-file (concat (car (split-string (get-buffer-file-name) "\\.")) ".pdf"))
         (line (format nil "~D" (current-line-number)))
         (cmd "rundll32 shell32,ShellExec_RunDLL SumatraPDF")
         (args))
    (setq args (concat "-reuse-instance \"" pdf-file "\" -forward-search \"" tex-file "\" " line))
    (message (concat cmd " " args))
    (call-process (concat cmd " " args)
                  :exec-directory (directory-namestring tex-file))))

(add-hook 'editor::*LaTeX-mode-hook*
          #'(lambda ()
              (define-key editor::*LaTeX-mode-map* '(#\C-c #\s) 'sumatrapdf-forward-search)))
```

***

C-c s または M-x sumatrapdf-forward-search RET で実行できます．<br>

#### KyoTeX の場合 {#ce1ea679}

KyoTeX を参照．<br>

### forward search (SumatraPDF を前面に表示したくない場合) {#dfbd45ed}

xyzzy から SumatraPDF の該当箇所にジャンプすることが可能です。<br>

#### xyzzy 付属の LaTeX モードの場合 {#p51e7633}

xyzzy 付属の LaTeX モードの場合は &#x7e;/.xyzzy に以下のように設定します．<br>

***

```
(defun fwdsumatrapdf-forward-search ()
  (interactive)
  (let* ((tex-file (get-buffer-file-name))
         (pdf-file (concat (car (split-string (get-buffer-file-name) "\\.")) ".pdf"))
         (line (format nil "~D" (current-line-number)))
         (cmd "fwdsumatrapdf")
         (args))
    (setq args (concat "\"" pdf-file "\" \"" tex-file "\" " line))
    (message (concat cmd " " args))
    (call-process (concat cmd " " args)
                  :exec-directory (directory-namestring tex-file))))

(add-hook 'editor::*LaTeX-mode-hook*
          #'(lambda ()
              (define-key editor::*LaTeX-mode-map* '(#\C-c #\w) 'fwdsumatrapdf-forward-search)))
```

***

C-c w または M-x fwdsumatrapdf-forward-search RET で実行できます．<br>

#### KyoTeX の場合 {#l613cb17}

KyoTeX を参照．<br>

### inverse search {#n1f72109}

[SumatraPDF](/SumatraPDF/) の \[設定(S)\]-\[オプション(O)...\]-\[逆順検索コマンドラインの設定\] で

```
C:\xyzzy\xyzzycli.exe -g %l "%f"
```

と書き込んで \[OK\] をクリックしてください。<br>
xyzzy の二重起動を防止するため，xyzzy.exe ではなく xyzzycli.exe を使用します。<br>
