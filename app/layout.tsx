import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { ReactQueryProvider } from "./react-query-provider";

const mont = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Workanis3 - Web3 Workspace Solutions",
  description:
    "Building an ultrastandard workspace for web3 freelance solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${mont.className} bg-zinc-900 text-white`}>
        <ReactQueryProvider>
          {children}
          <ToastContainer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
