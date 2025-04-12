"use client";
import Image from "next/image";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import ListView from "./components/listView";
import { ArrowUpRightFromSquare, ChevronDown } from "lucide-react";
import ConnectWalletButtonWrapper from "@/components/connectWalletWrapper";

const Page = () => {
  const [viewType, setViewType] = React.useState<"table" | "grid">("table");
  const [farmTypes, setFarmTypes] = React.useState<string[]>([]);
  return (
    <Tabs defaultValue="Live">
      <div className="text-white  pb-32 pt-10">
        <div>
          <h1 className="font-semibold text-[40px] mb-3">Farms</h1>
          <h4 className="font-semibold text-[20px]">
            Stake LP tokens and earn INC{" "}
          </h4>
          <div className="flex items-center mt-3">
            <Image
              src={
                "https://tokens.app.pulsex.com/images/tokens/0x2fa878Ab3F87CC1C9737Fc071108F904c0B0C95d.png"
              }
              alt="logo"
              width={24}
              height={24}
              className="inline-block mr-1"
            />
            <span className="text-[#ccc] text-sm font-semibold">
              Inflation: 0.03 INC/sec
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex py-4 items-center gap-4">
              <div className="items-center flex gap-2">
                <button onClick={() => setViewType("grid")}>
                  <svg
                    viewBox="0 0 24 24"
                    color={viewType === "grid" ? "#00b33c" : "#4d4d4d"}
                    fill={viewType === "grid" ? "#00b33c" : "#4d4d4d"}
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z"></path>
                  </svg>
                </button>
                <button onClick={() => setViewType("table")}>
                  <svg
                    viewBox="0 0 24 24"
                    color={viewType == "table" ? "#00b33c" : "#4d4d4d"}
                    fill={viewType == "table" ? "#00b33c" : "#4d4d4d"}
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z"></path>
                  </svg>
                </button>
              </div>

              <div>
                <TabsList className="flex bg-[#121416]">
                  <TabsTrigger
                    className="data-[state=inactive]:!text-[#ccc] px-4 text-base font-semibold"
                    value="Live"
                  >
                    Live
                  </TabsTrigger>
                  <TabsTrigger
                    className="data-[state=inactive]:!text-[#ccc] px-4 text-base font-semibold"
                    value="Finished"
                  >
                    Finished
                  </TabsTrigger>
                </TabsList>
              </div>

              <Popover>
                <PopoverTrigger className="bg-[#121416] px-4 text-[#ccc] py-1.5 rounded-lg">
                  Farm Types
                  {farmTypes.length > 0 ? ` (${farmTypes.length})` : ""}
                </PopoverTrigger>
                <PopoverContent
                  sideOffset={8}
                  className="bg-[#1a1d20] w-[350px] rounded-3xl font-semibold text-[#f2f2f2] border-none p-0"
                >
                  <div className="p-4">
                    <span className=" text-xl">Farm Types</span>
                  </div>
                  <div className="p-4 pb-8 m-2 space-y-5">
                    <div className=" flex items-center justify-between">
                      <span>V1 Farms</span>
                      <Switch
                        checked={farmTypes.includes("V1")}
                        onCheckedChange={(checked) =>
                          setFarmTypes(
                            checked
                              ? [...farmTypes, "V1"]
                              : farmTypes.filter((type) => type !== "V1")
                          )
                        }
                      />
                    </div>
                    <div className=" flex items-center justify-between">
                      <span>V2 Farms</span>
                      <Switch
                        checked={farmTypes.includes("V2")}
                        onCheckedChange={(checked) =>
                          setFarmTypes(
                            checked
                              ? [...farmTypes, "V2"]
                              : farmTypes.filter((type) => type !== "V2")
                          )
                        }
                      />
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <div className=" flex items-center gap-2">
                <Switch />
                <span>Stacked only</span>
              </div>
            </div>
            <div className="w-fit">
              <Input className="" placeholder="Search Farms" />
            </div>
          </div>
        </div>
        {viewType === "table" ? <ListView /> : <GridView />}
      </div>
    </Tabs>
  );
};

export default Page;

const GridView = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-y-8">
      {data.map((item, index) => (
        <div key={index} className="px-4 w-1/3 text-[#f2f2f2]">
          <div className="w-full rounded-[20px] overflow-hidden bg-[#1a1d20]">
            <div className="p-6 border-b-2 border-[#323234]">
              <div className="flex justify-between mb-3">
                <div></div>
                <div>
                  <span className="font-semibold text-xl mb-2.5">
                    {item.pair}
                  </span>
                  <div className="border-2 w-fit border-[#ccc] px-1 ml-auto rounded-lg">
                    <span className="font-semibold text-xs text-[#ccc]">
                      {item.version}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>APR:</span>
                  <span className="font-semibold text-base flex items-center gap-1">
                    <span>{item.APR} </span>
                    <svg
                      viewBox="0 0 24 24"
                      width="18px"
                      fill="#ccc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"></path>
                      <path d="M11.25 7.72H6.25V9.22H11.25V7.72Z"></path>
                      <path d="M18 15.75H13V17.25H18V15.75Z"></path>
                      <path d="M18 13.25H13V14.75H18V13.25Z"></path>
                      <path d="M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z"></path>
                      <path d="M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z"></path>
                    </svg>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Earn:</span>
                  <span>INC</span>
                </div>
              </div>
              <div className="pt-4">
                <span className="text-xs font-semibold">INC EARNED</span>
                <div className="flex justify-between">
                  <span className="font-normal text-base text-[#4d4d4d] flex items-center gap-1">
                    {parseFloat(item.earned).toFixed(3)}
                  </span>
                  <button
                    style={{
                      background:
                        "linear-gradient(45deg, rgb(0, 102, 34), rgb(0, 179, 60))",
                      boxShadow: "rgba(14, 14, 44, 0.4) 0px -1px 0px 0px inset",
                    }}
                    className="h-12 group  rounded-lg font-semibold px-6 disabled-button"
                    disabled
                  >
                    <span className="group-disabled:text-[#4d4d4d]">
                      Harvest
                    </span>
                  </button>
                </div>
                <span className="text-xs font-semibold">
                  {item.pair} STAKED
                </span>
              </div>
              <div>
                <ConnectWalletButtonWrapper className="w-full">
                  <button
                    style={{
                      background:
                        "linear-gradient(45deg, rgb(0, 102, 34), rgb(0, 179, 60))",
                      boxShadow: "rgba(14, 14, 44, 0.4) 0px -1px 0px 0px inset",
                    }}
                    className="h-12 mt-2  w-full group rounded-lg font-semibold px-6 disabled-button"
                  >
                    <span className="group-disabled:text-[#4d4d4d]">
                      Connect Wallet
                    </span>
                  </button>
                </ConnectWalletButtonWrapper>
              </div>
            </div>
            <Accordion type="single" collapsible>
              <AccordionItem className="border-none" value="details">
                <AccordionTrigger className="w-fit p-6 !text-white hover:no-underline justify-center font-semibold data-[state=open]:hidden">
                  Details
                  <ChevronDown className="h-4 w-4 shrink-0 text-white ml-1 transition-transform duration-200" />
                </AccordionTrigger>
                <AccordionTrigger className="w-fit p-6 !text-white hover:no-underline justify-center font-semibold data-[state=closed]:hidden">
                  Hide
                  <ChevronDown className="h-4 w-4 shrink-0 text-white ml-1 transition-transform duration-200" />
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <div className="flex justify-between">
                    <span>Total Liquidity:</span>
                    <span>{item.liquidity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weight:</span>
                    <span>{item.weight}</span>
                  </div>
                  <div className="text-right space-y-0.5">
                    <Link
                      className="text-[#00b33c] text-base ml-auto w-fit flex items-center gap-2"
                      href={""}
                    >
                      Add LP <ArrowUpRightFromSquare size={16} />
                    </Link>
                    <Link
                      className="text-[#00b33c] text-base ml-auto w-fit flex items-center gap-2"
                      href={""}
                    >
                      View Contract <ArrowUpRightFromSquare size={16} />
                    </Link>
                    <Link
                      className="text-[#00b33c] text-base ml-auto w-fit flex items-center gap-2"
                      href={""}
                    >
                      See Pair Info <ArrowUpRightFromSquare size={16} />
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      ))}
    </div>
  );
};

const data = [
  {
    pair: "PLSX-PLS",
    version: "V1",
    APR: "0.41%",
    liquidity: "$7,373,876",
    earned: "0",
    weight: "2.63%",
  },
  {
    pair: "DAI from Ethereum-PLS",
    version: "V1",
    APR: "11.18%",
    liquidity: "$4,338,071",
    earned: "0",
    weight: "42.11%",
  },
  {
    pair: "USDC from Ethereum-PLS",
    version: "V1",
    APR: "9.53%",
    liquidity: "$1,908,209",
    earned: "0",
    weight: "15.79%",
  },
  {
    pair: "WETH from Ethereum-PLS",
    version: "V1",
    APR: "6.32%",
    liquidity: "$2,877,018",
    earned: "0",
    weight: "15.79%",
  },
  {
    pair: "USDT from Ethereum-PLS",
    version: "V1",
    APR: "9.37%",
    liquidity: "$1,939,700",
    earned: "0",
    weight: "15.79%",
  },
  {
    pair: "HEX-PLS",
    version: "V1",
    APR: "1.21%",
    liquidity: "$2,509,312",
    earned: "0",
    weight: "2.63%",
  },
  {
    pair: "INC-PLS",
    version: "V1",
    APR: "0.77%",
    liquidity: "$3,923,532",
    earned: "0",
    weight: "2.63%",
  },
  {
    pair: "INC-PLSX",
    version: "V1",
    APR: "0.52%",
    liquidity: "$5,773,437",
    earned: "0",
    weight: "2.63%",
  },
];
