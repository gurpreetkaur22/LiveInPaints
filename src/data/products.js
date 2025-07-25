import { nanoid } from 'nanoid';

export const products = [
  {
    id: nanoid(),
    name: "Premium Custom Painting",
    category: "paintings",
    price: 399,
    originalPrice: 549,
    image: "/images/NewPainting.webp",
    images: ["/images/NewPainting.webp", "/images/hare.webp", "/images/butterfly.webp"],
    description: "Stunning custom painting created with professional techniques and premium materials. Transform your space with personalized artwork.",
    features: [
      "Professional artist creation",
      "Premium canvas and paints",
      "Custom design options",
      "High-quality finish",
      "Ready-to-hang mounting"
    ],
    customizationOptions: {
      sizes: [
        { name: "Small (8x10)", price: 399 },
        { name: "Medium (12x16)", price: 599 },
        { name: "Large (16x20)", price: 799 }
      ],
      style: [
        { name: "Realistic", price: 0 },
        { name: "Abstract", price: 150 },
        { name: "Impressionist", price: 200 }
      ]
    },
    inStock: true
  },
  {
    id: nanoid(),
    name: "Modern Family Portrait",
    category: "illustrations",
    price: 699,
    originalPrice: 899,
    image: "/images/NewFamilyIllus.webp",
    images: [
      "/images/NewFamilyIllus.webp",
      "/images/illusFam.webp",
      "/images/illus1.webp",
    ],
    description:
      "Contemporary family illustration with modern artistic style. Perfect for capturing your family's unique personality and bond.",
    features: [
      "Modern artistic style",
      "High-resolution digital artwork",
      "Multiple family members supported",
      "Custom background options",
      "Print-ready formats included",
    ],
    customizationOptions: {
      complexity: [
        { name: "Simple (2-3 people)", price: 699 },
        { name: "Medium (4-6 people)", price: 999 },
        { name: "Large Family (7+ people)", price: 1399 },
      ],
      style: [
        { name: "Modern Style", price: 0 },
        { name: "Classic Style", price: 150 },
        { name: "Abstract Style", price: 200 },
      ],
    },
    inStock: true,
  },
  {
    id: nanoid(),
    name: "Premium Dog Portrait",
    category: "illustrations",
    price: 449,
    originalPrice: 599,
    image: "/images/NewDogIllus.webp",
    images: [
      "/images/NewDogIllus.webp",
      "/images/petIllus.webp",
      "/images/illus3.webp",
    ],
    description:
      "Beautiful custom dog portraits that capture your furry friend's personality with artistic flair and attention to detail.",
    features: [
      "Professional pet artist",
      "Detailed fur textures",
      "Custom pose options",
      "Background customization",
      "High-quality digital files",
    ],
    customizationOptions: {
      pets: [
        { name: "Single Dog", price: 449 },
        { name: "Two Dogs", price: 649 },
        { name: "Multiple Dogs (3+)", price: 849 },
      ],
      background: [
        { name: "Simple Background", price: 0 },
        { name: "Nature Background", price: 100 },
        { name: "Custom Background", price: 200 },
      ],
    },
    inStock: true,
  },
  {
    id: nanoid(),
    name: "Contemporary Illustration",
    category: "illustrations",
    price: 549,
    image: "/images/NewIllus.webp",
    images: [
      "/images/NewIllus.webp",
      "/images/illus1.webp",
      "/images/illus2.webp",
    ],
    description:
      "Modern contemporary illustrations with unique artistic vision. Perfect for personal projects, gifts, or home decoration.",
    features: [
      "Contemporary art style",
      "Original creative design",
      "High-resolution artwork",
      "Multiple format options",
      "Commercial usage rights",
    ],
    customizationOptions: {
      complexity: [
        { name: "Simple Design", price: 549 },
        { name: "Detailed Design", price: 749 },
        { name: "Complex Design", price: 949 },
      ],
      format: [
        { name: "Digital Only", price: 0 },
        { name: "Print Ready", price: 100 },
        { name: "Multiple Formats", price: 200 },
      ],
    },
    inStock: true,
  },
  {
    id: nanoid(),
    name: "Sacred Art Illustration",
    category: "illustrations",
    price: 499,
    image: "/images/NewReligiousIllus.webp",
    images: [
      "/images/NewReligiousIllus.webp",
      "/images/illusReligious.webp",
      "/images/illusReligious2.webp",
    ],
    description:
      "Respectful and beautiful religious artwork created with devotion and artistic excellence for spiritual occasions.",
    features: [
      "Respectful religious themes",
      "Traditional artistic approach",
      "Custom spiritual symbols",
      "Multiple religious traditions",
      "Ceremonial quality artwork",
    ],
    customizationOptions: {
      tradition: [
        { name: "Christian Art", price: 499 },
        { name: "Hindu Art", price: 499 },
        { name: "Sikh Art", price: 499 },
        { name: "Islamic Art", price: 499 },
        { name: "Buddhist Art", price: 499 },
      ],
      complexity: [
        { name: "Simple Design", price: 0 },
        { name: "Detailed Design", price: 200 },
        { name: "Elaborate Design", price: 400 },
      ],
    },
    inStock: true,
  },
  {
    id: nanoid(),
    name: "Designer Bookmark",
    category: "bookmarks",
    price: 89,
    image: "/images/NewBookmakr.webp",
    images: [
      "/images/NewBookmakr.webp",
      "/images/bookmark1.webp",
      "/images/bookmark2.webp",
    ],
    description:
      "Elegant designer bookmarks with premium finish and personalized touches for the discerning book lover.",
    features: [
      "Premium designer quality",
      "Personalized customization",
      "Durable materials",
      "Elegant finish",
      "Perfect gift option",
    ],
    customizationOptions: {
      design: [
        { name: "Minimalist Design", price: 89 },
        { name: "Floral Design", price: 109 },
        { name: "Custom Design", price: 129 },
      ],
      personalization: [
        { name: "Name Only", price: 0 },
        { name: "Name + Quote", price: 20 },
        { name: "Full Custom Text", price: 40 },
      ],
    },
    inStock: true,
  },
  {
    id: nanoid(),
    name: "Executive Business Card",
    category: "cards",
    price: 249,
    originalPrice: 299,
    image: "/images/NewBusinesscard.webp",
    images: ["/images/NewBusinesscard.webp", "/images/businesscard.webp",  "/images/NewBusinesscard2.webp"],
    description:
      "Premium executive business cards with sophisticated design and high-quality materials for professional networking.",
    features: [
      "Executive quality design",
      "Premium cardstock material",
      "Professional typography",
      "Multiple finish options",
      "Fast turnaround time",
    ],
    customizationOptions: {
      quantity: [
        { name: "100 Cards", price: 249 },
        { name: "250 Cards", price: 499 },
        { name: "500 Cards", price: 899 },
      ],
      finish: [
        { name: "Matte Premium", price: 0 },
        { name: "Glossy Premium", price: 75 },
        { name: "Luxury UV Coating", price: 150 },
      ],
    },
    inStock: true,
  },
  {
    id: nanoid(),
    name: "Luxury Tile Frame",
    category: "frames",
    price: 699,
    originalPrice: 899,
    image: "/images/NewTileFrame.webp",
    images: ["/images/NewTileFrame.webp", "/images/tile1.webp"],
    description:
      "Luxury ceramic tile frames with premium craftsmanship for displaying your most precious memories in style.",
    features: [
      "Luxury ceramic construction",
      "Premium frame materials",
      "Professional mounting system",
      "Moisture and fade resistant",
      "Custom sizing available",
    ],
    customizationOptions: {
      size: [
        { name: "8x8 inches", price: 699 },
        { name: "10x10 inches", price: 899 },
        { name: "12x12 inches", price: 1199 },
      ],
      frame: [
        { name: "Classic Wood", price: 0 },
        { name: "Premium Metal", price: 250 },
        { name: "Luxury Gold", price: 500 },
      ],
    },
    inStock: true,
  },
  {
    id: nanoid(),
    name: "Custom Portrait Painting",
    category: "paintings",
    price: 299,
    originalPrice: 399,
    image: "/images/hare.webp",
    images: ["/images/hare.webp", "/images/hare.webp", "/images/hare.webp"],
    description:
      "Transform your favorite photos into stunning hand-painted portraits. Upload your image and let our artists create magic!",
    features: [
      "Hand-painted by professional artists",
      "High-quality canvas material",
      "Custom size options available",
      "Fast 7-day delivery",
      "Satisfaction guarantee",
    ],
    customizationOptions: {
      sizes: [
        { name: "Small (8x10)", price: 299 },
        { name: "Medium (12x16)", price: 499 },
        { name: "Large (16x20)", price: 699 },
      ],
      styles: [
        { name: "Realistic", price: 0 },
        { name: "Artistic", price: 100 },
        { name: "Cartoon", price: 50 },
      ],
    },
    inStock: true,
  },
  {
    id: nanoid(),
    name: "Family Illustration",
    category: "illustrations",
    price: 599,
    originalPrice: 799,
    image: "/images/illusFam.webp",
    images: [
      "/images/illusFam.webp",
      "/images/illus1.webp",
      "/images/illus2.webp",
    ],
    description:
      "Beautiful custom family illustrations that capture your loved ones in a unique artistic style.",
    features: [
      "Custom family portraits",
      "Multiple family members",
      "Digital high-resolution files",
      "Print-ready formats",
      "Unlimited revisions",
    ],
    customizationOptions: {
      complexity: [
        { name: "Simple (2-3 people)", price: 599 },
        { name: "Medium (4-6 people)", price: 899 },
        { name: "Large Family (7+ people)", price: 1299 },
      ],
      style: [
        { name: "Cartoon Style", price: 0 },
        { name: "Realistic Style", price: 200 },
        { name: "Minimalist Style", price: 100 },
      ],
    },
    inStock: true,
  },
  {
    id: nanoid(),
    name: "Pet Portrait Illustration",
    category: "illustrations",
    price: 399,
    image: "/images/petIllus.webp",
    images: ["/images/petIllus.webp", "/images/illus3.webp"],
    description:
      "Adorable custom pet illustrations that capture your furry friends personality and charm.",
    features: [
      "Custom pet portraits",
      "Any pet type welcome",
      "Multiple poses available",
      "High-quality digital art",
      "Perfect for gifts",
    ],
    customizationOptions: {
      pets: [
        { name: "Single Pet", price: 399 },
        { name: "Two Pets", price: 599 },
        { name: "Multiple Pets (3+)", price: 799 },
      ],
      background: [
        { name: "Simple Background", price: 0 },
        { name: "Custom Background", price: 150 },
        { name: "Transparent Background", price: 50 },
      ],
    },
    inStock: true,
  },
  {
    id: nanoid(),
    name: "Religious Art Illustration",
    category: "illustrations",
    price: 449,
    image: "/images/illusReligious.webp",
    images: ["/images/illusReligious.webp", "/images/illusReligious2.webp"],
    description:
      "Sacred and spiritual custom illustrations for religious occasions and personal devotion.",
    features: [
      "Religious themed artwork",
      "Custom spiritual designs",
      "Respectful artistic approach",
      "Multiple religious traditions",
      "Perfect for ceremonies",
    ],
    customizationOptions: {
      theme: [
        { name: "Christian Art", price: 449 },
        { name: "Hindu Art", price: 449 },
        { name: "Islamic Art", price: 449 },
        { name: "Buddhist Art", price: 449 },
        { name: "Sikh Art", price: 449 },
      ],
      size: [
        { name: "Standard", price: 0 },
        { name: "Large Format", price: 200 },
      ],
    },
    inStock: true,
  },
  {
    id: nanoid(),
    name: "Semi-Realistic Illustration",
    category: "illustrations",
    price: 549,
    image: "/images/semiIllus.webp",
    images: ["/images/semiIllus.webp", "/images/illus1.webp"],
    description:
      "Semi-realistic illustrations that blend artistic style with lifelike details for stunning results.",
    features: [
      "Semi-realistic art style",
      "Perfect balance of realism",
      "Artistic interpretation",
      "High detail quality",
      "Unique artistic approach",
    ],
    customizationOptions: {
      detail: [
        { name: "Standard Detail", price: 549 },
        { name: "High Detail", price: 749 },
        { name: "Ultra Detail", price: 949 },
      ],
      format: [
        { name: "Portrait Format", price: 0 },
        { name: "Landscape Format", price: 0 },
        { name: "Square Format", price: 0 },
      ],
    },
    inStock: true,
  },
  {
    id: "6",
    name: "Colorful Bookmark Set",
    category: "bookmarks",
    price: 149,
    image: "/images/bookmark1.webp",
    images: [
      "/images/bookmark1.webp",
      "/images/bookmark2.webp",
      "/images/bookmark3.webp",
    ],
    description:
      "Beautiful set of colorful bookmarks with custom designs perfect for book enthusiasts.",
    features: [
      "Set of 3 bookmarks",
      "Durable laminated finish",
      "Custom design options",
      "Fade-resistant printing",
      "Perfect gift for readers",
    ],
    customizationOptions: {
      quantity: [
        { name: "3 Bookmark Set", price: 149 },
        { name: "5 Bookmark Set", price: 229 },
        { name: "10 Bookmark Set", price: 399 },
      ],
      design: [
        { name: "Floral Design", price: 0 },
        { name: "Abstract Design", price: 0 },
        { name: "Custom Photo", price: 50 },
      ],
    },
    inStock: true,
  },
  {
    id: nanoid(),
    name: "Premium Bookmark",
    category: "bookmarks",
    price: 79,
    image: "/images/bookmark4.webp",
    images: ["/images/bookmark4.webp", "/images/bookmark2.webp"],
    description:
      "Single premium bookmark with personalized design and high-quality finish.",
    features: [
      "Premium quality material",
      "Personalized design",
      "Durable construction",
      "Elegant finish",
      "Perfect for gifts",
    ],
    customizationOptions: {
      material: [
        { name: "Standard Paper", price: 79 },
        { name: "Premium Cardstock", price: 99 },
        { name: "Plastic Laminated", price: 119 },
      ],
      personalization: [
        { name: "Name Only", price: 0 },
        { name: "Name + Quote", price: 20 },
        { name: "Custom Design", price: 40 },
      ],
    },
    inStock: true,
  },
  {
    id: nanoid(),
    name: "Birthday Card Design",
    category: "cards",
    price: 129,
    image: "/images/bdayCard1.webp",
    images: ["/images/bdayCard1.webp", "/images/bdayCard2.webp"],
    description:
      "Custom birthday cards with personalized messages and beautiful designs for special celebrations.",
    features: [
      "Custom birthday designs",
      "Personalized messages",
      "High-quality cardstock",
      "Envelope included",
      "Fast delivery",
    ],
    customizationOptions: {
      style: [
        { name: "Fun & Colorful", price: 129 },
        { name: "Elegant & Classy", price: 149 },
        { name: "Kids Theme", price: 139 },
      ],
      quantity: [
        { name: "Single Card", price: 0 },
        { name: "5 Cards", price: 200 },
        { name: "10 Cards", price: 350 },
      ],
    },
    inStock: true,
  },
  {
    id: nanoid(),
    name: "Premium Wallet Card",
    category: "cards",
    price: 199,
    image: "/images/walletCard1.webp",
    images: ["/images/walletCard1.webp", "/images/walletCard2.webp"],
    description:
      "Carry your memories wherever you go! Custom wallet-sized cards with your favorite photos.",
    features: [
      "Credit card size",
      "Durable plastic material",
      "Full-color printing",
      "Scratch-resistant surface",
      "Perfect for gifting",
    ],
    customizationOptions: {
      material: [
        { name: "Standard Plastic", price: 199 },
        { name: "Premium Metal", price: 399 },
      ],
      design: [
        { name: "Single Photo", price: 0 },
        { name: "Photo Collage", price: 50 },
        { name: "Custom Design", price: 100 },
      ],
    },
    inStock: true,
  },
  {
    id: nanoid(),
    name: "Business Card Design",
    category: "cards",
    price: 199,
    originalPrice: 249,
    image: "/images/businesscard.webp",
    images: ["/images/businesscard.webp"],
    description:
      "Professional business cards that make lasting impressions with custom designs and premium quality.",
    features: [
      "Professional design",
      "Premium cardstock",
      "Multiple finish options",
      "Quick turnaround",
      "Bulk pricing available",
    ],
    customizationOptions: {
      quantity: [
        { name: "100 Cards", price: 199 },
        { name: "250 Cards", price: 399 },
        { name: "500 Cards", price: 699 },
      ],
      finish: [
        { name: "Matte Finish", price: 0 },
        { name: "Glossy Finish", price: 50 },
        { name: "Premium UV", price: 100 },
      ],
    },
    inStock: true,
  },
  {
    id: nanoid(),
    name: "Memory Tile Frame",
    category: "frames",
    price: 599,
    image: "/images/tile1.webp",
    images: ["/images/tile1.webp"],
    description:
      "Elegant ceramic tile frames perfect for displaying your most cherished memories in style.",
    features: [
      "High-quality ceramic tile",
      "Elegant frame design",
      "Easy wall mounting",
      "Moisture-resistant",
      "Custom size options",
    ],
    customizationOptions: {
      size: [
        { name: "6x6 inches", price: 599 },
        { name: "8x8 inches", price: 799 },
        { name: "12x12 inches", price: 1199 },
      ],
      frame: [
        { name: "Wooden Frame", price: 0 },
        { name: "Metal Frame", price: 200 },
        { name: "Premium Frame", price: 400 },
      ],
    },
    inStock: true,
  },
  {
    id: nanoid(),
    name: "Handmade Crochet Art",
    category: "crafts",
    price: 349,
    image: "/images/crochet1.webp",
    images: ["/images/crochet1.webp"],
    description:
      "Beautiful handmade crochet artwork and accessories created with love and attention to detail.",
    features: [
      "Handmade with care",
      "Premium yarn materials",
      "Custom color options",
      "Unique designs",
      "Perfect for home decor",
    ],
    customizationOptions: {
      type: [
        { name: "Wall Hanging", price: 349 },
        { name: "Table Runner", price: 299 },
        { name: "Decorative Piece", price: 399 },
      ],
      colors: [
        { name: "Natural Colors", price: 0 },
        { name: "Bright Colors", price: 50 },
        { name: "Custom Colors", price: 100 },
      ],
    },
    inStock: true,
  },
];
