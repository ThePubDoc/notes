import express from 'express'
import { router } from './routes/routes'
import { connectDB } from './config/mongo'

const app = express()
const port = 3000

const init = async () => {
  // Load all dependecies on the app start
  await connectDB()
}

init()
  .then(() => {
    app.use(express.json())
    app.use('/', router)
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`)
    })
  })
  .catch((err) => {
    console.error(`Failed to initialize all dependecies`, err)
    process.exit(1)
  })
