import { CustomRequest } from '../models/request'
import { CustomResponse } from '../models/response'

import Note from '../models/notes'

const updateNote = async (req: CustomRequest, res: CustomResponse) => {
  const body = req.body
  const title = body.title
  const content = body.content

  const id = req.params.id

  try {
    await Note.updateOne({ _id: id }, { title, content })
    res.status(200).json({ message: 'updated' })
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
}

export { updateNote }
