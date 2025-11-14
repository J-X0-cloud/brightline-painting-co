import type { ServiceArea } from "@/types/content";

/**
 * Neighborhood landing pages. Each entry renders /service-areas/[slug] through
 * generateStaticParams, so adding an area here is all it takes to publish a new page.
 * Copy is written per neighborhood (housing stock, climate, access), never templated.
 */
export const serviceAreas: ServiceArea[] = [
  {
    slug: "silver-lake",
    name: "Silver Lake",
    metaTitle: "Painters in Silver Lake, CA",
    metaDescription: "Silver Lake house painters for Spanish Revival, mid-century, and hillside homes. Interior, exterior, and stucco work with itemized quotes and a 5-year warranty.",
    region: "Eastside",
    intro: "Brightline paints homes throughout Silver Lake, from 1920s Spanish Revival cottages to hillside mid-century modern houses. We handle interior, exterior, cabinet, and stucco work with itemized written quotes, lead-safe practices on older homes, and a 5-year workmanship warranty. Licensed, bonded, and insured.",
    heroImage: {
      src: "/images/navy-hillside-home.webp",
      alt: "Two-story home painted deep navy with white trim and a paver walkway",
      width: 1400,
      height: 1015,
    },
    expertiseTitle: "Painting Silver Lake homes, from the reservoir to the hillside stairs.",
    highlights: [
      "Spanish Revival stucco",
      "Mid-century modern",
      "Hillside access",
      "Pre-1978 homes",
    ],
    prose: [
      "Silver Lake packs a remarkable range of architecture into a few square miles: stucco Spanish Revival cottages with arched windows, wood-sided bungalows, and mid-century modern houses with walls of glass and long flat eaves. Most of it was built long before 1978, so we treat lead as a given, not an exception, and set up containment and cleanup to match. Owners here tend to care about getting the details right, whether that means a historically sympathetic palette or a crisp modern exterior, and our color consultations are built for exactly that.",
      "The hills are the other half of the job. Many homes sit above or below the street, reached by long private stairways or shared walkways, with tight parking and steep driveways. We plan access, staging, and scaffolding during the walkthrough, keep materials off neighbors' paths, and schedule deliveries around narrow streets. Sun-facing stucco gets crack repair and elastomeric coatings where needed, and exposed wood trim gets the scraping, spot-priming, and rot repair it takes to hold a finish through long, dry summers.",
    ],
    popular: [
      {
        label: "Exterior painting in Silver Lake",
        href: "/services#painting",
      },
      {
        label: "Stucco repair in Silver Lake",
        href: "/services#prep",
      },
      {
        label: "Interior painting in Silver Lake",
        href: "/services#painting",
      },
      {
        label: "Cabinet refinishing in Silver Lake",
        href: "/services#painting",
      },
    ],
    projectsLead: "A few recent Eastside projects, from full exteriors on steep lots to single-room refreshes.",
    projects: [
      {
        title: "Hillside exterior repaint",
        location: "Silver Lake",
        body: "Navy siding and bright white trim, staged from the stairway below.",
        href: "/#work",
        image: {
          src: "/images/navy-hillside-home.webp",
          alt: "Hillside exterior repaint in Silver Lake by Brightline Painting Co.",
          width: 1400,
          height: 1015,
        },
      },
      {
        title: "Dining room refresh",
        location: "Silver Lake",
        body: "Soft white walls and satin trim for a bright, open room.",
        href: "/#work",
        image: {
          src: "/images/dining-room-refresh.webp",
          alt: "Dining room refresh in Silver Lake by Brightline Painting Co.",
          width: 1444,
          height: 964,
        },
      },
      {
        title: "Mid-century exterior",
        location: "Silver Lake",
        body: "Stone, glass, and siding repainted in a warm, low-sheen neutral.",
        href: "/#work",
        image: {
          src: "/images/midcentury-exterior.webp",
          alt: "Mid-century exterior in Silver Lake by Brightline Painting Co.",
          width: 1624,
          height: 864,
        },
      },
    ],
    neighborhoodsLead: "We paint homes all across Silver Lake, including:",
    neighborhoods: [
      "Silver Lake Reservoir",
      "Sunset Junction",
      "Moreno Highlands",
      "Ivanhoe",
      "Micheltorena",
      "Silver Lake Hills",
    ],
    nearby: [
      {
        name: "Echo Park",
      },
      {
        name: "Los Feliz",
      },
      {
        name: "Atwater Village",
      },
      {
        name: "Pasadena",
        slug: "pasadena",
      },
    ],
    faqs: [
      {
        question: "Do you work in Silver Lake regularly?",
        answer: "Yes. Silver Lake is a few minutes from our Atwater Village shop and one of our busiest neighborhoods, with interior, exterior, and cabinet projects underway most months.",
      },
      {
        question: "How much does it cost to paint a house in Silver Lake?",
        answer: "It depends on the size of the home, the condition of the stucco or siding, and access. A hillside home reached by stairs needs more staging than a flat lot. We do not guess from photos; we walk the property and give you a free, itemized written quote.",
      },
      {
        question: "Can you paint a hillside home with no street access?",
        answer: "Yes. We regularly stage from private stairways and shared walkways, use lightweight scaffolding where needed, and plan material runs so neighbors are never blocked.",
      },
      {
        question: "Are you lead-safe certified for older Silver Lake homes?",
        answer: "Yes. We are an EPA Lead-Safe certified firm. On pre-1978 homes we test, contain dust, clean up with HEPA equipment, and verify before we leave.",
      },
      {
        question: "Can you help pick colors for a Spanish Revival or mid-century home?",
        answer: "Absolutely. Our color consultation includes large painted samples on your walls and palettes that suit the architecture, from warm whites and terracotta accents to classic mid-century combinations.",
      },
    ],
    zipCodes: [
      "90026",
      "90027",
      "90039",
    ],
    geo: {
      latitude: 34.0869,
      longitude: -118.2702,
    },
  },
  {
    slug: "pasadena",
    name: "Pasadena",
    metaTitle: "Painters in Pasadena, CA",
    metaDescription: "Pasadena house painters for Craftsman and historic homes. Lead-safe exterior painting, wood repair, and interiors with itemized quotes and a 5-year warranty.",
    region: "San Gabriel Valley",
    intro: "Brightline paints homes across Pasadena, with deep experience on Craftsman bungalows, period revival houses, and the older wood trim that defines them. Interior, exterior, cabinet, and wood-repair work comes with an itemized written quote, EPA lead-safe practices, and a 5-year workmanship warranty. Licensed, bonded, and insured.",
    heroImage: {
      src: "/images/craftsman-green-facade.webp",
      alt: "Craftsman bungalow painted green with white trim behind lush landscaping",
      width: 1200,
      height: 896,
    },
    expertiseTitle: "Painting Pasadena's Craftsman and period homes, the right way.",
    highlights: [
      "Craftsman bungalows",
      "Historic districts",
      "Old-growth wood trim",
      "Lead-safe work",
    ],
    prose: [
      "Pasadena is home to some of the finest Craftsman and period revival architecture in Southern California, and much of it sits in established historic districts where the original character matters. These homes have deep eaves, exposed rafter tails, wood shingles or clapboard siding, and generous trim, nearly all of it painted many times since the early 1900s. That means lead is the norm, and so are layers of old paint that need careful scraping and sanding rather than a quick coat on top.",
      "Our approach starts with the wood. We probe fascia, rafter tails, window sills, and porch posts for dry rot and replace damaged sections before any paint goes on. Bare wood is spot-primed with a product suited to old-growth lumber, and joints are caulked so the finish can move with the seasons. We help owners choose palettes that honor the era, like earthy greens, deep browns, and warm creams, and we keep the site contained and clean so historic gardens and porches are protected.",
    ],
    popular: [
      {
        label: "Exterior painting in Pasadena",
        href: "/services#painting",
      },
      {
        label: "Wood and trim repair in Pasadena",
        href: "/services#prep",
      },
      {
        label: "Interior painting in Pasadena",
        href: "/services#painting",
      },
      {
        label: "Color consultation in Pasadena",
        href: "/services#specialty",
      },
    ],
    projectsLead: "A few recent projects from Pasadena and the San Gabriel Valley, inside and out.",
    projects: [
      {
        title: "Craftsman exterior",
        location: "Pasadena",
        body: "Rot repair, lead-safe prep, and a historic green with cream trim.",
        href: "/#work",
        image: {
          src: "/images/craftsman-green-cream.webp",
          alt: "Craftsman exterior in Pasadena by Brightline Painting Co.",
          width: 1376,
          height: 768,
        },
      },
      {
        title: "Living room repaint",
        location: "Pasadena",
        body: "A warm greige that ties together the fireplace and built-ins.",
        href: "/#work",
        image: {
          src: "/images/living-room-greige.webp",
          alt: "Living room repaint in Pasadena by Brightline Painting Co.",
          width: 1495,
          height: 999,
        },
      },
      {
        title: "Two-story bungalow",
        location: "Pasadena",
        body: "Deep slate siding and crisp white windows on a corner lot.",
        href: "/#work",
        image: {
          src: "/images/two-story-bungalow.webp",
          alt: "Two-story bungalow in Pasadena by Brightline Painting Co.",
          width: 1920,
          height: 931,
        },
      },
    ],
    neighborhoodsLead: "We paint homes across Pasadena, including:",
    neighborhoods: [
      "Bungalow Heaven",
      "Madison Heights",
      "Linda Vista",
      "Playhouse Village",
      "Hastings Ranch",
      "Orange Heights",
    ],
    nearby: [
      {
        name: "South Pasadena",
      },
      {
        name: "Altadena",
      },
      {
        name: "San Marino",
      },
      {
        name: "Silver Lake",
        slug: "silver-lake",
      },
    ],
    faqs: [
      {
        question: "Do you paint homes in Pasadena's historic districts?",
        answer: "Yes. We work in Pasadena's landmark and historic districts regularly and can help you choose colors and finishes that suit the era of your home. If your project needs design review, we will provide product specs and samples for the submission.",
      },
      {
        question: "How much does it cost to paint a Craftsman house in Pasadena?",
        answer: "Craftsman homes usually need more prep than newer houses because of their detailed trim and layers of old paint. The price depends on size, condition, and how much wood repair is needed. We walk the home and give you a free, itemized quote.",
      },
      {
        question: "Are you lead-safe certified?",
        answer: "Yes. Most Pasadena homes were built before 1978, so we follow EPA lead-safe practices on every one: containment, careful surface prep, HEPA cleanup, and verification.",
      },
      {
        question: "Can you repair rotted rafter tails and trim?",
        answer: "Yes. Our crews replace rotted fascia, rafter tails, sills, and trim before painting, matching profiles as closely as possible so repairs blend in.",
      },
      {
        question: "How long does an exterior repaint take?",
        answer: "A typical single-story Craftsman takes one to two weeks, depending on prep and repairs. You get a realistic schedule with your quote and a daily update from your crew lead.",
      },
    ],
    zipCodes: [
      "91101",
      "91103",
      "91104",
      "91105",
      "91106",
      "91107",
    ],
    geo: {
      latitude: 34.1478,
      longitude: -118.1445,
    },
  },
  {
    slug: "santa-monica",
    name: "Santa Monica",
    metaTitle: "Painters in Santa Monica, CA",
    metaDescription: "Santa Monica painters for coastal homes, condos, and storefronts. Exterior coatings made for salt air, plus interiors and cabinets, with a 5-year warranty.",
    region: "Westside",
    intro: "Brightline paints homes, condos, and storefronts across Santa Monica, with coatings and prep built for salt air, marine layer, and strong afternoon sun. Interior, exterior, and cabinet work comes with an itemized written quote, low-VOC paints as standard, and a 5-year workmanship warranty. Licensed, bonded, and insured.",
    heroImage: {
      src: "/images/coastal-white-home.webp",
      alt: "Two-story white home with black trim behind a tall green hedge and iron gate",
      width: 1376,
      height: 768,
    },
    expertiseTitle: "Painting Santa Monica homes that live with the ocean air.",
    highlights: [
      "Coastal salt air",
      "Stucco and siding",
      "Condos and HOAs",
      "Low-VOC standard",
    ],
    prose: [
      "Living near the beach is wonderful for people and hard on paint. Salt carried on the ocean breeze settles on walls and trim, the morning marine layer keeps surfaces damp, and the afternoon sun bakes south and west elevations. Together they cause chalking, fading, peeling on wood trim, and rust on railings and fasteners. A good Santa Monica paint job starts with a thorough wash to remove salt and chalk, then spot-priming, rust treatment on metal, and coatings chosen for coastal exposure.",
      "The housing here ranges from classic Spanish and Colonial Revival homes north of Montana to modern builds, beach cottages, and a large number of condo and apartment buildings. We schedule exterior work around the marine layer so coatings go on dry surfaces, coordinate with HOA boards and property managers on multifamily projects, and keep work areas tidy on busy, walkable streets. Inside, we lean on durable, washable finishes and moisture-resistant products for kitchens and baths.",
    ],
    popular: [
      {
        label: "Exterior painting in Santa Monica",
        href: "/services#painting",
      },
      {
        label: "HOA and condo painting in Santa Monica",
        href: "/services#painting",
      },
      {
        label: "Interior painting in Santa Monica",
        href: "/services#painting",
      },
      {
        label: "Pressure washing in Santa Monica",
        href: "/services#prep",
      },
    ],
    projectsLead: "A few recent Westside projects, from coastal exteriors to bright interior refreshes.",
    projects: [
      {
        title: "Coastal exterior",
        location: "Santa Monica",
        body: "Salt wash, rust treatment, and a UV-stable white with black trim.",
        href: "/#work",
        image: {
          src: "/images/coastal-white-home.webp",
          alt: "Coastal exterior in Santa Monica by Brightline Painting Co.",
          width: 1376,
          height: 768,
        },
      },
      {
        title: "Primary bath update",
        location: "Santa Monica",
        body: "Moisture-resistant finishes for a bright, easy-to-clean bath.",
        href: "/#work",
        image: {
          src: "/images/primary-bath.webp",
          alt: "Primary bath update in Santa Monica by Brightline Painting Co.",
          width: 1500,
          height: 1023,
        },
      },
      {
        title: "Breakfast nook refresh",
        location: "Santa Monica",
        body: "Clean white walls and trim to make the most of ocean light.",
        href: "/#work",
        image: {
          src: "/images/breakfast-nook.webp",
          alt: "Breakfast nook refresh in Santa Monica by Brightline Painting Co.",
          width: 1500,
          height: 1033,
        },
      },
    ],
    neighborhoodsLead: "We paint homes and buildings across Santa Monica, including:",
    neighborhoods: [
      "North of Montana",
      "Ocean Park",
      "Sunset Park",
      "Wilshire Montana",
      "Pico",
      "Mid-City",
    ],
    nearby: [
      {
        name: "Venice",
      },
      {
        name: "Mar Vista",
      },
      {
        name: "Culver City",
        slug: "culver-city",
      },
      {
        name: "Brentwood",
      },
    ],
    faqs: [
      {
        question: "How does ocean air affect exterior paint in Santa Monica?",
        answer: "Salt and moisture cause chalking, peeling on wood, and rust on metal, while strong sun fades color on south and west walls. We wash off salt and chalk first, treat rust, prime bare spots, and use coatings made for coastal exposure.",
      },
      {
        question: "How often should a Santa Monica home be repainted?",
        answer: "Coastal homes usually need attention sooner than inland ones, especially on sun-facing sides. Rather than guess, we inspect the exterior and tell you honestly whether you need a full repaint or targeted prep and touch-ups.",
      },
      {
        question: "Do you paint condo and apartment buildings?",
        answer: "Yes. We work with HOA boards and property managers on exterior and common-area projects, including resident notices, phased scheduling, and board-ready bids.",
      },
      {
        question: "Can you work around the marine layer?",
        answer: "Yes. We schedule exterior coats for the dry part of the day and check surface moisture before painting, so the coating bonds properly.",
      },
      {
        question: "Do you use low-VOC paint?",
        answer: "Always. Low-VOC and zero-VOC products are our standard for interiors and exteriors, which keeps odor down and meets Southern California air-quality rules.",
      },
    ],
    zipCodes: [
      "90401",
      "90402",
      "90403",
      "90404",
      "90405",
    ],
    geo: {
      latitude: 34.0195,
      longitude: -118.4912,
    },
  },
  {
    slug: "culver-city",
    name: "Culver City",
    metaTitle: "Painters in Culver City, CA",
    metaDescription: "Culver City painters for homes, apartments, offices, and restaurants. Interior, exterior, cabinet, and commercial painting with itemized quotes.",
    region: "Westside",
    intro: "Brightline paints homes, apartment buildings, and creative offices across Culver City. Interior, exterior, cabinet, and commercial work comes with an itemized written quote, flexible scheduling for businesses and tenants, and a 5-year workmanship warranty on residential projects. Licensed, bonded, and insured.",
    heroImage: {
      src: "/images/gray-siding-home.webp",
      alt: "Two-story home with light gray siding and white trim above a double garage",
      width: 1376,
      height: 768,
    },
    expertiseTitle: "Painting Culver City homes, studios, and storefronts.",
    highlights: [
      "Postwar bungalows",
      "Creative offices",
      "Multifamily buildings",
      "After-hours scheduling",
    ],
    prose: [
      "Culver City blends quiet residential streets with one of the busiest creative and commercial districts on the Westside. Neighborhoods like Carlson Park, Culver West, and Sunkist Park are full of 1940s and 1950s bungalows and ranch homes, many with original wood windows and stucco that has been patched more than once. Interior refreshes, cabinet refinishing, and exterior repaints before a sale are some of the most common projects we see here.",
      "On the commercial side, we paint offices, studios, restaurants, and retail spaces along Washington Boulevard, Main Street, and the Hayden Tract, often on evenings and weekends so teams and customers are never disrupted. For apartment and condo buildings we coordinate resident notices, parking, and phased work areas. Whether it is a two-bedroom bungalow or a 20,000-square-foot office, you get the same itemized quote and a crew lead who stays with the job.",
    ],
    popular: [
      {
        label: "Interior painting in Culver City",
        href: "/services#painting",
      },
      {
        label: "Commercial painting in Culver City",
        href: "/services#painting",
      },
      {
        label: "Cabinet refinishing in Culver City",
        href: "/services#painting",
      },
      {
        label: "Exterior painting in Culver City",
        href: "/services#painting",
      },
    ],
    projectsLead: "A few recent projects from Culver City and the surrounding Westside, homes and businesses alike.",
    projects: [
      {
        title: "Kitchen cabinet refinish",
        location: "Culver City",
        body: "Oak cabinets sprayed a warm white with new hardware.",
        href: "/#work",
        image: {
          src: "/images/kitchen-cabinets.webp",
          alt: "Kitchen cabinet refinish in Culver City by Brightline Painting Co.",
          width: 1500,
          height: 1057,
        },
      },
      {
        title: "Restaurant repaint",
        location: "Culver City",
        body: "Dining room and bar painted overnight between services.",
        href: "/#work",
        image: {
          src: "/images/restaurant-bar.webp",
          alt: "Restaurant repaint in Culver City by Brightline Painting Co.",
          width: 2400,
          height: 1080,
        },
      },
      {
        title: "Pre-sale exterior",
        location: "Culver City",
        body: "Soft gray siding and white trim finished in six working days.",
        href: "/#work",
        image: {
          src: "/images/gray-siding-home.webp",
          alt: "Pre-sale exterior in Culver City by Brightline Painting Co.",
          width: 1376,
          height: 768,
        },
      },
    ],
    neighborhoodsLead: "We paint homes and businesses across Culver City, including:",
    neighborhoods: [
      "Carlson Park",
      "Culver West",
      "Sunkist Park",
      "Blair Hills",
      "Downtown Culver City",
      "Hayden Tract",
    ],
    nearby: [
      {
        name: "Mar Vista",
      },
      {
        name: "Palms",
      },
      {
        name: "Santa Monica",
        slug: "santa-monica",
      },
      {
        name: "Venice",
      },
    ],
    faqs: [
      {
        question: "Do you paint offices and studios in Culver City?",
        answer: "Yes. Commercial work is a big part of what we do here, including offices, studios, restaurants, and retail. We schedule evenings, overnight, or weekends so your business stays open.",
      },
      {
        question: "How much does interior painting cost in Culver City?",
        answer: "It depends on the number of rooms, ceiling heights, wall condition, and whether trim and doors are included. We walk the space and give you a free, itemized quote so you can adjust the scope line by line.",
      },
      {
        question: "Can you get a home ready to sell quickly?",
        answer: "Yes. Pre-sale interiors and exteriors are common in Culver City. We can usually start within a couple of weeks and work alongside your agent's timeline and staging schedule.",
      },
      {
        question: "Do you work on apartment buildings?",
        answer: "Yes. We handle exterior and common-area repaints for apartment and condo buildings, including resident notices, parking plans, and phased work areas.",
      },
      {
        question: "Is your work warrantied?",
        answer: "Every residential project carries a 5-year workmanship warranty in writing. Commercial warranties are defined in your quote based on the scope.",
      },
    ],
    zipCodes: [
      "90230",
      "90232",
    ],
    geo: {
      latitude: 34.0211,
      longitude: -118.3965,
    },
  },
];

export const getServiceArea = (slug: string) => serviceAreas.find((area) => area.slug === slug);

export const areaHref = (slug: string) => `/service-areas/${slug}`;

/** Finds the neighborhood page for a project ZIP code, if we have one. */
export const areaForZip = (zip: string) => serviceAreas.find((area) => area.zipCodes.includes(zip));
