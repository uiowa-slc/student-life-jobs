<template>
  <div>
    <Head>
      <Title>Listing not found</Title>
    </Head>
    <IowaBar />
    <Header />
    <div class="container content">
      <div class="row">
        <div class="col-lg-7 pt-4 m-auto">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <NuxtLink href="/">Find a Job</NuxtLink>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Listing not found
              </li>
            </ol>
          </nav>

          <main id="main">
            <h1>Listing not found</h1>
            <p>
              Sorry, the page or job listing you're trying to visit has been
              moved or is no longer being listed on this website by Division of
              Student Life Human Resources. If you feel you've reached this page
              in error, please let us know by emailing hr-studentlife@uiowa.edu.
            </p>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>