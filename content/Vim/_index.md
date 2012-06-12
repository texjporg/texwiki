---
title: "Vim"
url: "/Vim/"
date: 2011-10-31T23:54:03Z
bookCollapseSection: true
pukiwiki: "Vim"
---

# Vim

## [Vim](http://www.vim.org/) {#c1593263}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/200px-Vimlogo.svg.png" alt="Vim" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

<div style="clear:both"></div>

## Vim とは {#h0ea1272}

Vim は Bram Moolenaar 氏を中心に開発が行われているエディタです．<br>
Vim は，他の多くのエディタと異なり，「モード」という概念が存在します．<br>
モードを切り替えることで，一つのキーに対して複数の意味を割り当てることができます．<br>
ある程度快適に使用するためには練習が必要になりますが，習熟すれば高速で効率のよい編集が可能になります．<br>
Vim は，チャリティウェアです．[VIM ライセンス](http://code.google.com/p/vim/source/browse/runtime/doc/uganda.txt) ([日本語訳](http://vim-jp.org/vimdoc-ja/uganda.html)) でリリースされています．<br>

GVim 7.3.034 よりも前のバージョンには DLL 読み込みに関する脆弱性が存在します．<br>
最新版へアップデートしてください．<br>
詳細は [GVim における DLL 読み込みに関する脆弱性](http://jvn.jp/jp/JVN27868039/) を参照してください．<br>

GVim 7.3.344 で UNIX 系 の GVim で起動時にハングしたり起動が遅くなったりしていた問題が修正されました．<br>
Gvim 7.3.520 で Ubuntu 12.04 でパッケージマネージャ経由でインストールされた GVim が起動時に数十秒ハングする問題が修正されました．<br>

- [Vim 公式サイト](http://www.vim.org/)
    - [ftp://ftp.vim.org/pub/vim/](ftp://ftp.vim.org/pub/vim/)
        - [ftp://ftp.vim.org/pub/vim/pc](ftp://ftp.vim.org/pub/vim/pc)
        - [ftp://ftp.vim.org/pub/vim/unix/](ftp://ftp.vim.org/pub/vim/unix/)
- [Vim 開発サイト](http://code.google.com/p/vim/)
    - [コミットログ](http://code.google.com/p/vim/source/list)
- [vim-jp &raquo; Vimのユーザと開発者を結ぶコミュニティサイト](http://vim-jp.org/)
    - [twitter](http://twitter.com/vim_jp)
- [vim-jp's Profile - GitHub](https://github.com/vim-jp)
    - [vim-jp/vimdoc-ja - GitHub](https://github.com/vim-jp/vimdoc-ja)
    - [UNIX系GUI版で起動時にハングしたり起動が遅くなったりしていた問題が修正されました。](http://vim-jp.org/2011/10/21/patch_7.3.344.html)
        <!-- [[Vim team:http://sourceforge.net/project/memberlist.php?group_id=8] -->
        <!-- [[develop:http://sourceforge.net/projects/vim/develop]] -->

### 派生版 {#ka1322d7}

#### Windows {#mcb80f41}

- [KaoriYa (香り屋) 版](http://www.kaoriya.net/software/vim)
    Vim オリジナルに，日本語を扱う上で便利な設定やスクリプトが追加されている
    - [Vim昔語/遭遇編 &mdash; KaoriYa](http://www.kaoriya.net/blog/201108/20110811)
    - [コミットログ](https://github.com/splhack/macvim/commits/master)
- [vim-win3264](http://code.google.com/p/vim-win3264/)
- [gVim Portable](http://sf.net/projects/portableapps/files/gVim%20Portable/)

#### Windows, Linux {#o0f5036e}

- [Vim UTF-8 日本語版 - fudist](https://sites.google.com/site/fudist/Home/vim-nihongo-ban)
    UTF-8 化した vim/gvim

#### Windows, GNU/Linux, FreeBSD {#q4511794}

- [Cream](http://cream.sf.net/)
    モーダルな Vim をモードレスに

#### OS X {#gb7dcad0}

- [MacVim-KaoriYa](http://code.google.com/p/macvim-kaoriya/)
    香り屋さんの Windows 版の使い勝手に近い MacVim を勝手に目指すプロジェクト

- [MacVim](https://github.com/b4winckler/macvim/downloads)
    - [コミットログ](https://github.com/b4winckler/macvim/commits/master)
- [vim-cocoa](http://code.google.com/p/vim-cocoa/)
    - [コミットログ](https://github.com/jjgod/vim-cocoa/commits/master)
- [MacOSX Vim](http://sf.net/projects/macosxvim/files/)

#### iOS {#o6e8ea48}

- [Applidium &mdash; Vim](http://applidium.com/en/applications/vim/)
    - [App Store - Vim](http://itunes.apple.com/jp/app/vim/id492668168?mt=8)

#### Android {#o2329571}

- [Vim for Android](http://ux.getuploader.com/vim/)

### ヘルプ {#b043417b}

- [Vim documentation: help](http://vim-jp.org/vimdoc-ja/)
    Vim のヘルプを和訳したもの

- [Vim-users.jp](http://vim-users.jp/)
- [名無しのvim使い](http://nanasi.jp/)
- [ずんWiki - vim](http://www.kawaz.jp/pukiwiki/?vim)
- [VimWiki](http://vimwiki.net/)
- [Vim Tips Wiki](http://vim.wikia.com/)

### スクリーンショット {#p2c08dcd}

[![Vim で LaTeX ファイルを編集している画面](http://linux.dsplabs.com.au/files/p54-resume/resume-latex-vim-small.png)](http://linux.dsplabs.com.au/files/p54-resume/resume-latex-vim.png)

## 不具合 {#h94d310c}

### Ubuntu 12.04 の gvim がまともに動かない → [Patch 7.3.520 にて修正されました](http://vim-jp.org/blog/2012/05/20/patch_7.3.520.html) {#fba97189}

回避策：gvim -f で起動<br>

- [GTK版GVimが起動時に数十秒待たされる問題が修正されました。](http://vim-jp.org/blog/2012/05/20/patch_7.3.520.html)
- [Issue #193: Ubuntu 12.04 の gvim がまともに動かない · vim-jp/issues · GitHub](https://github.com/vim-jp/issues/issues/193)
- [Bug #987707 “gvim in Precise can't connect to ibus and takes a l...” : Bugs : “vim” package : Ubuntu](https://bugs.launchpad.net/ubuntu/+source/vim/+bug/987707)

### Ubuntu 11.10 や GNOME 3 で GVim を起動すると入力するまでに時間がかかる → [Patch 7.3.344 にて修正されました](http://vim-jp.org/2011/10/21/patch_7.3.344.html) {#i39ca67b}

回避策：gvim -f で起動<br>
[Patch 7.3.344 にて修正されました](http://vim-jp.org/2011/10/21/patch_7.3.344.html)

- [UNIX系GUI版で起動時にハングしたり起動が遅くなったりしていた問題が修正されました。](http://vim-jp.org/2011/10/21/patch_7.3.344.html)
    - [version 7.3.344](http://code.google.com/p/vim/source/detail?r=v7-3-344)
    - [version 7.3.315](http://code.google.com/p/vim/source/detail?r=v7-3-315)
- [#85: gvimの起動が遅い - Issues - vim-jp/issues - GitHub](https://github.com/vim-jp/issues/issues/85)
- [Bug #877193 in vim (Ubuntu): “gvim freezes when started from a terminal”](https://bugs.launchpad.net/ubuntu/+source/vim/+bug/877193)
- [Bug #872095 in vim (Ubuntu): “gvim from vim-gnome hang up on start”](https://bugs.launchpad.net/ubuntu/+source/vim/+bug/872095)
- [Bug #771810 in vim (Ubuntu): “gvim occasionally shows error "Unable to register window with path... Timeout was reached" ”](https://bugs.launchpad.net/ubuntu/+source/vim/+bug/771810)
- [GNOME3とGVim](http://hackathon.g.hatena.ne.jp/zrail/20110808/1312835084)
- [Slow response in gvim, gnome3](http://forums.fedoraforum.org/showthread.php?p=1464463)
- [IBUS-WARNING \*\*: Create input context failed](http://fairladyx.zapto.org/node/15)

## Vim で LaTeX {#i2be46c6}

- [Vim-LaTeX](/Vim-LaTeX/)
- Automatic LaTeX Plugin for Vim (ATP)
- neocomplcache
- [platex-suite](https://github.com/lambdalisue/platex.vim)
- [LaTeX Box](http://www.vim.org/scripts/script.php?script_id=3109)
    - [LaTeX-Box-Team/LaTeX-Box - GitHub](https://github.com/LaTeX-Box-Team/LaTeX-Box)
    - [vim-scripts/LaTeX-Box - GitHub](https://github.com/vim-scripts/LaTeX-Box)
    - [Latexmkとvim, vim-boxの設定](http://d.hatena.ne.jp/wal-neko/20101119/1290158352)
- [auctex.vim](http://www.math.rochester.edu/people/faculty/cmlr/Latex/)
    - [vim-scripts/auctex.vim - GitHub](https://github.com/vim-scripts/auctex.vim)
- [tex.vim : Indent file for TeX](http://www.vim.org/scripts/script.php?script_id=218)
    - [vim-scripts/tex.vim--Tanzler - GitHub](https://github.com/vim-scripts/tex.vim--Tanzler)
- [vim-latex-omnifunc](https://github.com/igrep/vim-latex-omnifunc)
- [vim-latex-live-preview](https://github.com/xuhdev/vim-latex-live-preview)
- [Whizzy4Vim (WhizzyTeX for Vim)](http://www.pakunet.jp/whizzy4vim)
- [vim 快適な論文執筆環境の整備 -その1-](http://kuni255.blogspot.jp/2011/12/vim-1.html)
- [vim 快適な論文執筆環境の整備 -その2-](http://kuni255.blogspot.jp/2011/12/vim-2.html)
- [vim 快適な論文執筆環境の整備 -その3-](http://kuni255.blogspot.jp/2011/12/vim-3.html)
- [unite.vimとunite-outlineでlatexファイルの編集が楽になった](http://hinagishi.hateblo.jp/entry/2011/11/18/135701)
- [Vimで保存時に自動的にTeXをコンパイル (適当編)](http://blomott.mobi/rubyneko/entry%2CsCKhEg6WPUiQnldaTG1j9w%2C%2C%2C%2C.html)
- [ファイルの変更を監視してmake](http://d.hatena.ne.jp/hakobe932/20081221/1229874843)
- [TexのMakefileとvimの設定](http://bkc.g.hatena.ne.jp/hakobe932/20081211/1228975757)
- [ftpluginのtex.vim](http://blog.mountrice.com/2009/10/tex-for-snow-leopard.html)
- [Vim/TeXShop integration](http://reference-man.blogspot.com/2009/01/vimtexshop-integration.html)
- [zencoding-vim](https://github.com/mattn/zencoding-vim)
    - \[[TeX\]記事一覧 - blob glob](http://d.hatena.ne.jp/cobodo/archive?word=*%5bTeX%5d)
        - [zen-codingっぽくTeX(etc.)](http://d.hatena.ne.jp/cobodo/20100416/1271408225)
- [snipMate - TextMate-style snippets for Vim](https://github.com/msanders/snipmate.vim)
- [snippetsEmu - An attempt to emulate TextMate's snippet expansion](http://www.vim.org/scripts/script.php?script_id=1318)
    - [TeXの図や表をsnippetsEmu.vimで簡単に入力出来るようにする](http://vim.g.hatena.ne.jp/y_yanbe/20080926)
- [texファイルの更新を見て自動でコンパイルしてpdf開く](http://d.hatena.ne.jp/soh335/20111021/1319133018)
- [texのerrorとかwarningとかの監視](http://d.hatena.ne.jp/soh335/20111223/1324610999)
    - [App::watcher](http://search.cpan.org/search?query=App%3A%3Awatcher)
    - [watchr](https://github.com/mynyml/watchr)
- [Vim - ConTeXt wiki](http://sandbox.contextgarden.net/Vim)
- [tex_autoclose.vim : TeX / LaTeX ftplugin to automatically close environments ](http://www.vim.org/scripts/script.php?script_id=920)
- [text editors &laquo; PhilTeX](http://www.charlietanksley.net/philtex/category/text-editors/)
    - [Vim for LaTeX, part 1](http://www.charlietanksley.net/philtex/vim-for-latex-part-1/)
    - [Vim for LaTeX, part 2](http://www.charlietanksley.net/philtex/vim-for-latex-part-2/)
    - [Vim for LaTeX, part 3](http://www.charlietanksley.net/philtex/vim-for-latex-part-3/)
    - [Vim for LaTeX, part 4](http://www.charlietanksley.net/philtex/vim-for-latex-part-4/)
- [vim-live-latex-preview (LaTeX in (g)Vim with live update-as-you-type PDF preview &laquo; PhilTeX)](http://www.charlietanksley.net/philtex/vim-live-latex-preview/)
- [Writing LaTeX files with GVim &laquo; A blog about LaTeX, Linux and FreeBSD](http://alexkrispin.wordpress.com/2010/10/07/writing-latex-files-with-gvim/)

## SumatraPDF との連携 {#tf5a143c}

### forward search {#j2d22939}

SumatraPDF v1.9.4622 以上の場合はコマンドラインから forward search が可能です．

Vim の場合は Python, Ruby, Perl などを使って forward search を実現することも可能です．

詳しくは，[Vim-LaTeX](/Vim-LaTeX/)[#SumatraPDF との連携 (forward search)](/Vim-LaTeX/#e0090c3d) を参照してください．

### inverse search {#b8f7bf28}

inverse search は SumatraPDF の \[設定(S)\]-\[オプション(O)...\]-\[逆順検索コマンドラインの設定\] に

```
C:\vim73-kaoriya-win32\gvim.exe -n --remote-silent +%l "%f"
```

です．

[Vim-LaTeX](/Vim-LaTeX/) で SumatraPDF の inverse search をする場合は，これとは異なる記述が必要です．

詳細は，[Vim-LaTeX](/Vim-LaTeX/)[#SumatraPDF との連携 (inverse search)](/Vim-LaTeX/#nefa91ff) を参照してください．

## dviout との連携 (非推奨) {#yb1d17aa}

[dviout#forward and inverse search](/dviout/#ycc841a2) を参照．

### forward search {#i0a5c1b0}

forward search については [Vim-LaTeX](/Vim-LaTeX/)[dviout との連携#forward search](/Vim-LaTeX/#g7a208c2) を参照してください．

### inverse search {#f8dee8e5}

inverse search は dviout の \[Option\]-\[Setup Parameters...\]-\[Common\]-\[src:\] に

```
C:\vim73-kaoriya-win32\gvim.exe^s -n --remote-silent +%d "%s"
```

です．

## Evince との連携 (forward and inverse search) {#p78ad52b}

[Vim-LaTeX](/Vim-LaTeX/)[#Evince との連携 (forward and inverse search)](/Vim-LaTeX/#j6ff1448) を参照してください．

## pxdvi との連携 (forward and inverse search) (非推奨) {#z967afdc}

[Vim-LaTeX](/Vim-LaTeX/)[#pxdvi との連携 (forward and inverse search)](/Vim-LaTeX/#e36989d2) を参照してください．

## 使い方 {#j3d4339e}

### 折りたたみ {#ff31000b}

Vim の一般的な折りたたみの操作に関しては [Vim-users.jp - Hack #178: テキストを折り畳む &#8211; 操作編](http://vim-users.jp/2010/10/hack178/) を参照してください．

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#070;text-align:center">メニュー [ツール(T)]</th><th style="color:#FFF;background-color:#070;text-align:center">ノーマルモード</th><th style="color:#FFF;background-color:#070;text-align:center">機能</th></tr>
> <tr><td>折畳み(F) -&gt; 有効/無効切替(E)</td><td>zi</td><td>折りたたみを有効  ←→ 無効</td></tr>
> <tr><td></td><td>zo</td><td>カーソル位置の折りたたみを開く</td></tr>
> <tr><td></td><td>zO</td><td>カーソル位置の折りたたみを再帰的に開く</td></tr>
> <tr><td></td><td>zc</td><td>カーソル位置の折りたたみを閉じる</td></tr>
> <tr><td></td><td>zC</td><td>カーソル位置の折りたたみを再帰的に閉じる</td></tr>
> <tr><td></td><td>za</td><td>カーソル位置の折りたたみを開く ←→ 閉じる</td></tr>
> <tr><td></td><td>zA</td><td>カーソル位置の折りたたみを再帰的に開く ←→ 閉じる</td></tr>
> <tr><td>折畳み(F) -&gt; 折畳みを開く(P)</td><td>zr</td><td>折りたたみを開く</td></tr>
> <tr><td>折畳み(F) -&gt; 全折畳みを開く(O)</td><td>zR</td><td>全ての折りたたみを開く</td></tr>
> <tr><td>折畳み(F) -&gt; 折畳みを閉じる(L)</td><td>zm</td><td>折りたたみを閉じる</td></tr>
> <tr><td>折畳み(F) -&gt; 全折畳みを閉じる(C)</td><td>zM</td><td>全ての折りたたみを閉じる</td></tr>
> </tbody>
> </table>
>

## Vim スクリプトの作成 {#q825b71f}

- [Vim エディターのスクリプトの作成: 第 1 回 変数、値、式](http://www.ibm.com/developerworks/jp/linux/library/l-vim-script-1/)
- [Vim エディターのスクリプトの作成: 第 2 回 ユーザー定義関数](http://www.ibm.com/developerworks/jp/linux/library/l-vim-script-2/)
- [Vim エディターのスクリプトの作成: 第 3 回 組み込みリスト](http://www.ibm.com/developerworks/jp/linux/library/l-vim-script-3/)
- [Vim エディターのスクリプトの作成: 第 4 回 辞書](http://www.ibm.com/developerworks/jp/linux/library/l-vim-script-4/)
- [Vim エディターのスクリプトの作成: 第 5 回 イベント駆動型のスクリプト作成と自動化](http://www.ibm.com/developerworks/jp/linux/library/l-vim-script-5/)
- [Vimスクリプト基礎文法最速マスター - 永遠に未完成](http://d.hatena.ne.jp/thinca/20100201/1265009821)

## 設定に関するリンク {#b7ef8622}

- [SanRin舎 &raquo; vi/Vim](http://sanrinsha.lolipop.jp/blog/2011/04/vi%E3%82%A8%E3%83%87%E3%82%A3%E3%82%BF.html)

## チュートリアル {#d82a6a51}

- [Interactive Vim tutorial](http://www.openvim.com/tutorial.html)
