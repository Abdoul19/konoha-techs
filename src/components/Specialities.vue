<template>
  <v-row>
      <v-row>
        <v-col cols=12>
        <v-card tile flat>
          <v-card-title class="text-h5 text-sm-h3 font-weight-light primary--text text--lighten-1">{{ $t('Specialities.Title')}}</v-card-title>
        <v-card-subtitle>
          {{ $t('Specialities.Subtitle')}}
        </v-card-subtitle>
        </v-card>
        </v-col>
      </v-row>

      <v-row>
        <template v-for="(tech, key) in specialities">
          <v-col cols=12 md=3 :key=key>
            <v-card v-if="$vuetify.breakpoint.smAndDown" class="pa-2">
              <a style="text-decoration: none" :href="tech.link" target="_blank">
              <v-img contain max-width="70" max-height="70" :alt="tech.title+'-logo'" :src="require(`../assets/${tech.icone}`)" />
              <v-card-title color="primary" class="text-subtitle-1 pa-0">
                
                  {{tech.title}}
                
              </v-card-title>
              </a>
              <v-card-text class="pa-0">
                {{tech.content}}
              </v-card-text>
            </v-card>

            <v-card v-if="$vuetify.breakpoint.mdAndUp" class="pa-2" min-height="300">
              <a style="text-decoration: none" :href="tech.link" target="_blank">
              <v-img contain max-width="70" max-height="70" :alt="tech.title+'-logo'" :src="require(`../assets/${tech.icone}`)" />
              <v-card-title color="primary" class="text-subtitle-1 pa-0">
                
                  {{tech.title}}
                
              </v-card-title>
              </a>
              <v-card-text class="pa-0">
                {{tech.content}}
              </v-card-text>
            </v-card>

          </v-col>
        </template>
      </v-row>
    </v-row>
</template>

<script>
export default {
  name: 'Specialities',
  data: () => {
    return {
      
    }
  },
  computed:{
    specialities(){
      return [
        {
          title: this.$t('Specialities.Specialities.AdobeExperienceManager.Title'),
          content: this.$t('Specialities.Specialities.AdobeExperienceManager.Description'),
          icone: 'tech-aem.svg',
          link: '#'
        },
        {
          title: this.$t('Specialities.Specialities.AdobeAnalytics.Title'),
          content: this.$t('Specialities.Specialities.AdobeAnalytics.Description'),
          icone: 'tech-aem.svg',
          link: '#'
        },
        {
          title: this.$t('Specialities.Specialities.Workfront.Title'),
          content: this.$t('Specialities.Specialities.Workfront.Description'),
          icone: 'tech-workfront.svg',
          link: '#'
        },
        {
          title: this.$t('Specialities.Specialities.Azure.Title'),
          content: this.$t('Specialities.Specialities.Azure.Description'),
          icone: 'tech-ms-azure.svg',
          link: '#'
        },
        {
          title: this.$t('Specialities.Specialities.Angular.Title'),
          content: this.$t('Specialities.Specialities.Angular.Description'),
          icone: 'tech-angular.svg',
          link: '#'
        },
        {
          title: this.$t('Specialities.Specialities.NodeJS.Title'),
          content: this.$t('Specialities.Specialities.NodeJS.Description'),
          icone: 'tech-node-js.svg',
          link: '#'
        },
        {
          title: this.$t('Specialities.Specialities.NestJS.Title'),
          content: this.$t('Specialities.Specialities.NestJS.Description'),
          icone: 'tech-nest-js.svg',
          link: '#'
        },
        {
          title: this.$t('Specialities.Specialities.Xamarin.Title'),
          content: this.$t('Specialities.Specialities.Xamarin.Description'),
          icone: 'tech-xamarin.svg',
          link: '#'
        },
        {
          title: this.$t('Specialities.Specialities.MongoDB.Title'),
          content: this.$t('Specialities.Specialities.MongoDB.Description'),
          icone: 'tech-mongodb.svg',
          link: '#'
        },
        {
          title: this.$t('Specialities.Specialities.PowerBI.Title'),
          content: this.$t('Specialities.Specialities.PowerBI.Description'),
          icone: 'tech-power-bi.svg',
          link: '#'
        },
        {
          title: this.$t('Specialities.Specialities.Metabase.Title'),
          content: this.$t('Specialities.Specialities.Metabase.Description'),
          icone: 'tech-metabase.svg',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style>

</style>