import { categories } from "@/data/wiki";
import EditButton from "@/components/EditButton";
import { Users, Sword, Shield, Factory, Package, Skull, Archive, Map } from "lucide-react";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  operators: Users,
  weapons: Sword,
  gears: Shield,
  facilities: Factory,
  items: Package,
  enemies: Skull,
  archives: Archive,
  map: Map,
};

export default function CategoryGrid() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <SectionTitle index="01" title="常用内容" en="QUICK ACCESS" />
        <div className="mt-8 grid grid-cols-2 gap-px bg-border md:grid-cols-4">
          {categories.map((c) => {
            const Icon = ICONS[c.icon];
            return (
              <a
                key={c.title}
                href={
                  c.icon === "operators"
                    ? "#operators"
                    : c.icon === "weapons"
                      ? "#weapons"
                      : c.icon === "archives"
                        ? "#/archives"
                        : "#lore"
                }
                className="group relative bg-card p-5 transition-colors hover:bg-secondary"
              >
                <div className="flex items-start justify-between">
                  <Icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
                  <span className="font-mono-tech text-[10px] tracking-wider text-muted-foreground">
                    {c.count}
                  </span>
                </div>
                <div className="mt-6 font-bold tracking-wide group-hover:text-primary md:text-lg">
                  {c.title}
                </div>
                <div className="mt-1 font-mono-tech text-[10px] tracking-[0.2em] text-muted-foreground">
                  {c.en}
                </div>
                <div className="mt-2 text-xs text-muted-foreground">{c.desc}</div>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({ index, title, en, editSection }: { index: string; title: string; en: string; editSection?: string }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border pb-3">
      <div className="flex items-baseline gap-3">
        <span className="font-mono-tech text-xs text-primary">[{index}]</span>
        <h2 className="text-xl font-black tracking-wide md:text-2xl">{title}</h2>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-mono-tech text-[10px] tracking-[0.3em] text-muted-foreground">{en}</span>
        {editSection && <EditButton section={editSection} />}
      </div>
    </div>
  );
}
