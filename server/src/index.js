const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
require('dotenv').config()
app.use(cors())
const connect = require("./db/connect")

const port = process.env.PORT
const userRoute = require("./routes/user")
connect()
 

app.use(userRoute)



app.listen(port, () => {
  console.log(`Server is running on localhost ${port}`)
})