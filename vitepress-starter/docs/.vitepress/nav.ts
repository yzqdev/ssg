import { DefaultTheme } from "vitepress/types/default-theme";
export const navbar: DefaultTheme.NavItem[] = [
    {
        text: "主页",
        activeMatch: "^/guide/",
        link: "/guide/",
    },
    {
        text: "插件",
        activeMatch: "^/plugin/",
        link: "/plugin/side1",
    },
    {
        text: "侧边",
        activeMatch: "^/tutor/",
        link: "/tutor/side1",
    },
    {
        text: "其他",
        items: [
            { text: "index", link: "/others/index" },
            { text: "conf", link: "/others/conf" },
            { text: "outline", link: "/others/outline" },
        ],
    },
];
