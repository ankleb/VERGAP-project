// Small helpers for the VERGAP website. No libraries needed.

// "Last updated" dates for the edition and transcriptions.
// For each <span data-gh-repo="..." data-gh-path="...">, ask GitHub when that
// file in ankleb/VERGAP was last changed, and show the date. This happens in
// the visitor's browser, so the date is always current without rebuilding the
// website. If GitHub cannot be reached, nothing is shown.
(function () {
  var spans = document.querySelectorAll("[data-gh-path]");
  spans.forEach(function (el) {
    var api = "https://api.github.com/repos/" + el.dataset.ghRepo +
      "/commits?per_page=1&path=" + encodeURIComponent(el.dataset.ghPath);
    fetch(api)
      .then(function (r) { return r.ok ? r.json() : []; })
      .then(function (commits) {
        if (!commits.length) return;
        var d = new Date(commits[0].commit.committer.date);
        el.textContent = "Last updated " + d.toLocaleDateString("en-GB",
          { day: "numeric", month: "long", year: "numeric" });
      })
      .catch(function () {});
  });
})();

// Drop-down menus: only one open at a time; clicking elsewhere or Esc closes them.
(function () {
  var menus = document.querySelectorAll(".menu details");
  function closeAll(except) {
    menus.forEach(function (d) { if (d !== except) d.removeAttribute("open"); });
  }
  menus.forEach(function (d) {
    d.addEventListener("toggle", function () { if (d.open) closeAll(d); });
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".menu details")) closeAll(null);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeAll(null);
  });
})();
