import initApp from './app'

const { app, router } = initApp()

// попробовать без router on ready
router.onReady(() => {
    app.$mount('#app')
})
