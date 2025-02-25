import Vue from 'vue'
import { createRouter } from './router'

function init(context) {
    const router = createRouter()
    const app = new Vue({
        router,
        render: h => h('div', 'testing')
    })

    return { app, router }
}

export default init 