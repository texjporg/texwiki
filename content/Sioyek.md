---
title: "Sioyek"
url: "/Sioyek/"
date: 2024-02-24T14:24:31Z
pukiwiki: "Sioyek"
---

# Sioyek

Sioyek は教科書や論文を読むことに特化した PDF ビューアーです。[SyncTeX](/SyncTeX/) に対応しています。

- [https://sioyek.info/](https://sioyek.info/)
- [https://github.com/ahrm/sioyek](https://github.com/ahrm/sioyek)
    - [https://github.com/ahrm/sioyek?tab=readme-ov-file#third-party-packages-for-linux](https://github.com/ahrm/sioyek?tab=readme-ov-file#third-party-packages-for-linux)
- [https://sioyek-documentation.readthedocs.io/](https://sioyek-documentation.readthedocs.io/)
    - [https://sioyek-documentation.readthedocs.io/en/latest/usage.html#synctex](https://sioyek-documentation.readthedocs.io/en/latest/usage.html#synctex)
- [https://scoop.sh/#/apps?q=sioyek&s=0&d=1&o=true](https://scoop.sh/#/apps?q=sioyek&s=0&d=1&o=true)
- [https://community.chocolatey.org/packages/sioyek](https://community.chocolatey.org/packages/sioyek)

## 使い方 {#t25d1fc1}

### コマンドラインオプション {#e8fd43c8}

- [https://github.com/ahrm/sioyek/blob/main/pdf_viewer/main.cpp](https://github.com/ahrm/sioyek/blob/main/pdf_viewer/main.cpp)

```
Usage: sioyek [options]
Sioyek is a PDF reader designed for reading research papers and technical books.

Options:
 --new-window                  Open the file in a new window
                               but within the same sioyek
                               instance (reuses the previous
                               window if a sioyek window with
                               the same file already exists).
 --reuse-window                Force sioyek to reuse the
                               current window even when
                               should launch_new_window is
                               set.
 --nofocus                     Do not bring the sioyek
                               instance to foreground.
 --version                     Print sioyek version.
 --page <page>                 Which page to open.
 --focus-text <focus-text>     Set a visual mark on line
                               including <text>.
 --focus-text-page <focus-text-page>  Specifies the page which is
                               used for focus-text
 --inverse-search <command>    The command to execute when
                               performing inverse search. In
                               <command>, %1 is filled with
                               the file name and %2 is filled
                               with the line number.
 --execute-command <execute-command>  The command to execute on
                               running instance of sioyek
 --execute-command-data <execute-command-data>  Optional data for
                               execute-command command
 --forward-search-file <file>  Perform forward search on file
                               <file>. You must also include
                               --forward-search-line to
                               specify the line
 --forward-search-line <line>  Perform forward search on line
                               <line>. You must also include
                               --forward-search-file to
                               specify the file
 --forward-search-column <column>  Perform forward search on
                               column <column>. You must also
                               include --forward-search-file
                               to specify the file
 --zoom <zoom>                 Set zoom level to <zoom>
 --xloc <xloc>                 Set x position within page to
                               <xloc>.
 --yloc <yloc>                 Set y position within page to
                               <yloc>.
 --window-id <window-id>       Apply cocmmand to window with
                               id <window-id>
 --shared-database-path <path>   Specify which file to use for
                               shared data (bookmarks,
                               highlights, etc.)
 --verbose                     Print extra information in
                               command line.
 --wait-for-respose            Wait for the command to finigh
                               before returning.
 --no-auto-config              Disables all config files
                               except the ones next to the
                               executable. Used mainly for
                               testing.
 -?, -h, --help                Displays help on commandline
                               options.
 --help-all                    Displays help, including
                               generic Qt options.
```
