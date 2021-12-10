import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import VueAliplayerV2 from "vue-aliplayer-v2";

Vue.use(VueAliplayerV2);
new Vue({
  render: h => h(App),
}).$mount('#app')
