"use client";

import DataTable from "@/components/DataTable";
import { v1 } from "@/lib/burn";
import { lpsColumn } from "@/lib/dummyData";
import clsx from "clsx";
import { useState } from "react";

const Burn = () => {
  const [activeTab, setActiveTab] = useState<"v1" | "v2">("v1");
  return (
    <div className=" text-white mt-16 ">
      <div className=" flex items-center justify-between">
        <div>
          <p className=" font-bold text-3xl">Burn</p>
          <p className=" mt-2 font-semibold text-lg">
            Select LP tokens to buy and burn PLSX
          </p>
        </div>
        <div className=" rounded-3xl max-w-[360px] w-full p-4 bg-[#1A1D20] ">
          <div className=" flex items-center justify-between">
            <p className=" font-semibold text-2xl">Burn PLSX</p>
            <p className=" text-sm">Total PLSX burned 1.33T</p>
          </div>
          <p className=" text-white/80">Selected USD value: $0.00</p>
          <p className=" text-white/80 ">Selected USD value: $0</p>
          <p className=" text-white font-medium">Bounty: 0.00 PLSX/~$0.00</p>
          <button
            style={{
              background:
                "linear-gradient(45deg, rgb(0, 102, 34), rgb(0, 179, 60))",
            }}
            className="  text-white mt-3 font-bold rounded-lg px-4 py-2  w-full hover:bg-green-600 transition duration-200"
          >
            Connect Wallet
          </button>
        </div>
      </div>
      <div className=" gap-3 max-w-[120px] p-1 rounded-lg flex items-center border border-white/20">
        <button
          onClick={() => setActiveTab("v1")}
          className={clsx(" py-1 px-4 rounded-lg font-bold ", {
            " bg-slate-300 text-black": activeTab === "v1",
          })}
        >
          V1
        </button>
        <button
          onClick={() => setActiveTab("v2")}
          className={clsx(" py-1 px-4 rounded-lg font-bold ", {
            " bg-slate-300 text-black": activeTab === "v2",
          })}
        >
          V2
        </button>
      </div>
      <div className=" bg-[#1a1d20] rounded-3xl mt-4 border border-[#323234] ">
        <DataTable data={v1} columns={lpsColumn} />
      </div>
    </div>
  );
};

export default Burn;
