"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Check, Clock } from "lucide-react";
import { TOKEN_INFO } from "@/lib/constants";
import Link from "next/link";
import {
  dexIcons,
  getBaseTokenClankerUrl,
  getBaseTokenDexscreenerUrl,
  getBaseTokenGeckoUrl,
} from "@/lib/utils";

export default function Tokenomics() {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const unlockDate = new Date(TOKEN_INFO.unlockDate).getTime();
      const now = new Date().getTime();
      const difference = unlockDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(TOKEN_INFO.contractAddress);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    } catch (err) {
      console.error("Failed to copy address:", err);
    }
  };

  const isUnlocked =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <section id="tokenomics" className="py-12 md:py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-800 mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Tokenomics
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Contract Address & Unlock Schedule */}
          <Card className="bg-white border-orange-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-stone-800">
                Contract & Unlock
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6">
              <div>
                <h4 className="text-sm font-medium text-stone-600 mb-2 flex items-center justify-between">
                  <span>Contract Address</span>
                </h4>
                <div className="flex items-center justify-between bg-orange-50 p-3 rounded-lg min-h-[44px]">
                  <span className="text-xs sm:text-sm text-stone-600 font-mono truncate pr-2 flex-1 leading-relaxed">
                    {TOKEN_INFO.contractAddress}
                  </span>
                  <div className="flex items-center gap-4 mr-1">
                    <Link
                      href={getBaseTokenClankerUrl(TOKEN_INFO.contractAddress)}
                      target="_blank"
                      className=" inline-block rounded-full p-1 border hover:bg-orange-100 transition-colors duration-200"
                    >
                      <img
                        src={dexIcons.clanker}
                        alt="clanker"
                        className="w-3 h-3 rounded-full"
                      />
                    </Link>

                    <Link
                      href={getBaseTokenGeckoUrl(TOKEN_INFO.contractAddress)}
                      target="_blank"
                      className=" inline-block rounded-full p-1 border hover:bg-orange-100 transition-colors duration-200"
                    >
                      <img
                        src={dexIcons.gecko}
                        alt="Gecko Terminal"
                        className="w-3 h-3 rounded-full"
                      />
                    </Link>
                    <Link
                      href={getBaseTokenDexscreenerUrl(
                        TOKEN_INFO.contractAddress
                      )}
                      target="_blank"
                      className=" inline-block rounded-full p-1 border hover:bg-orange-100 transition-colors duration-200"
                    >
                      <img
                        src={dexIcons.dexscreener}
                        alt="Dexscreener"
                        className="w-3 h-3 rounded-full"
                      />
                    </Link>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={copyAddress}
                    className="text-orange-600 hover:text-orange-700 hover:bg-orange-100 flex-shrink-0 min-w-[44px] h-[44px]"
                  >
                    {copiedAddress ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-stone-600 mb-2">
                  Unlock Countdown
                </h4>
                <div className="bg-orange-50 p-3 md:p-4 rounded-lg">
                  <div className="flex items-center justify-center mb-3">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-orange-500 mr-2" />
                    <p className="text-xs md:text-sm text-stone-600">
                      Time until unlock
                    </p>
                  </div>
                  {isUnlocked ? (
                    <div className="text-center">
                      <p className="text-base md:text-lg font-bold text-green-600">
                        🎉 Tokens Unlocked!
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                      <div className="bg-white rounded-lg p-2 md:p-3">
                        <div className="text-base md:text-lg font-bold text-orange-600">
                          {timeLeft.days}
                        </div>
                        <div className="text-xs text-stone-500">Days</div>
                      </div>
                      <div className="bg-white rounded-lg p-2 md:p-3">
                        <div className="text-base md:text-lg font-bold text-orange-600">
                          {timeLeft.hours}
                        </div>
                        <div className="text-xs text-stone-500">Hours</div>
                      </div>
                      <div className="bg-white rounded-lg p-2 md:p-3">
                        <div className="text-base md:text-lg font-bold text-orange-600">
                          {timeLeft.minutes}
                        </div>
                        <div className="text-xs text-stone-500">Minutes</div>
                      </div>
                      <div className="bg-white rounded-lg p-2 md:p-3">
                        <div className="text-base md:text-lg font-bold text-orange-600">
                          {timeLeft.seconds}
                        </div>
                        <div className="text-xs text-stone-500">Seconds</div>
                      </div>
                    </div>
                  )}
                  <div className="text-center mt-3">
                    <p className="text-xs text-stone-500">
                      Target: {TOKEN_INFO.unlockDate}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Token Distribution */}
          <Card className="bg-white border-orange-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-stone-800">
                Token Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1">
                    <span className="text-sm font-medium text-stone-800">
                      Team (30%)
                    </span>
                    <span className="text-xs text-stone-500">
                      Development + Airdrop
                    </span>
                  </div>
                  <div className="w-full bg-orange-100 rounded-full h-3 mb-3">
                    <div
                      className="bg-orange-500 h-3 rounded-full"
                      style={{ width: "30%" }}
                    ></div>
                  </div>

                  <div className="ml-2 md:ml-4 space-y-3 border-l-2 border-orange-200 pl-3 md:pl-4">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-stone-600">
                          Development
                        </span>
                        <span className="text-sm font-semibold text-stone-800">
                          20%
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                        For team building and product development
                      </p>
                      <div className="w-full bg-orange-100 rounded-full h-2 mt-2">
                        <div
                          className="bg-orange-400 h-2 rounded-full"
                          style={{ width: "67%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-stone-600">Airdrop</span>
                        <span className="text-sm font-semibold text-stone-800">
                          10%
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                        Multi-phase airdrops to reward creators and fans
                      </p>
                      <div className="w-full bg-orange-100 rounded-full h-2 mt-2">
                        <div
                          className="bg-orange-300 h-2 rounded-full"
                          style={{ width: "33%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
