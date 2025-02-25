import initApp from './app.js'

export default function (context) {

    return new Promise((resolve, reject) => {
        const { app, router } = initApp(context)

        router.push(context.url)

        router.onReady(() => {
            if (router.getMatchedComponents().length === 0) {
                reject({ code: 404 })
            }
        })

        resolve(app)
    })

}