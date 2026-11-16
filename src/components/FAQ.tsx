"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircleQuestion } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "모든 계정이 대여 가능한가요?",
    a: "계정 온도와 활동 지역, 계정 상태를 확인한 뒤 진행 가능 여부를 안내드립니다.",
  },
  {
    q: "대여료는 언제 확정되나요?",
    a: "상담에서 계정 조건을 확인한 뒤 최종 대여료와 정산 시점을 안내드립니다.",
  },
  {
    q: "24시간 이후에도 다시 가능한가요?",
    a: "재진행 가능 여부와 주기는 계정 상태 및 운영 조건에 따라 상담을 통해 확인합니다.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // 첫 번째 항목 기본 열림

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-18 sm:py-24 bg-[#0d1424] border-t border-slate-800/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 text-xs font-bold border border-slate-700/60 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-orange-400" />
            <span>문의 전 확인해 주세요</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            자주 묻는 질문
          </h2>
          <p className="mt-2.5 text-sm text-slate-400">
            가장 많이 질문하시는 궁금증들을 미리 정리해 두었습니다.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-orange-500/50 bg-[#151f38] shadow-lg shadow-black/20"
                    : "border-slate-800 bg-[#11182c]/90 hover:border-slate-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-5 sm:px-6 py-4.5 sm:py-5 flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center justify-center text-xs shrink-0 font-extrabold">
                      Q
                    </span>
                    <span>{item.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-orange-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-700/40 pl-14">
                    <p className="bg-[#0c1220]/70 p-3.5 rounded-xl border border-slate-800 text-slate-300">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Small tip card */}
        <div className="mt-8 p-4.5 rounded-xl bg-[#11182c]/80 border border-slate-800 flex items-center gap-3 text-xs text-slate-400">
          <MessageCircleQuestion className="w-5 h-5 text-orange-400 shrink-0" />
          <span>
            이 외에 더 궁금한 점이 있으신가요? 카카오톡 1:1 채팅으로 언제든 편하게 물어보세요.
          </span>
        </div>
      </div>
    </section>
  );
}
