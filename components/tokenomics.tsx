"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Check, Calendar } from "lucide-react";
import { TOKEN_INFO } from "@/lib/constants";

export default function Tokenomics() {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(TOKEN_INFO.contractAddress);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    } catch (err) {
      console.error("Failed to copy address:", err);
    }
  };

  return (
    <section id="tokenomics" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-stone-800 mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Tokenomics
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contract Address & Unlock Schedule */}
          <Card className="bg-white border-orange-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-stone-800">
                Contract & Unlock
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-stone-600 mb-2">
                  Contract Address
                </h4>
                <div className="flex items-center justify-between bg-orange-50 p-3 rounded-lg">
                  <span className="text-sm text-stone-600 font-mono truncate pr-2 flex-1">
                    {TOKEN_INFO.contractAddress}
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={copyAddress}
                    className="text-orange-600 hover:text-orange-700 hover:bg-orange-100 flex-shrink-0"
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
                  Unlock Schedule
                </h4>
                <div className="flex items-center justify-center bg-orange-50 p-4 rounded-lg">
                  <div className="text-center">
                    <Calendar className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <p className="text-lg font-semibold text-stone-800">
                      {TOKEN_INFO.unlockDate}
                    </p>
                    <p className="text-xs text-stone-600">Token Unlock Date</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Token Distribution */}
          <Card className="bg-white border-orange-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-stone-800">
                Token Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
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

                  <div className="ml-4 space-y-3 border-l-2 border-orange-200 pl-4">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-stone-600">
                          Development
                        </span>
                        <span className="text-sm font-semibold text-stone-800">
                          20%
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 mt-1">
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
                      <p className="text-xs text-stone-500 mt-1">
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
