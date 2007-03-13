---
title: "XeTeX"
url: "/XeTeX/"
date: 2006-06-06T23:57:52Z
pukiwiki: "XeTeX"
---

# XeTeX

## XeTeX {#a81f78a6}

### XeTeX とは {#v9b12e60}

[The XeTeX typesetting system](http://scripts.sil.org/xetex)
は UTF-8 ベースの TeX。 <!-- 入力ファイルは UTF-8 ベースだが，内部動作は UTF-16 ベース。 --> <!-- これを知らないと，BMP 以外の文字をアクティブにしたりする時にハマルことになる。 -->
「ズィーTeX」と読む。
Mac OS X 上で開発され，システムが認識する OpenType フォントをそのまま使える。
Linux 版もある。W32 版は Linux 版を移植したものである。 Linux と W32 では，
使えるフォントは OS が認識しているものと言うより，FontConfig が認識して
いるものと言ったほうが正確である。
なお，バージョン 0.995 以降では（ただし 0.995 でも xetex は svn revision
344 以降，xdvipdfmx は svn revision 74 以降），

```
[FontFileName:FaceIndex]:features
```

なるフォントの指定法も可能になり，FontConfig とは無関係に， Kpathsearch
が見つけることができるところにある “Uninstalled fonts” を native fonts
として使用することもできるようになっている。例えば

```
\font\x="[msmincho.ttc:1]:mapping=tex-text,color=0000FF" at 12pt
```

は

```
\font\x="MS PMincho:mapping=tex-text,color=0000FF" at 12pt
```

と同じように振舞う。FaceIndex は不要の場合は省略できる。
前者の方が FontConfig に関係しないので，
早く処理できるかもしれない。簡単な比較をしてみよう:

```
%
% test-a
%
\font\x="[msmincho.ttc:1]:mapping=tex-text,color=0000FF" at 12pt
\x This is a test of -, -- and ---.
\bye
```

```
%
% test-b
%
\font\x="MS PMincho:mapping=tex-text,color=0000FF" at 12pt
\x This is a test of -, -- and ---.
\bye
```

の場合，test-a の方が test-b よりも約 2.3 倍ほど処理が速い。
なお，この数値はファイルの置き方その他の環境に依存するはずで，
どのシステムにも当てはまるわけではない。また測定時間はプロセスが
要した時間であって，xetex 自身のロード時間その他は含まれていない。
これを含めると，比はより 1 に近付くと思われる。しかし test-a の方が
かなり速いということはどの場合にも当てはまるだろう。
（Unix の場合は time xetex foo のようにすると時間がわかるが，
W32TeX の場合は独自の “--proctimes” なるオプションを使うと，
可能なら要したプロセス時間を表示するようになっている。）

デフォルトではタイプセット時に，パイプによって出力がドライバに送られ，
最終出力は PDF となる。
オプション “--no-pdf” によってこれを 2 段階に分けることもできる。
この場合は .xdv ファイル
（.dvi ファイルを拡張したもの）を出力する。.xdv ファイルをドライバによって
PDF に変換する。 xdv2pdf は Mac 専用のドライバであって，他では利用できない。
Linux と W32 では，汎用の xdvipdfmx というドライバを用いる。これは
dvipdfmx を XeTeX 用に拡張したものである。
xdv2pdf は Mac OS X を有効利用するドライバだが，仮想フォントを読むことが
できないので，通常の tfm, vf 形式の TeX, LaTeX 用フォントも利用する場合には
Mac OS X であっても xdvipdfmx を使うことになる。
また、上記の “Uninstalled fonts” を使う機能も，ドライバに xdvipdfmx を使う
場合だけ有効である。直接 PDF を出力する場合には

```
xelatex --output-driver='xdvipdfmx -q -E' foo
```

のようにすると，デフォルトのドライバを変更して xdvipdfmx
を使うようにできる。なお Mac OS X 用の XeTeX には最新の 0.995 以降の
ものにしか xdvipdfmx は含まれていない。
パッケージに同梱されている graphics.cfg と color.cfg は xdv2pdf 用の設定が
なされている。従って Linux と W32 では，
graphics パッケージや color パッケージなどを使用するとき，必ず \[dvipdfm\]
オプションを付加しておくのを忘れてはいけない。ただし，Jonathan Kew さんに
より，Mac と Linux-W32 とでインターフェイスを統一する仕事がなされており，
最新版の xdvipdfmx と XeTeX を W32 版でテストしてみると，
デフォルトのままで xetex.def を使えるようになっている。

しおり等の PDF 文字列に関しては，オリジナルの dvipdfmx では 適切な CMap
を指定することで Big Endian UTF-16 with BOM に変換するようになっていた。
xdvipdfmx でもこの機能はそのまま使えるが，UTF-8 で入力する XeTeX においては
単に UTF-8 を Big Endian UTF-16 with BOM に変換するだけでよいので，
より簡単な実装が可能である。
実際にこの機能が実装されていて，特別に何もしなくても日本語しおり等を作ることができる。

### Mac でのインストール {#x46670ed}

[ptetex](http://www.nn.iij4u.or.jp/~tutimura/tex/ptetex.html)
をインストールした Mac OS X 10.4.x でインストールしてみた。
本家から XeTeX_0995.dmg をダウンロードし，ダブルクリックして現れる XeTeX.pkg
をダブルクリックして先に進んでいくとエラーになる。
インチキだが

```
cd /usr/local/teTeX/bin
ln -s . powerpc-apple-darwin-current
```

とするとインストーラが動く。

```
cd /usr/local/teTeX/share
mv texmf.local texmf-local
cd texmf-local
ln -s ../texmf-var/fonts/map/dvips/updmap dvips
```

/usr/local/teTeX/share/texmf/tex/generic/config/language.dat
の “The following languages are disabled by default.” と
書いてあるところ以降にある magyar huhyphn.tex という行を “%! ” でコメントアウトし

```
fmtutil --byfmt xetex
fmtutil --byfmt xelatex
```

<!-- 最新の 0.995 (Web2C-7.5.5, Kpse-3.5.5) は TDS 1.1 なので， -->
<!-- もっとスムーズにインストールできるのではないかと思われる。 -->

### Windows でのインストール {#j287e7c2}

<!-- XeTeX for W32 のインストール方法 -->

cf. [qa:43295](https://okumuralab.org/~okumura/texfaq/qa/43295.html)

最新の web2c-7.5.5-w32.tar.gz を入手して，TeX のインストール
トップディレクトリで展開して下さい。この中に xetex をサポートする
fmtutil.cnf と texmf.cnf が入っています。

xetex-w32.tar.bz2 を TeX のインストールトップディレクトリで展開して下さい。

TopDir/share/texmf/fonts/conf に移動し，（つまりカレントディレクトリとし）
そこにある fonts.conf というファイルを編集します。
編集するのは “Find fonts in these directories” というセクションだけです。
そこにはデフォルトで， Windows のシステムフォントディレクトリだけが

```
    <dir>c:/windows/fonts</dir>
```

として入れてありますから，このままで良い場合は編集する必要はありません。
ディレクトリの名前が違う場合には変更する必要があります。 <!-- Windows 2000 だと c:/winnt/fonts となりますが， --> <!-- Windows 2000 も最近はメジャーではなく Windows XP の方が一般的でしょうか。 -->
Windows のシステムフォントディレクトリの他に，購入したフォントのディレクトリがあれば，
以下の例のように追加することができます：

```
    <dir>c:/windows/fonts</dir>
    <dir>c:/usr/local/share/texmf/fonts/opentype/dnscreen/hiragino</dir>
    <dir>c:/usr/local/share/texmf/fonts/opentype/adobe/kozuka</dir>
    <dir>c:/usr/local/share/texmf/fonts/opentype/adobe/others</dir>
```

コンソール上で

```
    fc-cache -v -f
```

なるコマンドを実行して下さい。これはフォントディレクトリにある各ファイルを
スキャンして，キャッシュファイルを作成するコマンドです。
キャッシュファイルは，TopDir/share/texmf/fonts/cache に作成されます。
大きいフォントファイルが大量にあると，このコマンドは終了までに数分かかる
ことがありますから，気長に他の仕事をしていて下さい。

以上でインストールが終了します。使用可能フォント名は，通常のものが使えます。
名前を見たい場合は，

```
   fc-list >namelist.txt
```

とすると， namelist.txt に記録されます。
ただし UTF-8 で記録されますから，もし Shift_JIS で見たかったら

```
   nkf -s namelist.txt >namelist.sj
```

とすれば良いでしょう。あるいは最初に

```
   fc-list | nkf -s >namelist.sj
```

とすると，直接 Shift_JIS のファイルになります。
ただし，nkf でコード変換した結果のフォント名をそのまま使うと，
エラーになることがあります。その理由は例えば 1 バイト仮名が
nkf によって 2 バイト仮名に変換されたりするからです。漢字フォント名を
使うときは，UTF-8 が読めるエディタで fc-list の生の出力を見る必要があります。
通常はアルファベットの名前のほうが入力も簡単でしょう。

### 実行例 {#n6a9a656}

簡単なサンプル test.tex を UTF-8 で書く：

```
\documentclass{article}
\begin{document}
Hello, \TeX !
\font\foo="ヒラギノ丸ゴ Pro W4:-palt"
\foo 日本語
\end{document}
```

これで xelatex test とすると，test.pdf ができる。
日本語 OpenType フォントを使用する場合，デフォルトで詰め組になってしまうので，
ベタ組をするためには，Proportional Alternative (palt) フィーチャーを
無効にしている。 <!-- 0.996 以降では、詰め組はデフォルトではなくなりました。 -->
ただしこれでは

```
，「
```

のような約物の連続で間延びして，逆に使い物にならない。 <!-- これはフォント自身がそのようにデザインされているのだから、XeTeXの責任ではない。 --> <!-- \font\foo="ヒラギノ丸ゴ Pro W4:-palt" --> <!-- \font\bar="ヒラギノ丸ゴ Pro W4:+palt" --> <!-- \catcode`「\active --> <!-- \catcode`」\active --> <!-- \ifcase0 --> <!-- %%% 詰め組 (これをやると、フォントが切替えられてしまうので、前後で改行できなくなる) --> <!-- \def「{{\bar\char`「}} --> <!-- \def」{{\bar\char`」}} --> <!-- \or --> <!-- %%% 半角文字に置換 --> <!-- \def「{｢} --> <!-- \def」{｣} --> <!-- \or --> <!-- %%% CID番号で指定 (これをやると、禁則対象文字かどうか判らないので前後で改行できなくなる) --> <!-- \def「{\XeTeXglyph12070} --> <!-- \def」{\XeTeXglyph12071} --> <!-- \fi --> <!-- いや，pTeXで必ず詰めているわけではなく，「，」の次に「「」が来るようなときに限って詰めているわけです。こういう2文字の連鎖を見ることのできない現状のXeTeXでは日本語をまともに組むことはできず，それならばむしろpTeXで難しいプロポーショナル組にXeTeXを使うほうがデモとしてはおもしろいわけです。 --> <!-- 了解致しました。真面目にマクロを組めば、連鎖を見ることができない訳ではないでしょうが。 --> <!-- それよりも、どなたか、多言語処理について、書いて頂いた方が良いのではないでしょうか？ --> <!-- 現状のXeTeXでも、アラビア文字や、ヘブル文字は勝手に右から左にタイプセットするし、 --> <!-- タイ語は(辞書が組み込まれていて)単語の切れ目を見付けて改行してくれるし、 --> <!-- インド系の、テキスト文字列の順序(発音順と同じ)と文字を書いていく順序の異なる文字は勝手に並び替えを行い、適切にリガチャーも処理してくれるし、なかなかおもしろいですよ。 --> <!-- ありがとうございます。まさにそうですね。 --> <!-- 通常の日本語、英文混合文書でも、指定フォントの1バイト欧文部分を --> <!-- 自然に利用できるので、ソースを若干気をつけて作る (行末が日本語の場合、 --> <!-- 継続文字 % をつける等) と、考えようによってはバランスのよいものに --> <!-- なると思います。 (fontspec package の例) : --> <!-- \setromanfont[Mapping=tex-text,BoldFont={Kozuka Mincho Pro B}]{Kozuka Mincho Pro R} -->

日本語のルールに則って行分割をするには次のようにする。

```
\XeTeXlinebreaklocale "ja_JP"
\XeTeXlinebreakskip=0em plus 0.1em minus 0.01em
\XeTeXlinebreakpenalty=0
```

元に戻すには次のようにする。

```
\XeTeXlinebreaklocale ""
```

ただし XeTeX は日本語の組版ルールをよく知っているわけではないので，
現状ではまともではない。
しかし筋が良いソフトだけに日本人が開発に協力すれば [pTeX 相当の処理](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/japanese/ptex.html)が加えられるのではないかと期待する。

<!-- どなたか、修正加筆して頂くと嬉しいです。 -->

そもそも TeX で改行が可能な位置は、(数式と kern を無視して)単純化すると、
glue, penalty, discretionary break です。ハイフンは日本語に関係しないので、無視します。
文章中のどのような箇所に glue と penalty が現れるかというと、

1. ユーザーが直に書き込んだ場所、
1. マクロの展開の結果書き込まれる場所、
1. それ以外、

がありますが、ここでは、3. が問題となります。

- 古典的な 8 bit 版の TeX では、空白文字の箇所に TFM から読みとられた量の glue が自動的に挿入されます。
- pTeX では、更に、和字と和字の間に TFM (JFM) から読みとられた量の glue、または、 \kanjiskip が、和字とそれ以外の間に \xkanjiskip が自動的に挿入されます。また、禁則文字の前後には penalty が自動的に挿入されます。
    更に詳しいことや、カスタマイズの方法については、[pTeX でのJIS X4051 の実装](http://oku.edu.mie-u.ac.jp/~okumura/texfaq/japanese/ptex.html)を御覧下さい。

- XeTeX では、空白文字の箇所に加え、 \XeTeXlinebreaklocale が有効なロケールになっていれば、ユニコードの改行規則に基づいた改行可能箇所を内蔵の ICU ライブラリが捜し出し、 \XeTeXlinebreakpenalty と \XeTeXlinebreakskip が自動的に挿入されます。
    例えば、

    ```
    \XeTeXlinebreaklocale "th"
    \XeTeXlinebreakpenalty 0
    ```

    とすれば、タイ語で書かれたテキストを ICU ライブラリに内蔵された辞書を用いて、単語に分割し、その区切り目に、 0 のペナルティを挿入します。一方、上にも紹介されている

    ```
    \XeTeXlinebreaklocale "ja"
    \XeTeXlinebreakskip=0em plus 0.1em minus 0.01em
    ```

    は、和字と和字の間や和字とそれ以外の間に、少量の伸び縮みを許した幅 0 の空白 (glue) を挿入することを指示します。この際、行頭禁則文字の直前と、行末禁則文字の直後は、ユニコードの改行規則では改行可能であると認識されないので、このような場所には何も挿入されません。

このようにして、各言語毎の規則で設定された改行可能箇所から、その段落の最も適切な改行箇所を見つけ出すのは、 TeX の役割です。 <!-- 0.997 以降では、更に、 \XeTeXinterchartokenstate が正の値になっていれば、 \XeTeXcharclass の概念が有効になり、 \XeTeXcharclass が A の文字と \XeTeXcharclass が B の文字との間にはトークンレジスタ --> <!-- \XeTeXinterchartoks A B --> <!-- が自動的に挿入されます。このトークンレジスタに改行を可能にする glue や penalty に展開される内容が入っていれば、ここも改行可能箇所になります。 --> <!-- \XeTeXcharclass は任意の非負整数ですが、 255 だけは特別な意味を持ち、行末。行頭、 hbox を表します。 FMT ファイルで、\XeTeXcharclass の値は --> <!-- - - 分かち書きされる通常の文字は 0 --> <!-- - - 漢字と仮名は 1 --> <!-- - - 開き括弧は 2 --> <!-- - - 閉じ括弧と句読点は 3 --> <!-- - - 結合文字は 256 --> <!-- に初期化されます。これらの文字の分類は、 --> <!-- [[Line Breaking Properties:http://www.unicode.org/reports/tr14/]] --> <!-- に基づいて行われますが、 0 以外の値が設定されるのは、 --> <!-- [[East Asian Width:http://www.unicode.org/reports/tr11/]] --> <!-- の定義で、 Full Width, Half Width, Wide のいずれかの属性を与えられた --> <!-- 文字に限られます。更に、 --> <!--  \gdef\xtxHanGlue{\hskip0pt plus 0.1em\relax} % between ideographs --> <!--  \gdef\xtxHanSpace{\hskip0.2em plus 0.2em minus 0.1em\relax} % before/after runs of CJK --> <!--   --> <!--  \global\XeTeXinterchartoks 0 1 = {\xtxHanSpace} --> <!--  \global\XeTeXinterchartoks 1 0 = {\xtxHanSpace} --> <!--  \global\XeTeXinterchartoks 1 1 = {\xtxHanGlue} --> <!--  \global\XeTeXinterchartoks 1 2 = {\xtxHanGlue} --> <!--  \global\XeTeXinterchartoks 1 3 = {\nobreak\xtxHanGlue} --> <!--  \global\XeTeXinterchartoks 2 1 = {\nobreak\xtxHanGlue} --> <!--  \global\XeTeXinterchartoks 3 1 = {\xtxHanGlue} --> <!-- 等と、トークンレジスタも設定されていますが、これらは自由に再設定できます。 --> <!--  --> <!-- 一例として、行末禁則文字の \XeTeXcharclass を 4 に設定するには、 --> <!--  \@for\Kinsoku:={`＃,`￥,`＄,`＆}\do{\XeTeXcharclass\Kinsoku=4} --> <!-- とします。 \XeTeXinterchartoks 4 1 等を適切に定めれば、これらの文字の直後での改行を抑制できます。 --> <!-- \XeTeXinterchartoks にはフォントの切替え命令を設定することもできます。これにより、 dvi ドライバではなく、 TeX 側に於ける、バーチャルフォントが実現できます。 -->

### 参考サイト {#m6b448cf}

- [The XeTeX typesetting system](http://scripts.sil.org/xetex) （本家）
- [XeTeX Info Page](http://www.tug.org/mailman/listinfo/xetex) (TUG)

### コメント {#d0504266}

- 使用環境は Windows2000(SP4) です。ヒラギノは持っていないので「小塚明朝 Pro Acro R:-palt」で試したのですが「! Font \foo="フォント名は文字化けPro Acro R:-palt" not loadable: installed font not found.」と言われて失敗しました。代わりに「Kozuka Mincho Pro Acro:-pait」で成功しました。「MS P明朝」「みかちゃん_o」では成功。fc-list での namelist.txt で得られるフォント名一覧でフォント名には二番目の要素を使えば良いのかもしれません。 -- tony 2006-07-17 (月) 15:32:30
- 最新のものでは、 \[フォントファイル名\] という指定も可能になっています: 例: \font\f="\[KozMinPro-Regular.otf\]:mapping=tex-text,color=FF0000" -- kakuto 2006-08-18 (金) 10:53:19
- revision 424以降では、BMP以外の、つまり、U+10000以降の文字にも個別に\catcodeや\mathcodeを設定できるようになりました。 -- sm 2007-01-26 (金) 22:35:05
