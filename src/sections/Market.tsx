import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';

const housingAge = [
  { era: 'Pre-1990 (35+ yrs)', clark: 41, vancouver: 40 },
  { era: 'Pre-2000', clark: 66, vancouver: 58 },
  { era: '1970s alone', clark: 12, vancouver: 18 },
];

const nationalMarket = [
  { year: '2025', value: 26.7 },
  { year: '2030f', value: 31.9 },
];

export default function Market() {
  return (
    <section id="market" className="py-20 px-5 bg-[#1a1a1a] text-[#f5f1ea]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10">
          <p className="section-num mb-3">02 — Market & Demand</p>
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight leading-[0.95]">
            Old houses. Wet climate.<br />Steady growth.
          </h2>
          <p className="mt-4 max-w-[640px] text-[15px] text-[#b8b4ac] leading-relaxed">
            Local fundamentals are well above average for this trade; the 2026 macro environment is below average.
            Net: feasible — but dollars are growing while units shrink (~4% fewer replacement units forecast for
            2026–27), so growth comes from taking share, not market expansion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h3 className="font-mono2 text-xs tracking-[0.2em] uppercase text-[#e99c1e] mb-2">The Clark County opportunity</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 mb-10">
              {[
                ['204,375', 'housing units in Clark County'],
                ['1993', 'median build year (Vancouver: 1988)'],
                ['550,000', 'population 2026 — +7,600/yr'],
                ['#2', 'fastest numeric growth in WA'],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="font-display text-3xl md:text-4xl font-semibold text-[#e99c1e]">{v}</p>
                  <p className="font-mono2 text-[10px] uppercase tracking-[0.12em] text-[#8a867e] mt-2 leading-relaxed">{l}</p>
                </div>
              ))}
            </div>

            <p className="font-mono2 text-[11px] uppercase tracking-[0.15em] text-[#8a867e] mb-4">
              Share of housing stock by age — %
            </p>
            <div className="h-[220px]">
              <ResponsiveContainer>
                <BarChart data={housingAge} barGap={4}>
                  <XAxis dataKey="era" tick={{ fill: '#8a867e', fontSize: 11, fontFamily: 'IBM Plex Mono' }} axisLine={{ stroke: '#3a3835' }} tickLine={false} />
                  <YAxis tick={{ fill: '#8a867e', fontSize: 11, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} unit="%" />
                  <Tooltip
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    contentStyle={{ background: '#262522', border: '1px solid #3a3835', borderRadius: 0, fontSize: 12, fontFamily: 'IBM Plex Mono' }}
                    labelStyle={{ color: '#f5f1ea' }}
                    itemStyle={{ color: '#e99c1e' }}
                  />
                  <Bar dataKey="clark" name="Clark County" fill="#e99c1e" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="vancouver" name="Vancouver" fill="#f4583d" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex gap-6 mt-3">
              <span className="font-mono2 text-[10px] uppercase tracking-[0.12em] text-[#e99c1e]">■ Clark County</span>
              <span className="font-mono2 text-[10px] uppercase tracking-[0.12em] text-[#f4583d]">■ Vancouver</span>
            </div>
            <p className="mt-5 text-sm text-[#b8b4ac] leading-relaxed max-w-[560px]">
              The 1970s–90s construction boom is hitting prime replacement age <em className="not-italic text-[#f5f1ea] font-medium">right now</em> — and
              much of it still carries original aluminum or builder-grade windows.
            </p>
          </div>

          <div className="space-y-10 md:border-l md:border-[#3a3835] md:pl-10">
            <div>
              <h3 className="font-mono2 text-xs tracking-[0.2em] uppercase text-[#e99c1e] mb-4">Climate = built-in sales pitch</h3>
              <ul className="space-y-3 text-sm text-[#b8b4ac] leading-relaxed">
                <li><span className="text-[#f5f1ea] font-semibold">36–43 in.</span> of rain per year; a ~9-month wet season</li>
                <li><span className="text-[#f5f1ea] font-semibold">4,400+</span> heating degree days</li>
                <li>Moisture drives the top triggers: rot, failed seals, condensation between panes</li>
                <li>Efficient windows = 52% → 68% of revenue by 2031. Table stakes, not upsell</li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono2 text-xs tracking-[0.2em] uppercase text-[#e99c1e] mb-4">US doors & windows market ($B)</h3>
              <div className="h-[130px]">
                <ResponsiveContainer>
                  <BarChart data={nationalMarket}>
                    <XAxis dataKey="year" tick={{ fill: '#8a867e', fontSize: 11, fontFamily: 'IBM Plex Mono' }} axisLine={{ stroke: '#3a3835' }} tickLine={false} />
                    <YAxis hide domain={[0, 36]} />
                    <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ background: '#262522', border: '1px solid #3a3835', fontSize: 12, fontFamily: 'IBM Plex Mono' }} itemStyle={{ color: '#e99c1e' }} />
                    <ReferenceLine y={0} stroke="#3a3835" />
                    <Bar dataKey="value" name="$B" radius={[2, 2, 0, 0]}>
                      <Cell fill="#807d7a" />
                      <Cell fill="#e99c1e" />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-[#8a867e] mt-3 leading-relaxed">
                3.0% CAGR to $31.9B by 2030 (MarketsandMarkets). Avg. project ~$14,000; $450–$1,500 per window (HIRI 2025).
                But prime window demand fell 5% in 2025 — each deal matters more.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 border border-[#3a3835] p-6 md:p-8">
          <h3 className="font-mono2 text-xs tracking-[0.2em] uppercase text-[#f4583d] mb-4">2026 headwinds & the seasonality play</h3>
          <div className="grid md:grid-cols-3 gap-8 text-sm leading-relaxed text-[#b8b4ac]">
            <p><span className="text-[#f5f1ea] font-semibold block mb-1">25C credit is gone.</span>
              The 30% federal energy credit (up to $600 for windows) expired Dec 31, 2025 under OBBBA. Clark Public Utilities rebates partially fill the gap.</p>
            <p><span className="text-[#f5f1ea] font-semibold block mb-1">Soft unit volumes.</span>
              Replacement units shrinking ~4% in both 2026 and 2027. Expect longer sales cycles and more price shoppers.</p>
            <p><span className="text-[#f5f1ea] font-semibold block mb-1">Use the wet season.</span>
              Installs peak Apr–Jun and Sep–Oct. Market hard Nov–Feb when drafts and fogged glass are most visible; install Mar–Oct. A fall 2026 launch fills the pipeline before the spring rush.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
