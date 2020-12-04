<template>
    <v-app>
      <v-app-bar
        app
        color="white"
        flat
      >
        <template v-if="$vuetify.breakpoint.mdAndUp">
          <div  class="d-flex align-center">
            <v-img
              alt="Konoha Logo"
              class="shrink mr-2"
              contain
              src="./assets/logo/web/logo-web-transparent.png"
              transition="scale-transition"
              width="200"
            />
          </div>
          <v-spacer></v-spacer>

          <template>
            <v-btn
              v-for="(item, i) in menuItems"
              :key="i"
              :to="{name: item.link}"
              text
              :exact=true
            >
              <span class="mr-2">{{item.title}}</span>
            </v-btn>

          
          </template>
        
        </template>
        <template v-if="$vuetify.breakpoint.smAndDown">
          <v-row>

            <div class="d-flex align-center">
              <v-img
                alt="Konoha Logo"
                class="shrink mr-2"
                contain
                src="./assets/logo/web/logo-web-transparent.png"
                transition="scale-transition"
                width="200"
              />
            </div>
            <v-spacer></v-spacer>

            <v-menu class="d-flex">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  dark
                  icon
                  v-bind="attrs"
                  v-on="on"
                  :x-large="true"
                >
                  <v-icon color="primary">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="(item, i) in menuItems"
                  :key="i"
                  :to="{name: item.link}"
                  :exact=true
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

          </v-row>
        </template>
      </v-app-bar>

      <v-main >
        <router-view></router-view>
      </v-main>
    
      <v-footer
        dark
        padless
      >
      <v-container>
        <v-row>
          <v-col cols="12" md=6>
            <v-card flat tile color="transparent">
              <v-card-title>
                <v-img
                  alt="Konoha Logo"
                  class="shrink mr-2"
                  contain
                  src="./assets/logo/web/logo-web-transparent-white.png"
                  transition="scale-transition"
                  width="200"
                />
              </v-card-title>
              <v-card-text class="grey--text pt-0">
                {{footerText}}
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md=2>
            <v-card flat tile color="transparent">
              <v-card-title>
                Helpful Links
              </v-card-title>
                <router-link v-for="(item, key) in footerHelpLinks"
                  :key="key"
                  class="mx-4 grey--text"
                  :to="{name: item.link}"
                  tag="span"
                >
                  {{item.title}} <br/>
                </router-link>
              </v-card>
          </v-col>

          <v-col cols="12" md=3>
            <v-card flat tile color="transparent">
              <v-card-title>
                Contacts
              </v-card-title>
              <v-card-text>
                Djelibougou, Koulikoro road,<br/>
                BCS Bank building <br/>
                Phone: (00223) 44340545<br/>
                E-Mail: info@konoha-technologies.ml
              </v-card-text>
              <v-card-text>
                <v-btn
                  v-for="icon in icons"
                  :key="icon"
                  class=" grey--text"
                  icon
                >
                  <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        

        <v-row>
          <v-col cols=12>
            <v-divider></v-divider>
          </v-col>

          <v-col cols=12>
            <v-card  flat tile color="transparent" >
              

              <v-card-text class="text-center grey--text">
                {{ new Date().getFullYear() }} — <strong>Konoha Technologies</strong>
              </v-card-text>
            </v-card>
          </v-col>

        </v-row>
       
      </v-container>
      </v-footer>
    
    </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    sectionTitle: "h2", 
    icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
    ],
    footerText: "Konoha Technologies partners with customers to design and deliver great software products. We specialize in a wide variety of tools and technologies and assist customers in adopting the best patterns and practices for utilizing these platforms.",
    footerHelpLinks: [
      {
        title: "Home",
        link: "Home"
      },
      {
        title: "Services",
        link: "Service"
      },
      {
        title: "About Us",
        link: "About"
      }
    ],
    menuItems: [
        { title: 'Home', link: 'Home' },
        { title: 'Services', link: 'Service' },
        { title: 'About Us', link: 'About' },
        { title: 'Contact', link: 'Contact' }
      ],
  }),
};
</script>
