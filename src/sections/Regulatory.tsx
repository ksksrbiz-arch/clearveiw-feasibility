import { complianceBudget } from '@/data/report';

const steps = [
  {
    n: '01',
    title: 'Contractor registration (L&I, RCW 18.27)',
    body: 'Washington registers rather than licenses by exam. Specialty registration (glass/glazing) is enough for replacement-only work; go general for structural alterations or multi-trade subs. Specialty surety bond: $15,000. Insurance minimum $250k CSL — carry the $1M/$2M market standard. Renewal every 2 years (~$141–$150).',
    warn: 'RCW 18.27.120: registration required BEFORE advertising; the number must appear on all advertising, including the website. Unregistered work is a gross misdemeanor — $1,200–$10,000 fines.',
  },
  {
    n: '02',
    title: 'EPA / WA RRP lead-safe certification',
    body: 'Window replacement routinely disturbs paint, and ~40% of Vancouver homes are pre-1990 — a large share of target stock is pre-1978. Firm certification ~$300/5yrs plus at least one Certified Renovator per crew (8-hr course, $300–$500). Washington runs its own EPA-authorized state program.',
    warn: 'Fines can exceed $40,000 per violation per day. Budget before the first job, not after.',
  },
  {
    n: '03',
    title: 'Energy code compliance',
    body: '2021 WSEC-R requires replacement fenestration at U-factor ≤ 0.30; the 2024 WSEC tightens to ≤ 0.27 when effective. Only quote window lines with certified ratings at or below 0.30, and confirm suppliers can hit 0.27 so you are not stranded when the code flips. "Code-minimum and rebate-eligible" is a clean pitch.',
  },
  {
    n: '04',
    title: 'Local permits (Vancouver / Clark County)',
    body: 'Like-for-like, same-opening replacement is generally permit-exempt — most jobs fall here, fast and cheap. Permits are required for new, enlarged or relocated openings, window-to-door conversions, and egress changes. Confirm per address before quoting scope.',
  },
  {
    n: '05',
    title: 'Business licensing & taxes',
    body: 'Sequence: Secretary of State entity → WA Business License via DOR → UBI number (~$50+) → City of Vancouver endorsement. Custom construction is a retail activity in WA: collect retail sales tax (~8.7% in Vancouver) on the total contract price including labor and report under Retailing B&O.',
    warn: 'Forgetting the 8.7% means paying it out of your own margin. Build it into every quote.',
  },
];

export default function Regulatory() {
  return (
    <section id="regulatory" className="py-20 px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <p className="section-num mb-3">03 — Regulatory & Licensing Path</p>
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight leading-[0.95]">
            Low barrier.<br />High consequence.
          </h2>
          <p className="mt-4 max-w-[640px] text-[15px] text-[#4a4742] leading-relaxed">
            Washington is one of the easier states to get legal in — no trade exam — but strict about enforcement,
            advertising, lead safety and taxes. Fully compliant in 30–45 days for roughly the cost of one window
            install. None of this is optional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-14 gap-y-10">
          <div className="space-y-0">
            {steps.map((s, i) => (
              <div key={s.n} className={`flex gap-6 py-7 ${i !== 0 ? 'border-t border-black/10' : ''}`}>
                <span className="font-display text-4xl font-black text-[#e99c1e] leading-none w-14 shrink-0">{s.n}</span>
                <div>
                  <h3 className="font-semibold text-lg leading-snug">{s.title}</h3>
                  <p className="text-sm text-[#4a4742] mt-2 leading-relaxed">{s.body}</p>
                  {s.warn && (
                    <p className="mt-3 text-[13px] leading-relaxed bg-[#e1654f]/10 border-l-2 border-[#e1654f] px-4 py-3 text-[#7a2e20]">
                      {s.warn}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-mono2 text-xs tracking-[0.2em] uppercase text-[#807d7a] mb-4">Compliance checklist & budget</h3>
            <table className="tbl w-full border border-black/10 bg-white/60">
              <thead>
                <tr><th>Item</th><th>Est. cost</th><th>Timing</th></tr>
              </thead>
              <tbody>
                {complianceBudget.map((r) => (
                  <tr key={r.item}>
                    <td>{r.item}</td>
                    <td className="font-mono2 text-[13px] whitespace-nowrap">{r.cost}</td>
                    <td className="font-mono2 text-[13px] text-[#807d7a] whitespace-nowrap">{r.when}</td>
                  </tr>
                ))}
                <tr className="bg-[#1a1a1a] text-[#f5f1ea]">
                  <td className="font-semibold">Total cash to be legal</td>
                  <td className="font-mono2 text-[13px] text-[#e99c1e]">~$1,000–$1,500</td>
                  <td className="font-mono2 text-[13px]">30–45 days</td>
                </tr>
              </tbody>
            </table>
            <p className="font-mono2 text-[11px] text-[#807d7a] mt-3">+ bond & insurance premiums. New for 2026: the Homeowner Recovery Program (eff. Jul 1, 2026) creates claim exposure above the bond — carry real insurance.</p>

            <div className="mt-10 bg-[#3f6b4f] text-[#f5f1ea] p-6 md:p-8">
              <h3 className="font-mono2 text-xs tracking-[0.2em] uppercase text-[#cde3d4] mb-4">The 2026 incentive landscape — a real opportunity</h3>
              <p className="text-sm leading-relaxed text-[#dcebe1]">
                The federal 25C credit is gone (don't advertise it). But <span className="font-semibold text-white">Clark Public Utilities weatherization rebates</span> survive for electrically heated homes — and require CPU Contractor Network membership:
              </p>
              <div className="grid grid-cols-2 gap-4 mt-5">
                <div className="border border-[#5b8a6b] p-4">
                  <p className="font-display text-3xl font-semibold text-white">$6–8<span className="text-base text-[#cde3d4]">/sq ft</span></p>
                  <p className="font-mono2 text-[11px] uppercase tracking-[0.12em] text-[#cde3d4] mt-1">Windows & patio doors, U ≤ 0.30</p>
                </div>
                <div className="border border-[#5b8a6b] p-4">
                  <p className="font-display text-3xl font-semibold text-white">$10<span className="text-base text-[#cde3d4]">/sq ft</span></p>
                  <p className="font-mono2 text-[11px] uppercase tracking-[0.12em] text-[#cde3d4] mt-1">High-efficiency, U ≤ 0.22</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[#dcebe1] mt-5">
                At $6–$10 per square foot, a rebate knocks <span className="font-semibold text-white">$500–$1,500+</span> off a typical project — a genuine
                closing tool now that the federal credit is dead. Joining the CPU Contractor Network is one of the first business-development moves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
