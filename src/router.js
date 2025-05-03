import { createRouter, createWebHistory } from 'vue-router';
import { auth } from './config/firebase-config';

// Import your components
import Home from './views/Home.vue';
import Login from './components/Login.vue';

// Define routes
const routes = [
  {
    path: '/',
    name: 'Home', // Add a name for the route
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login', // Add a name for the route
    component: Login
  }
];

// Determine base URL based on environment
const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/travel-planner/' : '/'),
  routes
});

// Navigation guard
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = auth.currentUser;

  if (requiresAuth && !currentUser) {
    next('/login');
  } else if (to.name === 'Login' && currentUser) { // Use route name
    next('/');
  } else {
    next();
  }
});

export default router;