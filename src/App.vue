<template>
  <div id="app">
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
@import url("https://unicons.iconscout.com/release/v1.0.0/css/unicons.css");
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");



</style>