import Vue from 'vue'

function createApp(appContext) {
    const app = new Vue({
        render: h => h('div', 'testing')
    })

    return { app }
}

export default createApp 