import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/cars',
      name: 'cars',
      component: () => import('../views/CarsView.vue')
    },
    {
      path: '/cars/:id', 
      name: 'Car',
      component: () => import('../components/Car.vue'),
      children: [
        {
          path: 'contact',
          name: 'Contact',
          component: () => import('../views/ContactView.vue')
        }
      ]
    },
    {
      path: '/:catchall(.*)*',
      name: 'NOT FOUND',
      component: () => import('../views/404View.vue')
    }
  ]
})

export default router
