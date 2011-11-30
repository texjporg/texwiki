---
title: "neocomplcache"
url: "/neocomplcache/"
date: 2011-11-29T14:47:11Z
pukiwiki: "neocomplcache"
---

# neocomplcache

[Vim](/Vim/) > neocomplcache

## [neocomplcache](https://github.com/Shougo/neocomplcache) {#v2e435c4}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## neocomplcache とは {#qfad3d37}

neocomplcache は Vim のプラグインです．

GVim 7.3.034 よりも前のバージョンには DLL 読み込みに関する脆弱性が存在します．<br>
最新版へアップデートしてください．<br>
詳細は [GVim における DLL 読み込みに関する脆弱性](http://jvn.jp/jp/JVN27868039/) を参照してください．<br>

GVim 7.3.344 で UNIX 系 の GVim で起動時にハングしたり起動が遅くなったりしていた問題が修正されました．<br>

- [neocomplcache](https://github.com/Shougo/neocomplcache)
- [Vim-users.jp - neocomplcache](http://vim-users.jp/tag/neocomplcache/)
- [neocomplcacheとは - はてなキーワード](http://d.hatena.ne.jp/keyword/neocomplcache)

## 不具合 {#k8b031e2}

### neocomplcache で単語の一部を補完すると refresh = always のときに register-. の値がおかしくなる → [Fixed for refresh always problem(experimental)](https://github.com/Shougo/neocomplcache/commit/66985144f271b1d12b43ea70c942575502635511) {#d223a02b}

- [#97: 補完時のregister-.の挙動の改善 - Issues - vim-jp/issues - GitHub](https://github.com/vim-jp/issues/issues/97) ← [なるほどわからん。 (Issues #97)](http://twitter.com/#!/thinca/status/141787269056045056)
- [neocomplcache。cwとかで単語の途中から置換したときにregisterに編集した単語が丸ごと（？）入っちゃってて、.（ドット）で繰り返しをしようとするとまずいことに。ソース追いきれなかったので導入諦めた。スニペットを表示してくれる機能だけ欲しいんだけど](http://twitter.com/#!/rt_sporty/status/141387168475119617) ← [ちなみに、スニペットの表示だけならUnite snippetでOKです。](http://twitter.com/#!/ShougoMatsu/status/141399510181089282), [あ、原因が分かりました。うーん、ちょっと考えさせてください。これは根本的な問題でもあるので対処が難しいですね……。](http://twitter.com/#!/ShougoMatsu/status/141398277961682944), [こんにちは。作者です。その現象については、私も困っているところです。ソースコード自体に問題はないので、追ってもおそらく分かりません。原因はVimだと思います。](http://twitter.com/#!/ShougoMatsu/status/141394661502763008) ← [再現性を確認しました。やはり単純に二つ同じ単語があって、一方の後半などをcwhelloとかするとレジスターが訳分かんないことになりますね。macvim 7.3 353です。Unite snippet助かります！一旦自動補完OFFで使わせていただきます！](http://twitter.com/#!/rt_sporty/status/141534001860059137) ← [先ほどのgithubのIssuesに再現する条件を書き込んでもらえないでしょうか。できれば、再現する最小限の設定もいっしょに。neocomplcache意外の余計なプラグインがない状態のほうが望ましいです。](http://twitter.com/#!/ShougoMatsu/status/141753971353198592) ← [はい、今書いていました。環境も再現できるように細かく書きますので少々お待ちください。](http://twitter.com/#!/rt_sporty/status/141754302518669312) ← [了解しました。こちらの環境で再現できれば、ほぼ直る問題だと思われます。特に.vimrcはできるだけ削ってくれると、他の人も試しやすいのでお願いします。](http://twitter.com/#!/ShougoMatsu/status/141754501022486528) ← [書きました。vimrcはほぼ素の状態なので、再現するかどうかはファイルの内容に依存してるようですね。](http://twitter.com/#!/rt_sporty/status/141764079344812033) ← [原因は分かったので、とりあえず修正しました。試してください。](http://twitter.com/#!/ShougoMatsu/status/141785193945116673) ← [直ってます！ありがとうございます！自動補完ONで使用させていただきます。助かりましたー](http://twitter.com/#!/rt_sporty/status/141804061790965762) ← [とりあえず、本体の問題みたいなので、それが直るまではこのまま行きます。](http://twitter.com/#!/ShougoMatsu/status/141804696544346112) ← [了解しましたー。引き続きissuesに注目しておきます](http://twitter.com/#!/rt_sporty/status/141804918431420416) ← [はい。パッチもできているようですし、私も今後についてはwatchします。](http://twitter.com/#!/ShougoMatsu/status/141810859533025280)
- [なんかciwhogeとかしても.で同じことしてくれないんだよなぁ。Vimのバグなのかneocoplcacheのバグなのか。neocomplcacheはrepeat.vimに対応するべきなのか。](http://twitter.com/#!/tyru/status/141054674311725056) ← [私も気になっています。何かneocomplcacheで補完するとレジスタの動作おかしいですよね？](http://twitter.com/#!/ShougoMatsu/status/141393233979772928) ← [おかしいですね。.が使えなくなるのはかなりつらいですね…](http://twitter.com/#!/tyru/status/141530377561976832)
- [register-. の件、昔のネオコンでは起きてなかったので、履歴遡ってエンバグしたコミットを突き止めました。 db9069ba98d2d73c15be5a397acbd70a6df6f3c5](http://twitter.com/#!/thinca/status/141759509537357824) ← [ちょっとそのコミットを見てみましたが、要するにrefresh = alwaysのときにregister-.の値がおかしくなるということですよね。](http://twitter.com/#!/ShougoMatsu/status/141774894634512384)

## ダウンロード/インストール {#fb8cc945}

[neocomplcache](https://github.com/Shougo/neocomplcache) から最新版の neocomplcache をダウンロードします．

Vim を起動し

```
 :echo $HOME
```

で，$HOME の場所を確認します．

パッケージを展開し

- $HOME/.vim/ (UNIX, Linux)
- $HOME/vimfiles/ (Windows)

に

- autoload/
- doc/
- ftplugin/
- indent/
- plugin/
- syntax/
- .gitignore
- README

を配置します．

- $HOME/.vimrc (UNIX, Linux)
- $HOME/\_vimrc (Windows)

に設定を記述します．

***

```
""
"" neocomplcache
""
let g:neocomplcache_enable_at_startup = 1
imap <C-k>     <Plug>(neocomplcache_snippets_expand)
smap <C-k>     <Plug>(neocomplcache_snippets_expand)
```

***

## 補完 {#j0e0bbeb}

### スニペット補完 {#he9c0c31}

```
\b
```

を入力すると補完候補が表示されます．<br>
補完候補のリストは &lt;CTRL-U>, &lt;CTRL-N>, &lt;CTRL-P> で移動できます．<br>
\begin{itemize} で &#x3c;CTRL-K> を入力するとスニペット補完を行います．<br>
\item の入力が完了して &#x3c;CTRL-K> を入力すると ${0} にジャンプします．<br>

```
\begin{itemize}
  \item 
\end{itemize}
${0}
```

- [(そもそも${0}とか${1}といった記号はNeocomplcacheのスニペットファイルから呼び出された時にうまくいくように設計されているのだから、今回のような使い方は明らかに想定されてないだろうし、不具合が生じたり、ネコのバージョンアップと共に動かなくなる可能性は極めて高い)](http://twitter.com/#!/amone_misya/status/138035737097543680) ← [ふむ。せっかくなので、ブログか何かにまとめてもらえないでしょうか。そうすれば、私も問題点があったら共有できますので。私もTeX使うので興味があります。](http://twitter.com/#!/ShougoMatsu/status/138455943770931200) ← [はい](http://twitter.com/#!/amone_misya/status/138542564058996736) ← [とりあえず、取り込んでみました。私のスニペットも追加しています。トリガーを変えているのでVim-LaTeXと互換性があるかは微妙ですが、試してもらえると嬉しいです。](http://twitter.com/#!/ShougoMatsu/status/138570039858184194) ← [使ってみました。こっちの方が、わざわざEVMとかEEQみたいな略語を覚えずに済む分良い気がします。](http://twitter.com/#!/amone_misya/status/138599326388723712)
- [VIM-LaTeXをNeocomplcacheのSnippets補完で再現(1)](http://d.hatena.ne.jp/amone_misya_ap/20111121/1321865189)
- [VIM-LaTeXをNeocomplcacheのSnippets補完で再現(2)](http://d.hatena.ne.jp/amone_misya_ap/20111121/1321865648)
- [$HOME/.vim/after/snippets/tex.snipに置くやつ](http://d.hatena.ne.jp/amone_misya_ap/20111121/1321864865)
- [$HOME/.vim/after/ftplugin/tex.vimに置くやつ](http://d.hatena.ne.jp/amone_misya_ap/20111121/1321864513)

## 関連リンク {#b3c6dfff}

- [Vim+NeoComplCache使ってたけどNotepad++に戻った](http://d.hatena.ne.jp/carrotsword/20100607/1275931911) → [Notepad++](/Notepad++/) でも TeX の編集ができます．
- [うーんneocomplcacheのCursorHoldの処理削除したらvimのソース開いた時重くなるの直った。](http://twitter.com/#!/tyru/status/141783532728094722) ← [初回時はインクルードファイルをキャッシュするので遅いですね……。](http://twitter.com/#!/ShougoMatsu/status/141792467828736000) ← [なるほど。大きいファイルを開くと特に重く感じるのはそのせいですね・・・](http://twitter.com/#!/tyru/status/141792839213391872)
- [どのようにLaTeXの数式を書けば、見やすくてデバッグのしやすい保守性の高いコードになるのか。みんなどうやってるの？30分ほど試行錯誤したけれど、結局こんなのしか思いつかなかった。誰か詳しい人。。良質なwebページを教えて欲しい。](http://twitter.com/#!/amone_misya/status/139302876789997568) ← [LyX](/LyX/) で OK
- [LaTeXの{}の構文を解析するvimscriptを正規表現で書いたら、maxmempatternという見たことのないエラーで落ちた。ヘルプを見たところ、\\(...\\)\*を使いすぎるとそうなるらしい。さてどうするか](http://twitter.com/#!/amone_misya/status/139274043168800768)
- [VimでLaTeXファイル中の数式を扱ってるとき、\left(と\right)の対応が直感的にわかりにくい。なので改善した。LaTeXのsyntaxファイルはデフォルトで1000行越えてるから、そこには触れずに対処療法的に設定した。](http://twitter.com/#!/amone_misya/status/139236753168015360)
- [syntaxに基づいてinoremapできたら最高なんだけどなぁ。あとはVisualmodeで\`bfして選択範囲を¥begin{textbf}...¥end{textbf}で囲むとか](http://twitter.com/#!/amone_misya/status/138549298643214336)
- [どうにも、Neocomplcache+Snippets+ftpluginでLaTeX環境を整えようとすると、Vim-LaTeXよりYaTeXに近いモノのほうが作りやすい気がする。たとえばコロンはギリシャ文字のprefixに割り当てて、セミコロンは数式のprefixに割り当てるとか](http://twitter.com/#!/amone_misya/status/138548488022659072)
- [きのうの朝につぶやいた、VIM-LaTeXをNeocomplcacheとSnippetsで置きかえるツイートをまとめろとの電波を受信したから、HatenaDiaryにまとめた](http://twitter.com/#!/amone_misya/status/138544930976038912)
- [(そうは言っても、既存のプラグインを組み合わせた汎用的な環境の上でVimLaTexを再現できたのは、それなりに意義深いことなんじゃないだろうかそろそろ寝よう)](http://twitter.com/#!/amone_misya/status/138036339789672449)
- [VimLaTeXのSSSとかEEQのような、環境を定めるコマンドはネコのスニペットファイルに通常通り記述する。VimLaTeXの数式中の補完については、ftpluginにinoremapする。&lt;++>のスニペット機能をネコのスニペットで代用する。${1}とか書けばうまくいく。](http://twitter.com/#!/amone_misya/status/138032381289431041)
- [これで一応はVimLaTeXのスニペット機能の再現が可能となるわけだが、、もっとマシな方法があるはず。確実にある。](http://twitter.com/#!/amone_misya/status/138030548743491584)
- [ネコのスニペット有効にして、tex.vimでinoremap @ &lt;NOP>してから 　「inoremap @a \sqrt{}${0}&lt;LEFT>&lt;LEFT>&lt;LEFT>&lt;LEFT>&lt;LEFT>」 　とか書けば、VimLaTeXのように振る舞わせることが可能だが。。あまりに汚い](http://twitter.com/#!/amone_misya/status/138029517544501248)
- [NeocomplcacheのSbippets補完とftpluginの改造で、ほぼ完全にVimLaTeXを再現する事ができた。プリンタも買ったし、これで僕もITレポーターの仲間入りか。今まではすべて手書きだったからなぁ。](http://twitter.com/#!/amone_misya/status/138028051673006081)
- [neocomplcacheのsnippets補完を設定しつつ~/.vim/after/ftplugin/tex.vimを作ればvim-latex(LaTeX-Suite)から脱却できそう。vim-latexは大きいしデフォルトで&lt;C-j>奪うし、出来れば使いたくない。](http://twitter.com/#!/amone_misya/status/131271004373782528)
- [vim-latexsuite を使わずに vim で latex 環境を整える（というか自作する）計画なのだけど、ラベル名補完をどうすればいいか見当がつかない。neocomplcache をちゃんと理解しなきゃだめかな。](http://twitter.com/#!/38valleys/status/109658082509983745) ← [ぜひとも補完関数を作っちゃってください！](http://twitter.com/#!/ShougoMatsu/status/109659095585390593) ← [うお作者さん直々に！ありがとうございます。ネオコンは触り始めて日が浅いのですが、少しずつ慣れていきたいです。とりあえずスニペット補完が超便利ですね。](http://twitter.com/#!/38valleys/status/109664788455489536) ← [ちなみに、個人的にはLatexはbuffer_completeだけで十分だったりします。まぁ、文脈を解析できるならそのほうがいいので期待しています。vim-latexは大きすぎるので。](http://twitter.com/#!/ShougoMatsu/status/109672375221616641)
- [NeocomplcacheはTeXとの相性悪いのかなー．カーソルの動きが死ぬほどストレス．](http://twitter.com/#!/921603/statuses/83110376480317440)
