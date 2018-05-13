import Vue from 'vue'
// import Mint from 'mint-ui';
// Vue.use(Mint);

import { Button, Cell } from 'mint-ui'
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)


import App from './template.vue'



const app1 = new Vue({
  render: h => h(App)
}).$mount('#templateBox')

