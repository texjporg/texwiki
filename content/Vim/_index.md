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

[Vim](https://ja.wikipedia.org/wiki/Vim) は Bram Moolenaar 氏を中心に開発が行われているエディタです．<br>
Vim は，他の多くのエディタと異なり，「モード」という概念が存在します．<br>
モードを切り替えることで，一つのキーに対して複数の意味を割り当てることができます．<br>
ある程度快適に使用するためには練習が必要になりますが，習熟すれば高速で効率のよい編集が可能になります．<br>

- [Vim 公式サイト](http://www.vim.org/)
    - [ftp://ftp.vim.org/pub/vim/](ftp://ftp.vim.org/pub/vim/)
        - [ftp://ftp.vim.org/pub/vim/pc](ftp://ftp.vim.org/pub/vim/pc)
        - [ftp://ftp.vim.org/pub/vim/unix/](ftp://ftp.vim.org/pub/vim/unix/)
- [Vim 開発サイト](https://code.google.com/p/vim/)
    - [コミットログ](https://code.google.com/p/vim/source/list)
- [vim-jp &raquo; Vimのユーザと開発者を結ぶコミュニティサイト](http://vim-jp.org/)
    - [twitter](https://twitter.com/vim_jp)
- [vim-jp's Profile - GitHub](https://github.com/vim-jp)
    - [vim-jp/vimdoc-ja - GitHub](https://github.com/vim-jp/vimdoc-ja)
        <!-- [[Vim team:http://sourceforge.net/project/memberlist.php?group_id=8] -->
        <!-- [[develop:http://sourceforge.net/projects/vim/develop]] -->

- [Vim Advent Calendar 2013 : ATND](http://atnd.org/events/45072)

### 動作環境 {#w6b94f3c}

[download : vim online](http://www.vim.org/download.php) を参照．

### License {#w85a7064}

Vim は，チャリティウェアです．<br>
[VIM ライセンス](https://code.google.com/p/vim/source/browse/runtime/doc/uganda.txt) ([日本語訳](http://vim-jp.org/vimdoc-ja/uganda.html)) でリリースされています．<br>

### リリース情報/ChangeLog {#n22b1c9a}

[コミットログ](https://code.google.com/p/vim/source/list) を参照．<br>

### 派生版 {#ka1322d7}

#### Windows {#mcb80f41}

- [KaoriYa (香り屋) 版](http://www.kaoriya.net/software/vim)
    Vim オリジナルに，日本語を扱う上で便利な設定やスクリプトが追加されている
    - [koron (MURAOKA Taro) · GitHub](https://github.com/koron)
    - [Vim昔語/遭遇編 &mdash; KaoriYa](http://www.kaoriya.net/blog/201108/20110811)
        <!-- -[[gVim Portable:http://sf.net/projects/portableapps/files/gVim%20Portable/]] -->

#### Windows, Linux {#o0f5036e}

- [Vim UTF-8 日本語版 - fudist](https://sites.google.com/site/fudist/Home/vim-nihongo-ban)
    UTF-8 化した vim/gvim

#### Windows, GNU/Linux, FreeBSD {#q4511794}

- [Cream](http://cream.sf.net/)
    モーダルな Vim をモードレスに

#### OS X {#gb7dcad0}

- [MacVim-KaoriYa](https://code.google.com/p/macvim-kaoriya/)
    香り屋さんの Windows 版の使い勝手に近い MacVim を勝手に目指すプロジェクト
    - [コミットログ](https://github.com/splhack/macvim/commits/master)
- [MacVim](https://code.google.com/p/macvim/)
    - [コミットログ](https://github.com/b4winckler/macvim/commits/master)
- [MacOSX Vim](http://sf.net/projects/macosxvim/files/)

#### Android {#o2329571}

- [VimTouch](https://github.com/momodalo/vimtouch)
    - [Vim Touch - Google Play](https://play.google.com/store/apps/details?id=net.momodalo.app.vimtouch&hl=ja)
- [rbox](http://d.hatena.ne.jp/rattcv/searchdiary?word=rbox)
    <!-- - -[[Vim for Android:http://ux.getuploader.com/vim/]] -->

#### iOS {#o6e8ea48}

- [Applidium &mdash; Vim](http://applidium.com/en/applications/vim/)
    - [Vim - iTunes App Store](https://itunes.apple.com/jp/app/vim/id492668168?mt=8)

### ヘルプ {#b043417b}

- [Vim documentation: help](http://vim-jp.org/vimdoc-ja/)
    Vim のヘルプを和訳したもの

- [Vim-users.jp](http://vim-users.jp/)
- [名無しのvim使い](http://nanasi.jp/)
- [ずんWiki - vim](http://www.kawaz.jp/pukiwiki/?vim)
- [VimWiki](http://vimwiki.net/)
- [Vim Tips Wiki](http://vim.wikia.com/)

## 不具合 {#h94d310c}

- [https://code.google.com/p/vim/issues/list](https://code.google.com/p/vim/issues/list)
- [https://github.com/vim-jp/issues/issues](https://github.com/vim-jp/issues/issues)

## Vim で LaTeX {#i2be46c6}

### tex.vim {#y0b061e7}

[Vim/tex.vim](/Vim/tex.vim/) を参照．

### その他のプラグイン {#g8a1b1b6}

- [quickrun](/quickrun/)
- [neocomplete &amp; neosnippet](/neocomplete/)
- [YouCompleteMe](https://github.com/Valloric/YouCompleteMe)
- LaTeX Box
- [latex-support.vim : LaTeX-IDE for Vim/gVim ](http://www.vim.org/scripts/script.php?script_id=4405)
- [vim-latex-live-preview](http://www.vim.org/scripts/script.php?script_id=4524)
- [platex-suite](https://github.com/lambdalisue/platex.vim)
- [TeX 9 : A semi-automatic LaTeX ftplugin with lots of firepower!](http://www.vim.org/scripts/script.php?script_id=3508)
    - [vim-scripts/TeX-9 · GitHub](https://github.com/vim-scripts/TeX-9)
- [auctex.vim](http://www.vim.org/scripts/script.php?script_id=162)
    - [vim-scripts/auctex.vim - GitHub](https://github.com/vim-scripts/auctex.vim)
- [tex.vim : Indent file for TeX](http://www.vim.org/scripts/script.php?script_id=218)
    - [vim-scripts/tex.vim--Tanzler - GitHub](https://github.com/vim-scripts/tex.vim--Tanzler)
- [vim-latex-omnifunc](https://github.com/igrep/vim-latex-omnifunc)
- [vim-latex-live-preview](https://github.com/xuhdev/vim-latex-live-preview)
- [unite-bibtex](https://github.com/termoshtt/unite-bibtex)
- [CygwinでvimでTeXのコンパイル](http://d.hatena.ne.jp/interferobserver/20130815/1376517041)
- [瞬間没入感](http://kwakita.wordpress.com/2013/03/22/immersion/)
- [vim 快適な論文執筆環境の整備 -その1-](http://kuni255.blogspot.jp/2011/12/vim-1.html)
- [vim 快適な論文執筆環境の整備 -その2-](http://kuni255.blogspot.jp/2011/12/vim-2.html)
- [vim 快適な論文執筆環境の整備 -その3-](http://kuni255.blogspot.jp/2011/12/vim-3.html)
- [VIMで日本語文章中の半角「,」を全角「，」に変える方法](http://ututel.blog121.fc2.com/blog-date-20130128.html)
- [unite.vimとunite-outlineでlatexファイルの編集が楽になった](http://hinagishi.hateblo.jp/entry/2011/11/18/135701)
- [Vimで保存時に自動的にTeXをコンパイル (適当編)](http://blomott.mobi/rubyneko/entry%2CsCKhEg6WPUiQnldaTG1j9w%2C%2C%2C%2C.html)
- [ファイルの変更を監視してmake](http://d.hatena.ne.jp/hakobe932/20081221/1229874843)
- [TexのMakefileとvimの設定](http://bkc.g.hatena.ne.jp/hakobe932/20081211/1228975757)
- [Vim/TeXShop integration](http://reference-man.blogspot.com/2009/01/vimtexshop-integration.html)
- [zencoding-vim](https://github.com/mattn/zencoding-vim)
    - \[[TeX\]記事一覧 - blob glob](http://d.hatena.ne.jp/cobodo/archive?word=*%5bTeX%5d)
        - [zen-codingっぽくTeX(etc.)](http://d.hatena.ne.jp/cobodo/20100416/1271408225)
- [snippetsEmu - An attempt to emulate TextMate's snippet expansion](http://www.vim.org/scripts/script.php?script_id=1318)
    - [TeXの図や表をsnippetsEmu.vimで簡単に入力出来るようにする](http://vim.g.hatena.ne.jp/y_yanbe/20080926)
- [texファイルの更新を見て自動でコンパイルしてpdf開く](http://d.hatena.ne.jp/soh335/20111021/1319133018)
- [texのerrorとかwarningとかの監視](http://d.hatena.ne.jp/soh335/20111223/1324610999)
    - [App::watcher](http://search.cpan.org/search?query=App%3A%3Awatcher)
    - [watchr](https://github.com/mynyml/watchr)
- [Vim - ConTeXt wiki](http://sandbox.contextgarden.net/Vim)
- [tex_autoclose.vim : TeX / LaTeX ftplugin to automatically close environments ](http://www.vim.org/scripts/script.php?script_id=920)
- [Writing LaTeX files with GVim &laquo; A blog about LaTeX, Linux and FreeBSD](http://alexkrispin.wordpress.com/2010/10/07/writing-latex-files-with-gvim/)

## SumatraPDF との連携 {#tf5a143c}

### forward search {#j2d22939}

SumatraPDF はコマンドラインから forward search が可能です．

詳しくは，[tex.vim](/Vim/tex.vim/) を参照してください．

### inverse search {#b8f7bf28}

#### tex.vim, quickrun, LaTeX Box の場合 {#b099e4df}

tex.vim, quickrun, LaTeX Box の場合 inverse search は SumatraPDF の \[設定(S)\]-\[オプション(O)...\]-\[逆順検索コマンドラインの設定\] に<br>

```
"C:\vim\gvim.exe" -n --remote-silent +%l "%f"
```

です．<br>
設定ファイルから SumatraPDF の -inverse-search コマンドラインオプションで指定することもできます．<br>

## Evince との連携 {#p78ad52b}

### forward and inverse search {#p2367ca6}

[tex.vim](/Vim/#y0b061e7) を参照してください．

- [http://blog.wuzzeb.org/posts/2013-05-11-vim-latex-forward-search.html](http://blog.wuzzeb.org/posts/2013-05-11-vim-latex-forward-search.html)

## 使い方 {#j3d4339e}

- [MBA-HACK: vim](http://mba-hack.blogspot.jp/search/label/vim)
    - [Vimの使い方まとめ](http://mba-hack.blogspot.jp/2013/02/vim.html)
- [http://archiva.jp/web/tool/vim_basic.html](http://archiva.jp/web/tool/vim_basic.html)

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

- [Vimに関する新着投稿 - Qiita \[キータ\]](http://qiita.com/tags/Vim)
- [Vimを最強のPython開発環境にする2](http://lambdalisue.hatenablog.com/entry/2013/06/23/071344)
- [SanRin舎 &raquo; vi/Vim](http://sanrinsha.lolipop.jp/blog/2011/04/vi%E3%82%A8%E3%83%87%E3%82%A3%E3%82%BF.html)
- [vim でシェルコマンドを実行した際の Press ENTER or type command to continue を非表示に](http://d.hatena.ne.jp/koyudoon/20120131/1327959087)
- [Vimのメモ](http://ogawa.s18.xrea.com/fswiki/wiki.cgi?page=Vim%A4%CE%A5%E1%A5%E2)

## チュートリアル {#d82a6a51}

- [Interactive Vim tutorial](http://www.openvim.com/tutorial.html)
