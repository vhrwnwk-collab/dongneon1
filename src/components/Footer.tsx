import React from "react";
import { ShieldAlert, Flame } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#070a12] text-slate-400 py-12 pb-24 sm:pb-16 border-t border-slate-800 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
              <Flame className="w-4 h-4 fill-orange-400" />
            </div>
            <span className="text-sm font-bold text-slate-200">
              동네온 마케팅
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">지역 기반 온라인 마케팅 안내</span>
          </div>

          <div className="text-slate-500 text-[11px]">
            © {new Date().getFullYear()} 동네온 마케팅. All rights reserved.
          </div>
        </div>

        {/* Disclaimer / 법적 고지 (요청 내용 완벽 반영) */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed text-slate-400">
            <span className="font-semibold text-amber-300">안내 및 고지사항:</span> 본 페이지는 독립 마케팅 업체의 안내 페이지이며, 당근의 공식 서비스 또는 제휴 페이지가 아닙니다. 서비스 이용 전 관련 플랫폼 정책과 상세 계약 조건을 직접 확인해 주세요.
          </p>
        </div>
      </div>
    </footer>
  );
}
