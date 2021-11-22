import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

import EndDay from './components/EndDay.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import Stocks from './components/stocks/Stocks.vue'
import StockTrader from './components/stocks/StockTrader.vue'
import VueRouter from 'vue-router'
import store from './store/store'

Vue.use(VueRouter);

const routes=[
  {path:'/endday', component:EndDay},
  {path:'/portfolio', component:Portfolio},
  {path:'/stocks', component:Stocks},
  {path:'/stocktrader', component: StockTrader}
]

const router= new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router: router,
  store,
  render: h => h(App),
}).$mount('#app')
