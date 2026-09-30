/* Knight Family Homes — Compare page. Every value comes from each residence's
   data file (compare{} block). No winner is declared; the default residence is
   labelled "Current Preference" only. */
(function () {
  var all = window.KFH.residences;
  var list = Object.keys(all).map(function (k) { return all[k]; }).sort(function (a, b) { return a.meta.order - b.meta.order; });
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  var rows = [
    ['property', 'Property'], ['waterfront', 'Waterfront Experience'], ['size', 'House Size'], ['architecture', 'Architecture'],
    ['bedrooms', 'Bedrooms'], ['garage', 'Garage'], ['pool', 'Pool'], ['outdoor', 'Outdoor Living'], ['resilience', 'Resilience'],
    ['lifestyle', 'Lifestyle'], ['specialty', 'Specialty Rooms'], ['wellness', 'Wellness'], ['technology', 'Technology'],
    ['cost', 'Est. Construction Cost'], ['advantages', 'Advantages'], ['tradeoffs', 'Tradeoffs']
  ];
  var h = '<table class="kfh-compare"><thead><tr><th></th>' + list.map(function (r) {
    var m = r.meta;
    return '<th><a href="' + m.href + '"><span class="kfh-badge' + (m.isDefault ? '' : ' alt') + '">' + esc(m.isDefault ? 'Current Preference' : m.role) + '</span>' +
      '<span class="cmp-name">' + esc(m.name) + '</span><span class="cmp-sub">' + esc(m.address) + ' · ' + esc(m.cityStateZip) + '</span></a></th>';
  }).join('') + '</tr></thead><tbody>';
  rows.forEach(function (row) {
    h += '<tr><td>' + row[1] + '</td>' + list.map(function (r) {
      var v = r.compare[row[0]];
      return '<td' + (/TBD/.test(v) ? ' class="kfh-tbd"' : '') + '>' + esc(v || '—') + '</td>';
    }).join('') + '</tr>';
  });
  h += '</tbody></table><p class="kfh-compare-note">Values are pulled directly from each residence\'s data file (data/residences/*.js). Bayshore figures are quoted from its existing design brief and owner-builder estimate; where that brief lists two conditioned-area figures, both are shown. Westway is shown as the current preference only. This page does not declare a winner.</p>';
  document.getElementById('kfh-compare').innerHTML = h;
})();
