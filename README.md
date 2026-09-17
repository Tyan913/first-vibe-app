# First Vibe App

> 我的第一个 Vibe Coding 项目 —— 用 React + Vite 搭建的个人主页。

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 📖 项目介绍

First Vibe App 是一个单页面的中文个人主页，也是我踏入 Vibe Coding 的第一步。

整站内容集中在一个页面里：顶部导航 + 首屏自我介绍 +「关于我」区块 +「此刻的我」卡片区 + 页脚。所有文案与卡片数据都写在 `src/App.jsx` 中，样式拆分在 `src/index.css`（全局基础样式）与 `src/App.css`（页面布局与组件样式）里。

它不是一个功能复杂的产品，而是一个「把想法真正做出来」的起点：用 React 组件组织内容，用 CSS 控制排版与响应式，用 Vite 提供极快的开发体验。

## ✨ 功能特性

- **单页个人主页**：由导航、首屏 Hero、关于我、卡片区、页脚五个区块组成
- **首屏 Hero 区**：英文 `HELLO, WORLD` 标签 + 中文主标题 + 引导文案 +「认识我 ↓」锚点入口
- **关于我区块**：圆形头像占位 + 个人介绍文案
- **「此刻的我」卡片区**：由数组数据渲染 3 张卡片（学习 / 项目 / 联系方式），每张卡片包含图标、标题、描述与标签
- **卡片悬停动效**：鼠标悬停时卡片上浮，并带背景色与边框的过渡动画
- **锚点导航与平滑滚动**：「认识我」「回到顶部」等页内锚点，配合 CSS `scroll-behavior: smooth`
- **响应式布局**：`680px` 断点下自动切换为单列卡片、缩小字号与间距，适配手机浏览
- **无障碍语义**：使用 `main` / `nav` / `section` / `footer` 语义标签，并配合 `aria-label`、`aria-labelledby`、`aria-hidden`
- **字体排版**：通过 Google Fonts 引入 Noto Serif SC（标题）与 DM Mono（标签信息）
- **代码规范**：内置 ESLint 配置，启用 react-hooks 与 react-refresh 规则

## 🛠 技术栈

| 分类 | 技术 |
| --- | --- |
| 前端框架 | React 19（函数组件 + Hooks） |
| 构建工具 | Vite 8 |
| 开发语言 | JavaScript（JSX） |
| 样式方案 | 原生 CSS（Flexbox / Grid / 媒体查询） |
| 代码检查 | ESLint 10 + eslint-plugin-react-hooks + eslint-plugin-react-refresh |
| 包管理器 | npm |

## 🚀 本地安装和运行

### 环境要求

- Node.js `^20.19.0` 或 `>=22.12.0`
- npm

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

启动后在浏览器打开终端提示的地址（默认是 http://localhost:5173）即可看到页面，修改代码会自动热更新。

### 其他脚本

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 启动本地开发服务器（热更新） |
| `npm run build` | 打包生产版本到 `dist/` 目录 |
| `npm run preview` | 本地预览打包后的产物 |
| `npm run lint` | 运行 ESLint 检查代码 |

## 📁 项目目录说明

```text
first-vibe-app/
├── public/                 # 静态资源，构建时原样拷贝
│   ├── favicon.svg         # 站点图标（index.html 中引用）
│   └── icons.svg           # 图标资源
├── src/
│   ├── assets/             # 图片与图标资源
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── App.jsx             # 页面主组件：导航、首屏、关于我、卡片区、页脚
│   ├── App.css             # 页面布局与组件样式（含响应式断点）
│   ├── index.css           # 全局基础样式（字体、颜色、盒模型）
│   └── main.jsx            # 应用入口，挂载 React 到 #root
├── eslint.config.js        # ESLint 配置
├── index.html              # HTML 模板与挂载点
├── vite.config.js          # Vite 配置
├── package.json            # 依赖与脚本
├── LICENSE                 # MIT 协议
└── README.md
```

## 🖼 项目截图

<!-- 把截图放进 docs/ 目录后，取消下面的注释并改成你的文件名 -->

<!--
![First Vibe App 首页](./docs/screenshot.png)
![First Vibe App 移动端](./docs/screenshot-mobile.png)
-->

> 截图占位区：在项目根目录新建 `docs/` 文件夹并放入截图（例如 `docs/screenshot.png`），然后取消上面注释即可在 GitHub 首页展示。

## 📄 License

本项目基于 [MIT License](./LICENSE) 开源。

Copyright (c) 2026 Tyan913

---

**这是我 Vibe Coding 路上的第一个作品。** 从一行 `npm create vite@latest` 开始，把脑海里的想法一点点变成可以打开的网页。如果你也在学习前端，欢迎交流、提 Issue 或 Star ⭐
