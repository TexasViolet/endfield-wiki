import { useMemo, useState } from "react";
import { weapons, type Weapon, type WeaponType } from "@/data/wiki";
import { SectionTitle } from "./CategoryGrid";
import { ChevronDown, ChevronUp } from "lucide-react";

const TABS: ("全部" | WeaponType)[] = ["全部", "单手剑", "双手剑", "长柄武器", "手铳", "施术单元"];

const RARITY_TABS = [
  { v: 0, label: "全部" },
  { v: 6, label: "六星" },
  { v: 5, label: "五星" },
  { v: 4, label: "四星" },
  { v: 3, label: "三星" },
] as const;

const RARITY_GROUPS = [
  { rarity: 6, label: "六星武器", en: "RARITY-6", color: "#ffd23d" },
  { rarity: 5, label: "五星武器", en: "RARITY-5", color: "#e8b13d" },
  { rarity: 4, label: "四星武器", en: "RARITY-4", color: "#b78cff" },
  { rarity: 3, label: "三星武器", en: "RARITY-3", color: "#6fc3ff" },
] as const;

function Stars({ n, color }: { n: number; color: string }) {
  return (
    <span className="font-mono-tech text-[10px] tracking-tight" style={{ color }}>
      {"★".repeat(n)}
    </span>
  );
}

function groupOf(rarity: number) {
  return RARITY_GROUPS.find((g) => g.rarity === rarity)!;
}

function WeaponCard({ w }: { w: Weapon }) {
  const g = groupOf(w.rarity);
  return (
    <div className="group relative h-full w-full bg-card p-4 text-left transition-colors hover:bg-secondary">
      {/* weapon image */}
      <div
        className="clip-tag relative mx-auto h-24 w-24 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${g.color}18, transparent)`,
          border: `1px solid ${g.color}44`,
        }}
      >
        <img
          src={`${import.meta.env.BASE_URL}weapons/${w.name}.webp`}
          alt={w.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="mt-3 text-center font-bold tracking-wide group-hover:text-primary">
        {w.name}
      </div>
      <div className="text-center font-mono-tech text-[9px] tracking-wider text-muted-foreground">
        {w.en}
      </div>
      <div className="mt-1 text-center">
        <Stars n={w.rarity} color={g.color} />
      </div>
      <div className="mt-1.5 text-center font-mono-tech text-[10px] text-muted-foreground">
        {w.type}
      </div>
      <p className="mt-2 line-clamp-2 text-center text-[11px] leading-relaxed text-foreground/70">
        {w.desc}
      </p>
      <div className="mt-2 text-center font-mono-tech text-[9px] tracking-wider text-muted-foreground/70">
        v{w.version} · 更新于 {w.updated}
      </div>
    </div>
  );
}

export default function Weapons({ query }: { query: string }) {
  const [tab, setTab] = useState<(typeof TABS)[number]>("全部");
  const [rarity, setRarity] = useState<(typeof RARITY_TABS)[number]["v"]>(0);
  // 折叠一览栏目：默认只保留当期更新（当期 UP 武器），可一键展开完整一览
  const [expanded, setExpanded] = useState(false);

  const current = useMemo(() => weapons.filter((w) => w.hot), []);

  const groups = useMemo(() => {
    const filtered = weapons.filter(
      (w) =>
        (rarity === 0 || w.rarity === rarity) &&
        (tab === "全部" || w.type === tab) &&
        (!query || w.name.includes(query) || w.en.toLowerCase().includes(query.toLowerCase()))
    );
    // 数据已按稀有度 + 更新时间排序，这里按组归类展示
    return RARITY_GROUPS.map((g) => ({
      ...g,
      items: filtered.filter((w) => w.rarity === g.rarity),
    })).filter((g) => g.items.length > 0);
  }, [tab, rarity, query]);

  const total = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <section id="weapons" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <SectionTitle index="03" title="武器一览" en="WEAPON INDEX" editSection="weapons" />

        {!expanded ? (
          /* ------- 折叠态：只保留当期更新 ------- */
          <div className="mt-6">
            <div className="flex flex-wrap items-center gap-3 border border-primary/40 bg-primary/5 px-4 py-2">
              <span className="font-mono-tech text-xs tracking-[0.2em] text-primary">
                当期更新
              </span>
              <span className="font-mono-tech text-[10px] tracking-wider text-muted-foreground">
                CURRENT BANNER · {current.length} 件武器
              </span>
              <button
                onClick={() => setExpanded(true)}
                className="clip-tag ml-auto flex items-center gap-1 border border-primary px-4 py-1.5 font-mono-tech text-xs tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                展开完整一览（{weapons.length} 件）
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="mt-px flex flex-wrap gap-px">
              {current.map((w) => (
                <div key={w.name} className="min-w-[230px] flex-1 max-w-[330px] border border-border bg-card">
                  <WeaponCard w={w} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ------- 展开态：快捷查找栏 + 完整一览 ------- */
          <>
            {/* 收起按钮与展开按钮同位置（顶部横幅右侧） */}
            <div className="mt-6 flex flex-wrap items-center gap-3 border border-primary/40 bg-primary/5 px-4 py-2">
              <span className="font-mono-tech text-xs tracking-[0.2em] text-primary">
                完整一览
              </span>
              <span className="font-mono-tech text-[10px] tracking-wider text-muted-foreground">
                FULL INDEX · {weapons.length} 件武器
              </span>
              <button
                onClick={() => setExpanded(false)}
                className="clip-tag ml-auto flex items-center gap-1 border border-primary px-4 py-1.5 font-mono-tech text-xs tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                收起一览，只显示当期更新
                <ChevronUp className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* rarity quick filter */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="self-center font-mono-tech text-[10px] tracking-[0.2em] text-muted-foreground">
                稀有度
              </span>
              {RARITY_TABS.map((r) => (
                <button
                  key={r.v}
                  onClick={() => setRarity(r.v)}
                  className={`clip-tag border px-4 py-1.5 font-mono-tech text-xs tracking-wider transition-all ${
                    rarity === r.v
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-primary/60 hover:text-foreground"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>

            {/* type filter */}
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="self-center font-mono-tech text-[10px] tracking-[0.2em] text-muted-foreground">
                类型
              </span>
              {TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`clip-tag border px-4 py-1.5 font-mono-tech text-xs tracking-wider transition-all ${
                    tab === t
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-primary/60 hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
              <span className="ml-auto self-center font-mono-tech text-[10px] tracking-wider text-muted-foreground">
                {total} 件武器 · 按稀有度 / 更新时间排序
              </span>
            </div>

            {groups.map((g) => (
              <div key={g.rarity} className="mt-8">
                <div className="flex items-baseline gap-3 border-b border-border pb-2">
                  <span
                    className="font-mono-tech text-sm font-bold tracking-[0.2em]"
                    style={{ color: g.color }}
                  >
                    {g.label}
                  </span>
                  <span className="font-mono-tech text-[10px] tracking-[0.2em] text-muted-foreground">
                    {g.en} · {g.items.length} 件
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-5">
                  {g.items.map((w) => (
                    <WeaponCard key={w.name} w={w} />
                  ))}
                </div>
              </div>
            ))}

            {total === 0 && (
              <div className="mt-6 border border-dashed border-border p-10 text-center font-mono-tech text-sm text-muted-foreground">
                // 未检索到匹配武器
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
