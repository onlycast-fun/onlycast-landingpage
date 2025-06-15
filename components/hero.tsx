import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { APP_LINKS } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="about"
      className="pt-16 pb-20"
      style={{
        background: "linear-gradient(120deg, #fffbeb 0%, #ffedd5 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <h1
            className="text-4xl md:text-6xl font-bold text-stone-800 mb-6"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Build SocialFi with OnlyCast
          </h1>
          <p className="text-xl md:text-2xl text-orange-800 mb-12 max-w-4xl mx-auto">
            An experiment in helping users monetize all digital assets by
            &#39;social token&#39;
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-orange-300 text-orange-700 hover:bg-orange-50 hover:border-orange-400"
              asChild
            >
              <Link
                href={APP_LINKS.documentation}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Documentation
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white"
              asChild
            >
              <Link
                href={APP_LINKS.webApp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch Web App
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white"
              asChild
            >
              <Link
                href={APP_LINKS.farcasterMiniApp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Farcaster Mini App
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
