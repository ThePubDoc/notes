import { Request } from 'express'

interface CustomRequest extends Request {
  body: {
    title: string
    content: string
  }
  params: {
    id: string
  }
}

export { CustomRequest }
