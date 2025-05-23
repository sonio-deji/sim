"use client";
import clsx from "clsx";
import { LogOut, Menu, Settings } from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const activePath = pathName.split("/")[1];

  return (
    <div className=" px-4 py-2 flex items-center justify-between">
      <div className=" text-white flex items-center gap-16  ">
        <Image
          src={"/pulselogo.svg"}
          width={30}
          height={30}
          alt="pulse logo"
          className=" w-40"
        />
        <div className=" hidden lg:flex items-center gap-16">
          <Link
            className={clsx(" text-lg", {
              "text-white font-semibold": activePath === "trade",
              " text-white/80": activePath !== "trade",
            })}
            href={"/trade"}
          >
            Trade
          </Link>
          <Link
            className={clsx(" text-lg", {
              "text-white font-semibold": activePath === "farm",
              " text-white/80": activePath !== "farm",
            })}
            href={"/farm"}
          >
            Farm
          </Link>
          <Link
            className={clsx("  text-lg", {
              "text-white font-semibold": activePath === "burn",
              " text-white/80": activePath !== "burn",
            })}
            href={"/burn"}
          >
            Burn
          </Link>
          <Link
            className={clsx("  text-lg", {
              "text-white font-semibold": activePath === "info",
              " text-white/80": activePath !== "info",
            })}
            href={"/info"}
          >
            Info
          </Link>
          <Link
            className={clsx(" text-lg flex items-center gap-2", {
              "text-white": activePath === "bridge",
              " text-white/80": activePath !== "bridge",
            })}
            href={"/bridge"}
          >
            Bridge <LogOut className=" size-4" />
          </Link>
        </div>
      </div>
      <div className=" flex items-center gap-4">
        <Settings className=" size-6 text-white" />
        <button
          style={{
            background:
              "linear-gradient(45deg, rgb(0, 102, 34), rgb(0, 179, 60))",
          }}
          className="  text-white font-bold rounded-lg px-4 py-2 ml-4 hover:bg-green-600 transition duration-200"
        >
          Connect Wallet
        </button>

        <HoverCard>
          <HoverCardTrigger>
            {" "}
            <Menu className=" cursor-pointer text-white block lg:hidden" />
          </HoverCardTrigger>
          <HoverCardContent className="w-80 border-black bg-[#1A1D20] text-white/80 ">
            <div className=" flex flex-col  gap-5">
              <Link
                className={clsx(" text-lg hover:", {
                  "text-white font-semibold": activePath === "trade",
                  " text-white/80": activePath !== "trade",
                })}
                href={"/trade"}
              >
                Trade
              </Link>
              <Link
                className={clsx(" text-lg", {
                  "text-white font-semibold": activePath === "farm",
                  " text-white/80": activePath !== "farm",
                })}
                href={"/farm"}
              >
                Farm
              </Link>
              <Link
                className={clsx("  text-lg", {
                  "text-white font-semibold": activePath === "burn",
                  " text-white/80": activePath !== "burn",
                })}
                href={"/burn"}
              >
                Burn
              </Link>
              <Link
                className={clsx("  text-lg", {
                  "text-white font-semibold": activePath === "info",
                  " text-white/80": activePath !== "info",
                })}
                href={"/info"}
              >
                Info
              </Link>
              <Link
                className={clsx(
                  " text-lg flex justify-between items-center gap-2",
                  {
                    "text-white": activePath === "bridge",
                    " text-white/80": activePath !== "bridge",
                  }
                )}
                href={"/bridge"}
              >
                Bridge <LogOut className=" size-4" />
              </Link>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};

export default Navbar;
