import { navSections } from '@/data/report';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f1ea]/95 backdrop-blur border-b-[2px] border-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-5 h-14 flex items-center justify-between gap-4">
        <a href="#verdict" className="font-mono2 text-xs tracking-[0.2em] uppercase font-semibold whitespace-nowrap">
          Clearveiw Windows <span className="text-[#807d7a]">/ Feasibility</span>
        </a>
        <nav className="hidden md:flex gap-5 overflow-x-auto">
          {navSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="font-mono2 text-[11px] tracking-[0.15em] uppercase text-[#807d7a] hover:text-[#f4583d] transition-colors whitespace-nowrap"
            >
              {s.label}
            </a>
          ))}
        </nav>
        <span className="font-mono2 text-[11px] text-[#807d7a] hidden lg:block">Vancouver, WA · Sept 2026</span>
      </div>
    </header>
  );
}
