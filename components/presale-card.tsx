"use client";

import { HelioCheckout, EmbedThemeMode, DisplayType } from '@heliofi/checkout-react'

export function PresaleCard() {

  const helioConfig = {
    paylinkId: "678ce784a8f2dca1e48eec56",
    theme: { themeMode: "dark" as EmbedThemeMode },
    primaryColor: "#5a6578",
    neutralColor: "#00faa7",
    display: "inline" as DisplayType,
    backgroundColor: "#27272a",
  };

  return <HelioCheckout config={helioConfig} />
}
