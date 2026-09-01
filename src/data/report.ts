// All figures sourced from the Clearveiw Windows Feasibility Report (Sept 2026)

export const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

export const revenueRamp = months.map((m, i) => ({
  month: m,
  n: i + 1,
  Conservative: [0, 5, 10, 15, 20, 20, 25, 25, 15, 15, 15, 15][i],
  Base: [0, 5, 15, 20, 25, 40, 45, 50, 25, 25, 25, 25][i],
  Optimistic: [0, 10, 20, 30, 40, 50, 55, 60, 40, 45, 45, 55][i],
}));

export const scenarios = [
  {
    name: 'Conservative',
    revenue: 180,
    net: 33,
    margin: 18.3,
    monthlyBE: 'Months 8–9',
    cumBE: 'Month 12',
    trough: '–$28k',
    troughMonth: 'Month 4',
    color: '#807d7a',
    lines: [
      { label: 'Materials (35%)', value: -63 },
      { label: 'Labor — helper only', value: -30 },
      { label: 'Marketing', value: -24 },
      { label: 'Insurance & compliance', value: -12 },
      { label: 'Vehicle & overhead', value: -18 },
    ],
  },
  {
    name: 'Base',
    revenue: 300,
    net: 41,
    margin: 13.7,
    monthlyBE: 'Months 6–7',
    cumBE: 'Month 10',
    trough: '–$22k',
    troughMonth: 'Month 3',
    color: '#e99c1e',
    lines: [
      { label: 'Materials (35%)', value: -105 },
      { label: 'Labor — helper + sub crew', value: -80 },
      { label: 'Marketing', value: -36 },
      { label: 'Insurance & compliance', value: -14 },
      { label: 'Vehicle & overhead', value: -24 },
    ],
  },
  {
    name: 'Optimistic',
    revenue: 450,
    net: 61.5,
    margin: 13.7,
    monthlyBE: 'Months 5–6',
    cumBE: 'Month 8',
    trough: '–$18k',
    troughMonth: 'Months 2–3',
    color: '#f4583d',
    lines: [
      { label: 'Materials (35%)', value: -157.5 },
      { label: 'Labor — helper + 2 sub slots', value: -135 },
      { label: 'Marketing', value: -50 },
      { label: 'Insurance & compliance', value: -16 },
      { label: 'Vehicle & overhead', value: -30 },
    ],
  },
];

export const cacChannels = [
  { name: 'Referral', cost: 80, note: 'Close rate 50–70% — build from job #1', color: '#3f6b4f' },
  { name: 'Google LSA', cost: 233, note: 'Best paid channel — use first', color: '#e99c1e' },
  { name: 'Facebook / social', cost: 400, note: 'Retargeting only', color: '#807d7a' },
  { name: 'Angi exclusive', cost: 655, note: 'Marginal — test small', color: '#807d7a' },
  { name: 'Google Ads (non-brand)', cost: 804, note: 'Use sparingly', color: '#e1654f' },
];

export const budgetItems = [
  { cat: 'Used cargo van/truck', low: 15000, high: 35000, note: 'Biggest single line item' },
  { cat: 'Hand & power tools', low: 2000, high: 5000, note: 'Saws, levels, caulk, safety gear' },
  { cat: 'Aluminum brake', low: 1500, high: 3000, note: 'Exterior trim / coil wrap' },
  { cat: 'Ladders & scaffolding', low: 800, high: 2000, note: '' },
  { cat: 'Vehicle wrap + launch marketing', low: 1500, high: 4000, note: 'Wrap doubles as billboard' },
  { cat: 'L&I registration', low: 150, high: 150, note: 'WA specialty contractor' },
  { cat: 'Surety bond premium ($15k bond)', low: 150, high: 500, note: '1–3%/yr typical' },
  { cat: 'GL insurance (year 1)', low: 2000, high: 5000, note: '$1M/$2M market standard' },
  { cat: 'RRP lead certification', low: 200, high: 400, note: 'Required for pre-1978 homes' },
  { cat: '3-month operating reserve', low: 10000, high: 20000, note: 'Personal + business burn' },
];

export const difficultyDims = [
  { dim: 'Sales & marketing', score: 7, why: 'Hardest part. Incumbents outspend a startup 50–100:1; winning depends on reviews, LSA and referral flywheel not yet built.' },
  { dim: 'Operations & install quality', score: 6, why: 'Leaks and callbacks kill window companies. Sub-crew management, lead-safe practices and energy-code product selection add complexity.' },
  { dim: 'Competition', score: 6, why: 'Vancouver is contested at the premium and value ends; the $600–$900 mid-market gap is genuine but pricing power is capped.' },
  { dim: 'Seasonality & cash flow', score: 5, why: 'Real Q4/Q1 dip and weather-delayed installs; a winter launch hits the cash trough before peak-season revenue arrives.' },
  { dim: 'Licensing & compliance', score: 4, why: 'Registration-based, no trade exam. The burden is sequencing and discipline, not qualification.' },
  { dim: 'Capital requirements', score: 4, why: '$33k–$75k all-in is modest for a trades business; the month-3/4 trough must be pre-funded.' },
];

export const risks = [
  { name: 'Advertising before L&I registration', likelihood: 5, impact: 8.5, mit: 'Register before any marketing; number on all ads, site, wrap.' },
  { name: 'RRP lead-paint violation (pre-1978)', likelihood: 5, impact: 9.5, mit: 'Firm cert + Certified Renovator per crew; age screening at estimate.' },
  { name: 'Slow lead flow / high CAC sinks ramp', likelihood: 8.5, impact: 8, mit: 'LSA + GBP reviews first; CPU Contractor Network; referrals.' },
  { name: 'Sub-crew quality / unregistered subs', likelihood: 5, impact: 8, mit: 'Registered, insured subs only; photo-documented QA; retainage.' },
  { name: 'Winter cash-flow trough', likelihood: 8, impact: 5.5, mit: '3 months reserves; 30–50% deposits; budget Conservative.' },
  { name: 'Price competition compresses margin', likelihood: 5.5, impact: 5.5, mit: 'Hold mid-market; sell quality + reviews, not price.' },
  { name: 'Injury / property damage on site', likelihood: 3.5, impact: 8, mit: '$1M/$2M GL; L&I workers’ comp from first W-2 hire.' },
  { name: '“Clearveiw” brand / typo collision', likelihood: 5, impact: 5, mit: 'Rebrand or domain fix in first 90 days; USPTO/WA SOS search.' },
  { name: 'Homeowner Recovery Program claims', likelihood: 2.5, impact: 5.5, mit: 'Clean contracts; written change orders; prompt resolution.' },
];

export const priceBands = [
  { name: 'Window World', lo: 300, hi: 1300, type: 'Value franchise' },
  { name: 'Local dealers (Milgard)', lo: 500, hi: 925, type: 'Mid-market locals' },
  { name: 'CLEARVIEW TARGET', lo: 600, hi: 900, type: 'The gap', highlight: true },
  { name: 'DaBella', lo: 700, hi: 1100, type: 'Regional mid-market' },
  { name: 'Renewal by Andersen', lo: 750, hi: 1250, type: 'Premium franchise' },
];

export const actionPlan = [
  {
    phase: 'Days 1–30',
    title: 'Legal Foundation',
    note: 'Before any marketing of any kind',
    steps: [
      'Entity & name check: WA SOS + USPTO search, form LLC, get EIN. Decide final brand spelling now.',
      'WA Business License via DOR (UBI), City of Vancouver endorsement; set up Retailing B&O + 8.7% sales-tax collection.',
      'L&I specialty contractor registration; $15,000 surety bond; bind $1M/$2M GL. No ads until the number is in hand.',
      'EPA/WA RRP firm certification (~$300/5yr) + 8-hour Certified Renovator course ($300–$500).',
      'Open L&I state-fund workers’ comp account before the helper’s first day.',
    ],
  },
  {
    phase: 'Days 31–60',
    title: 'Market Entry Setup',
    note: 'Build the engine',
    steps: [
      'Apply to the CPU Contractor Network — rebates ($6–$10/sq ft) are a lead source, differentiator and price offset in one.',
      'Fix brand & domains: redirect windowsbyclearveiw.com, register correctly-spelled variants, consistent NAP, add L&I number site-wide.',
      'Claim and fully build Google Business Profile; seed first 5–10 reviews.',
      'Open Milgard (U ≤ 0.30) dealer account; finalize $600–$900/window price book, estimating sheet and contract templates.',
    ],
  },
  {
    phase: 'Days 61–90',
    title: 'Revenue Engine',
    note: 'Prove the model',
    steps: [
      'Google Local Services Ads live first ($50–$100/lead, ~$233 cost/customer). Hold paid search until LSA data justifies it.',
      'Mark + helper complete first 2–4 installs; photo-document every job; lead-safe checklist on pre-1978 homes.',
      'Automated post-job review requests; $100–$150 referral incentive; target 15+ GBP reviews and 30%+ close rate.',
      'Day-90 gate: ≥3 jobs, ≥10 reviews, pipeline ≥$40k → recruit sub crew. Otherwise hold Conservative spending.',
    ],
  },
];

export const complianceBudget = [
  { item: 'Entity + WA Business License + UBI', cost: '$50–$250', when: 'Week 1' },
  { item: 'L&I specialty contractor registration', cost: '$141–$150', when: 'Week 1–2' },
  { item: 'Surety bond ($15,000 specialty)', cost: 'Premium (1–3%/yr)', when: 'Before registration' },
  { item: 'GL insurance ($1M/$2M, not the $250k minimum)', cost: 'Get quotes early', when: 'Before first job' },
  { item: 'RRP firm certification', cost: '~$300 / 5 yrs', when: 'Month 1' },
  { item: 'Certified Renovator course (8 hr)', cost: '$300–$500', when: 'Month 1' },
];

export const navSections = [
  { id: 'verdict', label: 'Verdict' },
  { id: 'market', label: 'Market' },
  { id: 'regulatory', label: 'Licensing' },
  { id: 'economics', label: 'Economics' },
  { id: 'competition', label: 'Competition' },
  { id: 'audit', label: 'Site Audit' },
  { id: 'projection', label: 'Year One' },
  { id: 'risk', label: 'Risk' },
  { id: 'plan', label: '90-Day Plan' },
];
