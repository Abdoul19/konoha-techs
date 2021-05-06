<template>
<div>
  <v-container pa-0 fluid>
        <v-parallax height="300" width="100%" src="../assets/hero-background.webp">
          <v-row  align="center" justify="center" >
            <v-col class="text-center" cols="12" md=6>
            <h1 class="font-weight-regular font-weight-sm-black primary--text text--lighten-1">
             {{ $t('Home.Hero.Title') }} <br/>
             — {{ $t('Home.Hero.Title2') }}

            </h1>
            <h2 class="font-weight-bold">
              {{ $t('Home.Hero.Subtitle') }}
            </h2>
            </v-col>
          </v-row>
          
        </v-parallax>
  </v-container>

  <v-container class="px-6 px-sm-6">
    <Services :addBanner=false :addPresentation=true></Services>
    
    <Specialities/>

    <Contact/>
  </v-container>
</div>
</template>

<script>
import Services from '../components/Services/Services'
import Specialities from '../components/Specialities'
import Contact from '../components/Contact'

export default {
  name: 'Home',
  components: {
    //HelloWorld
    Services,
    Specialities,
    Contact
  },
  
  data(){
    return {
      
    }
  },
  
}
</script>
