const stats = [
  { k: 'Launch cost (all-in)', v: '$33–75k' },
  { k: 'Average job ticket', v: '$9,000' },
  { k: 'Gross margin', v: '38–42%' },
  { k: 'Year-1 net profit', v: '$33–61.5k' },
  { k: 'Cash trough', v: '–$18 to –$28k' },
  { k: 'Overall difficulty', v: '5.5/10' },
];

export default function Hero() {
  return (
    <section id="verdict" className="pt-32 pb-20 px-5 dust">
      <div className="max-w-[1200px] mx-auto">
        <p className="section-num mb-6">Business Feasibility Report — Owner-Operator Window Replacement</p>
        <h1 className="font-display font-black leading-[0.95] text-[13vw] md:text-[7.5rem] tracking-tight">
          Clearveiw<br />Windows
        </h1>
        <div className="mt-8 flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <p className="font-display text-2xl md:text-3xl leading-snug max-w-[560px] font-light">
            Feasible — <span className="text-[#f4583d] font-semibold">with conditions.</span> A share-gain business in
            a market full of 30-year-old windows, not a rising-tide business. You will earn every job.
          </p>
          <p className="max-w-[420px] text-sm leading-relaxed text-[#4a4742]">
            Clark County holds ~204,000 housing units with a median build year of 1993 — tens of thousands of homes
            are hitting prime window-replacement age in a wet, 4,400-heating-degree-day climate that manufactures
            demand. Washington's no-exam, registration-based licensing keeps the barrier low. The offsets: 2026 is a
            soft national year, the federal 25C energy credit expired Dec 31, 2025, and entrenched competitors
            outspend any startup 50-to-1.
          </p>
        </div>

        <hr className="hr-rule mt-12" />
        <div className="grid grid-cols-2 md:grid-cols-6">
          {stats.map((s, i) => (
            <div
              key={s.k}
              className={`py-6 pr-4 ${i !== 0 ? 'md:border-l md:border-black/10 md:pl-4' : ''} ${i >= 2 ? 'border-t border-black/10 md:border-t-0' : ''}`}
            >
              <p className="font-mono2 text-[10px] tracking-[0.15em] uppercase text-[#807d7a] mb-2">{s.k}</p>
              <p className="font-display text-xl md:text-2xl font-semibold">{s.v}</p>
            </div>
          ))}
        </div>
        <hr className="thin-rule" />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className="font-mono2 text-xs tracking-[0.2em] uppercase text-[#f4583d] mb-5">Top 3 risks</h2>
            <ol className="space-y-5">
              {[
                ['Advertising without WA L&I registration — live on the site right now.',
                  'RCW 18.27.120 requires registration before advertising, with the number on all advertising. The site currently shows "registration pending." Working unregistered is a gross misdemeanor with $1,200–$10,000 fines.'],
                ['Brand and the "clearveiw" typo collision.',
                  '"ClearView" is a crowded national name; Clearview Glass Co. operates in Everett, WA — same state, adjacent trade. The misspelled domain leaks every word-of-mouth visit to the correct spelling. Rebrand at month one: trivial. At month eighteen: not.'],
                ['Year-one cash-flow trough.',
                  'The ramp bottoms out at roughly –$22k to –$28k around months 2–4, before peak-season revenue arrives. Launching without a $25,000+ reserve plus 30–50% job deposits is the most common way this plan dies.'],
              ].map(([t, d], i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-display text-3xl font-black text-[#f4583d] leading-none">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-[15px]">{t}</p>
                    <p className="text-sm text-[#4a4742] mt-1 leading-relaxed">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="font-mono2 text-xs tracking-[0.2em] uppercase text-[#3f6b4f] mb-5">Highest-leverage moves</h2>
            <ol className="space-y-5">
              {[
                ['Get fully compliant in the first 30 days.',
                  'L&I specialty registration, $15k bond, $1M/$2M GL, and EPA/WA RRP certification. Total cash: ~$1,000–$1,500 plus premiums. Compliance unlocks every marketing dollar.'],
                ['Win the acquisition economics.',
                  'Google LSA delivers customers at ~$233 vs ~$804 for non-branded paid search. Clark Public Utilities rebates of $6–$10/sq ft are a lead source, differentiator, and price offset that partially replaces the dead federal credit.'],
                ['Fix the brand and own the mid-market.',
                  'Publish transparent pricing in the $600–$900/window band on Milgard-line product; sell "the owner answers and installs" — the positioning gap neither premium franchises nor value chains can credibly fill.'],
              ].map(([t, d], i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-display text-3xl font-black text-[#3f6b4f] leading-none">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-[15px]">{t}</p>
                    <p className="text-sm text-[#4a4742] mt-1 leading-relaxed">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <p className="mt-12 font-mono2 text-xs text-[#807d7a] border-l-2 border-[#f4583d] pl-4">
          Planning discipline — budget to the Conservative case, hire to the Base case, treat Optimistic as upside.
          The difference between outcomes is sales execution and the timing of the sub-crew hire, not market demand.
        </p>
      </div>
    </section>
  );
}
