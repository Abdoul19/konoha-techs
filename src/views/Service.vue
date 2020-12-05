<template>
  <v-container class="px-6 px-sm-6">
    <Services :addPresentation="false" :addBanner=true></Services>
  </v-container>
</template>

<script>
import Services from '../components/Services/Services'

export default {
  name: 'Service',
  components: {
    Services
  },
}
</script>

<style>

</style>