"use client";
import DataTable from "@/components/DataTable";
import { topTokens, topTokensColumn } from "@/lib/dummyData";
import { MoveDown } from "lucide-react";
import Image from "next/image";
import React from "react";

const Tokens = () => {
  return (
    <div>
      <p className=" font-bold text-2xl text-white">Your Watchlist</p>
      <div className=" bg-[#1A1D20]  text-white py-2.5 text-sm font-medium px-4 rounded-3xl mt-5">
        Saved tokens will appear here
      </div>
      <div className=" bg-[#1A1D20]  text-white py-2  font-medium px-4 rounded-3xl mt-5">
        <p className=" text-sm mb-4">Top Movers</p>
        <div className=" border w-fit   rounded-2xl gap-3 border-white/20 px-4 py-2 flex items-center justify-between">
          <Image src={"/wpls.png"} width={20} height={20} alt="wpls" />{" "}
          <div>
            <p className=" text-lg text-white">WPLS</p>
            <div className=" flex items-center gap-1">
              <p className=" text-lg text-white">$0.00002</p>
              <p className=" flex items-center text-xs text-red-700  font-bold ">
                <MoveDown className=" size-3 mt-1 " />
                2.33%
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-8 w-full">
        <p className=" font-bold text-3xl text-white">All Tokens</p>
        <div className=" bg-[#1A1D20] rounded-3xl mt-4 border border-white/20  ">
          <DataTable data={topTokens} columns={topTokensColumn} />
        </div>
      </div>
    </div>
  );
};

export default Tokens;
