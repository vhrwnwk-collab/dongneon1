import React from "react";
import Image from "next/image";
import { KakaoIcon } from "./Icons";
import { SITE_CONFIG } from "@/data/config";
import { Coins, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export default function TemperaturePricing() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0b0f19] via-[#0e1627] to-[#0d1424] relative overflow-hidden border-t border-slate-800/60">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-80 bg-orange-500/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold mb-4 shadow-sm">
          <Coins className="w-3.5 h-3.5 text-amber-400" />
          <span>투명한 당일 정산 기준</span>
        </div>

        {/* Section Headline */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
          내 계정 온도로 확인하는{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
            하루 대여비
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-10">
          활동 지역과 계정 온도에 따라 당일 지급될 명확한 기준을 확인하세요.
          <br className="hidden sm:inline" /> 복잡한 협상 없이 사전에 정확한 금액을 안내해 드립니다.
        </p>

        {/* Custom Card Frame for the uploaded price chart */}
        <div className="max-w-2xl mx-auto relative group">
          {/* Subtle outer glow border */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500/30 via-amber-500/20 to-orange-500/30 blur-lg opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />

          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#121a2d] border border-orange-500/30 shadow-2xl">
            {/* The processed image with button cleanly removed */}
            <div className="w-full relative aspect-[1024/786] bg-slate-950">
              <Image
                src="/images/temperature_pricing.png"
                alt="온도별 다른 대여비 기준표"
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
                priority
              />
            </div>

            {/* Bottom action block replacing the static button with live functional CTA */}
            <div className="p-5 sm:p-6 bg-gradient-to-t from-[#0e1628] via-[#121a2e] to-[#121a2d] border-t border-slate-700/60 flex flex-col items-center">
              <a
                href={SITE_CONFIG.kakaoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-black text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <KakaoIcon className="w-5 h-5 text-[#191919]" />
                <span>내 계정 온도 대여료 실시간 확인하기</span>
                <ArrowRight className="w-4 h-4 text-[#191919]/70 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="mt-3 text-[11px] sm:text-xs text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>계정 상태 및 지역별 실시간 수요에 따라 대여료가 확정됩니다.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
