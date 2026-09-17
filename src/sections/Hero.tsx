import { useEffect, useState } from "react";

const TAGLINES = [
  "开拓与存续，是塔卫二永恒的主题。",
  "回收失落的协议，重建人类的边疆。",
  "管理员，欢迎回到终末地。",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [line, setLine] = useState(0);

  useEffect(() => {
    const target = TAGLINES[line];
    let i = 0;
    setText("");
    const timer = setInterval(() => {
      i++;
      setText(target.slice(0, i));
      if (i >= target.length) {
        clearInterval(timer);
        setTimeout(() => setLine((l) => (l + 1) % TAGLINES.length), 3200);
      }
    }, 70);
    return () => clearInterval(timer);
  }, [line]);

  return (
    <section id="top" className="scanline relative overflow-hidden border-b border-border">
      {/* backdrop decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full border border-primary/10" />
        <div className="absolute -right-8 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full border border-primary/15" />
        <div className="absolute right-16 top-1/2 h-[180px] w-[180px] -translate-y-1/2 rounded-full border border-primary/25" />
        <div className="absolute right-16 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-primary text-glow" />
        <div className="absolute bottom-6 left-6 font-mono-tech text-[10px] tracking-[0.3em] text-muted-foreground/50">
          LAT 41.02 // LON -113.77 // TALOS-II
        </div>
        <div className="absolute right-6 top-6 font-mono-tech text-[10px] tracking-[0.3em] text-muted-foreground/50">
          SYS.STATUS: <span className="text-primary">ONLINE</span>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="font-mono-tech text-xs tracking-[0.35em] text-primary">
          // ARKNIGHTS: ENDFIELD DATABASE
        </div>
        <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight md:text-7xl">
          终末地
          <span className="text-primary text-glow">WIKI</span>
        </h1>
        <p className="mt-3 font-mono-tech text-sm tracking-widest text-muted-foreground md:text-base">
          塔卫二开拓资料库 —— 干员 · 武器 · 工业 · 世界观
        </p>

        <div className="mt-8 flex h-8 items-center border-l-2 border-primary pl-4 font-mono-tech text-sm text-foreground/90 md:text-base">
          {text}
          <span className="animate-blink ml-0.5 text-primary">▌</span>
        </div>

        <div className="mt-10 flex flex-wrap gap-6 font-mono-tech text-xs">
          {[
            ["32", "收录干员"],
            ["72", "收录武器"],
            ["6", "图鉴分类"],
            ["v0.9.3", "站点版本"],
          ].map(([num, label]) => (
            <div key={label} className="flex flex-col">
              <span className="text-2xl font-bold text-primary md:text-3xl">{num}</span>
              <span className="mt-1 tracking-wider text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
