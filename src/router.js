// travel-guide\src\router.js
import { createRouter, createWebHashHistory } from 'vue-router'; // Import createWebHashHistory
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

// Determine base URL based on environment (no longer strictly needed with hash mode)
const router = createRouter({
  history: createWebHashHistory(), // Use createWebHashHistory here
  routes
});

// Navigation guard (remains the same)
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