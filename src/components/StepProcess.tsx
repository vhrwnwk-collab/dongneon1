import React from "react";
import { MessageSquareText, SearchCheck, Hourglass, CreditCard, CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "카카오톡 문의",
    desc: "활동 지역과 계정 온도를 알려주세요.",
    detail: "스마트폰으로 간편하게 계정 온도와 주요 활동 지역만 남겨주시면 즉시 상담이 시작됩니다.",
    icon: MessageSquareText,
    badge: "1분 소요",
    color: "from-amber-500 to-orange-500",
  },
  {
    step: "02",
    title: "조건 확인",
    desc: "가능 여부와 정확한 대여료를 안내해요.",
    detail: "계정 상태를 검토한 후 진행 가능 여부와 당일 지급될 명확한 대여료를 투명하게 확정합니다.",
    icon: SearchCheck,
    badge: "사전 금액 확정",
    color: "from-orange-500 to-rose-500",
  },
  {
    step: "03",
    title: "24시간 계정 대여 진행",
    desc: "이용 범위와 주의사항 확인 후 24시간 계정 대여를 진행해요.",
    detail: "무리한 사용 없이 사전 약속된 이용 범위 내에서만 안전하게 24시간 동안 운영됩니다.",
    icon: Hourglass,
    badge: "24시간 준수",
    color: "from-blue-500 to-indigo-500",
  },
  {
    step: "04",
    title: "계정 대여 종료 및 실시간 정산",
    desc: "계정 대여 종료를 확인하고 실시간으로 정산해요.",
    detail: "24시간이 종료되면 완료 즉시 안내드리며, 지체 없이 협의된 대여료를 계좌로 입금해 드립니다.",
    icon: CreditCard,
    badge: "실시간 정산",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function StepProcess() {
  return (
    <section className="py-18 sm:py-24 bg-[#0d1424] border-y border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <span className="inline-block px-3.5 py-1 text-xs font-bold text-orange-400 bg-orange-950/60 border border-orange-500/30 rounded-full mb-3">
            EASY & FAST PROCESS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            복잡한 절차 없이
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              상담부터 정산까지
            </span>{" "}
            네 단계로 진행해요
          </h2>
          <p className="mt-3.5 text-slate-400 text-sm sm:text-base">
            어려운 설정이나 불필요한 서류 없이, 안내에 따라 편안하게 진행하시면 됩니다.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          {STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-[#131c31]/90 hover:bg-[#18233d] rounded-2xl p-6 border border-slate-700/60 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Step badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl sm:text-3xl font-black text-slate-600 group-hover:text-orange-400 transition-colors">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-slate-300 group-hover:border-orange-500/40 group-hover:text-orange-300">
                      {item.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <div className={`w-full h-full rounded-xl bg-gradient-to-tr ${item.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm font-semibold text-slate-200 mb-2 leading-snug">
                    {item.desc}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/50 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>동네온 안심 기준 준수</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Flow summary table */}
        <div className="mt-12 bg-[#090e1a] rounded-2xl p-6 sm:p-8 text-white border border-slate-800 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
            <div>
              <div className="text-xs text-orange-400 font-bold uppercase tracking-wider mb-1">
                SUMMARY TABLE
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                네 단계 진행 프로세스 요약표
              </h3>
            </div>
            <div className="text-xs text-slate-400">
              * 모든 과정은 1:1 전담 매니저가 실시간으로 케어합니다.
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="text-slate-400 border-b border-slate-800">
                  <th className="py-3 px-3 font-semibold">단계</th>
                  <th className="py-3 px-3 font-semibold">주요 내용</th>
                  <th className="py-3 px-3 font-semibold">고객 전달 정보</th>
                  <th className="py-3 px-3 font-semibold">보장 및 혜택</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-3.5 px-3 font-bold text-orange-400">01 카카오톡 문의</td>
                  <td className="py-3.5 px-3 text-white">초기 상담 및 접수</td>
                  <td className="py-3.5 px-3 text-slate-400">활동 지역, 계정 온도</td>
                  <td className="py-3.5 px-3 text-emerald-400 font-medium">1분 초간단 확인</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-3.5 px-3 font-bold text-orange-400">02 조건 확인</td>
                  <td className="py-3.5 px-3 text-white">가능 여부 및 금액 확정</td>
                  <td className="py-3.5 px-3 text-slate-400">세부 상태 체크</td>
                  <td className="py-3.5 px-3 text-emerald-400 font-medium">정확한 대여료 사전 고지</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-3.5 px-3 font-bold text-orange-400">03 24시간 대여</td>
                  <td className="py-3.5 px-3 text-white">안전 마케팅 집행</td>
                  <td className="py-3.5 px-3 text-slate-400">주의사항 및 가이드 숙지</td>
                  <td className="py-3.5 px-3 text-emerald-400 font-medium">정확히 24시간 후 자동 종료</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-3.5 px-3 font-bold text-orange-400">04 종료 및 정산</td>
                  <td className="py-3.5 px-3 text-white">대여 종료 및 실시간 입금</td>
                  <td className="py-3.5 px-3 text-slate-400">정산 받으실 계좌</td>
                  <td className="py-3.5 px-3 text-emerald-400 font-medium">기다림 없이 실시간 정산</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
