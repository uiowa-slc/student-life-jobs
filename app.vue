<template>
  <div>
    <IowaBar />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <BrowseJobsButton />
    <!-- <div v-if="isShowBrowse">
      <BrowseJobs />
    </div> -->
    <Footer />
  </div>
</template>
<style lang="scss">
@import "~/assets/scss/main.scss";
</style>
<script setup>

// import { ref, defineAsyncComponent, onMounted } from "vue";
// const isShowBrowse = ref(false);
// onMounted(() => {
//   isShowBrowse.value = true;
// });

// const BrowseJobs = defineAsyncComponent(() =>
//   import("~/components/BrowseJobs.vue")
// );

// import { UidsBrandBar } from "uids";
titleTemplate: (title) => {
  return title
    ? `${title} - Student Life Jobs | The University of Iowa`
    : 'Student Life Jobs | The University of Iowa'
}

</script>