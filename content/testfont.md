---
title: "testfont"
url: "/testfont/"
date: 2004-12-04T00:05:33Z
pukiwiki: "testfont"
---

# testfont

## あるフォントの一覧を作成して，表示を確認する {#me3d4919}

たとえば『美文書作成入門』（第 2 版 pp. 232--233, 第 3 版付録）のような，pifont の一覧を作成したくなったら，任意のディレクトリで，

```
tex testfont
```

とコマンドを打ち，その後，ヘルプを参考にしながら

```
pzdr
\table
\end
```

（など）と打つ．

> ちなみに，tex 関係のコマンドは，.sty ファイルのみならず，.tex ファイルに関しても，\`いわゆる' $TEXMF 以下を見つけ出してきて，コンパイルしてくれる．出力結果はカレントディレクトリに置かれる．

- \[動機\] pdf ではフォントが埋め込まれていないと<span style="color:#F00;"><em>?</em></span>，代替フォントが充てられるので，その表示を確認したいことがある．
    - dvi や ps では『美文書...』と同じフォントで見えるが（それすら環境依存か<span style="color:#F00;"><em>?</em></span>），pdf だと異なることがある（フォントが埋め込まれていないと<span style="color:#F00;"><em>?</em></span>，代替フォント（pzdr (Zapf Dingbats) に対して AdobePiStd）が充てられるため）．
    - pdf に，Zapf Dingbats フォントを埋め込むには，<span style="color:#F00;"><em>???</em></span> ファイルの <span style="color:#F00;"><em>???</em></span> あたりに <span style="color:#F00;"><em>???</em></span> と書き込んで，普通に dvipdfm コマンドを掛ければよい．<strong>御存知の方，誰か書き込んでください！</strong>
- 記号の番号が分かれば，たとえば (cmr10 で<span style="color:#F00;"><em>?</em></span>) \[ を出力したければ，

    ```
    \symbol{'133}
    ```

    と入力すれば良いことがわかる．

### Bad Know-How {#zebdcd9a}

上の例では pzdr というフォント名が何気なく出ているが，実際はどう調べるのか？ <!-- fd ファイルにおけるフォント定義を調べればいい，というだけのことでは？ --> <!-- 読むべき fd ファイルのファイル名はエンコーディング名と --> <!-- ファミリー名から直ちにわかる（ようにファイル名をつけることに --> <!-- なっている）ので，あとは \DeclareFontShape の引数の意味が --> <!-- わかればよいわけですが…それについての解説が載っている書籍は --> <!-- 複数ありますね． --> <!-- # 下記の記述は「fd ファイルをまともに読むのは難しいので“発見的”な --> <!-- # 方法を挙げる」といった類のものかもしれないため，このコメントは --> <!-- # 表には出さないことにしますが… -->

<!-- / まともに読むのは難しいのですか? -->
<!-- / 私が下に書いた方法は，いかにも Bad Know-How なので，上のコメントは， -->
<!-- / 表に出すことに十分値すると思うのですが． -->
<!-- / どんな書物か参考文献としてページ番号とともに列挙していただけると -->
<!-- / なお嬉しいと思います． -->
<!-- / TeX のフォント関係については知識が乏しく，pzdr などと言ったときに -->
<!-- / tfm を指しているのか mf なのか，type1 なのかといったあたりが -->
<!-- / 分からないので，よろしくご教授ください． -->

```

```

- 『美文書...』などの書物でファミリ名を調べて，どのまま打ち込んだだけでは NG となることが多い<br>
    (例)

    ```
    $ tex testfont
    This is TeX, Version 3.141592 (Web2C 7.5.2)
    encTeX v. Feb. 2003, the reencoding enabled. initialized from format, the reencoding enabled.
    (c:/usr/local/share/texmf/tex/plain/base/testfont.tex

    Name of the font to test = pzd
    kpathsea: Running mktextfm pzd
    Cannot find pzd.mf.
    kpathsea: Appending font creation commands to missfont.log.
    ! Font \testfont=pzd not loadable: Metric (TFM) file not found.
    (以下略）
    ```

- おおよそのフォントでは \[ファミリ名+シェイプ+サイズ (8 とか 10 とか)\] で何とかなるが，Bad Know-How としては，cmr10 は普通よく使われているので，ないはずがない．よって，

    ```
    find | less
    /cmr10
    ```

    などとして，cmr10 のまわりのフォント名を見れば（ある程度の規則性さえ見つければ），そこそこ的中する．

- たとえば YaTeX の色付けでは，16 進の識別子としての " を解釈しないので，本文中に " が 1 つだけあるとそれよりうしろの文字列がすべてピンク色になってしまって不便．<span style="color:#033;">そもそも " を \*TeX-mode 中で打つには，C-q " としなければならないが．</span>よって，8 進の表記が出てくる testfont は便利！
