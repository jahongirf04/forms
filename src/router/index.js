import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import Cars from '../views/Cars.vue'
import Car from '../views/Car.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/cars',
      name: 'cars',
      component: Cars
    },
    {
      path: '/car/:name',
      name: 'car',
      component: Car
    }
  ]
})

export default router
