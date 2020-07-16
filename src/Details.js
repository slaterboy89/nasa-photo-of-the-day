import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Details(props) {
    const { fr } = props
    const [details, setDetails] = useState(null)


useEffect(() => {
    console.log(` Details mounted `)
    return () => console.log(`Details being removed`)
  }, [])

  useEffect(() => {
    console.log(`🥵 Details for user with id ${fr} was DOM operated on`)
    return () => {
      console.log(`🥵 Cleaning up after user with id ${fr}`)
    }
  })

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=yRKpI5VqoJq7Vfz6WxvOqFBT6NzQCBzBUDV5zcCK")
      .then(res => {
        setDetails(res.data)
      })
      .catch(err => {
        console.log(`The error was ${err}`)
      })
  }, [fr])

  return (
    <div className='container'>
    
      {
        details &&
        <>
          <h2>{details.title}</h2>
          <img src = {details.url} alt = 'Pic of the Day'/>
          <p>{details.explanation}</p>
        </>
      }
    </div>
  )
}