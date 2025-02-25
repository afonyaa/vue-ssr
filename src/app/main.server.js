import createApp from './app.js'

export default function (context) {
    const { app } = createApp(context)

    return app
}