export interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string;
  price?: string;
}

export const services: ServiceData[] = [
  {
    id: "progesterone",
    title: "Ovulation Testing",
    description: "Accurate ovulation timing through progesterone level monitoring and cytology. We accept samples and will produce instant results.",
    icon: "🔬",
    details: "Our ovulation testing service uses advanced laboratory analysis to measure hormone levels in your female dog. This critical test helps determine the exact timing for breeding, ensuring the highest chance of successful conception. We provide instant results and expert interpretation to guide your breeding decisions. For your convenience, we accept progesterone test samples by mail, making it easy to get accurate results without leaving home.",
    price: "From £45",
  },
  {
    id: "ultrasound",
    title: "Ultrasound Scanning",
    description: "Pregnancy confirmation and estimated puppy count between days 28-35.",
    icon: "📡",
    details: "Professional ultrasound scanning services for pregnancy confirmation and monitoring. Recommended between days 28 to 35 of pregnancy for estimated puppy counting and health assessment. Our state-of-the-art equipment provides clear imaging to monitor fetal development and detect any potential complications early.",
    price: "From £60",
  },
  {
    id: "sperm-analysis",
    title: "Semen Analysis",
    description: "Comprehensive evaluation of sperm concentration, motility, and longevity for stud dogs.",
    icon: "🔍",
    details: "Detailed semen analysis evaluating sperm concentration, motility, and longevity. Essential for assessing stud dog fertility and ensuring optimal breeding outcomes. Our analysis includes comprehensive reporting with recommendations for improving breeding success rates.",
    price: "From £75",
  },
  {
    id: "stud-handling",
    title: "Stud Dog Services",
    description: "Expert assistance with mating procedures. Stud dogs available on request across the UK.",
    icon: "🐕",
    details: "Professional stud dog handling services providing expert assistance with mating procedures. Our experienced team ensures safe, controlled breeding sessions with monitoring and support throughout the process. We have a large client base across the UK with stud dogs available on request. We handle all aspects of the mating procedure with care and professionalism.",
    price: "From £120",
  },
  {
    id: "microchipping",
    title: "Puppy Microchipping",
    description: "Mandatory microchipping services for puppies with full registration and documentation.",
    icon: "💳",
    details: "Mandatory microchipping services for puppies. We provide complete microchipping with full registration and documentation to ensure compliance with UK regulations. Quick, painless procedure performed by qualified professionals.",
    price: "From £15",
  },
  {
    id: "chilled-semen",
    title: "Chilled Semen",
    description: "Collection, preparation and chilling services. Live chilled semen samples accepted worldwide",
    icon: "🧊",
    details: "Professional chilled semen collection and preparation for worldwide shipping. We handle the complete process from collection to packaging, ensuring optimal viability for storage or shipping. Our preparation techniques maintain sperm quality for extended periods. We accept live chilled semen deliveries from anywhere in the world, making international breeding arrangements seamless and reliable.",
    price: "From £150",
  },
  {
    id: "whelping",
    title: "Whelping Assistance",
    description: "Expert support during natural births to address complications and ensure the safety of mother and puppies.",
    icon: "👶",
    details: "Expert whelping assistance providing support during natural births. Our experienced team is available to help address complications and ensure the safety of both mother and puppies. We monitor the entire birthing process and provide immediate intervention when needed.",
    price: "From £200",
  },
  {
    id: "puppy-care",
    title: "Puppy Care Guidance",
    description: "Professional guidance on hand-feeding and addressing common issues in early puppy development.",
    icon: "🍼",
    details: "Comprehensive puppy care guidance covering hand-feeding techniques, nutrition, and addressing common developmental issues. Our expert advice helps ensure healthy growth and development during the critical early weeks. We provide personalized care plans tailored to your puppy's specific needs.",
    price: "Consultation from £50",
  },
];

