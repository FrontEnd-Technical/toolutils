import { Q as defineNuxtRouteMiddleware, n as navigateTo } from "../server.mjs";
import "vue";
import "ofetch";
import "#internal/nuxt/paths";
import "G:/99.Github/toolutils/node_modules/hookable/dist/index.mjs";
import "G:/99.Github/toolutils/node_modules/unctx/dist/index.mjs";
import "G:/99.Github/toolutils/node_modules/h3/dist/index.mjs";
import "vue-router";
import "G:/99.Github/toolutils/node_modules/radix3/dist/index.mjs";
import "G:/99.Github/toolutils/node_modules/defu/dist/defu.mjs";
import "G:/99.Github/toolutils/node_modules/ufo/dist/index.mjs";
import "vue/server-renderer";
const redirectHome = defineNuxtRouteMiddleware((to) => {
  const isHomePage = to.path;
  if (isHomePage === "/") {
    return navigateTo("/text-formatter");
  }
});
export {
  redirectHome as default
};
//# sourceMappingURL=redirect-home-CYtkrLbT.js.map
