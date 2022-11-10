<template>
  <div>
    <form @submit.prevent="handleSearch(term)">
      <input
        type="search"
        id="search"
        v-model="term"
        placeholder="Search for a job"
      />
      <button type="submit">Search</button>
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