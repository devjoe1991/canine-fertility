export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  details: string;
  price?: string;
  longDescription?: string;
  whatIncluded?: string[];
  faqs?: ServiceFAQ[];
  relatedIds?: string[];
  whatsappPrefill?: string;
}

export const services: ServiceData[] = [
  {
    id: "progesterone",
    title: "Ovulation Testing",
    description:
      "Same-day progesterone testing and cytology to pinpoint the optimum mating window. Postal samples accepted across the UK.",
    details:
      "Same-day blood progesterone analysis to pinpoint the optimum mating window. Postal samples accepted.",
    price: "From £45",
    longDescription:
      "Progesterone testing is the most reliable way to pinpoint ovulation in the bitch. We run blood samples in-house and return results the same day, so you can plan a natural mating or artificial insemination at the optimum point in her cycle. Cytology is offered alongside testing for added confidence. If you are outside London, Essex or Hertfordshire you can post in a sample and we will turn it around as soon as it arrives.",
    whatIncluded: [
      "Blood progesterone level measurement",
      "Cytology where appropriate",
      "Same-day results",
      "Guidance on breeding timing",
      "Postal sample service for remote clients",
    ],
    faqs: [
      {
        question: "How many tests do I need across one cycle?",
        answer:
          "Most bitches need two to four tests to identify the LH surge and ovulation accurately. We will recommend a schedule after the first reading.",
      },
      {
        question: "Can I post a sample in?",
        answer:
          "Yes. We accept progesterone test samples by post and process them on arrival, then send the results back the same day.",
      },
      {
        question: "How early in the cycle should I start testing?",
        answer:
          "Start around day 5 to 7 of bleeding. Earlier testing helps catch the rise in progesterone and gives a fuller picture of her cycle.",
      },
    ],
    relatedIds: ["ultrasound", "stud-handling"],
  },
  {
    id: "ultrasound",
    title: "Ultrasound Scanning",
    description:
      "Dog ultrasound scanning in London, Essex and Hertfordshire. Pregnancy confirmation and puppy counts between days 28 and 35.",
    details:
      "Ultrasound imaging for pregnancy confirmation, foetal counting and breeding health assessment between days 28 and 35 of pregnancy.",
    price: "From £60",
    longDescription:
      "Ultrasound scanning between days 28 and 35 of pregnancy lets us confirm a litter, estimate puppy numbers and check foetal heartbeats. Scans are quick, non-invasive and comfortable for the bitch. We share findings clearly so you know what to plan for ahead of whelping.",
    whatIncluded: [
      "Pregnancy confirmation",
      "Estimated puppy count",
      "Foetal heartbeat checks",
      "Health observations and recommendations",
    ],
    faqs: [
      {
        question: "When is the best time to scan?",
        answer:
          "Day 28 to 35 of pregnancy gives the most reliable count and a clear view of foetal development.",
      },
      {
        question: "Is the scan safe for the bitch and puppies?",
        answer:
          "Yes. Ultrasound is non-invasive, painless and routinely used for canine pregnancy monitoring.",
      },
    ],
    relatedIds: ["progesterone", "whelping"],
  },
  {
    id: "sperm-analysis",
    title: "Semen Analysis",
    description:
      "Full evaluation of sperm concentration, motility and longevity for stud dogs.",
    details:
      "Semen evaluation covering concentration, motility and longevity to support successful breeding decisions for stud dogs.",
    price: "From £75",
    longDescription:
      "A full semen evaluation tells you whether a stud is ready to breed and helps diagnose issues early. We assess concentration, motility and longevity, then provide a written report with recommendations. Useful before a planned mating, before chilling for shipment, or as a routine health check.",
    whatIncluded: [
      "Sperm concentration measurement",
      "Motility assessment",
      "Longevity check",
      "Written report with recommendations",
    ],
    faqs: [
      {
        question: "How often should a stud be tested?",
        answer:
          "We recommend testing before each new breeding cycle and once a year as a baseline health check.",
      },
      {
        question: "Do I need to bring my dog in person?",
        answer:
          "For most analyses, yes. We collect at the clinic so we can assess the sample fresh. Get in touch and we will arrange a time.",
      },
    ],
    relatedIds: ["chilled-semen", "stud-handling"],
  },
  {
    id: "chilled-semen",
    title: "Chilled Semen",
    description:
      "Collection, preparation and chilling for shipment. Incoming chilled semen samples accepted worldwide.",
    details:
      "Collection, preparation and chilling for shipment. We also accept incoming chilled semen samples from anywhere in the world.",
    price: "From £150",
    longDescription:
      "Chilled semen lets you breed across distance without travelling the stud. We collect, evaluate and chill the sample using established protocols, then prepare it for shipment with documentation. Incoming samples from breeders abroad are accepted and stored ready for insemination.",
    whatIncluded: [
      "Semen collection",
      "Evaluation and chilling",
      "Shipment preparation and documentation",
      "Acceptance of incoming international samples",
    ],
    faqs: [
      {
        question: "How long does chilled semen stay viable?",
        answer:
          "Properly prepared chilled semen remains viable for several days, which is usually long enough for international shipment.",
      },
      {
        question: "Can you ship internationally?",
        answer:
          "Yes. We prepare shipments with the documentation needed for international transit and have clients across the UK and abroad.",
      },
    ],
    relatedIds: ["sperm-analysis", "progesterone"],
  },
  {
    id: "artificial-insemination",
    title: "Artificial Insemination",
    description:
      "Artificial insemination for all breeds and sizes, using fresh, chilled or frozen semen, timed to the bitch's progesterone results.",
    details:
      "Artificial insemination for all breeds and sizes, with timing driven by progesterone results. Compatible with fresh, chilled and frozen samples.",
    price: "From £180",
    longDescription:
      "Artificial insemination opens up matches that would not be possible otherwise, whether the stud is at a distance, the bitch will not stand for a natural mating, or you are working with frozen semen. We carry out vaginal insemination for the majority of cases and time the appointment from progesterone testing so the sample arrives at the right point in the cycle.",
    whatIncluded: [
      "Vaginal insemination",
      "Compatible with fresh, chilled or frozen semen",
      "Timing planned from progesterone results",
      "Repeat insemination across the breeding window where appropriate",
    ],
    faqs: [
      {
        question: "Which type of semen can you work with?",
        answer:
          "Fresh, chilled or frozen. For frozen samples we will coordinate with the storage facility on shipping and timing.",
      },
      {
        question: "How is the appointment timed?",
        answer:
          "We use progesterone results to identify the optimum window and book the insemination from there, usually one to three days after the LH surge.",
      },
    ],
    relatedIds: ["progesterone", "chilled-semen"],
  },
  {
    id: "stud-handling",
    title: "Stud Dog Services",
    description:
      "Hands-on stud dog handling with safe, controlled mating sessions. Stud dogs available on request across the UK.",
    details:
      "Hands-on stud dog handling with safe, controlled mating sessions. We have a client base across the UK and can introduce stud dogs on request.",
    price: "From £120",
    longDescription:
      "We oversee the entire mating session, from introduction through tie, with monitoring and calm handling for both dogs. For breeders without a stud we have a network across the UK and can arrange suitable matches on request.",
    whatIncluded: [
      "Supervised mating session",
      "Calm, controlled handling",
      "Health and welfare checks during mating",
      "Stud dog introductions on request",
    ],
    faqs: [
      {
        question: "Do you have stud dogs available?",
        answer:
          "Yes. We have a network of stud dogs across the UK and can match you with a suitable dog on request.",
      },
      {
        question: "What happens if the mating is unsuccessful?",
        answer:
          "We will discuss next steps with you, including a follow-up session or moving to assisted insemination, depending on what suits the bitch's cycle.",
      },
    ],
    relatedIds: ["sperm-analysis", "progesterone"],
  },
  {
    id: "whelping",
    title: "Whelping Assistance",
    description:
      "Hands-on support during natural births to address complications and protect the safety of mother and puppies.",
    details:
      "Hands-on support during natural births. We monitor the bitch and puppies and step in if complications arise.",
    price: "From £200",
    longDescription:
      "Whelping can be straightforward, or it can throw a sudden complication. Our team supports the bitch through labour, watches each puppy through the first hour and intervenes if something is not progressing as it should. We can attend planned whelpings and respond to last-minute calls where possible.",
    whatIncluded: [
      "Monitoring through labour",
      "Support with delivery and complications",
      "Newborn puppy checks",
      "Aftercare advice for the bitch",
    ],
    faqs: [
      {
        question: "Can you attend an emergency at short notice?",
        answer:
          "We accept late and last-minute emergency appointments where availability allows. Please call as soon as you suspect a problem.",
      },
      {
        question: "What if a caesarean is needed?",
        answer:
          "If we identify a complication that needs surgical intervention, we refer to a local veterinary surgery for the procedure and continue to support you through aftercare.",
      },
    ],
    relatedIds: ["ultrasound", "puppy-care"],
  },
  {
    id: "microchipping",
    title: "Puppy Microchipping",
    description:
      "Microchipping for puppies before they go to their new home, with full UK registration and documentation.",
    details:
      "Puppy microchipping with registration on the UK database and documentation for new owners.",
    price: "From £15",
    longDescription:
      "All puppies in the UK must be microchipped before they go to their new home. We carry out the procedure quickly and gently, then register the chip and provide you with the paperwork your buyers will need.",
    whatIncluded: [
      "Microchip implantation",
      "UK database registration",
      "Documentation pack for new owners",
    ],
    faqs: [
      {
        question: "At what age should puppies be microchipped?",
        answer:
          "Puppies must be microchipped before they leave for their new home, typically from around eight weeks of age.",
      },
      {
        question: "Is it painful for the puppy?",
        answer:
          "The implant feels like a quick pinch and most puppies barely react. The whole process takes a couple of seconds.",
      },
    ],
    relatedIds: ["puppy-care", "whelping"],
  },
  {
    id: "puppy-care",
    title: "Puppy Care Guidance",
    description:
      "Hands-on guidance for hand-feeding, under-weight pups and common early-life problems like fading puppy syndrome.",
    details:
      "Practical advice on hand-feeding, nutrition and common problems during the first weeks of a puppy's life.",
    price: "From £50",
    longDescription:
      "The first weeks shape a puppy's health for life. We help with hand-feeding routines for orphaned or under-weight pups, nutrition planning, weight tracking and dealing with common issues like fading puppy syndrome. Each consultation is tailored to the litter in front of us.",
    whatIncluded: [
      "Hand-feeding plans for under-weight or orphaned puppies",
      "Nutrition guidance",
      "Weight tracking advice",
      "Help with common early-life problems",
    ],
    faqs: [
      {
        question: "Do you offer follow-up support?",
        answer:
          "Yes. After the initial consultation we stay in touch by phone or WhatsApp through the early weeks.",
      },
      {
        question: "Can you help with an entire litter at once?",
        answer:
          "Yes. Consultations cover the litter as a group with individual plans for any puppy that needs extra attention.",
      },
    ],
    relatedIds: ["whelping", "microchipping"],
  },
];
