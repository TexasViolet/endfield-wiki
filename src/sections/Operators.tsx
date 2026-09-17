import { useMemo, useState } from "react";
import { ELEMENT_COLOR, elements, operators, type Element, type Operator } from "@/data/wiki";
import { SectionTitle } from "./CategoryGrid";
import { ChevronDown, ChevronUp, X } from "lucide-react";

function Stars({ n }: { n: number }) {
  return (
    <span className="font-mono-tech text-[10px] tracking-tight text-primary">
      {"★".repeat(n)}
    </span>
  );
}

const RARITY_TABS = [
  { v: 0, label: "全部" },
  { v: 6, label: "六星" },
  { v: 5, label: "五星" },
  { v: 4, label: "四星" },
] as const;

function OperatorCard({ o, onSelect }: { o: Operator; onSelect: (o: Operator) => void }) {
  return (
    <button
      onClick={() => onSelect(o)}
      className="group relative h-full w-full bg-card p-4 text-left transition-colors hover:bg-secondary"
    >
      {o.hot && (
        <span className="absolute right-2 top-2 font-mono-tech text-[9px] tracking-wider text-primary">
          HOT
        </span>
      )}
      {/* avatar block */}
      <div
        className="clip-tag relative h-16 w-16 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${ELEMENT_COLOR[o.element]}22, transparent)`,
          border: `1px solid ${ELEMENT_COLOR[o.element]}55`,
        }}
      >
        <img
          src={`${import.meta.env.BASE_URL}avatars/${o.name}.png`}
          alt={o.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="mt-3 font-bold tracking-wide group-hover:text-primary">{o.name}</div>
      <Stars n={o.rarity} />
      <div className="mt-1.5 flex flex-wrap gap-x-2 font-mono-tech text-[10px] text-muted-foreground">
        <span style={{ color: ELEMENT_COLOR[o.element] }}>{o.element}</span>
        <span>{o.weapon}</span>
        <span>{o.role}</span>
      </div>
    </button>
  );
}

export default function Operators({ query }: { query: string }) {
  const [element, setElement] = useState<(typeof elements)[number]>("全部");
  const [rarity, setRarity] = useState<(typeof RARITY_TABS)[number]["v"]>(0);
  const [selected, setSelected] = useState<Operator | null>(null);
  // 折叠一览栏目：默认只保留当期更新（HOT 干员），可一键展开完整一览
  const [expanded, setExpanded] = useState(false);

  const current = useMemo(() => operators.filter((o) => o.hot), []);

  const filtered = useMemo(
    () =>
      operators.filter(
        (o) =>
          (rarity === 0 || o.rarity === rarity) &&
          (element === "全部" || o.element === element) &&
          (!query || o.name.includes(query) || o.role.includes(query) || o.faction.includes(query))
      ),
    [element, rarity, query]
  );

  return (
    <section id="operators" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <SectionTitle index="02" title="干员一览" en="OPERATOR INDEX" editSection="operators" />

        {!expanded ? (
          /* ------- 折叠态：只保留当期更新 ------- */
          <div className="mt-6">
            <div className="flex flex-wrap items-center gap-3 border border-primary/40 bg-primary/5 px-4 py-2">
              <span className="font-mono-tech text-xs tracking-[0.2em] text-primary">
                当期更新
              </span>
              <span className="font-mono-tech text-[10px] tracking-wider text-muted-foreground">
                CURRENT BANNER · {current.length} 名干员
              </span>
              <button
                onClick={() => setExpanded(true)}
                className="clip-tag ml-auto flex items-center gap-1 border border-primary px-4 py-1.5 font-mono-tech text-xs tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                展开完整一览（{operators.length} 名）
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="mt-px flex flex-wrap gap-px">
              {current.map((o) => (
                <div key={o.name} className="min-w-[230px] flex-1 max-w-[330px] border border-border bg-card">
                  <OperatorCard o={o} onSelect={setSelected} />
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
                FULL INDEX · {operators.length} 名干员
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
              <span className="mx-1 hidden self-center text-border sm:inline">|</span>
              {/* element filter */}
              <span className="self-center font-mono-tech text-[10px] tracking-[0.2em] text-muted-foreground">
                元素
              </span>
              {elements.map((e) => (
                <button
                  key={e}
                  onClick={() => setElement(e)}
                  className={`clip-tag border px-4 py-1.5 font-mono-tech text-xs tracking-wider transition-all ${
                    element === e
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-primary/60 hover:text-foreground"
                  }`}
                >
                  {e !== "全部" && (
                    <span
                      className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full align-middle"
                      style={{ background: ELEMENT_COLOR[e as Element] }}
                    />
                  )}
                  {e}
                </button>
              ))}
              <span className="ml-auto self-center font-mono-tech text-[10px] tracking-wider text-muted-foreground">
                {filtered.length} 名干员
              </span>
            </div>

            {/* grid */}
            <div className="mt-6 grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-5">
              {filtered.map((o) => (
                <OperatorCard key={o.name} o={o} onSelect={setSelected} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="mt-6 border border-dashed border-border p-10 text-center font-mono-tech text-sm text-muted-foreground">
                // 未检索到匹配干员
              </div>
            )}
          </>
        )}
      </div>

      {/* detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="clip-tag w-full max-w-lg border border-border bg-card p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="clip-tag h-20 w-20 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${ELEMENT_COLOR[selected.element]}33, transparent)`,
                    border: `1px solid ${ELEMENT_COLOR[selected.element]}66`,
                  }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}avatars/${selected.name}.png`}
                    alt={selected.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-2xl font-black">{selected.name}</div>
                  <Stars n={selected.rarity} />
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-px bg-border font-mono-tech text-xs">
              {[
                ["元素", selected.element],
                ["武器类型", selected.weapon],
                ["职能", selected.role],
                ["阵营", selected.faction],
                ...(selected.race ? [["种族", selected.race]] : []),
                ["身份认证", "终末地工业"],
              ].map(([k, v]) => (
                <div key={k} className="bg-background p-3">
                  <div className="text-[10px] tracking-wider text-muted-foreground">{k}</div>
                  <div className="mt-1 text-foreground">{v}</div>
                </div>
              ))}
            </div>

            <p className="mt-5 border-l-2 border-primary pl-4 text-sm leading-relaxed text-foreground/85">
              {selected.desc}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
