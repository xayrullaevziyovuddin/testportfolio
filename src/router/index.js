/* import { createRouter, createWebHistory } from "vue-router";

import Contact from "../pages/Contact.vue";
import Skills from "../pages/Skills.vue";
import Home from "../pages/Home.vue";




export const routers = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/Contact", name: "Contact", component: Contact },
    { path: "/Skills", name: "Skills", component: Skills },
    { path: "/", name: "Home", component: Home },

  ],
});
 */
import { createRouter, createWebHistory } from 'vue-router';

import Contact from '../pages/Contact.vue';
import Skills from '../pages/Skills.vue';
import Home from '../pages/Home.vue';


const routes = [
  { path: '/Contact', name: 'Contact', component: Contact },
  { path: '/Skills', name: 'Skills', component: Skills },
  { path: '/', name: 'Home', component: Home },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;