---
title: "Eclipse"
url: "/Eclipse/"
date: 2010-06-04T04:48:42Z
pukiwiki: "Eclipse"
---

# Eclipse

## [Eclipse](https://www.eclipse.org/) {#t7934744}

***

***

<div style="clear:both"></div>

## Eclipse とは {#r72c2682}

Eclipse は Java で書かれた IDE (統合開発環境) です．

- [Eclipse.org home](https://www.eclipse.org/)
- [Eclipse Projects · GitLab](https://gitlab.eclipse.org/eclipse)

### 動作環境 {#aae7926e}

- [https://www.eclipse.org/projects/project-plan.php?planurl=https://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_34.xml#target_environments](https://www.eclipse.org/projects/project-plan.php?planurl=https://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_34.xml#target_environments)
- [https://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_34.xml#target_environments](https://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_34.xml#target_environments)

### License {#aa464649}

[Eclipse Public License 2.0](https://www.eclipse.org/legal/epl-2.0/)

### リリース情報 {#q303f311}

- [https://projects.eclipse.org/content/eclipse-ide-simultaneous-release](https://projects.eclipse.org/content/eclipse-ide-simultaneous-release)

## Java のインストール {#ca668ec2}

Eclipse は Java アプリケーションなので Java のランタイムが必要です．

[Home | Adoptium](https://adoptium.net/)を参照して OpenJDK をインストールします．

## Eclipse のインストール {#r143ba66}

Windows の場合 [Pleiades All in One](https://willbrains.jp/) を使えば，すぐに日本語化された Eclipse が使えます．

Eclipse の公式サイトからダウンロードした Eclipse を日本語化する場合は

- [Eclipse の最新リリース版](https://download.eclipse.org/eclipse/downloads/) (本体)

を展開し，

- [Pleiades プラグイン](https://willbrains.jp/) (Eclipse 本体とプラグインの日本語化)

を Eclipse のルートフォルダに展開して eclipse.ini の最終行に

```
-javaagent:plugins/jp.sourceforge.mergedoc.pleiades/pleiades.jar
```

を追加します．

## Eclipse で LaTeX {#i62a454e}

- [TeXlipse](/TeXlipse/)

## 関連リンク {#o908ecbb}

- Eclipse - [https://www.eclipse.org/](https://www.eclipse.org/)
- Pleiades - [https://willbrains.jp/](https://willbrains.jp/)
- Adoptium - [https://adoptium.net/](https://adoptium.net/)
- OpenJDK - [https://openjdk.org/](https://openjdk.org/)
