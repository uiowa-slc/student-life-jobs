import { defineNuxtPlugin } from "#imports";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.options.scrollBehavior = async (to, from, savedPosition) => {
    let goTo;

    if (to.hash) {
      goTo = {
        el: to.hash,
        behavior: "auto",
        top: 64,
      };
    } else if (savedPosition) {
      goTo = savedPosition;
    } else {
      goTo = {
        top: 0,
        behavior: "auto",
      };
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(goTo);
      }, 100);
    });
  };
});
