import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../views/WelcomeScreen.vue';
import Chatroom from '../views/ChatroomScreen.vue';
import { projectAuth } from '../firebase/config';

// auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: 'Welcome' });
  } else {
    next();
  }
};

const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (user) {
    next({ name: 'Chatroom' });
  } else {
    next();
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
      beforeEnter: requireNoAuth,
    },
    {
      path: '/chat',
      name: 'Chatroom',
      component: Chatroom,
      beforeEnter: requireAuth,
    },
    { path: '/:catchAll(.*)*', redirect: { name: 'Welcome' } },
  ],
});

export default router;
