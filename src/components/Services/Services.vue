<template>
  <v-row>
      <v-row v-if="addPresentation">
        <v-col cols=12>
          <v-card  tile flat >
            <v-card-title class="text-h5 text-sm-h3 font-weight-light primary--text text--lighten-1"> {{ $t('Services.Title') }} </v-card-title>
            <v-card-subtitle> {{ $t('Services.Presentation') }} 
            </v-card-subtitle>
          </v-card>

          
        </v-col>
      </v-row>

      <v-container pa-0 fluid v-if="addBanner">
        
          <v-card  tile flat >
            <v-card-title class="text-h5 text-sm-h3 font-weight-light primary--text text--lighten-1"> {{ $t('Services.BannerText') }} </v-card-title>
          </v-card>
        
      </v-container>

      <v-row>

        <v-col cols="12" md=6>
          <template v-for="(service, key) in services" >
          <v-card :to="{ name: service.link}" v-if="key == 0 | key == 2 | key == 4 | key == 6" :key=key class="my-6" >
            <v-card-title class="text-subtitle-1">
              <v-icon class="mx-1" color="primary" size="24px">{{ service.icone }}</v-icon>
              {{service.title}}
            </v-card-title>
            <v-card-text>
              {{service.description}}
            </v-card-text>
          </v-card>
          </template>
        </v-col>

        <v-col cols="12" md=6>
          <template v-for="(service, key) in services" >
          <v-card :to="{ name: service.link}" v-if="key == 1 | key == 3 | key == 5" :key=key class="my-6" >
            <v-card-title class="text-subtitle-1">
              <v-icon class="mx-1" color="primary" size="24px">{{ service.icone }}</v-icon>
              {{service.title}}
            </v-card-title>
            <v-card-text>
              {{service.description}}
            </v-card-text>
          </v-card>
          </template>
        </v-col>

      </v-row>
  </v-row>
</template>

<script>
export default {
  name: 'Services',
  data: () => {
    return {
      
    }
  },
  computed: {
    services(){
      return [
        {
          title: this.$t('Services.Services.Web.Title'),
          description: this.$t('Services.Services.Web.Description'),
          icone: "mdi-cellphone-link",
          link: "ServiceWebDev"
        },
        {
          title: this.$t('Services.Services.Cloud.Title'),
          description: this.$t('Services.Services.Cloud.Description'),
          icone: "mdi-cloud-check",
          link: "ServiceCloud"
        },
        {
          title: this.$t('Services.Services.Cto.Title'),
          description: this.$t('Services.Services.Cto.Description'),
          icone: "mdi-handshake-outline",
          link: "ServiceCto"
        },
        {
          title: this.$t('Services.Services.App.Title'),
          description: this.$t('Services.Services.App.Description'),
          icone: "mdi-cellphone-iphone",
          link: "ServiceAppModerniz"
        },
        {
          title: this.$t('Services.Services.Consulting.Title'),
          description: this.$t('Services.Services.Consulting.Description'),
          icone: "mdi-arrow-decision",
          link: "ServiceDevProcess"
        }
      ]
    } 
  },
  props: {
    addPresentation: Boolean,
    addBanner: Boolean
  },
  
}
</script>