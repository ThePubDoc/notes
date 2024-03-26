import { Response } from 'express'

interface CustomResponse extends Response {
  message?: string
  id?: string
}

export { CustomResponse }
