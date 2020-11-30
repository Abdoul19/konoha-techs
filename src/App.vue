<template>
    <v-app>
      <v-app-bar
        app
        color="transparent"
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
          href=""
          target="_blank"
          text
        >
          <span class="mr-2">Home</span>
        </v-btn>

        <v-btn
          href=""
          target="_blank"
          text
        >
          <span class="mr-2">Services</span>
        </v-btn>

        <v-btn
          href=""
          target="_blank"
          text
        >
          <span class="mr-2">About Us</span>
        </v-btn>

        <v-btn
          href=""
          target="_blank"
          text
        >
          <span class="mr-2">Contacts</span>
        </v-btn>
      </v-app-bar>

      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
