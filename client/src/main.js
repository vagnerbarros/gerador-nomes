import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import DomainList from './components/AppDomainList';
import DomainView from './components/AppDomainView';

import store from './store/store';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/domains',
      component: DomainList
    },
    {
      path: '/domains/:domain',
      component: DomainView,
      props: true
    },
    {
      path: '/',
      redirect: '/domains'
    }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
