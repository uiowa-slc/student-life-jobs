<template>
  <div>
    <form class="d-flex" @submit.prevent="handleSearch(term)">
      <input
        type="search"
        id="search"
        v-model="term"
        placeholder="Search for a job"
        class="form-control"
      />
      <button class="btn btn-outline-primary" type="submit">Search</button>
    </form>
  </div>
</template>
<script setup>
const search = ref([]);
const router = useRouter();

function handleSearch(term) {
  if (term) {
    router.push("/search/" + term);
  }
}
</script>