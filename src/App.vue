<template>
    <v-app>
      <v-app-bar
        app
        color="white"
        flat
        elevation="4"
      >
        <template v-if="$vuetify.breakpoint.mdAndUp">
          <div  class="d-flex align-center py-2">
            <v-img
              alt="Konoha Logo"
              class="shrink mr-2"
              contain
              src="./assets/logo/web/logo-web-transparent.png"
              transition="scale-transition"
              width="200"
              @click="$router.push({name: 'Home'})"
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
              depressed
              tile
              height="100%"
              color="primary"
              class="font-weight-light"
            >
              <span class="mr-2">{{item.title}}</span>
            </v-btn>

          
          </template>

          
          <template>
            <v-btn
              v-for="(lang, i) in langs"
              :key="`lang-${i}`"
              @click="$i18n.locale = lang"
              :disabled="$i18n.locale == lang"
              x-small
              text
              depressed
              style="min-width: 20px !important;"
              class="px-0"
            >
              {{lang}}
            </v-btn>
          </template>
        
        </template>
        <template v-if="$vuetify.breakpoint.smAndDown">
          <v-row class="d-flex justify-space-between align-center">

            <div class="">

              <v-menu class="d-flex" rounded="0">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    dark
                    icon
                    v-bind="attrs"
                    v-on="on"
                    :x-large="true"
                  >
                    <v-icon color="primary">mdi-menu</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item-group
                    color="primary"
                  >
                  <v-list-item
                    v-for="(item, i) in menuItems"
                    :key="i"
                    :to="{name: item.link}"
                    :exact=true
                    class="font-weight-light"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-menu>
            </div>

            <div>
              <v-img
                alt="Konoha Logo"
                class="shrink mr-2"
                contain
                src="./assets/logo/web/logo-web-transparent.png"
                transition="scale-transition"
                width="150"
                @click="$router.push({name: 'Home'})"
              />
            </div>

            <div>
              <v-btn
                v-for="(lang, i) in langs"
                :key="`lang-${i}`"
                @click="$i18n.locale = lang"
                :disabled="$i18n.locale == lang"
                x-small
                text
                depressed
                style="min-width: 20px !important;"
                class="px-0"
              >
                {{lang}}
              </v-btn>
            </div>

          </v-row>
        </template>
      </v-app-bar>

      <v-main class="">
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
                {{$t('Footer.FooterText')}}
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

          <v-col cols="12" md=4>
            <v-card flat tile color="transparent">
              <v-card-title>
                Contacts
              </v-card-title>
              <v-card-text v-html="$t('Footer.Address')">
                
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
    ]
    
    
  }),
  computed:{
    menuItems(){
      return [
        { title: this.$t('NavBar.Link.Home'), link: 'Home' },
        { title: this.$t('NavBar.Link.Services'), link: 'Service' },
        { title: this.$t('NavBar.Link.About'), link: 'About' },
        { title: this.$t('NavBar.Link.Contacts'), link: 'Contact' }
      ]
    },

    footerHelpLinks(){
      return [
      { title: this.$t('NavBar.Link.Home'), link: 'Home' },
      { title: this.$t('NavBar.Link.Services'), link: 'Service' },
      { title: this.$t('NavBar.Link.About'), link: 'About' },
    ]
    }
  }
};
</script>
