"use client"

import { ChevronUp } from "lucide-react"
import Link from "next/link"
import { TwitterIcon, TelegramIcon, FarcasterIcon } from "./icons"
import { SOCIAL_LINKS } from "@/lib/constants"

interface FooterProps {
  scrollToTop: () => void
}

export default function Footer({ scrollToTop }: FooterProps) {
  return (
    <footer className="bg-orange-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-orange-800">© 2025 OnlyCast. All rights reserved.</p>
          </div>

          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <Link
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-700 transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <TwitterIcon className="w-6 h-6" />
            </Link>
            <Link
              href={SOCIAL_LINKS.farcaster}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-700 transition-colors"
            >
              <span className="sr-only">Farcaster</span>
              <FarcasterIcon className="w-6 h-6" />
            </Link>
            <Link
              href={SOCIAL_LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-700 transition-colors"
            >
              <span className="sr-only">Telegram</span>
              <TelegramIcon className="w-6 h-6" />
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="text-orange-800 hover:text-orange-600 transition-colors flex items-center"
          >
            <ChevronUp className="w-4 h-4 mr-1" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}
