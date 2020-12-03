<template>
<div>
  <v-container pa-0 fluid>
        <v-parallax  width="100%" src="../assets/hero-background.jpg">
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="6">
            <h1>
            Up your digital game <br/>
            — it’s all the goal.
            </h1>
            <h2 class="text--primary">Development, analytics, data visualization, and content management for companies in the digital age.</h2>
            </v-col>
          </v-row>
          
        </v-parallax>
  </v-container>

  <v-container>
    <Services/>
    
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
