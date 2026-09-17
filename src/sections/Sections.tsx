import { lore, news } from "@/data/wiki";
import { SITE } from "@/data/site";
import { SectionTitle } from "./CategoryGrid";

export function Lore() {
  return (
    <section id="lore" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <SectionTitle index="04" title="世界观档案" en="WORLD ARCHIVE" editSection="lore" />
        <div className="mt-8 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {lore.map((l, i) => (
            <article key={l.title} className="group relative bg-card p-6 transition-colors hover:bg-secondary">
              <div className="font-mono-tech text-[10px] tracking-[0.3em] text-primary">
                FILE-{String(i + 1).padStart(3, "0")} // {l.en}
              </div>
              <h3 className="mt-3 text-lg font-black tracking-wide group-hover:text-primary">
                {l.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">{l.body}</p>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function News() {
  return (
    <section id="news" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <SectionTitle index="05" title="最近更新" en="RECENT CHANGES" editSection="news" />
        <div className="mt-6 divide-y divide-border/60 border border-border">
          {news.map((n) => (
            <div
              key={n.title}
              className="group flex cursor-pointer flex-wrap items-center gap-x-4 gap-y-1 px-4 py-3.5 transition-colors hover:bg-secondary md:px-6"
            >
              <span className="font-mono-tech text-xs text-muted-foreground">{n.date}</span>
              <span className="clip-tag bg-primary/15 px-2 py-0.5 font-mono-tech text-[10px] tracking-wider text-primary">
                {n.tag}
              </span>
              <span className="text-sm group-hover:text-primary">{n.title}</span>
              <span className="ml-auto font-mono-tech text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                → 查看
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="font-mono-tech text-sm font-bold tracking-wide">
            ENDFIELD<span className="text-primary">·</span>WIKI
          </div>
          <p className="mt-2 max-w-md text-xs leading-relaxed text-muted-foreground">
            本站为《明日方舟：终末地》玩家共建的非官方资料站，游戏相关内容版权归鹰角网络所有。
            参考 PRTS.WIKI 的社区精神——自由、开放、共建。
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono-tech text-[10px] tracking-[0.2em]">
            <a href={SITE.discussionUrl} target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-primary">[讨论页]</a>
            <a href="#/rights" className="text-muted-foreground transition-colors hover:text-primary">[用户权限]</a>
            <a href="#/edit/operators" className="text-muted-foreground transition-colors hover:text-primary">[编辑本站]</a>
            <a href={SITE.repoUrl} target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-primary">[GITHUB 仓库]</a>
          </div>
        </div>
        <div className="font-mono-tech text-[10px] tracking-[0.25em] text-muted-foreground">
          PROTOCOL RECOVERY DEPT. // SINCE 2026
          <br />
          开拓与存续 · EXPLORE & ENDURE
        </div>
      </div>
    </footer>
  );
}
