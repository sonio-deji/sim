"use client";
import SelectCoinModal from "@/components/selectCoinModal";
import { Token, tokenResp } from "@/lib/tokens";
import { ArrowDown, ChevronDown, RotateCw } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";

const Trade = () => {
  const [token1, setToken1] = React.useState<{
    token: Token;
    amount: number;
  } | null>(null);
  const [token2, setToken2] = React.useState<{
    token: Token;
    amount: number;
  } | null>(null);

  useEffect(() => {
    const tokens = tokenResp.tokens;
    setToken1({
      token: tokens[0],
      amount: 0,
    });
    setToken2({
      token: tokens[1],
      amount: 0,
    });
  }, []);
  return (
    <div className="w-full flex items-center justify-center ">
      <div className="bg-[#1a1d20] p-3 rounded-[20px] w-[500px]">
        <div className="flex items-center justify-between px-4 mb-3">
          <span className="text-white font-semibold">Swap</span>
          <RotateCw className="text-white/60" size={20} />
        </div>
        {token1 && (
          <div className="space-y-2 relative">
            <TokenView token={token1!} setToken={setToken1} />
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#24282d] p-1.5 rounded-full hover:rotate-180 cursor-pointer ease-in-out transition-all duration-300">
              <ArrowDown className="text-white size-[18px]"/>
            </div>
            <TokenView token={token2!} setToken={setToken2} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Trade;

interface TokenViewProps {
  token: {
    token: Token;
    amount: number;
  };
  setToken: React.Dispatch<
    React.SetStateAction<{
      token: Token;
      amount: number;
    } | null>
  >;
}

const TokenView = ({ token, setToken }: TokenViewProps) => {
  console.log(token);
  const [val, setVal] = React.useState(token.amount.toFixed(2));
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericalValue = Number(e.target.value);
    console.log(!Number.isNaN(numericalValue))

    console.log(!!e.target.value)
    if (e.target.value && !Number.isNaN(numericalValue)) {
      setVal(e.target.value);
    } else {
      setVal("0.00");
    }
  };
  return (
    <div className="bg-[#101417] rounded-xl p-3">
      <SelectCoinModal
        onChange={(token) => setToken({ token, amount: Number(val) })}
        open={modalOpen}
        setOpen={setModalOpen}
        selectedToken={token.token}
      />
      <span className="text-sm text-[#8b8b92] ">You pay</span>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2">
          <Image
            src={token?.token.logoURI}
            width={30}
            height={30}
            alt="Token Icon"
          />
          <button onClick={() => setModalOpen(true)} className="flex items-center gap-1">
            <span className="text-[#f2f2f2] font-semibold text-sm">
              {token.token.symbol}
            </span>
            <ChevronDown color="white" size={16} />
          </button>
        </div>
        <div>
          <input
            value={val}
            onChange={handleInputChange}
            className="w-fit text-white focus:outline-none font-medium text-xl bg-transparent input-solemn"
          />
        </div>
      </div>
    </div>
  );
};
