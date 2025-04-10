"use client";
import DataTable from "@/components/DataTable";
import { topPools, topPoolsColumn } from "@/lib/dummyData";
import React from "react";

const Pools = () => {
  return (
    <div>
      <p className=" font-bold text-2xl text-white">Your Watchlist</p>
      <div className=" bg-[#1A1D20]  text-white py-2.5 text-sm font-semibold px-4 rounded-3xl mt-5">
        Saved pools will appear here
      </div>
      <div className=" mt-8 w-full">
        <p className=" font-bold text-3xl text-white">All Pools</p>
        <div className=" bg-[#1A1D20] rounded-3xl mt-4 border border-white/20  ">
          <DataTable data={topPools} columns={topPoolsColumn} />
        </div>
      </div>
    </div>
  );
};

export default Pools;
