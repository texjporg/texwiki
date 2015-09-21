---
title: "extractbb の自動実行許可の設定"
url: "/extractbb の自動実行許可の設定/"
date: 2015-09-21T19:45:26Z
pukiwiki: "extractbb の自動実行許可の設定"
---

# extractbb の自動実行許可の設定

## extractbb の自動実行許可の設定 {#w1f985fb}

<!-- 最新の TeX 環境では既定で許可されるようになったので， -->
<!-- 「インストール」で説明する必要がなくなったが， -->
<!-- 古い環境についてこの手順を説明する機会は多いと思うので -->
<!-- そのための専用のページを作っておく． -->
<!-- 基本的に，メジャーな全ての環境についての情報をまとめる． -->
<!-- 初級者向きであり，「Kpathsearch の仕組み」や -->
<!-- 「外部コマンドとの連携」の詳細に立ち入ることは避ける． -->

LaTeX + dvipdfmx で graphicx パッケージを用いて（EPS 形式以外の）画像を読み込むには，画像のサイズ（バウンディングボックス）を取得するために extractbb という外部コマンドを実行する必要があります．
画像ファイルごとに都度 extractbb を起動するのは面倒なので，現在では「LaTeX の実行中に内部で自動で extractbb を呼び出す」方式が推奨されています．

最近の TeX 環境（W32TeX，TeX Live 2015 以降，MacTeX-2015 以降）では extractbb の自動実行は既定で許可されていますが，古い環境では許可を与える設定をユーザが事前に行う必要があります．[^1]ここではその手順を解説します．

※2010 年以降の TeX 環境を対象にします． <!-- 2010 年に restricted shell escape がサポートされた． -->

※自動実行許可の設定に関する詳細については，「[](<>)」を参照してください．

### 代替的手段 {#x6e95136}

extractbb の自動実行は必須ではありません．
手動での実行を面倒に思わない，あるいは別の手段で自動化が実現できているのであれば，それでかまいません．

ただし，以下に挙げる方法は<strong>間違いである</strong>ことに注意してください．

- mediabb パッケージを用いる： mediabb は（現在の）dvipdfmx には対応していません．
- ビットマップ画像についてサイズ（ピクセル数）を調べてその値を \includegraphics 命令の bb オプションに書く： bb オプションの数値の単位はピクセルではありません．

また，「LaTeX 起動時のコマンドラインに -shell-escape をつける」という方法は有効ですが，これだと LaTeX 文書中で指定された任意のプログラムの実行が許可されてしまうため，この方法を常用するのはセキュリティの観点から推奨されません．

### 事前確認 {#z437ecb9}

dvipdfmx での画像を挿入がうまくいかなくて自動実行許可を試そうとしている場合は，まずは「失敗の原因がその点にあるのか」を調べるため，以下の手順を実行しましょう．

1. 適当な（EPS 形式以外の）画像ファイルを用意します．
    （PNG や JPEG が最善です．）
    ここでは仮に，その名前を someimg.png とします．

1. 以下のような LaTeX 文書ファイル test.tex を作ります．

    ```
    \documentclass[dvipdfmx]{article}
    \usepackage{graphicx}
    \begin{document}
    \includegraphics[width=5cm]{someimg.png}
    \end{document}
    ```

1. test.tex と someimg.png を同じディレクトリに配置します．
    そのディレクトリに someimg.xbb が<strong>無い</strong>ことを確認します．

1. コマンドシェル（コマンドプロンプトやターミナル）を起動して，test.tex のあるディレクトリに移動します．
1. 以下のコマンドを実行します．

    ```
    latex test
    ```

    この時に，

    ```
    LaTeX Error: File `someimg.xbb' not found. ...
    ```

    または

    ```
    LaTeX Error: Cannot run pipe command. ...
    ```

    のエラーが<strong>発生する</strong>ことを確認します．

1. 次に以下のコマンドを実行します．

    ```
    latex -shell-escape test
    ```

    この時にエラーが出ずに処理が終了することを確認します．

1. 生成された DVI ファイルを PDF 文書に変換します．

    ```
    dvipdfmx test
    ```

1. 変換が正常に終了していて，かつ生成された test.pdf に正常に画像が埋め込まれていることを確認してください．

もしこの手順がどこかで失敗するようなら，extractbb の自動実行以外の箇所で問題が起きていますので，まずはその問題を解決してください．

### 手順 {#i4e98152}

#### W32TeX {#a714e0fc}

W32TeX では extractbb の自動実行が既定で許可されているので，何もする必要がありません．

#### 本家 TeX Live（2014 以前） {#db4659b1}

<!-- FIXME: MacTeX は？ -->

本家の（tlmgr が使える）TeX Live では，以下の手順を行います．

1. 以下のコマンドを実行して，Kpathsea 変数 shell_escape_commands の値（実行許可コマンドのリスト）の値を調べます．

    ```
    kpsewhich -var-value=shell_escape_commands
    ```

    例えば次のような結果が出力されます．

    ```
    bibtex,kpsewhich,makeindex,mpost,repstopdf
    ```

1. このリストが既に extractbb を含んでいる場合は，既に設定は済んでいるので，ここで終了します．
1. 以下のコマンドを実行して，shell_escape_commands の値を設定します．

    ```
    tlmgr conf texmf shell_escape_commands extractbb,bibtex,...
    ```

    ここで「exractbb,」以降の部分は先ほど調べた shell_escape_commands の値を書き写します．<br>
    ※Unix 系のシェルの場合は，以下のコマンドでもかまいません．

    ```
    tlmgr conf texmf shell_escape_commands `kpsewhich -var-value shell_escape_commands`
    ```

<!-- TODO: Linux の OS 付属の（tlmgr がない）TeX Live の話 -->

[^1]: 既定で許可されていなかった理由は，TeX Live 2013 までの extractbb が画像ファイルと同じフォルダに .xbb というファイルを出力する仕様であったため，作業ディレクトリでないフォルダを余分なファイルで汚すことは認めないという方針に反したからです．画像ファイルは，作業ディレクトリでないフォルダに存在することもあることに注意して下さい．これは TeX Live 2014 で .xbb ファイルを出力しない仕様に変更されました．
