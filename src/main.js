import Vue from 'vue'

// 引入 ui
import {
  Tabbar, TabbarItem, Swipe, SwipeItem, Tab, Tabs, Search, Icon, Row, Col, Badge, BadgeGroup, Field, CellGroup, Button,
} from 'vant'

// plugins
import filters from '@/plugins/filters'
import utils from '@/plugins/utils'

import router from './router'
import store from './store'
import App from './App'

Vue.use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem)
  .use(Tab)
  .use(Tabs)
  .use(Search)
  .use(Icon)
  .use(Row)
  .use(Col)
  .use(Badge)
  .use(BadgeGroup)
  .use(Field)
  .use(CellGroup)
  .use(Button)

Vue.config.productionTip = false
Vue.use(filters)
Vue.prototype.utils = utils

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
