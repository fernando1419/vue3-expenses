import { createRouter, createWebHistory } from 'vue-router';
// import { useAuthStore } from '@/stores/auth';
import Default from '@/layouts/Default.vue';
import Login from '@/auth/Login.vue';
import Logout from '@/auth/Logout.vue';
import Home from '@/views/Home.vue';
import Dashboard from '@/views/Dashboard.vue';
import ExpenseList from '@/components/ExpenseList.vue';
import ExpenseForm from '@/components/ExpenseForm.vue';

const routes = [
   {
      path: '/',
      component: Default,
      children: [
         { path: '', component: Home, name: 'Home Page' },
         { path: 'dashboard', component: Dashboard, name: 'Dashboard' },
         {
            path: '/expenses',
            component: ExpenseList,
            name: 'Expenses',
            children: [
               {
                  path: '/expenses/add',
                  component: ExpenseForm
               }
            ]
         },
         { path: '/logout', component: Logout, name: 'Logout' },
      ],
   },
   { path: '/login', component: Login },
];
const router = createRouter({
   history: createWebHistory(),
   routes,
});

// Routes guards:
// router.beforeEach((to, from, next) => {
// if (to.meta.requiresAuth) {
//    console.log('enters here!');
//    next('/login');
// } else {
//    next();
// }
// });

export default router;
