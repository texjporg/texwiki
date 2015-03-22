---
title: "Vim/tex.vim"
url: "/Vim/tex.vim/"
date: 2013-04-14T18:27:45Z
pukiwiki: "Vim/tex.vim"
---

# Vim/tex.vim

[Vim](/Vim/) > tex.vim

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆CONTENTS◆</strong>　　</span><br>

## tex.vim → 問題が発生する場合は vimtex または LaTeX Box または [quickrun](/quickrun/) を使用する {#rf521622}

Vim は

- $HOME/vimfiles/after/ftplugin/tex.vim (Windows の場合)
- $HOME/.vim/after/ftplugin/tex.vim (OS X, Linux の場合)

に設定を記述することで Vim からタイプセット・プレビューができます．<br>

tex.vim を使用する場合は $HOME/vimfiles/vimrc (Windows), $HOME/.vim/vimrc (OS X, Linux) に

***

```
""
"" tex.vim
""
filetype plugin on
let g:tex_flavor='latex'
```

***

を記述しておく必要があります．<br>
補完機能が必要な場合は vimtex または LaTeX Box または [neocomplete &amp; neosnippet](/neocomplete/) を使用してください．<br>
Latexmk を使用する場合は [Latexmk](/Latexmk/) の設定をしてください．<br>
vimtex または LaTeX Box を使用すると latexmk を使用してバックグラウンドでコンパイルができます．<br>
tex.vim が動作しない場合は vimtex または LaTeX Box または [quickrun](/quickrun/) を使用してタイプセットしてください．<br> <!-- OS X の場合は [[ftpluginのtex.vim:http://blog.mountrice.com/2009/10/tex-for-snow-leopard.html]] も参考になります．~ -->

***

- $HOME/vimfiles/after/ftplugin/tex.vim (Windows の場合)
- $HOME/.vim/after/ftplugin/tex.vim (OS X, Linux の場合)

***

```
if has('win32') || has('win64')
  let g:typeset = 'pdfuplatex'
  let g:viewer = 'sumatrapdf'
elseif has('macunix')
  let g:typeset = 'pdfuplatex'
  let g:viewer = 'skim'
else
  let g:typeset = 'pdfuplatex'
  let g:viewer = 'evince'
endif
let g:master = expand("%:t")

com! -nargs=1 Typeset :call SetTypeset(<f-args>)
com! -nargs=1 Viewer :call SetViewer(<f-args>)
com! -nargs=1 TeXmaster :call SetTeXmaster(<f-args>)

function! TypesetFile()
  if &ft != 'tex'
    echo "calling TeXworks from a non-tex file"
    return ''
  end

  if g:typeset == 'pdfuplatex'
    call PdfupLaTeX("pdfuplatex")
  elseif g:typeset == 'pdfuplatex2'
    call PdfupLaTeX("pdfuplatex2")
  elseif g:typeset == 'pdflatex'
    call PdfLaTeX("pdflatex")
  elseif g:typeset == 'lualatex'
    call PdfLaTeX("lualatex")
  elseif g:typeset == 'luajitlatex'
    call PdfLaTeX("luajitlatex")
  elseif g:typeset == 'xelatex'
    call PdfLaTeX("xelatex")
  elseif g:typeset == 'latexmk'
    call Latexmk("latexmk")
  else
    call PdfupLaTeX("pdfuplatex")
  endif
  return ''
endfunction

function! ViewFile()
  if &ft != 'tex'
    echo "calling TeXworks from a non-tex file"
    return ''
  end

  if g:viewer == 'sumatrapdf'
    call SumatraPDF()
  elseif g:viewer == 'fwdsumatrapdf'
    call FwdSumatraPDF()
  elseif g:viewer == 'texworks'
    call TeXworks()
  elseif g:viewer == 'preview'
    call Preview()
  elseif g:viewer == 'texshop'
    call TeXShop()
  elseif g:viewer == 'skim'
    call Skim()
  elseif g:viewer == 'evince'
    call Evince()
  elseif g:viewer == 'fwdevince'
    call FwdEvince()
  elseif g:viewer == 'okular'
    call Okular()
  elseif g:viewer == 'zathura'
    call Zathura()
  elseif g:viewer == 'qpdfview'
    call Qpdfview()
  elseif g:viewer == 'acroread'
    call AdobeAcrobatReaderDC()
  endif
  return ''
endfunction

function! SetViewer(viewer)
  if has('win32') || has('win64')
    if a:viewer == 'texworks'
      let g:viewer = 'texworks'
    elseif a:viewer == 'sumatrapdf'
      let g:viewer = 'sumatrapdf'
    elseif a:viewer == 'fwdsumatrapdf'
      let g:viewer = 'fwdsumatrapdf'
    elseif a:viewer == 'acroread'
      let g:viewer = 'acroread'
    else
      let g:viewer = 'texworks'
    endif
  elseif has('macunix')
    if a:viewer == 'preview'
      let g:viewer = 'preview'
    elseif a:viewer == 'texshop'
      let g:viewer = 'texshop'
    elseif a:viewer == 'texworks'
      let g:viewer = 'texworks'
    elseif a:viewer == 'skim'
      let g:viewer = 'skim'
    elseif a:viewer == 'acroread'
      let g:viewer = 'acroread'
    else
      let g:viewer = 'preview'
    endif
  else
    if a:viewer == 'evince'
      let g:viewer = 'evince'
    elseif a:viewer == 'fwdevince'
      let g:viewer = 'fwdevince'
    elseif a:viewer == 'texworks'
      let g:viewer = 'texworks'
    elseif a:viewer == 'okular'
      let g:viewer = 'okular'
    elseif a:viewer == 'zathura'
      let g:viewer = 'zathura'
    elseif a:viewer == 'qpdfview'
      let g:viewer = 'qpdfview'
    elseif a:viewer == 'acroread'
      let g:viewer = 'acroread'
    else
      let g:viewer = 'evince'
    endif
  endif
endfunction

function! SetTypeset(type)
  if a:type == 'pdfuplatex'
    let g:typeset = 'pdfuplatex'
  elseif a:type == 'pdfuplatex2'
    let g:typeset = 'pdfuplatex2'
  elseif a:type == 'pdflatex'
    let g:typeset = 'pdflatex'
  elseif a:type == 'lualatex'
    let g:typeset = 'lualatex'
  elseif a:type == 'luajitlatex'
    let g:typeset = 'luajitlatex'
  elseif a:type == 'xelatex'
    let g:typeset = 'xelatex'
  elseif a:type == 'latexmk'
    let g:typeset = 'latexmk'
  else
    let g:typeset = 'pdfuplatex'
  endif
endfunction

function! SetTeXmaster(master)
  if a:master != ''
    let g:master = a:master
  endif
endfunction

function! PdfupLaTeX(type)
  if &ft != 'tex'
    echo "calling PdfupLaTeX from a non-tex file"
    return ''
  end

  w

  let masterDir = expand("%:p:h")
  let masterTeXFile = g:master
  let masterBaseName = fnamemodify(masterTeXFile, ":t:r")
  if a:type == 'pdfuplatex'
    if has('win32') || has('win64')
      let ptex2pdf = 'ptex2pdf -u -l -ot "-synctex=1 -no-guess-input-enc -kanji=utf8 -sjis-terminal"' . ' "' . masterTeXFile . '"'
      if g:viewer == 'acroread'
        let pdfclose = 'tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul && echo exit | pdfdde --r15'
        let execString = 'cd /d ' . masterDir . ' && ' . pdfclose . ' & ' . ptex2pdf
      else
        let execString = 'cd /d ' . masterDir . ' && ' . ptex2pdf
      endif
    else
      let ptex2pdf = 'ptex2pdf -u -l -ot "-synctex=1"' . ' "' . masterTeXFile . '"'
      let execString = 'cd ' . masterDir . ' && ' . ptex2pdf
    endif
  elseif a:type == 'pdfuplatex2'
    if has('win32') || has('win64')
      let latex = 'uplatex -synctex=1 -no-guess-input-enc -kanji=utf8 -sjis-terminal' . ' "' . masterTeXFile . '"'
      let dvips = 'dvips -Ppdf -z -f' . ' "' . masterBaseName . '.dvi"' . ' | convbkmk -u > "' . masterBaseName . '.ps"'
      let ps2pdf = 'ps2pdf.exe' . ' "' . masterBaseName . '.ps"'
      if g:viewer == 'acroread'
        let pdfclose = 'tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul && echo exit | pdfdde --r15'
        let execString = 'cd /d ' . masterDir . ' && ' . pdfclose . ' & ' . latex . ' && ' . dvips . ' && ' . ps2pdf
      else
        let execString = 'cd /d ' . masterDir . ' && ' . latex . ' && ' . dvips . ' && ' . ps2pdf
      endif
    else
      let latex = 'uplatex -synctex=1' . ' "' . masterTeXFile . '"'
      let dvips = 'dvips -Ppdf -z -f' . ' "' . masterBaseName . '.dvi"' . ' | convbkmk -u > "' . masterBaseName . '.ps"'
      let ps2pdf = 'ps2pdf' . ' "' . masterBaseName . '.ps"'
      let execString = 'cd ' . masterDir . ' && ' . latex . ' && ' . dvips . ' && ' . ps2pdf
    endif
  endif

  execute 'lcd ' . masterDir
  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! PdfLaTeX(type)
  if &ft != 'tex'
    echo "calling PdfLaTeX from a non-tex file"
    return ''
  end

  w

  let masterDir = expand("%:p:h")
  let masterTeXFile = g:master
  let masterBaseName = fnamemodify(masterTeXFile, ":t:r")
  if a:type == 'pdflatex'
    let pdflatex = 'pdflatex -synctex=1' . ' "' . masterTeXFile . '"'
  elseif a:type == 'lualatex'
    let pdflatex = 'lualatex -synctex=1' . ' "' . masterTeXFile . '"'
  elseif a:type == 'luajitlatex'
    let pdflatex = 'luajitlatex -synctex=1' . ' "' . masterTeXFile . '"'
  elseif a:type == 'xelatex'
    let pdflatex = 'xelatex -synctex=1' . ' "' . masterTeXFile . '"'
  endif

  if has('win32') || has('win64')
    if g:viewer == 'acroread'
      let pdfclose = 'tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul && echo exit | pdfdde --r15'
      let execString = 'cd /d ' . masterDir . ' && ' . pdfclose . ' & ' . pdflatex
    else
      let execString = 'cd /d ' . masterDir . ' && ' . pdflatex
    endif
  else
    let execString = 'cd ' . masterDir . ' && ' . pdflatex
  endif

  execute 'lcd ' . masterDir
  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! Latexmk(type)
  if &ft != 'tex'
    echo "calling Latexmk from a non-tex file"
    return ''
  end

  w

  let masterDir = expand("%:p:h")
  let masterTeXFile = g:master
  let masterBaseName = fnamemodify(masterTeXFile, ":t:r")
  if a:type == 'latexmk'
    let latexmk = 'latexmk -gg' . ' "' . masterTeXFile . '"'
  endif

  if has('win32') || has('win64')
    if g:viewer == 'acroread'
      let pdfclose = 'tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul && echo exit | pdfdde --r15'
      let execString = 'cd /d ' . masterDir . ' && ' . pdfclose . ' & ' . latexmk
    else
      let execString = 'cd /d ' . masterDir . ' && ' . latexmk
    endif
  else
    let execString = 'cd ' . masterDir . ' && ' . latexmk
  endif

  execute 'lcd ' . masterDir
  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! TeXworks()
  if &ft != 'tex'
    echo "calling TeXworks from a non-tex file"
    return ''
  end

  let masterDir = expand("%:p:h")
  let masterTeXFile = g:master
  let masterPDFFile = fnamemodify(masterTeXFile, ":t:r") . '.pdf'
  if has('win32') || has('win64')
    if glob('C:/w32tex/share/texworks/TeXworks.exe') != ''
      let viewer = '"' . glob('C:/w32tex/share/texworks/TeXworks.exe') . '"'
    elseif glob('C:/texlive/*/tlpkg/texworks/texworks.exe') != ''
      let viewer = '"' . glob('C:/texlive/*/tlpkg/texworks/texworks.exe') . '"'
    else
      let viewer = 'TeXworks.exe'
    endif
    let execString = 'cd /d ' . masterDir . ' && echo ' . viewer . ' "' . masterPDFFile . '" | cmd'
  elseif has('macunix')
    let viewer = 'open -a TeXworks.app'
    let execString = 'cd ' . masterDir . ' && ' . viewer . ' "' . masterPDFFile . '" &'
  else
    let viewer = 'texworks'
    let execString = 'cd ' . masterDir . ' && ' . viewer . ' "' . masterPDFFile . '" &'
  endif

  execute 'lcd ' . masterDir
  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! SumatraPDF()
  if &ft != 'tex'
    echo "calling SumatraPDF from a non-tex file"
    return ''
  end

  let masterDir = expand("%:p:h")
  let currentTeXFile = expand("%:t")
  let masterTeXFile = g:master
  let masterPDFFile = fnamemodify(masterTeXFile, ":t:r") . '.pdf'
  if has('win32') || has('win64')
    if glob('C:/Program Files/SumatraPDF/SumatraPDF.exe') != ''
      let viewer = '"' . glob('C:/Program Files/SumatraPDF/SumatraPDF.exe') . '"'
    elseif glob('C:/Program Files (x86)/SumatraPDF/SumatraPDF.exe') != ''
      let viewer = '"' . glob('C:/Program Files (x86)/SumatraPDF/SumatraPDF.exe') . '"'
    else
      let viewer = 'rundll32 shell32,ShellExec_RunDLL SumatraPDF'
    endif
    let execString = 'cd /d ' . masterDir . ' && echo ' . viewer . ' -reuse-instance -inverse-search "\"' . $VIM . '\gvim.exe\" -n --remote-silent +\%l \"\%f\"" "' . masterPDFFile . '" -forward-search "' . currentTeXFile . '" ' . line(".") . ' | cmd'
  endif

  execute 'lcd ' . masterDir
  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! FwdSumatraPDF()
  if &ft != 'tex'
    echo "calling FwdSumatraPDF from a non-tex file"
    return ''
  end

  let masterDir = expand("%:p:h")
  let currentTeXFile = expand("%:t")
  let masterTeXFile = g:master
  let masterPDFFile = fnamemodify(masterTeXFile, ":t:r") . '.pdf'
  if has('win32') || has('win64')
    let viewer = 'fwdsumatrapdf'
    let execString = 'cd /d ' . masterDir . ' && ' . viewer . ' "' . masterPDFFile . '" "' . currentTeXFile . '" ' . line(".")
  endif

  execute 'lcd ' . masterDir
  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! Preview()
  if &ft != 'tex'
    echo "calling Preview from a non-tex file"
    return ''
  end

  let masterDir = expand("%:p:h")
  let masterTeXFile = g:master
  let masterPDFFile = fnamemodify(masterTeXFile, ":t:r") . '.pdf'
  let viewer = 'open -a Preview.app'
  let execString = 'cd ' . masterDir . ' && ' . viewer . ' "' . masterPDFFile . '" &'

  execute 'lcd ' . masterDir
  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! TeXShop()
  if &ft != 'tex'
    echo "calling TeXShop from a non-tex file"
    return ''
  end

  let masterDir = expand("%:p:h")
  let masterTeXFile = g:master
  let masterPDFFile = fnamemodify(masterTeXFile, ":t:r") . '.pdf'
  let viewer = 'open -a TeXShop.app'
  let execString = 'cd ' . masterDir . ' && ' . viewer . ' "' . masterPDFFile . '" &'

  execute 'lcd ' . masterDir
  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! Skim()
  if &ft != 'tex'
    echo "calling Skim from a non-tex file"
    return ''
  end

  let masterDir = expand("%:p:h")
  let currentTeXFile = expand("%:t")
  let masterTeXFile = g:master
  let masterPDFFile = fnamemodify(masterTeXFile, ":t:r") . '.pdf'
  let viewer = '/Applications/Skim.app/Contents/SharedSupport/displayline'
  let execString = 'cd ' . masterDir . ' && ' . viewer . ' ' . line(".") . ' "' . masterPDFFile . '" "' . currentTeXFile . '" &'

  execute 'lcd ' . masterDir
  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! Evince()
  if &ft != 'tex'
    echo "calling Evince from a non-tex file"
    return ''
  end

  let masterDir = expand("%:p:h")
  let masterTeXFile = g:master
  let masterPDFFile = fnamemodify(masterTeXFile, ":t:r") . '.pdf'
  let viewer = 'evince'
  let execString = 'cd ' . masterDir . ' && ' . viewer . ' "' . masterPDFFile . '" &'

  execute 'lcd ' . masterDir
  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! FwdEvince()
  if &ft != 'tex'
    echo "calling FwdEvince from a non-tex file"
    return ''
  end

  let masterDir = expand("%:p:h")
  let currentTeXFile = expand("%:t")
  let masterTeXFile = g:master
  let masterPDFFile = fnamemodify(masterTeXFile, ":t:r") . '.pdf'
  let viewer = 'fwdevince'
  let execString = 'cd ' . masterDir . ' && ' . viewer . ' "' . masterPDFFile . '" ' . line(".") . ' "' . currentTeXFile . '" &'

  execute 'lcd ' . masterDir
  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! Okular()
  if &ft != 'tex'
    echo "calling Okular from a non-tex file"
    return ''
  end

  let masterDir = expand("%:p:h")
  let currentTeXFile = expand("%:p")
  let masterTeXFile = g:master
  let masterPDFFile = fnamemodify(masterTeXFile, ":t:r") . '.pdf'
  let viewer = 'okular'
  let execString = 'cd ' . masterDir . ' && ' . viewer . ' --unique "file:' . masterPDFFile . '\#src:' . line(".") . ' ' . currentTeXFile . '" &'

  execute 'lcd ' . masterDir
  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! Zathura()
  if &ft != 'tex'
    echo "calling Zathura from a non-tex file"
    return ''
  end

  let masterDir = expand("%:p:h")
  let masterTeXFile = g:master
  let masterPDFFile = fnamemodify(masterTeXFile, ":t:r") . '.pdf'
  let viewer = 'zathura -s -x "vim --servername synctex -n --remote-silent +\%{line} \%{input}"'
  let execString = 'cd ' . masterDir . ' && ' . viewer . ' "' . masterPDFFile . '" &'

  execute 'lcd ' . masterDir
  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! Qpdfview()
  if &ft != 'tex'
    echo "calling Qpdfview from a non-tex file"
    return ''
  end

  let masterDir = expand("%:p:h")
  let currentTeXFile = expand("%:t")
  let masterTeXFile = g:master
  let masterPDFFile = fnamemodify(masterTeXFile, ":t:r") . '.pdf'
  let viewer = 'qpdfview'
  let execString = 'cd ' . masterDir . ' && ' . viewer . ' --unique "' . masterPDFFile . '\#src:' . currentTeXFile . ':' . line(".") . ':0' . '" &'

  execute 'lcd ' . masterDir
  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! AdobeAcrobatReaderDC()
  if &ft != 'tex'
    echo "calling Adobe Reader from a non-tex file"
    return ''
  end

  let masterDir = expand("%:p:h")
  let masterTeXFile = g:master
  let masterPDFFile = fnamemodify(masterTeXFile, ":t:r") . '.pdf'
  if has('win32') || has('win64')
    if glob('C:/Program Files/Adobe/Acrobat Reader DC/Reader/AcroRd32.exe') != ''
      let viewer = '"' . glob('C:/Program Files/Adobe/Acrobat Reader DC/Reader/AcroRd32.exe') . '"'
    elseif glob('C:/Program Files (x86)/Adobe/Adobe Reader DC/Reader/AcroRd32.exe') != ''
      let viewer = '"' . glob('C:/Program Files (x86)/Adobe/Acrobat Reader DC/Reader/AcroRd32.exe') . '"'
    else
      let viewer = 'pdfopen --r15 --file'
    endif
    let execString = 'cd /d ' . masterDir . ' && echo ' . viewer . ' "' . masterPDFFile . '" | cmd'
  elseif has('macunix')
    let viewer = 'open -a "Adobe Acrobat Reader DC.app"'
    let execString = 'cd ' . masterDir . ' && ' . viewer . ' "' . masterPDFFile . '" &'
  else
    let viewer = 'wine ~/.wine/drive_c/Program\ Files*/Adobe/Acrobat Reader DC/Reader/AcroRd32.exe'
    let execString = 'cd ' . masterDir . ' && ' . viewer . ' "' . masterPDFFile . '" &'
  endif

  execute 'lcd ' . masterDir
  execute 'silent! !' execString
  redraw!
  return ''
endfunction

noremap <expr> <C-K>f TypesetFile()
noremap <expr> <C-K>l Latexmk('latexmk')
noremap <expr> <C-K>v ViewFile()
```

***

### Windows の場合 {#kf0c55a9}

タイプセットはデフォルトでは pdfupLaTeX を使用します．<br>
ビューアはデフォルトでは SumatraPDF を使用します．<br>

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#070;text-align:center">ノーマルモード</th><th style="color:#FFF;background-color:#070;text-align:center">機能</th></tr>
> <tr><td>&lt;Ctrl-K&gt; f</td><td>タイプセット</td></tr>
> <tr><td>&lt;Ctrl-K&gt; l</td><td>Latexmk</td></tr>
> <tr><td>&lt;Ctrl-K&gt; v</td><td>プレビュー</td></tr>
> </tbody>
> </table>
>

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#070;text-align:center">コマンドラインモード</th><th style="color:#FFF;background-color:#070;text-align:center">機能</th></tr>
> <tr><td>:Typeset pdfuplatex &lt;Enter&gt;</td><td>タイプセットを pdfupLaTeX に変更</td></tr>
> <tr><td>:Typeset pdfuplatex2 &lt;Enter&gt;</td><td>タイプセットを pdfupLaTeX2 に変更</td></tr>
> <tr><td>:Typeset pdflatex &lt;Enter&gt;</td><td>タイプセットを pdfLaTeX に変更</td></tr>
> <tr><td>:Typeset lualatex &lt;Enter&gt;</td><td>タイプセットを LuaLaTeX に変更</td></tr>
> <tr><td>:Typeset luajitlatex &lt;Enter&gt;</td><td>タイプセットを LuaJITLaTeX に変更</td></tr>
> <tr><td>:Typeset xelatex &lt;Enter&gt;</td><td>タイプセットを XeLaTeX に変更</td></tr>
> <tr><td>:Typeset latexmk &lt;Enter&gt;</td><td>タイプセットを Latexmk に変更</td></tr>
> <tr><td>:Viewer sumatrapdf &lt;Enter&gt;</td><td>ビューアを SumatraPDF に変更</td></tr>
> <tr><td>:Viewer fwdsumatrapdf &lt;Enter&gt;</td><td>ビューアを fwdsumatrapdf に変更</td></tr>
> <tr><td>:Viewer texworks &lt;Enter&gt;</td><td>ビューアを TeXworks に変更</td></tr>
> <tr><td>:Viewer acroread &lt;Enter&gt;</td><td>ビューアを Adobe Acrobat Reader DC に変更</td></tr>
> <tr><td>:TeXmaster main.tex &lt;Enter&gt;</td><td>マスターファイルを main.tex に設定</td></tr>
> </tbody>
> </table>
>

### OS X の場合 {#v2d90738}

動作未確認です．<br>
タイプセットはデフォルトでは pdfupLaTeX を使用します．<br>
ビューアはデフォルトでは Skim を使用します．<br>

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#070;text-align:center">ノーマルモード</th><th style="color:#FFF;background-color:#070;text-align:center">機能</th></tr>
> <tr><td>&lt;Ctrl-K&gt; f</td><td>タイプセット</td></tr>
> <tr><td>&lt;Ctrl-K&gt; l</td><td>Latexmk</td></tr>
> <tr><td>&lt;Ctrl-K&gt; v</td><td>プレビュー</td></tr>
> </tbody>
> </table>
>

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#070;text-align:center">コマンドラインモード</th><th style="color:#FFF;background-color:#070;text-align:center">機能</th></tr>
> <tr><td>:Typeset pdfuplatex &lt;Enter&gt;</td><td>タイプセットを pdfupLaTeX に変更</td></tr>
> <tr><td>:Typeset pdfuplatex2 &lt;Enter&gt;</td><td>タイプセットを pdfupLaTeX2 に変更</td></tr>
> <tr><td>:Typeset pdflatex &lt;Enter&gt;</td><td>タイプセットを pdfLaTeX に変更</td></tr>
> <tr><td>:Typeset lualatex &lt;Enter&gt;</td><td>タイプセットを LuaLaTeX に変更</td></tr>
> <tr><td>:Typeset luajitlatex &lt;Enter&gt;</td><td>タイプセットを LuaJITLaTeX に変更</td></tr>
> <tr><td>:Typeset xelatex &lt;Enter&gt;</td><td>タイプセットを XeLaTeX に変更</td></tr>
> <tr><td>:Typeset latexmk &lt;Enter&gt;</td><td>タイプセットを Latexmk に変更</td></tr>
> <tr><td>:Viewer skim &lt;Enter&gt;</td><td>ビューアを Skim に変更</td></tr>
> <tr><td>:Viewer preview &lt;Enter&gt;</td><td>ビューアを Preview に変更</td></tr>
> <tr><td>:Viewer texshop &lt;Enter&gt;</td><td>ビューアを TeXShop に変更</td></tr>
> <tr><td>:Viewer texworks &lt;Enter&gt;</td><td>ビューアを TeXworks に変更</td></tr>
> <tr><td>:Viewer acroread &lt;Enter&gt;</td><td>ビューアを Adobe Acrobat Reader DC に変更</td></tr>
> <tr><td>:TeXmaster main.tex &lt;Enter&gt;</td><td>マスターファイルを main.tex に設定</td></tr>
> </tbody>
> </table>
>

### Linux の場合 {#q23aa2de}

タイプセットはデフォルトでは pdfupLaTeX を使用します．<br>
ビューアはデフォルトでは Evince を使用します．<br>
fwdevince は Evince/fwdevince の fwdevince を使用します．<br>
GVim を使用するとエラーが発生しても表示されずに GVim が固まったように見える (x を入力して &lt;Enter> を入力すると OK です) ので，コンソール版の Vim を使用することをおすすめします．<br>

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#070;text-align:center">ノーマルモード</th><th style="color:#FFF;background-color:#070;text-align:center">機能</th></tr>
> <tr><td>&lt;Ctrl-K&gt; f</td><td>タイプセット</td></tr>
> <tr><td>&lt;Ctrl-K&gt; l</td><td>Latexmk</td></tr>
> <tr><td>&lt;Ctrl-K&gt; v</td><td>プレビュー</td></tr>
> </tbody>
> </table>
>

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#070;text-align:center">コマンドラインモード</th><th style="color:#FFF;background-color:#070;text-align:center">機能</th></tr>
> <tr><td>:Typeset pdfuplatex &lt;Enter&gt;</td><td>タイプセットを pdfupLaTeX に変更</td></tr>
> <tr><td>:Typeset pdfuplatex2 &lt;Enter&gt;</td><td>タイプセットを pdfupLaTeX2 に変更</td></tr>
> <tr><td>:Typeset pdflatex &lt;Enter&gt;</td><td>タイプセットを pdfLaTeX に変更</td></tr>
> <tr><td>:Typeset lualatex &lt;Enter&gt;</td><td>タイプセットを LuaLaTeX に変更</td></tr>
> <tr><td>:Typeset luajitlatex &lt;Enter&gt;</td><td>タイプセットを LuaJITLaTeX に変更</td></tr>
> <tr><td>:Typeset xelatex &lt;Enter&gt;</td><td>タイプセットを XeLaTeX に変更</td></tr>
> <tr><td>:Typeset latexmk &lt;Enter&gt;</td><td>タイプセットを Latexmk に変更</td></tr>
> <tr><td>:Viewer evince &lt;Enter&gt;</td><td>ビューアを Evince に変更</td></tr>
> <tr><td>:Viewer fwdevince &lt;Enter&gt;</td><td>ビューアを fwdevince に変更</td></tr>
> <tr><td>:Viewer okular &lt;Enter&gt;</td><td>ビューアを Okular に変更</td></tr>
> <tr><td>:Viewer zathura &lt;Enter&gt;</td><td>ビューアを zathura に変更</td></tr>
> <tr><td>:Viewer qpdfview &lt;Enter&gt;</td><td>ビューアを qpdfview に変更</td></tr>
> <tr><td>:Viewer texworks &lt;Enter&gt;</td><td>ビューアを TeXworks に変更</td></tr>
> <tr><td>:Viewer acroread &lt;Enter&gt;</td><td>ビューアを Adobe Acrobat Reader DC に変更</td></tr>
> <tr><td>:TeXmaster main.tex &lt;Enter&gt;</td><td>マスターファイルを main.tex に設定</td></tr>
> </tbody>
> </table>
>
