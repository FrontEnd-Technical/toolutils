import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "redirect-home"
declare module 'nuxt/app' {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}