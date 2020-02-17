import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

import messages from './lang'

let lang = 'zh';
if (localStorage) {
  lang = localStorage.getItem('locale') || 'zh'
}

let i18n = new VueI18n({
  locale: lang,
  messages
})



export default i18n;