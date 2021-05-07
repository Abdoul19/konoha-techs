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
  metaInfo(){
    return {
      title: this.$t('Home.PageMeta.Title'),
      titleTemplate: '%s - Konoha Technologies',
      link: [
        {rel: 'canonical', href: process.env.VUE_APP_BASE_URL+this.$route.path}
      ],
      // Define meta tags here.
      meta: [
        {'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {name: 'description', content: this.$t('Home.PageMeta.Description')},
        // The list of types is available here: http://ogp.me/#types
        {property: 'og:title', content: this.$t('Home.PageMeta.Description')},
        {property: 'og:site_name', content: process.env.VUE_APP_NAME},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: process.env.VUE_APP_BASE_URL+this.$route.path},
        {property: 'og:description', content: this.$t('Home.PageMeta.Description')},

        // // Twitter card
        // {name: 'twitter:card', content: 'summary'},
        // {name: 'twitter:site', content: 'https://www.my-site.com/my-special-page'},
        // {name: 'twitter:title', content: 'My Page Title ← My Site'},
        // {name: 'twitter:description', content: 'I have things here on my site.'},
        // // Your twitter handle, if you have one.
        // {name: 'twitter:creator', content: '@alligatorio'},
        // {name: 'twitter:image:src', content: 'https://www.my-site.com/my-special-image.jpg'},

        // Google / Schema.org markup:
        {itemprop: 'name', content: this.$t('Home.PageMeta.Title')+ ' - ' + process.env.VUE_APP_NAME},
        {itemprop: 'description', content: this.$t('Home.PageMeta.Description')},
        // {itemprop: 'image', content: 'https://www.my-site.com/my-special-image.jpg'}
      ]
    }
  }
}
</script>
