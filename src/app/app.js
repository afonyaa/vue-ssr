import Vue from 'vue'
import { createRouter } from './router.js'

function init(context) {
    const router = createRouter()
    const app = new Vue({
        router,
        render: h => h('router-view')
    })

    return { app, router }
}

export default init 