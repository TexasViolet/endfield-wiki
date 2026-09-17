import { useMemo, useState } from "react";
import { archives, type ArchiveDoc } from "@/data/archives";
import EditButton from "@/components/EditButton";
import { ArrowLeft, ChevronDown, ExternalLink, FileText, ScrollText, Search } from "lucide-react";

function DocItem({ doc, open, onToggle }: { doc: ArchiveDoc; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border/60 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors hover:bg-secondary/60"
      >
        {doc.kind === "report" ? (
          <ScrollText className="h-4 w-4 shrink-0 text-primary/80" />
        ) : (
          <FileText className="h-4 w-4 shrink-0 text-muted-foreground" />
        )}
        <span className={`text-sm tracking-wide ${open ? "text-primary" : ""}`}>{doc.title}</span>
        {doc.area && (
          <span className="clip-tag shrink-0 bg-primary/10 px-2 py-0.5 font-mono-tech text-[9px] tracking-wider text-primary">
            {doc.area}
          </span>
        )}
        <ChevronDown
          className={`ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="border-t border-border/40 bg-background/40 px-4 py-4 md:pl-11">
          {doc.paras.map((p, i) => (
            <p key={i} className="mb-3 text-sm leading-relaxed text-foreground/80 last:mb-0">
              {p}
            </p>
          ))}
          {doc.url && (
            <a
              href={doc.url}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1 font-mono-tech text-[10px] tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              来源：Warfarin Wiki <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Archives() {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim();
    if (!q) return archives;
    return archives.filter(
      (d) => d.title.includes(q) || d.paras.some((p) => p.includes(q)) || (d.area ?? "").includes(q)
    );
  }, [query]);

  const documents = filtered.filter((d) => d.kind === "document");
  const reports = filtered.filter((d) => d.kind === "report");

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3 md:px-8">
          <a
            href="#/"
            className="flex items-center gap-2 font-mono-tech text-xs tracking-wider text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            返回站点
          </a>
          <span className="text-border">|</span>
          <div className="font-mono-tech text-sm">
            <span className="font-bold">中枢档案</span>
            <span className="ml-2 text-[10px] tracking-[0.3em] text-muted-foreground">NEXUS ARCHIVES</span>
            <EditButton section="archives" />
          </div>
          <div
            className={`ml-auto flex items-center gap-2 border px-3 py-1.5 transition-colors ${
              query ? "border-primary" : "border-border"
            } bg-card`}
          >
            <Search className="h-3.5 w-3.5 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜索档案标题 / 正文…"
              className="w-40 bg-transparent font-mono-tech text-xs outline-none placeholder:text-muted-foreground md:w-56"
            />
            <span className="font-mono-tech text-xs text-primary">▌</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <p className="font-mono-tech text-[11px] leading-relaxed text-muted-foreground">
          <span className="text-primary">//</span> 收录塔卫二中枢数据库中的官方档案与调查报告，点击条目展开全文。
          共 {archives.length} 份（游戏数据 v1.2，来源：Warfarin Wiki）。
          {query && ` 当前检索：${filtered.length} 份`}
        </p>

        {reports.length > 0 && (
          <>
            <h2 className="mt-8 flex items-center gap-3 font-mono-tech text-sm tracking-[0.2em] text-primary">
              <span>[R]</span> 调查报告<span className="text-[10px] text-muted-foreground">INVESTIGATION REPORTS · {reports.length}</span>
            </h2>
            <div className="mt-3 border border-border bg-card">
              {reports.map((d) => (
                <DocItem key={d.id} doc={d} open={openId === d.id} onToggle={() => setOpenId(openId === d.id ? null : d.id)} />
              ))}
            </div>
          </>
        )}

        {documents.length > 0 && (
          <>
            <h2 className="mt-10 flex items-center gap-3 font-mono-tech text-sm tracking-[0.2em] text-primary">
              <span>[D]</span> 中枢文献<span className="text-[10px] text-muted-foreground">NEXUS DOCUMENTS · {documents.length}</span>
            </h2>
            <div className="mt-3 border border-border bg-card">
              {documents.map((d) => (
                <DocItem key={d.id} doc={d} open={openId === d.id} onToggle={() => setOpenId(openId === d.id ? null : d.id)} />
              ))}
            </div>
          </>
        )}

        {filtered.length === 0 && (
          <div className="mt-8 border border-dashed border-border p-10 text-center font-mono-tech text-sm text-muted-foreground">
            // 未检索到匹配档案
          </div>
        )}
      </div>
    </div>
  );
}
