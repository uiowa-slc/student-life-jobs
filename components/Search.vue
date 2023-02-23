<template>
  <div id="search">
    <p class="text-center">More ways to find a job:</p>
    <ul class="text-center more-ways">
      <li>
        <a href="https://careers.uiowa.edu/handshake">Handshake</a> (full-time
        and part-time jobs, internships)
      </li>
      <li><a href="https://jobs.uiowa.edu">Jobs@UIowa</a> (full-time jobs)</li>
    </ul>
  </div>
</template>
<script setup>
const search = ref([]);
const router = useRouter();
const props = defineProps({
  term: String,
});

var term = "";

if (props.term) {
  term = props.term;
}

function handleSearch(term) {
  if (term) {
    router.push("/search/" + term);
  }
}
</script>
<style scoped>
.more-ways {
  list-style-type: none;
}
</style>
