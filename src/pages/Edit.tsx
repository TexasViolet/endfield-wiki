import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import { lore, news, operators, weapons } from "@/data/wiki";
import { archives } from "@/data/archives";
import { SITE } from "@/data/site";
import { ArrowLeft, Copy, Download, ExternalLink, Keyboard } from "lucide-react";

/* ---------- 序列化器：将数据还原为 wiki.ts 中的源码格式 ---------- */

function fmtOperator(o: (typeof operators)[number]) {
  const parts = [
    `name: "${o.name}"`,
    `rarity: ${o.rarity}`,
    `element: "${o.element}"`,
    `weapon: "${o.weapon}"`,
    `role: "${o.role}"`,
    `faction: "${o.faction}"`,
  ];
  if (o.race) parts.push(`race: "${o.race}"`);
  if (o.hot) parts.push("hot: true");
  parts.push(`desc: "${o.desc}"`);
  return "  { " + parts.join(", ") + " },";
}

function fmtWeapon(w: (typeof weapons)[number]) {
  const parts = [
    `name: "${w.name}"`,
    `en: "${w.en}"`,
    `type: "${w.type}"`,
    `rarity: ${w.rarity}`,
    `version: "${w.version}"`,
    `updated: "${w.updated}"`,
  ];
  if (w.hot) parts.push("hot: true");
  parts.push(`desc: "${w.desc}"`);
  return "  { " + parts.join(", ") + " },";
}

function fmtArchive(a: (typeof archives)[number]) {
  const parts = [
    `id: ${a.id}`,
    `title: "${a.title}"`,
    `kind: "${a.kind}"`,
  ];
  if (a.area) parts.push(`area: "${a.area}"`);
  parts.push(`url: "${a.url}"`);
  parts.push(`paras: [${a.paras.map((p) => `"${p}"`).join(", ")}]`);
  return "  { " + parts.join(", ") + " },";
}

const SECTIONS: Record<
  string,
  { title: string; en: string; arrayName: string; file: string; code: string; hint: string }
> = {
  operators: {
    title: "干员一览",
    en: "OPERATOR INDEX",
    arrayName: "operators",
    file: SITE.dataFile,
    hint: "字段顺序：name 名称 / rarity 稀有度 / element 元素 / weapon 武器类型 / role 职能 / faction 阵营 / race 种族 / hot 当期更新标记 / desc 简介",
    code:
      "export const operators: Operator[] = [\n" +
      operators.map(fmtOperator).join("\n") +
      "\n];",
  },
  weapons: {
    title: "武器一览",
    en: "WEAPON INDEX",
    arrayName: "weapons",
    file: SITE.dataFile,
    hint: "字段顺序：name 名称 / en 英文名 / type 武器类型 / rarity 稀有度 / version 实装版本 / updated 更新日期 / hot 当期更新标记 / desc 描述",
    code:
      "export const weapons: Weapon[] = [\n" +
      weapons.map(fmtWeapon).join("\n") +
      "\n];",
  },
  lore: {
    title: "世界观档案",
    en: "WORLD ARCHIVE",
    arrayName: "lore",
    file: SITE.dataFile,
    hint: "字段顺序：title 标题 / en 英文标题 / body 正文",
    code:
      "export const lore = [\n" +
      lore.map((l) => `  {\n    title: "${l.title}",\n    en: "${l.en}",\n    body: "${l.body}",\n  },`).join("\n") +
      "\n];",
  },
  news: {
    title: "最近更新",
    en: "RECENT CHANGES",
    arrayName: "news",
    file: SITE.dataFile,
    hint: "字段顺序：date 日期 / tag 标签 / title 标题（按日期倒序插入新条目）",
    code:
      "export const news = [\n" +
      news.map((n) => `  { date: "${n.date}", tag: "${n.tag}", title: "${n.title}" },`).join("\n") +
      "\n];",
  },
  archives: {
    title: "中枢档案",
    en: "NEXUS ARCHIVES",
    arrayName: "archives",
    file: "src/data/archives.ts",
    hint: "字段顺序：id 序号 / title 标题 / kind 类型（document 文献 | report 报告）/ area 地区标签（仅报告）/ url 来源链接 / paras 正文段落数组",
    code:
      "export const archives: ArchiveDoc[] = [\n" +
      archives.map(fmtArchive).join("\n") +
      "\n];",
  },
};

export default function Edit() {
  const { section = "" } = useParams();
  const meta = SECTIONS[section];
  const [copied, setCopied] = useState(false);

  const githubEditUrl = useMemo(
    () => `${SITE.repoUrl}/edit/main/${meta?.file ?? SITE.dataFile}`,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [section]
  );

  useEffect(() => {
    if (!meta) return;
    document.title = `正在编辑:${meta.title} - 终末地WIKI`;
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        download();
      } else if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        window.open(githubEditUrl, "_blank");
      } else if (e.key === "Escape") {
        window.location.hash = "#/";
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section, githubEditUrl]);

  if (!meta) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background font-mono-tech text-sm text-muted-foreground">
        // 未知板块：{section}
        <a href="#/" className="text-primary hover:underline">← 返回站点</a>
      </div>
    );
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(meta.code);
    } catch {
      const ta = document.getElementById("edit-source") as HTMLTextAreaElement;
      ta.select();
      document.execCommand("copy");
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const download = () => {
    const blob = new Blob([meta.code], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${meta.arrayName}.ts.txt`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* top bar */}
      <div className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3 md:px-8">
          <a href="#/" className="flex items-center gap-2 font-mono-tech text-xs tracking-wider text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="h-3.5 w-3.5" />
            返回站点
          </a>
          <span className="text-border">|</span>
          <div className="font-mono-tech text-sm">
            <span className="text-primary">正在编辑：</span>
            <span className="font-bold">{meta.title}</span>
            <span className="ml-2 text-[10px] tracking-[0.3em] text-muted-foreground">{meta.en}</span>
          </div>
          <span className="ml-auto hidden font-mono-tech text-[10px] tracking-wider text-muted-foreground md:inline">
            只读源: {SITE.repo}/{meta.file}
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        {/* action bar */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={copy}
            className="clip-tag flex items-center gap-1.5 border border-border bg-card px-4 py-2 font-mono-tech text-xs tracking-wider text-muted-foreground transition-all hover:border-primary hover:text-primary"
          >
            <Copy className="h-3.5 w-3.5" />
            {copied ? "已复制 ✓" : "复制代码"}
          </button>
          <button
            onClick={download}
            className="clip-tag flex items-center gap-1.5 border border-border bg-card px-4 py-2 font-mono-tech text-xs tracking-wider text-muted-foreground transition-all hover:border-primary hover:text-primary"
          >
            <Download className="h-3.5 w-3.5" />
            下载源码
          </button>
          <a
            href={githubEditUrl}
            target="_blank"
            rel="noreferrer"
            className="clip-tag flex items-center gap-1.5 border border-primary bg-primary/10 px-4 py-2 font-mono-tech text-xs tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            在 GitHub 上编辑
          </a>
          <a
            href={SITE.discussionUrl}
            target="_blank"
            rel="noreferrer"
            className="clip-tag flex items-center gap-1.5 border border-border bg-card px-4 py-2 font-mono-tech text-xs tracking-wider text-muted-foreground transition-all hover:border-primary hover:text-primary"
          >
            讨论本页
          </a>
        </div>

        {/* shortcut hints */}
        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 border border-border/60 bg-card/50 px-4 py-2 font-mono-tech text-[10px] tracking-wider text-muted-foreground">
          <span className="flex items-center gap-1.5 text-primary/80">
            <Keyboard className="h-3 w-3" /> 快捷键
          </span>
          <span><kbd className="border border-border px-1">Ctrl/⌘ + S</kbd> 下载源码</span>
          <span><kbd className="border border-border px-1">Ctrl/⌘ + Enter</kbd> 在 GitHub 上编辑</span>
          <span><kbd className="border border-border px-1">Esc</kbd> 返回页面</span>
          <span className="ml-auto hidden lg:inline">修改后请在 GitHub 编辑器中粘贴提交，合并后自动发布</span>
        </div>

        {/* field hint */}
        <p className="mt-3 font-mono-tech text-[11px] leading-relaxed text-muted-foreground">
          <span className="text-primary">//</span> {meta.hint}
        </p>

        {/* source textarea */}
        <textarea
          id="edit-source"
          spellCheck={false}
          defaultValue={meta.code}
          className="mt-4 h-[52vh] w-full resize-y border border-border bg-card p-4 font-mono-tech text-xs leading-relaxed text-foreground/90 outline-none transition-colors focus:border-primary"
        />
      </div>
    </div>
  );
}
