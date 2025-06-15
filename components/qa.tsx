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
      answers: [
        "OnlyCast is an application that helps users monetize their digital assets through social currencies, including: content, social connections, events, and service skills, etc. Our current social connections are based on the farcaster protocol.",
      ],
    },
    {
      question: "How does OnlyCast work?",
      answers: [
        `OnlyCast leverages farcaster's social connections and issues its own social tokens for each user by virtue of the clanker coin-issuing protocol. Users can create content, exchange social influence (followers, likes, etc.), and provide service skills to appreciate their own currencies, thus generating organic and win-win benefits.`,
        `Content data created by creators is stored in Arweave, and other users need to hold a certain amount of creator tokens to view the creator's content. For other features, value needs to be exchanged between the creator and the user in the creator's currency.`,
      ],
    },
    {
      question: "What features does OnlyCast have?",
      answers: [
        "OnlyCast will eventually support the full range of social currency features, and is currently iterating on the creator content side of the feature development, you can follow Roadmap or communicate directly with the team for other features and specific release dates.",
      ],
    },
    {
      question: "How do users benefit from OnlyCast?",
      answers: [
        `We issue coins for users based on clanker, and the user's revenue model is completely based on clanker's protocol; `,
        `a. For each transaction of the user's token, the user gets 7% of the transaction's commission, clanker's protocol gets 2% of the transaction's commission, and OnlyCast gets 1/1000 of the transaction's commission.`,

        `b. When creating a token, you can choose to hold a position and lock a certain amount of your own currency, such as holding a position of 10% and locking the position for 30 days. At this time the position is 0 cost.`,

        `c. The price of any token fluctuates, you can buy a certain amount of your own tokens when the price is low. Creators buying their own code will also increase the trust of the token and give other holders more confidence in the token.`,
      ],
    },
    {
      question: "How do I withdraw my own FEE?",
      answers: [
        ` Token creators can claim their rewards through the admin page of their tokens on clanker.world, it is important to note that you need to use the wallet where you created the token to claim it, if you are using the Farcaster wallet, you need to use that wallet mnemonic on the clanker page is to restore the wallet with that mnemonic after Withdraw their own fee rewards.`,
      ],
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
              <AccordionTrigger className="text-left text-md max-sm:text-base font-semibold text-stone-800 hover:text-orange-600 cursor-pointer">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-stone-700">
                <ul className="list-disc pl-5 space-y-2">
                  {faq.answers.map((answer, answerIndex) => (
                    <li
                      key={answerIndex}
                      className="text-stone-700 leading-relaxed text-md max-sm:text-base"
                    >
                      {answer}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
