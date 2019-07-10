<template>
  <div id="app" class="bg-near-amoled">
    <navbar/>

    <transition enter-active-class="animated fadeIn" leave-active-class="fadeOut">
     <router-view/>
    </transition>
  
  
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