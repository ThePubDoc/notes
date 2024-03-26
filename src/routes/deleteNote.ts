import { CustomRequest } from '../models/request'
import { CustomResponse } from '../models/response'

import Note from '../models/notes'

const deleteNote = async (req: CustomRequest, res: CustomResponse) => {
  const id = req.params.id
  try {
    await Note.deleteOne({ _id: id })
    res.status(204)
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
}

export { deleteNote }
