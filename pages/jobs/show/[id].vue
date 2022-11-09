<template>
  <main>
    <Head>
      <Title>{{ job.posting_title }}</Title>
    </Head>
    <div v-if="job">
      <h1>{{ job.posting_title }}</h1>
      <p>
        <a :href="job.job_posting_url" target="_blank" rel="noopener"
          >Apply for this position</a
        >
      </p>
      <p>
        Location:
        <NuxtLink :href="'/jobs/location/' + job.location_id">{{
          job.work_location
        }}</NuxtLink
        ><br />
        Rate of pay: {{ job.rate_of_pay }}<br />
        Currently hiring: <strong>{{ job.has_open_job_posting }}</strong
        ><br />
        Open to non-UI students:
        <strong>{{ job.accepts_non_hawkid_applicants }}</strong>
      </p>
      <h2>Basic job function</h2>
      <p>{{ job.basic_job_function }}</p>
      <h2>Responsibilities</h2>
      <div v-html="job.responsibilities"></div>
      <h2>Qualifications</h2>
      <div v-html="job.qualifications"></div>
      <h2>Training requirements</h2>
      <div v-html="job.training_requirements"></div>
      <h2>What you will learn:</h2>
      <p>{{ job.what_you_will_learn }}</p>
      <p>
        <a :href="job.job_posting_url" target="_blank" rel="noopener"
          >Apply for this position</a
        >
      </p>
    </div>
  </main>
</template>
<script setup>
const route = useRoute();
const job = ref([]);
const jobFeed = ref([]);

jobFeed.value = await getJob(route.params.id).then((result) => {
  //console.log(result.value);
  job.value = result.value.positions[0].position;
});
</script>