import mongoose from 'mongoose'

const env = process.env.NODE_ENV || 'local'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require(`../../config/${env}.json`)

const DB_URL = config.mongodb

export const connectDB = async () => {
  const mongoURI = DB_URL
  await mongoose.connect(mongoURI)
}
