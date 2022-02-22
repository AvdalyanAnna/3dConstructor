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

<style lang="scss">
body {
  font-family: Arial, sans-serif;
  color: #000000;
}

* {
  margin: 0;
  padding: 0;
}

ul {
  padding: 0;
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

.main {
  position: relative;
  height: calc(100vh - 59px);
  margin-top: 59px;
}
</style>
