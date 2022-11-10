<template>
  <div>
    <ul v-if="props.jobs">
      <li v-for="job in props.jobs" :key="job.position.id">
        <NuxtLink :href="'/jobs/show/' + job.position.id">{{
          job.position.posting_title
        }}</NuxtLink>
      </li>
    </ul>
    <div v-else>
      <p>No jobs found.</p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  jobs: Object,
});

// console.log(props.jobs);
</script>