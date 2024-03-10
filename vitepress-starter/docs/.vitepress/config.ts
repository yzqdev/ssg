import { defineConfig } from "vitepress";
import { navbar } from "./nav";
import { sidebar } from "./sidebar";
export default defineConfig({
    base: "/starter/",

    // site-level locales config
    outDir: "../dist",
    head: [
        // ['link', { rel: 'shortcut icon', type: 'image/png', href: '/hero.png' }],
        // ['link', { rel: 'shortcut icon', type: 'image/png', href: '/hero.png' }],
        ["link", { rel: "icon", type: "image/svg+xml", href: "/vue.svg" }],
    ],
    lang: "zh-CN",
    title: "VitePress",
    description: "Vue 驱动的静态网站生成器",
    vue: {},
    themeConfig: {
        logo: "/vue.svg",
        search: {
            provider: "local",
            options: {
                locales: {
                    zh: {
                        translations: {
                            button: {
                                buttonText: "搜索文档",
                                buttonAriaLabel: "搜索文档",
                            },
                            modal: {
                                noResultsText: "无法找到相关结果",
                                resetButtonTitle: "清除查询条件",
                                footer: {
                                    selectText: "选择",
                                    navigateText: "切换",
                                },
                            },
                        },
                    },
                },
            },
        },
        // theme-level locales config

        // navbar
        nav: navbar,

        sidebar: sidebar,
        socialLinks: [{ icon: "github", link: "https://github.com/yzqtpl/vitepress-starter" }],
        editLink: {
            pattern: "https://github.com/yzqtpl/vitepress-starter/edit/main/docs/:path",
            text: "Edit this page on GitHub",
        },
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2019-present yzqdev",
        },
    },
});
