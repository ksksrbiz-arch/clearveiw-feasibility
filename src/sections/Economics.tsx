import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { budgetItems, cacChannels } from '@/data/report';

const fmt = (v: number) => (v >= 1000 ? `$${(v / 1000).toFixed(v % 1000 ? 1 : 0)}k` : `$${v}`);

export default function Economics() {
  const [mode, setMode] = useState<'low' | 'high'>('low');
  const total = budgetItems.reduce((a, b) => a + b[mode], 0);

  return (
    <section id="economics" className="py-20 px-5 bg-[#ece0c6]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <p className="section-num mb-3">04 — Startup Budget & Unit Economics</p>
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight leading-[0.95]">
            $33k–$75k to open.<br />40% margin to stay open.
          </h2>
          <p className="mt-4 max-w-[640px] text-[15px] text-[#4a4742] leading-relaxed">
            The two questions that decide feasibility: how much cash to open the doors, and whether each job makes
            enough to keep them open. Anything under ~$33k of committed capital means no marketing reserve — and no
            marketing means no pipeline.
          </p>
        </div>

        <div className="bg-[#f5f1ea] border-[2px] border-[#1a1a1a] p-6 md:p-10 mb-14">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <h3 className="font-display text-2xl font-semibold">Where the launch money goes</h3>
              <p className="font-mono2 text-[11px] uppercase tracking-[0.15em] text-[#807d7a] mt-1">Lean owner-operator launch, Vancouver WA</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex border border-[#1a1a1a]">
                {(['low', 'high'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`font-mono2 text-[11px] uppercase tracking-[0.15em] px-4 py-2 transition-colors ${mode === m ? 'bg-[#1a1a1a] text-[#f5f1ea]' : 'hover:bg-black/5'}`}
                  >
                    {m === 'low' ? 'Lean' : 'Full'}
                  </button>
                ))}
              </div>
              <p className="font-display text-2xl font-semibold text-[#f4583d]">{fmt(total)}</p>
            </div>
          </div>
          <div className="h-[380px]">
            <ResponsiveContainer>
              <BarChart data={budgetItems.map((b) => ({ ...b, val: b[mode] }))} layout="vertical" margin={{ left: 10 }}>
                <XAxis type="number" tickFormatter={(v: number) => fmt(v)} tick={{ fill: '#807d7a', fontSize: 11, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="cat" width={190} tick={{ fill: '#1a1a1a', fontSize: 12, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} />
                <Tooltip
                  cursor={{ fill: 'rgba(0,0,0,0.04)' }}
                  contentStyle={{ background: '#1a1a1a', border: 'none', fontSize: 12, fontFamily: 'IBM Plex Mono', color: '#f5f1ea' }}
                  formatter={(v: number, _n: string, p: { payload?: { note?: string } }) => [fmt(v), p?.payload?.note || 'Cost']}
                />
                <Bar dataKey="val" radius={[0, 2, 2, 0]} barSize={22}>
                  {budgetItems.map((b, i) => (
                    <Cell key={b.cat} fill={i === 0 || i === 9 ? '#f4583d' : '#e99c1e'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="font-mono2 text-[11px] text-[#807d7a] mt-4">
            Hard launch subtotal $23.3k–$55.1k + 3-month reserve $10–20k. First-year investment of $80–150k supports a $250–500k revenue year.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          <div>
            <h3 className="font-display text-2xl font-semibold mb-1">Cost to win one customer</h3>
            <p className="font-mono2 text-[11px] uppercase tracking-[0.15em] text-[#807d7a] mb-6">Blended cost per customer by channel, 2026</p>
            <div className="h-[250px]">
              <ResponsiveContainer>
                <BarChart data={cacChannels} layout="vertical" margin={{ left: 10 }}>
                  <XAxis type="number" tickFormatter={(v: number) => `$${v}`} tick={{ fill: '#807d7a', fontSize: 11, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} />
                  <YAxis type="category" dataKey="name" width={150} tick={{ fill: '#1a1a1a', fontSize: 12, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} />
                  <Tooltip
                    cursor={{ fill: 'rgba(0,0,0,0.04)' }}
                    contentStyle={{ background: '#1a1a1a', border: 'none', fontSize: 12, fontFamily: 'IBM Plex Mono', color: '#f5f1ea' }}
                    formatter={(v: number, _n: string, p: { payload?: { note?: string } }) => [`$${v}/customer`, p?.payload?.note]}
                  />
                  <Bar dataKey="cost" radius={[0, 2, 2, 0]} barSize={20}>
                    {cacChannels.map((c) => (
                      <Cell key={c.name} fill={c.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-[#4a4742] leading-relaxed mt-5">
              The single most important CAC fact: at a $9,000 ticket and 40% margin, <span className="font-semibold text-[#1a1a1a]">LSA's ~$233 consumes ~6% of gross profit</span>;
              non-branded Google Ads' ~$804 consumes 22%. Weight launch marketing to LSA, Google Business Profile and referral.
            </p>
          </div>

          <div>
            <h3 className="font-display text-2xl font-semibold mb-6">Anatomy of a $9,000 job</h3>
            <div className="space-y-0">
              {[
                ['$9,000', 'Average ticket — 10–15 windows at $600–$900 installed (PNW runs 15–30% above national). One to two days on site at 8–12 inserts/day.', '#1a1a1a', 100],
                ['–$3,150', 'Materials (~35%). Milgard-line vinyl keeps the product objection off the table.', '#e1654f', 35],
                ['–$2,250', 'Labor & overhead share (~25%). Owner-operator install keeps the $100–$400/window labor cost as owner margin.', '#e99c1e', 25],
                ['≈ $3,600', 'Gross profit per job at 40% margin. ~10 jobs/month covers $15–20k of overhead plus owner draw — reachable by Q4 at 1.5–2 jobs/week.', '#3f6b4f', 40],
              ].map(([v, d, c, w], i) => (
                <div key={i} className="py-4 border-t border-black/10">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-3xl font-semibold w-32 shrink-0" style={{ color: c as string }}>{v as string}</span>
                    <p className="text-sm text-[#4a4742] leading-relaxed">{d as string}</p>
                  </div>
                  <div className="mt-2 h-[6px] bg-black/10 w-full">
                    <div className="h-full" style={{ width: `${w}%`, background: c as string }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="font-mono2 text-[11px] text-[#807d7a] mt-5 leading-relaxed">
              Labor models: W-2 installer $31–37/hr (≈$25–45/window loaded) scales to $500–800k/yr with one crew; 1099 subs at $75–150/opening are cheapest but L&I holds GCs liable for unregistered subs — not recommended at launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
