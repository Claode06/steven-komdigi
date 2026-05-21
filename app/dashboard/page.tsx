import LayoutComponent from "@/components/layout";
import { RedirectToSignIn, Show } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardPage = () => {
  return (
    <>
      <Show when={"signed-in"}>
        <LayoutComponent title="Dashboard">
          <div>Dashboard</div>
        </LayoutComponent>
      </Show>
      <Show when="signed-out">
        <RedirectToSignIn redirectUrl={"/"} />
      </Show>
    </>
  );
};

export default DashboardPage;
