---
title: "Windows PowerShell"
url: "/Windows PowerShell/"
date: 2012-06-22T21:23:04Z
pukiwiki: "Windows PowerShell"
---

# Windows PowerShell

## [Windows PowerShell](http://www.microsoft.com/powershell) {#q8f27306}

### Windows PowerShell とは {#p39685d9}

Windows PowerShell はコマンドラインシェルまたはオブジェクト指向プログラミングが可能なスクリプト言語です．

### ダウンロード {#o9ec2561}

Windows 7 の場合は標準搭載されています．<br>
\[スタート\]-\[すべてのプログラム\]-\[アクセサリ\]-\[Windows PowerShell\]-\[Windows PowerShell\] で Windows PowerShell を起動できます．<br>

Windows Vista, XP で Windows PowerShell がインストールされていない場合は以下のページからダウンロードできます．

- [Windows PowerShell でのスクリプティング](http://www.microsoft.com/powershell)

### Tab 補完 {#b02c3a08}

Windows PowerShell では Tab でコマンドレットやファイル名などが補完できます．<br>
ただし Tab でファイル名を補完すると

```
.\hoge.tex
```

のように補完され

```
platex .\hoge.tex
```

とするとコンパイルできません．

この場合は

```
platex ".\hoge.tex".substring(2)
```

または

```
ls -n .\hoge.tex | platex
```

または

```
".\hoge.tex" -replace ".\\" | platex
```

または

```
[System.IO.Path]::GetFileName(".\hoge.tex") | platex
```

のようにすれば OK です．

コマンド プロンプトでも Tab でファイル名を補完できるので

```
cmd
platex hoge.tex
```

としたほうが簡単かもしれません．

### パッケージ管理 {#l45cb315}

#### chocolatey {#ofbc7592}

- [chocolatey](http://chocolatey.org/)
    - [packages](http://chocolatey.org/packages)
        - [texlive](http://chocolatey.org/packages/texlive)
    - [wiki](https://github.com/chocolatey/chocolatey/wiki)

### 関連リンク {#teb8e64f}

- [基礎知識 (Windows PowerShell)](http://ufcpp.net/study/powershell/basic.html)
- [Windows PowerShellを便利に使うための10のミニテクニック](http://handasse.blogspot.com/2009/08/powershell10.html)
- [.tex->.pdfにするのにコマンド2回たたくのが面倒だからまとめる](http://d.hatena.ne.jp/aldente39/20120609/1339213251)
    - [tex2pdf](https://gist.github.com/2899241)
- [PowerShellの補完機能について質問いたします。](http://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q1189580021)
- [PowerTab](http://powertab.codeplex.com/)
- [PowerTab](https://bitbucket.org/rod/dotfiles/src/tip/WindowsPowerShell/Modules/PowerTab/)
