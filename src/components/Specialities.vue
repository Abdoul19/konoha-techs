<template>
  <v-row>
      <v-row>
        <v-col cols=12>
        <v-card tile flat>
          <v-card-title class="text-h5">Tech specialities</v-card-title>
        <v-card-subtitle>
          For our fellow nerds, here are some specifics of the technologies we specialize in. 
          You can see these technologies in action in Our Work. Can’t see what you’re looking for? Get in touch and we’ll help you find what you need.
        </v-card-subtitle>
        </v-card>
        </v-col>
      </v-row>

      <v-row>
        <template v-for="(tech, key) in specialities">
          <v-col cols=3 :key=key>
            <v-card outlined tile class="pa-2" min-height="300">
              <a style="text-decoration: none" :href="tech.link" target="_blank">
              <v-img contain max-width="70" max-height="70" :alt="tech.title+'-logo'" :src="require(`../assets/${tech.icone}`)" />
              <v-card-title color="primary" class="pa-0">
                
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
      specialities: [
        {
          title: 'Adobe Experience Manager',
          content: 'Nine-year WCM Magic Quadrant Leader according to Gartner, AEM is one of the heavy hitters in the WCM space. It takes some serious experience to master and we know it’s not always easy. Our advice: get a reliable guide.',
          icone: 'tech-aem.svg',
          link: '#'
        },
        {
          title: 'Adobe Analytics',
          content: "We won't explain to you the real value of real metrics. But we will say that designing and implementing a metrics strategy that ensures accurate, actionable results is a complex, often underestimated task. We use Adobe Analytics to make it happen. So you can put your feet up and let us do the hard work.",
          icone: 'tech-aem.svg',
          link: '#'
        },
        {
          title: 'Workfront',
          content: "Workfront is a worldwide leader in project and portfolio management. It is a robust, collaborative, and dynamic platform. We've had the chance to both use it as end-users and to look under the hood as developers and integrate it with other platforms.",
          icone: 'tech-workfront.svg',
          link: '#'
        },
        {
          title: 'Azure',
          content: 'There was a time when we worried about servers... hah! Not all good-old-times were better... Spinning up VMs, web-servers, CDNs, databases has become second nature. Deploying code from our repositories to web servers has never been easier.',
          icone: 'tech-ms-azure.svg',
          link: '#'
        },
        {
          title: 'Angular',
          content: 'Angular is at the core of most of our UI projects. You cannot have a scalable, rich user experience in a web interactive tool without a proper framework to support it. Our apps are easier to maintain and grow thanks to the structured approach Angular provides.',
          icone: 'tech-angular.svg',
          link: '#'
        },
        {
          title: 'Node.JS',
          content: "It’s in 99% of our backend code is written in Node.JS. It’s flexible, it’s fast, it’s cool, and more than half of the globe's developers are coding on it. Even better, it’s supported by all decent hosting platforms.",
          icone: 'tech-node-js.svg',
          link: '#'
        },
        {
          title: "Nest JS",
          content: "NestJS is a framework for building efficient, scalable Node.js web applications. We love it! It's the perfect choice for our scalable project approach…and it’s also really cool. We're proud sponsors of Nest and think more people need to know about it!",
          icone: 'tech-nest-js.svg',
          link: '#'
        },
        {
          title: 'Xamarin',
          content: "Hands down, Xamarin is the best tool for app development, getting our products on all platforms in next to no time. With Xamarin Test Cloud we can also make sure our apps work perfectly on any device we're targeting, lowering costs and preventing consumer frustration.",
          icone: 'tech-xamarin.svg',
          link: '#'
        },
        {
          title: "MongoDB",
          content: "The arrival of MongoDB signalled a paradigm shift for us. As a non-relational database, it suddenly provided a degree of agility and flexibility that the relational ones couldn't. Even though most of our work still relies on Oracle, MS SQL, MySQL etc., we love any opportunity to play with Mongo. It's in a league of its own.",
          icone: 'tech-mongodb.svg',
          link: '#'
        },
        {
          title: 'Power BI',
          content: "With its ability to solve complex data integration and simplify automated reporting, Power BI is a slick, speedy and sophisticated platform. We love working with it: and it’s visually stunning, especially when you match it with other Microsoft 365 tools.",
          icone: 'tech-power-bi.svg',
          link: '#'
        },
        {
          title: 'Metabase',
          content: "Metabase is an elegant, easy and affordable approach to open source BI. You may not be able to spend your entire budget on a BI tool, and Metabase proves that you really don’t need to.",
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