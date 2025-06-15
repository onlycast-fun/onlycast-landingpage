import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ECOSYSTEM_PARTNERS } from "@/lib/constants";

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-stone-800 mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Ecosystem
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            We build with these dependable ecological infrastructures to polish
            an organic win-win product for multiple parties
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {ECOSYSTEM_PARTNERS.map((partner, index) => (
            <Link
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-white border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center justify-center">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    className="h-12 w-auto mx-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300 mb-3"
                    crossOrigin="anonymous"
                  />
                  <p className="text-sm font-medium text-stone-700 group-hover:text-orange-600 transition-colors duration-300 text-center">
                    {partner.name}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
