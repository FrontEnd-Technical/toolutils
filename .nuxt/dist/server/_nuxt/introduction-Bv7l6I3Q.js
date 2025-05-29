import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { l as VBtn } from "./VBtn-B-xsRwMi.js";
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:col-span-12" }, _attrs))}><div class="relative border-b border-default py-8"><div class=""><div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"><h1 class="text-3xl sm:text-4xl text-pretty font-bold text-highlighted">Introduction</h1></div><div class="text-lg text-pretty text-muted mt-4">Nuxt&#39;s goal is to make web development intuitive and performant with a great Developer Experience in mind.</div></div></div><div class="mt-8 pb-24 space-y-12"><div id="#automation-and-conventions" class="section"><h2 class="text-4xl"> Title 1</h2>`);
  _push(ssrRenderComponent(VBtn, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Button `);
      } else {
        return [
          createTextVNode(" Button ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/getting-started/introduction.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const introduction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  introduction as default
};
//# sourceMappingURL=introduction-Bv7l6I3Q.js.map
