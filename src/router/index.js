import { createRouter, createWebHashHistory } from 'vue-router'
import Internal from '../views/internal/Internal.vue';
import Auth from '../views/auth/Auth.vue'
import Home from '../views/internal/home/Home.vue'
import Analyse from '../views/internal/analyse/Analyse.vue'
import Invoice from '../views/internal/createInvoice/Invoice.vue'
import ViewInvoice from '../views/internal/viewInvoice/ViewInvoice.vue'
const routes = [{
        path: '/',
        name: 'Internal',
        component: Internal,
        children: [{
                path: '',
                name: 'Home',
                component: Home,
            },

            {
                path: 'analyse',
                name: 'Analyse',
                component: Analyse,

            },

            {
                path: 'create',
                name: 'Create',
                component: Invoice,

            },

            {
                path: 'view/:id',
                name: 'View',
                component: ViewInvoice,

            },
        ]
    },
    {
        path: '/auth',
        name: 'Auth',
        component: Auth
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router