export default defineNuxtRouteMiddleware((to) => {
  const isHomePage = to.path;

  if (isHomePage === '/') {
    return navigateTo('/text-formatter');
  }
});