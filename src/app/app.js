import Vue from 'vue'

function init(context) {
    const app = new Vue({
        render: h => h('div', 'testing')
    })

    return { app }
}

export default init 