const Koa = require('koa')
const Router = require('koa-router')
const dotenv = require('dotenv')
dotenv.load()

const middlewares = require('./middlewares')

const { PORT: port } = process.env
const app = new Koa()
const router = new Router()

middlewares({ router })

app.use(router.routes())
app.listen(port, () => console.log(`Server running at ${port}`))
