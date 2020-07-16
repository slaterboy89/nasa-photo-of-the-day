import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Image from './Image.js'
const StyledDetails = styled.div`
background: rgb(101,17,67);
background: radial-gradient(circle, rgba(101,17,67,1) 0%, rgba(120,95,120,1) 50%, rgba(0,0,0,1) 83%);
width: auto;
height: auto;
h1{
  color: white;
}
h2{
  margin-top: 10vh
  display: flex;
  color: white;
}

h4{
  color: white;
}

p{
display: flex;
flex-wrap: wrap;
font-size: 2vw;
color: white;
}

div{
  display: flex;
}
`



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
    <StyledDetails className='container'>
    
      {
        details &&
        <>
          <h1>Astronomy Picture Of The Day</h1>
          <h2>{details.title}</h2>
          <h4>{details.date}</h4>
          <div classname = 'testDiv'>
          <Image src = {details.url} alt = 'Pic of the Day'/>
          
          <p>{details.explanation}</p>
          </div>
        </>
      }
    </StyledDetails>
  )
}