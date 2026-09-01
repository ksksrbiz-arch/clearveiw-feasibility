import { actionPlan } from '@/data/report';

export default function Plan() {
  return (
    <section id="plan" className="py-20 px-5 bg-[#ece0c6]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <p className="section-num mb-3">09 — 90-Day Action Plan</p>
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight leading-[0.95]">
            Ninety days<br />to a running engine.
          </h2>
          <p className="mt-4 max-w-[640px] text-[15px] text-[#4a4742] leading-relaxed">
            Sequenced for an October 2026 launch. The cardinal rule: no advertising of any kind — website, yard signs,
            vehicle wrap, Google profile — until the L&amp;I registration number is in hand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {actionPlan.map((p, i) => (
            <div key={p.phase} className="bg-[#f5f1ea] border-[2px] border-[#1a1a1a] flex flex-col">
              <div className="p-6 border-b-[2px] border-[#1a1a1a]" style={{ background: ['#e99c1e', '#e1654f', '#f4583d'][i] }}>
                <p className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-[#1a1a1a]/70">{p.phase}</p>
                <h3 className="font-display text-2xl font-semibold text-[#1a1a1a] mt-1">{p.title}</h3>
                <p className="font-mono2 text-[11px] text-[#1a1a1a]/70 mt-1">{p.note}</p>
              </div>
              <ol className="p-6 space-y-4 flex-1">
                {p.steps.map((st, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed text-[#4a4742]">
                    <span className="font-mono2 text-[11px] text-[#807d7a] shrink-0 mt-0.5">{i === 0 ? j + 1 : i === 1 ? j + 6 : j + 10}</span>
                    {st}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#1a1a1a] text-[#f5f1ea] p-6 md:p-10">
          <p className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-[#e99c1e] mb-4">Success criteria at Day 90</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {[
              'Fully compliant: registered, bonded, insured, RRP-certified',
              'CPU Contractor Network member',
              'GBP live with 15+ reviews',
              'Brand / domain corrected',
              'First jobs at ≥38% gross margin',
              'Documented path to Base-scenario ramp',
            ].map((c) => (
              <p key={c} className="font-mono2 text-[11px] leading-relaxed text-[#b8b4ac] border-t border-[#3a3835] pt-3">{c}</p>
            ))}
          </div>
          <p className="mt-8 text-sm text-[#b8b4ac] leading-relaxed max-w-[720px]">
            Day-90 gate review: if ≥3 completed jobs, ≥10 reviews, and pipeline ≥$40k — proceed with sub-crew recruiting
            for months 5–6 per the Base scenario. If not: hold Conservative spending and fix lead flow before any hire.
          </p>
        </div>
      </div>
    </section>
  );
}
