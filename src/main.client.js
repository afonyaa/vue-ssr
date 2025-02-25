const Vue = require('vue')

function createApp(appContext) {

    Vue.directive('focus', {
        bind: function () { console.log('BIND') },
        inserted: function (el) {
            el.focus()
        }
    })

    const app = new Vue({
        template: `
                <div>
                    <div v-for="item of list">{{item}}</div>
                    <div>{{message}}</div>
                    <input v-focus></input>
                    <div>{{appContext}}</div>
                </div>`,
        data: {
            message: 'You loaded this page on ' + new Date().toLocaleString(),
            list: ['1', '2', '3'],
            appContext: appContext
        },
        mounted() {
            console.log('will be called only in browser. Will not be called on server')
        },
        created() {
            console.log('will be called in browser and on server 2 times. Why?')
        },
    })

    return app
}

module.exports = createApp