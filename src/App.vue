<template>
    <v-app>
      <v-app-bar
        app
        color="white"
        flat
      >
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

        <v-btn
          :to="{name: 'Home'}"
          text
        >
          <span class="mr-2">Home</span>
        </v-btn>

        <v-btn
          :to="{name: 'Service'}"
          text
        >
          <span class="mr-2">Services</span>
        </v-btn>

        <v-btn
          :to="{name: 'About'}"
          text
        >
          <span class="mr-2">About Us</span>
        </v-btn>

        <v-btn
          to="contacts"
          text
        >
          <span class="mr-2">Contacts</span>
        </v-btn>
      </v-app-bar>

      <v-main>
        <router-view></router-view>
      </v-main>
    
      <v-footer
        dark
        padless
      >
      <v-container>
        <v-row>
          <v-col cols=6>
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

          <v-col cols=2>
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

          <v-col cols=3>
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
    ]
  }),
};
</script>
