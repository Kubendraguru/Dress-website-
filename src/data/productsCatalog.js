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

// 1b. The 5 Signature Hanging Women's T-Shirts & Polos for the Interactive Rack
export const WOMEN_TEES_HERO = [
  {
    id: 'women-tee-block-stripe-polo',
    name: 'Block-Stripe Rugby Polo',
    subName: 'Heavyweight French Terry Knit',
    hex: '#1b2838',
    secondaryHex: '#e8e2d5',
    buttonColor: '#fbfbfb',
    pantone: 'PANTONE 19-4028 TCX',
    textColor: 'text-sky-200',
    price: 54.00,
    fabric: '100% Heavyweight Organic Combed Cotton (280 GSM)',
    fit: 'Oversized Boxy Silhouette',
    gender: 'women',
    hotspotX: 16,
    hotspotY: 52,
    imageUrl: '/women-tee-block-stripe-polo.png',
    localImage: '/women-tee-block-stripe-polo.png',
    details: 'Contrast white twill collar, hidden button placket, drop-shoulder seams, reinforced side slits.',
    description: 'A contemporary take on the timeless heritage rugby polo with bold horizontal block stripes in saturated navy and unbleached ecru.'
  },
  {
    id: 'women-tee-beardless-jersey',
    name: 'Noir Athletic Jersey Tee',
    subName: 'Performance Contrast-Piping Streetwear',
    hex: '#141416',
    secondaryHex: '#2a2a2e',
    buttonColor: '#ffffff',
    pantone: 'PANTONE 19-4007 TCX',
    textColor: 'text-neutral-200',
    price: 48.00,
    fabric: 'Breathable Technical Mesh & Ring-Spun Cotton (240 GSM)',
    fit: 'Relaxed Streetwear Fit',
    gender: 'women',
    hotspotX: 33,
    hotspotY: 52,
    imageUrl: '/women-tee-beardless-jersey.png',
    localImage: '/women-tee-beardless-jersey.png',
    details: 'Aerodynamic white piping across raglan sleeves, chest archive graphic, high crewneck binding.',
    description: 'Sporty athletic streetwear cut from breathable structured jersey with contrast white raglan seam piping and a relaxed drape.'
  },
  {
    id: 'women-tee-la-varsity-polo',
    name: 'Varsity Script Ribbed Polo',
    subName: 'Collegiate Micro-Ribbed V-Neck',
    hex: '#162238',
    secondaryHex: '#f0f0f4',
    buttonColor: '#ffffff',
    pantone: 'PANTONE 19-3921 TCX',
    textColor: 'text-sky-300',
    price: 52.00,
    fabric: 'Micro-Ribbed Cotton & Modal Blend',
    fit: 'Fitted Contoured Drape',
    gender: 'women',
    hotspotX: 50,
    hotspotY: 52,
    imageUrl: '/women-tee-la-varsity-polo.png',
    localImage: '/women-tee-la-varsity-polo.png',
    details: 'Split v-neckline, contrast white flat-knit collar, arched Los Angeles collegiate chest embroidery.',
    description: 'Vintage varsity styling with a flattering fine-ribbed body, crisp white collar trim, and open split v-neck.'
  },
  {
    id: 'women-tee-milan-striped-knit',
    name: 'Milan Fine-Knit Striped Polo',
    subName: 'European Resort Breton Knit Top',
    hex: '#1c2430',
    secondaryHex: '#f4efe6',
    buttonColor: '#e0d8cc',
    pantone: 'PANTONE 19-4015 TCX',
    textColor: 'text-neutral-300',
    price: 58.00,
    fabric: '100% Ultra-Fine Gauge Organic Combed Cotton Knit',
    fit: 'Tailored Slim Fit',
    gender: 'women',
    hotspotX: 67,
    hotspotY: 52,
    imageUrl: '/women-tee-milan-striped-knit.png',
    localImage: '/women-tee-milan-striped-knit.png',
    details: 'Full front mother-of-pearl button placket, French Breton stripe repeat, ribbed waist and sleeve cuffs.',
    description: 'A luxurious Riviera resort knit spun from fine-gauge combed cotton featuring delicate horizontal Breton striping.'
  },
  {
    id: 'women-tee-contrast-collar-polo',
    name: 'Riviera Johnny-Collar Polo',
    subName: 'Textured Piqué Open-Collar Polo',
    hex: '#111e33',
    secondaryHex: '#ffffff',
    buttonColor: '#ffffff',
    pantone: 'PANTONE 19-3920 TCX',
    textColor: 'text-sky-300',
    price: 46.00,
    fabric: '100% Breathable Organic Cotton Piqué',
    fit: 'Relaxed Tailored Polo Fit',
    gender: 'women',
    hotspotX: 84,
    hotspotY: 52,
    imageUrl: '/women-tee-contrast-collar-polo.png',
    localImage: '/women-tee-contrast-collar-polo.png',
    details: 'Buttonless open Johnny collar with contrast white tipping, white tipped cuffs, reinforced side vents.',
    description: 'Effortless tennis polo aesthetic featuring a clean buttonless open collar, contrast tipping, and airy cotton piqué.'
  }
];

// 1c. The 5 Signature Hanging Women's Shirts for the Interactive Rail
export const WOMEN_SHIRTS_HERO = [
  {
    id: 'shirt-women-crinkle-blue',
    name: 'Skyline Plissé Textured Shirt',
    subName: 'Dusty Slate Blue Micro-Plissé',
    hex: '#7c94a6',
    secondaryHex: '#5f788c',
    buttonColor: '#ffffff',
    pantone: 'PANTONE 17-4412 TCX',
    textColor: 'text-sky-900',
    price: 68.00,
    fabric: 'Textured Micro-Plissé Breathable Weave',
    fit: 'Relaxed Oversized Drape',
    gender: 'women',
    imageUrl: '/women-shirt-crinkle-blue.png',
    localImage: '/women-shirt-crinkle-blue.png',
    details: 'Anti-wrinkle fluid micro-crinkle texture, relaxed dropped shoulders, point collar, buttoned cuffs.',
    description: 'Micro-plissé crinkled lightweight fabric with an oversized relaxed drape, dropped shoulders, and airy fluid silhouette for effortless everyday elegance.'
  },
  {
    id: 'shirt-women-blush-poplin',
    name: 'Dusty Rose Classic Tailored Poplin',
    subName: 'Long-Staple Organic Cotton Poplin',
    hex: '#e1afb0',
    secondaryHex: '#c79596',
    buttonColor: '#f7f4f4',
    pantone: 'PANTONE 14-1907 TCX',
    textColor: 'text-rose-950',
    price: 72.00,
    fabric: '100% Long-Staple Organic Cotton Poplin',
    fit: 'Tailored Modern Fit',
    gender: 'women',
    imageUrl: '/women-shirt-blush-poplin.png',
    localImage: '/women-shirt-blush-poplin.png',
    details: 'Structured point collar, seamless French placket with tonal buttons, subtle curved hemline.',
    description: 'Crisp organic cotton poplin tailored with clean structured seams, structured collar, and soft dusty rose blush tone.'
  },
  {
    id: 'shirt-women-candy-stripe',
    name: 'Candy Pink Bengal Stripe Boyfriend Shirt',
    subName: 'Yarn-Dyed Combed Cotton',
    hex: '#e894a4',
    secondaryHex: '#d17c8d',
    buttonColor: '#ffffff',
    pantone: 'PANTONE 15-2216 TCX',
    textColor: 'text-pink-950',
    price: 74.00,
    fabric: '100% Yarn-Dyed Combed Cotton',
    fit: 'Relaxed Boyfriend Fit',
    gender: 'women',
    imageUrl: '/women-shirt-candy-stripe.png',
    localImage: '/women-shirt-candy-stripe.png',
    details: 'Vertical slimming Bengal stripes, curved back yoke pleat, extended hemline, mother-of-pearl buttons.',
    description: 'Vibrant candy pink and white vertical Bengal stripes woven from ultra-fine combed cotton in an easy boyfriend-fit silhouette.'
  },
  {
    id: 'shirt-women-sage-pinstripe',
    name: 'Sage Pinstripe Two-Piece Layered Shirt',
    subName: '2-in-1 Dual-Piece Construction',
    hex: '#93a793',
    secondaryHex: '#799179',
    buttonColor: '#ede6dc',
    pantone: 'PANTONE 15-6316 TCX',
    textColor: 'text-emerald-950',
    price: 76.00,
    fabric: 'Layered Dual-Piece Fine Pinstripe Cotton',
    fit: 'Airy High-Low Layered Hang',
    gender: 'women',
    imageUrl: '/women-shirt-sage-pinstripe.png',
    localImage: '/women-shirt-sage-pinstripe.png',
    details: 'Integrated layered 2-in-1 silhouette, micro pinstripe yarn dye, drop shoulders, side split hem.',
    description: 'Fine pinstriped two-piece layered open overshirt set in earthy sage green. Designed for chic high-low summer layering.'
  },
  {
    id: 'shirt-women-noir-pinstripe',
    name: 'Monochrome Pinstripe Open-Neck Drape Shirt',
    subName: 'Fluid Rayon-Cotton Atelier Drape',
    hex: '#3a3a3c',
    secondaryHex: '#1e1e20',
    buttonColor: '#ffffff',
    pantone: 'PANTONE 19-3906 TCX',
    textColor: 'text-neutral-100',
    price: 70.00,
    fabric: 'Breathable Fluid Rayon-Cotton Blend',
    fit: 'Fluid Parisian Drape',
    gender: 'women',
    imageUrl: '/women-shirt-noir-pinstripe.png',
    localImage: '/women-shirt-noir-pinstripe.png',
    details: 'Open notch lapel collar, clean finished cuffs, continuous vertical monochrome pinstripe weave.',
    description: 'Sophisticated monochrome black & white vertical stripe shirt with open spread collar and graceful fluid drape.'
  }
];

// 1d. The 6 Signature Hanging Women's Tailored Pants for the Interactive Rail
export const WOMEN_PANTS_HERO = [
  {
    id: 'pants-women-ivory-pleated',
    name: 'Ivory Pleated Fluid Wide Trousers',
    subName: 'Italian Suiting Poly-Viscose Twill',
    hex: '#ded3c1',
    secondaryHex: '#f4efe6',
    pantone: 'PANTONE 11-0606 TCX',
    textColor: 'text-neutral-900',
    price: 135.00,
    fabric: 'Italian Poly-Viscose Fluid Suiting Twill',
    fit: 'High-Waisted Deep Knife Pleat Wide-Leg',
    gender: 'women',
    imageUrl: '/women-pants-ivory-pleated.png',
    localImage: '/women-pants-ivory-pleated.png',
    details: 'High-waisted knife-pleated front, full-length wide-leg sweep, concealed hook-and-bar closure.',
    description: 'Masterfully tailored high-rise wide-leg trousers featuring deep front knife pleats, clean waistband with belt loops, and an ultra-fluid drape.'
  },
  {
    id: 'pants-women-black-corset',
    name: 'Noir Corset Double-Button Trousers',
    subName: 'Structured Anti-Crease Heavy Crepe',
    hex: '#18181a',
    secondaryHex: '#2a2a2e',
    pantone: 'PANTONE 19-4005 TCX',
    textColor: 'text-neutral-100',
    price: 142.00,
    fabric: 'Premium Anti-Crease Structured Crepe',
    fit: 'Extended Cinched Corset High Waist',
    gender: 'women',
    imageUrl: '/women-pants-black-corset.png',
    localImage: '/women-pants-black-corset.png',
    details: 'Extended cinched corset waistband, dual engraved metallic buttons, sharp front crease lines.',
    description: 'Sculptural high-rise trousers featuring an extended corset-style waistband with dual gold-toned metallic buttons, sharp structured pleats, and sweeping palazzo legs.'
  },
  {
    id: 'pants-women-white-palazzo',
    name: 'Pure White Fluid High-Waist Palazzo',
    subName: 'Matte-Weave Lightweight Linen Blend',
    hex: '#f5f2eb',
    secondaryHex: '#ffffff',
    pantone: 'PANTONE 11-0104 TCX',
    textColor: 'text-neutral-900',
    price: 128.00,
    fabric: 'Breathable Matte-Weave Linen Blend',
    fit: 'Floor-Skimming Relaxed Palazzo',
    gender: 'women',
    imageUrl: '/women-pants-white-palazzo.png',
    localImage: '/women-pants-white-palazzo.png',
    details: 'High-rise contoured waist panel, floor-skimming silhouette, seamless hidden side zipper.',
    description: 'Effortless Riviera resort aesthetic with a high-rise seamless waistline, subtle darting, and billowing relaxed palazzo legs.'
  },
  {
    id: 'pants-women-charcoal-horseshoe',
    name: 'Washed Charcoal Horseshoe Barrel Denim',
    subName: '13.5oz Vintage Ring-Spun Cotton Denim',
    hex: '#3a3c42',
    secondaryHex: '#2c2c2e',
    pantone: 'PANTONE 19-3908 TCX',
    textColor: 'text-neutral-200',
    price: 148.00,
    fabric: '13.5oz Heavyweight 100% Ring-Spun Cotton',
    fit: 'Architectural Curved Horseshoe Balloon',
    gender: 'women',
    imageUrl: '/women-pants-charcoal-horseshoe.png',
    localImage: '/women-pants-charcoal-horseshoe.png',
    details: 'Curved balloon outer seam, vintage stone wash whiskering, 5-pocket denim styling.',
    description: 'The definitive modern statement silhouette: dramatic curved horseshoe / balloon leg cut from 13.5oz vintage washed black denim with whiskered thighs.'
  },
  {
    id: 'pants-women-indigo-horseshoe',
    name: 'Vintage Indigo Horseshoe Barrel Jean',
    subName: 'Authentic Stone-Washed Japanese Denim',
    hex: '#30445c',
    secondaryHex: '#6d8fa8',
    pantone: 'PANTONE 18-4020 TCX',
    textColor: 'text-sky-200',
    price: 148.00,
    fabric: '100% Cotton Authentic Stone-Washed Denim',
    fit: 'Dramatic Curved Horseshoe Barrel',
    gender: 'women',
    imageUrl: '/women-pants-indigo-horseshoe.png',
    localImage: '/women-pants-indigo-horseshoe.png',
    details: 'Dramatic horseshoe curved outer seams, high-rise with relaxed hip volume, clean heavy gauge hem.',
    description: 'Sculpted curved barrel denim in an authentic vintage blue stone wash. Features an exaggerated outer curve through the knee with gentle inward taper at the ankles.'
  },
  {
    id: 'pants-women-black-flare',
    name: 'Sculpt High-Waisted Flare Yoga Pant',
    subName: '4-Way Stretch Compression Sculpt Knit',
    hex: '#141416',
    secondaryHex: '#222226',
    pantone: 'PANTONE 19-4004 TCX',
    textColor: 'text-neutral-100',
    price: 118.00,
    fabric: '4-Way Stretch High-Density Sculpting Knit',
    fit: 'High-Rise Crossover Bootcut Flare',
    gender: 'women',
    imageUrl: '/women-pants-black-flare.png',
    localImage: '/women-pants-black-flare.png',
    details: 'Core support crossover waistband, elongating bootcut flare hem, non-sheer squat-proof weave.',
    description: 'Sculptural high-waisted flared bootcut yoga pants engineered with four-way stretch compression fabric, tummy-control crossover waistband, and an elongated flare hem.'
  }
];

// 1e. The 4 Signature Hanging Women's Combos / 2-Piece Sets for the Interactive Rail
export const WOMEN_COMBOS_HERO = [
  {
    id: 'combo-women-pink-corduroy',
    name: 'Dusty Rose Corduroy & Blue Denim Set',
    subName: 'Cropped Corduroy Jacket + Ribbed Tank + Wide Denim',
    hex: '#d89b9e',
    secondaryHex: '#b57b7f',
    pantone: 'PANTONE 15-1607 TCX',
    textColor: 'text-rose-950',
    price: 118.00,
    fabric: 'Soft Fine-Wale Velvet Corduroy & Heavyweight Ring-Spun Denim',
    fit: 'Cropped Boxy Jacket & High-Rise Wide-Leg Denim',
    gender: 'women',
    imageUrl: '/women-combo-pink-corduroy.png',
    localImage: '/women-combo-pink-corduroy.png',
    details: '2-Piece Outfit: Dusty rose cropped corduroy jacket with balloon gathered cuffs over white ribbed tank, paired with wide-leg light indigo denim and canvas studio tote.',
    description: 'Playful yet elevated Parisian aesthetic: vintage dusty rose cropped corduroy overshirt layered over a soft ribbed crop tank and relaxed wide-leg blue jeans.'
  },
  {
    id: 'combo-women-brown-corduroy',
    name: 'Mocha Corduroy & Charcoal Denim Set',
    subName: 'Cropped Utility Jacket + Ribbed Tank + Charcoal Wide Jean',
    hex: '#6c4e3e',
    secondaryHex: '#523a2e',
    pantone: 'PANTONE 19-1220 TCX',
    textColor: 'text-amber-100',
    price: 128.00,
    fabric: 'Heavyweight Fine-Rib Warm Cotton Corduroy & 13.5oz Washed Denim',
    fit: 'Relaxed Cropped Jacket & High-Waist Charcoal Balloon Denim',
    gender: 'women',
    imageUrl: '/women-combo-brown-corduroy.png',
    localImage: '/women-combo-brown-corduroy.png',
    details: '2-Piece Outfit: Rich espresso mocha cropped corduroy utility jacket with white ribbed tank, paired with washed charcoal wide-leg barrel denim and canvas tote.',
    description: 'Earthy rich espresso mocha corduroy tailored into a sophisticated modern streetwear ensemble with washed charcoal curved wide-leg denim.'
  },
  {
    id: 'combo-women-denim-corset',
    name: 'Sculpted Denim Corset Jumpsuit Duo',
    subName: 'Structured Boned Corset Bustier & Wide-Leg Denim',
    hex: '#6d8fa8',
    secondaryHex: '#24334a',
    pantone: 'PANTONE 18-4020 TCX',
    textColor: 'text-sky-950',
    price: 135.00,
    fabric: '12oz Structured Stone-Washed Indigo Cotton Denim',
    fit: 'Fitted Structured Corset & High-Rise Wide-Leg Sweep',
    gender: 'women',
    imageUrl: '/women-combo-denim-corset.png',
    localImage: '/women-combo-denim-corset.png',
    details: '2-Piece Outfit: Strapless structured denim corset with architectural contour seam boning, paired with high-rise relaxed wide-leg indigo denim trousers.',
    description: 'Runway statement duo: sculpted light indigo stone-washed denim corset featuring vertical boning and clean topstitching with floor-length wide-leg palazzo jeans.'
  },
  {
    id: 'combo-women-lace-corset',
    name: 'Espresso Lace Corset & Sand Chinos Set',
    subName: 'Chantilly Lace Corset Top & High-Rise Sand Chinos',
    hex: '#4a2e24',
    secondaryHex: '#ded3c1',
    pantone: 'PANTONE 19-1116 TCX',
    textColor: 'text-amber-100',
    price: 142.00,
    fabric: 'French Floral Chantilly Lace & Tailored Cotton Twill Chinos',
    fit: 'Boning Cinched Bustier & High-Rise Straight Cuffed Chinos',
    gender: 'women',
    imageUrl: '/women-combo-lace-corset.png',
    localImage: '/women-combo-lace-corset.png',
    details: '2-Piece Outfit: Espresso dark chocolate Chantilly floral lace underwire corset top, paired with relaxed sand-beige high-waist straight cuffed cotton chinos.',
    description: 'A striking luxury ensemble pairing delicate espresso brown underwire lace corset bustier with relaxed tailored sand-beige cuffed chinos and strappy sandal heels.'
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
    id: 'shirt-women-crinkle-blue',
    name: 'Skyline Plissé Textured Oversized Shirt',
    colorway: 'Dusty Slate Blue',
    price: 68.00,
    category: 'Shirts',
    gender: 'women',
    badge: 'NEW ARRIVAL',
    colorHex: '#7c94a6',
    isDressShirt: true,
    imageUrl: '/women-shirt-crinkle-blue.png',
    localImage: '/women-shirt-crinkle-blue.png',
    description: 'Micro-plissé crinkled lightweight fabric with an oversized relaxed drape, dropped shoulders, and airy fluid silhouette for effortless everyday elegance.',
    swatches: [
      { name: 'Slate Blue', hex: '#7c94a6', id: 'shirt-crinkle-blue' },
      { name: 'Pure White', hex: '#ffffff', id: 'shirt-crinkle-white' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: 24,
    details: [
      'Textured Micro-Plissé Breathable Weave',
      'Relaxed Dropped Shoulder Cut',
      'Anti-Wrinkle Fluid Silhouette',
      'Point Collar with Button Cuffs'
    ]
  },
  {
    id: 'shirt-women-blush-poplin',
    name: 'Dusty Rose Classic Tailored Poplin Shirt',
    colorway: 'Dusty Blush Pink',
    price: 72.00,
    category: 'Shirts',
    gender: 'women',
    badge: 'BESTSELLER',
    colorHex: '#e1afb0',
    isDressShirt: true,
    imageUrl: '/women-shirt-blush-poplin.png',
    localImage: '/women-shirt-blush-poplin.png',
    description: 'Crisp organic cotton poplin tailored with clean structured seams, structured collar, and soft dusty rose blush tone.',
    swatches: [
      { name: 'Blush Pink', hex: '#e1afb0', id: 'shirt-blush-pink' },
      { name: 'Crisp White', hex: '#ffffff', id: 'shirt-blush-white' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: 28,
    details: [
      '100% Long-Staple Organic Cotton Poplin',
      'Clean Minimalist Placket with Tonal Buttons',
      'Tailored Modern Fit with Subtle Curved Hem'
    ]
  },
  {
    id: 'shirt-women-candy-stripe',
    name: 'Candy Pink Bengal Stripe Boyfriend Shirt',
    colorway: 'Candy Pink & White Stripe',
    price: 74.00,
    category: 'Shirts',
    gender: 'women',
    badge: 'SUMMER FAVORITE',
    colorHex: '#e894a4',
    isDressShirt: true,
    imageUrl: '/women-shirt-candy-stripe.png',
    localImage: '/women-shirt-candy-stripe.png',
    description: 'Vibrant candy pink and white vertical Bengal stripes woven from ultra-fine combed cotton in an easy boyfriend-fit silhouette.',
    swatches: [
      { name: 'Candy Stripe', hex: '#e894a4', id: 'shirt-candy-stripe' },
      { name: 'Classic Blue Stripe', hex: '#7ba4c9', id: 'shirt-blue-stripe' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: 20,
    details: [
      '100% Yarn-Dyed Combed Cotton',
      'Vertical Slimming Bengal Stripe Weave',
      'Relaxed Boyfriend Fit with Curved Hemline'
    ]
  },
  {
    id: 'shirt-women-sage-pinstripe',
    name: 'Sage Pinstripe Two-Piece Layered Shirt',
    colorway: 'Sage Green & Ecru Stripe',
    price: 76.00,
    category: 'Shirts',
    gender: 'women',
    badge: 'TRENDING',
    colorHex: '#93a793',
    isDressShirt: true,
    imageUrl: '/women-shirt-sage-pinstripe.png',
    localImage: '/women-shirt-sage-pinstripe.png',
    description: 'Fine pinstriped two-piece layered open overshirt set in earthy sage green. Designed for chic high-low summer layering.',
    swatches: [
      { name: 'Sage Green Stripe', hex: '#93a793', id: 'shirt-sage-stripe' },
      { name: 'Ecru Plain', hex: '#ede6dc', id: 'shirt-sage-ecru' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    stock: 18,
    details: [
      'Layered 2-in-1 Dual-Piece Construction',
      'Micro Pinstripe Yarn Dye',
      'Airy Relaxed Hang with Drop Shoulders'
    ]
  },
  {
    id: 'shirt-women-noir-pinstripe',
    name: 'Monochrome Pinstripe Open-Neck Drape Shirt',
    colorway: 'Monochrome Black & White Stripe',
    price: 70.00,
    category: 'Shirts',
    gender: 'women',
    badge: 'PARISIAN CHIC',
    colorHex: '#3a3a3c',
    isDressShirt: true,
    imageUrl: '/women-shirt-noir-pinstripe.png',
    localImage: '/women-shirt-noir-pinstripe.png',
    description: 'Sophisticated monochrome black & white vertical stripe shirt with open spread collar and graceful fluid drape.',
    swatches: [
      { name: 'Monochrome Noir Stripe', hex: '#3a3a3c', id: 'shirt-noir-stripe' },
      { name: 'White Stripe', hex: '#f0f0f0', id: 'shirt-white-stripe' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: 22,
    details: [
      'Breathable Fluid Rayon-Cotton Blend',
      'Open Notch Lapel Collar',
      'Clean Finished Cuffs and Hem'
    ]
  },

  // --- FEMALE T-SHIRTS ---
  {
    id: 'women-tee-block-stripe-polo',
    name: 'Oversized Block-Stripe Rugby Polo',
    colorway: 'Navy & Ecru Stripe',
    price: 54.00,
    originalPrice: 68.00,
    category: 'T-Shirts',
    gender: 'women',
    badge: 'NEW DROP',
    colorHex: '#1b2838',
    type: 'polo',
    imageUrl: '/women-tee-block-stripe-polo.png',
    localImage: '/women-tee-block-stripe-polo.png',
    modelImage: '/women-tee-block-stripe-polo.png',
    swatches: [
      { name: 'Navy & Cream Stripe', hex: '#1b2838', id: 'stripe-navy' },
      { name: 'Forest & Ecru Stripe', hex: '#233829', id: 'stripe-forest' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: 24,
    details: [
      'Heavyweight 280 GSM French Terry Cotton',
      'Contrast white twill collar with hidden button placket',
      'Dropped shoulders and relaxed boxy drape',
      'Pre-shrunk vintage wash hand feel'
    ],
    description: 'Crafted from premium heavyweight combed cotton in bold navy and ecru horizontal rugby stripes. Features an exaggerated boxy drape with a crisp contrast collar.'
  },
  {
    id: 'women-tee-beardless-jersey',
    name: 'Noir Athletic Contrast-Piping Jersey Tee',
    colorway: 'Matte Black & Ivory',
    price: 48.00,
    originalPrice: 60.00,
    category: 'T-Shirts',
    gender: 'women',
    badge: 'TRENDING',
    colorHex: '#141416',
    type: 'streetwear',
    imageUrl: '/women-tee-beardless-jersey.png',
    localImage: '/women-tee-beardless-jersey.png',
    modelImage: '/women-tee-beardless-jersey.png',
    swatches: [
      { name: 'Matte Black', hex: '#141416', id: 'jersey-black' },
      { name: 'Slate Grey', hex: '#4a4f56', id: 'jersey-slate' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    stock: 19,
    details: [
      '240 GSM Breathable Performance Mesh & Jersey Blend',
      'White raglan piping contour accents across chest & sleeves',
      'Archival typographic chest graphic motif',
      'Slightly elongated oversized silhouette'
    ],
    description: 'A sporty modern streetwear staple featuring aerodynamic contrast piping, raglan sleeve construction, and an effortless relaxed drape.'
  },
  {
    id: 'women-tee-la-varsity-polo',
    name: 'Varsity Script Ribbed V-Neck Polo',
    colorway: 'Deep Navy / White Trim',
    price: 52.00,
    originalPrice: 65.00,
    category: 'T-Shirts',
    gender: 'women',
    badge: 'COLLEGIATE',
    colorHex: '#162238',
    type: 'polo',
    imageUrl: '/women-tee-la-varsity-polo.png',
    localImage: '/women-tee-la-varsity-polo.png',
    modelImage: '/women-tee-la-varsity-polo.png',
    swatches: [
      { name: 'Varsity Navy', hex: '#162238', id: 'la-navy' },
      { name: 'Ivy Green', hex: '#1c3422', id: 'la-green' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    stock: 22,
    details: [
      'Micro-ribbed stretch cotton-modal knit',
      'Contrast flat-knit white polo collar & split neckline',
      'Embroidered Los Angeles arch lettering across chest',
      'Fitted silhouette with ribbed sleeve cuffs'
    ],
    description: 'Collegiate vintage charm meets modern tailoring with a form-flattering ribbed texture, open split v-neck collar, and crisp white accent piping.'
  },
  {
    id: 'women-tee-milan-striped-knit',
    name: 'Milan Fine-Knit Striped Polo Top',
    colorway: 'Navy & Cream Breton Stripe',
    price: 58.00,
    originalPrice: 74.00,
    category: 'T-Shirts',
    gender: 'women',
    badge: 'ATELIER KNIT',
    colorHex: '#1c2430',
    type: 'knit',
    imageUrl: '/women-tee-milan-striped-knit.png',
    localImage: '/women-tee-milan-striped-knit.png',
    modelImage: '/women-tee-milan-striped-knit.png',
    swatches: [
      { name: 'Breton Navy', hex: '#1c2430', id: 'milan-navy' },
      { name: 'Sand Khaki', hex: '#b39c82', id: 'milan-sand' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    stock: 16,
    details: [
      '100% Ultra-Fine Gauge Organic Combed Cotton Knit',
      'Full front button placket with genuine pearlized buttons',
      'Classic French Breton stripe repeat',
      'Tailored slim silhouette with ribbed hem and cuffs'
    ],
    description: 'An elegant European resort essential spun from luxurious fine-gauge cotton knit, finished with refined pearlized buttons and micro-striped elegance.'
  },
  {
    id: 'women-tee-contrast-collar-polo',
    name: 'Riviera Contrast-Trim V-Collar Polo',
    colorway: 'Midnight Navy / Pure White',
    price: 46.00,
    originalPrice: 58.00,
    category: 'T-Shirts',
    gender: 'women',
    badge: 'SIGNATURE',
    colorHex: '#111e33',
    type: 'polo',
    imageUrl: '/women-tee-contrast-collar-polo.png',
    localImage: '/women-tee-contrast-collar-polo.png',
    modelImage: '/women-tee-contrast-collar-polo.png',
    swatches: [
      { name: 'Midnight Navy', hex: '#111e33', id: 'vneck-navy' },
      { name: 'Burgundy Wine', hex: '#4a1525', id: 'vneck-wine' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: 27,
    details: [
      'Breathable Piqué Cotton with Natural Stretch',
      'Open buttonless Johnny collar with contrast white tipping',
      'Contrast white sleeve cuffs',
      'Straight hem with reinforced side vents'
    ],
    description: 'Timeless tennis polo aesthetic reimagined with a relaxed buttonless open Johnny collar, crisp white border accents, and breathable piqué texture.'
  },

  // --- FEMALE PANTS & SKIRTS ---
  
  {
    "id": "pants-women-ivory-pleated",
    "name": "Ivory Pleated High-Waisted Wide Trousers",
    "colorway": "Ivory Alabaster",
    "price": 135,
    "originalPrice": 158,
    "category": "Pants",
    "gender": "women",
    "badge": "TAILORED ATELIER",
    "colorHex": "#f4efe6",
    "imageUrl": "/women-pants-ivory-pleated.png",
    "localImage": "/women-pants-ivory-pleated.png",
    "hoverImage": "/women-pants-ivory-pleated.png",
    "description": "Masterfully tailored high-rise wide-leg trousers featuring deep front knife pleats, clean waistband with belt loops, and an ultra-fluid drape in refined Italian twill.",
    "swatches": [
        {
            "name": "Ivory Alabaster",
            "hex": "#f4efe6",
            "id": "pants-ivory-swatch"
        }
    ],
    "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL"
    ],
    "stock": 22,
    "details": [
        "High-Waisted Knife-Pleated Front Design",
        "Italian Poly-Viscose Fluid Suiting Twill",
        "Full-Length Architectural Wide-Leg Sweep",
        "Concealed Hook-and-Bar Atelier Closure"
    ]
},
  {
    "id": "pants-women-black-corset",
    "name": "Noir Double-Button Corset Waist Trousers",
    "colorway": "Midnight Noir",
    "price": 142,
    "originalPrice": 165,
    "category": "Pants",
    "gender": "women",
    "badge": "NEW SILHOUETTE",
    "colorHex": "#121214",
    "imageUrl": "/women-pants-black-corset.png",
    "localImage": "/women-pants-black-corset.png",
    "hoverImage": "/women-pants-black-corset.png",
    "description": "Sculptural high-rise trousers featuring an extended corset-style waistband with dual gold-toned metallic buttons, sharp structured pleats, and sweeping wide palazzo legs.",
    "swatches": [
        {
            "name": "Midnight Noir",
            "hex": "#121214",
            "id": "pants-noir-corset"
        }
    ],
    "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL"
    ],
    "stock": 19,
    "details": [
        "Extended Cinched Corset High Waistband",
        "Dual Engraved Atelier Metallic Buttons",
        "Creased Center Front Drape Lines",
        "Premium Anti-Crease Structured Crepe"
    ]
},
  {
    "id": "pants-women-white-palazzo",
    "name": "Pure White Fluid High-Waist Palazzo Trousers",
    "colorway": "Optic White",
    "price": 128,
    "originalPrice": 148,
    "category": "Pants",
    "gender": "women",
    "badge": "RUNWAY RESORT",
    "colorHex": "#ffffff",
    "imageUrl": "/women-pants-white-palazzo.png",
    "localImage": "/women-pants-white-palazzo.png",
    "hoverImage": "/women-pants-white-palazzo.png",
    "description": "Effortless Riviera resort aesthetic with a high-rise seamless waistline, subtle darting, and billowing relaxed palazzo legs tailored from breathable matte-weave linen blend.",
    "swatches": [
        {
            "name": "Optic White",
            "hex": "#ffffff",
            "id": "pants-white-palazzo"
        }
    ],
    "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL"
    ],
    "stock": 24,
    "details": [
        "High-Rise Contoured Waist Panel",
        "Breathable Lightweight Matte-Weave Blend",
        "Floor-Skimming Relaxed Silhouette",
        "Seamless Hidden Side Zipper"
    ]
},
  {
    "id": "pants-women-charcoal-horseshoe",
    "name": "Washed Charcoal Horseshoe Barrel Denim",
    "colorway": "Washed Charcoal",
    "price": 148,
    "originalPrice": 172,
    "category": "Pants",
    "gender": "women",
    "badge": "STATEMENT DENIM",
    "colorHex": "#2c2c2e",
    "imageUrl": "/women-pants-charcoal-horseshoe.png",
    "localImage": "/women-pants-charcoal-horseshoe.png",
    "hoverImage": "/women-pants-charcoal-horseshoe.png",
    "description": "The definitive modern statement silhouette: dramatic curved horseshoe / balloon leg cut from 13.5oz vintage washed black denim with whiskered thighs and tapered hem.",
    "swatches": [
        {
            "name": "Washed Charcoal",
            "hex": "#2c2c2e",
            "id": "pants-charcoal-horseshoe"
        }
    ],
    "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL"
    ],
    "stock": 18,
    "details": [
        "13.5oz Heavyweight 100% Cotton Ring-Spun Denim",
        "Architectural Curved Barrel / Horseshoe Leg",
        "Vintage Sun-Fade Whiskering & Stone Wash",
        "Custom Engraved Hardware & 5-Pocket Styling"
    ]
},
  {
    "id": "pants-women-indigo-horseshoe",
    "name": "Vintage Indigo Horseshoe Barrel Denim",
    "colorway": "Vintage Indigo Wash",
    "price": 148,
    "originalPrice": 172,
    "category": "Pants",
    "gender": "women",
    "badge": "STATEMENT DENIM",
    "colorHex": "#6d8fa8",
    "imageUrl": "/women-pants-indigo-horseshoe.png",
    "localImage": "/women-pants-indigo-horseshoe.png",
    "hoverImage": "/women-pants-indigo-horseshoe.png",
    "description": "Sculpted curved barrel denim in an authentic vintage blue stone wash. Features an exaggerated outer curve through the knee with gentle inward taper at the stacked ankles.",
    "swatches": [
        {
            "name": "Vintage Indigo",
            "hex": "#6d8fa8",
            "id": "pants-indigo-horseshoe"
        }
    ],
    "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL"
    ],
    "stock": 20,
    "details": [
        "Authentic Heavy Vintage Wash Japanese Denim",
        "Dramatic Horseshoe Curved Outer Seam Construction",
        "High-Rise Rise with Relaxed Hip & Thigh Volume",
        "Atelier Clean-Finished Heavy Gauge Hem"
    ]
},
  {
    "id": "pants-women-black-flare",
    "name": "Sculpt High-Waisted Flare Yoga Pants",
    "colorway": "Onyx Black",
    "price": 118,
    "originalPrice": 138,
    "category": "Pants",
    "gender": "women",
    "badge": "ATELIER ACTIVE",
    "colorHex": "#121212",
    "imageUrl": "/women-pants-black-flare.png",
    "localImage": "/women-pants-black-flare.png",
    "hoverImage": "/women-pants-black-flare.png",
    "description": "Sculptural high-waisted flared bootcut yoga pants engineered with four-way stretch compression fabric, tummy-control crossover waistband, and an elongated bootcut flare hem.",
    "swatches": [
        {
            "name": "Onyx Black",
            "hex": "#121212",
            "id": "pants-black-flare"
        }
    ],
    "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL"
    ],
    "stock": 28,
    "details": [
        "High-Rise Contoured Core Support Waistband",
        "Buttery-Soft 4-Way Stretch Sculpting Knit",
        "Elongating Flared Bootcut Silhouette",
        "Non-Sheer Squat-Proof Atelier Weave"
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
  },

  // =============================================================
  // MEN'S CURATED FULL LOOK COMBOS
  // =============================================================
  {
    id: 'combo-men-navy-linen',
    name: 'Midnight Navy Linen & Sand Trouser Full Combo',
    colorway: 'Midnight Navy / Pleated Sand',
    price: 195.00,
    originalPrice: 229.00,
    category: 'Combos',
    gender: 'men',
    badge: 'LOOK SET • 15% OFF',
    colorHex: '#1c2d42',
    imageUrl: '/men-navy-linen-cutout.png',
    localImage: '/men-navy-linen-cutout.png',
    description: 'Complete 3-piece tailored outfit including the French Normandy midnight navy open-collar linen shirt, fluid sand pleated wide-leg trousers, and vintage leather watch.',
    swatches: [
      { name: 'Navy & Sand Set', hex: '#1c2d42', id: 'combo-navy-sand' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 18,
    details: [
      'Normandy 100% Pure Flax Linen Shirt',
      'Pleated Fluid Sand Trousers with Hidden Adjuster',
      'Curated Head-to-Toe Milanese Palette'
    ]
  },
  {
    id: 'combo-men-black-zip-polo',
    name: 'Textured Black Quarter-Zip & Stone Chinos Combo',
    colorway: 'Onyx Black / Stone Italian Chino',
    price: 215.00,
    originalPrice: 245.00,
    category: 'Combos',
    gender: 'men',
    badge: 'ATELIER COMBO',
    colorHex: '#121212',
    imageUrl: '/men-black-zip-polo-cutout.png',
    localImage: '/men-black-zip-polo-cutout.png',
    description: 'Complete Italian smart-casual ensemble: fine-textured quarter-zip ribbed knit polo in midnight onyx black paired with tailored stone-beige relaxed trousers.',
    swatches: [
      { name: 'Onyx & Stone Set', hex: '#121212', id: 'combo-black-stone' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 20,
    details: [
      '100% Textured Combed Cotton Ribbed Polo',
      'Tailored Italian Cotton Relaxed Chinos',
      'Precision Color-Matched Palette'
    ]
  },
  {
    id: 'combo-men-ecru-polo',
    name: 'Quiet Luxury Ecru Polo & Washed Denim Combo',
    colorway: 'Natural Ecru / Washed Black Denim',
    price: 188.00,
    originalPrice: 218.00,
    category: 'Combos',
    gender: 'men',
    badge: 'QUIET LUXURY',
    colorHex: '#f4efe6',
    imageUrl: '/men-ecru-polo-cutout.png',
    localImage: '/men-ecru-polo-cutout.png',
    description: 'Effortless understated luxury combo featuring the open-collar ribbed knit polo in natural ecru paired with relaxed washed black denim jeans.',
    swatches: [
      { name: 'Ecru & Black Set', hex: '#f4efe6', id: 'combo-ecru-black' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 16,
    details: [
      'Fine-Gauge Combed Cotton Johnny Polo',
      'Heavyweight 14oz Washed Black Denim',
      'Complete Coordinated Street Luxe Set'
    ]
  },
  {
    id: 'combo-men-archive-mocha',
    name: 'Two-Tone Archive Mocha Hoodie & Cargo Combo',
    colorway: 'Mocha Brown / Washed Utility Grey',
    price: 235.00,
    originalPrice: 263.00,
    category: 'Combos',
    gender: 'men',
    badge: 'ARCHIVE COMBO',
    colorHex: '#5c4033',
    imageUrl: '/men-archive-mocha-cutout.png',
    localImage: '/men-archive-mocha-cutout.png',
    description: 'Heavyweight streetwear atelier combo featuring the 480 GSM two-tone mocha raglan hoodie and vintage washed grey wide utility cargo trousers.',
    swatches: [
      { name: 'Mocha & Grey Set', hex: '#5c4033', id: 'combo-mocha-grey' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 14,
    details: [
      '480 GSM Heavyweight French Terry Raglan Hoodie',
      'Multi-Pocket Wide Utility Cargo Trousers',
      'Complete Atelier Streetwear Styling'
    ]
  },
  {
    "id": "combo-women-denim-corset",
    "name": "Denim Corset & Wide-Leg Jeans Atelier Set",
    "colorway": "Vintage Indigo / Crisp Poplin",
    "price": 225,
    "originalPrice": 265,
    "category": "Combos",
    "gender": "women",
    "badge": "LOOK SET • 15% OFF",
    "colorHex": "#7ba4c9",
    "imageUrl": "/women-combo-denim-corset.png",
    "localImage": "/women-combo-denim-corset.png",
    "hoverImage": "/women-combo-denim-corset.png",
    "description": "Complete head-to-toe Parisian atelier ensemble: structured washed denim boned corset top layered over an ethereal bishop-sleeve white poplin blouse, matching wide-leg tailored jeans, structured crescent leather bag, and court sneakers.",
    "swatches": [
        {
            "name": "Denim & Poplin Look",
            "hex": "#7ba4c9",
            "id": "combo-denim-corset"
        }
    ],
    "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL"
    ],
    "stock": 16,
    "details": [
        "Structured Washed Denim Boned Corset Top",
        "Crisp White Bishop-Sleeve Poplin Blouse",
        "High-Rise Vintage Wash Wide-Leg Denim Jeans",
        "Curated Atelier Accessories & Footwear Match"
    ]
},
  {
    "id": "combo-women-lace-corset",
    "name": "Espresso Lace Corset & Sand Denim Set",
    "colorway": "Espresso Lace / Sand Denim",
    "price": 210,
    "originalPrice": 248,
    "category": "Combos",
    "gender": "women",
    "badge": "ATELIER COMBO",
    "colorHex": "#4a2c20",
    "imageUrl": "/women-combo-lace-corset.png",
    "localImage": "/women-combo-lace-corset.png",
    "hoverImage": "/women-combo-lace-corset.png",
    "description": "Sensual high-fashion street-luxe combination: floral sheer lace underwire corset top in rich dark espresso paired with relaxed high-waisted sand denim jeans, minimalist strappy leather heels, and ivory bag.",
    "swatches": [
        {
            "name": "Espresso & Sand Look",
            "hex": "#4a2c20",
            "id": "combo-lace-sand"
        }
    ],
    "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL"
    ],
    "stock": 14,
    "details": [
        "Underwire Sheer Floral Lace Corset Bustier",
        "Relaxed High-Waist Neutral Sand Denim",
        "Minimalist Italian Strappy Leather Sandals",
        "Curated Studio Flat-Lay Styling"
    ]
},
  {
    "id": "combo-women-brown-corduroy",
    "name": "Cocoa Cropped Corduroy & Baggy Denim Combo",
    "colorway": "Cocoa Corduroy / Charcoal Wash",
    "price": 198,
    "originalPrice": 230,
    "category": "Combos",
    "gender": "women",
    "badge": "SIGNATURE COMBO",
    "colorHex": "#5c4033",
    "imageUrl": "/women-combo-brown-corduroy.png",
    "localImage": "/women-combo-brown-corduroy.png",
    "hoverImage": "/women-combo-brown-corduroy.png",
    "description": "Effortless signature streetwear set: wide-wale cocoa brown cropped corduroy overshirt over a second-skin white crew tee, paired with ultra-wide pleated charcoal wash denim and canvas tote.",
    "swatches": [
        {
            "name": "Cocoa & Charcoal Look",
            "hex": "#5c4033",
            "id": "combo-cocoa-charcoal"
        }
    ],
    "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL"
    ],
    "stock": 20,
    "details": [
        "Wide-Wale 100% Cotton Cropped Corduroy Jacket",
        "Fitted Premium Heavy Cotton Base Tee",
        "Ultra-Wide Stacked Charcoal Wash Baggy Jeans",
        "Canvas Studio Tote Bag & Platform Court Lows"
    ]
},
  {
    "id": "combo-women-pink-corduroy",
    "name": "Dusty Rose Corduroy & Vintage Blue Denim Combo",
    "colorway": "Dusty Rose / Vintage Indigo",
    "price": 198,
    "originalPrice": 230,
    "category": "Combos",
    "gender": "women",
    "badge": "NEW CO-ORD • 15% OFF",
    "colorHex": "#b87d86",
    "imageUrl": "/women-combo-pink-corduroy.png",
    "localImage": "/women-combo-pink-corduroy.png",
    "hoverImage": "/women-combo-pink-corduroy.png",
    "description": "Playful pastel atelier outfit: vintage dusty rose cropped corduroy jacket with balloon gathered cuffs, clean white fitted crew tee, and slouchy wide-leg vintage blue indigo denim.",
    "swatches": [
        {
            "name": "Rose & Indigo Look",
            "hex": "#b87d86",
            "id": "combo-rose-indigo"
        }
    ],
    "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL"
    ],
    "stock": 18,
    "details": [
        "Vintage Dusty Rose Cropped Corduroy Overshirt",
        "Soft-Touch Stretch Cotton Fitted Tee",
        "Relaxed High-Rise Vintage Blue Denim",
        "Natural Cream Canvas Shopper & White Sneakers"
    ]
  }
];

