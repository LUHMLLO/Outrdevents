<template>
       <div id="gallery" class="color-white padding-50 inset-top-50 inset-bottom-50">

        <div id="outrdevents-home-gallery-search">
          <button id="outrdevents-home-gallery-grid-btn" v-on:click="gridMode = true" v-if="!gridMode">
            <i class='uil uil-apps'></i>
          </button>
          <button id="outrdevents-home-gallery-grid-btn" v-on:click="gridMode = false" v-if="gridMode">
            <i class='uil uil-grids'></i>
          </button> 

          <div class="search-wrapper">
            <input type="text" placeholder="Buscar....">
          </div>

          <div id="outrdevents-home-gallery-dropbox-btn">
              <button class='uil uil-dropbox dropdown-btn'></button>
              <div class="dropdown-box depth-5 flex-center bg-white color-dark padding-50 text-center">
                 <input type="file" accept="image/*" v-on:change="UploadImage" />
              </div>
          </div>
        </div><!--outrdevents-home-gallery-search-->



         <div class="horizontal-slider inset-top-50 inset-bottom-50" v-bind:class="{ row: gridMode }">
          
           <button class="gallery-item horizontal-align col-md-4 col-sm-6 padding-10 cursor-pointer" v-for="(object, index) in filteredItems" :key="index">
             <div class="gallery-item-image">
               <img class="depth-2" v-bind:src='object.img'>
             </div>
             <div class="gallery-item-details"><p>{{object.name}}</p> <small>{{object.date}}</small></div>
           </button><!--gallery item-->
           
         </div><!--horizontal slider-->


   </div><!---gallery--->
</template>



<script>
import {db,ref} from '../firebase.js'
import Swal from 'sweetalert2'

export default {
    name:'gallery',  
    

data(){
    return{
      media:[],
      gridMode:false,
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
    filteredItems: function() {
        let result = this.media
        return result
    }
  },




  methods:{

      UploadImage(e){
        const file = e.target.files[0];
          console.log(file)

          let selectedFile = ref.child('gallery/'+file.name)
        
        selectedFile.put(file).then(response =>{
          
        response.ref.getDownloadURL().then((downloadURL) => {
            db.collection('gallery').add({
              object:downloadURL,
              object_name:file.name,
              object_date:'00/00/00',
            })
        })

        Swal.fire({
          type: 'success',
          title: 'Terminado',
          text: 'Proceso finalizado con exito!'
        })

          }).catch(err => console.log(err))
      }




  },




}
</script>


