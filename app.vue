<template>
  <div>
    <IowaBar />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <BrowseJobsButton />
    <Footer />
  </div>
</template>
<style lang="scss">
@import "~/assets/scss/main.scss";
@import "node_modules/uids/src/components/button/button.scss";
@import "~/node_modules/@fortawesome/fontawesome-svg-core/styles.css";
</style>
<script setup>
useHead({
  // as a string,
  // where `%s` is replaced with the title
  // titleTemplate: '%s - After Class | The University of Iowa'
  // ... or as a function
  titleTemplate: (title) => {
    return title
      ? `${title} - Student Life Jobs | The University of Iowa`
      : "Student Life Jobs | The University of Iowa";
  },
});
</script>