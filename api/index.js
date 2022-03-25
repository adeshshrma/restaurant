require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

// connect to db
const connectDB = require('./db/connect')

// routers
const ItemsRouter = require('./routes/items')
const BillRouter = require('./routes/bill')

// routes
app.use('/api/items', ItemsRouter)
app.use('/api/bills', BillRouter)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
