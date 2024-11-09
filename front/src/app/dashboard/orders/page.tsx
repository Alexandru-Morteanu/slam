"use client";
import RightToLeftPopup from "@/app/comp/RightToLeft";
import React, { useState } from "react";

type Props = {};

export default function page({}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col items-end p-4">
      {/* Button */}
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="font-bold text-sm bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        ⨁ Add Order
      </button>

      {/* Table */}
      <div className="w-full mt-4 overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left w-[10%]">ID</th>
              <th className="py-2 px-4 border-b text-left w-[15%]">STL File</th>
              <th className="py-2 px-4 border-b text-left w-[25%]">Address</th>
              <th className="py-2 px-4 border-b text-left w-[10%]">Time</th>
              <th className="py-2 px-4 border-b text-left w-[15%]">
                Time Created
              </th>
              <th className="py-2 px-4 border-b text-left w-[10%]">
                Membership
              </th>
              <th className="py-2 px-4 border-b text-left w-[10%]">Price</th>
              <th className="py-2 px-4 border-b text-left w-[10%]">Status</th>
            </tr>
          </thead>
          <tbody className="p-5">
            {/* Example row */}
            {[
              {
                id: "123",
                stl: "stl.file",
                address: "st. Mihai Eminescu 1",
                time: "2h",
                time_created: "2/2/20024",
                membership: "PRO MAX",
                price: "$30",
                status: "Waiting...",
              },
              {
                id: "13",
                stl: "stl.file",
                address: "st. Mihai Eminescu 1",
                time: "2h",
                time_created: "2/2/20024",
                membership: "PRO MAX",
                price: "$30",
                status: "Waiting...",
              },
            ].map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-b text-left">{item.id}</td>
                <td className="py-2 px-4 border-b text-left">{item.stl}</td>
                <td className="py-2 px-4 border-b text-left">{item.address}</td>
                <td className="py-2 px-4 border-b text-left">{item.time}</td>
                <td className="py-2 px-4 border-b text-left">
                  {item.time_created}
                </td>
                <td className="py-2 px-4 border-b text-left">
                  {item.membership}
                </td>
                <td className="py-2 px-4 border-b text-left">{item.price}</td>
                <td
                  className={`py-2 px-4 border-b text-left text-${"gray"}-500`}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <RightToLeftPopup isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
