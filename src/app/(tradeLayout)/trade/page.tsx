"use client";
import ConnectWalletButtonWrapper from "@/components/connectWalletWrapper";
import TokenView from "@/components/tokenView";
import { Token, tokenResp } from "@/lib/tokens";
import { ArrowDown, RotateCw } from "lucide-react";
import React, { useEffect } from "react";

const Trade = () => {
  const [token1, setToken1] = React.useState<{
    token: Token;
    amount: number;
    withCopy?: boolean;
  } | null>(null);
  const [token2, setToken2] = React.useState<{
    token: Token;
    amount: number;
    withCopy?: boolean;
  } | null>(null);

  const swapTokens = () => {
    setToken1(token2);
    setToken2(token1);
  };

  useEffect(() => {
    const tokens = tokenResp.tokens;
    setToken1({
      token: tokens[12],
      amount: 0,
    });
    setToken2({
      token: tokens[27],
      amount: 0,
      withCopy: true,
    });
  }, []);
  return (
    <div className="w-full flex items-center mt-[5%] justify-center ">
      <div className="bg-[#1a1d20] p-3 rounded-[20px] w-[500px]">
        <div className="flex items-center justify-between px-4 mb-3">
          <span className="text-white font-semibold">Swap</span>
          <RotateCw className="text-white/60" size={20} />
        </div>
        {token1 && (
          <div className="space-y-2 relative">
            <TokenView token={token1!} setToken={setToken1} />
            <button
              onClick={swapTokens}
              className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#24282d] p-1.5 rounded-full hover:rotate-180 cursor-pointer ease-in-out transition-all duration-300"
            >
              <ArrowDown className="text-white size-[18px]" />
            </button>
            <TokenView token={token2!} setToken={setToken2} />
          </div>
        )}
        <ConnectWalletButtonWrapper>
          <button
            style={{
              background:
                "linear-gradient(45deg, rgb(0, 102, 34), rgb(0, 179, 60))",
            }}
            className="  text-white font-bold rounded-lg px-4 py-2 w-full mt-4 hover:bg-green-600 transition duration-200"
          >
            Connect Wallet
          </button>
        </ConnectWalletButtonWrapper>
      </div>
    </div>
  );
};

export default Trade;
