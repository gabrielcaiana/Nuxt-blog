import { wrapFunctional } from './utils'

export { default as Card } from '../../components/Card.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Hero } from '../../components/Hero.vue'

export const LazyCard = import('../../components/Card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyHero = import('../../components/Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c))
