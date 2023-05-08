import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Test from '../views/Test.vue'


const routes = [
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  },
]
export default createRouter({
  history: createWebHistory(import.meta.env["VITE_BASE_URL"]),
  routes
})
