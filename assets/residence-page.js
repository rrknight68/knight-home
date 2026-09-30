/* Knight Family Homes — shared residence page renderer.
   Renders a full residence page from window.KFH.residences[<id>].
   Usage: <div id="kfh-root"></div>
          <script src="/assets/residence-page.js" data-residence="westway"></script>
   Adding a residence = adding a data file; no page-specific markup. */
(function () {
  var id = document.currentScript.getAttribute('data-residence');
  var R = window.KFH.residences[id];
  var root = document.getElementById('kfh-root');

  /* ---------- helpers ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function fmtRange(r) { return r ? r[0].toLocaleString() + (r[1] !== r[0] ? '–' + r[1].toLocaleString() : '') + ' SF' : '—'; }
  function isTbd(v) { return /TBD/i.test(v); }
  function list(items, cls) { return items && items.length ? '<ul class="kfh-list ' + (cls || '') + '">' + items.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>' : ''; }
  function chips(items, cls) { return '<div class="kfh-chips">' + items.map(function (i) { return '<span class="kfh-chip ' + (cls || '') + '">' + esc(i) + '</span>'; }).join('') + '</div>'; }
  function h3(t) { return '<div class="kfh-h3">' + esc(t) + '</div>'; }
  function rule(t, lead) { return '<div class="kfh-rule">' + (lead ? '<strong>' + esc(lead) + ' · </strong>' : '') + esc(t) + '</div>'; }
  function block(inner) { return '<div class="kfh-block">' + inner + '</div>'; }
  function seq(s, cls) {
    if (!s) return '';
    var out = '<div class="kfh-seq ' + (cls || '') + '">';
    s.steps.forEach(function (st, i) {
      if (i) out += '<span class="kfh-seq-arrow">→' + (s.links && s.links[i - 1] ? '<small>' + esc(s.links[i - 1]) + '</small>' : '') + '</span>';
      out += '<span class="kfh-seq-step">' + esc(st) + '</span>';
    });
    out += '</div>';
    if (s.alt) out += '<div class="kfh-seq-alt">' + esc(s.alt) + '</div>';
    return out;
  }
  function stats(arr) { return '<div class="kfh-stats">' + arr.map(function (s) { return '<div class="kfh-stat"><div class="kfh-stat-val">' + esc(s.val) + '</div><div class="kfh-stat-label">' + esc(s.label) + '</div></div>'; }).join('') + '</div>'; }
  function cards(items, color) {
    return '<div class="cards-grid">' + items.map(function (c, i) {
      return '<div class="card ' + (color || 'gold') + '"><span class="card-number">' + String(i + 1).padStart(2, '0') + '</span>' +
        (c.tag ? '<div class="card-tag">' + esc(c.tag) + '</div>' : '') +
        '<div class="card-title">' + esc(c.title) + '</div><div class="card-body">' + esc(c.body) + '</div></div>';
    }).join('') + '</div>';
  }
  function roomCard(r) {
    var feature = /Hidden|Specialty/.test(r.tag);
    return '<div class="kfh-room' + (feature ? ' feature' : '') + '" id="room-' + r.id + '">' +
      '<div class="kfh-room-tag">' + esc(r.tag) + '</div>' +
      '<div class="kfh-room-name">' + esc(r.name) + '</div>' +
      '<div class="kfh-room-sf">' + (r.sf ? fmtRange(r.sf) : '') + (r.sfNote ? '<small>' + esc(r.sfNote) + '</small>' : '') + '</div>' +
      '<div class="kfh-room-sum">' + esc(r.summary) + '</div>' + list(r.features) + '</div>';
  }
  function rooms(filter) { return '<div class="kfh-rooms">' + R.rooms.filter(filter).map(roomCard).join('') + '</div>'; }
  var levelName = { ground: 'Ground', l2: 'Level 2', l3: 'Level 3', roof: 'Roof' };

  /* ---------- section renderers (by type) ---------- */
  var T = {
    overview: function () {
      var p = R.program;
      return block('<div class="kfh-quote">' + esc(R.vision.statement) + '</div>') +
        block(stats([
          { val: fmtRange(p.conditioned).replace(' SF', ''), label: 'SF Conditioned (target)' },
          { val: p.bedrooms, label: 'Bedrooms' },
          { val: p.fullBaths, label: 'Full Baths' },
          { val: p.powderRooms, label: 'Powder Rooms' },
          { val: '4-Car', label: 'Concealed Parking' },
          { val: R.status.phase, label: 'Status' }
        ])) +
        block(h3(R.sequences.hidden.label) + seq(R.sequences.hidden, 'hidden-seq')) +
        block(h3(R.sequences.view.label) + seq(R.sequences.view));
    },
    property: function () {
      return block('<table class="kfh-kv">' + R.property.rows.map(function (r) {
        return '<tr><td>' + esc(r[0]) + '</td><td class="' + (isTbd(r[1]) ? 'kfh-tbd' : '') + '">' + esc(r[1]) + '</td></tr>';
      }).join('') + '</table>' + rule(R.property.note));
    },
    vision: function () {
      return block(h3('Design Elements') + chips(R.vision.elements)) +
        block('<div class="vision"><p class="vision-text">' + esc(R.vision.statement) + '</p><p class="vision-attr">' + esc(R.vision.attribution) + '</p></div>');
    },
    exterior: function () {
      var e = R.exterior;
      return block('<div class="kfh-two">' +
        '<div class="kfh-panel"><div class="kfh-panel-title">' + esc(e.street.title) + '</div>' + list(e.street.items) + rule(e.street.rule, 'Rule') + '</div>' +
        '<div class="kfh-panel"><div class="kfh-panel-title">' + esc(e.gulf.title) + '</div>' + list(e.gulf.items) + '</div></div>') +
        block(h3(R.sequences.hierarchy.label) + seq(R.sequences.hierarchy));
    },
    floorplans: function () {
      var p = R.program;
      return block('<div class="kfh-levels">' + p.levels.map(function (l) {
        return '<div class="kfh-level"><div class="kfh-level-name">' + esc(l.name) + '</div><div class="kfh-level-sf">' + (l.sf ? fmtRange(l.sf) : 'TBD') + '</div>' +
          '<div class="kfh-level-note">' + esc(l.sfNote) + '</div><div class="kfh-level-purpose">' + esc(l.purpose) + '</div></div>';
      }).join('') + '</div>') +
        block('<table class="kfh-kv">' +
          '<tr><td>Bedrooms</td><td>' + p.bedrooms + ': ' + esc(p.bedroomDetail) + '</td></tr>' +
          '<tr><td>Bathrooms</td><td>' + esc(p.fullBaths) + ' full · ' + p.powderRooms + ' powder</td></tr>' +
          '<tr><td>Parking</td><td>' + esc(p.garage) + '</td></tr>' +
          '<tr><td>' + esc(R.circulation.elevator.title) + '</td><td>' + esc(R.circulation.elevator.body) + '</td></tr>' +
          '<tr><td>' + esc(R.circulation.stair.title) + '</td><td>' + esc(R.circulation.stair.features.join(' · ')) + '</td></tr>' +
          '<tr><td>Floor plan drawings</td><td class="kfh-tbd">Pending architect. Program above is the design brief.</td></tr></table>');
    },
    ground: function () {
      var g = R.ground;
      return block('<div class="kfh-quote">' + esc(g.philosophy) + '</div><p class="section-intro" style="margin-bottom:0">' + esc(g.intro) + '</p>') +
        block(h3('Ground Level Program') + list(g.include, 'cols')) +
        block(h3('Do NOT locate at flood-vulnerable elevation (wherever practical)') + list(g.keepAbove, 'cols warn'));
    },
    level: function (s) {
      var out = '';
      if (s.level === 'l2') {
        out += block(h3(R.sequences.view.label) + seq(R.sequences.view));
        out += block(h3(R.sequences.hidden.label) + seq(R.sequences.hidden, 'hidden-seq'));
      }
      if (s.level === 'l3') out += block(h3('Primary Suite · ' + fmtRange(R.primarySuiteTotal) + ' total'));
      out += block(rooms(function (r) { return r.level === s.level; }));
      if (s.level === 'l3') {
        out += block(h3('Circulation') + '<div class="kfh-two"><div class="kfh-panel"><div class="kfh-panel-title">' + esc(R.circulation.elevator.title) + '</div><p class="card-body">' + esc(R.circulation.elevator.body) + '</p></div>' +
          '<div class="kfh-panel"><div class="kfh-panel-title">' + esc(R.circulation.stair.title) + '</div>' + list(R.circulation.stair.features) + '</div></div>');
        out += block(h3('Roof Terrace · Subject to Zoning / Height') + rooms(function (r) { return r.level === 'roof'; }));
      }
      return out;
    },
    pool: function () {
      return block('<div class="kfh-options">' + R.poolOptions.map(function (o) {
        var pref = o.badge === 'Preferred';
        return '<div class="kfh-option' + (pref ? ' pref' : '') + '"><div class="kfh-option-label">Option ' + o.id + ' <span class="kfh-badge' + (pref ? '' : ' alt') + '">' + esc(o.badge) + '</span></div>' +
          '<div class="kfh-option-name">' + esc(o.name) + '</div>' +
          '<div class="kfh-option-meta"><span>' + esc(o.size) + '</span><span>' + esc(o.water) + '</span></div>' +
          '<p class="card-body" style="margin-bottom:16px">' + esc(o.summary) + '</p>' +
          seq({ steps: o.sequence }) + (o.features.length ? '<div style="margin-top:18px">' + list(o.features) + '</div>' : '') +
          rule(o.structural, 'Structure') + '</div>';
      }).join('') + '</div>');
    },
    roomspecs: function () {
      var out = '<table class="kfh-spec"><thead><tr><td>Room</td><td>Level</td><td>Target Area</td><td>Key Specifications</td></tr></thead><tbody>';
      ['l2', 'l3', 'roof'].forEach(function (lv) {
        out += '<tr class="lvl"><td colspan="4">' + levelName[lv] + '</td></tr>';
        R.rooms.filter(function (r) { return r.level === lv; }).forEach(function (r) {
          out += '<tr><td><a href="#room-' + r.id + '" style="color:inherit;text-decoration:none">' + esc(r.name) + '</a></td><td>' + levelName[r.level] + '</td>' +
            '<td class="num">' + (r.sf ? fmtRange(r.sf) : '—') + (r.sfNote ? '<br><small style="font-family:var(--font-ui);font-size:10px;color:var(--sand-dark)">' + esc(r.sfNote) + '</small>' : '') + '</td>' +
            '<td>' + esc(r.features.join(' · ') || r.summary) + '</td></tr>';
        });
      });
      return block(out + '</tbody></table>');
    },
    materials: function () {
      return block('<div class="kfh-swatches">' + R.materials.map(function (m) {
        return '<div class="kfh-swatch" style="background:' + m.swatch + ';color:' + m.ink + '"><div class="kfh-swatch-group">' + esc(m.group) + '</div><div class="kfh-swatch-items">' + m.items.map(esc).join('<br>') + '</div></div>';
      }).join('') + '</div>' + rule(R.materialsRule)) +
        block(h3('Lighting') + stats(R.lighting.temps) + '<div style="margin-top:20px">' + list(R.lighting.items, 'cols') + '</div>' + rule(R.lighting.rule));
    },
    resilience: function () {
      return block('<div class="kfh-quote">' + esc(R.resilience.intro) + '</div>') + block(cards(R.resilience.items.map(function (i) { return { title: i.title, body: i.body }; }), 'teal'));
    },
    mechanical: function () {
      return block('<div class="kfh-two"><div class="kfh-panel"><div class="kfh-panel-title">HVAC</div>' + list(R.mechanical.hvac) + '</div>' +
        '<div class="kfh-panel"><div class="kfh-panel-title">Water</div>' + list(R.mechanical.water) + '</div></div>');
    },
    energy: function () {
      return block(stats(R.energy.stats)) + block(list(R.energy.items, 'cols') + rule(R.energy.rule));
    },
    list: function (s) {
      var d = R[s.key];
      return block(list(d.items, 'cols') + (d.rule ? rule(d.rule) : ''));
    },
    wellness: function () {
      return block(seq(R.sequences.morning)) +
        block(rooms(function (r) { return ['fitness', 'sauna', 'cold-plunge', 'primary-terrace'].indexOf(r.id) > -1; }));
    },
    landscape: function () {
      return block(chips(R.landscape.species) + rule(R.landscape.rule));
    },
    renderings: function () {
      return block('<div class="kfh-gallery">' + R.renderings.map(function (g) {
        return '<figure class="kfh-shot' + (g.src ? '' : ' empty') + '">' + (g.src ? '<img src="' + esc(g.src) + '" alt="' + esc(g.cat) + '" loading="lazy">' : '') +
          '<figcaption class="kfh-shot-cap"><div class="kfh-shot-cat">' + esc(g.cat) + '</div>' + (g.caption ? '<div class="kfh-shot-note">' + esc(g.caption) + '</div>' : '') + '</figcaption></figure>';
      }).join('') + '</div>');
    },
    budget: function () { return '<p class="section-intro">' + esc(R.budget.intro) + '</p>'; },
    decisions: function () {
      return block('<table class="kfh-decisions">' + R.decisions.map(function (d, i) {
        return '<tr><td>' + String(i + 1).padStart(2, '0') + '</td><td>' + esc(d.topic) + '</td><td><span class="kfh-status' + (isTbd(d.status) ? ' tbd' : '') + '">' + esc(d.status) + '</span></td><td>' + esc(d.note) + '</td></tr>';
      }).join('') + '</table>');
    },
    notes: function () {
      return block('<div class="kfh-notes">' + R.architectNotes.map(function (n) { return '<div class="kfh-note">' + esc(n) + '</div>'; }).join('') + '</div>') +
        block(h3('Revision Log') + '<table class="kfh-kv">' + R.revisions.map(function (v) { return '<tr><td>' + esc(v.date) + '</td><td>' + esc(v.note) + '</td></tr>'; }).join('') + '</table>');
    }
  };

  /* ---------- page ---------- */
  var m = R.meta, html = '';
  html += '<div class="hero kfh-hero"><div class="hero-bg"></div><div class="hero-pattern"></div><div class="moroccan-top"></div>' +
    '<span class="kfh-pref">' + esc(R.status.preference) + ' · ' + esc(m.role) + '</span>' +
    '<p class="hero-eyebrow">' + esc(m.city) + ' · ' + esc(m.waterfront) + ' · ' + esc(m.address) + '</p>' +
    '<h1 class="hero-title">' + esc(m.name.split(' ')[0]) + ' <em>' + esc(m.name.split(' ').slice(1).join(' ')) + '</em></h1>' +
    '<p class="hero-subtitle">' + esc(m.philosophy) + '</p>' +
    '<div class="hero-divider"><span></span><div class="diamond"></div><span></span></div>' +
    '<div class="hero-stats">' + R.heroStats.map(function (s) { return '<div class="hero-stat"><span class="hero-stat-val">' + esc(s.val) + '</span><span class="hero-stat-label">' + esc(s.label) + '</span></div>'; }).join('') + '</div></div>';

  html += '<nav class="kfh-subnav" aria-label="' + esc(m.name) + ' sections"><div class="kfh-subnav-name">' + esc(m.name) + '</div><ul class="kfh-subnav-links">' +
    R.sections.map(function (s) { return '<li><a href="#' + s.id + '">' + esc(s.nav) + '</a></li>'; }).join('') + '</ul></nav>';

  R.sections.forEach(function (s, i) {
    if (i) html += '<div class="moroccan-divider"></div>';
    html += '<section id="' + s.id + '"><div class="section-label">' + esc(s.label) + '</div><h2 class="section-title">' + s.title + '</h2>' +
      (s.intro ? '<p class="section-intro">' + esc(s.intro) + '</p>' : '') + (T[s.type] ? T[s.type](s) : '') + '</section>';
    if (s.type === 'budget') html += '<div id="kfh-budget"></div>';
  });

  html += '<footer><div><div class="footer-logo">Knight Family Homes</div></div><div class="footer-meta">' + esc(m.fullName) + '<br>' + esc(m.address) + ' · ' + esc(m.cityStateZip) + '</div></footer>';
  root.innerHTML = html;
  document.title = m.name + ' · Knight Family Homes';
  /* content is rendered after load, so honour deep links (#budget etc.) manually */
  if (location.hash) {
    var target = document.getElementById(location.hash.slice(1));
    if (target) requestAnimationFrame(function () { target.scrollIntoView({ block: 'start' }); });
  }

  /* ---------- sub-nav active state ---------- */
  var links = [].slice.call(document.querySelectorAll('.kfh-subnav-links a'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) {
          var on = a.getAttribute('href') === '#' + e.target.id;
          a.classList.toggle('on', on);
          if (on && a.scrollIntoView && a.parentNode.parentNode.scrollWidth > a.parentNode.parentNode.clientWidth) {
            var ul = a.parentNode.parentNode; ul.scrollLeft = a.offsetLeft - ul.clientWidth / 2 + a.offsetWidth / 2;
          }
        });
      });
    }, { rootMargin: '-110px 0px -70% 0px' });
    R.sections.forEach(function (s) { var el = document.getElementById(s.id); if (el) io.observe(el); });
  }

  /* ---------- budget engine (same UX as Bayshore; keyed by line id, namespaced per residence) ---------- */
  (function budget() {
    var host = document.getElementById('kfh-budget');
    if (!host) return;
    var KEY = m.budgetStorageKey;
    var B = R.budget;
    function parse(v) { if (v == null || v === '') return null; var n = parseFloat(String(v).replace(/[$,]/g, '')); return isNaN(n) ? null : n; }
    function money(n) { return n == null ? 'TBD' : '$' + Math.round(n).toLocaleString(); }
    function load() { try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { return {}; } }
    function save(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} }
    var saved = load();

    var out = '<div class="budget-wrap"><div class="budget-live-total">' +
      '<div class="blt-item"><div class="blt-label">Est. Budget Total</div><div class="blt-val" data-b="est">TBD</div></div>' +
      '<div class="blt-item"><div class="blt-label">Your Total (entered)</div><div class="blt-val" data-b="yours">$0</div></div>' +
      '<div class="blt-item"><div class="blt-label">Variance (Est − Yours)</div><div class="blt-val" data-b="var">—</div></div>' +
      '<div class="blt-item"><div class="blt-label">Lines Priced</div><div class="blt-val" data-b="count">0 / 0</div></div></div>' +
      '<div class="budget-controls"><span class="budget-controls-label">Your Numbers</span>' +
      '<button class="budget-ctrl-btn" data-act="expand">Expand All</button><button class="budget-ctrl-btn" data-act="collapse">Collapse All</button>' +
      '<button class="budget-ctrl-btn" data-act="csv">Export CSV</button><button class="budget-ctrl-btn danger" data-act="clear">Clear All</button>' +
      '<span class="budget-saved-indicator">✓ Saved</span></div>';
    B.categories.forEach(function (c) {
      var catEst = c.lines.every(function (l) { return l.est != null; }) ? c.lines.reduce(function (a, l) { return a + l.est; }, 0) : null;
      out += '<div class="budget-category" data-cat="' + c.id + '"><div class="budget-cat-header"><div class="budget-cat-label"><span class="budget-cat-toggle">▾</span> ' + esc(c.name) + '</div>' +
        '<div class="budget-cat-total" data-orig="' + money(catEst) + ' est.">' + money(catEst) + ' <span>est.</span></div></div>' +
        '<table class="budget-table"><thead><tr><td>Line Item</td><td>Scope / Notes</td><td>Qty</td><td>Unit Rate</td><td>Est. Total</td><td class="your-col">Your #</td><td class="var-col">± Variance</td></tr></thead><tbody>';
      c.lines.forEach(function (l) {
        var k = c.id + '.' + l.id;
        out += '<tr><td>' + esc(l.item) + '</td><td>' + esc(l.scope) + '</td><td>' + esc(l.qty || '—') + '</td><td>' + esc(l.rate || '—') + '</td>' +
          '<td class="est-cell' + (l.est == null ? ' kfh-budget-tbd' : '') + '">' + money(l.est) + '</td>' +
          '<td class="your-cell"><input type="text" class="budget-input' + (saved[k] ? ' has-value' : '') + '" placeholder="—" data-key="' + k + '" data-est="' + (l.est == null ? '' : l.est) + '" value="' + esc(saved[k] || '') + '"></td><td class="var-cell"></td></tr>';
      });
      out += '</tbody></table></div>';
    });
    out += '<div class="budget-summary"><div class="budget-total-bar"><div><div class="budget-total-label">Total Estimated Construction Cost · Westway</div>' +
      '<div class="budget-total-val" data-b="grand">TBD</div><div class="budget-total-psf">No estimate provided yet; totals appear as line estimates are added to the data file.</div></div></div>' +
      '<div class="budget-disclaimer"><strong>Basis:</strong> Line items follow the Westway program. Estimates are intentionally blank (TBD) until priced. <strong>Your #</strong> entries save in this browser only (key <code>' + esc(KEY) + '</code>) and are independent of the Bayshore budget.</div></div></div>';
    host.innerHTML = out;

    var inputs = [].slice.call(host.querySelectorAll('.budget-input'));
    function recalc() {
      var est = 0, estN = 0, yours = 0, n = 0;
      inputs.forEach(function (inp) {
        var e = parse(inp.dataset.est), y = parse(inp.value), v = inp.closest('tr').querySelector('.var-cell');
        inp.classList.toggle('has-value', !!inp.value.trim());
        if (e != null) { est += e; estN++; }
        if (y != null) { yours += y; n++; }
        if (y != null && e != null) {
          var d = e - y, pct = ((d / e) * 100).toFixed(1);
          v.innerHTML = d > 0 ? '<span class="var-positive">▼ ' + money(d) + ' (' + pct + '%)</span>' : d < 0 ? '<span class="var-negative">▲ ' + money(-d) + ' (' + Math.abs(pct) + '%)</span>' : '<span class="var-zero">= Match</span>';
        } else v.innerHTML = '';
      });
      var allEst = estN === inputs.length;
      host.querySelector('[data-b="est"]').textContent = allEst ? money(est) : (estN ? money(est) + ' + TBD' : 'TBD');
      host.querySelector('[data-b="grand"]').textContent = allEst ? money(est) : 'TBD';
      host.querySelector('[data-b="yours"]').textContent = money(yours);
      host.querySelector('[data-b="count"]').textContent = n + ' / ' + inputs.length;
      var ve = host.querySelector('[data-b="var"]');
      if (n && allEst) { var dd = est - yours; ve.textContent = (dd >= 0 ? '▼ ' : '▲ ') + money(Math.abs(dd)); ve.className = 'blt-val ' + (dd > 0 ? 'under' : dd < 0 ? 'over' : ''); }
      else { ve.textContent = '—'; ve.className = 'blt-val'; }
      [].forEach.call(host.querySelectorAll('.budget-category'), function (cat) {
        var t = 0, any = false;
        [].forEach.call(cat.querySelectorAll('.budget-input'), function (i) { var y = parse(i.value); if (y != null) { t += y; any = true; } });
        var el = cat.querySelector('.budget-cat-total'), orig = el.dataset.orig;
        el.innerHTML = any ? money(t) + ' <span>yours</span> <span style="color:var(--sand-dark);font-size:11px;margin-left:8px;">' + esc(orig) + '</span>' : esc(orig.replace(' est.', '')) + ' <span>est.</span>';
      });
    }
    function persist() {
      var d = {};
      inputs.forEach(function (i) { if (i.value.trim()) d[i.dataset.key] = i.value.trim(); });
      save(d);
      var ind = host.querySelector('.budget-saved-indicator');
      ind.classList.add('show'); clearTimeout(ind._t); ind._t = setTimeout(function () { ind.classList.remove('show'); }, 2000);
    }
    function toggleAll(open) {
      [].forEach.call(host.querySelectorAll('.budget-table'), function (t) { t.classList.toggle('open', open); });
      [].forEach.call(host.querySelectorAll('.budget-cat-toggle'), function (t) { t.classList.toggle('open', open); });
    }
    function csv() {
      var rows = [['Category', 'Line Item', 'Scope', 'Qty', 'Unit Rate', 'Est Total', 'Your Number', 'Variance']];
      B.categories.forEach(function (c) {
        c.lines.forEach(function (l) {
          var inp = host.querySelector('[data-key="' + c.id + '.' + l.id + '"]'), y = parse(inp.value);
          rows.push([c.name, l.item, l.scope, l.qty || '', l.rate || '', money(l.est), inp.value.trim(), (l.est != null && y != null) ? money(l.est - y) : '']);
        });
      });
      var blob = new Blob([rows.map(function (r) { return r.map(function (x) { return '"' + String(x || '').replace(/"/g, '""') + '"'; }).join(','); }).join('\n')], { type: 'text/csv' });
      var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'Westway_Budget.csv'.replace('Westway', m.name.split(' ')[0]); a.click();
    }
    host.addEventListener('click', function (e) {
      var hd = e.target.closest('.budget-cat-header');
      if (hd) { hd.nextElementSibling.classList.toggle('open'); hd.querySelector('.budget-cat-toggle').classList.toggle('open'); return; }
      var act = e.target.getAttribute('data-act');
      if (act === 'expand') toggleAll(true);
      if (act === 'collapse') toggleAll(false);
      if (act === 'csv') csv();
      if (act === 'clear' && confirm('Clear all your entered ' + m.name + ' numbers? This cannot be undone.')) {
        inputs.forEach(function (i) { i.value = ''; });
        try { localStorage.removeItem(KEY); } catch (err) {}
        recalc();
      }
    });
    inputs.forEach(function (inp, idx) {
      inp.addEventListener('input', recalc);
      inp.addEventListener('blur', persist);
      inp.addEventListener('keydown', function (e) { if (e.key === 'Enter' && inputs[idx + 1]) inputs[idx + 1].focus(); });
    });
    recalc();
  })();
})();
