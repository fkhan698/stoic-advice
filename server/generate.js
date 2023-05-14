import openaiClient from "./api.js"

const generate = async (queryDescription) => {
  const daVinci = async (queryDescription) => {
    const response = await openaiClient.createCompletion({
      model: "text-davinci-003",
      prompt: `Generate me some stoic wisdom based off the following description. Make it conversational and kind${queryDescription} `,
      max_tokens: 170,
      temperature: 0.8,
      top_p: 1,
      frequency_penalty: 1,
      presence_penalty: 0.7
    })
    return response.data.choices[0].text
  }
  const response = await daVinci(queryDescription)
  return response
}
export default generate
