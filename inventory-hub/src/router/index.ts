// import { createRouter, createWebHistory } from 'vue-router'
// import Dashboard from '@/views/Dashboard.vue'
// import Products from '@/views/Products.vue'
// import MetricsPage from '@/views/MetricsPage.vue'

// const routes = [
//   { path: '/', name: 'Dashboard', component: Dashboard },
//   { path: '/products', name: 'Products', component: Products },
//   { path: '/metrics', name: 'MetricsPage', component: MetricsPage }
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Products from '@/views/Products.vue'
import MetricsPage from '@/views/MetricsPage.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/products', component: Products },
  { path: '/metrics', component: MetricsPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
