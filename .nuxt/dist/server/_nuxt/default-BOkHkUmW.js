import { mergeProps, useSSRContext, defineComponent, reactive, unref, withCtx, renderSlot } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import "ofetch";
import "#internal/nuxt/paths";
import "G:/99.Github/toolutils/node_modules/hookable/dist/index.mjs";
import "G:/99.Github/toolutils/node_modules/unctx/dist/index.mjs";
import "G:/99.Github/toolutils/node_modules/h3/dist/index.mjs";
import "G:/99.Github/toolutils/node_modules/radix3/dist/index.mjs";
import "G:/99.Github/toolutils/node_modules/defu/dist/defu.mjs";
import "G:/99.Github/toolutils/node_modules/ufo/dist/index.mjs";
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "300",
    height: "60",
    viewBox: "0 0 500 100",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g transform="scale(0.14) translate(120, 120)"><path style="${ssrRenderStyle({ "fill": "#00dc82" })}" d="M480.401,240.801v-22.3c0-8.3-6-15.4-14.3-16.8l-32.9-5.1c-7-1.1-12.6-6.1-14.8-12.8c-3-9.3-6.7-18.5-11.2-27.4 
      c-3.1-6.2-2.7-13.5,1.3-19.2l19.7-27.9c4.8-6.9,4-16.3-1.9-22.1l-15.9-15.8l-15.9-15.8c-6-6-15.3-6.7-22.1-1.8l-26.9,19.2 
      c-5.7,4.1-13.3,4.5-19.5,1.2c-9.2-4.9-18.8-8.8-28.5-11.9c-6.7-2.1-11.7-7.6-12.8-14.5l-5.7-33.2c-1.4-8.3-8.6-14.3-16.9-14.3 
      h-22.3h-22.3c-8.3,0-15.4,6-16.8,14.3l-5.6,33.3c-1.1,6.8-6,12.4-12.6,14.5c-9.5,3.1-18.7,6.9-27.7,11.6 
      c-6.2,3.2-13.6,2.7-19.2-1.3l-27.7-19.6c-6.7-4.7-16-4-22,1.5l-15.8,15.9l-15.9,15.8c-6,6-6.7,15.3-1.8,22.1l19.6,27.4 
      c4,5.6,4.5,13,1.4,19.2c-4.6,9-8.4,18.2-11.5,27.8c-2.1,6.6-7.6,11.5-14.5,12.7l-33.2,5.8c-8.3,1.4-14.3,8.6-14.2,16.9v22.3v22.3 
      c0,8.3,6,15.4,14.3,16.8l33.3,5.6c6.8,1.1,12.4,6,14.5,12.6c3.1,9.5,6.9,18.7,11.6,27.7c3.2,6.2,2.7,13.6-1.3,19.2l-19.5,27.5 
      c-4.8,6.9-4,16.3,1.9,22.1l15.9,15.8l15.9,15.8c6,6,15.3,6.7,22.1,1.8l27.4-19.6c5.7-4.1,13.1-4.5,19.3-1.3 
      c8.5,4.3,17.4,8,26.4,10.9c6.6,2.2,11.5,7.7,12.7,14.5l5.7,33.6c1.4,8.3,8.6,14.3,16.9,14.3h22.3h22.3c8.3,0,15.4-6,16.8-14.3 
      l5.4-32.9c1.1-6.9,6.1-12.5,12.8-14.6c9.4-3,18.6-6.7,27.6-11.3c6.2-3.1,13.5-2.7,19.2,1.3l27.9,19.7c6.9,4.8,16.3,4,22.1-1.9 
      l15.8-15.9l15.8-15.9c6-6,6.7-15.3,1.8-22.1l-19.3-27c-4.1-5.7-4.5-13.1-1.3-19.3c4.6-8.9,8.5-18.1,11.6-27.6 
      c2.1-6.5,7.7-11.4,14.4-12.6l33.7-5.7c8.3-1.4,14.3-8.6,14.3-16.9L480.401,240.801z M290.501,374.701 
      c-74.4,27.9-157.3-9.8-185.2-84.2s9.8-157.4,84.1-185.3c74.4-27.9,157.3,9.8,185.2,84.2 
      C402.601,263.801,364.901,346.801,290.501,374.701z"></path><path style="${ssrRenderStyle({ "fill": "#00dc82" })}" d="M240.001,118.301c-32.5,0-63,12.7-86,35.6c-23,23-35.6,53.5-35.6,86s12.7,63,35.6,86c23,23,53.5,35.6,86,35.6 
      s63-12.7,86-35.6c23-23,35.6-53.5,35.6-86s-12.7-63-35.6-86C303.001,131.001,272.501,118.301,240.001,118.301z 
      M232.301,139.201c2.5-0.2,5.1-0.3,7.7-0.3c3,0,5.9,0.1,8.9,0.4c10.4,16.2,18.2,33.7,23.1,52.1h-63.8 
      C213.301,172.901,221.401,155.301,232.301,139.201z M204.601,145.201c-7.8,14.6-13.8,30.1-17.8,46.1h-35.5 
      C163.001,170.301,181.901,153.801,204.601,145.201z M138.901,239.901c0-9.7,1.4-19.1,4-28h40c-1.4,9.6-2.1,19.4-2.1,29.3 
      c0,8.9,0.6,17.8,1.7,26.6h-39.6C140.201,258.901,138.901,249.601,138.901,239.901z M151.201,288.401h35 
      c3.7,15.8,9.4,31.1,16.8,45.6C180.901,325.301,162.601,309.001,151.201,288.401z M201.301,241.201c0-9.9,0.8-19.7,2.3-29.3h72.5 
      c1.3,8.8,1.9,17.7,1.9,26.7c0,9.8-0.8,19.6-2.3,29.1h-72.5C201.901,259.101,201.301,250.201,201.301,241.201z M247.001,340.801 
      c-2.3,0.2-4.7,0.3-7.1,0.3c-3.2,0-6.4-0.2-9.5-0.4c-10.5-16.2-18.2-33.8-23.1-52.2h63.9 
      C266.001,306.901,257.901,324.601,247.001,340.801z M274.501,334.901c7.9-14.8,14-30.4,18-46.6h36.1 
      C316.901,309.801,297.701,326.501,274.501,334.901z M341.001,239.901c0,9.7-1.4,19-3.9,27.9h-40.6 
      c1.4-9.6,2.1-19.3,2.1-29.1c0-9-0.6-17.9-1.7-26.7h40.2C339.701,220.801,341.001,230.201,341.001,239.901z 
      M293.101,191.401c-3.8-15.9-9.4-31.2-16.9-45.8c22.4,8.6,40.9,25,52.4,45.8H293.101z"></path></g><text x="100" y="65" fill="#ffffff" font-size="32" font-family="Arial, sans-serif">ToolUtils</text></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/Logo.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_HeaderLogo = __nuxt_component_0$2;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "backdrop-blur h-[var(--ui-header-height)] ct-border-b fixed-header-scroll" }, _attrs))} data-v-1ffbd495><div class="w-full max-w-[var(--ui-container)] h-full mx-auto ct-flex-col gap-3" data-v-1ffbd495><div class="flex items-center gap-1.5" data-v-1ffbd495><a href="/" class="flex gap-2 items-end" data-v-1ffbd495>`);
  _push(ssrRenderComponent(_component_HeaderLogo, null, null, _parent));
  _push(`</a></div></div></header>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-1ffbd495"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "sectional-info",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const navItems = reactive([
      {
        title: "Text Formater",
        iconClass: "mdi:information-slab-circle-outline",
        path: "/text-formatter",
        focus: true
      },
      {
        title: "Json Formater",
        iconClass: "mdi:play-outline",
        path: "/json-formatter",
        focus: false
      },
      {
        title: "Base64 Formatter",
        iconClass: "mdi:cog-transfer-outline",
        path: "/base64-formatter",
        focus: false
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(_attrs)}><ul class="isolate -mx-2.5 -mt-1.5"><!--[-->`);
      ssrRenderList(unref(navItems), (item, index) => {
        _push(`<li><button type="button" class="${ssrRenderClass([item.focus ? "text-primary" : "text-muted hover:text-default transition-colors", "icon-group flex items-center gap-1.5 py-1 text-sm w-full text-left"])}"><div class="flex items-center px-2.5 py-0.5 text-sm pr-0.5">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: item.iconClass,
          class: "size-5 shrink-0"
        }, null, _parent));
        _push(`</div><span class="title-truncate">${ssrInterpolate(item.title)}</span></button></li>`);
      });
      _push(`<!--]--></ul></nav>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/nav-left/sectional-info.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_MainNavLeftSectionalInfo = _sfc_main$3;
  _push(`<aside${ssrRenderAttrs(mergeProps({ class: "hidden overflow-y-auto py-8 screen-media-large" }, _attrs))} data-v-1e9e7d37><div class="relative" data-v-1e9e7d37>`);
  _push(ssrRenderComponent(_component_MainNavLeftSectionalInfo, null, null, _parent));
  _push(`</div></aside>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/nav-left/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-1e9e7d37"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_MainNavLeft = __nuxt_component_0;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-height relative" }, _attrs))} data-v-23662e2d><div class="w-full max-width mx-auto" data-v-23662e2d><div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-10" data-v-23662e2d>`);
  _push(ssrRenderComponent(_component_MainNavLeft, { class: "lg:col-span-2" }, null, _parent));
  _push(`<div class="lg:col-span-8" data-v-23662e2d><div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-10" data-v-23662e2d>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div></div></main>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-23662e2d"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0$1;
  const _component_Main = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_Main, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-BOkHkUmW.js.map
