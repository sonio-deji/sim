import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import clsx from "clsx";
import Link from "next/link";
import { ArrowUpRightFromSquare, ChevronDown, ChevronUp } from "lucide-react";

const ListView = () => {
  return (
    <Accordion
      type="multiple"
      className="w-full bg-[#1a1d20] text-[#f2f2f2] border border-[#323234] overflow-hidden rounded-3xl"
    >
      {data.map((item, index) => (
        <AccordionItem
          className={clsx("border border-[#323234]", {
            "border-b-0 border-l-0 border-r-0": index !== data.length - 1,
            "border-t-0 border-l-0 border-r-0": index === 0,
          })}
          key={index}
          value={index.toString()}
        >
          <AccordionTrigger className="w-full px-4 hover:no-underline py-6 flex justify-between">
            <div className="flex-1 ">
              <span className="font-semibold text-base">{item.pair}</span>
            </div>
            <div className="border-2 border-[#ccc] px-1 rounded-lg">
              <span className="font-semibold text-xs text-[#ccc]">
                {item.version}
              </span>
            </div>
            <div className="flex-1 flex justify-center">
              <div className=" flex flex-col">
                <span className="text-sm text-[#ccc]">APR</span>
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
            </div>
            <div className="flex-1 flex justify-center">
              <div className=" flex flex-col">
                <span className="text-sm text-[#ccc]">Liquidity</span>
                <span className="font-normal text-base flex items-center gap-1">
                  {item.liquidity}
                </span>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className=" flex flex-col">
                <span className="text-sm text-[#ccc]">Earned</span>
                <span className="font-normal text-base text-[#4d4d4d] flex items-center gap-1">
                  {item.earned}
                </span>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className=" flex flex-col">
                <span className="text-sm text-[#ccc]">Weight</span>
                <span className="font-normal text-base text-[#4d4d4d] flex items-center gap-1">
                  {item.weight}
                </span>
              </div>
            </div>
            <ChevronDown className="h-4 w-4 shrink-0 text-[#00b33c] transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent
            className="flex items-stretch gap-4 px-8 py-4"
            style={{
              backgroundImage: "linear-gradient(200.0deg,#070707,#18181b)",
            }}
          >
            <div className="flex flex-col my-auto w-[200px]">
              <Link
                className="text-[#00b33c] flex items-center gap-2"
                href={""}
              >
                Add LP <ArrowUpRightFromSquare size={16} />
              </Link>
              <Link
                className="text-[#00b33c] flex items-center gap-2"
                href={""}
              >
                View Contract <ArrowUpRightFromSquare size={16} />
              </Link>
              <Link
                className="text-[#00b33c] flex items-center gap-2"
                href={""}
              >
                See Pair Info <ArrowUpRightFromSquare size={16} />
              </Link>
            </div>
            <div className="flex-1 p-4 border h-full border-[#323234] rounded-2xl">
              <span className="">INC EARNED</span>
              <div className="w-full mt-2 flex pb-4 justify-between items-center">
                <span className="font-semibold text-xl">{item.earned}</span>
                <button
                  style={{
                    background:
                      "linear-gradient(45deg, rgb(0, 102, 34), rgb(0, 179, 60))",
                    boxShadow: "rgba(14, 14, 44, 0.4) 0px -1px 0px 0px inset",
                  }}
                  className="h-12 group rounded-lg font-semibold px-6 disabled-button"
                  disabled
                >
                  <span className="group-disabled:text-[#4d4d4d]">Harvest</span>
                </button>
              </div>
            </div>
            <div className="flex-1 p-4  border border-[#323234] rounded-2xl">
              <span className="">Start Farming</span>
              <div className="w-full mt-2 flex pb-4 justify-between items-center">
                <button
                  style={{
                    background:
                      "linear-gradient(45deg, rgb(0, 102, 34), rgb(0, 179, 60))",
                    boxShadow: "rgba(14, 14, 44, 0.4) 0px -1px 0px 0px inset",
                  }}
                  className="h-12 w-full group rounded-lg font-semibold px-6 disabled-button"
                >
                  <span className="group-disabled:text-[#4d4d4d]">
                    Connect Wallet
                  </span>
                </button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
      <div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex gap-2 items-center justify-center text-[#00b33c] py-6 font-semibold mx-auto hover:text-[#00b33c]/70 transition-all"
        >
          <span>To Top</span> <ChevronUp />
        </button>
      </div>
    </Accordion>
  );
};

export default ListView;

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
