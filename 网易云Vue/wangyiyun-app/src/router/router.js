import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import home from '../views/home.vue'
import MusicItem from '../views/MusicItem.vue'
import Sreach from '../views/Sreach.vue'
import Login from '../views/Login.vue'
import UserInfo from '../views/UserInfo.vue'
import SimilarPlayList from '../views/SimilarPlayList.vue'
import store from '../store/index'
const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/MusicItem',
            name: 'MusicItem',
            component: MusicItem
        },
        {
            path: '/Sreach',
            name: 'Sreach',
            component: Sreach
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login
        },
        {
            path: '/SimilarPlayList',
            namel: 'SimilarPlayList',
            component: SimilarPlayList
        },
        {
            path: '/UserInfo',
            name: 'UserInfo',
            component: UserInfo,
            beforeEnter: (to,from,next)=>
            {
                if(store.state.isLogin)
                {
                    next();
                }
                else
                {
                    next('/Login');
                }
            }
        },
    ]
})
router.beforeEach((to,form,next)=>
{
    if(to.path === '/Login')
    {
        store.commit('updateFooterShow',false);
        next();
    }
    else
    {
        store.commit('updateFooterShow',true);
        next(); 
    }
})
export default router;