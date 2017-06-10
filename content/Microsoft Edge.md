---
title: "Microsoft Edge"
url: "/Microsoft Edge/"
date: 2017-06-10T10:06:05Z
pukiwiki: "Microsoft Edge"
---

# Microsoft Edge

- [https://www.microsoft.com/ja-jp/windows/microsoft-edge](https://www.microsoft.com/ja-jp/windows/microsoft-edge)

Microsoft Edge は Windows 10 で動作する軽快で安全なブラウザーです。PDF ファイルも表示できます。

Microsoft Edge は Windows 版の [Adobe Acrobat Reader DC](</Adobe Acrobat Reader DC/>) と同様に PDF ファイルをロックしてしまうので，編集中の PDF ファイルのプレビューには向いていません．PDF ファイルのプレビューには [SumatraPDF](/SumatraPDF/), [TeXworks](/TeXworks/), [TeXstudio](/TeXstudio/) などのビューワを使用してください．

### コマンドラインから Microsoft Edge で PDF ファイル foo.pdf を表示する {#y243de23}

#### Windows PowerShell から実行する場合 {#e2b64a25}

```
Start-Process shell:AppsFolder\Microsoft.MicrosoftEdge_8wekyb3d8bbwe!MicrosoftEdge (Get-Item 'foo.pdf').FullName
```

または

```
Start-Process shell:AppsFolder\Microsoft.MicrosoftEdge_8wekyb3d8bbwe!MicrosoftEdge (Get-Item "foo.pdf").FullName
```

#### コマンド プロンプトから実行する場合 {#zb932573}

```
powershell -Command "& {Start-Process shell:AppsFolder\Microsoft.MicrosoftEdge_8wekyb3d8bbwe!MicrosoftEdge (Get-Item 'foo.pdf').FullName}"
```

または

```
powershell -Command "& {Start-Process shell:AppsFolder\Microsoft.MicrosoftEdge_8wekyb3d8bbwe!MicrosoftEdge (Get-Item """foo.pdf""").FullName}"
```
