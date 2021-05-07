<template>
<v-container>
  <v-row>
    <v-col cols=12>
      <v-card flat tile>
        <v-card-title class="text-h5 text-sm-h3 font-weight-light primary--text text--lighten-1">
          {{ $t('DevProcess.Title')}}
        </v-card-title>
        <v-card-text>
          {{ $t('DevProcess.Text')}}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: 'DevProcess',
  metaInfo(){
    return {
      title: this.$t('DevProcess.PageMeta.Title'),
      titleTemplate: '%s - Konoha Technologies',
      link: [
        {rel: 'canonical', href: process.env.VUE_APP_BASE_URL+this.$route.path}
      ],
      // Define meta tags here.
      meta: [
        {'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {name: 'description', content: this.$t('DevProcess.PageMeta.Description')},
        // The list of types is available here: http://ogp.me/#types
        {property: 'og:title', content: this.$t('DevProcess.PageMeta.Description')},
        {property: 'og:site_name', content: process.env.VUE_APP_NAME},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: process.env.VUE_APP_BASE_URL+this.$route.path},
        {property: 'og:description', content: this.$t('DevProcess.PageMeta.Description')},

        // // Twitter card
        // {name: 'twitter:card', content: 'summary'},
        // {name: 'twitter:site', content: 'https://www.my-site.com/my-special-page'},
        // {name: 'twitter:title', content: 'My Page Title ← My Site'},
        // {name: 'twitter:description', content: 'I have things here on my site.'},
        // // Your twitter handle, if you have one.
        // {name: 'twitter:creator', content: '@alligatorio'},
        // {name: 'twitter:image:src', content: 'https://www.my-site.com/my-special-image.jpg'},

        // Google / Schema.org markup:
        {itemprop: 'name', content: this.$t('DevProcess.PageMeta.Title')+ ' - ' + process.env.VUE_APP_NAME},
        {itemprop: 'description', content: this.$t('DevProcess.PageMeta.Description')},
        // {itemprop: 'image', content: 'https://www.my-site.com/my-special-image.jpg'}
      ]
    }
  }
}
</script>

<style>

</style>