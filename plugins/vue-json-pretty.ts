import VueJsonPretty from "vue-json-pretty";

export default defineNuxtPlugin((app) => {
  app.vueApp.component("VueJsonPretty", VueJsonPretty);
});
