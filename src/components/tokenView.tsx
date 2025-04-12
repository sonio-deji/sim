import { Token } from "@/lib/tokens";
import React from "react";
import SelectCoinModal from "./selectCoinModal";
import Image from "next/image";
import { ChevronDown, Copy } from "lucide-react";

interface TokenViewProps {
  token: {
    token: Token;
    amount: number;
    withCopy?: boolean;
  };
  subText?: string;
  setToken: React.Dispatch<
    React.SetStateAction<{
      token: Token;
      amount: number;
      withCopy?: boolean;
    } | null>
  >;
}

const TokenView = ({ token, setToken, subText }: TokenViewProps) => {
  const [val, setVal] = React.useState(token.amount.toFixed(2));
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericalValue = Number(e.target.value);
    console.log(!Number.isNaN(numericalValue));

    console.log(!!e.target.value);
    if (e.target.value && !Number.isNaN(numericalValue)) {
      setVal(e.target.value);
    } else {
      setVal("0.00");
    }
  };
  const copyToClipboard = (token: Token) => {
    navigator.clipboard.writeText(token.address);
  };
  return (
    <div className="bg-[#101417] rounded-xl p-3">
      <SelectCoinModal
        onChange={(tokenToSet) =>
          setToken({
            token: tokenToSet,
            amount: Number(val),
            withCopy: token.withCopy,
          })
        }
        open={modalOpen}
        setOpen={setModalOpen}
        selectedToken={token.token}
      />
      <span className="text-sm text-[#8b8b92] ">{subText || "You pay"}</span>
      <div className="flex items-center justify-between mt-2">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Image
              src={token?.token.logoURI}
              width={30}
              height={30}
              alt="Token Icon"
            />
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-1"
            >
              <span className="text-[#f2f2f2] font-semibold text-sm">
                {token.token.symbol}
              </span>
              <ChevronDown color="white" size={16} />
            </button>
          </div>
          <div>
            {token.withCopy && (
              <button onClick={() => copyToClipboard(token.token)}>
                <Copy color="white" size={16} />
              </button>
            )}
          </div>
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

export default TokenView;
