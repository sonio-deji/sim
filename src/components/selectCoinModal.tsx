import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Token, tokenResp } from "@/lib/tokens";

import React, { useMemo } from "react";
import { Input } from "./ui/input";
import Image from "next/image";
import { clsx } from "clsx";

type Props = {
  selectedToken: Token;
  onChange: (token: Token) => void;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SelectCoinModal = (props: Props) => {
  const [search, setSearch] = React.useState("");
  const [filteredTokens, setFilteredTokens] = React.useState(tokenResp.tokens);
  const sortedTokens = useMemo(() => {
    const sortedTokens = tokenResp.tokens.sort((a, b) => {
      if (a.symbol < b.symbol) {
        return -1;
      }
      if (a.symbol > b.symbol) {
        return 1;
      }
      return 0;
    });
    setFilteredTokens(sortedTokens);
    return sortedTokens;
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    const filteredTokens = sortedTokens.filter((token) => {
      return (
        token.symbol.toLowerCase().includes(e.target.value.toLowerCase()) ||
        token.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setFilteredTokens(filteredTokens);
  };

  return (
    <Dialog open={props.open} onOpenChange={props.setOpen}>
      <DialogContent className="sm:max-w-[425px] text-[#f2f2f2] bg-[#1a1d20] border-none outline-none">
        <DialogHeader className="mb-6">
          <DialogTitle>Select a Token</DialogTitle>
    
        </DialogHeader>
        <div>
          <Input
            className="focus-visible:ring-0 focus-visible:border-[#00b33c]"
            placeholder="Search name or paste an address"
            value={search}
            onChange={handleSearch}
          />
          <div className="flex gap-4 my-6 flex-wrap">
            {
              tokenResp.tokens.slice(0, 8).map((token, index) => (
                <div onClick={() => {
                  if (token.symbol !== props.selectedToken.symbol) {
                    props.onChange(token);
                    props.setOpen(false);
                  }
                }} key={index} className={clsx("cursor-pointer flex items-center gap-1 relative", {
                  'cursor-not-allowed': token.symbol === props.selectedToken.symbol
                })}>
                  <Image
                    src={token.logoURI}
                    width={30}
                    height={30}
                    loading="lazy"
                    alt="Token Icon"
                  />
                  <span className="font-semibold">{token.symbol}</span>
                </div>
              ))
            }
          </div>
          <div className="w-full h-[1px] bg-[#323234] my-6" />
          <div className="h-[350px] overflow-y-scroll space-y-4 thin-scrollbar">
            {filteredTokens.map((token, index) => (
              <div onClick={() => {
                if (token.symbol !== props.selectedToken.symbol) {
                  props.onChange(token);
                  props.setOpen(false);
                }
              }} key={index} className={clsx("flex cursor-pointer items-center gap-1 relative", {
                'cursor-not-allowed': token.symbol === props.selectedToken.symbol
              })}>
                <Image
                  src={token.logoURI}
                  width={30}
                  height={30}
                  loading="lazy"
                  alt="Token Icon"
                />
                <div className="flex flex-col  gap-1">
                  <span
                    className={clsx("font-semibold", {
                      "text-white/50":
                        token.symbol === props.selectedToken.symbol,
                    })}
                  >
                    {token.symbol}
                  </span>
                  <span
                    className={clsx("text-sm text-[#ccc]", {
                      "text-[#ccc]/50":
                        token.symbol === props.selectedToken.symbol,
                    })}
                  >
                    {token.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <DialogFooter>
          <div className="w-full">
            <span className="text-center font-semibold text-[#00b33c] block mx-auto w-fit">
              Manage Tokens
            </span>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SelectCoinModal;
