import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  RedirectToTasks,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KOMDIGI Memberikan Layanan Terbaik Untuk Indonesia",
  description: "KOMDIGI Memberikan Layanan Terbaik Untuk Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en">
    //   <body
    //     className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    //   >
    //     <ClerkProvider>
    //       <header className="flex justify-end items-center p-4 gap-4 h-16">
    //         <Show when="signed-out">
    //           <SignInButton>
    //             <button className="w-full flex items-center cursor-pointer gap-2 justify-center border lg:px-8 px-4 py-2 rounded-lg">
    //               <Image
    //                 alt=""
    //                 src={"/img/google.png"}
    //                 width={200}
    //                 height={200}
    //                 className="w-5 h-auto"
    //               />
    //               <p>Sign In With Google</p>
    //             </button>
    //           </SignInButton>
    //           <SignUpButton>
    //             <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
    //               Sign Up
    //             </button>
    //           </SignUpButton>
    //         </Show>
    //         <Show when="signed-in">
    //           <UserButton />
    //         </Show>
    //       </header>
    //       {children}
    //     </ClerkProvider>
    //   </body>
    // </html>
    <ClerkProvider>
      <RedirectToTasks />
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    </ClerkProvider>
  );
}
