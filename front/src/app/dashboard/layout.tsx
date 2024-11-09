"use client";
import { SessionProvider, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  const handleLogout = async () => {
    // await supabase.auth.signOut();
    try {
      await signOut({
        callbackUrl: "/login",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex">
      <div className="bg-gray-100 p-3 rounded-lg shadow-lg h-[calc(100vh-4rem)]">
        <div className="flex flex-col justify-between h-[100%]">
          <div>
            {[
              { id: 1, label: "Dashboard", link: "" },
              { id: 2, label: "Orders", link: "orders" },
              { id: 3, label: "Billing", link: "billing" },
              { id: 4, label: "Recycle", link: "recycle" },
              { id: 5, label: "Top up", link: "topup" },
              { id: 6, label: "Meeting", link: "meeting" },
            ].map((button) => (
              <div key={button.id}>
                <Link
                  href={`/dashboard/${button.link}`}
                  className="text-xl font-bold text-white-gray"
                >
                  {button.label}
                </Link>
              </div>
            ))}
          </div>
          <div>
            <button onClick={handleLogout}>LOG OUT</button>
          </div>
        </div>
      </div>
      <div className="w-[100%] px-10 pt-10">
        <SessionProvider>{children}</SessionProvider>
      </div>
    </div>
  );
}