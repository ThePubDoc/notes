import { CustomRequest } from '../models/request'
import { CustomResponse } from '../models/response'

import Note from '../models/notes'

const saveNote = async (req: CustomRequest, res: CustomResponse) => {
  const body = req.body
  const title = body.title
  const content = body.content

  const note = new Note({
    title: title,
    content: content
  })
  try {
    const savedNote = await note.save()

    res.status(201).json({ id: savedNote['_id'] })
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
}

export { saveNote }
