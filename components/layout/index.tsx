"use client";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import cookies from "next-cookies";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

interface props {
  title: string;
  children: any;
}

const LayoutComponent = ({ children, title }: props) => {
  const listMenu = [
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Layanan",
      link: "/service",
    },
  ];

  useEffect(() => {}, []);
  return (
    <div className="bg-white h-screen text-black">
      <div className="grid grid-cols-5 gap-4">
        <div className="h-screen shadow">
          <div className="py-6 px-4">
            <div className="flex justify-center p-4">
              <Image
                alt="logo"
                src={"/img/logo.png"}
                width={200}
                height={200}
                className="w-6/12 h-auto"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-4 pt-8 text-white ">
                {listMenu.map((row, key) => (
                  <Link
                    href={`${row.link}`}
                    key={key}
                    className="bg-[#00aee7] px-4 py-2 rounded-r-3xl border-l-4 hover:scale-[103%] transition-all duration-300 border-[#006db1]"
                  >
                    {row.name}{" "}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 h-full flex flex-col gap-4 pr-4">
          <div className="pt-4">
            <div className="rounded-lg shadow border border-gray-200 px-6 py-4 flex justify-between items-center">
              <p>{title ?? "Layanan KOMDIGI"}</p>

              {/* <SignOutButton>
                <button className="flex items-center gap-2 px-4 py-1.5 rounded-xl text-white  bg-red-500">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="size-4.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
                      />
                    </svg>
                  </span>
                  <p>Keluar</p>
                </button>
              </SignOutButton> */}
              <UserButton />
            </div>
          </div>
          <div className="shadow flex-1 border">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutComponent;
