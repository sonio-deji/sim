"use client";
import ConnectWalletButtonWrapper from "@/components/connectWalletWrapper";
import TokenView from "@/components/tokenView";
import { Token, tokenResp } from "@/lib/tokens";
import { ArrowLeft, Plus } from "lucide-react";
import React, { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import clsx from "clsx";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
  const [view, setView] = React.useState(0);
  // const swapTokens = () => {
  //   setToken1(token2);
  //   setToken2(token1);
  // };

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
  const [activeTab, setActiveTab] = React.useState("v1");
  return (
    <div className="w-full flex flex-col items-center mt-[5%] justify-center ">
      <div className="bg-[#1a1d20] rounded-[20px] w-[500px]">
        {view === 0 && (
          <>
            <Tabs defaultValue="all" className="">
              <div className="flex pt-4 items-center justify-between px-4 mb-3">
                <TabsContent value="all" className="m-0">
                  <span className="text-white font-semibold">
                    Your Liquidity
                  </span>
                </TabsContent>
                <TabsContent value="v1" className="m-0">
                  <span className="text-white font-semibold">
                    Your Liquidity
                  </span>
                </TabsContent>
                <TabsContent value="v2" className="m-0">
                  <span className="text-white font-semibold">
                    Your Liquidity
                  </span>
                </TabsContent>
                <TabsContent value="stable" className="m-0">
                  <span className="text-white font-semibold">Stable pools</span>
                </TabsContent>
                <TabsList className="flex bg-[#121416]">
                  <TabsTrigger
                    className="data-[state=inactive]:!text-[#ccc] px-4"
                    value="all"
                  >
                    All
                  </TabsTrigger>
                  <TabsTrigger
                    className="data-[state=inactive]:!text-[#ccc] px-4"
                    value="v1"
                  >
                    V1
                  </TabsTrigger>
                  <TabsTrigger
                    className="data-[state=inactive]:!text-[#ccc] px-4"
                    value="v2"
                  >
                    V2
                  </TabsTrigger>
                  <TabsTrigger
                    className="data-[state=inactive]:!text-[#ccc] px-4"
                    value="stable"
                  >
                    Stable
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="all">
                <Default setView={setView} />
              </TabsContent>
              <TabsContent value="v1">
                <Default setView={setView} />
              </TabsContent>
              <TabsContent value="v2">
                <Default setView={setView} />
              </TabsContent>
              <TabsContent value="stable">
                <Default setView={setView} isStable={true} />
              </TabsContent>
            </Tabs>
          </>
        )}
        {view === 1 && (
          <Tabs
            value={activeTab}
            onChange={(e) => {
              console.log(e);
            }}
            defaultValue="v1"
            className=""
          >
            <div className="flex items-center justify-between px-4 pt-4 mb-3">
              <div className="flex items-center  gap-1.5">
                <button>
                  <ArrowLeft
                    onClick={() => setView(0)}
                    size={20}
                    color="#00b33c"
                  />
                </button>

                <span className="text-white font-semibold">Add Liquidity</span>
                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger className="!m-0 !p-0 py-0 px-0 h-fit">
                      <svg
                        viewBox="0 0 24 24"
                        color="#ccc"
                        // stroke="#ccc"
                        fill="#ccc"
                        width="18px"
                        xmlns="http://www.w3.org/2000/svg"
                        className="sc-bcPKhP Eouil"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
                      </svg>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-[300px] p-3 " side="right">
                      {activeTab === "v1" ? (
                        <p className="text-base">
                          Adding V1 liquidity helps burn PLSX. 100% of the swap
                          fees go the buy and burn contract which pays a 0.1%
                          bounty for those that run it.
                        </p>
                      ) : (
                        <p className="text-base">
                          By adding V2 liquidity you&apos;ll earn 0.22% of all
                          trades on this pair proportional to your share of the
                          pool. Fees are added to the pool, accrue in real time
                          and can be claimed by withdrawing your liquidity.
                        </p>
                      )}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              {/* <Tabs defaultValue="v1" className=""> */}
              <div className="flex items-center justify-between px-4">
                <TabsList className="flex bg-[#121416]">
                  <TabsTrigger
                    onClick={() => setActiveTab("v1")}
                    className="data-[state=inactive]:!text-[#ccc] px-4"
                    value="v1"
                  >
                    V1
                  </TabsTrigger>
                  <TabsTrigger
                    className="data-[state=inactive]:!text-[#ccc] px-4"
                    value="v2"
                    onClick={() => setActiveTab("v2")}
                  >
                    V2
                  </TabsTrigger>
                </TabsList>
              </div>
              {/* </Tabs> */}
            </div>
            {token1 && (
              <div className=" px-6 pt-6 relative">
                <div className="mb-4">
                  <TokenView
                    subText="You add"
                    token={token1!}
                    setToken={setToken1}
                  />
                </div>

                <button
                  // onClick={swapTokens}
                  className=" mx-auto block w-fit"
                >
                  <Plus className="text-white size-[14px]" />
                </button>
                <div className="mt-4 mb-8">
                  <TokenView
                    subText="You add"
                    token={token2!}
                    setToken={setToken2}
                  />
                </div>

                <div className="bg-[#101417] rounded-xl p-3">
                  <div className="flex items-center text-[#ccc] justify-between">
                    <span>Share of Pool</span>
                    <span>0%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#8b8b92] text-sm">
                      1 {token1.token.symbol} =
                    </span>
                    <span className="text-[#8b8b92] text-sm">
                      1.16633 {token2?.token.symbol}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#8b8b92] text-sm">
                      1 {token2?.token.symbol} =
                    </span>
                    <span className="text-[#8b8b92] text-sm">
                      1.16633 {token1.token.symbol}
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div className="pb-6 px-6">
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
          </Tabs>
        )}
      </div>
      <div>
        {activeTab === "v1" ? (
          <div className="max-w-[400px] text-center mt-4 bg-[#1a1d20] rounded-[20px] p-6">
            <Image
              width={30}
              height={30}
              className="inline-block"
              alt="PLSX logo"
              src="https://tokens.app.pulsex.com/images/tokens/0x95B303987A60C71504D99Aa1b13B4DA07b0790ab.png"
            />
            <span className="text-sm text-[#f2f2f2]">
              Adding V1 liquidity helps burn PLSX. 100% of the swap fees go the
              buy and burn contract which pays a 0.1% bounty for those that run
              it.
            </span>
          </div>
        ) : (
          <div className="max-w-[400px] text-center mt-4 bg-[#1a1d20] rounded-[20px] p-6">
            <Image
              width={30}
              height={30}
              className="inline-block"
              alt="PLSX logo"
              src="https://tokens.app.pulsex.com/images/tokens/0x95B303987A60C71504D99Aa1b13B4DA07b0790ab.png"
            />
            <span className="text-sm text-[#f2f2f2]">
              By adding V2 liquidity you&apos;ll earn 0.22% of all trades on
              this pair proportional to your share of the pool. Fees are added
              to the pool, accrue in real time and can be claimed by withdrawing
              your liquidity.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Trade;

const Default = ({
  isStable,
  setView,
}: {
  isStable?: boolean;
  setView: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <>
      <div
        className={clsx("p-6 bg-[#101417] flex justify-center mt-6", {
          "rounded-b-[20px]": isStable,
        })}
      >
        <span className="text-center text-[#ccc]">
          Connect to a wallet to view your liquidity.
        </span>
      </div>
      {!isStable && (
        <div className="px-6 pb-6">
          <button
            onClick={() => setView(1)}
            style={{
              background:
                "linear-gradient(45deg, rgb(0, 102, 34), rgb(0, 179, 60))",
            }}
            className="  text-white font-bold rounded-lg px-4 py-2 w-full mt-6 hover:bg-green-600 transition duration-200"
          >
            Add Liquidity
          </button>
        </div>
      )}
    </>
  );
};
