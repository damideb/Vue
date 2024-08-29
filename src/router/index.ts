import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import PastOrdersView from '@/views/PastOrdersView.vue'
import singleProductView from '@/views/singleProductView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/products/:id',
      name: 'singleProduct',
      component: singleProductView
    },
    {
      path: '/past-orders',
      name: 'pastOrders',
      component: PastOrdersView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Not found',
      component: NotFoundView
    }
  ]
})

export default router
