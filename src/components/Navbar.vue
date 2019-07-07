<template>
    <div class="navbar fixed-top bg-white depth-5">

          <div class="nav-logo">
              <h1 class="font-logo">OUTRDEVENTS</h1>
          </div>

        <div class="nav-links">
            <router-link to="/" class="color-dark"><i class='uil uil-home-alt'></i><p>INICIO</p> <span></span></router-link> 
            <router-link to="/about" class="color-dark"><i class='uil uil-users-alt'></i><p>NOSOTROS</p> <span></span></router-link>
            <router-link to="/plans" class="color-dark"><i class='uil uil-book-reader'></i><p>SERVICIOS</p> <span></span></router-link> 
            <router-link to="/portfolio" class="color-dark"><i class='uil uil-calendar-alt'></i><p>EVENTOS</p> <span></span></router-link> 
            <router-link to="/contact" class="color-dark"><i class='uil uil-envelope-alt'></i><p>CONTACTENOS</p> <span></span></router-link> 
            <router-link to="/help" class="color-dark"><i class='uil uil-life-ring'></i><p>AYUDA</p> <span></span></router-link> 
        </div><!---nav-links-->

    </div><!---navbar-->
</template>


<script>
export default {
    name: 'navbar'
}
</script>
