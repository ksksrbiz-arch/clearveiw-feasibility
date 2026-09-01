import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell, ReferenceLine } from 'recharts';
import { difficultyDims, risks } from '@/data/report';

function RiskTooltip({ active, payload }: { active?: boolean; payload?: { payload: (typeof risks)[number] }[] }) {
  if (!active || !payload?.length) return null;
  const r = payload[0].payload;
  return (
    <div className="bg-[#f5f1ea] border-[2px] border-[#1a1a1a] p-4 max-w-[260px]">
      <p className="font-semibold text-sm">{r.name}</p>
      <p className="font-mono2 text-[11px] text-[#807d7a] mt-1">Likelihood {r.likelihood}/10 · Impact {r.impact}/10</p>
      <p className="text-[12px] text-[#4a4742] mt-2 leading-relaxed"><span className="font-semibold">Mitigation:</span> {r.mit}</p>
    </div>
  );
}

export default function Risk() {
  return (
    <section id="risk" className="py-20 px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <p className="section-num mb-3">08 — Difficulty Scale & Risk Matrix</p>
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight leading-[0.95]">
            5.5/10. Moderate —<br />for a hands-on owner.
          </h2>
          <p className="mt-4 max-w-[640px] text-[15px] text-[#4a4742] leading-relaxed">
            A well-trodden, legally accessible business with validated local demand and a clear competitive gap. It is
            not easy: success hinges on sales execution and installation quality control. For a passive owner, the
            difficulty rises to 7–8.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          <div>
            <h3 className="font-mono2 text-xs tracking-[0.2em] uppercase text-[#807d7a] mb-6">Difficulty by dimension — 1 trivial, 10 extremely hard</h3>
            <div className="space-y-0">
              {difficultyDims.map((d, i) => (
                <div key={d.dim} className={`py-4 ${i !== 0 ? 'border-t border-black/10' : ''}`}>
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <p className="font-semibold text-[15px]">{d.dim}</p>
                    <p className="font-display text-xl font-semibold shrink-0" style={{ color: d.score >= 7 ? '#e1654f' : d.score >= 5 ? '#e99c1e' : '#3f6b4f' }}>
                      {d.score}<span className="text-sm text-[#807d7a]">/10</span>
                    </p>
                  </div>
                  <div className="flex gap-[3px] mb-2">
                    {Array.from({ length: 10 }).map((_, j) => (
                      <div
                        key={j}
                        className="h-[10px] flex-1"
                        style={{
                          background: j < Math.round(d.score)
                            ? d.score >= 7 ? '#e1654f' : d.score >= 5 ? '#e99c1e' : '#3f6b4f'
                            : 'rgba(0,0,0,0.08)',
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-[13px] text-[#4a4742] leading-relaxed">{d.why}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono2 text-xs tracking-[0.2em] uppercase text-[#807d7a] mb-6">Risk matrix — hover a point for the mitigation</h3>
            <div className="h-[480px] border-[2px] border-[#1a1a1a] bg-[#ece0c6] p-4">
              <ResponsiveContainer>
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                  <CartesianGrid stroke="rgba(0,0,0,0.1)" />
                  <XAxis
                    type="number" dataKey="likelihood" domain={[0, 10]} name="Likelihood"
                    tick={{ fill: '#807d7a', fontSize: 11, fontFamily: 'IBM Plex Mono' }}
                    label={{ value: 'LIKELIHOOD →', position: 'insideBottom', offset: -8, fill: '#807d7a', fontSize: 10, fontFamily: 'IBM Plex Mono', letterSpacing: 3 }}
                    axisLine={{ stroke: '#1a1a1a' }} tickLine={false}
                  />
                  <YAxis
                    type="number" dataKey="impact" domain={[0, 10]} name="Impact"
                    tick={{ fill: '#807d7a', fontSize: 11, fontFamily: 'IBM Plex Mono' }}
                    label={{ value: 'IMPACT →', angle: -90, position: 'insideLeft', fill: '#807d7a', fontSize: 10, fontFamily: 'IBM Plex Mono', letterSpacing: 3 }}
                    axisLine={{ stroke: '#1a1a1a' }} tickLine={false}
                  />
                  <ReferenceLine x={5} stroke="rgba(0,0,0,0.2)" strokeDasharray="4 4" />
                  <ReferenceLine y={5} stroke="rgba(0,0,0,0.2)" strokeDasharray="4 4" />
                  <Tooltip content={<RiskTooltip />} cursor={{ strokeDasharray: '3 3', stroke: '#807d7a' }} />
                  <Scatter data={risks} isAnimationActive={false}>
                    {risks.map((r) => {
                      const severity = r.likelihood * r.impact;
                      return (
                        <Cell
                          key={r.name}
                          fill={severity >= 55 ? '#e1654f' : severity >= 30 ? '#e99c1e' : '#3f6b4f'}
                          r={severity >= 55 ? 10 : severity >= 30 ? 8 : 6}
                        />
                      );
                    })}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </div>
            <div className="flex gap-5 mt-3">
              <span className="font-mono2 text-[10px] uppercase tracking-[0.12em] text-[#e1654f]">● Watch closely</span>
              <span className="font-mono2 text-[10px] uppercase tracking-[0.12em] text-[#e99c1e]">● Manage actively</span>
              <span className="font-mono2 text-[10px] uppercase tracking-[0.12em] text-[#3f6b4f]">● Lower priority</span>
            </div>
            <p className="font-mono2 text-[11px] text-[#807d7a] mt-4 leading-relaxed">
              The three that actually hurt founders: unregistered advertising, skipping RRP on pre-1978 homes, and botching sales-tax treatment — all cheap to do right, expensive to do wrong.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
