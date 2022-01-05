const express = require('express')
const app = express()
const port = 4000

const cors = require('cors')
const axios = require('axios').default

app.use(cors({
  origin: "*"
}))

app.use(express.json())

app.get("/hello_world", (req, res) => {
  console.log("get request received")

  // send a response with requested data back
  res.send({
    message: "hello world!"
  })
})

app.post("/greet_name", (req, res) => {
  console.log("post request received")
  const body = req.body
  const name = body.name

  // send a response back to end the request
  res.send({
    message: `hello ${name}!`
  })
})

app.post("/guess_age", async (req, res) => {
  console.log("guess age request received")
  const body = req.body
  const name = body.name

  // make a request to Agify to get required info
  const response = await axios.get(`https://api.agify.io?name=${name}`)
  const data = response.data
  console.log(response)
  // console.log(data)

  // send back the info we received
  res.send({
    age: data.age
  })
})

app.listen(port, () => {
  console.log(`listening on port ${port}!`)
})
