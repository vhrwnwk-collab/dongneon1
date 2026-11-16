import React from "react";
import { Hero as HeroBackground } from "@/components/ui/tailwind-css-background-snippet";
import { KakaoIcon } from "./Icons";
import { SITE_CONFIG } from "@/data/config";
import { Clock, ShieldCheck, Zap, Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <HeroBackground className="pt-12 pb-18 sm:pt-20 sm:pb-28">
      {/* Top ambient highlight for smooth blending */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-950/70 text-orange-400 text-xs sm:text-sm font-bold border border-orange-500/30 mb-7 shadow-lg shadow-orange-500/10 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-orange-400" />
          <span>지역별 온라인 마케팅 공식 파트너 모집</span>
        </div>

        {/* Main Headline with exact requested line break */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.25] mb-6">
          잠들어있는 지역 계정
          <br />
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 mt-1">
            하루의 가치로 바꿔보세요.
          </span>
        </h1>

        {/* Subcopy */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-9">
          동네온 마케팅은 지역별 온라인 마케팅을 위해
          <br className="hidden sm:inline" />
          이용 가능한 계정을 안심 프로세스로 모집하고 있습니다.
        </p>

        {/* Big Kakao CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <a
            href={SITE_CONFIG.kakaoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] text-base sm:text-lg font-black px-8 py-4 sm:px-10 sm:py-4.5 rounded-2xl shadow-xl shadow-yellow-500/15 hover:shadow-yellow-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all group"
          >
            <KakaoIcon className="w-6 h-6 text-[#191919]" />
            <span>카카오톡으로 1분 문의하기</span>
            <ArrowRight className="w-5 h-5 text-[#191919]/70 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-2xl mx-auto pt-6 border-t border-slate-800/80">
          <div className="flex items-center justify-center sm:justify-start gap-3 p-3.5 rounded-xl bg-[#131c31]/90 backdrop-blur-md border border-slate-700/60 shadow-md">
            <div className="w-9 h-9 rounded-lg bg-orange-500/15 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs text-slate-400">대여 시간 준수</div>
              <div className="text-sm font-bold text-white">딱 24시간 대여</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 p-3.5 rounded-xl bg-[#131c31]/90 backdrop-blur-md border border-slate-700/60 shadow-md">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs text-slate-400">기다림 없는</div>
              <div className="text-sm font-bold text-white">종료 즉시 실시간 정산</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 p-3.5 rounded-xl bg-[#131c31]/90 backdrop-blur-md border border-slate-700/60 shadow-md">
            <div className="w-9 h-9 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs text-slate-400">사전 동의 범위</div>
              <div className="text-sm font-bold text-white">안전한 정상 마케팅</div>
            </div>
          </div>
        </div>

      </div>
    </HeroBackground>
  );
}
