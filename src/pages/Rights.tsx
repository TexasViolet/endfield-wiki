import { SITE } from "@/data/site";
import { ArrowLeft, Check, ExternalLink, ShieldCheck, UserPlus, X } from "lucide-react";

/* 仿 PRTS wiki「特殊:用户权限」的站点权限说明与职员申请页 */

const GROUPS = ["管理员", "职员", "注册用户", "匿名访客"] as const;

type Perm = { name: string; grant: [boolean, boolean, boolean, boolean] };

const PERMS: Perm[] = [
  { name: "浏览全站内容", grant: [true, true, true, true] },
  { name: "讨论页发言", grant: [true, true, true, false] },
  { name: "提交编辑建议（讨论留言 / Pull Request）", grant: [true, true, true, false] },
  { name: "直接编辑源码", grant: [true, true, false, false] },
  { name: "合并编辑并发布上线", grant: [true, false, false, false] },
  { name: "授权 / 移除职员", grant: [true, false, false, false] },
  { name: "站点设置与数据备份", grant: [true, false, false, false] },
];

const STEPS = [
  {
    n: "01",
    title: "注册 GitHub 账号",
    body: "本站基于 GitHub 共建，编辑与讨论都需要一个 GitHub 账号，全程免费。",
    href: "https://github.com/join",
    cta: "前往注册",
  },
  {
    n: "02",
    title: "在讨论帖留言申请",
    body: "在公共讨论版回复「申请职员 + 你的 GitHub 用户名 + 想负责的板块（干员 / 武器 / 世界观 / 中枢档案 / 动态）」。",
    href: SITE.discussionUrl,
    cta: "前往讨论帖",
  },
  {
    n: "03",
    title: "管理员审核并发出邀请",
    body: "管理员核实账号后，在仓库协作者设置页发出邀请（对应 PRTS 的 Special:用户权限 授权操作）。",
    href: `${SITE.repoUrl}/settings/access`,
    cta: "权限管理（仅管理员）",
  },
  {
    n: "04",
    title: "接受邀请，开始编辑",
    body: "获得推送权限即成为职员。在任意板块点「编辑」→「在 GitHub 上编辑」修改源码，保存合并后由 Actions 自动构建发布。",
    href: `${SITE.repoUrl}`,
    cta: "前往仓库",
  },
];

const STAFF = [{ name: "TexasViolet", role: "管理员 · 建站者", since: "2026-09" }];

export default function Rights() {
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
            <span className="font-bold">特殊:用户权限</span>
            <span className="ml-2 text-[10px] tracking-[0.3em] text-muted-foreground">USER RIGHTS</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        {/* intro */}
        <div className="border border-border bg-card p-6 md:p-8">
          <h1 className="flex items-center gap-3 text-2xl font-black tracking-wide">
            <ShieldCheck className="h-6 w-6 text-primary" />
            用户权限与职员体系
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/80">
            本站为玩家共建的非官方静态资料站，源码托管于 GitHub（
            <a href={SITE.repoUrl} target="_blank" rel="noreferrer" className="text-primary hover:underline">
              {SITE.repo}
            </a>
            ）。用户组与权限对应关系如下：普通访客可浏览全站；注册用户在公共讨论页发言并提交编辑建议；经管理员授权的
            <span className="text-primary">职员</span>获得仓库推送权限，可直接编辑源码，合并后由 GitHub Actions 自动构建发布；
            管理员负责审核、合并与授权。
          </p>
        </div>

        {/* permission matrix */}
        <h2 className="mt-10 flex items-center gap-3 font-mono-tech text-sm tracking-[0.2em] text-primary">
          <span>[01]</span> 权限一览
        </h2>
        <div className="mt-4 overflow-x-auto border border-border">
          <table className="w-full min-w-[640px] border-collapse font-mono-tech text-xs">
            <thead>
              <tr className="bg-card text-left tracking-wider text-muted-foreground">
                <th className="border-b border-border px-4 py-3 font-normal">权限</th>
                {GROUPS.map((g) => (
                  <th key={g} className="border-b border-l border-border px-4 py-3 text-center font-normal">
                    {g}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PERMS.map((p) => (
                <tr key={p.name} className="transition-colors hover:bg-secondary/50">
                  <td className="border-b border-border px-4 py-2.5 text-foreground/85">{p.name}</td>
                  {p.grant.map((ok, i) => (
                    <td key={i} className="border-b border-l border-border px-4 py-2.5 text-center">
                      {ok ? (
                        <Check className="inline h-3.5 w-3.5 text-primary" />
                      ) : (
                        <X className="inline h-3.5 w-3.5 text-muted-foreground/40" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 font-mono-tech text-[10px] tracking-wider text-muted-foreground">
          // 对应 PRTS wiki 的 Special:用户权限 页面 · 授权操作在 GitHub 仓库 Settings → Collaborators 完成
        </p>

        {/* staff list */}
        <h2 className="mt-10 flex items-center gap-3 font-mono-tech text-sm tracking-[0.2em] text-primary">
          <span>[02]</span> 现任职员
        </h2>
        <div className="mt-4 grid gap-px border border-border bg-border sm:grid-cols-2">
          {STAFF.map((s) => (
            <div key={s.name} className="bg-card p-5">
              <div className="font-bold tracking-wide">{s.name}</div>
              <div className="mt-1 font-mono-tech text-[10px] tracking-wider text-primary">{s.role}</div>
              <div className="mt-2 font-mono-tech text-[10px] text-muted-foreground">就任于 {s.since}</div>
            </div>
          ))}
          <a
            href={SITE.discussionUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-center gap-2 border border-dashed border-border bg-card p-5 font-mono-tech text-xs tracking-wider text-muted-foreground transition-all hover:border-primary hover:text-primary"
          >
            <UserPlus className="h-4 w-4" />
            虚位以待 — 申请成为职员
          </a>
        </div>

        {/* apply steps */}
        <h2 className="mt-10 flex items-center gap-3 font-mono-tech text-sm tracking-[0.2em] text-primary">
          <span>[03]</span> 如何成为职员
        </h2>
        <div className="mt-4 grid gap-px border border-border bg-border md:grid-cols-2">
          {STEPS.map((s) => (
            <div key={s.n} className="bg-card p-6">
              <div className="font-mono-tech text-xs text-primary">STEP-{s.n}</div>
              <h3 className="mt-2 font-bold tracking-wide">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">{s.body}</p>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 border border-border px-3 py-1.5 font-mono-tech text-[10px] tracking-[0.2em] text-muted-foreground transition-all hover:border-primary hover:text-primary"
              >
                {s.cta}
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>

        {/* discussion shortcut */}
        <div className="mt-10 flex flex-wrap items-center gap-4 border border-primary/40 bg-primary/5 p-5">
          <div className="font-mono-tech text-sm">
            <span className="text-primary">公共讨论页</span>
            <span className="ml-2 text-[10px] tracking-[0.25em] text-muted-foreground">DISCUSSION</span>
          </div>
          <p className="max-w-xl text-xs leading-relaxed text-muted-foreground">
            数据勘误、职员申请、建站建议都请到讨论帖留言，职员会尽快响应。
          </p>
          <a
            href={SITE.discussionUrl}
            target="_blank"
            rel="noreferrer"
            className="clip-tag ml-auto border border-primary px-5 py-2 font-mono-tech text-xs tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            前往讨论 →
          </a>
        </div>
      </div>
    </div>
  );
}
