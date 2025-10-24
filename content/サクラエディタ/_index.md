---
title: "サクラエディタ"
url: "/サクラエディタ/"
date: 2012-10-18T16:08:52Z
bookCollapseSection: true
pukiwiki: "サクラエディタ"
---

# サクラエディタ

## [サクラエディタ](https://sakura-editor.github.io/) {#a8762a1e}

サクラエディタは国産のテキストエディタです．
サクラエディタは

- TeX の色分け
- TeX の入力補完
- TeX のアウトライン解析

に対応しています．

- [サクラエディタ - GitHub Pages](https://sakura-editor.github.io/)
- [Sakura Editor Project Top Page - OSDN](https://osdn.net/projects/sakura-editor/)
- [Sakura Editor - SourceForge.net](https://sourceforge.net/projects/sakura-editor/) (Old)
    - 掲示板\[[一般\]](https://sakura-editor.sourceforge.net/cgi-bin/cyclamen/cyclamen.cgi?log=data)\[[開発A\]](https://sakura-editor.sourceforge.net/cgi-bin/cyclamen/cyclamen.cgi?log=dev)\[[開発U\]](https://sakura-editor.sourceforge.net/cgi-bin/cyclamen/cyclamen.cgi?log=unicode)\[[文書\]](https://sakura-editor.sourceforge.net/cgi-bin/cyclamen/cyclamen.cgi?log=help)\[[管理\]](https://sakura-editor.sourceforge.net/cgi-bin/cyclamen/cyclamen.cgi?log=web)\[[MACRO\]](https://sakura-editor.sourceforge.net/cgi-bin/cyclamen/cyclamen.cgi?log=macro)
    - [Sakura Editor / Wiki / Home](https://sourceforge.net/p/sakura-editor/wiki/)
    - [Members](https://sourceforge.net/p/sakura-editor/_members/)

***

***

### 動作環境 {#vfdecfda}

Windows 10

### ダウンロード {#p4ea6725}

リリース版

- [https://github.com/sakura-editor/sakura/releases](https://github.com/sakura-editor/sakura/releases)

開発版

- [https://ci.appveyor.com/project/sakuraeditor/sakura](https://ci.appveyor.com/project/sakuraeditor/sakura)
    - サクラエディタ開発版(64bit)をインストールする場合は AppVeyor の「Job name」から「Platform: x64」を選択して「Artifacts」を選択後、ファイルを選んでダウンロード（参考：[サクラエディタの64bit版の入手方法](https://suteakasann.hatenablog.com/entry/2021/11/02/173603)）

<!-- -http://jaist.dl.sourceforge.net/project/sakura-editor/ -->
<!-- -https://sourceforge.net/projects/sakura-editor/files/ -->
<!-- -[[サクラエディタ アップローダ その２ | uploader.jp:http://ux.getuploader.com/sakura_editor/]] -->

### 不具合 {#jbc9f4c6}

- [Issues · sakura-editor/sakura · GitHub](https://github.com/sakura-editor/sakura/issues)

### コマンドラインオプション {#j41d5a42}

- [コマンドラインオプション](http://sakura-editor.sourceforge.net/htmlhelp2/HLP000109.html)
- [コマンドラインオプション - SakuraEditorWiki](http://sakura.qp.land.to/?%A5%B3%A5%DE%A5%F3%A5%C9%A5%E9%A5%A4%A5%F3%A5%AA%A5%D7%A5%B7%A5%E7%A5%F3)

## 設定例 {#l23350b5}

### 外部ヘルプ, 外部HTMLヘルプの設定 &amp; migemo設定 {#w3004970}

- [help2](https://sourceforge.net/projects/sakura-editor/files/help2/)
- [Install/migemo.dll - SakuraEditorWiki](http://sakura.qp.land.to/?Install%2Fmigemo.dll)
- [C/Migemo &mdash; KaoriYa](http://www.kaoriya.net/software/cmigemo)

### 文字コード {#a47f6241}

#### デフォルトの文字コード {#bbabcd0a}

- [FAQ/57 - SakuraEditorWiki](http://sakura.qp.land.to/?FAQ%2F57)

\[設定(O)\] &gt; \[タイプ別設定(Y)...\] &gt; \[ウィンドウ\] からデフォルトの文字コードを指定することができます．
Unicode 化された TeX を使う場合は UTF-8 を選択します．
サクラエディタ v2.4.0 以降では文字コードのデフォルトは UTF-8 になっています．

#### 文字コードセット指定 {#q69d8ccc}

\[設定(O)\] &gt; \[文字コードセット指定(A)...\] から開いているファイルの文字コードを変更することができます．

### 正規表現 {#ucca1b07}

- [正規表現 - SakuraEditorWiki](http://sakura.qp.land.to/?%C0%B5%B5%AC%C9%BD%B8%BD)
    - [正規表現/投稿](http://sakura.qp.land.to/?%C0%B5%B5%AC%C9%BD%B8%BD%2F%C5%EA%B9%C6)
        - [正規表現キーワード登録数節約例(LaTeXの場合)](http://sakura.qp.land.to/?%C0%B5%B5%AC%C9%BD%B8%BD%2F%C5%EA%B9%C6#i35f0017)

#### 正規表現ライブラリ {#j57d8050}

- [bregonig.dll](https://web.archive.org/web/20250916074147/http://k-takata.o.oo7.jp/mysoft/bregonig.html)
- [k_takata / bregonig / ダウンロード &mdash; Bitbucket](https://bitbucket.org/k_takata/bregonig/downloads/)
    - [bron420.zip](https://web.archive.org/web/20201012050938/https://bbuseruploads.s3.amazonaws.com/7d3d1e84-84fc-4435-b34e-9a5f791dbc58/downloads/72d305ae-4a91-4fc6-9586-dec019c5ff84/bron420.zip?Signature=ALbix1Qj6dR3ikDwiKGnVGKb5GY%3D&Expires=1602480732&AWSAccessKeyId=AKIA6KOSE3BNJRRFUUX6&versionId=cHiLeu80ugk7KwsgI789tD5ySI_l.dmH&response-content-disposition=attachment%3B%20filename%3D%22bron420.zip%22)
- [GitHub - k-takata/bregonig: This is a source code repository of bregonig.dll regular expression library.](https://github.com/k-takata/bregonig)
    - [K.Takata さん / X](https://x.com/k_takata)

bregonig.dll を

- サクラエディタの実行ファイルと同じフォルダ
- PATH が通っているフォルダ

のどちらかに置きます．
上記以外のフォルダにある場合は，共通設定の検索タブの正規表現ライブラリ指定(L) で bregonig.dll のパスを指定します．

bregonig.dll が有効になると，検索／置換／Grep で

> bregonig.dll Ver.4.20 with Onigmo 6.2.0

のように表示されます．

#### 正規表現を使った色分け {#qadc6790}

次のうちのどちらかを実行します．

- タイプ別設定一覧から TeX を選択し，設定変更
- TeX ファイルを開いて，タイプ別設定

タイプ別設定のカラータブをクリックします．
色指定(L)の正規表現キーワード1の色分け/表示(D)にチェックを入れます．
コメントスタイルのブロック型に

- \begin{comment} ～ \end{comment} (プリアンブルに \usepackage{version} または \usepackage{comment} が必要)
- \iffalse ～ \fi

を追加します．

タイプ別設定の正規表現キーワードタブをクリックします．
$ と $，$$ と $$ の間を色分けするように正規表現キーワードを /\\${1,2}\[\s\S\]\*?\[^\\\\\]\\${1,2}/k に設定します．
$ と $，$$ と $$ の間に \\$ のある場合も色分けします．

### マクロ {#k426cf51}

[サクラエディタ/マクロ](</サクラエディタ/マクロ/>) を参照．

### スクリプト {#ud39d64a}

#### Happy {#n1688725}

- [Happy](/Happy/)

### 入力補完 {#b1c33ed1}

TeX の入力補完機能があります．

入力補完は，メニューの \[ツール(T)\] &gt; \[入力補完(/)\] または Ctrl+Space で実行できます．
単語ファイルを作成するのが面倒な場合は，候補の「編集中のファイル」と「強調キーワード」にチェックを入れると，単語ファイルを作成しなくても編集中のファイルと強調キーワードから候補を探して補完してくれます．

\[設定(O)\] &gt; \[タイプ別設定(Y)...\] &gt; \[支援\] で入力補完機能の設定ができます．

### アウトライン解析 {#kb277c8a}

TeX のアウトライン解析機能があります．

アウトライン解析は，メニューの \[検索(S)\] &gt; \[アウトライン解析(L)...\] で実行できます．
アウトライン解析画面のドッキングも可能です．
詳細は SakuraEditorWiki, PatchUnicode を参照してください．

- [アウトライン解析画面のドッキング機能追加 - SakuraEditorWiki](http://sakura.qp.land.to/?Junk/DockingOutline)
- [Sakura Editor / PatchUnicode / #116 アウトライン解析画面のドッキング機能追加](https://sourceforge.net/p/sakura-editor/patchunicode/116/)

\[設定(O)\] &gt; \[タイプ別設定(Y)...\] &gt; \[スクリーン\] でアウトライン解析方法を指定できます．

### プラグイン {#z82af691}

- [Plugin - SakuraEditorWiki](http://sakura.qp.land.to/?Plugin)
    - [Plugin/投稿](http://sakura.qp.land.to/?Plugin%2F%C5%EA%B9%C6)

プラグイン機能があります．

詳細は SakuraEditorWiki, PatchUnicode を参照してください．

- [プラグイン機能 - SakuraEditorWiki](http://sakura.qp.land.to/?Junk%2F48)
- [Sakura Editor / PatchUnicode / #85 WSHプラグイン](https://sourceforge.net/p/sakura-editor/patchunicode/85/)

### 関連付け {#jcb237bc}

タイプ別設定一覧からの関連付けが可能です．

詳細は SakuraEditorWiki, PatchUnicode を参照してください．

- [本体へ関連付けツールを組み込み - SakuraEditorWiki](http://sakura.qp.land.to/?Junk/49)
- [Sakura Editor / PatchUnicode / #148 タイプ別設定一覧からの関連付け](https://sourceforge.net/p/sakura-editor/patchunicode/148/)

## Linux で サクラエディタを使う {#pf5d83cb}

[Wine](https://www.winehq.org/) を使えば Linux でサクラエディタが使用できます．

- [Linux でサクラエディタを使いたい - SakuraEditorWiki](http://sakura.qp.land.to/?FAQ/47)

```
$ wine sakura.exe
```

## 関連リンク {#c879d1c4}

- [sakurawmemo @ ウィキ](http://www37.atwiki.jp/sakurawmemo/)
- [「はじめてのサクラエディタ」筆者サポートページ](http://supportdoc.net/support-sakura/)
- [Sakura EditorでLaTeXを使う](http://physics-station.blogspot.jp/2013/04/sakura-editorlatex.html)
- [そっとプロジェクト＠Ｗｉｋｉ - ソフトウェア/サクラエディタ](http://www19.atwiki.jp/sotto_project/pages/151.html)
- [Memo/SakuraEditor - DEX Lab](https://dexlab.net/pukiwiki/index.php?Memo/SakuraEditor)
- [サクラエディタで、対応する括弧を探す。](http://3tackle.blog55.fc2.com/blog-entry-52.html)

### License {#y5064e03}

サクラエディタ本体は，zlib ライセンスです．
詳細は [License · sakura-editor/sakura Wiki · GitHub](https://github.com/sakura-editor/sakura/wiki/License) を参照してください．

### リリース情報 {#qe1b7074}

- [https://github.com/sakura-editor/sakura/tags](https://github.com/sakura-editor/sakura/tags)

### ChangeLog {#l31b371d}

- [コミットログ](https://github.com/sakura-editor/sakura/commits/master)

### 派生版 {#mc0d532c}

- [紅桜エディタ](https://github.com/suzzsegv/BeniZakura)
