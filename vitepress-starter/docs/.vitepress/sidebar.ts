import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
    "/guide": [
        {
            text: "theme配置",
            collapsed: false,
            items: [{ text: "首页", link: "/guide/index" }],
        },
        {
            text: "app配置",
            collapsed: false,
            items: [
                { text: "guide1", link: "/guide/markdown" },
                { text: "guide2", link: "/guide/sidebar" },
                { text: "images", link: "/guide/img-handle" },
                { text: "api", link: "/guide/api" },
            ],
        },
    ],
    "/plugin": [
        {
            text: "插件",
            collapsed: false,
            items: [
                { text: "plugin1", link: "/plugin/side1" },
                { text: "plugin2", link: "/plugin/side2" },
            ],
        },
    ],
    "/tutor": [
        {
            text: "教程",
            collapsed: false,
            items: [
                { text: "tutor1", link: "/tutor/side1" },
                { text: "tutor2", link: "/tutor/side2" },
            ],
        },
    ],
    "/others": [
        {
            text: "其他",
            collapsed: false,
            items: [
                { text: "outline", link: "/others/outline" },
                { text: "配置", link: "/others/conf" },
            ],
        },
    ],
};
