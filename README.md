# 终末地WIKI · 塔卫二开拓资料库

《明日方舟：终末地》玩家共建的非官方资料站，参考 PRTS.WIKI 的社区精神——自由、开放、共建。

**线上地址：https://texasviolet.github.io/endfield-wiki/**

## 共建指南

本站为静态站点（React + Vite + Tailwind），源码即数据。任何修改经合并到 `main` 分支后，由 GitHub Actions 自动构建并发布到 `gh-pages`。

### 编辑内容（职员）

1. 在站内任意板块标题旁点「编辑」，可查看该板块的源码与字段说明（快捷键：`Ctrl/⌘+S` 下载、`Ctrl/⌘+Enter` 直达 GitHub 编辑器）
2. 或在 GitHub 网页端直接编辑数据文件（[`src/data/wiki.ts`](src/data/wiki.ts)：干员 / 武器 / 世界观 / 动态；[`src/data/archives.ts`](src/data/archives.ts)：中枢档案）
3. 保存并合并后约 1 分钟自动上线

### 申请成为职员

普通用户在公共讨论帖留言「申请职员 + GitHub 用户名 + 想负责的板块」，管理员审核后在
Settings → Collaborators 发出邀请。权限体系详见站内「特殊:用户权限」页面。

- **公共讨论页（勘误 / 申请 / 建议）**：https://github.com/TexasViolet/endfield-wiki/issues/1
- **权限管理（仅管理员）**：https://github.com/TexasViolet/endfield-wiki/settings/access

### 本地开发

```bash
npm install
npm run dev     # 开发预览
npm run build   # 构建到 dist/
```

## 数据说明

当前数据对照 Warfarin Wiki（游戏数据 v1.5）：32 名干员（稀有度 / 元素 / 武器 / 职业 / 阵营 / 种族 / 简介）、72 件武器。
