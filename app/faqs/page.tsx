import Hero from "@/components/sections/Hero";
import ServiceFAQ from "@/components/sections/ServiceFAQ";
import WhatsAppCTA from "@/components/cta/WhatsAppCTA";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers on canine fertility services in London, Essex and Hertfordshire: progesterone testing, ultrasound timing, chilled semen, stud handling, whelping and puppy care.",
  path: "/faqs",
});

interface FaqGroup {
  heading: string;
  items: { question: string; answer: string }[];
}

const FAQ_GROUPS: FaqGroup[] = [
  {
    heading: "Fertility testing",
    items: [
      {
        question: "How early in the cycle should I start progesterone testing?",
        answer:
          "Start around day 5 to 7 of bleeding. Earlier testing helps catch the rise in progesterone and gives a fuller picture of her cycle.",
      },
      {
        question: "How many progesterone tests will I need?",
        answer:
          "Most bitches need two to four tests across the cycle to identify the LH surge and ovulation accurately. We will recommend a schedule after the first reading.",
      },
      {
        question: "Can I post a progesterone sample in?",
        answer:
          "Yes. We accept progesterone samples by post and process them on arrival, then send the results back the same day.",
      },
    ],
  },
  {
    heading: "Ultrasound and pregnancy",
    items: [
      {
        question: "When is the best day to scan for pregnancy?",
        answer:
          "Days 28 to 35 from mating give the most reliable count and a clear view of foetal development.",
      },
      {
        question: "Will a scan tell me how many puppies?",
        answer:
          "We give an estimated puppy count from the scan. Counts can shift slightly as puppies move, so we describe it as a range.",
      },
    ],
  },
  {
    heading: "Stud and breeding services",
    items: [
      {
        question: "Do you have stud dogs available?",
        answer:
          "Yes. We have a network of stud dogs across the UK and can match you with a suitable dog on request.",
      },
      {
        question: "Can you ship chilled semen internationally?",
        answer:
          "Yes. We prepare shipments with the documentation needed for international transit and have clients across the UK and abroad.",
      },
      {
        question: "Do you accept incoming chilled semen?",
        answer:
          "Yes. We accept live chilled semen samples from anywhere in the world and prepare them for insemination on arrival.",
      },
    ],
  },
  {
    heading: "Whelping and puppy care",
    items: [
      {
        question: "Can you attend an emergency whelping at short notice?",
        answer:
          "We accept late and last-minute emergency appointments where availability allows. Please get in touch as soon as you suspect a problem.",
      },
      {
        question: "Do you help with hand-feeding orphaned or under-weight pups?",
        answer:
          "Yes. We build hand-feeding plans tailored to the litter and stay in touch by phone or WhatsApp through the early weeks.",
      },
    ],
  },
  {
    heading: "Microchipping and admin",
    items: [
      {
        question: "When should puppies be microchipped?",
        answer:
          "Before they leave for their new home, typically from around eight weeks of age. UK law requires the chip to be in place and registered.",
      },
      {
        question: "Is microchipping painful for the puppy?",
        answer:
          "The implant feels like a quick pinch and most puppies barely react. The whole process takes a couple of seconds.",
      },
    ],
  },
  {
    heading: "Booking and areas",
    items: [
      {
        question: "Which areas do you cover?",
        answer:
          "London, Essex and Hertfordshire are our visiting areas. For clients outside this region we accept postal samples and shipped chilled semen.",
      },
      {
        question: "How quickly do you reply on WhatsApp?",
        answer:
          "Same day during opening hours. Out-of-hours messages are answered first thing the next morning.",
      },
    ],
  },
];

const flatFaqs = FAQ_GROUPS.flatMap((g) => g.items);

export default function FaqsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQs", path: "/faqs" },
          ]),
          faqSchema(flatFaqs),
        ]}
      />
      <Hero
        title="Frequently Asked Questions"
        subtitle="Quick answers to the questions we hear most often."
      />

      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-10 sm:space-y-12">
          {FAQ_GROUPS.map((group) => (
            <div key={group.heading}>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] mb-4 sm:mb-5">
                {group.heading}
              </h2>
              <ServiceFAQ faqs={group.items} defaultOpenIndex={null} />
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 sm:py-16 px-4 bg-[#002147] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Can&apos;t see your question?
          </h2>
          <p className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-base">
            Send it on WhatsApp and we will come back the same day.
          </p>
          <div className="flex justify-center">
            <WhatsAppCTA variant="primary" size="lg" />
          </div>
        </div>
      </section>
    </main>
  );
}
