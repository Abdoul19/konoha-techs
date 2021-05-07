import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n';
import Meta from 'vue-meta';

Vue.use(Meta);

Vue.config.productionTip = false
Vue.prototype.langs = ['fr', 'en']

new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
