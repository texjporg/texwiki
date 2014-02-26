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

## Ruby 2.1 {#z9c2e043}

TeX 関連プログラムには Ruby で書かれたスクリプトがあります．<br>
convbkmk.rb, [ConTeXt](/ConTeXt/) などの Ruby で書かれたスクリプトを実行するには Ruby の処理系が必要です．<br>

- [http://www.ruby-lang.org/](http://www.ruby-lang.org/)
- [http://www.ruby-doc.org/](http://www.ruby-doc.org/)
- [Ruby Advent Calendar 2013 - Qiita \[キータ\]](http://qiita.com/advent-calendar/2013/ruby)
- [Rubyで外部コマンドを実行して結果を受け取る方法あれこれ](http://qiita.com/tyabe/items/56c9fa81ca89088c5627)
- [shebangが/bin/envかruby直接指定かで$0利用時の挙動がかわる](http://tech.recompile.net/post/13843318337/shebang-bin-env-ruby-0)

### 派生版 {#w5708e1c}

- [IronRuby](http://ironruby.codeplex.com/)
- [JRuby](http://jruby.org/)
- [Rubinius](http://rubini.us/)
- [Topaz](http://topazruby.com/)

## インストール {#oe1e1c67}

### Windows {#j2a4eaa7}

#### RubyInstaller for Windows {#p44e196d}

- [RubyInstaller for Windows](http://rubyinstaller.org/)
- [https://github.com/oneclick/rubyinstaller](https://github.com/oneclick/rubyinstaller)

RubyInstaller for Windows の Ruby を C:\Ruby200 にインストールした場合は

```
;C:\Ruby200\bin
```

を環境変数 PATH に追加します

RubyInstaller for Windows の Ruby を C:\Ruby200-x64 にインストールした場合は

```
;C:\Ruby200-x64\bin
```

を環境変数 PATH に追加します

#### ActiveScriptRuby {#y961023d}

- [ActiveScriptRuby and Other packages](http://www.artonx.org/data/asr/)

#### MSYS2 {#a7424fa6}

```
$ pacman -S ruby
```

### OS X {#def5cf73}

- [Ruby 2.1.0-p0インストール](http://qiita.com/shu_0115/items/ba33b692373f002cc568)

### Linux {#pfcca84f}

#### Arch Linux {#k152c3d6}

- [https://www.archlinux.org/packages/extra/x86_64/ruby/](https://www.archlinux.org/packages/extra/x86_64/ruby/)
- [https://www.archlinux.org/packages/extra/i686/ruby/](https://www.archlinux.org/packages/extra/i686/ruby/)

#### Linux Mint {#o6dd6f52}

- [http://packages.ubuntu.com/ja/ruby](http://packages.ubuntu.com/ja/ruby)
- [http://packages.ubuntu.com/ja/ruby2.0](http://packages.ubuntu.com/ja/ruby2.0)

#### Debian {#z226ac1e}

- [https://packages.debian.org/ja/ruby](https://packages.debian.org/ja/ruby)
- [https://packages.debian.org/ja/ruby2.1](https://packages.debian.org/ja/ruby2.1)

#### Fedora {#c69aed3b}

- [https://apps.fedoraproject.org/packages/ruby](https://apps.fedoraproject.org/packages/ruby)

#### openSUSE {#r7994550}

- [http://software.opensuse.org/package/ruby](http://software.opensuse.org/package/ruby)

#### Gentoo Linux {#wf560410}

- [https://packages.gentoo.org/package/dev-lang/ruby](https://packages.gentoo.org/package/dev-lang/ruby)

## mruby (組み込み向け Ruby) {#we4042fb}

- [https://github.com/mruby/mruby](https://github.com/mruby/mruby)
- [mruby Advent Calendar 2013 - Qiita \[キータ\]](http://qiita.com/advent-calendar/2013/mruby)

## fwdevince <a id="fwdevince"></a> {#x681ced4}

### Ruby 版 {#bf356aaf}

inverse search は実装していません．<br>
forward search のみ実装しています．<br>
Evince 3.10.3, Ruby 2.1.0, ruby-dbus 0.10.0 で動作確認しています．<br>

```
$ sudo gem install ruby-dbus
Fetching: ruby-dbus-0.10.0.gem (100%)
Successfully installed ruby-dbus-0.10.0
Parsing documentation for ruby-dbus-0.10.0
Installing ri documentation for ruby-dbus-0.10.0
Done installing documentation for ruby-dbus after 1 seconds
1 gem installed
```

***

- fwdevince

***

```
#!/usr/bin/env ruby

require 'dbus'

pdf = File.expand_path(ARGV[0]).gsub(/ /, '%20')
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
