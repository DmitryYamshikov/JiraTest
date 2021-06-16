import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login';
import ResetPass from '../views/ResetPass';
import Dashboard from '../views/Dash';
import Projects from '../views/Projects';
import OneProject from "../views/OneProject";
import DashOne from "../views/DashOne";

const routes = [
  {
    path: '/',
    name: 'Dash',
    component: Dashboard
  },
  {
    path: '/:id',
    name: 'DashOne',
    component: DashOne
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/ResetPass',
    name: 'ResetPass',
    component: ResetPass
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
