<template>
  <div>
   
   <div class="header color-white">   
     <div style="background: url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto');" class="blur-bg"></div>
     <h1>OUTRDEVENTS</h1>
     <small>Quiet Parties</small>
   </div>






   <div id="gallery" class="color-white padding-50 inset-top-50 inset-bottom-50">

        <div id="outrdevents-home-gallery-search">
          <button id="outrdevents-home-gallery-grid-btn"><i class='uil uil-apps'></i></button>

          <div class="search-wrapper">
            <input type="text" placeholder="Buscar....">
          </div>

          <button id="outrdevents-home-gallery-dropbox-btn"><i class='uil uil-dropbox'></i></button>
        </div><!--outrdevents-home-gallery-search-->



         <div class="horizontal-slider inset-top-50 inset-bottom-50">

           <button class="gallery-item horizontal-align col-md-3 col-sm-6 padding-10 cursor-pointer" v-for="(object, index) in media" :key="index">
             <div class="gallery-item-image">
               <img class="depth-2" v-bind:src='object.img'>
               <span class="gallery-item-cover"><i class='uil uil-play color-white'></i></span>
             </div>
             <div class="gallery-item-details"><p>{{object.name}}</p> <small>{{object.date}}</small></div>
           </button><!--gallery item-->
           
         </div><!--horizontal slider-->


   </div><!---gallery--->








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


import {db} from '../firebase.js'

export default {
  name: 'home',
  data(){
    return{
      media:[]
    }
  },


  created(){
          db.collection('gallery').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) =>{
              //console.log(doc.data())
                 const data ={
                   'img': doc.data().object,
                   'name': doc.data().object_name,
                   'date': doc.data().object_date,
                 }
                 this.media.push(data)
            })
          });
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => {
         return item.type.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
    }
  }








}
</script>
