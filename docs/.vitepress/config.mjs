import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "诸神愚戏 WIKI",
  head: [["link", { rel: "icon", href: "../public/logo.png" }]],
  description: "诸神愚戏 WIKI",
  lang: "zh",
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.png",
    search: { provider: "local" },
    nav: [
      { text: "WIKI", link: "/wiki/start", activeMatch: "/wiki/" },
      {
        text: "贡献",
        link: "/contribution/contribute",
        activeMatch: "/contribution/",
      },
    ],
    editLink: {
      pattern: "https://github.com/Mueoink/zsyx-wiki/tree/main/docs/:path",
      text: "编辑此页",
    },

    sidebar: {
      "/wiki/": [
        {
          text: "开始",
          collapsed: false,
          items: [{ text: "介绍", link: "/wiki/start" }],
        },
        {
          text: "世界观",
          collapsed: false,
          items: [
            { text: "世界观", link: "/wiki/setting/world_setting.md" },
            {
              text: "纪元",
              collapsed: true,
              items: [
                { text: "第一纪元", link: "/wiki/setting/first_age.md" },
                { text: "第二纪元", link: "/wiki/setting/sec_age.md" },
                { text: "第三纪元", link: "/wiki/setting/thr_age.md" },
                { text: "第四纪元", link: "/wiki/setting/four_age.md" },
                { text: "第五纪元", link: "/wiki/setting/five_age.md" },
                { text: "第六纪元", link: "/wiki/setting/six_age.md" },
              ],
            },
          ],
        },
        {
          text: "角色 天赋及道具",
          collapsed: false,
          items: [
            { text: "主要角色信息", link: "/wiki/characters/characters.md" },
            { text: "天赋信息", link: "/wiki/characters/skills.md" },
            { text: "道具信息", link: "/wiki/characters/props.md" },
            { text: "其他角色信息", link: "/wiki/characters/another.md" },
          ],
        },

        {
          text: "情节与事件",
          collapsed: false,
          items: [{ text: "小说剧情时间线", link: "/wiki/story/main.md" }],
        },
        {
          text: "同人收录",
          collapsed: true,
          items: [
            {
              text: "诸神牌",
              collapsed: true,
              items: [
                { text: "规则", link: "/wiki/fanwork/puke/rule.md" },
                { text: "体系详情", link: "/wiki/fanwork/puke/details.md" },
              ],
            },
          ],
        },
      ],
      "/contribution/": [
        {
          text: "贡献",
          collapsed: false,
          items: [
            { text: "如何贡献", link: "/contribution/contribute" },
            { text: "编写要求", link: "/contribution/compile" },
            { text: "团队", link: "/contribution/team" },
          ],
        },
      ],
    },

    outline: {
      label: `本页层级`,
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/Mueoink/zsyx-wiki/" },
    ],
    footer: {
      message: "Released under the CC BY-NC-ND 4.0.",
      copyright: "Copyright © 2024-present Mueo",
    },
  },
});
