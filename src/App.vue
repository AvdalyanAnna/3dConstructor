<template>
  <div>
    <DefaultLayout>
      <router-view />
    </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from "@/Components/Layout/DefaultLayout";

export default {
  name: 'App',
  components: {DefaultLayout},
}
</script>

