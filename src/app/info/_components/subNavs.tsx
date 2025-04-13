"use client";
import React from "react";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const SubNavs = () => {
  const pathName = usePathname();
  const params = useParams();
  const activePath = pathName.split("/")[3];
  return (
    <div className=" flex md:items-center gap-4 flex-col md:flex-row justify-between">
      <div className=" rounded-lg px-2 border-white/20 gap-3 flex ">
        <Link
          href={`/info/${params.version}`}
          className={clsx(
            "  font-bold py-0 px-4 h-[32px] text-lg rounded-[10px] opacity-[1] ",
            {
              " bg-[#ccc] text-[#1a1d20]": !activePath,
              "  text-white/80": activePath,
            }
          )}
        >
          Overview
        </Link>
        <Link
          href={`/info/${params.version}/pools`}
          className={clsx(
            " font-bold py-0 px-4 h-[32px] text-lg rounded-[10px] opacity-[1] ",
            {
              " bg-[#ccc] text-[#1a1d20]": activePath === "pools",
              " text-white/80": activePath !== "pools",
            }
          )}
        >
          Pools
        </Link>
        <Link
          href={`/info/${params.version}/tokens`}
          className={clsx(
            " font-bold py-0 px-4 h-[32px] text-lg rounded-[10px] opacity-[1] ",
            {
              "bg-[#ccc] text-[#1a1d20]": activePath === "tokens",
              " text-white/80": activePath !== "tokens",
            }
          )}
        >
          Tokens
        </Link>
      </div>
      <div className=" w-full md:w-auto">
        <input
          type="text"
          className=" h-12 rounded-lg text-white font-semibold bg-[#1A1D20]  w-full px-2"
          placeholder="Search pools and tokens"
        />
      </div>
    </div>
  );
};

export default SubNavs;
