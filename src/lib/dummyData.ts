import { ColumnDef } from "@tanstack/react-table";
import { formatDistanceToNow } from "date-fns";

type TopTokens = {
  price: string;
  priceChange: string;
  volume: string;
  liquidity: string;
  name: string;
};
type TopPools = {
  lpReward: string;
  volume24h: string;
  volume7D: string;
  pool: string;
  liquidity: string;
};
type Transactions = {
  action: string;
  value: string;
  tokenAmount: string;
  time: Date;
  tokenAmount2: string;
};

export const topTokens: TopTokens[] = [
  {
    price: "$0.00001",
    name: "Wrapped BTC",
    priceChange: "$0.00000003",
    volume: "$1,000,000",
    liquidity: "$10,000,000",
  },
  {
    price: "$0.00001",
    name: "Wrapped BTC",
    priceChange: "$0.00000003",
    volume: "$1,000,000",
    liquidity: "$10,000,000",
  },
];
export const topTokensColumn: ColumnDef<TopTokens>[] = [
  {
    accessorKey: "sn",
    header: "#",
    cell: ({ row }) => {
      return row.index + 1;
    },
  },
  {
    accessorKey: "name",
    header: "NAME",
  },
  {
    accessorKey: "price",
    header: "PRICE",
  },
  {
    accessorKey: "priceChange",
    header: "PRICE CHANGE",
  },
  {
    accessorKey: "volume",
    header: "VOLUME",
  },
  {
    accessorKey: "liquidity",
    header: "LIQUIDITY",
  },
];
export const topPoolsColumn: ColumnDef<TopPools>[] = [
  {
    accessorKey: "sn",
    header: "#",
    cell: ({ row }) => {
      return row.index + 1;
    },
  },
  {
    accessorKey: "pool",
    header: "POOL",
  },
  {
    accessorKey: "volume24h",
    header: " VOLUME 24H",
  },
  {
    accessorKey: "volume7D",
    header: "VOLUME 7D",
  },
  {
    accessorKey: "lpReward",
    header: "   LP REWARD FEES 24H",
  },
  {
    accessorKey: "liquidity",
    header: "LIQUIDITY",
  },
];
export const transactionsColunm: ColumnDef<Transactions>[] = [
  {
    accessorKey: "action",
    header: "ACTION",
  },
  {
    accessorKey: "value",
    header: "VALUE",
  },
  {
    accessorKey: "tokenAmount",
    header: "TOKEN AMOUNT",
  },
  {
    accessorKey: "tokenAmount2",
    header: "TOKEN AMOUNT",
  },
  {
    accessorKey: "time",
    header: "TIME",
    cell: ({ row }) => {
      const date = new Date(row.getValue("time"));

      return formatDistanceToNow(date) + " ago";
    },
  },
];

export const topPools: TopPools[] = [
  {
    lpReward: "$0.00001",
    pool: "Wrapped BTC",
    volume24h: "$0.33333333",
    volume7D: "$0.33333333",
    liquidity: "$10,000,000",
  },
  {
    lpReward: "$0.00001",
    pool: "Wrapped BTC",
    volume24h: "$0.33333333",
    volume7D: "$0.33333333",
    liquidity: "$10,000,000",
  },
];

export const transactions: Transactions[] = [
  {
    action: "Swap",
    value: "$1000",
    tokenAmount: "1000",
    time: new Date(),
    tokenAmount2: "1000",
  },
  {
    action: "Add",
    value: "$1000",
    tokenAmount: "1000",
    time: new Date(),
    tokenAmount2: "1000",
  },
];
