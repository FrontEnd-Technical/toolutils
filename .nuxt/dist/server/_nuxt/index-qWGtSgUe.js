import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "G:/99.Github/toolutils/node_modules/hookable/dist/index.mjs";
import "G:/99.Github/toolutils/node_modules/unctx/dist/index.mjs";
import "G:/99.Github/toolutils/node_modules/h3/dist/index.mjs";
import "vue-router";
import "G:/99.Github/toolutils/node_modules/radix3/dist/index.mjs";
import "G:/99.Github/toolutils/node_modules/defu/dist/defu.mjs";
import "G:/99.Github/toolutils/node_modules/ufo/dist/index.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h1${ssrRenderAttrs(_attrs)}>hello</h1>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/json-formatter/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-qWGtSgUe.js.map
