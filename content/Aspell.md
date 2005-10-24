---
title: "Aspell"
url: "/Aspell/"
date: 2005-10-24T22:09:01Z
pukiwiki: "Aspell"
---

# Aspell

## Aspell {#asp4a889}

### Aspell について {#aspb1466}

AspellはIspellに機能を追加した新しいスペルチェッカです。TeXの命令を無視する機能もあります。

ドイツ語・フランス語・ギリシア語・ロシア語などに対応しています。

特に理由がなければぜひAspellをお試しください。WinShell 3も標準で対応しています。

ここではAspellのWindows版について解説します。

### Aspell のインストール {#aspin466}

Aspellは本体と辞書ファイルが別々に配布されています。ここでは英語辞書のみをインストールすることにしましょう。もちろん英語以外の辞書をインストールすれば英語以外の言語の文書もスペルチェックできます。

まず、次の場所からAspell本体（Aspell-（任意の数字）-Setup)と英語辞書（Aspell-en-（任意の数字））をダウンロードします。

[Aspell for Win32](http://aspell.net/win32/)

まず本体もインストーラの指示通りにインストールします。基本的にはNextとInstallとFinishを押していくだけでインストールできるはずです。英語辞書もインストーラになっていますが、本体のインストール時にインストール先を変えた場合は、英語辞書のインストール先も適切に変更しておく必要があります。（変えてない場合はデフォルトどおりにインストールします。）

環境変数PATHを必要に応じて設定します。PATHの値はC:\Program Files\Aspell\binです。（ただし、コマンドプロンプトを用いる場合です。WinShellなどエディタ等から呼び出す場合はPATHの設定をする必要はありません。）

Windows以外のインストール方法は、[欧文スペルチェッカー GNU Aspell](http://members.jcom.home.ne.jp/advweb/build/others/aspell.html)をご覧ください。

### Aspell の使い方（コマンドプロンプト編） {#aspus466}

PATHを通しているならば、

aspell --lang=en -c -t 調べたいtexファイル

でスペルチェックできます。詳しい使い方は

[欧文スペルチェッカー GNU Aspell](http://members.jcom.home.ne.jp/advweb/build/others/aspell.html)

をご覧ください。

### Aspell の使い方（WinShell編） {#awsus466}

WinShellなら設定なしで（PATHの設定も不要）、ツールバーのスペルチェッカボタンを押すだけでスペルチェックしてくれます。専用のダイアログもあり、使いやすいです。

ただし、日本語交じりの文だと、スペルミスした単語へのカーソル位置移動と置換は正しく行ってくれるものの、その単語を誤認識し、当然suggestionも間違えます。（スペルチェックそのものには特に問題ないので、普通に正しい単語を入力して置換すればよいです。）

また、メニューを英語にしておかないと、ダイアログにメニューが表示されないことにも注意してください。
