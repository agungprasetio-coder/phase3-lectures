const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
require("./config/config.js")
const routes = require("./routes")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/", routes)

app.listen(PORT, function(){
  console.log("server is running")
})





