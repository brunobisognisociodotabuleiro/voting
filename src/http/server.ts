import fastify from 'fastify'
import { z } from 'zod'

const app = fastify()

app.get('/polls', (request) => {
  const createPollBody = z.object({
    title: z.string()
  })
  
  createPollBody.parse(request.body)
})

app.listen({port: 3333}).then(() => {
  console.log('HTTP Server running!!')
})

