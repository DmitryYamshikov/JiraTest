import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login';
import Dashboard from '../views/Dash';
const routes = [
  {
    path: '/',
    name: 'Dash',
    component: Dashboard
  },
  {

    path: '/Login',
    name: 'Login',
    component: Login
  },
  // {
  //   path: '/Dashboard',
  //   name: 'Dash',
  //   component: Dashboard
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
