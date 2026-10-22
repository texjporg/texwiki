// Old PukiWiki URLs. GitHub Pages ignores the query string and serves the
// home page for "/?PageName", so the home page and the 404 page run this.
//
//   /?PageName                                   -> /PageName/
//   /?cmd=read&page=P (edit, backup, diff, ...)   -> /P/
//   /?plugin=attach&pcmd=open&file=F&refer=P      -> /attach/P/F
//   /?plugin=ref&page=P&src=F                     -> /attach/P/F
//   /?cmd=list                                    -> /ページ一覧/
//   /?cmd=rss                                     -> /index.xml
//   /OldName (renamed pages, from redirects.json) -> new URL
//
// PukiWiki decoded names with rawurldecode: "+" is a literal plus sign.
(function () {
  "use strict";
  var search = location.search;
  var path = location.pathname;

  function decode(s) {
    try { return decodeURIComponent(s); } catch (e) { return s; }
  }
  function encodePath(name) {
    return "/" + name.split("/").map(encodeURIComponent).join("/") + "/";
  }
  function go(url) {
    location.replace(url);
  }
  function withRedirects(fn) {
    var req = new XMLHttpRequest();
    req.open("GET", "/redirects.json", true);
    req.onreadystatechange = function () {
      if (req.readyState !== 4) return;
      var table = {};
      if (req.status === 200) {
        try { table = JSON.parse(req.responseText); } catch (e) { table = {}; }
      }
      fn(table);
    };
    req.send();
  }
  function pageUrl(name, table) {
    name = name.replace(/\/+$/, "");
    if (!name) return "/";
    if (Object.prototype.hasOwnProperty.call(table, name)) return table[name];
    return encodePath(name);
  }

  if (search.length > 1) {
    var raw = search.slice(1).replace(/=+$/, "");
    var parts = raw.split("&");
    var params = {};
    parts.forEach(function (kv) {
      var i = kv.indexOf("=");
      if (i < 0) params[decode(kv)] = "";
      else params[decode(kv.slice(0, i))] = decode(kv.slice(i + 1));
    });
    var first = parts[0];
    var target = null;
    if (first.indexOf("=") < 0) {
      target = { page: decode(first) };
    } else if (params.cmd === "list") {
      target = { url: "/ページ一覧/" };
    } else if (params.cmd === "rss") {
      target = { url: "/index.xml" };
    } else if (params.cmd === "search") {
      target = { url: "/" };
    } else if (params.cmd && params.page) {
      target = { page: params.page };
    } else if (params.plugin === "attach" && params.pcmd === "open" && params.file && params.refer) {
      target = { url: "/attach" + encodePath(params.refer).replace(/\/$/, "") + "/" + encodeURIComponent(params.file) };
    } else if (params.plugin === "ref" && params.src && params.page) {
      target = { url: "/attach" + encodePath(params.page).replace(/\/$/, "") + "/" + encodeURIComponent(params.src) };
    } else if (params.plugin && (params.page || params.refer)) {
      target = { page: params.page || params.refer };
    } else {
      target = { url: "/" };
    }
    if (target.url) {
      go(target.url);
    } else {
      withRedirects(function (table) { go(pageUrl(target.page, table)); });
    }
    return;
  }

  // Unknown path (the 404 page): a renamed page?
  if (document.body && document.body.classList.contains("not-found")) {
    var name = decode(path).replace(/^\/+/, "").replace(/\/+$/, "");
    if (name) {
      withRedirects(function (table) {
        if (Object.prototype.hasOwnProperty.call(table, name)) go(table[name]);
      });
    }
  }
})();
