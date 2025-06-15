import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function QA() {
  const faqData = [
    {
      question: "What is OnlyCast?",
      answer:
        "OnlyCast is an application that helps users monetize their digital assets through social tokens. It's an experiment in creating a SocialFi platform where creators can build meaningful connections with their audience while generating revenue from their content and community.",
    },
    {
      question: "How does OnlyCast work?",
      answer:
        "OnlyCast leverages Farcaster's social connections to create a seamless experience for creators and fans. Creators can mint their own social tokens, publish exclusive content, and offer personalized services to their token holders. The platform integrates with various blockchain protocols to ensure secure and transparent transactions.",
    },
    {
      question: "What makes OnlyCast different?",
      answer:
        "OnlyCast focuses on genuine creator-fan relationships rather than speculative trading. Our platform emphasizes content quality, community building, and sustainable monetization models that benefit both creators and their supporters.",
    },
    {
      question: "How can I get started?",
      answer:
        "You can start by visiting our app at onlycast.fun and connecting your wallet. From there, you can explore existing creators, purchase social tokens, or begin your journey as a creator by minting your own token.",
    },
    {
      question: "What blockchain networks do you support?",
      answer:
        "Currently, we support Ethereum mainnet with plans to expand to Solana and BSC in Q4 2024. This multi-chain approach will provide users with more options and lower transaction costs.",
    },
  ];

  return (
    <section id="qa" className="py-20 bg-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-stone-800 mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Q&A
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-orange-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-stone-800 hover:text-orange-600 cursor-pointer">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-stone-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
