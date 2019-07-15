<template>
  <div>
   
   <div class="header color-white">   
     <div style="background: url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto');" class="blur-bg"></div>
     <h1>OUTRDEVENTS</h1>
     <small>Quiet Parties</small>
   </div>







   <gallery/>

   <eventscarousel/>









     <div class="row color-white">
       <div class="col-md-4 padding-50">
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat nesciunt culpa in cum dolor. Repudiandae rerum optio assumenda! Expedita ut veniam modi voluptas eum, autem nisi ex nulla! Ea, saepe?</p>
       </div>
       <div class="col-md-4 padding-50">
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat nesciunt culpa in cum dolor. Repudiandae rerum optio assumenda! Expedita ut veniam modi voluptas eum, autem nisi ex nulla! Ea, saepe?</p>
       </div>
       <div class="col-md-4 padding-50">
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat nesciunt culpa in cum dolor. Repudiandae rerum optio assumenda! Expedita ut veniam modi voluptas eum, autem nisi ex nulla! Ea, saepe?</p>
       </div>
     </div>















  </div>
</template>

<script>
export default {
  name: 'home',

  components:{    
    gallery: () => import("../components/Gallery.vue"),
    eventscarousel: () => import("../components/EventsCarousel.vue"),
  }

}
</script>
