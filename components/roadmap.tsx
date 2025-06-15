import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Flame, Star, Rocket } from "lucide-react"

export default function Roadmap() {
  const roadmapData = [
    {
      quarter: "Q2 2025",
      icon: <Flame className="w-6 h-6" />,
      bgColor: "bg-orange-50",
      items: [
        "Release MVP to optimize web site and farcaster-based applet creator functionality",
        "Support more creators to create token and publish content",
        "Support clanker v4",
      ],
    },
    {
      quarter: "Q3 2025",
      icon: <Star className="w-6 h-6" />,
      bgColor: "bg-orange-100",
      items: [
        "Content: multi-type support for creator content, rich text",
        "Activities: creator interaction, bounty tasks and other activity portals",
        "Reward: creator initiative based on fan rewards",
        "Services: creators provide private customization services",
        "$ONLYCAST functionality, VIP can be selected as pair of Pair coins",
      ],
    },
    {
      quarter: "Q4 2025",
      icon: <Rocket className="w-6 h-6" />,
      bgColor: "bg-orange-200",
      items: [
        "Social network: twitter",
        "Multi-chain: solana, bsc",
        "Specific social currency coin-issuing protocols on multiple chains",
      ],
    },
  ]

  return (
    <section id="roadmap" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Flame className="w-8 h-8 text-orange-500 mr-3" />
            <h2
              className="text-3xl md:text-4xl font-bold text-stone-800"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Roadmap
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {roadmapData.map((phase, index) => (
            <Card
              key={index}
              className={`${phase.bgColor} border-orange-200 hover:shadow-lg transition-shadow duration-300`}
            >
              <CardHeader>
                <div className="flex items-center mb-2">
                  <div className="text-orange-600 mr-3">{phase.icon}</div>
                  <CardTitle className="text-xl font-bold text-stone-800">{phase.quarter}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">•</span>
                      <span className="text-stone-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
