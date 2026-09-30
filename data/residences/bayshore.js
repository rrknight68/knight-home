/* ============================================================
   KNIGHT FAMILY HOMES — BAYSHORE RESIDENCE
   Metadata + comparison facts for Bayshore.
   The full Bayshore content (specs, rooms, renderings, budget with
   editable "Your #" inputs + CSV, valuation, SF schedule, acoustic
   spec, The Study) lives intact in /bayshore.html and is NOT
   re-rendered from this file, so nothing there can be lost.
   Every value below is quoted from bayshore.html; section noted.
   Edit this file only to change Bayshore. Never touches Westway.
   ============================================================ */
window.KFH = window.KFH || {};
window.KFH.residences = window.KFH.residences || {};

window.KFH.residences.bayshore = {
  meta: {
    id: 'bayshore',
    name: 'Bayshore Residence',
    fullName: 'Knight Family Estate · 238 Bayshore Drive',
    address: '238 Bayshore Drive',
    cityStateZip: 'Cape Coral, FL',
    city: 'Cape Coral',
    waterfront: 'Caloosahatchee Riverfront',
    role: 'Alternative',
    selectorLabel: 'Bayshore — Alternative',
    tagline: 'Alternative · Cape Coral',
    philosophy: 'Modern Tropical · Moroccan Accents · Rustic Finishes',
    href: '/bayshore',
    order: 2,
    isDefault: false,
    /* Existing key used by bayshore.html's budget engine. Do not rename. */
    budgetStorageKey: '238bayshore_budget_v1'
  },

  status: {
    phase: 'Design Brief + Owner-Builder Estimate (LDB)',
    preference: 'Viable Alternative',
    lastUpdated: '2026'
  },

  /* Sources in bayshore.html: hero, #sqft, #outdoor, #architecture, #resilience, #budget, #valuation */
  compare: {
    property: '238 Bayshore Drive · Cape Coral, FL · 0.45 ac trapezoid lot (19,405 SF land)',
    waterfront: '188 ft Caloosahatchee seawall in 3 zones: beach lounge, dock + entertainment, storage + fish station',
    size: '5,324 SF conditioned per SF Schedule (4,736 SF used in Budget/Valuation) · 6,770 SF total under roof per SF Schedule (6,182 SF in Budget)',
    architecture: 'Modern Tropical · Moroccan Accents · Rustic Finishes: river facade as primary, Moroccan entry portal, cantilevered master over pool',
    bedrooms: '4 suites: ground-floor master + 3 second-floor guest suites',
    garage: '3-car garage (incl. robot alcove) · 726 SF',
    pool: 'Zero-edge river pool 16 × 38 ft (608 SF) + integrated spa + twin fire bowls',
    outdoor: 'Covered lanai 60 × 12 · detached pavilion · travertine terrace cascade · tiki bar at water level · rooftop solarium 24 × 30',
    resilience: 'Icynene spray foam + CMU/poured concrete, impact glass rated for 200 mph, solar + Powerwall bank + generator',
    lifestyle: 'Riverfront boating estate: 2 boat lifts + jet ski lift, captain\'s walk, tiki bar, above-cap sand beach terrace',
    specialty: 'Glass wine room · Office + Cigar Lounge + Gun Room chain · NBC shelter / media room · greenhouse · kitchen garden',
    wellness: 'Fitness room + sauna (east wing, acoustically isolated) · private cold plunge on master terrace · spa',
    technology: 'Lutron, Crestron or Control4 AV, automated hurricane shutters, pool chemistry monitoring, dock cameras, whole-home audio',
    cost: '$3,320,000 est. construction (LDB owner-builder) · $4.7M all-in incl. $1.5M land',
    advantages: '188 ft improved seawall + full dock/lift program; owner-builder cost basis; detailed line-item estimate and valuation in place',
    tradeoffs: 'River (not Gulf) frontage; smaller conditioned program; 3-car garage'
  }
};
