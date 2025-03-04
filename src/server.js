
import vueServerRenderer from 'vue-server-renderer'
import fs from 'fs'
import createServer from 'express'
import path from 'path'
import createApp from './app/main.server.js'
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const server = createServer()

server.get('/favicon.ico', (req, res) => res.status(204));

server.get('*', async (req, res) => {
    try {
        const renderer = vueServerRenderer.createRenderer({
            template: fs.readFileSync(
                path.join(__dirname, '../index.template.html'),
                'utf-8'
            )
        })

        const rendererContext = {
            title: 'Vue SSR'
        }

        const context = {
            url: req.url
        }

        const app = await createApp(context)

        const rendered = await renderer.renderToString(app, rendererContext)

        res.end(rendered)
    } catch (e) {
        res.status(500)
        res.end(`server error ${e}`)
    }
})


server.listen(3000)