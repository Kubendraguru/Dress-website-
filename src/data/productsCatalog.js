/**
 * Products Catalog Data - Inspired by Ugmonk & Atelier Tailoring Aesthetic
 * Essential tees, linen dress shirts, tailored pants, french terry hoodies, and curated atelier objects.
 * Separated cleanly into Men's, Women's, and Unisex collections.
 */

// 1. The 5 Signature Hanging Shirts with their individual high-res Cloudinary images
export const DRESS_SHIRTS_HERO = [
  {
    id: 'shirt-white',
    name: 'Crisp White',
    subName: 'Pure Optical Linen Oxford',
    hex: '#f8f8fa',
    secondaryHex: '#e5e5eb',
    buttonColor: '#dedee6',
    pantone: 'PANTONE 11-0601 TCX',
    textColor: 'text-neutral-900',
    price: 68.00,
    fabric: '100% French Normandy Linen',
    fit: 'Relaxed Tailored Fit',
    gender: 'men',
    hotspotX: 18,
    hotspotY: 50,
    imageUrl: 'https://res.cloudinary.com/qrhgjdrs/image/upload/v1789314781/linenshirt_lqdcpp.jpg',
    localImage: '/linenshirt-rust-detail.jpg',
    details: 'Button-down collar, single chest pocket, rolled-up sleeve cuffs, bleached natural buttons.',
    description: 'Pure optical white linen crafted with high-density weave. Luminous, airy, and versatile under casual jackets or worn untucked.'
  },
  {
    id: 'shirt-beige',
    name: 'Sand Beige',
    subName: 'Natural Flax Button-Down',
    hex: '#d8caa8',
    secondaryHex: '#bfb08e',
    buttonColor: '#8c7d5c',
    pantone: 'PANTONE 13-0905 TCX',
    textColor: 'text-amber-900',
    price: 68.00,
    fabric: '100% French Normandy Linen',
    fit: 'Relaxed Tailored Fit',
    gender: 'men',
    hotspotX: 34,
    hotspotY: 50,
    imageUrl: 'https://res.cloudinary.com/qrhgjdrs/image/upload/v1789315007/half_y2ettu.jpg',
    localImage: '/shirt-half.jpg',
    details: 'Classic soft spread collar, unbleached organic flax fibers, neutral horn buttons.',
    description: 'Natural oatmeal sand linen woven without harsh bleaches. Features subtle slub texture and exceptional warm-weather breathability.'
  },
  {
    id: 'shirt-stripe',
    name: 'Bengal Blue Stripe',
    subName: 'Classic Striped Oxford',
    hex: '#7ba4c9',
    secondaryHex: '#608baa',
    buttonColor: '#4d7594',
    pantone: 'PANTONE 14-4115 TCX',
    textColor: 'text-sky-900',
    price: 72.00,
    fabric: '100% Normandy Linen & Combed Cotton',
    fit: 'Relaxed Tailored Fit',
    gender: 'men',
    hotspotX: 50,
    hotspotY: 50,
    imageUrl: 'https://res.cloudinary.com/qrhgjdrs/image/upload/v1789315007/strip_tx7ml9.jpg',
    localImage: '/shirt-strip.jpg',
    details: 'Button-down collar points, alternating micro-stripe weave, pearlescent shell buttons.',
    description: 'Heritage Bengal stripe oxford tailored with fine-gauge yarn. Combines crisp architectural lines with relaxed summer comfort.'
  },
  {
    id: 'shirt-brown',
    name: 'Rust Terracotta',
    subName: 'Roasted Linen Button-Down',
    hex: '#8c4a38',
    secondaryHex: '#733b2c',
    buttonColor: '#5c2d20',
    pantone: 'PANTONE 18-1440 TCX',
    textColor: 'text-amber-300',
    price: 68.00,
    fabric: '100% French Normandy Linen',
    fit: 'Relaxed Tailored Fit',
    gender: 'men',
    hotspotX: 66,
    hotspotY: 50,
    imageUrl: 'https://res.cloudinary.com/qrhgjdrs/image/upload/v1789315007/brown_qpsytq.jpg',
    localImage: '/shirt-brown.jpg',
    details: 'Button-down collar, single chest pocket, rolled-up sleeve cuffs, organic horn buttons.',
    description: 'Warm roasted terracotta linen woven from long-staple French flax. Garment washed for an immediate relaxed drape with tailored button-down collar points.'
  },
  {
    id: 'shirt-blue',
    name: 'Midnight Navy',
    subName: 'Atelier Relaxed Linen',
    hex: '#1c2d42',
    secondaryHex: '#142030',
    buttonColor: '#0e1824',
    pantone: 'PANTONE 19-4024 TCX',
    textColor: 'text-sky-300',
    price: 68.00,
    fabric: '100% French Normandy Linen',
    fit: 'Relaxed Tailored Fit',
    gender: 'men',
    hotspotX: 83,
    hotspotY: 50,
    imageUrl: 'https://res.cloudinary.com/qrhgjdrs/image/upload/v1789315006/blue_lftobs.jpg',
    localImage: '/shirt-blue.jpg',
    details: 'Spread camp collar, chest patch pocket, mother-of-pearl navy buttons.',
    description: 'Deep midnight navy linen with saturated color depth. Designed for evening coastal strolls and elevated smart-casual styling.'
  }
];

// 2. Hanging T-Shirt Rack Colorways (Crewnecks)
export const HANGING_RACK_TEES = [
  {
    id: 'rack-forest',
    name: 'Deep Forest',
    hex: '#244234',
    pantone: 'PANTONE 19-5917 TCX',
    textColor: 'text-emerald-300',
    description: 'Deep pine emerald combed jersey with a vintage pre-wash soft hand.'
  },
  {
    id: 'rack-port',
    name: 'Port Wine',
    hex: '#6b3636',
    pantone: 'PANTONE 19-1725 TCX',
    textColor: 'text-red-300',
    description: 'Rich earthen burgundy with warm undertones and gentle garment dye.'
  },
  {
    id: 'rack-bone',
    name: 'Bone White',
    hex: '#f4efe6',
    pantone: 'PANTONE 11-0604 TCX',
    textColor: 'text-neutral-900',
    description: 'Unbleached natural ecru cotton jersey with subtle fleck texturing.'
  },
  {
    id: 'rack-charcoal',
    name: 'Charcoal',
    hex: '#38393c',
    pantone: 'PANTONE 19-3908 TCX',
    textColor: 'text-neutral-300',
    description: 'Deep mineral slate washed grey with softened micro-ribbed collar.'
  }
];

// 3. Complete E-Commerce Catalog Products with Gender separation
export const CATALOG_PRODUCTS = [
  // =============================================================
  // FEMALE (WOMEN'S) SECTION
  // =============================================================

  // --- FEMALE SHIRTS & TOPS ---
  {
    id: 'shirt-porcelain-floral-card',
    name: 'Porcelain Floral Slit Linen Shirt',
    colorway: 'Vintage Blue Chintz',
    price: 78.00,
    category: 'Shirts',
    gender: 'women',
    badge: 'SUMMER CAPSULE',
    colorHex: '#7fa5c4',
    isDressShirt: true,
    imageUrl: '/floral-kurti-cutout.png',
    localImage: '/floral-kurti-cutout.png',
    description: 'Delicate vintage blue botanical porcelain floral print on lightweight breathable cotton-linen. High side-slit tunic tailoring designed for breezy movement and effortless layered denim styling.',
    swatches: [
      { name: 'Porcelain Blue', hex: '#7fa5c4', id: 'shirt-porcelain-blue' },
      { name: 'Crisp White', hex: '#f8f8fa', id: 'shirt-white' },
      { name: 'Sand Beige', hex: '#d8caa8', id: 'shirt-beige' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: 22,
    details: [
      '100% Breathable Fine-Weave Cotton Linen',
      'Hand-Blocked Botanical Chintz Motif',
      'High Side Slit Architectural Drape',
      'Contoured 3/4 Sleeves with Clean Bindings'
    ]
  },
  {
    id: 'shirt-poplin-oversized-women',
    name: 'Oversized Poplin Boyfriend Shirt',
    colorway: 'Crisp White',
    price: 74.00,
    category: 'Shirts',
    gender: 'women',
    badge: 'PARISIAN MINIMALISM',
    colorHex: '#ffffff',
    isDressShirt: true,
    imageUrl: '/white-poplin-cutout.png',
    localImage: '/white-poplin-cutout.png',
    description: 'Tailored with an oversized, relaxed silhouette in lightweight French poplin. Dropped shoulders, curved hem, and mother-of-pearl buttons.',
    swatches: [
      { name: 'Crisp White', hex: '#ffffff', id: 'shirt-poplin-white' },
      { name: 'Sand Beige', hex: '#d8caa8', id: 'shirt-poplin-beige' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: 26,
    details: [
      '100% Long-Staple Organic Cotton Poplin',
      'Deep Pleat Back Yoke for Fluid Movement',
      'Mother-of-Pearl Button Placket'
    ]
  },
  {
    id: 'shirt-lemon-linen-women',
    name: 'Riviera Resort Lemon Linen Shirt',
    colorway: 'Pastel Lemon Yellow',
    price: 72.00,
    category: 'Shirts',
    gender: 'women',
    badge: 'RESORT DROP',
    colorHex: '#fef08a',
    isDressShirt: true,
    imageUrl: '/lemon-linen-cutout.png',
    localImage: '/lemon-linen-cutout.png',
    description: 'Sun-drenched pastel lemon French linen shirt with relaxed camp collar, airy drape, and rolled cuffs.',
    swatches: [
      { name: 'Pastel Lemon', hex: '#fef08a', id: 'shirt-lemon' },
      { name: 'Pure White', hex: '#ffffff', id: 'shirt-white' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    stock: 18,
    details: [
      '100% Normandy Pure Flax Linen (170 GSM)',
      'Pre-washed for Ultra-Soft Hand Feel',
      'Relaxed Spread Camp Collar'
    ]
  },
  {
    id: 'shirt-striped-poplin-women',
    name: 'Bengal Stripe Relaxed Overshirt',
    colorway: 'Bengal Blue Stripe',
    price: 76.00,
    category: 'Shirts',
    gender: 'women',
    badge: 'EDITORIAL FAVORITE',
    colorHex: '#7ba4c9',
    isDressShirt: true,
    imageUrl: '/paris-striped-cutout.png',
    localImage: '/paris-striped-cutout.png',
    description: 'Classic Bengal blue & white striped oxford tailored with fine-gauge yarn. Combines crisp architectural lines with relaxed summer comfort.',
    swatches: [
      { name: 'Bengal Blue Stripe', hex: '#7ba4c9', id: 'shirt-stripe' },
      { name: 'Crisp White', hex: '#ffffff', id: 'shirt-white' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    stock: 20,
    details: [
      '100% Combed Cotton Poplin',
      'Double-stitched side seams',
      'Extended curved hemline'
    ]
  },

  // --- FEMALE T-SHIRTS ---
  {
    id: 'tee-women-contour-tank',
    name: 'Ribbed Seamless Contour Tank Top',
    colorway: 'Optic White',
    price: 36.00,
    category: 'T-Shirts',
    gender: 'women',
    badge: 'ESSENTIAL',
    colorHex: '#fbfbfb',
    type: 'essential',
    swatches: [
      { name: 'Optic White', hex: '#fbfbfb', id: 'tank-white' },
      { name: 'Midnight Black', hex: '#1c1c1e', id: 'tank-black' },
      { name: 'Sand Ecru', hex: '#e8e2d5', id: 'tank-ecru' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    stock: 35,
    details: [
      'Heavyweight 2x2 Micro-Ribbed Modal & Cotton',
      'Form-flattering neckline and high armhole bindings'
    ]
  },
  {
    id: 'tee-women-boyfriend-tee',
    name: 'Relaxed Boyfriend Drop-Shoulder Tee',
    colorway: 'Bone Ecru',
    price: 34.00,
    category: 'T-Shirts',
    gender: 'women',
    badge: 'CORE PIECE',
    colorHex: '#f4efe6',
    type: 'essential',
    swatches: [
      { name: 'Bone Ecru', hex: '#f4efe6', id: 'tee-bf-bone' },
      { name: 'Washed Rose', hex: '#c99b9b', id: 'tee-bf-rose' },
      { name: 'Charcoal', hex: '#38393c', id: 'tee-bf-charcoal' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: 28,
    details: [
      '220 GSM Organic Ring-Spun Combed Jersey',
      'Oversized boxy drape with raw-look bound collar'
    ]
  },

  // --- FEMALE PANTS & SKIRTS ---
  {
    id: 'pants-women-sand-fluid',
    name: 'Fluid Pleated Sand Wide-Leg Trousers',
    colorway: 'Pleated Sand',
    price: 88.00,
    category: 'Pants',
    gender: 'women',
    badge: 'NEW ARRIVAL',
    colorHex: '#d6caa8',
    type: 'pants',
    swatches: [
      { name: 'Pleated Sand', hex: '#d6caa8', id: 'pants-sand-w' },
      { name: 'Pure White', hex: '#fbfbfb', id: 'pants-white-w' }
    ],
    sizes: ['26', '28', '30', '32'],
    stock: 18,
    details: [
      'Pure Fluid Linen-Tencel Blend for breezy drape',
      'High-rise waist with tailored architectural double pleats'
    ]
  },
  {
    id: 'pants-women-wide-denim',
    name: 'Wide-Leg Light Wash Denim Jeans',
    colorway: 'Stonewash Sky Blue',
    price: 92.00,
    category: 'Pants',
    gender: 'women',
    badge: 'BESTSELLER',
    colorHex: '#8cb1d2',
    type: 'pants',
    swatches: [
      { name: 'Sky Blue Wash', hex: '#8cb1d2', id: 'denim-sky' },
      { name: 'Ecru Denim', hex: '#f1eee7', id: 'denim-ecru' }
    ],
    sizes: ['26', '28', '30', '32', '34'],
    stock: 24,
    details: [
      '13.5 oz 100% Rigid Organic Cotton Denim',
      'Relaxed wide-leg taper with vintage silver hardware'
    ]
  },

  // --- FEMALE HOODIES ---
  {
    id: 'hoodie-women-ivory-terry',
    name: 'Boxy French Terry Cropped Hoodie',
    colorway: 'Heather Bone',
    price: 88.00,
    category: 'Hoodies',
    gender: 'women',
    badge: 'ATELIER CUT',
    colorHex: '#ede8de',
    type: 'hoodie',
    swatches: [
      { name: 'Heather Bone', hex: '#ede8de', id: 'hoodie-w-bone' },
      { name: 'Terracotta', hex: '#7a4234', id: 'hoodie-w-terra' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    stock: 16,
    details: [
      '420 GSM Milled Organic Cotton French Terry',
      'Structured double hood without drawstrings'
    ]
  },


  // =============================================================
  // MALE (MEN'S) SECTION
  // =============================================================

  // --- MALE SHIRTS ---
  {
    id: 'shirt-white-card',
    name: 'Linen Button-Down Dress Shirt',
    colorway: 'Crisp White',
    price: 68.00,
    category: 'Shirts',
    gender: 'men',
    badge: 'CORE PIECE',
    colorHex: '#f8f8fa',
    isDressShirt: true,
    imageUrl: 'https://res.cloudinary.com/qrhgjdrs/image/upload/v1789314781/linenshirt_lqdcpp.jpg',
    localImage: '/linenshirt-rust-detail.jpg',
    description: 'Clean optical white linen with structured collar and mother-of-pearl accents.',
    swatches: [
      { name: 'Crisp White', hex: '#f8f8fa', id: 'shirt-white' },
      { name: 'Sand Beige', hex: '#d8caa8', id: 'shirt-beige' },
      { name: 'Bengal Blue Stripe', hex: '#7ba4c9', id: 'shirt-stripe' },
      { name: 'Rust Terracotta', hex: '#8c4a38', id: 'shirt-brown' },
      { name: 'Midnight Navy', hex: '#1c2d42', id: 'shirt-blue' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 30,
    details: [
      'Pure Bleached Flax Fibers',
      'Semi-Opaque High Density Weave',
      'Contoured Shoulder Seams',
      'Reinforced Side Gussets'
    ]
  },
  {
    id: 'shirt-beige-card',
    name: 'Linen Button-Down Dress Shirt',
    colorway: 'Sand Beige',
    price: 68.00,
    category: 'Shirts',
    gender: 'men',
    badge: 'NEW ARRIVAL',
    colorHex: '#d8caa8',
    isDressShirt: true,
    imageUrl: 'https://res.cloudinary.com/qrhgjdrs/image/upload/v1789315007/half_y2ettu.jpg',
    localImage: '/shirt-half.jpg',
    description: 'Natural unbleached flax beige linen with subtle botanical warmth.',
    swatches: [
      { name: 'Sand Beige', hex: '#d8caa8', id: 'shirt-beige' },
      { name: 'Crisp White', hex: '#f8f8fa', id: 'shirt-white' },
      { name: 'Bengal Blue Stripe', hex: '#7ba4c9', id: 'shirt-stripe' },
      { name: 'Rust Terracotta', hex: '#8c4a38', id: 'shirt-brown' },
      { name: 'Midnight Navy', hex: '#1c2d42', id: 'shirt-blue' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 15,
    details: [
      '100% Normandy Long-Staple Flax Linen (180 GSM)',
      'Natural Unbleached Dye',
      'Tonal Horn Buttons'
    ]
  },
  {
    id: 'shirt-stripe-card',
    name: 'Striped Oxford Dress Shirt',
    colorway: 'Bengal Blue Stripe',
    price: 72.00,
    category: 'Shirts',
    gender: 'men',
    badge: 'HERITAGE',
    colorHex: '#7ba4c9',
    isDressShirt: true,
    imageUrl: 'https://res.cloudinary.com/qrhgjdrs/image/upload/v1789315007/strip_tx7ml9.jpg',
    localImage: '/shirt-strip.jpg',
    description: 'Classic Bengal blue & white striped oxford tailored with linen blend yarn.',
    swatches: [
      { name: 'Bengal Blue Stripe', hex: '#7ba4c9', id: 'shirt-stripe' },
      { name: 'Crisp White', hex: '#f8f8fa', id: 'shirt-white' },
      { name: 'Sand Beige', hex: '#d8caa8', id: 'shirt-beige' },
      { name: 'Rust Terracotta', hex: '#8c4a38', id: 'shirt-brown' },
      { name: 'Midnight Navy', hex: '#1c2d42', id: 'shirt-blue' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 14,
    details: [
      'Alternating Micro-Stripe Weave',
      'Button-Down Collar Points',
      'Mother-of-Pearl Fasteners'
    ]
  },
  {
    id: 'shirt-brown-card',
    name: 'Linen Button-Down Dress Shirt',
    colorway: 'Rust Terracotta',
    price: 68.00,
    category: 'Shirts',
    gender: 'men',
    badge: 'SIGNATURE',
    colorHex: '#8c4a38',
    isDressShirt: true,
    imageUrl: 'https://res.cloudinary.com/qrhgjdrs/image/upload/v1789315007/brown_qpsytq.jpg',
    localImage: '/shirt-brown.jpg',
    description: '100% French Normandy Linen. Tailored button-down collar, chest pocket, and rolled sleeve cuffs.',
    swatches: [
      { name: 'Rust Terracotta', hex: '#8c4a38', id: 'shirt-brown' },
      { name: 'Crisp White', hex: '#f8f8fa', id: 'shirt-white' },
      { name: 'Sand Beige', hex: '#d8caa8', id: 'shirt-beige' },
      { name: 'Bengal Blue Stripe', hex: '#7ba4c9', id: 'shirt-stripe' },
      { name: 'Midnight Navy', hex: '#1c2d42', id: 'shirt-blue' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 18,
    details: [
      '100% Normandy Long-Staple Flax Linen (180 GSM)',
      'Contoured Button-Down Collar with Hidden Stay Support',
      'Left Reinforced Patch Pocket',
      'Double-Rolled Sleeve Cuff Styling'
    ]
  },
  {
    id: 'shirt-blue-card',
    name: 'Linen Camp Collar Shirt',
    colorway: 'Midnight Navy',
    price: 68.00,
    category: 'Shirts',
    gender: 'men',
    badge: 'POPULAR',
    colorHex: '#1c2d42',
    isDressShirt: true,
    imageUrl: 'https://res.cloudinary.com/qrhgjdrs/image/upload/v1789315006/blue_lftobs.jpg',
    localImage: '/shirt-blue.jpg',
    description: 'Deep midnight navy linen tailored with relaxed camp collar.',
    swatches: [
      { name: 'Midnight Navy', hex: '#1c2d42', id: 'shirt-blue' },
      { name: 'Crisp White', hex: '#f8f8fa', id: 'shirt-white' },
      { name: 'Sand Beige', hex: '#d8caa8', id: 'shirt-beige' },
      { name: 'Bengal Blue Stripe', hex: '#7ba4c9', id: 'shirt-stripe' },
      { name: 'Rust Terracotta', hex: '#8c4a38', id: 'shirt-brown' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 22,
    details: [
      '100% French Flax Linen',
      'Saturated Midnight Navy Pigment',
      'Chest Pocket with Pen Slot'
    ]
  },
  {
    id: 'shirt-men-navy-linen-model',
    name: 'Midnight Navy Linen Shirt & Pleated Sand Trouser',
    colorway: 'Midnight Navy & Sand',
    price: 84.00,
    category: 'Shirts',
    gender: 'men',
    badge: 'EDITORIAL SS26',
    colorHex: '#1c2d42',
    isDressShirt: true,
    imageUrl: '/men-navy-linen-cutout.png',
    localImage: '/men-navy-linen-cutout.png',
    description: 'Tailored French Normandy midnight navy open-collar linen shirt paired effortlessly with pleated sand fluid wide-leg trousers and retro court sneakers.',
    swatches: [
      { name: 'Midnight Navy', hex: '#1c2d42', id: 'shirt-navy-model' },
      { name: 'Sand Beige', hex: '#d8caa8', id: 'shirt-sand-model' },
      { name: 'Crisp White', hex: '#f8f8fa', id: 'shirt-white' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 25,
    details: [
      '100% Normandy Pure Flax Linen (180 GSM)',
      'Pleated Sand Fluid Trousers with Hidden Adjuster',
      'Relaxed Open Camp Collar Styling'
    ]
  },
  {
    id: 'shirt-men-ecru-polo-model',
    name: 'Quiet Luxury Ribbed Ecru Polo & Washed Black Denim',
    colorway: 'Ecru White & Washed Black',
    price: 78.00,
    category: 'Shirts',
    gender: 'men',
    badge: 'QUIET LUXURY',
    colorHex: '#f4efe6',
    isDressShirt: true,
    imageUrl: '/men-ecru-polo-cutout.png',
    localImage: '/men-ecru-polo-cutout.png',
    description: 'Open-collar ribbed cotton knit polo in natural ecru paired with relaxed washed black denim and vintage leather weekender duffel.',
    swatches: [
      { name: 'Ecru White', hex: '#f4efe6', id: 'polo-ecru' },
      { name: 'Washed Black', hex: '#222326', id: 'polo-black' },
      { name: 'Midnight Navy', hex: '#1c2d42', id: 'polo-navy' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 28,
    details: [
      'Fine-Gauge 100% Combed Ribbed Cotton Knit',
      'Johnny Collar Open V-Neck Placket',
      'Ribbed Cuffs and Hemline with Shape Memory'
    ]
  },
  {
    id: 'shirt-men-black-zip-polo',
    name: 'Textured Black Quarter-Zip Polo & Stone Chino',
    colorway: 'Onyx Black & Stone',
    price: 88.00,
    category: 'Shirts',
    gender: 'men',
    badge: 'ATELIER DROP',
    colorHex: '#121212',
    isDressShirt: true,
    imageUrl: '/men-black-zip-polo-cutout.png',
    localImage: '/men-black-zip-polo-cutout.png',
    description: 'Fine-textured quarter-zip ribbed knit polo in midnight onyx black, styled with tailored stone-beige relaxed trousers and stainless steel chronograph.',
    swatches: [
      { name: 'Onyx Black', hex: '#121212', id: 'polo-black-zip' },
      { name: 'Stone Beige', hex: '#d8d2c4', id: 'polo-stone' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 24,
    details: [
      '100% Textured Combed Cotton Rib Knit',
      'Silver Quarter-Zip Collar Closure',
      'Tailored Italian Cotton Relaxed Fit'
    ]
  },

  // --- MALE T-SHIRTS ---
  {
    id: 'tee-port',
    name: "Men's Essential Crewneck Tee",
    colorway: 'Port Wine',
    price: 32.00,
    category: 'T-Shirts',
    gender: 'men',
    badge: 'BESTSELLER',
    colorHex: '#6b3636',
    type: 'essential',
    swatches: [
      { name: 'Port Wine', hex: '#6b3636', id: 'tee-port' },
      { name: 'Deep Forest', hex: '#244234', id: 'tee-forest' },
      { name: 'Bone White', hex: '#f4efe6', id: 'tee-bone' },
      { name: 'Charcoal Slate', hex: '#38393c', id: 'tee-charcoal' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock: 24,
    details: [
      '100% Combed Ring-Spun Organic Cotton (240 GSM)',
      'Pre-shrunk fabric with bound collar ribbing'
    ]
  },
  {
    id: 'graphic-waves',
    name: 'Waves Graphic Screenprint Tee',
    colorway: 'Midnight Navy / Ecru',
    price: 38.00,
    category: 'T-Shirts',
    gender: 'men',
    badge: 'LIMITED EDITION',
    colorHex: '#253549',
    graphicType: 'waves',
    type: 'graphic',
    swatches: [
      { name: 'Midnight Navy', hex: '#253549', id: 'graphic-waves-navy' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 12,
    details: [
      'Water-based screenprint on 220 GSM heavyweight combed cotton'
    ]
  },

  // --- MALE PANTS ---
  {
    id: 'pants-linen-pleat',
    name: 'Relaxed Pleated Linen Trousers',
    colorway: 'Natural Sand',
    price: 88.00,
    category: 'Pants',
    gender: 'men',
    badge: 'NEW ARRIVAL',
    colorHex: '#c8bba2',
    type: 'pants',
    swatches: [
      { name: 'Natural Sand', hex: '#c8bba2', id: 'pants-sand' },
      { name: 'Midnight Navy', hex: '#1e2b3c', id: 'pants-navy' },
      { name: 'Charcoal Olive', hex: '#3e443c', id: 'pants-olive' }
    ],
    sizes: ['30', '32', '34', '36'],
    stock: 16,
    details: [
      '100% Pure Normandy Flax Linen with soft drape',
      'Double front pleats with elasticated rear waistband',
      'Corozo button waist tab and slanted side pockets'
    ]
  },
  {
    id: 'pants-atelier-chino',
    name: 'Atelier Tailored Chino Pant',
    colorway: 'Charcoal Slate',
    price: 84.00,
    category: 'Pants',
    gender: 'men',
    badge: 'EVERYDAY FIT',
    colorHex: '#3a3d42',
    type: 'pants',
    swatches: [
      { name: 'Charcoal Slate', hex: '#3a3d42', id: 'chino-charcoal' },
      { name: 'Oatmeal Khaki', hex: '#d0c5af', id: 'chino-khaki' }
    ],
    sizes: ['28', '30', '32', '34', '36'],
    stock: 20,
    details: [
      'Heavyweight 280 GSM Cotton Twill with 2% elastane flex',
      'Tapered architectural leg silhouette',
      'Reinforced bar-tack pockets'
    ]
  },

  // --- MALE HOODIES ---
  {
    id: 'hoodie-men-archive-mocha',
    name: 'Two-Tone Archive Mocha Raglan Hoodie',
    colorway: 'Mocha Brown & Ecru Cream',
    price: 98.00,
    category: 'Hoodies',
    gender: 'men',
    badge: 'ARCHIVE DROP',
    colorHex: '#5c4033',
    type: 'hoodie',
    imageUrl: '/men-archive-mocha-cutout.png',
    localImage: '/men-archive-mocha-cutout.png',
    swatches: [
      { name: 'Mocha & Cream', hex: '#5c4033', id: 'hoodie-mocha' },
      { name: 'Mineral Charcoal', hex: '#2c2e33', id: 'hoodie-charcoal' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 19,
    details: [
      '480 GSM Heavyweight French Terry with Vintage Contrast Raglan Sleeves',
      'Custom Dual-Tone Mocha Body with Clean Cream Sleeve Panels',
      'Pre-shrunk Garment Wash with Ribbed Cuffs and Hem'
    ]
  },
  {
    id: 'hoodie-men-oatmeal-terry',
    name: 'Heavyweight French Terry Oatmeal Hoodie & Relaxed Denim',
    colorway: 'Heather Oatmeal',
    price: 92.00,
    category: 'Hoodies',
    gender: 'men',
    badge: 'ESSENTIAL DROP',
    colorHex: '#dcd7cd',
    type: 'hoodie',
    imageUrl: '/men-oatmeal-cutout.png',
    localImage: '/men-oatmeal-cutout.png',
    swatches: [
      { name: 'Heather Oatmeal', hex: '#dcd7cd', id: 'hoodie-oatmeal' },
      { name: 'Washed Black', hex: '#222326', id: 'hoodie-black' },
      { name: 'Terracotta', hex: '#7a4234', id: 'hoodie-terra' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 22,
    details: [
      '450 GSM Organic Cotton French Terry with Natural Fleck Texture',
      'Relaxed Dropped Shoulders and Seamless Structured Double Hood',
      'Pairs perfectly with relaxed light wash denim and retro trainers'
    ]
  },
  {
    id: 'hoodie-french-terry',
    name: 'Heavyweight French Terry Hoodie',
    colorway: 'Earthen Terracotta',
    price: 94.00,
    category: 'Hoodies',
    gender: 'men',
    badge: 'SIGNATURE PIECE',
    colorHex: '#7a4234',
    type: 'hoodie',
    swatches: [
      { name: 'Terracotta', hex: '#7a4234', id: 'hoodie-terra' },
      { name: 'Heather Bone', hex: '#ede8de', id: 'hoodie-bone' },
      { name: 'Washed Black', hex: '#222326', id: 'hoodie-black' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 18,
    details: [
      '450 GSM Custom Milled Organic Cotton French Terry',
      'Double-layered structured hood with no drawstrings',
      'Seamless kangaroo pocket with reinforced bartacks'
    ]
  },
  {
    id: 'hoodie-zip-terry',
    name: 'Relaxed Full-Zip Terry Hoodie',
    colorway: 'Washed Mineral Charcoal',
    price: 98.00,
    category: 'Hoodies',
    gender: 'men',
    badge: 'ATELIER CUT',
    colorHex: '#2c2e33',
    type: 'hoodie',
    swatches: [
      { name: 'Mineral Charcoal', hex: '#2c2e33', id: 'zip-charcoal' },
      { name: 'Bone Cream', hex: '#ece6d8', id: 'zip-cream' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 14,
    details: [
      'Two-way matte nickel YKK zipper',
      'Double needle coverstitch on all seams',
      'Ribbed side gussets for mobility'
    ]
  },

  // =============================================================
  // UNISEX / ATELIER OBJECTS
  // =============================================================
  {
    id: 'obj-leather-tray',
    name: 'Atelier Leather Catchall Tray',
    colorway: 'Natural Whiskey Tan',
    price: 54.00,
    category: 'Objects',
    gender: 'unisex',
    badge: 'HANDCRAFTED',
    colorHex: '#b4733e',
    type: 'object',
    objectType: 'leather-tray',
    swatches: [
      { name: 'Whiskey Tan', hex: '#b4733e', id: 'tray-tan' }
    ],
    sizes: ['One Size'],
    stock: 9,
    details: [
      'Full-grain Italian vegetable-tanned leather',
      'Solid brass corner rivets'
    ]
  }
];
