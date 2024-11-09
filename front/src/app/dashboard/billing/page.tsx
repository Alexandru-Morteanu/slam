import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <div className="pb-3 border-b font-bold">
        Change subscription plan for alexmrt-md's Org
      </div>
      <div className="pb-3"></div>
      <div className="flex justify-between">
        {[
          {
            key: 1,
            label: "FREE",
            price: "0",
            button: "Current Plan",
            array: [
              "Upload your own STL file",
              "No queue priority",
              "Standard quality",
              "Upload your own STL file",
              "No queue priority",
              "Standard quality",
            ],
          },
          {
            key: 2,
            label: "PRO",
            price: "25.00",
            button: "Upgrade to PRO",
            array: ["Standard quality", "Upload your own STL file"],
          },
          {
            key: 3,
            label: "PRO MAX",
            price: "599.00",
            button: "Upgrade to PRO MAX",
            array: [
              "Standard quality",
              "Upload your own STL file",
              "No queue priority",
              "Standard quality",
              "Upload your own STL file",
              "No queue priority",
              "Standard quality",
            ],
          },
        ].map((item) => (
          <div className="border w-[32%] rounded-lg p-5" key={item.key}>
            <div className="border-b">
              <div className="font-bold text-lg">{item.label}</div>
              <div className="flex items-center">
                <div className="font-bold text-lg">${item.price}</div>
                <div>/ month</div>
              </div>
              <div className=" border rounded-lg p-2 my-4 flex justify-center items-center cursor-pointer text-xs">
                {item.button}
              </div>
            </div>
            {item.array.map((feature, index) => (
              <div key={index} className="mb-2">
                ✓ {feature}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="my-3 p-5 w-[100%] border rounded-lg flex justify-between">
        <div className="w-[30%]">
          <div className=" font-bold">ENTERPRISE</div>
          <div>
            For large-scale applications running Internet scale workloads.
          </div>
          <div className=" border rounded-lg p-2 my-4 flex justify-center items-center cursor-pointer text-xs">
            Contact Us
          </div>
        </div>
        <div className="w-[30%]">
          {["das", "fa", "fas"].map((feature, index) => (
            <div key={index} className="mb-2">
              ✓ {feature}
            </div>
          ))}
        </div>
        <div className="w-[30%]">
          {["das", "fa", "fas"].map((feature, index) => (
            <div key={index} className="mb-2">
              ✓ {feature}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
