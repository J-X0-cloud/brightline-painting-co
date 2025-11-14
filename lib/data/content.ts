import type { IconName } from "@/components/ui/Icon";
import type { Faq, ProcessStep, Project, Review } from "@/types/content";

export const trustBadges: { label: string; icon: IconName }[] = [
  { label: "4.9-Star Rated", icon: "star" },
  { label: "EPA Lead-Safe Certified", icon: "shield-check" },
  { label: "Licensed C-33 Contractor", icon: "award" },
  { label: "5-Year Warranty", icon: "trophy" },
  { label: "Low-VOC Paints", icon: "leaf-building" },
];

export const featuredServices = [
  {
    title: "Interior Painting",
    body: "Walls, ceilings, trim, and doors with sharp lines, smooth coats, and furniture protected throughout.",
    image: {
      src: "/images/breakfast-nook.webp",
      alt: "Bright breakfast nook with freshly painted white walls and trim",
      width: 1500,
      height: 1033,
    },
  },
  {
    title: "Exterior Painting",
    body: "Stucco, siding, and trim coated to hold up to year-round sun, heat, and coastal air.",
    image: {
      src: "/images/farmhouse-exterior-dusk.jpg",
      alt: "Modern farmhouse exterior with white siding and stone accents at dusk",
      width: 1440,
      height: 960,
    },
  },
  {
    title: "Commercial Painting",
    body: "Offices, retail, and restaurants painted after hours or on weekends so you stay open.",
    image: {
      src: "/images/restaurant-bar.webp",
      alt: "Restaurant interior with a long wood bar and freshly painted walls",
      width: 2400,
      height: 1080,
    },
  },
];

export const moreServices: { title: string; body: string; icon: IconName; href: string }[] = [
  {
    title: "Whole-Home Repaint",
    body: "Interior and exterior coordinated on a single schedule and a single quote.",
    icon: "home",
    href: "/services#painting",
  },
  {
    title: "Cabinet Refinishing",
    body: "Sprayed, factory-smooth kitchen and bath cabinets without a remodel.",
    icon: "cabinet",
    href: "/services#painting",
  },
  {
    title: "Stucco & Elastomeric",
    body: "Crack repair and flexible coatings that keep stucco sealed and bright.",
    icon: "stucco",
    href: "/services#prep",
  },
  {
    title: "HOA & Multifamily",
    body: "Building repaints scheduled around residents, with clear notices.",
    icon: "fence",
    href: "/services#painting",
  },
];

const project = (
  title: string,
  location: string,
  body: string,
  href: string,
  src: string,
  width: number,
  height: number,
): Project => ({
  title,
  location,
  body,
  href,
  image: { src, alt: `${title} in ${location} by Brightline Painting Co.`, width, height },
});

export const recentProjects: Project[] = [
  project(
    "Dining room refresh",
    "Los Feliz",
    "Soft white walls, satin trim, and a ceiling that finally looks crisp again.",
    "/service-areas/silver-lake",
    "/images/dining-room-refresh.webp",
    1444,
    964,
  ),
  project(
    "Hillside exterior repaint",
    "Silver Lake",
    "Deep navy siding with bright trim on a steep lot reached by scaffold and stairs.",
    "/service-areas/silver-lake",
    "/images/navy-hillside-home.webp",
    1400,
    1015,
  ),
  project(
    "Kitchen cabinet refinish",
    "Culver City",
    "Oak cabinets sprayed a warm white in five days, with no full remodel needed.",
    "/service-areas/culver-city",
    "/images/kitchen-cabinets.webp",
    1500,
    1057,
  ),
  project(
    "Restaurant repaint",
    "Arts District",
    "Dining room and bar repainted overnight so service never missed a shift.",
    "/services#painting",
    "/images/restaurant-arts-district.webp",
    2400,
    1080,
  ),
  project(
    "Craftsman bungalow",
    "Pasadena",
    "Lead-safe prep, rot repair, and a historic green palette with cream trim.",
    "/service-areas/pasadena",
    "/images/craftsman-green-cream.webp",
    1376,
    768,
  ),
  project(
    "Primary bath update",
    "Santa Monica",
    "Moisture-resistant finishes on walls and vanity for a bright coastal bath.",
    "/service-areas/santa-monica",
    "/images/primary-bath.webp",
    1500,
    1023,
  ),
  project(
    "Modern farmhouse exterior",
    "Brentwood",
    "Board-and-batten, stucco, and trim coated in a UV-resistant system.",
    "/services#painting",
    "/images/coastal-white-home.webp",
    1376,
    768,
  ),
  project(
    "Living room repaint",
    "South Pasadena",
    "A warm greige that ties the fireplace, built-ins, and oak floors together.",
    "/service-areas/pasadena",
    "/images/living-room-greige.webp",
    1495,
    999,
  ),
];

export const whyPoints: { title: string; body: string; icon: IconName }[] = [
  {
    title: "One crew lead, start to finish",
    body: "The person who walks your project on day one is the person who signs off on it at the end.",
    icon: "clipboard-check",
  },
  {
    title: "A text every evening",
    body: "Photos and a short update after each workday, plus a direct line for anything that comes up.",
    icon: "message",
  },
  {
    title: "Prep that is actually in the price",
    body: "Washing, scraping, patching, caulking, and priming are itemized in your quote, not treated as extras.",
    icon: "roller",
  },
  {
    title: "No surprise change orders",
    body: "If something unexpected turns up, like hidden rot, you see photos and a price before we do anything.",
    icon: "tag",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Walkthrough and color talk",
    body: "We visit, measure, look closely at the surfaces, and talk through colors and sheens with you on site.",
  },
  {
    title: "Itemized written quote",
    body: "Within two business days you get a line-by-line quote with prep, coatings, and a firm start date.",
  },
  {
    title: "Kickoff with your crew lead",
    body: "Your crew lead confirms colors, protected areas, parking, and daily hours before the first drop cloth goes down.",
  },
  {
    title: "Prep and protection",
    body: "Floors, furniture, landscaping, and fixtures get covered. Then we wash, scrape, patch, caulk, and prime every surface that needs it.",
  },
  {
    title: "Paint and daily cleanup",
    body: "Premium low-VOC coatings in even, full coats, with the site swept and tidied at the end of every day.",
  },
  {
    title: "Punch list and final walkthrough",
    body: "We walk the job with you, fix anything you flag, and hand over your warranty and a labeled touch-up kit.",
  },
];

export const reviews: Review[] = [
  {
    name: "Maya R.",
    source: "Google",
    body: "Brightline repainted our 1920s Spanish-style house in Silver Lake. They patched every stucco crack, walked us through the colors on real samples, and the crew cleaned up every single day. It looks like a new home.",
  },
  {
    name: "Daniel K.",
    source: "Yelp",
    body: "The quote was itemized down to the trim and it matched the final invoice exactly. No surprise add-ons, which has never happened to us with a contractor before.",
  },
  {
    name: "Priya S.",
    source: "Google",
    body: "They sprayed our kitchen cabinets in five days and the finish is smooth as glass. Our crew lead texted a photo update every evening so we always knew where things stood.",
  },
  {
    name: "Tom W.",
    source: "Google",
    body: "Painted the exterior of our Pasadena Craftsman. They took the lead-safe setup seriously, tented the planters, and replaced two rotted fascia boards before a drop of paint went on.",
  },
  {
    name: "Alicia M.",
    source: "Yelp",
    body: "We manage a 24-unit building in Culver City and Brightline scheduled around every tenant. Clear notices, tidy site, finished a day early.",
  },
  {
    name: "Owen T.",
    source: "Google",
    body: "Fast to respond, on time every morning, and genuinely careful with our floors and furniture. The interior looks crisp and the lines are perfect.",
  },
  {
    name: "Hannah L.",
    source: "Google",
    body: "Our Santa Monica place gets hammered by the salt air. They pressure washed, primed the bare spots, and used a coating made for coastal homes. A year later it still looks fresh.",
  },
  {
    name: "Marcus J.",
    source: "Yelp",
    body: "Honest advice. They told us the back of the house only needed prep and touch-ups instead of a full repaint and saved us real money.",
  },
  {
    name: "Elena V.",
    source: "Google",
    body: "Color consultation alone was worth it. We were stuck between three whites and they painted big samples on each wall so we could see them in morning and evening light.",
  },
  {
    name: "Ben A.",
    source: "Google",
    body: "Our office repaint happened over two weekends so the team never lost a workday. Professional from the first walkthrough to the final punch list.",
  },
];

export const reviewStats = [
  { value: "Since 2016", label: "painting Los Angeles" },
  { value: "5 years", label: "workmanship warranty" },
  { value: "Google + Yelp", label: "verified homeowner reviews" },
];

export const homeFaqs: Faq[] = [
  {
    question: "Are your quotes really free?",
    answer:
      "Yes. Every quote is free, written, and itemized, with no obligation. You will see exactly which surfaces are included, how many coats, and what each part costs before any work begins.",
  },
  {
    question: "Which neighborhoods do you serve?",
    answer:
      "All of Los Angeles, including the Eastside (Silver Lake, Echo Park, Los Feliz), the San Gabriel Valley (Pasadena, South Pasadena, Altadena), the Westside (Santa Monica, Culver City, Venice), and the Glendale and Burbank area.",
    link: { label: "See the full list", href: "/#areas" },
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. We hold a California C-33 painting and decorating contractor license, carry general liability and workers compensation insurance, and are an EPA Lead-Safe certified firm for work on homes built before 1978.",
  },
  {
    question: "What kind of paint do you use?",
    answer:
      "Premium low-VOC and zero-VOC paints from major manufacturers that meet Southern California air-quality rules. We match the product to the surface: elastomeric for stucco, UV-resistant exterior coatings for sun-facing walls, and durable enamels for trim and cabinets.",
  },
  {
    question: "Do you offer a warranty?",
    answer:
      "Every residential project comes with a 5-year workmanship warranty in writing. Commercial projects carry a warranty sized to the scope, spelled out in your quote.",
  },
  {
    question: "How soon can you start?",
    answer:
      "Most walkthroughs happen within a few days of your call, and most projects start two to four weeks after you approve the quote. Small interior jobs can often be fit in sooner.",
  },
  {
    question: "Do I need to move out during an interior repaint?",
    answer:
      "Almost never. We work room by room, keep a clear path through the house, and use low-odor paints, so most families stay home the whole time.",
  },
];

export const serviceFaqs: Faq[] = [
  {
    question: "How is a Brightline quote put together?",
    answer:
      "After a walkthrough we send an itemized quote that lists each room or elevation, the prep for each surface, the product and sheen, and the number of coats. You can add or remove line items and see the price change before you sign.",
  },
  {
    question: "Do you paint stucco differently than wood siding?",
    answer:
      "Yes. Stucco gets crack repair and a breathable or elastomeric coating depending on its condition. Wood siding and trim get scraping, sanding, spot-priming, and a flexible acrylic topcoat. We explain the reasoning in your quote.",
  },
  {
    question: "How long does cabinet refinishing take?",
    answer:
      "Most kitchens take four to six working days. Doors and drawer fronts are sprayed in our shop while the boxes are finished on site, so your kitchen stays usable for most of the job.",
  },
  {
    question: "Can you work around my business hours?",
    answer:
      "Yes. Commercial projects are commonly scheduled for evenings, overnight, or weekends, and we phase larger spaces so only part of the floor is ever closed at once.",
  },
  {
    question: "Do you help with HOA bids and color approvals?",
    answer:
      "We prepare board-ready bids with scope, phasing, and product specs, and we paint sample areas for committee review before the full project starts.",
  },
];
