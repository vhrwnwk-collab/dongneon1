import React from "react";
import { KakaoIcon } from "./Icons";
import { SITE_CONFIG } from "@/data/config";
import { ArrowRight, HelpCircle } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-[#0c1322] via-[#141f38] to-[#0c1322] text-white relative overflow-hidden border-t border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-950/60 border border-orange-500/30 text-orange-400 text-xs font-bold mb-5 shadow-lg">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>간편 1:1 조건 확인</span>
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-white">
          내 계정은 얼마인지 궁금하신가요?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto mb-9 font-medium">
          활동 지역과 계정 온도만 준비해 주세요.
          <br className="sm:hidden" />
          <span className="sm:inline"> </span>카카오톡으로 조건을 확인해 드릴게요.
        </p>

        <a
          href={SITE_CONFIG.kakaoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-black text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-4.5 rounded-2xl shadow-xl shadow-yellow-500/15 hover:shadow-yellow-500/30 hover:scale-105 active:scale-95 transition-all group"
        >
          <KakaoIcon className="w-6 h-6 text-[#191919]" />
          <span>카카오톡으로 문의하기</span>
          <ArrowRight className="w-5 h-5 text-[#191919]/70 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
