import { createRouter, createWebHashHistory } from 'vue-router';
import { auth } from './config/firebase-config';
import { authReady } from './authReady'; // Import the global ref

// Import your components
import Home from './views/Home.vue';
import Login from './components/Login.vue';
import Plan from './components/Plan.vue';

const routes = [
  { path: '/', name: 'Home', component: Home, meta: { requiresAuth: true } },
  { path: '/login', name: 'Login', component: Login },
  { path: '/plan/:travelPlanId', name: 'PlanDetails', component: Plan  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = auth.currentUser; // Get the current user synchronously

  // Wait for the authReady flag to be true
  await new Promise((resolve) => {
    const interval = setInterval(() => {
      if (authReady.value) {
        clearInterval(interval);
        resolve();
      }
    }, 50); // Check every 50ms (adjust as needed)
  });

  if (requiresAuth && !currentUser) {
    next('/login');
  } else if (to.name === 'Login' && currentUser) {
    next('/');
  } else {
    next();
  }
});

export default router;