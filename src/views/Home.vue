<template>
  <div>
   
   <div class="header color-white">   
     <div style="background: url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto');" class="blur-bg"></div>
     <h1>OUTRDEVENTS</h1>
     <small>Quiet Parties</small>
   </div>






   <div class="bg-near-amoled color-white padding-50">

        <div id="outrdevents-home-gallery-search">
          <button id="outrdevents-home-gallery-grid-btn"><i class='uil uil-apps'></i></button>

          <div class="search-wrapper">
            <input type="text" placeholder="Buscar....">
          </div>

          <button id="outrdevents-home-gallery-dropbox-btn"><i class='uil uil-dropbox'></i></button>
        </div><!--outrdevents-home-gallery-search-->



         <div class="horizontal-slider inset-top-50 inset-bottom-50">

           <div class="horizontal-align col-md-3 col-sm-6 padding-10" v-for="(item, galleryData) in gallery" :key="galleryData">
             <img class="gallery-item-image depth-5" v-bind:src='item.img'>
             <div class="gallery-item-details"><p>{{item.details}}</p></div>
           </div>
           
         </div><!--horizontal slider-->


   </div><!---gallery--->





  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{
    
        gallery:[
          {'img':'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto','details':'im an image at the gallery'},
          {'img':'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto','details':'im an image at the gallery'},
          {'img':'https://images.unsplash.com/photo-1545128485-c400e7702796?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto','details':'im an image at the gallery'},
          {'img':'https://images.unsplash.com/photo-1502872364588-894d7d6ddfab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto','details':'im an image at the gallery'},    
          {'img':'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto','details':'im an image at the gallery'},
          {'img':'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto','details':'im an image at the gallery'},
          {'img':'https://images.unsplash.com/photo-1545128485-c400e7702796?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto','details':'im an image at the gallery'},
          {'img':'https://images.unsplash.com/photo-1502872364588-894d7d6ddfab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto','details':'im an image at the gallery'},
        ],

    }
  }

}
</script>
