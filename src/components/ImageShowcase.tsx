import React from "react";
import { SITE_CONFIG } from "@/data/config";
import { Image as ImageIcon, Sparkles } from "lucide-react";

export default function ImageShowcase() {
  return (
    <section className="py-18 sm:py-24 bg-[#0b0f19]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-950/60 text-orange-400 text-xs font-bold border border-orange-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>동네온 갤러리 & 활동 안내</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            생생한 진행 내역과 실제 파트너 후기
          </h2>
          <p className="mt-2.5 text-sm text-slate-400">
            투명하고 정직하게 운영되는 동네온 마케팅의 실제 진행 현황을 확인해 보세요.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SITE_CONFIG.showcaseImages.map((img, idx) => (
            <div
              key={idx}
              className="group bg-[#131c31]/90 rounded-2xl overflow-hidden border border-slate-700/60 shadow-lg hover:border-orange-500/40 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container or Elegant Dark Placeholder */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[#0c1220] via-[#10182c] to-[#152038] flex flex-col items-center justify-center p-6 text-center border-b border-slate-700/60 overflow-hidden">
                {img.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-2.5 text-slate-400 group-hover:text-orange-400 transition-colors">
                    <div className="w-14 h-14 rounded-2xl bg-slate-800/80 shadow-md border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-orange-400 group-hover:border-orange-500/40 transition-all">
                      <ImageIcon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold text-slate-300">
                      이미지 준비 중 / 직접 삽입 슬롯 {idx + 1}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      public/images 폴더에 이미지 추가 가능
                    </span>
                  </div>
                )}

                {/* Tag pill */}
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-bold rounded-lg bg-slate-900/90 backdrop-blur-sm text-orange-300 shadow-sm border border-slate-700/80">
                  {img.tag}
                </span>
              </div>

              {/* Caption */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-white text-base mb-1.5 group-hover:text-orange-300 transition-colors">
                    {img.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {img.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
