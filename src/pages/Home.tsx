import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import Market from '@/sections/Market';
import Regulatory from '@/sections/Regulatory';
import Economics from '@/sections/Economics';
import Competition from '@/sections/Competition';
import Audit from '@/sections/Audit';
import Projection from '@/sections/Projection';
import Risk from '@/sections/Risk';
import Plan from '@/sections/Plan';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Market />
      <Regulatory />
      <Economics />
      <Competition />
      <Audit />
      <Projection />
      <Risk />
      <Plan />
      <footer className="bg-[#1a1a1a] text-[#8a867e] px-5 py-10 border-t border-[#3a3835]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-4">
          <p className="font-mono2 text-[11px] tracking-[0.15em] uppercase">
            Clearveiw Windows — Feasibility &amp; Year-One Projection
          </p>
          <p className="font-mono2 text-[11px]">
            Prepared Sept 2026 · Vancouver, WA / Clark County · Figures from the feasibility research report; verify before investing.
          </p>
        </div>
      </footer>
    </main>
  );
}
