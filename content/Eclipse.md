---
title: "Eclipse"
url: "/Eclipse/"
date: 2010-06-04T04:48:42Z
pukiwiki: "Eclipse"
---

# Eclipse

## [Eclipse](http://www.eclipse.org/) {#t7934744}

***

***

<div style="clear:both"></div>

## Eclipse とは {#r72c2682}

Eclipse は Java で書かれた IDE (統合開発環境) です．

- [Eclipse.org home](http://www.eclipse.org/)
- [Eclipse.org Git repositories](http://git.eclipse.org/)
- [Eclipse - Google+](https://plus.google.com/+Eclipse)

### 動作環境 {#aae7926e}

- [http://www.eclipse.org/projects/project-plan.php?projectid=eclipse#target_environments](http://www.eclipse.org/projects/project-plan.php?projectid=eclipse#target_environments)
- [http://www.eclipse.org/projects/project-plan.php?planurl=/eclipse/development/plans/eclipse_project_plan_4_6.xml#target_environments](http://www.eclipse.org/projects/project-plan.php?planurl=/eclipse/development/plans/eclipse_project_plan_4_6.xml#target_environments)
- [https://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_6.xml#target_environments](https://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_6.xml#target_environments)

### License {#aa464649}

[Eclipse Public License (EPL)](http://www.eclipse.org/org/documents/epl-v10.php)

### リリース情報 {#q303f311}

- [http://www.eclipse.org/projects/project-plan.php?projectid=eclipse#release_milestones](http://www.eclipse.org/projects/project-plan.php?projectid=eclipse#release_milestones)
- [http://www.eclipse.org/projects/project-plan.php?planurl=/eclipse/development/plans/eclipse_project_plan_4_6.xml#release_milestones](http://www.eclipse.org/projects/project-plan.php?planurl=/eclipse/development/plans/eclipse_project_plan_4_6.xml#release_milestones)
- [https://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_6.xml#release_milestones](https://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_6.xml#release_milestones)

## Java のインストール {#ca668ec2}

Eclipse は Java アプリケーションなので Java のランタイムが必要です．

- Java - TeX Wiki を参照．

## Eclipse のインストール {#r143ba66}

Windows の場合 [Pleiades All in One](http://mergedoc.osdn.jp/) を使えば，すぐに日本語化された Eclipse が使えます．

Eclipse の公式サイトからダウンロードした Eclipse を日本語化する場合は

- [Eclipse の最新リリース版](http://download.eclipse.org/eclipse/downloads/) (本体)

を解凍し，

- [Pleiades 本体の最新版](http://mergedoc.osdn.jp/) (Eclipse 本体とプラグインの日本語化)

を Eclipse のルートフォルダに解凍して eclipse.ini の最終行に

```
-javaagent:plugins/jp.sourceforge.mergedoc.pleiades/pleiades.jar
```

を追加します．

## Eclipse で TeX {#i62a454e}

- [TeXlipse](/TeXlipse/)

## 関連リンク {#o908ecbb}

- Eclipse - [http://www.eclipse.org/](http://www.eclipse.org/)
- Pleiades - [http://mergedoc.osdn.jp/](http://mergedoc.osdn.jp/)
    - [ftp://ftp.jaist.ac.jp/pub/mergedoc/pleiades/](ftp://ftp.jaist.ac.jp/pub/mergedoc/pleiades/)
- [Eclipse を使おう](http://x19290.appspot.com/using-eclipse/main.html)
- [OpenJDK](http://openjdk.java.net/)
