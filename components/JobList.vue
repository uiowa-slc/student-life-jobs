<template>
  <div>
    <ul v-if="props.jobs.length > 0">
      <li v-for="job in props.jobs" :key="job.position.id">
        <NuxtLink :href="'/jobs/show/' + job.position.id"><strong>{{
            job.position.posting_title
        }}</strong></NuxtLink>
      </li>
    </ul>
    <div v-else>
      <p><strong>No jobs found.</strong></p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  jobs: Object,
});

// console.log(props.jobs);
</script>