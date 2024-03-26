import { Router } from 'express'

import { CustomRequest } from '../models/request'
import { CustomResponse } from '../models/response'

import { getNotes, getNote } from './getNotes'
import { saveNote } from './saveNote'
import { updateNote } from './updateNote'
import { deleteNote } from './deleteNote'

const router = Router()

router.route('/notes').get(getNotes) // get all notes
router.route('/note/:id').get(getNote) // get note

router.route('/note').post(saveNote) // save one note
router.route('/note/:id').put(updateNote) // update one note

router.route('/note/:id').delete(deleteNote) // delete one note

router.use('*', (req: CustomRequest, res: CustomResponse) => {
  res.status(404).json({ message: 'Route Not Found' })
})

export { router }
