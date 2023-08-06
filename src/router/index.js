import { createRouter , createWebHistory } from "vue-router"
import dashBoardView from "../pages/master/dashBoardView.vue"
import homeView from "../pages/master/homeView.vue"
import profileView from "../pages/master/profileView.vue"

const routes = [
    {
        name: 'Dashboard',
        path: '/',
        component: dashBoardView,
    },

    {
        name: 'Home',
        path: '/home',
        component: homeView,
    },

    {
        name: 'Profile',
        path: '/profile',
        component: profileView,
    }
]

const router = Router();

function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    })
    
    return router;
}

export default router;