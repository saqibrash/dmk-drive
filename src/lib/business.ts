export const business = {
  name: "DMK Plumbing & Heating",
  phoneDisplay: "07868 470 791",
  phoneHref: "tel:+447868470791",
  whatsapp: "https://wa.me/447868470791",
  email: "plumbingdmk@gmail.com",
  reviews: "300+",
  reviewsLine: "Over 300 five-star reviews across the platforms",
  strapline: "Emergency plumbing, boilers, heating, air conditioning and Gas Safe services in Cardiff.",
};

export type NavItem = { label: string; to: string };

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Emergency", to: "/services/emergency-plumbing" },
  { label: "Boilers", to: "/services/boiler-repairs" },
  { label: "Heating", to: "/services/central-heating" },
  { label: "Air Con", to: "/services/air-conditioning-installation" },
  { label: "Landlords", to: "/services/landlord-services" },
  { label: "Areas", to: "/areas-we-cover" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export type Service = {
  slug: string;
  n: string;
  title: string;
  short: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  points: string[];
  body: string;
};

export const services: Service[] = [
  {
    slug: "emergency-plumbing",
    n: "01",
    title: "Emergency Plumbing",
    short: "Rapid 24/7 response",
    h1: "Emergency Plumber Cardiff",
    metaTitle: "Emergency Plumber Cardiff | 24/7 Call-Out | DMK Plumbing",
    metaDescription:
      "Emergency plumber in Cardiff for burst pipes, leaks and no hot water. Gas Safe registered, fast local response. Call DMK Plumbing on 07868 470 791.",
    intro:
      "A burst pipe at 2am. A leak coming through the ceiling. No hot water on a freezing morning. That is when you call our emergency plumber Cardiff team.",
    points: [
      "Fast response day or night",
      "Clear prices with no hidden charges",
      "Qualified engineers who actually fix the problem",
      "We respect your home and clean up before we leave",
    ],
    body: "Our local plumbers know Cardiff's roads, from Roath and Canton to Splott, Pontcanna and Whitchurch, so we get to you fast. Leaking radiator, broken pipe or a failed boiler, we get things back under control.",
  },
  {
    slug: "boiler-repairs",
    n: "02",
    title: "Boiler Repairs",
    short: "Same-day breakdowns",
    h1: "Emergency Boiler Repair Cardiff",
    metaTitle: "Boiler Repair Cardiff | Same-Day Gas Safe Engineers | DMK",
    metaDescription:
      "Same-day boiler repair in Cardiff by Gas Safe registered engineers. All major brands, fast diagnosis. Call DMK Plumbing on 07868 470 791.",
    intro:
      "No heat. No hot water. Middle of winter. Our same-day emergency boiler repair service in Cardiff gets your home warm again.",
    points: [
      "Pilot light will not stay lit",
      "Boiler keeps losing pressure",
      "Strange noises or banging sounds",
      "Heating but no hot water, or the other way round",
      "Boiler showing fault codes",
    ],
    body: "Our Gas Safe registered engineers work on all major boiler brands. We keep common parts stocked so you are not waiting days for a repair, and if your boiler cannot be fixed safely we help you choose a reliable replacement.",
  },
  {
    slug: "boiler-servicing",
    n: "03",
    title: "Boiler Servicing",
    short: "Annual safety checks",
    h1: "Boiler Servicing Cardiff",
    metaTitle: "Boiler Servicing Cardiff | Annual Gas Safe Service | DMK",
    metaDescription:
      "Annual boiler servicing in Cardiff. Full safety inspection, flue and pressure checks by Gas Safe engineers. Book on 07868 470 791.",
    intro:
      "Like your car, your boiler needs regular maintenance to stay safe and efficient. Our servicing prevents breakdowns and keeps your warranty valid.",
    points: [
      "Full safety inspection",
      "Flue and pressure checks",
      "Cleaning key components",
      "Identifying early signs of wear or leaks",
    ],
    body: "We recommend an annual service before winter. A well-maintained boiler lasts longer, runs quieter and costs less to run. Many customers book in September or October to stay ahead of the cold.",
  },
  {
    slug: "boiler-installation",
    n: "04",
    title: "Boiler Installation",
    short: "All major brands",
    h1: "Boiler Installation Cardiff",
    metaTitle: "Boiler Installation Cardiff | New Boilers Fitted | DMK Plumbing",
    metaDescription:
      "Professional boiler installation in Cardiff. Combi, system and regular boilers fitted by Gas Safe engineers. Free survey. Call 07868 470 791.",
    intro:
      "When it is time for a new system you want one that is efficient, reliable and installed properly, using trusted brands that last.",
    points: [
      "Free home survey and clear advice",
      "Removal of your old boiler",
      "Clean, safe installation",
      "Full system test and warranty registration",
    ],
    body: "We install combi, system and regular boilers and help you pick the right model for your home size and heating needs. Serving the whole Cardiff area including Grangetown, Llanishen, Penylan and Heath.",
  },
  {
    slug: "central-heating",
    n: "05",
    title: "Central Heating",
    short: "Radiators & systems",
    h1: "Central Heating Repair Cardiff",
    metaTitle: "Central Heating Repair Cardiff | Heating Engineers | DMK",
    metaDescription:
      "Central heating repair in Cardiff. Radiators, valves, pumps, thermostats and power flushing by local heating engineers. Call 07868 470 791.",
    intro:
      "Cold spots on radiators. No heat in one room. A system constantly losing pressure. These are signs your heating needs attention.",
    points: [
      "Radiators not heating properly",
      "Noisy pipes or trapped air",
      "Leaks in heating pipes",
      "Faulty thermostats or controls",
      "Circulation issues",
    ],
    body: "We work on radiators, valves, pumps and thermostats across Cardiff, from a small fix to a full power flush, using quality parts and professional testing equipment.",
  },
  {
    slug: "gas-safety-certificates",
    n: "06",
    title: "Gas Safety Certificates",
    short: "CP12 certificates",
    h1: "Gas Engineer Cardiff & Gas Safety Certificates",
    metaTitle: "Gas Safety Certificate Cardiff | Gas Engineer | DMK Plumbing",
    metaDescription:
      "Gas safety certificates (CP12) in Cardiff from Gas Safe registered engineers. Checks, leak detection and appliance work. Call 07868 470 791.",
    intro:
      "All our engineers are Gas Safe registered, qualified to work safely on the gas appliances in your home or rental property.",
    points: [
      "Gas safety checks",
      "Boiler and cooker installations",
      "Gas leak detection and repair",
      "Landlord gas safety certificates",
    ],
    body: "Whether it is a family home in Rhiwbina or a rental property in Cathays, we keep your systems compliant, efficient and safe to use.",
  },
  {
    slug: "landlord-services",
    n: "07",
    title: "Landlord Services",
    short: "Compliance & repairs",
    h1: "Landlord Plumbing & Gas Services Cardiff",
    metaTitle: "Landlord Gas Safety & Plumbing Cardiff | DMK Plumbing",
    metaDescription:
      "Landlord services in Cardiff: gas safety certificates, boiler servicing, emergency repairs and property maintenance. Call 07868 470 791.",
    intro:
      "Keep your rental properties compliant, warm and tenant-ready with one local team on call.",
    points: [
      "Gas Safety Certificates",
      "Boiler Servicing",
      "Emergency Repairs",
      "Property Maintenance",
      "Heating Repairs",
    ],
    body: "We work with landlords and letting agents across Cardiff, arranging access with tenants directly and sending certificates over as soon as the work is signed off.",
  },
  {
    slug: "drainage",
    n: "08",
    title: "Drainage",
    short: "Clearing & unblocking",
    h1: "Blocked Drains Cardiff",
    metaTitle: "Blocked Drains Cardiff | Drain Unblocking | DMK Plumbing",
    metaDescription:
      "Blocked drains cleared fast across Cardiff. Sinks, toilets, outside drains and waste pipes. Call DMK Plumbing on 07868 470 791.",
    intro:
      "Slow sinks, gurgling toilets and standing water outside are all signs of a blockage that only gets worse.",
    points: [
      "Blocked sinks, baths and toilets",
      "Outside drains and gullies",
      "Waste pipe leaks",
      "Recurring blockage diagnosis",
    ],
    body: "We clear blockages properly and check what caused them, so the same problem does not come back a fortnight later.",
  },
  {
    slug: "bathroom-plumbing",
    n: "09",
    title: "Bathroom Plumbing",
    short: "Fits & upgrades",
    h1: "Bathroom Plumbing Cardiff",
    metaTitle: "Bathroom Plumbing Cardiff | Taps, Showers & Fitting | DMK",
    metaDescription:
      "Bathroom plumbing in Cardiff: taps, showers, toilets, basins and full bathroom pipework by local qualified plumbers. Call 07868 470 791.",
    intro:
      "From a dripping tap to full bathroom pipework, done neatly and tested before we leave.",
    points: [
      "Taps, showers and mixers",
      "Toilets and basins",
      "Bathroom pipework and waste",
      "Leak tracing and repair",
    ],
    body: "We handle the plumbing side of bathroom projects for homeowners and landlords across Cardiff, working cleanly and tidying up afterwards.",
  },
  {
    slug: "air-conditioning-service",
    n: "10",
    title: "Air Conditioning Service",
    short: "Clean, check & re-gas",
    h1: "Air Conditioning Servicing Cardiff",
    metaTitle: "Air Conditioning Service Cardiff | F-Gas Engineers | DMK",
    metaDescription:
      "Air conditioning servicing in Cardiff by F-Gas registered engineers. Filter and coil cleaning, refrigerant checks and performance testing. Call 07868 470 791.",
    intro:
      "A regular service keeps your air conditioning cooling properly, running quietly and breathing clean air, and catches small faults before they become breakdowns.",
    points: [
      "Filter and coil cleaning",
      "Refrigerant level and leak checks",
      "Condensate drain clearing",
      "Electrical and performance testing",
    ],
    body: "Our F-Gas registered engineers service wall-mounted splits, multi-splits and ducted systems in homes, offices and shops across Cardiff. Most units should be serviced at least once a year, and commercial systems more often.",
  },
  {
    slug: "air-conditioning-installation",
    n: "11",
    title: "Air Conditioning Installation",
    short: "Homes & businesses",
    h1: "Air Conditioning Installation Cardiff",
    metaTitle: "Air Conditioning Installation Cardiff | Supply & Fit | DMK",
    metaDescription:
      "Air conditioning installation in Cardiff. Wall-mounted split and multi-split systems supplied and fitted by F-Gas registered engineers. Free survey. Call 07868 470 791.",
    intro:
      "Cool in summer, efficient heat in winter. We supply and fit air conditioning sized properly for the room, installed neatly and commissioned before we leave.",
    points: [
      "Free survey and system sizing",
      "Wall-mounted split and multi-split systems",
      "Neat pipe runs and outdoor unit placement",
      "Commissioning, handover and warranty registration",
    ],
    body: "We install air conditioning in bedrooms, living rooms, home offices, conservatories and commercial premises across Cardiff and the surrounding areas, using reliable brands and F-Gas registered engineers for every refrigerant connection.",
  },
  {
    slug: "air-conditioning-repair",
    n: "12",
    title: "Air Conditioning Repair",
    short: "Faults & breakdowns",
    h1: "Air Conditioning Repair Cardiff",
    metaTitle: "Air Conditioning Repair Cardiff | Fast AC Fault Finding | DMK",
    metaDescription:
      "Air conditioning repair in Cardiff. Units not cooling, leaking water, error codes or noisy fans fixed by F-Gas registered engineers. Call 07868 470 791.",
    intro:
      "Air con blowing warm air, dripping water or showing an error code? Our engineers find the fault and get it cooling again.",
    points: [
      "Unit not cooling or heating",
      "Water leaking from the indoor unit",
      "Error codes and flashing lights",
      "Noisy fans or compressors",
      "Refrigerant leaks and re-gassing",
    ],
    body: "We repair all the major air conditioning brands across Cardiff. Our F-Gas registered engineers carry common parts and leak detection equipment so most faults are diagnosed on the first visit.",
  },
];

export const emergencies = [
  "Burst Pipes",
  "Leaks",
  "No Heating",
  "No Hot Water",
  "Boiler Breakdown",
  "Blocked Drains",
];

export const areas = [
  "Cardiff",
  "Penarth",
  "Barry",
  "Caerphilly",
  "Pontypridd",
  "Dinas Powys",
  "Sully",
  "Rhiwbina",
  "Whitchurch",
  "Canton",
  "Roath",
  "Cardiff Bay",
  "Grangetown",
  "Llandaff",
  "Cathays",
];

export const faqs = [
  {
    q: "Do you offer emergency call-outs in Cardiff?",
    a: "Yes. We respond to urgent plumbing, boiler and heating problems across Cardiff and the surrounding areas, including burst pipes, leaks and total boiler breakdowns.",
  },
  {
    q: "Are your engineers Gas Safe registered?",
    a: "Yes. All gas work is carried out by Gas Safe registered engineers, including boiler repairs, installations and landlord gas safety certificates.",
  },
  {
    q: "Can you repair my boiler the same day?",
    a: "In most cases yes. We carry common spares so many faults are diagnosed and fixed on the first visit.",
  },
  {
    q: "Do you install and repair air conditioning?",
    a: "Yes. Our F-Gas registered engineers install, service and repair air conditioning in homes and businesses across Cardiff and the surrounding areas.",
  },
  {
    q: "Which areas do you cover?",
    a: "Cardiff and surrounding areas including Penarth, Barry, Caerphilly, Pontypridd, Dinas Powys, Sully and all Cardiff districts.",
  },
  {
    q: "How do I get a price?",
    a: "Call or WhatsApp 07868 470 791, or send the short quote form on this site with your postcode and what needs doing.",
  },
];

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: business.name,
  telephone: "+44 7868 470791",
  email: business.email,
  url: "/",
  description:
    "Emergency plumbing, boiler repairs, heating, air conditioning and Gas Safe services in Cardiff and surrounding areas.",
  areaServed: areas.map((a) => ({ "@type": "Place", name: a })),
  address: { "@type": "PostalAddress", addressLocality: "Cardiff", addressCountry: "GB" },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
