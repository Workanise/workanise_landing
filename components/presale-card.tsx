"use client";

import { HelioCheckout, EmbedThemeMode, DisplayType } from '@heliofi/checkout-react'

export function PresaleCard() {

  const PAYLINK_ID = process.env.NEXT_PUBLIC_PAYLINK_ID as string;
  console.log("PAYLINK_ID", PAYLINK_ID);

  if (!PAYLINK_ID) {
    return <div>Missing paylinkId</div>;
  }

  const helioConfig = {
    paylinkId: PAYLINK_ID,
    theme: { themeMode: "dark" as EmbedThemeMode },
    primaryColor: "#5a6578",
    neutralColor: "#00faa7",
    display: "inline" as DisplayType,
    backgroundColor: "#27272a",
    stretchFullWidth: true

  };

  return <HelioCheckout config={helioConfig} />
}
