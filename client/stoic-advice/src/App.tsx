import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

function App() {
  const [userPrompt, setUserPrompt] = useState("")
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const input = await generateQuery()
    setQuery(input)
    setUserPrompt("")
  }

  const generateQuery = async () => {
    const response = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ queryDescription: userPrompt })
    })
    const data = await response.json()
    setLoading(false)
    return data.query
  }

  return (
    <main>
      <h1>Stoic Advice</h1>
      <form onSubmit={onSubmit}>
        <input
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>{query}</p>
          </div>
        )}
      </div>
    </main>
  )
}

export default App
