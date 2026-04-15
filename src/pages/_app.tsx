import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/next"
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Fixed background */}
      <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-[#00111E] to-[#1A3D59] z-[-1]">
        {/* Background effects */}
        <div className="absolute top-0 left-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.18)_0,rgba(0,163,255,0)_60%,rgba(0,163,255,0)_100%)] pointer-events-none" />

        <Image
          src="/assets/images/Ring.svg"
          alt="iSync Logo"
          width={1080}
          height={720}
          priority
          quality={100}
          className="absolute bottom-[-700px] scale-140 w-screen h-fit pointer-events-none"
        />
      </div>

      {/* Scrollable content */}
      <div className="relative z-[1] min-h-screen">
        <Component {...pageProps} />
      </div>
      <Analytics />
    </>
  );
}
