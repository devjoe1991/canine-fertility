export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  details: string;
  price?: string;
  longDescription?: string;
  whoFor?: string[];
  process?: ServiceProcessStep[];
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
      "Progesterone testing is the most reliable way to pinpoint ovulation in the bitch. We process samples and return results the same day, so you can plan mating at the optimum point in her cycle. Cytology is offered alongside testing for added confidence. If you are outside London, Essex or Hertfordshire you can post in a sample and we will turn it around as soon as it arrives.",
    whoFor: [
      "Breeders planning a mating in the next two to three weeks",
      "Bitches with irregular or hard-to-read cycles",
      "First-time breeders who want to remove guesswork from timing",
      "Owners working with chilled or frozen semen that needs precise timing",
    ],
    process: [
      {
        title: "Send a WhatsApp",
        description:
          "Tell us roughly where the bitch is in her cycle. We book the first test and explain how often to come back.",
      },
      {
        title: "Quick blood draw",
        description:
          "The sample takes a couple of minutes. Most bitches sit happily through it.",
      },
      {
        title: "Same-day result",
        description:
          "We send the progesterone level back the same day with a recommendation on when to test again or when to mate.",
      },
    ],
    whatIncluded: [
      "Blood progesterone level measurement",
      "Cytology where appropriate",
      "Same-day results",
      "Guidance on breeding timing",
      "Postal sample service for remote clients",
    ],
    faqs: [
      {
        question: "How early in the cycle should I start testing?",
        answer:
          "Start around day 5 to 7 of bleeding. Earlier testing helps catch the rise in progesterone and gives a fuller picture of her cycle.",
      },
      {
        question: "How many tests will I need across one cycle?",
        answer:
          "Most bitches need two to four tests to identify the LH surge and ovulation accurately. We will recommend a schedule after the first reading.",
      },
      {
        question: "Can I post a sample in?",
        answer:
          "Yes. We accept progesterone samples by post and process them on arrival, then send the results back the same day.",
      },
      {
        question: "What does the price cover?",
        answer:
          "Each test is from £45. That covers the blood draw, the lab work, the result and a short discussion about what the number means for timing.",
      },
      {
        question: "Is cytology included?",
        answer:
          "Cytology is offered alongside progesterone testing where it adds value. Ask on the day if you want both done in one visit.",
      },
      {
        question: "Will the test guarantee a successful mating?",
        answer:
          "No test guarantees conception. Progesterone testing is the most reliable way to time the mating, which gives the best chance of success.",
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
    whoFor: [
      "Owners wanting confirmation that the mating took",
      "Breeders planning whelping logistics and stud fee timing",
      "First-time breeders who want to know how many puppies to prepare for",
      "Bitches with previous pregnancy complications worth checking on",
    ],
    process: [
      {
        title: "Book the scan day",
        description:
          "We aim for day 28 to 35 from mating. Send a WhatsApp with the mating date and we will set a time.",
      },
      {
        title: "Scan on the day",
        description:
          "The bitch lies on her side or back. Most scans take ten to fifteen minutes and she stays relaxed.",
      },
      {
        title: "Results and next steps",
        description:
          "We share the estimated puppy count, comment on what we see, and discuss what to plan for ahead of whelping.",
      },
    ],
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
        question: "Will a scan tell me how many puppies?",
        answer:
          "We give an estimated puppy count from the scan. Counts can shift slightly as puppies move, so we describe it as a range.",
      },
      {
        question: "Is the scan safe for the bitch and puppies?",
        answer:
          "Yes. Ultrasound is non-invasive, painless and routinely used for canine pregnancy monitoring.",
      },
      {
        question: "Do I need to do anything to prepare the bitch?",
        answer:
          "Keep her on her usual routine. Feeding her a light meal beforehand can help her relax during the scan.",
      },
      {
        question: "What if the scan shows the bitch is not pregnant?",
        answer:
          "We discuss why this might be and what the next step looks like, whether that is retiming with progesterone testing or reviewing the stud.",
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
    whoFor: [
      "Stud owners about to take on a new mating",
      "Owners preparing a sample for chilling or freezing",
      "Studs that have produced poor results from recent matings",
      "Breeders running an annual fertility check on their working studs",
    ],
    process: [
      {
        title: "Send a WhatsApp",
        description:
          "Tell us about the stud and what the analysis is for. We book a time that suits the dog's routine.",
      },
      {
        title: "Sample collection",
        description:
          "Collection is done in a calm setting at the clinic. The dog is unhurried and the process is quick.",
      },
      {
        title: "Written report",
        description:
          "You receive a report covering concentration, motility and longevity, with our notes on what the numbers mean.",
      },
    ],
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
      {
        question: "What if the analysis shows poor results?",
        answer:
          "We talk through likely causes and what to try next. Often a follow-up test after a rest period gives a fuller picture.",
      },
      {
        question: "Can the sample be chilled or frozen afterwards?",
        answer:
          "Yes. If the analysis looks good and the plan is to ship the sample, we can chill it for onward transport.",
      },
      {
        question: "How long does the appointment take?",
        answer:
          "Plan for about thirty minutes. Collection itself is brief, the rest is settling time and discussion of the result.",
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
    whoFor: [
      "Breeders matching a bitch with a stud outside their region",
      "Stud owners offering chilled semen as part of their service",
      "International matings where the stud cannot travel",
      "Anyone needing to receive an incoming shipment for a planned mating",
    ],
    process: [
      {
        title: "Plan the timing",
        description:
          "We coordinate around the bitch's progesterone results so the sample arrives at the right point in her cycle.",
      },
      {
        title: "Collect and chill",
        description:
          "Sample is collected, evaluated and chilled to extend its viability for transit.",
      },
      {
        title: "Ship or hold",
        description:
          "We prepare the documentation for shipment, or hold an incoming sample ready for insemination.",
      },
    ],
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
      {
        question: "Do you accept incoming chilled semen?",
        answer:
          "Yes. We accept live chilled semen samples from anywhere in the world and prepare them for insemination on arrival.",
      },
      {
        question: "What does the price cover?",
        answer:
          "From £150 covers collection, evaluation, chilling and the prep needed to ship. Courier costs and documentation fees are separate.",
      },
      {
        question: "What if the sample arrives outside viable hours?",
        answer:
          "We work with the bitch's timing and the courier's schedule. If a window is tight we will plan around it before shipment leaves.",
      },
    ],
    relatedIds: ["sperm-analysis", "progesterone"],
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
    whoFor: [
      "Bitch owners booking a supervised mating",
      "First-time matings where calm handling makes the difference",
      "Breeders who need a suitable stud sourced through our network",
      "Stud owners who want a controlled environment for the session",
    ],
    process: [
      {
        title: "Confirm timing",
        description:
          "We line up the session around the bitch's progesterone results so she is in the right window.",
      },
      {
        title: "Supervised mating",
        description:
          "We handle the introduction, watch through the tie, and step in if either dog needs settling.",
      },
      {
        title: "Aftercare advice",
        description:
          "We talk you through what to look for over the next few days and when to book in for a pregnancy scan.",
      },
    ],
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
          "We will discuss next steps with you, including a follow-up session or moving to a different approach, depending on what suits the bitch's cycle.",
      },
      {
        question: "Can both dogs be brought to the same session?",
        answer:
          "Yes. Sessions usually take place with both dogs at the clinic so we can supervise the full mating in a calm space.",
      },
      {
        question: "How long does a session take?",
        answer:
          "Plan for about an hour. Some matings settle quickly, others need patience while the dogs adjust to each other.",
      },
      {
        question: "Is there a fee on top for using a stud from your network?",
        answer:
          "Yes. Stud fees are set by the owner of the stud and are separate from the handling fee. We will be clear about both before booking.",
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
    whoFor: [
      "First-time breeders who want experienced eyes through the birth",
      "Bitches with previous whelping complications",
      "Owners of breeds prone to difficult births",
      "Anyone who wants a calmer whelping with a hand to call on",
    ],
    process: [
      {
        title: "Book in ahead",
        description:
          "Send us the due date as soon as the pregnancy is confirmed. We pencil in the window and stay reachable.",
      },
      {
        title: "Support through labour",
        description:
          "We attend once labour starts, monitor the bitch and step in if a delivery needs help.",
      },
      {
        title: "Newborn checks and aftercare",
        description:
          "Each puppy is checked over in the first hour. We give clear aftercare advice for the bitch and the litter.",
      },
    ],
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
        question: "How quickly can you get to me?",
        answer:
          "It depends on the area and the time of day. WhatsApp us as soon as labour starts so we can plan the trip alongside the contractions.",
      },
      {
        question: "What if the bitch needs more than I can provide at home?",
        answer:
          "If we identify a complication that needs more than we can offer at home, we will help you arrange the right next step quickly.",
      },
      {
        question: "Will you stay through the whole birth?",
        answer:
          "Yes, where you have booked the full session we stay until the litter is settled and the bitch is comfortable.",
      },
      {
        question: "Do you help with first-time breeders?",
        answer:
          "Often. A lot of our whelping work is with first-time breeders who simply want someone experienced in the room.",
      },
      {
        question: "What does the price cover?",
        answer:
          "From £200 covers attendance and hands-on support through the birth. Travel and out-of-hours surcharges may apply for longer journeys or unsocial hours.",
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
    whoFor: [
      "Breeders with a litter approaching eight weeks",
      "Owners who need chipping done before puppies go to new homes",
      "Anyone who wants the registration paperwork sorted in one visit",
      "Single-puppy households needing a quick microchip appointment",
    ],
    process: [
      {
        title: "Book the litter in",
        description:
          "Send a WhatsApp with the litter size and age. We arrange a slot that fits before the puppies move on.",
      },
      {
        title: "Chip and register",
        description:
          "Each puppy is chipped and registered on the UK database the same day. The procedure takes seconds per pup.",
      },
      {
        title: "Documentation pack",
        description:
          "You leave with the paperwork your buyers need to take over the registration for each puppy.",
      },
    ],
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
      {
        question: "Can you do a whole litter in one visit?",
        answer:
          "Yes. We chip and register the full litter in one appointment and provide the paperwork for each puppy.",
      },
      {
        question: "What does the new owner need to do?",
        answer:
          "They use the paperwork we provide to transfer the chip into their name once the puppy moves home.",
      },
      {
        question: "What if I just have one puppy to chip?",
        answer:
          "That is fine. Single-puppy appointments are quick and we can usually fit one in within a few days.",
      },
    ],
    relatedIds: ["puppy-care", "whelping"],
  },
  {
    id: "puppy-care",
    title: "Puppy Care Guidance",
    description:
      "Hands-on guidance for hand-feeding, under-weight pups and common early-life problems.",
    details:
      "Practical advice on hand-feeding, nutrition and common problems during the first weeks of a puppy's life.",
    price: "From £50",
    longDescription:
      "The first weeks shape a puppy's health for life. We help with hand-feeding routines for orphaned or under-weight pups, nutrition planning, weight tracking and dealing with common early-life issues. Each consultation is tailored to the litter in front of us.",
    whoFor: [
      "Litters with an orphaned puppy needing hand-feeding",
      "Under-weight or slow-growing pups",
      "First-time breeders unsure about feeding routines",
      "Owners noticing changes in a puppy's behaviour or weight",
    ],
    process: [
      {
        title: "Tell us what you are seeing",
        description:
          "Send a WhatsApp with the puppy's age, weight and what is worrying you. We arrange a consultation around that.",
      },
      {
        title: "Tailored plan",
        description:
          "We build a feeding and care plan for the specific puppy or litter, with steps you can carry out at home.",
      },
      {
        title: "Follow-up support",
        description:
          "We stay reachable on WhatsApp through the early weeks for quick questions as things change.",
      },
    ],
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
      {
        question: "What does the price cover?",
        answer:
          "From £50 covers the consultation and a written-up plan you can refer back to. Follow-up messages are included where they are short.",
      },
      {
        question: "How soon can you see us?",
        answer:
          "Most puppy care consultations can be booked within a day or two. If the situation is urgent, send a WhatsApp and we will prioritise.",
      },
      {
        question: "Do you visit the litter in person?",
        answer:
          "Where the visit adds value, yes. Some consultations work best over WhatsApp video so we can see the puppies straight away.",
      },
    ],
    relatedIds: ["whelping", "microchipping"],
  },
];
