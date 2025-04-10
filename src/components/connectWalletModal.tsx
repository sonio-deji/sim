"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useConnectWallet } from "@/app/context/connectWallet";
import Image from "next/image";
import { MoreHorizontal, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "./ui/button";

// type Props = {};

const ConnectWalletModal = () => {
  const { modalOpen, setModalOpen } = useConnectWallet();
  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogContent className="p-4 md:p-10 border-0  rounded-lg shadow-lg w-[400px] flex flex-col  outline-none focus:outline-none bg-[#1a1d20]">
        <DialogHeader>
          <DialogTitle>
            <div className="w-full text-left odos-text-heading text-white">
              Connect Wallet
            </div>
          </DialogTitle>
          <DialogDescription>
            <div className="w-full text-left flex flex-col">
              <span className="text-white">
                Start by connecting with one of the wallets below. Be sure to
                store your private keys or seed phrase securely. Never share
                them with anyone.
              </span>
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-row gap-y-5 items-center mt-8 flex-wrap">
          <div className="basis-1/3 gap-2 flex flex-col items-center">
            <Image src="https://tokens.app.pulsex.com/images/metamask.png" width={50} height={50} alt="metamask"  />
            <span className="text-white text-xs">Metamask</span>
          </div>
          <div className="basis-1/3 gap-2 flex flex-col items-center">
            <Image src="https://tokens.app.pulsex.com/images/rabby.png" width={50} height={50} alt="Rabby"  />
            <span className="text-white text-xs">Rabby Wallet</span>
          </div>
          <div className="basis-1/3 gap-2 flex flex-col items-center">
            <Image src="https://tokens.app.pulsex.com/images/trust.png" width={50} height={50} alt="trust"  />
            <span className="text-white text-xs">Trust Wallet</span>
          </div>
          <div className="basis-1/3 gap-2 flex flex-col items-center">
            <Image src="https://tokens.app.pulsex.com/images/walletconnect.png" width={50} height={50} alt="walletconnect"  />
            <span className="text-white text-xs">WalletConnect</span>
          </div>
          <div className="basis-1/3 gap-2 flex flex-col items-center">
            <Image src="https://tokens.app.pulsex.com/images/opera.png" width={50} height={50} alt="opera"  />
            <span className="text-white text-xs">Opera Wallet</span>
          </div>
          <div className="basis-1/3 gap-2 flex flex-col items-center">
          <div className="size-[50px] flex items-center justify-center">

          <MoreHorizontal size={20} color="white"/>
          </div>
            <span className="text-white text-xs">Metamask</span>
          </div>
          
        </div>
        <DialogFooter className="mt-8">
          <div className="w-full flex justify-center">
            <Button variant={"secondary"} className="h-fit py-3 px-6">
              <span className="text-base">Learn How to Connect</span>
              <SquareArrowOutUpRight size={20}/>
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConnectWalletModal;
