"use client";
import Image from "next/image";
import React, { useState } from "react";
import { listMenu } from ".";
import Link from "next/link";

const DrawerComponent = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="md:block hidden">
      <div className="text-center">
        <button onClick={() => setOpen(!open)} className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      <div
        id="drawer-example"
        className={`fixed bg-white top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${open ? "" : "-translate-x-full"} bg-neutral-primary-soft w-96 border-e border-default`}
        tabIndex={-1}
        aria-labelledby="drawer-label"
      >
        <div className="pb-4 mb-5 flex items-center">
          <button
            onClick={() => setOpen(false)}
            type="button"
            data-drawer-hide="drawer-example"
            aria-controls="drawer-example"
            className="text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2.5 end-2.5 flex items-center justify-center"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </div>
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
    </div>
  );
};

export default DrawerComponent;
