"use client";
import DataTable from "@/components/DataTable";
import {
  topPools,
  topPoolsColumn,
  topTokens,
  topTokensColumn,
  transactions,
  transactionsColunm,
} from "@/lib/dummyData";
import React from "react";
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Overview = () => {
  const data = [
    {
      name: "10",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "06",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "12",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "18",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "23",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "28",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "03",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const getPath = (x: any, y: any, width: any, height: any) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props: any) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className=" text-white  ">
      <p className=" font-bold text-3xl my-4">PulseX Info & Analytics</p>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className=" rounded-3xl bg-[#1A1D20] px-4 py-2">
          <p className=" text-lg font-medium">Liquidity</p>
          <p className=" font-bold  text-2xl my-1">$45.46M</p>
          <p className=" text-lg">Apr 7, 2025</p>
          <ResponsiveContainer width={"100%"} height={250}>
            <LineChart
              width={730}
              height={250}
              data={data}
              margin={{ top: 40, right: 30, left: 20, bottom: 5 }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis
                orientation="right"
                tickFormatter={(value) => `$${value}`}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              {/* <Legend /> */}
              <Line type="monotone" dataKey="pv" stroke="white" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className=" rounded-3xl bg-[#1A1D20] px-4 py-2">
          <p className=" text-lg font-medium">Volume 24H</p>
          <p className=" font-bold  text-2xl my-1">$45.46M</p>
          <p className=" text-lg">Apr 7, 2025</p>
          <ResponsiveContainer width={"100%"} height={250}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis
                orientation="right"
                tickFormatter={(value) => `$${value}`}
                axisLine={false}
                tickLine={false}
              />
              <Bar
                dataKey="uv"
                fill="#8884d8"
                shape={<TriangleBar />}
                // label={{ position: "top" }}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={"#00b33c"} />
                ))}
              </Bar>
            </BarChart>
            {/* <LineChart
              width={730}
              height={250}
              data={data}
              margin={{ top: 40, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis
                orientation="right"
                tickFormatter={(value) => `$${value}`}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <Line type="monotone" dataKey="pv" stroke="#00b33c" dot={false} />
            </LineChart> */}
          </ResponsiveContainer>
        </div>
      </div>
      <div className=" mt-8 w-full">
        <p className=" font-bold text-3xl">Top Tokens</p>
        <div className=" bg-[#1A1D20] rounded-3xl mt-4 border border-white/20  ">
          <DataTable data={topTokens} columns={topTokensColumn} />
        </div>
      </div>
      <div className=" mt-8 w-full">
        <p className=" font-bold text-3xl">Top Pools</p>
        <div className=" bg-[#1A1D20] rounded-3xl mt-4 border border-white/20  ">
          <DataTable data={topPools} columns={topPoolsColumn} />
        </div>
      </div>
      <div className=" mt-8 w-full">
        <p className=" font-bold text-3xl">Transactions</p>
        <RadioGroup
          className=" flex items-center gap-3 my-5"
          defaultValue="all"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all" />
            <Label htmlFor="all" className=" text-lg text-white">
              All
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="swaps" id="swaps" />
            <Label htmlFor="swaps" className=" text-lg text-white">
              Swaps
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="adds" id="adds" />
            <Label htmlFor="adds" className=" text-lg text-white">
              Adds
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="removes" id="removes" />
            <Label htmlFor="removes" className=" text-lg text-white">
              Removes
            </Label>
          </div>
        </RadioGroup>
        <div className=" bg-[#1A1D20] rounded-3xl mt-4 border border-white/20  ">
          <DataTable data={transactions} columns={transactionsColunm} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
