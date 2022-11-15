<template>
  <div>
    <Head>
      <Title>{{ job.posting_title }}</Title>
      <Meta name="description" :content="job.basic_job_function" />
    </Head>
    <Header />
    <div class="container content">
      <div class="row">
        <div class="col-lg-8 pt-4 m-auto">
          <main id="main">
            <div v-if="job">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <NuxtLink href="/">Find a Job</NuxtLink>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    {{ job.posting_title }}
                  </li>
                </ol>
              </nav>

              <h1>{{ job.posting_title }}</h1>
              <div
                class="bg-gray p-4 mb-3 ms-md-3 mb-md-3 float-md-end sidecar"
              >
                <p class="">
                  <strong>Location: </strong>
                  <NuxtLink :href="'/jobs/location/' + job.location_id">{{
                    job.work_location
                  }}</NuxtLink
                  ><br />
                  <strong>Rate of pay: </strong> {{ job.rate_of_pay }}<br />
                  <strong>Hiring status: </strong>
                  <span
                    :class="job.has_open_job_posting == 'true' ? 'yes' : 'no'"
                    >{{
                      job.has_open_job_posting == "true"
                        ? "Currently hiring"
                        : "Not currently hiring"
                    }}</span
                  ><br />
                  <strong>Open to non-UI students: </strong>
                  <span
                    :class="
                      job.accepts_non_hawkid_applicants == 'true' ? 'yes' : 'no'
                    "
                    >{{
                      job.accepts_non_hawkid_applicants == "true" ? "Yes" : "No"
                    }}</span
                  >
                </p>
                <p class="mb-1">
                  <a
                    class="bttn bttn--full bttn--tertiary bttn--small"
                    :href="job.job_posting_url"
                    target="_blank"
                    rel="noopener"
                    >Apply for this job <i class="fa-arrow-right fas"></i
                  ></a>
                </p>
                <p
                  class="mb-0 text-center"
                  v-if="job.accepts_non_hawkid_applicants == 'true'"
                >
                  <small class="text-center"
                    ><a href="https://apps.studentlife.uiowa.edu/seo/"
                      >Not a UI student? Apply here.</a
                    ></small
                  >
                </p>
              </div>
              <p>{{ job.basic_job_function }}</p>
              <h2>Responsibilities</h2>
              <div v-html="job.responsibilities"></div>
              <h2>Qualifications</h2>
              <div v-html="job.qualifications"></div>
              <h2>Training requirements</h2>
              <div v-html="job.training_requirements"></div>
              <h2>What you will learn:</h2>
              <p>{{ job.what_you_will_learn }}</p>
              <p class="text-center mt-5">
                <a
                  class="bttn bttn--tertiary bttn--large"
                  :href="job.job_posting_url"
                  target="_blank"
                  rel="noopener"
                  >Apply for this job
                </a>
              </p>
              <p
                class="mb-0 text-center"
                v-if="job.accepts_non_hawkid_applicants == 'true'"
              >
                <small class="text-center"
                  ><a href="https://apps.studentlife.uiowa.edu/seo/"
                    >Not a UI student? Apply here.</a
                  ></small
                >
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const job = ref([]);
const jobFeed = ref([]);

jobFeed.value = await getJob(route.params.id).then((result) => {
  //console.log(result.value);
  if (result.value.positions) {
    job.value = result.value.positions[0].position;
  } else {
  }
});

if (job.value.has_open_job_posting == "true") {
  useJsonld(() => ({
    "@context": "http://schema.org",
    "@type": "JobPosting",
    datePosted: "2022-11-12T00:00:00",
    description: job.value.basic_job_function,
    title: job.value.posting_title,
    employmentType: "PART_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "University of Iowa",
      sameAs: [
        "https://en.wikipedia.org/wiki/University_of_Iowa",
        "https://goo.gl/maps/vLD8h94JdRB2",
        "https://www.facebook.com/universityofiowa",
        "https://www.twitter.com/uiowa",
        "https://www.instagram.com/uiowa",
        "https://snapchat.com/add/uiowa",
        "https://www.linkedin.com/school/university-of-iowa/",
        "https://www.pinterest.com/uiowa",
        "https://www.youtube.com/user/universityofiowa",
      ],
      url: "https://uiowa.edu",
      telephone: "+1-319-335-3500",
      logo: {
        "@type": "ImageObject",
        url: "https://uiowa.edu/themes/custom/uids_base/uids/assets/images/uiowa-primary.png",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Iowa City",
        addressRegion: "IA",
        postalCode: "52242",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "41.6639115 (WGS 84)",
        longitude: "-91.535741 (WGS 84)",
      },
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Iowa City",
        addressRegion: "IA",
        postalCode: "52242",
      },
    },
  }));
}
</script>
<style scoped>
</style>