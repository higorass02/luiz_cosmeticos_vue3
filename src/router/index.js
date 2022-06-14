import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import List from '../views/List.vue'
import Product from '../views/Product.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/story',
    name: 'story',
    component: List,
    props: true,
  },
  {
    path: '/product',
    name: 'product',
    component: Product,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
