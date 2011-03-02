---
title: "秀丸エディタ"
url: "/秀丸エディタ/"
date: 2010-06-09T03:55:23Z
bookCollapseSection: true
pukiwiki: "秀丸エディタ"
---

# 秀丸エディタ

## [秀丸エディタ](http://hide.maruo.co.jp/software/hidemaru.html) {#z8c2c3a5}

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

### 秀丸エディタ とは {#w73ea51b}

秀丸エディタ は，Windows 7, Vista, 2003, XP, 2000, NT4.0, Me, 98, 95 上で動作する国産のテキストエディタです。 (シェアウェア)

- [秀まるおのホームページ(サイトー企画)](http://hide.maruo.co.jp/)
    - [秀丸エディタ](http://hide.maruo.co.jp/software/hidemaru.html)
        - [秀丸エディタ改版履歴](http://hide.maruo.co.jp/software/hidemaruhist.html)
        - [秀丸エディタβバージョン改版履歴](http://hide.maruo.co.jp/software/hidemaruhist_pre.html)
- [秀丸エディタ マクロ言語ヘルプ目次（Ver8.02対応版）](http://homepage3.nifty.com/kons/hidemaru/helpsite/hidemac/html/010_Intro.html)
    - [DDE関連マクロ](http://homepage3.nifty.com/kons/hidemaru/helpsite/hidemac/html/180_Dde.html)
    - [COMの呼び出し](http://homepage3.nifty.com/kons/hidemaru/helpsite/hidemac/html/230_Com.html)
- [窓の杜 - 秀丸エディタ](http://www.forest.impress.co.jp/lib/offc/document/txteditor/hidemaru.html)

### 秀丸エディタフリー制度 {#faebc82e}

秀丸エディタには，特定の条件に当てはまる場合に限り，期間限定で無料で利用できる制度があります。

対象は，学生([アカデミックフリー個人](http://hide.maruo.co.jp/support/hmfree1.html)/[アカデミックフリー団体](http://hide.maruo.co.jp/support/hmfree2.html))・[フリーソフトウェア作者](http://hide.maruo.co.jp/support/hmfree3.html)・[ウィンドウズ関係の書籍や雑誌の著者](http://hide.maruo.co.jp/support/hmfree4.html)
です。

- [秀丸エディタフリー制度](http://hide.maruo.co.jp/support/hidemarufree.html)

### 秀丸エディタ用マクロ {#m32041fb}

- [祝鳥 (のりてふ)](http://www.math.sci.hokudai.ac.jp/~abenori/soft/fortex.html)
    (阿部 紀行 (あべのり) さん)
    - [履歴](http://www.math.sci.hokudai.ac.jp/~abenori/soft/readme/fortexhist.txt)
    - [日記(祝鳥)](http://d.hatena.ne.jp/abenori/archive?word=%BD%CB%C4%BB)
    - [秀丸エディタ ガイド - 5. 祝鳥を使って TeX ファイルを編集](http://varian35558.ojaru.jp/hidemaru.html#5)
    - [macでwin版のTex、秀丸](http://www.maruo.co.jp/hidesoft/2/x29507_.html)

祝鳥 0.85r1 は Adobe Reader X で DDE を使用して PDF ファイルを表示する際に

```
Adobe系とのDDE接続に失敗．
```

のエラーメッセージが表示され，PDF ファイルが表示されません．

Adobe Reader X では ddeinitiate に指定するアプリケーション名が "acroview" から "acroviewR10" に変更になりました．

(祝鳥をインストールしたフォルダ)\fortex\sub\package\adobe\preview.mac の DDEOpen: と DDEClose: の ddeinitiate "acroview","control"; を ddeinitiate "acroviewR10","control"; に変更して DDEOpen: の ddeinitiate の前に sleep 600; を追加すると，Adobe系とのDDE接続に失敗．のエラーメッセージが表示されずに Adobe Reader X でプレビューできるようになります (エラーメッセージが表示される場合は sleep の値を大きくしてみて下さい)．

```
DDEOpen:
        run "\"" + $path + "\"";
        if(!result){
                message $path + "\nの実行に失敗．";
                return 1;
        }
        sleep 600;
        ddeinitiate "acroviewR10","Control";
        if(!result){
                message "Adobe系とのDDE接続に失敗．";
                return 2;
        }
...
```

```
DDEClose:
        $$file = $Parent + ".pdf";
        if(existfile($$file)){
                ddeinitiate "acroviewR10","control";
...
```

sleep を使いたくない場合は DDE で開くのはあきらめて Init: のところで

```
Init:
...
        if(#optype == 0){
                if(#close)call DDEClose;
                else call DDEOpen;
...
```

と記述されているところを

```
Init:
...
        if(#optype == 0){
                if(#close)call DDEClose;
                else call DirectOpen;
...
```

と変更して，開くときはシェルから直接起動して，閉じるときは DDE 通信をするという手もあります．

Adobe Reader X には保護モード (\[編集(E)\]-\[環境設定(N)...\]-\[一般\]-\[起動時に保護モードを有効にする(M)\] でオン・オフが可能) があります．

```

```

上記の方法で開く場合，保護モードがオフとオンの状態で，挙動が異なります (コンパイルしてファイルを表示する際にウィンドウがアクティブに表示される or されない)．

保護モードがオンの場合にファイルを開いたときにアクティブなウィンドウにするには以下のように閉じるときにいったん終了させるという方法があります．

```
DDEClose:
        $$file = $Parent + ".pdf";
        if(existfile($$file)){
                ddeinitiate "acroviewR10","control";
                if(result){
                        ddeexecute "[DocOpen(\"" + $$file + "\")]";
                        ddeexecute "[DocClose(\"" + $$file + "\")]";
                        ddeexecute "[AppExit()]";
...
```

秀丸エディタ Version 8.03 を起動した直後に，メニューの \[マクロ(M)\]-\[TeX補完マクロ(3)\] をクリックしたところ，以下のようなメッセージが表示されました．

***

エラー<br>

<br>

× 秀丸エディタのプロセスで保護違反が発生しました。秀丸エディタは<br>
異常終了します。

秀丸エディタの異常終了についての詳細情報は、秀丸エディタをイン<br>
ストールしたフォルダ (またはマイドキュメント) にあるdump.txtフ<br>
ァイルに出力されています。

Program Filesに出力されている場合は、エクスプローラで「互換性フ<br>
ァイル」をクリックすると表示されます。

***

エラー<br>

<br>

！ プログラムが終了する前に、最後に１回だけ保存を試みることができ<br>
ます。

既にメモリが破壊されている場合、保存処理そのものが失敗するか、<br>
壊れた内容を出力するかもしれません。

もし保存する場合は、必ず別名で保存してください。<br>
(旧タイプのダイアログを使うので拡張子まで入力する必要がありま<br>
す)

***

ファイルの保存<br>

<br>

ファイル名(N):　<ins>(必ず別名で保存してください).txt</ins>　　　\[　　　　OK　　　　\]<br>
フォルダ:　　　　　　　　　　　　　　　　　　　　　　　　　　　\[ｷｬﾝｾﾙ\] \[削除(E)\]<br>
　ファイル(F):　　　　　　フォルダ(D):

***

TeX ファイルを編集しているときは補完候補が表示されます．

- [RaTeX0e](http://uca-works.com/program/ratex.html)
    (福中 公輔 さん)

- [AutoHotKey スクリプト](http://ryo-t.com/diary/?p=94)
    (谷内 稜 さん)

- [LaTeX強調表示他定義ファイル](http://hide.maruo.co.jp/lib/hilight/fortex.html)
    (阿部 紀行 (あべのり) さん)

- [秀丸エディタで LaTeX (hidemacro-070502.tar.gz)](http://www.cymric.jp/old/tex/hidemaru.html)
    (Maxima 普及委員会)

- [秀丸で簡単コンパイル](http://outsider.imawamukashi.com/TeX/hidemacro.html)
    (Outsider's Website)

- [トリビュート](http://www.vector.co.jp/soft/win95/writing/se259789.html), [LaTeX2e 用強調表示定義ファイル](http://homepage2.nifty.com/masema/software/LaTeX_hilight.html)
    (ませま さん)

- [LaTeX Compile HIDEMARU Macro (LaTeXコンパイル用秀丸マクロ)](http://hide.maruo.co.jp/lib/macro/lcm11.html)
    (岩里 さん)

- [TeX用改行コード挿入マクロ](http://hide.maruo.co.jp/lib/macro/il-fc093.html) (haze さん)
- [TeX Module Control with HIDEMARU Macro](http://www.ceres.dti.ne.jp/~sugiura/hidemaru/macros/tex_mc/index.html)
    (杉浦 方紀 さん)

- [LaTeX コンパイル支援マクロ](http://www.seman.cs.uec.ac.jp/~inuzuka/hidemac.html)
    (犬塚 敦史 さん)

- [飛鳥 (ひちょう) HiTeX](http://www.yatex.org/HiTeX/)
    (安田 晴行 さん)
