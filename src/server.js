const vueServerRenderer = require('vue-server-renderer')
const fs = require('fs')
const server = require('express')()
const path = require('path')
const createApp = require('./main.client')

server.get('*', async (req, res) => {
    try {

        const renderer = vueServerRenderer.createRenderer({
            template: fs.readFileSync(
                path.join(__dirname, './index.template.html'),
                'utf-8'
            )
        })

        const context = {
            title: 'Vue SSR'
        }

        const appContext = {
            someContextText: 'someContextText'
        }

        const app = createApp(appContext)

        const rendered = await renderer.renderToString(app, context)

        res.end(rendered)
    } catch (e) {
        res.status(500)
        res.end(`server error ${e}`)
    }
})


server.listen(3000)