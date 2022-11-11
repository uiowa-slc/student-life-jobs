<template>
  <main>

    <Head>
      <Title>{{ job.posting_title }}</Title>
    </Head>
    <div v-if="job">
      <h1>{{ job.posting_title }}</h1>
      <p>
        <a :href="job.job_posting_url" target="_blank" rel="noopener">Apply for this position</a>
      </p>
      <p>
        Location:
        <NuxtLink :href="'/jobs/location/' + job.location_id">{{
            job.work_location
        }}</NuxtLink><br />
        Rate of pay: {{ job.rate_of_pay }}<br />
        Currently hiring: <strong>{{ job.has_open_job_posting }}</strong><br />
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
        <a :href="job.job_posting_url" target="_blank" rel="noopener">Apply for this position</a>
      </p>
    </div>
  </main>
</template>
<script setup>
const route = useRoute();
const job = ref([]);
const jobFeed = ref([]);

jobFeed.value = await getJob(route.params.id).then((result) => {
  console.log(result.value);
  job.value = result.value.positions[0].position;
  console.log(job.value);
});

useJsonld(() => ({
  "@context": "http://schema.org",
  "@type": "JobPosting",
  "datePosted": "2022-11-12T00:00:00",
  "description": job.value.basic_job_function,
  "title": job.value.posting_title,
  "employmentType": "PART_TIME",
  "hiringOrganization": {
    "@type": "CollegeOrUniversity",
    "@id": "https://uiowa.edu/#CollegeorUniversity",
    "name": "University of Iowa",
    "sameAs": [
      "https://en.wikipedia.org/wiki/University_of_Iowa",
      "https://goo.gl/maps/vLD8h94JdRB2",
      "https://www.facebook.com/universityofiowa",
      "https://www.twitter.com/uiowa",
      "https://www.instagram.com/uiowa",
      "https://snapchat.com/add/uiowa",
      "https://www.linkedin.com/school/university-of-iowa/",
      "https://www.pinterest.com/uiowa",
      "https://www.youtube.com/user/universityofiowa"
    ],
    "url": "https://uiowa.edu",
    "telephone": "+1-319-335-3500",
    "logo": {
      "@type": "ImageObject",
      "url": "https://uiowa.edu/themes/custom/uids_base/uids/assets/images/uiowa-primary.png"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Iowa City",
      "addressRegion": "IA",
      "postalCode": "52242"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.6639115 (WGS 84)",
      "longitude": "-91.535741 (WGS 84)"
    }
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Iowa City",
      "addressRegion": "IA",
      "postalCode": "52242"
    },
  },
}));
</script>