---
title: "Vim/tex.vim"
url: "/Vim/tex.vim/"
date: 2013-04-14T18:27:45Z
pukiwiki: "Vim/tex.vim"
---

# Vim/tex.vim

[Vim](/Vim/) > tex.vim

<span style="color:White;background-color:#5F2F2F;">　　<strong>◆目次◆</strong>　　</span><br>

## tex.vim {#rf521622}

$HOME/vimfiles/ftplugin/tex.vim (Windows), $HOME/.vim/ftplugin/tex.vim (OS X, Linux) に設定を記述することで Vim からタイプセット・プレビューができます．<br>

tex.vim を使用する場合は $HOME/\_vimrc (Windows), $HOME/.vimrc (OS X, Linux) に

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
補完機能が必要な方は [neocomplete &amp; neosnippet](/neocomplete/) を使用してください．<br>

***

- $HOME/vimfiles/ftplugin/tex.vim (Windows の場合)
- $HOME/.vim/ftplugin/tex.vim (OS X, Linux の場合)

***

```
if has('win32') || has('win64')
  let g:typeset = 'pdfplatex'
  let g:bibtex = 'pbibtex -kanji=utf8 -sjis-terminal'
  let g:makeindex = 'mendex -U -T'
  let g:viewer = 'texworks'
elseif has('macunix')
  let g:typeset = 'pdfplatex'
  let g:bibtex = 'pbibtex'
  let g:makeindex = 'mendex'
  let g:viewer = 'preview'
else
  let g:typeset = 'pdfplatex'
  let g:bibtex = 'pbibtex'
  let g:makeindex = 'mendex'
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

  if g:typeset == 'pdfplatex'
    call PdfpLaTeX("pdfplatex")
  elseif g:typeset == 'pdfplatex2'
    call PdfpLaTeX("pdfplatex2")
  elseif g:typeset == 'pdfuplatex'
    call PdfpLaTeX("pdfuplatex")
  elseif g:typeset == 'pdfuplatex2'
    call PdfpLaTeX("pdfuplatex2")
  elseif g:typeset == 'pdflatex'
    call PdfLaTeX("pdflatex")
  elseif g:typeset == 'lualatex'
    call PdfLaTeX("lualatex")
  elseif g:typeset == 'luajitlatex'
    call PdfLaTeX("luajitlatex")
  elseif g:typeset == 'xelatex'
    call PdfLaTeX("xelatex")
  else
    call PdfpLaTeX("pdfplatex")
  endif
  return ''
endfunction

function! ViewFile()
  if &ft != 'tex'
    echo "calling TeXworks from a non-tex file"
    return ''
  end

  if g:viewer == 'texworks'
    call TeXworks()
  elseif g:viewer == 'sumatrapdf'
    call SumatraPDF()
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
  elseif g:viewer == 'pdfviewer'
    call PdfViewer()
  elseif g:viewer == 'adobereader'
    call AdobeReader()
  endif
  return ''
endfunction

function! SetViewer(viewer)
  if has('win32') || has('win64')
    if a:viewer == 'texworks'
      let g:viewer = 'texworks'
    elseif a:viewer == 'sumatrapdf'
      let g:viewer = 'sumatrapdf'
    elseif a:viewer == 'adobereader'
      let g:viewer = 'adobereader'
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
    elseif a:viewer == 'adobereader'
      let g:viewer = 'adobereader'
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
    elseif a:viewer == 'pdfviewer'
      let g:viewer = 'pdfviewer'
    elseif a:viewer == 'adobereader'
      let g:viewer = 'adobereader'
    else
      let g:viewer = 'evince'
    endif
  endif
endfunction

function! SetTypeset(type)
  if a:type == 'pdfplatex'
    let g:typeset = 'pdfplatex'
  elseif a:type == 'pdfplatex2'
    let g:typeset = 'pdfplatex2'
  elseif a:type == 'pdfuplatex'
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
  else
    let g:typeset = 'pdfplatex'
  endif
endfunction

function! SetTeXmaster(master)
  if a:master != ''
    let g:master = a:master
  endif
endfunction

function! PdfpLaTeX(type)
  if &ft != 'tex'
    echo "calling PdfpLaTeX from a non-tex file"
    return ''
  end

  w

  let masterDir = getcwd()
  let masterTeXFile = g:master
  let masterBaseName = fnamemodify(masterTeXFile, ":t:r")
  if a:type == 'pdfplatex'
    if has('win32') || has('win64')
      let latex = 'platex -synctex=1 -guess-input-enc -kanji=utf8 -sjis-terminal' . ' ' . masterTeXFile
      let dvipdfm = 'dvipdfmx' . ' ' . masterBaseName
      let g:bibtex = 'pbibtex -kanji=utf8 -sjis-terminal'
      let g:makeindex = 'mendex -U -T'
      if g:viewer == 'adobereader'
        let pdfclose = 'tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul && echo exit | pdfdde --rxi'
        let execString = 'cd /d ' . masterDir . ' && ' . pdfclose . ' & ' . latex . ' && ' . dvipdfm
      else
        let execString = 'cd /d ' . masterDir . ' && ' . latex . ' && ' . dvipdfm
      endif
    else
      let latex = 'platex -synctex=1' . ' ' . masterTeXFile
      let dvipdfm = 'dvipdfmx' . ' ' . masterBaseName
      let g:bibtex = 'pbibtex'
      let g:makeindex = 'mendex'
      let execString = 'cd ' . masterDir . ' && ' . latex . ' && ' . dvipdfm
    endif
  elseif a:type == 'pdfplatex2'
    if has('win32') || has('win64')
      let latex = 'platex -synctex=1 -guess-input-enc -kanji=utf8 -sjis-terminal' . ' ' . masterTeXFile
      let dvips = 'dvips -Ppdf -z -f' . ' ' . masterBaseName . '.dvi' . ' | convbkmk -g > ' . masterBaseName . '.ps'
      let ps2pdf = 'ps2pdf.bat' . ' ' . masterBaseName . '.ps'
      let g:bibtex = 'pbibtex -kanji=utf8 -sjis-terminal'
      let g:makeindex = 'mendex -U -T'
      if g:viewer == 'adobereader'
        let pdfclose = 'tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul && echo exit | pdfdde --rxi'
        let execString = 'cd /d ' . masterDir . ' && ' . pdfclose . ' & ' . latex . ' && ' . dvips . ' && ' . ps2pdf
      else
        let execString = 'cd /d ' . masterDir . ' && ' . latex . ' && ' . dvips . ' && ' . ps2pdf
      endif
    else
      let latex = 'platex -synctex=1' . ' ' . masterTeXFile
      let dvips = 'dvips -Ppdf -z -f' . ' ' . masterBaseName . '.dvi' . ' | convbkmk -g > ' . masterBaseName . '.ps'
      let ps2pdf = 'ps2pdf' . ' ' . masterBaseName . '.ps'
      let g:bibtex = 'pbibtex'
      let g:makeindex = 'mendex'
      let execString = 'cd ' . masterDir . ' && ' . latex . ' && ' . dvips . ' && ' . ps2pdf
    endif
  elseif a:type == 'pdfuplatex'
    if has('win32') || has('win64')
      let latex = 'uplatex -synctex=1 -no-guess-input-enc -kanji=utf8' . ' ' . masterTeXFile
      let dvipdfm = 'dvipdfmx' . ' ' . masterBaseName
      let g:bibtex = 'upbibtex'
      let g:makeindex = 'mendex -U'
      if g:viewer == 'adobereader'
        let pdfclose = 'tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul && echo exit | pdfdde --rxi'
        let execString = 'cd /d ' . masterDir . ' && ' . pdfclose . ' & ' . latex . ' && ' . dvipdfm
      else
        let execString = 'cd /d ' . masterDir . ' && ' . latex . ' && ' . dvipdfm
      endif
    else
      let latex = 'uplatex -synctex=1' . ' ' . masterTeXFile
      let dvipdfm = 'dvipdfmx' . ' ' . masterBaseName
      let g:bibtex = 'upbibtex'
      let g:makeindex = 'mendex'
      let execString = 'cd ' . masterDir . ' && ' . latex . ' && ' . dvipdfm
    endif
  elseif a:type == 'pdfuplatex2'
    if has('win32') || has('win64')
      let latex = 'uplatex -synctex=1 -no-guess-input-enc -kanji=utf8' . ' ' . masterTeXFile
      let dvips = 'dvips -Ppdf -z -f' . ' ' . masterBaseName . '.dvi' . ' | convbkmk -u > ' . masterBaseName . '.ps'
      let ps2pdf = 'ps2pdf.bat' . ' ' . masterBaseName . '.ps'
      let g:bibtex = 'upbibtex'
      let g:makeindex = 'mendex -U'
      if g:viewer == 'adobereader'
        let pdfclose = 'tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul && echo exit | pdfdde --rxi'
        let execString = 'cd /d ' . masterDir . ' && ' . pdfclose . ' & ' . latex . ' && ' . dvips . ' && ' . ps2pdf
      else
        let execString = 'cd /d ' . masterDir . ' && ' . latex . ' && ' . dvips . ' && ' . ps2pdf
      endif
    else
      let latex = 'platex -synctex=1' . ' ' . masterTeXFile
      let dvips = 'dvips -Ppdf -z -f' . ' ' . masterBaseName . '.dvi' . ' | convbkmk -u > ' . masterBaseName . '.ps'
      let ps2pdf = 'ps2pdf' . ' ' . masterBaseName . '.ps'
      let g:bibtex = 'upbibtex'
      let g:makeindex = 'mendex'
      let execString = 'cd ' . masterDir . ' && ' . latex . ' && ' . dvips . ' && ' . ps2pdf
    endif
  endif

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

  let masterDir = getcwd()
  let masterTeXFile = g:master
  let masterBaseName = fnamemodify(masterTeXFile, ":t:r")
  if a:type == 'pdflatex'
    let pdflatex = 'pdflatex -synctex=1' . ' ' . masterTeXFile
    let g:bibtex = 'bibtex'
    let g:makeindex = 'makeindex'
  elseif a:type == 'lualatex'
    let pdflatex = 'lualatex -synctex=1' . ' ' . masterTeXFile
    let g:bibtex = 'bibtexu'
    let g:makeindex = 'texindy'
  elseif a:type == 'luajitlatex'
    let pdflatex = 'luajitlatex -synctex=1' . ' ' . masterTeXFile
    let g:bibtex = 'bibtexu'
    let g:makeindex = 'texindy'
  elseif a:type == 'xelatex'
    let pdflatex = 'xelatex -synctex=1' . ' ' . masterTeXFile
    let g:bibtex = 'bibtexu'
    let g:makeindex = 'texindy'
  endif

  if has('win32') || has('win64')
    if g:viewer == 'adobereader'
      let pdfclose = 'tasklist /fi "IMAGENAME eq AcroRd32.exe" /nh | findstr "AcroRd32.exe" > nul && echo exit | pdfdde --rxi'
      let execString = 'cd /d ' . masterDir . ' && ' . pdfclose . ' & ' . pdflatex
    else
      let execString = 'cd /d ' . masterDir . ' && ' . pdflatex
    endif
  else
    let execString = 'cd ' . masterDir . ' && ' . pdflatex
  endif

  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! BibTeX()
  if &ft != 'tex'
    echo "calling BibTeX from a non-tex file"
    return ''
  end

  w

  let masterDir = getcwd()
  let masterTeXFile = g:master
  let masterBaseName = fnamemodify(masterTeXFile, ":t:r")
  if has('win32') || has('win64')
    let execString = 'cd /d ' . masterDir . ' && ' . g:bibtex . ' ' . masterBaseName
  else
    let execString = 'cd ' . masterDir . ' && ' . g:bibtex . ' ' . masterBaseName
  endif

  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! MakeIndex()
  if &ft != 'tex'
    echo "calling MakeIndex from a non-tex file"
    return ''
  end

  w

  let masterDir = getcwd()
  let masterTeXFile = g:master
  let masterBaseName = fnamemodify(masterTeXFile, ":t:r")
  if has('win32') || has('win64')
    let execString = 'cd /d ' . masterDir . ' && ' . g:makeindex ' ' . masterBaseName
  else
    let execString = 'cd ' . masterDir . ' && ' . g:makeindex . ' ' . masterBaseName
  endif

  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! TeXworks()
  if &ft != 'tex'
    echo "calling TeXworks from a non-tex file"
    return ''
  end

  let masterDir = getcwd()
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
    let execString = 'cd /d ' . masterDir . ' && echo ' . viewer . ' ' . masterPDFFile . ' | cmd'
  elseif has('macunix')
    let viewer = 'open -a TeXworks.app'
    let execString = 'cd ' . masterDir . ' && ' . viewer . ' ' . masterPDFFile . ' &'
  else
    let viewer = 'texworks'
    let execString = 'cd ' . masterDir . ' && ' . viewer . ' ' . masterPDFFile . ' &'
  endif

  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! SumatraPDF()
  if &ft != 'tex'
    echo "calling SumatraPDF from a non-tex file"
    return ''
  end

  let masterDir = getcwd()
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
    let execString = 'cd /d ' . masterDir . ' && echo ' . viewer . ' -reuse-instance ' . masterPDFFile . ' -forward-search ' . currentTeXFile . ' ' . line(".") . ' | cmd'
  endif

  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! Preview()
  if &ft != 'tex'
    echo "calling Preview from a non-tex file"
    return ''
  end

  let masterDir = getcwd()
  let masterTeXFile = g:master
  let masterPDFFile = fnamemodify(masterTeXFile, ":t:r") . '.pdf'
  let viewer = 'open -a Preview.app'
  let execString = 'cd ' . masterDir . ' && ' . viewer . ' ' . masterPDFFile . ' &'

  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! TeXShop()
  if &ft != 'tex'
    echo "calling TeXShop from a non-tex file"
    return ''
  end

  let masterDir = getcwd()
  let masterTeXFile = g:master
  let masterPDFFile = fnamemodify(masterTeXFile, ":t:r") . '.pdf'
  let viewer = 'open -a TeXShop.app'
  let execString = 'cd ' . masterDir . ' && ' . viewer . ' ' . masterPDFFile . ' &'

  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! Skim()
  if &ft != 'tex'
    echo "calling Skim from a non-tex file"
    return ''
  end

  let masterDir = getcwd()
  let currentTeXFile = expand("%:t")
  let masterTeXFile = g:master
  let masterPDFFile = fnamemodify(masterTeXFile, ":t:r") . '.pdf'
  let viewer = '/Applications/Skim.app/Contents/SharedSupport/displayline'
  let execString = 'cd ' . masterDir . ' && ' . viewer . ' ' . line(".") . ' ' . masterPDFFile . ' ' . currentTeXFile . ' &'

  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! Evince()
  if &ft != 'tex'
    echo "calling Evince from a non-tex file"
    return ''
  end

  let masterDir = getcwd()
  let masterTeXFile = g:master
  let masterPDFFile = fnamemodify(masterTeXFile, ":t:r") . '.pdf'
  let viewer = 'evince'
  let execString = 'cd ' . masterDir . ' && ' . viewer . ' ' . masterPDFFile . ' &'

  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! FwdEvince()
  if &ft != 'tex'
    echo "calling FwdEvince from a non-tex file"
    return ''
  end

  let masterDir = getcwd()
  let currentTeXFile = expand("%:t")
  let masterTeXFile = g:master
  let masterPDFFile = fnamemodify(masterTeXFile, ":t:r") . '.pdf'
  let viewer = 'fwdevince'
  let execString = 'cd ' . masterDir . ' && ' . viewer . ' ' . masterPDFFile . ' ' . line(".") . ' ' . currentTeXFile . ' &'

  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! Okular()
  if &ft != 'tex'
    echo "calling Okular from a non-tex file"
    return ''
  end

  let masterDir = getcwd()
  let currentTeXFile = expand("%:p")
  let masterTeXFile = g:master
  let masterPDFFile = fnamemodify(masterTeXFile, ":t:r") . '.pdf'
  let viewer = 'okular'
  let execString = 'cd ' . masterDir . ' && ' . viewer . ' --unique "file:' . masterPDFFile . '\#src:' . line(".") . ' ' . currentTeXFile . '" &'

  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! Zathura()
  if &ft != 'tex'
    echo "calling Zathura from a non-tex file"
    return ''
  end

  let masterDir = getcwd()
  let masterTeXFile = g:master
  let masterPDFFile = fnamemodify(masterTeXFile, ":t:r") . '.pdf'
  let viewer = 'zathura -s -x "vim --servername synctex -n --remote-silent +\%{line} \%{input}"'
  let execString = 'cd ' . masterDir . ' && ' . viewer . ' ' . masterPDFFile . ' &'

  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! Qpdfview()
  if &ft != 'tex'
    echo "calling Qpdfview from a non-tex file"
    return ''
  end

  let masterDir = getcwd()
  let currentTeXFile = expand("%:t")
  let masterTeXFile = g:master
  let masterPDFFile = fnamemodify(masterTeXFile, ":t:r") . '.pdf'
  let viewer = 'qpdfview'
  let execString = 'cd ' . masterDir . ' && ' . viewer . ' --unique "' . masterPDFFile . '\#src:' . currentTeXFile . ':' . line(".") . ':0' . '" &'

  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! PdfViewer()
  if &ft != 'tex'
    echo "calling PdfViewer from a non-tex file"
    return ''
  end

  let masterDir = getcwd()
  let currentTeXFile = expand("%:t")
  let masterTeXFile = g:master
  let masterPDFFile = fnamemodify(masterTeXFile, ":t:r") . '.pdf'
  let viewer = 'pdfviewer'
  let execString = 'cd ' . masterDir . ' && ' . viewer . ' "file:' . masterPDFFile . '\#src:' . line(".") . ' ' . currentTeXFile . '" &'

  execute 'silent! !' execString
  redraw!
  return ''
endfunction

function! AdobeReader()
  if &ft != 'tex'
    echo "calling Adobe Reader from a non-tex file"
    return ''
  end

  let masterDir = getcwd()
  let masterTeXFile = g:master
  let masterPDFFile = fnamemodify(masterTeXFile, ":t:r") . '.pdf'
  if has('win32') || has('win64')
    if glob('C:/Program Files/Adobe/Reader */Reader/AcroRd32.exe') != ''
      let viewer = '"' . glob('C:/Program Files/Adobe/Reader */Reader/AcroRd32.exe') . '"'
    elseif glob('C:/Program Files (x86)/Adobe/Reader */Reader/AcroRd32.exe') != ''
      let viewer = '"' . glob('C:/Program Files (x86)/Adobe/Reader */Reader/AcroRd32.exe') . '"'
    else
      let viewer = 'pdfopen --rxi --file'
    endif
    let execString = 'cd /d ' . masterDir . ' && echo ' . viewer . ' ' . masterPDFFile . ' | cmd'
  elseif has('macunix')
    let viewer = 'open -a "Adobe Reader.app"'
    let execString = 'cd ' . masterDir . ' && ' . viewer . ' ' . masterPDFFile . ' &'
  else
    let viewer = 'acroread'
    let execString = 'cd ' . masterDir . ' && ' . viewer . ' ' . masterPDFFile . ' &'
  endif

  execute 'silent! !' execString
  redraw!
  return ''
endfunction

noremap <expr> <C-K>f TypesetFile()
noremap <expr> <C-K>b BibTeX()
noremap <expr> <C-K>i MakeIndex()
noremap <expr> <C-K>v ViewFile()
```

***

### Windows の場合 {#kf0c55a9}

タイプセットはデフォルトでは pdfpLaTeX を使用します．<br>
ビューアはデフォルトでは TeXworks を使用します．<br>

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#070;text-align:center">ノーマルモード</th><th style="color:#FFF;background-color:#070;text-align:center">機能</th></tr>
> <tr><td>&lt;Ctrl-K&gt; f</td><td>タイプセット</td></tr>
> <tr><td>&lt;Ctrl-K&gt; b</td><td>BibTeX</td></tr>
> <tr><td>&lt;Ctrl-K&gt; i</td><td>MakeIndex</td></tr>
> <tr><td>&lt;Ctrl-K&gt; v</td><td>プレビュー</td></tr>
> </tbody>
> </table>
>

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#070;text-align:center">コマンドラインモード</th><th style="color:#FFF;background-color:#070;text-align:center">機能</th></tr>
> <tr><td>:Typeset pdfplatex &lt;Enter&gt;</td><td>タイプセットを pdfpLaTeX に変更</td></tr>
> <tr><td>:Typeset pdfplatex2 &lt;Enter&gt;</td><td>タイプセットを pdfpLaTeX2 に変更</td></tr>
> <tr><td>:Typeset pdfuplatex &lt;Enter&gt;</td><td>タイプセットを pdfupLaTeX に変更</td></tr>
> <tr><td>:Typeset pdfuplatex2 &lt;Enter&gt;</td><td>タイプセットを pdfupLaTeX2 に変更</td></tr>
> <tr><td>:Typeset pdflatex &lt;Enter&gt;</td><td>タイプセットを pdfLaTeX に変更</td></tr>
> <tr><td>:Typeset lualatex &lt;Enter&gt;</td><td>タイプセットを LuaLaTeX に変更</td></tr>
> <tr><td>:Typeset luajitlatex &lt;Enter&gt;</td><td>タイプセットを LuaJITLaTeX に変更</td></tr>
> <tr><td>:Typeset xelatex &lt;Enter&gt;</td><td>タイプセットを XeLaTeX に変更</td></tr>
> <tr><td>:Viewer texworks &lt;Enter&gt;</td><td>ビューアを TeXworks に変更</td></tr>
> <tr><td>:Viewer sumatrapdf &lt;Enter&gt;</td><td>ビューアを SumatraPDF に変更</td></tr>
> <tr><td>:Viewer adobereader &lt;Enter&gt;</td><td>ビューアを Adobe Reader に変更</td></tr>
> <tr><td>:TeXmaster main.tex &lt;Enter&gt;</td><td>マスターファイルを main.tex に設定</td></tr>
> </tbody>
> </table>
>

### OS X の場合 {#v2d90738}

動作未確認です．<br>
タイプセットはデフォルトでは pdfpLaTeX を使用します．<br>
ビューアはデフォルトでは Preview を使用します．<br>

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#070;text-align:center">ノーマルモード</th><th style="color:#FFF;background-color:#070;text-align:center">機能</th></tr>
> <tr><td>&lt;Ctrl-K&gt; f</td><td>タイプセット</td></tr>
> <tr><td>&lt;Ctrl-K&gt; b</td><td>BibTeX</td></tr>
> <tr><td>&lt;Ctrl-K&gt; i</td><td>MakeIndex</td></tr>
> <tr><td>&lt;Ctrl-K&gt; v</td><td>プレビュー</td></tr>
> </tbody>
> </table>
>

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#070;text-align:center">コマンドラインモード</th><th style="color:#FFF;background-color:#070;text-align:center">機能</th></tr>
> <tr><td>:Typeset pdfplatex &lt;Enter&gt;</td><td>タイプセットを pdfpLaTeX に変更</td></tr>
> <tr><td>:Typeset pdfplatex2 &lt;Enter&gt;</td><td>タイプセットを pdfpLaTeX2 に変更</td></tr>
> <tr><td>:Typeset pdfuplatex &lt;Enter&gt;</td><td>タイプセットを pdfupLaTeX に変更</td></tr>
> <tr><td>:Typeset pdfuplatex2 &lt;Enter&gt;</td><td>タイプセットを pdfupLaTeX2 に変更</td></tr>
> <tr><td>:Typeset pdflatex &lt;Enter&gt;</td><td>タイプセットを pdfLaTeX に変更</td></tr>
> <tr><td>:Typeset lualatex &lt;Enter&gt;</td><td>タイプセットを LuaLaTeX に変更</td></tr>
> <tr><td>:Typeset luajitlatex &lt;Enter&gt;</td><td>タイプセットを LuaJITLaTeX に変更</td></tr>
> <tr><td>:Typeset xelatex &lt;Enter&gt;</td><td>タイプセットを XeLaTeX に変更</td></tr>
> <tr><td>:Viewer preview &lt;Enter&gt;</td><td>ビューアを Preview に変更</td></tr>
> <tr><td>:Viewer texshop &lt;Enter&gt;</td><td>ビューアを TeXShop に変更</td></tr>
> <tr><td>:Viewer texworks &lt;Enter&gt;</td><td>ビューアを TeXworks に変更</td></tr>
> <tr><td>:Viewer skim &lt;Enter&gt;</td><td>ビューアを Skim に変更</td></tr>
> <tr><td>:Viewer adobereader &lt;Enter&gt;</td><td>ビューアを Adobe Reader に変更</td></tr>
> <tr><td>:TeXmaster main.tex &lt;Enter&gt;</td><td>マスターファイルを main.tex に設定</td></tr>
> </tbody>
> </table>
>

### Linux の場合 {#q23aa2de}

タイプセットはデフォルトでは pdfpLaTeX を使用します．<br>
ビューアはデフォルトでは Evince を使用します．<br>
fwdevince は [Evince - TeX Wiki](/Evince/) の fwdevince を使用します．<br>
GVim を使用するとエラーが発生しても表示されずに GVim が固まったように見える (x を入力して &lt;Enter> を入力すると OK です) ので，コンソール版の Vim を使用することをおすすめします．<br>

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#070;text-align:center">ノーマルモード</th><th style="color:#FFF;background-color:#070;text-align:center">機能</th></tr>
> <tr><td>&lt;Ctrl-K&gt; f</td><td>タイプセット</td></tr>
> <tr><td>&lt;Ctrl-K&gt; b</td><td>BibTeX</td></tr>
> <tr><td>&lt;Ctrl-K&gt; i</td><td>MakeIndex</td></tr>
> <tr><td>&lt;Ctrl-K&gt; v</td><td>プレビュー</td></tr>
> </tbody>
> </table>
>

> <table>
> <tbody>
> <tr><th style="color:#FFF;background-color:#070;text-align:center">コマンドラインモード</th><th style="color:#FFF;background-color:#070;text-align:center">機能</th></tr>
> <tr><td>:Typeset pdfplatex &lt;Enter&gt;</td><td>タイプセットを pdfpLaTeX に変更</td></tr>
> <tr><td>:Typeset pdfplatex2 &lt;Enter&gt;</td><td>タイプセットを pdfpLaTeX2 に変更</td></tr>
> <tr><td>:Typeset pdfuplatex &lt;Enter&gt;</td><td>タイプセットを pdfupLaTeX に変更</td></tr>
> <tr><td>:Typeset pdfuplatex2 &lt;Enter&gt;</td><td>タイプセットを pdfupLaTeX2 に変更</td></tr>
> <tr><td>:Typeset pdflatex &lt;Enter&gt;</td><td>タイプセットを pdfLaTeX に変更</td></tr>
> <tr><td>:Typeset lualatex &lt;Enter&gt;</td><td>タイプセットを LuaLaTeX に変更</td></tr>
> <tr><td>:Typeset luajitlatex &lt;Enter&gt;</td><td>タイプセットを LuaJITLaTeX に変更</td></tr>
> <tr><td>:Typeset xelatex &lt;Enter&gt;</td><td>タイプセットを XeLaTeX に変更</td></tr>
> <tr><td>:Viewer evince &lt;Enter&gt;</td><td>ビューアを Evince に変更</td></tr>
> <tr><td>:Viewer fwdevince &lt;Enter&gt;</td><td>ビューアを fwdevince に変更</td></tr>
> <tr><td>:Viewer texworks &lt;Enter&gt;</td><td>ビューアを TeXworks に変更</td></tr>
> <tr><td>:Viewer okular &lt;Enter&gt;</td><td>ビューアを Okular に変更</td></tr>
> <tr><td>:Viewer zathura &lt;Enter&gt;</td><td>ビューアを zathura に変更</td></tr>
> <tr><td>:Viewer qpdfview &lt;Enter&gt;</td><td>ビューアを qpdfview に変更</td></tr>
> <tr><td>:Viewer pdfviewer &lt;Enter&gt;</td><td>ビューアを PdfViewer に変更</td></tr>
> <tr><td>:Viewer adobereader &lt;Enter&gt;</td><td>ビューアを Adobe Reader に変更</td></tr>
> <tr><td>:TeXmaster main.tex &lt;Enter&gt;</td><td>マスターファイルを main.tex に設定</td></tr>
> </tbody>
> </table>
>
