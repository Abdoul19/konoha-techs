<template>
<v-container>
  <v-row>
    <v-col cols=12>
      <v-card flat tile>
        <v-card-title class="text-h5 text-sm-h3 font-weight-light primary--text text--lighten-1">
          {{ $t('WebDev.Web.Title')}}
        </v-card-title>

        <v-card-text>
          {{ $t('WebDev.Web.Text')}}
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols=12>
      <v-card flat tile>
        <v-card-title class="text-h5 text-sm-h3 font-weight-light primary--text text--lighten-1">
          {{ $t('WebDev.Mobile.Title')}}
        </v-card-title>

        <v-card-text>
          {{ $t('WebDev.Mobile.Text')}}
        </v-card-text>
      </v-card>
    </v-col>

  </v-row>
</v-container>
</template>

<script>
export default {
  name: 'WebDev',
  data: () => {
    return {}
  }
}
</script>

<style>

</style>