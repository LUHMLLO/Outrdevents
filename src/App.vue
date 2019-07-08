<template>
  <div id="app" class="bg-near-amoled">
    <navbar/>
    <router-view/>
  </div>
</template>


<script>
export default {
  components:{
    navbar: () => import("./components/Navbar.vue"),
  },
}
</script>

<style>
@import url("./assets/MIN/style.css");



</style>