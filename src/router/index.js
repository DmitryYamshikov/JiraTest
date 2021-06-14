import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login';
import Dashboard from '../views/Dash';
import Projects from '../views/Projects';
import OneProject from "../views/OneProject";
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
  {
    path: '/Projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/Projects/:id',
    name: 'OneProject',
    component: OneProject
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
