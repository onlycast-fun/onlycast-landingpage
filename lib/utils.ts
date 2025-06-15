import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const dexIcons = {
  gecko:
    "https://s.geckoterminal.com/_next/static/media/logo_symbol.d6e8a303.svg",
  dexscreener: "https://dexscreener.com/favicon.png",
  clanker:
    "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/d9c4e268-7c3d-4469-0552-4c5f29593100/original",
};
export function getBaseTokenDexscreenerUrl(tokenAddress: string): string {
  return `https://dexscreener.com/base/${tokenAddress}`;
}

export function getBaseTokenGeckoUrl(tokenAddress: string): string {
  return `https://www.geckoterminal.com/base/pools/${tokenAddress}`;
}

export function getBaseTokenClankerUrl(tokenAddress: string): string {
  return `https://www.clanker.world/clanker/${tokenAddress}`;
}
