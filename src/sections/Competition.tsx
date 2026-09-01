import { priceBands } from '@/data/report';

const LO = 250, HI = 1350;
const pct = (v: number) => ((v - LO) / (HI - LO)) * 100;

export default function Competition() {
  return (
    <section id="competition" className="py-20 px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <p className="section-num mb-3">05 — Competitive Landscape & Positioning</p>
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight leading-[0.95]">
            The middle is<br />the least crowded ground.
          </h2>
          <p className="mt-4 max-w-[640px] text-[15px] text-[#4a4742] leading-relaxed">
            Incumbents cluster at the premium and value extremes. The gap — quality vinyl at fair prices with genuine
            local accountability — is where the launch should live. Most mid-market locals sell roughly the same Milgard
            product in the $500–$925 range, so competition is fought on trust, responsiveness and reviews — not product.
          </p>
        </div>

        <div className="bg-[#1a1a1a] p-6 md:p-10 mb-14">
          <h3 className="font-mono2 text-xs tracking-[0.2em] uppercase text-[#e99c1e] mb-8">Installed price per window — Vancouver, WA competitive set</h3>
          <div className="space-y-5">
            {priceBands.map((b) => (
              <div key={b.name} className="grid grid-cols-[160px_1fr_110px] items-center gap-3">
                <div>
                  <p className={`font-mono2 text-[11px] leading-tight ${b.highlight ? 'text-[#f4583d] font-semibold' : 'text-[#b8b4ac]'}`}>{b.name}</p>
                  <p className="font-mono2 text-[10px] text-[#6b6862]">{b.type}</p>
                </div>
                <div className="relative h-7">
                  <div className="absolute inset-y-0 left-0 right-0 my-auto h-[2px] bg-[#3a3835]" />
                  <div
                    className={`absolute top-0 bottom-0 ${b.highlight ? 'bg-[#f4583d]' : 'bg-[#807d7a]'} flex items-center`}
                    style={{ left: `${pct(b.lo)}%`, width: `${pct(b.hi) - pct(b.lo)}%` }}
                  >
                    {b.highlight && <span className="font-mono2 text-[9px] uppercase tracking-[0.1em] text-white px-2 whitespace-nowrap">own this band</span>}
                  </div>
                </div>
                <p className={`font-mono2 text-[11px] text-right ${b.highlight ? 'text-[#f4583d]' : 'text-[#8a867e]'}`}>${b.lo}–${b.hi}</p>
              </div>
            ))}
            <div className="grid grid-cols-[160px_1fr_110px] gap-3 pt-2">
              <div />
              <div className="flex justify-between font-mono2 text-[10px] text-[#6b6862]">
                <span>$250</span><span>$600</span><span>$900</span><span>$1,350</span>
              </div>
              <div />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          <div>
            <h3 className="font-display text-2xl font-semibold mb-5">Five ways to differentiate</h3>
            <ol className="space-y-4">
              {[
                ['Own the $600–$900 band with transparent pricing.', 'Publish per-window ranges on the website. None of the majors do this; it converts against in-home-sales competitors and pre-qualifies leads.'],
                ['“The owner answers and installs.”', 'Personal accountability is the one asset no franchise can copy. Make it the core brand message.'],
                ['Review velocity as a weapon.', 'Earning 5–10 reviews/month reaches a credible 60–100 within year one — enough to win the local-search shortlist.'],
                ['Speed and clarity in the sale.', 'Same-day callback, next-day estimate, written fixed quote — direct contrast to the high-pressure in-home close.'],
                ['Milgard-line product without the premium wrapper.', 'The region’s trusted brand at mid-market pricing removes the product objection.'],
              ].map(([t, d], i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="font-mono2 text-[11px] text-[#f4583d] mt-1 shrink-0">0{i + 1}</span>
                  <div>
                    <p className="font-semibold text-[15px]">{t}</p>
                    <p className="text-sm text-[#4a4742] mt-0.5 leading-relaxed">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="font-display text-2xl font-semibold mb-5">Honest assessment</h3>
            <p className="text-sm text-[#4a4742] leading-relaxed">
              Competition is the second-hardest dimension after sales volume. Renewal by Andersen and DaBella outspend a
              startup 50-to-1 in local advertising, and LSA/Maps placement initially favors review-rich incumbents.
            </p>
            <p className="text-sm text-[#4a4742] leading-relaxed mt-4">
              The counter: Vancouver–Portland is a growing metro with thousands of eligible homes per year; window
              replacement is a considered purchase where homeowners collect 2–3 quotes; and the mid-market is fragmented
              across look-alike local dealers with mediocre digital execution. A focused, review-obsessed operator can
              realistically capture <span className="font-semibold text-[#1a1a1a]">10–15 jobs/month within 12–18 months</span> without
              taking meaningful share from any single competitor.
            </p>
            <div className="mt-6 border-l-2 border-[#3f6b4f] pl-4">
              <p className="font-mono2 text-[11px] uppercase tracking-[0.15em] text-[#3f6b4f] mb-1">Positioning verdict</p>
              <p className="text-sm leading-relaxed">Viable — provided the brand stays disciplined in the $600–$900 mid-market, publishes pricing, and treats review generation as an operational process rather than a hope.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
