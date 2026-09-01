import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceDot, Legend } from 'recharts';
import { revenueRamp, scenarios, months } from '@/data/report';

export default function Projection() {
  const [active, setActive] = useState(1); // Base default
  const s = scenarios[active];

  const plData = scenarios.map((sc) => ({
    name: sc.name,
    Materials: -sc.lines[0].value,
    Labor: -sc.lines[1].value,
    Marketing: -sc.lines[2].value,
    Compliance: -sc.lines[3].value,
    Overhead: -sc.lines[4].value,
    Net: sc.net,
  }));

  return (
    <section id="projection" className="py-20 px-5 bg-[#1a1a1a] text-[#f5f1ea]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <p className="section-num mb-3">07 — First-Year Profit Projection</p>
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight leading-[0.95]">
            Three ways<br />year one can go.
          </h2>
          <p className="mt-4 max-w-[640px] text-[15px] text-[#b8b4ac] leading-relaxed">
            Launch assumed October 2026. Average ticket $9,000, materials ~35% of revenue, 30% close rate on
            exclusive/LSA leads, marketing ramping $1.5k/mo → $5k/mo. All figures pre-owner's-salary — net profit is
            effectively Mark's compensation plus retained earnings.
          </p>
        </div>

        <div className="border border-[#3a3835] p-6 md:p-10 mb-12">
          <h3 className="font-mono2 text-xs tracking-[0.2em] uppercase text-[#e99c1e] mb-2">Monthly revenue ramp — $ thousands</h3>
          <p className="font-mono2 text-[11px] text-[#8a867e] mb-6">Months 1–8 follow the industry benchmark; months 9–12 model the PNW wet-season dip. The wet season builds the backlog; spring installs it.</p>
          <div className="h-[340px]">
            <ResponsiveContainer>
              <LineChart data={revenueRamp} margin={{ right: 20 }}>
                <CartesianGrid stroke="#2c2a26" vertical={false} />
                <XAxis dataKey="month" tick={{ fill: '#8a867e', fontSize: 11, fontFamily: 'IBM Plex Mono' }} axisLine={{ stroke: '#3a3835' }} tickLine={false} />
                <YAxis tick={{ fill: '#8a867e', fontSize: 11, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} unit="k" />
                <Tooltip
                  cursor={{ stroke: '#3a3835' }}
                  contentStyle={{ background: '#262522', border: '1px solid #3a3835', fontSize: 12, fontFamily: 'IBM Plex Mono' }}
                  labelStyle={{ color: '#f5f1ea' }}
                  formatter={(v: number, name: string) => [`$${v}k`, name]}
                />
                <Line type="monotone" dataKey="Optimistic" stroke="#f4583d" strokeWidth={2} dot={false} strokeDasharray="6 4" />
                <Line type="monotone" dataKey="Base" stroke="#e99c1e" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="Conservative" stroke="#807d7a" strokeWidth={2} dot={false} strokeDasharray="2 4" />
                <ReferenceDot x={months[7]} y={50} r={5} fill="#e99c1e" stroke="none" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-6 mt-4">
            {[['Optimistic — $450k/yr', '#f4583d'], ['Base — $300k/yr', '#e99c1e'], ['Conservative — $180k/yr', '#807d7a']].map(([l, c]) => (
              <span key={l} className="font-mono2 text-[10px] uppercase tracking-[0.12em]" style={{ color: c }}>■ {l}</span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-[240px_1fr] gap-10">
          <div className="flex md:flex-col gap-3">
            {scenarios.map((sc, i) => (
              <button
                key={sc.name}
                onClick={() => setActive(i)}
                className={`text-left border p-4 transition-colors ${active === i ? 'border-[#e99c1e] bg-[#26241f]' : 'border-[#3a3835] hover:border-[#6b6862]'}`}
              >
                <p className="font-mono2 text-[11px] uppercase tracking-[0.15em]" style={{ color: sc.color }}>{sc.name}</p>
                <p className="font-display text-3xl font-semibold mt-1">${sc.revenue}k</p>
                <p className="font-mono2 text-[11px] text-[#8a867e] mt-1">revenue / yr</p>
              </button>
            ))}
          </div>

          <div className="border border-[#3a3835] p-6 md:p-8">
            <div className="flex flex-wrap justify-between items-baseline gap-2 mb-6">
              <h3 className="font-display text-2xl font-semibold">{s.name} scenario — annual P&amp;L</h3>
              <p className="font-mono2 text-xs" style={{ color: s.color }}>Net ${s.net}k · {s.margin}% margin</p>
            </div>
            <table className="tbl w-full">
              <tbody>
                <tr>
                  <td className="font-semibold">Revenue</td>
                  <td className="font-mono2 text-[13px] text-right">${s.revenue.toLocaleString()},000</td>
                  <td className="font-mono2 text-[12px] text-right text-[#8a867e]">100%</td>
                </tr>
                {s.lines.map((l) => (
                  <tr key={l.label}>
                    <td className="text-[#b8b4ac]">{l.label}</td>
                    <td className="font-mono2 text-[13px] text-right text-[#e1654f]">(${Math.abs(l.value).toLocaleString()}k)</td>
                    <td className="font-mono2 text-[12px] text-right text-[#8a867e]">{((Math.abs(l.value) / s.revenue) * 100).toFixed(1)}%</td>
                  </tr>
                ))}
                <tr className="bg-[#26241f]">
                  <td className="font-semibold" style={{ color: s.color }}>Net profit</td>
                  <td className="font-mono2 text-sm text-right font-semibold" style={{ color: s.color }}>${s.net}k</td>
                  <td className="font-mono2 text-[12px] text-right" style={{ color: s.color }}>{s.margin}%</td>
                </tr>
              </tbody>
            </table>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                ['Monthly break-even', s.monthlyBE],
                ['Cumulative break-even', s.cumBE],
                ['Worst cash trough', s.trough],
                ['Trough timing', s.troughMonth],
              ].map(([k, v]) => (
                <div key={k} className="border border-[#3a3835] p-3">
                  <p className="font-mono2 text-[9px] uppercase tracking-[0.12em] text-[#8a867e]">{k}</p>
                  <p className="font-mono2 text-sm mt-1" style={{ color: s.color }}>{v}</p>
                </div>
              ))}
            </div>
            <p className="font-mono2 text-[11px] text-[#8a867e] mt-5 leading-relaxed">
              {active === 0 && 'Mark never adds a sub crew and caps near the solo-operator ceiling — survivable, proves the model rather than building wealth.'}
              {active === 1 && '1.5–2 jobs/week at ~$9k by peak season. Sub-crew addition drives the month 6–7 break-even; discipline on the $600–$900/window position is essential.'}
              {active === 2 && 'Requires ~50 completed jobs, CAC near the LSA benchmark (~$233), a functioning referral engine, and CPU rebate work. Achievable — but not the planning basis.'}
            </p>
          </div>
        </div>

        <div className="mt-12 border border-[#3a3835] p-6 md:p-10">
          <h3 className="font-mono2 text-xs tracking-[0.2em] uppercase text-[#e99c1e] mb-6">Cost mix across scenarios — $ thousands</h3>
          <div className="h-[260px]">
            <ResponsiveContainer>
              <PLChart data={plData} />
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-5 mt-4">
            {[['Materials', '#e1654f'], ['Labor', '#e99c1e'], ['Marketing', '#807d7a'], ['Compliance', '#5b8a6b'], ['Overhead', '#8a6f4d'], ['Net profit', '#3f6b4f']].map(([l, c]) => (
              <span key={l} className="font-mono2 text-[10px] uppercase tracking-[0.12em]" style={{ color: c }}>■ {l}</span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 border-l-2 border-[#e99c1e] pl-5">
            <p className="font-mono2 text-[11px] uppercase tracking-[0.15em] text-[#e99c1e] mb-2">Key assumptions</p>
            <p className="text-sm text-[#b8b4ac] leading-relaxed">
              Helper W-2 from month 1 (~$31/hr); registered, insured 1099 sub crew (~$100/opening) from month 6 in Base/Optimistic.
              Sales tax (~8.7%) collected on full contract price is pass-through, not revenue. Owner takes no fixed salary; net profit is pre-tax and pre-owner-draw.
            </p>
          </div>
          <div className="border-l-2 border-[#f4583d] pl-5">
            <p className="font-mono2 text-[11px] uppercase tracking-[0.15em] text-[#f4583d] mb-2">Planning rule</p>
            <p className="text-sm text-[#b8b4ac] leading-relaxed">Budget Conservative. Hire Base. Treat Optimistic as upside.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PLChart({ data }: { data: { name: string; Materials: number; Labor: number; Marketing: number; Compliance: number; Overhead: number; Net: number }[] }) {
  return (
    <BarChart data={data} barCategoryGap="35%">
      <CartesianGrid stroke="#2c2a26" vertical={false} />
      <XAxis dataKey="name" tick={{ fill: '#8a867e', fontSize: 11, fontFamily: 'IBM Plex Mono' }} axisLine={{ stroke: '#3a3835' }} tickLine={false} />
      <YAxis tick={{ fill: '#8a867e', fontSize: 11, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false} unit="k" />
      <Tooltip
        cursor={{ fill: 'rgba(255,255,255,0.05)' }}
        contentStyle={{ background: '#262522', border: '1px solid #3a3835', fontSize: 12, fontFamily: 'IBM Plex Mono' }}
        labelStyle={{ color: '#f5f1ea' }}
        formatter={(v: number, name: string) => [`$${v}k`, name]}
      />
      <Legend wrapperStyle={{ display: 'none' }} />
      <Bar dataKey="Materials" stackId="a" fill="#e1654f" />
      <Bar dataKey="Labor" stackId="a" fill="#e99c1e" />
      <Bar dataKey="Marketing" stackId="a" fill="#807d7a" />
      <Bar dataKey="Compliance" stackId="a" fill="#5b8a6b" />
      <Bar dataKey="Overhead" stackId="a" fill="#8a6f4d" />
      <Bar dataKey="Net" stackId="a" fill="#3f6b4f" radius={[2, 2, 0, 0]} />
    </BarChart>
  );
}
