import { Elysia } from 'elysia'
import { setup } from './setup'

const app = new Elysia()
    .use(setup)
    .listen(3000)

console.log(`🦊 Server is running at ${app.server?.hostname}:${app.server?.port}`)
