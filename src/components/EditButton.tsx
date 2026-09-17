import { PencilLine } from "lucide-react";

/** 板块标题旁的「编辑」入口，仿 PRTS wiki 的编辑标签，跳转站内源码编辑页 */
export default function EditButton({ section }: { section: string }) {
  return (
    <a
      href={`#/edit/${section}`}
      title="编辑本板块（查看源码 · 对应 PRTS 的 action=edit）"
      className="clip-tag inline-flex items-center gap-1.5 border border-border bg-card px-3 py-1.5 font-mono-tech text-[10px] tracking-[0.2em] text-muted-foreground transition-all hover:border-primary hover:text-primary"
    >
      <PencilLine className="h-3 w-3" />
      编辑
    </a>
  );
}
