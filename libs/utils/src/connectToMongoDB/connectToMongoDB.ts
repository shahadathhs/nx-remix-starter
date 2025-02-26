import mongoose from 'mongoose'

export const connectToMongoDB = async (port: number, db_url: string) => {
  try {
    // * Check if the connection is already established
    if (mongoose.connection.readyState === 1) {
      const serverStatus = {
        status: 'Success',
        message: 'Server and database are running smoothly.',
        details: {
          mongoDB: 'Database Is Already connected',
          server: 'Stable',
          port,
        },
      }

      console.log(serverStatus)
      return
    }

    // * Establish the connection
    await mongoose.connect(db_url)
    const serverStatus = {
      status: 'Success',
      message: 'Server and database are running smoothly.',
      details: {
        mongoDB: 'Connected',
        server: 'Stable',
        port,
      },
    }

    console.log(serverStatus)
  } catch (err) {
    console.error({ mongoErr: err })
    const serverStatus = {
      status: 'Error',
      message: 'Server or database encountered an issue.',
      errorDetails: {
        mongoDB: 'Failed to connect',
        server: 'Unstable',
        port,
      },
      timestamp: new Date().toISOString(),
    }

    console.error(serverStatus)

    process.exit(1)
  }
}
