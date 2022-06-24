import VueRouter from 'vue-router'

const createRouter = () => new VueRouter({
    routes: [
        {
            path: '/',
            component: () => import("../views/Home.vue")
        },
        {
            path: '/About',
            component: () => import("../views/About.vue")
        }
    ]
})

const router = createRouter();
export default router;