---
title: "Ruby"
url: "/Ruby/"
date: 2013-05-12T16:56:39Z
pukiwiki: "Ruby"
---

# Ruby

## [Ruby](http://www.ruby-lang.org/) {#ufdd9309}

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/200px-Ruby_logo.svg.png" alt="Ruby" style="float:right">

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## Ruby 2.0 {#z9c2e043}

TeX 関連プログラムには Ruby で書かれたスクリプトがあります．<br>
convbkmk.rb, [ConTeXt](/ConTeXt/) などの Ruby で書かれたスクリプトを実行するには Ruby の処理系が必要です．<br>

- [http://www.ruby-lang.org/](http://www.ruby-lang.org/)
- [http://www.ruby-doc.org/](http://www.ruby-doc.org/)

### 派生版 {#w5708e1c}

- [IronRuby](http://ironruby.codeplex.com/)
- [JRuby](http://jruby.org/)
- [Rubinius](http://rubini.us/)

## インストール {#oe1e1c67}

### Windows {#j2a4eaa7}

- [RubyInstaller for Windows](http://rubyinstaller.org/)

ruby.exe を C:\Ruby200\bin にインストールした場合は

```
;C:\Ruby200\bin
```

を環境変数 PATH に追加します

ruby.exe を C:\Ruby200-x64\bin にインストールした場合は

```
;C:\Ruby200-x64\bin
```

を環境変数 PATH に追加します

## mruby (組み込み向け Ruby) {#we4042fb}

- [https://github.com/mruby/mruby](https://github.com/mruby/mruby)

## fwdevince <a id="fwdevince"></a> {#x681ced4}

### Ruby 版 {#bf356aaf}

Evince 3.8.3, Ruby 2.0.0, ruby-dbus 0.9.2 で動作確認しています．<br>

```
$ sudo gem install ruby-dbus
Fetching: ruby-dbus-0.9.2.gem (100%)
Successfully installed ruby-dbus-0.9.2
Parsing documentation for ruby-dbus-0.9.2
Installing ri documentation for ruby-dbus-0.9.2
Done installing documentation for ruby-dbus after 1 seconds
1 gem installed
```

***

- fwdevince

***

```
#!/usr/bin/env ruby

require 'dbus'

pdf = File.expand_path(ARGV[0])
line = ARGV[1].to_i
tex = File.expand_path(ARGV[2])
bus = DBus::SessionBus.instance
daemon = bus.introspect('org.gnome.evince.Daemon', '/org/gnome/evince/Daemon')
dbus_name = daemon['org.gnome.evince.Daemon'].FindDocument('file://' + pdf, true)[0]
window = bus.introspect(dbus_name, '/org/gnome/evince/Window/0')
sleep(0.2)
window['org.gnome.evince.Window'].SyncView(tex, [line, 1], 0)
```

***
