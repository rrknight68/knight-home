/* Knight Family Homes — persistent residence selector.
   Usage (right after <body>, after the data files load):
     <script src="/assets/residence-bar.js" data-active="westway|bayshore|compare"></script>
   Residences are listed by meta.order from window.KFH.residences. */
(function () {
  var script = document.currentScript;
  var active = (script && script.getAttribute('data-active')) || '';
  var all = (window.KFH && window.KFH.residences) || {};
  var list = Object.keys(all).map(function (k) { return all[k]; })
    .sort(function (a, b) { return a.meta.order - b.meta.order; });

  var bar = document.createElement('div');
  bar.className = 'kfh-bar';
  bar.setAttribute('role', 'navigation');
  bar.setAttribute('aria-label', 'Residence selector');

  var html = '<a class="kfh-bar-brand" href="/">Knight Family Homes</a><div class="kfh-bar-tabs">';
  list.forEach(function (r) {
    var m = r.meta;
    var name = m.selectorLabel.split(' — ')[0];
    html += '<a class="kfh-tab' + (active === m.id ? ' active' : '') + '" href="' + m.href + '"' +
      (active === m.id ? ' aria-current="page"' : '') + '>' + name +
      ' <span class="kfh-badge' + (m.isDefault ? '' : ' alt') + '">' + m.role + '</span></a>';
  });
  html += '<a class="kfh-tab kfh-tab-compare' + (active === 'compare' ? ' active' : '') + '" href="/compare">Compare</a></div>';
  bar.innerHTML = html;

  document.body.insertBefore(bar, document.body.firstChild);
  document.body.classList.add('kfh-has-bar');
})();
