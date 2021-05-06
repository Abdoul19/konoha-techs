<template>
<v-container>
  <v-row>
    <v-col cols=12>
      <v-card flat tile>
        <v-card-title class="text-h5 text-sm-h3 font-weight-light primary--text text--lighten-1">
          {{ $t('AppModerniz.Main.Title')}}
        </v-card-title>

        <v-card-text>
           {{ $t('AppModerniz.Main.Text')}}
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols=12>
      <v-card flat tile>
        <v-card-title class="text-h5 text-sm-h3 font-weight-light primary--text text--lighten-1">
          {{ $t('AppModerniz.Assessment.Title')}}
        </v-card-title>

        <v-card-text>
          {{ $t('AppModerniz.Assessment.Text')}}
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols=12>
      <v-card flat tile >
        <v-card-title class="text-h5 text-sm-h3 font-weight-light primary--text text--lighten-1">
          {{ $t('AppModerniz.Implementation.Title')}}
        </v-card-title>

        <v-card-text>
          {{ $t('AppModerniz.Implementation.Text')}}
        </v-card-text>
      </v-card>
    </v-col>
      <v-col cols=12>
      <v-card flat tile>
        <v-card-title class="text-h5 text-sm-h3 font-weight-light primary--text text--lighten-1">

          {{ $t('AppModerniz.Optimization.Title')}}
          
        </v-card-title>

        <v-card-text>
           {{ $t('AppModerniz.Optimization.Text')}}
        </v-card-text>
      </v-card>
    </v-col>

  </v-row>
</v-container>
</template>

<script>
export default {
  name: 'AppModerniz'
}
</script>

<style>

</style>