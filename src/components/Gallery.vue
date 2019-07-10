<template>
       <div id="gallery" class="color-white padding-50 inset-top-50 inset-bottom-50">

        <div id="outrdevents-home-gallery-search">
          <button id="outrdevents-home-gallery-grid-btn"><i class='uil uil-apps'></i></button>

          <div class="search-wrapper">
            <input type="text" placeholder="Buscar....">
          </div>

          <button id="outrdevents-home-gallery-dropbox-btn">
              <i class='uil uil-dropbox dropdown-btn'></i>
              <div class="dropdown-box depth-5 flex-center bg-white color-dark padding-50">
                 <i class='uil uil-dropbox margin-center font-size-50 color-smoke'></i>
              </div>
          </button>
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
</template>



<script>
import {db} from '../firebase.js'

export default {
    name:'gallery',  
    

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
