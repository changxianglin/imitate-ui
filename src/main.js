import Vue from 'vue'
import App from './App.vue'
import LinButton from './components/button.vue'
import LinDialog from './components/dialog.vue'
import './assets/iconfont.scss'
Vue.config.productionTip = false

Vue.component(LinButton.name, LinButton)
Vue.component(LinDialog.name, LinDialog)

new Vue({
  render: h => h(App)
}).$mount('#app')
