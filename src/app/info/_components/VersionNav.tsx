"use client";
import clsx from "clsx";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React from "react";

const VersionNav = () => {
  const pathName = usePathname();
  const activePath = pathName.split("/")[2];
  if (activePath !== "V1" && activePath !== "V2" && activePath !== "stable") {
    return redirect("/info/V1");
  }
  return (
    <div className=" text-white flex flex-row justify-between gap-6 mx-auto max-w-44 w-full ">
      <Link
        className={clsx(" text-lg", {
          "text-white font-semibold border-b-[4px] pb-2 px-2 rounded-b-sm border-b-[#00B33C]":
            activePath === "V1",
          "text-white/80 font-medium": activePath !== "V1",
        })}
        href={"/info/V1"}
      >
        V1
      </Link>
      <Link
        className={clsx(" text-lg", {
          "text-white font-semibold border-b-[4px] pb-2 px-2 rounded-b-sm border-b-[#00B33C]":
            activePath === "V2",
          "text-white/80 font-medium": activePath !== "V2",
        })}
        href={"/info/V2"}
      >
        V2
      </Link>
      <Link
        className={clsx(" text-lg", {
          "text-white font-semibold border-b-[4px] pb-2 px-2 rounded-b-sm border-b-[#00B33C]":
            activePath === "stable",
          "text-white/80 font-medium": activePath !== "stable",
        })}
        href={"/info/stable"}
      >
        Stable
      </Link>
    </div>
  );
};

export default VersionNav;
