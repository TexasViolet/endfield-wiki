import { useState } from "react";
import { Search } from "lucide-react";
import { SITE } from "@/data/site";

const ticker = [
  "欢迎使用 ENDFIELD WIKI — 塔卫二开拓资料库",
  "《明日方舟：终末地》全球公测进行中",
  "协议回收部门重建进度 78.4%",
  "新增干员档案：佩丽卡 / 陈千语 / 洁尔佩塔",
  "集成工业系统产线规划专题已更新",
];

export default function Header({ query, setQuery }: { query: string; setQuery: (s: string) => void }) {
  const [focus, setFocus] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <div className="clip-tag flex h-9 w-9 items-center justify-center bg-primary font-mono-tech text-lg font-bold text-primary-foreground">
            E
          </div>
          <div className="leading-tight">
            <div className="font-mono-tech text-[15px] font-bold tracking-wide">
              ENDFIELD<span className="text-primary">·</span>WIKI
            </div>
            <div className="font-mono-tech text-[10px] tracking-[0.2em] text-muted-foreground">
              终末地资料库 / TALOS-II ARCHIVE
            </div>
          </div>
        </a>

        <nav className="ml-6 hidden gap-5 font-mono-tech text-xs tracking-wider text-muted-foreground lg:flex">
          {[
            ["干员", "#operators"],
            ["武器", "#weapons"],
            ["世界观", "#lore"],
            ["动态", "#news"],
            ["讨论", SITE.discussionUrl],
            ["权限", "#/rights"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              className="transition-colors hover:text-primary"
            >
              [{label}]
            </a>
          ))}
        </nav>

        <div
          className={`ml-auto flex items-center gap-2 border px-3 py-1.5 transition-colors ${
            focus ? "border-primary" : "border-border"
          } bg-card`}
        >
          <Search className="h-3.5 w-3.5 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder="搜索干员 / 武器…"
            className="w-36 bg-transparent font-mono-tech text-xs outline-none placeholder:text-muted-foreground md:w-48"
          />
          <span className="animate-blink font-mono-tech text-xs text-primary">▌</span>
        </div>
      </div>

      {/* ticker */}
      <div className="overflow-hidden border-t border-border/60 bg-card/60 py-1">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap font-mono-tech text-[10px] tracking-wider text-muted-foreground">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="text-primary">▸</span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
