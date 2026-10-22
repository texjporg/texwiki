---
title: "pTeX/pTeXの追加プリミティブと変数"
url: "/pTeX/pTeXの追加プリミティブと変数/"
date: 2022-09-19T13:21:41Z
pukiwiki: "pTeX/pTeXの追加プリミティブと変数"
---

# pTeX/pTeXの追加プリミティブと変数

## pTeXの追加プリミティブと変数 {#d3766307}

### <a id="autospacing">\autospacing</a> {#q26c2d45}

漢字（２バイトコード）間へのグルーの自動挿入を許可します。

この指定は、パラグラフの終わりか、
または\hboxの最後の時点で読み取られて処理されます。
したがって、同一パラグラフ内、
あるいは\hbox内で何度指定を変えても、
最後にされた指定で処理されます。

<strong>関連項目</strong>：

[\noautospacing](#noautospacing),
[\autoxspacing](#autoxspacing),
[\noautoxspacing](#noautoxspacing),
[\inhibitglue](#inhibitglue),
[\showmode](#showmode),
[漢字間スペース](</pTeX/文字間スペースについて/#kanjiskip>)

### <a id="autoxspacing">\autoxspacing</a> {#x892bef0}

漢字（２バイトコード）と英字（１バイトコード）間へのグルーの
自動挿入を許可します。

この指定は、パラグラフの終わりか、
または\hboxの最後の時点で読み取られて処理されます。
したがって、同一パラグラフ内、
あるいは\hbox内で何度指定を変えても、
最後にされた指定で処理されます。

<strong>関連項目</strong>：

[\autospacing](#autospacing),
[\noautospacing](#noautospacing),
[\noautoxspacing](#noautoxspacing),
[\xspcode](#xspcode),
[\inhibitxspcode](#inhibitxspcode)
[\showmode](#showmode),
[和欧文間スペース](</pTeX/文字間スペースについて/#xkanjiskip>)

### <a id="euc">\euc《16ビット数値》</a> {#n4e5cfa1}

EUCコードから内部コードへの変換を行います。

<strong>例</strong><br>

```
\char\euc"BA01
```

は、\`比'です。

<strong>関連項目</strong>：

[\jis](#jis),
[\kuten](#kuten),
[\sjis](#sjis),
漢字コードについて

### <a id="inhibitglue">\inhibitglue</a> {#k33bb8e8}

和文フォントのメトリック情報から、自動的に挿入されるグルーの挿入を禁止します。
このプリミティブを挿入した箇所にのみ有効です。

<strong>関連項目</strong>：

[和文フォントによるスペース](</pTeX/文字間スペースについて/#jfmglue>),

### <a id="inhibitxspcode">\inhibitxspcode《16ビット数値》=《0|1|2|3》</a> {#vfd2d4b5}

指定した漢字（２バイトコード）とそれに連続する英字（１バイトコード）との間に
自動的に挿入されるスペースを抑制します。
この指定は０～３のいずれかを設定することで、つぎの動作を選択します。

```
0 指定した漢字と前後の英字の間のスペース挿入を禁止する。
1 指定した漢字と直前の英字との間にだけスペース挿入を禁止する。
2 指定した漢字と直後の英字との間にだけスペース挿入を禁止する。
3 指定した漢字と前後の英字との間に対してスペース挿入を許可する。
```

<strong>例</strong>

```
   \inhibitxspcode`？=0
   \inhibitxspcode`（=2
   \inhibitxspcode`）=1
```

この例では、\`？'と前後の英字に対するスペース挿入を禁止し、
\`（'に対しては直後の英字との間へのスペース挿入を禁止し、
\`）'に対しては直前の英字との間へのスペース挿入を禁止しています。

<strong>関連項目</strong>：

[\xspcode](#xspcode),
[\xkanjiskip](#xkanjiskip),
[記号類との間](</pTeX/文字間スペースについて/#yakumono>)

### <a id="jcharwidowpenalty">\jcharwidowpenalty=《数値》</a> {#c45adf1a}

パラグラフの最後の漢字が孤立して改行されるのを防ぐためのペナルティです。
パラグラフの最後に１文字以上の１区、２区に含まれる文字がある場合は、
その直前にある２バイトコードに対してこのペナルティが使われます。

<strong>例</strong>

```
   \jcharwidowpenalty=500
```

### <a id="jfam">\jfam</a> {#x2c2693c}

\`\jfont'と同様に、\`\fam'とほぼ同じ動作をします。
\`\showthe'などと組み合わせることで、
カレントの和文フォントファミリーを返します。
ただし、このプリミティブでは欧文フォントのファミリーも
和文ファミリーとして定義しますので、注意が必要です。

<strong>例</strong>

```
   \showthe\jfam
```

このように記述すると、カレントの和文フォントファミリーを返します。

<strong>関連項目</strong>：

[\jfont](#jfont),
[\tfont](#tfont)

### <a id="jfont">\jfont</a> {#fca085b7}

\`\font'と同じです。
ただし、\`\showmode'などのプリミティブと組み合わせた場合は、
カレントの横組用の和文フォントを返します。
フォントの定義には、\font, \jfontのいずれを使っても欧文フォント、
横組用の和文フォントの定義が可能です。

<strong>例</strong>

```
   \jfont\mincho=min10 at 24pt
```

このように記述すると、\mincho に24ポイントの明朝体が割り当てられます。

```
   \showthe\jfont
```

とすると、カレントの横組用の和文フォントを返します。

<strong>関連項目</strong>：

[\jfam](#jfam),
[\tfont](#tfont)

### <a id="jis">\jis《16ビット数値》</a> {#ycdcc9c8}

JISコードから内部コードへの変換を行います。

<strong>例</strong>

```
\char\jis"312B
```

は、\`雨'です。

<strong>関連項目</strong>：

[\euc](#euc),
[\kuten](#kuten),
[\sjis](#sjis),
漢字コードについて

### <a id="kanjiskip">\kanjiskip=《グルー》</a> {#ua79ab46}

連続する漢字（２バイトコード）間に自動的に挿入するグルーの値を
格納するレジスタです。
この処理は、[\autospacing](#autospacing),
[\noautospacing](#noautospacing)によって行うか行わないかの指定をします。

このレジスタの値は、パラグラフの終わりか、
または\hboxの最後の時点で取り込んで処理します。
したがって、同一パラグラフ内、
あるいは\hbox内で何度か値を変化しても、
最後に設定した値で処理されます。

<strong>例</strong>

```
   \kanjiskip=10pt plus 1pt minus1pt
```

<strong>関連項目</strong>：

[\autospacing](#autospacing),
[\noautospacing](#noautospacing),
[\xkanjiskip](#xkanjiskip),
[\inhibitglue](#inhibitglue),
[漢字間スペース](</pTeX/文字間スペースについて/#kanjiskip>)

### <a id="kansuji">\kansuji 《数値》</a> {#c83168bd}

数値を漢数字で出力します。

<strong>例</strong>

```
\kansuji 2018年
```

は、\`二〇一八年'と出力されます。

出力される文字は\kansujicharで指定することができます。
デフォルトは「〇一二三四五六七八九」です。

<strong>関連項目</strong>：

[\kansujichar](#kansujichar)

### <a id="kansujichar">\kansujichar《0～9のいずれか》=《16ビット数値》</a> {#fc92f25c}

\kansujiで出力する文字を設定します。

<strong>例</strong>

```
\kansujichar1=\jis"306D\relax
\kansujichar2=`弐
\kansujichar3=\euc"BBB2\relax
\kansuji 4321
```

は、\`四参弐壱'と出力されます。

<strong>関連項目</strong>：

[\kansuji](#kansuji),
[\euc](#euc),
[\jis](#jis),
[\kuten](#kuten),
[\sjis](#sjis)

### <a id="kuten">\kuten《16ビット数値》</a> {#e4e24f85}

区点コードから内部コードへの変換を行います。

<strong>例</strong>

```
\char\kuten"234E
```

は、\`虫'(35区78点: 35(10進) = 23(16進), 78(10進) = 4E(16進))です。

<strong>関連項目</strong>：

[\euc](#euc),
[\jis](#jis),
[\sjis](#sjis),
漢字コードについて

### <a id="noautospacing">\noautospacing</a> {#if39cac3}

漢字（２バイトコード）間へのグルーの自動挿入を禁止します。

この指定は、パラグラフの終わりか、
または\hboxの最後の時点で読み取られて処理されます。
したがって、同一パラグラフ内、
あるいは\hbox内で何度指定を変えても、
最後にされた指定で処理されます。

<strong>関連項目</strong>：

[\autospacing](#autospacing),
[\autoxspacing](#autoxspacing),
[\noautoxspacing](#noautoxspacing),
[\inhibitglue](#inhibitglue)
[\showmode](#showmode),
[漢字間スペース](</pTeX/文字間スペースについて/#kanjiskip>)

### <a id="noautoxspacing">\noautoxspacing</a> {#xbe658bd}

漢字（２バイトコード）と英字（１バイトコード）間へのグルーの自動挿入を
禁止します。

この指定は、パラグラフの終わりか、
または\hboxの最後の時点で読み取られて処理されます。
したがって、同一パラグラフ内、
あるいは\hbox内で何度指定を変えても、
最後にされた指定で処理されます。

<strong>関連項目</strong>：

[\autospacing](#autospacing),
[\noautospacing](#noautospacing),
[\autoxspacing](#autoxspacing),
[\xspcode](#xspcode),
[\inhibitxspcode](#inhibitxspcode)
[\showmode](#showmode),
[和欧文間スペース](</pTeX/文字間スペースについて/#xkanjiskip>)

### <a id="postbreakpenalty">\postbreakpenaltyt《16ビット数値》=《数値》</a> {#b21ef70b}

指定する文字の後方に挿入するペナルティ値を設定します。
この指定は、行末禁則の指定にあたります。

<strong>例</strong>

```
   \postbreakpenalty`。=10000
```

とすることにより、\`。'の後方に10000のペナルティ値を付け、行末禁則文字の
対象文字にします。

ただし、\prebreakpenaltyと\postbreakpenaltyを同一の文字に対して
同時に設定することはできません。
同一の文字に対して両方の指定を行った場合、
後からの設定が有効になります。

<strong>関連項目</strong>：

[\prebreakpenalty](#prebreakpenalty)

### <a id="prebreakpenalty">\prebreakpenaltyt《16ビット数値》=《数値》</a> {#xea496b4}

指定する文字の前方に挿入するペナルティ値を設定します。
この指定は、行頭禁則の指定にあたります。

<strong>例</strong>

```
   \prebreakpenalty`あ=1000
```

とすることにより、\`あ'の前方に1000のペナルティ値を付け、行頭禁則文字の
対象文字にします。

ただし、\`\prebreakpenalty'と\`\postbreakpenalty'を同一の文字に対して
同時に設定することはできません。
同一の文字に対して両方の指定を行った場合、
後からの設定が有効になります。

<strong>関連項目</strong>：

[\postbreakpenalty](#postbreakpenalty)

### <a id="showmode">\showmode</a> {#lafb2d07}

漢字-漢字間と漢字-和欧文間に自動的に空白を挿入されるかどうかについて、
\`\autospacing', \`\noautospacing'と\`\autoxspacing', \`\noautoxspacing'
の現在の状態を表示します。

<strong>例</strong>

漢字-漢字間および漢字-和欧文間に自動的に空白を挿入する状態のときに、

```
   \showmode
```

とすると、つぎのように表示されます。

```
   > auto spacing mode; 
   > auto xspacing mode.
```

<strong>関連項目</strong>：

[\autospacing](#autospacing),
[\noautospacing](#noautospacing),
[\autoxspacing](#autoxspacing),
[\noautoxspacing](#noautoxspacing)

### <a id="sjis">\sjis《16ビット数値》</a> {#o262d6ad}

シフトJISコードから内部コードへの変換を行います。

<strong>例</strong>

```
\char\sjis"8A4F
```

は、\`外'です。

<strong>関連項目</strong>：

[\euc](#euc),
[\jis](#jis),
[\kuten](#kuten),

### <a id="tate">\tate</a> {#p65e9144}

組方向を縦方向にするプリミティブです。
カレントの和文フォントは、縦組用のフォントになります。

なお、組方向の変更は、ボックス作成コマンドの最初で宣言しなくてはいけません。
また、ボックスをコピーしたり、展開する場合は、同じ組方向のボックス内で
なくてはなりません。

<strong>関連項目</strong>：

[\yoko](#yoko)

### <a id="tbaselineshift">\tbaselineshift</a> {#gb035b3b}

縦組ボックス内での、和欧文フォント間のベースラインを調整するための
グルーを格納するレジスタです。
このレジスタの値は、挿入箇所以降で有効となります。

<strong>関連項目</strong>：

[\ybaselineshift](#ybaselineshift)

### <a id="tfont">\tfont</a> {#wb761406}

\`\font'と同じです。
ただし、\`\showmode'などのプリミティブと組み合わせた場合は、
カレントの縦組用の和文フォントを返します。
フォントの定義には、\font, \tfontのいずれを使っても欧文フォント、
縦組用の和文フォントの定義が可能です。

<strong>例</strong>

```
   \tfont\tate-mincho=tmin10 at 24pt
```

このように記述すると、\tate-mincho に24ポイントの明朝体が割り当てられます。

```
   \showthe\tfont
```

とすると、カレントの縦組用の和文フォントを返します。

<strong>関連項目</strong>：

[\jfam](#jfam),
[\jfont](#jfont)

### <a id="xkanjiskip">\xkanjiskip=《グルー》</a> {#y3e1fc9e}

連続する漢字（２バイトコード）と英字（１バイトコード）間に自動的に
挿入するグルーの値を格納するレジスタです。
この処理は、[\autoxspacing](#autoxspacing),
[\noautoxspacing](#noautoxspacing)によって行うか行わないかの
指定をします。

このレジスタの値は、パラグラフの終わりか、
または\hboxの最後の時点で取り込んで処理します。
したがって、同一パラグラフ内、
あるいは\hbox内で何度か値を変化しても、
最後に設定した値で処理されます。

<strong>例</strong>

```
   \xkanjiskip=10pt plus 1pt minus1pt
```

<strong>関連項目</strong>：

[\autoxspacing](#autoxspacing),
[\noautoxspacing](#noautoxspacing),
[\kanjiskip](#kanjiskip),
[\xspcode](#xspcode),
[和欧文間スペース](</pTeX/文字間スペースについて/#xkanjiskip>)

### <a id="xspcode">\xspcode《８ビット数値》=《0|1|2|3》</a> {#wde74aea}

連続する漢字（２バイトコード）と英字（１バイトコード）の間に
自動的に挿入されるスペースについて、
指定する英字と漢字の間で挿入を許可するかしないかを指定します。
この指定は０～３のいずれかを設定することで、つぎの動作を選択します。

```
0 指定した英字と前後の漢字の間のスペース挿入を禁止する。
1 指定した英字と直前の漢字との間にだけスペース挿入を許可する。
2 指定した英字と直後の漢字との間にだけスペースの挿入を許可する。
3 指定した英字と前後の漢字との間に対して、スペースの挿入を許可する。
```

<strong>例</strong>

```
   \xspcode`A=0
   \xspcode`B=3
   \xspcode`;=2
```

この例では、\`A'に対するスペース挿入を禁止し、
\`B'に対して前後のスペース挿入を許可します。
また、\`;'に対しては直後へのスペースの挿入を許可します。

<strong>関連項目</strong>：

[\inhibitxspcode](#inhibitxspcode),
[\xkanjiskip](#xkanjiskip),
[記号類との間](</pTeX/文字間スペースについて/#yakumono>)

### <a id="ybaselineshift">\ybaselineshift</a> {#be50ee08}

横組ボックス内での、
和欧文フォント間のベースラインを調整するためのグルーを格納するレジスタです。
このレジスタの値は、挿入箇所以降で有効となります。

<strong>関連項目</strong>：

[\tbaselineshift](#tbaselineshift)

### <a id="yoko">\yoko</a> {#dcb9cca9}

組方向を横方向にするプリミティブです。
カレントの和文フォントは、横組用のフォントになります。

なお、組方向の変更は、ボックス作成コマンドの最初で宣言しなくてはいけません。
また、ボックスをコピーしたり、展開する場合は、同じ組方向のボックス内で
なくてはなりません。

<strong>関連項目</strong>：

[\tate](#tate)

### <a id="zh">zh</a> {#j965aaf2}

exと同じようにカレントフォントが持つ高さ+深さを示す単位記号です。
ただし、カレント和文フォントを参照します。
縦組ボックスの内部ではカレントの縦組フォント、
横組ボックスの内部ではカレントの横組フォントの高さ+深さを参照します。

縦組フォントと横組フォントでは、
\`高さ'と\`深さ'を示す位置が異なることに注意してください。

<a href="/attach/pTeX/pTeX%E3%81%AE%E8%BF%BD%E5%8A%A0%E3%83%97%E3%83%AA%E3%83%9F%E3%83%86%E3%82%A3%E3%83%96%E3%81%A8%E5%A4%89%E6%95%B0/kanji-baseline.png"><img src="/attach/pTeX/pTeX%E3%81%AE%E8%BF%BD%E5%8A%A0%E3%83%97%E3%83%AA%E3%83%9F%E3%83%86%E3%82%A3%E3%83%96%E3%81%A8%E5%A4%89%E6%95%B0/kanji-baseline.png" alt=""></a>

<strong>関連項目</strong>：

[zw](#zw)

### <a id="zw">zw</a> {#jbba75eb}

emと同じようにカレントフォントが持つ文字幅を示す単位記号です。
ただし、カレント和文フォントを参照します。
縦組ボックスの内部ではカレントの縦組フォント、
横組ボックスの内部ではカレントの横組フォントの幅を参照します。

縦組フォントと横組フォントでは、
\`幅'を示す位置が異なることに注意してください。

<a href="/attach/pTeX/pTeX%E3%81%AE%E8%BF%BD%E5%8A%A0%E3%83%97%E3%83%AA%E3%83%9F%E3%83%86%E3%82%A3%E3%83%96%E3%81%A8%E5%A4%89%E6%95%B0/kanji-baseline.png"><img src="/attach/pTeX/pTeX%E3%81%AE%E8%BF%BD%E5%8A%A0%E3%83%97%E3%83%AA%E3%83%9F%E3%83%86%E3%82%A3%E3%83%96%E3%81%A8%E5%A4%89%E6%95%B0/kanji-baseline.png" alt=""></a>

<strong>関連項目</strong>：

[zh](#zh)

<strong>参考書籍</strong>：

アスキー出版局『日本語TeXテクニカルブックI』アスキー出版技術部, 1990年(絶版)
