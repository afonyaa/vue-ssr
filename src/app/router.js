import Vue from "vue";
import Router from "vue-router";

import './components/Dashboard.js'
import './components/Auth.js'
import './components/BaseCard.js'
import './components/CardRender.js'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '',
                component: { template: '<dashboard-view/>' }
            },
            {
                path: '/auth',
                component: { template: '<auth-view/>' }
            }
        ]
    })
}