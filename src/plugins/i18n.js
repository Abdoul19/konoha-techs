import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { languages, defaultLocale } from '../i18n/index.js'

const messages = Object.assign(languages)

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: defaultLocale,
  messages
})

export default i18n;