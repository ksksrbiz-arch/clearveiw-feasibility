const priorities = [
  { n: 1, a: 'Obtain WA L&I registration; display number site-wide before advertising', p: 'Critical — legal', e: 'Days (external)', hot: true },
  { n: 2, a: 'Fix title tag and H1 with “window replacement Vancouver WA” keywords', p: 'High', e: '1 hour', hot: false },
  { n: 3, a: 'Buy correctly-spelled domains + redirect to primary', p: 'High', e: '1 hour', hot: false },
  { n: 4, a: 'Claim Google Business Profile; launch review generation', p: 'High', e: 'Ongoing', hot: false },
  { n: 5, a: 'Resolve the brand-collision question (rebrand or defend)', p: 'High', e: 'Strategic decision', hot: false },
  { n: 6, a: 'Add hours, SMS, homepage form, “Licensed, bonded & insured”', p: 'Medium', e: 'Hours', hot: false },
];

const scores = [
  { area: 'Technical foundation', grade: 'Good', note: 'Fast Astro static build, GTM/GA4 + Cloudflare Analytics, responsive mobile with tap-to-call. Cold-cache TTFB ~9.7s — worth a retest, likely cold-start artifact.', tone: '#3f6b4f' },
  { area: 'Content & conversion', grade: 'Good', note: 'Dedicated pages per service and city, sticky phone CTA, low-friction estimate form with homeowner/builder toggle. Gaps: (564) area code reads spammy, no hours, no SMS, no homepage form.', tone: '#3f6b4f' },
  { area: 'SEO', grade: 'One critical fix', note: 'Strong JSON-LD, canonicals, sitemap — but the title tag is just “Clearveiw Windows” and the H1 carries no keyword. A one-hour fix with outsized local ranking impact.', tone: '#e99c1e' },
  { area: 'Trust signals', grade: 'Legal exposure', note: 'Footer says “registration pending.” Under RCW 18.27.120 a website is advertising — no paid ads until the number is issued and displayed site-wide. Reviews page is deliberately empty; no insurance/bonding mention.', tone: '#e1654f' },
  { area: 'Brand', grade: 'High risk', note: '“ClearView” collides with Clearview Glass Co. in Everett, WA (same state, adjacent trade). The “clearveiw” domain leaks word-of-mouth traffic. Rebrand at month one is trivial; at month eighteen it is not.', tone: '#e1654f' },
];

export default function Audit() {
  return (
    <section id="audit" className="py-20 px-5 bg-[#ece0c6]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <p className="section-num mb-3">06 — Website & Brand Audit</p>
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight leading-[0.95]">
            A solid site with<br />one legal gap.
          </h2>
          <p className="mt-4 max-w-[640px] text-[15px] text-[#4a4742] leading-relaxed">
            windowsbyclearveiw.com is technically solid and unusually complete for a startup — but one compliance gap
            must be fixed before any advertising, and a brand/domain problem threatens long-term value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <div className="space-y-0">
            {scores.map((s, i) => (
              <div key={s.area} className={`py-5 ${i !== 0 ? 'border-t border-black/10' : ''}`}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-semibold text-[15px]">{s.area}</h3>
                  <span className="font-mono2 text-[11px] uppercase tracking-[0.12em] shrink-0" style={{ color: s.tone }}>{s.grade}</span>
                </div>
                <p className="text-sm text-[#4a4742] mt-1.5 leading-relaxed">{s.note}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="font-mono2 text-xs tracking-[0.2em] uppercase text-[#807d7a] mb-4">Priority action list</h3>
            <table className="tbl w-full border border-black/10 bg-[#f5f1ea]">
              <thead>
                <tr><th>#</th><th>Action</th><th>Priority</th><th>Effort</th></tr>
              </thead>
              <tbody>
                {priorities.map((r) => (
                  <tr key={r.n} className={r.hot ? 'bg-[#e1654f]/10' : ''}>
                    <td className="font-display font-semibold text-lg">{r.n}</td>
                    <td>{r.a}</td>
                    <td className={`font-mono2 text-[12px] whitespace-nowrap ${r.hot ? 'text-[#e1654f] font-semibold' : ''}`}>{r.p}</td>
                    <td className="font-mono2 text-[12px] text-[#807d7a] whitespace-nowrap">{r.e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="font-mono2 text-[11px] text-[#807d7a] mt-4 leading-relaxed">
              Fix items 1–4 within the first 30 days; decide item 5 before spending a dollar on brand-building.
              Minimum regardless: secure all spelling variants of the domain.
            </p>
          </div>
        </div>

        <div className="border-[2px] border-[#1a1a1a] bg-[#f5f1ea] p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center">
          <p className="font-display text-2xl font-semibold md:w-64 shrink-0 leading-tight">Audit verdict</p>
          <p className="text-sm leading-relaxed text-[#4a4742]">
            A better-than-average startup website undermined by an advertising-compliance gap and a weak brand
            foundation. The one-hour SEO fixes (title tag → “Window Replacement in Vancouver, WA | [Brand]”, H1 with
            “window replacement Vancouver WA”) are the highest-leverage on-page changes available.
          </p>
        </div>
      </div>
    </section>
  );
}
