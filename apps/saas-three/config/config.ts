import dotenv from 'dotenv'
import path from 'path'

// ** Load Environment Variables **
dotenv.config({ path: path.join(process.cwd(), '.env') })

export const configuration = {
  env: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT) || 3503,
  db_url: process.env.MONGODB_URL || 'mongodb://localhost:27017/test',
}
