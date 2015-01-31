---
title: "TeX Live Manager"
url: "/TeX Live Manager/"
date: 2014-05-26T05:34:07Z
pukiwiki: "TeX Live Manager"
---

# TeX Live Manager

## TeX Live Manager {#l32e41e6}

<strong>目次</strong>

## TeX Live Manager とは {#e10391ba}

TeX Live Manager は [TeX Live](</TeX Live/>) のパッケージ管理ツールです．
（OS X では [TeX Live Utility](</TeX Live Utility/>) という名称です．）
TeX Live をインストールすると TeX Live Manager もインストールされます．
Windows PowerShell またはコマンド プロンプトから

```
tlmgr-gui
```

を実行すると TeX Live Manager が起動します．
コマンドラインでパッケージ管理する場合は [tlmgr](/tlmgr/) を使用します．

***

<span style="color:#DAF0FE;background-color:#DAE0FE;"><ins>　　<span style="color:Black;">[tlmgr](/tlmgr/)</span>　 <span style="color:Black;">オプション</span>　 <span style="color:Black;">作業</span>　 　<span style="color:Black;">ヘルプ</span>　　　　　　　　　　　　　</ins></span><br>

　　　リポジトリ<br>
　　　 読み込み完了：なし　　\[既定値を読み込む\]　　既定値：&#x68;ttp://mirror.ctan.org/systems/texlive/tlnet<br>

<br>

　　　表示設定<br>
　　　　状態　　　　　　　区分　　　　　　　　　一致　　　　　　　　　　　　　選択　　　　　　　　　　　 \[　 すべて選択 　\]<br>
　　　　 🔘 すべて　　　☑ パッケージ　　　　　　　　　　　　　　　　　　　　🔘 すべて<br>
　　　　 ◯ 導入済　　　☑ 選集　　　　　　　 ☑ 説明　　　　　　　　　　　◯ 選択分　　　　　　　　\[　すべて非選択　\]<br>
　　　　 ◯ 未導入　　　☑ スキーム　　　　　☑ 分類　　　　　　　　　　　◯ 非選択分<br>
　　　　 ◯ 更新　　　　　　　　　　　　　　　　　☑ ファイル名　　　　　　　　　　　　　　　　　　　　　 \[フィルタをリセット\]<br>

<br>

***

<table>
<tbody>
<tr><td></td><td>パッケージ名　　　　　　　　　　　　　　　</td><td>ローカル rev.(ver.)　　　</td><td>リモート rev.(ver.)　　　</td><td>簡単な説明</td></tr>
<tr><td>　☐　</td><td>scheme-basic</td><td>25923</td><td></td><td>basic scheme (plain and latex)</td></tr>
<tr><td>　☐　</td><td>scheme-context</td><td>32062</td><td></td><td>ConTeXt scheme</td></tr>
<tr><td>　☐　</td><td>scheme-full</td><td>33790</td><td></td><td>full scheme (everything)</td></tr>
<tr><td>　☐　</td><td>scheme-gust</td><td>30372</td><td></td><td>GUST TeX Live scheme</td></tr>
<tr><td>　☐　</td><td>scheme-medium</td><td>30457</td><td></td><td>medium scheme (small + more packages and languages)</td></tr>
<tr><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr>
</tbody>
</table>

***

<br>

　　　　　　　　\[導入済のものをすべて更新\]<br>
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　\[更新\]　　\[導入\]　　\[取り除く\]　　\[バックアップ\]<br>
　　　　 ☐ 前回取り除いたパッケージを再導入<br>

***

　　(C:/texlive/2015/tlpkg/texlive.tlpdb)<br>
　これには少し時間がかかるかもしれません．我慢してください...<br>
　... 読み込み終わりました.<br>

***

### 一般オプション {#p434b2db}

\[オプション\]-\[一般...\]

***

一般オプション<br>
　既定のパッケージレポジトリ　　　　　　&#x68;ttp://mirror.ctan.org/systems/texlive/tlnet　　\[変更\]<br>
　導入時にフォーマットを作成する　　　　　　　　　　　　　　　　はい　　　　　　　　　　　　　 \[入切\]<br>
　macro および font ソースを導入する　　　　　　　　　　　　　 はい　　　　　　　　　　　　　 \[入切\]<br>
　macro および font 説明書を導入する　　　　　　　　　　　　　はい　　　　　　　　　　　　　 \[入切\]<br>
　既定のバックアップディレクトリ　　　　　　　　　　　　　　　tlpkg/backups　　　　　　　　　　\[変更\]<br>
　自動バックアップ設定　　　　　　　　　　　　　　　　　　　　　　　　1　　　　　　　　　　　　　　\[変更\]<br>
　ショートカットをデスクトップに作成　　　　　　　　　　　　　　　 はい　　　　　　　　　　　　　 \[入切\]<br>
　全ユーザ向けに導入する　　　　　　　　　　　　　　　　　　　　 はい　　　　　　　　　　　　　 \[入切\]<br>
　ファイル関連付けを変更する　　　　　　　　　　　　　　　　　新規のみ　　　　　　　　　　　　\[変更\]<br>

<br>

<br>

　　　　　　　　　　　　　　　　　　　　　\[変更を適用\]　　\[取消\]<br>

***

### 用紙オプション {#uccd4c87}

\[オプション\]-\[用紙...\]

***

用紙オプション<br>
　全体の既定用紙　　　　　　　　　　\[A4\]　　\[レター\]<br>
　既定用紙：設定先 = dvipdfmx　　 a4　　　\[変更\]<br>
　既定用紙：設定先 = dvips　　　　　a4　　　\[変更\]<br>
　既定用紙：設定先 = pdftex　　　　 a4　　　\[変更\]<br>
　既定用紙：設定先 = psutils　　　　 a4　　　\[変更\]<br>

<br>

<br>

　　　　　　　　　　\[変更を適用\]　　\[取消\]<br>

***
