import LayoutComponent from "@/components/layout";
import { RedirectToSignIn, Show } from "@clerk/nextjs";
import React from "react";

const ServicePage = () => {
  return (
    <>
      <Show when={"signed-in"}>
        <LayoutComponent title="Layanan">
          <div>Layanan</div>
        </LayoutComponent>
      </Show>
      <Show when="signed-out">
        <RedirectToSignIn redirectUrl={"/"} />
      </Show>
    </>
  );
};

export default ServicePage;
