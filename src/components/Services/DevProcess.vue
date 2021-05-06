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
  name: 'DevProcess'
}
</script>

<style>

</style>