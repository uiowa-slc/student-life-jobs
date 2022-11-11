<template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>
<style lang="scss">
@import "~/assets/scss/main.scss";
@import "~/node_modules/@fortawesome/fontawesome-svg-core/styles.css";
</style>
<script setup>
// import { UidsBrandBar } from "uids";<script setup>
useHead({
  titleTemplate: (title) => {
    return title
      ? `${title} - Student Life Jobs | The University of Iowa`
      : 'Student Life Jobs | The University of Iowa'
  }
})
</script>