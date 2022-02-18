<template>
  <div>
    <Header/>
    <main class="main">
      <NavBar/>
      <div class="main-content">
        <slot/>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "@/Components/Layout/Header";
import NavBar from "@/Components/Layout/NavBar";

export default {
  name: "DefaultLayout",
  components: {Header, NavBar},
}
</script>
