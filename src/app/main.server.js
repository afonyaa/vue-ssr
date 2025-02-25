import initApp from './app.js'

export default function (context) {
    const { app } = initApp(context)

    return app
}