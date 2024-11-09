"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis } from "recharts";
import user from "../../../public/image.png";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import Image from "next/image";

//$⛟♻⌛
export default function page() {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  return (
    <div className="w-[100%] p-10 flex flex-col gap-10">
      <div className="flex justify-between w-[100%] gap-0">
        {[
          {
            id: 1,
            label: "Total Credit",
            emoji: "$",
            color: "green",
            link: "",
            number: "$3,211",
            under: "Based on 100 Charges",
          },
          {
            id: 2,
            label: "Total Orders",
            emoji: "⛟",
            color: "blue",
            link: "billing",
            number: "+8",
            under: "Total Orders on Slam",
          },
          {
            id: 3,
            label: "Total Recycled",
            emoji: "♺",
            color: "black",
            link: "recycle",
            number: "4",
            under: "Total Recycled on Slam",
          },
          {
            id: 4,
            label: "Total Print Time",
            emoji: "⏱",
            color: "red",
            link: "topup",
            number: "5",
            under: "Total Printed on Slam",
          },
        ].map((item) => (
          <div key={item.id} className=" border p-5 rounded-lg w-[23%]">
            <div>
              <div className="flex justify-between font-bold text-lg">
                <div>{item.label}</div>
                <div
                  style={{
                    color: item.color,
                  }}
                >
                  {item.emoji}
                </div>
              </div>
              <div className=" font-bold text-lg">{item.number}</div>
              <div className="text-sm text-gray-600">{item.under}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex h-[100%] justify-between">
        <div className="border p-5 rounded-lg w-[65%]">
          <div className="pb-8">
            <div className="font-bold text-lg">Transactions</div>
            <div className="text-sm text-gray-600">
              Recent transactions from the last 7 days
            </div>
          </div>

          <ChartContainer config={chartConfig} className="h-[85%] w-full">
            <LineChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value: any) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Line
                type="monotone"
                dataKey="desktop"
                stroke="var(--color-desktop)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="mobile"
                stroke="var(--color-mobile)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </div>

        <div className="border p-5 rounded-lg w-[32%]">
          <div className="font-bold text-lg">Recent Order</div>
          {[
            {
              id: 1,
              name: "Primul proiect",
              pret: "314",
            },
            {
              id: 2,
              name: "Al doilea proiect",
              pret: "244",
            },
            {
              id: 3,
              name: "Al treilea proiect",
              pret: "14",
            },
          ]
            .reverse()
            .map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-3 text-sm"
              >
                <div className="flex items-center gap-1">
                  <Image src={user} alt="" className="w-6 h-6" />
                  <div>{item.name}</div>
                </div>
                <div>${item.pret}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
