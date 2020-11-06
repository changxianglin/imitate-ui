import Vue from 'vue'
import App from './App.vue'
import LinButton from './components/button.vue'

Vue.config.productionTip = false

Vue.component(LinButton.name, LinButton)

new Vue({
  render: h => h(App)
}).$mount('#app')
