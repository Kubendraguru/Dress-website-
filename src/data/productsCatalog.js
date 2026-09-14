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

// 1f. The 5 Signature Couple Ensembles
export const COUPLE_HERO = [
  {
    id: 'couple-burgundy-cord',
    name: 'Burgundy Atelier Couple Co-ord Set',
    subName: 'Relaxed Wine Button-Downs & Pleated Cream Trousers',
    hex: '#581825',
    secondaryHex: '#e8e2d5',
    pantone: 'PANTONE 19-1725 TCX',
    textColor: 'text-rose-950',
    price: 285.00,
    originalPrice: 335.00,
    fabric: '100% Breathable Combed Cotton & Fluid Suiting Twill',
    fit: 'Relaxed Tailored Overshirt & Wide-Leg Pleated Trousers',
    gender: 'couple',
    category: 'Combos',
    badge: 'COUPLE CO-ORD • 15% OFF',
    imageUrl: '/couple-burgundy-cord.png',
    localImage: '/couple-burgundy-cord.png',
    details: 'Coordinated 2-person ensemble: tailored wine burgundy button-downs paired with high-waisted pleated fluid cream trousers and white leather trainers.',
    description: 'Harmoniously coordinated couple ensemble featuring rich wine burgundy button-down overshirts paired with high-waisted pleated fluid cream trousers.'
  },
  {
    id: 'couple-noir-linen',
    name: 'Noir Black & Sand Tailored Couple Set',
    subName: 'Camp-Collar Black Shirts & Tailored Sand Chinos',
    hex: '#18181a',
    secondaryHex: '#ded3c1',
    pantone: 'PANTONE 19-4005 TCX',
    textColor: 'text-neutral-100',
    price: 295.00,
    originalPrice: 345.00,
    fabric: 'Premium Anti-Crease Crepe & Italian Cotton-Linen Twill',
    fit: 'Boxy Casual Shirts & High-Waisted Wide Trousers',
    gender: 'couple',
    category: 'Combos',
    badge: 'SIGNATURE PAIR • 15% OFF',
    imageUrl: '/couple-noir-linen.png',
    localImage: '/couple-noir-linen.png',
    details: 'Coordinated 2-person ensemble: matching midnight black relaxed shirts with tailored high-waisted sand chino trousers, dark acetate sunglasses, and minimalist trainers.',
    description: 'Effortless cosmopolitan pair featuring matching midnight black relaxed shirts with tailored high-waisted sand chino trousers and sleek black accessories.'
  },
  {
    id: 'couple-indigo-festive',
    name: 'Midnight Indigo Resort & Kurta Couple Duo',
    subName: 'Navy Button-Down & Embroidered Kurta Ensemble',
    hex: '#1e293b',
    secondaryHex: '#ffffff',
    pantone: 'PANTONE 19-3921 TCX',
    textColor: 'text-sky-200',
    price: 310.00,
    originalPrice: 365.00,
    fabric: 'French Normandy Linen & Embroidered Silk-Cotton Blend',
    fit: 'Classic Tailored Shirt & Fluid Embroidered Kurta Palazzo',
    gender: 'couple',
    category: 'Combos',
    badge: 'FESTIVE CAPSULE • 15% OFF',
    imageUrl: '/couple-indigo-festive.png',
    localImage: '/couple-indigo-festive.png',
    details: 'Coordinated 2-person ensemble: gentleman\'s midnight navy linen button-down with relaxed cream trousers, complemented by her intricately embroidered indigo tunic and matching palazzo with dupatta.',
    description: 'Exquisite celebration pair featuring gentleman\'s midnight navy linen button-down with relaxed cream trousers, and her silver-thread embroidered indigo tunic with dupatta.'
  },
  {
    id: 'couple-mocha-linen',
    name: 'Mocha Espresso Resort Couple Ensemble',
    subName: 'Rich Earthy Brown Linen Shirts & Fluid Trousers',
    hex: '#5c4033',
    secondaryHex: '#f4efe6',
    pantone: 'PANTONE 19-1220 TCX',
    textColor: 'text-amber-100',
    price: 290.00,
    originalPrice: 340.00,
    fabric: '100% Pure Garment-Dyed French Linen & Italian Poly-Viscose Twill',
    fit: 'Relaxed Resort Fit Shirts & High-Rise Pleated Palazzo',
    gender: 'couple',
    category: 'Combos',
    badge: 'AUTUMN RESORT • 15% OFF',
    imageUrl: '/couple-mocha-linen.png',
    localImage: '/couple-mocha-linen.png',
    details: 'Coordinated 2-person ensemble: matching rich mocha espresso linen button-downs paired with flowing high-rise ivory pleated trousers and tortoiseshell accents.',
    description: 'Romantic earthy palette: matching rich mocha espresso linen button-downs paired with flowing high-rise ivory pleated trousers and tortoiseshell accessories.'
  },
  {
    id: 'couple-sky-stripe',
    name: 'Sky Blue Bengal Stripe Summer Couple Set',
    subName: 'Vertical Pinstripe Linen Shirt & Peplum Tie Top',
    hex: '#7ba4c9',
    secondaryHex: '#f5f2eb',
    pantone: 'PANTONE 14-4115 TCX',
    textColor: 'text-sky-950',
    price: 275.00,
    originalPrice: 320.00,
    fabric: '100% Yarn-Dyed Combed Cotton & Breathable Linen-Blend Twill',
    fit: 'Gentleman Relaxed Shirt & Lady Peplum Tie-Front Top with Wide Pants',
    gender: 'couple',
    category: 'Combos',
    badge: 'SUMMER ESCAPE • 15% OFF',
    imageUrl: '/couple-sky-stripe.png',
    localImage: '/couple-sky-stripe.png',
    details: 'Coordinated 2-person ensemble: gentleman\'s relaxed sky blue Bengal vertical stripe linen shirt, paired with her matching bow-tie peplum stripe top and airy ecru linen wide trousers.',
    description: 'Sunny Riviera summer charm: gentleman\'s relaxed sky blue Bengal vertical stripe linen shirt, paired with her matching bow-tie peplum stripe top and airy ecru linen wide trousers.'
  }
];

// 1g. The 5 Signature Hanging Men's T-Shirts & Polos for the Interactive Rack
export const MEN_TEES_HERO = [
  {
    id: 'men-tee-ivory-pleated-polo',
    name: 'Ivory Pleated Knit Open-Collar Polo',
    subName: 'Fine-Gauge Vertical Pleat Cotton Knit',
    hex: '#f6f4ee',
    secondaryHex: '#161618',
    pantone: 'PANTONE 11-0601 TCX',
    textColor: 'text-neutral-900',
    price: 58.00,
    originalPrice: 72.00,
    fabric: '100% Breathable Combed Cotton Pleated Knit',
    fit: 'Relaxed Tailored Polo Fit',
    gender: 'men',
    category: 'T-Shirts',
    badge: 'NEW SEASON',
    hotspotX: 11.0,
    hotspotY: 45,
    imageUrl: '/men-tee-ivory-pleated-polo.png',
    localImage: '/men-tee-ivory-pleated-polo.png',
    details: 'Relaxed open notch Johnny collar, architectural vertical pleat knit texture, ribbed sleeve cuffs and hem.',
    description: 'Architectural fine-gauge vertical pleated knit polo featuring a relaxed Johnny open collar, ribbed sleeve cuffs, and tailored fluid drape.'
  },
  {
    id: 'men-tee-noir-zip-polo',
    name: 'Noir Tipped Quarter-Zip Knit Polo',
    subName: 'Athletic Quarter-Zip & Contrast Double Tipping',
    hex: '#141416',
    secondaryHex: '#ffffff',
    pantone: 'PANTONE 19-4005 TCX',
    textColor: 'text-neutral-100',
    price: 62.00,
    originalPrice: 78.00,
    fabric: 'High-Density Pima Cotton & Modal Stretch Blend',
    fit: 'Athletic Tapered Modern Fit',
    gender: 'men',
    category: 'T-Shirts',
    badge: 'ATELIER DROP',
    hotspotX: 30.0,
    hotspotY: 45,
    imageUrl: '/men-tee-noir-zip-polo.png',
    localImage: '/men-tee-noir-zip-polo.png',
    details: 'Polished silver quarter-zip closure, contrast double white tipped collar and sleeve cuffs.',
    description: 'Modern luxury athletic silhouette crafted with subtle stretch jersey knit, polished silver quarter-zip collar, and contrast dual white tipping on collar and sleeves.'
  },
  {
    id: 'men-tee-stripe-knit',
    name: 'Block-Stripe Textured Knit Crewneck',
    colorway: 'Ivory, Sand & Onyx Stripes',
    subName: 'Textured Grid Knit with Contrast Chest Bands',
    hex: '#f0ece1',
    secondaryHex: '#1e2838',
    pantone: 'PANTONE 13-0905 TCX',
    textColor: 'text-neutral-900',
    price: 54.00,
    originalPrice: 68.00,
    fabric: '100% Premium Cotton Textured Waffle Knit',
    fit: 'Tailored Relaxed Fit',
    gender: 'men',
    category: 'T-Shirts',
    badge: 'BESTSELLER',
    hotspotX: 50.0,
    hotspotY: 45,
    imageUrl: '/men-tee-stripe-knit.png',
    localImage: '/men-tee-stripe-knit.png',
    details: 'Engineered yarn-dyed horizontal chest stripes, textured vertical grid knit body, reinforced ribbed crewneck collar.',
    description: 'Retro European aesthetic featuring horizontal chest color-block stripes over vertical grid-textured knit with reinforced ribbed crewneck collar.'
  },
  {
    id: 'men-tee-luffy-anime',
    name: 'Luffy Straw Hat Anime Heavyweight Tee',
    subName: '260 GSM Heavyweight Streetwear Tee',
    hex: '#f5efe4',
    secondaryHex: '#8b2626',
    pantone: 'PANTONE 11-0104 TCX',
    textColor: 'text-neutral-900',
    price: 46.00,
    originalPrice: 58.00,
    fabric: '260 GSM Heavyweight Ringspun Organic Cotton',
    fit: 'Oversized Streetwear Drop-Shoulder',
    gender: 'men',
    category: 'T-Shirts',
    badge: 'ANIME CAPSULE',
    hotspotX: 70.0,
    hotspotY: 45,
    imageUrl: '/men-tee-luffy-anime.png',
    localImage: '/men-tee-luffy-anime.png',
    details: 'High-definition back screenprint artwork, Japanese kanji calligraphy, pirate insignia crest, reinforced neckline.',
    description: 'Statement streetwear graphic tee showcasing bold Luffy straw hat artwork, brush calligraphy, and oversized drop-shoulder cut crafted from 260 GSM heavyweight cotton.'
  },
  {
    id: 'men-tee-tokyo-racing',
    name: 'Tokyo Underground Racing Graphic Tee',
    subName: 'Japanese Tuner Car Streetwear Tee',
    hex: '#f5ecd5',
    secondaryHex: '#222222',
    pantone: 'PANTONE 12-0712 TCX',
    textColor: 'text-neutral-900',
    price: 44.00,
    originalPrice: 55.00,
    fabric: '240 GSM Combed Ring-Spun Cotton',
    fit: 'Relaxed Boxy Street Cut',
    gender: 'men',
    category: 'T-Shirts',
    badge: 'STREETWEAR',
    hotspotX: 89.0,
    hotspotY: 45,
    imageUrl: '/men-tee-tokyo-racing.png',
    localImage: '/men-tee-tokyo-racing.png',
    details: 'Multi-layer front tuner sports car illustration, Tokyo underground dual sleeve screenprints, boxy relaxed drape.',
    description: 'Japanese car culture racing tee with detailed underground tuner sports car art, dual sleeve typographic prints, and coordinates in a relaxed boxy fit.'
  }
];

// 1h. The 5 Signature Hanging Men's Pants for the Interactive Rack
export const MEN_PANTS_HERO = [
  {
    id: 'men-pants-noir-pleated',
    name: 'Noir High-Waisted Pleated Suiting Trousers',
    subName: 'Italian Suiting Poly-Viscose Fluid Twill',
    hex: '#18181a',
    secondaryHex: '#ffffff',
    pantone: 'PANTONE 19-4005 TCX',
    textColor: 'text-neutral-100',
    price: 135.00,
    originalPrice: 165.00,
    fabric: 'Italian Poly-Viscose Fluid Suiting Twill',
    fit: 'High-Waisted Deep Double Pleat Relaxed Drape',
    gender: 'men',
    category: 'Pants',
    badge: 'ATELIER SUITING',
    hotspotX: 11.0,
    hotspotY: 45,
    imageUrl: '/men-pants-noir-pleated.png',
    localImage: '/men-pants-noir-pleated.png',
    details: 'Extended high-rise waistband with button tab closure, double front knife pleats, sharp pressed center crease lines, side slant pockets.',
    description: 'Masterfully tailored high-rise suiting trousers featuring deep front double pleats, an extended waistband with side button tab, and an ultra-fluid drape.'
  },
  {
    id: 'men-pants-olive-cargo',
    name: 'Washed Olive Relaxed Utility Cargo Pants',
    subName: '100% Vintage Washed Cotton Twill',
    hex: '#646862',
    secondaryHex: '#e8e5dc',
    pantone: 'PANTONE 18-0515 TCX',
    textColor: 'text-neutral-100',
    price: 118.00,
    originalPrice: 145.00,
    fabric: 'Heavyweight Pre-Washed Cotton Twill',
    fit: 'Relaxed Wide-Leg with Articulated Knee Seams',
    gender: 'men',
    category: 'Pants',
    badge: 'UTILITY ESSENTIAL',
    hotspotX: 30.0,
    hotspotY: 45,
    imageUrl: '/men-pants-olive-cargo.png',
    localImage: '/men-pants-olive-cargo.png',
    details: 'Encased elastic waistband with tonal drawstring, dual side bellows cargo pockets with flap closures, articulated knee darts, relaxed hem.',
    description: 'Functional utilitarian aesthetic tailored from vintage washed olive-gray cotton twill with roomy cargo flap pockets and articulated knee panels.'
  },
  {
    id: 'men-pants-white-skate',
    name: 'Optical White Wide-Leg Skate Denim Trousers',
    subName: '13oz Unbleached Clean White Cotton Denim',
    hex: '#f5f4ef',
    secondaryHex: '#121212',
    pantone: 'PANTONE 11-0601 TCX',
    textColor: 'text-neutral-900',
    price: 128.00,
    originalPrice: 155.00,
    fabric: '13oz 100% Ring-Spun Clean Cotton Denim',
    fit: 'High-Rise Relaxed Wide Skate Sweep',
    gender: 'men',
    category: 'Pants',
    badge: 'MINIMALIST',
    hotspotX: 50.0,
    hotspotY: 45,
    imageUrl: '/men-pants-white-skate.png',
    localImage: '/men-pants-white-skate.png',
    details: 'Architectural vertical center leg seams, clean tailored waistband, 4-pocket construction with relaxed skater silhouette.',
    description: 'Pristine optical white wide-leg denim trousers detailed with distinct vertical center front seams and a sweeping floor-grazing hem.'
  },
  {
    id: 'men-pants-acid-denim',
    name: 'Stone-Washed Acid Blue Baggy Denim Jeans',
    subName: 'Authentic 90s Vintage Acid Wash Denim',
    hex: '#7ba4c9',
    secondaryHex: '#30445c',
    pantone: 'PANTONE 14-4115 TCX',
    textColor: 'text-sky-950',
    price: 142.00,
    originalPrice: 175.00,
    fabric: '13.5oz Authentic Stone-Washed Ring-Spun Denim',
    fit: 'Exaggerated 90s Baggy Wide-Leg',
    gender: 'men',
    category: 'Pants',
    badge: 'VINTAGE DROP',
    hotspotX: 70.0,
    hotspotY: 45,
    imageUrl: '/men-pants-acid-denim.png',
    localImage: '/men-pants-acid-denim.png',
    details: 'Allover vintage marble acid wash whiskering, subtle micro-distressing at coin pocket, 5-pocket hardware, loose slouchy drape.',
    description: 'Iconic 90s skater nostalgia cut from 13.5oz heavyweight marble stone-washed denim in an effortless relaxed baggy silhouette.'
  },
  {
    id: 'men-pants-cyber-jogger',
    name: 'Y2K Cyber-Tribal Graphic Heavyweight Sweatpants',
    subName: '400 GSM Ultra-Heavy French Terry Fleece',
    hex: '#141416',
    secondaryHex: '#ffffff',
    pantone: 'PANTONE 19-4005 TCX',
    textColor: 'text-neutral-100',
    price: 124.00,
    originalPrice: 150.00,
    fabric: '400 GSM Heavyweight Brushed French Terry Cotton',
    fit: 'Baggy Relaxed Streetwear Jogger',
    gender: 'men',
    category: 'Pants',
    badge: 'STREETWEAR',
    hotspotX: 89.0,
    hotspotY: 45,
    imageUrl: '/men-pants-cyber-jogger.png',
    localImage: '/men-pants-cyber-jogger.png',
    details: 'Oversized white cyber-tribal gothic screenprint graphics running down both pant legs, thick ribbed elastic waistband, deep side pockets.',
    description: 'Statement streetwear sweatpants crafted from 400 GSM ultra-heavy French terry fleece featuring bold Y2K cyber-tribal screenprint artwork down both legs.'
  }
];

// 1i. The 5 Signature Hanging Men's Combos / 2-Piece Ensembles for the Interactive Rail
export const MEN_COMBOS_HERO = [
  {
    id: 'men-combo-camel-jacket-set',
    name: 'Camel Wool Work Jacket & Pleated Trousers Set',
    subName: 'Brushed Wool Overshirt + Mock-Neck Knit + Pleated Pants',
    hex: '#9e734c',
    secondaryHex: '#141416',
    pantone: 'PANTONE 17-1137 TCX',
    textColor: 'text-amber-100',
    price: 168.00,
    originalPrice: 198.00,
    fabric: 'Heavyweight Melton Wool Blend & Fluid Suiting Twill',
    fit: 'Boxy Structured Overshirt & Relaxed Pleated Trousers',
    gender: 'men',
    category: 'Combos',
    badge: '2-PIECE SET • 15% OFF',
    hotspotX: 11.0,
    hotspotY: 44,
    imageUrl: '/men-combo-camel-jacket-set.png',
    localImage: '/men-combo-camel-jacket-set.png',
    details: '2-Piece Outfit: Camel brown brushed melton wool work jacket with dual flap chest pockets over white mock-neck knit, paired with tailored noir pleated trousers and clean court sneakers.',
    description: 'Elevated Parisian autumn aesthetic pairing a rich camel brown structured wool overshirt with high-rise pleated black trousers, white knit underlayer, and white leather trainers.'
  },
  {
    id: 'men-combo-black-oxford-denim',
    name: 'Noir Oxford Shirt & Light Baggy Denim Duo',
    subName: 'Garment-Dyed Oxford Button-Down & Vintage Baggy Denim',
    hex: '#141416',
    secondaryHex: '#7ba4c9',
    pantone: 'PANTONE 19-4005 TCX',
    textColor: 'text-neutral-100',
    price: 148.00,
    originalPrice: 175.00,
    fabric: 'Garment-Dyed Oxford Cotton & 13.5oz Stone-Washed Denim',
    fit: 'Relaxed Button-Down & Baggy Skate Denim Trousers',
    gender: 'men',
    category: 'Combos',
    badge: '2-PIECE SET • 15% OFF',
    hotspotX: 30.0,
    hotspotY: 44,
    imageUrl: '/men-combo-black-oxford-denim.png',
    localImage: '/men-combo-black-oxford-denim.png',
    details: '2-Piece Outfit: Pitch black relaxed button-down oxford shirt with rolled sleeves and unbuttoned collar, paired with light indigo baggy stone-washed denim jeans and white sneakers.',
    description: 'Effortless cosmopolitan street style combining an unbuttoned black oxford long-sleeve shirt with vintage stone-washed baggy denim and retro white trainers.'
  },
  {
    id: 'men-combo-graphic-23-streetwear',
    name: '#23 Graphic Boxy Streetwear Tee & Black Denim Set',
    subName: '280 GSM Heavyweight #23 Tee & Washed Charcoal Denim',
    hex: '#f6f4ee',
    secondaryHex: '#25262a',
    pantone: 'PANTONE 11-0601 TCX',
    textColor: 'text-neutral-900',
    price: 138.00,
    originalPrice: 160.00,
    fabric: '280 GSM Combed Jersey & Heavyweight Acid-Washed Denim',
    fit: 'Oversized Boxy Silhouette & Ultra-Wide Skate Jeans',
    gender: 'men',
    category: 'Combos',
    badge: 'STREETWEAR • 15% OFF',
    hotspotX: 50.0,
    hotspotY: 44,
    imageUrl: '/men-combo-graphic-23-streetwear.png',
    localImage: '/men-combo-graphic-23-streetwear.png',
    details: '2-Piece Outfit: Heavyweight optic white graphic boxy streetwear tee with bold front and sleeve varsity numbering, paired with washed charcoal black puddle denim jeans and sneakers.',
    description: 'Tokyo Y2K streetwear vibe featuring an oversized heavyweight #23 graphic tee paired with washed black wide-leg puddle jeans and skate sneakers.'
  },
  {
    id: 'men-combo-pinstripe-charcoal',
    name: 'Skyline Pinstripe Oxford & Charcoal Denim Set',
    subName: 'Crisp Pinstripe Button-Down & Washed Black Denim',
    hex: '#7c94a6',
    secondaryHex: '#2b2c30',
    pantone: 'PANTONE 16-4013 TCX',
    textColor: 'text-sky-950',
    price: 154.00,
    originalPrice: 180.00,
    fabric: '100% Fine Poplin Cotton & Ring-Spun Black Washed Denim',
    fit: 'Relaxed Tailored Fit & Wide-Leg Relaxed Silhouette',
    gender: 'men',
    category: 'Combos',
    badge: 'ATELIER SMART • 15% OFF',
    hotspotX: 70.0,
    hotspotY: 44,
    imageUrl: '/men-combo-pinstripe-charcoal.png',
    localImage: '/men-combo-pinstripe-charcoal.png',
    details: '2-Piece Outfit: Skyline blue & white pinstripe button-down shirt with rolled cuffs and subtle chest embroidery, paired with relaxed washed charcoal denim and dark sunglasses.',
    description: 'Modern smart-casual aesthetic pairing a relaxed blue-and-white vertical pinstripe oxford button-down with washed charcoal denim trousers and white trainers.'
  },
  {
    id: 'men-combo-plaid-linen-black',
    name: 'Silver Plaid Linen Overshirt & Noir Chinos Duo',
    subName: 'Subtle Plaid Linen-Cotton Shirt & Tailored Black Chinos',
    hex: '#d4d6db',
    secondaryHex: '#141416',
    pantone: 'PANTONE 14-4102 TCX',
    textColor: 'text-neutral-900',
    price: 158.00,
    originalPrice: 185.00,
    fabric: 'Breathable Plaid Linen-Cotton Weave & Cotton Suiting Twill',
    fit: 'Relaxed Lightweight Overshirt & Straight-Leg Noir Chinos',
    gender: 'men',
    category: 'Combos',
    badge: 'SUMMER ESSENTIAL • 15% OFF',
    hotspotX: 89.0,
    hotspotY: 44,
    imageUrl: '/men-combo-plaid-linen-black.png',
    localImage: '/men-combo-plaid-linen-black.png',
    details: '2-Piece Outfit: Silver-grey and white subtle windowpane plaid linen overshirt with chest pocket, paired with straight-leg tailored noir black chinos, leather backpack and watch.',
    description: 'Minimalist Tokyo cafe aesthetic pairing a breathable silver plaid linen-cotton shirt with straight tailored black cotton chinos and refined leather accessories.'
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

  // --- FEMALE 2-PIECE COMBOS / CO-ORD SETS ---
  {
    id: 'combo-women-pink-corduroy',
    name: 'Dusty Rose Corduroy & Blue Denim Set',
    colorway: 'Dusty Rose / Sky Blue',
    price: 118.00,
    originalPrice: 140.00,
    category: 'Combos',
    gender: 'women',
    isCombo: true,
    badge: '2-PIECE CO-ORD • 15% OFF',
    colorHex: '#d89b9e',
    imageUrl: '/women-combo-pink-corduroy.png',
    localImage: '/women-combo-pink-corduroy.png',
    hoverImage: '/women-combo-pink-corduroy.png',
    description: 'Playful yet elevated Parisian aesthetic: vintage dusty rose cropped corduroy overshirt layered over a soft ribbed crop tank and relaxed wide-leg blue jeans.',
    swatches: [
      { name: 'Dusty Rose & Denim', hex: '#d89b9e', id: 'w-combo-pink' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: 22,
    details: [
      'Cropped Fine-Wale Velvet Corduroy Overshirt',
      'White Combed Cotton Ribbed Layering Tank',
      'High-Rise Ring-Spun Light Indigo Wide Denim',
      'Complete 2-Piece Synchronized Ensemble'
    ]
  },
  {
    id: 'combo-women-brown-corduroy',
    name: 'Mocha Corduroy & Charcoal Denim Set',
    colorway: 'Mocha Espresso / Charcoal',
    price: 128.00,
    originalPrice: 155.00,
    category: 'Combos',
    gender: 'women',
    isCombo: true,
    badge: '2-PIECE CO-ORD • 15% OFF',
    colorHex: '#6c4e3e',
    imageUrl: '/women-combo-brown-corduroy.png',
    localImage: '/women-combo-brown-corduroy.png',
    hoverImage: '/women-combo-brown-corduroy.png',
    description: 'Earthy rich espresso mocha corduroy tailored into a sophisticated modern streetwear ensemble with washed charcoal curved wide-leg denim.',
    swatches: [
      { name: 'Mocha & Charcoal', hex: '#6c4e3e', id: 'w-combo-brown' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: 19,
    details: [
      'Heavyweight Fine-Rib Warm Cotton Corduroy',
      'Flap Utility Chest Pockets with Tortoise Buttons',
      '13.5oz Washed Charcoal Curved Balloon Denim',
      'Complete 2-Piece Synchronized Ensemble'
    ]
  },
  {
    id: 'combo-women-denim-corset',
    name: 'Sculpted Denim Corset Jumpsuit Duo',
    colorway: 'Stone-Washed Indigo',
    price: 135.00,
    originalPrice: 160.00,
    category: 'Combos',
    gender: 'women',
    isCombo: true,
    badge: 'RUNWAY DUO • 15% OFF',
    colorHex: '#6d8fa8',
    imageUrl: '/women-combo-denim-corset.png',
    localImage: '/women-combo-denim-corset.png',
    hoverImage: '/women-combo-denim-corset.png',
    description: 'Runway statement duo: sculpted light indigo stone-washed denim corset featuring vertical boning and clean topstitching with floor-length wide-leg palazzo jeans.',
    swatches: [
      { name: 'Indigo Stone Wash', hex: '#6d8fa8', id: 'w-combo-denim' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: 16,
    details: [
      '12oz Structured Stone-Washed Indigo Cotton Denim',
      'Architectural Contour Seam Boning Bustier',
      'High-Rise Relaxed Wide-Leg Sweep Palazzo',
      'Complete 2-Piece Synchronized Ensemble'
    ]
  },
  {
    id: 'combo-women-lace-corset',
    name: 'Espresso Lace Corset & Sand Chinos Set',
    colorway: 'Espresso Lace / Sand Chinos',
    price: 142.00,
    originalPrice: 170.00,
    category: 'Combos',
    gender: 'women',
    isCombo: true,
    badge: 'LUXURY CO-ORD • 15% OFF',
    colorHex: '#4a2e24',
    imageUrl: '/women-combo-lace-corset.png',
    localImage: '/women-combo-lace-corset.png',
    hoverImage: '/women-combo-lace-corset.png',
    description: 'A striking luxury ensemble pairing delicate espresso brown underwire lace corset bustier with relaxed tailored sand-beige cuffed chinos and strappy sandal heels.',
    swatches: [
      { name: 'Espresso & Sand', hex: '#4a2e24', id: 'w-combo-lace' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: 14,
    details: [
      'French Floral Chantilly Lace Bustier Top',
      'Underwire Contour Support & Boning',
      'High-Rise Tailored Cotton Twill Sand Chinos',
      'Complete 2-Piece Synchronized Ensemble'
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

  // --- MALE T-SHIRTS & POLOS (TRANSPARENT PNG CUTOUTS) ---
  {
    id: 'men-tee-ivory-pleated-polo',
    name: 'Ivory Pleated Knit Open-Collar Polo',
    colorway: 'Pure Optical Cream',
    price: 58.00,
    originalPrice: 72.00,
    category: 'T-Shirts',
    gender: 'men',
    badge: 'NEW SEASON',
    colorHex: '#f6f4ee',
    type: 'polo',
    imageUrl: '/men-tee-ivory-pleated-polo.png',
    localImage: '/men-tee-ivory-pleated-polo.png',
    modelImage: '/men-tee-ivory-pleated-polo.png',
    swatches: [
      { name: 'Pure Cream', hex: '#f6f4ee', id: 'polo-ivory' },
      { name: 'Noir Black', hex: '#161618', id: 'polo-black' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 26,
    details: [
      '100% Breathable Combed Cotton Pleated Knit',
      'Relaxed Open Notch Johnny Collar',
      'Ribbed Sleeve Bands & Straight Hem',
      'Pre-shrunk Anti-Pilling Fine Gauge Yarn'
    ],
    description: 'Architectural fine-gauge vertical pleated knit polo featuring a relaxed Johnny open collar, ribbed sleeve cuffs, and tailored fluid drape.'
  },
  {
    id: 'men-tee-noir-zip-polo',
    name: 'Noir Tipped Quarter-Zip Knit Polo',
    colorway: 'Midnight Black / White Tipping',
    price: 62.00,
    originalPrice: 78.00,
    category: 'T-Shirts',
    gender: 'men',
    badge: 'ATELIER DROP',
    colorHex: '#141416',
    type: 'polo',
    imageUrl: '/men-tee-noir-zip-polo.png',
    localImage: '/men-tee-noir-zip-polo.png',
    modelImage: '/men-tee-noir-zip-polo.png',
    swatches: [
      { name: 'Midnight Black', hex: '#141416', id: 'polo-zip-black' },
      { name: 'Slate Gray', hex: '#484c54', id: 'polo-zip-slate' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 22,
    details: [
      'High-Density Pima Cotton & Modal Stretch Blend',
      'Polished Silver Quarter-Zip Closure',
      'Contrast Double White Tipped Trims on Collar & Sleeves',
      'Athletic Tapered Modern Silhouette'
    ],
    description: 'Modern luxury athletic silhouette crafted with subtle stretch jersey knit, polished silver quarter-zip collar, and contrast dual white tipping on collar and sleeves.'
  },
  {
    id: 'men-tee-stripe-knit',
    name: 'Block-Stripe Textured Knit Crewneck',
    colorway: 'Ivory, Sand & Onyx Stripes',
    price: 54.00,
    originalPrice: 68.00,
    category: 'T-Shirts',
    gender: 'men',
    badge: 'BESTSELLER',
    colorHex: '#f0ece1',
    type: 'streetwear',
    imageUrl: '/men-tee-stripe-knit.png',
    localImage: '/men-tee-stripe-knit.png',
    modelImage: '/men-tee-stripe-knit.png',
    swatches: [
      { name: 'Ivory / Sand Stripe', hex: '#f0ece1', id: 'knit-stripe-ivory' },
      { name: 'Navy / Forest Stripe', hex: '#1e2838', id: 'knit-stripe-navy' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 20,
    details: [
      '100% Premium Cotton Textured Waffle Knit',
      'Engineered Yarn-Dyed Horizontal Chest Stripes',
      'Heavyweight Ribbed Collar & Cuffs',
      'Tailored Relaxed Parisian Cut'
    ],
    description: 'Retro European aesthetic featuring horizontal chest color-block stripes over vertical grid-textured knit with reinforced ribbed crewneck collar.'
  },
  {
    id: 'men-tee-luffy-anime',
    name: 'Luffy Straw Hat Anime Heavyweight Tee',
    colorway: 'Vintage Off-White / Vermilion Red',
    price: 46.00,
    originalPrice: 58.00,
    category: 'T-Shirts',
    gender: 'men',
    badge: 'ANIME CAPSULE',
    colorHex: '#f5efe4',
    type: 'graphic',
    imageUrl: '/men-tee-luffy-anime.png',
    localImage: '/men-tee-luffy-anime.png',
    modelImage: '/men-tee-luffy-anime.png',
    swatches: [
      { name: 'Vintage Off-White', hex: '#f5efe4', id: 'luffy-white' },
      { name: 'Washed Charcoal', hex: '#2c2c30', id: 'luffy-charcoal' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 28,
    details: [
      '260 GSM Heavyweight Ringspun Organic Cotton',
      'High-Definition Screenprint Graphic on Back',
      'Japanese Typography & Pirate Crest Accents',
      'Oversized Streetwear Drop-Shoulder Silhouette'
    ],
    description: 'Statement streetwear graphic tee showcasing bold Luffy straw hat artwork, brush calligraphy, and oversized drop-shoulder cut crafted from 260 GSM heavyweight cotton.'
  },
  {
    id: 'men-tee-tokyo-racing',
    name: 'Tokyo Underground Racing Graphic Tee',
    colorway: 'Butter Cream / Amber Gold',
    price: 44.00,
    originalPrice: 55.00,
    category: 'T-Shirts',
    gender: 'men',
    badge: 'STREETWEAR',
    colorHex: '#f5ecd5',
    type: 'graphic',
    imageUrl: '/men-tee-tokyo-racing.png',
    localImage: '/men-tee-tokyo-racing.png',
    modelImage: '/men-tee-tokyo-racing.png',
    swatches: [
      { name: 'Butter Cream', hex: '#f5ecd5', id: 'tokyo-cream' },
      { name: 'Matte Black', hex: '#161616', id: 'tokyo-black' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 25,
    details: [
      '240 GSM Combed Ring-Spun Cotton',
      'Multi-Layer Front Sports Car Illustration',
      'Tokyo Underground Sleeve Screenprints',
      'Reinforced Collar & Boxy Street Cut'
    ],
    description: 'Japanese car culture racing tee with detailed underground tuner sports car art, dual sleeve typographic prints, and coordinates in a relaxed boxy fit.'
  },

  // --- MALE PANTS (TRANSPARENT PNG CUTOUTS) ---
  {
    id: 'men-pants-noir-pleated',
    name: 'Noir High-Waisted Pleated Suiting Trousers',
    colorway: 'Midnight Noir Suiting',
    price: 135.00,
    originalPrice: 165.00,
    category: 'Pants',
    gender: 'men',
    badge: 'ATELIER SUITING',
    colorHex: '#18181a',
    type: 'pants',
    imageUrl: '/men-pants-noir-pleated.png',
    localImage: '/men-pants-noir-pleated.png',
    modelImage: '/men-pants-noir-pleated.png',
    swatches: [
      { name: 'Midnight Noir', hex: '#18181a', id: 'pants-noir' },
      { name: 'Sand Khaki', hex: '#ded3c1', id: 'pants-sand-khaki' }
    ],
    sizes: ['28', '30', '32', '34', '36'],
    stock: 20,
    details: [
      'Italian Poly-Viscose Fluid Suiting Twill',
      'High-Waisted Deep Double Pleat Front',
      'Extended Waistband with Side Button Tab',
      'Sharp Center Creases & Relaxed Hem'
    ],
    description: 'Masterfully tailored high-rise suiting trousers featuring deep front double pleats, an extended waistband with side button tab, and an ultra-fluid drape.'
  },
  {
    id: 'men-pants-olive-cargo',
    name: 'Washed Olive Relaxed Utility Cargo Pants',
    colorway: 'Vintage Olive Gray',
    price: 118.00,
    originalPrice: 145.00,
    category: 'Pants',
    gender: 'men',
    badge: 'UTILITY ESSENTIAL',
    colorHex: '#646862',
    type: 'pants',
    imageUrl: '/men-pants-olive-cargo.png',
    localImage: '/men-pants-olive-cargo.png',
    modelImage: '/men-pants-olive-cargo.png',
    swatches: [
      { name: 'Washed Olive', hex: '#646862', id: 'cargo-olive' },
      { name: 'Washed Black', hex: '#242426', id: 'cargo-black' }
    ],
    sizes: ['28', '30', '32', '34', '36'],
    stock: 24,
    details: [
      '100% Heavyweight Pre-Washed Cotton Twill',
      'Elastic Drawstring Waistband for Adjustable Fit',
      'Dual Side Flap Bellows Cargo Pockets',
      'Articulated Knee Panels'
    ],
    description: 'Functional utilitarian aesthetic tailored from vintage washed olive-gray cotton twill with roomy cargo flap pockets and articulated knee panels.'
  },
  {
    id: 'men-pants-white-skate',
    name: 'Optical White Wide-Leg Skate Denim Trousers',
    colorway: 'Pure Optical White',
    price: 128.00,
    originalPrice: 155.00,
    category: 'Pants',
    gender: 'men',
    badge: 'MINIMALIST',
    colorHex: '#f5f4ef',
    type: 'pants',
    imageUrl: '/men-pants-white-skate.png',
    localImage: '/men-pants-white-skate.png',
    modelImage: '/men-pants-white-skate.png',
    swatches: [
      { name: 'Optical White', hex: '#f5f4ef', id: 'skate-white' },
      { name: 'Raw Indigo', hex: '#26344d', id: 'skate-indigo' }
    ],
    sizes: ['28', '30', '32', '34', '36'],
    stock: 18,
    details: [
      '13oz 100% Ring-Spun Clean Cotton Denim',
      'Architectural Vertical Center Front Leg Seams',
      'High-Rise Relaxed Wide Skate Sweep',
      'Reinforced Riveted Pockets'
    ],
    description: 'Pristine optical white wide-leg denim trousers detailed with distinct vertical center front seams and a sweeping floor-grazing hem.'
  },
  {
    id: 'men-pants-acid-denim',
    name: 'Stone-Washed Acid Blue Baggy Denim Jeans',
    colorway: 'Marble Acid Blue',
    price: 142.00,
    originalPrice: 175.00,
    category: 'Pants',
    gender: 'men',
    badge: 'VINTAGE DROP',
    colorHex: '#7ba4c9',
    type: 'pants',
    imageUrl: '/men-pants-acid-denim.png',
    localImage: '/men-pants-acid-denim.png',
    modelImage: '/men-pants-acid-denim.png',
    swatches: [
      { name: 'Marble Acid Blue', hex: '#7ba4c9', id: 'denim-acid' },
      { name: 'Vintage Stone Black', hex: '#303034', id: 'denim-stone-black' }
    ],
    sizes: ['28', '30', '32', '34', '36'],
    stock: 22,
    details: [
      '13.5oz Authentic Stone-Washed Ring-Spun Denim',
      'Allover Vintage Marble Acid Wash Whiskering',
      'Classic 5-Pocket Hardware Construction',
      'Relaxed Baggy Wide-Leg Silhouette'
    ],
    description: 'Iconic 90s skater nostalgia cut from 13.5oz heavyweight marble stone-washed denim in an effortless relaxed baggy silhouette.'
  },
  {
    id: 'men-pants-cyber-jogger',
    name: 'Y2K Cyber-Tribal Graphic Heavyweight Sweatpants',
    colorway: 'Onyx Black / Cyber White',
    price: 124.00,
    originalPrice: 150.00,
    category: 'Pants',
    gender: 'men',
    badge: 'STREETWEAR',
    colorHex: '#141416',
    type: 'pants',
    imageUrl: '/men-pants-cyber-jogger.png',
    localImage: '/men-pants-cyber-jogger.png',
    modelImage: '/men-pants-cyber-jogger.png',
    swatches: [
      { name: 'Onyx Black', hex: '#141416', id: 'jogger-cyber-black' },
      { name: 'Heather Gray', hex: '#8a8c90', id: 'jogger-cyber-gray' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 25,
    details: [
      '400 GSM Ultra-Heavy Brushed French Terry Cotton',
      'High-Definition Screenprint Tribal Graphics Down Both Legs',
      'Encased Elastic Waistband & Hidden Drawstrings',
      'Baggy Relaxed Streetwear Drape'
    ],
    description: 'Statement streetwear sweatpants crafted from 400 GSM ultra-heavy French terry fleece featuring bold Y2K cyber-tribal screenprint artwork down both legs.'
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

  // =============================================================
  // COUPLE CURATED ATELIER SETS
  // =============================================================
  {
    id: "couple-burgundy-cord",
    name: "Burgundy Atelier Couple Co-ord Set",
    colorway: "Deep Burgundy Wine / Ivory",
    price: 285,
    originalPrice: 335,
    category: "Combos",
    gender: "couple",
    badge: "COUPLE CO-ORD • 15% OFF",
    colorHex: "#581825",
    imageUrl: "/couple-burgundy-cord.png",
    localImage: "/couple-burgundy-cord.png",
    hoverImage: "/couple-burgundy-cord.png",
    description: "Harmoniously coordinated couple ensemble: tailored relaxed wine burgundy button-down overshirts paired with high-waisted pleated fluid cream trousers and crisp white court sneakers.",
    swatches: [
      { name: "Burgundy & Ivory", hex: "#581825", id: "couple-burgundy" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    stock: 12,
    details: [
      "Coordinated 2-Person Look (His & Hers Set)",
      "100% Breathable Fine-Woven Cotton Blend",
      "Deep Knife-Pleated High-Rise Wide Trousers",
      "Curated Minimalist Atelier Palette Match"
    ]
  },
  {
    id: "couple-noir-linen",
    name: "Noir Black & Sand Tailored Couple Set",
    colorway: "Midnight Noir / Sand Dune",
    price: 295,
    originalPrice: 345,
    category: "Combos",
    gender: "couple",
    badge: "SIGNATURE PAIR • 15% OFF",
    colorHex: "#18181a",
    imageUrl: "/couple-noir-linen.png",
    localImage: "/couple-noir-linen.png",
    hoverImage: "/couple-noir-linen.png",
    description: "Effortless cosmopolitan pair: matching midnight black relaxed shirts with tailored high-waisted sand chino trousers, dark acetate sunglasses, and minimalist white leather trainers.",
    swatches: [
      { name: "Noir & Sand", hex: "#18181a", id: "couple-noir" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    stock: 15,
    details: [
      "Matching Minimalist Resort Shirts",
      "High-Density Sand Cotton-Linen Chino Weave",
      "Wide-Leg Pleated Tailored Cut for Her & Him",
      "Complete City-Chic Couple Styling"
    ]
  },
  {
    id: "couple-indigo-festive",
    name: "Midnight Indigo Resort & Kurta Couple Duo",
    colorway: "Midnight Indigo / Pure White",
    price: 310,
    originalPrice: 365,
    category: "Combos",
    gender: "couple",
    badge: "FESTIVE CAPSULE • 15% OFF",
    colorHex: "#1e293b",
    imageUrl: "/couple-indigo-festive.png",
    localImage: "/couple-indigo-festive.png",
    hoverImage: "/couple-indigo-festive.png",
    description: "Exquisite celebration pair: gentleman's midnight navy linen button-down with relaxed cream trousers, complemented by her intricately embroidered indigo tunic with matching palazzo and sheer drape dupatta.",
    swatches: [
      { name: "Midnight Indigo", hex: "#1e293b", id: "couple-indigo" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    stock: 10,
    details: [
      "His: French Normandy Navy Linen Button-Down",
      "Hers: Silver-Thread Embroidered Indigo Kurta Set & Dupatta",
      "Tailored Relaxed White Canvas Trousers",
      "Premium Breathable Silk-Cotton & Linen Weave"
    ]
  },
  {
    id: "couple-mocha-linen",
    name: "Mocha Espresso Resort Couple Ensemble",
    colorway: "Mocha Espresso / Cream Twill",
    price: 290,
    originalPrice: 340,
    category: "Combos",
    gender: "couple",
    badge: "AUTUMN RESORT • 15% OFF",
    colorHex: "#5c4033",
    imageUrl: "/couple-mocha-linen.png",
    localImage: "/couple-mocha-linen.png",
    hoverImage: "/couple-mocha-linen.png",
    description: "Romantic earthy palette: matching rich mocha espresso linen button-downs paired with flowing high-rise ivory pleated trousers, tortoiseshell accents, and white platform trainers.",
    swatches: [
      { name: "Mocha & Cream", hex: "#5c4033", id: "couple-mocha" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    stock: 14,
    details: [
      "Warm Espresso Garment-Dyed Pure Linen",
      "Tortoiseshell Atelier Placket Buttons",
      "High-Waisted Italian Suiting Wide-Leg Trousers",
      "Synchronized Warm Earth-Tone Look"
    ]
  },
  {
    id: "couple-sky-stripe",
    name: "Sky Blue Bengal Stripe Summer Couple Set",
    colorway: "Sky Blue Bengal Stripe / Ecru",
    price: 275,
    originalPrice: 320,
    category: "Combos",
    gender: "couple",
    badge: "SUMMER ESCAPE • 15% OFF",
    colorHex: "#7ba4c9",
    imageUrl: "/couple-sky-stripe.png",
    localImage: "/couple-sky-stripe.png",
    hoverImage: "/couple-sky-stripe.png",
    description: "Sunny Riviera summer charm: gentleman's relaxed sky blue Bengal vertical stripe linen shirt, paired with her matching bow-tie peplum stripe top and airy ecru linen wide trousers.",
    swatches: [
      { name: "Sky Bengal Stripe", hex: "#7ba4c9", id: "couple-sky" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    stock: 16,
    details: [
      "Yarn-Dyed Fine Bengal Stripe Combed Cotton",
      "Hers: Triple Bow-Tie Front Peplum Sleeveless Blouse",
      "His: Classic Spread Collar Long-Sleeve Linen Shirt",
      "Breathable Matte Linen-Blend Ecru Trousers"
    ]
  },

  // =============================================================
  // MEN'S 2-PIECE ATELIER COMBOS
  // =============================================================
  {
    id: "men-combo-camel-jacket-set",
    name: "Camel Wool Work Jacket & Pleated Trousers Set",
    colorway: "Camel Wool / Noir",
    price: 168.00,
    originalPrice: 198.00,
    category: "Combos",
    gender: "men",
    isCombo: true,
    badge: "2-PIECE SET • 15% OFF",
    colorHex: "#9e734c",
    imageUrl: "/men-combo-camel-jacket-set.png",
    localImage: "/men-combo-camel-jacket-set.png",
    hoverImage: "/men-combo-camel-jacket-set.png",
    description: "Elevated Parisian autumn aesthetic pairing a rich camel brown structured wool overshirt with high-rise pleated black trousers, white knit underlayer, and white leather trainers.",
    swatches: [
      { name: "Camel & Noir", hex: "#9e734c", id: "combo-camel-noir" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 15,
    details: [
      "Heavyweight Melton Brushed Wool Overshirt",
      "Mock-Neck Premium Ribbed Cotton Underlayer",
      "High-Rise Deep Knife-Pleat Suiting Trousers",
      "Complete 2-Piece Synchronized Outfit"
    ]
  },
  {
    id: "men-combo-black-oxford-denim",
    name: "Noir Oxford Shirt & Light Baggy Denim Duo",
    colorway: "Midnight Noir / Ice Blue Denim",
    price: 148.00,
    originalPrice: 175.00,
    category: "Combos",
    gender: "men",
    isCombo: true,
    badge: "2-PIECE SET • 15% OFF",
    colorHex: "#141416",
    imageUrl: "/men-combo-black-oxford-denim.png",
    localImage: "/men-combo-black-oxford-denim.png",
    hoverImage: "/men-combo-black-oxford-denim.png",
    description: "Effortless cosmopolitan street style combining an unbuttoned black oxford long-sleeve shirt with vintage stone-washed baggy denim and retro white trainers.",
    swatches: [
      { name: "Noir & Ice Blue", hex: "#141416", id: "combo-noir-ice" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 18,
    details: [
      "Garment-Dyed Breathable Cotton Oxford Button-Down",
      "13.5oz Authentic Stone-Washed Baggy Denim",
      "Mother-of-Pearl Fasteners & Extended Curved Hem",
      "Complete 2-Piece Synchronized Outfit"
    ]
  },
  {
    id: "men-combo-graphic-23-streetwear",
    name: "#23 Graphic Boxy Streetwear Tee & Black Denim Set",
    colorway: "Optic White / Washed Black",
    price: 138.00,
    originalPrice: 160.00,
    category: "Combos",
    gender: "men",
    isCombo: true,
    badge: "STREETWEAR • 15% OFF",
    colorHex: "#f6f4ee",
    imageUrl: "/men-combo-graphic-23-streetwear.png",
    localImage: "/men-combo-graphic-23-streetwear.png",
    hoverImage: "/men-combo-graphic-23-streetwear.png",
    description: "Tokyo Y2K streetwear vibe featuring an oversized heavyweight #23 graphic tee paired with washed black wide-leg puddle jeans and skate sneakers.",
    swatches: [
      { name: "Optic White & Charcoal", hex: "#f6f4ee", id: "combo-23-charcoal" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 22,
    details: [
      "280 GSM Heavyweight Combed Cotton Jersey",
      "Y2K Numbering & Sleeve Screenprints",
      "Acid-Washed Charcoal Wide-Leg Denim",
      "Complete 2-Piece Synchronized Outfit"
    ]
  },
  {
    id: "men-combo-pinstripe-charcoal",
    name: "Skyline Pinstripe Oxford & Charcoal Denim Set",
    colorway: "Skyline Blue Stripe / Washed Charcoal",
    price: 154.00,
    originalPrice: 180.00,
    category: "Combos",
    gender: "men",
    isCombo: true,
    badge: "ATELIER SMART • 15% OFF",
    colorHex: "#7c94a6",
    imageUrl: "/men-combo-pinstripe-charcoal.png",
    localImage: "/men-combo-pinstripe-charcoal.png",
    hoverImage: "/men-combo-pinstripe-charcoal.png",
    description: "Modern smart-casual aesthetic pairing a relaxed blue-and-white vertical pinstripe oxford button-down with washed charcoal denim trousers and white trainers.",
    swatches: [
      { name: "Skyline Stripe & Noir", hex: "#7c94a6", id: "combo-stripe-noir" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 16,
    details: [
      "Crisp Poplin Yarn-Dyed Fine Pinstripe Cotton",
      "Structured Button-Down Spread Collar",
      "Washed Charcoal Relaxed Denim Trousers",
      "Complete 2-Piece Synchronized Outfit"
    ]
  },
  {
    id: "men-combo-plaid-linen-black",
    name: "Silver Plaid Linen Overshirt & Noir Chinos Duo",
    colorway: "Silver Windowpane Plaid / Onyx Black",
    price: 158.00,
    originalPrice: 185.00,
    category: "Combos",
    gender: "men",
    isCombo: true,
    badge: "SUMMER ESSENTIAL • 15% OFF",
    colorHex: "#d4d6db",
    imageUrl: "/men-combo-plaid-linen-black.png",
    localImage: "/men-combo-plaid-linen-black.png",
    hoverImage: "/men-combo-plaid-linen-black.png",
    description: "Minimalist Tokyo cafe aesthetic pairing a breathable silver plaid linen-cotton shirt with straight tailored black cotton chinos and refined leather accessories.",
    swatches: [
      { name: "Silver Plaid & Noir", hex: "#d4d6db", id: "combo-plaid-noir" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 14,
    details: [
      "Breathable Linen-Cotton Windowpane Plaid",
      "Casual Camp Pocket & Spread Collar",
      "Tailored Straight-Leg Cotton Chinos",
      "Complete 2-Piece Synchronized Outfit"
    ]
  },
  {
    id: "men-combo-navy-linen-sand",
    name: "Midnight Navy Linen Shirt & Pleated Sand Trouser Set",
    colorway: "Midnight Navy & Sand",
    price: 145.00,
    originalPrice: 170.00,
    category: "Combos",
    gender: "men",
    isCombo: true,
    badge: "2-PIECE SET • 15% OFF",
    colorHex: "#1c2d42",
    imageUrl: "/men-navy-linen-cutout.png",
    localImage: "/men-navy-linen-cutout.png",
    hoverImage: "/men-navy-linen-cutout.png",
    description: "Tailored French Normandy midnight navy open-collar linen shirt paired effortlessly with pleated sand fluid wide-leg trousers and retro court sneakers.",
    swatches: [
      { name: "Midnight Navy & Sand", hex: "#1c2d42", id: "combo-navy-sand" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 25,
    details: [
      "100% Normandy Pure Flax Linen (180 GSM)",
      "Pleated Sand Fluid Trousers with Hidden Adjuster",
      "Relaxed Open Camp Collar Styling",
      "Complete 2-Piece Synchronized Outfit"
    ]
  },
  {
    id: "men-combo-ecru-polo-black-denim",
    name: "Quiet Luxury Ribbed Ecru Polo & Washed Black Denim Set",
    colorway: "Ecru White & Washed Black",
    price: 139.00,
    originalPrice: 165.00,
    category: "Combos",
    gender: "men",
    isCombo: true,
    badge: "QUIET LUXURY • 15% OFF",
    colorHex: "#f4efe6",
    imageUrl: "/men-ecru-polo-cutout.png",
    localImage: "/men-ecru-polo-cutout.png",
    hoverImage: "/men-ecru-polo-cutout.png",
    description: "Open-collar ribbed cotton knit polo in natural ecru paired with relaxed washed black denim and vintage leather weekender duffel.",
    swatches: [
      { name: "Ecru & Washed Black", hex: "#f4efe6", id: "combo-ecru-black" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 28,
    details: [
      "Fine-Gauge 100% Combed Ribbed Cotton Knit",
      "Johnny Collar Open V-Neck Placket",
      "Relaxed Fit Washed Black Denim Trousers",
      "Complete 2-Piece Synchronized Outfit"
    ]
  },
  {
    id: "men-combo-black-zip-stone-chino",
    name: "Textured Black Quarter-Zip Polo & Stone Chino Set",
    colorway: "Onyx Black & Stone",
    price: 148.00,
    originalPrice: 175.00,
    category: "Combos",
    gender: "men",
    isCombo: true,
    badge: "2-PIECE SET • 15% OFF",
    colorHex: "#121212",
    imageUrl: "/men-black-zip-polo-cutout.png",
    localImage: "/men-black-zip-polo-cutout.png",
    hoverImage: "/men-black-zip-polo-cutout.png",
    description: "Fine-textured quarter-zip ribbed knit polo in midnight onyx black, styled with tailored stone-beige relaxed trousers and stainless steel chronograph.",
    swatches: [
      { name: "Onyx Black & Stone", hex: "#121212", id: "combo-black-stone" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 24,
    details: [
      "100% Textured Combed Cotton Rib Knit",
      "Silver Quarter-Zip Collar Closure",
      "Tailored Stone-Beige Cotton Chinos",
      "Complete 2-Piece Synchronized Outfit"
    ]
  }
];

