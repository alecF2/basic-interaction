import './App.css';

import axios from 'axios'
import { useState } from 'react'

function App() {
  const [nameInput, setNameInput] = useState("")
  const [nameAgeInput, setNameAgeInput] = useState("")
  const [ageString, setAgeString] = useState("")

  const handleGetRequest = async (e) => {
    const response = await axios.get("http://localhost:4000/hello_world")
    const data = response.data
    console.log(data)
  }

  const handleGreetRequest = async (e) => {
    e.preventDefault()
    const body = {
      name: nameInput
    }
    const response = await axios.post("http://localhost:4000/greet_name", body)
    const data = response.data
    console.log(data)
  }

  const handleAgeRequest = async (e) => {
    e.preventDefault()
    const body = {
      name: nameAgeInput
    }
    const response = await axios.post("http://localhost:4000/guess_age", body)
    const data = response.data
    console.log(data)
    setAgeString(`${nameAgeInput} is estimated to be ${data.age} years old.`)
  }

  return (
    <>
      <button onClick={handleGetRequest}>click to make a GET request!</button>
      <br />
      <form onSubmit={handleGreetRequest}>
        <input type="text" onChange={(e) => setNameInput(e.target.value)} placeholder="Enter your name" />
        <input type="submit" />
      </form>
      <form onSubmit={handleAgeRequest}>
        <input type="text" onChange={(e) => setNameAgeInput(e.target.value)} placeholder="Enter your name to determine your age" />
        <input type="submit" />
      </form>
      <h3>{ageString}</h3>
    </>
  );
}

export default App;
