import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import { store } from './store/store';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.filter('to-uppercase', function (value) {
  return value.toUpperCase();
});

Vue.filter('snippet', function(value) {
  return value.slice(0, 100) + '...';
});

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  store,
  router: router,
  render: h => h(App)

}).$mount('#app')
