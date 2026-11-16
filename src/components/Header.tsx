import React from "react";
import Link from "next/link";
import { KakaoIcon } from "./Icons";
import { SITE_CONFIG } from "@/data/config";
import { Flame } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#0b0f19]/85 backdrop-blur-md border-b border-slate-800/80 shadow-md shadow-black/20 transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-white shadow-md shadow-orange-500/30 group-hover:scale-105 transition-transform">
            <Flame className="w-5 h-5 fill-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl text-white tracking-tight leading-none">
              동네온 <span className="text-orange-400">마케팅</span>
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-wider mt-0.5">
              LOCAL MARKETING PARTNER
            </span>
          </div>
        </Link>

        <a
          href={SITE_CONFIG.kakaoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold text-xs sm:text-sm px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-md shadow-yellow-500/10 hover:shadow-lg transition-all active:scale-95"
        >
          <KakaoIcon className="w-4 h-4 text-[#191919]" />
          <span>카톡 1:1 상담</span>
        </a>
      </div>
    </header>
  );
}
