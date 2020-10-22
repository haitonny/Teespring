<template>
  <div id="app" class="font-body">
    <router-view />
    <the-footer />
  </div>
</template>
<script>
import TheFooter from "@/components/TheFooter";
export default {
  name: "App",
  components: { TheFooter }
};
</script>

<style></style>
