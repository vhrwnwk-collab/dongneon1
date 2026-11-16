import React from "react";
import { KakaoIcon } from "./Icons";
import { SITE_CONFIG } from "@/data/config";
import { ArrowRight } from "lucide-react";

export default function FloatingBar() {
  return (
    <aside
      aria-label="빠른 문의"
      className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 bg-[#0b0f19]/95 backdrop-blur-md border-t border-slate-800 shadow-[0_-4px_25px_rgba(0,0,0,0.5)] transition-all"
    >
      <div className="max-w-md mx-auto">
        <a
          href={SITE_CONFIG.kakaoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-between gap-2 bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-black text-sm sm:text-base px-4 py-3 sm:py-3.5 rounded-xl shadow-lg hover:shadow-xl active:scale-[0.99] transition-all group"
        >
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-[#3C1E1E]/10 flex items-center justify-center shrink-0">
              <KakaoIcon className="w-5 h-5 text-[#191919]" />
            </div>
            <div className="text-left truncate">
              <div className="text-[11px] font-bold text-slate-800 leading-none mb-0.5">
                ··· 예상 대여료가 궁금하다면
              </div>
              <div className="font-black text-slate-900 leading-tight">
                카카오톡으로 문의하기
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0 bg-black/10 px-2.5 py-1.5 rounded-lg text-xs font-bold">
            <span>1분 상담</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </a>
      </div>
    </aside>
  );
}
