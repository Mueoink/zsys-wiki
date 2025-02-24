// .vitepress/theme/index.js

import DefaultTheme from "vitepress/theme";
import "./custom.css";
import MemberBlock from "./MemberBlock.vue";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.component("MemberBlock", MemberBlock);
  }
}