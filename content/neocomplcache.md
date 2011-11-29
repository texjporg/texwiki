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

## 補完 {#j0e0bbeb}

### スニペット補完 {#he9c0c31}

- [(そもそも${0}とか${1}といった記号はNeocomplcacheのスニペットファイルから呼び出された時にうまくいくように設計されているのだから、今回のような使い方は明らかに想定されてないだろうし、不具合が生じたり、ネコのバージョンアップと共に動かなくなる可能性は極めて高い)](http://twitter.com/#!/amone_misya/status/138035737097543680) ← [ふむ。せっかくなので、ブログか何かにまとめてもらえないでしょうか。そうすれば、私も問題点があったら共有できますので。私もTeX使うので興味があります。](http://twitter.com/#!/ShougoMatsu/status/138455943770931200) ← [はい](http://twitter.com/#!/amone_misya/status/138542564058996736) ← [とりあえず、取り込んでみました。私のスニペットも追加しています。トリガーを変えているのでVim-LaTeXと互換性があるかは微妙ですが、試してもらえると嬉しいです。](http://twitter.com/#!/ShougoMatsu/status/138570039858184194) ← [使ってみました。こっちの方が、わざわざEVMとかEEQみたいな略語を覚えずに済む分良い気がします。](http://twitter.com/#!/amone_misya/status/138599326388723712)
- [VIM-LaTeXをNeocomplcacheのSnippets補完で再現(1)](http://d.hatena.ne.jp/amone_misya_ap/20111121/1321865189)
- [VIM-LaTeXをNeocomplcacheのSnippets補完で再現(2)](http://d.hatena.ne.jp/amone_misya_ap/20111121/1321865648)
- [$HOME/.vim/after/snippets/tex.snipに置くやつ](http://d.hatena.ne.jp/amone_misya_ap/20111121/1321864865)
- [$HOME/.vim/after/ftplugin/tex.vimに置くやつ](http://d.hatena.ne.jp/amone_misya_ap/20111121/1321864513)

## 関連リンク {#b3c6dfff}

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
