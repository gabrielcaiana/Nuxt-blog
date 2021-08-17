import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Card: () => import('../../components/Card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  Hero: () => import('../../components/Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
