<template>
  <v-row>
      <v-row v-if="addPresentation">
        <v-col cols=12>
          <v-card  tile flat >
            <v-card-title class="text-h5">What we do</v-card-title>
            <v-card-subtitle>
              Our teams of technologists leverage modern tools and processes to solve your most pressing technology problems. 
              We do this by providing a number of services such as those described below and on our Services page: 
            </v-card-subtitle>
          </v-card>

          <v-card class="red" v-if="addBanner" tile flat >
            <v-card-title class="text-h5">Services</v-card-title>
          </v-card>
        </v-col>
      </v-row>

      <v-container pa-0 fluid v-if="addBanner">
        
          <v-card class="red" v-if="addBanner" tile flat >
            <v-card-title class="text-h5">Services</v-card-title>
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
      services: [
        {
          title: "Web and Mobile Development",
          description: "Our experienced Agile development teams can help offload your backlog of web or mobile development projects. We can help you design, build, and launch your mobile apps into the iOS and Android stores.",
          icone: "mdi-cellphone-link",
          link: "ServiceWebDev"
        },
        {
          title: "Cloud Migration",
          description: "The ArchitectNow team of Cloud experts can help you efficiently migrate your applications and services to Microsoft's Azure cloud platform. Already in the cloud? We can help monitor and maintain your solutions. We also help customers 'right size' the cloud investments by reviewing their architecture and implementations against their current spending patterns.",
          icone: "mdi-cloud-check",
          link: "ServiceCloud"
        },
        {
          title: "CTO For Hire",
          description: "We partner with companies to give this kind of strategic technical guidance at the highest level to make sure they succeed because of their technology, not despite it.",
          icone: "mdi-handshake-outline",
          link: "ServiceCto"
        },
        {
          title: "App Modernization",
          description: "We guide customers through the application modernization process, and in most cases do the work for them while taking every opportunity possible along the way to mentor and grow their team's skills to enhance and support these new platforms.",
          icone: "mdi-cellphone-iphone",
          link: "ServiceAppModerniz"
        },
        {
          title: "Development Process Consulting",
          description: "Anything worth doing is worth doing right, especially when it comes to building your own software. We can help your team optimize their development process to make them more efficient in their work and to raise the overall quality of the products they are delivering.",
          icone: "mdi-arrow-decision",
          link: "ServiceDevProcess"
        }
      ]
    }
  },
  props: {
    addPresentation: Boolean,
    addBanner: Boolean
  }
}
</script>