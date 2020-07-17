import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Details from './Details'

axios
  .get("https://api.nasa.gov/planetary/apod?api_key=yRKpI5VqoJq7Vfz6WxvOqFBT6NzQCBzBUDV5zcCK")
  .then((res) => {
    console.log(res)
  })
  .catch((err) => console.log(err));

function App() {

  const [ friends, setFriends] = useState([])

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=yRKpI5VqoJq7Vfz6WxvOqFBT6NzQCBzBUDV5zcCK")
    .then(res => {
      setFriends(res.data)
    })
    .catch(err => {
      console.log('error')
    })
}, [])


  return (
    <div className="App">
  
    {
      <Details/>
    }
    </div>
  )
}

export default App;
