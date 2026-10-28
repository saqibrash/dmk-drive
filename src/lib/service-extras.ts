import emergency from "@/assets/svc-emergency.jpg";
import boilerRepair from "@/assets/svc-boiler-repair.jpg";
import boilerService from "@/assets/svc-boiler-service.jpg";
import boilerInstall from "@/assets/svc-boiler-install.jpg";
import heating from "@/assets/svc-heating.jpg";
import gasSafety from "@/assets/svc-gas-safety.jpg";
import landlord from "@/assets/svc-landlord.jpg";
import drainage from "@/assets/svc-drainage.jpg";
import bathroom from "@/assets/svc-bathroom.jpg";
import aircon from "@/assets/svc-aircon-install.svg";
import airconService from "@/assets/svc-aircon-service.svg";
import airconRepair from "@/assets/svc-aircon-repair.svg";

export type ServiceExtra = {
  image: string;
  alt: string;
  lede: string;
  pointsTitle: string;
  steps: { t: string; d: string }[];
  faqs: { q: string; a: string }[];
};

const callStep = { t: "Call or WhatsApp", d: "Tell us what is happening and your postcode. You speak to the team doing the work." };

export const serviceExtras: Record<string, ServiceExtra> = {
  "emergency-plumbing": {
    image: emergency,
    alt: "Plumber repairing a leaking pipe under a kitchen sink in a Cardiff home",
    lede: "Burst pipes, leaks and no water, sorted by local plumbers.",
    pointsTitle: "What to expect",
    steps: [
      callStep,
      { t: "Make it safe", d: "We talk you through turning off the water at the stopcock while we head over." },
      { t: "Find and fix", d: "We trace the leak, repair it properly and test everything before we leave." },
    ],
    faqs: [
      { q: "Do you come out at night and at weekends?", a: "Yes. Emergency call-outs are available 24 hours a day, 7 days a week across Cardiff and the surrounding areas." },
      { q: "What should I do while I wait?", a: "Turn off the water at the stopcock, usually under the kitchen sink. If water is near electrics, switch off the power at the consumer unit if it is safe to do so." },
      { q: "Can you give me a price on the phone?", a: "We explain our call-out charge when you ring and agree the price of the repair with you before any work starts." },
    ],
  },
  "boiler-repairs": {
    image: boilerRepair,
    alt: "Gas Safe engineer testing the electrics inside an open combi boiler",
    lede: "No heating or hot water? Gas Safe engineers who diagnose and repair on the spot.",
    pointsTitle: "Common boiler faults we fix",
    steps: [
      { t: "Call or WhatsApp", d: "Tell us your boiler make and any fault code on the display. It helps us bring the right parts." },
      { t: "Diagnose", d: "A Gas Safe engineer tests the boiler and explains what has gone wrong in plain English." },
      { t: "Repair and test", d: "With your go-ahead we repair it, then run safety and combustion checks before we leave." },
    ],
    faqs: [
      { q: "Which boiler brands do you repair?", a: "All major brands, including Worcester Bosch, Vaillant, Baxi, Ideal and Viessmann." },
      { q: "Can my boiler be fixed the same day?", a: "In most cases, yes. We carry common spares. If a part has to be ordered, we tell you how long it will take." },
      { q: "Is it worth repairing an old boiler?", a: "Often it is. If a repair would cost more than the boiler is worth, or it is no longer safe, we tell you honestly and explain your options." },
    ],
  },
  "boiler-servicing": {
    image: boilerService,
    alt: "Engineer using a flue gas analyser during an annual boiler service",
    lede: "Annual boiler services that keep your home safe and your boiler running efficiently.",
    pointsTitle: "Included in every service",
    steps: [
      { t: "Book a slot", d: "Call, WhatsApp or send the form. We arrange a time that suits you." },
      { t: "Full inspection", d: "Gas pressure, flue, combustion and safety devices are checked and key parts cleaned." },
      { t: "Clear report", d: "We record the service and tell you about anything that needs attention." },
    ],
    faqs: [
      { q: "How often should my boiler be serviced?", a: "Once a year. Most manufacturers ask for an annual service to keep the warranty valid." },
      { q: "How long does a service take?", a: "Usually around an hour, depending on the boiler and what we find." },
      { q: "When is the best time to book?", a: "Before winter. Booking in late summer or early autumn means problems are found before you need the heating." },
    ],
  },
  "boiler-installation": {
    image: boilerInstall,
    alt: "Newly installed combi boiler with neat copper pipework and magnetic filter",
    lede: "New combi, system and regular boilers, sized for your home and fitted properly.",
    pointsTitle: "How we handle your installation",
    steps: [
      { t: "Home survey", d: "We look at your home, your hot water use and your current system." },
      { t: "Clear quote", d: "You get a written quote and a recommended boiler, with the reasons why." },
      { t: "Fit and register", d: "We remove the old boiler, install the new one, test it and register the warranty." },
    ],
    faqs: [
      { q: "Which type of boiler do I need?", a: "It depends on your home size, number of bathrooms and water pressure. We recommend the right type after the survey." },
      { q: "How long does an installation take?", a: "A straight like-for-like swap is often done in a day. Changing boiler type or location can take longer, and we tell you upfront." },
      { q: "Do you take the old boiler away?", a: "Yes. Removal and disposal of your old boiler is part of the job." },
    ],
  },
  "central-heating": {
    image: heating,
    alt: "Heating engineer fitting a radiator and thermostatic valve in a living room",
    lede: "Radiators, pumps, valves and controls. Repairs, new radiators and power flushing.",
    pointsTitle: "Heating problems we fix",
    steps: [
      callStep,
      { t: "Find the cause", d: "Cold spots, noise or pressure loss usually have one root cause. We find it." },
      { t: "Fix and balance", d: "We repair or replace parts, then balance the system so every room heats evenly." },
    ],
    faqs: [
      { q: "Can you fit new or replacement radiators?", a: "Yes. We supply and fit radiators and thermostatic valves, and can move radiators to a new position." },
      { q: "Why are my radiators cold at the bottom?", a: "Usually sludge has built up in the system. A power flush or chemical clean normally sorts it." },
      { q: "Why does my system keep losing pressure?", a: "Often a small leak, a faulty pressure relief valve or an expansion vessel problem. We test each to find the cause." },
    ],
  },
  "gas-safety-certificates": {
    image: gasSafety,
    alt: "Gas engineer pressure-testing a gas hob in a rental property kitchen",
    lede: "Gas safety checks and CP12 certificates from Gas Safe registered engineers.",
    pointsTitle: "What we cover",
    steps: [
      { t: "Book the check", d: "Tell us the address and the appliances. We can arrange access with tenants." },
      { t: "Test every appliance", d: "Boiler, hob, fire and pipework are checked for tightness, ventilation and safe operation." },
      { t: "Certificate sent", d: "Your gas safety record is sent over once the check is complete." },
    ],
    faqs: [
      { q: "How often does a landlord need a gas safety certificate?", a: "Every 12 months, by law, for every gas appliance in a rented property." },
      { q: "What happens if an appliance fails?", a: "We explain the problem, make it safe and quote for the repair." },
      { q: "Do you carry out checks for homeowners?", a: "Yes. A gas safety check is a good idea when you move into a new home." },
    ],
  },
  "landlord-services": {
    image: landlord,
    alt: "Engineer arriving at a Cardiff terraced rental property",
    lede: "Gas safety, servicing and repairs for landlords and letting agents across Cardiff.",
    pointsTitle: "Services for landlords",
    steps: [
      { t: "Send the details", d: "Address, tenant contact and what is needed. We handle the rest." },
      { t: "We arrange access", d: "We contact tenants directly to book a time that works." },
      { t: "Work signed off", d: "Certificates and job details are sent to you as soon as the work is done." },
    ],
    faqs: [
      { q: "Do you work with letting agents?", a: "Yes. We work with landlords and letting agents and can liaise with tenants directly." },
      { q: "Can you handle emergency repairs in tenanted homes?", a: "Yes. Tenants can call us for urgent plumbing or heating problems and we keep you informed." },
      { q: "Can you look after several properties?", a: "Yes. Get in touch and we will talk through what you need." },
    ],
  },
  drainage: {
    image: drainage,
    alt: "Plumber clearing an outside drain with drain rods in a back garden",
    lede: "Blocked sinks, toilets and outside drains cleared, and the cause found.",
    pointsTitle: "Blockages we clear",
    steps: [
      callStep,
      { t: "Clear the blockage", d: "We use the right equipment for the job, from plungers to drain rods." },
      { t: "Check the cause", d: "We look at why it blocked, so it does not happen again." },
    ],
    faqs: [
      { q: "Can you clear outside drains?", a: "Yes. We clear gullies and outside drains as well as sinks, baths and toilets." },
      { q: "Why does my drain keep blocking?", a: "Common causes are grease, wipes, tree roots or a damaged pipe. We check for the cause after clearing it." },
      { q: "Is a gurgling toilet a sign of a blockage?", a: "Often, yes. It usually means air is trapped by a partial blockage further down the pipe." },
    ],
  },
  "bathroom-plumbing": {
    image: bathroom,
    alt: "Plumber fitting a thermostatic shower mixer in a tiled bathroom",
    lede: "Taps, showers, toilets and bathroom pipework, fitted neatly and tested.",
    pointsTitle: "Bathroom plumbing we do",
    steps: [
      { t: "Tell us the job", d: "Send a photo on WhatsApp if you can. It helps us quote accurately." },
      { t: "Agree the price", d: "You know the cost before we start." },
      { t: "Fit and test", d: "We fit everything, check for leaks and clean up afterwards." },
    ],
    faqs: [
      { q: "Can you fit a new shower?", a: "Yes. We fit mixer and thermostatic showers and replace faulty valves and cartridges." },
      { q: "Do you fix dripping taps and running toilets?", a: "Yes. These are quick jobs and stop wasted water." },
      { q: "Do you do full bathroom fitting?", a: "We handle the plumbing side of bathroom projects, including pipework, waste and fitting sanitaryware." },
    ],
  },
  "air-conditioning-service": {
    image: airconService,
    alt: "F-Gas engineer cleaning the filter of a wall-mounted air conditioning unit",
    lede: "Air conditioning servicing that keeps your system cooling efficiently and the air clean.",
    pointsTitle: "Included in every service",
    steps: [
      { t: "Book a slot", d: "Call, WhatsApp or send the form with the make and number of units." },
      { t: "Clean and check", d: "Filters, coils and drains are cleaned, and refrigerant and electrics are tested." },
      { t: "Performance report", d: "We record the readings and tell you about anything that needs attention." },
    ],
    faqs: [
      { q: "How often should air conditioning be serviced?", a: "At least once a year for home systems. Busy commercial systems often need a service every six months." },
      { q: "Why does my air con smell musty?", a: "Usually dirty filters or a blocked condensate drain. A service cleans both and treats the coil." },
      { q: "Do you service all brands?", a: "Yes. We service all the major brands, including Daikin, Mitsubishi Electric, Fujitsu, Toshiba, LG and Samsung." },
    ],
  },
  "air-conditioning-installation": {
    image: aircon,
    alt: "Wall-mounted air conditioning unit installed above a sofa in a Cardiff living room",
    lede: "Air conditioning supplied and fitted for homes and businesses, cooling in summer and heating in winter.",
    pointsTitle: "How we handle your installation",
    steps: [
      { t: "Free survey", d: "We measure the room, check where the indoor and outdoor units can go and recommend the right size." },
      { t: "Clear quote", d: "You get a written quote with the recommended system and the reasons why." },
      { t: "Fit and commission", d: "F-Gas engineers install, pressure test and commission the system, then show you how to use it." },
    ],
    faqs: [
      { q: "How long does an installation take?", a: "A single wall-mounted split system is usually fitted in a day. Multi-room systems can take longer, and we tell you upfront." },
      { q: "Can air conditioning heat my home too?", a: "Yes. Most modern split systems are heat pumps and heat efficiently in winter as well as cooling in summer." },
      { q: "Do I need planning permission?", a: "Usually not for a single outdoor unit on a house, but there are conditions. We check this during the survey." },
    ],
  },
  "air-conditioning-repair": {
    image: airconRepair,
    alt: "Engineer connecting refrigerant gauges to an outdoor air conditioning unit",
    lede: "Air con not cooling, leaking or showing a fault code? F-Gas engineers who find and fix it.",
    pointsTitle: "Common air conditioning faults we fix",
    steps: [
      { t: "Call or WhatsApp", d: "Tell us the make and any error code on the display. A photo on WhatsApp helps." },
      { t: "Diagnose", d: "We test the electrics, refrigerant pressures and drainage to find the cause." },
      { t: "Repair and test", d: "With your go-ahead we repair it, then check the system is cooling properly before we leave." },
    ],
    faqs: [
      { q: "Why is my air con blowing warm air?", a: "Common causes are low refrigerant from a leak, a blocked filter or coil, or a failed component outdoors. We test each one." },
      { q: "Why is water dripping from my indoor unit?", a: "Usually a blocked condensate drain or a unit that is not level. It is normally a quick fix." },
      { q: "Can you re-gas my air conditioning?", a: "Yes. Our F-Gas registered engineers find and repair the leak first, then re-gas the system to the correct charge." },
    ],
  },
};
