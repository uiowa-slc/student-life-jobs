<template>
  <header class="header border-bottom">
    <a class="skip-link sr-only" href="#main">Skip to main content</a>
    <div class="container-fluid">
      <div class="row border-bottom site-title-container">
        <div class="col">
          <div class="container-xl">
            <a
              href="https://studentlife.uiowa.edu"
              class="parent-site-title d-block d-md-none"
              >Division of Student Life</a
            >
            <NuxtLink
              class="site-title"
              href="/"
              aria-label="Student Life Jobs"
            >
              Student Life Jobs
            </NuxtLink>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  </header>
</template>
<style scoped>
</style>