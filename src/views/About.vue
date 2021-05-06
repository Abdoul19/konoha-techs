<template>
  <v-container class="px-6 px-sm-6">
    <v-card flat tile>
      <v-card-title class="text-h5 text-sm-h3 font-weight-light primary--text text--lighten-1">
        {{ $t('About.Title') }}
      </v-card-title>
      <v-card-text>
        {{ $t('About.Text') }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  data () {
    return { }
  }
}
</script>

<style>
</style>