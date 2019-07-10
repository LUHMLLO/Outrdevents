<template>
  <div>
   
   <div class="header color-white">   
     <div style="background: url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto');" class="blur-bg"></div>
     <h1>OUTRDEVENTS</h1>
     <small>Quiet Parties</small>
   </div>







   <gallery/>







     <div class="showcase-carousel">

       <img class="showcase-carousel-img" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto">
       <div class="showcase-carousel-cover"></div>


       <div class="showcase-carousel-details depth-5 bg-white">
         
         <div class="showcase-carousel-logo">
           <img src="http://menusantiago.com/wp-content/uploads/2013/07/Logo-Square-One-PNG-01.png" alt="">
         </div>
         <h3>SQUARE ONE</h3>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, iure earum. Repellendus voluptas aut laborum consequuntur facilis ad tempora dolorem sed harum, totam eius quasi delectus? Cumque labore excepturi rem.</p>
         <button><i class='uil uil-angle-right-b'></i></button>
       </div>

     </div><!---carousel showcase-->



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
  }

}
</script>
