import { CustomRequest } from '../models/request'
import { CustomResponse } from '../models/response'

import Note from '../models/notes'

const getNote = async (req: CustomRequest, res: CustomResponse) => {
  const id = req.params.id
  try {
    const notes = await Note.find({ _id: id }, { _id: 1, title: 1, content: 1 })
    if (!notes || !notes.length) {
      res.status(404).json({ message: 'Note Not Found' })
    } else {
      res.status(201).json(notes)
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).toString() })
  }
}

const getNotes = async (req: CustomRequest, res: CustomResponse) => {
  try {
    const notes = await Note.find({}, { _id: 1 })
    res.json(notes)
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
}

export { getNote, getNotes }
