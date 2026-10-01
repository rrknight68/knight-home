/* ============================================================
   KNIGHT FAMILY HOMES — WESTWAY RESIDENCE
   Single source of truth for everything rendered at /westway
   and for Westway's column on /compare.
   Edit this file only to change Westway. Bayshore lives in
   bayshore.js (+ bayshore.html) and is never touched from here.
   Ranges are design targets, not confirmed dimensions.
   Unconfirmed site conditions are "TBD — confirm". Never invent them.
   ============================================================ */
window.KFH = window.KFH || {};
window.KFH.residences = window.KFH.residences || {};

window.KFH.residences.westway = {
  meta: {
    id: 'westway',
    name: 'Westway Residence',
    fullName: 'Knight Westway Residence',
    address: '1215 Westway Drive, Lot 9',
    cityStateZip: 'Sarasota, FL 34236',
    city: 'Sarasota',
    waterfront: 'Gulf Front',
    role: 'First Choice',
    selectorLabel: 'Westway — First Choice',
    tagline: 'First Choice · Gulf Front · Sarasota',
    philosophy: 'Modern Tropical · Moroccan Soul · Gulf Coastal',
    href: '/westway',
    order: 1,
    isDefault: true,
    budgetStorageKey: 'kfh_westway_budget_v1'
  },

  status: {
    phase: 'Program / Design Development',
    preference: 'Current Preference',
    lastUpdated: '2026-09-30'
  },

  /* Page order + sub-nav. type → renderer in assets/residence-page.js. */
  sections: [
    { id: 'overview', nav: 'Overview', type: 'overview', label: 'Knight Westway Residence', title: 'The Gulf Is the <em>Architecture</em>', intro: 'A Gulf-front family residence at 1215 Westway Drive, Sarasota. Three structural levels, five bedrooms, and a signature sequence of hidden rooms, engineered for extreme storm and flood resilience.' },
    { id: 'property', nav: 'Property', type: 'property', label: 'Site', title: 'The <em>Property</em>', intro: 'Only confirmed facts are stated. Every site condition not yet verified is marked TBD — confirm.' },
    { id: 'design-vision', nav: 'Design Vision', type: 'vision', label: 'Design Language', title: 'Modern Tropical<br><em>Moroccan Soul</em>', intro: 'Gulf Coastal. Clean horizontal modern architecture warmed by natural stone, walnut, cedar, teak, aged brass, and handmade zellige, with restrained Moroccan detailing throughout.' },
    { id: 'exterior', nav: 'Exterior', type: 'exterior', label: 'Elevations', title: 'Street + <em>Gulf</em>', intro: 'Two faces: a dramatic, landscaped street arrival that never reads as a garage, and a signature Gulf elevation of horizontals, glass, and deep terraces.' },
    { id: 'floor-plans', nav: 'Floor Plans', type: 'floorplans', label: 'Program', title: 'Three Levels,<br><em>One Horizon</em>', intro: '6,200–6,500 SF conditioned across three structural levels, with a potential roof terrace subject to zoning and height.' },
    { id: 'ground-level', nav: 'Ground Level', type: 'ground', label: 'Ground · 3,400–3,700 SF Footprint', title: 'Recoverable<br><em>Architecture Below</em>', intro: '' },
    { id: 'level-2', nav: 'Level 2', type: 'level', level: 'l2', label: 'Level 2 · 3,300–3,500 SF A/C · 12–13 ft Ceilings', title: 'Main Living +<br><em>Entertaining</em>', intro: 'Very large impact-rated glass on the Gulf elevation, with disappearing / pocketing sliders where structurally practical.' },
    { id: 'level-3', nav: 'Level 3', type: 'level', level: 'l3', label: 'Level 3 · 2,900–3,100 SF A/C', title: 'Primary Suite,<br><em>Bedrooms + Wellness</em>', intro: 'Primary suite (800–900 SF total) directly on the Gulf, three ensuite bedrooms, family lounge, fitness, sauna, laundry, and the elevator / stair core.' },
    { id: 'pool-options', nav: 'Pool Options', type: 'pool', label: 'Pool', title: 'Two <em>Pool Concepts</em>', intro: 'Investigate the elevated infinity pool first. Never compromise the residence merely to elevate the pool.' },
    { id: 'room-specifications', nav: 'Room Specs', type: 'roomspecs', label: 'Architect Reference', title: 'Room <em>Specifications</em>', intro: 'All areas are design-target ranges, to be confirmed in architectural drawings.' },
    { id: 'materials', nav: 'Materials', type: 'materials', label: 'Palette', title: 'Handcrafted, Warm,<br><em>Timeless</em>', intro: '' },
    { id: 'resilience', nav: 'Resilience', type: 'resilience', label: 'Structure + Storm Resilience', title: 'Engineered for the<br><em>Gulf Front</em>', intro: '' },
    { id: 'mechanical', nav: 'Mechanical', type: 'mechanical', label: 'HVAC + Water', title: '<em>Mechanical</em> + Plumbing', intro: '' },
    { id: 'electrical-energy', nav: 'Electrical / Energy', type: 'energy', label: 'Energy System', title: 'Power Through<br><em>the Storm</em>', intro: 'Design basis: 400A electrical service.' },
    { id: 'smart-home', nav: 'Smart Home', type: 'list', key: 'smartHome', label: 'Automation', title: 'Smart <em>Home</em>', intro: 'Retains and expands the Knight Estate technology concept.' },
    { id: 'security', nav: 'Security', type: 'list', key: 'security', label: 'Protection', title: '<em>Security</em>', intro: '' },
    { id: 'network', nav: 'Network', type: 'list', key: 'network', label: 'Infrastructure', title: '<em>Network</em>', intro: '' },
    { id: 'wellness', nav: 'Wellness', type: 'wellness', label: 'Wellness', title: 'The Morning<br><em>Sequence</em>', intro: '' },
    { id: 'landscape', nav: 'Landscape', type: 'landscape', label: 'Modern Tropical Landscape', title: 'Frame the <em>Gulf</em>', intro: 'Coastal-appropriate species in a sophisticated Modern Tropical composition.' },
    { id: 'renderings', nav: 'Renderings', type: 'renderings', label: 'Gallery', title: '<em>Renderings</em>', intro: 'Organized by view. Empty frames are placeholders until renderings are approved.' },
    { id: 'budget', nav: 'Budget', type: 'budget', label: 'Construction Budget', title: 'Construction <em>Budget</em>', intro: '' },
    { id: 'open-decisions', nav: 'Open Decisions', type: 'decisions', label: 'Decision Log', title: 'Open <em>Decisions</em>', intro: 'Everything not yet confirmed. Site conditions stay here until verified.' },
    { id: 'architect-notes', nav: 'Architect Notes', type: 'notes', label: 'For the Design Team', title: 'Architect <em>Notes</em>', intro: '' }
  ],

  heroStats: [
    { val: '6,200–6,500', label: 'SF Conditioned (target)' },
    { val: '3', label: 'Structural Levels' },
    { val: '5', label: 'Bedrooms' },
    { val: '~6 + 2', label: 'Full Baths + Powder' }
  ],

  vision: {
    statement: 'The Gulf of Mexico is the primary architectural feature. This is not another generic white-box Sarasota contemporary. It pairs clean horizontal modern architecture with warm natural materials, restrained Moroccan craft, resort-quality outdoor living, and resilience engineered for true Gulf-front exposure.',
    attribution: 'Knight Westway Residence · Design Vision · 2026',
    elements: [
      'Clean horizontal modern architecture', 'Gulf-front glass', 'Natural stone', 'Warm wood',
      'Dark bronze metal', 'Teak', 'American black walnut', 'Cedar', 'Aged brass',
      'Handmade Moroccan zellige', 'Restrained mashrabiya detailing', 'Resort-quality outdoor living',
      'Sophisticated tropical landscaping', 'Extreme storm / flood resilience',
      'Advanced technology', 'Energy resilience'
    ]
  },

  property: {
    rows: [
      ['Residence', 'Knight Westway Residence'],
      ['Address', '1215 Westway Drive, Lot 9'],
      ['City / ZIP', 'Sarasota, Florida 34236'],
      ['Waterfront', 'Gulf-front (Gulf of Mexico)'],
      ['Lot dimensions', 'TBD — confirm (survey)'],
      ['Lot area', '11,656 SF per listing · TBD — confirm (survey)'],
      ['Setbacks', 'TBD — confirm (zoning)'],
      ['Zoning / height limit', 'RSF2 per listing · height limit TBD — confirm'],
      ['Water body fronted', 'Aerial shows the lot on the pass between keys (likely New Pass) · TBD — confirm Gulf vs inlet frontage'],
      ['CCCL (Coastal Construction Control Line)', 'TBD — confirm (FDEP)'],
      ['Flood zone / BFE', 'TBD — confirm (FEMA FIRM + elevation cert.)'],
      ['Existing grade elevations', 'TBD — confirm (topo survey)'],
      ['Geotechnical conditions', 'TBD — confirm (soil borings)']
    ],
    /* Reference only. Listing figures are third-party marketing data, not survey. */
    reference: {
      images: [
        { src: '/images/westway/site-aerial-close.jpg', title: 'Aerial: lot + immediate neighbors', caption: '~180 m across, centered on the geocoded address point (marker is approximate; not a parcel boundary).', credit: 'USGS / USDA, The National Map Orthoimagery, Mar 2025 · public domain' },
        { src: '/images/westway/site-aerial-context.jpg', title: 'Aerial: neighborhood + water context', caption: '~900 m across. Shows the water body the lot fronts and the surrounding keys.', credit: 'USGS / USDA, The National Map Orthoimagery, Mar 2025 · public domain' }
      ],
      listingFacts: [
        ['Lot area (listed)', '11,656 SF (0.27 ac)'],
        ['Zoning (listed)', 'RSF2: single-family'],
        ['Parcel / APN', '0013070004'],
        ['Existing structure (listed)', 'House built 1972, renovated 2007: demolition scope TBD'],
        ['Listing notes', 'Stone-faced perimeter wall + gates; listing states an approved seawall permit']
      ],
      listingSource: 'Per MLS TB8437967 as shown on Redfin / brokerage sites, Oct 2026. Marketing data, not survey: verify every figure.',
      links: [
        { label: 'Zillow listing search', href: 'https://www.zillow.com/homes/1215-Westway-Dr-Sarasota,-FL-34236_rb/' },
        { label: 'Redfin listing (photos)', href: 'https://www.redfin.com/FL/Sarasota/1215-Westway-Dr-34236/home/47618327' },
        { label: 'Sarasota County Property Appraiser', href: 'https://www.sc-pa.com/' }
      ],
      listingPhotosNote: 'MLS listing photos are owned by the listing brokerage and are not copied here. View them via the listing links.'
    },
    note: 'Site conditions are intentionally left unconfirmed. Every TBD item is tracked in Open Decisions until verified by survey, zoning review, FDEP/CCCL review, and geotechnical report.'
  },

  program: {
    conditioned: [6200, 6500],
    levels: [
      { id: 'ground', name: 'Ground', sf: [3400, 3700], sfNote: 'structural footprint · non-conditioned', purpose: 'Parking, arrival, storage, and flood-resilient functions' },
      { id: 'l2', name: 'Level 2', sf: [3300, 3500], sfNote: 'A/C', purpose: 'Primary living and entertaining · 12–13 ft ceilings' },
      { id: 'l3', name: 'Level 3', sf: [2900, 3100], sfNote: 'A/C', purpose: 'Primary suite, bedrooms, and wellness' },
      { id: 'roof', name: 'Roof Terrace', sf: null, sfNote: 'subject to zoning / height', purpose: 'Restrained Gulf sunset terrace, if permitted' }
    ],
    bedrooms: 5,
    bedroomDetail: 'Primary suite · 3 upstairs ensuite bedrooms · 1 Level-2 guest suite',
    fullBaths: '~6',
    powderRooms: 2,
    garage: '4-car (concealed, ground level) + EV charging'
  },

  exterior: {
    street: {
      title: 'Street Elevation',
      rule: 'The ground floor must NOT visually resemble a parking garage.',
      items: ['Dramatic central entry', 'Tall glass entry volume', 'Moroccan geometric screen', 'Warm stone',
        'Dark bronze windows', 'Wood soffits', 'Concealed four-car parking', 'Lush tropical landscaping',
        'Sophisticated architectural lighting']
    },
    gulf: {
      title: 'Gulf Elevation · Signature',
      hierarchy: ['Gulf', 'Pool', 'Terrace', 'Glass', 'Warm Interior'],
      items: ['Strong horizontal architecture', 'Extensive Gulf-facing glass', 'Deep terraces', 'Natural stone',
        'Warm wood soffits', 'Level-2 outdoor living', 'Infinity pool if feasible', 'Level-3 primary terrace',
        'Layered tropical landscaping']
    }
  },

  ground: {
    philosophy: 'Expensive house above. Recoverable architecture below.',
    intro: 'The ground floor is designed around the possibility of future storm and flood inundation. Everything here should be recoverable; nothing irreplaceable lives at a vulnerable elevation.',
    include: ['Four-car parking', 'EV charging', 'Elevator lobby', 'Architectural staircase', 'Beach equipment storage',
      'Fishing equipment storage', 'Bicycle storage', 'Paddleboard storage', "Owner's storage", 'Outdoor shower',
      'Pool access', 'Future robot / technology charging alcove'],
    keepAbove: ['Main electrical distribution', 'Networking equipment', 'Home automation servers', 'HVAC air handlers',
      'Water heaters', 'Battery equipment', 'Critical controls']
  },

  sequences: {
    view: { label: 'Level 2 View Sequence', steps: ['Kitchen', 'Great Room', 'Lanai', 'Pool', 'Gulf'], alt: 'If the pool remains at grade: Kitchen → Great Room → Lanai → Gulf' },
    hidden: { label: 'Signature Hidden-Room Sequence', steps: ['Office', 'Cigar Lounge', 'Media / Safe Room'], links: ['hidden bookshelf', 'hidden panel'] },
    morning: { label: 'Morning Sequence', steps: ['Primary Suite', 'Fitness', 'Sauna', 'Cold Plunge', 'Gulf'] },
    pool: { label: 'Option A Sequence', steps: ['Great Room', 'Lanai', 'Infinity Pool', 'Gulf'] },
    hierarchy: { label: 'Gulf Elevation Visual Hierarchy', steps: ['Gulf', 'Pool', 'Terrace', 'Glass', 'Warm Interior'] }
  },

  /* Rooms: level ∈ ground | l2 | l3 | roof. sf = [min, max] target; null = not set. */
  rooms: [
    { id: 'great-room', level: 'l2', name: 'Great Room', sf: [550, 650], tag: 'Main Living',
      summary: 'Spectacular Gulf view through a disappearing glass wall. The Gulf must remain the dominant visual feature.',
      features: ['Disappearing glass wall', 'Fireplace with Moroccan zellige detailing', 'Natural stone', 'Walnut / cedar details', 'Concealed architectural lighting', 'Restrained mashrabiya ceiling feature'] },
    { id: 'kitchen', level: 'l2', name: 'Kitchen', sf: [350, 400], tag: 'Main Living',
      summary: 'Custom walnut kitchen with a large statement island, open to the Great Room and the Gulf.',
      features: ['Custom walnut cabinetry', 'Large statement island', 'Natural stone countertops', 'Integrated premium appliances', 'Moroccan zellige backsplash', 'Aged brass details', 'Large refrigerator / freezer', 'Filtered drinking water', 'Dual dishwashers if practical', 'Ice maker', 'Pot filler'] },
    { id: 'prep-kitchen', level: 'l2', name: 'Prep Kitchen / Butler Pantry', sf: [120, 160], tag: 'Main Living',
      summary: 'Working kitchen behind the show kitchen.',
      features: ['Secondary sink', 'Dishwasher', 'Refrigeration', 'Pantry storage', 'Appliance storage', 'Food preparation area'] },
    { id: 'dining', level: 'l2', name: 'Dining', sf: [250, 300], tag: 'Main Living',
      summary: 'Formal dining with the glass wine room as its architectural backdrop.', features: ['Direct sightline to glass wine room'] },
    { id: 'wine-room', level: 'l2', name: 'Glass Wine Room', sf: [120, 160], tag: 'Specialty',
      summary: 'Carries forward the Knight Family Estate wine-room concept: an architectural feature visible from dining.',
      features: ['Floor-to-ceiling glass', '~300–500 bottle capacity', 'Cedar racks', 'Independent cooling', 'Warm integrated lighting', 'Brass details'] },
    { id: 'office', level: 'l2', name: 'Office', sf: [180, 220], tag: 'Hidden Sequence · 1',
      summary: "Gentleman's Club Lite. Gulf views where the layout permits. Hidden bookshelf opens to the Cigar Lounge.",
      features: ['American black walnut', 'Aged brass', 'Warm lighting', 'Built-in shelving', 'Custom desk', 'Moroccan / zellige accent', 'Excellent acoustic isolation'] },
    { id: 'cigar-lounge', level: 'l2', name: 'Cigar Lounge', sf: [180, 220], tag: 'Hidden Sequence · 2',
      summary: 'Behind the bookshelf. Dedicated HVAC and exhaust at negative pressure, so cigar smoke cannot enter the primary house HVAC. Hidden panel continues to the Media / Safe Room.',
      features: ['Dark espresso walnut', 'Leather club seating', 'Moroccan pierced-brass lighting', 'Persian / Turkish rug', 'Whiskey display', '150–200 cigar humidor', 'Smoked glass', 'Aged brass', '~2200K lighting', 'Dedicated negative-pressure HVAC / exhaust'] },
    { id: 'media-safe-room', level: 'l2', name: 'Media / Safe Room', sf: [250, 300], tag: 'Hidden Sequence · 3',
      summary: 'Normal use: movie room, media room, family retreat. Secondary use: hardened safe room, emergency shelter, communications room.',
      features: ['Reinforced construction where practical', 'No exterior glazing', 'Independent ventilation', 'Emergency power', 'Communications capability', 'Emergency supplies', 'Starlink / satellite communications'] },
    { id: 'l2-guest-suite', level: 'l2', name: 'Level-2 Guest Suite', sf: [350, 400], sfNote: 'incl. bath + closet', tag: 'Bedroom 5',
      summary: 'Main-level guest suite, king capable.',
      features: ['King bedroom capability', 'Full ensuite', 'Walk-in shower', 'Cedar-lined wardrobe', 'Natural stone / zellige', 'Aged brass', 'Independent HVAC control'] },
    { id: 'gulf-lanai', level: 'l2', name: 'Gulf Lanai', sf: [800, 1000], sfNote: '14–16 ft deep where possible · outdoor', tag: 'Outdoor Living',
      summary: 'Extremely strong indoor/outdoor connection between the Great Room and the Gulf.',
      features: ['Large-format stone', 'Teak / wood ceiling', 'Ceiling fans', 'Integrated architectural lighting', 'Outdoor television', 'Dining', 'Lounge seating', 'Automated shades / screens where appropriate'] },

    { id: 'primary-bedroom', level: 'l3', name: 'Primary Bedroom', sf: null, sfNote: 'within 800–900 SF suite', tag: 'Primary Suite',
      summary: 'Directly on the Gulf. Gulf view from the bed.',
      features: ['Gulf view directly from bed', 'Floor-to-ceiling glass', '11–12 ft ceilings', 'Private Gulf terrace access', 'Restrained backlit cedar / mashrabiya feature'] },
    { id: 'primary-bath', level: 'l3', name: 'Primary Bathroom', sf: null, sfNote: 'within 800–900 SF suite', tag: 'Primary Suite',
      summary: 'Gulf-view bath.',
      features: ['Gulf-view freestanding tub', 'Large shower', 'Dual vanity', 'Private WC', 'Aged brass', 'Hand-cut zellige', 'Natural stone'] },
    { id: 'primary-closets', level: 'l3', name: 'His + Hers Closets', sf: null, sfNote: 'within 800–900 SF suite', tag: 'Primary Suite',
      summary: 'Two dressing rooms.',
      features: ['Cedar-lined cabinetry', 'Integrated lighting', 'Islands / drawers', 'Concealed storage', 'Brass hardware'] },
    { id: 'primary-terrace', level: 'l3', name: 'Private Gulf Terrace', sf: [250, 350], sfNote: 'outdoor', tag: 'Primary Suite',
      summary: 'Private terrace off the primary suite.', features: [] },
    { id: 'bedroom-2', level: 'l3', name: 'Secondary Bedroom 2', sf: [350, 400], sfNote: 'incl. bath + closet', tag: 'Ensuite',
      summary: 'Gulf view priority: at least one secondary bedroom gets a Gulf view (which one is an Open Decision).',
      features: ['Ensuite bathroom', 'Quality shower', 'Cedar-lined wardrobe', 'Independent climate control', 'Impact glazing', 'High-quality natural materials'] },
    { id: 'bedroom-3', level: 'l3', name: 'Secondary Bedroom 3', sf: [350, 400], sfNote: 'incl. bath + closet', tag: 'Ensuite',
      summary: 'Ensuite family / guest bedroom.',
      features: ['Ensuite bathroom', 'Quality shower', 'Cedar-lined wardrobe', 'Independent climate control', 'Impact glazing', 'High-quality natural materials'] },
    { id: 'bedroom-4', level: 'l3', name: 'Secondary Bedroom 4', sf: [350, 400], sfNote: 'incl. bath + closet', tag: 'Ensuite',
      summary: 'Ensuite family / guest bedroom.',
      features: ['Ensuite bathroom', 'Quality shower', 'Cedar-lined wardrobe', 'Independent climate control', 'Impact glazing', 'High-quality natural materials'] },
    { id: 'fitness', level: 'l3', name: 'Fitness Room', sf: [250, 300], tag: 'Wellness',
      summary: 'Strength and cardio with Gulf views.',
      features: ['Strength equipment', 'Cardio equipment', 'Gulf views', 'Acoustic isolation', 'Dedicated HVAC'] },
    { id: 'sauna', level: 'l3', name: 'Cedar Sauna', sf: null, sfNote: '4–6 person', tag: 'Wellness', summary: '4–6 person cedar sauna.', features: [] },
    { id: 'cold-plunge', level: 'l3', name: 'Cold Plunge', sf: null, sfNote: 'protected exterior terrace', tag: 'Wellness',
      summary: 'On a protected exterior terrace where practical (location is an Open Decision).', features: [] },
    { id: 'family-lounge', level: 'l3', name: 'Family Lounge', sf: [200, 250], tag: 'Family',
      summary: 'Informal upstairs family area.', features: ['Television', 'Comfortable seating', 'Beverage refrigeration'] },
    { id: 'laundry', level: 'l3', name: 'Laundry', sf: [140, 160], tag: 'Service',
      summary: 'Full-capacity laundry on the bedroom level.',
      features: ['Two washers', 'Two dryers', 'Utility sink', 'Folding area', 'Drying / hanging area', 'Extensive cabinetry', 'Zellige backsplash'] },

    { id: 'roof-terrace', level: 'roof', name: 'Roof Terrace', sf: null, sfNote: 'subject to zoning / height', tag: 'If Permitted',
      summary: 'Restrained Gulf sunset terrace. Must not break the clean horizontal roofline.',
      features: ['Seating', 'Fire feature', 'Outdoor shower', 'Small beverage station', 'Gulf observation area'] }
  ],

  primarySuiteTotal: [800, 900],

  circulation: {
    elevator: { title: 'Elevator', body: 'Serves Ground, Level 2, Level 3, and the roof terrace if permitted.' },
    stair: { title: 'Architectural Stair', features: ['Floating walnut treads', 'Structural steel spine', 'Glass railing', 'Brass handrail', 'Warm integrated LED tread lighting'] }
  },

  poolOptions: [
    { id: 'A', name: 'Elevated Level-2 Infinity Pool', badge: 'Preferred', size: '16 × 36 to 16 × 38 ft', water: '~575–610 SF water surface',
      sequence: ['Great Room', 'Lanai', 'Infinity Pool', 'Gulf'],
      summary: 'Investigate first. The infinity edge visually merges into the Gulf horizon.',
      features: ['Integrated spa', 'Moroccan zellige waterline', 'LED lighting', 'Salt system', 'Automated chemistry', 'Heating', 'Appropriate fire features'],
      structural: 'Intentionally engineered structural foundation and load path. NOT a swimming pool placed on top of a conventional garage slab.' },
    { id: 'B', name: 'Ground-Level Resort Pool', badge: 'Alternative', size: 'Size TBD', water: 'Water area TBD',
      sequence: ['Kitchen', 'Great Room', 'Lanai', 'Gulf'],
      summary: 'Conventional Gulf-side pool at grade. Used if permitting, CCCL, flood regulations, setbacks, structural requirements, or architecture make the elevated pool undesirable.',
      features: [],
      structural: 'The residence itself is never compromised merely to elevate the pool.' }
  ],

  materials: [
    { group: 'Stone', items: ['Large-format natural stone', 'Travertine'], swatch: 'linear-gradient(180deg,#D8CBB3 0%,#B9A88B 100%)', ink: '#3a3024' },
    { group: 'Wood', items: ['American black walnut', 'Cedar', 'Teak'], swatch: 'linear-gradient(180deg,#5A3B26 0%,#3A2517 100%)', ink: '#D9B892' },
    { group: 'Moroccan', items: ['Handmade zellige', 'Mashrabiya', 'Carved cedar', 'Geometric patterns'], swatch: 'linear-gradient(180deg,#2A6B6B 0%,#1A4A4A 100%)', ink: '#9FD4D4' },
    { group: 'Metals', items: ['Aged brass', 'Dark bronze aluminum'], swatch: 'linear-gradient(180deg,#A07A34 0%,#3B2F24 100%)', ink: '#F0D9A8' },
    { group: 'Walls', items: ['Smooth plaster', 'Natural stone', 'Selected walnut paneling', 'Zellige feature areas'], swatch: 'linear-gradient(180deg,#EDE3D2 0%,#D6C8B0 100%)', ink: '#3a3024' }
  ],
  materialsRule: 'Avoid excessive glossy finishes. The home should feel handcrafted, warm, and timeless.',

  lighting: {
    temps: [{ val: '~2700K', label: 'Primary lighting' }, { val: '~2200K', label: 'Cigar lounge' }],
    items: ['Concealed LED', 'Millwork lighting', 'Stair lighting', 'Architectural landscape lighting', 'Selective Moroccan lanterns', 'Art lighting', 'Extensive dimming'],
    rule: 'Avoid cool-white residential lighting.'
  },

  resilience: {
    intro: 'Engineer the home specifically for its Gulf-front exposure rather than selecting arbitrary headline wind ratings.',
    items: [
      { title: 'Reinforced Concrete / CMU', body: 'Primary structure in reinforced concrete and CMU.' },
      { title: 'Pile / Deep Foundation', body: 'As engineering requires. Type per geotechnical report (Open Decision).' },
      { title: 'Robust Roof Connections', body: 'Continuous load path from roof to foundation.' },
      { title: 'Structural Steel at Large Openings', body: 'Supports the large Gulf glass assemblies and disappearing sliders.' },
      { title: 'Impact-Rated Glass', body: 'All glazing impact rated.' },
      { title: 'Coastal Fasteners', body: 'Corrosion-resistant hardware throughout for salt exposure.' },
      { title: 'Flood-Conscious Ground Floor', body: 'Recoverable architecture below; see Ground Level.' },
      { title: 'Elevated Critical Infrastructure', body: 'Electrical, network, HVAC, water heating, batteries, and controls above flood-vulnerable elevation.' }
    ]
  },

  mechanical: {
    hvac: ['Zoned HVAC with air handlers above flood-vulnerable elevation', 'Independent HVAC control: Level-2 guest suite and each secondary bedroom', 'Dedicated HVAC: fitness room', 'Dedicated negative-pressure HVAC / exhaust: cigar lounge (isolated from primary system)', 'Independent ventilation: media / safe room', 'Independent cooling: glass wine room'],
    water: ['High-efficiency water heating', 'Hot-water recirculation', 'Whole-house filtration', 'Drinking-water purification', 'Leak detection', 'Automatic water shutoff', 'Outdoor showers', 'Pool / spa plumbing', 'Cold-plunge infrastructure']
  },

  energy: {
    stats: [
      { val: '400A', label: 'Electrical service' },
      { val: '~20 kW', label: 'Solar' },
      { val: '40–60 kWh', label: 'Usable battery' },
      { val: '26–40 kW', label: 'Generator (per load calc)' }
    ],
    items: ['Whole-house surge protection', 'Generator, final size per engineering / load analysis', 'Battery backup', 'Solar', 'Critical-load panel', 'Extensive dedicated circuits', 'EV charging', 'Energy monitoring'],
    rule: 'Elevate and protect all critical energy equipment.'
  },

  smartHome: {
    items: ['Lutron lighting', 'Control4 or Crestron (Open Decision)', 'Whole-house audio', 'Motorized shades', 'Hurricane protection automation where appropriate', 'Security', 'Climate', 'Pool automation', 'Lighting scenes', 'Energy monitoring'],
    rule: 'Essential systems must also have physical / manual controls.'
  },

  security: {
    items: ['Security system integrated with smart home', 'Dedicated security network', 'Media / safe room: hardened, no exterior glazing, emergency power, comms', 'Starlink / satellite backup communications', 'Impact-rated envelope']
  },

  network: {
    items: ['CAT6A home runs', 'Fiber-ready backbone', 'Climate-controlled equipment rack', 'Enterprise network', 'UPS', 'Multiple Wi-Fi access points', 'Exterior Wi-Fi', 'Pool / terrace Wi-Fi', 'Security network', 'Starlink backup capability'],
    rule: 'All network / server equipment at Level 2 or higher.'
  },

  landscape: {
    species: ['Royal palms', 'Bismarck palms', 'Sea grape', 'Clusia', 'Tropical architectural specimens', 'Native coastal plantings'],
    rule: 'Landscape frames the Gulf. It never obscures it.'
  },

  /* src: null = placeholder. Add a file path when a rendering is approved. */
  renderings: [
    { cat: 'Gulf / Water Elevation', src: null, caption: 'Current approved exterior design direction: pending upload' },
    { cat: 'Street Elevation', src: null },
    { cat: 'Aerial', src: null },
    { cat: 'Main Living Room', src: null },
    { cat: 'Kitchen', src: null },
    { cat: 'Gulf Lanai', src: null },
    { cat: 'Elevated Pool Option', src: null },
    { cat: 'Ground Pool Option', src: null },
    { cat: 'Primary Suite', src: null },
    { cat: 'Primary Bathroom', src: null },
    { cat: 'Office', src: null },
    { cat: 'Cigar Lounge', src: null },
    { cat: 'Wine Room', src: null },
    { cat: 'Fitness / Wellness', src: null },
    { cat: 'Nighttime Exterior', src: null }
  ],

  /* est: null → "TBD". Enter numbers in the "Your #" column on the site; they save per-browser under meta.budgetStorageKey. */
  budget: {
    intro: 'Line items structured by the Westway program. No estimates have been provided yet, so every estimate reads TBD. Enter your own numbers in the "Your #" column; they save in this browser and export to CSV.',
    categories: [
      { id: 'site', name: '01 · Site + Foundation', lines: [
        { id: 'survey', item: 'Boundary + Topographic Survey', scope: 'Lot dims, elevations, CCCL location', est: null },
        { id: 'geotech', item: 'Geotechnical / Soil Borings', scope: 'Basis for pile / deep foundation design', est: null },
        { id: 'demo', item: 'Demolition + Site Prep', scope: 'Scope TBD pending site confirmation', est: null },
        { id: 'piles', item: 'Pile / Deep Foundation', scope: 'Type + depth per geotech', est: null },
        { id: 'temp', item: 'Temporary Power + Facilities', scope: 'Full build duration', est: null },
        { id: 'erosion', item: 'Erosion Control + Coastal Protection During Construction', scope: '', est: null }
      ]},
      { id: 'structure', name: '02 · Structure', lines: [
        { id: 'frame', item: 'Reinforced Concrete / CMU Structure', scope: 'Three structural levels', est: null },
        { id: 'steel', item: 'Structural Steel at Large Openings', scope: 'Gulf glass + disappearing sliders', est: null },
        { id: 'slabs', item: 'Elevated Floor Structure (L2 / L3)', scope: '', est: null },
        { id: 'roof-struct', item: 'Roof Structure + Connections', scope: 'Continuous load path', est: null },
        { id: 'pool-struct', item: 'Elevated Pool Structure (Option A only)', scope: 'Engineered load path; not on garage slab', est: null }
      ]},
      { id: 'envelope', name: '03 · Envelope', lines: [
        { id: 'glass', item: 'Impact Glass + Disappearing Sliders', scope: 'Gulf elevation assemblies', est: null },
        { id: 'windows', item: 'Dark Bronze Impact Windows + Doors', scope: 'Remaining elevations', est: null },
        { id: 'roofing', item: 'Roofing + Waterproofing', scope: '', est: null },
        { id: 'cladding', item: 'Natural Stone Cladding + Wood Soffits', scope: '', est: null },
        { id: 'screen', item: 'Moroccan Geometric Entry Screen', scope: 'Street elevation', est: null }
      ]},
      { id: 'mep', name: '04 · Mechanical + Plumbing', lines: [
        { id: 'hvac', item: 'Zoned HVAC (elevated equipment)', scope: '', est: null },
        { id: 'cigar-hvac', item: 'Cigar Lounge Negative-Pressure HVAC / Exhaust', scope: 'Isolated from main system', est: null },
        { id: 'plumbing', item: 'Plumbing Rough + Finish', scope: '~6 full baths, 2 powder, kitchens, laundry', est: null },
        { id: 'water', item: 'Water Heating, Recirculation, Filtration, Purification', scope: '', est: null },
        { id: 'leak', item: 'Leak Detection + Auto Shutoff', scope: '', est: null }
      ]},
      { id: 'energy', name: '05 · Electrical + Energy', lines: [
        { id: 'service', item: '400A Service + Distribution', scope: 'Elevated, surge protected', est: null },
        { id: 'generator', item: 'Generator 26–40 kW', scope: 'Final size per load calc', est: null },
        { id: 'battery', item: 'Battery 40–60 kWh Usable', scope: '', est: null },
        { id: 'solar', item: 'Solar ~20 kW', scope: '', est: null },
        { id: 'ev', item: 'EV Charging', scope: 'Ground level', est: null },
        { id: 'lighting', item: 'Architectural Lighting Package', scope: '2700K / 2200K, concealed LED, dimming', est: null }
      ]},
      { id: 'tech', name: '06 · Technology', lines: [
        { id: 'automation', item: 'Lutron + Control4 / Crestron', scope: '', est: null },
        { id: 'audio', item: 'Whole-House Audio + Media Room AV', scope: '', est: null },
        { id: 'network', item: 'Network: CAT6A, Rack, UPS, WAPs, Starlink', scope: 'L2 or higher', est: null },
        { id: 'security', item: 'Security System + Network', scope: '', est: null },
        { id: 'shades', item: 'Motorized Shades + Hurricane Automation', scope: '', est: null }
      ]},
      { id: 'interiors', name: '07 · Interiors + Finishes', lines: [
        { id: 'kitchen', item: 'Kitchen + Prep Kitchen', scope: 'Walnut, stone, integrated appliances', est: null },
        { id: 'millwork', item: 'Walnut / Cedar Millwork + Paneling', scope: '', est: null },
        { id: 'stone', item: 'Large-Format Stone / Travertine Flooring', scope: '', est: null },
        { id: 'zellige', item: 'Handmade Zellige + Mashrabiya', scope: '', est: null },
        { id: 'baths', item: 'Bathrooms (primary + ensuites + powder)', scope: '', est: null },
        { id: 'closets', item: 'Primary His/Hers Closets', scope: 'Cedar-lined', est: null },
        { id: 'stair', item: 'Architectural Stair', scope: 'Walnut treads, steel spine, glass rail, brass', est: null },
        { id: 'elevator', item: 'Elevator', scope: 'Ground–L3 (+ roof if permitted)', est: null },
        { id: 'plaster', item: 'Smooth Plaster Walls + Paint', scope: '', est: null }
      ]},
      { id: 'specialty', name: '08 · Specialty Rooms', lines: [
        { id: 'wine', item: 'Glass Wine Room', scope: '300–500 bottles, independent cooling', est: null },
        { id: 'office', item: 'Office Millwork + Hidden Bookshelf', scope: '', est: null },
        { id: 'cigar', item: 'Cigar Lounge + Humidor + Hidden Panel', scope: '', est: null },
        { id: 'safe', item: 'Media / Safe Room Hardening', scope: 'Reinforcement, ventilation, emergency power', est: null },
        { id: 'sauna', item: 'Cedar Sauna (4–6 person)', scope: '', est: null },
        { id: 'plunge', item: 'Cold Plunge', scope: 'Location TBD', est: null },
        { id: 'fitness', item: 'Fitness Room Fit-Out', scope: 'Acoustic isolation, dedicated HVAC', est: null }
      ]},
      { id: 'pool', name: '09 · Pool', lines: [
        { id: 'pool-a', item: 'Option A: Elevated Infinity Pool + Spa', scope: '16×36–38, zellige, salt, heat, fire', est: null },
        { id: 'pool-b', item: 'Option B: Ground-Level Resort Pool', scope: 'If A not selected', est: null }
      ]},
      { id: 'outdoor', name: '10 · Outdoor + Landscape', lines: [
        { id: 'lanai', item: 'Gulf Lanai (800–1,000 SF)', scope: 'Stone, teak ceiling, fans, TV', est: null },
        { id: 'terraces', item: 'Primary Terrace + L3 Terraces', scope: '', est: null },
        { id: 'roof-terrace', item: 'Roof Terrace (if permitted)', scope: '', est: null },
        { id: 'landscape', item: 'Landscape + Irrigation', scope: 'Royal / Bismarck palms, sea grape, Clusia', est: null },
        { id: 'hardscape', item: 'Hardscape + Motor Court', scope: '', est: null },
        { id: 'landscape-lighting', item: 'Landscape Lighting', scope: '', est: null }
      ]},
      { id: 'soft', name: '11 · Soft Costs + Permits', lines: [
        { id: 'arch', item: 'Architecture', scope: '', est: null },
        { id: 'eng', item: 'Structural / MEP / Civil Engineering', scope: '', est: null },
        { id: 'cccl', item: 'FDEP CCCL Permitting', scope: 'If required: confirm', est: null },
        { id: 'permit', item: 'City of Sarasota Building Permit + Impact Fees', scope: '', est: null },
        { id: 'insurance', item: "Builder's Risk + Liability Insurance", scope: '', est: null },
        { id: 'contingency', item: 'Contingency', scope: '', est: null }
      ]}
    ]
  },

  decisions: [
    { id: 'pool', topic: 'Pool: Option A (elevated infinity) vs Option B (ground-level)', status: 'Open', note: 'A preferred; depends on CCCL, flood, structure, cost.' },
    { id: 'roof', topic: 'Roof terrace', status: 'Open', note: 'Subject to zoning / height limit.' },
    { id: 'cccl', topic: 'CCCL line / flood zone / BFE', status: 'TBD — confirm', note: 'FDEP CCCL + FEMA FIRM + elevation certificate.' },
    { id: 'setbacks', topic: 'Setbacks + lot dimensions', status: 'TBD — confirm', note: 'Survey + zoning review. Listing states 11,656 SF lot.' },
    { id: 'frontage', topic: 'Water frontage: open Gulf vs pass / inlet', status: 'TBD — confirm', note: 'Aerial suggests the lot fronts a pass between keys; affects CCCL, views, wave exposure, and the "Gulf-front" framing.' },
    { id: 'existing-house', topic: 'Existing 1972 house: demolition + any reuse', status: 'Open', note: 'Per listing. Also confirm the stated approved seawall permit.' },
    { id: 'zoning-height', topic: 'Zoning district + height limit', status: 'TBD — confirm', note: '' },
    { id: 'foundation', topic: 'Foundation type', status: 'Open', note: 'Piles / deep foundation per geotech.' },
    { id: 'generator', topic: 'Generator size (26–40 kW)', status: 'Open', note: 'Per load calculation.' },
    { id: 'battery', topic: 'Battery size within 40–60 kWh usable', status: 'Open', note: '' },
    { id: 'automation', topic: 'Control4 vs Crestron', status: 'Open', note: 'Lutron lighting either way.' },
    { id: 'guest-suite', topic: 'Level-2 guest suite location', status: 'Open', note: '' },
    { id: 'gulf-bedroom', topic: 'Which secondary bedroom gets the Gulf view', status: 'Open', note: '' },
    { id: 'plunge', topic: 'Cold plunge location', status: 'Open', note: 'Protected exterior terrace where practical.' },
    { id: 'budget', topic: 'Construction budget', status: 'Open', note: 'No estimate provided yet.' }
  ],

  architectNotes: [
    'The Gulf is the primary architectural feature. Every major room orients to it; nothing competes with it.',
    'Not a generic white-box Sarasota contemporary: warm stone, walnut, cedar, teak, aged brass, dark bronze, restrained Moroccan detailing.',
    'Ground floor philosophy: "Expensive house above. Recoverable architecture below." Keep main electrical, network, automation servers, air handlers, water heaters, batteries, and critical controls above flood-vulnerable elevation wherever practical.',
    'The street elevation must not read as a parking garage: dramatic central entry, tall glass entry volume, Moroccan geometric screen.',
    'Elevated pool (Option A) needs an intentionally engineered structural foundation and load path, never a pool on a conventional garage slab. Never compromise the residence to elevate the pool.',
    'Signature hidden-room sequence: Office → hidden bookshelf → Cigar Lounge → hidden panel → Media / Safe Room. The cigar lounge runs at negative pressure on dedicated HVAC.',
    'Engineer for actual Gulf-front exposure, not arbitrary headline wind ratings.',
    'All network / server gear at Level 2 or higher. Essential systems keep physical / manual controls.',
    'Rooftop program must not break the clean horizontal roofline.',
    'Do not assume site conditions. Lot dims, setbacks, elevations, CCCL line, flood zone, and zoning height are unconfirmed.'
  ],

  revisions: [
    { date: '2026-09-30', note: 'Westway Residence added as First Choice. Initial program, systems, pool options, budget structure (TBD), and open decisions.' }
  ],

  /* Values consumed by /compare. Keep in sync with sections above. */
  compare: {
    property: '1215 Westway Drive, Lot 9 · Sarasota, FL 34236',
    waterfront: 'Gulf of Mexico: direct Gulf frontage; the Gulf is the primary architectural feature',
    size: '6,200–6,500 SF conditioned (target) · 3 structural levels',
    architecture: 'Modern Tropical · Moroccan Soul · Gulf Coastal: clean horizontals, Gulf glass, stone, walnut, bronze, zellige',
    bedrooms: '5 BR (primary + 3 L3 ensuite + L2 guest suite) · ~6 full baths + 2 powder',
    garage: '4-car concealed at ground level + EV charging',
    pool: 'Option A (preferred): elevated L2 infinity pool 16×36–38 · Option B: ground-level resort pool',
    outdoor: 'Gulf lanai 800–1,000 SF · primary Gulf terrace 250–350 SF · roof terrace if permitted',
    resilience: 'Reinforced concrete/CMU, pile/deep foundation per geotech, impact glass, flood-conscious recoverable ground floor, elevated critical infrastructure',
    lifestyle: 'Gulf-front beach living: vertical living with elevator, view sequence Kitchen → Great Room → Lanai → Pool → Gulf',
    specialty: 'Glass wine room · Office → Cigar Lounge → Media/Safe Room hidden sequence',
    wellness: 'Fitness 250–300 SF · 4–6 person cedar sauna · cold plunge · morning sequence to the Gulf',
    technology: 'Lutron + Control4/Crestron · CAT6A/enterprise network · 400A · ~20 kW solar · 40–60 kWh battery · 26–40 kW generator · Starlink',
    cost: 'TBD: no estimate provided yet',
    advantages: 'Direct Gulf frontage; larger program (5 BR); elevated main living with Gulf views; purpose-built flood resilience',
    tradeoffs: 'Site conditions unconfirmed (CCCL, flood zone, setbacks, height); elevated pool adds structural cost; no boat / dock program noted; budget not yet estimated'
  }
};
