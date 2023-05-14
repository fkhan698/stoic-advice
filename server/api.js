import { Configuration, OpenAIApi } from "openai"

import dotenv from "dotenv"

dotenv.config()

const API_KEY = process.env.API_KEY

if (!API_KEY) {
  console.error("OPEN_API_KEY is not set")
  process.exit(1)
}

const configuration = new Configuration({
  apiKey: process.env.API_KEY
})

const openai = new OpenAIApi(configuration)

export default openai
