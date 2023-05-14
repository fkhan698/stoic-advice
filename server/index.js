import express from "express"
import cors from "cors"
import generate from "./generate.js"
const app = express()
app.use(express.json())

app.use(cors())

const port = process.env.PORT || 8000

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.post("/generate", async (req, res) => {
  const { queryDescription } = req.body
  try {
    const query = await generate(queryDescription)
    console.log(queryDescription)
    res.json({ query })
  } catch (error) {
    console.log(error)
    res.status(500).send("Internal Server Error")
  }
})

app.listen(port, () => {
  console.log("Listening on port " + port)
})
